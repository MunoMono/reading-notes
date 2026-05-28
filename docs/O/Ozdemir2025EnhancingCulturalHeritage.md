---
title: "Enhancing Cultural Heritage Archive Analysis via Automated Entity Extraction and Graph-Based Representation Learning"
authors: "Ozdemir, Anil; Odaci, Berke; Tanatar Baruh, Lorans; Varol, Onur; Balcisoy, Selim"
year: 2025
journal: "Journal on Computing and Cultural Heritage"
volume: "18"
number: "4"
pages: "Article 60, 1-25"
citation_key: Ozdemir2025EnhancingCulturalHeritage
doi: "10.1145/3746658"
url: "https://dl.acm.org/doi/10.1145/3746658"
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
source_type: "Supporting"
last_updated: "18 Mar 2026, 15:23"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Multimodal machine learning  
**Source type:** Supporting  

**Seams to watch (optional, pick 1):**
- When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Why I’m reading this now (1 sentence):** I need a computational cultural-heritage case that shows how archival metadata, extracted entities, graph structure, embeddings, and recommendation can work together to surface latent relations in a document collection.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / S3.3 multimodal machine learning and graph-based archival activation; it helps me say that archive activation can proceed through staged enrichment and representation learning, but that these are access and exploration aids rather than substitutes for historical interpretation.  
**Why this term, not alternatives (1–2 lines):** Ozdemir et al.’s combination of **automated entity extraction** and **graph-based representation learning** is more useful than generic recommendation-system language because it keeps the document collection, metadata, extracted entities, and learned relations in one explicit pipeline.  
**My benchmark for using it (1–2 criteria I will apply):** I will use this text where computational methods build relational access over archive materials through metadata and extracted features, and where expert judgment remains necessary for validation and interpretation.

# Position + moment (2–4 lines)
Ozdemir and colleagues write from computer science, cultural heritage computing, and archive practice, in collaboration with SALT Istanbul. The paper addresses a very practical CH problem: how to help users and archivists discover relationships in smaller, specialised collections without relying on massive external pretraining. Their solution combines NLP-style entity extraction from metadata summaries with heterogeneous graph construction, metapath-based embedding, and document recommendation over the Waqfs of Crete archive. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 2–4, 8–11]`
**Canon assumptions to problematise / update for 2026 (1–2 lines):** The paper is strongest when read as an access-and-exploration method, not as a theory of archival meaning. Its own results show that recommendation remains subjective and expert-dependent, which is important for your thesis. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 16–21]`

# The author’s main move (1 sentence)
They try to enhance analysis of a cultural heritage archive by extracting entities from metadata and learning graph-based document representations in order to support recommendation, exploratory analysis, and latent relationship discovery without depending on large external pretrained resources.

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Ozdemir et al. argue that smaller cultural-heritage collections can be computationally explored through graph-based relational modelling built only from the collection’s own information.
- **Evidence (quote/paraphrase + page):** The abstract states that unlike approaches dependent on large-scale pretraining, their system “operates effectively using only the information available in the dataset itself,” combining extracted terms, metadata, and graph representation learning into a fully connected network representation. The introduction frames this as a response to inconsistent linguistic terms, ambiguous concepts, and the labour-intensity of manual analysis in CH. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 2–3]`
- **Warrant (my words):** This is the paper’s main positioning move. The authors are not chasing the biggest model; they are arguing for a collection-specific relational method suited to smaller, specialised archives.
- **So what for my thesis (a reusable sentence):** Ozdemir et al. help me argue that the DDR archive can be surfaced computationally through collection-specific relational modelling without assuming that large external training corpora are always necessary or desirable.
- **Practice cross-check:** This is relevant if the DDR corpus is relatively modest, heterogeneous, and historically specialised, but it needs testing against the actual quality and consistency of DDR metadata. TODO (needs corpus/metadata note).

## Claim 2
- **Claim (plain):** The paper’s real methodological contribution is a staged pipeline from preprocessing and feature extraction to heterogeneous graph construction, embedding, and recommendation.
- **Evidence (quote/paraphrase + page):** Figure 1 on page 8 shows the system architecture moving from textual metadata, preprocessing, temporal-category creation, and conjoined n-gram extraction into heterogeneous graph construction, meta-path generation, skip-gram training, embeddings, and recommendation. Pages 9–11 then specify the three node types—documents, conjoined n-grams, and temporal categories—and the two main edge types linking documents to categories and n-grams. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 8–11]`
- **Warrant (my words):** This matters because the paper does not treat recommendation as a black-box endpoint. It makes each transformation visible, from textual summary and metadata through graph structure to ranked relations.
- **So what for my thesis:** Ozdemir et al. give me a good model for describing the DDR computational strand as a sequence of visible transformations rather than a single opaque analytical leap.
- **Practice cross-check:** This aligns directly with Marciano on visible computational-archival pipelines and Boyd Davis/Vane/Kräutli on trust across the whole transformation chain. TODO (needs S3 pipeline cross-link).

## Claim 3
- **Claim (plain):** The paper shows that expert validation remains essential because relevance in archival recommendation is interpretative and contested, not purely technical.
- **Evidence (quote/paraphrase + page):** The evaluation involved five archive professionals and five non-professional annotators. Professional annotators reached higher agreement than the full group, but still only substantial rather than total agreement (average pairwise agreement 82%, Cohen’s kappa 0.61), and the authors note that experts’ judgments varied significantly depending on the query document. In the conclusion they explicitly state that supervision by professional domain experts remains essential because digital tools cannot fully understand the cultural and contextual nuances embedded in CH documents. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 15–21]`
- **Warrant (my words):** This is the most important limit-case in the paper. Even when the system performs well comparatively, relevance is still shaped by human expertise, context, and differing judgments.
- **So what for my thesis:** Ozdemir et al. support a careful position in which computational surfacing of DDR traces can aid discovery and navigation, but interpretation of significance and relation still depends on historically informed expert reading.
- **Practice cross-check:** This is highly relevant to contested design knowledge in the DDR archive, where relations surfaced by a system may still need archival, oral-historical, and historiographic interpretation. TODO (needs methods/oral-history cross-link).

# Definitions / terms this changes (only the ones that matter)
- **Heterogeneous document network:** a graph structure containing different node and edge types, here documents, conjoined n-grams, and temporal categories; I will use this term where archival materials are modelled relationally rather than as a flat corpus. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 9–11]`
- **Temporal categories:** combined features encoding both time interval and thematic category, such as category-plus-date-band nodes; I will use this as a useful design idea for keeping temporal and thematic relations linked in archive modelling. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 9–10]`
- **Conjoined n-grams / sumgrams:** frequent higher-order phrases formed by conjoining lower-order n-grams; I will use this where archive summaries or descriptions need more meaningful phrase-level features than isolated tokens. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 10–11]`
- **Graph representation learning:** the production of low-dimensional vector embeddings that encode structural relations in a graph; I will use this as a computational-access technique, not as an interpretative method in itself. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 4–5, 11–13]`
- **Document recommendation:** here, top-k recommendation based on cosine similarity between learned document embeddings; I will use this cautiously as a retrieval aid rather than as evidence of historical relevance. `[@Ozdemir2025EnhancingCulturalHeritage, pp. 13–20]`

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It gives me a concrete archival-computational workflow that is more modest and more usable than broad AI hype.
  - It is especially helpful for showing how metadata and extracted entities can be turned into relational archive access.
  - It also gives me a useful warning that expert agreement is partial, which fits your contested-knowledge framing well.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I will use this paper to support graph-based archive surfacing and recommendation, not to claim automated historical interpretation.
  - I will treat computational recommendation in the thesis as a way of proposing possible relations for expert review rather than discovering final truths.
- **What question it raises next (1–2 bullets):**
  - Which kinds of DDR metadata or summaries are rich enough to support a heterogeneous graph approach like this?
  - How should I represent disagreement when computationally surfaced relations appear plausible to some expert readers but not to others?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the S3.3 methods section where I describe graph-based representation learning over archival metadata, and in any evaluation paragraph where I need to emphasise expert validation and partial agreement.
- **Where I will name the title in running text (first-use rule):** First mention in the S3.3 section: *In “Enhancing Cultural Heritage Archive Analysis via Automated Entity Extraction and Graph-Based Representation Learning” (2025), Ozdemir et al. argue...*
- **Link to my practice evidence (one concrete cross-reference):** Use alongside any DDR pilot workflow that combines extracted entities, dates, project themes, or actor names into a relational graph for recommendation or exploratory analysis. TODO (needs exact cross-reference).
- **Workstreams →** Multimodal / graph-based ML; provenance; retrieval; computational activation; evaluation.
- **Deliverables →** S3.3 methods paragraph; graph-representation rationale; expert-evaluation note; literature map node.
- **Stakeholders →** Examiners; supervisors; archival studies readers; digital humanities readers; cultural heritage computing readers.

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is strongest for metadata-driven relational surfacing and recommendation in cultural-heritage archives, but it is less useful for multimodal image interpretation or for the historiographic reading of contested institutional memory.
- **Risk if misused (1 sentence):** If I rely on it too heavily, I could let recommendation and embedding similarity stand in for historical relation or conceptual significance in the DDR archive.

# Methods spine tags (tick what it actually touches)
- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 2–4, 8–11, 15–21
- **First full note (write it out here):**  
  Anil Ozdemir, Berke Odaci, Lorans Tanatar Baruh, Onur Varol, and Selim Balcisoy, “Enhancing Cultural Heritage Archive Analysis via Automated Entity Extraction and Graph-Based Representation Learning,” *Journal on Computing and Cultural Heritage* 18, no. 4 (2025): Article 60, 1–25.
- **Short note form:**  
  Ozdemir et al., “Enhancing Cultural Heritage Archive Analysis,” 8–11.
- **One quote worth lifting (≤2 lines):** “their different opinions on the relevance of recommended documents highlight the real-world complexity of document recommendation systems.” (p. 4)
- **One paraphrase worth keeping:** Ozdemir et al. argue that metadata-based entity extraction and heterogeneous graph representation learning can support exploratory archival analysis and recommendation in specialised cultural-heritage collections, but that expert supervision remains essential because relevance is context-dependent and interpretative. (pp. 2–4, 16–21)

# Related works (only if it directly connects)
- Marciano, “Towards a New Discipline of Computational Archival Science (CAS)”
- Jaillant and Aske, “Are Users of Digital Archives Ready for the AI Era?”
- Vafaie et al., “End-to-end Information Extraction from Archival Records with Multimodal Large Language Models”
- Boyd Davis, Vane, and Kräutli, “Can I Believe What I See?”
- TODO: connect directly to any DDR graph/recommendation pilot and to your evaluation design.

# Follow-ups (next actions, not vibes)
- What I will read next: A paper closer to provenance-aware graph retrieval or explainable recommendation in archives, so the graph-learning logic can be tied more tightly to interpretability.
- What I will test or write next: Draft the S3.3 paragraph that distinguishes extraction, representation learning, recommendation, and interpretation, then specify which DDR metadata fields could actually sustain this graph architecture.