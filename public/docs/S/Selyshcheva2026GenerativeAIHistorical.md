---
title: "Generative AI as a historical source: source criticism, citation integrity, and the jagged frontier of digital history"
authors: "Selyshcheva, Iryna A."
year: 2026
journal: "CTE Workshop Proceedings"
citation_key: Selyshcheva2026GenerativeAIHistorical
doi: "10.55056/cte.1438"
url: "https://acnsci.org/journal/index.php/cte/article/view/1438"
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
model_subcluster: "S3.3 Retrieval-augmented inference"
source_type: "Bridge text"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature"
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

**How this source moves the primary research question forward:** Selyshcheva brings generative AI inside historical method by treating model output and model conditions as objects of source criticism. This directly supports the DDR rule that generated synthesis must remain accountable to provenance, citation integrity and the limits of the record.

**How this source bears on the secondary question:** It provides a source-critical test for contemporary computational revisiting of DDR ideas by insisting that chronology, attribution, provenance and inherited silences remain visible rather than being normalised by fluent synthesis.

**Where it sits in my argument:** S3.3 retrieval-augmented inference and the Turin case for bounded historical synthesis.

**My benchmark for using it:** Use it to ground source criticism, verification, provenance and human judgement. Treat its “algorithmic cartography” and “historical source” language as conceptual framing rather than proof that a model transparently reveals its training corpus.

# Position + moment

Selyshcheva writes from digital history after generative AI has entered routine scholarly and heritage practice. The article is a synthetic methodological intervention, drawing together empirical studies, professional guidance, legal cases and heritage policy rather than reporting a new experiment. [@Selyshcheva2026GenerativeAIHistorical, pp. 289–295]

# The author’s main move

She argues that the model itself should be subjected to source criticism and that responsible historical use of generative AI requires verification, provenance, attention to inherited silences and continued human interpretative authority. [@Selyshcheva2026GenerativeAIHistorical, pp. 290–295]

# Critical-reading claims

## Claim 1

**Claim.** Generative models should be treated as historical sources whose conditions of production require criticism. **Author claim.** Selyshcheva’s organizing thesis is that an LLM is not a neutral utility but an artefact shaped by an opaque, evolving and contested training corpus. **Evidence.** The paper frames the model as an “algorithmic cartography” of the digitized record and calls for reconstruction of the conditions under which its output was produced. [@Selyshcheva2026GenerativeAIHistorical, p. 290] **Evidence-supported claim.** The paper frames the model as an “algorithmic cartography” of the digitized record and calls for reconstruction of the conditions under which its output was produced. [@Selyshcheva2026GenerativeAIHistorical, p. 290] **Researcher inference.** Source criticism applies not only to retrieved archival documents but also to the computational system mediating them. **Warrant.** Mediation changes what can be seen and how confidently it is presented. **Boundary.** A model’s behavior cannot reconstruct its full training corpus or provenance. **Consequence.** Document model, corpus, retrieval and synthesis conditions as part of historical method. **Practice cross-check.** DDR records its bounded evidence surface, embedding/retrieval stack and source-to-answer provenance.
## Claim 2

**Claim.** Strong task performance can coexist with subtle historical error. **Author claim.** The “jagged frontier” means model competence is uneven and factual distortion can appear inside apparently strong performance. **Evidence.** A cited OCR study found a model with strong aggregate recognition accuracy that nevertheless inserted period-inappropriate archaic characters into many eighteenth-century texts. [@Selyshcheva2026GenerativeAIHistorical, p. 291] **Evidence-supported claim.** A cited OCR study found a model with strong aggregate recognition accuracy that nevertheless inserted period-inappropriate archaic characters into many eighteenth-century texts. [@Selyshcheva2026GenerativeAIHistorical, p. 291] **Researcher inference.** Aggregate accuracy does not guarantee fidelity to historically meaningful distinctions. **Warrant.** Historical error may concern chronology, attribution or register even when generic metrics look strong. **Boundary.** The example concerns transcription, not DDR semantic retrieval. **Consequence.** Validate outputs against domain-relevant historical criteria as well as generic model metrics. **Practice cross-check.** DDR UAT checks evidential status, chronology and attribution, not only retrieval relevance.
## Claim 3

**Claim.** Generative tools can make large archival collections more legible, but scale must remain accountable. **Author claim.** The paper identifies real gains in OCR, HTR, oral-history transcription and conversion of collections into machine-readable corpora. **Evidence.** Selyshcheva reviews studies where multimodal models outperform established recognition tools and projects where computational processing enables questions impractical at manual scale. [@Selyshcheva2026GenerativeAIHistorical, pp. 291–292] **Evidence-supported claim.** Selyshcheva reviews studies where multimodal models outperform established recognition tools and projects where computational processing enables questions impractical at manual scale. [@Selyshcheva2026GenerativeAIHistorical, pp. 291–292] **Researcher inference.** Computational activation is defensible when it expands access to traces while preserving inspectability and expert correction. **Warrant.** Access gains are methodologically valuable when errors remain detectable and reversible. **Boundary.** The paper surveys heterogeneous cases rather than testing one archival workflow end-to-end. **Consequence.** Treat automation as a legibility layer rather than a replacement for source evaluation. **Practice cross-check.** DDR UMAP and RAI views surface candidate relations but return the researcher to PID-backed records.
## Claim 4

**Claim.** Historical synthesis is vulnerable to confident changes in chronology, attribution and evidential status. **Author claim.** Generative systems optimize plausible continuation rather than truth verification. **Evidence.** The paper lists historically consequential failure modes: wrong dates or chronology, omitted events, invented actors or actions, conflation of hypotheses with facts and misattribution across periods. [@Selyshcheva2026GenerativeAIHistorical, p. 292] **Evidence-supported claim.** The paper lists historically consequential failure modes: wrong dates or chronology, omitted events, invented actors or actions, conflation of hypotheses with facts and misattribution across periods. [@Selyshcheva2026GenerativeAIHistorical, p. 292] **Researcher inference.** A fluent answer can alter the historical proposition rather than merely paraphrase it. **Warrant.** Historical knowledge depends on preserving modality, chronology, attribution and provenance. **Boundary.** Reported error rates vary by model and domain and should not be transferred directly to DDR. **Consequence.** Verify every DDR claim against retrieved evidence and preserve uncertainty where support is incomplete. **Practice cross-check.** The evidence hierarchy distinguishes catalogue association, recorded action, intent and later recollection.
## Claim 5

**Claim.** Provenance is an active response to synthetic uncertainty, not merely a citation style. **Author claim.** Selyshcheva argues that synthetic media weaken assumptions of authenticity and that durable provenance should be established at capture or ingestion. **Evidence.** The article presents C2PA-style signed provenance metadata as a way to record origin and edit history and preserve evidential value against later uncertainty. [@Selyshcheva2026GenerativeAIHistorical, p. 293] **Evidence-supported claim.** The article presents C2PA-style signed provenance metadata as a way to record origin and edit history and preserve evidential value against later uncertainty. [@Selyshcheva2026GenerativeAIHistorical, p. 293] **Researcher inference.** Provenance should travel with digital historical evidence and with AI-mediated transformations of it. **Warrant.** Evidential trust is stronger when origin and transformation history are recorded before dispute arises. **Boundary.** C2PA records provenance events; it does not certify that a historical interpretation is true. **Consequence.** Use provenance credentials to document evidence lineage without overstating them as epistemic validation. **Practice cross-check.** The Turin C2PA benchmark signs selected outputs and records source ingredients while making no claim of historical certification.
## Claim 6

**Claim.** Responsible historical AI use must address inherited silences and retain human interpretative authority. **Author claim.** The paper links training-data bias to colonial representation, introduces CARE-oriented data governance, and concludes that causal interpretation and meaning-making remain the historian’s work. **Evidence.** Selyshcheva reviews evidence of colonializing model descriptions, presents CARE as a governance response, and ends by assigning argument, causality, empathy and interpretation of archival silence to human historians. [@Selyshcheva2026GenerativeAIHistorical, pp. 294–295] **Evidence-supported claim.** Selyshcheva reviews evidence of colonializing model descriptions, presents CARE as a governance response, and ends by assigning argument, causality, empathy and interpretation of archival silence to human historians. [@Selyshcheva2026GenerativeAIHistorical, pp. 294–295] **Researcher inference.** Technical accessibility cannot by itself repair asymmetry in whose histories are documented, described or computationally visible. **Warrant.** Interpretation of silence requires historical and ethical judgement beyond statistical completion. **Boundary.** CARE is introduced as a relevant governance framework, not empirically tested in this paper. **Consequence.** Preserve missingness and community/ethical constraints rather than filling documentary gaps with plausible synthesis. **Practice cross-check.** DDR scoped missingness states what the defined corpus cannot establish and the feminist strand tests obscured labour and attribution.
# Definitions / terms this changes

- **Algorithmic cartography:** the model as an uneven statistical representation of digitized historical culture rather than a neutral map. [@Selyshcheva2026GenerativeAIHistorical, p. 290]
- **Jagged frontier:** an irregular boundary between tasks of apparent competence and failure, with factual distortion possible even inside strong performance. [@Selyshcheva2026GenerativeAIHistorical, pp. 290–291]
- **Source criticism of the model:** reconstruction of the data, mechanisms and conditions through which model output is produced. [@Selyshcheva2026GenerativeAIHistorical, pp. 290, 295]
- **Provenance at ingestion:** recording origin and transformation history when material enters a digital system rather than relying only on later detection. [@Selyshcheva2026GenerativeAIHistorical, p. 293]

# My response

Selyshcheva is valuable because she does not force a choice between computational scale and historical craft. She makes scale conditional on source criticism. For DDR, that supports a workflow in which computation surfaces and organizes traces while provenance, evidential status, missingness and researcher judgement determine what can responsibly be claimed.

# Integration hooks

**Where I will cite it:** historical source criticism for AI; citation integrity; C2PA/provenance boundary; archival silence; human judgement.

**Workstreams →** RAI; scoped missingness; provenance; feminist critique.  
**Deliverables →** Turin paper; methods chapter; ethical considerations.

# Boundary + risk

**Boundary:** This is a synthetic methodological review, not a controlled evaluation of one historical AI system.

**Risk if misused:** Its language of the model as a “historical source” could be overstated into a claim that model output is evidence about the historical past rather than evidence about computational mediation.

# Cross-source / cross-lens synthesis

Selyshcheva carries Bender et al.’s critique of fluent but ungrounded generation into historical methodology. Asai et al. show how retrieval and citation checking can improve source-linked synthesis, while Selyshcheva supplies the historical boundary: retrieval and refinement still require source criticism. Her attention to colonial silences also connects the computational strand to Cifor, Buckley and situated-knowledge work on whose voices become legible and authoritative.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 290–295
- **First full note:** Iryna A. Selyshcheva, “Generative AI as a Historical Source: Source Criticism, Citation Integrity, and the Jagged Frontier of Digital History,” *CTE Workshop Proceedings* 13 (2026): 289–299.
- **Short note form:** Selyshcheva, “Generative AI as a Historical Source,” 292–295.

# Related works

- Bender et al., “On the Dangers of Stochastic Parrots.”
- Asai et al., “Synthesizing Scientific Literature with Retrieval-Augmented Language Models.”
- Cifor and Wood, “Critical Feminism in the Archives.”

# Follow-ups

- **What I will test next:** Audit whether DDR generated summaries preserve chronology, evidential status and uncertainty when evidence is sparse or contradictory.
