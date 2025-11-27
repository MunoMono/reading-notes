---
title: "The interconnectedness of all things: understanding digital collections through file similarity"
authors: "Karp, St John"
year: 2024
journal: "Preservation, Digital Technology & Culture"
citation_key: Karp2024InterconnectednessAllThings
doi: "10.1515/pdtc-2024-0042"
url: "https://www.degruyter.com/document/doi/10.1515/pdtc-2024-0042/html"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Oct 23, 2025, 12:21 PM"
category: 4.1-Linked-data-and-graph-ontologies
---
# Scope of this note
This reading note examines Karp’s (2024) article *“The Interconnectedness of All Things: Understanding Digital Collections Through File Similarity”* in *Preservation, Digital Technology & Culture*. The article bridges archival theory, semantic web standards, and computational methods to propose a proof-of-concept for networked archival description (“Eltrovo”). The note situates this within the DDR project’s concern with classification, epistemic drift, and digital taxonomies — reinterpreting the fonds as a relational rather than hierarchical concept.

## Purpose and aim
### What research question or objective is being addressed?
Karp asks how digital archival tools might transcend the inherited hierarchies of archival description (fonds–series–file–item) to represent the *actual network of relationships* among born-digital and digitised records. The research seeks to test whether computational similarity measures — fuzzy and perceptual hashing — can reveal conceptual and structural connections between files, enabling automatic, non-hierarchical arrangement and description. The underlying question is epistemological: how can digital infrastructures model the “interconnectedness of all things” while respecting archival principles of provenance and authenticity?

## Methodology
### Describe the research design, methods and sample size.
Karp combines theoretical synthesis with a computational experiment. The article unfolds in three phases:  
1. **Literature and theory review** — tracing archival hierarchy (ISAD(G)) to fonds theory and its critique via Ted Nelson’s hypertext “intertwingularity” and the ICA’s *Records in Contexts* (RiC-CM and RiC-O) frameworks.  
2. **Software proof-of-concept (Eltrovo)** — a C#/.NET application implementing fuzzy (ssdeep) and perceptual (pHash) algorithms to detect similarity across files in a digital collection.  
3. **Empirical testing** — a 1 GB corpus (229 files) of an author’s archive is analysed to determine thresholds and computational feasibility, generating RDF graph representations of record interrelations.  
The methodology is explicitly *meta-archival*: software is both object and instrument of critique, exposing how computational description reframes archival epistemology.

## Key findings and arguments
### Summarise the main results and conclusions
1. **Hierarchy as an epistemic artefact:** Traditional fonds-based hierarchies mirror bureaucratic lineage rather than informational logic. Karp traces this to U.S. National Archives practice and argues that digital records defy such structures due to multiplicity, redundancy, and cross-containment.  
2. **Intertwingularity as archival principle:** Drawing from Ted Nelson’s “perplex,” Karp proposes that digital records should be modelled as networks of relations — overlapping, contradictory, and recursive — not as trees.  
3. **Semantic web convergence:** The ICA’s RiC-O ontology and RDF-graph models are interpreted as a Nelsonian evolution of archival theory. Graph-based ontologies support plural provenance and linked open data integration.  
4. **Eltrovo’s proof-of-concept:** Eltrovo demonstrates that fuzzy and perceptual hashing can automatically discover relationships such as draft versions, embedded assets, or derivative images, generating RDF triples that instantiate RiC-O relationships (e.g., *hasGeneticLinkToRecordResource*).  
5. **Scalability and interpretability issues:** The resulting RDF graphs were too complex for human navigation — a paradox of success. The automation that reveals interconnection overwhelms human interpretability, reviving the archival problem of mediation and control.  
6. **Ethical and practical framing:** Karp warns that such automation must remain archivist-centred — “intelligence amplification,” not replacement — foregrounding human ethical judgement within computational systems.

## Relevance
### How does it link to the research questions or framework?
For the DDR-focused project, Karp’s work directly intersects with the question of **taxonomy as epistemic infrastructure**. Where Archer’s design science pursued systematisation through methodological discipline, Karp envisions a computational system that *learns* the taxonomy from relationships within data — a reflexive, “designerly” approach in digital form. His move from hierarchy to network parallels the DDR’s epistemic drift from fixed method to plural knowing. The RiC-O model’s plural relationships (400+) echo the DDR’s pluralist research ecology spanning ergonomics, education, and systems design. Karp’s critique of the fonds resonates with the DDR archive’s problem of fragmented provenance and overlapping authorship — conditions ideally served by graph-based, self-describing systems.

## Project integration
### Why it helps the project (evidence-linked)
- Demonstrates how **computational classification** can reveal implicit structures in archival data, paralleling this project’s use of AI/ML for semantic enrichment ([@Karp2024InterconnectednessAllThings], pp. 195–197).  
- Validates the project’s claim that archives can be *activated* as living infrastructures rather than static hierarchies (p. 198).  
- The critique of ISAD(G) and fonds theory (pp. 190–193) provides conceptual grounding for reinterpreting DDR’s catalogue as a dynamic taxonomy.  
- The integration of RiC-O with automated similarity detection establishes a technical precedent for linking humanist archives with computational reasoning systems.  

### Hooks into the project
- **Workstreams →** Digital taxonomy; AI-driven archival enrichment; theoretical frame for reflexive classification.  
- **Deliverables →** Comparative section on “From Fonds to Graph: Re-architecting Design Archives.”  
- **Stakeholders →** Archivists, digital humanists, computational designers, and institutional repositories (RCA/V&A East).

### Use across the methods spine
- [x] Framing and theory  
- [x] Study design  
- [ ] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

## Critical evaluation
### Strengths
- Bridges archival theory and computational method with unusual clarity; Karp’s synthesis of Lem, Nelson, Berners-Lee and ICA RiC standards demonstrates intellectual range.  
- The **proof-of-concept Eltrovo** operationalises philosophical claims, providing empirical validation that similarity-based relationships can substitute for manual description.  
- Offers a pragmatic path from conceptual pluralism (Nelson’s “intertwingularity”) to applied infrastructure (RDF graphs, hashing algorithms).  
- Ethical awareness: rejects AI determinism by framing automation as *intelligence amplification* (p. 198).  

### Weaknesses and limitations
- The dataset is limited and curated; results may not generalise to large, messy institutional archives.  
- The article underplays the interpretive role of archivists in constructing meaning from algorithmic similarity — relationality is measured but not contextualised.  
- Lacks discussion of archival power and social bias: how networked ontologies might reproduce Western epistemologies under new computational guises.  
- Visualization challenges reveal unresolved tension between machine complexity and human cognitive limits — a problem unacknowledged as epistemological rather than ergonomic.  

### Author’s credibility
- St John Karp is an archivist and technologist affiliated with the Horological Society of New York; his research trajectory combines hands-on archival practice with software development. The article’s peer-reviewed publication in *PDT&C* establishes scholarly credibility within digital preservation discourse.

### Contextual validity
- Though focused on Western archival standards (ICA, RiC, FAIR/CARE), the argument generalises to any digital collection where provenance and hierarchy are unstable.  
- Applicable to computational historiography, AI-based retrieval, and digital humanities infrastructures aiming to visualise epistemic networks rather than linear histories.

### Comparisons
- **Archer (1978 / 2005):** Both pursue systematisation; Archer’s taxonomy is moral-rational, Karp’s computational-relational. Where Archer disciplined design thinking, Karp decentralises it.  
- **Jones (1992):** Karp’s network mirrors Jones’s “self-organising system.” Both reject linear rationalism, seeking meta-methods to map complexity.  
- **Pask (1975):** Karp’s Eltrovo enacts Pask’s “conversation theory” — a feedback loop between archivist and system that generates shared understanding.  
- **Rittel (1972):** The fuzzy matching of messy digital data echoes Rittel’s wicked problems: unstructured, cross-linked, requiring deliberative interpretation.  
- **Cross (1982):** While Cross re-humanised design knowledge, Karp re-computes it — showing that “designerly knowing” can be distributed across human–machine systems.  

## Interpretation
### Analysis and insights
Karp’s intervention can be read as a twenty-first-century update to the DDR’s epistemic experiment: replacing Archer’s human taxonomist with a digital interlocutor capable of recognising *similarity* rather than imposing *category*. His proof-of-concept redefines provenance as relational topology — a graph of interactions rather than a bureaucratic lineage. This represents a radical shift from the logic of control (hierarchy) to the logic of emergence (network). For the DDR project, it legitimises computational reclassification as both method and metaphor: a taxonomy that evolves through use, mirroring the self-organising epistemology that the department intuited but could not computationally instantiate.  
Karp also reframes the ethical dimension: automation is not neutral but must embody care and provenance awareness (FAIR/CARE). This aligns with the project’s commitment to inclusive metadata and participatory reclassification. Ultimately, *The Interconnectedness of All Things* demonstrates that the archive — like the DDR itself — is not a static repository but a dynamic knowledge ecology where classification becomes a reflexive act of design.

## Evidence to quote or paraphrase
- *“An analytical tool for digital collections would employ a model that can represent the network of relationships between files instead of the hierarchical model used in traditional archival arrangement.”* (p. 189)  
- *“The imposition of a rigid hierarchy … may help make information accessible but it also runs the risk of obscuring information that falls outside of the hierarchical model.”* (p. 191)  
- *“Computers are able to manage non-hierarchical structures better than humans.”* (p. 199)  
- **Paraphrase:** Karp’s Eltrovo experiment shows that fuzzy and perceptual hashing can automate the discovery of relationships — drafts, inclusions, versions — thereby materialising the archival “perplex” envisaged by Ted Nelson (pp. 195–197).  

## Related works
- International Council on Archives (2023) *Records in Contexts: Conceptual Model & Ontology (RiC-CM/RiC-O)*.  
- Nelson, T. H. (1997) *The Future of Information.*  
- Borgman, C. (2015) “Data, Metadata, and Ted.” in *Intertwingled: The Work and Influence of Ted Nelson.*  
- Mahey et al. (2019) *Open a GLAM Lab.*  
- Wu (2013) “Hierarchy Theory: An Overview.” In *Linking Ecology and Ethics for a Changing World.*  
- Lem (2013) *Summa Technologiae* — for its early articulation of “intelligence amplification.”  

## Questions for further research
- How can similarity-based graph modelling coexist with provenance-based ethics without collapsing into computational determinism?  
- Could the DDR archive itself serve as a test corpus for an Eltrovo-like system, generating a relational ontology of epistemic drift?  
- How might FAIR/CARE principles operationalise within designerly archival AI — ensuring openness while maintaining critical reflexivity?  
- What would a *designerly RiC-O* look like: a schema capable of encoding ambiguity, exclusion, and creative process rather than bureaucratic order?