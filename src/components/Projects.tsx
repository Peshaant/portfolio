"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { GitBranch, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-accent text-sm font-mono mb-2 tracking-widest uppercase">
          03. Projects
        </p>
        <h2 className="text-3xl font-bold text-white mb-10">What I've Built</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface border border-surface-border rounded-lg p-6 flex flex-col justify-between hover:border-accent/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  {project.status === "in-progress" && (
                    <span className="text-xs text-accent border border-accent/30 px-2 py-0.5 rounded-full">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-accent/80 bg-accent/10 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-white text-sm transition-colors duration-200"
                  >
                    <GitBranch size={16} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-white text-sm transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {!project.github && project.status === "in-progress" && (
                  <span className="text-xs text-muted">
                    Repo coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}