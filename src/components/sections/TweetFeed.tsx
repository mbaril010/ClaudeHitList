"use client";

import { useState } from "react";
import { TWEETS } from "@/data/tweets";
import { TweetCard } from "@/components/cards/TweetCard";
import type { Severity, StockData } from "@/types";

type FilterLevel = "ALL" | Severity;

const FILTER_STYLES: Record<FilterLevel, { border: string; color: string; bg: string }> = {
  ALL: { border: "rgba(255,255,255,0.19)", color: "#999", bg: "rgba(255,255,255,0.03)" },
  CRITICAL: { border: "rgba(255,0,64,0.38)", color: "#ff0040", bg: "rgba(255,0,64,0.06)" },
  HIGH: { border: "rgba(255,102,0,0.38)", color: "#ff6600", bg: "rgba(255,102,0,0.06)" },
  MODERATE: { border: "rgba(255,170,0,0.38)", color: "#ffaa00", bg: "rgba(255,170,0,0.06)" },
};

export function TweetFeed({ stockData }: { stockData: StockData }) {
  const [filter, setFilter] = useState<FilterLevel>("ALL");
  const filtered =
    filter === "ALL"
      ? TWEETS
      : TWEETS.filter((t) => t.threatLevel === filter);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="font-mono text-[11px] text-success tracking-[0.15em] uppercase flex items-center gap-3">
          <span className="w-6 h-px bg-success/25 inline-block" />
          @CLAUDEAI SIGNAL FEED
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse-red" />
        </div>
        <div className="flex gap-1">
          {(["ALL", "CRITICAL", "HIGH", "MODERATE"] as FilterLevel[]).map(
            (f) => {
              const active = filter === f;
              const s = FILTER_STYLES[f];
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="bg-transparent cursor-pointer py-1 px-3 font-mono text-[10px] tracking-[0.08em] transition-all hover:text-[#999] hover:border-white/20"
                  style={{
                    border: `1px solid ${active ? s.border : "rgba(255,255,255,0.06)"}`,
                    color: active ? s.color : "#777",
                    background: active ? s.bg : "transparent",
                  }}
                >
                  {f}
                </button>
              );
            }
          )}
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        {filtered.map((tweet, i) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            index={i}
            stockData={stockData}
          />
        ))}
      </div>
    </div>
  );
}
