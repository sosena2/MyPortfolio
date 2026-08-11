// "use client";

// import { motion } from "framer-motion";
// import { Code2, Bot, Database, Users } from "lucide-react";
// import SectionTag from "../components/SectionTag";
// import { EXPERIENCE } from "../data/portfolioData";

// const ICONS = { code: Code2, bot: Bot, database: Database, users: Users };

// const rowVariants = {
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const tagContainerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.06, delayChildren: 0.2 },
//   },
// };

// const tagVariants = {
//   hidden: { opacity: 0, y: 8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4 },
//   },
// };

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
//           <div>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.6 }}
//               transition={{ duration: 0.6 }}
//             >
//               <SectionTag number="03" label="Experience" />
//             </motion.div>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.6 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl leading-tight"
//             >
//               What I've been
//               <br />
//               building
//             </motion.h2>
//           </div>
//         </div>

//         <div className="border-t border-ink/10 dark:border-white/10">
//           {EXPERIENCE.map((exp, i) => {
//             const Icon = ICONS[exp.icon];
//             return (
//               <motion.div
//                 key={exp.title}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.25 }}
//                 variants={rowVariants}
//                 transition={{ delay: i * 0.05 }}
//                 className="grid grid-cols-1 lg:grid-cols-[140px_1fr_1fr] gap-6 lg:gap-10 py-10 border-b border-ink/10 dark:border-white/10"
//               >
//                 <span className="font-mono text-xs text-gold tracking-wide">
//                   {exp.period}
//                 </span>

//                 <div>
//                   <motion.div
//                     initial={{ scale: 0.6, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true, amount: 0.6 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 0.15,
//                       ease: [0.34, 1.56, 0.64, 1],
//                     }}
//                     whileHover={{ rotate: -8, scale: 1.05 }}
//                     className="w-11 h-11 rounded-full bg-ink/5 dark:bg-white/5 flex items-center justify-center mb-4"
//                   >
//                     <Icon className="w-5 h-5 text-gold" />
//                   </motion.div>
//                   <h3 className="font-serif font-bold text-ink dark:text-cream text-2xl mb-1">
//                     {exp.title}
//                   </h3>
//                   <p className="text-slate-500 dark:text-slate-400">
//                     {exp.subtitle}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
//                     {exp.description}
//                   </p>
//                   <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.6 }}
//                     variants={tagContainerVariants}
//                     className="flex flex-wrap gap-2"
//                   >
//                     {exp.tags.map((tag) => (
//                       <motion.span
//                         key={tag}
//                         variants={tagVariants}
//                         className="text-xs font-medium border border-ink/15 dark:border-white/15 text-ink dark:text-slate-200 rounded-full px-3 py-1.5"
//                       >
//                         {tag}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Code2, Bot, Database, Users } from "lucide-react";
import SectionTag from "../components/SectionTag";
import { EXPERIENCE } from "../data/portfolioData";

const ICONS = { code: Code2, bot: Bot, database: Database, users: Users };

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTag number="03" label="Experience" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl leading-tight"
            >
              My Professional
              <br />
                Journey
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EXPERIENCE.map((exp, i) => {
            const Icon = ICONS[exp.icon];
            return (
              <motion.div
                key={exp.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 2) * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-ink/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] p-8 transition-colors hover:border-gold/70 hover:shadow-[0_0_50px_-12px_rgba(217,165,107,0.5)]"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="w-11 h-11 rounded-full bg-ink/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-gold/15 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gold" />
                  </motion.div>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 tracking-wide pt-2">
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-ink dark:text-cream text-2xl mb-1">
                  {exp.title}
                </h3>
                <p className="text-gold font-semibold mb-4">{exp.subtitle}</p>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>

                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium border border-ink/15 dark:border-white/15 text-ink dark:text-slate-300 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}