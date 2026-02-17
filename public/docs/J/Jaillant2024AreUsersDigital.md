---
title: "Are Users of Digital Archives Ready for the AI Era? Obstacles to the Application of Computational Research Methods and New Opportunities"
authors: "Jaillant, Lise and Aske, Katherine"
year: 2024
journal: "Journal on Computing and Cultural Heritage"
citation_key: Jaillant2024AreUsersDigital
doi: "10.1145/3631125"
url: ""
bibliography: ../../refs/library.bib
csl: "https://www.zotero.org/styles/chicago-fullnote-bibliography"
link-citations: true
category: 3.2-Classification-as-ethics / politics

project_rq_verbatim: "how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?"
project_rq_working: "How might testamentary traces of epistemic shift be used as an approach to activate the RCA’s DDR archive?"
model_title: "How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction"
model_strand: "S3"
model_strand_label: "How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics"
last_updated: "17 Feb 2026, 15:52"---
**RQ (supervisor verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**RQ (working):** How might testamentary traces of epistemic shift be used as an approach to activate the RCA’s DDR archive?  
**Model title:** How epistemic shift becomes observable across design methods, institutional archives, and multimodal computational reconstruction  
**Primary strand:** S3 — How epistemic shift can be reconstructed and made legible through multimodal ML and visual analytics  

**Seams to watch (pick 1):**
- How computational methods expose or amplify epistemic shift

# Constraints (anti-bloat / anti-hallucination)
- No page cite → write TODO (needs page)
- Max 3 claims: Claim → Evidence → Warrant → So-what
- Each claim must include a practice cross-check (or TODO)
- No antithesis lists: write Boundary + Risk
- If it doesn’t serve the RQ/model: OUT OF SCOPE (why)

---

# Thesis job (do this first)
**Project research question(s) this serves (paste verbatim):** how might a testament epistemetic shift be used as an approach to activate the RCAs DDR archive?  
**Why I’m reading this now (1 sentence):** It explains why “AI-ready archives” fail in practice—skills, access, formats, and transparency—so my DDR activation doesn’t become a tool-led fantasy.  
**Where it sits in my argument (chapter/section + what it helps me say):** Lit review / methods framing: “Activation” requires user-facing infrastructure + training + provenance, not just ML capability.  
**Why this term, not alternatives (1–2 lines):** Their focus on *user experience* and institutional constraints gives me testable conditions for “activation,” beyond abstract DH claims.  
**My benchmark for using it (1–2 criteria I will apply):** I will only reuse points that are (a) tied to reported user/practitioner evidence and (b) convertible into DDR design requirements (access, format, documentation, training).

# Position + moment (2–4 lines)
Jaillant and Aske write from digital humanities / digital archives user studies (UK institution; respondents largely Europe/North America). The paper is positioned at the “AI era” moment where computational methods are framed as opportunity, but the authors insist on studying who can actually use them and why. They treat infrastructure, skills, and transparency as the enabling layer, not a footnote.  
**Canon assumptions to problematise / update for 2026 (1–2 lines):** “If we build ML tools, users will come” is treated as false; readiness is social, institutional, and infrastructural, not just technical. ``[@Jaillant2024AreUsersDigital, p. 14]``

# The author’s main move (1 sentence)
They try to explain uneven adoption of computational methods in digital archives by grounding “AI opportunity” in user/practitioner evidence about access, formats, skills, incentives, and transparency.

# Three-claim evidence ledger (max 3 claims)

## Claim 1
- **Claim (plain):** The biggest blocker is not “AI capability” but *access + format*: archives are often hard to access, locked, or shared in formats that are unusable for many researchers.
- **Evidence (quote/paraphrase + page):** They conclude that archives are “difficult to access, or even locked altogether,” and that shared data formats are “not always user-friendly,” giving WARC as an example that even computationally skilled historians rarely use. ``[@Jaillant2024AreUsersDigital, p. 14]``
- **Warrant (my words):** If data can’t be accessed or is materially packaged in specialist formats, computational methods remain theoretical: the infrastructure blocks the method.
- **So what for my thesis (reusable sentence):** “Activating” DDR via AI must begin with *access and usable representations* (formats, documentation, interfaces), otherwise epistemiv shift remains illegible regardless of model sophistication. ``[@Jaillant2024AreUsersDigital, p. 14]``
- **Practice cross-check:** TODO — identify DDR material currently “locked” (rights, access rules) + list current formats (PDF scans? catalog exports? database dumps?) and where they fail users.

## Claim 2
- **Claim (plain):** Humanities researchers often lack embedded computational training; many become self-taught, which slows adoption and increases dependence on external specialists/tools.
- **Evidence (quote/paraphrase + page):** Interviewees report that many data tools require programming “which just aren’t really taught in humanity subjects,” and multiple researchers describe being “self-taught” in Python and methods. ``[@Jaillant2024AreUsersDigital, p. 9]``
- **Warrant (my words):** When skills are optional and informal, computational work becomes fragile (uneven, slow, hard to reproduce) and risks being dropped in favour of traditional methods.
- **So what for my thesis:** DDR activation needs a *scaffolded pathway* (from no-code exploration → reproducible workflows), not an assumption of baseline ML/programming literacy. ``[@Jaillant2024AreUsersDigital, p. 9]``
- **Practice cross-check:** TODO — define “minimum viable competence” for DDR users (e.g., search + export + basic analysis) and what training artefacts I can ship (tutorial notebooks, worked examples, “how to read outputs” guides).

## Claim 3
- **Claim (plain):** Digitisation and metadata can perpetuate cultural/racial biases; transparency and critical ML use are necessary so users understand what was done, what is missing, and what is distorted.
- **Evidence (quote/paraphrase + page):** They note that digitisation/metadata can reproduce “outdated structures” and colonial-era language, creating discoverability problems and bias risks. ``[@Jaillant2024AreUsersDigital, p. 8]``
- **Evidence (quote/paraphrase + page):** Interviewees frame transparency as documenting “what has been done, what is missing,” and emphasise conversations with represented communities as part of being transparent. ``[@Jaillant2024AreUsersDigital, p. 9]``
- **Warrant (my words):** If DDR is to become a “testament” of epistemiv shift, users need provenance visibility; otherwise AI-driven indexing/analysis looks authoritative while smuggling institutional bias.
- **So what for my thesis:** DDR activation must couple AI reconstruction with *provenance + bias documentation* so “testamentary traces” are contestable rather than treated as neutral facts. ``[@Jaillant2024AreUsersDigital, pp. 8–9]``
- **Practice cross-check:** TODO — create a DDR “transparency layer” spec: what I will disclose (selection criteria, OCR errors, redactions, missingness, model limits) and where in the interface/reporting it appears.

# Definitions / terms this changes (only the ones that matter)
- **Born-digital vs digitised:** They distinguish born-digital records (emails, PDFs, Word docs, AV files) from digitised materials originating on paper. ``[@Jaillant2024AreUsersDigital, p. 14]``
- **Transparency (operational):** Being explicit about processes, missingness, and ongoing issues; not just “open access,” but documented conditions of production and use. ``[@Jaillant2024AreUsersDigital, p. 9]``

# My response (no antithesis; state positives)
- **What I take from this (1–3 bullets):**
  - “Activation” is infrastructural: access, formats, and usability come before (or alongside) ML. ``[@Jaillant2024AreUsersDigital, p. 14]``
  - Training is a design requirement, not a personal failing; build pathways that reduce self-teaching overhead. ``[@Jaillant2024AreUsersDigital, p. 9]``
  - Provenance/transparency is the condition for AI outputs to be usable as evidence of drift. ``[@Jaillant2024AreUsersDigital, pp. 8–9]``
- **What I reframe / adjust (1–2 bullets, stated positively):**
  - I will treat “testament” as a *documented trace* (with provenance + missingness) rather than a rhetorical flourish.
  - I will define DDR activation as *user capability + contestability*, not just discovery/search.
- **What question it raises next (1–2 bullets):**
  - What is the smallest “activation bundle” (data access + interface + documentation + training artefact) that lets a DDR user produce a defensible drift claim?

# Integration hooks (make it actionable)
- **Where I will cite it (exact paragraph/job):** Lit review section on “AI-ready archives” + methods chapter justification for provenance/training requirements.
- **Where I will name the title in running text (first-use rule):** First mention in lit review: write full title + authors; afterwards “Jaillant and Aske (2024).”
- **Link to my practice evidence (one concrete cross-reference):** TODO — DDR export/format audit note + one example of a record where metadata language distorts discoverability.
- **Workstreams →** S3 (reconstruction methods) with S2 dependencies (material structure, description).
- **Deliverables →** “DDR transparency layer” + “minimum viable training pathway” + “format/access requirements checklist.”
- **Stakeholders →** DDR archivists, DH researchers, RCA communities represented in DDR, ML collaborators.

# Boundary + risk (short, practical)
- **Boundary (1 sentence):** Findings are based on a relatively small survey/interview set, largely in Europe/North America; apply as design heuristics, not universal law. ``[@Jaillant2024AreUsersDigital, p. 2]``
- **Risk if misused (1 sentence):** If I cite this as proof that “users aren’t ready,” I could justify gatekeeping; the paper instead supports designing infrastructure and training to widen access. ``[@Jaillant2024AreUsersDigital, pp. 9, 14]``

# Methods spine tags (tick what it actually touches)
- [ ] Framing and theory
- [ ] Study design
- [ ] Data collection and instruments
- [x] Analysis and models
- [x] Synthesis and interpretation
- [x] Reporting and communications

# Chicago NB payload (capture what you’ll need later)
- **Key pages to reuse:** p. 1 (aim + scope), p. 2 (methods + Global North caveat), pp. 8–10 (bias/training/teamwork), p. 14 (conclusion + WARC + recommendations)
- **First full note (write it out here):**  
  Lise Jaillant and Katherine Aske, “Are Users of Digital Archives Ready for the AI Era? Obstacles to the Application of Computational Research Methods and New Opportunities,” *Journal on Computing and Cultural Heritage* 16, no. 4 (2024): Article 87, https://doi.org/10.1145/3631125.
- **Short note form:**  
  Jaillant and Aske, “Are Users of Digital Archives Ready,” p. __.
- **One quote worth lifting (≤2 lines):** TODO (needs page) — pick a short line about transparency or training.
- **One paraphrase worth keeping:** Access/format barriers + lack of embedded training keep computational work uneven; transparency/provenance is the condition for trustworthy AI-mediated access. ``[@Jaillant2024AreUsersDigital, pp. 8–10, 14]``

# Related works (only if it directly connects)
- Gooding (2022) “Critically Addressable Data…” (for user studies + data critique link)
- Schwartz and Cook (2002) (power, archival description, modern memory) for bias/institutional framing

# Follow-ups (next actions, not vibes)
- What I will read next: TODO — pick one paper on WARC usability / web archive methods, or a provenance/interpretability paper for S3.
- What I will test or write next: Draft DDR “activation requirements” checklist (access, formats, transparency layer, training pathway) and map to one DDR collection as a pilot.
