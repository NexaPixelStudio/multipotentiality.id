import React from 'react';

// Ikon garis (24x24) buatan sendiri, mengikuti warna teks di sekitarnya (currentColor).
// Dipakai sebagai pengganti emoji supaya tampilannya konsisten di semua perangkat dan tema.
const ICONS = {
  // navigasi dan tema
  book: <><path d="M4 19.5V5a2.5 2.5 0 0 1 2.5-2.5H20v16H6.5a2.5 2.5 0 0 0 0 5H20v-3" /></>,
  'book-open': <><path d="M2.5 4.5h6A3.5 3.5 0 0 1 12 8v13a2.5 2.5 0 0 0-2.5-2.5h-7z" /><path d="M21.5 4.5h-6A3.5 3.5 0 0 0 12 8v13a2.5 2.5 0 0 1 2.5-2.5h7z" /></>,
  flask: <><path d="M9 3h6M10 3v6.2L4.6 18.6A2 2 0 0 0 6.3 21.5h11.4a2 2 0 0 0 1.7-2.9L14 9.2V3" /><path d="M7.5 15h9" /></>,
  moon: <path d="M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.7 6.7 0 0 0 9.7 9.7z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" /></>,
  contrast: <><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></>,
  star: <path d="M12 2.8l2.8 5.8 6.4.9-4.6 4.5 1.1 6.3L12 17.3 6.3 20.3l1.1-6.3L2.8 9.5l6.4-.9z" />,
  flame: <path d="M12 21.5c3.9 0 6.5-2.6 6.5-6.2 0-2.8-1.6-4.7-3.1-6.3-.5 1.4-1.2 2.2-2.4 2.8.2-3.2-1.2-5.8-3.6-8-.2 2.8-1.7 4.7-3 6.5C5.6 11.7 5.5 13.4 5.5 15.3c0 3.6 2.6 6.2 6.5 6.2z" />,
  // aksi
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  'check-circle': <><circle cx="12" cy="12" r="9.2" /><path d="M8 12.4l3 3 5-6" /></>,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  equal: <path d="M5.5 9h13M5.5 15h13" />,
  'arrow-right': <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  'arrow-left': <path d="M19.5 12h-15M10.5 6l-6 6 6 6" />,
  'arrow-down': <path d="M12 4.5v15M6 13.5l6 6 6-6" />,
  rotate: <><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3.5 8.5" /><path d="M3.5 3.5v5h5" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  pencil: <><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z" /><path d="M14.5 6.5l3 3" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.2 1.8" /></>,
  'file-text': <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></>,
  link: <><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></>,
  message: <path d="M4 4.5h16v12H9.5L4 21z" />,
  bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.7.6 1 1.4 1 2.1h5c0-.7.3-1.5 1-2.1A6 6 0 0 0 12 3z" /></>,
  sparkles: <><path d="M11 3l1.8 5.2L18 10l-5.2 1.8L11 17l-1.8-5.2L4 10l5.2-1.8z" /><path d="M19 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></>,
  alert: <><path d="M12 3.5L2.5 20h19z" /><path d="M12 10v4.5M12 17.5v.01" /></>,
  help: <><circle cx="12" cy="12" r="9.2" /><path d="M9.5 9.3a2.6 2.6 0 0 1 5 1c0 1.7-2.5 2.2-2.5 3.7M12 17.3v.01" /></>,
  compass: <><circle cx="12" cy="12" r="9.2" /><path d="M15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5z" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.5 14L7 21l5-3 5 3-1.5-7" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M20.5 20.5L16 16" /></>,
  // tingkat
  sprout: <><path d="M12 21v-8" /><path d="M12 13c0-3.5-2.5-6-6.5-6 0 3.5 2.5 6 6.5 6z" /><path d="M12 11c0-3 2-5.5 6-5.5 0 3-2 5.5-6 5.5z" /></>,
  leaf: <><path d="M5 20C5 11 10 5 20 4c0 10-6 16-15 16z" /><path d="M5 20c3-5 6-8 10-10" /></>,
  tree: <><path d="M12 21v-4.5" /><path d="M12 3L6.5 10h3L5.5 16.5h13L14.5 10h3z" /></>,
  rocket: <><path d="M12 2.5c3.5 2.5 5 6 5 10l-2.5 3h-5L7 12.5c0-4 1.5-7.5 5-10z" /><circle cx="12" cy="10" r="1.8" /><path d="M9.5 15.5L7 21l5-2.5M14.5 15.5L17 21l-5-2.5" /></>,
  trophy: <><path d="M8 4h8v6a4 4 0 0 1-8 0z" /><path d="M8 6H4.5v1.5A3.5 3.5 0 0 0 8 11M16 6h3.5v1.5A3.5 3.5 0 0 1 16 11M12 14v4M10 18h4M8.5 21h7" /></>,
  // modul
  table: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 10h18M3 15h18M9 4v16" /></>,
  calculator: <><rect x="5" y="2.5" width="14" height="19" rx="2.5" /><path d="M8.5 7h7M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01" /></>,
  sigma: <path d="M18 5H7l6 7-6 7h11" />,
  copy: <><rect x="8.5" y="8.5" width="12" height="12" rx="2.5" /><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /></>,
  keyboard: <><rect x="2.5" y="5.5" width="19" height="13" rx="2.5" /><path d="M6.5 10h.01M10 10h.01M14 10h.01M17.5 10h.01M7.5 14.5h9" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  split: <><path d="M16 3h5v5M8 3H3v5M12 22v-8.3a4 4 0 0 0-1.2-2.9L3 3M15 9l6-6" /></>,
  'git-branch': <><circle cx="6" cy="5" r="2.5" /><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="9" r="2.5" /><path d="M6 7.5v9M18 11.5a5 5 0 0 1-5 5H8.5" /></>,
  layers: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 12.5l9 5 9-5" /><path d="M3 17l9 5 9-5" /></>,
  filter: <path d="M3 5h18l-7 8.5V20l-4-2v-4.5z" />,
  type: <path d="M5 6.5V4.5h14v2M12 4.5V20M9 20h6" />,
  crosshair: <><circle cx="12" cy="12" r="8" /><path d="M12 2v5M12 17v5M2 12h5M17 12h5" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="16" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  scissors: <><circle cx="6" cy="6.5" r="2.7" /><circle cx="6" cy="17.5" r="2.7" /><path d="M8.2 8.2L20 19M8.2 15.8L20 5" /></>,
  'bar-chart': <path d="M4 20v-8M10 20V5M16 20v-5M21.5 20h-19" />,
  zap: <path d="M13 2.5L4.5 13.5H11l-1 8 8.5-11H12z" />,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
  waves: <path d="M2 8q2.5-3 5 0t5 0 5 0 5 0M2 14q2.5-3 5 0t5 0 5 0 5 0M2 20q2.5-3 5 0t5 0 5 0 5 0" />,
  list: <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />,
  coins: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
  map: <path d="M9 4L3 6.5V20l6-2.5 6 2.5 6-2.5V4l-6 2.5zM9 4v13.5M15 6.5V20" />,
  'trending-up': <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><circle cx="17" cy="9" r="2.8" /><path d="M17.5 14.2c2.6.3 4.5 2.2 4.5 5.3" /></>,
  package: <><path d="M12 2.5l8.5 4.5v10L12 21.5 3.5 17V7z" /><path d="M3.5 7L12 11.5 20.5 7M12 11.5v10" /></>,
  sliders: <><path d="M4 7h9M19 7h1M4 17h1M11 17h9" /><circle cx="16" cy="7" r="2.5" /><circle cx="8" cy="17" r="2.5" /></>
};

export const ICON_NAMES = Object.keys(ICONS);

export default function Icon({ name, size = 20, strokeWidth = 1.9, className = '', ...rest }) {
  const body = ICONS[name];
  if (!body) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={`flex-none ${className}`}
      {...rest}
    >
      {body}
    </svg>
  );
}

// Lencana ikon: ikon di dalam kotak berwarna sesuai level (warna diatur lewat kelas tone-* di index.css).
export function IconBadge({ name, size = 22, tone = 'brand', className = '' }) {
  return (
    <span className={`icon-badge tone-${tone} grid flex-none place-items-center rounded-2xl ${className}`} aria-hidden="true">
      <Icon name={name} size={size} />
    </span>
  );
}
