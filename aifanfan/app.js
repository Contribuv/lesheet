!
function(e) {
	function t() {
		var t = a.getBoundingClientRect().width;
		t / n > 640 && (t = 640 * n),
		e.rem = t / 10,
		a.style.fontSize = e.rem + "px"
	}
	if (document.body.clientWidth < 769) {
		var n, r, i, o = e.document,
		a = o.documentElement,
		s = o.querySelector('meta[name="viewport"]'),
		c = o.querySelector('meta[name="flexible"]');
		if (s) {
			var l = s.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
			l && (r = parseFloat(l[2]), n = parseInt(1 / r))
		} else if (c) {
			var l = c.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);
			l && (n = parseFloat(l[2]), r = parseFloat((1 / n).toFixed(2)))
		}
		if (!n && !r) {
			var u = (e.navigator.appVersion.match(/android/gi), e.navigator.appVersion.match(/iphone/gi)),
			n = e.devicePixelRatio;
			n = u ? n >= 3 ? 3 : n >= 2 ? 2 : 1 : 1,
			r = 1 / n
		}
		if (a.setAttribute("data-dpr", n), !s) if (s = o.createElement("meta"), s.setAttribute("name", "viewport"), s.setAttribute("content", "initial-scale=" + r + ", maximum-scale=" + r + ", minimum-scale=" + r + ", user-scalable=no"), a.firstElementChild) a.firstElementChild.appendChild(s);
		else {
			var f = o.createElement("div");
			f.appendChild(s),
			o.write(f.innerHTML)
		}
		e.dpr = n,
		e.addEventListener("resize",
		function() {
			clearTimeout(i),
			i = setTimeout(t, 300)
		},
		!1),
		e.addEventListener("pageshow",
		function(e) {
			e.persisted && (clearTimeout(i), i = setTimeout(t, 300))
		},
		!1),
		"complete" === o.readyState ? o.body.style.fontSize = 12 * n + "px": o.addEventListener("DOMContentLoaded",
		function() {
			o.body.style.fontSize = 12 * n + "px"
		},
		!1),
		t()
	}
} (window),
!
function(e, t) {
	function n(e) {
		var t = e.length,
		n = ct.type(e);
		return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	function r(e) {
		var t = kt[e] = {};
		return ct.each(e.match(ut) || [],
		function(e, n) {
			t[n] = !0
		}),
		t
	}
	function i(e, n, r, i) {
		if (ct.acceptData(e)) {
			var o, a, s = ct.expando,
			c = "string" == typeof n,
			l = e.nodeType,
			u = l ? ct.cache: e,
			f = l ? e[s] : e[s] && s;
			if (f && u[f] && (i || u[f].data) || !c || r !== t) return f || (l ? e[s] = f = Z.pop() || ct.guid++:f = s),
			u[f] || (u[f] = {},
			l || (u[f].toJSON = ct.noop)),
			("object" == typeof n || "function" == typeof n) && (i ? u[f] = ct.extend(u[f], n) : u[f].data = ct.extend(u[f].data, n)),
			o = u[f],
			i || (o.data || (o.data = {}), o = o.data),
			r !== t && (o[ct.camelCase(n)] = r),
			c ? (a = o[n], null == a && (a = o[ct.camelCase(n)])) : a = o,
			a
		}
	}
	function o(e, t, n) {
		if (ct.acceptData(e)) {
			var r, i, o, a = e.nodeType,
			c = a ? ct.cache: e,
			l = a ? e[ct.expando] : ct.expando;
			if (c[l]) {
				if (t && (o = n ? c[l] : c[l].data)) {
					ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in o ? t = [t] : (t = ct.camelCase(t), t = t in o ? [t] : t.split(" "));
					for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
					if (! (n ? s: ct.isEmptyObject)(o)) return
				} (n || (delete c[l].data, s(c[l]))) && (a ? ct.cleanData([e], !0) : ct.support.deleteExpando || c != c.window ? delete c[l] : c[l] = null)
			}
		}
	}
	function a(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null: +r + "" === r ? +r: Ct.test(r) ? ct.parseJSON(r) : r
				} catch(o) {}
				ct.data(e, n, r)
			} else r = t
		}
		return r
	}
	function s(e) {
		var t;
		for (t in e) if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
		return ! 0
	}
	function c() {
		return ! 0
	}
	function l() {
		return ! 1
	}
	function u(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	function f(e, t, n) {
		if (t = t || 0, ct.isFunction(t)) return ct.grep(e,
		function(e, r) {
			var i = !!t.call(e, r, e);
			return i === n
		});
		if (t.nodeType) return ct.grep(e,
		function(e) {
			return e === t === n
		});
		if ("string" == typeof t) {
			var r = ct.grep(e,
			function(e) {
				return 1 === e.nodeType
			});
			if (Rt.test(t)) return ct.filter(t, r, !n);
			t = ct.filter(t, r)
		}
		return ct.grep(e,
		function(e) {
			return ct.inArray(e, t) >= 0 === n
		})
	}
	function d(e) {
		var t = Ut.split("|"),
		n = e.createDocumentFragment();
		if (n.createElement) for (; t.length;) n.createElement(t.pop());
		return n
	}
	function p(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function h(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type,
		e
	}
	function g(e) {
		var t = on.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"),
		e
	}
	function m(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
	}
	function v(e, t) {
		if (1 === t.nodeType && ct.hasData(e)) {
			var n, r, i, o = ct._data(e),
			a = ct._data(t, o),
			s = o.events;
			if (s) {
				delete a.handle,
				a.events = {};
				for (n in s) for (r = 0, i = s[n].length; i > r; r++) ct.event.add(t, n, s[n][r])
			}
			a.data && (a.data = ct.extend({},
			a.data))
		}
	}
	function y(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
				i = ct._data(t);
				for (r in i.events) ct.removeEvent(t, r, i.handle);
				t.removeAttribute(ct.expando)
			}
			"script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	function b(e, n) {
		var r, i, o = 0,
		a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
		if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) ! n || ct.nodeName(i, n) ? a.push(i) : ct.merge(a, b(i, n));
		return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a
	}
	function x(e) {
		tn.test(e.type) && (e.defaultChecked = e.checked)
	}
	function w(e, t) {
		if (t in e) return t;
		for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) if (t = Nn[i] + n, t in e) return t;
		return r
	}
	function T(e, t) {
		return e = t || e,
		"none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
	}
	function k(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a],
		r.style && (o[a] = ct._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ct._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n: ct.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a],
		r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "": "none"));
		return e
	}
	function C(e, t, n) {
		var r = yn.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function N(e, t, n, r, i) {
		for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ct.css(e, n + Cn[o], !0, i)),
		r ? ("content" === n && (a -= ct.css(e, "padding" + Cn[o], !0, i)), "margin" !== n && (a -= ct.css(e, "border" + Cn[o] + "Width", !0, i))) : (a += ct.css(e, "padding" + Cn[o], !0, i), "padding" !== n && (a += ct.css(e, "border" + Cn[o] + "Width", !0, i)));
		return a
	}
	function E(e, t, n) {
		var r = !0,
		i = "width" === t ? e.offsetWidth: e.offsetHeight,
		o = fn(e),
		a = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = dn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i)) return i;
			r = a && (ct.support.boxSizingReliable || i === e.style[t]),
			i = parseFloat(i) || 0
		}
		return i + N(e, t, n || (a ? "border": "content"), r, o) + "px"
	}
	function S(e) {
		var t = Q,
		n = wn[e];
		return n || (n = j(e, t), "none" !== n && n || (un = (un || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), un.detach()), wn[e] = n),
		n
	}
	function j(e, t) {
		var n = ct(t.createElement(e)).appendTo(t.body),
		r = ct.css(n[0], "display");
		return n.remove(),
		r
	}
	function A(e, t, n, r) {
		var i;
		if (ct.isArray(t)) ct.each(t,
		function(t, i) {
			n || Sn.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t: "") + "]", i, n, r)
		});
		else if (n || "object" !== ct.type(t)) r(e, t);
		else for (i in t) A(e + "[" + i + "]", t[i], n, r)
	}
	function D(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
			o = t.toLowerCase().match(ut) || [];
			if (ct.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function L(e, n, r, i) {
		function o(c) {
			var l;
			return a[c] = !0,
			ct.each(e[c] || [],
			function(e, c) {
				var u = c(n, r, i);
				return "string" != typeof u || s || a[u] ? s ? !(l = u) : t: (n.dataTypes.unshift(u), o(u), !1)
			}),
			l
		}
		var a = {},
		s = e === zn;
		return o(n.dataTypes[0]) || !a["*"] && o("*")
	}
	function H(e, n) {
		var r, i, o = ct.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e: r || (r = {}))[i] = n[i]);
		return r && ct.extend(!0, e, r),
		e
	}
	function _(e, n, r) {
		var i, o, a, s, c = e.contents,
		l = e.dataTypes,
		u = e.responseFields;
		for (s in u) s in r && (n[u[s]] = r[s]);
		for (;
		"*" === l[0];) l.shift(),
		o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o) for (s in c) if (c[s] && c[s].test(o)) {
			l.unshift(s);
			break
		}
		if (l[0] in r) a = l[0];
		else {
			for (s in r) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== l[0] && l.unshift(a), r[a]) : t
	}
	function M(e, t) {
		var n, r, i, o, a = {},
		s = 0,
		c = e.dataTypes.slice(),
		l = c[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), c[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
		for (; r = c[++s];) if ("*" !== r) {
			if ("*" !== l && l !== r) {
				if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
					i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], c.splice(s--, 0, r));
					break
				}
				if (i !== !0) if (i && e["throws"]) t = i(t);
				else try {
					t = i(t)
				} catch(u) {
					return {
						state: "parsererror",
						error: i ? u: "No conversion from " + l + " to " + r
					}
				}
			}
			l = r
		}
		return {
			state: "success",
			data: t
		}
	}
	function q() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	}
	function F() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch(t) {}
	}
	function O() {
		return setTimeout(function() {
			Zn = t
		}),
		Zn = ct.now()
	}
	function B(e, t) {
		ct.each(t,
		function(t, n) {
			for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return
		})
	}
	function $(e, t, n) {
		var r, i, o = 0,
		a = ir.length,
		s = ct.Deferred().always(function() {
			delete c.elem
		}),
		c = function() {
			if (i) return ! 1;
			for (var t = Zn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, c = l.tweens.length; c > a; a++) l.tweens[a].run(o);
			return s.notifyWith(e, [l, o, n]),
			1 > o && c ? n: (s.resolveWith(e, [l]), !1)
		},
		l = s.promise({
			elem: e,
			props: ct.extend({},
			t),
			opts: ct.extend(!0, {
				specialEasing: {}
			},
			n),
			originalProperties: t,
			originalOptions: n,
			startTime: Zn || O(),
			duration: n.duration,
			tweens: [],
			createTween: function(t, n) {
				var r = ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
				return l.tweens.push(r),
				r
			},
			stop: function(t) {
				var n = 0,
				r = t ? l.tweens.length: 0;
				if (i) return this;
				for (i = !0; r > n; n++) l.tweens[n].run(1);
				return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
				this
			}
		}),
		u = l.props;
		for (P(u, l.opts.specialEasing); a > o; o++) if (r = ir[o].call(l, e, u, l.opts)) return r;
		return B(l, u),
		ct.isFunction(l.opts.start) && l.opts.start.call(e, l),
		ct.fx.timer(ct.extend(c, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})),
		l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function P(e, t) {
		var n, r, i, o, a;
		for (i in e) if (r = ct.camelCase(i), o = t[r], n = e[i], ct.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ct.cssHooks[r], a && "expand" in a) {
			n = a.expand(n),
			delete e[r];
			for (i in n) i in e || (e[i] = n[i], t[i] = o)
		} else t[r] = o
	}
	function I(e, t, n) {
		var r, i, o, a, s, c, l, u, f, d = this,
		p = e.style,
		h = {},
		g = [],
		m = e.nodeType && T(e);
		n.queue || (u = ct._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, f = u.empty.fire, u.empty.fire = function() {
			u.unqueued || f()
		}), u.unqueued++, d.always(function() {
			d.always(function() {
				u.unqueued--,
				ct.queue(e, "fx").length || u.empty.fire()
			})
		})),
		1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
		n.overflow && (p.overflow = "hidden", ct.support.shrinkWrapBlocks || d.always(function() {
			p.overflow = n.overflow[0],
			p.overflowX = n.overflow[1],
			p.overflowY = n.overflow[2]
		}));
		for (i in t) if (a = t[i], tr.exec(a)) {
			if (delete t[i], c = c || "toggle" === a, a === (m ? "hide": "show")) continue;
			g.push(i)
		}
		if (o = g.length) {
			s = ct._data(e, "fxshow") || ct._data(e, "fxshow", {}),
			"hidden" in s && (m = s.hidden),
			c && (s.hidden = !m),
			m ? ct(e).show() : d.done(function() {
				ct(e).hide()
			}),
			d.done(function() {
				var t;
				ct._removeData(e, "fxshow");
				for (t in h) ct.style(e, t, h[t])
			});
			for (i = 0; o > i; i++) r = g[i],
			l = d.createTween(r, m ? s[r] : 0),
			h[r] = s[r] || ct.style(e, r),
			r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function W(e, t, n, r, i) {
		return new W.prototype.init(e, t, n, r, i)
	}
	function R(e, t) {
		var n, r = {
			height: e
		},
		i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Cn[i],
		r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e),
		r
	}
	function z(e) {
		return ct.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
	}
	var X, U, Y = typeof t,
	Q = e.document,
	V = e.location,
	G = e.jQuery,
	J = e.$,
	K = {},
	Z = [],
	et = "1.9.1",
	tt = Z.concat,
	nt = Z.push,
	rt = Z.slice,
	it = Z.indexOf,
	ot = K.toString,
	at = K.hasOwnProperty,
	st = et.trim,
	ct = function(e, t) {
		return new ct.fn.init(e, t, U)
	},
	lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	ut = /\S+/g,
	ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	dt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	ht = /^[\],:{}\s]*$/,
	gt = /(?:^|:|,)(?:\s*\[)+/g,
	mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
	yt = /^-ms-/,
	bt = /-([\da-z])/gi,
	xt = function(e, t) {
		return t.toUpperCase()
	},
	wt = function(e) { (Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (Tt(), ct.ready())
	},
	Tt = function() {
		Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (Q.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
	};
	ct.fn = ct.prototype = {
		jquery: et,
		constructor: ct,
		init: function(e, n, r) {
			var i, o;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !i || !i[1] && n) return ! n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n: Q, !0)), pt.test(i[1]) && ct.isPlainObject(n)) for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (o = Q.getElementById(i[2]), o && o.parentNode) {
					if (o.id !== i[2]) return r.find(e);
					this.length = 1,
					this[0] = o
				}
				return this.context = Q,
				this.selector = e,
				this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return rt.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = ct.merge(this.constructor(), e);
			return t.prevObject = this,
			t.context = this.context,
			t
		},
		each: function(e, t) {
			return ct.each(this, e, t)
		},
		ready: function(e) {
			return ct.ready.promise().done(e),
			this
		},
		slice: function() {
			return this.pushStack(rt.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq( - 1)
		},
		eq: function(e) {
			var t = this.length,
			n = +e + (0 > e ? t: 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(ct.map(this,
			function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: nt,
		sort: [].sort,
		splice: [].splice
	},
	ct.fn.init.prototype = ct.fn,
	ct.extend = ct.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
		c = 1,
		l = arguments.length,
		u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
		c = 2), "object" == typeof s || ct.isFunction(s) || (s = {}), l === c && (s = this, --c); l > c; c++) if (null != (o = arguments[c])) for (i in o) e = s[i],
		r = o[i],
		s !== r && (u && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, a = e && ct.isArray(e) ? e: []) : a = e && ct.isPlainObject(e) ? e: {},
		s[i] = ct.extend(u, a, r)) : r !== t && (s[i] = r));
		return s
	},
	ct.extend({
		noConflict: function(t) {
			return e.$ === ct && (e.$ = J),
			t && e.jQuery === ct && (e.jQuery = G),
			ct
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? ct.readyWait++:ct.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--ct.readyWait: !ct.isReady) {
				if (!Q.body) return setTimeout(ct.ready);
				ct.isReady = !0,
				e !== !0 && --ct.readyWait > 0 || (X.resolveWith(Q, [ct]), ct.fn.trigger && ct(Q).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === ct.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === ct.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return ! isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "": "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object": typeof e
		},
		isPlainObject: function(e) {
			if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return ! 1;
			try {
				if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(n) {
				return ! 1
			}
			var r;
			for (r in e);
			return r === t || at.call(e, r)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return ! 1;
			return ! 0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1),
			t = t || Q;
			var r = pt.exec(e),
			i = !n && [];
			return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n: "string" == typeof n && (n = ct.trim(n), n && ht.test(n.replace(mt, "@").replace(vt, "]").replace(gt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch(o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n),
			r
		},
		noop: function() {},
		globalEval: function(t) {
			t && ct.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(yt, "ms-").replace(bt, xt)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
			a = e.length,
			s = n(e);
			if (r) {
				if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: st && !st.call(" ") ?
		function(e) {
			return null == e ? "": st.call(e)
		}: function(e) {
			return null == e ? "": (e + "").replace(ft, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)),
			r
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (it) return it.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n: 0; r > n; n++) if (n in t && t[n] === e) return n
			}
			return - 1
		},
		merge: function(e, n) {
			var r = n.length,
			i = e.length,
			o = 0;
			if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
			else for (; n[o] !== t;) e[i++] = n[o++];
			return e.length = i,
			e
		},
		grep: function(e, t, n) {
			var r, i = [],
			o = 0,
			a = e.length;
			for (n = !!n; a > o; o++) r = !!t(e[o], o),
			n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
			a = e.length,
			s = n(e),
			c = [];
			if (s) for (; a > o; o++) i = t(e[o], o, r),
			null != i && (c[c.length] = i);
			else for (o in e) i = t(e[o], o, r),
			null != i && (c[c.length] = i);
			return tt.apply([], c)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o),
			ct.isFunction(e) ? (r = rt.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(rt.call(arguments)))
			},
			i.guid = e.guid = e.guid || ct.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var c = 0,
			l = e.length,
			u = null == r;
			if ("object" === ct.type(r)) {
				o = !0;
				for (c in r) ct.access(e, n, c, r[c], !0, a, s)
			} else if (i !== t && (o = !0, ct.isFunction(i) || (s = !0), u && (s ? (n.call(e, i), n = null) : (u = n, n = function(e, t, n) {
				return u.call(ct(e), n)
			})), n)) for (; l > c; c++) n(e[c], r, s ? i: i.call(e[c], c, n(e[c], r)));
			return o ? e: u ? n.call(e) : l ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		}
	}),
	ct.ready.promise = function(t) {
		if (!X) if (X = ct.Deferred(), "complete" === Q.readyState) setTimeout(ct.ready);
		else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", wt, !1),
		e.addEventListener("load", wt, !1);
		else {
			Q.attachEvent("onreadystatechange", wt),
			e.attachEvent("onload", wt);
			var n = !1;
			try {
				n = null == e.frameElement && Q.documentElement
			} catch(r) {}
			n && n.doScroll &&
			function i() {
				if (!ct.isReady) {
					try {
						n.doScroll("left")
					} catch(e) {
						return setTimeout(i, 50)
					}
					Tt(),
					ct.ready()
				}
			} ()
		}
		return X.promise(t)
	},
	ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
	function(e, t) {
		K["[object " + t + "]"] = t.toLowerCase()
	}),
	U = ct(Q);
	var kt = {};
	ct.Callbacks = function(e) {
		e = "string" == typeof e ? kt[e] || r(e) : ct.extend({},
		e);
		var n, i, o, a, s, c, l = [],
		u = !e.once && [],
		f = function(t) {
			for (i = e.memory && t, o = !0, s = c || 0, c = 0, a = l.length, n = !0; l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
				i = !1;
				break
			}
			n = !1,
			l && (u ? u.length && f(u.shift()) : i ? l = [] : d.disable())
		},
		d = {
			add: function() {
				if (l) {
					var t = l.length; !
					function r(t) {
						ct.each(t,
						function(t, n) {
							var i = ct.type(n);
							"function" === i ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
						})
					} (arguments),
					n ? a = l.length: i && (c = t, f(i))
				}
				return this
			},
			remove: function() {
				return l && ct.each(arguments,
				function(e, t) {
					for (var r; (r = ct.inArray(t, l, r)) > -1;) l.splice(r, 1),
					n && (a >= r && a--, s >= r && s--)
				}),
				this
			},
			has: function(e) {
				return e ? ct.inArray(e, l) > -1 : !(!l || !l.length)
			},
			empty: function() {
				return l = [],
				this
			},
			disable: function() {
				return l = u = i = t,
				this
			},
			disabled: function() {
				return ! l
			},
			lock: function() {
				return u = t,
				i || d.disable(),
				this
			},
			locked: function() {
				return ! u
			},
			fireWith: function(e, t) {
				return t = t || [],
				t = [e, t.slice ? t.slice() : t],
				!l || o && !u || (n ? u.push(t) : f(t)),
				this
			},
			fire: function() {
				return d.fireWith(this, arguments),
				this
			},
			fired: function() {
				return !! o
			}
		};
		return d
	},
	ct.extend({
		Deferred: function(e) {
			var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]],
			n = "pending",
			r = {
				state: function() {
					return n
				},
				always: function() {
					return i.done(arguments).fail(arguments),
					this
				},
				then: function() {
					var e = arguments;
					return ct.Deferred(function(n) {
						ct.each(t,
						function(t, o) {
							var a = o[0],
							s = ct.isFunction(e[t]) && e[t];
							i[o[1]](function() {
								var e = s && s.apply(this, arguments);
								e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				promise: function(e) {
					return null != e ? ct.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			ct.each(t,
			function(e, o) {
				var a = o[2],
				s = o[3];
				r[o[1]] = a.add,
				s && a.add(function() {
					n = s
				},
				t[1 ^ e][2].disable, t[2][2].lock),
				i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r: this, arguments),
					this
				},
				i[o[0] + "With"] = a.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when: function(e) {
			var t, n, r, i = 0,
			o = rt.call(arguments),
			a = o.length,
			s = 1 !== a || e && ct.isFunction(e.promise) ? a: 0,
			c = 1 === s ? e: ct.Deferred(),
			l = function(e, n, r) {
				return function(i) {
					n[e] = this,
					r[e] = arguments.length > 1 ? rt.call(arguments) : i,
					r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
				}
			};
			if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(c.reject).progress(l(i, n, t)) : --s;
			return s || c.resolveWith(r, o),
			c.promise()
		}
	}),
	ct.support = function() {
		var t, n, r, i, o, a, s, c, l, u, f = Q.createElement("div");
		if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
		o = Q.createElement("select"),
		s = o.appendChild(Q.createElement("option")),
		i = f.getElementsByTagName("input")[0],
		r.style.cssText = "top:1px;float:left;opacity:.5",
		t = {
			getSetAttribute: "t" !== f.className,
			leadingWhitespace: 3 === f.firstChild.nodeType,
			tbody: !f.getElementsByTagName("tbody").length,
			htmlSerialize: !!f.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: "/a" === r.getAttribute("href"),
			opacity: /^0.5/.test(r.style.opacity),
			cssFloat: !!r.style.cssFloat,
			checkOn: !!i.value,
			optSelected: s.selected,
			enctype: !!Q.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === Q.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		},
		i.checked = !0,
		t.noCloneChecked = i.cloneNode(!0).checked,
		o.disabled = !0,
		t.optDisabled = !s.disabled;
		try {
			delete f.test
		} catch(d) {
			t.deleteExpando = !1
		}
		i = Q.createElement("input"),
		i.setAttribute("value", ""),
		t.input = "" === i.getAttribute("value"),
		i.value = "t",
		i.setAttribute("type", "radio"),
		t.radioValue = "t" === i.value,
		i.setAttribute("checked", "t"),
		i.setAttribute("name", "t"),
		a = Q.createDocumentFragment(),
		a.appendChild(i),
		t.appendChecked = i.checked,
		t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
		f.attachEvent && (f.attachEvent("onclick",
		function() {
			t.noCloneEvent = !1
		}), f.cloneNode(!0).click());
		for (u in {
			submit: !0,
			change: !0,
			focusin: !0
		}) f.setAttribute(c = "on" + u, "t"),
		t[u + "Bubbles"] = c in e || f.attributes[c].expando === !1;
		return f.style.backgroundClip = "content-box",
		f.cloneNode(!0).style.backgroundClip = "",
		t.clearCloneStyle = "content-box" === f.style.backgroundClip,
		ct(function() {
			var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			a = Q.getElementsByTagName("body")[0];
			a && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
				width: "4px"
			}).width, r = f.appendChild(Q.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
		}),
		n = o = a = s = r = i = null,
		t
	} ();
	var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	Nt = /([A-Z])/g;
	ct.extend({
		cache: {},
		expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando],
			!!e && !s(e)
		},
		data: function(e, t, n) {
			return i(e, t, n)
		},
		removeData: function(e, t) {
			return o(e, t)
		},
		_data: function(e, t, n) {
			return i(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return o(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
			var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
			return ! t || t !== !0 && e.getAttribute("classid") === t
		}
	}),
	ct.fn.extend({
		data: function(e, n) {
			var r, i, o = this[0],
			s = 0,
			c = null;
			if (e === t) {
				if (this.length && (c = ct.data(o), 1 === o.nodeType && !ct._data(o, "parsedAttrs"))) {
					for (r = o.attributes; r.length > s; s++) i = r[s].name,
					i.indexOf("data-") || (i = ct.camelCase(i.slice(5)), a(o, i, c[i]));
					ct._data(o, "parsedAttrs", !0)
				}
				return c
			}
			return "object" == typeof e ? this.each(function() {
				ct.data(this, e)
			}) : ct.access(this,
			function(n) {
				return n === t ? o ? a(o, e, ct.data(o, e)) : null: (this.each(function() {
					ct.data(this, e, n)
				}), t)
			},
			null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ct.removeData(this, e)
			})
		}
	}),
	ct.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = ct._data(e, n), r && (!i || ct.isArray(r) ? i = ct._data(e, n, ct.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = ct.queue(e, t),
			r = n.length,
			i = n.shift(),
			o = ct._queueHooks(e, t),
			a = function() {
				ct.dequeue(e, t)
			};
			"inprogress" === i && (i = n.shift(), r--),
			o.cur = i,
			i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)),
			!r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ct._data(e, n) || ct._data(e, n, {
				empty: ct.Callbacks("once memory").add(function() {
					ct._removeData(e, t + "queue"),
					ct._removeData(e, n)
				})
			})
		}
	}),
	ct.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--),
			r > arguments.length ? ct.queue(this[0], e) : n === t ? this: this.each(function() {
				var t = ct.queue(this, e, n);
				ct._queueHooks(this, e),
				"fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				ct.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = ct.fx ? ct.fx.speeds[e] || e: e,
			t = t || "fx",
			this.queue(t,
			function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
			o = ct.Deferred(),
			a = this,
			s = this.length,
			c = function() {--i || o.resolveWith(a, [a])
			};
			for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) r = ct._data(a[s], e + "queueHooks"),
			r && r.empty && (i++, r.empty.add(c));
			return c(),
			o.promise(n)
		}
	});
	var Et, St, jt = /[\t\r\n]/g,
	At = /\r/g,
	Dt = /^(?:input|select|textarea|button|object)$/i,
	Lt = /^(?:a|area)$/i,
	Ht = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	_t = /^(?:checked|selected)$/i,
	Mt = ct.support.getSetAttribute,
	qt = ct.support.input;
	ct.fn.extend({
		attr: function(e, t) {
			return ct.access(this, ct.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				ct.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return ct.access(this, ct.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = ct.propFix[e] || e,
			this.each(function() {
				try {
					this[e] = t,
					delete this[e]
				} catch(n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
			s = this.length,
			c = "string" == typeof e && e;
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).addClass(e.call(this, t, this.className))
			});
			if (c) for (t = (e || "").match(ut) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : " ")) {
				for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
				n.className = ct.trim(r)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
			s = this.length,
			c = 0 === arguments.length || "string" == typeof e && e;
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).removeClass(e.call(this, t, this.className))
			});
			if (c) for (t = (e || "").match(ut) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(jt, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				n.className = e ? ct.trim(r) : ""
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
			r = "boolean" == typeof t;
			return this.each(ct.isFunction(e) ?
			function(n) {
				ct(this).toggleClass(e.call(this, n, this.className, t), t)
			}: function() {
				if ("string" === n) for (var i, o = 0,
				a = ct(this), s = t, c = e.match(ut) || []; i = c[o++];) s = r ? s: !a.hasClass(i),
				a[s ? "addClass": "removeClass"](i);
				else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ct._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ",
			n = 0,
			r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(jt, " ").indexOf(t) >= 0) return ! 0;
			return ! 1
		},
		val: function(e) {
			var n, r, i, o = this[0];
			return arguments.length ? (i = ct.isFunction(e), this.each(function(n) {
				var o, a = ct(this);
				1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ct.isArray(o) && (o = ct.map(o,
				function(e) {
					return null == e ? "": e + ""
				})), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
			})) : o ? (r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(At, "") : null == n ? "": n)) : void 0
		}
	}),
	ct.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return ! t || t.specified ? e.value: e.text
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options,
					i = e.selectedIndex,
					o = "select-one" === e.type || 0 > i,
					a = o ? null: [], s = o ? i + 1 : r.length, c = 0 > i ? s: o ? i: 0; s > c; c++) if (n = r[c], !(!n.selected && c !== i || (ct.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
						if (t = ct(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					var n = ct.makeArray(t);
					return ct(e).find("option").each(function() {
						this.selected = ct.inArray(ct(this).val(), n) >= 0
					}),
					n.length || (e.selectedIndex = -1),
					n
				}
			}
		},
		attr: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? typeof e.getAttribute === Y ? ct.prop(e, n, r) : (o = 1 !== s || !ct.isXMLDoc(e), o && (n = n.toLowerCase(), i = ct.attrHooks[n] || (Ht.test(n) ? St: Et)), r === t ? i && o && "get" in i && null !== (a = i.get(e, n)) ? a: (typeof e.getAttribute !== Y && (a = e.getAttribute(n)), null == a ? t: a) : null !== r ? i && o && "set" in i && (a = i.set(e, r, n)) !== t ? a: (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), t)) : void 0
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
			o = t && t.match(ut);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = ct.propFix[n] || n,
			Ht.test(n) ? !Mt && _t.test(n) ? e[ct.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ct.attr(e, n, ""),
			e.removeAttribute(Mt ? n: r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !== s || !ct.isXMLDoc(e), a && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i: e[n] = r: o && "get" in o && null !== (i = o.get(e, n)) ? i: e[n]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : Dt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}),
	St = {
		get: function(e, n) {
			var r = ct.prop(e, n),
			i = "boolean" == typeof r && e.getAttribute(n),
			o = "boolean" == typeof r ? qt && Mt ? null != i: _t.test(n) ? e[ct.camelCase("default-" + n)] : !!i: e.getAttributeNode(n);
			return o && o.value !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return t === !1 ? ct.removeAttr(e, n) : qt && Mt || !_t.test(n) ? e.setAttribute(!Mt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0,
			n
		}
	},
	qt && Mt || (ct.attrHooks.value = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return ct.nodeName(e, "input") ? e.defaultValue: r && r.specified ? r.value: t
		},
		set: function(e, n, r) {
			return ct.nodeName(e, "input") ? (e.defaultValue = n, t) : Et && Et.set(e, n, r)
		}
	}),
	Mt || (Et = ct.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value: r.specified) ? r.value: t
		},
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
			i.value = n += "",
			"value" === r || n === e.getAttribute(r) ? n: t
		}
	},
	ct.attrHooks.contenteditable = {
		get: Et.get,
		set: function(e, t, n) {
			Et.set(e, "" === t ? !1 : t, n)
		}
	},
	ct.each(["width", "height"],
	function(e, n) {
		ct.attrHooks[n] = ct.extend(ct.attrHooks[n], {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		})
	})),
	ct.support.hrefNormalized || (ct.each(["href", "src", "width", "height"],
	function(e, n) {
		ct.attrHooks[n] = ct.extend(ct.attrHooks[n], {
			get: function(e) {
				var r = e.getAttribute(n, 2);
				return null == r ? t: r
			}
		})
	}), ct.each(["href", "src"],
	function(e, t) {
		ct.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})),
	ct.support.style || (ct.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}),
	ct.support.optSelected || (ct.propHooks.selected = ct.extend(ct.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
			null
		}
	})),
	ct.support.enctype || (ct.propFix.enctype = "encoding"),
	ct.support.checkOn || ct.each(["radio", "checkbox"],
	function() {
		ct.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on": e.value
			}
		}
	}),
	ct.each(["radio", "checkbox"],
	function() {
		ct.valHooks[this] = ct.extend(ct.valHooks[this], {
			set: function(e, n) {
				return ct.isArray(n) ? e.checked = ct.inArray(ct(e).val(), n) >= 0 : t
			}
		})
	});
	var Ft = /^(?:input|select|textarea)$/i,
	Ot = /^key/,
	Bt = /^(?:mouse|contextmenu)|click/,
	$t = /^(?:focusinfocus|focusoutblur)$/,
	Pt = /^([^.]*)(?:\.(.+)|)$/;
	ct.event = {
		global: {},
		add: function(e, n, r, i, o) {
			var a, s, c, l, u, f, d, p, h, g, m, v = ct._data(e);
			if (v) {
				for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ct.guid++), (s = v.events) || (s = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof ct === Y || e && ct.event.triggered === e.type ? t: ct.event.dispatch.apply(f.elem, arguments)
				},
				f.elem = e), n = (n || "").match(ut) || [""], c = n.length; c--;) a = Pt.exec(n[c]) || [],
				h = m = a[1],
				g = (a[2] || "").split(".").sort(),
				u = ct.event.special[h] || {},
				h = (o ? u.delegateType: u.bindType) || h,
				u = ct.event.special[h] || {},
				d = ct.extend({
					type: h,
					origType: m,
					data: i,
					handler: r,
					guid: r.guid,
					selector: o,
					needsContext: o && ct.expr.match.needsContext.test(o),
					namespace: g.join(".")
				},
				l),
				(p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))),
				u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
				o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
				ct.event.global[h] = !0;
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, c, l, u, f, d, p, h, g, m = ct.hasData(e) && ct._data(e);
			if (m && (u = m.events)) {
				for (t = (t || "").match(ut) || [""], l = t.length; l--;) if (s = Pt.exec(t[l]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
					for (f = ct.event.special[p] || {},
					p = (r ? f.delegateType: f.bindType) || p, d = u[p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = o = d.length; o--;) a = d[o],
					!i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
					c && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ct.removeEvent(e, p, m.handle), delete u[p])
				} else for (p in u) ct.event.remove(e, p + t[l], n, r, !0);
				ct.isEmptyObject(u) && (delete m.handle, ct._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, o) {
			var a, s, c, l, u, f, d, p = [i || Q],
			h = at.call(n, "type") ? n.type: n,
			g = at.call(n, "namespace") ? n.namespace.split(".") : [];
			if (c = f = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !$t.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ct.expando] ? n: new ct.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), u = ct.event.special[h] || {},
			o || !u.trigger || u.trigger.apply(i, r) !== !1)) {
				if (!o && !u.noBubble && !ct.isWindow(i)) {
					for (l = u.delegateType || h, $t.test(l + h) || (c = c.parentNode); c; c = c.parentNode) p.push(c),
					f = c;
					f === (i.ownerDocument || Q) && p.push(f.defaultView || f.parentWindow || e)
				}
				for (d = 0; (c = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? l: u.bindType || h,
				a = (ct._data(c, "events") || {})[n.type] && ct._data(c, "handle"),
				a && a.apply(c, r),
				a = s && c[s],
				a && ct.acceptData(c) && a.apply && a.apply(c, r) === !1 && n.preventDefault();
				if (n.type = h, !(o || n.isDefaultPrevented() || u._default && u._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ct.nodeName(i, "a") || !ct.acceptData(i) || !s || !i[h] || ct.isWindow(i))) {
					f = i[s],
					f && (i[s] = null),
					ct.event.triggered = h;
					try {
						i[h]()
					} catch(m) {}
					ct.event.triggered = t,
					f && (i[s] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = ct.event.fix(e);
			var n, r, i, o, a, s = [],
			c = rt.call(arguments),
			l = (ct._data(this, "events") || {})[e.type] || [],
			u = ct.event.special[e.type] || {};
			if (c[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (s = ct.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, c), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e),
				e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
			c = n.delegateCount,
			l = e.target;
			if (c && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
				for (o = [], a = 0; c > a; a++) i = n[a],
				r = i.selector + " ",
				o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(l) >= 0 : ct.find(r, this, null, [l]).length),
				o[r] && o.push(i);
				o.length && s.push({
					elem: l,
					handlers: o
				})
			}
			return n.length > c && s.push({
				elem: this,
				handlers: n.slice(c)
			}),
			s
		},
		fix: function(e) {
			if (e[ct.expando]) return e;
			var t, n, r, i = e.type,
			o = e,
			a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Bt.test(i) ? this.mouseHooks: Ot.test(i) ? this.keyHooks: {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t],
			e[n] = o[n];
			return e.target || (e.target = o.srcElement || Q),
			3 === e.target.nodeType && (e.target = e.target.parentNode),
			e.metaKey = !!e.metaKey,
			a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
				e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, o, a = n.button,
				s = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Q, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
				!e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
				e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
				e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				}
			},
			focus: {
				trigger: function() {
					if (this !== Q.activeElement && this.focus) try {
						return this.focus(),
						!1
					} catch(e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === Q.activeElement && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = ct.extend(new ct.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	ct.removeEvent = Q.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}: function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
	},
	ct.Event = function(e, n) {
		return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? c: l) : this.type = e, n && ct.extend(this, n), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, t) : new ct.Event(e, n)
	},
	ct.Event.prototype = {
		isDefaultPrevented: l,
		isPropagationStopped: l,
		isImmediatePropagationStopped: l,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = c,
			e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = c,
			e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = c,
			this.stopPropagation()
		}
	},
	ct.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	},
	function(e, t) {
		ct.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
				i = e.relatedTarget,
				o = e.handleObj;
				return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
				n
			}
		}
	}),
	ct.support.submitBubbles || (ct.event.special.submit = {
		setup: function() {
			return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit",
			function(e) {
				var n = e.target,
				r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form: t;
				r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit",
				function(e) {
					e._submit_bubble = !0
				}), ct._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t)
		}
	}),
	ct.support.changeBubbles || (ct.event.special.change = {
		setup: function() {
			return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change",
			function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), ct.event.add(this, "click._change",
			function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1),
				ct.event.simulate("change", this, e, !0)
			})), !1) : (ct.event.add(this, "beforeactivate._change",
			function(e) {
				var t = e.target;
				Ft.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change",
				function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
				}), ct._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return ct.event.remove(this, "._change"),
			!Ft.test(this.nodeName)
		}
	}),
	ct.support.focusinBubbles || ct.each({
		focus: "focusin",
		blur: "focusout"
	},
	function(e, t) {
		var n = 0,
		r = function(e) {
			ct.event.simulate(t, e.target, ct.event.fix(e), !0)
		};
		ct.event.special[t] = {
			setup: function() {
				0 === n++&&Q.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && Q.removeEventListener(e, r, !0)
			}
		}
	}),
	ct.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = l;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return ct().off(e),
				s.apply(this, arguments)
			},
			i.guid = s.guid || (s.guid = ct.guid++)),
			this.each(function() {
				ct.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
			ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
			this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t),
			r === !1 && (r = l),
			this.each(function() {
				ct.event.remove(this, e, r, n)
			})
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		trigger: function(e, t) {
			return this.each(function() {
				ct.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? ct.event.trigger(e, n, r, !0) : t
		}
	}),
	function(e, t) {
		function n(e) {
			return ht.test(e + "")
		}
		function r() {
			var e, t = [];
			return e = function(n, r) {
				return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
				e[n] = r
			}
		}
		function i(e) {
			return e[$] = !0,
			e
		}
		function o(e) {
			var t = L.createElement("div");
			try {
				return e(t)
			} catch(n) {
				return ! 1
			} finally {
				t = null
			}
		}
		function a(e, t, n, r) {
			var i, o, a, s, c, l, u, p, h, g;
			if ((t ? t.ownerDocument || t: P) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (s = t.nodeType) && 9 !== s) return [];
			if (!_ && !r) {
				if (i = gt.exec(e)) if (a = i[1]) {
					if (9 === s) {
						if (o = t.getElementById(a), !o || !o.parentNode) return n;
						if (o.id === a) return n.push(o),
						n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) return n.push(o),
					n
				} else {
					if (i[2]) return J.apply(n, K.call(t.getElementsByTagName(e), 0)),
					n;
					if ((a = i[3]) && I.getByClassName && t.getElementsByClassName) return J.apply(n, K.call(t.getElementsByClassName(a), 0)),
					n
				}
				if (I.qsa && !M.test(e)) {
					if (u = !0, p = $, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (l = f(e), (u = t.getAttribute("id")) ? p = u.replace(yt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = l.length; c--;) l[c] = p + d(l[c]);
						h = pt.test(e) && t.parentNode || t,
						g = l.join(",")
					}
					if (g) try {
						return J.apply(n, K.call(h.querySelectorAll(g), 0)),
						n
					} catch(m) {} finally {
						u || t.removeAttribute("id")
					}
				}
			}
			return x(e.replace(at, "$1"), t, n, r)
		}
		function s(e, t) {
			var n = t && e,
			r = n && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
			if (r) return r;
			if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
			return e ? 1 : -1
		}
		function c(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function u(e) {
			return i(function(t) {
				return t = +t,
				i(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		function f(e, t) {
			var n, r, i, o, s, c, l, u = X[e + " "];
			if (u) return t ? 0 : u.slice(0);
			for (s = e, c = [], l = C.preFilter; s;) { (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), c.push(i = [])),
				n = !1,
				(r = lt.exec(s)) && (n = r.shift(), i.push({
					value: n,
					type: r[0].replace(at, " ")
				}), s = s.slice(n.length));
				for (o in C.filter) ! (r = dt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length: s ? a.error(e) : X(e, c).slice(0)
		}
		function d(e) {
			for (var t = 0,
			n = e.length,
			r = ""; n > t; t++) r += e[t].value;
			return r
		}
		function p(e, t, n) {
			var r = t.dir,
			i = n && "parentNode" === r,
			o = R++;
			return t.first ?
			function(t, n, o) {
				for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
			}: function(t, n, a) {
				var s, c, l, u = W + " " + o;
				if (a) {
					for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return ! 0
				} else for (; t = t[r];) if (1 === t.nodeType || i) if (l = t[$] || (t[$] = {}), (c = l[r]) && c[0] === u) {
					if ((s = c[1]) === !0 || s === k) return s === !0
				} else if (c = l[r] = [u], c[1] = e(t, n, a) || k, c[1] === !0) return ! 0
			}
		}
		function h(e) {
			return e.length > 1 ?
			function(t, n, r) {
				for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
				return ! 0
			}: e[0]
		}
		function g(e, t, n, r, i) {
			for (var o, a = [], s = 0, c = e.length, l = null != t; c > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
			return a
		}
		function m(e, t, n, r, o, a) {
			return r && !r[$] && (r = m(r)),
			o && !o[$] && (o = m(o, a)),
			i(function(i, a, s, c) {
				var l, u, f, d = [],
				p = [],
				h = a.length,
				m = i || b(t || "*", s.nodeType ? [s] : s, []),
				v = !e || !i && t ? m: g(m, d, e, s, c),
				y = n ? o || (i ? e: h || r) ? [] : a: v;
				if (n && n(v, y, s, c), r) for (l = g(y, p), r(l, [], s, c), u = l.length; u--;)(f = l[u]) && (y[p[u]] = !(v[p[u]] = f));
				if (i) {
					if (o || e) {
						if (o) {
							for (l = [], u = y.length; u--;)(f = y[u]) && l.push(v[u] = f);
							o(null, y = [], l, c)
						}
						for (u = y.length; u--;)(f = y[u]) && (l = o ? Z.call(i, f) : d[u]) > -1 && (i[l] = !(a[l] = f))
					}
				} else y = g(y === a ? y.splice(h, y.length) : y),
				o ? o(null, a, y, c) : J.apply(a, y)
			})
		}
		function v(e) {
			for (var t, n, r, i = e.length,
			o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, c = p(function(e) {
				return e === t
			},
			a, !0), l = p(function(e) {
				return Z.call(t, e) > -1
			},
			a, !0), u = [function(e, n, r) {
				return ! o && (r || n !== A) || ((t = n).nodeType ? c(e, n, r) : l(e, n, r))
			}]; i > s; s++) if (n = C.relative[e[s].type]) u = [p(h(u), n)];
			else {
				if (n = C.filter[e[s].type].apply(null, e[s].matches), n[$]) {
					for (r = ++s; i > r && !C.relative[e[r].type]; r++);
					return m(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = e.slice(r)), i > r && d(e))
				}
				u.push(n)
			}
			return h(u)
		}
		function y(e, t) {
			var n = 0,
			r = t.length > 0,
			o = e.length > 0,
			s = function(i, s, c, l, u) {
				var f, d, p, h = [],
				m = 0,
				v = "0",
				y = i && [],
				b = null != u,
				x = A,
				w = i || o && C.find.TAG("*", u && s.parentNode || s),
				T = W += null == x ? 1 : Math.random() || .1;
				for (b && (A = s !== L && s, k = n); null != (f = w[v]); v++) {
					if (o && f) {
						for (d = 0; p = e[d++];) if (p(f, s, c)) {
							l.push(f);
							break
						}
						b && (W = T, k = ++n)
					}
					r && ((f = !p && f) && m--, i && y.push(f))
				}
				if (m += v, r && v !== m) {
					for (d = 0; p = t[d++];) p(y, h, s, c);
					if (i) {
						if (m > 0) for (; v--;) y[v] || h[v] || (h[v] = G.call(l));
						h = g(h)
					}
					J.apply(l, h),
					b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
				}
				return b && (W = T, A = x),
				y
			};
			return r ? i(s) : s
		}
		function b(e, t, n) {
			for (var r = 0,
			i = t.length; i > r; r++) a(e, t[r], n);
			return n
		}
		function x(e, t, n, r) {
			var i, o, a, s, c, l = f(e);
			if (!r && 1 === l.length) {
				if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !_ && C.relative[o[1].type]) {
					if (t = C.find.ID(a.matches[0].replace(xt, wt), t)[0], !t) return n;
					e = e.slice(o.shift().value.length)
				}
				for (i = dt.needsContext.test(e) ? 0 : o.length; i--&&(a = o[i], !C.relative[s = a.type]);) if ((c = C.find[s]) && (r = c(a.matches[0].replace(xt, wt), pt.test(o[0].type) && t.parentNode || t))) {
					if (o.splice(i, 1), e = r.length && d(o), !e) return J.apply(n, K.call(r, 0)),
					n;
					break
				}
			}
			return S(e, l)(r, t, _, n, pt.test(e)),
			n
		}
		function w() {}
		var T, k, C, N, E, S, j, A, D, L, H, _, M, q, F, O, B, $ = "sizzle" + -new Date,
		P = e.document,
		I = {},
		W = 0,
		R = 0,
		z = r(),
		X = r(),
		U = r(),
		Y = typeof t,
		Q = 1 << 31,
		V = [],
		G = V.pop,
		J = V.push,
		K = V.slice,
		Z = V.indexOf ||
		function(e) {
			for (var t = 0,
			n = this.length; n > t; t++) if (this[t] === e) return t;
			return - 1
		},
		et = "[\\x20\\t\\r\\n\\f]",
		tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		nt = tt.replace("w", "w#"),
		rt = "([*^$|!~]?=)",
		it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
		ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
		at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
		st = RegExp("^" + et + "*," + et + "*"),
		lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
		ut = RegExp(ot),
		ft = RegExp("^" + nt + "$"),
		dt = {
			ID: RegExp("^#(" + tt + ")"),
			CLASS: RegExp("^\\.(" + tt + ")"),
			NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
			TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
			ATTR: RegExp("^" + it),
			PSEUDO: RegExp("^" + ot),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
			needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
		},
		pt = /[\x20\t\r\n\f]*[+~]/,
		ht = /^[^{]+\{\s*\[native code/,
		gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		mt = /^(?:input|select|textarea|button)$/i,
		vt = /^h\d$/i,
		yt = /'|\\/g,
		bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
		xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
		wt = function(e, t) {
			var n = "0x" + t - 65536;
			return n !== n ? t: 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
		};
		try {
			K.call(P.documentElement.childNodes, 0)[0].nodeType
		} catch(Tt) {
			K = function(e) {
				for (var t, n = []; t = this[e++];) n.push(t);
				return n
			}
		}
		E = a.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName: !1
		},
		D = a.setDocument = function(e) {
			var r = e ? e.ownerDocument || e: P;
			return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, _ = E(r), I.tagNameNoComments = o(function(e) {
				return e.appendChild(r.createComment("")),
				!e.getElementsByTagName("*").length
			}), I.attributes = o(function(e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return "boolean" !== t && "string" !== t
			}), I.getByClassName = o(function(e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
				e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
			}), I.getByName = o(function(e) {
				e.id = $ + 0,
				e.innerHTML = "<a name='" + $ + "'></a><div name='" + $ + "'></div>",
				H.insertBefore(e, H.firstChild);
				var t = r.getElementsByName && r.getElementsByName($).length === 2 + r.getElementsByName($ + 0).length;
				return I.getIdNotName = !r.getElementById($),
				H.removeChild(e),
				t
			}), C.attrHandle = o(function(e) {
				return e.innerHTML = "<a href='#'></a>",
				e.firstChild && typeof e.firstChild.getAttribute !== Y && "#" === e.firstChild.getAttribute("href")
			}) ? {}: {
				href: function(e) {
					return e.getAttribute("href", 2)
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			},
			I.getIdNotName ? (C.find.ID = function(e, t) {
				if (typeof t.getElementById !== Y && !_) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			},
			C.filter.ID = function(e) {
				var t = e.replace(xt, wt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (C.find.ID = function(e, n) {
				if (typeof n.getElementById !== Y && !_) {
					var r = n.getElementById(e);
					return r ? r.id === e || typeof r.getAttributeNode !== Y && r.getAttributeNode("id").value === e ? [r] : t: []
				}
			},
			C.filter.ID = function(e) {
				var t = e.replace(xt, wt);
				return function(e) {
					var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), C.find.TAG = I.tagNameNoComments ?
			function(e, n) {
				return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t
			}: function(e, t) {
				var n, r = [],
				i = 0,
				o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			},
			C.find.NAME = I.getByName &&
			function(e, n) {
				return typeof n.getElementsByName !== Y ? n.getElementsByName(name) : t
			},
			C.find.CLASS = I.getByClassName &&
			function(e, n) {
				return typeof n.getElementsByClassName === Y || _ ? t: n.getElementsByClassName(e)
			},
			q = [], M = [":focus"], (I.qsa = n(r.querySelectorAll)) && (o(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>",
				e.querySelectorAll("[selected]").length || M.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
				e.querySelectorAll(":checked").length || M.push(":checked")
			}), o(function(e) {
				e.innerHTML = "<input type='hidden' i=''/>",
				e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + et + "*(?:\"\"|'')"),
				e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
				e.querySelectorAll("*,:x"),
				M.push(",.*:")
			})), (I.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
				I.disconnectedMatch = F.call(e, "div"),
				F.call(e, "[s!='']:x"),
				q.push("!=", ot)
			}), M = RegExp(M.join("|")), q = RegExp(q.join("|")), O = n(H.contains) || H.compareDocumentPosition ?
			function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement: e,
				r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			}: function(e, t) {
				if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
				return ! 1
			},
			B = H.compareDocumentPosition ?
			function(e, t) {
				var n;
				return e === t ? (j = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(P, e) ? -1 : t === r || O(P, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			}: function(e, t) {
				var n, i = 0,
				o = e.parentNode,
				a = t.parentNode,
				c = [e],
				l = [t];
				if (e === t) return j = !0,
				0;
				if (!o || !a) return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
				if (o === a) return s(e, t);
				for (n = e; n = n.parentNode;) c.unshift(n);
				for (n = t; n = n.parentNode;) l.unshift(n);
				for (; c[i] === l[i];) i++;
				return i ? s(c[i], l[i]) : c[i] === P ? -1 : l[i] === P ? 1 : 0
			},
			j = !1, [0, 0].sort(B), I.detectDuplicates = j, L) : L
		},
		a.matches = function(e, t) {
			return a(e, null, null, t)
		},
		a.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!I.matchesSelector || _ || q && q.test(t) || M.test(t))) try {
				var n = F.call(e, t);
				if (n || I.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch(r) {}
			return a(t, L, null, [e]).length > 0
		},
		a.contains = function(e, t) {
			return (e.ownerDocument || e) !== L && D(e),
			O(e, t)
		},
		a.attr = function(e, t) {
			var n;
			return (e.ownerDocument || e) !== L && D(e),
			_ || (t = t.toLowerCase()),
			(n = C.attrHandle[t]) ? n(e) : _ || I.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
		},
		a.error = function(e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		},
		a.uniqueSort = function(e) {
			var t, n = [],
			r = 1,
			i = 0;
			if (j = !I.detectDuplicates, e.sort(B), j) {
				for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return e
		},
		N = a.getText = function(e) {
			var t, n = "",
			r = 0,
			i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else for (; t = e[r]; r++) n += N(t);
			return n
		},
		C = a.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: dt,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(xt, wt),
					e[3] = (e[4] || e[5] || "").replace(xt, wt),
					"~=" === e[2] && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(),
					"nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
					e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return dt.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					return "*" === e ?
					function() {
						return ! 0
					}: (e = e.replace(xt, wt).toLowerCase(),
					function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS: function(e) {
					var t = z[e + " "];
					return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e,
					function(e) {
						return t.test(e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = a.attr(r, e);
						return null == i ? "!=" === t: t ? (i += "", "=" === t ? i === n: "!=" === t ? i !== n: "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice( - n.length) === n: "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-": !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
					a = "last" !== e.slice( - 4),
					s = "of-type" === t;
					return 1 === r && 0 === i ?
					function(e) {
						return !! e.parentNode
					}: function(t, n, c) {
						var l, u, f, d, p, h, g = o !== a ? "nextSibling": "previousSibling",
						m = t.parentNode,
						v = s && t.nodeName.toLowerCase(),
						y = !c && !s;
						if (m) {
							if (o) {
								for (; g;) {
									for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v: 1 === f.nodeType) return ! 1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return ! 0
							}
							if (h = [a ? m.firstChild: m.lastChild], a && y) {
								for (u = m[$] || (m[$] = {}), l = u[e] || [], p = l[0] === W && l[1], d = l[0] === W && l[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();) if (1 === f.nodeType && ++d && f === t) {
									u[e] = [W, p, d];
									break
								}
							} else if (y && (l = (t[$] || (t[$] = {}))[e]) && l[0] === W) d = l[1];
							else for (; (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v: 1 !== f.nodeType) || !++d || (y && ((f[$] || (f[$] = {}))[e] = [W, d]), f !== t)););
							return d -= i,
							d === r || 0 === d % r && d / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
					return r[$] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
						for (var i, o = r(e, t), a = o.length; a--;) i = Z.call(e, o[a]),
						e[i] = !(n[i] = o[a])
					}) : function(e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: i(function(e) {
					var t = [],
					n = [],
					r = S(e.replace(at, "$1"));
					return r[$] ? i(function(e, t, n, i) {
						for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e,
						r(t, null, o, n),
						!n.pop()
					}
				}),
				has: i(function(e) {
					return function(t) {
						return a(e, t).length > 0
					}
				}),
				contains: i(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
					}
				}),
				lang: i(function(e) {
					return ft.test(e || "") || a.error("unsupported lang: " + e),
					e = e.replace(xt, wt).toLowerCase(),
					function(t) {
						var n;
						do
						if (n = _ ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(),
						n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return ! 1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === H
				},
				focus: function(e) {
					return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
					return ! 0
				},
				parent: function(e) {
					return ! C.pseudos.empty(e)
				},
				header: function(e) {
					return vt.test(e.nodeName)
				},
				input: function(e) {
					return mt.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [0 > n ? n + t: n]
				}),
				even: u(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
					return e
				}),
				gt: u(function(e, t, n) {
					for (var r = 0 > n ? n + t: n; t > ++r;) e.push(r);
					return e
				})
			}
		};
		for (T in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) C.pseudos[T] = c(T);
		for (T in {
			submit: !0,
			reset: !0
		}) C.pseudos[T] = l(T);
		S = a.compile = function(e, t) {
			var n, r = [],
			i = [],
			o = U[e + " "];
			if (!o) {
				for (t || (t = f(e)), n = t.length; n--;) o = v(t[n]),
				o[$] ? r.push(o) : i.push(o);
				o = U(e, y(i, r))
			}
			return o
		},
		C.pseudos.nth = C.pseudos.eq,
		C.filters = w.prototype = C.pseudos,
		C.setFilters = new w,
		D(),
		a.attr = ct.attr,
		ct.find = a,
		ct.expr = a.selectors,
		ct.expr[":"] = ct.expr.pseudos,
		ct.unique = a.uniqueSort,
		ct.text = a.getText,
		ct.isXMLDoc = a.isXML,
		ct.contains = a.contains
	} (e);
	var It = /Until$/,
	Wt = /^(?:parents|prev(?:Until|All))/,
	Rt = /^.[^:#\[\.,]*$/,
	zt = ct.expr.match.needsContext,
	Xt = {
		children: !0,
		contents: !0,
		next: !0,
		prev: !0
	};
	ct.fn.extend({
		find: function(e) {
			var t, n, r, i = this.length;
			if ("string" != typeof e) return r = this,
			this.pushStack(ct(e).filter(function() {
				for (t = 0; i > t; t++) if (ct.contains(r[t], this)) return ! 0
			}));
			for (n = [], t = 0; i > t; t++) ct.find(e, this[t], n);
			return n = this.pushStack(i > 1 ? ct.unique(n) : n),
			n.selector = (this.selector ? this.selector + " ": "") + e,
			n
		},
		has: function(e) {
			var t, n = ct(e, this),
			r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) if (ct.contains(this, n[t])) return ! 0
			})
		},
		not: function(e) {
			return this.pushStack(f(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(f(this, e, !0))
		},
		is: function(e) {
			return !! e && ("string" == typeof e ? zt.test(e) ? ct(e, this.context).index(this[0]) >= 0 : ct.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			for (var n, r = 0,
			i = this.length,
			o = [], a = zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
				if (a ? a.index(n) > -1 : ct.find.matchesSelector(n, e)) {
					o.push(n);
					break
				}
				n = n.parentNode
			}
			return this.pushStack(o.length > 1 ? ct.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
			r = ct.merge(this.get(), n);
			return this.pushStack(ct.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
		}
	}),
	ct.fn.andSelf = ct.fn.addBack,
	ct.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t: null
		},
		parents: function(e) {
			return ct.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ct.dir(e, "parentNode", n)
		},
		next: function(e) {
			return u(e, "nextSibling")
		},
		prev: function(e) {
			return u(e, "previousSibling")
		},
		nextAll: function(e) {
			return ct.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return ct.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ct.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ct.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return ct.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return ct.sibling(e.firstChild)
		},
		contents: function(e) {
			return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ct.merge([], e.childNodes)
		}
	},
	function(e, t) {
		ct.fn[e] = function(n, r) {
			var i = ct.map(this, t, n);
			return It.test(e) || (r = n),
			r && "string" == typeof r && (i = ct.filter(r, i)),
			i = this.length > 1 && !Xt[e] ? ct.unique(i) : i,
			this.length > 1 && Wt.test(e) && (i = i.reverse()),
			this.pushStack(i)
		}
	}),
	ct.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"),
			1 === t.length ? ct.find.matchesSelector(t[0], e) ? [t[0]] : [] : ct.find.matches(e, t)
		},
		dir: function(e, n, r) {
			for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o),
			o = o[n];
			return i
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	Yt = / jQuery\d+="(?:null|\d+)"/g,
	Qt = RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
	Vt = /^\s+/,
	Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	Jt = /<([\w:]+)/,
	Kt = /<tbody/i,
	Zt = /<|&#?\w+;/,
	en = /<(?:script|style|link)/i,
	tn = /^(?:checkbox|radio)$/i,
	nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rn = /^$|\/(?:java|ecma)script/i,
	on = /^true\/(.*)/,
	an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	sn = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	},
	cn = d(Q),
	ln = cn.appendChild(Q.createElement("div"));
	sn.optgroup = sn.option,
	sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead,
	sn.th = sn.td,
	ct.fn.extend({
		text: function(e) {
			return ct.access(this,
			function(e) {
				return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e))
			},
			null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (ct.isFunction(e)) return this.each(function(t) {
				ct(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]),
				t.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return this.each(ct.isFunction(e) ?
			function(t) {
				ct(this).wrapInner(e.call(this, t))
			}: function() {
				var t = ct(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = ct.isFunction(e);
			return this.each(function(n) {
				ct(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0,
			function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0,
			function(e) { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1,
			function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = 0; null != (n = this[r]); r++)(!e || ct.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ct.cleanData(b(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && ct.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
				e.options && ct.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e,
			t = null == t ? e: t,
			this.map(function() {
				return ct.clone(this, e, t)
			})
		},
		html: function(e) {
			return ct.access(this,
			function(e) {
				var n = this[0] || {},
				r = 0,
				i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Yt, "") : t;
				if (! ("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Qt.test(e) || !ct.support.leadingWhitespace && Vt.test(e) || sn[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(Gt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {},
						1 === n.nodeType && (ct.cleanData(b(n, !1)), n.innerHTML = e);
						n = 0
					} catch(o) {}
				}
				n && this.empty().append(e)
			},
			null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = ct.isFunction(e);
			return t || "string" == typeof e || (e = ct(e).not(this).detach()),
			this.domManip([e], !0,
			function(e) {
				var t = this.nextSibling,
				n = this.parentNode;
				n && (ct(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, r) {
			e = tt.apply([], e);
			var i, o, a, s, c, l, u = 0,
			f = this.length,
			d = this,
			m = f - 1,
			v = e[0],
			y = ct.isFunction(v);
			if (y || !(1 >= f || "string" != typeof v || ct.support.checkClone) && nn.test(v)) return this.each(function(i) {
				var o = d.eq(i);
				y && (e[0] = v.call(this, i, n ? o.html() : t)),
				o.domManip(e, n, r)
			});
			if (f && (l = ct.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for (n = n && ct.nodeName(i, "tr"), s = ct.map(b(l, "script"), h), a = s.length; f > u; u++) o = l,
				u !== m && (o = ct.clone(o, !0, !0), a && ct.merge(s, b(o, "script"))),
				r.call(n && ct.nodeName(this[u], "table") ? p(this[u], "tbody") : this[u], o, u);
				if (a) for (c = s[s.length - 1].ownerDocument, ct.map(s, g), u = 0; a > u; u++) o = s[u],
				rn.test(o.type || "") && !ct._data(o, "globalEval") && ct.contains(c, o) && (o.src ? ct.ajax({
					url: o.src,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				}) : ct.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
				l = i = null
			}
			return this
		}
	}),
	ct.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	},
	function(e, t) {
		ct.fn[e] = function(e) {
			for (var n, r = 0,
			i = [], o = ct(e), a = o.length - 1; a >= r; r++) n = r === a ? this: this.clone(!0),
			ct(o[r])[t](n),
			nt.apply(i, n.get());
			return this.pushStack(i)
		}
	}),
	ct.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, c = ct.contains(e.ownerDocument, e);
			if (ct.support.html5Clone || ct.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e))) for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a) r[a] && y(i, r[a]);
			if (t) if (n) for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) v(i, r[a]);
			else v(e, o);
			return r = b(o, "script"),
			r.length > 0 && m(r, !c && b(e, "script")),
			r = s = i = null,
			o
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, c, l, u, f = e.length,
			p = d(t), h = [], g = 0; f > g; g++) if (o = e[g], o || 0 === o) if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);
			else if (Zt.test(o)) {
				for (s = s || p.appendChild(t.createElement("div")), c = (Jt.exec(o) || ["", ""])[1].toLowerCase(), u = sn[c] || sn._default, s.innerHTML = u[1] + o.replace(Gt, "<$1></$2>") + u[2], i = u[0]; i--;) s = s.lastChild;
				if (!ct.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !ct.support.tbody) for (o = "table" !== c || Kt.test(o) ? "<table>" !== u[1] || Kt.test(o) ? 0 : s: s.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
				for (ct.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
				s = p.lastChild
			} else h.push(t.createTextNode(o));
			for (s && p.removeChild(s), ct.support.appendChecked || ct.grep(b(h, "input"), x), g = 0; o = h[g++];) if ((!r || -1 === ct.inArray(o, r)) && (a = ct.contains(o.ownerDocument, o), s = b(p.appendChild(o), "script"), a && m(s), n)) for (i = 0; o = s[i++];) rn.test(o.type || "") && n.push(o);
			return s = null,
			p
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0,
			s = ct.expando,
			c = ct.cache,
			l = ct.support.deleteExpando,
			u = ct.event.special; null != (n = e[a]); a++) if ((t || ct.acceptData(n)) && (i = n[s], o = i && c[i])) {
				if (o.events) for (r in o.events) u[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
				c[i] && (delete c[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, Z.push(i))
			}
		}
	});
	var un, fn, dn, pn = /alpha\([^)]*\)/i,
	hn = /opacity\s*=\s*([^)]*)/,
	gn = /^(top|right|bottom|left)$/,
	mn = /^(none|table(?!-c[ea]).+)/,
	vn = /^margin/,
	yn = RegExp("^(" + lt + ")(.*)$", "i"),
	bn = RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
	xn = RegExp("^([+-])=(" + lt + ")", "i"),
	wn = {
		BODY: "block"
	},
	Tn = {
		position: "absolute",
		visibility: "hidden",
		display: "block"
	},
	kn = {
		letterSpacing: 0,
		fontWeight: 400
	},
	Cn = ["Top", "Right", "Bottom", "Left"],
	Nn = ["Webkit", "O", "Moz", "ms"];
	ct.fn.extend({
		css: function(e, n) {
			return ct.access(this,
			function(e, n, r) {
				var i, o, a = {},
				s = 0;
				if (ct.isArray(n)) {
					for (o = fn(e), i = n.length; i > s; s++) a[n[s]] = ct.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? ct.style(e, n, r) : ct.css(e, n)
			},
			e, n, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() { (t ? e: T(this)) ? ct(this).show() : ct(this).hide()
			})
		}
	}),
	ct.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = dn(e, "opacity");
						return "" === n ? "1": n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": ct.support.cssFloat ? "cssFloat": "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, c = ct.camelCase(n),
				l = e.style;
				if (n = ct.cssProps[c] || (ct.cssProps[c] = w(l, c)), s = ct.cssHooks[n] || ct.cssHooks[c], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o: l[n];
				if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[c] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					l[n] = r
				} catch(u) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, c = ct.camelCase(n);
			return n = ct.cssProps[c] || (ct.cssProps[c] = w(e.style, c)),
			s = ct.cssHooks[n] || ct.cssHooks[c],
			s && "get" in s && (a = s.get(e, !0, r)),
			a === t && (a = dn(e, n, i)),
			"normal" === a && n in kn && (a = kn[n]),
			"" === r || r ? (o = parseFloat(a), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o],
			e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}),
	e.getComputedStyle ? (fn = function(t) {
		return e.getComputedStyle(t, null)
	},
	dn = function(e, n, r) {
		var i, o, a, s = r || fn(e),
		c = s ? s.getPropertyValue(n) || s[n] : t,
		l = e.style;
		return s && ("" !== c || ct.contains(e.ownerDocument, e) || (c = ct.style(e, n)), bn.test(c) && vn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = c, c = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)),
		c
	}) : Q.documentElement.currentStyle && (fn = function(e) {
		return e.currentStyle
	},
	dn = function(e, n, r) {
		var i, o, a, s = r || fn(e),
		c = s ? s[n] : t,
		l = e.style;
		return null == c && l && l[n] && (c = l[n]),
		bn.test(c) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em": c, c = l.pixelLeft + "px", l.left = i, a && (o.left = a)),
		"" === c ? "auto": c
	}),
	ct.each(["height", "width"],
	function(e, n) {
		ct.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && mn.test(ct.css(e, "display")) ? ct.swap(e, Tn,
				function() {
					return E(e, n, i)
				}) : E(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && fn(e);
				return C(e, t, r ? N(e, n, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}),
	ct.support.opacity || (ct.cssHooks.opacity = {
		get: function(e, t) {
			return hn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
		},
		set: function(e, t) {
			var n = e.style,
			r = e.currentStyle,
			i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
			o = r && r.filter || n.filter || "";
			n.zoom = 1,
			(t >= 1 || "" === t) && "" === ct.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pn.test(o) ? o.replace(pn, i) : o + " " + i)
		}
	}),
	ct(function() {
		ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? ct.swap(e, {
					display: "inline-block"
				},
				dn, [e, "marginRight"]) : t
			}
		}),
		!ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"],
		function(e, n) {
			ct.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = dn(e, n), bn.test(r) ? ct(e).position()[n] + "px": r) : t
				}
			}
		})
	}),
	ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
	},
	ct.expr.filters.visible = function(e) {
		return ! ct.expr.filters.hidden(e)
	}),
	ct.each({
		margin: "",
		padding: "",
		border: "Width"
	},
	function(e, t) {
		ct.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0,
				i = {},
				o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Cn[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		},
		vn.test(e) || (ct.cssHooks[e + t].set = C)
	});
	var En = /%20/g,
	Sn = /\[\]$/,
	jn = /\r?\n/g,
	An = /^(?:submit|button|image|reset|file)$/i,
	Dn = /^(?:input|select|textarea|keygen)/i;
	ct.fn.extend({
		serialize: function() {
			return ct.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = ct.prop(this, "elements");
				return e ? ct.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
			}).map(function(e, t) {
				var n = ct(this).val();
				return null == n ? null: ct.isArray(n) ? ct.map(n,
				function(e) {
					return {
						name: t.name,
						value: e.replace(jn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(jn, "\r\n")
				}
			}).get()
		}
	}),
	ct.param = function(e, n) {
		var r, i = [],
		o = function(e, t) {
			t = ct.isFunction(t) ? t() : null == t ? "": t,
			i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e,
		function() {
			o(this.name, this.value)
		});
		else for (r in e) A(r, e[r], n, o);
		return i.join("&").replace(En, "+")
	},
	ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
	function(e, t) {
		ct.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}),
	ct.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var Ln, Hn, _n = ct.now(),
	Mn = /\?/,
	qn = /#.*$/,
	Fn = /([?&])_=[^&]*/,
	On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
	Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	$n = /^(?:GET|HEAD)$/,
	Pn = /^\/\//,
	In = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	Wn = ct.fn.load,
	Rn = {},
	zn = {},
	Xn = "*/".concat("*");
	try {
		Hn = V.href
	} catch(Un) {
		Hn = Q.createElement("a"),
		Hn.href = "",
		Hn = Hn.href
	}
	Ln = In.exec(Hn.toLowerCase()) || [],
	ct.fn.load = function(e, n, r) {
		if ("string" != typeof e && Wn) return Wn.apply(this, arguments);
		var i, o, a, s = this,
		c = e.indexOf(" ");
		return c >= 0 && (i = e.slice(c, e.length), e = e.slice(0, c)),
		ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"),
		s.length > 0 && ct.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments,
			s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
		}).complete(r &&
		function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}),
		this
	},
	ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
	function(e, t) {
		ct.fn[t] = function(e) {
			return this.on(t, e)
		}
	}),
	ct.each(["get", "post"],
	function(e, n) {
		ct[n] = function(e, r, i, o) {
			return ct.isFunction(r) && (o = o || i, i = r, r = t),
			ct.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}),
	ct.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Hn,
			type: "GET",
			isLocal: Bn.test(Ln[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Xn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": ct.parseJSON,
				"text xml": ct.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? H(H(e, ct.ajaxSettings), t) : H(ct.ajaxSettings, e)
		},
		ajaxPrefilter: D(Rn),
		ajaxTransport: D(zn),
		ajax: function(e, n) {
			function r(e, n, r, i) {
				var o, f, y, b, w, k = n;
				2 !== x && (x = 2, c && clearTimeout(c), u = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = _(d, T, r)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ct.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ct.etag[a] = w)), 204 === e ? (o = !0, k = "nocontent") : 304 === e ? (o = !0, k = "notmodified") : (o = M(d, b), k = o.state, f = o.data, y = o.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || k) + "", o ? g.resolveWith(p, [f, k, T]) : g.rejectWith(p, [T, k, y]), T.statusCode(v), v = t, l && h.trigger(o ? "ajaxSuccess": "ajaxError", [T, d, o ? f: y]), m.fireWith(p, [T, k]), l && (h.trigger("ajaxComplete", [T, d]), --ct.active || ct.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (n = e, e = t),
			n = n || {};
			var i, o, a, s, c, l, u, f, d = ct.ajaxSetup({},
			n),
			p = d.context || d,
			h = d.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
			g = ct.Deferred(),
			m = ct.Callbacks("once memory"),
			v = d.statusCode || {},
			y = {},
			b = {},
			x = 0,
			w = "canceled",
			T = {
				readyState: 0,
				getResponseHeader: function(e) {
					var t;
					if (2 === x) {
						if (!f) for (f = {}; t = On.exec(s);) f[t[1].toLowerCase()] = t[2];
						t = f[e.toLowerCase()]
					}
					return null == t ? null: t
				},
				getAllResponseHeaders: function() {
					return 2 === x ? s: null
				},
				setRequestHeader: function(e, t) {
					var n = e.toLowerCase();
					return x || (e = b[n] = b[n] || e, y[e] = t),
					this
				},
				overrideMimeType: function(e) {
					return x || (d.mimeType = e),
					this
				},
				statusCode: function(e) {
					var t;
					if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]];
					else T.always(e[T.status]);
					return this
				},
				abort: function(e) {
					var t = e || w;
					return u && u.abort(t),
					r(0, t),
					this
				}
			};
			if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Hn) + "").replace(qn, "").replace(Pn, Ln[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ct.trim(d.dataType || "*").toLowerCase().match(ut) || [""], null == d.crossDomain && (i = In.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Ln[3] || ("http:" === Ln[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = ct.param(d.data, d.traditional)), L(Rn, d, n, T), 2 === x) return T;
			l = d.global,
			l && 0 === ct.active++&&ct.event.trigger("ajaxStart"),
			d.type = d.type.toUpperCase(),
			d.hasContent = !$n.test(d.type),
			a = d.url,
			d.hasContent || (d.data && (a = d.url += (Mn.test(a) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = Fn.test(a) ? a.replace(Fn, "$1_=" + _n++) : a + (Mn.test(a) ? "&": "?") + "_=" + _n++)),
			d.ifModified && (ct.lastModified[a] && T.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && T.setRequestHeader("If-None-Match", ct.etag[a])),
			(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType),
			T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01": "") : d.accepts["*"]);
			for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
			if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === x)) return T.abort();
			w = "abort";
			for (o in {
				success: 1,
				error: 1,
				complete: 1
			}) T[o](d[o]);
			if (u = L(zn, d, n, T)) {
				T.readyState = 1,
				l && h.trigger("ajaxSend", [T, d]),
				d.async && d.timeout > 0 && (c = setTimeout(function() {
					T.abort("timeout")
				},
				d.timeout));
				try {
					x = 1,
					u.send(y, r)
				} catch(k) {
					if (! (2 > x)) throw k;
					r( - 1, k)
				}
			} else r( - 1, "No Transport");
			return T
		},
		getScript: function(e, n) {
			return ct.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return ct.get(e, t, n, "json")
		}
	}),
	ct.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return ct.globalEval(e),
				e
			}
		}
	}),
	ct.ajaxPrefilter("script",
	function(e) {
		e.cache === t && (e.cache = !1),
		e.crossDomain && (e.type = "GET", e.global = !1)
	}),
	ct.ajaxTransport("script",
	function(e) {
		if (e.crossDomain) {
			var n, r = Q.head || ct("head")[0] || Q.documentElement;
			return {
				send: function(t, i) {
					n = Q.createElement("script"),
					n.async = !0,
					e.scriptCharset && (n.charset = e.scriptCharset),
					n.src = e.url,
					n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					},
					r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var Yn = [],
	Qn = /(=)\?(?=&|$)|\?\?/;
	ct.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Yn.pop() || ct.expando + "_" + _n++;
			return this[e] = !0,
			e
		}
	}),
	ct.ajaxPrefilter("json jsonp",
	function(n, r, i) {
		var o, a, s, c = n.jsonp !== !1 && (Qn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Qn.test(n.data) && "data");
		return c || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, c ? n[c] = n[c].replace(Qn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || ct.error(o + " was not called"),
			s[0]
		},
		n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		},
		i.always(function() {
			e[o] = a,
			n[o] && (n.jsonpCallback = r.jsonpCallback, Yn.push(o)),
			s && ct.isFunction(a) && a(s[0]),
			s = a = t
		}), "script") : t
	});
	var Vn, Gn, Jn = 0,
	Kn = e.ActiveXObject &&
	function() {
		var e;
		for (e in Vn) Vn[e](t, !0)
	};
	ct.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return ! this.isLocal && q() || F()
	}: q,
	Gn = ct.ajaxSettings.xhr(),
	ct.support.cors = !!Gn && "withCredentials" in Gn,
	Gn = ct.support.ajax = !!Gn,
	Gn && ct.ajaxTransport(function(n) {
		if (!n.crossDomain || ct.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, c = n.xhr();
					if (n.username ? c.open(n.type, n.url, n.async, n.username, n.password) : c.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) c[s] = n.xhrFields[s];
					n.mimeType && c.overrideMimeType && c.overrideMimeType(n.mimeType),
					n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) c.setRequestHeader(s, i[s])
					} catch(l) {}
					c.send(n.hasContent && n.data || null),
					r = function(e, i) {
						var s, l, u, f;
						try {
							if (r && (i || 4 === c.readyState)) if (r = t, a && (c.onreadystatechange = ct.noop, Kn && delete Vn[a]), i) 4 !== c.readyState && c.abort();
							else {
								f = {},
								s = c.status,
								l = c.getAllResponseHeaders(),
								"string" == typeof c.responseText && (f.text = c.responseText);
								try {
									u = c.statusText
								} catch(d) {
									u = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
							}
						} catch(p) {
							i || o( - 1, p)
						}
						f && o(s, u, f, l)
					},
					n.async ? 4 === c.readyState ? setTimeout(r) : (a = ++Jn, Kn && (Vn || (Vn = {},
					ct(e).unload(Kn)), Vn[a] = r), c.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Zn, er, tr = /^(?:toggle|show|hide)$/,
	nr = RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
	rr = /queueHooks$/,
	ir = [I],
	or = {
		"*": [function(e, t) {
			var n, r, i = this.createTween(e, t),
			o = nr.exec(t),
			a = i.cur(),
			s = +a || 0,
			c = 1,
			l = 20;
			if (o) {
				if (n = +o[2], r = o[3] || (ct.cssNumber[e] ? "": "px"), "px" !== r && s) {
					s = ct.css(i.elem, e, !0) || n || 1;
					do c = c || ".5",
					s /= c,
					ct.style(i.elem, e, s + r);
					while (c !== (c = i.cur() / a) && 1 !== c && --l)
				}
				i.unit = r,
				i.start = s,
				i.end = o[1] ? s + (o[1] + 1) * n: n
			}
			return i
		}]
	};
	ct.Animation = ct.extend($, {
		tweener: function(e, t) {
			ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0,
			i = e.length; i > r; r++) n = e[r],
			or[n] = or[n] || [],
			or[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? ir.unshift(e) : ir.push(e)
		}
	}),
	ct.Tween = W,
	W.prototype = {
		constructor: W,
		init: function(e, t, n, r, i, o) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = o || (ct.cssNumber[n] ? "": "px")
		},
		cur: function() {
			var e = W.propHooks[this.prop];
			return e && e.get ? e.get(this) : W.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = W.propHooks[this.prop];
			return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : W.propHooks._default.set(this),
			this
		}
	},
	W.prototype.init.prototype = W.prototype,
	W.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
			},
			set: function(e) {
				ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	W.propHooks.scrollTop = W.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	ct.each(["toggle", "show", "hide"],
	function(e, t) {
		var n = ct.fn[t];
		ct.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i)
		}
	}),
	ct.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(T).css("opacity", 0).show().end().animate({
				opacity: t
			},
			e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = ct.isEmptyObject(e),
			o = ct.speed(t, n, r),
			a = function() {
				var t = $(this, ct.extend({},
				e), o);
				a.finish = function() {
					t.stop(!0)
				},
				(i || ct._data(this, "finish")) && t.stop(!0)
			};
			return a.finish = a,
			i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
				var t = e.stop;
				delete e.stop,
				t(r)
			};
			return "string" != typeof e && (r = n, n = e, e = t),
			n && e !== !1 && this.queue(e || "fx", []),
			this.each(function() {
				var t = !0,
				n = null != e && e + "queueHooks",
				o = ct.timers,
				a = ct._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && ct.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"),
			this.each(function() {
				var t, n = ct._data(this),
				r = n[e + "queue"],
				i = n[e + "queueHooks"],
				o = ct.timers,
				a = r ? r.length: 0;
				for (n.finish = !0, ct.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}),
	ct.each({
		slideDown: R("show"),
		slideUp: R("hide"),
		slideToggle: R("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	},
	function(e, t) {
		ct.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	ct.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? ct.extend({},
		e) : {
			complete: n || !n && t || ct.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !ct.isFunction(t) && t
		};
		return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default,
		(null == r.queue || r.queue === !0) && (r.queue = "fx"),
		r.old = r.complete,
		r.complete = function() {
			ct.isFunction(r.old) && r.old.call(this),
			r.queue && ct.dequeue(this, r.queue)
		},
		r
	},
	ct.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return.5 - Math.cos(e * Math.PI) / 2
		}
	},
	ct.timers = [],
	ct.fx = W.prototype.init,
	ct.fx.tick = function() {
		var e, n = ct.timers,
		r = 0;
		for (Zn = ct.now(); n.length > r; r++) e = n[r],
		e() || n[r] !== e || n.splice(r--, 1);
		n.length || ct.fx.stop(),
		Zn = t
	},
	ct.fx.timer = function(e) {
		e() && ct.timers.push(e) && ct.fx.start()
	},
	ct.fx.interval = 13,
	ct.fx.start = function() {
		er || (er = setInterval(ct.fx.tick, ct.fx.interval))
	},
	ct.fx.stop = function() {
		clearInterval(er),
		er = null
	},
	ct.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	},
	ct.fx.step = {},
	ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(e) {
		return ct.grep(ct.timers,
		function(t) {
			return e === t.elem
		}).length
	}),
	ct.fn.offset = function(e) {
		if (arguments.length) return e === t ? this: this.each(function(t) {
			ct.offset.setOffset(this, e, t)
		});
		var n, r, i = {
			top: 0,
			left: 0
		},
		o = this[0],
		a = o && o.ownerDocument;
		return a ? (n = a.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = z(a), {
			top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : i) : void 0
	},
	ct.offset = {
		setOffset: function(e, t, n) {
			var r = ct.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i, o, a = ct(e),
			s = a.offset(),
			c = ct.css(e, "top"),
			l = ct.css(e, "left"),
			u = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [c, l]) > -1,
			f = {},
			d = {};
			u ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(c) || 0, o = parseFloat(l) || 0),
			ct.isFunction(t) && (t = t.call(e, n, s)),
			null != t.top && (f.top = t.top - s.top + i),
			null != t.left && (f.left = t.left - s.left + o),
			"using" in t ? t.using.call(e, f) : a.css(f)
		}
	},
	ct.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
				r = this[0];
				return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)),
				{
					top: t.top - n.top - ct.css(r, "marginTop", !0),
					left: t.left - n.left - ct.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Q.documentElement; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
				return e || Q.documentElement
			})
		}
	}),
	ct.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	},
	function(e, n) {
		var r = /Y/.test(n);
		ct.fn[e] = function(i) {
			return ct.access(this,
			function(e, i, o) {
				var a = z(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o: ct(a).scrollTop()) : e[i] = o, t)
			},
			e, i, arguments.length, null)
		}
	}),
	ct.each({
		Height: "height",
		Width: "width"
	},
	function(e, n) {
		ct.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		},
		function(r, i) {
			ct.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
				s = r || (i === !0 || o === !0 ? "margin": "border");
				return ct.access(this,
				function(n, r, i) {
					var o;
					return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s)
				},
				n, a ? i: t, a, null)
			}
		})
	}),
	e.jQuery = e.$ = ct,
	"function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
	function() {
		return ct
	})
} (window);
var objectFitImages = function() {
	"use strict";
	function e(e, t) {
		return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
	}
	function t(e) {
		if (e.srcset && !g && window.picturefill) {
			var t = window.picturefill._;
			e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
				reselect: !0
			}),
			e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
				reselect: !0
			})),
			e.currentSrc = e[t.ns].curSrc || e.src
		}
	}
	function n(e) {
		for (var t, n = getComputedStyle(e).fontFamily, r = {}; null !== (t = u.exec(n));) r[t[1]] = t[2];
		return r
	}
	function r(t, n, r) {
		var i = e(n || 1, r || 0);
		m.call(t, "src") !== i && v.call(t, "src", i)
	}
	function i(e, t) {
		e.naturalWidth ? t(e) : setTimeout(i, 100, e, t)
	}
	function o(e) {
		var o = n(e),
		s = e[l];
		if (o["object-fit"] = o["object-fit"] || "fill", !s.img) {
			if ("fill" === o["object-fit"]) return;
			if (!s.skipTest && d && !o["object-position"]) return
		}
		if (!s.img) {
			s.img = new Image(e.width, e.height),
			s.img.srcset = m.call(e, "data-ofi-srcset") || e.srcset,
			s.img.src = m.call(e, "data-ofi-src") || e.src,
			v.call(e, "data-ofi-src", e.src),
			e.srcset && v.call(e, "data-ofi-srcset", e.srcset),
			r(e, e.naturalWidth || e.width, e.naturalHeight || e.height),
			e.srcset && (e.srcset = "");
			try {
				a(e)
			} catch(c) {
				window.console && console.warn("https://bit.ly/ofi-old-browser")
			}
		}
		t(s.img),
		e.style.backgroundImage = 'url("' + (s.img.currentSrc || s.img.src).replace(/"/g, '\\"') + '")',
		e.style.backgroundPosition = o["object-position"] || "center",
		e.style.backgroundRepeat = "no-repeat",
		e.style.backgroundOrigin = "content-box",
		/scale-down/.test(o["object-fit"]) ? i(s.img,
		function() {
			e.style.backgroundSize = s.img.naturalWidth > e.width || s.img.naturalHeight > e.height ? "contain": "auto"
		}) : e.style.backgroundSize = o["object-fit"].replace("none", "auto").replace("fill", "100% 100%"),
		i(s.img,
		function(t) {
			r(e, t.naturalWidth, t.naturalHeight)
		})
	}
	function a(e) {
		var t = {
			get: function(t) {
				return e[l].img[t ? t: "src"]
			},
			set: function(t, n) {
				return e[l].img[n ? n: "src"] = t,
				v.call(e, "data-ofi-" + n, t),
				o(e),
				t
			}
		};
		Object.defineProperty(e, "src", t),
		Object.defineProperty(e, "currentSrc", {
			get: function() {
				return t.get("currentSrc")
			}
		}),
		Object.defineProperty(e, "srcset", {
			get: function() {
				return t.get("srcset")
			},
			set: function(e) {
				return t.set(e, "srcset")
			}
		})
	}
	function s() {
		function e(e, t) {
			return e[l] && e[l].img && ("src" === t || "srcset" === t) ? e[l].img: e
		}
		p || (HTMLImageElement.prototype.getAttribute = function(t) {
			return m.call(e(this, t), t)
		},
		HTMLImageElement.prototype.setAttribute = function(t, n) {
			return v.call(e(this, t), t, String(n))
		})
	}
	function c(e, t) {
		var n = !y && !e;
		if (t = t || {},
		e = e || "img", p && !t.skipTest || !h) return ! 1;
		"img" === e ? e = document.getElementsByTagName("img") : "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
		for (var r = 0; r < e.length; r++) e[r][l] = e[r][l] || {
			skipTest: t.skipTest
		},
		o(e[r]);
		n && (document.body.addEventListener("load",
		function(e) {
			"IMG" === e.target.tagName && c(e.target, {
				skipTest: t.skipTest
			})
		},
		!0), y = !0, e = "img"),
		t.watchMQ && window.addEventListener("resize", c.bind(null, e, {
			skipTest: t.skipTest
		}))
	}
	var l = "bfred-it:object-fit-images",
	u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
	f = "undefined" == typeof Image ? {
		style: {
			"object-position": 1
		}
	}: new Image,
	d = "object-fit" in f.style,
	p = "object-position" in f.style,
	h = "background-size" in f.style,
	g = "string" == typeof f.currentSrc,
	m = f.getAttribute,
	v = f.setAttribute,
	y = !1;
	return c.supportsObjectFit = d,
	c.supportsObjectPosition = p,
	s(),
	c
} ();
$.fn.scrollFade = function(e) {
	var t, n, r, i = $(this),
	o = !1,
	a = {
		speed: 10,
		distance: "10px",
		direction: "top"
	};
	a = $.extend(a, e),
	t = $(window).height();
	var s = 0,
	c = 0;
	$(window).scroll(function() {
		o && clearTimeout(o),
		o = setTimeout(function() {
			n = $(this).scrollTop(),
			null != window.pageYOffset ? c = window.pageYOffset: "CSS1Compat" == document.compatMode && (c = document.documentElement.scrollTop),
			i.each(function() {
				var e = $(this);
				r = e.offset().top,
				r - n > -10 && t + 10 > r - n ? e.hasClass("scroll-visible") ? "": e.removeClass("scroll-hidden").addClass("scroll-visible") : s > c && r - n > t + 10 ? e.removeClass("scroll-visible").addClass("scroll-hidden") : ""
			}),
			s = c
		},
		a.speed)
	})
},
$.prototype.dialog = function() {
	var e = '<div class="m-dialog act-dialog"><div class="content"><div class="gif"><i class="gif-1"></i><i class="gif-2"></i><i class="gif-3"></i><i class="gif-4"></i><i class="gif-5"></i><i class="gif-6"></i><i class="gif-7"></i><i class="gif-8"></i><i class="gif-9"></i><i class="gif-10"></i><i class="gif-11"></i><i class="gif-12"></i></div><p>加载中...</p></div></div>';
	this.append(e)
},
$.prototype.removeDialog = function() {
	this.find(".act-dialog").remove()
},
$.fn.slide = function(e, t) {
	var n = $(this),
	r = 0,
	i = 0,
	o = 0,
	n = this[0],
	a = t,
	s = e;
	n.addEventListener("touchstart",
	function(e) {
		var t = e.originalEvent ? e.originalEvent.touches: e.touches;
		r = t[0].clientX,
		startY = t[0].clientY
	}),
	n.addEventListener("touchmove",
	function(e) {
		var t = e.originalEvent ? e.originalEvent.touches: e.touches;
		i = t[0].clientX,
		o = t[0].clientY
	}),
	n.addEventListener("touchend",
	function() {
		var e = Math.abs(o - startY) < 30;
		return s && i - r > 50 && e ? (s(n), !0) : a && r - i > 50 && e ? (a(n), !0) : void 0
	})
},
!


!
function(e) {
	var t = {
		init: function() {
			var e = this;
			e.render(),
			e.bind()
		},
		render: function() {
			var t = this;
			t.i = 0,
			t.navEnter = !1,
			t.dropEnter = !1,
			t.nav = e(".act-nav-box"),
			t.navTil = e(".j-nav-til"),
			t.droplist = t.nav.find(".droplist"),
			t.navDefaul = t.nav.find(".j-nav-default"),
			t.navFixed = t.nav.find(".j-nav-fixed"),
			t.mTil = e(".j-til"),
			t.mDropDown = e(".j-m-droplist"),
			t.exband = e(".j-exband"),
			e(window).width() > 768 ? (e(".j-set-white-nav").length ? t.navDefaul.addClass("nav-fixed") : "", e(".act-set-light-banner-nav").length ? t.nav.addClass("light-banner-nav") : "") : e(document).on("click",
			function() {
				t.exband.hasClass("active") && (t.exband.removeClass("active"), t.mDropDown.slideUp())
			})
		},
		bind: function() {
			var t = this;
			t.navTil.on("mouseenter", e.proxy(t._do.navEnter, this)).on("mouseleave", e.proxy(t._do.navLeave, this)),
			t.droplist.on("mouseenter", e.proxy(t._do.dropEnter, this)).on("mouseleave", e.proxy(t._do.dropLeave, this)),
			t.mTil.on("click", e.proxy(t._do.exband, this)),
			t.exband.on("click", e.proxy(t._do.dropDown, this)),
			t._do.scroll.call(t),
			e(window).scroll(function() {
				t._do.scroll.call(t)
			})
		},
		_do: {
			navEnter: function(t) {
				var n = e(t.target),
				r = this;
				r.i = n.index() - 1,
				setTimeout(function() {
					n.addClass("cur").siblings("a").removeClass("cur"),
					r.droplist.show().find("ul").eq(r.i).show().siblings().hide()
				},
				3),
				r.navEnter = !0
			},
			navLeave: function(t) {
				var n = e(t.target),
				r = this;
				setTimeout(function() {
					r.dropEnter || (n.removeClass("cur"), r.droplist.hide().find("ul").eq(r.i).hide())
				},
				2),
				r.navEnter = !1
			},
			dropEnter: function() {
				var e = this;
				e.dropEnter = !0
			},
			dropLeave: function() {
				var e = this;
				setTimeout(function() {
					e.navEnter || (e.navTil.filter(".cur").removeClass("cur"), e.droplist.fadeOut().find("ul").eq(e.i).hide())
				},
				3),
				e.dropEnter = !1
			},
			navDefaulShow: function() {
				var e = this;
				e.navDefaul.hasClass("hide") && (e.nav.removeClass("fixed"), e.navFixed.addClass("hide").removeClass("show"), e.navDefaul.addClass("show").removeClass("hide"))
			},
			navFixedShow: function() {
				var e = this;
				e.navFixed.hasClass("hide") && (e.nav.addClass("fixed"), e.navDefaul.addClass("hide").removeClass("show"), e.navFixed.addClass("show").removeClass("hide"))
			},
			scroll: function() {
				var t = this,
				n = document.documentElement.scrollTop || document.body.scrollTop,
				r = e(window).width();
				n > 90 && r > 768 ? (t._do.navFixedShow.call(t), t.droplist.is(":visible") ? t.droplist.hide() : "") : t._do.navDefaulShow.call(t)
			},
			dropDown: function(t) {
				t.stopPropagation();
				var n = this,
				r = e(t.target);
				r.hasClass("active") ? (n.mDropDown.slideUp(300), r.removeClass("active")) : (n.mDropDown.slideDown(300), r.addClass("active"))
			},
			exband: function(t) {
				t.stopPropagation();
				var n = e(t.target).closest(".j-til");
				n.hasClass("cur") ? n.removeClass("cur").siblings().slideUp() : (n.parent().find(".j-til").removeClass("cur").siblings().hide(), n.addClass("cur").siblings().slideDown())
			}
		}
	};
	t.init()
} (jQuery),
!
function(e) {
	e.setCookie = function(e, t, n, r) {
		var i = new Date;
		i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
		var o = "expires=" + i.toUTCString(),
		a = e + "=" + t + "; " + o;
		a = r ? a + ";path=" + r: "",
		document.cookie = a
	},
	e.getCookie = function(e) {
		var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
		return (t = document.cookie.match(n)) ? unescape(t[2]) : null
	},
	e.delCookie = function(e, t) {
		var n, r, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
		if ((n = document.cookie.match(i)) && (r = unescape(n[2])), null != r) {
			var o = e + "=" + r + ";expires=" + new Date(new Date(0).getTime() - 1728e5).toGMTString();
			o = t ? o + ";path=" + t: ""
		}
	}
} (jQuery),
!
function() {
	function e(e) {
		var t = e,
		n = t.prev(),
		r = {
			email: n.val()
		},
		i = t.attr("subscribeType");
		i && (r.apply_for = i),
		$.ajax({
			url: t.attr("rel"),
			data: r,
			type: "POST",
			success: function(e) {
				if (t.addClass("act-newest-subscribe").text("订阅"), 200 == e.code) {
					sessionStorage.setItem("data-subscript-email", n.val()),
					t.prev().val(""),
					t.next().text("您已成功订阅，谢谢！");
					var r = t.attr("subscribeType") || "newest";
					$.setCookie("subscribe", r),
					window.open("/cn/subscript-preference")
				} else t.next().text(e.message)
			},
			error: function(e) {
				console.log(e),
				t.next().text("订阅失败，请重试！")
			}
		})
	}
	$(document).on("touchend", ".act-icon",
	function() {
		var e = $(this),
		t = e.attr("data-img"),
		n = e.closest(".act-contain-us");
		n.find(".act-footer-mask").show().find(".code-img-" + t).show().siblings("img").hide()
	}),
	$(document).on("touchend", ".act-footer-mask",
	function(e) {
		e.stopPropagation();
		var t = $(this);
		t.hide().find("img").hide()
	});
	var t = $.getCookie("subscribe");
	if (t) {
		var n = $(".act-newest-subscribe");
		n.attr("subscribeType") == t,
		n.next().text("您已成功订阅，谢谢！")
	}
	$(document).on("click", ".act-newest-subscribe",
	function() {
		var t = $(this),
		n = t.prev(),
		r = (t.next(), n.prev());
		t.attr("rel"),
		/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/.test(n.val()) ? (console.log("ddd9"), r.is(":hidden") ? "": r.hide(), t.removeClass("act-newest-subscribe").text("请稍等"), e(t)) : (console.log("d"), r.is(":hidden") ? r.text("请输入有效的电子邮箱！").show() : "")
	})
} (jQuery),
!
function(e) {
	function t(e, t, n, r) {
		var i = (window.screen.availHeight - 30 - r) / 2,
		o = (window.screen.availWidth - 10 - n) / 2;
		window.open(e, t, "height=" + r + ",innerHeight=" + r + ",width=" + n + ",innerWidth=" + n + ",top=" + i + ",left=" + o + ",toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no")
	} !
	function() {
		var e = document.createElement("script");
		e.src = "https://hm.baidu.com/hm.js?f306b9faeaaf03ca04d5eb48f1316a3d";
		var t = document.getElementsByTagName("script")[0];
		t.parentNode.insertBefore(e, t)
	} ();
	var n = setInterval(function() {
		var t = e(".lxb-close-btn"),
		r = e(".lxb-container");
		if (e(".lxb-container").length > 0) {
			t.remove(),
			r.css({
				width: "310px",
				height: "40px",
				right: "60px",
				bottom: "326px",
				opacity: "1",
				filter: "alpha(opacity = 100)",
				top: "auto"
			});
			var i = r.attr("style") + ";display: none !important;";
			r.css("cssText", i),
			r.find(".lxb-hide-btn").remove(),
			r.find(".lxb-cb-input").css({
				left: " 0",
				top: " 0",
				width: " 184px",
				height: " 36px",
				"line-height": " 36px",
				border: " 1px solid #ccc",
				"z-index": " 3",
				color: " rgb(165, 165, 165)",
				"border-radius": " 50px",
				"font-size": " 15px",
				"font-weight": " normal",
				"font-family": " simhei",
				background: " rgba(255, 255, 255,.9)",
				background: "#fff9",
				"box-sizing": "border-box"
			}),
			r.find(".lxb-cb-input-btn").css({
				left: " 188px",
				top: " 0",
				width: " 110px",
				height: " 34px",
				border: " 0px none rgb(0, 0, 0)",
				color: " #fff",
				"font-size": " 16px",
				"font-weight": " normal",
				"z-index": " 4",
				"line-height": " 19px",
				"font-family": " simhei",
				background: "rgba(49, 55, 79, .9)",
				background: "#31374f9",
				"box-sizing": " border-box"
			}),
			clearInterval(n)
		}
	},
	1);
	setTimeout(function() {
		clearInterval(n)
	},
	5e4);
	var r = e(".act-contact-box");
	e(window).width() > 768 && e(document).on("mouseenter", ".act-float-box,.lxb-container",
	function() {
		e(".lxb-container").show(),
		r.show()
	}).on("mouseleave", ".act-float-box",
	function() {
		e(".lxb-container").hide(),
		r.hide()
	}),
	e(".act-open-contact-window").on("click",
	function() {
		t("http://p.qiao.baidu.com//im/index?siteid=12804845&ucid=26814335", "在线咨询", 800, 600)
	})
} (jQuery),
("www.mlbeta.com" === location.host || "www.yunqiangfang.com" === location.host) && (!
function(e, t, n, r, i) {
	e[i] = e[i] ||
	function() { (e[i].q = e[i].q || []).push(arguments)
	},
	n = t.createElement("script"),
	tag = t.getElementsByTagName("script")[0],
	n.async = 1,
	n.src = ("https:" == document.location.protocol ? "https://": "http://") + r,
	tag.parentNode.insertBefore(n, tag)
} (window, document, "script", "assets.growingio.com/2.1/gio.js", "gio"), gio("init", "ac5eb04f9a3ad961", {}), gio("send")),
!
function(e) {
	function t(t, n) {
		var r = t,
		i = r.parent(),
		o = i.attr("data-rel");
		e.ajax({
			url: o,
			type: "POST",
			data: n,
			success: function(e) {
				200 === e.code ? parseInt(r.attr("data-ishelp")) ? i.hide().siblings().last().show() : i.hide().next().show() : alert("出错了，请重新尝试！")
			},
			error: function(e) {
				console.log(e)
			}
		})
	}
	var n = e(".act-ue-feedback"),
	r = [];
	n.length && n.on("click", ".act-yes-no",
	function() {
		var n = e(this);
		t(n, {
			is_help: n.attr("data-ishelp"),
			location_href: location.href,
			title: document.title
		})
	}).on("click", ".act-submit",
	function() {
		var i = e(this);
		n.find('input[type="checkbox"]').each(function() {
			var t = e(this);
			t.is(":checked") && r.push(t.val())
		}),
		(r.length || i.prev().val()) && t(i, {
			suggest: r,
			feedback: i.prev().val(),
			location_href: location.href,
			title: document.title
		})
	}).on("click", ".act-close",
	function() {
		e(this).parent().hide()
	})
} (jQuery);