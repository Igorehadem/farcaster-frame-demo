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

      <!-- ✅ Updated Farcaster Frame tags -->
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:version" content="1" />
      <meta property="fc:frame:image" content="${imageUrl}" />
      <meta property="fc:frame:image:aspect_ratio" content="1:1" />
      <meta property="fc:frame:post_url" content="${txUrl}" />
      <meta property="fc:frame:button:1" content="Summon Base Tx" />
      <meta property="fc:frame:button:1:action" content="tx" />
      <meta property="fc:frame:button:1:target" content="${txUrl}" />

      <!-- OpenGraph -->
      <meta property="og:title" content="Predict your fate 🪄" />
      <meta property="og:description" content="Press to summon your Base prediction" />
      <meta property="og:image" content="${imageUrl}" />
    </head>
    <body></body>
  </html>
`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
