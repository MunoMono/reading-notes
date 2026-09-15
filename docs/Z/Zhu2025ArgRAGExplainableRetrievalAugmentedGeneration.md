---
title: "ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation"
authors: "Zhu, Yuqicheng and Potyka, Nico and Hernández, Daniel and He, Yuan and Ding, Zifeng and Xiong, Bo and Zhou, Dongzhuoran and Kharlamov, Evgeny and Staab, Steffen"
year: 2025
journal: "arXiv"
citation_key: zhuArgRAGExplainableRetrieval2025
doi: "10.48550/ARXIV.2508.20131"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "15 Sep 2026, 00:00"
last_updated: "15 Sep 2026, 00:00"
north_star_source: "project/north-star.yml"
north_star_mtime: "15 Sep 2026, 00:00"
north_star_sha1: "placeholder"
category: "S3: Surfacing and reactivating traces computationally"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Context / supporting"
project_tags:
  - "Turin"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
constraints_source: "project/constraints.md"
---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Context / supporting  
**Project/output tags:** Turin  
**Literature clusters:** 02 LLM epistemic risk and persuasive fluency  

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Why I’m reading this now (1 sentence):** This paper is relevant because it directly addresses a core issue for archival and design-knowledge systems: how to make retrieval-augmented reasoning explainable and contestable when evidence is noisy or contradictory.  
**Where it sits in my argument (chapter/section + what it helps me say):** S3.3 retrieval-augmented inference; it helps support the idea that a retrieval pipeline should not merely produce confident outputs but also show how evidence supports or challenges a claim.  
**Why this term, not alternatives (1–2 lines):** The title foregrounds explainability and argumentation, which are essential when archive material contains conflict, uncertainty, and multiple historical framings rather than a single stable answer.  
**My benchmark for using it (1–2 criteria I will apply):** I will use it to assess whether a system provides transparent reasoning and contestability rather than opaque confidence.  

# Position + moment (2–4 lines)
This paper sits in the explainable AI and structured-reasoning literature for RAG. It argues that conventional RAG models are brittle in noisy, contradictory evidence settings and proposes a more transparent inference framework based on quantitative bipolar argumentation.  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** For archival work, an answer may be less about finding the single correct fact than about making the evidence structure visible and open to challenge.  

# The author’s main move (1 sentence)
They replace opaque retrieval-plus-generation with a quantitative bipolar argumentation framework in order to produce explainable and contestable reasoning over retrieved evidence.  

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Retrieval-augmented generation is vulnerable in high-stakes settings because retrieved evidence may be noisy, contradictory, or incomplete.
- **Evidence (quote/paraphrase + page):** ``[@zhuArgRAGExplainableRetrieval2025, p. TODO]``
- **Warrant (my words):** The paper frames the problem as one of opaque and stochastic decision-making that becomes especially sensitive when evidence conflicts.
- **So what for my thesis (a reusable sentence):** This is directly relevant to archive-facing research because contested design knowledge often includes competing narratives, partial records, and uncertain provenance.
- **Practice cross-check:** Compare with archive cases where conflicting records and interpretive disagreement need to be surfaced rather than collapsed into a single answer.  

## Claim 2
- **Claim (plain):** Explainability is not an afterthought but a core feature of a reliable RAG system where evidence is contested.
- **Evidence (quote/paraphrase + page):** ``[@zhuArgRAGExplainableRetrieval2025, p. TODO]``
- **Warrant (my words):** The proposed QBAF architecture is designed to convert evidence into structured argumentative relations that can be inspected and contested.
- **So what for my thesis:** For my project, this suggests that retrieval systems should expose how evidence supports or challenges a claim rather than hiding it inside a black-box output.
- **Practice cross-check:** Evaluate whether DDR archive retrieval is transparent to the user about uncertainty, conflict, and the basis for interpretation.  

## Claim 3
- **Claim (plain):** Contestability is a desirable property in knowledge systems dealing with ambiguous or historically loaded material.
- **Evidence (quote/paraphrase + page):** ``[@zhuArgRAGExplainableRetrieval2025, p. TODO]``
- **Warrant (my words):** The authors explicitly argue for explainable, contestable reasoning as an alternative to opaque black-box inference.
- **So what for my thesis:** This strongly aligns with archival work, where contestation is not a bug to eliminate but a condition of interpretation that needs to be made legible.
- **Practice cross-check:** The archive can be treated as a space where disagreement and multiple viewpoints are not errors but essential historical evidence.  

# Definitions / terms this changes (only the ones that matter)
- **Term:** quantitative bipolar argumentation — a structured reasoning model in which evidence can support or attack a claim with varying strength, allowing explainable and contestable decisions.  

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It demonstrates that explainability and contestability are meaningful design goals in RAG, not optional extras.
  - It offers a useful way to think about conflicting archive evidence as a structured argument rather than as noise to be filtered away.
  - It provides a strong anchor for discussing interpretive transparency in archive-facing AI.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I would adapt this idea to historical archives by treating evidence conflict as a signal that interpretation is underway, not a failure of the system.
  - I would frame contestability as part of responsible archival AI rather than a purely technical or philosophical addition.
- **What question it raises next (1–2 bullets):**
  - How can archival interfaces show disagreement and evidence strength without overwhelming users?
  - What would a contestable retrieval interface for the DDR archive look like in practice?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the S3.3 section on retrieval-augmented inference, when explaining why contested design knowledge requires transparent, structured reasoning rather than single-answer confidence.  
- **Where I will name the title in running text (first-use rule):** “Zhu et al.’s ‘ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation’ shows how retrieval pipelines can expose the structure of support and challenge in a claim.”  
- **Link to my practice evidence (one concrete cross-reference):** Compare with contested design knowledge in the DDR archive, where records may point in multiple directions and need argument-like framing.  
- **Workstreams →** explainability; contestable inference; archival argumentation  
- **Deliverables →** note on transparency and contestability for archive-facing RAG; design recommendation for explainable retrieval interface  
- **Stakeholders →** archivists; design researchers; systems designers  

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is most useful for conceptualizing explainable contestability in retrieval-based inference; it does not directly model the historical complexity of the RCA archive itself.
- **Risk if misused (1 sentence):** It could encourage an overly formal or deterministic view of archival evidence, ignoring the interpretive and political dimensions of contested records.  

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [ ] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. TODO
- **First full note (write it out here):**  
- **Short note form:**  
- **One quote worth lifting (≤2 lines):** “…” (p. TODO)
- **One paraphrase worth keeping:** In high-stakes or conflicting evidence settings, explainability is a condition for trustworthy retrieval-augmented reasoning. (p. TODO)

# Related works (only if it directly connects)
- Wang et al., “RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning”
- Asai et al., “Synthesizing scientific literature with retrieval-augmented language models”
- Yu et al., “Evaluation of Retrieval-Augmented Generation: A Survey”

# Follow-ups (next actions, not vibes)
- What I will read next: Explore other interpretability and argumentation frameworks in AI to compare how they formalize evidence conflict.
- What I will test or write next: Draft a conceptual model for how archive disputes could be represented as support/challenge relations rather than flattened into a single answer.
