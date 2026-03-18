---
title: "End-to-end Information Extraction from Archival Records with Multimodal Large Language Models"
authors: "Vafaie, Mahsa; Hertling, Sven; Banse-Strobel, Inger; Dubout, Kevin; Sack, Harald"
year: 2025
journal: "Proceedings of the 34th ACM International Conference on Information and Knowledge Management"
citation_key: Vafaie2025EndtoendInformationExtraction
doi: "10.1145/3746252.3761503"
url: "https://dl.acm.org/doi/10.1145/3746252.3761503"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "18 Mar 2026"
project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
model_strand: "S3"
model_strand_label: "Surfacing and reactivating traces computationally"
model_subcluster: "S3.3 Multimodal machine learning"
source_type: "Core text"
last_updated: "18 Mar 2026, 15:23"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Multimodal machine learning  
**Source type:** Core text  

**Seams to watch (optional, pick 1):**
- When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Why I’m reading this now (1 sentence):** I need a current archival MLLM paper that shows what multimodal models can realistically do with heterogeneous historical records, because my computational strand needs a defensible account of extraction, prompting, scalability, and evidence-linking.  
**Where it sits in my argument (chapter/section + what it helps me say):** Methods / S3.3 multimodal machine learning; it helps me say that MLLMs can be useful for archival extraction and semantic enrichment when documents are noisy, layout-diverse, and OCR-resistant, but that performance depends on dataset design, prompting strategy, deployment infrastructure, and careful post-processing.  
**Why this term, not alternatives (1–2 lines):** Vafaie et al.’s focus on **end-to-end information extraction** is more useful than generic OCR or document-AI language because it explicitly treats the record image itself as input and avoids assuming a clean text layer already exists.  
**My benchmark for using it (1–2 criteria I will apply):** I will use this text where multimodal models are helping with extraction, structuring, or access from complex archival images, and where I can preserve provenance and avoid collapsing archival interpretation into automated key-value capture.

# Position + moment (2–4 lines)
Vafaie and colleagues write from document understanding, information extraction, and archival digitisation, with contributors from Karlsruhe Institute of Technology, University of Mannheim, and the German Federal Archives. The paper sits in a practical archival-access problem-space: historical index cards are hard to process because of degraded print, handwriting, stamps, marginalia, inconsistent formats, and privacy-sensitive constraints, yet large-scale access depends on extracting usable structure from them. `[@Vafaie2025EndtoendInformationExtraction, pp. 2–3]` :contentReference[oaicite:2]{index=2}  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** This paper is useful because it resists two easy assumptions: first, that OCR plus rules is enough for historical records; second, that bigger MLLMs automatically perform better. Its results show that archival multimodality is a very specific operational problem rather than a generic AI capability demo. `[@Vafaie2025EndtoendInformationExtraction, pp. 2, 7–8]` :contentReference[oaicite:3]{index=3}

# The author’s main move (1 sentence)
They try to demonstrate that end-to-end key information extraction from heterogeneous archival records can be improved with multimodal large language models by introducing a new archival dataset, comparing models and prompting strategies, and connecting extraction outputs to knowledge-graph generation in order to support broader archival access. `[@Vafaie2025EndtoendInformationExtraction, pp. 2–3, 5–8]` :contentReference[oaicite:4]{index=4}

# Three-claim evidence ledger (max 3 claims)
> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1
- **Claim (plain):** Multimodal models can outperform OCR-dependent and older document-understanding approaches on noisy archival records, but only under carefully tuned conditions.
- **Evidence (quote/paraphrase + page):** The paper frames historical index cards as especially difficult for conventional KIE because they mix printed text, handwriting, stamps, annotations, and inconsistent layouts. In the experiments, InternVL2.5-38B achieves the best overall results on BZKOpen with NED 0.080, exact match 83%, partial match 88% at t=1, and 91% at t=3, clearly outperforming Donut-base and Donut-base-finetuned, which remain around 56–59% exact match. The discussion also notes that fine-tuning Donut on a small dataset does not close the performance gap with MLLMs. `[@Vafaie2025EndtoendInformationExtraction, pp. 2–3, 7–8]` :contentReference[oaicite:5]{index=5}
- **Warrant (my words):** This supports the claim because the paper does not merely assert that MLLMs are promising; it shows, in a real archival case, that OCR-free multimodal extraction can outperform older transformer and OCR-dependent baselines when the document class is visually messy and heterogeneous.
- **So what for my thesis (a reusable sentence):** Vafaie et al. let me argue that multimodal models may be justified for extracting structure from complex DDR records where OCR or rule-based methods would be brittle, incomplete, or too labour-intensive.
- **Practice cross-check:** This is relevant if the DDR archive includes forms, cards, diagrams, marginalia, or mixed visual-textual records, but it needs testing against DDR-specific document types rather than assumed transfer. TODO (needs archive material type note).

## Claim 2
- **Claim (plain):** Prompting strategy and model configuration matter more than raw model size, and different fields may require different extraction tactics.
- **Evidence (quote/paraphrase + page):** The authors explicitly report that increasing model size does not necessarily improve performance: InternVL2.5-38B outperforms the larger 78B model, and InternVL2.0-40B outperforms the 76B model. Table 3 shows that two-shot few-shot prompting with prompt 9 improves InternVL2.5-38B to NED 0.060 and exact match 86%, while zero-shot remains slightly worse. The discussion further notes that structured fields benefit from few-shot prompting, while more open-ended fields such as names and locations can be better handled in zero-shot mode, suggesting a hybrid strategy. `[@Vafaie2025EndtoendInformationExtraction, pp. 5–8]` :contentReference[oaicite:6]{index=6}
- **Warrant (my words):** This matters because it shows archival MLLM work is not just a matter of selecting the biggest model. Performance emerges from an interaction between field type, prompt design, example selection, and model architecture.
- **So what for my thesis:** This paper helps me justify a field-sensitive and workflow-specific use of multimodal models in S3, rather than a one-model-fits-all approach to DDR extraction or classification.
- **Practice cross-check:** This supports designing different prompting or extraction strategies for different DDR record types or metadata fields, especially if names, dates, project codes, and narrative notes behave differently. TODO (needs extraction schema cross-link).

## Claim 3
- **Claim (plain):** The paper’s real contribution is not just extraction accuracy but a pipeline view in which archival images become structured data and then linked knowledge.
- **Evidence (quote/paraphrase + page):** Methodologically, the paper defines two pipelines: a rule-based OCR-dependent baseline and a transformer/MLLM end-to-end route. After extraction, outputs are post-processed into standardised JSON key-value structures and then converted into subject-predicate-object triples for integration into a knowledge graph. In the conclusion, the authors state that the extracted data from 1.9 million cards will feed a knowledge graph to broaden access and support exploratory querying, with about 70% planned for public availability and later entity linking. `[@Vafaie2025EndtoendInformationExtraction, pp. 5–6, 8]` :contentReference[oaicite:7]{index=7}
- **Warrant (my words):** This is important because it places MLLMs inside an archival-access infrastructure. The model is not the endpoint; it is one stage in a chain from image to structured data to semantic retrieval.
- **So what for my thesis:** Vafaie et al. give me a concrete model for how multimodal extraction might support archive activation in the DDR case, but only if the resulting structures remain linked back to source records and are treated as access scaffolding rather than settled interpretation.
- **Practice cross-check:** This aligns with Marciano on computational archival science and with Boyd Davis/Vane/Kräutli on whole-pipeline trust; it suggests that any DDR knowledge graph or retrieval layer must preserve provenance to source images and transformation steps. TODO (needs S3 provenance cross-link).

# Definitions / terms this changes (only the ones that matter)
- **Key Information Extraction (KIE):** the automated identification and structuring of meaningful information as key-value pairs from semi-structured documents; I will use this specifically for extraction-oriented archival tasks, not for higher-level interpretation. `[@Vafaie2025EndtoendInformationExtraction, pp. 3–4]` :contentReference[oaicite:8]{index=8}
- **End-to-end extraction:** extraction directly from document images without relying on intermediate OCR transcripts or layout encodings; I will use this where the image itself is the primary evidential surface. `[@Vafaie2025EndtoendInformationExtraction, pp. 2, 5]` :contentReference[oaicite:9]{index=9}
- **BZKOpen:** a German-language dataset of 516 historical index cards with 19 annotated attributes across more than 40 layout types; I will use it as evidence that archival MLLM evaluation needs domain-specific benchmark data rather than generic document sets. `[@Vafaie2025EndtoendInformationExtraction, pp. 4–5]` :contentReference[oaicite:10]{index=10}
- **Iterative context-aware prompting:** a prompt-engineering approach in which earlier prompt failures are analysed and prompts refined with additional hints; I will use this as a reminder that archival MLLM performance depends on active design, not passive prompting. `[@Vafaie2025EndtoendInformationExtraction, pp. 5–6]` :contentReference[oaicite:11]{index=11}
- **Hybrid prompting strategy:** the paper’s practical conclusion that different fields may benefit from different prompting modes, with structured fields benefiting from few-shot examples and open-ended fields sometimes performing better in zero-shot mode; I will use this as a practical design principle rather than a general law. `[@Vafaie2025EndtoendInformationExtraction, pp. 7–8]` :contentReference[oaicite:12]{index=12}
- **Knowledge graph generation:** the conversion of extracted key-value data into RDF triples for linked, exploratory archival access; I will use this as a downstream access layer, not as a substitute for archival context. `[@Vafaie2025EndtoendInformationExtraction, p. 6]` :contentReference[oaicite:13]{index=13}

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - It gives me a concrete, current archival use case for multimodal extraction rather than abstract AI promise.
  - It is especially useful because it combines dataset creation, model comparison, prompting, scalability, and semantic enrichment in one paper.
  - It helps me separate extraction and access support from interpretation, which is important for your thesis.
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I will treat multimodal ML in the DDR project primarily as a way to structure and surface records, not as a system that can directly resolve contested meaning.
  - I will use this text to justify field-sensitive prompting, careful post-processing, and provenance-aware downstream modelling.
- **What question it raises next (1–2 bullets):**
  - Which DDR document classes are close enough to index-card-like archival records for this kind of end-to-end extraction to work well?
  - How can I stop extracted key-value structures from being mistaken for the meaning of the record rather than one operational layer built from it?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** In the methods chapter section on S3.3 multimodal machine learning where I justify extraction from heterogeneous archival images and describe how extraction outputs could feed structured access layers.
- **Where I will name the title in running text (first-use rule):** First mention in the S3.3 section: *In “End-to-end Information Extraction from Archival Records with Multimodal Large Language Models” (2025), Vafaie et al. argue...*
- **Link to my practice evidence (one concrete cross-reference):** Use alongside any DDR pilot workflow that moves from image records to structured metadata, entity linking, or knowledge-graph-like retrieval. TODO (needs exact cross-reference).
- **Workstreams →** Multimodal machine learning; interpretability; provenance; retrieval; computational activation.
- **Deliverables →** S3.3 methods paragraph; extraction pipeline note; provenance-aware access rationale; literature map node.
- **Stakeholders →** Examiners; supervisors; archival studies readers; digital humanities readers; document-AI readers.

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** This paper is strongest as a model for extraction and access over structured archival record images, but it is less useful for the interpretative, historiographic, and contested dimensions of design knowledge in the DDR archive.
- **Risk if misused (1 sentence):** If I lean on it too heavily, I could let key-value extraction stand in for historical understanding and underplay the ambiguity, absence, and contextual richness of the records.

# Methods spine tags (tick what it actually touches)
- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 2–3, 5–8
- **First full note (write it out here):**  
  Mahsa Vafaie, Sven Hertling, Inger Banse-Strobel, Kevin Dubout, and Harald Sack, “End-to-End Information Extraction from Archival Records with Multimodal Large Language Models,” in *Proceedings of the 34th ACM International Conference on Information and Knowledge Management* (New York: ACM, 2025), 6075–6083.
- **Short note form:**  
  Vafaie et al., “End-to-End Information Extraction from Archival Records with Multimodal Large Language Models,” 6077–6081.
- **One quote worth lifting (≤2 lines):** “larger models do not necessarily provide better performance across all tasks.” (p. 8)
- **One paraphrase worth keeping:** Vafaie et al. argue that archival multimodal extraction works best when model choice, prompt design, post-processing, and deployment are treated as a whole pipeline, and that strong results on heterogeneous historical records do not come simply from using larger models. (pp. 7–8)

# Related works (only if it directly connects)
- Marciano, “Towards a New Discipline of Computational Archival Science (CAS)”
- Jaillant and Aske, “Are Users of Digital Archives Ready for the AI Era?”
- Boyd Davis, Vane, and Kräutli, “Can I Believe What I See?”
- Foka and Griffin, “AI, Cultural Heritage, and Bias”
- TODO: connect directly to any DDR image-extraction pilot or metadata-enrichment experiment.

# Follow-ups (next actions, not vibes)
- What I will read next: A multimodal archival or document-AI paper that is less extraction-focused and more concerned with retrieval, explanation, or uncertainty.
- What I will test or write next: Draft the S3.3 paragraph that defines multimodal ML in your thesis as an extraction-and-access scaffold, then specify which DDR document types are suitable for that workflow and which are not.