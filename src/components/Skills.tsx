"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { category: "Languages", skills: ["Python", "Java", "Haskell", "TypeScript", "SQL"] },
  { category: "AI / ML", skills: ["scikit-learn", "Pandas", "NumPy", "Matplotlib", "Deep Learning", "NLP"] },
  { category: "Tools", skills: ["Git", "GitHub", "VS Code", "Jupyter", "Linux", "Next.js"] },
  { category: "Databases", skills: ["Oracle SQL", "MongoDB", "PostgreSQL"] },
  { category: "Cybersecurity", skills: ["Shell Scripting", "Process Monitoring", "HID Attacks", "Networking"] },
];

export default function Skills() {
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      style={{
        gridColumn: "2 / 4",
        background: "#111",
        border: "0.5px solid #222",
        borderRadius: "12px",
        padding: "24px",
      }}
    >
      <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>
        02. Skills
      </p>
      <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>
        What I Work With
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p style={{ fontSize: "10px", color: "#4b5563", marginBottom: "6px", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "1px" }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "11px",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    background: "rgba(34,211,238,0.07)",
                    border: "0.5px solid rgba(34,211,238,0.2)",
                    color: "#22d3ee",
                    fontFamily: "monospace",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}