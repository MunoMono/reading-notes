---
title: "In Google we trust: users’ decisions on rank, position, and relevance"
authors: "Pan, Bing and Hembrooke, Helene and Joachims, Thorsten and Lorigo, Lori and Gay, Geri and Granka, Laura"
year: 2007
journal: "Journal of Computer-Mediated Communication"
citation_key: Pan2007GoogleWeTrust
doi: "10.1111/j.1083-6101.2007.00351.x"
url: "https://academic.oup.com/jcmc/article/12/3/801-823/4582975"
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
generated_at: "14 Sept 2026, 16:30"
last_updated: "16 Sept 2026, 11:14"
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
source_type: "Context / supporting"
project_tags:
  - "Turin"
  - "Thesis"
literature_clusters:
  - "07 Interface authority, ranking and retrieval bias"
  - "11 Uncertainty and provenance display in interfaces"
constraints_source: "project/constraints.md"---
**RQ (supervisor verbatim):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**RQ (working):** How might testamentary traces of contested design knowledge be mobilised to activate the RCA’s DDR archive?  
**Secondary question:** To what extent ought the ideas that were current at the time to be revisited, and what can the lessons of that period tell us about how we should be thinking about design and design research today?  
**Model title:** Mobilising contested design knowledge in the DDR archive  
**Primary strand:** S3 — Surfacing and reactivating traces computationally  
**Sub-cluster:** S3.3 Retrieval-augmented inference  
**Source type:** Context / supporting  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** How organisation choices reveal or hide contested knowledge

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
I need foundational empirical evidence that the ordering of retrieved results influences what users inspect and select independently of the underlying relevance of those results.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin discussion of interface authority. It supports the argument that ranking is not merely a technical retrieval operation: result position influences attention and selection and therefore helps constitute the evidential field presented to the researcher.

**Why this term, not alternatives (1–2 lines):**  
I use *position bias* for the demonstrated tendency to privilege highly displayed results independently of judged relevance. I use *interface authority* for the wider archival consequence: visual and ranking arrangements can cause computational order to be read as evidential significance.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Pan et al. as foundational evidence that displayed rank alters attention and choice. Do not generalise directly from 2007 Google search behaviour to contemporary RAG interfaces without pairing it with later information-retrieval and provenance studies.

# Position + moment (2–4 lines)

Pan et al. write across human–computer interaction, information retrieval, communication and machine learning during the period when ranked Web search was becoming an ordinary information-access infrastructure. Their eye-tracking experiment deliberately manipulates Google result order to distinguish the effects of displayed position from human-judged relevance. The study therefore provides early behavioural evidence that ranked interfaces shape users’ judgements rather than simply reflecting relevance back to them.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
The paper treats Google search as a ranked-list interface in which users ultimately choose a document to inspect. Contemporary retrieval-augmented systems can hide this ranking behind a generated synthesis, making selection effects potentially less visible because users may never see the excluded or lower-ranked evidence.

# The author’s main move (1 sentence)

They try to isolate the influence of displayed rank from intrinsic relevance by experimentally reordering Google search results and measuring users’ gaze, scrutiny and click behaviour.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Display position independently influences which retrieved results users select.
- **Evidence (quote/paraphrase + page):** The researchers manipulated Google results into Normal, Swapped and Reversed conditions while retaining the same underlying documents. In the Swapped condition, participants clicked the item displayed first almost three times as often as Google's genuinely top-ranked result after it had been moved into second position. `[@Pan2007GoogleWeTrust, pp. 806–815]` Figure 3 on p. 814 shows the steep concentration of both views and clicks towards the top displayed positions across all three conditions.
- **Warrant (my words):** Because the underlying relevance ranking was deliberately decoupled from visual position, the resulting change in selection demonstrates that interface order itself contributes to perceived relevance and choice.
- **So what for my thesis (a reusable sentence):** The ordering of retrieved archival traces is epistemically consequential because position influences which evidence users inspect and select independently of the evidence's underlying relevance.
- **Practice cross-check:** Turin Semantic Atlas and Sources Integration: top-k ranking, nearest-neighbour order and evidence-panel position can privilege particular DDR documents or actors before any explicit historical judgement has been made.

## Claim 2

- **Claim (plain):** Users may recognise that retrieval quality has deteriorated yet still remain strongly influenced by ranking.
- **Evidence (quote/paraphrase + page):** Participants in the Reversed condition spent longer examining results, made more fixations, inspected more abstracts and returned to previously viewed results more often than participants in the Normal condition. `[@Pan2007GoogleWeTrust, pp. 812–813]` Yet their task success fell to 62%, compared with 85% in the Normal condition, and they continued to select highly positioned abstracts disproportionately. `[@Pan2007GoogleWeTrust, pp. 812–816]`
- **Warrant (my words):** Increased scrutiny does not necessarily overcome positional authority. Users can detect that something is wrong while still allowing interface order to structure their eventual choices.
- **So what for my thesis:** Researcher awareness of computational uncertainty cannot be assumed to neutralise ranking effects; evidence ordering itself should therefore be treated as a methodological design decision.
- **Practice cross-check:** Turin UAT should test whether researchers continue to privilege the first or nearest semantic result when lower-ranked traces provide stronger, contradictory or more historically specific evidence.

## Claim 3

- **Claim (plain):** Ranking can create feedback loops in which already-visible information becomes still more prominent.
- **Evidence (quote/paraphrase + page):** Pan et al. connect users' reliance on ranked position to wider concerns about unequal information visibility, arguing that ranking algorithms and user trust can reinforce one another so that already prominent sites receive further attention. `[@Pan2007GoogleWeTrust, pp. 817–818]` They consequently suggest making ranking mechanisms and relationships between results more visible to users. `[@Pan2007GoogleWeTrust, p. 818]`
- **Warrant (my words):** Ranked retrieval does not only respond to an information environment; user behaviour can reinforce the prominence created by ranking. In archival systems, computational prominence can similarly compound pre-existing visibility produced by appraisal, description and digitisation.
- **So what for my thesis:** Computational retrieval can reproduce or amplify archival prominence, so surfacing contested design knowledge requires attention to how ranking may repeatedly foreground already-visible actors and records.
- **Practice cross-check:** DDR feminist critique and Semantic Atlas: test whether highly documented or institutionally prominent actors consistently dominate semantic neighbourhoods while less-described labour, students or marginal voices remain peripheral.

# Definitions / terms this changes (only the ones that matter)

- **Rank:** the original sequence in which Google ordered results according to its algorithmic estimate of relevance. `[@Pan2007GoogleWeTrust, pp. 805–806]`
- **Position:** the actual physical location at which a result was displayed on the search page, experimentally separated from original Google rank. `[@Pan2007GoogleWeTrust, pp. 805–806]`
- **Relevance:** human judgement of how likely a result was to satisfy the information need represented by the search task. `[@Pan2007GoogleWeTrust, pp. 805–806]`
- **Position bias:** my term for the experimentally demonstrated effect whereby displayed location influences inspection and selection independently of judged relevance.
- **Interface authority:** my extension for archival research: the authority communicated implicitly through ordering, visual prominence and computational proximity before the underlying evidence has been critically assessed.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - The study gives strong foundational evidence that ranked position is not a neutral presentation choice.
  - Its experimental reversal of results is methodologically useful because it separates interface position from underlying relevance rather than simply observing ordinary click behaviour.
  - The finding that participants scrutinised poor rankings more closely but remained influenced by position is particularly important: awareness and attention do not automatically neutralise interface authority.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - For the DDR, I translate Web-search position bias into archival retrieval authority: top-ranked semantic traces should be treated as computationally proximate rather than historically important.
  - I extend their feedback-loop concern to archival visibility, where digitisation, metadata richness, retrieval ranking and researcher attention can compound one another.

- **What question it raises next (1–2 bullets):**
  - Should Turin deliberately avoid presenting semantic results as a simple numbered ranking when similarity scores do not correspond to historical importance?
  - Could comparative or neighbourhood views reduce the tendency to treat the first retrieved trace as the strongest historical evidence?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methodological discussion of semantic retrieval and interface authority, as foundational evidence that position can influence selection independently of relevance. Pair with Bernard and Balog for the contemporary fairness/transparency context.
- **Where I will name the title in running text (first-use rule):** “Pan et al.'s *In Google We Trust: Users’ Decisions on Rank, Position, and Relevance* provides early experimental evidence that users infer authority from ranked position even when that order conflicts with independently judged relevance.”
- **Link to my practice evidence (one concrete cross-reference):** Turin Semantic Atlas / semantic-neighbourhood UAT: perturb ranking order, top-k and similarity threshold and observe whether different traces become interpretatively dominant.
- **Workstreams →** semantic retrieval; interface authority; ranking bias; feminist critique; provenance
- **Deliverables →** Turin methods/discussion; thesis S3 critical-method section; Semantic Atlas UAT
- **Stakeholders →** archival researchers; historians; interface designers; cultural-heritage institutions

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The study uses 16 complete datasets from highly Google-familiar Cornell undergraduates in a 2007 Web-search environment, so it establishes a foundational position effect rather than contemporary behaviour in expert archival or generative-AI systems.
- **Risk if misused (1 sentence):** Treating Pan et al. as evidence that users blindly obey algorithmic rankings would overstate their findings: participants increased scrutiny when rankings deteriorated, even though that scrutiny did not fully overcome the effect of position.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 805–806, 812–818
- **First full note (write it out here):** Bing Pan, Helene Hembrooke, Thorsten Joachims, Lori Lorigo, Geri Gay, and Laura Granka, “In Google We Trust: Users’ Decisions on Rank, Position, and Relevance,” *Journal of Computer-Mediated Communication* 12, no. 3 (2007): 801–823, https://doi.org/10.1111/j.1083-6101.2007.00351.x.
- **Short note form:** Pan et al., “In Google We Trust,” [page].
- **One quote worth lifting (≤2 lines):** “subjects trust Google’s positioning more than their rational judgments” (p. 816).
- **One paraphrase worth keeping:** Even when users detect deteriorating retrieval quality and scrutinise results more closely, displayed position continues to influence which results they select, demonstrating that ranking itself communicates authority. (pp. 812–816)

# Related works (only if it directly connects)

- Bernard and Balog (2025), *A Systematic Review of Fairness, Accountability, Transparency, and Ethics in Information Retrieval* — contemporary review showing that ranking allocates visibility and that fairness, transparency and exposure require explicit treatment in IR systems.
- Cho and Lim (2026), *How Source Attribution Visualization Shapes User Attention and Preference* — extends the interface-attention problem from ranked results to provenance cues in AI-generated responses.
- Introna and Nissenbaum (2000), *Shaping the Web: Why the Politics of Search Engines Matters* — theoretical precursor concerning the political consequences of search-engine visibility and ranking.
- Hindman, Tsioutsiouliklis and Johnson (2003), *Googlearchy* — provides the concentration-of-visibility argument that Pan et al. connect to user ranking behaviour.
- Joachims (2002), *Optimizing Search Engines Using Clickthrough Data* — relevant to the feedback relationship between ranking, user clicks and subsequent information retrieval.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Use Pan et al. alongside Bernard and Balog rather than pursuing the older Web-search literature extensively; the contemporary review already carries the ranking problem forward into fairness, accountability and transparency.
- **What I will test or write next:** Add a ranking-sensitivity test to Semantic Atlas UAT: change top-k, similarity threshold and display order and record whether the same DDR actors, documents and interpretative relationships remain dominant.