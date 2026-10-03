---
title: "On the dangers of stochastic parrots: can language models be too big?"
authors: "Bender, Emily M.; Gebru, Timnit; McMillan-Major, Angelina; Shmitchell, Shmargaret"
year: 2021
journal: "Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency"
citation_key: Bender2021DangersStochasticParrots
doi: "10.1145/3442188.3445922"
url: "https://dl.acm.org/doi/10.1145/3442188.3445922"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
last_updated: "03 Oct 2026"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Scoped missingness"
source_type: "Supporting"
project_tags:
  - "Turin"
  - "Theoretical framework"
theoretical_framework_area_id: "4"
theoretical_framework_area: "Feminist + situated knowledge"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 4. Feminist + situated knowledge / c) Contemporary bridge literature"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"
---

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

**How this source moves the primary research question forward:** Bender et al. show why language-model fluency, scale and benchmark performance cannot be treated as understanding or neutral representation. For DDR this supports bounded claims, documented data and source-linked synthesis.

**How this source bears on the secondary question:** It cautions that revisiting DDR ideas through contemporary language models must not confuse fluent statistical reproduction with understanding, and that corpus composition and affected stakeholders remain part of the methodological judgement.

**Where it sits in my argument:** Cross-listed bridge text between Critical computational approaches and Feminist + situated knowledge.

# Position + moment

The paper intervenes as ever-larger Transformer language models become a dominant trajectory in NLP, combining technical critique with environmental justice, dataset accountability, bias research and value-sensitive design. [@Bender2021DangersStochasticParrots, pp. 610–619]

# The author’s main move

The authors challenge scale as an inevitable route to progress and argue for explicit attention to material costs, data curation, the distinction between form and meaning, and affected stakeholders. [@Bender2021DangersStochasticParrots, pp. 610–619]

# Critical-reading claims

## Claim 1

**Claim.** Model scale carries material and financial costs. **Author claim.** Compute, energy and financial cost belong inside NLP evaluation. **Evidence.** The paper reviews large training costs, rising compute requirements and unequal exposure to environmental effects. [@Bender2021DangersStochasticParrots, pp. 612–613] **Evidence-supported claim.** The paper reviews large training costs, rising compute requirements and unequal exposure to environmental effects. [@Bender2021DangersStochasticParrots, pp. 612–613] **Researcher inference.** Computational method choice is also a resource-allocation choice. **Warrant.** Performance cannot be separated from the resources needed to obtain it. **Boundary.** DDR is far smaller than the systems examined here. **Consequence.** Keep model scale proportionate and document major infrastructure choices. **Practice cross-check.** DDR uses a bounded corpus and task-specific retrieval.
## Claim 2

**Claim.** More data does not make a corpus representative. **Author claim.** Web-scale corpora reproduce patterns of participation, collection and filtering rather than sampling society neutrally. **Evidence.** The authors show that online visibility and language coverage remain highly uneven even in very large datasets. [@Bender2021DangersStochasticParrots, pp. 613–614] **Evidence-supported claim.** The authors show that online visibility and language coverage remain highly uneven even in very large datasets. [@Bender2021DangersStochasticParrots, pp. 613–614] **Researcher inference.** Corpus size can intensify visibility gradients rather than remove them. **Warrant.** Selection continues to operate at scale. **Boundary.** DDR is an institutional archive, not a web corpus. **Consequence.** Treat corpus composition as an evidential condition. **Practice cross-check.** Scoped missingness is stated against the PID-backed DDR evidence surface.
## Claim 3

**Claim.** Training data can encode social bias that reappears in downstream systems. **Author claim.** Language models learn stereotypical and discriminatory associations from their corpora. **Evidence.** The paper reviews documented biases and stresses that bias evaluation is context-dependent. [@Bender2021DangersStochasticParrots, pp. 614–615] **Evidence-supported claim.** The paper reviews documented biases and stresses that bias evaluation is context-dependent. [@Bender2021DangersStochasticParrots, pp. 614–615] **Researcher inference.** Archival retrieval may reproduce dominant naming, description and authorship patterns. **Warrant.** Output is conditioned by distributions already present in the data environment. **Boundary.** This is not a DDR-specific bias audit. **Consequence.** Evaluate DDR retrieval across actor, role, gender and documentary density. **Practice cross-check.** Feminist UAT cases probe attribution, labour and obscured participation.
## Claim 4

**Claim.** Linguistic fluency is not evidence of grounded understanding. **Author claim.** The paper distinguishes prediction of linguistic form from meaning and communicative intent. **Evidence.** The “Stochastic Parrots” section argues that LMs manipulate learned form distributions even when their output appears coherent to readers. [@Bender2021DangersStochasticParrots, pp. 616–617] **Evidence-supported claim.** The “Stochastic Parrots” section argues that LMs manipulate learned form distributions even when their output appears coherent to readers. [@Bender2021DangersStochasticParrots, pp. 616–617] **Researcher inference.** A persuasive archival synthesis can still be historically wrong. **Warrant.** Historical interpretation requires justified relations among evidence, context and claims. **Boundary.** This limits what LLM output can establish; it does not make LLMs useless. **Consequence.** Keep source evidence, researcher inference and synthesis visibly separate. **Practice cross-check.** DDR answers link synthesis back to inspectable passages.
## Claim 5

**Claim.** Coherent generated text can acquire unwarranted authority. **Author claim.** Users can attribute meaning and responsibility to fluent output where no accountable speaker underwrites it. **Evidence.** The harms discussion shows how generated language can mislead users and detach claims from accountable authorship. [@Bender2021DangersStochasticParrots, pp. 617–618] **Evidence-supported claim.** The harms discussion shows how generated language can mislead users and detach claims from accountable authorship. [@Bender2021DangersStochasticParrots, pp. 617–618] **Researcher inference.** Interface authority is part of the epistemic problem. **Warrant.** Users judge claims partly through fluency and implied agency. **Boundary.** An archival interface is narrower than the public systems considered in the paper. **Consequence.** Make citations, uncertainty and limits more salient than stylistic confidence. **Practice cross-check.** Scoped missingness prevents fluent completion from standing in for absent evidence.
## Claim 6

**Claim.** Responsible development requires curation, documentation and stakeholder-centred design. **Author claim.** The authors advocate planning for risks before systems are built and engaging direct and indirect stakeholders. **Evidence.** “Paths Forward” recommends careful dataset assembly, documentation, pre-mortems, value-sensitive design and early stakeholder engagement. [@Bender2021DangersStochasticParrots, pp. 618–619] **Evidence-supported claim.** “Paths Forward” recommends careful dataset assembly, documentation, pre-mortems, value-sensitive design and early stakeholder engagement. [@Bender2021DangersStochasticParrots, pp. 618–619] **Researcher inference.** Provenance, exclusions and stakeholder impact belong inside the method. **Warrant.** Early design decisions determine what remains visible later. **Boundary.** Value-sensitive design is referenced rather than developed fully here. **Consequence.** Treat provenance, exclusions and intended use as first-class requirements. **Practice cross-check.** DDR UAT, provenance recording and feminist critique operationalize this preventative stance.
# Definitions / terms this changes

- **Stochastic parrot:** a critical term for a model that can generate fluent linguistic form without grounded communicative understanding. [@Bender2021DangersStochasticParrots, pp. 616–617]
- **Documentation debt:** difficulty reconstructing dataset provenance and motivations after scale has made those decisions opaque. [@Bender2021DangersStochasticParrots, p. 615]
- **Value-sensitive design:** design practice that identifies stakeholders, values and possible harms during development. [@Bender2021DangersStochasticParrots, pp. 618–619]

# My response

For DDR, this paper disciplines computational authority: keep scale proportionate, treat corpus composition as consequential, refuse to equate fluent prose with historical understanding, and keep provenance and limits visible.

# Integration hooks

**Where I will cite it:** LLM epistemic limits; corpus bias; interface authority; ethics; bounded inference.

**Workstreams →** RAI; scoped missingness; feminist critique; provenance.  
**Deliverables →** Methods chapter; ethical considerations; Turin paper.

# Boundary + risk

**Boundary:** The paper critiques large LMs and their socio-technical ecosystem, not archival RAI specifically.

**Risk if misused:** It can become generic anti-AI rhetoric if separated from its practical recommendations on curation, documentation and stakeholder design.

# Cross-source / cross-lens synthesis

Bender et al. supply the warning that fluent output is not grounded understanding and that scale does not erase representational bias. Asai et al. show how retrieval and citation checking can improve evidence-linked synthesis while leaving residual error. Selyshcheva translates the same issue into historical source criticism. Read with Buckley and Cifor, Bender’s concern with representation and affected stakeholders also becomes a feminist and situated-knowledge question.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 612–619
- **First full note:** Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell, “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?,” in *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency* (New York: ACM, 2021), 610–623.
- **Short note form:** Bender et al., “Stochastic Parrots,” 616–619.

# Related works

- Asai et al., “Synthesizing Scientific Literature with Retrieval-Augmented Language Models.”
- Selyshcheva, “Generative AI as a Historical Source.”
- Buckley, “Made in Patriarchy.”
- Cifor and Wood, “Critical Feminism in the Archives.”

# Follow-ups

- **What I will test next:** Compare DDR answer confidence and retrieval visibility across well-documented and sparsely documented actors.
