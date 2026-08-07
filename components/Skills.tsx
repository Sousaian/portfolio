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
      { icon: SiPython, name: "Python" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiHtml5, name: "HTML/CSS" },
    ],
  },
  {
    title: "Frameworks & Ferramentas",
    skills: [
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiGit, name: "Git/GitHub" },
    ],
  },
  {
    title: "Dados & IA",
    skills: [
      { icon: SiPandas, name: "Pandas" },
      { icon: SiNumpy, name: "NumPy" },
      { icon: SiJupyter, name: "Jupyter" },
      { icon: FileSpreadsheet, name: "Excel" },
    ],
  },
  {
    title: "Plataformas & DevOps",
    skills: [
      { icon: SiLinux, name: "Linux" },
      { icon: SiSupabase, name: "Supabase" },
      { icon: SiVercel, name: "Vercel" },
      { icon: SiGithub, name: "GitHub Actions" },
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
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + catIdx * 0.1 + skillIdx * 0.05 }}
                    className="flex items-center gap-3 bg-secondary/50 border border-border rounded-lg px-4 py-3 hover:border-primary/50 hover:bg-secondary transition-all"
                  >
                    <skill.icon size={20} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
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