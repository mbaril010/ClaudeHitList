import type { Tweet } from "@/types";

export const TWEETS: Tweet[] = [
  {
    id: 1,
    date: "Feb 24, 2025",
    time: "8h ago",
    text: "Introducing Cowork and plugin updates that help enterprises customize Claude for better collaboration with every team.",
    threatLevel: "HIGH",
    impactAnalysis:
      "Enterprise SaaS disruption — targets Slack, Monday.com, Notion. Plugin ecosystem creates lock-in that displaces vertical SaaS tools.",
    targets: ["TEAM", "MNDY", "CRM"],
    isNew: true,
  },
  {
    id: 2,
    date: "Feb 24, 2025",
    time: "1h ago",
    text: "New in Claude Code: Remote Control. Kick off a task in your terminal and pick it up from your phone while you take a walk or join a meeting.",
    threatLevel: "MODERATE",
    impactAnalysis:
      "Incremental developer tool improvement. Extends coding agent accessibility but limited direct market impact.",
    targets: ["MSFT", "GTLB"],
    isNew: true,
  },
  {
    id: 3,
    date: "Feb 20, 2025",
    time: "4d ago",
    text: "Introducing Claude Code Security, now in limited research preview. It scans codebases for vulnerabilities and suggests targeted software patches for human review.",
    threatLevel: "CRITICAL",
    impactAnalysis:
      "DIRECT HIT. $15B+ wiped from cybersecurity stocks. AI demonstrated it could scan entire codebases and find vulnerabilities missed for decades. Existential threat to security consulting.",
    targets: ["CRWD", "NET", "OKTA", "PANW", "S"],
    isNew: false,
    confirmed: true,
    marketResult: "CRWD -9%, NET -8%, OKTA -8%",
  },
  {
    id: 4,
    date: "Feb 19, 2025",
    time: "5d ago",
    text: "Claude in PowerPoint is now available on the Pro plan. It also now supports connectors, bringing context from your daily tools directly into your slides.",
    threatLevel: "MODERATE",
    impactAnalysis:
      "Erosion of Microsoft Office moat. Claude embedding into Office workflows reduces need for consulting firms that build presentations.",
    targets: ["MSFT", "ACN"],
    isNew: false,
  },
  {
    id: 5,
    date: "Feb 19, 2025",
    time: "4d ago",
    text: "Claude Code on desktop can now preview running apps, review code, and handle CI failures and PRs in the background.",
    threatLevel: "HIGH",
    impactAnalysis:
      "CI/CD automation. Direct threat to DevOps toolchain companies. Background PR handling reduces need for junior developers.",
    targets: ["GTLB", "ESTC", "DDOG"],
    isNew: false,
  },
  {
    id: 6,
    date: "Feb 18, 2025",
    time: "6d ago",
    text: "You can now push what you're building in Claude Code directly into Figma. Build a working prototype in code, then send it to a Figma canvas.",
    threatLevel: "MODERATE",
    impactAnalysis:
      "Design-to-code bridge. Threatens Figma's standalone value proposition. Code-first design reduces dependency on design tools.",
    targets: ["ADBE"],
    isNew: false,
  },
  {
    id: 7,
    date: "Feb 11, 2025",
    time: "13d ago",
    text: "We're bringing some of Claude's most-used features to the free plan. File creation, connectors, and skills are all now available without a subscription.",
    threatLevel: "HIGH",
    impactAnalysis:
      "Freemium expansion. Making powerful features free accelerates adoption and displaces paid SaaS tools faster. Commoditization play.",
    targets: ["CRM", "ADBE", "NOW"],
    isNew: false,
  },
  {
    id: 8,
    date: "Feb 10, 2025",
    time: "14d ago",
    text: "Cowork is now available on Windows. Full feature parity with macOS: file access, multi-step task execution, plugins, and MCP connectors.",
    threatLevel: "HIGH",
    impactAnalysis:
      "Windows expansion doubles Cowork's addressable market overnight. Enterprise adoption barrier removed.",
    targets: ["TEAM", "MNDY"],
    isNew: false,
  },
  {
    id: 9,
    date: "Feb 5, 2025",
    time: "19d ago",
    text: "Introducing Claude Opus 4.6. Our smartest model got an upgrade. Plans more carefully, sustains agentic tasks for longer, catches its own mistakes. First Opus-class model with 1M token context.",
    threatLevel: "CRITICAL",
    impactAnalysis:
      "FOUNDATION SHIFT. 1M context + self-correction = autonomous agent capable of replacing entire workflows. Every knowledge worker vertical exposed.",
    targets: ["IGV", "ACN", "INFY", "WIT"],
    isNew: false,
    confirmed: true,
    marketResult: "IGV -30%. Worst quarter for software since 2008.",
  },
  {
    id: 10,
    date: "Jan 30, 2025",
    time: "25d ago",
    text: "Cowork now supports plugins. Bundle skills, connectors, slash commands, and sub-agents together to turn Claude into a specialist for your role, team, and company.",
    threatLevel: "HIGH",
    impactAnalysis:
      "Plugin ecosystem = platform play. Each plugin replaces a standalone SaaS product. Vertical software at existential risk.",
    targets: ["CRM", "HUBS", "ZS"],
    isNew: false,
  },
  {
    id: 11,
    date: "Jan 26, 2025",
    time: "29d ago",
    text: "Your work tools are now interactive in Claude. Draft Slack messages, visualize ideas as Figma diagrams, or build and see Asana timelines.",
    threatLevel: "HIGH",
    impactAnalysis:
      "Claude as universal orchestrator. Every tool becomes an API endpoint Claude calls. The wrapper problem inverted — Claude wraps everything else.",
    targets: ["TEAM", "ASAN", "CRM"],
    isNew: false,
  },
  {
    id: 12,
    date: "Jan 23, 2025",
    time: "32d ago",
    text: "Claude in Excel is now available on Pro plans. Handles multiple files via drag and drop, avoids overwriting cells, handles longer sessions.",
    threatLevel: "MODERATE",
    impactAnalysis:
      "Spreadsheet automation. Threatens Excel consultants and financial modeling firms. Reduces need for analysts doing repetitive spreadsheet work.",
    targets: ["INTU", "WK"],
    isNew: false,
  },
  {
    id: 13,
    date: "Jan 20, 2025",
    time: "35d ago",
    text: "Claude can now securely connect to your health data. Four new integrations: Apple Health, Health Connect, HealthEx, and Function Health.",
    threatLevel: "HIGH",
    impactAnalysis:
      "HEALTHCARE ENTRY. AI with direct health data access. Threatens Teladoc, health admin companies, and potentially diagnostic platforms.",
    targets: ["TDOC", "VEEV", "HIMS", "DOCS"],
    isNew: false,
  },
];
