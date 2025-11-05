export const config = { runtime: "edge" };

const CONTRACT_ADDRESS =
  process.env.CONTRACT_ADDRESS ||
  "0x0a827a81C2Dd01acc9fE1E3a8F7c7CB753F7405F";

// keccak256("predict(string)") = 0x2cde5c80
const SELECTOR_PREDICT = "0x2cde5c80";

export default async function handler(req) {
  const base = `https://${req.headers.get("host")}`;

  // динамический контент
  const fateNumber = Math.floor(Math.random() * 9999) + 1;
  const message = `Fate #${fateNumber}`;
  const messageHex = Buffer.from(message, "utf8").toString("hex");
  const messagePadded = messageHex.padEnd(64 * 2, "0");
  const calldata = `${SELECTOR_PREDICT}${messagePadded}`;

  const body = {
    version: "next",
    title: "Predict your Fate ⚡",
    image: `${base}/frame_v2.png?v=${Date.now()}`,
    buttons: [
      {
        label: "Summon Base Tx",
        action: "tx",
        target: `${base}/api/tx`,
      },
    ],
    chain: "base",
    post_url: `${base}/api/frame`,
    transactions: [
      {
        chain: "base",
        method: "eth_sendTransaction",
        params: [
          {
            to: CONTRACT_ADDRESS,
            value: "0x0",
            data: calldata,
          },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
