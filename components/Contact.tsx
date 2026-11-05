"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Github, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

import { contact } from "@/lib/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={24}  aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.email}</p>
                <a href="mailto:iansousa.dev@gmail.com" className="font-medium hover:text-primary transition-colors">
                  iansousa.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={24}  aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.location}</p>
                <p className="font-medium">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Github className="text-primary" size={24}  aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.github}</p>
                <a href="https://github.com/Sousaian" target="_blank" rel="noopener noreferrer"
                   className="font-medium hover:text-primary transition-colors">
                  github.com/Sousaian
                </a>
              </div>
            </div>
          </motion.div>

          <div className="bg-card border border-border rounded-xl p-6 self-start">
            <p className="text-muted mb-6">{t.contact.note}</p>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
               aria-label={t.contact.actionLabel}
               className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              <MessageCircle size={20} aria-hidden="true" />
              {t.contact.action}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
