export const config = { runtime: "edge" };

export default async function handler(req) {
  const url = new URL(req.url);
  const base = `${url.protocol}//${url.host}`;
  const ts = Date.now();

  const image = `${base}/frame_v2.png?v=${ts}`;
  const tx = `${base}/api/tx?v=${ts}`;

  const html = `
  <html>
    <head>
      <meta name="robots" content="noindex,nofollow" />
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${image}" />
      <meta property="fc:frame:post_url" content="${tx}" />
      <meta property="fc:frame:button:1" content="Summon Base Tx" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="${tx}" />
    </head>
    <body></body>
  </html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "CDN-Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
