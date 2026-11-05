export const contact = {
  whatsapp: "https://wa.me/5562993432290",
  resume: "/Ian_Alves_Sousa_Curriculo.pdf",
};

export const projectsMeta: Record<string, { tech: string[]; url?: string; demo?: string; b2b?: boolean }> = {
  wpp: { tech: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "OpenRouter", "Evolution API", "Chatwoot", "Docker"], url: "https://github.com/Sousaian/wpp-ai-bot-showcase", b2b: true },
  commerce: { tech: ["JavaScript", "E-commerce"], url: "https://github.com/Sousaian/template-e-commerce" },
  data: { tech: ["Python", "Pandas", "NumPy", "Jupyter", "Matplotlib", "Seaborn", "SciPy"], url: "https://github.com/Sousaian/analise_qualidade_de_dados" },
  brasil: { tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"], url: "https://github.com/Sousaian/BrasilSemLixo", demo: "https://sousaian.github.io/BrasilSemLixo/" },
  senai: { tech: ["JavaScript"], url: "https://github.com/Sousaian/mundo-senai_2025" },
  dlj: { tech: ["TypeScript", "Vercel"], demo: "https://v0-educational-gamification-platfor-seven.vercel.app" },
};

export const certifications: { name: string; org?: string; hours?: number }[] = [
  { name: "Python", org: "Kaggle", hours: 5 },
  { name: "ChatGPT for Devs", hours: 18 },
  { name: "Desafio Liga Jovem", org: "2025", hours: 30 },
  { name: "Introdução à Inteligência Artificial", org: "CEIA/UFG", hours: 40 },
  { name: "Essentials of Prompt Engineering", org: "AWS" },
  { name: "Claude 101", org: "Anthropic" },
  { name: "Claude Code 101", org: "Anthropic" },
];

export function certificationDetail(cert: { org?: string; hours?: number }) {
  return [cert.org, cert.hours ? `${cert.hours}h` : undefined].filter(Boolean).join(" • ");
}
