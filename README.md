# Alexander Hamilton:Power of the Pen

A museum-style website about Alexander Hamilton's life, writings, and the institutions he created. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

**Live site:** Deployed via GitHub Pages on every push to `main`.


## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, About, Artifacts preview, Timeline preview, Audience |
| `/artifacts` | Full artifacts gallery with all 4 primary sources |
| `/timeline` | Full chronological timeline (8 events) |
| `/audience` | Three entry routes for different visitor types |

---

## Quality Commands

```bash
npm run typecheck      # TypeScript check
npm run lint           # ESLint
npm run test           # Vitest unit tests
npm run format:check   # Prettier check
npm run build          # Production build
```

---

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.

To enable GitHub Pages on your fork:
1. Go to **Settings → Pages**
2. Set **Source** to **GitHub Actions**

---

## Content

All content is managed in `lib/data.ts` as typed TypeScript. To update or add artifacts, timeline events, or audience cards, edit that file — no other files need to change.

---

## Sources

- [National Archives — Founders Online](https://founders.archives.gov/)
- [Library of Congress — Report on Public Credit](https://www.loc.gov/resource/bdsdcc.22001/)
- [National Park Service — Hamilton Grange](https://www.nps.gov/hagr/index.htm)
- [Wikipedia — The Federalist Papers](https://en.wikipedia.org/wiki/The_Federalist_Papers)
