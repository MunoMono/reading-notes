---
title: "Addressing trust requirements in the design of an open-source multiagent LLM-based domain-specific chatbot"
authors: "Axetorn, Jonatan and Edholm, Felix and Dobslaw, Felix and Gren, Lucas"
year: 2026
journal: "Requirements Engineering"
citation_key: Axetorn2026AddressingTrustRequirements
doi: "10.1007/s00766-026-00457-w"
url: "https://link.springer.com/10.1007/s00766-026-00457-w"
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
  - "03 RAG, retrieval and source attribution"
  - "09 Human judgement and practice-led computational research"
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
**Literature clusters:** 03 RAG, retrieval and source attribution; 09 Human judgement and practice-led computational research; 10 Conversational AI and completion norms; 11 Uncertainty and provenance display in interfaces  

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

**How this source moves the primary research question forward:** Axetorn et al. show that refusal, provenance, verification and limitation disclosure can be specified as system requirements rather than left to user interpretation. This gives scoped missingness a concrete computational-design precedent.

**How this source bears on the secondary question:** It helps frame contemporary reuse of DDR material as accountable inquiry in which the system states both what its evidence supports and where its evidence stops.

**Where it sits in my argument:** Critical computational approaches / operational literature, especially retrieval control, refusal and evidential scope.

**My benchmark for using it:** Transfer only the architectural principles of bounded answering, inspectability and limitation disclosure; do not equate enterprise knowledge-base absence with historical absence.

# Position + moment

Axetorn et al. write from requirements engineering and design science, translating empirically elicited trust requirements into a multi-agent HR chatbot architecture. Their study is useful because trust-related requirements are operationalised through retrieval, generation, checking and refusal. [@Axetorn2026AddressingTrustRequirements, pp. 13–17]

# The author’s main move

They turn reliability and transparency requirements into separable retrieval, generation, checking and refusal functions, then evaluate whether those functions meet users’ stated needs. [@Axetorn2026AddressingTrustRequirements, pp. 13–20, 28–29]

# Critical-reading claims

## Claim 1

**Claim.** A RAG system can intentionally withhold an answer when relevant evidence is insufficient. **Author claim.** Reliability includes refusal where relevant support cannot be retrieved. **Evidence.** Workshop participants preferred no answer to a wrong answer, and the judge agent refuses when no retrieved segment exceeds its relevance threshold. [@Axetorn2026AddressingTrustRequirements, pp. 13–16] **Evidence-supported claim.** Workshop participants preferred no answer to a wrong answer, and the judge agent refuses when no retrieved segment exceeds its relevance threshold. [@Axetorn2026AddressingTrustRequirements, pp. 13–16] **Researcher inference.** Evidential insufficiency can be treated as a valid DDR result. **Warrant.** Non-completion is explicitly designed rather than treated as failure. **Boundary.** Their knowledge base is bounded and treated as ground truth. **Consequence.** DDR refusal must be phrased as corpus-bounded missingness, not historical non-existence. **Practice cross-check.** Turin scoped-missingness cases return nearest traces and state what the corpus does not establish.
## Claim 2

**Claim.** Trust requirements can be translated into architecture rather than left as abstract principles. **Author claim.** The study derives reliability and transparency requirements and implements components to satisfy them. **Evidence.** The architecture assigns relevance filtering, answer generation, grounding/citation checks and refusal to explicit system functions. [@Axetorn2026AddressingTrustRequirements, pp. 13–17] **Evidence-supported claim.** The architecture assigns relevance filtering, answer generation, grounding/citation checks and refusal to explicit system functions. [@Axetorn2026AddressingTrustRequirements, pp. 13–17] **Researcher inference.** Provenance and bounded synthesis should be treated as functional requirements of the DDR instrument. **Warrant.** Requirements become testable when they correspond to observable system behaviour. **Boundary.** The specific multi-agent design is not necessary to reproduce the underlying requirement. **Consequence.** The thesis can evaluate evidential safeguards as designed behaviours. **Practice cross-check.** Turin UAT checks retrieval, citation, synthesis and scoped-missingness separately.
## Claim 3

**Claim.** Separating retrieval, generation and verification makes failure modes more inspectable. **Author claim.** The authors argue that architectural separation improves controllability, testability, observability and auditability. **Evidence.** Judge, generator and checker components expose evidence selection, composition and validation as distinct stages. [@Axetorn2026AddressingTrustRequirements, pp. 15–17, 29] **Evidence-supported claim.** Judge, generator and checker components expose evidence selection, composition and validation as distinct stages. [@Axetorn2026AddressingTrustRequirements, pp. 15–17, 29] **Researcher inference.** DDR inference should preserve the difference between retrieval error, synthesis error and provenance error. **Warrant.** A single opaque generation step makes those failure sources difficult to distinguish. **Boundary.** Component separation does not itself guarantee evidential correctness. **Consequence.** Evaluation should diagnose errors by stage. **Practice cross-check.** Turin separates retrieval, evidence typing, bounded synthesis and quotation/provenance validation.
## Claim 4

**Claim.** Source citation alone does not fully communicate system transparency. **Author claim.** Participants wanted more than citations; they also wanted visible statements about capabilities, sources and update status. **Evidence.** The evaluation found provenance helpful but insufficient to satisfy transparency requirements by itself. [@Axetorn2026AddressingTrustRequirements, pp. 20, 28] **Evidence-supported claim.** The evaluation found provenance helpful but insufficient to satisfy transparency requirements by itself. [@Axetorn2026AddressingTrustRequirements, pp. 20, 28] **Researcher inference.** A cited DDR answer can still imply completeness unless scope and limitations are separately stated. **Warrant.** Provenance explains basis; limitation disclosure explains boundary. **Boundary.** User preferences in an HR chatbot do not directly establish archival interface requirements. **Consequence.** Provenance and scoped missingness should be represented as complementary interface functions. **Practice cross-check.** Turin combines source citations with explicit statements of what the evidence surface cannot establish.
## Claim 5

**Claim.** Verification can be made iterative rather than purely post-hoc. **Author claim.** Failed checker tests return answers for revision before release. **Evidence.** The checker evaluates grounding, source citation and relevance and can send a response back for correction. [@Axetorn2026AddressingTrustRequirements, pp. 15–17] **Evidence-supported claim.** The checker evaluates grounding, source citation and relevance and can send a response back for correction. [@Axetorn2026AddressingTrustRequirements, pp. 15–17] **Researcher inference.** DDR synthesis can be gated by deterministic or researcher checks before being treated as an admissible result. **Warrant.** Validation is more effective when it changes output behaviour rather than merely annotating defects. **Boundary.** Automated checking may reproduce the limitations of its own criteria. **Consequence.** Verification should not be confused with historical adjudication. **Practice cross-check.** Turin uses deterministic fallback when generated synthesis exceeds the permitted evidence structure.
## Claim 6

**Claim.** Reliability is framed as appropriate behaviour under uncertainty, not simply answer production. **Author claim.** Reliability combines accurate responses, verifiable sources and refusal when support is insufficient. **Evidence.** The requirements explicitly connect reliability with evidence and abstention rather than response completeness alone. [@Axetorn2026AddressingTrustRequirements, pp. 13–14] **Evidence-supported claim.** The requirements explicitly connect reliability with evidence and abstention rather than response completeness alone. [@Axetorn2026AddressingTrustRequirements, pp. 13–14] **Researcher inference.** A historically responsible system may be more reliable when it declines to synthesise. **Warrant.** Completion pressure and evidential reliability can conflict. **Boundary.** Their evaluation does not test historically contested evidence. **Consequence.** DDR success criteria should reward bounded non-answering where warranted. **Practice cross-check.** Scoped missingness is evaluated as a positive evidential outcome in Turin.
# Definitions / terms this changes (only the ones that matter)

- **Refusal:** an intentional system response triggered when sufficiently relevant supporting information cannot be retrieved, used to prevent unsupported completion. `[@Axetorn2026AddressingTrustRequirements, pp. 14–16]`
- **Reliability:** in this paper, accurate and consistent responses with verifiable sources, coupled with refusal when confidence or supporting information is insufficient. `[@Axetorn2026AddressingTrustRequirements, p. 14]`
- **Transparency:** communication of provenance, capabilities and limitations; the paper's evaluation shows that citation alone addresses only part of this requirement. `[@Axetorn2026AddressingTrustRequirements, pp. 20, 28]`
- **Scoped missingness:** my extension of these principles to historical research: an explicit statement that a defined corpus does not establish a requested claim, without converting corpus absence into historical non-existence.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - It provides a strong engineering precedent for treating refusal under insufficient evidence as successful system behaviour.
  - It supports separating evidence selection, generation and checking so that the route to an answer is more observable and auditable.
  - Its distinction between provenance and communication of limitations gives *scoped missingness* an important interface rationale: citations tell users where an answer came from; limits tell them where that answer stops.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I translate their refusal principle into an archival one: “the defined corpus does not establish” rather than “the answer is unavailable”.
  - I use architectural separation selectively. The value lies in distinct evidential functions and inspectability; those functions do not require an elaborate multi-agent architecture where deterministic procedures are safer.

- **What question it raises next (1–2 bullets):**
  - How should an archive-facing interface communicate the difference between no relevant retrieval, partial evidence and genuinely conflicting evidence?
  - At what point should generated synthesis stop and deterministic evidence presentation take over?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin discussion of scoped missingness, immediately after defining “does not establish”, as evidence that retrieval systems can deliberately refuse completion when supporting evidence falls below a defined threshold. Cite again in the interface discussion to distinguish source provenance from communication of system limits.
- **Where I will name the title in running text (first-use rule):** “Axetorn et al.'s *Addressing trust requirements in the design of an open-source multiagent LLM-based domain-specific chatbot* provides a requirements-engineering precedent for treating refusal, provenance and limitation disclosure as designed system behaviours.”
- **Link to my practice evidence (one concrete cross-reference):** Turin scoped-missingness UAT cases and findings matrix, particularly cases where deterministic fallback or an explicit evidential limit replaces unsupported cross-source inference.
- **Workstreams →** scoped missingness; retrieval validation; interface provenance; bounded inference
- **Deliverables →** Turin discussion; thesis S3 methodological justification; interface design principles
- **Stakeholders →** archival researchers; cultural-heritage institutions; interface designers; research users

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study evaluates a small enterprise chatbot against synthetic HR documents whose contents are known to the researchers, so its notion of “no answer” does not model the archival problem of partial survival, uneven digitisation or contested historical evidence.
- **Risk if misused (1 sentence):** Importing its refusal logic without qualification could turn failure to retrieve from the DDR evidence surface into an unjustified claim that the information or event itself did not exist.

# Cross-source / cross-lens synthesis

Axetorn et al. strengthen the operational side of the computational lens by turning refusal, provenance and verification into testable system behaviours. Read with Asai, Wang and Zhu, the paper supports decomposing retrieval and synthesis into inspectable stages; read with archival missingness literature, it also exposes a crucial limit: technical failure to retrieve cannot be converted into a claim about the past. DDR therefore needs both system-level refusal and an archival language of scoped missingness.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 13–17, 20, 26–29
- **First full note (write it out here):** Jonatan Axetorn, Felix Edholm, Felix Dobslaw, and Lucas Gren, “Addressing Trust Requirements in the Design of an Open-Source Multiagent LLM-Based Domain-Specific Chatbot,” *Requirements Engineering* 31 (2026), https://doi.org/10.1007/s00766-026-00457-w.
- **Short note form:** Axetorn et al., “Addressing Trust Requirements,” [page].
- **One quote worth lifting (≤2 lines):** “it is better to give no answer than a wrong one” (p. 13).
- **One paraphrase worth keeping:** Transparency requires more than source citation: users also need to know what a system can and cannot establish from its available information. (pp. 20, 28)

# Related works (only if it directly connects)

- Asai et al. (2026), *Synthesizing scientific literature with retrieval-augmented language models* — separates retrieval, reranking, iterative refinement and citation verification within an inference-time pipeline.
- Chang et al. (2024/2025), *MAIN-RAG* — provides the multi-agent retrieval-filtering architecture that Axetorn et al. adapt through judge, generator and checker roles.
- Es et al. (2024), *RAGAS* — provides the faithfulness, answer-relevancy and contextual-relevancy metrics used in their evaluation.
- Lee and See (2004), *Trust in Automation* — supplies the underlying notion of appropriate reliance rather than maximal user trust.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Follow the literature on selective answering, abstention and evidence-aware refusal only where it helps sharpen the distinction between technical “no-answer” behaviour and archival scoped missingness.
- **What I will test or write next:** Formalise three distinct negative states in the DDR system: no relevant evidence retrieved; relevant but insufficient evidence; and conflicting evidence. Each should produce a different explanation rather than a generic refusal.