import type { Event } from "@/types";

export const EVENTS: Event[] = [
  {
    date: "Feb 4, 2025",
    release: "Cowork",
    description:
      "Desktop automation for non-developers. Drag files, manage tasks, automate workflows — no code required.",
    casualties: [
      {
        ticker: "TEAM",
        name: "Atlassian",
        drop: -35,
        note: "Project management automated",
      },
      {
        ticker: "INTU",
        name: "Intuit",
        drop: -34,
        note: "Financial workflows disrupted",
      },
    ],
    collateral: "$285B wiped from SaaS in a single week",
    severity: "CRITICAL",
  },
  {
    date: "Feb 5, 2025",
    release: "Opus 4.6",
    description:
      "Plans more carefully, sustains agentic tasks longer, operates in massive codebases, catches its own mistakes. First Opus-class model with 1M token context.",
    casualties: [
      {
        ticker: "IGV",
        name: "iShares Software ETF",
        drop: -30,
        note: "Broad software selloff — worst quarter since 2008",
      },
    ],
    collateral: "Agent Teams goes live. Software sells off broadly.",
    severity: "CRITICAL",
  },
  {
    date: "Feb 20, 2025",
    release: "Code Security",
    description:
      "Scans codebases for vulnerabilities and suggests patches. Hundreds of bugs missed for decades, caught overnight.",
    casualties: [
      {
        ticker: "CRWD",
        name: "CrowdStrike",
        drop: -9,
        note: "Automated threat detection",
      },
      {
        ticker: "NET",
        name: "Cloudflare",
        drop: -8,
        note: "Security layer commoditized",
      },
      {
        ticker: "OKTA",
        name: "Okta",
        drop: -8,
        note: "Identity management disrupted",
      },
    ],
    collateral: "$15B+ wiped from cybersecurity stocks in one session",
    severity: "HIGH",
  },
  {
    date: "Feb 24, 2025",
    release: "COBOL Modernization",
    description:
      "Legacy mainframe code translated to modern languages at scale. Decades of technical debt erased in hours.",
    casualties: [
      {
        ticker: "IBM",
        name: "IBM",
        drop: -13,
        note: "Worst single day since 2000",
      },
    ],
    collateral:
      "IBM down 27% in February alone. Legacy consulting model collapsed.",
    severity: "CRITICAL",
  },
];
