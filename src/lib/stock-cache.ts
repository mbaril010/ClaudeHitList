import type { StockData } from "@/types";

const CACHE_TTL_MS = 30_000; // 30 seconds

interface CacheEntry {
  data: StockData;
  timestamp: number;
}

let cache: CacheEntry | null = null;

export function getCachedStocks(): StockData | null {
  if (!cache) return null;
  if (Date.now() - cache.timestamp > CACHE_TTL_MS) {
    cache = null;
    return null;
  }
  return cache.data;
}

export function setCachedStocks(data: StockData): void {
  cache = { data, timestamp: Date.now() };
}
