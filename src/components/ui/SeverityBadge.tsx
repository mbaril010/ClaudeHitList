import type { Severity } from "@/types";

const STYLES: Record<Severity, string> = {
  CRITICAL:
    "border-danger/100 bg-danger/[0.13] text-danger",
  HIGH: "border-warning/100 bg-warning/[0.13] text-warning",
  MODERATE:
    "border-caution/100 bg-caution/[0.13] text-caution",
};

export function SeverityBadge({ level }: { level: Severity }) {
  return (
    <span
      className={`px-2.5 py-0.5 font-mono text-[10px] font-semibold tracking-widest uppercase border ${STYLES[level]}`}
    >
      {level}
    </span>
  );
}
