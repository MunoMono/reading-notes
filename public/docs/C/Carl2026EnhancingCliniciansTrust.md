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
last_updated: "16 Sept 2026"
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
project_tags: 
  - "Turin"
literature_clusters: 
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"
---

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
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)

**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now (1 sentence):**  
I need empirical evidence that placing provenance-bearing citations and original source passages directly alongside generated answers improves users’ ability to verify AI-mediated claims.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin methodological discussion of provenance. It supports the claim that traceability should be designed into the user-facing answer so that researchers can move directly from generated interpretation back to the evidence from which it was produced.

**Why this term, not alternatives (1–2 lines):**  
I use *verifiability* rather than *explainability* for this function because the system does not reveal the internal causal reasoning of the LLM. It allows the user to externally inspect the source evidence associated with a generated claim.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Carl et al. where I need empirical support for inline citation and source-preview design. Do not claim that source visibility makes an interpretation correct or that increased user trust necessarily represents appropriately calibrated trust.

# Position + moment (2–4 lines)

Carl et al. write from clinical oncology, digital medicine and medical AI, where incorrect or unverifiable generated recommendations create immediate professional risk. Their 2026 randomized controlled reader study compares GPT-4o with a GPT-4o-based RAG system that adds a curated guideline knowledge base, inline citations and previewable source passages. The paper therefore moves beyond benchmarking answer accuracy to test how provenance presentation affects professional evaluation and trust.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Much explainable-AI research attempts to make model reasoning intelligible. Carl et al. instead shift attention towards external verification: users need not understand the internal model mechanism if they can inspect the authoritative evidence associated with its claims. For historical research, however, source inspection validates evidential grounding rather than guaranteeing a single correct interpretation.

# The author’s main move (1 sentence)

They try to improve the trustworthiness of LLM-supported clinical recommendations by coupling retrieval-augmented generation with inline citations and previewable source passages so that clinicians can directly inspect the evidence underlying generated claims.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Provenance can be made a direct user-facing property of a generated answer rather than an invisible backend function.
- **Evidence (quote/paraphrase + page):** UroBot links inline references directly to “source text previews” showing the original retrieved guideline segment used to produce the answer, allowing clinicians to verify and cross-check the generated information against the source material. `[@Carl2026EnhancingCliniciansTrust, p. 2]` Figure 1 demonstrates the interaction visually: a citation embedded in the answer expands to reveal the corresponding guideline text and recommendation evidence.
- **Warrant (my words):** Provenance becomes actionable when the user can move immediately from a generated claim to the evidential passage associated with it. A bibliography or generic source label offers weaker scrutiny because the user must independently locate the supporting material.
- **So what for my thesis (a reusable sentence):** Evidential provenance is most useful when it operates as an interaction: the researcher should be able to move directly from an AI-mediated interpretation to the archival trace on which that interpretation depends.
- **Practice cross-check:** Turin citation system: generated claims include hyperlinks to the underlying DDR source passages, allowing the researcher to reopen and inspect the evidence rather than accepting a citation label at face value.

## Claim 2

- **Claim (plain):** Specific, directly inspectable source attribution substantially improves users’ ability to verify generated outputs.
- **Evidence (quote/paraphrase + page):** In the blinded reader study, 84% of UroBot outputs were rated fully verifiable compared with 35% for ChatGPT, while full source attribution was 74% versus 30%. `[@Carl2026EnhancingCliniciansTrust, pp. 3–4]` The qualitative analysis found that 28% of ChatGPT's source attributions were non-existent and 83% of its valid citations lacked a specific section, whereas UroBot consistently linked recommendations to specific source segments. `[@Carl2026EnhancingCliniciansTrust, pp. 4–5]`
- **Warrant (my words):** Citation presence and citation quality are different properties. A source name can create an appearance of authority while leaving the user unable to establish whether the cited material actually supports the generated statement.
- **So what for my thesis:** Traceability requires passage-level evidence, not merely bibliographic citation: a generated historical claim should be inspectable against the specific archival material from which it was inferred.
- **Practice cross-check:** Turin answers link citations to retrieved passages beneath the answer rather than citing only document-level metadata; this permits quotation-level checking against the source.

## Claim 3

- **Claim (plain):** External verification provides a practical alternative to claims that opaque model reasoning itself has been explained.
- **Evidence (quote/paraphrase + page):** Carl et al. acknowledge that LLM reasoning remains fundamentally opaque and state that their approach shifts the emphasis from interpreting internal model dynamics towards “external verification through traceable references”. `[@Carl2026EnhancingCliniciansTrust, p. 5]` Clinicians significantly preferred UroBot for source verifiability and trust, while no corresponding advantage occurred for basic summarisation. `[@Carl2026EnhancingCliniciansTrust, pp. 4–5]`
- **Warrant (my words):** The epistemically important interface question is not necessarily whether the model can narrate its own reasoning, but whether the user can independently inspect the evidence associated with the resulting claim.
- **So what for my thesis:** For archival research, accountable AI need not promise access to an LLM's internal reasoning; it can instead expose the evidential route from retrieved trace to generated interpretation so that the researcher retains responsibility for judgement.
- **Practice cross-check:** Turin does not present chain-of-thought as historical explanation. Its citations, source previews and provenance metadata allow the researcher to inspect the documentary basis of the answer independently of the model's internal generation process.

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