

! function (e) {
	function t(a) {
		if (n[a]) return n[a].exports;
		var s = n[a] = {
			i: a,
			l: !1,
			exports: {}
		};
		return e[a].call(s.exports, s, s.exports, t), s.l = !0, s.exports
	}
	var n = {};
	t.m = e, t.c = n, t.i = function (e) {
		return e
	}, t.d = function (e, n, a) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: a
		})
	}, t.n = function (e) {
		var n = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 117)
}([function (e, t, n) {
	(function (e) {
		! function (t, n) {
			e.exports = n()
		}(0, function () {
			"use strict";

			function t() {
				return fa.apply(null, arguments)
			}

			function a(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}

			function s(e) {
				return null != e && "[object Object]" === Object.prototype.toString.call(e)
			}

			function i(e) {
				var t;
				for (t in e) return !1;
				return !0
			}

			function r(e) {
				return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
			}

			function o(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}

			function d(e, t) {
				var n, a = [];
				for (n = 0; n < e.length; ++n) a.push(t(e[n], n));
				return a
			}

			function u(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function l(e, t) {
				for (var n in t) u(t, n) && (e[n] = t[n]);
				return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
			}

			function _(e, t, n, a) {
				return Mt(e, t, n, a, !0).utc()
			}

			function c() {
				return {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					meridiem: null
				}
			}

			function m(e) {
				return null == e._pf && (e._pf = c()), e._pf
			}

			function h(e) {
				if (null == e._isValid) {
					var t = m(e),
						n = Ma.call(t.parsedDateParts, function (e) {
							return null != e
						}),
						a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
					if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
					e._isValid = a
				}
				return e._isValid
			}

			function p(e) {
				var t = _(NaN);
				return null != e ? l(m(t), e) : m(t).userInvalidated = !0, t
			}

			function f(e) {
				return void 0 === e
			}

			function y(e, t) {
				var n, a, s;
				if (f(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), f(t._i) || (e._i = t._i), f(t._f) || (e._f = t._f), f(t._l) || (e._l = t._l), f(t._strict) || (e._strict = t._strict), f(t._tzm) || (e._tzm = t._tzm), f(t._isUTC) || (e._isUTC = t._isUTC), f(t._offset) || (e._offset = t._offset), f(t._pf) || (e._pf = m(t)), f(t._locale) || (e._locale = t._locale), La.length > 0)
					for (n in La) a = La[n], s = t[a], f(s) || (e[a] = s);
				return e
			}

			function M(e) {
				y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === Ya && (Ya = !0, t.updateOffset(this), Ya = !1)
			}

			function L(e) {
				return e instanceof M || null != e && null != e._isAMomentObject
			}

			function Y(e) {
				return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
			}

			function k(e) {
				var t = +e,
					n = 0;
				return 0 !== t && isFinite(t) && (n = Y(t)), n
			}

			function v(e, t, n) {
				var a, s = Math.min(e.length, t.length),
					i = Math.abs(e.length - t.length),
					r = 0;
				for (a = 0; a < s; a++)(n && e[a] !== t[a] || !n && k(e[a]) !== k(t[a])) && r++;
				return r + i
			}

			function g(e) {
				!1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}

			function b(e, n) {
				var a = !0;
				return l(function () {
					if (null != t.deprecationHandler && t.deprecationHandler(null, e), a) {
						for (var s, i = [], r = 0; r < arguments.length; r++) {
							if (s = "", "object" == typeof arguments[r]) {
								s += "\n[" + r + "] ";
								for (var o in arguments[0]) s += o + ": " + arguments[0][o] + ", ";
								s = s.slice(0, -2)
							} else s = arguments[r];
							i.push(s)
						}
						g(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), a = !1
					}
					return n.apply(this, arguments)
				}, n)
			}

			function D(e, n) {
				null != t.deprecationHandler && t.deprecationHandler(e, n), ka[e] || (g(n), ka[e] = !0)
			}

			function w(e) {
				return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}

			function T(e) {
				var t, n;
				for (n in e) t = e[n], w(t) ? this[n] = t : this["_" + n] = t;
				this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
			}

			function S(e, t) {
				var n, a = l({}, e);
				for (n in t) u(t, n) && (s(e[n]) && s(t[n]) ? (a[n] = {}, l(a[n], e[n]), l(a[n], t[n])) : null != t[n] ? a[n] = t[n] : delete a[n]);
				for (n in e) u(e, n) && !u(t, n) && s(e[n]) && (a[n] = l({}, a[n]));
				return a
			}

			function j(e) {
				null != e && this.set(e)
			}

			function H(e, t, n) {
				var a = this._calendar[e] || this._calendar.sameElse;
				return w(a) ? a.call(t, n) : a
			}

			function P(e) {
				var t = this._longDateFormat[e],
					n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
					return e.slice(1)
				}), this._longDateFormat[e])
			}

			function x() {
				return this._invalidDate
			}

			function A(e) {
				return this._ordinal.replace("%d", e)
			}

			function E(e, t, n, a) {
				var s = this._relativeTime[n];
				return w(s) ? s(e, t, n, a) : s.replace(/%d/i, e)
			}

			function W(e, t) {
				var n = this._relativeTime[e > 0 ? "future" : "past"];
				return w(n) ? n(t) : n.replace(/%s/i, t)
			}

			function N(e, t) {
				var n = e.toLowerCase();
				Sa[n] = Sa[n + "s"] = Sa[t] = e
			}

			function O(e) {
				return "string" == typeof e ? Sa[e] || Sa[e.toLowerCase()] : void 0
			}

			function C(e) {
				var t, n, a = {};
				for (n in e) u(e, n) && (t = O(n)) && (a[t] = e[n]);
				return a
			}

			function F(e, t) {
				ja[e] = t
			}

			function z(e) {
				var t = [];
				for (var n in e) t.push({
					unit: n,
					priority: ja[n]
				});
				return t.sort(function (e, t) {
					return e.priority - t.priority
				}), t
			}

			function I(e, n) {
				return function (a) {
					return null != a ? (U(this, e, a), t.updateOffset(this, n), this) : J(this, e)
				}
			}

			function J(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
			}

			function U(e, t, n) {
				e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
			}

			function R(e) {
				return e = O(e), w(this[e]) ? this[e]() : this
			}

			function q(e, t) {
				if ("object" == typeof e) {
					e = C(e);
					for (var n = z(e), a = 0; a < n.length; a++) this[n[a].unit](e[n[a].unit])
				} else if (e = O(e), w(this[e])) return this[e](t);
				return this
			}

			function G(e, t, n) {
				var a = "" + Math.abs(e),
					s = t - a.length;
				return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + a
			}

			function V(e, t, n, a) {
				var s = a;
				"string" == typeof a && (s = function () {
					return this[a]()
				}), e && (Aa[e] = s), t && (Aa[t[0]] = function () {
					return G(s.apply(this, arguments), t[1], t[2])
				}), n && (Aa[n] = function () {
					return this.localeData().ordinal(s.apply(this, arguments), e)
				})
			}

			function B(e) {
				return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
			}

			function $(e) {
				var t, n, a = e.match(Ha);
				for (t = 0, n = a.length; t < n; t++) Aa[a[t]] ? a[t] = Aa[a[t]] : a[t] = B(a[t]);
				return function (t) {
					var s, i = "";
					for (s = 0; s < n; s++) i += a[s] instanceof Function ? a[s].call(t, e) : a[s];
					return i
				}
			}

			function K(e, t) {
				return e.isValid() ? (t = Q(t, e.localeData()), xa[t] = xa[t] || $(t), xa[t](e)) : e.localeData().invalidDate()
			}

			function Q(e, t) {
				function n(e) {
					return t.longDateFormat(e) || e
				}
				var a = 5;
				for (Pa.lastIndex = 0; a >= 0 && Pa.test(e);) e = e.replace(Pa, n), Pa.lastIndex = 0, a -= 1;
				return e
			}

			function Z(e, t, n) {
				Ca[e] = w(t) ? t : function (e, a) {
					return e && n ? n : t
				}
			}

			function X(e, t) {
				return u(Ca, e) ? Ca[e](t._strict, t._locale) : new RegExp(ee(e))
			}

			function ee(e) {
				return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, a, s) {
					return t || n || a || s
				}))
			}

			function te(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}

			function ne(e, t) {
				var n, a = t;
				for ("string" == typeof e && (e = [e]), r(t) && (a = function (e, n) {
						n[t] = k(e)
					}), n = 0; n < e.length; n++) Fa[e[n]] = a
			}

			function ae(e, t) {
				ne(e, function (e, n, a, s) {
					a._w = a._w || {}, t(e, a._w, a, s)
				})
			}

			function se(e, t, n) {
				null != t && u(Fa, e) && Fa[e](t, n._a, n, e)
			}

			function ie(e, t) {
				return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
			}

			function re(e, t) {
				return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ka).test(t) ? "format" : "standalone"][e.month()] : this._months
			}

			function oe(e, t) {
				return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ka.test(t) ? "format" : "standalone"][e.month()] : this._monthsShort
			}

			function de(e, t, n) {
				var a, s, i, r = e.toLocaleLowerCase();
				if (!this._monthsParse)
					for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a) i = _([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
				return n ? "MMM" === t ? (s = $a.call(this._shortMonthsParse, r), -1 !== s ? s : null) : (s = $a.call(this._longMonthsParse, r), -1 !== s ? s : null) : "MMM" === t ? -1 !== (s = $a.call(this._shortMonthsParse, r)) ? s : (s = $a.call(this._longMonthsParse, r), -1 !== s ? s : null) : -1 !== (s = $a.call(this._longMonthsParse, r)) ? s : (s = $a.call(this._shortMonthsParse, r), -1 !== s ? s : null)
			}

			function ue(e, t, n) {
				var a, s, i;
				if (this._monthsParseExact) return de.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
					if (s = _([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[a] || (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[a].test(e)) return a;
					if (n && "MMM" === t && this._shortMonthsParse[a].test(e)) return a;
					if (!n && this._monthsParse[a].test(e)) return a
				}
			}

			function le(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t)
					if (/^\d+$/.test(t)) t = k(t);
					else if (t = e.localeData().monthsParse(t), !r(t)) return e;
				return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
			}

			function _e(e) {
				return null != e ? (le(this, e), t.updateOffset(this, !0), this) : J(this, "Month")
			}

			function ce() {
				return ie(this.year(), this.month())
			}

			function me(e) {
				return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Xa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
			}

			function he(e) {
				return this._monthsParseExact ? (u(this, "_monthsRegex") || pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = es), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
			}

			function pe() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, a = [],
					s = [],
					i = [];
				for (t = 0; t < 12; t++) n = _([2e3, t]), a.push(this.monthsShort(n, "")), s.push(this.months(n, "")), i.push(this.months(n, "")), i.push(this.monthsShort(n, ""));
				for (a.sort(e), s.sort(e), i.sort(e), t = 0; t < 12; t++) a[t] = te(a[t]), s[t] = te(s[t]);
				for (t = 0; t < 24; t++) i[t] = te(i[t]);
				this._monthsRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
			}

			function fe(e) {
				return ye(e) ? 366 : 365
			}

			function ye(e) {
				return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
			}

			function Me() {
				return ye(this.year())
			}

			function Le(e, t, n, a, s, i, r) {
				var o = new Date(e, t, n, a, s, i, r);
				return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
			}

			function Ye(e) {
				var t = new Date(Date.UTC.apply(null, arguments));
				return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
			}

			function ke(e, t, n) {
				var a = 7 + t - n;
				return -(7 + Ye(e, 0, a).getUTCDay() - t) % 7 + a - 1
			}

			function ve(e, t, n, a, s) {
				var i, r, o = (7 + n - a) % 7,
					d = ke(e, a, s),
					u = 1 + 7 * (t - 1) + o + d;
				return u <= 0 ? (i = e - 1, r = fe(i) + u) : u > fe(e) ? (i = e + 1, r = u - fe(e)) : (i = e, r = u), {
					year: i,
					dayOfYear: r
				}
			}

			function ge(e, t, n) {
				var a, s, i = ke(e.year(), t, n),
					r = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
				return r < 1 ? (s = e.year() - 1, a = r + be(s, t, n)) : r > be(e.year(), t, n) ? (a = r - be(e.year(), t, n), s = e.year() + 1) : (s = e.year(), a = r), {
					week: a,
					year: s
				}
			}

			function be(e, t, n) {
				var a = ke(e, t, n),
					s = ke(e + 1, t, n);
				return (fe(e) - a + s) / 7
			}

			function De(e) {
				return ge(e, this._week.dow, this._week.doy).week
			}

			function we() {
				return this._week.dow
			}

			function Te() {
				return this._week.doy
			}

			function Se(e) {
				var t = this.localeData().week(this);
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function je(e) {
				var t = ge(this, 1, 4).week;
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function He(e, t) {
				return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
			}

			function Pe(e, t) {
				return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
			}

			function xe(e, t) {
				return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : this._weekdays
			}

			function Ae(e) {
				return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
			}

			function Ee(e) {
				return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
			}

			function We(e, t, n) {
				var a, s, i, r = e.toLocaleLowerCase();
				if (!this._weekdaysParse)
					for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a) i = _([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
				return n ? "dddd" === t ? (s = $a.call(this._weekdaysParse, r), -1 !== s ? s : null) : "ddd" === t ? (s = $a.call(this._shortWeekdaysParse, r), -1 !== s ? s : null) : (s = $a.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "dddd" === t ? -1 !== (s = $a.call(this._weekdaysParse, r)) ? s : -1 !== (s = $a.call(this._shortWeekdaysParse, r)) ? s : (s = $a.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "ddd" === t ? -1 !== (s = $a.call(this._shortWeekdaysParse, r)) ? s : -1 !== (s = $a.call(this._weekdaysParse, r)) ? s : (s = $a.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : -1 !== (s = $a.call(this._minWeekdaysParse, r)) ? s : -1 !== (s = $a.call(this._weekdaysParse, r)) ? s : (s = $a.call(this._shortWeekdaysParse, r), -1 !== s ? s : null)
			}

			function Ne(e, t, n) {
				var a, s, i;
				if (this._weekdaysParseExact) return We.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
					if (s = _([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[a] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[a].test(e)) return a;
					if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e)) return a;
					if (n && "dd" === t && this._minWeekdaysParse[a].test(e)) return a;
					if (!n && this._weekdaysParse[a].test(e)) return a
				}
			}

			function Oe(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = He(e, this.localeData()), this.add(e - t, "d")) : t
			}

			function Ce(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t : this.add(e - t, "d")
			}

			function Fe(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					var t = Pe(e, this.localeData());
					return this.day(this.day() % 7 ? t : t - 7)
				}
				return this.day() || 7
			}

			function ze(e) {
				return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = rs), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
			}

			function Ie(e) {
				return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = os), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
			}

			function Je(e) {
				return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Ue.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ds), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
			}

			function Ue() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, a, s, i, r = [],
					o = [],
					d = [],
					u = [];
				for (t = 0; t < 7; t++) n = _([2e3, 1]).day(t), a = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), i = this.weekdays(n, ""), r.push(a), o.push(s), d.push(i), u.push(a), u.push(s), u.push(i);
				for (r.sort(e), o.sort(e), d.sort(e), u.sort(e), t = 0; t < 7; t++) o[t] = te(o[t]), d[t] = te(d[t]), u[t] = te(u[t]);
				this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
			}

			function Re() {
				return this.hours() % 12 || 12
			}

			function qe() {
				return this.hours() || 24
			}

			function Ge(e, t) {
				V(e, 0, 0, function () {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}

			function Ve(e, t) {
				return t._meridiemParse
			}

			function Be(e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			}

			function $e(e, t, n) {
				return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			}

			function Ke(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}

			function Qe(e) {
				for (var t, n, a, s, i = 0; i < e.length;) {
					for (s = Ke(e[i]).split("-"), t = s.length, n = Ke(e[i + 1]), n = n ? n.split("-") : null; t > 0;) {
						if (a = Ze(s.slice(0, t).join("-"))) return a;
						if (n && n.length >= t && v(s, n, !0) >= t - 1) break;
						t--
					}
					i++
				}
				return null
			}

			function Ze(t) {
				var a = null;
				if (!cs[t] && void 0 !== e && e && e.exports) try {
					a = us._abbr, n(126)("./" + t), Xe(a)
				} catch (e) {}
				return cs[t]
			}

			function Xe(e, t) {
				var n;
				return e && (n = f(t) ? nt(e) : et(e, t)) && (us = n), us._abbr
			}

			function et(e, t) {
				if (null !== t) {
					var n = _s;
					if (t.abbr = e, null != cs[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = cs[e]._config;
					else if (null != t.parentLocale) {
						if (null == cs[t.parentLocale]) return ms[t.parentLocale] || (ms[t.parentLocale] = []), ms[t.parentLocale].push({
							name: e,
							config: t
						}), null;
						n = cs[t.parentLocale]._config
					}
					return cs[e] = new j(S(n, t)), ms[e] && ms[e].forEach(function (e) {
						et(e.name, e.config)
					}), Xe(e), cs[e]
				}
				return delete cs[e], null
			}

			function tt(e, t) {
				if (null != t) {
					var n, a = _s;
					null != cs[e] && (a = cs[e]._config), t = S(a, t), n = new j(t), n.parentLocale = cs[e], cs[e] = n, Xe(e)
				} else null != cs[e] && (null != cs[e].parentLocale ? cs[e] = cs[e].parentLocale : null != cs[e] && delete cs[e]);
				return cs[e]
			}

			function nt(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return us;
				if (!a(e)) {
					if (t = Ze(e)) return t;
					e = [e]
				}
				return Qe(e)
			}

			function at() {
				return ba(cs)
			}

			function st(e) {
				var t, n = e._a;
				return n && -2 === m(e).overflow && (t = n[Ia] < 0 || n[Ia] > 11 ? Ia : n[Ja] < 1 || n[Ja] > ie(n[za], n[Ia]) ? Ja : n[Ua] < 0 || n[Ua] > 24 || 24 === n[Ua] && (0 !== n[Ra] || 0 !== n[qa] || 0 !== n[Ga]) ? Ua : n[Ra] < 0 || n[Ra] > 59 ? Ra : n[qa] < 0 || n[qa] > 59 ? qa : n[Ga] < 0 || n[Ga] > 999 ? Ga : -1, m(e)._overflowDayOfYear && (t < za || t > Ja) && (t = Ja), m(e)._overflowWeeks && -1 === t && (t = Va), m(e)._overflowWeekday && -1 === t && (t = Ba), m(e).overflow = t), e
			}

			function it(e) {
				var t, n, a, s, i, r, o = e._i,
					d = hs.exec(o) || ps.exec(o);
				if (d) {
					for (m(e).iso = !0, t = 0, n = ys.length; t < n; t++)
						if (ys[t][1].exec(d[1])) {
							s = ys[t][0], a = !1 !== ys[t][2];
							break
						}
					if (null == s) return void(e._isValid = !1);
					if (d[3]) {
						for (t = 0, n = Ms.length; t < n; t++)
							if (Ms[t][1].exec(d[3])) {
								i = (d[2] || " ") + Ms[t][0];
								break
							}
						if (null == i) return void(e._isValid = !1)
					}
					if (!a && null != i) return void(e._isValid = !1);
					if (d[4]) {
						if (!fs.exec(d[4])) return void(e._isValid = !1);
						r = "Z"
					}
					e._f = s + (i || "") + (r || ""), _t(e)
				} else e._isValid = !1
			}

			function rt(e) {
				var n = Ls.exec(e._i);
				if (null !== n) return void(e._d = new Date(+n[1]));
				it(e), !1 === e._isValid && (delete e._isValid, t.createFromInputFallback(e))
			}

			function ot(e, t, n) {
				return null != e ? e : null != t ? t : n
			}

			function dt(e) {
				var n = new Date(t.now());
				return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
			}

			function ut(e) {
				var t, n, a, s, i = [];
				if (!e._d) {
					for (a = dt(e), e._w && null == e._a[Ja] && null == e._a[Ia] && lt(e), e._dayOfYear && (s = ot(e._a[za], a[za]), e._dayOfYear > fe(s) && (m(e)._overflowDayOfYear = !0), n = Ye(s, 0, e._dayOfYear), e._a[Ia] = n.getUTCMonth(), e._a[Ja] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = i[t] = a[t];
					for (; t < 7; t++) e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[Ua] && 0 === e._a[Ra] && 0 === e._a[qa] && 0 === e._a[Ga] && (e._nextDay = !0, e._a[Ua] = 0), e._d = (e._useUTC ? Ye : Le).apply(null, i), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ua] = 24)
				}
			}

			function lt(e) {
				var t, n, a, s, i, r, o, d;
				if (t = e._w, null != t.GG || null != t.W || null != t.E) i = 1, r = 4, n = ot(t.GG, e._a[za], ge(Lt(), 1, 4).year), a = ot(t.W, 1), ((s = ot(t.E, 1)) < 1 || s > 7) && (d = !0);
				else {
					i = e._locale._week.dow, r = e._locale._week.doy;
					var u = ge(Lt(), i, r);
					n = ot(t.gg, e._a[za], u.year), a = ot(t.w, u.week), null != t.d ? ((s = t.d) < 0 || s > 6) && (d = !0) : null != t.e ? (s = t.e + i, (t.e < 0 || t.e > 6) && (d = !0)) : s = i
				}
				a < 1 || a > be(n, i, r) ? m(e)._overflowWeeks = !0 : null != d ? m(e)._overflowWeekday = !0 : (o = ve(n, a, s, i, r), e._a[za] = o.year, e._dayOfYear = o.dayOfYear)
			}

			function _t(e) {
				if (e._f === t.ISO_8601) return void it(e);
				e._a = [], m(e).empty = !0;
				var n, a, s, i, r, o = "" + e._i,
					d = o.length,
					u = 0;
				for (s = Q(e._f, e._locale).match(Ha) || [], n = 0; n < s.length; n++) i = s[n], a = (o.match(X(i, e)) || [])[0], a && (r = o.substr(0, o.indexOf(a)), r.length > 0 && m(e).unusedInput.push(r), o = o.slice(o.indexOf(a) + a.length), u += a.length), Aa[i] ? (a ? m(e).empty = !1 : m(e).unusedTokens.push(i), se(i, a, e)) : e._strict && !a && m(e).unusedTokens.push(i);
				m(e).charsLeftOver = d - u, o.length > 0 && m(e).unusedInput.push(o), e._a[Ua] <= 12 && !0 === m(e).bigHour && e._a[Ua] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[Ua] = ct(e._locale, e._a[Ua], e._meridiem), ut(e), st(e)
			}

			function ct(e, t, n) {
				var a;
				return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (a = e.isPM(n), a && t < 12 && (t += 12), a || 12 !== t || (t = 0), t) : t
			}

			function mt(e) {
				var t, n, a, s, i;
				if (0 === e._f.length) return m(e).invalidFormat = !0, void(e._d = new Date(NaN));
				for (s = 0; s < e._f.length; s++) i = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], _t(t), h(t) && (i += m(t).charsLeftOver, i += 10 * m(t).unusedTokens.length, m(t).score = i, (null == a || i < a) && (a = i, n = t));
				l(e, n || t)
			}

			function ht(e) {
				if (!e._d) {
					var t = C(e._i);
					e._a = d([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
						return e && parseInt(e, 10)
					}), ut(e)
				}
			}

			function pt(e) {
				var t = new M(st(ft(e)));
				return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
			}

			function ft(e) {
				var t = e._i,
					n = e._f;
				return e._locale = e._locale || nt(e._l), null === t || void 0 === n && "" === t ? p({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), L(t) ? new M(st(t)) : (o(t) ? e._d = t : a(n) ? mt(e) : n ? _t(e) : yt(e), h(e) || (e._d = null), e))
			}

			function yt(e) {
				var n = e._i;
				void 0 === n ? e._d = new Date(t.now()) : o(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? rt(e) : a(n) ? (e._a = d(n.slice(0), function (e) {
					return parseInt(e, 10)
				}), ut(e)) : "object" == typeof n ? ht(e) : r(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
			}

			function Mt(e, t, n, r, o) {
				var d = {};
				return !0 !== n && !1 !== n || (r = n, n = void 0), (s(e) && i(e) || a(e) && 0 === e.length) && (e = void 0), d._isAMomentObject = !0, d._useUTC = d._isUTC = o, d._l = n, d._i = e, d._f = t, d._strict = r, pt(d)
			}

			function Lt(e, t, n, a) {
				return Mt(e, t, n, a, !1)
			}

			function Yt(e, t) {
				var n, s;
				if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Lt();
				for (n = t[0], s = 1; s < t.length; ++s) t[s].isValid() && !t[s][e](n) || (n = t[s]);
				return n
			}

			function kt() {
				return Yt("isBefore", [].slice.call(arguments, 0))
			}

			function vt() {
				return Yt("isAfter", [].slice.call(arguments, 0))
			}

			function gt(e) {
				var t = C(e),
					n = t.year || 0,
					a = t.quarter || 0,
					s = t.month || 0,
					i = t.week || 0,
					r = t.day || 0,
					o = t.hour || 0,
					d = t.minute || 0,
					u = t.second || 0,
					l = t.millisecond || 0;
				this._milliseconds = +l + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60, this._days = +r + 7 * i, this._months = +s + 3 * a + 12 * n, this._data = {}, this._locale = nt(), this._bubble()
			}

			function bt(e) {
				return e instanceof gt
			}

			function Dt(e) {
				return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
			}

			function wt(e, t) {
				V(e, 0, 0, function () {
					var e = this.utcOffset(),
						n = "+";
					return e < 0 && (e = -e, n = "-"), n + G(~~(e / 60), 2) + t + G(~~e % 60, 2)
				})
			}

			function Tt(e, t) {
				var n = (t || "").match(e);
				if (null === n) return null;
				var a = n[n.length - 1] || [],
					s = (a + "").match(gs) || ["-", 0, 0],
					i = 60 * s[1] + k(s[2]);
				return 0 === i ? 0 : "+" === s[0] ? i : -i
			}

			function St(e, n) {
				var a, s;
				return n._isUTC ? (a = n.clone(), s = (L(e) || o(e) ? e.valueOf() : Lt(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + s), t.updateOffset(a, !1), a) : Lt(e).local()
			}

			function jt(e) {
				return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
			}

			function Ht(e, n) {
				var a, s = this._offset || 0;
				if (!this.isValid()) return null != e ? this : NaN;
				if (null != e) {
					if ("string" == typeof e) {
						if (null === (e = Tt(Na, e))) return this
					} else Math.abs(e) < 16 && (e *= 60);
					return !this._isUTC && n && (a = jt(this)), this._offset = e, this._isUTC = !0, null != a && this.add(a, "m"), s !== e && (!n || this._changeInProgress ? Gt(this, It(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
				}
				return this._isUTC ? s : jt(this)
			}

			function Pt(e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}

			function xt(e) {
				return this.utcOffset(0, e)
			}

			function At(e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(jt(this), "m")), this
			}

			function Et() {
				if (null != this._tzm) this.utcOffset(this._tzm);
				else if ("string" == typeof this._i) {
					var e = Tt(Wa, this._i);
					null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
				}
				return this
			}

			function Wt(e) {
				return !!this.isValid() && (e = e ? Lt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
			}

			function Nt() {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			}

			function Ot() {
				if (!f(this._isDSTShifted)) return this._isDSTShifted;
				var e = {};
				if (y(e, this), e = ft(e), e._a) {
					var t = e._isUTC ? _(e._a) : Lt(e._a);
					this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0
				} else this._isDSTShifted = !1;
				return this._isDSTShifted
			}

			function Ct() {
				return !!this.isValid() && !this._isUTC
			}

			function Ft() {
				return !!this.isValid() && this._isUTC
			}

			function zt() {
				return !!this.isValid() && (this._isUTC && 0 === this._offset)
			}

			function It(e, t) {
				var n, a, s, i = e,
					o = null;
				return bt(e) ? i = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				} : r(e) ? (i = {}, t ? i[t] = e : i.milliseconds = e) : (o = bs.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
					y: 0,
					d: k(o[Ja]) * n,
					h: k(o[Ua]) * n,
					m: k(o[Ra]) * n,
					s: k(o[qa]) * n,
					ms: k(Dt(1e3 * o[Ga])) * n
				}) : (o = Ds.exec(e)) ? (n = "-" === o[1] ? -1 : 1, i = {
					y: Jt(o[2], n),
					M: Jt(o[3], n),
					w: Jt(o[4], n),
					d: Jt(o[5], n),
					h: Jt(o[6], n),
					m: Jt(o[7], n),
					s: Jt(o[8], n)
				}) : null == i ? i = {} : "object" == typeof i && ("from" in i || "to" in i) && (s = Rt(Lt(i.from), Lt(i.to)), i = {}, i.ms = s.milliseconds, i.M = s.months), a = new gt(i), bt(e) && u(e, "_locale") && (a._locale = e._locale), a
			}

			function Jt(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}

			function Ut(e, t) {
				var n = {
					milliseconds: 0,
					months: 0
				};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
			}

			function Rt(e, t) {
				var n;
				return e.isValid() && t.isValid() ? (t = St(t, e), e.isBefore(t) ? n = Ut(e, t) : (n = Ut(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
					milliseconds: 0,
					months: 0
				}
			}

			function qt(e, t) {
				return function (n, a) {
					var s, i;
					return null === a || isNaN(+a) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = a, a = i), n = "string" == typeof n ? +n : n, s = It(n, a), Gt(this, s, e), this
				}
			}

			function Gt(e, n, a, s) {
				var i = n._milliseconds,
					r = Dt(n._days),
					o = Dt(n._months);
				e.isValid() && (s = null == s || s, i && e._d.setTime(e._d.valueOf() + i * a), r && U(e, "Date", J(e, "Date") + r * a), o && le(e, J(e, "Month") + o * a), s && t.updateOffset(e, r || o))
			}

			function Vt(e, t) {
				var n = e.diff(t, "days", !0);
				return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
			}

			function Bt(e, n) {
				var a = e || Lt(),
					s = St(a, this).startOf("day"),
					i = t.calendarFormat(this, s) || "sameElse",
					r = n && (w(n[i]) ? n[i].call(this, a) : n[i]);
				return this.format(r || this.localeData().calendar(i, this, Lt(a)))
			}

			function $t() {
				return new M(this)
			}

			function Kt(e, t) {
				var n = L(e) ? e : Lt(e);
				return !(!this.isValid() || !n.isValid()) && (t = O(f(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
			}

			function Qt(e, t) {
				var n = L(e) ? e : Lt(e);
				return !(!this.isValid() || !n.isValid()) && (t = O(f(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
			}

			function Zt(e, t, n, a) {
				return a = a || "()", ("(" === a[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === a[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
			}

			function Xt(e, t) {
				var n, a = L(e) ? e : Lt(e);
				return !(!this.isValid() || !a.isValid()) && (t = O(t || "millisecond"), "millisecond" === t ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
			}

			function en(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			}

			function tn(e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			}

			function nn(e, t, n) {
				var a, s, i, r;
				return this.isValid() ? (a = St(e, this), a.isValid() ? (s = 6e4 * (a.utcOffset() - this.utcOffset()), t = O(t), "year" === t || "month" === t || "quarter" === t ? (r = an(this, a), "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (i = this - a, r = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - s) / 864e5 : "week" === t ? (i - s) / 6048e5 : i), n ? r : Y(r)) : NaN) : NaN
			}

			function an(e, t) {
				var n, a, s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
					i = e.clone().add(s, "months");
				return t - i < 0 ? (n = e.clone().add(s - 1, "months"), a = (t - i) / (i - n)) : (n = e.clone().add(s + 1, "months"), a = (t - i) / (n - i)), -(s + a) || 0
			}

			function sn() {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			}

			function rn() {
				var e = this.clone().utc();
				return 0 < e.year() && e.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
			}

			function on() {
				if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
				var e = "moment",
					t = "";
				this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
				var n = "[" + e + '("]',
					a = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
					s = t + '[")]';
				return this.format(n + a + "-MM-DD[T]HH:mm:ss.SSS" + s)
			}

			function dn(e) {
				e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
				var n = K(this, e);
				return this.localeData().postformat(n)
			}

			function un(e, t) {
				return this.isValid() && (L(e) && e.isValid() || Lt(e).isValid()) ? It({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function ln(e) {
				return this.from(Lt(), e)
			}

			function _n(e, t) {
				return this.isValid() && (L(e) && e.isValid() || Lt(e).isValid()) ? It({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function cn(e) {
				return this.to(Lt(), e)
			}

			function mn(e) {
				var t;
				return void 0 === e ? this._locale._abbr : (t = nt(e), null != t && (this._locale = t), this)
			}

			function hn() {
				return this._locale
			}

			function pn(e) {
				switch (e = O(e)) {
					case "year":
						this.month(0);
					case "quarter":
					case "month":
						this.date(1);
					case "week":
					case "isoWeek":
					case "day":
					case "date":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
			}

			function fn(e) {
				return void 0 === (e = O(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
			}

			function yn() {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			}

			function Mn() {
				return Math.floor(this.valueOf() / 1e3)
			}

			function Ln() {
				return new Date(this.valueOf())
			}

			function Yn() {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			}

			function kn() {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			}

			function vn() {
				return this.isValid() ? this.toISOString() : null
			}

			function gn() {
				return h(this)
			}

			function bn() {
				return l({}, m(this))
			}

			function Dn() {
				return m(this).overflow
			}

			function wn() {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			}

			function Tn(e, t) {
				V(0, [e, e.length], 0, t)
			}

			function Sn(e) {
				return xn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			}

			function jn(e) {
				return xn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			}

			function Hn() {
				return be(this.year(), 1, 4)
			}

			function Pn() {
				var e = this.localeData()._week;
				return be(this.year(), e.dow, e.doy)
			}

			function xn(e, t, n, a, s) {
				var i;
				return null == e ? ge(this, a, s).year : (i = be(e, a, s), t > i && (t = i), An.call(this, e, t, n, a, s))
			}

			function An(e, t, n, a, s) {
				var i = ve(e, t, n, a, s),
					r = Ye(i.year, 0, i.dayOfYear);
				return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
			}

			function En(e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			}

			function Wn(e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t : this.add(e - t, "d")
			}

			function Nn(e, t) {
				t[Ga] = k(1e3 * ("0." + e))
			}

			function On() {
				return this._isUTC ? "UTC" : ""
			}

			function Cn() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			}

			function Fn(e) {
				return Lt(1e3 * e)
			}

			function zn() {
				return Lt.apply(null, arguments).parseZone()
			}

			function In(e) {
				return e
			}

			function Jn(e, t, n, a) {
				var s = nt(),
					i = _().set(a, t);
				return s[n](i, e)
			}

			function Un(e, t, n) {
				if (r(e) && (t = e, e = void 0), e = e || "", null != t) return Jn(e, t, n, "month");
				var a, s = [];
				for (a = 0; a < 12; a++) s[a] = Jn(e, a, n, "month");
				return s
			}

			function Rn(e, t, n, a) {
				"boolean" == typeof e ? (r(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, r(t) && (n = t, t = void 0), t = t || "");
				var s = nt(),
					i = e ? s._week.dow : 0;
				if (null != n) return Jn(t, (n + i) % 7, a, "day");
				var o, d = [];
				for (o = 0; o < 7; o++) d[o] = Jn(t, (o + i) % 7, a, "day");
				return d
			}

			function qn(e, t) {
				return Un(e, t, "months")
			}

			function Gn(e, t) {
				return Un(e, t, "monthsShort")
			}

			function Vn(e, t, n) {
				return Rn(e, t, n, "weekdays")
			}

			function Bn(e, t, n) {
				return Rn(e, t, n, "weekdaysShort")
			}

			function $n(e, t, n) {
				return Rn(e, t, n, "weekdaysMin")
			}

			function Kn() {
				var e = this._data;
				return this._milliseconds = Ns(this._milliseconds), this._days = Ns(this._days), this._months = Ns(this._months), e.milliseconds = Ns(e.milliseconds), e.seconds = Ns(e.seconds), e.minutes = Ns(e.minutes), e.hours = Ns(e.hours), e.months = Ns(e.months), e.years = Ns(e.years), this
			}

			function Qn(e, t, n, a) {
				var s = It(t, n);
				return e._milliseconds += a * s._milliseconds, e._days += a * s._days, e._months += a * s._months, e._bubble()
			}

			function Zn(e, t) {
				return Qn(this, e, t, 1)
			}

			function Xn(e, t) {
				return Qn(this, e, t, -1)
			}

			function ea(e) {
				return e < 0 ? Math.floor(e) : Math.ceil(e)
			}

			function ta() {
				var e, t, n, a, s, i = this._milliseconds,
					r = this._days,
					o = this._months,
					d = this._data;
				return i >= 0 && r >= 0 && o >= 0 || i <= 0 && r <= 0 && o <= 0 || (i += 864e5 * ea(aa(o) + r), r = 0, o = 0), d.milliseconds = i % 1e3, e = Y(i / 1e3), d.seconds = e % 60, t = Y(e / 60), d.minutes = t % 60, n = Y(t / 60), d.hours = n % 24, r += Y(n / 24), s = Y(na(r)), o += s, r -= ea(aa(s)), a = Y(o / 12), o %= 12, d.days = r, d.months = o, d.years = a, this
			}

			function na(e) {
				return 4800 * e / 146097
			}

			function aa(e) {
				return 146097 * e / 4800
			}

			function sa(e) {
				var t, n, a = this._milliseconds;
				if ("month" === (e = O(e)) || "year" === e) return t = this._days + a / 864e5, n = this._months + na(t), "month" === e ? n : n / 12;
				switch (t = this._days + Math.round(aa(this._months)), e) {
					case "week":
						return t / 7 + a / 6048e5;
					case "day":
						return t + a / 864e5;
					case "hour":
						return 24 * t + a / 36e5;
					case "minute":
						return 1440 * t + a / 6e4;
					case "second":
						return 86400 * t + a / 1e3;
					case "millisecond":
						return Math.floor(864e5 * t) + a;
					default:
						throw new Error("Unknown unit " + e)
				}
			}

			function ia() {
				return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * k(this._months / 12)
			}

			function ra(e) {
				return function () {
					return this.as(e)
				}
			}

			function oa(e) {
				return e = O(e), this[e + "s"]()
			}

			function da(e) {
				return function () {
					return this._data[e]
				}
			}

			function ua() {
				return Y(this.days() / 7)
			}

			function la(e, t, n, a, s) {
				return s.relativeTime(t || 1, !!n, e, a)
			}

			function _a(e, t, n) {
				var a = It(e).abs(),
					s = Zs(a.as("s")),
					i = Zs(a.as("m")),
					r = Zs(a.as("h")),
					o = Zs(a.as("d")),
					d = Zs(a.as("M")),
					u = Zs(a.as("y")),
					l = s < Xs.s && ["s", s] || i <= 1 && ["m"] || i < Xs.m && ["mm", i] || r <= 1 && ["h"] || r < Xs.h && ["hh", r] || o <= 1 && ["d"] || o < Xs.d && ["dd", o] || d <= 1 && ["M"] || d < Xs.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
				return l[2] = t, l[3] = +e > 0, l[4] = n, la.apply(null, l)
			}

			function ca(e) {
				return void 0 === e ? Zs : "function" == typeof e && (Zs = e, !0)
			}

			function ma(e, t) {
				return void 0 !== Xs[e] && (void 0 === t ? Xs[e] : (Xs[e] = t, !0))
			}

			function ha(e) {
				var t = this.localeData(),
					n = _a(this, !e, t);
				return e && (n = t.pastFuture(+this, n)), t.postformat(n)
			}

			function pa() {
				var e, t, n, a = ei(this._milliseconds) / 1e3,
					s = ei(this._days),
					i = ei(this._months);
				e = Y(a / 60), t = Y(e / 60), a %= 60, e %= 60, n = Y(i / 12), i %= 12;
				var r = n,
					o = i,
					d = s,
					u = t,
					l = e,
					_ = a,
					c = this.asSeconds();
				return c ? (c < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (u || l || _ ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (_ ? _ + "S" : "") : "P0D"
			}
			var fa, ya;
			ya = Array.prototype.some ? Array.prototype.some : function (e) {
				for (var t = Object(this), n = t.length >>> 0, a = 0; a < n; a++)
					if (a in t && e.call(this, t[a], a, t)) return !0;
				return !1
			};
			var Ma = ya,
				La = t.momentProperties = [],
				Ya = !1,
				ka = {};
			t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
			var va;
			va = Object.keys ? Object.keys : function (e) {
				var t, n = [];
				for (t in e) u(e, t) && n.push(t);
				return n
			};
			var ga, ba = va,
				Da = {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				},
				wa = {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				},
				Ta = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				},
				Sa = {},
				ja = {},
				Ha = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
				Pa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				xa = {},
				Aa = {},
				Ea = /[+-]?\d{6}/,
				Wa = /Z|[+-]\d\d:?\d\d/gi,
				Na = /Z|[+-]\d\d(?::?\d\d)?/gi,
				Oa = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
				Ca = {},
				Fa = {},
				za = 0,
				Ia = 1,
				Ja = 2,
				Ua = 3,
				Ra = 4,
				qa = 5,
				Ga = 6,
				Va = 7,
				Ba = 8;
			ga = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
				var t;
				for (t = 0; t < this.length; ++t)
					if (this[t] === e) return t;
				return -1
			};
			var $a = ga;
			V("M", ["MM", 2], "Mo", function () {
				return this.month() + 1
			}), V("MMM", 0, 0, function (e) {
				return this.localeData().monthsShort(this, e)
			}), V("MMMM", 0, 0, function (e) {
				return this.localeData().months(this, e)
			}), N("month", "M"), F("month", 8), Z("M", /\d\d?/), Z("MM", /\d\d?/, /\d\d/), Z("MMM", function (e, t) {
				return t.monthsShortRegex(e)
			}), Z("MMMM", function (e, t) {
				return t.monthsRegex(e)
			}), ne(["M", "MM"], function (e, t) {
				t[Ia] = k(e) - 1
			}), ne(["MMM", "MMMM"], function (e, t, n, a) {
				var s = n._locale.monthsParse(e, a, n._strict);
				null != s ? t[Ia] = s : m(n).invalidMonth = e
			});
			var Ka = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
				Qa = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				Za = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
				Xa = Oa,
				es = Oa;
			V("Y", 0, 0, function () {
				var e = this.year();
				return e <= 9999 ? "" + e : "+" + e
			}), V(0, ["YY", 2], 0, function () {
				return this.year() % 100
			}), V(0, ["YYYY", 4], 0, "year"), V(0, ["YYYYY", 5], 0, "year"), V(0, ["YYYYYY", 6, !0], 0, "year"), N("year", "y"), F("year", 1), Z("Y", /[+-]?\d+/), Z("YY", /\d\d?/, /\d\d/), Z("YYYY", /\d{1,4}/, /\d{4}/), Z("YYYYY", /[+-]?\d{1,6}/, Ea), Z("YYYYYY", /[+-]?\d{1,6}/, Ea), ne(["YYYYY", "YYYYYY"], za), ne("YYYY", function (e, n) {
				n[za] = 2 === e.length ? t.parseTwoDigitYear(e) : k(e)
			}), ne("YY", function (e, n) {
				n[za] = t.parseTwoDigitYear(e)
			}), ne("Y", function (e, t) {
				t[za] = parseInt(e, 10)
			}), t.parseTwoDigitYear = function (e) {
				return k(e) + (k(e) > 68 ? 1900 : 2e3)
			};
			var ts = I("FullYear", !0);
			V("w", ["ww", 2], "wo", "week"), V("W", ["WW", 2], "Wo", "isoWeek"), N("week", "w"), N("isoWeek", "W"), F("week", 5), F("isoWeek", 5), Z("w", /\d\d?/), Z("ww", /\d\d?/, /\d\d/), Z("W", /\d\d?/), Z("WW", /\d\d?/, /\d\d/), ae(["w", "ww", "W", "WW"], function (e, t, n, a) {
				t[a.substr(0, 1)] = k(e)
			});
			var ns = {
				dow: 0,
				doy: 6
			};
			V("d", 0, "do", "day"), V("dd", 0, 0, function (e) {
				return this.localeData().weekdaysMin(this, e)
			}), V("ddd", 0, 0, function (e) {
				return this.localeData().weekdaysShort(this, e)
			}), V("dddd", 0, 0, function (e) {
				return this.localeData().weekdays(this, e)
			}), V("e", 0, 0, "weekday"), V("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), N("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), Z("d", /\d\d?/), Z("e", /\d\d?/), Z("E", /\d\d?/), Z("dd", function (e, t) {
				return t.weekdaysMinRegex(e)
			}), Z("ddd", function (e, t) {
				return t.weekdaysShortRegex(e)
			}), Z("dddd", function (e, t) {
				return t.weekdaysRegex(e)
			}), ae(["dd", "ddd", "dddd"], function (e, t, n, a) {
				var s = n._locale.weekdaysParse(e, a, n._strict);
				null != s ? t.d = s : m(n).invalidWeekday = e
			}), ae(["d", "e", "E"], function (e, t, n, a) {
				t[a] = k(e)
			});
			var as = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				ss = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				is = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				rs = Oa,
				os = Oa,
				ds = Oa;
			V("H", ["HH", 2], 0, "hour"), V("h", ["hh", 2], 0, Re), V("k", ["kk", 2], 0, qe), V("hmm", 0, 0, function () {
				return "" + Re.apply(this) + G(this.minutes(), 2)
			}), V("hmmss", 0, 0, function () {
				return "" + Re.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
			}), V("Hmm", 0, 0, function () {
				return "" + this.hours() + G(this.minutes(), 2)
			}), V("Hmmss", 0, 0, function () {
				return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
			}), Ge("a", !0), Ge("A", !1), N("hour", "h"), F("hour", 13), Z("a", Ve), Z("A", Ve), Z("H", /\d\d?/), Z("h", /\d\d?/), Z("HH", /\d\d?/, /\d\d/), Z("hh", /\d\d?/, /\d\d/), Z("hmm", /\d\d\d\d?/), Z("hmmss", /\d\d\d\d\d\d?/), Z("Hmm", /\d\d\d\d?/), Z("Hmmss", /\d\d\d\d\d\d?/), ne(["H", "HH"], Ua), ne(["a", "A"], function (e, t, n) {
				n._isPm = n._locale.isPM(e), n._meridiem = e
			}), ne(["h", "hh"], function (e, t, n) {
				t[Ua] = k(e), m(n).bigHour = !0
			}), ne("hmm", function (e, t, n) {
				var a = e.length - 2;
				t[Ua] = k(e.substr(0, a)), t[Ra] = k(e.substr(a)), m(n).bigHour = !0
			}), ne("hmmss", function (e, t, n) {
				var a = e.length - 4,
					s = e.length - 2;
				t[Ua] = k(e.substr(0, a)), t[Ra] = k(e.substr(a, 2)), t[qa] = k(e.substr(s)), m(n).bigHour = !0
			}), ne("Hmm", function (e, t, n) {
				var a = e.length - 2;
				t[Ua] = k(e.substr(0, a)), t[Ra] = k(e.substr(a))
			}), ne("Hmmss", function (e, t, n) {
				var a = e.length - 4,
					s = e.length - 2;
				t[Ua] = k(e.substr(0, a)), t[Ra] = k(e.substr(a, 2)), t[qa] = k(e.substr(s))
			});
			var us, ls = I("Hours", !0),
				_s = {
					calendar: Da,
					longDateFormat: wa,
					invalidDate: "Invalid date",
					ordinal: "%d",
					ordinalParse: /\d{1,2}/,
					relativeTime: Ta,
					months: Qa,
					monthsShort: Za,
					week: ns,
					weekdays: as,
					weekdaysMin: is,
					weekdaysShort: ss,
					meridiemParse: /[ap]\.?m?\.?/i
				},
				cs = {},
				ms = {},
				hs = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				ps = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
				fs = /Z|[+-]\d\d(?::?\d\d)?/,
				ys = [
					["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
					["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
					["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
					["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
					["YYYY-DDD", /\d{4}-\d{3}/],
					["YYYY-MM", /\d{4}-\d\d/, !1],
					["YYYYYYMMDD", /[+-]\d{10}/],
					["YYYYMMDD", /\d{8}/],
					["GGGG[W]WWE", /\d{4}W\d{3}/],
					["GGGG[W]WW", /\d{4}W\d{2}/, !1],
					["YYYYDDD", /\d{7}/]
				],
				Ms = [
					["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
					["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
					["HH:mm:ss", /\d\d:\d\d:\d\d/],
					["HH:mm", /\d\d:\d\d/],
					["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
					["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
					["HHmmss", /\d\d\d\d\d\d/],
					["HHmm", /\d\d\d\d/],
					["HH", /\d\d/]
				],
				Ls = /^\/?Date\((\-?\d+)/i;
			t.createFromInputFallback = b("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
			}), t.ISO_8601 = function () {};
			var Ys = b("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = Lt.apply(null, arguments);
					return this.isValid() && e.isValid() ? e < this ? this : e : p()
				}),
				ks = b("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
					var e = Lt.apply(null, arguments);
					return this.isValid() && e.isValid() ? e > this ? this : e : p()
				}),
				vs = function () {
					return Date.now ? Date.now() : +new Date
				};
			wt("Z", ":"), wt("ZZ", ""), Z("Z", Na), Z("ZZ", Na), ne(["Z", "ZZ"], function (e, t, n) {
				n._useUTC = !0, n._tzm = Tt(Na, e)
			});
			var gs = /([\+\-]|\d\d)/gi;
			t.updateOffset = function () {};
			var bs = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
				Ds = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
			It.fn = gt.prototype;
			var ws = qt(1, "add"),
				Ts = qt(-1, "subtract");
			t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var Ss = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});
			V(0, ["gg", 2], 0, function () {
				return this.weekYear() % 100
			}), V(0, ["GG", 2], 0, function () {
				return this.isoWeekYear() % 100
			}), Tn("gggg", "weekYear"), Tn("ggggg", "weekYear"), Tn("GGGG", "isoWeekYear"), Tn("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), Z("G", /[+-]?\d+/), Z("g", /[+-]?\d+/), Z("GG", /\d\d?/, /\d\d/), Z("gg", /\d\d?/, /\d\d/), Z("GGGG", /\d{1,4}/, /\d{4}/), Z("gggg", /\d{1,4}/, /\d{4}/), Z("GGGGG", /[+-]?\d{1,6}/, Ea), Z("ggggg", /[+-]?\d{1,6}/, Ea), ae(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
				t[a.substr(0, 2)] = k(e)
			}), ae(["gg", "GG"], function (e, n, a, s) {
				n[s] = t.parseTwoDigitYear(e)
			}), V("Q", 0, "Qo", "quarter"), N("quarter", "Q"), F("quarter", 7), Z("Q", /\d/), ne("Q", function (e, t) {
				t[Ia] = 3 * (k(e) - 1)
			}), V("D", ["DD", 2], "Do", "date"), N("date", "D"), F("date", 9), Z("D", /\d\d?/), Z("DD", /\d\d?/, /\d\d/), Z("Do", function (e, t) {
				return e ? t._ordinalParse : t._ordinalParseLenient
			}), ne(["D", "DD"], Ja), ne("Do", function (e, t) {
				t[Ja] = k(e.match(/\d\d?/)[0], 10)
			});
			var js = I("Date", !0);
			V("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), F("dayOfYear", 4), Z("DDD", /\d{1,3}/), Z("DDDD", /\d{3}/), ne(["DDD", "DDDD"], function (e, t, n) {
				n._dayOfYear = k(e)
			}), V("m", ["mm", 2], 0, "minute"), N("minute", "m"), F("minute", 14), Z("m", /\d\d?/), Z("mm", /\d\d?/, /\d\d/), ne(["m", "mm"], Ra);
			var Hs = I("Minutes", !1);
			V("s", ["ss", 2], 0, "second"), N("second", "s"), F("second", 15), Z("s", /\d\d?/), Z("ss", /\d\d?/, /\d\d/), ne(["s", "ss"], qa);
			var Ps = I("Seconds", !1);
			V("S", 0, 0, function () {
				return ~~(this.millisecond() / 100)
			}), V(0, ["SS", 2], 0, function () {
				return ~~(this.millisecond() / 10)
			}), V(0, ["SSS", 3], 0, "millisecond"), V(0, ["SSSS", 4], 0, function () {
				return 10 * this.millisecond()
			}), V(0, ["SSSSS", 5], 0, function () {
				return 100 * this.millisecond()
			}), V(0, ["SSSSSS", 6], 0, function () {
				return 1e3 * this.millisecond()
			}), V(0, ["SSSSSSS", 7], 0, function () {
				return 1e4 * this.millisecond()
			}), V(0, ["SSSSSSSS", 8], 0, function () {
				return 1e5 * this.millisecond()
			}), V(0, ["SSSSSSSSS", 9], 0, function () {
				return 1e6 * this.millisecond()
			}), N("millisecond", "ms"), F("millisecond", 16), Z("S", /\d{1,3}/, /\d/), Z("SS", /\d{1,3}/, /\d\d/), Z("SSS", /\d{1,3}/, /\d{3}/);
			var xs;
			for (xs = "SSSS"; xs.length <= 9; xs += "S") Z(xs, /\d+/);
			for (xs = "S"; xs.length <= 9; xs += "S") ne(xs, Nn);
			var As = I("Milliseconds", !1);
			V("z", 0, 0, "zoneAbbr"), V("zz", 0, 0, "zoneName");
			var Es = M.prototype;
			Es.add = ws, Es.calendar = Bt, Es.clone = $t, Es.diff = nn, Es.endOf = fn, Es.format = dn, Es.from = un, Es.fromNow = ln, Es.to = _n, Es.toNow = cn, Es.get = R, Es.invalidAt = Dn, Es.isAfter = Kt, Es.isBefore = Qt, Es.isBetween = Zt, Es.isSame = Xt, Es.isSameOrAfter = en, Es.isSameOrBefore = tn, Es.isValid = gn, Es.lang = Ss, Es.locale = mn, Es.localeData = hn, Es.max = ks, Es.min = Ys, Es.parsingFlags = bn, Es.set = q, Es.startOf = pn, Es.subtract = Ts, Es.toArray = Yn, Es.toObject = kn, Es.toDate = Ln, Es.toISOString = rn, Es.inspect = on, Es.toJSON = vn, Es.toString = sn, Es.unix = Mn, Es.valueOf = yn, Es.creationData = wn, Es.year = ts, Es.isLeapYear = Me, Es.weekYear = Sn, Es.isoWeekYear = jn, Es.quarter = Es.quarters = En, Es.month = _e, Es.daysInMonth = ce, Es.week = Es.weeks = Se, Es.isoWeek = Es.isoWeeks = je, Es.weeksInYear = Pn, Es.isoWeeksInYear = Hn, Es.date = js, Es.day = Es.days = Oe, Es.weekday = Ce, Es.isoWeekday = Fe, Es.dayOfYear = Wn, Es.hour = Es.hours = ls, Es.minute = Es.minutes = Hs, Es.second = Es.seconds = Ps, Es.millisecond = Es.milliseconds = As, Es.utcOffset = Ht, Es.utc = xt, Es.local = At, Es.parseZone = Et, Es.hasAlignedHourOffset = Wt, Es.isDST = Nt, Es.isLocal = Ct, Es.isUtcOffset = Ft, Es.isUtc = zt, Es.isUTC = zt, Es.zoneAbbr = On, Es.zoneName = Cn, Es.dates = b("dates accessor is deprecated. Use date instead.", js), Es.months = b("months accessor is deprecated. Use month instead", _e), Es.years = b("years accessor is deprecated. Use year instead", ts), Es.zone = b("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Pt), Es.isDSTShifted = b("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ot);
			var Ws = j.prototype;
			Ws.calendar = H, Ws.longDateFormat = P, Ws.invalidDate = x, Ws.ordinal = A, Ws.preparse = In, Ws.postformat = In, Ws.relativeTime = E, Ws.pastFuture = W, Ws.set = T, Ws.months = re, Ws.monthsShort = oe, Ws.monthsParse = ue, Ws.monthsRegex = he, Ws.monthsShortRegex = me, Ws.week = De, Ws.firstDayOfYear = Te, Ws.firstDayOfWeek = we, Ws.weekdays = xe, Ws.weekdaysMin = Ee, Ws.weekdaysShort = Ae, Ws.weekdaysParse = Ne, Ws.weekdaysRegex = ze, Ws.weekdaysShortRegex = Ie, Ws.weekdaysMinRegex = Je, Ws.isPM = Be, Ws.meridiem = $e, Xe("en", {
				ordinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function (e) {
					var t = e % 10;
					return e + (1 === k(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
				}
			}), t.lang = b("moment.lang is deprecated. Use moment.locale instead.", Xe), t.langData = b("moment.langData is deprecated. Use moment.localeData instead.", nt);
			var Ns = Math.abs,
				Os = ra("ms"),
				Cs = ra("s"),
				Fs = ra("m"),
				zs = ra("h"),
				Is = ra("d"),
				Js = ra("w"),
				Us = ra("M"),
				Rs = ra("y"),
				qs = da("milliseconds"),
				Gs = da("seconds"),
				Vs = da("minutes"),
				Bs = da("hours"),
				$s = da("days"),
				Ks = da("months"),
				Qs = da("years"),
				Zs = Math.round,
				Xs = {
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11
				},
				ei = Math.abs,
				ti = gt.prototype;
			return ti.abs = Kn, ti.add = Zn, ti.subtract = Xn, ti.as = sa, ti.asMilliseconds = Os, ti.asSeconds = Cs, ti.asMinutes = Fs, ti.asHours = zs, ti.asDays = Is, ti.asWeeks = Js, ti.asMonths = Us, ti.asYears = Rs, ti.valueOf = ia, ti._bubble = ta, ti.get = oa, ti.milliseconds = qs, ti.seconds = Gs, ti.minutes = Vs, ti.hours = Bs, ti.days = $s, ti.weeks = ua, ti.months = Ks, ti.years = Qs, ti.humanize = ha, ti.toISOString = pa, ti.toString = pa, ti.toJSON = pa, ti.locale = mn, ti.localeData = hn, ti.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pa), ti.lang = Ss, V("X", 0, 0, "unix"), V("x", 0, 0, "valueOf"), Z("x", /[+-]?\d+/), Z("X", /[+-]?\d+(\.\d{1,3})?/), ne("X", function (e, t, n) {
					n._d = new Date(1e3 * parseFloat(e, 10))
				}), ne("x", function (e, t, n) {
					n._d = new Date(k(e))
				}), t.version = "2.17.1",
				function (e) {
					fa = e
				}(Lt), t.fn = Es, t.min = kt, t.max = vt, t.now = vs, t.utc = _, t.unix = Fn, t.months = qn, t.isDate = o, t.locale = Xe, t.invalid = p, t.duration = It, t.isMoment = L, t.weekdays = Vn, t.parseZone = zn, t.localeData = nt, t.isDuration = bt, t.monthsShort = Gn, t.weekdaysMin = $n, t.defineLocale = et, t.updateLocale = tt, t.locales = at, t.weekdaysShort = Bn, t.normalizeUnits = O, t.relativeTimeRounding = ca, t.relativeTimeThreshold = ma, t.calendarFormat = Vt, t.prototype = Es, t
		})
	}).call(t, n(127)(e))
}, function (e, t, n) {
	"use strict";

	function a() {}

	function s(e, t) {
		var n, s, i, r, o = W;
		for (r = arguments.length; r-- > 2;) E.push(arguments[r]);
		for (t && null != t.children && (E.length || E.push(t.children), delete t.children); E.length;)
			if ((s = E.pop()) && void 0 !== s.pop)
				for (r = s.length; r--;) E.push(s[r]);
			else "boolean" == typeof s && (s = null), (i = "function" != typeof e) && (null == s ? s = "" : "number" == typeof s ? s = String(s) : "string" != typeof s && (i = !1)), i && n ? o[o.length - 1] += s : o === W ? o = [s] : o.push(s), n = i;
		var d = new a;
		return d.nodeName = e, d.children = o, d.attributes = null == t ? void 0 : t, d.key = null == t ? void 0 : t.key, void 0 !== A.vnode && A.vnode(d), d
	}

	function i(e, t) {
		for (var n in t) e[n] = t[n];
		return e
	}

	function r(e, t) {
		return s(e.nodeName, i(i({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children)
	}

	function o(e) {
		!e._dirty && (e._dirty = !0) && 1 == C.push(e) && (A.debounceRendering || N)(d)
	}

	function d() {
		var e, t = C;
		for (C = []; e = t.pop();) e._dirty && S(e)
	}

	function u(e, t, n) {
		return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName
	}

	function l(e, t) {
		return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function _(e) {
		var t = i({}, e.attributes);
		t.children = e.children;
		var n = e.nodeName.defaultProps;
		if (void 0 !== n)
			for (var a in n) void 0 === t[a] && (t[a] = n[a]);
		return t
	}

	function c(e, t) {
		var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
		return n.normalizedNodeName = e, n
	}

	function m(e) {
		var t = e.parentNode;
		t && t.removeChild(e)
	}

	function h(e, t, n, a, s) {
		if ("className" === t && (t = "class"), "key" === t);
		else if ("ref" === t) n && n(null), a && a(e);
		else if ("class" !== t || s)
			if ("style" === t) {
				if (a && "string" != typeof a && "string" != typeof n || (e.style.cssText = a || ""), a && "object" == typeof a) {
					if ("string" != typeof n)
						for (var i in n) i in a || (e.style[i] = "");
					for (var i in a) e.style[i] = "number" == typeof a[i] && !1 === O.test(i) ? a[i] + "px" : a[i]
				}
			} else if ("dangerouslySetInnerHTML" === t) a && (e.innerHTML = a.__html || "");
		else if ("o" == t[0] && "n" == t[1]) {
			var r = t !== (t = t.replace(/Capture$/, ""));
			t = t.toLowerCase().substring(2), a ? n || e.addEventListener(t, f, r) : e.removeEventListener(t, f, r), (e._listeners || (e._listeners = {}))[t] = a
		} else if ("list" !== t && "type" !== t && !s && t in e) p(e, t, null == a ? "" : a), null != a && !1 !== a || e.removeAttribute(t);
		else {
			var o = s && t !== (t = t.replace(/^xlink\:?/, ""));
			null == a || !1 === a ? o ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof a && (o ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), a) : e.setAttribute(t, a))
		} else e.className = a || ""
	}

	function p(e, t, n) {
		try {
			e[t] = n
		} catch (e) {}
	}

	function f(e) {
		return this._listeners[e.type](A.event && A.event(e) || e)
	}

	function y() {
		for (var e; e = F.pop();) A.afterMount && A.afterMount(e), e.componentDidMount && e.componentDidMount()
	}

	function M(e, t, n, a, s, i) {
		z++ || (I = null != s && void 0 !== s.ownerSVGElement, J = null != e && !("__preactattr_" in e));
		var r = L(e, t, n, a, i);
		return s && r.parentNode !== s && s.appendChild(r), --z || (J = !1, i || y()), r
	}

	function L(e, t, n, a, s) {
		var i = e,
			r = I;
		if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || s) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0))), i.__preactattr_ = !0, i;
		var o = t.nodeName;
		if ("function" == typeof o) return j(e, t, n, a);
		if (I = "svg" === o || "foreignObject" !== o && I, o = String(o), (!e || !l(e, o)) && (i = c(o, I), e)) {
			for (; e.firstChild;) i.appendChild(e.firstChild);
			e.parentNode && e.parentNode.replaceChild(i, e), k(e, !0)
		}
		var d = i.firstChild,
			u = i.__preactattr_,
			_ = t.children;
		if (null == u) {
			u = i.__preactattr_ = {};
			for (var m = i.attributes, h = m.length; h--;) u[m[h].name] = m[h].value
		}
		return !J && _ && 1 === _.length && "string" == typeof _[0] && null != d && void 0 !== d.splitText && null == d.nextSibling ? d.nodeValue != _[0] && (d.nodeValue = _[0]) : (_ && _.length || null != d) && Y(i, _, n, a, J || null != u.dangerouslySetInnerHTML), g(i, t.attributes, u), I = r, i
	}

	function Y(e, t, n, a, s) {
		var i, r, o, d, l, _ = e.childNodes,
			c = [],
			h = {},
			p = 0,
			f = 0,
			y = _.length,
			M = 0,
			Y = t ? t.length : 0;
		if (0 !== y)
			for (var v = 0; v < y; v++) {
				var g = _[v],
					b = g.__preactattr_,
					D = Y && b ? g._component ? g._component.__key : b.key : null;
				null != D ? (p++, h[D] = g) : (b || (void 0 !== g.splitText ? !s || g.nodeValue.trim() : s)) && (c[M++] = g)
			}
		if (0 !== Y)
			for (var v = 0; v < Y; v++) {
				d = t[v], l = null;
				var D = d.key;
				if (null != D) p && void 0 !== h[D] && (l = h[D], h[D] = void 0, p--);
				else if (!l && f < M)
					for (i = f; i < M; i++)
						if (void 0 !== c[i] && u(r = c[i], d, s)) {
							l = r, c[i] = void 0, i === M - 1 && M--, i === f && f++;
							break
						}
				l = L(l, d, n, a), o = _[v], l && l !== e && l !== o && (null == o ? e.appendChild(l) : l === o.nextSibling ? m(o) : e.insertBefore(l, o))
			}
		if (p)
			for (var v in h) void 0 !== h[v] && k(h[v], !1);
		for (; f <= M;) void 0 !== (l = c[M--]) && k(l, !1)
	}

	function k(e, t) {
		var n = e._component;
		n ? H(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || m(e), v(e))
	}

	function v(e) {
		for (e = e.lastChild; e;) {
			var t = e.previousSibling;
			k(e, !0), e = t
		}
	}

	function g(e, t, n) {
		var a;
		for (a in n) t && null != t[a] || null == n[a] || h(e, a, n[a], n[a] = void 0, I);
		for (a in t) "children" === a || "innerHTML" === a || a in n && t[a] === ("value" === a || "checked" === a ? e[a] : n[a]) || h(e, a, n[a], n[a] = t[a], I)
	}

	function b(e) {
		var t = e.constructor.name;
		(U[t] || (U[t] = [])).push(e)
	}

	function D(e, t, n) {
		var a, s = U[e.name];
		if (e.prototype && e.prototype.render ? (a = new e(t, n), P.call(a, t, n)) : (a = new P(t, n), a.constructor = e, a.render = w), s)
			for (var i = s.length; i--;)
				if (s[i].constructor === e) {
					a.nextBase = s[i].nextBase, s.splice(i, 1);
					break
				}
		return a
	}

	function w(e, t, n) {
		return this.constructor(e, n)
	}

	function T(e, t, n, a, s) {
		e._disable || (e._disable = !0, (e.__ref = t.ref) && delete t.ref, (e.__key = t.key) && delete t.key, !e.base || s ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, a), a && a !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = a), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === A.syncComponentUpdates && e.base ? o(e) : S(e, 1, s)), e.__ref && e.__ref(e))
	}

	function S(e, t, n, a) {
		if (!e._disable) {
			var s, r, o, d = e.props,
				u = e.state,
				l = e.context,
				c = e.prevProps || d,
				m = e.prevState || u,
				h = e.prevContext || l,
				p = e.base,
				f = e.nextBase,
				L = p || f,
				Y = e._component,
				v = !1;
			if (p && (e.props = c, e.state = m, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(d, u, l) ? v = !0 : e.componentWillUpdate && e.componentWillUpdate(d, u, l), e.props = d, e.state = u, e.context = l), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !v) {
				s = e.render(d, u, l), e.getChildContext && (l = i(i({}, l), e.getChildContext()));
				var g, b, w = s && s.nodeName;
				if ("function" == typeof w) {
					var j = _(s);
					r = Y, r && r.constructor === w && j.key == r.__key ? T(r, j, 1, l, !1) : (g = r, e._component = r = D(w, j, l), r.nextBase = r.nextBase || f, r._parentComponent = e, T(r, j, 0, l, !1), S(r, 1, n, !0)), b = r.base
				} else o = L, g = Y, g && (o = e._component = null), (L || 1 === t) && (o && (o._component = null), b = M(o, s, l, n || !p, L && L.parentNode, !0));
				if (L && b !== L && r !== Y) {
					var P = L.parentNode;
					P && b !== P && (P.replaceChild(b, L), g || (L._component = null, k(L, !1)))
				}
				if (g && H(g), e.base = b, b && !a) {
					for (var x = e, E = e; E = E._parentComponent;)(x = E).base = b;
					b._component = x, b._componentConstructor = x.constructor
				}
			}
			if (!p || n ? F.unshift(e) : v || (e.componentDidUpdate && e.componentDidUpdate(c, m, h), A.afterUpdate && A.afterUpdate(e)), null != e._renderCallbacks)
				for (; e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
			z || a || y()
		}
	}

	function j(e, t, n, a) {
		for (var s = e && e._component, i = s, r = e, o = s && e._componentConstructor === t.nodeName, d = o, u = _(t); s && !d && (s = s._parentComponent);) d = s.constructor === t.nodeName;
		return s && d && (!a || s._component) ? (T(s, u, 3, n, a), e = s.base) : (i && !o && (H(i), e = r = null), s = D(t.nodeName, u, n), e && !s.nextBase && (s.nextBase = e, r = null), T(s, u, 1, n, a), e = s.base, r && e !== r && (r._component = null, k(r, !1))), e
	}

	function H(e) {
		A.beforeUnmount && A.beforeUnmount(e);
		var t = e.base;
		e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
		var n = e._component;
		n ? H(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.nextBase = t, m(t), b(e), v(t)), e.__ref && e.__ref(null)
	}

	function P(e, t) {
		this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}
	}

	function x(e, t, n) {
		return M(n, e, {}, !1, t, !1)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), n.d(t, "h", function () {
		return s
	}), n.d(t, "createElement", function () {
		return s
	}), n.d(t, "cloneElement", function () {
		return r
	}), n.d(t, "Component", function () {
		return P
	}), n.d(t, "render", function () {
		return x
	}), n.d(t, "rerender", function () {
		return d
	}), n.d(t, "options", function () {
		return A
	});
	var A = {},
		E = [],
		W = [],
		N = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
		O = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
		C = [],
		F = [],
		z = 0,
		I = !1,
		J = !1,
		U = {};
	i(P.prototype, {
		setState: function (e, t) {
			var n = this.state;
			this.prevState || (this.prevState = i({}, n)), i(n, "function" == typeof e ? e(n, this.props) : e), t && (this._renderCallbacks = this._renderCallbacks || []).push(t), o(this)
		},
		forceUpdate: function (e) {
			e && (this._renderCallbacks = this._renderCallbacks || []).push(e), S(this, 2)
		},
		render: function () {}
	});
	var R = {
		h: s,
		createElement: s,
		cloneElement: r,
		Component: P,
		render: x,
		rerender: d,
		options: A
	};
	t.default = R
}, function (e, t, n) {
	"use strict";

	function a(e) {
		var t = Math.floor(e / 60),
			n = Math.floor(t / 60),
			a = Math.floor(e % 60),
			s = "";
		return n > 0 && (t -= 60 * n, s = n.toString() + (t < 10 ? ":0" : ":")), s + t.toString() + ":" + (a < 10 ? "0" + a.toString() : a.toString())
	}

	function s(e) {
		for (var t = "", n = 0; n < e.length; n++) t += e.charCodeAt(n).toString(16);
		return t
	}

	function i(e, t) {
		var n = e.indexOf(t);
		return n > -1 && e.splice(n, 1), e
	}

	function r(e) {
		for (var t, n, a = e.length; a > 0;) n = Math.random() * a-- | 0, t = e[a], e[a] = e[n], e[n] = t;
		return e
	}

	function o() {
		return Math.random().toString().replace(/[^A-Za-z0-9]/, "")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SecondsToTime = a, t.HexEncode = s, t.ArrayDeleteElement = i, t.ArrayShuffle = r, t.UniqueID = o
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.ImageViewer = t.ListPrompt = t.InputPrompt = t.Prompt = t.IconMessage = t.TabGroup = t.CoverArt = void 0;
	var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		o = n(1),
		d = n(2);
	(t.CoverArt = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i._image = null, i.state = {
				error: !1
			}, i.popup = i.popup.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "componentWillReceiveProps",
			value: function (e) {
				this.setState({
					error: !1
				})
			}
		}, {
			key: "popup",
			value: function () {
				this.props.events && this.props.events.publish({
					event: "showImage",
					data: this.props.subsonic.getUrl("getCoverArt", {
						id: this.props.id
					})
				})
			}
		}, {
			key: "render",
			value: function () {
				var e = this,
					t = {
						maxHeight: this.props.size + "px",
						maxWidth: this.props.size + "px"
					},
					n = this.state.error ? "css/aurial_200.png" : this.props.subsonic.getUrl("getCoverArt", {
						id: this.props.id,
						size: this.props.size
					});
				return (0, o.h)("img", {
					className: "ui image leftlistalbumicon",
					src: n,
					style: t,
					onClick: this.popup,
					onError: function () {
						return e.setState({
							error: !0
						})
					}
				})
			}
		}]), t
	}(o.Component)).defaultProps = {
		id: 0,
		size: 20
	}, (t.TabGroup = function (e) {
		function t() {
			return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return i(t, e), r(t, [{
			key: "componentDidMount",
			value: function () {
				$(".menu .item").tab()
			}
		}, {
			key: "render",
			value: function () {
				var e = this.props.tabs.map(function (e) {
					return (0, o.h)(u, {
						key: e.id,
						id: e.id,
						title: e.title,
						active: e.active,
						icon: e.icon
					})
				});
				return (0, o.h)("div", {
					className: "ui secondary pointing menu"
				}, e)
			}
		}]), t
	}(o.Component)).defaultProps = {
		tabs: []
	};
	var u = function (e) {
		function t() {
			return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return i(t, e), r(t, [{
			key: "render",
			value: function () {
				var e = null != this.props.icon ? (0, o.h)("i", {
					className: this.props.icon + " icon"
				}) : null;
				return (0, o.h)("a", {
					className: this.props.active ? "active item" : "item",
					"data-tab": this.props.id
				}, e, this.props.title)
			}
		}]), t
	}(o.Component);
	u.defaultProps = {
		icon: null,
		active: !1
	}, (t.IconMessage = function (e) {
		function t() {
			return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return i(t, e), r(t, [{
			key: "render",
			value: function () {
				return (0, o.h)("div", {
					className: "ui basic segment"
				}, (0, o.h)("div", {
					className: "ui icon message " + this.props.type
				}, (0, o.h)("i", {
					className: this.props.icon + " icon"
				}), (0, o.h)("div", {
					className: "content"
				}, (0, o.h)("div", {
					className: "header"
				}, this.props.header), (0, o.h)("p", null, this.props.message))))
			}
		}]), t
	}(o.Component)).defaultProps = {
		icon: "info circle",
		type: "info"
	}, (t.Prompt = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i._id = (0, d.UniqueID)(), i.show = i.show.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "componentDidMount",
			value: function () {
				$("#" + this._id).modal({
					onApprove: function () {
						this.state.result(!0)
					}.bind(this),
					onDeny: function () {
						this.state.result(!1)
					}.bind(this)
				})
			}
		}, {
			key: "show",
			value: function (e) {
				this.setState({
					result: e
				}), $("#" + this._id).modal("show")
			}
		}, {
			key: "render",
			value: function () {
				return (0, o.h)("div", {
					id: this._id,
					className: "ui small modal"
				}, (0, o.h)("div", {
					className: "header"
				}, this.props.title), (0, o.h)("div", {
					className: "image content"
				}, (0, o.h)("div", {
					className: "image"
				}, (0, o.h)("i", {
					className: this.props.icon + " icon"
				})), (0, o.h)("div", {
					className: "description"
				}, this.props.message)), (0, o.h)("div", {
					className: "actions"
				}, (0, o.h)("div", {
					className: "ui cancel button"
				}, this.props.cancel), (0, o.h)("div", {
					className: "ui blue ok button"
				}, this.props.ok)))
			}
		}]), t
	}(o.Component)).defaultProps = {
		title: "Question",
		message: "Are you sure?",
		ok: "OK",
		cancel: "Cancel",
		icon: "grey help circle"
	}, (t.InputPrompt = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i._id = (0, d.UniqueID)(), i.state = {
				value: ""
			}, i.show = i.show.bind(i), i.change = i.change.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "componentDidMount",
			value: function () {
				$("#" + this._id).modal({
					onApprove: function () {
						this.state.result(!0, this.state.value)
					}.bind(this),
					onDeny: function () {
						this.state.result(!1, this.state.value)
					}.bind(this)
				})
			}
		}, {
			key: "show",
			value: function (e, t) {
				this.setState({
					value: e,
					result: t
				}), $("#" + this._id).modal("show")
			}
		}, {
			key: "change",
			value: function (e) {
				switch (e.target.name) {
					case "value":
						this.setState({
							value: e.target.value
						})
				}
			}
		}, {
			key: "render",
			value: function () {
				return (0, o.h)("div", {
					id: this._id,
					className: "ui small modal"
				}, (0, o.h)("div", {
					className: "header"
				}, this.props.title), (0, o.h)("div", {
					className: "image content"
				}, (0, o.h)("div", {
					className: "image"
				}, (0, o.h)("i", {
					className: this.props.icon + " icon"
				})), (0, o.h)("div", {
					className: "description"
				}, (0, o.h)("form", {
					className: "ui form",
					onSubmit: function (e) {
						e.preventDefault()
					}
				}, (0, o.h)("div", {
					className: "field"
				}, (0, o.h)("label", null, this.props.message), (0, o.h)("input", {
					name: "value",
					type: "text",
					onChange: this.change,
					value: this.state.value
				}))))), (0, o.h)("div", {
					className: "actions"
				}, (0, o.h)("div", {
					className: "ui cancel button"
				}, this.props.cancel), (0, o.h)("div", {
					className: "ui blue ok button"
				}, this.props.ok)))
			}
		}]), t
	}(o.Component)).defaultProps = {
		title: "Prompt",
		message: "Please provide a value",
		ok: "OK",
		cancel: "Cancel",
		icon: "grey edit"
	}, (t.ListPrompt = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i._id = (0, d.UniqueID)(), i.state = {
				value: e.value
			}, i.show = i.show.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "componentDidMount",
			value: function () {
				$("#" + this._id).modal({
					onApprove: function () {
						this.state.approve(!0, this.state.value)
					}.bind(this),
					onDeny: function () {
						this.state.approve(!1, this.state.value)
					}.bind(this)
				})
			}
		}, {
			key: "show",
			value: function (e) {
				this.setState({
					value: this.props.value,
					approve: e
				}), $("#" + this._id + " .dropdown").dropdown({
					action: "activate",
					allowAdditions: this.props.allowNew,
					onChange: function (e, t, n) {
						this.setState({
							value: e
						})
					}.bind(this)
				}), $("#" + this._id + " .dropdown").dropdown("clear"), $("#" + this._id).modal("show")
			}
		}, {
			key: "render",
			value: function () {
				return (0, o.h)("div", {
					id: this._id,
					className: "ui small modal"
				}, (0, o.h)("div", {
					className: "header"
				}, this.props.title), (0, o.h)("div", {
					className: "image content"
				}, (0, o.h)("div", {
					className: "image"
				}, (0, o.h)("i", {
					className: this.props.icon + " icon"
				})), (0, o.h)("div", {
					className: "description"
				}, (0, o.h)("div", null, this.props.message), (0, o.h)("div", {
					className: "ui basic segment"
				}, (0, o.h)("div", {
					className: "ui fluid search selection dropdown"
				}, (0, o.h)("i", {
					className: "dropdown icon"
				}), (0, o.h)("div", {
					className: "default text"
				}, this.props.defaultText), (0, o.h)("div", {
					className: "menu"
				}, this.props.items))))), (0, o.h)("div", {
					className: "actions"
				}, (0, o.h)("div", {
					className: "ui cancel button"
				}, this.props.cancel), (0, o.h)("div", {
					className: "ui blue ok button"
				}, this.props.ok)))
			}
		}]), t
	}(o.Component)).defaultProps = {
		title: "Prompt",
		message: "Please select an option",
		defaultText: "Select an option...",
		ok: "OK",
		cancel: "Cancel",
		icon: "grey list",
		items: [],
		value: null,
		allowNew: !1,
		approve: function () {},
		deny: function () {}
	}, (t.ImageViewer = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i._id = (0, d.UniqueID)(), i.state = {
				iamge: ""
			}, e.events.subscribe({
				subscriber: i,
				event: ["showImage"]
			}), i.show = i.show.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "receive",
			value: function (e) {
				"showImage" == e.event && (this.setState({
					image: e.data
				}), this.show())
			}
		}, {
			key: "componentDidMount",
			value: function () {
				$("#" + this._id).modal()
			}
		}, {
			key: "show",
			value: function () {
				$("#" + this._id).modal("show")
			}
		}, {
			key: "render",
			value: function () {
				var e = {
					textAlign: "center",
					maxHeight: "700px"
				};
				return (0, o.h)("div", {
					id: this._id,
					className: "ui basic modal"
				}, (0, o.h)("div", {
					className: "header"
				}, this.props.title), (0, o.h)("div", {
					className: "content",
					style: e
				}, (0, o.h)("img", {
					src: this.state.image,
					style: e
				})), (0, o.h)("div", {
					className: "actions"
				}, (0, o.h)("div", {
					className: "ui basic inverted ok button"
				}, this.props.ok)))
			}
		}]), t
	}(o.Component)).defaultProps = {
		title: "View",
		ok: "OK"
	}
}, function (e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function r(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Messages = void 0;
	var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		d = n(1),
		u = n(116),
		l = a(u),
		_ = n(124),
		c = a(_),
		m = n(119),
		h = a(m),
		p = n(122),
		f = a(p),
		y = n(120),
		M = a(y),
		L = n(121),
		Y = a(L),
		k = n(118),
		v = a(k),
		g = n(3),
		b = n(123),
		D = a(b),
		w = n(2),
		T = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.state = {
					subsonic: e.subsonic,
					trackBuffer: e.trackBuffer,
					persistQueue: e.persistQueue
				}, a.events = new l.default, a.events.subscribe({
					subscriber: a,
					event: ["appSettings"]
				}), a
			}
			return r(t, e), o(t, [{
				key: "receive",
				value: function (e) {
					"appSettings" == e.event && (this.playerExtras && this.playerExtras.terminate(), this.setState({
						subsonic: e.data.subsonic,
						trackBuffer: e.data.trackBuffer,
						persistQueue: e.data.persistQueue
					}))
				}
			}, {
				key: "render",
				value: function () {
					var e = (0, d.h)(h.default, {
							subsonic: this.state.subsonic,
							events: this.events,
							trackBuffer: this.state.trackBuffer,
							persist: this.state.persistQueue
						}),
						t = (0, d.h)(f.default, {
							subsonic: this.state.subsonic,
							events: this.events,
							iconSize: "20"
						}),
						n = (0, d.h)(M.default, {
							subsonic: this.state.subsonic,
							events: this.events,
							iconSize: "20"
						}),
						a = (0, d.h)(Y.default, {
							subsonic: this.state.subsonic,
							events: this.events,
							iconSize: "20"
						}),
						s = (0, d.h)(v.default, {
							subsonic: this.state.subsonic,
							events: this.events,
							iconSize: "30"
						}),
						i = (0, d.h)(D.default, {
							subsonic: this.state.subsonic,
							events: this.events
						}),
						r = (0, d.h)(S, {
							events: this.events
						}),
						o = [];
					o.push({
						id: "selection",
						title: "Selection",
						active: !0,
						icon: "chevron right"
					}), o.push({
						id: "playlists",
						title: "Playlists",
						icon: "teal list"
					}), o.push({
						id: "playing",
						title: "Queue",
						icon: "olive play"
					}), o.push({
						id: "settings",
						title: "Settings",
						icon: "setting"
					});
					var u = (0, d.h)(g.TabGroup, {
						tabs: o,
						iconSize: "20"
					});
					return this.playerExtras = new c.default(this.state.subsonic, this, this.events), (0, d.h)("div", null, (0, d.h)(j, null), (0, d.h)(g.ImageViewer, {
						title: "Image Viewer",
						events: this.events
					}), (0, d.h)("div", {
						className: "browser-frame"
					}, (0, d.h)("div", {
						className: "artistList"
					}, s)), (0, d.h)("div", {
						className: "background-layer"
					}), (0, d.h)("div", {
						className: "player-frame", id: "player-frame"
					}, e), (0, d.h)("div", {
						className: "playlist-frame"
					}, (0, d.h)("div", {
						className: "playlist-menu"
					}, u), (0, d.h)("div", {
						className: "playlist-content"
					}, (0, d.h)("div", {
						className: "playlist-selection ui active tab",
						"data-tab": "selection"
					}, t), (0, d.h)("div", {
						className: "playlist-playlists ui tab",
						"data-tab": "playlists"
					}, n), (0, d.h)("div", {
						className: "playlist-playing ui tab",
						"data-tab": "playing"
					}, a), (0, d.h)("div", {
						className: "settings ui tab",
						"data-tab": "settings"
					}, i))), r)
				}
			}]), t
		}(d.Component);
	t.default = T;
	var S = function (e) {
		function t(e, n) {
			s(this, t);
			var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return a.state = {
				messages: []
			}, e.events.subscribe({
				subscriber: a,
				event: ["message"]
			}), a.receive = a.receive.bind(a), a.removeMessage = a.removeMessage.bind(a), a
		}
		return r(t, e), o(t, null, [{
			key: "message",
			value: function (e, t, n, a) {
				e.publish({
					event: "message",
					data: {
						text: t.toString(),
						type: n,
						icon: a
					}
				})
			}
		}]), o(t, [{
			key: "receive",
			value: function (e) {
				if ("message" == e.event) {
					e.data._id = "msg" + Math.random();
					var t = this.state.messages.slice();
					t.push(e.data), this.setState({
						messages: t
					}), setTimeout(function () {
						this.removeMessage(e.data)
					}.bind(this), 1e3 * this.props.showTime)
				}
			}
		}, {
			key: "removeMessage",
			value: function (e) {
				var t = this.state.messages.slice();
				(0, w.ArrayDeleteElement)(t, e), this.setState({
					messages: t
				})
			}
		}, {
			key: "render",
			value: function () {
				var e = {
						animationDuration: this.props.showTime / 2 + .2 + "s",
						animationDelay: this.props.showTime / 2 + "s"
					},
					t = this.state.messages.map(function (t) {
						var n = t.icon ? (0, d.h)("i", {
							className: t.icon + " icon"
						}) : null;
						return (0, d.h)("div", {
							className: "ui icon " + t.type + " message",
							key: t._id,
							style: e
						}, n, (0, d.h)("p", null, t.text))
					});
				return (0, d.h)("div", {
					className: "messages"
				}, t)
			}
		}]), t
	}(d.Component);
	t.Messages = S, S.defaultProps = {
		showTime: 8
	};
	var j = function (e) {
		function t() {
			return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
		}
		return r(t, e), o(t, [{
			key: "render",
			value: function () {
				return (0, d.h)("div", {
					className: "links"
				}, (0, d.h)("a", {
					href: "https://github.com/shrimpza/aurial"
				}, (0, d.h)("i", {
					className: "github icon"
				}), (0, d.h)("span", null, "Aurial on GitHub")))
			}
		}]), t
	}(d.Component)
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		o = n(1),
		d = (n(3), n(2)),
		u = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					queue: [],
					playing: null
				}, e.events.subscribe({
					subscriber: i,
					event: ["playerStarted", "playerStopped", "playerFinished", "playerEnqueued"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerStarted":
							this.setState({
								playing: e.data
							});
							break;
						case "playerStopped":
						case "playerFinished":
							this.setState({
								playing: null
							});
							break;
						case "playerEnqueued":
							this.setState({
								queue: e.data.map(function (e) {
									return e.id
								})
							})
					}
				}
			}, {
				key: "render",
				value: function () {
					var e = [];
					return this.props.tracks && this.props.tracks.length > 0 && (e = this.props.tracks.map(function (e) {
						return (0, o.h)(l, {
							key: e.id,
							subsonic: this.props.subsonic,
							events: this.props.events,
							track: e,
							playing: null != this.state.playing && this.state.playing.id == e.id,
							queued: this.state.queue.indexOf(e.id) > -1,
							playlist: this.props.playlist,
							iconSize: this.props.iconSize
						})
					}.bind(this))), (0, o.h)("table", {
						className: "ui selectable single line very basic compact table trackList"
					}, (0, o.h)("thead", null, (0, o.h)("tr", null, (0, o.h)("th", {
						className: "controls"
					}, " "), (0, o.h)("th", {
						className: "number"
					}, "#"), (0, o.h)("th", {
						className: "artist"
					}, "Artist"), (0, o.h)("th", {
						className: "title"
					}, "Title"), (0, o.h)("th", {
						className: "album"
					}, "Album"), (0, o.h)("th", {
						className: "date"
					}, "Date"), (0, o.h)("th", {
						className: "right aligned duration"
					}, "Duration"))), (0, o.h)("tbody", null, e))
				}
			}]), t
		}(o.Component);
	t.default = u;
	var l = function (e) {
		function t(e, n) {
			a(this, t);
			var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return i.play = i.play.bind(i), i.enqueue = i.enqueue.bind(i), i.playlistAdd = i.playlistAdd.bind(i), i.playlistRemove = i.playlistRemove.bind(i), i
		}
		return i(t, e), r(t, [{
			key: "play",
			value: function () {
				this.props.events.publish({
					event: "playerPlay",
					data: this.props.track
				})
			}
		}, {
			key: "enqueue",
			value: function () {
				this.props.events.publish({
					event: "playerEnqueue",
					data: {
						action: "ADD",
						tracks: [this.props.track]
					}
				})
			}
		}, {
			key: "playlistAdd",
			value: function () {
				this.props.events.publish({
					event: "playlistManage",
					data: {
						action: "ADD",
						tracks: [this.props.track]
					}
				})
			}
		}, {
			key: "playlistRemove",
			value: function () {
				this.props.events.publish({
					event: "playlistManage",
					data: {
						action: "REMOVE",
						tracks: [this.props.track],
						id: this.props.playlist
					}
				})
			}
		}, {
			key: "render",
			value: function () {
				var e;
				return e = this.props.playlist ? (0, o.h)("button", {
					className: "ui mini compact icon teal button",
					title: "Remove from playlist",
					onClick: this.playlistRemove
				}, (0, o.h)("i", {
					className: "minus icon"
				})) : (0, o.h)("button", {
					className: "ui mini compact icon teal button",
					title: "Add to playlist",
					onClick: this.playlistAdd
				}, (0, o.h)("i", {
					className: "list icon"
				})), (0, o.h)("tr", {
					className: this.props.playing ? "positive" : ""
				}, (0, o.h)("td", null, (0, o.h)("button", {
					className: "ui mini compact icon green button",
					onClick: this.play,
					title: "Play now"
				}, (0, o.h)("i", {
					className: "play icon"
				})), (0, o.h)("button", {
					className: "ui mini compact icon olive button",
					onClick: this.enqueue,
					title: this.props.queued ? "Remove from queue" : "Add to queue"
				}, (0, o.h)("i", {
					className: this.props.queued ? "minus icon" : "plus icon"
				})), e), (0, o.h)("td", null, this.props.track.discNumber ? this.props.track.discNumber + "." + this.props.track.track : this.props.track.track), (0, o.h)("td", null, this.props.track.artist), (0, o.h)("td", null, this.props.track.title), (0, o.h)("td", null, this.props.track.album), (0, o.h)("td", null, this.props.track.year), (0, o.h)("td", {
					className: "right aligned"
				}, this.props.track.duration ? (0, d.SecondsToTime)(this.props.track.duration) : "?:??"))
			}
		}]), t
	}(o.Component)
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		i = n(125),
		r = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(i),
		o = function () {
			function e(t, n, s, i, r, o) {
				a(this, e), this.url = t.endsWith("/") ? t.substring(0, t.length - 1) : t.trim(), this.user = n, this.token = s, this.salt = i, this.version = r, this.appName = o
			}
			return s(e, [{
				key: "getUrl",
				value: function (e, t) {
					var n = this.url + "/rest/" + e + ".view?",
						a = {
							u: this.user,
							t: this.token,
							s: this.salt,
							v: this.version,
							c: this.appName,
              p: localStorage.getItem("password"),
							f: "json"
						};
          if (typeof(document.randomp) !== "undefined" && document.randomp === "1") {
            a["size"] = 50;
          }
					return Object.keys(a).forEach(function (e) {
						n += e + "=" + a[e] + "&"
					}), Object.keys(t).forEach(function (e) {
						Array.isArray(t[e]) ? t[e].forEach(function (t) {
							n += e + "=" + t + "&"
						}) : n += e + "=" + t[e] + "&"
					}), n
				}
			}, {
				key: "ping",
				value: function (e) {
					fetch(this.getUrl("ping", {}), {
						mode: "cors",
						cache: "no-cache"
					}).then(function (t) {
						t.json().then(function (t) {
							e.success(t["subsonic-response"])
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getArtists",
				value: function (e) {
					fetch(this.getUrl("getArtists", {}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							var n = [];
							t["subsonic-response"].artists.index.map(function (e) {
								e.artist.map(function (e) {
									n.push(e)
								})
							});
							var a = [];
							n.sort(function (e, t) {
								for (var n = e.name, s = t.name, i = a.length - 1; i >= 0; i--) 0 == n.indexOf(a[i] + " ") && (n = n.replace(a[i] + " ", "")), 0 == s.indexOf(a[i] + " ") && (s = s.replace(a[i] + " ", ""));
								return n.localeCompare(s)
							}), e.success({
								artists: n
							})
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getArtist",
				value: function (e) {
					fetch(this.getUrl("getArtist", {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							var n = t["subsonic-response"].artist.album;
							n.length > 1 && n.sort(function (e, t) {
								return (e.year || 0) - (t.year || 0)
							}), e.success({
								albums: n
							})
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getAlbum",
				value: function (e) {
					fetch(this.getUrl( (typeof(document.randomp) !== "undefined" && document.randomp === "1" ? "getRandomSongs" : "getAlbum"), {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
              if (typeof(document.randomp) !== "undefined" && document.randomp === "1") {
                var n = t["subsonic-response"].randomSongs;
                e.success({ album: n})
                document.randomp = "0";
              } else {
                var n = t["subsonic-response"].album;
                n.song.sort(function (e, t) {
                  return e.discNumber && t.discNumber ? 1e3 * e.discNumber + e.track - (1e3 * t.discNumber + t.track) : e.track - t.track
                }), e.success({
                  album: n
                })
              }
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			},{
				key: "getRandomSongs",
				value: function (e) {
					fetch(this.getUrl("getRandomSongs", {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							var n = t["subsonic-response"].randomSongs;
              e.success({ album: n})
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getPlaylists",
				value: function (e) {
					fetch(this.getUrl("getPlaylists", {}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							e.success({
								playlists: t["subsonic-response"].playlists.playlist
							})
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getPlaylist",
				value: function (e) {
					fetch(this.getUrl("getPlaylist", {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							e.success({
								playlist: t["subsonic-response"].playlist
							})
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "createPlaylist",
				value: function (e) {
					fetch(this.getUrl("createPlaylist", {
						name: e.name,
						songId: e.tracks
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							"ok" == t["subsonic-response"].status ? e.success() : e.error(t["subsonic-response"].error.message)
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "updatePlaylist",
				value: function (e) {
					var t = {
						playlistId: e.id
					};
					e.name && (t.name = e.name), e.comment && (t.comment = e.comment), e.add && (t.songIdToAdd = e.add), e.remove && (t.songIndexToRemove = e.remove), fetch(this.getUrl("updatePlaylist", t), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							"ok" == t["subsonic-response"].status ? e.success() : e.error(t["subsonic-response"].error.message)
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "deletePlaylist",
				value: function (e) {
					fetch(this.getUrl("deletePlaylist", {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							"ok" == t["subsonic-response"].status ? e.success() : e.error(t["subsonic-response"].error.message)
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "search",
				value: function (e) {
					fetch(this.getUrl("search3", {
						query: e.query,
						songCount: e.songCount
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							e.success(t["subsonic-response"].searchResult3)
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "scrobble",
				value: function (e) {
					fetch(this.getUrl("scrobble", {
						id: e.id
					}), {
						mode: "cors"
					}).then(function (t) {
						t.json().then(function (t) {
							e.success()
						})
					}).catch(function (t) {
						e.error(t)
					})
				}
			}, {
				key: "getStreamUrl",
				value: function (e) {
					return this.getUrl("stream", {
						id: e.id,
						format: e.format ? e.format : "mp3",
						maxBitRate: e.bitrate ? e.bitrate : 0
					})
				}
			}], [{
				key: "createToken",
				value: function (e, t) {
          localStorage.setItem("password", e)
					return (0, r.default)(e + t)
				}
			}]), e
		}();
	t.default = o
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function (e) {
				return /^nm$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ar-dz", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 0,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "1",
				2: "2",
				3: "3",
				4: "4",
				5: "5",
				6: "6",
				7: "7",
				8: "8",
				9: "9",
				0: "0"
			},
			n = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			a = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			s = function (e) {
				return function (t, s, i, r) {
					var o = n(t),
						d = a[e][n(t)];
					return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t)
				}
			},
			i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
		return e.defineLocale("ar-ly", {
			months: i,
			monthsShort: i,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: s("s"),
				m: s("m"),
				mm: s("m"),
				h: s("h"),
				hh: s("h"),
				d: s("d"),
				dd: s("d"),
				M: s("M"),
				MM: s("M"),
				y: s("y"),
				yy: s("y")
			},
			preparse: function (e) {
				return e.replace(/\u200f/g, "").replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ar-ma", {
			months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
			weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			};
		return e.defineLocale("ar-sa", {
			months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			preparse: function (e) {
				return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ar-tn", {
			months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[اليوم على الساعة] LT",
				nextDay: "[غدا على الساعة] LT",
				nextWeek: "dddd [على الساعة] LT",
				lastDay: "[أمس على الساعة] LT",
				lastWeek: "dddd [على الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "منذ %s",
				s: "ثوان",
				m: "دقيقة",
				mm: "%d دقائق",
				h: "ساعة",
				hh: "%d ساعات",
				d: "يوم",
				dd: "%d أيام",
				M: "شهر",
				MM: "%d أشهر",
				y: "سنة",
				yy: "%d سنوات"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "١",
				2: "٢",
				3: "٣",
				4: "٤",
				5: "٥",
				6: "٦",
				7: "٧",
				8: "٨",
				9: "٩",
				0: "٠"
			},
			n = {
				"١": "1",
				"٢": "2",
				"٣": "3",
				"٤": "4",
				"٥": "5",
				"٦": "6",
				"٧": "7",
				"٨": "8",
				"٩": "9",
				"٠": "0"
			},
			a = function (e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			s = {
				s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
				m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
				h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
				d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
				M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
				y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
			},
			i = function (e) {
				return function (t, n, i, r) {
					var o = a(t),
						d = s[e][a(t)];
					return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t)
				}
			},
			r = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
		return e.defineLocale("ar", {
			months: r,
			monthsShort: r,
			weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
			weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
			weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|م/,
			isPM: function (e) {
				return "م" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ص" : "م"
			},
			calendar: {
				sameDay: "[اليوم عند الساعة] LT",
				nextDay: "[غدًا عند الساعة] LT",
				nextWeek: "dddd [عند الساعة] LT",
				lastDay: "[أمس عند الساعة] LT",
				lastWeek: "dddd [عند الساعة] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "بعد %s",
				past: "منذ %s",
				s: i("s"),
				m: i("m"),
				mm: i("m"),
				h: i("h"),
				hh: i("h"),
				d: i("d"),
				dd: i("d"),
				M: i("M"),
				MM: i("M"),
				y: i("y"),
				yy: i("y")
			},
			preparse: function (e) {
				return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-ncı",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-ıncı",
			90: "-ıncı"
		};
		return e.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
			weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
			weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[gələn həftə] dddd [saat] LT",
				lastDay: "[dünən] LT",
				lastWeek: "[keçən həftə] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s əvvəl",
				s: "birneçə saniyyə",
				m: "bir dəqiqə",
				mm: "%d dəqiqə",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gecə|səhər|gündüz|axşam/,
			isPM: function (e) {
				return /^(gündüz|axşam)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
			},
			ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
			ordinal: function (e) {
				if (0 === e) return e + "-ıncı";
				var n = e % 10,
					a = e % 100 - n,
					s = e >= 100 ? 100 : null;
				return e + (t[n] || t[a] || t[s])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
				hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
				dd: "дзень_дні_дзён",
				MM: "месяц_месяцы_месяцаў",
				yy: "год_гады_гадоў"
			};
			return "m" === a ? n ? "хвіліна" : "хвіліну" : "h" === a ? n ? "гадзіна" : "гадзіну" : e + " " + t(s[a], +e)
		}
		return e.defineLocale("be", {
			months: {
				format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
				standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
			},
			monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
			weekdays: {
				format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
				standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
				isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
			},
			weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сёння ў] LT",
				nextDay: "[Заўтра ў] LT",
				lastDay: "[Учора ў] LT",
				nextWeek: function () {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[У мінулую] dddd [ў] LT";
						case 1:
						case 2:
						case 4:
							return "[У мінулы] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "праз %s",
				past: "%s таму",
				s: "некалькі секунд",
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: "дзень",
				dd: n,
				M: "месяц",
				MM: n,
				y: "год",
				yy: n
			},
			meridiemParse: /ночы|раніцы|дня|вечара/,
			isPM: function (e) {
				return /^(дня|вечара)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
			},
			ordinalParse: /\d{1,2}-(і|ы|га)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
					case "D":
						return e + "-га";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("bg", {
			months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
			weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Днес в] LT",
				nextDay: "[Утре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[Вчера в] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[В изминалата] dddd [в] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[В изминалия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "след %s",
				past: "преди %s",
				s: "няколко секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дни",
				M: "месец",
				MM: "%d месеца",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "১",
				2: "২",
				3: "৩",
				4: "৪",
				5: "৫",
				6: "৬",
				7: "৭",
				8: "৮",
				9: "৯",
				0: "০"
			},
			n = {
				"১": "1",
				"২": "2",
				"৩": "3",
				"৪": "4",
				"৫": "5",
				"৬": "6",
				"৭": "7",
				"৮": "8",
				"৯": "9",
				"০": "0"
			};
		return e.defineLocale("bn", {
			months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
			monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
			weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
			weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
			weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
			longDateFormat: {
				LT: "A h:mm সময়",
				LTS: "A h:mm:ss সময়",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm সময়",
				LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
			},
			calendar: {
				sameDay: "[আজ] LT",
				nextDay: "[আগামীকাল] LT",
				nextWeek: "dddd, LT",
				lastDay: "[গতকাল] LT",
				lastWeek: "[গত] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s পরে",
				past: "%s আগে",
				s: "কয়েক সেকেন্ড",
				m: "এক মিনিট",
				mm: "%d মিনিট",
				h: "এক ঘন্টা",
				hh: "%d ঘন্টা",
				d: "এক দিন",
				dd: "%d দিন",
				M: "এক মাস",
				MM: "%d মাস",
				y: "এক বছর",
				yy: "%d বছর"
			},
			preparse: function (e) {
				return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "༡",
				2: "༢",
				3: "༣",
				4: "༤",
				5: "༥",
				6: "༦",
				7: "༧",
				8: "༨",
				9: "༩",
				0: "༠"
			},
			n = {
				"༡": "1",
				"༢": "2",
				"༣": "3",
				"༤": "4",
				"༥": "5",
				"༦": "6",
				"༧": "7",
				"༨": "8",
				"༩": "9",
				"༠": "0"
			};
		return e.defineLocale("bo", {
			months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
			weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
			weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[དི་རིང] LT",
				nextDay: "[སང་ཉིན] LT",
				nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
				lastDay: "[ཁ་སང] LT",
				lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ་",
				past: "%s སྔན་ལ",
				s: "ལམ་སང",
				m: "སྐར་མ་གཅིག",
				mm: "%d སྐར་མ",
				h: "ཆུ་ཚོད་གཅིག",
				hh: "%d ཆུ་ཚོད",
				d: "ཉིན་གཅིག",
				dd: "%d ཉིན་",
				M: "ཟླ་བ་གཅིག",
				MM: "%d ཟླ་བ",
				y: "ལོ་གཅིག",
				yy: "%d ལོ"
			},
			preparse: function (e) {
				return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n) {
			return e + " " + s({
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			}[n], e)
		}

		function n(e) {
			switch (a(e)) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 9:
					return e + " bloaz";
				default:
					return e + " vloaz"
			}
		}

		function a(e) {
			return e > 9 ? a(e % 10) : e
		}

		function s(e, t) {
			return 2 === t ? i(e) : e
		}

		function i(e) {
			var t = {
				m: "v",
				b: "v",
				d: "z"
			};
			return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
		}
		return e.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoù",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: n
			},
			ordinalParse: /\d{1,2}(añ|vet)/,
			ordinal: function (e) {
				return e + (1 === e ? "añ" : "vet")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n) {
			var a = e + " ";
			switch (n) {
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return a += 1 === e ? "dan" : "dana";
				case "MM":
					return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		return e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ca", {
			months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
			monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function () {
					return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function () {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "d'aquí %s",
				past: "fa %s",
				s: "uns segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			ordinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function (e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			return e > 1 && e < 5 && 1 != ~~(e / 10)
		}

		function n(e, n, a, s) {
			var i = e + " ";
			switch (a) {
				case "s":
					return n || s ? "pár sekund" : "pár sekundami";
				case "m":
					return n ? "minuta" : s ? "minutu" : "minutou";
				case "mm":
					return n || s ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
				case "h":
					return n ? "hodina" : s ? "hodinu" : "hodinou";
				case "hh":
					return n || s ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
				case "d":
					return n || s ? "den" : "dnem";
				case "dd":
					return n || s ? i + (t(e) ? "dny" : "dní") : i + "dny";
				case "M":
					return n || s ? "měsíc" : "měsícem";
				case "MM":
					return n || s ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
				case "y":
					return n || s ? "rok" : "rokem";
				case "yy":
					return n || s ? i + (t(e) ? "roky" : "let") : i + "lety"
			}
		}
		var a = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
			s = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
		return e.defineLocale("cs", {
			months: a,
			monthsShort: s,
			monthsParse: function (e, t) {
				var n, a = [];
				for (n = 0; n < 12; n++) a[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
				return a
			}(a, s),
			shortMonthsParse: function (e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			}(s),
			longMonthsParse: function (e) {
				var t, n = [];
				for (t = 0; t < 12; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
				return n
			}(a),
			weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm",
				l: "D. M. YYYY"
			},
			calendar: {
				sameDay: "[dnes v] LT",
				nextDay: "[zítra v] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v neděli v] LT";
						case 1:
						case 2:
							return "[v] dddd [v] LT";
						case 3:
							return "[ve středu v] LT";
						case 4:
							return "[ve čtvrtek v] LT";
						case 5:
							return "[v pátek v] LT";
						case 6:
							return "[v sobotu v] LT"
					}
				},
				lastDay: "[včera v] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulou neděli v] LT";
						case 1:
						case 2:
							return "[minulé] dddd [v] LT";
						case 3:
							return "[minulou středu v] LT";
						case 4:
						case 5:
							return "[minulý] dddd [v] LT";
						case 6:
							return "[minulou sobotu v] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "před %s",
				s: n,
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("cv", {
			months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
			monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
			weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
			weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
			weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
				LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
				LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
			},
			calendar: {
				sameDay: "[Паян] LT [сехетре]",
				nextDay: "[Ыран] LT [сехетре]",
				lastDay: "[Ӗнер] LT [сехетре]",
				nextWeek: "[Ҫитес] dddd LT [сехетре]",
				lastWeek: "[Иртнӗ] dddd LT [сехетре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
				},
				past: "%s каялла",
				s: "пӗр-ик ҫеккунт",
				m: "пӗр минут",
				mm: "%d минут",
				h: "пӗр сехет",
				hh: "%d сехет",
				d: "пӗр кун",
				dd: "%d кун",
				M: "пӗр уйӑх",
				MM: "%d уйӑх",
				y: "пӗр ҫул",
				yy: "%d ҫул"
			},
			ordinalParse: /\d{1,2}-мӗш/,
			ordinal: "%d-мӗш",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function (e) {
				var t = e,
					n = "",
					a = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = a[t]), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[I dag kl.] LT",
				nextDay: "[I morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[I går kl.] LT",
				lastWeek: "[sidste] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "få sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? s[n][0] : s[n][1]
		}
		return e.defineLocale("de-at", {
			months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? s[n][0] : s[n][1]
		}
		return e.defineLocale("de", {
			months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
			n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
		return e.defineLocale("dv", {
			months: t,
			monthsShort: t,
			weekdays: n,
			weekdaysShort: n,
			weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /މކ|މފ/,
			isPM: function (e) {
				return "މފ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "މކ" : "މފ"
			},
			calendar: {
				sameDay: "[މިއަދު] LT",
				nextDay: "[މާދަމާ] LT",
				nextWeek: "dddd LT",
				lastDay: "[އިއްޔެ] LT",
				lastWeek: "[ފާއިތުވި] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތެރޭގައި %s",
				past: "ކުރިން %s",
				s: "ސިކުންތުކޮޅެއް",
				m: "މިނިޓެއް",
				mm: "މިނިޓު %d",
				h: "ގަޑިއިރެއް",
				hh: "ގަޑިއިރު %d",
				d: "ދުވަހެއް",
				dd: "ދުވަސް %d",
				M: "މަހެއް",
				MM: "މަސް %d",
				y: "އަހަރެއް",
				yy: "އަހަރު %d"
			},
			preparse: function (e) {
				return e.replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
		}
		return e.defineLocale("el", {
			monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
			monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
			months: function (e, t) {
				return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
			},
			monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
			weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
			weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
			weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
			},
			isPM: function (e) {
				return "μ" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σήμερα {}] LT",
				nextDay: "[Αύριο {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Χθες {}] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 6:
							return "[το προηγούμενο] dddd [{}] LT";
						default:
							return "[την προηγούμενη] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function (e, n) {
				var a = this._calendarEl[e],
					s = n && n.hours();
				return t(a) && (a = a.apply(n)), a.replace("{}", s % 12 == 1 ? "στη" : "στις")
			},
			relativeTime: {
				future: "σε %s",
				past: "%s πριν",
				s: "λίγα δευτερόλεπτα",
				m: "ένα λεπτό",
				mm: "%d λεπτά",
				h: "μία ώρα",
				hh: "%d ώρες",
				d: "μία μέρα",
				dd: "%d μέρες",
				M: "ένας μήνας",
				MM: "%d μήνες",
				y: "ένας χρόνος",
				yy: "%d χρόνια"
			},
			ordinalParse: /\d{1,2}η/,
			ordinal: "%dη",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
			weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
			weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-an de] MMMM, YYYY",
				LLL: "D[-an de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function (e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodiaŭ je] LT",
				nextDay: "[Morgaŭ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[Hieraŭ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "je %s",
				past: "antaŭ %s",
				s: "sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
		return e.defineLocale("es-do", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, a) {
				return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY h:mm A",
				LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
		return e.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function (e, a) {
				return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
			},
			monthsParseExact: !0,
			weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextDay: function () {
					return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				nextWeek: function () {
					return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastDay: function () {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				lastWeek: function () {
					return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "hace %s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un año",
				yy: "%d años"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
				m: ["ühe minuti", "üks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["ühe tunni", "tund aega", "üks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["ühe päeva", "üks päev"],
				M: ["kuu aja", "kuu aega", "üks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["ühe aasta", "aasta", "üks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? s[n][2] ? s[n][2] : s[n][1] : a ? s[n][0] : s[n][1]
		}
		return e.defineLocale("et", {
			months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Täna,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[Järgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pärast",
				past: "%s tagasi",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d päeva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "۱",
				2: "۲",
				3: "۳",
				4: "۴",
				5: "۵",
				6: "۶",
				7: "۷",
				8: "۸",
				9: "۹",
				0: "۰"
			},
			n = {
				"۱": "1",
				"۲": "2",
				"۳": "3",
				"۴": "4",
				"۵": "5",
				"۶": "6",
				"۷": "7",
				"۸": "8",
				"۹": "9",
				"۰": "0"
			};
		return e.defineLocale("fa", {
			months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
			weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
			weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			meridiemParse: /قبل از ظهر|بعد از ظهر/,
			isPM: function (e) {
				return /بعد از ظهر/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
			},
			calendar: {
				sameDay: "[امروز ساعت] LT",
				nextDay: "[فردا ساعت] LT",
				nextWeek: "dddd [ساعت] LT",
				lastDay: "[دیروز ساعت] LT",
				lastWeek: "dddd [پیش] [ساعت] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "در %s",
				past: "%s پیش",
				s: "چندین ثانیه",
				m: "یک دقیقه",
				mm: "%d دقیقه",
				h: "یک ساعت",
				hh: "%d ساعت",
				d: "یک روز",
				dd: "%d روز",
				M: "یک ماه",
				MM: "%d ماه",
				y: "یک سال",
				yy: "%d سال"
			},
			preparse: function (e) {
				return e.replace(/[۰-۹]/g, function (e) {
					return n[e]
				}).replace(/،/g, ",")
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				}).replace(/,/g, "،")
			},
			ordinalParse: /\d{1,2}م/,
			ordinal: "%dم",
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, a, s) {
			var i = "";
			switch (a) {
				case "s":
					return s ? "muutaman sekunnin" : "muutama sekunti";
				case "m":
					return s ? "minuutin" : "minuutti";
				case "mm":
					i = s ? "minuutin" : "minuuttia";
					break;
				case "h":
					return s ? "tunnin" : "tunti";
				case "hh":
					i = s ? "tunnin" : "tuntia";
					break;
				case "d":
					return s ? "päivän" : "päivä";
				case "dd":
					i = s ? "päivän" : "päivää";
					break;
				case "M":
					return s ? "kuukauden" : "kuukausi";
				case "MM":
					i = s ? "kuukauden" : "kuukautta";
					break;
				case "y":
					return s ? "vuoden" : "vuosi";
				case "yy":
					i = s ? "vuoden" : "vuotta"
			}
			return i = n(e, s) + " " + i
		}

		function n(e, t) {
			return e < 10 ? t ? s[e] : a[e] : e
		}
		var a = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
			s = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", a[7], a[8], a[9]];
		return e.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta] YYYY",
				LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
				LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY, [klo] HH.mm",
				llll: "ddd, Do MMM YYYY, [klo] HH.mm"
			},
			calendar: {
				sameDay: "[tänään] [klo] LT",
				nextDay: "[huomenna] [klo] LT",
				nextWeek: "dddd [klo] LT",
				lastDay: "[eilen] [klo] LT",
				lastWeek: "[viime] dddd[na] [klo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s päästä",
				past: "%s sitten",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("fo", {
			months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.] LT",
				nextDay: "[Í morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Í gjár kl.] LT",
				lastWeek: "[síðstu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s síðani",
				s: "fá sekund",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tími",
				hh: "%d tímar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mánaði",
				MM: "%d mánaðir",
				y: "eitt ár",
				yy: "%d ár"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("fr-ca", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e) {
				return e + (1 === e ? "er" : "e")
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("fr-ch", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function (e) {
				return e + (1 === e ? "er" : "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("fr", {
			months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
			monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui à] LT",
				nextDay: "[Demain à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[Hier à] LT",
				lastWeek: "dddd [dernier à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function (e) {
				return e + (1 === e ? "er" : "")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
			n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
		return e.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function (e, a) {
				return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
			},
			monthsParseExact: !0,
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om] LT",
				nextDay: "[moarn om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[juster om] LT",
				lastWeek: "[ôfrûne] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
			n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
			a = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			s = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];
		return e.defineLocale("gd", {
			months: t,
			monthsShort: n,
			monthsParseExact: !0,
			weekdays: a,
			weekdaysShort: s,
			weekdaysMin: i,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-màireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "mìos",
				MM: "%d mìosan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			ordinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function (e) {
				return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("gl", {
			months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
			monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY H:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
			},
			calendar: {
				sameDay: function () {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function () {
					return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function () {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function () {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function () {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return 0 === e.indexOf("un") ? "n" + e : "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un día",
				dd: "%d días",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("he", {
			months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
			monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
			weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
			weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
			weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [ב]MMMM YYYY",
				LLL: "D [ב]MMMM YYYY HH:mm",
				LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[היום ב־]LT",
				nextDay: "[מחר ב־]LT",
				nextWeek: "dddd [בשעה] LT",
				lastDay: "[אתמול ב־]LT",
				lastWeek: "[ביום] dddd [האחרון בשעה] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "בעוד %s",
				past: "לפני %s",
				s: "מספר שניות",
				m: "דקה",
				mm: "%d דקות",
				h: "שעה",
				hh: function (e) {
					return 2 === e ? "שעתיים" : e + " שעות"
				},
				d: "יום",
				dd: function (e) {
					return 2 === e ? "יומיים" : e + " ימים"
				},
				M: "חודש",
				MM: function (e) {
					return 2 === e ? "חודשיים" : e + " חודשים"
				},
				y: "שנה",
				yy: function (e) {
					return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
				}
			},
			meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
			isPM: function (e) {
				return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		return e.defineLocale("hi", {
			months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
			monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm बजे",
				LTS: "A h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[कल] LT",
				nextWeek: "dddd, LT",
				lastDay: "[कल] LT",
				lastWeek: "[पिछले] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s में",
				past: "%s पहले",
				s: "कुछ ही क्षण",
				m: "एक मिनट",
				mm: "%d मिनट",
				h: "एक घंटा",
				hh: "%d घंटे",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महीने",
				MM: "%d महीने",
				y: "एक वर्ष",
				yy: "%d वर्ष"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /रात|सुबह|दोपहर|शाम/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n) {
			var a = e + " ";
			switch (n) {
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return a += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return a += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return a += 1 === e ? "dan" : "dana";
				case "MM":
					return a += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return a += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		return e.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[jučer u] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
							return "[prošlu] dddd [u] LT";
						case 6:
							return "[prošle] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prošli] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = e;
			switch (n) {
				case "s":
					return a || t ? "néhány másodperc" : "néhány másodperce";
				case "m":
					return "egy" + (a || t ? " perc" : " perce");
				case "mm":
					return s + (a || t ? " perc" : " perce");
				case "h":
					return "egy" + (a || t ? " óra" : " órája");
				case "hh":
					return s + (a || t ? " óra" : " órája");
				case "d":
					return "egy" + (a || t ? " nap" : " napja");
				case "dd":
					return s + (a || t ? " nap" : " napja");
				case "M":
					return "egy" + (a || t ? " hónap" : " hónapja");
				case "MM":
					return s + (a || t ? " hónap" : " hónapja");
				case "y":
					return "egy" + (a || t ? " év" : " éve");
				case "yy":
					return s + (a || t ? " év" : " éve")
			}
			return ""
		}

		function n(e) {
			return (e ? "" : "[múlt] ") + "[" + a[this.day()] + "] LT[-kor]"
		}
		var a = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
		return e.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
			weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY. MMMM D.",
				LLL: "YYYY. MMMM D. H:mm",
				LLLL: "YYYY. MMMM D., dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function (e) {
				return "u" === e.charAt(1).toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma] LT[-kor]",
				nextDay: "[holnap] LT[-kor]",
				nextWeek: function () {
					return n.call(this, !0)
				},
				lastDay: "[tegnap] LT[-kor]",
				lastWeek: function () {
					return n.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("hy-am", {
			months: {
				format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
				standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
			},
			monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
			weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
			weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY թ.",
				LLL: "D MMMM YYYY թ., HH:mm",
				LLLL: "dddd, D MMMM YYYY թ., HH:mm"
			},
			calendar: {
				sameDay: "[այսօր] LT",
				nextDay: "[վաղը] LT",
				lastDay: "[երեկ] LT",
				nextWeek: function () {
					return "dddd [օրը ժամը] LT"
				},
				lastWeek: function () {
					return "[անցած] dddd [օրը ժամը] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s հետո",
				past: "%s առաջ",
				s: "մի քանի վայրկյան",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "օր",
				dd: "%d օր",
				M: "ամիս",
				MM: "%d ամիս",
				y: "տարի",
				yy: "%d տարի"
			},
			meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
			isPM: function (e) {
				return /^(ցերեկվա|երեկոյան)$/.test(e)
			},
			meridiem: function (e) {
				return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
			},
			ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
			ordinal: function (e, t) {
				switch (t) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === e ? e + "-ին" : e + "-րդ";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			return e % 100 == 11 || e % 10 != 1
		}

		function n(e, n, a, s) {
			var i = e + " ";
			switch (a) {
				case "s":
					return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
				case "m":
					return n ? "mínúta" : "mínútu";
				case "mm":
					return t(e) ? i + (n || s ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
				case "hh":
					return t(e) ? i + (n || s ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
				case "d":
					return n ? "dagur" : s ? "dag" : "degi";
				case "dd":
					return t(e) ? n ? i + "dagar" : i + (s ? "daga" : "dögum") : n ? i + "dagur" : i + (s ? "dag" : "degi");
				case "M":
					return n ? "mánuður" : s ? "mánuð" : "mánuði";
				case "MM":
					return t(e) ? n ? i + "mánuðir" : i + (s ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (s ? "mánuð" : "mánuði");
				case "y":
					return n || s ? "ár" : "ári";
				case "yy":
					return t(e) ? i + (n || s ? "ár" : "árum") : i + (n || s ? "ár" : "ári")
			}
		}
		return e.defineLocale("is", {
			months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[í dag kl.] LT",
				nextDay: "[á morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[í gær kl.] LT",
				lastWeek: "[síðasta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s síðan",
				s: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
			weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
			weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ja", {
			months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
			weekdaysShort: "日_月_火_水_木_金_土".split("_"),
			weekdaysMin: "日_月_火_水_木_金_土".split("_"),
			longDateFormat: {
				LT: "Ah時m分",
				LTS: "Ah時m分s秒",
				L: "YYYY/MM/DD",
				LL: "YYYY年M月D日",
				LLL: "YYYY年M月D日Ah時m分",
				LLLL: "YYYY年M月D日Ah時m分 dddd"
			},
			meridiemParse: /午前|午後/i,
			isPM: function (e) {
				return "午後" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "午前" : "午後"
			},
			calendar: {
				sameDay: "[今日] LT",
				nextDay: "[明日] LT",
				nextWeek: "[来週]dddd LT",
				lastDay: "[昨日] LT",
				lastWeek: "[前週]dddd LT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}日/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s前",
				s: "数秒",
				m: "1分",
				mm: "%d分",
				h: "1時間",
				hh: "%d時間",
				d: "1日",
				dd: "%d日",
				M: "1ヶ月",
				MM: "%dヶ月",
				y: "1年",
				yy: "%d年"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ka", {
			months: {
				standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
				format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
			},
			monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
			weekdays: {
				standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
				format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
				isFormat: /(წინა|შემდეგ)/
			},
			weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
			weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[დღეს] LT[-ზე]",
				nextDay: "[ხვალ] LT[-ზე]",
				lastDay: "[გუშინ] LT[-ზე]",
				nextWeek: "[შემდეგ] dddd LT[-ზე]",
				lastWeek: "[წინა] dddd LT-ზე",
				sameElse: "L"
			},
			relativeTime: {
				future: function (e) {
					return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
				},
				past: function (e) {
					return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
				},
				s: "რამდენიმე წამი",
				m: "წუთი",
				mm: "%d წუთი",
				h: "საათი",
				hh: "%d საათი",
				d: "დღე",
				dd: "%d დღე",
				M: "თვე",
				MM: "%d თვე",
				y: "წელი",
				yy: "%d წელი"
			},
			ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
			ordinal: function (e) {
				return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			0: "-ші",
			1: "-ші",
			2: "-ші",
			3: "-ші",
			4: "-ші",
			5: "-ші",
			6: "-шы",
			7: "-ші",
			8: "-ші",
			9: "-шы",
			10: "-шы",
			20: "-шы",
			30: "-шы",
			40: "-шы",
			50: "-ші",
			60: "-шы",
			70: "-ші",
			80: "-ші",
			90: "-шы",
			100: "-ші"
		};
		return e.defineLocale("kk", {
			months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
			monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
			weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
			weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
			weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгін сағат] LT",
				nextDay: "[Ертең сағат] LT",
				nextWeek: "dddd [сағат] LT",
				lastDay: "[Кеше сағат] LT",
				lastWeek: "[Өткен аптаның] dddd [сағат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ішінде",
				past: "%s бұрын",
				s: "бірнеше секунд",
				m: "бір минут",
				mm: "%d минут",
				h: "бір сағат",
				hh: "%d сағат",
				d: "бір күн",
				dd: "%d күн",
				M: "бір ай",
				MM: "%d ай",
				y: "бір жыл",
				yy: "%d жыл"
			},
			ordinalParse: /\d{1,2}-(ші|шы)/,
			ordinal: function (e) {
				var n = e % 10,
					a = e >= 100 ? 100 : null;
				return e + (t[e] || t[n] || t[a])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("km", {
			months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
			weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
				nextDay: "[ស្អែក ម៉ោង] LT",
				nextWeek: "dddd [ម៉ោង] LT",
				lastDay: "[ម្សិលមិញ ម៉ោង] LT",
				lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sទៀត",
				past: "%sមុន",
				s: "ប៉ុន្មានវិនាទី",
				m: "មួយនាទី",
				mm: "%d នាទី",
				h: "មួយម៉ោង",
				hh: "%d ម៉ោង",
				d: "មួយថ្ងៃ",
				dd: "%d ថ្ងៃ",
				M: "មួយខែ",
				MM: "%d ខែ",
				y: "មួយឆ្នាំ",
				yy: "%d ឆ្នាំ"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ko", {
			months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
			weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
			weekdaysShort: "일_월_화_수_목_금_토".split("_"),
			weekdaysMin: "일_월_화_수_목_금_토".split("_"),
			longDateFormat: {
				LT: "A h시 m분",
				LTS: "A h시 m분 s초",
				L: "YYYY.MM.DD",
				LL: "YYYY년 MMMM D일",
				LLL: "YYYY년 MMMM D일 A h시 m분",
				LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
			},
			calendar: {
				sameDay: "오늘 LT",
				nextDay: "내일 LT",
				nextWeek: "dddd LT",
				lastDay: "어제 LT",
				lastWeek: "지난주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s 후",
				past: "%s 전",
				s: "몇 초",
				ss: "%d초",
				m: "일분",
				mm: "%d분",
				h: "한 시간",
				hh: "%d시간",
				d: "하루",
				dd: "%d일",
				M: "한 달",
				MM: "%d달",
				y: "일 년",
				yy: "%d년"
			},
			ordinalParse: /\d{1,2}일/,
			ordinal: "%d일",
			meridiemParse: /오전|오후/,
			isPM: function (e) {
				return "오후" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "오전" : "오후"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			0: "-чү",
			1: "-чи",
			2: "-чи",
			3: "-чү",
			4: "-чү",
			5: "-чи",
			6: "-чы",
			7: "-чи",
			8: "-чи",
			9: "-чу",
			10: "-чу",
			20: "-чы",
			30: "-чу",
			40: "-чы",
			50: "-чү",
			60: "-чы",
			70: "-чи",
			80: "-чи",
			90: "-чу",
			100: "-чү"
		};
		return e.defineLocale("ky", {
			months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
			monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
			weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
			weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Бүгүн саат] LT",
				nextDay: "[Эртең саат] LT",
				nextWeek: "dddd [саат] LT",
				lastDay: "[Кече саат] LT",
				lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ичинде",
				past: "%s мурун",
				s: "бирнече секунд",
				m: "бир мүнөт",
				mm: "%d мүнөт",
				h: "бир саат",
				hh: "%d саат",
				d: "бир күн",
				dd: "%d күн",
				M: "бир ай",
				MM: "%d ай",
				y: "бир жыл",
				yy: "%d жыл"
			},
			ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
			ordinal: function (e) {
				var n = e % 10,
					a = e >= 100 ? 100 : null;
				return e + (t[e] || t[n] || t[a])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? s[n][0] : s[n][1]
		}

		function n(e) {
			return s(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
		}

		function a(e) {
			return s(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
		}

		function s(e) {
			if (e = parseInt(e, 10), isNaN(e)) return !1;
			if (e < 0) return !0;
			if (e < 10) return 4 <= e && e <= 7;
			if (e < 100) {
				var t = e % 10,
					n = e / 10;
				return s(0 === t ? n : t)
			}
			if (e < 1e4) {
				for (; e >= 10;) e /= 10;
				return s(e)
			}
			return e /= 1e3, s(e)
		}
		return e.defineLocale("lb", {
			months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[Gëschter um] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: n,
				past: a,
				s: "e puer Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d Méint",
				y: t,
				yy: "%d Joer"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("lo", {
			months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
			weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
			weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "ວັນdddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
			isPM: function (e) {
				return "ຕອນແລງ" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
			},
			calendar: {
				sameDay: "[ມື້ນີ້ເວລາ] LT",
				nextDay: "[ມື້ອື່ນເວລາ] LT",
				nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
				lastDay: "[ມື້ວານນີ້ເວລາ] LT",
				lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ອີກ %s",
				past: "%sຜ່ານມາ",
				s: "ບໍ່ເທົ່າໃດວິນາທີ",
				m: "1 ນາທີ",
				mm: "%d ນາທີ",
				h: "1 ຊົ່ວໂມງ",
				hh: "%d ຊົ່ວໂມງ",
				d: "1 ມື້",
				dd: "%d ມື້",
				M: "1 ເດືອນ",
				MM: "%d ເດືອນ",
				y: "1 ປີ",
				yy: "%d ປີ"
			},
			ordinalParse: /(ທີ່)\d{1,2}/,
			ordinal: function (e) {
				return "ທີ່" + e
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			return t ? "kelios sekundės" : a ? "kelių sekundžių" : "kelias sekundes"
		}

		function n(e, t, n, a) {
			return t ? s(n)[0] : a ? s(n)[1] : s(n)[2]
		}

		function a(e) {
			return e % 10 == 0 || e > 10 && e < 20
		}

		function s(e) {
			return r[e].split("_")
		}

		function i(e, t, i, r) {
			var o = e + " ";
			return 1 === e ? o + n(e, t, i[0], r) : t ? o + (a(e) ? s(i)[1] : s(i)[0]) : r ? o + s(i)[1] : o + (a(e) ? s(i)[1] : s(i)[2])
		}
		var r = {
			m: "minutė_minutės_minutę",
			mm: "minutės_minučių_minutes",
			h: "valanda_valandos_valandą",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dieną",
			dd: "dienos_dienų_dienas",
			M: "mėnuo_mėnesio_mėnesį",
			MM: "mėnesiai_mėnesių_mėnesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		};
		return e.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
				isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY [m.] MMMM D [d.]",
				LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY [m.] MMMM D [d.]",
				lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
				llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
			},
			calendar: {
				sameDay: "[Šiandien] LT",
				nextDay: "[Rytoj] LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar] LT",
				lastWeek: "[Praėjusį] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po %s",
				past: "prieš %s",
				s: t,
				m: n,
				mm: i,
				h: n,
				hh: i,
				d: n,
				dd: i,
				M: n,
				MM: i,
				y: n,
				yy: i
			},
			ordinalParse: /\d{1,2}-oji/,
			ordinal: function (e) {
				return e + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n) {
			return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
		}

		function n(e, n, a) {
			return e + " " + t(i[a], e, n)
		}

		function a(e, n, a) {
			return t(i[a], e, n)
		}

		function s(e, t) {
			return t ? "dažas sekundes" : "dažām sekundēm"
		}
		var i = {
			m: "minūtes_minūtēm_minūte_minūtes".split("_"),
			mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		};
		return e.defineLocale("lv", {
			months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
			weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY. [gada] D. MMMM",
				LLL: "YYYY. [gada] D. MMMM, HH:mm",
				LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
			},
			calendar: {
				sameDay: "[Šodien pulksten] LT",
				nextDay: "[Rīt pulksten] LT",
				nextWeek: "dddd [pulksten] LT",
				lastDay: "[Vakar pulksten] LT",
				lastWeek: "[Pagājušā] dddd [pulksten] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "pēc %s",
				past: "pirms %s",
				s: s,
				m: a,
				mm: n,
				h: a,
				hh: n,
				d: a,
				dd: n,
				M: a,
				MM: n,
				y: a,
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			words: {
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, a) {
				var s = t.words[a];
				return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
			}
		};
		return e.defineLocale("me", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sjutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "nekoliko sekundi",
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mjesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("mi", {
			months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
			monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
			monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
			monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
			weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
			weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [i] HH:mm",
				LLLL: "dddd, D MMMM YYYY [i] HH:mm"
			},
			calendar: {
				sameDay: "[i teie mahana, i] LT",
				nextDay: "[apopo i] LT",
				nextWeek: "dddd [i] LT",
				lastDay: "[inanahi i] LT",
				lastWeek: "dddd [whakamutunga i] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "i roto i %s",
				past: "%s i mua",
				s: "te hēkona ruarua",
				m: "he meneti",
				mm: "%d meneti",
				h: "te haora",
				hh: "%d haora",
				d: "he ra",
				dd: "%d ra",
				M: "he marama",
				MM: "%d marama",
				y: "he tau",
				yy: "%d tau"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("mk", {
			months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
			monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
			weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
			weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
			weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Денес во] LT",
				nextDay: "[Утре во] LT",
				nextWeek: "[Во] dddd [во] LT",
				lastDay: "[Вчера во] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Изминатата] dddd [во] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Изминатиот] dddd [во] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "после %s",
				past: "пред %s",
				s: "неколку секунди",
				m: "минута",
				mm: "%d минути",
				h: "час",
				hh: "%d часа",
				d: "ден",
				dd: "%d дена",
				M: "месец",
				MM: "%d месеци",
				y: "година",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
			ordinal: function (e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ml", {
			months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
			monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
			monthsParseExact: !0,
			weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
			weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
			longDateFormat: {
				LT: "A h:mm -നു",
				LTS: "A h:mm:ss -നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -നു",
				LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
			},
			calendar: {
				sameDay: "[ഇന്ന്] LT",
				nextDay: "[നാളെ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ഇന്നലെ] LT",
				lastWeek: "[കഴിഞ്ഞ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s കഴിഞ്ഞ്",
				past: "%s മുൻപ്",
				s: "അൽപ നിമിഷങ്ങൾ",
				m: "ഒരു മിനിറ്റ്",
				mm: "%d മിനിറ്റ്",
				h: "ഒരു മണിക്കൂർ",
				hh: "%d മണിക്കൂർ",
				d: "ഒരു ദിവസം",
				dd: "%d ദിവസം",
				M: "ഒരു മാസം",
				MM: "%d മാസം",
				y: "ഒരു വർഷം",
				yy: "%d വർഷം"
			},
			meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = "";
			if (t) switch (n) {
				case "s":
					s = "काही सेकंद";
					break;
				case "m":
					s = "एक मिनिट";
					break;
				case "mm":
					s = "%d मिनिटे";
					break;
				case "h":
					s = "एक तास";
					break;
				case "hh":
					s = "%d तास";
					break;
				case "d":
					s = "एक दिवस";
					break;
				case "dd":
					s = "%d दिवस";
					break;
				case "M":
					s = "एक महिना";
					break;
				case "MM":
					s = "%d महिने";
					break;
				case "y":
					s = "एक वर्ष";
					break;
				case "yy":
					s = "%d वर्षे"
			} else switch (n) {
				case "s":
					s = "काही सेकंदां";
					break;
				case "m":
					s = "एका मिनिटा";
					break;
				case "mm":
					s = "%d मिनिटां";
					break;
				case "h":
					s = "एका तासा";
					break;
				case "hh":
					s = "%d तासां";
					break;
				case "d":
					s = "एका दिवसा";
					break;
				case "dd":
					s = "%d दिवसां";
					break;
				case "M":
					s = "एका महिन्या";
					break;
				case "MM":
					s = "%d महिन्यां";
					break;
				case "y":
					s = "एका वर्षा";
					break;
				case "yy":
					s = "%d वर्षां"
			}
			return s.replace(/%d/i, e)
		}
		var n = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			a = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		return e.defineLocale("mr", {
			months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
			monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
			monthsParseExact: !0,
			weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
			weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
			weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
			longDateFormat: {
				LT: "A h:mm वाजता",
				LTS: "A h:mm:ss वाजता",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm वाजता",
				LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[उद्या] LT",
				nextWeek: "dddd, LT",
				lastDay: "[काल] LT",
				lastWeek: "[मागील] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमध्ये",
				past: "%sपूर्वी",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return a[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return n[e]
				})
			},
			meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "၁",
				2: "၂",
				3: "၃",
				4: "၄",
				5: "၅",
				6: "၆",
				7: "၇",
				8: "၈",
				9: "၉",
				0: "၀"
			},
			n = {
				"၁": "1",
				"၂": "2",
				"၃": "3",
				"၄": "4",
				"၅": "5",
				"၆": "6",
				"၇": "7",
				"၈": "8",
				"၉": "9",
				"၀": "0"
			};
		return e.defineLocale("my", {
			months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
			monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
			weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
			weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယနေ.] LT [မှာ]",
				nextDay: "[မနက်ဖြန်] LT [မှာ]",
				nextWeek: "dddd LT [မှာ]",
				lastDay: "[မနေ.က] LT [မှာ]",
				lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လာမည့် %s မှာ",
				past: "လွန်ခဲ့သော %s က",
				s: "စက္ကန်.အနည်းငယ်",
				m: "တစ်မိနစ်",
				mm: "%d မိနစ်",
				h: "တစ်နာရီ",
				hh: "%d နာရီ",
				d: "တစ်ရက်",
				dd: "%d ရက်",
				M: "တစ်လ",
				MM: "%d လ",
				y: "တစ်နှစ်",
				yy: "%d နှစ်"
			},
			preparse: function (e) {
				return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "१",
				2: "२",
				3: "३",
				4: "४",
				5: "५",
				6: "६",
				7: "७",
				8: "८",
				9: "९",
				0: "०"
			},
			n = {
				"१": "1",
				"२": "2",
				"३": "3",
				"४": "4",
				"५": "5",
				"६": "6",
				"७": "7",
				"८": "8",
				"९": "9",
				"०": "0"
			};
		return e.defineLocale("ne", {
			months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
			monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
			monthsParseExact: !0,
			weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
			weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
			weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "Aको h:mm बजे",
				LTS: "Aको h:mm:ss बजे",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, Aको h:mm बजे",
				LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
			},
			preparse: function (e) {
				return e.replace(/[१२३४५६७८९०]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
			},
			calendar: {
				sameDay: "[आज] LT",
				nextDay: "[भोलि] LT",
				nextWeek: "[आउँदो] dddd[,] LT",
				lastDay: "[हिजो] LT",
				lastWeek: "[गएको] dddd[,] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sमा",
				past: "%s अगाडि",
				s: "केही क्षण",
				m: "एक मिनेट",
				mm: "%d मिनेट",
				h: "एक घण्टा",
				hh: "%d घण्टा",
				d: "एक दिन",
				dd: "%d दिन",
				M: "एक महिना",
				MM: "%d महिना",
				y: "एक बर्ष",
				yy: "%d बर्ष"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		return e.defineLocale("nl-be", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, a) {
				return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
			},
			monthsRegex: s,
			monthsShortRegex: s,
			monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: a,
			longMonthsParse: a,
			shortMonthsParse: a,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			a = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
			s = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
		return e.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function (e, a) {
				return /-MMM-/.test(a) ? n[e.month()] : t[e.month()]
			},
			monthsRegex: s,
			monthsShortRegex: s,
			monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
			monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
			monthsParse: a,
			longMonthsParse: a,
			shortMonthsParse: a,
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om] LT",
				nextDay: "[morgen om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[gisteren om] LT",
				lastWeek: "[afgelopen] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over %s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "één minuut",
				mm: "%d minuten",
				h: "één uur",
				hh: "%d uur",
				d: "één dag",
				dd: "%d dagen",
				M: "één maand",
				MM: "%d maanden",
				y: "één jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function (e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I går klokka] LT",
				lastWeek: "[Føregåande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "੧",
				2: "੨",
				3: "੩",
				4: "੪",
				5: "੫",
				6: "੬",
				7: "੭",
				8: "੮",
				9: "੯",
				0: "੦"
			},
			n = {
				"੧": "1",
				"੨": "2",
				"੩": "3",
				"੪": "4",
				"੫": "5",
				"੬": "6",
				"੭": "7",
				"੮": "8",
				"੯": "9",
				"੦": "0"
			};
		return e.defineLocale("pa-in", {
			months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
			weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
			weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜੇ",
				LTS: "A h:mm:ss ਵਜੇ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
				LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
			},
			calendar: {
				sameDay: "[ਅਜ] LT",
				nextDay: "[ਕਲ] LT",
				nextWeek: "dddd, LT",
				lastDay: "[ਕਲ] LT",
				lastWeek: "[ਪਿਛਲੇ] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿੱਚ",
				past: "%s ਪਿਛਲੇ",
				s: "ਕੁਝ ਸਕਿੰਟ",
				m: "ਇਕ ਮਿੰਟ",
				mm: "%d ਮਿੰਟ",
				h: "ਇੱਕ ਘੰਟਾ",
				hh: "%d ਘੰਟੇ",
				d: "ਇੱਕ ਦਿਨ",
				dd: "%d ਦਿਨ",
				M: "ਇੱਕ ਮਹੀਨਾ",
				MM: "%d ਮਹੀਨੇ",
				y: "ਇੱਕ ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function (e) {
				return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
		}

		function n(e, n, a) {
			var s = e + " ";
			switch (a) {
				case "m":
					return n ? "minuta" : "minutę";
				case "mm":
					return s + (t(e) ? "minuty" : "minut");
				case "h":
					return n ? "godzina" : "godzinę";
				case "hh":
					return s + (t(e) ? "godziny" : "godzin");
				case "MM":
					return s + (t(e) ? "miesiące" : "miesięcy");
				case "yy":
					return s + (t(e) ? "lata" : "lat")
			}
		}
		var a = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
			s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
		return e.defineLocale("pl", {
			months: function (e, t) {
				return "" === t ? "(" + s[e.month()] + "|" + a[e.month()] + ")" : /D MMMM/.test(t) ? s[e.month()] : a[e.month()]
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
			weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dziś o] LT",
				nextDay: "[Jutro o] LT",
				nextWeek: "[W] dddd [o] LT",
				lastDay: "[Wczoraj o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[W zeszłą niedzielę o] LT";
						case 3:
							return "[W zeszłą środę o] LT";
						case 6:
							return "[W zeszłą sobotę o] LT";
						default:
							return "[W zeszły] dddd [o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "%s temu",
				s: "kilka sekund",
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: "1 dzień",
				dd: "%d dni",
				M: "miesiąc",
				MM: n,
				y: "rok",
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("pt-br", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "%s atrás",
				s: "poucos segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("pt", {
			months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje às] LT",
				nextDay: "[Amanhã às] LT",
				nextWeek: "dddd [às] LT",
				lastDay: "[Ontem às] LT",
				lastWeek: function () {
					return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "há %s",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n) {
			var a = {
					mm: "minute",
					hh: "ore",
					dd: "zile",
					MM: "luni",
					yy: "ani"
				},
				s = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (s = " de "), e + s + a[n]
		}
		return e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mâine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s în urmă",
				s: "câteva secunde",
				m: "un minut",
				mm: t,
				h: "o oră",
				hh: t,
				d: "o zi",
				dd: t,
				M: "o lună",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
				hh: "час_часа_часов",
				dd: "день_дня_дней",
				MM: "месяц_месяца_месяцев",
				yy: "год_года_лет"
			};
			return "m" === a ? n ? "минута" : "минуту" : e + " " + t(s[a], +e)
		}
		var a = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
		return e.defineLocale("ru", {
			months: {
				format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
				standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
			},
			monthsShort: {
				format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
				standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
				format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
				isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
			},
			weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
			monthsParse: a,
			longMonthsParse: a,
			shortMonthsParse: a,
			monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
			monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
			monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[Сегодня в] LT",
				nextDay: "[Завтра в] LT",
				lastDay: "[Вчера в] LT",
				nextWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
					switch (this.day()) {
						case 0:
							return "[В следующее] dddd [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В следующий] dddd [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В следующую] dddd [в] LT"
					}
				},
				lastWeek: function (e) {
					if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
					switch (this.day()) {
						case 0:
							return "[В прошлое] dddd [в] LT";
						case 1:
						case 2:
						case 4:
							return "[В прошлый] dddd [в] LT";
						case 3:
						case 5:
						case 6:
							return "[В прошлую] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "через %s",
				past: "%s назад",
				s: "несколько секунд",
				m: n,
				mm: n,
				h: "час",
				hh: n,
				d: "день",
				dd: n,
				M: "месяц",
				MM: n,
				y: "год",
				yy: n
			},
			meridiemParse: /ночи|утра|дня|вечера/i,
			isPM: function (e) {
				return /^(дня|вечера)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
			},
			ordinalParse: /\d{1,2}-(й|го|я)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
						return e + "-й";
					case "D":
						return e + "-го";
					case "w":
					case "W":
						return e + "-я";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("se", {
			months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "maŋit %s",
				s: "moadde sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("si", {
			months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
			monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
			weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
			weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
			weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[අද] LT[ට]",
				nextDay: "[හෙට] LT[ට]",
				nextWeek: "dddd LT[ට]",
				lastDay: "[ඊයේ] LT[ට]",
				lastWeek: "[පසුගිය] dddd LT[ට]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sකින්",
				past: "%sකට පෙර",
				s: "තත්පර කිහිපය",
				m: "මිනිත්තුව",
				mm: "මිනිත්තු %d",
				h: "පැය",
				hh: "පැය %d",
				d: "දිනය",
				dd: "දින %d",
				M: "මාසය",
				MM: "මාස %d",
				y: "වසර",
				yy: "වසර %d"
			},
			ordinalParse: /\d{1,2} වැනි/,
			ordinal: function (e) {
				return e + " වැනි"
			},
			meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
			isPM: function (e) {
				return "ප.ව." === e || "පස් වරු" === e
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			return e > 1 && e < 5
		}

		function n(e, n, a, s) {
			var i = e + " ";
			switch (a) {
				case "s":
					return n || s ? "pár sekúnd" : "pár sekundami";
				case "m":
					return n ? "minúta" : s ? "minútu" : "minútou";
				case "mm":
					return n || s ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
				case "h":
					return n ? "hodina" : s ? "hodinu" : "hodinou";
				case "hh":
					return n || s ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
				case "d":
					return n || s ? "deň" : "dňom";
				case "dd":
					return n || s ? i + (t(e) ? "dni" : "dní") : i + "dňami";
				case "M":
					return n || s ? "mesiac" : "mesiacom";
				case "MM":
					return n || s ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
				case "y":
					return n || s ? "rok" : "rokom";
				case "yy":
					return n || s ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
			}
		}
		var a = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
			s = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
		return e.defineLocale("sk", {
			months: a,
			monthsShort: s,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o] LT",
				nextDay: "[zajtra o] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v nedeľu o] LT";
						case 1:
						case 2:
							return "[v] dddd [o] LT";
						case 3:
							return "[v stredu o] LT";
						case 4:
							return "[vo štvrtok o] LT";
						case 5:
							return "[v piatok o] LT";
						case 6:
							return "[v sobotu o] LT"
					}
				},
				lastDay: "[včera o] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[minulú nedeľu o] LT";
						case 1:
						case 2:
							return "[minulý] dddd [o] LT";
						case 3:
							return "[minulú stredu o] LT";
						case 4:
						case 5:
							return "[minulý] dddd [o] LT";
						case 6:
							return "[minulú sobotu o] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pred %s",
				s: n,
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = e + " ";
			switch (n) {
				case "s":
					return t || a ? "nekaj sekund" : "nekaj sekundami";
				case "m":
					return t ? "ena minuta" : "eno minuto";
				case "mm":
					return s += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || a ? "minuti" : "minutama" : e < 5 ? t || a ? "minute" : "minutami" : t || a ? "minut" : "minutami";
				case "h":
					return t ? "ena ura" : "eno uro";
				case "hh":
					return s += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || a ? "uri" : "urama" : e < 5 ? t || a ? "ure" : "urami" : t || a ? "ur" : "urami";
				case "d":
					return t || a ? "en dan" : "enim dnem";
				case "dd":
					return s += 1 === e ? t || a ? "dan" : "dnem" : 2 === e ? t || a ? "dni" : "dnevoma" : t || a ? "dni" : "dnevi";
				case "M":
					return t || a ? "en mesec" : "enim mesecem";
				case "MM":
					return s += 1 === e ? t || a ? "mesec" : "mesecem" : 2 === e ? t || a ? "meseca" : "mesecema" : e < 5 ? t || a ? "mesece" : "meseci" : t || a ? "mesecev" : "meseci";
				case "y":
					return t || a ? "eno leto" : "enim letom";
				case "yy":
					return s += 1 === e ? t || a ? "leto" : "letom" : 2 === e ? t || a ? "leti" : "letoma" : e < 5 ? t || a ? "leta" : "leti" : t || a ? "let" : "leti"
			}
		}
		return e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[včeraj ob] LT",
				lastWeek: function () {
					switch (this.day()) {
						case 0:
							return "[prejšnjo] [nedeljo] [ob] LT";
						case 3:
							return "[prejšnjo] [sredo] [ob] LT";
						case 6:
							return "[prejšnjo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejšnji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez %s",
				past: "pred %s",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
			weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
			weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function (e) {
				return "M" === e.charAt(0)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot në] LT",
				nextDay: "[Nesër në] LT",
				nextWeek: "dddd [në] LT",
				lastDay: "[Dje në] LT",
				lastWeek: "dddd [e kaluar në] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "në %s",
				past: "%s më parë",
				s: "disa sekonda",
				m: "një minutë",
				mm: "%d minuta",
				h: "një orë",
				hh: "%d orë",
				d: "një ditë",
				dd: "%d ditë",
				M: "një muaj",
				MM: "%d muaj",
				y: "një vit",
				yy: "%d vite"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			words: {
				m: ["један минут", "једне минуте"],
				mm: ["минут", "минуте", "минута"],
				h: ["један сат", "једног сата"],
				hh: ["сат", "сата", "сати"],
				dd: ["дан", "дана", "дана"],
				MM: ["месец", "месеца", "месеци"],
				yy: ["година", "године", "година"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, a) {
				var s = t.words[a];
				return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
			}
		};
		return e.defineLocale("sr-cyrl", {
			months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
			monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
			monthsParseExact: !0,
			weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
			weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
			weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[данас у] LT",
				nextDay: "[сутра у] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[у] [недељу] [у] LT";
						case 3:
							return "[у] [среду] [у] LT";
						case 6:
							return "[у] [суботу] [у] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[у] dddd [у] LT"
					}
				},
				lastDay: "[јуче у] LT",
				lastWeek: function () {
					return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "пре %s",
				s: "неколико секунди",
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "дан",
				dd: t.translate,
				M: "месец",
				MM: t.translate,
				y: "годину",
				yy: t.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			words: {
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function (e, t) {
				return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
			},
			translate: function (e, n, a) {
				var s = t.words[a];
				return 1 === a.length ? n ? s[0] : s[1] : e + " " + t.correctGrammaticalCase(e, s)
			}
		};
		return e.defineLocale("sr", {
			months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function () {
					switch (this.day()) {
						case 0:
							return "[u] [nedelju] [u] LT";
						case 3:
							return "[u] [sredu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juče u] LT",
				lastWeek: function () {
					return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "pre %s",
				s: "nekoliko sekundi",
				m: t.translate,
				mm: t.translate,
				h: t.translate,
				hh: t.translate,
				d: "dan",
				dd: t.translate,
				M: "mesec",
				MM: t.translate,
				y: "godinu",
				yy: t.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function (e, t, n) {
				return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			ordinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
			weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
			weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[Igår] LT",
				nextWeek: "[På] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "för %s sedan",
				s: "några sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
				1: "௧",
				2: "௨",
				3: "௩",
				4: "௪",
				5: "௫",
				6: "௬",
				7: "௭",
				8: "௮",
				9: "௯",
				0: "௦"
			},
			n = {
				"௧": "1",
				"௨": "2",
				"௩": "3",
				"௪": "4",
				"௫": "5",
				"௬": "6",
				"௭": "7",
				"௮": "8",
				"௯": "9",
				"௦": "0"
			};
		return e.defineLocale("ta", {
			months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
			weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
			weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
			weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, HH:mm",
				LLLL: "dddd, D MMMM YYYY, HH:mm"
			},
			calendar: {
				sameDay: "[இன்று] LT",
				nextDay: "[நாளை] LT",
				nextWeek: "dddd, LT",
				lastDay: "[நேற்று] LT",
				lastWeek: "[கடந்த வாரம்] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s இல்",
				past: "%s முன்",
				s: "ஒரு சில விநாடிகள்",
				m: "ஒரு நிமிடம்",
				mm: "%d நிமிடங்கள்",
				h: "ஒரு மணி நேரம்",
				hh: "%d மணி நேரம்",
				d: "ஒரு நாள்",
				dd: "%d நாட்கள்",
				M: "ஒரு மாதம்",
				MM: "%d மாதங்கள்",
				y: "ஒரு வருடம்",
				yy: "%d ஆண்டுகள்"
			},
			ordinalParse: /\d{1,2}வது/,
			ordinal: function (e) {
				return e + "வது"
			},
			preparse: function (e) {
				return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
					return n[e]
				})
			},
			postformat: function (e) {
				return e.replace(/\d/g, function (e) {
					return t[e]
				})
			},
			meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
			meridiem: function (e, t, n) {
				return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
			},
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("te", {
			months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
			monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
			monthsParseExact: !0,
			weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
			weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
			weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[నేడు] LT",
				nextDay: "[రేపు] LT",
				nextWeek: "dddd, LT",
				lastDay: "[నిన్న] LT",
				lastWeek: "[గత] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s లో",
				past: "%s క్రితం",
				s: "కొన్ని క్షణాలు",
				m: "ఒక నిమిషం",
				mm: "%d నిమిషాలు",
				h: "ఒక గంట",
				hh: "%d గంటలు",
				d: "ఒక రోజు",
				dd: "%d రోజులు",
				M: "ఒక నెల",
				MM: "%d నెలలు",
				y: "ఒక సంవత్సరం",
				yy: "%d సంవత్సరాలు"
			},
			ordinalParse: /\d{1,2}వ/,
			ordinal: "%dవ",
			meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
			},
			week: {
				dow: 0,
				doy: 6
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("tet", {
			months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
			weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
			weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ohin iha] LT",
				nextDay: "[Aban iha] LT",
				nextWeek: "dddd [iha] LT",
				lastDay: "[Horiseik iha] LT",
				lastWeek: "dddd [semana kotuk] [iha] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "iha %s",
				past: "%s liuba",
				s: "minutu balun",
				m: "minutu ida",
				mm: "minutus %d",
				h: "horas ida",
				hh: "horas %d",
				d: "loron ida",
				dd: "loron %d",
				M: "fulan ida",
				MM: "fulan %d",
				y: "tinan ida",
				yy: "tinan %d"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("th", {
			months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
			monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
			monthsParseExact: !0,
			weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
			weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
			weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY/MM/DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY เวลา H:mm",
				LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
			},
			meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
			isPM: function (e) {
				return "หลังเที่ยง" === e
			},
			meridiem: function (e, t, n) {
				return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
			},
			calendar: {
				sameDay: "[วันนี้ เวลา] LT",
				nextDay: "[พรุ่งนี้ เวลา] LT",
				nextWeek: "dddd[หน้า เวลา] LT",
				lastDay: "[เมื่อวานนี้ เวลา] LT",
				lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "อีก %s",
				past: "%sที่แล้ว",
				s: "ไม่กี่วินาที",
				m: "1 นาที",
				mm: "%d นาที",
				h: "1 ชั่วโมง",
				hh: "%d ชั่วโมง",
				d: "1 วัน",
				dd: "%d วัน",
				M: "1 เดือน",
				MM: "%d เดือน",
				y: "1 ปี",
				yy: "%d ปี"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "LT [ngayong araw]",
				nextDay: "[Bukas ng] LT",
				nextWeek: "LT [sa susunod na] dddd",
				lastDay: "LT [kahapon]",
				lastWeek: "LT [noong nakaraang] dddd",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e) {
			var t = e;
			return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
		}

		function n(e) {
			var t = e;
			return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
		}

		function a(e, t, n, a) {
			var i = s(e);
			switch (n) {
				case "mm":
					return i + " tup";
				case "hh":
					return i + " rep";
				case "dd":
					return i + " jaj";
				case "MM":
					return i + " jar";
				case "yy":
					return i + " DIS"
			}
		}

		function s(e) {
			var t = Math.floor(e % 1e3 / 100),
				n = Math.floor(e % 100 / 10),
				a = e % 10,
				s = "";
			return t > 0 && (s += i[t] + "vatlh"), n > 0 && (s += ("" !== s ? " " : "") + i[n] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + i[a]), "" === s ? "pagh" : s
		}
		var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
		return e.defineLocale("tlh", {
			months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
			monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
			monthsParseExact: !0,
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj] LT",
				nextDay: "[wa’leS] LT",
				nextWeek: "LLL",
				lastDay: "[wa’Hu’] LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: t,
				past: n,
				s: "puS lup",
				m: "wa’ tup",
				mm: a,
				h: "wa’ rep",
				hh: a,
				d: "wa’ jaj",
				dd: a,
				M: "wa’ jar",
				MM: a,
				y: "wa’ DIS",
				yy: a
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		var t = {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'ncı",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'ıncı",
			90: "'ıncı"
		};
		return e.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[yarın saat] LT",
				nextWeek: "[haftaya] dddd [saat] LT",
				lastDay: "[dün] LT",
				lastWeek: "[geçen hafta] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s önce",
				s: "birkaç saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir yıl",
				yy: "%d yıl"
			},
			ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
			ordinal: function (e) {
				if (0 === e) return e + "'ıncı";
				var n = e % 10,
					a = e % 100 - n,
					s = e >= 100 ? 100 : null;
				return e + (t[n] || t[a] || t[s])
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t, n, a) {
			var s = {
				s: ["viensas secunds", "'iensas secunds"],
				m: ["'n míut", "'iens míut"],
				mm: [e + " míuts", e + " míuts"],
				h: ["'n þora", "'iensa þora"],
				hh: [e + " þoras", e + " þoras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", e + " ars"]
			};
			return a ? s[n][0] : t ? s[n][0] : s[n][1]
		}
		return e.defineLocale("tzl", {
			months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function (e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function (e, t, n) {
				return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi à] LT",
				nextDay: "[demà à] LT",
				nextWeek: "dddd [à] LT",
				lastDay: "[ieiri à] LT",
				lastWeek: "[sür el] dddd [lasteu à] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("tzm-latn", {
			months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "saɛa",
				hh: "%d tassaɛin",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("tzm", {
			months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
			weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
				nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
				nextWeek: "dddd [ⴴ] LT",
				lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
				lastWeek: "dddd [ⴴ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
				past: "ⵢⴰⵏ %s",
				s: "ⵉⵎⵉⴽ",
				m: "ⵎⵉⵏⵓⴺ",
				mm: "%d ⵎⵉⵏⵓⴺ",
				h: "ⵙⴰⵄⴰ",
				hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
				d: "ⴰⵙⵙ",
				dd: "%d oⵙⵙⴰⵏ",
				M: "ⴰⵢoⵓⵔ",
				MM: "%d ⵉⵢⵢⵉⵔⵏ",
				y: "ⴰⵙⴳⴰⵙ",
				yy: "%d ⵉⵙⴳⴰⵙⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, a) {
			var s = {
				mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
				hh: n ? "година_години_годин" : "годину_години_годин",
				dd: "день_дні_днів",
				MM: "місяць_місяці_місяців",
				yy: "рік_роки_років"
			};
			return "m" === a ? n ? "хвилина" : "хвилину" : "h" === a ? n ? "година" : "годину" : e + " " + t(s[a], +e)
		}

		function a(e, t) {
			return {
				nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
				accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
				genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
			}[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()]
		}

		function s(e) {
			return function () {
				return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
			}
		}
		return e.defineLocale("uk", {
			months: {
				format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
				standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
			},
			monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
			weekdays: a,
			weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р., HH:mm",
				LLLL: "dddd, D MMMM YYYY р., HH:mm"
			},
			calendar: {
				sameDay: s("[Сьогодні "),
				nextDay: s("[Завтра "),
				lastDay: s("[Вчора "),
				nextWeek: s("[У] dddd ["),
				lastWeek: function () {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return s("[Минулої] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return s("[Минулого] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "за %s",
				past: "%s тому",
				s: "декілька секунд",
				m: n,
				mm: n,
				h: "годину",
				hh: n,
				d: "день",
				dd: n,
				M: "місяць",
				MM: n,
				y: "рік",
				yy: n
			},
			meridiemParse: /ночі|ранку|дня|вечора/,
			isPM: function (e) {
				return /^(дня|вечора)$/.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
			},
			ordinalParse: /\d{1,2}-(й|го)/,
			ordinal: function (e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e + "-й";
					case "D":
						return e + "-го";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("uz", {
			months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
			monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
			weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
			weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
			weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Бугун соат] LT [да]",
				nextDay: "[Эртага] LT [да]",
				nextWeek: "dddd [куни соат] LT [да]",
				lastDay: "[Кеча соат] LT [да]",
				lastWeek: "[Утган] dddd [куни соат] LT [да]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин %s ичида",
				past: "Бир неча %s олдин",
				s: "фурсат",
				m: "бир дакика",
				mm: "%d дакика",
				h: "бир соат",
				hh: "%d соат",
				d: "бир кун",
				dd: "%d кун",
				M: "бир ой",
				MM: "%d ой",
				y: "бир йил",
				yy: "%d йил"
			},
			week: {
				dow: 1,
				doy: 7
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function (e) {
				return /^ch$/i.test(e)
			},
			meridiem: function (e, t, n) {
				return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [năm] YYYY",
				LLL: "D MMMM [năm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc] LT",
				nextDay: "[Ngày mai lúc] LT",
				nextWeek: "dddd [tuần tới lúc] LT",
				lastDay: "[Hôm qua lúc] LT",
				lastWeek: "dddd [tuần rồi lúc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tới",
				past: "%s trước",
				s: "vài giây",
				m: "một phút",
				mm: "%d phút",
				h: "một giờ",
				hh: "%d giờ",
				d: "một ngày",
				dd: "%d ngày",
				M: "một tháng",
				MM: "%d tháng",
				y: "một năm",
				yy: "%d năm"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function (e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("x-pseudo", {
			months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
			monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
			monthsParseExact: !0,
			weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
			weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
			weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~ódá~ý át] LT",
				nextDay: "[T~ómó~rró~w át] LT",
				nextWeek: "dddd [át] LT",
				lastDay: "[Ý~ést~érdá~ý át] LT",
				lastWeek: "[L~ást] dddd [át] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "í~ñ %s",
				past: "%s á~gó",
				s: "á ~féw ~sécó~ñds",
				m: "á ~míñ~úté",
				mm: "%d m~íñú~tés",
				h: "á~ñ hó~úr",
				hh: "%d h~óúrs",
				d: "á ~dáý",
				dd: "%d d~áýs",
				M: "á ~móñ~th",
				MM: "%d m~óñt~hs",
				y: "á ~ýéár",
				yy: "%d ý~éárs"
			},
			ordinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (e) {
				var t = e % 10;
				return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("yo", {
			months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
			monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
			weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
			weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
			weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Ònì ni] LT",
				nextDay: "[Ọ̀la ni] LT",
				nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
				lastDay: "[Àna ni] LT",
				lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ní %s",
				past: "%s kọjá",
				s: "ìsẹjú aayá die",
				m: "ìsẹjú kan",
				mm: "ìsẹjú %d",
				h: "wákati kan",
				hh: "wákati %d",
				d: "ọjọ́ kan",
				dd: "ọjọ́ %d",
				M: "osù kan",
				MM: "osù %d",
				y: "ọdún kan",
				yy: "ọdún %d"
			},
			ordinalParse: /ọjọ́\s\d{1,2}/,
			ordinal: "ọjọ́ %d",
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah点mm分",
				LTS: "Ah点m分s秒",
				L: "YYYY-MM-DD",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日Ah点mm分",
				LLLL: "YYYY年MMMD日ddddAh点mm分",
				l: "YYYY-MM-DD",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日Ah点mm分",
				llll: "YYYY年MMMD日ddddAh点mm分"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function (e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: function () {
					return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
				},
				nextDay: function () {
					return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
				},
				lastDay: function () {
					return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
				},
				nextWeek: function () {
					var t, n;
					return t = e().startOf("week"), n = this.diff(t, "days") >= 7 ? "[下]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
				},
				lastWeek: function () {
					var t, n;
					return t = e().startOf("week"), n = this.unix() < t.unix() ? "[上]" : "[本]", 0 === this.minutes() ? n + "dddAh点整" : n + "dddAh点mm"
				},
				sameElse: "LL"
			},
			ordinalParse: /\d{1,2}(日|月|周)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "周";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s内",
				past: "%s前",
				s: "几秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 天",
				dd: "%d 天",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("zh-hk", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah點mm分",
				LTS: "Ah點m分s秒",
				L: "YYYY年MMMD日",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日Ah點mm分",
				LLLL: "YYYY年MMMD日ddddAh點mm分",
				l: "YYYY年MMMD日",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日Ah點mm分",
				llll: "YYYY年MMMD日ddddAh點mm分"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})
}, function (e, t, n) {
	! function (e, t) {
		t(n(0))
	}(0, function (e) {
		"use strict";
		return e.defineLocale("zh-tw", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah點mm分",
				LTS: "Ah點m分s秒",
				L: "YYYY年MMMD日",
				LL: "YYYY年MMMD日",
				LLL: "YYYY年MMMD日Ah點mm分",
				LLLL: "YYYY年MMMD日ddddAh點mm分",
				l: "YYYY年MMMD日",
				ll: "YYYY年MMMD日",
				lll: "YYYY年MMMD日Ah點mm分",
				llll: "YYYY年MMMD日ddddAh點mm分"
			},
			meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
			meridiemHour: function (e, t) {
				return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
			},
			meridiem: function (e, t, n) {
				var a = 100 * e + t;
				return a < 600 ? "凌晨" : a < 900 ? "早上" : a < 1130 ? "上午" : a < 1230 ? "中午" : a < 1800 ? "下午" : "晚上"
			},
			calendar: {
				sameDay: "[今天]LT",
				nextDay: "[明天]LT",
				nextWeek: "[下]ddddLT",
				lastDay: "[昨天]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(日|月|週)/,
			ordinal: function (e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "日";
					case "M":
						return e + "月";
					case "w":
					case "W":
						return e + "週";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%s內",
				past: "%s前",
				s: "幾秒",
				m: "1 分鐘",
				mm: "%d 分鐘",
				h: "1 小時",
				hh: "%d 小時",
				d: "1 天",
				dd: "%d 天",
				M: "1 個月",
				MM: "%d 個月",
				y: "1 年",
				yy: "%d 年"
			}
		})
	})
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		i = function () {
			function e(t) {
				a(this, e), this.audio = new Audio, t.volume && (this.audio.volume = t.volume), this.addEvent("play", t.onPlay), this.addEvent("playing", t.onPlaying), this.addEvent("pause", t.onPause), this.addEvent("ended", t.onComplete), this.addLoadingEvent("progress", t.onLoading), this.addProgressEvent("timeupdate", t.onProgress), this.audio.src = t.url, this.stopEvent = t.onStop
			}
			return s(e, [{
				key: "addEvent",
				value: function (e, t) {
					t && this.audio.addEventListener(e, t)
				}
			}, {
				key: "addProgressEvent",
				value: function (e, t) {
					t && this.audio.addEventListener(e, function () {
						t(1e3 * this.audio.currentTime, 1e3 * this.audio.duration)
					}.bind(this))
				}
			}, {
				key: "addLoadingEvent",
				value: function (e, t) {
					t && this.audio.addEventListener(e, function () {
						t(1e3 * (this.audio.buffered.length > 0 ? this.audio.buffered.end(0) : 0), 1e3 * this.audio.duration)
					}.bind(this))
				}
			}, {
				key: "play",
				value: function () {
					return this.audio.play(), this
				}
			}, {
				key: "stop",
				value: function () {
					return this.audio.pause(), this.audio.currentTime = 0, this.stopEvent && this.stopEvent(), this
				}
			}, {
				key: "togglePause",
				value: function () {
					return this.audio.paused ? this.audio.play() : this.audio.pause(), this
				}
			}, {
				key: "volume",
				value: function (e) {
					return this.audio.volume = e, this
				}
			}, {
				key: "unload",
				value: function () {
					return this.stop(), this.audio.src = "", this.audio.load(), this
				}
			}]), e
		}();
	t.default = i
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		i = n(2),
		r = function () {
			function e() {
				a(this, e), this.subscribers = {}
			}
			return s(e, [{
				key: "subscribe",
				value: function (e) {
					e.event instanceof Array || (e.event = [event]);
					for (var t = 0; t < e.event.length; t++) this.subscribers[e.event[t]] || (this.subscribers[e.event[t]] = []), this.subscribers[e.event[t]].indexOf(e.subscriber) <= -1 && this.subscribers[e.event[t]].push(e.subscriber)
				}
			}, {
				key: "unsubscribe",
				value: function (e) {
					e.event instanceof Array || (e.event = [event]);
					for (var t = 0; t < e.event.length; t++) this.subscribers[e.event[t]] && (0, i.ArrayDeleteElement)(this.subscribers[e.event[t]], e.subscriber)
				}
			}, {
				key: "publish",
				value: function (e) {
					if (this.subscribers[e.event])
						for (var t = 0; t < this.subscribers[e.event].length; t++) this.subscribers[e.event][t].receive(e)
				}
			}]), e
		}();
	t.default = r
}, function (e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var s = n(1),
		i = n(6),
		r = a(i),
		o = n(4),
		d = a(o),
		u = new r.default(localStorage.getItem("url") || "https://localhost:4000", localStorage.getItem("username") || "", localStorage.getItem("token") || "", localStorage.getItem("salt") || "", "1.13.0", "Aurial"),
		l = document.createElement("app");
	document.body.appendChild(l), (0, s.render)((0, s.h)(d.default, {
		subsonic: u,
		trackBuffer: localStorage.getItem("trackBuffer") || 0,
		persistQueue: "true" === localStorage.getItem("persistQueue")
	}), l)
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Artist = void 0;
	var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		o = n(1),
		d = n(2),
		u = n(3),
		l = n(4),
		_ = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					artists: [],
					loaded: !1,
					error: null,
					search: "",
					uid: (0, d.UniqueID)()
				}, i.search = i.search.bind(i), i.loadArtists(), i
			}
			return i(t, e), r(t, [{
				key: "componentDidMount",
				value: function () {
					$("#" + this.state.uid).accordion({
						exclusive: !1
					})
				}
			}, {
				key: "componentDidUpdate",
				value: function (e, t) {
					e.subsonic != this.props.subsonic && this.loadArtists()
				}
			}, {
				key: "loadArtists",
				value: function () {
					this.props.subsonic.getArtists({
						success: function (e) {
							this.setState({
								artists: e.artists,
								loaded: !0,
								error: null
							})
						}.bind(this),
						error: function (e) {
							this.setState({
								error: (0, o.h)(u.IconMessage, {
									type: "negative",
									icon: "warning circle",
									header: "",
									message: "Failed to load artists. Check settings."
								}),
								loaded: !0
							}), console.error(this, e), l.Messages.message(this.props.events, "Unable to get artists: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "search",
				value: function (e) {
					this.setState({
						search: e.target.value
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = this.state.artists.filter(function (e) {
						return "" == this.state.search || -1 !== e.name.toLowerCase().indexOf(this.state.search.toLowerCase())
					}.bind(this)).map(function (e) {
						return (0, o.h)(c, {
							key: e.id,
							subsonic: this.props.subsonic,
							events: this.props.events,
							data: e,
							iconSize: this.props.iconSize
						})
					}.bind(this));
					return this.state.loaded || 0 != e.length || (e = (0, o.h)("div", {
						className: "ui inverted active centered inline loader"
					})), this.state.error || (0, o.h)("div", {
						className: "ui inverted basic segment"
					}, (0, o.h)("div", {
						className: "ui inverted transparent fluid left icon input"
					}, (0, o.h)("i", {
						className: "search icon"
					}), (0, o.h)("input", {
						type: "text",
						placeholder: "Search...",
						value: this.state.search,
						onChange: this.search
					})), (0, o.h)("div", {
						className: "ui inverted divider"
					}), (0, o.h)("div", {
						className: "ui inverted fluid accordion",
						id: this.state.uid
					}, e))
				}
			}]), t
		}(o.Component);
	t.default = _;
	var c = t.Artist = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					albums: [],
					loaded: !1
				}, i.loadAlbums = i.loadAlbums.bind(i), i.onClick = i.onClick.bind(i), i
			}
			return i(t, e), r(t, [{
				key: "loadAlbums",
				value: function () {
					this.props.subsonic.getArtist({
						id: this.props.data.id,
						success: function (e) {
							this.setState({
								albums: e.albums,
								loaded: !0
							})
						}.bind(this),
						error: function (e) {
							console.error(this, e), l.Messages.message(this.props.events, "Unable to load artist's albums: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "onClick",
				value: function () {
					this.state.loaded || this.loadAlbums()
				}
			}, {
				key: "render",
				value: function () {
					var e = this.state.albums.map(function (e) {
						return (0, o.h)(m, {
							key: e.id,
							subsonic: this.props.subsonic,
							events: this.props.events,
							data: e,
							iconSize: this.props.iconSize
						})
					}.bind(this));
					return this.state.loaded || 0 != e.length || (e = (0, o.h)("div", {
						className: "ui inverted active centered inline loader"
					})), (0, o.h)("div", {
						key: this.props.data.id,
						onClick: this.onClick
					}, (0, o.h)("div", {
						className: "title"
					}, (0, o.h)("i", {
						className: "dropdown icon"
					}), this.props.data.name, " (", this.props.filter ? Object.keys(this.props.filter).length : this.props.data.albumCount, ")"), (0, o.h)("div", {
						className: "ui secondary inverted segment content"
					}, (0, o.h)("div", {
						className: "ui inverted tiny selection list"
					}, e)))
				}
			}]), t
		}(o.Component),
		m = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.onClick = i.onClick.bind(i), i
			}
			return i(t, e), r(t, [{
				key: "onClick",
				value: function () {
					this.props.subsonic.getAlbum({
						id: this.props.data.id,
						success: function (e) {
							this.props.events.publish({
								event: "browserSelected",
								data: {
									tracks: e.album
								}
							})
						}.bind(this),
						error: function (e) {
							console.error(this, e), l.Messages.message(this.props.events, "Unable to load album: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = this.props.data.year ? "[" + this.props.data.year + "]" : "";
					return (0, o.h)("div", {
						className: "item",
						onClick: this.onClick
					}, (0, o.h)(u.CoverArt, {
						subsonic: this.props.subsonic,
						id: this.props.data.coverArt,
						size: this.props.iconSize
					}), (0, o.h)("div", {
						className: "content"
					}, (0, o.h)("div", {
						className: "header"
					}, this.props.data.name), (0, o.h)("div", {
						className: "description"
					}, e, " ", this.props.data.songCount, " tracks"), (0, o.h)("div", {
						className: "extra"
					})))
				}
			}]), t
		}(o.Component)
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		o = n(1),
		d = n(115),
		u = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(d),
		l = n(2),
		_ = n(3),
		c = n(4),
		m = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.noImage = "css/aurial_200.png", i.playerQueue = [], i.buffered = !1, i.player = null, i.queue = [], i.state = {
					queue: [],
					shuffle: !1,
					playing: null,
					volume: 1
				}, e.events.subscribe({
					subscriber: i,
					event: ["playerPlay", "playerToggle", "playerStop", "playerNext", "playerPrevious", "playerEnqueue", "playerShuffle", "playerVolume"]
				}), !0 === e.persist && setTimeout(function () {
					e.events.publish({
						event: "playerEnqueue",
						data: {
							action: "ADD",
							tracks: JSON.parse(localStorage.getItem("queue"))
						}
					})
				}, 500), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUpdate",
				value: function (e, t) {
					(this.queueDiff(this.queue, t.queue) || this.state.shuffle != t.shuffle) && (this.queue = this.state.shuffle || t.shuffle ? (0, l.ArrayShuffle)(t.queue.slice()) : t.queue.slice())
				}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerPlay":
							this.play({
								track: e.data
							});
							break;
						case "playerToggle":
							this.togglePlay();
							break;
						case "playerStop":
							this.stop();
							break;
						case "playerNext":
							this.next();
							break;
						case "playerPrevious":
							this.previous();
							break;
						case "playerEnqueue":
							this.enqueue(e.data.action, e.data.tracks);
							break;
						case "playerShuffle":
							this.setState({
								shuffle: e.data
							});
							break;
						case "playerVolume":
							this.volume(e.data)
					}
				}
			}, {
				key: "createPlayer",
				value: function (e) {
					var t = this.props.events,
						n = this.props.subsonic.getStreamUrl({
							id: e.id
						});
					return new u.default({
						url: n,
						volume: this.state.volume,
						onPlay: function () {
							t.publish({
								event: "playerStarted",
								data: e
							})
						},
						onResume: function () {
							t.publish({
								event: "playerStarted",
								data: e
							})
						},
						onStop: function () {
							t.publish({
								event: "playerStopped",
								data: e
							})
						},
						onPause: function () {
							t.publish({
								event: "playerPaused",
								data: e
							})
						},
						onProgress: function (n, a) {
							if (t.publish({
									event: "playerUpdated",
									data: {
										track: e,
										duration: a,
										position: n
									}
								}), !this.buffered && this.props.trackBuffer > 0 && a - n < 1e3 * this.props.trackBuffer) {
								var s = this.nextTrack();
								console.log("Prepare next track", s), null !== s ? (this.buffered = !0, this.playerQueue.push({
									track: s,
									player: this.createPlayer(s)
								})) : console.log("There is no next track")
							}
						}.bind(this),
						onLoading: function (n, a) {
							t.publish({
								event: "playerLoading",
								data: {
									track: e,
									loaded: n,
									total: a
								}
							})
						},
						onComplete: function () {
							t.publish({
								event: "playerFinished",
								data: e
							}), this.next()
						}.bind(this)
					})
				}
			}, {
				key: "play",
				value: function (e) {
					this.buffered = !1, this.stop(), null != e ? (this.player = e.player ? e.player.play() : this.createPlayer(e.track).play(), this.setState({
						playing: e.track
					})) : this.setState({
						playing: null
					})
				}
			}, {
				key: "next",
				value: function () {
					var e = this.playerQueue.shift();
					if (null == e) {
						var t = this.nextTrack();
						null != t && (e = {
							track: t
						})
					}
					this.play(e)
				}
			}, {
				key: "previous",
				value: function () {
					var e = null,
						t = this.previousTrack();
					null != t && (e = {
						track: t
					}), null != this.player && this.player.unload(), this.play(e)
				}
			}, {
				key: "nextTrack",
				value: function () {
					var e = null;
					if (this.queue.length > 0) {
						var t = null == this.state.playing ? 0 : Math.max(0, this.queue.indexOf(this.state.playing));
						t < this.queue.length - 1 ? t++ : t = 0, e = this.queue[t]
					}
					return e
				}
			}, {
				key: "previousTrack",
				value: function () {
					var e = null;
					if (this.queue.length > 0) {
						var t = null == this.state.playing ? 0 : Math.max(0, this.queue.indexOf(this.state.playing));
						t > 0 ? t-- : t = this.queue.length - 1, e = this.queue[t]
					}
					return e
				}
			}, {
				key: "togglePlay",
				value: function () {
					null != this.player ? this.player.togglePause() : null != this.state.playing ? this.play({
						track: this.state.playing
					}) : this.queue.length > 0 && this.next()
				}
			}, {
				key: "stop",
				value: function () {
					null != this.player && (this.player.stop(), this.player.unload()), this.player = null
				}
			}, {
				key: "volume",
				value: function (e) {
					null != this.player && this.player.volume(e), this.setState({
						volume: e
					})
				}
			}, {
				key: "enqueue",
				value: function (e, t) {
					var n = this.state.queue.slice();
					if ("REPLACE" == e) n = t.slice(), c.Messages.message(this.props.events, "Added " + t.length + " tracks to queue.", "info", "info");
					else if ("ADD" == e) {
						for (var a = n.map(function (e) {
								return e.id
							}), s = 0, i = 0, r = 0; r < t.length; r++) {
							var o = a.indexOf(t[r].id); - 1 == o ? (n.push(t[r]), a.push(t[r].id), s++) : (n.splice(o, 1), a.splice(o, 1), i++)
						}
						if (1 == t.length) {
							var d = t[0].artist + " - " + t[0].title;
							c.Messages.message(this.props.events, (s ? "Added " + d + " to queue. " : "") + (i ? "Removed " + d + " from queue." : ""), "info", "info")
						} else(s || i) && c.Messages.message(this.props.events, (s ? "Added " + s + " tracks to queue. " : "") + (i ? "Removed " + i + " tracks from queue." : ""), "info", "info")
					}
					this.setState({
						queue: n
					}), this.props.events.publish({
						event: "playerEnqueued",
						data: n
					}), this.props.persist && localStorage.setItem("queue", JSON.stringify(n))
				}
			}, {
				key: "queueDiff",
				value: function (e, t) {
					if (e.length != t.length) return !0;
					var n = !0;
					return e.forEach(function (e) {
						var a = !1,
							s = !0,
							i = !1,
							r = void 0;
						try {
							for (var o, d = t[Symbol.iterator](); !(s = (o = d.next()).done); s = !0) {
								var u = o.value;
								if (e.id == u.id) {
									a = !0;
									break
								}
							}
						} catch (e) {
							i = !0, r = e
						} finally {
							try {
								!s && d.return && d.return()
							} finally {
								if (i) throw r
							}
						}
						n = n && !a
					}), n
				}
			}, {
				key: "render",
				value: function () {
					var e = (0, o.h)("img", {
						src: this.noImage
					});
					return null != this.state.playing && (e = (0, o.h)(_.CoverArt, {
						subsonic: this.props.subsonic,
						id: this.state.playing.coverArt,
						size: 80,
						events: this.props.events
					})), (0, o.h)("div", {
						className: "ui basic segment player"
					}, (0, o.h)("div", {
						className: "ui items"
					}, (0, o.h)("div", {
						className: "ui item"
					}, (0, o.h)("div", {
						className: "ui tiny image"
					}, e), (0, o.h)("div", {
						className: "content",id: "idtitle"
					}, (0, o.h)("div", {
						className: "header"
					}, (0, o.h)(h, {
						events: this.props.events,
						playing: this.state.playing
					})), (0, o.h)("div", {
						className: "meta"
					}, (0, o.h)(p, {
						events: this.props.events,
						playing: this.state.playing
					})), (0, o.h)("div", {
						className: "description"
					}, (0, o.h)("table", null, (0, o.h)("tbody", null, (0, o.h)("tr", null, (0, o.h)("td", {
						className: "controls"
					}, (0, o.h)("div", {
						className: "ui black icon buttons"
					}, (0, o.h)(v, {
						key: "prior",
						events: this.props.events
					}), (0, o.h)(L, {
						key: "play",
						events: this.props.events
					}), (0, o.h)(Y, {
						key: "stop",
						events: this.props.events
					}), (0, o.h)(k, {
						key: "next",
						events: this.props.events
					}), (0, o.h)(g, {
						key: "shuffle",
						events: this.props.events
					}), (0, o.h)(f, {
						key: "time",
						events: this.props.events
					}))), (0, o.h)("td", {
						className: "progress"
					}, (0, o.h)(y, {
						key: "progress",
						events: this.props.events
					})), (0, o.h)("td", {
						className: "volume"
					}, (0, o.h)(M, {
						key: "volume",
						events: this.props.events,
						volume: this.state.volume
					}))))))))))
				}
			}]), t
		}(o.Component);
	m.defaultProps = {
		trackBuffer: !1
	}, t.default = m;
	var h = function (e) {
			function t() {
				return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return i(t, e), r(t, [{
				key: "render",
				value: function () {
					return (0, o.h)("span", null, null == this.props.playing ? "Nothing playing" : this.props.playing.title)
				}
			}]), t
		}(o.Component),
		p = function (e) {
			function t() {
				return a(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return i(t, e), r(t, [{
				key: "render",
				value: function () {
					var e = "Nothing playing";
					return null != this.props.playing && (e = this.props.playing.artist + " - " + this.props.playing.album, this.props.playing.date && (e += " (" + this.props.playing.date + ")")), (0, o.h)("span", null, e)
				}
			}]), t
		}(o.Component),
		f = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					duration: 0,
					position: 0
				}, e.events.subscribe({
					subscriber: i,
					event: ["playerUpdated"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerUpdated":
							this.setState({
								duration: e.data.duration,
								position: e.data.position
							})
					}
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("div", {
						className: "ui disabled labeled icon button"
					}, (0, o.h)("i", {
						className: "clock icon"
					}), (0, l.SecondsToTime)(this.state.position / 1e3), "/", (0, l.SecondsToTime)(this.state.duration / 1e3))
				}
			}]), t
		}(o.Component),
		y = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					playerProgress: 0,
					loadingProgress: 0
				}, e.events.subscribe({
					subscriber: i,
					event: ["playerUpdated", "playerLoading", "playerStopped"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerUpdated":
							this.playerUpdate(e.data.track, e.data.duration, e.data.position);
							break;
						case "playerLoading":
							this.playerLoading(e.data.track, e.data.loaded, e.data.total);
							break;
						case "playerStopped":
							this.playerUpdate(e.data.track, 1, 0)
					}
				}
			}, {
				key: "playerUpdate",
				value: function (e, t, n) {
					var a = n / t * 100;
					this.setState({
						playerProgress: a
					})
				}
			}, {
				key: "playerLoading",
				value: function (e, t, n) {
					var a = t / n * 100;
					this.setState({
						loadingProgress: a
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = {
							width: this.state.playerProgress + "%"
						},
						t = {
							width: this.state.loadingProgress + "%"
						};
					return (0, o.h)("div", {
						className: "player-progress"
					}, (0, o.h)("div", {
						className: "ui red progress"
					}, (0, o.h)("i", {
						className: "clock icon"
					}), (0, o.h)("div", {
						className: "track bar",
						style: e
					}), (0, o.h)("div", {
						className: "loading bar",
						style: t
					})))
				}
			}]), t
		}(o.Component),
		M = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.mouseDown = i.mouseDown.bind(i), i.mouseUp = i.mouseUp.bind(i), i.mouseMove = i.mouseMove.bind(i), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "mouseDown",
				value: function (e) {
					this.drag = !0, this.mouseMove(e)
				}
			}, {
				key: "mouseUp",
				value: function (e) {
					this.drag = !1
				}
			}, {
				key: "mouseMove",
				value: function (e) {
					if (this.drag) {
						var t = document.querySelector(".player-volume").getBoundingClientRect(),
							n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width));
						this.props.events.publish({
							event: "playerVolume",
							data: n
						})
					}
				}
			}, {
				key: "render",
				value: function () {
					var e = {
						width: 100 * this.props.volume + "%"
					};
					return (0, o.h)("div", {
						className: "player-volume",
						onMouseDown: this.mouseDown,
						onMouseMove: this.mouseMove,
						onMouseUp: this.mouseUp
					}, (0, o.h)("div", {
						className: "ui blue progress"
					}, (0, o.h)("i", {
						className: "volume up icon"
					}), (0, o.h)("div", {
						className: "bar",
						style: e
					})))
				}
			}]), t
		}(o.Component),
		L = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					paused: !1,
					playing: !1,
					enabled: !1
				}, i.onClick = i.onClick.bind(i), e.events.subscribe({
					subscriber: i,
					event: ["playerStarted", "playerStopped", "playerFinished", "playerPaused", "playerEnqueued"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerStarted":
							this.playerStart(e.data);
							break;
						case "playerStopped":
						case "playerFinished":
							this.playerFinish(e.data);
							break;
						case "playerPaused":
							this.playerPause(e.data);
							break;
						case "playerEnqueued":
							this.playerEnqueue(e.data)
					}
				}
			}, {
				key: "playerStart",
				value: function (e) {
					this.setState({
						paused: !1,
						playing: !0,
						enabled: !0
					})
				}
			}, {
				key: "playerFinish",
				value: function (e) {
					this.setState({
						paused: !1,
						playing: !1
					})
				}
			}, {
				key: "playerPause",
				value: function (e) {
					this.setState({
						paused: !0
					})
				}
			}, {
				key: "playerEnqueue",
				value: function (e) {
					this.setState({
						enabled: e.length > 0
					})
				}
			}, {
				key: "onClick",
				value: function () {
					this.props.events.publish({
						event: "playerToggle"
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("button", {
						className: "ui icon button " + (this.state.enabled ? "" : "disabled"),
						onClick: this.onClick
					}, (0, o.h)("i", {
						className: this.state.paused || !this.state.playing ? "play icon" : "pause icon"
					}))
				}
			}]), t
		}(o.Component),
		Y = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					enabled: !1
				}, i.onClick = i.onClick.bind(i), e.events.subscribe({
					subscriber: i,
					event: ["playerStarted", "playerStopped", "playerFinished"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerStarted":
							this.playerStart(e.data);
							break;
						case "playerStopped":
						case "playerFinished":
							this.playerFinish(e.data)
					}
				}
			}, {
				key: "playerStart",
				value: function (e) {
					this.setState({
						enabled: !0
					})
				}
			}, {
				key: "playerFinish",
				value: function (e) {
					this.setState({
						enabled: !1
					})
				}
			}, {
				key: "onClick",
				value: function () {
					this.props.events.publish({
						event: "playerStop"
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("button", {
						className: "ui icon button " + (this.state.enabled ? "" : "disabled"),
						onClick: this.onClick
					}, (0, o.h)("i", {
						className: "stop icon"
					}))
				}
			}]), t
		}(o.Component),
		k = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					enabled: !1
				}, i.onClick = i.onClick.bind(i), e.events.subscribe({
					subscriber: i,
					event: ["playerEnqueued"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerEnqueued":
							this.setState({
								enabled: e.data.length > 0
							})
					}
				}
			}, {
				key: "onClick",
				value: function () {
					this.props.events.publish({
						event: "playerNext"
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("button", {
						className: "ui icon button " + (this.state.enabled ? "" : "disabled"),
						onClick: this.onClick
					}, (0, o.h)("i", {
						className: "fast forward icon"
					}))
				}
			}]), t
		}(o.Component),
		v = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					enabled: !1
				}, i.onClick = i.onClick.bind(i), e.events.subscribe({
					subscriber: i,
					event: ["playerEnqueued"]
				}), i
			}
			return i(t, e), r(t, [{
				key: "componentWillUnmount",
				value: function () {}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerEnqueued":
							this.setState({
								enabled: e.data.length > 0
							})
					}
				}
			}, {
				key: "onClick",
				value: function () {
					this.props.events.publish({
						event: "playerPrevious"
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("button", {
						className: "ui icon button " + (this.state.enabled ? "" : "disabled"),
						onClick: this.onClick
					}, (0, o.h)("i", {
						className: "fast backward icon"
					}))
				}
			}]), t
		}(o.Component),
		g = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					shuffle: !1
				}, i.onClick = i.onClick.bind(i), i
			}
			return i(t, e), r(t, [{
				key: "onClick",
				value: function () {
					var e = !this.state.shuffle;
					this.setState({
						shuffle: e
					}), this.props.events.publish({
						event: "playerShuffle",
						data: e
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, o.h)("button", {
						className: "ui icon button",
						onClick: this.onClick
					}, (0, o.h)("i", {
						className: "random icon " + (this.state.shuffle ? "red" : "")
					}))
				}
			}]), t
		}(o.Component)
}, function (e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function r(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		d = n(1),
		u = n(0),
		l = a(u),
		_ = n(3),
		c = n(5),
		m = a(c),
		h = n(2),
		p = n(4),
		f = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.state = {
					playlists: [],
					playlist: null
				}, a.loadPlaylists = a.loadPlaylists.bind(a), a.loadPlaylist = a.loadPlaylist.bind(a), a.createPlaylist = a.createPlaylist.bind(a), a.updatePlaylist = a.updatePlaylist.bind(a), a.receive = a.receive.bind(a), a.loadPlaylists(), e.events.subscribe({
					subscriber: a,
					event: ["playlistManage"]
				}), a
			}
			return r(t, e), o(t, [{
				key: "componentDidUpdate",
				value: function (e, t) {
					e.subsonic != this.props.subsonic && this.loadPlaylists()
				}
			}, {
				key: "receive",
				value: function (e) {
					"playlistManage" == e.event && ("ADD" == e.data.action ? this.lister.show(function (t, n) {
						if (t) {
							var a = e.data.tracks.map(function (e) {
								return e.id
							});
							isNaN(n) ? this.createPlaylist(n, a) : this.updatePlaylist(n, a, [])
						}
					}.bind(this)) : "CREATE" == e.data.action ? this.creator.show("", function (e, t) {
						e && this.createPlaylist(t, [])
					}.bind(this)) : "DELETE" == e.data.action ? this.deleter.show(function (t) {
						t && this.props.subsonic.deletePlaylist({
							id: e.data.id,
							success: function () {
								this.loadPlaylists(), p.Messages.message(this.props.events, "Playlist deleted", "warning", "trash")
							}.bind(this)
						})
					}.bind(this)) : "RENAME" == e.data.action ? this.renamer.show(e.data.name, function (t, n) {
						t && this.props.subsonic.updatePlaylist({
							id: e.data.id,
							name: n,
							success: function () {
								this.loadPlaylists(), p.Messages.message(this.props.events, "Playlist renamed", "success", "edit")
							}.bind(this)
						})
					}.bind(this)) : "REMOVE" == e.data.action && this.props.subsonic.getPlaylist({
						id: e.data.id,
						success: function (t) {
							var n = e.data.tracks.map(function (e) {
								for (var n = 0; n < t.playlist.entry.length; n++)
									if (e.id == t.playlist.entry[n].id) return n
							});
							this.updatePlaylist(e.data.id, [], n)
						}.bind(this),
						error: function (e) {
							console.error(this, e), p.Messages.message(this.props.events, "Unable to load playlist: " + e.message, "error", "warning sign")
						}.bind(this)
					}))
				}
			}, {
				key: "createPlaylist",
				value: function (e, t) {
					this.props.subsonic.createPlaylist({
						name: e,
						tracks: t,
						success: function () {
							p.Messages.message(this.props.events, "New playlist " + e + " created", "success", "checkmark"), this.loadPlaylists()
						}.bind(this),
						error: function (e) {
							console.error(this, e), p.Messages.message(this.props.events, "Failed to create playlist: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "updatePlaylist",
				value: function (e, t, n) {
					this.props.subsonic.updatePlaylist({
						id: e,
						add: t,
						remove: n,
						success: function () {
							p.Messages.message(this.props.events, "Playlist updated", "success", "checkmark"), e == this.state.playlist.id && this.loadPlaylist(e)
						}.bind(this),
						error: function (e) {
							console.error(this, e), p.Messages.message(this.props.events, "Failed to update playlist: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "loadPlaylists",
				value: function () {
					this.props.subsonic.getPlaylists({
						success: function (e) {
							this.setState({
								playlists: e.playlists
							}), null != this.state.playlist && this.loadPlaylist(this.state.playlist.id)
						}.bind(this),
						error: function (e) {
							console.error(this, e), p.Messages.message(this.props.events, "Unable to get playlists: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "loadPlaylist",
				value: function (e) {
					this.props.subsonic.getPlaylist({
						id: e,
						success: function (e) {
							this.setState({
								playlist: e.playlist
							})
						}.bind(this),
						error: function (e) {
							console.error(this, e), p.Messages.message(this.props.events, "Unable to load playlist: " + e.message, "error", "warning sign")
						}.bind(this)
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = this,
						t = [];
					return this.state.playlists && (t = this.state.playlists.map(function (e) {
						return (0, d.h)(M, {
							key: e.id,
							subsonic: this.props.subsonic,
							data: e,
							iconSize: this.props.iconSize,
							simple: !0
						})
					}.bind(this))), (0, d.h)("div", {
						className: "playlistManager"
					}, (0, d.h)(_.InputPrompt, {
						ref: function (t) {
							e.creator = t
						},
						title: "Create Playlist",
						message: "Enter a name for the new playlist"
					}), (0, d.h)(_.InputPrompt, {
						ref: function (t) {
							e.renamer = t
						},
						title: "Rename Playlist",
						message: "Enter a new name for this playlist"
					}), (0, d.h)(_.Prompt, {
						ref: function (t) {
							e.deleter = t
						},
						title: "Delete Playlist",
						message: "Are you sure you want to delete this playlist?",
						ok: "Yes",
						icon: "red trash"
					}), (0, d.h)(_.ListPrompt, {
						ref: function (t) {
							e.lister = t
						},
						title: "Add to playlist",
						message: "Choose a playlist to add tracks to",
						ok: "Add",
						icon: "teal list",
						defaultText: "Playlists...",
						allowNew: !0,
						items: t
					}), (0, d.h)(y, {
						subsonic: this.props.subsonic,
						events: this.props.events,
						iconSize: this.props.iconSize,
						playlists: this.state.playlists,
						selected: this.loadPlaylist
					}), (0, d.h)(L, {
						subsonic: this.props.subsonic,
						events: this.props.events,
						iconSize: this.props.iconSize,
						playlist: this.state.playlist,
						changed: this.loadPlaylists
					}))
				}
			}]), t
		}(d.Component);
	t.default = f;
	var y = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.defaultProps = {
					playlists: []
				}, a.value = null, a.create = a.create.bind(a), a
			}
			return r(t, e), o(t, [{
				key: "componentDidMount",
				value: function () {
					$(".playlistSelector .dropdown").dropdown({
						action: "activate",
						onChange: function (e, t, n) {
							this.value != e && (this.props.selected && this.props.selected(e), this.value = e)
						}.bind(this)
					})
				}
			}, {
				key: "componentDidUpdate",
				value: function (e, t) {
					this.value && $(".playlistSelector .dropdown").dropdown("set selected", this.value)
				}
			}, {
				key: "create",
				value: function () {
					this.props.events.publish({
						event: "playlistManage",
						data: {
							action: "CREATE"
						}
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = [];
					return this.props.playlists && (e = this.props.playlists.map(function (e) {
						return (0, d.h)(M, {
							key: e.id,
							subsonic: this.props.subsonic,
							data: e,
							iconSize: this.props.iconSize
						})
					}.bind(this))), (0, d.h)("div", {
						className: "ui basic segment playlistSelector"
					}, (0, d.h)("div", {
						className: "ui grid"
					}, (0, d.h)("div", {
						className: "thirteen wide column"
					}, (0, d.h)("div", {
						className: "ui fluid selection dropdown"
					}, (0, d.h)("i", {
						className: "dropdown icon"
					}), (0, d.h)("div", {
						className: "default text"
					}, "Playlists..."), (0, d.h)("div", {
						className: "menu"
					}, e))), (0, d.h)("div", {
						className: "three wide column"
					}, (0, d.h)("button", {
						className: "ui fluid labelled icon teal button",
						onClick: this.create
					}, (0, d.h)("i", {
						className: "plus icon"
					}), " New Playlist"))))
				}
			}]), t
		}(d.Component),
		M = function (e) {
			function t() {
				return s(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return r(t, e), o(t, [{
				key: "render",
				value: function () {
					var e = this.props.simple ? null : (0, d.h)("span", {
						className: "description"
					}, this.props.data.songCount, " tracks, ", (0, h.SecondsToTime)(this.props.data.duration));
					return (0, d.h)("div", {
						className: "item",
						"data-value": this.props.data.id
					}, (0, d.h)(_.CoverArt, {
						subsonic: this.props.subsonic,
						id: this.props.data.coverArt,
						size: this.props.iconSize
					}), e, (0, d.h)("span", {
						className: "text"
					}, this.props.data.name))
				}
			}]), t
		}(d.Component),
		L = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.defaultProps = {
					playlist: null
				}, a
			}
			return r(t, e), o(t, [{
				key: "render",
				value: function () {
					return this.props.playlist ? (0, d.h)("div", {
						className: "ui basic segment playlistView"
					}, (0, d.h)(Y, {
						events: this.props.events,
						subsonic: this.props.subsonic,
						playlist: this.props.playlist,
						changed: this.props.changed
					}), (0, d.h)(m.default, {
						subsonic: this.props.subsonic,
						tracks: this.props.playlist.entry,
						events: this.props.events,
						playlist: this.props.playlist.id,
						iconSize: this.props.iconSize
					})) : (0, d.h)("div", {
						className: "playlistView"
					}, (0, d.h)(_.IconMessage, {
						icon: "info circle",
						header: "Nothing Selected!",
						message: "Select a playlist."
					}))
				}
			}]), t
		}(d.Component),
		Y = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.play = a.play.bind(a), a.enqueue = a.enqueue.bind(a), a.delete = a.delete.bind(a), a.rename = a.rename.bind(a), a
			}
			return r(t, e), o(t, [{
				key: "play",
				value: function () {
					this.props.events.publish({
						event: "playerEnqueue",
						data: {
							action: "REPLACE",
							tracks: this.props.playlist.entry
						}
					}), this.props.events.publish({
						event: "playerPlay",
						data: this.props.playlist.entry[0]
					})
				}
			}, {
				key: "enqueue",
				value: function () {
					this.props.events.publish({
						event: "playerEnqueue",
						data: {
							action: "ADD",
							tracks: this.props.playlist.entry
						}
					})
				}
			}, {
				key: "delete",
				value: function () {
					this.props.events.publish({
						event: "playlistManage",
						data: {
							action: "DELETE",
							id: this.props.playlist.id
						}
					})
				}
			}, {
				key: "rename",
				value: function () {
					this.props.events.publish({
						event: "playlistManage",
						data: {
							action: "RENAME",
							id: this.props.playlist.id,
							name: this.props.playlist.name
						}
					})
				}
			}, {
				key: "render",
				value: function () {
					return (0, d.h)("div", {
						className: "ui items"
					}, (0, d.h)("div", {
						className: "item"
					}, (0, d.h)("div", {
						className: "ui small image"
					}, (0, d.h)(_.CoverArt, {
						subsonic: this.props.subsonic,
						id: this.props.playlist.coverArt,
						size: 200,
						events: this.props.events
					})), (0, d.h)("div", {
						className: "aligned content"
					}, (0, d.h)("div", {
						className: "header"
					}, (0, d.h)("div", null, this.props.playlist.name)), (0, d.h)("div", {
						className: "meta"
					}, (0, d.h)("div", null, "Added: ", (0, l.default)(this.props.playlist.created).format("ll")), (0, d.h)("div", null, "Updated: ", (0, l.default)(this.props.playlist.changed).format("ll")), (0, d.h)("div", null, this.props.playlist.songCount, " tracks, ", (0, h.SecondsToTime)(this.props.playlist.duration))), (0, d.h)("div", {
						className: "extra"
					}, (0, d.h)("button", {
						className: "ui small compact labelled icon green button",
						onClick: this.play
					}, (0, d.h)("i", {
						className: "play icon"
					}), " Play"), (0, d.h)("button", {
						className: "ui small compact labelled icon olive button",
						onClick: this.enqueue
					}, (0, d.h)("i", {
						className: "plus icon"
					}), " Add to Queue"), (0, d.h)("button", {
						className: "ui small compact labelled icon grey button",
						onClick: this.rename
					}, (0, d.h)("i", {
						className: "edit icon"
					}), " Rename"), (0, d.h)("button", {
						className: "ui small compact labelled icon red button",
						onClick: this.delete
					}, (0, d.h)("i", {
						className: "trash icon"
					}), " Delete")))))
				}
			}]), t
		}(d.Component)
}, function (e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function r(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		d = n(1),
		u = n(0),
		l = (a(u), n(3)),
		_ = n(5),
		c = a(_),
		m = n(2),
		h = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.state = {
					queue: null
				}, e.events.subscribe({
					subscriber: a,
					event: ["playerEnqueued"]
				}), a.clear = a.clear.bind(a), a.playlist = a.playlist.bind(a), a
			}
			return r(t, e), o(t, [{
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerEnqueued":
							this.setState({
								queue: e.data
							})
					}
				}
			}, {
				key: "clear",
				value: function () {
					this.props.events.publish({
						event: "playerEnqueue",
						data: {
							action: "ADD",
							tracks: this.state.queue
						}
					})
				}
			}, {
				key: "playlist",
				value: function () {
					this.props.events.publish({
						event: "playlistManage",
						data: {
							action: "ADD",
							tracks: this.state.queue
						}
					})
				}
			}, {
				key: "render",
				value: function () {
					if (null == this.state.queue) return (0, d.h)(l.IconMessage, {
						icon: "info circle",
						header: "Nothing in the queue!",
						message: "Add some tracks to the queue by browsing, or selecting a playlist."
					});
					var e = this.state.queue.reduce(function (e, t) {
						return e + t.duration
					}, 0);
					return (0, d.h)("div", {
						className: "ui basic segment queueView"
					}, (0, d.h)("div", {
						className: "ui items"
					}, (0, d.h)("div", {
						className: "item"
					}, (0, d.h)("div", {
						className: "aligned content"
					}, (0, d.h)("p", {
						className: "header"
					}, (0, d.h)("i", {
						className: "grey play icon"
					}), this.state.queue.length, " tracks, ", (0, m.SecondsToTime)(e)), (0, d.h)("div", {
						className: "extra"
					}, (0, d.h)("button", {
						className: "ui small compact labelled icon teal button",
						onClick: this.playlist
					}, (0, d.h)("i", {
						className: "list icon"
					}), " Add to Playlist"), (0, d.h)("button", {
						className: "ui small compact labelled icon red button",
						onClick: this.clear
					}, (0, d.h)("i", {
						className: "trash icon"
					}), " Clear Queue"))))), (0, d.h)(c.default, {
						subsonic: this.props.subsonic,
						events: this.props.events,
						tracks: this.state.queue,
						iconSize: this.props.iconSize
					}))
				}
			}]), t
		}(d.Component);
	t.default = h
}, function (e, t, n) {
	"use strict";

	function a(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function s(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function r(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		d = n(1),
		u = n(0),
		l = a(u),
		_ = n(3),
		c = n(5),
		m = a(c),
		h = n(2),
		p = function (e) {
			function t(e, n) {
				s(this, t);
				var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return a.state = {
					album: null
				}, e.events.subscribe({
					subscriber: a,
					event: ["browserSelected"]
				}), a
			}
			return r(t, e), o(t, [{
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "browserSelected":
							this.setState({
								album: e.data.tracks
							})
					}
				}
			}, {
				key: "render",
				value: function () {
					return null == this.state.album ? (0, d.h)(_.IconMessage, {
						icon: "info circle",
						header: "Nothing Selected!",
						message: "Select an album from the browser."
					}) : (0, d.h)("div", {
						className: "ui basic segment selectionView"
					}, (0, d.h)(f, {
						subsonic: this.props.subsonic,
						events: this.props.events,
						album: this.state.album
					}), (0, d.h)(m.default, {
						subsonic: this.props.subsonic,
						events: this.props.events,
						tracks: this.state.album.song,
						iconSize: this.props.iconSize
					}))
				}
			}]), t
		}(d.Component);
	t.default = p;
	var f = function (e) {
		function t(e, n) {
			s(this, t);
			var a = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
			return a.play = a.play.bind(a), a.enqueue = a.enqueue.bind(a), a.playlist = a.playlist.bind(a), a
		}
		return r(t, e), o(t, [{
			key: "play",
			value: function () {
				this.props.events.publish({
					event: "playerEnqueue",
					data: {
						action: "REPLACE",
						tracks: this.props.album.song
					}
				}), this.props.events.publish({
					event: "playerPlay",
					data: this.props.album.song[0]
				})
			}
		}, {
			key: "enqueue",
			value: function () {
				this.props.events.publish({
					event: "playerEnqueue",
					data: {
						action: "ADD",
						tracks: this.props.album.song
					}
				})
			}
		}, {
			key: "playlist",
			value: function () {
				this.props.events.publish({
					event: "playlistManage",
					data: {
						action: "ADD",
						tracks: this.props.album.song
					}
				})
			}
		}, {
			key: "render",
			value: function () {
				return (0, d.h)("div", {
					className: "ui items"
				}, (0, d.h)("div", {
					className: "item"
				}, (0, d.h)("div", {
					className: "ui small image"
				}, (0, d.h)(_.CoverArt, {
					subsonic: this.props.subsonic,
					id: this.props.album.coverArt,
					events: this.props.events,
					size: 200
				})), (0, d.h)("div", {
					className: "aligned content"
				}, (0, d.h)("div", {
					className: "header"
				}, (0, d.h)("div", {
					className: "artist"
				}, this.props.album.artist), (0, d.h)("div", null, this.props.album.name)), (0, d.h)("div", {
					className: "meta"
				}, (0, d.h)("div", null, "(255)" != this.props.album.genre ? this.props.album.genre : ""), (0, d.h)("div", null, this.props.album.year ? "Year: " + this.props.album.year : ""), (0, d.h)("div", null, "Added: ", (0, l.default)(this.props.album.created).format("ll")), (0, d.h)("div", null, this.props.album.songCount, " tracks, ", (0, h.SecondsToTime)(this.props.album.duration))), (0, d.h)("div", {
					className: "extra"
				}, (0, d.h)("button", {
					className: "ui small compact labelled icon green button",
					onClick: this.play
				}, (0, d.h)("i", {
					className: "play icon"
				}), " Play"), (0, d.h)("button", {
					className: "ui small compact labelled icon olive button",
					onClick: this.enqueue
				}, (0, d.h)("i", {
					className: "plus icon"
				}), " Add to Queue"), (0, d.h)("button", {
					className: "ui small compact labelled icon teal button",
					onClick: this.playlist
				}, (0, d.h)("i", {
					className: "list icon"
				}), " Add to Playlist")))))
			}
		}]), t
	}(d.Component)
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function s(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function i(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		o = n(1),
		d = n(6),
		u = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(d),
		l = n(2),
		_ = n(4),
		c = n(3),
		m = 0,
		h = function (e) {
			function t(e, n) {
				a(this, t);
				var i = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
				return i.state = {
					url: i.props.subsonic.url,
					user: i.props.subsonic.user,
					password: "",
					notifications: "true" === localStorage.getItem("notifications"),
					backgroundArt: "true" === localStorage.getItem("backgroundArt"),
					persistQueue: "true" === localStorage.getItem("persistQueue"),
					trackBuffer: localStorage.getItem("trackBuffer") || "0",
					testState: m
				}, i.save = i.save.bind(i), i.change = i.change.bind(i), i.demo = i.demo.bind(i), i.test = i.test.bind(i), i
			}
			return i(t, e), r(t, [{
				key: "save",
				value: function (e) {
					if (e.preventDefault(), localStorage.setItem("url", this.state.url), localStorage.setItem("username", this.state.user), "" != this.state.password) {
						var t = (0, l.UniqueID)();
						localStorage.setItem("token", u.default.createToken(this.state.password, t)), localStorage.setItem("salt", t)
					}
					localStorage.setItem("notifications", this.state.notifications), localStorage.setItem("backgroundArt", this.state.backgroundArt), localStorage.setItem("persistQueue", this.state.persistQueue), localStorage.setItem("trackBuffer", this.state.trackBuffer), _.Messages.message(this.props.events, "Settings saved.", "success", "Save");
					var n = new u.default(localStorage.getItem("url"), localStorage.getItem("username"), localStorage.getItem("token"), localStorage.getItem("salt"), this.props.subsonic.version, this.props.subsonic.appName);
					this.props.events.publish({
						event: "appSettings",
						data: {
							subsonic: n,
							trackBuffer: localStorage.getItem("trackBuffer")
						}
					})
				}
			}, {
				key: "demo",
				value: function (e) {
					e.preventDefault(), this.demoPrompt.show(function (e) {
						e && this.setState({
							url: "http://demo.subsonic.org",
							user: "guest5",
							password: "guest"
						})
					}.bind(this))
				}
			}, {
				key: "test",
				value: function (e) {
					e.preventDefault();
					var t = (0, l.UniqueID)(),
						n = new u.default(this.state.url, this.state.user, u.default.createToken(this.state.password, t), t, this.props.subsonic.version, this.props.subsonic.appName);
					this.setState({
						testState: 1
					}), n.ping({
						success: function (e) {
							"ok" == e.status ? (this.setState({
								testState: 2
							}), _.Messages.message(this.props.events, "Connection test successful!", "success", "plug")) : (console.log(e.error), this.setState({
								testState: 3
							}), _.Messages.message(this.props.events, e.error.message, "error", "plug"))
						}.bind(this),
						error: function (e) {
							this.setState({
								testState: 3
							}), _.Messages.message(this.props.events, "Failed to connect to server: " + e.message, "error", "plug")
						}.bind(this)
					})
				}
			}, {
				key: "change",
				value: function (e) {
					switch (e.target.name) {
						case "url":
							this.setState({
								url: e.target.value
							});
							break;
						case "user":
							this.setState({
								user: e.target.value
							});
							break;
						case "password":
							this.setState({
								password: e.target.value
							});
							break;
						case "notifications":
							this.setState({
								notifications: e.target.checked
							});
							break;
						case "backgroundArt":
							this.setState({
								backgroundArt: e.target.checked
							});
							break;
						case "persistQueue":
							this.setState({
								persistQueue: e.target.checked
							});
							break;
						case "trackBuffer":
							this.setState({
								trackBuffer: e.target.value
							})
					}
					this.setState({
						testState: m
					})
				}
			}, {
				key: "render",
				value: function () {
					var e = this,
						t = "circle thin";
					switch (this.state.testState) {
						case 1:
							t = "loading spinner";
							break;
						case 2:
							t = "green checkmark";
							break;
						case 3:
							t = "red warning sign";
							break;
						default:
							t = "circle thin"
					}
					return (0, o.h)("div", {
						className: "ui basic segment"
					}, (0, o.h)("form", {
						className: "ui form",
						onSubmit: this.save
					}, (0, o.h)("h3", {
						className: "ui dividing header"
					}, "Subsonic Connection"), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("label", null, "Subsonic URL"), (0, o.h)("input", {
						name: "url",
						placeholder: "http://yourname.subsonic.com",
						type: "text",
						onChange: this.change,
						value: this.state.url
					})), (0, o.h)("div", {
						className: "two fields"
					}, (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("label", null, "Username"), (0, o.h)("input", {
						name: "user",
						placeholder: "username",
						type: "text",
						onChange: this.change,
						value: this.state.user
					})), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("label", null, "Password (", (0, o.h)("i", null, "leave blank to keep unchanged"), ")"), (0, o.h)("input", {
						name: "password",
						placeholder: "password",
						type: "password",
						onChange: this.change,
						value: this.state.password
					}))), (0, o.h)("h3", {
						className: "ui dividing header"
					}, "Preferences"), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("label", null, "Buffer next track (begin buffering this long before end of the current track)"), (0, o.h)("select", {
						name: "trackBuffer",
						onChange: this.change,
						value: this.state.trackBuffer
					}, (0, o.h)("option", {
						value: "0"
					}, "Disabled"), (0, o.h)("option", {
						value: "10"
					}, "10 seconds"), (0, o.h)("option", {
						value: "30"
					}, "30 seconds"))), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("div", {
						className: "ui checkbox"
					}, (0, o.h)("input", {
						name: "notifications",
						type: "checkbox",
						onChange: this.change,
						checked: this.state.notifications
					}), (0, o.h)("label", null, "Enable desktop notifications"))), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("div", {
						className: "ui checkbox"
					}, (0, o.h)("input", {
						name: "backgroundArt",
						type: "checkbox",
						onChange: this.change,
						checked: this.state.backgroundArt
					}), (0, o.h)("label", null, "Enable background art"))), (0, o.h)("div", {
						className: "field"
					}, (0, o.h)("div", {
						className: "ui checkbox"
					}, (0, o.h)("input", {
						name: "persistQueue",
						type: "checkbox",
						onChange: this.change,
						checked: this.state.persistQueue
					}), (0, o.h)("label", null, "Save queue (your queue will be restored after browser restarts, page reloads, etc)"))), (0, o.h)("div", {
						className: "ui section divider"
					}), (0, o.h)("button", {
						className: "ui blue button",
						type: "submit"
					}, "Save"), (0, o.h)("button", {
						className: "ui button",
						onClick: this.demo
					}, "Demo Server"), (0, o.h)("button", {
						className: "ui icon button",
						onClick: this.test
					}, (0, o.h)("i", {
						className: t + " icon"
					}), "Test Connection")), (0, o.h)(c.Prompt, {
						ref: function (t) {
							e.demoPrompt = t
						},
						title: "Use Demo Server",
						message: "Reconfigure to use the Subsonic demo server? Please see http://www.subsonic.org/pages/demo.jsp for more information.",
						ok: "Yes",
						cancel: "No",
						icon: "red question"
					}))
				}
			}]), t
		}(o.Component);
	t.default = h
}, function (e, t, n) {
	"use strict";

	function a(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var s = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
				}
			}
			return function (t, n, a) {
				return n && e(t.prototype, n), a && e(t, a), t
			}
		}(),
		i = n(4),
		r = function () {
			function e(t, n, s) {
				a(this, e), this.scrobbler = new o(t, s), "true" === localStorage.getItem("notifications") && (this.notifier = new u(t, s)), "true" === localStorage.getItem("backgroundArt") && (this.albumBackgroundChanger = new d(t, s))
			}
			return s(e, [{
				key: "terminate",
				value: function () {
					this.scrobler && this.scrobler.terminate(), this.notifier && this.notifier.terminate(), this.albumBackgroundChanger && this.albumBackgroundChanger.terminate()
				}
			}]), e
		}();
	t.default = r;
	var o = function () {
			function e(t, n) {
				a(this, e), this.subsonic = t, this.events = n, this.submitted = null, this.events.subscribe({
					subscriber: this,
					event: ["playerUpdated"]
				})
			}
			return s(e, [{
				key: "terminate",
				value: function () {
					this.events.unsubscribe({
						subscriber: this,
						event: ["playerUpdated"]
					})
				}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerUpdated":
							this.update(e.data.track, e.data.duration, e.data.position)
					}
				}
			}, {
				key: "update",
				value: function (e, t, n) {
					if (this.submitted != e.id) {
						n / t * 100 > 50 && (this.submitted = e.id, this.subsonic.scrobble({
							id: e.id,
							success: function () {
								console.log("Scrobbled track " + e.title)
							},
							error: function (t) {
								this.submitted = null, console.error("Scrobble failed for track " + e.title, t), i.Messages.message(this.events, "Scrobble failed for track " + e.title, "warning", "warning")
							}.bind(this)
						}))
					}
				}
			}]), e
		}(),
		d = function () {
			function e(t, n) {
				a(this, e), this.subsonic = t, this.events = n, this.currentArt = 0, n.subscribe({
					subscriber: this,
					event: ["playerStarted"]
				})
			}
			return s(e, [{
				key: "terminate",
				value: function () {
					this.events.unsubscribe({
						subscriber: this,
						event: ["playerStarted"]
					})
				}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerStarted":
							this.currentArt != e.data.coverArt && (this.currentArt = e.data.coverArt, $(".background-layer").css("background-image", "url(" + this.subsonic.getUrl("getCoverArt", {
								id: e.data.coverArt
							}) + ")"))
					}
				}
			}]), e
		}(),
		u = function () {
			function e(t, n) {
        if (typeof Notification === 'undefined')  { return; }
				a(this, e), this.ICON_SIZE = 64, this.subsonic = t, this.events = n, Notification.requestPermission(function (e) {
					"granted" === e && n.subscribe({
						subscriber: this,
						event: ["playerStarted"]
					})
				}.bind(this))
			}
			return s(e, [{
				key: "terminate",
				value: function () {
					this.events.unsubscribe({
						subscriber: this,
						event: ["playerStarted"]
					})
				}
			}, {
				key: "receive",
				value: function (e) {
					switch (e.event) {
						case "playerStarted":
							var t = document.createElement("canvas");
							t.width = this.ICON_SIZE, t.height = this.ICON_SIZE;
							var n = t.getContext("2d"),
								a = document.createElement("img");
							a.onload = function () {
								n.drawImage(a, 0, 0);
								new Notification(e.data.title, {
									body: e.data.artist + "\n\n" + e.data.album,
									icon: t.toDataURL("image/png"),
									silent: !0
								})
							}, a.crossOrigin = "anonymous", a.src = this.subsonic.getUrl("getCoverArt", {
								id: e.data.coverArt,
								size: this.ICON_SIZE
							})
					}
				}
			}]), e
		}()
}, function (e, t, n) {
	var a;
	! function (s) {
		"use strict";

		function i(e, t) {
			var n = (65535 & e) + (65535 & t);
			return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
		}

		function r(e, t) {
			return e << t | e >>> 32 - t
		}

		function o(e, t, n, a, s, o) {
			return i(r(i(i(t, e), i(a, o)), s), n)
		}

		function d(e, t, n, a, s, i, r) {
			return o(t & n | ~t & a, e, t, s, i, r)
		}

		function u(e, t, n, a, s, i, r) {
			return o(t & a | n & ~a, e, t, s, i, r)
		}

		function l(e, t, n, a, s, i, r) {
			return o(t ^ n ^ a, e, t, s, i, r)
		}

		function _(e, t, n, a, s, i, r) {
			return o(n ^ (t | ~a), e, t, s, i, r)
		}

		function c(e, t) {
			e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
			var n, a, s, r, o, c = 1732584193,
				m = -271733879,
				h = -1732584194,
				p = 271733878;
			for (n = 0; n < e.length; n += 16) a = c, s = m, r = h, o = p, c = d(c, m, h, p, e[n], 7, -680876936), p = d(p, c, m, h, e[n + 1], 12, -389564586), h = d(h, p, c, m, e[n + 2], 17, 606105819), m = d(m, h, p, c, e[n + 3], 22, -1044525330), c = d(c, m, h, p, e[n + 4], 7, -176418897), p = d(p, c, m, h, e[n + 5], 12, 1200080426), h = d(h, p, c, m, e[n + 6], 17, -1473231341), m = d(m, h, p, c, e[n + 7], 22, -45705983), c = d(c, m, h, p, e[n + 8], 7, 1770035416), p = d(p, c, m, h, e[n + 9], 12, -1958414417), h = d(h, p, c, m, e[n + 10], 17, -42063), m = d(m, h, p, c, e[n + 11], 22, -1990404162), c = d(c, m, h, p, e[n + 12], 7, 1804603682), p = d(p, c, m, h, e[n + 13], 12, -40341101), h = d(h, p, c, m, e[n + 14], 17, -1502002290), m = d(m, h, p, c, e[n + 15], 22, 1236535329), c = u(c, m, h, p, e[n + 1], 5, -165796510), p = u(p, c, m, h, e[n + 6], 9, -1069501632), h = u(h, p, c, m, e[n + 11], 14, 643717713), m = u(m, h, p, c, e[n], 20, -373897302), c = u(c, m, h, p, e[n + 5], 5, -701558691), p = u(p, c, m, h, e[n + 10], 9, 38016083), h = u(h, p, c, m, e[n + 15], 14, -660478335), m = u(m, h, p, c, e[n + 4], 20, -405537848), c = u(c, m, h, p, e[n + 9], 5, 568446438), p = u(p, c, m, h, e[n + 14], 9, -1019803690), h = u(h, p, c, m, e[n + 3], 14, -187363961), m = u(m, h, p, c, e[n + 8], 20, 1163531501), c = u(c, m, h, p, e[n + 13], 5, -1444681467), p = u(p, c, m, h, e[n + 2], 9, -51403784), h = u(h, p, c, m, e[n + 7], 14, 1735328473), m = u(m, h, p, c, e[n + 12], 20, -1926607734), c = l(c, m, h, p, e[n + 5], 4, -378558), p = l(p, c, m, h, e[n + 8], 11, -2022574463), h = l(h, p, c, m, e[n + 11], 16, 1839030562), m = l(m, h, p, c, e[n + 14], 23, -35309556), c = l(c, m, h, p, e[n + 1], 4, -1530992060), p = l(p, c, m, h, e[n + 4], 11, 1272893353), h = l(h, p, c, m, e[n + 7], 16, -155497632), m = l(m, h, p, c, e[n + 10], 23, -1094730640), c = l(c, m, h, p, e[n + 13], 4, 681279174), p = l(p, c, m, h, e[n], 11, -358537222), h = l(h, p, c, m, e[n + 3], 16, -722521979), m = l(m, h, p, c, e[n + 6], 23, 76029189), c = l(c, m, h, p, e[n + 9], 4, -640364487), p = l(p, c, m, h, e[n + 12], 11, -421815835), h = l(h, p, c, m, e[n + 15], 16, 530742520), m = l(m, h, p, c, e[n + 2], 23, -995338651), c = _(c, m, h, p, e[n], 6, -198630844), p = _(p, c, m, h, e[n + 7], 10, 1126891415), h = _(h, p, c, m, e[n + 14], 15, -1416354905), m = _(m, h, p, c, e[n + 5], 21, -57434055), c = _(c, m, h, p, e[n + 12], 6, 1700485571), p = _(p, c, m, h, e[n + 3], 10, -1894986606), h = _(h, p, c, m, e[n + 10], 15, -1051523), m = _(m, h, p, c, e[n + 1], 21, -2054922799), c = _(c, m, h, p, e[n + 8], 6, 1873313359), p = _(p, c, m, h, e[n + 15], 10, -30611744), h = _(h, p, c, m, e[n + 6], 15, -1560198380), m = _(m, h, p, c, e[n + 13], 21, 1309151649), c = _(c, m, h, p, e[n + 4], 6, -145523070), p = _(p, c, m, h, e[n + 11], 10, -1120210379), h = _(h, p, c, m, e[n + 2], 15, 718787259), m = _(m, h, p, c, e[n + 9], 21, -343485551), c = i(c, a), m = i(m, s), h = i(h, r), p = i(p, o);
			return [c, m, h, p]
		}

		function m(e) {
			var t, n = "",
				a = 32 * e.length;
			for (t = 0; t < a; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
			return n
		}

		function h(e) {
			var t, n = [];
			for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
			var a = 8 * e.length;
			for (t = 0; t < a; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
			return n
		}

		function p(e) {
			return m(c(h(e), 8 * e.length))
		}

		function f(e, t) {
			var n, a, s = h(e),
				i = [],
				r = [];
			for (i[15] = r[15] = void 0, s.length > 16 && (s = c(s, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ s[n], r[n] = 1549556828 ^ s[n];
			return a = c(i.concat(h(t)), 512 + 8 * t.length), m(c(r.concat(a), 640))
		}

		function y(e) {
			var t, n, a = "0123456789abcdef",
				s = "";
			for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), s += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
			return s
		}

		function M(e) {
			return unescape(encodeURIComponent(e))
		}

		function L(e) {
			return p(M(e))
		}

		function Y(e) {
			return y(L(e))
		}

		function k(e, t) {
			return f(M(e), M(t))
		}

		function v(e, t) {
			return y(k(e, t))
		}

		function g(e, t, n) {
			return t ? n ? k(t, e) : v(t, e) : n ? L(e) : Y(e)
		}
		void 0 !== (a = function () {
			return g
		}.call(t, n, t, e)) && (e.exports = a)
	}()
}, function (e, t, n) {
	function a(e) {
		return n(s(e))
	}

	function s(e) {
		var t = i[e];
		if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
		return t
	}
	var i = {
		"./af": 7,
		"./af.js": 7,
		"./ar": 13,
		"./ar-dz": 8,
		"./ar-dz.js": 8,
		"./ar-ly": 9,
		"./ar-ly.js": 9,
		"./ar-ma": 10,
		"./ar-ma.js": 10,
		"./ar-sa": 11,
		"./ar-sa.js": 11,
		"./ar-tn": 12,
		"./ar-tn.js": 12,
		"./ar.js": 13,
		"./az": 14,
		"./az.js": 14,
		"./be": 15,
		"./be.js": 15,
		"./bg": 16,
		"./bg.js": 16,
		"./bn": 17,
		"./bn.js": 17,
		"./bo": 18,
		"./bo.js": 18,
		"./br": 19,
		"./br.js": 19,
		"./bs": 20,
		"./bs.js": 20,
		"./ca": 21,
		"./ca.js": 21,
		"./cs": 22,
		"./cs.js": 22,
		"./cv": 23,
		"./cv.js": 23,
		"./cy": 24,
		"./cy.js": 24,
		"./da": 25,
		"./da.js": 25,
		"./de": 27,
		"./de-at": 26,
		"./de-at.js": 26,
		"./de.js": 27,
		"./dv": 28,
		"./dv.js": 28,
		"./el": 29,
		"./el.js": 29,
		"./en-au": 30,
		"./en-au.js": 30,
		"./en-ca": 31,
		"./en-ca.js": 31,
		"./en-gb": 32,
		"./en-gb.js": 32,
		"./en-ie": 33,
		"./en-ie.js": 33,
		"./en-nz": 34,
		"./en-nz.js": 34,
		"./eo": 35,
		"./eo.js": 35,
		"./es": 37,
		"./es-do": 36,
		"./es-do.js": 36,
		"./es.js": 37,
		"./et": 38,
		"./et.js": 38,
		"./eu": 39,
		"./eu.js": 39,
		"./fa": 40,
		"./fa.js": 40,
		"./fi": 41,
		"./fi.js": 41,
		"./fo": 42,
		"./fo.js": 42,
		"./fr": 45,
		"./fr-ca": 43,
		"./fr-ca.js": 43,
		"./fr-ch": 44,
		"./fr-ch.js": 44,
		"./fr.js": 45,
		"./fy": 46,
		"./fy.js": 46,
		"./gd": 47,
		"./gd.js": 47,
		"./gl": 48,
		"./gl.js": 48,
		"./he": 49,
		"./he.js": 49,
		"./hi": 50,
		"./hi.js": 50,
		"./hr": 51,
		"./hr.js": 51,
		"./hu": 52,
		"./hu.js": 52,
		"./hy-am": 53,
		"./hy-am.js": 53,
		"./id": 54,
		"./id.js": 54,
		"./is": 55,
		"./is.js": 55,
		"./it": 56,
		"./it.js": 56,
		"./ja": 57,
		"./ja.js": 57,
		"./jv": 58,
		"./jv.js": 58,
		"./ka": 59,
		"./ka.js": 59,
		"./kk": 60,
		"./kk.js": 60,
		"./km": 61,
		"./km.js": 61,
		"./ko": 62,
		"./ko.js": 62,
		"./ky": 63,
		"./ky.js": 63,
		"./lb": 64,
		"./lb.js": 64,
		"./lo": 65,
		"./lo.js": 65,
		"./lt": 66,
		"./lt.js": 66,
		"./lv": 67,
		"./lv.js": 67,
		"./me": 68,
		"./me.js": 68,
		"./mi": 69,
		"./mi.js": 69,
		"./mk": 70,
		"./mk.js": 70,
		"./ml": 71,
		"./ml.js": 71,
		"./mr": 72,
		"./mr.js": 72,
		"./ms": 74,
		"./ms-my": 73,
		"./ms-my.js": 73,
		"./ms.js": 74,
		"./my": 75,
		"./my.js": 75,
		"./nb": 76,
		"./nb.js": 76,
		"./ne": 77,
		"./ne.js": 77,
		"./nl": 79,
		"./nl-be": 78,
		"./nl-be.js": 78,
		"./nl.js": 79,
		"./nn": 80,
		"./nn.js": 80,
		"./pa-in": 81,
		"./pa-in.js": 81,
		"./pl": 82,
		"./pl.js": 82,
		"./pt": 84,
		"./pt-br": 83,
		"./pt-br.js": 83,
		"./pt.js": 84,
		"./ro": 85,
		"./ro.js": 85,
		"./ru": 86,
		"./ru.js": 86,
		"./se": 87,
		"./se.js": 87,
		"./si": 88,
		"./si.js": 88,
		"./sk": 89,
		"./sk.js": 89,
		"./sl": 90,
		"./sl.js": 90,
		"./sq": 91,
		"./sq.js": 91,
		"./sr": 93,
		"./sr-cyrl": 92,
		"./sr-cyrl.js": 92,
		"./sr.js": 93,
		"./ss": 94,
		"./ss.js": 94,
		"./sv": 95,
		"./sv.js": 95,
		"./sw": 96,
		"./sw.js": 96,
		"./ta": 97,
		"./ta.js": 97,
		"./te": 98,
		"./te.js": 98,
		"./tet": 99,
		"./tet.js": 99,
		"./th": 100,
		"./th.js": 100,
		"./tl-ph": 101,
		"./tl-ph.js": 101,
		"./tlh": 102,
		"./tlh.js": 102,
		"./tr": 103,
		"./tr.js": 103,
		"./tzl": 104,
		"./tzl.js": 104,
		"./tzm": 106,
		"./tzm-latn": 105,
		"./tzm-latn.js": 105,
		"./tzm.js": 106,
		"./uk": 107,
		"./uk.js": 107,
		"./uz": 108,
		"./uz.js": 108,
		"./vi": 109,
		"./vi.js": 109,
		"./x-pseudo": 110,
		"./x-pseudo.js": 110,
		"./yo": 111,
		"./yo.js": 111,
		"./zh-cn": 112,
		"./zh-cn.js": 112,
		"./zh-hk": 113,
		"./zh-hk.js": 113,
		"./zh-tw": 114,
		"./zh-tw.js": 114
	};
	a.keys = function () {
		return Object.keys(i)
	}, a.resolve = s, e.exports = a, a.id = 126
}, function (e, t) {
	e.exports = function (e) {
		return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
			enumerable: !0,
			get: function () {
				return e.l
			}
		}), Object.defineProperty(e, "id", {
			enumerable: !0,
			get: function () {
				return e.i
			}
		}), e.webpackPolyfill = 1), e
	}
}]);

