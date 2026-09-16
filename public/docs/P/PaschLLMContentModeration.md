---
title: "LLM content moderation and user satisfaction: evidence from response refusals in chatbot arena"
authors: "Pasch, Stefan"
year: 2025
journal: ""
citation_key: PaschLLMContentModeration
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:31"
last_updated: "16 Sept 2026, 11:14"
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
model_subcluster: "S3.2 Scoped missingness"
source_type: "Counterpoint / tension"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "10 Conversational AI and completion norms"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.2 Scoped missingness  
**Source type:** Counterpoint / tension  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 10 Conversational AI and completion norms; 11 Uncertainty and provenance display in interfaces  

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
I need evidence about how users react when conversational systems decline to complete a requested task, and whether boundary-setting can be communicated in ways that preserve usefulness without pretending the system can provide an unsupported answer.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.2 scoped missingness and the Turin discussion of conversational completion norms. It helps explain why an evidential boundary should be communicated as a constructive research result rather than as a generic refusal or dead end.

**Why this term, not alternatives (1–2 lines):**  
I use *scoped missingness* rather than *refusal* because the DDR system is not declining the user's request on policy grounds. It is reporting an evidential boundary while continuing to show what the defined corpus does and does not support.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Pasch to establish that outright non-completion carries a substantial user penalty and that contextualised boundary-setting is received more favourably. Do not use the study as evidence that archival evidential limits themselves produce the same response, because its refusals concern safety policy and technical capability.

# Position + moment (2–4 lines)

Pasch writes from human–AI interaction and computational social science, using large-scale behavioural data from Chatbot Arena to study how users evaluate LLM refusals. The paper distinguishes ethical from technical boundaries and, separately, outright refusals from disclaimers that acknowledge a limitation while continuing to assist. Its importance for my project lies in the interactional consequences of boundary-setting rather than its substantive focus on content moderation.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Conversational systems are frequently evaluated through a norm of responsiveness: users reward systems that attempt the task and penalise systems that simply terminate it. For research-facing AI, this creates a design tension because epistemically responsible non-completion may be necessary even when conversational norms favour completion.

# The author’s main move (1 sentence)

They try to quantify the user cost of LLM boundary-setting by distinguishing ethical and technical refusals from qualified disclaimers and analysing how those response types affect nearly 50,000 real-world pairwise user preferences.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Users strongly penalise outright refusals compared with responses that attempt to answer.
- **Evidence (quote/paraphrase + page):** Across 49,938 Chatbot Arena comparisons, normal responses achieved a 36% win rate, compared with 8% for ethical refusals and 16% for technical refusals. When an ethical refusal was directly paired with a normal response, its win rate fell to 4%. `[@PaschLLMContentModeration, pp. 16–18]` Figure 2 on p. 17 makes this contrast particularly visible.
- **Warrant (my words):** Conversational users reward responsiveness and task completion. A boundary expressed simply as non-performance therefore competes with an established expectation that the assistant should attempt to help.
- **So what for my thesis (a reusable sentence):** Evidential non-completion in an archival research system should be communicated as a substantive research outcome rather than as an unexplained conversational refusal.
- **Practice cross-check:** Turin scoped missingness: instead of terminating with “I cannot answer”, the system should state that the defined corpus does not establish the relationship and then surface the nearest relevant archival traces and their provenance.

## Claim 2

- **Claim (plain):** Users are more accepting of boundary-setting when the system continues to provide qualified assistance rather than refusing outright.
- **Evidence (quote/paraphrase + page):** Pasch distinguishes refusals, which withhold meaningful engagement with the requested task, from disclaimers, which identify a limitation but continue with a partial, hypothetical or qualified response. `[@PaschLLMContentModeration, pp. 9–11]` In the Arena data, disclaimer responses were penalised substantially less than outright refusals; ethical disclaimers achieved an overall 38% win rate, compared with 8% for ethical refusals. `[@PaschLLMContentModeration, pp. 16–17]`
- **Warrant (my words):** Boundary-setting does not have to terminate inquiry. A system can preserve the epistemic limit while remaining useful by explaining what it can responsibly provide within that limit.
- **So what for my thesis:** Scoped missingness should combine evidential restraint with continued assistance: state the unsupported claim, identify the boundary and return whatever relevant evidence can still be established.
- **Practice cross-check:** Turin: a failed attribution query can return “the available corpus does not establish authorship”, followed by dated references, adjacent testimony and potentially conflicting records, without converting any of those traces into a definitive attribution.

## Claim 3

- **Claim (plain):** The presentation of a boundary affects how users respond to it.
- **Evidence (quote/paraphrase + page):** Among ethical refusals, greater semantic alignment with the user's prompt was associated with higher win rates, while a one-standard-deviation increase in response length corresponded to a nine-percentage-point increase in win rate. `[@PaschLLMContentModeration, pp. 18–19]` Pasch interprets this as evidence that generic refusals are received less favourably than responses that contextualise the limitation, explain it or offer constructive alternatives. `[@PaschLLMContentModeration, pp. 21–23]`
- **Warrant (my words):** Users respond not simply to the existence of a limit but to whether the system demonstrates that it has understood the specific request and can explain why the boundary applies.
- **So what for my thesis:** An evidential limit should be specific to the research question and evidence surface: the system should explain exactly what cannot be established and why, rather than falling back to generic uncertainty language.
- **Practice cross-check:** Turin scoped-missingness UAT: distinguish “no relevant evidence retrieved”, “relevant but insufficient evidence”, and “conflicting evidence”, with each producing a contextual explanation tied to the actual archival material.

# Definitions / terms this changes (only the ones that matter)

- **Refusal:** a response in which the model explicitly rejects the requested task and withholds meaningful engagement with it. `[@PaschLLMContentModeration, pp. 9–10]`
- **Disclaimer:** a response that states an ethical or technical boundary but continues to address the request in a qualified, partial or hypothetical way. `[@PaschLLMContentModeration, pp. 9–10]`
- **Technical refusal:** non-completion attributed to a functional limitation, lack of information or lack of capability rather than a normative safety rule. `[@PaschLLMContentModeration, pp. 9–10]`
- **Refusal penalty:** the observed reduction in user preference associated with outright refusal responses relative to standard responses. `[@PaschLLMContentModeration, pp. 16–18]`
- **Constructive evidential boundary:** my application to archival research: state what the evidence does not warrant while continuing to expose the relevant traces, uncertainty and possible next lines of inquiry.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper gives strong large-scale behavioural evidence that conversational users prefer attempted assistance to outright non-completion.
  - Its refusal/disclaimer distinction is particularly useful for scoped missingness because it shows that acknowledging a boundary does not require ending the interaction.
  - Contextualising the boundary matters: generic boilerplate performs worse than responses that demonstrate engagement with the user's actual request.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I translate *disclaimer* into *constructive evidential boundary*: the DDR system should preserve the limit while continuing to support inquiry through inspectable evidence.
  - User satisfaction remains secondary to historical warrant. Where the corpus does not support an inference, the system should preserve that limit even if users would prefer a complete answer.

- **What question it raises next (1–2 bullets):**
  - Can scoped missingness be designed so that users experience it as increased research value rather than as system failure?
  - What amount of contextual explanation is sufficient to make an evidential boundary intelligible without encouraging overinterpretation of the nearest available traces?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin discussion of scoped missingness and conversational completion, to show that outright non-completion conflicts with ordinary user expectations and that qualified, contextual boundary-setting offers a more productive interaction pattern.
- **Where I will name the title in running text (first-use rule):** “Pasch's *LLM Content Moderation and User Satisfaction: Evidence from Response Refusals in Chatbot Arena* provides large-scale behavioural evidence that users penalise outright refusals more strongly than qualified forms of boundary-setting.”
- **Link to my practice evidence (one concrete cross-reference):** Turin scoped-missingness cases: query → relevant evidence → insufficient/contradictory evidential state → explicit boundary statement → nearest supporting traces and suggested next inquiry.
- **Workstreams →** scoped missingness; conversational interface; evidential restraint; research UX
- **Deliverables →** Turin discussion; thesis S3 critical-method section; scoped-missingness UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI interfaces

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** Pasch studies safety- and capability-based refusals in general-purpose LLM interactions, not evidence-bounded historical research, so the refusal penalty cannot be assumed to apply identically to archival statements of uncertainty or missingness.
- **Risk if misused (1 sentence):** Using the refusal penalty to justify answering whenever possible would invert the methodological lesson for historical research, where user satisfaction must remain subordinate to evidential warrant.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 3–10, 16–23
- **First full note (write it out here):** Stefan Pasch, “LLM Content Moderation and User Satisfaction: Evidence from Response Refusals in Chatbot Arena” (2025), publication venue not specified in the supplied manuscript.
- **Short note form:** Pasch, “LLM Content Moderation and User Satisfaction,” [page].
- **One quote worth lifting (≤2 lines):** “users tend to favor Normal responses over disclaimers or refusals” (p. 17).
- **One paraphrase worth keeping:** Users penalise outright LLM refusals substantially more than qualified boundary-setting, while refusals that engage specifically with the user's request and provide more contextual explanation are received more favourably. (pp. 16–23)

# Related works (only if it directly connects)

- Grimes, Schuetzler and Giboney (2021), *Mental Models and Expectation Violations in Conversational AI Interactions* — provides the theoretical precursor explaining why capability–expectation mismatch changes evaluations of conversational systems.
- Axetorn et al. (2026), *Addressing Trust Requirements in the Design of an Open-Source Multiagent LLM-Based Domain-Specific Chatbot* — provides the complementary engineering argument that withholding an unsupported answer can itself be designed as trustworthy behaviour.
- Łajewska and Balog (2026), *Trust Me on This* — shows that response presentation, evidence and explanatory cues can recalibrate user judgement rather than merely increasing trust.
- Luger and Sellen (2016), *Like Having a Really Bad PA* — precursor on the mismatch between user expectations and conversational-agent capability.
- Xie et al. (2024), *SORRY-Bench* — relevant to calibration of LLM refusal behaviour, although focused on safety rather than evidential abstention.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Keep Pasch alongside Grimes and Axetorn rather than expanding extensively into safety-refusal scholarship; the useful contribution for the PhD is the interactional distinction between hard refusal and constructive boundary-setting.
- **What I will test or write next:** UAT two scoped-missingness formulations against each other: (A) hard non-answer and (B) contextual evidential boundary plus nearest relevant evidence. Test whether B preserves the same historical restraint while giving the researcher a more useful route forward.