"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, Lock } from "lucide-react";

const featuredProjects = [
  {
    name: "WPP AI Bot — Produto B2B",
    description: "Plataforma de atendimento automatizado no WhatsApp com IA. Agente com contexto do negócio, resposta 24/7 e handoff para humano. Case study público, código proprietário.",
    tech: ["Python", "Evolution API", "LLM", "Docker", "SaaS"],
    url: "https://github.com/Sousaian/wpp-ai-bot-showcase",
    b2b: true,
    highlight: true,
  },
  {
    name: "template-e-commerce",
    description: "Template completo de e-commerce com design moderno e responsivo. Deploy na Vercel.",
    tech: ["JavaScript", "E-commerce", "Vercel"],
    url: "https://github.com/Sousaian/template-e-commerce",
    demo: "https://template-e-commerce.vercel.app",
    stars: 1,
    highlight: true,
  },
  {
    name: "analise_qualidade_de_dados",
    description: "Análise de qualidade de dados com Python e Pandas. Notebooks com visualizações e insights.",
    tech: ["Python", "Pandas", "Jupyter", "Data Science"],
    url: "https://github.com/Sousaian/analise_qualidade_de_dados",
    highlight: true,
  },
  {
    name: "BrasilSemLixo",
    description: "Projeto social sobre descarte consciente de lixo. Landing page informativa com GitHub Pages.",
    tech: ["HTML", "CSS", "GitHub Pages"],
    url: "https://github.com/Sousaian/BrasilSemLixo",
    highlight: true,
  },
  {
    name: "mundo-senai_2025",
    description: "Projeto apresentado no Mundo Senai 2025 — demonstração de soluções técnicas para a indústria.",
    tech: ["JavaScript", "Sistemas", "Apresentação"],
    url: "https://github.com/Sousaian/mundo-senai_2025",
    highlight: true,
  },
  {
    name: "Desafio-DLJ-2025",
    description: "Plataforma de gamificação educacional desenvolvida para o Desafio Liga Jovem 2025.",
    tech: ["TypeScript", "Educação", "Gamificação", "Vercel"],
    url: "https://github.com/Sousaian/Desafio-DLJ-2025",
    demo: "https://v0-educational-gamification-platfor-seven.vercel.app",
    highlight: true,
  },
];

const otherProjects = [
  { name: "bot-telegram-promo-es", tech: "TypeScript", url: "https://github.com/Sousaian/bot-telegram-promo-es" },
  { name: "Plataforma-educacao-financeira", tech: "TypeScript", url: "https://github.com/Sousaian/Plataforma-educacao-financeira" },
  { name: "sistema_estacionamento", tech: "TypeScript", url: "https://github.com/Sousaian/sistema_estacionamento" },
  { name: "My-KDE_configs", tech: "Shell", url: "https://github.com/Sousaian/My-KDE_configs" },
  { name: "Chat-Gpt-Clone", tech: "JavaScript", url: "https://github.com/Sousaian/Chat-Gpt-Clone" },
  { name: "portfolio", tech: "TypeScript", url: "https://github.com/Sousaian/portfolio" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projetos em Destaque</h2>
          <p className="section-subtitle">
            Projetos que demonstram minhas habilidades em desenvolvimento web, automação e ciência de dados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-card border rounded-xl p-6 transition-all hover:translate-y-[-4px] group ${
                project.b2b ? "border-primary/60" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <Github size={24} className="text-muted group-hover:text-primary transition-colors" />
                <div className="flex items-center gap-3">
                  {project.b2b && (
                    <span className="flex items-center gap-1 text-xs bg-primary/20 text-primary px-2 py-1 rounded font-medium">
                      <Lock size={12} /> Produto B2B
                    </span>
                  )}
                  {project.stars && (
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Star size={14} /> {project.stars}
                    </span>
                  )}
                  <a href={project.url} target="_blank" rel="noopener noreferrer"
                     className="text-muted hover:text-foreground transition-colors">
                    <Github size={18} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="text-muted hover:text-foreground transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted mb-4 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Outros Projetos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors text-center"
              >
                <p className="font-medium text-sm">{project.name}</p>
                <p className="text-xs text-muted mt-1">{project.tech}</p>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sousaian?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-medium"
          >
            Ver todos os repositórios no GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}