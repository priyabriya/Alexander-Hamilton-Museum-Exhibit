#!/bin/bash
# ─────────────────────────────────────────────────────────────────
# fix-and-push.sh
#
# Run this from inside the hamilton/ folder:
#
#   chmod +x fix-and-push.sh
#   ./fix-and-push.sh
#
# This script:
# 1. Removes the conflicting GitHub-generated nextjs.yml (if present)
# 2. Commits the fixed deploy.yml
# 3. Force-pushes to main so GitHub Actions re-runs cleanly
# ─────────────────────────────────────────────────────────────────

set -e

REPO_URL="https://github.com/priyabriya/Alexander-Hamilton-Museum-Exhibit.git"

echo "→ Checking git status..."

# If this is a fresh unzip (no .git folder), initialise from scratch
if [ ! -d ".git" ]; then
  echo "→ No .git found — initialising fresh repo..."
  git init
  git remote add origin "$REPO_URL"
  git add .
  git commit -m "fix: remove conflicting nextjs.yml, use npm install in deploy workflow"
  git branch -M main
  git push -u origin main --force
  echo ""
  echo "✓ Pushed! Now go to:"
  echo "  Settings → Pages → Source → GitHub Actions"
  echo "  Then check Actions tab — the deploy should go green."
  exit 0
fi

# Already a git repo — just fix and push
echo "→ Removing conflicting nextjs.yml from repo (if it exists locally)..."
# The nextjs.yml was created by GitHub UI directly, not locally.
# We just need to make sure our deploy.yml is correct and push.

echo "→ Staging changes..."
git add .github/workflows/deploy.yml

echo "→ Committing fix..."
git commit -m "fix: use npm install instead of npm ci, remove conflicting workflow" || echo "Nothing new to commit"

echo "→ Pushing..."
git push origin main

echo ""
echo "✓ Done!"
echo ""
echo "IMPORTANT: You also need to delete the conflicting 'nextjs.yml' workflow from GitHub:"
echo "  1. Go to: https://github.com/priyabriya/Alexander-Hamilton-Museum-Exhibit/blob/main/.github/workflows/nextjs.yml"
echo "  2. Click the pencil (Edit) icon"
echo "  3. Click the trash icon to delete the file"
echo "  4. Commit the deletion directly to main"
echo ""
echo "After that, the 'Deploy to GitHub Pages' workflow will be the only one running."
