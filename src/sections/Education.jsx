"use client";

import { motion } from "framer-motion";
import SectionTag from "../components/SectionTag";
import { EDUCATION } from "../data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag number="02" label="Education" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl mb-20"
        >
          Where I've learned
        </motion.h2>

        <div className="relative">
          {/* Line draws downward as you scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-ink/10 dark:bg-white/10 hidden sm:block"
          />

          <div className="space-y-16 sm:space-y-24">
            {EDUCATION.map((item, i) => (
              <div key={item.title} className="relative">
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="hidden sm:block absolute left-1/2 -translate-x-1/2 -top-1 w-3 h-3 rounded-full bg-gold ring-4 ring-cream dark:ring-ink"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? -40 : 40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`sm:w-[46%] ${
                    i % 2 === 0
                      ? "sm:mr-auto sm:text-right"
                      : "sm:ml-auto sm:text-left"
                  } text-center sm:text-left`}
                >
                  <div
                    className={`flex flex-wrap items-baseline gap-3 mb-2 justify-center ${
                      i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    }`}
                  >
                    <h3 className="font-serif font-bold text-ink dark:text-cream text-2xl sm:text-3xl">
                      {item.title}
                    </h3>
                    <span className="text-slate-400 dark:text-slate-500 text-sm">
                      {item.period}
                    </span>
                  </div>
                  <div
                    className={`flex flex-wrap items-center gap-3 mb-3 justify-center ${
                      i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                    }`}
                  >
                    <span className="text-gold font-semibold">
                      {item.subtitle}
                    </span>
                    <span className="text-[10px] tracking-wide font-mono bg-ink/5 dark:bg-white/10 text-ink dark:text-slate-300 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}