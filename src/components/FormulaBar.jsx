import { useEffect, useMemo, useRef, useState } from 'react';
import { autoCloseFormula } from '../utils/formulaEngine.js';

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

function findActiveFunction(value = '', cursor = 0) {
  const before = value.slice(0, cursor);
  let depth = 0;

  for (let index = before.length - 1; index >= 0; index -= 1) {
    const char = before[index];

    if (char === ')') {
      depth += 1;
      continue;
    }

    if (char === '(') {
      if (depth > 0) {
        depth -= 1;
        continue;
      }

      const prefix = before.slice(0, index);
      const match = prefix.match(/([A-Za-z.][A-Za-z0-9._]*)\s*$/);
      if (!match) return null;

      const functionName = match[1].toUpperCase();
      const argsText = before.slice(index + 1);
      let nested = 0;
      let argIndex = 0;

      for (const item of argsText) {
        if (item === '(') nested += 1;
        if (item === ')') nested = Math.max(0, nested - 1);
        if ((item === ',' || item === ';') && nested === 0) argIndex += 1;
      }

      return {
        name: functionName,
        argIndex,
        openIndex: index
      };
    }
  }

  return null;
}

function splitTopLevel(value = '') {
  const parts = [];
  let current = '';
  let parenDepth = 0;
  let bracketDepth = 0;

  for (const char of value) {
    if (char === '(') parenDepth += 1;
    if (char === ')') parenDepth = Math.max(0, parenDepth - 1);
    if (char === '[') bracketDepth += 1;
    if (char === ']') bracketDepth = Math.max(0, bracketDepth - 1);

    if (char === ',' && parenDepth === 0 && bracketDepth === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function getSyntaxParts(option, separatorMode = 'id') {
  const rawSyntax = option?.syntax || `${option?.name || 'FORMULA'}(argument1, [argument2], ...)`;
  const openIndex = rawSyntax.indexOf('(');
  const closeIndex = rawSyntax.lastIndexOf(')');
  const displayName = option?.name || rawSyntax.slice(0, openIndex) || 'FORMULA';
  const separator = separatorMode === 'id' ? '; ' : ', ';

  if (openIndex === -1 || closeIndex === -1 || closeIndex <= openIndex) {
    return {
      name: displayName,
      args: ['argument1', '[argument2]', '...'],
      separator
    };
  }

  const args = splitTopLevel(rawSyntax.slice(openIndex + 1, closeIndex));

  return {
    name: rawSyntax.slice(0, openIndex).trim() || displayName,
    args: args.length ? args : ['argument1', '[argument2]', '...'],
    separator
  };
}

function SignatureTooltip({ signature }) {
  if (!signature) return null;

  const activeArg = Math.min(signature.argIndex, signature.args.length - 1);

  return (
    <div className="absolute left-2 top-[calc(100%+6px)] z-30 max-w-[min(680px,calc(100vw-3rem))] rounded-md border border-black/15 bg-white px-3 py-2 text-left font-mono text-[11px] font-semibold text-black shadow-[0_10px_24px_rgba(0,0,0,0.14)] dark:border-white/15 dark:bg-[#111A14] dark:text-white sm:text-xs">
      <span className="font-black text-coach-green dark:text-emerald-200">{signature.name}</span>
      <span>(</span>
      {signature.args.map((arg, index) => (
        <span key={`${signature.name}-${arg}-${index}`}>
          {index > 0 && <span className="text-black/35 dark:text-white/35">{signature.separator}</span>}
          <span className={index === activeArg ? 'rounded bg-coach-greenSoft px-1 py-0.5 font-black text-coach-green dark:bg-emerald-400/15 dark:text-emerald-200' : 'text-black/70 dark:text-white/70'}>
            {arg}
          </span>
        </span>
      ))}
      <span>)</span>
    </div>
  );
}

function QuestionValuePanel({ values = [], onInsert }) {
  if (!values.length) return null;

  return (
    <section className="rounded-2xl border border-coach-green/20 bg-coach-greenSoft/80 px-3 py-3 dark:border-emerald-400/20 dark:bg-emerald-400/10">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="shrink-0">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-coach-green dark:text-emerald-200">Nilai dari soal</p>
          <p className="mt-1 text-[11px] font-semibold leading-4 text-black/45 dark:text-white/45">Klik value yang mau dimasukin ke rumus.</p>
        </div>

        <div className="flex flex-1 flex-wrap gap-2 lg:justify-end">
          {values.map((item, index) => (
            <button
              key={`${item.role}-${item.insert}-${index}`}
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => onInsert?.(item)}
              title={item.note || item.insert}
              className="group flex min-h-[44px] min-w-[132px] items-center justify-between gap-3 rounded-xl border border-coach-green/20 bg-white px-3 py-2 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-coach-green hover:shadow-md dark:border-emerald-400/15 dark:bg-black/20"
            >
              <span className="min-w-0">
                <span className="block truncate font-mono text-sm font-black text-coach-green dark:text-emerald-200">{item.label}</span>
                {item.note && <span className="mt-0.5 block truncate text-[11px] font-semibold text-black/45 dark:text-white/45">{item.note}</span>}
              </span>
              <span className="shrink-0 rounded-full bg-coach-greenSoft px-2 py-1 text-[9px] font-black uppercase tracking-[0.08em] text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
                {item.role?.replace(' value', '') || 'Value'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FormulaBar({
  question = '',
  selectedRange,
  value,
  onChange,
  onSubmit,
  separatorMode,
  formulaOptions = [],
  onCursorChange,
  onFocusChange,
  cursorPosition = 0,
  focusTick = 0,
  formulaResult = null,
  showQuestionHelper = false,
  helperValues = [],
  lookupValue = '',
  onLookupValueChange,
  onInsertHelperValue,
  selectionTarget = 'formula',
  onSelectionTargetChange
}) {
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const cursor = Math.min(cursorPosition ?? value.length, value.length);
  const fragmentInfo = useMemo(() => getFragment(value, cursor), [value, cursor]);
  const cleanOptions = useMemo(() => dedupeOptions(formulaOptions), [formulaOptions]);

  const suggestions = useMemo(() => {
    if (!fragmentInfo?.fragment) return [];
    const fragment = fragmentInfo.fragment.toUpperCase();
    if (fragment.length < 1) return [];

    const startsWith = cleanOptions.filter((item) => item.name.toUpperCase().startsWith(fragment));
    const includes = cleanOptions.filter((item) => !item.name.toUpperCase().startsWith(fragment) && item.name.toUpperCase().includes(fragment));
    return [...startsWith, ...includes].slice(0, 8);
  }, [cleanOptions, fragmentInfo]);

  const activeSignature = useMemo(() => {
    const activeFunction = findActiveFunction(value, cursor);
    if (!activeFunction) return null;

    const option = cleanOptions.find((item) => item.name?.toUpperCase() === activeFunction.name);
    if (!option) return null;

    const syntax = getSyntaxParts(option, separatorMode);
    return {
      ...syntax,
      argIndex: activeFunction.argIndex
    };
  }, [cleanOptions, cursor, separatorMode, value]);

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
      const completedValue = autoCloseFormula(value);
      if (completedValue !== value) {
        updateValue(completedValue, completedValue.length);
      }
      onSubmit?.(completedValue);
    }
  };

  const placeholder = separatorMode === 'id'
    ? 'Ketik = lalu nama rumus.'
    : 'Type = then formula name.';

  const resultValue = !value.trim()
    ? 'Belum ada'
    : formulaResult?.ok
      ? formulaResult.displayValue || 'Kosong'
      : formulaResult?.error || '#VALUE!';

  const resultMessage = !value.trim()
    ? 'Ketik rumus dulu. Setelah itu hasil sementara akan muncul di sini.'
    : formulaResult?.ok
      ? 'Ini hasil sementara dari rumus yang kamu ketik. Kalau sudah sesuai soal, tekan Enter atau klik Cek Jawaban.'
      : formulaResult?.message || 'Excel akan menampilkan error untuk formula ini.';

  const resultIsError = value.trim() && formulaResult && !formulaResult.ok;

  return (
    <div className="rounded-[1.5rem] border border-coach-line bg-white p-3 shadow-soft dark:border-white/10 dark:bg-white/[0.055]">
      <section className="rounded-2xl border border-coach-green/18 bg-coach-greenSoft/70 px-4 py-3 text-center dark:border-emerald-400/15 dark:bg-emerald-400/10">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-coach-green dark:text-emerald-200">Soal yang diberikan</p>
        <p className="mx-auto mt-1 max-w-4xl text-sm font-black leading-6 text-coach-ink dark:text-white sm:text-base">{question}</p>
      </section>

      <div className={`mt-3 grid gap-3 ${showQuestionHelper ? 'lg:grid-cols-[170px_minmax(0,1fr)_190px]' : 'lg:grid-cols-[minmax(0,1fr)_190px]'}`}>
        {showQuestionHelper && (
          <section className="rounded-xl border border-coach-line bg-coach-beige px-3 py-3 dark:border-white/10 dark:bg-black/20">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-coach-green dark:text-emerald-200">Value / Criteria</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {helperValues.map((item, index) => (
                <button
                  key={`${item.role}-${item.insert}-${index}`}
                  type="button"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    onLookupValueChange?.(item?.label || item?.insert || '');
                    onSelectionTargetChange?.('formula');
                    onInsertHelperValue?.(item);
                  }}
                  title={item.note || item.insert}
                  className="w-full rounded-lg border border-coach-green/20 bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:border-coach-green hover:shadow-md dark:border-emerald-400/15 dark:bg-white/5"
                >
                  <span className="block truncate font-mono text-sm font-black text-coach-green dark:text-emerald-200">{item.label}</span>
                  {item.note && <span className="mt-0.5 block truncate text-[10px] font-semibold text-black/45 dark:text-white/45">{item.note}</span>}
                </button>
              ))}
            </div>
          </section>
        )}

        <div className="space-y-2">
          <div className="relative">
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => {
                onChange(event.target.value);
                reportCursor(event.target);
              }}
              onClick={(event) => {
                onSelectionTargetChange?.('formula');
                reportCursor(event.target);
              }}
              onKeyUp={(event) => reportCursor(event.target)}
              onSelect={(event) => reportCursor(event.target)}
              onFocus={(event) => {
                onSelectionTargetChange?.('formula');
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
                {suggestions.map((item, index) => {
                  const syntax = getSyntaxParts(item, separatorMode);
                  return (
                    <button
                      key={`${item.name}-${item.category}-${index}`}
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => insertSuggestion(item)}
                      className={`flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition ${index === activeIndex ? 'bg-coach-green text-white' : 'hover:bg-coach-greenSoft dark:hover:bg-white/8'}`}
                    >
                      <span>
                        <span className="block font-mono text-sm font-black">{item.name}</span>
                        <span className={`mt-0.5 block font-mono text-[11px] font-semibold ${index === activeIndex ? 'text-white/75' : 'text-black/45 dark:text-white/45'}`}>
                          {syntax.name}({syntax.args.join(syntax.separator)})
                        </span>
                      </span>
                      <span className={`shrink-0 truncate text-xs font-bold ${index === activeIndex ? 'text-white/70' : 'text-black/45 dark:text-white/45'}`}>{item.displayCategory || item.category}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {!open && <SignatureTooltip signature={activeSignature} />}
          </div>

          <section className="rounded-xl border border-coach-line bg-white px-3 py-2 dark:border-white/10 dark:bg-black/20">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-coach-green dark:text-emerald-200">Cara mengisi</p>
            <div className="mt-1 flex flex-wrap gap-2 text-[11px] font-semibold leading-5 text-black/55 dark:text-white/55">
              <span>Awali dengan <span className="font-mono font-black text-coach-green dark:text-emerald-200">=</span></span>
              <span>{separatorMode === 'id' ? 'Pakai titik koma (;).' : 'Use comma (,).'}</span>
              <span>Enter untuk cek jawaban.</span>
              {showQuestionHelper && <span className="rounded-full bg-coach-greenSoft px-2 py-1 text-[10px] font-black text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">Klik value untuk criteria/lookup</span>}
              <span className="rounded-full bg-coach-greenSoft px-2 py-1 text-[10px] font-black text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">Klik/drag tabel untuk range</span>
              {activeSignature && (
                <span className="rounded-full bg-coach-greenSoft px-2 py-1 font-mono text-[10px] font-black text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
                  Argumen: {activeSignature.args[Math.min(activeSignature.argIndex, activeSignature.args.length - 1)]}
                </span>
              )}
              {selectedRange && (
                <span className="rounded-full bg-coach-greenSoft px-2 py-1 font-mono text-[10px] font-black text-coach-green dark:bg-emerald-400/10 dark:text-emerald-200">
                  Range: {selectedRange}
                </span>
              )}
            </div>
          </section>
        </div>

        <section className={`rounded-xl border px-3 py-3 ${resultIsError ? 'border-red-200 bg-red-50 dark:border-red-400/20 dark:bg-red-400/10' : 'border-coach-green/18 bg-coach-greenSoft/70 dark:border-emerald-400/15 dark:bg-emerald-400/10'}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-black/45 dark:text-white/45">Hasil jawaban</p>
          <p className={`mt-2 font-mono text-lg font-black ${resultIsError ? 'text-red-600 dark:text-red-200' : 'text-coach-green dark:text-emerald-200'}`}>{resultValue}</p>
          <p className="mt-2 text-[11px] font-semibold leading-5 text-black/55 dark:text-white/55">{resultMessage}</p>
        </section>
      </div>
    </div>
  );
}
