# Ian Alves Sousa — Portfólio Pessoal

Aplicações web, integrações e automações com Python, TypeScript e IA aplicada.

**URL canônica:** https://portfolio-iansousa.vercel.app/

## Stack

Next.js 14 (App Router), React, TypeScript, Tailwind CSS, Framer Motion,
React Icons e Lucide React.

## Conteúdo PT/EN

- Hero: apresentação, projetos e download do currículo.
- Sobre: Quokk Software, formação Sesi-Senai, premiação e Austrália em 2026.
- Projetos: seis destaques, na mesma ordem em PT/EN: WPP AI Bot, Bot Telegram
  de Promoções, Análise de Qualidade de Dados, Portfólio pessoal, BrasilSemLixo
  e ZeroDay Sentinel.
- Outros Projetos: quatro links — template-e-commerce, mundo-senai_2025,
  Mundo-Invertido e My-KDE_configs. Sem duplicar o portfólio.
- Cinco cases expansíveis: WPP AI Bot, Bot Telegram de Promoções, análise
  de gastos da saúde de dezembro de 2023, BrasilSemLixo e ZeroDay Sentinel.
- Telegram: agendamento, curadoria por LLM ou heurística, deduplicação, API
  HTTP e simulação. Fontes scraping/API têm limitações de acesso e coleta;
  histórico local não garante eliminar duplicidades entre origens.
- ZeroDay Sentinel: protótipo educacional conceitual, com alertas, filtros,
  timeline e contenção simulada; sem varredura ou correção automática reais.
  Código privado; cartão PT/EN informa esse status, sem link de repositório
  ou demo. Cinco destaques possuem links públicos de repositório/showcase.
- WPP AI Bot: produto B2B proprietário em desenvolvimento, implantação por
  cliente, contexto por prompt e histórico limitado, OpenRouter e Chatwoot.
  Link apenas para showcase público; código comercial não integra este site.
- BrasilSemLixo: protótipo educativo em equipe, monitor com dados fictícios locais.
- Skills: tecnologias sem notas, estrelas ou percentuais de domínio.
- Experiência: trajetória, certificações e idiomas, incluindo inglês C1.
- Contato: email, GitHub, localização e botão WhatsApp.

Traduções em `lib/translations.ts`; links e metadados compartilhados em
`lib/portfolio.ts`. Idioma pode ser alternado na navegação e é salvo localmente.

## Contato e currículo

**Entre em contato / Get in touch** abre https://wa.me/5562993432290 em nova
aba. Não existe formulário, backend de envio ou confirmação simulada.
Nenhuma mensagem é preenchida ou enviada automaticamente.

**Baixar currículo (PDF) / Download résumé (PDF, Portuguese)** oferece
`public/Ian_Alves_Sousa_Curriculo.pdf` pelo caminho
`/Ian_Alves_Sousa_Curriculo.pdf`, com atributo `download`.
PDF atual em português, disponibilizado sem alteração.

## Execução local

Com dependências já disponíveis:

```bash
npm run dev -- --hostname 127.0.0.1
# http://127.0.0.1:3000
```

## Verificação

```bash
node --test tests/portfolio.test.cjs
node node_modules/typescript/bin/tsc --noEmit
git diff --check
npm run build
npm start
```

Testes usam `node:test`, compilador TypeScript existente e renderização estática
dos componentes. Validam contratos PT/EN, contato, PDF, projetos e certificados.
Build usa fontes de `next/font/google` e pode exigir rede.

## Licença

Este projeto é pessoal e está sob a licença MIT.
