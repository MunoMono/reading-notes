---
title: "Retrieval-Augmented Generation Systems"
authors: "Ciletti, Michele"
year: 
journal: ""
citation_key: CilettiRetrievalAugmentedGenerationSystems
doi: ""
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 09:14"
last_updated: "27 May 2026, 09:15"
north_star_source: "project/north-star.yml"
north_star_mtime: "16 Mar 2026, 12:22"
north_star_sha1: "46ff0ae0f623"
category: "S3: Surfacing and reactivating traces computationally"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.2 Interpretability, provenance, and retrieval"
source_type: "Core text"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.2 Interpretability, provenance, and retrieval  
**Source type:** Core text  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How organisation choices reveal or hide contested knowledge
- How RAG can act as an access, interrogation and summarisation layer over archival material

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)
(Full rules: project/constraints.md)

---

# Thesis job (do this first)

**Project research question(s) this serves:** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  

**Why I’m reading this now:**  
I am reading this to frame Retrieval-Augmented Generation as a possible access and interrogation layer for archival material, while keeping its outputs subordinate to source checking and archival interpretation.

**Where it sits in my argument:**  
S3.2 Interpretability, provenance and retrieval: this source helps me explain how RAG may support archive search, question-answering and summarisation when attached to a defined corpus of historical documents.

**Why this term, not alternatives:**  
“Retrieval-Augmented Generation” is useful because it names a specific workflow: retrieve relevant records first, then generate an answer from those records. This is more precise than saying “AI search” or “chatbot”, because the retrieval step is where archival accountability begins.

**My benchmark for using it:**  
I will use this source where I need to discuss RAG as a practical access method for historical corpora. I will not use it to claim that RAG removes hallucination, replaces archival expertise or produces final historical interpretation.

# Position + moment

Ciletti writes from a digital humanities / archival access problem-space, using historical newspaper data as a test case for RAG. The article is practical and experimental rather than theoretical: it builds a pipeline, tests it against expert-authored questions and answers, and reflects on where the system succeeds or fails.

The paper belongs to the current moment in which humanities researchers are testing whether LLM-based systems can make digitised archives easier to consult without losing the need for expert knowledge, metadata, retrieval strategy and source-grounded evaluation.

**Canon assumptions to problematise / update for 2026:**  
The paper updates older assumptions about digital archives as keyword-search interfaces. It suggests a shift toward conversational interrogation, but it also shows that this shift remains fragile where questions are broad, multi-document or dependent on careful contextual synthesis.

# The author’s main move

Ciletti tests an experimental RAG pipeline on a historical newspaper dataset in order to assess whether retrieval-linked LLMs can improve access, searchability and summarisation in humanities digital archives.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  RAG is useful for archives because it links language generation to a defined source corpus.

- **Evidence:**  
  Ciletti explains that RAG links a language model to an external database by converting both the database and the user query into embeddings, retrieving semantically similar documents and passing those documents to the model as context [@CilettiRetrievalAugmentedGenerationSystems, p. 2]. The article frames this as a way to provide the model with a “concrete and reliable database” while preserving its generative capacities [@CilettiRetrievalAugmentedGenerationSystems, p. 2].

- **Warrant:**  
  This supports the claim because RAG changes the role of the LLM. The model is not being asked to answer from its training data alone. It is being asked to answer from retrieved archival material. That makes RAG relevant to archive-facing research, where the authority of an answer depends on its relation to a bounded corpus.

- **So what for my thesis:**  
  RAG can be framed as one possible layer of DDR activation: a way to interrogate digitised traces through source-linked questions, while still requiring the thesis to show which records were retrieved and how they support the claim.

- **Practice cross-check:**  
  TODO: test a small DDR RAG prototype on one bounded subset, such as project descriptions, oral-history transcripts or catalogue notes. Record the retrieved documents for each answer, not only the generated response.

## Claim 2

- **Claim:**  
  RAG performs best when the archival question is precise and the relevant evidence is well bounded.

- **Evidence:**  
  The study tested ten expert-authored questions against the Foggia Occupator Dataset, a corpus of 874 articles totalling 216,015 words [@CilettiRetrievalAugmentedGenerationSystems, p. 2]. Ciletti reports that the system performed well on clearly defined topics and named entities, while broader questions sometimes produced incomplete or slightly erroneous answers [@CilettiRetrievalAugmentedGenerationSystems, pp. 1, 5].

- **Warrant:**  
  This matters because retrieval quality depends on the relation between the question, the embedding search and the structure of the corpus. Precise questions can locate relevant documents more reliably. Broad questions may need evidence distributed across many records, which increases the risk that the model will retrieve too little, over-weight one document or produce a plausible but partial synthesis.

- **So what for my thesis:**  
  I should use RAG for targeted archival interrogation rather than broad historical judgement. In the DDR context, RAG can help ask “where is this person, term or project discussed?” before I ask “what does this mean for design research history?”

- **Practice cross-check:**  
  TODO: design two DDR query types: precise retrieval questions and broader synthesis questions. Compare retrieval quality, answer quality and the need for manual follow-up.

## Claim 3

- **Claim:**  
  RAG needs metadata, retrieval tuning and expert evaluation to become a trustworthy archival method.

- **Evidence:**  
  Ciletti identifies metadata enrichment, query strategy and retrieval algorithm refinement as necessary improvements for reliable digital-archive RAG systems [@CilettiRetrievalAugmentedGenerationSystems, p. 1]. In the results section, the paper notes that some errors were likely caused by a basic retrieval algorithm and suggests that keyword weighting and better metadata could improve performance [@CilettiRetrievalAugmentedGenerationSystems, pp. 5–6]. The paper also stresses collaboration between domain experts and technical specialists because implementation requires knowledge of search engines, embeddings, preprocessing and LLM configuration [@CilettiRetrievalAugmentedGenerationSystems, p. 6].

- **Warrant:**  
  This supports a cautious methodological position. RAG is not a magic access layer placed on top of archival material. It is a designed system, and its answers depend on preprocessing, chunking, metadata, retrieval settings, model behaviour, prompt design and evaluation practice.

- **So what for my thesis:**  
  If I discuss RAG as a DDR method, I need to describe it as a designed archival interface with explicit constraints: corpus boundaries, metadata quality, retrieval settings, prompt design, source display and human checking.

- **Practice cross-check:**  
  TODO: for any DDR RAG experiment, keep a method log: corpus subset, chunking strategy, embedding model, number of retrieved records, prompt, retrieved source IDs, answer, manual judgement and revision.

# Definitions / terms this changes

- **Retrieval-Augmented Generation:**  
  I will use this to mean a workflow in which a user query is embedded, matched against an external corpus, and answered by an LLM using retrieved documents as context [@CilettiRetrievalAugmentedGenerationSystems, p. 2].

- **Archival interrogation layer:**  
  I will use this phrase for the interface role RAG may play in the DDR project: it lets a user ask questions of a bounded corpus, but the answer remains dependent on retrieved sources and must be checked against them.

- **Ground truth answers:**  
  In this article, expert-authored answers are used to evaluate system performance [@CilettiRetrievalAugmentedGenerationSystems, pp. 2–5]. For DDR, a comparable evaluation could use expert-checked archival answers or manually verified trace notes.

- **Retrieval performance:**  
  Ciletti evaluates retrieval by measuring how many relevant documents were retrieved within a fixed top-five retrieval setting [@CilettiRetrievalAugmentedGenerationSystems, p. 5]. For DDR, this suggests that retrieval quality should be assessed separately from answer fluency.

- **Metadata enrichment:**  
  I will use this as a reminder that better archival metadata improves not only conventional search but also retrieval-augmented systems [@CilettiRetrievalAugmentedGenerationSystems, pp. 5–6].

# My response

- **What I take from this:**  
  - RAG is useful for thinking about access because it joins retrieval, summarisation and user-facing interrogation in one workflow.  
  - The article supports a modest claim: RAG can help users consult digital archives, but only when the corpus, retrieval process and evaluation are clearly bounded.  
  - The expert-evaluation setup is directly useful for my method: generated answers should be judged against known records and expert interpretation, not only against semantic similarity scores.

- **What I reframe / adjust:**  
  - I should write RAG as a support layer for archival work, not as a replacement for archival reading.  
  - I should separate three tasks that are often blurred: retrieving relevant traces, summarising retrieved material and making a historical argument from that material.

- **What question it raises next:**  
  - What would a “good enough” RAG answer look like in the DDR archive if the purpose is discovery rather than publication-ready interpretation?  
  - How should a DDR RAG interface expose retrieved records so that the user can see the evidential basis of an answer?

# Integration hooks

- **Where I will cite it:**  
  In the S3.2 section on retrieval and interpretability. The paragraph job: introduce RAG as an archival interrogation layer that can support access and summarisation, then state why retrieval logs, source display and human validation are necessary.

- **Where I will name the title in running text:**  
  First use in the methods discussion: “Ciletti’s study of Retrieval-Augmented Generation systems for digital archives is useful because it tests RAG on historical newspaper material and evaluates the system against expert-authored answers.”

- **Link to my practice evidence:**  
  TODO: link to DDR RAG / retrieval experiment once available. Candidate evidence: a question-answer log where each generated answer is paired with retrieved DDR source IDs and a manual judgement.

- **Workstreams →**  
  RAG prototype; source-grounded retrieval; archival question design; metadata audit; evaluation rubric; summarisation checks.

- **Deliverables →**  
  DDR RAG query log; retrieval quality table; answer evaluation notes; source-linked summary examples; method paragraph on RAG as archival interrogation.

- **Stakeholders →**  
  Thesis reader; supervisors; archive staff; future DDR users; digital humanities readers; non-specialist users seeking access to archival material.

# Boundary + risk

- **Boundary:**  
  This source is useful for RAG as archive access and summarisation, but its case study is a small historical newspaper dataset rather than a complex design archive with mixed media, institutional records and contested design knowledge.

- **Risk if misused:**  
  If I cite it too strongly, I could imply that RAG-generated answers are reliable historical claims, when the article actually shows that retrieval and summarisation remain vulnerable to partial evidence, broad questions and algorithmic limits.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–2, 5–6

- **First full note:**  
  Michele Ciletti, “Retrieval-Augmented Generation Systems for Enhanced Access to Digital Archives,” PDF, n.d., 1–7.

- **Short note form:**  
  Ciletti, “Retrieval-Augmented Generation Systems,” page number.

- **One quote worth lifting:**  
  “RAG can significantly improve the searchability and reliability of digital archives” [@CilettiRetrievalAugmentedGenerationSystems, p. 1].

- **One paraphrase worth keeping:**  
  Ciletti shows that RAG can support access to historical digital archives by retrieving source documents and generating answers from them, but its reliability depends on metadata enrichment, query strategy, retrieval tuning and expert evaluation [@CilettiRetrievalAugmentedGenerationSystems, pp. 1, 5–6].

# Related works

- Gao et al. on RAG survey literature.
- Es et al. on RAGAS and automated evaluation of RAG systems.
- Jaillant, Aske and Caputo on AI, archival access, risk and trust.
- Rockmore et al. on embeddings as exploratory textual landscapes.
- Bender et al. on the risks of treating language-model output as knowledge.

# Follow-ups

- **What I will read next:**  
  Gao et al. on RAG for large language models; Es et al. on RAGAS; one archival or digital-humanities case study using RAG with named source citation.

- **What I will test or write next:**  
  Draft a DDR method note: “RAG is used here as an interrogation and summarisation layer over a bounded archival subset. Its answers are not treated as evidence unless the retrieved records are inspected, cited and interpreted.”