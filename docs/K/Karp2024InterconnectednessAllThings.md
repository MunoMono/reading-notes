---
title: "The Interconnectedness of All Things: Understanding Digital Collections through File Similarity"
authors: "Karp, St John"
year: 2024
journal: "Preservation, Digital Technology & Culture"
volume: "53"
issue: "4"
pages: "189-200"
citation_key: Karp2024InterconnectednessAllThings
doi: "10.1515/pdtc-2024-0042"
url: "https://doi.org/10.1515/pdtc-2024-0042"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "05 Oct 2026"
last_updated: "05 Oct 2026, 11:07"
north_star_source: "project/north-star.yml"
constraints_source: "project/constraints.md"

project_rq_verbatim: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_working: "How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?"
project_rq_secondary: "To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?"
project_rq_purpose: "Use the DDR archive to identify, interpret, and reactivate testamentary traces of contested design knowledge, and to test what from that period should be revisited for design and design research today."
model_title: "Mobilising contested design knowledge in the DDR archive"
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "c"
literature_cluster: "Contemporary bridge literature"
zotero_filing_path: "Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature"
source_type: "Contemporary computational-archives bridge"
project_tags:
  - "Theoretical framework"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Primary theoretical-framework area:** 3. Critical computational approaches  
**Literature cluster:** c) Contemporary bridge literature  
**Zotero filing path:** Theoretical framework / 3. Critical computational approaches / c) Contemporary bridge literature  
**Source type:** Contemporary computational-archives bridge

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

**How this source moves the primary research question forward:** Karp demonstrates how computational similarity can reveal relationships among digital records that hierarchical arrangement alone does not expose, while showing that thresholds, graph models, privacy, usability and human judgement determine whether those relationships become meaningful archival evidence.

**How this source bears on the secondary question:** It supplies a contemporary model for revisiting historical collections computationally without handing interpretative authority to the machine: algorithms can surface candidate relations, but the archivist/researcher must decide what those relations mean.

**Why I’m reading this now:** It is unusually close to the DDR practice problem: a bounded archive, computational similarity, non-hierarchical relationships, graph representation and an interface intended to support human inquiry.

**Where it sits in my argument:** Contemporary bridge literature because it connects archival arrangement and description to concrete computational techniques and a proof-of-concept research tool.

**Why this theoretical-framework area + literature cluster is the right filing location:** The article matters less as a hashing tutorial than as a contemporary demonstration of how computational representation changes what relationships an archive can expose.

**My benchmark for using it:** I will treat a computationally detected relation as useful when the matching method and threshold are explicit, the result can be inspected against the files, and the researcher retains authority to accept, reject or reinterpret it.

# Position + moment

Karp addresses born-digital archival collections whose file structures can contain duplicates, drafts, embedded objects and related versions that are difficult to understand through manual processing alone. The article develops and tests Eltrovo, a proof-of-concept combining file-similarity techniques with Records in Contexts/RDF representation. [@Karp2024InterconnectednessAllThings, pp. 189–197]

# The author’s main move

The paper proposes moving beyond a purely hierarchical model of digital collections by using computation to detect relations among files and representing those relations as a network. The proof-of-concept also exposes a second problem: once machines can generate many relationships, the human challenge becomes calibration, navigation and interpretation rather than mere discovery. [@Karp2024InterconnectednessAllThings, pp. 191–199]

# Critical-reading claims

## Claim 1

**Claim.** File similarity can reveal archival relations that exact-duplicate detection misses. **Author claim.** Karp argues that computers can identify not only identical files but embedded files, edited images and different drafts or versions of a work. **Evidence.** The introduction distinguishes checksum-based duplicate detection from similarity analysis capable of exposing relationships across audio, image, text and other files. [@Karp2024InterconnectednessAllThings, pp. 189–190] **Evidence-supported claim.** Computational similarity can make latent relations within a digital collection visible to an archivist. **Researcher inference.** DDR semantic similarity can likewise be valuable for surfacing candidate conceptual or documentary relations that catalogue hierarchy does not name explicitly. **Warrant.** Both methods operate by comparing representational features rather than relying solely on existing archival labels. **Boundary.** File-level similarity and semantic-text similarity are technically different and should not be conflated. **Consequence.** The source supports the principle of computationally assisted discovery, not a claim that similarity itself proves historical relation. **Practice cross-check.** Treat DDR semantic neighbours as candidate traces for inspection, then test the relationship against the underlying documents.

## Claim 2

**Claim.** Hierarchical archival structures can simplify collections while obscuring relationships that cut across the hierarchy. **Author claim.** Karp argues that complex records may relate in ways that are poorly represented by a single tree and explores network models as a complement to traditional arrangement. **Evidence.** The article contrasts hierarchical description with models capable of representing many-to-many links among records and invokes Records in Contexts/RDF as an approach to relational representation. [@Karp2024InterconnectednessAllThings, pp. 191–193] **Evidence-supported claim.** No single hierarchical location can express every meaningful relationship among digital objects. **Researcher inference.** DDR catalogue hierarchy should remain authoritative context while semantic and cross-document relations can form an additional research layer. **Warrant.** A record can participate in project, person, concept and temporal relationships simultaneously. **Boundary.** Hierarchies remain cognitively useful and are not rendered obsolete by graph structures. **Consequence.** The research instrument should add relational views without erasing archival hierarchy. **Practice cross-check.** Preserve catalogue parentage alongside semantic neighbourhoods and cross-document role/facet links.

## Claim 3

**Claim.** Rich relational description can transfer complexity from the archive to the metadata workload. **Author claim.** Karp notes that linked-data and collections-as-data approaches can increase expectations for granular metadata even while archival resources remain constrained. **Evidence.** His discussion of machine-readable description and networked data warns that better relational modelling can increase the archivist’s workload unless computational assistance reduces manual processing. [@Karp2024InterconnectednessAllThings, pp. 192–193] **Evidence-supported claim.** More expressive models are not free: they impose labour, infrastructure and maintenance costs. **Researcher inference.** DDR graph/facet enrichment should be judged partly by whether it increases research legibility without creating an unsustainable manual curation burden. **Warrant.** A theoretically richer model that cannot be maintained may reduce rather than improve practical access. **Boundary.** A single-researcher PhD system has different sustainability obligations from an institutional archive. **Consequence.** Automation should target high-value relational work and keep generated metadata distinguishable from archival description. **Practice cross-check.** Use automated authority/facet propagation only where deterministic validation and source provenance can be maintained.

## Claim 4

**Claim.** “Similarity” changes meaning with the computational technique used to measure it. **Author claim.** Karp distinguishes cryptographic hashing for exact identity, fuzzy hashing for binary similarity and perceptual hashing for visually similar images. **Evidence.** Eltrovo combines ssdeep and pHash because different comparison methods reveal different kinds of relation within the same collection. [@Karp2024InterconnectednessAllThings, pp. 193–196] **Evidence-supported claim.** A similarity score has meaning only relative to the representation and algorithm that produced it. **Researcher inference.** DDR cosine/embedding similarity should never be presented as a generic measure of “relationship” without naming the model and task. **Warrant.** Different algorithms operationalise different definitions of likeness. **Boundary.** Karp’s hashes do not model conceptual semantics in the way text embeddings do. **Consequence.** The thesis should define what bge-m3 similarity is being used to approximate and where that approximation stops. **Practice cross-check.** Record the embedding model and distinguish semantic proximity from catalogue, temporal or evidential relationships in the interface.

## Claim 5

**Claim.** Similarity thresholds are calibrated decisions, not natural boundaries in the data. **Author claim.** Karp reports trial thresholds around 50 for fuzzy hash matches and 70 for perceptual image matches but warns that appropriate values may vary between datasets. **Evidence.** The proof-of-concept explicitly allows for threshold adjustment because low thresholds produce false matches while high thresholds miss valid ones. [@Karp2024InterconnectednessAllThings, pp. 196–198] **Evidence-supported claim.** Computational relation-finding contains an adjustable precision/recall trade-off. **Researcher inference.** DDR neighbourhood size, score cut-offs and admissibility criteria should be treated as methodological parameters that require testing rather than hidden defaults. **Warrant.** Changing thresholds changes which relationships enter the human evidence surface. **Boundary.** The numerical thresholds in Eltrovo cannot be transferred to embedding similarity. **Consequence.** UAT should test parameter choices against known and contested DDR cases. **Practice cross-check.** Use k-neighbourhood controls and admissibility tests to observe when useful relations turn into noise or when relevant traces disappear.

## Claim 6

**Claim.** A representation can be computationally expressive yet unusable for human interpretation. **Author claim.** Karp finds that even a small trial collection generated an RDF graph too large to navigate effectively and treats visualisation as Eltrovo’s primary unresolved problem. **Evidence.** The 229-file dataset generated 1,168 RDF triples, prompting proposals for queries, filtered outputs, textual reports and drill-down views rather than attempting to display the full graph. [@Karp2024InterconnectednessAllThings, pp. 197–198] **Evidence-supported claim.** Increasing relational completeness can reduce practical intelligibility unless the interface selectively mediates complexity. **Researcher inference.** DDR visualisation should prioritise research-task legibility over maximal display of all modelled relations. **Warrant.** Human inquiry depends on usable reductions of computational complexity. **Boundary.** Filtering introduces another selection layer and can hide relations as well as clarify them. **Consequence.** Interface reduction should be explicit and reversible where possible. **Practice cross-check.** Keep the semantic atlas broad but use neighbourhood, comparative and critical-inquiry views to progressively constrain the evidence surface.

## Claim 7

**Claim.** Computational archival tools should preserve local control when records may be sensitive. **Author claim.** Karp designs Eltrovo so that it makes no remote connection and keeps analysed files and results on the archivist’s local machine. **Evidence.** The architecture is justified by privacy, medical, copyright and cultural restrictions that can make archival records inappropriate for external processing. [@Karp2024InterconnectednessAllThings, p. 197] **Evidence-supported claim.** System architecture is part of archival ethics because data movement can create risks independent of analytical performance. **Researcher inference.** The DDR choice of local models has archival-method significance in addition to technical convenience. **Warrant.** Keeping source material within controlled infrastructure can reduce disclosure and third-party processing risks. **Boundary.** Local execution does not by itself make a system secure, ethical or rights-compliant. **Consequence.** The thesis can justify architecture partly through provenance and control while avoiding claims of complete safety. **Practice cross-check.** Document which DDR model operations are local and how rights-restricted source materials are separated from public outputs.

## Claim 8

**Claim.** Computation is most defensible as an intelligence amplifier whose findings remain subject to archivist judgement. **Author claim.** Karp explicitly argues that AI should inform archivists’ decisions rather than make those decisions for them and notes that an AI extension to Eltrovo remains unproven experimentally. **Evidence.** The conclusion to the future-directions section preserves human decision authority and distinguishes promising possibilities from results actually demonstrated by the prototype. [@Karp2024InterconnectednessAllThings, pp. 198–199] **Evidence-supported claim.** The proof-of-concept supports computational assistance, not autonomous archival judgement. **Researcher inference.** DDR RAI should surface evidence and bounded synthesis while leaving historical interpretation accountable to the researcher. **Warrant.** Candidate relationships generated at scale still require contextual interpretation and evidential checking. **Boundary.** Human judgement can itself be biased and inconsistent. **Consequence.** Human oversight must be evidenced through a clear source-to-claim path rather than invoked as a generic safeguard. **Practice cross-check.** Retain UAT, source cards and researcher adjudication for contested and missingness cases instead of allowing fluent synthesis to close the question.

# Definitions / terms this changes

- **File similarity →** algorithmically measured relatedness between files that may capture identity, partial overlap, visual resemblance or version relationships depending on the technique used. [@Karp2024InterconnectednessAllThings, pp. 189–196]
- **Relational archival model →** a representation that permits multiple explicit links among records rather than forcing each object into only one hierarchical position. [@Karp2024InterconnectednessAllThings, pp. 191–193]
- **Intelligence amplifier →** computation used to extend human capacity for tasks too large or complex to perform manually while keeping interpretative decisions with the human practitioner. [@Karp2024InterconnectednessAllThings, pp. 198–199]

# My response

Karp is a very useful bridge because the paper shows both sides of computational activation in one experiment. The machine can surface relations that a hierarchy hides, but once it does so the research problem shifts to thresholds, provenance, usability and human interpretation. That is close to the methodological problem of the DDR semantic atlas and RAI system.

**Reusable thesis sentence:** Computational similarity activates an archive by producing candidate relations for inspection, but the evidential meaning of those relations depends on the model, threshold, interface and human judgement through which they become legible.

# Integration hooks

- **Where I will cite it:** Critical computational framework; methods on semantic relation discovery; discussion of graph/interface complexity and human-in-the-loop interpretation.
- **Where I will name the title in running text:** In the section moving from archival hierarchy to computationally surfaced relationships.
- **Link to my practice evidence:** bge-m3 semantic retrieval, cross-document evidence, authority/facet reconciliation, semantic neighbourhoods and local Qwen inference.
- **Workstreams →** Critical computational approaches; similarity; linked data; interface; local AI.
- **Deliverables →** Theoretical framework; research-design chapter; computational practice chapter.

# Boundary + risk

**Boundary:** Eltrovo operates on born-digital file similarity using hashes and RiC/RDF, not on historical semantic retrieval using transformer embeddings.

**Risk:** The analogy becomes weak if “similarity” is treated as one generic computational phenomenon. Its value here is methodological: explicit representation, calibration, human inspection and bounded claims.

# Cross-source / cross-lens synthesis

Karp operationalises a tension that Drucker theorises. Computational systems can expose relationships invisible to inherited structures, yet the graph or interface through which those relations are rendered becomes another interpretative system. Manning provides the technical reason for caution: similarity and grouping depend on representation, metric and evaluation choices. Karp adds an archival consequence—more relations can create more metadata and less human navigability unless the system filters and explains them. For DDR, these sources jointly support a research instrument that uses computation to widen the field of candidate relationships while preserving archival context and interpretative control. What remains to be demonstrated is whether DDR semantic similarity retrieves historically meaningful traces more effectively than existing catalogue/keyword routes.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:** 189–199
- **First full note:** St John Karp, “The Interconnectedness of All Things: Understanding Digital Collections through File Similarity,” *Preservation, Digital Technology & Culture* 53, no. 4 (2024): 189–200.
- **Short note form:** Karp, “Interconnectedness of All Things,” 196–99.
- **One quote worth lifting:** “the decisions remain the archivist’s to make, not the computer’s.” (p. 199)
- **One paraphrase worth keeping:** Computational similarity can reveal non-hierarchical relationships among digital records, but its usefulness depends on calibrated thresholds, usable representations and archivist control. [@Karp2024InterconnectednessAllThings, pp. 196–199]

# Related works

- Drucker, *Graphesis* — current computational batch.
- Manning, Raghavan, and Schütze, *Introduction to Information Retrieval* — current computational batch.
- Padilla, Scates Kettler, and Shorish, *Collections as Data: Part to Whole* — current computational batch.

# Follow-ups

- **What I will read next:** Padilla et al. to connect the computational treatment of collections to institutional responsibility and reuse.
- **What I will test or write next:** Compare which DDR relationships are surfaced by semantic retrieval but not by catalogue hierarchy, then inspect whether those relations survive source-level scrutiny.
