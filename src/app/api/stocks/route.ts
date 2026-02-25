import { NextResponse } from "next/server";
import { getCachedStocks, setCachedStocks } from "@/lib/stock-cache";
import { fetchBulkQuotes } from "@/lib/finnhub";
import { getAllTickers } from "@/lib/tickers";

export async function GET() {
  // Check cache first
  const cached = getCachedStocks();
  if (cached) {
    return NextResponse.json(cached);
  }

  // Fetch fresh data
  const tickers = getAllTickers();
  const data = await fetchBulkQuotes(tickers);

  // Cache the result
  setCachedStocks(data);

  return NextResponse.json(data);
}
