"use client";

import { useState, useEffect } from "react";
import { GlitchText } from "@/components/effects/GlitchText";
import { Counter } from "@/components/ui/Counter";
import { TWEETS } from "@/data/tweets";

export function Hero({ onAlertClick }: { onAlertClick: () => void }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300);
  }, []);

  return (
    <div
      className="transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{
        padding: "60px 40px 40px",
        maxWidth: 1100,
        margin: "0 auto",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(20px)",
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-2 h-2 rounded-full bg-danger animate-pulse-red" />
        <span className="font-mono text-xs text-danger tracking-[0.15em] uppercase">
          Live Tracking @claudeai — Updated{" "}
          {new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <div className="flex items-end justify-between flex-wrap gap-5">
        <div>
          <h1 className="font-display text-[clamp(48px,8vw,72px)] font-bold leading-[0.95] tracking-[-0.03em] mb-4">
            <GlitchText>THE</GlitchText>{" "}
            <span className="text-danger">
              <GlitchText>HIT LIST</GlitchText>
            </span>
          </h1>
          <p className="font-sans text-base text-text-faint max-w-[520px] leading-[1.6]">
            Every time Anthropic ships, public markets bleed. This page tracks
            the casualties in real time.
          </p>
        </div>

        <button
          onClick={onAlertClick}
          className="bg-danger/[0.08] border border-danger/25 py-3 px-6 cursor-pointer flex items-center gap-2.5 font-mono text-xs text-danger tracking-[0.08em] font-semibold animate-glow transition-all hover:bg-danger/[0.15]"
        >
          {"\uD83D\uDD14"} ENABLE ALERTS
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-px bg-white/[0.02] border border-border-muted mt-8">
        {[
          {
            label: "Market Cap Destroyed",
            value: <Counter end={285} prefix="$" suffix="B" />,
          },
          { label: "Stocks Hit", value: <Counter end={7} /> },
          {
            label: "Tweets Tracked",
            value: <Counter end={TWEETS.length} />,
          },
          { label: "Avg Drop", value: <Counter end={18} suffix="%" /> },
          { label: "Sectors Exposed", value: <Counter end={6} /> },
        ].map((s, i) => (
          <div key={i} className="py-5 px-6 bg-bg-elevated">
            <div className="font-mono text-[10px] text-text-faint tracking-widest uppercase mb-1.5">
              {s.label}
            </div>
            <div className="font-display text-[28px] font-bold text-danger">
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
