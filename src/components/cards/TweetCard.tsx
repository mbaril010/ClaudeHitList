"use client";

import { useState } from "react";
import type { Tweet, StockData } from "@/types";
import { SeverityBadge } from "@/components/ui/SeverityBadge";

const THREAT_COLORS: Record<string, string> = {
  CRITICAL: "#ff0040",
  HIGH: "#ff6600",
  MODERATE: "#ffaa00",
};

export function TweetCard({
  tweet,
  index,
  stockData,
}: {
  tweet: Tweet;
  index: number;
  stockData: StockData;
}) {
  const [expanded, setExpanded] = useState(false);
  const c = THREAT_COLORS[tweet.threatLevel] || "#ffaa00";

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer transition-all duration-300 relative group"
      style={{
        background: tweet.isNew ? `${c}06` : "#0a0a12",
        border: `1px solid ${tweet.isNew ? c + "30" : "rgba(255,255,255,0.03)"}`,
        padding: "20px 24px",
        animation: `fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s both`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = c + "40";
        e.currentTarget.style.background = c + "08";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = tweet.isNew
          ? c + "30"
          : "rgba(255,255,255,0.03)";
        e.currentTarget.style.background = tweet.isNew ? c + "06" : "#0a0a12";
      }}
    >
      {/* New badge */}
      {tweet.isNew && (
        <div
          className="absolute -top-px right-5 px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-black"
          style={{ background: c }}
        >
          NEW
        </div>
      )}

      {/* Confirmed hit badge */}
      {tweet.confirmed && (
        <div className="absolute -top-px right-5 px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-[0.15em] text-white bg-danger">
          {"\u2713"} CONFIRMED HIT
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-2.5">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c4956a] flex items-center justify-center text-sm font-bold text-[#1a1a1a] shrink-0">
          C
        </div>
        <span className="font-sans text-sm font-semibold text-[#ddd]">
          Claude
        </span>
        <span className="font-mono text-[11px] text-text-ghost">
          @claudeai
        </span>
        <span className="text-text-dim">{"\u00B7"}</span>
        <span className="font-mono text-[11px] text-text-ghost">
          {tweet.time}
        </span>
        <div className="ml-auto">
          <SeverityBadge level={tweet.threatLevel} />
        </div>
      </div>

      {/* Tweet text */}
      <div className="font-sans text-sm text-[#bbb] leading-[1.6] mb-3 pl-10">
        {tweet.text}
      </div>

      {/* Targets */}
      <div className="pl-10 flex gap-2 flex-wrap items-center">
        <span className="font-mono text-[10px] text-text-faint tracking-widest">
          TARGETS:
        </span>
        {tweet.targets.map((t, i) => {
          const live = stockData[t];
          return (
            <span
              key={i}
              className="font-mono text-xs font-semibold px-2 py-px"
              style={{
                color: c,
                border: `1px solid ${c}30`,
                background: `${c}08`,
              }}
            >
              {t}
              {live && (
                <span className="text-text-ghost ml-1 text-[10px]">
                  ${live.price.toFixed(0)}
                </span>
              )}
            </span>
          );
        })}
        {tweet.confirmed && tweet.marketResult && (
          <span className="font-mono text-[11px] text-danger ml-2 font-semibold">
            {"\u2192"} {tweet.marketResult}
          </span>
        )}
      </div>

      {/* Expanded analysis */}
      <div
        className="overflow-hidden transition-[max-height] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: expanded ? 200 : 0 }}
      >
        <div
          className="mt-4 ml-10 p-3.5 px-[18px]"
          style={{
            background: `${c}08`,
            borderLeft: `2px solid ${c}40`,
          }}
        >
          <div
            className="font-mono text-[10px] tracking-widest mb-1.5 font-semibold"
            style={{ color: c }}
          >
            {"\u26A1"} AI THREAT ANALYSIS
          </div>
          <div className="font-sans text-[13px] text-[#999] leading-[1.6]">
            {tweet.impactAnalysis}
          </div>
        </div>
      </div>
    </div>
  );
}
