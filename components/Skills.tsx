"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiHtml5, SiTailwindcss, SiGit, SiGithub, SiLinux,
  SiPandas, SiNumpy, SiJupyter, SiSupabase, SiVercel
} from "react-icons/si";
import { FileSpreadsheet } from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens",
    skills: [
      { icon: SiPython, name: "Python", level: 90 },
      { icon: SiJavascript, name: "JavaScript", level: 85 },
      { icon: SiTypescript, name: "TypeScript", level: 80 },
      { icon: SiHtml5, name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Frameworks & Ferramentas",
    skills: [
      { icon: SiReact, name: "React", level: 80 },
      { icon: SiNextdotjs, name: "Next.js", level: 75 },
      { icon: SiTailwindcss, name: "Tailwind", level: 85 },
      { icon: SiGit, name: "Git/GitHub", level: 85 },
    ],
  },
  {
    title: "Dados & IA",
    skills: [
      { icon: SiPandas, name: "Pandas", level: 85 },
      { icon: SiNumpy, name: "NumPy", level: 65 },
      { icon: SiJupyter, name: "Jupyter", level: 85 },
      { icon: FileSpreadsheet, name: "Excel", level: 80 },
    ],
  },
  {
    title: "Plataformas & DevOps",
    skills: [
      { icon: SiLinux, name: "Linux", level: 80 },
      { icon: SiSupabase, name: "Supabase", level: 75 },
      { icon: SiVercel, name: "Vercel", level: 85 },
      { icon: SiGithub, name: "GitHub Actions", level: 70 },
    ],
  },
];

const softSkills = [
  "Resolução de Problemas", "Metodologias Ágeis", "Trabalho em Equipe",
  "Comunicação", "Aprendizado Rápido", "Adaptabilidade",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Tecnologias e ferramentas que utilizo para criar soluções.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-6 text-primary">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={18} className="text-muted" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + catIdx * 0.1 + skillIdx * 0.05 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
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
          <h3 className="text-xl font-semibold mb-6 text-center">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, idx) => (
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