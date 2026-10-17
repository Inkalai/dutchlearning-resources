(function () {
  "use strict";

  var CONFIG = window.SITE_CONFIG || {};
  var DATA = window.RESOURCES || [];
  var I18N = window.I18N;

  var LEVELS = ["A0", "A1", "A2", "B1", "B2", "C1", "C2"];
  var BUDGETS = [0, 25, 75, 150, 300, Infinity];
  var HOURS = [4, 10, 20, 40, Infinity];
  var FORMATS = ["self", "inperson", "online"];
  var FOCUS = ["speaking", "listening", "reading", "writing", "grammar", "exam"];
  var KINDS = ["library", "government", "school", "university", "app", "course", "tutors", "creator", "media", "podcast", "community"];

  var state = {
    lang: initialLang(),
    cur: 1,
    target: 3,
    picking: false,
    budget: Infinity,
    hours: Infinity,
    formats: new Set(),
    focus: new Set(),
    place: "any",
    q: "",
    sort: "match"
  };

  function $(id) { return document.getElementById(id); }

  function storage(key, value) {
    try {
      if (value === undefined) return window.localStorage.getItem(key);
      window.localStorage.setItem(key, value);
    } catch (e) { return null; }
  }

  function initialLang() {
    var param = new URLSearchParams(location.search).get("lang");
    if (param === "zh" || param === "en") return param;
    var saved = storage("lang");
    if (saved === "zh" || saved === "en") return saved;
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  }

  function t(key, vars) {
    var s = (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }

  function lv(code) { return LEVELS.indexOf(code); }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  /* ---------- Static text ---------- */

  function applyStaticText() {
    document.documentElement.lang = state.lang === "zh" ? "zh-Hant-TW" : "en";
    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description"));
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      node.setAttribute("placeholder", t(node.getAttribute("data-i18n-placeholder")));
    });
    $("updated").textContent = CONFIG.lastReviewed ? t("footer.updated", { date: CONFIG.lastReviewed }) : "";
    $("suggestSubmit").textContent = CONFIG.formEndpoint ? t("suggest.submit") : t("suggest.submitGithub");
    $("formNote").textContent = CONFIG.formEndpoint ? "" : t("suggest.githubNote");
    $("formNote").hidden = !!CONFIG.formEndpoint;
    updateFiltersToggleLabel();
  }

  function applyLinks() {
    document.querySelectorAll(".js-kofi").forEach(function (a) { if (CONFIG.kofi) a.href = CONFIG.kofi; });
    document.querySelectorAll(".js-instagram").forEach(function (a) { if (CONFIG.instagram) a.href = CONFIG.instagram; });
    document.querySelectorAll(".js-blog").forEach(function (a) {
      if (CONFIG.blog) { a.href = CONFIG.blog; a.hidden = false; }
    });
  }

  /* ---------- Level route ---------- */

  function renderRoute() {
    var line = $("routeLine");
    line.innerHTML = "";
    line.classList.toggle("picking", state.picking);
    LEVELS.forEach(function (code, i) {
      var li = el("li");
      if (!state.picking) {
        if (i > state.cur && i <= state.target) li.classList.add("on-route");
        if (i === state.cur) li.classList.add("is-current");
        if (i === state.target && state.target !== state.cur) li.classList.add("is-target");
      } else if (i === state.cur) {
        li.classList.add("is-current");
      }
      var flag = "";
      if (i === state.cur) flag = t("route.now");
      else if (!state.picking && i === state.target) flag = t("route.goal");

      var btn = el("button", {
        type: "button",
        class: "station",
        "aria-label": code + ", " + t("level." + code) + (flag ? " (" + flag + ")" : "")
      }, [
        el("span", { class: "flag", text: flag, "aria-hidden": "true" }),
        el("span", { class: "dot", "aria-hidden": "true" }),
        el("span", { class: "code", text: code, "aria-hidden": "true" }),
        el("span", { class: "desc", text: t("level." + code), "aria-hidden": "true" })
      ]);
      if (i === state.cur) btn.setAttribute("aria-current", "step");
      btn.addEventListener("click", function () { pickLevel(i); });
      li.appendChild(btn);
      line.appendChild(li);
    });

    var hint = $("routeHint");
    if (state.picking) hint.textContent = t("route.hint.pickTarget");
    else hint.textContent = t("route.hint.done", { cur: LEVELS[state.cur], target: LEVELS[state.target] });
  }

  // First tap sets where you are now, second tap sets your goal.
  function pickLevel(i) {
    if (!state.picking) {
      state.cur = i;
      state.target = i;
      state.picking = i < LEVELS.length - 1;
    } else {
      if (i < state.cur) { state.target = state.cur; state.cur = i; }
      else state.target = i;
      state.picking = false;
    }
    storage("route", state.cur + "," + state.target);
    renderRoute();
    renderResults();
  }

  /* ---------- Filters ---------- */

  function segButton(label, pressed, onClick) {
    var b = el("button", { type: "button", "aria-pressed": String(pressed), text: label });
    b.addEventListener("click", onClick);
    return b;
  }

  function renderFilters() {
    var budget = $("budget");
    budget.innerHTML = "";
    BUDGETS.forEach(function (v) {
      var key = v === Infinity ? "budget.any" : "budget." + v;
      budget.appendChild(segButton(t(key), state.budget === v, function () {
        state.budget = v; renderFilters(); renderResults();
      }));
    });

    var hours = $("hours");
    hours.innerHTML = "";
    HOURS.forEach(function (v) {
      var key = v === Infinity ? "hours.any" : "hours." + v;
      hours.appendChild(segButton(t(key), state.hours === v, function () {
        state.hours = v; renderFilters(); renderResults();
      }));
    });

    renderChipSet($("formats"), FORMATS, "format.", state.formats);
    renderChipSet($("focus"), FOCUS, "focus.", state.focus);
    renderPlace();
    updateFiltersToggleLabel();
  }

  function renderChipSet(container, values, prefix, set) {
    container.innerHTML = "";
    values.forEach(function (v) {
      container.appendChild(segButton(t(prefix + v), set.has(v), function () {
        if (set.has(v)) set.delete(v); else set.add(v);
        renderFilters(); renderResults();
      }));
    });
  }

  function cities() {
    var all = {};
    DATA.forEach(function (r) { (r.cities || []).forEach(function (c) { all[c] = true; }); });
    return Object.keys(all).sort();
  }

  function renderPlace() {
    var sel = $("place");
    sel.innerHTML = "";
    ["any", "online", "NL", "BE"].forEach(function (v) {
      sel.appendChild(el("option", { value: v, text: t("place." + v) }));
    });
    var group = el("optgroup", { label: t("place.cities") });
    cities().forEach(function (c) { group.appendChild(el("option", { value: "city:" + c, text: c })); });
    sel.appendChild(group);
    sel.value = state.place;
  }

  function activeFilterCount() {
    var n = 0;
    if (state.budget !== Infinity) n++;
    if (state.hours !== Infinity) n++;
    n += state.formats.size + state.focus.size;
    if (state.place !== "any") n++;
    if (state.q) n++;
    return n;
  }

  function updateFiltersToggleLabel() {
    var open = $("filters").classList.contains("open");
    $("filtersToggle").firstElementChild.textContent = t(open ? "filters.hide" : "filters.show");
    var n = activeFilterCount();
    $("activeCount").textContent = n;
    $("activeCount").hidden = n === 0;
  }

  /* ---------- Matching ---------- */

  function isOnline(r) {
    return r.region === "online" || r.formats.indexOf("online") > -1;
  }

  function matchesPlace(r) {
    var p = state.place;
    if (p === "any") return true;
    if (p === "online") return isOnline(r);
    if (p === "NL" || p === "BE") return r.region === p || r.region === "NL+BE" || r.region === "online";
    var city = p.slice(5);
    return r.region === "online" || (r.cities || []).indexOf(city) > -1;
  }

  // A resource fits if you can start it at your current level and it still has something to teach you.
  function matchesLevel(r) {
    var from = lv(r.levels[0]), to = lv(r.levels[1]);
    if (from > state.cur) return false;
    if (state.cur === LEVELS.length - 1) return to === state.cur;
    return to > state.cur || (state.target === state.cur && to >= state.cur);
  }

  function matchesText(r) {
    if (!state.q) return true;
    var q = state.q.toLowerCase();
    var hay = [r.name, r.note.en, r.note.zh, t("kind." + r.kind), (r.cities || []).join(" "), r.levels.join(" ")].join(" ").toLowerCase();
    return hay.indexOf(q) > -1;
  }

  function intersects(list, set) {
    if (!set.size) return true;
    return list.some(function (x) { return set.has(x); });
  }

  function score(r) {
    var to = lv(r.levels[1]);
    var span = Math.max(1, state.target - state.cur);
    var coverage = Math.min(1, Math.max(0, (Math.min(to, state.target) - state.cur) / span));
    var s = coverage * 10;
    // Prefer resources pitched at your route over very broad ones.
    s -= Math.max(0, state.cur - lv(r.levels[0])) * 0.3;
    s -= Math.max(0, to - state.target) * 0.3;
    // Advice desks that only refer you elsewhere sit below actual learning.
    if (r.hours[1] <= 2) s -= 2;
    if (state.formats.size) s += r.formats.filter(function (f) { return state.formats.has(f); }).length;
    if (state.focus.size) s += r.focus.filter(function (f) { return state.focus.has(f); }).length;
    if (r.cost[0] === 0) s += 0.5;
    if (!r.review) s += 0.3;
    return s;
  }

  function filtered() {
    var list = DATA.filter(function (r) {
      return r.cost[0] <= state.budget &&
        r.hours[0] <= state.hours &&
        intersects(r.formats, state.formats) &&
        intersects(r.focus, state.focus) &&
        matchesPlace(r) &&
        matchesLevel(r) &&
        matchesText(r);
    });
    // An unknown maximum (null) sorts after every known price.
    var maxCost = function (r) { return r.cost[1] === null ? Infinity : r.cost[1]; };
    var byName = function (a, b) { return a.name.localeCompare(b.name); };
    if (state.sort === "price") list.sort(function (a, b) { return a.cost[0] - b.cost[0] || maxCost(a) - maxCost(b) || byName(a, b); });
    else if (state.sort === "name") list.sort(byName);
    else list.sort(function (a, b) { return score(b) - score(a) || a.cost[0] - b.cost[0] || byName(a, b); });
    return list;
  }

  /* ---------- Results ---------- */

  function euro(n) {
    return "€" + n.toLocaleString(state.lang === "zh" ? "zh-TW" : "en-GB");
  }

  function priceBlock(r) {
    var min = r.cost[0], max = r.cost[1];
    var amount;
    if (max === null) amount = min === 0 ? t("card.freePlus") : euro(min) + "+";
    else if (max === 0) amount = t("card.free");
    else if (min === 0) amount = t("card.free") + " – " + euro(max);
    else if (min === max) amount = euro(min);
    else amount = euro(min) + "–" + euro(max);
    return el("div", { class: "price" }, [
      el("span", { class: "amount" + (min === 0 ? " free" : ""), text: amount }),
      max === 0 || (max === null && min === 0) ? null : el("span", { class: "per", text: t("card.perMonth") })
    ]);
  }

  function levelBar(r) {
    var from = lv(r.levels[0]), to = lv(r.levels[1]);
    var ol = el("ol", { "aria-hidden": "true" });
    LEVELS.forEach(function (code, i) {
      var cls = [];
      if (i >= from && i <= to) cls.push("has");
      if (i >= state.cur && i <= state.target) cls.push("mine");
      ol.appendChild(el("li", { class: cls.join(" "), text: code }));
    });
    var reachesGoal = to >= state.target;
    var label = reachesGoal ? t("card.reachesGoal", { level: LEVELS[state.target] }) : t("card.reaches", { level: r.levels[1] });
    return el("div", { class: "levelbar" }, [
      ol,
      el("span", { class: "visually-hidden", text: t("card.levels", { from: r.levels[0], to: r.levels[1] }) }),
      el("span", { class: "reach" + (reachesGoal ? "" : " partial"), text: label })
    ]);
  }

  function placeText(r) {
    if (r.region === "online") return t("region.online");
    var region = t("region." + r.region);
    var c = r.cities || [];
    if (!c.length) return region;
    var shown = c.slice(0, 4).join(", ") + (c.length > 4 ? " +" + (c.length - 4) : "");
    return region + t("card.placeSep") + shown;
  }

  function resultItem(r) {
    var lang = state.lang;
    var meta = el("p", { class: "meta" }, [
      el("span", { text: t("kind." + r.kind) }),
      el("span", { text: placeText(r) }),
      el("span", { text: t("card.timeNeeded", { min: r.hours[0], max: r.hours[1] }) })
    ]);

    var tags = el("ul", { class: "tags" });
    r.formats.forEach(function (f) { tags.appendChild(el("li", { class: "fmt", text: t("format." + f) })); });
    r.focus.forEach(function (f) { tags.appendChild(el("li", { text: t("focus." + f) })); });

    var links = el("p", { class: "links" }, [
      el("a", { href: r.url, target: "_blank", rel: "noopener", text: t("card.visit") }),
      r.instagram && r.instagram !== r.url ? el("a", { href: r.instagram, target: "_blank", rel: "noopener", text: t("card.instagram") }) : null,
      r.youtube && r.youtube !== r.url ? el("a", { href: r.youtube, target: "_blank", rel: "noopener", text: t("card.youtube") }) : null,
      r.review ? el("span", { class: "unreviewed", text: t("card.unreviewed") }) : null
    ]);

    var body = el("div", null, [
      el("h3", null, [el("a", { href: r.url, target: "_blank", rel: "noopener", text: r.name })]),
      meta,
      el("p", { class: "note", text: r.note[lang] || r.note.en }),
      r.price ? el("p", { class: "price-note", text: r.price[lang] || r.price.en }) : null,
      levelBar(r),
      tags,
      links
    ]);

    return el("li", { class: "result" }, [priceBlock(r), body]);
  }

  function renderResults() {
    var list = filtered();
    var ul = $("resultList");
    ul.innerHTML = "";
    list.forEach(function (r) { ul.appendChild(resultItem(r)); });
    $("resultsCount").textContent = list.length === 1 ? t("results.countOne") : t("results.count", { n: list.length });
    $("empty").hidden = list.length > 0;
    updateFiltersToggleLabel();
  }

  /* ---------- Suggest form ---------- */

  function renderSuggestForm() {
    var kind = $("s-kind");
    var keep = kind.value;
    kind.innerHTML = "";
    KINDS.forEach(function (k) { kind.appendChild(el("option", { value: k, text: t("kind." + k) })); });
    if (keep) kind.value = keep;

    document.querySelectorAll(".js-levels").forEach(function (sel, idx) {
      var prev = sel.value;
      sel.innerHTML = "";
      LEVELS.forEach(function (code) { sel.appendChild(el("option", { value: code, text: code + " · " + t("level." + code) })); });
      sel.value = prev || (idx === 0 ? "A0" : "B1");
    });

    renderFormChips($("s-formats"), FORMATS, "format.");
    renderFormChips($("s-focus"), FOCUS, "focus.");
  }

  var formChoices = { "s-formats": new Set(), "s-focus": new Set() };

  function renderFormChips(container, values, prefix) {
    var set = formChoices[container.id];
    container.innerHTML = "";
    values.forEach(function (v) {
      container.appendChild(segButton(t(prefix + v), set.has(v), function () {
        if (set.has(v)) set.delete(v); else set.add(v);
        renderFormChips(container, values, prefix);
      }));
    });
  }

  function collectSuggestion(form) {
    var fd = new FormData(form);
    return {
      name: (fd.get("name") || "").trim(),
      url: (fd.get("url") || "").trim(),
      kind: fd.get("kind"),
      cost: (fd.get("cost") || "").trim(),
      levels: fd.get("levelFrom") + "–" + fd.get("levelTo"),
      formats: Array.from(formChoices["s-formats"]).join(", "),
      focus: Array.from(formChoices["s-focus"]).join(", "),
      place: (fd.get("place") || "").trim(),
      why: (fd.get("why") || "").trim(),
      contact: (fd.get("contact") || "").trim(),
      isTeacher: fd.get("isTeacher") === "yes" ? "yes" : "no",
      language: state.lang
    };
  }

  function githubIssueUrl(s) {
    var body = [
      "**Name:** " + s.name,
      "**Link:** " + s.url,
      "**Type:** " + s.kind,
      "**Price per month:** " + (s.cost || "-"),
      "**Levels:** " + s.levels,
      "**Format:** " + (s.formats || "-"),
      "**Focus:** " + (s.focus || "-"),
      "**City or online:** " + (s.place || "-"),
      "**Teacher/organiser:** " + s.isTeacher,
      "**Suggested by:** " + (s.contact || "-"),
      "",
      "**Why:**",
      s.why || "-"
    ].join("\n");
    return "https://github.com/" + CONFIG.githubRepo + "/issues/new?labels=suggestion&title=" +
      encodeURIComponent("Resource suggestion: " + s.name) + "&body=" + encodeURIComponent(body);
  }

  function setupSuggestForm() {
    var form = $("suggestForm");
    var status = $("formStatus");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var s = collectSuggestion(form);
      status.className = "form-status";
      if (!s.name || !s.url) {
        status.textContent = t("suggest.required");
        status.classList.add("err");
        (s.name ? $("s-url") : $("s-name")).focus();
        return;
      }
      if (!CONFIG.formEndpoint) {
        window.open(githubIssueUrl(s), "_blank", "noopener");
        return;
      }
      var btn = $("suggestSubmit");
      btn.disabled = true;
      btn.textContent = t("suggest.sending");
      fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(s)
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        formChoices["s-formats"].clear();
        formChoices["s-focus"].clear();
        renderSuggestForm();
        status.textContent = t("suggest.sent");
        status.classList.add("ok");
      }).catch(function () {
        status.textContent = t("suggest.error");
        status.classList.add("err");
      }).then(function () {
        btn.disabled = false;
        btn.textContent = t("suggest.submit");
      });
    });
  }

  /* ---------- Wiring ---------- */

  function renderAll() {
    applyStaticText();
    renderRoute();
    renderFilters();
    renderSuggestForm();
    renderResults();
  }

  function restoreRoute() {
    var saved = (storage("route") || "").split(",").map(Number);
    if (saved.length === 2 && saved.every(function (n) { return n >= 0 && n < LEVELS.length; }) && saved[0] <= saved[1]) {
      state.cur = saved[0];
      state.target = saved[1];
    }
  }

  function init() {
    restoreRoute();
    applyLinks();

    $("langToggle").addEventListener("click", function () {
      state.lang = state.lang === "zh" ? "en" : "zh";
      storage("lang", state.lang);
      var url = new URL(location.href);
      url.searchParams.set("lang", state.lang);
      history.replaceState(null, "", url);
      renderAll();
    });

    $("search").addEventListener("input", function (e) { state.q = e.target.value.trim(); renderResults(); });
    $("place").addEventListener("change", function (e) { state.place = e.target.value; renderResults(); });
    $("sort").addEventListener("change", function (e) { state.sort = e.target.value; renderResults(); });

    $("clearFilters").addEventListener("click", function () {
      state.budget = Infinity; state.hours = Infinity;
      state.formats.clear(); state.focus.clear();
      state.place = "any"; state.q = "";
      $("search").value = "";
      renderFilters(); renderResults();
    });

    $("filtersToggle").addEventListener("click", function () {
      var open = $("filters").classList.toggle("open");
      this.setAttribute("aria-expanded", String(open));
      updateFiltersToggleLabel();
    });

    setupSuggestForm();
    renderAll();
  }

  init();
})();
