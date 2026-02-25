"use client";

import { useState, useEffect } from "react";
import type { StockData } from "@/types";

export function CasualtyCard({
  ticker,
  name,
  drop,
  note,
  delay = 0,
  stockData,
}: {
  ticker: string;
  name: string;
  drop: number;
  note: string;
  delay?: number;
  stockData: StockData;
}) {
  const [visible, setVisible] = useState(false);
  const live = stockData[ticker];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="flex justify-between items-center transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 100%)",
        border: "1px solid rgba(255, 0, 64, 0.19)",
        padding: "16px 20px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
      }}
    >
      <div>
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-xl font-bold text-danger tracking-[0.05em]">
            {ticker}
          </span>
          <span className="font-sans text-sm text-text-muted">{name}</span>
          {live && (
            <span className="font-mono text-xs text-text-ghost">
              ${live.price.toFixed(2)}
            </span>
          )}
        </div>
        <div className="font-sans text-xs text-text-faint mt-1">{note}</div>
      </div>
      <div className="font-mono text-[28px] font-bold text-danger [text-shadow:0_0_20px_rgba(255,0,64,0.27)]">
        {drop}%
      </div>
    </div>
  );
}
