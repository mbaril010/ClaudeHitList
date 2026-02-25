import type { NextTarget } from "@/types";

export const NEXT_TARGETS: NextTarget[] = [
  {
    sector: "Legal Research",
    tickers: ["LW", "TMS", "LEGN"],
    icon: "\u2696\uFE0F",
    threat: 94,
    signal:
      "Claude already processes 1M tokens of context. A single deposition is ~50K tokens. One agent replaces a team of paralegals.",
  },
  {
    sector: "Financial Analysis",
    tickers: ["MSCI", "SPGI", "MCO"],
    icon: "\uD83D\uDCCA",
    threat: 89,
    signal:
      "Excel integration + connectors + health data = full portfolio analysis pipeline. Bloomberg Terminal replacement incoming.",
  },
  {
    sector: "Accounting & Tax",
    tickers: ["INTU", "HRB", "WK"],
    icon: "\uD83E\uDDFE",
    threat: 87,
    signal:
      "Cowork plugins + Excel automation. Tax prep is structured data transformation — exactly what agents excel at.",
  },
  {
    sector: "IT Consulting",
    tickers: ["ACN", "CTSH", "INFY"],
    icon: "\uD83D\uDDA5\uFE0F",
    threat: 83,
    signal:
      "Code Security + COBOL modernization. The two biggest consulting revenue streams automated in the same month.",
  },
  {
    sector: "Contact Centers",
    tickers: ["TTEC", "TASK", "NICE"],
    icon: "\uD83D\uDCDE",
    threat: 79,
    signal:
      "Cowork handles multi-step tasks, reads context, connects to tools. Customer support is a solved problem.",
  },
  {
    sector: "Healthcare Admin",
    tickers: ["VEEV", "HIMS"],
    icon: "\uD83C\uDFE5",
    threat: 76,
    signal:
      "Health data connectors live. Medical records, scheduling, billing — all structured data flowing through Claude.",
  },
];
