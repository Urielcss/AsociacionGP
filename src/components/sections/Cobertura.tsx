const municipios = [
  "Caltepecán de Progreso",
  "Sierra Norte de Puebla",
  "Tlacoacapan de Ocampo",
  "Ayoxitánoc de Guerrero",
  "Huauchinango",
  "Zacapoaxtla",
  "Zacatlán de Álvarez",
  "Nauzontla",
  "Xochitlán de Vicente Suárez",
  "Zongozotla",
  "San José Chiapa",
];

export default function Cobertura() {
  return (
    <section style={{ background: "#1B4A2E", padding: "5rem 0", overflow: "hidden" }}>
      <style>{`
        .cobertura-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }
        .cobertura-municipios {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.875rem;
        }
        .cobertura-img {
          height: 380px;
        }
        @media (max-width: 900px) {
          .cobertura-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .cobertura-municipios {
            grid-template-columns: 1fr 1fr !important;
          }
          .cobertura-img {
            height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          .cobertura-municipios {
            grid-template-columns: 1fr !important;
          }
          .cobertura-img {
            height: 240px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.2em",
            color: "#4CAF50",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            Dónde estamos
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: "800",
            color: "#ffffff",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Nuestra Cobertura
          </h2>
        </div>

        <div className="cobertura-grid">

          {/* Lista municipios — 2 columnas en tablet/desktop, 1 en móvil */}
          <div className="cobertura-municipios">
            {municipios.map((m) => (
              <div key={m} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{
                  width: "10px",
                  height: "10px",
                  minWidth: "10px",
                  borderRadius: "50%",
                  background: "#4CAF50",
                  display: "inline-block",
                }} />
                <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", fontWeight: "500", margin: 0 }}>
                  {m}
                </p>
              </div>
            ))}
          </div>

          {/* Mapa */}
          <div
            className="cobertura-img"
            style={{
              position: "relative",
              borderRadius: "1.5rem",
              background: "rgba(46,125,79,0.25)",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/municipios.png"
              alt="Mapa de municipios"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Imagen comunidad */}
          <div
            className="cobertura-img"
            style={{
              position: "relative",
              borderRadius: "1.5rem",
              background: "rgba(46,125,79,0.25)",
              overflow: "hidden",
            }}
          >
            <img
              src="/images/EDU.jpg"
              alt="Comunidad"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />

            {/* Badge */}
            <div style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "1rem",
              right: "1rem",
              background: "#2E7D4F",
              borderRadius: "1.25rem",
              padding: "1rem 1.25rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            }}>
              <span style={{ fontSize: "1.2rem" }}>🤝</span>
              <p style={{ color: "#ffffff", fontSize: "0.85rem", fontWeight: "600", lineHeight: "1.4", margin: 0 }}>
                Trabajamos en comunidades para generar un impacto real y sostenible.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}