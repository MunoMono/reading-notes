---
title: "Exploring the Landscape of Natural Language Processing Research"
authors: "Schopf, Tim and Arabi, Karim and Matthes, Florian"
year: 2023
journal: ""
citation_key: SchopfExploringLandscapeNatural
doi: ""
url: "https://github.com/sebischair/Exploring-NLP-Research"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "28 May 2026, 11:36"
last_updated: "28 May 2026, 11:36"
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
source_type: "Context / supporting"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.1 Visual analytics  
**Source type:** Context / supporting  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How corpus-level classification makes a research landscape visible
- How taxonomy-building can both organise and flatten a field

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
I want a comparative example of how a large research field can be systematically classified, mapped and summarised without collapsing its internal diversity.

**Where it sits in my argument:**  
Methods framing for S3.1, where I need to justify corpus-level mapping and show what a field-landscape approach makes visible before close interpretation.

**Why this term, not alternatives:**  
“Landscape” is useful here because the paper treats a corpus as a structured field of topics and trends rather than as a set of isolated papers. That makes it closer to my mapping problem than a purely technical NLP benchmark paper.

**My benchmark for using it:**  
It is useful if it offers transferable decisions about taxonomy-building, trend detection or corpus organisation that I can adapt for archival and design-research material.

# Position + moment

Schopf, Arabi and Matthes are operating in a meta-research mode inside NLP, responding to the scale and speed of expansion in the field. The paper sits in a research-mapping tradition: it treats the ACL Anthology as a corpus that can be systematically classified in order to reveal topic structure, recent developments and future directions.

The article is technical and field-internal, but its value for my thesis is procedural. It shows how a large body of textual material can be organised into a taxonomy, classified at scale and then visualised as a landscape of concentrations, trends and gaps.

**Canon assumptions to problematise / update for 2026:**  
Its taxonomy is field-internal and efficiency-oriented. For my project I need to keep asking what such classificatory views omit, flatten or render invisible when the material is historically contested.

# The author’s main move

They make the fast-growing NLP field legible by systematically classifying ACL Anthology research into a structured taxonomy in order to identify established topics, trends and future directions.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  A large corpus can be made more legible through a deliberately constructed taxonomy.

- **Evidence:**  
  Schopf, Arabi and Matthes argue that NLP research has expanded so quickly that maintaining an overview of the field has become difficult [@SchopfExploringLandscapeNatural, p. 1]. They respond by producing an extensive taxonomy of fields of study in NLP, shown visually in Figure 2, which groups NLP into high-level areas such as multimodality, natural language interfaces, semantic text processing, responsible and trustworthy NLP, reasoning, multilinguality, information retrieval, information extraction and text generation [@SchopfExploringLandscapeNatural, pp. 1–2].

- **Warrant:**  
  This supports the claim because the taxonomy is not simply a list of topics. It is a way of making a large field navigable. It converts a dispersed research corpus into a structured landscape that can be read for concentration, omission and relation.

- **So what for my thesis:**  
  The DDR archive can similarly be treated as a landscape of traces: not by forcing it into a fixed hierarchy, but by building provisional categories that make relationships visible and available for testing.

- **Practice cross-check:**  
  TODO: compare the DDR project taxonomy or alluvial categories with this field-landscape approach. Ask whether the DDR categories help navigation or prematurely stabilise contested design knowledge.

## Claim 2

- **Claim:**  
  Corpus-level mapping reveals unevenness as well as structure.

- **Evidence:**  
  Their classification of ACL Anthology papers identifies 74,279 research papers and shows that NLP research is highly unevenly distributed across fields of study [@SchopfExploringLandscapeNatural, p. 4]. Table 1 lists the most popular fields, including machine translation, language models, representation learning and text classification [@SchopfExploringLandscapeNatural, p. 4]. Figure 3 then shows that the field has grown unevenly over time, with language models rising sharply after 2018 while other areas show slower or more stagnant growth [@SchopfExploringLandscapeNatural, pp. 4–5].

- **Warrant:**  
  This matters because mapping does not only show what is present. It also shows concentration, imbalance and historical change. The point of a landscape view is not to replace close reading, but to identify where attention has accumulated and where further interpretation is needed.

- **So what for my thesis:**  
  DDR visual analytics should be used to identify concentrations and absences in the archive: which people, project types, funders or research areas are over-visible, under-visible or dependent on fragile metadata.

- **Practice cross-check:**  
  TODO: use the DDR alluvial diagram to test this. Note where certain actors or funders dominate the visible pattern and where “unrecorded” categories signal archival unevenness rather than absence of activity.

## Claim 3

- **Claim:**  
  Trend and landscape visualisations are useful, but their results depend on corpus boundaries, classification decisions and model accuracy.

- **Evidence:**  
  Schopf, Arabi and Matthes use a growth-share matrix and innovation life-cycle visualisation to identify language models, responsible and trustworthy NLP, multimodality and natural language interfaces as important areas of current and likely future development [@SchopfExploringLandscapeNatural, pp. 5–7]. However, their limitations section states that the taxonomy depends on the authors’ decisions, may not cover all possible fields of study, is limited to English-language ACL Anthology publications, and may be affected by classification-model errors [@SchopfExploringLandscapeNatural, pp. 7–8].

- **Warrant:**  
  This supports a cautious use of mapping. Visual field summaries look authoritative, but they are produced by decisions about corpus, taxonomy, labels, modelling and validation. Their value depends on making those decisions visible.

- **So what for my thesis:**  
  Any DDR landscape or pattern map should include a boundary statement: what corpus was included, what categories were used, how uncertain items were handled and what the visualisation is not allowed to prove.

- **Practice cross-check:**  
  TODO: add a corpus-boundary note to each DDR map: included records, excluded records, category source, unresolved metadata and level of manual checking.

# Definitions / terms this changes

- **Research landscape:**  
  I will use this to mean a corpus-level view that groups work into structured topic areas so the field can be read for concentration, change over time and gaps rather than only for individual arguments [@SchopfExploringLandscapeNatural, pp. 1–2].

- **Field of study:**  
  In this article, fields of study are academic disciplines and concepts that include tasks or techniques; they are used as the units through which the NLP corpus is classified [@SchopfExploringLandscapeNatural, pp. 1–3]. For DDR, the equivalent may be actors, projects, research concerns, funder types, media forms or institutional categories.

- **Taxonomy:**  
  A structured classification scheme that organises a corpus into higher- and lower-level categories. Here it is built from conference topics, workshop topics, manual review of EMNLP 2022 papers and expert interviews [@SchopfExploringLandscapeNatural, p. 3].

- **Weakly supervised classification:**  
  The authors use weak supervision to classify ACL Anthology papers according to their taxonomy, training a multi-label classifier on a large constructed dataset [@SchopfExploringLandscapeNatural, pp. 3–4]. For DDR, this is relevant as a precedent for semi-automated classification, but only after manual category design and validation.

- **Growth-share matrix:**  
  A visual device for comparing total number of papers with growth rate in order to distinguish trending, foundational, niche and emerging areas [@SchopfExploringLandscapeNatural, pp. 5–6].

- **Innovation life cycle:**  
  A model used to position fields of study according to publication growth and diffusion over time, distinguishing early emergence, prime unfolding, slowing development and retention or decline [@SchopfExploringLandscapeNatural, pp. 6–7].

# My response

- **What I take from this:**  
  - Systematic classification can be a productive first pass for making a large body of work discussable.  
  - Field-level mapping is useful when the goal is to detect concentration, absence and trend rather than to adjudicate single texts.  
  - The limitations section is especially useful because it makes clear that landscape views are constructed, bounded and model-dependent.

- **What I reframe / adjust:**  
  - I need to pair any DDR landscape view with explicit attention to what the taxonomy itself is doing historically and politically.  
  - I should treat classification as a working scaffold, not as a final description of the archive.

- **What question it raises next:**  
  - What would the equivalent corpus boundary be for the DDR archive, and who or what gets excluded by choosing it?  
  - Which DDR categories should come from the archive, which from my interpretation, and which from computational clustering?

# Integration hooks

- **Where I will cite it:**  
  In the S3.1 methods section, where I introduce corpus-level mapping and landscape views. The paragraph job: show that large text corpora can be classified and visualised to reveal structure, concentration and change, while also requiring explicit boundaries and validation.

- **Where I will name the title in running text:**  
  First use in the visual analytics section: “Schopf, Arabi and Matthes’s landscape study of NLP research is useful as a methodological comparator for mapping a large corpus into categories, trends and gaps.”

- **Link to my practice evidence:**  
  TODO: connect to DDR alluvial diagram, DDR taxonomy and any project/actor/funder mapping. Candidate: the use of project lead, applied research cluster and funder type as provisional categories in the alluvial.

- **Workstreams →**  
  Corpus boundary definition; taxonomy design; field/category mapping; visual analytics; classification validation; trend or concentration analysis.

- **Deliverables →**  
  DDR corpus-boundary note; provisional taxonomy; classification audit; alluvial or landscape map; figure note explaining what the categories show and what they do not prove.

- **Stakeholders →**  
  Thesis reader; supervisors; RCA archive staff; design history researchers; future users of the DDR archive; digital humanities readers.

# Boundary + risk

- **Boundary:**  
  This source is useful as a methodological comparator for corpus mapping, but it is not about archives, design history or contested institutional memory.

- **Risk if misused:**  
  If I borrow its taxonomy logic too directly, I could make the DDR archive look like a tidy research field rather than a historically uneven and contested body of traces.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–8, 15–17

- **First full note:**  
  Tim Schopf, Karim Arabi, and Florian Matthes, “Exploring the Landscape of Natural Language Processing Research,” arXiv, September 24, 2023.

- **Short note form:**  
  Schopf, Arabi, and Matthes, “Exploring the Landscape,” page number.

- **One quote worth lifting:**  
  “Obtaining an overview of the domain and maintaining it is difficult” [@SchopfExploringLandscapeNatural, p. 1].

- **One paraphrase worth keeping:**  
  Schopf, Arabi and Matthes show that a rapidly expanding research corpus can be made legible through taxonomy-building, weakly supervised classification and field-level visualisation, while also noting that such views depend on corpus boundaries, authorial decisions and model accuracy [@SchopfExploringLandscapeNatural, pp. 1–8].

# Related works

- Mohammad on NLP Scholar and visual exploration of NLP literature.
- Anderson, Jurafsky and McFarland on computational history of ACL.
- Gagliardi and Artese on semantic graphs for cultural heritage navigation.
- Rockmore et al. on embedding spaces as exploratory landscapes.
- Cifor and Wood on classification, archival politics and structural critique.

# Follow-ups

- **What I will read next:**  
  Mohammad on NLP Scholar; Anderson, Jurafsky and McFarland on computational history of ACL; one digital humanities field-mapping paper outside NLP.

- **What I will test or write next:**  
  Draft a DDR methods note: “Landscape mapping is used here to make a large and uneven body of traces discussable. The categories are provisional instruments for navigation and testing, not final descriptions of the archive.”