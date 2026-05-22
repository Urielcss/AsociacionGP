"use client";

import LogoLoop from "@/components/ui/LogoLoop";

const aliados = [
  { src: "/aliados/audiag.png",  alt: "Audi" },
  { src: "/aliados/aliados-08.png",  alt: "Mujeres Líderes de Hoy" },
  { src: "/aliados/aliados-05.png",  alt: "Universidad Madero UMAD" },
  { src: "/aliados/aliados-07.png",  alt: "UNAM" },
  { src: "/aliados/aliados-04.png",  alt: "UPAEP" },
  { src: "/aliados/aliados-06.png",  alt: "Grupo Excelencia" },
  { src: "/aliados/aliados.png",     alt: "Construyendo AC" },
  { src: "/aliados/aliados-03.png",  alt: "PRISSA" },
  { src: "/aliados/aliados-02.png",  alt: "Terre des Hommes" },
  { src: "/aliados/aliados-10.png",  alt: "Esperanza del Mañana" },
];

export default function Aliados() {
  return (
    <section style={{ background: "#F7F7F7", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.2em",
            color: "#2E7D4F",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            Aliados que
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: "800",
            color: "#1B4A2E",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Construyen Cambios
          </h2>
        </div>

        {/* Altura reservada antes de que carguen los logos */}
        <div style={{
          position: "relative",
          minHeight: "170px",
          display: "flex",
          alignItems: "center",
        }}>
          <LogoLoop
            logos={aliados}
            speed={80}
            direction="left"
            logoHeight={150}
            gap={0}
            pauseOnHover
            fadeOut
            fadeOutColor="#F7F7F7"
            scaleOnHover
            ariaLabel="Aliados de Asociación Gilberto AC"
            renderItem={(item) => {
              const img = item as { src: string; alt?: string };
              return (
                <div style={{
                  padding: "0 60px",
                  display: "flex",
                  alignItems: "center",
                  minWidth: "160px",
                }}>
                  <img
                    src={img.src}
                    alt={img.alt ?? ""}
                    loading="eager"
                    fetchPriority="high"
                    style={{
                      height: "170px",
                      width: "auto",
                      aspectRatio: "auto",
                      objectFit: "contain",
                      display: "block",
                    }}
                    draggable={false}
                  />
                </div>
              );
            }}
          />
        </div>

      </div>
    </section>
  );
}