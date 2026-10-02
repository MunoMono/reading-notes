---
title: "Do multi-document summarization models synthesize?"
authors: "DeYoung, Jay and Martinez, Stephanie C. and Marshall, Iain J. and Wallace, Byron C."
year: 2024
journal: "Transactions of the Association for Computational Linguistics"
citation_key: DeYoung2024MultiDocumentSummarizationModels
doi: "10.1162/tacl_a_00687"
url: "https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00687/124262/Do-Multi-Document-Summarization-Models-Synthesize"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
last_updated: "02 Oct 2026"
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
source_type: "Context / supporting"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
  - "03 RAG, retrieval and source attribution"
  - "09 Human judgement and practice-led computational research"
  - "10 Conversational AI and completion norms"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Context / supporting  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 02 LLM epistemic risk and persuasive fluency; 03 RAG, retrieval and source attribution; 09 Human judgement and practice-led computational research; 10 Conversational AI and completion norms  

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
I need empirical evidence that synthesising across multiple sources is a distinct problem from summarising them, particularly when the inputs disagree, and that apparently coherent generated summaries may fail to preserve the evidential balance of the underlying material.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin discussion of bounded multi-source synthesis. It supports the argument that retrieving several relevant traces does not ensure that a generated synthesis faithfully represents their collective evidential structure, because synthesis can be sensitive to presentation order and insufficiently responsive to substantive changes in the evidence set.

**Why this term, not alternatives (1–2 lines):**  
I use *synthesis* rather than *summarisation* where the task requires relating potentially conflicting inputs and representing what they collectively support. For the DDR, however, synthesis does not mean calculating an average position; it means preserving the evidential relations, disagreements and qualifications among traces.

**My benchmark for using it (1–2 criteria I will apply):**  
Use DeYoung et al. to establish that multi-source synthesis requires explicit evaluation beyond fluency or conventional summarisation metrics, and that abstention can be a legitimate synthesis outcome. Do not transfer their aggregate-target model directly to historical evidence, where no numerical ground truth may exist.

# Position + moment (2–4 lines)

DeYoung, Martinez, Marshall and Wallace write from NLP and biomedical evidence synthesis, bringing techniques from multi-document summarisation into tasks where several inputs must be reconciled into an aggregate account. Their 2024 paper is particularly concerned with whether neural summarisation systems implicitly perform synthesis when inputs contain differing or conflicting positions. They evaluate this through movie-review consensus and clinical systematic-review evidence, including GPT-4 alongside specialised summarisation models.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Conventional summarisation assumes that preserving salient content is sufficient. DeYoung et al. show that multi-source synthesis additionally requires responsiveness to the composition of the evidence itself; for historical research this requirement must be extended further because disagreement and asymmetry may need to remain unresolved rather than aggregated into consensus.

# The author’s main move (1 sentence)

They try to distinguish synthesis from ordinary multi-document summarisation by testing whether generated summaries accurately track an aggregate property across potentially conflicting inputs and by introducing an inference-time generate–select–abstain procedure when ordinary decoding fails to do so.

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not by itself establish the DDR-specific extension made below.
- **Researcher inference:** I extend this source-specific finding to the DDR as a methodological proposition that must remain answerable to the archive rather than being treated as established by this source.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Both experimental tasks possess an externally measurable aggregate target—review sentiment or meta-analytic treatment effect—whereas contested archival traces may not admit a meaningful average, consensus score or singular ground-truth synthesis.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 2
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not by itself establish the DDR-specific extension made below.
- **Researcher inference:** I extend this source-specific finding to the DDR as a methodological proposition that must remain answerable to the archive rather than being treated as established by this source.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Both experimental tasks possess an externally measurable aggregate target—review sentiment or meta-analytic treatment effect—whereas contested archival traces may not admit a meaningful average, consensus score or singular ground-truth synthesis.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 3
- **Claim (plain):** 
- **Author claim:** 
- **Evidence-supported claim:** The cited material supports this claim at the stated scope and pages; it does not by itself establish the DDR-specific extension made below.
- **Researcher inference:** I extend this source-specific finding to the DDR as a methodological proposition that must remain answerable to the archive rather than being treated as established by this source.
- **Evidence (quote/paraphrase + page):** 
- **Warrant (my words):** 
- **Boundary:** Both experimental tasks possess an externally measurable aggregate target—review sentiment or meta-analytic treatment effect—whereas contested archival traces may not admit a meaningful average, consensus score or singular ground-truth synthesis.
- **Consequence:** 
- **Practice cross-check:** 

## Claim 4
- **Claim (plain):** Human-written summaries align with aggregate evidence better than most tested model summaries.
- **Author claim:** DeYoung et al. compare generated and human summaries against measurable aggregate targets in movie reviews and systematic reviews.
- **Evidence-supported claim:** Human summaries show stronger alignment with aggregate sentiment and meta-analytic treatment-effect conclusions than most generated summaries, with GPT-4 performing comparatively well but still imperfectly.
- **Researcher inference:** DDR should not assume that an LLM's ability to compress many documents implies reliable synthesis across them.
- **Evidence (quote/paraphrase + page):** For movie reviews, human meta-reviews correlate more strongly with aggregate sentiment than most model outputs; for systematic reviews, human summaries more often match the meta-analytic result than model-generated summaries. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1049]`
- **Warrant (my words):** Summarization quality and evidence aggregation are distinct capabilities.
- **Boundary:** These tasks have measurable aggregate targets that contested archival interpretation often lacks.
- **Consequence:** DDR evaluation should test whether synthesis tracks the balance and contradiction of retrieved evidence, not only whether the prose is relevant and readable.
- **Practice cross-check:** Create UAT cases where evidence composition is deliberately changed and check whether the answer changes in the warranted direction.

## Claim 5
- **Claim (plain):** Standard text-overlap metrics do not directly measure whether a model has synthesised evidence correctly.
- **Author claim:** The paper distinguishes synthesis targets from conventional summarization objectives such as ROUGE.
- **Evidence-supported claim:** Its method introduces latent aggregate measures because n-gram overlap can reward textual similarity without establishing that the output reflects the balance of evidence.
- **Researcher inference:** DDR answer evaluation cannot rely on lexical similarity or generic answer-quality metrics to judge historical synthesis.
- **Evidence (quote/paraphrase + page):** The authors describe ROUGE as a standard but flawed summary-quality measure and introduce separate sentiment/treatment-effect measures to assess synthesis itself. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045]`
- **Warrant (my words):** A metric must correspond to the epistemic property being evaluated.
- **Boundary:** DDR lacks a universal numerical analogue of sentiment or meta-analytic treatment effect.
- **Consequence:** The thesis needs evidence-specific UAT criteria—relevant traces, preserved status, ambiguity and limits—rather than a single generic generation score.
- **Practice cross-check:** Keep retrieval metrics separate from human evaluation of whether the final historical claim is warranted.

## Claim 6
- **Claim (plain):** Improving synthesis creates trade-offs and abstention is a legitimate system behaviour.
- **Author claim:** The authors' candidate-selection method improves alignment with aggregate targets but they warn that optimising one synthesis measure may harm other summary qualities and explicitly discuss abstention.
- **Evidence-supported claim:** The conclusion presents synthesis robustness as an unresolved challenge and notes that systems may need to abstain when no candidate adequately represents the target.
- **Researcher inference:** A DDR system should be allowed to withhold synthesis when available traces cannot support a stable or sufficiently evidenced answer.
- **Evidence (quote/paraphrase + page):** The conclusion states that existing models synthesise only partially, remain sensitive to perturbations, and that optimisation for one measure can trade off against other qualities; it also identifies abstention as a useful design option. `[@DeYoung2024MultiDocumentSummarizationModels, p. 1056]`
- **Warrant (my words):** Forcing an answer converts model availability into unwarranted epistemic completion.
- **Boundary:** The paper's abstention criterion depends on measurable task targets and cannot define DDR insufficiency by itself.
- **Consequence:** Scoped missingness should be treated as successful bounded behaviour, not as a failure to answer.
- **Practice cross-check:** Return 'insufficient / conflicting evidence in the defined corpus' when no candidate claim satisfies the evidential packet.

# Definitions / terms this changes (only the ones that matter)

- **Multi-document synthesis:** producing a concise account that represents an aggregate property or relation across multiple potentially conflicting source documents rather than merely concatenating or compressing their content. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045]`
- **Order invariance:** the requirement that changing the arbitrary ordering of the same source documents should not materially change the substantive synthesis. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050]`
- **Composition sensitivity:** the requirement that materially changing the balance or character of the input evidence should produce a corresponding change in the resulting synthesis. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1051]`
- **Cautious summarisation:** generation in which the system can abstain when it cannot produce an output consistent with the expected synthesis criterion. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1045, 1052]`
- **Evidential synthesis:** my archival extension: a synthesis whose interpretation remains responsive to support, contradiction, source type, chronology and missingness across the retrieved traces rather than reducing those traces to an assumed consensus.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Multi-source synthesis needs its own evaluation criteria; factuality or fluency at the level of individual sentences is insufficient.
  - Input-order sensitivity provides a very practical robustness test for Turin because arbitrary sequencing should not determine historical interpretation.
  - Their generate–select–abstain architecture provides an important precursor to retrieval-augmented inference: generated prose can be evaluated against an independently determined evidential condition before it is accepted.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I replace their numerical aggregate target with an archival evidential state: supporting, qualifying, conflicting, plural or insufficient evidence.
  - I translate *abstention* into *scoped missingness*: the system remains useful by exposing the evidence and explaining the limit rather than simply returning no output.

- **What question it raises next (1–2 bullets):**
  - Which aspects of a historical synthesis should remain invariant under source-order permutation, and which should legitimately change when a new contradictory or differently situated source is introduced?
  - Can historical synthesis be validated against an explicit evidential structure without collapsing plural testimony into a single computed consensus?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methodological discussion distinguishing retrieval, summarisation and inference, to establish that multi-document synthesis is a separate problem whose output can be unstable under ordering and insufficiently responsive to changes in evidence composition.
- **Where I will name the title in running text (first-use rule):** “DeYoung et al.'s *Do Multi-Document Summarization Models Synthesize?* demonstrates that fluent multi-document summaries do not necessarily respond reliably to the structure and composition of the evidence from which they are generated.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Comparative Views / Research Query UAT: repeat the same query with shuffled source order and with controlled insertion/removal of contradictory DDR evidence, then compare changes in relation type, modality and conclusion.
- **Workstreams →** retrieval-augmented inference; bounded synthesis; robustness testing; scoped missingness; comparative inquiry
- **Deliverables →** Turin methodology; thesis S3 critical-method section; synthesis/inference UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI systems

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** Both experimental tasks possess an externally measurable aggregate target—review sentiment or meta-analytic treatment effect—whereas contested archival traces may not admit a meaningful average, consensus score or singular ground-truth synthesis.
- **Risk if misused (1 sentence):** Treating historical disagreement as an aggregation problem could erase asymmetry, chronology and positional difference by converting several situated archival voices into an artificial computational consensus.

# Cross-source / cross-lens synthesis

DeYoung et al. clarify the distinction between summarisation and synthesis that underpins the thesis's use of RAI. Their findings complement Asai et al.'s retrieval-grounded synthesis and Radharapu et al.'s warning about forced adjudication: evidence can be present yet still be aggregated badly, and fluent output can remain insensitive to meaningful changes in the source set. For DDR, this supports perturbation testing, explicit synthesis criteria and abstention/scoped missingness as part of the evaluation design.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 1043–1045, 1048–1054, 1056
- **First full note (write it out here):** Jay DeYoung, Stephanie C. Martinez, Iain J. Marshall, and Byron C. Wallace, “Do Multi-Document Summarization Models Synthesize?,” *Transactions of the Association for Computational Linguistics* 12 (2024): 1043–1062, https://doi.org/10.1162/tacl_a_00687.
- **Short note form:** DeYoung et al., “Do Multi-Document Summarization Models Synthesize?,” [page].
- **One quote worth lifting (≤2 lines):** “models are over-sensitive to changes in input ordering and under-sensitive to changes in input compositions” (p. 1043).
- **One paraphrase worth keeping:** Multi-document models can produce synthesis-like text while remaining unstable to arbitrary input order and insufficiently responsive to substantive changes in the balance of the evidence. (pp. 1043, 1048–1051)

# Related works (only if it directly connects)

- Isch et al. (2026), *Quantifying the Prevalence and Impact of Overreaching Causal Claims in Social Science* — shows that synthesis can alter inferential strength even when relevant source material is available.
- Radharapu et al. (2025), *Arbiters of Ambivalence* — complementary evidence that computational adjudication can suppress legitimate disagreement rather than preserve it.
- Yu et al. (2025), *Evaluation of Retrieval-Augmented Generation: A Survey* — provides the wider evaluation architecture within which retrieval, faithfulness, robustness and negative rejection can be distinguished.
- Wang et al. (2025), *RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning* — explicitly separates retrieval from the subsequent application of retrieved information.
- Zhu et al. (2025), *ArgRAG* — externalises relationships among supporting and conflicting evidence into a structured inference process.
- Selyshcheva (2026), *Generative AI as a Historical Source* — supplies the historical requirement that synthesis preserve attribution, chronology, modality and evidential status.
- Ortolja-Baird and Nyhan (2022), *Encoding the Haunting of an Object Catalogue* — provides the archival warning that surviving documentary composition is itself historically produced and should not be mistaken for a neutral sample of past voices.

# Follow-ups (next actions, not vibes)

- **What I will read next:** No additional synthesis paper is immediately required for the Turin argument; DeYoung should instead be read alongside Isch, Radharapu and Zhu to distinguish evidence composition, inferential overreach, preserved disagreement and explicit evidential structuring.
- **What I will test or write next:** Add two controlled synthesis tests to Turin UAT: (1) source-order permutation, where substantive interpretation should remain stable; and (2) evidence-composition perturbation, where adding or removing materially supportive or contradictory traces should produce an appropriate, inspectable change in the interpretation.