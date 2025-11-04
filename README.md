Farcaster Frame Demo — Base (vNext)

Minimal Farcaster Frame that triggers an on-chain transaction on Base.
Production domain → https://igoreha.online

🌐 Live endpoints

Frame meta: https://igoreha.online/api/frame

Tx payload: https://igoreha.online/api/tx

Frame image: https://igoreha.online/frame_v2.png

💡 Add ?v=… to bypass cache
https://igoreha.online/api/frame?v=11

⚙️ How it works

/api/frame → returns HTML meta for vNext

fc:frame = vNext

fc:frame:version = 1

fc:frame:image, aspect_ratio = 1:1

fc:frame:post_url → /api/tx

button → “Summon Base Tx”

/api/tx → returns JSON

version:"next", image, buttons, post_url, transactions

🚀 Deploy on Vercel

Import repo → Framework Preset = Next.js

Build command → next build, output → .next

Add custom domain and set as Primary (apex)

Check /api/frame returns HTTP 200 with valid meta

🧪 Test in Warpcast

Post a cast with link → https://igoreha.online/api/frame?v=11

If no button:

use apex domain (no www.)

try mobile app (first to update)

add ?v=12 to bypass cache

new domains may need time to gain trust

💻 Local development
npm install  
npm run dev  
# open http://localhost:3000/api/frame

🔗 Chain / contract configuration

File → pages/api/tx.js

Defaults:
CONTRACT_ADDRESS = 0x0a827a81C2Dd01acc9fE1E3a8F7c7CB753F7405F
FRAME_CHAIN = base-mainnet

You can override via .env.local:

CONTRACT_ADDRESS=0xYourContract  
FRAME_CHAIN=base-sepolia

🧰 Troubleshooting

No button: check meta tags, HTTP 200, use apex, add ?v=…
routes-manifest error: use Next.js preset (next build, output .next)

🔒 Security notes

Never commit private keys or wallets.

Keep secrets only in .env.local.

.env.example is for structure only.

This demo has no signing or user-data storage.

📁 Structure
pages/
  index.js
  api/
    frame.js
    tx.js
    og.js
public/
  frame_v2.png
next.config.js
package.json
README.md


MIT License
