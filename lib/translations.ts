export type Language = "pt" | "en";
export interface Segment { text: string; strong?: boolean; href?: string; primary?: boolean }
export interface Project { id: string; name: string; description: string; status?: string; caseStudy?: string; highlights?: string[]; details?: string[] }
const pt = {
  "nav": {
    "home": "Início",
    "about": "Sobre",
    "projects": "Projetos",
    "skills": "Skills",
    "experience": "Experiência",
    "contact": "Contato"
  },
  "hero": {
    "greeting": "Olá, eu sou",
    "titlePre": "Desenvolvedor",
    "titleH1": "Full-Stack",
    "titleMid": "&",
    "titleH2": "IA",
    "subtitle": "Desenvolvo aplicações web, integrações e automações com Python e TypeScript, aplicando IA a processos de negócio.",
    "location": "Aparecida de Goiânia, GO",
    "viewProjects": "Ver Projetos",
    "resume": "Baixar currículo (PDF)",
    "aboutLabel": "Ir para Sobre"
  },
  "about": {
    "title": "Sobre Mim",
    "subtitle": "Técnico em Desenvolvimento de Sistemas pelo Sesi-Senai, desenvolvedor freelancer com experiência em projetos reais e vivência internacional.",
    "p1": [
      {
        "text": "Desenvolvo aplicações web e integrações de APIs com Python e TypeScript. No WPP AI Bot, trabalho na automação de conversas no WhatsApp e na continuidade com atendimento humano."
      }
    ],
    "p2": [
      {
        "text": "Atuei como "
      },
      {
        "text": "desenvolvedor web freelancer",
        "strong": true
      },
      {
        "text": " criando sites institucionais, landing pages e e-commerce, com integração de APIs e sistemas de pagamento. Fui premiado com "
      },
      {
        "text": "3º lugar",
        "strong": true,
        "primary": true
      },
      {
        "text": " na Olimpíada de IA Aplicada 2025, treinando modelos preditivos para o sistema de saúde de Goiás."
      }
    ],
    "p3": [
      {
        "text": "Participei do programa "
      },
      {
        "text": "Goiás pelo Mundo",
        "strong": true
      },
      {
        "text": ", com intercâmbio na "
      },
      {
        "text": "Austrália",
        "strong": true
      },
      {
        "text": " — aulas de inglês na ILSC e imersões culturais. Hoje sou "
      },
      {
        "text": "cofundador da Quokk Software",
        "strong": true,
        "href": "https://www.quokk-software.com"
      },
      {
        "text": ", estúdio de software e dados que entrega limpeza de dados, dashboards, automação e ferramentas web sob medida."
      }
    ],
    "highlights": [
      {
        "title": "Desenvolvimento Web",
        "desc": "Sites, e-commerce e aplicações full-stack"
      },
      {
        "title": "IA & Machine Learning",
        "desc": "Modelos preditivos e automação inteligente"
      },
      {
        "title": "Análise de Dados",
        "desc": "Pandas, Excel e visualização de dados"
      },
      {
        "title": "Automação",
        "desc": "Automação no WhatsApp e integrações de APIs REST"
      }
    ],
    "cards": {
      "education": {
        "title": "Educação",
        "items": [
          {
            "name": "Técnico em Desenvolvimento de Sistemas",
            "detail": "Sesi-Senai • 2023 — 2025"
          },
          {
            "name": "Ensino Médio",
            "detail": "Sesi-Senai • 2022 — 2025"
          }
        ]
      },
      "achievements": {
        "title": "Conquistas",
        "items": [
          {
            "name": "3º Lugar — Olimpíada de IA Aplicada",
            "detail": "2025 • ML para saúde pública de Goiás"
          },
          {
            "name": "Mundo Senai 2025",
            "detail": "Apresentação de projetos para público e indústria"
          }
        ]
      },
      "international": {
        "title": "Experiência Internacional",
        "items": [
          {
            "name": "Goiás pelo Mundo — Austrália",
            "detail": "Jul 2026 • Aulas de inglês na ILSC e imersões culturais"
          }
        ]
      }
    }
  },
  "projects": {
    "title": "Projetos em Destaque",
    "subtitle": "Projetos que demonstram minhas habilidades em desenvolvimento web, automação e ciência de dados.",
    "b2bBadge": "Produto B2B",
    "othersTitle": "Outros Projetos",
    "viewAll": "Ver todos os repositórios no GitHub",
    "featured": [
      {
        "id": "wpp",
        "name": "WPP AI Bot",
        "description": "Produto B2B proprietário em desenvolvimento para atendimento via WhatsApp, com implantação e configuração por cliente.",
        "status": "Em desenvolvimento ativo",
        "caseStudy": "Ver case público",
        "highlights": [
          "Instruções por prompt e histórico limitado da conversa",
          "Modelos configuráveis via OpenRouter",
          "Transferência humana para o Chatwoot"
        ],
        "details": [
          "Problema: dúvidas recorrentes e continuidade entre atendimento automatizado e humano. Minha implementação conecta Evolution API, geração de respostas e handoff para o Chatwoot.",
          "Decisões: FastAPI e SQLAlchemy com MySQL para dados da aplicação; OpenRouter por SDK compatível com OpenAI. PostgreSQL e Redis apoiam as integrações.",
          "Projeto em desenvolvimento, com arquitetura documentada no repositório público. Implantação por cliente requer configuração e validação operacional."
        ]
      },
      {
        "id": "telegram",
        "name": "Bot Telegram de Promoções",
        "description": "Bot em TypeScript para curadoria e publicação de promoções no Telegram.",
        "details": [
          "Node.js, Telegraf e Express: agendamento, curadoria por LLM ou heurística, deduplicação, API HTTP e simulação sem publicar.",
          "A coleta por scraping e APIs está sujeita a captchas, mudanças de HTML e restrições de acesso; Mercado Livre é experimental. Histórico local não elimina toda duplicidade entre origens; sem verificação de menor preço histórico."
        ]
      },
      {
        "id": "data",
        "name": "Análise de Qualidade de Dados",
        "description": "Análise exploratória de gastos do Ministério da Saúde de dezembro de 2023, em notebook Python.",
        "details": [
          "Problema: compreender qualidade e distribuição dos registros de gastos. O notebook documenta inspeção, limpeza, análise descritiva e visualizações.",
          "Implementação: Pandas e NumPy na preparação dos dados; Matplotlib e Seaborn nos gráficos; SciPy na análise estatística.",
          "Notebook e metodologia disponíveis no repositório; análise restrita a dezembro de 2023. Um mês não estabelece sazonalidade; conclusões dependem dos dados de origem e das escolhas de limpeza."
        ]
      },
      {
        "id": "portfolio",
        "name": "Portfólio pessoal",
        "description": "Este portfólio em Next.js 14, React, TypeScript, Tailwind CSS e Framer Motion, com conteúdo PT/EN, download do currículo, CTA WhatsApp e layout responsivo."
      },
      {
        "id": "brasil",
        "name": "BrasilSemLixo",
        "description": "Protótipo educativo em equipe para consulta de horários de coleta de resíduos, com demonstração pública.",
        "details": [
          "Problema: facilitar consulta de informações de coleta. Participei do projeto em equipe; o módulo implementado é o Monitor de Coleta.",
          "Implementação: HTML, CSS e JavaScript puro; seleção de bairro e rua, filtros por tipo de coleta e cards responsivos.",
          "Evidência: demo estática pública com dados fictícios locais, sem API governamental. Guias de reciclagem e ecopontos são previstos, não módulos entregues."
        ]
      },
      {
        "id": "zeroday",
        "name": "ZeroDay Sentinel",
        "status": "Protótipo acadêmico · código privado",
        "description": "Protótipo educacional e conceitual de painel de resposta a vulnerabilidades.",
        "details": [
          "Next.js 14, React 18 e TypeScript: painel de alertas, busca e filtros por severidade, timeline de incidentes e simulação de contenção.",
          "Demonstração acadêmica com ameaças simuladas; não executa varredura, detecção por IA ou correção automática reais."
        ]
      }
    ],
    "detailsLabel": "Implementação e evidências"
  },
  "skills": {
    "title": "Habilidades",
    "subtitle": "Tecnologias e ferramentas que utilizo para criar soluções.",
    "categories": [
      "Linguagens",
      "Web & APIs",
      "Dados & IA",
      "Infraestrutura & Ferramentas"
    ],
    "softTitle": "Soft Skills",
    "soft": [
      "Resolução de Problemas",
      "Metodologias Ágeis",
      "Trabalho em Equipe",
      "Comunicação",
      "Aprendizado Rápido",
      "Adaptabilidade"
    ]
  },
  "experience": {
    "title": "Experiência & Formação",
    "subtitle": "Minha jornada na tecnologia, educação e conquistas.",
    "timeline": [
      {
        "title": "Cofundador — Quokk Software",
        "org": "Estúdio de Software e Dados",
        "period": "2026 — Atual",
        "desc": "Cofundação de estúdio de software e dados. Atuação em limpeza de dados, dashboards, automação sob medida e ferramentas web."
      },
      {
        "title": "Goiás pelo Mundo — Austrália",
        "org": "Programa de Intercâmbio",
        "period": "Jul 2026",
        "desc": "Intercâmbio cultural e educacional na Austrália. Aulas de inglês na ILSC e imersões culturais."
      },
      {
        "title": "3º Lugar — Olimpíada de IA Aplicada",
        "org": "Competição",
        "period": "2025",
        "desc": "Resolução de desafios de Machine Learning. Treinamento e implementação de modelos preditivos aplicados ao sistema de saúde de Goiás."
      },
      {
        "title": "Desenvolvedor Web Freelancer",
        "org": "Autônomo",
        "period": "Jan — Set 2025",
        "desc": "Desenvolvimento de sites institucionais, landing pages e e-commerces personalizados. Levantamento de requisitos, definição de escopo e integração de APIs e meios de pagamento."
      },
      {
        "title": "Mundo Senai 2025",
        "org": "Sesi-Senai",
        "period": "Abr 2025",
        "desc": "Apresentação de projetos técnicos ao público e profissionais da indústria. Demonstração de soluções práticas e networking profissional."
      },
      {
        "title": "Projeto Inova 2024",
        "org": "Sesi-Senai",
        "period": "Set — Nov 2024",
        "desc": "Projeto de inovação voltado a soluções tecnológicas em equipe multidisciplinar, com design thinking, prototipagem e metodologias ágeis."
      },
      {
        "title": "Junior Achievement — Miniempresa e Empresário Sombra",
        "org": "Programa de Empreendedorismo",
        "period": "Mar 2024 — Jul 2025",
        "desc": "Vivência prática em empreendedorismo, negócios e tomada de decisão. Desenvolvimento de comunicação, trabalho em equipe e gestão."
      },
      {
        "title": "Técnico em Desenvolvimento de Sistemas",
        "org": "Sesi-Senai Aparecida de Goiânia",
        "period": "Jan 2023 — Dez 2025",
        "desc": "Formação técnica em programação, banco de dados, desenvolvimento web e boas práticas."
      }
    ],
    "certificationsTitle": "Certificações",
    "languagesTitle": "Idiomas",
    "languages": [
      {
        "name": "Português",
        "level": "Nativo"
      },
      {
        "name": "Inglês",
        "level": "C1"
      }
    ],
    "langNote": "Vivência internacional: intercâmbio na Austrália pelo programa Goiás pelo Mundo (ILSC, 2026)."
  },
  "contact": {
    "title": "Entre em Contato",
    "subtitle": "Interessado em trabalhar juntos ou tem alguma pergunta? Me mande uma mensagem!",
    "labels": {
      "email": "Email",
      "phone": "Telefone",
      "whatsapp": "WhatsApp",
      "location": "Localização",
      "github": "GitHub"
    },
    "locationValue": "Aparecida de Goiânia, GO — Brasil",
    "action": "Entre em contato",
    "actionLabel": "Entre em contato pelo WhatsApp (abre nova aba)",
    "note": "Abra o WhatsApp para conversar sobre um projeto ou integração. Nenhuma mensagem é enviada automaticamente."
  },
  "footer": {
    "madeWith": "Feito com",
    "by": "por",
    "rights": "Todos os direitos reservados.",
    "backToTop": "Voltar ao topo"
  }
};
export type Translation = Omit<typeof pt, "projects"> & { projects: Omit<typeof pt.projects, "featured"> & { featured: Project[] } };
const en: Translation = {
  "nav": {
    "home": "Home",
    "about": "About",
    "projects": "Projects",
    "skills": "Skills",
    "experience": "Experience",
    "contact": "Contact"
  },
  "hero": {
    "greeting": "Hi, I'm",
    "titlePre": "Full-Stack",
    "titleH1": "Developer",
    "titleMid": "&",
    "titleH2": "AI",
    "subtitle": "I build web applications, integrations and automations with Python and TypeScript, applying AI to business workflows.",
    "location": "Aparecida de Goiânia, GO",
    "viewProjects": "View Projects",
    "resume": "Download résumé (PDF, Portuguese)",
    "aboutLabel": "Go to About"
  },
  "about": {
    "title": "About Me",
    "subtitle": "Systems Development technician from Sesi-Senai, freelance developer with real-world project experience and international exposure.",
    "p1": [
      {
        "text": "I develop web applications and API integrations with Python and TypeScript. In WPP AI Bot, I work on WhatsApp automation and continuity with human support."
      }
    ],
    "p2": [
      {
        "text": "I worked as a "
      },
      {
        "text": "freelance web developer",
        "strong": true
      },
      {
        "text": " building institutional websites, landing pages and e-commerce, with API and payment system integrations. I was awarded "
      },
      {
        "text": "3rd place",
        "strong": true,
        "primary": true
      },
      {
        "text": " at the Applied AI Olympiad 2025, training predictive models for Goiás' healthcare system."
      }
    ],
    "p3": [
      {
        "text": "I took part in the "
      },
      {
        "text": "Goiás pelo Mundo",
        "strong": true
      },
      {
        "text": " program, with an exchange in "
      },
      {
        "text": "Australia",
        "strong": true
      },
      {
        "text": " — English classes at ILSC and cultural immersions. Today I'm "
      },
      {
        "text": "co-founder of Quokk Software",
        "strong": true,
        "href": "https://www.quokk-software.com"
      },
      {
        "text": ", a software and data studio delivering data cleaning, dashboards, automation and custom web tools."
      }
    ],
    "highlights": [
      {
        "title": "Web Development",
        "desc": "Websites, e-commerce and full-stack applications"
      },
      {
        "title": "AI & Machine Learning",
        "desc": "Predictive models and intelligent automation"
      },
      {
        "title": "Data Analysis",
        "desc": "Pandas, Excel and data visualization"
      },
      {
        "title": "Automation",
        "desc": "WhatsApp automation and REST API integrations"
      }
    ],
    "cards": {
      "education": {
        "title": "Education",
        "items": [
          {
            "name": "Technical Degree in Systems Development",
            "detail": "Sesi-Senai • 2023 — 2025"
          },
          {
            "name": "High School Diploma",
            "detail": "Sesi-Senai • 2022 — 2025"
          }
        ]
      },
      "achievements": {
        "title": "Achievements",
        "items": [
          {
            "name": "3rd Place — Applied AI Olympiad",
            "detail": "2025 • ML for Goiás' public healthcare"
          },
          {
            "name": "Mundo Senai 2025",
            "detail": "Project presentations to public and industry"
          }
        ]
      },
      "international": {
        "title": "International Experience",
        "items": [
          {
            "name": "Goiás pelo Mundo — Australia",
            "detail": "Jul 2026 • English classes at ILSC and cultural immersions"
          }
        ]
      }
    }
  },
  "projects": {
    "title": "Featured Projects",
    "subtitle": "Projects showcasing my skills in web development, automation and data science.",
    "b2bBadge": "B2B Product",
    "othersTitle": "Other Projects",
    "viewAll": "View all repositories on GitHub",
    "featured": [
      {
        "id": "wpp",
        "name": "WPP AI Bot",
        "description": "Proprietary B2B product under development for WhatsApp support, deployed and configured per client.",
        "status": "Under active development",
        "caseStudy": "View public case study",
        "highlights": [
          "Prompt instructions and limited conversation history",
          "Configurable models via OpenRouter",
          "Human handoff to Chatwoot"
        ],
        "details": [
          "Problem: recurring questions and continuity between automated and human support. My implementation connects Evolution API, response generation and Chatwoot handoff.",
          "Decisions: FastAPI and SQLAlchemy with MySQL for application data; OpenRouter through an OpenAI-compatible SDK. PostgreSQL and Redis support the integrations.",
          "In-development project with architecture documented in the public repository. Client deployment requires configuration and operational validation."
        ]
      },
      {
        "id": "telegram",
        "name": "Bot Telegram de Promoções",
        "description": "TypeScript bot for curating and publishing promotions on Telegram.",
        "details": [
          "Node.js, Telegraf and Express: scheduling, LLM or heuristic curation, deduplication, HTTP API and simulation without publishing.",
          "Scraping and API collection is subject to captchas, HTML changes and access restrictions; Mercado Livre is experimental. Local history does not eliminate all cross-source duplicates; no historical lowest-price verification."
        ]
      },
      {
        "id": "data",
        "name": "Data Quality Analysis",
        "description": "Exploratory analysis of Ministry of Health expenditure data from December 2023, in a Python notebook.",
        "details": [
          "Problem: understand the quality and distribution of expenditure records. The notebook documents data inspection, cleaning, descriptive analysis and visualizations.",
          "Implementation: Pandas and NumPy for data preparation; Matplotlib and Seaborn for charts; SciPy for statistical analysis.",
          "Notebook and methodology available in the repository; analysis limited to December 2023. One month does not establish seasonality; findings depend on the source data and cleaning choices."
        ]
      },
      {
        "id": "portfolio",
        "name": "Personal portfolio",
        "description": "This portfolio uses Next.js 14, React, TypeScript, Tailwind CSS and Framer Motion, with PT/EN content, résumé download, WhatsApp CTA and a responsive layout."
      },
      {
        "id": "brasil",
        "name": "BrasilSemLixo",
        "description": "Team-built educational prototype for consulting waste collection schedules, with a public demo.",
        "details": [
          "Problem: make collection information easier to consult. I participated in the team project; the implemented module is the Collection Monitor.",
          "Implementation: HTML, CSS and vanilla JavaScript; neighborhood and street selection, collection-type filters and responsive result cards.",
          "Evidence: public static demo with fictional local data, without a government API. Recycling guides and drop-off points remain planned, not delivered modules."
        ]
      },
      {
        "id": "zeroday",
        "name": "ZeroDay Sentinel",
        "status": "Academic prototype · private source",
        "description": "Educational, conceptual prototype of a vulnerability response dashboard.",
        "details": [
          "Next.js 14, React 18 and TypeScript: alert dashboard, search and severity filters, incident timeline and containment simulation.",
          "Academic demonstration with simulated threats; no real scanning, AI detection or automatic remediation."
        ]
      }
    ],
    "detailsLabel": "Implementation and evidence"
  },
  "skills": {
    "title": "Skills",
    "subtitle": "Technologies and tools I use to build solutions.",
    "categories": [
      "Languages",
      "Web & APIs",
      "Data & AI",
      "Infrastructure & Tools"
    ],
    "softTitle": "Soft Skills",
    "soft": [
      "Problem Solving",
      "Agile Methodologies",
      "Teamwork",
      "Communication",
      "Fast Learner",
      "Adaptability"
    ]
  },
  "experience": {
    "title": "Experience & Education",
    "subtitle": "My journey in technology, education and achievements.",
    "timeline": [
      {
        "title": "Co-founder — Quokk Software",
        "org": "Software & Data Studio",
        "period": "2026 — Present",
        "desc": "Co-founded a software and data studio. Work on data cleaning, dashboards, custom automation and web tools."
      },
      {
        "title": "Goiás pelo Mundo — Australia",
        "org": "Exchange Program",
        "period": "Jul 2026",
        "desc": "Cultural and educational exchange in Australia. English classes at ILSC and cultural immersions."
      },
      {
        "title": "3rd Place — Applied AI Olympiad",
        "org": "Competition",
        "period": "2025",
        "desc": "Machine learning challenges. Training and implementing predictive models applied to Goiás' healthcare system."
      },
      {
        "title": "Freelance Web Developer",
        "org": "Self-employed",
        "period": "Jan — Sep 2025",
        "desc": "Built institutional websites, landing pages and custom e-commerce. Requirements gathering, scope definition and API/payment integrations."
      },
      {
        "title": "Mundo Senai 2025",
        "org": "Sesi-Senai",
        "period": "Apr 2025",
        "desc": "Presented technical projects to the public and industry professionals. Practical solutions demo and professional networking."
      },
      {
        "title": "Inova Project 2024",
        "org": "Sesi-Senai",
        "period": "Sep — Nov 2024",
        "desc": "Innovation project for tech solutions in a multidisciplinary team, with design thinking, prototyping and agile methodologies."
      },
      {
        "title": "Junior Achievement — Mini Company & Job Shadow",
        "org": "Entrepreneurship Program",
        "period": "Mar 2024 — Jul 2025",
        "desc": "Hands-on experience in entrepreneurship, business and decision-making. Communication, teamwork and management skills."
      },
      {
        "title": "Technical Degree in Systems Development",
        "org": "Sesi-Senai Aparecida de Goiânia",
        "period": "Jan 2023 — Dec 2025",
        "desc": "Technical education in programming, databases, web development and best practices."
      }
    ],
    "certificationsTitle": "Certifications",
    "languagesTitle": "Languages",
    "languages": [
      {
        "name": "Portuguese",
        "level": "Native"
      },
      {
        "name": "English",
        "level": "C1"
      }
    ],
    "langNote": "International experience: exchange in Australia through the Goiás pelo Mundo program (ILSC, 2026)."
  },
  "contact": {
    "title": "Get in Touch",
    "subtitle": "Interested in working together or have a question? Send me a message!",
    "labels": {
      "email": "Email",
      "phone": "Phone",
      "whatsapp": "WhatsApp",
      "location": "Location",
      "github": "GitHub"
    },
    "locationValue": "Aparecida de Goiânia, GO — Brazil",
    "action": "Get in touch",
    "actionLabel": "Get in touch via WhatsApp (opens a new tab)",
    "note": "Open WhatsApp to discuss a project or integration. No message is sent automatically."
  },
  "footer": {
    "madeWith": "Made with",
    "by": "by",
    "rights": "All rights reserved.",
    "backToTop": "Back to top"
  }
};
export const translations: Record<Language, Translation> = { pt, en };
