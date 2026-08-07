"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap, Trophy, Globe } from "lucide-react";

const timeline = [
  {
    icon: Globe,
    title: "Goiás pelo Mundo — Austrália",
    org: "Programa de Intercâmbio",
    period: "Jul 2026",
    desc: "Intercâmbio cultural e educacional na Austrália. Aulas de inglês na ILSC e imersões culturais.",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "3º Lugar — Olimpíada de IA Aplicada",
    org: "Competição",
    period: "2025",
    desc: "Resolução de desafios de Machine Learning. Treinamento e implementação de modelos preditivos aplicados ao sistema de saúde de Goiás.",
    highlight: true,
  },
  {
    icon: Briefcase,
    title: "Desenvolvedor Web Freelancer",
    org: "Autônomo",
    period: "Jan — Set 2025",
    desc: "Desenvolvimento de sites institucionais, landing pages e e-commerces personalizados. Levantamento de requisitos, definição de escopo e integração de APIs e meios de pagamento.",
  },
  {
    icon: Award,
    title: "Mundo Senai 2025",
    org: "Sesi-Senai",
    period: "Abr 2025",
    desc: "Apresentação de projetos técnicos ao público e profissionais da indústria. Demonstração de soluções práticas e networking profissional.",
  },
  {
    icon: Briefcase,
    title: "Projeto Inova 2024",
    org: "Sesi-Senai",
    period: "Set — Nov 2024",
    desc: "Projeto de inovação voltado a soluções tecnológicas em equipe multidisciplinar, com design thinking, prototipagem e metodologias ágeis.",
  },
  {
    icon: Briefcase,
    title: "Junior Achievement — Miniempresa e Empresário Sombra",
    org: "Programa de Empreendedorismo",
    period: "Mar 2024 — Jul 2025",
    desc: "Vivência prática em empreendedorismo, negócios e tomada de decisão. Desenvolvimento de comunicação, trabalho em equipe e gestão.",
  },
  {
    icon: GraduationCap,
    title: "Técnico em Desenvolvimento de Sistemas",
    org: "Sesi-Senai Aparecida de Goiânia",
    period: "Jan 2023 — Dez 2025",
    desc: "Formação técnica em programação, banco de dados, desenvolvimento web e boas práticas.",
  },
];

const certifications = [
  { name: "Python", org: "Kaggle", hours: 5 },
  { name: "ChatGPT for Devs", org: "OpenAI", hours: 18 },
  { name: "Desafio Liga Jovem", org: "2025", hours: 30 },
  { name: "Introdução à Inteligência Artificial", org: "CEIA/UFG", hours: 40 },
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
                      item.highlight ? "bg-primary" : "bg-muted"
                    }`} />
                    
                    <div className={`bg-card border rounded-xl p-5 ${
                      item.highlight ? "border-primary/50" : "border-border"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <item.icon size={18} className={item.highlight ? "text-primary" : "text-muted"} />
                        <span className="text-xs text-muted font-mono">{item.period}</span>
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
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">C1</span>
                </div>
              </div>
              <p className="text-xs text-muted mt-4 pt-4 border-t border-border">
                Vivência internacional: intercâmbio na Austrália pelo programa Goiás pelo Mundo (ILSC, 2026).
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}