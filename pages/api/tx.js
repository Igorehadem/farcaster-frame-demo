export const config = { runtime: "edge" };

export default async function handler() {
  const tx = {
    chain: "base-sepolia",
    method: "eth_sendTransaction",
    params: [
      {
        to: "0x0000000000000000000000000000000000000000",
        value: "0x0",
        data: "0x",
      },
    ],
  };

  const body = JSON.stringify({
    frame: {
      version: "next",
      title: "Base Sepolia Demo",
      buttons: [{ label: "Confirm on Base" }],
      post_url: "/api/frame",
      transactions: [tx],
    },
  });

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
