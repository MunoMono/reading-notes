---
title: "On the dangers of stochastic parrots: can language models be too big?"
authors: "Bender, Emily M. and Gebru, Timnit and {McMillan-Major}, Angelina and Shmitchell, Shmargaret"
year: 2021
journal: "Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT ’21)"
citation_key: Bender2021DangersStochasticParrots
doi: "10.1145/3442188.3445922"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Jan 09, 2026, 03:38 PM"
category: 1.1-Canonical-methods-texts---
# Scope of this note
This note covers *Bender et al.*’s full paper in *FAccT ’21* (pp. 610–623). It reads the text as a critical *methods-governance intervention* addressing the socio-technical infrastructures of large language models (LLMs). The analysis focuses on §§1–8: risk framing (p. 610–612), environmental/financial costs (pp. 613–615), “unfathomable training data” and documentation debt (pp. 615–617), benchmark epistemics (pp. 617–619), and the “stochastic parrot” critique of meaning illusion (pp. 619–622). It integrates these arguments into the doctoral project’s interest in epistemic drift, classification politics, and methodological accountability.

## Purpose and aim
### What research question or objective is being addressed?
The central question—explicitly framed on p. 610—is **“Can language models be too big?”** The authors aim to interrogate what scaling up entails: computationally, environmentally, epistemically, and ethically. Their purpose is to **re-situate progress metrics** in NLP by examining who bears the costs and who benefits, and by proposing institutional practices that pre-empt foreseeable harms rather than react to them. (pp. 610–612)

## Methodology
### Describe the research design, methods and sample size.
The paper is a **multi-source critical synthesis**, not an empirical study. It employs:
- **Descriptive quantification** of scaling trends (Table 1, p. 613), contrasting model size increases (GPT-2 → GPT-3 → T5 → Switch Transformer) with training-data magnitudes and energy demands.
- **Cross-disciplinary literature integration**, combining environmental-cost analyses (Strubell et al.), data-governance work (Gebru et al., Mitchell et al.), and semantic theory (Bender & Koller).
- **Conceptual analysis** of meaning versus form to argue that LMs cannot “understand” language in a communicative sense.
- **Normative method proposals**—budgeting for documentation, dataset curation, stakeholder/value analysis, and “premortems”—presented as research-design practices. (pp. 612–623)

## Key findings and arguments
1. **Scale produces externalised costs.** Training massive LMs incurs environmental damage (CO₂ emissions) and concentrates research power in institutions with extreme compute budgets, marginalising smaller actors. (pp. 613–615)
2. **“Unfathomable training data” undermines accountability.** Web-scale corpora are opaque; documentation and consent become impossible, creating “documentation debt” that forecloses later audit or redress. (pp. 615–617)
3. **Fluency ≠ understanding.** LMs are “stochastic parrots” (p. 619): systems that reproduce linguistic form without communicative intent. Humans anthropomorphise this fluency, generating misplaced trust, automation bias, and policy risk. (pp. 619–622)

## Relevance
- **Strand 1 (Historical epistemic drift):** The paper exemplifies a *counter-movement* against the linear “bigger-is-better” trajectory that defines post-BERT NLP. It articulates drift not as innovation but as infrastructural inertia. (pp. 610–612)
- **Strand 2 (Classification & archives):** The “documentation debt” argument parallels archival power critiques—unrecorded provenance erases accountability. The call to “budget for documentation” transforms archival ethics into a methodological demand. (pp. 615–617)
- **Strand 3 (Computational reconstruction):** The critique of benchmarks as epistemic governors aligns with the project’s interest in how classification systems shape what counts as “knowledge.” Benchmarks here act as *drift accelerators*. (pp. 617–619)

## What the authors bring to the table
### Key contributions and claims
- A four-part taxonomy of LM risks: **(1)** environmental/financial cost; **(2)** documentation debt and hegemonic data; **(3)** epistemic misreadings of fluency as understanding; **(4)** social/ethical harms of unaccountable deployment. (pp. 613–622)
- The **“stochastic parrot”** metaphor to capture the appearance of meaning without understanding. (p. 619)
- Concrete methodological recommendations: carbon-cost reporting, dataset documentation (Datasheets, Model Cards, Data Statements), premortems, and value-sensitive design. (pp. 622–623)

### How I respond to this evidence
- **Building on:** I can operationalise their pre-development recommendations (p. 622) as requirements for my own data and modelling pipelines—explicit budgets for documentation, stakeholder mapping, and anticipatory risk analysis.
- **Challenging:** The argument’s rhetorical breadth sometimes substitutes exemplars for empirical distribution; my project should avoid over-generalising anecdotal harms.
- **Informing practice:** Their linkage of data documentation to ethical accountability supplies a direct methodological template for my computational strand.

## Positioning this work
### What this literature will do for my project
- Provides a canonical ethical-methods framework connecting *classification, data governance,* and *method design*.
- Anchors my argument that epistemic instruments (models, datasets, benchmarks) are political infrastructures, not neutral tools. (pp. 610–617, 619–623)
### What it will not do
- Does not define quantitative thresholds for “too big.”  
- Offers limited empirical validation; recommendations rely on normative reasoning and exemplars.  
- Does not explore alternative architectures or small-model ecologies in detail. (pp. 610–623)

## Project integration
### Why it helps the project (evidence-linked)
- **Environmental accountability:** Calls for carbon-impact reporting and efficiency metrics as research-design constraints. (pp. 613–615)
- **Archival analogy:** “Documentation debt” directly parallels archival theory on provenance and legibility. (pp. 615–617)
- **Epistemic drift mechanism:** The human tendency to infer meaning from form (“parroting”) mirrors institutional drift—appearance of understanding without genuine comprehension. (pp. 619–622)

### Hooks into the project
- **Workstreams →** 
  - Ethics and infrastructures of classification.  
  - Computational epistemology (benchmarks as drift engines).  
  - Documentation and audit design.
- **Deliverables →** 
  - Documentation protocol template.  
  - Premortem worksheet for model-building phases.  
  - Comparative analysis of benchmark politics.
- **Stakeholders →** 
  - Supervisors/examiners (methodological rigour).  
  - Institutional data stewards.  
  - Design researchers and ML practitioners.

### Use across the methods spine
- [x] Framing and theory  
- [x] Study design  
- [x] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications

## Critical evaluation
### Strengths
- Integrates environmental, social, and epistemic critique into a unified governance argument.  
- Converts abstract ethics into *methodological instruments* (documentation, premortems).  
- Provides clear vocabulary (“stochastic parrot”, “documentation debt”) now standard in discourse. (pp. 613–623)
### Weaknesses
- Limited quantification; relies on secondary data for environmental costs.  
- Broad scope risks rhetorical overreach—policy and cognitive critiques compressed into one frame.  
- The “too big” question remains intentionally indeterminate. (pp. 610–623)
### Author credibility
Bender (linguistics, UW) and Gebru (ethics/AI) are authoritative interdisciplinary voices; both pioneered documentation standards (Data Statements, Datasheets). Credibility derives from cross-field synthesis rather than new experiments.  
### Contextual validity
Arguments generalise to all web-scale LMs; less directly applicable to tightly bounded, domain-specific or human-in-the-loop systems.  
### Comparisons
- **Versus Devlin et al. (2019 BERT):** Bender et al. diagnose the structural costs of the BERT paradigm (scale, benchmark capture).  
- **Versus Bowker & Star / Schwartz & Cook:** The politics of dataset curation reprises archival and classification ethics.  
- **Versus Jonas (2012):** Both advocate explicit methodological reflexivity—Jonas within design research, Bender et al. within ML.  

## Interpretation
### Analysis and insights
The “stochastic parrot” metaphor doubles as a **theory of epistemic drift**: outputs *appear meaningful* because humans project coherence, creating institutional dependence on fluent systems that lack accountability. The authors urge an inversion of research priorities—from *bigger models* to *better records*. For my PhD, this provides an evidential bridge between archival ethics and computational method design. (pp. 619–623)

### Critical thinking and rigour
Employs critical synthesis (pp. 613–619), conceptual analysis (pp. 619–622), and prescriptive frameworks (pp. 622–623). Rigour lies in its cross-field integration and its insistence that ethical reflection is part of method, not post-hoc commentary.

## Evidence to quote or paraphrase
- **Quote:** “Can language models be too big?” (p. 610)  
- **Quote:** “Size doesn’t guarantee diversity.” (p. 615)  
- **Quote:** “These systems are stochastic parrots.” (p. 619)  
- **Paraphrase:** The authors warn that dataset scale leads to “documentation debt”: once corpora become too large to document, accountability for harms becomes structurally impossible. (pp. 615–617)  
- **Paraphrase:** They call for explicit budgeting for data curation and stakeholder work, and for premortems to identify likely harms before system deployment. (pp. 622–623)

## Related works
Strubell et al. (2019) *Energy and Policy Considerations*; Schwartz et al. (2020) *Green AI*; Gebru et al. *Datasheets*; Mitchell et al. *Model Cards*; Bender & Koller (2020) *Climbing toward NLU*; Noble (2018) *Algorithms of Oppression*; Friedman & Hendry (Value Sensitive Design). (pp. 613–623)

## Questions for further research
- How can “documentation debt” be quantified as an audit metric?  
- What institutional mechanisms can enforce pre-development governance?  
- How can participatory dataset design re-distribute epistemic authority?  
- How can “fluency bias” be measured in human evaluators and mitigated in interface design?  
- What would a sustainable, small-model alternative ecosystem look like?

