"use client";

export function ScanLine() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[linear-gradient(90deg,transparent,rgba(0,255,159,0.13),transparent)] animate-scanline" />
    </div>
  );
}
