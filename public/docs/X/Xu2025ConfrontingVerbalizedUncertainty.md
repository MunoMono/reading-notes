---
title: "Confronting verbalized uncertainty: understanding how LLM’s verbalized uncertainty influences users in AI-assisted decision-making"
authors: "Xu, Zhengtao and Song, Tianqi and Lee, Yi-Chieh"
year: 2025
journal: "International Journal of Human-Computer Studies"
citation_key: Xu2025ConfrontingVerbalizedUncertainty
doi: "10.1016/j.ijhcs.2025.103455"
url: "https://linkinghub.elsevier.com/retrieve/pii/S1071581925000126"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
last_updated: "16 Sep 2026"
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
  - "07 Interface authority, ranking and retrieval bias"
  - "09 Human judgement and practice-led computational research"
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
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

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
I need empirical evidence that the linguistic presentation of uncertainty changes how users trust, interpret and act upon LLM output, so that uncertainty in the Turin interface can be treated as an interaction-design problem as well as an evidential one.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin discussion of evidential uncertainty. It helps establish that uncertainty must be communicated deliberately: excessive certainty can imply unwarranted authority, while indiscriminate hedging can reduce comprehension, confidence and effective researcher engagement.

**Why this term, not alternatives (1–2 lines):**  
I distinguish *verbalized uncertainty* from *evidential uncertainty*. Xu et al. study linguistic markers through which an LLM sounds more or less certain; my concern is how the interface communicates the actual evidential state of an archival claim.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Xu et al. to establish that wording and degree of expressed uncertainty materially affect users. Do not infer that generic “medium uncertainty” is the correct historical design: Turin uncertainty statements should be grounded in identifiable evidential conditions rather than stylistic hedging.

# Position + moment (2–4 lines)

Xu, Song and Lee write from human–computer interaction at the National University of Singapore, studying AI-assisted decision-making rather than model accuracy alone. Their 2025 controlled experiment separates LLM accuracy from three levels of verbalized uncertainty and evaluates subjective trust and satisfaction alongside behavioural reliance, correctness and decision time. The paper therefore shifts uncertainty from a purely technical calibration problem towards a human–AI communication problem.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Making uncertainty visible is not automatically beneficial. The form, intensity and context of its expression affect interpretation, and linguistic uncertainty should not be assumed to correspond faithfully to either model uncertainty or the evidential uncertainty of the underlying sources.

# The author’s main move (1 sentence)

They try to determine how different linguistic levels of expressed uncertainty influence human trust, satisfaction and decision performance by independently manipulating LLM accuracy and verbalized uncertainty in an AI-assisted task.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** The way an LLM verbalizes uncertainty materially changes how users trust and respond to its suggestions.
- **Evidence (quote/paraphrase + page):** In a six-condition experiment with 156 participants, verbalized uncertainty had a statistically significant main effect on reported trust and behavioural compliance. Trust was highest in the medium condition (M = 4.776), compared with high uncertainty (M = 4.484) and low uncertainty/high certainty (M = 4.345); compliance after seeing the AI suggestion followed the same pattern. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 8–9]` Figure 4 on p. 9 summarises the effects across trust, satisfaction and performance.
- **Warrant (my words):** Evidential communication is performative as well as descriptive: changing the wording surrounding a claim can change how readily users accept or act upon that claim even when the substantive task remains the same.
- **So what for my thesis (a reusable sentence):** Uncertainty in an archive-facing AI system is an interface property as well as an evidential property, because its linguistic presentation influences how researchers interpret and rely upon generated claims.
- **Practice cross-check:** Turin Research Query: statements such as “the corpus establishes”, “the evidence suggests”, “sources conflict”, and “the available corpus does not establish” should communicate distinct evidential states rather than applying a generic hedging style across all outputs.

## Claim 2

- **Claim (plain):** Both excessive certainty and excessive hesitation can undermine effective human–AI judgement.
- **Evidence (quote/paraphrase + page):** Qualitative responses show that strongly certain language was sometimes interpreted as overconfidence and prompted scepticism, while high verbalized uncertainty caused users to doubt the system and rely more heavily on their own intuition. Participants described the medium condition as balancing confidence and caution. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 9–11]` Satisfaction was significantly highest under medium verbalized uncertainty (M = 5.404), and decision times were also significantly shorter than in both high- and low-uncertainty conditions. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 10–11]`
- **Warrant (my words):** A research interface can miscommunicate evidential status in two directions: categorical prose can make a contingent inference appear settled, while excessive hedging can make a well-supported claim appear less usable than the evidence warrants.
- **So what for my thesis:** Historical uncertainty should be proportionate to the evidence: responsible synthesis requires neither artificial confidence nor indiscriminate hesitation, but language matched to the strength and character of the available traces.
- **Practice cross-check:** Turin should distinguish a strongly documented date or quotation from a plausible interpretative relation, contradictory testimony and scoped missingness rather than giving all four the same linguistic confidence profile.

## Claim 3

- **Claim (plain):** Verbalized uncertainty is not equivalent to calibrated evidential uncertainty.
- **Evidence (quote/paraphrase + page):** The study's medium condition was generated using plain expressions without explicit strengtheners or weakeners, whereas low uncertainty inserted strong certainty markers and high uncertainty inserted explicit weakeners such as “I’m not sure” or “I cannot say for certain”. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 5, 14–15]` The authors subsequently found that participants often perceived the nominally medium condition as confident language and note that current LLMs struggle to use epistemic markers in calibrated ways. `[@Xu2025ConfrontingVerbalizedUncertainty, p. 12]`
- **Warrant (my words):** Linguistic tone can create an impression of confidence without reliably encoding the actual epistemic status of a claim. Surface hedging therefore cannot substitute for a method that determines what the evidence supports.
- **So what for my thesis:** Retrieval-augmented historical inference should derive uncertainty from the state of the evidence and then communicate that state linguistically; it should not infer evidential status from how confident or hesitant the generated prose sounds.
- **Practice cross-check:** Turin scoped missingness: the distinction between supported, qualified, conflicting and unsupported claims should be computed from retrieved evidence and provenance before being rendered into appropriate language in the interface.

# Definitions / terms this changes (only the ones that matter)

- **Verbalized uncertainty:** uncertainty communicated through natural-language expressions such as “probably”, “I’m certain”, “it might be” or “I’m not sure” rather than numerical or graphical representations. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 2–3]`
- **Epistemic uncertainty:** uncertainty arising from lack of knowledge and therefore, in principle, reducible through additional information. Xu et al. explicitly state that this is the form of uncertainty principally addressed in their study. `[@Xu2025ConfrontingVerbalizedUncertainty, p. 2]`
- **Uncertainty calibration:** alignment between the confidence or uncertainty communicated by a system and its actual performance or reliability. `[@Xu2025ConfrontingVerbalizedUncertainty, pp. 3–4]`
- **Evidential uncertainty:** my archival extension: uncertainty produced by the character of the available historical record—partiality, contradiction, source status, chronology or missingness—rather than merely by an LLM's internal confidence.
- **Evidentially calibrated language:** my formulation for Turin: linguistic qualification whose strength corresponds to an inspectable evidential state rather than a generic conversational style.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper confirms that uncertainty presentation changes user behaviour and should therefore be designed and evaluated rather than treated as a textual afterthought.
  - Its strongest lesson for Turin is proportionality: users responded poorly both to categorical overconfidence and to persistent hesitation.
  - The distinction between expressed uncertainty and actual accuracy reinforces the need to derive historical qualification from evidence rather than from model self-assessment.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I translate *verbalized uncertainty* into *evidentially calibrated language*: the DDR interface should describe why a claim is uncertain rather than merely making the sentence sound uncertain.
  - I separate model uncertainty from archival uncertainty. A model may be linguistically confident about an evidentially weak interpretation or hesitant about a fact strongly established in the corpus.

- **What question it raises next (1–2 bullets):**
  - What vocabulary should Turin use consistently for documented fact, supported inference, contested interpretation, conflicting evidence and corpus-level missingness?
  - Does explaining the reason for uncertainty—rather than simply expressing uncertainty—help researchers calibrate reliance more effectively?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin interface/methodology section explaining why uncertainty cannot simply be attached as generic hedging to generated prose; uncertainty presentation changes user reliance and should therefore correspond to the actual evidential condition of the claim.
- **Where I will name the title in running text (first-use rule):** “Xu, Song and Lee's *Confronting Verbalized Uncertainty* demonstrates experimentally that the linguistic intensity of uncertainty in LLM responses affects trust, satisfaction and decision behaviour.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Research Query / scoped missingness output states: supported → qualified → conflicting → insufficient corpus, with each state connected to inspectable source evidence rather than model confidence alone.
- **Workstreams →** uncertainty communication; scoped missingness; provenance UX; appropriate reliance; retrieval-augmented inference
- **Deliverables →** Turin interface methodology; thesis S3 critical-method section; uncertainty UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI interfaces

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The experiment uses a low-stakes word-association game, pre-generated responses and US participants, while its uncertainty conditions manipulate linguistic style rather than the evidential status of real historical claims.
- **Risk if misused (1 sentence):** Treating “medium uncertainty is best” as a universal design rule would confuse stylistic preference with epistemic calibration; in historical research, the appropriate expression should depend on what the underlying evidence actually warrants.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–5, 8–13, 14–15
- **First full note (write it out here):** Zhengtao Xu, Tianqi Song, and Yi-Chieh Lee, “Confronting Verbalized Uncertainty: Understanding How LLM’s Verbalized Uncertainty Influences Users in AI-Assisted Decision-Making,” *International Journal of Human-Computer Studies* 197 (2025): 103455, https://doi.org/10.1016/j.ijhcs.2025.103455.
- **Short note form:** Xu, Song, and Lee, “Confronting Verbalized Uncertainty,” [page].
- **One quote worth lifting (≤2 lines):** “participants preferred a balance between confidence and caution” (p. 10).
- **One paraphrase worth keeping:** The linguistic strength with which an LLM communicates uncertainty affects trust, satisfaction and decision behaviour, while both categorical certainty and overt hesitation can undermine effective reliance. (pp. 8–12)

# Related works (only if it directly connects)

- Kim et al. (2024), *“I’m Not Sure, But…”: Examining the Impact of Large Language Models’ Uncertainty Expression on User Reliance and Trust* — direct precursor examining whether uncertainty expression can reduce overreliance.
- Zhou et al. (2023), *Navigating the Grey Area* — supplies the strengthener/weakener vocabulary used to construct Xu et al.'s uncertainty conditions.
- Zhou et al. (2024), *Relying on the Unreliable* — relevant to the difficulty of calibrating linguistic epistemic markers in LLM output.
- Radharapu et al. (2025), *Arbiters of Ambivalence* — complementary evidence that ambiguity must be explicitly afforded as a system state rather than expected to survive generative or judging workflows automatically.
- Qian and Wexler (2024), *Take It, Leave It, or Fix It* — shows that behavioural reliance can diverge from users' stated trust, reinforcing the need to evaluate what users actually do with uncertainty cues.
- Cho and Lim (2026), *How Source Attribution Visualization Shapes User Attention and Preference* — complementary evidence that evidential cues must be perceptually usable, not merely technically present.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Kim et al. (2024) selectively, because Xu et al. position it as the closest predecessor on uncertainty expression, reliance and trust and it may sharpen the distinction between expressed uncertainty and appropriate reliance.
- **What I will test or write next:** Define and UAT a small controlled vocabulary for Turin historical claims: documented / supported inference / contested / conflicting / corpus insufficient. Test whether users understand the evidential distinction without either reading the system as overconfident or experiencing every answer as generically hesitant.