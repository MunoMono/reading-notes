---
title: "ArgRAG: explainable retrieval augmented generation using quantitative bipolar argumentation"
authors: "Zhu, Yuqicheng and Potyka, Nico and Hernández, Daniel and He, Yuan and Ding, Zifeng and Xiong, Bo and Zhou, Dongzhuoran and Kharlamov, Evgeny and Staab, Steffen"
year: 2025
journal: "Proceedings of Machine Learning Research"
citation_key: zhuArgRAGExplainableRetrieval2025
doi: "10.48550/ARXIV.2508.20131"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "15 Sep 2026, 00:00"
last_updated: "03 Oct 2026"
north_star_source: "project/north-star.yml"
north_star_mtime: "15 Sep 2026, 00:00"
north_star_sha1: "placeholder"
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
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Contemporary bridge literature"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
  - "03 RAG, retrieval and source attribution"
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
**Literature clusters:** 02 LLM epistemic risk and persuasive fluency; 03 RAG, retrieval and source attribution; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

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

**How this source moves the primary research question forward:** Zhu et al. provide a technical precedent for making post-retrieval evidence relationships explicit and contestable rather than leaving them hidden inside generated prose.

**How this source bears on the secondary question:** It offers a way to revisit DDR evidence computationally while preserving researcher visibility over how support and contradiction are being constructed.

**Where it sits in my argument:** Critical computational approaches / contemporary bridge literature, especially contestable inference.

**My benchmark for using it:** Use to establish explicit support/attack structure and contestability; do not import binary fact verification or numeric truth strengths directly into historical interpretation.

# Position + moment

Zhu et al. combine retrieval, LLM-based relation extraction and symbolic quantitative bipolar argumentation to address noisy retrieval and opaque reasoning. [@zhuArgRAGExplainableRetrieval2025, pp. 1–7]

# The author’s main move

They convert retrieved passages into an explicit support/attack graph, perform deterministic inference over that structure and allow users to contest assumptions and recompute the result. [@zhuArgRAGExplainableRetrieval2025, pp. 2, 5–7]

# Critical-reading claims

## Claim 1

**Claim.** Retrieval can degrade performance when relevant, noisy and contradictory material are mixed. **Author claim.** Standard retrievers optimise relevance rather than factual consistency. **Evidence.** Conventional RAG baselines underperformed their no-retrieval counterparts on the tested datasets, while ArgRAG improved across settings. [@zhuArgRAGExplainableRetrieval2025, pp. 1–2, 8–9] **Evidence-supported claim.** Conventional RAG baselines underperformed their no-retrieval counterparts on the tested datasets, while ArgRAG improved across settings. [@zhuArgRAGExplainableRetrieval2025, pp. 1–2, 8–9] **Researcher inference.** More DDR context is not automatically better if evidence roles remain undifferentiated. **Warrant.** Retrieval adds material, not correctness. **Boundary.** Binary fact-verification datasets differ from archival inquiry. **Consequence.** Retrieved traces should be typed before synthesis. **Practice cross-check.** Turin distinguishes supporting, qualifying, contradictory, irrelevant and insufficient traces.
## Claim 2

**Claim.** Claim–evidence relations can be made explicit. **Author claim.** ArgRAG classifies retrieved evidence as support, contradiction or irrelevance. **Evidence.** Relation extraction is an explicit stage before deterministic inference. [@zhuArgRAGExplainableRetrieval2025, pp. 2, 4–6] **Evidence-supported claim.** Relation extraction is an explicit stage before deterministic inference. [@zhuArgRAGExplainableRetrieval2025, pp. 2, 4–6] **Researcher inference.** DDR can externalise how each trace bears on a proposed historical relation. **Warrant.** Explicit relations make interpretative structure inspectable. **Boundary.** One passage can contain several historically different propositions. **Consequence.** Historical relation typing must be finer-grained than one label per chunk. **Practice cross-check.** Turin can attach relation type at proposition/claim level.
## Claim 3

**Claim.** Evidence–evidence relations matter, not only evidence–claim relations. **Author claim.** The framework models interactions among retrieved arguments. **Evidence.** Ablation shows evidence–evidence relations improve performance, especially where conflict is present. [@zhuArgRAGExplainableRetrieval2025, p. 9] **Evidence-supported claim.** Ablation shows evidence–evidence relations improve performance, especially where conflict is present. [@zhuArgRAGExplainableRetrieval2025, p. 9] **Researcher inference.** DDR interpretation should record whether sources corroborate, qualify or contradict one another. **Warrant.** Historical warrant often depends on cross-source relations. **Boundary.** Formal support/attack relations simplify historical context. **Consequence.** Comparative views should expose relations among traces, not only trace-to-query relevance. **Practice cross-check.** Turin Critical Inquiry can display competing or corroborating source chains.
## Claim 4

**Claim.** Explicit argument structure is more inspectable than generated explanation alone. **Author claim.** The authors warn that generated explanations can rationalise an opaque decision without matching the actual reasoning path. **Evidence.** ArgRAG contrasts post-hoc textual explanation with deterministic calculation over an explicit graph. [@zhuArgRAGExplainableRetrieval2025, p. 5] **Evidence-supported claim.** ArgRAG contrasts post-hoc textual explanation with deterministic calculation over an explicit graph. [@zhuArgRAGExplainableRetrieval2025, p. 5] **Researcher inference.** DDR explanation should expose evidence structure rather than rely on model prose describing its own reasoning. **Warrant.** Narrative explanation can be persuasive without being causally or evidentially faithful. **Boundary.** Symbolic structure can also encode mistaken classifications. **Consequence.** Explanation must remain open to source inspection and correction. **Practice cross-check.** Turin provenance should show traces and relation labels separately from generated synthesis.
## Claim 5

**Claim.** Contestability requires users to alter assumptions and see the inference change. **Author claim.** Users can modify argument strengths or polarities and recompute the result. **Evidence.** The paper demonstrates a changed evidence assumption reversing the computed decision. [@zhuArgRAGExplainableRetrieval2025, pp. 5–7] **Evidence-supported claim.** The paper demonstrates a changed evidence assumption reversing the computed decision. [@zhuArgRAGExplainableRetrieval2025, pp. 5–7] **Researcher inference.** DDR researchers should be able to challenge computationally proposed relationships. **Warrant.** Researcher-in-the-loop means more than approving final prose. **Boundary.** Historical contestation should not be reduced to slider-adjusted numeric strength. **Consequence.** Relation labels should be editable/reviewable without overwriting source evidence. **Practice cross-check.** Turin Critical Inquiry can allow comparison of alternate relation interpretations.
## Claim 6

**Claim.** A single computed verdict is the wrong endpoint for many contested archives. **Author claim.** ArgRAG ultimately resolves fact-verification tasks through computed argument strength. **Evidence.** The framework is evaluated on binary decisions in PubHealth and RAGuard. [@zhuArgRAGExplainableRetrieval2025, pp. 7–9] **Evidence-supported claim.** The framework is evaluated on binary decisions in PubHealth and RAGuard. [@zhuArgRAGExplainableRetrieval2025, pp. 7–9] **Researcher inference.** DDR needs supported interpretation, competing readings, contradiction and scoped missingness as legitimate final states. **Warrant.** Historical plurality can be evidence, not unresolved computational error. **Boundary.** This is a deliberate departure from the paper's task framing. **Consequence.** Use argument structure without importing binary adjudication. **Practice cross-check.** Turin should stop at plural or conflicting outcomes where the evidence warrants them.
# Definitions / terms this changes (only the ones that matter)

- **Quantitative Bipolar Argumentation Framework (QBAF):** a formal argumentation structure containing arguments, explicit support and attack relations and base strengths from which final argument strengths are computed under gradual semantics. `[@zhuArgRAGExplainableRetrieval2025, pp. 3–4]`
- **Support relation:** an explicit relation indicating that one argument strengthens another within the QBAF.
- **Attack relation:** an explicit relation indicating that one argument weakens or contradicts another within the QBAF.
- **Gradual semantics:** deterministic rules for updating argument strengths according to the balance of supporters and attackers until the system converges. `[@zhuArgRAGExplainableRetrieval2025, pp. 3–4]`
- **Contestability:** the capacity for a user to challenge an assumption encoded in the reasoning structure—for example an evidence score or support/attack classification—and have the resulting inference recomputed. `[@zhuArgRAGExplainableRetrieval2025, p. 7]`
- **Contestable inference:** my archival extension: a post-retrieval interpretation whose evidential relations remain visible and revisable rather than being fixed inside generated prose.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - This is the strongest paper in the retrieval-augmented inference cluster for showing that post-retrieval reasoning can be made an explicit computational object rather than remaining inside LLM generation.
  - Its treatment of evidence–evidence relations is especially important for the DDR because historical interpretation often depends on how sources corroborate, qualify or contradict one another, not merely on whether each source relates individually to a question.
  - Contestability gives a concrete architectural meaning to researcher-in-the-loop: the researcher can interrogate and revise the assumptions governing the inference rather than merely approve or reject its final prose.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I expand ArgRAG's support/attack/irrelevant vocabulary into historically meaningful evidential relations: supports, qualifies, contradicts, contextualises, retrospectively recalls, remains temporally distinct, or does not establish.
  - I replace binary true/false resolution with plural historical states such as supported interpretation, competing readings, conflicting evidence and scoped missingness.

- **What question it raises next (1–2 bullets):**
  - What minimum set of relation types is needed to make DDR inference genuinely inspectable without formalising away historical complexity?
  - Could a provenance-bearing evidence graph allow a researcher to inspect relations between testimonial traces while deliberately refusing to calculate a single numerical “truth strength”?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin literature/method section completing the retrieval-augmented inference progression: Asai establishes inference-time stages after retrieval; Wang identifies application of retrieved knowledge as a separate reasoning problem; Zhu et al. demonstrate that the resulting evidence relationships can be externalised into an inspectable and contestable inference structure.
- **Where I will name the title in running text (first-use rule):** “Zhu et al.'s *ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation* provides a recent example of retrieval being followed by explicit structured inference over supporting and contradictory evidence rather than direct generative completion.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Critical Inquiry / Comparative Views: retrieved DDR traces → provenance-bearing evidential nodes → explicit supporting, contradictory or qualifying relationships → researcher-visible inference → plurality or scoped missingness where warranted.
- **Workstreams →** retrieval-augmented inference; contestability; evidence graphs; contradictory evidence; researcher-in-the-loop
- **Deliverables →** Turin methodological justification; thesis S3 inference model; Critical Inquiry / Comparative Views UAT
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI systems

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** ArgRAG is evaluated as binary fact verification on PubHealth and RAGuard, and its current relation vocabulary reduces each retrieved chunk to a single support, attack or irrelevant argument, whereas archival traces may contain several internally conflicting propositions and support multiple historically situated interpretations.
- **Risk if misused (1 sentence):** Translating contested archival evidence directly into numeric strengths and a single computed verdict could replace opaque generative authority with overly formal symbolic authority, giving an appearance of precision to relations that remain interpretative and historically contingent.

# Cross-source / cross-lens synthesis

Zhu et al. complete the Asai–Wang–Zhu technical sequence by externalising post-retrieval evidence relations into an inspectable and contestable structure. This is highly useful for DDR because it separates source evidence from the relations inferred among traces. The archival correction is equally important: contestability should preserve plural, temporal and unresolved historical states rather than converting them into numeric strengths and a single verdict.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 1–10, especially pp. 2, 5–9
- **First full note (write it out here):** Yuqicheng Zhu et al., “ArgRAG: Explainable Retrieval Augmented Generation Using Quantitative Bipolar Argumentation,” in *Proceedings of the 19th Conference on Neurosymbolic Learning and Reasoning*, *Proceedings of Machine Learning Research* 284 (2025): 1–22.
- **Short note form:** Zhu et al., “ArgRAG,” [page].
- **One quote worth lifting (≤2 lines):** “the explanation may not be aligned with the reasoning process” (p. 5).
- **One paraphrase worth keeping:** ArgRAG converts retrieved passages into explicit supporting, attacking and irrelevant relations and then performs deterministic inference over that structure, allowing the evidential route to a decision to be inspected and contested. (pp. 2, 5–7)

# Related works (only if it directly connects)

- Asai et al. (2026), *Synthesizing Scientific Literature with Retrieval-Augmented Language Models* — establishes retrieval-augmented inference as a multi-stage inference-time process incorporating reranking, refinement and citation verification.
- Wang et al. (2025), *RAG+: Enhancing Retrieval-Augmented Generation with Application-Aware Reasoning* — makes the application of retrieved knowledge an explicit post-retrieval reasoning problem but retains that reasoning within generative processing.
- Yu et al. (2025), *Evaluation of Retrieval-Augmented Generation: A Survey* — supplies the evaluation framework within which retrieval quality, generation faithfulness, robustness and rejection can be assessed separately.
- Radharapu et al. (2025), *Arbiters of Ambivalence* — provides the necessary caution against collapsing legitimate disagreement into a single adjudicated outcome.
- Selyshcheva (2026), *Generative AI as a Historical Source* — supplies the historical-method requirement that attribution, chronology, modality and evidential status remain subject to source-critical validation.
- Ortolja-Baird and Nyhan (2022), *Encoding the Haunting of an Object Catalogue* — provides the archival basis for keeping absence and contested visibility analytically legible rather than resolving them through computational completion.

# Follow-ups (next actions, not vibes)

- **What I will read next:** No immediate additional source is required for the Turin terminology claim; the Asai–Wang–Zhu sequence now provides a coherent recent technical basis for retrieval-augmented inference. Further argumentation literature should be read only if the thesis implementation moves towards an explicit evidence-graph model.
- **What I will test or write next:** Write the retrieval-augmented inference definition for Turin as a three-stage distinction—retrieval acquires evidence; evidential structuring identifies relationships among traces; bounded inference determines what those relationships support, what remains contested and where the available corpus requires inference to stop.