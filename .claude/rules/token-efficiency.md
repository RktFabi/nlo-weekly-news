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
