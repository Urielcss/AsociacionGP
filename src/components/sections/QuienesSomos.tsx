export default function QuienesSomos() {
  return (
    <section id="nosotros" style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}>

          {/* Imagen equipo */}
        
        <img src="/images/web.jpg" alt="Equipo" style={{width:"100%",height:"100%",objectFit:"cover"}} />
    
          {/* Texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{
              fontSize: "0.7rem",
              fontWeight: "700",
              letterSpacing: "0.2em",
              color: "#2E7D4F",
              textTransform: "uppercase",
            }}>
              Nosotros
            </p>

            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: "800",
              color: "#1B4A2E",
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: "1.2",
            }}>
              ¿Quiénes Somos?
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "#3D3D3D", fontSize: "1rem", lineHeight: "1.75" }}>
                <strong>Gilberto Puebla</strong> es la sede de Asociación Gilberto México
                en el Estado de Puebla. Somos una institución sin fines de lucro que, desde
                2017, inició actividades en San Pedro Atlixco, brindando apoyo a familias
                afectadas por el sismo de ese mismo año.
              </p>
              <p style={{ color: "#3D3D3D", fontSize: "1rem", lineHeight: "1.75" }}>
                Actualmente, hemos ampliado nuestra área de acción hacia San José Chiapa y
                la Sierra Nororiental del Estado de Puebla, trabajando por el desarrollo
                comunitario e impulsando iniciativas que fortalecen el bienestar y la
                calidad de vida de las comunidades, a través de programas enfocados en
                salud, infraestructura y educación.
              </p>
            </div>

            {/* Misión */}
            <div style={{
              background: "#EAF5EE",
              borderLeft: "4px solid #2E7D4F",
              borderRadius: "0 1.25rem 1.25rem 0",
              padding: "1.5rem 1.75rem",
            }}>
              <p style={{
                fontSize: "0.65rem",
                fontWeight: "800",
                letterSpacing: "0.15em",
                color: "#2E7D4F",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}>
                Misión
              </p>
              <p style={{ color: "#1B4A2E", fontSize: "0.95rem", lineHeight: "1.7" }}>
                Contribuir al desarrollo social en zonas más vulnerables del Estado de
                Puebla, mediante proyectos orientados al bienestar y la mejora de la
                calidad de vida de las familias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}