#!/usr/bin/env python3
"""
Read-only Zotero -> GitHub audit for the PhD Theoretical framework collection.
"""
from __future__ import annotations
import datetime as dt
import json
import os
import pathlib
import re
import sys
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from collections import Counter, defaultdict

ROOT = pathlib.Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "public" / "docs"
MANIFEST_PATH = ROOT / "data" / "zotero-theoretical-framework.json"
AUDIT_JSON_PATH = ROOT / "audits" / "year2-theoretical-framework-audit.json"
AUDIT_MD_PATH = ROOT / "audits" / "year2-theoretical-framework-audit.md"
API_BASE = "https://api.zotero.org"
USER_ID = os.environ.get("ZOTERO_USER_ID", "").strip()
API_KEY = os.environ.get("ZOTERO_API_KEY", "").strip()
ROOT_COLLECTION_NAME = os.environ.get("ZOTERO_ROOT_COLLECTION", "Theoretical framework").strip()

PLACEHOLDER_PATTERNS = [
    r"^\s*$", r"\bTODO\b", r"\bp\.\s*X\b",
    r"what the source explicitly argues", r"what the cited material warrants",
    r"my inference / working proposition", r"why the evidence supports the claim",
    r"what this evidence does not establish", r"what this changes for my thesis",
    r"where my material supports", r"write one analytical paragraph",
]

def fail(message: str, code: int = 1) -> None:
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(code)

def zotero_get(path: str, params=None):
    if not USER_ID or not API_KEY:
        fail("ZOTERO_USER_ID and ZOTERO_API_KEY must both be set")
    query = urllib.parse.urlencode(params or {})
    url = f"{API_BASE}{path}" + (f"?{query}" if query else "")
    req = urllib.request.Request(
        url,
        headers={
            "Zotero-API-Key": API_KEY,
            "Zotero-API-Version": "3",
            "User-Agent": "reading-notes-theoretical-framework-audit/1.0",
            "Accept": "application/json",
        },
        method="GET",
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")[:500]
        fail(f"Zotero API GET failed with HTTP {exc.code}: {body}")
    except urllib.error.URLError as exc:
        fail(f"Zotero API GET failed: {exc.reason}")

def zotero_paginated(path: str, extra=None):
    out, start, limit = [], 0, 100
    while True:
        params = {"limit": limit, "start": start}
        if extra:
            params.update(extra)
        page = zotero_get(path, params)
        if not isinstance(page, list):
            fail(f"Expected a list from Zotero endpoint {path}")
        out.extend(page)
        if len(page) < limit:
            return out
        start += limit

def clean_text(value) -> str:
    return str(value or "").strip()

def normalize_doi(value: str) -> str:
    v = clean_text(value).lower()
    v = re.sub(r"^https?://(dx\.)?doi\.org/", "", v)
    v = re.sub(r"^doi:\s*", "", v)
    return v.rstrip(" .;,)")

def normalize_isbn(value: str) -> str:
    return re.sub(r"[^0-9Xx]", "", clean_text(value)).upper()

def normalize_title(value: str) -> str:
    v = unicodedata.normalize("NFKD", clean_text(value)).casefold()
    v = "".join(ch for ch in v if not unicodedata.combining(ch))
    v = re.sub(r"[^\w\s]", " ", v, flags=re.UNICODE)
    return re.sub(r"\s+", " ", v).strip()

def extract_year(value: str) -> str:
    m = re.search(r"\b(18|19|20|21)\d{2}\b", clean_text(value))
    return m.group(0) if m else ""

def creator_string(creators) -> str:
    parts = []
    for c in creators or []:
        if c.get("name"):
            parts.append(clean_text(c["name"]))
            continue
        last, first = clean_text(c.get("lastName")), clean_text(c.get("firstName"))
        if last and first:
            parts.append(f"{last}, {first}")
        elif last or first:
            parts.append(last or first)
    return "; ".join(parts)

def citation_key_from_extra(extra: str) -> str:
    for line in clean_text(extra).splitlines():
        m = re.match(r"\s*Citation Key\s*:\s*(.+?)\s*$", line, flags=re.I)
        if m:
            return m.group(1).strip()
    return ""

def load_collections():
    raw = zotero_paginated(f"/users/{USER_ID}/collections")
    records = {}
    for row in raw:
        data = row.get("data", {})
        key = clean_text(data.get("key") or row.get("key"))
        if key:
            records[key] = {
                "key": key,
                "name": clean_text(data.get("name")),
                "parent": clean_text(data.get("parentCollection")) or None,
                "version": data.get("version") or row.get("version"),
            }
    return records

def select_collection_tree(collections):
    roots = [c for c in collections.values() if c["name"].casefold() == ROOT_COLLECTION_NAME.casefold()]
    if not roots:
        fail(f'Could not find Zotero collection named "{ROOT_COLLECTION_NAME}"')
    if len(roots) > 1:
        top_level = [c for c in roots if not c["parent"]]
        if len(top_level) != 1:
            fail(f'Found {len(roots)} collections named "{ROOT_COLLECTION_NAME}"')
        root = top_level[0]
    else:
        root = roots[0]
    children = defaultdict(list)
    for c in collections.values():
        if c["parent"]:
            children[c["parent"]].append(c["key"])
    selected, stack = set(), [root["key"]]
    while stack:
        key = stack.pop()
        if key in selected:
            continue
        selected.add(key)
        stack.extend(children.get(key, []))
    def path_for(key: str) -> str:
        names, seen, current = [], set(), key
        while current and current not in seen:
            seen.add(current)
            c = collections.get(current)
            if not c:
                break
            names.append(c["name"])
            if current == root["key"]:
                break
            current = c["parent"]
        return " / ".join(reversed(names))
    return root, selected, path_for

def fetch_items_for_tree(selected, path_for):
    items, path_counts = {}, Counter()
    for collection_key in sorted(selected, key=path_for):
        collection_path = path_for(collection_key)
        rows = zotero_paginated(f"/users/{USER_ID}/collections/{collection_key}/items/top")
        for row in rows:
            data = row.get("data", {})
            key = clean_text(data.get("key") or row.get("key"))
            if not key:
                continue
            path_counts[collection_path] += 1
            rec = items.setdefault(key, {
                "zotero_item_key": key,
                "version": data.get("version") or row.get("version"),
                "item_type": clean_text(data.get("itemType")),
                "title": clean_text(data.get("title")),
                "creators": creator_string(data.get("creators", [])),
                "creators_raw": data.get("creators", []),
                "date": clean_text(data.get("date")),
                "year": extract_year(data.get("date")),
                "publisher": clean_text(data.get("publisher")),
                "publication_title": clean_text(data.get("publicationTitle") or data.get("bookTitle") or data.get("proceedingsTitle")),
                "doi": normalize_doi(data.get("DOI")),
                "isbn": normalize_isbn(data.get("ISBN")),
                "url": clean_text(data.get("url")),
                "tags": sorted({clean_text(t.get("tag")) for t in data.get("tags", []) if clean_text(t.get("tag"))}),
                "citation_key": citation_key_from_extra(data.get("extra")),
                "collection_paths": [],
            })
            if collection_path not in rec["collection_paths"]:
                rec["collection_paths"].append(collection_path)
    for rec in items.values():
        rec["collection_paths"].sort()
    ordered = sorted(items.values(), key=lambda x: (x["collection_paths"][0] if x["collection_paths"] else "", normalize_title(x["title"]), x["zotero_item_key"]))
    return ordered, dict(sorted(path_counts.items()))

def frontmatter_value(text: str, key: str) -> str:
    m = re.search(rf"(?m)^\s*{re.escape(key)}\s*:\s*(.*?)\s*$", text)
    if not m:
        return ""
    value = m.group(1).strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {'"', "'"}:
        value = value[1:-1]
    return value.strip()

def scan_notes():
    notes = []
    if not DOCS_DIR.exists():
        return notes
    for path in sorted(DOCS_DIR.rglob("*.md")):
        rel = path.relative_to(ROOT).as_posix()
        text = path.read_text(encoding="utf-8", errors="replace")
        title = frontmatter_value(text, "title")
        if not title:
            m = re.search(r"(?m)^#\s+(.+?)\s*$", text)
            title = m.group(1).strip() if m else ""
        notes.append({
            "path": rel,
            "title": title,
            "year": frontmatter_value(text, "year"),
            "doi": normalize_doi(frontmatter_value(text, "doi")),
            "isbn": normalize_isbn(frontmatter_value(text, "isbn")),
            "citation_key": frontmatter_value(text, "citation_key"),
            "theoretical_framework_area_id": frontmatter_value(text, "theoretical_framework_area_id"),
            "theoretical_framework_area": frontmatter_value(text, "theoretical_framework_area"),
            "literature_cluster_id": frontmatter_value(text, "literature_cluster_id"),
            "literature_cluster": frontmatter_value(text, "literature_cluster"),
            "zotero_filing_path": frontmatter_value(text, "zotero_filing_path"),
            "is_theoretical_framework": ("Theoretical framework" in text or bool(frontmatter_value(text, "theoretical_framework_area"))),
            "_text": text,
        })
    return notes

def match_score(item, note):
    score, reasons = 0, []
    if item["doi"] and note["doi"] and item["doi"] == note["doi"]:
        score, reasons = max(score, 100), reasons + ["DOI exact"]
    if item["isbn"] and note["isbn"] and item["isbn"] == note["isbn"]:
        score, reasons = max(score, 95), reasons + ["ISBN exact"]
    if item.get("citation_key") and note.get("citation_key") and item["citation_key"] == note["citation_key"]:
        score, reasons = max(score, 98), reasons + ["citation key exact"]
    it, nt = normalize_title(item["title"]), normalize_title(note["title"])
    iy, ny = clean_text(item.get("year")), extract_year(note.get("year", ""))
    if it and nt and it == nt:
        if iy and ny and iy == ny:
            score, reasons = max(score, 90), reasons + ["title + year exact"]
        else:
            score, reasons = max(score, 80), reasons + ["title exact"]
    return score, reasons

def field_value(block: str, label: str) -> str:
    m = re.search(rf"(?m)^-\s*\*\*{re.escape(label)}[^*]*\*\*:\s*(.*?)\s*$", block)
    return m.group(1).strip() if m else ""

def is_placeholder(value: str) -> bool:
    v = clean_text(value)
    return any(re.search(p, v, flags=re.I) for p in PLACEHOLDER_PATTERNS)

def claim_blocks(text: str):
    matches = list(re.finditer(r"(?m)^##\s+Claim\s+(\d+)\s*$", text))
    out = {}
    for idx, m in enumerate(matches):
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        out[int(m.group(1))] = text[m.end():end]
    return out

def section_text(text: str, heading: str) -> str:
    m = re.search(rf"(?m)^#\s+{re.escape(heading)}\s*$", text)
    if not m:
        return ""
    nxt = re.search(r"(?m)^#\s+", text[m.end():])
    end = m.end() + nxt.start() if nxt else len(text)
    return text[m.end():end].strip()

def audit_note(note):
    text, blocks = note["_text"], claim_blocks(note["_text"])
    labels = ["Claim (plain)", "Author claim", "Evidence-supported claim", "Researcher inference", "Evidence (quote/paraphrase + page)", "Warrant (my words)", "Boundary", "Consequence", "Practice cross-check"]
    claim_checks, complete_count = {}, 0
    for n in range(1, 7):
        block = blocks.get(n, "")
        values = {label: field_value(block, label) for label in labels}
        missing = [label for label, value in values.items() if not value or is_placeholder(value)]
        page_evidence = values.get("Evidence (quote/paraphrase + page)", "")
        has_page_or_todo = bool(re.search(r"\bpp?\.\s*\d+", page_evidence, flags=re.I) or "TODO" in page_evidence)
        if not has_page_or_todo:
            missing.append("page reference or TODO")
        complete = bool(block) and not missing
        if complete:
            complete_count += 1
        claim_checks[str(n)] = {"present": bool(block), "complete": complete, "missing_or_placeholder": sorted(set(missing))}
    synthesis = section_text(text, "Cross-source / cross-lens synthesis")
    synthesis_complete = bool(synthesis) and not is_placeholder(synthesis)
    markers = {
        "thesis_job": "# Thesis job" in text,
        "six_claim_ledger": "# Six-claim evidence ledger" in text,
        "voice_separation": all(x in text for x in ["**Author claim:**", "**Evidence-supported claim:**", "**Researcher inference:**"]),
        "synthesis_section": "# Cross-source / cross-lens synthesis" in text,
        "chicago_payload": "# Chicago NB payload" in text,
    }
    metadata_complete = all([note["theoretical_framework_area_id"], note["theoretical_framework_area"], note["literature_cluster_id"], note["literature_cluster"], note["zotero_filing_path"]])
    compliant = metadata_complete and all(markers.values()) and complete_count >= 6 and synthesis_complete
    reasons = []
    if not metadata_complete:
        reasons.append("missing Zotero-parity framework metadata")
    for marker, ok in markers.items():
        if not ok:
            reasons.append(f"missing structure: {marker}")
    if complete_count < 6:
        reasons.append(f"only {complete_count}/6 claims pass completeness check")
    if not synthesis_complete:
        reasons.append("final synthesis is missing, placeholder, or TODO")
    return {"compliant": compliant, "complete_claims": complete_count, "claim_checks": claim_checks, "synthesis_complete": synthesis_complete, "metadata_complete": metadata_complete, "required_markers": markers, "reasons": reasons}

def build_audit(items, notes):
    results, matched = [], set()
    for item in items:
        scored = []
        for note in notes:
            score, reasons = match_score(item, note)
            if score:
                scored.append((score, note["path"], reasons, note))
        scored.sort(key=lambda x: (-x[0], x[1]))
        if not scored:
            results.append({"status": "FIRST PASS REQUIRED", "item": item, "note_path": None, "match_score": 0, "match_reasons": [], "audit": None})
            continue
        top_score = scored[0][0]
        top = [row for row in scored if row[0] == top_score]
        if len(top) > 1 or top_score < 80:
            results.append({"status": "REVIEW MATCH", "item": item, "note_path": None, "match_score": top_score, "match_reasons": [{"path": row[1], "score": row[0], "reasons": row[2]} for row in top[:5]], "audit": None})
            continue
        _, note_path, match_reasons, note = top[0]
        matched.add(note_path)
        na = audit_note(note)
        results.append({"status": "COMPLIANT" if na["compliant"] else "SECOND PASS REQUIRED", "item": item, "note_path": note_path, "match_score": top_score, "match_reasons": match_reasons, "audit": na})
    repo_only = [{"path": n["path"], "title": n["title"], "year": n["year"], "theoretical_framework_area": n["theoretical_framework_area"], "literature_cluster": n["literature_cluster"], "zotero_filing_path": n["zotero_filing_path"]} for n in notes if n["is_theoretical_framework"] and n["path"] not in matched]
    return results, repo_only

def is_active_cluster_path(path: str) -> bool:
    return bool(re.search(r" / [abc]\) ", path))


def split_active_and_deferred(items):
    active, deferred = [], []
    for item in items:
        active_paths = [p for p in item.get("collection_paths", []) if is_active_cluster_path(p)]
        placeholder_paths = [p for p in item.get("collection_paths", []) if not is_active_cluster_path(p)]
        clone = dict(item)
        clone["active_collection_paths"] = active_paths
        clone["placeholder_collection_paths"] = placeholder_paths
        if active_paths:
            clone["collection_paths"] = active_paths
            active.append(clone)
        else:
            deferred.append(clone)
    return active, deferred


def collection_parity_warnings(collection_paths):
    warnings = []
    for path in collection_paths:
        if "histriography" in path.casefold():
            warnings.append({"path": path, "warning": "Zotero collection label appears misspelled: 'histriography' should match North Star 'historiography'."})
    return warnings


def write_json(path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

def esc(value):
    return clean_text(value).replace("|", "\\|").replace("\n", " ")

def build_markdown(payload):
    summary = payload["summary"]
    lines = ["# Year 2 Critical Literature Pass — Theoretical framework audit", "", f"Generated: {payload['generated_at']}", "", "Scoped to the active Zotero **Theoretical framework** clusters **a) Canon + intellectual lineage**, **b) Operational literature**, and **c) Contemporary bridge literature**. Placeholder folders **d) Z** and **e) ADD** are inventoried separately, in parity with the North Star. Zotero access is read-only; this audit does not rewrite notes.", "", "## Status summary", "", "| Status | Count |", "| --- | ---: |"]
    for status in ["COMPLIANT", "SECOND PASS REQUIRED", "FIRST PASS REQUIRED", "REVIEW MATCH"]:
        lines.append(f"| {status} | {summary['status_counts'].get(status, 0)} |")
    lines += ["", f"**Active Zotero items in scope:** {summary['zotero_item_count']}", f"**Deferred placeholder-only items (d/e):** {summary['deferred_placeholder_item_count']}", f"**Repo-only theoretical-framework notes needing parity review:** {summary['repo_only_note_count']}", "", "## Active Zotero collection counts", "", "| Collection path | Top-level items |", "| --- | ---: |"]
    for path, count in payload["collection_item_counts"].items():
        lines.append(f"| {esc(path)} | {count} |")
    if payload.get("collection_parity_warnings"):
        lines += ["", "## Collection parity warnings", ""]
        for w in payload["collection_parity_warnings"]:
            lines.append(f"- {esc(w['warning'])} — {esc(w['path'])}")
    lines += ["", "## Deferred placeholder inventory", ""]
    deferred = payload.get("deferred_placeholder_items", [])
    if not deferred:
        lines.append("_None._")
    else:
        lines += ["These sources live only in placeholder folders **d) Z** or **e) ADD** and are not part of the active Year 2 pass until re-filed into a/b/c.", "", "| Zotero path | Source | Year |", "| --- | --- | ---: |"]
        for item in deferred:
            lines.append(f"| {esc('<br>'.join(item.get('collection_paths', [])))} | {esc(item.get('title',''))} | {esc(item.get('year',''))} |")
    by_status = defaultdict(list)
    for r in payload["results"]:
        by_status[r["status"]].append(r)
    for status in ["SECOND PASS REQUIRED", "FIRST PASS REQUIRED", "REVIEW MATCH", "COMPLIANT"]:
        lines += ["", f"## {status}", ""]
        rows = by_status.get(status, [])
        if not rows:
            lines.append("_None._")
            continue
        lines += ["| Zotero path | Source | Year | Existing note | Why |", "| --- | --- | ---: | --- | --- |"]
        for r in rows:
            item = r["item"]
            paths = "<br>".join(item.get("collection_paths", []))
            source = item.get("title") or f"[untitled {item['zotero_item_key']}]"
            note = r.get("note_path") or ""
            if status == "SECOND PASS REQUIRED":
                why = "; ".join((r.get("audit") or {}).get("reasons", []))
            elif status == "REVIEW MATCH":
                why = "ambiguous/uncertain repo match"
            elif status == "FIRST PASS REQUIRED":
                why = "no matching reading note"
            else:
                why = "meets current structural and completeness checks"
            lines.append(f"| {esc(paths)} | {esc(source)} | {esc(item.get('year',''))} | {esc(note)} | {esc(why)} |")
    lines += ["", "## Repo-only theoretical-framework notes", ""]
    if not payload["repo_only_theoretical_framework_notes"]:
        lines.append("_None._")
    else:
        lines += ["These GitHub notes declare theoretical-framework metadata but did not match an item in the current Zotero Theoretical framework tree. Review before deleting or re-filing anything.", "", "| Note | Title | Filing path |", "| --- | --- | --- |"]
        for n in payload["repo_only_theoretical_framework_notes"]:
            lines.append(f"| {esc(n['path'])} | {esc(n['title'])} | {esc(n['zotero_filing_path'])} |")
    lines += ["", "## Interpretation", "", "- **COMPLIANT**: matched note meets the current structural/completeness checks.", "- **SECOND PASS REQUIRED**: matching note exists but does not yet meet the enhanced Year 2 constraints.", "- **FIRST PASS REQUIRED**: Zotero source exists in scope but no matching GitHub note was found.", "- **REVIEW MATCH**: automated matching is ambiguous and needs a human decision.", "", "This is a triage instrument, not a scholarly judgement. Structural compliance does not guarantee intellectual quality; a valuable legacy note may fail because it predates the new template.", ""]
    return "\n".join(lines)

def main():
    generated_at = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()
    collections = load_collections()
    root_collection, selected, path_for = select_collection_tree(collections)
    all_items, all_counts = fetch_items_for_tree(selected, path_for)
    items, deferred_items = split_active_and_deferred(all_items)
    active_counts = {path: count for path, count in all_counts.items() if is_active_cluster_path(path)}
    manifest = {"generated_at": generated_at, "zotero_user_id": USER_ID, "scope": {"root_collection_name": root_collection["name"], "root_collection_key": root_collection["key"], "collection_count": len(selected), "read_only": True, "active_clusters": ["a", "b", "c"], "placeholder_clusters": ["d", "e"]}, "collection_item_counts": all_counts, "active_collection_item_counts": active_counts, "item_count": len(all_items), "active_item_count": len(items), "deferred_placeholder_item_count": len(deferred_items), "items": all_items}
    write_json(MANIFEST_PATH, manifest)
    notes = scan_notes()
    results, repo_only = build_audit(items, notes)
    status_counts = Counter(r["status"] for r in results)
    payload = {"generated_at": generated_at, "scope": manifest["scope"], "collection_item_counts": active_counts, "collection_parity_warnings": collection_parity_warnings(all_counts.keys()), "deferred_placeholder_items": deferred_items, "summary": {"zotero_item_count": len(items), "deferred_placeholder_item_count": len(deferred_items), "github_note_count_scanned": len(notes), "status_counts": {s: status_counts.get(s, 0) for s in ["COMPLIANT", "SECOND PASS REQUIRED", "FIRST PASS REQUIRED", "REVIEW MATCH"]}, "repo_only_note_count": len(repo_only)}, "results": results, "repo_only_theoretical_framework_notes": repo_only}
    write_json(AUDIT_JSON_PATH, payload)
    AUDIT_MD_PATH.parent.mkdir(parents=True, exist_ok=True)
    AUDIT_MD_PATH.write_text(build_markdown(payload), encoding="utf-8")
    print("Zotero Theoretical framework audit complete: " + f"{len(items)} items; " + ", ".join(f"{s}={status_counts.get(s,0)}" for s in ["COMPLIANT","SECOND PASS REQUIRED","FIRST PASS REQUIRED","REVIEW MATCH"]) + f"; repo-only notes={len(repo_only)}")

if __name__ == "__main__":
    main()
