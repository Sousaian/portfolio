"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const langButton = (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-sm border border-border px-3 py-2 rounded-lg text-muted hover:text-foreground hover:border-primary/50 transition-colors"
      aria-label="Switch language"
    >
      <Globe size={16} />
      {language === "pt" ? "EN" : "PT"}
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-xl font-bold font-mono text-primary">
            {"<IS />"}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            {langButton}
            <a
              href="https://github.com/Sousaian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              GitHub
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            {langButton}
            <button
              className="text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-border mt-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/Sousaian"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-center bg-primary text-white px-4 py-2 rounded-lg"
            >
              GitHub
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
