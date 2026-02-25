"use client";

import { useState } from "react";
import type { Tweet } from "@/types";

const COLORS: Record<string, { bg: string; glow: string }> = {
  CRITICAL: { bg: "#ff0040", glow: "#ff004044" },
  HIGH: { bg: "#ff6600", glow: "#ff660044" },
  MODERATE: { bg: "#ffaa00", glow: "#ffaa0044" },
};

export function AlertBanner({ tweet }: { tweet: Tweet | undefined }) {
  const [visible, setVisible] = useState(true);
  if (!visible || !tweet) return null;

  const c = COLORS[tweet.threatLevel] || COLORS.MODERATE;

  return (
    <div
      className="flex items-center relative animate-alert-pulse"
      style={{
        padding: "12px 40px",
        gap: 16,
        background: `${c.bg}15`,
        borderBottom: `1px solid ${c.bg}40`,
      }}
    >
      <div
        className="w-2 h-2 rounded-full shrink-0 animate-pulse-red"
        style={{ background: c.bg }}
      />
      <div className="flex-1">
        <span
          className="font-mono text-[11px] tracking-widest font-semibold"
          style={{ color: c.bg }}
        >
          {"\u26A1"} NEW SIGNAL DETECTED — {tweet.threatLevel} THREAT
        </span>
        <div className="font-sans text-[13px] text-text-secondary mt-1 leading-[1.4]">
          {tweet.text.slice(0, 120)}...
        </div>
      </div>
      <div className="flex gap-2 shrink-0 items-center">
        {tweet.targets.slice(0, 3).map((t, i) => (
          <span
            key={i}
            className="font-mono text-xs font-semibold px-2 py-0.5"
            style={{
              color: c.bg,
              border: `1px solid ${c.bg}40`,
              background: `${c.bg}10`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <button
        onClick={() => setVisible(false)}
        className="bg-transparent border-none text-text-faint cursor-pointer text-lg px-1"
      >
        {"\u00D7"}
      </button>
    </div>
  );
}
