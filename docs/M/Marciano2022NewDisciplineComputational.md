---
title: "Towards a new discipline of computational archival science (CAS)"
authors: "Marciano, Richard"
year: 2022
journal: "Archives, Access and Artificial Intelligence: Working with Born-Digital and Digitized Archival Collections"
citation_key: Marciano2022NewDisciplineComputational
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
last_updated: "03 Oct 2026, 05:29"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Interpretability, provenance, and retrieval"
source_type: "Bridge text"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature"
project_tags:
  - "Theoretical framework"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 3. Critical computational approaches  
**Literature cluster:** c) Contemporary bridge literature  
**Zotero filing path:** Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature  
**Source type:** Bridge text

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

**How this source moves the primary research question forward:** Marciano provides a concrete bridge between archival science and computation. He frames cultural collections as large-scale data, makes datafication and analysis visible as separate stages, and defines Computational Archival Science (CAS) as a blend of computational and archival thinking. This helps the thesis justify computational activation as an archival method rather than an external analytics layer.

**How this source bears on the secondary question:** Revisiting DDR-period design knowledge computationally requires methods that preserve context and provenance while making large, heterogeneous record systems more tractable. Marciano’s field-building argument gives a contemporary vocabulary for doing this without abandoning archival principles.

**Why I’m reading this now:** It is a core bridge text for S3 because it joins scale, workflow transparency, training, archival concepts and computational methods in one field claim.

**Where it sits in my argument:** Contemporary bridge literature linking archival theory to computational practice.

**My benchmark for using it:** I will use Marciano where computational processing is tied to an identifiable archival function and where the transformations between source record and analytical output remain inspectable.

# Position + moment

Written as the afterword to *Archives, Access and Artificial Intelligence*, Marciano consolidates a decade of workshop, training and network-building activity around Computational Archival Science. The chapter responds to three linked problems: scale, “dark” archives, and skills gaps in data science and AI, while arguing that archival principles and computational methods should be developed together. [@Marciano2022NewDisciplineComputational, pp. 205–216]

# The author’s main move

Marciano argues for CAS as a transdisciplinary practice in which computational thinking and archival thinking are deliberately integrated across datafication, analysis, description, preservation, access and training, with interdisciplinary collaboration treated as part of the field’s infrastructure. [@Marciano2022NewDisciplineComputational, pp. 206–216]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Scale changes which archival methods are practical.
- **Author claim:** Marciano argues that digitised cultural collections can quickly reach terabyte and petabyte scales and that methods suited to small holdings may not scale to very large ones.
- **Evidence-supported claim:** Using historical city directories, he estimates approximately 2 GB for one scanned volume, roughly 2 TB for a statewide corpus and around 100 TB for a rough US-wide extrapolation, concluding that cultural collections are inherently “big data.” [@Marciano2022NewDisciplineComputational, pp. 205–206]
- **Researcher inference:** The DDR computational layer should be justified by the problem of working across a large linked corpus, not by technological novelty.
- **Evidence (quote/paraphrase + page):** Marciano states that “cultural collections are inherently ‘big data’” and notes that methods that work for small holdings may fail at larger scale. [@Marciano2022NewDisciplineComputational, p. 206]
- **Warrant (my words):** Scale changes the feasibility of manual browsing, cross-document comparison and relationship tracing.
- **Boundary:** DDR is substantially smaller than the petabyte-scale examples in this chapter, so the argument supports computational tractability rather than a claim that DDR itself is “big data” in the strongest sense.
- **Consequence:** The thesis should state the actual DDR corpus size and explain what forms of cross-corpus inquiry computation enables.
- **Practice cross-check:** Tie the claim to the 27,997 PID-backed chunks and the need to move between individual source records and corpus-level patterns.

## Claim 2
- **Claim (plain):** “Dark archive” is an unstable term and should not be used casually.
- **Author claim:** Marciano distinguishes the formal archival meaning of a dark archive—preserved but inaccessible or restricted—from the looser use in the volume to mean collections whose accessibility may be improved through AI.
- **Evidence-supported claim:** Pages 206–207 explicitly quote the Society of American Archivists definition and then note that the book uses “dark archives” more broadly in relation to improved access. [@Marciano2022NewDisciplineComputational, pp. 206–207]
- **Researcher inference:** DDR should avoid metaphorically labelling poorly retrievable or weakly described material “dark” when the actual condition is sparse description, digitisation boundary or retrieval failure.
- **Evidence (quote/paraphrase + page):** Marciano identifies gradations such as “light” and “dim” archives and separates restricted access from AI-enabled discoverability. [@Marciano2022NewDisciplineComputational, p. 207]
- **Warrant (my words):** Precise terminology matters because different forms of inaccessibility imply different evidential and technical remedies.
- **Boundary:** The chapter does not provide a complete taxonomy of archival inaccessibility.
- **Consequence:** The thesis should retain specific terms such as scoped missingness, sparse description and retrieval failure rather than collapsing them into “darkness.”
- **Practice cross-check:** Use the source-status hierarchy to distinguish not-digitised, not-described, not-retrieved and genuinely absent evidence.

## Claim 3
- **Claim (plain):** Datafication and analysis are distinct stages that should remain visible.
- **Author claim:** Marciano describes a two-phase pipeline: datafication through OCR, cleaning/transformation and NLP/NER; then analysis through mapping, dashboards and network modelling.
- **Evidence-supported claim:** Pages 207–208 show the workflow explicitly and say students are asked to “go inside and steer” processes too often treated as black boxes. [@Marciano2022NewDisciplineComputational, pp. 207–208]
- **Researcher inference:** DDR should document preprocessing and modelling as separate transformations rather than presenting semantic outputs as if they emerged directly from archival records.
- **Evidence (quote/paraphrase + page):** The pipeline moves from digitisation and structured text creation to spatial, visual and network analysis. [@Marciano2022NewDisciplineComputational, pp. 207–208]
- **Warrant (my words):** Each stage can change what is represented, omitted or made analytically salient.
- **Boundary:** Marciano’s classroom pipeline is illustrative rather than a validated universal workflow.
- **Consequence:** The computational methods chapter should identify preprocessing, embedding, dimensionality reduction, retrieval and synthesis as discrete steps.
- **Practice cross-check:** Preserve model/version and transformation provenance for bge-m3 embeddings, UMAP, retrieval and Qwen synthesis.

## Claim 4
- **Claim (plain):** AI cannot be separated from the archival and representational conditions of the records it processes.
- **Author claim:** Marciano warns that AI must be contextualised within recordkeeping and uses digitisation examples to show how technical limitations can amplify marginalisation or erasure, especially around race, gender and class.
- **Evidence-supported claim:** Pages 208–209 discuss how digitisation and processing may obscure visual or written features and explicitly state that if marginalised people are erased from historical records, AI/ML cannot simply recover what is not there. [@Marciano2022NewDisciplineComputational, pp. 208–209]
- **Researcher inference:** Computational recovery of DDR marginality is bounded by what was recorded, preserved and digitised; models cannot legitimately “fill” historical absence.
- **Evidence (quote/paraphrase + page):** Marciano frames technical erasure as a problem that begins before inference, in source material and digitisation. [@Marciano2022NewDisciplineComputational, pp. 208–209]
- **Warrant (my words):** Model outputs inherit the evidence surface available to them.
- **Boundary:** The chapter raises the problem through examples rather than providing a systematic bias-evaluation framework.
- **Consequence:** Feminist and missingness analyses must distinguish archival absence from computational invisibility.
- **Practice cross-check:** Maintain nearest-trace and scoped-missingness behaviours instead of speculative completion.

## Claim 5
- **Claim (plain):** CAS depends on a deliberate blend of computational and archival thinking.
- **Author claim:** Marciano defines CAS as a transdisciplinary field and explicitly states that it is “a blend of computational and archival thinking.”
- **Evidence-supported claim:** Pages 212–214 map archival concepts such as provenance, appraisal, recordkeeping and structured access to computational methods including ontology construction, predictive coding, classification, APIs and graph databases. [@Marciano2022NewDisciplineComputational, pp. 212–214]
- **Researcher inference:** DDR’s computational strand should preserve archival concepts as design constraints on technical method.
- **Evidence (quote/paraphrase + page):** The chapter places provenance, appraisal, recordkeeping and access alongside corresponding computational techniques. [@Marciano2022NewDisciplineComputational, pp. 212–214]
- **Warrant (my words):** Computational methods become archivally credible when their outputs remain accountable to archival context and functions.
- **Boundary:** A mapping table does not prove that any specific technical method automatically respects archival principles.
- **Consequence:** The thesis should show where provenance, appraisal boundaries and contextual description are retained inside each computational operation.
- **Practice cross-check:** Treat source PID, metadata, evidence route and synthesis provenance as non-negotiable constraints on retrieval-augmented inference.

## Claim 6
- **Claim (plain):** Computational archival work is infrastructurally collaborative.
- **Author claim:** Marciano argues that skills development and field maturation require interdisciplinary team-building and sustained networks linking archivists, researchers, educators and technologists.
- **Evidence-supported claim:** Pages 209–216 describe computational-thinking training, interdisciplinary student teams, the international CAS network and a practitioner/educator network built around shared case studies. [@Marciano2022NewDisciplineComputational, pp. 209–216]
- **Researcher inference:** The DDR system should be represented as the outcome of distributed archival, historical, design and technical labour rather than as an autonomous AI artifact.
- **Evidence (quote/paraphrase + page):** The chapter repeatedly links CAS development to multidisciplinary collaboration, shared training and cross-institutional networks. [@Marciano2022NewDisciplineComputational, pp. 209–216]
- **Warrant (my words):** Different forms of expertise are required to judge historical relevance, archival context, technical behaviour and interface legibility.
- **Boundary:** Collaboration itself does not guarantee sound method or equal power among participants.
- **Consequence:** Methodological reporting should identify who contributes which forms of expertise and where validation occurs.
- **Practice cross-check:** Keep release receipts, UAT decisions and source-policy decisions attributable rather than treating them as invisible system behaviour.

# Definitions / terms this changes

- **Computational Archival Science (CAS):** a transdisciplinary field combining archival and computational thinking across processing, analysis, preservation and access. [@Marciano2022NewDisciplineComputational, pp. 212–214]
- **Dark archives:** formally, preserved archival material with restricted/no current access; Marciano notes a looser AI-access usage and warns through his discussion that the meanings should not be conflated. [@Marciano2022NewDisciplineComputational, pp. 206–207]
- **Datafication:** the conversion of archival material into machine-processable structured data through digitisation, cleaning/transformation and tagging. [@Marciano2022NewDisciplineComputational, pp. 207–208]
- **Computational thinking + archival thinking:** the paired intellectual basis of CAS. [@Marciano2022NewDisciplineComputational, pp. 209–214]
- **Interdisciplinary team-building:** the organisational capacity to combine archival, computational and domain expertise. [@Marciano2022NewDisciplineComputational, pp. 209–216]

# My response

Marciano is most useful to this thesis when read as a field-building and workflow argument rather than as a celebration of AI. He insists on visible processing stages, archival context, interdisciplinary skill and a mapping between archival concepts and computational techniques. That combination gives S3 a defensible institutional and methodological location while also clarifying a limit: computation can expand access and relational inquiry, but it cannot repair documentary absences that precede it.

# Integration hooks

**Where I will cite it:** CAS field definition; datafication/workflow transparency; provenance-aware computational methods; limitations of AI recovery; interdisciplinary infrastructure.

**Link to my practice evidence:** The DDR pipeline already separates corpus construction, embeddings, UMAP, retrieval and synthesis and can therefore be described as an archival-computational workflow rather than an opaque end-to-end model.

**Workstreams →** CAS framing; interpretability; provenance; retrieval; training; bias/missingness.  
**Deliverables →** Theoretical framework; methods; limitations; UAT rationale.  
**Stakeholders →** Examiners; supervisors; archivists; computational heritage researchers.

# Boundary + risk

**Boundary:** This chapter is a field-building afterword drawing on training and network initiatives; it does not empirically validate the historical accuracy of any specific computational technique.

**Risk if misused:** Its emphasis on scale and capability could encourage the thesis to overstate the need for automation or understate interpretative ambiguity in a historically specific design archive.

# Cross-source / cross-lens synthesis

Marciano extends the CAS field framing supplied by Hedges, Marciano and Goudarouli by making the pipeline and institutional infrastructure concrete. Mordell shows that archives-as-data are constructed through modelling decisions; Drucker cautions against graphical certainty; McInnes et al. provide the technical basis for UMAP; Rockmore et al. show how vector spaces can reveal literary structure; Colavizza et al. survey archival AI opportunities and risks; Jaillant and Aske expose infrastructural and preprocessing barriers; Bender et al. make model-scale harms explicit. For DDR, the combined implication is that computational activation should be built as a visible chain of archival-computational transformations whose sources, assumptions and limits remain inspectable.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 205–216
- **First full note:** Richard Marciano, “Afterword: Towards a New Discipline of Computational Archival Science (CAS),” in *Archives, Access and Artificial Intelligence: Working with Born-Digital and Digitized Archival Collections*, ed. Lise Jaillant (Bielefeld: Bielefeld University Press, 2022), 205–218.
- **Short note form:** Marciano, “Towards a New Discipline of Computational Archival Science,” 205–216.
- **One quote worth lifting:** “computational archival science is a blend of computational and archival thinking” (p. 213).
- **One paraphrase worth keeping:** CAS joins archival principles with explicit computational workflows, training and collaboration so that large-scale archival processing remains connected to provenance, context and access. [@Marciano2022NewDisciplineComputational, pp. 207–216]

# Related works

- Hedges, Marciano, and Goudarouli, “Introduction to the Special Issue on Computational Archival Science.”
- Mordell, “Critical Questions for Archives as (Big) Data.”
- Jaillant and Aske, “Are Users of Digital Archives Ready for the AI Era?”
- Colavizza et al., “Archives and AI.”

# Follow-ups

- **What I will test next:** Map each DDR computational stage to an archival function and identify where a transformation could obscure context, provenance or marginal traces.
