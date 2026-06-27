"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        gridColumn: "1",
        background: "#111",
        border: "0.5px solid #222",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
        01. About
      </p>
      <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "12px" }}>
        Who I Am
      </h2>
      <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.7, marginBottom: "10px" }}>
        Second-year CS student at{" "}
        <span style={{ color: "#e5e5e5" }}>Monash University Malaysia</span>,
        with a strong interest in AI, machine learning, and cybersecurity.
      </p>
      <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.7, marginBottom: "10px" }}>
        I've worked across the full ML pipeline — EDA, preprocessing, model
        training and evaluation.
      </p>
      <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.7 }}>
        Also experienced in database design, functional programming in Haskell,
        and low-level hardware projects.
      </p>
    </motion.div>
  );
}