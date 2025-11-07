import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

// Use @vercel/og to render a starry background with centered text
// Render a dynamic Open Graph image for Farcaster Frame using @vercel/og
export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Your Fate Awaits";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, #000000 0%, #020817 30%, #020111 100%)",
          color: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Star layer */}
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: "white",
              borderRadius: "50%",
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {/* Central dark area */}
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: "40%",
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
            filter: "blur(8px)",
          }}
        />

        {/* Prediction text */}
        <div
          style={{
            zIndex: 10,
            padding: "40px",
            maxWidth: "80%",
            fontFamily: "sans-serif",
            fontWeight: "600",
            textShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
        >
          {text}
        </div>

        {/* Footer label */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 60,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
            fontFamily: "monospace",
          }}
        >
          base-oracle ✦
        </div>
      </div>
    ),
    {
      width: 1024,
      height: 1024,
    }
  );
}
