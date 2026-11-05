"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiHtml5, SiTailwindcss, SiGit, SiLinux,
  SiPandas, SiNumpy, SiJupyter
} from "react-icons/si";
import { Database, Server, Brain, Code, FileSpreadsheet } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const categorySkills = [
  [
    { icon: SiPython, name: "Python" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiHtml5, name: "HTML/CSS" },
  ],
  [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: Code, name: "FastAPI" },
    { icon: Code, name: "APIs REST" },
  ],
  [
    { icon: SiPandas, name: "Pandas" },
    { icon: SiNumpy, name: "NumPy" },
    { icon: SiJupyter, name: "Jupyter" },
    { icon: FileSpreadsheet, name: "Excel" },
    { icon: Brain, name: "LLMs" },
    { icon: Database, name: "SQL / MySQL / PostgreSQL" },
    { icon: Database, name: "SQLAlchemy" },
  ],
  [
    { icon: SiLinux, name: "Linux" },
    { icon: Server, name: "Docker / Compose" },
    { icon: SiGit, name: "Git / GitHub" },
  ],
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.skills.categories.map((title, catIdx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-6 text-primary">{title}</h3>
              <div className="grid grid-cols-2 gap-3">
                {categorySkills[catIdx].map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                    className="flex min-w-0 items-center gap-3 bg-secondary/50 border border-border rounded-lg px-4 py-3 hover:border-primary/50 hover:bg-secondary transition-all"
                  >
                    <skill.icon size={20} className="text-primary shrink-0" />
                    <span className="min-w-0 flex-1 break-words text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">{t.skills.softTitle}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.skills.soft.map((skill, idx) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + idx * 0.05 }}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
