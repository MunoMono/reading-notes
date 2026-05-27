# Reading Notes v2

This is a fresh start of the reading-notes project. The full v1 remains on the branch `archive/v1` (tag: `v1-final`).

## Getting started

```
npm install
npm run dev
```

The reader UI is restored; `public/docs` is empty apart from `index.json` (so no entries). Add new markdown files under `public/docs/<Letter>/your-file.md` and rerun the dev server to see them.

## May 2026 update

- Added a Carbon date-range filter with preset chips on the home page for browsing notes by note date.
- Added and indexed a new batch of notes, including archive/AI, RAG, UMAP, explainability, and multilingual cultural heritage references.
- GitHub Pages deploy is live at `https://munomono.github.io/reading-notes/`.

## Build and deploy

```sh
npm run build:docs-index
npm run build
./scripts/push-deploy.sh "chore: deploy latest changes"
```

`./scripts/push-deploy.sh` now rebuilds the docs index before committing, then pushes `main`, builds the site, and publishes `dist/` to `gh-pages`.
