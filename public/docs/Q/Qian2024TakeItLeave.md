---
title: "Take it, leave it, or fix it: measuring productivity and trust in human-AI collaboration"
authors: "Qian, Crystal and Wexler, James"
year: 2024
journal: "Proceedings of the 29th International Conference on Intelligent User Interfaces"
citation_key: Qian2024TakeItLeave
doi: "10.1145/3640543.3645198"
url: "https://dl.acm.org/doi/10.1145/3640543.3645198"
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
literature_cluster_id: "b"
literature_cluster: "Operational literature"
zotero_filing_path: "Theoretical framework / Critical computational approaches / Operational literature"
project_tags:
  - "Turin"
  - "Thesis"
  - "Theoretical framework"
literature_clusters:
  - "07 Interface authority, ranking and retrieval bias"
  - "09 Human judgement and practice-led computational research"
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
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** When computational methods clarify or distort contested traces

# Constraints (anti-bloat / anti-hallucination)
- No page cite → TODO (needs page / verification)
- Substantive source → at least 6 critical claims
- Claim → Evidence → Warrant → Boundary → Consequence
- Keep author claim, evidence-supported claim, and researcher inference distinct
- Practice cross-check required for each claim
- Final cross-source / cross-lens synthesis required

# Thesis job

**How this source moves the primary research question forward:** Qian and Wexler show that perceived usefulness, stated trust and actual reliance can diverge in human–AI work. This supports researcher-in-the-loop DDR interpretation as an active verification practice rather than a nominal human oversight stage.

**How this source bears on the secondary question:** It cautions against allowing contemporary AI convenience to stand in for rigorous re-engagement with historical DDR evidence.

**Where it sits in my argument:** Critical computational approaches / operational literature, especially appropriate reliance and human judgement.

**My benchmark for using it:** Use for behavioural evidence about reliance, effort substitution and expertise; do not generalise programming-task outcomes directly to archival interpretation.

# Position + moment

Qian and Wexler study 76 software engineers using Bard and conventional documentation during a programming-language assessment, comparing observed behaviour with self-reported trust and productivity. [@Qian2024TakeItLeave, pp. 373–379]

# The author’s main move

They measure how conversational AI changes behaviour, perceived productivity and trust across task types and expertise levels. [@Qian2024TakeItLeave, pp. 373–379]

# Six-claim evidence ledger

## Claim 1
- **Claim:** Perceived productivity can diverge from measured efficiency.
- **Author claim:** Participants reported feeling faster and less cognitively burdened with Bard.
- **Evidence-supported claim:** They often spent more time using Bard than conventional resources despite reporting reduced effort and search time. [@Qian2024TakeItLeave, pp. 374–375]
- **Researcher inference:** Fluency and convenience in DDR should not be treated as evidence of methodological efficiency or quality.
- **Warrant:** Subjective ease and objective task performance are different outcomes.
- **Boundary:** Programming assessment tasks differ from archival research.
- **Consequence:** Turin evaluation should include evidential quality, not only user satisfaction.
- **Practice cross-check:** Generated answers should still require citation and provenance checking.

## Claim 2
- **Claim:** Reduced cognitive effort can encourage effort substitution.
- **Author claim:** Participants delegated more search and problem-solving work to the AI.
- **Evidence-supported claim:** The authors connect lower perceived effort with greater use of Bard during tasks. [@Qian2024TakeItLeave, pp. 374, 377]
- **Researcher inference:** Frictionless archival synthesis can discourage direct source inspection.
- **Warrant:** Convenience changes how much active reasoning the user performs.
- **Boundary:** Lower effort is not inherently harmful when the delegated task is reliable.
- **Consequence:** DDR interfaces should retain productive friction around evidential checking.
- **Practice cross-check:** Turin should make passage inspection easy but still explicit.

## Claim 3
- **Claim:** Reported distrust does not guarantee cautious behaviour.
- **Author claim:** Participants increasingly relied on Bard despite reporting lower trust after the task.
- **Evidence-supported claim:** Demonstrated dependence rose while self-reported trust declined. [@Qian2024TakeItLeave, pp. 375–376]
- **Researcher inference:** Critical awareness alone is not a sufficient safeguard against AI overreliance.
- **Warrant:** Stated attitude and observed behaviour can diverge.
- **Boundary:** Reliance patterns may change in expert historical work.
- **Consequence:** Evaluation should measure verification behaviour, not just trust ratings.
- **Practice cross-check:** Turin UAT should record whether users inspect sources before accepting a relation.

## Claim 4
- **Claim:** Expertise changes reliance patterns.
- **Author claim:** Experts were more likely than novices to use conventional documentation and distrust Bard in some task types.
- **Evidence-supported claim:** Expertise affected resource choice, especially for search-oriented questions. [@Qian2024TakeItLeave, pp. 373, 375–376]
- **Researcher inference:** Researcher expertise matters to how DDR AI support is used.
- **Warrant:** Prior knowledge changes when users seek or reject automation.
- **Boundary:** Expertise effects were task-specific rather than uniform.
- **Consequence:** One interaction design may not suit all research tasks.
- **Practice cross-check:** Turin should distinguish direct source lookup from interpretative synthesis.

## Claim 5
- **Claim:** Expertise does not eliminate susceptibility to misleading AI.
- **Author claim:** Both experts and novices could be led astray.
- **Evidence-supported claim:** Participants at different expertise levels sometimes changed correct answers to incorrect ones after consulting Bard. [@Qian2024TakeItLeave, pp. 375–376]
- **Researcher inference:** Expert oversight must itself be supported by evidence transparency.
- **Warrant:** Domain knowledge reduces some risks without eliminating automation influence.
- **Boundary:** The magnitude of this effect may differ in archival research.
- **Consequence:** Provenance should support rejection as well as acceptance.
- **Practice cross-check:** Turin source previews should make it easy to contest generated synthesis.

## Claim 6
- **Claim:** Appropriate reliance is a better objective than greater trust.
- **Author claim:** The authors explicitly recommend designing for appropriate trust.
- **Evidence-supported claim:** Their conclusion distinguishes correct use of useful assistance from indiscriminate confidence. [@Qian2024TakeItLeave, p. 378]
- **Researcher inference:** DDR should aim for evidence-proportionate reliance rather than persuasive confidence.
- **Warrant:** Trust is useful only when calibrated to output quality.
- **Boundary:** Appropriate reliance remains difficult to measure in contested interpretation.
- **Consequence:** UAT should reward acceptance of supported outputs and rejection of unsupported ones.
- **Practice cross-check:** Turin can test whether users preserve uncertainty and reject unwarranted claims.

# Definitions / terms this changes (only the ones that matter)

- **Appropriate trust:** accepting correct automated assistance and rejecting incorrect advice rather than maximising general confidence in the system. `[@Qian2024TakeItLeave, p. 378]`
- **Automation complacency:** reduced monitoring of an automated system below an optimal level, with observable negative effects on performance. The authors argue that their observed effort substitution and errors satisfy this definition. `[@Qian2024TakeItLeave, p. 377]`
- **Effort substitution:** delegating cognitive or search effort to AI, reducing the amount of active work performed by the user. `[@Qian2024TakeItLeave, pp. 374, 377]`
- **Demonstrated trust:** reliance or rejection inferred from what users actually do with a resource rather than what they report believing about it. `[@Qian2024TakeItLeave, p. 375]`
- **Appropriate reliance:** my preferred term for the DDR context: using AI-mediated interpretation where it adds evidential value while preserving researcher scrutiny and rejecting claims that exceed the available record.

# My response (no antithesis; state positives)

- **What I take from this (1–3 bullets):**
  - Human oversight is behaviourally complex: critical attitudes towards AI do not necessarily produce critical use.
  - The distinction between demonstrated and perceived trust is particularly valuable for evaluating a research interface.
  - Task type matters. Direct factual lookup and open-ended interpretative problems may require different relationships between AI assistance, documentary evidence and human judgement.

- **What I reframe / adjust (1–2 bullets, stated positively):**
  - For archival research, I translate their *search versus solve* distinction into source-locating versus interpretative inquiry: some questions are answerable directly from a document, while others require bounded synthesis across traces.
  - I treat researcher expertise as one component of reliability, supplemented by provenance, evidential constraint and interface mechanisms that encourage active verification.

- **What question it raises next (1–2 bullets):**
  - Does repeated use of the Turin system increase researchers’ dependence on generated synthesis even when they understand its limitations?
  - Can provenance cues and scoped missingness create productive cognitive friction that prevents effort substitution without making the research interface unnecessarily burdensome?

# Integration hooks (make it actionable)

- **Where I will cite it (exact paragraph/job):** In the Turin methods/discussion section establishing why human-in-the-loop oversight cannot be reduced to simply placing an expert at the end of the pipeline; the interface must support appropriate reliance and active verification.
- **Where I will name the title in running text (first-use rule):** “Qian and Wexler's *Take It, Leave It, or Fix It* demonstrates that users' expressed trust in conversational AI can diverge substantially from their actual reliance on it.”
- **Link to my practice evidence (one concrete cross-reference):** Turin UAT: compare whether users merely open generated answers or actively inspect citations, source passages and evidential limits before accepting a suggested historical relationship.
- **Workstreams →** researcher-in-the-loop; retrieval-augmented inference; interface authority; provenance; UAT
- **Deliverables →** Turin methodological discussion; thesis S3 human-AI method; interface evaluation criteria
- **Stakeholders →** archival researchers; historians; digital-humanities researchers; designers of research-facing AI systems

# Boundary + risk (short, practical)

- **Boundary (1 sentence):** The experiment concerns 76 software engineers completing a short Java assessment with Bard, so its behavioural findings cannot be assumed to transfer directly to expert historical research or sustained archival interpretation.
- **Risk if misused (1 sentence):** Treating the study as evidence that AI necessarily reduces expert performance would overstate the results: effects varied substantially by expertise and task type, and AI improved novice performance on some open-ended questions.

# Cross-source / cross-lens synthesis

Qian and Wexler complicate the simple idea that a human in the loop is enough. Read with Carl and Cho, effective oversight requires concrete access to evidence; read with Grimes and Xu, user attitudes and behaviour can diverge from system reality. For DDR, appropriate reliance therefore means designing the interface so researchers can verify, reject and qualify AI-mediated interpretations rather than merely remain nominally responsible for them.

# Methods spine tags (tick what it actually touches)

- [x] Framing and theory
- [x] Study design
- [x] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)

- **Key pages to reuse:** pp. 373–379
- **First full note (write it out here):** Crystal Qian and James Wexler, “Take It, Leave It, or Fix It: Measuring Productivity and Trust in Human-AI Collaboration,” in *Proceedings of the 29th International Conference on Intelligent User Interfaces (IUI ’24)* (New York: Association for Computing Machinery, 2024), 370–384, https://doi.org/10.1145/3640543.3645198.
- **Short note form:** Qian and Wexler, “Take It, Leave It, or Fix It,” [page].
- **One quote worth lifting (≤2 lines):** “Designing for appropriate trust, not greater trust” (p. 378).
- **One paraphrase worth keeping:** Users can become increasingly dependent on conversational AI even while reporting declining trust, and both novices and experts remain capable of accepting misleading machine advice. (pp. 375–379)

# Related works (only if it directly connects)

- Lee and See (2004), *Trust in Automation: Designing for Appropriate Reliance* — foundational framework underlying the paper's distinction between appropriate and excessive trust.
- Buçinca, Malaya and Gajos (2021), *To Trust or to Think* — directly relevant to the use of cognitive forcing functions to reduce overreliance on AI-assisted decisions.
- Grimes, Schuetzler and Giboney (2021), *Mental Models and Expectation Violations in Conversational AI Interactions* — complementary evidence that expectations about capability affect user evaluation of conversational systems.
- Cho and Lim (2026), *How Source Attribution Visualization Shapes User Attention and Preference* — extends the human-interaction problem to whether provenance cues are actually noticed and used.
- Łajewska and Balog (2026), *Trust Me on This* — shows that evidential explanations can recalibrate users towards better-supported RAG outputs while remaining sensitive to task and prior knowledge.
- Carl et al. (2026), *Enhancing Clinicians’ Trust in Large Language Models via Transparent Source Attribution* — provides a professional-domain example of designing source inspection into the interface to support verification.

# Follow-ups (next actions, not vibes)

- **What I will read next:** Buçinca, Malaya and Gajos (2021) selectively, because their idea of cognitive forcing may provide a useful counterpoint to the frictionless conversational interaction that Qian and Wexler associate with effort substitution and complacency.
- **What I will test or write next:** Add an *appropriate-reliance* dimension to Turin UAT: measure not only whether users trust the generated interpretation but whether they inspect its evidence, reject unsupported claims, preserve uncertainty and recognise when direct documentary lookup is preferable to synthesis.