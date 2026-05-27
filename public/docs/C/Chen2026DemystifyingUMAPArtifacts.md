---
title: "Demystifying UMAP Artifacts: An Interactive Study on Diagnosis and Steering Using 3D Probes"
authors: "Chen, Bin and Xue, Yumeng and Paetzold, Patrick and Deussen, Oliver"
year: 2026
journal: "Information Visualization"
citation_key: Chen2026DemystifyingUMAPArtifacts
doi: "10.1177/14738716261434908"
url: "https://journals.sagepub.com/doi/10.1177/14738716261434908"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "27 May 2026, 10:24"
last_updated: "27 May 2026, 10:24"
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
model_subcluster: "S3.1 Visual analytics"
source_type: "Methodological anchor"
constraints_source: "project/constraints.md"
---

**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.1 Visual analytics  
**Source type:** Methodological anchor  

**Seams to watch:**
- When computational methods clarify or distort contested traces
- How low-dimensional projections can create persuasive but misleading visual evidence
- Why UMAP should be treated as a heuristic aid, not proof of archival relationships

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
I am reading this to strengthen the cautionary method note around UMAP, especially the risk of treating low-dimensional projections as faithful maps of archival or semantic relationships.

**Where it sits in my argument:**  
S3.1 Visual analytics: this source provides the methodological boundary for UMAP-based pattern mapping. It helps me say that dimensional reduction can support hypothesis generation, but the visual output must be diagnosed, stress-tested and checked against source records before it informs an archival claim.

**Why this term, not alternatives:**  
“Artifact” is useful because it names a visual or structural feature produced by the algorithm rather than by the data. “Cartographic fallacy” is useful because it describes the specific interpretive error I need to avoid: reading a projection as if it were a faithful map.

**My benchmark for using it:**  
I will use this source whenever a UMAP figure or embedding map appears to show clusters, distances, separations or neighbourhoods. I will not treat those visual features as evidence unless they survive parameter checks, provenance checks and close archival interpretation.

# Position + moment

Chen, Xue, Paetzold and Deussen write from information visualisation and visual analytics. Their article responds to the widespread use of UMAP as a default tool for high-dimensional visualisation, especially in contexts where users form hypotheses from two-dimensional scatterplots.

The paper’s specific contribution is cautionary and diagnostic. Rather than simply saying that UMAP can mislead, it classifies the kinds of artifacts that UMAP can create and uses synthetic 3D probe datasets to show how those artifacts arise.

**Canon assumptions to problematise / update for 2026:**  
This paper updates the common visual-analytics assumption that a dimensional-reduction plot can be read as a map. It shows that UMAP outputs can contain spatial, topological, metric and density distortions that are not visible unless the analyst has diagnostic checks.

# The author’s main move

Chen et al. classify UMAP artifacts using 3D synthetic probe datasets and an interactive diagnosis system in order to show how users can distinguish genuine data features from algorithmic distortions.

# Three-claim evidence ledger

> Keep claims plain. Always attach page numbers when you can. If unsure: TODO (needs page).

## Claim 1

- **Claim:**  
  UMAP projections invite a cartographic fallacy: users may mistake the layout for a faithful map of the data.

- **Evidence:**  
  Chen et al. define the “cartographic fallacy” as the assumption that a UMAP embedding is a faithful map of intrinsic geometry, leading users to mistake algorithmic side-effects for genuine data properties [@Chen2026DemystifyingUMAPArtifacts, p. 1]. They argue that global relative positions may be scrambled, continuous manifolds may be torn apart, and density variations may be erased, while these artifacts can be hard to distinguish from real patterns when ground truth is unavailable [@Chen2026DemystifyingUMAPArtifacts, pp. 1–2].

- **Warrant:**  
  This supports the claim because UMAP produces visually persuasive arrangements whose form exceeds what the method can safely guarantee. The user sees clusters, distances and gaps, but these may be consequences of optimisation, parameter settings or local-normalisation assumptions rather than meaningful structure.

- **So what for my thesis:**  
  In the DDR thesis, UMAP maps should be presented as heuristic prompts for archival enquiry, not as evidence that actors, projects, terms or traces are historically related.

- **Practice cross-check:**  
  TODO: add a methodological caption to each DDR UMAP figure: “This projection is used for exploratory pattern detection only; claims are made from checked records, not from visual proximity alone.”

## Claim 2

- **Claim:**  
  UMAP artifacts can affect spatial logic, topology and metric or density relations.

- **Evidence:**  
  Chen et al. classify UMAP distortions into three categories: Type A spatial logic and semantic misalignment, Type B topological and global structure loss, and Type C metric and density distortion [@Chen2026DemystifyingUMAPArtifacts, pp. 3–7]. Their Figures 1–3 show how synthetic 3D probes produce misleading 2D UMAP outputs: antipodal clusters collapse into false adjacency, continuous strips or rolls tear, torus holes collapse, densities become visually uniform, and long-range distances compress [@Chen2026DemystifyingUMAPArtifacts, pp. 5–7].

- **Warrant:**  
  This matters because DDR visual analytics may rely on exactly these visual cues: adjacency, clusters, continuity, gaps, density and separation. If UMAP can distort these features in known synthetic cases, then archival UMAP maps must be interpreted with caution.

- **So what for my thesis:**  
  I should not write from the visual language of “near”, “far”, “central”, “separate” or “clustered” unless I can specify what kind of relation the map is showing and how that relation was checked outside the projection.

- **Practice cross-check:**  
  TODO: review existing DDR map captions and notes. Replace any over-strong visual claims with checked claims: “surfaced as a candidate neighbourhood”, “visually proximate under this model”, “subsequently checked against catalogue records / source material”.

## Claim 3

- **Claim:**  
  Parameter testing and diagnostic comparison are necessary before using UMAP as an interpretive aid.

- **Evidence:**  
  Chen et al. argue that blind parameter tuning lacks semantic transparency because users may observe layout changes without understanding why they occur [@Chen2026DemystifyingUMAPArtifacts, p. 2]. Their interactive system uses 3D ground-truth views, 2D UMAP embeddings, linked selection and parameter tuning to diagnose whether visual gaps, tears or clusters correspond to real structure or algorithmic artifacts [@Chen2026DemystifyingUMAPArtifacts, pp. 8–12]. In the Enclosed-Blob and Torus-Surface cases, changing `n_neighbors` and `min_dist` reveals different global or topological structures, while the Connected-Blobs case shows that a sparse bridge can disappear under parameter stress-testing [@Chen2026DemystifyingUMAPArtifacts, pp. 11–12].

- **Warrant:**  
  This supports a diagnostic workflow rather than a single-map workflow. If a pattern is meaningful, it should not depend entirely on one arbitrary projection. If it disappears or reverses under plausible parameter settings, it should be treated as unstable and not used as evidence.

- **So what for my thesis:**  
  A DDR UMAP figure needs an accompanying method note: parameter settings, stability check, what the map is allowed to suggest, and what archival evidence confirms or rejects.

- **Practice cross-check:**  
  TODO: build a DDR UMAP diagnostic log with columns for corpus, embedding model, metric, `n_neighbors`, `min_dist`, observed pattern, stability across runs, archival check and decision: use / qualify / reject.

# Definitions / terms this changes

- **Cartographic fallacy:**  
  The mistaken reading of a UMAP embedding as a faithful map of the data’s intrinsic geometry, rather than as a constructed projection shaped by algorithmic assumptions and optimisation [@Chen2026DemystifyingUMAPArtifacts, p. 1].

- **UMAP artifact:**  
  A misleading feature in the low-dimensional layout produced by the algorithm rather than by the underlying data. Examples include false adjacency, artificial tearing, collapsed holes, density blindness and compressed distances [@Chen2026DemystifyingUMAPArtifacts, pp. 1, 5–7].

- **Type A distortion:**  
  Spatial logic or semantic misalignment between distinct manifolds or clusters, such as false adjacency or loss of relative orientation [@Chen2026DemystifyingUMAPArtifacts, pp. 4–5].

- **Type B distortion:**  
  Topological or global structure loss within a manifold, including artificial tearing, homological collapse and erasure of extrinsic geometry [@Chen2026DemystifyingUMAPArtifacts, pp. 6–7].

- **Type C distortion:**  
  Metric or density distortion caused by UMAP’s local-normalisation mechanism, including density blindness, non-isometry and the loss of sparse bridges [@Chen2026DemystifyingUMAPArtifacts, pp. 7–8].

- **Density blindness:**  
  The tendency of standard UMAP to make clusters of different absolute densities appear visually similar because it normalises local neighbourhood structure [@Chen2026DemystifyingUMAPArtifacts, p. 7].

- **Non-isometry:**  
  The problem that distances in the UMAP embedding do not scale linearly with original distances; inter-cluster distances may reflect topological separability rather than true magnitude of separation [@Chen2026DemystifyingUMAPArtifacts, p. 7].

- **Warm start / spatial injection:**  
  A human-in-the-loop approach where user-adjusted coordinates are used as an initialisation state for re-optimisation, allowing domain knowledge to steer the layout [@Chen2026DemystifyingUMAPArtifacts, pp. 9–12].

# My response

- **What I take from this:**  
  - This is the strongest cautionary citation for my use of UMAP: it gives me precise language for why the map cannot be treated as evidence on its own.  
  - The typology of artifacts is directly reusable as a checklist for DDR visual analytics: false adjacency, artificial tearing, collapsed topology, density blindness and compressed distances.  
  - The paper helps me write a better figure protocol: every UMAP visual needs parameter disclosure, stability checking and archival validation.

- **What I reframe / adjust:**  
  - I should describe UMAP as a diagnostic and exploratory aid, not as a representational map of the DDR archive.  
  - I should make the evidential sequence explicit: projection → candidate pattern → source check → interpretation → claim.

- **What question it raises next:**  
  - Which apparent DDR clusters are stable across UMAP settings, and which are projection artifacts?  
  - What level of diagnostic checking is sufficient for a thesis figure whose role is exploratory rather than evidential?

# Integration hooks

- **Where I will cite it:**  
  In the S3.1 visual analytics section immediately after citing McInnes et al. on UMAP. The paragraph job: introduce UMAP as useful for dimensional reduction and pattern discovery, then set the interpretive boundary that UMAP projections are vulnerable to artifacts and must be treated as heuristic.

- **Where I will name the title in running text:**  
  First use in the cautionary methods paragraph: “Chen et al.’s study of UMAP artifacts is useful here because it names the ‘cartographic fallacy’ and shows how low-dimensional projections can produce false adjacency, topological tearing and metric distortion.”

- **Link to my practice evidence:**  
  TODO: link to DDR UMAP parameter log / diagnostic note. Candidate evidence: one map where a cluster or neighbourhood remains stable across settings, and one apparent pattern that is rejected because it changes under parameter stress-testing.

- **Workstreams →**  
  UMAP diagnostics; parameter logging; projection stability checks; figure caption protocol; archival validation; visual-claim audit.

- **Deliverables →**  
  DDR UMAP diagnostic log; stable/unstable pattern table; revised figure captions; cautionary method paragraph; accepted/rejected visual-pattern examples.

- **Stakeholders →**  
  Thesis reader; supervisors; design historians; digital humanities readers; archive staff; future users of DDR exploratory visualisations.

# Boundary + risk

- **Boundary:**  
  This source is useful for diagnosing UMAP artifacts and projection risk, but it does not address archival interpretation, design history or cultural heritage evidence directly.

- **Risk if misused:**  
  If I lean on it too heavily, I could make the thesis sound anti-computational; the better use is to show that computational visualisation is valuable precisely when its limits are made explicit.

# Methods spine tags

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload

- **Key pages to reuse:**  
  pp. 1–8, 11–14

- **First full note:**  
  Bin Chen, Yumeng Xue, Patrick Paetzold, and Oliver Deussen, “Demystifying UMAP Artifacts: An Interactive Study on Diagnosis and Steering Using 3D Probes,” *Information Visualization* (2026): 1–15, https://doi.org/10.1177/14738716261434908.

- **Short note form:**  
  Chen et al., “Demystifying UMAP Artifacts,” page number.

- **One quote worth lifting:**  
  “UMAP is no longer viewed as a deterministic ‘truth generator’ but as a sensitive, stochastic instrument requiring calibration” [@Chen2026DemystifyingUMAPArtifacts, p. 13].

- **One paraphrase worth keeping:**  
  Chen et al. show that UMAP projections can generate misleading artifacts, including false adjacency, topological tearing, density blindness and compressed distances; they therefore argue for diagnostic comparison and parameter testing before users interpret low-dimensional layouts as meaningful structure [@Chen2026DemystifyingUMAPArtifacts, pp. 1–8, 11–13].

# Related works

- McInnes, Healy and Melville on UMAP.
- Wattenberg, Viégas and Johnson on using t-SNE effectively.
- Kobak and Linderman on initialization and global structure in t-SNE and UMAP.
- Jeon et al. on misuse of t-SNE and UMAP for visual analytics.
- Rockmore et al. on embedding spaces as exploratory landscapes.
- Gagliardi and Artese on semantic graphs and archive navigation.

# Follow-ups

- **What I will read next:**  
  Wattenberg, Viégas and Johnson on t-SNE; Kobak and Linderman on initialization; Jeon et al. on misuse of t-SNE and UMAP.

- **What I will test or write next:**  
  Write the DDR UMAP caution note: “UMAP is used here as a heuristic visual aid. Apparent proximity, separation or clustering is treated as a candidate pattern only. It becomes analytically meaningful only after parameter checks and archival validation.”