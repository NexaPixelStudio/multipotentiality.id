import React, { useMemo } from 'react';
import Sheet from './Sheet.jsx';
import { createContext } from '../engine/evaluator.js';
import { parseAddr } from '../engine/refs.js';
import { Rich, localizeFormula } from '../lib/text.jsx';
import Icon from './Icon.jsx';

function Callout({ icon, title, tone, children }) {
  const tones = {
    brand: ['border-brand/30 bg-brand-soft', 'bg-brand/15 text-brand'],
    info: ['border-info/30 bg-info-soft', 'bg-info/15 text-info'],
    warn: ['border-warn/40 bg-warn-soft', 'bg-warn/15 text-warn']
  };
  return (
    <aside className={`flex gap-3 rounded-2xl border p-4 transition-shadow hover:shadow-soft ${tones[tone][0]}`}>
      <span className={`grid h-9 w-9 flex-none place-items-center rounded-xl ${tones[tone][1]}`} aria-hidden="true"><Icon name={icon} size={20} /></span>
      <div className="min-w-0">
        <p className="mb-0.5 text-sm font-bold uppercase tracking-wide text-ink/70">{title}</p>
        <div className="text-[0.98rem] leading-relaxed text-ink">{children}</div>
      </div>
    </aside>
  );
}

export function DemoSheet({ demo, locale }) {
  const { ctx, def, cell, shown } = useMemo(() => {
    const d = { name: 'Contoh', rows: demo.rows, fmt: demo.fmt || {} };
    const c = createContext([d], { locale });
    const p = parseAddr(demo.cell);
    c.setCell('Contoh', p.r, p.c, demo.formula);
    return { ctx: c, def: d, cell: p, shown: localizeFormula(demo.formula, locale) };
  }, [demo, locale]);

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line bg-sunken px-3 py-2 text-sm">
        <span className="rounded bg-surface px-2 py-0.5 font-semibold text-muted">{demo.cell}</span>
        <span className="font-serif italic text-brand" aria-hidden="true">fx</span>
        <code className="formula-input min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-ink">{shown}</code>
      </div>
      <Sheet def={def} ctx={ctx} locale={locale} target={{ sheet: 'Contoh', r: cell.r, c: cell.c }} minCols={3} headerStyle="auto" />
      {demo.caption && <figcaption className="border-t border-line px-4 py-3 text-sm text-muted"><Rich text={demo.caption} locale={locale} /></figcaption>}
    </figure>
  );
}

export function SyntaxBlock({ block, locale }) {
  return (
    <div className="rounded-2xl border border-line bg-surface">
      <div className="overflow-x-auto border-b border-line bg-sunken px-4 py-3">
        <code className="formula-input whitespace-nowrap font-semibold text-brand">{localizeFormula(block.formula, locale)}</code>
      </div>
      <dl className="divide-y divide-line">
        {block.parts.map(([token, meaning]) => (
          <div key={token} className="grid gap-1 px-4 py-2.5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-4">
            <dt className="font-mono text-sm font-semibold text-ink break-words">{localizeFormula(token, locale)}</dt>
            <dd className="text-sm text-muted"><Rich text={meaning} locale={locale} /></dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Blocks({ blocks, locale }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i} className="leading-relaxed"><Rich text={b.text} locale={locale} /></p>;
          case 'analogy':
            return <Callout key={i} icon="bulb" title="Bayangkan begini" tone="brand"><Rich text={b.text} locale={locale} /></Callout>;
          case 'tip':
            return <Callout key={i} icon="sparkles" title="Tips" tone="info"><Rich text={b.text} locale={locale} /></Callout>;
          case 'warn':
            return <Callout key={i} icon="alert" title="Hati-hati" tone="warn"><Rich text={b.text} locale={locale} /></Callout>;
          case 'steps':
            return (
              <ul key={i} className="space-y-2.5">
                {b.items.map((it, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                    <span><Rich text={it} locale={locale} /></span>
                  </li>
                ))}
              </ul>
            );
          case 'syntax':
            return <SyntaxBlock key={i} block={b} locale={locale} />;
          case 'demo':
            return <DemoSheet key={i} demo={b} locale={locale} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
