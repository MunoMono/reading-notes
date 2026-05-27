---
title: "UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction"
authors: "McInnes, Leland and Healy, John and Melville, James"
year: 2020
journal: ""
citation_key: McInnesUMAPUniformManifold
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:45"
last_updated: "27 May 2026, 09:45"
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
model_subcluster: "S3.1 Visual analytics"
source_type: "Core text"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.1 Visual analytics  
**Source type:** Core text  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How dimensional reduction creates exploratory maps from high-dimensional embeddings
- How visual patterning can support hypothesis generation without becoming final evidence

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
I am reading this to ground my use of UMAP as a dimensional-reduction method for embedding-based visual analytics, pattern mapping and hypothesis generation.

**Where it sits in my argument:**  
S3.1 Visual analytics: this source provides the technical citation for reducing high-dimensional embedding spaces into two-dimensional or low-dimensional maps that can be inspected, compared and used to guide archival enquiry.

**Why this term, not alternatives:**  
“Dimensional reduction” is useful because it describes the operation precisely: high-dimensional relationships are projected into a lower-dimensional representation. “Pattern mapping” is useful for my writing because it names the interpretive use of the projection, while keeping the technical process and the thesis claim distinct.

**My benchmark for using it:**  
I will use UMAP maps as exploratory instruments. I will not use proximity, cluster shape or visual separation as standalone evidence unless the pattern is checked against metadata, archival context and close reading of the underlying records.

# Position + moment

McInnes, Healy and Melville write from mathematics, computing and machine learning. Their paper introduces UMAP as a manifold-learning technique for dimensional reduction, grounded in Riemannian geometry, algebraic topology and fuzzy simplicial sets.

The paper belongs to a technical machine-learning context, but it is directly useful for humanities-facing visual analytics because UMAP has become a standard way of projecting high-dimensional embeddings into inspectable maps. Its relevance to this thesis is methodological rather than theoretical in the design-historical sense.

**Canon assumptions to problematise / update for 2026:**  
The paper helps challenge the assumption that a two-dimensional map transparently shows the “real” structure of a corpus. UMAP is a constructed projection whose parameters, assumptions and local-structure priorities shape what becomes visible.

# The author’s main move

McInnes, Healy and Melville introduce UMAP as a scalable manifold-learning algorithm that constructs a weighted local-neighbourhood graph and optimises a low-dimensional layout in order to preserve the topological structure of high-dimensional data.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  UMAP is suitable for visualising high-dimensional data because it reduces complex structures into lower-dimensional layouts while prioritising local neighbourhood relations.

- **Evidence:**  
  The authors describe UMAP as a manifold-learning technique for dimension reduction that is competitive with t-SNE for visualisation quality, preserves more global structure, and has superior runtime performance [@McInnesUMAPUniformManifold, p. 1]. They explain computationally that UMAP constructs a weighted k-neighbour graph and then computes a low-dimensional layout of that graph [@McInnesUMAPUniformManifold, pp. 13–17].

- **Warrant:**  
  This supports the claim because UMAP does not simply flatten data arbitrarily. It builds a neighbourhood graph from high-dimensional relationships and then finds a lower-dimensional arrangement that preserves aspects of that structure. For visual analytics, this makes it useful as a way of seeing possible local groupings, transitions and anomalies in a corpus.

- **So what for my thesis:**  
  UMAP can support DDR activation by turning high-dimensional text, image or metadata embeddings into visual fields where candidate clusters, outliers and relationships can be inspected before returning to the archive.

- **Practice cross-check:**  
  TODO: produce a UMAP projection for one bounded DDR subset. Annotate at least three clusters or outliers, then check whether those visual groupings correspond to archival actors, projects, genres, media types or institutional categories.

## Claim 2

- **Claim:**  
  UMAP is useful for hypothesis generation, but its maps are parameter-sensitive and should be treated as exploratory.

- **Evidence:**  
  McInnes et al. identify key hyperparameters, including the number of neighbours and minimum distance [@McInnesUMAPUniformManifold, pp. 22–24]. They explain that the number of neighbours involves a trade-off between fine-grained local structure and larger-scale manifold features, while `min-dist` affects how tightly points are packed and is especially important for visual appearance [@McInnesUMAPUniformManifold, p. 23]. Their visual examples on pages 24, 26 and 27 show how changing these parameters produces visibly different embeddings [@McInnesUMAPUniformManifold, pp. 24, 26–27].

- **Warrant:**  
  This matters because visual pattern is not independent of method. A DDR map may show clusters or separation partly because of parameter choices. The map can guide questions, but the thesis must not treat the resulting visual pattern as unmediated evidence.

- **So what for my thesis:**  
  When I use UMAP, I need to report the parameter settings and describe the map as a pattern-finding device. Any claim produced from the map must be validated through the underlying archival records.

- **Practice cross-check:**  
  TODO: rerun a DDR UMAP projection with at least two neighbour settings and two `min-dist` settings. Note which clusters remain stable and which appear only under one configuration.

## Claim 3

- **Claim:**  
  UMAP has important interpretive limits: its axes do not carry direct meaning and it may find structure in noise.

- **Evidence:**  
  In their weaknesses section, McInnes et al. state that UMAP lacks the interpretability of PCA because the dimensions of the UMAP embedding space have no specific meaning, and because UMAP is based on distances between observations rather than source features [@McInnesUMAPUniformManifold, p. 45]. They also warn that UMAP can find manifold structure within noisy data, producing a “constellation” effect in which apparent structure may be spurious [@McInnesUMAPUniformManifold, p. 45]. The authors further state that UMAP prioritises local structure over long-range distances, so it may not be the best choice when global structure is the main interest [@McInnesUMAPUniformManifold, pp. 45–49].

- **Warrant:**  
  This supports a cautious methodological position. UMAP maps can be visually persuasive, but the axes, distances and cluster shapes cannot be read in the same way as a chart with defined variables. The map is an exploratory projection, not an explanation.

- **So what for my thesis:**  
  I should write UMAP outputs as prompts for interpretation: they help me notice candidate relations among DDR traces, but they do not by themselves explain those relations or establish historical significance.

- **Practice cross-check:**  
  TODO: add a short caution below any DDR UMAP figure: axes are arbitrary; proximity is model- and parameter-dependent; claims are based on follow-up archival reading, not on the projection alone.

# Definitions / terms this changes

- **UMAP:**  
  A manifold-learning technique for dimensional reduction that constructs a fuzzy topological representation of high-dimensional data and optimises a low-dimensional layout to approximate that structure [@McInnesUMAPUniformManifold, pp. 1, 4, 13–17].

- **Dimensional reduction:**  
  I will use this to mean the transformation of high-dimensional data, such as text or image embeddings, into a lower-dimensional representation for visualisation, analysis or downstream tasks [@McInnesUMAPUniformManifold, pp. 1–2].

- **k-neighbour graph:**  
  UMAP constructs a weighted k-neighbour graph as the computational representation of local data structure before laying it out in lower-dimensional space [@McInnesUMAPUniformManifold, pp. 13–17].

- **n-neighbours:**  
  A UMAP hyperparameter controlling the local scale at which the manifold is approximated. Smaller values foreground fine local structure; larger values attend more to larger-scale structure, at the cost of detail [@McInnesUMAPUniformManifold, p. 23].

- **min-dist:**  
  A UMAP hyperparameter controlling how tightly points can pack together in the low-dimensional representation. The authors describe it as largely aesthetic and especially relevant for visualisation [@McInnesUMAPUniformManifold, p. 23].

- **Embedding stability:**  
  The paper evaluates stability under subsampling using Procrustes distance and finds UMAP more stable than t-SNE and LargeVis in their Flow Cytometry comparison [@McInnesUMAPUniformManifold, pp. 31–37].

- **Constellation effect:**  
  The risk that UMAP identifies apparent structure in noise, especially with small or noisy datasets [@McInnesUMAPUniformManifold, p. 45].

# My response

- **What I take from this:**  
  - UMAP gives me the technical basis for turning embeddings into visual maps that support exploration and hypothesis generation.  
  - The paper gives me the language to be precise about what the method is doing: constructing local neighbourhoods, laying out a graph and preserving aspects of topological structure.  
  - The weaknesses section is as useful as the algorithm itself because it gives me the caution I need for thesis prose.

- **What I reframe / adjust:**  
  - I should stop writing as if a UMAP map “shows” the archive. It shows a projection produced by a particular model, metric and parameter setting.  
  - I should place UMAP figures in the thesis as navigational or diagnostic artefacts, not as final evidential exhibits.

- **What question it raises next:**  
  - Which DDR patterns remain stable across UMAP settings, and which are artefacts of parameter choice?  
  - What combination of metadata, labels and close reading makes a UMAP cluster interpretable enough to write about?

# Integration hooks

- **Where I will cite it:**  
  In the S3.1 visual analytics section when introducing UMAP as the dimensional-reduction method used to map embedding spaces. The paragraph job: explain that UMAP reduces high-dimensional embeddings into inspectable projections for pattern discovery, while preserving local neighbourhood structure and requiring cautious interpretation.

- **Where I will name the title in running text:**  
  First use in method: “I use UMAP, introduced by McInnes, Healy and Melville as a scalable manifold-learning method for dimensional reduction, to project high-dimensional DDR embeddings into two-dimensional exploratory maps.”

- **Link to my practice evidence:**  
  TODO: link to DDR embedding map / UMAP figure. Candidate evidence: map showing clusters of actors, project descriptions, visual captions or institutional categories, with a corresponding table of checked archival records.

- **Workstreams →**  
  Embedding creation; dimensional reduction; UMAP parameter testing; visual analytics; pattern annotation; archival validation.

- **Deliverables →**  
  DDR UMAP map; parameter log; cluster annotation table; stability comparison; caption or figure note explaining methodological limits.

- **Stakeholders →**  
  Thesis reader; supervisors; design history researchers; archive staff; digital humanities readers; future users of DDR exploratory tools.

# Boundary + risk

- **Boundary:**  
  This source is useful for the technical basis of dimensional reduction and visual analytics, but it does not address archival interpretation, design history or contested knowledge.

- **Risk if misused:**  
  If I treat UMAP proximity as historical evidence, I risk turning a projection into an argument; the safer use is to treat UMAP as a hypothesis-generating map whose patterns must be checked against records.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–2, 13–17, 22–24, 29–31, 45–49

- **First full note:**  
  Leland McInnes, John Healy, and James Melville, “UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction,” September 21, 2020.

- **Short note form:**  
  McInnes, Healy, and Melville, “UMAP,” page number.

- **One quote worth lifting:**  
  “the dimensions of the UMAP embedding space have no specific meaning” [@McInnesUMAPUniformManifold, p. 45].

- **One paraphrase worth keeping:**  
  McInnes, Healy and Melville present UMAP as a scalable dimensional-reduction method that constructs local neighbourhood graphs and optimises a low-dimensional layout, making it useful for visualisation while requiring caution because its axes are not directly interpretable and its projections can reveal spurious structure in noisy data [@McInnesUMAPUniformManifold, pp. 13–17, 45].

# Related works

- van der Maaten and Hinton on t-SNE.
- Rockmore et al. on embedding spaces as literary landscapes.
- Arnold and Tilton on multimodal embeddings for visual cultural heritage discovery.
- Smits and Wevers on multimodal exploration of historical visual collections.
- Whitelaw on generous interfaces.
- Jaillant, Aske and Caputo on AI, access, risk and trust in cultural heritage organisations.

# Follow-ups

- **What I will read next:**  
  van der Maaten and Hinton on t-SNE; Kobak and Berens on using t-SNE; one humanities-facing account of dimensional reduction in visual analytics.

- **What I will test or write next:**  
  Add a DDR UMAP methods note: “UMAP is used here as a dimensional-reduction and visual analytics technique. Its projections guide pattern discovery and hypothesis generation, but the axes are not semantically meaningful and any apparent cluster must be checked against archival records.”