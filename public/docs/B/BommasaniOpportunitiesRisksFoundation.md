---
title: "On the Opportunities and Risks of Foundation Models"
authors: "Bommasani, Rishi and Hudson, Drew A and Adeli, Ehsan and Altman, Russ and Arora, Simran"
year: 2021
journal: "arXiv preprint"
citation_key: BommasaniOpportunitiesRisksFoundation
bibliography: ../../refs/library.bib
category: 4.4-LLM-as-research-method/epistemic-instrument
last_updated: "Jan 09, 2026, 03:38 PM"---
# Critical Reading Notes  
**Bommasani et al., “On the Opportunities and Risks of Foundation Models” (2021)**  

---

# Scope of this note
This note examines four core components of the report:  
1. The **Introduction**, especially the paradigm-defining concepts of *emergence* and *homogenisation* (pp. 3–7).  
2. The systemic framing of foundation models as sociotechnical ecosystems (pp. 7–12).  
3. **§5.6 Ethics of Scale**, which articulates the political–ethical implications of model centralisation (pp. 152–153).  
4. The **Conclusion** (p. 161), which positions foundation models as a general-purpose technology with uncertain societal consequences.  

These sections provide the theoretical support for the project’s position that LLMs function as epistemic and infrastructural instruments.

---

# Purpose and aim
### What research question or objective is being addressed?

The report seeks to define an emerging paradigm of *foundation models*, arguing that models trained on broad data using self-supervision and scaling laws now function as infrastructural substrates for a wide spectrum of downstream tasks (p. 3).

The stated aim is to provide a “fuller picture” of opportunities and risks, and to “establish a constructive vision for the future responsible development of foundation models” (p. 13).

---

# Methodology  
### Describe the research design, methods and sample size.

The text is a **multi-authored survey-synthesis**, produced by over 100 contributors across 26 sections (p. 14). It is not empirical in the conventional sense; instead it collates, interprets and systematises literature across ML engineering, human–computer interaction, ethics, economics, and law.

The report’s methodological stance is structural: it treats the model class not as a set of empirical artefacts but as a new infrastructural paradigm.

---

# Key findings and arguments

## 1. Emergence and homogenisation define the new paradigm  
(pp. 3–7)

### Emergence  
- Foundation models display behaviours “implicitly induced rather than explicitly constructed” (p. 3).  
- GPT-3’s **in-context learning** is presented as a canonical emergent behaviour not directly trained for (p. 6).

This underscores the epistemic uncertainty introduced by scale.

### Homogenisation  
- The same Transformer architectures recur across text, images, speech, proteins, molecules and reinforcement learning (p. 6).  
- Homogenisation increases leverage (improvements propagate widely) but also **systemic fragility**, as all systems “inherit the same problematic biases” (p. 6).

The authors emphasise that emergence and homogenisation interact to generate novel risks.

---

## 2. Foundation models form a sociotechnical ecosystem  
(pp. 7–12)

Figure 3 (p. 7) depicts an ecosystem from **data production → training → adaptation → deployment**, explicitly positioning humans at both the input and output ends. This makes clear that foundation models are not neutral statistical tools but components of a political economy of data, compute and global labour.

This ecosystem framing is critical for understanding their infrastructural consequences.

---

## 3. Ethics of Scale: systemic risks from algorithmic monocultures  
(pp. 152–153)

Section **5.6 Ethics of Scale** articulates the political and ethical risks arising from widespread adoption:

- Using the same foundation model across domains amplifies “strengths, weaknesses, biases, and idiosyncrasies” (p. 152).  
- Homogenisation across decision processes produces *algorithmic monoculture* (p. 152), exposing entire populations to identical failure modes.  
- The authors highlight a “greater responsibility of care” for model developers due to the scale and opacity of these models (p. 152).  
- Uninterpretability (pp. 152–153) compounds these risks, making harms difficult to foresee, diagnose, or mitigate.

This section directly supports the project’s argument for **bounded, archivally grounded, provenance-rich LLMs**.

---

## 4. Conclusion: foundation models as general-purpose technologies  
(p. 161 referenced via ToC)

The Conclusion frames foundation models as a general-purpose technology capable of reorganising economic structures, labour, and knowledge production. Crucially, the authors stress the inevitability of **“unknown unknowns”** emerging (pp. 149–152) due to emergent behaviours and scale.

This sets up the need for sustained interdisciplinary governance, echoing the project’s emphasis on reflexive, cybernetic, provenance-aware system design.

---

# Relevance  
### How does it link to the research questions or framework?

1. **Epistemic drift:** The report's concept of homogenisation mirrors the project’s interest in how epistemic structures centralise, stabilise, and drift over time.  
2. **LLMs as research instruments:** Emergence provides a theoretical justification for treating LLMs as *experimental systems* rather than deterministic tools.  
3. **Ethics and archival transparency:** The Ethics of Scale section strengthens the case for provenance-rich, interpretable DDR-specific LLMs.

---

# Project integration

### Why it helps the project (evidence-linked)

- The warning that a single bias can “ripple outwards” across all adapted systems (p. 152) justifies designing **local, domain-bound LLM instances**.  
- GPT-3’s emergent properties (p. 6) underscore why interpretability and constrained prompting must be central to the DDR RAG prototype.  
- Uninterpretability (pp. 152–153) underscores the need for *explainable, provenance-exposing interfaces*, supporting the project’s XAI spine.

### Hooks into the project

- **Workstreams:** DDR schema design; provenance-modelling; RAG system construction.  
- **Deliverables:** DDR knowledge graph; explainable RAG interface; methodologically framed LLM instrument.  
- **Stakeholders:** Design historians, GLAM professionals, AI governance actors.

### Use across the methods spine

- **Framing:** Establishes LLMs as sociotechnical, not purely computational.  
- **Design:** Justifies constraints, scoping and provenance display.  
- **Analysis:** Reinforces interpretability limitations and the need for hybrid human–machine reasoning.  
- **Synthesis:** Supports modelling epistemic drift computationally.  
- **Reporting:** Underpins ethical justification for the project’s methodological choices.

---

# Critical evaluation

### Strengths
- Exceptionally comprehensive and interdisciplinary.  
- Provides clear conceptual anchor points (“emergence”, “homogenisation”).  
- Treats foundation models as sociotechnical infrastructures, aligning with STS-inflected research.

### Weaknesses and limitations
- Relies primarily on conceptual analysis; empirical validations are sparse.  
- Under-explores political economy (e.g., compute concentration, labour exploitation).  
- Tends toward technological inevitabilism; alternative non-scaling trajectories are not fully considered.

### Author credibility
Produced by Stanford’s CRFM with leading scholars in ML and ethics. Credibility is high though the institutional positioning may bias conclusions toward scalability and industrial alignment.

### Contextual validity
Applies strongly to any domain where LLMs become infrastructural. Highly relevant for computational archival science.

### Comparisons
- **Bender et al. (2021):** more critical, focusing on linguistic bias and environmental cost.  
- **Simons et al. (2025):** engages more directly with LLMs as humanities research instruments.

---

# Interpretation

### Analysis and insights
The report demonstrates that foundation models reorganise epistemic power by centralising representational authority within a small class of architectures and training pipelines. This resonates with the project’s frame of **epistemic drift**: the consolidation of methodological and conceptual authority.

### Alternative explanations
One might argue that homogenisation reflects **industrial platform consolidation** rather than intrinsic model properties; this shifts focus toward regulatory and infrastructural politics.

### Implications for practice, policy and theory
- **Practice:** Prioritise small, explainable, provenance-rich domain models.  
- **Policy:** Resist infrastructural monocultures; support open, decentralised model ecosystems.  
- **Theory:** View LLMs as cybernetic experimental systems rather than autonomous agents.

### Influence on project thinking
Strengthens argument for “DDR-as-provenance-grounded-foundation-model”: a tightly bounded epistemic instrument that resists the risks described by Bommasani et al.

---

# Evidence to quote or paraphrase

- “The behaviour of a system is implicitly induced rather than explicitly constructed” (p. 3) 
- GPT-3 enables in-context learning, “an emergent property… not anticipated” (p. 6) 
- Biases of a single model can “ripple outwards” (p. 152)

**Paraphrase:** Foundation models create systemic risk because wide adoption ensures that any underlying bias becomes universally propagated (pp. 152–153).

---

# Related works
- Bender et al. 2021 — *Stochastic Parrots*  
- Simons et al. 2025 — LLMs in history and sociology of science  
- Siddharth & Luo 2025 — Trustworthy AI  
- Valleriani et al. 2019 — Epistemic communities as computable networks  

---

# Questions for further research
1. How can bounded institutional models resist homogenisation while still leveraging foundation-model capabilities?  
2. What governance structures prevent algorithmic monocultures in historical research?  
3. How can emergent behaviours be exposed, constrained or instrumented in archival contexts?  
4. What interpretability practices genuinely support scholarly critique rather than veneer transparency?