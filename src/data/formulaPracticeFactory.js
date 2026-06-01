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


  // Text
  ARRAYTOTEXT: 'ARRAYTOTEXT(array, [format])', ASC: 'ASC(text)', BAHTTEXT: 'BAHTTEXT(number)', CHAR: 'CHAR(number)', CLEAN: 'CLEAN(text)', CODE: 'CODE(text)', CONCAT: 'CONCAT(text1, [text2], ...)', CONCATENATE: 'CONCATENATE(text1, [text2], ...)', DBCS: 'DBCS(text)', DOLLAR: 'DOLLAR(number, [decimals])', EXACT: 'EXACT(text1, text2)', FIND: 'FIND(find_text, within_text, [start_num])', FINDB: 'FINDB(find_text, within_text, [start_num])', FIXED: 'FIXED(number, [decimals], [no_commas])', LEFT: 'LEFT(text, [num_chars])', LEFTB: 'LEFTB(text, [num_bytes])', LEN: 'LEN(text)', LENB: 'LENB(text)', LOWER: 'LOWER(text)', MID: 'MID(text, start_num, num_chars)', MIDB: 'MIDB(text, start_num, num_bytes)', NUMBERVALUE: 'NUMBERVALUE(text, [decimal_separator], [group_separator])', PHONETIC: 'PHONETIC(reference)', PROPER: 'PROPER(text)', REPLACE: 'REPLACE(old_text, start_num, num_chars, new_text)', REPLACEB: 'REPLACEB(old_text, start_num, num_bytes, new_text)', REPT: 'REPT(text, number_times)', RIGHT: 'RIGHT(text, [num_chars])', RIGHTB: 'RIGHTB(text, [num_bytes])', SEARCH: 'SEARCH(find_text, within_text, [start_num])', SEARCHB: 'SEARCHB(find_text, within_text, [start_num])', SUBSTITUTE: 'SUBSTITUTE(text, old_text, new_text, [instance_num])', T: 'T(value)', TEXT: 'TEXT(value, format_text)', TEXTAFTER: 'TEXTAFTER(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])', TEXTBEFORE: 'TEXTBEFORE(text, delimiter, [instance_num], [match_mode], [match_end], [if_not_found])', TEXTJOIN: 'TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)', TEXTSPLIT: 'TEXTSPLIT(text, col_delimiter, [row_delimiter], [ignore_empty], [match_mode], [pad_with])', TRIM: 'TRIM(text)', UNICHAR: 'UNICHAR(number)', UNICODE: 'UNICODE(text)', UPPER: 'UPPER(text)', VALUE: 'VALUE(text)', VALUETOTEXT: 'VALUETOTEXT(value, [format])',

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
  if (/values|cash/.test(t)) return 'D2:D7';
  if (/dates/.test(t)) return 'A2:A7';
  if (/rate|coupon|yld|finance_rate|reinvest_rate|effect_rate|nominal_rate/.test(t)) return 'F2';
  if (/nper|npery|life|frequency/.test(t)) return 'F3';
  if (/pv|principal|investment/.test(t)) return 'F4';
  if (/pmt/.test(t)) return 'F5';
  if (/fv|redemption/.test(t)) return 'F6';
  if (/type|basis|calc_method|no_switch/.test(t)) return 'F7';
  if (/cost|price|pr\b/.test(t)) return 'F8';
  if (/salvage/.test(t)) return 'F9';
  if (/period|per\b|start_period|end_period|month/.test(t)) return 'F11';
  if (/settlement|issue|date_purchased|first_period|first_interest/.test(t)) return 'F15';
  if (/maturity/.test(t)) return 'F16';
  if (/par|guess|fraction/.test(t)) return 'F20';
  return 'F2';
};

const mapEngineeringToken = (token) => {
  const t = normalizeToken(token);
  if (/from_unit/.test(t)) return 'J3';
  if (/to_unit/.test(t)) return 'J4';
  if (/number1|number2/.test(t)) return /2/.test(t) ? 'J10' : 'J2';
  if (/places|n\b|step|shift/.test(t)) return 'J10';
  if (/inumber1|im_num1/.test(t)) return 'J6';
  if (/inumber2|im_num2/.test(t)) return 'J7';
  if (/inumber/.test(t)) return 'J6';
  if (/real/.test(t)) return 'J8';
  if (/i_num|imaginary/.test(t)) return 'J9';
  if (/suffix/.test(t)) return '"i"';
  if (/number/.test(t)) return 'J2';
  if (/x|lower|upper/.test(t)) return 'J2';
  return 'J2';
};

const mapTextToken = (token) => {
  const t = normalizeToken(token);
  if (/text1|text2|value1|array/.test(t)) return 'A2:A5';
  if (/text|within_text|old_text|number|value/.test(t)) return 'A2';
  if (/find_text|delimiter|match_end|instance_num/.test(t)) return 'D2';
  if (/num_chars|start_num|num_bytes/.test(t)) return 'E2';
  if (/new_text|replacement/.test(t)) return 'C2';
  if (/format_text/.test(t)) return '"Rp #,##0"';
  if (/delimiter/.test(t)) return 'D2';
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
  if (/database/.test(t)) return 'A1:E8';
  if (/field/.test(t)) return '"Nilai"';
  if (/criteria/.test(t)) return 'G1:G2';
  return 'A1:E8';
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
  if (/array|number1|numbers?|values?|ref/.test(t)) return 'B2:B8';
  if (/number2/.test(t)) return 'B3';
  if (/num_digits|significance|multiple|k|quart|rows|columns|step|start/.test(t)) return 'B9';
  return 'B2';
};

const mapDynamicToken = (token) => {
  const t = normalizeToken(token);
  if (/row_fields/.test(t)) return 'B2:B13';
  if (/col_fields/.test(t)) return 'C2:C13';
  if (/values/.test(t)) return 'D2:D13';
  if (/function/.test(t)) return 'SUM';
  if (/array|data|vector/.test(t)) return 'A2:E13';
  if (/rows|columns|wrap_count/.test(t)) return '3';
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
  if (actualExpectedFunctions.has(name)) return 'statsActualExpected';
  if (pairedSeriesFunctions.has(name)) return 'statsSeriesCompact';
  if (binomFamilyFunctions.has(name)) return 'statsBinom';
  if (normalFamilyFunctions.has(name)) return 'statsNormal';
  if (betaGammaFunctions.has(name)) return 'statsBetaGamma';
  if (freedomTestFunctions.has(name)) return 'statsFreedom';
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return 'statsSeriesCompact';
  if (criteriaFunctions.has(name)) return 'sales';
  if (lookupFunctions.has(name)) return name === 'HLOOKUP' ? 'lookupHorizontal' : 'lookup';
  if (dbFunctions.has(name)) return 'databaseMini';
  if (statisticalSeries.has(name)) return 'students';
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
  const required = args.filter((arg) => !/^\[.*\]$/.test(arg));
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

const makeQuestion = (formula, refs) => {
  const name = upper(formula.name);
  if (specialPractice[name]?.question) return specialPractice[name].question;
  if (criteriaFunctions.has(name)) return `${formula.name} data penjualan dengan kriteria yang tersedia di tabel. Pastikan value yang dipakai memang ada di kolom kategori/kota.`;
  if (lookupFunctions.has(name)) return `${formula.name}: ambil data produk dari master menggunakan lookup value yang tersedia di tabel.`;
  if (dbFunctions.has(name)) return `${formula.name}: hitung kolom Nilai dari database mini untuk kriteria Status = Lulus.`;
  if (formula.category === 'Statistical' || formula.category === 'Compatibility') return `Gunakan ${formula.name} dengan parameter statistik yang sudah disiapkan di tabel. Ambil argumennya dari cell yang tersedia.`;
  if (formula.category === 'Financial') return `Gunakan ${formula.name} dengan parameter keuangan di tabel. Ambil rate, periode, nilai pinjaman, atau cashflow sesuai format rumus.`;
  if (formula.category === 'Engineering') return `Gunakan ${formula.name} dengan parameter teknik yang tersedia. Ambil angka/unit/bilangan kompleks dari tabel.`;
  if (formula.category === 'Web') return `Gunakan ${formula.name} dengan contoh data web di tabel.`;
  if (formula.category === 'Cube') return `Gunakan ${formula.name} dengan contoh connection/member dari tabel cube.`;
  return `Gunakan ${formula.name} untuk ${actionByCategory(formula)}. Ambil data dari ${tableFriendlyName[tableForFormula(formula)] || 'tabel latihan'}.`;
};

const makeLogic = (formula, refs) => {
  const name = upper(formula.name);
  if (specialPractice[name]?.logic) return specialPractice[name].logic;
  const refText = refs.length ? ` Di latihan ini, bagian pentingnya adalah ${refs.join(', ')}.` : '';
  return `Baca format dari kiri ke kanan. Isi argumen pertama dulu, lalu lanjut ke argumen berikutnya.${refText}`;
};

const makeHints = (formula, refs, texts) => {
  const name = formula.name;
  return [
    `Mulai dari tanda = lalu tulis ${name}.`,
    refs.length ? `Cari dulu data yang dibutuhkan di tabel: ${refs[0]}.` : 'Tentukan dulu input pertama yang diminta rumus.',
    refs.length > 1 ? `Lanjutkan argumen berikutnya: ${refs.slice(1).join(', ')}.` : 'Ikuti urutan argumen dari format, jangan loncat ke bagian akhir dulu.',
    texts.length ? `Kalau ada teks/kriteria, pastikan nilainya benar-benar ada di tabel: ${texts.join(', ')}.` : 'Kalau butuh teks atau pilihan TRUE/FALSE, isi sesuai contoh parameter di tabel.',
    'Cek lagi separator dan tutup kurung di akhir rumus.'
  ];
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
    logicPrompt: makeLogic(formula, refs),
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

export { formatOverrides };
