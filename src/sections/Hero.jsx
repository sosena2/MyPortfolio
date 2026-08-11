"use client";

import { Github, Linkedin, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ROLES = ["Junior AI developer", "Full stack developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-32 pb-20 overflow-hidden bg-cream dark:bg-ink transition-colors">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-serif font-extrabold text-ink dark:text-cream text-5xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase"
          >
            Sosena
            <br />
            Gossaye
          </motion.h1>

          {/* Role-cycling text */}
          <motion.div
            variants={itemVariants}
            className="mt-6 h-9 sm:h-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[roleIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-gold text-2xl sm:text-3xl absolute"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mt-6 max-w-md"
          >
            I build fast, thoughtful web applications and bring AI where it
            actually makes things better.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="bg-gold hover:bg-gold-dark text-ink font-semibold rounded-full px-6 py-3 transition"
            >
              View my work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="border border-ink/20 dark:border-white/20 text-ink dark:text-cream font-semibold rounded-full px-6 py-3 hover:bg-ink/5 dark:hover:bg-white/5 transition"
            >
              Get in touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sosena2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-ink/15 dark:border-white/15 flex items-center justify-center text-ink dark:text-slate-300 hover:border-gold hover:text-gold transition"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/sosena-gossaye-37a475310/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-ink/15 dark:border-white/15 flex items-center justify-center text-ink dark:text-slate-300 hover:border-gold hover:text-gold transition"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Slowly rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-[320px] h-80 sm:w-105 sm:h-105 rounded-full border border-dashed border-gold/40 flex items-center justify-center"
          >
            {/* Gently floating avatar circle */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-70 h-70 sm:w-95 sm:h-95 rounded-full bg-gradient-to-br from-ink-light to-ink dark:from-ink-light dark:to-black overflow-hidden flex items-center justify-center relative"
              style={{ rotate: 0 }}
            >
              <span className="font-serif text-cream text-6xl sm:text-7xl select-none">
                SG
              </span>

              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                viewBox="0 0 400 400"
              >
                <motion.circle
                  cx="60"
                  cy="300"
                  r="1.5"
                  fill="#D9A56B"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                />
                <motion.circle
                  cx="120"
                  cy="340"
                  r="1.5"
                  fill="#D9A56B"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                />
                <motion.circle
                  cx="300"
                  cy="120"
                  r="1.5"
                  fill="#D9A56B"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
                />
                <motion.circle
                  cx="340"
                  cy="200"
                  r="1.5"
                  fill="#D9A56B"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
                />

                <path
                  d="M20 320 Q150 260 380 180"
                  stroke="#D9A56B"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M40 360 Q200 300 360 140"
                  stroke="#D9A56B"
                  strokeWidth="0.5"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
        <span className="text-[11px] tracking-[0.2em]">SCROLL</span>
      </motion.div>
    </section>
  );
}