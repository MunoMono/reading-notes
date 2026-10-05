---
title: "A Survey on Bias and Fairness in Machine Learning"
authors: "Mehrabi, Ninareh; Morstatter, Fred; Saxena, Nripsuta; Lerman, Kristina; Galstyan, Aram"
year: 2021
journal: "ACM Computing Surveys"
volume: "54"
number: "6"
pages: "Article 115, 35 pages"
citation_key: Mehrabi2021SurveyBiasFairness
doi: "10.1145/3457607"
url: "https://doi.org/10.1145/3457607"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "05 Oct 2026"
last_updated: "05 Oct 2026, 11:07"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
theoretical_framework_area_id: "4"
theoretical_framework_area: "Feminist + situated knowledge"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / 4. Feminist + situated knowledge / b) Operational literature"
source_type: "Operational bias and fairness taxonomy"
project_tags:
  - "Theoretical framework"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 4. Feminist + situated knowledge  
**Literature cluster:** b) Operational literature  
**Zotero filing path:** Theoretical framework / 4. Feminist + situated knowledge / b) Operational literature  
**Source type:** Operational bias and fairness taxonomy

# Thesis job

**How this source moves the primary research question forward:** Mehrabi et al. provide a technical vocabulary for locating bias across data, algorithms, evaluation, ranking, representation and user interaction. This helps the thesis distinguish inherited archival skew from bias introduced by computational processing.

**How this source bears on the secondary question:** If DDR-period ideas are revisited through contemporary machine learning, the thesis needs to know whether visibility differences come from the historical record, the digital corpus, the model, the interface or evaluation choices.

**Why I’m reading this now:** The thesis uses embeddings, retrieval, ranking, semantic neighbourhoods and UMAP; this survey gives an operational framework for diagnosing where unequal representation may enter those processes.

**Where it sits in my argument:** Operational literature because it classifies concrete sources of bias and fairness interventions across machine-learning pipelines.

**My benchmark for using it:** I will use its taxonomy diagnostically, not as proof that a DDR output is “fair.” A bias label is useful only when I can identify the relevant data or system mechanism and show evidence that it affects retrieval, representation or interpretation.

# Position + moment

Mehrabi et al. survey algorithmic bias and fairness research across machine learning, deep learning and NLP. Their central contribution is a taxonomy that places bias within a feedback loop between data, algorithms and users, alongside a review of competing fairness definitions and mitigation strategies. [@Mehrabi2021SurveyBiasFairness, pp. 1–4]

# The author’s main move

The survey rejects the idea that bias has one source. Biased outcomes may arise from historical data, sampling, representation, measurement, aggregation, algorithms, ranking, interfaces, evaluation or user behaviour, and these sources can reinforce one another through feedback. Fairness therefore depends on context and cannot be reduced to a single universal metric. [@Mehrabi2021SurveyBiasFairness, pp. 2–13]

# Critical-reading claims

## Claim 1

**Claim.** Bias in machine learning can enter through both the data and the algorithm and then be reinforced by user interaction. **Author claim.** Mehrabi et al. organise bias through a data–algorithm–user feedback loop. **Evidence.** They explain that biased data can produce biased models, algorithmic design can introduce new bias even where input data are not biased, and user interaction can feed resulting distortions back into future training data. [@Mehrabi2021SurveyBiasFairness, pp. 2–4] **Evidence-supported claim.** Computational bias is distributed across a system rather than located only in training data. **Researcher inference.** DDR retrieval failures or visibility asymmetries should not automatically be attributed to the archive itself. **Warrant.** Similar effects can be introduced at corpus construction, ranking, interface or model stages. **Boundary.** The survey mainly addresses predictive and decision systems, not archival research instruments. **Consequence.** The thesis should diagnose bias by pipeline stage. **Practice cross-check.** Separate source-distribution skew, chunking effects, embedding behaviour, retrieval ranking and interface exposure in evaluation logs.

## Claim 2

**Claim.** Representation and sampling bias can make minority or weakly represented groups less visible even before any model is trained. **Author claim.** The survey defines representation bias as arising when collected data fail to reflect relevant population diversity and sampling bias as resulting from non-random subgroup sampling. **Evidence.** The authors use geographically skewed image datasets to show how underrepresentation in source data leads to downstream bias. [@Mehrabi2021SurveyBiasFairness, pp. 5–6] **Evidence-supported claim.** Uneven source distributions can systematically shape model outputs. **Researcher inference.** Heavily documented DDR staff or projects may dominate semantic search simply because they occupy more of the digitised corpus. **Warrant.** Embedding and retrieval systems cannot recover equal representation from profoundly unequal source frequency without intervention. **Boundary.** Historical archival unevenness is not equivalent to a sampled contemporary population. **Consequence.** Corpus frequency should be treated as an explanatory variable when assessing visibility. **Practice cross-check.** Compare retrieval prominence against document/chunk counts by person, project and period.

## Claim 3

**Claim.** Ranking and presentation can create visibility bias even when underlying content exists. **Author claim.** The survey identifies presentation bias and ranking bias as user-interaction mechanisms: users can only engage with what is shown, and top-ranked results attract disproportionate attention. **Evidence.** Pages 7–8 describe how placement and rank shape subsequent interaction and popularity. [@Mehrabi2021SurveyBiasFairness, pp. 7–8] **Evidence-supported claim.** Interface ordering changes practical visibility independently of source presence. **Researcher inference.** In the DDR instrument, a source that exists but is consistently ranked below the visible evidence threshold may become functionally absent. **Warrant.** Retrieval interfaces mediate attention through ordering. **Boundary.** Research users may inspect deeper results more deliberately than general web users. **Consequence.** Evaluation should inspect not only whether relevant evidence is retrieved, but where it appears. **Practice cross-check.** Record rank positions of known relevant traces and test whether key marginal cases fall outside visible result windows.

## Claim 4

**Claim.** Evaluation itself can encode bias if benchmarks or test sets are unrepresentative. **Author claim.** Mehrabi et al. define evaluation bias as arising when inappropriate or disproportionate benchmarks are used to assess a system. **Evidence.** They cite facial-recognition benchmarks skewed by skin colour and gender as examples of apparently general evaluation that masks subgroup performance differences. [@Mehrabi2021SurveyBiasFairness, pp. 8–9] **Evidence-supported claim.** A system can appear successful overall while failing systematically for particular subgroups or cases. **Researcher inference.** DDR UAT must include weakly represented people, contested attribution and scoped-missingness cases rather than only well-documented canonical examples. **Warrant.** Aggregate success can conceal patterned failure. **Boundary.** The thesis’s UAT is a bounded research evaluation, not a population fairness benchmark. **Consequence.** Evaluation cases should intentionally test difficult visibility and attribution conditions. **Practice cross-check.** Retain feminist critique, obscurity and missingness cases in the UAT suite and report subgroup-like failure patterns qualitatively.

## Claim 5

**Claim.** Fairness has multiple incompatible definitions and must be chosen in relation to context and purpose. **Author claim.** The survey reviews equalized odds, equal opportunity, demographic parity, individual fairness, subgroup fairness and other definitions, and notes that some cannot be satisfied simultaneously except in constrained cases. **Evidence.** Pages 11–13 explain that there is no universal fairness definition and that competing constraints require contextual judgement. [@Mehrabi2021SurveyBiasFairness, pp. 11–13] **Evidence-supported claim.** “Fairness” is not a single measurable property of a system. **Researcher inference.** The DDR thesis should avoid claiming that the research instrument is fair in the abstract; it should instead specify concrete criteria such as balanced discoverability, provenance retention or reduced differential failure on selected cases. **Warrant.** Different fairness objectives imply different trade-offs. **Boundary.** The survey’s formal fairness metrics are mainly designed for decision and classification tasks. **Consequence.** Use fairness vocabulary carefully and prefer explicit evaluation criteria over global fairness claims. **Practice cross-check.** Define what counts as an acceptable retrieval outcome per case family rather than adopting a generic fairness score.

## Claim 6

**Claim.** Bias can persist or be amplified in embeddings and other learned representations. **Author claim.** The survey reviews gender bias in word embeddings, contextual embeddings, sentence encoders and language models, including evidence that debiasing techniques may only hide rather than remove underlying associations. **Evidence.** Pages 20–23 discuss stereotypical mappings, skewed corpora, debiasing methods and the limits of apparent bias removal. [@Mehrabi2021SurveyBiasFairness, pp. 20–23] **Evidence-supported claim.** Learned semantic spaces can encode social regularities and distortions from their training corpora. **Researcher inference.** Semantic similarity in the DDR system may reproduce historically dominant vocabularies or contemporary model priors. **Warrant.** Embedding geometry is learned from data and model objectives rather than being a neutral semantic substrate. **Boundary.** The specific embedding model used in DDR is not evaluated by this survey. **Consequence.** Similarity should be treated as a heuristic relation requiring historical checking. **Practice cross-check.** Test whether known equivalent or related DDR terms are represented consistently and whether gendered or role-related vocabulary produces systematic distortions.

## Claim 7

**Claim.** Documentation of dataset construction is part of bias mitigation because every dataset embodies design decisions. **Author claim.** The authors state that every dataset results from choices by data curators and point to datasheets and model documentation as mechanisms for recording creation methods, motivations, characteristics and skews. **Evidence.** The survey presents documentation as a general mitigation strategy in its section on unbiasing data. [@Mehrabi2021SurveyBiasFairness, p. 15] **Evidence-supported claim.** Bias analysis depends on knowing how a dataset was assembled and transformed. **Researcher inference.** The DDR corpus needs explicit records of inclusion rules, exclusions, chunking, metadata mapping and model/version changes. **Warrant.** Without provenance, later researchers cannot identify whether an observed pattern comes from source material or system construction. **Boundary.** Documentation does not itself eliminate bias. **Consequence.** Corpus receipts and release metadata form part of the evidential apparatus. **Practice cross-check.** Maintain named corpus snapshots, inclusion/exclusion rules, model versions and transformation logs.

# Definitions / terms this changes

- **Representation bias →** bias arising when collected data inadequately represent relevant groups or contexts. [@Mehrabi2021SurveyBiasFairness, pp. 5–6]
- **Ranking bias →** visibility distortion created when higher-ranked items receive more attention because of their position. [@Mehrabi2021SurveyBiasFairness, p. 7]
- **Evaluation bias →** distortion introduced by benchmarks or evaluation sets that do not adequately represent the cases a system is expected to handle. [@Mehrabi2021SurveyBiasFairness, p. 8]
- **Historical bias →** bias already present in the world that enters data even under otherwise careful sampling and feature selection. [@Mehrabi2021SurveyBiasFairness, p. 8]
- **Fairness →** not one universal condition but a family of context-dependent criteria that can conflict. [@Mehrabi2021SurveyBiasFairness, pp. 11–13]

# My response

This source is useful because it turns a vague concern about “bias” into a set of separable mechanisms. For the DDR thesis, that distinction is crucial: an absence or skew may originate in historical documentation, digitisation, corpus construction, embeddings, retrieval ranking, interface presentation or evaluation. Treating all of those as one problem would make the computational critique imprecise.

**Reusable thesis sentence:** Computational bias in archival inquiry should be diagnosed by stage: inherited documentary skew, corpus construction, representation, ranking, interface exposure and evaluation can each produce different forms of apparent absence or prominence.

# Integration hooks

- **Where I will cite it:** Critical computational methods; feminist situated-knowledge strand; UAT design; embeddings/UMAP; retrieval ranking; corpus documentation.
- **Where I will name the title in running text:** First technical definition of bias mechanisms across the computational pipeline.
- **Link to my practice evidence:** bge-m3 embeddings, retrieval ranking, semantic neighbourhoods, feminist UAT cases, residual ledger, corpus receipts and release logs.
- **Workstreams →** Bias diagnostics; retrieval evaluation; embeddings; UAT; representation.
- **Deliverables →** Theoretical framework; methods; system evaluation; practice chapter.

# Boundary + risk

**Boundary:** This is a broad machine-learning survey centred on predictive and classification systems, so its fairness metrics cannot be transferred wholesale to archival interpretation.

**Risk:** Using “bias” as a catch-all label would erase important distinctions between historical asymmetry, archival description, corpus composition and algorithmic transformation. The taxonomy is most useful when each diagnosis is tied to a specific mechanism.

# Cross-source / cross-lens synthesis

Mehrabi et al. supply a technical diagnostic vocabulary that complements the feminist operational critique of D’Ignazio and Klein. Where the latter asks whose power, categories, context and labour shape data practice, Mehrabi et al. show where distortions can enter a machine-learning pipeline and how evaluation may conceal them. In the DDR thesis, the combined proposition is that situated critique can be operationalised without reducing it to one fairness score: the system can instead be examined stage by stage for differential visibility, representational skew and failure. What remains empirical is whether such mechanisms materially affect the DDR case set and whether mitigation improves historical inquiry without flattening evidential difference.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 2–9, 11–15, 20–23
- **First full note:** Ninareh Mehrabi et al., “A Survey on Bias and Fairness in Machine Learning,” *ACM Computing Surveys* 54, no. 6 (2021): Article 115, 1–35.
- **Short note form:** Mehrabi et al., “Bias and Fairness in Machine Learning,” 5–8.
- **One quote worth lifting:** “Every dataset is the result of several design decisions made by the data curator.” (p. 15)
- **One paraphrase worth keeping:** Bias can arise in data, algorithms, user interaction, ranking and evaluation, while fairness itself has multiple context-dependent and sometimes incompatible definitions. [@Mehrabi2021SurveyBiasFairness, pp. 2–13]

# Related works

- D’Ignazio and Klein, *Data Feminism*.
- Foka and Griffin, “AI, Cultural Heritage, and Bias.”
- Kizhner et al., “Ethnic Minorities in Online Museum Collections.”
- Jaillant et al., “How Can We Improve the Diversity of Archival Collections with AI?”
- Bender et al., “On the Dangers of Stochastic Parrots.”

# Follow-ups

- **What I will read next:** No immediate gap inside this operational cluster.
- **What I will test or write next:** Map the DDR pipeline against the survey’s bias categories and record which are evidenced, plausible but untested, or out of scope.
