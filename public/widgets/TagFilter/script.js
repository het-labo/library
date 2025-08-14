(() => {
    // --- State & helpers ---
    const S = { tags: new Set(), mode: 'AND', q: '' };
    const $ = s => document.querySelector(s);
    const $$ = s => Array.from(document.querySelectorAll(s));
    const norm = s => (s || '').split(/[,\s]+/).map(t => t.trim().toLowerCase()).filter(Boolean);
  
    const box = $('[data-filter-items]');
    const search = $('[data-filter-search]');
    const counter = $('[data-filter-count]');
  
    // Cache cards once; add new ones via MutationObserver
    const CARDS = [];
    const indexCard = el => {
      if (!el || CARDS.some(x => x.el === el)) return;
      CARDS.push({ el, tags: new Set(norm(el.getAttribute('data-tags'))), text: (el.textContent || '').toLowerCase() });
    };
    $$('[data-filter-item]').forEach(indexCard);
  
    // --- UI paint + apply filters ---
    const paintButtons = () => {
      $$('[data-filter]').forEach(btn => {
        const v = (btn.getAttribute('data-filter') || '').toLowerCase();
        const on = S.tags.has(v);
        btn.setAttribute('aria-pressed', String(on));
        btn.classList.toggle('is-active', on);
      });
      const modeBtn = $('[data-filter-mode]');
      if (modeBtn) {
        modeBtn.textContent = S.mode;
        modeBtn.setAttribute('aria-pressed', String(S.mode === 'OR'));
      }
      if (search && search.value !== S.q) search.value = S.q;
    };
  
    const apply = (sync = true) => {
      const need = [...S.tags];
      let visible = 0;
  
      CARDS.forEach(c => {
        const tagOK = !need.length ? true : (S.mode === 'AND' ? need.every(t => c.tags.has(t)) : need.some(t => c.tags.has(t)));
        const txtOK = !S.q || c.text.includes(S.q);
        const show = tagOK && txtOK;
        c.el.hidden = !show;
        if (show) visible++;
      });
  
      if (counter) counter.textContent = `${visible} result${visible === 1 ? '' : 's'}`;
      paintButtons();
      if (sync) syncURL();
    };
  
    // --- URL sync (persist/restore) ---
    const syncURL = () => {
      const p = new URLSearchParams(location.search);
      const tags = [...S.tags].join(',');
      tags ? p.set('tags', tags) : p.delete('tags');
      S.mode !== 'AND' ? p.set('mode', S.mode) : p.delete('mode');
      S.q ? p.set('q', S.q) : p.delete('q');
      const url = location.pathname + (p.toString() ? `?${p}` : '') + location.hash;
      history.replaceState({ ...S }, '', url);
    };
  
    const fromURL = (qs = location.search) => {
      const p = new URLSearchParams(qs);
      S.tags = new Set(norm(p.get('tags')));
      S.mode = ((p.get('mode') || '').toUpperCase() === 'OR') ? 'OR' : 'AND';
      S.q = (p.get('q') || '').trim().toLowerCase();
      apply(false); // paint from state, don't loop sync
      syncURL();    // normalize URL format (order/casing)
    };
  
    window.addEventListener('popstate', () => fromURL(location.search));
  
    // --- Events: filter buttons, mode, search ---
    document.addEventListener('click', e => {
      const btn = e.target.closest && e.target.closest('[data-filter], [data-filter-mode]');
      if (!btn) return;
  
      if (btn.hasAttribute('data-filter')) {
        e.preventDefault();
        const v = (btn.getAttribute('data-filter') || '').toLowerCase();
        v === 'all' ? S.tags.clear() : (S.tags.has(v) ? S.tags.delete(v) : S.tags.add(v));
        apply();
      } else if (btn.hasAttribute('data-filter-mode')) {
        e.preventDefault();
        S.mode = S.mode === 'AND' ? 'OR' : 'AND';
        apply();
      }
    });
  
    let T;
    search && search.addEventListener('input', () => {
      clearTimeout(T);
      T = setTimeout(() => { S.q = (search.value || '').trim().toLowerCase(); apply(); }, 100);
    });
  
    // --- Dynamic cards: observe container ---
    if (box) {
      new MutationObserver(muts => {
        const added = [];
        muts.forEach(m => m.addedNodes.forEach(n => {
          if (n.nodeType !== 1) return;
          if (n.matches && n.matches('[data-filter-item]')) added.push(n);
          n.querySelectorAll && added.push(...n.querySelectorAll('[data-filter-item]'));
        }));
        if (added.length) { added.forEach(indexCard); apply(false); }
      }).observe(box, { childList: true, subtree: true });
    }
  
    // Initial load from URL
    fromURL(location.search);
  })();
  