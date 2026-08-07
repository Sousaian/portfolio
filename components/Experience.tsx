"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap, Trophy } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Tecnólogo em Ciência de Dados e IA",
    org: "PUC Goiás",
    period: "Jan 2026 — Presente",
    desc: "Formação superior em análise de dados, machine learning e inteligência artificial.",
    current: true,
  },
  {
    icon: Trophy,
    title: "3º Lugar — Olimpíada de IA Aplicada de Goiás",
    org: "Competição Nacional",
    period: "Ago — Nov 2025",
    desc: "Desenvolvimento de solução de IA para o sistema de saúde pública de Goiás. Treinamento de modelos preditivos e resolução de desafios de machine learning.",
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Desenvolvedor Web Freelancer",
    org: "Autônomo",
    period: "Jan — Set 2025",
    desc: "Desenvolvimento de sites institucionais, landing pages e e-commerce. Integração de APIs, sistemas de pagamento e foco em performance e usabilidade.",
  },
  {
    icon: Award,
    title: "Mundo Senai 2025",
    org: "Sesi-Senai",
    period: "Abr 2025",
    desc: "Apresentação de projetos de desenvolvimento de sistemas para público e profissionais da indústria.",
  },
  {
    icon: Briefcase,
    title: "Projeto Inova 2024",
    org: "Sesi-Senai",
    period: "Set — Nov 2024",
    desc: "Projeto de inovação em equipe multidisciplinar com design thinking, prototipagem e desenvolvimento ágil.",
  },
  {
    icon: GraduationCap,
    title: "Técnico em Desenvolvimento de Sistemas",
    org: "Sesi-Senai",
    period: "2023 — 2025",
    desc: "Formação técnica em programação, banco de dados, desenvolvimento web e boas práticas.",
  },
  {
    icon: Briefcase,
    title: "Junior Achievement — Mini Empresa",
    org: "Programa de Empreendedorismo",
    period: "Mar 2024 — Jul 2025",
    desc: "Participação em programa de empreendedorismo e educação empresarial.",
  },
];

const certifications = [
  { name: "Python", org: "Kaggle", hours: 5 },
  { name: "ChatGPT para Desenvolvedores", org: "OpenAI", hours: 18 },
  { name: "Liga Jovem Challenge", org: "2025", hours: 30 },
  { name: "Introdução à IA", org: "CEIA/UFG", hours: 40 },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experiência & Formação</h2>
          <p className="section-subtitle">
            Minha jornada na tecnologia, educação e conquistas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-background ${
                      item.highlight ? "bg-primary" : item.current ? "bg-accent" : "bg-muted"
                    }`} />
                    
                    <div className={`bg-card border rounded-xl p-5 ${
                      item.highlight ? "border-primary/50" : "border-border"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon size={18} className={item.highlight ? "text-primary" : "text-muted"} />
                        <span className="text-xs text-muted font-mono">{item.period}</span>
                        {item.current && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">Atual</span>
                        )}
                      </div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary mb-2">{item.org}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-6">Certificações</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <p className="font-medium text-sm">{cert.name}</p>
                  <p className="text-xs text-muted mt-1">{cert.org} • {cert.hours}h</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-xl p-5">
              <h4 className="font-semibold mb-4">Idiomas</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Português</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Inglês</span>
                  <span className="text-xs bg-border text-muted px-2 py-1 rounded">B1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}