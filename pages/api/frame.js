export const config = { runtime: "edge" };

export default async function handler(req) {
  const url = new URL(req.url);
  const base = `${url.protocol}//${url.host}`;
  const timestamp = Date.now().toString();

  const imageUrl = `${base}/frame_v2.png?v=${timestamp}`;
  const txUrl = `${base}/api/tx?v=${timestamp}`;

  const html = `
  <html>
    <head>
      <meta name="robots" content="noindex,nofollow" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${imageUrl}" />
      <meta property="fc:frame:button:1" content="Summon Base Tx" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="${txUrl}" />
    </head>
    <body></body>
  </html>
  `;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
