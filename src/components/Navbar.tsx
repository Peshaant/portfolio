"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderRadius: "12px",
        border: "0.5px solid #222",
        background: scrolled ? "rgba(17,17,17,0.95)" : "#111",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        position: "sticky",
        top: "10px",
        zIndex: 50,
        transition: "all 0.3s",
      }}
    >
      <a href="#" style={{ color: "#fff", fontWeight: 600, fontSize: "15px", textDecoration: "none" }}>
        harsh<span style={{ color: "#22d3ee" }}>.</span>
      </a>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{ color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}