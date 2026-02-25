"use client";

import { useState, useEffect, useCallback } from "react";
import type { StockData } from "@/types";

const POLL_INTERVAL_MS = 60_000; // 60 seconds

export function useStockData(initialData: StockData) {
  const [stockData, setStockData] = useState<StockData>(initialData);

  const fetchStocks = useCallback(async () => {
    try {
      const res = await fetch("/api/stocks");
      if (res.ok) {
        const data: StockData = await res.json();
        if (Object.keys(data).length > 0) {
          setStockData(data);
        }
      }
    } catch {
      // Silently fail — keep showing last known data
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchStocks, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [fetchStocks]);

  return stockData;
}
