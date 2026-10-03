---
title: "Arbiters of ambivalence: challenges of using LLMs in no-consensus tasks"
authors: "Radharapu, Bhaktipriya; Revel, Manon; Ung, Megan; Ruder, Sebastian; Williams, Adina"
year: 2025
journal: "Findings of the Association for Computational Linguistics: ACL 2025"
pages: "4677–4731"
citation_key: RadharapuArbitersAmbivalenceChallenges
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
last_updated: "03 Oct 2026, 05:29"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Methodological anchor"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature"
project_tags:
  - "Theoretical framework"
  - "Turin"
  - "Thesis"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 3. Critical computational approaches  
**Literature cluster:** c) Contemporary bridge literature  
**Zotero filing path:** Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature  
**Source type:** Methodological anchor

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

**How this source moves the primary research question forward:** Radharapu et al. provide direct empirical evidence that LLMs can preserve nuance when generating responses yet lose that nuance when recast as judges or debaters. This is highly relevant to DDR because contested design knowledge should not be computationally forced into a single winner where the archival evidence remains genuinely unresolved.

**How this source bears on the secondary question:** Revisiting historical ideas responsibly requires the system to preserve meaningful disagreement rather than smoothing historical plurality into one apparently settled answer.

**Why I’m reading this now:** It supplies an experimental basis for treating ambiguity as an explicit output state and for separating generation from adjudication.

**Where it sits in my argument:** Contemporary bridge literature on pluralistic inference, human judgement and the epistemic risks of LLM-as-judge architectures.

**My benchmark for using it:** I will use the paper to justify explicit ambiguity/plurality handling, not to claim that all disagreements are equally valid or that neutrality is always the correct response.

# Position + moment

Radharapu et al. write from contemporary NLP and model-evaluation research. Their No-Consensus Benchmark spans seven classes of disagreement and tests multiple LLMs as answer generators, pointwise judges, pairwise judges and debaters. The study is designed specifically to ask whether models preserve human disagreement when role and evaluation structure change. [@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4682]

# The author’s main move

The authors show that model behaviour is role-dependent: systems that can generate nuanced or balanced answers become markedly more decisive when asked to judge or debate, and explicit affordances for neutrality materially change the rate at which ambiguity survives. [@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4685]

# Critical-reading claims

## Claim 1

**Claim.** Nuanced generation does not imply nuanced judging. **Author claim.** Radharapu et al. find that LLM neutrality is generally highest in answer-generation mode and drops substantially in judging and debate modes. **Evidence.** Across models and datasets, pairwise judging produces the largest reductions in neutrality relative to direct answer generation, with pointwise judging and debate also often reducing neutrality. [@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4684] **Evidence-supported claim.** Across models and datasets, pairwise judging produces the largest reductions in neutrality relative to direct answer generation, with pointwise judging and debate also often reducing neutrality. [@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4684] **Researcher inference.** A DDR model that can articulate several plausible readings should not automatically be trusted to rank those readings responsibly. **Warrant.** Generation and adjudication are distinct computational operations with different failure modes. **Boundary.** Neutrality is an operational metric in a benchmark, not a universal measure of good historical interpretation. **Consequence.** Comparative DDR interpretations should remain separately evidenced before any human or model adjudication. **Practice cross-check.** Keep comparative views able to display competing trace families side by side without requiring a ranked winner.
## Claim 2

**Claim.** Persuasive argument quality is not a proxy for evidential warrant. **Author claim.** The authors show that models are steerable enough to construct strong arguments for opposing positions. **Evidence.** Pointwise judges often rate both opposing responses highly, and the reported mean absolute score difference between winning and losing stances is small; qualitative examples show similarly fluent arguments on both sides. [@RadharapuArbitersAmbivalenceChallenges, p. 4696; pp. 4727–4731] **Evidence-supported claim.** Pointwise judges often rate both opposing responses highly, and the reported mean absolute score difference between winning and losing stances is small; qualitative examples show similarly fluent arguments on both sides. [@RadharapuArbitersAmbivalenceChallenges, p. 4696; pp. 4727–4731] **Researcher inference.** In archival synthesis, fluency and completeness must not determine which historical interpretation appears better supported. **Warrant.** Language-model rhetoric is generated independently of whether one side has stronger source evidence. **Boundary.** The benchmark does not test archival provenance or historical source criticism directly. **Consequence.** DDR interpretation quality should be assessed against trace provenance, chronology and contradiction, not prose quality. **Practice cross-check.** Compare claim-to-source bindings before accepting any synthesized interpretation as stronger.
## Claim 3

**Claim.** Ambiguity often must be represented explicitly in the output schema. **Author claim.** Radharapu et al. find that models do not reliably choose neutrality in open-ended settings but do so much more often when a neutral/both option is explicitly available. **Evidence.** Constrained generation with an explicit neutral outcome substantially increases neutrality relative to open-ended generation across multiple tasks. [@RadharapuArbitersAmbivalenceChallenges, pp. 4681, 4700] **Evidence-supported claim.** Constrained generation with an explicit neutral outcome substantially increases neutrality relative to open-ended generation across multiple tasks. [@RadharapuArbitersAmbivalenceChallenges, pp. 4681, 4700] **Researcher inference.** “Unresolved,” “multiple supported readings,” and “corpus-insufficient” should be first-class DDR outcomes rather than rare fallback phrases. **Warrant.** Output structure influences whether a model preserves uncertainty or converts it into selection. **Boundary.** Making neutrality available can also encourage unnecessary hedging. **Consequence.** Ambiguity states need explicit criteria tied to evidence rather than generic caution. **Practice cross-check.** Add structured outputs for conflicting evidence, multiple plausible readings and scoped missingness.
## Claim 4

**Claim.** Neutrality is not a stable property of a model; it changes with role, model choice and task. **Author claim.** The authors report substantial heterogeneity across model families and evaluation roles. **Evidence.** Open-source and closed-source models differ in answer-generation neutrality, different models are more or less neutral as pointwise judges or debaters, and task categories show different patterns. [@RadharapuArbitersAmbivalenceChallenges, pp. 4683–4684] **Evidence-supported claim.** Open-source and closed-source models differ in answer-generation neutrality, different models are more or less neutral as pointwise judges or debaters, and task categories show different patterns. [@RadharapuArbitersAmbivalenceChallenges, pp. 4683–4684] **Researcher inference.** DDR should not treat a model-level benchmark score as a guarantee that ambiguity will be preserved in every workflow state. **Warrant.** Behaviour emerges from the interaction of model, prompt, role and task. **Boundary.** The tested models and benchmark reflect 2025 systems and do not generalise mechanically to every future model. **Consequence.** UAT must test the actual DDR pipeline in its actual roles rather than rely on generic model reputation. **Practice cross-check.** Test the same contested DDR question under answer, comparison and adjudication prompts and compare evidential behaviour.
## Claim 5

**Claim.** Greater decisiveness can make LLM judgments less representative of genuinely distributed human disagreement. **Author claim.** Radharapu et al. compare model label distributions with known human distributions and find that more decisive pairwise judges align less well with high-entropy human disagreement. **Evidence.** Page 4684 reports that pairwise judges are generally more decisive and less neutral and that lower-entropy judge distributions align less well with high-entropy human distributions. [@RadharapuArbitersAmbivalenceChallenges, p. 4684] **Evidence-supported claim.** Page 4684 reports that pairwise judges are generally more decisive and less neutral and that lower-entropy judge distributions align less well with high-entropy human distributions. [@RadharapuArbitersAmbivalenceChallenges, p. 4684] **Researcher inference.** A single decisive historical answer can be less faithful to the evidential situation than an explicitly plural output. **Warrant.** Consistency is not automatically epistemic quality when the underlying phenomenon is genuinely plural. **Boundary.** Historical archival disagreement is not equivalent to crowdsourced human label distributions. **Consequence.** Evaluation should reward preserved evidential plurality when the record supports it, rather than rewarding decisiveness alone. **Practice cross-check.** Add a plurality-preservation UAT family for questions known to have competing DDR formulations.
## Claim 6

**Claim.** “No consensus” does not mean a model should always remain neutral. **Author claim.** The authors explicitly caution that some disputed questions may still warrant a system taking a position and that task-level “no agreement” labels can themselves be too coarse. **Evidence.** Pages 4684–4685 state that disagreement alone is not a sufficient reason for neutrality and discuss meta-disagreement about whether examples should count as no-consensus cases in the first place. [@RadharapuArbitersAmbivalenceChallenges, pp. 4684–4685] **Evidence-supported claim.** Pages 4684–4685 state that disagreement alone is not a sufficient reason for neutrality and discuss meta-disagreement about whether examples should count as no-consensus cases in the first place. [@RadharapuArbitersAmbivalenceChallenges, pp. 4684–4685] **Researcher inference.** DDR interpretive plurality should preserve asymmetries in evidence: several readings may remain visible without being treated as equally supported. **Warrant.** Responsible ambiguity preservation requires discriminating among contested, weakly supported and unsupported claims. **Boundary.** The article’s binary stance structure is simpler than multi-source historical interpretation. **Consequence.** The DDR system should preserve plural readings while still attaching differentiated evidential strength and source status. **Practice cross-check.** Render interpretations as supported / partially supported / unresolved rather than “both sides equally valid.”
# Definitions / terms this changes

- **No-consensus question:** a question for which multiple answers may be valid and human annotators are likely to disagree. [@RadharapuArbitersAmbivalenceChallenges, p. 4680]
- **Neutrality:** the authors’ operational measure of retaining a neutral/tie/both outcome rather than selecting one stance. [@RadharapuArbitersAmbivalenceChallenges, p. 4682]
- **Steerability:** ability to generate strong arguments for opposing positions. [@RadharapuArbitersAmbivalenceChallenges, p. 4696]
- **Interpretive plurality:** my historical extension: preserving multiple evidentially warranted readings without assuming that disagreement must be computationally resolved.
- **Premature adjudication:** my term for converting an evidentially unresolved relation into a preferred conclusion because the system architecture demands selection.

# My response

This paper gives the thesis a particularly strong empirical reason to avoid “winner-takes-all” synthesis. Its importance is not that neutrality is always desirable; rather, model role and interface design materially affect whether ambiguity survives. For DDR, the most defensible move is to preserve competing interpretations with their evidential differences and leave adjudication to the point where the sources actually support it.

# Integration hooks

**Where I will cite it:** Retrieval-augmented inference; comparative views; ambiguity handling; UAT design; researcher-in-the-loop justification.

**Link to my practice evidence:** The system can separate retrieval, claim construction and final synthesis, allowing competing evidence families to remain visible before any final interpretation.

**Workstreams →** RAI; comparative inquiry; scoped missingness; interpretive plurality; UAT.  
**Deliverables →** Methods; evaluation protocol; interface behaviour; limitations.  
**Stakeholders →** Archival researchers; historians; AI-evaluation researchers.

# Boundary + risk

**Boundary:** The benchmark operationalises disagreement largely through two stances and tie/neutral outcomes, whereas historical interpretation may involve several asymmetrical and temporally situated accounts.

**Risk if misused:** Treating all disagreement as equally valid would erase evidential differences just as surely as forced consensus would erase ambiguity.

# Cross-source / cross-lens synthesis

Radharapu et al. extend the computational critique from retrieval into adjudication. Bernard and Balog show that ranking constructs the evidence surface; Asai et al. show that retrieval-augmented synthesis can improve citation-grounded generation but remains bounded by retrieval and synthesis design; Bender et al. warn against treating fluent language as understanding; Portelli and Thomson show that historical testimony itself can sustain meaningful divergence. Together, these sources support a DDR architecture in which retrieval, interpretation and adjudication remain separable and ambiguity is preserved as an evidential state rather than a model failure.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 4677–4685, 4696, 4700
- **First full note:** Bhaktipriya Radharapu, Manon Revel, Megan Ung, Sebastian Ruder, and Adina Williams, “Arbiters of Ambivalence: Challenges of Using LLMs in No-Consensus Tasks,” in *Findings of the Association for Computational Linguistics: ACL 2025* (2025), 4677–4731.
- **Short note form:** Radharapu et al., “Arbiters of Ambivalence,” [page].
- **One quote worth lifting:** “models do not naturally adopt a neutral stance” (p. 4679).
- **One paraphrase worth keeping:** LLMs that generate nuanced answers often become substantially more decisive when recast as judges or debaters, while explicit neutral options materially increase preservation of ambiguity. [@RadharapuArbitersAmbivalenceChallenges, pp. 4677–4685]

# Related works

- Bernard and Balog, “A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval.”
- Bender et al., “On the Dangers of Stochastic Parrots.”
- Asai et al., “Synthesizing Scientific Literature with Retrieval-Augmented Language Models.”
- Ortolja-Baird and Nyhan, “Encoding the Haunting of an Object Catalogue.”

# Follow-ups

- **What I will test next:** Build a plurality-preservation UAT set where DDR sources support competing readings and verify that the system preserves evidence for each without forcing unsupported resolution.
