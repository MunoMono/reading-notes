---
title: "Comment: The FAIR guiding principles for scientific data management and stewardship"
authors: "Wilkinson, Mark D. and Dumontier, Michel and Aalbersberg, IJsbrand Jan and Appleton, Gabrielle and Axton, Myles and Baak, Arie and Blomberg, Niklas and Boiten, Jan Willem and {da Silva Santos}, Luiz Bonino and Bourne, Philip E. and Bouwman, Jildau and Brookes, Anthony J. and Clark, Tim and Crosas, Merc{\`e} and Dillo, Ingrid and Dumon, Olivier and Edmunds, Scott and Evelo, Chris T. and Finkers, Richard and {Gonzalez-Beltran}, Alejandra and Gray, Alasdair J.G. and Groth, Paul and Goble, Carole and Grethe, Jeffrey S. and Heringa, Jaap and {t Hoen}, Peter A.C. and Hooft, Rob and Kuhn, Tobias and Kok, Ruben and Kok, Joost and Lusher, Scott J. and Martone, Maryann E. and Mons, Albert and Packer, Abel L. and Persson, Bengt and {Rocca-Serra}, Philippe and Roos, Marco and {van Schaik}, Rene and Sansone, Susanna Assunta and Schultes, Erik and Sengstag, Thierry and Slater, Ted and Strawn, George and Swertz, Morris A. and Thompson, Mark and Van Der Lei, Johan and Van Mulligen, Erik and Velterop, Jan and Waagmeester, Andra and Wittenburg, Peter and Wolstencroft, Katherine and Zhao, Jun and Mons, Barend"
year: 2016
journal: "Scientific Data"
citation_key: Wilkinson2016CommentFAIRGuiding
doi: "10.1038/sdata.2016.18"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 02, 2025, 03:07 PM"
category: 3.1-Infrastructures-and-standards-ISAD(G),-archival-description---
# Scope of this note
Focus on how Wilkinson et al. articulate the FAIR (Findable, Accessible, Interoperable, Reusable) principles as high-level, machine-oriented guidance for scholarly data, and how this normative framework intersects with archival description, linked data and computational infrastructures that matter for the thesis.

## Purpose and aim
### What research question or objective is being addressed?

The piece is a conceptual/commentary article rather than an empirical study. It addresses:

- How to define a concise, measureable set of **guiding principles** that can improve the infrastructure for **reuse of scholarly data**, particularly by **machines** as well as humans. (p.1)   
- How to bring clarity to what “good data management and stewardship” should aim at, by proposing FAIR as shared guideposts for data producers, repositories, funders and publishers. (p.1)
- How to frame these principles so they apply not only to “data” but also to **algorithms, tools and workflows** as first-class research objects. (p.1) 

In short: the objective is to define FAIR as a broadly applicable, domain-independent framework for making digital research objects more discoverable and reusable, with a strong emphasis on machine-actionability.

## Methodology
### Describe the research design, methods and sample size.

- **Genre**: Commentary / conceptual framework, not a hypothesis-testing study.
- **Origins**: Arises from the 2014 Leiden workshop *“Jointly Designing a Data FAIRport”*, which convened academic, infrastructure, funder and industry stakeholders concerned with data discovery and reuse. (p.3)   
- **Process**:
  - Stakeholder deliberations at the workshop produced a draft set of principles that all research objects should be Findable, Accessible, Interoperable, Reusable. (p.3)
  - A FORCE11 working group then refined these into the published FAIR principles. (p.3) 
- **Evidence base**:
  - Descriptive analysis of the **current data ecosystem**, including special-purpose and general-purpose repositories, and an illustrative gene-regulation scenario to show discovery/integration pain points. (pp.2–3)   
  - Presentation of **exemplar infrastructures** (Dataverse, FAIRDOM, ISA, Open PHACTS, wwPDB, UniProt) that already exhibit aspects of FAIRness. (pp.5–6)   
  - Comparison to related initiatives like the Joint Declaration of Data Citation Principles and the Data Seal of Approval. (p.7)   

No sample size in the statistical sense; “data” here are infrastructures, standards and community initiatives.

## Key findings and arguments
### Summarise the main results and conclusions
1. **FAIR as four high-level principles plus sub-criteria**  
   - Data and metadata should be **Findable, Accessible, Interoperable, Reusable**, each elaborated as a small set of testable conditions (e.g. persistent identifiers, rich metadata, open protocols, community standards, explicit licensing and provenance). [Box 2, p.5)
   - Importantly, these principles are **technology-neutral, domain-independent and modular**: they can be adopted incrementally and in combinations, and they explicitly distinguish between data and metadata. (pp.4–5)   

2. **Machine-actionability as a central design target**  
   - A major argument is that humans cannot cope with the scale and complexity of contemporary e-Science; therefore, infrastructures must support **autonomous computational agents** in discovering, assessing, licensing and integrating data. (pp.2–3)   
   - “Machine-actionable” is framed as a **continuum**, from minimal metadata to rich semantics and licensing information, aiming at the ideal where a machine can make a “useful decision” about previously unseen data. (p.4)   

3. **FAIRness as a path and as a prerequisite for stewardship**  
   - FAIR is not a standard but a set of **guiding desiderata** that precede implementation and provide “steps along a path” toward better data stewardship. (pp.4–5)   
   - The authors argue that **good data management is a pre-condition, not an end in itself**, for knowledge discovery and innovation, and that FAIR offers “mileposts” for minimal good practice aligned with funder and publisher expectations. (pp.1, 7–8)   
   - Examples across domains (Dataverse, FAIRDOM, ISA, wwPDB, UniProt, bioCADDIE, CEDAR) demonstrate that FAIR can be realised in different technical stacks and scales of repository. (pp.5–7)   

## Relevance
### How does it link to the research questions or framework?

- Sits squarely in **3.1 Infrastructures and standards**: FAIR is now a canonical reference for thinking about data infrastructures, metadata, and reusability across repositories.  
- Directly informs how I frame **DDR archival material and related datasets as “collections as data”**:  
  - **Findability** → persistent identifiers for DDR entities (projects, people, documents) and indexing in searchable catalogues/knowledge graphs.  
  - **Accessibility** → open, documented APIs/protocols for query, with clear auth patterns where needed.  
  - **Interoperability** → use of shared schemas and vocabularies for entities, relationships and provenance (bridging archival standards like ISAD(G) with linked-data models).  
  - **Reusability** → rich contextual metadata, explicit licensing, and provenance capturing institutional context and epistemic drift.  
- Complements Hawkins’ work on linked data and digital humanities archives, giving a broader, cross-disciplinary rationale for **semantic, machine-readable description** as an infrastructure requirement rather than a niche DH concern.

## Project integration
### Why it helps the project (evidence-linked)

- **Normative backbone for the DDR data model**  
  - FAIR gives a language for justifying design decisions about identifiers, metadata richness, and vocabulary choice in the DDR database and knowledge-graph layer: “(meta)data are assigned a globally unique and persistent identifier” and “(meta)data use vocabularies that follow FAIR principles.” (Box 2, p.5)  
  - It also legitimises focusing on **data + metadata** and on **non-data research objects** (e.g. workflows, teaching materials, internal schemas) as first-class, FAIR-able artefacts in the DDR reconstruction. (p.5)  

- **Justification for machine-oriented computational historiography**  
  - The explicit emphasis on computational stakeholders and machine-actionable metadata underpins my use of RAG, linked data and explainable AI over DDR collections. (pp.2–4)   
  - This supports treating the DDR platform as an **API-first, machine-navigable archive** rather than a purely human-readable catalogue.

- **Evidence for stewardship as ongoing infrastructure work**  
  - The claim that “good data management and stewardship is not a goal in itself, but rather a pre-condition supporting knowledge discovery and innovation” (p.7) aligns with my argument that classification and data modelling at DDR are **epistemic practices**, not mere housekeeping.

### Hooks into the project
- **Workstreams →**  
  - WS2: DDR data modelling and schema (FAIR-aware identifiers, vocabularies, provenance).  
  - WS3: Knowledge-graph and RAG infrastructure design (FAIR for machine-actionable metadata).  
  - WS4: Policy/guidance for future RCA/DDR-adjacent collections as data (FAIR-aligned stewardship recommendations).

- **Deliverables →**  
  - FAIR-informed relational/graph schema for DDR entities.  
  - Documentation that maps DDR fields and vocabularies against FAIR sub-principles.  
  - Conceptual chapter section situating DDR within FAIR and related archival/data initiatives.

- **Stakeholders →**  
  - Archivists and records managers at RCA and partner institutions.  
  - Digital infrastructure teams (library/IT) implementing APIs and repositories.  
  - Funders and policy-makers concerned with reproducibility, openness and data reuse.

### Use across the methods spine
- [x] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

## Critical evaluation
### Strengths
- **Widely adoptable, high-level framework**  
  - FAIR’s four principles plus sub-points are **simple, memorable and measurable enough** to be used across disciplines, yet anchored in concrete conditions like persistent identifiers and open protocols. [Box 2, p.5)  
- **Strong emphasis on machine-actionability**  
  - The article clearly articulates why machines need rich, standardised metadata and licensing info to operate autonomously at web scale. (pp.2–4)   
- **Grounded in real infrastructures**  
  - Detailed examples (Dataverse, FAIRDOM, ISA, wwPDB, UniProt, Open PHACTS, bioCADDIE, CEDAR) show FAIR is not aspirational fluff but already partially implemented. (pp.5–7)   

### Weaknesses and limitations
- **High-level and somewhat vague operationally**  
  - FAIR deliberately “precedes implementation” and “is not, itself, a standard or specification.” (p.4)  
  - This makes it adaptable but leaves many practical tensions (trade-offs between richness and workload, legacy systems, small collections) unresolved—precisely where my project has to make specific choices.
- **Life-science bias in examples**  
  - Most exemplars (wwPDB, UniProt, ISA, Open PHACTS, bioCADDIE, CEDAR) are biomedical or life-science infrastructures; there is little discussion of humanities/design archives, small heterogeneous collections, or analogue/digitised records.   
- **Limited attention to social and institutional constraints**  
  - While they acknowledge privacy/sensitive data and special cases, deeper questions about institutional power, archival silences and labour are largely outside scope and have to be supplied from archival theory.

### Author’s credibility
- The author list includes many key figures in **bioinformatics, data infrastructures and scholarly communication** (e.g. UniProt, wwPDB, FORCE11, ELIXIR, major publishers). (p.8)
- The article appears in **Scientific Data**, a Nature Research journal focused on data descriptors and data policy, and has become the de facto canonical citation for FAIR.

### Contextual validity
- Designed to be **domain-independent** and to apply to all “scholarly digital research objects,” including workflows and tools. (pp.1, 5)   
- That said, practical uptake and tooling are much more advanced in biomedical and “big science” contexts than in small institutional or humanities archives, so translation work is needed for DDR-type collections.

### Comparisons
- **Joint Declaration of Data Citation Principles (JDDCP)** – focuses on data as a citable research output; FAIR overlaps but is broader and more infrastructure-oriented. (p.7)   
- **Data Seal of Approval (DSA)** – emphasises responsibilities and conduct of repositories; FAIR focuses “primarily on the data itself,” making them complementary. (p.7) 
- In the thesis framework, FAIR sits alongside archival standards (ISAD(G), EAD) and Hawkins’ linked-data arguments, providing the **machine-centric counterpart** to human-oriented descriptive standards.

## Interpretation
### Analysis and insights
- **Alternative explanations / readings**  
  - FAIR can be read less as a neutral best-practice framework and more as a **programme for re-engineering knowledge infrastructures** in line with semantic-web and data-science logics. This is helpful for DDR because it foregrounds how classification and data modelling are value-laden design decisions.
- **Implications for practice, policy or theory**  
  - For DDR and similar institutional archives, “being FAIR” would mean:
    - Assigning **globally unique, persistent identifiers** to DDR entities and exposing them via stable URLs or URIs.  
    - Publishing rich, structured metadata with explicit **licensing and provenance**.  
    - Using **formal, shared vocabularies** for people, projects, methods, and document types, and expressing them in machine-readable formats (e.g. RDF/JSON-LD).  
    - Ensuring **metadata remains accessible** even if some content is restricted or removed (privacy, rights), echoing A2. [Box 2, p.5) 
- **How it shapes my thinking**  
  - Encourages me to treat the DDR data model not simply as an internal convenience, but as potentially **FAIR-compliant infrastructure** with public, machine-actionable interfaces.
  - Reinforces the need to make archival “silences” and missingness **visible in metadata**, so that FAIRness does not invisibly naturalise gaps but helps surface them.

## Evidence to quote or paraphrase
- “Good data management and stewardship is not a goal in itself, but rather a pre-condition supporting knowledge discovery and innovation.” (p.7)
- “The FAIR Guiding Principles describe distinct considerations for contemporary data publishing environments with respect to supporting both manual and automated deposition, exploration, sharing, and reuse.” (p.4)  
- **Paraphrase:** FAIR is intentionally positioned as a set of **high-level, domain-independent principles** that can be adopted incrementally; they are not a standard or specification, but “mileposts” that help data producers and publishers judge whether their implementation choices make research objects more Findable, Accessible, Interoperable and Reusable. (pp.4–5, 7–8)   

## Related works
- Data citation and stewardship:
  - Data Citation Synthesis Group, *Joint Declaration of Data Citation Principles* (2014). [ref. 29)   
  - Starr et al., “Achieving human and machine accessibility of cited data in scholarly publications” (PeerJ Comput. Sci. 2015). [ref. 27)
- Reproducible research and data reuse:
  - White et al., “Nine simple ways to make it easier to (re)use your data” (2013).  
  - Sandve et al., “Ten Simple Rules for Reproducible Computational Research” (2013). [refs. 11–12) 
- Domain exemplars:
  - wwPDB, UniProt, Dataverse, FAIRDOM, ISA, Open PHACTS as case studies of FAIR-ish infrastructures. (pp.5–6)   
- Conceptual neighbours:
  - Hawkins on archives & linked data.  
  - Archival literature on classification, silences and infrastructures that will be used to “thicken” FAIR in the thesis (Bowker & Star, Moss & Thomas, etc.).

## Questions for further research
- How can FAIR be **operationalised for small, heterogeneous, historically constructed archives** like DDR, where legacy formats and incomplete metadata are the norm?
- What does **“reuse”** mean in design history and archival research, and how might that differ from STEM conceptions embedded in FAIR?
- How can FAIR be combined with **archival standards** (ISAD(G), EAD) and critical archival theory to avoid flattening context while still achieving machine-actionability?
- What metrics or assessment tools (FAIRness indicators) are suitable for **institutional collections** rather than big domain repositories?
- How do issues of **power, missingness and bias** in archival records interact with FAIR’s push for discoverability—can FAIR-compliant metadata also expose, rather than hide, archival silences?