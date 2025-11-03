export const config = { runtime: "edge" };

// Read contract address from environment variable
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "0x0a827a81C2Dd01acc9fE1E3a8F7c7CB753F7405F";

// Function selector for predict(string): keccak256("predict(string)") = 0x2cde5c80
const SELECTOR_PREDICT = "0x2cde5c80";

export default async function handler() {
  // Generate a random Fate number between 1 and 9999
  const fateNumber = Math.floor(Math.random() * 9999) + 1;
  const message = `Fate #${fateNumber}`;

  // Encode message to hex (UTF-8 → hex string)
  const messageHex = Buffer.from(message, "utf8").toString("hex");
  // Pad to 32 bytes (64 hex chars)
  const messagePadded = messageHex.padEnd(64 * 2, "0");
  const calldata = `${SELECTOR_PREDICT}${messagePadded}`;

  // Prepare Base Mainnet transaction
  const tx = {
    chain: "base-mainnet",
    method: "eth_sendTransaction",
    params: [
      {
        to: CONTRACT_ADDRESS,
        value: "0x0",
        data: calldata,
      },
    ],
  };

  // Return Frame JSON payload for Warpcast
  const body = JSON.stringify({
    frame: {
      version: "next",
      title: "Predict your Fate",
      buttons: [{ label: "Confirm Prediction" }],
      post_url: "/api/frame",
      transactions: [tx],
    },
  });

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
