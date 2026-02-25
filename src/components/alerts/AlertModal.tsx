"use client";

import { useState } from "react";

export function AlertModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    onSubmit(email);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center animate-fade-in-up"
      onClick={onClose}
    >
      <div
        className="bg-bg-surface border border-danger/[0.19] p-10 max-w-[480px] w-[90%]"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <div className="font-mono text-[11px] text-danger tracking-[0.15em] mb-2">
              {"\uD83D\uDD14"} ALERT CONFIGURATION
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Never miss a signal
            </h3>
            <p className="text-sm text-text-faint mb-6 leading-[1.5]">
              Get notified when @claudeai tweets something that could move
              markets. AI analyzes each tweet in real time and only alerts on
              HIGH or CRITICAL threats.
            </p>
            <div className="mb-4">
              <label className="font-mono text-[10px] text-text-faint tracking-widest block mb-1.5">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full p-3 px-4 bg-bg border border-border-light text-white font-mono text-sm outline-none focus:border-danger/40 transition-colors"
              />
            </div>
            <div className="flex gap-2 mb-5">
              {["CRITICAL", "HIGH", "ALL"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted cursor-pointer"
                >
                  <input
                    type="checkbox"
                    defaultChecked={level !== "ALL"}
                    className="accent-danger"
                  />
                  {level}
                </label>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-3.5 bg-danger border-none text-white cursor-pointer font-mono text-[13px] font-bold tracking-widest hover:brightness-110 transition-all"
            >
              ACTIVATE ALERTS
            </button>
          </>
        ) : (
          <div className="text-center py-5">
            <div className="text-5xl mb-4">{"\u2713"}</div>
            <h3 className="font-display text-2xl font-bold text-success mb-2">
              Alerts Activated
            </h3>
            <p className="text-sm text-text-faint mb-6">
              You&apos;ll receive real-time alerts when @claudeai drops anything
              that could move markets.
            </p>
            <button
              onClick={onClose}
              className="py-3 px-8 bg-transparent border border-success/25 text-success cursor-pointer font-mono text-xs tracking-[0.08em] hover:bg-success/10 transition-colors"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
