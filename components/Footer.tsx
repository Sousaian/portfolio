"use client";

import { Github, Mail, Heart, ArrowUp } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border py-8">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted text-sm">
            <span>{t.footer.madeWith}</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>{t.footer.by}</span>
            <a href="https://github.com/Sousaian" target="_blank" rel="noopener noreferrer"
               className="text-primary hover:underline">
              Ian Alves Sousa
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Sousaian" target="_blank" rel="noopener noreferrer"
               className="text-muted hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:iansousa.dev@gmail.com"
               className="text-muted hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-muted hover:text-foreground transition-colors"
              aria-label={t.footer.backToTop}
            >
              <ArrowUp size={20} />
            </button>
          </div>

          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Ian Sousa. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
