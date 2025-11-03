export const config = {
  runtime: "edge",
};

export default async function handler(req, res) {
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

  res.status(200).json({
    frame: {
      version: "next",
      title: "Base Sepolia Demo",
      buttons: [{ label: "Confirm on Base" }],
      post_url: "/api/frame",
      transactions: [tx],
    },
  });
}
