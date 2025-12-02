---
title: "Publishing large collections of digitised printed material"
authors: "Claeyssens, Steven"
year: 2025
journal: "The Routledge companion to libraries, archives and the digital humanities"
citation_key: Claeyssens2025PublishingLargeCollections
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 02, 2025, 02:46 PM"
category: 4.2-Digital-libraries/long-tail/discovery
---
# Scope of this note
Focus on how large-scale digitisation at the KB (National Library of the Netherlands) turns libraries into *publishers* of multi-layered digital collections, and what this implies for collections-as-data, corpus building and bibliographic modelling.

## Purpose and aim
### What research question or objective is being addressed?

- To describe how the KB has built and exposed **large digitised collections** (Delpher, Data Services) and how these function as infrastructure for human and computational use. (pp.204–206)  
- To argue that libraries engaged in mass digitisation should be understood as **publishers**, not just data producers or custodians, with all the responsibilities that entails. (pp.206–207)  
- To show why careful **bibliographic identification** and corpus-building tools are crucial for responsible use of national-scale digitised collections. (pp.207–210)   

## Methodology
### Describe the research design, methods and sample size.

- Conceptual / reflective chapter grounded in **KB case study**:
  - Historical overview of KB digitisation projects and services (Delpher, Data Services, KB Lab). (pp.204–205)  
  - Analytical comparison of Delpher (GUI) vs Data Services (APIs/datasets) as different *publishing frames* over the same data. (pp.205–207)  
  - Use of **publishing studies** (Bhaskar, Adams & Barker, Thompson) and **digital bibliography** (Tanselle, FRBR/LRM) to theorise digitised collections as multi-layer publications. (pp.207–210)

No empirical sample; evidence consists of infrastructure description, usage stats, and secondary literature.

## Key findings and arguments
### Summarise the main results and conclusions
1. **Mass digitisation turns libraries into publishers**  
   - Libraries select, commission digitisation, manage rights, and decide how material is made public; they thus function as **publishers** of digital surrogates, not just holders or “data producers”. (pp.206–207)

2. **Digitised collections are multi-layered, with human and machine “editions”**  
   - The same newspaper corpus is simultaneously published as facsimile images/PDFs (for humans) and as OCR/ALTO/plain-text corpora (for machines), each with different statuses and expectations. (pp.206–207)  
   - This explains conflicting views on OCR quality, duplicates, “access vs preservation copies”, and what counts as *the* collection. (pp.207–208)

3. **Corpus-building tools demand stronger bibliographic modelling and curation**  
   - Moving from simple search interfaces to corpus-selection tools requires granular identifiers, versioning, and models like FRBR/LRM plus national bibliography integration. (pp.209–210)  
   - Bibliographic expertise remains central when publishing collections as data for computational research. (pp.210–211)

## Relevance
### How does it link to the research questions or framework?

- Fits 4.2 **Digital libraries / long-tail / discovery**: shows how national libraries operationalise collections-as-data at scale, and the tensions between GUI-driven discovery and data-level access.  
- Offers a strong conceptual bridge between **collections-as-data**, **FAIR** and **archival/bibliographic modelling**, which is exactly where your DDR work sits.  
- The “library as publisher” frame helps you articulate DDR decisions (selection, interfaces, APIs, corpora) as *publishing* acts with epistemic consequences.

## Project integration
### Why it helps the project (evidence-linked)

- Supports treating DDR as a **multi-layer publication**, not a single interface:
  - Delpher vs Data Services distinction maps onto DDR’s potential GUI vs API/RAG layers. (pp.205–207)
- Justifies investment in **corpus-building tools** and advanced selection, instead of only search:
  - The proposed “text suite” as user-friendly front-end to data services mirrors your plan for DDR corpus export and RAG-ready slices. (pp.208–209)  
- Anchors your emphasis on **bibliographic entities and relationships**:
  - Calls out FRBR/LRM, WEMI entities and linking to historical national bibliography—analogous to your DDR entities (projects, people, works, records) and external authority data. (p.210) 

### Hooks into the project
- **Workstreams →**  
  - WS2: Entity modelling, identifiers, and linking DDR to external bibliographies/authorities.  
  - WS3: Design of DDR data services, APIs, and corpus-building interface.  
  - WS4: Policy/positioning of RCA/DDR as a “publisher” of collections-as-data.

- **Deliverables →**  
  - Conceptual section on “DDR as publisher of multi-layer collections”.  
  - Requirements for DDR corpus-selection and export tooling.  
  - Mapping of DDR’s digital objects to WEMI/FRBR-LRM-like structures.

- **Stakeholders →**  
  - Library/archives staff running digitisation and data services.  
  - Researchers building corpora from DDR.  
  - IT/infrastructure teams implementing APIs and notebooks.

### Use across the methods spine
- [x] Framing and theory
- [ ] Study design
- [x] Data collection and instruments (digitisation & data services)
- [x] Analysis and models (bibliographic modelling; OCR as edition)
- [x] Synthesis and interpretation
- [x] Reporting and communications

## Critical evaluation
### Strengths
- Concrete **national library case** with long-running infrastructure (Delpher, Data Services, KB Lab) gives practical grounding. (pp.204–206)
- The **publisher** lens is a neat conceptual move that clarifies roles, responsibilities and the difference between content vs service/frame. (pp.206–208)  
- Strong integration of **publishing theory and digital bibliography** with GLAM/digital humanities practice.

### Weaknesses and limitations
- KB-centric; largely European, large national library context—less explicit about smaller or under-resourced institutions.  
- Focused on newspapers/printed material; born-digital and mixed-media collections are only implicit.  
- Stops at a fairly high level regarding organisational politics, funding constraints and user governance.

### Author’s credibility
- Claeyssens is closely involved with KB digitisation and data services, writing from **insider practitioner-scholar** perspective, and engages extensively with DH, GLAM labs, and bibliographic literature. (notes & references, pp.211–214) 

### Contextual validity
- Very applicable to **national-scale digitisation** and to any project offering both GUI and data-level access.  
- For DDR: scale differs, but the structural issues—multi-layer editions, selection, corpus-building, and the confusion between interface & collection—are directly relevant.

### Comparisons
- Extends Padilla’s **collections-as-data** work by explicitly framing libraries as *publishers* and by zooming in on bibliographic complexity.  
- Complements Wilkinson et al.’s **FAIR** by focusing less on abstract principles and more on publishing frames (interfaces, APIs, ZIPs, notebooks) and their implications.

## Interpretation
### Analysis and insights

- **Alternative reading:** you can treat the KB story as a cautionary tale about how shiny interfaces (Delpher) can obscure the complexity and partiality of the underlying data and editions.  
- For DDR, this suggests:
  - Being explicit about which “edition” a user or a model is seeing (scan, OCR, corrected text, enriched graph).  
  - Designing the corpus-selection tool as a deliberate *publishing frame*, not a mere utility.  
- It reinforces your argument that **classification and modelling are publishing acts**: choices about what to digitise, how to OCR, how to slice into corpora, and which APIs to expose are all epistemic decisions affecting future research.

## Evidence to quote or paraphrase
- “Creating and opening up these large digital collections effectively turns libraries into publishers.” (paraphrased from pp.204)
- **Paraphrase:** Delpher and Data Services publish *the same collection* through different frames: the GUI foregrounds facsimile images for human readers, while APIs and datasets foreground OCR and structured text for machines, effectively producing multiple overlapping editions of the same works. (pp.205–207)

## Related works
- Padilla et al., *Santa Barbara Statement on Collections as Data*.  
- FAIR principles (Wilkinson et al. 2016) as referenced in the chapter.  
- Bhaskar’s *Content Machine*; Adams & Barker; Thompson on publishing.  
- FRBR / IFLA LRM; datasets for digital cultural heritage (Alkemade et al.).  

## Questions for further research
- How to adapt the **“library as publisher”** model to smaller institutional archives like DDR with fewer resources?  
- What would a DDR corpus-selection tool need to support both **non-technical historians/design researchers** and computational users?  
- How can DDR clearly document and expose its **multiple editions** (scans/OCR/cleaned text/graph data) to avoid misinterpretation in downstream analysis and AI use?