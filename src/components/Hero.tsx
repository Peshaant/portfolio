"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-accent text-sm font-mono mb-4 tracking-widest uppercase">
          Hi, my name is
        </p>

        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight mb-4">
          Harsh.
        </h1>

        <h2 className="text-3xl sm:text-5xl font-bold text-muted leading-tight mb-6">
          I build things with data & code.
        </h2>

        <p className="text-muted text-lg max-w-xl mb-10 leading-relaxed">
          CS student at Monash University Malaysia, focused on AI, machine
          learning, and cybersecurity. Currently looking for internship
          opportunities.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-black font-semibold text-sm rounded hover:bg-cyan-300 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-accent text-accent font-semibold text-sm rounded hover:bg-accent hover:text-black transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}