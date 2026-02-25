import type { Metadata } from "next";
import { IBM_Plex_Mono, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "THE HIT LIST — Tracking AI Market Disruption",
  description:
    "Every time Anthropic ships, public markets bleed. This page tracks the casualties in real time.",
  openGraph: {
    title: "THE HIT LIST — Tracking AI Market Disruption",
    description:
      "Every time Anthropic ships, public markets bleed. Real-time tracking of Claude AI's impact on public markets.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE HIT LIST — Tracking AI Market Disruption",
    description:
      "Every time Anthropic ships, public markets bleed. Real-time tracking of Claude AI's impact on public markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
