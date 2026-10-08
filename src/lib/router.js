import { useEffect, useState } from 'react';

// Router sederhana berbasis hash (#/modul/if) supaya aman dihosting di GitHub Pages tanpa konfigurasi.
const parse = () => {
  const raw = window.location.hash.replace(/^#\/?/, '');
  const [path, query = ''] = raw.split('?');
  return { parts: path.split('/').filter(Boolean).map(decodeURIComponent), query: new URLSearchParams(query) };
};

export function useRoute() {
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const onChange = () => {
      setRoute(parse());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export const go = (path) => {
  window.location.hash = `#/${path}`;
};

export const href = (path) => `#/${path}`;
