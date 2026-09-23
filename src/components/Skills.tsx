"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { category: "Security", skills: ["Burp Suite", "Wireshark", "John the Ripper", "SQL Injection Testing", "SSRF Mitigation", "Privacy-by-Design"] },
  { category: "AI / Data Science", skills: ["scikit-learn", "Pandas", "NumPy", "Multi-model AI Verification", "OCR", "GridSearchCV"] },
  { category: "Languages", skills: ["Python", "Java", "C", "SQL", "TypeScript", "Bash", "Haskell"] },
  { category: "Software Engineering", skills: ["OOP", "SOLID", "Design Patterns", "REST APIs", "Express", "Flask", "Docker", "Git"] },
  { category: "Systems", skills: ["POSIX Threads", "OpenMP", "Linux Internals", "Shell Scripting"] },
  { category: "Spoken", skills: ["English", "French", "Hindi", "Spanish"] },
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