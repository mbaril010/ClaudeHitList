import { EVENTS } from "@/data/events";
import { TWEETS } from "@/data/tweets";
import { NEXT_TARGETS } from "@/data/targets";

export function getAllTickers(): string[] {
  const tickers = new Set<string>();

  for (const event of EVENTS) {
    for (const c of event.casualties) {
      tickers.add(c.ticker);
    }
  }

  for (const tweet of TWEETS) {
    for (const t of tweet.targets) {
      tickers.add(t);
    }
  }

  for (const target of NEXT_TARGETS) {
    for (const t of target.tickers) {
      tickers.add(t);
    }
  }

  // Filter out ETFs and invalid tickers that Finnhub won't resolve
  const excluded = new Set(["IGV"]);
  return Array.from(tickers).filter((t) => !excluded.has(t));
}
