export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  status: "completed" | "in-progress";
};

export const projects: Project[] = [
  {
    title: "Shipping Desk — Bill of Lading Verification",
    description:
      "Averis × Monash Hackathon 2026. Built end-to-end: reads a shipping inbox and cross-checks draft Bills of Lading against Shipping Instructions across 7 fields, using a match / mismatch / uncertain verdict pipeline that escalates anything it can't verify. 100% rule-tier agreement across 520 synthetic emails and 3,213 stress-test edits.",
    tags: ["Python", "Flask", "SQLite", "Docker", "OCR"],
    github: "https://github.com/hayyaan123/Shipping-Desk",
    demo: "https://shipping-doc-verifier.onrender.com",
    status: "completed",
  },
  {
    title: "LeakLens — AI-Verified Breach Intelligence",
    description:
      "AI for Society Hackathon (APU), Top 20. Owned the data layer of a 4-person project that checks emails against breach databases and uses two independent AI models to cross-verify severity. Built a SHA-256-hashed TTL cache and enforced no-plaintext-storage of emails end to end.",
    tags: ["Node.js", "Express", "Multi-model AI", "Privacy"],
    github: "https://github.com/AvProgramm/LeakLens",
    status: "completed",
  },
  {
    title: "Diabetes Onset Prediction",
    description:
      "End-to-end binary classification pipeline on the Pima Indians Diabetes Dataset: IQR outlier capping, median imputation, and a benchmark of Logistic Regression, Random Forest, Gradient Boosting and SVM with GridSearchCV and 5-fold stratified CV, selected on ROC-AUC.",
    tags: ["Python", "scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/Peshaant/Pima-Indians-ML-project",
    status: "completed",
  },
  {
    title: "Swarms — Real-time Wave Defense",
    description:
      "Real-time wave defense game with a Haskell WebSocket backend (pure game loop, STM for concurrent state, BFS pathfinding, delta-sync protocol) and a React/TypeScript terminal-style UI.",
    tags: ["Haskell", "WebSockets", "React", "TypeScript"],
    github: "https://github.com/Peshaant/Swarms-Game",
    status: "completed",
  },
  {
    title: "Linux Process Monitoring Tools",
    description:
      "Shell scripts to track live processes and resource usage, and to diagnose multi-threaded race conditions by querying the /proc filesystem directly.",
    tags: ["Bash", "Linux", "/proc"],
    github: "",
    status: "completed",
  },
  {
    title: "University Simulator 2026",
    description:
      "Final year project: a campus simulation with live, in-sim AI decision-making.",
    tags: ["Unity", "AI", "Simulation"],
    github: "",
    status: "in-progress",
  },
];
