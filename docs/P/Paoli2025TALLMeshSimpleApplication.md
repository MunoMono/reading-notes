---
title: "TALLMesh: a simple application for performing thematic analysis with large language models"
authors: "Paoli, Stefano De and Fawzi, Alex"
year: 2025
journal: "arXiv preprint"
citation_key: Paoli2025TALLMeshSimpleApplication
doi: "10.48550/arXiv.2504.13892"
url: "https://doi.org/10.48550/arXiv.2504.13892"
bibliography: ../../refs/library.bib
category: 4.4-LLM-as-research-method/epistemic-instrument
last_updated: "Dec 10, 2025, 02:05 PM"
---
# Critical Reading Notes  
**Paoli & Fawzi (2025), “TALLMesh: a simple application for performing thematic analysis with large language models”**  
(With exact page references to the uploaded PDF)

---

# Scope of this note
This reading focuses on the methodological rationale, system design, workflow and epistemic positioning of TALLMesh as described in pp. 1–22 of the PDF. It is read through the lens of the project’s concern with LLMs as **epistemic instruments**, with special emphasis on the human-in-the-loop workflow, reproducibility mechanics, and the authors’ efforts to encode qualitative research norms into computational tooling.

---

# Purpose and Aim

### What research question or objective is being addressed?
The authors aim to solve a practical methodological problem: **how to enable qualitative researchers—especially those without coding experience—to conduct thematic analysis (TA) using LLMs within a rigorous, reproducible workflow** (p. 1)

Specifically, the paper asks:

- Can TA workflows that previously required programming be delivered through an intuitive GUI?  
- Can LLM-assisted TA preserve the methodological integrity of Braun & Clarke’s six-phase approach (p. 2) 
- How can a tool balance automation with the human interpretive labour required in qualitative analysis?

The overarching aim is **accessibility without methodological dilution**.

---

# Methodology

### Describe the research design, methods and sample size.
The paper reports on:

1. **Software design research**, where a Python/streamlit GUI is built to operationalise existing LLM-TA procedures (pp. 6–7)  
2. **Methodological synthesis**, drawing on earlier empirical work by the authors on code generation, theme generation, and saturation metrics (pp. 2–4; 14–15) 
3. **User testing**, via a think-aloud protocol with university researchers (pp. 19–20) Users performed tasks such as API setup, project creation, coding, and visualisation.

There is no dataset in the traditional empirical sense; the “sample” is the app’s functionality and a small user group for usability testing.

---

# Key Findings and Arguments

### 1. LLMs can operationalise core phases of thematic analysis through programmatic prompts  
The authors reaffirm that **initial coding** and **theme construction** can be reliably reproduced by LLMs through scripted prompting (pp. 2–4)  [oai_citation:6‡Paoli and Fawzi - 2025 - TALLMesh a simple application for performing Thematic Analysis with Large Language Models.pdf]  
Earlier work (De Paoli 2024a/b; Mathis et al. 2024) demonstrated this empirically; TALLMesh packages these procedures for non-programmers.

### 2. TALLMesh translates TA into a stepwise, reproducible GUI workflow  
TALLMesh reifies the phases of TA—initial coding, codebook reduction, theme generation—into modular interface pages (pp. 6–13)
Key contributions include:

- **Project-based architecture**: isolates datasets and outputs for reproducibility (pp. 10–11).  
- **Prompt templates & custom prompts**: preserve methodological rigour while supporting adaptation (pp. 18–19).  
- **Deterministic/creative parameter control** (Temperature, Top_p): foregrounds replicability considerations (p. 13).  
- **Local saving of .csvs** ensures auditable evidence trails (pp. 12–13).

### 3. A novel “code reduction” phase resolves duplication across interviews  
Because TALLMesh codes interviews **independently**, duplication proliferates.  
The authors introduce a new stage—**code reduction**—which algorithmically collapses duplicates and constructs a **unique codebook** (pp. 14–15)
This contributes:

- A reproducible logic for merging codes  
- The metric **Initial Thematic Saturation (ITS)** (p. 15)  
- A system for quote aggregation and traceability

### 4. Visualisation tools augment interpretative depth  
The app includes sunbursts, icicles, treemaps, Sankey diagrams and spider graphs (pp. 17–18) 
These position LLM-assisted TA not just as automation but as a scaffold for interpretive reflexivity.

### 5. User testing surface interface clarity issues and informs refinements  
Think-aloud testing revealed problems with labels, feedback messages and error handling (p. 20) 
These issues were iteratively resolved, demonstrating a commitment to usability and methodological transparency.

### 6. The authors frame LLM-assisted qualitative analysis as a maturing methodological landscape  
They position TALLMesh as part of a broader wave of tools (CollabCoder, LLMCode, MindCoder, etc.), arguing the field is moving from feasibility demonstrations to **workflow formalisation** (pp. 3–6)

---

# Relevance

### How does it link to the research questions or framework?
- Helps articulate **LLMs as epistemic instruments**, not autonomous analysts.  
- Demonstrates how computational tools can encode **qualitative method logics**, relevant to DDR’s use of LLMs as interpretive partners.  
- Provides a precedent for building **GUI-based research interfaces** that scaffold but do not replace researcher judgement.

---

# Project Integration

### Why it helps the project (evidence-linked)

- The authors emphasise that qualitative analysis requires **human-in-the-loop interpretive oversight** (p. 1–2 ) directly supporting the project’s argument that DDR’s LLM tools must be **explainable, auditable and non-automating**.  
- The **project architecture** (pp. 10–11) provides a clear model for maintaining **provenance, versioning and reproducibility**, crucial for the DDR archive’s epistemic modelling.  
- The **custom prompt feature** (pp. 18–19) reinforces the idea that domain-specific interpretive schemas can be encoded explicitly, which parallels the DDR schema-driven RAG approach.  
- The introduction of **thematic saturation metrics** (p. 15) suggests that LLM outputs can be subjected to **methodological quality assessment** rather than accepted at face value.

### Hooks into the project

- **Workstreams →** RAG design; prompt engineering; LLM-assisted coding for archival materials  
- **Deliverables →** DDR-specific TA workflows; provenance-rich analysis outputs; GUI experimentation  
- **Stakeholders →** Archivists, digital humanities researchers, design historians

### Use across the methods spine

- [x] Framing and theory – establishes LLMs as methodological collaborators  
- [x] Study design – informs iterative, multi-phase workflows  
- [x] Data collection and instruments – demonstrates project-level data management  
- [x] Analysis and models – positions coding, reduction and theme generation as structured LLM tasks  
- [x] Synthesis and interpretation – shows how visualisation and human oversight shape meaning  
- [x] Reporting and communications – GUI transparency supports interpretability

---

# Critical Evaluation

### Strengths
- **Excellent methodological transparency**: every phase is articulated and visually illustrated.  
- **Explicit traceability**: local .csv storage ensures accountability.  
- **Accessibility**: the GUI meaningfully lowers technical barriers for qualitative researchers.  
- **Methodological innovation**: introduction of code reduction + ITS metric is a genuine contribution.  
- **Human-in-the-loop emphasis**: explicitly rejects LLMs as autonomous analysts.

### Weaknesses and limitations
- Heavy reliance on **OpenAI APIs** limits replicability for those needing open-source or offline models (p. 11) 
- The app structures TA into rigid stages; some qualitative traditions may find this overly proceduralist.  
- The interface is functional but still requires **significant conceptual awareness** of TA; novices may misinterpret outputs.  
- There is no deep discussion of **LLM error modes**, hallucination risks, or bias consequences in qualitative analysis.

### Author credibility
Both authors are active researchers in AI-assisted qualitative methods. The paper builds directly on several of their prior peer-reviewed studies, enhancing credibility.

### Contextual validity
The tool is valid for interview-based textual analysis but may not extend cleanly to:

- multimodal fieldwork,  
- longitudinal qualitative studies,  
- interpretive frameworks requiring fine-grained discourse or narrative analysis.

### Comparisons
- **CollabCoder** emphasises collaboration; TALLMesh emphasises methodological structure.  
- **LLMCode** provides flexibility but lacks TALLMesh’s TA-specific workflow.  
- **QualiGPT** supports coding only, whereas TALLMesh covers the full TA pipeline.

---

# Interpretation

### Analysis and insights
TALLMesh exemplifies a broader trend: **computational qualitative analysis moving from feasibility to infrastructure**.  
The main insight is that LLMs can be embedded within disciplined methodological structures *without collapsing interpretive agency*.

### Alternative explanations
One might argue that the workflow discipline arises not from TA logic but from **programming constraints**—the GUI forces linearisation of an otherwise fluid analytic process.

### Implications for practice, policy or theory
- For practice: researchers gain structured, auditable and rapid TA workflows.  
- For policy: highlights need for data protection-compliant model providers (pp. 10–11).  
- For theory: offers a model of *semi-automated hermeneutics*, aligning with cybernetic conceptions of human–machine co-analysis.

### How does it shape your thinking?
It validates the approach of treating LLM workflows as **designed epistemic machines**, where design decisions—prompts, parameters, GUI steps—are methodological interventions, not neutral conveniences.

---

# Evidence to quote or paraphrase

- “The app… enables users to upload textual data, generate initial codes and themes… without the need to work with programming and scripting” (p. 1) 
- “Familiarisation, initial coding, formulation of themes…”—the phases of TA reproduced with LLMs (p. 2) 
- “A project amounts to the analysis of one dataset… all results are stored locally” (p. 10)  
- “Initial Thematic Saturation… ratio of unique and total codes” (p. 15)
**Paraphrase:** TALLMesh operationalises TA by guiding users through coding, code reduction and theme construction, with LLMs handling text manipulation and users overseeing interpretive decisions (pp. 6–17)  [oai_citation:18‡Paoli and Fawzi - 2025 - TALLMesh a simple application for performing Thematic Analysis with Large Language Models.pdf]

---

# Related works

- De Paoli (2024a, 2024b) – foundational LLM-TA procedures  
- Mathis et al. (2024) – validation studies  
- Gao et al. (2023–2025) – CollabCoder and MindCoder  
- Hämäläinen et al. (2024) – LLMCode  
- Zhang et al. (2023) – QualiGPT  
- Sabbaghan (2024) – TRACER

---

# Questions for further research

1. How do different LLM architectures affect code reduction and saturation metrics?  
2. Can TALLMesh support multi-modal qualitative data (images, video transcripts)?  
3. How might the DDR-specific LLM incorporate analogous GUI workflows for archival materials?  
4. Could provenance trails (e.g., JSON-LD outputs) be embedded for greater epistemic transparency?  
5. What governance structures are needed for reproducible, auditable LLM-assisted analysis?