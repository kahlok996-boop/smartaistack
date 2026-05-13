import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SmartAIStack";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 42,
            color: "#22d3ee",
            marginBottom: 30,
          }}
        >
          SmartAIStack
        </div>

        <div
          style={{
            fontSize: 90,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 40,
          }}
        >
          Best AI Tools
          <br />
          Reviews 2026
        </div>

        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
          }}
        >
          ChatGPT • Claude • Gemini • Cursor • Perplexity
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}