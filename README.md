# Reading Notes

A live, browsable **reading notes library** powered by **React, Vite, and IBM Carbon Design System**.  
It renders Markdown notes (one per paper), grouped A–Z by author, with search, filtering, and light/dark theming.

Live version: [https://munomono.github.io/reading-notes/](https://munomono.github.io/reading-notes/)

---

## 📚 About

This repository contains my **PhD reading notes**, exported from Zotero’s `library.bib` and managed as Markdown files.  
Each note contains structured prompts (purpose, methodology, findings, etc.) and is browsable through a Carbon-based React app.

- **Data source**: `refs/library.bib` (Better BibTeX export from Zotero)  
- **Framework**: React + Vite  
- **UI**: IBM Carbon Design System (`@carbon/react`, `@carbon/styles`)  
- **Content**: Markdown notes in `public/docs/A-Z/`  

---

## 🚀 Usage

- **View online**:  
  [https://munomono.github.io/reading-notes/](https://munomono.github.io/reading-notes/)

- **Run locally**:

```bash
git clone https://github.com/MunoMono/reading-notes.git
cd reading-notes
npm install
npm run dev
```

- **Build for production**:

```bash
npm run build
npm run preview
```

- **Deploy manually to GitHub Pages**:

```bash
npm run push:deploy -- "commit message"
```

Deployment pushes to the `gh-pages` branch and is hosted via GitHub Pages.

---

## 🧩 Features

- **A–Z navigation**  
  Notes are grouped by first author’s surname initial (folders `public/docs/A … Z`).

- **Bibliographic metadata**  
  Each note has YAML frontmatter (title, authors, year, journal, DOI, etc.) pulled automatically from `refs/library.bib`.

- **Homepage**  
  Search box + pills for filtering by letter. Entries listed with *Author (Year) Title — Journal*.

- **Note view**  
  Individual note pages show:
  - Metadata (title, authors, year, journal, DOI)
  - Markdown body (Purpose, Methodology, Findings, etc.)
  - Carbon-styled headings and lists
  - Breadcrumbs for easy navigation

- **Theme toggle**  
  Switch between Carbon **g10** (light) and **g90** (dark).

---

## ✍️ Creating a new note

1. Make sure `refs/library.bib` is up to date (exported via Better BibTeX from Zotero).  
2. Run the helper script:

```bash
./scripts/newnote.sh <citekey|doi|url> [--build]
```

Examples:

```bash
# Using a Zotero citekey
./scripts/newnote.sh Valtonen2020ApproachingChangeDesign --build

# Using a DOI
./scripts/newnote.sh 10.1016/j.sheji.2020.08.004 --build
```

- This creates a new Markdown file in the correct A–Z folder under `public/docs/`.  
- The `--build` flag will automatically refresh `public/docs/index.json`.  
- Each note includes a **structured template** for Purpose, Methodology, Findings, etc.  
- You can then edit the Markdown directly to add your notes.

---

## 🛠 Development

Key source files:

- `src/App.jsx` — app shell, routing, theme toggle  
- `src/pages/Home.jsx` — grouped A–Z listing + search  
- `src/pages/Doc.jsx` — renders a single note with metadata + Markdown  
- `src/styles/` — Carbon overrides (`index.scss`, `_carbon-markdown.scss`)  
- `scripts/newnote.sh` — CLI helper to generate notes from `refs/library.bib`  

Run locally with:

```bash
npm run dev
```

---

## 🔖 License

- Notes and bibliographic **content**: [CC BY 4.0](./LICENSE-CC-BY-4.0.txt)  
- Application code and configuration: [MIT](./LICENSE)
