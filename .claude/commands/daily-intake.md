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
