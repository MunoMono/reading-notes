---
title: "Using Linked Data to Create Provenance-Rich Metadata Interlinks: The Design and Evaluation of the NAISC-L Interlinking Framework for Libraries, Archives and Museums"
authors: "McKenna, Lucy; Debruyne, Christophe; O’Sullivan, Declan"
year: 2022
journal: "AI & SOCIETY"
volume: "37"
issue: "3"
pages: "921–947"
citation_key: McKenna2022NAISCLInterlinkingFramework
doi: "10.1007/s00146-021-01373-z"
url: "https://doi.org/10.1007/s00146-021-01373-z"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "19 Mar 2026"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Interpretability, provenance, and retrieval"
source_type: "Bridge text"
last_updated: "19 Mar 2026, 09:18"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.2 Interpretability, provenance, and retrieval  
**Source type:** Bridge text  

**Seams to watch (optional, pick 1):**
- How linked-data interlinking preserves provenance and context across LAM systems

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Why I’m reading this now (1 sentence):** I need a concrete linked-data case that shows how provenance-rich interlinks can be designed, justified, and evaluated by information professionals rather than generated as opaque machine output.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / S3.2 interpretability, provenance, and retrieval; it helps me say that relation-rich archival interlinking can be made more trustworthy when links are created with explicit rationale, provenance metadata, and domain-aware interface support rather than through hidden backend matching alone.  
**Why this term, not alternatives (1–2 lines):** McKenna et al.’s focus on **provenance-rich metadata interlinks** is more useful than generic linked-data rhetoric because it ties linking directly to authority, justification, and auditability in LAM contexts.  
**My benchmark for using it (1–2 criteria I will apply):** I will use this text where I need to justify provenance-rich relation building between archival entities, especially when links connect internal and external datasets and when user-facing retrieval should preserve why and how a relation was made.

# Position + moment (2–4 lines)
McKenna, Debruyne, and O’Sullivan write from semantic web research, user-centred design, and LAM metadata practice at Trinity College Dublin. The paper sits in a very applied problem-space: linked data in libraries, archives, and museums promises discoverability and cross-institutional connection, but actual interlinking remains sparse, often restricted to authority control, and poorly supported by usable tools. Their response is NAISC-L, a domain-specific framework evaluated by information professionals through think-aloud, online, and field tests. `[@McKenna2022NAISCLInterlinkingFramework, pp. 921–924, 934–945]` :contentReference[oaicite:2]{index=2}  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** This text is strongest when used as a workflow and design case, not as a general theory of archival meaning. Its value is that it makes provenance and user judgement explicit inside interlinking, but it is still primarily aimed at metadata enrichment and discoverability rather than contested historiographic interpretation. `[@McKenna2022NAISCLInterlinkingFramework, pp. 922–924, 945]` :contentReference[oaicite:3]{index=3}

# The author’s main move (1 sentence)
They try to design and evaluate a domain-specific linked-data interlinking framework for libraries, archives, and museums by combining user-centred guidance, provenance capture, and graph-based organisation in order to help information professionals create richer and more authoritative interlinks across datasets and institutions. `[@McKenna2022NAISCLInterlinkingFramework, pp. 921–923, 926–929, 944–945]` :contentReference[oaicite:4]{index=4}

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** McKenna et al. argue that LAM linked-data interlinking needs domain-specific support because existing tools are too generic, too identity-link-focused, and too weak on provenance and usability.
- **Evidence (quote/paraphrase + page):** In the review of LAM linked-data services they note that interlinking is limited and often confined to authority control and identity links, with little provenance information provided. In the related-work section they find that most reviewed tools were developed primarily for instance matching, that only SILK and LIMES allow broader user-declared links, and that none of the reviewed tools published interlink provenance or user-testing data for their GUIs. They also summarise survey findings showing that information professionals reported problems with tooling complexity, inadequate LAM fit, insufficient provenance data, and difficulty integrating tools into cataloguing workflows. `[@McKenna2022NAISCLInterlinkingFramework, pp. 922–926]` :contentReference[oaicite:5]{index=5}
- **Warrant (my words):** This matters because the paper does not begin from a generic semantic-web problem. It identifies a LAM-specific gap: interlinking tools often ignore archival and library work practices, provenance requirements, and the need for relation types beyond simple identity matching.
- **So what for my thesis (a reusable sentence):** McKenna et al. help me argue that provenance-rich relation-building for the DDR archive should be designed around archival and user requirements, not imported from generic link-discovery or entity-matching frameworks without adaptation.
- **Practice cross-check:** This aligns strongly with your need to build relation-rich retrieval around actor, project, and concept links in DDR without collapsing everything into owl:sameAs or opaque automated matching. TODO (needs exact S3 relation-model cross-link).

## Claim 2
- **Claim (plain):** The paper’s strongest contribution is a workflow that makes interlink creation both guided and accountable through explicit relationship selection, link-type choice, and provenance capture.
- **Evidence (quote/paraphrase + page):** The NAISC-L process has four cyclical steps: entity selection, link-type selection, provenance data, and RDF graph generation/visualisation. The interlinking guide first asks users to choose a natural-language relationship term such as “is identical to,” “is associated with,” or “is similar to,” then narrows possible link-types accordingly. Provenance data describing by whom, where, when, how, and why an interlink was created are captured through a PROV-based model extended with NaiscProv. The diagram on page 8 visualises this four-step process, and the diagram on page 9 shows the three-graph knowledge organisation: interlink graph, provenance graphs, and relationship graph. `[@McKenna2022NAISCLInterlinkingFramework, pp. 926–931]` :contentReference[oaicite:6]{index=6}
- **Warrant (my words):** This matters because the framework turns linking into an explicit interpretive and documentary act. Rather than silently generating relations, it asks the user to articulate the kind of relation, justify it, and preserve the provenance of the linking decision.
- **So what for my thesis:** McKenna et al. give me a concrete model for designing DDR relation-building so that links between archival traces, people, concepts, and external entities remain source-linked, explainable, and open to later review.
- **Practice cross-check:** This connects directly to Bearman on documenting documentation, to Boyd Davis/Vane/Kräutli on interrogability, and to your need for provenance-aware graph or linked-data structures in S3. TODO (needs exact provenance/retrieval cross-link).

## Claim 3
- **Claim (plain):** Their evaluation shows that information professionals can create high-accuracy provenance-rich interlinks with acceptable usability, especially when guided by the interlinking framework.
- **Evidence (quote/paraphrase + page):** In Usability Test 1, participants were on average 95.55% successful in completing the six interlinks and 91.12% successful in selecting a semantically accurate link-type, with overall PSSUQ scores below the neutral threshold. In Usability Test 2, groups using the interlinking guide had significantly higher semantic accuracy than groups without it, and better InfoQual and Overall usability scores. In the field test at the Irish Traditional Music Archive, participants created 34 interlinks with 100% accuracy and sufficient CSUQ usability, while interviews highlighted the perceived usefulness of provenance and authoritative linking. `[@McKenna2022NAISCLInterlinkingFramework, pp. 934–945]` :contentReference[oaicite:7]{index=7}
- **Warrant (my words):** This is important because the paper does not only propose a model; it shows that provenance-rich interlinking can be made practically usable for domain professionals, and that guided relation selection improves quality.
- **So what for my thesis:** McKenna et al. support a method position in which relation-building for the DDR archive remains human-guided, provenance-rich, and domain-aware rather than relying solely on automated link generation.
- **Practice cross-check:** This is highly relevant if your S3 work includes expert-curated relations or manually reviewed interlinks across the DDR archive and external knowledge structures. TODO (needs exact evaluation/workflow cross-link).

# Definitions / terms this changes (only the ones that matter)
- **Provenance-rich metadata interlinks:** interlinks accompanied by explicit metadata on who created them, when, how, why, and in what session or context; I will use this as a strong benchmark for trustworthy relation-building in S3. `[@McKenna2022NAISCLInterlinkingFramework, pp. 922–923, 929–930]` :contentReference[oaicite:8]{index=8}
- **Interlinking guide:** the domain-aware step in NAISC-L that helps users move from a natural-language relation to an appropriate RDF link-type; I will use this as a design principle for human-guided relation selection. `[@McKenna2022NAISCLInterlinkingFramework, pp. 927–928]` :contentReference[oaicite:9]{index=9}
- **Relationship links vs identity links:** the paper distinguishes strict identity links from broader relationship links that provide context and background knowledge; I will use this distinction to avoid flattening DDR relations into same-as assertions. `[@McKenna2022NAISCLInterlinkingFramework, pp. 922–923]` :contentReference[oaicite:10]{index=10}
- **NAISC-L knowledge organisation:** the three-graph arrangement of interlink graph, provenance graph, and relationship graph; I will use this as a useful model for separating links from their provenance while preserving queryability. `[@McKenna2022NAISCLInterlinkingFramework, pp. 928–929]` :contentReference[oaicite:11]{index=11}
- **Analytic / interlink provenance:** provenance describing not just data origin but the rationale and process of link creation; I will use this as a core criterion for provenance-aware retrieval and graph building. `[@McKenna2022NAISCLInterlinkingFramework, pp. 923, 929–930]` :contentReference[oaicite:12]{index=12}

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It gives me one of the most concrete provenance-aware linked-data workflows in the LAM domain.
  - It is especially useful because it treats relation-building as a documented human decision, not just as a backend matching task.
  - It offers a strong bridge between linked data, provenance, usability, and archival retrieval design.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I will use this paper to justify human-guided, provenance-rich relation-building in the DDR computational strand rather than defaulting to opaque automatic linking.
  - I will treat links in S3 as interpretive access aids whose rationale should remain inspectable and revisable.
- **What question it raises next (1–2 bullets):**
  - Which DDR relations are best handled as strict identity links, and which need richer relationship links with explicit justification?
  - How much of the McKenna workflow can be adapted to a research archive setting without creating too much manual labour for the scale of the project?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the S3.2 methods section where I describe provenance-rich relation building, interlink justification, and source-traceable graph structures for retrieval and interpretation.
- **Where I will name the title in running text (first-use rule):** First mention in the linked-data/provenance section: *In “Using Linked Data to Create Provenance-Rich Metadata Interlinks” (2022), McKenna, Debruyne, and O’Sullivan argue...*
- **Link to my practice evidence (one concrete cross-reference):** Use alongside any DDR actor/project/concept relation model or graph workflow where links are created or reviewed by you and need explicit rationale and provenance. TODO (needs exact cross-reference).
- **Workstreams →** Provenance; retrieval; linked data; graph structures; computational activation.
- **Deliverables →** S3.2 paragraph on provenance-rich interlinking; methods note on relation types and justification; literature map node; footnote trail on linked-data provenance.
- **Stakeholders →** Examiners; supervisors; archival studies readers; digital humanities readers; linked-data / GLAM readers.

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This article is strongest as a domain-specific design-and-evaluation case for provenance-rich linked-data interlinking, but it is less useful for the broader historiographic and political interpretation of contested archival knowledge.
- **Risk if misused (1 sentence):** If I use it too literally, I could overcommit the DDR project to labour-intensive manual interlinking and underplay where lighter, more exploratory, or partially automated methods may be sufficient.

# Methods spine tags (tick what it actually touches)
- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 921–923, 926–931, 934–945
- **First full note (write it out here):**  
  Lucy McKenna, Christophe Debruyne, and Declan O’Sullivan, “Using Linked Data to Create Provenance-Rich Metadata Interlinks: The Design and Evaluation of the NAISC-L Interlinking Framework for Libraries, Archives and Museums,” *AI & SOCIETY* 37, no. 3 (2022): 921–947.
- **Short note form:**  
  McKenna, Debruyne, and O’Sullivan, “Using Linked Data to Create Provenance-Rich Metadata Interlinks,” 926–931.
- **One quote worth lifting (≤2 lines):** “NAISC-L supports the linking of related resource across datasets and institutions, thereby enabling richer and more varied search queries” (p. 921).
- **One paraphrase worth keeping:** McKenna, Debruyne, and O’Sullivan argue that linked-data interlinking in LAMs becomes more trustworthy and useful when information professionals create relation-rich links through a guided workflow that also records the provenance and justification of those linking decisions. (pp. 921–923, 926–931, 944–945)

# Related works (only if it directly connects)
- Davis and Heravi, “Linked Data and Cultural Heritage”
- Bearman, “Documenting Documentation”
- Colavizza et al., “Archives and AI”
- Mordell, “Critical Questions for Archives As (Big) Data”
- TODO: connect directly to your DDR relation-model, graph workflow, and provenance note.

# Follow-ups (next actions, not vibes)
- What I will read next: A provenance-aware retrieval or graph-explanation text that gets closer to how linked relations are presented back to users once created.
- What I will test or write next: Draft the S3.2 paragraph that distinguishes identity links from richer relationship links in your DDR workflow, then specify what provenance and justification you will actually preserve for each.