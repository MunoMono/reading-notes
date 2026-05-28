---
title: "On the Literary Landscapes of Vector Embeddings"
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
last_updated: "27 May 2026, 09:09"
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

# Thesis job (do this first)

**Project research question(s) this serves:** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now:**  
I am reading this to develop a defensible humanities-facing account of vector embeddings as exploratory surfaces for comparison, classification and discovery.

**Where it sits in my argument:**  
S3.1 Visual analytics: this source helps me describe embedding spaces as navigable interpretive landscapes that can support archival exploration, while keeping the evidential burden on subsequent close reading and provenance checks.

**Why this term, not alternatives:**  
“Landscape” is useful because it names the spatial and exploratory character of embeddings without pretending that the space is a neutral map of meaning. It lets me talk about proximity, clustering and routes through material while still treating those relations as constructed by modelling choices.

**My benchmark for using it:**  
I will use this source only where I need to explain why vector-based proximity can help generate candidate relationships. I will not use it to claim that embeddings prove historical influence, intellectual continuity or archival significance on their own.

# Position + moment

Rockmore, Chen, Jebelli, Riddell and Stropkay write from computational humanities, mathematics, informatics and applied research. Their article is positioned in a 2025 computational humanities moment shaped by transformer embeddings, large text corpora and renewed attention to classification, distant reading and machine-aided comparison.

The article compares older bag-of-words and TF-IDF approaches with newer transformer-based embeddings across a large literary corpus. Its problem-space is not archival in the strict institutional sense, but it is highly relevant to archive-facing work because it asks how high-dimensional representations can organise, classify and make explorable large collections of text.

**Canon assumptions to problematise / update for 2026:**  
The article extends the distant-reading tradition by shifting attention from topic models and word counts to embedding spaces. For my project, the important update is that computational surfaces can be interpretive aids, but their apparent spatial clarity should not be mistaken for historical explanation.

# The author’s main move

They compare vector representations of literary text by testing how well different embeddings preserve genre, authorship and book-level similarity in order to argue that embedding spaces can support classification, comparison, discovery and exploratory literary analysis.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  Vector embeddings can make large textual collections explorable as landscapes of proximity.

- **Evidence:**  
  The authors describe vector space as an enduring framework for machine-aided text analysis, from TF-IDF to transformer-based embeddings [@Rockmore2025LiteraryLandscapesVector, p. 1]. They frame embeddings as coordinates in a high-dimensional space where books or chunks of books become points that can be compared by distance [@Rockmore2025LiteraryLandscapesVector, p. 1].

- **Warrant:**  
  This supports the claim because the article treats embeddings as more than classification machinery. It treats them as a spatial form of organisation. Texts become comparable because they are placed into a constructed space where proximity can be inspected, measured and visualised.

- **So what for my thesis:**  
  I can describe embedding-based DDR work as the construction of an exploratory surface: a way to find possible relationships among traces before returning to the archive to test their historical and interpretive value.

- **Practice cross-check:**  
  TODO: test with one DDR corpus subset. Compare whether embedding proximity groups texts, captions, catalogue notes or testimonies around shared design concerns that are not already obvious from catalogue categories.

## Claim 2

- **Claim:**  
  Embedding spaces are useful for exploratory classification, but their results remain model-dependent.

- **Evidence:**  
  Rockmore et al. compare TF-IDF, Doc2Vec and transformer-based embeddings, finding that transformer-based embeddings perform best at preserving genre and authorship, although most techniques produce “sensible constructions” of a literary landscape [@Rockmore2025LiteraryLandscapesVector, p. 1]. Their results show that classification performance varies by model, classifier and genre, with transformer-based models generally outperforming traditional models in KNN classification tasks [@Rockmore2025LiteraryLandscapesVector, pp. 8–9].

- **Warrant:**  
  This matters because the landscape is not singular. Different embedding models produce different neighbourhoods, boundaries and degrees of separability. Any interpretive use of such a landscape needs to name the model and method that produced it.

- **So what for my thesis:**  
  When I use embeddings to surface DDR traces, I need to report the method as part of the claim: the relation was surfaced by a particular model, distance measure and corpus construction, not discovered as a self-evident archival fact.

- **Practice cross-check:**  
  TODO: for one DDR test set, run or compare at least two exploratory routes: keyword search and embedding proximity. Note where they converge and where they produce different candidate clusters.

## Claim 3

- **Claim:**  
  The main value of embeddings for humanities work lies in generating candidates for closer interpretation.

- **Evidence:**  
  The authors argue that embeddings could support “reader-directed exploration” of book space and provide a foundation for information retrieval useful to literary research [@Rockmore2025LiteraryLandscapesVector, pp. 12–13]. They describe this as a way for scholars to search large bodies of literature using example-based queries and to discover new sources for close reading [@Rockmore2025LiteraryLandscapesVector, p. 13].

- **Warrant:**  
  The evidence supports a modest methodological use. Embeddings do not replace interpretation; they produce routes, neighbours and anomalies that can be followed up. This is especially important for contested archival knowledge, where proximity may suggest a relation but cannot establish its meaning without provenance, context and close reading.

- **So what for my thesis:**  
  Embedding spaces can help activate the DDR archive by surfacing candidate traces and relationships, but the thesis must make its claims from interpreted archival evidence, not from vector proximity alone.

- **Practice cross-check:**  
  TODO: choose one embedding-neighbour result and write the full interpretive chain: query item → nearest neighbours → archival check → historical context → claim accepted, revised or rejected.

# Definitions / terms this changes

- **Vector embedding:**  
  I will use this to mean a numerical representation of text that places words, chunks or documents into a mathematical space where distance can be used as a proxy for similarity [@Rockmore2025LiteraryLandscapesVector, p. 1].

- **Literary landscape:**  
  I will adapt this as “archival landscape” or “trace landscape” when discussing DDR material. It means an exploratory spatial arrangement created by embeddings, not a natural map of the archive [@Rockmore2025LiteraryLandscapesVector, pp. 1, 11–13].

- **Intra-book / inter-book similarity:**  
  The article uses these measures to test whether chunks from the same book sit closer together than chunks from different books [@Rockmore2025LiteraryLandscapesVector, pp. 5–7]. For DDR, an analogous test might ask whether traces from the same actor, project or institutional setting cluster together.

- **Genre prediction entropy:**  
  The authors use entropy to measure classification uncertainty where genre boundaries are blurred or where a book contains diverse material [@Rockmore2025LiteraryLandscapesVector, pp. 10–11]. For DDR, this may be useful as a way of identifying contested, hybrid or unstable records.

- **Example-based query:**  
  I will use this to describe a search route where a known text, trace or record is used to find nearby material in the embedding space, rather than searching by keyword alone [@Rockmore2025LiteraryLandscapesVector, p. 13].

# My response

- **What I take from this:**  
  - The article gives me a strong humanities-facing way to describe embeddings as exploratory landscapes rather than black-box results.  
  - It supports a cautious account of computational surfacing: embeddings can identify neighbourhoods, anomalies and candidate relationships, but they do not settle interpretation.  
  - The use of entropy is especially useful for thinking about contested knowledge, because uncertainty and mixed classification may signal complexity rather than failure.

- **What I reframe / adjust:**  
  - I should describe visual analytics as route-making, not proof-making.  
  - I should treat clusters and neighbours as prompts for archival interpretation, with each computational result followed by a provenance and close-reading step.

- **What question it raises next:**  
  - What kinds of DDR traces become newly visible when proximity replaces keyword matching as the first route into the material?  
  - Can areas of high uncertainty or mixed classification help identify contested design knowledge rather than merely messy data?

# Integration hooks

- **Where I will cite it:**  
  In the methods chapter or S3.1 section, where I explain why embedding spaces can be used to generate candidate relationships among archival traces. The paragraph job: establish embeddings as exploratory surfaces for comparison and discovery, then set a boundary that they require close-reading validation.

- **Where I will name the title in running text:**  
  First use in the visual analytics section: “Rockmore et al.’s account of the ‘literary landscapes’ of vector embeddings is useful here because it treats high-dimensional text spaces as aids to exploration and comparison rather than as self-sufficient evidence.”

- **Link to my practice evidence:**  
  TODO: link to DDR visual analytics output: embedding map, nearest-neighbour table, alluvial diagram or network map. Candidate: one cluster where a designer, institution or research concern is surfaced across apparently separate catalogue categories.

- **Workstreams →**  
  Embedding experiments; visual analytics; nearest-neighbour search; cluster interpretation; uncertainty/entropy notes; close-reading validation.

- **Deliverables →**  
  DDR embedding landscape; candidate trace table; provenance-checked neighbour list; paragraph explaining why computational proximity is exploratory.

- **Stakeholders →**  
  Thesis reader; supervisors; archive staff; design historians; digital humanities readers; future users of the DDR archive.

# Boundary + risk

- **Boundary:**  
  This source is useful for explaining vector spaces, classification and exploratory landscapes, but it does not directly address archives, provenance, design history or institutional contestation.

- **Risk if misused:**  
  If I overuse it, I could make the DDR archive sound like a literary corpus and imply that similarity in embedding space is equivalent to historical relationship.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–2, 5–13

- **First full note:**  
  Daniel Rockmore, Jiayi Chen, Mohammad Javad Latifi Jebelli, Allen Riddell, and Harrison Stropkay, “On the Literary Landscapes of Vector Embeddings,” *Computational Humanities Research* 1 (2025): e18, https://doi.org/10.1017/chr.2025.10015.

- **Short note form:**  
  Rockmore et al., “On the Literary Landscapes,” page number.

- **One quote worth lifting:**  
  “a potential tool for book discovery and as an aid to various forms of more traditional comparative textual analysis” [@Rockmore2025LiteraryLandscapesVector, p. 1].

- **One paraphrase worth keeping:**  
  Rockmore et al. show that transformer-based embeddings can preserve meaningful neighbourhoods of genre and authorship, making them useful for exploratory comparison, discovery and follow-up close reading [@Rockmore2025LiteraryLandscapesVector, pp. 8–13].

# Related works

- Moretti on distant reading.
- Blei, Ng and Jordan on topic modelling.
- Bamman et al. on classification in cultural analytics.
- Wilkens on computational genre analysis.
- Walsh, Preus and Antoniak on model-based genre recognition in poetry.
- Jaillant, Aske and Caputo on AI, access, risk and trust in cultural heritage organisations.

# Follow-ups

- **What I will read next:**  
  Bamman et al. on classification with large language models in cultural analytics; Wilkens on genre, computation and twentieth-century fiction; Moretti on distant reading.

- **What I will test or write next:**  
  Write a short methods paragraph: “In this thesis, embedding spaces are used as exploratory surfaces. They help identify candidate relations among DDR traces, but each relation must be checked against archival provenance, record context and close reading before it becomes evidence.”