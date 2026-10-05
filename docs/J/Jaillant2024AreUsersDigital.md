---
title: "Are users of digital archives ready for the AI era? Obstacles to the application of computational research methods and new opportunities"
authors: "Jaillant, Lise; Aske, Katherine"
year: 2024
journal: "Journal on Computing and Cultural Heritage"
volume: "16"
issue: "4"
pages: "Article 87, 1-16"
citation_key: Jaillant2024AreUsersDigital
doi: "10.1145/3631125"
url: "https://doi.org/10.1145/3631125"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
last_updated: "05 Oct 2026, 11:07"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
theoretical_framework_area_id: "2"
theoretical_framework_area: "Critical archival theory"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 2. Critical archival theory / c) Contemporary bridge literature"
source_type: "Core text"
project_tags:
  - "Theoretical framework"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 2. Critical archival theory  
**Literature cluster:** c) Contemporary bridge literature  
**Zotero filing path:** Theoretical framework / 2. Critical archival theory / c) Contemporary bridge literature  
**Source type:** Core text

# Constraints (anti-bloat / anti-hallucination)
- No page cite → TODO (needs page / verification)
- At least 6 critical claims
- Claim → Evidence → Warrant → Boundary → Consequence
- Separate author claim, evidence-supported claim and researcher inference
- Practice cross-check or TODO for each claim
- Final synthesis required

# Thesis job

**How this source moves the primary research question forward:** Jaillant and Aske show that archive activation in the AI era is constrained by access, data quality, infrastructure, skills and research culture before model choice even begins.

**How this source bears on the secondary question:** Revisiting DDR computationally requires making the digital evidence surface usable and transparent, otherwise contemporary methods may amplify archival and technical distortions rather than illuminate older design knowledge.

**Why I’m reading this now:** It connects critical archival theory to the practical conditions under which computational archive research is actually possible.

**Where it sits in my argument:** Contemporary bridge literature. It is the user/infrastructure counterpart to Jaillant and Rees's trust/ethics argument.

**My benchmark for using it:** I will use the paper to identify concrete readiness conditions and workflow controls, not to claim that AI is necessary for all archival research.

# Position + moment

Jaillant and Aske write from digital archives, digital humanities and computational cultural heritage, using survey and interview research with archivists, librarians, historians, literary scholars, digital humanists and computer scientists. Their question is deliberately practical: what prevents users from applying computational methods to digital archives, and what conditions would improve that situation? [@Jaillant2024AreUsersDigital, pp. 1–3]

# The author’s main move

They argue that AI-era archival research depends less on technological novelty than on access, usable data, transparent preprocessing, skills, collaboration and durable infrastructure, and that these conditions are currently uneven. [@Jaillant2024AreUsersDigital, pp. 1–14]

# Six-claim evidence ledger

## Claim 1
- **Claim (plain):** Access is the first condition of computational archival research.
- **Author claim:** Jaillant and Aske explicitly say “the first problem to solve is the issue of access.”
- **Evidence-supported claim:** Their survey reports limited availability of digital records as the highest-ranked obstacle (86%), alongside discoverability and online/data access barriers. [@Jaillant2024AreUsersDigital, pp. 2–5]
- **Researcher inference:** DDR computational analysis is bounded first by which records are digitised, exportable and legally/repository-accessible.
- **Evidence (quote/paraphrase + page):** The authors state that limited access makes it difficult even to scale training in computational methods. [@Jaillant2024AreUsersDigital, pp. 2–5]
- **Warrant (my words):** Methodological possibility depends on the evidence surface being available in usable form.
- **Boundary:** Access alone does not make a collection methodologically ready.
- **Consequence:** The thesis must define the exact PID-backed corpus and its exclusions.
- **Practice cross-check:** Non-PID text stays outside vector scope; repository source boundaries remain visible.

## Claim 2
- **Claim (plain):** Digital archives require substantial hidden labour before computation.
- **Author claim:** The authors stress that digitised and born-digital data are rarely ready for direct analysis.
- **Evidence-supported claim:** Interviewees describe OCR cleaning, format conversion, metadata repair and preprocessing; the article also discusses incomplete digitisation and skewed digital representation. [@Jaillant2024AreUsersDigital, pp. 3–4, 7–9]
- **Researcher inference:** DDR cleaning, chunking, authority mapping and metadata normalisation are interpretative methodological steps, not invisible engineering.
- **Evidence (quote/paraphrase + page):** Interviewees say data “always needs to be worked out” and is not automatically usable after digitisation. [@Jaillant2024AreUsersDigital, pp. 3–4]
- **Warrant (my words):** Computational inputs already embody choices and transformations before any model runs.
- **Boundary:** Preprocessing can improve consistency without necessarily introducing unacceptable distortion.
- **Consequence:** Transformations should be documented and reproducible.
- **Practice cross-check:** Keep release receipts, source counts, excluded records and pipeline versions.

## Claim 3
- **Claim (plain):** AI/computational readiness is uneven across archive users and disciplines.
- **Author claim:** Jaillant and Aske show that computational methods are far from routine among many humanities/archive users.
- **Evidence-supported claim:** Survey/interview findings describe uneven confidence, skills and practical uptake despite high awareness of digital methods. [@Jaillant2024AreUsersDigital, pp. 4–8]
- **Researcher inference:** DDR outputs should remain usable by historians/design researchers who are not machine-learning specialists.
- **Evidence (quote/paraphrase + page):** The authors repeatedly distinguish theoretical interest in computational methods from users' ability to deploy them on real archive data. [@Jaillant2024AreUsersDigital, pp. 4–8]
- **Warrant (my words):** A research interface fails archivally if its evidential logic is intelligible only to technical experts.
- **Boundary:** The study population does not represent every archival user.
- **Consequence:** Interface and thesis explanations should privilege inspectability over technical spectacle.
- **Practice cross-check:** Evidence cards, named sources and plain-language boundaries accompany computational views.

## Claim 4
- **Claim (plain):** The solo-researcher model is structurally poorly suited to advanced computational archive work.
- **Author claim:** The article argues for embedded training and recognises that one humanities researcher cannot reasonably master archival, domain and technical expertise alone.
- **Evidence-supported claim:** Pages 10–13 discuss postgraduate training, advanced support and the limitations of the solo-researcher norm.
- **Researcher inference:** The DDR computational strand is strongest when domain knowledge, archival method and technical design are treated as distinct forms of expertise that must be integrated.
- **Evidence (quote/paraphrase + page):** Jaillant and Aske recommend training plus collaborative models rather than expecting individuals to acquire every skill. [@Jaillant2024AreUsersDigital, pp. 10–13]
- **Warrant (my words):** Complex archival computation combines methods whose quality controls come from different disciplines.
- **Boundary:** Collaboration can also create coordination and reproducibility challenges.
- **Consequence:** Roles, assumptions and technical dependencies should be documented.
- **Practice cross-check:** Keep steering documents, frozen scope and UAT criteria explicit so expertise is coordinated around one evidence model.

## Claim 5
- **Claim (plain):** Institutional infrastructure and collaboration are part of methodological validity.
- **Author claim:** Jaillant and Aske recommend cross-disciplinary collaboration, funding and infrastructures tailored to archival research.
- **Evidence-supported claim:** Pages 10–14 connect sustainable computational use to support systems rather than short-lived tool experiments.
- **Researcher inference:** DDR computational research should be evaluated as a workflow/ecosystem, not only by model output quality.
- **Evidence (quote/paraphrase + page):** The article calls for infrastructure that makes archives accessible and usable and for collaboration to be recognised and supported. [@Jaillant2024AreUsersDigital, pp. 10–14]
- **Warrant (my words):** Reproducible archival computation depends on stable data access, tools, expertise and documentation.
- **Boundary:** A PhD prototype cannot solve sector-wide infrastructure deficits.
- **Consequence:** Claims should remain bounded to the implemented corpus and workflow.
- **Practice cross-check:** Frozen scope, canonical corpus and reproducible release process define the research environment.

## Claim 6
- **Claim (plain):** Transparency and reproducibility require documenting searches, tools and transformations.
- **Author claim:** The authors emphasise recording tools, versions, keywords and workflows so research can be checked and replayed.
- **Evidence-supported claim:** Pages 8–9 and recommendations link methodological transparency to trustworthy computational archival research.
- **Researcher inference:** DDR retrieval results should be reproducible enough to identify why a source appeared and which model/pipeline generated a synthesis.
- **Evidence (quote/paraphrase + page):** Jaillant and Aske call for explicit documentation of computational research processes rather than treating software operations as black boxes. [@Jaillant2024AreUsersDigital, pp. 8–9]
- **Warrant (my words):** Without workflow transparency, computational claims cannot be adequately scrutinised.
- **Boundary:** Exact deterministic replay may be difficult with some generative systems.
- **Consequence:** Versioning, provenance and source bindings become necessary even where generation is probabilistic.
- **Practice cross-check:** Store model/version, retrieval settings, evidence cards and provenance bindings for UAT outputs.

# Definitions / terms this changes

- **AI-era readiness:** the combined condition of access, usable data, skills, collaboration, infrastructure and transparent workflow required for computational archival research. [@Jaillant2024AreUsersDigital, pp. 1–14]
- **Solo researcher model:** expectation that one scholar independently supplies all domain, archival and technical expertise. [@Jaillant2024AreUsersDigital, pp. 10–13]
- **Transparency / reproducibility:** documentation of tools, versions, searches and transformations sufficient for methodological scrutiny. [@Jaillant2024AreUsersDigital, pp. 8–9]
- **Datafying archives:** transforming archival materials into structured computational inputs, with attendant labour and representational choices. [@Jaillant2024AreUsersDigital, pp. 13–14]

# My response

Jaillant and Aske are useful because they make computational archive work look like what it actually is: a socio-technical workflow with upstream dependencies, hidden labour and institutional constraints. For DDR, this validates a research design in which preprocessing, corpus definition and provenance are part of the method rather than background preparation. It also reinforces a key design objective: the system should make archival computation inspectable to non-specialist researchers rather than requiring faith in technical expertise.

# Integration hooks

**Where I will cite it:** Corpus readiness; preprocessing; reproducibility; collaboration; interface usability.

**Link to my practice evidence:** The PID-backed corpus, release receipts, model/version controls and UAT workflow directly instantiate the paper's readiness conditions.

**Workstreams →** Critical archival theory; computational methods; provenance; UAT.  
**Deliverables →** Theoretical framework; research design; limitations.

# Boundary + risk

**Boundary:** The article studies broad digital-archive user communities rather than this specific DDR corpus.

**Risk if misused:** “AI readiness” could become a generic checklist that distracts from the historical questions the computational system is meant to serve.

# Cross-source / cross-lens synthesis

Jaillant and Aske complement Jaillant and Rees: the 2023 paper foregrounds trust and shared ethics, while the 2024 paper foregrounds access, labour, training and infrastructure. Bowker and Star help explain why preprocessing and metadata are classificatory work rather than neutral preparation. Together these sources make the DDR computational strand an archival workflow whose validity depends on transparent evidence transformation as much as on retrieval performance.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 1–5, 8–14
- **First full note:** Lise Jaillant and Katherine Aske, “Are Users of Digital Archives Ready for the AI Era? Obstacles to the Application of Computational Research Methods and New Opportunities,” *Journal on Computing and Cultural Heritage* 16, no. 4 (2024): Article 87, 1–16, https://doi.org/10.1145/3631125.
- **Short note form:** Jaillant and Aske, “Are Users of Digital Archives Ready for the AI Era?,” 2–5.
- **One quote worth lifting:** “the first problem to solve is the issue of access to these collections.” (p. 2)
- **One paraphrase worth keeping:** Jaillant and Aske argue that meaningful AI-era archival research depends on access, preprocessing, transparent workflows, training, collaboration and infrastructure rather than digitisation or tool availability alone. [@Jaillant2024AreUsersDigital, pp. 1–14]

# Related works

- Jaillant and Rees, “Applying AI to Digital Archives.”
- Bowker and Star, *Sorting Things Out*.
- Moss, Thomas, and Gollins, “The Reconfiguration of the Archive as Data to Be Mined.”

# Follow-ups

- **What I will test next:** Audit the DDR pipeline against the six readiness conditions and document any remaining weakness as a method limitation.
