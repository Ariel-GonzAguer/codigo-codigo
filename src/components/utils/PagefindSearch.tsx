import React, { useEffect } from 'react';

declare global {
  interface Window { PagefindUI?: any }
}

export default function PagefindSearch(): React.ReactElement {
  const PLACEHOLDER_TEXT = 'Buscar en el sitio...';
  const STYLE_ID = 'pagefind-overrides-style';

  function injectStyleOnce() {
    if (typeof document === 'undefined') return;
    if (document.getElementById(STYLE_ID)) return;
    const css = `
      /* Force white text and dark background for Pagefind UI inside #search */
      #search, #search * , #search .pagefind-ui, #search .pagefind-ui * {
        color: #ffffff !important;
        background: #000000 !important;
      }
      #search a, #search a * , #search .pagefind-ui__result-link, #search .pagefind-ui__result-link * {
        color: #ffffff !important;
        opacity: 1 !important;
        text-decoration: none !important;
      }
      /* placeholder rules (include vendor prefixes and target inputs inside Pagefind UI) */
      #search ::placeholder, #search input::placeholder, #search textarea::placeholder,
      #search .pagefind-ui ::placeholder, #search .pagefind-ui input::placeholder {
        color: #ffffff !important;
        opacity: 1 !important;
      }
      /* vendor-prefixed placeholders */
      #search ::-webkit-input-placeholder, #search input::-webkit-input-placeholder { color: #ffffff !important; }
      #search :-ms-input-placeholder, #search input:-ms-input-placeholder { color: #ffffff !important; }
      #search ::-ms-input-placeholder, #search input::-ms-input-placeholder { color: #ffffff !important; }
      #search code, #search pre { color: #ffffff !important; background: #000000 !important; }
      #search svg { fill: #ffffff !important; stroke: #ffffff !important; }
    `;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Add Pagefind CSS if missing
    if (!document.querySelector('link[href="/pagefind/pagefind-ui.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = '/pagefind/pagefind-ui.css';
      document.head.appendChild(l);
    }

    // Inject overrides to force white text inside #search
    injectStyleOnce();

    function initPagefind(): boolean {
      const PagefindUI = (window as any).PagefindUI;
      if (!PagefindUI) return false;
      try {
        // Render Pagefind UI inside #search
        // showSubResults keeps previous behavior; translations keep the placeholder text
        // eslint-disable-next-line no-new
        new PagefindUI({ element: '#search', showSubResults: true, translations: { placeholder: PLACEHOLDER_TEXT, zeroResults: 'No se encontraron resultados para [SEARCH_TERM]' } });
        return true;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error inicializando Pagefind UI', e);
        return false;
      }
    }

    if (!initPagefind()) {
      if (!document.querySelector('script[data-pagefind]')) {
        const s = document.createElement('script');
        s.setAttribute('data-pagefind', '1');
        s.src = '/pagefind/pagefind-ui.js';
        s.defer = true;
        s.onload = () => {
          initPagefind();
        };
        s.onerror = (err) => {
          // eslint-disable-next-line no-console
          console.error('Error cargando pagefind-ui.js', err);
        };
        document.head.appendChild(s);
      }
    }
  }, []);

  return (
    <div id="search" className="pagefind-container max-w-lg mx-auto p-4 rounded-2xl shadow-lg bg-black text-white" role="search" aria-label={PLACEHOLDER_TEXT}>
      <noscript>
        <div className="max-w-lg mx-auto p-4 rounded-2xl shadow-lg bg-black text-white">
          <form action="/search" method="get">
            <label htmlFor="q" className="sr-only">{PLACEHOLDER_TEXT}</label>
            <input id="q" name="q" type="search" placeholder={PLACEHOLDER_TEXT} className="w-full px-3 py-2 bg-black text-white placeholder-neutral-200 border border-neutral-700 rounded" />
          </form>
        </div>
      </noscript>
    </div>
  );
}
