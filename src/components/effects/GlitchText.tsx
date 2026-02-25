"use client";

import { useState, useEffect } from "react";

export function GlitchText({ children }: { children: React.ReactNode }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      },
      3000 + Math.random() * 5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="relative inline-block transition-transform"
      style={
        glitch
          ? {
              textShadow: "2px 0 #ff0040, -2px 0 #00ff9f",
              transform: `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`,
            }
          : undefined
      }
    >
      {children}
    </span>
  );
}
