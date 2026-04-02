# Alexander Hamilton: Power of the Pen

A museum-style website about Alexander Hamilton's life, writings, and the institutions he created. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

**Live site:** Deployed via GitHub Pages on every push to `main`.

1. Orchestration Process
This project was built using a structured AI orchestration workflow modeled on the reference repository kaw393939/nextjs_ai_orchestration_spec_sprint_process (Professor Keith Williams’ GitHub Repository). Rather than issuing vague prompts and accepting whatever emerged, the process treated the AI as a directed engineering instrument guided by explicit specifications and verified outputs at each step.

Phases of the Project

Content Specification: The exhibit content was defined in a PDF brief covering the concept, target audiences, four primary artifacts, and the overarching theme (Hamilton as a writer-architect of institutions).
Reference Study: The AI fetched and analyzed the live reference site and its GitHub source to understand the exact technology stack, component patterns, file structure, and deployment conventions.
Tech Stack Lock-in: All dependencies were pinned to match the reference repo — Next.js 15, React 19, TypeScript strict mode, Tailwind CSS v4, Vitest, and GitHub Actions for CI/CD.
Content Data Layer: All Hamilton content was encoded into a single typed TypeScript file (lib/data.ts) before any UI was written. This separates concerns so content can change without touching components.
Component and Page Build: Components were built in dependency order — shared utilities first, then layout components, then pages that composed them.
Deployment Pipeline: A GitHub Actions workflow was written to build and deploy to GitHub Pages automatically on every push to main, with the correct basePath for the repository name.

Quality Gates

TypeScript: All content types defined in lib/data.ts. If a field is missing or the wrong type, the build fails before deployment.
Vitest unit tests: tests/unit/data.test.ts validates artifact count, timeline order, required fields, and URL format on every push.
Separation of concerns: Content in lib/data.ts, styles in globals.css, stateless components. Each can change independently.
CI/CD pipeline: GitHub Actions runs install, build, and deploy. A broken build never reaches the live site.
Curatorial review: A Smithsonian-style review was conducted after the initial build, producing six documented improvement recommendations.

Why This Approach Matters

The orchestration method used here is not simply asking AI to build a website. It is a structured process in which the human defines strategy, scope, content architecture, and verification criteria, and the AI is directed to execute within those constraints. The result is a repository where every file has a clear reason to exist, every decision is traceable to a brief or specification, and the site can be maintained and extended without re-explaining the entire project from scratch.

2. Visual Style

Typography

Cinzel Decorative — used for headings, the monogram, and structural labels. Cinzel is based on classical Roman inscriptions — the same epigraphic tradition Hamilton consciously invoked when signing the Federalist Papers as “Publius,” referencing the Roman founder Publius Valerius Publicola.

Cormorant Garamond — used for body copy. Garamond is a Renaissance typeface with deep roots in the early print era. It connects the exhibit to the age of pamphlets and broadsides that Hamilton used as his political weapons.

IM Fell English — used for pull quotes and artifact significance notes. This is a direct digitization of a 17th-century typeface. Its irregular, handset quality evokes the actual texture of period documents.

Color Palette

Parchment (#F5EDD8) — the dominant background, evoking the physical substrate of Hamilton's letters and documents.

Navy (#1B2A4A) — the primary structural color, used for the hero panel, navigation, and timeline. Evokes the Continental Army uniform and the formal register of 18th-century statecraft.

Gold (#B8860B) — the accent color, used for all interactive elements, borders, and hover states. Evokes the gilt edges of period books and Hamilton's military uniform.

Rust (#8B3A1E) — used for pull quotes and significance notes. Evokes iron gall ink — the actual ink used in 18th-century documents, which oxidizes to rust-brown over time.

Layout

The site uses a split-panel hero with the text in dark navy and the visual in parchment — a reference to the format of period broadsides, which set type in dark ink against a lighter ground. The vertical gold rule dividing the panels echoes the column rules of 18th-century newspaper printing.

The artifact grid is bounded by a continuous gold rule so the four documents appear as a unified collection. The timeline uses a left-edge vertical gradient line with dot markers, evoking a printed chronology. Timeline items animate in on scroll using IntersectionObserver, so history unfolds progressively as the visitor moves through it.


3. Brand Identity

Brand Archetype: Sage

The exhibit uses the Sage archetype: A brand persona built on the pursuit and communication of knowledge, the authority of primary evidence, and the belief that understanding history is essential to navigating the present.

Intellectual Authority: Period typography, an institutional color palette, curatorial copy tone, and sourcing of every claim to primary institutions (National Archives, Library of Congress, NPS) establish the exhibit as a credible scholarly resource.
Human Drama: Similar to the musical, Alexander Hamilton: The Musical, the timeline culminating in the duel, and the birth year dispute treated as content rather than a footnote signal that the exhibit is a narrative experience, not just a reference document.
Relevance: The exhibit consistently anchors Hamilton to the present. The $10 bill stat, the stock exchange reference, and the note that his influence is felt every time we trade stocks bridge the distance between 1790 and now.

Voice and Tone

The exhibit copy is written in a register that sits between academic and editorial — precise enough to be trusted, readable enough to hold attention. The controlling device of the voice is the declarative sentence with a specific claim. Not “Hamilton wrote many influential documents” but “Hamilton authored 51 of the 85 Federalist Papers in one year.” Not “he was successful” but “he wrote himself from obscurity into the founding narrative of a nation.” Every sentence earns its place by carrying a specific fact or specific image.

The “AH” Monogram

The exhibit uses a large-scale typographic monogram (AH) in Cinzel Decorative at low opacity against the parchment background, framed by two rotated gold rules. This fills the visual panel with a period-appropriate decorative element, signals the exhibit's typographic theme (words, not images, are Hamilton's medium), and avoids portrait licensing complications.

4. Cialdini Principles of Persuasion

Authority

Every artifact is sourced to a primary institutional authority: the National Archives, the Library of Congress, the National Park Service, and Wikipedia. The exhibit does not ask visitors to trust it on its own authority — it routes them to institutions that have already established that trust. The curatorial review section, conducted in the voice of a Smithsonian curator, further establishes authority by demonstrating critical self-awareness. An exhibit that can identify its own gaps operates at a level of intellectual rigor above simple advocacy.

Social Proof

The three-audience card system functions as social proof by implication: if historians, musical fans, and financial designers all find value in Hamilton's story, the exhibit signals that it serves a broad and credible community of interest. The stat block (51 Federalist Papers, the $10 bill) works similarly — these are not obscure facts but widely-known cultural touchstones that signal Hamilton's mainstream significance.

Liking

The origin story of the Hurricane Letter is the exhibit's primary liking device. A seventeen-year-old orphan writes a letter so powerful that strangers pay to send him to university. This is the narrative logic of a hero's journey, and it creates the personal connection and emotional investment that carries the visitor through the rest of the exhibit. The tragic ending of the duel provides the emotional resonance that makes the story memorable.

Scarcity and Commitment (Progressive Disclosure)

The homepage shows a preview of four artifacts and four timeline events, with explicit “View Full” links to dedicated pages. This is scarcity in information architecture: visitors are given enough to be engaged, then required to commit (a click) to go deeper. Visitors who click through have self-selected as genuinely interested and can be given fuller, more demanding content. The scroll-triggered timeline animation creates a sense of momentum — each event feeling like it follows from the last.

5. How AI Was Used in the Workflow
AI was used throughout this project as a directed instrument, not as an autonomous generator. The human defined the strategy, content, and verification criteria. The AI executed within those constraints. The following is a summary of where AI was applied and how.

Content Research and Sourcing

The AI fetched and analyzed the live reference repository (kaw393939.github.io) and its GitHub source code to understand the exact technology stack, deployment conventions, and design patterns to replicate. It also verified that all four artifact sources (National Archives, Library of Congress, NPS, Wikipedia) were real, accessible URLs returning current content.

Code Generation

The AI generated the complete Next.js project: all TypeScript components, the Tailwind CSS theme, the content data layer, and the Vitest unit tests. Each file was generated in dependency order, with the content data layer defined before any UI components were written.

Debugging and Deployment Fixes

When the GitHub Actions deployment failed (because GitHub auto-generated a conflicting nextjs.yml workflow and the build used npm ci without a lockfile), the AI diagnosed the exact errors from the Actions log, explained what caused each one, generated a fixed deploy.yml using npm install instead of npm ci, and produced a shell script (fix-and-push.sh) with step-by-step instructions to resolve the conflict.

AI Review

The AI conducted a full curatorial review of the completed exhibit in the voice of a Smithsonian senior curator of American history. This review identified six specific improvement recommendations, documented in Section 7 below. This is an example of using AI to stress-test a deliverable from an expert perspective, not just to generate it.

Documentation

This document was generated by AI using the docx library, producing a formatted Word document from structured content– demonstrating that AI can produce final-form deliverables, not just draft content.

6. Agentic Orchestration Process

What Made This Project Agentic

The AI fetched the reference repository and live site to gather real-time information before writing a single line of code.
It generated code, then generated tests for that code, then generated a CI/CD pipeline to run those tests automatically.
When deployment failed, it diagnosed the error from a screenshot of the GitHub Actions log, identified two root causes, and produced targeted fixes for each.
It conducted a curatorial review of the completed site, then generated a documentation report about that review.
Each step produced a durable artifact (a file, a script, a document) that could be verified and built upon in the next step.

The Key Principle: Durable Artifacts Over Chat History

The orchestration method from the reference repository makes a specific argument: AI session history is not durable enough to serve as memory. Every important decision in this project was encoded into a file — lib/data.ts for content, deploy.yml for CI/CD, this document for documentation — not left in the conversation. This means the project can be picked up, extended, or handed to someone else without re-explaining every decision.

The human's role throughout was to define what the artifact should contain and verify that it was correct. The AI's role was to produce the artifact in the correct format. This division of labor is what makes the process scalable.








7. AI Curatorial Review as Smithsonian Curator

What the Review Found: Strengths
The artifact selection is well-reasoned. The four primary sources each represent a distinct mode of Hamilton's influence: personal voice, institutional design, domestic life, and political persuasion.
The timeline is appropriately sequenced and does not sanitize the ending. The duel is present, which matters.
The three-audience framing is smart public programming. It acknowledges that people arrive with different prior knowledge and different questions.

What the Review Found: Critical Gaps

No original artifact images: A Smithsonian exhibit would never describe the Report on Public Credit without showing the actual document. The Library of Congress has high-resolution public domain scans.
Unsourced hero quote: The opening Hamilton quote has no citation. Every displayed quote requires a source — a letter, speech, or document with a date.
Birth year dispute unexplained: The site uses “c. 1755” without explaining why. Hamilton's birth year is genuinely disputed (1755 vs. 1757), and the dispute has historical substance. This ambiguity should be treated as content, not a footnote.
Federalist Papers artifact undersells the stakes: The pseudonym “Publius” was a deliberate choice invoking the Roman founder of the Republic. That context changes how a visitor reads the achievement.
Audience section is too passive: Telling a visitor “this is for you” is less effective than giving them a specific first document to read.
No counter-narrative: A serious historical exhibit acknowledges its subject's contradictions. Hamilton's ownership of enslaved people and his anti-democratic views are part of the historical record and should be addressed.




Sources
National Archives — Founders Online: founders.archives.gov
Library of Congress — Report on Public Credit: loc.gov/resource/bdsdcc.22001
National Park Service — Hamilton Grange Memorial: nps.gov/hagr
Wikipedia — The Federalist Papers: en.wikipedia.org/wiki/The_Federalist_Papers
Reference Repository: github.com/kaw393939/nextjs_ai_orchestration_spec_sprint_process
Project Repository: github.com/priyabriya/Alexander-Hamilton-Museum-Exhibit
Cialdini, R. (2006). Influence: The Psychology of Persuasion. HarperCollins.
Mark, M. & Pearson, C. (2001). The Hero and the Outlaw: Building Extraordinary Brands Through the Power of Archetypes. McGraw-Hill.




## Sources

- [National Archives — Founders Online](https://founders.archives.gov/)
- [Library of Congress — Report on Public Credit](https://www.loc.gov/resource/bdsdcc.22001/)
- [National Park Service — Hamilton Grange](https://www.nps.gov/hagr/index.htm)
- [Wikipedia — The Federalist Papers](https://en.wikipedia.org/wiki/The_Federalist_Papers)
