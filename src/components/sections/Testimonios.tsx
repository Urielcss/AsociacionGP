"use client";

import { useState } from "react";

const testimonios = [
  {
    id: 1,
    texto: "Gracias a la Asociación Gilberto Puebla, hoy mi familia cuenta con un hogar digno y seguro.",
    autor: "— Familia beneficiaria",
    imagenIzq: "/testimonios/3.png",
    imagenDer: "/images/web.jpg",
  },
  {
    id: 2,
    texto: "Hoy mi hijo, mi abuelita y yo tenemos un espacio digno para vivir. Gracias por cambiar nuestra vida",
    autor: "— Madre de familia",
    imagenIzq: "/testimonios/4.png",
    imagenDer: "/testimonios/infra1.png",
  },
  {
    id: 3,
    texto: "El proyecto del huerto me ayudó a descubrir mis habilidades y a creer más en mi futuro. Gracias por impulsarnos",
    autor: "— Estudiante beneficiario",
    imagenIzq: "/testimonios/6.png",
    imagenDer: "/testimonios/5.png",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);

  const anterior = () => {
    setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const t = testimonios[actual];

  return (
    <section style={{ background: "#fff", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>

        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: "700",
              letterSpacing: "0.2em",
              color: "#2E7D4F",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            Testimonios
          </p>
        </div>

        {/* Carrusel */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>

          {/* Flecha izquierda */}
          <button onClick={anterior} aria-label="Anterior" style={arrowStyle}>
            ‹
          </button>

          {/* Contenido */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              alignItems: "center",
            }}
          >

            {/* Imagen izquierda */}
            <div style={imgContainer}>
              <img src={t.imagenIzq} alt="Imagen izquierda" style={imgStyle} />
            </div>

            {/* Card */}
            <div style={cardStyle}>
              <span style={quoteTop}>"</span>
              <p style={textStyle}>{t.texto}</p>
              <span style={quoteBottom}>"</span>
              <p style={authorStyle}>{t.autor}</p>
            </div>

            {/* Imagen derecha */}
            <div style={imgContainer}>
              <img src={t.imagenDer} alt="Imagen derecha" style={imgStyle} />
            </div>

          </div>

          {/* Flecha derecha */}
          <button onClick={siguiente} aria-label="Siguiente" style={arrowStyle}>
            ›
          </button>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "2rem",
          }}
        >
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
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

/* estilos */

const arrowStyle: React.CSSProperties = {
  minWidth: "44px",
  height: "44px",
  borderRadius: "50%",
  border: "2px solid #2E7D4F",
  background: "transparent",
  color: "#2E7D4F",
  fontSize: "1.5rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

const imgContainer: React.CSSProperties = {
  width: "100%",
  height: "250px",
  borderRadius: "1.5rem",
  overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
  boxShadow: "0 4px 24px rgba(27,74,46,0.06)",
};

const quoteTop: React.CSSProperties = {
  color: "#2E7D4F",
  fontSize: "3.5rem",
  fontFamily: "Georgia, serif",
  lineHeight: 1,
};

const quoteBottom: React.CSSProperties = {
  ...quoteTop,
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
  fontWeight: "700",
  letterSpacing: "0.05em",
};