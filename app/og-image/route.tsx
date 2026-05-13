import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#020617",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "42px",
            color: "#22d3ee",
            marginBottom: "30px",
          }}
        >
          SmartAIStack
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "88px",
            fontWeight: 800,
            lineHeight: 1.05,
          }}
        >
          <span>Best AI Tools</span>
          <span>Reviews 2026</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "#a1a1aa",
            marginTop: "40px",
          }}
        >
          ChatGPT • Claude • Gemini • Cursor • Perplexity
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}