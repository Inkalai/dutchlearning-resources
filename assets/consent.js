// Cookie consent for Google Analytics (via Google Tag Manager GTM-PGCDKD2L).
// Nothing from Google loads until the visitor clicks Accept. The choice is kept in localStorage.
// Any element with the attribute data-cookie-settings reopens the banner.
(function () {
  var GTM_ID = "GTM-PGCDKD2L";
  var KEY = "dl-cookie-consent";
  var TEXT = {
    en: { msg: "I use Google Analytics to see which pages help people most. It only runs if you accept.", yes: "Accept", no: "Decline", settings: "Cookie settings", label: "Cookie consent" },
    zh: { msg: "我使用 Google Analytics 了解哪些頁面對大家最有幫助。只有在你同意後才會啟用。", yes: "接受", no: "拒絕", settings: "Cookie 設定", label: "Cookie 同意" },
    nl: { msg: "Ik gebruik Google Analytics. Zo zie ik welke pagina's mensen helpen. Het werkt alleen als je het accepteert.", yes: "Accepteren", no: "Weigeren", settings: "Cookie-instellingen", label: "Cookies" }
  };
  var lang = document.documentElement.getAttribute("data-lang");
  var t = TEXT[lang] || TEXT.en;

  function getChoice() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function setChoice(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  var loaded = false;
  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    // Google's own snippet from Google Analytics, run only after consent.
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
    document.head.appendChild(s);
  }

  // Remove Google Analytics cookies after a visitor withdraws consent.
  function clearAnalyticsCookies() {
    var host = location.hostname.replace(/^www\./, "");
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (/^_ga|^_gid|^_gat/.test(name)) {
        ["", "; domain=" + host, "; domain=." + host].forEach(function (d) {
          document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/" + d;
        });
      }
    });
  }

  if (getChoice() === "granted") loadAnalytics();

  var CSS =
    ".cookie-banner{position:fixed;left:16px;bottom:16px;z-index:1000;max-width:380px;box-sizing:border-box;" +
    "background:#fff;color:#2b2420;border:1px solid #eadfd7;border-radius:14px;padding:16px 18px;" +
    "box-shadow:0 10px 30px rgba(43,36,32,.18);font:15px/1.5 \"Noto Sans TC\",system-ui,-apple-system,\"Segoe UI\",sans-serif}" +
    ".cookie-banner p{margin:0 0 12px}" +
    ".cookie-banner .cookie-actions{display:flex;gap:10px}" +
    ".cookie-banner button{flex:1;font:inherit;font-weight:700;padding:9px 14px;border-radius:999px;cursor:pointer;border:2px solid #f26b2a}" +
    ".cookie-banner .cookie-yes{background:#f26b2a;color:#fff}" +
    ".cookie-banner .cookie-no{background:#fff;color:#c94d12}" +
    ".cookie-banner button:hover{filter:brightness(.95)}" +
    ".cookie-banner button:focus-visible{outline:3px solid #1f8f9d;outline-offset:2px}" +
    "@media (max-width:480px){.cookie-banner{left:12px;right:12px;bottom:12px;max-width:none}}" +
    "[data-cookie-settings]{background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer}";

  var banner = null;
  function showBanner() {
    if (banner) { banner.querySelector(".cookie-yes").focus(); return; }
    banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", t.label);
    banner.innerHTML = '<p></p><div class="cookie-actions"><button type="button" class="cookie-no"></button><button type="button" class="cookie-yes"></button></div>';
    banner.querySelector("p").textContent = t.msg;
    banner.querySelector(".cookie-yes").textContent = t.yes;
    banner.querySelector(".cookie-no").textContent = t.no;
    banner.querySelector(".cookie-yes").addEventListener("click", function () {
      setChoice("granted");
      hideBanner();
      loadAnalytics();
    });
    banner.querySelector(".cookie-no").addEventListener("click", function () {
      var wasOn = loaded;
      setChoice("denied");
      hideBanner();
      clearAnalyticsCookies();
      if (wasOn) location.reload(); // stop the analytics already running on this page
    });
    document.body.appendChild(banner);
  }
  function hideBanner() { if (banner) { banner.remove(); banner = null; } }

  function init() {
    var style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    document.querySelectorAll("[data-cookie-settings]").forEach(function (el) {
      el.textContent = t.settings;
      el.addEventListener("click", function (e) { e.preventDefault(); showBanner(); });
    });
    if (!getChoice()) showBanner();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
