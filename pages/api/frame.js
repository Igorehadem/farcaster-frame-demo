export const config = { runtime: "edge" }; // Use Edge runtime

export default async function handler(req) {
  const url = new URL(req.url);
  const base = `${url.protocol}//${url.host}`;
  const imageUrl = `${base}/frame.png`;
  const postUrl = `${base}/api/tx`;

  const html = `
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
  `;

  return new Response(html, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
