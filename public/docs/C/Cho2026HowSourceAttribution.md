---
title: "How source attribution visualization shapes user attention and preference: an eye-tracking study of four AI chatbot layouts"
authors: "Cho, Junho and Lim, Dokshin"
year: 2026
journal: "Journal of Eye Movement Research"
citation_key: Cho2026HowSourceAttribution
doi: "10.3390/jemr19040089"
url: "https://www.mdpi.com/1995-8692/19/4/89"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:31"
last_updated: "16 Sept 2026"
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
source_type: "Methodological anchor"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "07 Interface authority, ranking and retrieval bias"
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
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 11 Uncertainty and provenance display in interfaces  

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
I need empirical evidence showing that the visual design of source attribution affects whether provenance is noticed, understood and connected to specific claims, and that citation visibility alone does not guarantee verification.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin interface/provenance discussion. It helps establish that evidential traceability is not only a backend property: source cues must be visually discoverable, semantically identifiable and explicitly mapped to the claims they support.

**Why this term, not alternatives (1–2 lines):**  
I use *verification affordance* rather than simply *citation visibility*. A visible citation can still operate as a credibility cue without enabling the user to establish which claim it supports or whether the cited material actually warrants that claim.

**My benchmark for using it (1–2 criteria I will apply):**  
Use it where I need evidence that provenance presentation changes attention and verification behaviour. Do not infer from gaze duration that users verified a source successfully, because the authors explicitly distinguish attention from mapping success and trust.

# Position + moment (2–4 lines)

Cho and Lim write from visual communication design, human–computer interaction and eye-tracking research. Their 2026 study compares four source-attribution layouts abstracted from contemporary AI chatbots using gaze metrics, surveys and post-task interviews. The paper is unusually useful because it investigates the process conditions that precede verification rather than relying only on clicks or self-reported trust.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Source attribution should not be treated as a binary property that is either present or absent. Its evidential function depends on interface placement, pre-click identity, claim-level mapping and the user's ability to inspect the underlying material with proportionate effort.

# The author’s main move (1 sentence)

They try to determine how source-attribution layout affects the visual preconditions of verification by comparing discoverability, attention, perceived trust and user preference across four chatbot citation interfaces.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** The layout of source attribution materially changes whether and when users notice source cues.
- **Evidence (quote/paraphrase + page):** The card-list format was discovered almost immediately, with a mean time to first fixation of 0.96 seconds, while raw hyperlinks were discovered last at 15.65 seconds; the overall layout effect on discoverability was statistically significant. `[@Cho2026HowSourceAttribution, pp. 16–18]` Figure 6 on p. 17 visualises the large differences in time to first fixation across layouts.
- **Warrant (my words):** Provenance cannot support verification if users do not notice it. The spatial and visual organisation of source cues therefore forms part of the evidential architecture of the interface.
- **So what for my thesis (a reusable sentence):** Evidential traceability depends not only on attaching sources to generated claims but on presenting those sources so that researchers can discover and inspect them during the normal reading flow.
- **Practice cross-check:** Turin source integration: citations and source links should remain adjacent enough to the generated interpretation that a researcher does not have to leave the reading path or search a separate panel to establish provenance.

## Claim 2

- **Claim (plain):** Attention to sources does not automatically indicate successful verification or increased trust.
- **Evidence (quote/paraphrase + page):** The side panel and card-list layouts attracted substantially more fixation time than the inline and hyperlink formats, but self-reported trust did not differ significantly across the four layouts. `[@Cho2026HowSourceAttribution, pp. 18–19, 24]` The authors report that neither discovery latency nor dwell time significantly tracked trust and describe this as an attention–preference dissociation. `[@Cho2026HowSourceAttribution, pp. 19, 27–28]`
- **Warrant (my words):** Longer inspection can reflect friction, confusion or the effort required to map a source to its claim rather than deeper or more successful evidential engagement.
- **So what for my thesis:** Interface evaluation should distinguish source visibility, source attention, claim–source mapping and successful verification rather than collapsing them into a single measure of transparency or trust.
- **Practice cross-check:** Turin UAT should not treat citation clicks, dwell time or source-panel use as sufficient evidence that provenance works; the researcher must be able to identify what evidence supports which interpretative claim.

## Claim 3

- **Claim (plain):** Users need pre-click source identity and explicit claim–source mapping if provenance is to function as a verification mechanism rather than a credibility badge.
- **Evidence (quote/paraphrase + page):** In interviews, participants repeatedly requested visible source titles or institutional identities before clicking and explicit mapping between individual claims and source material. `[@Cho2026HowSourceAttribution, pp. 25–26]` The authors consequently propose three design principles: pre-click identification, sentence-level claim–source mapping and in situ source preview. `[@Cho2026HowSourceAttribution, pp. 29–32]`
- **Warrant (my words):** A citation has limited evidential value if the user cannot tell what kind of source it is or which statement it supports. Semantic identity and claim-level linkage reduce the effort required to assess provenance.
- **So what for my thesis:** Provenance should be designed as a claim-to-evidence relationship: the interface should identify the source, show which interpretation it supports and allow the underlying passage to be inspected without excessive navigation.
- **Practice cross-check:** Turin citation design: generated claims should map to named DDR records and previewable source passages, while conflicting or insufficient evidence should remain visible rather than being hidden behind an undifferentiated citation list.

# Definitions / terms this changes (only the ones that matter)

- **Discoverability:** how rapidly a source cue enters the user's visual attention, operationalised through time to first fixation. `[@Cho2026HowSourceAttribution, pp. 13, 16–17]`
- **Claim–source mapping:** the user's ability to connect a particular generated statement with the specific evidence presented as supporting it. `[@Cho2026HowSourceAttribution, pp. 25, 29–32]`
- **Verification affordance:** my term for an interface feature that lowers the cost of checking whether a specific claim is supported by an identifiable source.
- **Pre-click identifiability:** the ability to recognise the provenance of a source — such as its institution, title or document type — before following a link. `[@Cho2026HowSourceAttribution, pp. 29–32]`
- **Attention–preference gap:** the observed dissociation between how much users look at a source interface and which interface they prefer or trust. `[@Cho2026HowSourceAttribution, pp. 27–28]`

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Provenance presentation is part of the epistemic design of a research interface, not decorative UI.
  - The distinction between *Notice → Attend → Map → Act* is an excellent way to separate stages that are often collapsed under the word “transparency”.
  - Claim-level provenance matters more than the mere presence or visual prominence of citations.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - For the DDR system, I would extend their *Map* stage beyond one-to-one citation linkage to allow one claim to map onto multiple supporting, conflicting or qualifying traces.
  - I would treat trust calibration as secondary to researcher agency: the design objective is to enable scrutiny rather than to maximise confidence in the generated answer.

- **What question it raises next (1–2 bullets):**
  - How should a claim–source map work when an interpretation depends on several archival traces of different dates and evidential statuses?
  - Can the same interface show supporting, conflicting and insufficient evidence without turning provenance into an unreadable annotation layer?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin interface-method section after explaining hyperlinkable citations, to establish that provenance cues need to be discoverable, identifiable and claim-mapped rather than simply present. Cite again in UAT design when explaining why citation visibility alone is not a sufficient success criterion.
- **Where I will name the title in running text (first-use rule):** “Cho and Lim's *How Source Attribution Visualization Shapes User Attention and Preference* provides process-level evidence that source presentation shapes whether provenance is noticed and how easily users can relate sources to generated claims.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Research Query / Sources Integration interface: generated claims → inline source cue → named archival source → previewable passage → full source, with claim–source linkage retained during navigation.
- **Workstreams →** citation architecture; provenance UX; retrieval-augmented inference; interface UAT
- **Deliverables →** Turin methodology; thesis S3 interface design; provenance testing protocol
- **Stakeholders →** archival researchers; historians; cultural-heritage practitioners; interface designers

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study measures the visual preconditions of verification in static simulated screens with 23 young, experienced AI users and does not test whether participants actually opened sources, detected incorrect citations or verified historical claims successfully.
- **Risk if misused (1 sentence):** Treating the preferred or most-viewed layout as the most trustworthy design would reproduce the exact category error the paper warns against: gaze, preference, trust and successful verification are distinct outcomes.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 2–3, 16–19, 24–32, 34–35
- **First full note (write it out here):** Junho Cho and Dokshin Lim, “How Source Attribution Visualization Shapes User Attention and Preference: An Eye-Tracking Study of Four AI Chatbot Layouts,” *Journal of Eye Movement Research* 19, no. 4 (2026): 89, https://doi.org/10.3390/jemr19040089.
- **Short note form:** Cho and Lim, “How Source Attribution Visualization Shapes User Attention,” [page].
- **One quote worth lifting (≤2 lines):** “citation presence and citation verifiability are not equivalent” (p. 3).
- **One paraphrase worth keeping:** Source cues support verification only when users can notice them, identify their provenance and map them to the specific claims they support; visual prominence alone can function as a credibility signal without enabling evidential scrutiny. (pp. 28–32)

# Related works (only if it directly connects)

- Carl et al. (2026), *Enhancing clinicians’ trust in large language models via transparent source attribution* — provides complementary experimental evidence that inline references and previewable source passages improve verifiability in a high-stakes professional context.
- Łajewska and Balog (2026), *Trust Me on This: A User Study of Trustworthiness for RAG Responses* — complements Cho and Lim by testing how explanations and attribution affect users' selection between responses rather than visual attention alone.
- Bernard and Balog (2025), *A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval* — provides the broader IR framework in which transparency concerns explanation of the relationship between query, system and output.
- Ding et al. (2025), *Citations and Trust in LLM Generated Responses* — important counterpoint showing that citation presence can increase trust even when citations are irrelevant.
- Kim et al. (2025), *Fostering Appropriate Reliance on Large Language Models* — relevant to the distinction between increasing trust and supporting evidence-sensitive reliance.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Łajewska and Balog (2026) to test whether claim/source explanations change users' selection of objectively better RAG answers and whether that effect varies with task or prior knowledge.
- **What I will test or write next:** Turn Cho and Lim's Notice → Attend → Map → Act sequence into a Turin provenance UAT: can the researcher notice a source cue, identify its provenance, connect it to the relevant claim, inspect the passage and determine whether the evidence supports, qualifies or conflicts with the generated interpretation?