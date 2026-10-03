---
title: "Enhancing clinicians’ trust in large language models via transparent source attribution: A randomized controlled evaluation in uro-oncology"
authors: "Carl, Nicolas and Hetz, Martin Joachim and Wies, Christoph and Haggenmüller, Sarah and Winterstein, Jana Theres and Mangold, Maurin Helen and Maywald, Lasse and Worst, Thomas Stefan and Westhoff, Niklas and Michel, Maurice Stephan and Wessels, Frederik and Brinker, Titus Josef"
year: 2026
journal: "European Journal of Cancer"
citation_key: Carl2026EnhancingCliniciansTrust
doi: "10.1016/j.ejca.2025.116168"
url: "https://linkinghub.elsevier.com/retrieve/pii/S0959804925010548"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:31"
last_updated: "03 Oct 2026, 05:29"
north_star_source: "project/north-star.yml"
north_star_mtime: "14 Sep 2026, 16:11"
north_star_sha1: "9df80fcd2e16"
category: "S3: Surfacing and reactivating traces computationally"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Methodological anchor"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Operational literature"
project_tags:
  - "Turin"
  - "Theoretical framework"
literature_clusters: 
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Methodological anchor  
**Project/output tags:** Turin  
**Literature clusters:** 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → TODO (needs page / verification)
- Substantive source → at least 6 critical claims; major canonical source → normally 6–8 or more where warranted
- Critical claims are analytical paragraphs: Claim → Evidence → Warrant → Boundary → Consequence
- Keep author claim, evidence-supported claim, and researcher inference distinct
- Each claim must include a practice cross-check (or TODO)
- End each substantive note with a cross-source / cross-lens synthesis paragraph (or TODO)
- Every source gets one primary theoretical-framework area + one Zotero literature cluster
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/theoretical framework: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

# Thesis job

**How this source moves the primary research question forward:** Carl et al. provide experimental evidence that inline attribution and directly inspectable source passages improve users' ability to verify generated outputs. This supports DDR provenance as an interaction between claim and evidence.

**How this source bears on the secondary question:** It enables contemporary computational access to DDR while keeping revisited historical claims open to direct source scrutiny.

**Where it sits in my argument:** Critical computational approaches / operational literature, especially source attribution, verifiability and interface provenance.

**My benchmark for using it:** Use for empirical support for inline citations and source preview; do not equate increased trust with historical correctness or treat a clinical guideline corpus as analogous to contested archival evidence.

# Position + moment

Carl et al. write from clinical oncology and medical AI, comparing GPT-4o with a RAG system that adds a curated guideline corpus, inline citations and previewable source passages. Their study tests source attribution and verifiability in a high-stakes professional setting. [@Carl2026EnhancingCliniciansTrust, pp. 2–5]

# The author’s main move

They shift attention from opaque internal model reasoning toward external verification through traceable references and source previews. [@Carl2026EnhancingCliniciansTrust, pp. 2–5]

# Critical-reading claims

## Claim 1

**Claim.** Provenance can be a direct user-facing property of generated text. **Author claim.** UroBot embeds references in answers and links them to source previews. **Evidence.** Users can open the retrieved guideline segment associated with a generated statement. [@Carl2026EnhancingCliniciansTrust, p. 2] **Evidence-supported claim.** Users can open the retrieved guideline segment associated with a generated statement. [@Carl2026EnhancingCliniciansTrust, p. 2] **Researcher inference.** DDR researchers should be able to move directly from interpretation to archival passage. **Warrant.** Provenance is actionable when it supports immediate inspection. **Boundary.** Clinical source passages come from a curated authoritative corpus. **Consequence.** Passage-level access should be built into archival synthesis interfaces. **Practice cross-check.** Turin citations reopen underlying DDR passages.
## Claim 2

**Claim.** Citation presence and citation verifiability are different properties. **Author claim.** The study distinguishes source attribution from the ability to verify content against those sources. **Evidence.** UroBot substantially outperformed ChatGPT on full verifiability and full attribution. [@Carl2026EnhancingCliniciansTrust, pp. 3–4] **Evidence-supported claim.** UroBot substantially outperformed ChatGPT on full verifiability and full attribution. [@Carl2026EnhancingCliniciansTrust, pp. 3–4] **Researcher inference.** A DDR answer should not count as sourced merely because document names appear. **Warrant.** A citation can look authoritative while failing to support the claim. **Boundary.** Their verifiability criteria rely on contemporary clinical guidelines. **Consequence.** Provenance UAT should test whether cited passages genuinely warrant generated claims. **Practice cross-check.** Turin should test claim-to-passage entailment, not only citation existence.
## Claim 3

**Claim.** Generic or fabricated citations create false authority. **Author claim.** The authors report problems in ChatGPT source attribution. **Evidence.** Their qualitative analysis found non-existent attributions and valid citations lacking specific sections. [@Carl2026EnhancingCliniciansTrust, pp. 4–5] **Evidence-supported claim.** Their qualitative analysis found non-existent attributions and valid citations lacking specific sections. [@Carl2026EnhancingCliniciansTrust, pp. 4–5] **Researcher inference.** Bibliographic-looking references in historical synthesis require verification against real records and passages. **Warrant.** Formal citation style can mask weak or invented provenance. **Boundary.** The study tests one clinical comparison and one model configuration. **Consequence.** Citation integrity should be independently checked. **Practice cross-check.** Turin provenance validation checks cited passages and record identity.
## Claim 4

**Claim.** Source previews lower the cost of evidential scrutiny. **Author claim.** Their interface exposes original retrieved text beside generated recommendations. **Evidence.** Figure 1 and the system description show citation-linked source text previews. [@Carl2026EnhancingCliniciansTrust, p. 2] **Evidence-supported claim.** Figure 1 and the system description show citation-linked source text previews. [@Carl2026EnhancingCliniciansTrust, p. 2] **Researcher inference.** DDR interfaces should support in-context evidence inspection before full-record navigation. **Warrant.** Verification is more practical when users need not independently search for the relevant passage. **Boundary.** Easy access does not ensure correct interpretation. **Consequence.** Preview should complement, not replace, access to full archival context. **Practice cross-check.** Turin should pair passage preview with full record metadata and source context.
## Claim 5

**Claim.** External verification is a practical alternative to claiming internal model explainability. **Author claim.** The paper explicitly shifts from interpreting opaque model dynamics to verification through traceable references. **Evidence.** The authors describe “external verification through traceable references” as their operative transparency strategy. [@Carl2026EnhancingCliniciansTrust, p. 5] **Evidence-supported claim.** The authors describe “external verification through traceable references” as their operative transparency strategy. [@Carl2026EnhancingCliniciansTrust, p. 5] **Researcher inference.** DDR accountability should centre evidence inspection rather than model self-explanation. **Warrant.** A model narrative of its own reasoning does not independently validate historical claims. **Boundary.** External verification validates grounding, not a unique historical interpretation. **Consequence.** Explanation should mean inspectable evidence route, not chain-of-thought disclosure. **Practice cross-check.** Turin exposes evidence and provenance rather than model-internal reasoning.
## Claim 6

**Claim.** Increased user trust should not be confused with appropriate historical reliance. **Author claim.** Clinicians preferred the provenance-rich system on trust and verifiability measures. **Evidence.** Trust differences accompany improvements in source attribution and verifiability. [@Carl2026EnhancingCliniciansTrust, pp. 4–5] **Evidence-supported claim.** Trust differences accompany improvements in source attribution and verifiability. [@Carl2026EnhancingCliniciansTrust, pp. 4–5] **Researcher inference.** DDR design should aim to calibrate scrutiny, not maximise trust. **Warrant.** A trustworthy interface is one that helps users challenge as well as accept outputs. **Boundary.** The intervention bundles retrieval, curated sources, citations and previews, so individual causal effects are not isolated. **Consequence.** Evaluate evidence use separately from confidence. **Practice cross-check.** Turin UAT should ask whether users can confirm, qualify or reject generated interpretations from the sources.
# Definitions / terms this changes (only the ones that matter)

- **Source attribution:** explicit connection between a generated statement and the source document from which supporting evidence was retrieved. `[@Carl2026EnhancingCliniciansTrust, p. 7]`
- **Source verifiability:** the user's ability to determine whether a generated output accurately reflects the source material being cited. `[@Carl2026EnhancingCliniciansTrust, pp. 4, 7]`
- **Inline reference:** a citation embedded at the relevant point in the generated answer and linked to a specific supporting source segment. `[@Carl2026EnhancingCliniciansTrust, pp. 2, 7]`
- **Source text preview:** the original retrieved evidence displayed alongside the generated answer so that the user can inspect the supporting material directly. `[@Carl2026EnhancingCliniciansTrust, pp. 2, 7]`
- **External verification:** my preferred term for their methodological move: transparency achieved through inspectable evidence rather than through claims to expose the internal reasoning mechanism of the model.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper provides unusually direct empirical support for making citations and source passages part of the interface rather than treating provenance as backend metadata.
  - It gives me a strong conceptual distinction between internal explainability and external evidential verification.
  - It demonstrates that citation specificity matters: generic references may look authoritative while remaining difficult or impossible to verify.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - In the DDR system, verifiability means establishing that an interpretation is grounded in particular archival traces; it does not mean proving that one historical interpretation is objectively correct.
  - I separate *trust* from *appropriate reliance*. The goal of the Turin interface is not to maximise trust in AI output but to give researchers sufficient evidence to scrutinise, contest or reject it.

- **What question it raises next (1–2 bullets):**
  - Should every interpretative sentence in a generated historical synthesis map to one or more specific evidential passages rather than only citing sources at paragraph level?
  - How should the interface show cases in which several traces support different or conflicting readings of the same historical relationship?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methodology section explaining the citation interface and again in the discussion of evidential traceability, to provide empirical evidence that inline references and previewable source passages materially improve source verifiability.
- **Where I will name the title in running text (first-use rule):** “Carl et al.'s *Enhancing clinicians’ trust in large language models via transparent source attribution* provides experimental evidence for treating source attribution and direct source inspection as user-facing features of retrieval-augmented systems.”
- **Link to my practice evidence (one concrete cross-reference):** Figure 3 / Turin research interface: hyperlinks embedded in generated answers reopen the retrieved DDR passages displayed beneath the synthesis, enabling claim-to-source checking.
- **Workstreams →** provenance; retrieval-augmented inference; citation architecture; interface transparency
- **Deliverables →** Turin methodological justification; thesis S3 system design; provenance UAT
- **Stakeholders →** archival researchers; historians; cultural-heritage institutions; interface designers

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study evaluates clinical recommendations against a curated contemporary guideline corpus in which correctness can be judged against an authoritative standard, whereas historical interpretation of DDR traces may remain plural, incomplete and contested.
- **Risk if misused (1 sentence):** Treating increased clinician trust as proof that visible citations make an AI output trustworthy would conflate perceived trust, evidential verifiability and historical validity; moreover, the intervention bundles RAG, curated retrieval, inline citation and source preview, so their individual causal effects are not isolated.

# Cross-source / cross-lens synthesis

Carl et al. provide empirical support for one of the thesis's strongest interface propositions: provenance should be inspectable at the point where a generated claim is read. Read with Cho and Lim, the value of attribution depends on discoverability and mapping; read with archival theory, however, passage-level grounding still does not settle contested historical interpretation. DDR therefore uses citation and preview to enable researcher judgement, not to automate it.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–6
- **First full note (write it out here):** Nicolas Carl et al., “Enhancing Clinicians’ Trust in Large Language Models via Transparent Source Attribution: A Randomized Controlled Evaluation in Uro-Oncology,” *European Journal of Cancer* 233 (2026): 116168, https://doi.org/10.1016/j.ejca.2025.116168.
- **Short note form:** Carl et al., “Enhancing Clinicians’ Trust,” [page].
- **One quote worth lifting (≤2 lines):** “external verification through traceable references” (p. 5).
- **One paraphrase worth keeping:** Inline references linked directly to retrieved source passages allow users to assess whether an AI-generated claim is actually supported by its cited evidence rather than relying on the authority conveyed by citation alone. (pp. 2–5)

# Related works (only if it directly connects)

- Axetorn et al. (2026), *Addressing trust requirements in the design of an open-source multiagent LLM-based domain-specific chatbot* — similarly finds that source citation supports transparency while arguing that limitations must also be communicated explicitly.
- Asai et al. (2026), *Synthesizing scientific literature with retrieval-augmented language models* — provides the complementary inference-pipeline perspective in which retrieval, synthesis and citation verification occur as distinct stages.
- Bernard and Balog (2025), *A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval* — provides the broader IR account of local transparency and explanation of the relationship between a query and returned evidence.
- Arzomand, Kalganova and Rustell (2026), *HARF* — provides a cultural-heritage analogue in which provenance and paradata expose the evidential basis and interpretative interventions involved in reconstruction.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Follow source-attribution and evidence-verification studies that distinguish citation presence, citation correctness and entailment between the cited passage and generated claim.
- **What I will test or write next:** Add a provenance UAT condition to the Turin interface: for a sample of generated claims, test whether a researcher can move from the claim to the exact supporting passage, identify the source and date, and determine whether the passage genuinely warrants the generated interpretation.