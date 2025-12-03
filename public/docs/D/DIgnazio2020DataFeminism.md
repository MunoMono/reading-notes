---
title: "Data feminism"
authors: "D'Ignazio, Catherine and Klein, Lauren F."
year: 2020
journal: "The MIT Press"
citation_key: DIgnazio2020DataFeminism
doi: ""
url: "https://direct.mit.edu/books/book/2390355/data-feminism"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 03, 2025, 03:55 PM"
category: 3.3-Absence,-silence-and-missing-data
---
# Scope of this note

Focus on the conceptual architecture of *Data Feminism* as articulated in Chapter 1 “The Power Chapter,” Chapter 2 “Collect, Analyze, Imagine, Teach,” and Chapter 6 “The Numbers Don’t Speak for Themselves,” plus relevant elements of the Introduction. These chapters are used to ground the thesis’s account of power, missing data, positionality and context in data/archives, and to inform the DDR data model and RAG design.

## Purpose and aim
### What research question or objective is being addressed?

The book’s overarching aim is to articulate “data feminism” as an intersectional feminist framework for understanding and transforming contemporary data practice. It asks:

- How are data and data systems entangled with structural power and oppression, historically and in the present? (pp.14–18).
- What principles and practices would allow data science to challenge, rather than reproduce, unequal power relations? (p.18).
- How can feminist thought guide concrete interventions in collecting, analysing, communicating and governing data, particularly where information is missing, misclassified or weaponised?

Chapters 1, 2 and 6 refine these questions into three linked principles: examine power, challenge power, and consider context (pp.21, 49, 149).

## Methodology
### Describe the research design, methods and sample size.

The work is a synthetic, theoretical monograph rather than an empirical study with a defined sample. Its “method” combines:

- **Intersectional feminist theory** (especially Patricia Hill Collins, bell hooks, Kimberlé Crenshaw, Donna Haraway) with critical data studies to define a vocabulary of power, privilege, oppression and situated knowledge in relation to data (pp.18, 24–27).
- **Case-based argumentation**: each chapter revolves around a series of detailed examples—Serena Williams’ near-fatal childbirth, community data projects, risk-assessment algorithms, open data portals, the GDELT database, Reddit corpora—used as evidence for broader claims about power and context in data systems (pp.21–24, 53, 171–172).
- **Comparative reading of data artefacts**: for example, reading the Detroit Geographic Expedition and Institute (DGEI) maps against earlier redlining maps to contrast oppressive vs emancipatory cartographies (pp.53, 63).
- **Normative principle-building**: seven principles of data feminism are abstracted from these examples and prior theory; Chapters 1, 2 and 6 each operationalise one principle (pp.18, 21, 49, 149).

No formal sampling or systematic review is claimed; instead, the authors curate cases to illustrate how power and context surface in diverse data practices.

## Key findings and arguments
### Summarise the main results and conclusions

1. **Data are inseparable from power and the “matrix of domination.”**  
   - Chapter 1 argues that data practices are embedded in intersecting systems of structural, disciplinary, hegemonic and interpersonal power, borrowing Collins’s “matrix of domination” (pp.24–27).  
   - Power is defined as the current configuration of “structural privilege and structural oppression,” where some groups experience unearned advantages because systems are designed for/around them, while others face systematic disadvantage (p.24).  
   - The chapter introduces the distinction between dominant and “minoritized” groups and stresses that data science currently reflects the interests, demographics and blind spots of dominant groups, producing a pervasive “privilege hazard” in data products and algorithms (p.27; p.62).

2. **Examining power means asking ‘who’ questions of data work.**  
   - The “examine power” principle consists of asking: Who does the work of data science? Who benefits? Whose priorities are encoded into products? Who is neglected or harmed? (p.62).  
   - These questions expose how dominant groups shape infrastructures, classifications and defaults, while minoritised groups often appear only as data points, if at all. Infrastructural and classificatory decisions, including what is not collected, become key sites of power.

3. **Challenging power requires counterdata, critical analysis, imagination and pedagogy.**  
   - Chapter 2 develops “challenge power” as a principle of action, using the DGEI’s map of where commuters ran over Black children as paradigmatic (pp.53, 63).  
   - The DGEI compiled “counterdata” in the face of official neglect, deliberately quantified structural violence, and was led by those directly affected; the identities and proximity of data makers and the terms of collaboration are treated as constitutive of the data (p.53).  
   - The chapter proposes four verbs for challenging power with data: **Collect** counterdata where institutions fail or refuse to document harm; **Analyze** inequitable outcomes and audit opaque systems; **Imagine** futures beyond mere “fairness” towards co-liberation; and **Teach** to shift who participates in data science and who defines data problems (p.53).

4. **Missing data and silences are products of institutional neglect and misaligned incentives.**  
   - The book repeatedly foregrounds the fact that many harms are uncounted: cities failing to collect data on police violence, universities under-reporting sexual assault, or data publishers overstating coverage (p.171).  
   - These absences are not neutral gaps but consequences of institutional interests, resource constraints and political choices; they are themselves evidence of structural power.

5. **Numbers never “speak for themselves”; context, provenance and power analysis are essential.**  
   - Chapter 6’s core thesis is that data, especially about people, are dangerous when presented without thorough contextualisation. “The numbers don’t speak for themselves”; analysts must “actively prevent numbers from speaking for themselves” because they risk reinforcing injustice if read as self-evident truths (p.172).  
   - Considering context involves understanding the provenance and environment of data collection, making contextual information visible in communication, and analysing social power around the dataset—asking what power imbalances created silences or missing data, who has conflicts of interest, and whose knowledge has been subjugated (p.172).  
   - The chapter highlights the precarious position of data intermediaries (librarians, journalists, nonprofits) who attempt to curate and contextualise data but lack sustained funding and recognition (p.171).

6. **Data feminism is explicitly normative and collective.**  
   - The authors position data feminism as “for everybody,” grounded in intersectional feminism and committed to challenging unjust distributions of power in data-driven societies (pp.14–18).  
   - They emphasise centring voices at the margins and treating gaps, omissions and silences in existing data as invitations to new forms of participatory, justice-oriented data work.

## Relevance
### How does it link to the research questions or framework?

- Provides a **conceptual bridge** between archival silence/missingness and algorithmic bias/fairness: missing or mis-contextualised DDR records can be read as outcomes of power-laden institutional processes, not mere archival accidents.  
- Offers a **vocabulary for power and absence**—matrix of domination, privilege hazard, minoritised groups, counterdata—that can be adapted to understand whose work in DDR is recorded, foregrounded or erased, and whose categories structure the archive.  
- Chapter 6’s emphasis on **context, provenance and data intermediaries** maps directly onto the thesis’s concern with archival description standards (ISAD(G)), critically addressable data, and the role of librarians/archivists in RAG pipelines.  
- The four verbs “collect, analyze, imagine, teach” furnish a **design brief** for the DDR computational archive: it should enable counterdata collection (e.g. annotation and oral histories), critical analysis of gaps, speculative modelling of alternative DDR histories, and pedagogic interfaces.

## Project integration
### Why it helps the project (evidence-linked)

- **Power-aware modelling of DDR.** The matrix of domination and “who” questions can structure the project’s analysis of DDR records: who created them (dominant actors within the department), who is represented, whose labour is invisible, and who may have been excluded from formal documentation (pp.24–27, 62).  
- **Missingness as evidence, not noise.** Chapter 6 explicitly urges analysts to ask which power imbalances “have led to silences in the dataset or data that is missing altogether” and whose knowledge has been subjugated (p.172). This aligns with Moss & Thomas, Harris and Carter, allowing the DDR schema to treat absence as a research object.  
- **Design of the DDR schema and RAG system.** The insistence on provenance, contextual metadata and visible limitations supports the project’s commitment to explainable, provenance-rich retrieval and to storing reasons for missing or uncertain data (pp.171–172).  
- **Participatory and pedagogic stance.** The emphasis on teaching and broadening participation in data work supports designing DDR tools that treat researchers, archivists and alumni as co-authors—mirroring DGEI’s collaborative cartography of harm (p.53).  
- **Normative framing for trustworthy AI.** By defining data feminism as a project of challenging unjust uses of data, the book gives a clear ethical horizon against which to evaluate the DDR RAG system’s treatment of bias, gaps and uncertainty (pp.14–18).

### Hooks into the project

- **Workstreams →**  
  - WS2: DDR archival reconstruction and schema design (power-aware modelling of entities, roles and absences).  
  - WS3: RAG/XAI prototype (context-rich retrieval, surfacing silences and provenance).  
  - WS4: Oral history and participatory enrichment (counterdata, teaching, co-analysis with participants).

- **Deliverables →**  
  - Conceptual chapter on absence, silence and missing data framed by matrix of domination and context.  
  - DDR relational/graph schema with explicit fields for provenance, uncertainty and “known gaps.”  
  - Interface patterns for RAG results that foreground context, limitations and alternative viewpoints.  

- **Stakeholders →**  
  - Archivists and librarians (as data intermediaries and co-designers of contextual metadata).  
  - Former DDR staff/students (as contributors of counterdata and interpretive context).  
  - Broader design-research and DH communities interested in feminist, power-aware data infrastructures.

### Use across the methods spine

- [x] Framing and theory  
- [x] Study design  
- [x] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

## Critical evaluation

### Strengths

- **Clear, portable principles.** The seven principles—especially examine power, challenge power and consider context—provide a concise conceptual toolkit readily applicable to archival and computational settings (pp.18, 21, 49, 149).  
- **Integration of theory and practice.** The book connects high-level feminist theory with concrete case studies and design implications, making it directly useful for methodological design as well as critique.  
- **Foregrounding missingness.** By treating data absences and silences as central rather than peripheral, the authors give strong theoretical backing for using gaps in DDR records as evidence.  
- **Reflexive authorship.** The authors’ acknowledgment of their own positionality as white US-based academics and their commitment to centring marginalised voices model the reflexivity this project seeks to adopt (pp.19–20).

### Weaknesses and limitations

- **Global and institutional scope.** The primary cases are US-centric and focus on high-profile examples (policing, maternal health, predictive algorithms). The translation to a mid-twentieth-century UK design-research department requires some conceptual stretching.  
- **Methodological looseness.** As a manifesto-style text, the book does not exhaustively document selection criteria for its cases or provide systematic evaluation of proposed interventions; empirical robustness varies across examples.  
- **Operational detail.** While Chapter 6 highlights the importance of context and provenance, it offers limited guidance on the granular design of schemas, metadata standards or algorithmic architectures—precisely where the DDR project must innovate.

### Author’s credibility

- Catherine D’Ignazio and Lauren Klein are established scholars in data visualisation, digital humanities and feminist technology studies. The book is published by MIT Press and widely cited, giving it strong disciplinary legitimacy.

### Contextual validity

- The arguments generalise well to other data-intensive contexts where structural power, bias and missingness are salient. However, some assumptions (e.g. about racialised policing or US legal frameworks) are context-specific and must be translated carefully into UK higher-education and archival settings.

### Comparisons

- Complements Mehrabi et al.’s survey of bias and fairness in machine learning by providing a feminist, intersectional lens and more attention to data collection, missingness and context.  
- Resonates with Moss & Thomas, Harris and Carter on archival silence, but extends their concerns into digital infrastructures and algorithmic systems.  
- Aligns with Gooding’s “critically addressable data” and Bowker & Star’s politics of classification, adding an explicit intersectional feminist ethic.

## Interpretation
### Analysis and insights

- *Data Feminism* suggests that DDR’s documentary record should be read not only as a partial archive but as a **power-saturated data assemblage**. The matrix of domination offers a way to think about how gender, class, race and institutional status may have shaped what was considered worth recording, how, and by whom.  
- The DGEI example is a direct analogue for building **counterdata** around DDR: oral histories, personal collections and annotations become ways of documenting harms or omissions that the formal archive ignores.  
- Chapter 6’s injunction to “consider context” is particularly salient for RAG design: retrieval results that strip context replicate the illusion that “numbers speak for themselves.” The DDR system should instead privilege contextual views—linking records to provenance, institutional processes and known silences.  
- The book also underlines that the project is not neutral infrastructure work but a **normative intervention**: constructing a computational DDR archive is a way of challenging which histories of design research are legible, whose contributions are counted and how epistemic authority is distributed.

### Implications for practice, policy or theory

- For practice, the thesis can adopt “collect, analyze, imagine, teach” as an organising logic for DDR tooling: archival ingestion (collect), exploratory analytics and bias audits (analyze), speculative interfaces and alternative reconstructions (imagine), and pedagogic uses of the system in RCA teaching (teach).  
- For policy, Chapter 6 strengthens arguments that open-data initiatives and heritage digitisation must fund context work—provenance, documentation of gaps, and labour of intermediaries—rather than only raw digitisation.  
- Theoretically, the book supports framing **epistemic drift** partly as drift in which perspectives and power relations data infrastructures encode; DDR’s move from design science to more plural practices can be tracked through changes in who is represented, how classifications work, and what remains uncounted.

### How does it shape your thinking?

- Encourages treating missing DDR data as the start, not the end, of inquiry.  
- Reinforces the decision to foreground transparency, provenance and explanation in the RAG MVP.  
- Provides language to argue that DDR’s schema and interfaces must not only represent past power dynamics but also redistribute interpretive power in the present, by inviting contestation and participatory enrichment.

## Evidence to quote or paraphrase

- “Data feminism begins by analyzing how power operates in the world” (p.18).  
- “We use the term power to describe the current configuration of structural privilege and structural oppression” (p.24).  
- “The matrix of domination works to uphold the undue privilege of dominant groups while unfairly oppressing minoritized groups” (p.26).  
- **Paraphrase:** The authors define “minoritized” groups as those actively devalued and oppressed by dominant groups holding greater economic, social and political power; sexism, racism and classism name these intersecting systems (p.26).  
- “Examine power … consists of asking who questions about data science: Who does the work (and who is pushed out)? Who benefits (and who is neglected or harmed)? Whose priorities get turned into products (and whose are overlooked)?” (p.62).  
- “Taking action can itself take many forms, and in this chapter we offer four starting points: (1) Collect … (2) Analyze … (3) Imagine … (4) Teach …” (p.53).  
- “Houston, we have a public information problem. Until we invest as much in providing (and maintaining) context as we do in publishing data, we will end up with public information resources that are subpar at best and dangerous at worst” (p.171).  
- “The sixth principle of data feminism is to consider context. The bottom line for numbers is that they cannot speak for themselves” (p.172).  
- **Paraphrase:** Considering context requires understanding the provenance and environment of data collection, framing that context in communication, and analysing how power imbalances generate silences and missing data, as well as whose knowledge has been marginalised (p.172).  
- “Data feminism is about power—about who has it and who doesn’t, and about how those differentials of power can be challenged and changed using data” (p.19).

## Related works

- Mehrabi et al. (2021) on bias and fairness in ML.  
- Bowker & Star (1999) *Sorting Things Out* (politics of classification).  
- Moss & Thomas (2021) *Archival Silences*.  
- Harris (2002); Carter (2006) on archival power and silence.  
- Gooding (2022) on critically addressable data.  
- Summers & Punzalan (2017); Ogden (2024) on archives as infrastructure.  

## Questions for further research

- How might the matrix of domination be operationalised in a concrete DDR schema—e.g. through fields that record whose voice a record embodies, or which groups are absent?  
- What design patterns best support users in “considering context” within RAG interfaces without overwhelming them—tooltips, provenance trails, or narrative summaries?  
- How can counterdata practices (as in DGEI) be translated into sustainable workflows for co-creating metadata and annotations around DDR records?  
- What forms of evaluation would demonstrate that a DDR RAG system is not only accurate but also more just or power-aware in its handling of missing data and silences?