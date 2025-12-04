---
title: "Are users of digital archives ready for the AI era?"
authors: "Jaillant, Lise and Aske, Katherine"
year: 2024
journal: "Journal on Computing and Cultural Heritage"
citation_key: Jaillant2024AreUsersDigital
doi: "10.1145/3631125"
bibliography: ../../refs/library.bib
category: 4.3-RAG/XAI/provenance
last_updated: "Dec 04, 2025, 12:32 PM"---
# Scope of this note
This note covers the full article (16 pp.), with particular focus on findings relevant to:
- AI readiness among digital archive users,
- obstacles to computational use of digitised and born-digital materials,
- issues of access, bias, representation, transparency, training gaps,
- implications for RAG, explainability, provenance, and infrastructural design.

---

## Purpose and aim
### What research question or objective is being addressed?

The authors aim to determine **whether researchers and end-users of digital archives are prepared for the AI era**, and why many do *not* yet apply computational methods to digitised or born-digital records. The central research questions are:

1. **Why are users not adopting computational / AI-driven methods at scale?**
2. **What barriers prevent effective use of AI-ready digital archives?**
3. **What infrastructural, educational, and cultural changes are necessary for meaningful computational engagement?**

The article explicitly examines the **mismatch between emerging AI tools and the actual skills, practices, and expectations of humanities/social science researchers** (p.1–2).  [oai_citation:1‡3631125.pdf](sediment://file_00000000b45071f493fd0037f9f49b35)

---

## Methodology
### Describe the research design, methods and sample size.

A **mixed qualitative design**:

- **Open-call survey** (June 2022), N=22 (p.4).  
  Respondents included postgraduate students, early-career researchers, mid-career academics, and GLAM professionals.

- **Semi-structured interviews**, 24 interviews with **33 participants** (archivists, librarians, digital humanists, historians, computer scientists) conducted across Europe and North America (pp.5–7).  
  Interviews ranged from 30–60 minutes and were transcribed.

- **Thematic analysis** organised around:
  - access and discoverability,
  - methodological choices,
  - bias and representation,
  - transparency,
  - training gaps,
  - solo vs collaborative research models,
  - readiness for AI.

The study deliberately samples **informed stakeholders**, not a statistically representative population (p.5).  

---

## Key findings and arguments
### Summarise the main results and conclusions

1. **Limited access makes AI/ML adoption impossible before it even begins.**  
   Users cannot conduct computational research without adequate access to digital archives. Many major archives **restrict remote access**, limit bulk data downloads, or provide non–machine-readable formats (e.g., WARC) (pp.2–4, 12). This is the primary roadblock: **“No use without access.”**  

2. **Humanities researchers often lack computational training and confidence.**  
   Even researchers who *want* to use computational methods report:
   - insufficient programming skills,
   - no formal training,
   - overwhelming time constraints (e.g., 3-year UK PhDs) (pp.6–7, 10).  
   Only **32%** of survey respondents felt they had the skills to apply computational methods effectively (p.5).

3. **Cultural resistance persists: humanities disciplines still value “solo,” interpretive, non-quantitative methods.**  
   Interviewees noted that DH and computational methods are sometimes politically or intellectually suspect, seen as “neoliberal,” “technocratic,” or “anti-critical” (pp.6–7).  
   Humanities scholars often work alone; computational work typically requires **team-based, cross-disciplinary collaboration** (pp.10–11).

4. **Bias, representation and transparency are major concerns magnified by AI.**  
   AI tools can amplify structural bias already present in:
   - metadata,
   - classification systems,
   - colonial-era terminology,
   - sampling decisions in digitisation (pp.8–9).  
   The authors emphasise that transparency and documentation—including tools, versions, algorithms, search strategies—is increasingly necessary for scholarly reproducibility (p.9).

5. **Digital archives lack infrastructure to support computational use.**  
   Archives rely on:
   - outdated metadata,
   - inconsistent digitisation priorities,
   - inadequate tooling for large-scale data analysis,  
   - limited staff and resources (pp.3–4, 12–13).  
   Archivists ask: *How much pre-processing is expected of them?* (p.7)

6. **AI offers clear potential—but only if access, skills, collaboration and infrastructure improve.**  
   AI/ML can:
   - rank-order FOI request documents (p.10),
   - identify sensitive content,
   - improve transcription (OCR/HTR),
   - detect patterns across large datasets (pp.10–12).  
   But without training, access or proper tools, few users can exploit these capabilities.

---

## Relevance
### How does it link to the research questions or framework?

- Directly relevant to **RAG, XAI, provenance and user studies** in Strand 4.3.  
- Highlights the **gap between AI capacity and actual user capability**, crucial for designing DDR’s evidence-aware RAG system.  
- Reinforces themes from archival infrastructure, classification, and missingness: poor metadata, restricted access, unrepresentative digitisation, and opaque search systems all shape what can be found or computed.  
- Illuminates the **politics of digital archives**, where tool design can privilege certain epistemologies (e.g., quantitative scale over interpretive depth).

---

## Project integration
### Why it helps the project (evidence-linked)

- **Access first:** DDR must ensure that its data model enables evidence extraction before AI layers are added:  
  *“New technologies such as AI require access to data first”* (p.2).  [oai_citation:2‡3631125.pdf](sediment://file_00000000b45071f493fd0037f9f49b35)

- **Metadata and provenance gaps impact computability:**  
  Poor metadata, dirty OCR, and inconsistent digitisation practices make many collections computationally unusable (pp.3–4). DDR’s provenance layer must expose such limitations.

- **User diversity matters:**  
  There is *“no such thing as a typical ‘end user’”* (p.2), reinforcing DDR’s need to design for varied user profiles (researchers, alumni, staff, administrators).

- **Human–machine collaboration:**  
  Interviewees report combining close reading with ML for interpretive accuracy (p.7). DDR’s RAG system must similarly blend AI reasoning with human interpretive contexts.

- **Transparency is essential:**  
  *“Researchers should be able to enable anyone to replay the programme on the same corpus of data”* (p.9).  
  DDR must track tool versions, search strategies, and retrieval evidence.

### Hooks into the project

- **Workstreams →** WS3 (AI/RAG), WS2 (infrastructure and archival description), WS1 (user models).  
- **Deliverables →** DDR RAG audit trail; provenance schema; “dirty OCR” and metadata quality indicators; user capability profiles.  
- **Stakeholders →** RCA Library & Archives, Digital team, AI researchers, DDR alumni.

### Use across the methods spine

- [x] Framing and theory  
- [x] Study design (user-focused computational models)  
- [x] Data collection (access and metadata quality assessment)  
- [x] Analysis and models (bias, transparency, reproducibility)  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

---

## Critical evaluation

### Strengths
- Rich, fine-grained qualitative evidence from survey + interviews (pp.4–7).  
- Strong emphasis on **user-centred AI design** for digital archives.  
- Demonstrates that **AI readiness is infrastructural, not only educational**.  
- Insightful discussion of transparency and reproducibility (p.9).

### Weaknesses and limitations
- Sample heavily skewed toward Global North academics (p.2).  
- Limited engagement with non-academic or community users.  
- Does not explore technical design solutions for AI integration; remains descriptive.  
- Treats “AI” broadly—distinguishes little between ML, NLP, and RAG-like architectures.

### Author’s credibility
Jaillant and Aske are well-recognised in digital archives, AI for GLAM, and user studies.  
Jaillant leads AEOLIAN, a major international network on AI and digital cultural heritage.

### Contextual validity
Findings apply primarily to the Global North but generalise well to any archival or academic setting undergoing digital transformation.

### Comparisons
- Aligns with Gooding (2022) on critically addressable data.  
- Echoes Summers & Punzalan (2017) on infrastructural complexity.  
- Complements Harris, Carter, and Moss & Thomas on absence and archival bias.  
- Extends Colavizza et al. (2022) on AI in archives by adding *user-level* analysis.

---

## Interpretation
### Analysis and insights

- AI readiness depends **less on technology** and more on the **human and infrastructural ecosystem** around it.  
- Training gaps indicate that humanities researchers need **conceptual literacy**, not full technical mastery.  
- Restricted access showcases why DDR must adopt an **open-by-design but ethics-aware** data strategy.  
- Metadata and digitisation biases confirm that all RAG outputs must embed **explanations of coverage, sampling and uncertainty**.  
- Solo-researcher norms in the humanities suggest DDR must support interfaces that work for *individual scholars*, not just computational teams.

### Alternative explanations?
- Resistance to computational methods may reflect institutional reward structures more than intellectual preferences.  
- Access barriers may be more about **rights and licensing**, not infrastructural design.

### Implications for practice, policy or theory?
- DDR should document search histories, tools, and algorithmic versions for reproducibility.  
- RAG interfaces should disclose metadata quality, OCR confidence, and classification histories.  
- Training or onboarding resources should be built into the DDR system.

---

## Evidence to quote or paraphrase

- “New technologies such as AI require access to data first.” (p.2)  
- “There is no such thing as a typical ‘end-user.’” (p.2)  
- “Data always needs to be worked out. You never get data that you can use right away.” (p.7)  
- **Paraphrase:** Only one-third of users feel they have adequate skills for computational methods; most are self-taught (p.5).  
- “Researchers… should document which tool, which version of the algorithm… and enable anyone to replay the programme.” (p.9)  
- “The model of the solo researcher… remains dominant in the humanities.” (p.10)  
- **Paraphrase:** AI is needed to process massive government archives that are too large for human review (p.10–11).

---

## Related works
- Gooding (2022) on data readiness.  
- Colavizza et al. (2022) on AI & archives.  
- Bell, Storrar & Winters (2022) on web archive access.  
- Maemura et al. (2016) on computational web archives.  
- Harris, Carter, Moss & Thomas on archival silences and bias.

---

## Questions for further research
- How can DDR provide graded access models for different user capabilities?  
- What kinds of RAG explanations best support humanities-style interpretive practices?  
- How should DDR measure and display “metadata quality” or “OCR uncertainty”?  
- What training interventions (micro-courses, embedded guidance) best support novice computational users?  
- How can DDR document access restrictions, gaps, and sampling biases transparently?