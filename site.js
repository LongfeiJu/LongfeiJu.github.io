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
