export type Language = "pt" | "en";

export interface Segment {
  text: string;
  strong?: boolean;
}

const pt = {
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    skills: "Skills",
    experience: "Experiência",
    contact: "Contato",
  },
  hero: {
    greeting: "Olá, eu sou",
    titlePre: "Desenvolvedor",
    titleH1: "Full-Stack",
    titleMid: "&",
    titleH2: "IA",
    subtitle: "Transformo ideias em soluções com código, automação e inteligência artificial. Apaixonado por tecnologia e inovação.",
    location: "Aparecida de Goiânia, GO",
    viewProjects: "Ver Projetos",
    downloadCV: "Baixar CV",
  },
  about: {
    title: "Sobre Mim",
    subtitle: "Técnico em Desenvolvimento de Sistemas pelo Sesi-Senai, desenvolvedor freelancer com experiência em projetos reais e vivência internacional.",
    p1: [
      { text: "Sou desenvolvedor com background em " },
      { text: "Desenvolvimento de Software", strong: true },
      { text: ", " },
      { text: "Análise de Dados", strong: true },
      { text: " e " },
      { text: "Inteligência Artificial", strong: true },
      { text: ". Tenho experiência em projetos web, análise de dados e machine learning aplicado, sempre buscando aplicar conhecimentos técnicos em problemas reais." },
    ] as Segment[],
    p2: [
      { text: "Atuei como " },
      { text: "desenvolvedor web freelancer", strong: true },
      { text: " criando sites institucionais, landing pages e e-commerce, com integração de APIs e sistemas de pagamento. Fui premiado com " },
      { text: "3º lugar", strong: true, primary: true },
      { text: " na Olimpíada de IA Aplicada 2025, treinando modelos preditivos para o sistema de saúde de Goiás." },
    ] as (Segment & { primary?: boolean })[],
    p3: [
      { text: "Participei do programa " },
      { text: "Goiás pelo Mundo", strong: true },
      { text: ", com intercâmbio na " },
      { text: "Austrália", strong: true },
      { text: " — aulas de inglês na ILSC e imersões culturais. Atualmente focado em construir soluções de automação com IA para pequenos negócios." },
    ] as Segment[],
    highlights: [
      { title: "Desenvolvimento Web", desc: "Sites, e-commerce e aplicações full-stack" },
      { title: "IA & Machine Learning", desc: "Modelos preditivos e automação inteligente" },
      { title: "Análise de Dados", desc: "Pandas, Excel e visualização de dados" },
      { title: "Automação", desc: "Bots WhatsApp, Telegram e integrações API" },
    ],
    cards: {
      education: {
        title: "Educação",
        items: [
          { name: "Técnico em Desenvolvimento de Sistemas", detail: "Sesi-Senai • 2023 — 2025" },
          { name: "Ensino Médio", detail: "Sesi-Senai • 2022 — 2025" },
        ],
      },
      achievements: {
        title: "Conquistas",
        items: [
          { name: "3º Lugar — Olimpíada de IA Aplicada", detail: "2025 • ML para saúde pública de Goiás" },
          { name: "Mundo Senai 2025", detail: "Apresentação de projetos para público e indústria" },
        ],
      },
      international: {
        title: "Experiência Internacional",
        items: [
          { name: "Goiás pelo Mundo — Austrália", detail: "Jul 2026 • Aulas de inglês na ILSC e imersões culturais" },
        ],
      },
    },
  },
  projects: {
    title: "Projetos em Destaque",
    subtitle: "Projetos que demonstram minhas habilidades em desenvolvimento web, automação e ciência de dados.",
    b2bBadge: "Produto B2B",
    othersTitle: "Outros Projetos",
    viewAll: "Ver todos os repositórios no GitHub",
    featured: [
      { name: "WPP AI Bot — Produto B2B", description: "Plataforma de atendimento automatizado no WhatsApp com IA. Agente com contexto do negócio, resposta 24/7 e handoff para humano. Case study público, código proprietário." },
      { name: "template-e-commerce", description: "Template completo de e-commerce com design moderno e responsivo. Deploy na Vercel." },
      { name: "analise_qualidade_de_dados", description: "Análise de qualidade de dados com Python e Pandas. Notebooks com visualizações e insights." },
      { name: "BrasilSemLixo", description: "Projeto social sobre descarte consciente de lixo. Landing page informativa com GitHub Pages." },
      { name: "mundo-senai_2025", description: "Projeto apresentado no Mundo Senai 2025 — demonstração de soluções técnicas para a indústria." },
      { name: "Desafio-DLJ-2025", description: "Plataforma de gamificação educacional desenvolvida para o Desafio Liga Jovem 2025." },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Tecnologias e ferramentas que utilizo para criar soluções.",
    categories: ["Linguagens", "Frameworks & Ferramentas", "Dados & IA", "Plataformas & DevOps"],
    softTitle: "Soft Skills",
    soft: ["Resolução de Problemas", "Metodologias Ágeis", "Trabalho em Equipe", "Comunicação", "Aprendizado Rápido", "Adaptabilidade"],
  },
  experience: {
    title: "Experiência & Formação",
    subtitle: "Minha jornada na tecnologia, educação e conquistas.",
    timeline: [
      { title: "Goiás pelo Mundo — Austrália", org: "Programa de Intercâmbio", period: "Jul 2026", desc: "Intercâmbio cultural e educacional na Austrália. Aulas de inglês na ILSC e imersões culturais." },
      { title: "3º Lugar — Olimpíada de IA Aplicada", org: "Competição", period: "2025", desc: "Resolução de desafios de Machine Learning. Treinamento e implementação de modelos preditivos aplicados ao sistema de saúde de Goiás." },
      { title: "Desenvolvedor Web Freelancer", org: "Autônomo", period: "Jan — Set 2025", desc: "Desenvolvimento de sites institucionais, landing pages e e-commerces personalizados. Levantamento de requisitos, definição de escopo e integração de APIs e meios de pagamento." },
      { title: "Mundo Senai 2025", org: "Sesi-Senai", period: "Abr 2025", desc: "Apresentação de projetos técnicos ao público e profissionais da indústria. Demonstração de soluções práticas e networking profissional." },
      { title: "Projeto Inova 2024", org: "Sesi-Senai", period: "Set — Nov 2024", desc: "Projeto de inovação voltado a soluções tecnológicas em equipe multidisciplinar, com design thinking, prototipagem e metodologias ágeis." },
      { title: "Junior Achievement — Miniempresa e Empresário Sombra", org: "Programa de Empreendedorismo", period: "Mar 2024 — Jul 2025", desc: "Vivência prática em empreendedorismo, negócios e tomada de decisão. Desenvolvimento de comunicação, trabalho em equipe e gestão." },
      { title: "Técnico em Desenvolvimento de Sistemas", org: "Sesi-Senai Aparecida de Goiânia", period: "Jan 2023 — Dez 2025", desc: "Formação técnica em programação, banco de dados, desenvolvimento web e boas práticas." },
    ],
    certificationsTitle: "Certificações",
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "C1" },
    ],
    langNote: "Vivência internacional: intercâmbio na Austrália pelo programa Goiás pelo Mundo (ILSC, 2026).",
  },
  contact: {
    title: "Entre em Contato",
    subtitle: "Interessado em trabalhar juntos ou tem alguma pergunta? Me mande uma mensagem!",
    labels: { email: "Email", phone: "Telefone", whatsapp: "WhatsApp", location: "Localização", github: "GitHub" },
    locationValue: "Aparecida de Goiânia, GO — Brasil",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "Email",
      emailPlaceholder: "seu@email.com",
      message: "Mensagem",
      messagePlaceholder: "Sua mensagem...",
      submit: "Enviar Mensagem",
      sent: "Mensagem enviada!",
      mailSubject: "Contato Portfolio",
    },
  },
  footer: {
    madeWith: "Feito com",
    by: "por",
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo",
  },
};

export type Translation = typeof pt;

const en: Translation = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    greeting: "Hi, I'm",
    titlePre: "Full-Stack",
    titleH1: "Developer",
    titleMid: "&",
    titleH2: "AI",
    subtitle: "I turn ideas into solutions with code, automation and artificial intelligence. Passionate about technology and innovation.",
    location: "Aparecida de Goiânia, GO",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    subtitle: "Systems Development technician from Sesi-Senai, freelance developer with real-world project experience and international exposure.",
    p1: [
      { text: "I'm a developer with a background in " },
      { text: "Software Development", strong: true },
      { text: ", " },
      { text: "Data Analysis", strong: true },
      { text: " and " },
      { text: "Artificial Intelligence", strong: true },
      { text: ". I have experience in web projects, data analysis and applied machine learning, always looking to apply technical knowledge to real-world problems." },
    ] as Segment[],
    p2: [
      { text: "I worked as a " },
      { text: "freelance web developer", strong: true },
      { text: " building institutional websites, landing pages and e-commerce, with API and payment system integrations. I was awarded " },
      { text: "3rd place", strong: true, primary: true },
      { text: " at the Applied AI Olympiad 2025, training predictive models for Goiás' healthcare system." },
    ] as (Segment & { primary?: boolean })[],
    p3: [
      { text: "I took part in the " },
      { text: "Goiás pelo Mundo", strong: true },
      { text: " program, with an exchange in " },
      { text: "Australia", strong: true },
      { text: " — English classes at ILSC and cultural immersions. Currently focused on building AI automation solutions for small businesses." },
    ] as Segment[],
    highlights: [
      { title: "Web Development", desc: "Websites, e-commerce and full-stack applications" },
      { title: "AI & Machine Learning", desc: "Predictive models and intelligent automation" },
      { title: "Data Analysis", desc: "Pandas, Excel and data visualization" },
      { title: "Automation", desc: "WhatsApp bots, Telegram and API integrations" },
    ],
    cards: {
      education: {
        title: "Education",
        items: [
          { name: "Technical Degree in Systems Development", detail: "Sesi-Senai • 2023 — 2025" },
          { name: "High School Diploma", detail: "Sesi-Senai • 2022 — 2025" },
        ],
      },
      achievements: {
        title: "Achievements",
        items: [
          { name: "3rd Place — Applied AI Olympiad", detail: "2025 • ML for Goiás' public healthcare" },
          { name: "Mundo Senai 2025", detail: "Project presentations to public and industry" },
        ],
      },
      international: {
        title: "International Experience",
        items: [
          { name: "Goiás pelo Mundo — Australia", detail: "Jul 2026 • English classes at ILSC and cultural immersions" },
        ],
      },
    },
  },
  projects: {
    title: "Featured Projects",
    subtitle: "Projects showcasing my skills in web development, automation and data science.",
    b2bBadge: "B2B Product",
    othersTitle: "Other Projects",
    viewAll: "View all repositories on GitHub",
    featured: [
      { name: "WPP AI Bot — B2B Product", description: "Automated customer service platform on WhatsApp with AI. Business-context agent, 24/7 responses and human handoff. Public case study, proprietary code." },
      { name: "template-e-commerce", description: "Complete e-commerce template with modern, responsive design. Deployed on Vercel." },
      { name: "analise_qualidade_de_dados", description: "Data quality analysis with Python and Pandas. Notebooks with visualizations and insights." },
      { name: "BrasilSemLixo", description: "Social project about conscious waste disposal. Informative landing page on GitHub Pages." },
      { name: "mundo-senai_2025", description: "Project presented at Mundo Senai 2025 — demonstration of technical solutions for industry." },
      { name: "Desafio-DLJ-2025", description: "Educational gamification platform built for the Liga Jovem Challenge 2025." },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies and tools I use to build solutions.",
    categories: ["Languages", "Frameworks & Tools", "Data & AI", "Platforms & DevOps"],
    softTitle: "Soft Skills",
    soft: ["Problem Solving", "Agile Methodologies", "Teamwork", "Communication", "Fast Learner", "Adaptability"],
  },
  experience: {
    title: "Experience & Education",
    subtitle: "My journey in technology, education and achievements.",
    timeline: [
      { title: "Goiás pelo Mundo — Australia", org: "Exchange Program", period: "Jul 2026", desc: "Cultural and educational exchange in Australia. English classes at ILSC and cultural immersions." },
      { title: "3rd Place — Applied AI Olympiad", org: "Competition", period: "2025", desc: "Machine learning challenges. Training and implementing predictive models applied to Goiás' healthcare system." },
      { title: "Freelance Web Developer", org: "Self-employed", period: "Jan — Sep 2025", desc: "Built institutional websites, landing pages and custom e-commerce. Requirements gathering, scope definition and API/payment integrations." },
      { title: "Mundo Senai 2025", org: "Sesi-Senai", period: "Apr 2025", desc: "Presented technical projects to the public and industry professionals. Practical solutions demo and professional networking." },
      { title: "Inova Project 2024", org: "Sesi-Senai", period: "Sep — Nov 2024", desc: "Innovation project for tech solutions in a multidisciplinary team, with design thinking, prototyping and agile methodologies." },
      { title: "Junior Achievement — Mini Company & Job Shadow", org: "Entrepreneurship Program", period: "Mar 2024 — Jul 2025", desc: "Hands-on experience in entrepreneurship, business and decision-making. Communication, teamwork and management skills." },
      { title: "Technical Degree in Systems Development", org: "Sesi-Senai Aparecida de Goiânia", period: "Jan 2023 — Dec 2025", desc: "Technical education in programming, databases, web development and best practices." },
    ],
    certificationsTitle: "Certifications",
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "C1" },
    ],
    langNote: "International experience: exchange in Australia through the Goiás pelo Mundo program (ILSC, 2026).",
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Interested in working together or have a question? Send me a message!",
    labels: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", location: "Location", github: "GitHub" },
    locationValue: "Aparecida de Goiânia, GO — Brazil",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send Message",
      sent: "Message sent!",
      mailSubject: "Portfolio Contact",
    },
  },
  footer: {
    madeWith: "Made with",
    by: "by",
    rights: "All rights reserved.",
    backToTop: "Back to top",
  },
};

export const translations: Record<Language, Translation> = { pt, en };
