---
title: "Synthesizing scientific literature with retrieval-augmented language models"
authors: "Asai, Akari and He, Jacqueline and Shao, Rulin and Shi, Weijia and Singh, Amanpreet and Chang, Joseph Chee and Lo, Kyle and Soldaini, Luca and Feldman, Sergey and D'Arcy, Mike and Wadden, David and Latzke, Matt and Sparks, Jenna and Hwang, Jena D. and Kishore, Varsha and Tian, Minyang and Ji, Pan and Liu, Shengyan and Tong, Hao and Wu, Bohao and Xiong, Yanyu and Zettlemoyer, Luke and Neubig, Graham and Weld, Daniel S. and Downey, Doug and Yih, Wen-tau and Koh, Pang Wei and Hajishirzi, Hannaneh"
year: 2026
journal: "Nature"
citation_key: asaiSynthesizingScientificLiterature2026
doi: "10.1038/s41586-025-10072-4"
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

**Seams to watch (optional, pick 1):**
- Where historical contestation meets archive structure
- How organisation choices reveal or hide contested knowledge
- When computational methods clarify or distort contested traces

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
**Why I’m reading this now (1 sentence):** This paper is a high-signal example of RAG systems being used to synthesize dispersed scientific evidence at scale and helps define the retrieval-plus-generation boundary relevant to archive-facing inference.  
**Where it sits in my argument (chapter/section + what it helps me say):** S3.3 retrieval-augmented inference; it helps support the case that retrieval systems can surface contested knowledge but still require careful evaluation and interpretation.  
**Why this term, not alternatives (1–2 lines):** The paper names the model family directly and gives a concrete operational account of how retrieval supports synthesis across a corpus rather than only point-answering.  
**My benchmark for using it (1–2 criteria I will apply):** I will use it to compare retrieval-augmented synthesis with archive-oriented retrieval and to assess how it handles noisy, multi-claim evidence.  

# Position + moment (2–4 lines)
This work sits in the emerging evaluation and system-building literature around RAG and scientific literature synthesis. It addresses the problem of turning dispersed evidence into a coherent, grounded summary in settings where retrieval quality materially shapes the final synthesis.  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** RAG is not merely a retrieval wrapper; it is a knowledge synthesis pipeline whose success depends on evidence selection, indexing, and evaluation strategy.  

# The author’s main move (1 sentence)
They develop a retrieval-augmented literature synthesis approach that combines retrieval, evidence aggregation, and generation in order to produce more grounded and scalable scientific overviews.  

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Scientific literature synthesis benefits from retrieval-augmented methods because evidence is distributed across many documents rather than stored in a single source.
- **Evidence (quote/paraphrase + page):** ``[@asaiSynthesizingScientificLiterature2026, p. TODO]``
- **Warrant (my words):** The paper treats synthesis as a retrieval problem in which relevant evidence must be gathered and organized before generation.
- **So what for my thesis (a reusable sentence):** Retrieval can support archive interpretation by helping surface relevant traces across dispersed records rather than relying on a single document or an unstructured prompt.
- **Practice cross-check:** Cross-check against archival retrieval tasks in the DDR archive where contested design knowledge is dispersed across multiple records and metadata layers.  

## Claim 2
- **Claim (plain):** In retrieval-heavy knowledge work, the quality of the retrieval layer is a central determinant of the final synthesis quality.
- **Evidence (quote/paraphrase + page):** ``[@asaiSynthesizingScientificLiterature2026, p. TODO]``
- **Warrant (my words):** The paper’s contribution is framed around retrieval-augmented synthesis, implying that generation alone cannot recover from weak evidence collection.
- **So what for my thesis:** This supports a project-level caution: archive-facing AI systems should be designed around reliable retrieval, contextual relevance, and traceability rather than output fluency alone.
- **Practice cross-check:** Compare with how keyword, metadata, or semantic search may shape which DDR traces are surfaced and which remain invisible.  

## Claim 3
- **Claim (plain):** Scientific synthesis requires evaluation criteria beyond answer correctness, including evidence grounding and the ability to reconcile multiple sources.
- **Evidence (quote/paraphrase + page):** ``[@asaiSynthesizingScientificLiterature2026, p. TODO]``
- **Warrant (my words):** The paper’s interest in synthesizing literature implies that groundedness across multiple documents matters as much as factual correctness.
- **So what for my thesis:** In an archival context, contested design knowledge may require not just retrieval but interpretive synthesis that can hold uncertainty and disagreement transparently.
- **Practice cross-check:** This invites comparison with archive interpretation tasks that involve contested narratives, incomplete records, or multiple stakeholders’ accounts.  

# Definitions / terms this changes (only the ones that matter)
- **Term:** retrieval-augmented synthesis — a form of evidence-grounded synthesis in which a model retrieves relevant documents before composing a response; relevant for archive and source-criticism work.  

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It clarifies how RAG can be used beyond single-question answering to synthesize evidence across a literature base.
  - It foregrounds retrieval quality as a structural factor in the quality of generated outputs.
  - It offers a useful model for thinking about evidence aggregation in contested archives.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I would frame this as a method for grounded evidence synthesis rather than as a generic AI productivity tool.
  - I would treat retrieval quality and source accountability as part of the archive methodology, not only the model pipeline.
- **What question it raises next (1–2 bullets):**
  - How can archive retrieval be designed so that contested traces are surfaced rather than flattened?
  - What evaluation criteria should a design archive use for retrieval-augmented synthesis beyond citation or answer accuracy?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the S3.3 retrieval-augmented inference section, when explaining how retrieval can surface and synthesize dispersed design evidence.  
- **Where I will name the title in running text (first-use rule):** “Asai et al.’s ‘Synthesizing scientific literature with retrieval-augmented language models’ demonstrates how retrieval can support evidence-grounded synthesis across large corpora.”  
- **Link to my practice evidence (one concrete cross-reference):** Compare with the archive’s retrieval and metadata conditions in the DDR materials.  
- **Workstreams →** retrieval design; evidence synthesis; interpretive evaluation  
- **Deliverables →** note on RAG design for archive synthesis; evaluation criteria for retrieval-augmented archive use  
- **Stakeholders →** archivists; design researchers; AI researchers  

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is most useful for understanding retrieval-augmented synthesis in a scientific corpus; it is less directly about archival controversy or design-method interpretation.
- **Risk if misused (1 sentence):** It could be misread as a simple productivity model, flattening the critical question of how evidence is selected and what gets omitted.  

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
- **One paraphrase worth keeping:** Retrieval-augmented synthesis treats evidence location as a first-class part of the reasoning pipeline. (p. TODO)

# Related works (only if it directly connects)
- Yu et al., “Evaluation of Retrieval-Augmented Generation: A Survey”
- Wang et al., “RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning”
- Zhu et al., “ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation”

# Follow-ups (next actions, not vibes)
- What I will read next: Compare with the evaluation and explainability papers in the same RAG cluster.
- What I will test or write next: Draft a short comparison of retrieval-augmented synthesis versus archive-oriented retrieval for contested design knowledge.
