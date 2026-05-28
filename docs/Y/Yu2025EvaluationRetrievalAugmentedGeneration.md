---
title: "Evaluation of Retrieval-Augmented Generation: A Survey"
authors: "Yu, Hao and Gan, Aoran and Zhang, Kai and Tong, Shiwei and Liu, Qi and Liu, Zhaofeng"
year: 2025
journal: ""
citation_key: Yu2025EvaluationRetrievalAugmentedGeneration
doi: "10.1007/978-981-96-1024-2_8"
url: "http://arxiv.org/abs/2405.07437"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:19"
last_updated: "27 May 2026, 09:20"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Mar 2026, 12:22"
north_star_sha1: "46ff0ae0f623"
category: "S3: Surfacing and reactivating traces computationally"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Interpretability, provenance, and retrieval"
source_type: "Core text"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.2 Interpretability, provenance, and retrieval  
**Source type:** Core text  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How retrieval quality affects the claims that can be made from generated summaries
- How to evaluate a RAG layer before using it as part of an archive-facing method

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)

**Project research question(s) this serves:** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now:**  
I am reading this to give the DDR RAG layer a defensible evaluation frame before treating its outputs as useful for archival discovery, summarisation or interpretation.

**Where it sits in my argument:**  
S3.2 Interpretability, provenance and retrieval: this source helps me specify how RAG outputs should be checked, including retrieval relevance, generation faithfulness, answer relevance, correctness, robustness and whole-system performance.

**Why this term, not alternatives:**  
“Evaluation” is useful because it shifts the discussion from whether RAG is promising to how its claims are tested. For my project, this matters because a DDR RAG output is only useful if I can show whether the right material was retrieved, whether the generated answer stays faithful to that material, and whether the answer is relevant to the archival question.

**My benchmark for using it:**  
I will use this source when I need a structured checklist for assessing a RAG workflow. I will not use it as a humanities theory source, and I will avoid importing metrics mechanically where a qualitative archival judgement is more appropriate.

# Position + moment

Yu et al. write from NLP and information-retrieval research. Their survey responds to the rapid adoption of RAG systems and the problem that RAG evaluation is harder than evaluating a conventional search engine or a standalone language model.

The paper’s key contribution is Auepora, a unified evaluation process that separates what is being evaluated, what dataset is used, and what metric is applied. It is technical, but it is useful for humanities-facing RAG because it makes the system’s moving parts visible: retrieval, generation, their interaction, and the additional requirements that affect real use.

**Canon assumptions to problematise / update for 2026:**  
The paper updates the assumption that RAG quality can be judged by answer fluency. A fluent answer may still be poorly retrieved, unfaithful to its sources, irrelevant to the question, or generated from insufficient evidence.

# The author’s main move

Yu et al. survey RAG evaluation methods by separating retrieval, generation and whole-system assessment in order to propose a structured framework for testing relevance, accuracy, faithfulness, correctness and practical performance.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  RAG evaluation must separate retrieval quality from generation quality.

- **Evidence:**  
  Yu et al. describe RAG as a hybrid system with two primary components: retrieval and generation [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 2]. Their Figure 1 on page 2 visualises the RAG structure as indexing, search, prompting and inferencing, with distinct evaluable outputs and ground truths for each stage [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 2]. They argue that evaluating RAG systems requires attention to both the specific components and the complexity of the overall system [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 2–4].

- **Warrant:**  
  This supports the claim because a RAG answer can fail in different places. It may retrieve the wrong documents, retrieve too few relevant documents, generate a plausible answer that is not grounded in the retrieved material, or generate an answer that is grounded but irrelevant to the user’s question.

- **So what for my thesis:**  
  In the DDR project, a RAG output should be logged in parts: query, retrieved records, retrieval judgement, generated answer, faithfulness judgement and archival interpretation. The generated answer alone is not the method.

- **Practice cross-check:**  
  TODO: create a DDR RAG evaluation table with separate columns for retrieval relevance, retrieval coverage, answer relevance, faithfulness to retrieved records, and manual archival judgement.

## Claim 2

- **Claim:**  
  The most useful RAG checks for archival work are relevance, faithfulness and correctness.

- **Evidence:**  
  Yu et al. define retrieval relevance as how well retrieved documents match the information need expressed in the query [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]. They define generation relevance as how well the generated response aligns with the query, faithfulness as whether the response accurately reflects the retrieved documents, and correctness as whether the response matches a ground-truth or sample response [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 5–6].

- **Warrant:**  
  These distinctions are useful because archival RAG needs to be judged against both the question and the source material. A generated answer may be relevant but not faithful, faithful but incomplete, or correct in a narrow sense while missing important context.

- **So what for my thesis:**  
  I can use these categories to evaluate DDR RAG outputs before deciding whether they support a thesis claim. Relevance checks whether the answer addresses the question; faithfulness checks whether it stays with the retrieved records; correctness checks whether it survives comparison with a known or manually verified answer.

- **Practice cross-check:**  
  TODO: apply a three-part score to five DDR RAG answers: relevance to query, faithfulness to retrieved records, correctness after manual source inspection. Add a short note explaining any failure.

## Claim 3

- **Claim:**  
  End-to-end RAG evaluation must include practical requirements such as robustness, rejection, diversity and latency.

- **Evidence:**  
  Yu et al. argue that whole-system RAG evaluation cannot be understood by assessing retrieval and generation in isolation [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 4]. They also identify additional requirements beyond retrieval and generation, including latency, diversity, noise robustness, negative rejection and counterfactual robustness [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 11–12].

- **Warrant:**  
  This matters because a RAG layer used with archival material is also an interface. It needs to work under imperfect conditions: ambiguous questions, irrelevant retrieved records, contradictory evidence, incomplete metadata, and cases where the system should say that the available evidence is insufficient.

- **So what for my thesis:**  
  A DDR RAG layer should be evaluated not only on whether it can answer, but on whether it can decline, qualify, expose uncertainty and avoid overclaiming from partial records.

- **Practice cross-check:**  
  TODO: add “insufficient evidence / should not answer” test questions to the DDR RAG evaluation set. Include at least one deliberately ambiguous query and one query where the archive subset does not contain enough evidence.

# Definitions / terms this changes

- **Auepora:**  
  Yu et al.’s “A Unified Evaluation Process of RAG”, organised around three questions: what to evaluate, how to evaluate, and how to measure [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 4]. I can adapt this as a lightweight DDR RAG evaluation checklist.

- **Retrieval relevance:**  
  The degree to which retrieved documents match the user’s query or information need [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]. For DDR, this means checking whether the retrieved traces are actually relevant to the archival question.

- **Retrieval accuracy:**  
  The degree to which retrieved documents are correctly identified and ranked in relation to candidate documents [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]. For DDR, this may require manual judgement because there may be no complete ground-truth set.

- **Generation relevance:**  
  The degree to which the generated answer aligns with the query [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5].

- **Faithfulness:**  
  The degree to which the generated answer accurately reflects the retrieved documents [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]. This is the most important check for using RAG in archival writing.

- **Correctness:**  
  The degree to which the generated answer matches a sample response or ground-truth answer [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]. For DDR, this can be approximated through manually verified answers.

- **Negative rejection:**  
  The system’s ability to avoid answering when the available information is insufficient [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12]. This is important for preventing archival overclaiming.

- **Noise robustness:**  
  The system’s ability to handle irrelevant or misleading retrieved material without degrading the answer [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12].

# My response

- **What I take from this:**  
  - The paper gives me a checklist for evaluating the DDR RAG layer rather than trusting fluent generated answers.  
  - The retrieval/generation split is crucial: I need to know whether a poor answer is caused by poor retrieval, poor synthesis or an unanswerable question.  
  - Faithfulness and negative rejection are especially important for archival method because they protect the thesis from overclaiming.

- **What I reframe / adjust:**  
  - I should write RAG evaluation as part of the method, not as a technical appendix only.  
  - I should treat a failed or uncertain RAG answer as useful evidence about the limits of the corpus, metadata or retrieval design.

- **What question it raises next:**  
  - What is the smallest defensible evaluation set for a DDR RAG prototype?  
  - Which checks should be quantitative, and which should remain qualitative archival judgement?

# Integration hooks

- **Where I will cite it:**  
  In the S3.2 methods section after introducing RAG as an archival interrogation layer. The paragraph job: explain that RAG outputs are evaluated through separate checks for retrieval relevance, generation relevance, faithfulness, correctness and system-level robustness.

- **Where I will name the title in running text:**  
  First use in the method chapter: “Yu et al.’s survey of RAG evaluation is useful here because it separates retrieval quality, generation quality and end-to-end system performance.”

- **Link to my practice evidence:**  
  TODO: link to DDR RAG evaluation log. Candidate evidence: a table of 10 DDR queries with retrieved records, answer, manual relevance score, faithfulness note and decision on whether the answer can inform writing.

- **Workstreams →**  
  RAG evaluation; source-grounded answer checking; retrieval diagnostics; negative-rejection tests; metadata quality audit; method reporting.

- **Deliverables →**  
  DDR RAG evaluation checklist; query set; retrieval log; faithfulness rubric; examples of accepted, revised and rejected RAG outputs.

- **Stakeholders →**  
  Thesis reader; supervisors; archive staff; digital humanities readers; future DDR users; anyone interpreting generated summaries from archival records.

# Boundary + risk

- **Boundary:**  
  This source is useful for structuring RAG evaluation, but it is a technical NLP survey and does not address historical interpretation, archival ethics or design research directly.

- **Risk if misused:**  
  If I import its metrics too mechanically, I could make the method look more quantitative than the DDR evidence allows; the right move is to adapt the categories into transparent archival checks.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 2–7, 9–13, 20–21

- **First full note:**  
  Hao Yu, Aoran Gan, Kai Zhang, Shiwei Tong, Qi Liu, and Zhaofeng Liu, “Evaluation of Retrieval-Augmented Generation: A Survey,” 2025, https://doi.org/10.1007/978-981-96-1024-2_8.

- **Short note form:**  
  Yu et al., “Evaluation of Retrieval-Augmented Generation,” page number.

- **One quote worth lifting:**  
  “Evaluating hybrid RAG systems entails evaluating retrieval, generation and the RAG system as a whole” [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 3].

- **One paraphrase worth keeping:**  
  Yu et al. argue that RAG evaluation must distinguish retrieval relevance and accuracy from generation relevance, faithfulness and correctness, while also testing whole-system requirements such as robustness, rejection, diversity and latency [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 3–7].

# Related works

- Ciletti on RAG for enhanced access to historical digital archives.
- Es et al. on RAGAS and automated RAG evaluation.
- Gao et al. on RAG survey literature.
- Saad-Falcon et al. on ARES.
- Chen et al. on RGB and RAG robustness.
- Jaillant, Aske and Caputo on AI, archival access, risk and trust.

# Follow-ups

- **What I will read next:**  
  Es et al. on RAGAS; Saad-Falcon et al. on ARES; one humanities RAG case study with explicit source-grounded evaluation.

- **What I will test or write next:**  
  Build a DDR RAG evaluation grid with five headings: retrieval relevance, retrieval coverage, answer relevance, faithfulness to retrieved records and manual archival judgement. Use it to test 10 carefully designed questions before using any RAG output in thesis writing.