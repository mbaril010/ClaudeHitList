"use client";

import { useState } from "react";
import { EVENTS } from "@/data/events";
import { SeverityBadge } from "@/components/ui/SeverityBadge";
import { CasualtyCard } from "@/components/cards/CasualtyCard";
import type { StockData } from "@/types";

export function ConfirmedHits({ stockData }: { stockData: StockData }) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <div>
      <div className="font-mono text-[11px] text-danger tracking-[0.15em] uppercase mb-6 flex items-center gap-3">
        <span className="w-6 h-px bg-danger/25" />
        CONFIRMED MARKET CASUALTIES
      </div>
      <div className="flex flex-col gap-0.5">
        {EVENTS.map((event, i) => (
          <div
            key={i}
            onClick={() => setActiveEvent(activeEvent === i ? null : i)}
            className="cursor-pointer transition-all duration-300 border border-border-faint hover:border-danger/[0.19] hover:bg-danger/[0.03]"
            style={{
              background: activeEvent === i ? "#0f0a14" : "#0a0a12",
              padding: "28px 32px",
              animation: `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.15}s both`,
            }}
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex-1 min-w-[280px]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-mono text-xs text-text-faint">
                    {event.date}
                  </span>
                  <SeverityBadge level={event.severity} />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-1.5">
                  Claude ships{" "}
                  <span className="text-danger">{event.release}</span>
                </h3>
                <p className="text-sm text-text-muted leading-[1.5]">
                  {event.description}
                </p>
              </div>
              <div className="flex gap-4 flex-wrap">
                {event.casualties.map((c, j) => (
                  <div key={j} className="text-right min-w-[80px]">
                    <div className="font-mono text-[13px] text-text-subtle">
                      {c.ticker}
                    </div>
                    <div className="font-mono text-2xl font-bold text-danger">
                      {c.drop}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ maxHeight: activeEvent === i ? 300 : 0 }}
            >
              <div className="mt-6 flex flex-col gap-1">
                {event.casualties.map((c, j) => (
                  <CasualtyCard
                    key={j}
                    {...c}
                    delay={j * 100}
                    stockData={stockData}
                  />
                ))}
                <div className="mt-3 p-3 px-5 bg-danger/[0.03] border-l-2 border-danger/25 font-mono text-[13px] text-danger/60">
                  {"\u25B8"} {event.collateral}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
