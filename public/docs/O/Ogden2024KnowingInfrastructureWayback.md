---
title: "Know(ing) infrastructure: the wayback machine as object and instrument of digital research"
authors: "Ogden, Jessica and Summers, Edward and Walker, Shawn"
year: 2024
journal: "Convergence: The International Journal of Research into New Media Technologies"
citation_key: Ogden2024KnowingInfrastructureWayback
doi: "10.1177/13548565231164759"
url: "https://journals.sagepub.com/doi/10.1177/13548565231164759"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 03, 2025, 04:52 PM"
category: 3.1-Infrastructures-and-standards-ISAD(G),-archival-description---
# Scope of this note

Entire article (pp. 167–189). Read here as a core digital-STS account of **web archives as knowledge infrastructures**, focusing on the Internet Archive’s Wayback Machine (IAWM) and “Save Page Now” (SPN). It is particularly useful for Strand 2’s infrastructural lens on archives, and for understanding how **sociotechnical arrangements, automation and scale** produce gaps, partiality and “known unknowns” in computational archives. 

## Purpose and aim
### What research question or objective is being addressed?

The article addresses two tightly linked aims:

1. **Substantive / empirical aim**  
   To investigate how the Internet Archive’s *Save Page Now* (SPN) service operates as part of the world’s largest public web archive, and how this public tool mediates what is saved, how it is saved, and with what fidelity in the IAWM. (p.167).

2. **Methodological / epistemic aim**  
   To explore **how one can “know” web-archiving infrastructures at scale** – that is, how digital STS and “critical technical practice” can be operationalised to study dynamic, opaque, large-scale knowledge infrastructures whose outputs (archives) underpin digital research, accountability work and machine learning. (pp.167–169).

The question is therefore both *about* SPN (“what is this infrastructure doing?”) and *about methods* (“how can such infrastructures be studied critically at all?”).

## Methodology
### Describe the research design, methods and sample size.

The study is explicitly framed as a **pilot, mixed-methods, digital STS project** rather than a closed empirical dataset with a conventional “sample size”:

- **Knowledge-infrastructure framing**  
  Web archives, and IAWM in particular, are treated as **knowledge infrastructures** in Edwards’ sense: “robust networks of people, artefacts, and institutions that generate, share and maintain specific knowledge” about the web over time (pp.168–169).  

- **Ethnographic grounding and organisational context**  
  - Builds on Ogden’s earlier **ethnography at the Internet Archive**, including interviews and observations with IA staff, to identify SPN as a key component and to understand internal practices, imaginaries and organisational politics (pp.171–172).  
  - Ethnographic insights and interlocutors are used to obtain a research agreement granting access to SPN WARC data, and to interpret partial views into the infrastructure.

- **Mixed methods and “critical technical practice”**  
  The authors describe a toolkit of methods assembled through “cobbling” and “scavenging” (Seaver; McMillan Cottom), aligned with critical technical practice and technography:  
  - **Ethnographic methods** (fieldwork at IA, staff interviews, organisational documents).  
  - **Experimental “black-box tactics” and reverse engineering**: probing SPN as a black box via carefully instrumented test URLs to see how different modes of access (web form, browser extension, API/bots) generate different WARC traces (pp.171–173, 176–178).  
  - **Data tracing and log correlation**: correlating SPN WARC records with web server logs from a controlled test server to understand how SPN “sees” the web (content negotiation, HTTP headers, number of resources requested, etc.) (pp.176–178).  
  - **Modelling and distant reading**: using XSEDE’s SPARK cluster and the Archives Unleashed Toolkit to characterise user agent strings and estimate the prevalence of bots vs browsers in SPN submissions across six sample days (25 October 2013–2018) (pp.175–176, 179–181).  
  - **Documentary research**: mining IA forums, technical documentation and blogs to reconstruct SPN’s evolution and relation to other IA systems (pp.171–173).

- **Data access and sampling**  
  - Access to SPN’s WARC data in the “Live Web” collection obtained via research agreement (c. 2.4 PB total).  
  - Practical “data frictions” (limited outbound bandwidth from IA; constraints on moving data to XSEDE) meant that full-corpus analysis was impossible; instead, the team sampled **one calendar day (25 October)** for each year 2013–2018, plus neighbouring days for probes (pp.174–176).  
  - The sample for the user-agent analysis totals ~30 million HTTP requests across six days (pp.175–176, 179–181).

The methodology is presented as **iterative “zooming in and out”**: moving between macro views of the corpus and micro-level analysis of specific requests and log entries (pp.171–172, 176–177).

## Key findings and arguments
### Summarise the main results and conclusions

1. **SPN is not a single “black box” but a moving assemblage within a wider knowledge infrastructure.**  
   - At first glance SPN appears as a simple “white box” (one URL input field on the Wayback homepage). But once investigated, it resolves into a **complex assemblage** of tools, pipelines, storage systems, user communities, bots, and evolving software versions (pp.173–175).  
   - The article argues that thinking only in terms of “opening the black box” of algorithms is insufficient; one must instead trace **relational, infrastructural configurations** and “black boxes inside black boxes” (pp.173–174, 181–182).

2. **Web archives are partial, contingent “knowing infrastructures”, not neutral mirrors of the web.**  
   - The authors emphasise that web archives are “partial and dynamic representations” of the web, shaped by sociotechnical processes (people, bots, software, policies) rather than simple copies (pp.168–169).  
   - SPN is framed as a **“knowing infrastructure”**: it does not only store knowledge about the web, but actively shapes what can later be known, especially as IAWM content becomes “algorithmic fuel” for machine learning (pp.169, 183–185).  
   - This argues strongly against naturalised metaphors of archives as organic or sedimentary accumulations and instead stresses **active intervention, selection, and infrastructural conditioning** (pp.169–170, 171–172).

3. **Methodologically, studying such infrastructures requires “critical technical practice” and mixed tactics.**  
   - No single method (quantitative, qualitative, “big data”) can adequately capture the dynamic, multi-layered nature of SPN; the article demonstrates the need for **“experimental black-box tactics,” probing, data tracing and ethnography** in combination (pp.169–172, 176–178).  
   - The iterative “zoom in/zoom out” practice (Nicolini) is presented as crucial for connecting local technical behaviours (HTTP headers, user agents) to macro-scale questions of knowledge and power (pp.171–172, 176–181).

4. **Bot vs browser use of SPN materially affects archival fidelity and thus future knowledge.**  
   - Probe experiments reveal that **browser-based SPN requests** typically trigger many HTTP requests (e.g. 116 requests for HTML, CSS, JS, images), whereas **bot-based requests** often produce a single request, capturing only the HTML and omitting embedded assets (pp.177–178).  
   - The authors conclude that bot-submitted captures may be **“low-fidelity” web archives** compared to browser-submitted ones, potentially misrepresenting page layout, media and temporal coherence (pp.177–178).  
   - User-agent analysis of the sample days suggests a substantial presence of obvious bots, especially in 2017, raising concerns about the **representativeness and quality** of SPN-driven archives (pp.179–181).  

5. **Scale, locality and “data frictions” complicate infrastructural research and highlight materiality.**  
   - Although SPN data are technically accessible, bandwidth limits at IA and the sheer size of the corpus (c. 2.4 PB) make full analysis impossible for most researchers; computation must be brought to the data rather than vice versa (pp.174–176, 182–183).  
   - These frictions underscore that “the cloud” is materially situated; **geography, storage, bandwidth and compute resources** all shape who can study such infrastructures and how (pp.174–176, 182–183).

6. **SPN is in a constant “process of becoming”; versions and design changes alter what is archived.**  
   - The paper shows that SPN’s user-agent behaviour and underlying capture logic changed several times between 2013 and 2018, and that a major redesign (“SPN2”, with a headless browser) significantly increased capture volume and fidelity (pp.179–181, 183–184).  
   - This reinforces a key conclusion: **infrastructure must be understood temporally**, as a changing object; “when is infrastructure?” is as important as “what is infrastructure?” (pp.183–184).

7. **Implications: infrastructures of web archiving need critical scrutiny, especially as ML training data.**  
   - As archived web content is increasingly used to train machine-learning models and support accountability work, the authors call for much more work on how infrastructures like SPN create, shape and delimit knowledge, and how methodological toolkits must evolve to keep pace (pp.169–170, 183–185).

## Relevance
### How does it link to the research questions or framework?

- **Strand 2: archives, infrastructures and classification.**  
  Treats IAWM explicitly as **infrastructure** and SPN as a visible “intake valve,” providing a vocabulary and empirical case for understanding DDR’s filing systems, back-end scripts and eventual RAG pipeline as similar knowledge infrastructures rather than neutral back-office machinery.

- **Absence, silence and missingness (3.3).**  
  Shows how technical design (bot vs browser capture, bandwidth limits, evolving software) creates **structured absences and low-fidelity records**—a digital counterpart to Harris’s “archival sliver” and Carter’s silences.

- **Computational archives and trustworthy AI.**  
  Connects web archives directly to **machine-learning training** and “algorithmic fuel”, strengthening the argument that DDR’s computational layer (schema, RAG, XAI) must be critically aware of infrastructural shaping, not only of downstream model bias.

## Project integration
### Why it helps the project (evidence-linked)

- **Conceptualising DDR as “knowing infrastructure”.**  
  The definition of web archives as knowledge infrastructure, and SPN/IAWM as “knowing infrastructures” that shape future knowledge of the web, provides a strong frame for positioning DDR as a **knowing infrastructure for design research** (pp.168–169, 183–185).

- **Methodological blueprint for infrastructural inversion.**  
  The article demonstrates how to **probe, reverse engineer and log-correlate** an archival infrastructure, offering a ready-made methodological repertoire for studying DDR’s own data pipelines and RAG processes (pp.171–173, 176–178).

- **Evidence for documenting technical choices and “data frictions” as part of the archive.**  
  Ogden et al.’s emphasis on bandwidth constraints, storage limits and server locality as constitutive of what can be studied supports your plan to **archive DDR’s own infrastructural decisions** (e.g. what is not digitised, which tables are indexed, which documents are vectorised) (pp.174–176, 182–183).

- **Analogy for DDR’s “seeds” and capture modes.**  
  SPN seeds and submitters (bots vs humans, manual vs automated) map neatly onto DDR’s **job numbers, forms, deposits and user queries** as intake structures. Their finding that different clients produce different fidelity suggests DDR should record capture mode, ingestion channel and conversion pathway as first-class metadata (pp.176–181).

### Hooks into the project

- **Workstreams →**  
  - WS2: DDR as institution, archive and infrastructural testbed.  
  - WS3: RAG/XAI design and logging of retrieval/appraisal behaviour.  
  - WS4: Methods chapter on digital STS and infrastructural inversion.

- **Deliverables →**  
  - A methods subsection: **“Probing DDR as infrastructure: from web archives to departmental records”** using Ogden et al.’s zoom in/out, probe, trace, model sequence.  
  - Design notes for DDR’s schema and logs, drawing directly on the SPN example (capture modes, user agents, breakdown logs).

- **Stakeholders →**  
  - Archivists / IA-style technical staff at RCA.  
  - Digital humanities and web-archiving partners.  
  - ML / RAG developers collaborating on DDR.

### Use across the methods spine

- [x] Framing and theory  
- [x] Study design  
- [x] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

## Critical evaluation
### Strengths

- **Methodologically innovative.**  
  The paper exemplifies “critical technical practice” by combining ethnography, STS theory and hands-on reverse engineering, rather than treating infrastructure as either opaque or trivially inspectable (pp.171–173, 176–178).

- **Fine-grained link between micro-technical behaviour and macro-epistemic implications.**  
  The bot vs browser experiments show how tiny differences in HTTP headers and request patterns scale up to substantial differences in archival fidelity and future knowledge (pp.176–178, 179–181).

- **Explicit reflexivity about access and positionality.**  
  The authors foreground their partial access, reliance on IA’s goodwill, and dependence on computational resources, modelling **who can study infrastructures, under what conditions** (pp.171–172, 182–183).

- **Timely link to machine learning.**  
  The closing argument about web archives as “algorithmic fuel” ties the work directly into current debates on training-data provenance and accountability (pp.183–185).

### Weaknesses and limitations

- **Pilot scale and sampling constraints.**  
  The empirical analysis rests on **six days of SPN data** and a non-random date choice; the authors are appropriately cautious, but quantitative claims about bots and fidelity are illustrative rather than definitive (pp.175–176, 179–181).

- **No direct engagement with user communities beyond IA.**  
  While ethnographic work at IA is strong, there is little direct engagement with **SPN users “in the wild”** (e.g. activists, researchers, malicious actors). User motivations are largely inferred via staff accounts and external literature.

- **Limited normative prescription.**  
  The paper diagnoses challenges but offers fewer concrete design prescriptions for how infrastructures should expose their workings or how archives should respond to low-fidelity, bot-driven captures.

### Author’s credibility

- Ogden, Summers and Walker are recognised figures in web archiving, digital methods and infrastructure studies. Summers appears also in *Summers & Punzalan (2017)*, giving continuity across empirical and methodological work. Publication in *Convergence*’s special issue on critical technical practice further situates the paper in a high-relevance scholarly conversation.

### Contextual validity

- Context is primarily the Internet Archive and US-based web archiving ecologies, but the design patterns (black-box tactics, probes, zooming) and infrastructural constraints are generalisable to other large-scale digital collections and archives.
- DDR’s institutional setting is smaller and more bounded, but the **principles of infrastructural opacity, data friction and evolving capture logic** clearly transpose.

### Comparisons

- **Versus Summers & Punzalan (2017):**  
  Summers & Punzalan focus on interview-based appraisal practice and seed lists; Ogden et al. complement this with **technical probing and STS method reflections**, drilling into a specific IA service.

- **Versus Harris/Carter/Moss & Thomas:**  
  Those works emphasise power and silence at the level of appraisal policy and social memory; Ogden et al. add detailed **infrastructural mechanisms** by which such silences and distortions arise in digital settings.

- **Versus Data Feminism / Mehrabi et al.:**  
  *Data Feminism* and ML fairness surveys focus on data bias and context; Ogden et al. operate one layer down, at the level of the **infrastructures that generate the data corpora**.

## Interpretation
### Analysis and insights

- For DDR, Ogden et al. illustrate how **apparently neutral tools** (SPN; later RAG interfaces) encode specific ways of “seeing” the world that concretely determine what gets archived, with what fidelity and at whose behest.
- The bot vs browser distinction is a powerful analogy for the **difference between procedural, batch ingestion of DDR materials** and researcher/archivist-led, context-rich submissions. Both should be recorded and differentiated in the DDR schema.
- Their treatment of **data friction** suggests that DDR’s future infrastructure (storage, compute, indexing choices) will shape what forms of analysis are possible; this argues strongly for reflexive documentation of those constraints inside the archive.

### Implications for practice, policy or theory

- **Practice:** Adopt similar **probe-and-trace tactics** to test DDR pipelines (OCR, entity extraction, RAG retrieval), logging not only outputs but also internal behaviours (e.g. missing attachments, failed parses) as part of the research corpus.  
- **Policy:** Recognise **infrastructural decisions** (hosting, bandwidth, computational access) as governance questions, not just IT details; they affect who can study DDR and how.  
- **Theory:** Ogden et al. give strong support for an **infrastructural inversion** move in the thesis: rather than treating DDR’s digital layer as transparent, the project foregrounds it as an object of study in its own right.

## Evidence to quote or paraphrase

- “Using a mixed methods approach, we report on a pilot project centred around documenting the inner workings of ‘Save Page Now’ (SPN)… By improving our understanding of SPN and its role in shaping the IAWM, this work examines how the public tool is being used to ‘save the Web’…” (p.167).  
- **Paraphrase:** The authors describe web archives as a form of knowledge infrastructure that supports the production and dissemination of knowledge about the web over time, while remaining partial and contingent representations shaped by sociotechnical processes (people, software, bots, standards) (pp.168–169).  
- **Paraphrase:** The pilot project is designed to examine, document and “reverse engineer” the processes that create web archives in the context of SPN, and to reflect on methodological challenges of studying such emergent knowledge infrastructures (pp.169–171).  
- **Paraphrase:** Probe experiments show that browser-based SPN submissions trigger many HTTP requests for embedded resources, whereas bot-based submissions may trigger only a single request, resulting in lower-fidelity captures and challenging assumptions about the representativeness of SPN archives (pp.177–178, 179–181).  
- “We conclude with reflections on the implications of digital STS approaches for ‘knowing infrastructure’, where the use of these infrastructures is unavoidably intertwined with our ability to study the situated and material arrangements of their creation.” (p.167; echoed in conclusion pp.183–185).  

## Related works

- Summers & Punzalan (2017) – web archives as infrastructure.  
- Ben-David & Amram (2018) – IAWM and socio-technical construction of historical facts.  
- Ogden (2020, 2022) – ethnographies of web archiving and grassroots archiving.  
- Brügger (2018); Milligan (2019) – using web archives in digital history.  
- Edwards (2013); Bowker & Star (1999); Star & Ruhleder (1996) – knowledge/infrastructure studies.  
- Data Feminism; Mehrabi et al. – critical data/ML perspectives on bias, context and missingness.

## Questions for further research

- How might a similar **probe/trace/model** methodology be applied to DDR’s ingestion, indexing and RAG retrieval pipelines to surface their implicit “ways of seeing”?  
- What are DDR’s equivalents of “bots” and “browsers” – e.g. batch imports vs curated deposits – and how do they differ in terms of fidelity and context?  
- How can DDR’s infrastructure be designed so that **breakdown and data frictions** (missing files, failed crawls, timeout errors) are preserved as analysable evidence rather than erased?  
- In what ways might DDR, like SPN, become **algorithmic fuel** (for LLMs, recommendation systems), and how should that future use shape present-day documentation of provenance and missingness?  
- What governance or access models would ensure that **critical scrutiny of DDR’s infrastructure** is possible for future researchers, rather than confined to a small group with privileged access to systems and logs?