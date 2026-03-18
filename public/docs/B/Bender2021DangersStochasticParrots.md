---
title: "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"
authors: "Bender, Emily M.; Gebru, Timnit; McMillan-Major, Angelina; Shmitchell, Shmargaret"
year: 2021
journal: "Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency"
citation_key: Bender2021DangersStochasticParrots
doi: "10.1145/3442188.3445922"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Interpretability, provenance, and retrieval"
source_type: "Supporting"
last_updated: "18 Mar 2026, 15:23"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.2 Interpretability, provenance, and retrieval  
**Source type:** Supporting  

**Seams to watch (optional, pick 1):**
- When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Why I’m reading this now (1 sentence):** I need a foundational critique of large language models to set limits on how I use LLMs in the computational strand, especially around extraction, retrieval, interpretation, and trust.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / S3.2 interpretability, provenance, and retrieval; it helps me say that language-model outputs should not be confused with understanding, that training data and model scale introduce ethical and epistemic risks, and that any LLM use in the thesis must be carefully bounded, documented, and source-linked.  
**Why this term, not alternatives (1–2 lines):** Bender et al.’s term **stochastic parrots** is more useful than generic AI-scepticism because it directly names the problem of fluent form without grounded meaning. That is exactly the danger in archival work, where plausible output can easily be mistaken for interpretation.  
**My benchmark for using it (1–2 criteria I will apply):** I will use this text where LLMs risk being treated as if they “understand” archival materials, and where I need to justify provenance-aware, human-supervised, non-generative uses over open-ended synthetic interpretation.

# Position + moment (2–4 lines)
Bender, Gebru, McMillan-Major, and Shmitchell write from linguistics, fairness/accountability studies, and critical AI in the context of the rapid expansion of large language models between BERT, GPT-3, and Switch-C. The paper is both technical critique and ethical intervention: it challenges the field’s scaling logic by foregrounding environmental cost, biased training data, mistaken claims about language understanding, and the social harms of synthetic text. `[@Bender2021DangersStochasticParrots, pp. 610–612, 618–619]`
**Canon assumptions to problematise / update for 2026 (1–2 lines):** This text is most useful when read not as anti-ML in general, but as a demand to distinguish between fluency and understanding, and to design language-technology research around accountability, documentation, and harm mitigation rather than scale alone. `[@Bender2021DangersStochasticParrots, pp. 610–611, 617–619]`

# The author’s main move (1 sentence)
They try to redirect language-model research away from the pursuit of ever-larger models by analysing environmental cost, training-data bias, misunderstanding of model capabilities, and downstream harms in order to argue for more careful, accountable, and better-documented alternatives.

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Bender et al. argue that large language models are often mistaken for systems that understand language, when in fact they model form without grounded meaning.
- **Evidence (quote/paraphrase + page):** They explicitly state that LMs are “not performing natural language understanding” and only succeed where tasks can be approached through manipulation of linguistic form. Later, in the “Stochastic Parrots” section, they argue that LM-generated text is not grounded in communicative intent, world models, or shared meaning, and describe an LM as “a system for haphazardly stitching together sequences of linguistic forms” according to probability. `[@Bender2021DangersStochasticParrots, pp. 610–611, 615–617]`
- **Warrant (my words):** This is the key epistemic argument. The danger is not only technical overclaiming; it is the confusion of fluent output with meaningful, accountable interpretation.
- **So what for my thesis (a reusable sentence):** Bender et al. help me argue that any LLM use on the DDR archive must be framed as assistance with form-level operations such as extraction, retrieval, or summarisation scaffolds, not as historical understanding or interpretation in itself.
- **Practice cross-check:** This directly limits how I describe S3 LLM components: extracted entities, generated descriptions, or suggested relations must remain tied to source records and expert review rather than presented as the archive “speaking.” TODO (needs S3 methods cross-link).

## Claim 2
- **Claim (plain):** The paper argues that large web-scale training data encode hegemonic viewpoints and biases, which are then reproduced and amplified by language models.
- **Evidence (quote/paraphrase + page):** In section 4, the authors argue that Internet-scale datasets are not automatically diverse or representative; instead, participation, moderation, collection, and filtering practices privilege hegemonic viewpoints. They document how such corpora encode gender, racial, disability, and intersectional biases, and recommend curation and documentation rather than indiscriminate scaling. `[@Bender2021DangersStochasticParrots, pp. 613–616]`
- **Warrant (my words):** This matters because it links model behaviour to social and infrastructural histories of data collection. Bias is not an accidental side effect that appears after training; it is built into the corpus and intensified by modelling choices.
- **So what for my thesis:** Bender et al. support a strong caution against using off-the-shelf LLMs as if they were neutral tools for archival analysis, especially where the DDR archive intersects with gender gaps, institutional hierarchy, and classificatory omission.
- **Practice cross-check:** This is especially relevant to your gender-gap thread and to any LLM-based processing of archival descriptions, oral histories, or secondary texts, where existing marginalisations could be reinforced rather than surfaced critically. TODO (needs gender-gap / metadata cross-link).

## Claim 3
- **Claim (plain):** Their positive recommendation is that language-technology work should prioritize documentation, careful dataset curation, stakeholder analysis, and alternatives to sheer model scaling.
- **Evidence (quote/paraphrase + page):** In sections 3, 4, and 7 they recommend reporting environmental and financial costs, budgeting for documentation and curation from the start, using model cards and datasheets, carrying out pre-development reflection on harms and stakeholder values, and exploring research directions beyond ever larger language models. `[@Bender2021DangersStochasticParrots, pp. 610, 615–616, 618–619]`
- **Warrant (my words):** This is important because the paper does not stop at critique. It offers a design ethic centred on documentation, accountability, and socially situated evaluation.
- **So what for my thesis:** Bender et al. give me a strong rationale for making the computational strand document its data sources, transformations, prompts, limits, and intended uses, and for preferring bounded archival workflows over open-ended generative systems.
- **Practice cross-check:** This aligns directly with Jaillant and Aske on workflow transparency, Boyd Davis/Vane/Kräutli on interrogability, Foka and Griffin on bias in cultural heritage AI, and Marciano on visible computational-archival pipelines. TODO (needs methods integration note).

# Definitions / terms this changes (only the ones that matter)
- **Stochastic parrot:** a language model that produces fluent sequences through probabilistic patterning of form rather than grounded understanding; I will use this as a cautionary term against overstating LLM interpretative capacity in archival work. `[@Bender2021DangersStochasticParrots, pp. 616–617]`
- **Unfathomable training data:** web-scale corpora so large and poorly documented that bias, selection, and exclusions become difficult to inspect or account for; I will use this as a warning against generic foundation-model assumptions in S3. `[@Bender2021DangersStochasticParrots, pp. 613–616]`
- **Documentation debt:** the condition where datasets become too large and underdescribed to document properly after the fact; I will use this as a key risk in any archive-to-model pipeline. `[@Bender2021DangersStochasticParrots, p. 615]`
- **Synthetic but seemingly coherent text:** generated language that invites interpretation as meaningful and intentional even when no grounded communicative intent exists; I will use this term when discussing why provenance and human oversight matter in archival interfaces. `[@Bender2021DangersStochasticParrots, pp. 616–618]`
- **Value-sensitive design / stakeholder analysis:** the recommendation that language technologies be designed around identifiable stakeholders, harms, and values from the outset; I will use this as a support for methods decisions in S3. `[@Bender2021DangersStochasticParrots, pp. 618–619]`

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It gives me the clearest limit-case argument for what LLMs should not be allowed to claim in the thesis.
  - It is especially useful because it ties epistemic overclaiming to environmental, social, and design-process harms.
  - It provides a strong ethical and methodological frame for keeping the computational strand accountable.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I will present LLMs in the thesis as bounded tools for extraction, retrieval support, or structured assistance, not as engines of historical understanding.
  - I will use this paper to justify explicit reporting of sources, transformations, prompts, limitations, and human review whenever language models enter the workflow.
- **What question it raises next (1–2 bullets):**
  - Which parts of my S3 workflow genuinely need language-model assistance, and which could be done more transparently with lighter or non-generative methods?
  - How can I make any generated or model-assisted output visibly subordinate to archival evidence rather than rhetorically equivalent to it?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the methods chapter where I set limits on LLM use in S3.2/S3.3, especially in the paragraph distinguishing extraction and retrieval support from interpretation, and in any ethics/limitations section on computational methods.
- **Where I will name the title in running text (first-use rule):** First mention in the computational methods limitations section: *In “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?” (2021), Bender et al. argue...*
- **Link to my practice evidence (one concrete cross-reference):** Use alongside any DDR pilot workflow involving summarisation, extraction, metadata enrichment, or prompt-based retrieval, especially where there is a risk of plausible but misleading generated output. TODO (needs exact S3 cross-reference).
- **Workstreams →** Interpretability; provenance; retrieval; multimodal ML; methods ethics.
- **Deliverables →** S3 limitations paragraph; LLM-use rationale; provenance-and-review note; literature map node.
- **Stakeholders →** Examiners; supervisors; archival studies readers; HCI/AI readers; digital humanities readers.

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is strongest as a critical framework for the risks and limits of large language models and is less useful as a direct guide to archival interface design or multimodal document extraction in one specific archive.
- **Risk if misused (1 sentence):** If I use it too broadly, I could collapse all computational work in S3 into a general anti-LLM stance instead of distinguishing carefully between risky generative interpretation and more bounded, auditable archival uses.

# Methods spine tags (tick what it actually touches)
- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 610–611, 613–616, 616–619
- **First full note (write it out here):**  
  Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell, “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?” in *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency* (New York: ACM, 2021), 610–623.
- **Short note form:**  
  Bender et al., “On the Dangers of Stochastic Parrots,” 610–611.
- **One quote worth lifting (≤2 lines):** “LMs are not performing natural language understanding” (p. 610).
- **One paraphrase worth keeping:** Bender et al. argue that large language models generate fluent form without grounded understanding, while also reproducing biases, environmental costs, and accountability problems that make scale-driven deployment ethically and epistemically risky. (pp. 610–619)

# Related works (only if it directly connects)
- Boyd Davis, Vane, and Kräutli, “Can I Believe What I See?”
- Foka and Griffin, “AI, Cultural Heritage, and Bias”
- Jaillant and Aske, “Are Users of Digital Archives Ready for the AI Era?”
- Marciano, “Towards a New Discipline of Computational Archival Science (CAS)”
- Vafaie et al., “End-to-end Information Extraction from Archival Records with Multimodal Large Language Models”

# Follow-ups (next actions, not vibes)
- What I will read next: A paper on provenance-aware or explainable archival AI that shows how bounded, source-linked model use can avoid some of the risks Bender et al. identify.
- What I will test or write next: Draft the paragraph in S3 that distinguishes acceptable LLM roles in the thesis from unacceptable ones, then apply that distinction to one concrete DDR pilot workflow.