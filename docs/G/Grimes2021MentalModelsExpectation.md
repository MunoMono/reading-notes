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
last_updated: "05 Oct 2026, 11:07"
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
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Operational literature"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
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
- No page cite → TODO (needs page / verification)
- Substantive source → at least 6 critical claims; major canonical source → normally 6–8 or more where warranted
- Critical claims are analytical paragraphs: Claim → Evidence → Warrant → Boundary → Consequence
- Keep author claim, evidence-supported claim, and researcher inference distinct
- Each claim must include a practice cross-check (or TODO)
- End each substantive note with a cross-source / cross-lens synthesis paragraph (or TODO)
- Every source gets one primary theoretical-framework area + one Zotero literature cluster
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/theoretical framework: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

# Thesis job

**How this source moves the primary research question forward:** Grimes, Schuetzler and Giboney show that users approach conversational systems through mental models of capability and evaluate outputs relative to those expectations. This gives the DDR interface a reason to make evidential scope and missingness explicit.

**How this source bears on the secondary question:** It helps ensure that contemporary conversational access to DDR does not imply a wider or more authoritative historical capability than the bounded corpus can support.

**Where it sits in my argument:** Critical computational approaches / operational literature, especially conversational interface authority and expectation management.

**My benchmark for using it:** Use for the expectation mechanism; do not cite it as evidence about modern LLM hallucination, RAG or refusal.

# Position + moment

The authors write from information systems and HCI before widespread generative-LLM chat interfaces. Their experiment uses scripted conversational agents to test how expectations interact with actual capability in user evaluation. [@Grimes2021MentalModelsExpectation, pp. 1–7]

# The author’s main move

They show experimentally that users evaluate conversational systems through prior expectations, and that violations of those expectations influence judgement beyond underlying capability alone. [@Grimes2021MentalModelsExpectation, pp. 4–7]

# Critical-reading claims

## Claim 1

**Claim.** Users approach conversational AI through mental models of capability. **Author claim.** Mental models help users predict what a system can do. **Evidence.** The authors argue that varying AI capability makes accurate user models difficult to form. [@Grimes2021MentalModelsExpectation, p. 1] **Evidence-supported claim.** The authors argue that varying AI capability makes accurate user models difficult to form. [@Grimes2021MentalModelsExpectation, p. 1] **Researcher inference.** DDR users will infer capabilities from interface form unless scope is stated. **Warrant.** Interaction begins with prior expectations rather than a blank slate. **Boundary.** The study predates current LLM interfaces. **Consequence.** Scope communication is part of method, not cosmetic UX. **Practice cross-check.** Turin should state that answers derive from a bounded DDR evidence surface.
## Claim 2

**Claim.** Users can overestimate or underestimate AI capability. **Author claim.** Inaccurate mental models can produce expectations above or below what a system can actually do. **Evidence.** The paper explicitly describes both over- and underestimation as consequences of unstable mental models. [@Grimes2021MentalModelsExpectation, p. 1] **Evidence-supported claim.** The paper explicitly describes both over- and underestimation as consequences of unstable mental models. [@Grimes2021MentalModelsExpectation, p. 1] **Researcher inference.** A fluent DDR chatbot may invite overestimation of historical knowledge. **Warrant.** Conversational form can hide the narrowness of an underlying evidence base. **Boundary.** The paper does not study generative fluency. **Consequence.** Backend constraints should be surfaced in user-facing language. **Practice cross-check.** Turin labels should distinguish corpus-bounded research assistance from general historical knowledge.
## Claim 3

**Claim.** Interface framing changes expectations before system performance is observed. **Author claim.** Participants given human versus chatbot framing formed significantly different expectations. **Evidence.** The experimental manipulation created measurable expectation differences before interaction. [@Grimes2021MentalModelsExpectation, pp. 4–5] **Evidence-supported claim.** The experimental manipulation created measurable expectation differences before interaction. [@Grimes2021MentalModelsExpectation, pp. 4–5] **Researcher inference.** Naming and presentation of the DDR tool will shape perceived authority. **Warrant.** Expectations are partly produced by design cues. **Boundary.** Human-versus-chatbot framing is simpler than current AI branding. **Consequence.** Interface language should accurately signal system role and limits. **Practice cross-check.** Turin should avoid labels that imply oracle-like historical competence.
## Claim 4

**Claim.** The same capability can be evaluated differently under different expectations. **Author claim.** User evaluation depends on expectation as well as actual system behaviour. **Evidence.** The same low-capability system was rated more favourably when users expected a chatbot than when they expected a human. [@Grimes2021MentalModelsExpectation, p. 6] **Evidence-supported claim.** The same low-capability system was rated more favourably when users expected a chatbot than when they expected a human. [@Grimes2021MentalModelsExpectation, p. 6] **Researcher inference.** Apparent user satisfaction is not a clean measure of evidential quality. **Warrant.** Evaluation is relational to expected capability. **Boundary.** The outcome measured engagement/evaluation, not factual verification. **Consequence.** DDR UAT should test epistemic tasks rather than satisfaction alone. **Practice cross-check.** Turin success criteria should focus on evidence identification, provenance and bounded conclusions.
## Claim 5

**Claim.** Negative expectation violations matter strongly. **Author claim.** Systems that fell below expectations produced significant negative violations. **Evidence.** Users penalised unmet expectations more strongly than they rewarded exceeded expectations. [@Grimes2021MentalModelsExpectation, pp. 6–7] **Evidence-supported claim.** Users penalised unmet expectations more strongly than they rewarded exceeded expectations. [@Grimes2021MentalModelsExpectation, pp. 6–7] **Researcher inference.** If the DDR interface implies complete answering, scoped missingness may feel like failure rather than responsible method. **Warrant.** Users judge non-answering against the promise the interface has implicitly made. **Boundary.** The study does not test refusal as a designed research behaviour. **Consequence.** Missingness should be introduced as a normal capability from the outset. **Practice cross-check.** Turin should explain “does not establish” as a research outcome, not an error state.
## Claim 6

**Claim.** Expectation management should aim at calibration, not reduced ambition. **Author claim.** The study demonstrates that expectation–capability alignment affects evaluation. **Evidence.** Their results show matched, exceeded and unmet expectations producing different responses above and beyond capability alone. [@Grimes2021MentalModelsExpectation, pp. 6–7] **Evidence-supported claim.** Their results show matched, exceeded and unmet expectations producing different responses above and beyond capability alone. [@Grimes2021MentalModelsExpectation, pp. 6–7] **Researcher inference.** The thesis should design for accurate expectations of evidential scope rather than simply lower expectations. **Warrant.** Epistemic calibration requires the user’s model to correspond reasonably to actual system boundaries. **Boundary.** This calibration goal is my extension, not the study’s archival objective. **Consequence.** Interface design becomes part of accountable computational method. **Practice cross-check.** Turin capability statements, provenance and scoped-missingness responses should reinforce the same bounded mental model.
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

# Cross-source / cross-lens synthesis

Grimes, Schuetzler and Giboney provide the HCI mechanism behind the thesis's concern with interface authority: users form capability expectations before they can judge evidence. Read with Pan and Boyd Davis, this shows why ranking, conversational fluency and visual framing can produce authority effects independent of evidential quality. For DDR, scoped missingness must therefore be designed as an expected research behaviour so that conversational form does not imply unlimited historical knowledge.

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