---
title: "On the literary landscapes of vector embeddings"
authors: "Rockmore, Daniel and Chen, Jiayi and Jebelli, Mohammad Javad Latifi and Riddell, Allen and Stropkay, Harrison"
year: 2025
journal: "Computational Humanities Research"
citation_key: Rockmore2025LiteraryLandscapesVector
doi: "10.1017/chr.2025.10015"
url: "https://www.cambridge.org/core/product/identifier/S2977815825100158/type/journal_article"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:09"
last_updated: "03 Oct 2026, 05:29"
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
model_subcluster: "S3.1 Visual analytics"
source_type: "Core text"
project_tags:
  - "Theoretical framework"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / b) Operational literature"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.1 Visual analytics  
**Source type:** Core text  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How organisation choices reveal or hide contested knowledge
- How vector spaces can be used as exploratory landscapes without being treated as final evidence

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job

**How this source moves the primary research question forward:** Rockmore et al. give the thesis a defensible account of embeddings as exploratory spaces for finding candidate relations, not as self-validating historical evidence.

**How this source bears on the secondary question:** Embedding methods can make large textual corpora newly navigable, while model choice and category uncertainty shape the resulting landscape.

**Why I’m reading this now:** It directly informs DDR semantic neighbourhoods and atlas views.

**Where it sits in my argument:** Operational literature.

**My benchmark for using it:** Vector proximity may prompt investigation; archival claims still require provenance and close reading.

# Position + moment

The authors compare traditional and transformer-based text representations on a large literary corpus, testing whether vector spaces preserve book, author and genre structure. [@Rockmore2025LiteraryLandscapesVector, pp. 1–2]

# The author’s main move

Multiple embedding methods create useful textual landscapes, with transformer embeddings generally strongest for genre and authorship, while uncertainty and local structure remain analytically important. [@Rockmore2025LiteraryLandscapesVector, pp. 1, 8–13]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Embeddings make large text collections explorable through proximity.
- **Author claim:** Text chunks become points in vector spaces where distance acts as a similarity proxy.
- **Evidence-supported claim:** The paper evaluates whether related books, authors and genres occupy nearby regions. [@Rockmore2025LiteraryLandscapesVector, pp. 1–2]
- **Researcher inference:** DDR embeddings can surface candidate relationships among traces.
- **Evidence (quote/paraphrase + page):** The authors call the result a “literary landscape.” [@Rockmore2025LiteraryLandscapesVector, p. 1]
- **Warrant (my words):** Spatialised similarity creates exploratory routes unavailable to keyword search alone.
- **Boundary:** Vector distance is not archival relationship.
- **Consequence:** Neighbours require provenance checks.
- **Practice cross-check:** DDR neighbourhoods link to source passages.

## Claim 2
- **Claim (plain):** There is no single natural embedding landscape.
- **Author claim:** The article compares TF-IDF, Doc2Vec and transformer models.
- **Evidence-supported claim:** Transformer models usually perform best, but most methods produce plausible structures and differ by task/classifier. [@Rockmore2025LiteraryLandscapesVector, pp. 1, 8–9]
- **Researcher inference:** DDR neighbourhoods depend on model, corpus and metric.
- **Evidence (quote/paraphrase + page):** Model families produce different classification profiles. [@Rockmore2025LiteraryLandscapesVector, pp. 8–9]
- **Warrant (my words):** Representation choice changes which relations become salient.
- **Boundary:** Genre performance does not prove archival fitness.
- **Consequence:** Model choice belongs in the evidential account.
- **Practice cross-check:** DDR fixes and records bge-m3/version for UAT.

## Claim 3
- **Claim (plain):** Local and global geometry support different analytical behaviours.
- **Author claim:** The paper contrasts KNN and logistic-regression classifiers.
- **Evidence-supported claim:** KNN benefits from strong local clustering, while logistic regression relies on globally separable boundaries. [@Rockmore2025LiteraryLandscapesVector, pp. 8–9]
- **Researcher inference:** A DDR neighbourhood and a global atlas are not simply the same structure at different zoom levels.
- **Evidence (quote/paraphrase + page):** The discussion distinguishes local relative distances from global class separation. [@Rockmore2025LiteraryLandscapesVector, p. 9]
- **Warrant (my words):** Useful neighbours can exist even where global classes blur.
- **Boundary:** This classifier result is not a direct UMAP validation.
- **Consequence:** Evaluate local retrieval separately from global visual clustering.
- **Practice cross-check:** The k-neighbourhood slider is confined to the neighbourhood view.

## Claim 4
- **Claim (plain):** Classification uncertainty can expose ambiguous categories rather than only model failure.
- **Author claim:** Rockmore et al. use prediction entropy to identify unstable genre labels.
- **Evidence-supported claim:** High-entropy categories overlap with neighbouring genres; some high-entropy books are deliberately mixed or genre-blurring. [@Rockmore2025LiteraryLandscapesVector, pp. 9–11]
- **Researcher inference:** DDR instability may sometimes point toward contested/hybrid knowledge.
- **Evidence (quote/paraphrase + page):** Entropy reveals less distinct category boundaries. [@Rockmore2025LiteraryLandscapesVector, pp. 9–10]
- **Warrant (my words):** Uncertainty can signal mismatch between material and imposed categories.
- **Boundary:** It can also signal weak data or representation.
- **Consequence:** Treat instability as a research prompt, not evidence by itself.
- **Practice cross-check:** Mixed DDR clusters require document-level checking.

## Claim 5
- **Claim (plain):** Embeddings preserve several overlapping scales of similarity.
- **Author claim:** The authors test intra-book, inter-book and genre structure.
- **Evidence-supported claim:** Chunks from the same book sit closer together while transformer spaces also preserve broader genre/style patterns. [@Rockmore2025LiteraryLandscapesVector, pp. 5–8, 11–12]
- **Researcher inference:** DDR proximity may reflect document, project, actor or topic at different times.
- **Evidence (quote/paraphrase + page):** The paper reports tight intra-book clustering within broader genre regions. [@Rockmore2025LiteraryLandscapesVector, pp. 5–8]
- **Warrant (my words):** One vector space can encode multiple relations.
- **Boundary:** Which relations bge-m3 preserves in DDR must be tested.
- **Consequence:** Do not assign one universal meaning to proximity.
- **Practice cross-check:** Compare neighbours with project, actor and document-type metadata.

## Claim 6
- **Claim (plain):** Embeddings are most defensible as discovery tools feeding later interpretation.
- **Author claim:** The authors propose reader-driven exploration and example-based retrieval.
- **Evidence-supported claim:** Pages 12–13 describe surfacing little-known books for later comparison and reading. [@Rockmore2025LiteraryLandscapesVector, pp. 12–13]
- **Researcher inference:** DDR embeddings are route-making, not proof-making.
- **Evidence (quote/paraphrase + page):** The paper presents embeddings as aids to discovery and traditional comparative analysis. [@Rockmore2025LiteraryLandscapesVector, pp. 12–13]
- **Warrant (my words):** Discovery value does not require the model to settle meaning.
- **Boundary:** Literary recommendation carries different stakes from archive historiography.
- **Consequence:** Candidate relations must be accepted, revised or rejected after source checking.
- **Practice cross-check:** UAT rewards supported claims, not semantic proximity alone.

# Definitions / terms this changes

- **Vector embedding:** numerical representation locating text in a high-dimensional similarity space. [@Rockmore2025LiteraryLandscapesVector, p. 1]
- **Embedding landscape:** exploratory spatial organisation produced by a representation and distance function.
- **Prediction entropy:** measure of classification uncertainty used to identify unstable/overlapping categories. [@Rockmore2025LiteraryLandscapesVector, pp. 9–11]

# My response

Rockmore et al. support a modest but powerful use of embeddings: they create candidate neighbourhoods and show where imposed categories become unstable. For DDR the computational value lies in surfacing relations worth testing, while the historical claim remains downstream of provenance and close reading.

# Integration hooks

**Where I will cite it:** Semantic atlas; neighbourhoods; uncertainty; example-based discovery.

**Link to my practice evidence:** bge-m3 neighbourhood retrieval and UMAP views.

# Boundary + risk

**Boundary:** The source studies contemporary books with publisher genre labels, not heterogeneous archival records.

**Risk if misused:** The landscape metaphor can make model-produced geometry appear natural.

# Cross-source / cross-lens synthesis

Rockmore operationalises Drucker's and Mordell's caution that computational spaces are constructed. UMAP supplies a projection technique; Asai later addresses synthesis after retrieval. DDR should therefore retain the sequence embedding → candidate neighbourhood → source check → interpretation.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 1–2, 5–13
- **First full note:** Daniel Rockmore et al., “On the Literary Landscapes of Vector Embeddings,” *Computational Humanities Research* 1 (2025): e18, https://doi.org/10.1017/chr.2025.10015.
- **Short note form:** Rockmore et al., “On the Literary Landscapes,” 8–13.
- **One quote worth lifting:** “a potential tool for book discovery” (p. 1).
- **One paraphrase worth keeping:** Embedding spaces preserve useful local and categorical structure while remaining model-dependent, making them best used for discovery and follow-up interpretation. [@Rockmore2025LiteraryLandscapesVector, pp. 8–13]

# Follow-ups

- **What I will test next:** Compare one DDR semantic neighbourhood with direct keyword retrieval.
