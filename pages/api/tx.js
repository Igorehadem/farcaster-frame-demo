export const config = { runtime: "edge" };

const CONTRACT_ADDRESS =
  process.env.CONTRACT_ADDRESS ||
  "0x0a827a81C2Dd01acc9fE1E3a8F7c7CB753F7405F";

// keccak256("predict(string)") = 0x2cde5c80
const SELECTOR_PREDICT = "0x2cde5c80";

export default async function handler(req) {
  const url = new URL(req.url);
  const base = `${url.protocol}//${url.host}`;
  const postUrl = `${base}/api/frame`;

  const fateNumber = Math.floor(Math.random() * 9999) + 1;
  const message = `Fate #${fateNumber}`;
  const messageHex = Buffer.from(message, "utf8").toString("hex");
  const messagePadded = messageHex.padEnd(64 * 2, "0");
  const calldata = `${SELECTOR_PREDICT}${messagePadded}`;

  const tx = {
    chain: "base", // только внутри
    method: "eth_sendTransaction",
    params: [
      {
        to: CONTRACT_ADDRESS,
        value: "0x0",
        data: calldata,
      },
    ],
  };

  const responseBody = {
    version: "vNext",
    title: "Predict your Fate",
    image: `${base}/frame_v2.png?v=${Date.now()}`,
    transactions: [tx],
    buttons: [{ label: "Confirm Prediction" }],
    post_url: postUrl,
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
