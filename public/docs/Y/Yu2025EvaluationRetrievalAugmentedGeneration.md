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
last_updated: "03 Oct 2026"
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
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Operational literature"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
literature_clusters:
  - "03 RAG, retrieval and source attribution"
  - "07 Interface authority, ranking and retrieval bias"
  - "09 Human judgement and practice-led computational research"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"
---

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

**How this source moves the primary research question forward:** Yu et al. provide a technical evaluation architecture that separates retrieval, generation and whole-system behaviour. This gives DDR a way to diagnose whether failure occurs in evidence acquisition, source grounding, synthesis or negative rejection.

**How this source bears on the secondary question:** It helps ensure that computational revisiting of DDR is evaluated for robustness and evidential behaviour rather than only for answer fluency.

**Where it sits in my argument:** Critical computational approaches / operational literature, especially RAG evaluation and inference validation.

**My benchmark for using it:** Use to structure technical RAG evaluation; adapt correctness and ground-truth assumptions where historical questions admit plurality or missingness.

# Position + moment

Yu et al. survey twelve RAG evaluation frameworks and propose Auepora as a unified process organised around evaluation target, dataset and metric. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 2–5]

# The author’s main move

They separate retrieval, generation and whole-system assessment and map each to distinct evaluable relationships and robustness criteria. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 3–12]

# Critical-reading claims

## Claim 1

**Claim.** RAG cannot be evaluated from the final answer alone. **Author claim.** Retrieval, generation and the complete system require separate assessment. **Evidence.** The survey decomposes indexing, search, prompting and inferencing into distinct evaluable stages. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 2–4] **Evidence-supported claim.** The survey decomposes indexing, search, prompting and inferencing into distinct evaluable stages. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 2–4] **Researcher inference.** DDR failures should be diagnosed by stage rather than labelled generically as AI error. **Warrant.** Irrelevant retrieval, poor grounding and overreaching synthesis require different remedies. **Boundary.** The framework is technical rather than historical. **Consequence.** Turin evaluation logs should retain retrieval and synthesis outputs separately. **Practice cross-check.** Query → retrieved traces/ranks → synthesis → source-grounding → historical judgement.
## Claim 2

**Claim.** Retrieval relevance and retrieval accuracy are different evaluation targets. **Author claim.** The survey distinguishes matching the query from selecting/ranking relevant documents effectively. **Evidence.** Auepora separates these retrieval relationships explicitly. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Evidence-supported claim.** Auepora separates these retrieval relationships explicitly. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Researcher inference.** A relevant DDR source set can still be incomplete or badly ranked. **Warrant.** Relevance does not ensure adequate coverage or exposure. **Boundary.** The paper does not define archival representational adequacy. **Consequence.** DDR needs retrieval adequacy in addition to standard relevance. **Practice cross-check.** Turin should inspect omitted contradictory or poorly indexed traces, not only top-k relevance.
## Claim 3

**Claim.** Answer relevance and faithfulness are not the same thing. **Author claim.** Generation relevance measures response–query fit, while faithfulness measures response–retrieved-document consistency. **Evidence.** Figure 2 distinguishes these pairwise relationships. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Evidence-supported claim.** Figure 2 distinguishes these pairwise relationships. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Researcher inference.** A DDR answer can address the question while misrepresenting its sources, or faithfully summarise an inadequate retrieval set. **Warrant.** Different evidential relationships can fail independently. **Boundary.** Faithfulness to retrieved sources does not establish historical sufficiency. **Consequence.** Historical warrant must be a further evaluation layer. **Practice cross-check.** Turin should score answer relevance and claim-to-source faithfulness separately.
## Claim 4

**Claim.** Reference-answer correctness can be inappropriate for contested historical questions. **Author claim.** Correctness compares generated responses with designated sample or ground-truth answers. **Evidence.** Correctness is treated as one generation metric in Auepora. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Evidence-supported claim.** Correctness is treated as one generation metric in Auepora. [@Yu2025EvaluationRetrievalAugmentedGeneration, p. 5] **Researcher inference.** DDR often requires warrant rather than one canonical reference answer. **Warrant.** Several interpretations may remain supportable from differently situated evidence. **Boundary.** This limitation is my historical adaptation, not Yu et al.'s critique. **Consequence.** Replace singular correctness with historical warrant where necessary. **Practice cross-check.** Turin UAT should preserve competing readings instead of marking one reference wording as uniquely correct.
## Claim 5

**Claim.** RAG evaluation should test behaviour under noisy or misleading retrieval. **Author claim.** Noise and counterfactual robustness are whole-system requirements. **Evidence.** The survey includes robustness to irrelevant, misleading and incorrect retrieved material. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 11–12] **Evidence-supported claim.** The survey includes robustness to irrelevant, misleading and incorrect retrieved material. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 11–12] **Researcher inference.** DDR should deliberately test misleading proximity, irrelevant co-occurrence and contradictory traces. **Warrant.** Real archive retrieval is not a clean evidence channel. **Boundary.** Benchmark noise differs from historically meaningful contradiction. **Consequence.** Robustness tests should distinguish noise from genuine counter-evidence. **Practice cross-check.** Turin can inject irrelevant and counterfactual traces separately from authentic conflicting evidence.
## Claim 6

**Claim.** Negative rejection is a positive system capability. **Author claim.** Systems should refrain from answering when information is insufficient or too ambiguous. **Evidence.** Negative rejection appears as an explicit RAG requirement. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12] **Evidence-supported claim.** Negative rejection appears as an explicit RAG requirement. [@Yu2025EvaluationRetrievalAugmentedGeneration, pp. 7, 12] **Researcher inference.** Scoped missingness belongs inside technical evaluation rather than outside it as a narrative caveat. **Warrant.** Responsible system behaviour includes knowing when not to complete. **Boundary.** Technical negative rejection does not explain archival causes of missingness. **Consequence.** DDR evaluation should reward warranted non-answering. **Practice cross-check.** Turin includes unanswerable, ambiguous and conflicting cases in UAT.
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

Yu et al. provide the evaluation skeleton for the computational lens: retrieval, generation and whole-system behaviour must be diagnosed separately. Read with Isch and DeYoung, faithfulness alone is insufficient because synthesis can alter relation strength; read with archival theory, relevant retrieval can still reproduce partiality. The DDR evaluation model therefore needs two layers: technical RAG performance and historical evidential warrant.

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