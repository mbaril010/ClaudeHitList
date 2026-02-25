"use client";

import { TWEETS } from "@/data/tweets";
import { EVENTS } from "@/data/events";
import { NEXT_TARGETS } from "@/data/targets";

type TabId = "feed" | "timeline" | "targets";

const TABS: { id: TabId; label: string; count: number }[] = [
  { id: "feed", label: "TWEET FEED", count: TWEETS.length },
  { id: "timeline", label: "CONFIRMED HITS", count: EVENTS.length },
  { id: "targets", label: "NEXT TARGETS", count: NEXT_TARGETS.length },
];

export function TabNavigation({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}) {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex" }}>
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="cursor-pointer font-mono text-xs tracking-[0.08em] transition-colors hover:text-white"
            style={{
              background: "none",
              border: "none",
              borderBottom: isActive
                ? "2px solid #ff0040"
                : "2px solid transparent",
              padding: "12px 20px",
              color: isActive ? "#ff0040" : "#444",
            }}
          >
            {tab.label}
            <span
              style={{
                marginLeft: 8,
                padding: "1px 6px",
                fontSize: 10,
                background: isActive
                  ? "rgba(255, 0, 64, 0.13)"
                  : "rgba(255, 255, 255, 0.03)",
                color: isActive ? "#ff0040" : "#555",
              }}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
