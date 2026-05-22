const programas = [
  {
    id: "salud",
    icono: "🏥",
    titulo: "Salud",
    descripcion: [
      "El programa de salud vincula a más de 20 doctores especialistas de la UNAM y aliados estratégicos para brindar servicios de odontología y optometría gratuita.",
      "A la fecha se han realizado 6 jornadas en comunidades como San José Chiapa, Cuetzalan del Progreso, Ciudad de Puebla y Zacapoaxtla, atendiendo a más de 3,400 pacientes; ofreciendo los servicios de profilaxis, curaciones, endodoncias, extracciones, entre otros.",
    ],
    imagenes: [
      { src: "/images/salud1.jpg", alt: "Jornada de salud dental" },
      { src: "/images/salud2.png", alt: "Atención médica gratuita" },
      { src: "/images/salud3.png", alt: "Doctores especialistas UNAM" },
    ],
  },
  {
    id: "infraestructura",
    icono: "🏠",
    titulo: "Infraestructura",
    descripcion: [
      "Este programa tiene el objetivo de mejorar la calidad de vida de familias en situación de vulnerabilidad, atendiendo problemáticas como el hacinamiento y condiciones de salud. El programa otorga viviendas de 45 m², promoviendo entornos dignos y seguros que contribuyen al bienestar social.",
      "Este esfuerzo se realiza en colaboración con la Universidad Anáhuac Puebla y Construyendo AC. A la fecha se han entregado 51 casas, impactando la vida de 204 personas de manera directa en San Pedro Atlixco y San Miguel Tzinacapan, Puebla, México.",
    ],
    imagenes: [
      { src: "/images/infra1.png", alt: "Entrega de vivienda" },
      { src: "/images/infra2.png", alt: "Construcción de casas" },
      { src: "/images/infra3.jpg", alt: "Familias beneficiadas" },
    ],
  },
  {
    id: "educacion",
    icono: "🎓",
    titulo: "Educación",
    descripcion: [
      "Desde el año 2023, en alianza con Audi AG y Terre des Hommes, se implementa el programa \"Aprendiendo en Comunidad\" en tres bachilleratos de San José Chiapa, beneficiando a 987 estudiantes, 40 docentes y 291 padres de familia.",
      "El programa se ejecuta en alianza con Enseña por México con el objetivo de impulsar la permanencia y continuidad educativa mediante el desarrollo de competencias clave para reducir el rezago y la deserción escolar, así como para fortalecer el acceso a la educación superior y al empleo formal.",
    ],
    imagenes: [
      { src: "/images/edu1.jpg", alt: "Programa educativo en aula" },
      { src: "/images/edu2.png", alt: "Estudiantes beneficiados" },
      { src: "/images/edu3.png", alt: "Aprendiendo en comunidad" },
    ],
  },
];

export default function Programas() {
  return (
    <section id="programas" style={{ background: "#ffffff", padding: "5rem 0" }}>
      <style>{`
        .programas-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .programas-galeria {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.75rem;
          height: 220px;
        }
        @media (max-width: 768px) {
          .programas-row {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            direction: ltr !important;
          }
          .programas-galeria {
            height: 180px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Título */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "0.2em",
            color: "#2E7D4F",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}>
            Lo que hacemos
          </p>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: "800",
            color: "#1B4A2E",
            fontFamily: "'Playfair Display', Georgia, serif",
          }}>
            Nuestros Programas
          </h2>
          <div style={{
            width: "56px",
            height: "4px",
            background: "#4CAF50",
            borderRadius: "999px",
            margin: "1rem auto 0",
          }} />
        </div>

        {/* Lista programas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {programas.map((programa, index) => (
            <div
              key={programa.id}
              className="programas-row"
              style={{ direction: index % 2 !== 0 ? "rtl" : "ltr" }}
            >
              {/* Texto */}
              <div style={{ direction: "ltr", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    minWidth: "56px",
                    background: "#EAF5EE",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    boxShadow: "0 2px 8px rgba(27,74,46,0.1)",
                  }}>
                    {programa.icono}
                  </div>
                  <h3 style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: "800",
                    color: "#1B4A2E",
                    fontFamily: "'Playfair Display', Georgia, serif",
                  }}>
                    {programa.titulo}
                  </h3>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {programa.descripcion.map((p, i) => (
                    <p key={i} style={{ color: "#3D3D3D", fontSize: "0.95rem", lineHeight: "1.8", margin: 0 }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Galería */}
              <div className="programas-galeria" style={{ direction: "ltr" }}>
                {programa.imagenes.map((img, i) => (
                  <div key={i} style={{
                    borderRadius: "1rem",
                    overflow: "hidden",
                    background: "#EAF5EE",
                  }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}