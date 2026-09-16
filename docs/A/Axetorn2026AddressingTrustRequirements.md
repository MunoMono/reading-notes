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
model_subcluster: "S3.2 Scoped missingness"
source_type: "Counterpoint / tension"
project_tags:
  - "Turin"
  - "Thesis"
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
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)

**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now (1 sentence):**  
I need evidence that refusal, source provenance and explicit communication of evidential limits can be designed into retrieval-augmented systems as positive system behaviours rather than treated as failures to answer.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.2 scoped missingness and the Turin discussion of conversational completion norms. It supports the methodological claim that a trustworthy system should withhold an answer when retrieved evidence is insufficient and should tell the user what its evidence and limitations are.

**Why this term, not alternatives (1–2 lines):**  
I use *scoped missingness* rather than refusal or abstention because the DDR problem is historical and corpus-bound. The system is not claiming that an answer does not exist; it identifies what a specified evidence surface does not establish.

**My benchmark for using it (1–2 criteria I will apply):**  
Use the paper where refusal and provenance are explicitly implemented as design requirements. Keep its enterprise notion of reliability separate from historical warrant, where absence from the available corpus cannot establish absence from the past.

# Position + moment (2–4 lines)

Axetorn et al. write from requirements engineering and design science rather than archival or heritage research. Their 2026 study investigates how trust requirements can be translated into the architecture of a domain-specific multi-agent HR chatbot. The paper is valuable because it treats reliability, transparency and refusal as requirements that can be operationalised through system design rather than left to prompting or user interpretation.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The study assumes a bounded knowledge base whose contents can function as ground truth. That assumption does not transfer intact to historical archives, where digitisation, description, survival and access determine what is available and where corpus absence must remain distinct from historical absence.

# The author’s main move (1 sentence)

They try to engineer user trust into an LLM system by translating empirically elicited trust requirements into specialised retrieval, generation, verification and refusal mechanisms and then evaluating whether those mechanisms satisfy the requirements.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** A retrieval-augmented system can be explicitly designed to withhold an answer when its evidence is insufficient.
- **Evidence (quote/paraphrase + page):** The authors specify reliability as a requirement that includes refusal when relevant information cannot be retrieved and report workshop agreement that “it is better to give no answer than a wrong one”. `[@Axetorn2026AddressingTrustRequirements, pp. 13–14]` Their implemented judge agent applies a relevance threshold and returns a refusal when no retrieved segment exceeds it. `[@Axetorn2026AddressingTrustRequirements, pp. 15–16]`
- **Warrant (my words):** Non-completion is implemented as intended behaviour. The system therefore treats insufficient evidence as an outcome that should be communicated rather than a gap that generation must fill.
- **So what for my thesis (a reusable sentence):** A retrieval-augmented research system can treat evidential insufficiency as a valid result, withholding synthesis when the available material does not warrant an answer.
- **Practice cross-check:** Turin scoped-missingness cases: closure, reception and attribution questions return the nearest relevant traces and state what the defined DDR corpus does not establish rather than generating a plausible historical completion.

## Claim 2

- **Claim (plain):** Separating retrieval, generation and verification makes evidential control more inspectable than a single-pass RAG interaction.
- **Evidence (quote/paraphrase + page):** The implemented architecture separates a judge that filters retrieved segments, a generator constrained to use the retained evidence and a checker that tests grounding, source citation and relevance before release. Failed checks return the answer for revision. `[@Axetorn2026AddressingTrustRequirements, pp. 15–17]` In their discussion, the authors argue that separation improves controllability, testability, observability and auditability because evidence selection, composition and checking occur in distinct components. `[@Axetorn2026AddressingTrustRequirements, p. 29]`
- **Warrant (my words):** Decomposing the pipeline exposes decisions that a conventional chatbot can collapse into one opaque generation step. It becomes possible to identify whether failure occurred in evidence selection, synthesis or validation.
- **So what for my thesis:** Archival inference becomes more accountable when retrieval, evidential selection, synthesis and validation remain distinguishable operations whose outputs can be inspected separately.
- **Practice cross-check:** Turin workflow: retrieval → evidence/source typing → bounded inference or deterministic compilation → quotation/provenance validation → statement of limit. The DDR implementation performs a related separation without requiring that each stage be an autonomous LLM agent.

## Claim 3

- **Claim (plain):** Source citation alone does not communicate the limits of a system's knowledge.
- **Evidence (quote/paraphrase + page):** Evaluation participants valued citations, but the authors found that provenance did not fully satisfy their transparency requirement. Users also wanted visible statements explaining what the chatbot could and could not do, its data sources and when they were last updated. `[@Axetorn2026AddressingTrustRequirements, p. 20]` The discussion consequently distinguishes provenance transparency from explicit communication of partial or limited information. `[@Axetorn2026AddressingTrustRequirements, p. 28]`
- **Warrant (my words):** A cited answer can still imply completeness. Transparency therefore requires communication of both the basis of a claim and the boundary beyond which the system cannot responsibly speak.
- **So what for my thesis:** Evidential provenance should be paired with an explicit account of evidential scope: showing where a claim comes from does not by itself show what the available corpus cannot establish.
- **Practice cross-check:** Turin interface: source citations make generated claims reopenable, while scoped missingness separately states the limits of the retrieved and digitised evidence surface.

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