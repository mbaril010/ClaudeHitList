import { HitListShell } from "@/components/HitListShell";
import { getCachedStocks, setCachedStocks } from "@/lib/stock-cache";
import { fetchBulkQuotes } from "@/lib/finnhub";
import { getAllTickers } from "@/lib/tickers";
import type { StockData } from "@/types";

export const revalidate = 300; // ISR: revalidate every 5 minutes

async function getStockData(): Promise<StockData> {
  const cached = getCachedStocks();
  if (cached) return cached;

  try {
    const tickers = getAllTickers();
    const data = await fetchBulkQuotes(tickers);
    if (Object.keys(data).length > 0) {
      setCachedStocks(data);
    }
    return data;
  } catch {
    return {};
  }
}

export default async function Home() {
  const stockData = await getStockData();

  return <HitListShell initialStockData={stockData} />;
}
