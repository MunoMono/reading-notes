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
last_updated: "16 Sept 2026, 11:14"
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
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "02 LLM epistemic risk and persuasive fluency"
  - "03 RAG, retrieval and source attribution"
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
**Literature clusters:** 02 LLM epistemic risk and persuasive fluency; 03 RAG, retrieval and source attribution; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

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
I need evidence that post-retrieval inference can be made structurally inspectable and contestable by explicitly representing how retrieved evidence supports, contradicts or fails to bear on a claim.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference. It provides the strongest technical precedent in this cluster for separating retrieval from a subsequent bounded reasoning process whose evidential structure can be inspected and modified rather than remaining hidden inside generated prose.

**Why this term, not alternatives (1–2 lines):**  
I use *retrieval-augmented inference* because Zhu et al. move beyond retrieve-then-generate: retrieved passages are transformed into an explicit evidence structure and inference is then performed over that structure. I use *contestable inference* for the further requirement that a researcher can challenge the relations or assumptions producing the outcome.

**My benchmark for using it (1–2 criteria I will apply):**  
Use ArgRAG to establish that support, contradiction and evidence interactions can be represented explicitly after retrieval. Do not treat its binary fact-verification framework or numeric argument strengths as a ready-made model of historical interpretation.

# Position + moment (2–4 lines)

Zhu et al. write from neurosymbolic AI, argumentation theory and retrieval-augmented reasoning. Their 2025 paper responds to two weaknesses in conventional RAG: sensitivity to noisy or contradictory retrieved material and the opacity of autoregressive reasoning. ArgRAG therefore combines neural retrieval and LLM-based relation extraction with symbolic, deterministic inference over a Quantitative Bipolar Argumentation Framework.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The paper challenges the assumption that adding explanations or chain-of-thought makes model reasoning transparent. At the same time, its fact-verification setting assumes that evidence can ultimately support a binary decision, whereas contested archival inquiry may require plurality, unresolved contradiction and missingness to remain legitimate final states.

# The author’s main move (1 sentence)

They replace model-internal post-retrieval reasoning with an explicit argument graph in which retrieved evidence supports or attacks a claim and deterministic inference computes the resulting strength while allowing users to inspect and contest the structure.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Retrieved evidence can be noisy or contradictory, and simply placing that evidence in an LLM context can make RAG less reliable rather than more reliable.
- **Evidence (quote/paraphrase + page):** Zhu et al. argue that retrievers optimise primarily for lexical or semantic relevance rather than factual consistency and can therefore return irrelevant or contradictory passages that mislead generation. `[@zhuArgRAGExplainableRetrieval2025, pp. 1–2]` In their experiments, every conventional RAG baseline performed worse than the corresponding no-retrieval baseline on PubHealth and RAGuard, whereas ArgRAG was the only retrieval-based method to outperform no-retrieval across all tested settings. `[@zhuArgRAGExplainableRetrieval2025, pp. 8–9]`
- **Warrant (my words):** Retrieval adds evidence, not correctness. When retrieved traces conflict or contain noise, the reasoning stage must distinguish their roles rather than assuming that more context automatically produces a better answer.
- **So what for my thesis (a reusable sentence):** Retrieval should be treated as the acquisition of an evidential field rather than the completion of historical inquiry, because relevant, contradictory and misleading traces may coexist within the same retrieved context.
- **Practice cross-check:** Turin Research Query: retrieved DDR passages should be typed as supporting, qualifying, contradictory, irrelevant or insufficient before they are permitted to contribute to historical synthesis.

## Claim 2

- **Claim (plain):** Post-retrieval reasoning can be externalised into an inspectable structure rather than remaining embedded within autoregressive generation.
- **Evidence (quote/paraphrase + page):** ArgRAG uses an LLM to classify claim–evidence and evidence–evidence relations as support, contradiction or irrelevance, then represents the remaining material as a QBAF and computes final argument strengths using deterministic gradual semantics. `[@zhuArgRAGExplainableRetrieval2025, pp. 2, 4–6]` Figure 1 on p. 2 makes the distinction visible: retrieval is followed by QBAF construction, score calculation and prediction rather than direct answer generation. The authors explicitly contrast this with generated explanations that may merely rationalise an opaque decision. `[@zhuArgRAGExplainableRetrieval2025, p. 5]`
- **Warrant (my words):** The relation between evidence and outcome becomes an inspectable computational object. A researcher can see which passages support or attack the claim and how their interactions affect the resulting judgement.
- **So what for my thesis:** Retrieval-augmented inference can make the structure of an interpretation externally legible by separating retrieved traces from the relations inferred between them and from the subsequent reasoning performed over those relations.
- **Practice cross-check:** Turin Comparative Views / Critical Inquiry: retrieved traces → explicit relation type → supporting and conflicting evidence → bounded synthesis or unresolved state, with the evidence structure visible to the researcher.

## Claim 3

- **Claim (plain):** Contestability requires users to be able to alter assumptions about evidence and observe how the inference changes.
- **Evidence (quote/paraphrase + page):** ArgRAG allows users to contest either an argument's base score or its polarity as supporting, attacking or neutral; the framework then recomputes the outcome. `[@zhuArgRAGExplainableRetrieval2025, pp. 5–7]` The authors demonstrate that changing the assumed strengths of two evidence items can move the claim strength from acceptance to 0.46 and therefore reverse the decision. `[@zhuArgRAGExplainableRetrieval2025, p. 7]` Their ablation study further shows that modelling evidence–evidence relations improves accuracy, particularly where conflicting evidence is present. `[@zhuArgRAGExplainableRetrieval2025, p. 9]`
- **Warrant (my words):** An explanation becomes contestable when the user can challenge how evidence has been characterised and see the consequences of that challenge rather than merely receiving a narrative justification after the fact.
- **So what for my thesis:** An archive-facing inference system should allow researchers to interrogate and revise computationally proposed relationships between traces, preserving interpretative authority with the researcher rather than freezing model classifications into an authoritative result.
- **Practice cross-check:** Turin Semantic Atlas / Critical Inquiry: permit the researcher to inspect why records are being treated as related, conflicting or irrelevant and to compare alternative readings without silently overwriting the underlying archival evidence.

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