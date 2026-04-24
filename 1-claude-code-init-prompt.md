# Claude Code — NLO News Digest: Repo Scaffold Prompt
# Paste everything below the line into Claude Code

---

Create a new project called `nlo-news-digest` in the current directory with the following complete file structure. Create every file exactly as specified. After creating all files, initialize a git repo, make an initial commit, and give me the commands I need to push it to GitHub.

---

## REQUIRED FILE STRUCTURE

```
nlo-news-digest/
├── CLAUDE.md
├── CLAUDE.local.md          ← gitignored
├── .claude/
│   ├── settings.json
│   ├── rules/
│   │   ├── output-format.md
│   │   └── token-efficiency.md
│   └── commands/
│       ├── daily-intake.md
│       └── weekly-digest.md
├── .github/
│   └── workflows/
│       └── pages.yml
├── .gitignore
├── index.html
└── data/
    ├── index.js
    ├── staging/
    │   └── .gitkeep
    └── 2026-04-20-weekly.js  ← sample data
```

---

## FILE CONTENTS

### CLAUDE.md
```markdown
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
```

---

### .claude/rules/output-format.md
```markdown
# Output Format Rules

## Staging file — data/staging/YYYY-MM-DD.js
Append only. Never overwrite existing staging files.

window.stagingItems = window.stagingItems || [];
window.stagingItems.push(...[
  {
    title: "",
    summary: "",          // 2 sentences max
    why_it_matters: "",   // 1 sentence, must reference NLO stack or mission
    url: "",
    image: "",            // og:image or logo URL, empty string if not found
    source: "",           // e.g. "GitHub Releases", "Hacker News", "CISA"
    urgency: "",          // "high" | "medium" | "low"
    audience: "",         // "devs" | "everyone" | "leadership"
    section: ""           // "engineering" | "security" | "nonprofit" | "opportunities" | "social_buzz"
  }
]);

## Weekly digest file — data/YYYY-MM-DD-weekly.js
window.digests = window.digests || {};
window.digests["YYYY-MM-DD"] = {
  week: "Week of [Month D, YYYY]",
  sections: {
    engineering:    [],
    security:       [],
    nonprofit:      [],
    opportunities:  [],
    social_buzz:    []
  }
};

## data/index.js
window.digestIndex = [
  "YYYY-MM-DD",   // most recent first
  // max 5 entries
];

## Rules
- Output ONLY the JS file content. No markdown, no explanation, no preamble.
- Use ISO date YYYY-MM-DD for all filenames and keys.
- Never modify index.html.
- Summaries: 2 sentences max.
- why_it_matters: 1 sentence, NLO-specific context required.
```

---

### .claude/rules/token-efficiency.md
```markdown
# Token Efficiency Rules

## Hard limits per run
- Daily intake: max 5 web searches total
- Weekly digest: 0 web searches (reads local staging files only)
- Never fetch full article pages — titles and snippets only
- Never process items older than 48 hours (daily) or 7 days (weekly)

## Approved sources for daily intake
1. HN Algolia API (no page fetch needed):
   https://hn.algolia.com/api/v1/search?tags=story&numericFilters=points>80&query=TERM
   Queries to rotate across days: react tanstack, nestjs firebase, node security,
   nonprofit tech, google cloud run

2. GitHub Releases API (titles only, no body):
   https://api.github.com/repos/TanStack/router/releases?per_page=3
   https://api.github.com/repos/TanStack/query/releases?per_page=3
   https://api.github.com/repos/nestjs/nest/releases?per_page=3
   https://api.github.com/repos/firebase/firebase-js-sdk/releases?per_page=3

3. CISA KEV feed (only when Node/JS entries exist):
   https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json

4. One targeted web search for nonprofit/sector news if no relevant items found above.

## Quality filter before writing
- Skip: items with no clear relevance to NLO stack or nonprofit mission
- Skip: social_buzz items under 80 HN points
- Skip: duplicate URLs already in staging/
- Cap: max 8 items per daily run
```

---

### .claude/commands/daily-intake.md
```markdown
Run the daily news intake for NLO News Digest.

Today's date: !date +%Y-%m-%d

Follow all rules in .claude/rules/token-efficiency.md and .claude/rules/output-format.md.

Steps:
1. Check data/staging/ for existing files to avoid duplicate URLs.
2. Fetch from approved sources (max 5 searches — hard limit).
3. Filter: relevance to NLO stack/mission, recency (<48h), quality threshold.
4. Keep max 8 items.
5. Write output to data/staging/!date +%Y-%m-%d.js
6. Report: X items collected, sources used, any items skipped and why.

Output the JS file content only. No preamble.
```

---

### .claude/commands/weekly-digest.md
```markdown
Run the Monday weekly digest for NLO News Digest.

Today's date: !date +%Y-%m-%d

Follow all rules in .claude/rules/output-format.md.
Zero web searches — read local files only.

Steps:
1. Read ALL files in data/staging/ (they populate window.stagingItems).
2. Deduplicate by URL.
3. Score each item: impact(1-3) × urgency(high=3,med=2,low=1) × relevance(1-3).
4. Select top 15-20 items. Ensure at least 1 item per section if available.
   Prefer high urgency items regardless of section.
5. Write weekly digest to data/!date +%Y-%m-%d-weekly.js
6. Update data/index.js: add new key at top, remove oldest if >5 entries.
7. Delete all files in data/staging/ (keep .gitkeep).
8. Report: total items processed, selected, breakdown by section.

Output both file contents (weekly + index.js). No preamble.
```

---

### .claude/settings.json
```json
{
  "$schema": "https://claude.ai/schema/settings.json",
  "attribution": {
    "commits": false,
    "pullRequests": false
  },
  "permissions": {
    "allow": [
      "Bash(git:*)",
      "Bash(date:*)",
      "Read(data/**)",
      "Write(data/**)",
      "Read(.claude/**)",
      "Read(CLAUDE.md)"
    ],
    "deny": [
      "Bash(rm -rf:*)",
      "Write(index.html)",
      "Write(.claude/settings.json)"
    ]
  }
}
```

---

### CLAUDE.local.md
```markdown
# Local Overrides (not committed)
# Add your personal preferences here.

## Example overrides
# - Preferred search terms for HN
# - Local output path preferences
```

---

### .gitignore
```
CLAUDE.local.md
.claude/settings.local.json
.DS_Store
Thumbs.db
node_modules/
```

---

### .github/workflows/pages.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
    paths:
      - 'index.html'
      - 'data/**'

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### data/index.js
```js
// Updated every Monday by the weekly-digest routine.
// Most recent first. Max 5 entries.
window.digestIndex = [
  "2026-04-20"
];
```

---

### data/staging/.gitkeep
```
```

---

### data/2026-04-20-weekly.js
```js
window.digests = window.digests || {};
window.digests["2026-04-20"] = {
  week: "Week of April 20, 2026",
  sections: {
    engineering: [
      {
        title: "TanStack Router v1.120 ships with loader deduplication",
        summary: "Parallel route loaders that share the same fetch are now coalesced automatically. Manual dedup patterns in userland may now be removable.",
        why_it_matters: "Directly affects your TanStack Router setup — audit your loaders after upgrading.",
        url: "https://github.com/TanStack/router/releases",
        image: "https://avatars.githubusercontent.com/u/72518640",
        source: "GitHub Releases",
        urgency: "medium",
        audience: "devs"
      },
      {
        title: "NestJS 11.1 ships first-party OpenTelemetry module",
        summary: "@nestjs/otel wires distributed tracing into the request lifecycle with zero boilerplate. Works out of the box with Google Cloud Trace.",
        why_it_matters: "Direct path to production observability on your Cloud Run + NestJS setup without a third-party shim.",
        url: "https://github.com/nestjs/nest/releases",
        image: "https://nestjs.com/img/logo-small.svg",
        source: "GitHub Releases",
        urgency: "medium",
        audience: "devs"
      },
      {
        title: "Firebase Data Connect is now GA — pricing announced",
        summary: "SQL-on-Firebase exits beta with a pricing model tied to connection hours and query volume. Free tier covers ~1M reads/month per project.",
        why_it_matters: "Worth evaluating against your current Firestore architecture for relational data you're currently denormalizing.",
        url: "https://firebase.google.com/docs/data-connect",
        image: "https://www.gstatic.com/devrel-devsite/prod/v0e0f589edd85502a40d78d7d0825db8ea5ef3b99ab4070381ee86977c9168730/firebase/images/touchicon-180.png",
        source: "Firebase Blog",
        urgency: "low",
        audience: "devs"
      }
    ],
    security: [
      {
        title: "CISA advisory: critical RCE in fast-xml-parser <4.4.1",
        summary: "CVE-2026-21892 allows arbitrary code execution via malformed XML input in server-side parsing contexts. Patch is available in 4.4.1+.",
        why_it_matters: "Run `npm ls fast-xml-parser` across your NestJS services — patch if found.",
        url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog",
        image: "https://www.cisa.gov/profiles/cisad8_gov/themes/custom/cisa_uswds/img/icons/cisa-logo.png",
        source: "CISA",
        urgency: "high",
        audience: "devs"
      }
    ],
    nonprofit: [
      {
        title: "CRA updates digital fundraising receipt requirements for 2026",
        summary: "Electronic tax receipts are now fully valid without physical copies. Updated required fields for online donation forms apply to receipts issued after March 1.",
        why_it_matters: "Review your donation receipt generation flow to confirm it includes the newly required fields before next filing season.",
        url: "https://www.canada.ca/en/revenue-agency.html",
        image: "https://www.canada.ca/etc/designs/canada/wet-boew/assets/favicon.ico",
        source: "CRA",
        urgency: "medium",
        audience: "leadership"
      }
    ],
    opportunities: [
      {
        title: "Google for Nonprofits Workspace credits renewal window is open",
        summary: "Eligible nonprofits can renew or apply for Google Workspace for Nonprofits credits covering up to 2,000 seats at no cost through TechSoup Canada.",
        why_it_matters: "Check your admin console for NLO's Workspace credit expiry date and renew before the window closes.",
        url: "https://www.google.com/nonprofits/",
        image: "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png",
        source: "Google for Nonprofits",
        urgency: "medium",
        audience: "everyone"
      }
    ],
    social_buzz: [
      {
        title: "HN: 'Firebase Hosting + Cloud Run hybrid — is it worth it?' (312 points)",
        summary: "High-signal discussion on tradeoffs of serving static assets from Firebase Hosting while routing API calls to Cloud Run. Several comments address cold-start latency with Firebase auth middleware.",
        why_it_matters: "Directly describes NLO's current stack pattern — the cold-start thread is worth a skim before your next Cloud Run optimization pass.",
        url: "https://news.ycombinator.com",
        image: "https://news.ycombinator.com/y18.svg",
        source: "Hacker News",
        urgency: "low",
        audience: "devs"
      }
    ]
  }
};
```

---

### index.html
Use the index.html file I provide separately (already built). Do not regenerate it.
Copy it from the working directory if present, otherwise create a placeholder with:
`<h1>Copy index.html here</h1>`

---

## After creating all files:

1. Run: `git init`
2. Run: `git add .`
3. Run: `git commit -m "feat: initial NLO news digest scaffold"`
4. Print the exact commands I need to run to:
   - Create a new GitHub repo named `nlo-news-digest` under my account
   - Add the remote origin
   - Push to main

Do not push automatically — print the commands for me to run.
