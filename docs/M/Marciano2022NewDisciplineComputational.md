---
title: "Towards a new discipline of computational archival science (CAS)"
authors: "Marciano, Richard"
year: 2022
journal: "Archives, Access and Artificial Intelligence: Working with Born-Digital and Digitized Archival Collections"
citation_key: Marciano2022NewDisciplineComputational
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 02, 2025, 03:07 PM"
category: 4.3-RAG/XAI/provenance---
# Scope of this note
Afterword to *Archives, Access and AI*, used here to frame DDR as part of **Computational Archival Science (CAS)**: big-records analytics, AI/ML pipelines over archives, and the integration of archival and computational thinking.

## Purpose and aim
### What research question or objective is being addressed?

- To expand on Jaillant’s three challenges for cultural heritage organisations: **scale, “dark” archives, and skills gaps** in data science/AI. (pp.206–208)
- To propose and justify **Computational Archival Science (CAS)** as a new transdisciplinary field combining archival and computational thinking. (pp.212–213)  
- To argue for **networks, training infrastructures and case studies** that operationalise CAS in practice (CT-LASER, CASES, AIC, FARM). (pp.210–216)    

## Methodology
### Describe the research design, methods and sample size.

- **Conceptual afterword** synthesising contributions to the volume.  
- Uses:
  - A **teaching case** (1911 Charlotte City Directory) to illustrate big-data scale and a two-phase pipeline (datafication + analysis). (pp.206–208)
  - A review of **projects and grants** (CT-LASER, IRCN-CAS, CASES) and workshop outputs to ground the CAS proposal. (pp.209–216)
- No empirical sample; evidence is infrastructural, pedagogical and conceptual.

## Key findings and arguments
### Summarise the main results and conclusions
1. **Cultural heritage is “big data” and demands scalable computation**  
   - City directories + linked datasets (census, maps, redlining, vital records) quickly reach TB–PB scale; “methods that might apply to small holdings may not be applicable to very large holdings.” (pp.206–207) 

2. **Unlocking “dark archives” requires transparent pipelines & awareness of “dark AI”**  
   - Students are walked through digitisation → OCR → cleaning → NER → GIS → dashboards → graph databases, explicitly opening “black box” processes. (pp.207–208)  
   - Warns that AI can **amplify erasure**, especially around race/class/gender (Williams, CT-LoS); CAS must tackle archival silences and representational harms, not just access. (pp.208–209)  

3. **CAS as a transdisciplinary field blending computational and archival thinking**  
   - Working definition: CAS applies computational methods to large-scale records/archives for processing, analysis, preservation and access, to support archival functions (appraisal, arrangement, description, access). (p.213)  
   - Emphasises **computational thinking taxonomy** (22 practices) mapped to archival science, and the need for **international networks and shared Jupyter-based case studies** (CASES, AIC, FARM). (pp.210–216)

## Relevance
### How does it link to the research questions or framework?

- Sits squarely in **4.3 RAG/XAI/provenance**: CAS offers the conceptual home for using AI/ML, graph analytics and pipelines over DDR records.  
- Reframes DDR not as a one-off digitisation effort but as a **computational archival lab** where pipelines, models and educational case studies are central.  
- Speaks directly to **provenance and explanation**: CAS seeks computational methods that remain accountable to archival principles (respect des fonds, original order, authenticity). (p.213)  

## Project integration
### Why it helps the project (evidence-linked)

- **Blueprint for DDR’s computational methods spine**  
  - The Charlotte directory pipeline (OCR → wrangling → NER → GIS → graph) is structurally similar to what you’re doing with DDR → RAG → KG → visual analytics. (pp.207–208)
- **Justifies blending archival and computational thinking in the thesis**  
  - CT-LASER work explicitly argues for mapping computational thinking to library/archival practices, mirroring your argument about DDR as design of epistemic tools. (pp.209–210)
- **Supports building DDR as a teaching and methods platform**  
  - CASES/Jupyter notebooks as reusable CAS case studies align with using DDR corpora and models in teaching and methods demonstration. (pp.215–216)

### Hooks into the project
- **Workstreams →**  
  - WS2: Designing DDR pipelines (OCR, entity extraction, graph building) as CAS workflows.  
  - WS3: RAG/XAI layer over DDR as a CAS experiment in explainable retrieval and provenance-rich analytics.  
  - WS4: DDR as a teaching resource (Jupyter notebooks, methods exemplars).

- **Deliverables →**  
  - Conceptual “DDR as CAS testbed” section in methods chapter.  
  - A small CASES-style notebook series built on DDR data.  
  - Mapping table: archival concepts ↔ computational methods in DDR.

- **Stakeholders →**  
  - Archivists and records managers.  
  - DH/DS researchers and students using DDR corpora.  
  - Infrastructure teams building DDR pipelines and notebooks.

### Use across the methods spine
- [x] Framing and theory
- [ ] Study design
- [x] Data collection and instruments (pipelines, tools)
- [x] Analysis and models (graph DBs, NLP, GIS)
- [x] Synthesis and interpretation
- [x] Reporting and communications (case studies, notebooks)

## Critical evaluation
### Strengths
- Clear articulation of **three systemic challenges** (scale, dark archives, skills gap) grounded in a concrete big-data example. (pp.206–208)
- Provides a **concise working definition** of CAS and shows its roots in actual projects, workshops and grants (not just theory). (pp.212–213) 
- Strong emphasis on **ethics and representation** (dark AI, racial erasure) rather than techno-solutionism. (pp.208–209)  

### Weaknesses and limitations
- High-level and **programmatic**: assumes agreement that CAS is needed; less critical interrogation of potential downsides of computationalisation (e.g. dependency on specific platforms, funding politics).  
- Examples skew towards **US/UK institutional contexts** and large collaborations; translation to smaller archives or under-resourced settings is implicit rather than worked through.  
- CAS is framed mostly around *scale* and *big data*; low-volume but high-risk records (e.g. sensitive design school material) get less direct attention.

### Author’s credibility
- Marciano is a central figure in CAS, leading major initiatives (CT-LASER, IRCN-CAS, AIC, CASES, FARM) and co-authoring key CAS papers; writes from deep experience in **big data + archives education and practice**. 

### Contextual validity
- Highly applicable to **born-digital and large-digitised** holdings, which is exactly where DDR will end up once workflows scale.  
- Concepts (CT taxonomy, CAS definition, networks) generalise beyond specific collections, but actual tooling referenced (Jupyter, particular vendors) is time- and resource-specific.

### Comparisons
- Compared to Padilla’s Vancouver Statement, Marciano is more **infrastructure and method** focused; less explicit on Indigenous data sovereignty and climate, more on CT and big data.  
- Complements FAIR by offering a **disciplinary framing** (CAS) and a pipeline view rather than principle-level guidance.  
- Aligns with Claeyssens’ “library as publisher” by emphasising that publishing data as pipelines and notebooks is part of archival practice.

## Interpretation
### Analysis and insights
- Helps me name DDR’s computational work explicitly as **Computational Archival Science**, not just “DH methods” or “AI experiments”.  
- The CT mapping suggests a way to structure the methods chapter: DDR pipelines as **worked examples of CT practices** (decomposition, abstraction, pattern recognition, systems thinking) in an archival setting.  
- The “dark AI” discussion sharpens the argument that DDR’s RAG/XAI layer must **expose provenance, gaps and distortions**, not just provide slick answers.

## Evidence to quote or paraphrase
- **Paraphrase:** Cultural collections are inherently “big data”; city directories linked with other historical datasets quickly reach terabyte–petabyte scale, so methods for small holdings don’t transfer directly. (pp.206–207)  
- **Paraphrase:** CAS is defined as a transdisciplinary field applying computational methods to large-scale archives to support appraisal, arrangement, description, preservation and access decisions, blending computational and archival thinking. (p.213)

## Related works
- Marciano et al. on **Archival Records and Training in the Age of Big Data**;  
- Underwood & Marciano on **Computational Thinking in Archival Science**;  
- CT-LASER final report; CASES Jupyter platform; FARM initiative;  
- Williams on race, vision and archival erasure; Perine et al. on CT-LoS;  
- Jaillant’s framing chapter in *Archives, Access and AI*.

## Questions for further research
- How to **operationalise CAS** within a mid-sized institutional project like DDR (infrastructure, staffing, governance)?  
- What does a **DDR-specific CT taxonomy** look like—how do CT practices map onto your actual RAG/KG/visualisation workflows?  
- How can DDR contribute CASES-style **reusable notebooks and teaching materials** to the wider CAS community, especially around design education archives?