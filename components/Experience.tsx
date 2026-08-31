"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap, Trophy, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const timelineMeta = [
  { icon: Globe, highlight: true },
  { icon: Trophy, highlight: true },
  { icon: Briefcase, highlight: false },
  { icon: Award, highlight: false },
  { icon: Briefcase, highlight: false },
  { icon: Briefcase, highlight: false },
  { icon: GraduationCap, highlight: false },
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
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {t.experience.timeline.map((item, idx) => {
                  const meta = timelineMeta[idx];
                  const Icon = meta.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="relative pl-16"
                    >
                      <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-background ${
                        meta.highlight ? "bg-primary" : "bg-muted"
                      }`} />
                      
                      <div className={`bg-card border rounded-xl p-5 ${
                        meta.highlight ? "border-primary/50" : "border-border"
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon size={18} className={meta.highlight ? "text-primary" : "text-muted"} />
                          <span className="text-xs text-muted font-mono">{item.period}</span>
                        </div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-primary mb-2">{item.org}</p>
                        <p className="text-sm text-muted">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-6">{t.experience.certificationsTitle}</h3>
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
              <h4 className="font-semibold mb-4">{t.experience.languagesTitle}</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t.experience.languages[0].name}</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{t.experience.languages[0].level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{t.experience.languages[1].name}</span>
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded font-medium">{t.experience.languages[1].level}</span>
                </div>
              </div>
              <p className="text-xs text-muted mt-4 pt-4 border-t border-border">
                {t.experience.langNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
