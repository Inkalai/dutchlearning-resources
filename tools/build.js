#!/usr/bin/env node
/*
  Builds the published pages from templates/page.html, so search engines and AI tools
  can read the full text and resource list without running JavaScript.

  Run it after every change to the template, data, text, styles or scripts:

      node tools/build.js

  It writes:
    index.html, zh/index.html, nl/index.html   one page per language, text filled in
    sitemap.xml, robots.txt, llms.txt          files for search engines and AI tools

  The resource cards are drawn by the site's own code (assets/app.js) in a headless
  browser, so they always match what visitors see. That needs Playwright, which is
  installed globally in Claude's environment (npm root -g).
*/
"use strict";

const fs = require("fs");
const path = require("path");
const http = require("http");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
// Change this if the site moves to its own domain.
const SITE_URL = "https://inkalai.github.io/dutchlearning-resources/";

const LANGS = {
  en: { dir: "", htmlLang: "en", hreflang: "en", ogLocale: "en_GB" },
  zh: { dir: "zh/", htmlLang: "zh-Hant-TW", hreflang: "zh-Hant", ogLocale: "zh_TW" },
  nl: { dir: "nl/", htmlLang: "nl", hreflang: "nl", ogLocale: "nl_NL" }
};

function read(file) { return fs.readFileSync(path.join(ROOT, file), "utf8"); }
function write(file, text) {
  fs.mkdirSync(path.dirname(path.join(ROOT, file)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, file), text);
}
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Load the browser data files (they assign to window.*) into a sandbox.
function loadBrowserData() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  ["config.js", "data/resources.js", "assets/i18n.js"].forEach(f => vm.runInContext(read(f), sandbox, { filename: f }));
  return { config: sandbox.window.SITE_CONFIG, resources: sandbox.window.RESOURCES, i18n: sandbox.window.I18N };
}

// Short content hash per asset, so browsers fetch a file again only when it changed.
function version(file) {
  return crypto.createHash("sha1").update(fs.readFileSync(path.join(ROOT, file))).digest("hex").slice(0, 10);
}

function pageUrl(lang) { return SITE_URL + LANGS[lang].dir; }

function headTags(lang, t, config, resources) {
  const L = LANGS[lang];
  const alternates = Object.keys(LANGS).map(k =>
    `  <link rel="alternate" hreflang="${LANGS[k].hreflang}" href="${pageUrl(k)}">`).join("\n");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": SITE_URL + "#website",
        url: SITE_URL,
        name: "Dutch learning resources | @dutchlearning",
        inLanguage: ["en", "zh-Hant", "nl"],
        publisher: { "@id": SITE_URL + "#inka" }
      },
      {
        "@type": "Person",
        "@id": SITE_URL + "#inka",
        name: "Inka",
        url: config.instagram,
        sameAs: [config.instagram, config.blog].filter(Boolean)
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl(lang) + "#page",
        url: pageUrl(lang),
        name: t("meta.title"),
        description: t("meta.description"),
        inLanguage: L.hreflang,
        isPartOf: { "@id": SITE_URL + "#website" },
        author: { "@id": SITE_URL + "#inka" },
        dateModified: config.lastReviewed,
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: resources.length,
          itemListElement: resources.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.name,
            url: r.url,
            description: r.note[lang] || r.note.en
          }))
        }
      }
    ]
  };
  return [
    `  <title>${esc(t("meta.title"))}</title>`,
    `  <meta name="description" content="${esc(t("meta.description"))}">`,
    `  <link rel="canonical" href="${pageUrl(lang)}">`,
    alternates,
    `  <link rel="alternate" hreflang="x-default" href="${pageUrl("en")}">`,
    `  <link rel="icon" href="${L.dir ? "../" : ""}assets/favicon.png">`,
    `  <meta property="og:type" content="website">`,
    `  <meta property="og:site_name" content="@dutchlearning">`,
    `  <meta property="og:title" content="${esc(t("meta.title"))}">`,
    `  <meta property="og:description" content="${esc(t("meta.description"))}">`,
    `  <meta property="og:url" content="${pageUrl(lang)}">`,
    `  <meta property="og:locale" content="${L.ogLocale}">`,
    `  <meta property="og:image" content="${SITE_URL}assets/og-image.png?v=${version("assets/og-image.png")}">`,
    `  <meta property="og:image:type" content="image/png">`,
    `  <meta property="og:image:width" content="1200">`,
    `  <meta property="og:image:height" content="630">`,
    `  <meta property="og:image:alt" content="A traveller with an orange backpack walking towards a Dutch windmill">`,
    `  <meta name="twitter:card" content="summary_large_image">`,
    `  <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`
  ].join("\n");
}

// Sends visitors to their language: an old ?lang= link, or (on the English page only)
// their saved choice or browser language. Runs before the page draws.
function langScript(lang) {
  return `  <script>
  (function () {
    var langs = ["en", "zh", "nl"], page = "${lang}", root = "${LANGS[lang].dir ? "../" : ""}";
    var param = new URLSearchParams(location.search).get("lang"), saved = null, want = page;
    try { saved = localStorage.getItem("lang"); } catch (e) {}
    if (langs.indexOf(param) > -1) {
      want = param;
      try { localStorage.setItem("lang", param); } catch (e) {}
    } else if (page === "en") {
      var browser = (navigator.language || "").slice(0, 2).toLowerCase();
      want = langs.indexOf(saved) > -1 ? saved : (langs.indexOf(browser) > -1 ? browser : "en");
    }
    if (want !== page || param) location.replace((want === "en" ? root || "./" : root + want + "/") + location.hash);
  })();
  </script>`;
}

function fillTemplate(template, lang, data) {
  const t = (key, vars) => {
    let s = (data.i18n[lang] && data.i18n[lang][key]) || data.i18n.en[key] || key;
    if (vars) Object.keys(vars).forEach(k => { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  };
  let html = template
    .replace(/\s*<!-- Template for the generated pages[^>]*-->\n\s*<meta name="robots" content="noindex">/,
      "\n  <!-- Generated by tools/build.js from templates/page.html. Edit the template, not this file. -->")
    .replace("{{head}}", headTags(lang, t, data.config, data.resources))
    .replace("{{langScript}}", langScript(lang))
    .replace(/\{\{root\}\}/g, LANGS[lang].dir ? "../" : "")
    .replace(/\{\{htmlLang\}\}/g, LANGS[lang].htmlLang)
    .replace(/\{\{lang\}\}/g, lang)
    .replace(/\{\{v:([^}]+)\}\}/g, (m, file) => version(file))
    .replace(`<option value="${lang}">`, `<option value="${lang}" selected>`);

  // Text of every element marked data-i18n (they only ever contain plain text).
  html = html.replace(/(<(\w+)\b[^>]*\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (m, open, tag, key, inner, close) => open + esc(t(key)) + close);
  html = html.replace(/(\sdata-i18n-placeholder="([^"]+)")/g,
    (m, attr, key) => `${attr} placeholder="${esc(t(key))}"`);
  html = html.replace('<p id="updated"></p>',
    `<p id="updated">${esc(t("footer.updated", { date: data.config.lastReviewed }))}</p>`);
  return html;
}

function startServer() {
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png" };
  const server = http.createServer((req, res) => {
    let file = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (file.endsWith("/")) file += "index.html";
    const full = path.join(ROOT, file);
    if (!full.startsWith(ROOT) || !fs.existsSync(full)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "Content-Type": types[path.extname(full)] || "application/octet-stream" });
    fs.createReadStream(full).pipe(res);
  });
  return new Promise(resolve => server.listen(0, "127.0.0.1", () => resolve(server)));
}

function loadPlaywright() {
  try { return require("playwright"); } catch (e) {
    return require(path.join(execSync("npm root -g").toString().trim(), "playwright"));
  }
}

// Draw each page in a browser and copy the rendered cards and count into the file.
async function renderCards(langs) {
  const { chromium } = loadPlaywright();
  const server = await startServer();
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  try {
    for (const lang of langs) {
      const file = LANGS[lang].dir + "index.html";
      const page = await browser.newPage({ locale: "en-GB" });
      const errors = [];
      page.on("pageerror", e => errors.push(e.message));
      // Keep the icon service out of the build; the cards are the same without it.
      await page.route(/google\.com\/s2\/favicons/, r => r.abort());
      await page.goto(base + LANGS[lang].dir, { waitUntil: "domcontentloaded" });
      await page.waitForSelector("#resultList > li");
      if (errors.length) throw new Error(`${file}: ${errors.join("; ")}`);
      const out = await page.evaluate(() => ({
        list: document.getElementById("resultList").innerHTML,
        count: document.getElementById("resultsCount").textContent
      }));
      await page.close();
      let html = read(file);
      html = html.replace('<ul class="result-list" id="resultList"></ul>', `<ul class="result-list" id="resultList">${out.list}</ul>`);
      html = html.replace('<h2 id="resultsCount" aria-live="polite"></h2>', `<h2 id="resultsCount" aria-live="polite">${esc(out.count)}</h2>`);
      write(file, html);
    }
  } finally {
    await browser.close();
    server.close();
  }
}

function priceText(r, t) {
  const [min, max] = r.cost;
  if (min === null) return t("card.priceUnknown");
  if (max === 0) return t("card.free");
  if (max === null) return min === 0 ? t("card.freePlus") : `€${min}+ ${t("card.perMonth")}`;
  if (min === 0) return `${t("card.free")} – €${max} ${t("card.perMonth")}`;
  return (min === max ? `€${min}` : `€${min}–€${max}`) + ` ${t("card.perMonth")}`;
}

function llmsTxt(data) {
  const t = key => data.i18n.en[key] || key;
  const lines = [
    "# Dutch learning resources (@dutchlearning)",
    "",
    "> A free, independent finder for ways to learn Dutch: libraries, city halls, language schools, universities, apps, online tutors, Instagram and YouTube teachers and practice groups in the Netherlands, Belgium, Taiwan and online. Run by Inka (Instagram @dutchlearning). No ads or paid placements. Prices are checked every week.",
    "",
    `The site is available in English (${pageUrl("en")}), Traditional Chinese (${pageUrl("zh")}) and simple Dutch (${pageUrl("nl")}). Visitors filter by current and target CEFR level (A0–C2), monthly budget, time per month, learning format, skills, region and Dutch or Flemish.`,
    "",
    `Last price check: ${data.config.lastReviewed}. Prices change; always confirm on the provider's website.`,
    "",
    "## Resources",
    ""
  ];
  data.resources.forEach(r => {
    const where = r.region === "online" ? "Online" :
      r.region.split("+").map(x => t("region." + x)).join(", ") + (r.cities && r.cities.length ? ` (${r.cities.join(", ")})` : "");
    const formats = r.formats.map(f => t("format." + f)).join(", ");
    lines.push(`- [${r.name}](${r.url}): ${r.note.en} Levels ${r.levels[0]}–${r.levels[1]}. ${where}. ${formats}. Price: ${r.price ? r.price.en : priceText(r, t) + "."}`);
  });
  lines.push("", "## Optional", "", `- [Suggest a resource](${pageUrl("en")}#suggest)`, `- [Instagram @dutchlearning](${data.config.instagram})`, "");
  return lines.join("\n");
}

function sitemapXml(data) {
  const urls = Object.keys(LANGS).map(lang => [
    "  <url>",
    `    <loc>${pageUrl(lang)}</loc>`,
    `    <lastmod>${data.config.lastReviewed}</lastmod>`,
    ...Object.keys(LANGS).map(k => `    <xhtml:link rel="alternate" hreflang="${LANGS[k].hreflang}" href="${pageUrl(k)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl("en")}"/>`,
    "  </url>"
  ].join("\n"));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}

function robotsTxt() {
  return `# Search engines and AI tools are welcome to read and cite this site.
User-agent: *
Allow: /
Disallow: /templates/
Disallow: /tools/

Sitemap: ${SITE_URL}sitemap.xml
`;
}

async function main() {
  const data = loadBrowserData();
  const template = read("templates/page.html");
  Object.keys(LANGS).forEach(lang => write(LANGS[lang].dir + "index.html", fillTemplate(template, lang, data)));
  await renderCards(Object.keys(LANGS));
  write("sitemap.xml", sitemapXml(data));
  write("robots.txt", robotsTxt());
  write("llms.txt", llmsTxt(data));
  console.log(`Built ${Object.keys(LANGS).length} pages with ${data.resources.length} resources.`);
}

main().catch(e => { console.error(e); process.exit(1); });
