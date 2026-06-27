"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { GitBranch, ExternalLink } from "lucide-react";

export default function Projects() {
  const featured = projects.filter((p) => p.status === "completed");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <>
      {/* Section label spanning full width */}
      <div style={{ gridColumn: "1 / 4", paddingTop: "8px" }}>
        <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "2px" }}>
          03. Projects
        </p>
        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#fff" }}>
          What I've Built
        </h2>
      </div>

      {/* Featured projects — each takes 1 column */}
      {featured.map((project, i) => (
        <motion.div
          key={project.title}
          id={i === 0 ? "projects" : undefined}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          style={{
            background: "#111",
            border: "0.5px solid #222",
            borderRadius: "12px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "border-color 0.3s",
            cursor: "default",
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "#222")}
        >
          <div>
            <p style={{ fontSize: "10px", color: "#4b5563", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
              Completed
            </p>
            <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "8px", lineHeight: 1.4 }}>
              {project.title}
            </h3>
            <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.6, marginBottom: "12px" }}>
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "10px",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "#1a1a1a",
                    border: "0.5px solid #2a2a2a",
                    color: "#9ca3af",
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#6b7280", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#22d3ee")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}
            >
              <GitBranch size={14} />
              View on GitHub
            </a>
          )}
        </motion.div>
      ))}

      {/* In-progress projects — span full width together */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          gridColumn: "1 / 4",
          background: "#111",
          border: "0.5px solid #222",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <p style={{ fontSize: "10px", color: "#22d3ee", fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}>
          In Progress
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {inProgress.map((project) => (
            <div
              key={project.title}
              style={{
                padding: "14px",
                background: "#0f0f0f",
                border: "0.5px solid #1a1a1a",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>
                {project.title}
              </h3>
              <p style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.6, marginBottom: "10px" }}>
                {project.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(34,211,238,0.05)",
                      border: "0.5px solid rgba(34,211,238,0.15)",
                      color: "#22d3ee",
                      fontFamily: "monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}