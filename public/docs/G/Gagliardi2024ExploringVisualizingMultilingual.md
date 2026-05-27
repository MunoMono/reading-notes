---
title: "Exploring and Visualizing Multilingual Cultural Heritage Data Using Multi-Layer Semantic Graphs and Transformers"
authors: "Gagliardi, Isabella and Artese, Maria Teresa"
year: 2024
journal: "Electronics"
citation_key: Gagliardi2024ExploringVisualizingMultilingual
doi: "10.3390/electronics13183741"
url: "https://www.mdpi.com/2079-9292/13/18/3741"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 10:10"
last_updated: "27 May 2026, 10:10"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Mar 2026, 12:22"
north_star_sha1: "46ff0ae0f623"
category: "S3.3 Multimodal machine learning"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Multimodal machine learning"
source_type: "Context / supporting"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Multimodal machine learning  
**Source type:** Context / supporting  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How semantic linking can turn archive navigation into pattern exploration
- How multilingual and multi-layer graphs make large cultural heritage datasets more navigable

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
I am reading this to support a practical account of semantic graphing as a way to explore, navigate and pattern-map multilingual cultural heritage archives.

**Where it sits in my argument:**  
S3.3 Multimodal machine learning: this source helps me describe how transformer embeddings, clustering and multi-layer semantic graphs can create navigable archive maps for non-expert users as well as researchers.

**Why this term, not alternatives:**  
“Semantic graph” is useful because it foregrounds relations between archive items rather than treating search as isolated retrieval. “Multi-layer” is useful because it names the practical problem of scale: large collections need navigable levels rather than one dense, unreadable network.

**My benchmark for using it:**  
I will use this source where I need a cultural-heritage example of transformer-based semantic linking and visual navigation. I will not use it to claim that graph structure alone explains historical meaning or resolves contested archival interpretation.

# Position + moment

Gagliardi and Artese write from cultural heritage informatics and computational methods, based at the Italian National Research Council. Their work sits at the intersection of digital cultural heritage, semantic graphs, transformer models, clustering and user-facing archive interfaces.

The paper responds to a usability problem in digitised cultural heritage: archives may be online, but access still depends on whether users can navigate complex datasets. The authors test an unsupervised pipeline across multilingual datasets, including QueryLab intangible heritage data, CookIT recipes and Wikipedia food-related entries.

**Canon assumptions to problematise / update for 2026:**  
The paper updates the assumption that digitisation equals access. Access is treated as navigability: the archive must be structured, visualised and made explorable through interfaces that can handle scale, multilinguality and uneven user expertise.

# The author’s main move

Gagliardi and Artese propose an unsupervised pipeline using transformer embeddings, UMAP, clustering, c-TF-IDF and semantic graphs in order to create multi-layer visual maps for navigating multilingual cultural heritage datasets.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  Semantic graphs can turn cultural heritage access from keyword retrieval into navigable exploration.

- **Evidence:**  
  Gagliardi and Artese argue that the effectiveness of cultural heritage archives depends on accessibility and navigability, and that users need to find information without moving through complex menus and options [@Gagliardi2024ExploringVisualizingMultilingual, p. 1]. They define semantic graphs as visual representations of words, items or concepts and their interrelationships, supporting the exploration of semantic similarities and connections [@Gagliardi2024ExploringVisualizingMultilingual, p. 1].

- **Warrant:**  
  This supports the claim because the graph changes the mode of access. Instead of asking the user to know the correct search term in advance, it presents relations among items as a navigable field. The archive becomes something that can be browsed through semantic adjacency as well as searched by keyword.

- **So what for my thesis:**  
  For the DDR archive, semantic graphs can support activation by making relationships among traces visible as navigable pathways, while still requiring each pathway to be checked against provenance and archival context.

- **Practice cross-check:**  
  TODO: test a small DDR semantic graph using actors, project terms or catalogue descriptions. Check whether the graph reveals relations that keyword search misses, and whether those relations survive archival inspection.

## Claim 2

- **Claim:**  
  Multi-layer graphing is a practical response to scale and information overload.

- **Evidence:**  
  The paper’s pipeline moves through dataset preparation, tokenization and vector representation, UMAP plus HDBSCAN or Mean Shift clustering, multi-layer semantic graph creation and c-TF-IDF topic extraction [@Gagliardi2024ExploringVisualizingMultilingual, pp. 3–4]. Figure 1 and Table 1 on page 4 show this pipeline visually, with multilingual documents moving through preprocessing, transformer-based vectorisation, clustering, similarity matrices, semantic graphs and word-cloud outputs [@Gagliardi2024ExploringVisualizingMultilingual, p. 4]. The authors later explain that dense graphs can cause information overload and that hierarchical clustering helps users begin with an overview and then zoom in on specific information [@Gagliardi2024ExploringVisualizingMultilingual, pp. 17–18, 22].

- **Warrant:**  
  This matters because large archive graphs easily become illegible. A multi-layer structure turns scale into a navigational problem: users can move from overview to cluster to item rather than being shown every relation at once.

- **So what for my thesis:**  
  DDR pattern mapping should not aim to display the whole archive in one graph. A defensible visual method should provide layers: overview, cluster, trace, source record and interpretive note.

- **Practice cross-check:**  
  TODO: design DDR graph levels: Level 1 = broad thematic or actor clusters; Level 2 = cluster-level trace groups; Level 3 = individual records with archival IDs and notes.

## Claim 3

- **Claim:**  
  Transformer-based semantic linking is useful, but its outputs need both quantitative and qualitative evaluation.

- **Evidence:**  
  Gagliardi and Artese evaluate clustering with metrics including Silhouette Score, Calinski–Harabasz Index, Davies–Bouldin Index and Dunn Index [@Gagliardi2024ExploringVisualizingMultilingual, pp. 7–8]. They also include preliminary qualitative evaluation from domain experts and web users because the aim is easier navigation through archives and textual datasets [@Gagliardi2024ExploringVisualizingMultilingual, pp. 8, 22]. Their discussion notes that multi-level visualisation was sometimes difficult for users to understand, and that some clusters contained unrelated items while related items were sometimes spread across multiple clusters [@Gagliardi2024ExploringVisualizingMultilingual, p. 22].

- **Warrant:**  
  This supports a balanced methodological position. Metrics can show whether clusters are compact or separated, but archive navigation also depends on whether users understand the graph, whether clusters make cultural sense and whether the interface avoids confusion.

- **So what for my thesis:**  
  If I use semantic graphs in DDR work, I need to evaluate them both as computational outputs and as interpretive aids: technically legible, archivally meaningful and usable for the reader.

- **Practice cross-check:**  
  TODO: create a DDR graph evaluation note with two columns: computational checks, such as cluster stability or similarity, and interpretive checks, such as whether the cluster makes archival and design-historical sense.

# Definitions / terms this changes

- **Semantic graph:**  
  I will use this to mean a visual representation of archive items, terms or concepts and their semantic relationships, designed to support exploration of similarity and connection rather than only item lookup [@Gagliardi2024ExploringVisualizingMultilingual, p. 1].

- **Multi-layer semantic graph:**  
  A hierarchical graph structure that allows users to move through large datasets in manageable levels rather than confronting one dense network [@Gagliardi2024ExploringVisualizingMultilingual, pp. 1, 17–18, 22].

- **Transformer embeddings:**  
  Contextual text vectors produced by pre-trained language models such as BERT, RoBERTa or multilingual MiniLM, used here to capture semantic relationships for clustering and graphing [@Gagliardi2024ExploringVisualizingMultilingual, pp. 5–6].

- **UMAP + clustering pipeline:**  
  A workflow in which transformer-generated vectors are reduced using UMAP and then clustered with HDBSCAN or Mean Shift to identify groups and graph layers [@Gagliardi2024ExploringVisualizingMultilingual, pp. 4–9].

- **c-TF-IDF:**  
  A class-based TF-IDF method that treats all documents in a cluster as a combined document to identify terms that distinguish that cluster [@Gagliardi2024ExploringVisualizingMultilingual, pp. 6–7, 20–21].

- **Similarity matrix:**  
  A matrix built by comparing item vectors, often using cosine similarity, to construct semantic relationships and graph edges [@Gagliardi2024ExploringVisualizingMultilingual, pp. 7, 17].

- **Information overload:**  
  The risk that dense graphs become difficult to navigate or interpret, requiring layered structure, filtering or interaction design [@Gagliardi2024ExploringVisualizingMultilingual, pp. 17–19, 22].

# My response

- **What I take from this:**  
  - The paper gives me a cultural-heritage precedent for using semantic graphs as user-facing exploratory maps.  
  - It supports the idea that visual analytics is not just a back-end method; it can become an interface for moving through archival material.  
  - Its most useful caution is about graph density and user comprehension: more connections do not automatically mean better understanding.

- **What I reframe / adjust:**  
  - I should describe DDR graphing as layered navigation rather than a single totalising map.  
  - I should evaluate graphs by interpretive usefulness, not only by computational coherence.

- **What question it raises next:**  
  - What is the right graph density for a DDR reader: enough connections to suggest patterns, but not so many that the argument becomes visually noisy?  
  - Which DDR entities should become graph nodes: people, projects, documents, design terms, archive descriptions, or generated trace summaries?

# Integration hooks

- **Where I will cite it:**  
  In the S3.1 visual analytics section when discussing semantic graphs as exploratory interfaces for archive navigation. The paragraph job: explain how transformer embeddings and graph layers can support multilingual or heterogeneous cultural heritage exploration, while noting the need for evaluation and limits around graph readability.

- **Where I will name the title in running text:**  
  First use in the visual analytics passage: “Gagliardi and Artese’s study of multilingual cultural heritage data shows how transformer embeddings can be combined with clustering and multi-layer semantic graphs to create navigable archive maps.”

- **Link to my practice evidence:**  
  TODO: link to DDR semantic graph / pattern map. Candidate evidence: a layered graph that moves from actor or topic cluster to individual DDR record, with each edge supported by similarity score and archival check.

- **Workstreams →**  
  Semantic graph design; transformer embedding; cluster evaluation; DDR entity modelling; interface sketching; graph-density testing; archival validation.

- **Deliverables →**  
  DDR semantic graph prototype; node and edge definition note; c-TF-IDF cluster labels; similarity matrix; interpretive evaluation log; figure caption explaining limits.

- **Stakeholders →**  
  Thesis reader; supervisors; archive staff; design historians; digital humanities readers; future users of DDR exploratory tools.

# Boundary + risk

- **Boundary:**  
  This source is useful for semantic graph navigation in cultural heritage datasets, but it does not address design archives, contested design knowledge or the evidential status of archival testimony.

- **Risk if misused:**  
  If I cite it too strongly, I could make graph navigation sound like interpretation; the safer use is to present semantic graphs as routes into DDR material whose patterns need archival and design-historical validation.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–8, 17–24

- **First full note:**  
  Isabella Gagliardi and Maria Teresa Artese, “Exploring and Visualizing Multilingual Cultural Heritage Data Using Multi-Layer Semantic Graphs and Transformers,” *Electronics* 13, no. 18 (2024): 3741, https://doi.org/10.3390/electronics13183741.

- **Short note form:**  
  Gagliardi and Artese, “Exploring and Visualizing Multilingual Cultural Heritage Data,” page number.

- **One quote worth lifting:**  
  “The effectiveness of archives, particularly those related to cultural heritage, depends on their accessibility and navigability” [@Gagliardi2024ExploringVisualizingMultilingual, p. 1].

- **One paraphrase worth keeping:**  
  Gagliardi and Artese show that transformer embeddings, UMAP, clustering and semantic graphs can be combined to produce layered visual interfaces for navigating multilingual cultural heritage datasets, while also warning that dense or multi-level graphs can create interpretive and usability problems [@Gagliardi2024ExploringVisualizingMultilingual, pp. 1, 17–22].

# Related works

- McInnes, Healy and Melville on UMAP.
- Arnold and Tilton on explainable search and discovery in visual cultural heritage collections.
- Whitelaw on generous interfaces.
- Rockmore et al. on embedding landscapes as exploratory surfaces.
- Jaillant, Aske and Caputo on AI, access, risk and trust in archives.
- Coleman on managing bias when collections become data.

# Follow-ups

- **What I will read next:**  
  Whitelaw on generous interfaces; one cultural heritage knowledge-graph paper; one graph-visualisation paper focused on readability and information overload.

- **What I will test or write next:**  
  Draft a DDR visual analytics paragraph: “Semantic graphs are used here as layered navigation devices. They surface candidate relations among traces, but graph edges are not treated as claims until the underlying records, metadata and historical context have been checked.”