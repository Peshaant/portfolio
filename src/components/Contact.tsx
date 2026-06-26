"use client";

import { motion } from "framer-motion";
import { Mail, GitBranch } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:youremail@gmail.com",
    icon: Mail,
    display: "youremail@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    icon: GitBranch,
    display: "github.com/yourusername",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto"
      >
        <p className="text-accent text-sm font-mono mb-2 tracking-widest uppercase">
          04. Contact
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-muted leading-relaxed mb-10">
          I'm currently open to internship opportunities in AI, data science,
          and cybersecurity. Whether you have a question or just want to say hi,
          my inbox is always open.
        </p>

        <div className="flex flex-col items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-200 group"
            >
              <link.icon size={18} className="group-hover:text-accent transition-colors duration-200" />
              <span className="text-sm">{link.display}</span>
            </a>
          ))}

          {/* LinkedIn as plain text link */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted hover:text-accent transition-colors duration-200 text-sm"
          >
            <span className="text-lg font-bold">in</span>
            <span>linkedin.com/in/yourusername</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}