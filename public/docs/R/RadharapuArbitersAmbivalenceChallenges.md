---
title: "Arbiters of ambivalence: challenges of using LLMs in no-Consensus tasks"
authors: "Radharapu, Bhaktipriya and Revel, Manon and Ung, Megan and Ruder, Sebastian and Williams, Adina"
year: 2025
journal: "Findings of the Association for Computational Linguistics: ACL 2025"
citation_key: RadharapuArbitersAmbivalenceChallenges
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
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
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Methodological anchor"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
  - "09 Human judgement and practice-led computational research"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Methodological anchor  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 02 LLM epistemic risk and persuasive fluency; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

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
I need empirical evidence about whether LLMs preserve genuine disagreement and ambiguity when they move from generating possible interpretations to judging, ranking or resolving between them.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin discussion of plural historical inquiry. It helps establish that computational synthesis should not automatically resolve competing interpretations into a single preferred account, particularly where the evidence supports legitimate disagreement.

**Why this term, not alternatives (1–2 lines):**  
I use *interpretive plurality* rather than *neutrality* for the DDR because historical readings need not be symmetrical or value-neutral. The methodological requirement is to preserve materially supported competing interpretations without forcing premature consensus.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Radharapu et al. as empirical evidence that LLM judging and debate can collapse valid disagreement and that explicit affordances for ambiguity materially change model behaviour. Do not equate every historical disagreement with two equally supported positions.

# Position + moment (2–4 lines)

Radharapu et al. write from contemporary NLP, model evaluation and pluralistic-alignment research. Their ACL 2025 study responds to growing use of LLMs as substitutes for human annotators, evaluators and judges by asking whether those systems preserve disagreement in tasks where humans themselves lack consensus. They construct a No-Consensus Benchmark covering moral, causal, linguistic, scientific, subjective, controversial and cultural/social ambiguity and test five LLMs as answer generators, judges and debaters.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
High agreement with human majorities on conventional benchmarks should not be treated as evidence that a model can represent plural human judgement. Evaluation systems built around choosing winners may structurally suppress precisely the ambiguity that contested historical inquiry needs to retain.

# The author’s main move (1 sentence)

They try to test whether LLMs can preserve human disagreement by moving the same models across answer-generation, judging and debate roles on deliberately no-consensus questions and measuring how often they retain rather than resolve ambiguity.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** An LLM's ability to give a nuanced answer does not mean it will preserve that nuance when asked to judge between competing positions.
- **Evidence (quote/paraphrase + page):** Across five models, neutrality was generally highest when models generated answers directly and fell substantially when those same models acted as pairwise judges, pointwise judges or debate judges. The authors observe a significant decrease across all models and datasets in pairwise judging and describe that configuration as potentially ill-suited to no-consensus tasks. `[@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4683]` Figure 1 on p. 4677 and the heatmaps in Figure 3 on p. 4683 make the role-dependent drop especially clear.
- **Warrant (my words):** Producing several legitimate perspectives and selecting between those perspectives are different computational operations. A system capable of articulating ambiguity can still erase it when the interface or inference procedure demands a winner.
- **So what for my thesis (a reusable sentence):** The capacity of an LLM to articulate competing historical interpretations should not be confused with an ability to adjudicate responsibly between them; the act of computational judging can itself collapse evidentially legitimate ambiguity.
- **Practice cross-check:** Turin comparative and research-query modes should expose competing DDR traces or interpretations side by side where warranted rather than asking a model to rank one historical reading as definitively superior.

## Claim 2

- **Claim (plain):** LLMs can generate persuasive arguments for opposing positions, so rhetorical quality is not sufficient evidence that one interpretation is better warranted.
- **Evidence (quote/paraphrase + page):** In the steerability analysis, models generated well-articulated arguments for both sides of no-consensus questions. Pointwise judges generally rated both positions highly, and the mean absolute difference between winning and losing stances was only 1.13 points across tasks and models. `[@RadharapuArbitersAmbivalenceChallenges, p. 4696]` The sample material later in the paper shows the same model constructing plausible, confident arguments for directly opposing answers. `[@RadharapuArbitersAmbivalenceChallenges, pp. 4727–4731]`
- **Warrant (my words):** Fluency, coherence and evidential presentation can be manufactured for mutually incompatible positions. Persuasiveness therefore cannot serve as a proxy for historical warrant.
- **So what for my thesis:** Retrieval-augmented historical inference should privilege the relationship between interpretation and source evidence over the rhetorical completeness or apparent persuasiveness of the generated account.
- **Practice cross-check:** Turin: when two interpretations of DDR evidence can each be narrated convincingly, compare their supporting traces, chronology, provenance and contradictions rather than allowing generative fluency to determine which interpretation appears authoritative.

## Claim 3

- **Claim (plain):** Ambiguity often has to be explicitly represented as an available outcome; models do not reliably preserve it by default.
- **Evidence (quote/paraphrase + page):** The authors' initial open-ended experiments found that models frequently selected a stance rather than remaining neutral. When neutrality was made an explicit output option, neutrality increased substantially across most datasets—for GPT-4o, for example, ConflictingQA rose from 31% neutral in open-ended generation to 85% under constrained generation, and Known Unknowns from 30.95% to 79.76%. `[@RadharapuArbitersAmbivalenceChallenges, pp. 4681, 4700]`
- **Warrant (my words):** Interface and prompt structure shape whether unresolved ambiguity survives the inference process. If an output schema only affords affirmative alternatives, the model is encouraged to transform uncertainty into selection.
- **So what for my thesis:** Ambiguity and insufficient evidence should be first-class outcomes of retrieval-augmented historical inquiry rather than exceptional fallbacks that a model must infer on its own.
- **Practice cross-check:** Turin scoped missingness and comparative inquiry should explicitly permit outputs such as multiple supported readings, conflicting evidence, unresolved relation and corpus-insufficient, rather than requiring every query to terminate in one historical conclusion.

# Definitions / terms this changes (only the ones that matter)

- **No-consensus question:** a question for which multiple answers are considered valid and human annotators are likely to disagree. `[@RadharapuArbitersAmbivalenceChallenges, p. 4680]`
- **Neutrality:** in the authors' operationalisation, the proportion of cases in which the model retains a neutral/tie/both outcome rather than selecting one of two stances. `[@RadharapuArbitersAmbivalenceChallenges, p. 4682]`
- **Steerability:** the demonstrated ability of a model to produce comparably strong arguments supporting opposing positions. `[@RadharapuArbitersAmbivalenceChallenges, p. 4696]`
- **Interpretive plurality:** my historical extension: preserving multiple evidentially warranted readings and their differences without assuming that disagreement must be computationally resolved.
- **Premature adjudication:** my term for an inference step that converts an evidentially unresolved or legitimately contested relationship into a preferred historical conclusion because the system architecture demands selection.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - This gives me direct empirical support for preserving ambiguity as an explicit system state rather than assuming a sufficiently capable LLM will do so automatically.
  - The distinction between generator and judge roles is critical for Turin: generative plurality can disappear as soon as the model is asked to evaluate or rank the alternatives it has produced.
  - Their steerability findings reinforce the need to separate persuasive argumentation from evidential warrant.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I translate their binary *neutrality* into archival *interpretive plurality*: competing readings may have unequal evidential support, but the system should preserve those differences rather than force a binary winner.
  - I treat ambiguity as evidence about the state of the historical record. Where sources genuinely conflict or remain incomplete, preserving that unresolved state is an analytical result.

- **What question it raises next (1–2 bullets):**
  - How should Turin represent several interpretations when they are plausible but not equally supported by the available evidence?
  - Can the inference layer distinguish *conflicting evidence*, *multiple plausible readings*, *insufficient evidence* and *genuine consensus* without reducing them to a single confidence score?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin discussion of plural historical inquiry and retrieval-augmented inference, immediately after establishing that synthesis can strengthen claims beyond their evidence. Use Radharapu et al. to show that an additional adjudication step can also convert genuine ambiguity into a definite stance.
- **Where I will name the title in running text (first-use rule):** “Radharapu et al.'s *Arbiters of Ambivalence* demonstrates that LLMs capable of producing nuanced responses can become markedly more decisive when recast as judges of competing positions.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Comparative Views / Critical Inquiry: retrieve competing DDR traces → construct separately evidenced interpretations → display agreement, tension or unresolved ambiguity → researcher adjudication where appropriate.
- **Workstreams →** retrieval-augmented inference; comparative inquiry; scoped missingness; interpretive plurality; researcher-in-the-loop
- **Deliverables →** Turin methodological argument; thesis S3 critical-method section; comparative-inference UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI systems

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The benchmark constrains disagreement largely to two possible stances and operationalises neutrality through ties or explicit neutral responses, whereas historical interpretation may involve several asymmetrical, temporally situated and unequally evidenced accounts.
- **Risk if misused (1 sentence):** Treating all disagreement as requiring neutrality would be as problematic as forcing consensus: the authors themselves caution that some no-consensus questions may legitimately require a system to take a position, and disagreement alone does not make competing claims equally warranted.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 4677–4685, 4694–4700
- **First full note (write it out here):** Bhaktipriya Radharapu, Manon Revel, Megan Ung, Sebastian Ruder, and Adina Williams, “Arbiters of Ambivalence: Challenges of Using LLMs in No-Consensus Tasks,” in *Findings of the Association for Computational Linguistics: ACL 2025* (2025), 4677–4731.
- **Short note form:** Radharapu et al., “Arbiters of Ambivalence,” [page].
- **One quote worth lifting (≤2 lines):** “models do not naturally adopt a neutral stance” (p. 4679).
- **One paraphrase worth keeping:** LLMs that produce nuanced responses in open-ended generation become substantially more decisive when placed in judge or debate roles, while explicit provision for a neutral outcome materially increases preservation of ambiguity. (pp. 4677–4685, 4700)

# Related works (only if it directly connects)

- Pavlick and Kwiatkowski (2019), *Inherent Disagreements in Human Textual Inferences* — important conceptual precursor establishing that disagreement can reflect genuine interpretive variation rather than annotation error.
- Plank (2022), *The “Problem” of Human Label Variation* — directly relevant to rejecting the assumption that one majority label necessarily constitutes ground truth.
- Sorensen et al. (2024), *A Roadmap to Pluralistic Alignment* — provides the pluralistic-alignment vocabulary through which Radharapu et al. interpret answer generation, judging and distributional representation.
- Isch et al. (2026), *Quantifying the Prevalence and Impact of Overreaching Causal Claims in Social Science* — complementary evidence that synthesis can strengthen relations beyond their evidential warrant; Radharapu et al. show that adjudication can separately collapse legitimate ambiguity.
- Ortolja-Baird and Nyhan (2022), *Encoding the Haunting of an Object Catalogue* — archival counterpart showing why ambiguity, absence and incomplete evidence should be made analytically visible rather than automatically resolved.
- Qian and Wexler (2024), *Take It, Leave It, or Fix It* — supports retaining active human judgement because users can become behaviourally dependent on AI even when consciously sceptical of it.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Pavlick and Kwiatkowski (2019) or Plank (2022) selectively, because they provide the human-annotation theory beneath the claim that disagreement may constitute meaningful evidence rather than noise to be resolved.
- **What I will test or write next:** Add a *plurality preservation* test to Turin UAT: construct queries for which DDR sources support competing readings and test whether the system (1) retrieves evidence for each, (2) preserves differences in evidential support, (3) avoids selecting a winner without warrant, and (4) exposes the unresolved relationship to the researcher.