"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Database, Zap, Award, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code, title: "Desenvolvimento Web", desc: "Sites, e-commerce e aplicações full-stack" },
  { icon: Brain, title: "IA & Machine Learning", desc: "Modelos preditivos e automação inteligente" },
  { icon: Database, title: "Ciência de Dados", desc: "Análise de dados com Python e Pandas" },
  { icon: Zap, title: "Automação", desc: "Bots WhatsApp, Telegram e integrações API" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Estudante de Ciência de Dados e IA na PUC Goiás, técnico em Desenvolvimento de Sistemas
            pelo Sesi-Senai. Desenvolvedor freelancer com experiência em projetos reais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted leading-relaxed mb-6">
              Sou estudante de tecnologia com background em <strong className="text-foreground">Desenvolvimento de Software</strong>,{" "}
              <strong className="text-foreground">Ciência de Dados</strong> e{" "}
              <strong className="text-foreground">Inteligência Artificial</strong>. Tenho experiência
              em projetos web, análise de dados e machine learning aplicado.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Atuei como <strong className="text-foreground">desenvolvedor web freelancer</strong> criando sites institucionais,
              landing pages e e-commerce, com integração de APIs e sistemas de pagamento.
              Fui premiado com <strong className="text-primary">3º lugar</strong> na Olimpíada de IA Aplicada de Goiás 2025,
              desenvolvendo soluções para o sistema de saúde do estado.
            </p>
            <p className="text-muted leading-relaxed">
              Sou apaixonado por aprendizado contínuo, inovação e aplicar tecnologia para resolver
              problemas reais. Atualmente focado em construir soluções de automação com IA
              para pequenos negócios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <item.icon size={28} className="text-primary mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="font-semibold text-lg">Educação</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Tecnólogo em Ciência de Dados e IA</p>
                <p className="text-sm text-muted">PUC Goiás • Jan 2026 — Presente</p>
              </div>
              <div>
                <p className="font-medium">Técnico em Desenvolvimento de Sistemas</p>
                <p className="text-sm text-muted">Sesi-Senai • 2023 — 2025</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-primary" size={24} />
              <h3 className="font-semibold text-lg">Conquistas</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-medium">3º Lugar — Olimpíada de IA Aplicada de Goiás</p>
                <p className="text-sm text-muted">2025 • Solução IA para saúde pública</p>
              </div>
              <div>
                <p className="font-medium">Mundo Senai 2025</p>
                <p className="text-sm text-muted">Apresentação de projetos para público e indústria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}