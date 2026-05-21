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
              <span>📞 22 23 57 36 38</span>
              <a href="https://www.paypal.com/ncp/payment/ZKCR8Y5S2T5BA" style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
                
              </a>
              <span>📧 direccion@esperanzadelmanana.org.mx</span>
            </div>
          </div>

 

        </div>

        <div style={{ paddingTop: "2rem", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © By DevStack Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}