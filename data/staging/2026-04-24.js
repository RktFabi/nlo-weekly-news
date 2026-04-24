window.stagingItems = window.stagingItems || [];
window.stagingItems.push(...[
  {
    title: "TanStack Router — Two Releases in 48 Hours (Apr 22 & 24)",
    summary: "TanStack Router published releases on April 22 and April 24, 2026, indicating active maintenance and iteration. The April 24 release is the most recent, available at the GitHub releases page.",
    why_it_matters: "NLO's frontend stack uses TanStack Router; tracking back-to-back releases ensures the dev team can plan timely upgrades and catch any breaking changes early.",
    url: "https://github.com/TanStack/router/releases/tag/release-2026-04-24-0128",
    image: "",
    source: "GitHub Releases",
    urgency: "low",
    audience: "devs",
    section: "engineering"
  },
  {
    title: "TanStack Query — Two Releases on April 23, 2026",
    summary: "TanStack Query shipped two releases on April 23, 2026 (13:19 and 18:27 UTC), suggesting a bug-fix follow-up shortly after the initial drop. The later release is the recommended version to track.",
    why_it_matters: "NLO relies on TanStack Query for server-state management across its React frontend; staying current with patch releases reduces the risk of subtle data-fetching regressions.",
    url: "https://github.com/TanStack/query/releases/tag/release-2026-04-23-1827",
    image: "",
    source: "GitHub Releases",
    urgency: "low",
    audience: "devs",
    section: "engineering"
  }
]);
