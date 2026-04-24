# NLO News Digest

Internal weekly news digest for NeedList.ORG developers and staff.
Do NOT include PII, donor data, or credentials in any output.

## Organization
NeedList.ORG — Canadian nonprofit. Internal tool only.

## Stack (for relevance scoring)
React (TanStack Router, TanStack Query), NestJS, Firebase (Firestore, Auth,
Hosting, Data Connect), Google Cloud Run, Firebase Hosting, Coda, Figma, Draw.io

## Repo Structure
- `index.html` — NEVER modify. Static viewer, file:// and GitHub Pages compatible.
- `data/index.js` — Updated every Monday. Lists active weekly digest keys, max 5.
- `data/YYYY-MM-DD-weekly.js` — Published weekly digests.
- `data/staging/YYYY-MM-DD.js` — Daily intake files, cleared each Monday.
- `.claude/rules/output-format.md` — Required JS output schema.
- `.claude/rules/token-efficiency.md` — Search and token constraints.

## Commands
- `/project:daily-intake` — Run daily news intake (use any day except Monday)
- `/project:weekly-digest` — Run Monday re-rank and publish

## Compaction Note
When compacting, always preserve: current date, last digest key in index.js,
list of files written this session.
