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
last_updated: "03 Oct 2026"
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
theoretical_framework_area_id: "3"
theoretical_framework_area: "Critical computational approaches"
literature_cluster_id: "a"
literature_cluster: "Canon + intellectual lineage"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Canon + intellectual lineage"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
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
**Source type:** Context / supporting  
**Project/output tags:** Turin, Thesis  
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** How organisation choices reveal or hide contested knowledge

# Constraints (anti-bloat / anti-hallucination)
- No page cite → TODO (needs page / verification)
- Substantive source → at least 6 critical claims
- Claim → Evidence → Warrant → Boundary → Consequence
- Keep author claim, evidence-supported claim, and researcher inference distinct
- Practice cross-check required for each claim
- Final cross-source / cross-lens synthesis required

# Thesis job

**How this source moves the primary research question forward:** Pan et al. provide foundational experimental evidence that displayed rank affects attention and selection independently of underlying relevance. This makes ranking part of the epistemic conditions through which DDR traces become visible.

**How this source bears on the secondary question:** It cautions against treating contemporary search or semantic ranking as a neutral route to historically important DDR ideas.

**Where it sits in my argument:** Critical computational approaches / canon + intellectual lineage, especially ranking bias and interface authority.

**My benchmark for using it:** Use as foundational evidence of position effects; pair with contemporary retrieval literature before making claims about present-day RAG or expert archival use.

# Position + moment

Pan et al. write across HCI, information retrieval, communication and machine learning in the period when ranked web search was becoming ordinary information infrastructure. Their experiment deliberately reorders Google results to separate displayed position from judged relevance. [@Pan2007GoogleWeTrust, pp. 805–816]

# The author’s main move

They isolate position effects by manipulating result order and measuring gaze, scrutiny and click behaviour. [@Pan2007GoogleWeTrust, pp. 806–818]

# Six-claim evidence ledger

## Claim 1
- **Claim:** Display position independently influences result selection.
- **Author claim:** Users disproportionately choose highly displayed results even when relevance is experimentally decoupled from position.
- **Evidence-supported claim:** In the swapped condition, the item shown first was clicked nearly three times as often as Google's original top result after it moved to second position. [@Pan2007GoogleWeTrust, pp. 806–815]
- **Researcher inference:** Top-ranked DDR traces can acquire interpretative priority before historical judgement.
- **Warrant:** The evidence set is unchanged while choice changes with position.
- **Boundary:** Web search is not archival research.
- **Consequence:** Rank order should be treated as a methodological intervention.
- **Practice cross-check:** Turin top-k and nearest-neighbour displays should not imply historical importance.

## Claim 2
- **Claim:** Visual rank concentrates attention as well as clicks.
- **Author claim:** Higher positions receive disproportionate views and scrutiny.
- **Evidence-supported claim:** Figure 3 shows strong concentration of views and clicks toward the top across conditions. [@Pan2007GoogleWeTrust, p. 814]
- **Researcher inference:** Semantic result order shapes which DDR evidence enters the user's active evidential field.
- **Warrant:** Attention allocation affects what evidence is encountered and compared.
- **Boundary:** Eye-tracking patterns vary by interface and task.
- **Consequence:** Retrieval evaluation should consider exposure, not only relevance scores.
- **Practice cross-check:** Turin can compare which records remain visible under changes to k and ranking.

## Claim 3
- **Claim:** Users can detect poor rankings without fully overcoming position bias.
- **Author claim:** Reversed rankings trigger more scrutiny but still impair performance.
- **Evidence-supported claim:** Participants inspected more results and revisited items more often in the reversed condition, yet task success fell and high positions remained influential. [@Pan2007GoogleWeTrust, pp. 812–816]
- **Researcher inference:** Researcher awareness of computational mediation does not automatically neutralise interface authority.
- **Warrant:** More scrutiny and less bias are not equivalent outcomes.
- **Boundary:** The study involved highly Google-familiar undergraduates.
- **Consequence:** Critical literacy should be supported structurally, not assumed.
- **Practice cross-check:** Turin should expose similarity scores/provenance and allow comparative views beyond ranked lists.

## Claim 4
- **Claim:** Rank communicates an implicit judgement of relevance.
- **Author claim:** Users appear to infer quality from Google's ordering.
- **Evidence-supported claim:** Selection patterns persist even where experimentally manipulated order conflicts with independently judged relevance. [@Pan2007GoogleWeTrust, pp. 814–816]
- **Researcher inference:** A numbered semantic ranking may be read as evidential strength even when it only expresses vector proximity.
- **Warrant:** Interface order carries semantic authority beyond the retrieval calculation.
- **Boundary:** The paper studies branded Google search, where prior trust may intensify the effect.
- **Consequence:** DDR interfaces should label ranking semantics explicitly.
- **Practice cross-check:** Semantic proximity should be described as computational similarity, not historical significance.

## Claim 5
- **Claim:** Ranking can create a feedback loop between visibility and future attention.
- **Author claim:** The paper discusses how privileged position can reinforce itself through user behaviour and click data.
- **Evidence-supported claim:** The authors connect position-driven selection to the wider dynamics of search visibility. [@Pan2007GoogleWeTrust, pp. 816–818]
- **Researcher inference:** Metadata-rich or frequently retrieved DDR records could become increasingly dominant in exploratory research.
- **Warrant:** Visibility influences use, and use can influence later system or researcher choices.
- **Boundary:** The DDR research instrument does not necessarily retrain ranking from clicks.
- **Consequence:** Repeated prominence should not be mistaken for historical centrality.
- **Practice cross-check:** Turin should compare recurring top results against metadata density and corpus structure.

## Claim 6
- **Claim:** Position bias can be tested by deliberate perturbation.
- **Author claim:** The experiment's methodological contribution is to manipulate ranking while holding documents constant.
- **Evidence-supported claim:** Normal, swapped and reversed conditions separate interface order from underlying document relevance. [@Pan2007GoogleWeTrust, pp. 806–815]
- **Researcher inference:** DDR semantic interfaces can use rank perturbation as a robustness test.
- **Warrant:** Controlled reordering exposes whether interpretation depends on display order.
- **Boundary:** Historical inquiry also contains legitimate ordering by chronology or provenance.
- **Consequence:** UAT should vary arbitrary rank while preserving meaningful historical sequence.
- **Practice cross-check:** Turin can perturb top-k/display order and record whether the same actors and relationships remain dominant.

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

# Cross-source / cross-lens synthesis

Pan et al. provide a foundational mechanism for interface authority: rank affects attention and selection independently of relevance. Read with Bernard and Balog, this becomes a contemporary fairness and exposure problem; read with Boyd Davis, it becomes a humanities trust problem. For DDR, semantic similarity and display position must therefore remain visibly distinct from historical importance, and ranking sensitivity should be tested rather than assumed neutral.

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