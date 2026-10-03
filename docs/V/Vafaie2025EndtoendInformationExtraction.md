---
title: "End-to-end information extraction from archival records with multimodal large language models"
authors: "Vafaie, Mahsa; Hertling, Sven; Banse-Strobel, Inger; Dubout, Kevin; Sack, Harald"
year: 2025
journal: "Proceedings of the 34th ACM International Conference on Information and Knowledge Management"
citation_key: Vafaie2025EndtoendInformationExtraction
doi: "10.1145/3746252.3761503"
url: "https://dl.acm.org/doi/10.1145/3746252.3761503"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Multimodal machine learning"
source_type: "Core text"
project_tags:
  - "Theoretical framework"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Operational literature"
last_updated: "03 Oct 2026, 05:29"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Multimodal machine learning  
**Source type:** Core text  

**Seams to watch (optional, pick 1):**
- When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

# Thesis job

**How this source moves the primary research question forward:** Vafaie et al. provide a concrete archival case in which multimodal models extract structured information directly from heterogeneous digitised records and feed that output into a knowledge graph. It shows what an operational AI-to-access pipeline can do and where it fails.

**How this source bears on the secondary question:** The paper demonstrates how contemporary models can make historical records newly searchable and relational, while also showing that field structure, prompting, privacy and ambiguous historical markings constrain what the technology can reliably recover.

**Why I’m reading this now:** It is a strong operational comparator for the DDR pipeline: source image → machine extraction → structured representation → discovery infrastructure.

**Where it sits in my argument:** Operational literature. It is evidence about implementation and evaluation rather than a theoretical account of historical interpretation.

**My benchmark for using it:** I will use this paper for extraction/access claims only; I will not treat key-value extraction as equivalent to historical inference about contested design knowledge.

# Position + moment

The authors test multimodal large language models on approximately 1.9 million digitised German compensation index cards. The records combine print, handwriting, stamps, corrections and inconsistent layouts, making them a deliberately difficult real-world document-understanding case. [@Vafaie2025EndtoendInformationExtraction, pp. 1–2]

# The author’s main move

Vafaie et al. argue that MLLM-based, OCR-free key-information extraction can outperform older document-understanding approaches on heterogeneous archival records, but that performance depends on model configuration, field type, prompting strategy and deployment context rather than model scale alone. [@Vafaie2025EndtoendInformationExtraction, pp. 1–8]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Multimodal models can substantially outperform older document-understanding baselines on heterogeneous archival records.
- **Author claim:** The authors present MLLMs as a way to avoid brittle OCR/layout pipelines for degraded, semi-structured historical documents.
- **Evidence-supported claim:** InternVL2.5-38B produces the strongest reported zero-shot results (NED 0.080; 83% exact match; 88% partial match at edit distance 1; 91% at distance 3), markedly outperforming Donut baselines around 56–59% exact match. [@Vafaie2025EndtoendInformationExtraction, pp. 1–2, 6–7]
- **Researcher inference:** Multimodal models may be appropriate where DDR source forms combine layout, handwriting, marginalia or visual structure that text-only OCR pipelines flatten.
- **Evidence (quote/paraphrase + page):** The paper's experiments show open-source InternVL2.5-38B outperforming both larger variants and the tested proprietary alternative on BZKOpen. [@Vafaie2025EndtoendInformationExtraction, pp. 6–7]
- **Warrant (my words):** Direct image-language modelling can exploit visual and textual context that a staged OCR pipeline may lose.
- **Boundary:** The task is predefined key-value extraction from index cards, not interpretative historical reasoning.
- **Consequence:** DDR multimodal use should be justified only for document types where visual structure contributes materially to extraction.
- **Practice cross-check:** Current DDR vector scope remains text/PID based; any multimodal extension should be evaluated separately rather than assumed superior.

## Claim 2
- **Claim (plain):** Larger models do not necessarily perform better on archival extraction.
- **Author claim:** The authors explicitly reject model size as a reliable proxy for task performance.
- **Evidence-supported claim:** InternVL2-40B and InternVL2.5-38B outperform their 76B/78B counterparts, and the authors attribute results to component quality/configuration and training rather than parameter count alone. [@Vafaie2025EndtoendInformationExtraction, pp. 6–7]
- **Researcher inference:** DDR model selection should be task- and evidence-driven rather than organised around model scale or prestige.
- **Evidence (quote/paraphrase + page):** The discussion states that “larger models do not necessarily provide better performance across all tasks.” [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Warrant (my words):** Domain performance emerges from architecture, training and task fit, not raw parameter count.
- **Boundary:** The comparison covers a limited family of models and one archival dataset.
- **Consequence:** Benchmark actual DDR tasks before changing models.
- **Practice cross-check:** UAT evaluates retrieval/synthesis behaviour on defined archival cases rather than inferring quality from model size.

## Claim 3
- **Claim (plain):** Prompting strategy should vary by field type rather than follow one universal recipe.
- **Author claim:** The authors compare zero-shot and few-shot prompting and propose hybrid prompting for different extraction fields.
- **Evidence-supported claim:** Few-shot examples improve structured predictable fields such as reference numbers and offices, whereas open-ended fields such as names and geographic locations can suffer example-induced bias and perform better zero-shot. [@Vafaie2025EndtoendInformationExtraction, pp. 6–7]
- **Researcher inference:** Computational archive workflows should adapt inference strategies to the evidential structure of the field or question rather than use one prompt across all tasks.
- **Evidence (quote/paraphrase + page):** The paper concludes that a hybrid strategy based on expected values can improve overall accuracy. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Warrant (my words):** Structured identifiers and open-ended historical names impose different constraints on model prediction.
- **Boundary:** Field-specific prompting can itself encode assumptions and requires independent validation.
- **Consequence:** DDR extraction, retrieval and synthesis prompts should be task-specific and versioned.
- **Practice cross-check:** Named-person/project retrieval and scoped-missingness prompts are already separated as different evidence routes.

## Claim 4
- **Claim (plain):** MLLMs are not universally preferable; rule-based methods remain competitive where record structure is stable.
- **Author claim:** The authors explicitly compare MLLMs with rule-based and document-transformer approaches.
- **Evidence-supported claim:** In the discussion, the rule-based approach outperforms the document transformer and smaller MLLMs and is judged preferable when layouts are consistent and extensive rule creation is unnecessary because it is precise and computationally cheaper. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Researcher inference:** The correct archival method may be the least complex method that reliably preserves the required evidence.
- **Evidence (quote/paraphrase + page):** The authors recommend rule-based KIE for stable layouts rather than treating MLLMs as a universal replacement. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Warrant (my words):** Model sophistication has costs in hardware, opacity and failure behaviour that are unnecessary when deterministic structure already solves the task.
- **Boundary:** Rule-based systems become expensive and brittle as layouts diversify.
- **Consequence:** DDR should retain deterministic metadata/authority operations where possible and reserve generative/multimodal methods for genuinely ambiguous tasks.
- **Practice cross-check:** Corpus identity, PID linking and provenance binding remain deterministic rather than delegated to a language model.

## Claim 5
- **Claim (plain):** The hardest extraction failures can arise from historical ambiguity and correction, not simply poor image quality.
- **Author claim:** The authors inspect failure cases rather than attributing errors only to handwriting or unusual fonts.
- **Evidence-supported claim:** The discussion identifies crossed-out and replaced values and cards referring to multiple people where the model extracts only one as salient failures. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Researcher inference:** Archival marks of revision, multiplicity and contradiction are precisely the features most at risk of being normalised away by structured extraction.
- **Evidence (quote/paraphrase + page):** Failure analysis points to overwritten values and multi-person records rather than only stamps or handwriting. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Warrant (my words):** A key-value schema tends to demand one clean value even where the historical document preserves contested or sequential states.
- **Boundary:** The paper's examples concern specific index-card conventions and do not establish all archival ambiguity types.
- **Consequence:** DDR extraction should retain original traces and avoid overwriting alternate names, roles or revisions with a single normalised value.
- **Practice cross-check:** Source passages remain accessible beneath any structured entity representation.

## Claim 6
- **Claim (plain):** Extraction becomes archival infrastructure only through downstream structuring, access controls and provenance-aware deployment.
- **Author claim:** The authors convert extracted data to JSON/triples, plan a knowledge graph, entity linking and public exploratory search, while retaining privacy restrictions.
- **Evidence-supported claim:** The pipeline moves from image extraction to structured data and triples; the conclusion states that roughly 70% of the 1.9 million-card data can be public while 30% remains restricted for privacy, and future work must test other languages/domains. [@Vafaie2025EndtoendInformationExtraction, pp. 5–8]
- **Researcher inference:** Archive AI should be judged as a whole evidence-to-access system, not only by benchmark accuracy.
- **Evidence (quote/paraphrase + page):** The extracted cards are intended to populate a knowledge graph for exploratory querying, with explicit privacy and generalisability constraints. [@Vafaie2025EndtoendInformationExtraction, p. 8]
- **Warrant (my words):** A technically accurate extraction has archival value only when its source relation, access conditions and downstream semantics remain governed.
- **Boundary:** The paper does not demonstrate historical interpretative accuracy of the resulting knowledge graph.
- **Consequence:** DDR structured/computational outputs should remain linked to source records and carry rights/provenance constraints.
- **Practice cross-check:** RAI evidence cards and canonical PID/repository links preserve the source layer beneath synthesis.

# Definitions / terms this changes

- **Key information extraction (KIE):** automated extraction of predefined key-value information from semi-structured documents. [@Vafaie2025EndtoendInformationExtraction, pp. 1–2]
- **Multimodal large language model (MLLM):** model combining visual and language representations for direct document-image interpretation.
- **Hybrid prompting:** use of different zero-/few-shot strategies according to field structure and expected values. [@Vafaie2025EndtoendInformationExtraction, p. 7]
- **Structured archival derivative:** my term for JSON/triples/knowledge-graph representations produced from source records and requiring traceability back to them.

# My response

Vafaie et al. are most useful as an antidote to both hype and blanket scepticism. The study shows that multimodal models can be materially better on difficult historical forms, yet the strongest method depends on document structure, field semantics, prompt design and deployment cost. The most important archival lesson is in the failure cases: corrections and multiplicity are not noise but historical structure, and a clean extraction schema can erase them. For DDR, multimodal or generative extraction should therefore remain a derivative access mechanism whose outputs are inspectable against the original record.

# Integration hooks

**Where I will cite it:** Operational AI comparison; multimodal extraction; prompt/task specificity; structured derivatives and knowledge graphs.

**Link to my practice evidence:** It provides a comparator for future multimodal DDR work but does not justify changing the current text-bounded corpus without a separate evaluation.

**Workstreams →** Critical computational approaches; information extraction; provenance; interface.  
**Deliverables →** Methods chapter; limitations; future work.

# Boundary + risk

**Boundary:** This is a KIE benchmark over one class of German historical index cards; it does not evaluate contested historical synthesis, retrieval bias or archive-wide interpretation.

**Risk if misused:** High extraction accuracy could be mistaken for historical understanding and encourage structured fields to replace ambiguous source traces.

# Cross-source / cross-lens synthesis

Vafaie et al. operationalise a part of the pipeline that Mordell theorises as datafication. Their system demonstrates practical benefits of transforming archival images into machine-readable structures, while Mordell and Drucker explain why those structures must remain recognised as constructed. Later RAI sources such as Asai address synthesis over retrieved evidence, a substantially different task. For DDR, the distinction is important: extraction, retrieval and interpretation require separate evaluation and should not inherit one another's accuracy claims.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 1–2, 5–8
- **First full note:** Mahsa Vafaie et al., “End-to-End Information Extraction from Archival Records with Multimodal Large Language Models,” in *Proceedings of the 34th ACM International Conference on Information and Knowledge Management* (2025), 6075–6083, https://doi.org/10.1145/3746252.3761503.
- **Short note form:** Vafaie et al., “End-to-End Information Extraction,” 6079–6082.
- **One quote worth lifting:** “larger models do not necessarily provide better performance across all tasks” (paper p. 7).
- **One paraphrase worth keeping:** Vafaie et al. show that multimodal archival extraction can outperform older baselines, but performance depends on field type, prompting, model configuration and document ambiguity rather than model scale alone. [@Vafaie2025EndtoendInformationExtraction, pp. 6–8]

# Related works

- Mordell, “Critical Questions for Archives as (Big) Data.”
- Marciano, “Towards a New Discipline of Computational Archival Science.”
- Arnold and Tilton, “Explainable Search and Discovery of Visual Cultural Heritage Collections.”

# Follow-ups

- **What I will test next:** If multimodal extraction is later introduced into DDR, create a UAT set specifically for corrections, multiple actors and visual marginalia rather than evaluating only clean field accuracy.
