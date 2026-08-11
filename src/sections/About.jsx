"use client";

import { motion } from "framer-motion";
import SectionTag from "../components/SectionTag";
import { ABOUT_STATS } from "../data/portfolioData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag number="01" label="About" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl mb-14"
        >
          A little about me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="font-serif text-ink dark:text-slate-100 text-2xl sm:text-3xl leading-snug"
            >
              I'm a final-year software engineering student who builds
              full-stack products and gets pulled toward the AI/ML side of
              every problem.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              At AASTU I'm leading frontend on an Open Research Data Portal
              while contributing to a microservices-based construction
              management system on the side. Alongside school, I'm interning
              across AI research and React Native product teams — moving
              between Django REST APIs, real-time dashboards, and
              retrieval-augmented pipelines depending on the week.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              I also teach a beginner coding camp — Scratch through Python —
              which keeps me honest about explaining things clearly, not just
              building them. I like projects with a real dataset, a real
              deadline, and a real user on the other end.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed"
            >
              Right now I'm focused on graduating, sharpening my
              problem-solving fundamentals, and looking ahead to roles and
              research opportunities in AI — open to internships,
              collaborations, and conversations about what's next.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-x-8 gap-y-10 border-l border-ink/10 dark:border-white/10 pl-8 h-fit"
          >
            {ABOUT_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[11px] tracking-[0.15em] text-gold font-mono mb-1">
                  {stat.label.toUpperCase()}
                </p>
                <p className="text-ink dark:text-cream font-medium">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}