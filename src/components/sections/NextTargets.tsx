"use client";

import { NEXT_TARGETS } from "@/data/targets";
import { ThreatBar } from "@/components/ui/ThreatBar";
import type { StockData } from "@/types";

export function NextTargets({ stockData }: { stockData: StockData }) {
  return (
    <div>
      <div className="font-mono text-[11px] text-warning tracking-[0.15em] uppercase mb-3 flex items-center gap-3">
        <span className="w-6 h-px bg-warning/25" />
        INCOMING — PREDICTED TARGETS
      </div>
      <p className="text-sm text-text-ghost mb-8 max-w-[560px]">
        Claude sees what&apos;s coming next. These sectors are in the
        crosshairs.
      </p>
      <div className="flex flex-col gap-0.5">
        {NEXT_TARGETS.map((target, i) => (
          <div
            key={i}
            className="bg-bg-card border border-border-faint transition-all duration-300 hover:border-success/[0.13] hover:translate-x-1"
            style={{
              padding: "20px 28px",
              animation: `fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.3}s both`,
            }}
          >
            <div className="grid grid-cols-[40px_1fr_180px] items-center gap-5">
              <span className="text-2xl">{target.icon}</span>
              <div>
                <div className="font-display text-base font-semibold text-[#ddd]">
                  {target.sector}
                </div>
                <div className="font-mono text-xs text-text-faint mt-0.5 flex gap-1.5">
                  {target.tickers.map((t, j) => {
                    const live = stockData[t];
                    return (
                      <span key={j}>
                        {t}
                        {live && (
                          <span className="text-text-ghost text-[10px] ml-0.5">
                            ${live.price.toFixed(0)}
                          </span>
                        )}
                        {j < target.tickers.length - 1 && (
                          <span className="text-text-ghost mx-0.5">
                            {" \u00B7 "}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
              <ThreatBar value={target.threat} delay={i * 150 + 800} />
            </div>
            <div className="mt-2.5 ml-[60px] font-mono text-xs text-text-ghost leading-[1.5] italic">
              &ldquo;{target.signal}&rdquo;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
