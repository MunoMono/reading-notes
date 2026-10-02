---
title: "Evaluation of retrieval-augmented generation: a survey"
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
last_updated: "02 Oct 2026"
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
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Core text"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "03 RAG, retrieval and source attribution"
  - "07 Interface authority, ranking and retrieval bias"
  - "09 Human judgement and practice-led computational research"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Core text  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 03 RAG, retrieval and source attribution; 07 Interface authority, ranking and retrieval bias; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Substantive source → at least 6 critical claims with explicit voice separation
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)

**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now (1 sentence):**  
I need a defensible evaluation architecture for the DDR retrieval layer so that generated historical interpretations can be diagnosed in terms of retrieval quality, source grounding, response quality and whole-system behaviour rather than accepted or rejected as undifferentiated AI outputs.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin methodological evaluation section. It provides the technical spine for separating retrieval relevance and accuracy from generation relevance, faithfulness and correctness, while also identifying whole-system requirements such as diversity, robustness and negative rejection.

**Why this term, not alternatives (1–2 lines):**  
I use *RAG evaluation* for testing the retrieval-and-generation substrate and *inference validation* for the additional historical judgement applied after retrieval. Yu et al.'s framework evaluates whether the system works as RAG; it does not by itself establish whether a historical interpretation is warranted.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Yu et al. to structure evaluation into retrieval, generation and whole-system checks. Adapt rather than mechanically import correctness metrics where DDR questions admit plural interpretations or lack a singular ground truth.

# Position + moment (2–4 lines)

Yu et al. write from NLP, information retrieval and industrial AI research at a moment when RAG systems were proliferating faster than shared methods for evaluating them. Their survey synthesises twelve contemporary frameworks and proposes Auepora—A Unified Evaluation Process of RAG—as a way of organising evaluation by target, dataset and metric. The contribution is therefore taxonomic and methodological rather than an evaluation of one particular RAG system.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Much RAG evaluation assumes that relevant documents and correct answers can be specified as ground truth. Contested archival research complicates this assumption because retrieval may surface several differently situated sources, and a historically responsible output may preserve disagreement rather than converge on one reference answer.

# The author’s main move (1 sentence)

They try to make RAG evaluation systematic by separating retrieval, generation and whole-system assessment and mapping each evaluable output to appropriate ground truths, datasets and metrics.

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not itself establish the DDR-specific extension below.
- **Researcher inference:** I extend this source-specific finding to DDR as a methodological proposition that must remain answerable to the archive.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Yu et al. provide a technical framework for evaluating RAG performance and benchmarks, not a theory of archival evidence, historical interpretation or contested knowledge.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 2
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not itself establish the DDR-specific extension below.
- **Researcher inference:** I extend this source-specific finding to DDR as a methodological proposition that must remain answerable to the archive.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Yu et al. provide a technical framework for evaluating RAG performance and benchmarks, not a theory of archival evidence, historical interpretation or contested knowledge.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 3
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not itself establish the DDR-specific extension below.
- **Researcher inference:** I extend this source-specific finding to DDR as a methodological proposition that must remain answerable to the archive.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Yu et al. provide a technical framework for evaluating RAG performance and benchmarks, not a theory of archival evidence, historical interpretation or contested knowledge.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 4
- **Claim (plain):** RAG evaluation must separate retrieval, generation and end-to-end system behaviour.
- **Author claim:** Yu et al. argue that hybrid RAG systems require evaluation at three levels because each component introduces distinct failure modes.
- **Evidence-supported claim:** The survey identifies retrieval relevance/coverage, generation quality and the added value/interplay of retrieval within the whole system as separate targets.
- **Researcher inference:** DDR UAT should localise failure to retrieval, evidence packet construction or synthesis rather than scoring only the final answer.
- **Evidence (quote/paraphrase + page):** The survey states that evaluating hybrid RAG entails evaluating retrieval, generation and the RAG system as a whole, each with different challenges and metrics. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 3–4]`
- **Warrant (my words):** A good final answer can mask weak retrieval, while a bad answer can arise despite strong retrieval.
- **Boundary:** The survey addresses general RAG benchmarks, not archival source criticism.
- **Consequence:** The thesis should report stage-specific evaluation and provenance so fixes target the first point of failure.
- **Practice cross-check:** For each UAT case record retrieval traces, selected evidence, planned claims and rendered synthesis separately.

## Claim 5
- **Claim (plain):** Benchmark design is inseparable from what is evaluated, which dataset represents it and which metric operationalises success.
- **Author claim:** The authors propose Auepora around three questions: what to evaluate, how to evaluate and how to measure.
- **Evidence-supported claim:** Their Target–Dataset–Metric framework makes benchmark assumptions explicit and shows that different downstream tasks require different evaluation constructions.
- **Researcher inference:** DDR evaluation should derive metrics from the thesis's epistemic goals rather than import generic RAG leaderboard measures.
- **Evidence (quote/paraphrase + page):** Auepora organises evaluation around Target, Dataset and Metric and is designed to map evaluable outputs to suitable ground truths and measures. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 4–6]`
- **Warrant (my words):** Metrics are meaningful only relative to a defined task and evidence standard.
- **Boundary:** Historical interpretation often lacks a single ground truth and therefore cannot instantiate every Auepora relation directly.
- **Consequence:** The thesis should state which UAT behaviours are measurable quantitatively and which require qualitative archival judgement.
- **Practice cross-check:** Use retrieval recall/coverage where ground truth exists, and qualitative evidential-status checks for contested interpretation.

## Claim 6
- **Claim (plain):** A holistic RAG benchmark must include robustness, ambiguity, human preferences and practical system constraints.
- **Author claim:** Yu et al. argue that existing benchmarks usually cover only part of the RAG problem and call for targeted, user-aligned evaluation.
- **Evidence-supported claim:** Their discussion includes noisy/counterfactual documents, multi-hop and multi-document questions, hallucination, latency, output diversity and human preferences.
- **Researcher inference:** DDR's evaluation should include adversarial and ambiguity cases rather than only straightforward known-answer queries.
- **Evidence (quote/paraphrase + page):** The discussion identifies robustness to noisy documents, ambiguity/complexity, hallucination, latency, result diversity and relationships between retrieval metrics and final outputs as needed evaluation dimensions; the conclusion calls for targeted, user-aligned benchmarks. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 12–13]`
- **Warrant (my words):** Systems that succeed on simple QA can still fail under the conditions most relevant to real research.
- **Boundary:** The survey's benchmark catalogue is technical and does not define what historical ambiguity or archival silence means.
- **Consequence:** The thesis should maintain contested-interpretation and scoped-missingness families alongside known-relationship UAT.
- **Practice cross-check:** Include deliberately noisy, conflicting and corpus-insufficient DDR questions in every regression set.

# Definitions / terms this changes (only the ones that matter)

- **Auepora:** “A Unified Evaluation Process of RAG”, structured around *What to Evaluate?*, *How to Evaluate?* and *How to Measure?*, corresponding to target, dataset and metric. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 4–5]`
- **Retrieval relevance:** how well retrieved documents match the information need expressed by the query. `[@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]`
- **Retrieval accuracy:** how effectively the retrieval system identifies and ranks relevant documents over irrelevant candidates. `[@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]`
- **Generation relevance:** how closely the response aligns with the intent and requirements of the original query. `[@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]`
- **Faithfulness:** consistency between the generated response and the information contained in the retrieved documents. `[@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]`
- **Correctness:** agreement between a generated response and a designated sample or ground-truth response. `[@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5]`
- **Negative rejection:** the ability to refrain from providing an answer when available information is insufficient or too ambiguous. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12]`
- **Noise robustness:** the ability to withstand irrelevant or misleading retrieved information without degrading the response. `[@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12]`
- **Archival adequacy:** my additional criterion for DDR: whether the retrieved evidence surface is sufficiently representative and contextually appropriate to support the historical inference being attempted, including relevant contradiction and absence.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper gives me the technical evaluation spine for Turin: retrieval, generation and whole-system behaviour should be assessed separately.
  - Faithfulness is essential because it asks whether generated statements remain grounded in retrieved sources, but it needs to be supplemented by archival adequacy and historical warrant.
  - Negative rejection, noise robustness and diversity are especially valuable for the DDR because they move evaluation beyond “can the system answer?” towards “does the system behave responsibly under imperfect evidential conditions?”

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I replace singular *correctness* with *historical warrant* where there is no defensible single reference answer: the question becomes whether the claim is supportable from the available traces and appropriately qualified.
  - I expand retrieval quality beyond relevance to include representational adequacy: a relevant top-k result may still omit contradictory, marginal or poorly indexed evidence.

- **What question it raises next (1–2 bullets):**
  - What is the smallest DDR evaluation set that can separately expose retrieval failure, synthesis failure, inferential overreach and genuine corpus-level missingness?
  - How should I distinguish a system that faithfully reports an incomplete retrieval set from one that has produced a historically adequate answer?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methods section where the RAG substrate is evaluated before retrieval-augmented inference is discussed: establish separate checks for retrieval relevance, response relevance, faithfulness and practical robustness, then explain why historical interpretation requires further source-critical validation.
- **Where I will name the title in running text (first-use rule):** “Yu et al.'s *Evaluation of Retrieval-Augmented Generation: A Survey* provides a useful technical framework for separating retrieval quality, generation quality and whole-system RAG performance.”
- **Link to my practice evidence (one concrete cross-reference):** Turin UAT / Findings Matrix: research question → retrieved source set → rank and source coverage → generated answer → claim-level citation support → inferential-strength check → researcher judgement.
- **Workstreams →** RAG evaluation; retrieval diagnostics; provenance; inference validation; scoped missingness; Semantic Atlas
- **Deliverables →** Turin evaluation methodology; thesis S3 methods section; RAG/inference UAT grid
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; system designers; examiners reviewing methodological validity

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** Yu et al. provide a technical framework for evaluating RAG performance and benchmarks, not a theory of archival evidence, historical interpretation or contested knowledge.
- **Risk if misused (1 sentence):** Treating relevance, faithfulness or reference-answer correctness as sufficient evidence of historical validity could make a technically successful RAG output appear methodologically secure even when retrieval is partial, the archive itself is biased or several historical interpretations remain warranted.

# Cross-source / cross-lens synthesis

Yu et al. give the technical evaluation architecture that the thesis can combine with archival criteria. Their retrieval/generation/system separation aligns with the DDR evidence pipeline, while Asai and DeYoung show why final-answer quality cannot stand in for synthesis quality. The necessary adaptation is epistemic: historical ground truth is often partial or contested, so quantitative benchmarks must be supplemented by human checks on provenance, evidential status, ambiguity and corpus limits.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–7, 9–13, 20–21
- **First full note (write it out here):** Hao Yu, Aoran Gan, Kai Zhang, Shiwei Tong, Qi Liu, and Zhaofeng Liu, “Evaluation of Retrieval-Augmented Generation: A Survey” (2025), https://doi.org/10.1007/978-981-96-1024-2_8.
- **Short note form:** Yu et al., “Evaluation of Retrieval-Augmented Generation,” [page].
- **One quote worth lifting (≤2 lines):** “Evaluating hybrid RAG systems entails evaluating retrieval, generation and the RAG system as a whole” (p. 3).
- **One paraphrase worth keeping:** RAG evaluation should distinguish whether the retrieved evidence is relevant and accurately selected, whether the generated answer addresses the question and remains faithful to those sources, and whether the complete system behaves robustly under noise, ambiguity and insufficient evidence. (pp. 3–7, 12)

# Related works (only if it directly connects)

- Es et al. (2023), *RAGAS: Automated Evaluation of Retrieval Augmented Generation* — one of the principal frameworks surveyed by Yu et al., operationalising context relevance, answer relevance and faithfulness.
- Saad-Falcon et al. (2023), *ARES* — complements RAGAS with automated classifiers for context relevance, answer faithfulness and answer relevance.
- Chen et al. (2023), *Benchmarking Large Language Models in Retrieval-Augmented Generation (RGB)* — particularly relevant to Turin because it includes noise robustness, negative rejection and counterfactual robustness.
- Bernard and Balog (2025), *A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval* — extends retrieval assessment beyond technical relevance into ranking, exposure and fairness.
- Isch et al. (2026), *Quantifying the Prevalence and Impact of Overreaching Causal Claims in Social Science* — shows why source faithfulness needs an additional inferential-strength check: generation can strengthen relationships beyond source warrant.
- Selyshcheva (2026), *Generative AI as a Historical Source* — adds specifically historical validation requirements around chronology, attribution, modality and citation integrity.
- Radharapu et al. (2025), *Arbiters of Ambivalence* — demonstrates why reference-answer correctness is insufficient where legitimate disagreement should remain unresolved.
- Ortolja-Baird and Nyhan (2022), *Encoding the Haunting of an Object Catalogue* — supplies the archival reason why technically relevant retrieval can still reproduce inherited silence and partiality.

# Follow-ups (next actions, not vibes)

- **What I will read next:** RGB / Chen et al. selectively because negative rejection, noise robustness and counterfactual robustness are the parts of Yu et al.'s survey that map most directly onto scoped missingness and archival evidential restraint.
- **What I will test or write next:** Build a two-layer Turin evaluation grid: Layer 1 evaluates RAG technically—retrieval relevance, retrieval coverage, answer relevance, faithfulness, robustness and negative rejection; Layer 2 evaluates historical inference—chronology, attribution, relation strength, contradiction, plurality, provenance and corpus-level missingness.