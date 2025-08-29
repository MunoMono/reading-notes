#!/usr/bin/env bash
# Push changes to main and deploy to GitHub Pages
set -euo pipefail

# Stage everything
git add .

# Commit with a default message or allow override
MSG=${1:-"chore: update and deploy site"}
git commit -m "$MSG" || echo "Nothing to commit, skipping commit step."

# Push to main
git push origin main

# Deploy to gh-pages
npm run deploy