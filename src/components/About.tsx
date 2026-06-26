"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-accent text-sm font-mono mb-2 tracking-widest uppercase">
          01. About Me
        </p>
        <h2 className="text-3xl font-bold text-white mb-10">Who I Am</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
            <p>
              I'm a second-year Computer Science student at{" "}
              <span className="text-white">Monash University Malaysia</span>,
              with a strong interest in AI, machine learning, and cybersecurity.
              I enjoy building things that sit at the intersection of data and
              real-world problems.
            </p>
            <p>
              I hold an{" "}
              <span className="text-white">
                NVIDIA Deep Learning Institute certification
              </span>{" "}
              in Fundamentals of Deep Learning, and I've worked across the full
              ML pipeline — from data cleaning and EDA to model training and
              evaluation.
            </p>
            <p>
              Outside of AI, I have hands-on experience with relational database
              design, functional programming in Haskell, and low-level hardware
              projects. I'm actively looking for internship opportunities in AI,
              data science, or cybersecurity.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-white font-semibold mb-4">Quick Facts</p>
            {[
              "📍 Kuala Lumpur, Malaysia",
              "🎓 Monash University Malaysia",
              "📚 Second Year CS Student",
              "🏅 NVIDIA DLI Certified",
              "🔍 Open to Internships",
            ].map((fact) => (
              <p key={fact} className="text-muted text-sm">
                {fact}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}