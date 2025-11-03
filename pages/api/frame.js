export const config = { runtime: "edge" };

const predictions = [
  "A new Base block carries your destiny.",
  "Stars align for your next onchain move.",
  "Your wallet holds more than just coins.",
  "Someone will mint your vibes today.",
  "The oracle whispers: build, cast, repeat.",
  "The mempool hides a lucky surprise.",
  "A friend’s cast will change your timeline.",
  "You will uncover a hidden gem onchain.",
  "A cosmic drop approaches from the void.",
  "Gas fees will favor your next move.",
  "A builder’s spark ignites your fortune.",
  "The chain remembers your actions eternally.",
  "Your fate is written in block #∞.",
  "An unseen oracle watches your Base.",
  "Your next transaction opens a portal."
];

function getRandomPrediction() {
  const i = Math.floor(Math.random() * predictions.length);
  return predictions[i];
}

export default async function handler(req) {
  const url = new URL(req.url);
  const base = `${url.protocol}//${url.host}`;
  const timestamp = Date.now().toString();

  // POST: after Base transaction confirmed
  if (req.method === "POST") {
    const prediction = getRandomPrediction();
    const encoded = encodeURIComponent(prediction);
    const imageUrl = `${base}/api/og?text=${encoded}&v=${timestamp}`;
    const txUrl = `${base}/api/tx?v=${timestamp}`;

    const html = `
      <html>
        <head>
          <meta name="robots" content="noindex,nofollow" />
          <meta property="og:title" content="Your Fate 🪄" />
          <meta property="og:description" content="${prediction}" />
          <meta property="og:image" content="${imageUrl}" />

          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${imageUrl}" />

          <meta property="fc:frame:button:1" content="🔮 Try Again" />
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
        "Cache-Control": "public, max-age=60"
      },
    });
  }

  // GET: initial frame
  const imageUrl = `${base}/frame_v2.png?v=${timestamp}`;
  const txUrl = `${base}/api/tx?v=${timestamp}`;

  const html = `
    <html>
      <head>
        <meta name="robots" content="noindex,nofollow" />
        <meta property="og:title" content="Predict your fate 🪄" />
        <meta property="og:description" content="Press to summon your Base prediction" />
        <meta property="og:image" content="${imageUrl}" />

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
      "Cache-Control": "public, max-age=60"
    },
  });
}
