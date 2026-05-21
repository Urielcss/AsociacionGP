import Link from "next/link";

const enlaces = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Programas", href: "#programas" },
  { label: "Súmate", href: "#sumate" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1B4A2E", color: "#ffffff", paddingTop: "4rem", paddingBottom: "2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}>



          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
              Enlaces rápidos
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {enlaces.map((e) => (
                <Link key={e.href} href={e.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", textDecoration: "none" }}>
                  {e.label}
                </Link>
              ))}
            </nav>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
              Contáctanos
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem" }}>
              <span>📞 222 222 2222</span>
              <a href="https://www.paypal.com/ncp/payment/ZKCR8Y5S2T5BA" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                
              </a>
              <span>📍Puebla, México</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "0.7rem", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff" }}>
              Síguenos
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { nombre: "Facebook", href: "https://facebook.com", svg: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                { nombre: "Instagram", href: "https://instagram.com", svg: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                { nombre: "YouTube", href: "https://youtube.com", svg: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg> },
              ].map((red) => (
                <a
                  key={red.nombre}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  {red.svg}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div style={{ paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © 2024 Asociación Gilberto A.C. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}