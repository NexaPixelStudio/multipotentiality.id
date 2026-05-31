import { useEffect, useMemo, useRef, useState } from 'react';
import { autoCloseFormula } from '../utils/formulaEngine.js';
import { getFormulaLearningContent } from '../data/formulaLearningContent.js';

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


function splitFormulaArgs(value = '') {
  const parts = [];
  let current = '';
  let depth = 0;
  let inQuote = false;

  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (char === '"' && value[index - 1] !== '\\') inQuote = !inQuote;

    if (!inQuote) {
      if (char === '(') depth += 1;
      if (char === ')') depth = Math.max(0, depth - 1);
      if ((char === ';' || char === ',') && depth === 0) {
        parts.push(current.trim());
        current = '';
        continue;
      }
    }

    current += char;
  }

  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseFormulaCall(value = '') {
  const clean = String(value || '').trim();
  const match = clean.match(/^=\s*([A-Za-z.][A-Za-z0-9._]*)\s*\((.*)$/s);
  if (!match) return null;

  const name = match[1].toUpperCase();
  let inner = match[2] || '';
  if (inner.endsWith(')')) inner = inner.slice(0, -1);

  return {
    name,
    args: splitFormulaArgs(inner)
  };
}

function cleanArgLabel(value = '') {
  const text = String(value || '').trim();
  if (!text) return 'bagian ini';
  return text.length > 28 ? `${text.slice(0, 28)}...` : text;
}

function getFormulaLogicExplanation({ value = '', cleanOptions = [], activeSignature = null }) {
  const call = parseFormulaCall(value);
  const name = call?.name || activeSignature?.name || '';
  const args = call?.args || [];
  const option = cleanOptions.find((item) => item.name?.toUpperCase() === name);
  const learning = option ? getFormulaLearningContent(option) : {};

  if (!String(value || '').trim()) {
    return 'Ketik rumus dulu. Nanti bagian ini akan jelasin alur berpikir rumusnya, bukan cuma hasil akhirnya.';
  }

  if (!name) {
    return 'Mulai dari tanda =, lalu pilih nama rumus yang cocok dengan soal. Setelah itu tentukan range, criteria, atau lookup value sesuai kebutuhan.';
  }

  const a0 = cleanArgLabel(args[0]);
  const a1 = cleanArgLabel(args[1]);
  const a2 = cleanArgLabel(args[2]);
  const a3 = cleanArgLabel(args[3]);
  const a4 = cleanArgLabel(args[4]);

  if (name === 'SUMIFS') {
    if (args.length >= 5) return `SUMIFS menjumlahkan ${a0}, tapi hanya baris yang memenuhi semua syarat. Syarat pertama dicek di ${a1} dengan nilai ${a2}, lalu syarat kedua dicek di ${a3} dengan nilai ${a4}.`;
    return 'SUMIFS dipakai untuk menjumlahkan angka dengan banyak syarat. Urutannya: range yang dijumlahkan, range syarat pertama, nilai syarat pertama, lalu pasangan syarat berikutnya.';
  }

  if (name === 'SUMIF') {
    if (args.length >= 3) return `SUMIF mengecek ${a0}, mencari data yang sesuai dengan ${a1}, lalu menjumlahkan angka dari ${a2}.`;
    return 'SUMIF dipakai untuk menjumlahkan angka berdasarkan 1 syarat. Tentukan dulu range yang dicek, kriterianya, lalu range angka yang mau dijumlahkan.';
  }

  if (name === 'COUNTIFS') {
    if (args.length >= 4) return `COUNTIFS menghitung jumlah baris yang lolos banyak syarat. Syarat pertama dicek di ${a0} dengan nilai ${a1}, lalu syarat kedua dicek di ${a2} dengan nilai ${a3}.`;
    return 'COUNTIFS dipakai untuk menghitung data yang memenuhi lebih dari 1 syarat. Isinya berpasangan: range syarat, lalu nilai syarat.';
  }

  if (name === 'COUNTIF') {
    if (args.length >= 2) return `COUNTIF mengecek ${a0}, lalu menghitung berapa cell yang isinya sesuai dengan ${a1}.`;
    return 'COUNTIF dipakai untuk menghitung data berdasarkan 1 syarat. Tentukan range yang dicek, lalu tulis kriteria yang dicari.';
  }

  if (name === 'AVERAGEIFS') {
    if (args.length >= 5) return `AVERAGEIFS menghitung rata-rata dari ${a0}, tapi hanya untuk baris yang memenuhi semua syarat, termasuk ${a2} di ${a1} dan ${a4} di ${a3}.`;
    return 'AVERAGEIFS dipakai untuk mencari rata-rata dengan banyak syarat. Range rata-rata ditulis dulu, lalu pasangan range syarat dan nilai syarat.';
  }

  if (name === 'AVERAGEIF') {
    if (args.length >= 3) return `AVERAGEIF mengecek ${a0}, mencari data yang sesuai dengan ${a1}, lalu menghitung rata-rata angka dari ${a2}.`;
    return 'AVERAGEIF dipakai untuk mencari rata-rata berdasarkan 1 syarat. Tentukan range syarat, kriteria, lalu range angka yang mau dirata-ratakan.';
  }

  if (name === 'VLOOKUP') {
    if (args.length >= 4) return `VLOOKUP mencari ${a0} di kolom pertama dari ${a1}. Kalau ketemu, Excel mengambil data dari kolom ke-${a2}. Angka ${a3} berarti cara pencariannya exact atau approximate.`;
    return 'VLOOKUP dipakai untuk mencari nilai secara vertikal. Logikanya: cari lookup value di kolom pertama tabel, lalu ambil hasil dari nomor kolom yang kamu tentukan.';
  }

  if (name === 'HLOOKUP') {
    if (args.length >= 4) return `HLOOKUP mencari ${a0} di baris pertama dari ${a1}. Kalau ketemu, Excel mengambil data dari baris ke-${a2}.`;
    return 'HLOOKUP dipakai untuk mencari nilai secara horizontal. Cari value di baris pertama tabel, lalu ambil hasil dari nomor baris yang diminta.';
  }

  if (name === 'XLOOKUP') {
    if (args.length >= 3) return `XLOOKUP mencari ${a0} di ${a1}, lalu mengambil hasil sejajar dari ${a2}. Ini lebih fleksibel daripada VLOOKUP karena lookup range dan hasilnya bisa dipisah.`;
    return 'XLOOKUP mencari satu nilai di lookup array, lalu mengembalikan hasil dari return array yang posisinya sejajar.';
  }

  if (name === 'INDEX') {
    if (args.length >= 2) return `INDEX mengambil isi dari ${a0} berdasarkan posisi baris ${a1}${args[2] ? ` dan kolom ${a2}` : ''}. Jadi fokusnya bukan mencari teks, tapi mengambil berdasarkan posisi.`;
    return 'INDEX dipakai untuk mengambil data dari range berdasarkan nomor baris dan nomor kolom.';
  }

  if (name === 'MATCH' || name === 'XMATCH') {
    if (args.length >= 2) return `${name} mencari posisi ${a0} di dalam ${a1}. Hasilnya bukan isi cell, tapi nomor posisi data yang cocok.`;
    return `${name} dipakai untuk mencari posisi data dalam sebuah range.`;
  }

  if (name === 'IF') {
    if (args.length >= 3) return `IF mengecek kondisi ${a0}. Kalau hasilnya benar, Excel menampilkan ${a1}. Kalau salah, Excel menampilkan ${a2}.`;
    return 'IF itu logikanya JIKA. Tentukan kondisi dulu, lalu isi hasil jika benar dan hasil jika salah.';
  }

  if (name === 'FILTER') {
    if (args.length >= 2) return `FILTER mengambil data dari ${a0}, tapi hanya baris yang lolos kondisi di ${a1}.`;
    return 'FILTER dipakai untuk menampilkan data yang memenuhi syarat tertentu secara otomatis.';
  }

  if (['SUM', 'AVERAGE', 'MIN', 'MAX', 'COUNT', 'COUNTA'].includes(name)) {
    if (args.length >= 1) return `${name} membaca range ${a0}, lalu menghitung hasil sesuai fungsi ${name}. Fokusnya pastikan range yang dipilih memang berisi data yang dibutuhkan soal.`;
  }

  if (learning?.simpleLogic) {
    return learning.analogy ? `${learning.simpleLogic} Analogi gampangnya: ${learning.analogy}` : learning.simpleLogic;
  }
  if (option?.simpleLogic) return option.simpleLogic;
  if (option?.description) return option.description;

  return `${name} sudah terbaca. Sekarang cek lagi urutan argumennya: value/range pertama, lalu argumen berikutnya sesuai tooltip rumus yang muncul.`;
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
  feedback = null,
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
      event.stopPropagation();
      setOpen(false);

      const completedValue = autoCloseFormula(value);
      if (completedValue !== value) {
        updateValue(completedValue, completedValue.length);
      }

      requestAnimationFrame(() => {
        onSubmit?.(completedValue);
      });
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
  const hasFormula = Boolean(value.trim());
  const answerState = !hasFormula ? 'empty' : feedback ? (feedback.correct ? 'correct' : 'wrong') : 'pending';
  const logicExplanation = getFormulaLogicExplanation({ value, cleanOptions, activeSignature });

  const handleManualCheck = () => {
    const completedValue = autoCloseFormula(value);
    if (completedValue !== value) {
      updateValue(completedValue, completedValue.length);
    }
    setOpen(false);
    requestAnimationFrame(() => {
      onSubmit?.(completedValue);
    });
  };

  const renderFormulaStatus = () => {
    if (answerState === 'empty') return null;

    if (answerState === 'pending') {
      return (
        <span
          title="Formula belum dicek. Tekan Enter atau klik Cek Jawaban."
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50 text-amber-600 ring-1 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/20"
        >
          <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </span>
      );
    }

    if (answerState === 'correct') {
      return (
        <span
          title="Jawaban sudah benar"
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/20"
        >
          ✓
        </span>
      );
    }

    return (
      <span
        title="Jawaban masih salah"
        className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600 ring-1 ring-red-200 dark:bg-red-400/10 dark:text-red-200 dark:ring-red-400/20"
      >
        ×
      </span>
    );
  };

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

            <button
              type="button"
              onMouseDown={(event) => event.preventDefault()}
              onClick={handleManualCheck}
              className="mt-4 w-full rounded-xl bg-coach-green px-4 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-coach-ink hover:shadow-md dark:hover:bg-emerald-600"
            >
              Cek Jawaban
            </button>
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
              className="min-h-[46px] w-full rounded-xl border border-coach-line bg-coach-beige py-0 pl-4 pr-12 font-mono text-sm font-semibold outline-none transition focus:border-coach-green focus:bg-white focus:ring-2 focus:ring-coach-green/12 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:bg-black/30"
            />

            <div className="pointer-events-none absolute right-3 top-1/2 z-10 -translate-y-1/2 font-black">
              {renderFormulaStatus()}
            </div>

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

          <section className="rounded-xl border border-coach-line bg-white px-3 py-2 shadow-[inset_0_1px_0_rgba(33,115,70,0.04)] dark:border-white/10 dark:bg-black/20">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-coach-green dark:text-emerald-200">Penjelasan Logika Rumus</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-black/60 dark:text-white/60">{logicExplanation}</p>
          </section>

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
