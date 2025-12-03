---
title: "Bots seeds and people: web archives as infrastructure"
authors: "Summers, Ed and Punzalan, Ricardo"
year: 2017
journal: "Proceedings of the 2017 {{ACM Conference}"
citation_key: Summers2017BotsSeedsPeople
doi: "10.1145/2998181.2998345"
url: "http://arxiv.org/abs/1611.02493"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 03, 2025, 04:52 PM"
category: 3.1-Infrastructures-and-standards-ISAD(G),-archival-description---
# Scope of this note
Focus on the overall argument plus sections on methodology, “Findings” and “Discussion”, with attention to how appraisal, automation and infrastructural breakdowns generate gaps and silences in web archives and how this translates into DDR’s computational archive.

## Purpose and aim
### What research question or objective is being addressed?

The article asks how archivists interact with web-archiving systems and collaborate with automated agents (bots/crawlers) when deciding what web content to collect, and how these sociotechnical practices shape appraisal, gaps and infrastructure in web archives (p.1–2].

## Methodology
### Describe the research design, methods and sample size.

- Qualitative, CSCW-informed study framed by archival appraisal theory and infrastructure studies.
- Semi-structured interviews with 27 participants (from 39 recruited), including archivists, managers, developers, researchers and activists involved in web archiving (p.4–5).
- Purposeful sampling aimed at both “typical” archivists and “deviant” cases who do similar work without the archivist label (e.g. volunteers, commercial providers) (p.4–5).
- Remote interviews via Skype (~1 hour each), recorded, memoed and followed by reflective field notes; inductive thematic analysis used to derive key themes (crawl modalities, information structures, time/money constraints, people, tools, breakdown) (p.4–5).
- Analysis explicitly draws on ethnographic notions of “thick description” and infrastructure studies, even though the authors are not conducting full participant observation (p.4).

## Key findings and arguments
### Summarise the main results and conclusions

1. **Appraisal in web archives is a sociotechnical collaboration between humans and bots.**  
   - Archivists work with automated crawlers through seed lists and scoping rules to perform different “crawl modalities” (domain, site, topic, event, document), rather than simply applying abstract appraisal policy (p.5–6).  
   - The work involves navigating organisational hierarchies, social and technical networks, information streams (Twitter, RSS, news, radio) and lists (host reports, URL lists), which together shape what enters the archive (p.6–7).

2. **Selection is constrained by infrastructure, time and money, leading to inevitable silences and partiality.**  
   - Storage-based subscription limits, staff time, technical capacity and policy constraints (e.g. robots.txt) all determine what can be collected, not only curatorial judgement (p.7–8).  
   - Breakdowns—servers crashing under crawls, robots.txt blocks, or petabyte-scale collections that cannot be fully acquired—force explicit choices about “culturally significant” material and make the politics of appraisal visible (p.9–10).

3. **Web archives are infrastructures whose internal selection processes are poorly recorded and only partially legible.**  
   - Spreadsheets, email, web forms and chat systems are widely used to nominate, negotiate and approve seed URLs, but these paratexts rarely enter the archival record (p.8, p.10).  
   - Seed lists function as a key interface “between the web, the archivist, archival systems, and the researcher” yet hide complex human–bot negotiations (p.2).  
   - The authors argue that appraisal processes should be made more legible and that CSCW-style design work can help build tools that better expose how and why web content was selected (p.10–11).

## Relevance
### How does it link to the research questions or framework?

- Directly supports Strand 2’s interest in **archives as infrastructures** and **classification as politics**: web archives are shown as socio-technical systems where appraisal is enacted through bots, seed lists and scoping rules rather than neutral collection (p.5–7).
- Provides a clear empirical account of how **gaps and silences** emerge from resource constraints, automation and technical limits, echoing Moss & Thomas, Harris and Carter on archival silence and the “archival sliver” (p.1, p.7–9).
- Offers a methodological and conceptual template for treating DDR’s own filing systems, job-number lists and data model as **infrastructure** and **centre of calculation**, with human and computational agents (RAG) co-producing the archive.
- Underlines the need to document and model **pre-crawl and post-crawl appraisal** decisions, analogous to DDR’s pre- and post-project documentation, feeding into the design of a provenance-rich DDR schema and RAG interface.

## Project integration
### Why it helps the project (evidence-linked)

- Shows that silences in digital archives are not only due to lost content but to **undocumented selection practices** (spreadsheets, email, forms), which justifies building explicit provenance and decision-logging into the DDR database and RAG system (p.8, p.10).
- The description of **seed lists as interfaces** between archivists, bots and researchers offers a strong analogy for DDR’s “core/residual/extended” schema and query API: seed lists become a design pattern for how DDR entities enter the computable archive (p.2; @Summers2017BotsSeedsPeople, p.6–7).
- Their emphasis on **breakdown as a site of learning** (overloaded servers, robots.txt blocks, storage ceilings) supports your framing of infrastructural inversion and diagnostic use of errors in DDR’s RAG/XAI MVP (p.9–10).
- The argument that appraisal processes are not adequately represented in the archive directly strengthens the case for designing DDR as a **reflexive, explainable system** that surfaces classification choices rather than burying them (p.10–11).

### Hooks into the project
- **Workstreams →**  
  - Strand 2: “Archives, infrastructures, classification and missingness” (primary).  
  - Methods chapter: design of DDR data model, RAG pipeline and provenance logging.  
  - Possibly Strand 3: practice-led, cybernetic stance on designing/using archival tools.
- **Deliverables →**  
  - DDR schema and PostgreSQL data model (seed-list analogue).  
  - RAG MVP with explainable retrieval and crawl/appraisal provenance.  
  - Conceptual diagrams of DDR paperwork and web archives as infrastructures.
- **Stakeholders →**  
  - RCA Special Collections and archivists.  
  - Digital humanities / web-archiving community (IIPC, NDSA, Archive-It users).  
  - DDR researchers and students who will use the DDR MVP as an interface.

### Use across the methods spine
- [x] Framing and theory  
- [ ] Study design  
- [x] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

## Critical evaluation
### Strengths
- Rich, empirically grounded description of **actual appraisal practice** with both archivists and “deviant” actors (volunteers, vendors) (p.4–5).
- Carefully situates web archiving within **archival appraisal theory and CSCW/infrastructure studies**, positioning web archives as sociotechnical infrastructures, not just digital libraries (p.2–4).
- Produces a nuanced typology of crawl modalities and information structures (hierarchies, networks, streams, lists) that is analytically useful beyond web archiving (p.5–7).
- Highlights **hidden work** and invisible paratexts (spreadsheets, chats, emails) very clearly, which aligns with your interest in DDR’s back-office paperwork (p.8, p.10).

### Weaknesses and limitations
- Interview-based and US-centric: largely focused on North American institutions and vendors; national libraries and non-Western perspectives are lightly treated.
- No systematic analysis of **content outcomes**: we learn how people select, but not detailed quantitative consequences (who/what is most missing).
- Theoretical discussion of algorithms and infrastructure is gestural rather than deeply elaborated; readers must bring their own CSCW background.
- Limited engagement with explicitly critical or feminist data perspectives (e.g. D’Ignazio & Klein) and with silence literature (Harris, Moss & Thomas), which your chapter will explicitly triangulate.

### Author’s credibility
- Ed Summers and Ricardo Punzalan are well-established in web archiving and archival studies; Summers from technical/digital-library practice, Punzalan from archival theory and community archives. Their institutional base (University of Maryland) and engagement with CSCW conferences lends credibility and cross-disciplinary reach.

### Contextual validity
- Findings appear highly transferable to other web-archiving contexts using seed-list based crawlers (Archive-It, national domain crawls, activist projects).  
- Some details (specific vendors, subscription models) may date rapidly, but the broader insight—that appraisal is entangled with infrastructure, automation and resource constraints—remains robust.

### Comparisons
- Resonant with **Harris** on the “archival sliver” and impossibility of total capture, but grounded in digital/web-specific infrastructure [@Harris2002ArchivalSliverPower, p.63–64).  
- Complements **Moss & Thomas** and **Carter** by showing how silence is produced not only by policy and power but by technical limits and bots.  
- Connects to **Ogden** and other work on the Wayback Machine as infrastructure by emphasising breakdown and repair as methodological opportunities.

## Interpretation
### Analysis and insights

- This article can be read as a **design brief for computational archives**. Seed lists, crawl reports and QA logs are early versions of your DDR schema, dashboards and RAG evidence view. The argument that appraisal traces are currently off-record legitimises building them into the core DDR data model.
- For DDR, the analogy is to treat **job-number lists, forms and project registers as “seed lists”**: starting points that structure what the archive can see. Your schema and vector model will surface where those seeds cluster and where there are unseeded blind spots.
- The emphasis on **breakdown and repair** fits your cybernetic stance: errors in the DDR RAG system (missing links, odd rankings) should be treated as data about epistemic drift and infrastructural limits, not just bugs.
- Summers & Punzalan implicitly argue for **legible algorithmic infrastructures**. Your trustworthy-AI framing can extend this by making crawl logic, ranking and selection visible, auditable and open to contestation.

### Implications for practice, policy or theory

- For practice: archivists and system designers should **co-design tools** that capture appraisal reasoning (who nominated what, why, under which constraints) and keep this as first-class metadata.
- For policy: subscription and storage models need to be recognized as **policy instruments** shaping what becomes history; your DDR work can foreground funding and infrastructure as part of the story, not background.
- For theory: strengthens the argument that **classification and infrastructural design are forms of power-laden world-making**, tying into Bowker & Star, Gilliland & Caswell and Data Feminism.

### How does it shape your thinking?

- Reinforces the need to locate DDR not just as an institutional story but as an **infrastructural case**, where forms, filing and future RAG pipelines are treated symmetrically with people and ideas.
- Suggests that the DDR MVP should explicitly log **“crawl modalities” of research** (e.g. topic-based, person-based, funder-based exploration), making the user’s traversal of the archive part of the evidence.

## Evidence to quote or paraphrase
- “Failing to capture everything should not be surprising to the experienced archivist. Over the years, archival scholars have argued that gaps and silences in the archival record are inevitable.” (p.1)
- “These archiving tools typically require archivists to supply lists of website URLs or seed lists that are deemed important to capture.” (p.2)
- “The seed list functions as an interface between the web, the archivist, archival systems, and the researcher.” (p.2)
- **Paraphrase:** The study investigates how archivists interact with web-archiving systems and collaborate with automated agents when deciding what to collect, with the goal of informing the design of appraisal tools (p.2–3).
- “Our study reveals that web archiving involves a variety of technical and resource constraints that go beyond what is normally considered in archival appraisal theory.” (p.5)
- **Paraphrase:** Time and storage budgets shape selection decisions as much as professional principles; subscription caps, crawl durations and monitoring intervals dictate how complete a web archive can be (p.7–8).
- “The appraisal processes that are being enacted by archivists are not always adequately represented in the archive itself. Recall the spreadsheets, emails and chat systems that are used during appraisal, that all but disappear from the documentary record.” (p.10)
- **Paraphrase:** Hacks and workarounds—spreadsheets, shared Google Sheets, custom nomination tools—are “design hints” for future archival platforms, signalling affordances that should be built into the infrastructure (p.10–11).
- “The archive is always materially situated in society.” (p.11)
- “Our ability to collect and preserve records is a function not only of technology but our laws, values and ethics as well as the resources at hand to make them real.” (p.11)

## Related works
- Harris, “The Archival Sliver” (2002) – on partiality and power in archives.  
- Moss & Thomas (eds.), *Archival Silences* (2021) – on missing, lost and uncreated archives.  
- Carter, “Of Things Said and Unsaid” (2006) – foundational articulation of archival silence.  
- Ogden, “Know(ing) Infrastructure: The Wayback Machine as Object and Instrument of Digital Research” (2024).  
- Gilliland & McKemmish (2018) – archival and recordkeeping research, infrastructural perspective.  
- Bowker & Star, *Sorting Things Out* (1999) – classification and infrastructure.  
- Gooding (2022) – critically addressable data and digital libraries.  
- Marciano (2022) – computational archival science.  

## Questions for further research
- How might seed lists, scoping rules and QA decisions be **systematically captured as metadata**, and what schemas (e.g. ISAD(G), PREMIS, custom ontologies) are most appropriate?
- What would it mean to design **participatory seed-list interfaces** where communities can nominate and describe web resources, and how would that affect silences and bias?
- How can the DDR MVP incorporate **breakdown logs and repair histories** so that infrastructural failures become analysable evidence, not hidden friction?
- How might comparative studies across institutions and countries reveal different **political economies of web archiving** (e.g. subscription vs national legal-deposit models)?
- In the RAG context, how can selection logic learned from this study (e.g. crawl modalities, resource-aware selection) inform **transparent retrieval strategies** and fairness constraints?