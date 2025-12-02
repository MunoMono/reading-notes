---
title: "Archives, linked data and the digital humanities: increasing access to digitised and born-digital archives via the semantic web"
authors: "Hawkins, Ashleigh"
year: 2022
journal: "Archival Science"
citation_key: Hawkins2022ArchivesLinkedData
doi: "10.1007/s10502-021-09381-0"
url: "https://link.springer.com/10.1007/s10502-021-09381-0"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 02, 2025, 01:10 PM"
category: 4.1-Linked-data-and-graph-ontologies---
# Scope of this note
Focus on the overall argument, especially (1) the conceptualisation of Archival Linked Data as infrastructural support for Digital Humanities, (2) analysis of benefits/barriers, and (3) future directions around FAIR, AI and low-barrier tools (e.g. Wikidata), as a framing text for the DDR linked-data/RAG work.

## Purpose and aim
### What research question or objective is being addressed?

The article asks how Linked Data, as part of the Semantic Web stack, can be used to make digitised and born-digital archives more accessible, interoperable and analysable for Digital Humanities research. It aims to:

- articulate why Archival Linked Data (ALD) matters for digital humanists, not just how to implement it;
- synthesise evidence of benefits from existing archival and DH Linked Data case studies;
- identify technical, organisational, legal and infrastructural barriers that currently prevent digital humanists from fully exploiting digitised/born-digital archives; and
- sketch future directions for ALD, including datafication of record contents, FAIR-aligned practice, collaboration between archivists and digital humanists, and the role of AI and low-barrier tools such as Wikidata, pp. 319–322].

## Methodology
### Describe the research design, methods and sample size.

- **Type of study:** Conceptual/theoretical review rather than an empirical project. Hawkins explicitly describes it as “a theoretical account” which needs further validation through real-life application, p. 322].
- **Approach:**  
  - Narrative synthesis of archival Linked Data literature (case studies, technical work, practice-based reports) and Digital Humanities Linked Data projects.  
  - Extrapolation of *benefits* for DH (interoperable, harmonised datasets; cross-collection analysis) from archival case studies such as Linking Lives, Linked Jazz, and Gracy/Niu’s work, pp. 321–326].  
  - Parallel review of DH-side Semantic Web/Linked Data projects to understand how LD is used in particular domains (linguistics, literary studies, music, digital history, etc.), pp. 325–326].
  - Analytical framing around FAIR data principles and “datafication” of archives, drawing on critical data literature (e.g. Southerton, Noble, Sutherland, Schüll), pp. 320–321].
- **Data/sample:** Previously published case studies and articles; no new datasets, experiments or user studies are collected.
- **Output:** A structured argument organised around: (1) Linked Data basics, (2) archival LD landscape, (3) DH LD landscape, (4) benefits of ALD for DH, (5) barriers, and (6) future directions (born-digital archives, AI, Wikidata, collaboration).

## Key findings and arguments
### Summarise the main results and conclusions

1. **Datafication + FAIR as precondition for DH use of archives**  
   - Mass digitisation and the growth of born-digital archives have produced a “valuable but under-utilised” corpus of large-scale archival data for DH, p. 319].  
   - Digitisation alone usually yields unstructured surrogates (images, AV files) which are hard to use computationally. Datafication—transforming contents and metadata into machine-readable, quantifiable data—is necessary for large-scale DH analysis, p. 320–321].  
   - Linked Data is argued to be a viable means of archival datafication that can implement the FAIR principles (Findable, Accessible, Interoperable, Re-usable), producing machine-readable, extensible ALD suitable for DH methods, p. 321].

2. **Archival Linked Data and DH Linked Data are developing in parallel, but benefits for DH remain under-analysed**  
   - Archival Linked Data work has mainly focused on publishing archival *metadata* as Linked Data and on solving technical challenges (formats, crosswalks, tooling), pp. 321–322].  
   - Case studies show concrete benefits (improved discovery, cross-collection querying, network analysis, new forms of visualisation) for both institutions and users; e.g. Linked Jazz, Gracy’s music and moving-image projects, p. 325].  
   - DH case studies increasingly use Linked Data to enrich and interconnect cultural heritage data across domains (linguistics, literary studies, music, digital history), but tools are still fragmented and topic-specific, pp. 325–326].  
   - Despite this growth, Linked Data remains “under-examined” in both archival and DH scholarship, with work skewed towards the technical “how” at the expense of a critical “why” (benefits, user perspectives, ethics), p. 325].

3. **Future directions: content-level datafication, AI/Wikidata, and deep collaboration**  
   - The greatest value lies not only in linked *metadata* but in datafying the contents of digitised and born-digital records themselves (e.g. emails, customer files), while acknowledging critiques of datafication (loss of qualitative detail, harms to vulnerable communities, privacy concerns), pp. 320–321, 334, 338].  
   - Legal and economic constraints (IPR, data protection, sensitivity, commercial “enclosure” of data by partners like Ancestry/Findmypast) significantly limit open LD publication and must be negotiated project-by-project, pp. 333–334].  
   - Scaling ALD will require standardised infrastructure and tools, including low-barrier, general-purpose platforms such as Wikidata and AI/machine-learning techniques to automate aspects of LD creation, p. 338].  
   - There is a “natural synergy” between digital humanists and archival professionals: DH needs large, interoperable datasets; archivists need allies and demonstrators to justify and shape LD work. Deep, cross-sector collaboration is framed as essential, especially for born-digital collections, pp. 337–338].

## Relevance
### How does it link to the research questions or framework?

- Sits squarely in **4.1 Linked-data and graph ontologies**: it provides a conceptual bridge between archival practice and DH use-cases, explicitly framed around Semantic Web/Linked Data.  
- Directly relevant to treating the RCA DDR archive as **FAIR, machine-actionable data** rather than static records, and to justifying a graph-based / RAG architecture.  
- Offers language for arguing that *classification and data modelling* decisions are not neutral but shape who can do what kinds of research—key to your “epistemic drift as data model” framing.  
- Gives strong support for focusing on **interfaces and tools** that make ALD accessible to “generic users” (here: design historians, archivists, DH researchers) rather than only to LD specialists.

## Project integration
### Why it helps the project (evidence-linked)

- **Framework for “archives as data”** – Hawkins foregrounds datafication and FAIR as a response to DH needs, pp. 320–321]. This underpins your move from DDR paper files to a relational/RDF-ish schema that can be queried, recombined and analysed computationally.  
- **Justification for Linked-data-first modelling** – The claim that LD provides “a viable means of archival datafication” aligned with FAIR principles, p. 321] is a direct conceptual precedent for the DDR graph/taxonomy and RAG engine.  
- **User-side argument for tools** – The observation that many LD access methods are beyond “generic users” of archives, p. 325] supports your emphasis on explainable, conversational interfaces rather than SPARQL-only access.  
- **Ethical guardrails** – Critical discussion of datafication’s potential harms and of commercial enclosure (e.g. genealogical data) gives you material for an ethics section on how the DDR MVP will handle sensitivity, exclusion and licensing, pp. 320–321, 333–334].  
- **AI and Wikidata as design space** – Hawkins explicitly points to AI and low-barrier tools such as Wikidata as ways to scale ALD production, p. 338]; this resonates with your use of LLMs for enrichment and potential alignment with external graphs.

### Hooks into the project

- **Workstreams →**  
  - WS: Linked-data modelling & schema design (DDR relational/graph model; FAIR alignment).  
  - WS: Computational enrichment (entity extraction, alignment, Wikidata reconciliation, potential AI-assisted tagging).  
  - WS: User-facing discovery (RAG interface that abstracts away technical LD complexity).

- **Deliverables →**  
  - A DDR **linked-data backbone** (schema + mappings) explicitly framed as Archival Linked Data for design research.  
  - An **explainable search/browse prototype** that demonstrates how ALD supports DH-style analysis of DDR (networks, timelines, cross-project queries).  
  - **Guidelines/white paper** on applying Linked Data to small, institution-specific archives (what Hawkins describes mostly for large GLAMs).

- **Stakeholders →**  
  - Archivists and records managers (RCA, partner institutions) seeking to make collections FAIR/LD-ready.  
  - Design historians and DH researchers who need integrated DDR datasets but lack LD expertise.  
  - Infrastructure/funding bodies (AHRC, Jisc, research libraries) interested in re-usable models for small/medium archives.

### Use across the methods spine

- [x] Framing and theory  
- [ ] Study design  
- [ ] Data collection and instruments  
- [x] Analysis and models (conceptual model of ALD + FAIR + DH requirements)  
- [x] Synthesis and interpretation  
- [x] Reporting and communications (language for stakeholder-facing justification of LD work)

## Critical evaluation
### Strengths
- **Clear conceptual bridge** between archival practice and DH, framed around concrete infrastructure needs (FAIR, datafication, LD).  
- **Balanced view of technology**: recognises Linked Data as promising but under-examined; emphasises benefits *and* limitations rather than pure advocacy.  
- **Strong synthesis** of disparate case studies across archives and DH domains, giving a broad yet comprehensible overview of the LD landscape, pp. 321–326].  
- **Attention to ethics and power**: treats datafication as contested, citing work on discrimination, privacy and structural harms, and notes commercial enclosure of heritage data, pp. 320–321, 333–334].  
- **Forward-looking**: concrete suggestions around AI, Wikidata, and collaboration give actionable directions rather than stopping at critique, pp. 337–338].

### Weaknesses and limitations
- **Purely theoretical**: no original empirical data, user studies, or implementation; all evidence is second-hand. Hawkins acknowledges that further research is needed to validate claims in real-world institutional contexts, p. 322].  
- **Case-study dependence**: the argument leans heavily on a relatively small set of often-cited LD projects; there is little granular comparison of failures or non-adoption.  
- **Global scope claimed but not fully developed**: while she notes the need to move beyond research institutions in the global North, p. 338], the examples remain largely Euro-American plus the Shanghai Library; broader post-colonial/decolonial perspectives are only implicit.  
- **Limited socio-organisational detail**: institutional politics, staffing, and maintenance burdens are acknowledged but not deeply unpacked—useful for your project, but you’ll need other sources (e.g. Bowker & Star, Gilliland/McKemmish) to deepen this.

### Author’s credibility
- Doctoral candidate at Liverpool University Centre for Archive Studies, funded by the UK AHRC and Barclays Group Archives, with explicit research interests in archives and technology (Linked Data, AI), DH and recordkeeping history, p. 344].  
- Co-funding and collaboration with a major corporate archive (Barclays) and a UK National Archives “Archives Testbed Fund” project on applying Linked Data to historic customer records suggest strong practical grounding as well as scholarly positioning, p. 344].

### Contextual validity
- Findings are most directly applicable to **GLAM institutions with significant digitisation programmes** and interest in DH collaboration.  
- Conceptual claims about FAIR, LD and DH needs generalise well to smaller archives (e.g. DDR), though the economics and staffing assumptions may be optimistic for very small teams.  
- The emphasis on legal/privacy/IP constraints around born-digital archives is broadly valid across jurisdictions but specific regulatory regimes will vary.

### Comparisons
- Aligns with Gracy & Niu’s work in identifying technical/structural challenges and user-side barriers for LD access, but pushes further on DH benefits and collaboration.  
- Resonates with Hyvönen’s argument for national LD infrastructures for DH, adding an archival-sector perspective.  
- Provides a conceptual counterpart to Gooding, Bowker & Star, Gilliland/McKemmish on infrastructures and classification; your project effectively stages their concerns in a specific design-research archive.

## Interpretation
### Analysis and insights

- **ALD as pre-condition, not add-on**: The article reframes LD not as a niche experiment but as a necessary condition for DH-style work with archives. For DDR this means your taxonomy and RAG system aren’t bells-and-whistles; they’re foundational to any serious computational history of design research.  
- **Bridges technical and social:** Hawkins’ “how vs why” critique mirrors your concern that infrastructure design *is* epistemic design. It supports treating your schema and classification as primary research objects (sites of epistemic drift), not just plumbing.  
- **Ethical edges of datafication:** The critical take on datafication, discrimination and enclosure suggests that the DDR project should explicitly log exclusions, sensitivity flags and licensing constraints, and avoid treating more data as automatically better.  
- **Design implication:** Her stress on “generic users” and non-specialist access argues strongly for your conversational, explainable interface: SPARQL is for the few; a guided RAG interface is closer to the inclusive future she sketches.  
- **Collaboration lens:** The DH–archivist “natural synergy” offers a template for positioning your work: the DDR MVP can be framed as a collaborative platform where design historians, archivists and technologists co-shape the archive.

### How does it shape your thinking?

- Encourages you to treat **Linked Data + FAIR** as explicit design principles for the DDR model (e.g. persistent identifiers, interoperable metadata, external linking), not just nice-to-have features.  
- Prompts you to make **born-digital** material (e.g. emails, digital drafts) a deliberate part of your scope/roadmap discussions, with clear statements about what is and isn’t feasible or ethical.  
- Strengthens the case for a **Wikidata alignment layer** or similar, so DDR entities don’t live in isolation but can be linked into wider cultural heritage graphs.  
- Reinforces your interest in **explainable AI**: if archivists must stay in the loop to preserve archival characteristics and contexts, then the system must surface provenance, confidence and reasoning steps.

## Evidence to quote or paraphrase

- “Linked Data provides a viable means of archival datafication capable of implementing the FAIR Guiding Principles” (page 321), p. 321].  
- **Paraphrase:** Mass digitisation and born-digital growth have produced a vast but under-used trove of archival data; without structured, interoperable, interrogable data, digital humanists cannot fully exploit these collections (page 319–320), pp. 319–320].  
- **Paraphrase:** Despite increased interest, most Linked Data work focuses on technical implementation. There is still little critical attention to how ALD benefits digital humanists or how it could increase utilisation of digitised/born-digital archives (page 325), p. 325].  
- **Paraphrase:** Hawkins argues that collaboration between archivists and digital humanists is essential to scale up ALD, advocate for investment, and develop born-digital collections, tools and infrastructures that meaningfully support research (pages 337–338), pp. 337–338].

## Related works
- Gracy, K. F. – Archival description and Linked Data; LD for music and moving-image metadata.  
- Niu, J. – Early trends in Archival Linked Data practice and user-side access issues.  
- Hyvönen, E. – Linked Open Data infrastructures for DH (e.g. WarSampo, Finnish LD stack).  
- Pattuelli et al. – Linked Jazz and LD-driven network analysis of oral histories.  
- Hoekstra et al. – Linked humanities data ecosystems.  
- Winters & Prescott; Jaillant; Moss et al. – Critiques of search, born-digital archives, and datafication.  
- Zeng, Koho et al. – Semantic enrichment and LD for LAM data.

## Questions for further research
- How do Hawkins’ recommendations play out in **small, institution-specific archives** like DDR, with limited resources and complex IP/privacy constraints?  
- What kinds of **user studies** (with archivists, DH researchers, design historians) are needed to validate whether ALD/RAG interfaces actually lower barriers for “generic users”?  
- How can we design **classification and enrichment workflows** that incorporate critical perspectives on datafication (bias, harm, enclosure) rather than treating them as afterthoughts?  
- What would a concrete **Wikidata/knowledge-graph alignment strategy** look like for DDR entities (people, projects, institutions), and how much automation is acceptable?  
- How can ALD approaches better include **non-Western and marginalised archives**, avoiding a purely global-north infrastructure story?