# Farcaster Frame Demo (Base Sepolia)

Minimal Warpcast Frame that triggers an onchain transaction on Base Sepolia.  
Public & forkable. No secrets in repo.

## Deploy (Vercel)
1. Import this repo to Vercel.
2. Deploy → copy your domain → cast a link to `/api/frame`.

## Local dev
```bash
npm install
npm run dev
# open http://localhost:3000/api/frame

Notes

Uses dynamic host detection so og:image and Frame meta work on any domain.

Transactions use base-sepolia for zero-cost testing.
