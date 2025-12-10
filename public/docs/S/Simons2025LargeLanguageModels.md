---
last_updated: "Dec 10, 2025, 02:05 PM"---
# Critical Reading Notes  
**Simons, Zichert & Wüthrich (2025), “Large language models for history, philosophy, and sociology of science: interpretive uses, methodological challenges, and critical perspectives”**  

---

# Scope of this note

This note focuses on the **overall argument** and four key components:

- The **Introduction** and positioning of LLMs as epistemic infrastructures (pp. 1–3).  
- The technical–methodological core: **primer on LLMs** and data/model adaptation strategies, especially RAG (Sections 2–3, pp. 3–10).  
- The three methodological challenges for HPSS: **data/structure, patterns, dynamics** (Sections 3–5, pp. 6–17).  
- The **four lessons** and the closing discussion of infrastructure, values and responsibility (Sections 6–7, pp. 17–21).  

It is read explicitly through the project’s concern with **LLMs as epistemic instruments in historical and archival contexts**.

---

## Purpose and aim  

### What research question or objective is being addressed?

The authors ask how **large language models can be used as research tools in history, philosophy and sociology of science (HPSS)**, and how HPSS is uniquely placed both to use and to critique them (pp. 1–2). 

They aim to:

- Provide a **primer** on LLM architectures and training for non-technical HPSS scholars (pp. 3–5). 
- Survey how LLMs can support three core methodological challenges identified by Laubichler et al. (2019): **structuring data, detecting patterns, and explaining change** (pp. 6–17).
- Articulate a **conceptual framework** that treats LLMs as *epistemic infrastructures*, not neutral tools, and to distil **four lessons** for integrating them into interpretive workflows (pp. 17–20).   

---

## Methodology  

### Describe the research design, methods and sample size.

This is a **conceptual and methodological survey**, not an empirical study with its own dataset.

The authors:

- Synthesise recent work across **digital humanities, bibliometrics, NLP, science of science and HPSS** (pp. 2–3; references pp. 21–27).  
- Organise the review around **three methodological problem clusters**—data/structure, patterns, dynamics—and map LLM techniques to each (Sections 3–5, pp. 6–17).
- Provide **design tables** (e.g. Table 1: full-context vs generative models; Table 2: adaptation strategies) that function as structured, methods-facing summaries (pp. 4, 8–9).
- Conclude with **four prescriptive lessons** that synthesise the survey into normative guidance (Section 6, pp. 18–20).

There is no statistical analysis; the “data” are prior studies and emerging tools.

---

## Key findings and arguments  

### Summarise the main results and conclusions

1. **LLMs should be treated as epistemic infrastructures, not neutral tools.**  
   - LLMs encode assumptions about **meaning, context and similarity** through their architectures, training data and adaptation choices (pp. 3–4, 6–8).
   - They become **condensed representations of corpora** and institutional workflows; HPSS must therefore ask what is encoded, who controls it, and how it shapes inquiry (pp. 6–7, 20–21). 

2. **Full-context vs generative models entail different interpretive affordances and risks.**  
   - Full-context models (BERT-like) excel in structured, non-generative tasks (classification, embeddings) but require higher technical literacy and infrastructure; they are more often open and inspectable (pp. 3–5).
   - Generative models (GPT-like) offer accessibility via natural-language prompting, multimodality and tool use, but raise concerns around **hallucination, opacity and platform dependency** (pp. 4–5, 9–10).  
   - This leads to an **accessibility–literacy trade-off**: ease of use can mask epistemic and infrastructural risks (p. 5). 

3. **Data, models and training reconfigure where interpretive labour resides.**  
   - LLMs reduce the need for fully structured input but **shift interpretive work into model choice, pretraining corpus, fine-tuning labels and similarity metrics** (pp. 6–9). 
   - Domain-specific pretraining and fine-tuning (e.g. BioBERT, SciBERT) show how **embedding spaces are sculpted** by task and corpus choices, with strong implications for historical and conceptual work (pp. 7–9).
   - Text embeddings are not neutral: they encode **particular notions of similarity** (citations, paraphrase, topicality), shaping what becomes visible and what remains hidden (p. 8). 

4. **RAG and tool use create new interpretive affordances—and new opacities.**  
   - Retrieval-augmented generation enables “**chatting with sources**”, semantic search and dynamic access to external corpora (pp. 8–10). 
   - This can act as an interpretive partner, but hides crucial design decisions in retrieval models, similarity metrics and prompt templates (p. 10). 

5. **LLMs can support HPSS across three methodological challenges: structure, patterns, dynamics.**  
   - **Structure:** entity extraction, relation extraction, citation function, and knowledge-graph building for HPSS corpora (pp. 10–13). 
   - **Patterns:** topic modelling (e.g. BERTopic), word-sense induction, citation roles, argumentative structures—used both exploratorily and for detection of predefined categories (pp. 10–13). 
   - **Dynamics:** token-level semantic change, topic trajectories, novelty detection, citation/influence and revision tracking for scientific change (pp. 14–17). 

6. **Four lessons for HPSS integration.**  
   - **Lesson 1:** Model selection involves technical *and* interpretive trade-offs; hybrid strategies are often best (pp. 18–19).
   - **Lesson 2:** **LLM literacy is foundational**; scholars must understand basic architectures, prompting and limitations (pp. 18–19).  
   - **Lesson 3:** HPSS must define **its own benchmarks and corpora**, preserving ambiguity and historical specificity (pp. 19–20). 
   - **Lesson 4:** LLMs should **enhance, not replace**, interpretive HPSS methodologies; they are best viewed as co-reasoners and pattern-surface tools (pp. 20–21). 

7. **Beyond methods, LLMs are infrastructural and political.**  
   - The paper closes by stressing energy costs, platform concentration, infrastructural opacity and the politics of scholarly tools (pp. 20–21). 

---

## Relevance  

### How does it link to the research questions or framework?

- Provides **direct, discipline-specific legitimisation** for using LLMs in interpretive historical work, exactly where the DDR project sits.  
- Articulates LLMs as **epistemic infrastructures that mediate meaning**, aligning with the project’s focus on epistemic drift, archival infrastructures and computational mediation.  
- Offers **concrete methodological mappings** (structure, patterns, dynamics) that can be re-used to frame DDR’s computational work as historically and philosophically informed.

---

## Project integration  

### Why it helps the project (evidence-linked)

- The assertion that **LLMs do not mirror language but mediate it through representational design** provides a strong theoretical justification for treating the DDR LLM/RAG stack as a *designed epistemic instrument* rather than a neutral assistant (pp. 17, 21). 
- The discussion of **text embeddings as non-neutral similarity constructions** supports critical scrutiny of DDR’s embedding choices, distance metrics and clustering in any knowledge-graph or topic-modelling components (p. 8).
- The section on **RAG and “chatting with papers”** speaks directly to DDR’s ambition to let users “chat with the archive”; it also warns that retrieval design and prompt templates must be made transparent (pp. 8–10).
- The four lessons give a ready-made structure for a **methods chapter**: model choice, literacy, bespoke benchmarks, and enhancement (not replacement) map neatly onto the project’s three-strand model.  

In Zotero-style shorthand: `[@Simons2025LargeLanguageModels, pp.6–10]` for infrastructure/RAG; `[@Simons2025LargeLanguageModels, pp.18–21]` for LLMs as epistemic infrastructures and the four lessons.

### Hooks into the project

- **Workstreams →**  
  - RAG design and retrieval modelling for DDR.  
  - Embedding and topic-modelling experiments for “patterns” and “dynamics” in DDR material.  
  - Methods spine: articulating HPSS-style interpretive commitments in computational design.  

- **Deliverables →**  
  - A “Simons-aligned” methods section situating DDR as HPSS-style computational inquiry.  
  - Internal design notes on model choice, embedding strategy and RAG architecture as epistemic decisions.  
  - A short *LLM literacy* primer for collaborators, adapted from Section 2.  

- **Stakeholders →**  
  - HPSS scholars, STS examiners, digital humanities partners.  
  - GLAM institutions concerned with the epistemic and political implications of LLMs.  

### Use across the methods spine

- [x] Framing and theory – LLMs as epistemic infrastructures and models-as-mediators.  
- [x] Study design – model choice, embeddings, RAG and benchmarks as design variables.  
- [x] Data collection and instruments – entity extraction, knowledge-graph building and corpus design.  
- [x] Analysis and models – topic modelling, semantic change, novelty, citation patterns.  
- [x] Synthesis and interpretation – hybrid close/distant reading workflows.  
- [x] Reporting and communications – explicit discussion of infrastructural and ethical conditions.

---

## Critical evaluation  

### Strengths

- **Discipline-specific and technically literate.**  
  The paper is written for HPSS, not generic “humanities”, and handles technical detail without lapsing into hype, offering a lucid primer on LLMs (Sections 2–3).

- **Bridges computational and interpretive traditions.**  
  It grounds its discussion in Laubichler et al. (2019) and other “computational turn” debates, acknowledging earlier scepticism and showing how LLMs may alter rather than dissolve those tensions (pp. 1–3, 6–7).  

- **Clear conceptual moves: “epistemic infrastructures” and four lessons.**  
  The conceptualisation of LLMs as epistemic infrastructures and the four structured lessons (model trade-offs, literacy, benchmarks, enhancement) are both portable and methodologically sharp (pp. 18–21).

- **Honest about limitations.**  
  The authors consistently stress hallucination, opacity, data bias, temporal misalignment and the incompleteness of current benchmarks for HPSS needs (pp. 8–9, 14–16, 20–21).

### Weaknesses and limitations

- **No concrete, end-to-end case study.**  
  The article gives many mini-examples and references (Simons 2024; Zichert et al. 2025), but does not walk through a full HPSS project using LLMs step-by-step. This limits its use as an implementation guide.  

- **Limited engagement with archival practice as such.**  
  The focus is on scientific publications, not archival mixes of draft, paratext and grey literature; transfer to DDR requires some re-imagining of sources, institutions and temporalities.  

- **Evaluation remains high-level.**  
  Although the paper calls for HPSS-specific benchmarks and corpora, it does not specify concrete annotation schemes or governance structures; these are left as future work.  

### Author’s credibility

All three authors are HPSS scholars with strong records in **computational history/philosophy of science and conceptual history using embeddings**. They draw on their own prior work (Simons 2024; Zichert et al. 2025) and lead an ERC project (NEPI) on network epistemology, which strengthens both expertise and funding context (p. 22).

### Contextual validity

- Highly applicable to **HPSS, STS and digital humanities** where scientific texts and their infrastructures are central.  
- For DDR, which deals with institutional design-research archives rather than scientific journals, the methodological reasoning transfers well, though corpora and benchmarks differ.  

### Comparisons

- **Bommasani et al. (2021)** – macro-paradigm of “foundation models”; Simons et al. give a *discipline-specific* version for HPSS, with much richer engagement with interpretive methods.  
- **Peng & Yang (2025)** – methods integration across surveys, experiments and content analysis; Simons et al. are narrower in method types but deeper in interpretive, historical and epistemic analysis.  
- **Paoli & Fawzi (2025, TALLMesh)** – concrete LLM-assisted TA implementation; Simons et al. provide the philosophical and methodological backdrop that justifies such tools as interpretive instruments.

---

## Interpretation  

### Analysis and insights

The paper crystallises a central point for the thesis: **LLMs are models and infrastructures that mediate meaning, not neutral tools that deliver it**. This aligns almost perfectly with the project’s interest in epistemic drift and archival infrastructures.

Two particularly useful moves:

1. **Relocating interpretive work.**  
   Interpretive decisions increasingly live in **model choice, embedding design, training corpora and similarity metrics**. For DDR, this means that choosing a general-purpose embedding vs a DDR-specific model is not technical housekeeping; it is a choice about how the archive can be “seen” computationally.

2. **LLM literacy as extension of critical reading.**  
   The authors explicitly cast “LLM literacy” as an extension of critical source work: one reads models and outputs as one reads texts (pp. 18–19). 

### Alternative explanations

Some of the optimism about “bridging close and distant reading” could also be read as **a function of improved tooling and corporate platforms**, not of inherent conceptual breakthroughs. That is, the inflection point may be infrastructural (APIs, RAG tools, hosted models) rather than epistemic. The authors hint at this in the infrastructure section but could press harder on political economy.

### Implications for practice, policy or theory

- **Practice:** DDR development must log and justify *every* modelling choice (models, embeddings, RAG pipelines, prompts) as methodological and interpretive decisions.  
- **Policy:** Institutional partners should treat LLM infrastructure acquisition (APIs, tooling) as governance issues, not just IT procurement.  
- **Theory:** The notion of LLMs as models-as-mediators folds neatly into HPSS debates about representation, idealisation and modelling (Morgan & Morrison), giving a theoretical frame for DDR as a computable epistemic apparatus.

### How does it shape your thinking?

It gives a **HPSS-legitimated vocabulary** to describe the DDR prototype:

- A **RAG-based LLM system** whose embeddings, retrieval, prompting and interface collectively act as an epistemic infrastructure for design-research history.  
- A tool that should **enhance, not replace**, interpretive practices of designers, historians and archivists.  
- A site where **LLM literacy** must be cultivated among users and collaborators.

---

## Evidence to quote or paraphrase  

- “We frame LLMs not as neutral tools but as epistemic infrastructures that encode assumptions about meaning, context, and similarity” (Abstract, p. 1).
- “The model itself becomes an epistemic infrastructure… a condensed representation of large text corpora” (p. 6).  
- “Text embeddings… are not neutral representations of meaning. Instead, they are trained to reflect particular notions of similarity” (p. 8). 
- “LLM literacy is foundational for interpretive research… researchers should understand how these models process language, generate responses, and embed assumptions” (pp. 18–19). 
- “LLMs should enhance, not replace, HPSS methodologies” (pp. 20–21).  
**Paraphrase:** Simons et al. argue that LLMs, including RAG systems, should be treated as epistemic infrastructures whose design choices—training data, embeddings, similarity metrics, prompts—encode interpretations of meaning and context; HPSS scholars must therefore cultivate LLM literacy, define their own benchmarks and corpora, and integrate LLMs in ways that expand, rather than displace, interpretive methods (pp. 6–10, 18–21). 

---

## Related works  

- Laubichler et al. (2019) – computational history of knowledge; three methodological challenges.  
- Simons (2024) – conceptual history with contextualised embeddings (Planck).  
- Zichert et al. (2025) – contextual embeddings for “virtual particle” concept history.  
- Bender et al. (2021) – “stochastic parrots” critique of scale, environmental and social harms.  
- Binz et al. (2025), Ziems et al. (2024) – LLMs in science and computational social science.  
- Dagdelen et al. (2024), Zhu et al. (2024a) – structured information extraction and knowledge-graph construction with LLMs.  

---

## Questions for further research  

- How should **DDR-specific benchmarks and corpora** be built to evaluate LLM behaviour on archival design-research material, respecting ambiguity and historical specificity?  
- What does **LLM literacy** look like in design schools and GLAM institutions, and how might it be taught?  
- How can the notion of **epistemic infrastructure** be operationalised for RAG systems: what metrics and documentation practices capture infrastructural effects?  
- How can dynamic modelling (semantic change, topic trajectories, revision tracking) be adapted to DDR timelines and institutional transformations?  
- What governance models best address the infrastructural and political issues raised in Section 6.5 for publicly funded archival LLM projects?