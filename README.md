[![Base](https://img.shields.io/badge/Network-Base-blue)](https://base.org)
[![Warpcast Frame](https://img.shields.io/badge/Farcaster-Frame-purple)](https://warpcast.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![Builder+](https://img.shields.io/badge/TalentProtocol-Builder%2B-teal)](https://talentprotocol.com)

# ⚡ Farcaster Frame Demo — Base (vNext)

> Minimal Farcaster Frame that triggers an onchain transaction on **Base Mainnet**.  
> Deployed version → [https://igoreha.online](https://igoreha.online)

---

## 🌐 Live Endpoints

| Endpoint | Description | Example |
|-----------|--------------|----------|
| `/api/frame` | HTML meta for Farcaster Frame | [🔗 View](https://igoreha.online/api/frame) |
| `/api/tx` | Transaction payload (JSON) | [🔗 View](https://igoreha.online/api/tx) |
| `/frame_v2.png` | Frame image (OG/preview) | [🖼️ View](https://igoreha.online/frame_v2.png) |

💡 Add `?v=<number>` to bypass cache  
Example → [https://igoreha.online/api/frame?v=11](https://igoreha.online/api/frame?v=11)

---

## ⚙️ How It Works

```
/api/frame → returns HTML meta
fc:frame = vNext
fc:frame:image → /frame_v2.png
fc:frame:button:1 → “Summon Base Tx”
fc:frame:button:1:action → tx
fc:frame:button:1:target → /api/tx
```

```
/api/tx → returns JSON
version: "next"
title: "Predict your Fate"
image, buttons, post_url, transactions[]
```

Each button in Warpcast triggers a transaction on the Base network via `eth_sendTransaction`.

---

## 🚀 Deploy on Vercel

1. **Import this repo** → Framework Preset = `Next.js`
2. **Build command:** `next build`
3. **Output directory:** `.next`
4. **Set custom domain** → apex only (`https://yourdomain.com`)
5. **Verify:** `/api/frame` returns HTTP 200 and valid meta

✅ Works automatically on any domain (dynamic host detection)

---

## 🧪 Test in Warpcast

To test the Frame:
1. Cast a link to → `https://igoreha.online/api/frame?v=11`
2. If **no button appears**:
   - Make sure you use **apex domain** (no `www.`)
   - Try opening **from mobile app**
   - Add `?v=12` to bypass cache  
   - New domains may need some trust-building time

---

## 💻 Local Development

```bash
npm install
npm run dev
# open http://localhost:3000/api/frame
```

---

## 🔗 Chain & Contract Configuration

📄 `pages/api/tx.js`

**Defaults:**
```
CONTRACT_ADDRESS = 0x0a827a81C2Dd01acc9fE1E3a8F7c7CB753F7405F
FRAME_CHAIN = base-mainnet
```

You can override using `.env.local`:
```
CONTRACT_ADDRESS=0xYourContract
FRAME_CHAIN=base-sepolia
```

---

## 🧰 Troubleshooting

| Issue | Fix |
|-------|-----|
| No Frame button | Check meta tags → use apex domain → add `?v=` |
| `routes-manifest.json` error | Ensure “Next.js” preset → build output `.next` |
| Frame cache not updating | Append random version param `?v=123` |
| Missing image | Ensure `/frame_v2.png` is in `public/` folder |

---

## 🔒 Security Notes

- ❌ Never commit private keys or wallet secrets.  
- ✅ Keep secrets only in `.env.local`.  
- `.env.example` exists only to show variable structure.  
- This demo **stores no user data** and performs **no signing**.

---

## 📁 Project Structure

```
pages/
  index.js
  api/
    frame.js
    tx.js
    og.js
lib/
  utils.js
public/
  frame_v2.png
next.config.js
package.json
README.md
```

---

## 🧩 Stack

- **Next.js 14 (Edge Runtime)**
- **Base Mainnet**
- **Farcaster vNext Frames**
- **@vercel/og** for dynamic image rendering

---

## 📜 License

MIT License © 2025 [Igorehadem](https://github.com/Igorehadem)
