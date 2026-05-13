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
        <div style={{ fontSize: 42, color: "#22d3ee", marginBottom: 30 }}>
          SmartAIStack
        </div>

        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>
          Best AI Tools
          <br />
          Reviews 2026
        </div>

        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 40 }}>
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