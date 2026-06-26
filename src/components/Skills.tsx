"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "Haskell", "TypeScript", "SQL"],
  },
  {
    category: "AI / ML",
    skills: [
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Deep Learning",
      "NLP",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Jupyter", "Linux", "Next.js"],
  },
  {
    category: "Databases",
    skills: ["Oracle SQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Cybersecurity",
    skills: ["Shell Scripting", "Process Monitoring", "HID Attacks", "Networking"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-accent text-sm font-mono mb-2 tracking-widest uppercase">
          02. Skills
        </p>
        <h2 className="text-3xl font-bold text-white mb-10">What I Work With</h2>

        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-white text-sm font-semibold mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-accent border border-accent/30 bg-accent/5 rounded hover:bg-accent/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}