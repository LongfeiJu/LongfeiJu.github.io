/* Shared helpers: language toggle (EN / 中文) and safe rendering of bilingual content. */
(function () {
  var KEY = 'lj-lang', lang = 'en';
  try { lang = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  var nodes = new Set(), subs = [];
  function apply() {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    nodes.forEach(function (n) {
      if (!n.isConnected) { nodes.delete(n); return; }
      n.innerHTML = lang === 'zh' ? n.getAttribute('data-zh') : n.getAttribute('data-en');
    });
    document.querySelectorAll('.langbtn').forEach(function (b) {
      b.textContent = lang === 'zh' ? 'EN' : '中文';
      b.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });
    subs.forEach(function (f) { try { f(lang); } catch (e) {} });
  }
  function scan(root) {
    (root || document).querySelectorAll('[data-zh]').forEach(function (n) {
      if (!nodes.has(n)) { n.setAttribute('data-en', n.innerHTML); nodes.add(n); }
    });
    apply();
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.langbtn'); if (!b) return;
    lang = lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem(KEY, lang); } catch (e2) {}
    apply();
  });
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  /* T(field) -> "<tag data-zh=...>English</tag>"; field is {en, zh}; Chinese falls back to English. */
  function T(o, tag, attrs) {
    o = o || {}; tag = tag || 'span';
    var en = o.en || '', zh = o.zh || o.en || '';
    return '<' + tag + (attrs ? ' ' + attrs : '') + ' data-zh="' + esc(esc(zh)) + '">' + esc(en) + '</' + tag + '>';
  }
  function has(o) { return !!(o && (o.en || o.zh)); }
  function load(path) {
    return fetch(path, { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(path); return r.json(); });
  }
  window.__lang = { get: function () { return lang; }, subs: subs, scan: scan, apply: apply };
  window.site = { T: T, esc: esc, has: has, load: load, scan: scan, lang: function () { return lang; }, onLang: function (f) { subs.push(f); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { scan(); }); else scan();
})();

/* Commodity flows: shared drawings, project cards (Projects page) and the rotating banner (home page). */
(function () {
  var T = site.T, esc = site.esc;
  var ICON = {
    corn: '<svg viewBox="0 0 240 120" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M40 60c30-26 110-34 150-12 10 6 10 18 0 24-40 22-120 14-150-12z"/><path d="M60 50v20M75 45v30M90 42v36M105 40v40M120 40v40M135 41v38M150 43v34M165 46v28M178 50v20"/><path d="M48 54c40-6 100-6 140 2M48 66c40 6 100 6 140-2"/><path d="M40 60 18 52M40 60 16 66M40 60c-6-14-2-26 8-32"/></svg>',
    oil: '<svg viewBox="0 0 240 120" fill="none" stroke="currentColor" stroke-width="1.3"><ellipse cx="120" cy="26" rx="34" ry="9"/><path d="M86 26v68c0 5 15 9 34 9s34-4 34-9V26"/><path d="M86 48c0 5 15 9 34 9s34-4 34-9M86 72c0 5 15 9 34 9s34-4 34-9"/><path d="M24 98h60M156 98h60M40 98V78l14-10v30M190 98V70h10v28"/></svg>',
    copper: '<svg viewBox="0 0 240 120" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M70 92l40-14 60 10-40 16z"/><path d="M70 80l40-14 60 10-40 16zM70 80v12M130 92v12M170 76v12"/><path d="M70 68l40-14 60 10-40 16zM70 68v12M130 80v12M170 64v12"/><path d="M30 40l18-14 18 14M48 26v-8M180 30h40M200 30v-12"/></svg>',
    generic: '<svg viewBox="0 0 240 120" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="70" y="24" width="100" height="72"/><path d="M70 72l30-24 26 20 18-14 26 22"/><circle cx="148" cy="44" r="8"/></svg>'
  };
  function isLive(p) { return (p.status || '').toLowerCase() === 'live' && !!p.link; }
  site.ICON = ICON;
  site.projectCard = function (p) {
    var live = isLive(p), tag = live ? 'a' : 'div', href = live ? ' href="' + esc(p.link) + '"' : '';
    var chip = live ? '<span class="chip live" data-zh="已上线">Live</span><span class="go" aria-hidden="true" data-zh="打开 →">Open →</span>'
                    : '<span class="chip soon" data-zh="筹备中">Planned</span>';
    return '<' + tag + ' class="proj' + (live ? '' : ' soon') + '"' + href + '><div class="art" aria-hidden="true">' + (ICON[p.icon] || ICON.generic) + '</div>'
      + '<div class="body">' + T(p.title, 'h3') + T(p.description, 'p') + '<div class="meta">' + chip + '</div></div></' + tag + '>';
  };
  /* Rotating banner: loops, arrow buttons at both ends, dots, auto-advance (paused on hover/focus, off for reduced motion), swipe. */
  site.flowsBanner = function (root, list) {
    if (!root || !list.length) return;
    var track = root.querySelector('.flows-track'), dots = root.querySelector('.flows-dots');
    var n = list.length, idx = 0, timer = null, paused = false;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.innerHTML = list.map(function (p, i) {
      var live = isLive(p);
      return '<article class="flow-slide" role="group" aria-roledescription="slide" aria-label="' + (i + 1) + ' / ' + n + '">'
        + '<div class="flow-text"><div class="eyebrow flow-count">' + String(i + 1).padStart(2, '0') + ' / ' + String(n).padStart(2, '0') + '</div>'
        + T(p.title, 'h3') + T(p.description, 'p')
        + '<div class="flow-cta">' + (live ? '<a class="btn primary" href="' + esc(p.link) + '" data-zh="打开 →">Open →</a>' : '<span class="chip soon" data-zh="筹备中">Planned</span>') + '</div></div>'
        + '<div class="flow-art' + (live ? '' : ' soon') + '" aria-hidden="true">' + (ICON[p.icon] || ICON.generic) + '</div></article>';
    }).join('');
    dots.innerHTML = list.map(function (p, i) { return '<button type="button" class="flows-dot" aria-label="Show ' + esc((p.title && p.title.en) || ('slide ' + (i + 1))) + '"></button>'; }).join('');
    var slides = [].slice.call(track.children), dotEls = [].slice.call(dots.children);
    function go(i) {
      idx = (i + n) % n;
      track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      slides.forEach(function (s, k) { s.setAttribute('aria-hidden', k === idx ? 'false' : 'true'); s.querySelectorAll('a,button').forEach(function (a) { a.tabIndex = k === idx ? 0 : -1; }); });
      dotEls.forEach(function (d, k) { d.setAttribute('aria-current', k === idx ? 'true' : 'false'); });
    }
    function restart() { clearInterval(timer); if (!reduce && n > 1) timer = setInterval(function () { if (!paused && !document.hidden) go(idx + 1); }, 6000); }
    root.querySelector('.flows-nav.prev').onclick = function () { go(idx - 1); restart(); };
    root.querySelector('.flows-nav.next').onclick = function () { go(idx + 1); restart(); };
    dotEls.forEach(function (d, k) { d.onclick = function () { go(k); restart(); }; });
    root.addEventListener('mouseenter', function () { paused = true; });
    root.addEventListener('mouseleave', function () { paused = false; });
    root.addEventListener('focusin', function () { paused = true; });
    root.addEventListener('focusout', function () { paused = false; });
    root.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { go(idx - 1); restart(); } if (e.key === 'ArrowRight') { go(idx + 1); restart(); } });
    var x0 = null;
    root.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') x0 = e.clientX; });
    root.addEventListener('pointerup', function (e) { if (x0 === null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) { go(idx + (dx < 0 ? 1 : -1)); restart(); } });
    if (n < 2) root.classList.add('single');
    go(0); restart();
  };
})();
