"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import SplitText from "@/components/ui/SplitText";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      id="inicio"
      style={{ minHeight: "100vh", paddingTop: "80px", background: "#ffffff" }}
      className="relative flex items-center overflow-hidden"
    >
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
          min-height: calc(100vh - 80px);
        }
        .hero-texto {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        .hero-video-col {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            min-height: unset !important;
            padding-top: 2rem;
            padding-bottom: 3rem;
          }
          .hero-texto {
            padding-top: 1.5rem !important;
            padding-bottom: 0 !important;
            text-align: center;
            align-items: center;
          }
          .hero-texto p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-video-col {
            justify-content: center !important;
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .hero-deco {
            display: none !important;
          }
          .hero-video-wrap {
            width: 100% !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", width: "100%" }}>
        <div className="hero-grid">

          {/* Columna izquierda — texto */}
          <div
            className="hero-texto flex flex-col gap-6"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >

            {/* Título con SplitText animado */}
            <h1 style={{
              fontSize: "clamp(2.4rem, 6vw, 5rem)",
              fontWeight: "800",
              color: "#1B4A2E",
              lineHeight: "1.1",
              fontFamily: "var(--font-heading, 'Playfair Display', serif)",
              margin: 0,
            }}>
              {/* "Juntos" */}
              <SplitText
                text="Juntos"
                tag="span"
                className="block"
                delay={40}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />

              {/* "transformamos" en verde */}
              <span style={{ color: "#4CAF50" }}>
                <SplitText
                  text="transformamos"
                  tag="span"
                  className="block"
                  delay={40}
                  duration={1.25}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </span>

              {/* "vidas" */}
              <SplitText
                text="vidas"
                tag="span"
                className="block"
                delay={40}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            </h1>

            <p style={{
              color: "#3D3D3D",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              maxWidth: "480px",
              lineHeight: "1.7",
              margin: 0,
            }}>
              En Gilberto México trabajamos por el desarrollo comunitario, impulsando
              iniciativas que fortalecen el bienestar y la calidad de vida de comunidades vulnerables en Puebla y otras regiones de Puebla.
            </p>

            <div style={{ marginTop: "0.5rem" }}>
              <Link
                href="https://www.paypal.com/ncp/payment/ZKCR8Y5S2T5BA"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#2E7D4F",
                  color: "#fff",
                  fontWeight: "600",
                  padding: "14px 28px",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(46,125,79,0.3)",
                  transition: "background 0.2s",
                }}
              >
                🤝 Súmate hoy
              </Link>
            </div>
          </div>

          {/* Columna derecha — video */}
          <div className="hero-video-col">

            {/* Forma decorativa — se oculta en móvil */}
            <div
              className="hero-deco"
              style={{
                position: "absolute",
                top: "2rem",
                right: 0,
                width: "96%",
                bottom: "2rem",
                background: "#EAF5EE",
                borderRadius: "2.5rem",
                zIndex: 0,
              }}
            />

            {/* Contenedor video */}
            <div
              className="hero-video-wrap"
              style={{
                position: "relative",
                zIndex: 1,
                width: "94%",
                aspectRatio: "16 / 9",
                borderRadius: "1.75rem",
                overflow: "hidden",
                background: "#000",
                cursor: "pointer",
              }}
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/images/videohero.mp4"
                poster="/images/hero/hero-principal.jpg"
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Botón play verde */}
              {!playing && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.15)",
                  }}
                >
                  <button
                    aria-label="Reproducir video"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "#4CAF50",
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 32px rgba(76,175,80,0.5)",
                      transition: "transform 0.15s, background 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}