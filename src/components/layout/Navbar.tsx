"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Nosotros",  href: "#nosotros" },
  { label: "Programas", href: "#programas" },
  { label: "Súmate",    href: "#sumate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // null = SSR / antes del primer useEffect, true/false = ya detectado en cliente
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = "#ffffff";
  const glassBlur = "blur(16px) saturate(160%)";
  const headerBg  = scrolled ? "rgba(27, 74, 46, 0.55)" : "#1B4A2E";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.35s ease",
        background: headerBg,
        backdropFilter:       scrolled ? glassBlur : "none",
        WebkitBackdropFilter: scrolled ? glassBlur : "none",
        borderBottom: scrolled
          ? "1px solid rgba(76, 175, 80, 0.25)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 32px rgba(27, 74, 46, 0.25)"
          : "none",
        padding: scrolled ? "0.5rem 0" : "0.85rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <Link
          href="#inicio"
          style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <img src="/images/blanco.png" alt="Gilberto AC" style={{ height: "70px", width: "auto" }} />
        </Link>

        {/*
          isMobile === null → no renderiza nada (evita el flash de hidratación SSR)
          isMobile === false → desktop: links centrados + CTA
          isMobile === true  → mobile: solo hamburger
        */}
        {isMobile === null ? null : isMobile ? (

          /* ── MÓVIL: hamburger ── */
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            <span style={{
              display: "block", width: "24px", height: "2px",
              background: "#ffffff", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }} />
            <span style={{
              display: "block", width: "24px", height: "2px",
              background: "#ffffff", borderRadius: "2px",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: "block", width: "24px", height: "2px",
              background: "#ffffff", borderRadius: "2px",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }} />
          </button>

        ) : (

          /* ── DESKTOP: links + CTA ── */
          <>
            <nav style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: linkColor,
                    fontWeight: "700",
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    opacity: 0.95,
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.95")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="https://www.paypal.com/ncp/payment/ZKCR8Y5S2T5BA"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#4CAF50",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "10px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(76,175,80,0.4)",
                transition: "background 0.2s, transform 0.2s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2E7D4F";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4CAF50";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              🤝 Súmate
            </Link>
          </>
        )}
      </div>

      {/* ── Menú mobile desplegable ── */}
      {isMobile && (
        <div
          style={{
            maxHeight: menuOpen ? "320px" : "0",
            overflow: "hidden",
            transition: "max-height 0.35s ease",
            background: "transparent",
            borderTop: menuOpen ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <nav style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 2rem 1.5rem",
            gap: "0.25rem",
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#sumate"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#4CAF50",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: "0.85rem",
                padding: "12px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                marginTop: "1rem",
                boxShadow: "0 4px 16px rgba(76,175,80,0.3)",
              }}
            >
              🤝 Súmate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}