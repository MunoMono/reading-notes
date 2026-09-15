---
title: "RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning"
authors: "Wang, Yu and Zhao, Shiwan and Wang, Zhihu and Fan, Ming and Zhang, Xicheng and Zhang, Yubo and Wang, Zhengfan and Huang, Heyuan and Liu, Ting"
year: 2025
journal: "arXiv"
citation_key: wangRAGEnhancingRetrievalAugmented2025
doi: "10.48550/ARXIV.2506.11555"
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
**Why I’m reading this now (1 sentence):** This paper addresses a central weakness in RAG: retrieval can surface information without helping the model reason about how to apply it to a task.  
**Where it sits in my argument (chapter/section + what it helps me say):** S3.3 retrieval-augmented inference; it helps support a distinction between retrieval of facts and retrieval plus application-aware reasoning for archive-facing tasks.  
**Why this term, not alternatives (1–2 lines):** The title directly signals a gap in current RAG workflows: the missing step between retrieved knowledge and task-specific use. That is highly relevant to archival interpretation, where context and application matter.  
**My benchmark for using it (1–2 criteria I will apply):** I will use it to assess whether RAG systems are merely retrieving facts or genuinely helping the model reason under archive-specific tasks and constraints.  

# Position + moment (2–4 lines)
This is a systems and method paper in the LLM/RAG literature, focused on improving performance when tasks require applying knowledge to a concrete problem rather than simply recalling a fact. It sits in the literature that tries to move beyond naive retrieval by making the inference stage more task-aware.  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** RAG is strongest when the task context is built into the retrieval and reasoning pipeline. In archival work, the application context is often interpretive, contested, and historically situated rather than purely factual.  

# The author’s main move (1 sentence)
They propose RAG+, which jointly retrieves knowledge and application examples in order to bridge the gap between retrieved facts and their productive use in task-specific reasoning.  

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Standard RAG often fails because it retrieves relevant knowledge without helping the model apply it appropriately to a task.
- **Evidence (quote/paraphrase + page):** ``[@wangRAGEnhancingRetrievalAugmented2025, p. TODO]``
- **Warrant (my words):** The paper’s central framing is that a gap remains between knowledge retrieval and actual task execution, which matters for cases where context determines meaning.
- **So what for my thesis (a reusable sentence):** For archival interpretation, retrieval alone is insufficient if the system does not know how the retrieved material should be applied in a contested or historically situated inquiry.
- **Practice cross-check:** Compare this with how DDR archive retrieval may surface documents but still fail to help interpret them correctly in context.  

## Claim 2
- **Claim (plain):** Application-aware retrieval can improve outcomes by pairing knowledge with task-specific examples.
- **Evidence (quote/paraphrase + page):** ``[@wangRAGEnhancingRetrievalAugmented2025, p. TODO]``
- **Warrant (my words):** The method builds a dual corpus of knowledge and aligned examples, suggesting that application patterns are a meaningful part of retrieval design.
- **So what for my thesis:** This offers a model for archive-facing systems in which context examples or precedents from the archive help ground interpretation rather than rely on general-purpose retrieval alone.
- **Practice cross-check:** Evaluate whether retrieval design in the DDR archive could borrow application-specific examples rather than only document matching.  

## Claim 3
- **Claim (plain):** A useful RAG pipeline should support the transformation from retrieved information into goal-oriented reasoning, not just answer generation.
- **Evidence (quote/paraphrase + page):** ``[@wangRAGEnhancingRetrievalAugmented2025, p. TODO]``
- **Warrant (my words):** The architecture explicitly emphasizes application-aware reasoning as a separate but necessary stage in the process.
- **So what for my thesis:** This emphasizes that archive interpretation is not simply about finding records; it is about activating them in a framework that makes sense of their stakes and consequences.
- **Practice cross-check:** Consider how the archive might support interpretive reasoning as much as document retrieval.  

# Definitions / terms this changes (only the ones that matter)
- **Term:** application-aware reasoning — the step of using retrieved knowledge in a task-specific way rather than as generic, decontextualized information.  

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It identifies a concrete gap in ordinary RAG: the absence of task-aware reasoning between retrieval and output.
  - It offers a practical architecture for improving inference quality by pairing knowledge with examples.
  - It is highly relevant to design-archive interpretation where context matters as much as retrieval.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I would frame this as a retrieval-plus-application model rather than a narrow retrieval enhancement.
  - I would treat contextual examples as a way to activate archive interpretation, not just to improve model accuracy.
- **What question it raises next (1–2 bullets):**
  - What counts as an application example in an archival or design history context?
  - How could a DDR archive support application-aware retrieval without flattening contested interpretation?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the S3.3 explanation of retrieval-augmented inference, to clarify the difference between retrieving fact and applying it in context.  
- **Where I will name the title in running text (first-use rule):** “Wang et al.’s ‘RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning’ identifies the missing application step in conventional RAG systems.”  
- **Link to my practice evidence (one concrete cross-reference):** Use this to interpret how archived design records may need context examples to become actionable rather than merely retrievable.  
- **Workstreams →** RAG architecture; context-aware retrieval; interpretive grounding  
- **Deliverables →** note on application-aware retrieval for design archive tasks; method sketch for archive inference pipeline  
- **Stakeholders →** archivists; researchers; AI system designers  

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This is most useful for understanding the inference stage in RAG pipelines; it is less about archival ethics or long-term cultural interpretation per se.
- **Risk if misused (1 sentence):** It could be wrongly applied as if any task example is sufficient, even when the archival context requires critical interpretation rather than simple pattern matching.  

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
- **One paraphrase worth keeping:** The key problem is not only retrieving facts but also applying them to the specific goal of the task. (p. TODO)

# Related works (only if it directly connects)
- Asai et al., “Synthesizing scientific literature with retrieval-augmented language models”
- Yu et al., “Evaluation of Retrieval-Augmented Generation: A Survey”
- Zhu et al., “ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation”

# Follow-ups (next actions, not vibes)
- What I will read next: Look at explainability-oriented RAG papers to see how contestability and justification are handled.
- What I will test or write next: Draft a comparison between naive retrieval, application-aware retrieval, and explanation-rich retrieval for archive use.
