---
title: "Towards Critically Addressable Data for Digital Library User Studies"
authors: "Gooding, Paul"
year: 2022
journal: "Archives, Access and Artificial Intelligence: Working with Born-Digital and Digitized Archival Collections"
citation_key: Gooding2022CriticallyAddressableData
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
category: 3.1-Infrastructures-and-standards-ISAD(G),-archival-description

project_rq_verbatim: "how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?"
project_rq_working: "How might testamentary traces of epistemiv shift be used as an approach to activate the RCA’s DDR archive?"
model_title: "How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction"
model_strand: "S3"
model_strand_label: "How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics"
last_updated: "17 Feb 2026, 15:20"---
**RQ (supervisor verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**RQ (working):** How might testamentary traces of epistemiv shift be used as an approach to activate the RCA’s DDR archive?  
**Model title:** How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction  
**Primary strand:** S3 — How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics  

**Seam to watch (pick 1):** How computational methods expose or amplify epistemic shift

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**Why I’m reading this now (1 sentence):** Because “activation” of an archive depends on making the catalogue/data pipeline *critically addressable* (not just accessible).  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods chapter / S3: I can justify why any ML/VA reconstruction must include provenance + documentation, otherwise it reproduces black-box authority.  
**Why this term, not alternatives (1–2 lines):** “Critically addressable” is sharper than “transparent” or “open”: it specifies what a researcher must be able to *inspect and contest* (inclusion/exclusion, transformations, actors, tools).  
**My benchmark for using it (1–2 criteria I will apply):** I will only cite this where I can point to a concrete *workflow requirement* (what must be recorded, exposed, or made queryable), not as a general vibe about ethics.

# Position + moment (2–4 lines)
Gooding writes from LIS / DH-adjacent digital library evaluation, grounded in a project context (Digital Library Futures) that confronts messy, multi-stakeholder infrastructures and restricted access regimes. He is writing at a moment where “collections as data” and XAI debates make “black box” critique feel operational rather than purely theoretical.  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** Treating “catalogue data” as neutral administrative exhaust is no longer credible; it is a constructed humanities dataset with embedded classifications, platform politics, and legal constraints.

# The author’s main move (1 sentence)
They try to reframe library catalogues/user datasets as *black boxes requiring humanistic critique* by linking black box theory + “collections as data” principles in order to propose practical guidance for making such datasets *critically addressable*.

# Three-claim evidence ledger (max 3 claims)

## Claim 1
- **Claim (plain):** Digital library user studies often use catalogue/usage data without sufficient attention to how those datasets were created, processed, and bounded—so the data functions like a black box.
- **Evidence (quote/paraphrase + page):** Gooding argues that there is “little attention to how the catalogue data … is created, processed and received by researchers” and that the data “too often represents a black box.” ``[@Gooding2022CriticallyAddressableData, p. 2]``
- **Warrant (my words):** If researchers only see outputs (metrics, classifications, aggregates) but cannot trace internal transformations, assumptions, exclusions, and tooling, they cannot responsibly interpret results or assess bias.
- **So what for my thesis (a reusable sentence):** Any attempt to “activate” the DDR archive via computational reconstruction must begin by treating catalogue and administrative records as *constructed capta* whose transformations and exclusions are part of the object of study.
- **Practice cross-check:** TODO — identify 1 DDR dataset (e.g., catalogue export / finding aid / digitisation log) and list what I *cannot* currently see (transformations, missingness, decision points).

## Claim 2
- **Claim (plain):** “Critical addressability” requires specific documentation: inclusion/exclusion rationales, transformations, responsible actors, and access to code/tools.
- **Evidence (quote/paraphrase + page):** Gooding cites Padilla’s minimum requirements: a researcher should understand why data were included/excluded, what transformations were made, who made them, and have access to code/tools used. ``[@Gooding2022CriticallyAddressableData, p. 11]``
- **Warrant (my words):** This moves “transparency” from a moral preference to a checklist of inspectable artefacts (decisions, provenance, code), making critique possible and repeatable.
- **So what for my thesis:** My “testamentary traces” cannot just be *items* in DDR; they must include the trace of *how the archive makes those items knowable* (standards, workflows, metadata choices, system constraints).
- **Practice cross-check:** TODO — for one DDR workflow (cataloguing, accessioning, digitisation), specify what would count as “included/excluded,” “transformations,” and “who did it.”

## Claim 3
- **Claim (plain):** Black-box problems are not only proprietary platforms (e.g., analytics tools); they also arise when researchers reuse inherited classifications/standards without surfacing their epistemic and historical bias.
- **Evidence (quote/paraphrase + page):** Gooding discusses how platforms like Google Analytics are opaque (raw data/code inaccessible) ``[@Gooding2022CriticallyAddressableData, p. 14]`` and then shows how adopting Dewey classifications embeds historical bias and authority questions into analysis. ``[@Gooding2022CriticallyAddressableData, pp. 15–16]``
- **Warrant (my words):** Even when a standard is published, its *authority* and embedded worldview still matter; automated application of a scheme can hide those assumptions unless explicitly documented and problematised.
- **So what for my thesis:** My reconstruction methods must treat standards/classifications as *active epistemic operators*—otherwise the method “discovers” the worldview it already imported.
- **Practice cross-check:** TODO — list which standards/tools the DDR pipeline already uses (cataloguing schema, controlled vocabularies, digitisation metadata, DAMS settings) and mark which ones are “black-boxed” by default.

# Definitions / terms this changes (only the ones that matter)
- **Black box (in this project):** a dataset/tool/workflow where inputs/outputs are visible but internal transformations, exclusions, and decision rationales are not inspectable. ``[@Gooding2022CriticallyAddressableData, pp. 9–10]``
- **Critically addressable data:** data that a researcher can contest because provenance, transformations, actors, and code/tools are available or at least explicitly bounded and documented. ``[@Gooding2022CriticallyAddressableData, p. 11]``
- **Capta (via Drucker, as used here):** what is taken/constructed rather than simply “given” — a reminder that catalogues are produced, not found. ``[@Gooding2022CriticallyAddressableData, p. 13]``

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - A concrete, operational definition of what transparency *must* include (not just “be open”).  
  - A defensible bridge between DH critique (“raw data” is an oxymoron) and method design requirements for ML/VA work.  
  - A template for how to write about method limits without sounding evasive: name the black boxes and what they hide.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - “Activation” becomes a documentation + provenance project as much as an interface or ML project.  
  - “Testament” should include not only artefacts but also traceable transformations (classification, description, access protocols).
- **What question it raises next (1–2 bullets):**
  - What would a DDR “catalogue-as-data” release look like if it were designed for critical addressability (fields, logs, provenance, versioning, exclusions)?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** Methods/S3: justification for provenance logging, dataset documentation, and refusing “black-box” metrics as evidence.  
- **Where I will name the title in running text (first-use rule):** First mention in chapter: *Paul Gooding’s chapter “Towards Critically Addressable Data for Digital Library User Studies” (2022)*, then short form thereafter.  
- **Link to my practice evidence (one concrete cross-reference):** TODO — DDR: pick one system export (e.g., catalogue CSV / EAD / digitisation register) and assess against “critically addressable” criteria.
- **Workstreams →** S3 reconstruction / provenance; S2 (overlaps) standards + record-keeping distortions  
- **Deliverables →** “DDR catalogue-as-data” schema + documentation pack; provenance/transform log spec  
- **Stakeholders →** RCA archive staff; researchers/users; any platform/vendor constraints

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This chapter gives criteria and framing, but it does not provide a detailed technical blueprint for implementing critically addressable pipelines at scale.
- **Risk if misused (1 sentence):** If I cite “black box” too generally, it becomes a rhetorical flourish rather than a method constraint—so I must always attach it to a specific missing artefact (code, log, transformation record, exclusion rule).

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 2 (catalogue as black box), p. 11 (Padilla minimum requirements), pp. 14–17 (opacity + classification bias + practical guidance layers).
- **First full note (write it out here):**  
  Paul Gooding, “Towards Critically Addressable Data for Digital Library User Studies,” in *Archives, Access and Artificial Intelligence: Working with Born-Digital and Digitized Archival Collections*, (publication details TODO), 109–130.
- **Short note form:**  
  Gooding, “Towards Critically Addressable Data,” 111.
- **One quote worth lifting (≤2 lines):** TODO (select 1 sentence from p. 11 definition of critical addressability / Padilla requirement) ``[@Gooding2022CriticallyAddressableData, p. 11]``
- **One paraphrase worth keeping:** Critical addressability requires visibility into inclusion/exclusion rationales, transformations, responsible actors, and the code/tools that enact transformations. ``[@Gooding2022CriticallyAddressableData, p. 11]``

# Related works (only if it directly connects)
- Bowker & Star (classification/infrastructure)  
- Drucker (capta)  
- Padilla / Collections as Data statement  
- XAI literature (for “black box” parallels)

# Follow-ups (next actions, not vibes)
- What I will read next:
  - Bowker & Star (for S2/S3 seam)
  - Drucker (capta / graphical display)
- What I will test or write next:
  - Draft a 1-page DDR “critically addressable dataset” checklist and run it against one export.
