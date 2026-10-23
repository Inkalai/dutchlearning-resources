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
  var VARIANTS = ["nl", "be"];
  var CATEGORIES = ["library", "government", "school", "instagram", "youtube", "app", "tutors", "courses", "practice", "news", "tv"];
  var COUNTRIES = ["NL", "BE", "TW"];
  var CITY_COUNTRIES = window.CITY_COUNTRIES || {};
  var KINDS = ["library", "government", "school", "university", "app", "course", "tutors", "creator", "ai", "media", "podcast", "community"];

  var state = {
    lang: initialLang(),
    // No route until the visitor picks one; all resources show until then.
    cur: null,
    target: null,
    picking: false,
    budget: Infinity,
    hours: Infinity,
    formats: new Set(),
    focus: new Set(),
    categories: new Set(),
    variants: new Set(),
    place: "any",
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
    line.classList.toggle("picking", state.picking || state.cur === null);
    // After the first tap, the title asks for the goal so the second tap isn't forgotten.
    var legend = t("route.legend");
    if (state.picking) legend = t("route.legendGoal");
    else if (state.cur !== null) legend = t("route.legendDone", { cur: LEVELS[state.cur], target: LEVELS[state.target] });
    document.querySelector("#route legend").textContent = legend;
    LEVELS.forEach(function (code, i) {
      var li = el("li");
      if (!state.picking) {
        if (i > state.cur && i <= state.target) li.classList.add("on-route");
        if (i === state.cur) li.classList.add("is-current");
        if (i === state.target && state.target !== state.cur) li.classList.add("is-target");
      } else if (i === state.cur) {
        li.classList.add("is-current");
      } else if (i > state.cur) {
        // Levels above the current one blink for 5 seconds to prompt the goal tap.
        li.classList.add("goal-option");
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
  }

  // First tap sets where you are now, second tap sets your goal.
  function pickLevel(i) {
    $("tapHint").hidden = true;
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
    renderChipSet($("categories"), CATEGORIES, "cat.", state.categories);
    renderChipSet($("variants"), VARIANTS, "variant.", state.variants);
    // Where you live only matters for in-person classes, so it shows once that format is chosen.
    var inPerson = state.formats.has("inperson");
    if (!inPerson) state.place = "any";
    $("placeField").hidden = !inPerson;
    renderPlace();
    updateFiltersToggleLabel();
  }

  // Multi-select chips carry a small checkbox so people can tell they may pick several.
  function multiChip(label, pressed, onClick) {
    var b = el("button", { type: "button", class: "multi-chip", "aria-pressed": String(pressed) }, [
      el("span", { class: "box", "aria-hidden": "true" }),
      document.createTextNode(label)
    ]);
    b.addEventListener("click", onClick);
    return b;
  }

  function renderChipSet(container, values, prefix, set) {
    container.innerHTML = "";
    values.forEach(function (v) {
      container.appendChild(multiChip(t(prefix + v), set.has(v), function () {
        if (set.has(v)) set.delete(v); else set.add(v);
        renderFilters(); renderResults();
      }));
    });
  }

  // Cities grouped by country; a city's country comes from CITY_COUNTRIES, default the Netherlands.
  function citiesByCountry() {
    var groups = {};
    DATA.forEach(function (r) {
      (r.cities || []).forEach(function (c) {
        var country = CITY_COUNTRIES[c] || "NL";
        (groups[country] = groups[country] || {})[c] = true;
      });
    });
    return COUNTRIES.filter(function (k) { return groups[k]; }).map(function (k) {
      return { country: k, cities: Object.keys(groups[k]).sort() };
    });
  }

  function regionsOf(r) { return r.region.split("+"); }

  function renderPlace() {
    var sel = $("place");
    sel.innerHTML = "";
    ["any"].concat(COUNTRIES).forEach(function (v) {
      sel.appendChild(el("option", { value: v, text: t("place." + v) }));
    });
    citiesByCountry().forEach(function (g) {
      var group = el("optgroup", { label: t("place.citiesIn", { country: t("place." + g.country) }) });
      g.cities.forEach(function (c) { group.appendChild(el("option", { value: "city:" + c, text: c })); });
      sel.appendChild(group);
    });
    sel.value = state.place;
  }

  function activeFilterCount() {
    var n = 0;
    if (state.budget !== Infinity) n++;
    if (state.hours !== Infinity) n++;
    n += state.formats.size + state.focus.size + state.categories.size + state.variants.size;
    if (state.place !== "any") n++;
    return n;
  }

  function updateFiltersToggleLabel() {
    var n = activeFilterCount();
    document.querySelectorAll(".js-active-count").forEach(function (b) {
      b.textContent = n;
      b.hidden = n === 0;
    });
    var count = $("resultList").children.length;
    $("filtersClose").textContent = count === 1 ? t("filters.doneOne") : t("filters.done", { n: count });
  }

  /* ---------- Mobile menu and filter sheet ---------- */

  var mobile = window.matchMedia("(max-width: 860px)");

  function setMenu(open) {
    $("mainNav").classList.toggle("open", open);
    $("brand").setAttribute("aria-expanded", String(open));
  }

  function setFilterSheet(open, returnToResults) {
    $("filters").classList.toggle("open", open);
    document.querySelectorAll(".js-open-filters").forEach(function (b) { b.setAttribute("aria-expanded", String(open)); });
    document.body.classList.toggle("sheet-open", open && mobile.matches);
    updateFiltersToggleLabel();
    if (open && mobile.matches) $("filtersClose").focus();
    if (!open && returnToResults) {
      $("finder").scrollIntoView();
      document.querySelector("#filtersEntry .js-open-filters").focus({ preventScroll: true });
    }
  }

  function syncMobileMode() {
    var brand = $("brand");
    if (mobile.matches) {
      brand.setAttribute("aria-controls", "mainNav");
      brand.setAttribute("aria-label", t("nav.menu"));
      brand.setAttribute("aria-expanded", String($("mainNav").classList.contains("open")));
    } else {
      setMenu(false);
      setFilterSheet(false);
      brand.removeAttribute("aria-controls");
      brand.removeAttribute("aria-expanded");
      brand.setAttribute("aria-label", "@dutchlearning");
    }
  }

  function setupMobile() {
    // On phones the logo opens the menu instead of jumping to the top.
    $("brand").addEventListener("click", function (e) {
      if (!mobile.matches) return;
      e.preventDefault();
      setMenu(!$("mainNav").classList.contains("open"));
    });
    $("mainNav").addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".site-header")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if ($("mainNav").classList.contains("open")) { setMenu(false); $("brand").focus(); }
      if ($("filters").classList.contains("open") && mobile.matches) setFilterSheet(false, true);
    });
    $("filtersClose").addEventListener("click", function () { setFilterSheet(false, true); });

    // The floating filter button appears only once the filter section has scrolled out of view.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        var e = entries[0];
        $("filtersToggle").classList.toggle("show", !e.isIntersecting && e.boundingClientRect.top < 0);
      }).observe($("filtersEntry"));
    } else {
      $("filtersToggle").classList.add("show");
    }
    mobile.addEventListener("change", syncMobileMode);
    syncMobileMode();
  }

  /* ---------- Matching ---------- */

  function countryOfCity(c) { return CITY_COUNTRIES[c] || "NL"; }

  // Whether a resource offers format f where the visitor lives. In-person classes count only in
  // the resource's own cities or countries; self-study and online classes from online providers
  // work anywhere, while local providers' online options stay with their own country.
  function availableIn(r, f) {
    var p = state.place;
    if (p === "any") return true;
    var regions = regionsOf(r);
    var online = regions.indexOf("online") > -1;
    var cities = r.cities || [];
    var city = p.indexOf("city:") === 0 ? p.slice(5) : null;
    var country = city ? countryOfCity(city) : p;
    if (f === "inperson") {
      if (city) return cities.indexOf(city) > -1;
      return cities.some(function (c) { return countryOfCity(c) === country; }) ||
        (!online && regions.indexOf(country) > -1);
    }
    return online || regions.indexOf(country) > -1;
  }

  function matchesPlaceAndFormat(r) {
    var wanted = state.formats.size ? Array.from(state.formats) : r.formats;
    return wanted.some(function (f) { return r.formats.indexOf(f) > -1 && availableIn(r, f); });
  }

  // A resource fits if it covers any part of your route: it still has something to teach you
  // and doesn't start beyond your goal. Ones that start above your current level rank lower.
  function matchesLevel(r) {
    if (state.cur === null) return true;
    var from = lv(r.levels[0]), to = lv(r.levels[1]);
    if (from > Math.max(state.cur, state.target)) return false;
    if (state.cur === LEVELS.length - 1) return to === state.cur;
    return to > state.cur || (state.target === state.cur && to >= state.cur);
  }

  function intersects(list, set) {
    if (!set.size) return true;
    return list.some(function (x) { return set.has(x); });
  }

  function score(r) {
    var to = lv(r.levels[1]);
    var s = 0;
    if (state.cur !== null) {
      var span = Math.max(1, state.target - state.cur);
      s += Math.min(1, Math.max(0, (Math.min(to, state.target) - state.cur) / span)) * 10;
      // Prefer resources pitched at your route over very broad ones.
      s -= Math.max(0, state.cur - lv(r.levels[0])) * 0.3;
      s -= Math.max(0, to - state.target) * 0.3;
      s -= Math.max(0, lv(r.levels[0]) - state.cur) * 3;
    }
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
        intersects(r.focus, state.focus) &&
        intersects(r.categories || [], state.categories) &&
        intersects(r.variants || ["nl"], state.variants) &&
        matchesPlaceAndFormat(r) &&
        matchesLevel(r);
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
    var hasRoute = state.cur !== null;
    LEVELS.forEach(function (code, i) {
      var cls = [];
      if (i >= from && i <= to) cls.push("has");
      if (hasRoute && i >= state.cur && i <= state.target) cls.push("mine");
      ol.appendChild(el("li", { class: cls.join(" "), text: code }));
    });
    if (!hasRoute) {
      return el("div", { class: "levelbar" }, [
        ol, el("span", { class: "reach partial", text: t("card.levels", { from: r.levels[0], to: r.levels[1] }) })
      ]);
    }
    var reachesGoal = to >= state.target;
    var label = reachesGoal ? t("card.reachesGoal", { level: LEVELS[state.target] }) : t("card.reaches", { level: r.levels[1] });
    if (from > state.cur) label = t("card.startsAt", { level: r.levels[0] });
    return el("div", { class: "levelbar" }, [
      ol,
      el("span", { class: "visually-hidden", text: t("card.levels", { from: r.levels[0], to: r.levels[1] }) }),
      el("span", { class: "reach" + (reachesGoal ? "" : " partial"), text: label })
    ]);
  }

  function placeText(r) {
    if (r.region === "online") return t("region.online");
    var region = regionsOf(r).map(function (x) { return t("region." + x); }).join(t("list.sep"));
    var c = r.cities || [];
    if (!c.length) return region;
    var shown = c.slice(0, 4).join(", ") + (c.length > 4 ? " +" + (c.length - 4) : "");
    return region + t("card.placeSep") + shown;
  }

  /* ---------- Logos ---------- */

  // Sites whose icon would show the platform rather than the teacher, so they get initials instead.
  var PLATFORM_HOSTS = ["youtube.com", "instagram.com", "tidycal.com", "facebook.com", "patreon.com"];

  function initials(name) {
    var words = name.replace(/\(.*?\)/g, "").split(/[\s\/&-]+/).filter(function (w) { return /^[A-Za-z0-9À-ž]/.test(w); });
    return words.slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join("") || name.charAt(0);
  }

  // A resource's own `logo`, else its website icon, else a monogram in the colour of its kind.
  function resourceLogo(r) {
    var box = el("span", { class: "logo logo-" + r.kind, "aria-hidden": "true" }, [
      el("span", { class: "logo-initials", text: initials(r.name) })
    ]);
    var src = r.logo;
    if (!src) {
      var host = "";
      try { host = new URL(r.url).hostname.replace(/^www\./, ""); } catch (e) { /* keep initials */ }
      var platform = PLATFORM_HOSTS.some(function (h) { return host === h || host.slice(-h.length - 1) === "." + h; });
      if (host && !platform) src = "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(host) + "&sz=64";
    }
    if (src) {
      var img = el("img", { src: src, alt: "", loading: "lazy", width: "40", height: "40" });
      // The icon service returns a tiny generic globe when a site has no icon; keep initials then.
      img.addEventListener("load", function () { if (img.naturalWidth > 16) box.classList.add("has-img"); });
      box.appendChild(img);
    }
    return box;
  }

  // Name the main link after the platform when it points to YouTube or Instagram.
  function mainLinkLabel(url) {
    if (/^https?:\/\/([^/]+\.)?youtube\.com\//.test(url)) return t("card.youtube");
    if (/^https?:\/\/([^/]+\.)?instagram\.com\//.test(url)) return t("card.instagram");
    return t("card.visit");
  }

  function resultItem(r) {
    var lang = state.lang;
    var meta = el("p", { class: "meta" }, [
      el("span", { text: t("kind." + r.kind) }),
      el("span", { text: placeText(r) }),
      el("span", { text: r.hours[0] === r.hours[1] ? t("card.timeExact", { n: r.hours[0] }) : t("card.timeNeeded", { min: r.hours[0], max: r.hours[1] }) })
    ]);

    var tags = el("ul", { class: "tags" });
    r.formats.forEach(function (f) { tags.appendChild(el("li", { class: "fmt", text: t("format." + f) })); });
    r.focus.forEach(function (f) { tags.appendChild(el("li", { text: t("focus." + f) })); });
    if ((r.variants || []).indexOf("be") > -1) tags.appendChild(el("li", { class: "variant", text: t("variant.be") }));

    var links = el("p", { class: "links" }, [
      el("a", { href: r.url, target: "_blank", rel: "noopener", text: mainLinkLabel(r.url) }),
      r.instagram && r.instagram !== r.url ? el("a", { href: r.instagram, target: "_blank", rel: "noopener", text: t("card.instagram") }) : null,
      r.youtube && r.youtube !== r.url ? el("a", { href: r.youtube, target: "_blank", rel: "noopener", text: t("card.youtube") }) : null,
      r.review ? el("span", { class: "unreviewed", text: t("card.unreviewed") }) : null
    ]);

    var body = el("div", null, [
      el("div", { class: "result-head" }, [
        resourceLogo(r),
        el("h3", null, [el("a", { href: r.url, target: "_blank", rel: "noopener", text: r.name })])
      ]),
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
    var noRoute = state.cur === null;
    if (noRoute) $("resultsCount").textContent = list.length === 1 ? t("results.countOneAll") : t("results.countAll", { n: list.length });
    else $("resultsCount").textContent = list.length === 1 ? t("results.countOne") : t("results.count", { n: list.length });
    $("routeBanner").hidden = !noRoute;
    var routeDone = state.cur !== null && !state.picking;
    $("routeHint").hidden = !routeDone;
    $("routeHint").textContent = routeDone ? t(list.length === 1 ? "route.countOne" : "route.count", { n: list.length }) : "";
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
      container.appendChild(multiChip(t(prefix + v), set.has(v), function () {
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
    syncMobileMode();
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

  // On a first visit, once the route is on screen, a finger slides between A0 and B1 for
  // 5 seconds and then rests on A0 until the visitor taps a level.
  function setupTapHint() {
    var hint = $("tapHint");
    if (state.cur !== null || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      if (state.cur === null) hint.hidden = false;
    }, { threshold: 0.6 });
    io.observe($("route"));
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

    $("place").addEventListener("change", function (e) { state.place = e.target.value; renderResults(); });
    $("sort").addEventListener("change", function (e) { state.sort = e.target.value; renderResults(); });

    $("clearFilters").addEventListener("click", function () {
      state.budget = Infinity; state.hours = Infinity;
      state.formats.clear(); state.focus.clear(); state.categories.clear(); state.variants.clear();
      state.place = "any";
      renderFilters(); renderResults();
    });

    setupTapHint();

    $("routeBannerBtn").addEventListener("click", function () {
      $("route").scrollIntoView({ block: "center" });
      var first = document.querySelector("#routeLine .station");
      if (first) first.focus({ preventScroll: true });
    });

    document.querySelectorAll(".js-open-filters").forEach(function (b) {
      b.addEventListener("click", function () { setFilterSheet(!$("filters").classList.contains("open")); });
    });

    setupSuggestForm();
    setupMobile();
    renderAll();
  }

  init();
})();
