import { useEffect, useMemo, useRef, useState } from 'react';

function getFragment(value = '', cursor = 0) {
  const before = value.slice(0, cursor);
  const match = before.match(/(?:^|[=+\-*/^&(,;])\s*([A-Za-z.]{1,})$/);
  if (!match) return null;

  const fragment = match[1];
  const end = cursor;
  const start = before.length - fragment.length;
  return { fragment, start, end };
}

function dedupeOptions(options = []) {
  const seen = new Set();
  return options.filter((item) => {
    const key = item.name?.toUpperCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export default function FormulaBar({
  activeCell,
  selectedRange,
  value,
  onChange,
  onSubmit,
  separatorMode,
  formulaOptions = [],
  onCursorChange,
  onFocusChange,
  cursorPosition = 0,
  focusTick = 0
}) {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const cursor = Math.min(cursorPosition ?? value.length, value.length);
  const fragmentInfo = useMemo(() => getFragment(value, cursor), [value, cursor]);

  const suggestions = useMemo(() => {
    if (!fragmentInfo?.fragment) return [];
    const fragment = fragmentInfo.fragment.toUpperCase();
    if (fragment.length < 1) return [];

    const cleanOptions = dedupeOptions(formulaOptions);
    const startsWith = cleanOptions.filter((item) => item.name.toUpperCase().startsWith(fragment));
    const includes = cleanOptions.filter((item) => !item.name.toUpperCase().startsWith(fragment) && item.name.toUpperCase().includes(fragment));
    return [...startsWith, ...includes].slice(0, 8);
  }, [formulaOptions, fragmentInfo]);

  useEffect(() => {
    setActiveIndex(0);
    setOpen(suggestions.length > 0);
  }, [suggestions.length, fragmentInfo?.fragment]);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
    const nextCursor = Math.min(cursorPosition ?? value.length, value.length);
    requestAnimationFrame(() => {
      inputRef.current?.setSelectionRange(nextCursor, nextCursor);
    });
  }, [focusTick]);

  const reportCursor = (target) => {
    const nextCursor = target.selectionStart ?? target.value.length;
    onCursorChange?.(nextCursor);
  };

  const updateValue = (nextValue, nextCursor = nextValue.length) => {
    onChange(nextValue);
    onCursorChange?.(nextCursor);
    requestAnimationFrame(() => {
      inputRef.current?.setSelectionRange(nextCursor, nextCursor);
    });
  };

  const insertSuggestion = (option) => {
    if (!option || !fragmentInfo) return;
    const current = value || '';
    const before = current.slice(0, fragmentInfo.start);
    const after = current.slice(fragmentInfo.end);
    const insertion = `${option.name}(`;
    const nextValue = `${before}${insertion}${after}`;
    updateValue(nextValue, before.length + insertion.length);
    setOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Tab' && suggestions.length) {
      event.preventDefault();
      insertSuggestion(suggestions[activeIndex] || suggestions[0]);
      return;
    }

    if (event.key === 'ArrowDown' && suggestions.length) {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % suggestions.length);
      return;
    }

    if (event.key === 'ArrowUp' && suggestions.length) {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + suggestions.length) % suggestions.length);
      return;
    }

    if (event.key === 'Escape') {
      setOpen(false);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit?.();
    }
  };

  const placeholder = separatorMode === 'id'
    ? 'Ketik = lalu nama rumus. Contoh: =SUM( lalu drag range di tabel'
    : 'Type = then formula name. Example: =SUM( then drag a table range';

  return (
    <div className="rounded-[1.5rem] border border-coach-line bg-white p-3 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <div className="rounded-xl border border-coach-line bg-coach-beige px-3 py-2 text-sm font-black text-coach-green dark:border-white/10 dark:bg-black/20 dark:text-emerald-200">
            {activeCell || 'A1'}
          </div>
          <div className="rounded-xl bg-coach-ink px-3 py-2 text-sm font-black text-white dark:bg-white dark:text-coach-ink">fx</div>
        </div>

        <div className="relative flex-1">
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
              reportCursor(event.target);
            }}
            onClick={(event) => reportCursor(event.target)}
            onKeyUp={(event) => reportCursor(event.target)}
            onSelect={(event) => reportCursor(event.target)}
            onFocus={(event) => {
              onFocusChange?.(true);
              reportCursor(event.target);
            }}
            onBlur={() => onFocusChange?.(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            spellCheck="false"
            autoComplete="off"
            className="min-h-[46px] w-full rounded-xl border border-coach-line bg-coach-beige px-4 font-mono text-sm font-semibold outline-none transition focus:border-coach-green focus:bg-white focus:ring-2 focus:ring-coach-green/12 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/30"
          />

          {open && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-40 overflow-hidden rounded-2xl border border-coach-green/20 bg-white shadow-[0_18px_40px_rgba(33,115,70,0.16)] dark:border-white/10 dark:bg-[#182018]">
              <div className="border-b border-coach-line bg-coach-greenSoft px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-coach-green dark:border-white/10 dark:bg-emerald-400/10 dark:text-emerald-200">
                Tekan Tab untuk pakai rumus
              </div>
              {suggestions.map((item, index) => (
                <button
                  key={`${item.name}-${item.category}-${index}`}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => insertSuggestion(item)}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition ${index === activeIndex ? 'bg-coach-green text-white' : 'hover:bg-coach-greenSoft dark:hover:bg-white/8'}`}
                >
                  <span className="font-mono text-sm font-black">{item.name}</span>
                  <span className={`truncate text-xs font-bold ${index === activeIndex ? 'text-white/70' : 'text-black/45 dark:text-white/45'}`}>{item.displayCategory || item.category}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-black/45 dark:text-white/45">
        <span>Awali dengan <span className="font-mono font-black text-coach-green dark:text-emerald-200">=</span>.</span>
        <span>Mode: {separatorMode === 'id' ? 'Excel Indonesia pakai titik koma (;)' : 'Excel English pakai koma (,)' }.</span>
        <span>Enter untuk cek jawaban.</span>
        {selectedRange && (
          <span className="rounded-full bg-coach-greenSoft px-2 py-1 font-mono font-black text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
            Range: {selectedRange}
          </span>
        )}
      </div>
    </div>
  );
}
