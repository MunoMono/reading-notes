---
title: "Trust Me on This: A User Study of Trustworthiness for RAG Responses"
authors: "Łajewska, Weronika and Balog, Krisztian"
year: 2026
journal: "Proceedings of the 48th European Conference on Information Retrieval (ECIR 2026)"
citation_key: Lajewska2026TrustMeThis
doi: "10.48550/ARXIV.2601.14460"
url: "https://arxiv.org/abs/2601.14460"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:31"
last_updated: "16 Sept 2026"
north_star_source: "project/north-star.yml"
north_star_mtime: "14 Sep 2026, 16:11"
north_star_sha1: "9df80fcd2e16"
category: "S3: Surfacing and reactivating traces computationally"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Methodological anchor"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "03 RAG, retrieval and source attribution"
  - "07 Interface authority, ranking and retrieval bias"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Methodological anchor  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 03 RAG, retrieval and source attribution; 07 Interface authority, ranking and retrieval bias; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)

**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now (1 sentence):**  
I need empirical evidence about whether source attribution, claim-level grounding and disclosure of omitted information actually change how users judge the trustworthiness of retrieval-augmented responses.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin provenance/interface discussion. It supports the argument that provenance cues can improve users’ ability to distinguish better-supported responses, while also showing that those cues compete with textual qualities such as clarity, detail and actionability.

**Why this term, not alternatives (1–2 lines):**  
I use *trust calibration* rather than simply *trust*. The methodological objective is not to make researchers trust AI-mediated interpretations more; it is to help their confidence track the quality and evidential support of the response more closely.

**My benchmark for using it (1–2 criteria I will apply):**  
Use this study where I need user-centred evidence that explanation design can shift judgement towards better-supported RAG outputs. Do not treat its results as showing that attribution guarantees appropriate trust or that one explanation type works uniformly across tasks and users.

# Position + moment (2–4 lines)

Łajewska and Balog write from information retrieval and explainable information-access research. Their 2026 ECIR study addresses a specific weakness of RAG systems: users typically see a synthesised answer without sufficient information to judge retrieval quality, grounding, omissions or limitations. They therefore test three post-hoc explanation strategies—source attribution, factual grounding and information coverage—through a controlled two-stage user study.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Objective response quality does not translate automatically into perceived trustworthiness. Users evaluate generated answers through evidential cues alongside rhetorical and usability cues, meaning that even technically superior RAG can lose to a clearer or more actionable but less reliable answer.

# The author’s main move (1 sentence)

They try to test whether explanations can calibrate user trust by revealing differences in source attribution, statement-level grounding and information coverage between objectively higher- and lower-quality RAG responses.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Explanations can shift users towards more reliable RAG responses.
- **Evidence (quote/paraphrase + page):** Across 300 comparisons, participants selected the reliable response as more trustworthy in 84 cases without explanations and 165 cases once explanations were shown. Explanations also shifted preference from the unreliable to the reliable response in 69 cases. `[@Lajewska2026TrustMeThis, p. 6]`
- **Warrant (my words):** Making evidential quality visible changes user judgement. The support structure surrounding a generated response therefore affects whether users can distinguish a well-grounded answer from one that merely appears convincing.
- **So what for my thesis (a reusable sentence):** Provenance and grounding cues can help researchers distinguish better-supported AI-mediated interpretations, making evidential visibility part of the research method rather than a cosmetic interface feature.
- **Practice cross-check:** Turin citation architecture: generated answers expose linked archival passages beneath the synthesis so that users can judge support rather than relying solely on the fluency of the generated text.

## Claim 2

- **Claim (plain):** Trust in a generated response is influenced by textual qualities that may compete with objective evidential quality.
- **Evidence (quote/paraphrase + page):** The authors report that participants often preferred objectively limited-quality responses when those responses were clearer, more detailed or more actionable; concrete examples could also increase perceived trust regardless of factual quality. `[@Lajewska2026TrustMeThis, pp. 6–7]`
- **Warrant (my words):** Fluency, specificity and usefulness act as trust cues independently of provenance. A weakly supported answer can therefore appear preferable because its rhetorical form makes it easier to understand or act upon.
- **So what for my thesis:** Evidential traceability is necessary precisely because persuasive textual qualities can make an unsupported historical synthesis appear more authoritative than its sources warrant.
- **Practice cross-check:** Turin: a fluent account connecting DDR actors or ideas should never be treated as stronger evidence than a less polished output that accurately preserves contradiction, uncertainty or missingness.

## Claim 3

- **Claim (plain):** The usefulness of provenance explanations depends on the task and on what the user already believes they know.
- **Evidence (quote/paraphrase + page):** Source attribution influenced trust particularly in fact-based contexts, where participants valued the ability to verify claims, but was often dismissed for subjective questions. Users also relied on prior knowledge when assessing competing answers, sometimes disregarding explanations when they believed they already knew the topic. `[@Lajewska2026TrustMeThis, p. 7]`
- **Warrant (my words):** Explanations are interpreted rather than mechanically consumed. Their epistemic effect depends on whether users consider verification relevant and whether their own prior knowledge overrides the evidential cues provided by the interface.
- **So what for my thesis:** Provenance design should respond to the epistemic character of the research question: factual, attributional, interpretative and missingness queries may require different forms of explanation and different levels of evidential visibility.
- **Practice cross-check:** Turin interface: factual questions may foreground exact source passages, while contested or interpretative questions should expose multiple traces, differing source types and evidential limits rather than presenting one citation as dispositive.

# Definitions / terms this changes (only the ones that matter)

- **Source attribution:** explanation showing the supporting passages or source documents from which a response derives. `[@Lajewska2026TrustMeThis, pp. 4–5]`
- **Factual grounding:** statement-level linkage between claims in the generated response and relevant supporting passages. `[@Lajewska2026TrustMeThis, pp. 4–5]`
- **Information coverage:** disclosure of whether a response captures multiple relevant aspects of the query or omits important facets. `[@Lajewska2026TrustMeThis, pp. 4–5]`
- **Trustworthiness:** in the study, the user’s judgement of the credibility and factual correctness of the response, distinguished from immediate usefulness. `[@Lajewska2026TrustMeThis, pp. 1–2]`
- **Trust calibration:** my use of the term for the degree to which user confidence tracks evidential quality rather than fluency, actionability or other surface cues.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Provenance explanations can materially improve users’ ability to identify better-supported RAG responses.
  - Claim-level grounding is especially relevant to Turin because it connects individual generated propositions to particular evidential passages rather than merely attaching sources to the answer as a whole.
  - Trust remains partly rhetorical: clarity, detail and actionability can outweigh objective evidence unless the interface actively supports verification.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I frame the design objective as *appropriate evidential reliance* rather than increased trust.
  - For archival inquiry, I extend information coverage into evidential coverage: users should be able to see not only what has been retrieved but important relevant traces, perspectives or contradictions that were not incorporated into the synthesis.

- **What question it raises next (1–2 bullets):**
  - Should Turin vary its provenance display according to question type: factual attribution, interpretative comparison, contested relation or scoped missingness?
  - How can the interface counteract the tendency to prefer the clearer or more actionable synthesis when a messier answer more faithfully represents contradictory archival evidence?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methodology/interface section alongside Cho and Lim and Carl et al., to show that provenance cues do more than decorate an answer: they can change users’ trust judgements towards more reliably supported outputs, although the effect is contingent on task and prior knowledge.
- **Where I will name the title in running text (first-use rule):** “Łajewska and Balog's *Trust Me on This: A User Study of Trustworthiness for RAG Responses* provides controlled user-study evidence that explanation strategies can recalibrate trust towards better-supported retrieval-augmented responses.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Sources Integration: generated claim → inline citation → specific supporting passage → source metadata, with omitted or conflicting evidence retained where relevant.
- **Workstreams →** provenance UX; citation architecture; retrieval-augmented inference; evidential coverage; interface evaluation
- **Deliverables →** Turin methodology; thesis S3 interface argument; provenance UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI systems

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study uses 21 Mechanical Turk workers, 30 TREC information-seeking queries and deliberately manipulated high- versus limited-quality responses, so its findings should not be assumed to transfer directly to expert historians evaluating contested archival interpretations.
- **Risk if misused (1 sentence):** Treating the study as evidence that displaying sources automatically produces trustworthy judgement would ignore its central finding that clarity, actionability, query type and prior knowledge continue to shape trust even when explanations are present.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 1–7
- **First full note (write it out here):** Weronika Łajewska and Krisztian Balog, “Trust Me on This: A User Study of Trustworthiness for RAG Responses,” in *Proceedings of the 48th European Conference on Information Retrieval (ECIR 2026)* (2026), https://doi.org/10.48550/ARXIV.2601.14460.
- **Short note form:** Łajewska and Balog, “Trust Me on This,” [page].
- **One quote worth lifting (≤2 lines):** “trust judgments do not always align with the objective quality of responses” (p. 2).
- **One paraphrase worth keeping:** Explanations exposing source attribution, statement grounding or omitted information can steer users towards more reliable RAG outputs, but the effect remains contingent on query type, response presentation and users’ prior knowledge. (pp. 6–7)

# Related works (only if it directly connects)

- Cho and Lim (2026), *How Source Attribution Visualization Shapes User Attention and Preference* — shows that layout changes source discoverability and attention and that visibility alone does not guarantee trust or verification.
- Carl et al. (2026), *Enhancing Clinicians’ Trust in Large Language Models via Transparent Source Attribution* — provides complementary high-stakes evidence that inline citations and source previews improve perceived attribution and verifiability.
- Łajewska et al. (2024), *Explainability for Transparent Conversational Information-Seeking* — direct precursor investigating source, confidence and response-limitation explanations in conversational information access.
- Liu, Zhang and Liang (2023), *Evaluating Verifiability in Generative Search Engines* — provides a complementary evaluation framework for whether generated claims can actually be traced to supporting evidence.
- Liao and Sundar (2022), *Designing for Responsible Trust in AI Systems* — theoretical foundation for understanding interface explanations as trust cues that can produce either appropriate reliance or misplaced trust.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Follow the claim-level grounding and verifiability literature, particularly Liu, Zhang and Liang (2023), because it may give a more formal basis for evaluating whether Turin citations genuinely support individual generated propositions.
- **What I will test or write next:** Extend Turin provenance UAT beyond “is a citation present?” to four checks: does the citation identify the source; does the passage support the specific claim; are materially relevant counter-evidence or omitted facets visible; and does the explanation change users’ judgement in the direction warranted by the evidence?