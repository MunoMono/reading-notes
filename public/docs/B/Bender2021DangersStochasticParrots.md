---
title: "On the {{Dangers} of Stochastic Parrots: Can Language Models Be Too Big?}"
authors: "Bender, Emily M. and Gebru, Timnit and {McMillan-Major}, Angelina and Shmitchell, Shmargaret"
year: 2021
journal: "Proceedings of the 2021 {{ACM Conference} on Fairness, Accountability, and Transparency (FAccT ’21)"
citation_key: Bender2021DangersStochasticParrots
doi: "10.1145/3442188.3445922"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "16 Feb 2026, 15:33"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Feb 2026, 15:33"
north_star_sha1: "aca907f76a45"
constraints_source: "project/constraints.md"
category: 4.4-LLM as research method / epistemic instrument

project_rq_verbatim: "how might a testament epistemetic drift be used as an approach to activate the RCAs DDR archive?"
project_rq_working: "How might testamentary traces of epistemiv shift be used as an approach to activate the RCA’s DDR archive?"
model_title: "How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction"
model_strand: "S3"
model_strand_label: "How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics"
last_updated: "17 Feb 2026, 15:19"---
**RQ (supervisor verbatim):** how might a testament epistemetic drift be used as an approach to activate the RCAs DDR archive?  
**RQ (working):** How might testamentary traces of epistemiv shift be used as an approach to activate the RCA’s DDR archive?  
**Model title:** How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction  
**Primary strand:** S3 — How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics  

**Seams to watch (optional, pick 1):**
- Where conceptual shift becomes infrastructural drift
- How shift is materialised and distorted in institutional record-keeping
- How computational methods expose or amplify epistemic shift

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** how might a testament epistemetic drift be used as an approach to activate the RCAs DDR archive?  
**Why I’m reading this now (1 sentence):** This is a “limits + conditions” anchor for using large language models as method, so my thesis doesn’t treat computation as neutral instrumentation.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / Strand S3: the reconstruction method has costs, biases, and harm conditions that must be made explicit (i.e., legibility includes *provenance + constraints*, not just “better visualisation”).  
**Why this term, not alternatives (1–2 lines):** It gives a concrete vocabulary (documentation debt; stochastic parrot; automation bias; hegemonic worldview) for describing how computational reconstruction can *mislead* as well as reveal.  
**My benchmark for using it (1–2 criteria I will apply):** (1) Any ML/LLM move in my thesis must declare data provenance + omission risks; (2) any model output must be framed as *evidence about traces* (testaments), not as “knowledge” in itself.

# Position + moment (2–4 lines)
FAccT intervention (fairness/accountability/ethics) aimed at the NLP scaling moment: rapid expansion of model size + web-scale datasets, and “state-of-the-art” incentives outpacing governance. The authors position LM development as socio-technical and politically consequential (who is harmed, who is excluded, what gets treated as “representative”).  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** “Bigger models = better understanding” is treated as a category error: fluency ≠ meaning/understanding; scaling increases opacity and harm surface.

# The author’s main move (1 sentence)
They try to reframe large LMs as *risky socio-technical systems* by mapping predictable harms (cost, bias, misuse) and proposing concrete mitigations, in order to shift the field away from default scaling.

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Scaling LMs produces environmental + financial costs that should be treated as central evaluation criteria, not externalities.
- **Evidence (quote/paraphrase + page):** They explicitly foreground “environmental and financial costs” and recommend reporting and evaluating work by resource consumption. ``[@Bender2021DangersStochasticParrots, p. 1]``
- **Warrant (my words):** If progress is measured only by benchmark gains, the method hides its own conditions of possibility (energy, compute access, exclusion). Bringing costs into evaluation makes the method accountable and comparable.
- **So what for my thesis (a reusable sentence):** My reconstruction method must include a *cost/provenance ledger* (what it costs to produce a claim is part of what the claim *is*).  
- **Practice cross-check:** TODO (which DDR materials / pipeline steps incur compute + where I will document them)

## Claim 2
- **Claim (plain):** Web-scale training data is not representative; it privileges hegemonic viewpoints and creates “documentation debt” unless datasets are curated and documented.
- **Evidence (quote/paraphrase + page):** They state that current practice “privileges the hegemonic viewpoint” across participation → collection → filtering of web text. ``[@Bender2021DangersStochasticParrots, p. 5]`` They summarise that uncurated web datasets “encode hegemonic views” and therefore require “curating and documenting” training data. ``[@Bender2021DangersStochasticParrots, p. 6]``
- **Warrant (my words):** If your data source is structurally biased, then any “legibility” you reconstruct will reproduce that bias unless you surface and constrain it; missing documentation is itself a methodological error (“debt”).
- **So what for my thesis:** “Activation” of the DDR archive cannot mean “ingest everything”: it means selective, documented, contestable assemblage of testaments (and explicit statements about what is *absent*).  
- **Practice cross-check:** TODO (map DDR description standards / accession constraints to an explicit “what’s missing” register)

## Claim 3
- **Claim (plain):** LM deployment risks misleading humans (automation bias), enabling misuse, and amplifying hegemonic worldviews; mitigation requires pre-development evaluation tied to stakeholder values.
- **Evidence (quote/paraphrase + page):** They warn that apparent coherence + human interpretive habits heighten “automation bias, deliberate misuse, and amplification of a hegemonic worldview.” ``[@Bender2021DangersStochasticParrots, p. 7]`` They describe LMs generating text “without any reference to meaning: a stochastic parrot.” ``[@Bender2021DangersStochasticParrots, p. 8]`` They recommend “pre-development exercises” evaluating fit with goals and “stakeholder values.” ``[@Bender2021DangersStochasticParrots, p. 1]``
- **Warrant (my words):** When outputs look like sense, readers over-trust them; therefore the method must design for interpretive risk (who might misread, what harms follow, what safeguards constrain use).
- **So what for my thesis:** Any computational “legibility” claim must include a *misreadability clause*: how a viewer could be misled, and what design controls keep the reconstruction honest.  
- **Practice cross-check:** TODO (define stakeholders for DDR “activation” and draft a pre-mortem for one reconstruction workflow)

# Definitions / terms this changes (only the ones that matter)
- **Stochastic parrot:** a system that strings together linguistic forms probabilistically “without any reference to meaning.” ``[@Bender2021DangersStochasticParrots, p. 8]``
- **Documentation debt (working use):** when data/model provenance is under-specified, future interpretation + accountability costs accumulate (i.e., you can’t later justify what your method actually did). TODO (needs page for explicit definition phrase)

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - Cost + provenance are part of method; include them in evaluation, not footnotes. ``[@Bender2021DangersStochasticParrots, p. 1]``
  - “Legibility” must include bias pathways (who is overrepresented; who is excluded) and documentation practices. ``[@Bender2021DangersStochasticParrots, pp. 5–6]``
  - Treat LM outputs as interpretive risk objects (automation bias), not neutral readings. ``[@Bender2021DangersStochasticParrots, pp. 7–8]``
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - Frame computational reconstruction as *curated testimony-making* (testaments with provenance), rather than extraction of “truth” from the archive.
  - Build a “misreadability + safeguards” paragraph template for every ML/visual analytic output in the thesis.
- **What question it raises next (1–2 bullets):**
  - What counts as “curation” and “documentation” for DDR materials specifically (given archival description standards and institutional constraints)?  
  - What UI/visual rhetoric patterns in my atlas could trigger automation bias—and how do I design against that?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** Methods chapter, section introducing LLM/ML as epistemic instrument: “why bigger models are not neutral upgrades; why provenance/cost must be disclosed.”  
- **Where I will name the title in running text (first-use rule):** First mention: *Bender et al., “On the Dangers of Stochastic Parrots” (2021)*; thereafter: *Bender et al. (2021)*.  
- **Link to my practice evidence (one concrete cross-reference):** TODO (choose 1 DDR series/item where description gaps make “documentation debt” visible)  
- **Workstreams →** S3 method design; S2 archival description + omission register  
- **Deliverables →** provenance ledger; dataset/selection notes; pre-mortem; safeguards checklist  
- **Stakeholders →** DDR archive users; RCA institutional custodians; communities represented/misrepresented in records; thesis examiners (method accountability)

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is not a technical blueprint for building an LM; it is a governance + epistemic risk framework for interpreting and deploying LMs.  
- **Risk if misused (1 sentence):** If I cite it only as “AI is dangerous,” I’ll collapse a precise methodological argument into vibes and lose the actionable constraints it provides.

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 1, 5–8
- **First full note (write it out here):**  
  Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell, “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?,” in *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT ’21)* (2021), https://doi.org/10.1145/3442188.3445922.
- **Short note form:**  
  Bender et al., “Dangers of Stochastic Parrots.”
- **One quote worth lifting (≤2 lines):** “...without any reference to meaning: a stochastic parrot.” ``[@Bender2021DangersStochasticParrots, p. 8]``
- **One paraphrase worth keeping:** They argue that web-scale data pipelines privilege hegemonic viewpoints, creating documentation debt unless curation + documentation are treated as core work. ``[@Bender2021DangersStochasticParrots, pp. 5–6]``

# Related works (only if it directly connects)
- TODO: link to dataset documentation practices (e.g., datasheets, data statements) once selected for DDR pipeline.

# Follow-ups (next actions, not vibes)
- What I will read next: TODO (pick one “documentation practices” / datasheets paper to operationalise Claim 2)
- What I will test or write next: Draft a one-page “provenance + misreadability” checklist for my atlas outputs, then apply it to one trial reconstruction.
