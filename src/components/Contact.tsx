"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        gridColumn: "1 / 4",
        background: "#111",
        border: "0.5px solid #222",
        borderRadius: "12px",
        padding: "32px",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
        04. Contact
      </p>
      <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
        Get In Touch
      </h2>
      <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.7, marginBottom: "24px", maxWidth: "420px", margin: "0 auto 24px" }}>
        Open to internship opportunities in AI, data science, and cybersecurity.
        My inbox is always open.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "24px", flexWrap: "wrap" }}>
        <a
          href="mailto:youremail@gmail.com"
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
        >
          <Mail size={15} />
          youremail@gmail.com
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
        >
          <GitBranch size={15} />
          github.com/yourusername
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
          onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
        >
          <span style={{ fontWeight: 700, fontSize: "14px" }}>in</span>
          linkedin.com/in/yourusername
        </a>
      </div>

      <a
        href="mailto:youremail@gmail.com"
        style={{ display: "inline-block", background: "#22d3ee", color: "#000", fontSize: "12px", fontWeight: 600, padding: "10px 24px", borderRadius: "7px", textDecoration: "none", transition: "background 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#67e8f9")}
        onMouseLeave={e => (e.currentTarget.style.background = "#22d3ee")}
      >
        Say Hello
      </a>
    </motion.div>
  );
}