const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

// Use the installed TypeScript compiler; no build artifacts or extra dependencies.
function load(file, language = "pt") {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  vm.runInNewContext(code, { exports, require: (id) => {
    if (id === "@/lib/LanguageContext") return { useLanguage: () => ({ t: translations[language] }) };
    if (id.startsWith("@/")) return load(path.resolve(id.slice(2) + ".ts"), language);
    return require(id);
  } }, { filename: file });
  return exports;
}
const { translations } = load("lib/translations.ts");
const { contact, projectsMeta, otherProjects, certifications, certificationDetail } = load("lib/portfolio.ts");
const render = (component, lang) => renderToStaticMarkup(React.createElement(load(component, lang).default));

test("WhatsApp contact: actual accessible link, no form or false success", () => {
  assert.equal(contact.whatsapp, "https://wa.me/5562993432290");
  for (const lang of ["pt", "en"]) {
    const html = render("components/Contact.tsx", lang);
    assert.equal((html.match(/href="https:\/\/wa.me\/5562993432290"/g) || []).length, 1);
    assert.match(html, /rel="noopener noreferrer"/);
    assert.ok(html.includes(translations[lang].contact.actionLabel));
    assert.doesNotMatch(html, /<form|<input|<textarea|Message sent|Mensagem enviada/i);
    assert.equal("form" in translations[lang].contact, false);
  }
});

test("approved PDF: eligible, unchanged, local download in both languages", () => {
  assert.equal(contact.resume, "/Ian_Alves_Sousa_Curriculo.pdf");
  const pdf = fs.readFileSync("public" + contact.resume);
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.equal(crypto.createHash("sha256").update(pdf).digest("hex"),
    "fc2d39b047b8e04680c607d4041ad56676af037d8dc67fc75afaf56dcd2ed497");
  const { spawnSync } = require("node:child_process");
  assert.equal(spawnSync("git", ["check-ignore", "public" + contact.resume]).status, 1);
  for (const lang of ["pt", "en"]) {
    const html = render("components/Hero.tsx", lang);
    assert.ok(html.includes('href="' + contact.resume + '" download=""'));
    assert.ok(html.includes(translations[lang].hero.resume));
  }
  assert.match(translations.en.hero.resume, /Portuguese/);
});

test("bilingual project IDs and metadata match; priority cases expose evidence", () => {
  const expected = ["wpp", "telegram", "data", "brasil", "secretaria"];
  assert.deepEqual(Object.keys(projectsMeta).sort(), [...expected].sort());
  assert.equal(JSON.stringify(translations.pt.projects.featured.map(p => p.id)), JSON.stringify(expected));
  assert.equal(JSON.stringify(translations.pt.projects.featured.map(p => p.id)),
    JSON.stringify(translations.en.projects.featured.map(p => p.id)));
  for (const lang of ["pt", "en"]) {
    const projects = translations[lang].projects.featured;
    assert.equal(new Set(projects.map(p => p.id)).size, 5);
    for (const p of projects.filter(p => p.id !== "secretaria")) assert.ok(projectsMeta[p.id]?.tech.length);
    for (const id of ["wpp", "data", "brasil"]) {
      assert.equal(projects.find(p => p.id === id).details.length, 3);
    }
    const html = render("components/Projects.tsx", lang);
    assert.equal((html.match(/<details/g) || []).length, 4);
    assert.doesNotMatch(html, /undefined/);
    const wpp = JSON.stringify(projects.find(p => p.id === "wpp"));
    assert.doesNotMatch(wpp, /RAG|SaaS|24\/7|treinad|trained|multi.tenant|isolamento integral|complete isolation/i);
    assert.match(wpp, /OpenRouter/);
    assert.match(wpp, /MySQL/);
    assert.match(wpp, /Chatwoot/);
    assert.match(JSON.stringify(projects.find(p => p.id === "brasil")), /fictícios|fictional/);
    assert.match(JSON.stringify(projects.find(p => p.id === "data")), /2023/);
  }
  assert.equal(projectsMeta.brasil.demo, "https://sousaian.github.io/BrasilSemLixo/");
  assert.equal(projectsMeta.wpp.url, "https://github.com/Sousaian/wpp-ai-bot-showcase");
});

test("certifications: optional issuer/hours, no fabricated issuer", () => {
  assert.equal(certifications.length, 7);
  assert.equal(certifications.find(c => c.name === "ChatGPT for Devs").org, undefined);
  assert.equal(certifications.find(c => c.name === "ChatGPT for Devs").hours, 18);
  assert.equal(certificationDetail({}), "");
  assert.equal(certificationDetail({ org: "AWS" }), "AWS");
  assert.equal(certificationDetail({ hours: 18 }), "18h");
  assert.equal(certificationDetail({ hours: 0 }), "");
  for (const c of certifications) assert.doesNotMatch(certificationDetail(c), /undefined|\b0h/);
  for (const lang of ["pt", "en"]) {
    const html = render("components/Experience.tsx", lang);
    assert.doesNotMatch(html, /undefined|\b0h|OpenAI/);
    for (const name of ["Claude 101", "Claude Code 101", "Essentials of Prompt Engineering"]) assert.ok(html.includes(name));
  }
});

test("site copy excludes controllership, preserves key credentials", () => {
  assert.doesNotMatch(JSON.stringify(translations), /controladoria|controllership/i);
  for (const lang of ["pt", "en"]) {
    const copy = JSON.stringify(translations[lang]);
    for (const term of ["Quokk", "Sesi-Senai", "C1", "2026"]) assert.ok(copy.includes(term));
  }
  for (const dir of ["components", "app", "lib"]) {
    for (const file of fs.readdirSync(dir).filter(f => /\.(tsx?|css)$/.test(f))) {
      assert.doesNotMatch(fs.readFileSync(path.join(dir, file), "utf8"), /controladoria|controllership/i);
    }
  }
});

test("horizontal entrance animations are clipped at the page boundary", () => {
  const css = fs.readFileSync("app/globals.css", "utf8");
  assert.match(css, /html,\s*body\s*\{\s*overflow-x:\s*clip;/);
  // Static guard only: actual viewport overflow must be checked in a browser.
});

test("long skill labels can shrink and wrap within their grid cells", () => {
  const html = render("components/Skills.tsx", "pt");
  for (const label of ["SQL / MySQL / PostgreSQL", "Docker / Compose"]) {
    assert.ok(html.includes(label));
    assert.ok(html.includes('class="min-w-0 flex-1 break-words text-sm font-medium">' + label));
  }
  assert.match(html, /class="flex min-w-0 items-center/);
});

test("public cases retain scope without portfolio-review process disclaimers", () => {
  for (const lang of ["pt", "en"]) {
    const cases = translations[lang].projects.featured;
    assert.doesNotMatch(JSON.stringify(cases), /não reexecutados|not rerun|portfolio update|atualização do portfólio|documentation review|revisão de código/i);
    const data = JSON.stringify(cases.find(p => p.id === "data"));
    assert.match(data, /dezembro de 2023|December 2023/);
    assert.match(data, /metodologia|methodology/);
    assert.match(data, /sazonalidade|seasonality/);
    assert.match(JSON.stringify(cases.find(p => p.id === "wpp")), /validação operacional|operational validation/);
  }
});

test("selected projects: repository links, scope and four unique other projects", () => {
  const urls = {
    wpp: "wpp-ai-bot-showcase",
    telegram: "bot-telegram-promo-es",
    data: "analise_qualidade_de_dados",
    brasil: "BrasilSemLixo",
  };
  for (const [id, repo] of Object.entries(urls)) {
    assert.equal(projectsMeta[id].url, "https://github.com/Sousaian/" + repo);
  }

  assert.equal(otherProjects.length, 4);
  assert.equal(new Set(otherProjects.map(p => p.id)).size, 4);
  assert.equal(new Set(otherProjects.map(p => p.url)).size, 4);
  assert.equal(JSON.stringify(otherProjects.map(p => p.name)),
    JSON.stringify(["template-e-commerce", "mundo-senai_2025", "Mundo-Invertido", "My-KDE_configs"]));
  assert.ok(otherProjects.every(p => !projectsMeta[p.id] && p.url === "https://github.com/Sousaian/" + p.name));
  const excluded = /portf[oó]lio|portfolio|zeroday|zero-day|EduInvest|\bdlj\b|Desafio-DLJ-2025|v0-educational-gamification-platfor-seven\.vercel\.app/i;
  assert.doesNotMatch(JSON.stringify({ projectsMeta, otherProjects }), excluded);
  for (const lang of ["pt", "en"]) {
    const projects = translations[lang].projects.featured;
    const html = render("components/Projects.tsx", lang);
    assert.doesNotMatch(JSON.stringify(projects), excluded);
    assert.doesNotMatch(html, excluded);
    for (const [id, repo] of Object.entries(urls)) {
      assert.ok(html.includes('href="https://github.com/Sousaian/' + repo + '"'));
    }
    for (const p of otherProjects) assert.ok(html.includes('href="' + p.url + '"'));
    assert.match(JSON.stringify(projects.find(p => p.id === "telegram")), /heurística|heuristic/);
    assert.match(JSON.stringify(projects.find(p => p.id === "telegram")), /captcha/);
  }
  assert.ok(certifications.some(c => c.name === "Desafio Liga Jovem"));
});

test("secretary: bilingual description-only card has exactly heading and paragraph", () => {
  assert.equal(projectsMeta.secretaria.descriptionOnly, true);
  assert.equal(JSON.stringify(projectsMeta.secretaria), JSON.stringify({ tech: [], descriptionOnly: true }));
  const expected = {
    pt: {
      id: "secretaria",
      name: "Secretária Virtual Quokk",
      description: "Assistente virtual para atendimento comercial pelo WhatsApp, com coleta de solicitações, confirmação dos dados com o cliente e organização das demandas para acompanhamento pela equipe.",
    },
    en: {
      id: "secretaria",
      name: "Quokk Virtual Secretary",
      description: "Virtual assistant for business customer service on WhatsApp, collecting requests, confirming information with the customer and organizing requests for the team to follow up.",
    },
  };
  for (const lang of ["pt", "en"]) {
    const project = translations[lang].projects.featured.find(p => p.id === "secretaria");
    assert.equal(JSON.stringify(project), JSON.stringify(expected[lang]));
    const html = render("components/Projects.tsx", lang);
    // Card contains no nested wrappers: inspect its complete rendered children.
    const card = html.match(/<div[^>]*>(<h3[^>]*>[^<]*<\/h3><p[^>]*>[^<]*<\/p>)<\/div>/g)
      ?.find(card => card.includes(project.name));
    assert.ok(card, "description-only card must render exactly h3 + p");
    assert.ok(card.includes(project.description));
    assert.doesNotMatch(card, /<a\b|<details\b|<summary\b|<span\b|<svg\b|<ul\b|line-clamp|href=|status|data-tech/i);
  }
});
