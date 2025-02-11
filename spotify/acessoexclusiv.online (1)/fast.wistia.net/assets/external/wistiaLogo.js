var __webpack_modules__ = {
        962: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(40);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(null, arguments)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
                }
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function l(t, e, n) {
                return e = u(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, s() ? Reflect.construct(e, n || [], u(t).constructor) : e.apply(t, n))
            }

            function s() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (s = function() {
                    return !!t
                })()
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            const p = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), l(this, e, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (c = [{
                    key: "shouldComponentUpdate",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, r.h)("svg", o({}, (0, i.standardSvgAttrs)({
                            width: 103,
                            height: 34,
                            ariaHidden: !0
                        }), {
                            fill: "none"
                        }), (0, r.h)("path", {
                            fill: "#fff",
                            d: "M21.642 19.358h-2.406c-.76 0-1.485.196-1.985.77l-3.167 3.642c2.306.12 4.722.12 6.418.12 8.648 0 10.024-5.212 10.079-7.823-.79.94-3.027 3.287-8.944 3.287l.005.005Zm7.853-8.383c-.04.446-.285 2.266-5.457 2.266-4.206 0-5.902 0-10.049-.08l3.107 3.572c.605.695 1.475.965 2.395.98 1.026.015 2.441.03 2.666.03 5.817 0 8.293-2.711 8.293-4.642 0-.97-.325-1.655-.95-2.12l-.005-.005ZM45.19 13.056h3.092v7.308c0 .825-.17 1.51-.505 2.066-.33.55-.78.96-1.346 1.225-.56.265-1.185.4-1.885.4s-1.316-.135-1.886-.4a3.123 3.123 0 0 1-1.346-1.215 2.277 2.277 0 0 1-.1-.19c-.03.065-.065.125-.1.19-.33.545-.78.95-1.345 1.215-.56.265-1.186.4-1.886.4s-1.315-.13-1.86-.385a3.008 3.008 0 0 1-1.3-1.225c-.326-.55-.491-1.246-.496-2.076l-.075-7.308h3.091v6.748c0 .475.11.81.335 1.01.23.2.515.3.85.3.336 0 .64-.1.88-.3.25-.2.376-.535.376-1.01V13.06h3.066v6.748c0 .475.12.81.365 1.01.25.2.55.3.895.3.346 0 .63-.1.85-.3.22-.2.336-.535.336-1.01V13.06l-.005-.005Zm7.514-3.921a1.891 1.891 0 0 0-.86-.195c-.316 0-.606.065-.871.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .605-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.626-.55v.005Zm-2.411 14.67h3.09V13.186h-3.09v10.62Zm10.198-4.942a5.58 5.58 0 0 0-.58-.69c-.2-.195-.42-.4-.655-.625-.2-.185-.35-.35-.45-.495a.825.825 0 0 1-.15-.46c0-.286.155-.49.465-.61.31-.13.705-.196 1.195-.196.145 0 .3.005.475.02l-.29-2.816a5.143 5.143 0 0 0-.86-.065c-.765 0-1.485.1-2.15.3-.661.195-1.206.525-1.636 1-.43.476-.646 1.106-.646 1.891 0 .56.105 1.05.31 1.47.216.426.5.821.86 1.196.196.185.386.375.581.57.21.196.36.36.45.506.095.135.14.29.14.46 0 .285-.16.5-.485.645-.315.145-.765.215-1.355.215-.22 0-.4-.015-.54-.045l.4 2.861c.23.045.5.065.82.065.875 0 1.66-.12 2.356-.365.705-.245 1.26-.62 1.68-1.13.416-.516.625-1.156.625-1.926 0-.35-.05-.675-.15-.98-.1-.31-.235-.576-.4-.806l-.01.01Zm5.607 1.946c-.215-.215-.325-.55-.325-1v-3.912h2.241v-2.71h-2.24V10.51l-3.092.89v9.384c0 1.105.225 1.926.68 2.47.46.536 1.146.806 2.056.806.45 0 .885-.03 1.3-.095.416-.065.77-.165 1.066-.3l.55-2.666c-.345.085-.755.13-1.235.13-.45 0-.786-.105-1-.32Zm3.852 2.996h3.09V13.186h-3.09v10.62Zm2.41-14.67a1.891 1.891 0 0 0-.86-.195c-.315 0-.605.065-.87.195-.26.13-.465.31-.625.55a1.49 1.49 0 0 0-.225.815c0 .48.16.866.485 1.15.33.28.74.42 1.235.42.315 0 .606-.06.86-.184.266-.13.476-.31.626-.55.15-.236.225-.516.225-.84 0-.326-.075-.58-.225-.816-.15-.235-.36-.42-.625-.55v.005Zm13.65 4.051v10.62h-3.09v-1.747c-.316.51-.706.936-1.176 1.276-.665.48-1.45.72-2.346.72-.895 0-1.685-.235-2.366-.71-.675-.48-1.2-1.14-1.57-1.976-.375-.845-.56-1.805-.56-2.88 0-1.076.185-2.021.56-2.862.375-.845.895-1.505 1.57-1.976.68-.48 1.47-.72 2.366-.72.895 0 1.68.245 2.346.73.465.336.855.756 1.175 1.266V13.19h3.091v-.005Zm-3.29 6.623c.214-.386.325-.826.325-1.32 0-.496-.11-.936-.326-1.321a2.307 2.307 0 0 0-.86-.906 2.29 2.29 0 0 0-1.205-.335c-.44 0-.84.11-1.206.335a2.34 2.34 0 0 0-.86.916 2.653 2.653 0 0 0-.325 1.31c0 .485.11.93.325 1.32.215.386.5.69.86.916.365.215.765.32 1.206.32.44 0 .84-.105 1.205-.32a2.3 2.3 0 0 0 .86-.915Z"
                        }))
                    }
                }]) && a(n.prototype, c), s && a(n, s), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, c, s
            }(r.Component)
        },
        963: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(40);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(null, arguments)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, c(r.key), r)
                }
            }

            function c(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function l(t, e, n) {
                return e = u(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, s() ? Reflect.construct(e, n || [], u(t).constructor) : e.apply(t, n))
            }

            function s() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (s = function() {
                    return !!t
                })()
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            const p = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), l(this, e, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (c = [{
                    key: "shouldComponentUpdate",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, r.h)("svg", o({}, (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 50,
                            ariaHidden: !0
                        }), {
                            fill: "none"
                        }), (0, r.h)("path", {
                            transform: "translate(2, 10)",
                            d: "M16.09 17.1h-5.2c-1.58 0-3.08.68-4.11 1.87L.21 26.53c4.78.25 9.78.25 13.3.25 18.31 0 20.89-11.27 20.89-16.55-1.59 1.93-6.06 6.87-18.32 6.87ZM32.14 0c-.08.92-.59 4.69-11.31 4.69-8.72 0-12.24 0-20.83-.17l6.44 7.4a6.657 6.657 0 0 0 4.96 2.3c2.13.03 5.05.06 5.53.06 11.01 0 17.19-5.05 17.19-9.89 0-2.01-.67-3.44-1.97-4.4Z",
                            style: "fill:#fff;stroke-width:0"
                        }))
                    }
                }]) && a(n.prototype, c), s && a(n, s), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, c, s
            }(r.Component)
        },
        44: (t, e, n) => {
            n(21)
        },
        34: (t, e, n) => {
            n.d(e, {
                getAllApiHandles: () => i
            });
            n(35), n(13);
            var r = n(36);
            var i = function() {
                return (void 0 === (0, r.wData)("video") ? [] : Object.values((0, r.wData)("video"))).concat(void 0 === (0, r.wData)("iframe_api") ? [] : Object.values((0, r.wData)("iframe_api")))
            }
        },
        35: (t, e, n) => {
            n.d(e, {
                getAllApiEmbedElements: () => r
            });
            var r = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_embed",
                    e = document.querySelectorAll("div.".concat(t, ",span.").concat(t, ",iframe.").concat(t));
                return Array.from(e).map((function(t) {
                    var e;
                    return "WISTIA-PLAYER" === (null === (e = t.lastChild) || void 0 === e ? void 0 : e.nodeName) ? t.lastChild : t
                }))
            }
        },
        12: (t, e, n) => {
            n.d(e, {
                hasPerformanceMeasureSupport: () => r
            });
            var r = function() {
                var t = window.performance;
                return Boolean(t) && Boolean(t.measure)
            }
        },
        40: (t, e, n) => {
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        o(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function o(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                standardSvgAttrs: () => a
            });
            var a = function(t) {
                var e = t.width,
                    n = void 0 === e ? 40 : e,
                    r = t.height,
                    o = void 0 === r ? 34 : r,
                    a = t.styleOverride,
                    c = void 0 === a ? {} : a,
                    l = t.ariaHidden,
                    s = void 0 !== l && l,
                    u = t.fillColor,
                    f = void 0 === u ? "#ffffff" : u;
                return {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    "enable-background": "new 0 0 ".concat(n, " ").concat(o),
                    "aria-hidden": "".concat(!!s),
                    style: i({
                        fill: f,
                        height: "100%",
                        left: 0,
                        strokeWidth: 0,
                        top: 0,
                        width: "100%"
                    }, c)
                }
            }
        },
        11: (t, e, n) => {
            n.d(e, {
                Wistia: () => i
            });
            var r = n(10);
            null == r.root.Wistia && (r.root.Wistia = {}), null == r.root.Wistia._destructors && (r.root.Wistia._destructors = {}), null == r.root.Wistia._initializers && (r.root.Wistia._initializers = {}), null == r.root.Wistia._remoteData && (r.root.Wistia._remoteData = new Map), null == r.root.Wistia.api && (r.root.Wistia.api = function() {
                return console.error("Accessed Wistia.api() before it was initialized"), null
            }), null == r.root.Wistia.defineControl && (r.root.Wistia.defineControl = function() {
                return console.error("Accessed Wistia.defineControl() before it was initialized"), null
            }), null == r.root.Wistia.mixin && (r.root.Wistia.mixin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(e).forEach((function(n) {
                    (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    })(e, n) && (t[n] = e[n])
                }))
            }), null == r.root.Wistia.playlistMethods && (r.root.Wistia.playlistMethods = new Map), null == r.root.Wistia.PublicApi && (r.root.Wistia.PublicApi = null), null == r.root.Wistia.uncacheMedia && (r.root.Wistia.uncacheMedia = function() {
                return console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null
            }), null == r.root.Wistia.VisitorKey && (r.root.Wistia.VisitorKey = null), null == r.root.Wistia.visitorKey && (r.root.Wistia.visitorKey = null), null == r.root.Wistia.wistia && (r.root.Wistia.wistia = void 0), null == r.root.Wistia._mediaDataPromises && (r.root.Wistia._mediaDataPromises = {}), null == r.root.Wistia._liveStreamPollingPromises && (r.root.Wistia._liveStreamPollingPromises = {});
            var i = r.root.Wistia
        },
        2: (t, e, n) => {
            n.d(e, {
                Component: () => T,
                h: () => y,
                render: () => U
            });
            var r, i, o, a, c, l, s, u, f, p, d = {},
                h = [],
                _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                v = Array.isArray;

            function m(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function g(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function y(t, e, n) {
                var i, o, a, c = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : c[a] = e[a];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) void 0 === c[a] && (c[a] = t.defaultProps[a]);
                return b(t, c, i, o, null)
            }

            function b(t, e, n, r, a) {
                var c = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == a ? ++o : a,
                    __i: -1,
                    __u: 0
                };
                return null == a && null != i.vnode && i.vnode(c), c
            }

            function w(t) {
                return t.children
            }

            function T(t, e) {
                this.props = t, this.context = e
            }

            function W(t, e) {
                if (null == e) return t.__ ? W(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? W(t) : null
            }

            function O(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return O(t)
                }
            }

            function P(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !k.__r++ || c !== i.debounceRendering) && ((c = i.debounceRendering) || l)(k)
            }

            function k() {
                var t, e, n, r, o, c, l, u;
                for (a.sort(s); t = a.shift();) t.__d && (e = a.length, r = void 0, c = (o = (n = t).__v).__e, l = [], u = [], n.__P && ((r = m({}, o)).__v = o.__v + 1, i.vnode && i.vnode(r), D(n.__P, r, o, n.__n, n.__P.namespaceURI, 32 & o.__u ? [c] : null, l, null == c ? W(o) : c, !!(32 & o.__u), u), r.__v = o.__v, r.__.__k[r.__i] = r, B(l, r, u), r.__e != c && O(r)), a.length > e && a.sort(s));
                k.__r = 0
            }

            function S(t, e, n, r, i, o, a, c, l, s, u) {
                var f, p, _, v, m, g = r && r.__k || h,
                    y = e.length;
                for (n.__d = l, j(n, e, g), l = n.__d, f = 0; f < y; f++) null != (_ = n.__k[f]) && (p = -1 === _.__i ? d : g[_.__i] || d, _.__i = f, D(t, _, p, i, o, a, c, l, s, u), v = _.__e, _.ref && p.ref != _.ref && (p.ref && I(p.ref, null, _), u.push(_.ref, _.__c || v, _)), null == m && null != v && (m = v), 65536 & _.__u || p.__k === _.__k ? l = E(_, l, t) : "function" == typeof _.type && void 0 !== _.__d ? l = _.__d : v && (l = v.nextSibling), _.__d = void 0, _.__u &= -196609);
                n.__d = l, n.__e = m
            }

            function j(t, e, n) {
                var r, i, o, a, c, l = e.length,
                    s = n.length,
                    u = s,
                    f = 0;
                for (t.__k = [], r = 0; r < l; r++) null != (i = e[r]) && "boolean" != typeof i && "function" != typeof i ? (a = r + f, (i = t.__k[r] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? b(null, i, null, null, null) : v(i) ? b(w, {
                    children: i
                }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? b(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = t, i.__b = t.__b + 1, o = null, -1 !== (c = i.__i = A(i, n, a, u)) && (u--, (o = n[c]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == c && f--, "function" != typeof i.type && (i.__u |= 65536)) : c !== a && (c == a - 1 ? f-- : c == a + 1 ? f++ : (c > a ? f-- : f++, i.__u |= 65536))) : i = t.__k[r] = null;
                if (u)
                    for (r = 0; r < s; r++) null != (o = n[r]) && !(131072 & o.__u) && (o.__e == t.__d && (t.__d = W(o)), R(o, o))
            }

            function E(t, e, n) {
                var r, i;
                if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = E(r[i], e, n));
                    return e
                }
                t.__e != e && (e && t.type && !n.contains(e) && (e = W(t)), n.insertBefore(t.__e, e || null), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 === e.nodeType);
                return e
            }

            function A(t, e, n, r) {
                var i = t.key,
                    o = t.type,
                    a = n - 1,
                    c = n + 1,
                    l = e[n];
                if (null === l || l && i == l.key && o === l.type && !(131072 & l.__u)) return n;
                if (r > (null == l || 131072 & l.__u ? 0 : 1))
                    for (; a >= 0 || c < e.length;) {
                        if (a >= 0) {
                            if ((l = e[a]) && !(131072 & l.__u) && i == l.key && o === l.type) return a;
                            a--
                        }
                        if (c < e.length) {
                            if ((l = e[c]) && !(131072 & l.__u) && i == l.key && o === l.type) return c;
                            c++
                        }
                    }
                return -1
            }

            function x(t, e, n) {
                "-" === e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || _.test(e) ? n : n + "px"
            }

            function L(t, e, n, r, i) {
                var o;
                t: if ("style" === e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || x(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] === r[e] || x(t.style, e, n[e])
                    }
                else if ("o" === e[0] && "n" === e[1]) o = e !== (e = e.replace(/(PointerCapture)$|Capture$/i, "$1")), e = e.toLowerCase() in t || "onFocusOut" === e || "onFocusIn" === e ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = u, t.addEventListener(e, o ? p : f, o)) : t.removeEventListener(e, o ? p : f, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && "-" !== e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
                }
            }

            function C(t) {
                return function(e) {
                    if (this.l) {
                        var n = this.l[e.type + t];
                        if (null == e.t) e.t = u++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function D(t, e, n, r, o, a, c, l, s, u) {
                var f, p, d, h, _, g, y, b, W, O, P, k, j, E, A, x, L = e.type;
                if (void 0 !== e.constructor) return null;
                128 & n.__u && (s = !!(32 & n.__u), a = [l = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof L) try {
                    if (b = e.props, W = "prototype" in L && L.prototype.render, O = (f = L.contextType) && r[f.__c], P = f ? O ? O.props.value : f.__ : r, n.__c ? y = (p = e.__c = n.__c).__ = p.__E : (W ? e.__c = p = new L(b, P) : (e.__c = p = new T(b, P), p.constructor = L, p.render = N), O && O.sub(p), p.props = b, p.state || (p.state = {}), p.context = P, p.__n = r, d = p.__d = !0, p.__h = [], p._sb = []), W && null == p.__s && (p.__s = p.state), W && null != L.getDerivedStateFromProps && (p.__s == p.state && (p.__s = m({}, p.__s)), m(p.__s, L.getDerivedStateFromProps(b, p.__s))), h = p.props, _ = p.state, p.__v = e, d) W && null == L.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), W && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (W && null == L.getDerivedStateFromProps && b !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(b, P), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(b, p.__s, P) || e.__v === n.__v)) {
                            for (e.__v !== n.__v && (p.props = b, p.state = p.__s, p.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), k = 0; k < p._sb.length; k++) p.__h.push(p._sb[k]);
                            p._sb = [], p.__h.length && c.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(b, p.__s, P), W && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(h, _, g)
                        }))
                    }
                    if (p.context = P, p.props = b, p.__P = t, p.__e = !1, j = i.__r, E = 0, W) {
                        for (p.state = p.__s, p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), A = 0; A < p._sb.length; A++) p.__h.push(p._sb[A]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), p.state = p.__s
                        } while (p.__d && ++E < 25);
                    p.state = p.__s, null != p.getChildContext && (r = m(m({}, r), p.getChildContext())), W && !d && null != p.getSnapshotBeforeUpdate && (g = p.getSnapshotBeforeUpdate(h, _)), S(t, v(x = null != f && f.type === w && null == f.key ? f.props.children : f) ? x : [x], e, n, r, o, a, c, l, s, u), p.base = e.__e, e.__u &= -161, p.__h.length && c.push(p), y && (p.__E = p.__ = null)
                } catch (t) {
                    if (e.__v = null, s || null != a) {
                        for (e.__u |= s ? 160 : 128; l && 8 === l.nodeType && l.nextSibling;) l = l.nextSibling;
                        a[a.indexOf(l)] = null, e.__e = l
                    } else e.__e = n.__e, e.__k = n.__k;
                    i.__e(t, e, n)
                } else null == a && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = M(n.__e, e, n, r, o, a, c, s, u);
                (f = i.diffed) && f(e)
            }

            function B(t, e, n) {
                e.__d = void 0;
                for (var r = 0; r < n.length; r++) I(n[r], n[++r], n[++r]);
                i.__c && i.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        i.__e(t, e.__v)
                    }
                }))
            }

            function M(t, e, n, o, a, c, l, s, u) {
                var f, p, h, _, m, y, b, w = n.props,
                    T = e.props,
                    O = e.type;
                if ("svg" === O ? a = "http://www.w3.org/2000/svg" : "math" === O ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != c)
                    for (f = 0; f < c.length; f++)
                        if ((m = c[f]) && "setAttribute" in m == !!O && (O ? m.localName === O : 3 === m.nodeType)) {
                            t = m, c[f] = null;
                            break
                        }
                if (null == t) {
                    if (null === O) return document.createTextNode(T);
                    t = document.createElementNS(a, O, T.is && T), s && (i.__m && i.__m(e, c), s = !1), c = null
                }
                if (null === O) w === T || s && t.data === T || (t.data = T);
                else {
                    if (c = c && r.call(t.childNodes), w = n.props || d, !s && null != c)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(m = t.attributes[f]).name] = m.value;
                    for (f in w)
                        if (m = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) h = m;
                    else if (!(f in T)) {
                        if ("value" == f && "defaultValue" in T || "checked" == f && "defaultChecked" in T) continue;
                        L(t, f, null, m, a)
                    }
                    for (f in T) m = T[f], "children" == f ? _ = m : "dangerouslySetInnerHTML" == f ? p = m : "value" == f ? y = m : "checked" == f ? b = m : s && "function" != typeof m || w[f] === m || L(t, f, m, w[f], a);
                    if (p) s || h && (p.__html === h.__html || p.__html === t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
                    else if (h && (t.innerHTML = ""), S(t, v(_) ? _ : [_], e, n, o, "foreignObject" === O ? "http://www.w3.org/1999/xhtml" : a, c, l, c ? c[0] : n.__k && W(n, 0), s, u), null != c)
                        for (f = c.length; f--;) g(c[f]);
                    s || (f = "value", "progress" === O && null == y ? t.removeAttribute("value") : void 0 !== y && (y !== t[f] || "progress" === O && !y || "option" === O && y !== w[f]) && L(t, f, y, w[f], a), f = "checked", void 0 !== b && b !== t[f] && L(t, f, b, w[f], a))
                }
                return t
            }

            function I(t, e, n) {
                try {
                    if ("function" == typeof t) {
                        var r = "function" == typeof t.__u;
                        r && t.__u(), r && null == e || (t.__u = t(e))
                    } else t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function R(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || I(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && R(r[o], e, n || "function" != typeof t.type);
                n || g(t.__e), t.__c = t.__ = t.__e = t.__d = void 0
            }

            function N(t, e, n) {
                return this.constructor(t, n)
            }

            function U(t, e, n) {
                var o, a, c, l;
                i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, c = [], l = [], D(e, t = (!o && n || e).__k = y(w, null, [t]), a || d, d, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, c, !o && n ? n : a ? a.__e : e.firstChild, o, l), B(c, t, l)
            }
            r = h.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, a; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, T.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof t && (t = t(m({}, n), this.props)), t && m(n, t), null != t && this.__v && (e && this._sb.push(e), P(this))
            }, T.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), P(this))
            }, T.prototype.render = w, a = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, s = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, k.__r = 0, u = 0, f = C(!1), p = C(!0)
        },
        23: (t, e, n) => {
            n.d(e, {
                appHostname: () => r
            });
            var r = function() {
                return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app", ".").concat("wistia.com")
            }
        },
        177: (t, e, n) => {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, i(r.key), r)
                }
            }

            function i(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function o(t, e, n) {
                (function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                })(t, e), e.set(t, n)
            }

            function a(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }
            n.d(e, {
                default: () => l
            });
            var c = new WeakMap;
            const l = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), o(this, c, void 0), this.video = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = e, this.api = this.isWistiaPlayer ? this.embedElement : e.publicApi
                }, (e = [{
                    key: "mount",
                    value: function(t) {
                        this.rootElem = t
                    }
                }, {
                    key: "disabledButton",
                    get: function() {
                        return e = this, (t = c).get(a(t, e));
                        var t, e
                    },
                    set: function(t) {
                        var e, n, r;
                        n = this, r = t, (e = c).set(a(e, n), r)
                    }
                }]) && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        961: (t, e, n) => {
            var r = n(2),
                i = (n(38), n(44), n(67)),
                o = n(65),
                a = n(962),
                c = n(963);

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
                }
            }

            function s(t, e, n) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], f(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var h = function(t) {
                function e(t) {
                    var n, i, o, l;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n = s(this, e, [t]), i = n, l = function() {
                        n.buttonElem && ((0, r.render)(n.isEllipsisVisible() ? (0, r.h)(c.default, null) : (0, r.h)(a.default, null), n.buttonElem), n.reactMounts.button = [n.buttonElem])
                    }, (o = d(o = "renderButton")) in i ? Object.defineProperty(i, o, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[o] = l, n.video = t, n.largestButtonWidth = e.largestButtonWidth, n.unbinds.push(t.on("widthchange", n.renderButton)), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && p(t, e)
                }(e, t), n = e, (i = [{
                    key: "mountButton",
                    value: function(t) {
                        this.buttonElem = t, this.setButtonLabel("Wistia Logo -- Learn More"), this.renderButton()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        (0, o.destroyControl)(this)
                    }
                }, {
                    key: "onControlPropsUpdated",
                    value: function() {
                        this._destroyed || this.renderButton()
                    }
                }, {
                    key: "isActuallyLink",
                    value: function() {
                        return !0
                    }
                }, {
                    key: "linkAttrs",
                    value: function() {
                        return {
                            href: "https://wistia.com/?utm_type=player&utm_campaign=wistia-branding&utm_medium=referral&utm_source=wistia&about=".concat(this.video._mediaData.accountKey.match(/\d+/)[0]),
                            ariaLabel: "Learn more about Wistia's products",
                            target: "_blank"
                        }
                    }
                }, {
                    key: "onClickButton",
                    value: function() {
                        window.open(this.linkAttrs().href, this.linkAttrs().target)
                    }
                }, {
                    key: "isEllipsisVisible",
                    value: function() {
                        var t, e, n, r = (null === (t = this.video._impl.ui) || void 0 === t ? void 0 : t.getControlsByType("control-bar-right")) || [],
                            i = (null === (e = this.video._impl.ui) || void 0 === e ? void 0 : e.getControlsByType("playbar")) || [],
                            o = r.length > 0 && i.length > 0 && this.video._impl.ui && !this.video._impl.ui.shouldShowMoreDefaultValue();
                        return (null === (n = this.video._impl.ui) || void 0 === n ? void 0 : n.getControlsByType("ellipsis").length) > 0 || o
                    }
                }, {
                    key: "wistiaLogoButtonWidth",
                    value: function() {
                        return this.isEllipsisVisible() ? 40 : this.largestButtonWidth
                    }
                }]) && l(n.prototype, i), u && l(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, i, u
            }(n(177).default);
            h.handle = "wistiaLogo", h.type = "wistia-logo", h.sortValue = 2e3, h.largestButtonWidth = 120, h.shouldMount = function(t) {
                return t.plugin.wistiaLogo
            }, (0, i.defineControl)(h)
        },
        964: (t, e, n) => {
            var r = n(11);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
                }
            }

            function o(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, a() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function a() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (a = function() {
                    return !!t
                })()
            }

            function c() {
                return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = l(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, c.apply(null, arguments)
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function s(t, e) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, s(t, e)
            }

            function u(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var f = function(t) {
                function e(t, n) {
                    var r, i, a, c;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), r = o(this, e, [t, n]), i = r, c = function() {
                        var t, e = r.video;
                        t = e._impl.ui && e._impl.ui.spaceForPlaybar ? e._impl.ui.spaceForPlaybar() : 0, r.isHidden && (t -= r.widthWhenHidden), e._impl.ui && t < 0 ? (r.isHidden = !0, e.controls.wistiaLogo && (r.widthWhenHidden = e.controls.wistiaLogo.props.width), e.setControlEnabled("wistiaLogo", !1)) : (r.isHidden = !1, e.setControlEnabled("wistiaLogo", !0))
                    }, (a = u(a = "hideIfNoRoom")) in i ? Object.defineProperty(i, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : i[a] = c, r.pluginName = "wistiaLogo", r.video = t, r.options = n, r._origImpl = t._impl, t.setControlEnabled("wistiaLogo", !0), t.embedded(r.hideIfNoRoom), t.bind("widthchange", r.hideIfNoRoom), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && s(t, e)
                }(e, t), n = e, r = [{
                    key: "remove",
                    value: function() {
                        var t, n, r, i, o;
                        this.video.setControlEnabled("wistiaLogo", !1), (t = e, n = "remove", r = this, o = c(l(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                            return o.apply(r, t)
                        } : o)([])
                    }
                }], r && i(n.prototype, r), a && i(n, a), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, r, a
            }(r.Wistia.Plugin.Base);
            r.Wistia.plugin("wistiaLogo", (function(t, e) {
                return new f(t, e)
            }))
        },
        65: (t, e, n) => {
            n.d(e, {
                destroyControl: () => c
            });
            n(5);
            var r = n(9),
                i = (n(66), n(3)),
                o = n(2),
                a = (n(24), n(67), function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                }),
                c = ((0, r.cachedDetect)(), function(t) {
                    t._destroyed = !0,
                        function(t) {
                            t.unbinds instanceof Array && (t.unbinds.forEach((function(t) {
                                try {
                                    "function" == typeof t && t()
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.unbinds = null)
                        }(t),
                        function(t) {
                            t.eventListeners instanceof Map && (t.eventListeners.forEach((function(e, n) {
                                try {
                                    "function" == typeof e && t.embedElement.removeEventListener(n, e)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.eventListeners.clear())
                        }(t), l(t), u(t), f(t)
                }),
                l = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                s = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                u = function(t) {
                    var e = t.reactMounts;
                    if (e)
                        if (e instanceof Array) s(e);
                        else
                            for (var n in e) a(e, n) && e[n] && s(e[n])
                },
                f = function(t) {
                    for (var e in t) a(t, e) && ("_" !== (n = e)[0] || "_" !== n[1]) && "mounted" !== e && (t[e] = null);
                    var n;
                    t.__prevProps = null, t._destroyed = !0
                }
        },
        67: (t, e, n) => {
            n.d(e, {
                defineControl: () => o,
                getControlDefinitions: () => a
            });
            var r = n(30),
                i = n(11);
            null == i.Wistia._controlDefinitions && (i.Wistia._controlDefinitions = {});
            var o = function(t) {
                    null != t.handle ? null == i.Wistia._controlDefinitions[t.handle] && (i.Wistia._controlDefinitions[t.handle] = t, i.Wistia.trigger && i.Wistia.trigger("controldefined", t)) : console.error("Please specify a handle property for control", t)
                },
                a = function() {
                    return i.Wistia._controlDefinitions || {}
                };
            i.Wistia.defineControl = function(t) {
                (0, r.countMetric)("player/custom-control-definition", 1, {
                    name: t.handle,
                    location: location.origin + location.pathname
                }), o(t)
            }
        },
        5: (t, e, n) => {
            n.d(e, {
                assign: () => i
            });
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if (Object.assign) return Object.assign.apply(Object, [t].concat(n));
                    for (var i = 0; i < n.length; i++) o(t, n[i]);
                    return t
                },
                o = function(t, e) {
                    for (var n in e) r(e, n) && (t[n] = e[n]);
                    return t
                }
        },
        16: (t, e, n) => {
            n.d(e, {
                bind: () => s,
                bindNamed: () => _,
                trigger: () => p,
                unbind: () => u,
                unbindAllInNamespace: () => m,
                unbindNamed: () => v
            });
            var r = n(11),
                i = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                };

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var c, l = Array.prototype.slice,
                s = function(t, e) {
                    var n = this;
                    return n._bindings || (n._bindings = {}), n._bindings[t] || (n._bindings[t] = []), n._bindings[t].push(e),
                        function() {
                            n.unbind(t, e)
                        }
                },
                u = function(t, e) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var n = [], r = 0; r < this._bindings[t].length; r++) {
                        var i = this._bindings[t][r];
                        i !== e && n.push(i)
                    }
                    this._bindings[t] = n
                },
                f = function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), {
                        event: t,
                        fn: e
                    }
                },
                p = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && d.apply(this, ["all", t].concat(n)), d.apply(this, [t].concat(n))
                },
                d = function(t) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var e, n = l.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
                        var c = i[a];
                        try {
                            c.apply(this, n) === this.unbind && (null == e && (e = []), e.push({
                                event: t,
                                fn: c
                            }))
                        } catch (t) {
                            if (this._throwTriggerErrors) throw t;
                            r.Wistia.error && r.Wistia.error(t)
                        }
                    }
                    if (e)
                        for (var s = 0; s < e.length; s++) {
                            var u = e[s];
                            this.unbind(u.event, u.fn)
                        }
                    return this
                },
                h = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                _ = function(t, e, n, r) {
                    return this.unbindNamed(t, e),
                        function(t, e, n, r, i) {
                            h(t, e), t._namedBindings[e][n] = {
                                event: r,
                                fn: i
                            }
                        }(this, t, e, n, r), this.bind(n, r),
                        function() {
                            this.unbindNamed(t, e)
                        }
                },
                v = function(t, e) {
                    h(this, t);
                    var n = function(t, e, n) {
                        return h(t, e), t._namedBindings[e][n]
                    }(this, t, e);
                    if (n) {
                        var r = n.event,
                            i = n.fn;
                        this.unbind(r, i)
                    }
                    var o = this._namedBindings;
                    return delete o[t][e], g(o[t]) && delete o[t], this
                },
                m = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                g = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                };
            (c = function() {}.prototype).bind = s, c.unbind = u, c.on = s, c.off = u, c.rebind = f, c.trigger = p, c.bindNamed = _, c.unbindNamed = v, c.unbindAllInNamespace = m
        },
        9: (t, e, n) => {
            n.d(e, {
                cachedDetect: () => z
            });
            var r, i = n(10),
                o = n(11),
                a = n(12),
                c = navigator.userAgent,
                l = /(webkit)[ /]([^\s]+)/i,
                s = /OPR\/([^\s]+)/i,
                u = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                p = /(android) ([^;]+)/i,
                d = /(iphone)/i,
                h = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                _ = /OS (\d+)_(\d+)/i,
                v = /(playstation 3)/i,
                m = /BlackBerry|BB10/i,
                g = /(firefox)/i,
                y = /Mobile VR/i,
                b = /Version\/([^\s]+)/i,
                w = function() {
                    return (W()[1] || "webkit").toLowerCase()
                },
                T = function() {
                    return W()[2]
                },
                W = function() {
                    var t;
                    return (t = c.match(u)) || (t = c.match(l)) || (t = c.match(s)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = c.match(f)) || []
                },
                O = function() {
                    var t = c.match(p);
                    return null != t && {
                        version: t[2]
                    }
                },
                P = function() {
                    return d.test(c)
                },
                k = function() {
                    return B() > 0 || O() || E()
                },
                S = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !k()
                },
                j = function() {
                    return m.test(c)
                },
                E = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                A = function() {
                    return l.test(c) && !/chrome/i.test(c) && !E() && !P()
                },
                x = function() {
                    return !(!/Chrome/.test(c) || !/Google Inc/.test(navigator.vendor)) && {
                        version: C()
                    }
                },
                L = function() {
                    var t = c.match(/\bSilk\/([^\s]+)/);
                    return t && t[1]
                },
                C = function() {
                    var t = c.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                D = function() {
                    return s.test(c)
                },
                B = function() {
                    var t = c.match(_),
                        e = c.match(b);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && E() ? parseFloat(e[1]) : 0
                },
                M = function() {
                    return u.test(c)
                },
                I = function() {
                    return g.test(c)
                },
                R = function() {
                    var t = document.createElement("video"),
                        e = !1;
                    try {
                        if (t.canPlayType) {
                            var n = 'video/mp4; codecs="avc1.42E01E';
                            (e = {}).h264 = !!t.canPlayType("".concat(n, '"')) || !!t.canPlayType("".concat(n, ', mp4a.40.2"')), e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"'), e.nativeHls = !!t.canPlayType("application/vnd.apple.mpegURL")
                        }
                    } catch (t) {
                        e = {
                            ogg: !1,
                            h264: !1,
                            webm: !1,
                            nativeHls: !1
                        }
                    }
                    return e
                },
                N = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                U = ["WebKit", "Moz", "O", "Ms", ""],
                H = function() {
                    for (var t = 0; t < U.length; t++) {
                        var e = "".concat(U[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                V = function() {
                    if (null != r) return r;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                r = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (t) {
                        r = !1
                    }
                    return r
                },
                z = function() {
                    return o.Wistia._detectCache || (o.Wistia._detectCache = F()), o.Wistia._detectCache
                },
                F = function() {
                    var t, e, n, r, o, l, s, u, f, p, d, _, m = {
                        amazonSilk: !!/Silk/.test(c) && {
                            version: L()
                        },
                        browser: {
                            version: T()
                        },
                        edge: M(),
                        firefox: I(),
                        gearvr: y.test(c),
                        android: O(),
                        oldandroid: O() && parseFloat(O().version) < 4.1,
                        iphone: P(),
                        ipad: E(),
                        blackberry: j(),
                        safari: A(),
                        chrome: x(),
                        opera: D(),
                        winphone: {
                            version: h.test(c)[2]
                        },
                        ios: {
                            version: B()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        linux: /linux/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: S(),
                        touchScreen: k(),
                        ps3: v.test(c),
                        video: R(),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (P() || E() || A()) && R().nativeHls,
                        localstorage: N(),
                        json: !(!i.root.JSON || "function" != typeof JSON.parse),
                        backgroundSize: (_ = document.createElement("div"), "" === _.style.backgroundSize || "" === _.style.webkitBackgroundSize || "" === _.style.mozBackgroundSize || "" === _.style.oBackgroundSize),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanSupport: (d = /webkit|mozilla|edge/.test(w()), Boolean(!P() && !E() && !O() && !j() && d && R().h264 && Object.defineProperties)),
                        mutationObserver: H(),
                        callingPlayRequiresEventContext: B() > 0 || O() || A(),
                        passiveSupported: V(),
                        webp: (t = x(), e = I(), n = M(), r = D(), o = t && T() >= 32, l = t && T() >= 75 && O(), s = e && T() >= 65, u = e && T() >= 67 && O(), f = n && T() >= 18, p = r && T() >= 19, o || l || s || u || f || p),
                        performanceMeasure: (0, a.hasPerformanceMeasureSupport)()
                    };
                    return m.browser[w()] = !0, m
                }
        },
        6: (t, e, n) => {
            n(7)
        },
        3: (t, e, n) => {
            n.d(e, {
                elemBind: () => u,
                elemRemove: () => s,
                elemUnbind: () => f
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = (n(13), n(17), n(18), n(24)),
                c = n(11),
                l = (c.Wistia, (0, o.cachedDetect)()),
                s = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) s(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                u = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + h(), r.pageY = r.clientY + d()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var c = n.apply(r.target, [r].concat(o));
                            return c === f && f(t, e, n), c
                        };
                    c.Wistia._elemBind = c.Wistia._elemBind || {};
                    var o = p(t, e, n);
                    return c.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            f(t, e, n, r)
                        }
                },
                f = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = p(t, e, n),
                            o = c.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete c.Wistia._elemBind[i]
                    }
                },
                p = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, a.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, a.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                d = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                h = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                u(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !l.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        17: (t, e, n) => {
            var r;
            n.d(e, {
                elemOffset: () => o
            });
            var i = function() {
                    if (null != r) return r;
                    var t = document.createElement("div");
                    return t.style.paddingLeft = t.style.width = "1px", document.body.appendChild(t), r = 2 === t.offsetWidth, document.body.removeChild(t), r
                },
                o = function(t) {
                    var e, n, r = document.body,
                        o = document.defaultView,
                        c = document.documentElement,
                        l = t.getBoundingClientRect(),
                        s = c.clientTop || r.clientTop || 0,
                        u = c.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && c && null != c.scrollTop ? c.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && c && null != c.scrollLeft ? c.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: l.height * f,
                        top: l.top * f + e - s,
                        left: l.left * f + n - u,
                        width: l.width * f,
                        zoom: f
                    }
                },
                a = function(t) {
                    return t && t !== document.documentElement ? a(t.parentElement) * (getComputedStyle(t).zoom || 1) : 1
                }
        },
        14: (t, e, n) => {
            n.d(e, {
                globalTrigger: () => o
            });
            var r = n(15),
                i = n(11);
            (0, r.makeWbindable)(i.Wistia);
            i.Wistia.bind.bind(i.Wistia), i.Wistia.on.bind(i.Wistia), i.Wistia.off.bind(i.Wistia), i.Wistia.rebind.bind(i.Wistia);
            var o = i.Wistia.trigger.bind(i.Wistia);
            i.Wistia.unbind.bind(i.Wistia)
        },
        21: (t, e, n) => {
            n.d(e, {
                TAGGED_VERSION: () => c,
                eV1HostWithPort: () => f,
                eV1Protocol: () => p,
                metricsHost: () => d
            });
            var r = n(10),
                i = n(22),
                o = n(23),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                c = "",
                l = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    return "fast.".concat("wistia.net")
                }),
                s = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                c = r.host === (void 0 || a) || r.host === l() || "fast-canary.wistia.net" === r.host,
                                s = "https:" === location.protocol && "https:" === r.protocol,
                                u = "" === r.protocol || null == r.protocol,
                                f = s || u || "http:" === location.protocol,
                                p = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && c && f && p) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(l(), "/E-v1.js"))
                }(),
                u = function() {
                    return s.host
                },
                f = function() {
                    return s.port ? "".concat(u(), ":").concat(s.port) : u()
                },
                p = function() {
                    return s.protocol
                },
                d = function() {
                    return "pipedream.".concat("wistia.com")
                },
                h = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]);
            new RegExp("(".concat(h.map((function(t) {
                return "\\.".concat(t.replace(".", "\\."))
            })).join("|"), ")$"))
        },
        38: (t, e, n) => {},
        33: (t, e, n) => {
            n.d(e, {
                getLocalStorage: () => l,
                removeLocalStorage: () => s,
                setLocalStorage: () => u,
                updateLocalStorage: () => f
            });
            var r = n(11),
                i = function(t) {
                    setTimeout((function() {
                        throw t
                    }), 0)
                },
                o = "_namespacedLocalStorage",
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia-test-localstorage";
                    if (null != r.Wistia._localStorageWorks) return r.Wistia._localStorageWorks;
                    try {
                        var e = localStorage.getItem(t);
                        localStorage.removeItem(t), localStorage.setItem(t, e), localStorage.removeItem(t), r.Wistia._localStorageWorks = !0
                    } catch (t) {
                        r.Wistia._localStorageWorks = !1
                    }
                    return r.Wistia._localStorageWorks
                },
                c = function() {
                    return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
                },
                l = function(t) {
                    if (!a()) return c()[t] || {};
                    if (localStorage[t]) try {
                        return "null" === localStorage[t] ? {} : JSON.parse(localStorage[t])
                    } catch (t) {
                        i(t)
                    }
                    return {}
                },
                s = function(t) {
                    if (a()) try {
                        localStorage.removeItem(t)
                    } catch (t) {
                        i(t)
                    } else c()[t] = {}
                },
                u = function(t, e) {
                    if (!a()) return null != e && "object" == typeof e && (c()[t] = e), e;
                    try {
                        c()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        i(t)
                    }
                    return e
                },
                f = function(t, e) {
                    var n = l(t);
                    try {
                        e(n)
                    } catch (t) {
                        i(t)
                    }
                    return u(t, n)
                }
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => _,
                clone: () => s,
                eachLeaf: () => S,
                getDeep: () => u,
                isArray: () => y,
                isEmpty: () => P,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => p,
                setDeep: () => f,
                unsetDeep: () => h
            });
            n(5);
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = Array.prototype.slice,
                o = function(t) {
                    if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1)) return t;
                    for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) a(t, e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]);
                    return t
                },
                a = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                    if (y(e)) {
                        y(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o];
                            null == t[o] && null != s && (y(s) ? t[o] = [] : w(s) && (t[o] = {}));
                            var u = a(t[o], s, n);
                            i(e, o, u) ? delete t[o] : t[o] = u
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var p = e[f];
                                y(p) ? (y(t[f]) || (t[f] = []), a(t[f], p, n), t[f] = n(t[f])) : w(p) ? (w(t[f]) || (t[f] = {}), a(t[f], p, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, p) || (t[f] = n(p))) : i(e, f, p) ? delete t[f] : t[f] = n(p)
                            }
                        return n(t)
                    }
                    return n(e)
                },
                c = function(t) {
                    return t
                },
                l = function(t, e, n) {
                    return null == n
                },
                s = function(t, e) {
                    return y(t) ? a([], t, e) : a({}, t, e)
                },
                u = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var c = e.shift();
                        void 0 !== t[c] && (w(t[c]) || y(t[c])) || !n || (0 === c ? (t = a[o] = [])[c] = {} : t[c] = {}), a = t, o = c, t = r(t, c) ? t[c] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return d(t, e, n, !0)
                },
                p = function(t, e, n) {
                    return d(t, e, n, !1)
                },
                d = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = u(t, e, !0)) && (w(t) || y(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                h = function(t, e) {
                    return f(t, e)
                },
                _ = function(t) {
                    return null == t ? t : w(t) || y(t) ? m(t) : v("".concat(t), t)
                },
                v = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                m = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? v(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                g = /^\s*function Array()/,
                y = function(t) {
                    return null != t && t.push && g.test(t.constructor)
                },
                b = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && b.test(t.constructor)
                },
                T = /^\s*function RegExp()/,
                W = /^string|number|boolean|function$/i,
                O = function(t) {
                    return null != t && (W.test(typeof t) || function(t) {
                        return null != t && T.test(t.constructor)
                    }(t))
                },
                P = function(t) {
                    return null == t || (!(!y(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                k = function(t, e, n, o, a) {
                    if (null == n && (n = []), O(t)) e(t, n, o, a);
                    else if (w(t) || y(t)) {
                        for (var c in e(t, n, o, a), t)
                            if (r(t, c)) {
                                var l = i.call(n);
                                l.push(c), k(t[c], e, l, t, c)
                            }
                    } else e(t, n, o, a)
                },
                S = function(t, e) {
                    k(t, (function(t, n, r, i) {
                        y(t) || w(t) || e(t, n, r, i)
                    }))
                }
        },
        8: (t, e, n) => {
            n.d(e, {
                pageLoaded: () => r
            });
            var r = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window;
                if (/loaded|complete/.test(n.readyState)) setTimeout(t, 0);
                else {
                    var i = function() {
                            r.removeEventListener("load", o, !1)
                        },
                        o = function() {
                            clearTimeout(a), i(), t()
                        };
                    r.addEventListener("load", o, !1);
                    var a = setTimeout((function() {
                        i(), t()
                    }), e)
                }
            }
        },
        7: (t, e, n) => {
            n.d(e, {
                poll: () => r
            });
            var r = function(t, e, n, r, i) {
                var o = null,
                    a = (new Date).getTime(),
                    c = function() {
                        (new Date).getTime() - a > r ? "function" == typeof i && i() : t() ? e() : (clearTimeout(o), o = setTimeout(c, n))
                    };
                o = setTimeout(c, 1)
            }
        },
        10: (t, e, n) => {
            var r;
            n.d(e, {
                root: () => i
            });
            try {
                (r = self).self !== r && void 0 !== r.self && "undefined" != typeof window && (r = window)
            } catch (t) {
                r = "undefined" != typeof globalThis ? globalThis : window
            }
            var i = r
        },
        20: (t, e, n) => {
            n.d(e, {
                runScript: () => i
            });
            var r = n(21),
                i = function(t, e) {
                    var n = r.TAGGED_VERSION;
                    return new Promise((function(r, i) {
                        var o;
                        null == e && (e = 8e3), (o = document.createElement("script")).src = t, o.async = !0, o.type = "text/javascript", /https?:\/\/fast\.wistia\./.test(o.src) && "" !== n && n.length > 0 && (o.src = "".concat(o.src, "@").concat(n));
                        var a = null,
                            c = !1,
                            l = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(u), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            s = function() {
                                var t = o.readyState;
                                c || t && !/loaded|complete/.test(t) || (c = !0, setTimeout((function() {
                                    r(), l()
                                }), 1))
                            },
                            u = setTimeout((function() {
                                c = !0, l(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            c = !0, l(), i(t)
                        }, o.onreadystatechange = s, o.onload = s, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        18: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                execScriptTags: () => execScriptTags,
                getScriptTags: () => getScriptTags,
                removeScriptTags: () => removeScriptTags
            });
            var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19),
                getScriptTags = function(t) {
                    return t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
                },
                scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
                    if (!scriptTags) return [];
                    scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
                    for (var hashes = [], _loop = function _loop() {
                            var scriptTag = scriptTags[i],
                                hash = {},
                                matches = scriptTag.match(/<script.*?>/i);
                            if (matches && (matches = matches[0].match(/src="([^"]+)"/i), matches && (hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")))), !matches && (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i), matches)) {
                                var src = matches[1];
                                hash.fn = function() {
                                    return eval(src)
                                }
                            }
                            hashes.push(hash)
                        }, i = 0; i < scriptTags.length; i++) _loop();
                    return hashes
                },
                execScriptTags = function(t, e) {
                    if (!t) return null;
                    var n = scriptTagsToRunScriptsInput(t);
                    return (0, utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(e)
                },
                removeScriptTags = function(t) {
                    return t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
                }
        },
        19: (t, e, n) => {
            n.d(e, {
                runScripts: () => u
            });
            var r = n(13),
                i = n(4),
                o = n(20);

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var l = function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.getElementsByTagName("script"), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = i.getAttribute("src") || "";
                        if (e.ignoreQueryParams) {
                            var a = o.split("?");
                            o = a[0]
                        }
                        if (!e.scriptRegex && e.ignoreProtocol && (o = o.replace(/^https?:/, ""), t = t.replace(/^https?:/, "")), e.scriptRegex && e.scriptRegex.test(o)) return i;
                        if (e.testStartsWith && 0 === o.indexOf(t)) return i;
                        if (o === t) return i
                    }
                    return null
                },
                s = function(t) {
                    var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8e3,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return null == r && (r = 8e3), null == i && (i = {}), new Promise((function(a) {
                        !0 === i.once && (e = l(t)) && (n = !0), i.once && n ? e.readyState && !/loaded|complete/.test(e.readyState) || setTimeout((function() {
                            a()
                        }), 1) : (0, o.runScript)(t, r).then(a).catch((function(t) {
                            a(t), setTimeout((function() {
                                console.error(t)
                            }), 1)
                        }))
                    }))
                },
                u = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        l = [],
                        u = [];
                    return t.forEach((function(t) {
                        var e = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                                        c(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t),
                            n = new Promise((function(t) {
                                e.resolve = t
                            }));
                        e.promise = n, u.push(e.promise), t.async ? o.push(e) : l.push(e)
                    })), l.reduce((function(t, e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (t) {
                            r.wlog.error(t)
                        } finally {
                            e.resolve()
                        } else e.src && s(e.src, null, e).then(e.resolve);
                        return t.then(e.promise)
                    }), Promise.resolve()), setTimeout((function() {
                        o.forEach((function(t) {
                            if (t.fn) try {
                                t.fn()
                            } catch (t) {
                                r.wlog.error(t)
                            } finally {
                                t.resolve()
                            } else t.src && s(t.src, null, t).then(t.resolve)
                        }))
                    }), 1), Promise.all(u)
                },
                f = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n];
                        "string" == typeof r ? e.push({
                            src: r,
                            async: !1
                        }) : (0, i.isObject)(r) ? e.push(r) : e.push({
                            fn: r,
                            async: !1
                        })
                    }
                    return e
                }
        },
        24: (t, e, n) => {
            n.d(e, {
                seqId: () => i
            });
            var r = n(11),
                i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = r.Wistia._sequenceVal || 1,
                        i = "".concat(t).concat(n).concat(e);
                    return r.Wistia._sequenceVal = n + 1, i
                }
        },
        30: (t, e, n) => {
            n.d(e, {
                countMetric: () => s
            });
            var r = n(5),
                i = n(8),
                o = n(31),
                a = n(21),
                c = n(11);
            null == c.Wistia._simpleMetricsCache && (c.Wistia._simpleMetricsCache = {}), null == c.Wistia._simpleMetricsDebounceInterval && (c.Wistia._simpleMetricsDebounceInterval = 500);
            var l = c.Wistia._simpleMetricsCache,
                s = function(t) {
                    return f("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                },
                u = function() {
                    if ((0, o.isVisitorTrackingEnabled)()) {
                        for (var t = "https://".concat((0, a.metricsHost)(), "/mput?topic=metrics"), e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return fetch(t, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: n.join("\n")
                        }).then((function(t) {
                            t.ok || console.error(t)
                        })).catch((function(t) {
                            console.error(t)
                        }))
                    }
                },
                f = function(t, e, n) {
                    var a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == l.toMput && (l.toMput = []);
                        var f = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, s),
                            p = JSON.stringify(f, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        l.toMput.push(p), clearTimeout(c.Wistia._msendTimeout), c.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                u.apply(undefined, l.toMput), l.toMput = []
                            }))
                        }), c.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        66: (t, e, n) => {
            n.d(e, {
                clearTimeouts: () => a,
                doTimeout: () => o
            });
            var r = n(4),
                i = n(11);
            i.Wistia;
            null == i.Wistia._timeouts && (i.Wistia._timeouts = {});
            var o = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    (0, r.isArray)(t) && (t = t.join("."));
                    var o = l(t);
                    if (a(t, o), e) {
                        var c = i.Wistia._timeouts[o];
                        null == c && (c = i.Wistia._timeouts[o] = {});
                        var s = setTimeout((function() {
                            delete c[t], e()
                        }), n);
                        return c[t] = s, s
                    }
                    return i.Wistia._timeouts[o][t]
                },
                a = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, r.isArray)(t) && (t = t.join(".")), "__global__" === (n = n || l(t)) && (e = i.Wistia._timeouts[t]))
                        for (var o in e) {
                            var a = e[o];
                            clearTimeout(a), delete e[o]
                        }
                    if (e = i.Wistia._timeouts[n])
                        for (var s in e) {
                            var u = e[s];
                            !s.indexOf || 0 !== s.indexOf(t) || s.length !== t.length && "." !== s.charAt(t.length) || (clearTimeout(u), delete e[s])
                        }
                    i.Wistia.blockSweepTimeouts || (i.Wistia.blockSweepTimeouts = !0, setTimeout(c, 0), setTimeout((function() {
                        i.Wistia.blockSweepTimeouts = !1
                    }), 5e3))
                },
                c = function() {
                    for (var t in i.Wistia._timeouts) {
                        var e = i.Wistia._timeouts[t];
                        (0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
                    }
                },
                l = function(t) {
                    var e = t.indexOf(".");
                    return e > 0 ? t.substring(0, e) : "__global__"
                }
        },
        31: (t, e, n) => {
            n.d(e, {
                isVisitorTrackingEnabled: () => f
            });
            var r = n(14),
                i = n(32),
                o = n(34),
                a = n(11);

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s;
            a.Wistia._visitorTrackingDomain || (a.Wistia._visitorTrackingDomain = location.hostname || ""), a.Wistia._visitorTracking || (null != (s = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) && ((0, i.updateWistiaLocalStorage)((function(t) {
                return delete t.visitorTrackingEnabled
            })), a.Wistia._visitorTracking = {}, a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
                isEnabled: s,
                updatedAt: Date.now()
            }, (0, i.updateWistiaLocalStorage)((function(t) {
                return t.visitorTracking = a.Wistia._visitorTracking
            }))), a.Wistia._visitorTracking = (0, i.getWistiaLocalStorage)().visitorTracking || {});
            a.Wistia.consent = function(t) {
                return null == t ? f() : u(t)
            };
            var u = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Wistia._visitorTrackingDomain;
                    "default" === t ? delete a.Wistia._visitorTracking[e] : a.Wistia._visitorTracking[e] = {
                        isEnabled: "true" === "".concat(t),
                        updatedAt: Date.now()
                    }, (0, i.updateWistiaLocalStorage)((function(t) {
                        return t.visitorTracking = a.Wistia._visitorTracking
                    })), (0, r.globalTrigger)("visitortrackingchange", t), c(document.getElementsByTagName("wistia-player")).forEach((function(e) {
                        e.dispatchEvent(new CustomEvent("visitor-tracking-change", {
                            detail: {
                                isTrackingEnabled: t
                            }
                        }))
                    }))
                },
                f = function() {
                    if ("boolean" == typeof a.Wistia._visitorTracking) return a.Wistia._visitorTracking;
                    if (a.Wistia._visitorTracking) {
                        var t = function() {
                            if (a.Wistia._visitorTrackingDomain)
                                for (var t = a.Wistia._visitorTrackingDomain.split("."); t.length > 0;) {
                                    var e = a.Wistia._visitorTracking[t.join(".")],
                                        n = e && e.isEnabled;
                                    if (null != n) return n;
                                    t.shift()
                                }
                        }();
                        if (null != t) return Boolean(t)
                    }
                    var e = (0, o.getAllApiHandles)();
                    if (a.Wistia.channel && a.Wistia.channel.all) try {
                        e.push.apply(e, c(a.Wistia.channel.all()))
                    } catch (t) {}
                    return !e.some((function(t) {
                        return !0 === (t._mediaData || t._galleryData || {}).privacyMode
                    }))
                }
        },
        22: (t, e, n) => {
            n.d(e, {
                Url: () => u,
                proto: () => o
            });
            var r = n(4),
                i = n(13),
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href;
                    return /^http:\/\//.test(t) ? "http:" : "https:"
                },
                a = function(t) {
                    if (null == t) return t;
                    var e;
                    try {
                        e = decodeURIComponent(t)
                    } catch (n) {
                        setTimeout((function() {
                            i.wlog.notice(n)
                        }), 50), e = t
                    }
                    return e
                },
                c = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                l = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                s = ["protocol", "host", "port", "params", "path"],
                u = function(t) {
                    var e = this;
                    return e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t), e
                },
                f = u.prototype;
            f.fromOptions = function(t) {
                for (var e = 0; e < s.length; e++) {
                    var n = s[e];
                    null != t[n] && (this[n] = t[n])
                }
                return this
            }, f.fromRaw = function(t) {
                var e;
                return this.rawUrl = t, (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) && (this.protocol = e[1] || void 0), (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0), (e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) && this.setPath(e[1]), (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)), (e = t.match(/\?([^#]+)/)) && (this.rawParams = e[1], this.params = function(t) {
                    var e = {};
                    if (!t) return e;
                    for (var n = t.split("&"), o = function() {
                            var t = n[c].split("="),
                                o = t[0],
                                s = t[1];
                            try {
                                o = l(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var u = (0, r.getDeep)(e, o);
                            if (null != u)
                                if ((0, r.isArray)(u)) u.push(a(s));
                                else {
                                    var f = [u];
                                    f.push(a(s)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(s))
                        }, c = 0; c < n.length; c++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, f.clone = function() {
                return new u({
                    protocol: this.protocol,
                    host: this.host,
                    port: this.port,
                    path: (0, r.clone)(this.path),
                    params: (0, r.clone)(this.params),
                    anchor: this.anchor
                })
            }, f.ext = function(t) {
                if (null != t) {
                    var e = this.ext(),
                        n = this.path.length - 1,
                        r = new RegExp("\\.".concat(e), "g");
                    return e && (this.path[n] = "".concat(this.path[n].replace(r, ""))), this.path[n] = "".concat(this.path[n], ".").concat(t)
                }
                var i = this.path[this.path.length - 1].match(/\.(.*)$/);
                return null != i && i[1] || null
            }, f.isRelative = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                    e = this.protocol,
                    n = this.host;
                return !(null != e && "" !== e && e !== t.protocol || n && n !== t.hostname)
            }, f.toString = function() {
                return this.isRelative() ? this.relative() : this.absolute()
            }, f.absolute = function() {
                var t = "";
                null != this.protocol && (t = this.protocol);
                var e = "";
                return null != this.port && (e = ":".concat(this.port)), "".concat(t, "//").concat(this.host || location.host).concat(e).concat(this.relative())
            }, f.relative = function() {
                var t, e = "";
                this.path.length > 0 && ("string" == typeof(t = this.path) && (t = t.split("/")), e = null == t ? "" : "/".concat(t.join("/")), this._hasTrailingSlash && (e += "/"));
                var n, i, o = "?".concat((n = this.params, i = [], (0, r.eachLeaf)(n, (function(t, e) {
                    null != t ? i.push("".concat(encodeURIComponent(c(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(c(e)))
                })), i.join("&")));
                return 1 === o.length && (o = ""), "".concat(e).concat(o).concat(this.relativeAnchor())
            }, f.authority = function() {
                var t = null != this.port ? ":".concat(this.port) : "";
                return "".concat(this.host).concat(t)
            }, f.relativeProtocol = function() {
                var t = "";
                return null != this.port && (t = ":".concat(this.port)), "//".concat(this.host).concat(t).concat(this.relative())
            }, f.relativeAnchor = function() {
                var t = "";
                return null != this.anchor && (t = "#".concat(this.anchor)), "".concat(t)
            }, f.setPath = function(t) {
                this.rawPath = t, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = function(t) {
                    var e = [];
                    if (null == t) return e;
                    for (var n = t.split(/\/+/), r = 0; r < n.length; r++) {
                        var i = n[r];
                        null != i && "" !== i && e.push(i)
                    }
                    return e
                }(this.rawPath)
            }, u.create = function(t) {
                return new u(t)
            };
            u.create;
            u.parse = function(t) {
                return new u(t)
            };
            u.parse
        },
        15: (t, e, n) => {
            n.d(e, {
                makeWbindable: () => o
            });
            var r = n(16),
                i = n(11);
            i.Wistia.bindable || (i.Wistia.bindable = {
                bind: function(t, e) {
                    return "crosstime" === t && this.crossTime ? (this.crossTime.addBinding(arguments[1], arguments[2]), this) : "betweentimes" === t && this.betweenTimes ? (this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), this) : e ? (r.bind.call(this, t, e), this) : void(i.Wistia.warn && i.Wistia.warn(this.constructor.name, "bind", "falsey value passed in as callback:", e))
                },
                unbind: function(t, e) {
                    return "crosstime" === t && this.crossTime ? (e ? this.crossTime.removeBinding(arguments[1], arguments[2]) : this.crossTime.removeAllBindings(), this) : "betweentimes" === t && this.betweenTimes ? (e ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : this.betweenTimes.removeAllBindings(), this) : (e ? r.unbind.call(this, t, e) : this._bindings && (this._bindings[t] = []), this._bindings && this._bindings[t] && !this._bindings[t].length && (this._bindings[t] = null, delete this._bindings[t]), this)
                },
                on: function(t, e) {
                    var n = arguments,
                        i = this;
                    return "crosstime" === t && this.crossTime ? (this.crossTime.addBinding(arguments[1], arguments[2]), function() {
                        i.crossTime.removeBinding(n[1], n[2])
                    }) : "betweentimes" === t && this.betweenTimes ? (this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), function() {
                        i.betweenTimes.removeBinding(n[1], n[2], n[3])
                    }) : r.bind.call(this, t, e)
                },
                off: function(t, e) {
                    return "crosstime" === t && this.crossTime ? this.crossTime.removeBinding(arguments[1], arguments[2]) : "betweentimes" === t && this.betweenTimes ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : r.unbind.call(this, t, e)
                },
                rebind: function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), this
                },
                trigger: function(t) {
                    for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                    return (e = r.trigger).call.apply(e, [this, t].concat(i)), this
                },
                bindNamed: function() {
                    return r.bindNamed.apply(this, arguments)
                },
                unbindNamed: function() {
                    return r.unbindNamed.apply(this, arguments)
                },
                unbindAllInNamespace: function() {
                    return r.unbindAllInNamespace.apply(this, arguments)
                }
            });
            var o = function(t) {
                for (var e in i.Wistia.bindable) {
                    var n = i.Wistia.bindable[e];
                    t[e] || (t[e] = n)
                }
            }
        },
        36: (t, e, n) => {
            n.d(e, {
                wData: () => o
            });
            var r = n(4),
                i = n(11),
                o = function(t, e) {
                    return (0, r.isArray)(t) || (t = t.split(".")), null != e && (0, r.setDeep)(i.Wistia, ["_data"].concat(t), e), (0, r.getDeep)(i.Wistia, ["_data"].concat(t))
                }
        },
        32: (t, e, n) => {
            n.d(e, {
                getWistiaLocalStorage: () => a,
                updateWistiaLocalStorage: () => c
            });
            var r = n(33),
                i = n(11),
                o = "wistia",
                a = function() {
                    return (0, r.getLocalStorage)(o)
                },
                c = function(t) {
                    return i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t), i.Wistia._localStorage
                }
        },
        13: (t, e, n) => {
            n.d(e, {
                wlog: () => v
            });
            var r = n(14),
                i = n(11);

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var c = {
                    ERROR: 0,
                    WARNING: 1,
                    NOTICE: 2,
                    INFO: 3,
                    DEBUG: 4,
                    error: 0,
                    warning: 1,
                    notice: 2,
                    info: 3,
                    debug: 4
                },
                l = function() {},
                s = function(t) {
                    var e = this;
                    null == t && (t = {});
                    return e.error = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(0, n)
                    }, e.warn = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.notice = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.info = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(3, n)
                    }, e.debug = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(4, n)
                    }, e.ctx = t, e.ctx.initializedAt || e.reset(), e
                },
                u = s.prototype;
            u.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, u.setLevel = function(t) {
                var e = this.logFunc(3);
                null != c[t] ? (this.ctx.level = c[t], e('Log level set to "'.concat(t, '" (').concat(c[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
            }, u.setGrep = function(t) {
                this.ctx.grep = t
            }, u.setGrepv = function(t) {
                this.ctx.grepv = t
            }, u.first1000LogLines = function() {
                return this.ctx.first1000LogLines
            }, u.last1000LogLines = function() {
                return this.ctx.last1000LogLines
            }, u.matchedGrep = function(t) {
                var e = !1;
                if (this.ctx.grep || this.ctx.grepv) {
                    for (var n = [], r = 0; r < t.length; r++) try {
                        var i = t[r];
                        n.push(i.toString && i.toString())
                    } catch (t) {
                        n.push("")
                    }
                    var o = n.join(" "),
                        a = !this.ctx.grep || o.match(this.ctx.grep),
                        c = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && c
                } else e = !0;
                return e
            }, u.now = function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
            }, u.messagesToLogLine = function(t, e, n) {
                var r, i = [t, e];
                i = i.concat(n);
                try {
                    (r = i.join(" ") || "").length > 200 && (r = r.slice(0, 200))
                } catch (t) {
                    r = "could not serialize"
                }
                return r
            }, u.persistLine = function(t) {
                this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
            }, u.log = function(t, e) {
                var n, i = t <= this.ctx.level,
                    a = t < 4,
                    c = (i || a) && this.matchedGrep(e);
                if (0 === t && (0, r.globalTrigger)("problem", {
                        type: "error-logged",
                        data: {
                            messages: e
                        }
                    }), c && (i || a) && (n = this.now()), a && c) {
                    var l = this.messagesToLogLine(t, n, e);
                    this.persistLine(l)
                }
                if (i && c) {
                    var s, u = this.logFunc(t);
                    1 === e.length && (s = e[0]) instanceof Error ? (u(s.message), s.stack && u(s.stack)) : u.apply(void 0, o(e))
                }
            };
            var f = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.error.apply(console, e)
                },
                p = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.warn.apply(console, e)
                },
                d = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.info.apply(console, e)
                },
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.debug.apply(console, e)
                },
                _ = function(t) {
                    console.log.apply(console, t)
                };
            u.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = p : 3 === t ? e = d : 4 === t && (e = h), e || (e = _), "function" != typeof e && (this.noConsoleLog = !0, e = l), e) : l;
                var e
            }, u.maybePrefix = function(t, e) {
                if (t) {
                    if ("function" == typeof t) try {
                        t = t()
                    } catch (e) {
                        t = 'prefix err "'.concat(e.message, '"')
                    }
                    return t instanceof Array ? t.concat(e) : [t].concat(e)
                }
                return e
            }, u.getPrefixedFunctions = function(t) {
                var e = this;
                return {
                    log: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    error: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    warn: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    notice: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    info: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(3, e.maybePrefix(t, r))
                    },
                    debug: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(4, e.maybePrefix(t, r))
                    }
                }
            }, i.Wistia && null == i.Wistia.wlogCtx && (i.Wistia.wlogCtx = {});
            var v = new s(i.Wistia.wlogCtx)
        }
    },
    __webpack_module_cache__ = {};

function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = __webpack_module_cache__[t] = {
        exports: {}
    };
    return __webpack_modules__[t](n, n.exports, __webpack_require__), n.exports
}
__webpack_require__.d = (t, e) => {
    for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
    })
}, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var __webpack_exports__ = {};
__webpack_require__(961), __webpack_require__(964);
//# sourceMappingURL=wistiaLogo.js.map