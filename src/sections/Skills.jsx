"use client";

import { motion } from "framer-motion";
import SectionTag from "../components/SectionTag";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  const mid = Math.ceil(SKILLS.length / 2);
  const rowA = SKILLS.slice(0, mid);
  const rowB = SKILLS.slice(mid);

  return (
    <section
      id="skills"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors text-center overflow-hidden"
    >
      <div className="max-w-3xl mx-auto mb-16 px-6 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag number="04" label="Skills" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl mb-6"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-lg"
        >
          The tools I reach for when building interfaces, services, and
          intelligent features.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-5">
        <MarqueeRow items={rowA} direction="left" duration={32} />
        <MarqueeRow items={rowB} direction="right" duration={38} />
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left linear infinite;
        }
        .marquee-track-right {
          animation: marquee-right linear infinite;
        }
        .marquee-row:hover .marquee-track-left,
        .marquee-row:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({ items, direction, duration }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-row relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-3 ${
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="text-sm font-medium border border-ink/15 dark:border-white/15 text-ink dark:text-slate-200 rounded-full px-4 py-2 hover:border-gold hover:text-gold transition cursor-default whitespace-nowrap shrink-0"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}