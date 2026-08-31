"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Github, Send, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:iansousa.dev@gmail.com?subject=${t.contact.form.mailSubject} - ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0A---%0AEmail: ${formData.email}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

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
                <Mail className="text-primary" size={24} />
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
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.phone}</p>
                <a href="tel:+5562993432290" className="font-medium hover:text-primary transition-colors">
                  +55 (62) 99343-2290
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.whatsapp}</p>
                <a href="https://wa.me/5562993432290" target="_blank" rel="noopener noreferrer" 
                   className="font-medium hover:text-primary transition-colors">
                  +55 (62) 99343-2290
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-muted">{t.contact.labels.location}</p>
                <p className="font-medium">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Github className="text-primary" size={24} />
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

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="text-sm text-muted mb-2 block">{t.contact.form.name}</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                placeholder={t.contact.form.namePlaceholder}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-muted mb-2 block">{t.contact.form.email}</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted mb-2 block">{t.contact.form.message}</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-card border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              {sent ? (
                <>{t.contact.form.sent} <Send size={18} /></>
              ) : (
                <>{t.contact.form.submit} <Send size={18} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
