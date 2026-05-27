---
title: "Explainable Search and Discovery"
authors: "Arnold, Taylor and Tilton, Lauren"
year: 
journal: ""
citation_key: ArnoldExplainableSearchDiscovery
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:24"
last_updated: "27 May 2026, 09:25"
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

# Thesis job (do this first)

**Project research question(s) this serves:** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now:**  
I am reading this to develop a methodologically cautious account of multimodal discovery for visual cultural heritage collections, especially where images need to be searched, clustered and recommended beyond existing metadata.

**Where it sits in my argument:**  
S3.2 Interpretability, provenance and retrieval, with a strong bridge to S3.1 Visual analytics: this source helps me describe how image collections can be activated through multimodal captions, text embeddings, recommendation and explainable clustering.

**Why this term, not alternatives:**  
“Explainable search and discovery” is useful because it joins two things my project needs: computational surfacing and human-readable rationale. It is more precise than “visual AI” because it focuses on the interface between image retrieval, recommendation and explanation.

**My benchmark for using it:**  
I will use this source where I need to justify multimodal discovery across visual archive material. I will not use it to claim that machine captions are neutral descriptions or that visual similarity equals historical relation.

# Position + moment

Arnold and Tilton write from computational humanities, data science, linguistics, rhetoric and communication studies. Their work sits within distant viewing, visual cultural analytics and cultural heritage interface design.

The paper responds to a practical problem: many institutions have digitised large visual collections, but users often lack generous, flexible ways to explore them when granular metadata is absent. The authors test whether multimodal LLMs can generate captions that make visual collections searchable, clusterable and explainable.

**Canon assumptions to problematise / update for 2026:**  
The paper updates earlier image-embedding approaches by inserting a captioning layer between image and embedding. This shifts visual discovery from opaque visual vectors toward text-mediated, explainable relations, while still leaving serious questions about caption error, bias and institutional acceptability.

# The author’s main move

Arnold and Tilton use multimodal LLMs to generate rich captions for cultural heritage images, then turn those captions into text embeddings and explanatory terms in order to support search, clustering and recommendations for visual collections.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  Multimodal captions can make visual collections more searchable and explainable.

- **Evidence:**  
  Arnold and Tilton argue that large digitised visual collections are difficult to explore, especially where granular metadata is absent [@ArnoldExplainableSearchDiscovery, p. 1]. Their method converts each image into a generated caption, then converts that caption into text embeddings and top terms: “image → caption → text embedding + top terms” [@ArnoldExplainableSearchDiscovery, p. 3].

- **Warrant:**  
  This supports the claim because the caption becomes an intermediate interpretive layer. The image is no longer only a visual object or an opaque vector. It becomes a text-bearing object that can be searched, compared, clustered and explained in ways that are legible to users.

- **So what for my thesis:**  
  For the DDR archive, multimodal captioning may help activate visual traces by producing searchable descriptions and candidate relationships, but those descriptions must be treated as generated annotations requiring human review.

- **Practice cross-check:**  
  TODO: select a small DDR image subset and test whether generated captions surface design-relevant features that are missing from catalogue metadata. Compare generated captions with archival descriptions and my own visual reading.

## Claim 2

- **Claim:**  
  Caption-based embeddings can support recommendations that are both more precise and more explainable than image-only embeddings.

- **Evidence:**  
  Arnold and Tilton compare recommendations based on image embeddings with recommendations based on multimodal caption embeddings. In their example recommendations, caption-based results are described as generally more precise and more diverse, such as finding images with shared contextual features rather than only visually obvious elements [@ArnoldExplainableSearchDiscovery, pp. 7–9]. Their tables show that multimodal recommendations have higher rates of symmetric recommendation than image-based recommendations, ranging from 36.5% to 49.8% compared with 22.4% to 28.9% [@ArnoldExplainableSearchDiscovery, pp. 8–9].

- **Warrant:**  
  This matters because archival discovery often needs more than visual resemblance. A recommendation system that can connect images through described activities, settings, materials or relations may better support historical exploration than one that only retrieves visually similar shapes, colours or compositions.

- **So what for my thesis:**  
  I can frame DDR image recommendations as a way to generate candidate pathways through visual material: not as proof that images belong together, but as a method for finding possible relations across projects, actors, places, artefacts or institutional settings.

- **Practice cross-check:**  
  TODO: create a nearest-neighbour table for one DDR image or design artefact. Record whether the recommended neighbours share visual form, institutional context, subject matter, material process or only superficial similarity.

## Claim 3

- **Claim:**  
  Explainable visual discovery still needs safeguards because generated captions can reproduce errors and bias.

- **Evidence:**  
  Arnold and Tilton note that generated captions are not foolproof: one example incorrectly infers a worker’s gender and misidentifies glass objects as plastic [@ArnoldExplainableSearchDiscovery, p. 4]. In the conclusion, they warn that gendered terms such as “man” and “girl” can cause recommender systems to associate images by inferred gender, sometimes on the basis of inaccurate stereotypes [@ArnoldExplainableSearchDiscovery, p. 12].

- **Warrant:**  
  This supports a cautious position because explanation does not remove risk. The fact that a recommendation can be labelled or described does not make it correct, neutral or ethically safe. Caption-mediated systems can make errors more readable, but they can also make them easier to circulate.

- **So what for my thesis:**  
  If I use multimodal captioning in DDR work, I need a correction and boundary protocol: generated captions are provisional, gendered or identity-related terms require scrutiny, and visual recommendations must be validated against archival provenance and human interpretation.

- **Practice cross-check:**  
  TODO: when testing DDR image captions, flag inferred identity terms, uncertain object labels and interpretive language. Keep a manual correction log and decide which generated terms are safe to expose or cite.

# Definitions / terms this changes

- **Generous interface:**  
  Arnold and Tilton draw on Whitelaw’s term for rich, browsable interfaces that reveal the scale and complexity of digital heritage collections [@ArnoldExplainableSearchDiscovery, p. 2]. I can use this to describe the kind of DDR interface or method that helps users explore rather than only search.

- **Multimodal caption layer:**  
  I will use this to mean a generated textual description that sits between the image and downstream computational methods. It enables full-text search, text embeddings, clustering and explainable recommendations [@ArnoldExplainableSearchDiscovery, pp. 3–4].

- **Caption-based embedding:**  
  An embedding made from generated image captions rather than directly from pixels. For DDR, this may be useful where the historical or design-relevant relation is semantic rather than purely visual.

- **Explainable recommendation:**  
  A recommendation supported by generated terms or textual rationale that helps users understand why one image has been associated with another [@ArnoldExplainableSearchDiscovery, pp. 9–10].

- **Symmetric recommendation:**  
  A measure of whether image A recommends image B and image B recommends image A. Arnold and Tilton use this as one indirect way to assess whether a recommendation structure is meaningful [@ArnoldExplainableSearchDiscovery, pp. 8–9].

- **Cluster description:**  
  A set of generated terms that names the distinctive content of an image cluster. In their Documerica case, the authors generate 32 clusters and label them with terms such as “landfill; environmental; waste; pollution; debris; garbage” [@ArnoldExplainableSearchDiscovery, pp. 10–11].

# My response

- **What I take from this:**  
  - The paper gives me a practical bridge between visual archives and text-based computational methods.  
  - It supports the use of generated captions as a discovery layer, provided the generated descriptions remain inspectable and correctable.  
  - The recommender-system model is useful for DDR because it suggests local pathways through visual material rather than only global maps or static categories.

- **What I reframe / adjust:**  
  - I should treat multimodal captioning as provisional metadata, not description.  
  - I should write visual discovery as a process of generating candidate relations and then checking them against provenance, context and close visual reading.

- **What question it raises next:**  
  - What visual features of the DDR archive are currently invisible because they are not named in metadata?  
  - Can caption-mediated search surface design practices, materials, room settings, equipment, bodies, prototypes or institutional scenes that the catalogue does not foreground?

# Integration hooks

- **Where I will cite it:**  
  In the S3.2 section on interpretability and retrieval, or in an S3.1 visual analytics passage. The paragraph job: explain how multimodal captioning can convert visual archive material into searchable and explainable discovery surfaces, while requiring safeguards around caption error and bias.

- **Where I will name the title in running text:**  
  First use in the visual discovery section: “Arnold and Tilton’s work on explainable search and discovery for visual cultural heritage collections is useful here because it shows how multimodal captions can support clustering, recommendation and search without relying only on opaque image embeddings.”

- **Link to my practice evidence:**  
  TODO: link to DDR visual corpus test. Candidate evidence: a small set of generated captions, nearest-neighbour recommendations and manual checks for visual/design relevance.

- **Workstreams →**  
  Visual corpus preparation; multimodal captioning; caption audit; embedding-based recommendation; cluster labelling; interface sketching; bias and correction protocol.

- **Deliverables →**  
  DDR image caption sample; visual nearest-neighbour table; cluster term list; caption correction log; visual discovery method paragraph.

- **Stakeholders →**  
  Thesis reader; supervisors; archive staff; design historians; cultural heritage interface researchers; future users of the DDR archive.

# Boundary + risk

- **Boundary:**  
  This source is useful for visual cultural heritage discovery, but its case study is a documentary photography collection rather than a design research archive with mixed records, artefacts, diagrams and institutional documentation.

- **Risk if misused:**  
  If I use it too strongly, I could make generated captions sound like authoritative metadata; the safer claim is that they are provisional discovery aids that need correction and archival validation.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–4, 7–12

- **First full note:**  
  Taylor Arnold and Lauren Tilton, “Explainable Search and Discovery of Visual Cultural Heritage Collections with Multimodal Large Language Models,” paper presented at CHR 2024: Computational Humanities Research Conference, Aarhus University, December 4–6, 2024.

- **Short note form:**  
  Arnold and Tilton, “Explainable Search and Discovery,” page number.

- **One quote worth lifting:**  
  “image → caption → text embedding + top terms” [@ArnoldExplainableSearchDiscovery, p. 3].

- **One paraphrase worth keeping:**  
  Arnold and Tilton show that multimodal LLM captions can act as an intermediate layer between visual collections and computational discovery, enabling search, clustering, recommendation and textual explanation while still requiring safeguards against caption error and bias [@ArnoldExplainableSearchDiscovery, pp. 3–4, 12].

# Related works

- Arnold and Tilton on distant viewing.
- Whitelaw on generous interfaces.
- Smits and Wevers on multimodal approaches to visual historical collections.
- Coleman on managing bias when collections become data.
- Rockmore et al. on embedding spaces as exploratory landscapes.
- Jaillant, Aske and Caputo on AI, access, risk and trust in cultural heritage organisations.

# Follow-ups

- **What I will read next:**  
  Whitelaw on generous interfaces; Arnold and Tilton on distant viewing; Smits and Wevers on the multimodal turn in digital humanities; Coleman on bias in library collections as data.

- **What I will test or write next:**  
  Build a small DDR visual discovery test: generate captions for 20 images, create nearest-neighbour recommendations, identify the top explanatory terms, then manually mark which recommendations are historically useful, visually superficial or ethically risky.