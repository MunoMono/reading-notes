---
title: "Supervised and Unsupervised: Approaches to Machine Learning for Textual Entities"
authors: "Hodel, T"
year: 2022
journal: "Archives, Access and Artificial Intelligence Working with Born-Digital and Digitized Archival Collections"
citation_key: Hodel2022SupervisedUnsupervisedApproaches
doi: "10.1007/978-3-476-05446-3_20"
url: "http://link.springer.com/10.1007/978-3-476-05446-3_20"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "17 Feb 2026, 14:16"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Feb 2026, 15:33"
north_star_sha1: "aca907f76a45"
constraints_source: "project/constraints.md"
category: 6.2-DH/computational-methods

project_rq_verbatim: "how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?"
project_rq_working: "How might testamentary traces of epistemic shift be used as an approach to activate the RCA’s DDR archive?"
model_title: "How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction"
model_strand: "S3"
model_strand_label: "How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics"
last_updated: "17 Feb 2026, 15:19"---
**RQ (supervisor verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**RQ (working):** How might testamentary traces of epistemic shift be used as an approach to activate the RCA’s DDR archive?  
**Model title:** How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction  
**Primary strand:** S3 — How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics  

**Seam to watch (picked):** How computational methods expose or amplify epistemic shift

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**Why I’m reading this now (1 sentence):** To pin down *where* ML methods quietly change what counts as evidence, and how that “shift” can be documented as a trace/testament in an archival workflow.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / computational reconstruction: ML does not just “process” archives; it alters evidential assumptions and introduces method-shaped bias that must be documented and made legible.  
**Why this term, not alternatives (1–2 lines):** Hodel is useful because he frames supervised/unsupervised as *methodological and epistemological* differences, not only technical differences. :contentReference[oaicite:0]{index=0}  
**My benchmark for using it (1–2 criteria I will apply):** I will only use it where I can (a) cite a concrete mechanism (training data, topic-number selection, interpretive cycle) and (b) translate it into an archive-facing “trace” I can document (provenance + bias note). :contentReference[oaicite:1]{index=1}  

# Position + moment (2–4 lines)
Hodel writes from DH / archival computing (University of Bern), in a moment where humanities-facing ML has moved from niche experiments to accessible toolchains (e.g., deep learning libraries; HTR platforms). He is explicitly trying to make the “black box” discussable for humanities method, and to treat ML as a methodological object requiring critique. :contentReference[oaicite:2]{index=2}  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** “Accuracy metrics = quality” is treated as insufficient; he insists bias/uncertainty live beyond the score and must be surfaced methodologically. :contentReference[oaicite:3]{index=3}  

# The author’s main move (1 sentence)
They try to **make ML usable *critically* in humanities work** by **contrasting unsupervised topic modeling with supervised deep-learning HTR** in order to **expose the epistemological assumptions and biases each method introduces**. :contentReference[oaicite:4]{index=4}  

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** ML changes humanities research *quietly*: not by replacing scholarship, but by shifting how sources are found, processed, and judged.  
- **Evidence (quote/paraphrase + page):** He argues procedures are being altered “slowly and sometimes impalpably” and that methodological implications are under-discussed. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 158–159]`` :contentReference[oaicite:5]{index=5}  
- **Warrant (my words):** If infrastructures (search, databases, ML tools) reshape access and selection, then they reshape what becomes “the archive” in practice—and what counts as a credible evidential pathway.  
- **So what for my thesis (a reusable sentence):** *In the DDR archive, epistemiv shift will be observable not only in content, but in the methods used to surface and organise it; ML is part of the drift, not a neutral lens.*  
- **Practice cross-check:** TODO — identify one DDR workflow where retrieval/ranking/metadata tooling changes what gets seen first (e.g., catalogue search vs embedding search).

## Claim 2
- **Claim (plain):** Unsupervised topic modeling produces patterns that still require human interpretation; it forces a move from close reading to corpus-level “birds-eye” heuristics—and that interpretive step is a bias site.  
- **Evidence (quote/paraphrase + page):** He describes topic modeling as token co-occurrence clustering where scholars “must still interpret the output,” and notes the method pushes perspective shifts from page-level reading to scanning thousands of pages (plus problems: choosing topic number; “non-topical vocabularies”; corpus-induced bias; user interpretation bias). ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 157–168]`` :contentReference[oaicite:6]{index=6}  
- **Warrant (my words):** If topics are *not* self-evident (and can be noise-heavy), then “what the model says” is partly produced by parameter choices + interpretive labour—so the output is a *constructed* testament requiring documentation.  
- **So what for my thesis (a reusable sentence):** *Topic models can function as “testaments” of drift only if I record their parameter choices, corpus boundaries, and interpretive decisions as part of the evidential chain.*  
- **Practice cross-check:** TODO — define a DDR pilot: which corpus slice; what “entity” is (record, file, series); what topic-K choice; how I will log interpretive decisions.

## Claim 3
- **Claim (plain):** Supervised deep learning (e.g., HTR) widens access but embeds training-set bias and creates a black-box dependency: you can tweak inputs, not the internal reasoning.  
- **Evidence (quote/paraphrase + page):** He notes HTR’s strong results (READ/Transkribus context), but stresses that “ground truth” training/validation is human-made, the model learns transcription decisions implicitly, and outputs can “hallucinate” learned formulaic text even where none exists—illustrating training-set imprint and black-box behaviour. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 169–173]`` :contentReference[oaicite:7]{index=7}  
- **Warrant (my words):** If the model’s competence is inseparable from annotation choices and corpus formulae, then “the recovered text” is partly a product of method—so the reconstruction must carry provenance + risk statements as first-class metadata.  
- **So what for my thesis (a reusable sentence):** *HTR and similar supervised reconstructions should be treated as archival interventions whose epistemic assumptions (ground truth, character set, expansion rules) must be surfaced as part of the archive’s activation.*  
- **Practice cross-check:** TODO — pick one DDR handwriting/scan subset and specify: transcription conventions; who annotates; how I store training/validation splits; what provenance note ships with outputs.

# Definitions / terms this changes (only the ones that matter)
- **Unsupervised learning:** algorithms search for patterns/clusters without a predetermined target; interpretation remains with the scholar. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 161–163]`` :contentReference[oaicite:8]{index=8}  
- **Supervised learning:** aligns input to a human-determined “desired output” via training; optimisation moves output toward that target. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 161]`` :contentReference[oaicite:9]{index=9}  
- **Ground truth:** “correct” data prepared by humans for training and evaluation; the term hides human judgement and bias. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 161–173]`` :contentReference[oaicite:10]{index=10}  
- **Bias (method-facing):** enters through corpus selection, parameter choices, and interpretive reading of outputs; not only a moral category but a structural property of the method. ``[@Hodel2022SupervisedUnsupervisedApproaches, p. 167–174]`` :contentReference[oaicite:11]{index=11}  

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - Treat ML outputs as *mediated documents* that require provenance, not as transparent evidence. :contentReference[oaicite:12]{index=12}  
  - Use supervised/unsupervised contrast to structure my methods chapter: “where interpretation sits” and “where bias enters.” :contentReference[oaicite:13]{index=13}  
  - Operationalise “testament” as *logged decisions*: corpus boundary + parameters + annotation conventions + evaluation limits.  
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - Instead of “bias is bad,” write: *bias is inevitable; my job is to surface it as an evidential attribute and risk condition.* :contentReference[oaicite:14]{index=14}  
- **What question it raises next (1–2 bullets):**
  - What is the *minimum* provenance schema I need so that DDR ML reconstructions remain contestable and citable as evidence?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** Methods chapter, section on “Reconstruction as archival intervention” + subsection “Topic models vs HTR: interpretability and bias sites.”  
- **Where I will name the title in running text (first-use rule):** First mention in Methods chapter: *Tobias Hodel, “Supervised and Unsupervised: Approaches to Machine Learning for Textual Entities”* (full title once). :contentReference[oaicite:15]{index=15}  
- **Link to my practice evidence (one concrete cross-reference):** TODO — connect to a DDR experiment log (e.g., “DDR-ML-PILOT-01: topic model parameter sheet” or “DDR-HTR-PILOT-01: transcription conventions + CER report”).  
- **Workstreams →** S3 reconstruction + provenance logging  
- **Deliverables →** “Method cards” for topic modeling and HTR (inputs/outputs/bias sites/provenance fields)  
- **Stakeholders →** DDR archive team; thesis examiners; future users of reconstructed corpora  

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** Hodel is strongest as a methodological-epistemological framing paper, not as a step-by-step implementation guide. :contentReference[oaicite:16]{index=16}  
- **Risk if misused (1 sentence):** If I cite him to justify ML outputs without logging parameters/training decisions, I reproduce the black-box problem he is warning against. :contentReference[oaicite:17]{index=17}  

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 157–159 (framing + need for method critique), p. 161–168 (topic modeling mechanics + bias), p. 169–174 (HTR training + black box + ground truth). :contentReference[oaicite:18]{index=18}  
- **First full note (write it out here):** TODO — write full Chicago note once you confirm the edited book details from your BibTeX (editor(s), publisher, place, page range).  
- **Short note form:** Hodel, “Supervised and Unsupervised,” p. __.  
- **One quote worth lifting (≤2 lines):** TODO (needs page + exact wording).  
- **One paraphrase worth keeping:** Metrics like F1-score indicate intended-result performance but do not surface uncertainty or unintended consequences; method critique must address that gap. (p. 162) :contentReference[oaicite:19]{index=19}  

# Related works (only if it directly connects)
- Devlin et al. (BERT) as example of pretrained-model reuse and induced bias (mentioned by Hodel). ``[@Devlin2019BERTPretrainingDeep]`` TODO (confirm citekey in your bib) :contentReference[oaicite:20]{index=20}  

# Follow-ups (next actions, not vibes)
- What I will read next: Putnam 2016 on digitised sources “shadows” (cited by Hodel) for a stronger archive-facing argument. :contentReference[oaicite:21]{index=21}  
- What I will test or write next:
  - Draft a 1-page “DDR ML provenance minimum” checklist (corpus boundary, parameters, training conventions, evaluation metric + limitations).
  - Start a DDR pilot log template so each ML output becomes a citable “testament” with documented bias sites.
