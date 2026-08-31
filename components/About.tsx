"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Database, Zap, Award, GraduationCap, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Segment } from "@/lib/translations";

const highlightIcons = [Code, Brain, Database, Zap];

function renderSegments(segments: (Segment & { primary?: boolean })[]) {
  return segments.map((seg, i) =>
    seg.strong ? (
      <strong key={i} className={(seg as { primary?: boolean }).primary ? "text-primary" : "text-foreground"}>
        {seg.text}
      </strong>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed mb-6">{renderSegments(t.about.p1)}</p>
            <p className="text-muted leading-relaxed mb-6">{renderSegments(t.about.p2)}</p>
            <p className="text-muted leading-relaxed">{renderSegments(t.about.p3)}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {t.about.highlights.map((item, idx) => {
              const Icon = highlightIcons[idx];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                >
                  <Icon size={28} className="text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="font-semibold text-lg">{t.about.cards.education.title}</h3>
            </div>
            <div className="space-y-4">
              {t.about.cards.education.items.map((item) => (
                <div key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={24} />
              <h3 className="font-semibold text-lg">{t.about.cards.achievements.title}</h3>
            </div>
            <div className="space-y-4">
              {t.about.cards.achievements.items.map((item) => (
                <div key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border border-accent/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-accent" size={24} />
              <h3 className="font-semibold text-lg">{t.about.cards.international.title}</h3>
            </div>
            <div className="space-y-4">
              {t.about.cards.international.items.map((item) => (
                <div key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
