---
title: "A survey on bias and fairness in machine learning"
authors: "Mehrabi, Ninareh and Morstatter, Fred and Saxena, Nripsuta and Lerman, Kristina and Galstyan, Aram"
year: 2021
journal: "ACM Computing Surveys"
citation_key: Mehrabi2021SurveyBiasFairness
doi: "10.1145/3457607"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/harvard-cite-them-right"
link-citations: true
last_updated: "Dec 03, 2025, 05:05 PM"
category: 3.3-Absence,-silence-and-missing-data
---

# Scope of this note
Whole article, with emphasis on: (a) taxonomy of bias sources (data, algorithms, users); (b) operational definitions of fairness; (c) mitigation strategies and open challenges. Used here to bridge archival missingness/silence to bias in DDR-related AI systems.

## Purpose and aim
### What research question or objective is being addressed?

- To **survey how bias and unfairness arise in machine-learning systems**, especially when deployed in high-stakes settings.
- To **classify sources of bias** across a data–algorithm–user feedback loop.
- To **synthesise formal definitions of fairness** and **catalogue mitigation methods** across ML subfields, highlighting remaining challenges.

## Methodology
### Describe the research design, methods and sample size.

- **Narrative survey** of literature on bias and fairness in ML and AI up to c.2019.
- Builds a **conceptual framework**: a *feedback loop* between data, algorithms and users, in which biased outputs change user behaviour and thus future data. (pp. 2–4) 
- Constructs:
  - A typology of **bias types** (measurement, representation, historical, sampling, population, etc.). (pp. 5–9)   
  - A taxonomy of **fairness definitions**: individual, group and subgroup fairness, with specific metrics such as equalised odds, demographic parity, calibration, counterfactual fairness. (pp. 11–13)
  - A classification of **mitigation strategies** into pre-processing, in-processing and post-processing. (p. 14)  
- No formal protocol (e.g. PRISMA); selection is expert-curated rather than systematic.

## Key findings and arguments
### Summarise the main results and conclusions

1. **Bias is systemic and multi-stage.**  
   - Algorithms, like people, are “vulnerable to biases that render their decisions ‘unfair’” (p. 2).  
   - Unfairness can originate in **biased data**, **algorithm design** or **user interaction**, with outcomes feeding back to shape new data (search rankings, recommendations, etc.), amplifying pre-existing skews. (pp. 2–4)

2. **Bias types include several directly tied to absence, silence and missingness.**  
   - **Measurement bias** (mis-measured proxies such as arrests for “riskiness”), **omitted-variable bias**, **representation and sampling bias**, **aggregation bias** (including Simpson’s paradox), and **longitudinal fallacies** are documented as data-to-algorithm distortions. (pp. 5–7)
   - **Historical bias** denotes datasets that faithfully encode an unjust world (e.g. 5% women CEOs) and thus reproduce injustice even when sampled “correctly”. (p. 8)
   - **Population, self-selection, social, behavioural, temporal and content-production biases** capture whose behaviour is recorded, how and when. (pp. 8–9)

3. **Fairness has many formal, often incompatible definitions.**  
   - Fairness is framed as “the absence of any prejudice or favoritism toward an individual or group based on their inherent or acquired characteristics” (pp. 2, 11).
   - Definitions include **demographic parity, equalised odds, equal opportunity, treatment equality, test fairness, conditional statistical parity, counterfactual fairness, fairness through awareness/unawareness**, and **relational fairness**, grouped under individual, group and subgroup fairness. (pp. 11–13) 
   - Some definitions are **provably incompatible** (e.g. calibration vs. balancing error rates), so choice of metric is contextual and normative. (p. 13)

4. **Mitigation methods span pre-, in- and post-processing across domains.**  
   - **Pre-processing**: debiasing or re-weighting data, learning fair representations, *datasheets* and *dataset nutrition labels* documenting provenance and skews. (pp. 14–15)
   - **In-processing**: modifying objective functions or constraints to incorporate fairness (e.g. adversarial debiasing, regularisers, causal constraints). (pp. 14–16)
   - **Post-processing**: adjusting predictions from trained models to satisfy fairness constraints. (p. 14)  
   - Surveyed applications range from classification/regression to clustering, graph embedding, causal inference and NLP (word embeddings, coreference, translation, NER). (pp. 14, 20–24) 

5. **Open challenges: from equality to equity, temporal effects and unified frameworks.**  
   - The authors call for work on **“synthesizing a definition of fairness”**, recognising fragmentation across metrics. (p. 25)
   - They distinguish **equality** (same treatment) from **equity** (resources according to need) and note that operationalising equity is largely unsolved. (pp. 25–26) 
   - Current static metrics may be misleading; fairness interventions can disadvantage protected groups over time, so **temporal analysis** is needed. (p. 26)

## Relevance
### How does it link to the research questions or framework?

- Provides the **technical backbone** for discussing bias and fairness in DDR-adjacent ML systems (e.g. RAG over reconstructed DDR archives).
- Offers a **formal vocabulary for different kinds of missingness**:
  - Representation/sampling/population bias ↔ *who* is documented in DDR.
  - Measurement/omitted-variable bias ↔ *how* DDR forms, codes and metadata capture or fail to capture practice.
  - Historical bias ↔ DDR as a situated institutional product rather than a neutral sample of “design research”.
- Positions fairness as an **explicit design choice**, aligning with the project’s concern for trustworthy, contestable AI over archival infrastructures.

## Project integration
### Why it helps the project (evidence-linked)

- **Maps archival silence into bias categories.**  
  DDR’s partial, selective record can be theorised as **representation/sampling bias** and **historical bias** in the sense used here: under-documented subgroups and historically unequal structures replicated in data. (pp. 5–8)
- **Frames DDR as part of a data–algorithm–user loop.**  
  The feedback loop model suggests that a DDR RAG interface will not only reflect archival gaps but can **amplify them via popularity and ranking effects**, as users preferentially click well-documented programmes/projects. (pp. 2–4, 7–8)
- **Supports explicit fairness design for DDR RAG.**  
  The taxonomy of individual/group/subgroup fairness enables the thesis to state which notions are relevant (e.g. subgroup fairness over disciplines, decades or demographic strata in retrieval quality). (pp. 11–13) 
- **Aligns with documentation-heavy, infrastructural approach.**  
  Calls for dataset *datasheets*, *nutrition labels* and model *cards* resonate with the plan to document DDR schema, provenance and known gaps as part of the computational design. (pp. 15–16, 20)

### Hooks into the project
- **Workstreams →**  
  - 3.3 Absence, silence and missing data (formalising missingness as bias).  
  - 4.3 RAG/XAI/provenance (fairness constraints and audit strategies).  
  - 4.2 Digital libraries / long-tail discovery (feedback loops, popularity bias).
- **Deliverables →**  
  - Section in Strand 2/4 on **trustworthy AI over archival data** grounded in ML fairness literature.  
  - Design-rationale and “model card” text for DDR RAG documenting bias sources and mitigation.
- **Stakeholders →**  
  - Archivists/librarians modelling DDR.  
  - AI practitioners building tools over DDR.  
  - DDR users whose visibility depends on how the system ranks and retrieves material.

### Use across the methods spine
- [x] Framing and theory  
- [x] Study design  
- [x] Data collection and instruments  
- [x] Analysis and models  
- [x] Synthesis and interpretation  
- [x] Reporting and communications  

## Critical evaluation
### Strengths

- **Comprehensive, structured synthesis.**  
  The survey cuts across subfields and connects technical methods to concrete harms (criminal justice, medicine, employment). (pp. 1–3, 14–24)
- **Clear typologies.**  
  The data–algorithm–user feedback loop and typology of bias types give a portable conceptual frame that can be applied directly to DDR. (pp. 3–9)
- **Self-critical.**  
  The conclusion and challenges sections openly acknowledge incompatibilities between fairness metrics and the limits of current techniques, inviting rather than foreclosing critical engagement. (pp. 13, 25–26) 

### Weaknesses and limitations

- **Limited engagement with structural power and archival formation.**  
  Historical bias is named, but the paper does not interrogate how institutions create datasets in the first place; appraisal, non-creation and archival silences are not discussed. (pp. 8–10)
- **Anglophone and technical focus.**  
  Examples and legal references are largely US-centric; critical data studies, post-colonial perspectives and data feminism appear only via citations, not as structuring frameworks. (pp. 2–3, 25)
- **Task focus.**  
  Emphasis falls on supervised prediction; retrieval, browsing and knowledge-graph applications—central to DDR—are less fully theorised.

### Author’s credibility

- Authors are based at USC Information Sciences Institute; collectively they have strong track records in ML, network science and fairness research. The article is published in **ACM Computing Surveys**, a high-status venue for field-defining surveys, and has quickly become a standard reference in bias/fairness discussions.

### Contextual validity

- The typologies are intended to be **domain-agnostic** and can be repurposed for cultural-heritage/archival settings with careful translation.
- Some fairness metrics assume binary outcomes and protected attributes; DDR’s multi-valued, historically contingent categories may demand adaptation or more relational notions of fairness.

### Comparisons

- **With archival silences (Moss & Thomas; Carter; Harris).**  
  Those works explain *how* archives become partial; Mehrabi et al. show how such partiality manifests as measurable biases in ML systems and what mitigation might look like.  
- **With Data Feminism (D’Ignazio & Klein).**  
  Data Feminism provides the normative critique (who is missing, who is harmed); Mehrabi et al. provide the formal apparatus (bias types, fairness metrics) for operationalising such critiques in system design.

## Interpretation
### Analysis and insights

- **Archival absence → algorithmic bias.**  
  DDR’s missing cohorts, unrecorded practices and selective documentation can be cast as representation, sampling and historical biases. When DDR is turned into training data for RAG or recommendation, these structural silences become *behaviour* of the system—what is easy to find, what is repeatedly surfaced.
- **Fairness as design decision, not afterthought.**  
  The incompatibility of fairness metrics forces explicit choices: for DDR, it may be more important to ensure **subgroup fairness in retrieval quality** across disciplines, decades, or marginalised groups than to enforce, say, demographic parity in all outputs.
- **Documentation as fairness work.**  
  The emphasis on datasheets and dataset/model documentation suggests that the DDR schema, ingestion and RAG components should *bake in* records of what is missing or uncertain, making absences visible and contestable rather than silently propagating them.

### Implications for practice, policy or theory

- **Practice:** incorporate bias diagnostics and fairness metrics into evaluation of DDR RAG outputs; log and analyse subgroup performance and popularity bias over time.  
- **Policy:** position DDR as a computational research infrastructure that should meet basic fairness and transparency expectations (internal “trustworthy AI” guidelines, governance).  
- **Theory:** enables a **hybrid archival–computational theory of missingness**, aligning archival silence with formal ML bias categories and fairness constraints.

## Evidence to quote or paraphrase
- “In the context of decision-making, fairness is the absence of any prejudice or favoritism toward an individual or group based on their inherent or acquired characteristics.” (p. 2) 
- **Paraphrase:** The authors describe how biased algorithmic outcomes can affect user experience, creating a *feedback loop* between data, algorithms and users that perpetuates and even amplifies existing sources of bias. (p. 2) 
- “Bias can exist in many shapes and forms, some of which can lead to unfairness in different downstream learning tasks.” (p. 4) 
- **Paraphrase:** Historical bias refers to cases where datasets accurately reflect an unequal world—such as search results for “women CEOs” mirroring the fact that only about 5% of Fortune 500 CEOs are women—raising the question of whether algorithms should reproduce or counteract such realities. (p. 8)
- “Broadly, fairness is the absence of any prejudice or favoritism towards an individual or a group based on their intrinsic or acquired traits in the context of decision-making.” (p. 11)
- **Paraphrase:** Methods to achieve fair ML are grouped into **pre-processing** (transforming data), **in-processing** (changing learning algorithms) and **post-processing** (adjusting outputs of trained models), depending on what parts of the pipeline can be modified. (p. 14) 
- **Paraphrase:** Among future challenges, the authors call for a move from *equality*—treating every individual or group the same—to *equity*, which allocates resources according to need, and for temporal analyses of how fairness interventions impact groups over time. (pp. 25–26)

## Related works
- Suresh & Guttag (2019) on sources of bias.  
- D’Ignazio & Klein (2020) *Data Feminism*.  
- O’Neil (2016) *Weapons of Math Destruction*.  
- IBM AIF360 and Aequitas toolkits for fairness assessment.  

## Questions for further research
- How should fairness be defined for **retrieval and exploratory search** over archival corpora (RAG), rather than binary classification?  
- What combinations of group and subgroup fairness are appropriate for DDR, given its historically uneven documentation?  
- How might explicit modelling of **known missingness** (e.g. flags for absent cohorts or attributes) change the behaviour of DDR-based ML systems?  
- What longitudinal evaluation designs could monitor whether DDR RAG improves or worsens the visibility of under-documented actors and projects over time?