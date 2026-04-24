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
