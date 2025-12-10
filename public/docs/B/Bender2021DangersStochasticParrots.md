---
title: "On the dangers of stochastic parrots: can language models be too big?"
authors: "Bender, Emily M. and Gebru, Timnit and McMillan-Major, Angelina and Shmitchell, Shmargaret"
year: 2021
journal: "Proceedings of the 2021 ACM Conference"
citation_key: Bender2021DangersStochasticParrots
doi: "10.1145/3442188.3445922"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 10, 2025, 02:05 PM"
category: 4.4-LLM-as-research-method/epistemic-instrument
---
# Scope of this note
This note critically reads the full argument structure of *Stochastic Parrots*, with particular focus on the environmental critique (pp. 610–613), data documentation and representational harm (pp. 613–616), the “stochastic parrots” metaphor and epistemic argument (pp. 616–618), and the policy and methodological recommendations (pp. 618–620). The analysis explicitly links these concerns to the DDR project’s bounded, provenance-led LLM methodology.

---

## Purpose and aim  
### What research question or objective is being addressed?

The paper asks whether scaling language models without limit is ethically, environmentally, or epistemically defensible. It frames its core question—“Can language models be too big?”—as a challenge to the field’s assumption that increased scale equals progress (p. 610). Its aims are to:  
1. Expose the hidden costs (environmental, financial, social) of large-scale model training.  
2. Demonstrate that LMs trained on opaque, uncurated corpora reproduce and amplify historical and structural inequalities.  
3. Reassert that fluency alone is not evidence of understanding, resisting anthropomorphic interpretations of LMs.  
4. Propose alternative research directions grounded in curation, documentation, and social accountability.

---

## Methodology  
### Describe the research design, methods and sample size.

- **Design:** A position paper combining conceptual critique, literature synthesis, and normative argumentation.  
- **Sources:** Prior studies on carbon emissions from deep learning (Strubell et al.), bias audits of NLP systems, governance frameworks (e.g., Datasheets for Datasets), and pragmatic linguistics.  
- **Evidence base:**  
  - Quantitative environmental estimates drawn from published studies (p. 612).  
  - Empirical examples of model bias, toxicity, and misclassification (pp. 614–615).  
  - Case studies of harmful system deployment (pp. 617–618).  
- **Method:** Structured argumentation rather than empirical experimentation; data is drawn from secondary research.  
- **Sample size:** Not applicable—the object of analysis is the research field and its infrastructural practices.

This methodology is appropriate for an agenda-setting intervention intended to shift norms rather than report novel experiments.

---

## Key findings and arguments  
### Summarise the main results and conclusions

1. **Environmental and financial costs of model scaling are unsustainable and inequitable.**  
   - Training large models can emit hundreds of tonnes of CO₂-equivalent (p. 612).  
   - Small accuracy improvements often require exponentially more computation.  
   - These costs concentrate power in organisations able to afford large-scale compute, exacerbating inequity (pp. 612–613).

2. **Unfathomably large datasets encode and amplify structural biases.**  
   - Web-scraped datasets overrepresent specific demographic groups and exclude others (pp. 613–614).  
   - Filtering processes erase marginalised voices; for example, profanity filters remove queer discourse and discussions of minoritised identities (p. 614).  
   - The resulting representational harms are reproduced by downstream systems.

3. **Language models do not understand: they remix surface forms (“stochastic parrots”).**  
   - LMs operate purely on statistical co-occurrences, without grounding in meaning or communicative intent (pp. 615–617).  
   - Their fluency invites over-interpretation by users, masking fundamental epistemic limitations (p. 617).

4. **LMs create both allocational and representational harms.**  
   - Bias leads to discriminatory outputs (e.g., increased toxicity for identity terms) (pp. 614–615).  
   - Models can amplify misinformation, extremist content, and harmful narratives at scale (pp. 617–618).  
   - LMs may leak memorised personal data, raising privacy risks (p. 618).

5. **Mitigation is possible only through explicit governance: documentation, curation, environmental accounting, and constrained system design.**  
   - “Documentation debt” emerges when datasets are too large to audit (p. 615).  
   - Researchers should collect only the amount of data they can responsibly document (pp. 615–616).  
   - Pre-mortems, impact assessments, energy reporting, and clear boundaries on system purpose are recommended (pp. 618–620).

---

## Relevance  
### How does it link to the research questions or framework?

- **Epistemic drift:**  
  The paper articulates how LMs drift away from interpretability as they scale, mirroring the thesis’s focus on institutional epistemic drift and the consequences of unbounded system design.  
- **Archival governance:**  
  Its argument that documentation is an ethical obligation directly supports the DDR project's emphasis on provenance-rich linked data.  
- **LLM as research instrument:**  
  By denying that LMs “understand”, the paper positions them as tools, not epistemic agents—fully aligned with the project’s methodology.  
- **Energy and institutional responsibility:**  
  The critique of carbon cost is essential for framing the DDR LLM as a deliberately modest, efficient system.

---

## Project integration  
### Why it helps the project (evidence-linked)

- The warning that scaling without documentation produces “documentation debt” (p. 615) justifies the DDR model’s commitment to tightly curated corpora [@Bender2021DangersStochasticParrots].  
- The argument that systems trained on undifferentiated web data reproduce hegemonic worldviews (pp. 613–614) strengthens the rationale for a domain-bounded archival model.  
- The ecological critique (p. 612) supports the methodological decision to use smaller models and local compute.  
- The epistemic case that LMs manipulate form but not meaning (p. 617) underwrites the thesis’s principle that human interpretation remains central.

### Hooks into the project  
- **Workstreams →**  
  - WS2: Linked-data schema design guided by documentation-first principles.  
  - WS3: RAG pipeline that foregrounds provenance to avoid misinterpretation.  
  - WS4: Ethics and governance, particularly environmental accounting.

- **Deliverables →**  
  - Model card emphasising bounded scope, curation, and energy use.  
  - Methodological chapter defining LLMs explicitly as epistemic instruments.  
  - Narrative framing in the introduction about the stakes of responsible AI.

- **Stakeholders →**  
  - Archives and Collections: Assurance that the system protects provenance and interpretive integrity.  
  - Research Integrity: Justification for modest, transparent infrastructure.  
  - DDR participants/alumni: Mitigation of representational harms.

### Use across the methods spine  
- [x] Framing and theory  
- [x] Study design  
- [ ] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications

---

## Critical evaluation  

### Strengths
- Provides a clear moral and epistemic vocabulary (“stochastic parrots”, “documentation debt”).  
- Interdisciplinary authority: combines linguistics, AI ethics, environmental science, and archival theory.  
- One of the first papers to coherently articulate the risks of foundation model scaling.  
- Actionable policy recommendations, not merely critique.

### Weaknesses and limitations
- Focus on US/English-language contexts limits generalisability.  
- Lacks empirical testing of proposed mitigations.  
- May understate the potential benefits of carefully managed, domain-specific LLMs.  
- The argument on meaning may appear essentialist to contemporary computational semantics research.

### Author’s credibility
- Bender: leading computational linguist, established critic of model–meaning conflation.  
- Gebru: pioneer in bias and fairness research; high-impact track record.  
- McMillan-Major and Mitchell: active in responsible NLP research.  
Collectively, they form one of the most authoritative teams in AI ethics.

### Contextual validity
- Although written in 2021, the argument remains prescient; subsequent LLM expansions validate many concerns.  
- However, the emergence of smaller, efficient open models complicates the claim that capability necessarily requires extreme scale.

### Comparisons
- Strongly contrasts with Bommasani et al.’s optimistic framing of foundation models.  
- Aligns with Green AI (Schwartz et al.) and Datasheets for Datasets (Gebru et al.).  
- Provides conceptual ground for later methodological guidance on LLM use in research.

---

## Interpretation  
### Analysis and insights
- The paper frames LLMs as infrastructural rather than purely technical systems. This is essential for a PhD concerned with epistemic conditions.  
- It clarifies that the key risk is not the model output alone, but the social ecology that interprets fluency as authority.  
- For the DDR project, the insight is that epistemic responsibility must be engineered into every layer: corpus, schema, interface, prompts, evaluation.

### Implications
- **Practice:** Design smaller, well-documented models with explicit purpose boundaries.  
- **Policy:** Institutions should mandate energy reporting and documentation standards.  
- **Theory:** Supports a constructivist view of LLMs as meaning *producers* only through users’ interpretive labour.

### How does it shape the project?
It justifies a fundamental methodological principle: **the DDR LLM must not be a stochastic parrot**, and that requires deliberate scoping, provenance, and governance.

---

## Evidence to quote or paraphrase  
- **Quote:** “an LM is a system for haphazardly stitching together sequences of linguistic forms … without any reference to meaning—a ‘stochastic parrot’” (p. 617).  
- **Paraphrase:** The authors warn that assembling vast datasets produces “documentation debt,” making responsible data governance impossible (pp. 615–616).  

---

## Related works  
- Bommasani et al. (2021) – Foundation models.  
- Gebru et al. (2021) – Datasheets for Datasets.  
- Strubell et al. (2019) – Energy costs in NLP.  
- Schwartz et al. (2020) – Green AI.  
- Bender & Koller (2020) – Form vs meaning in NLP.  
- Marciano (2022), Jaillant (2022–2024) – Computational archival science.

---

## Questions for further research  
- How can provenance-rich, bounded LLMs be designed to avoid stochastic parrot behaviours in practice?  
- How can documentation debt be measured or monitored over time in real-world research systems?  
- What interface designs reduce the risk of over-ascribing authority to fluent but ungrounded LLM outputs?  
- How should archival institutions integrate energy accounting into digital infrastructure planning?  
- Can epistemic drift be modelled formally for LLM-based research systems?