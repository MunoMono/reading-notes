---
title: "HARF: A human–AI collaborative framework for cultural heritage reconstruction with expert-guided multi-platform generative AI and systematic prompt engineering"
authors: "Arzomand, Kawsar and Kalganova, Tatiana and Rustell, Michael"
year: 2026
journal: "Digital Applications in Archaeology and Cultural Heritage"
citation_key: Arzomand2026HARFHumanAI
doi: "10.1016/j.daach.2026.e00554"
url: "https://linkinghub.elsevier.com/retrieve/pii/S2212054826000615"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 15:39"
last_updated: "14 Sept 2026, 15:39"
north_star_source: "project/north-star.yml"
north_star_mtime: "14 Sep 2026, 15:20"
north_star_sha1: "63baed23b960"
category: "S3: Surfacing and reactivating traces computationally"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.1 Visual analytics"
source_type: "Context / supporting"
project_tags:
  - "Turin"
literature_clusters:
  - "01 Synthetic heritage and cultural memory"
  - "05 Archival partiality, silence and absence"
  - "09 Human judgement and practice-led computational research"
  - "11 Uncertainty and provenance display in interfaces"
  - "12 Digitisation, reconstruction and archival completion"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.1 Visual analytics  
**Source type:** Context / supporting  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 01 Synthetic heritage and cultural memory; 05 Archival partiality, silence and absence; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces; 12 Digitisation, reconstruction and archival completion  

**Seam to watch:** When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)

**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now (1 sentence):**  
I need a recent cultural-heritage precedent showing how generative systems can be constrained by documentary evidence, provenance and human judgement when the surviving historical record is partial.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3 / computational activation of archival traces, and the Turin paper's synthetic-heritage framing. It supports the claim that generative heritage systems require explicit evidentiary boundaries and that visually or textually plausible synthesis should remain distinguishable from historically supported reconstruction.

**Why this term, not alternatives (1–2 lines):**  
I use *evidential constraint* to describe the useful principle here. HARF calls its task reconstruction, but for the DDR I am not reconstructing a lost historical whole. I am constraining inference to what specified archival traces can support.

**My benchmark for using it (1–2 criteria I will apply):**  
Use where the paper demonstrates a concrete mechanism for linking generation to evidence, provenance, uncertainty or expert judgement. Do not transfer claims about visual reconstruction directly to archival textual interpretation without marking that difference.

# Position + moment (2–4 lines)

Arzomand, Kalganova and Rustell write from digital heritage, engineering and computational reconstruction. Their 2026 intervention responds to the rapid adoption of multimodal generative systems for reconstructing lost or destroyed heritage, using the Western Buddha of Bamiyan as a deliberately difficult case because surviving documentation is substantial but incomplete. Their position is methodological: make generative reconstruction accountable to archaeological evidence, quantitative constraint, documented interpretation and expert validation.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The paper updates established London Charter and Seville Principles concerns with paradata and transparency for generative AI. However, its reconstruction logic still assumes that historical fidelity can be progressively improved towards a more adequate representation; contested archives such as the DDR require stronger accommodation of plural interpretation and unresolved historical difference.

# The author’s main move (1 sentence)

They try to make generative heritage reconstruction historically defensible by converting verified documentary, dimensional and iconographic evidence into explicit generative constraints, recording interpretive decisions and retaining expert judgement throughout the workflow.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Generative heritage systems produce a credibility problem when visually persuasive outputs exceed the historical evidence supporting them.
- **Evidence (quote/paraphrase + page):** Arzomand et al. describe a “credibility gap” between visual plausibility and historical authenticity, identifying stylistic drift, historical anachronism and cultural misrepresentation as recurring risks in generative reconstruction. `[@Arzomand2026HARFHumanAI, p. 2]`
- **Warrant (my words):** A generated object can look coherent without being historically warranted. Fluency or realism therefore cannot function as evidence of historical validity.
- **So what for my thesis (a reusable sentence):** In computationally activated archives, representational plausibility must remain subordinate to the evidential status of the traces from which an interpretation is produced.
- **Practice cross-check:** Turin experiment: the research interface separates retrieved documentary passages, archival metadata, later testimony and generated synthesis so that a fluent answer cannot silently acquire the status of recovered historical fact.

## Claim 2

- **Claim (plain):** Evidential boundaries can be designed into a generative workflow rather than appended as a disclaimer after generation.
- **Evidence (quote/paraphrase + page):** HARF admits only elements supported by verifiable documentation into its operational layers, records uncertainty as paradata and leaves features with insufficient evidence indeterminate; the authors describe this as establishing an evidentiary boundary between reconstruction and speculation. `[@Arzomand2026HARFHumanAI, p. 3]`
- **Warrant (my words):** The important methodological move happens before and during generation. Source scope, admissible evidence and uncertainty are part of the computational procedure itself.
- **So what for my thesis:** Evidential restraint can be treated as system architecture: the available corpus defines what inference may responsibly establish, while unsupported relations remain unresolved.
- **Practice cross-check:** Turin *scoped missingness*: closure, reception and attribution queries explicitly report what the defined digitised DDR evidence surface does not establish rather than filling the missing relation.

## Claim 3

- **Claim (plain):** Human expertise remains necessary because computational measures cannot determine cultural or historical adequacy on their own.
- **Evidence (quote/paraphrase + page):** Several reconstructions that scored well computationally were rejected during expert review, and the authors state that this exposed the limits of algorithmic metrics and the continuing need for informed human judgement. `[@Arzomand2026HARFHumanAI, p. 5]` The paper later notes that PSI measures schema completeness rather than completeness of the historical record. `[@Arzomand2026HARFHumanAI, p. 10]`
- **Warrant (my words):** A system can test compliance with encoded constraints while remaining unable to judge whether the underlying evidence is sufficient, culturally appropriate or historically complete.
- **So what for my thesis:** Researcher judgement is constitutive of archival inference because computational consistency cannot determine whether a surviving trace warrants a historical claim.
- **Practice cross-check:** Turin protocol: the researcher defines questions and retrieval routes, reads returned evidence and validates quotation provenance; deterministic fallback is used where generative synthesis exceeds the permitted evidence structure.

# Definitions / terms this changes (only the ones that matter)

- **Evidentiary boundary:** the documented limit between features supported by available evidence and features that remain indeterminate or speculative. The authors make this explicit when uncertain aspects of the Bamiyan Buddha are left unresolved rather than reconstructed. `[@Arzomand2026HARFHumanAI, p. 3]`
- **Paradata:** documentation of the interpretive decisions that shape a computational reconstruction, distinguished from metadata describing its technical provenance. `[@Arzomand2026HARFHumanAI, pp. 7–8]`
- **Credibility gap:** the divergence between the visual plausibility of a generated reconstruction and its historical authenticity. `[@Arzomand2026HARFHumanAI, p. 2]`

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Evidential limits can be encoded into a generative workflow and made inspectable through provenance, paradata and explicit treatment of uncertainty.
  - The distinction between technical metadata and interpretive paradata is useful for my own separation of source provenance from generated interpretation.
  - Their acknowledgement that a complete prompt schema does not imply a complete historical record is particularly important for *scoped missingness*.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I extend their evidential-boundary principle from visual reconstruction to retrieval-augmented archival inference, where the synthetic object is generated language and proposed relationships between records.
  - I treat unresolved evidence as analytically productive. In the DDR archive, uncertainty may mark contested knowledge, missing testimony or institutional silence rather than a reconstruction problem to be progressively solved.

- **What question it raises next (1–2 bullets):**
  - How should paradata be represented when the principal synthetic output is an interpretive textual claim rather than a reconstructed image?
  - Can an archival interface expose the reasoning path between retrieved traces without giving that path the appearance of a definitive historical reconstruction?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** Turin literature/context paragraph establishing that AI-mediated heritage reconstruction creates a gap between persuasive generated representation and historical authenticity, followed by the need for evidential constraint, provenance and human validation.
- **Where I will name the title in running text (first-use rule):** First discussion of contemporary attempts to constrain generative reconstruction: “Arzomand, Kalganova and Rustell's *HARF: A human–AI collaborative framework for cultural heritage reconstruction*…”
- **Link to my practice evidence (one concrete cross-reference):** Turin scoped-missingness cases and provenance validation, especially the distinction between retrieved passage, authority metadata, retrospective testimony and generated inference.
- **Workstreams →** Turin paper; thesis S3 computational activation; provenance/uncertainty interface
- **Deliverables →** Literature review; methodological justification for bounded inference; synthetic-heritage discussion
- **Stakeholders →** Researchers; archivists; cultural-heritage institutions; users interpreting AI-mediated historical material

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** HARF concerns expert-guided visual reconstruction of a destroyed monument with measurable geometric and iconographic anchors, so its claims cannot establish the validity of textual historical inference across contested archival records.
- **Risk if misused (1 sentence):** Treating HARF as direct validation of my system could collapse the difference between reconstructing a visual object towards measurable fidelity and interpreting plural, incomplete and sometimes contradictory documentary traces.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–3, 5, 7–10
- **First full note (write it out here):** Kawsar Arzomand, Tatiana Kalganova, and Michael Rustell, “HARF: A Human–AI Collaborative Framework for Cultural Heritage Reconstruction with Expert-Guided Multi-Platform Generative AI and Systematic Prompt Engineering,” *Digital Applications in Archaeology and Cultural Heritage* 42 (2026): e00554, https://doi.org/10.1016/j.daach.2026.e00554.
- **Short note form:** Arzomand, Kalganova, and Rustell, “HARF,” [page].
- **One quote worth lifting (≤2 lines):** “features lacking sufficient evidence … were preserved as indeterminate” (p. 3).
- **One paraphrase worth keeping:** A structured generative workflow cannot remove uncertainty created by an incomplete historical record; its measures can assess the completeness of encoded constraints without establishing the completeness of the past itself. (p. 10)

# Related works (only if it directly connects)

- Nieto McAvoy and Kidd (2024), *Synthetic Heritage* — broader conceptual framing for synthetic heritage, authenticity, provenance and generated cultural memory.
- Denard (2009), *The London Charter* — paradata, transparency and interpretive accountability underlying HARF's workflow.
- Foka and Griffin (2024), “AI, cultural heritage, and bias” — representational and cultural bias in generative heritage systems.
- Galindo-Durán, Prego de Oliver-López and Bernal-Bravo (2026) — methodological validation of AI-generated cultural-heritage content and the distinction between visual plausibility and historical accuracy.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Follow the paper's use of the London Charter and paradata literature, particularly Bentkowska-Kafel and Denard, to establish whether “paradata” can be usefully translated into the textual retrieval-and-inference context of the DDR.
- **What I will test or write next:** Compare HARF's “evidentiary boundary” with my *scoped missingness* protocol and write a short distinction between generative reconstruction and retrieval-augmented inference: HARF constrains what may be reconstructed; my method constrains what may be inferred from a bounded archive.