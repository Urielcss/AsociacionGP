import Link from "next/link";

export default function Sumate() {
  return (
    <section id="sumate" style={{ position: "relative", padding: "6rem 0", overflow: "hidden", background: "#1B4A2E" }}>
      <style>{`
        .sumate-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .sumate-img {
          height: 380px;
        }
        @media (max-width: 768px) {
          .sumate-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .sumate-img {
            height: 280px !important;
          }
        }
      `}</style>

      {/* Ola decorativa superior */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", overflow: "hidden", lineHeight: 0, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div className="sumate-grid">

          {/* Texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span style={{ fontSize: "1.5rem" }}></span>
              <p style={{
                fontSize: "0.7rem",
                fontWeight: "700",
                letterSpacing: "0.2em",
                color: "#4CAF50",
                textTransform: "uppercase",
                margin: 0,
              }}>
              
              </p>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: "800",
              color: "#ffffff",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: "1.15",
              margin: 0,
            }}>
              Tu Apoyo
            </h2>

            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: "1.75", maxWidth: "420px", margin: 0 }}>
              abre caminos, <strong style={{ color: "#ffffff" }}> crea oportunidades y transforma vidas.</strong>
              
            </p>

            <div>
              <Link
                href="https://www.paypal.com/ncp/payment/ZKCR8Y5S2T5BA"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#4CAF50",
                  color: "#ffffff",
                  fontWeight: "700",
                  padding: "16px 32px",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  boxShadow: "0 8px 24px rgba(76,175,80,0.35)",
                  transition: "background 0.2s",
                }}
              >
                → Súmate hoy
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div
            className="sumate-img"
            style={{
              position: "relative",
              borderRadius: "1.5rem",
              overflow: "hidden",
              background: "rgba(46,125,79,0.25)",
            }}
          >
            <img
              src="/images/nino.JPG"
              alt="Súmate"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}