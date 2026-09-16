---
title: "Take It, Leave It, or Fix It: Measuring Productivity and Trust in Human-AI Collaboration"
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
  - "09 Human judgement and practice-led computational research"
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
**Literature clusters:** 07 Interface authority, ranking and retrieval bias; 09 Human judgement and practice-led computational research; 11 Uncertainty and provenance display in interfaces  

**Seam to watch:** When computational methods clarify or distort contested traces

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
I need empirical evidence about how expertise, task type and conversational AI affect human judgement, especially where users may rely on generated output despite recognising that the system is fallible.

**Where it sits in my argument (chapter/section + what it helps me say):**  
S3.3 retrieval-augmented inference and the Turin argument for researcher-in-the-loop interpretation. It helps establish that access to AI does not uniformly improve judgement and that user confidence, perceived efficiency and actual performance can diverge.

**Why this term, not alternatives (1–2 lines):**  
I use *appropriate reliance* rather than *trust* as the primary design objective. The methodological requirement is that researchers accept useful AI assistance and reject unsupported or misleading output in proportion to its evidential quality.

**My benchmark for using it (1–2 criteria I will apply):**  
Use Qian and Wexler where I need behavioural evidence that human judgement remains necessary and that apparent confidence or convenience can encourage overreliance. Do not generalise programming-task performance directly to archival interpretation.

# Position + moment (2–4 lines)

Qian and Wexler write from human–computer interaction and Google Research at the beginning of widespread professional adoption of conversational generative AI. Their mixed-methods study observes 76 software engineers completing a programming-language assessment with Bard and conventional documentation. The study is valuable because it compares demonstrated behaviour with users’ own perceptions of trust, productivity and efficiency rather than treating self-report as equivalent to actual reliance.

**Canon assumptions to problematise / update for 2026 (1–2 lines):**  
Human oversight should not be assumed to provide an automatic safeguard against AI error. Users may delegate cognitive effort, seek confirmation or increasingly depend on generated advice even when experience has given them reasons to distrust it.

# The author’s main move (1 sentence)

They try to measure the effects of conversational AI on productivity and trust by comparing how software engineers actually use, accept, reject and revise AI advice across task types and levels of expertise.

# Three-claim evidence ledger (max 3 claims)

## Claim 1

- **Claim (plain):** Users can feel more productive and efficient with conversational AI even when measured efficiency does not improve.
- **Evidence (quote/paraphrase + page):** Participants spent significantly more time using Bard than conventional resources, particularly on solve-type questions, yet reported that Bard made them faster, reduced mental effort and reduced time spent searching for information. `[@Qian2024TakeItLeave, pp. 374–375]` Table 2 on p. 374 makes the divergence particularly clear: perceived productivity and reduced cognitive effort increased despite the measured time cost.
- **Warrant (my words):** Ease of interaction and reduced cognitive effort can be experienced as productivity independently of objective task performance. Perceived usefulness is therefore an unreliable proxy for epistemic quality.
- **So what for my thesis (a reusable sentence):** The apparent fluency and convenience of AI-mediated archival research should not be treated as evidence that the resulting interpretation is more efficient, accurate or methodologically sound.
- **Practice cross-check:** Turin: a fluent research answer may feel faster and more useful than manually examining multiple DDR sources, but citation, provenance and researcher validation remain necessary before that synthesis is accepted.

## Claim 2

- **Claim (plain):** Human users can increasingly depend on AI even while becoming less trusting of it.
- **Evidence (quote/paraphrase + page):** Participants increasingly relied on Bard as the exam progressed, particularly novices, even though post-task self-reports showed significantly reduced trust in the system. `[@Qian2024TakeItLeave, pp. 375–376]` The authors describe this mismatch between demonstrated and perceived behaviour as evidence that users are not fully cognisant of their interaction with the system. Table 6 on p. 379 summarises the result as increasing dependence despite susceptibility to inappropriate trust.
- **Warrant (my words):** Self-reported scepticism does not guarantee cautious behaviour. Repeated exposure, convenience and cognitive delegation can produce reliance even when users consciously recognise system limitations.
- **So what for my thesis:** Researcher-in-the-loop design must support observable verification behaviours rather than assuming that critical awareness alone will prevent overreliance on AI-mediated interpretation.
- **Practice cross-check:** Turin interface: requiring access to source passages, preserving provenance and making evidential limits explicit gives the researcher concrete opportunities to verify or reject generated synthesis rather than relying on a general instruction to remain critical.

## Claim 3

- **Claim (plain):** Expertise changes how people use AI, but expertise does not eliminate susceptibility to misleading advice.
- **Evidence (quote/paraphrase + page):** Experts were more likely than novices to distrust Bard and rely on conventional documentation, particularly for search-type questions. However, participants across expertise levels were equally likely to be led astray and incorrectly trust Bard, and both experts and novices sometimes changed correct answers to incorrect answers after consulting the AI. `[@Qian2024TakeItLeave, pp. 373, 375–376]` The authors consequently recommend designing for “appropriate trust, not greater trust”. `[@Qian2024TakeItLeave, p. 378]`
- **Warrant (my words):** Domain expertise improves some decisions about when to reject automation but does not make the expert immune to confident or confirmatory machine output.
- **So what for my thesis:** Expert researcher oversight remains essential but should itself be supported by evidentially transparent system design; expertise should not be treated as a sufficient safeguard against generated overreach.
- **Practice cross-check:** Turin: the historian or researcher retains interpretative authority, while citations, source previews, uncertainty and scoped missingness provide concrete evidence against which AI-generated relationships can be tested.

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