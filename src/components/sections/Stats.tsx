const stats = [
  {
    icon: "👥",
    numero: "+3,000",
    label: "Pacientes atendidos",
    detalle: "en 6 jornadas odontológicas.",
  },
  {
    icon: "🏠",
    numero: "51 casas",
    label: "entregadas",
    detalle: "impactando a más de 200 personas.",
  },
  {
    icon: "🎓",
    numero: "+987",
    label: "estudiantes beneficiados",
    detalle: "con nuestros programas de educación.",
  },
];

export default function Stats() {
  return (
    <section style={{ background: "#F7F7F7", padding: "4rem 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {stats.map((stat) => (
            <div
              key={stat.numero}
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem 1.75rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                boxShadow: "0 4px 24px rgba(27,74,46,0.08)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                minWidth: "52px",
                background: "#1B4A2E",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.4rem",
              }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ color: "#1B4A2E", fontSize: "1.75rem", fontWeight: "800", lineHeight: "1.1" }}>
                  {stat.numero}
                </p>
                <p style={{ color: "#3D3D3D", fontSize: "0.9rem", fontWeight: "600", marginTop: "4px" }}>
                  {stat.label}
                </p>
                <p style={{ color: "#9E9E9E", fontSize: "0.8rem", marginTop: "4px" }}>
                  {stat.detalle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}