TOOLS_ENVIRONMENT = {
	production: true,
	hxlProxy: '/hxlproxy/data.json',
	hxlCheck: '/hxlproxy/hxl-test.json',
	hxlPreview: '/quickcharts/app',
	googleAnalyticsKey: 'UA-48221887-3',
	prodMixpanelKey: '5cbf12bc9984628fb2c55a49daf32e74',
	testMixpanelKey: '99035923ee0a67880e6c05ab92b6cbc0',
	prodHostname: 'tools.humdata.org' // used by analytics code to decide which key to use
};

/* Mixpanel init */
(function (e, a) {
	if (!a.__SV) {
		var b = window;try {
			var c,
			    l,
			    i,
			    j = b.location,
			    g = j.hash;c = function (a, b) {
				return (l = a.match(RegExp(b + "=([^&]*)"))) ? l[1] : null;
			};g && c(g, "state") && (i = JSON.parse(decodeURIComponent(c(g, "state"))), "mpeditor" === i.action && (b.sessionStorage.setItem("_mpcehash", g), history.replaceState(i.desiredHash || "", e.title, j.pathname + j.search)));
		} catch (m) {}var k, h;window.mixpanel = a;a._i = [];a.init = function (b, c, f) {
			function e(b, a) {
				var c = a.split(".");2 == c.length && (b = b[c[0]], a = c[1]);b[a] = function () {
					b.push([a].concat(Array.prototype.slice.call(arguments, 0)));
				};
			}var d = a;"undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";d.people = d.people || [];d.toString = function (b) {
				var a = "mixpanel";"mixpanel" !== f && (a += "." + f);b || (a += " (stub)");return a;
			};d.people.toString = function () {
				return d.toString(1) + ".people (stub)";
			};k = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
			for (h = 0; h < k.length; h++) e(d, k[h]);a._i.push([b, c, f]);
		};a.__SV = 1.2;b = e.createElement("script");b.type = "text/javascript";b.async = !0;b.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c = e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b, c);
	}
})(document, window.mixpanel || []);
/* Google Analytics init */
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments);
	}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

/* Init Analytics + track pageview */
(function () {
	"use strict";

	var hostname = window.location.hostname;

	var gaToken = TOOLS_ENVIRONMENT.googleAnalyticsKey;
	var mpToken = hostname === TOOLS_ENVIRONMENT.prodHostname ? // if is prod use prod key
	TOOLS_ENVIRONMENT.prodMixpanelKey : TOOLS_ENVIRONMENT.testMixpanelKey;

	/* Init Mixpanel + GA */
	mixpanel.init(mpToken);
	ga('create', gaToken, 'auto');

	/* Track pageview */
	mixpanel.track('page view', {
		'page title': document.title
	});
	ga('send', 'pageview');
})();

/*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
	} : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
	"use strict";
	var t = [],
	    r = Object.getPrototypeOf,
	    s = t.slice,
	    g = t.flat ? function (e) {
		return t.flat.call(e);
	} : function (e) {
		return t.concat.apply([], e);
	},
	    u = t.push,
	    i = t.indexOf,
	    n = {},
	    o = n.toString,
	    v = n.hasOwnProperty,
	    a = v.toString,
	    l = a.call(Object),
	    y = {},
	    m = function (e) {
		return "function" == typeof e && "number" != typeof e.nodeType;
	},
	    x = function (e) {
		return null != e && e === e.window;
	},
	    E = C.document,
	    c = { type: !0, src: !0, nonce: !0, noModule: !0 };function b(e, t, n) {
		var r,
		    i,
		    o = (n = n || E).createElement("script");if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);n.head.appendChild(o).parentNode.removeChild(o);
	}function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
	}var f = "3.5.0",
	    S = function (e, t) {
		return new S.fn.init(e, t);
	};function p(e) {
		var t = !!e && "length" in e && e.length,
		    n = w(e);return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
	}S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function () {
			return s.call(this);
		}, get: function (e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
		}, pushStack: function (e) {
			var t = S.merge(this.constructor(), e);return t.prevObject = this, t;
		}, each: function (e) {
			return S.each(this, e);
		}, map: function (n) {
			return this.pushStack(S.map(this, function (e, t) {
				return n.call(e, t, e);
			}));
		}, slice: function () {
			return this.pushStack(s.apply(this, arguments));
		}, first: function () {
			return this.eq(0);
		}, last: function () {
			return this.eq(-1);
		}, even: function () {
			return this.pushStack(S.grep(this, function (e, t) {
				return (t + 1) % 2;
			}));
		}, odd: function () {
			return this.pushStack(S.grep(this, function (e, t) {
				return t % 2;
			}));
		}, eq: function (e) {
			var t = this.length,
			    n = +e + (e < 0 ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
		}, end: function () {
			return this.prevObject || this.constructor();
		}, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function () {
		var e,
		    t,
		    n,
		    r,
		    i,
		    o,
		    a = arguments[0] || {},
		    s = 1,
		    u = arguments.length,
		    l = !1;for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));return a;
	}, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
			throw new Error(e);
		}, noop: function () {}, isPlainObject: function (e) {
			var t, n;return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
		}, isEmptyObject: function (e) {
			var t;for (t in e) return !1;return !0;
		}, globalEval: function (e, t, n) {
			b(e, { nonce: t && t.nonce }, n);
		}, each: function (e, t) {
			var n,
			    r = 0;if (p(e)) {
				for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
			} else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;return e;
		}, makeArray: function (e, t) {
			var n = t || [];return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
		}, inArray: function (e, t, n) {
			return null == t ? -1 : i.call(t, e, n);
		}, merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];return e.length = i, e;
		}, grep: function (e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);return r;
		}, map: function (e, t, n) {
			var r,
			    i,
			    o = 0,
			    a = [];if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);return g(a);
		}, guid: 1, support: y }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase();
	});var d = function (n) {
		var e,
		    d,
		    b,
		    o,
		    i,
		    h,
		    f,
		    g,
		    w,
		    u,
		    l,
		    T,
		    C,
		    a,
		    E,
		    v,
		    s,
		    c,
		    y,
		    S = "sizzle" + 1 * new Date(),
		    p = n.document,
		    k = 0,
		    r = 0,
		    m = ue(),
		    x = ue(),
		    A = ue(),
		    N = ue(),
		    D = function (e, t) {
			return e === t && (l = !0), 0;
		},
		    j = {}.hasOwnProperty,
		    t = [],
		    q = t.pop,
		    L = t.push,
		    H = t.push,
		    O = t.slice,
		    P = function (e, t) {
			for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;return -1;
		},
		    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    M = "[\\x20\\t\\r\\n\\f]",
		    I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
		    W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
		    F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
		    B = new RegExp(M + "+", "g"),
		    $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
		    _ = new RegExp("^" + M + "*," + M + "*"),
		    z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
		    U = new RegExp(M + "|>"),
		    X = new RegExp(F),
		    V = new RegExp("^" + I + "$"),
		    G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
		    Y = /HTML$/i,
		    Q = /^(?:input|select|textarea|button)$/i,
		    J = /^h\d$/i,
		    K = /^[^{]+\{\s*\[native \w/,
		    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    ee = /[+~]/,
		    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
		    ne = function (e, t) {
			var n = "0x" + e.slice(1) - 65536;return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
		},
		    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    ie = function (e, t) {
			return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
		},
		    oe = function () {
			T();
		},
		    ae = be(function (e) {
			return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
		}, { dir: "parentNode", next: "legend" });try {
			H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
		} catch (e) {
			H = { apply: t.length ? function (e, t) {
					L.apply(e, O.call(t));
				} : function (e, t) {
					var n = e.length,
					    r = 0;while (e[n++] = t[r++]);e.length = n - 1;
				} };
		}function se(t, e, n, r) {
			var i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f = e && e.ownerDocument,
			    p = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;if (!r && (T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
					if (9 === p) {
						if (!(a = e.getElementById(i))) return n;if (a.id === i) return n.push(a), n;
					} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
				} else {
					if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
				}if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
						(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);c = l.join(",");
					}try {
						return H.apply(n, f.querySelectorAll(c)), n;
					} catch (e) {
						N(t, !0);
					} finally {
						s === S && e.removeAttribute("id");
					}
				}
			}return g(t.replace($, "$1"), e, n, r);
		}function ue() {
			var r = [];return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
			};
		}function le(e) {
			return e[S] = !0, e;
		}function ce(e) {
			var t = C.createElement("fieldset");try {
				return !!e(t);
			} catch (e) {
				return !1;
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null;
			}
		}function fe(e, t) {
			var n = e.split("|"),
			    r = n.length;while (r--) b.attrHandle[n[r]] = t;
		}function pe(e, t) {
			var n = t && e,
			    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) if (n === t) return -1;return e ? 1 : -1;
		}function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t;
			};
		}function he(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();return ("input" === t || "button" === t) && e.type === n;
			};
		}function ge(t) {
			return function (e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
			};
		}function ve(a) {
			return le(function (o) {
				return o = +o, le(function (e, t) {
					var n,
					    r = a([], e.length, o),
					    i = r.length;while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
				});
			});
		}function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e;
		}for (e in d = se.support = {}, i = se.isXML = function (e) {
			var t = e.namespaceURI,
			    n = (e.ownerDocument || e).documentElement;return !Y.test(t || n && n.nodeName || "HTML");
		}, T = se.setDocument = function (e) {
			var t,
			    n,
			    r = e ? e.ownerDocument || e : p;return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
				return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
			}), d.attributes = ce(function (e) {
				return e.className = "i", !e.getAttribute("className");
			}), d.getElementsByTagName = ce(function (e) {
				return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
			}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
				return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
			}), d.getById ? (b.filter.ID = function (e) {
				var t = e.replace(te, ne);return function (e) {
					return e.getAttribute("id") === t;
				};
			}, b.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && E) {
					var n = t.getElementById(e);return n ? [n] : [];
				}
			}) : (b.filter.ID = function (e) {
				var n = e.replace(te, ne);return function (e) {
					var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return t && t.value === n;
				};
			}, b.find.ID = function (e, t) {
				if ("undefined" != typeof t.getElementById && E) {
					var n,
					    r,
					    i,
					    o = t.getElementById(e);if (o) {
						if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
					}return [];
				}
			}), b.find.TAG = d.getElementsByTagName ? function (e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
			} : function (e, t) {
				var n,
				    r = [],
				    i = 0,
				    o = t.getElementsByTagName(e);if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);return r;
				}return o;
			}, b.find.CLASS = d.getElementsByClassName && function (e, t) {
				if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
			}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
				var t;a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
			}), ce(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = C.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
			})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
				d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
			}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
				    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
			} : function (e, t) {
				if (t) while (t = t.parentNode) if (t === e) return !0;return !1;
			}, D = t ? function (e, t) {
				if (e === t) return l = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
			} : function (e, t) {
				if (e === t) return l = !0, 0;var n,
				    r = 0,
				    i = e.parentNode,
				    o = t.parentNode,
				    a = [e],
				    s = [t];if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;if (i === o) return pe(e, t);n = e;while (n = n.parentNode) a.unshift(n);n = t;while (n = n.parentNode) s.unshift(n);while (a[r] === s[r]) r++;return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
			}), C;
		}, se.matches = function (e, t) {
			return se(e, null, null, t);
		}, se.matchesSelector = function (e, t) {
			if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
				var n = c.call(e, t);if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
			} catch (e) {
				N(t, !0);
			}return 0 < se(t, C, null, [e]).length;
		}, se.contains = function (e, t) {
			return (e.ownerDocument || e) != C && T(e), y(e, t);
		}, se.attr = function (e, t) {
			(e.ownerDocument || e) != C && T(e);var n = b.attrHandle[t.toLowerCase()],
			    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
		}, se.escape = function (e) {
			return (e + "").replace(re, ie);
		}, se.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e);
		}, se.uniqueSort = function (e) {
			var t,
			    n = [],
			    r = 0,
			    i = 0;if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
				while (t = e[i++]) t === e[i] && (r = n.push(i));while (r--) e.splice(n[r], 1);
			}return u = null, e;
		}, o = se.getText = function (e) {
			var t,
			    n = "",
			    r = 0,
			    i = e.nodeType;if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
				} else if (3 === i || 4 === i) return e.nodeValue;
			} else while (t = e[r++]) n += o(t);return n;
		}, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
					return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
				}, CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
				}, PSEUDO: function (e) {
					var t,
					    n = !e[6] && e[2];return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
				} }, filter: { TAG: function (e) {
					var t = e.replace(te, ne).toLowerCase();return "*" === e ? function () {
						return !0;
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t;
					};
				}, CLASS: function (e) {
					var t = m[e + " "];return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
					});
				}, ATTR: function (n, r, i) {
					return function (e) {
						var t = se.attr(e, n);return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
					};
				}, CHILD: function (h, e, t, g, v) {
					var y = "nth" !== h.slice(0, 3),
					    m = "last" !== h.slice(-4),
					    x = "of-type" === e;return 1 === g && 0 === v ? function (e) {
						return !!e.parentNode;
					} : function (e, t, n) {
						var r,
						    i,
						    o,
						    a,
						    s,
						    u,
						    l = y !== m ? "nextSibling" : "previousSibling",
						    c = e.parentNode,
						    f = x && e.nodeName.toLowerCase(),
						    p = !n && !x,
						    d = !1;if (c) {
							if (y) {
								while (l) {
									a = e;while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;u = l = "only" === h && !u && "nextSibling";
								}return !0;
							}if (u = [m ? c.firstChild : c.lastChild], m && p) {
								d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
									i[h] = [k, s, d];break;
								}
							} else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;return (d -= v) === g || d % g == 0 && 0 <= d / g;
						}
					};
				}, PSEUDO: function (e, o) {
					var t,
					    a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
						var n,
						    r = a(e, o),
						    i = r.length;while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
					}) : function (e) {
						return a(e, 0, t);
					}) : a;
				} }, pseudos: { not: le(function (e) {
					var r = [],
					    i = [],
					    s = f(e.replace($, "$1"));return s[S] ? le(function (e, t, n, r) {
						var i,
						    o = s(e, null, r, []),
						    a = e.length;while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
					}) : function (e, t, n) {
						return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
					};
				}), has: le(function (t) {
					return function (e) {
						return 0 < se(t, e).length;
					};
				}), contains: le(function (t) {
					return t = t.replace(te, ne), function (e) {
						return -1 < (e.textContent || o(e)).indexOf(t);
					};
				}), lang: le(function (n) {
					return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
						var t;do {
							if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
						} while ((e = e.parentNode) && 1 === e.nodeType);return !1;
					};
				}), target: function (e) {
					var t = n.location && n.location.hash;return t && t.slice(1) === e.id;
				}, root: function (e) {
					return e === a;
				}, focus: function (e) {
					return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
				}, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
					var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
				}, selected: function (e) {
					return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
				}, empty: function (e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
				}, parent: function (e) {
					return !b.pseudos.empty(e);
				}, header: function (e) {
					return J.test(e.nodeName);
				}, input: function (e) {
					return Q.test(e.nodeName);
				}, button: function (e) {
					var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
				}, text: function (e) {
					var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
				}, first: ve(function () {
					return [0];
				}), last: ve(function (e, t) {
					return [t - 1];
				}), eq: ve(function (e, t, n) {
					return [n < 0 ? n + t : n];
				}), even: ve(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);return e;
				}), odd: ve(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);return e;
				}), lt: ve(function (e, t, n) {
					for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);return e;
				}), gt: ve(function (e, t, n) {
					for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);return e;
				}) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);function me() {}function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;return r;
		}function be(s, e, t) {
			var u = e.dir,
			    l = e.next,
			    c = l || u,
			    f = t && "parentNode" === c,
			    p = r++;return e.first ? function (e, t, n) {
				while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);return !1;
			} : function (e, t, n) {
				var r,
				    i,
				    o,
				    a = [k, p];if (n) {
					while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
				} else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
					if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];if ((i[c] = a)[2] = s(e, t, n)) return !0;
				}return !1;
			};
		}function we(i) {
			return 1 < i.length ? function (e, t, n) {
				var r = i.length;while (r--) if (!i[r](e, t, n)) return !1;return !0;
			} : i[0];
		}function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));return a;
		}function Ce(d, h, g, v, y, e) {
			return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
				var i,
				    o,
				    a,
				    s = [],
				    u = [],
				    l = t.length,
				    c = e || function (e, t, n) {
					for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);return n;
				}(h || "*", n.nodeType ? [n] : n, []),
				    f = !d || !e && h ? c : Te(c, s, d, n, r),
				    p = g ? y || (e ? d : l || v) ? [] : t : f;if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
				}if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;while (o--) (a = p[o]) && i.push(f[o] = a);y(null, p = [], i, r);
						}o = p.length;while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
			});
		}function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
				return e === i;
			}, a, !0), l = be(function (e) {
				return -1 < P(i, e);
			}, a, !0), c = [function (e, t, n) {
				var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));return i = null, r;
			}]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
				if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
					for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
				}c.push(t);
			}return we(c);
		}return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
			var n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l = x[e + " "];if (l) return t ? 0 : l.slice(0);a = e, s = [], u = b.preFilter;while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace($, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length));if (!n) break;
			}return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
		}, f = se.compile = function (e, t) {
			var n,
			    v,
			    y,
			    m,
			    x,
			    r,
			    i = [],
			    o = [],
			    a = A[e + " "];if (!a) {
				t || (t = h(e)), n = t.length;while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);(a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
					var o,
					    a,
					    s,
					    u = 0,
					    l = "0",
					    c = e && [],
					    f = [],
					    p = w,
					    d = e || x && b.find.TAG("*", i),
					    h = k += null == p ? 1 : Math.random() || .1,
					    g = d.length;for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument == C || (T(o), n = !E);while (s = v[a++]) if (s(o, t || C, n)) {
								r.push(o);break;
							}i && (k = h);
						}m && ((o = !s && o) && u--, e && c.push(o));
					}if (u += l, m && l !== u) {
						a = 0;while (s = y[a++]) s(c, f, t, n);if (e) {
							if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));f = Te(f);
						}H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
					}return i && (k = h, w = p), c;
				}, m ? le(r) : r))).selector = e;
			}return a;
		}, g = se.select = function (e, t, n, r) {
			var i,
			    o,
			    a,
			    s,
			    u,
			    l = "function" == typeof e && e,
			    c = !r && h(e = l.selector || e);if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
				}i = G.needsContext.test(e) ? 0 : o.length;while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;break;
					}
				}
			}return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
		}, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
		}), ce(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
		}) || fe("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
		}), d.attributes && ce(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
		}) || fe("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
		}), ce(function (e) {
			return null == e.getAttribute("disabled");
		}) || fe(R, function (e, t, n) {
			var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
		}), se;
	}(C);S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;var h = function (e, t, n) {
		var r = [],
		    i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
			if (i && S(e).is(n)) break;r.push(e);
		}return r;
	},
	    T = function (e, t) {
		for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
	},
	    k = S.expr.match.needsContext;function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	}var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e, n, r) {
		return m(n) ? S.grep(e, function (e, t) {
			return !!n.call(e, t, e) !== r;
		}) : n.nodeType ? S.grep(e, function (e) {
			return e === n !== r;
		}) : "string" != typeof n ? S.grep(e, function (e) {
			return -1 < i.call(n, e) !== r;
		}) : S.filter(n, e, r);
	}S.filter = function (e, t, n) {
		var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
			return 1 === e.nodeType;
		}));
	}, S.fn.extend({ find: function (e) {
			var t,
			    n,
			    r = this.length,
			    i = this;if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
				for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
			}));for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);return 1 < r ? S.uniqueSort(n) : n;
		}, filter: function (e) {
			return this.pushStack(D(this, e || [], !1));
		}, not: function (e) {
			return this.pushStack(D(this, e || [], !0));
		}, is: function (e) {
			return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
		} });var j,
	    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init = function (e, t, n) {
		var r, i;if (!e) return this;if (n = n || j, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);return this;
			}return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
		}return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
	}).prototype = S.fn, j = S(E);var L = /^(?:parents|prev(?:Until|All))/,
	    H = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);return e;
	}S.fn.extend({ has: function (e) {
			var t = S(e, this),
			    n = t.length;return this.filter(function () {
				for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
			});
		}, closest: function (e, t) {
			var n,
			    r = 0,
			    i = this.length,
			    o = [],
			    a = "string" != typeof e && S(e);if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
				o.push(n);break;
			}return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
		}, index: function (e) {
			return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function (e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
		}, addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
		} }), S.each({ parent: function (e) {
			var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
		}, parents: function (e) {
			return h(e, "parentNode");
		}, parentsUntil: function (e, t, n) {
			return h(e, "parentNode", n);
		}, next: function (e) {
			return O(e, "nextSibling");
		}, prev: function (e) {
			return O(e, "previousSibling");
		}, nextAll: function (e) {
			return h(e, "nextSibling");
		}, prevAll: function (e) {
			return h(e, "previousSibling");
		}, nextUntil: function (e, t, n) {
			return h(e, "nextSibling", n);
		}, prevUntil: function (e, t, n) {
			return h(e, "previousSibling", n);
		}, siblings: function (e) {
			return T((e.parentNode || {}).firstChild, e);
		}, children: function (e) {
			return T(e.firstChild);
		}, contents: function (e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
		} }, function (r, i) {
		S.fn[r] = function (e, t) {
			var n = S.map(this, i, e);return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
		};
	});var P = /[^\x20\t\r\n\f]+/g;function R(e) {
		return e;
	}function M(e) {
		throw e;
	}function I(e, t, n, r) {
		var i;try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
		} catch (e) {
			n.apply(void 0, [e]);
		}
	}S.Callbacks = function (r) {
		var e, n;r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
			n[t] = !0;
		}), n) : S.extend({}, r);var i,
		    t,
		    o,
		    a,
		    s = [],
		    u = [],
		    l = -1,
		    c = function () {
			for (a = a || r.once, o = i = !0; u.length; l = -1) {
				t = u.shift();while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
			}r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
		},
		    f = { add: function () {
				return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
					S.each(e, function (e, t) {
						m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
					});
				}(arguments), t && !i && c()), this;
			}, remove: function () {
				return S.each(arguments, function (e, t) {
					var n;while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
				}), this;
			}, has: function (e) {
				return e ? -1 < S.inArray(e, s) : 0 < s.length;
			}, empty: function () {
				return s && (s = []), this;
			}, disable: function () {
				return a = u = [], s = t = "", this;
			}, disabled: function () {
				return !s;
			}, lock: function () {
				return a = u = [], t || i || (s = t = ""), this;
			}, locked: function () {
				return !!a;
			}, fireWith: function (e, t) {
				return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
			}, fire: function () {
				return f.fireWith(this, arguments), this;
			}, fired: function () {
				return !!o;
			} };return f;
	}, S.extend({ Deferred: function (e) {
			var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
			    i = "pending",
			    a = { state: function () {
					return i;
				}, always: function () {
					return s.done(arguments).fail(arguments), this;
				}, "catch": function (e) {
					return a.then(null, e);
				}, pipe: function () {
					var i = arguments;return S.Deferred(function (r) {
						S.each(o, function (e, t) {
							var n = m(i[t[4]]) && i[t[4]];s[t[1]](function () {
								var e = n && n.apply(this, arguments);e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
							});
						}), i = null;
					}).promise();
				}, then: function (t, n, r) {
					var u = 0;function l(i, o, a, s) {
						return function () {
							var n = this,
							    r = arguments,
							    e = function () {
								var e, t;if (!(i < u)) {
									if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
								}
							},
							    t = s ? e : function () {
								try {
									e();
								} catch (e) {
									S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
								}
							};i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
						};
					}return S.Deferred(function (e) {
						o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
					}).promise();
				}, promise: function (e) {
					return null != e ? S.extend(e, a) : a;
				} },
			    s = {};return S.each(o, function (e, t) {
				var n = t[2],
				    r = t[5];a[t[1]] = n.add, r && n.add(function () {
					i = r;
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
				}, s[t[0] + "With"] = n.fireWith;
			}), a.promise(s), e && e.call(s, s), s;
		}, when: function (e) {
			var n = arguments.length,
			    t = n,
			    r = Array(t),
			    i = s.call(arguments),
			    o = S.Deferred(),
			    a = function (t) {
				return function (e) {
					r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
				};
			};if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();while (t--) I(i[t], a(t), o.reject);return o.promise();
		} });var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook = function (e, t) {
		C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
	}, S.readyException = function (e) {
		C.setTimeout(function () {
			throw e;
		});
	};var F = S.Deferred();function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
	}S.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			S.readyException(e);
		}), this;
	}, S.extend({ isReady: !1, readyWait: 1, ready: function (e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
		} }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));var $ = function (e, t, n, r, i, o, a) {
		var s = 0,
		    u = e.length,
		    l = null == n;if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
			return l.call(S(e), n);
		})), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
	},
	    _ = /^-ms-/,
	    z = /-([a-z])/g;function U(e, t) {
		return t.toUpperCase();
	}function X(e) {
		return e.replace(_, "ms-").replace(z, U);
	}var V = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	};function G() {
		this.expando = S.expando + G.uid++;
	}G.uid = 1, G.prototype = { cache: function (e) {
			var t = e[this.expando];return t || (t = Object.create(null), V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
		}, set: function (e, t, n) {
			var r,
			    i = this.cache(e);if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];return i;
		}, get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
		}, access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
		}, remove: function (e, t) {
			var n,
			    r = e[this.expando];if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;while (n--) delete r[t[n]];
				}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
			}
		}, hasData: function (e) {
			var t = e[this.expando];return void 0 !== t && !S.isEmptyObject(t);
		} };var Y = new G(),
	    Q = new G(),
	    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    K = /[A-Z]/g;function Z(e, t, n) {
		var r, i;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
			try {
				n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
			} catch (e) {}Q.set(e, t, n);
		} else n = void 0;return n;
	}S.extend({ hasData: function (e) {
			return Q.hasData(e) || Y.hasData(e);
		}, data: function (e, t, n) {
			return Q.access(e, t, n);
		}, removeData: function (e, t) {
			Q.remove(e, t);
		}, _data: function (e, t, n) {
			return Y.access(e, t, n);
		}, _removeData: function (e, t) {
			Y.remove(e, t);
		} }), S.fn.extend({ data: function (n, e) {
			var t,
			    r,
			    i,
			    o = this[0],
			    a = o && o.attributes;if (void 0 === n) {
				if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					t = a.length;while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));Y.set(o, "hasDataAttrs", !0);
				}return i;
			}return "object" == typeof n ? this.each(function () {
				Q.set(this, n);
			}) : $(this, function (e) {
				var t;if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;this.each(function () {
					Q.set(this, n, e);
				});
			}, null, e, 1 < arguments.length, null, !0);
		}, removeData: function (e) {
			return this.each(function () {
				Q.remove(this, e);
			});
		} }), S.extend({ queue: function (e, t, n) {
			var r;if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
		}, dequeue: function (e, t) {
			t = t || "fx";var n = S.queue(e, t),
			    r = n.length,
			    i = n.shift(),
			    o = S._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
				S.dequeue(e, t);
			}, o)), !r && o && o.empty.fire();
		}, _queueHooks: function (e, t) {
			var n = t + "queueHooks";return Y.get(e, n) || Y.access(e, n, { empty: S.Callbacks("once memory").add(function () {
					Y.remove(e, [t + "queue", n]);
				}) });
		} }), S.fn.extend({ queue: function (t, n) {
			var e = 2;return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
				var e = S.queue(this, t, n);S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
			});
		}, dequeue: function (e) {
			return this.each(function () {
				S.dequeue(this, e);
			});
		}, clearQueue: function (e) {
			return this.queue(e || "fx", []);
		}, promise: function (e, t) {
			var n,
			    r = 1,
			    i = S.Deferred(),
			    o = this,
			    a = this.length,
			    s = function () {
				--r || i.resolveWith(o, [o]);
			};"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), i.promise(t);
		} });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
	    ne = ["Top", "Right", "Bottom", "Left"],
	    re = E.documentElement,
	    ie = function (e) {
		return S.contains(e.ownerDocument, e);
	},
	    oe = { composed: !0 };re.getRootNode && (ie = function (e) {
		return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
	});var ae = function (e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
	};function se(e, t, n, r) {
		var i,
		    o,
		    a = 20,
		    s = r ? function () {
			return r.cur();
		} : function () {
			return S.css(e, t, "");
		},
		    u = s(),
		    l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
		    c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;c *= 2, S.style(e, t, c + l), n = n || [];
		}return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
	}var ue = {};function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);return e;
	}S.fn.extend({ show: function () {
			return le(this, !0);
		}, hide: function () {
			return le(this);
		}, toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				ae(this) ? S(this).show() : S(this).hide();
			});
		} });var ce,
	    fe,
	    pe = /^(?:checkbox|radio)$/i,
	    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
	    he = /^$|^module$|\/(?:java|ecma)script/i;ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ve(e, t) {
		var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
	}function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
	}ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);var me = /<|&#?\w+;/;function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];while (c--) a = a.lastChild;S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
		} else p.push(t.createTextNode(o));f.textContent = "", d = 0;while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;while (o = a[c++]) he.test(o.type || "") && n.push(o);
		}return f;
	}var be = /^key/,
	    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    Te = /^([^.]*)(?:\.(.+)|)/;function Ce() {
		return !0;
	}function Ee() {
		return !1;
	}function Se(e, t) {
		return e === function () {
			try {
				return E.activeElement;
			} catch (e) {}
		}() == ("focus" === t);
	}function ke(e, t, n, r, i, o) {
		var a, s;if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);return e;
		}if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;return 1 === o && (a = i, (i = function (e) {
			return S().off(e), a.apply(this, arguments);
		}).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
			S.event.add(this, t, i, r, n);
		});
	}function Ae(e, i, o) {
		o ? (Y.set(e, i, !1), S.event.add(e, i, { namespace: !1, handler: function (e) {
				var t,
				    n,
				    r = Y.get(this, i);if (1 & e.isTrigger && this[i]) {
					if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
				} else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
			} })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
	}S.event = { global: {}, add: function (t, e, n, r, i) {
			var o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p,
			    d,
			    h,
			    g,
			    v = Y.get(t);if (V(t)) {
				n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
					return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
				}), l = (e = (e || "").match(P) || [""]).length;while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
			}
		}, remove: function (e, t, n, r, i) {
			var o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p,
			    d,
			    h,
			    g,
			    v = Y.hasData(e) && Y.get(e);if (v && (u = v.events)) {
				l = (t = (t || "").match(P) || [""]).length;while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
					f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
				} else for (d in u) S.event.remove(e, d + t[l], n, r, !0);S.isEmptyObject(u) && Y.remove(e, "handle events");
			}
		}, dispatch: function (e) {
			var t,
			    n,
			    r,
			    i,
			    o,
			    a,
			    s = new Array(arguments.length),
			    u = S.event.fix(e),
			    l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
			    c = S.event.special[u.type] || {};for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = S.event.handlers.call(this, u, l), t = 0;while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
				}return c.postDispatch && c.postDispatch.call(this, u), u.result;
			}
		}, handlers: function (e, t) {
			var n,
			    r,
			    i,
			    o,
			    a,
			    s = [],
			    u = t.delegateCount,
			    l = e.target;if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
				for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);o.length && s.push({ elem: l, handlers: o });
			}return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
		}, addProp: function (t, e) {
			Object.defineProperty(S.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function () {
					if (this.originalEvent) return e(this.originalEvent);
				} : function () {
					if (this.originalEvent) return this.originalEvent[t];
				}, set: function (e) {
					Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
				} });
		}, fix: function (e) {
			return e[S.expando] ? e : new S.Event(e);
		}, special: { load: { noBubble: !0 }, click: { setup: function (e) {
					var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
				}, trigger: function (e) {
					var t = this || e;return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
				}, _default: function (e) {
					var t = e.target;return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
				} }, beforeunload: { postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
				} } } }, S.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n);
	}, S.Event = function (e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
	}, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Ee, isPropagationStopped: Ee, isImmediatePropagationStopped: Ee, isSimulated: !1, preventDefault: function () {
			var e = this.originalEvent;this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
		}, stopPropagation: function () {
			var e = this.originalEvent;this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
		}, stopImmediatePropagation: function () {
			var e = this.originalEvent;this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
		} }, S.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (e) {
			var t = e.button;return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
		} }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
		S.event.special[e] = { setup: function () {
				return Ae(this, e, Se), !1;
			}, trigger: function () {
				return Ae(this, e), !0;
			}, delegateType: t };
	}), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
		S.event.special[e] = { delegateType: i, bindType: i, handle: function (e) {
				var t,
				    n = e.relatedTarget,
				    r = e.handleObj;return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
			} };
	}), S.fn.extend({ on: function (e, t, n, r) {
			return ke(this, e, t, n, r);
		}, one: function (e, t, n, r) {
			return ke(this, e, t, n, r, 1);
		}, off: function (e, t, n) {
			var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);return this;
			}return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
				S.event.remove(this, e, n, t);
			});
		} });var Ne = /<script|<style|<link/i,
	    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
	}function Le(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
	}function He(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
	}function Oe(e, t) {
		var n, r, i, o, a, s;if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
		}
	}function Pe(n, r, i, o) {
		r = g(r);var e,
		    t,
		    a,
		    s,
		    u,
		    l,
		    c = 0,
		    f = n.length,
		    p = f - 1,
		    d = r[0],
		    h = m(d);if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
			var t = n.eq(e);h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
		});if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(je, ""), u, l));
		}return n;
	}function Re(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));return e;
	}S.extend({ htmlPrefilter: function (e) {
			return e;
		}, clone: function (e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c = e.cloneNode(!0),
			    f = ie(e);if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);else Oe(e, c);return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
		}, cleanData: function (e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
				if (t = n[Y.expando]) {
					if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);n[Y.expando] = void 0;
				}n[Q.expando] && (n[Q.expando] = void 0);
			}
		} }), S.fn.extend({ detach: function (e) {
			return Re(this, e, !0);
		}, remove: function (e) {
			return Re(this, e);
		}, text: function (e) {
			return $(this, function (e) {
				return void 0 === e ? S.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
				});
			}, null, e, arguments.length);
		}, append: function () {
			return Pe(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
			});
		}, prepend: function () {
			return Pe(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = qe(this, e);t.insertBefore(e, t.firstChild);
				}
			});
		}, before: function () {
			return Pe(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this);
			});
		}, after: function () {
			return Pe(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
			});
		}, empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");return this;
		}, clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return S.clone(this, e, t);
			});
		}, html: function (e) {
			return $(this, function (e) {
				var t = this[0] || {},
				    n = 0,
				    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = S.htmlPrefilter(e);try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);t = 0;
					} catch (e) {}
				}t && this.empty().append(e);
			}, null, e, arguments.length);
		}, replaceWith: function () {
			var n = [];return Pe(this, arguments, function (e) {
				var t = this.parentNode;S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
			}, n);
		} }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
		S.fn[e] = function (e) {
			for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());return this.pushStack(n);
		};
	});var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
	    Ie = function (e) {
		var t = e.ownerDocument.defaultView;return t && t.opener || (t = C), t.getComputedStyle(e);
	},
	    We = function (e, t, n) {
		var r,
		    i,
		    o = {};for (i in t) o[i] = e.style[i], e.style[i] = t[i];for (i in r = n.call(e), t) e.style[i] = o[i];return r;
	},
	    Fe = new RegExp(ne.join("|"), "i");function Be(e, t, n) {
		var r,
		    i,
		    o,
		    a,
		    s = e.style;return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
	}function $e(e, t) {
		return { get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
			} };
	}!function () {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);var e = C.getComputedStyle(l);n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
			}
		}function t(e) {
			return Math.round(parseFloat(e));
		}var n,
		    r,
		    i,
		    o,
		    a,
		    s,
		    u = E.createElement("div"),
		    l = E.createElement("div");l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, { boxSizingReliable: function () {
				return e(), r;
			}, pixelBoxStyles: function () {
				return e(), o;
			}, pixelPosition: function () {
				return e(), n;
			}, reliableMarginLeft: function () {
				return e(), s;
			}, scrollboxSize: function () {
				return e(), i;
			}, reliableTrDimensions: function () {
				var e, t, n, r;return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
			} }));
	}();var _e = ["Webkit", "Moz", "ms"],
	    ze = E.createElement("div").style,
	    Ue = {};function Xe(e) {
		var t = S.cssProps[e] || Ue[e];return t || (e in ze ? e : Ue[e] = function (e) {
			var t = e[0].toUpperCase() + e.slice(1),
			    n = _e.length;while (n--) if ((e = _e[n] + t) in ze) return e;
		}(e) || e);
	}var Ve = /^(none|table(?!-c[ea]).+)/,
	    Ge = /^--/,
	    Ye = { position: "absolute", visibility: "hidden", display: "block" },
	    Qe = { letterSpacing: "0", fontWeight: "400" };function Je(e, t, n) {
		var r = te.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
	}function Ke(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
		    s = 0,
		    u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
	}function Ze(e, t, n) {
		var r = Ie(e),
		    i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
		    o = i,
		    a = Be(e, t, r),
		    s = "offset" + t[0].toUpperCase() + t.slice(1);if (Me.test(a)) {
			if (!n) return a;a = "auto";
		}return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
	}function et(e, t, n, r, i) {
		return new et.prototype.init(e, t, n, r, i);
	}S.extend({ cssHooks: { opacity: { get: function (e, t) {
					if (t) {
						var n = Be(e, "opacity");return "" === n ? "1" : n;
					}
				} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
				    o,
				    a,
				    s = X(t),
				    u = Ge.test(t),
				    l = e.style;if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
			}
		}, css: function (e, t, n, r) {
			var i,
			    o,
			    a,
			    s = X(t);return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
		} }), S.each(["height", "width"], function (e, u) {
		S.cssHooks[u] = { get: function (e, t, n) {
				if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
					return Ze(e, u, n);
				});
			}, set: function (e, t, n) {
				var r,
				    i = Ie(e),
				    o = !y.scrollboxSize() && "absolute" === i.position,
				    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
				    s = n ? Ke(e, u, n, a, i) : 0;return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
			} };
	}), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, { marginLeft: 0 }, function () {
			return e.getBoundingClientRect().left;
		})) + "px";
	}), S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
		S.cssHooks[i + o] = { expand: function (e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];return n;
			} }, "margin" !== i && (S.cssHooks[i + o].set = Je);
	}), S.fn.extend({ css: function (e, t) {
			return $(this, function (e, t, n) {
				var r,
				    i,
				    o = {},
				    a = 0;if (Array.isArray(t)) {
					for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);return o;
				}return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
			}, e, t, 1 < arguments.length);
		} }), ((S.Tween = et).prototype = { constructor: et, init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
		}, cur: function () {
			var e = et.propHooks[this.prop];return e && e.get ? e.get(this) : et.propHooks._default.get(this);
		}, run: function (e) {
			var t,
			    n = et.propHooks[this.prop];return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
		} }).init.prototype = et.prototype, (et.propHooks = { _default: { get: function (e) {
				var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
			}, set: function (e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
			} } }).scrollTop = et.propHooks.scrollLeft = { set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
		} }, S.easing = { linear: function (e) {
			return e;
		}, swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2;
		}, _default: "swing" }, S.fx = et.prototype.init, S.fx.step = {};var tt,
	    nt,
	    rt,
	    it,
	    ot = /^(?:toggle|show|hide)$/,
	    at = /queueHooks$/;function st() {
		nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
	}function ut() {
		return C.setTimeout(function () {
			tt = void 0;
		}), tt = Date.now();
	}function lt(e, t) {
		var n,
		    r = 0,
		    i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;return t && (i.opacity = i.width = e), i;
	}function ct(e, t, n) {
		for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
	}function ft(o, e, t) {
		var n,
		    a,
		    r = 0,
		    i = ft.prefilters.length,
		    s = S.Deferred().always(function () {
			delete u.elem;
		}),
		    u = function () {
			if (a) return !1;for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
		},
		    l = s.promise({ elem: o, props: S.extend({}, e), opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t), originalProperties: e, originalOptions: t, startTime: tt || ut(), duration: t.duration, tweens: [], createTween: function (e, t) {
				var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);return l.tweens.push(n), n;
			}, stop: function (e) {
				var t = 0,
				    n = e ? l.tweens.length : 0;if (a) return this;for (a = !0; t < n; t++) l.tweens[t].run(1);return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
			} }),
		    c = l.props;for (!function (e, t) {
			var n, r, i, o, a;for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
		}(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l;
	}S.Animation = S.extend(ft, { tweeners: { "*": [function (e, t) {
				var n = this.createTween(e, t);return se(n.elem, e, te.exec(t), n), n;
			}] }, tweener: function (e, t) {
			m(e) ? (t = e, e = ["*"]) : e = e.match(P);for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
		}, prefilters: [function (e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f = "width" in t || "height" in t,
			    p = this,
			    d = {},
			    h = e.style,
			    g = e.nodeType && ae(e),
			    v = Y.get(e, "fxshow");for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
				a.unqueued || s();
			}), a.unqueued++, p.always(function () {
				p.always(function () {
					a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
				});
			})), t) if (i = t[r], ot.test(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
					if ("show" !== i || !v || void 0 === v[r]) continue;g = !0;
				}d[r] = v && v[r] || S.style(e, r);
			}if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
				h.display = l;
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
			})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
				for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
			})), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
		}], prefilter: function (e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
		} }), S.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? S.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
		}, r;
	}, S.fn.extend({ fadeTo: function (e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
		}, animate: function (t, e, n, r) {
			var i = S.isEmptyObject(t),
			    o = S.speed(e, n, r),
			    a = function () {
				var e = ft(this, S.extend({}, t), o);(i || Y.get(this, "finish")) && e.stop(!0);
			};return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
		}, stop: function (i, e, o) {
			var a = function (e) {
				var t = e.stop;delete e.stop, t(o);
			};return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
				var e = !0,
				    t = null != i && i + "queueHooks",
				    n = S.timers,
				    r = Y.get(this);if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || S.dequeue(this, i);
			});
		}, finish: function (a) {
			return !1 !== a && (a = a || "fx"), this.each(function () {
				var e,
				    t = Y.get(this),
				    n = t[a + "queue"],
				    r = t[a + "queueHooks"],
				    i = S.timers,
				    o = n ? n.length : 0;for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);delete t.finish;
			});
		} }), S.each(["toggle", "show", "hide"], function (e, r) {
		var i = S.fn[r];S.fn[r] = function (e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
		};
	}), S.each({ slideDown: lt("show"), slideUp: lt("hide"), slideToggle: lt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
		S.fn[e] = function (e, t, n) {
			return this.animate(r, e, t, n);
		};
	}), S.timers = [], S.fx.tick = function () {
		var e,
		    t = 0,
		    n = S.timers;for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || S.fx.stop(), tt = void 0;
	}, S.fx.timer = function (e) {
		S.timers.push(e), S.fx.start();
	}, S.fx.interval = 13, S.fx.start = function () {
		nt || (nt = !0, st());
	}, S.fx.stop = function () {
		nt = null;
	}, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function (r, e) {
		return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
			var n = C.setTimeout(e, r);t.stop = function () {
				C.clearTimeout(n);
			};
		});
	}, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;var pt,
	    dt = S.expr.attrHandle;S.fn.extend({ attr: function (e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length);
		}, removeAttr: function (e) {
			return this.each(function () {
				S.removeAttr(this, e);
			});
		} }), S.extend({ attr: function (e, t, n) {
			var r,
			    i,
			    o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
		}, attrHooks: { type: { set: function (e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
					}
				} } }, removeAttr: function (e, t) {
			var n,
			    r = 0,
			    i = t && t.match(P);if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
		} }), pt = { set: function (e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
		} }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var a = dt[t] || S.find.attr;dt[t] = function (e, t, n) {
			var r,
			    i,
			    o = t.toLowerCase();return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
		};
	});var ht = /^(?:input|select|textarea|button)$/i,
	    gt = /^(?:a|area)$/i;function vt(e) {
		return (e.match(P) || []).join(" ");
	}function yt(e) {
		return e.getAttribute && e.getAttribute("class") || "";
	}function mt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
	}S.fn.extend({ prop: function (e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length);
		}, removeProp: function (e) {
			return this.each(function () {
				delete this[S.propFix[e] || e];
			});
		} }), S.extend({ prop: function (e, t, n) {
			var r,
			    i,
			    o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
		}, propHooks: { tabIndex: { get: function (e) {
					var t = S.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
				} } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function (e) {
			var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
		}, set: function (e) {
			var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
		} }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		S.propFix[this.toLowerCase()] = this;
	}), S.fn.extend({ addClass: function (t) {
			var e,
			    n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u = 0;if (m(t)) return this.each(function (e) {
				S(this).addClass(t.call(this, e, yt(this)));
			});if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
				a = 0;while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");i !== (s = vt(r)) && n.setAttribute("class", s);
			}return this;
		}, removeClass: function (t) {
			var e,
			    n,
			    r,
			    i,
			    o,
			    a,
			    s,
			    u = 0;if (m(t)) return this.each(function (e) {
				S(this).removeClass(t.call(this, e, yt(this)));
			});if (!arguments.length) return this.attr("class", "");if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
				a = 0;while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");i !== (s = vt(r)) && n.setAttribute("class", s);
			}return this;
		}, toggleClass: function (i, t) {
			var o = typeof i,
			    a = "string" === o || Array.isArray(i);return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
				S(this).toggleClass(i.call(this, e, yt(this), t), t);
			}) : this.each(function () {
				var e, t, n, r;if (a) {
					t = 0, n = S(this), r = mt(i);while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				} else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
			});
		}, hasClass: function (e) {
			var t,
			    n,
			    r = 0;t = " " + e + " ";while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;return !1;
		} });var xt = /\r/g;S.fn.extend({ val: function (n) {
			var r,
			    e,
			    i,
			    t = this[0];return arguments.length ? (i = m(n), this.each(function (e) {
				var t;1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
					return null == e ? "" : e + "";
				})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
			})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
		} }), S.extend({ valHooks: { option: { get: function (e) {
					var t = S.find.attr(e, "value");return null != t ? t : vt(S.text(e));
				} }, select: { get: function (e) {
					var t,
					    n,
					    r,
					    i = e.options,
					    o = e.selectedIndex,
					    a = "select-one" === e.type,
					    s = a ? null : [],
					    u = a ? o + 1 : i.length;for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
						if (t = S(n).val(), a) return t;s.push(t);
					}return s;
				}, set: function (e, t) {
					var n,
					    r,
					    i = e.options,
					    o = S.makeArray(t),
					    a = i.length;while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);return n || (e.selectedIndex = -1), o;
				} } } }), S.each(["radio", "checkbox"], function () {
		S.valHooks[this] = { set: function (e, t) {
				if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
			} }, y.checkOn || (S.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value;
		});
	}), y.focusin = "onfocusin" in C;var bt = /^(?:focusinfocus|focusoutblur)$/,
	    wt = function (e) {
		e.stopPropagation();
	};S.extend(S.event, { trigger: function (e, t, n, r) {
			var i,
			    o,
			    a,
			    s,
			    u,
			    l,
			    c,
			    f,
			    p = [n || E],
			    d = v.call(e, "type") ? e.type : e,
			    h = v.call(e, "namespace") ? e.namespace.split(".") : [];if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
				}i = 0;while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
			}
		}, simulate: function (e, t, n) {
			var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });S.event.trigger(r, null, t);
		} }), S.fn.extend({ trigger: function (e, t) {
			return this.each(function () {
				S.event.trigger(e, t, this);
			});
		}, triggerHandler: function (e, t) {
			var n = this[0];if (n) return S.event.trigger(e, t, n, !0);
		} }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
		var i = function (e) {
			S.event.simulate(r, e.target, S.event.fix(e));
		};S.event.special[r] = { setup: function () {
				var e = this.ownerDocument || this.document || this,
				    t = Y.access(e, r);t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
			}, teardown: function () {
				var e = this.ownerDocument || this.document || this,
				    t = Y.access(e, r) - 1;t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
			} };
	});var Tt = C.location,
	    Ct = { guid: Date.now() },
	    Et = /\?/;S.parseXML = function (e) {
		var t;if (!e || "string" != typeof e) return null;try {
			t = new C.DOMParser().parseFromString(e, "text/xml");
		} catch (e) {
			t = void 0;
		}return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
	};var St = /\[\]$/,
	    kt = /\r?\n/g,
	    At = /^(?:submit|button|image|reset|file)$/i,
	    Nt = /^(?:input|select|textarea|keygen)/i;function Dt(n, e, r, i) {
		var t;if (Array.isArray(e)) S.each(e, function (e, t) {
			r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
		});else if (r || "object" !== w(e)) i(n, e);else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
	}S.param = function (e, t) {
		var n,
		    r = [],
		    i = function (e, t) {
			var n = m(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
		};if (null == e) return "";if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
			i(this.name, this.value);
		});else for (n in e) Dt(n, e[n], t, i);return r.join("&");
	}, S.fn.extend({ serialize: function () {
			return S.param(this.serializeArray());
		}, serializeArray: function () {
			return this.map(function () {
				var e = S.prop(this, "elements");return e ? S.makeArray(e) : this;
			}).filter(function () {
				var e = this.type;return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
			}).map(function (e, t) {
				var n = S(this).val();return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
					return { name: t.name, value: e.replace(kt, "\r\n") };
				}) : { name: t.name, value: n.replace(kt, "\r\n") };
			}).get();
		} });var jt = /%20/g,
	    qt = /#.*$/,
	    Lt = /([?&])_=[^&]*/,
	    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    Ot = /^(?:GET|HEAD)$/,
	    Pt = /^\/\//,
	    Rt = {},
	    Mt = {},
	    It = "*/".concat("*"),
	    Wt = E.createElement("a");function Ft(o) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");var n,
			    r = 0,
			    i = e.toLowerCase().match(P) || [];if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
		};
	}function Bt(t, i, o, a) {
		var s = {},
		    u = t === Mt;function l(e) {
			var r;return s[e] = !0, S.each(t[e] || [], function (e, t) {
				var n = t(i, o, a);return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
			}), r;
		}return l(i.dataTypes[0]) || !s["*"] && l("*");
	}function $t(e, t) {
		var n,
		    r,
		    i = S.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);return r && S.extend(!0, e, r), e;
	}Wt.href = Tt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Tt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
			return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
		}, ajaxPrefilter: Ft(Rt), ajaxTransport: Ft(Mt), ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};var c,
			    f,
			    p,
			    n,
			    d,
			    r,
			    h,
			    g,
			    i,
			    o,
			    v = S.ajaxSetup({}, t),
			    y = v.context || v,
			    m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
			    x = S.Deferred(),
			    b = S.Callbacks("once memory"),
			    w = v.statusCode || {},
			    a = {},
			    s = {},
			    u = "canceled",
			    T = { readyState: 0, getResponseHeader: function (e) {
					var t;if (h) {
						if (!n) {
							n = {};while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
						}t = n[e.toLowerCase() + " "];
					}return null == t ? null : t.join(", ");
				}, getAllResponseHeaders: function () {
					return h ? p : null;
				}, setRequestHeader: function (e, t) {
					return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
				}, overrideMimeType: function (e) {
					return null == h && (v.mimeType = e), this;
				}, statusCode: function (e) {
					var t;if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];return this;
				}, abort: function (e) {
					var t = e || u;return c && c.abort(t), l(0, t), this;
				} };if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
				r = E.createElement("a");try {
					r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
				} catch (e) {
					v.crossDomain = !0;
				}
			}if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;v.async && 0 < v.timeout && (d = C.setTimeout(function () {
					T.abort("timeout");
				}, v.timeout));try {
					h = !1, c.send(a, l);
				} catch (e) {
					if (h) throw e;l(-1, e);
				}
			} else l(-1, "No Transport");function l(e, t, n, r) {
				var i,
				    o,
				    a,
				    s,
				    u,
				    l = t;h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
					var r,
					    i,
					    o,
					    a,
					    s = e.contents,
					    u = e.dataTypes;while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (i in s) if (s[i] && s[i].test(r)) {
						u.unshift(i);break;
					}if (u[0] in n) o = u[0];else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;break;
							}a || (a = i);
						}o = o || a;
					}if (o) return o !== u[0] && u.unshift(o), n[o];
				}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
					var i,
					    o,
					    a,
					    s,
					    u,
					    l = {},
					    c = e.dataTypes.slice();if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];o = c.shift();while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
							!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
						}if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
							t = a(t);
						} catch (e) {
							return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
						}
					}return { state: "success", data: t };
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
			}return T;
		}, getJSON: function (e, t, n) {
			return S.get(e, t, n, "json");
		}, getScript: function (e, t) {
			return S.get(e, void 0, t, "script");
		} }), S.each(["get", "post"], function (e, i) {
		S[i] = function (e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
		};
	}), S.ajaxPrefilter(function (e) {
		var t;for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
	}), S._evalUrl = function (e, t, n) {
		return S.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function () {} }, dataFilter: function (e) {
				S.globalEval(e, t, n);
			} });
	}, S.fn.extend({ wrapAll: function (e) {
			var t;return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				var e = this;while (e.firstElementChild) e = e.firstElementChild;return e;
			}).append(this)), this;
		}, wrapInner: function (n) {
			return m(n) ? this.each(function (e) {
				S(this).wrapInner(n.call(this, e));
			}) : this.each(function () {
				var e = S(this),
				    t = e.contents();t.length ? t.wrapAll(n) : e.append(n);
			});
		}, wrap: function (t) {
			var n = m(t);return this.each(function (e) {
				S(this).wrapAll(n ? t.call(this, e) : t);
			});
		}, unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				S(this).replaceWith(this.childNodes);
			}), this;
		} }), S.expr.pseudos.hidden = function (e) {
		return !S.expr.pseudos.visible(e);
	}, S.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
	}, S.ajaxSettings.xhr = function () {
		try {
			return new C.XMLHttpRequest();
		} catch (e) {}
	};var _t = { 0: 200, 1223: 204 },
	    zt = S.ajaxSettings.xhr();y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
		var o, a;if (y.cors || zt && !i.crossDomain) return { send: function (e, t) {
				var n,
				    r = i.xhr();if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);o = function (e) {
					return function () {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
					};
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
					4 === r.readyState && C.setTimeout(function () {
						o && a();
					});
				}, o = o("abort");try {
					r.send(i.hasContent && i.data || null);
				} catch (e) {
					if (o) throw e;
				}
			}, abort: function () {
				o && o();
			} };
	}), S.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1);
	}), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (e) {
				return S.globalEval(e), e;
			} } }), S.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
	}), S.ajaxTransport("script", function (n) {
		var r, i;if (n.crossDomain || n.scriptAttrs) return { send: function (e, t) {
				r = S("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function (e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
				}), E.head.appendChild(r[0]);
			}, abort: function () {
				i && i();
			} };
	});var Ut,
	    Xt = [],
	    Vt = /(=)\?(?=&|$)|\?\?/;S.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
			var e = Xt.pop() || S.expando + "_" + Ct.guid++;return this[e] = !0, e;
		} }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
		var r,
		    i,
		    o,
		    a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
			return o || S.error(r + " was not called"), o[0];
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
			o = arguments;
		}, n.always(function () {
			void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
		}), "script";
	}), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));var r, i, o;
	}, S.fn.load = function (e, t, n) {
		var r,
		    i,
		    o,
		    a = this,
		    s = e.indexOf(" ");return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
			o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, o || [e.responseText, t, e]);
			});
		}), this;
	}, S.expr.pseudos.animated = function (t) {
		return S.grep(S.timers, function (e) {
			return t === e.elem;
		}).length;
	}, S.offset = { setOffset: function (e, t, n) {
			var r,
			    i,
			    o,
			    a,
			    s,
			    u,
			    l = S.css(e, "position"),
			    c = S(e),
			    f = {};"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
		} }, S.fn.extend({ offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				S.offset.setOffset(this, t, e);
			});var e,
			    n,
			    r = this[0];return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
		}, position: function () {
			if (this[0]) {
				var e,
				    t,
				    n,
				    r = this[0],
				    i = { top: 0, left: 0 };if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
				}return { top: t.top - i.top - S.css(r, "marginTop", !0), left: t.left - i.left - S.css(r, "marginLeft", !0) };
			}
		}, offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;while (e && "static" === S.css(e, "position")) e = e.offsetParent;return e || re;
			});
		} }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
		var o = "pageYOffset" === i;S.fn[t] = function (e) {
			return $(this, function (e, t, n) {
				var r;if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
			}, t, e, arguments.length);
		};
	}), S.each(["top", "left"], function (e, n) {
		S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
			if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
		});
	}), S.each({ Height: "height", Width: "width" }, function (a, s) {
		S.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
			S.fn[o] = function (e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
				    i = r || (!0 === e || !0 === t ? "margin" : "border");return $(this, function (e, t, n) {
					var r;return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
				}, s, n ? e : void 0, n);
			};
		});
	}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		S.fn[t] = function (e) {
			return this.on(t, e);
		};
	}), S.fn.extend({ bind: function (e, t, n) {
			return this.on(e, null, t, n);
		}, unbind: function (e, t) {
			return this.off(e, null, t);
		}, delegate: function (e, t, n, r) {
			return this.on(t, e, n, r);
		}, undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
		}, hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e);
		} }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
		S.fn[n] = function (e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
		};
	});var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy = function (e, t) {
		var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
			return e.apply(t || this, r.concat(s.call(arguments)));
		}).guid = e.guid = e.guid || S.guid++, i;
	}, S.holdReady = function (e) {
		e ? S.readyWait++ : S.ready(!0);
	}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
		var t = S.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
	}, S.trim = function (e) {
		return null == e ? "" : (e + "").replace(Gt, "");
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return S;
	});var Yt = C.jQuery,
	    Qt = C.$;return S.noConflict = function (e) {
		return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
	}, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch (e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires,
				    t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
			options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};
});

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");!function (t) {
	"use strict";
	var e = jQuery.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(), function (n) {
	"use strict";
	n.fn.emulateTransitionEnd = function (t) {
		var e = !1,
		    i = this;n(this).one("bsTransitionEnd", function () {
			e = !0;
		});return setTimeout(function () {
			e || n(i).trigger(n.support.transition.end);
		}, t), this;
	}, n(function () {
		n.support.transition = function o() {
			var t = document.createElement("bootstrap"),
			    e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var i in e) if (t.style[i] !== undefined) return { end: e[i] };return !1;
		}(), n.support.transition && (n.event.special.bsTransitionEnd = { bindType: n.support.transition.end, delegateType: n.support.transition.end, handle: function (t) {
				if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
			} });
	});
}(jQuery), function (s) {
	"use strict";
	var e = '[data-dismiss="alert"]',
	    a = function (t) {
		s(t).on("click", e, this.close);
	};a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.close = function (t) {
		var e = s(this),
		    i = e.attr("data-target");i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), i = "#" === i ? [] : i;var o = s(document).find(i);function n() {
			o.detach().trigger("closed.bs.alert").remove();
		}t && t.preventDefault(), o.length || (o = e.closest(".alert")), o.trigger(t = s.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), s.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(a.TRANSITION_DURATION) : n());
	};var t = s.fn.alert;s.fn.alert = function o(i) {
		return this.each(function () {
			var t = s(this),
			    e = t.data("bs.alert");e || t.data("bs.alert", e = new a(this)), "string" == typeof i && e[i].call(t);
		});
	}, s.fn.alert.Constructor = a, s.fn.alert.noConflict = function () {
		return s.fn.alert = t, this;
	}, s(document).on("click.bs.alert.data-api", e, a.prototype.close);
}(jQuery), function (s) {
	"use strict";
	var n = function (t, e) {
		this.$element = s(t), this.options = s.extend({}, n.DEFAULTS, e), this.isLoading = !1;
	};function i(o) {
		return this.each(function () {
			var t = s(this),
			    e = t.data("bs.button"),
			    i = "object" == typeof o && o;e || t.data("bs.button", e = new n(this, i)), "toggle" == o ? e.toggle() : o && e.setState(o);
		});
	}n.VERSION = "3.4.1", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function (t) {
		var e = "disabled",
		    i = this.$element,
		    o = i.is("input") ? "val" : "html",
		    n = i.data();t += "Text", null == n.resetText && i.data("resetText", i[o]()), setTimeout(s.proxy(function () {
			i[o](null == n[t] ? this.options[t] : n[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1));
		}, this), 0);
	}, n.prototype.toggle = function () {
		var t = !0,
		    e = this.$element.closest('[data-toggle="buttons"]');if (e.length) {
			var i = this.$element.find("input");"radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change");
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
	};var t = s.fn.button;s.fn.button = i, s.fn.button.Constructor = n, s.fn.button.noConflict = function () {
		return s.fn.button = t, this;
	}, s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		var e = s(t.target).closest(".btn");i.call(e, "toggle"), s(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"));
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
		s(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type));
	});
}(jQuery), function (p) {
	"use strict";
	var c = function (t, e) {
		this.$element = p(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", p.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", p.proxy(this.pause, this)).on("mouseleave.bs.carousel", p.proxy(this.cycle, this));
	};function r(n) {
		return this.each(function () {
			var t = p(this),
			    e = t.data("bs.carousel"),
			    i = p.extend({}, c.DEFAULTS, t.data(), "object" == typeof n && n),
			    o = "string" == typeof n ? n : i.slide;e || t.data("bs.carousel", e = new c(this, i)), "number" == typeof n ? e.to(n) : o ? e[o]() : i.interval && e.pause().cycle();
		});
	}c.VERSION = "3.4.1", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (t) {
		if (!/input|textarea/i.test(t.target.tagName)) {
			switch (t.which) {case 37:
					this.prev();break;case 39:
					this.next();break;default:
					return;}t.preventDefault();
		}
	}, c.prototype.cycle = function (t) {
		return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(p.proxy(this.next, this), this.options.interval)), this;
	}, c.prototype.getItemIndex = function (t) {
		return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active);
	}, c.prototype.getItemForDirection = function (t, e) {
		var i = this.getItemIndex(e);if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;var o = (i + ("prev" == t ? -1 : 1)) % this.$items.length;return this.$items.eq(o);
	}, c.prototype.to = function (t) {
		var e = this,
		    i = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
			e.to(t);
		}) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t));
	}, c.prototype.pause = function (t) {
		return t || (this.paused = !0), this.$element.find(".next, .prev").length && p.support.transition && (this.$element.trigger(p.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
	}, c.prototype.next = function () {
		if (!this.sliding) return this.slide("next");
	}, c.prototype.prev = function () {
		if (!this.sliding) return this.slide("prev");
	}, c.prototype.slide = function (t, e) {
		var i = this.$element.find(".item.active"),
		    o = e || this.getItemForDirection(t, i),
		    n = this.interval,
		    s = "next" == t ? "left" : "right",
		    a = this;if (o.hasClass("active")) return this.sliding = !1;var r = o[0],
		    l = p.Event("slide.bs.carousel", { relatedTarget: r, direction: s });if (this.$element.trigger(l), !l.isDefaultPrevented()) {
			if (this.sliding = !0, n && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");var h = p(this.$indicators.children()[this.getItemIndex(o)]);h && h.addClass("active");
			}var d = p.Event("slid.bs.carousel", { relatedTarget: r, direction: s });return p.support.transition && this.$element.hasClass("slide") ? (o.addClass(t), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
				o.removeClass([t, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), a.sliding = !1, setTimeout(function () {
					a.$element.trigger(d);
				}, 0);
			}).emulateTransitionEnd(c.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), n && this.cycle(), this;
		}
	};var t = p.fn.carousel;p.fn.carousel = r, p.fn.carousel.Constructor = c, p.fn.carousel.noConflict = function () {
		return p.fn.carousel = t, this;
	};var e = function (t) {
		var e = p(this),
		    i = e.attr("href");i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));var o = e.attr("data-target") || i,
		    n = p(document).find(o);if (n.hasClass("carousel")) {
			var s = p.extend({}, n.data(), e.data()),
			    a = e.attr("data-slide-to");a && (s.interval = !1), r.call(n, s), a && n.data("bs.carousel").to(a), t.preventDefault();
		}
	};p(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), p(window).on("load", function () {
		p('[data-ride="carousel"]').each(function () {
			var t = p(this);r.call(t, t.data());
		});
	});
}(jQuery), function (a) {
	"use strict";
	var r = function (t, e) {
		this.$element = a(t), this.options = a.extend({}, r.DEFAULTS, e), this.$trigger = a('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
	};function n(t) {
		var e,
		    i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");return a(document).find(i);
	}function l(o) {
		return this.each(function () {
			var t = a(this),
			    e = t.data("bs.collapse"),
			    i = a.extend({}, r.DEFAULTS, t.data(), "object" == typeof o && o);!e && i.toggle && /show|hide/.test(o) && (i.toggle = !1), e || t.data("bs.collapse", e = new r(this, i)), "string" == typeof o && e[o]();
		});
	}r.VERSION = "3.4.1", r.TRANSITION_DURATION = 350, r.DEFAULTS = { toggle: !0 }, r.prototype.dimension = function () {
		return this.$element.hasClass("width") ? "width" : "height";
	}, r.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var t,
			    e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (t = e.data("bs.collapse")) && t.transitioning)) {
				var i = a.Event("show.bs.collapse");if (this.$element.trigger(i), !i.isDefaultPrevented()) {
					e && e.length && (l.call(e, "hide"), t || e.data("bs.collapse", null));var o = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var n = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
					};if (!a.support.transition) return n.call(this);var s = a.camelCase(["scroll", o].join("-"));this.$element.one("bsTransitionEnd", a.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s]);
				}
			}
		}
	}, r.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var t = a.Event("hide.bs.collapse");if (this.$element.trigger(t), !t.isDefaultPrevented()) {
				var e = this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var i = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
				};if (!a.support.transition) return i.call(this);this.$element[e](0).one("bsTransitionEnd", a.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION);
			}
		}
	}, r.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]();
	}, r.prototype.getParent = function () {
		return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (t, e) {
			var i = a(e);this.addAriaAndCollapsedClass(n(i), i);
		}, this)).end();
	}, r.prototype.addAriaAndCollapsedClass = function (t, e) {
		var i = t.hasClass("in");t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
	};var t = a.fn.collapse;a.fn.collapse = l, a.fn.collapse.Constructor = r, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = t, this;
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
		var e = a(this);e.attr("data-target") || t.preventDefault();var i = n(e),
		    o = i.data("bs.collapse") ? "toggle" : e.data();l.call(i, o);
	});
}(jQuery), function (a) {
	"use strict";
	var r = '[data-toggle="dropdown"]',
	    o = function (t) {
		a(t).on("click.bs.dropdown", this.toggle);
	};function l(t) {
		var e = t.attr("data-target");e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));var i = "#" !== e ? a(document).find(e) : null;return i && i.length ? i : t.parent();
	}function s(o) {
		o && 3 === o.which || (a(".dropdown-backdrop").remove(), a(r).each(function () {
			var t = a(this),
			    e = l(t),
			    i = { relatedTarget: this };e.hasClass("open") && (o && "click" == o.type && /input|textarea/i.test(o.target.tagName) && a.contains(e[0], o.target) || (e.trigger(o = a.Event("hide.bs.dropdown", i)), o.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", i)))));
		}));
	}o.VERSION = "3.4.1", o.prototype.toggle = function (t) {
		var e = a(this);if (!e.is(".disabled, :disabled")) {
			var i = l(e),
			    o = i.hasClass("open");if (s(), !o) {
				"ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", s);var n = { relatedTarget: this };if (i.trigger(t = a.Event("show.bs.dropdown", n)), t.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(a.Event("shown.bs.dropdown", n));
			}return !1;
		}
	}, o.prototype.keydown = function (t) {
		if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
			var e = a(this);if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
				var i = l(e),
				    o = i.hasClass("open");if (!o && 27 != t.which || o && 27 == t.which) return 27 == t.which && i.find(r).trigger("focus"), e.trigger("click");var n = i.find(".dropdown-menu li:not(.disabled):visible a");if (n.length) {
					var s = n.index(t.target);38 == t.which && 0 < s && s--, 40 == t.which && s < n.length - 1 && s++, ~s || (s = 0), n.eq(s).trigger("focus");
				}
			}
		}
	};var t = a.fn.dropdown;a.fn.dropdown = function e(i) {
		return this.each(function () {
			var t = a(this),
			    e = t.data("bs.dropdown");e || t.data("bs.dropdown", e = new o(this)), "string" == typeof i && e[i].call(t);
		});
	}, a.fn.dropdown.Constructor = o, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = t, this;
	}, a(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
		t.stopPropagation();
	}).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown);
}(jQuery), function (a) {
	"use strict";
	var s = function (t, e) {
		this.options = e, this.$body = a(document.body), this.$element = a(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal");
		}, this));
	};function r(o, n) {
		return this.each(function () {
			var t = a(this),
			    e = t.data("bs.modal"),
			    i = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof o && o);e || t.data("bs.modal", e = new s(this, i)), "string" == typeof o ? e[o](n) : i.show && e.show(n);
		});
	}s.VERSION = "3.4.1", s.TRANSITION_DURATION = 300, s.BACKDROP_TRANSITION_DURATION = 150, s.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, s.prototype.toggle = function (t) {
		return this.isShown ? this.hide() : this.show(t);
	}, s.prototype.show = function (i) {
		var o = this,
		    t = a.Event("show.bs.modal", { relatedTarget: i });this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			o.$element.one("mouseup.dismiss.bs.modal", function (t) {
				a(t.target).is(o.$element) && (o.ignoreBackdropClick = !0);
			});
		}), this.backdrop(function () {
			var t = a.support.transition && o.$element.hasClass("fade");o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), t && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();var e = a.Event("shown.bs.modal", { relatedTarget: i });t ? o.$dialog.one("bsTransitionEnd", function () {
				o.$element.trigger("focus").trigger(e);
			}).emulateTransitionEnd(s.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(e);
		}));
	}, s.prototype.hide = function (t) {
		t && t.preventDefault(), t = a.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : this.hideModal());
	}, s.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (t) {
			document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
		}, this));
	}, s.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (t) {
			27 == t.which && this.hide();
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
	}, s.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
	}, s.prototype.hideModal = function () {
		var t = this;this.$element.hide(), this.backdrop(function () {
			t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
		});
	}, s.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
	}, s.prototype.backdrop = function (t) {
		var e = this,
		    i = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
			var o = a.support.transition && i;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (t) {
				this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
			}, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : t();
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");var n = function () {
				e.removeBackdrop(), t && t();
			};a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION) : n();
		} else t && t();
	}, s.prototype.handleUpdate = function () {
		this.adjustDialog();
	}, s.prototype.adjustDialog = function () {
		var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
	}, s.prototype.resetAdjustments = function () {
		this.$element.css({ paddingLeft: "", paddingRight: "" });
	}, s.prototype.checkScrollbar = function () {
		var t = window.innerWidth;if (!t) {
			var e = document.documentElement.getBoundingClientRect();t = e.right - Math.abs(e.left);
		}this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar();
	}, s.prototype.setScrollbar = function () {
		var t = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "";var n = this.scrollbarWidth;this.bodyIsOverflowing && (this.$body.css("padding-right", t + n), a(this.fixedContent).each(function (t, e) {
			var i = e.style.paddingRight,
			    o = a(e).css("padding-right");a(e).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px");
		}));
	}, s.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad), a(this.fixedContent).each(function (t, e) {
			var i = a(e).data("padding-right");a(e).removeData("padding-right"), e.style.paddingRight = i || "";
		});
	}, s.prototype.measureScrollbar = function () {
		var t = document.createElement("div");t.className = "modal-scrollbar-measure", this.$body.append(t);var e = t.offsetWidth - t.clientWidth;return this.$body[0].removeChild(t), e;
	};var t = a.fn.modal;a.fn.modal = r, a.fn.modal.Constructor = s, a.fn.modal.noConflict = function () {
		return a.fn.modal = t, this;
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
		var e = a(this),
		    i = e.attr("href"),
		    o = e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
		    n = a(document).find(o),
		    s = n.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(i) && i }, n.data(), e.data());e.is("a") && t.preventDefault(), n.one("show.bs.modal", function (t) {
			t.isDefaultPrevented() || n.one("hidden.bs.modal", function () {
				e.is(":visible") && e.trigger("focus");
			});
		}), r.call(n, s, this);
	});
}(jQuery), function (g) {
	"use strict";
	var o = ["sanitize", "whiteList", "sanitizeFn"],
	    a = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
	    t = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
	    r = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
	    l = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t, e) {
		var i = t.nodeName.toLowerCase();if (-1 !== g.inArray(i, e)) return -1 === g.inArray(i, a) || Boolean(t.nodeValue.match(r) || t.nodeValue.match(l));for (var o = g(e).filter(function (t, e) {
			return e instanceof RegExp;
		}), n = 0, s = o.length; n < s; n++) if (i.match(o[n])) return !0;return !1;
	}function n(t, e, i) {
		if (0 === t.length) return t;if (i && "function" == typeof i) return i(t);if (!document.implementation || !document.implementation.createHTMLDocument) return t;var o = document.implementation.createHTMLDocument("sanitization");o.body.innerHTML = t;for (var n = g.map(e, function (t, e) {
			return e;
		}), s = g(o.body).find("*"), a = 0, r = s.length; a < r; a++) {
			var l = s[a],
			    h = l.nodeName.toLowerCase();if (-1 !== g.inArray(h, n)) for (var d = g.map(l.attributes, function (t) {
				return t;
			}), p = [].concat(e["*"] || [], e[h] || []), c = 0, f = d.length; c < f; c++) u(d[c], p) || l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l);
		}return o.body.innerHTML;
	}var m = function (t, e) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e);
	};m.VERSION = "3.4.1", m.TRANSITION_DURATION = 150, m.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 }, sanitize: !0, sanitizeFn: null, whiteList: t }, m.prototype.init = function (t, e, i) {
		if (this.enabled = !0, this.type = t, this.$element = g(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && g(document).find(g.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var o = this.options.trigger.split(" "), n = o.length; n--;) {
			var s = o[n];if ("click" == s) this.$element.on("click." + this.type, this.options.selector, g.proxy(this.toggle, this));else if ("manual" != s) {
				var a = "hover" == s ? "mouseenter" : "focusin",
				    r = "hover" == s ? "mouseleave" : "focusout";this.$element.on(a + "." + this.type, this.options.selector, g.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, g.proxy(this.leave, this));
			}
		}this.options.selector ? this._options = g.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
	}, m.prototype.getDefaults = function () {
		return m.DEFAULTS;
	}, m.prototype.getOptions = function (t) {
		var e = this.$element.data();for (var i in e) e.hasOwnProperty(i) && -1 !== g.inArray(i, o) && delete e[i];return (t = g.extend({}, this.getDefaults(), e, t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)), t;
	}, m.prototype.getDelegateOptions = function () {
		var i = {},
		    o = this.getDefaults();return this._options && g.each(this._options, function (t, e) {
			o[t] != e && (i[t] = e);
		}), i;
	}, m.prototype.enter = function (t) {
		var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState) e.hoverState = "in";else {
			if (clearTimeout(e.timeout), e.hoverState = "in", !e.options.delay || !e.options.delay.show) return e.show();e.timeout = setTimeout(function () {
				"in" == e.hoverState && e.show();
			}, e.options.delay.show);
		}
	}, m.prototype.isInStateTrue = function () {
		for (var t in this.inState) if (this.inState[t]) return !0;return !1;
	}, m.prototype.leave = function (t) {
		var e = t instanceof this.constructor ? t : g(t.currentTarget).data("bs." + this.type);if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e)), t instanceof g.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) {
			if (clearTimeout(e.timeout), e.hoverState = "out", !e.options.delay || !e.options.delay.hide) return e.hide();e.timeout = setTimeout(function () {
				"out" == e.hoverState && e.hide();
			}, e.options.delay.hide);
		}
	}, m.prototype.show = function () {
		var t = g.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
			this.$element.trigger(t);var e = g.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (t.isDefaultPrevented() || !e) return;var i = this,
			    o = this.tip(),
			    n = this.getUID(this.type);this.setContent(), o.attr("id", n), this.$element.attr("aria-describedby", n), this.options.animation && o.addClass("fade");var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
			    a = /\s?auto?\s?/i,
			    r = a.test(s);r && (s = s.replace(a, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(g(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var l = this.getPosition(),
			    h = o[0].offsetWidth,
			    d = o[0].offsetHeight;if (r) {
				var p = s,
				    c = this.getPosition(this.$viewport);s = "bottom" == s && l.bottom + d > c.bottom ? "top" : "top" == s && l.top - d < c.top ? "bottom" : "right" == s && l.right + h > c.width ? "left" : "left" == s && l.left - h < c.left ? "right" : s, o.removeClass(p).addClass(s);
			}var f = this.getCalculatedOffset(s, l, h, d);this.applyPlacement(f, s);var u = function () {
				var t = i.hoverState;i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i);
			};g.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", u).emulateTransitionEnd(m.TRANSITION_DURATION) : u();
		}
	}, m.prototype.applyPlacement = function (t, e) {
		var i = this.tip(),
		    o = i[0].offsetWidth,
		    n = i[0].offsetHeight,
		    s = parseInt(i.css("margin-top"), 10),
		    a = parseInt(i.css("margin-left"), 10);isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top += s, t.left += a, g.offset.setOffset(i[0], g.extend({ using: function (t) {
				i.css({ top: Math.round(t.top), left: Math.round(t.left) });
			} }, t), 0), i.addClass("in");var r = i[0].offsetWidth,
		    l = i[0].offsetHeight;"top" == e && l != n && (t.top = t.top + n - l);var h = this.getViewportAdjustedDelta(e, t, r, l);h.left ? t.left += h.left : t.top += h.top;var d = /top|bottom/.test(e),
		    p = d ? 2 * h.left - o + r : 2 * h.top - n + l,
		    c = d ? "offsetWidth" : "offsetHeight";i.offset(t), this.replaceArrow(p, i[0][c], d);
	}, m.prototype.replaceArrow = function (t, e, i) {
		this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "");
	}, m.prototype.setContent = function () {
		var t = this.tip(),
		    e = this.getTitle();this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right");
	}, m.prototype.hide = function (t) {
		var e = this,
		    i = g(this.$tip),
		    o = g.Event("hide.bs." + this.type);function n() {
			"in" != e.hoverState && i.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), t && t();
		}if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), g.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(m.TRANSITION_DURATION) : n(), this.hoverState = null, this;
	}, m.prototype.fixTitle = function () {
		var t = this.$element;(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
	}, m.prototype.hasContent = function () {
		return this.getTitle();
	}, m.prototype.getPosition = function (t) {
		var e = (t = t || this.$element)[0],
		    i = "BODY" == e.tagName,
		    o = e.getBoundingClientRect();null == o.width && (o = g.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));var n = window.SVGElement && e instanceof window.SVGElement,
		    s = i ? { top: 0, left: 0 } : n ? null : t.offset(),
		    a = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop() },
		    r = i ? { width: g(window).width(), height: g(window).height() } : null;return g.extend({}, o, a, r, s);
	}, m.prototype.getCalculatedOffset = function (t, e, i, o) {
		return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - o / 2, left: e.left - i } : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
	}, m.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
		var n = { top: 0, left: 0 };if (!this.$viewport) return n;var s = this.options.viewport && this.options.viewport.padding || 0,
		    a = this.getPosition(this.$viewport);if (/right|left/.test(t)) {
			var r = e.top - s - a.scroll,
			    l = e.top + s - a.scroll + o;r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l);
		} else {
			var h = e.left - s,
			    d = e.left + s + i;h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d);
		}return n;
	}, m.prototype.getTitle = function () {
		var t = this.$element,
		    e = this.options;return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
	}, m.prototype.getUID = function (t) {
		for (; t += ~~(1e6 * Math.random()), document.getElementById(t););return t;
	}, m.prototype.tip = function () {
		if (!this.$tip && (this.$tip = g(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
	}, m.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
	}, m.prototype.enable = function () {
		this.enabled = !0;
	}, m.prototype.disable = function () {
		this.enabled = !1;
	}, m.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled;
	}, m.prototype.toggle = function (t) {
		var e = this;t && ((e = g(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), g(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e);
	}, m.prototype.destroy = function () {
		var t = this;clearTimeout(this.timeout), this.hide(function () {
			t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null;
		});
	}, m.prototype.sanitizeHtml = function (t) {
		return n(t, this.options.whiteList, this.options.sanitizeFn);
	};var e = g.fn.tooltip;g.fn.tooltip = function i(o) {
		return this.each(function () {
			var t = g(this),
			    e = t.data("bs.tooltip"),
			    i = "object" == typeof o && o;!e && /destroy|hide/.test(o) || (e || t.data("bs.tooltip", e = new m(this, i)), "string" == typeof o && e[o]());
		});
	}, g.fn.tooltip.Constructor = m, g.fn.tooltip.noConflict = function () {
		return g.fn.tooltip = e, this;
	};
}(jQuery), function (n) {
	"use strict";
	var s = function (t, e) {
		this.init("popover", t, e);
	};if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");s.VERSION = "3.4.1", s.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), ((s.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function () {
		return s.DEFAULTS;
	}, s.prototype.setContent = function () {
		var t = this.tip(),
		    e = this.getTitle(),
		    i = this.getContent();if (this.options.html) {
			var o = typeof i;this.options.sanitize && (e = this.sanitizeHtml(e), "string" === o && (i = this.sanitizeHtml(i))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === o ? "html" : "append"](i);
		} else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide();
	}, s.prototype.hasContent = function () {
		return this.getTitle() || this.getContent();
	}, s.prototype.getContent = function () {
		var t = this.$element,
		    e = this.options;return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
	}, s.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow");
	};var t = n.fn.popover;n.fn.popover = function e(o) {
		return this.each(function () {
			var t = n(this),
			    e = t.data("bs.popover"),
			    i = "object" == typeof o && o;!e && /destroy|hide/.test(o) || (e || t.data("bs.popover", e = new s(this, i)), "string" == typeof o && e[o]());
		});
	}, n.fn.popover.Constructor = s, n.fn.popover.noConflict = function () {
		return n.fn.popover = t, this;
	};
}(jQuery), function (s) {
	"use strict";
	function n(t, e) {
		this.$body = s(document.body), this.$scrollElement = s(t).is(document.body) ? s(window) : s(t), this.options = s.extend({}, n.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)), this.refresh(), this.process();
	}function e(o) {
		return this.each(function () {
			var t = s(this),
			    e = t.data("bs.scrollspy"),
			    i = "object" == typeof o && o;e || t.data("bs.scrollspy", e = new n(this, i)), "string" == typeof o && e[o]();
		});
	}n.VERSION = "3.4.1", n.DEFAULTS = { offset: 10 }, n.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
	}, n.prototype.refresh = function () {
		var t = this,
		    o = "offset",
		    n = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), s.isWindow(this.$scrollElement[0]) || (o = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var t = s(this),
			    e = t.data("target") || t.attr("href"),
			    i = /^#./.test(e) && s(e);return i && i.length && i.is(":visible") && [[i[o]().top + n, e]] || null;
		}).sort(function (t, e) {
			return t[0] - e[0];
		}).each(function () {
			t.offsets.push(this[0]), t.targets.push(this[1]);
		});
	}, n.prototype.process = function () {
		var t,
		    e = this.$scrollElement.scrollTop() + this.options.offset,
		    i = this.getScrollHeight(),
		    o = this.options.offset + i - this.$scrollElement.height(),
		    n = this.offsets,
		    s = this.targets,
		    a = this.activeTarget;if (this.scrollHeight != i && this.refresh(), o <= e) return a != (t = s[s.length - 1]) && this.activate(t);if (a && e < n[0]) return this.activeTarget = null, this.clear();for (t = n.length; t--;) a != s[t] && e >= n[t] && (n[t + 1] === undefined || e < n[t + 1]) && this.activate(s[t]);
	}, n.prototype.activate = function (t) {
		this.activeTarget = t, this.clear();var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
		    i = s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy");
	}, n.prototype.clear = function () {
		s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
	};var t = s.fn.scrollspy;s.fn.scrollspy = e, s.fn.scrollspy.Constructor = n, s.fn.scrollspy.noConflict = function () {
		return s.fn.scrollspy = t, this;
	}, s(window).on("load.bs.scrollspy.data-api", function () {
		s('[data-spy="scroll"]').each(function () {
			var t = s(this);e.call(t, t.data());
		});
	});
}(jQuery), function (r) {
	"use strict";
	var a = function (t) {
		this.element = r(t);
	};function e(i) {
		return this.each(function () {
			var t = r(this),
			    e = t.data("bs.tab");e || t.data("bs.tab", e = new a(this)), "string" == typeof i && e[i]();
		});
	}a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
		var t = this.element,
		    e = t.closest("ul:not(.dropdown-menu)"),
		    i = t.data("target");if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
			var o = e.find(".active:last a"),
			    n = r.Event("hide.bs.tab", { relatedTarget: t[0] }),
			    s = r.Event("show.bs.tab", { relatedTarget: o[0] });if (o.trigger(n), t.trigger(s), !s.isDefaultPrevented() && !n.isDefaultPrevented()) {
				var a = r(document).find(i);this.activate(t.closest("li"), e), this.activate(a, a.parent(), function () {
					o.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }), t.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
				});
			}
		}
	}, a.prototype.activate = function (t, e, i) {
		var o = e.find("> .active"),
		    n = i && r.support.transition && (o.length && o.hasClass("fade") || !!e.find("> .fade").length);function s() {
			o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), n ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i();
		}o.length && n ? o.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), o.removeClass("in");
	};var t = r.fn.tab;r.fn.tab = e, r.fn.tab.Constructor = a, r.fn.tab.noConflict = function () {
		return r.fn.tab = t, this;
	};var i = function (t) {
		t.preventDefault(), e.call(r(this), "show");
	};r(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i);
}(jQuery), function (l) {
	"use strict";
	var h = function (t, e) {
		this.options = l.extend({}, h.DEFAULTS, e);var i = this.options.target === h.DEFAULTS.target ? l(this.options.target) : l(document).find(this.options.target);this.$target = i.on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
	};function i(o) {
		return this.each(function () {
			var t = l(this),
			    e = t.data("bs.affix"),
			    i = "object" == typeof o && o;e || t.data("bs.affix", e = new h(this, i)), "string" == typeof o && e[o]();
		});
	}h.VERSION = "3.4.1", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = { offset: 0, target: window }, h.prototype.getState = function (t, e, i, o) {
		var n = this.$target.scrollTop(),
		    s = this.$element.offset(),
		    a = this.$target.height();if (null != i && "top" == this.affixed) return n < i && "top";if ("bottom" == this.affixed) return null != i ? !(n + this.unpin <= s.top) && "bottom" : !(n + a <= t - o) && "bottom";var r = null == this.affixed,
		    l = r ? n : s.top;return null != i && n <= i ? "top" : null != o && t - o <= l + (r ? a : e) && "bottom";
	}, h.prototype.getPinnedOffset = function () {
		if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t = this.$target.scrollTop(),
		    e = this.$element.offset();return this.pinnedOffset = e.top - t;
	}, h.prototype.checkPositionWithEventLoop = function () {
		setTimeout(l.proxy(this.checkPosition, this), 1);
	}, h.prototype.checkPosition = function () {
		if (this.$element.is(":visible")) {
			var t = this.$element.height(),
			    e = this.options.offset,
			    i = e.top,
			    o = e.bottom,
			    n = Math.max(l(document).height(), l(document.body).height());"object" != typeof e && (o = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof o && (o = e.bottom(this.$element));var s = this.getState(n, t, i, o);if (this.affixed != s) {
				null != this.unpin && this.$element.css("top", "");var a = "affix" + (s ? "-" + s : ""),
				    r = l.Event(a + ".bs.affix");if (this.$element.trigger(r), r.isDefaultPrevented()) return;this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix", "affixed") + ".bs.affix");
			}"bottom" == s && this.$element.offset({ top: n - t - o });
		}
	};var t = l.fn.affix;l.fn.affix = i, l.fn.affix.Constructor = h, l.fn.affix.noConflict = function () {
		return l.fn.affix = t, this;
	}, l(window).on("load", function () {
		l('[data-spy="affix"]').each(function () {
			var t = l(this),
			    e = t.data();e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e);
		});
	});
}(jQuery);
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery);
}(function (a) {
	var b = function () {
		if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
			if (!b || !b.requirejs) {
				b ? c = b : b = {};var a, c, d;!function (b) {
					function e(a, b) {
						return u.call(a, b);
					}function f(a, b) {
						var c,
						    d,
						    e,
						    f,
						    g,
						    h,
						    i,
						    j,
						    k,
						    l,
						    m,
						    n = b && b.split("/"),
						    o = s.map,
						    p = o && o["*"] || {};if (a && "." === a.charAt(0)) if (b) {
							for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
								if (1 === k && (".." === a[2] || ".." === a[0])) break;k > 0 && (a.splice(k - 1, 2), k -= 2);
							}a = a.join("/");
						} else 0 === a.indexOf("./") && (a = a.substring(2));if ((n || p) && o) {
							for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
								if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
									f = e, h = k;break;
								}if (f) break;!i && p && p[d] && (i = p[d], j = k);
							}!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
						}return a;
					}function g(a, c) {
						return function () {
							var d = v.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c]));
						};
					}function h(a) {
						return function (b) {
							return f(b, a);
						};
					}function i(a) {
						return function (b) {
							q[a] = b;
						};
					}function j(a) {
						if (e(r, a)) {
							var c = r[a];delete r[a], t[a] = !0, m.apply(b, c);
						}if (!e(q, a) && !e(t, a)) throw new Error("No " + a);return q[a];
					}function k(a) {
						var b,
						    c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
					}function l(a) {
						return function () {
							return s && s.config && s.config[a] || {};
						};
					}var m,
					    n,
					    o,
					    p,
					    q = {},
					    r = {},
					    s = {},
					    t = {},
					    u = Object.prototype.hasOwnProperty,
					    v = [].slice,
					    w = /\.js$/;o = function (a, b) {
						var c,
						    d = k(a),
						    e = d[0];return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
					}, p = { require: function (a) {
							return g(a);
						}, exports: function (a) {
							var b = q[a];return "undefined" != typeof b ? b : q[a] = {};
						}, module: function (a) {
							return { id: a, uri: "", exports: q[a], config: l(a) };
						} }, m = function (a, c, d, f) {
						var h,
						    k,
						    l,
						    m,
						    n,
						    s,
						    u = [],
						    v = typeof d;if (f = f || a, "undefined" === v || "function" === v) {
							for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
								if (!m.p) throw new Error(a + " missing " + k);m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
							}l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
						} else a && (q[a] = d);
					}, a = c = n = function (a, c, d, e, f) {
						if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);if (!a.splice) {
							if (s = a, s.deps && n(s.deps, s.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
						}return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
							m(b, a, c, d);
						}, 4), n;
					}, n.config = function (a) {
						return n(a);
					}, a._defined = q, d = function (a, b, c) {
						if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
					}, d.amd = { jQuery: !0 };
				}(), b.requirejs = a, b.require = c, b.define = d;
			}
		}(), b.define("almond", function () {}), b.define("jquery", [], function () {
			var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
		}), b.define("select2/utils", ["jquery"], function (a) {
			function b(a) {
				var b = a.prototype,
				    c = [];for (var d in b) {
					var e = b[d];"function" == typeof e && "constructor" !== d && c.push(d);
				}return c;
			}var c = {};c.Extend = function (a, b) {
				function c() {
					this.constructor = a;
				}var d = {}.hasOwnProperty;for (var e in b) d.call(b, e) && (a[e] = b[e]);return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
			}, c.Decorate = function (a, c) {
				function d() {
					var b = Array.prototype.unshift,
					    d = c.prototype.constructor.length,
					    e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
				}function e() {
					this.constructor = d;
				}var f = b(c),
				    g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
					var i = g[h];d.prototype[i] = a.prototype[i];
				}for (var j = function (a) {
					var b = function () {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
						var a = Array.prototype.unshift;return a.call(arguments, b), e.apply(this, arguments);
					};
				}, k = 0; k < f.length; k++) {
					var l = f[k];d.prototype[l] = j(l);
				}return d;
			};var d = function () {
				this.listeners = {};
			};return d.prototype.on = function (a, b) {
				this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
			}, d.prototype.trigger = function (a) {
				var b = Array.prototype.slice,
				    c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
			}, d.prototype.invoke = function (a, b) {
				for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b);
			}, c.Observable = d, c.generateChars = function (a) {
				for (var b = "", c = 0; a > c; c++) {
					var d = Math.floor(36 * Math.random());b += d.toString(36);
				}return b;
			}, c.bind = function (a, b) {
				return function () {
					a.apply(b, arguments);
				};
			}, c._convertData = function (a) {
				for (var b in a) {
					var c = b.split("-"),
					    d = a;if (1 !== c.length) {
						for (var e = 0; e < c.length; e++) {
							var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
						}delete a[b];
					}
				}return a;
			}, c.hasScroll = function (b, c) {
				var d = a(c),
				    e = c.style.overflowX,
				    f = c.style.overflowY;return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
			}, c.escapeMarkup = function (a) {
				var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
					return b[a];
				});
			}, c.appendMany = function (b, c) {
				if ("1.7" === a.fn.jquery.substr(0, 3)) {
					var d = a();a.map(c, function (a) {
						d = d.add(a);
					}), c = d;
				}b.append(c);
			}, c;
		}), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
			function c(a, b, d) {
				this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
			}return b.Extend(c, b.Observable), c.prototype.render = function () {
				var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
			}, c.prototype.clear = function () {
				this.$results.empty();
			}, c.prototype.displayMessage = function (b) {
				var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
				    e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
			}, c.prototype.hideMessages = function () {
				this.$results.find(".select2-results__message").remove();
			}, c.prototype.append = function (a) {
				this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
					var d = a.results[c],
					    e = this.option(d);b.push(e);
				}this.$results.append(b);
			}, c.prototype.position = function (a, b) {
				var c = b.find(".select2-results");c.append(a);
			}, c.prototype.sort = function (a) {
				var b = this.options.get("sorter");return b(a);
			}, c.prototype.highlightFirstItem = function () {
				var a = this.$results.find(".select2-results__option[aria-selected]"),
				    b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
			}, c.prototype.setClasses = function () {
				var b = this;this.data.current(function (c) {
					var d = a.map(c, function (a) {
						return a.id.toString();
					}),
					    e = b.$results.find(".select2-results__option[aria-selected]");e.each(function () {
						var b = a(this),
						    c = a.data(this, "data"),
						    e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
					});
				});
			}, c.prototype.showLoading = function (a) {
				this.hideLoading();var b = this.options.get("translations").get("searching"),
				    c = { disabled: !0, loading: !0, text: b(a) },
				    d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
			}, c.prototype.hideLoading = function () {
				this.$results.find(".loading-results").remove();
			}, c.prototype.option = function (b) {
				var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
					var f = d[e];c.setAttribute(e, f);
				}if (b.children) {
					var g = a(c),
					    h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
						var k = b.children[j],
						    l = this.option(k);i.push(l);
					}var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
				} else this.template(b, c);return a.data(c, "data", b), c;
			}, c.prototype.bind = function (b, c) {
				var d = this,
				    e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
					d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
				}), b.on("results:append", function (a) {
					d.append(a.data), b.isOpen() && d.setClasses();
				}), b.on("query", function (a) {
					d.hideMessages(), d.showLoading(a);
				}), b.on("select", function () {
					b.isOpen() && (d.setClasses(), d.highlightFirstItem());
				}), b.on("unselect", function () {
					b.isOpen() && (d.setClasses(), d.highlightFirstItem());
				}), b.on("open", function () {
					d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
				}), b.on("close", function () {
					d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
				}), b.on("results:toggle", function () {
					var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
				}), b.on("results:select", function () {
					var a = d.getHighlightedResults();if (0 !== a.length) {
						var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
					}
				}), b.on("results:previous", function () {
					var a = d.getHighlightedResults(),
					    b = d.$results.find("[aria-selected]"),
					    c = b.index(a);if (0 !== c) {
						var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
						    h = f.offset().top,
						    i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
					}
				}), b.on("results:next", function () {
					var a = d.getHighlightedResults(),
					    b = d.$results.find("[aria-selected]"),
					    c = b.index(a),
					    e = c + 1;if (!(e >= b.length)) {
						var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
						    h = f.offset().top + f.outerHeight(!1),
						    i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
					}
				}), b.on("results:focus", function (a) {
					a.element.addClass("select2-results__option--highlighted");
				}), b.on("results:message", function (a) {
					d.displayMessage(a);
				}), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
					var b = d.$results.scrollTop(),
					    c = d.$results.get(0).scrollHeight - b + a.deltaY,
					    e = a.deltaY > 0 && b - a.deltaY <= 0,
					    f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
				}), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
					var c = a(this),
					    e = c.data("data");return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e });
				}), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
					var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
				});
			}, c.prototype.getHighlightedResults = function () {
				var a = this.$results.find(".select2-results__option--highlighted");return a;
			}, c.prototype.destroy = function () {
				this.$results.remove();
			}, c.prototype.ensureHighlightVisible = function () {
				var a = this.getHighlightedResults();if (0 !== a.length) {
					var b = this.$results.find("[aria-selected]"),
					    c = b.index(a),
					    d = this.$results.offset().top,
					    e = a.offset().top,
					    f = this.$results.scrollTop() + (e - d),
					    g = e - d;f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
				}
			}, c.prototype.template = function (b, c) {
				var d = this.options.get("templateResult"),
				    e = this.options.get("escapeMarkup"),
				    f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
			}, c;
		}), b.define("select2/keys", [], function () {
			var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };return a;
		}), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
			function d(a, b) {
				this.$element = a, this.options = b, d.__super__.constructor.call(this);
			}return b.Extend(d, b.Observable), d.prototype.render = function () {
				var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
			}, d.prototype.bind = function (a, b) {
				var d = this,
				    e = (a.id + "-container", a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
					d.trigger("focus", a);
				}), this.$selection.on("blur", function (a) {
					d._handleBlur(a);
				}), this.$selection.on("keydown", function (a) {
					d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
				}), a.on("results:focus", function (a) {
					d.$selection.attr("aria-activedescendant", a.data._resultId);
				}), a.on("selection:update", function (a) {
					d.update(a.data);
				}), a.on("open", function () {
					d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
				}), a.on("close", function () {
					d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
				}), a.on("enable", function () {
					d.$selection.attr("tabindex", d._tabindex);
				}), a.on("disable", function () {
					d.$selection.attr("tabindex", "-1");
				});
			}, d.prototype._handleBlur = function (b) {
				var c = this;window.setTimeout(function () {
					document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
				}, 1);
			}, d.prototype._attachCloseHandler = function (b) {
				a(document.body).on("mousedown.select2." + b.id, function (b) {
					var c = a(b.target),
					    d = c.closest(".select2"),
					    e = a(".select2.select2-container--open");e.each(function () {
						var b = a(this);if (this != d[0]) {
							var c = b.data("element");c.select2("close");
						}
					});
				});
			}, d.prototype._detachCloseHandler = function (b) {
				a(document.body).off("mousedown.select2." + b.id);
			}, d.prototype.position = function (a, b) {
				var c = b.find(".selection");c.append(a);
			}, d.prototype.destroy = function () {
				this._detachCloseHandler(this.container);
			}, d.prototype.update = function (a) {
				throw new Error("The `update` method must be defined in child classes.");
			}, d;
		}), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
			function e() {
				e.__super__.constructor.apply(this, arguments);
			}return c.Extend(e, b), e.prototype.render = function () {
				var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
			}, e.prototype.bind = function (a, b) {
				var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
					1 === a.which && c.trigger("toggle", { originalEvent: a });
				}), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
					a.isOpen() || c.$selection.focus();
				}), a.on("selection:update", function (a) {
					c.update(a.data);
				});
			}, e.prototype.clear = function () {
				this.$selection.find(".select2-selection__rendered").empty();
			}, e.prototype.display = function (a, b) {
				var c = this.options.get("templateSelection"),
				    d = this.options.get("escapeMarkup");return d(c(a, b));
			}, e.prototype.selectionContainer = function () {
				return a("<span></span>");
			}, e.prototype.update = function (a) {
				if (0 === a.length) return void this.clear();var b = a[0],
				    c = this.$selection.find(".select2-selection__rendered"),
				    d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
			}, e;
		}), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
			function d(a, b) {
				d.__super__.constructor.apply(this, arguments);
			}return c.Extend(d, b), d.prototype.render = function () {
				var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
			}, d.prototype.bind = function (b, c) {
				var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
					e.trigger("toggle", { originalEvent: a });
				}), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
					if (!e.options.get("disabled")) {
						var c = a(this),
						    d = c.parent(),
						    f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
					}
				});
			}, d.prototype.clear = function () {
				this.$selection.find(".select2-selection__rendered").empty();
			}, d.prototype.display = function (a, b) {
				var c = this.options.get("templateSelection"),
				    d = this.options.get("escapeMarkup");return d(c(a, b));
			}, d.prototype.selectionContainer = function () {
				var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b;
			}, d.prototype.update = function (a) {
				if (this.clear(), 0 !== a.length) {
					for (var b = [], d = 0; d < a.length; d++) {
						var e = a[d],
						    f = this.selectionContainer(),
						    g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
					}var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
				}
			}, d;
		}), b.define("select2/selection/placeholder", ["../utils"], function (a) {
			function b(a, b, c) {
				this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
			}return b.prototype.normalizePlaceholder = function (a, b) {
				return "string" == typeof b && (b = { id: "", text: b }), b;
			}, b.prototype.createPlaceholder = function (a, b) {
				var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
			}, b.prototype.update = function (a, b) {
				var c = 1 == b.length && b[0].id != this.placeholder.id,
				    d = b.length > 1;if (d || c) return a.call(this, b);this.clear();var e = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e);
			}, b;
		}), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
			function c() {}return c.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
					d._handleClear(a);
				}), b.on("keypress", function (a) {
					d._handleKeyboardClear(a, b);
				});
			}, c.prototype._handleClear = function (a, b) {
				if (!this.options.get("disabled")) {
					var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
						b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
							var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
						}this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
					}
				}
			}, c.prototype._handleKeyboardClear = function (a, c, d) {
				d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
			}, c.prototype.update = function (b, c) {
				if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
					var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
				}
			}, c;
		}), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
			function d(a, b, c) {
				a.call(this, b, c);
			}return d.prototype.render = function (b) {
				var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
			}, d.prototype.bind = function (a, b, d) {
				var e = this;a.call(this, b, d), b.on("open", function () {
					e.$search.trigger("focus");
				}), b.on("close", function () {
					e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
				}), b.on("enable", function () {
					e.$search.prop("disabled", !1), e._transferTabIndex();
				}), b.on("disable", function () {
					e.$search.prop("disabled", !0);
				}), b.on("focus", function (a) {
					e.$search.trigger("focus");
				}), b.on("results:focus", function (a) {
					e.$search.attr("aria-activedescendant", a.id);
				}), this.$selection.on("focusin", ".select2-search--inline", function (a) {
					e.trigger("focus", a);
				}), this.$selection.on("focusout", ".select2-search--inline", function (a) {
					e._handleBlur(a);
				}), this.$selection.on("keydown", ".select2-search--inline", function (a) {
					a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();var b = a.which;if (b === c.BACKSPACE && "" === e.$search.val()) {
						var d = e.$searchContainer.prev(".select2-selection__choice");if (d.length > 0) {
							var f = d.data("data");e.searchRemoveChoice(f), a.preventDefault();
						}
					}
				});var f = document.documentMode,
				    g = f && 11 >= f;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
					return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
				}), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
					if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
				});
			}, d.prototype._transferTabIndex = function (a) {
				this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
			}, d.prototype.createPlaceholder = function (a, b) {
				this.$search.attr("placeholder", b.text);
			}, d.prototype.update = function (a, b) {
				var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
			}, d.prototype.handleSearch = function () {
				if (this.resizeSearch(), !this._keyUpPrevented) {
					var a = this.$search.val();this.trigger("query", { term: a });
				}this._keyUpPrevented = !1;
			}, d.prototype.searchRemoveChoice = function (a, b) {
				this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
			}, d.prototype.resizeSearch = function () {
				this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
					var b = this.$search.val().length + 1;a = .75 * b + "em";
				}this.$search.css("width", a);
			}, d;
		}), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
			function b() {}return b.prototype.bind = function (b, c, d) {
				var e = this,
				    f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
				    g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
					if (-1 !== a.inArray(b, f)) {
						c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
					}
				});
			}, b;
		}), b.define("select2/translation", ["jquery", "require"], function (a, b) {
			function c(a) {
				this.dict = a || {};
			}return c.prototype.all = function () {
				return this.dict;
			}, c.prototype.get = function (a) {
				return this.dict[a];
			}, c.prototype.extend = function (b) {
				this.dict = a.extend({}, b.all(), this.dict);
			}, c._cache = {}, c.loadPath = function (a) {
				if (!(a in c._cache)) {
					var d = b(a);c._cache[a] = d;
				}return new c(c._cache[a]);
			}, c;
		}), b.define("select2/diacritics", [], function () {
			var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };return a;
		}), b.define("select2/data/base", ["../utils"], function (a) {
			function b(a, c) {
				b.__super__.constructor.call(this);
			}return a.Extend(b, a.Observable), b.prototype.current = function (a) {
				throw new Error("The `current` method must be defined in child classes.");
			}, b.prototype.query = function (a, b) {
				throw new Error("The `query` method must be defined in child classes.");
			}, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
				var d = b.id + "-result-";return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
			}, b;
		}), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				this.$element = a, this.options = b, d.__super__.constructor.call(this);
			}return b.Extend(d, a), d.prototype.current = function (a) {
				var b = [],
				    d = this;this.$element.find(":selected").each(function () {
					var a = c(this),
					    e = d.item(a);b.push(e);
				}), a(b);
			}, d.prototype.select = function (a) {
				var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
				if (this.$element.prop("multiple")) this.current(function (d) {
					var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
						var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
					}b.$element.val(e), b.$element.trigger("change");
				});else {
					var d = a.id;this.$element.val(d), this.$element.trigger("change");
				}
			}, d.prototype.unselect = function (a) {
				var b = this;if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
					for (var e = [], f = 0; f < d.length; f++) {
						var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
					}b.$element.val(e), b.$element.trigger("change");
				});
			}, d.prototype.bind = function (a, b) {
				var c = this;this.container = a, a.on("select", function (a) {
					c.select(a.data);
				}), a.on("unselect", function (a) {
					c.unselect(a.data);
				});
			}, d.prototype.destroy = function () {
				this.$element.find("*").each(function () {
					c.removeData(this, "data");
				});
			}, d.prototype.query = function (a, b) {
				var d = [],
				    e = this,
				    f = this.$element.children();f.each(function () {
					var b = c(this);if (b.is("option") || b.is("optgroup")) {
						var f = e.item(b),
						    g = e.matches(a, f);null !== g && d.push(g);
					}
				}), b({ results: d });
			}, d.prototype.addOptions = function (a) {
				b.appendMany(this.$element, a);
			}, d.prototype.option = function (a) {
				var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
				    e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
			}, d.prototype.item = function (a) {
				var b = {};if (b = c.data(a[0], "data"), null != b) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
					b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
						var g = c(d[f]),
						    h = this.item(g);e.push(h);
					}b.children = e;
				}return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
			}, d.prototype._normalizeItem = function (a) {
				c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
			}, d.prototype.matches = function (a, b) {
				var c = this.options.get("matcher");return c(a, b);
			}, d;
		}), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
			}return b.Extend(d, a), d.prototype.select = function (a) {
				var b = this.$element.find("option").filter(function (b, c) {
					return c.value == a.id.toString();
				});0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
			}, d.prototype.convertToOptions = function (a) {
				function d(a) {
					return function () {
						return c(this).val() == a.id;
					};
				}for (var e = this, f = this.$element.find("option"), g = f.map(function () {
					return e.item(c(this)).id;
				}).get(), h = [], i = 0; i < a.length; i++) {
					var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
						var k = f.filter(d(j)),
						    l = this.item(k),
						    m = c.extend(!0, {}, j, l),
						    n = this.option(m);k.replaceWith(n);
					} else {
						var o = this.option(j);if (j.children) {
							var p = this.convertToOptions(j.children);b.appendMany(o, p);
						}h.push(o);
					}
				}return h;
			}, d;
		}), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
			function d(a, b) {
				this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
			}return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
				var b = { data: function (a) {
						return c.extend({}, a, { q: a.term });
					}, transport: function (a, b, d) {
						var e = c.ajax(a);return e.then(b), e.fail(d), e;
					} };return c.extend({}, b, a, !0);
			}, d.prototype.processResults = function (a) {
				return a;
			}, d.prototype.query = function (a, b) {
				function d() {
					var d = f.transport(f, function (d) {
						var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
					}, function () {
						d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
					});e._request = d;
				}var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
			}, d;
		}), b.define("select2/data/tags", ["jquery"], function (a) {
			function b(b, c, d) {
				var e = d.get("tags"),
				    f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
					var i = e[h],
					    j = this._normalizeItem(i),
					    k = this.option(j);this.$element.append(k);
				}
			}return b.prototype.query = function (a, b, c) {
				function d(a, f) {
					for (var g = a.results, h = 0; h < g.length; h++) {
						var i = g[h],
						    j = null != i.children && !d({ results: i.children }, !0),
						    k = i.text === b.term;if (k || j) return f ? !1 : (a.data = g, void c(a));
					}if (f) return !0;var l = e.createTag(b);if (null != l) {
						var m = e.option(l);m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
					}a.results = g, c(a);
				}var e = this;return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
			}, b.prototype.createTag = function (b, c) {
				var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
			}, b.prototype.insertTag = function (a, b, c) {
				b.unshift(c);
			}, b.prototype._removeOldTags = function (b) {
				var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));c.each(function () {
					this.selected || a(this).remove();
				});
			}, b;
		}), b.define("select2/data/tokenizer", ["jquery"], function (a) {
			function b(a, b, c) {
				var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
			}return b.prototype.bind = function (a, b, c) {
				a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
			}, b.prototype.query = function (b, c, d) {
				function e(b) {
					var c = g._normalizeItem(b),
					    d = g.$element.find("option").filter(function () {
						return a(this).val() === c.id;
					});if (!d.length) {
						var e = g.option(c);e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]);
					}f(c);
				}function f(a) {
					g.trigger("select", { data: a });
				}var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
			}, b.prototype.tokenizer = function (b, c, d, e) {
				for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
					return { id: a.term, text: a.term };
				}; h < g.length;) {
					var j = g[h];if (-1 !== a.inArray(j, f)) {
						var k = g.substr(0, h),
						    l = a.extend({}, c, { term: k }),
						    m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
					} else h++;
				}return { term: g };
			}, b;
		}), b.define("select2/data/minimumInputLength", [], function () {
			function a(a, b, c) {
				this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
			}, a;
		}), b.define("select2/data/maximumInputLength", [], function () {
			function a(a, b, c) {
				this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
			}, a;
		}), b.define("select2/data/maximumSelectionLength", [], function () {
			function a(a, b, c) {
				this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
			}return a.prototype.query = function (a, b, c) {
				var d = this;this.current(function (e) {
					var f = null != e ? e.length : 0;return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c);
				});
			}, a;
		}), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
			function c(a, b) {
				this.$element = a, this.options = b, c.__super__.constructor.call(this);
			}return b.Extend(c, b.Observable), c.prototype.render = function () {
				var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
			}, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
				this.$dropdown.remove();
			}, c;
		}), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
			function c() {}return c.prototype.render = function (b) {
				var c = b.call(this),
				    d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
			}, c.prototype.bind = function (b, c, d) {
				var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
					e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
				}), this.$search.on("input", function (b) {
					a(this).off("keyup");
				}), this.$search.on("keyup input", function (a) {
					e.handleSearch(a);
				}), c.on("open", function () {
					e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
						e.$search.focus();
					}, 0);
				}), c.on("close", function () {
					e.$search.attr("tabindex", -1), e.$search.val("");
				}), c.on("focus", function () {
					c.isOpen() && e.$search.focus();
				}), c.on("results:all", function (a) {
					if (null == a.query.term || "" === a.query.term) {
						var b = e.showSearch(a);b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
					}
				});
			}, c.prototype.handleSearch = function (a) {
				if (!this._keyUpPrevented) {
					var b = this.$search.val();this.trigger("query", { term: b });
				}this._keyUpPrevented = !1;
			}, c.prototype.showSearch = function (a, b) {
				return !0;
			}, c;
		}), b.define("select2/dropdown/hidePlaceholder", [], function () {
			function a(a, b, c, d) {
				this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
			}return a.prototype.append = function (a, b) {
				b.results = this.removePlaceholder(b.results), a.call(this, b);
			}, a.prototype.normalizePlaceholder = function (a, b) {
				return "string" == typeof b && (b = { id: "", text: b }), b;
			}, a.prototype.removePlaceholder = function (a, b) {
				for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
					var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
				}return c;
			}, a;
		}), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
			function b(a, b, c, d) {
				this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
			}return b.prototype.append = function (a, b) {
				this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
			}, b.prototype.bind = function (b, c, d) {
				var e = this;b.call(this, c, d), c.on("query", function (a) {
					e.lastParams = a, e.loading = !0;
				}), c.on("query:append", function (a) {
					e.lastParams = a, e.loading = !0;
				}), this.$results.on("scroll", function () {
					var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
						var c = e.$results.offset().top + e.$results.outerHeight(!1),
						    d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);c + 50 >= d && e.loadMore();
					}
				});
			}, b.prototype.loadMore = function () {
				this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
			}, b.prototype.showLoadingMore = function (a, b) {
				return b.pagination && b.pagination.more;
			}, b.prototype.createLoadingMore = function () {
				var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
				    c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
			}, b;
		}), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
			function c(b, c, d) {
				this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
			}return c.prototype.bind = function (a, b, c) {
				var d = this,
				    e = !1;a.call(this, b, c), b.on("open", function () {
					d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
						d._positionDropdown(), d._resizeDropdown();
					}), b.on("results:append", function () {
						d._positionDropdown(), d._resizeDropdown();
					}));
				}), b.on("close", function () {
					d._hideDropdown(), d._detachPositioningHandler(b);
				}), this.$dropdownContainer.on("mousedown", function (a) {
					a.stopPropagation();
				});
			}, c.prototype.destroy = function (a) {
				a.call(this), this.$dropdownContainer.remove();
			}, c.prototype.position = function (a, b, c) {
				b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
			}, c.prototype.render = function (b) {
				var c = a("<span></span>"),
				    d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
			}, c.prototype._hideDropdown = function (a) {
				this.$dropdownContainer.detach();
			}, c.prototype._attachPositioningHandler = function (c, d) {
				var e = this,
				    f = "scroll.select2." + d.id,
				    g = "resize.select2." + d.id,
				    h = "orientationchange.select2." + d.id,
				    i = this.$container.parents().filter(b.hasScroll);i.each(function () {
					a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
				}), i.on(f, function (b) {
					var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
				}), a(window).on(f + " " + g + " " + h, function (a) {
					e._positionDropdown(), e._resizeDropdown();
				});
			}, c.prototype._detachPositioningHandler = function (c, d) {
				var e = "scroll.select2." + d.id,
				    f = "resize.select2." + d.id,
				    g = "orientationchange.select2." + d.id,
				    h = this.$container.parents().filter(b.hasScroll);h.off(e), a(window).off(e + " " + f + " " + g);
			}, c.prototype._positionDropdown = function () {
				var b = a(window),
				    c = this.$dropdown.hasClass("select2-dropdown--above"),
				    d = this.$dropdown.hasClass("select2-dropdown--below"),
				    e = null,
				    f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
				    i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
				    j = i.top < f.top - h.height,
				    k = i.bottom > f.bottom + h.height,
				    l = { left: f.left, top: g.bottom },
				    m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
			}, c.prototype._resizeDropdown = function () {
				var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
			}, c.prototype._showDropdown = function (a) {
				this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
			}, c;
		}), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
			function a(b) {
				for (var c = 0, d = 0; d < b.length; d++) {
					var e = b[d];e.children ? c += a(e.children) : c++;
				}return c;
			}function b(a, b, c, d) {
				this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
			}return b.prototype.showSearch = function (b, c) {
				return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
			}, b;
		}), b.define("select2/dropdown/selectOnClose", [], function () {
			function a() {}return a.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), b.on("close", function (a) {
					d._handleSelectOnClose(a);
				});
			}, a.prototype._handleSelectOnClose = function (a, b) {
				if (b && null != b.originalSelect2Event) {
					var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
				}var d = this.getHighlightedResults();if (!(d.length < 1)) {
					var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
				}
			}, a;
		}), b.define("select2/dropdown/closeOnSelect", [], function () {
			function a() {}return a.prototype.bind = function (a, b, c) {
				var d = this;a.call(this, b, c), b.on("select", function (a) {
					d._selectTriggered(a);
				}), b.on("unselect", function (a) {
					d._selectTriggered(a);
				});
			}, a.prototype._selectTriggered = function (a, b) {
				var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
			}, a;
		}), b.define("select2/i18n/en", [], function () {
			return { errorLoading: function () {
					return "The results could not be loaded.";
				}, inputTooLong: function (a) {
					var b = a.input.length - a.maximum,
					    c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
				}, inputTooShort: function (a) {
					var b = a.minimum - a.input.length,
					    c = "Please enter " + b + " or more characters";return c;
				}, loadingMore: function () {
					return "Loading more results…";
				}, maximumSelected: function (a) {
					var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
				}, noResults: function () {
					return "No results found";
				}, searching: function () {
					return "Searching…";
				} };
		}), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
			function D() {
				this.reset();
			}D.prototype.apply = function (l) {
				if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
					if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
						var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
					}if (null != l.initSelection) {
						var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
					}
				}if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
					if (l.multiple) l.dropdownAdapter = u;else {
						var E = j.Decorate(u, v);l.dropdownAdapter = E;
					}if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
						var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
					}l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
				}if (null == l.selectionAdapter) {
					if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
						var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
					}l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
				}if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
					var H = l.language.split("-"),
					    I = H[0];l.language = [l.language, I];
				} else l.language = [l.language];if (a.isArray(l.language)) {
					var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
						var M = K[L],
						    N = {};try {
							N = k.loadPath(M);
						} catch (O) {
							try {
								M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
							} catch (P) {
								l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
							}
						}J.extend(N);
					}l.translations = J;
				} else {
					var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
					    R = new k(l.language);R.extend(Q), l.translations = R;
				}return l;
			}, D.prototype.reset = function () {
				function b(a) {
					function b(a) {
						return l[a] || a;
					}return a.replace(/[^\u0000-\u007E]/g, b);
				}function c(d, e) {
					if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
						for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
							var h = e.children[g],
							    i = c(d, h);null == i && f.children.splice(g, 1);
						}return f.children.length > 0 ? f : c(d, f);
					}var j = b(e.text).toUpperCase(),
					    k = b(d.term).toUpperCase();return j.indexOf(k) > -1 ? e : null;
				}this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function (a) {
						return a;
					}, templateResult: function (a) {
						return a.text;
					}, templateSelection: function (a) {
						return a.text;
					}, theme: "default", width: "resolve" };
			}, D.prototype.set = function (b, c) {
				var d = a.camelCase(b),
				    e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
			};var E = new D();return E;
		}), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
			function e(b, e) {
				if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
					var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
				}
			}return e.prototype.fromElement = function (a) {
				var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);return this;
			}, e.prototype.get = function (a) {
				return this.options[a];
			}, e.prototype.set = function (a, b) {
				this.options[a] = b;
			}, e;
		}), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
			var e = function (a, c) {
				null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
					k.trigger("selection:update", { data: a });
				}), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
			};return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
				var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
			}, e.prototype._placeContainer = function (a) {
				a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
			}, e.prototype._resolveWidth = function (a, b) {
				var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
					var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
				}if ("element" == b) {
					var e = a.outerWidth(!1);return 0 >= e ? "auto" : e + "px";
				}if ("style" == b) {
					var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
						var j = g[h].replace(/\s/g, ""),
						    k = j.match(c);if (null !== k && k.length >= 1) return k[1];
					}return null;
				}return b;
			}, e.prototype._bindAdapters = function () {
				this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
			}, e.prototype._registerDomEvents = function () {
				var b = this;this.$element.on("change.select2", function () {
					b.dataAdapter.current(function (a) {
						b.trigger("selection:update", { data: a });
					});
				}), this.$element.on("focus.select2", function (a) {
					b.trigger("focus", a);
				}), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
					a.each(c, b._syncA), a.each(c, b._syncS);
				}), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
			}, e.prototype._registerDataEvents = function () {
				var a = this;this.dataAdapter.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerSelectionEvents = function () {
				var b = this,
				    c = ["toggle", "focus"];this.selection.on("toggle", function () {
					b.toggleDropdown();
				}), this.selection.on("focus", function (a) {
					b.focus(a);
				}), this.selection.on("*", function (d, e) {
					-1 === a.inArray(d, c) && b.trigger(d, e);
				});
			}, e.prototype._registerDropdownEvents = function () {
				var a = this;this.dropdown.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerResultsEvents = function () {
				var a = this;this.results.on("*", function (b, c) {
					a.trigger(b, c);
				});
			}, e.prototype._registerEvents = function () {
				var a = this;this.on("open", function () {
					a.$container.addClass("select2-container--open");
				}), this.on("close", function () {
					a.$container.removeClass("select2-container--open");
				}), this.on("enable", function () {
					a.$container.removeClass("select2-container--disabled");
				}), this.on("disable", function () {
					a.$container.addClass("select2-container--disabled");
				}), this.on("blur", function () {
					a.$container.removeClass("select2-container--focus");
				}), this.on("query", function (b) {
					a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
						a.trigger("results:all", { data: c, query: b });
					});
				}), this.on("query:append", function (b) {
					this.dataAdapter.query(b, function (c) {
						a.trigger("results:append", { data: c, query: b });
					});
				}), this.on("keypress", function (b) {
					var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
				});
			}, e.prototype._syncAttributes = function () {
				this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
			}, e.prototype._syncSubtree = function (a, b) {
				var c = !1,
				    d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
					if (b) {
						if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
							var f = b.addedNodes[e];f.selected && (c = !0);
						} else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
					} else c = !0;c && this.dataAdapter.current(function (a) {
						d.trigger("selection:update", { data: a });
					});
				}
			}, e.prototype.trigger = function (a, b) {
				var c = e.__super__.trigger,
				    d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
					var f = d[a],
					    g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
				}c.call(this, a, b);
			}, e.prototype.toggleDropdown = function () {
				this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
			}, e.prototype.open = function () {
				this.isOpen() || this.trigger("query", {});
			}, e.prototype.close = function () {
				this.isOpen() && this.trigger("close", {});
			}, e.prototype.isOpen = function () {
				return this.$container.hasClass("select2-container--open");
			}, e.prototype.hasFocus = function () {
				return this.$container.hasClass("select2-container--focus");
			}, e.prototype.focus = function (a) {
				this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
			}, e.prototype.enable = function (a) {
				this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
			}, e.prototype.data = function () {
				this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
					a = b;
				}), a;
			}, e.prototype.val = function (b) {
				if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
					return a.toString();
				})), this.$element.val(c).trigger("change");
			}, e.prototype.destroy = function () {
				this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
			}, e.prototype.render = function () {
				var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
			}, e;
		}), b.define("jquery-mousewheel", ["jquery"], function (a) {
			return a;
		}), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
			if (null == a.fn.select2) {
				var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
					if (b = b || {}, "object" == typeof b) return this.each(function () {
						var d = a.extend(!0, {}, b);new c(a(this), d);
					}), this;if ("string" == typeof b) {
						var d,
						    f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
							var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
						}), a.inArray(b, e) > -1 ? this : d;
					}throw new Error("Invalid arguments for Select2: " + b);
				};
			}return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
		}), { define: b.define, require: b.require };
	}(),
	    c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});