#!/usr/bin/env bash
# Create a new reading note from a citekey, DOI or URL using a thesis-aligned template
# focused on the project research question(s) and the Zotero-aligned theoretical framework.

set -euo pipefail
umask 022

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <citekey|doi|url> [--build] [--lint]" >&2
  exit 1
fi

IDENT="$1"; shift || true

DO_BUILD=0
DO_LINT=0

for arg in "$@"; do
  case "$arg" in
    --build) DO_BUILD=1 ;;
    --lint)  DO_LINT=1 ;;
  esac
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

CSL_STYLE="${CSL_STYLE:-https://www.zotero.org/styles/chicago-fullnote-bibliography}"
BIB_PATH="${BIB:-${BIBLIOGRAPHY:-refs/library.bib}}"
NOTES_DIR="${NOTES_DIR:-public/docs}"
NORTH_STAR_PATH="${NORTH_STAR_PATH:-project/north-star.yml}"
CONSTRAINTS_PATH="${CONSTRAINTS_PATH:-project/constraints.md}"

mkdir -p "$NOTES_DIR"

command -v python3 >/dev/null 2>&1 || { echo "Error: python3 not found" >&2; exit 1; }
[[ -f "$BIB_PATH" ]] || { echo "Error: bibliography not found: $BIB_PATH" >&2; exit 1; }
[[ -f "$NORTH_STAR_PATH" ]] || { echo "Error: north star not found: $NORTH_STAR_PATH" >&2; exit 1; }
[[ -f "$CONSTRAINTS_PATH" ]] || { echo "Error: constraints not found: $CONSTRAINTS_PATH" >&2; exit 1; }

# Read the four theoretical-framework areas directly from north-star.yml so the
# script stays in parity with the Zotero filing structure.
FRAMEWORK_AREA_IDS=()
FRAMEWORK_AREA_LABELS=()
FRAMEWORK_AREA_OPTIONS=()
read_framework_areas() {
    python3 - "$NORTH_STAR_PATH" <<'PY'
import re, sys

path = sys.argv[1]
text = open(path, 'r', encoding='utf-8', errors='ignore').read()


def extract_id_label_list(text, key):
    lines = text.splitlines()
    start = None
    base_indent = None
    for i, line in enumerate(lines):
        if line.strip() == f"{key}:":
            start = i + 1
            base_indent = len(line) - len(line.lstrip())
            break
    if start is None:
        return []

    out = []
    current_id = None
    for line in lines[start:]:
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        indent = len(line) - len(line.lstrip())
        if indent <= base_indent:
            break

        m_id = re.match(r'^\s*-\s*id:\s*"?([^"]+?)"?\s*$', line)
        if m_id:
            current_id = m_id.group(1).strip()
            continue

        m_label = re.match(r'^\s*label:\s*"?(.*?)"?\s*$', line)
        if m_label and current_id is not None:
            out.append((current_id, m_label.group(1).strip()))
            current_id = None
    return out


for item_id, label in extract_id_label_list(text, "theoretical_framework_areas"):
    print(f"{item_id}\t{label}")
PY
}

while IFS=$'\t' read -r area_id area_label; do
    [[ -n "$area_id" && -n "$area_label" ]] || continue
    FRAMEWORK_AREA_IDS+=("$area_id")
    FRAMEWORK_AREA_LABELS+=("$area_label")
    FRAMEWORK_AREA_OPTIONS+=("${area_id}. ${area_label}")
done < <(read_framework_areas)

if (( ${#FRAMEWORK_AREA_OPTIONS[@]} == 0 )); then
  echo "Error: no model.theoretical_framework_areas found in $NORTH_STAR_PATH" >&2
  exit 1
fi

echo "Choose primary theoretical-framework area for this note:"
select FRAMEWORK_AREA_DISPLAY in "${FRAMEWORK_AREA_OPTIONS[@]}"; do
  if [[ -n "$FRAMEWORK_AREA_DISPLAY" ]]; then
    FRAMEWORK_AREA_INDEX=$((REPLY - 1))
    FRAMEWORK_AREA_ID="${FRAMEWORK_AREA_IDS[$FRAMEWORK_AREA_INDEX]}"
    FRAMEWORK_AREA_LABEL="${FRAMEWORK_AREA_LABELS[$FRAMEWORK_AREA_INDEX]}"
    break
  fi
done

# Read the three active Zotero literature clusters from north-star.yml.
# Placeholder folders d) Z and e) ADD are intentionally absent from the north star.
LITERATURE_CLUSTER_IDS=()
LITERATURE_CLUSTER_LABELS=()
LITERATURE_CLUSTER_OPTIONS=()
read_literature_clusters() {
    python3 - "$NORTH_STAR_PATH" <<'PY'
import re, sys

path = sys.argv[1]
text = open(path, 'r', encoding='utf-8', errors='ignore').read()


def extract_id_label_list(text, key):
    lines = text.splitlines()
    start = None
    base_indent = None
    for i, line in enumerate(lines):
        if line.strip() == f"{key}:":
            start = i + 1
            base_indent = len(line) - len(line.lstrip())
            break
    if start is None:
        return []

    out = []
    current_id = None
    for line in lines[start:]:
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        indent = len(line) - len(line.lstrip())
        if indent <= base_indent:
            break

        m_id = re.match(r'^\s*-\s*id:\s*["\']?([^"\']+?)["\']?\s*$', line)
        if m_id:
            current_id = m_id.group(1).strip()
            continue

        m_label = re.match(r'^\s*label:\s*["\']?(.*?)["\']?\s*$', line)
        if m_label and current_id is not None:
            out.append((current_id, m_label.group(1).strip()))
            current_id = None
    return out


for item_id, label in extract_id_label_list(text, "literature_clusters"):
    print(f"{item_id}\t{label}")
PY
}

while IFS=$'\t' read -r cluster_id cluster_label; do
    [[ -n "$cluster_id" && -n "$cluster_label" ]] || continue
    LITERATURE_CLUSTER_IDS+=("$cluster_id")
    LITERATURE_CLUSTER_LABELS+=("$cluster_label")
    LITERATURE_CLUSTER_OPTIONS+=("${cluster_id}) ${cluster_label}")
done < <(read_literature_clusters)

if (( ${#LITERATURE_CLUSTER_OPTIONS[@]} == 0 )); then
  echo "Error: no literature_clusters found in $NORTH_STAR_PATH" >&2
  exit 1
fi

echo "Choose Zotero literature cluster for this note:"
select LITERATURE_CLUSTER_DISPLAY in "${LITERATURE_CLUSTER_OPTIONS[@]}"; do
  if [[ -n "$LITERATURE_CLUSTER_DISPLAY" ]]; then
    LITERATURE_CLUSTER_INDEX=$((REPLY - 1))
    LITERATURE_CLUSTER_ID="${LITERATURE_CLUSTER_IDS[$LITERATURE_CLUSTER_INDEX]}"
    LITERATURE_CLUSTER_LABEL="${LITERATURE_CLUSTER_LABELS[$LITERATURE_CLUSTER_INDEX]}"
    break
  fi
done

echo "Choose source type:"
select SOURCE_TYPE in \
  "Core text" \
  "Bridge text" \
  "Context / supporting" \
  "Counterpoint / tension" \
  "Methodological anchor" \
  "Primary historical source"; do
  [[ -n "$SOURCE_TYPE" ]] && break
done

generate_note() {
    python3 - \
  "$BIB_PATH" \
  "$NOTES_DIR" \
  "$IDENT" \
  "$CSL_STYLE" \
  "$NORTH_STAR_PATH" \
  "$FRAMEWORK_AREA_ID" \
  "$FRAMEWORK_AREA_LABEL" \
  "$LITERATURE_CLUSTER_ID" \
    "$LITERATURE_CLUSTER_LABEL" \
        "$SOURCE_TYPE" \
        "$CONSTRAINTS_PATH" <<'PY'
import os, re, sys, pathlib, datetime, hashlib
from zoneinfo import ZoneInfo

bib_path          = pathlib.Path(sys.argv[1])
notes_dir         = pathlib.Path(sys.argv[2])
ident             = sys.argv[3]
csl_style         = sys.argv[4]
north_star_path   = pathlib.Path(sys.argv[5])
area_id           = sys.argv[6]
area_label        = sys.argv[7]
cluster_id        = sys.argv[8]
cluster_label     = sys.argv[9]
source_type       = sys.argv[10]
constraints_path  = pathlib.Path(sys.argv[11])


def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '', (s or '').lower())


def yaml_str(s: str) -> str:
    s = (s or "").replace('\\', '\\\\').replace('"', '\\"')
    return f'"{s}"'


def load_bib_entries(path: pathlib.Path):
    txt = path.read_text(encoding='utf-8', errors='ignore')
    chunks = re.split(r'(?m)^(?=@)', txt)
    entries = []

    def read_value(text: str, start: int):
        if start >= len(text):
            return "", start
        if text[start] == '{':
            depth = 0
            for index in range(start, len(text)):
                if text[index] == '{':
                    depth += 1
                elif text[index] == '}':
                    depth -= 1
                    if depth == 0:
                        return text[start + 1:index], index + 1
            return text[start + 1:], len(text)
        if text[start] == '"':
            end = text.find('"', start + 1)
            if end >= 0:
                return text[start + 1:end], end + 1
        end = start
        while end < len(text) and text[end] not in ',\n':
            end += 1
        return text[start:end], end

    for ch in chunks:
        m = re.match(r'@\s*([^{(]+)\s*[\{\(]\s*([^,\s]+)', ch)
        if not m:
            continue
        key = m.group(2).strip()
        fields = {}
        for fm in re.finditer(r'(?m)^\s*([a-zA-Z]+)\s*=\s*', ch):
            name = fm.group(1).lower()
            raw, _ = read_value(ch, fm.end())
            fields[name] = raw.strip()
        entries.append((key, fields))
    return entries


def _block(txt: str, key: str) -> str:
    m = re.search(rf'(?ms)^{re.escape(key)}:\s*\n(.*?)(?=^\S|\Z)', txt)
    return m.group(1) if m else ""


def _grab_in(block: str, subkey: str, default: str = "") -> str:
    m = re.search(rf'(?m)^\s*{re.escape(subkey)}:\s*"(.*)"\s*$', block)
    if m:
        return m.group(1).strip()
    m = re.search(rf'(?m)^\s*{re.escape(subkey)}:\s*(.+?)\s*$', block)
    return m.group(1).strip().strip(chr(34) + chr(39)) if m else default


def simple_list(txt: str, key: str):
    block = _block(txt, key)
    out = []
    for line in block.splitlines():
        m = re.match(r'^\s*-\s*(.+?)\s*$', line)
        if m:
            out.append(m.group(1).strip().strip(chr(34) + chr(39)))
    return out


def extract_id_label_list(text: str, key: str):
    lines = text.splitlines()
    start = None
    base_indent = None
    for i, line in enumerate(lines):
        if line.strip() == f"{key}:":
            start = i + 1
            base_indent = len(line) - len(line.lstrip())
            break
    if start is None:
        return []

    out = []
    current_id = None
    for line in lines[start:]:
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        indent = len(line) - len(line.lstrip())
        if indent <= base_indent:
            break

        m_id = re.match(r'^\s*-\s*id:\s*"?([^"]+?)"?\s*$', line)
        if m_id:
            current_id = m_id.group(1).strip()
            continue

        m_label = re.match(r'^\s*label:\s*"?(.*?)"?\s*$', line)
        if m_label and current_id is not None:
            out.append((current_id, m_label.group(1).strip()))
            current_id = None
    return out


def parse_north_star(txt: str):
    rq_blk = _block(txt, "research_question")
    model_blk = _block(txt, "model")
    zotero_blk = _block(txt, "zotero_filing")

    rq_verbatim  = _grab_in(rq_blk, "verbatim", "")
    rq_working   = _grab_in(rq_blk, "working", "")
    rq_secondary = _grab_in(rq_blk, "secondary", "")
    rq_purpose   = _grab_in(rq_blk, "purpose", "")
    model_title  = _grab_in(model_blk, "title", "")
    zotero_root  = _grab_in(zotero_blk, "root", "Theoretical framework")

    project_tags = simple_list(txt, "project_tags")
    areas = dict(extract_id_label_list(txt, "theoretical_framework_areas"))
    clusters = dict(extract_id_label_list(txt, "literature_clusters"))

    constraints_summary = []
    cblk = _block(txt, "constraints_summary")
    for ln in cblk.splitlines():
        s = ln.strip()
        if s.startswith("- "):
            constraints_summary.append(s[2:].strip().strip('"\''))

    return (
        rq_verbatim,
        rq_working,
        rq_secondary,
        rq_purpose,
        model_title,
        zotero_root,
        project_tags,
        areas,
        clusters,
        constraints_summary,
    )


def md_list(items, fallback):
    if not items:
        return f"- {fallback}"
    return "\n".join(f"- {x}" for x in items)


def yaml_list(items):
    if not items:
        return "[]"
    return "\n" + "\n".join(f"  - {yaml_str(str(x))}" for x in items)


def claim_ledger(citekey: str) -> str:
    claims = []
    for number in range(1, 7):
        claims.append(f"""## Claim {number}
- **Claim (plain):**
- **Author claim:** what the source explicitly argues
- **Evidence-supported claim:** what the cited material warrants
- **Researcher inference:** my inference / working proposition / TODO (test against DDR evidence)
- **Evidence (quote/paraphrase + page):** ``[@{citekey}, p. X]``
- **Warrant (my words):** why the evidence supports the claim
- **Boundary:** what this evidence does not establish
- **Consequence:** what this changes for my thesis, theoretical framework, archive, practice, or research instrument
- **Practice cross-check:** where my material supports, complicates, or resists this (practice note / archive ID / oral-history reference / computational test; or TODO (add practice cross-check))""")
    return "\n\n".join(claims)


def definition_of_done(text: str) -> list[str]:
    match = re.search(r'(?ms)^## 13\) Definition of done.*?\n(.*?)(?=^## |\Z)', text)
    if not match:
        return []
    return [
        line[2:].strip()
        for line in match.group(1).splitlines()
        if line.startswith('- ')
    ]


entries = load_bib_entries(bib_path)
by_key = {k: (k, f) for k, f in entries}
by_doi = {norm(f.get('doi', '')): (k, f) for k, f in entries if f.get('doi')}
by_url = {norm(f.get('url', '')): (k, f) for k, f in entries if f.get('url')}

key_like = ident.lstrip('@')
found = by_key.get(key_like)
if not found:
    idn = norm(ident)
    if '/' in ident or ident.startswith('10.') or ident.startswith('http'):
        found = by_doi.get(idn) or by_url.get(idn)

if found:
    citekey, f = found
    title   = (f.get('title', '') or '').strip()
    authors = (f.get('author', '') or '').strip()
    year    = re.sub(r'\D+', '', f.get('year', '')).strip() or ""
    journal = f.get('journal', '') or f.get('booktitle', '') or f.get('publisher', '') or ""
    doi     = (f.get('doi', '') or '').strip()
    url     = (f.get('url', '') or '').strip()
else:
    citekey = key_like if key_like else (norm(ident)[:32] or "unknown")
    title   = "<Paper title here>"
    authors = "<Authors here>"
    year    = "<Year>"
    journal = "<Journal / venue>"
    doi     = ident if ident.startswith('10.') else ""
    url     = ident if ident.startswith('http') else ""

north_txt = north_star_path.read_text(encoding="utf-8", errors="ignore")
constraints_txt = constraints_path.read_text(encoding="utf-8", errors="ignore")
(
    rq_verbatim,
    rq_working,
    rq_secondary,
    rq_purpose,
    model_title,
    zotero_root,
    project_tags,
    areas,
    clusters,
    constraints_summary,
) = parse_north_star(north_txt)

if not rq_verbatim:
    raise SystemExit("Error: missing research_question.verbatim in project/north-star.yml")
if not rq_working:
    raise SystemExit("Error: missing research_question.working in project/north-star.yml")
if not rq_secondary:
    raise SystemExit("Error: missing research_question.secondary in project/north-star.yml")
if not model_title:
    raise SystemExit("Error: missing model.title in project/north-star.yml")
if not project_tags:
    raise SystemExit("Error: missing project_tags in project/north-star.yml")
if areas.get(area_id) != area_label:
    raise SystemExit(f"Error: selected theoretical-framework area {area_id!r} is not in project/north-star.yml")
if clusters.get(cluster_id) != cluster_label:
    raise SystemExit(f"Error: selected literature cluster {cluster_id!r} is not in project/north-star.yml")

area_display = f"{area_id}. {area_label}"
cluster_display = f"{cluster_id}) {cluster_label}"
zotero_path = f"{zotero_root} / {area_display} / {cluster_display}"
constraints_md = md_list(constraints_summary, "TODO: add constraints_summary in project/north-star.yml")

first_author = authors.split(',')[0].strip() if authors else ''
letter = (first_author[:1].upper() or citekey[:1].upper() or 'Z')
if not letter.isalpha():
    letter = 'Z'

outdir = notes_dir / letter
outdir.mkdir(parents=True, exist_ok=True)

fname = re.sub(r'[^A-Za-z0-9._-]+', '-', citekey) + ".md"
out = outdir / fname

now = datetime.datetime.now(ZoneInfo("Europe/London"))
mon_map = {1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"}
generated_at = f'{now.day:02d} {mon_map[now.month]} {now.year}, {now.hour:02d}:{now.minute:02d}'

north_star_source = str(north_star_path)
north_star_mtime = datetime.datetime.fromtimestamp(
    north_star_path.stat().st_mtime, ZoneInfo("Europe/London")
).strftime("%d %b %Y, %H:%M")
north_star_sha1 = hashlib.sha1(north_txt.encode("utf-8", errors="ignore")).hexdigest()[:12]
constraints_source = str(constraints_path)
constraints_mtime = datetime.datetime.fromtimestamp(
    constraints_path.stat().st_mtime, ZoneInfo("Europe/London")
).strftime("%d %b %Y, %H:%M")
constraints_sha1 = hashlib.sha1(
    constraints_txt.encode("utf-8", errors="ignore")
).hexdigest()[:12]
constraints_definition_of_done = md_list(
    definition_of_done(constraints_txt),
    "TODO: add a Definition of done section to project/constraints.md",
)

tpl = f"""---
title: {yaml_str(title)}
authors: {yaml_str(authors)}
year: {year or ''}
journal: {yaml_str(journal)}
citation_key: {citekey}
doi: {yaml_str(doi)}
url: {yaml_str(url)}
bibliography: ../../refs/library.bib
csl: "{csl_style}"
link-citations: true
generated_at: "{generated_at}"
last_updated: "{generated_at}"
north_star_source: "{north_star_source}"
north_star_mtime: "{north_star_mtime}"
north_star_sha1: "{north_star_sha1}"
constraints_source: "{constraints_source}"
constraints_mtime: "{constraints_mtime}"
constraints_sha1: "{constraints_sha1}"

project_rq_verbatim: {yaml_str(rq_verbatim)}
project_rq_working: {yaml_str(rq_working)}
project_rq_secondary: {yaml_str(rq_secondary)}
project_rq_purpose: {yaml_str(rq_purpose)}
model_title: {yaml_str(model_title)}
theoretical_framework_area_id: {yaml_str(area_id)}
theoretical_framework_area: {yaml_str(area_label)}
literature_cluster_id: {yaml_str(cluster_id)}
literature_cluster: {yaml_str(cluster_label)}
zotero_filing_path: {yaml_str(zotero_path)}
source_type: {yaml_str(source_type)}
project_tags: {yaml_list(project_tags)}
---

**RQ (supervisor verbatim):** {rq_verbatim}  
**RQ (working):** {rq_working}  
**Secondary question:** {rq_secondary}  
**Model title:** {model_title}  
**Primary theoretical-framework area:** {area_display}  
**Literature cluster:** {cluster_display}  
**Zotero filing path:** {zotero_path}  
**Source type:** {source_type}  
**Project/output tags:** {', '.join(project_tags)}  

# Constraints (anti-bloat / anti-hallucination)
{constraints_md}
(Full rules: {constraints_source})

## Definition of done checklist
{constraints_definition_of_done}

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** {rq_verbatim}  
**How this source moves the primary research question forward (1 sentence):**  
**How this source bears on the secondary question, if relevant (1 sentence):**  
**Why I’m reading this now (1 sentence):**  
**Where it sits in my argument (chapter/section + what it helps me say):**  
**Why this theoretical-framework area + literature cluster is the right filing location (1–2 lines):**  
**My benchmark for using it (1–2 criteria I will apply):**  

# Position + moment (2–4 lines)
Who is the author / what tradition / what institutional or disciplinary positioning? What problem-space are they in at that time?  
**Assumptions or limits to problematise / update for 2026 (1–2 lines):**

# The author’s main move (1 sentence)
They try to ___ by ___ in order to ___.

# Six-claim evidence ledger
> Keep claims plain and analytical. Always attach page numbers when you can. If unsure: TODO (needs page / verification). Do not manufacture claims: if six distinct claims are not supportable, retain the supported claims and state **INSUFFICIENT DISTINCT EVIDENCE FOR 6 CLAIMS**.

{claim_ledger(citekey)}

# Definitions / terms this changes (only the ones that matter)
- **Term:** how I will use it (in my words) + page if defined

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
- **What I reframe / adjust (1–2 bullets, stated positively):**
- **What question it raises next (1–2 bullets):**

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):**
- **Where I will name the title in running text (first-use rule):**
- **Link to my practice evidence (one concrete cross-reference):**
- **Workstreams →**
- **Deliverables →**
- **Stakeholders →**

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** where it stops being useful for my project
- **Risk if misused (1 sentence):** what confusion it could cause in my writing

# Cross-source / cross-lens synthesis
Write one analytical paragraph: what this source changes about the research problem; which part of the primary theoretical lens it strengthens, complicates, or delimits; where it connects to or diverges from other literature; what proposition it makes possible; and what remains to be demonstrated against DDR evidence. If comparison is not yet available: **TODO (cross-source synthesis)**.

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [ ] Analysis and models
- [ ] Synthesis and interpretation
- [ ] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. __, __, __
- **First full note (write it out here):**  
- **Short note form:**  
- **One quote worth lifting (≤2 lines):** “…” (p. __)
- **One paraphrase worth keeping:** … (p. __)

# Related works (only if it directly connects)
- …

# Follow-ups (next actions, not vibes)
- What I will read next:
- What I will test or write next:
"""

if not out.exists():
    out.write_text(tpl, encoding="utf-8")

print(str(out))
PY
}

NEWFILE="$(generate_note)"

echo "$NEWFILE"

if [[ $DO_LINT -eq 1 ]]; then
  node scripts/stamp-notes.mjs --lint "$NEWFILE"
else
  node scripts/stamp-notes.mjs "$NEWFILE"
fi || {
  echo "Lint failed — fix page cites / TODOs before using this as a writing ref." >&2
  exit 1
}

if [[ $DO_BUILD -eq 1 ]]; then
  npm run build:docs-index
fi
