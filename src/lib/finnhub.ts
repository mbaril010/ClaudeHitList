import type { StockQuote } from "@/types";

const FINNHUB_BASE = "https://finnhub.io/api/v1";
const RATE_LIMIT_DELAY_MS = 100; // 100ms between calls to stay under 60/min

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchQuote(ticker: string): Promise<StockQuote | null> {
  const apiKey = process.env.FINNHUB_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `${FINNHUB_BASE}/quote?symbol=${encodeURIComponent(ticker)}&token=${apiKey}`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) return null;

    const data = await res.json();

    // Finnhub returns c=0 for invalid tickers
    if (!data.c || data.c === 0) return null;

    return {
      ticker,
      price: data.c, // current price
      change: data.d, // change
      changePercent: data.dp, // change percent
      timestamp: data.t, // timestamp
    };
  } catch {
    return null;
  }
}

export async function fetchBulkQuotes(
  tickers: string[]
): Promise<Record<string, StockQuote>> {
  const results: Record<string, StockQuote> = {};

  for (const ticker of tickers) {
    const quote = await fetchQuote(ticker);
    if (quote) {
      results[ticker] = quote;
    }
    await sleep(RATE_LIMIT_DELAY_MS);
  }

  return results;
}
