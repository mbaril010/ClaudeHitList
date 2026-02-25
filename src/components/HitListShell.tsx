"use client";

import { useState } from "react";
import { useStockData } from "@/hooks/useStockData";
import { ScanLine } from "@/components/effects/ScanLine";
import { TickerStrip } from "@/components/ui/TickerStrip";
import { AlertBanner } from "@/components/alerts/AlertBanner";
import { AlertModal } from "@/components/alerts/AlertModal";
import { Hero } from "@/components/sections/Hero";
import { TabNavigation } from "@/components/sections/TabNavigation";
import { TweetFeed } from "@/components/sections/TweetFeed";
import { ConfirmedHits } from "@/components/sections/ConfirmedHits";
import { NextTargets } from "@/components/sections/NextTargets";
import { Footer } from "@/components/Footer";
import { TWEETS } from "@/data/tweets";
import type { StockData } from "@/types";

type TabId = "feed" | "timeline" | "targets";

export function HitListShell({
  initialStockData,
}: {
  initialStockData: StockData;
}) {
  const stockData = useStockData(initialStockData);
  const [activeTab, setActiveTab] = useState<TabId>("feed");
  const [showAlertModal, setShowAlertModal] = useState(false);

  const newTweet = TWEETS.find(
    (t) =>
      t.isNew && (t.threatLevel === "CRITICAL" || t.threatLevel === "HIGH")
  );

  const handleAlertSubmit = async (email: string) => {
    try {
      await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Silently fail for now
    }
  };

  return (
    <div className="min-h-screen">
      <ScanLine />
      <TickerStrip stockData={stockData} />
      <AlertBanner tweet={newTweet} />
      <Hero onAlertClick={() => setShowAlertModal(true)} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 40px 80px" }}>
        {activeTab === "feed" && <TweetFeed stockData={stockData} />}
        {activeTab === "timeline" && <ConfirmedHits stockData={stockData} />}
        {activeTab === "targets" && <NextTargets stockData={stockData} />}
      </div>

      {showAlertModal && (
        <AlertModal
          onClose={() => setShowAlertModal(false)}
          onSubmit={handleAlertSubmit}
        />
      )}

      <Footer />
    </div>
  );
}
