export type Severity = "CRITICAL" | "HIGH" | "MODERATE";

export interface Casualty {
  ticker: string;
  name: string;
  drop: number;
  note: string;
}

export interface Event {
  date: string;
  release: string;
  description: string;
  casualties: Casualty[];
  collateral: string;
  severity: Severity;
}

export interface Tweet {
  id: number;
  date: string;
  time: string;
  text: string;
  threatLevel: Severity;
  impactAnalysis: string;
  targets: string[];
  isNew: boolean;
  confirmed?: boolean;
  marketResult?: string;
}

export interface NextTarget {
  sector: string;
  tickers: string[];
  icon: string;
  threat: number;
  signal: string;
}

export interface StockQuote {
  ticker: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: number;
}

export type StockData = Record<string, StockQuote>;
