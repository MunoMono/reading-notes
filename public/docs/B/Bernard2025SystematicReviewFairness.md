---
title: "A systematic review of fairness, accountability, transparency, and ethics in information retrieval"
authors: "Bernard, Nolwenn and Balog, Krisztian"
year: 2025
journal: "ACM Computing Surveys"
volume: "57"
number: "6"
pages: "Article 136, 1–29"
citation_key: Bernard2025SystematicReviewFairness
doi: "10.1145/3637211"
url: "https://dl.acm.org/doi/10.1145/3637211"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
last_updated: "03 Oct 2026"
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
source_type: "Context / supporting"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature"
project_tags:
  - "Theoretical framework"
  - "Turin"
  - "Thesis"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 3. Critical computational approaches  
**Literature cluster:** c) Contemporary bridge literature  
**Zotero filing path:** Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature  
**Source type:** Context / supporting

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

**How this source moves the primary research question forward:** Bernard and Balog show that retrieval is not simply a neutral prelude to interpretation: ranking allocates visibility, while fairness, accountability and transparency require explicit definitions and evaluation. This gives the thesis a critical language for examining the evidence surface produced before retrieval-augmented inference begins.

**How this source bears on the secondary question:** If DDR-period ideas are to be revisited through computational search, the ranking and explanation mechanisms that determine what becomes visible must themselves be scrutinised.

**Why I’m reading this now:** It provides a systematic map of FATE concerns at the retrieval layer rather than only at the generative-model layer.

**Where it sits in my argument:** Contemporary bridge literature on ranking, retrieval authority, provenance and interface transparency.

**My benchmark for using it:** I will use Bernard and Balog to make retrieval operations explicit and to avoid collapsing diverse notions such as fairness, diversity, exposure, transparency and accountability into one generic claim of “responsible AI.”

# Position + moment

Bernard and Balog systematically review 75 studies on fairness, accountability, transparency and ethics in non-personalised information retrieval. Their focus is deliberately narrow—ranked retrieval in response to textual queries—which makes the article especially useful for analysing the evidential conditions established before any later generative synthesis. [@Bernard2025SystematicReviewFairness, pp. 1–4]

# The author’s main move

The review argues that FATE concepts in information retrieval remain multidimensional, inconsistently defined and unevenly evaluated; it therefore builds taxonomies for fairness, accountability and transparency and identifies unresolved trade-offs among them. [@Bernard2025SystematicReviewFairness, pp. 10–24]

# Critical-reading claims

## Claim 1

**Claim.** Retrieval is fundamentally a ranking operation, and ranking allocates visibility. **Author claim.** Bernard and Balog define information retrieval as finding items relevant to an information need and ranking them according to estimated relevance. **Evidence.** They stress that even increasingly complex information-access systems still address a ranking problem at their core and cite evidence that search-result composition can affect user perceptions. [@Bernard2025SystematicReviewFairness, p. 2] **Evidence-supported claim.** They stress that even increasingly complex information-access systems still address a ranking problem at their core and cite evidence that search-result composition can affect user perceptions. [@Bernard2025SystematicReviewFairness, p. 2] **Researcher inference.** In DDR retrieval-augmented inference, ranking establishes the evidential field from which later interpretation proceeds. **Warrant.** Items ranked outside the visible or retrieved set are less likely to enter subsequent human or model reasoning. **Boundary.** Ranking position does not by itself establish historical importance or injustice. **Consequence.** Retrieval configuration must be treated as part of method, not hidden implementation detail. **Practice cross-check.** Vary top-k, similarity thresholds and retrieval routes in UAT and observe which DDR traces disappear or recur.
## Claim 2

**Claim.** Transparency needs to explain relationships among query, system operation and returned results. **Author claim.** The review identifies transparency with communicating how a system works, why particular outputs occur and which trade-offs govern those outputs. **Evidence.** Bernard and Balog distinguish global, local and causal transparency and several communication modalities, including user interfaces, articles and open resources. [@Bernard2025SystematicReviewFairness, pp. 19–21] **Evidence-supported claim.** Bernard and Balog distinguish global, local and causal transparency and several communication modalities, including user interfaces, articles and open resources. [@Bernard2025SystematicReviewFairness, pp. 19–21] **Researcher inference.** Source citations alone are not sufficient transparency if users cannot understand how those sources were selected. **Warrant.** Provenance is stronger when it covers both source identity and the route by which a source entered the evidence set. **Boundary.** Full technical disclosure may conflict with security, privacy or usability and is not always necessary for every user. **Consequence.** The DDR interface should expose enough retrieval context for researchers to scrutinise why evidence surfaced. **Practice cross-check.** Preserve retrieval rank/similarity, query, evidence route and source PID alongside synthesis where feasible.
## Claim 3

**Claim.** Fairness is multidimensional and cannot be inferred from simple proxies such as diversity or exposure. **Author claim.** Bernard and Balog find multiple competing fairness definitions across individual/group, consumer/producer and single/multiple-output dimensions. **Evidence.** The review warns that diversity, exposure and absence of obvious bias are not equivalent to fairness and notes tensions among fairness definitions. [@Bernard2025SystematicReviewFairness, pp. 10–11, 17–19] **Evidence-supported claim.** The review warns that diversity, exposure and absence of obvious bias are not equivalent to fairness and notes tensions among fairness definitions. [@Bernard2025SystematicReviewFairness, pp. 10–11, 17–19] **Researcher inference.** Surfacing more women or marginal roles in DDR does not by itself establish that a retrieval system is historiographically fair. **Warrant.** Representational variety is a measurable output property; historical fairness is a normative interpretation that requires context-specific criteria. **Boundary.** The review’s fairness literature concerns IR systems, not historical justice or archival reparative practice. **Consequence.** Feminist retrieval evaluation needs explicit historical criteria rather than generic diversity metrics. **Practice cross-check.** Treat counts of surfaced women/roles as descriptive diagnostics, not as proof of fairness.
## Claim 4

**Claim.** Accountability requires identifying rules, complaint mechanisms and responsibility rather than merely publishing an explanation. **Author claim.** Bernard and Balog propose an accountability taxonomy covering applicable rules, independent complaint mechanisms and responsible actors. **Evidence.** Pages 19–20 show that responsibility may be attributed to user, algorithm or designer, while some deployed systems disclaim responsibility without clearly designating another accountable party. [@Bernard2025SystematicReviewFairness, pp. 19–20] **Evidence-supported claim.** Pages 19–20 show that responsibility may be attributed to user, algorithm or designer, while some deployed systems disclaim responsibility without clearly designating another accountable party. [@Bernard2025SystematicReviewFairness, pp. 19–20] **Researcher inference.** In a research system, accountability means that corpus decisions, retrieval behaviour and synthesis choices must remain attributable to identifiable human and technical processes. **Warrant.** A system cannot be meaningfully audited if responsibility disappears into an undifferentiated “AI” actor. **Boundary.** The taxonomy is a research synthesis, not a legal allocation of liability. **Consequence.** Method reporting should identify researcher decisions and system components instead of attributing claims vaguely to “the model.” **Practice cross-check.** Maintain release receipts, source policies and model/version records with named researcher decisions.
## Claim 5

**Claim.** FATE evaluation is uneven: fairness is metric-rich, while accountability, transparency and ethics remain harder to benchmark. **Author claim.** The review finds many automatic fairness metrics but far fewer standardised evaluation protocols for accountability, transparency and ethics. **Evidence.** Pages 21–24 note that fairness benchmarks exist, while no equivalent benchmarks were identified for accountability, transparency and ethics; accountability lacks established metrics and ethics is sparsely studied. [@Bernard2025SystematicReviewFairness, pp. 21–24] **Evidence-supported claim.** Pages 21–24 note that fairness benchmarks exist, while no equivalent benchmarks were identified for accountability, transparency and ethics; accountability lacks established metrics and ethics is sparsely studied. [@Bernard2025SystematicReviewFairness, pp. 21–24] **Researcher inference.** A single performance score cannot validate the epistemic responsibility of DDR retrieval-augmented inference. **Warrant.** Different normative properties require different forms of evidence and evaluation. **Boundary.** Lack of a benchmark does not mean a property cannot be assessed qualitatively. **Consequence.** DDR UAT should combine retrieval diagnostics with qualitative checks on evidential status, ambiguity, provenance and limits. **Practice cross-check.** Keep the four UAT criteria—relevant traces, evidential status, ambiguity, limits—alongside quantitative retrieval measures.
## Claim 6

**Claim.** Trustworthy retrieval involves trade-offs that cannot be optimised away. **Author claim.** Bernard and Balog ask whether one system can be fair, transparent, accountable and ethical simultaneously and explicitly identify tensions among FATE notions and system performance. **Evidence.** Pages 22–24 discuss conflicts between fairness types, transparency and confidentiality, and the need to make trade-offs clear to users and experts. [@Bernard2025SystematicReviewFairness, pp. 22–24] **Evidence-supported claim.** Pages 22–24 discuss conflicts between fairness types, transparency and confidentiality, and the need to make trade-offs clear to users and experts. [@Bernard2025SystematicReviewFairness, pp. 22–24] **Researcher inference.** DDR interface design should state which epistemic priorities it optimises—for example provenance and ambiguity preservation—even when those priorities reduce brevity or apparent certainty. **Warrant.** Responsible design is partly the explicit governance of incompatible objectives. **Boundary.** The article does not prescribe which trade-offs are appropriate for archival research. **Consequence.** The thesis should justify its own priorities rather than borrowing “responsible AI” as an undifferentiated label. **Practice cross-check.** Treat preservation of provenance, ambiguity and scoped missingness as design priorities even where they make answers less frictionless.
# Definitions / terms this changes

- **Information retrieval:** ranked selection of material in response to an information need. [@Bernard2025SystematicReviewFairness, pp. 1–2]
- **Local transparency:** explanation of the relationship between a particular query and its returned results. [@Bernard2025SystematicReviewFairness, pp. 20–21]
- **Causal transparency:** explanation of how internal system processes produce a specific output. [@Bernard2025SystematicReviewFairness, pp. 20–21]
- **Accountability:** here, requirements concerning governing rules, independent complaint mechanisms and attribution of responsibility. [@Bernard2025SystematicReviewFairness, pp. 19–20]
- **Fairness:** a context-dependent family of requirements rather than a single measurable property. [@Bernard2025SystematicReviewFairness, pp. 10–11]

# My response

Bernard and Balog are valuable because they move critical scrutiny upstream from generated answers to retrieval itself. Their review makes two points especially important for DDR: ranking allocates evidential visibility, and “responsibility” cannot be reduced to one technical metric. The article therefore supports a retrieval layer that is inspectable, testable and explicitly governed by stated epistemic priorities.

# Integration hooks

**Where I will cite it:** Retrieval/ranking methodology; interface authority; provenance display; UAT; feminist retrieval diagnostics.

**Link to my practice evidence:** Semantic neighbourhoods, top-k evidence selection, source cards and query answering all construct a ranked evidence surface that can be tested under alternative parameters.

**Workstreams →** retrieval; FATE; interface transparency; feminist critique; UAT.  
**Deliverables →** Methods; limitations; interface principles; evaluation protocol.  
**Stakeholders →** Archival researchers; design historians; AI/IR researchers.

# Boundary + risk

**Boundary:** The review deliberately focuses on non-personalised ranked retrieval and its literature search largely predates current RAG/LLM deployment.

**Risk if misused:** Importing its taxonomies as ready-made historical fairness measures would conflate technical IR properties with contested historiographic judgments.

# Cross-source / cross-lens synthesis

Bernard and Balog add a retrieval-governance layer to the computational framework. Zaagsma shows how digitisation, metadata and search shape the available evidence surface; Mordell shows that archives-as-data are constructed; Bender et al. challenge assumptions embedded in large language models; Radharapu et al. show that LLM judging can collapse legitimate disagreement. For DDR, these sources together imply that responsible RAI begins before generation: corpus construction, ranking, retrieval visibility and explanation all condition what can subsequently be inferred.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 2, 10–11, 17–24
- **First full note:** Nolwenn Bernard and Krisztian Balog, “A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval,” *ACM Computing Surveys* 57, no. 6 (2025): article 136, 1–29, https://doi.org/10.1145/3637211.
- **Short note form:** Bernard and Balog, “Systematic Review of Fairness,” [page].
- **One quote worth lifting:** “modern information access systems still address an IR ranking problem at their core” (p. 2).
- **One paraphrase worth keeping:** Ranking, explanation, responsibility and evaluation are separate dimensions of trustworthy retrieval and cannot be collapsed into one generic measure of system quality. [@Bernard2025SystematicReviewFairness, pp. 19–24]

# Related works

- Zaagsma, “Digital History and the Politics of Digitization.”
- Radharapu et al., “Arbiters of Ambivalence.”
- Bender et al., “On the Dangers of Stochastic Parrots.”
- Mordell, “Critical Questions for Archives as (Big) Data.”

# Follow-ups

- **What I will test next:** Add retrieval-authority tests that vary top-k and ranking thresholds and record how evidence visibility and interpretative confidence change.
