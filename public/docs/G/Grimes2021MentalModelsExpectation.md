---
title: "Mental models and expectation violations in conversational AI interactions"
authors: "Grimes, G. Mark and Schuetzler, Ryan M. and Giboney, Justin Scott"
year: 2021
journal: "Decision Support Systems"
citation_key: Grimes2021MentalModelsExpectation
doi: "10.1016/j.dss.2021.113515"
url: "https://linkinghub.elsevier.com/retrieve/pii/S0167923621000257"
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
model_subcluster: "S3.2 Scoped missingness"
source_type: "Counterpoint / tension"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "10 Conversational AI and completion norms"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"
---

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
I need empirical support for the proposition that conversational interfaces shape users’ mental models of system capability and that mismatches between those expectations and actual capability affect how outputs are interpreted and evaluated.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.2 scoped missingness and the Turin discussion of conversational AI as a research interface. It helps explain why evidential limits need to be communicated explicitly: a fluent conversational form can encourage expectations of capability that exceed what a bounded archival corpus can responsibly establish.

**Why this term, not alternatives (1–2 lines):**  
I use *expectation management* for the interface problem identified here. I reserve *completion norm* for the stronger claim that conversational AI encourages users to expect an answer to every query; Grimes et al. support the underlying expectation mechanism but do not directly study generative completion.

**My benchmark for using it (1–2 criteria I will apply):**  
Use the paper to establish that interface cues and system framing shape expectations independently of actual performance. Do not use it as evidence about contemporary LLM hallucination, RAG behaviour or refusal unless paired with later generative-AI research.

# Position + moment (2–4 lines)

Grimes, Schuetzler and Giboney write from information systems and human–computer interaction before the widespread adoption of generative LLM chat interfaces. Their experiment uses scripted conversational agents to test Expectation Violation Theory in human–computer interaction. The paper is therefore valuable less for its specific chatbot technology than for its empirical demonstration that perceived system performance is mediated by the expectations users bring into an interaction.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Their model assumes comparatively legible differences in chatbot capability and evaluates engagement rather than epistemic reliability. Contemporary LLM systems complicate this because fluent language can obscure capability boundaries precisely where evidential competence is uncertain.

# The author’s main move (1 sentence)

They try to explain evaluations of conversational AI by showing experimentally that user expectations interact with actual system capability, so that expectation violations alter perceptions beyond the system’s performance alone.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Users approach conversational AI through mental models that generate expectations about what the system can do.
- **Evidence (quote/paraphrase + page):** The authors define mental models as frameworks used to predict the world and argue that the widely varying capabilities of AI systems make it difficult for users to form models that accurately represent what a system can actually do. Users may consequently either underestimate or overestimate AI capability. `[@Grimes2021MentalModelsExpectation, p. 1]`
- **Warrant (my words):** Users do not encounter an AI interface without assumptions. Labels, conversational form and prior experience establish an anticipated capability against which subsequent behaviour is interpreted.
- **So what for my thesis (a reusable sentence):** An archive-facing conversational interface must actively communicate the scope of its evidential capability because users otherwise construct their own expectations about what the system can know and establish.
- **Practice cross-check:** Turin interface: the research environment should state that answers are derived from a bounded DDR evidence surface and distinguish interpretative synthesis from claims the corpus cannot establish.

## Claim 2

- **Claim (plain):** Expectations can change how users evaluate the same underlying conversational capability.
- **Evidence (quote/paraphrase + page):** Participants were told they would interact either with a human or with a chatbot, creating significantly different expectations before interaction. `[@Grimes2021MentalModelsExpectation, pp. 4–5]` The same low-capability system was subsequently evaluated more favourably when users expected a chatbot (M = 4.82) than when they expected a human (M = 4.33). `[@Grimes2021MentalModelsExpectation, p. 6]`
- **Warrant (my words):** Evaluation does not depend only on system performance. The frame through which the user encounters the system changes the standard against which that performance is judged.
- **So what for my thesis:** The perceived authority of a research chatbot is partly produced by its interface and framing, so evidential modesty must be communicated through design rather than assumed from backend constraints.
- **Practice cross-check:** Turin: a fluent answer box can look like a general-purpose historical oracle even when retrieval is restricted to specified DDR material; labels, source visibility and scoped-missingness responses should correct that mental model.

## Claim 3

- **Claim (plain):** Capability–expectation mismatch produces stronger reactions than capability alone and negative expectation violations are especially consequential.
- **Evidence (quote/paraphrase + page):** Users whose experience matched expectations showed no significant violation, those whose system exceeded expectations showed a positive violation, and those whose system fell below expectations showed a significant negative violation. `[@Grimes2021MentalModelsExpectation, p. 6]` The authors conclude that expectation violations influence evaluations “above and beyond” actual system capability and observe that users penalised failure to meet expectations more strongly than they rewarded exceeding them. `[@Grimes2021MentalModelsExpectation, pp. 6–7]`
- **Warrant (my words):** Misalignment between apparent and actual capability becomes part of the user experience. A system that appears capable of resolving every question creates its own failure condition when it encounters genuinely insufficient evidence.
- **So what for my thesis:** Scoped missingness should be presented as an expected capability of the research system rather than as an exceptional failure, allowing evidential limits to confirm the system’s stated research behaviour rather than violate an implied promise of completeness.
- **Practice cross-check:** Turin scoped-missingness UAT: “the available corpus does not establish this” should appear as a designed research outcome with supporting nearest evidence, not as a generic error or fallback message.

# Definitions / terms this changes (only the ones that matter)

- **Mental model:** the user's working understanding of how a system operates and what it is capable of doing, used to anticipate future behaviour. `[@Grimes2021MentalModelsExpectation, p. 1]`
- **Expectation:** the result or behaviour a user predicts will occur during an interaction. `[@Grimes2021MentalModelsExpectation, p. 3]`
- **Expectation violation:** mismatch between anticipated and experienced system behaviour, with positive or negative valence depending on whether capability exceeds or falls below expectation. `[@Grimes2021MentalModelsExpectation, pp. 3, 6]`
- **Expectation management:** my application of this mechanism to research interfaces: making evidential scope, capabilities and limits legible enough that the user's mental model corresponds reasonably closely to what the system can actually establish.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper gives me an empirical basis for treating interface expectation-setting as part of system methodology rather than merely UX.
  - It explains why conversational fluency is consequential even before questions of factual accuracy arise: users evaluate outputs relative to an inferred model of system competence.
  - It provides a useful theoretical rationale for making refusal and scoped missingness normal, expected behaviours of an archival research system.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - For the DDR, I shift the target from conversational engagement to epistemic calibration: the relevant mental model concerns what evidence the system can retrieve, connect and responsibly infer.
  - Rather than deliberately lowering expectations to improve satisfaction, I want the interface to establish accurate expectations about evidential scope and researcher responsibility.

- **What question it raises next (1–2 bullets):**
  - What interface cues best communicate that a fluent conversational system has bounded archival rather than general historical knowledge?
  - Does presenting scoped missingness as a normal research result help users develop a more accurate mental model of retrieval-augmented historical inquiry?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin discussion of conversational interface authority, immediately before arguing that evidential limits must be communicated explicitly because users form expectations about system capability from interface cues.
- **Where I will name the title in running text (first-use rule):** “Grimes, Schuetzler and Giboney's *Mental Models and Expectation Violations in Conversational AI Interactions* demonstrates that evaluations of conversational systems depend not only on capability but on users' prior expectations of that capability.”
- **Link to my practice evidence (one concrete cross-reference):** Turin scoped-missingness and Sources Integration interface: capability statement → research query → retrieved evidence → bounded synthesis or explicit evidential limit.
- **Workstreams →** scoped missingness; conversational interface; epistemic calibration; research UX
- **Deliverables →** Turin discussion; thesis S3 critical-method section; interface/UAT requirements
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; users of conversational research interfaces

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study concerns scripted 2021 conversational agents, manipulates expectations through a human-versus-chatbot framing and measures engagement rather than factual accuracy, evidential verification or historical reasoning.
- **Risk if misused (1 sentence):** Treating it as evidence that LLMs create a universal “completion norm” would overextend the study; it supports the more limited claim that conversational cues shape expectations of capability and that mismatches alter user evaluation.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 1–3, 5–8
- **First full note (write it out here):** G. Mark Grimes, Ryan M. Schuetzler, and Justin Scott Giboney, “Mental Models and Expectation Violations in Conversational AI Interactions,” *Decision Support Systems* 144 (2021): 113515, https://doi.org/10.1016/j.dss.2021.113515.
- **Short note form:** Grimes, Schuetzler, and Giboney, “Mental Models and Expectation Violations,” [page].
- **One quote worth lifting (≤2 lines):** “the same chatbot differently depending on the expectations that were set” (p. 6).
- **One paraphrase worth keeping:** Users evaluate conversational AI against an anticipated model of its capability, so the same system performance can be interpreted differently when interface framing creates different expectations. (pp. 1, 6)

# Related works (only if it directly connects)

- Burgoon et al. (2016), *Application of expectancy violations theory to communication with and judgments about embodied agents* — direct theoretical precursor applying Expectation Violations Theory to human–agent interaction.
- Nass and Moon (2000), *Machines and Mindlessness* — foundational account of users applying social responses and expectations to computational systems.
- Axetorn et al. (2026), *Addressing trust requirements in the design of an open-source multiagent LLM-based domain-specific chatbot* — later engineering work that makes system capability, provenance, limitations and refusal explicit design requirements.
- Cho and Lim (2026), *How Source Attribution Visualization Shapes User Attention and Preference* — later evidence that interface cues influence how users attend to and interpret evidential support in contemporary AI interfaces.
- Carl et al. (2026), *Enhancing clinicians’ trust in large language models via transparent source attribution* — complementary evidence that interface-level source visibility changes users' ability to verify generated claims.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Recent work on calibrated reliance and conversational AI disclosure to establish whether contemporary generative interfaces create expectations of completeness, competence or answerability beyond the expectation mechanism demonstrated here.
- **What I will test or write next:** Add an expectation-setting requirement to Turin UAT: before a user submits a query, can they correctly describe what corpus the system searches, what its generated answers represent, and what it will do when the available evidence is insufficient?