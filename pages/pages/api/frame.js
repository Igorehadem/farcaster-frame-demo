export default async function handler(req, res) {
  const host =
    req.headers["x-forwarded-host"] ||
    req.headers["host"] ||
    "localhost:3000";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const base = `${proto}://${host}`;
  const imageUrl = `${base}/frame.png`;
  const postUrl = `${base}/api/tx`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="Predict your fate 🪄" />
        <meta property="og:description" content="Press to summon a Base Sepolia transaction" />
        <meta property="og:image" content="${imageUrl}" />

        <!-- Warpcast Frame metadata -->
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="${imageUrl}" />
        <meta property="fc:frame:button:1" content="Summon Base Tx" />
        <meta property="fc:frame:post_url" content="${postUrl}" />
      </head>
      <body></body>
    </html>
  `);
}
