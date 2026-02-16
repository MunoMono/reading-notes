#!/usr/bin/env bash
# Create a new reading note from a citekey, DOI or URL using the thesis-aligned project template,
# anchored to the project North Star + Constraints.

set -euo pipefail
umask 022

if [[ $# -lt 1 ]]; then
    echo "Usage: $0 <citekey|doi|url> [--build] [--lint]" >&2
    exit 1
fi

IDENT="$1"; shift || true

DO_BUILD=0
DO_LINT=0

# allow flags in any order
for arg in "$@"; do
    case "$arg" in
        --build) DO_BUILD=1 ;;
        --lint)  DO_LINT=1 ;;
    esac
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

# Default to Chicago Notes & Bibliography (project thesis style guide).
# Allow override via CSL_STYLE env var.
CSL_STYLE="${CSL_STYLE:-https://www.zotero.org/styles/chicago-fullnote-bibliography}"
BIB_PATH="${BIB:-${BIBLIOGRAPHY:-refs/library.bib}}"
NOTES_DIR="${NOTES_DIR:-public/docs}"
mkdir -p "$NOTES_DIR"

# North star (single source of truth).
NORTH_STAR_PATH="${NORTH_STAR_PATH:-project/north-star.yml}"

command -v python3 >/dev/null 2>&1 || { echo "Error: python3 not found" >&2; exit 1; }
[[ -f "$BIB_PATH" ]] || { echo "Error: bibliography not found: $BIB_PATH" >&2; exit 1; }
[[ -f "$NORTH_STAR_PATH" ]] || { echo "Error: north star not found: $NORTH_STAR_PATH" >&2; exit 1; }

echo "Choose category for this note:"
select CATEGORY in \
  "1.1-Canonical-methods-texts" \
  "1.2-Critiques / anti-method/shift" \
  "2.1-DDR-primary / secondary-histories" \
  "2.2-Design-historiography-and-canon-critiques" \
  "3.1-Infrastructures-and-standards-ISAD(G),-archival-description" \
  "3.2-Classification-as-ethics / politics" \
  "3.3-Absence,-silence-and-missing-data" \
  "4.1-Linked-data-and-graph-ontologies" \
  "4.2-Digital-libraries / long-tail/discovery" \
  "4.3-RAG / XAI/provenance" \
  "4.4-LLM as research method / epistemic instrument" \
  "5.1-Practice-led-design-research" \
  "5.2-Cybernetics-and-conversation-theory" \
  "5.3-Epistemic-structures-in-computational/archival-design-systems" \
  "6.1-Archival-and-oral-history-methods" \
  "6.2-DH/computational-methods" \
  "7.1-Read-once-background" \
  "7.2-To-be-decided" \
  "7.3-She-Ji"; do
  [[ -n "$CATEGORY" ]] && break
done

echo "Choose PRIMARY model strand for this note (north star):"
select STRAND in \
  "S1: How epistemic shift emerges historically in design research" \
  "S2: Where epistemic shift is materially recorded, structured, and obscured" \
  "S3: How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics"; do
  [[ -n "$STRAND" ]] && break
done
STRAND_ID="${STRAND%%:*}"

NEWFILE=$(python3 - \
    "$BIB_PATH" \
    "$NOTES_DIR" \
    "$IDENT" \
    "$CSL_STYLE" \
    "$CATEGORY" \
    "$NORTH_STAR_PATH" \
    "$STRAND_ID" \
<<'PY'
import re, sys, pathlib, datetime
from zoneinfo import ZoneInfo

bib_path        = pathlib.Path(sys.argv[1])
notes_dir       = pathlib.Path(sys.argv[2])
ident           = sys.argv[3]
csl_style       = sys.argv[4]
category        = sys.argv[5]
north_star_path = pathlib.Path(sys.argv[6])
strand_id       = sys.argv[7]

def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]+','', (s or '').lower())

def load_bib_entries(path: pathlib.Path):
    txt = path.read_text(encoding='utf-8', errors='ignore')
    chunks = re.split(r'(?m)^(?=@)', txt)
    entries=[]
    for ch in chunks:
        m = re.match(r'@\s*([^{(]+)\s*[\{\(]\s*([^,\s]+)', ch)
        if not m:
            continue
        key = m.group(2).strip()
        fields={}
        for fm in re.finditer(
            r'([a-zA-Z]+)\s*=\s*'
            r'(?:'
            r'({(?:[^{}]|{[^}]*})*})'
            r'|("([^"]*)")'
            r'|([^\s,]+)'
            r')\s*,?', ch, re.S):
            name = fm.group(1).lower()
            if fm.group(2):
                raw = fm.group(2)[1:-1]
            elif fm.group(3):
                raw = fm.group(4) or ""
            else:
                raw = fm.group(5) or ""
            fields[name] = raw.strip()
        entries.append((key, fields))
    return entries

def yaml_str(s: str) -> str:
    s = (s or "").replace('"', '\\"')
    return f'"{s}"'

def _block(txt: str, key: str) -> str:
    m = re.search(rf'(?ms)^{re.escape(key)}:\s*\n(.*?)(?=^\S|\Z)', txt)
    return m.group(1) if m else ""

def _subblock(block: str, key: str) -> str:
    """Grab an indented sub-block inside an existing block."""
    m = re.search(rf'(?ms)^\s*{re.escape(key)}:\s*\n(.*?)(?=^\s{{0,1}}\S|\Z)', block)
    return m.group(1) if m else ""

def _grab_in(block: str, subkey: str, default: str = "") -> str:
    m = re.search(rf'(?m)^\s*{re.escape(subkey)}:\s*"(.*)"\s*$', block)
    if m:
        return m.group(1).strip()
    m = re.search(rf'(?m)^\s*{re.escape(subkey)}:\s*(.+?)\s*$', block)
    return m.group(1).strip() if m else default

def _list_after_key(txt: str, key: str) -> list[str]:
    """
    Extract a simple YAML list under a top-level key, e.g. constraints_summary:
      - "..."
      - ...
    """
    blk = _block(txt, key)
    items = []
    for ln in blk.splitlines():
        s = ln.strip()
        if s.startswith("- "):
            item = s[2:].strip().strip('"')
            if item:
                items.append(item)
    return items

def parse_north_star(txt: str):
    rq_blk = _block(txt, "research_question")
    model_blk = _block(txt, "model")

    rq_verbatim = _grab_in(rq_blk, "verbatim", "")
    rq_working  = _grab_in(rq_blk, "working", "")
    model_title = _grab_in(model_blk, "title", "")

    strands = {}
    for m in re.finditer(r'-\s*id:\s*"(S[123])"\s*\n\s*label:\s*"(.*?)"', model_blk, flags=re.S):
        strands[m.group(1)] = m.group(2).strip()

    seams = []
    seams_blk = _subblock(model_blk, "seams_to_watch")
    for m in re.finditer(r'label:\s*"(.*?)"', seams_blk):
        val = m.group(1).strip()
        if val:
            seams.append(val)

    # constraints_summary is top-level
    constraints_summary = []
    cblk = _block(txt, "constraints_summary")
    for ln in cblk.splitlines():
        s = ln.strip()
        if s.startswith("- "):
            constraints_summary.append(s[2:].strip().strip('"'))

    return rq_verbatim, rq_working, model_title, strands, seams, constraints_summary

def constraints_summary_md(items):
    if not items:
        return "- TODO: add constraints_summary in project/north-star.yml"
    return "\n".join(f"- {i}" for i in items)

# --- Bib lookup ---
entries = load_bib_entries(bib_path)
by_key = {k:(k,f) for k,f in entries}
by_doi = {norm(f.get('doi','')):(k,f) for k,f in entries if f.get('doi')}
by_url = {norm(f.get('url','')):(k,f) for k,f in entries if f.get('url')}

key_like = ident.lstrip('@')
found = by_key.get(key_like)
if not found:
    idn = norm(ident)
    if '/' in ident or ident.startswith('10.') or ident.startswith('http'):
        found = by_doi.get(idn) or by_url.get(idn)

if found:
    citekey, f = found
    title   = (f.get('title','') or '').strip()
    authors = (f.get('author','') or '').strip()
    year    = re.sub(r'\D+','', f.get('year','')).strip() or ""
    journal = f.get('journal','') or f.get('booktitle','') or f.get('publisher','') or ""
    doi     = (f.get('doi','') or '').strip()
    url     = (f.get('url','') or '').strip()
else:
    citekey = key_like if key_like else (norm(ident)[:32] or "unknown")
    title   = "<Paper title here>"
    authors = "<Authors here>"
    year    = "<Year>"
    journal = "<Journal / venue>"
    doi     = ident if ident.startswith('10.') else ""
    url     = ident if ident.startswith('http') else ""

# --- Output path ---
first_author = authors.split(',')[0].strip() if authors else ''
letter = (first_author[:1].upper() or citekey[:1].upper() or 'Z')
if not letter.isalpha():
    letter = 'Z'

outdir = notes_dir / letter
outdir.mkdir(parents=True, exist_ok=True)

fname = re.sub(r'[^A-Za-z0-9._-]+', '-', citekey) + ".md"
out = outdir / fname

# Timestamp (Europe/London) — consistent format: "16 Feb 2026, 11:49"
now = datetime.datetime.now(ZoneInfo("Europe/London"))
mon_map = {1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"}
generated_at = f'{now.day:02d} {mon_map[now.month]} {now.year}, {now.hour:02d}:{now.minute:02d}'

# --- North star injection ---
north_txt = north_star_path.read_text(encoding="utf-8", errors="ignore")
import hashlib, time

north_star_source = str(north_star_path)
north_star_mtime = datetime.datetime.fromtimestamp(north_star_path.stat().st_mtime, ZoneInfo("Europe/London")).strftime("%d %b %Y, %H:%M")
north_star_sha1 = hashlib.sha1(north_txt.encode("utf-8", errors="ignore")).hexdigest()[:12]
rq_verbatim, rq_working, model_title, strands, seams, constraints_summary = parse_north_star(north_txt)

if not rq_verbatim:
    raise SystemExit("Error: missing research_question.verbatim in project/north-star.yml")
if not rq_working:
    raise SystemExit("Error: missing research_question.working in project/north-star.yml")
if not model_title:
    raise SystemExit("Error: missing model.title in project/north-star.yml")

strand_label = strands.get(strand_id, "<Add strand label in north-star.yml>")
seams_md = "\n".join([f"- {s}" for s in seams]) if seams else "- TODO: add seams_to_watch labels in north-star.yml"
constraints_md = constraints_summary_md(constraints_summary)

# Template (anchored to north star + constraints)
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
north_star_source: "{north_star_source}"
north_star_mtime: "{north_star_mtime}"
north_star_sha1: "{north_star_sha1}"
constraints_source: "project/constraints.md"
category: {category}

project_rq_verbatim: {yaml_str(rq_verbatim)}
project_rq_working: {yaml_str(rq_working)}
model_title: {yaml_str(model_title)}
model_strand: "{strand_id}"
model_strand_label: {yaml_str(strand_label)}
---

**RQ (supervisor verbatim):** {rq_verbatim or "TODO: add research_question.verbatim in project/north-star.yml"}  
**RQ (working):** {rq_working or "TODO: add research_question.working in project/north-star.yml"}  
**Model title:** {model_title or "TODO: add model.title in project/north-star.yml"}  
**Primary strand:** {strand_id} — {strand_label}  

**Seams to watch (optional, pick 1):**
{seams_md}

# Constraints (anti-bloat / anti-hallucination)
{constraints_md}
(Full rules: project/constraints.md)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** {rq_verbatim or ""}  
**Why I’m reading this now (1 sentence):**  
**Where it sits in my argument (chapter/section + what it helps me say):**  
**Why this term, not alternatives (1–2 lines):**  
**My benchmark for using it (1–2 criteria I will apply):**  

# Position + moment (2–4 lines)
Who is the author / what tradition / what institutional or disciplinary positioning? What problem-space are they in *at that time*?  
**Canon assumptions to problematise / update for 2026 (1–2 lines):**

# The author’s main move (1 sentence)
They try to ___ by ___ in order to ___.

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):**
- **Evidence (quote/paraphrase + page):** ``[@{citekey}, p. X]``
- **Warrant (my words):** why the evidence supports the claim
- **So what for my thesis (a reusable sentence):**
- **Practice cross-check:** where my material supports/complicates this (pointer to practice note / archive ID)

## Claim 2
- **Claim (plain):**
- **Evidence (quote/paraphrase + page):** ``[@{citekey}, p. X]``
- **Warrant (my words):**
- **So what for my thesis:**
- **Practice cross-check:**

## Claim 3
- **Claim (plain):**
- **Evidence (quote/paraphrase + page):** ``[@{citekey}, p. X]``
- **Warrant (my words):**
- **So what for my thesis:**
- **Practice cross-check:**

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
- **Boundary (1 sentence):** where it stops being useful for *my* project
- **Risk if misused (1 sentence):** what confusion it could cause in my writing

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
)

echo "$NEWFILE"

if [[ $DO_LINT -eq 1 ]]; then
    node scripts/stamp-notes.mjs --lint "$NEWFILE"
else
    node scripts/stamp-notes.mjs "$NEWFILE"
fi || { echo "Lint failed — fix page cites / TODOs before using this as a writing ref." >&2; exit 1; }

if [[ $DO_BUILD -eq 1 ]]; then
  npm run build:docs-index
fi
