"use client";

import { EVENTS } from "@/data/events";
import type { StockData } from "@/types";

export function TickerStrip({ stockData }: { stockData: StockData }) {
  const casualties = EVENTS.flatMap((e) => e.casualties);

  const tickerContent = (
    <span className="flex gap-8 pr-8">
      {casualties.map((c, j) => {
        const live = stockData[c.ticker];
        return (
          <span key={j} className="flex gap-1.5 items-center">
            <span className="text-text-subtle">{c.ticker}</span>
            <span className="text-danger">
              {"\u25BC"} {Math.abs(c.drop)}%
            </span>
            {live && (
              <span className="text-text-ghost text-[11px]">
                ${live.price.toFixed(2)}
              </span>
            )}
          </span>
        );
      })}
      <span className="text-danger/40">{"\u25CF"}</span>
      <span className="text-text-faint">ANTHROPIC DISRUPTION INDEX</span>
      <span className="text-danger/40">{"\u25CF"}</span>
      <span className="text-text-muted">@claudeai</span>
      <span className="text-danger/40">{"\u25CF"}</span>
      <span className="text-success/40">TRACKING LIVE</span>
      <span className="text-danger/40">{"\u25CF"}</span>
    </span>
  );

  return (
    <div className="border-b border-danger/[0.13] bg-bg-elevated overflow-hidden h-8 flex items-center">
      <div className="flex animate-marquee whitespace-nowrap font-mono text-xs">
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
}
