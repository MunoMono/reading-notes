---
title: "UMAP: uniform manifold approximation and projection for dimension reduction"
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
last_updated: "05 Oct 2026, 11:07"
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

# Thesis job

**How this source moves the primary research question forward:** McInnes, Healy and Melville provide the technical basis for UMAP as the dimensional-reduction method used to turn high-dimensional DDR embeddings into inspectable exploratory maps.

**How this source bears on the secondary question:** UMAP can help revisit historical design knowledge by surfacing neighbourhoods, transitions and anomalies, but the paper itself makes clear that projection geometry is parameter-dependent, locally prioritised and potentially misleading.

**Why I’m reading this now:** It is the core technical source for the semantic atlas and neighbourhood views.

**Where it sits in my argument:** Operational literature.

**My benchmark for using it:** I will use UMAP for hypothesis generation and navigation, not as standalone evidence of historical relation or conceptual structure.

# Position + moment

McInnes, Healy and Melville introduce UMAP as a scalable manifold-learning method grounded in Riemannian geometry, topology and fuzzy simplicial sets. The paper combines theoretical derivation, implementation details, comparative benchmarks and an unusually explicit weaknesses section. [@McInnesUMAPUniformManifold, pp. 1–3, 44–49]

# The author’s main move

UMAP constructs a weighted local-neighbourhood representation of high-dimensional data and optimises a lower-dimensional layout intended to preserve important aspects of that structure efficiently enough for large datasets. [@McInnesUMAPUniformManifold, pp. 13–23]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** UMAP is a neighbourhood-based dimensional-reduction method rather than a direct visualisation of source features.
- **Author claim:** The algorithm constructs a high-dimensional fuzzy neighbourhood graph and optimises a lower-dimensional representation of it.
- **Evidence-supported claim:** The computational description and implementation sections show approximate nearest-neighbour construction followed by stochastic optimisation of the low-dimensional embedding. [@McInnesUMAPUniformManifold, pp. 13–23]
- **Researcher inference:** A DDR UMAP map visualises modelled relationships among embeddings, not archival records in their original informational form.
- **Evidence (quote/paraphrase + page):** UMAP is described as a manifold-learning technique that builds local neighbourhood structure before laying it out in reduced dimensions. [@McInnesUMAPUniformManifold, pp. 1–2, 13–17]
- **Warrant (my words):** The visual field is downstream of both the original embedding and UMAP's neighbourhood construction.
- **Boundary:** The method can still preserve useful relational structure even though it is derivative.
- **Consequence:** Every map caption should describe UMAP as a projection over embeddings, not as “the archive.”
- **Practice cross-check:** DDR atlas points remain linked to PID-backed documents and the bge-m3 representation is documented upstream.

## Claim 2
- **Claim (plain):** The number-of-neighbours parameter determines the scale of structure UMAP prioritises.
- **Author claim:** McInnes et al. interpret n-neighbours as the local scale at which the manifold is approximated.
- **Evidence-supported claim:** Small values preserve finer local structure but lose the “big picture”; larger values capture larger-scale structure while averaging away detail. [@McInnesUMAPUniformManifold, pp. 22–24]
- **Researcher inference:** Choosing k/n-neighbours is part of the analytical framing of a DDR map, not a cosmetic setting.
- **Evidence (quote/paraphrase + page):** The paper explicitly describes n as a trade-off between fine-grained and large-scale manifold features. [@McInnesUMAPUniformManifold, p. 23]
- **Warrant (my words):** The parameter changes which relations survive the projection as visually salient.
- **Boundary:** There is no universally correct value independent of research purpose and data structure.
- **Consequence:** DDR parameter settings should be recorded and sensitivity-tested.
- **Practice cross-check:** The semantic-neighbourhood k slider is confined to that view and does not silently redefine the global atlas.

## Claim 3
- **Claim (plain):** min-dist changes the visual packing of points and therefore the apparent compactness of clusters.
- **Author claim:** The authors call min-dist an essentially aesthetic parameter governing how closely points can pack in the low-dimensional layout.
- **Evidence-supported claim:** Low min-dist permits dense regions; larger values spread points out and can compress distinctions between groups in visual examples. [@McInnesUMAPUniformManifold, pp. 23–27]
- **Researcher inference:** Apparent DDR cluster tightness cannot be interpreted independently of min-dist.
- **Evidence (quote/paraphrase + page):** McInnes et al. explicitly state that min-dist is especially important for visualisation appearance. [@McInnesUMAPUniformManifold, p. 23]
- **Warrant (my words):** A visually compact cluster may partly reflect layout settings rather than stronger historical coherence.
- **Boundary:** min-dist does not arbitrarily invent all neighbourhood structure; it modifies the low-dimensional representation of an already constructed graph.
- **Consequence:** Visual rhetoric of compactness/separation should never substitute for document-level evidence.
- **Practice cross-check:** Figure/method notes should report min-dist whenever UMAP maps are used analytically.

## Claim 4
- **Claim (plain):** UMAP deliberately prioritises local structure over long-range global distance.
- **Author claim:** The paper states that local distance is more important than long-range distance in UMAP's design.
- **Evidence-supported claim:** The weaknesses section says UMAP primarily represents local structure, even though the authors argue it can preserve more global structure than t-SNE/LargeVis. [@McInnesUMAPUniformManifold, pp. 45–49]
- **Researcher inference:** Local DDR neighbourhoods may be more defensible than reading exact distances between remote parts of the atlas.
- **Evidence (quote/paraphrase + page):** The authors explicitly caution that UMAP may not be the best technique when accurate global structure is the main interest. [@McInnesUMAPUniformManifold, pp. 45–49]
- **Warrant (my words):** The objective function is designed around local neighbourhood fidelity, so long-range geometry carries weaker interpretative warrant.
- **Boundary:** “More global structure” in benchmark comparisons is not the same as globally meaningful coordinates.
- **Consequence:** Separate local-neighbourhood questions from global visual impressions.
- **Practice cross-check:** DDR uses a dedicated neighbourhood view rather than treating whole-map distance as a single evidential scale.

## Claim 5
- **Claim (plain):** UMAP's axes have no direct semantic meaning and apparent structure can be spurious.
- **Author claim:** The authors identify limited interpretability and the “constellation effect” as weaknesses.
- **Evidence-supported claim:** Page 45 states that UMAP dimensions have no specific meaning, lacks feature loadings like PCA, and may detect manifold structure in noisy data, especially with small/noisy samples. [@McInnesUMAPUniformManifold, p. 45]
- **Researcher inference:** DDR axis labels, inferred directions or visually striking “islands” would be epistemically unjustified without independent evidence.
- **Evidence (quote/paraphrase + page):** The paper warns that UMAP can find structured constellations in noise and that detecting spurious embeddings remains an open problem. [@McInnesUMAPUniformManifold, p. 45]
- **Warrant (my words):** Visually coherent form is not proof that the source corpus contains the same intrinsic geometry.
- **Boundary:** Larger samples and corroborating evidence can reduce, but not eliminate, this interpretative risk.
- **Consequence:** Any cluster/outlier claim must be checked against metadata and source documents.
- **Practice cross-check:** UAT treats UMAP as candidate-generation; final historical claims come from retrieved/close-read evidence.

## Claim 6
- **Claim (plain):** Operational stability and scalability justify UMAP as a research instrument, not the truth of any particular interpretation.
- **Author claim:** McInnes et al. benchmark speed, large-scale performance and stability under subsampling against alternatives.
- **Evidence-supported claim:** UMAP is described as scalable and faster than t-SNE; in the flow-cytometry subsampling experiment it shows substantially lower Procrustes error and greater structural stability than t-SNE. [@McInnesUMAPUniformManifold, pp. 1–2, 32–36]
- **Researcher inference:** UMAP is operationally suitable for a 27,997-chunk DDR corpus, but technical stability does not establish historical validity of a cluster.
- **Evidence (quote/paraphrase + page):** After a 5% subsample of one million points, UMAP's per-point error was already below any value achieved by t-SNE in that experiment. [@McInnesUMAPUniformManifold, pp. 35–36]
- **Warrant (my words):** A method must be computationally usable and reasonably stable before its outputs can function as repeatable research prompts.
- **Boundary:** Stability is demonstrated on particular benchmark datasets and does not transfer automatically to DDR semantics.
- **Consequence:** Evaluate DDR stability empirically and keep epistemic validation separate from computational performance.
- **Practice cross-check:** Save UMAP parameters/seeds and compare whether key neighbourhood findings persist across sensible settings.

# Definitions / terms this changes

- **UMAP:** manifold-learning method that constructs a fuzzy neighbourhood representation and optimises a lower-dimensional layout. [@McInnesUMAPUniformManifold, pp. 1–2, 13–23]
- **n-neighbours:** parameter setting the local scale used to approximate structure. [@McInnesUMAPUniformManifold, pp. 22–24]
- **min-dist:** parameter controlling how tightly nearby points may pack in the output layout. [@McInnesUMAPUniformManifold, p. 23]
- **Constellation effect:** risk that UMAP presents noise as apparent manifold structure. [@McInnesUMAPUniformManifold, p. 45]
- **Projection stability:** consistency of low-dimensional structure under repeated/subsampled embedding, assessed in the paper using Procrustes distance. [@McInnesUMAPUniformManifold, pp. 32–36]

# My response

UMAP is valuable to the thesis precisely because the paper provides both the technique and the cautions needed to use it responsibly. It is fast, scalable and useful for local neighbourhood exploration, but its map is an engineered projection: scale is parameterised, cluster compactness is visually adjustable, axes have no intrinsic meaning and noise can look structured. That makes UMAP a navigational research instrument rather than historical evidence in its own right.

# Integration hooks

**Where I will cite it:** UMAP method; semantic atlas/neighbourhood rationale; parameter sensitivity; figure caveats.

**Link to my practice evidence:** bge-m3 embeddings → UMAP projection → neighbourhood/cluster prompt → source retrieval and close reading.

**Workstreams →** UMAP; visual analytics; semantic neighbourhoods.  
**Deliverables →** Methods chapter; figures; interface rationale.

# Boundary + risk

**Boundary:** The paper validates a mathematical/ML method on benchmark data, not archival or humanities interpretation.

**Risk if misused:** Visually persuasive clusters may be mistaken for historically meaningful categories, particularly when parameters and source checks are hidden.

# Cross-source / cross-lens synthesis

UMAP supplies the operational projection technique that Drucker requires us to interpret critically and that Rockmore treats as part of an exploratory embedding landscape. Mordell adds that both the embedding and projection sit inside a wider process of archival datafication. The DDR framework therefore treats UMAP as one reversible view over a provenance-preserving corpus: useful for finding questions and candidate relationships, insufficient for settling them.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 1–2, 13–17, 22–24, 32–36, 45–49
- **First full note:** Leland McInnes, John Healy, and James Melville, “UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction,” arXiv:1802.03426, rev. September 21, 2020.
- **Short note form:** McInnes, Healy, and Melville, “UMAP,” 22–24.
- **One quote worth lifting:** “the dimensions of the UMAP embedding space have no specific meaning” (p. 45).
- **One paraphrase worth keeping:** UMAP constructs and projects local neighbourhood structure efficiently, but its visual geometry is parameter-sensitive, locally prioritised and potentially vulnerable to spurious structure, so its maps are best used for exploratory hypothesis generation. [@McInnesUMAPUniformManifold, pp. 22–24, 45–49]

# Related works

- Drucker, “Humanities Approaches to Graphical Display.”
- Rockmore et al., “On the Literary Landscapes of Vector Embeddings.”

# Follow-ups

- **What I will test next:** Run a DDR parameter-sensitivity check and record which candidate neighbourhoods remain stable across reasonable n-neighbours/min-dist choices.
