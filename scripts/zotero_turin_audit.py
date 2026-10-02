#!/usr/bin/env python3
"""Read-only Zotero -> GitHub Year 2 audit for the Turin conference paper collection."""
from __future__ import annotations
import datetime as dt, json, pathlib, re, sys
from collections import Counter, defaultdict
import zotero_tf_audit as base

ROOT = pathlib.Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "data" / "zotero-turin-conference-paper.json"
AUDIT_JSON_PATH = ROOT / "audits" / "year2-turin-conference-paper-audit.json"
AUDIT_MD_PATH = ROOT / "audits" / "year2-turin-conference-paper-audit.md"
ROOT_COLLECTION_NAME = "Turin conference paper"

def select_root(collections):
    roots=[c for c in collections.values() if c["name"].casefold()==ROOT_COLLECTION_NAME.casefold()]
    if not roots:
        base.fail(f'Could not find Zotero collection named "{ROOT_COLLECTION_NAME}"')
    if len(roots)>1:
        top=[c for c in roots if not c["parent"]]
        if len(top)!=1: base.fail(f'Found {len(roots)} collections named "{ROOT_COLLECTION_NAME}"')
        root=top[0]
    else:
        root=roots[0]
    children=defaultdict(list)
    for c in collections.values():
        if c["parent"]: children[c["parent"]].append(c["key"])
    selected=set(); stack=[root["key"]]
    while stack:
        k=stack.pop()
        if k in selected: continue
        selected.add(k); stack.extend(children.get(k,[]))
    def path_for(k):
        names=[]; seen=set(); cur=k
        while cur and cur not in seen:
            seen.add(cur); c=collections.get(cur)
            if not c: break
            names.append(c["name"])
            if cur==root["key"]: break
            cur=c["parent"]
        return " / ".join(reversed(names))
    return root, selected, path_for

def audit_note(note):
    text=note["_text"]; blocks=base.claim_blocks(text)
    labels=["Claim (plain)","Author claim","Evidence-supported claim","Researcher inference",
            "Evidence (quote/paraphrase + page)","Warrant (my words)","Boundary","Consequence","Practice cross-check"]
    checks={}; complete_count=0
    for n in range(1,7):
        block=blocks.get(n,"")
        vals={lab:base.field_value(block,lab) for lab in labels}
        missing=[lab for lab,val in vals.items() if not val or (lab!="Practice cross-check" and base.is_placeholder(val))]
        ev=vals.get("Evidence (quote/paraphrase + page)","")
        if not (re.search(r"\bpp?\.\s*\d+",ev,re.I) or "TODO" in ev):
            missing.append("page reference or TODO")
        complete=bool(block) and not missing
        if complete: complete_count+=1
        checks[str(n)]={"present":bool(block),"complete":complete,"missing_or_placeholder":sorted(set(missing))}
    synth=base.section_text(text,"Cross-source / cross-lens synthesis")
    synth_ok=bool(synth) and not base.is_placeholder(synth)
    markers={
      "thesis_job":"# Thesis job" in text,
      "six_claim_ledger":"# Six-claim evidence ledger" in text,
      "voice_separation":all(x in text for x in ["**Author claim:**","**Evidence-supported claim:**","**Researcher inference:**"]),
      "synthesis_section":"# Cross-source / cross-lens synthesis" in text,
      "chicago_payload":"# Chicago NB payload" in text,
    }
    compliant=all(markers.values()) and complete_count>=6 and synth_ok
    reasons=[]
    for k,v in markers.items():
        if not v: reasons.append(f"missing structure: {k}")
    if complete_count<6: reasons.append(f"only {complete_count}/6 claims pass completeness check")
    if not synth_ok: reasons.append("final synthesis is missing, placeholder, or TODO")
    return {"compliant":compliant,"complete_claims":complete_count,"claim_checks":checks,
            "synthesis_complete":synth_ok,"required_markers":markers,"reasons":reasons}

def build(items, notes):
    results=[]; matched=set()
    for item in items:
        scored=[]
        for note in notes:
            score,reasons=base.match_score(item,note)
            if score: scored.append((score,note["path"],reasons,note))
        scored.sort(key=lambda x:(-x[0],x[1]))
        if not scored:
            results.append({"status":"FIRST PASS REQUIRED","item":item,"note_path":None,"match_score":0,"match_reasons":[],"audit":None}); continue
        top_score=scored[0][0]; top=[x for x in scored if x[0]==top_score]
        if len(top)>1 or top_score<80:
            results.append({"status":"REVIEW MATCH","item":item,"note_path":None,"match_score":top_score,
                            "match_reasons":[{"path":x[1],"score":x[0],"reasons":x[2]} for x in top[:5]],"audit":None}); continue
        _,p,reasons,note=top[0]; matched.add(p); na=audit_note(note)
        results.append({"status":"COMPLIANT" if na["compliant"] else "SECOND PASS REQUIRED",
                        "item":item,"note_path":p,"match_score":top_score,"match_reasons":reasons,"audit":na,
                        "overlaps_theoretical_framework":bool(note.get("is_theoretical_framework"))})
    return results

def esc(v): return str(v or "").replace("|","\\|").replace("\n"," ")

def build_md(payload):
    s=payload["summary"]
    lines=["# Year 2 Critical Literature Pass — Turin conference paper audit","",
           f"Generated: {payload['generated_at']}","",
           "Scoped to the complete Zotero **Turin conference paper** collection tree. Duplicate/cross-listed sources are matched to one canonical GitHub reading note; a newer theoretical-framework note therefore remains the canonical note rather than being overwritten by an older Turin version.","",
           "## Status summary","",
           "| Status | Count |","| --- | ---: |"]
    for st in ["COMPLIANT","SECOND PASS REQUIRED","FIRST PASS REQUIRED","REVIEW MATCH"]:
        lines.append(f"| {st} | {s['status_counts'].get(st,0)} |")
    lines += ["",f"**Unique Zotero items:** {s['zotero_item_count']}",
              f"**Cross-listed with the Theoretical framework baseline:** {s['theoretical_framework_overlap_count']}","",
              "## Collection counts","",
              "| Collection path | Top-level items |","| --- | ---: |"]
    for p,c in payload["collection_item_counts"].items(): lines.append(f"| {esc(p)} | {c} |")
    by=defaultdict(list)
    for r in payload["results"]: by[r["status"]].append(r)
    for st in ["SECOND PASS REQUIRED","FIRST PASS REQUIRED","REVIEW MATCH","COMPLIANT"]:
        lines += ["",f"## {st}",""]
        rows=by.get(st,[])
        if not rows: lines.append("_None._"); continue
        lines += ["| Zotero path | Source | Year | Canonical note | TF overlap | Why |",
                  "| --- | --- | ---: | --- | --- | --- |"]
        for r in rows:
            it=r["item"]; why=""
            if st=="SECOND PASS REQUIRED": why="; ".join((r.get("audit") or {}).get("reasons",[]))
            elif st=="FIRST PASS REQUIRED": why="no matching reading note"
            elif st=="REVIEW MATCH": why="ambiguous/uncertain repo match"
            else: why="meets Year 2 six-claim standard"
            lines.append(f"| {esc('<br>'.join(it.get('collection_paths',[])))} | {esc(it.get('title'))} | {esc(it.get('year'))} | {esc(r.get('note_path'))} | {'yes' if r.get('overlaps_theoretical_framework') else 'no'} | {esc(why)} |")
    lines += ["","## Interpretation","",
              "- **COMPLIANT**: canonical note meets the Year 2 six-claim, voice-separation, page-grounding and synthesis checks.",
              "- **SECOND PASS REQUIRED**: canonical note exists but needs the enhanced Year 2 pass.",
              "- **FIRST PASS REQUIRED**: source is in the Turin Zotero tree but has no matched reading note.",
              "- **REVIEW MATCH**: matching is ambiguous and requires a human decision.",""]
    return "\n".join(lines)

def main():
    generated=dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()
    cols=base.load_collections(); root,selected,path_for=select_root(cols)
    all_items,counts=base.fetch_items_for_tree(selected,path_for)
    # Treat edited volumes as bibliographic containers, not duplicate critical readings,
    # when a Turin bookSection shares the same DOI. The substantive chapter remains
    # the canonical reading unit.
    section_dois={x.get("doi") for x in all_items if x.get("item_type")=="bookSection" and x.get("doi")}
    containers=[x for x in all_items if x.get("item_type")=="book" and x.get("doi") in section_dois]
    container_keys={x["zotero_item_key"] for x in containers}
    items=[x for x in all_items if x["zotero_item_key"] not in container_keys]
    notes=base.scan_notes(); results=build(items,notes)
    status=Counter(r["status"] for r in results)
    manifest={"generated_at":generated,"zotero_user_id":base.USER_ID,"scope":{"root_collection_name":root["name"],"root_collection_key":root["key"],"collection_count":len(selected),"read_only":True},"collection_item_counts":counts,"item_count":len(all_items),"active_reading_count":len(items),"container_count":len(containers),"containers":containers,"items":all_items}
    base.write_json(MANIFEST_PATH,manifest)
    payload={"generated_at":generated,"scope":manifest["scope"],"collection_item_counts":counts,
             "containers":containers,
             "summary":{"zotero_item_count":len(all_items),"active_reading_count":len(items),"container_count":len(containers),"github_note_count_scanned":len(notes),
                        "theoretical_framework_overlap_count":sum(1 for r in results if r.get("overlaps_theoretical_framework")),
                        "status_counts":{s:status.get(s,0) for s in ["COMPLIANT","SECOND PASS REQUIRED","FIRST PASS REQUIRED","REVIEW MATCH"]}},
             "results":results}
    base.write_json(AUDIT_JSON_PATH,payload); AUDIT_MD_PATH.parent.mkdir(parents=True,exist_ok=True); AUDIT_MD_PATH.write_text(build_md(payload),encoding="utf-8")
    print("Turin audit:",len(items),"active readings +",len(containers),"container(s);",", ".join(f"{s}={status.get(s,0)}" for s in ["COMPLIANT","SECOND PASS REQUIRED","FIRST PASS REQUIRED","REVIEW MATCH"]))

if __name__=="__main__": main()
