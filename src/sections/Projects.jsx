// "use client";

// import { useMemo, useState } from "react";
// import { ArrowRight, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// import SectionTag from "../components/SectionTag";
// import { PROJECTS, PROJECT_CATEGORIES } from "../data/portfolioData";

// export default function Projects() {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredProjects = useMemo(() => {
//     if (activeCategory === "all") return PROJECTS;
//     return PROJECTS.filter((project) => project.category === activeCategory);
//   }, [activeCategory]);

//   return (
//     <section
//       id="projects"
//       className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.6 }}
//           transition={{ duration: 0.6 }}
//         >
//           <SectionTag number="05" label="Projects" />
//         </motion.div>

//         <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.6 }}
//             transition={{ duration: 0.7, delay: 0.1 }}
//             className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl"
//           >
//             Selected work
//           </motion.h2>

//           <LayoutGroup>
//             <motion.div
//               initial={{ opacity: 0, y: 16 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.6 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex flex-wrap gap-2"
//             >
//               {PROJECT_CATEGORIES.map((cat) => {
//                 const isActive = activeCategory === cat.key;
//                 return (
//                   <button
//                     key={cat.key}
//                     onClick={() => setActiveCategory(cat.key)}
//                     className={`relative text-sm font-medium rounded-full px-4 py-2 border transition-colors ${
//                       isActive
//                         ? "border-gold text-ink"
//                         : "border-ink/15 dark:border-white/15 text-ink dark:text-slate-300 hover:border-gold hover:text-gold"
//                     }`}
//                   >
//                     {isActive && (
//                       <motion.span
//                         layoutId="active-category-pill"
//                         className="absolute inset-0 bg-gold rounded-full -z-10"
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 32,
//                         }}
//                       />
//                     )}
//                     {cat.label}
//                   </button>
//                 );
//               })}
//             </motion.div>
//           </LayoutGroup>
//         </div>

//         {filteredProjects.length === 0 ? (
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-slate-500 dark:text-slate-400"
//           >
//             No projects in this category yet.
//           </motion.p>
//         ) : (
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="space-y-24"
//             >
//               {filteredProjects.map((project, i) => (
//                 <motion.div
//                   key={project.number}
//                   initial={{ opacity: 0, y: 48 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.25 }}
//                   transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//                   className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
//                     i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
//                   }`}
//                 >
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.92 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true, amount: 0.4 }}
//                     transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//                     whileHover={{ scale: 1.02 }}
//                     className="relative aspect-4/3 rounded-2xl bg-linear-to-br from-ink-light to-ink dark:from-white/5 dark:to-white/0 border border-ink/10 dark:border-white/10 flex items-center justify-center overflow-hidden"
//                   >
//                     <span className="font-serif text-8xl text-ink/10 dark:text-white/10 select-none">
//                       {project.number}
//                     </span>
//                   </motion.div>

//                   <div>
//                     <div className="flex items-center gap-3 mb-3">
//                       <p className="font-mono text-slate-400 dark:text-slate-500 text-sm">
//                         {project.number}
//                       </p>

//                       <span className="text-[10px] tracking-wide font-mono uppercase bg-ink/5 dark:bg-white/10 text-ink dark:text-slate-300 px-2.5 py-1 rounded-full">
//                         {PROJECT_CATEGORIES.find(
//                           (c) => c.key === project.category
//                         )?.label ?? project.category}
//                       </span>
//                     </div>

//                     <h3 className="font-serif font-bold text-ink dark:text-cream text-3xl sm:text-4xl mb-4">
//                       {project.title}
//                     </h3>

//                     <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-8">
//                       {project.tags.map((tag, tagIndex) => (
//                         <motion.span
//                           key={tag}
//                           initial={{ opacity: 0, y: 6 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true, amount: 0.6 }}
//                           transition={{ duration: 0.4, delay: 0.15 + tagIndex * 0.05 }}
//                           className="text-xs font-medium border border-ink/15 dark:border-white/15 text-ink dark:text-slate-200 rounded-full px-3 py-1.5"
//                         >
//                           {tag}
//                         </motion.span>
//                       ))}
//                     </div>

//                     <div className="flex items-center gap-6">
//                       <motion.a
//                         whileHover={{ x: 3 }}
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="flex items-center gap-2 font-semibold text-ink dark:text-cream border-b-2 border-gold pb-0.5 hover:gap-3 transition-all"
//                       >
//                         View on GitHub
//                         <ArrowRight className="w-4 h-4" />
//                       </motion.a>

//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-gold transition"
//                       >
//                         Live demo
//                         <ExternalLink className="w-3.5 h-3.5" />
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionTag from "../components/SectionTag";
import { PROJECTS, PROJECT_CATEGORIES } from "../data/portfolioData";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return PROJECTS;

    return PROJECTS.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="px-6 sm:px-10 lg:px-20 py-24 sm:py-32 bg-cream dark:bg-ink transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTag number="05" label="Projects" />
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-bold text-ink dark:text-cream text-4xl sm:text-5xl"
          >
            Selected work
          </motion.h2>

          <LayoutGroup>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.key;

                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`relative text-sm font-medium rounded-full px-4 py-2 border transition-colors ${
                      isActive
                        ? "border-gold text-ink"
                        : "border-ink/15 dark:border-white/15 text-ink dark:text-slate-300 hover:border-gold hover:text-gold"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-category-pill"
                        className="absolute inset-0 bg-gold rounded-full -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                      />
                    )}

                    {cat.label}
                  </button>
                );
              })}
            </motion.div>
          </LayoutGroup>
        </div>

        {filteredProjects.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400"
          >
            No projects in this category yet.
          </motion.p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-24"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.number}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    i % 2 === 1
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }`}
                >
                  {/* PROJECT IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-4/3 rounded-2xl bg-linear-to-br from-ink-light to-ink dark:from-white/5 dark:to-white/0 border border-ink/10 dark:border-white/10 overflow-hidden"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} project`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center font-serif text-8xl text-ink/10 dark:text-white/10 select-none">
                        {project.number}
                      </span>
                    )}
                  </motion.div>

                  {/* PROJECT DESCRIPTION */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="font-mono text-slate-400 dark:text-slate-500 text-sm">
                        {project.number}
                      </p>

                      <span className="text-[10px] tracking-wide font-mono uppercase bg-ink/5 dark:bg-white/10 text-ink dark:text-slate-300 px-2.5 py-1 rounded-full">
                        {PROJECT_CATEGORIES.find(
                          (c) => c.key === project.category
                        )?.label ?? project.category}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-ink dark:text-cream text-3xl sm:text-4xl mb-4">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.15 + tagIndex * 0.05,
                          }}
                          className="text-xs font-medium border border-ink/15 dark:border-white/15 text-ink dark:text-slate-200 rounded-full px-3 py-1.5"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <motion.a
                        whileHover={{ x: 3 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 font-semibold text-ink dark:text-cream border-b-2 border-gold pb-0.5 hover:gap-3 transition-all"
                      >
                        View on GitHub
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>

                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-gold transition"
                        >
                          Live demo
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}