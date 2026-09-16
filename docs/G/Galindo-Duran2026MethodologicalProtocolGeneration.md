---
title: "A methodological protocol for the generation and evaluation of AI-generated cultural heritage content"
authors: "Galindo-Durán, Alejandro and Prego de Oliver-López, Cristina and Bernal-Bravo, César"
year: 2026
journal: "Journal of Cultural Heritage"
citation_key: Galindo-Duran2026MethodologicalProtocolGeneration
doi: "10.1016/j.culher.2026.08.010"
url: "https://linkinghub.elsevier.com/retrieve/pii/S1296207426001767"
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
source_type: "Bridge text"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "01 Synthetic heritage and cultural memory"
  - "09 Human judgement and practice-led computational research"
  - "11 Uncertainty and provenance display in interfaces"
  - "12 Digitisation, reconstruction and archival completion"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Bridge text  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 01 Synthetic heritage and cultural memory; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces; 12 Digitisation, reconstruction and archival completion  

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
I need a recent cultural-heritage methodology that treats historical validity, provenance, uncertainty and expert validation as explicit requirements for evaluating AI-generated representations.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin synthetic-heritage discussion. It provides a methodological bridge between recognising that generative systems can produce historically persuasive but inaccurate representations and specifying how those outputs should be subjected to structured evidential scrutiny.

**Why this term, not alternatives (1–2 lines):**  
I use *historical warrant* rather than *historical accuracy* for the DDR because archival interpretation rarely has a single visual reference against which correctness can be scored. The relevant question is whether an interpretation is adequately supported, qualified and traceable to the available evidence.

**My benchmark for using it (1–2 criteria I will apply):**  
Use the paper where it establishes validation, traceability, documentary justification and expert judgement as methodological requirements. Do not cite the proposed protocol as empirical evidence that those mechanisms have yet been validated.

# Position + moment (2–4 lines)

Galindo-Durán, Prego de Oliver-López and Bernal-Bravo write from heritage, education and communication research at a moment when generative image systems are rapidly entering heritage dissemination. Their paper responds to a perceived methodological gap: image quality has advanced faster than procedures for assessing historical veracity. Their intervention is therefore protocol-driven rather than results-driven, combining a literature review, controlled generation procedure, interdisciplinary expert assessment and proposed automated validation layer.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The protocol assumes that historical veracity can be operationalised through comparatively stable criteria for visual heritage objects. Archival testimony requires a less singular model of validity because contradiction, retrospective interpretation and documentary silence may themselves be historically significant.

# The author’s main move (1 sentence)

They try to make AI-generated cultural-heritage content methodologically accountable by standardising generation, expert evaluation, automated cross-checking and subsequent analysis within a traceable and reproducible protocol.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Visually persuasive generative outputs can remain historically unreliable.
- **Evidence (quote/paraphrase + page):** The authors argue that increasing visual sophistication has not been matched by safeguards for historical veracity and that apparently persuasive outputs may contain stylistic inaccuracies, anachronisms and documentary inconsistencies. `[@Galindo-Duran2026MethodologicalProtocolGeneration, pp. 370–371]` Their comparison of seven AI-generated Corinthian capitals in Figs. 1 and 2 shows recurrent proportional distortions, stylistic hybridisations and historically inappropriate details. `[@Galindo-Duran2026MethodologicalProtocolGeneration, p. 371]`
- **Warrant (my words):** Representational coherence and historical validity are separate properties. A generated artefact may look convincing while introducing features that the historical evidence does not support.
- **So what for my thesis (a reusable sentence):** Fluency and representational plausibility cannot serve as proxies for historical warrant; AI-mediated interpretations require independent scrutiny against the evidence from which they claim to derive.
- **Practice cross-check:** Turin research queries: a coherent generated relationship between DDR people, ideas or events is not accepted because it reads plausibly; the cited archival traces must actually support the relation.

## Claim 2

- **Claim (plain):** Historical validation should explicitly include documentary justification, traceability and uncertainty rather than relying on output quality alone.
- **Evidence (quote/paraphrase + page):** The paper identifies five core parameters for rigorous digital-heritage assessment, including historical rigour grounded in “source identification, documentary justification, and explicit levels of interpretive certainty”, together with transparency and traceability through methods, metadata and paradata. `[@Galindo-Duran2026MethodologicalProtocolGeneration, p. 375]`
- **Warrant (my words):** Evaluation therefore concerns the evidential status and provenance of a representation as well as its formal qualities. A historically responsible system must expose why an output is warranted and where certainty ends.
- **So what for my thesis:** Retrieval-augmented inference should make source identification, documentary justification and the limits of interpretive certainty visible as part of the research output rather than treating provenance as a secondary technical record.
- **Practice cross-check:** Turin citations expose source passages and metadata, while scoped missingness states where the defined DDR evidence surface does not support a stronger conclusion.

## Claim 3

- **Claim (plain):** Expert judgement and computational evaluation can be combined, but automated assessment remains subordinate to human historical scrutiny.
- **Evidence (quote/paraphrase + page):** The proposed Evaluation phase combines independent interdisciplinary expert assessment with multimodal AI review across five dimensions. The authors state explicitly that automated evaluation “does not replace expert input” but operates as a secondary validation layer. `[@Galindo-Duran2026MethodologicalProtocolGeneration, pp. 375–376]` Figure 7 on p. 379 places expert and digital evaluation in parallel within the Evaluation stage before statistical and thematic analysis.
- **Warrant (my words):** Computational cross-checking can identify convergences or discrepancies, but the same class of generative systems being evaluated cannot independently determine historical truth. Human expertise remains necessary to interpret evidential adequacy and contextual significance.
- **So what for my thesis:** Computational validation can support archival interpretation by surfacing consistency, contradiction and provenance, while responsibility for deciding what the evidence warrants remains with the researcher.
- **Practice cross-check:** Turin workflow: retrieval and model-assisted synthesis can structure and compare traces, but researcher review of quotation, provenance, chronology and archival context remains necessary before historical interpretation is accepted.

# Definitions / terms this changes (only the ones that matter)

- **Historical veracity:** the degree to which generated heritage content corresponds to historically defensible forms, contexts and documentary evidence rather than merely appearing plausible. `[@Galindo-Duran2026MethodologicalProtocolGeneration, pp. 370–375]`
- **Historical rigour:** in the protocol, a combination of source identification, documentary justification and explicit levels of interpretive certainty. `[@Galindo-Duran2026MethodologicalProtocolGeneration, p. 375]`
- **Transparency and traceability:** documentation of methods, metadata and paradata enabling the production and evaluation process to be reconstructed and scrutinised. `[@Galindo-Duran2026MethodologicalProtocolGeneration, p. 375]`
- **Historical warrant:** my extension for archival interpretation: the degree to which a claim is supportable from identifiable traces while retaining relevant uncertainty, contradiction and evidential limits.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The paper gives strong recent heritage-sector support for treating documentary justification, provenance and uncertainty as components of historical validity.
  - Its separation of Generation → Evaluation → Analysis is useful for my own methodological framing because it prevents generated output from being treated as the endpoint of the research process.
  - The explicit statement that automated evaluation remains secondary to expert judgement supports the researcher-in-the-loop position of the Turin experiment.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I translate their visual concept of historical veracity into archival historical warrant, where the task is to establish how strongly available traces support an interpretation rather than compare a generated image against a singular correct form.
  - I use computational validation to expose evidence and inconsistency, while treating researcher judgement as necessary where records are partial, contradictory or temporally layered.

- **What question it raises next (1–2 bullets):**
  - What would an equivalent structured validation instrument look like for retrieval-augmented historical interpretations rather than generated images?
  - Could the DDR workflow explicitly score or classify provenance, temporal fit, evidential sufficiency, contradiction and interpretive uncertainty without creating false numerical precision?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin synthetic-heritage paragraph establishing that visual plausibility and historical validity can diverge, and again in the methodology when justifying explicit source identification, documentary warrant and researcher validation.
- **Where I will name the title in running text (first-use rule):** “Galindo-Durán, Prego de Oliver-López and Bernal-Bravo's *A Methodological Protocol for the Generation and Evaluation of AI-Generated Cultural Heritage Content* proposes a structured framework for testing historical veracity rather than accepting generative plausibility at face value.”
- **Link to my practice evidence (one concrete cross-reference):** Turin findings matrix and research pipeline: retrieved evidence → bounded synthesis → citation/provenance check → researcher assessment of whether the available corpus warrants the interpretation.
- **Workstreams →** synthetic heritage; provenance; validation; retrieval-augmented inference; researcher judgement
- **Deliverables →** Turin literature framing; thesis S3 methodological justification; evaluation protocol
- **Stakeholders →** archival researchers; historians; cultural-heritage practitioners; digital-humanities researchers

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The article proposes rather than empirically validates its protocol and focuses primarily on generated heritage imagery whose formal and stylistic properties are more readily scored than contested textual archival interpretations.
- **Risk if misused (1 sentence):** Presenting the framework as demonstrated evidence of historical reliability, or treating AI-based secondary evaluation as independent validation, would overstate what the article establishes and could create circular assurance between generative systems.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 370–376, 378–379
- **First full note (write it out here):** Alejandro Galindo-Durán, Cristina Prego de Oliver-López, and César Bernal-Bravo, “A Methodological Protocol for the Generation and Evaluation of AI-Generated Cultural Heritage Content,” *Journal of Cultural Heritage* 81 (2026): 370–381, https://doi.org/10.1016/j.culher.2026.08.010.
- **Short note form:** Galindo-Durán, Prego de Oliver-López, and Bernal-Bravo, “Methodological Protocol,” [page].
- **One quote worth lifting (≤2 lines):** “source identification, documentary justification, and explicit levels of interpretive certainty” (p. 375).
- **One paraphrase worth keeping:** Historically responsible evaluation of AI-generated heritage content requires documentary justification, methodological traceability, explicit treatment of uncertainty and expert scrutiny in addition to formal or visual plausibility. (pp. 375–379)

# Related works (only if it directly connects)

- Arzomand, Kalganova and Rustell (2026), *HARF* — operationalises evidence-bounded generative reconstruction through verified documentation, paradata and expert validation.
- Borůvková (2025), *Ethical Aspects of Digital Reconstruction of the Historical Cultural Heritage* — supplies the ethical distinction between surviving evidence, interpretative intervention and reconstructed material.
- Nieto McAvoy and Kidd (2024), *Synthetic Heritage* — provides the broader conceptual account of algorithmically generated cultural memory, authenticity and synthetic historical representation.
- Ocón, Yin and Luna (2025), *Artificial Insights or Historical Fidelity?* — directly relevant because Galindo-Durán et al. draw on it for ethical principles surrounding GenAI reconstruction and historical fidelity.
- The London Charter and Seville Principles — underpin the paper's requirements for documentation, transparency, uncertainty and traceability in digital heritage.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Ocón, Yin and Luna (2025), because it appears to provide a more explicitly ethical and epistemological treatment of historical fidelity than the procedural protocol developed here.
- **What I will test or write next:** Translate the paper's Generation → Evaluation → Analysis structure into a DDR inference-validation protocol: retrieval and synthesis → evidential/provenance review → interpretative judgement and scoped-missingness classification.