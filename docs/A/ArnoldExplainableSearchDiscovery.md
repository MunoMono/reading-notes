---
title: "Explainable search and discovery of visual cultural heritage collections with multimodal large language models"
authors: "Arnold, Taylor and Tilton, Lauren"
year: 
journal: "Computational Humanities Research 2024"
citation_key: ArnoldExplainableSearchDiscovery
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:24"
last_updated: "03 Oct 2026, 05:29"
project_tags:
  - "Theoretical framework"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / b) Operational literature"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Mar 2026, 12:22"
north_star_sha1: "46ff0ae0f623"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Core text"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Core text  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How visual collections can be explored through caption-mediated embeddings
- How explainable recommendations can support discovery without pretending to settle interpretation

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job

**How this source moves the primary research question forward:** Arnold and Tilton show how multimodal captions can make large visual collections searchable, clusterable and explainable while preserving a route back to the source image.

**How this source bears on the secondary question:** The paper demonstrates how contemporary multimodal methods can reopen historical visual collections, but also how generated descriptions introduce new interpretative risks.

**Why I’m reading this now:** It is a practical comparator for any future visual extension of the DDR computational system.

**Where it sits in my argument:** Operational literature.

**My benchmark for using it:** Generated captions and recommendations are discovery aids, not archival metadata or historical evidence.

# Position + moment

The paper addresses digitised visual collections whose metadata is too sparse for rich exploration. The proposed method inserts a generated-caption layer between each image and downstream text-analysis tools. [@ArnoldExplainableSearchDiscovery, PDF pp. 1–3]

# The author’s main move

The pipeline is **image → caption → text embedding + top terms**, enabling full-text search, recommendation, clustering and textual explanation. [@ArnoldExplainableSearchDiscovery, PDF pp. 3–4]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Multimodal captions create a searchable intermediate representation for visual archives.
- **Author claim:** Generated captions can act as textual surrogates for image collections.
- **Evidence-supported claim:** The method explicitly maps image to caption and then to text embeddings/top terms. [@ArnoldExplainableSearchDiscovery, PDF pp. 3–4]
- **Researcher inference:** A future DDR visual layer could expose content absent from catalogue metadata.
- **Evidence (quote/paraphrase + page):** “image → caption → text embedding + top terms.” [@ArnoldExplainableSearchDiscovery, PDF p. 3]
- **Warrant (my words):** Textual surrogates unlock search and NLP methods unavailable to raw images.
- **Boundary:** The caption is generated interpretation.
- **Consequence:** Any DDR caption must remain visibly linked to the source image.
- **Practice cross-check:** TODO (separate visual UAT if multimodal work enters scope).

## Claim 2
- **Claim (plain):** Caption-based recommendations can capture semantic context beyond image-only similarity.
- **Author claim:** The authors compare caption-derived and image-derived recommendation structures.
- **Evidence-supported claim:** Caption methods produce higher reciprocal recommendation rates and often connect images through contextual features. [@ArnoldExplainableSearchDiscovery, PDF pp. 7–9]
- **Researcher inference:** Semantic visual discovery may surface useful contextual relations.
- **Evidence (quote/paraphrase + page):** Caption approaches report 36.5–49.8% symmetric recommendations versus 22.4–28.9% for image-based approaches. [@ArnoldExplainableSearchDiscovery, PDF pp. 8–9]
- **Warrant (my words):** Captions encode semantic attributes that direct visual vectors may not isolate.
- **Boundary:** Reciprocal recommendation is not proof of historical relevance.
- **Consequence:** DDR neighbours would still require source validation.
- **Practice cross-check:** Mark any future neighbour as visual, semantic and/or historically supported.

## Claim 3
- **Claim (plain):** Textual explanation makes computational similarity easier to inspect.
- **Author claim:** Top terms can explain why images are associated.
- **Evidence-supported claim:** The recommender system provides human-readable explanatory terms for recommendations. [@ArnoldExplainableSearchDiscovery, PDF pp. 9–10]
- **Researcher inference:** Similarity becomes more researchable when its proposed basis can be challenged.
- **Evidence (quote/paraphrase + page):** The paper contrasts explainable caption-based recommendations with opaque image-vector proximity. [@ArnoldExplainableSearchDiscovery, PDF pp. 9–10]
- **Warrant (my words):** A readable rationale gives the researcher a testable proposition.
- **Boundary:** Explanation can rationalise an incorrect generated description.
- **Consequence:** Explainability must sit beside provenance.
- **Practice cross-check:** DDR evidence cards continue to expose underlying records.

## Claim 4
- **Claim (plain):** Caption-mediated clustering supports both collection overview and local discovery.
- **Author claim:** The authors generate 32 clusters and descriptive terms and propose navigation between clusters and individual recommendations.
- **Evidence-supported claim:** Their interface concept combines a global cluster grid with local recommendation pages. [@ArnoldExplainableSearchDiscovery, PDF pp. 10–12]
- **Researcher inference:** This resembles the DDR distinction between semantic atlas and semantic neighbourhoods.
- **Evidence (quote/paraphrase + page):** Users can move iteratively between cluster-level and item-level views. [@ArnoldExplainableSearchDiscovery, PDF pp. 10–12]
- **Warrant (my words):** Overview and neighbourhood views answer different exploratory questions.
- **Boundary:** Cluster labels are generated summaries, not archival taxonomy.
- **Consequence:** Labels should remain provisional.
- **Practice cross-check:** Keep the frozen atlas/neighbourhood views distinct but connected.

## Claim 5
- **Claim (plain):** Generated descriptions can introduce factual and social classification errors.
- **Author claim:** The authors report caption mistakes and biased associations.
- **Evidence-supported claim:** Examples include mistaken object/attribute descriptions and recommendation patterns driven by generated identity labels. [@ArnoldExplainableSearchDiscovery, PDF pp. 4, 12]
- **Researcher inference:** Searchable generated text can amplify errors that were not present in the source metadata.
- **Evidence (quote/paraphrase + page):** The paper documents caption error and problematic recommendation cues. [@ArnoldExplainableSearchDiscovery, PDF pp. 4, 12]
- **Warrant (my words):** Once embedded, a generated error propagates through similarity and clustering.
- **Boundary:** The paper also shows that such errors can be audited.
- **Consequence:** Generated annotations need review and uncertainty handling.
- **Practice cross-check:** TODO (manual caption audit if used).

## Claim 6
- **Claim (plain):** Safeguards alter the generated representation and therefore remain modelling decisions.
- **Author claim:** The authors suggest filtering or replacing problematic terms before embedding and adding notices to generated captions.
- **Evidence-supported claim:** The conclusion says such mitigation can reduce but not entirely remove problematic associations. [@ArnoldExplainableSearchDiscovery, PDF p. 12]
- **Researcher inference:** Safety transformations should themselves be logged and inspectable.
- **Evidence (quote/paraphrase + page):** The proposed safeguards operate between caption generation and embedding. [@ArnoldExplainableSearchDiscovery, PDF p. 12]
- **Warrant (my words):** Changing the surrogate changes the similarity space.
- **Boundary:** The study does not compare multiple mitigation strategies experimentally.
- **Consequence:** Preserve raw and transformed derivatives separately.
- **Practice cross-check:** Apply the same provenance principle used elsewhere in DDR.

# Definitions / terms this changes

- **Generous interface:** a browsable interface that reveals collection scale and complexity. [@ArnoldExplainableSearchDiscovery, PDF p. 2]
- **Multimodal caption layer:** generated text positioned between image and downstream analysis. [@ArnoldExplainableSearchDiscovery, PDF pp. 3–4]
- **Explainable recommendation:** recommendation accompanied by human-readable terms indicating the basis of similarity. [@ArnoldExplainableSearchDiscovery, PDF pp. 9–10]
- **Symmetric recommendation:** reciprocal recommendation used as one indirect structural metric. [@ArnoldExplainableSearchDiscovery, PDF pp. 8–9]

# My response

The paper provides a useful visual analogue for the DDR computational strategy: modelled relations become more useful when the user can inspect why objects were linked. Its main warning is equally important: the explanatory layer is generated and can be wrong. Multimodal captions should therefore be treated as provisional derivatives whose corrections and provenance remain visible.

# Integration hooks

**Where I will cite it:** Multimodal future work; explainable discovery; generous interfaces.

**Link to my practice evidence:** The current semantic atlas/neighbourhood design offers a textual analogue; a visual extension would need its own UAT.

**Workstreams →** Visual archive; multimodal AI; explainability.  
**Deliverables →** Future-work/method rationale.

# Boundary + risk

**Boundary:** The study concerns documentary photographs, not heterogeneous design-research records or historical synthesis.

**Risk if misused:** Generated captions could be mistaken for institutional description or model explanations for historical evidence.

# Cross-source / cross-lens synthesis

Arnold and Tilton complement Vafaie et al.: Vafaie extract predefined fields, while Arnold and Tilton generate open-ended descriptions for discovery. Drucker and Mordell explain why both outputs remain constructed data layers. For DDR, multimodal AI is therefore best treated as a reversible access layer rather than a substitute for archival evidence.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** PDF 1–4, 7–12
- **First full note:** Taylor Arnold and Lauren Tilton, “Explainable Search and Discovery of Visual Cultural Heritage Collections with Multimodal Large Language Models,” paper presented at CHR 2024: Computational Humanities Research Conference, Aarhus University, December 4–6, 2024.
- **Short note form:** Arnold and Tilton, “Explainable Search and Discovery,” PDF 3–12.
- **One quote worth lifting:** “image → caption → text embedding + top terms” (PDF p. 3).
- **One paraphrase worth keeping:** Multimodal captions can make visual collections searchable, clusterable and explainable while also introducing generated errors that require explicit review and provenance. [@ArnoldExplainableSearchDiscovery, PDF pp. 3–12]

# Related works

- Vafaie et al., “End-to-End Information Extraction from Archival Records.”
- Drucker, “Humanities Approaches to Graphical Display.”

# Follow-ups

- **What I will test next:** Only if visual multimodal work enters current scope, build a separate DDR image-caption UAT.
