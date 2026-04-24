import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Contra.Ventures — A product studio of one. Reclaiming tech for humans.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#F7F6F3",
        padding: "70px 80px",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#6E6E6E",
          fontSize: 22,
          letterSpacing: 4,
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        <span>
          contra<span style={{ color: "#B7482A" }}>.</span>ventures
        </span>
        <span>est. 2026 · bangalore</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 156,
            lineHeight: 0.92,
            letterSpacing: -4,
            color: "#111111",
            fontWeight: 600,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Take the power</span>
          <span style={{ fontStyle: "italic", color: "#B7482A" }}>back.</span>
        </div>
        <div
          style={{
            fontSize: 32,
            lineHeight: 1.4,
            color: "#3C3C3C",
            maxWidth: 900,
            marginTop: 32,
            fontStyle: "italic",
          }}
        >
          A product studio of one. Tools that return agency to the person
          holding the device.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#6E6E6E",
          fontSize: 22,
          letterSpacing: 3,
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
        <span>20+ builds shipped</span>
        <span>122 commits / 7d</span>
        <span>4 mcp servers</span>
        <span>by param vaswani</span>
      </div>
    </div>,
    { ...size },
  );
}
