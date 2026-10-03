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
last_updated: "03 Oct 2026"
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
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Contemporary bridge literature"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
  - "03 RAG, retrieval and source attribution"
  - "09 Human judgement and practice-led computational research"
  - "10 Conversational AI and completion norms"
constraints_source: "project/constraints.md"
---

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

**How this source moves the primary research question forward:** DeYoung et al. demonstrate that multi-source synthesis is a distinct inference problem: fluent summaries can be order-sensitive, composition-insensitive and therefore poorly aligned with the evidence they aggregate.

**How this source bears on the secondary question:** It cautions against allowing computational synthesis to turn contested historical traces into an artificial consensus when revisiting DDR ideas.

**Where it sits in my argument:** Critical computational approaches / contemporary bridge literature, especially bounded multi-source synthesis and evaluation.

**My benchmark for using it:** Use to justify synthesis-specific robustness tests and abstention; do not import its numerical aggregate-target model as if historical disagreement had a single ground truth.

# Position + moment

DeYoung, Martinez, Marshall and Wallace write from NLP and biomedical evidence synthesis, testing whether neural multi-document summarisation systems genuinely respond to the collective composition of potentially conflicting inputs. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045]

# The author’s main move

They distinguish synthesis from ordinary summarisation by testing order invariance and composition sensitivity, then introduce a generate–select–abstain procedure when ordinary decoding fails those requirements. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1054]

# Critical-reading claims

## Claim 1

**Claim.** Multi-document synthesis requires representing relations across inputs, not merely compressing them. **Author claim.** The authors define synthesis as aggregation of potentially conflicting information. **Evidence.** Their film and clinical examples require outputs to track the collective balance of the source set. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045] **Evidence-supported claim.** Their film and clinical examples require outputs to track the collective balance of the source set. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045] **Researcher inference.** DDR synthesis must represent support, qualification and contradiction among traces. **Warrant.** A synthesis claims something about the relation among several sources. **Boundary.** Historical evidence may not admit a computable aggregate property. **Consequence.** Evaluation must inspect evidential relations rather than fluency alone. **Practice cross-check.** Turin comparative views should preserve whether traces corroborate, differ or remain insufficient.
## Claim 2

**Claim.** A valid synthesis should be invariant to arbitrary source ordering. **Author claim.** Reordering identical documents should not alter the substantive aggregate conclusion. **Evidence.** Repeated permutations changed communicated sentiment or treatment effect across models. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050] **Evidence-supported claim.** Repeated permutations changed communicated sentiment or treatment effect across models. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050] **Researcher inference.** DDR outputs should be tested against shuffled retrieval order. **Warrant.** Ordering is presentation noise when evidence content is unchanged. **Boundary.** Legitimate chronology is not arbitrary order and should not be erased. **Consequence.** Robustness testing must distinguish arbitrary sequence from historically meaningful sequence. **Practice cross-check.** Turin can permute retrieved passage order while preserving dates and provenance.
## Claim 3

**Claim.** Synthesis should respond when the composition of the evidence materially changes. **Author claim.** The authors test whether outputs track altered ratios of positive/negative reviews and changed trial sets. **Evidence.** Models were generally under-sensitive to these substantive composition changes. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1051] **Evidence-supported claim.** Models were generally under-sensitive to these substantive composition changes. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1051] **Researcher inference.** Adding a materially contradictory DDR trace should change or qualify the synthesis. **Warrant.** A synthesis that ignores changed evidence is not evidence-responsive. **Boundary.** One new archival trace may matter because of source status or chronology rather than numerical weight. **Consequence.** Historical composition sensitivity must be qualitative as well as quantitative. **Practice cross-check.** Turin can add or remove contradictory evidence and inspect whether the answer changes appropriately.
## Claim 4

**Claim.** Fluency can conceal sensitivity to irrelevant factors. **Author claim.** The paper shows that outputs can remain coherent while responding to arbitrary ordering. **Evidence.** Order-driven shifts occur despite unchanged evidence sets. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050] **Evidence-supported claim.** Order-driven shifts occur despite unchanged evidence sets. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050] **Researcher inference.** Stable prose quality is not evidence of stable historical reasoning. **Warrant.** Linguistic coherence does not reveal what variable actually drove the output. **Boundary.** The paper does not isolate all possible causes of model instability. **Consequence.** DDR evaluation should include perturbation tests, not only expert reading of one output. **Practice cross-check.** Turin UAT should compare repeated answers under controlled source-order changes.
## Claim 5

**Claim.** Generation can be subordinated to an external synthesis criterion. **Author claim.** The authors generate multiple candidates and select the one closest to the expected aggregate property. **Evidence.** Their generate–select method improves synthesis metrics compared with ordinary generation. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1054] **Evidence-supported claim.** Their generate–select method improves synthesis metrics compared with ordinary generation. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1054] **Researcher inference.** DDR generation should be accepted only after evidential/provenance checks external to the first model output. **Warrant.** The first generated answer need not be the final research result. **Boundary.** DDR lacks a single scalar criterion equivalent to sentiment or treatment effect. **Consequence.** Selection criteria should use evidential state, provenance and contradiction rather than a numeric consensus target. **Practice cross-check.** Turin gates synthesis through citation and evidential-status validation.
## Claim 6

**Claim.** Abstention is a legitimate synthesis outcome. **Author claim.** Their inference procedure can abstain when no candidate matches the expected synthesis criterion. **Evidence.** The systematic-review experiments show substantial abstention where suitable candidates are unavailable. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1052–1054] **Evidence-supported claim.** The systematic-review experiments show substantial abstention where suitable candidates are unavailable. [@DeYoung2024MultiDocumentSummarizationModels, pp. 1052–1054] **Researcher inference.** DDR should preserve unresolved evidence rather than force a fluent historical account. **Warrant.** Failure to meet an evidential criterion is information about the limits of synthesis. **Boundary.** Abstention in their task is judged against an external aggregate target. **Consequence.** Historical abstention should become scoped missingness rather than a generic refusal. **Practice cross-check.** Turin returns evidential limits and relevant traces when no adequate interpretation is warranted.
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

DeYoung et al. sharpen the computational lens by showing that synthesis has properties that ordinary summarisation metrics miss: order invariance, responsiveness to evidence composition and legitimate abstention. Read with Radharapu et al. and Zhu et al., this supports a DDR model that preserves disagreement and externalises evidential relations rather than averaging them away. What remains specifically historical is the need to weight chronology, provenance and source position rather than treat source sets as interchangeable votes.

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