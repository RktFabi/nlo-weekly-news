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
