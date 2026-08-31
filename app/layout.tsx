import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Ian Alves Sousa | Desenvolvedor Full-Stack & IA",
  description:
    "Portfólio de Ian Alves Sousa — Desenvolvedor Full-Stack com foco em Inteligência Artificial, Automação e Ciência de Dados. Aparecida de Goiânia, GO.",
  keywords: ["Ian Sousa", "Desenvolvedor", "Full-Stack", "IA", "Automação", "Data Science", "Goiás"],
  authors: [{ name: "Ian Alves Sousa", url: "https://github.com/Sousaian" }],
  openGraph: {
    title: "Ian Alves Sousa | Desenvolvedor Full-Stack & IA",
    description: "Portfólio de Ian Alves Sousa — Desenvolvedor Full-Stack com foco em IA, Automação e Ciência de Dados.",
    url: "https://portfolio-j6jwsulyb-ian-alves-sousas-projects.vercel.app",
    siteName: "Ian Sousa Portfolio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-background text-foreground antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
