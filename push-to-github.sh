#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# push-to-github.sh
#
# Run this from INSIDE the hamilton/ folder after unzipping:
#
#   cd hamilton
#   chmod +x push-to-github.sh
#   ./push-to-github.sh
#
# It will initialise git, commit everything, and push to your repo.
# ─────────────────────────────────────────────────────────────────

set -e

REPO_URL="https://github.com/priyabriya/Alexander-Hamilton-Museum-Exhibit.git"

echo "→ Initialising git..."
git init

echo "→ Adding remote origin..."
git remote add origin "$REPO_URL"

echo "→ Staging all files..."
git add .

echo "→ Creating initial commit..."
git commit -m "feat: initial Hamilton museum exhibit — full Next.js app

- Next.js 15 App Router with TypeScript strict mode
- Tailwind CSS v4 with custom parchment/navy/gold theme
- 4 pages: homepage, /artifacts, /timeline, /audience
- Components: Nav, Hero, ArtifactCard, TimelineList, AudienceCard, SectionLabel
- All content typed in lib/data.ts
- Vitest unit tests for all data
- GitHub Actions CI/CD → deploys to GitHub Pages on push to main
"

echo "→ Pushing to main..."
git branch -M main
git push -u origin main

echo ""
echo "✓ Done! Your site is pushed to:"
echo "  https://github.com/priyabriya/Alexander-Hamilton-Museum-Exhibit"
echo ""
echo "To enable GitHub Pages:"
echo "  1. Go to Settings → Pages in your repo"
echo "  2. Set Source to 'GitHub Actions'"
echo "  3. The next push will deploy your live site automatically."
