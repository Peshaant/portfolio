"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Hero card — spans 2 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          gridColumn: "1 / 3",
          background: "#111",
          border: "0.5px solid #222",
          borderRadius: "12px",
          padding: "28px",
        }}
      >
        <p style={{ fontSize: "11px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
          CS Student · AI & Cybersecurity
        </p>
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>
          Hey, I'm Harsh.
        </h1>
        <p style={{ fontSize: "20px", fontWeight: 600, color: "#4b5563", marginBottom: "12px" }}>
          I build things with data & code.
        </p>
        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.7, marginBottom: "20px", maxWidth: "480px" }}>
          Second-year CS student at Monash University Malaysia, focused on AI,
          machine learning, and cybersecurity. Currently looking for internship opportunities.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{ background: "#22d3ee", color: "#000", fontSize: "12px", fontWeight: 600, padding: "8px 18px", borderRadius: "7px", textDecoration: "none", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#67e8f9")}
            onMouseLeave={e => (e.currentTarget.style.background = "#22d3ee")}
          >
            View My Work
          </a>
          <a
            href="#contact"
            style={{ background: "transparent", color: "#22d3ee", fontSize: "12px", fontWeight: 600, padding: "8px 18px", borderRadius: "7px", textDecoration: "none", border: "1px solid #22d3ee", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#22d3ee"; e.currentTarget.style.color = "#000"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#22d3ee"; }}
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Status card — 1 column */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          gridColumn: "3",
          background: "#111",
          border: "0.5px solid #222",
          borderRadius: "12px",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
            Status
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22d3ee", display: "inline-block" }} />
            <span style={{ color: "#e5e5e5", fontSize: "13px", fontWeight: 500 }}>Open to Internships</span>
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "20px" }}>
            AI · Data Science · Cybersecurity
          </p>
          <div style={{ height: "0.5px", background: "#222", marginBottom: "20px" }} />
          <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
            Based In
          </p>
          <p style={{ fontSize: "13px", color: "#e5e5e5" }}>Kuala Lumpur, Malaysia</p>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>Monash University Malaysia</p>
        </div>
        <div
          style={{
            marginTop: "20px",
            padding: "10px 12px",
            background: "rgba(34,211,238,0.07)",
            border: "0.5px solid rgba(34,211,238,0.2)",
            borderRadius: "8px",
            fontSize: "12px",
            color: "#22d3ee",
          }}
        >
          🏅 NVIDIA DLI Certified
        </div>
      </motion.div>
    </>
  );
}