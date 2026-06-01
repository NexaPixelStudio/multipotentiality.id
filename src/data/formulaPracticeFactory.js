// Formula Coach aligned practice generator.
// Audit goal: setiap rumus punya latihan yang tabel, soal, hint, dan expected answer-nya nyambung.
// Catatan: key internal masih bernama `syntax` di katalog agar komponen lama tetap aman, tetapi UI menampilkannya sebagai "Format".

const upper = (value = '') => String(value || '').toUpperCase();

const formatOverrides = {
  // Advanced / Professional
  DETECTLANGUAGE: 'DETECTLANGUAGE(text)',
  GROUPBY: 'GROUPBY(row_fields, values, function, [field_headers], [total_depth], [sort_order], [filter_array], [field_relationship])',
  LAMBDA: 'LAMBDA([parameter1, parameter2, ...], calculation)',
  LET: 'LET(name1, name_value1, calculation_or_name2, [name_value2], ...)',
  PERCENTOF: 'PERCENTOF(data_subset, data_all)',
  PIVOTBY: 'PIVOTBY(row_fields, col_fields, values, function, [field_headers], [row_total_depth], [row_sort_order], [col_total_depth], [col_sort_order], [filter_array], [relative_to])',
  REGEXEXTRACT: 'REGEXEXTRACT(text, pattern, [return_mode], [case_sensitivity])',
  REGEXREPLACE: 'REGEXREPLACE(text, pattern, replacement, [occurrence], [case_sensitivity])',
  REGEXTEST: 'REGEXTEST(text, pattern, [case_sensitivity])',
  TRANSLATE: 'TRANSLATE(text, source_language, target_language)',

  // Compatibility / Statistical old names
  BETADIST: 'BETADIST(x, alpha, beta, [A], [B])',
  BETAINV: 'BETAINV(probability, alpha, beta, [A], [B])',
  BINOMDIST: 'BINOMDIST(number_s, trials, probability_s, cumulative)',
  CHIDIST: 'CHIDIST(x, deg_freedom)',
  CHIINV: 'CHIINV(probability, deg_freedom)',
  CHITEST: 'CHITEST(actual_range, expected_range)',
  CONFIDENCE: 'CONFIDENCE(alpha, standard_dev, size)',
  COVAR: 'COVAR(array1, array2)',
  CRITBINOM: 'CRITBINOM(trials, probability_s, alpha)',
  EXPONDIST: 'EXPONDIST(x, lambda, cumulative)',
  FDIST: 'FDIST(x, deg_freedom1, deg_freedom2)',
  FINV: 'FINV(probability, deg_freedom1, deg_freedom2)',
  FTEST: 'FTEST(array1, array2)',
  GAMMADIST: 'GAMMADIST(x, alpha, beta, cumulative)',
  GAMMAINV: 'GAMMAINV(probability, alpha, beta)',
  HYPGEOMDIST: 'HYPGEOMDIST(sample_s, number_sample, population_s, number_pop)',
  LOGINV: 'LOGINV(probability, mean, standard_dev)',
  LOGNORMDIST: 'LOGNORMDIST(x, mean, standard_dev)',
  NEGBINOMDIST: 'NEGBINOMDIST(number_f, number_s, probability_s)',
  NORMDIST: 'NORMDIST(x, mean, standard_dev, cumulative)',
  NORMINV: 'NORMINV(probability, mean, standard_dev)',
  NORMSDIST: 'NORMSDIST(z)',
  NORMSINV: 'NORMSINV(probability)',
  PERCENTILE: 'PERCENTILE(array, k)',
  PERCENTRANK: 'PERCENTRANK(array, x, [significance])',
  POISSON: 'POISSON(x, mean, cumulative)',
  QUARTILE: 'QUARTILE(array, quart)',
  RANK: 'RANK(number, ref, [order])',
  STDEV: 'STDEV(number1, [number2], ...)',
  STDEVP: 'STDEVP(number1, [number2], ...)',
  TDIST: 'TDIST(x, deg_freedom, tails)',
  TINV: 'TINV(probability, deg_freedom)',
  TTEST: 'TTEST(array1, array2, tails, type)',
  VAR: 'VAR(number1, [number2], ...)',
  VARP: 'VARP(number1, [number2], ...)',
  WEIBULL: 'WEIBULL(x, alpha, beta, cumulative)',
  ZTEST: 'ZTEST(array, x, [sigma])',

  // Statistical newer names
  'AVERAGEIF': 'AVERAGEIF(range, criteria, [average_range])',
  'AVERAGEIFS': 'AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'COUNTIF': 'COUNTIF(range, criteria)',
  'COUNTIFS': 'COUNTIFS(criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'MAXIFS': 'MAXIFS(max_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'MINIFS': 'MINIFS(min_range, criteria_range1, criteria1, [criteria_range2], [criteria2], ...)',
  'BETA.DIST': 'BETA.DIST(x, alpha, beta, cumulative, [A], [B])',
  'BETA.INV': 'BETA.INV(probability, alpha, beta, [A], [B])',
  'BINOM.DIST': 'BINOM.DIST(number_s, trials, probability_s, cumulative)',
  'BINOM.DIST.RANGE': 'BINOM.DIST.RANGE(trials, probability_s, number_s, [number_s2])',
  'BINOM.INV': 'BINOM.INV(trials, probability_s, alpha)',
  'CHISQ.DIST': 'CHISQ.DIST(x, deg_freedom, cumulative)',
  'CHISQ.DIST.RT': 'CHISQ.DIST.RT(x, deg_freedom)',
  'CHISQ.INV': 'CHISQ.INV(probability, deg_freedom)',
  'CHISQ.INV.RT': 'CHISQ.INV.RT(probability, deg_freedom)',
  'CHISQ.TEST': 'CHISQ.TEST(actual_range, expected_range)',
  'CONFIDENCE.NORM': 'CONFIDENCE.NORM(alpha, standard_dev, size)',
  'CONFIDENCE.T': 'CONFIDENCE.T(alpha, standard_dev, size)',
  'CORREL': 'CORREL(array1, array2)',
  'COVARIANCE.P': 'COVARIANCE.P(array1, array2)',
  'COVARIANCE.S': 'COVARIANCE.S(array1, array2)',
  'EXPON.DIST': 'EXPON.DIST(x, lambda, cumulative)',
  'F.DIST': 'F.DIST(x, deg_freedom1, deg_freedom2, cumulative)',
  'F.DIST.RT': 'F.DIST.RT(x, deg_freedom1, deg_freedom2)',
  'F.INV': 'F.INV(probability, deg_freedom1, deg_freedom2)',
  'F.INV.RT': 'F.INV.RT(probability, deg_freedom1, deg_freedom2)',
  'F.TEST': 'F.TEST(array1, array2)',
  'FORECAST': 'FORECAST(x, known_y\'s, known_x\'s)',
  'FORECAST.ETS': 'FORECAST.ETS(target_date, values, timeline, [seasonality], [data_completion], [aggregation])',
  'FORECAST.ETS.CONFINT': 'FORECAST.ETS.CONFINT(target_date, values, timeline, [confidence_level], [seasonality], [data_completion], [aggregation])',
  'FORECAST.ETS.SEASONALITY': 'FORECAST.ETS.SEASONALITY(values, timeline, [data_completion], [aggregation])',
  'FORECAST.ETS.STAT': 'FORECAST.ETS.STAT(values, timeline, statistic_type, [seasonality], [data_completion], [aggregation])',
  'FORECAST.LINEAR': 'FORECAST.LINEAR(x, known_y\'s, known_x\'s)',
  'FREQUENCY': 'FREQUENCY(data_array, bins_array)',
  'GAMMA.DIST': 'GAMMA.DIST(x, alpha, beta, cumulative)',
  'GAMMA.INV': 'GAMMA.INV(probability, alpha, beta)',
  'HYPGEOM.DIST': 'HYPGEOM.DIST(sample_s, number_sample, population_s, number_pop, cumulative)',
  'LOGNORM.DIST': 'LOGNORM.DIST(x, mean, standard_dev, cumulative)',
  'LOGNORM.INV': 'LOGNORM.INV(probability, mean, standard_dev)',
  'MODE.MULT': 'MODE.MULT(number1, [number2], ...)',
  'MODE.SNGL': 'MODE.SNGL(number1, [number2], ...)',
  'NEGBINOM.DIST': 'NEGBINOM.DIST(number_f, number_s, probability_s, cumulative)',
  'NORM.DIST': 'NORM.DIST(x, mean, standard_dev, cumulative)',
  'NORM.INV': 'NORM.INV(probability, mean, standard_dev)',
  'NORM.S.DIST': 'NORM.S.DIST(z, cumulative)',
  'NORM.S.INV': 'NORM.S.INV(probability)',
  'PERCENTILE.EXC': 'PERCENTILE.EXC(array, k)',
  'PERCENTILE.INC': 'PERCENTILE.INC(array, k)',
  'PERCENTRANK.EXC': 'PERCENTRANK.EXC(array, x, [significance])',
  'PERCENTRANK.INC': 'PERCENTRANK.INC(array, x, [significance])',
  'POISSON.DIST': 'POISSON.DIST(x, mean, cumulative)',
  'PROB': 'PROB(x_range, prob_range, [lower_limit], [upper_limit])',
  'QUARTILE.EXC': 'QUARTILE.EXC(array, quart)',
  'QUARTILE.INC': 'QUARTILE.INC(array, quart)',
  'RANK.AVG': 'RANK.AVG(number, ref, [order])',
  'RANK.EQ': 'RANK.EQ(number, ref, [order])',
  'STANDARDIZE': 'STANDARDIZE(x, mean, standard_dev)',
  'T.DIST': 'T.DIST(x, deg_freedom, cumulative)',
  'T.DIST.2T': 'T.DIST.2T(x, deg_freedom)',
  'T.DIST.RT': 'T.DIST.RT(x, deg_freedom)',
  'T.INV': 'T.INV(probability, deg_freedom)',
  'T.INV.2T': 'T.INV.2T(probability, deg_freedom)',
  'T.TEST': 'T.TEST(array1, array2, tails, type)',
  'WEIBULL.DIST': 'WEIBULL.DIST(x, alpha, beta, cumulative)',
  'Z.TEST': 'Z.TEST(array, x, [sigma])',

  // Database
  DAVERAGE: 'DAVERAGE(database, field, criteria)', DCOUNT: 'DCOUNT(database, field, criteria)', DCOUNTA: 'DCOUNTA(database, field, criteria)', DGET: 'DGET(database, field, criteria)', DMAX: 'DMAX(database, field, criteria)', DMIN: 'DMIN(database, field, criteria)', DPRODUCT: 'DPRODUCT(database, field, criteria)', DSTDEV: 'DSTDEV(database, field, criteria)', DSTDEVP: 'DSTDEVP(database, field, criteria)', DSUM: 'DSUM(database, field, criteria)', DVAR: 'DVAR(database, field, criteria)', DVARP: 'DVARP(database, field, criteria)',

  // Date/time
  DATEVALUE: 'DATEVALUE(date_text)', DAYS360: 'DAYS360(start_date, end_date, [method])', ISOWEEKNUM: 'ISOWEEKNUM(date)', TIMEVALUE: 'TIMEVALUE(time_text)', WEEKDAY: 'WEEKDAY(serial_number, [return_type])', WEEKNUM: 'WEEKNUM(serial_number, [return_type])', YEARFRAC: 'YEARFRAC(start_date, end_date, [basis])',

  // Lookup/reference and dynamic
  EXPAND: 'EXPAND(array, rows, [columns], [pad_with])', RANDARRAY: 'RANDARRAY([rows], [columns], [min], [max], [whole_number])', SEQUENCE: 'SEQUENCE(rows, [columns], [start], [step])', TOCOL: 'TOCOL(array, [ignore], [scan_by_column])', TOROW: 'TOROW(array, [ignore], [scan_by_column])', WRAPCOLS: 'WRAPCOLS(vector, wrap_count, [pad_with])', WRAPROWS: 'WRAPROWS(vector, wrap_count, [pad_with])',
  XLOOKUP: 'XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])', XMATCH: 'XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])', HLOOKUP: 'HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])', VLOOKUP: 'VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])', LOOKUP: 'LOOKUP(lookup_value, lookup_vector, [result_vector])', MATCH: 'MATCH(lookup_value, lookup_array, [match_type])', INDEX: 'INDEX(array, row_num, [column_num])', OFFSET: 'OFFSET(reference, rows, cols, [height], [width])', INDIRECT: 'INDIRECT(ref_text, [a1])', ADDRESS: 'ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])', CHOOSE: 'CHOOSE(index_num, value1, [value2], ...)',

  // Engineering
  BESSELI: 'BESSELI(x, n)', BESSELJ: 'BESSELJ(x, n)', BESSELK: 'BESSELK(x, n)', BESSELY: 'BESSELY(x, n)', BIN2DEC: 'BIN2DEC(number)', BIN2HEX: 'BIN2HEX(number, [places])', BIN2OCT: 'BIN2OCT(number, [places])', BITAND: 'BITAND(number1, number2)', BITLSHIFT: 'BITLSHIFT(number, shift_amount)', BITOR: 'BITOR(number1, number2)', BITRSHIFT: 'BITRSHIFT(number, shift_amount)', BITXOR: 'BITXOR(number1, number2)', COMPLEX: 'COMPLEX(real_num, i_num, [suffix])', CONVERT: 'CONVERT(number, from_unit, to_unit)', DEC2BIN: 'DEC2BIN(number, [places])', DEC2HEX: 'DEC2HEX(number, [places])', DEC2OCT: 'DEC2OCT(number, [places])', DELTA: 'DELTA(number1, [number2])', ERF: 'ERF(lower_limit, [upper_limit])', 'ERF.PRECISE': 'ERF.PRECISE(x)', ERFC: 'ERFC(x)', 'ERFC.PRECISE': 'ERFC.PRECISE(x)', GESTEP: 'GESTEP(number, [step])', HEX2BIN: 'HEX2BIN(number, [places])', HEX2DEC: 'HEX2DEC(number)', HEX2OCT: 'HEX2OCT(number, [places])', IMABS: 'IMABS(inumber)', IMAGINARY: 'IMAGINARY(inumber)', IMARGUMENT: 'IMARGUMENT(inumber)', IMCONJUGATE: 'IMCONJUGATE(inumber)', IMCOS: 'IMCOS(inumber)', IMCOSH: 'IMCOSH(inumber)', IMCOT: 'IMCOT(inumber)', IMCSC: 'IMCSC(inumber)', IMCSCH: 'IMCSCH(inumber)', IMDIV: 'IMDIV(inumber1, inumber2)', IMEXP: 'IMEXP(inumber)', IMLN: 'IMLN(inumber)', IMLOG10: 'IMLOG10(inumber)', IMLOG2: 'IMLOG2(inumber)', IMPOWER: 'IMPOWER(inumber, number)', IMPRODUCT: 'IMPRODUCT(inumber1, [inumber2], ...)', IMREAL: 'IMREAL(inumber)', IMSEC: 'IMSEC(inumber)', IMSECH: 'IMSECH(inumber)', IMSIN: 'IMSIN(inumber)', IMSINH: 'IMSINH(inumber)', IMSQRT: 'IMSQRT(inumber)', IMSUB: 'IMSUB(inumber1, inumber2)', IMSUM: 'IMSUM(inumber1, [inumber2], ...)', IMTAN: 'IMTAN(inumber)', OCT2BIN: 'OCT2BIN(number, [places])', OCT2DEC: 'OCT2DEC(number)', OCT2HEX: 'OCT2HEX(number, [places])',

  // Financial
  ACCRINT: 'ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])', ACCRINTM: 'ACCRINTM(issue, settlement, rate, par, [basis])', AMORDEGRC: 'AMORDEGRC(cost, date_purchased, first_period, salvage, period, rate, [basis])', AMORLINC: 'AMORLINC(cost, date_purchased, first_period, salvage, period, rate, [basis])', COUPDAYBS: 'COUPDAYBS(settlement, maturity, frequency, [basis])', COUPDAYS: 'COUPDAYS(settlement, maturity, frequency, [basis])', COUPDAYSNC: 'COUPDAYSNC(settlement, maturity, frequency, [basis])', COUPNCD: 'COUPNCD(settlement, maturity, frequency, [basis])', COUPNUM: 'COUPNUM(settlement, maturity, frequency, [basis])', COUPPCD: 'COUPPCD(settlement, maturity, frequency, [basis])', CUMIPMT: 'CUMIPMT(rate, nper, pv, start_period, end_period, type)', CUMPRINC: 'CUMPRINC(rate, nper, pv, start_period, end_period, type)', DB: 'DB(cost, salvage, life, period, [month])', DDB: 'DDB(cost, salvage, life, period, [factor])', DISC: 'DISC(settlement, maturity, pr, redemption, [basis])', DOLLARDE: 'DOLLARDE(fractional_dollar, fraction)', DOLLARFR: 'DOLLARFR(decimal_dollar, fraction)', DURATION: 'DURATION(settlement, maturity, coupon, yld, frequency, [basis])', EFFECT: 'EFFECT(nominal_rate, npery)', FV: 'FV(rate, nper, pmt, [pv], [type])', FVSCHEDULE: 'FVSCHEDULE(principal, schedule)', INTRATE: 'INTRATE(settlement, maturity, investment, redemption, [basis])', IPMT: 'IPMT(rate, per, nper, pv, [fv], [type])', IRR: 'IRR(values, [guess])', ISPMT: 'ISPMT(rate, per, nper, pv)', MDURATION: 'MDURATION(settlement, maturity, coupon, yld, frequency, [basis])', MIRR: 'MIRR(values, finance_rate, reinvest_rate)', NOMINAL: 'NOMINAL(effect_rate, npery)', NPER: 'NPER(rate, pmt, pv, [fv], [type])', NPV: 'NPV(rate, value1, [value2], ...)', PDURATION: 'PDURATION(rate, pv, fv)', PMT: 'PMT(rate, nper, pv, [fv], [type])', PPMT: 'PPMT(rate, per, nper, pv, [fv], [type])', PV: 'PV(rate, nper, pmt, [fv], [type])', RATE: 'RATE(nper, pmt, pv, [fv], [type], [guess])', RRI: 'RRI(nper, pv, fv)', SLN: 'SLN(cost, salvage, life)', SYD: 'SYD(cost, salvage, life, per)', VDB: 'VDB(cost, salvage, life, start_period, end_period, [factor], [no_switch])', XIRR: 'XIRR(values, dates, [guess])', XNPV: 'XNPV(rate, values, dates)',

  // Information
  'ERROR.TYPE': 'ERROR.TYPE(error_val)', INFO: 'INFO(type_text)', ISERR: 'ISERR(value)', ISEVEN: 'ISEVEN(number)', ISLOGICAL: 'ISLOGICAL(value)', ISNONTEXT: 'ISNONTEXT(value)', ISODD: 'ISODD(number)', ISOMITTED: 'ISOMITTED(argument)', ISREF: 'ISREF(value)', NA: 'NA()', SHEET: 'SHEET([value])', SHEETS: 'SHEETS([reference])', TYPE: 'TYPE(value)',

  // Web / Cube / Add-in
  ENCODEURL: 'ENCODEURL(text)', FILTERXML: 'FILTERXML(xml, xpath)', WEBSERVICE: 'WEBSERVICE(url)',
  CUBEKPIMEMBER: 'CUBEKPIMEMBER(connection, kpi_name, kpi_property, [caption])', CUBEMEMBER: 'CUBEMEMBER(connection, member_expression, [caption])', CUBEMEMBERPROPERTY: 'CUBEMEMBERPROPERTY(connection, member_expression, property)', CUBERANKEDMEMBER: 'CUBERANKEDMEMBER(connection, set_expression, rank, [caption])', CUBESET: 'CUBESET(connection, set_expression, [caption], [sort_order], [sort_by])', CUBESETCOUNT: 'CUBESETCOUNT(set)', CUBEVALUE: 'CUBEVALUE(connection, [member_expression1], [member_expression2], ...)',
  CALL: 'CALL(module_text, procedure, type_text, [argument1], ...)', EUROCONVERT: 'EUROCONVERT(number, source, target, [full_precision], [triangulation_precision])', 'REGISTER.ID': 'REGISTER.ID(module_text, procedure, [type_text])', 'SQL.REQUEST': 'SQL.REQUEST(connection_string, output_ref, driver_prompt, query_text, col_names_logical)'
};

const tableByCategory = {
  'Text': 'textPractice',
  'Date and Time': 'datePractice',
  'Logical': 'logicalPractice',
  'Lookup and Reference': 'lookup',
  'Dynamic Array': 'dynamic',
  'Math and Trigonometry': 'mathNumbers',
  'Statistical': 'statsParameter',
  'Compatibility': 'statsParameter',
  'Financial': 'financeParameter',
  'Information': 'informationMixed',
  'Engineering': 'engineeringParameter',
  'Database': 'databaseMini',
  'Web': 'webParameter',
  'Cube': 'cubeParameter',
  'Advanced / Professional': 'dynamic',
  'Add-in / User Defined': 'addinParameter'
};

const tableFriendlyName = {
  textPractice: 'Data Teks', datePractice: 'Data Tanggal & Jam', logicalPractice: 'Data Kondisi', lookup: 'Master Produk', dynamic: 'Data Produk Dinamis', mathNumbers: 'Data Angka',
  statsParameter: 'Parameter Statistik Ringkas', statsNegBinom: 'Parameter Negative Binomial', statsBinom: 'Parameter Binomial', statsNormal: 'Parameter Normal', statsBetaGamma: 'Parameter Beta/Gamma', statsFreedom: 'Parameter Uji Statistik', statsActualExpected: 'Data Aktual vs Ekspektasi', statsSeriesCompact: 'Data Statistik Ringkas',
  financeParameter: 'Parameter Keuangan', informationMixed: 'Data Campuran', engineeringParameter: 'Parameter Teknik', databaseMini: 'Database Mini', webParameter: 'Data Web', cubeParameter: 'Contoh Cube/Data Model', addinParameter: 'Parameter Add-in'
};

const cellValue = {
  B2: 3, B3: 5, B4: 0.4, B5: 6, B6: 10, B7: 8, B8: 10, B9: 42, B10: 40, B11: 1.5, B12: 'TRUE', B13: 10, B14: 4, B15: 8, B16: 20, B17: 0.05, B18: 0, B19: 1,
  F2: 0.0066667, F3: 12, F4: 10000000, F5: -900000, F6: 1000000, F7: 5, F8: 1, F9: 0, F10: 0.1, F11: 2, F12: 1, F13: 12, F14: 0, F15: '2026-01-01', F16: '2026-12-31', F17: 100, F18: 95, F19: 2, F20: 1000,
  J2: 10, J3: 'm', J4: 'cm', J5: '1010', J6: '3+4i', J7: '2+1i', J8: 3, J9: 4, J10: 2,
  A2: 'P-001', D2: 'Kaos Basic'
};

const specialPractice = {
  NEGBINOMDIST: { tableKey: 'statsNegBinom', refs: ['B2','B3','B4'], hardcodes: ['3','5','0.4'], question: 'Hitung peluang 3 gagal terjadi sebelum target 5 berhasil, dengan peluang berhasil 40%.', logic: 'Ambil jumlah gagal, target berhasil, dan peluang berhasil. Tabelnya sengaja ringkas karena rumus ini hanya butuh tiga input.' },
  'NEGBINOM.DIST': { tableKey: 'statsNegBinom', refs: ['B2','B3','B4','B5'], hardcodes: ['3','5','0.4','FALSE'], question: 'Hitung peluang negative binomial. Pakai mode tidak kumulatif dari parameter yang tersedia.', logic: 'Ambil jumlah gagal, target berhasil, peluang berhasil, lalu pilih TRUE/FALSE untuk kumulatif.' },
  BINOMDIST: { tableKey: 'statsBinom', refs: ['B2','B3','B4','B5'], hardcodes: ['6','10','0.4','FALSE'], question: 'Hitung peluang mendapat 6 berhasil dari 10 percobaan dengan peluang berhasil 40%.', logic: 'Ambil jumlah berhasil, jumlah percobaan, peluang berhasil, lalu pilih TRUE/FALSE untuk kumulatif.' },
  'BINOM.DIST': { tableKey: 'statsBinom', refs: ['B2','B3','B4','B5'], hardcodes: ['6','10','0.4','FALSE'], question: 'Hitung peluang binomial untuk 6 berhasil dari 10 percobaan.', logic: 'Ambil jumlah berhasil, jumlah percobaan, peluang berhasil, lalu pilih TRUE/FALSE untuk kumulatif.' },
  'NORM.DIST': { tableKey: 'statsNormal', refs: ['B2','B3','B4','B5'], hardcodes: ['42','40','1.5','TRUE'], question: 'Hitung distribusi normal untuk x 42, rata-rata 40, dan standar deviasi 1,5.', logic: 'Ambil nilai x, mean, standar deviasi, lalu tentukan kumulatif atau tidak.' },
  NORMDIST: { tableKey: 'statsNormal', refs: ['B2','B3','B4','B5'], hardcodes: ['42','40','1.5','TRUE'], question: 'Hitung distribusi normal versi lama untuk parameter yang tersedia.', logic: 'Rumus lama ini tetap memakai x, mean, standar deviasi, dan pilihan kumulatif.' },
  'NORM.INV': { tableKey: 'statsNormal', refs: ['B6','B3','B4'], hardcodes: ['0.8','40','1.5'], question: 'Cari nilai dari peluang 80% pada distribusi normal.', logic: 'Ambil probability, mean, dan standar deviasi dari tabel normal.' },
  NORMINV: { tableKey: 'statsNormal', refs: ['B6','B3','B4'], hardcodes: ['0.8','40','1.5'], question: 'Cari nilai dari peluang 80% pada distribusi normal versi lama.', logic: 'Ambil probability, mean, dan standar deviasi dari tabel normal.' },
  'NORM.S.DIST': { tableKey: 'statsNormal', refs: ['B7','B5'], hardcodes: ['1.25','TRUE'], question: 'Hitung distribusi normal standar untuk z-score 1,25.', logic: 'Ambil z-score dan pilihan kumulatif dari tabel.' },
  NORMSDIST: { tableKey: 'statsNormal', refs: ['B7'], hardcodes: ['1.25'], question: 'Hitung distribusi normal standar versi lama untuk z-score 1,25.', logic: 'Ambil z-score dari tabel.' },
  'NORM.S.INV': { tableKey: 'statsNormal', refs: ['B6'], hardcodes: ['0.8'], question: 'Cari z-score dari peluang 80%.', logic: 'Ambil probability dari tabel.' },
  NORMSINV: { tableKey: 'statsNormal', refs: ['B6'], hardcodes: ['0.8'], question: 'Cari z-score dari peluang 80% versi lama.', logic: 'Ambil probability dari tabel.' },
  PMT: { tableKey: 'financeParameter', refs: ['F2','F3','F4'], hardcodes: ['8%/12','12','10000000'], question: 'Hitung estimasi cicilan bulanan dari pinjaman 10.000.000 selama 12 bulan dengan bunga bulanan di F2.', logic: 'Ambil rate per bulan, jumlah periode, dan nilai pinjaman.' },
  FV: { tableKey: 'financeParameter', refs: ['F2','F3','F5'], hardcodes: ['8%/12','12','-900000'], question: 'Hitung nilai masa depan dari setoran bulanan 900.000 selama 12 bulan.', logic: 'Ambil rate, periode, dan pembayaran berkala.' },
  PV: { tableKey: 'financeParameter', refs: ['F2','F3','F5'], hardcodes: ['8%/12','12','-900000'], question: 'Hitung nilai sekarang dari pembayaran bulanan 900.000 selama 12 bulan.', logic: 'Ambil rate, periode, dan pembayaran berkala.' },
  CONVERT: { tableKey: 'engineeringParameter', refs: ['J2','J3','J4'], hardcodes: ['10','"m"','"cm"'], question: 'Ubah 10 meter menjadi centimeter memakai data unit di tabel.', logic: 'Ambil angka, unit asal, dan unit tujuan.' },
  FILTERXML: { tableKey: 'webParameter', refs: ['A2','B2'], hardcodes: ['"<root><title>Formula Coach</title></root>"','"//title"'], question: 'Ambil isi title dari contoh XML memakai XPath.', logic: 'Ambil teks XML, lalu ambil jalur XPath yang ingin dicari.' },
  ENCODEURL: { tableKey: 'webParameter', refs: ['D2'], hardcodes: ['"Formula Coach Excel"'], question: 'Ubah teks URL di D2 supaya aman dipakai di alamat web.', logic: 'Ambil teks, lalu biarkan Excel mengubah spasi dan karakter khusus menjadi format URL.' },
  WEBSERVICE: { tableKey: 'webParameter', refs: ['C2'], hardcodes: ['"https://example.com/api"'], question: 'Coba struktur WEBSERVICE dengan URL contoh yang tersedia di tabel.', logic: 'Rumus ini membutuhkan URL. Di latihan ini fokusnya struktur karena hasil asli butuh koneksi web.' },
};

const statisticalSeries = new Set(['AVERAGE','COUNT','COUNTA','COUNTBLANK','LARGE','MAX','MIN','SMALL','MEDIAN','MODE','MODE.SNGL','MODE.MULT','STDEV','STDEVP','STDEV.S','STDEV.P','VAR','VARP','VAR.S','VAR.P','AVEDEV','AVERAGEA','DEVSQ','GEOMEAN','HARMEAN','KURT','MAXA','MINA','SKEW','SKEW.P','STDEVA','STDEVPA','VARA','VARPA','TRIMMEAN']);
const criteriaFunctions = new Set(['SUMIF','SUMIFS','COUNTIF','COUNTIFS','AVERAGEIF','AVERAGEIFS','MAXIFS','MINIFS']);
const lookupFunctions = new Set(['VLOOKUP','HLOOKUP','XLOOKUP','LOOKUP','MATCH','XMATCH','INDEX','INDEX MATCH']);
const dbFunctions = new Set(['DAVERAGE','DCOUNT','DCOUNTA','DGET','DMAX','DMIN','DPRODUCT','DSTDEV','DSTDEVP','DSUM','DVAR','DVARP']);

const actualExpectedFunctions = new Set(['CHITEST','CHISQ.TEST']);
const pairedSeriesFunctions = new Set(['CORREL','COVAR','COVARIANCE.P','COVARIANCE.S','FTEST','F.TEST','TTEST','T.TEST','ZTEST']);
const binomFamilyFunctions = new Set(['BINOMDIST','BINOM.DIST','BINOM.DIST.RANGE','BINOM.INV','CRITBINOM','HYPGEOMDIST','HYPGEOM.DIST']);
const normalFamilyFunctions = new Set(['NORMDIST','NORM.DIST','NORMINV','NORM.INV','NORMSDIST','NORM.S.DIST','NORMSINV','NORM.S.INV','STANDARDIZE','LOGNORMDIST','LOGNORM.DIST','LOGINV','LOGNORM.INV']);
const betaGammaFunctions = new Set(['BETADIST','BETA.DIST','BETAINV','BETA.INV','GAMMADIST','GAMMA.DIST','GAMMAINV','GAMMA.INV','WEIBULL','WEIBULL.DIST','EXPONDIST','EXPON.DIST','POISSON','POISSON.DIST','PROB']);
const freedomTestFunctions = new Set(['CHIDIST','CHISQ.DIST','CHISQ.DIST.RT','CHIINV','CHISQ.INV','CHISQ.INV.RT','FDIST','F.DIST','F.DIST.RT','FINV','F.INV','F.INV.RT','TDIST','T.DIST','T.DIST.2T','T.DIST.RT','TINV','T.INV','T.INV.2T']);
const confidenceFunctions = new Set(['CONFIDENCE','CONFIDENCE.NORM','CONFIDENCE.T']);

const rootFormatArgs = (format = '') => {
  const open = String(format).indexOf('(');
  const close = String(format).lastIndexOf(')');
  if (open < 0 || close < open) return [];
  const inner = String(format).slice(open + 1, close);
  const args = [];
  let current = '', depth = 0;
  for (const char of inner) {
    if (char === '(') depth += 1;
    if (char === ')') depth = Math.max(0, depth - 1);
    if (char === ',' && depth === 0) { args.push(current.trim()); current = ''; continue; }
    current += char;
  }
  if (current.trim()) args.push(current.trim());
  return args;
};

const auditedFormat = (formula) => formatOverrides[upper(formula.name)] || formula.syntax || `${formula.name}(value)`;

const normalizeToken = (token = '') => String(token).replace(/[\[\]]/g, '').replace(/\.\.\./g, '').trim().toLowerCase();

const mapStatsToken = (token) => {
  const t = normalizeToken(token);
  if (/actual/.test(t)) return 'D2:D6';
  if (/expected/.test(t)) return 'E2:E6';
  if (/array1|known_y|values|data_array|number1|sample|ref|array\b/.test(t)) return 'D2:D16';
  if (/array2|known_x|timeline|bins_array|prob_range/.test(t)) return 'E2:E16';
  if (/number_f/.test(t)) return 'B2';
  if (/number_s2/.test(t)) return 'B14';
  if (/number_s/.test(t)) return 'B3';
  if (/probability_s|probability/.test(t)) return 'B4';
  if (/trials/.test(t)) return 'B6';
  if (/alpha/.test(t)) return 'B7';
  if (/beta/.test(t)) return 'B8';
  if (/mean|lambda/.test(t)) return 'B10';
  if (/standard|sigma/.test(t)) return 'B11';
  if (/cumulative/.test(t)) return 'B12';
  if (/deg_freedom|df/.test(t)) return 'B13';
  if (/number_sample/.test(t)) return 'B14';
  if (/population_s/.test(t)) return 'B15';
  if (/number_pop/.test(t)) return 'B16';
  if (/tails|type|quart|order|significance/.test(t)) return 'B17';
  if (/x|z|lower_limit|upper_limit/.test(t)) return 'B9';
  if (/k/.test(t)) return 'B4';
  return 'B2';
};

const mapFinanceToken = (token) => {
  const t = normalizeToken(token);
  if (/values|cash/.test(t)) return 'B2:B7';
  if (/dates/.test(t)) return 'A2:A7';
  if (/rate|coupon|yld|finance_rate|reinvest_rate|effect_rate|nominal_rate/.test(t)) return 'B2';
  if (/nper|npery|life|frequency/.test(t)) return 'B3';
  if (/pv|principal|investment/.test(t)) return 'B4';
  if (/pmt/.test(t)) return 'B5';
  if (/fv|redemption/.test(t)) return 'B6';
  if (/type|basis|calc_method|no_switch/.test(t)) return 'B7';
  if (/cost|price|pr\b/.test(t)) return 'B4';
  if (/salvage/.test(t)) return 'B6';
  if (/period|per\b|start_period|end_period|month/.test(t)) return 'B3';
  if (/settlement|issue|date_purchased|first_period|first_interest/.test(t)) return 'B2';
  if (/maturity/.test(t)) return 'B3';
  if (/par|guess|fraction/.test(t)) return 'B6';
  return 'B2';
};
const mapEngineeringToken = (token) => {
  const t = normalizeToken(token);
  if (/from_unit/.test(t)) return 'B3';
  if (/to_unit/.test(t)) return 'B4';
  if (/number1|number2/.test(t)) return /2/.test(t) ? 'B10' : 'B2';
  if (/places|n\b|step|shift/.test(t)) return 'B10';
  if (/inumber1|im_num1/.test(t)) return 'B6';
  if (/inumber2|im_num2/.test(t)) return 'B7';
  if (/inumber/.test(t)) return 'B6';
  if (/real/.test(t)) return 'B8';
  if (/i_num|imaginary/.test(t)) return 'B9';
  if (/suffix/.test(t)) return '"i"';
  if (/number/.test(t)) return 'B2';
  if (/x|lower|upper/.test(t)) return 'B2';
  return 'B2';
};
const mapTextToken = (token) => {
  const t = normalizeToken(token);
  if (/text1|text2|value1|array/.test(t)) return 'A2:A5';
  if (/within_text/.test(t)) return 'B2';
  if (/old_text|find_text|delimiter|match_end|instance_num/.test(t)) return 'D2';
  if (/start_num|start/.test(t)) return 'E2';
  if (/num_chars|num_bytes/.test(t)) return 'F2';
  if (/new_text|replacement/.test(t)) return 'G2';
  if (/format_text/.test(t)) return '"Rp #,##0"';
  if (/text|number|value/.test(t)) return 'A2';
  return 'A2';
};
const mapDateToken = (token) => {
  const t = normalizeToken(token);
  if (/year/.test(t)) return 'B2';
  if (/month/.test(t)) return 'B3';
  if (/day/.test(t)) return 'B4';
  if (/hour/.test(t)) return 'D2';
  if (/minute/.test(t)) return 'D3';
  if (/second/.test(t)) return 'D4';
  if (/start_date/.test(t)) return 'B6';
  if (/end_date/.test(t)) return 'C6';
  if (/holidays/.test(t)) return 'E2:E4';
  if (/days|months|return_type|basis|method|weekend/.test(t)) return 'B7';
  if (/date_text/.test(t)) return 'A2';
  if (/time_text/.test(t)) return 'D5';
  return 'B6';
};

const mapInfoToken = (token) => {
  const t = normalizeToken(token);
  if (/info_type|type_text/.test(t)) return '"address"';
  if (/error/.test(t)) return 'B5';
  if (/number/.test(t)) return 'B2';
  if (/reference|ref/.test(t)) return 'A1:C5';
  if (/value/.test(t)) return 'A2';
  return 'A2';
};

const mapDbToken = (token) => {
  const t = normalizeToken(token);
  if (/database/.test(t)) return 'A1:E6';
  if (/field/.test(t)) return '"Nilai"';
  if (/criteria/.test(t)) return 'G1:G2';
  return 'A1:E6';
};
const mapLookupToken = (token, name) => {
  const t = normalizeToken(token);
  if (/lookup_value/.test(t)) return 'A2';
  if (/lookup_array|lookup_vector/.test(t)) return 'E2:E8';
  if (/return_array|result_vector/.test(t)) return 'F2:F8';
  if (/table_array/.test(t)) return 'E2:I8';
  if (/col_index/.test(t)) return '2';
  if (/row_index/.test(t)) return '2';
  if (/range_lookup/.test(t)) return 'FALSE';
  if (/match_mode|match_type/.test(t)) return '0';
  if (/search_mode/.test(t)) return '1';
  if (/array|reference/.test(t)) return name === 'INDEX' ? 'E2:I8' : 'A1:I8';
  if (/row_num/.test(t)) return '1';
  if (/column_num/.test(t)) return '2';
  if (/rows/.test(t)) return '1';
  if (/cols/.test(t)) return '0';
  if (/height|width/.test(t)) return '3';
  if (/ref_text/.test(t)) return '"A2"';
  if (/index_num/.test(t)) return '1';
  if (/value/.test(t)) return 'A2';
  return 'A2';
};

const mapMathToken = (token) => {
  const t = normalizeToken(token);
  if (/sum_range/.test(t)) return 'E2:E16';
  if (/criteria_range|range/.test(t)) return 'B2:B16';
  if (/criteria/.test(t)) return '"Digital"';
  if (/number2|divisor|denominator/.test(t)) return 'B3';
  if (/num_digits|significance|multiple|k|quart|rows|columns|step|start/.test(t)) return 'B9';
  if (/array|values?|ref/.test(t)) return 'B2:B8';
  if (/^numbers$/.test(t)) return 'B2:B8';
  if (/number1|number|value/.test(t)) return 'B2';
  return 'B2';
};

const mapDynamicToken = (token) => {
  const t = normalizeToken(token);
  if (/row_fields/.test(t)) return 'B2:B13';
  if (/col_fields/.test(t)) return 'C2:C13';
  if (/values/.test(t)) return 'D2:D13';
  if (/function/.test(t)) return 'SUM';
  if (/row_num|col_num|row_number|column_number|rows|columns|wrap_count/.test(t)) return '2';
  if (/array|data|vector/.test(t)) return 'A2:E13';
  if (/lambda|calculation/.test(t)) return 'LAMBDA(x,x*2)';
  if (/name1/.test(t)) return 'total';
  if (/name_value/.test(t)) return 'SUM(D2:D13)';
  if (/pattern/.test(t)) return '"[0-9]+"';
  if (/replacement/.test(t)) return '"000"';
  if (/source_language/.test(t)) return '"id"';
  if (/target_language/.test(t)) return '"en"';
  if (/text/.test(t)) return 'A2';
  return 'A2:E13';
};

const mapWebToken = (token) => {
  const t = normalizeToken(token);
  if (/xml/.test(t)) return 'A2';
  if (/xpath/.test(t)) return 'B2';
  if (/url/.test(t)) return 'C2';
  if (/text/.test(t)) return 'D2';
  return 'C2';
};

const mapCubeToken = (token) => {
  const t = normalizeToken(token);
  if (/connection/.test(t)) return 'B2';
  if (/kpi/.test(t)) return 'B6';
  if (/property/.test(t)) return 'B7';
  if (/set/.test(t)) return 'B4';
  if (/rank/.test(t)) return 'B5';
  if (/member/.test(t)) return 'B3';
  if (/caption/.test(t)) return '"Demo"';
  return 'B2';
};

const mapAddinToken = (token) => {
  const t = normalizeToken(token);
  if (/module/.test(t)) return 'A2';
  if (/procedure/.test(t)) return 'B2';
  if (/type/.test(t)) return 'C2';
  if (/connection/.test(t)) return 'D2';
  if (/query/.test(t)) return 'E2';
  if (/number|source|target/.test(t)) return t.includes('number') ? 'B5' : 'B6';
  return 'A2';
};


const mapStatsSeriesToken = (token) => {
  const t = normalizeToken(token);
  if (/array2|known_x|prob_range|bins_array/.test(t)) return 'B2:B8';
  if (/array|known_y|values|data_array|number1|ref/.test(t)) return 'A2:A8';
  if (/number|x/.test(t)) return 'A4';
  if (/k|quart|alpha|significance|order|sigma/.test(t)) return 'B9';
  return 'A2:A8';
};

const mapStatsActualExpectedToken = (token) => {
  const t = normalizeToken(token);
  if (/expected/.test(t)) return 'B2:B6';
  if (/actual|array|values|number1|ref/.test(t)) return 'A2:A6';
  return 'A2:A6';
};

const mapStatsBinomToken = (token) => {
  const t = normalizeToken(token);
  if (/number_s2/.test(t)) return 'B6';
  if (/sample_s/.test(t)) return 'B7';
  if (/number_sample/.test(t)) return 'B8';
  if (/population_s/.test(t)) return 'B9';
  if (/number_pop/.test(t)) return 'B10';
  if (/number_s/.test(t)) return 'B2';
  if (/trials/.test(t)) return 'B3';
  if (/probability_s|probability/.test(t)) return 'B4';
  if (/cumulative/.test(t)) return 'B5';
  if (/alpha/.test(t)) return 'B11';
  return 'B2';
};

const mapStatsNormalToken = (token) => {
  const t = normalizeToken(token);
  if (/probability/.test(t)) return 'B6';
  if (/z/.test(t)) return 'B7';
  if (/x/.test(t)) return 'B2';
  if (/mean/.test(t)) return 'B3';
  if (/standard|sigma/.test(t)) return 'B4';
  if (/cumulative/.test(t)) return 'B5';
  return 'B2';
};

const mapStatsBetaGammaToken = (token) => {
  const t = normalizeToken(token);
  if (/probability/.test(t)) return 'B2';
  if (/x|lambda|mean/.test(t)) return 'B2';
  if (/alpha/.test(t)) return 'B3';
  if (/beta/.test(t)) return 'B4';
  if (/cumulative/.test(t)) return 'B5';
  if (/lower|a/.test(t)) return 'B6';
  if (/upper|b/.test(t)) return 'B7';
  if (/prob_range/.test(t)) return 'B2:B6';
  if (/x_range/.test(t)) return 'A2:A6';
  return 'B2';
};

const mapStatsFreedomToken = (token) => {
  const t = normalizeToken(token);
  if (/probability/.test(t)) return 'B2';
  if (/x/.test(t)) return 'B2';
  if (/deg_freedom1/.test(t)) return 'B3';
  if (/deg_freedom2/.test(t)) return 'B4';
  if (/deg_freedom/.test(t)) return 'B3';
  if (/tails|type|cumulative/.test(t)) return 'B5';
  return 'B2';
};

const mapperByTable = {
  statsNegBinom: mapStatsToken,
  statsBinom: mapStatsBinomToken,
  statsNormal: mapStatsNormalToken,
  statsBetaGamma: mapStatsBetaGammaToken,
  statsFreedom: mapStatsFreedomToken,
  statsActualExpected: mapStatsActualExpectedToken,
  statsSeriesCompact: mapStatsSeriesToken,
  statsParameter: mapStatsToken,
  financeParameter: mapFinanceToken,
  engineeringParameter: mapEngineeringToken,
  textPractice: mapTextToken,
  datePractice: mapDateToken,
  informationMixed: mapInfoToken,
  databaseMini: mapDbToken,
  lookup: mapLookupToken,
  mathNumbers: mapMathToken,
  dynamic: mapDynamicToken,
  webParameter: mapWebToken,
  cubeParameter: mapCubeToken,
  addinParameter: mapAddinToken,
  logicalPractice: (token) => normalizeToken(token).includes('logical') ? 'B2>=75' : normalizeToken(token).includes('true') ? '"Lulus"' : '"Tidak Lulus"'
};

const tableForFormula = (formula) => {
  const name = upper(formula.name);
  if (specialPractice[name]?.tableKey) return specialPractice[name].tableKey;

  // Urutan ini sengaja dibuat ketat.
  // Beberapa function criteria seperti AVERAGEIF/COUNTIF ada di kategori Statistical,
  // tapi latihan mereka harus pakai tabel penjualan yang punya kolom kriteria dan nilai.
  if (criteriaFunctions.has(name)) return 'sales';
  if (lookupFunctions.has(name)) return name === 'HLOOKUP' ? 'lookupHorizontal' : 'lookup';
  if (dbFunctions.has(name)) return 'databaseMini';

  if (name === 'SUM' || name === 'PRODUCT' || name === 'SUMSQ' || name === 'SUMX2MY2' || name === 'SUMX2PY2' || name === 'SUMXMY2') return 'mathNumbers';
  if (name === 'COUNTBLANK' || name === 'COUNTA' || name === 'ISBLANK' || name === 'ISTEXT' || name === 'ISNUMBER' || name === 'ISERROR' || name === 'ISNA' || name === 'ISFORMULA' || name === 'TYPE' || name === 'N' || name === 'CELL') return 'informationMixed';

  if (confidenceFunctions.has(name)) return 'statsNormal';
  if (actualExpectedFunctions.has(name)) return 'statsActualExpected';
  if (pairedSeriesFunctions.has(name)) return 'statsSeriesCompact';
  if (binomFamilyFunctions.has(name)) return 'statsBinom';
  if (normalFamilyFunctions.has(name)) return 'statsNormal';
  if (betaGammaFunctions.has(name)) return 'statsBetaGamma';
  if (freedomTestFunctions.has(name)) return 'statsFreedom';
  if (statisticalSeries.has(name)) return 'statsSeriesCompact';
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return 'statsSeriesCompact';

  return tableByCategory[formula.category] || 'addinParameter';
};

const cellValueByTable = {
  statsNegBinom: { B2: 3, B3: 5, B4: 0.4, B5: 'FALSE' },
  statsBinom: { B2: 6, B3: 10, B4: 0.4, B5: 'FALSE', B6: 8, B7: 4, B8: 8, B9: 20, B10: 30, B11: 0.8 },
  statsNormal: { B2: 42, B3: 40, B4: 1.5, B5: 'TRUE', B6: 0.8, B7: 1.25 },
  statsBetaGamma: { B2: 0.5, B3: 8, B4: 10, B5: 'TRUE', B6: 0, B7: 1 },
  statsFreedom: { B2: 2.1, B3: 10, B4: 12, B5: 2 },
  statsSeriesCompact: { A4: 77, B9: 2 },
  statsActualExpected: {},
};

const hardcodeForRef = (ref, tableKey = '') => {
  if (/^".*"$/.test(ref) || /^(TRUE|FALSE|SUM|LAMBDA|total)$/i.test(ref)) return ref;
  if (/^\d+(\.\d+)?%?/.test(ref)) return ref;
  const scoped = cellValueByTable[tableKey] || {};
  const v = scoped[ref] !== undefined ? scoped[ref] : cellValue[ref];
  if (v !== undefined) return typeof v === 'string' && !/^(TRUE|FALSE)$/i.test(v) ? `"${v}"` : String(v);
  if (ref.includes(':')) return ref;
  return ref;
};

const refsFromFormat = (formula) => {
  const name = upper(formula.name);
  const special = specialPractice[name];
  if (special) return special.refs;
  const format = auditedFormat(formula);
  const args = rootFormatArgs(format);
  const required = args.filter((arg) => !/^\[.*\]$/.test(arg) && !/^\.\.\.$/.test(arg) && !/argument\d*/i.test(arg));
  const limited = (required.length ? required : args.slice(0, 1)).slice(0, 5);
  const tableKey = tableForFormula(formula);
  const mapper = mapperByTable[tableKey] || mapDynamicToken;
  return limited.map((arg) => mapper(arg, name));
};

const formulaExpression = (formula, refs = refsFromFormat(formula)) => `=${formula.name}(${refs.join(',')})`;
const acceptedHardcode = (formula, refs = refsFromFormat(formula)) => {
  const special = specialPractice[upper(formula.name)];
  if (special?.hardcodes) return [`=${formula.name}(${special.hardcodes.join(',')})`];
  const tableKey = tableForFormula(formula);
  const hard = refs.map((ref) => hardcodeForRef(ref, tableKey));
  return hard.some((v, i) => v !== refs[i]) ? [`=${formula.name}(${hard.join(',')})`] : [];
};

const requiredRefsFromArgs = (args = []) => args.filter((arg) => /^\$?[A-Z]+\$?\d+(?::\$?[A-Z]+\$?\d+)?$/i.test(arg));
const requiredTextsFromArgs = (args = []) => args.filter((arg) => /^".*"$/.test(arg)).map((arg) => arg.replace(/^"|"$/g, ''));

const actionByCategory = (formula) => {
  const category = formula.category;
  if (category === 'Text') return 'mengolah teks seperti nama, kode, invoice, atau email';
  if (category === 'Date and Time') return 'mengolah tanggal atau jam';
  if (category === 'Financial') return 'menghitung cicilan, bunga, nilai sekarang, atau nilai masa depan';
  if (category === 'Engineering') return 'mengolah angka teknik, satuan, bilangan biner, atau bilangan kompleks';
  if (category === 'Compatibility') return 'membaca file Excel lama yang masih memakai nama rumus lama';
  if (category === 'Cube') return 'mengambil data dari Data Model atau cube';
  if (category === 'Web') return 'mengolah data web seperti URL atau XML';
  if (category === 'Database') return 'mengambil hasil dari tabel database kecil berdasarkan kriteria';
  if (category === 'Information') return 'mengecek jenis isi cell';
  if (category === 'Lookup and Reference') return 'mencari atau mengambil data dari tabel referensi';
  if (category === 'Dynamic Array') return 'membuat hasil yang bisa melebar otomatis';
  if (category === 'Statistical') return 'menganalisis data angka, sebaran, atau peluang';
  if (category === 'Logical') return 'membuat keputusan dari kondisi benar/salah';
  if (category === 'Math and Trigonometry') return 'menghitung angka dari data yang dipilih';
  return `mencoba struktur dasar ${formula.name}`;
};

const ensureQuestionMark = (text = '') => {
  const value = String(text || '').trim().replace(/[.。]+$/, '');
  return /[?？]$/.test(value) ? value : `${value}?`;
};

const makeBasicQuestion = (formula, refs = []) => {
  const name = upper(formula.name);
  if (specialPractice[name]?.question) {
    const raw = specialPractice[name].question
      .replace(/^Hitung\s+/i, 'Berapa hasil ')
      .replace(/^Cari\s+/i, 'Berapa nilai ')
      .replace(/^Ambil\s+/i, 'Apa hasil yang diambil dari ')
      .replace(/^Ubah\s+/i, 'Apa hasil perubahan ')
      .replace(/^Coba struktur\s+/i, 'Bagaimana struktur ');
    return ensureQuestionMark(raw);
  }

  if (name === 'SUM') return 'Berapa total keseluruhan dari kolom Angka pada tabel?';
  if (name === 'AVERAGE') return 'Berapa rata-rata angka dari range yang ditentukan pada tabel?';
  if (name === 'MIN') return 'Berapa nilai terkecil dari range angka pada tabel?';
  if (name === 'MAX') return 'Berapa nilai terbesar dari range angka pada tabel?';
  if (name === 'COUNT') return 'Berapa banyak cell berisi angka pada range yang ditentukan?';
  if (name === 'COUNTA') return 'Berapa banyak cell yang berisi data pada tabel campuran?';
  if (name === 'COUNTBLANK') return 'Berapa banyak cell kosong pada tabel campuran?';

  if (criteriaFunctions.has(name)) {
    if (name === 'COUNTIF') return 'Berapa jumlah data penjualan yang memenuhi satu kriteria pada tabel?';
    if (name === 'COUNTIFS') return 'Berapa jumlah data penjualan yang memenuhi dua kriteria sekaligus?';
    if (name === 'SUMIF') return 'Berapa total penjualan untuk satu kriteria yang tersedia pada tabel?';
    if (name === 'SUMIFS') return 'Berapa total penjualan untuk kombinasi kategori dan kota yang tersedia pada tabel?';
    if (name === 'AVERAGEIF') return 'Berapa rata-rata nilai penjualan untuk satu kriteria yang tersedia pada tabel?';
    if (name === 'AVERAGEIFS') return 'Berapa rata-rata nilai penjualan untuk dua kriteria sekaligus?';
    if (name === 'MAXIFS') return 'Berapa nilai penjualan terbesar yang memenuhi kriteria pada tabel?';
    if (name === 'MINIFS') return 'Berapa nilai penjualan terkecil yang memenuhi kriteria pada tabel?';
  }

  if (lookupFunctions.has(name)) {
    if (name === 'VLOOKUP') return 'Apa data produk yang ditemukan dari master produk berdasarkan kode pada tabel transaksi?';
    if (name === 'HLOOKUP') return 'Apa data produk yang ditemukan dari tabel master horizontal berdasarkan kode produk?';
    if (name === 'XLOOKUP') return 'Apa nilai yang perlu diambil dari tabel master berdasarkan lookup value yang tersedia?';
    if (name === 'MATCH' || name === 'XMATCH') return 'Di posisi ke berapa lookup value ditemukan pada kolom master?';
    if (name === 'INDEX') return 'Apa nilai yang muncul dari perpotongan baris dan kolom pada tabel referensi?';
    if (name === 'INDEX MATCH') return 'Apa nilai yang diambil saat INDEX digabung dengan MATCH pada tabel master?';
    return `Apa hasil pencarian ${formula.name} dari tabel referensi yang tersedia?`;
  }

  if (dbFunctions.has(name)) return `Berapa hasil ${formula.name} dari database mini berdasarkan kriteria yang tersedia?`;
  if (formula.category === 'Financial') return `Berapa hasil perhitungan ${formula.name} dari parameter keuangan pada tabel?`;
  if (formula.category === 'Engineering') return `Apa hasil ${formula.name} dari parameter teknik yang tersedia pada tabel?`;
  if (formula.category === 'Web') return `Apa hasil atau struktur ${formula.name} dari contoh data web/XML yang tersedia?`;
  if (formula.category === 'Cube') return `Bagaimana struktur ${formula.name} yang benar untuk contoh connection/member pada tabel?`;
  if (formula.category === 'Text') return `Apa hasil ${formula.name} saat diterapkan pada teks yang tersedia di tabel?`;
  if (formula.category === 'Date and Time') return `Apa hasil ${formula.name} dari tanggal atau jam yang tersedia di tabel?`;
  if (formula.category === 'Logical') return `Apa hasil keputusan ${formula.name} dari kondisi yang tersedia di tabel?`;
  if (formula.category === 'Information') return `Apa hasil pengecekan ${formula.name} terhadap isi cell pada tabel campuran?`;
  if (formula.category === 'Dynamic Array') return `Apa hasil array dari ${formula.name} berdasarkan data latihan yang tersedia?`;
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return `Berapa hasil ${formula.name} dari parameter statistik yang relevan pada tabel?`;
  return `Apa hasil ${formula.name} dari data latihan yang sudah disiapkan?`;
};

const makeQuestion = (formula, refs) => makeBasicQuestion(formula, refs);

const makeLogic = (formula, refs = [], texts = []) => {
  const name = upper(formula.name);
  const category = formula.category;
  const ref1 = refs[0] || 'data pertama yang diminta soal';
  const ref2 = refs[1] || 'data kedua yang diminta soal';
  const ref3 = refs[2] || 'data hasil/angka yang diminta soal';
  const ref4 = refs[3] || 'kriteria kedua dari soal';
  const text1 = String(texts?.[0] || '').replace(/^"|"$/g, '').trim();
  const text2 = String(texts?.[1] || '').replace(/^"|"$/g, '').trim();
  const criteria1 = text1 ? `“${text1}”` : 'kriteria dari soal';
  const criteria2 = text2 ? `“${text2}”` : 'kriteria kedua dari soal';

  if (specialPractice[name]?.logic) return specialPractice[name].logic;

  if (name === 'COUNTIF') {
    return `COUNTIF dipakai saat soal meminta jumlah data dengan satu syarat. Pilih range yang berisi data kriteria (${ref1}), lalu isi kriteria ${criteria1}. Karena hanya menghitung baris yang cocok, rumus ini tidak butuh range angka hasil.`;
  }
  if (name === 'SUMIF') {
    return `SUMIF dipakai saat soal meminta total angka dengan satu syarat. Pertama pilih range kriteria (${ref1}) untuk mencari ${criteria1}, lalu pilih range angka (${ref3}) yang akan dijumlahkan dari baris yang cocok.`;
  }
  if (name === 'AVERAGEIF') {
    return `AVERAGEIF dipakai saat soal meminta rata-rata dengan satu syarat. Pertama pilih range kriteria (${ref1}) untuk mencari ${criteria1}, lalu pilih range angka (${ref3}) yang akan dihitung rata-ratanya dari baris yang cocok.`;
  }
  if (name === 'COUNTIFS') {
    return `COUNTIFS dipakai saat soal meminta jumlah data dengan beberapa syarat sekaligus. Setiap syarat harus berpasangan: range kriteria lalu kriterianya. Di latihan ini cek ${criteria1} pada ${ref1}, lalu ${criteria2} pada ${ref3}.`;
  }
  if (['SUMIFS', 'AVERAGEIFS', 'MAXIFS', 'MINIFS'].includes(name)) {
    const action = name === 'SUMIFS' ? 'menjumlahkan' : name === 'AVERAGEIFS' ? 'menghitung rata-rata' : name === 'MAXIFS' ? 'mencari nilai terbesar' : 'mencari nilai terkecil';
    return `${name} dipakai untuk ${action} angka dengan beberapa syarat. Mulai dari range angka hasil (${ref1}), lalu isi pasangan syarat: range kriteria pertama (${ref2}) dengan ${criteria1}, kemudian range kriteria berikutnya (${ref4}) dengan ${criteria2}.`;
  }

  if (name === 'VLOOKUP') {
    return `VLOOKUP mencari data secara vertikal. Mulai dari lookup value (${ref1}), pilih table array (${ref2}), lalu tentukan nomor kolom hasil dari dalam table array. Untuk kode produk atau ID, gunakan exact match agar hasil tidak meleset.`;
  }
  if (name === 'HLOOKUP') {
    return `HLOOKUP mencari data secara horizontal. Mulai dari lookup value (${ref1}), pilih table array (${ref2}), lalu tentukan nomor baris hasil dari dalam table array. Lookup value harus berada di baris pertama range tersebut.`;
  }
  if (name === 'XLOOKUP') {
    return `XLOOKUP membaca tiga bagian utama: value yang dicari (${ref1}), range tempat mencari value tersebut (${ref2}), lalu range hasil yang ingin dikembalikan (${ref3}). Lookup array dan return array harus sejajar.`;
  }
  if (['MATCH', 'XMATCH'].includes(name)) {
    return `${name} tidak mengambil isi data, tetapi mencari posisi data dalam range. Tentukan value yang dicari (${ref1}), lalu pilih lookup array (${ref2}) sebagai tempat Excel mencari posisi value tersebut.`;
  }
  if (name === 'INDEX') {
    return `INDEX mengambil nilai dari titik tertentu di dalam range. Pilih array utama (${ref1}), lalu tentukan nomor baris dan nomor kolom jika dibutuhkan. Hasilnya berasal dari perpotongan baris dan kolom itu.`;
  }

  if (['SUM', 'AVERAGE', 'MIN', 'MAX'].includes(name)) {
    const action = name === 'SUM' ? 'menjumlahkan semua angka' : name === 'AVERAGE' ? 'menghitung rata-rata angka' : name === 'MIN' ? 'mencari angka terkecil' : 'mencari angka terbesar';
    return `${name} dipakai untuk ${action} dari range yang dipilih. Fokusnya adalah memilih range angka yang benar, misalnya ${ref1}. Kalau data berurutan, satu range sudah cukup dan tidak perlu mengetik cell satu per satu.`;
  }
  if (['COUNT', 'COUNTA', 'COUNTBLANK'].includes(name)) {
    const meaning = name === 'COUNT' ? 'cell yang berisi angka' : name === 'COUNTA' ? 'cell yang terisi, baik angka maupun teks' : 'cell yang benar-benar kosong';
    return `${name} dipakai untuk menghitung ${meaning}. Pilih range yang ingin dicek (${ref1}), lalu pastikan jenis data di range itu sesuai dengan yang diminta soal.`;
  }
  if (name === 'IF') {
    return `IF bekerja seperti keputusan sederhana: cek kondisi terlebih dahulu, lalu keluarkan hasil jika kondisi benar dan hasil lain jika kondisi salah. Urutannya selalu kondisi, hasil jika benar, lalu hasil jika salah.`;
  }
  if (name === 'IFS') {
    return `IFS mengecek beberapa kondisi dari kiri ke kanan. Setiap kondisi harus langsung dipasangkan dengan hasilnya. Kondisi pertama yang benar akan menjadi hasil akhir, jadi urutan kondisi sangat berpengaruh.`;
  }

  if (category === 'Text') return `${name} mengolah teks. Tentukan teks utama terlebih dahulu (${ref1}), lalu isi parameter tambahan seperti jumlah karakter, posisi, teks yang dicari, atau teks pengganti sesuai format rumus.`;
  if (category === 'Date and Time') return `${name} bekerja dengan tanggal atau jam. Pilih tanggal/jam utama (${ref1}), lalu isi parameter tambahan seperti tanggal akhir, jumlah hari/bulan, atau tipe perhitungan jika diminta.`;
  if (category === 'Financial') return `${name} memakai parameter keuangan. Baca tabel dari atas ke bawah, lalu isi bagian seperti rate, periode, nilai pinjaman, pembayaran, atau nilai akhir sesuai urutan format. Perhatikan tanda minus untuk arus kas keluar.`;
  if (category === 'Statistical' || category === 'Compatibility') return `${name} memakai parameter statistik. Ambil parameter dari tabel sesuai urutan format, misalnya jumlah kejadian, peluang, rata-rata, standar deviasi, atau range data. Jangan memakai tabel umum jika argumennya adalah parameter statistik.`;
  if (category === 'Engineering') return `${name} memakai parameter teknik seperti angka, unit, basis bilangan, atau bilangan kompleks. Tentukan dulu jenis input yang diminta, lalu ambil cell/range yang sesuai dari tabel.`;
  if (category === 'Web') return `${name} memakai data web, URL, XML, atau teks yang perlu dibuat aman untuk URL. Pilih input yang relevan dari tabel, lalu susun argumen sesuai jenis data web yang diminta.`;
  if (category === 'Cube') return `${name} butuh connection dan member/set expression dari Data Model atau OLAP. Di website ini yang dilatih adalah struktur argumennya, jadi pilih connection/member dari tabel dan susun sesuai format.`;
  if (category === 'Database') return `${name} selalu memakai tiga bagian utama: database lengkap, field/kolom yang dihitung, dan criteria. Pilih ketiganya dari tabel agar Excel tahu data mana yang harus difilter dan dihitung.`;
  if (category === 'Information') return `${name} mengecek kondisi isi cell, misalnya kosong, angka, teks, error, formula, atau tipe data. Pilih cell yang ingin dicek, lalu pastikan rumusnya sesuai jenis pengecekan.`;
  if (category === 'Dynamic Array') return `${name} menghasilkan data yang bisa melebar ke beberapa cell. Tentukan array utama terlebih dahulu (${ref1}), lalu isi kondisi, urutan, jumlah baris/kolom, atau parameter array lain sesuai soal.`;
  return `${name} dipakai untuk menjawab soal berdasarkan data latihan. Tentukan hasil yang diminta, pilih input utama dari tabel (${ref1}), lalu susun argumen mengikuti urutan format rumus.`;
};

const cleanHintToken = (value = '') => String(value || '').replace(/^"|"$/g, '').trim();
const uniqueHintItems = (items = []) => [...new Set((items || []).filter(Boolean).map((item) => String(item).trim()).filter(Boolean))];
const listHintItems = (items = []) => uniqueHintItems(items).join(', ');

const hintValue = (value = '') => cleanHintToken(value) ? `“${cleanHintToken(value)}”` : 'value dari soal';
const hintList = (items = []) => listHintItems(items) || 'data yang diminta soal';
const hintQuestionGoal = (formula) => {
  const name = upper(formula.name);
  if (['SUM','SUMIF','SUMIFS'].includes(name)) return 'total/jumlah';
  if (['AVERAGE','AVERAGEIF','AVERAGEIFS'].includes(name)) return 'rata-rata';
  if (/COUNT/.test(name)) return 'jumlah data';
  if (lookupFunctions.has(name)) return 'hasil pencarian dari tabel referensi';
  if (formula.category === 'Text') return 'hasil olahan teks';
  if (formula.category === 'Date and Time') return 'hasil tanggal atau jam';
  if (formula.category === 'Financial') return 'hasil perhitungan keuangan';
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return 'hasil statistik dari parameter yang tersedia';
  if (formula.category === 'Logical') return 'hasil keputusan TRUE/FALSE atau pilihan kondisi';
  return 'hasil akhir sesuai soal';
};

const makeHints = (formula, refs = [], texts = []) => {
  const name = upper(formula.name);
  const hints = [];
  const add = (hint) => {
    const value = String(hint || '').trim();
    if (value && !hints.includes(value)) hints.push(value);
  };
  const ref1 = refs[0];
  const ref2 = refs[1];
  const ref3 = refs[2];
  const ref4 = refs[3];
  const text1 = cleanHintToken(texts[0]);
  const text2 = cleanHintToken(texts[1]);

  add(`Soalnya mencari ${hintQuestionGoal(formula)}. Baca tabel dulu, lalu tentukan range/cell mana yang menjadi bahan hitung atau bahan pengecekan.`);

  if (criteriaFunctions.has(name)) {
    if (name === 'COUNTIF') {
      add(`Select ${ref1 || 'range kriteria'} sebagai kolom/range yang dicek.`);
      add(`Masukkan kriteria ${hintValue(text1)} persis seperti value di tabel.`);
      add('COUNTIF tidak butuh range angka hasil karena tugasnya hanya menghitung jumlah data yang cocok.');
      add('Urutannya: range kriteria, lalu kriteria. Jangan pakai COUNT untuk soal bersyarat.');
    } else if (name === 'SUMIF') {
      add(`Select ${ref1 || 'range kriteria'} sebagai range yang berisi syarat ${hintValue(text1)}.`);
      add(`Masukkan kriteria ${hintValue(text1)} dari soal.`);
      add(`Select ${ref3 || ref2 || 'range angka'} sebagai angka yang akan dijumlahkan.`);
      add('Urutannya: range kriteria, kriteria, lalu range angka. Jangan mulai dari range angka.');
    } else if (name === 'AVERAGEIF') {
      add(`Soal ini mencari rata-rata dengan satu syarat. Select ${ref1 || 'range kriteria'} sebagai range berisi syarat ${hintValue(text1)}.`);
      add(`Masukkan kriteria ${hintValue(text1)} persis seperti di tabel.`);
      add(`Select ${ref3 || ref2 || 'range angka'} sebagai angka yang ingin dihitung rata-ratanya.`);
      add('Urutannya: range kriteria, kriteria, lalu range angka.');
    } else if (name === 'COUNTIFS') {
      add(`Syarat pertama: select ${ref1 || 'range kriteria pertama'}, lalu masukkan ${hintValue(text1)}.`);
      add(`Syarat kedua: select ${ref3 || ref2 || 'range kriteria kedua'}, lalu masukkan ${hintValue(text2)}.`);
      add('COUNTIFS menghitung baris yang memenuhi semua syarat, jadi tidak perlu range angka hasil.');
    } else {
      const action = name === 'SUMIFS' ? 'dijumlahkan' : name === 'AVERAGEIFS' ? 'dihitung rata-ratanya' : name === 'MAXIFS' ? 'dicari nilai terbesarnya' : 'dicari nilai terkecilnya';
      add(`Select ${ref1 || 'range angka'} sebagai range hasil yang akan ${action}.`);
      add(`Syarat pertama: select ${ref2 || 'range kriteria pertama'}, lalu masukkan ${hintValue(text1)}.`);
      add(`Syarat kedua: select ${ref4 || ref3 || 'range kriteria kedua'}, lalu masukkan ${hintValue(text2)}.`);
      add(`Urutan ${name}: range hasil dulu, lalu pasangan range kriteria dan kriteria.`);
    }
  } else if (lookupFunctions.has(name)) {
    if (name === 'VLOOKUP') {
      add(`Tentukan lookup value dari ${ref1 || 'cell lookup'} sebagai data kunci yang dicari.`);
      add(`Select table array ${ref2 || 'range master'}. Kolom pertama table array harus berisi lookup value.`);
      add('Tentukan column index dari table array, bukan dari seluruh worksheet.');
      add('Gunakan exact match untuk kode/nama yang harus sama persis.');
    } else if (name === 'HLOOKUP') {
      add(`Tentukan lookup value ${text1 ? hintValue(text1) : ref1 || 'dari soal'} terlebih dahulu.`);
      add(`Select table array ${ref2 || 'range horizontal'}. Lookup value harus berada di baris pertama range itu.`);
      add('Tentukan row index dari table array, bukan dari nomor baris worksheet.');
      add('Gunakan exact match supaya hasil tidak meleset.');
    } else if (name === 'XLOOKUP') {
      add(`Tentukan lookup value ${ref1 || 'dari soal'} terlebih dahulu.`);
      add(`Select lookup array ${ref2 || 'range pencarian'} sebagai tempat mencari lookup value.`);
      add(`Select return array ${ref3 || 'range hasil'} sebagai kolom/range yang hasilnya ingin diambil.`);
      add('Lookup array dan return array harus sejajar.');
    } else if (name === 'MATCH' || name === 'XMATCH') {
      add(`Tentukan value yang dicari: ${ref1 || hintValue(text1)}.`);
      add(`Select lookup array ${ref2 || 'range pencarian'} sebagai tempat mencari posisinya.`);
      add('Hasil MATCH/XMATCH adalah nomor posisi, bukan isi datanya.');
    } else if (name === 'INDEX') {
      add(`Select array utama ${ref1 || 'range tabel'} sebagai tempat mengambil hasil.`);
      add('Isi nomor baris, lalu nomor kolom jika format memintanya.');
      add('INDEX mengambil hasil dari perpotongan baris dan kolom.');
    } else {
      add(`Tentukan data kunci dan range referensi. Bagian pentingnya: ${hintList(refs)}.`);
      if (texts.length) add(`Parameter/value dari soal: ${hintList(texts)}.`);
    }
  } else if (['SUM','AVERAGE','MIN','MAX'].includes(name)) {
    const action = name === 'SUM' ? 'total keseluruhan' : name === 'AVERAGE' ? 'rata-rata' : name === 'MIN' ? 'angka terkecil' : 'angka terbesar';
    add(`Soal meminta ${action}. Select ${ref1 || 'range angka'} sebagai range angka utama.`);
    add(`Pastikan range yang dipilih berisi angka yang relevan, bukan kolom teks atau header yang tidak diminta.`);
    add(`Untuk ${name}, satu range yang tepat sudah cukup jika datanya berurutan.`);
  } else if (['COUNT','COUNTA','COUNTBLANK'].includes(name)) {
    add(`Select ${ref1 || 'range data'} sebagai area yang ingin dihitung.`);
    add(name === 'COUNT' ? 'COUNT hanya menghitung angka.' : name === 'COUNTA' ? 'COUNTA menghitung cell yang terisi, baik angka maupun teks.' : 'COUNTBLANK hanya menghitung cell kosong.');
    add('Pilih rumus yang sesuai dengan jenis data yang ingin dihitung.');
  } else if (name === 'IF') {
    add('Tentukan kondisi yang mau diuji dulu.');
    add(`Isi kondisi sebagai argumen pertama, misalnya ${ref1 || 'cell nilai dibandingkan dengan batas'}.`);
    add(`Isi hasil jika benar, lalu hasil jika salah. Contoh value: ${hintList(texts)}.`);
  } else if (formula.category === 'Text') {
    add(`Select teks utama dari ${ref1 || 'cell teks utama'}.`);
    add('Tentukan apakah rumus ini mengambil bagian teks, mencari teks, mengganti teks, menggabungkan teks, atau merapikan teks.');
    if (refs.length > 1) add(`Isi parameter berikutnya sesuai urutan: ${hintList(refs.slice(1))}.`);
  } else if (formula.category === 'Date and Time') {
    add(`Select tanggal/jam utama dari ${ref1 || 'cell tanggal atau jam'}.`);
    add('Pastikan input dikenali Excel sebagai tanggal/jam, bukan teks biasa.');
    if (refs.length > 1) add(`Isi parameter tambahan sesuai soal: ${hintList(refs.slice(1))}.`);
  } else if (formula.category === 'Financial') {
    add('Baca parameter keuangan di tabel: rate, nper, pv, pmt, fv, dan type.');
    add(`Mulai dari ${ref1 || 'rate'}, lalu lanjut ke ${ref2 || 'nper'}, lalu ${ref3 || 'nilai utama'}.`);
    add('Perhatikan tanda plus/minus karena Excel membedakan uang keluar dan uang masuk.');
  } else if (formula.category === 'Statistical' || formula.category === 'Compatibility') {
    add('Pakai tabel parameter statistik yang sesuai, bukan tabel siswa atau penjualan umum.');
    add(refs.length ? `Ambil parameter sesuai urutan: ${hintList(refs)}.` : 'Cocokkan parameter statistik dengan format rumus.');
    add('Jangan ganti parameter dengan range yang tidak berhubungan.');
  } else if (formula.category === 'Engineering') {
    add('Cek jenis inputnya dulu: angka, unit, bilangan biner, atau bilangan kompleks.');
    add(refs.length ? `Ambil parameter dari tabel sesuai urutan: ${hintList(refs)}.` : 'Isi parameter teknik sesuai format rumus.');
  } else {
    add(refs.length ? `Ambil data dari tabel sesuai urutan: ${hintList(refs)}.` : `Tentukan input utama untuk ${formula.name}.`);
    if (texts.length) add(`Value/kriteria yang perlu ditulis: ${hintList(texts)}.`);
  }

  add('Setelah semua bagian dipilih, susun argumen mengikuti urutan format rumus.');
  add('Terakhir cek tanda =, separator (; atau ,), dan kurung penutup.');
  return hints.slice(0, 7);
};

export function generateDetailedExerciseForFormula(formula) {
  const refs = refsFromFormat(formula);
  const expectedFormula = formulaExpression(formula, refs);
  const acceptedFormulas = acceptedHardcode(formula, refs);
  const requiredRefs = requiredRefsFromArgs(refs);
  const requiredTexts = requiredTextsFromArgs(refs);
  const tableKey = tableForFormula(formula);
  const minArgs = Math.max(0, refs.length);
  const format = auditedFormat(formula);

  return {
    id: formula.id,
    formulaName: formula.name,
    title: `Latihan ${formula.name}`,
    tableKey,
    activeCell: tableKey === 'lookup' ? 'B2' : tableKey.startsWith('stats') ? 'C2' : 'G2',
    question: makeQuestion(formula, refs),
    logicPrompt: makeLogic(formula, refs, requiredTexts),
    expectedFormula,
    acceptedFormulas,
    requiredRefs,
    requiredTexts,
    argumentCount: { min: minArgs, max: null },
    highlightRanges: requiredRefs.length ? requiredRefs : [],
    allowedFunctions: [formula.name],
    hints: makeHints(formula, refs, requiredTexts),
    successExplanation: `Nah, ini sudah tepat. ${formula.name} memakai data dari tabel yang sesuai dengan format rumusnya.`,
    formulaParts: [
      `${formula.name} adalah nama rumus yang sedang dilatih.`,
      `Format rumus: =${format}`,
      refs.length ? `Argumen latihan ini diambil dari: ${refs.join(' | ')}.` : 'Rumus ini tidak membutuhkan argumen tambahan.',
      acceptedFormulas.length ? 'Versi hardcode juga diterima, tapi versi referensi cell lebih bagus untuk latihan.' : 'Gunakan referensi cell/range supaya rumus mudah dipakai ulang.'
    ],
    commonMistakes: [
      'Lupa tanda = di awal rumus.',
      'Mengambil data dari tabel yang tidak sesuai dengan argumen rumus.',
      'Argumen belum lengkap atau urutannya kebalik.',
      'Value/kriteria yang ditulis tidak ada di tabel.',
      'Separator tidak sesuai mode Excel Indonesia atau English.'
    ],
    nextUseCase: `Pakai pola ini saat kamu butuh ${actionByCategory(formula)}.`,
    generatedBy: 'formulaPracticeFactoryAligned',
    audit: {
      generated: true,
      status: 'aligned-practice-ready',
      tableKey,
      format,
      expectedFormula,
      acceptedFormulas,
      note: 'Latihan dibuat dari mapping kategori + format rumus. Tabel, soal, hint, dan expected answer dibuat saling nyambung.'
    }
  };
}


const variantLabels = [
  'Basic',
  'Criteria',
  'Multi-condition',
  'Reference',
  'Mixed input',
  'Challenge'
];

const salesScenarios = [
  { label: 'kategori Digital', criteria1: '"Digital"', criteria2: '"Jakarta"', range: 'B2:B16', secondRange: 'C2:C16', valueRange: 'E2:E16', altValueRange: 'D2:D16' },
  { label: 'kategori Fashion', criteria1: '"Fashion"', criteria2: '"Bandung"', range: 'B2:B16', secondRange: 'C2:C16', valueRange: 'E2:E16', altValueRange: 'D2:D16' },
  { label: 'kota Jakarta', criteria1: '"Jakarta"', criteria2: '"Digital"', range: 'C2:C16', secondRange: 'B2:B16', valueRange: 'E2:E16', altValueRange: 'D2:D16' },
  { label: 'kota Surabaya', criteria1: '"Surabaya"', criteria2: '"Fashion"', range: 'C2:C16', secondRange: 'B2:B16', valueRange: 'E2:E16', altValueRange: 'D2:D16' },
  { label: 'kategori Education', criteria1: '"Education"', criteria2: '"Jakarta"', range: 'B2:B16', secondRange: 'C2:C16', valueRange: 'D2:D16', altValueRange: 'E2:E16' },
  { label: 'qty lebih dari 10', criteria1: '">10"', criteria2: '"Digital"', range: 'D2:D16', secondRange: 'B2:B16', valueRange: 'E2:E16', altValueRange: 'D2:D16' }
];

const lookupScenarios = [
  { lookup: 'A2', hard: '"P-001"', table: 'E2:I8', col: '2', hRow: '3', returnRange: 'F2:F8', label: 'nama produk P-001' },
  { lookup: 'A3', hard: '"P-003"', table: 'E2:I8', col: '3', hRow: '4', returnRange: 'G2:G8', label: 'harga produk P-003' },
  { lookup: 'A4', hard: '"P-005"', table: 'E2:I8', col: '4', hRow: '5', returnRange: 'H2:H8', label: 'kategori produk P-005' },
  { lookup: 'A5', hard: '"P-002"', table: 'E2:I8', col: '5', hRow: '5', returnRange: 'I2:I8', label: 'stok produk P-002' },
  { lookup: 'A6', hard: '"P-004"', table: 'E2:I8', col: '2', hRow: '3', returnRange: 'F2:F8', label: 'nama produk P-004' },
  { lookup: 'A7', hard: '"P-006"', table: 'E2:I8', col: '3', hRow: '4', returnRange: 'G2:G8', label: 'harga produk P-006' }
];

const statNegBinomScenarios = [
  { f: 3, s: 5, p: 0.4, cumulative: 'FALSE' },
  { f: 2, s: 4, p: 0.35, cumulative: 'FALSE' },
  { f: 4, s: 6, p: 0.5, cumulative: 'TRUE' },
  { f: 1, s: 3, p: 0.25, cumulative: 'FALSE' },
  { f: 5, s: 7, p: 0.45, cumulative: 'TRUE' },
  { f: 6, s: 8, p: 0.6, cumulative: 'FALSE' }
];

const financeScenarios = [
  { rate: 0.0066667, nper: 12, pv: 10000000, pmt: -900000, fv: 1000000, type: 0 },
  { rate: 0.0075, nper: 24, pv: 15000000, pmt: -750000, fv: 2000000, type: 0 },
  { rate: 0.005, nper: 18, pv: 8000000, pmt: -500000, fv: 1500000, type: 1 },
  { rate: 0.01, nper: 10, pv: 12000000, pmt: -1000000, fv: 0, type: 0 },
  { rate: 0.004, nper: 36, pv: 20000000, pmt: -650000, fv: 3000000, type: 1 },
  { rate: 0.008, nper: 15, pv: 5000000, pmt: -400000, fv: 0, type: 0 }
];

function makeCompactTable(tableKey, variantIndex = 0) {
  const n = variantIndex % 6;
  if (tableKey === 'statsNegBinom') {
    const s = statNegBinomScenarios[n];
    return {
      title: `Parameter Negative Binomial ${n + 1}`,
      description: 'Tabel ini hanya berisi parameter yang memang dibutuhkan rumus negative binomial.',
      columns: ['Parameter', 'Nilai', 'Keterangan'],
      rows: [
        ['Jumlah gagal', s.f, 'Banyak gagal sebelum target berhasil tercapai'],
        ['Target berhasil', s.s, 'Jumlah berhasil yang ingin dicapai'],
        ['Peluang berhasil', s.p, 'Peluang berhasil tiap percobaan'],
        ['Cumulative', s.cumulative, 'TRUE untuk kumulatif, FALSE untuk titik peluang']
      ]
    };
  }
  if (tableKey === 'statsBinom') {
    const s = statNegBinomScenarios[n];
    return { title: `Parameter Binomial ${n + 1}`, description: 'Tabel ringkas untuk latihan binomial dan hypergeometric.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Jumlah berhasil', Math.max(1, s.s - 1), 'Jumlah sukses yang ingin dihitung'], ['Jumlah percobaan', s.s + s.f, 'Total percobaan'], ['Peluang berhasil', s.p, 'Peluang sukses tiap percobaan'], ['Cumulative', s.cumulative, 'TRUE kumulatif, FALSE peluang tepat'], ['Jumlah sukses kedua', Math.max(2, s.s), 'Batas atas jumlah sukses'], ['Sample success', 4, 'Sukses dalam sampel'], ['Number sample', 8, 'Ukuran sampel'], ['Population success', 20, 'Jumlah sukses di populasi'], ['Number population', 30, 'Ukuran populasi'], ['Alpha', 0.8, 'Parameter peluang inverse']] };
  }
  if (tableKey === 'statsNormal') {
    const rows = [[42,40,1.5,'TRUE',0.8,1.25],[38,35,2,'TRUE',0.75,0.9],[100,95,8,'FALSE',0.6,1.1],[70,75,5,'TRUE',0.85,1.35],[10,12,1.2,'FALSE',0.5,0],[55,50,6,'TRUE',0.95,1.65]][n];
    return { title: `Parameter Normal ${n + 1}`, description: 'Tabel ringkas untuk distribusi normal.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Nilai x', rows[0], 'Nilai yang sedang diuji'], ['Mean', rows[1], 'Rata-rata distribusi'], ['Standar deviasi', rows[2], 'Sebaran data'], ['Cumulative', rows[3], 'TRUE kumulatif, FALSE titik peluang'], ['Probability', rows[4], 'Peluang untuk rumus inverse'], ['Z-score', rows[5], 'Nilai z untuk normal standar']] };
  }
  if (tableKey === 'statsBetaGamma' || tableKey === 'statsFreedom' || tableKey === 'statsParameter') {
    const a = [[0.5,8,10,'TRUE',0,1,2],[0.25,3,6,'FALSE',0,1,1],[0.75,5,9,'TRUE',0,1,2],[1.2,10,12,'FALSE',0,2,1],[2.1,7,11,'TRUE',1,3,2],[0.9,4,8,'FALSE',0,1,1]][n];
    return { title: `Parameter Statistik ${n + 1}`, description: 'Parameter statistik dibuat ringkas agar tidak over.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Nilai x / probability', a[0], 'Nilai utama yang diuji'], ['Alpha / df 1', a[1], 'Parameter distribusi atau derajat bebas pertama'], ['Beta / df 2', a[2], 'Parameter distribusi atau derajat bebas kedua'], ['Cumulative / tails', a[3], 'Pilihan kumulatif atau sisi uji'], ['Lower bound', a[4], 'Batas bawah'], ['Upper bound', a[5], 'Batas atas'], ['Type / order', a[6], 'Parameter pilihan tambahan']] };
  }
  if (tableKey === 'statsActualExpected') {
    const offset = n * 2;
    return { title: `Data Aktual vs Ekspektasi ${n + 1}`, description: 'Data kecil untuk membandingkan hasil aktual dan ekspektasi.', columns: ['Data Aktual', 'Data Ekspektasi'], rows: [[82+offset,80+offset],[91-offset,90-offset],[68+offset,70+offset],[77,75],[73,72]] };
  }
  if (tableKey === 'statsSeriesCompact' || tableKey === 'students') {
    return { title: `Data Nilai Ringkas ${n + 1}`, description: 'Data angka ringkas untuk latihan statistik dan hitung dasar.', columns: ['Nilai A', 'Nilai B', 'Kategori'], rows: [[82+n,80,'A'],[91,90+n,'B'],[68+n,70,'A'],[77,75+n,'B'],[73+n,72,'A'],[88,85+n,'B'],[95,92,'A'],[64+n,66,'B'],[80,78+n,'A']] };
  }
  if (tableKey === 'financeParameter') {
    const s = financeScenarios[n];
    return { title: `Parameter Keuangan ${n + 1}`, description: 'Tabel ringkas untuk rumus keuangan.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Rate', s.rate, 'Bunga per periode'], ['Nper', s.nper, 'Jumlah periode'], ['PV', s.pv, 'Nilai sekarang / pinjaman'], ['PMT', s.pmt, 'Pembayaran berkala'], ['FV', s.fv, 'Nilai masa depan'], ['Type', s.type, '0 akhir periode, 1 awal periode']] };
  }
  if (tableKey === 'engineeringParameter') {
    return { title: `Parameter Teknik ${n + 1}`, description: 'Data singkat untuk konversi, angka basis, atau bilangan kompleks.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Angka', 10+n, 'Angka utama'], ['From unit', 'm', 'Unit asal'], ['To unit', n % 2 ? 'km' : 'cm', 'Unit tujuan'], ['Binary', '1010', 'Bilangan biner'], ['Complex 1', '3+4i', 'Bilangan kompleks pertama'], ['Complex 2', '2+1i', 'Bilangan kompleks kedua'], ['Real', 3+n, 'Bagian real'], ['Imaginary', 4, 'Bagian imajiner'], ['Places', 2, 'Jumlah digit']] };
  }
  if (tableKey === 'textPractice') {
    const rows = [['Agus Saputra','INV-2026-001','agus@email.com','-',2,4,'COACH'],['Sinta Lestari','PRD-DIG-002','sinta@email.com',' ',1,5,'EXCEL'],['Budi Santoso','ORD-7788-JKT','budi@email.com','/',5,3,'DATA'],['Nadia Putri','SKU-FSN-045','nadia@email.com','_',3,4,'FORMULA']];
    return { title: `Data Teks ${n + 1}`, description: 'Data teks untuk latihan nama, kode, invoice, dan email.', columns: ['Teks Utama', 'Kode / Invoice', 'Email', 'Pemisah', 'Start', 'Jumlah', 'Pengganti'], rows };
  }
  if (tableKey === 'datePractice') {
    return { title: `Data Tanggal & Jam ${n + 1}`, description: 'Data tanggal dan jam untuk latihan date/time.', columns: ['Tanggal Teks', 'Year', 'Month', 'Day', 'Holiday'], rows: [['2026-01-15',2026,1,15,'2026-01-01'],['2026-02-20',2026,2,20,'2026-03-11'],['2026-05-10',2026,5,10,'2026-05-01'],['08:30',8,30,0,'2026-12-25'],['17:45',17,45,0,'']] };
  }
  if (tableKey === 'logicalPractice') {
    return { title: `Data Kondisi ${n + 1}`, description: 'Data untuk latihan kondisi benar/salah.', columns: ['Nama', 'Nilai', 'Kehadiran', 'Pembayaran', 'Status'], rows: [['Agus',75+n,90,'Lunas',''],['Sinta',88,95,'Lunas',''],['Budi',65,80,'Belum',''],['Nadia',92,98,'Lunas',''],['Raka',70,60,'Belum','']] };
  }
  if (tableKey === 'databaseMini') {
    return { title: `Database Mini ${n + 1}`, description: 'Database kecil dengan area kriteria di kolom G.', columns: ['Nama', 'Kelas', 'Kategori', 'Nilai', 'Status', '', 'Status'], rows: [['Agus','X-A','Digital',82,'Lulus','','Lulus'],['Sinta','X-B','Fashion',91,'Lulus','',''],['Budi','X-A','Digital',68,'Tidak Lulus','',''],['Nadia','X-C','Education',77,'Lulus','',''],['Raka','X-B','Digital',73,'Tidak Lulus','','']] };
  }
  if (tableKey === 'webParameter') {
    return { title: `Data Web/XML ${n + 1}`, description: 'Data contoh untuk URL, XML, dan encoding.', columns: ['XML', 'XPath', 'URL', 'Teks URL'], rows: [['<root><title>Formula Coach</title></root>','//title','https://example.com/api','Formula Coach Excel'],['<root><city>Jakarta</city></root>','//city','https://example.com/data','Belajar Rumus Excel']] };
  }
  if (tableKey === 'cubeParameter') {
    return { title: `Contoh Cube/Data Model ${n + 1}`, description: 'Contoh argumen Cube. Hasil asli butuh Data Model/OLAP di Excel.', columns: ['Parameter', 'Nilai', 'Keterangan'], rows: [['Connection','ThisWorkbookDataModel','Nama koneksi'],['Member','[Products].[Category].[Digital]','Member expression'],['Set','[Products].[Category].Members','Set expression'],['Rank',1,'Urutan member'],['KPI','[Measures].[Sales]','Measure/KPI'],['Property','CAPTION','Properti member']] };
  }
  if (tableKey === 'addinParameter') {
    return { title: `Parameter Add-in ${n + 1}`, description: 'Contoh struktur untuk rumus add-in atau user defined.', columns: ['Module', 'Procedure', 'Type', 'Connection', 'Query', 'Number'], rows: [['MyAddin.xll','MyFunction','1','DSN=Demo','SELECT * FROM Sales',100],['FinanceAddin.xll','RateCalc','2','DSN=Finance','SELECT Rate',250]] };
  }
  if (tableKey === 'mathNumbers') {
    return { title: `Data Angka ${n + 1}`, description: 'Data angka ringkas untuk latihan math, pembulatan, pangkat, dan akar.', columns: ['Item', 'Angka', 'Pembanding'], rows: [['Data 1', 12.75 + n, 3], ['Data 2', -8.4 - n, 2], ['Data 3', 16 + n, 4], ['Data 4', 25, 5], ['Data 5', 7.5, 2], ['Data 6', 100, 10], ['Data 7', 64, 8], ['Digit / Kelipatan', 2, 5], ['Batas', 10, 2]] };
  }
  if (tableKey === 'sales' || tableKey === 'dynamic') {
    return { title: `Data Penjualan ${n + 1}`, description: 'Data latihan ringkas untuk angka, kategori, kota, qty, dan revenue.', columns: ['Produk', 'Kategori', 'Kota', 'Qty', 'Total Penjualan'], rows: [['Kaos Basic','Fashion','Jakarta',12+n,600000],['Ebook Excel','Digital','Bandung',8,400000],['Template CV','Digital','Jakarta',15,750000],['Topi Denim','Fashion','Surabaya',5,250000],['Preset Foto','Digital','Jakarta',20,1000000],['Hoodie','Fashion','Bandung',7,700000],['Kelas Excel','Education','Jakarta',10,1500000],['Sticker Pack','Digital','Surabaya',18,270000],['Totebag','Fashion','Jakarta',9,315000],['Mini Course','Education','Bandung',6,900000],['Mockup Pack','Digital','Jakarta',14,560000],['Jaket Coach','Fashion','Surabaya',4,800000],['Prompt AI','Digital','Jakarta',25,625000],['Webinar','Education','Jakarta',11,1100000],['Notebook','Stationery','Bandung',30,450000]] };
  }
  if (tableKey === 'lookup') {
    return { title: `Master Produk ${n + 1}`, description: 'Kolom A-C adalah transaksi. Kolom E-I adalah master produk.', columns: ['Kode Produk', 'Nama Produk', 'Qty', '', 'Master Kode', 'Master Nama', 'Harga', 'Kategori', 'Stok'], rows: [['P-001','',3,'','P-001','Kaos Basic',50000,'Fashion',120],['P-003','',2,'','P-002','Ebook Excel',50000,'Digital',999],['P-005','',5,'','P-003','Template CV',50000,'Digital',888],['P-002','',1,'','P-004','Topi Denim',50000,'Fashion',80],['P-004','',4,'','P-005','Preset Foto',50000,'Digital',777],['P-006','',2,'','P-006','Hoodie',100000,'Fashion',60],['P-007','',1,'','P-007','Kelas Excel',150000,'Education',40]] };
  }
  if (tableKey === 'lookupHorizontal') {
    return { title: `Master Produk Horizontal ${n + 1}`, description: 'Tabel horizontal untuk latihan HLOOKUP.', columns: ['Field', 'P-001', 'P-002', 'P-003', 'P-004', 'P-005', 'P-006', 'P-007'], rows: [['Nama Produk','Kaos Basic','Ebook Excel','Template CV','Topi Denim','Preset Foto','Hoodie','Kelas Excel'],['Harga',50000,50000,50000,50000,50000,100000,150000],['Kategori','Fashion','Digital','Digital','Fashion','Digital','Fashion','Education'],['Stok',120,999,888,80,777,60,40]] };
  }
  if (tableKey === 'informationMixed') {
    return { title: `Data Campuran ${n + 1}`, description: 'Data berisi angka, teks, kosong, error, dan formula contoh.', columns: ['Data', 'Nilai', 'Keterangan'], rows: [['Angka',123,'Tipe number'],['Teks','Formula Coach','Tipe text'],['Kosong','','Cell kosong'],['Error','#N/A','Contoh error'],['Formula','=SUM(B2:B2)','Contoh formula']] };
  }
  return { title: `Data Latihan ${n + 1}`, description: 'Data fallback agar latihan tetap punya tabel yang jelas.', columns: ['Item', 'Nilai', 'Keterangan'], rows: [['Input 1', 10, 'Data utama'], ['Input 2', 20, 'Data tambahan'], ['Input 3', 30, 'Data pembanding']] };
}


const singleRangeFunctions = new Set([
  'SUM','AVERAGE','AVERAGEA','COUNT','MAX','MAXA','MIN','MINA','MEDIAN','MODE','MODE.SNGL','MODE.MULT',
  'STDEV','STDEVP','STDEV.S','STDEV.P','STDEVA','STDEVPA','VAR','VARP','VAR.S','VAR.P','VARA','VARPA',
  'AVEDEV','DEVSQ','GEOMEAN','HARMEAN','KURT','SKEW','SKEW.P','TRIMMEAN','PRODUCT','SUMSQ'
]);

const mathRangeByLevel = ['B2:B10', 'C2:C10', 'B2:C10', 'B2:B8', 'C2:C8', 'B1:B10'];
const statsRangeByLevel = ['A2:A8', 'B2:B8', 'A2:B8', 'A2:A6', 'B2:B6', 'A1:A8'];

function makeVariantRefs(formula, variantIndex = 0) {
  const name = upper(formula.name);
  const tableKey = tableForFormula(formula);
  const n = variantIndex % 6;
  const baseRefs = refsFromFormat(formula);

  if (name === 'SUM') return [mathRangeByLevel[n]];
  if (confidenceFunctions.has(name)) return ['B6', 'B4', 'B3'];
  if (name === 'EUROCONVERT') return ['F2', '"EUR"', '"DEM"'];
  if (['PRODUCT','SUMSQ'].includes(name)) return [mathRangeByLevel[n]];
  if (singleRangeFunctions.has(name)) return [statsRangeByLevel[n]];
  if (name === 'COUNTBLANK') return ['B2:B6'];
  if (name === 'COUNTA') return ['A2:C6'];

  if (name === 'CHOOSEROWS') return ['A1:I8', '1', '2'];
  if (name === 'CHOOSECOLS') return ['A1:I8', '1', '2'];

  if (name === 'INDEX MATCH') {
    const s = lookupScenarios[n];
    return [s.returnRange, 'MATCH(' + s.lookup + ',E2:E8,0)'];
  }
  if (name === 'OFFSET') return ['A1', String((n % 3) + 1), String(n % 2), '3', '2'];
  if (name === 'CELL') return ['"address"', 'A2'];

  if (criteriaFunctions.has(name)) {
    const s = salesScenarios[n];
    if (name === 'COUNTIF') return [s.range, s.criteria1];
    if (name === 'SUMIF') return [s.range, s.criteria1, s.valueRange];
    if (name === 'AVERAGEIF') return [s.range, s.criteria1, s.valueRange];
    if (name === 'COUNTIFS') return [s.range, s.criteria1, s.secondRange, s.criteria2];
    if (name === 'SUMIFS' || name === 'AVERAGEIFS' || name === 'MAXIFS' || name === 'MINIFS') return [s.valueRange, s.range, s.criteria1, s.secondRange, s.criteria2];
  }

  if (lookupFunctions.has(name)) {
    const s = lookupScenarios[n];
    if (name === 'VLOOKUP') return [s.lookup, s.table, s.col, 'FALSE'];
    if (name === 'HLOOKUP') return [s.hard, 'A1:H5', s.hRow, 'FALSE'];
    if (name === 'XLOOKUP') return [s.lookup, 'E2:E8', s.returnRange, '"Tidak ditemukan"', '0', '1'];
    if (name === 'LOOKUP') return [s.lookup, 'E2:E8', s.returnRange];
    if (name === 'MATCH' || name === 'XMATCH') return [s.lookup, 'E2:E8', '0'];
    if (name === 'INDEX') return ['E2:I8', String((n % 6) + 1), s.col];
  }

  if (name === 'IF') return [`B${2 + (n % 5)}>=75`, '"Lulus"', '"Tidak Lulus"'];
  if (name === 'IFS') return [`B${2 + (n % 5)}>=90`, '"A"', `B${2 + (n % 5)}>=75`, '"B"', 'TRUE', '"C"'];
  if (name === 'AND') return [`B${2 + (n % 5)}>=75`, `C${2 + (n % 5)}>=80`];
  if (name === 'OR') return [`B${2 + (n % 5)}>=75`, `D${2 + (n % 5)}="Lunas"`];
  if (name === 'NOT') return [`D${2 + (n % 5)}="Lunas"`];
  if (name === 'IFERROR') return [`100/(B${2 + (n % 5)}-75)`, '"Cek pembagi"'];
  if (name === 'IFNA') return ['VLOOKUP("P-999",E2:I8,2,FALSE)', '"Tidak ada"'];
  if (name === 'SWITCH') return [`D${2 + (n % 5)}`, '"Lunas"', '"OK"', '"Belum"', '"Follow up"', '"Cek"'];

  if (name === 'NEGBINOMDIST') return ['B2', 'B3', 'B4'];
  if (name === 'NEGBINOM.DIST') return ['B2', 'B3', 'B4', 'B5'];

  if (tableKey === 'financeParameter') {
    if (['PMT','FV','PV','RATE','NPER'].includes(name)) return ['B2','B3','B4','B5','B6','B7'].slice(0, Math.max(3, Math.min(baseRefs.length || 3, 6)));
  }

  if (tableKey === 'engineeringParameter') {
    const mapper = ['B2','B3','B4','B5','B6','B7','B8','B9','B10'];
    return baseRefs.map((_, i) => mapper[i] || 'B2');
  }

  if (tableKey.startsWith('stats')) {
    return baseRefs.map((ref, i) => ref || `B${2 + i}`);
  }

  return baseRefs;
}

function makeVariantQuestion(formula, refs, variantIndex = 0) {
  const name = upper(formula.name);
  const n = variantIndex % 6;
  const sales = salesScenarios[n];
  const lookup = lookupScenarios[n];
  const neg = statNegBinomScenarios[n];
  const finance = financeScenarios[n];

  if (name === 'SUM') {
    if (n === 0) return 'Berapa total keseluruhan dari kolom Angka pada tabel?';
    if (n === 1) return 'Berapa total keseluruhan dari kolom Pembanding pada tabel?';
    if (n === 2) return 'Berapa total gabungan dari kolom Angka dan Pembanding pada tabel?';
    if (n === 3) return 'Berapa total angka utama dari Data 1 sampai Data 7?';
    if (n === 4) return 'Berapa total pembanding dari Data 1 sampai Data 7?';
    return 'Berapa total kolom Angka jika header ikut terseleksi bersama datanya?';
  }

  if (singleRangeFunctions.has(name)) {
    if (/AVERAGE|AVEDEV|GEOMEAN|HARMEAN|TRIMMEAN/.test(name)) return `Berapa hasil rata-rata atau ukuran tengah dari range ${refs[0] || 'angka'} pada tabel?`;
    if (/MAX/.test(name)) return `Berapa nilai terbesar dari range ${refs[0] || 'angka'} pada tabel?`;
    if (/MIN/.test(name)) return `Berapa nilai terkecil dari range ${refs[0] || 'angka'} pada tabel?`;
    if (/COUNT/.test(name)) return `Berapa jumlah data yang bisa dihitung dari range ${refs[0] || 'yang tersedia'}?`;
    if (/STDEV|VAR|DEVSQ|KURT|SKEW/.test(name)) return `Berapa hasil analisis sebaran data dari range ${refs[0] || 'angka'} pada tabel?`;
    return `Berapa hasil ${formula.name} dari range ${refs[0] || 'angka'} pada tabel?`;
  }

  if (criteriaFunctions.has(name)) {
    if (name === 'COUNTIF') return `Berapa jumlah data penjualan untuk ${sales.label}?`;
    if (name === 'COUNTIFS') return `Berapa jumlah data penjualan untuk ${sales.label} dan ${sales.criteria2.replaceAll('"', '')}?`;
    if (name === 'SUMIF') return `Berapa total penjualan untuk ${sales.label}?`;
    if (name === 'SUMIFS') return `Berapa total penjualan untuk ${sales.label} dan ${sales.criteria2.replaceAll('"', '')}?`;
    if (name === 'AVERAGEIF') return `Berapa rata-rata penjualan untuk ${sales.label}?`;
    if (name === 'AVERAGEIFS') return `Berapa rata-rata penjualan untuk ${sales.label} dan ${sales.criteria2.replaceAll('"', '')}?`;
    if (name === 'MAXIFS') return `Berapa nilai penjualan terbesar untuk ${sales.label} dan ${sales.criteria2.replaceAll('"', '')}?`;
    if (name === 'MINIFS') return `Berapa nilai penjualan terkecil untuk ${sales.label} dan ${sales.criteria2.replaceAll('"', '')}?`;
  }

  if (lookupFunctions.has(name)) {
    if (name === 'MATCH' || name === 'XMATCH') return `Di posisi ke berapa kode ${lookup.hard.replaceAll('"', '')} ditemukan pada kolom master?`;
    if (name === 'INDEX') return `Apa nilai yang muncul dari tabel master pada baris ${(n % 6) + 1} dan kolom ${lookup.col}?`;
    if (name === 'INDEX MATCH') return `Apa nilai yang diambil dari return range setelah kode ${lookup.hard.replaceAll('"', '')} ditemukan?`;
    return `Apa ${lookup.label} dari tabel master?`;
  }

  if (name === 'NEGBINOMDIST' || name === 'NEGBINOM.DIST') return `Berapa peluang ${neg.f} gagal terjadi sebelum target ${neg.s} berhasil, dengan peluang berhasil ${Math.round(neg.p * 100)}%?`;
  if (formula.category === 'Financial') return `Berapa hasil ${formula.name} jika rate ${finance.rate}, periode ${finance.nper}, dan nilai utama ${finance.pv} digunakan dari tabel?`;
  if (formula.category === 'Text') {
    if (['LEFT','LEFTB','RIGHT','RIGHTB','MID','MIDB'].includes(name)) return `Apa potongan teks yang keluar dari data teks utama pada tabel?`;
    if (name === 'LEN' || name === 'LENB') return `Berapa jumlah karakter dari teks utama pada tabel?`;
    if (['LOWER','UPPER','PROPER','TRIM','CLEAN'].includes(name)) return `Apa hasil teks setelah dirapikan atau diubah format hurufnya?`;
    if (['CONCAT','CONCATENATE','TEXTJOIN'].includes(name)) return `Apa hasil gabungan teks dari beberapa cell pada tabel?`;
    if (['TEXTSPLIT','TEXTBEFORE','TEXTAFTER'].includes(name)) return `Apa bagian teks yang diambil setelah teks dipisahkan dengan pemisah yang tersedia?`;
    if (['FIND','FINDB','SEARCH','SEARCHB'].includes(name)) return `Di posisi ke berapa teks yang dicari muncul pada teks utama?`;
    if (['SUBSTITUTE','REPLACE','REPLACEB'].includes(name)) return `Apa hasil teks setelah bagian tertentu diganti?`;
    if (['VALUE','NUMBERVALUE'].includes(name)) return `Berapa hasil angka setelah teks angka dikonversi?`;
    return `Apa hasil ${formula.name} saat diterapkan pada teks utama di tabel?`;
  }
  if (formula.category === 'Date and Time') {
    if (name === 'DATE') return `Tanggal apa yang terbentuk dari Year, Month, dan Day pada tabel?`;
    if (['DAY','MONTH','YEAR','HOUR','MINUTE','SECOND'].includes(name)) return `Angka apa yang diambil dari tanggal atau jam pada tabel?`;
    if (['DAYS','DATEDIF','NETWORKDAYS','NETWORKDAYS.INTL','WORKDAY','WORKDAY.INTL'].includes(name)) return `Berapa selisih atau hari kerja dari tanggal yang tersedia pada tabel?`;
    if (['EDATE','EOMONTH'].includes(name)) return `Tanggal apa yang keluar setelah tanggal awal digeser sesuai jumlah bulan pada tabel?`;
    if (['TODAY','NOW'].includes(name)) return `Apa hasil tanggal atau waktu saat ini dari ${formula.name}?`;
    return `Apa hasil ${formula.name} dari tanggal atau jam pada baris yang tersedia di tabel?`;
  }
  if (formula.category === 'Logical') {
    if (name === 'IF') return `Apa status yang keluar jika nilai pada tabel diuji dengan batas kelulusan?`;
    if (name === 'IFS') return `Kategori nilai apa yang keluar saat beberapa batas nilai diuji berurutan?`;
    if (name === 'AND') return `Apakah semua kondisi pada baris yang diuji bernilai benar?`;
    if (name === 'OR') return `Apakah minimal satu kondisi pada baris yang diuji bernilai benar?`;
    if (name === 'NOT') return `Apa hasil kebalikan dari kondisi yang diuji pada tabel?`;
    if (name === 'IFERROR') return `Apa hasil pengganti yang muncul jika perhitungan menghasilkan error?`;
    if (name === 'IFNA') return `Apa hasil pengganti yang muncul jika data lookup tidak ditemukan?`;
    return `Apa hasil keputusan ${formula.name} jika kondisi pada tabel diuji?`;
  }
  if (name === 'COUNTA') return `Berapa banyak cell yang berisi data pada tabel campuran?`;
  if (name === 'COUNTBLANK') return `Berapa banyak cell kosong pada tabel campuran?`;
  if (formula.category === 'Engineering') return `Apa hasil ${formula.name} dari parameter teknik pada tabel?`;
  if (formula.category === 'Web') return `Apa hasil atau struktur ${formula.name} dari data web/XML pada tabel?`;
  if (formula.category === 'Cube') return `Bagaimana struktur ${formula.name} untuk connection/member pada tabel?`;
  if (formula.category === 'Database') return `Berapa hasil ${formula.name} dari database mini berdasarkan kriteria yang tersedia?`;
  if (formula.category === 'Information') return `Apa hasil pengecekan ${formula.name} pada data campuran di tabel?`;
  if (formula.category === 'Dynamic Array') return `Apa hasil array dari ${formula.name} berdasarkan data latihan yang tersedia?`;
  if (formula.category === 'Advanced / Professional') return `Apa hasil pengolahan ${formula.name} dari data latihan yang tersedia?`;
  if (formula.category === 'Add-in / User Defined') return `Bagaimana struktur ${formula.name} yang benar berdasarkan parameter add-in pada tabel?`;
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return `Berapa hasil ${formula.name} dari parameter statistik yang relevan pada tabel?`;
  return `Apa hasil ${formula.name} dari data latihan yang sudah disiapkan?`;
}

function makeTieredExercise(formula, variantIndex = 0) {
  const base = generateDetailedExerciseForFormula(formula);
  const name = upper(formula.name);
  const tableKey = tableForFormula(formula);
  const refs = makeVariantRefs(formula, variantIndex);
  const expectedFormula = name === 'INDEX MATCH'
    ? `=INDEX(${refs[0]},${refs[1]})`
    : formulaExpression(formula, refs);
  const acceptedFormulas = name === 'INDEX MATCH' ? [] : acceptedHardcode(formula, refs);
  const requiredRefs = requiredRefsFromArgs(refs);
  const requiredTexts = requiredTextsFromArgs(refs);
  const table = makeCompactTable(tableKey, variantIndex);

  return {
    ...base,
    id: `${formula.id}__level_${variantIndex + 1}`,
    baseFormulaId: formula.id,
    formulaName: formula.name,
    title: `Latihan ${variantIndex + 1}: ${variantLabels[variantIndex % 6]}`,
    levelIndex: variantIndex,
    levelLabel: variantLabels[variantIndex % 6],
    tableKey,
    table,
    activeCell: requiredRefs[0]?.split(':')[0] || base.activeCell || 'G2',
    question: makeVariantQuestion(formula, refs, variantIndex),
    logicPrompt: `${makeLogic(formula, refs, requiredTexts)} Perhatikan data pada level ini karena range atau kriterianya bisa berbeda dari latihan sebelumnya.`,
    expectedFormula,
    acceptedFormulas,
    requiredRefs,
    requiredTexts,
    argumentCount: { min: refs.length, max: null },
    highlightRanges: requiredRefs,
    allowedFunctions: [formula.name],
    hints: makeHints(formula, refs, requiredTexts),
    successExplanation: `Tepat. Kamu menyelesaikan level ${variantIndex + 1} untuk ${formula.name} dengan data yang sesuai konteks latihan.`,
    formulaParts: [
      `${formula.name} adalah function utama untuk level ini.`,
      `Format rumus: =${auditedFormat(formula)}`,
      refs.length ? `Argumen yang dipakai level ini: ${refs.join(' | ')}.` : 'Function ini tidak membutuhkan argumen tambahan.',
      acceptedFormulas.length ? 'Hardcode diterima sebagai alternatif, tapi referensi cell lebih aman untuk latihan.' : 'Gunakan referensi cell/range supaya rumus fleksibel.'
    ],
    commonMistakes: [
      'Mengulang jawaban level sebelumnya padahal soal sudah berubah.',
      'Range/cell tidak sesuai data di tabel level ini.',
      'Kriteria atau lookup value tidak ada di tabel.',
      'Urutan argumen kebalik.',
      'Separator atau kurung penutup belum benar.'
    ],
    nextUseCase: `Lanjutkan ke level berikutnya agar kamu paham variasi pemakaian ${formula.name}.`,
    audit: {
      ...(base.audit || {}),
      tiered: true,
      levelIndex: variantIndex,
      expectedFormula,
      tableKey,
      refs,
      requiredRefs,
      requiredTexts,
      tableRows: table?.rows?.length || null,
      note: 'Latihan bertingkat dibuat dari mapping formula, tableKey, dan argumen agar tabel, soal, hint, dan expected formula saling nyambung.'
    }
  };
}

export function generateTieredExercisesForFormula(formula, count = 6) {
  const total = Math.max(6, count || 6);
  return Array.from({ length: total }, (_, index) => makeTieredExercise(formula, index));
}

export { formatOverrides };
