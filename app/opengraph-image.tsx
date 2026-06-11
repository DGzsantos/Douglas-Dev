import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const alt = "CouderLab — Sistemas e Automação para Empresas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = fs.readFileSync(path.join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a2a52 0%, #0a0f1e 55%, #0b3340 100%)",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 280,
            background: "rgba(37,99,235,0.25)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img
          src={logoSrc}
          alt=""
          width={120}
          height={120}
          style={{ marginBottom: 28, position: "relative" }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 900,
            color: "white",
            letterSpacing: "-0.03em",
            position: "relative",
          }}
        >
          Couder
          <span
            style={{
              backgroundImage: "linear-gradient(to right, #3b82f6, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Lab
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#94a3b8",
            marginTop: 22,
            textAlign: "center",
            position: "relative",
            fontWeight: 500,
          }}
        >
          Sistemas e automação para empresas
        </div>
      </div>
    ),
    { ...size }
  );
}
