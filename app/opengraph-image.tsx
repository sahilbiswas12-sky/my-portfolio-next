import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Sahil Biswas — Web Developer, AI Engineer & Business Professional";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background:
            "linear-gradient(135deg, #050505 0%, #071b2b 55%, #31205f 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 28,
          }}
        >
          SAHIL BISWAS
        </div>

        <div
          style={{
            maxWidth: 1000,
            fontSize: 70,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          I build practical web applications that turn ideas into working
          products.
        </div>

        <div
          style={{
            marginTop: 42,
            fontSize: 30,
            color: "#cbd5e1",
          }}
        >
          Web Developer • AI Engineer • Business Professional
        </div>
      </div>
    ),
    size,
  );
}