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
source_type: "Context / supporting"
project_tags:
  - "Turin"
  - "Thesis"
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

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Multi-document synthesis is not equivalent to producing a fluent summary of several documents; the output must respond appropriately to the collective composition of the evidence.
- **Evidence (quote/paraphrase + page):** The authors define synthesis as aggregation of potentially conflicting information and argue that a valid summary should both align with the aggregate property represented by the inputs and change appropriately when that input composition changes. In their examples, a film meta-review should reflect the balance of positive and negative criticism, while a systematic-review narrative should reflect the balance of trial evidence. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1043–1045]`
- **Warrant (my words):** A synthesis makes a claim about the relation among several inputs. Its validity therefore depends not merely on whether individual source content appears in the output but on whether the collective evidential pattern has been represented appropriately.
- **So what for my thesis (a reusable sentence):** Retrieval of multiple archival traces does not itself constitute historical synthesis: the resulting interpretation must remain responsive to how those traces collectively support, qualify or contradict the relationship being proposed.
- **Practice cross-check:** Turin Research Query / Comparative Views: several retrieved DDR documents mentioning the same actor or idea should not automatically be compressed into a consensus account; the synthesis must expose whether the traces corroborate, differ or remain insufficient to establish the requested relation.

## Claim 2

- **Claim (plain):** Generated synthesis can be affected by irrelevant presentation order while remaining insufficiently responsive to substantive changes in the evidence.
- **Evidence (quote/paraphrase + page):** When identical input documents were repeatedly permuted, generated summaries changed in the sentiment or treatment effect they communicated even though synthesis should have been invariant to ordering. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1048–1050]` Figure 3 on p. 1049 visualises this spread across models. Conversely, when the authors deliberately altered the ratio of positive and negative reviews or changed the trial set sufficiently to alter the meta-analytic conclusion, models were generally under-sensitive to the changed input composition. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1051]` Figure 5 on p. 1051 shows model outputs varying much less than the underlying review composition.
- **Warrant (my words):** The generated narrative can therefore respond to accidental properties of how evidence is supplied while failing to respond proportionately to changes that should materially alter the synthesis. Fluency conceals this instability.
- **So what for my thesis:** Historical synthesis should be tested for invariance to irrelevant ordering and sensitivity to material evidential change, because a stable-looking narrative may otherwise reflect input arrangement more strongly than the archival evidence itself.
- **Practice cross-check:** Turin UAT: reorder retrieved DDR passages without changing the evidence set and test whether the substantive interpretation changes; then add or remove a materially contradictory trace and test whether the synthesis appropriately changes or preserves disagreement.

## Claim 3

- **Claim (plain):** Synthesis can be improved by making inference an explicit selection process and by allowing the system to abstain when no generated candidate adequately represents the evidence.
- **Evidence (quote/paraphrase + page):** DeYoung et al. generate a diverse set of candidate summaries, estimate the relevant aggregate property of each and select the candidate that best matches the expected property derived from the inputs. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1050–1052]` Figure 7 on p. 1052 makes the inference-time architecture explicit and includes the option to abstain when no suitable candidate is available. In the systematic-review experiments, this generate–select approach improves synthesis metrics while producing substantial abstention where no candidate matches the expected result. `[@DeYoung2024MultiDocumentSummarizationModels, pp. 1052–1054]`
- **Warrant (my words):** The final synthesis need not be whatever text the model produces first. Generation can be subordinated to an explicit evidential criterion, and failure to satisfy that criterion can legitimately terminate synthesis.
- **So what for my thesis:** Retrieval-augmented historical inference can treat non-completion as a valid methodological outcome: where generated interpretations fail to correspond to the available evidential structure, the system should expose the traces and preserve the unresolved state rather than select a fluent but unsupported narrative.
- **Practice cross-check:** Turin scoped missingness: retrieval → candidate interpretation → evidence/provenance validation → accept, qualify or reject; where no interpretation is adequately warranted, return the evidential boundary and relevant sources rather than forcing generative completion.

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