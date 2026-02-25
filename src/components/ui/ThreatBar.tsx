"use client";

import { useState, useEffect } from "react";

export function ThreatBar({
  value,
  delay = 0,
}: {
  value: number;
  delay?: number;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);

  const color =
    value > 85 ? "var(--color-danger)" : value > 75 ? "var(--color-warning)" : "var(--color-caution)";

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-[#1a1a2e] rounded-[3px] overflow-hidden">
        <div
          className="h-full rounded-[3px] transition-[width] duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 10px ${color}44`,
          }}
        />
      </div>
      <span
        className="font-mono text-[13px] font-bold min-w-[36px] text-right"
        style={{ color }}
      >
        {value}%
      </span>
    </div>
  );
}
