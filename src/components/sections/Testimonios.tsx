"use client";

import { useState } from "react";

const testimonios = [
  {
    id: 1,
    texto: "Gracias a la Asociación Gilberto Puebla, hoy mi familia cuenta con un hogar digno y seguro.",
    autor: "— Familia beneficiaria",
    imagenIzq: "/testimonios/1-3.png",
    imagenDer: "/testimonios/1-2.png",
  },
  {
    id: 2,
    texto: "Hoy mi hijo, mi abuelita y yo tenemos un espacio digno para vivir. Gracias por cambiar nuestra vida",
    autor: "— Madre de familia",
    imagenIzq: "/testimonios/1.png",
    imagenDer: "/testimonios/1-4.png",
  },
  {
    id: 3,
    texto: "El proyecto del huerto me ayudó a descubrir mis habilidades y a creer más en mi futuro. Gracias por impulsarnos",
    autor: "— Estudiante beneficiario",
    imagenIzq: "/testimonios/1-7.png",
    imagenDer: "/testimonios/1-6.png",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);

  const anterior = () =>
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));

  const siguiente = () =>
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));

  const t = testimonios[actual];

  return (
    <>
      {/* ── Media queries: desktop mantiene layout original, móvil apila ── */}
      <style>{`
        .testimonios-section {
          background: #fff;
          padding: 5rem 0;
          width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }
        .testimonios-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          width: 100%;
          box-sizing: border-box;
        }
        .testimonios-carousel {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        /* ── DESKTOP: layout original imagen | card | imagen ── */
        .testimonios-content {
          flex: 1;
          min-width: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.25rem;
          align-items: center;
          box-sizing: border-box;
        }
        .testimonios-img-wrapper {
          width: 100%;
          height: 250px;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        .testimonios-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── MÓVIL: card arriba, imágenes abajo en fila ── */
        @media (max-width: 768px) {
          .testimonios-carousel {
            gap: 0.5rem;
          }
          .testimonios-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .testimonios-img-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
            width: 100%;
            box-sizing: border-box;
          }
          .testimonios-img-wrapper {
            height: 160px;
            border-radius: 1.25rem;
          }
          /* En móvil ocultamos las imágenes en su posición de grid original
             y mostramos la fila de imágenes al final */
          .testimonios-img-left,
          .testimonios-img-right {
            display: none;
          }
          .testimonios-img-row {
            display: grid;
          }
        }

        /* En desktop ocultamos la fila de imágenes móvil */
        @media (min-width: 769px) {
          .testimonios-img-row {
            display: none;
          }
        }

        .testimonios-arrow {
          flex-shrink: 0;
          width: 44px;
          min-width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid #2E7D4F;
          background: transparent;
          color: #2E7D4F;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .testimonios-arrow {
            width: 36px;
            min-width: 36px;
            height: 36px;
            font-size: 1.25rem;
          }
        }
      `}</style>

      <section className="testimonios-section">
        <div className="testimonios-container">

          {/* Título */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={labelStyle}>Testimonios</p>
          </div>

          {/* Carrusel */}
          <div className="testimonios-carousel">

            {/* Flecha izquierda */}
            <button onClick={anterior} aria-label="Anterior" className="testimonios-arrow">
              ‹
            </button>

            {/* Contenido */}
            <div className="testimonios-content">

              {/* Imagen izquierda — solo visible en desktop */}
              <div className="testimonios-img-wrapper testimonios-img-left">
                <img src={t.imagenIzq} alt="Imagen izquierda" />
              </div>

              {/* Card central */}
              <div style={cardStyle}>
                <span style={quoteTop}>"</span>
                <p style={textStyle}>{t.texto}</p>
                <span style={quoteBottom}>"</span>
                <p style={authorStyle}>{t.autor}</p>
              </div>

              {/* Imagen derecha — solo visible en desktop */}
              <div className="testimonios-img-wrapper testimonios-img-right">
                <img src={t.imagenDer} alt="Imagen derecha" />
              </div>

              {/* Fila de imágenes — solo visible en móvil */}
              <div className="testimonios-img-row">
                <div className="testimonios-img-wrapper">
                  <img src={t.imagenIzq} alt="Imagen izquierda" />
                </div>
                <div className="testimonios-img-wrapper">
                  <img src={t.imagenDer} alt="Imagen derecha" />
                </div>
              </div>

            </div>

            {/* Flecha derecha */}
            <button onClick={siguiente} aria-label="Siguiente" className="testimonios-arrow">
              ›
            </button>

          </div>

          {/* Dots */}
          <div style={dotsWrapperStyle}>
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setActual(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                style={{
                  width: i === actual ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "999px",
                  background: i === actual ? "#2E7D4F" : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

/* ─── Estilos inline (no dependen de breakpoints) ─────────────── */

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.2em",
  color: "#2E7D4F",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
};

const cardStyle: React.CSSProperties = {
  background: "#F7F7F7",
  borderRadius: "1.5rem",
  padding: "2.5rem 2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1rem",
  boxSizing: "border-box",
  width: "100%",
  boxShadow: "0 4px 24px rgba(27,74,46,0.06)",
};

const quoteTop: React.CSSProperties = {
  color: "#2E7D4F",
  fontSize: "3.5rem",
  fontFamily: "Georgia, serif",
  lineHeight: 1,
};

const quoteBottom: React.CSSProperties = {
  color: "#2E7D4F",
  fontSize: "3.5rem",
  fontFamily: "Georgia, serif",
  lineHeight: 1,
  alignSelf: "flex-end",
};

const textStyle: React.CSSProperties = {
  color: "#3D3D3D",
  fontSize: "1rem",
  lineHeight: "1.7",
};

const authorStyle: React.CSSProperties = {
  color: "#1B4A2E",
  fontSize: "0.8rem",
  fontWeight: 700,
  letterSpacing: "0.05em",
};

const dotsWrapperStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "2rem",
};