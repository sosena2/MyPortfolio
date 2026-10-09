export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const EDUCATION = [
  {
    title: "Addis Ababa Science and Technology University",
    period: "2023 – 2027",
    subtitle: "B.Sc. Software Engineering",
    badge: "UNDERGRADUATE",
    description:
      "Currently pursuing a B.Sc. in Software Engineering, building a strong foundation in computer science, software development, algorithms, databases, and machine learning.",
  },
   {
    title: "Kifiya AI Mastery — 10 Academy",
    period: "Mar 2026 – Jul 2026",
    subtitle: "AI & Machine Learning Training",
    badge: "COMPLETED",
    description:
      "Completed intensive AI and machine learning training focused on practical applications, data, machine learning workflows, and building AI-powered solutions.",
  },
   {
    title: "GDG AASTU",
    period: "Nov 2025 – Jun 2026",
    subtitle: "Backend Development",
    badge: "COMPLETED",
    description:
      "Learned backend development using Node.js and Express, with MongoDB for database management, building REST APIs and understanding server-side application development.",
  },
  {
    title: "A2SV",
    period: "Jan 2025 – Nov 2025",
    subtitle: "DSA & Frontend Development Trainee",
    badge: "TRAINING",
    description:
      "Studied data structures and algorithms while solving programming problems and strengthening problem-solving skills. Also developed frontend skills with TypeScript, React, Next.js, and Redux.",
  },
  {
    title: "SheCodes Foundation",
    period: "Mar 2024 – Aug 2024",
    subtitle: "Web Development",
    badge: "FOUNDATION",
    description:
      "Built a foundation in web development, learning HTML, CSS, JavaScript, responsive design, and the fundamentals of creating websites and web applications.",
  },
];

export const EXPERIENCE = [
  {
    period: "JUL 2026 — PRESENT",
    icon: "bot",
    title: "AGI Intern",
    subtitle: "iCog Labs · Internship",
    description:
      "Working as an AGI intern at iCog Labs, gaining practical experience in artificial general intelligence and contributing to AI-focused projects.",
    tags: ["Artificial Intelligence", "AGI"],
  },

  {
    period: "JUN 2026 — PRESENT",
    icon: "code",
    title: "Full-stack Developer Intern",
    subtitle: "Abyssinia Software Solutions · Internship",
    description:
      "Currently working on a full-stack application, developing user-facing features and backend services using React, Node.js, Express, and MySQL.",
    tags: ["React", "Node.js", "Express", "MySQL"],
  },

  {
    period: "JUN 2026 — PRESENT",
    icon: "database",
    title: "Full-stack Developer Intern",
    subtitle: "HPC & Big Data Analytics Center of Excellence · Internship",
    description:
      "Working on a big data project as a full-stack developer, building web interfaces with React and backend services with Django.",
    tags: ["React", "Django", "Python", "Big Data"],
  },

  {
    period: "FEB 2026 — MAY 2026",
    icon: "code",
    title: "Frontend Developer",
    subtitle: "GDG On Campus AASTU · Part-time",
    description:
      "Worked as a frontend developer, building web interfaces and contributing to frontend development using modern JavaScript technologies.",
    tags: ["React", "Frontend Development", "JavaScript"],
  },

  {
    period: "FEB 2026 — MAY 2026",
    icon: "users",
    title: "React Mentor",
    subtitle: "SheCodes AASTU · Part-time",
    description:
      "Mentored students in React development, helping them understand frontend concepts, build projects, and improve their practical development skills.",
    tags: ["React", "Mentoring", "Frontend Development"],
  },

  {
    period: "APR 2026 — JUL 2026",
    icon: "code",
    title: "Full Stack Developer",
    subtitle: "Efuye Gela · Internship",
    description:
      "Worked as a full-stack developer, contributing to the development of web applications and gaining practical experience across frontend and backend technologies.",
    tags: ["Full-stack Development", "React"],
  },

  {
    period: "JUL 2025 — SEP 2025",
    icon: "code",
    title: "Software Engineer Intern",
    subtitle: "Eskalate · Internship",
    description:
      "Worked as a frontend developer during my summer internship, contributing to a scalable web application and building user-facing features with React, Next.js, and Redux.",
    tags: ["React.js", "Next.js", "Redux", "REST APIs"],
  },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML / CSS",
  "Node.js",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Prompt engineering",
  "Git & GitHub",
  "Figma",
  "Python",
  "FastAPI",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "TensorFlow",
  "Django",
  "React Native",
  "Docker",
  "Redis",
  "Socket.io",
  "dbt",
  "Dagster",
  "MLflow",
  "REST APIs",
  "CI/CD",
];

export const PROJECT_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Fullstack" },
  { key: "ml-ds", label: "ML & Data Science" },
];

export const PROJECTS = [
  // Full-Stack (frontend + backend)
  {
    number: "01",
    category: "fullstack",
    title: "Open Research Data Platform (ORDP)",
    description:
      "A team project at AASTU, run under the HPC & Big Data Analytics Center of Excellence, where researchers upload, manage, and share research datasets and others can browse and discover them. I led the frontend (React, Vite, Tailwind CSS), building the landing, browse, listing, and dataset detail pages, the Researcher Dashboard and My Datasets page with card grids, status badges, and pagination, plus the routing, collapsible sidebar, and app layout. On the Django backend, I fixed file validation and MinIO storage bugs and resolved a series of migration conflicts.",
    tags: ["React", "Vite", "Tailwind CSS", "Django", "MinIO"],
    githubUrl: "https://github.com/Open-Research-Data-Portal",
    demoUrl: "https://ordp-frontend-ashen.vercel.app/",
    image: "/images/ordp.png",
  },
  {
    number: "02",
    category: "fullstack",
    title: "GPS Tracking & EVV Verification",
    description:
      "A full-stack GPS tracking and Electronic Visit Verification (EVV) system, with a React/Vite frontend and a Node.js/Express backend backed by PostgreSQL, deployed across Render, Vercel, and Supabase.",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    githubUrl: "https://github.com/sosena2/GPS_Tracking_and_EVV_Verification",
    demoUrl: "https://gps-tracking-and-evv-verification-f.vercel.app/",
    image: "/images/evv.png",
  },
  {
    number: "03",
    category: "fullstack",
    title: "EthioGuide",
    description:
      "Frontend for EthioGuide, a platform built during my internship at Eskalate to simplify navigating government procedures for citizens. Built as a frontend developer using Next.js, TypeScript, and Redux for state management.",
    tags: ["Next.js", "TypeScript", "Redux"],
    githubUrl: "https://github.com/Ethio-Guide/ethio-guide-frontend",
    demoUrl: "https://ethio-guide.vercel.app/",
    image: "/images/Ethioguide.png",
  },
  {
    number: "04",
    category: "fullstack",
    title: "Job Board Platform — Backend",
    description:
      "Backend for a job board platform connecting employers and job seekers, built as a backend developer with a Node.js, Express, and MongoDB stack handling listings, applications, and user accounts.",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Barok-y/Job-board-platform-backend",
    demoUrl: "#",
    image: "/images/credit-risk-model.png",
  },
  {
    number: "05",
    category: "fullstack",
    title: "PharmaFlow — Backend",
    description:
      "Backend services for PharmaFlow, a pharmacy-focused Mobile application, built as a backend developer handling core application logic and data management with Node.js and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/Pharma-flow/Backend-Node.js",
    demoUrl: "#",
    image: "/images/pharma-flow2.png",
  },
  {
    number: "06",
    category: "fullstack",
    title: "Blog Website",
    description:
      "A personal travel-blogging platform where people write about places they've visited, sharing stories and photos from their trips.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
    githubUrl: "https://github.com/sosena2/Blog-website",
    demoUrl: "https://blog-website-ten-self.vercel.app/",
    image: "/images/blogwebsite.png",
  },
  {
    number: "07",
    category: "fullstack",
    title: "Galio Framework — Fork Contribution",
    description:
      "A fork contribution to Galio, an open-source, cross-platform UI component framework for React Native, investigating and addressing compatibility issues across iOS, Android, and Web as part of a spike into the framework's cross-platform reliability.",
    tags: ["React Native", "JavaScript", "Open Source"],
    githubUrl: "https://github.com/sosena2/galio",
    demoUrl: "https://galio.io/",
    image: "/images/galio.png",
  },

  // ML & Data Science
  {
    number: "08",
    category: "ml-ds",
    title: "Credit Risk Model",
    description:
      "An end-to-end credit risk model for Bati Bank data, built with a customer-level train/test split and a percentile-rank composite proxy label to eliminate data leakage. The Gradient Boosting champion model reached a 0.839 ROC-AUC, with MLflow experiment tracking and a Streamlit dashboard for SHAP-based explainability.",
    tags: ["Python", "Scikit-learn", "MLflow", "Streamlit", "SHAP"],
    githubUrl: "https://github.com/sosena2/credit-risk-model",
    demoUrl: "#",
    image: "/images/bati1.png",
  },
  {
    number: "09",
    category: "ml-ds",
    title: "RAG Complaint Chatbot",
    description:
      "A retrieval-augmented generation chatbot for CrediTrust, built on a stratified 12,000-record sample of CFPB complaint data. Uses ChromaDB for vector storage, all-MiniLM-L6-v2 for embeddings, and Mistral-7B via the Hugging Face Inference API to answer questions grounded in real complaint records.",
    tags: ["Python", "ChromaDB", "Hugging Face", "RAG", "NLP"],
    githubUrl: "https://github.com/sosena2/rag-complaint-chatbot",
    demoUrl: "#",
    image: "/images/complaint-analyzer.png",
  },
  {
    number: "10",
    category: "ml-ds",
    title: "Medical Telegram Warehouse",
    description:
      "An end-to-end ELT pipeline that scrapes medical-business Telegram channels, models the data into a star schema with dbt, enriches images with YOLOv8 object detection, and serves it through a FastAPI layer — all orchestrated with Dagster.",
    tags: ["Python", "dbt", "YOLOv8", "Dagster", "PostgreSQL", "FastAPI", "Telegram Scraping"],
    githubUrl: "https://github.com/sosena2/medical-telegram-warehouse",
    demoUrl: "#",
    image: "/images/credit-risk-model.png",
  },
];
export const CONTACT_LINKS = [
  {
    label: "GITHUB",
    value: "@sosena2",
    href: "https://github.com/sosena2",
    icon: "github",
  },
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/sosena-gossaye-37a475310/",
    icon: "linkedin",
  },
];