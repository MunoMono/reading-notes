---
title: "Introduction: Into the Data"
authors: "Mackenzie, Adrian"
year: 2017
book_title: "Machine Learners: Archaeology of a Data Practice"
chapter: "1"
pages: "1–19"
publisher: "The MIT Press"
citation_key: Mackenzie2017MachineLearnersArchaeology
citation_key_scope: "Existing Zotero book record; change to chapter-specific key when the Book Section export is available"
doi: ""
url: "https://doi.org/10.7551/mitpress/10302.001.0001"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "12 Oct 2026"
last_updated: "14 Oct 2026, 10:06"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "a"
literature_cluster: "Canon + intellectual lineage"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / a) Canon + intellectual lineage"
source_type: "Core text"
project_tags:
  - "Theoretical framework"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 3. Critical computational approaches  
**Literature cluster:** a) Canon + intellectual lineage  
**Zotero filing path:** Theoretical framework / 3. Critical computational approaches / a) Canon + intellectual lineage  
**Project/output tag:** Theoretical framework  
**Source:** Chapter 1, printed pp. 1–19. Read from the user's OCR scan, checked against the original printed pagination.

# Thesis job

**How this source moves the primary question forward:** Mackenzie makes machine learning's *operations* objects of critical investigation. This gives me a basis for examining how the DDR research instrument transforms documentary traces into computational representations, classifications, retrieval results and interpretative possibilities, rather than treating its technical layers as transparent means of access.

**Secondary-question relevance:** It offers a way to question how contemporary computational categories might organise the inherited record of DDR-era design knowledge. The chapter does not itself evaluate historical design theories or say which DDR ideas should be revisited; that must be established from the archive and design-historical literature.

**Why I am reading this now:** My practice spans an archive, a PID-backed document corpus, embedding-based representations, UMAP projections, retrieval-augmented inquiry and a designed interface. I need a defensible account of what critical practice means *inside* such a technical apparatus.

**My benchmark:** (1) A concept from Mackenzie must enable a concrete examination of a computational operation or design decision, documented with its inputs, outputs and limitations. (2) A computationally inferred difference or similarity must remain distinguishable from a historical assertion supported by source evidence.

# Position and context

This is a methodological opening, not an empirical evaluation of a contemporary archival system. Mackenzie begins with the spread of machine learning into science, commerce, government and everyday infrastructures, then asks whether changes in knowledge production might change critical thought itself (pp. 1–2). Rather than presenting machine learning as a single autonomous technology, he identifies three intersecting accumulations—**settings, data and devices**—and proposes an **archaeology of operations** informed by Foucault, science and technology studies, and experiments in learning to work with code and models (pp. 2–6, 9, 17–19). The book's six operations, announced near the end of this chapter, are **vectorization, optimization, probabilization, pattern recognition, regularization and propagation** (p. 18). This introductory chapter identifies the inquiry; the later chapters are needed to test the adequacy of those six descriptions in technical depth.

# The author's main move

Mackenzie asks what becomes possible when critical thought does not merely condemn or celebrate machine learning from the outside but studies the heterogeneous techniques by which its human–machine practices make some differences calculable, repeat categories and organise knowledge. His answer is provisional and experimental: diagrams and immersion in technical practices might disclose where knowledge and power take operational form and where alternative arrangements are conceivable (pp. 9–10, 13–14, 17–19). He specifically resists treating either 'the algorithm' or 'automation' as an adequate explanation for everything machine learning does (pp. 7–9).

# Nine-claim critical evidence ledger

## Claim 1 — Machine learning is assembled, not a singular historical rupture

**Author claim:** Machine learning accumulates through multiple settings, volumes of data and proliferating techniques, some with much older mathematical histories. **Evidence:** The three accumulations are announced on p. 2, developed through search trends, image data and technique lists on pp. 2–5, and culminate in the observation that machine learning is an accumulation rather than a radical transformation (p. 5). **Warrant:** Its operational diversity is obscured when 'AI' is used as a single historical agent. **My inference:** I should describe the DDR instrument as a set of historically and technically distinct components—cataloguing, scanning, metadata construction, chunking, embeddings, retrieval, inference and interface design—rather than as one unqualified machine-learning intervention. **Boundary:** The 2004–2016 Google Trends chart in figure 1.1 (pp. 2–3) provides indirect evidence of changing public search interest, not a count of actual deployments. **Consequence:** The thesis needs a transformation-by-transformation account of the assembled research instrument. **Practice cross-check:** Use the research-instrument architecture and corpus/versioning records to identify the components and their independent decisions; **TODO (add exact practice-note or release IDs)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 2–5]

## Claim 2 — Visual regularity is made through choices that can conceal variation

**Author claim:** Even a supposedly raw trend line is already mediated; visual smoothing produces a legible tendency by replacing irregular observations with a modelled curve. **Evidence:** In figure 1.1 and its extended footnote, Mackenzie points out that Google Trends data have been normalised and that the plotted smooth curves are produced by local regression, making fluctuations easier to see while imposing regularity (p. 3, note 2). **Warrant:** An intelligible visual pattern is partly a property of how data have been represented and transformed, so the plot cannot be treated as an unaltered view of its source. **My inference:** The DDR UMAP atlas should disclose that positions and clusters are model-dependent projections of text embeddings, and that visual proximity is a proposal for investigation, not evidence of a historical connection. **Boundary:** This particular example demonstrates normalisation and smoothing in a time-series chart; it is *not* an evaluation of UMAP, embeddings or graph layouts. **Consequence:** I will evaluate whether captions, legend language and drill-down paths make the representation's mediations intelligible. **Practice cross-check:** Inspect the DDR atlas representation against the underlying PID-backed source links and model/projection settings; **TODO (record screenshot, model version and comparative test)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 2–3]

## Claim 3 — Recognition depends on constructed features and training examples

**Author claim:** Classification acts on prepared representations, not on an object in its unmediated fullness. **Evidence:** The 'kittydar' example converts image windows into histograms of oriented gradients, then uses a trained model to issue a probabilistic cat/not-cat classification (pp. 4–5; figure 1.2, p. 4). Mackenzie notes that this small classifier misses some cats and sometimes mistakes people for cats (p. 5). **Warrant:** The detection task, windowing, feature representation, training examples and classifier jointly determine what the machine can recognise. **My inference:** In DDR, OCR quality, record inclusion, text chunk boundaries, metadata, embedding choice and query formulation each affect what can enter an apparent semantic neighbourhood or a retrieval answer. **Boundary:** Kittydar is a simple image-recognition demonstration, not proof of the behaviour or failure rates of text embeddings or retrieval-augmented inference. **Consequence:** The thesis should specify which representational choices precede each claimed computational finding and test selected counter-examples. **Practice cross-check:** Use the bounded PID-backed corpus policy and UAT retrieval/failure cases, with source verification; **TODO (attach specific example contrasting a direct source read with retrieved output)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 4–5]

## Claim 4 — 'Machine learner' names a human–machine ensemble and a possible operational formation

**Author claim:** Mackenzie explicitly uses 'machine learner' for humans, machines and their relations; he borrows Foucault's term **positivity** to ask whether machine-learning practices constitute a discernible formation of knowing (p. 6). **Evidence:** The discussion links datasets, infrastructures, platforms and interfaces to forms of practice, while the historical comparison asks whether older specialised techniques have become a more general operational mode (p. 6). **Warrant:** The relevant unit of analysis is neither just source code nor an abstract technological force: human decisions, tools, institutions and mathematical operations are entangled. **My inference:** My own position as innovation designer, researcher, coder and archival investigator belongs inside the account of how the DDR instrument produces its representations. **Boundary:** *Positivity* here is a specific Foucauldian term for an arrangement of statements and operations; it should not be casually equated with philosophical **positivism** or with a claim that computation is objectively true. Mackenzie frames a question about a new formation rather than demonstrating its full extent in this introduction. **Consequence:** I should include reflexive design-decision evidence and make visible where research judgement enters the pipeline. **Practice cross-check:** The practice book's design decisions, release notes and researcher interpretation logs are the relevant evidence; **TODO (add specific entries)**. [@Mackenzie2017MachineLearnersArchaeology, p. 6]

## Claim 5 — 'Automation' and 'the algorithm' are insufficient explanations

**Author claim:** Learning can substitute for prior ways of acting, but calling the result automation may conceal how probabilistic models and classifications reconfigure what counts as calculable. Mackenzie also questions accounts that grant almost singular agency to 'the algorithm' or to abstraction itself. **Evidence:** He discusses the 'control revolution', probabilistic model-making and the inadequacy of generic abstraction arguments on pp. 7–9, then proposes attention to particular operations in the section 'The archaeology of operations' (p. 9). **Warrant:** Describing an answer as 'AI-generated' explains little about how input was selected, a model applied, categories generated or an output authorised. **My inference:** I need to distinguish retrieval, vector similarity, language-model synthesis and researcher corroboration as different actions with different evidential status. **Boundary:** Mackenzie is not denying consequential automation or control; his objection is to using those abstractions in place of investigating the specific mechanisms. Nor does he demonstrate the correctness of any particular provenance-control design. **Consequence:** The claim–evidence protocol should identify which technical step supports each assertion and which steps merely suggest a question. **Practice cross-check:** Compare the DDR RAI answer cards and claim-evidence checks with the source documents; **TODO (cite a versioned UAT example and its disposition)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 7–9]

## Claim 6 — Classification has epistemic and potentially political consequences

**Author claim:** Machine learning can intensify existing categorical divisions and construct new differences; categories organise a field of action rather than simply naming the world. **Evidence:** Mackenzie discusses classifiers, established social categories, newly produced distinctions and an example of differential airline pricing on pp. 9–10. The relevant chapter claim is carefully phrased: these differentiations *may or may not* bring social good (p. 10). **Warrant:** A classificatory regime affects what appears alike, different, relevant or exceptional, with potential downstream consequences. **My inference:** Archival catalogue categories, controlled metadata, embedding-based neighbourhoods and generated labels are not identical forms of classification, but examining their interactions could expose differential visibility of DDR people, practices and roles. **Boundary:** The chapter gives no empirical evidence of gendered omission or disputed attribution within DDR. Such claims require documents, cataloguing records or testimony, not computational proximity alone. **Consequence:** Compare cases where named participation is strongly documented, weakly described or not retrieved, and separate documentary absence from machine non-retrieval. **Practice cross-check:** Use selected DDR staff/project cases and the scoped-missingness UAT, with exact record IDs and results still to be attached: **TODO (add cross-case evidence)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 9–10]

## Claim 7 — Digital-humanities practice cannot outsource interpretation to attractive outputs

**Author claim:** Mackenzie stages a genuine dilemma for computational humanities: researchers may gain access to large textual patterns while bypassing the modelling operations that produced them; meanwhile critics worry that borrowing those methods reproduces prevailing infrastructures and interests. **Evidence:** On pp. 11–12, he juxtaposes Matthew Jockers's willingness to foreground the beauty of topic-model results with Alex Galloway's criticism of humanities' infrastructural asymmetry and use of quantitative techniques. On p. 13 Mackenzie refuses to accept either position as exhausting machine learning's possibilities. **Warrant:** Neither attractive visual results nor broad denunciation settles the epistemic status of a computational claim. **My inference:** My thesis must explain enough of embeddings, UMAP and retrieval-augmented inference to say precisely what their outputs warrant, then submit those outputs to historical reading. **Boundary:** Mackenzie's immediate example is topic modelling, not modern retrieval-augmented generation. I cannot attribute an evaluation of Qwen or bge-m3 to his 2017 text. **Consequence:** Assessment of the research instrument should combine technical inspection, source-linked tests and interpretative critique rather than only visual plausibility or user satisfaction. **Practice cross-check:** Compare UMAP neighbourhood examples and retrieval UAT outputs with human source checks; **TODO (link the relevant test packet)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 11–13]

## Claim 8 — Critical repurposing is possible, but it is a situated, limited achievement

**Author claim:** Repurposing machine-learning techniques can expose how classificatory practices operate without escaping their material and institutional constraints. **Evidence:** Mackenzie describes ProPublica's 'Message Machine' reconstruction of political microtargeting and an investigation of Netflix microgenres, noting that the former's technical resources were far smaller than those of its object of study (p. 14). He argues that such cases open possibilities for understanding and intervening in subject formation (pp. 14–15). Figure 1.3 then shows distinct trajectories for scientific machine-learning techniques, supporting his insistence on diversity rather than a single unified trend (pp. 16–17). **Warrant:** Technical practice can itself become a critical method, but its insights are conditional on scope, scale, access and the phenomena examined. **My inference:** The DDR instrument may produce knowledge *about its own conditions of interpretation* by exposing how retrieval, categories and projections behave on chosen archival cases. **Boundary:** These journalistic examples do not validate my instrument, and figure 1.3 uses normalised publication distributions rather than direct counts of deployed systems. **Consequence:** Treat discrepancy, failure and uncertainty as examinable research results; do not market the instrument as a device for definitive historical recovery. **Practice cross-check:** Use bounded missingness and cross-document UAT, including rejected synthetic claims and source-level review; **TODO (attach exact test records)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 13–17]

## Claim 9 — Diagrams and immersion offer a situated research practice, not a guarantee of insight

**Author claim:** Diagrams practically abstract relations among techniques, hardware, infrastructures, models and human positions; learning to operate within machine-learning practice can allow a different kind of critical enquiry. **Evidence:** On pp. 17–19 Mackenzie explicitly proposes diagramming data practices, studying the roles occupied by programmers and modellers, and drawing together code, plots, mathematics, tutorials and critical theory. He names his six organising operations on p. 18. The closing paragraph (p. 19) describes an intentionally risky, limited immersion in technical practice. **Warrant:** Making a system and diagramming its operations can reveal transformations that an output-only critique might miss, without granting the maker privileged or complete knowledge. **My inference:** The most productive analogy to my PhD is methodological: innovation design can create instruments with which to investigate what archival computation makes legible, ambiguous or invisible. **Boundary:** Mackenzie's diagrams concern machine-learning operations, not a general theory of graphic design; nor does this passage, on its own, establish that a designed interface constitutes original research. **Consequence:** I should demonstrate where specific acts of design and implementation changed my questions, methods or interpretation of a DDR trace. **Practice cross-check:** Compare dated design iterations, interface captures and research-journal entries with a documented changed interpretation; **TODO (select and cite two such iterations)**. [@Mackenzie2017MachineLearnersArchaeology, pp. 17–19]

# Terms and definitions I can use

- **Machine learner (Mackenzie's usage):** A human, a machine, or the situated relation between them participating in machine-learning practice (p. 6). **My use:** The DDR researcher, technical systems, corpus and interfaces considered together as a situated inquiry, not the embedding model treated in isolation.
- **Three accumulations:** Settings, data and devices across which machine-learning practice spreads (pp. 2–5). **My use:** A check against describing the instrument as one undifferentiated 'AI' system.
- **Positivity / operational formation:** Mackenzie's Foucauldian investigation of recurring statements and practices that make a way of knowing possible (p. 6). **My use:** A question about what the DDR computational apparatus is configured to render knowable. **Warning:** This is *not* interchangeable with positivism.
- **Archaeology of operations:** Close investigation of specific calculative and classificatory mechanisms where knowledge and power meet (pp. 9–10). **My use:** Source-to-output tracing that makes the work of the model inspectable.
- **Diagram:** A practical abstraction that arranges heterogeneous relations among human and technical operations (pp. 17–18). **My use:** A critical representation of the designed research instrument's transformations and their evidence consequences, not a claim that UMAP's two-dimensional layout is a historical map.
- **Six operations:** Vectorization, optimization, probabilization, pattern recognition, regularization and propagation (p. 18). These are the book's analytic organising terms; detailed definitions require the corresponding chapters. **TODO (verify each operation against Chapters 2–8 before adopting it as a definition).**

# My response and assessment

The chapter's strength is its *scale of analytical attention*. Its claims remain connected to low-level transformations—smoothing data, selecting features, producing a probabilistic classification—while being open to questions of institutional practice and power. It is particularly important that Mackenzie does not simply assert that 'algorithms are political'; he asks *which operations, within which assemblages, under which conditions*, create differences that matter (pp. 9–10, 17–19). That makes his intervention more serviceable for a practice-led thesis than an undifferentiated claim about the dangers of AI.

There are also clear limits. As an introduction, the chapter proposes more than it demonstrates. Google Trends is an imperfect indicator of uptake (pp. 2–3); kittydar is deliberately small and fallible (pp. 4–5); the counter-practices from journalism are unusual and constrained (p. 14); figure 1.3 visualises a normalised bibliographic sample, not the complete history of machine-learning practice (pp. 16–17). These examples justify a research disposition, not a complete account of how present-day language models or archival RAI work. **My critical reservation:** I should avoid converting Mackenzie's six operations into a mandatory checklist for DDR without testing whether each names a meaningful and observable stage of this particular instrument.

**Reusable thesis sentence:** *I examine the DDR research instrument not as a neutral conduit to historical evidence but as an assemblage of documentary, classificatory and computational operations whose transformations and limits must themselves become available for critical inquiry.*

# Integration hooks and a practical test

**Where to cite:** Thesis introduction (critical computational lens); chapter on designing the research instrument (data and interface decisions as epistemic practice); computational activation chapter (the distinction between model-produced pattern and historical evidence); close analysis and wider discussion (classification, authority, interpretative limits).

**Testable proposition for my practice:** For one DDR question about a named relationship, document the source record and catalogue description, what entered the PID-backed corpus, the retrieved passages, any embedding/UMAP neighbourhood, the generated synthesis and the researcher's verdict. Ask at every transformation: what is preserved, changed, excluded, made salient or made uncertain? The resulting account should be compared with direct historical reading of the same material. **TODO (select the DDR case and attach its evidence packet and test outcome).**

**Cross-lens relation:** The critical computational lens gains an operational vocabulary here. Critical archival theory must separately establish how records and description bear authority; critical design historiography must establish the underlying historical relations; feminist and situated accounts can challenge whose labour and knowledge become visible. Mackenzie does not perform those tasks for DDR.

# Boundary and risk

**Boundary:** The source is an opening theoretical and methodological programme from 2017, not an implementation guide for retrieval-augmented inference, evidence provenance or UMAP.

**Risk of misuse:** Using 'positivity', 'diagram' or 'operational formation' as grand explanatory labels without any inspected DDR transformation would reproduce the very abstraction from which Mackenzie tries to move toward specific practice.

# Cross-source / cross-lens synthesis

Mackenzie changes the research problem by making it inadequate simply to say that computation 'reveals' neglected DDR connections: one must examine the operations through which a connection becomes calculable, visible and narratable. The chapter strengthens the critical computational lens by connecting representation, classification and situated making, while leaving documentary authority and historical attribution to the archival and historiographic lenses. It opens a promising dialogue with critical approaches to archives-as-data and with research through design, **but those comparisons require separate source-specific reading rather than being inferred here** (**TODO: cross-source synthesis with available verified texts**). My working proposition is that the DDR instrument's strongest contribution may be its ability to render its own interpretative mediations inspectable while still suggesting new questions about historical traces. Whether it does so must be demonstrated with versioned, source-linked cases and counter-examples, not deduced from Mackenzie's theoretical appeal.

# Chicago notes, source capture and Zotero parity

**Book-section identification:** Adrian Mackenzie, 'Introduction: Into the Data', chapter 1 of *Machine Learners: Archaeology of a Data Practice* (Cambridge, MA: MIT Press, 2017), 1–19.

**First full note (example citing a specific proposition):** Adrian Mackenzie, *Machine Learners: Archaeology of a Data Practice* (Cambridge, MA: MIT Press, 2017), 6.  
**Short note:** Mackenzie, *Machine Learners*, 6.

**Chapter-specific Chicago form once Zotero's Book Section key is exported:** Adrian Mackenzie, 'Introduction: Into the Data', in *Machine Learners: Archaeology of a Data Practice* (Cambridge, MA: MIT Press, 2017), 6. (Verify chosen Chicago edition/style's chapter-in-authored-book convention.)

**One short verified quotation:** 'Machine learning is an accumulation rather than a radical transformation.' (p. 5). [@Mackenzie2017MachineLearnersArchaeology, p. 5]

**One evidence-led paraphrase:** On page 18 Mackenzie announces six operations through which the book will examine the heterogeneous human–machine practices of knowledge production. [@Mackenzie2017MachineLearnersArchaeology, p. 18]

**Key pages for revisiting:** pp. 2–5 (accumulations, figures and feature making); p. 6 (machine learner/positivity); pp. 7–10 (automation, specificity, categories); pp. 11–13 (humanities critique); pp. 14–17 (counter-practice and heterogeneity); pp. 17–19 (diagrams, immersion, six operations).

**Citation-key status:** This note currently cites the verified *book* key **Mackenzie2017MachineLearnersArchaeology** from the repository's library.bib so links resolve. The chapter's own Zotero Book Section record is not yet present in that exported bibliography. **TODO:** Once the updated Zotero export supplies its actual key, replace this note's citation key and citation references with that chapter-specific key, rather than inventing one.

**Verification status:** Full supplied OCR scan read (19 printed pages). Figure captions and relevant textual discussions checked. The practical DDR examples are researcher-side proposed cross-checks, not assertions evidenced by Mackenzie's book.
