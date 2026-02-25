# THE HIT LIST

Every time Anthropic ships, public markets bleed. This page tracks the casualties in real time.

A real-time dashboard tracking Claude AI's market disruption impact — live stock prices, tweet signal analysis, and predicted next targets.

## Features

- **Live Stock Data** — Real-time prices from Finnhub API for ~28 tracked tickers
- **Tweet Signal Feed** — Curated @claudeai tweets with AI threat analysis and severity ratings
- **Confirmed Hits** — Timeline of market events with historical drops (TEAM -35%, IGV -30%, etc.)
- **Next Targets** — Predicted sectors in the crosshairs with threat probability bars
- **Alert System** — Email capture for market-moving signal notifications
- **ISR + Client Polling** — Server-rendered with 5min ISR, client polls every 60s for live feel

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **Finnhub API** (free tier, 60 calls/min)
- **Vercel** deployment with ISR

## Getting Started

```bash
npm install
```

Create a `.env.local` file:

```
FINNHUB_API_KEY=your_finnhub_api_key
```

Get a free API key at [finnhub.io](https://finnhub.io/).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push to GitHub
2. Import the repo in [Vercel](https://vercel.com/new)
3. Set the `FINNHUB_API_KEY` environment variable
4. Deploy

The app uses ISR (`revalidate = 300`) so stock data is embedded in the initial HTML and refreshes every 5 minutes server-side, with client-side polling every 60 seconds.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Fonts, metadata, OG tags
│   ├── page.tsx                # Server component with ISR
│   ├── globals.css             # Tailwind v4 theme + keyframes
│   └── api/
│       ├── stocks/route.ts     # GET — Finnhub proxy with 30s cache
│       └── alerts/route.ts     # POST — email capture
├── components/
│   ├── effects/                # ScanLine, GlitchText
│   ├── ui/                     # SeverityBadge, ThreatBar, Counter, TickerStrip
│   ├── alerts/                 # AlertBanner, AlertModal
│   ├── sections/               # Hero, TabNavigation, TweetFeed, ConfirmedHits, NextTargets
│   ├── cards/                  # TweetCard, CasualtyCard
│   ├── Footer.tsx
│   └── HitListShell.tsx        # Client orchestrator
├── data/                       # Typed event, tweet, and target arrays
├── lib/                        # Finnhub client, stock cache, ticker extraction
├── hooks/                      # useStockData (60s polling)
└── types/                      # TypeScript interfaces
```

## Disclaimer

Not financial advice. Hypothetical scenario analysis for entertainment purposes.
