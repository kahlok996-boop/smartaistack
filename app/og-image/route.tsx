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
          <span>AI Website Audit</span>
          <span>Premium Redesign</span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "32px",
            color: "#a1a1aa",
            marginTop: "40px",
          }}
        >
          Conversion Audit • Before / After • Lead Capture
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}