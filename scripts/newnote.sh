#!/usr/bin/env bash
# Create a new reading note from a citekey, DOI or URL using the project template.
set -euo pipefail
umask 022

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <citekey|doi|url> [--build] [--by-key]" >&2
  exit 1
fi

IDENT="$1"; shift || true
DO_BUILD=0
MODE_ENV=""

# Parse flags
for arg in "$@"; do
  case "$arg" in
    --build) DO_BUILD=1 ;;
    --by-key) MODE_ENV="NOTE_FOLDER_MODE=key" ;;
  esac
done

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

CSL_STYLE="${CSL_STYLE:-https://www.zotero.org/styles/harvard-cite-them-right}"
BIB_PATH="${BIB:-${BIBLIOGRAPHY:-refs/library.bib}}"

# Notes are served from public/docs/<Letter>
NOTES_BASE="public/docs"
mkdir -p "$NOTES_BASE"

# One-time symlink so ../../refs/library.bib in frontmatter works
if [[ ! -e "public/refs" ]]; then
  ln -s ../refs public/refs || true
fi

command -v python3 >/dev/null 2>&1 || { echo "Error: python3 not found"; exit 1; }
[[ -f "$BIB_PATH" ]] || { echo "Error: bibliography not found: $BIB_PATH" >&2; exit 1; }

# Pass NOTE_FOLDER_MODE env into Python if set
$MODE_ENV python3 - "$BIB_PATH" "$NOTES_BASE" "$IDENT" "$CSL_STYLE" <<'PY'
import re, sys, pathlib, textwrap, os

bib_path = pathlib.Path(sys.argv[1])
notes_base = pathlib.Path(sys.argv[2])   # public/docs
ident     = sys.argv[3]
csl_style = sys.argv[4]

def norm(s): return re.sub(r'[^a-z0-9]+','', (s or '').lower())

def entries_from_text(txt:str):
    """
    Robustly extract BibTeX entries as raw blocks.
    Matches from an '@type{key,' up to (but not including) the next line that starts with '@' or EOF.
    """
    pattern = re.compile(r'^@\w+\s*[\{\(][\s\S]*?(?=\n@|\Z)', re.M)
    return pattern.findall(txt)

def parse_entry_block(block:str):
    """
    Extract citation key and fields from a single entry block.
    Accepts field values in {braces}, "quotes", or bare tokens (e.g., month = dec).
    """
    # citation key
    m = re.match(r'^@\w+\s*[\{\(]\s*([^,\s]+)', block)
    if not m:
        return None, {}
    key = m.group(1).strip()

    # fields
    fields = {}
    # 1) brace form: name = { ...possibly nested... }
    for fm in re.finditer(r'([a-zA-Z]+)\s*=\s*{((?:[^{}]|{[^}]*})*)}\s*,?', block, re.S):
        name = fm.group(1).lower()
        val  = (fm.group(2) or '').strip()
        fields[name] = val

    # 2) quoted form: name = " ... "
    for fm in re.finditer(r'([a-zA-Z]+)\s*=\s*"([^"]*)"\s*,?', block, re.S):
        name = fm.group(1).lower()
        val  = (fm.group(2) or '').strip()
        fields[name] = val

    # 3) bare token form: name = token   (e.g., month = dec)
    # avoid clobbering if we already captured via { } or " "
    for fm in re.finditer(r'([a-zA-Z]+)\s*=\s*([^\s,}]+)\s*,?', block):
        name = fm.group(1).lower()
        if name in fields:  # already parsed via brace/quote
            continue
        val = fm.group(2).strip()
        fields[name] = val

    return key, fields

def load_bib_entries(path):
    txt = path.read_text(encoding='utf-8', errors='ignore')
    blocks = entries_from_text(txt)
    entries=[]
    for b in blocks:
        key, fields = parse_entry_block(b)
        if key:
            entries.append((key, fields))
    return entries, txt

def primary_author_lastname(author_field:str)->str:
    if not author_field: return ""
    parts = re.split(r'\s+and\s+', author_field, flags=re.I)
    if not parts: return ""
    first = parts[0].strip()
    if ',' in first:   # "Last, First"
        return first.split(',',1)[0].strip()
    words = first.split()
    return words[-1] if words else ""

def letter_by_key(key:str)->str:
    m = re.search(r'[A-Za-z]', key or '')
    return (m.group(0).upper() if m else 'X')

entries, raw_bib = load_bib_entries(bib_path)

# Lookups (case-insensitive for keys)
by_key = {k:(k,f) for k,f in entries}
by_key_ci = {k.lower():(k,f) for k,f in entries}
by_doi = {norm(f.get('doi','')):(k,f) for k,f in entries if f.get('doi')}
by_url = {norm(f.get('url','')):(k,f) for k,f in entries if f.get('url')}

# Resolve identifier
key_like = ident.lstrip('@')
found = by_key.get(key_like) or by_key_ci.get(key_like.lower())
if not found:
    idn = norm(ident)
    if '/' in ident or ident.startswith('10.'):
        found = by_doi.get(idn) or by_url.get(idn)

if found:
    citekey, f = found
    title   = (f.get('title','') or '').strip()
    authors = (f.get('author','') or '').strip()
    # numeric year if possible
    year    = re.sub(r'\D+','', f.get('year','') or '').strip()
    journal = (f.get('journal','') or f.get('booktitle','') or f.get('publisher','') or '').strip()
    doi     = (f.get('doi','') or '').strip()
    url     = (f.get('url','') or (doi and f"https://doi.org/{doi}") or '').strip()
else:
    # Fallback empty template if key truly not found
    citekey = key_like if key_like else norm(ident)[:32] or "unknown"
    title   = ""
    authors = ""
    year    = ""
    journal = ""
    doi     = ""
    url     = ""

# Folder logic (author-by-default, or by key via NOTE_FOLDER_MODE=key)
MODE = os.environ.get('NOTE_FOLDER_MODE', 'author')
if MODE == 'key':
    letter = letter_by_key(citekey)
else:
    letter = (primary_author_lastname(authors)[:1] or letter_by_key(citekey) or 'X').upper()

out_dir = notes_base / letter
out_dir.mkdir(parents=True, exist_ok=True)

# Safe filename
fname = re.sub(r'[^A-Za-z0-9._-]+', '-', citekey) + ".md"
out = out_dir / fname
if out.exists():
    print(str(out))
    sys.exit(0)

# year formatting: bare number if numeric, otherwise quoted/empty
year_field = (year if (year and year.isdigit()) else (f"\"{year}\"" if year else ""))

tpl = textwrap.dedent(f"""\
    ---
    title: "{title}"
    authors: "{authors}"
    year: {year_field}
    journal: "{journal}"
    citation_key: {citekey}
    doi: {doi if doi else ''}
    url: "{url or ''}"
    bibliography: ../../refs/library.bib
    csl: "https://www.zotero.org/styles/harvard-cite-them-right"
    link-citations: true
    ---

    ## Purpose and aim
    ### What research question or objective is being addressed?

    ## Methodology
    ### Describe the research design, methods and sample size.

    ## Key findings and arguments
    ### Summarise the main results and conclusions.

    ## Relevance
    ### How does it link to the research questions or framework?

    ## Project integration
    ### Why it helps the project (evidence-linked)
    - What concrete evidence from the paper strengthens the project? Cite inline (for example, ``[@{citekey}]``) and add page references for specifics.

    ### Hooks into the project
    - Which workstream, deliverable, decision or stakeholder does this inform?

    ### Use across the methods spine
    - [ ] Framing and theory
    - [ ] Study design
    - [ ] Data collection and instruments
    - [ ] Analysis and models
    - [ ] Synthesis and interpretation
    - [ ] Reporting and communications

    ## Critical evaluation
    ### Strengths
    - What is robust here?
    - Any novel contributions?

    ### Weaknesses and limitations
    - Flaws, gaps or biases?
    - Anything the study overlooks?

    ### Author’s credibility
    - Credentials, affiliations, track record?

    ### Contextual validity
    - Does it generalise beyond the sample or context studied?

    ### Comparisons
    - How does it align or conflict with other studies?

    ## Interpretation
    ### Your own insights
    - Alternative explanations?
    - Implications for practice, policy or theory?
    - How does it shape your thinking?

    ## Evidence to quote or paraphrase
    - ‘<Quote>’ (page X)

    ## Related works
    - List directly cited or conceptually linked papers.

    ## Questions for further research
    - What unanswered questions remain?
    - What should you follow up next?
    """)
out.write_text(tpl, encoding="utf-8")
print(str(out))