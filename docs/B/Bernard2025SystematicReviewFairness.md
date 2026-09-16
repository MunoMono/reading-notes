---
title: "A systematic review of fairness, accountability, transparency, and ethics in information retrieval"
authors: "Bernard, Nolwenn and Balog, Krisztian"
year: 2025
journal: "ACM Computing Surveys"
citation_key: Bernard2025SystematicReviewFairness
doi: "10.1145/3637211"
url: "https://dl.acm.org/doi/10.1145/3637211"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
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
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Context / supporting"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "05 Archival partiality, silence and absence"
  - "07 Interface authority, ranking and retrieval bias"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Context / supporting  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 05 Archival partiality, silence and absence; 07 Interface authority, ranking and retrieval bias; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** How organisation choices reveal or hide contested knowledge

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
I need a defensible information-retrieval account of how ranking, visibility, explanation and fairness shape what is surfaced to a user before retrieval-augmented inference begins.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin discussion of interface authority. It helps establish that retrieval is an active ranking operation whose design choices affect which traces become available for interpretation and which remain comparatively obscured.

**Why this term, not alternatives (1–2 lines):**  
I use *retrieval bias* to describe systematic effects produced by selection and ranking, without assuming discriminatory intent. I keep *fairness* for explicitly defined normative questions about treatment, representation or exposure because Bernard and Balog show that fairness has multiple non-equivalent definitions.

**My benchmark for using it (1–2 criteria I will apply):**  
Use it to establish that retrieval/ranking, explanation and exposure are methodological concerns in their own right. Do not treat its pre-2022 evidence base as direct evaluation of contemporary RAG or generative retrieval systems.

# Position + moment (2–4 lines)

Bernard and Balog write from the information-retrieval tradition, reviewing 75 peer-reviewed studies concerned with fairness, accountability, transparency and ethics in ranked retrieval systems. Their contribution is systematic and classificatory: they examine definitions, technical interventions and evaluation practices and develop taxonomies for transparency and accountability. Although the article appears in 2025, its systematic search was conducted on 19 April 2022, so it should be read as a synthesis of the pre-generative-IR literature rather than a survey of contemporary RAG.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The review's central insight that information access remains a ranking problem continues to matter, but contemporary retrieval-augmented systems add generation and inference downstream. Ranking therefore becomes one component in a larger interpretive pipeline whose effects can be amplified by fluent synthesis.

# The author’s main move (1 sentence)

They try to make trustworthiness in information retrieval more operational by systematically reviewing how fairness, accountability, transparency and ethics have been defined, implemented and evaluated and by converting those findings into requirement taxonomies.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Retrieval is a ranking operation, and ranking determines which information becomes visible to the user.
- **Evidence (quote/paraphrase + page):** Bernard and Balog define their core IR setting as receiving a textual query and returning a ranked list of relevant items and stress that, despite increasingly complex interfaces and pipelines, modern information-access systems still address a ranking problem at their core. They also cite evidence that manipulated search-result composition can change users' perceptions of gender representation in occupations. `[@Bernard2025SystematicReviewFairness, p. 2]`
- **Warrant (my words):** Retrieval is therefore not a neutral transfer of already-existing relevance. Ranking allocates visibility and exposure, creating the evidential field from which subsequent interpretation can proceed.
- **So what for my thesis (a reusable sentence):** In retrieval-augmented archival research, ranking is itself an interpretive condition because it determines which documentary traces become available to subsequent inference and which remain comparatively difficult to see.
- **Practice cross-check:** Turin Semantic Atlas and source-retrieval interfaces: nearest-neighbour ranking, top-k retrieval and filtering determine which DDR traces enter the evidence surface presented to the researcher.

## Claim 2

- **Claim (plain):** Transparency in retrieval requires making the relationship between query, system operation and returned evidence intelligible, including relevant trade-offs and provenance.
- **Evidence (quote/paraphrase + page):** The review identifies transparency with communicating how a system works and why particular outputs are produced, including making trade-offs visible and allowing claims about the system to be tested. `[@Bernard2025SystematicReviewFairness, pp. 10–11]` Its later taxonomy distinguishes global, local and causal transparency and different modalities through which that information can be communicated. `[@Bernard2025SystematicReviewFairness, pp. 20–21]`
- **Warrant (my words):** Showing sources is only one part of transparency. A user also needs enough information to understand why particular sources were surfaced and how retrieval or processing shaped the resulting evidence set.
- **So what for my thesis:** Evidential traceability in the DDR system should include not only provenance back to archival records but sufficient visibility into the retrieval and ranking operations that made those records available for interpretation.
- **Practice cross-check:** Turin citations reopen the underlying evidence, while Semantic Atlas neighbourhoods, ranked retrieval and source metadata expose aspects of the route by which particular traces become visible.

## Claim 3

- **Claim (plain):** Fairness cannot be inferred from simple proxies such as diversity, exposure or absence of obvious bias.
- **Evidence (quote/paraphrase + page):** Bernard and Balog find that fairness is multidimensional and context-dependent, distinguishing individual/group, consumer/producer and single/multiple-output formulations. `[@Bernard2025SystematicReviewFairness, pp. 10–11]` They explicitly warn that commonly used proxies such as diversity, exposure and bias are not equivalent to fairness: a diverse or apparently unbiased result need not constitute a fair system. `[@Bernard2025SystematicReviewFairness, p. 17]`
- **Warrant (my words):** Measures of representational variety describe properties of retrieved results; they do not by themselves determine whether the retrieval process adequately addresses historically marginalised people, forms of labour or kinds of evidence.
- **So what for my thesis:** A more diverse retrieval result should not be presented as evidence that the DDR archive has been made historiographically fair; questions of visibility, authorship and marginalisation require explicit historical and feminist criteria.
- **Practice cross-check:** DDR feminist critique: surfacing more women, students or marginal records through semantic neighbourhoods can expose patterns of visibility, but interpretation must still ask how those actors are represented, attributed and valued within the archive.

# Definitions / terms this changes (only the ones that matter)

- **Information retrieval:** in the review's narrow formulation, finding material that satisfies an information need and ranking retrievable items according to estimated relevance to a textual query. `[@Bernard2025SystematicReviewFairness, pp. 1–2]`
- **Local transparency:** explanation of the relationship between a specific query and the results returned for it. `[@Bernard2025SystematicReviewFairness, pp. 13, 20]`
- **Fairness:** a multidimensional and context-dependent requirement rather than a single measurable property; relevant dimensions include individual/group treatment, consumer/item side and single/multiple outputs. `[@Bernard2025SystematicReviewFairness, pp. 10–11]`
- **Retrieval bias:** my use of the term for systematic effects introduced through indexing, matching, ranking and exposure that influence which archival traces become visible, without treating every unequal ranking as equivalent to normative unfairness.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Retrieval and ranking deserve methodological scrutiny independently of whatever generative model follows them.
  - Transparency can be designed at several levels: explaining the system globally, explaining why a particular result was returned locally, or relating system operations causally to outputs.
  - Fairness terminology must be defined before it is measured; representational diversity or balanced exposure should not be allowed to stand in for a broader claim of historical fairness.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I extend the review's ranking-centred account into retrieval-augmented inference: ranking establishes the evidential field and generation subsequently interprets that ranked field.
  - For the DDR, I connect ranking fairness to archival historiography by asking whose traces receive computational visibility and how that visibility interacts with pre-existing archival prominence, description and omission.

- **What question it raises next (1–2 bullets):**
  - How can I expose retrieval rank and semantic proximity without encouraging users to mistake computational similarity for historical importance?
  - What explicit criterion should govern claims about representational fairness when the archive itself inherits historical inequalities in authorship, description and survival?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin research-design section immediately before or after describing semantic retrieval, to establish that retrieval systems allocate visibility through ranking and therefore constitute part of the interpretive method. Cite again when discussing interface authority and the risk that ranked outputs appear naturally authoritative.
- **Where I will name the title in running text (first-use rule):** “Bernard and Balog's *A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval* situates trustworthiness at the level of retrieval and ranking rather than only at the point of generated output.”
- **Link to my practice evidence (one concrete cross-reference):** Semantic Atlas / semantic neighbourhoods and source integration: inspect how top-k selection, similarity ranking and interface ordering change which DDR traces become visible together.
- **Workstreams →** semantic retrieval; interface authority; provenance; feminist critique; scoped missingness
- **Deliverables →** Turin methodological framing; thesis S3 critical-method section; retrieval UAT and interface design principles
- **Stakeholders →** archival researchers; archivists; design historians; users of AI-mediated archival interfaces

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The review deliberately studies non-personalised ranked retrieval and its search was completed in April 2022, so it does not directly evaluate contemporary RAG, LLM synthesis or retrieval-augmented inference.
- **Risk if misused (1 sentence):** Treating its FATE taxonomies as ready-made measures for the DDR could collapse normative questions of historical representation into technical properties of ranked search results.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–3, 10–14, 17–24
- **First full note (write it out here):** Nolwenn Bernard and Krisztian Balog, “A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval,” *ACM Computing Surveys* 57, no. 6 (2025): article 136, https://doi.org/10.1145/3637211.
- **Short note form:** Bernard and Balog, “Systematic Review of Fairness,” [page].
- **One quote worth lifting (≤2 lines):** “modern information access systems still address an IR ranking problem at their core” (p. 2).
- **One paraphrase worth keeping:** Ranking, explanation and exposure are not neutral implementation details: they shape what information becomes visible, how users understand its relevance and what claims can subsequently be made from it. (pp. 2, 11–14)

# Related works (only if it directly connects)

- Pitoura, Stefanidis and Koutrika (2021), *Fairness in Rankings and Recommendations: An Overview* — provides the fairness taxonomy used and extended in the review.
- Castillo (2019), *Fairness and Transparency in Ranking* — connects transparent ranking with understandable communication, visible trade-offs and testable system claims.
- Hajibayova (2019), *Guardians of the Knowledge* — particularly relevant because it links accountability to explaining why information is retrievable or inaccessible and transparency to information provenance.
- Kay, Matuszek and Munson (2015), *Unequal Representation and Gender Stereotypes in Image Search Results for Occupations* — empirical precedent showing that ranked representation can affect users' perceptions of gender distributions.
- Bernard and Balog should also be read alongside the archival literature on power and description, because computational ranking adds a further layer of selection to archival arrangements already shaped by prior acts of appraisal, preservation and description.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Follow Hajibayova (2019) and Castillo (2019) selectively because their formulations of retrievability, provenance, visible trade-offs and local explanations appear especially relevant to archive-facing retrieval.
- **What I will test or write next:** Add a retrieval-authority test to the Semantic Atlas UAT: vary top-k, ranking method and neighbourhood threshold and observe which people, documents or testimonial traces disappear, recur or move into prominence.