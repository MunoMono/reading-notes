---
title: "AI, cultural heritage, and bias: some key queries that arise from the use of GenAI"
authors: "Foka, Anna; Griffin, Gabriele"
year: 2024
journal: "Heritage"
volume: "7"
number: "11"
pages: "6125–6136"
citation_key: Foka2024AICulturalHeritageBias
doi: "10.3390/heritage7110287"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
last_updated: "02 Oct 2026"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S4"
model_strand_label: "Feminist + situated knowledge"
model_subcluster: "S4.2 Bias and human-in-the-loop heritage computation"
source_type: "Supporting"
theoretical_framework_area_id: "4"
theoretical_framework_area: "Feminist + situated knowledge"
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / 4. Feminist + situated knowledge / b) Operational literature"
project_tags:
  - "Theoretical framework"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 4. Feminist + situated knowledge  
**Literature cluster:** b) Operational literature  
**Zotero filing path:** Theoretical framework / 4. Feminist + situated knowledge / b) Operational literature  
**Source type:** Supporting

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page / verification)
- Substantive source → at least 6 critical claims
- Critical claims are analytical paragraphs: Claim → Evidence → Warrant → Boundary → Consequence
- Keep author claim, evidence-supported claim, and researcher inference distinct
- Each claim must include a practice cross-check (or TODO)
- End each substantive note with a cross-source / cross-lens synthesis paragraph
- Every source gets one primary theoretical-framework area + one Zotero literature cluster
- No antithesis lists: write Boundary + Risk

# Thesis job

**How this source moves the primary research question forward:** Foka and Griffin connect inherited cultural-heritage bias to the computational pipeline, showing how acquisition history, metadata quality, digitisation, training data, annotation and model design affect AI-mediated representation. This helps the thesis treat computational activation as another situated layer of archival mediation.

**How this source bears on the secondary question:** AI can make historical collections more accessible and analytically tractable, but revisiting past ideas responsibly requires humanities expertise and contextual annotation so that automation does not reproduce historically dominant representations as neutral fact.

**Why I’m reading this now:** It provides an operational heritage-AI account of bias mitigation, domain expertise, interoperability and human-in-the-loop practice.

**Where it sits in my argument:** Operational literature for Feminist + situated knowledge, linking critical heritage theory to concrete AI workflow design.

**My benchmark for using it:** I will use the paper to justify contextual annotation and human oversight in heritage AI; I will not treat its proposed mitigations as proof that bias can be fully removed.

# Position + moment

Foka and Griffin write from digital heritage and gender research in 2024. Their paper combines a literature-led discussion of bias with two image-generation experiments and practical examples of annotation and human-in-the-loop (HITL) approaches. Their central question is whether machines can interpret and classify human memory and its artefacts inclusively when cultural-heritage collections are already historically selective and unevenly digitised. [@Foka2024AICulturalHeritageBias, pp. 6125–6127]

# The author’s main move

They argue that bias is inherent in cultural-heritage collections and their digital versions, may be amplified through AI pipelines, and therefore requires mitigation across the whole chain from collection and metadata to model use, annotation, expert review and curation. [@Foka2024AICulturalHeritageBias, pp. 6125–6134]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Bias begins in cultural-heritage collections before AI is introduced.
- **Author claim:** Foka and Griffin argue that selection, acquisition histories, colonial collecting, dominant narratives and inherited description already structure cultural-heritage collections.
- **Evidence-supported claim:** Pages 6125–6127 state that all CHCs involve selection, often retain outdated descriptions, and may encode colonial, racial and gendered exclusions; they cite the proposition that “unbiased data—even as an idea—is essentially ahistorical data.” [@Foka2024AICulturalHeritageBias, pp. 6125–6127]
- **Researcher inference:** DDR computation inherits the representational asymmetries of the archive rather than beginning from neutral input.
- **Evidence (quote/paraphrase + page):** The paper traces bias from analogue collections into digitised heritage data. [@Foka2024AICulturalHeritageBias, pp. 6125–6127]
- **Warrant (my words):** Models can only process the records, descriptions and categories made available to them.
- **Boundary:** Calling bias inherent does not identify the cause or severity of every specific DDR imbalance.
- **Consequence:** Historical and archival bias must be diagnosed separately from model-induced bias.
- **Practice cross-check:** Distinguish corpus composition, metadata bias, retrieval bias and synthesis bias in DDR UAT.

## Claim 2
- **Claim (plain):** AI can amplify inherited bias when training data and humanities expertise are weak.
- **Author claim:** The authors argue that bias moves from collections to datasets and platforms and that generative systems can intensify dominant epistemologies when cultural context is poorly represented.
- **Evidence-supported claim:** Page 6127 links museum/database bias to machine-learning systems, notes digital cultural colonialism and gendered bias, and argues that the contribution of humanities expertise to generative platforms is often unclear. [@Foka2024AICulturalHeritageBias, p. 6127]
- **Researcher inference:** A technically capable DDR model can still produce misleading historical representation if its evidence and categories are context-poor.
- **Evidence (quote/paraphrase + page):** The article describes AI as amplifying pre-existing biases at scale rather than merely reflecting neutral data. [@Foka2024AICulturalHeritageBias, p. 6127]
- **Warrant (my words):** Statistical generalisation reproduces dominant patterns when minority or context-specific signals are weak.
- **Boundary:** The paper does not quantify amplification for a particular archival LLM pipeline.
- **Consequence:** Humanities/domain review must be part of model evaluation rather than an optional final check.
- **Practice cross-check:** Evaluate whether DDR retrieval repeatedly privileges well-described senior staff over weaker but relevant traces.

## Claim 3
- **Claim (plain):** Institutional capacity and interoperability shape which heritage organisations can use AI effectively.
- **Author claim:** Foka and Griffin argue that fragmented collections, limited budgets, small staff, weak AI expertise and poor interoperability can lead institutions either to inappropriate off-the-shelf systems or exclusion from AI use.
- **Evidence-supported claim:** Page 6128 describes these constraints in the cultural-heritage sector and argues that interoperable datasets can improve cross-collection analysis, standardisation, resource sharing and discoverability. [@Foka2024AICulturalHeritageBias, p. 6128]
- **Researcher inference:** Responsible computational heritage depends on organisational infrastructure as well as model architecture.
- **Evidence (quote/paraphrase + page):** The authors explicitly connect dataset interoperability and inter-institutional collaboration to more effective AI implementation. [@Foka2024AICulturalHeritageBias, p. 6128]
- **Warrant (my words):** Poorly connected or weakly documented data limit both model performance and interpretability.
- **Boundary:** Interoperability does not guarantee historical accuracy or equity.
- **Consequence:** DDR method reporting should include the institutional and technical dependencies that condition access and reuse.
- **Practice cross-check:** Preserve RCA/V&A source distinctions, rights provenance and metadata mappings instead of treating the corpus as one frictionless dataset.

## Claim 4
- **Claim (plain):** GenAI can produce plausible-looking but historically inaccurate heritage representations.
- **Author claim:** Through DALL-E experiments, the authors show that generic image generators may fail on culturally specific historical forms without expert intervention.
- **Evidence-supported claim:** Pages 6129–6132 describe inaccurate generated kouroi and a medieval map with incorrect visual conventions and language, concluding that scholarly authenticity remains heavily dependent on specialised human expertise. [@Foka2024AICulturalHeritageBias, pp. 6129–6132]
- **Researcher inference:** Plausibility in DDR generative synthesis must not be confused with historical warrant.
- **Evidence (quote/paraphrase + page):** The authors state that novice users could be misled and that expert knowledge is required to assess historically appropriate outputs. [@Foka2024AICulturalHeritageBias, p. 6132]
- **Warrant (my words):** Generative systems optimise patterned plausibility rather than domain-specific historical truth.
- **Boundary:** These are illustrative image experiments, not a benchmark of textual archival RAI.
- **Consequence:** DDR generated claims need passage-level evidence and researcher verification.
- **Practice cross-check:** Reject unsupported but fluent relations even when they are historically plausible.

## Claim 5
- **Claim (plain):** Contextual annotation and human-in-the-loop practice can mitigate, but not erase, computational bias.
- **Author claim:** Foka and Griffin recommend context-rich annotation strategies and HITL workflows tailored to heritage material and task.
- **Evidence-supported claim:** Pages 6132–6133 discuss annotations for time period, cultural context, provenance, potential misinterpretation and underrepresented objects, then give examples where librarians, curators, historians and users iteratively refine AI outputs. [@Foka2024AICulturalHeritageBias, pp. 6132–6133]
- **Researcher inference:** DDR contextual metadata and human judgement should be treated as active model inputs and evaluation resources, not merely documentation.
- **Evidence (quote/paraphrase + page):** The paper stresses that there is no “one practice fits all” and that human expertise remains necessary throughout heritage AI implementation. [@Foka2024AICulturalHeritageBias, pp. 6132–6133]
- **Warrant (my words):** Situated context can correct or constrain pattern-based outputs that would otherwise overgeneralise.
- **Boundary:** Annotation itself can encode new assumptions and power relations.
- **Consequence:** Human-in-the-loop governance needs visible criteria and provenance, not just manual intervention.
- **Practice cross-check:** Record researcher corrections and evidence-status decisions during UAT rather than silently editing model output.

## Claim 6
- **Claim (plain):** Bias mitigation is a whole-pipeline governance problem.
- **Author claim:** The conclusion recommends coordinated action on collection digitisation, annotation, interoperable systems, tool selection, guidelines, human expertise and explicit technical/epistemic choices.
- **Evidence-supported claim:** Page 6134 summarises these measures in a challenge/solution table and argues for national/international policy and collaboration so that AI systems can deliver nuanced rather than stereotyped heritage interpretation. [@Foka2024AICulturalHeritageBias, p. 6134]
- **Researcher inference:** Responsible DDR computation cannot be reduced to one “bias check” at model output.
- **Evidence (quote/paraphrase + page):** The proposed mitigations span collection, data, curation, institutional collaboration and model use. [@Foka2024AICulturalHeritageBias, p. 6134]
- **Warrant (my words):** Bias can enter at multiple points, so mitigation must be distributed across the workflow.
- **Boundary:** The recommendations are normative and illustrative rather than experimentally validated as a complete governance framework.
- **Consequence:** The thesis should document bias/visibility controls at corpus, retrieval, interface and synthesis stages.
- **Practice cross-check:** Map each DDR UAT failure to the stage where it first enters the evidence pipeline.

# Definitions / terms this changes

- **Inherited collection bias:** historical selection, acquisition and description patterns present before computational processing. [@Foka2024AICulturalHeritageBias, pp. 6125–6127]
- **Amplified bias:** inherited patterns intensified through aggregation, training or automated classification. [@Foka2024AICulturalHeritageBias, p. 6127]
- **Human-in-the-loop (HITL):** iterative workflows in which domain experts review, contextualise and refine AI-supported processing. [@Foka2024AICulturalHeritageBias, pp. 6132–6133]
- **Interoperability:** the ability of heritage datasets/systems to connect and be processed across institutional boundaries. [@Foka2024AICulturalHeritageBias, p. 6128]
- **Contextual annotation:** metadata or labels adding temporal, cultural, provenance and bias-relevant context to training/analysis data. [@Foka2024AICulturalHeritageBias, pp. 6132–6133]

# My response

Foka and Griffin are useful because they place feminist and critical-heritage concerns inside the operational AI pipeline. The paper does not suggest that human oversight magically removes bias; instead, it shows that heritage AI inherits historical selection and requires contextual expertise, annotation and institutional governance at multiple stages. For DDR, that supports an explicitly human-in-the-loop system whose computational outputs remain answerable to archive-specific context.

# Integration hooks

**Where I will cite it:** Heritage-AI bias; HITL rationale; annotation/context; interoperability; model plausibility versus historical warrant.

**Link to my practice evidence:** DDR UAT already distinguishes source, metadata, retrieval and synthesis and can therefore diagnose where representational bias first appears.

**Workstreams →** feminist critique; AI bias; annotation; human judgement; provenance.  
**Deliverables →** Theoretical framework; methods; UAT/evaluation; limitations.  
**Stakeholders →** Archivists; digital-humanities researchers; cultural-heritage institutions.

# Boundary + risk

**Boundary:** The paper combines literature synthesis with two illustrative image-generation experiments and is not a controlled evaluation of retrieval-augmented historical inference.

**Risk if misused:** Treating HITL and annotation as universal solutions could conceal the situated judgments and new biases introduced by human curators themselves.

# Cross-source / cross-lens synthesis

Foka and Griffin operationalise concerns developed elsewhere in the framework. Buckley shows how design histories are structured by exclusionary historiographic rules; Suchman locates responsibility in situated working relations; Cifor and Wood make feminist care and archival power explicit; Bender et al. show how model-scale systems reproduce social patterns; Kizhner et al. provide empirical evidence of skew and metadata incompleteness in museum datasets. Together they support a DDR computational method in which bias is traced across the full evidence chain rather than attributed only to the final model.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 6125–6134
- **First full note:** Anna Foka and Gabriele Griffin, “AI, Cultural Heritage, and Bias: Some Key Queries That Arise from the Use of GenAI,” *Heritage* 7, no. 11 (2024): 6125–6136, https://doi.org/10.3390/heritage7110287.
- **Short note form:** Foka and Griffin, “AI, Cultural Heritage, and Bias,” [page].
- **One quote worth lifting:** “unbiased data—even as an idea—is essentially ahistorical data” (p. 6127).
- **One paraphrase worth keeping:** Cultural-heritage bias precedes AI and can be amplified through weak metadata, generic models and missing domain expertise, requiring contextual annotation and human review across the pipeline. [@Foka2024AICulturalHeritageBias, pp. 6125–6134]

# Related works

- Suchman, “Located Accountabilities in Technology Production.”
- Bender et al., “On the Dangers of Stochastic Parrots.”
- Kizhner et al., “Ethnic Minorities in Online Museum Collections.”
- Cifor and Wood, “Critical Feminism in the Archives.”

# Follow-ups

- **What I will test next:** Identify where contextual annotation or researcher intervention changes DDR retrieval/synthesis outcomes and record those interventions as methodological evidence.
