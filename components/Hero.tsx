"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, ChevronDown } from "lucide-react";
import { SiPython, SiJavascript, SiTypescript, SiReact, SiGit } from "react-icons/si";
import { useLanguage } from "@/lib/LanguageContext";

const techIcons = [
  { icon: SiPython, label: "Python" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiReact, label: "React" },
  { icon: SiGit, label: "Git" },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted font-mono mb-4"
          >
            {t.hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Ian Alves Sousa
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-4xl font-bold text-muted mb-6"
          >
            {t.hero.titlePre} <span className="text-primary">{t.hero.titleH1}</span>{" "}
            {t.hero.titleMid} <span className="text-accent">{t.hero.titleH2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted max-w-xl mx-auto mb-8 text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted mb-8"
          >
            <MapPin size={16} />
            <span>{t.hero.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              {t.hero.viewProjects}
            </a>
            <a
              href="/curriculo.pdf"
              download
              className="border border-border px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              {t.hero.downloadCV}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            {techIcons.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors">
                <Icon size={28} />
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-4"
          >
            <a href="https://github.com/Sousaian" target="_blank" rel="noopener noreferrer"
               className="text-muted hover:text-foreground transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:iansousa.dev@gmail.com"
               className="text-muted hover:text-foreground transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
        >
          <ChevronDown size={28} />
        </motion.a>
      </div>
    </section>
  );
}
