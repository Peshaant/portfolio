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
    title: "Flappy Bird — Haskell",
    description:
      "A fully functional Flappy Bird clone built in Haskell. Demonstrates functional programming concepts including pure functions, immutable state, and IO handling for real-time game loops.",
    tags: ["Haskell", "Functional Programming", "Game Dev"],
    github: "https://github.com/yourusername/flappy-bird-haskell",
    status: "completed",
  },
  {
    title: "Clinical Data Analysis — ML Pipeline",
    description:
      "End-to-end machine learning pipeline on a clinical dataset. Covers EDA, preprocessing with median imputation and StandardScaler, training four classifiers, and GridSearchCV hyperparameter tuning.",
    tags: ["Python", "scikit-learn", "Pandas", "ML"],
    github: "https://github.com/yourusername/clinical-ml",
    status: "completed",
  },
  {
    title: "Trucking Business — SQL Schema",
    description:
      "Full relational database schema for a trucking business built in Oracle SQL. Covers DDL, DML, sequences, normalized design through 3NF, and a MongoDB/JSON integration layer.",
    tags: ["Oracle SQL", "MongoDB", "Database Design"],
    github: "https://github.com/yourusername/sql-schema",
    status: "completed",
  },
  {
    title: "Twitter Sentiment Analysis",
    description:
      "NLP pipeline to classify sentiment from tweets. Covers data collection via the Twitter API, text preprocessing, vectorization, and model training.",
    tags: ["Python", "NLP", "scikit-learn", "Twitter API"],
    github: "",
    status: "in-progress",
  },
  {
    title: "Stock Price Prediction",
    description:
      "Time-series forecasting model to predict stock prices using historical market data and machine learning regression techniques.",
    tags: ["Python", "ML", "Time Series", "Pandas"],
    github: "",
    status: "in-progress",
  },
];