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
