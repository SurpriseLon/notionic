var app = function () {
    "use strict";

    function e() {}

    function t(e, t) {
        for (const r in t) e[r] = t[r];
        return e
    }

    function r(e) {
        return e()
    }

    function n() {
        return Object.create(null)
    }

    function s(e) {
        e.forEach(r)
    }

    function i(e) {
        return "function" == typeof e
    }

    function o(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let a, h;

    function c(e, t) {
        return a || (a = document.createElement("a")), a.href = t, e === a.href
    }

    function u(t, r, n) {
        t.$$.on_destroy.push(function (t, ...r) {
            if (null == t) return e;
            const n = t.subscribe(...r);
            return n.unsubscribe ? () => n.unsubscribe() : n
        }(r, n))
    }

    function l(e, t) {
        e.appendChild(t)
    }

    function d(e, t, r) {
        e.insertBefore(t, r || null)
    }

    function f(e) {
        e.parentNode.removeChild(e)
    }

    function p(e) {
        return document.createElement(e)
    }

    function m(e) {
        return document.createTextNode(e)
    }

    function g() {
        return m(" ")
    }

    function v(e, t, r, n) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
    }

    function y(e, t, r) {
        null == r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
    }

    function b(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function _(e, t) {
        e.value = null == t ? "" : t
    }

    function w(e) {
        h = e
    }
    const k = [],
        T = [],
        $ = [],
        E = [],
        O = Promise.resolve();
    let S = !1;

    function x(e) {
        $.push(e)
    }
    const j = new Set;
    let P = 0;

    function A() {
        const e = h;
        do {
            for (; P < k.length;) {
                const e = k[P];
                P++, w(e), R(e.$$)
            }
            for (w(null), k.length = 0, P = 0; T.length;) T.pop()();
            for (let e = 0; e < $.length; e += 1) {
                const t = $[e];
                j.has(t) || (j.add(t), t())
            }
            $.length = 0
        } while (k.length);
        for (; E.length;) E.pop()();
        S = !1, j.clear(), w(e)
    }

    function R(e) {
        if (null !== e.fragment) {
            e.update(), s(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x)
        }
    }
    const U = new Set;
    let C;

    function I(e, t) {
        e && e.i && (U.delete(e), e.i(t))
    }

    function N(e, t, r, n) {
        if (e && e.o) {
            if (U.has(e)) return;
            U.add(e), C.c.push((() => {
                U.delete(e), n && (r && e.d(1), n())
            })), e.o(t)
        }
    }

    function D(e, t, n, o) {
        const {
            fragment: a,
            on_mount: h,
            on_destroy: c,
            after_update: u
        } = e.$$;
        a && a.m(t, n), o || x((() => {
            const t = h.map(r).filter(i);
            c ? c.push(...t) : s(t), e.$$.on_mount = []
        })), u.forEach(x)
    }

    function B(e, t) {
        const r = e.$$;
        null !== r.fragment && (s(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r
            .ctx = [])
    }

    function L(e, t) {
        -1 === e.$$.dirty[0] && (k.push(e), S || (S = !0, O.then(A)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |=
            1 << t % 31
    }

    function M(t, r, i, o, a, c, u, l = [-1]) {
        const d = h;
        w(t);
        const p = t.$$ = {
            fragment: null,
            ctx: null,
            props: c,
            update: e,
            not_equal: a,
            bound: n(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(r.context || (d ? d.$$.context : [])),
            callbacks: n(),
            dirty: l,
            skip_bound: !1,
            root: r.target || d.$$.root
        };
        u && u(p.root);
        let m = !1;
        if (p.ctx = i ? i(t, r.props || {}, ((e, r, ...n) => {
                const s = n.length ? n[0] : r;
                return p.ctx && a(p.ctx[e], p.ctx[e] = s) && (!p.skip_bound && p.bound[e] && p.bound[e](s),
                    m && L(t, e)), r
            })) : [], p.update(), m = !0, s(p.before_update), p.fragment = !!o && o(p.ctx), r.target) {
            if (r.hydrate) {
                const e = function (e) {
                    return Array.from(e.childNodes)
                }(r.target);
                p.fragment && p.fragment.l(e), e.forEach(f)
            } else p.fragment && p.fragment.c();
            r.intro && I(t.$$.fragment), D(t, r.target, r.anchor, r.customElement), A()
        }
        w(d)
    }
    class F {
        $destroy() {
            B(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return r.push(t), () => {
                const e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this
                .$$.skip_bound = !1)
        }
    }
    const H = {
        "X-Client-Info": "supabase-js/1.33.3"
    };
    var J = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    const G = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);

    function q(e, t, r, n, s) {
        return J(this, void 0, void 0, (function* () {
            return new Promise(((i, o) => {
                e(r, ((e, t, r) => {
                    const n = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e || (n.headers = Object.assign({
                        "Content-Type": "text/plain;charset=UTF-8"
                    }, null == t ? void 0 : t.headers), n.body = JSON.stringify(
                        r)), n
                })(t, n, s)).then((e => {
                    if (!e.ok) throw e;
                    return (null == n ? void 0 : n.noResolveJson) ? i : e.json()
                })).then((e => i(e))).catch((e => ((e, t) => {
                    if ("function" != typeof e.json) return t(e);
                    e.json().then((r => t({
                        message: G(r),
                        status: (null == e ? void 0 : e.status) ||
                            500
                    })))
                })(e, o)))
            }))
        }))
    }

    function K(e, t, r) {
        return J(this, void 0, void 0, (function* () {
            return q(e, "GET", t, r)
        }))
    }

    function z(e, t, r, n) {
        return J(this, void 0, void 0, (function* () {
            return q(e, "POST", t, n, r)
        }))
    }

    function W(e, t, r, n) {
        return J(this, void 0, void 0, (function* () {
            return q(e, "PUT", t, n, r)
        }))
    }
    const V = {
            "X-Client-Info": "gotrue-js/1.22.12"
        },
        Y = "supabase.auth.token",
        X = {
            name: "sb",
            lifetime: 28800,
            domain: "",
            path: "/",
            sameSite: "lax"
        };

    function Q(e, t) {
        var r, n, s;
        return function (e, t, r) {
            const n = r || {},
                s = encodeURIComponent,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
            if ("function" != typeof s) throw new TypeError("option encode is invalid");
            if (!i.test(e)) throw new TypeError("argument name is invalid");
            const o = s(t);
            if (o && !i.test(o)) throw new TypeError("argument val is invalid");
            let a = e + "=" + o;
            if (null != n.maxAge) {
                const e = n.maxAge - 0;
                if (isNaN(e) || !isFinite(e)) throw new TypeError("option maxAge is invalid");
                a += "; Max-Age=" + Math.floor(e)
            }
            if (n.domain) {
                if (!i.test(n.domain)) throw new TypeError("option domain is invalid");
                a += "; Domain=" + n.domain
            }
            if (n.path) {
                if (!i.test(n.path)) throw new TypeError("option path is invalid");
                a += "; Path=" + n.path
            }
            if (n.expires) {
                if ("function" != typeof n.expires.toUTCString) throw new TypeError("option expires is invalid");
                a += "; Expires=" + n.expires.toUTCString()
            }
            if (n.httpOnly && (a += "; HttpOnly"), n.secure && (a += "; Secure"), n.sameSite) switch ("string" ==
                typeof n.sameSite ? n.sameSite.toLowerCase() : n.sameSite) {
                case "lax":
                    a += "; SameSite=Lax";
                    break;
                case "strict":
                    a += "; SameSite=Strict";
                    break;
                case "none":
                    a += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
            }
            return a
        }(e.name, e.value, {
            maxAge: e.maxAge,
            expires: new Date(Date.now() + 1e3 * e.maxAge),
            httpOnly: !0,
            secure: t,
            path: null !== (r = e.path) && void 0 !== r ? r : "/",
            domain: null !== (n = e.domain) && void 0 !== n ? n : "",
            sameSite: null !== (s = e.sameSite) && void 0 !== s ? s : "lax"
        })
    }

    function Z(e, t, r) {
        const n = r.map((t => Q(t, function (e) {
                if (!e || !e.headers || !e.headers.host) throw new Error(
                    'The "host" request header is not available');
                const t = e.headers.host.indexOf(":") > -1 && e.headers.host.split(":")[0] || e.headers
                    .host;
                return !(["localhost", "127.0.0.1"].indexOf(t) > -1 || t.endsWith(".local"))
            }(e)))),
            s = t.getHeader("Set-Cookie");
        return s && (s instanceof Array ? Array.prototype.push.apply(n, s) : "string" == typeof s && n.push(s)), n
    }

    function ee(e, t, r) {
        t.setHeader("Set-Cookie", Z(e, t, r))
    }
    var te = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" !=
        typeof global ? global : "undefined" != typeof self ? self : {};

    function re(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var ne, se, ie = (ne = function (e, t) {
            var r = "undefined" != typeof self ? self : te,
                n = function () {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            ! function (e) {
                ! function (t) {
                    var r = "URLSearchParams" in e,
                        n = "Symbol" in e && "iterator" in Symbol,
                        s = "FileReader" in e && "Blob" in e && function () {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        i = "FormData" in e,
                        o = "ArrayBuffer" in e;
                    if (o) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]",
                            "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]",
                            "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        h = ArrayBuffer.isView || function (e) {
                            return e && a.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function c(e) {
                        if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError(
                            "Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function u(e) {
                        return "string" != typeof e && (e = String(e)), e
                    }

                    function l(e) {
                        var t = {
                            next: function () {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return n && (t[Symbol.iterator] = function () {
                            return t
                        }), t
                    }

                    function d(e) {
                        this.map = {}, e instanceof d ? e.forEach((function (e, t) {
                            this.append(t, e)
                        }), this) : Array.isArray(e) ? e.forEach((function (e) {
                            this.append(e[0], e[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function (t) {
                            this.append(t, e[t])
                        }), this)
                    }

                    function f(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function p(e) {
                        return new Promise((function (t, r) {
                            e.onload = function () {
                                t(e.result)
                            }, e.onerror = function () {
                                r(e.error)
                            }
                        }))
                    }

                    function m(e) {
                        var t = new FileReader,
                            r = p(t);
                        return t.readAsArrayBuffer(e), r
                    }

                    function g(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function v() {
                        return this.bodyUsed = !1, this._initBody = function (e) {
                            var t;
                            this._bodyInit = e, e ? "string" == typeof e ? this._bodyText = e : s && Blob.prototype
                                .isPrototypeOf(e) ? this._bodyBlob = e : i && FormData.prototype.isPrototypeOf(
                                    e) ? this._bodyFormData = e : r && URLSearchParams.prototype.isPrototypeOf(
                                    e) ? this._bodyText = e.toString() : o && s && (t = e) && DataView.prototype
                                .isPrototypeOf(t) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit =
                                    new Blob([this._bodyArrayBuffer])) : o && (ArrayBuffer.prototype.isPrototypeOf(
                                    e) || h(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e =
                                Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get(
                                    "content-type") || ("string" == typeof e ? this.headers.set(
                                        "content-type", "text/plain;charset=UTF-8") : this._bodyBlob &&
                                    this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) :
                                    r && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set(
                                        "content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, s && (this.blob = function () {
                            var e = f(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error(
                                "could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function () {
                            return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) :
                                this.blob().then(m)
                        }), this.text = function () {
                            var e, t, r, n = f(this);
                            if (n) return n;
                            if (this._bodyBlob) return e = this._bodyBlob, t = new FileReader, r = p(t), t.readAsText(
                                e), r;
                            if (this._bodyArrayBuffer) return Promise.resolve(function (e) {
                                for (var t = new Uint8Array(e), r = new Array(t.length), n = 0; n <
                                    t.length; n++) r[n] = String.fromCharCode(t[n]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, i && (this.formData = function () {
                            return this.text().then(_)
                        }), this.json = function () {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    d.prototype.append = function (e, t) {
                        e = c(e), t = u(t);
                        var r = this.map[e];
                        this.map[e] = r ? r + ", " + t : t
                    }, d.prototype.delete = function (e) {
                        delete this.map[c(e)]
                    }, d.prototype.get = function (e) {
                        return e = c(e), this.has(e) ? this.map[e] : null
                    }, d.prototype.has = function (e) {
                        return this.map.hasOwnProperty(c(e))
                    }, d.prototype.set = function (e, t) {
                        this.map[c(e)] = u(t)
                    }, d.prototype.forEach = function (e, t) {
                        for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r,
                            this)
                    }, d.prototype.keys = function () {
                        var e = [];
                        return this.forEach((function (t, r) {
                            e.push(r)
                        })), l(e)
                    }, d.prototype.values = function () {
                        var e = [];
                        return this.forEach((function (t) {
                            e.push(t)
                        })), l(e)
                    }, d.prototype.entries = function () {
                        var e = [];
                        return this.forEach((function (t, r) {
                            e.push([r, t])
                        })), l(e)
                    }, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
                    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function b(e, t) {
                        var r, n, s = (t = t || {}).body;
                        if (e instanceof b) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers =
                                    new d(e.headers)), this.method = e.method, this.mode = e.mode, this.signal =
                                e.signal, s || null == e._bodyInit || (s = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers &&
                            this.headers || (this.headers = new d(t.headers)), this.method = (r = t.method ||
                                this.method || "GET", n = r.toUpperCase(), y.indexOf(n) > -1 ? n : r), this.mode =
                            t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer =
                            null, ("GET" === this.method || "HEAD" === this.method) && s) throw new TypeError(
                            "Body not allowed for GET or HEAD requests");
                        this._initBody(s)
                    }

                    function _(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach((function (e) {
                            if (e) {
                                var r = e.split("="),
                                    n = r.shift().replace(/\+/g, " "),
                                    s = r.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(n), decodeURIComponent(s))
                            }
                        })), t
                    }

                    function w(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status,
                            this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in
                            t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "",
                            this._initBody(e)
                    }
                    b.prototype.clone = function () {
                        return new b(this, {
                            body: this._bodyInit
                        })
                    }, v.call(b.prototype), v.call(w.prototype), w.prototype.clone = function () {
                        return new w(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new d(this.headers),
                            url: this.url
                        })
                    }, w.error = function () {
                        var e = new w(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var k = [301, 302, 303, 307, 308];
                    w.redirect = function (e, t) {
                        if (-1 === k.indexOf(t)) throw new RangeError("Invalid status code");
                        return new w(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = e.DOMException;
                    try {
                        new t.DOMException
                    } catch (e) {
                        t.DOMException = function (e, t) {
                                this.message = e, this.name = t;
                                var r = Error(e);
                                this.stack = r.stack
                            }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype
                            .constructor = t.DOMException
                    }

                    function T(e, r) {
                        return new Promise((function (n, i) {
                            var o = new b(e, r);
                            if (o.signal && o.signal.aborted) return i(new t.DOMException("Aborted",
                                "AbortError"));
                            var a = new XMLHttpRequest;

                            function h() {
                                a.abort()
                            }
                            a.onload = function () {
                                    var e, t, r = {
                                        status: a.status,
                                        statusText: a.statusText,
                                        headers: (e = a.getAllResponseHeaders() || "", t = new d,
                                            e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(
                                                (function (e) {
                                                    var r = e.split(":"),
                                                        n = r.shift().trim();
                                                    if (n) {
                                                        var s = r.join(":").trim();
                                                        t.append(n, s)
                                                    }
                                                })), t)
                                    };
                                    r.url = "responseURL" in a ? a.responseURL : r.headers.get(
                                        "X-Request-URL");
                                    var s = "response" in a ? a.response : a.responseText;
                                    n(new w(s, r))
                                }, a.onerror = function () {
                                    i(new TypeError("Network request failed"))
                                }, a.ontimeout = function () {
                                    i(new TypeError("Network request failed"))
                                }, a.onabort = function () {
                                    i(new t.DOMException("Aborted", "AbortError"))
                                }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !
                                0 : "omit" === o.credentials && (a.withCredentials = !1),
                                "responseType" in a && s && (a.responseType = "blob"), o.headers.forEach(
                                    (function (e, t) {
                                        a.setRequestHeader(t, e)
                                    })), o.signal && (o.signal.addEventListener("abort", h), a.onreadystatechange =
                                    function () {
                                        4 === a.readyState && o.signal.removeEventListener("abort",
                                            h)
                                    }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                        }))
                    }
                    T.polyfill = !0, e.fetch || (e.fetch = T, e.Headers = d, e.Request = b, e.Response = w), t.Headers =
                        d, t.Request = b, t.Response = w, t.fetch = T, Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                }({})
            }(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
            var s = n;
            (t = s.fetch).default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t
                .Response = s.Response, e.exports = t
        }, ne(se = {
            exports: {}
        }, se.exports), se.exports),
        oe = re(ie);

    function ae(e) {
        return Math.round(Date.now() / 1e3) + e
    }
    const he = () => "undefined" != typeof window;

    function ce(e, t) {
        var r;
        t || (t = (null === (r = null === window || void 0 === window ? void 0 : window.location) || void 0 === r ?
            void 0 : r.href) || ""), e = e.replace(/[\[\]]/g, "\\$&");
        const n = new RegExp("[?&#]" + e + "(=([^&#]*)|&|#|$)").exec(t);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }
    const ue = e => {
        let t;
        return t = e || ("undefined" == typeof fetch ? oe : fetch), (...e) => t(...e)
    };
    var le = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    class de {
        constructor({
            url: e = "",
            headers: t = {},
            cookieOptions: r,
            fetch: n
        }) {
            this.url = e, this.headers = t, this.cookieOptions = Object.assign(Object.assign({}, X), r), this.fetch =
                ue(n)
        }
        _createRequestHeaders(e) {
            const t = Object.assign({}, this.headers);
            return t.Authorization = `Bearer ${e}`, t
        }
        cookieName() {
            var e;
            return null !== (e = this.cookieOptions.name) && void 0 !== e ? e : ""
        }
        getUrlForProvider(e, t) {
            const r = [`provider=${encodeURIComponent(e)}`];
            return (null == t ? void 0 : t.redirectTo) && r.push(
                `redirect_to=${encodeURIComponent(t.redirectTo)}`), (null == t ? void 0 : t.scopes) && r.push(
                `scopes=${encodeURIComponent(t.scopes)}`), `${this.url}/authorize?${r.join("&")}`
        }
        signUpWithEmail(e, t, r = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign({}, this.headers);
                    let s = "";
                    r.redirectTo && (s = "?redirect_to=" + encodeURIComponent(r.redirectTo));
                    const i = yield z(this.fetch, `${this.url}/signup${s}`, {
                        email: e,
                        password: t,
                        data: r.data,
                        gotrue_meta_security: {
                            hcaptcha_token: r.captchaToken
                        }
                    }, {
                        headers: n
                    }), o = Object.assign({}, i);
                    return o.expires_in && (o.expires_at = ae(i.expires_in)), {
                        data: o,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signInWithEmail(e, t, r = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign({}, this.headers);
                    let s = "?grant_type=password";
                    r.redirectTo && (s += "&redirect_to=" + encodeURIComponent(r.redirectTo));
                    const i = yield z(this.fetch, `${this.url}/token${s}`, {
                        email: e,
                        password: t
                    }, {
                        headers: n
                    }), o = Object.assign({}, i);
                    return o.expires_in && (o.expires_at = ae(i.expires_in)), {
                        data: o,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signUpWithPhone(e, t, r = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign({}, this.headers),
                        s = yield z(this.fetch, `${this.url}/signup`, {
                            phone: e,
                            password: t,
                            data: r.data,
                            gotrue_meta_security: {
                                hcaptcha_token: r.captchaToken
                            }
                        }, {
                            headers: n
                        }), i = Object.assign({}, s);
                    return i.expires_in && (i.expires_at = ae(s.expires_in)), {
                        data: i,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signInWithPhone(e, t) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const r = Object.assign({}, this.headers),
                        n = "?grant_type=password",
                        s = yield z(this.fetch, `${this.url}/token${n}`, {
                            phone: e,
                            password: t
                        }, {
                            headers: r
                        }), i = Object.assign({}, s);
                    return i.expires_in && (i.expires_at = ae(s.expires_in)), {
                        data: i,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signInWithOpenIDConnect({
            id_token: e,
            nonce: t,
            client_id: r,
            issuer: n,
            provider: s
        }) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const i = Object.assign({}, this.headers),
                        o = "?grant_type=id_token",
                        a = yield z(this.fetch, `${this.url}/token${o}`, {
                            id_token: e,
                            nonce: t,
                            client_id: r,
                            issuer: n,
                            provider: s
                        }, {
                            headers: i
                        }), h = Object.assign({}, a);
                    return h.expires_in && (h.expires_at = ae(a.expires_in)), {
                        data: h,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        sendMagicLinkEmail(e, t = {}) {
            var r;
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign({}, this.headers);
                    let s = "";
                    t.redirectTo && (s += "?redirect_to=" + encodeURIComponent(t.redirectTo));
                    const i = null === (r = t.shouldCreateUser) || void 0 === r || r;
                    return {
                        data: yield z(this.fetch, `${this.url}/otp${s}`, {
                            email: e,
                            create_user: i,
                            gotrue_meta_security: {
                                hcaptcha_token: t.captchaToken
                            }
                        }, {
                            headers: n
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        sendMobileOTP(e, t = {}) {
            var r;
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = null === (r = t.shouldCreateUser) || void 0 === r || r,
                        s = Object.assign({}, this.headers);
                    return {
                        data: yield z(this.fetch, `${this.url}/otp`, {
                            phone: e,
                            create_user: n,
                            gotrue_meta_security: {
                                hcaptcha_token: t.captchaToken
                            }
                        }, {
                            headers: s
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signOut(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    return yield z(this.fetch, `${this.url}/logout`, {}, {
                        headers: this._createRequestHeaders(e),
                        noResolveJson: !0
                    }), {
                        error: null
                    }
                } catch (e) {
                    return {
                        error: e
                    }
                }
            }))
        }
        verifyMobileOTP(e, t, r = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign({}, this.headers),
                        s = yield z(this.fetch, `${this.url}/verify`, {
                            phone: e,
                            token: t,
                            type: "sms",
                            redirect_to: r.redirectTo
                        }, {
                            headers: n
                        }), i = Object.assign({}, s);
                    return i.expires_in && (i.expires_at = ae(s.expires_in)), {
                        data: i,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        verifyOTP({
            email: e,
            phone: t,
            token: r,
            type: n = "sms"
        }, s = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const i = Object.assign({}, this.headers),
                        o = yield z(this.fetch, `${this.url}/verify`, {
                            email: e,
                            phone: t,
                            token: r,
                            type: n,
                            redirect_to: s.redirectTo
                        }, {
                            headers: i
                        }), a = Object.assign({}, o);
                    return a.expires_in && (a.expires_at = ae(o.expires_in)), {
                        data: a,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        inviteUserByEmail(e, t = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const r = Object.assign({}, this.headers);
                    let n = "";
                    t.redirectTo && (n += "?redirect_to=" + encodeURIComponent(t.redirectTo));
                    return {
                        data: yield z(this.fetch, `${this.url}/invite${n}`, {
                            email: e,
                            data: t.data
                        }, {
                            headers: r
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        resetPasswordForEmail(e, t = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const r = Object.assign({}, this.headers);
                    let n = "";
                    t.redirectTo && (n += "?redirect_to=" + encodeURIComponent(t.redirectTo));
                    return {
                        data: yield z(this.fetch, `${this.url}/recover${n}`, {
                            email: e,
                            gotrue_meta_security: {
                                hcaptcha_token: t.captchaToken
                            }
                        }, {
                            headers: r
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        refreshAccessToken(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const t = yield z(this.fetch, `${this.url}/token?grant_type=refresh_token`, {
                        refresh_token: e
                    }, {
                        headers: this.headers
                    }), r = Object.assign({}, t);
                    return r.expires_in && (r.expires_at = ae(t.expires_in)), {
                        data: r,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        setAuthCookie(e, t) {
            "POST" !== e.method && (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
            const {
                event: r,
                session: n
            } = e.body;
            if (!r) throw new Error("Auth event missing!");
            if ("SIGNED_IN" === r) {
                if (!n) throw new Error("Auth session missing!");
                ee(e, t, [{
                    key: "access-token",
                    value: n.access_token
                }, {
                    key: "refresh-token",
                    value: n.refresh_token
                }].map((e => {
                    var t;
                    return {
                        name: `${this.cookieName()}-${e.key}`,
                        value: e.value,
                        domain: this.cookieOptions.domain,
                        maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t :
                            0,
                        path: this.cookieOptions.path,
                        sameSite: this.cookieOptions.sameSite
                    }
                })))
            }
            "SIGNED_OUT" === r && ee(e, t, ["access-token", "refresh-token"].map((e => ({
                name: `${this.cookieName()}-${e}`,
                value: "",
                maxAge: -1
            })))), t.status(200).json({})
        }
        deleteAuthCookie(e, t, {
            redirectTo: r = "/"
        }) {
            return ee(e, t, ["access-token", "refresh-token"].map((e => ({
                name: `${this.cookieName()}-${e}`,
                value: "",
                maxAge: -1
            })))), t.redirect(307, r)
        }
        getAuthCookieString(e, t) {
            "POST" !== e.method && (t.setHeader("Allow", "POST"), t.status(405).end("Method Not Allowed"));
            const {
                event: r,
                session: n
            } = e.body;
            if (!r) throw new Error("Auth event missing!");
            if ("SIGNED_IN" === r) {
                if (!n) throw new Error("Auth session missing!");
                return Z(e, t, [{
                    key: "access-token",
                    value: n.access_token
                }, {
                    key: "refresh-token",
                    value: n.refresh_token
                }].map((e => {
                    var t;
                    return {
                        name: `${this.cookieName()}-${e.key}`,
                        value: e.value,
                        domain: this.cookieOptions.domain,
                        maxAge: null !== (t = this.cookieOptions.lifetime) && void 0 !== t ? t :
                            0,
                        path: this.cookieOptions.path,
                        sameSite: this.cookieOptions.sameSite
                    }
                })))
            }
            return "SIGNED_OUT" === r ? Z(e, t, ["access-token", "refresh-token"].map((e => ({
                name: `${this.cookieName()}-${e}`,
                value: "",
                maxAge: -1
            })))) : t.getHeader("Set-Cookie")
        }
        generateLink(e, t, r = {}) {
            return le(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield z(this.fetch, `${this.url}/admin/generate_link`, {
                            type: e,
                            email: t,
                            password: r.password,
                            data: r.data,
                            redirect_to: r.redirectTo
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        createUser(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const t = yield z(this.fetch, `${this.url}/admin/users`, e, {
                        headers: this.headers
                    });
                    return {
                        user: t,
                        data: t,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
        listUsers() {
            return le(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: (yield K(this.fetch, `${this.url}/admin/users`, {
                            headers: this.headers
                        })).users,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        getUserById(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield K(this.fetch, `${this.url}/admin/users/${e}`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        getUserByCookie(e, t) {
            return le(this, void 0, void 0, (function* () {
                try {
                    if (!e.cookies) throw new Error(
                        "Not able to parse cookies! When using Express make sure the cookie-parser middleware is in use!"
                    );
                    const r = e.cookies[`${this.cookieName()}-access-token`],
                        n = e.cookies[`${this.cookieName()}-refresh-token`];
                    if (!r) throw new Error("No cookie found!");
                    const {
                        user: s,
                        error: i
                    } = yield this.getUser(r);
                    if (i) {
                        if (!n) throw new Error("No refresh_token cookie found!");
                        if (!t) throw new Error(
                            "You need to pass the res object to automatically refresh the session!"
                        );
                        const {
                            data: r,
                            error: s
                        } = yield this.refreshAccessToken(n);
                        if (s) throw s;
                        if (r) return ee(e, t, [{
                            key: "access-token",
                            value: r.access_token
                        }, {
                            key: "refresh-token",
                            value: r.refresh_token
                        }].map((e => {
                            var t;
                            return {
                                name: `${this.cookieName()}-${e.key}`,
                                value: e.value,
                                domain: this.cookieOptions.domain,
                                maxAge: null !== (t = this.cookieOptions.lifetime) &&
                                    void 0 !== t ? t : 0,
                                path: this.cookieOptions.path,
                                sameSite: this.cookieOptions.sameSite
                            }
                        }))), {
                            token: r.access_token,
                            user: r.user,
                            data: r.user,
                            error: null
                        }
                    }
                    return {
                        token: r,
                        user: s,
                        data: s,
                        error: null
                    }
                } catch (e) {
                    return {
                        token: null,
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
        updateUserById(e, t) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const r = yield W(this.fetch, `${this.url}/admin/users/${e}`, t, {
                        headers: this.headers
                    });
                    return {
                        user: r,
                        data: r,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
        deleteUser(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const t = yield function (e, t, r, n) {
                        return J(this, void 0, void 0, (function* () {
                            return q(e, "DELETE", t, n, r)
                        }))
                    }(this.fetch, `${this.url}/admin/users/${e}`, {}, {
                        headers: this.headers
                    });
                    return {
                        user: t,
                        data: t,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
        getUser(e) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const t = yield K(this.fetch, `${this.url}/user`, {
                        headers: this._createRequestHeaders(e)
                    });
                    return {
                        user: t,
                        data: t,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
        updateUser(e, t) {
            return le(this, void 0, void 0, (function* () {
                try {
                    const r = yield W(this.fetch, `${this.url}/user`, t, {
                        headers: this._createRequestHeaders(e)
                    });
                    return {
                        user: r,
                        data: r,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        data: null,
                        error: e
                    }
                }
            }))
        }
    }
    var fe = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    ! function () {
        if ("object" != typeof globalThis) try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function () {
                    return this
                },
                configurable: !0
            }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__
        } catch (e) {
            "undefined" != typeof self && (self.globalThis = self)
        }
    }();
    const pe = {
        url: "http://localhost:9999",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        multiTab: !0,
        headers: V
    };
    class me extends class {
        constructor(e) {
            this.stateChangeEmitters = new Map;
            const t = Object.assign(Object.assign({}, pe), e);
            this.currentUser = null, this.currentSession = null, this.autoRefreshToken = t.autoRefreshToken,
                this.persistSession = t.persistSession, this.multiTab = t.multiTab, this.localStorage = t.localStorage ||
                globalThis.localStorage, this.api = new de({
                    url: t.url,
                    headers: t.headers,
                    cookieOptions: t.cookieOptions,
                    fetch: t.fetch
                }), this._recoverSession(), this._recoverAndRefresh(), this._listenForMultiTabEvents(), t.detectSessionInUrl &&
                he() && ce("access_token") && this.getSessionFromUrl({
                    storeSession: !0
                }).then((({
                    error: e
                }) => {
                    e && console.error("Error getting session from URL.", e)
                }))
        }
        signUp({
            email: e,
            password: t,
            phone: r
        }, n = {}) {
            return fe(this, void 0, void 0, (function* () {
                try {
                    this._removeSession();
                    const {
                        data: s,
                        error: i
                    } = r && t ? yield this.api.signUpWithPhone(r, t, {
                        data: n.data,
                        captchaToken: n.captchaToken
                    }): yield this.api.signUpWithEmail(e, t, {
                        redirectTo: n.redirectTo,
                        data: n.data,
                        captchaToken: n.captchaToken
                    });
                    if (i) throw i;
                    if (!s) throw "An error occurred on sign up.";
                    let o = null,
                        a = null;
                    return s.access_token && (o = s, a = o.user, this._saveSession(o), this._notifyAllSubscribers(
                        "SIGNED_IN")), s.id && (a = s), {
                        user: a,
                        session: o,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        session: null,
                        error: e
                    }
                }
            }))
        }
        signIn({
            email: e,
            phone: t,
            password: r,
            refreshToken: n,
            provider: s,
            oidc: i
        }, o = {}) {
            return fe(this, void 0, void 0, (function* () {
                try {
                    if (this._removeSession(), e && !r) {
                        const {
                            error: t
                        } = yield this.api.sendMagicLinkEmail(e, {
                            redirectTo: o.redirectTo,
                            shouldCreateUser: o.shouldCreateUser,
                            captchaToken: o.captchaToken
                        });
                        return {
                            user: null,
                            session: null,
                            error: t
                        }
                    }
                    if (e && r) return this._handleEmailSignIn(e, r, {
                        redirectTo: o.redirectTo
                    });
                    if (t && !r) {
                        const {
                            error: e
                        } = yield this.api.sendMobileOTP(t, {
                            shouldCreateUser: o.shouldCreateUser,
                            captchaToken: o.captchaToken
                        });
                        return {
                            user: null,
                            session: null,
                            error: e
                        }
                    }
                    if (t && r) return this._handlePhoneSignIn(t, r);
                    if (n) {
                        const {
                            error: e
                        } = yield this._callRefreshToken(n);
                        if (e) throw e;
                        return {
                            user: this.currentUser,
                            session: this.currentSession,
                            error: null
                        }
                    }
                    if (s) return this._handleProviderSignIn(s, {
                        redirectTo: o.redirectTo,
                        scopes: o.scopes
                    });
                    if (i) return this._handleOpenIDConnectSignIn(i);
                    throw new Error(
                        "You must provide either an email, phone number, a third-party provider or OpenID Connect."
                    )
                } catch (e) {
                    return {
                        user: null,
                        session: null,
                        error: e
                    }
                }
            }))
        }
        verifyOTP(e, t = {}) {
            return fe(this, void 0, void 0, (function* () {
                try {
                    this._removeSession();
                    const {
                        data: r,
                        error: n
                    } = yield this.api.verifyOTP(e, t);
                    if (n) throw n;
                    if (!r) throw "An error occurred on token verification.";
                    let s = null,
                        i = null;
                    return r.access_token && (s = r, i = s.user, this._saveSession(s), this._notifyAllSubscribers(
                        "SIGNED_IN")), r.id && (i = r), {
                        user: i,
                        session: s,
                        error: null
                    }
                } catch (e) {
                    return {
                        user: null,
                        session: null,
                        error: e
                    }
                }
            }))
        }
        user() {
            return this.currentUser
        }
        session() {
            return this.currentSession
        }
        refreshSession() {
            var e;
            return fe(this, void 0, void 0, (function* () {
                try {
                    if (!(null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token))
                        throw new Error("Not logged in.");
                    const {
                        error: t
                    } = yield this._callRefreshToken();
                    if (t) throw t;
                    return {
                        data: this.currentSession,
                        user: this.currentUser,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        user: null,
                        error: e
                    }
                }
            }))
        }
        update(e) {
            var t;
            return fe(this, void 0, void 0, (function* () {
                try {
                    if (!(null === (t = this.currentSession) || void 0 === t ? void 0 : t.access_token))
                        throw new Error("Not logged in.");
                    const {
                        user: r,
                        error: n
                    } = yield this.api.updateUser(this.currentSession.access_token, e);
                    if (n) throw n;
                    if (!r) throw Error("Invalid user data.");
                    const s = Object.assign(Object.assign({}, this.currentSession), {
                        user: r
                    });
                    return this._saveSession(s), this._notifyAllSubscribers("USER_UPDATED"), {
                        data: r,
                        user: r,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        user: null,
                        error: e
                    }
                }
            }))
        }
        setSession(e) {
            return fe(this, void 0, void 0, (function* () {
                try {
                    if (!e) throw new Error("No current session.");
                    const {
                        data: t,
                        error: r
                    } = yield this.api.refreshAccessToken(e);
                    return r ? {
                        session: null,
                        error: r
                    } : (this._saveSession(t), this._notifyAllSubscribers("SIGNED_IN"), {
                        session: t,
                        error: null
                    })
                } catch (e) {
                    return {
                        error: e,
                        session: null
                    }
                }
            }))
        }
        setAuth(e) {
            return this.currentSession = Object.assign(Object.assign({}, this.currentSession), {
                access_token: e,
                token_type: "bearer",
                user: this.user()
            }), this.currentSession
        }
        getSessionFromUrl(e) {
            return fe(this, void 0, void 0, (function* () {
                try {
                    if (!he()) throw new Error("No browser detected.");
                    const t = ce("error_description");
                    if (t) throw new Error(t);
                    const r = ce("provider_token"),
                        n = ce("access_token");
                    if (!n) throw new Error("No access_token detected.");
                    const s = ce("expires_in");
                    if (!s) throw new Error("No expires_in detected.");
                    const i = ce("refresh_token");
                    if (!i) throw new Error("No refresh_token detected.");
                    const o = ce("token_type");
                    if (!o) throw new Error("No token_type detected.");
                    const a = Math.round(Date.now() / 1e3) + parseInt(s),
                        {
                            user: h,
                            error: c
                        } = yield this.api.getUser(n);
                    if (c) throw c;
                    const u = {
                        provider_token: r,
                        access_token: n,
                        expires_in: parseInt(s),
                        expires_at: a,
                        refresh_token: i,
                        token_type: o,
                        user: h
                    };
                    if (null == e ? void 0 : e.storeSession) {
                        this._saveSession(u);
                        const e = ce("type");
                        this._notifyAllSubscribers("SIGNED_IN"), "recovery" === e && this._notifyAllSubscribers(
                            "PASSWORD_RECOVERY")
                    }
                    return window.location.hash = "", {
                        data: u,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        signOut() {
            var e;
            return fe(this, void 0, void 0, (function* () {
                const t = null === (e = this.currentSession) || void 0 === e ? void 0 : e.access_token;
                if (this._removeSession(), this._notifyAllSubscribers("SIGNED_OUT"), t) {
                    const {
                        error: e
                    } = yield this.api.signOut(t);
                    if (e) return {
                        error: e
                    }
                }
                return {
                    error: null
                }
            }))
        }
        onAuthStateChange(e) {
            try {
                const t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                        const t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    })),
                    r = {
                        id: t,
                        callback: e,
                        unsubscribe: () => {
                            this.stateChangeEmitters.delete(t)
                        }
                    };
                return this.stateChangeEmitters.set(t, r), {
                    data: r,
                    error: null
                }
            } catch (e) {
                return {
                    data: null,
                    error: e
                }
            }
        }
        _handleEmailSignIn(e, t, r = {}) {
            var n, s;
            return fe(this, void 0, void 0, (function* () {
                try {
                    const {
                        data: i,
                        error: o
                    } = yield this.api.signInWithEmail(e, t, {
                        redirectTo: r.redirectTo
                    });
                    return o || !i ? {
                        data: null,
                        user: null,
                        session: null,
                        error: o
                    } : (((null === (n = null == i ? void 0 : i.user) || void 0 === n ? void 0 :
                        n.confirmed_at) || (null === (s = null == i ? void 0 : i.user) ||
                        void 0 === s ? void 0 : s.email_confirmed_at)) && (this._saveSession(
                        i), this._notifyAllSubscribers("SIGNED_IN")), {
                        data: i,
                        user: i.user,
                        session: i,
                        error: null
                    })
                } catch (e) {
                    return {
                        data: null,
                        user: null,
                        session: null,
                        error: e
                    }
                }
            }))
        }
        _handlePhoneSignIn(e, t) {
            var r;
            return fe(this, void 0, void 0, (function* () {
                try {
                    const {
                        data: n,
                        error: s
                    } = yield this.api.signInWithPhone(e, t);
                    return s || !n ? {
                        data: null,
                        user: null,
                        session: null,
                        error: s
                    } : ((null === (r = null == n ? void 0 : n.user) || void 0 === r ? void 0 :
                        r.phone_confirmed_at) && (this._saveSession(n), this._notifyAllSubscribers(
                        "SIGNED_IN")), {
                        data: n,
                        user: n.user,
                        session: n,
                        error: null
                    })
                } catch (e) {
                    return {
                        data: null,
                        user: null,
                        session: null,
                        error: e
                    }
                }
            }))
        }
        _handleProviderSignIn(e, t = {}) {
            const r = this.api.getUrlForProvider(e, {
                redirectTo: t.redirectTo,
                scopes: t.scopes
            });
            try {
                return he() && (window.location.href = r), {
                    provider: e,
                    url: r,
                    data: null,
                    session: null,
                    user: null,
                    error: null
                }
            } catch (t) {
                return r ? {
                    provider: e,
                    url: r,
                    data: null,
                    session: null,
                    user: null,
                    error: null
                } : {
                    data: null,
                    user: null,
                    session: null,
                    error: t
                }
            }
        }
        _handleOpenIDConnectSignIn({
            id_token: e,
            nonce: t,
            client_id: r,
            issuer: n,
            provider: s
        }) {
            return fe(this, void 0, void 0, (function* () {
                if (e && t && (r && n || s)) try {
                    const {
                        data: i,
                        error: o
                    } = yield this.api.signInWithOpenIDConnect({
                        id_token: e,
                        nonce: t,
                        client_id: r,
                        issuer: n,
                        provider: s
                    });
                    return o || !i ? {
                        user: null,
                        session: null,
                        error: o
                    } : (this._saveSession(i), this._notifyAllSubscribers("SIGNED_IN"), {
                        user: i.user,
                        session: i,
                        error: null
                    })
                } catch (e) {
                    return {
                        user: null,
                        session: null,
                        error: e
                    }
                }
                throw new Error(
                    "You must provide a OpenID Connect provider with your id token and nonce.")
            }))
        }
        _recoverSession() {
            var e;
            try {
                const t = he() && (null === (e = this.localStorage) || void 0 === e ? void 0 : e.getItem(Y));
                if (!t || "string" != typeof t) return null;
                const r = JSON.parse(t),
                    {
                        currentSession: n,
                        expiresAt: s
                    } = r;
                s >= Math.round(Date.now() / 1e3) && (null == n ? void 0 : n.user) && (this._saveSession(n),
                    this._notifyAllSubscribers("SIGNED_IN"))
            } catch (e) {
                console.log("error", e)
            }
        }
        _recoverAndRefresh() {
            return fe(this, void 0, void 0, (function* () {
                try {
                    const e = he() && (yield this.localStorage.getItem(Y));
                    if (!e) return null;
                    const t = JSON.parse(e),
                        {
                            currentSession: r,
                            expiresAt: n
                        } = t;
                    if (n < Math.round(Date.now() / 1e3))
                        if (this.autoRefreshToken && r.refresh_token) {
                            const {
                                error: e
                            } = yield this._callRefreshToken(r.refresh_token);
                            e && (console.log(e.message), yield this._removeSession())
                        } else this._removeSession();
                    else r ? (this._saveSession(r), this._notifyAllSubscribers("SIGNED_IN")) : (
                        console.log("Current session is missing data."), this._removeSession())
                } catch (e) {
                    return console.error(e), null
                }
            }))
        }
        _callRefreshToken(e) {
            var t;
            return void 0 === e && (e = null === (t = this.currentSession) || void 0 === t ? void 0 : t.refresh_token),
                fe(this, void 0, void 0, (function* () {
                    try {
                        if (!e) throw new Error("No current session.");
                        const {
                            data: t,
                            error: r
                        } = yield this.api.refreshAccessToken(e);
                        if (r) throw r;
                        if (!t) throw Error("Invalid session data.");
                        return this._saveSession(t), this._notifyAllSubscribers("TOKEN_REFRESHED"),
                            this._notifyAllSubscribers("SIGNED_IN"), {
                                data: t,
                                error: null
                            }
                    } catch (e) {
                        return {
                            data: null,
                            error: e
                        }
                    }
                }))
        }
        _notifyAllSubscribers(e) {
            this.stateChangeEmitters.forEach((t => t.callback(e, this.currentSession)))
        }
        _saveSession(e) {
            this.currentSession = e, this.currentUser = e.user;
            const t = e.expires_at;
            if (t) {
                const e = t - Math.round(Date.now() / 1e3),
                    r = e > 60 ? 60 : .5;
                this._startAutoRefreshToken(1e3 * (e - r))
            }
            this.persistSession && e.expires_at && this._persistSession(this.currentSession)
        }
        _persistSession(e) {
            const t = {
                currentSession: e,
                expiresAt: e.expires_at
            };
            he() && this.localStorage.setItem(Y, JSON.stringify(t))
        }
        _removeSession() {
            return fe(this, void 0, void 0, (function* () {
                this.currentSession = null, this.currentUser = null, this.refreshTokenTimer &&
                    clearTimeout(this.refreshTokenTimer), he() && (yield this.localStorage.removeItem(
                        Y))
            }))
        }
        _startAutoRefreshToken(e) {
            this.refreshTokenTimer && clearTimeout(this.refreshTokenTimer), e <= 0 || !this.autoRefreshToken ||
                (this.refreshTokenTimer = setTimeout((() => this._callRefreshToken()), e), "function" == typeof this
                    .refreshTokenTimer.unref && this.refreshTokenTimer.unref())
        }
        _listenForMultiTabEvents() {
            if (!this.multiTab || !he() || !(null === window || void 0 === window ? void 0 : window.addEventListener))
                return !1;
            try {
                null === window || void 0 === window || window.addEventListener("storage", (e => {
                    var t;
                    if (e.key === Y) {
                        const r = JSON.parse(String(e.newValue));
                        (null === (t = null == r ? void 0 : r.currentSession) || void 0 === t ?
                            void 0 : t.access_token) ? (this._recoverAndRefresh(), this._notifyAllSubscribers(
                            "SIGNED_IN")) : (this._removeSession(), this._notifyAllSubscribers(
                            "SIGNED_OUT"))
                    }
                }))
            } catch (e) {
                console.error("_listenForMultiTabEvents", e)
            }
        }
    } {
        constructor(e) {
            super(e)
        }
    }
    var ge = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    class ve {
        constructor(e) {
            let t;
            Object.assign(this, e), t = e.fetch ? e.fetch : "undefined" == typeof fetch ? oe : fetch, this.fetch =
                (...e) => t(...e), this.shouldThrowOnError = e.shouldThrowOnError || !1
        }
        throwOnError(e) {
            return null == e && (e = !0), this.shouldThrowOnError = e, this
        }
        then(e, t) {
            void 0 === this.schema || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] =
                    this.schema : this.headers["Content-Profile"] = this.schema), "GET" !== this.method &&
                "HEAD" !== this.method && (this.headers["Content-Type"] = "application/json");
            let r = this.fetch(this.url.toString(), {
                method: this.method,
                headers: this.headers,
                body: JSON.stringify(this.body),
                signal: this.signal
            }).then((e => ge(this, void 0, void 0, (function* () {
                var t, r, n;
                let s = null,
                    i = null,
                    o = null;
                if (e.ok) {
                    const s = null === (t = this.headers.Prefer) || void 0 === t ? void 0 :
                        t.split(",").includes("return=minimal");
                    if ("HEAD" !== this.method && !s) {
                        const t = yield e.text();
                        t && (i = "text/csv" === this.headers.Accept ? t : JSON.parse(t))
                    }
                    const a = null === (r = this.headers.Prefer) || void 0 === r ? void 0 :
                        r.match(/count=(exact|planned|estimated)/),
                        h = null === (n = e.headers.get("content-range")) || void 0 === n ?
                        void 0 : n.split("/");
                    a && h && h.length > 1 && (o = parseInt(h[1]))
                } else {
                    const t = yield e.text();
                    try {
                        s = JSON.parse(t)
                    } catch (e) {
                        s = {
                            message: t
                        }
                    }
                    if (s && this.shouldThrowOnError) throw s
                }
                return {
                    error: s,
                    data: i,
                    count: o,
                    status: e.status,
                    statusText: e.statusText,
                    body: i
                }
            }))));
            return this.shouldThrowOnError || (r = r.catch((e => ({
                error: {
                    message: `FetchError: ${e.message}`,
                    details: "",
                    hint: "",
                    code: e.code || ""
                },
                data: null,
                body: null,
                count: null,
                status: 400,
                statusText: "Bad Request"
            })))), r.then(e, t)
        }
    }
    class ye extends ve {
        select(e = "*") {
            let t = !1;
            const r = e.split("").map((e => /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e))).join("");
            return this.url.searchParams.set("select", r), this
        }
        order(e, {
            ascending: t = !0,
            nullsFirst: r = !1,
            foreignTable: n
        } = {}) {
            const s = void 0 === n ? "order" : `${n}.order`,
                i = this.url.searchParams.get(s);
            return this.url.searchParams.set(s,
                `${i?`${i},`:""}${e}.${t?"asc":"desc"}.${r?"nullsfirst":"nullslast"}`), this
        }
        limit(e, {
            foreignTable: t
        } = {}) {
            const r = void 0 === t ? "limit" : `${t}.limit`;
            return this.url.searchParams.set(r, `${e}`), this
        }
        range(e, t, {
            foreignTable: r
        } = {}) {
            const n = void 0 === r ? "offset" : `${r}.offset`,
                s = void 0 === r ? "limit" : `${r}.limit`;
            return this.url.searchParams.set(n, `${e}`), this.url.searchParams.set(s, "" + (t - e + 1)), this
        }
        abortSignal(e) {
            return this.signal = e, this
        }
        single() {
            return this.headers.Accept = "application/vnd.pgrst.object+json", this
        }
        maybeSingle() {
            this.headers.Accept = "application/vnd.pgrst.object+json";
            const e = new ye(this);
            return e.then = (e, t) => this.then((t => {
                var r, n;
                return (null === (n = null === (r = t.error) || void 0 === r ? void 0 : r.details) ||
                    void 0 === n ? void 0 : n.includes("Results contain 0 rows")) ? e({
                    error: null,
                    data: null,
                    count: t.count,
                    status: 200,
                    statusText: "OK",
                    body: null
                }) : e(t)
            }), t), e
        }
        csv() {
            return this.headers.Accept = "text/csv", this
        }
    }
    class be extends ye {
        constructor() {
            super(...arguments), this.cs = this.contains, this.cd = this.containedBy, this.sl = this.rangeLt,
                this.sr = this.rangeGt, this.nxl = this.rangeGte, this.nxr = this.rangeLte, this.adj = this.rangeAdjacent,
                this.ov = this.overlaps
        }
        not(e, t, r) {
            return this.url.searchParams.append(`${e}`, `not.${t}.${r}`), this
        }
        or(e, {
            foreignTable: t
        } = {}) {
            const r = void 0 === t ? "or" : `${t}.or`;
            return this.url.searchParams.append(r, `(${e})`), this
        }
        eq(e, t) {
            return this.url.searchParams.append(`${e}`, `eq.${t}`), this
        }
        neq(e, t) {
            return this.url.searchParams.append(`${e}`, `neq.${t}`), this
        }
        gt(e, t) {
            return this.url.searchParams.append(`${e}`, `gt.${t}`), this
        }
        gte(e, t) {
            return this.url.searchParams.append(`${e}`, `gte.${t}`), this
        }
        lt(e, t) {
            return this.url.searchParams.append(`${e}`, `lt.${t}`), this
        }
        lte(e, t) {
            return this.url.searchParams.append(`${e}`, `lte.${t}`), this
        }
        like(e, t) {
            return this.url.searchParams.append(`${e}`, `like.${t}`), this
        }
        ilike(e, t) {
            return this.url.searchParams.append(`${e}`, `ilike.${t}`), this
        }
        is(e, t) {
            return this.url.searchParams.append(`${e}`, `is.${t}`), this
        } in (e, t) {
            const r = t.map((e => "string" == typeof e && new RegExp("[,()]").test(e) ? `"${e}"` : `${e}`)).join(
                ",");
            return this.url.searchParams.append(`${e}`, `in.(${r})`), this
        }
        contains(e, t) {
            return "string" == typeof t ? this.url.searchParams.append(`${e}`, `cs.${t}`) : Array.isArray(t) ?
                this.url.searchParams.append(`${e}`, `cs.{${t.join(",")}}`) : this.url.searchParams.append(
                    `${e}`, `cs.${JSON.stringify(t)}`), this
        }
        containedBy(e, t) {
            return "string" == typeof t ? this.url.searchParams.append(`${e}`, `cd.${t}`) : Array.isArray(t) ?
                this.url.searchParams.append(`${e}`, `cd.{${t.join(",")}}`) : this.url.searchParams.append(
                    `${e}`, `cd.${JSON.stringify(t)}`), this
        }
        rangeLt(e, t) {
            return this.url.searchParams.append(`${e}`, `sl.${t}`), this
        }
        rangeGt(e, t) {
            return this.url.searchParams.append(`${e}`, `sr.${t}`), this
        }
        rangeGte(e, t) {
            return this.url.searchParams.append(`${e}`, `nxl.${t}`), this
        }
        rangeLte(e, t) {
            return this.url.searchParams.append(`${e}`, `nxr.${t}`), this
        }
        rangeAdjacent(e, t) {
            return this.url.searchParams.append(`${e}`, `adj.${t}`), this
        }
        overlaps(e, t) {
            return "string" == typeof t ? this.url.searchParams.append(`${e}`, `ov.${t}`) : this.url.searchParams
                .append(`${e}`, `ov.{${t.join(",")}}`), this
        }
        textSearch(e, t, {
            config: r,
            type: n = null
        } = {}) {
            let s = "";
            "plain" === n ? s = "pl" : "phrase" === n ? s = "ph" : "websearch" === n && (s = "w");
            const i = void 0 === r ? "" : `(${r})`;
            return this.url.searchParams.append(`${e}`, `${s}fts${i}.${t}`), this
        }
        fts(e, t, {
            config: r
        } = {}) {
            const n = void 0 === r ? "" : `(${r})`;
            return this.url.searchParams.append(`${e}`, `fts${n}.${t}`), this
        }
        plfts(e, t, {
            config: r
        } = {}) {
            const n = void 0 === r ? "" : `(${r})`;
            return this.url.searchParams.append(`${e}`, `plfts${n}.${t}`), this
        }
        phfts(e, t, {
            config: r
        } = {}) {
            const n = void 0 === r ? "" : `(${r})`;
            return this.url.searchParams.append(`${e}`, `phfts${n}.${t}`), this
        }
        wfts(e, t, {
            config: r
        } = {}) {
            const n = void 0 === r ? "" : `(${r})`;
            return this.url.searchParams.append(`${e}`, `wfts${n}.${t}`), this
        }
        filter(e, t, r) {
            return this.url.searchParams.append(`${e}`, `${t}.${r}`), this
        }
        match(e) {
            return Object.keys(e).forEach((t => {
                this.url.searchParams.append(`${t}`, `eq.${e[t]}`)
            })), this
        }
    }
    class _e extends ve {
        constructor(e, {
            headers: t = {},
            schema: r,
            fetch: n,
            shouldThrowOnError: s
        } = {}) {
            super({
                fetch: n,
                shouldThrowOnError: s
            }), this.url = new URL(e), this.headers = Object.assign({}, t), this.schema = r
        }
        select(e = "*", {
            head: t = !1,
            count: r = null
        } = {}) {
            this.method = "GET";
            let n = !1;
            const s = e.split("").map((e => /\s/.test(e) && !n ? "" : ('"' === e && (n = !n), e))).join("");
            return this.url.searchParams.set("select", s), r && (this.headers.Prefer = `count=${r}`), t && (
                this.method = "HEAD"), new be(this)
        }
        insert(e, {
            upsert: t = !1,
            onConflict: r,
            returning: n = "representation",
            count: s = null
        } = {}) {
            this.method = "POST";
            const i = [`return=${n}`];
            if (t && i.push("resolution=merge-duplicates"), t && void 0 !== r && this.url.searchParams.set(
                    "on_conflict", r), this.body = e, s && i.push(`count=${s}`), this.headers.Prefer && i.unshift(
                    this.headers.Prefer), this.headers.Prefer = i.join(","), Array.isArray(e)) {
                const t = e.reduce(((e, t) => e.concat(Object.keys(t))), []);
                if (t.length > 0) {
                    const e = [...new Set(t)].map((e => `"${e}"`));
                    this.url.searchParams.set("columns", e.join(","))
                }
            }
            return new be(this)
        }
        upsert(e, {
            onConflict: t,
            returning: r = "representation",
            count: n = null,
            ignoreDuplicates: s = !1
        } = {}) {
            this.method = "POST";
            const i = [`resolution=${s?"ignore":"merge"}-duplicates`, `return=${r}`];
            return void 0 !== t && this.url.searchParams.set("on_conflict", t), this.body = e, n && i.push(
                    `count=${n}`), this.headers.Prefer && i.unshift(this.headers.Prefer), this.headers.Prefer =
                i.join(","), new be(this)
        }
        update(e, {
            returning: t = "representation",
            count: r = null
        } = {}) {
            this.method = "PATCH";
            const n = [`return=${t}`];
            return this.body = e, r && n.push(`count=${r}`), this.headers.Prefer && n.unshift(this.headers.Prefer),
                this.headers.Prefer = n.join(","), new be(this)
        }
        delete({
            returning: e = "representation",
            count: t = null
        } = {}) {
            this.method = "DELETE";
            const r = [`return=${e}`];
            return t && r.push(`count=${t}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers
                .Prefer = r.join(","), new be(this)
        }
    }
    class we extends ve {
        constructor(e, {
            headers: t = {},
            schema: r,
            fetch: n,
            shouldThrowOnError: s
        } = {}) {
            super({
                fetch: n,
                shouldThrowOnError: s
            }), this.url = new URL(e), this.headers = Object.assign({}, t), this.schema = r
        }
        rpc(e, {
            head: t = !1,
            count: r = null
        } = {}) {
            return t ? (this.method = "HEAD", e && Object.entries(e).forEach((([e, t]) => {
                this.url.searchParams.append(e, t)
            }))) : (this.method = "POST", this.body = e), r && (void 0 !== this.headers.Prefer ? this.headers
                .Prefer += `,count=${r}` : this.headers.Prefer = `count=${r}`), new be(this)
        }
    }
    const ke = {
        "X-Client-Info": "postgrest-js/0.37.2"
    };
    class Te {
        constructor(e, {
            headers: t = {},
            schema: r,
            fetch: n,
            throwOnError: s
        } = {}) {
            this.url = e, this.headers = Object.assign(Object.assign({}, ke), t), this.schema = r, this.fetch =
                n, this.shouldThrowOnError = s
        }
        auth(e) {
            return this.headers.Authorization = `Bearer ${e}`, this
        }
        from(e) {
            const t = `${this.url}/${e}`;
            return new _e(t, {
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError
            })
        }
        rpc(e, t, {
            head: r = !1,
            count: n = null
        } = {}) {
            const s = `${this.url}/rpc/${e}`;
            return new we(s, {
                headers: this.headers,
                schema: this.schema,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError
            }).rpc(t, {
                head: r,
                count: n
            })
        }
    }
    var $e;
    ! function (e) {
        e.abstime = "abstime", e.bool = "bool", e.date = "date", e.daterange = "daterange", e.float4 = "float4", e.float8 =
            "float8", e.int2 = "int2", e.int4 = "int4", e.int4range = "int4range", e.int8 = "int8", e.int8range =
            "int8range", e.json = "json", e.jsonb = "jsonb", e.money = "money", e.numeric = "numeric", e.oid =
            "oid", e.reltime = "reltime", e.text = "text", e.time = "time", e.timestamp = "timestamp", e.timestamptz =
            "timestamptz", e.timetz = "timetz", e.tsrange = "tsrange", e.tstzrange = "tstzrange"
    }($e || ($e = {}));
    const Ee = (e, t, r = {}) => {
            var n;
            const s = null !== (n = r.skipTypes) && void 0 !== n ? n : [];
            return Object.keys(t).reduce(((r, n) => (r[n] = Oe(n, e, t, s), r)), {})
        },
        Oe = (e, t, r, n) => {
            const s = t.find((t => t.name === e)),
                i = null == s ? void 0 : s.type,
                o = r[e];
            return i && !n.includes(i) ? Se(i, o) : xe(o)
        },
        Se = (e, t) => {
            if ("_" === e.charAt(0)) {
                const r = e.slice(1, e.length);
                return Re(t, r)
            }
            switch (e) {
                case $e.bool:
                    return je(t);
                case $e.float4:
                case $e.float8:
                case $e.int2:
                case $e.int4:
                case $e.int8:
                case $e.numeric:
                case $e.oid:
                    return Pe(t);
                case $e.json:
                case $e.jsonb:
                    return Ae(t);
                case $e.timestamp:
                    return Ue(t);
                case $e.abstime:
                case $e.date:
                case $e.daterange:
                case $e.int4range:
                case $e.int8range:
                case $e.money:
                case $e.reltime:
                case $e.text:
                case $e.time:
                case $e.timestamptz:
                case $e.timetz:
                case $e.tsrange:
                case $e.tstzrange:
                default:
                    return xe(t)
            }
        },
        xe = e => e,
        je = e => {
            switch (e) {
                case "t":
                    return !0;
                case "f":
                    return !1;
                default:
                    return e
            }
        },
        Pe = e => {
            if ("string" == typeof e) {
                const t = parseFloat(e);
                if (!Number.isNaN(t)) return t
            }
            return e
        },
        Ae = e => {
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (t) {
                return console.log(`JSON parse error: ${t}`), e
            }
            return e
        },
        Re = (e, t) => {
            if ("string" != typeof e) return e;
            const r = e.length - 1,
                n = e[r];
            if ("{" === e[0] && "}" === n) {
                let n;
                const s = e.slice(1, r);
                try {
                    n = JSON.parse("[" + s + "]")
                } catch (e) {
                    n = s ? s.split(",") : []
                }
                return n.map((e => Se(t, e)))
            }
            return e
        },
        Ue = e => "string" == typeof e ? e.replace(" ", "T") : e;
    var Ce, Ie = function () {
            if ("object" == typeof self && self) return self;
            if ("object" == typeof window && window) return window;
            throw new Error("Unable to resolve global `this`")
        },
        Ne = function () {
            if (this) return this;
            if ("object" == typeof globalThis && globalThis) return globalThis;
            try {
                Object.defineProperty(Object.prototype, "__global__", {
                    get: function () {
                        return this
                    },
                    configurable: !0
                })
            } catch (e) {
                return Ie()
            }
            try {
                return __global__ || Ie()
            } finally {
                delete Object.prototype.__global__
            }
        }(),
        De = "1.0.34";
    if ("object" == typeof globalThis) Ce = globalThis;
    else try {
        Ce = Ne
    } catch (e) {} finally {
        if (Ce || "undefined" == typeof window || (Ce = window), !Ce) throw new Error(
            "Could not determine global this")
    }
    var Be = Ce.WebSocket || Ce.MozWebSocket;

    function Le(e, t) {
        return t ? new Be(e, t) : new Be(e)
    }
    Be && ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach((function (e) {
        Object.defineProperty(Le, e, {
            get: function () {
                return Be[e]
            }
        })
    }));
    var Me = {
        w3cwebsocket: Be ? Le : null,
        version: De
    };
    const Fe = {
        "X-Client-Info": "realtime-js/1.6.2"
    };
    var He, Je, Ge, qe;
    ! function (e) {
        e[e.connecting = 0] = "connecting", e[e.open = 1] = "open", e[e.closing = 2] = "closing", e[e.closed = 3] =
            "closed"
    }(He || (He = {})),
    function (e) {
        e.closed = "closed", e.errored = "errored", e.joined = "joined", e.joining = "joining", e.leaving =
            "leaving"
    }(Je || (Je = {})),
    function (e) {
        e.close = "phx_close", e.error = "phx_error", e.join = "phx_join", e.reply = "phx_reply", e.leave =
            "phx_leave", e.access_token = "access_token"
    }(Ge || (Ge = {})),
    function (e) {
        e.websocket = "websocket"
    }(qe || (qe = {}));
    class Ke {
        constructor(e, t) {
            this.callback = e, this.timerCalc = t, this.timer = void 0, this.tries = 0, this.callback = e, this
                .timerCalc = t
        }
        reset() {
            this.tries = 0, clearTimeout(this.timer)
        }
        scheduleTimeout() {
            clearTimeout(this.timer), this.timer = setTimeout((() => {
                this.tries = this.tries + 1, this.callback()
            }), this.timerCalc(this.tries + 1))
        }
    }
    class ze {
        constructor() {
            this.HEADER_LENGTH = 1
        }
        decode(e, t) {
            return e.constructor === ArrayBuffer ? t(this._binaryDecode(e)) : t("string" == typeof e ? JSON.parse(
                e) : {})
        }
        _binaryDecode(e) {
            const t = new DataView(e),
                r = new TextDecoder;
            return this._decodeBroadcast(e, t, r)
        }
        _decodeBroadcast(e, t, r) {
            const n = t.getUint8(1),
                s = t.getUint8(2);
            let i = this.HEADER_LENGTH + 2;
            const o = r.decode(e.slice(i, i + n));
            i += n;
            const a = r.decode(e.slice(i, i + s));
            i += s;
            return {
                ref: null,
                topic: o,
                event: a,
                payload: JSON.parse(r.decode(e.slice(i, e.byteLength)))
            }
        }
    }
    class We {
        constructor(e, t, r = {}, n = 1e4) {
            this.channel = e, this.event = t, this.payload = r, this.timeout = n, this.sent = !1, this.timeoutTimer =
                void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null
        }
        resend(e) {
            this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp =
                null, this.sent = !1, this.send()
        }
        send() {
            this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload,
                ref: this.ref
            }))
        }
        updatePayload(e) {
            this.payload = Object.assign(Object.assign({}, this.payload), e)
        }
        receive(e, t) {
            var r;
            return this._hasReceived(e) && t(null === (r = this.receivedResp) || void 0 === r ? void 0 : r.response),
                this.recHooks.push({
                    status: e,
                    callback: t
                }), this
        }
        startTimeout() {
            if (this.timeoutTimer) return;
            this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref);
            const e = e => {
                this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e)
            };
            this.channel instanceof Ve ? this.channel.on(this.refEvent, e) : this.channel.on(this.refEvent, {},
                e), this.timeoutTimer = setTimeout((() => {
                this.trigger("timeout", {})
            }), this.timeout)
        }
        trigger(e, t) {
            this.refEvent && this.channel.trigger(this.refEvent, {
                status: e,
                response: t
            })
        }
        destroy() {
            this._cancelRefEvent(), this._cancelTimeout()
        }
        _cancelRefEvent() {
            this.refEvent && (this.channel instanceof Ve ? this.channel.off(this.refEvent) : this.channel.off(
                this.refEvent, {}))
        }
        _cancelTimeout() {
            clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0
        }
        _matchReceive({
            status: e,
            response: t
        }) {
            this.recHooks.filter((t => t.status === e)).forEach((e => e.callback(t)))
        }
        _hasReceived(e) {
            return this.receivedResp && this.receivedResp.status === e
        }
    }
    class Ve {
        constructor(e, t = {}, r) {
            this.topic = e, this.params = t, this.socket = r, this.bindings = [], this.state = Je.closed, this.joinedOnce = !
                1, this.pushBuffer = [], this.timeout = this.socket.timeout, this.joinPush = new We(this, Ge.join,
                    this.params, this.timeout), this.rejoinTimer = new Ke((() => this.rejoinUntilConnected()),
                    this.socket.reconnectAfterMs), this.joinPush.receive("ok", (() => {
                    this.state = Je.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e => e.send())),
                        this.pushBuffer = []
                })), this.onClose((() => {
                    this.rejoinTimer.reset(), this.socket.log("channel",
                            `close ${this.topic} ${this.joinRef()}`), this.state = Je.closed, this.socket
                        .remove(this)
                })), this.onError((e => {
                    this.isLeaving() || this.isClosed() || (this.socket.log("channel",
                        `error ${this.topic}`, e), this.state = Je.errored, this.rejoinTimer.scheduleTimeout())
                })), this.joinPush.receive("timeout", (() => {
                    this.isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush
                        .timeout), this.state = Je.errored, this.rejoinTimer.scheduleTimeout())
                })), this.on(Ge.reply, ((e, t) => {
                    this.trigger(this.replyEventName(t), e)
                }))
        }
        rejoinUntilConnected() {
            this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin()
        }
        subscribe(e = this.timeout) {
            if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
            return this.joinedOnce = !0, this.rejoin(e), this.joinPush
        }
        onClose(e) {
            this.on(Ge.close, e)
        }
        onError(e) {
            this.on(Ge.error, (t => e(t)))
        }
        on(e, t) {
            this.bindings.push({
                event: e,
                callback: t
            })
        }
        off(e) {
            this.bindings = this.bindings.filter((t => t.event !== e))
        }
        canPush() {
            return this.socket.isConnected() && this.isJoined()
        }
        push(e, t, r = this.timeout) {
            if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
            let n = new We(this, e, t, r);
            return this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n
        }
        updateJoinPayload(e) {
            this.joinPush.updatePayload(e)
        }
        unsubscribe(e = this.timeout) {
            this.state = Je.leaving;
            let t = () => {
                this.socket.log("channel", `leave ${this.topic}`), this.trigger(Ge.close, "leave", this.joinRef())
            };
            this.joinPush.destroy();
            let r = new We(this, Ge.leave, {}, e);
            return r.receive("ok", (() => t())).receive("timeout", (() => t())), r.send(), this.canPush() || r.trigger(
                "ok", {}), r
        }
        onMessage(e, t, r) {
            return t
        }
        isMember(e) {
            return this.topic === e
        }
        joinRef() {
            return this.joinPush.ref
        }
        rejoin(e = this.timeout) {
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Je.joining, this.joinPush
                .resend(e))
        }
        trigger(e, t, r) {
            let {
                close: n,
                error: s,
                leave: i,
                join: o
            } = Ge;
            if (r && [n, s, i, o].indexOf(e) >= 0 && r !== this.joinRef()) return;
            let a = this.onMessage(e, t, r);
            if (t && !a) throw "channel onMessage callbacks must return the payload, modified or unmodified";
            this.bindings.filter((r => "*" === r.event ? e === (null == t ? void 0 : t.type) : r.event === e)).map(
                (e => e.callback(a, r)))
        }
        replyEventName(e) {
            return `chan_reply_${e}`
        }
        isClosed() {
            return this.state === Je.closed
        }
        isErrored() {
            return this.state === Je.errored
        }
        isJoined() {
            return this.state === Je.joined
        }
        isJoining() {
            return this.state === Je.joining
        }
        isLeaving() {
            return this.state === Je.leaving
        }
    }
    class Ye {
        constructor(e, t) {
            this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
                onJoin: () => {},
                onLeave: () => {},
                onSync: () => {}
            };
            const r = (null == t ? void 0 : t.events) || {
                state: "presence_state",
                diff: "presence_diff"
            };
            this.channel.on(r.state, {}, (e => {
                const {
                    onJoin: t,
                    onLeave: r,
                    onSync: n
                } = this.caller;
                this.joinRef = this.channel.joinRef(), this.state = Ye.syncState(this.state, e, t,
                    r), this.pendingDiffs.forEach((e => {
                    this.state = Ye.syncDiff(this.state, e, t, r)
                })), this.pendingDiffs = [], n()
            })), this.channel.on(r.diff, {}, (e => {
                const {
                    onJoin: t,
                    onLeave: r,
                    onSync: n
                } = this.caller;
                this.inPendingSyncState() ? this.pendingDiffs.push(e) : (this.state = Ye.syncDiff(
                    this.state, e, t, r), n())
            }))
        }
        static syncState(e, t, r, n) {
            const s = this.cloneDeep(e),
                i = this.transformState(t),
                o = {},
                a = {};
            return this.map(s, ((e, t) => {
                i[e] || (a[e] = t)
            })), this.map(i, ((e, t) => {
                const r = s[e];
                if (r) {
                    const n = t.map((e => e.presence_id)),
                        s = r.map((e => e.presence_id)),
                        i = t.filter((e => s.indexOf(e.presence_id) < 0)),
                        h = r.filter((e => n.indexOf(e.presence_id) < 0));
                    i.length > 0 && (o[e] = i), h.length > 0 && (a[e] = h)
                } else o[e] = t
            })), this.syncDiff(s, {
                joins: o,
                leaves: a
            }, r, n)
        }
        static syncDiff(e, t, r, n) {
            const {
                joins: s,
                leaves: i
            } = {
                joins: this.transformState(t.joins),
                leaves: this.transformState(t.leaves)
            };
            return r || (r = () => {}), n || (n = () => {}), this.map(s, ((t, n) => {
                const s = e[t];
                if (e[t] = this.cloneDeep(n), s) {
                    const r = e[t].map((e => e.presence_id)),
                        n = s.filter((e => r.indexOf(e.presence_id) < 0));
                    e[t].unshift(...n)
                }
                r(t, s, n)
            })), this.map(i, ((t, r) => {
                let s = e[t];
                if (!s) return;
                const i = r.map((e => e.presence_id));
                s = s.filter((e => i.indexOf(e.presence_id) < 0)), e[t] = s, n(t, s, r), 0 === s.length &&
                    delete e[t]
            })), e
        }
        static list(e, t) {
            return t || (t = (e, t) => t), this.map(e, ((e, r) => t(e, r)))
        }
        static map(e, t) {
            return Object.getOwnPropertyNames(e).map((r => t(r, e[r])))
        }
        static transformState(e) {
            return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce(((t, r) => {
                const n = e[r];
                return t[r] = "metas" in n ? n.metas.map((e => (e.presence_id = e.phx_ref, delete e
                    .phx_ref, delete e.phx_ref_prev, e))) : n, t
            }), {})
        }
        static cloneDeep(e) {
            return JSON.parse(JSON.stringify(e))
        }
        onJoin(e) {
            this.caller.onJoin = e
        }
        onLeave(e) {
            this.caller.onLeave = e
        }
        onSync(e) {
            this.caller.onSync = e
        }
        list(e) {
            return Ye.list(this.state, e)
        }
        inPendingSyncState() {
            return !this.joinRef || this.joinRef !== this.channel.joinRef()
        }
    }
    class Xe {
        constructor(e, t = {}, r) {
            this.topic = e, this.params = t, this.socket = r, this.bindings = [], this.state = Je.closed, this.joinedOnce = !
                1, this.pushBuffer = [], this.timeout = this.socket.timeout, this.joinPush = new We(this, Ge.join,
                    this.params, this.timeout), this.rejoinTimer = new Ke((() => this.rejoinUntilConnected()),
                    this.socket.reconnectAfterMs), this.joinPush.receive("ok", (() => {
                    this.state = Je.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((e => e.send())),
                        this.pushBuffer = []
                })), this.onClose((() => {
                    this.rejoinTimer.reset(), this.socket.log("channel",
                            `close ${this.topic} ${this.joinRef()}`), this.state = Je.closed, this.socket
                        .remove(this)
                })), this.onError((e => {
                    this.isLeaving() || this.isClosed() || (this.socket.log("channel",
                        `error ${this.topic}`, e), this.state = Je.errored, this.rejoinTimer.scheduleTimeout())
                })), this.joinPush.receive("timeout", (() => {
                    this.isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush
                        .timeout), this.state = Je.errored, this.rejoinTimer.scheduleTimeout())
                })), this.on(Ge.reply, {}, ((e, t) => {
                    this.trigger(this.replyEventName(t), e)
                })), this.presence = new Ye(this)
        }
        list() {
            return this.presence.list()
        }
        rejoinUntilConnected() {
            this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this.rejoin()
        }
        subscribe(e = this.timeout) {
            if (this.joinedOnce) throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance"; {
                const t = this.bindings.reduce(((e, t) => {
                    const {
                        type: r
                    } = t;
                    return ["phx_close", "phx_error", "phx_reply", "presence_diff",
                        "presence_state"].includes(r) || (e[r] = t), e
                }), {});
                return Object.keys(t).length && this.updateJoinPayload({
                    configs: t
                }), this.joinedOnce = !0, this.rejoin(e), this.joinPush
            }
        }
        onClose(e) {
            this.on(Ge.close, {}, e)
        }
        onError(e) {
            this.on(Ge.error, {}, (t => e(t)))
        }
        on(e, t, r) {
            this.bindings.push({
                type: e,
                eventFilter: null != t ? t : {},
                callback: null != r ? r : () => {}
            })
        }
        off(e, t) {
            this.bindings = this.bindings.filter((r => !(r.type === e && Xe.isEqual(r.eventFilter, t))))
        }
        canPush() {
            return this.socket.isConnected() && this.isJoined()
        }
        push(e, t, r = this.timeout) {
            if (!this.joinedOnce) throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
            let n = new We(this, e, t, r);
            return this.canPush() ? n.send() : (n.startTimeout(), this.pushBuffer.push(n)), n
        }
        updateJoinPayload(e) {
            this.joinPush.updatePayload(e)
        }
        unsubscribe(e = this.timeout) {
            this.state = Je.leaving;
            let t = () => {
                this.socket.log("channel", `leave ${this.topic}`), this.trigger(Ge.close, "leave", this.joinRef())
            };
            this.joinPush.destroy();
            let r = new We(this, Ge.leave, {}, e);
            return r.receive("ok", (() => t())).receive("timeout", (() => t())), r.send(), this.canPush() || r.trigger(
                "ok", {}), r
        }
        onMessage(e, t, r) {
            return t
        }
        isMember(e) {
            return this.topic === e
        }
        joinRef() {
            return this.joinPush.ref
        }
        rejoin(e = this.timeout) {
            this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = Je.joining, this.joinPush
                .resend(e))
        }
        trigger(e, t, r) {
            const {
                close: n,
                error: s,
                leave: i,
                join: o
            } = Ge;
            if (r && [n, s, i, o].indexOf(e) >= 0 && r !== this.joinRef()) return;
            const a = this.onMessage(e, t, r);
            if (t && !a) throw "channel onMessage callbacks must return the payload, modified or unmodified";
            this.bindings.filter((r => {
                var n, s;
                return (null == r ? void 0 : r.type) === e && ("*" === (null === (n = null == r ?
                    void 0 : r.eventFilter) || void 0 === n ? void 0 : n.event) || (null ===
                    (s = null == r ? void 0 : r.eventFilter) || void 0 === s ? void 0 : s.event
                ) === (null == t ? void 0 : t.event))
            })).map((e => e.callback(a, r)))
        }
        send(e) {
            const t = this.push(e.type, e);
            return new Promise(((e, r) => {
                t.receive("ok", (() => e("ok"))), t.receive("timeout", (() => r("timeout")))
            }))
        }
        replyEventName(e) {
            return `chan_reply_${e}`
        }
        isClosed() {
            return this.state === Je.closed
        }
        isErrored() {
            return this.state === Je.errored
        }
        isJoined() {
            return this.state === Je.joined
        }
        isJoining() {
            return this.state === Je.joining
        }
        isLeaving() {
            return this.state === Je.leaving
        }
        static isEqual(e, t) {
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (const r in e)
                if (e[r] !== t[r]) return !1;
            return !0
        }
    }
    var Qe = function (e, t, r, n) {
            return new(r || (r = Promise))((function (s, i) {
                function o(e) {
                    try {
                        h(n.next(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function a(e) {
                    try {
                        h(n.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }

                function h(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                        e(t)
                    }))).then(o, a)
                }
                h((n = n.apply(e, t || [])).next())
            }))
        },
        Ze = function (e, t) {
            var r = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype
                    .propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
            }
            return r
        };
    const et = () => {};
    class tt {
        constructor(e, t) {
            this.accessToken = null, this.channels = [], this.endPoint = "", this.headers = Fe, this.params = {},
                this.timeout = 1e4, this.transport = Me.w3cwebsocket, this.heartbeatIntervalMs = 3e4, this.longpollerTimeout =
                2e4, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.ref = 0, this.logger =
                et, this.conn = null, this.sendBuffer = [], this.serializer = new ze, this.stateChangeCallbacks = {
                    open: [],
                    close: [],
                    error: [],
                    message: []
                }, this.endPoint = `${e}/${qe.websocket}`, (null == t ? void 0 : t.params) && (this.params = t.params),
                (null == t ? void 0 : t.headers) && (this.headers = Object.assign(Object.assign({}, this.headers),
                    t.headers)), (null == t ? void 0 : t.timeout) && (this.timeout = t.timeout), (null == t ?
                    void 0 : t.logger) && (this.logger = t.logger), (null == t ? void 0 : t.transport) && (this
                    .transport = t.transport), (null == t ? void 0 : t.heartbeatIntervalMs) && (this.heartbeatIntervalMs =
                    t.heartbeatIntervalMs), (null == t ? void 0 : t.longpollerTimeout) && (this.longpollerTimeout =
                    t.longpollerTimeout), this.reconnectAfterMs = (null == t ? void 0 : t.reconnectAfterMs) ? t
                .reconnectAfterMs : e => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4, this.encode = (null == t ? void 0 :
                    t.encode) ? t.encode : (e, t) => t(JSON.stringify(e)), this.decode = (null == t ? void 0 :
                    t.decode) ? t.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer =
                new Ke((() => Qe(this, void 0, void 0, (function* () {
                    yield this.disconnect(), this.connect()
                }))), this.reconnectAfterMs)
        }
        connect() {
            this.conn || (this.conn = new this.transport(this.endPointURL(), [], null, this.headers), this.conn &&
                (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn
                    .onerror = e => this._onConnError(e), this.conn.onmessage = e => this.onConnMessage(e),
                    this.conn.onclose = e => this._onConnClose(e)))
        }
        disconnect(e, t) {
            return new Promise(((r, n) => {
                try {
                    this.conn && (this.conn.onclose = function () {}, e ? this.conn.close(e, t ||
                            "") : this.conn.close(), this.conn = null, this.heartbeatTimer &&
                        clearInterval(this.heartbeatTimer), this.reconnectTimer.reset()), r({
                        error: null,
                        data: !0
                    })
                } catch (e) {
                    r({
                        error: e,
                        data: !1
                    })
                }
            }))
        }
        log(e, t, r) {
            this.logger(e, t, r)
        }
        onOpen(e) {
            this.stateChangeCallbacks.open.push(e)
        }
        onClose(e) {
            this.stateChangeCallbacks.close.push(e)
        }
        onError(e) {
            this.stateChangeCallbacks.error.push(e)
        }
        onMessage(e) {
            this.stateChangeCallbacks.message.push(e)
        }
        connectionState() {
            switch (this.conn && this.conn.readyState) {
                case He.connecting:
                    return "connecting";
                case He.open:
                    return "open";
                case He.closing:
                    return "closing";
                default:
                    return "closed"
            }
        }
        isConnected() {
            return "open" === this.connectionState()
        }
        remove(e) {
            this.channels = this.channels.filter((t => t.joinRef() !== e.joinRef()))
        }
        channel(e, t = {
            isNewVersion: !1
        }) {
            const {
                isNewVersion: r
            } = t, n = Ze(t, ["isNewVersion"]), s = r ? new Xe(e, Object.assign({}, n), this) : new Ve(e,
                Object.assign({}, n), this);
            return s instanceof Xe && (s.presence.onJoin(((e, t, r) => {
                s.trigger("presence", {
                    event: "JOIN",
                    key: e,
                    currentPresences: t,
                    newPresences: r
                })
            })), s.presence.onLeave(((e, t, r) => {
                s.trigger("presence", {
                    event: "LEAVE",
                    key: e,
                    currentPresences: t,
                    leftPresences: r
                })
            })), s.presence.onSync((() => {
                s.trigger("presence", {
                    event: "SYNC"
                })
            }))), this.channels.push(s), s
        }
        push(e) {
            let {
                topic: t,
                event: r,
                payload: n,
                ref: s
            } = e, i = () => {
                this.encode(e, (e => {
                    var t;
                    null === (t = this.conn) || void 0 === t || t.send(e)
                }))
            };
            this.log("push", `${t} ${r} (${s})`, n), this.isConnected() ? i() : this.sendBuffer.push(i)
        }
        onConnMessage(e) {
            this.decode(e.data, (e => {
                let {
                    topic: t,
                    event: r,
                    payload: n,
                    ref: s
                } = e;
                (s && s === this.pendingHeartbeatRef || r === (null == n ? void 0 : n.type)) && (
                    this.pendingHeartbeatRef = null), this.log("receive",
                        `${n.status||""} ${t} ${r} ${s&&"("+s+")"||""}`, n), this.channels.filter((
                        e => e.isMember(t))).forEach((e => e.trigger(r, n, s))), this.stateChangeCallbacks
                    .message.forEach((t => t(e)))
            }))
        }
        endPointURL() {
            return this._appendParams(this.endPoint, Object.assign({}, this.params, {
                vsn: "1.0.0"
            }))
        }
        makeRef() {
            let e = this.ref + 1;
            return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString()
        }
        setAuth(e) {
            this.accessToken = e;
            try {
                this.channels.forEach((t => {
                    e && t.updateJoinPayload({
                        user_token: e
                    }), t.joinedOnce && t.isJoined() && t.push(Ge.access_token, {
                        access_token: e
                    })
                }))
            } catch (e) {
                console.log("setAuth error", e)
            }
        }
        leaveOpenTopic(e) {
            let t = this.channels.find((t => t.topic === e && (t.isJoined() || t.isJoining())));
            t && (this.log("transport", `leaving duplicate topic "${e}"`), t.unsubscribe())
        }
        _onConnOpen() {
            this.log("transport", `connected to ${this.endPointURL()}`), this._flushSendBuffer(), this.reconnectTimer
                .reset(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer =
                setInterval((() => this._sendHeartbeat()), this.heartbeatIntervalMs), this.stateChangeCallbacks
                .open.forEach((e => e()))
        }
        _onConnClose(e) {
            this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(
                    this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close
                .forEach((t => t(e)))
        }
        _onConnError(e) {
            this.log("transport", e.message), this._triggerChanError(), this.stateChangeCallbacks.error.forEach(
                (t => t(e)))
        }
        _triggerChanError() {
            this.channels.forEach((e => e.trigger(Ge.error)))
        }
        _appendParams(e, t) {
            if (0 === Object.keys(t).length) return e;
            const r = e.match(/\?/) ? "&" : "?";
            return `${e}${r}${new URLSearchParams(t)}`
        }
        _flushSendBuffer() {
            this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e => e())), this.sendBuffer = [])
        }
        _sendHeartbeat() {
            var e;
            if (this.isConnected()) {
                if (this.pendingHeartbeatRef) return this.pendingHeartbeatRef = null, this.log("transport",
                    "heartbeat timeout. Attempting to re-establish connection"), void(null === (e =
                    this.conn) || void 0 === e || e.close(1e3, "hearbeat timeout"));
                this.pendingHeartbeatRef = this.makeRef(), this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef
                }), this.setAuth(this.accessToken)
            }
        }
    }
    class rt {
        constructor(e, t, r, n) {
            const s = {},
                i = "*" === n ? `realtime:${r}` : `realtime:${r}:${n}`,
                o = t.Authorization.split(" ")[1];
            o && (s.user_token = o), this.subscription = e.channel(i, s)
        }
        getPayloadRecords(e) {
            const t = {
                new: {},
                old: {}
            };
            return "INSERT" !== e.type && "UPDATE" !== e.type || (t.new = Ee(e.columns, e.record)), "UPDATE" !==
                e.type && "DELETE" !== e.type || (t.old = Ee(e.columns, e.old_record)), t
        }
        on(e, t) {
            return this.subscription.on(e, (e => {
                let r = {
                    schema: e.schema,
                    table: e.table,
                    commit_timestamp: e.commit_timestamp,
                    eventType: e.type,
                    new: {},
                    old: {},
                    errors: e.errors
                };
                r = Object.assign(Object.assign({}, r), this.getPayloadRecords(e)), t(r)
            })), this
        }
        subscribe(e = (() => {})) {
            return this.subscription.onError((t => e("SUBSCRIPTION_ERROR", t))), this.subscription.onClose((() =>
                e("CLOSED"))), this.subscription.subscribe().receive("ok", (() => e("SUBSCRIBED"))).receive(
                "error", (t => e("SUBSCRIPTION_ERROR", t))).receive("timeout", (() => e(
                "RETRYING_AFTER_TIMEOUT"))), this.subscription
        }
    }
    class nt extends _e {
        constructor(e, {
            headers: t = {},
            schema: r,
            realtime: n,
            table: s,
            fetch: i,
            shouldThrowOnError: o
        }) {
            super(e, {
                    headers: t,
                    schema: r,
                    fetch: i,
                    shouldThrowOnError: o
                }), this._subscription = null, this._realtime = n, this._headers = t, this._schema = r, this._table =
                s
        }
        on(e, t) {
            return this._realtime.isConnected() || this._realtime.connect(), this._subscription || (this._subscription =
                new rt(this._realtime, this._headers, this._schema, this._table)), this._subscription.on(e,
                t)
        }
    }
    const st = {
        "X-Client-Info": "storage-js/0.0.0"
    };
    var it = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    const ot = e => e.msg || e.message || e.error_description || e.error || JSON.stringify(e);

    function at(e, t, r, n, s, i) {
        return it(this, void 0, void 0, (function* () {
            return new Promise(((o, a) => {
                e(r, ((e, t, r, n) => {
                    const s = {
                        method: e,
                        headers: (null == t ? void 0 : t.headers) || {}
                    };
                    return "GET" === e ? s : (s.headers = Object.assign({
                        "Content-Type": "application/json"
                    }, null == t ? void 0 : t.headers), s.body = JSON.stringify(
                        n), Object.assign(Object.assign({}, s), r))
                })(t, n, s, i)).then((e => {
                    if (!e.ok) throw e;
                    return (null == n ? void 0 : n.noResolveJson) ? o(e) : e.json()
                })).then((e => o(e))).catch((e => ((e, t) => {
                    if ("function" != typeof e.json) return t(e);
                    e.json().then((r => t({
                        message: ot(r),
                        status: (null == e ? void 0 : e.status) ||
                            500
                    })))
                })(e, a)))
            }))
        }))
    }

    function ht(e, t, r, n) {
        return it(this, void 0, void 0, (function* () {
            return at(e, "GET", t, r, n)
        }))
    }

    function ct(e, t, r, n, s) {
        return it(this, void 0, void 0, (function* () {
            return at(e, "POST", t, n, s, r)
        }))
    }

    function ut(e, t, r, n, s) {
        return it(this, void 0, void 0, (function* () {
            return at(e, "DELETE", t, n, s, r)
        }))
    }
    const lt = e => {
        let t;
        return t = e || ("undefined" == typeof fetch ? oe : fetch), (...e) => t(...e)
    };
    var dt = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    var ft = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    const pt = {
            limit: 100,
            offset: 0,
            sortBy: {
                column: "name",
                order: "asc"
            }
        },
        mt = {
            cacheControl: "3600",
            contentType: "text/plain;charset=UTF-8",
            upsert: !1
        };
    class gt {
        constructor(e, t = {}, r, n) {
            this.url = e, this.headers = t, this.bucketId = r, this.fetch = lt(n)
        }
        uploadOrUpdate(e, t, r, n) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    let s;
                    const i = Object.assign(Object.assign({}, mt), n),
                        o = Object.assign(Object.assign({}, this.headers), "POST" === e && {
                            "x-upsert": String(i.upsert)
                        });
                    "undefined" != typeof Blob && r instanceof Blob ? (s = new FormData, s.append(
                            "cacheControl", i.cacheControl), s.append("", r)) : "undefined" !=
                        typeof FormData && r instanceof FormData ? (s = r, s.append("cacheControl",
                            i.cacheControl)) : (s = r, o["cache-control"] =
                            `max-age=${i.cacheControl}`, o["content-type"] = i.contentType);
                    const a = this._removeEmptyFolders(t),
                        h = this._getFinalPath(a),
                        c = yield this.fetch(`${this.url}/object/${h}`, {
                            method: e,
                            body: s,
                            headers: o
                        });
                    if (c.ok) return {
                        data: {
                            Key: h
                        },
                        error: null
                    };
                    return {
                        data: null,
                        error: yield c.json()
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        upload(e, t, r) {
            return ft(this, void 0, void 0, (function* () {
                return this.uploadOrUpdate("POST", e, t, r)
            }))
        }
        update(e, t, r) {
            return ft(this, void 0, void 0, (function* () {
                return this.uploadOrUpdate("PUT", e, t, r)
            }))
        }
        move(e, t) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ct(this.fetch, `${this.url}/object/move`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: t
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        copy(e, t) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ct(this.fetch, `${this.url}/object/copy`, {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: t
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        createSignedUrl(e, t) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    const r = this._getFinalPath(e);
                    let n = yield ct(this.fetch, `${this.url}/object/sign/${r}`, {
                        expiresIn: t
                    }, {
                        headers: this.headers
                    });
                    const s = `${this.url}${n.signedURL}`;
                    return n = {
                        signedURL: s
                    }, {
                        data: n,
                        error: null,
                        signedURL: s
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e,
                        signedURL: null
                    }
                }
            }))
        }
        createSignedUrls(e, t) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: (yield ct(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                            expiresIn: t,
                            paths: e
                        }, {
                            headers: this.headers
                        })).map((e => Object.assign(Object.assign({}, e), {
                            signedURL: e.signedURL ? `${this.url}${e.signedURL}` : null
                        }))),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        download(e) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    const t = this._getFinalPath(e),
                        r = yield ht(this.fetch, `${this.url}/object/${t}`, {
                            headers: this.headers,
                            noResolveJson: !0
                        });
                    return {
                        data: yield r.blob(),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        getPublicUrl(e) {
            try {
                const t = this._getFinalPath(e),
                    r = `${this.url}/object/public/${t}`;
                return {
                    data: {
                        publicURL: r
                    },
                    error: null,
                    publicURL: r
                }
            } catch (e) {
                return {
                    data: null,
                    error: e,
                    publicURL: null
                }
            }
        }
        remove(e) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ut(this.fetch, `${this.url}/object/${this.bucketId}`, {
                            prefixes: e
                        }, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        list(e, t, r) {
            return ft(this, void 0, void 0, (function* () {
                try {
                    const n = Object.assign(Object.assign(Object.assign({}, pt), t), {
                        prefix: e || ""
                    });
                    return {
                        data: yield ct(this.fetch, `${this.url}/object/list/${this.bucketId}`, n, {
                            headers: this.headers
                        }, r),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        _getFinalPath(e) {
            return `${this.bucketId}/${e}`
        }
        _removeEmptyFolders(e) {
            return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/")
        }
    }
    class vt extends class {
        constructor(e, t = {}, r) {
            this.url = e, this.headers = Object.assign(Object.assign({}, st), t), this.fetch = lt(r)
        }
        listBuckets() {
            return dt(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ht(this.fetch, `${this.url}/bucket`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        getBucket(e) {
            return dt(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ht(this.fetch, `${this.url}/bucket/${e}`, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        createBucket(e, t = {
            public: !1
        }) {
            return dt(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: (yield ct(this.fetch, `${this.url}/bucket`, {
                            id: e,
                            name: e,
                            public: t.public
                        }, {
                            headers: this.headers
                        })).name,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        updateBucket(e, t) {
            return dt(this, void 0, void 0, (function* () {
                try {
                    const r = yield function (e, t, r, n, s) {
                        return it(this, void 0, void 0, (function* () {
                            return at(e, "PUT", t, n, s, r)
                        }))
                    }(this.fetch, `${this.url}/bucket/${e}`, {
                        id: e,
                        name: e,
                        public: t.public
                    }, {
                        headers: this.headers
                    });
                    return {
                        data: r,
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        emptyBucket(e) {
            return dt(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ct(this.fetch, `${this.url}/bucket/${e}/empty`, {}, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
        deleteBucket(e) {
            return dt(this, void 0, void 0, (function* () {
                try {
                    return {
                        data: yield ut(this.fetch, `${this.url}/bucket/${e}`, {}, {
                            headers: this.headers
                        }),
                        error: null
                    }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
    } {
        constructor(e, t = {}, r) {
            super(e, t, r)
        }
        from(e) {
            return new gt(this.url, this.headers, e, this.fetch)
        }
    }
    var yt = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    class bt {
        constructor(e, {
            headers: t = {},
            customFetch: r
        } = {}) {
            this.url = e, this.headers = t, this.fetch = (e => {
                let t;
                return t = e || ("undefined" == typeof fetch ? oe : fetch), (...e) => t(...e)
            })(r)
        }
        setAuth(e) {
            this.headers.Authorization = `Bearer ${e}`
        }
        invoke(e, t) {
            return yt(this, void 0, void 0, (function* () {
                try {
                    const {
                        headers: r,
                        body: n
                    } = null != t ? t : {}, s = yield this.fetch(`${this.url}/${e}`, {
                        method: "POST",
                        headers: Object.assign({}, this.headers, r),
                        body: n
                    }), i = s.headers.get("x-relay-error");
                    if (i && "true" === i) return {
                        data: null,
                        error: new Error(yield s.text())
                    };
                    let o;
                    const {
                        responseType: a
                    } = null != t ? t : {};
                    return o = a && "json" !== a ? "arrayBuffer" === a ? yield s.arrayBuffer():
                        "blob" === a ? yield s.blob(): yield s.text(): yield s.json(), {
                            data: o,
                            error: null
                        }
                } catch (e) {
                    return {
                        data: null,
                        error: e
                    }
                }
            }))
        }
    }
    var _t = function (e, t, r, n) {
        return new(r || (r = Promise))((function (s, i) {
            function o(e) {
                try {
                    h(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    h(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function h(e) {
                var t;
                e.done ? s(e.value) : (t = e.value, t instanceof r ? t : new r((function (e) {
                    e(t)
                }))).then(o, a)
            }
            h((n = n.apply(e, t || [])).next())
        }))
    };
    const wt = {
        schema: "public",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        multiTab: !0,
        headers: H
    };
    class kt {
        constructor(e, t, r) {
            if (this.supabaseUrl = e, this.supabaseKey = t, !e) throw new Error("supabaseUrl is required.");
            if (!t) throw new Error("supabaseKey is required.");
            const n = e.replace(/\/$/, "");
            const s = Object.assign(Object.assign({}, wt), r);
            this.restUrl = `${n}/rest/v1`, this.realtimeUrl = `${n}/realtime/v1`.replace("http", "ws"), this.authUrl =
                `${n}/auth/v1`, this.storageUrl = `${n}/storage/v1`;
            if (n.match(/(supabase\.co)|(supabase\.in)/)) {
                const e = n.split(".");
                this.functionsUrl = `${e[0]}.functions.${e[1]}.${e[2]}`
            } else this.functionsUrl = `${n}/functions/v1`;
            this.schema = s.schema, this.multiTab = s.multiTab, this.fetch = s.fetch, this.headers = Object.assign(
                    Object.assign({}, H), null == r ? void 0 : r.headers), this.shouldThrowOnError = s.shouldThrowOnError ||
                !1, this.auth = this._initSupabaseAuthClient(s), this.realtime = this._initRealtimeClient(
                    Object.assign({
                        headers: this.headers
                    }, s.realtime)), this._listenForAuthEvents(), this._listenForMultiTabEvents()
        }
        get functions() {
            return new bt(this.functionsUrl, {
                headers: this._getAuthHeaders(),
                customFetch: this.fetch
            })
        }
        get storage() {
            return new vt(this.storageUrl, this._getAuthHeaders(), this.fetch)
        }
        from(e) {
            const t = `${this.restUrl}/${e}`;
            return new nt(t, {
                headers: this._getAuthHeaders(),
                schema: this.schema,
                realtime: this.realtime,
                table: e,
                fetch: this.fetch,
                shouldThrowOnError: this.shouldThrowOnError
            })
        }
        rpc(e, t, {
            head: r = !1,
            count: n = null
        } = {}) {
            return this._initPostgRESTClient().rpc(e, t, {
                head: r,
                count: n
            })
        }
        removeAllSubscriptions() {
            return _t(this, void 0, void 0, (function* () {
                const e = this.getSubscriptions().slice(),
                    t = e.map((e => this.removeSubscription(e)));
                return (yield Promise.all(t)).map((({
                    error: t
                }, r) => ({
                    data: {
                        subscription: e[r]
                    },
                    error: t
                })))
            }))
        }
        removeSubscription(e) {
            return _t(this, void 0, void 0, (function* () {
                const {
                    error: t
                } = yield this._closeSubscription(e), r = this.getSubscriptions(), n = r.filter((e =>
                    e.isJoined())).length;
                return 0 === r.length && (yield this.realtime.disconnect()), {
                    data: {
                        openSubscriptions: n
                    },
                    error: t
                }
            }))
        }
        _closeSubscription(e) {
            return _t(this, void 0, void 0, (function* () {
                let t = null;
                if (!e.isClosed()) {
                    const {
                        error: r
                    } = yield this._unsubscribeSubscription(e);
                    t = r
                }
                return this.realtime.remove(e), {
                    error: t
                }
            }))
        }
        _unsubscribeSubscription(e) {
            return new Promise((t => {
                e.unsubscribe().receive("ok", (() => t({
                    error: null
                }))).receive("error", (e => t({
                    error: e
                }))).receive("timeout", (() => t({
                    error: new Error("timed out")
                })))
            }))
        }
        getSubscriptions() {
            return this.realtime.channels
        }
        _initSupabaseAuthClient({
            autoRefreshToken: e,
            persistSession: t,
            detectSessionInUrl: r,
            localStorage: n,
            headers: s,
            fetch: i
        }) {
            const o = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`
            };
            return new me({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, s), o),
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                localStorage: n,
                fetch: i
            })
        }
        _initRealtimeClient(e) {
            return new tt(this.realtimeUrl, Object.assign(Object.assign({}, e), {
                params: Object.assign(Object.assign({}, null == e ? void 0 : e.params), {
                    apikey: this.supabaseKey
                })
            }))
        }
        _initPostgRESTClient() {
            return new Te(this.restUrl, {
                headers: this._getAuthHeaders(),
                schema: this.schema,
                fetch: this.fetch,
                throwOnError: this.shouldThrowOnError
            })
        }
        _getAuthHeaders() {
            var e, t;
            const r = Object.assign({}, this.headers),
                n = null !== (t = null === (e = this.auth.session()) || void 0 === e ? void 0 : e.access_token) &&
                void 0 !== t ? t : this.supabaseKey;
            return r.apikey = this.supabaseKey, r.Authorization = r.Authorization || `Bearer ${n}`, r
        }
        _listenForMultiTabEvents() {
            if (!this.multiTab || "undefined" == typeof window || !(null === window || void 0 === window ? void 0 :
                    window.addEventListener)) return null;
            try {
                return null === window || void 0 === window ? void 0 : window.addEventListener("storage", (e => {
                    var t, r, n;
                    if ("supabase.auth.token" === e.key) {
                        const s = JSON.parse(String(e.newValue)),
                            i = null !== (r = null === (t = null == s ? void 0 : s.currentSession) ||
                                void 0 === t ? void 0 : t.access_token) && void 0 !== r ? r : void 0,
                            o = null === (n = this.auth.session()) || void 0 === n ? void 0 : n.access_token;
                        i ? !o && i ? this._handleTokenChanged("SIGNED_IN", i, "STORAGE") : o !==
                            i && this._handleTokenChanged("TOKEN_REFRESHED", i, "STORAGE") : this._handleTokenChanged(
                                "SIGNED_OUT", i, "STORAGE")
                    }
                }))
            } catch (e) {
                return console.error("_listenForMultiTabEvents", e), null
            }
        }
        _listenForAuthEvents() {
            let {
                data: e
            } = this.auth.onAuthStateChange(((e, t) => {
                this._handleTokenChanged(e, null == t ? void 0 : t.access_token, "CLIENT")
            }));
            return e
        }
        _handleTokenChanged(e, t, r) {
            "TOKEN_REFRESHED" !== e && "SIGNED_IN" !== e || this.changedAccessToken === t ? "SIGNED_OUT" !== e &&
                "USER_DELETED" !== e || (this.realtime.setAuth(this.supabaseKey), "STORAGE" == r && this.auth.signOut()) :
                (this.realtime.setAuth(t), "STORAGE" == r && this.auth.setAuth(t), this.changedAccessToken = t)
        }
    }
    const Tt = [];
    const $t = function (t, r = e) {
        let n;
        const s = new Set;

        function i(e) {
            if (o(t, e) && (t = e, n)) {
                const e = !Tt.length;
                for (const e of s) e[1](), Tt.push(e, t);
                if (e) {
                    for (let e = 0; e < Tt.length; e += 2) Tt[e][0](Tt[e + 1]);
                    Tt.length = 0
                }
            }
        }
        return {
            set: i,
            update: function (e) {
                i(e(t))
            },
            subscribe: function (o, a = e) {
                const h = [o, a];
                return s.add(h), 1 === s.size && (n = r(i) || e), o(t), () => {
                    s.delete(h), 0 === s.size && (n(), n = null)
                }
            }
        }
    }([]);

    function Et(e, t) {
        var r = e[0],
            n = e[1],
            s = e[2],
            i = e[3];
        r = St(r, n, s, i, t[0], 7, -680876936), i = St(i, r, n, s, t[1], 12, -389564586), s = St(s, i, r, n, t[2],
                17, 606105819), n = St(n, s, i, r, t[3], 22, -1044525330), r = St(r, n, s, i, t[4], 7, -176418897),
            i = St(i, r, n, s, t[5], 12, 1200080426), s = St(s, i, r, n, t[6], 17, -1473231341), n = St(n, s, i, r,
                t[7], 22, -45705983), r = St(r, n, s, i, t[8], 7, 1770035416), i = St(i, r, n, s, t[9], 12, -
                1958414417), s = St(s, i, r, n, t[10], 17, -42063), n = St(n, s, i, r, t[11], 22, -1990404162), r =
            St(r, n, s, i, t[12], 7, 1804603682), i = St(i, r, n, s, t[13], 12, -40341101), s = St(s, i, r, n, t[14],
                17, -1502002290), r = xt(r, n = St(n, s, i, r, t[15], 22, 1236535329), s, i, t[1], 5, -165796510),
            i = xt(i, r, n, s, t[6], 9, -1069501632), s = xt(s, i, r, n, t[11], 14, 643717713), n = xt(n, s, i, r,
                t[0], 20, -373897302), r = xt(r, n, s, i, t[5], 5, -701558691), i = xt(i, r, n, s, t[10], 9,
                38016083), s = xt(s, i, r, n, t[15], 14, -660478335), n = xt(n, s, i, r, t[4], 20, -405537848), r =
            xt(r, n, s, i, t[9], 5, 568446438), i = xt(i, r, n, s, t[14], 9, -1019803690), s = xt(s, i, r, n, t[3],
                14, -187363961), n = xt(n, s, i, r, t[8], 20, 1163531501), r = xt(r, n, s, i, t[13], 5, -1444681467),
            i = xt(i, r, n, s, t[2], 9, -51403784), s = xt(s, i, r, n, t[7], 14, 1735328473), r = jt(r, n = xt(n, s,
                i, r, t[12], 20, -1926607734), s, i, t[5], 4, -378558), i = jt(i, r, n, s, t[8], 11, -2022574463),
            s = jt(s, i, r, n, t[11], 16, 1839030562), n = jt(n, s, i, r, t[14], 23, -35309556), r = jt(r, n, s, i,
                t[1], 4, -1530992060), i = jt(i, r, n, s, t[4], 11, 1272893353), s = jt(s, i, r, n, t[7], 16, -
                155497632), n = jt(n, s, i, r, t[10], 23, -1094730640), r = jt(r, n, s, i, t[13], 4, 681279174), i =
            jt(i, r, n, s, t[0], 11, -358537222), s = jt(s, i, r, n, t[3], 16, -722521979), n = jt(n, s, i, r, t[6],
                23, 76029189), r = jt(r, n, s, i, t[9], 4, -640364487), i = jt(i, r, n, s, t[12], 11, -421815835),
            s = jt(s, i, r, n, t[15], 16, 530742520), r = Pt(r, n = jt(n, s, i, r, t[2], 23, -995338651), s, i, t[0],
                6, -198630844), i = Pt(i, r, n, s, t[7], 10, 1126891415), s = Pt(s, i, r, n, t[14], 15, -1416354905),
            n = Pt(n, s, i, r, t[5], 21, -57434055), r = Pt(r, n, s, i, t[12], 6, 1700485571), i = Pt(i, r, n, s, t[
                3], 10, -1894986606), s = Pt(s, i, r, n, t[10], 15, -1051523), n = Pt(n, s, i, r, t[1], 21, -
                2054922799), r = Pt(r, n, s, i, t[8], 6, 1873313359), i = Pt(i, r, n, s, t[15], 10, -30611744), s =
            Pt(s, i, r, n, t[6], 15, -1560198380), n = Pt(n, s, i, r, t[13], 21, 1309151649), r = Pt(r, n, s, i, t[
                4], 6, -145523070), i = Pt(i, r, n, s, t[11], 10, -1120210379), s = Pt(s, i, r, n, t[2], 15,
                718787259), n = Pt(n, s, i, r, t[9], 21, -343485551), e[0] = It(r, e[0]), e[1] = It(n, e[1]), e[2] =
            It(s, e[2]), e[3] = It(i, e[3])
    }

    function Ot(e, t, r, n, s, i) {
        return t = It(It(t, e), It(n, i)), It(t << s | t >>> 32 - s, r)
    }

    function St(e, t, r, n, s, i, o) {
        return Ot(t & r | ~t & n, e, t, s, i, o)
    }

    function xt(e, t, r, n, s, i, o) {
        return Ot(t & n | r & ~n, e, t, s, i, o)
    }

    function jt(e, t, r, n, s, i, o) {
        return Ot(t ^ r ^ n, e, t, s, i, o)
    }

    function Pt(e, t, r, n, s, i, o) {
        return Ot(r ^ (t | ~n), e, t, s, i, o)
    }

    function At(e) {
        for (var t = [], r = 0; r < 64; r += 4) t[r >> 2] = e.charCodeAt(r) + (e.charCodeAt(r + 1) << 8) + (e.charCodeAt(
            r + 2) << 16) + (e.charCodeAt(r + 3) << 24);
        return t
    }
    var Rt = "0123456789abcdef".split("");

    function Ut(e) {
        for (var t = "", r = 0; r < 4; r++) t += Rt[e >> 8 * r + 4 & 15] + Rt[e >> 8 * r & 15];
        return t
    }
    var Ct = function (e) {
        return function (e) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = Ut(e[r]);
            return t.join("")
        }(function (e) {
            var t, r = e.length,
                n = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; t <= e.length; t += 64) Et(n, At(e.substring(t - 64, t)));
            e = e.substring(t - 64);
            var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < e.length; t++) s[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
            if (s[t >> 2] |= 128 << (t % 4 << 3), t > 55)
                for (Et(n, s), t = 0; t < 16; t++) s[t] = 0;
            return s[14] = 8 * r, Et(n, s), n
        }(e))
    };

    function It(e, t) {
        return e + t & 4294967295
    }
    var Nt = Object.defineProperty({
            md5: Ct
        }, "__esModule", {
            value: !0
        }),
        Dt = te && te.__spreadArrays || function () {
            for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
            var n = Array(e),
                s = 0;
            for (t = 0; t < r; t++)
                for (var i = arguments[t], o = 0, a = i.length; o < a; o++, s++) n[s] = i[o];
            return n
        };

    function Bt(e) {
        var t = parseInt(e, 16);
        return (t >> 16 & 255) + "," + (t >> 8 & 255) + "," + (255 & t)
    }

    function Lt(e) {
        return (16777215 ^ Number("0x1" + e)).toString(16).substr(1).toUpperCase()
    }
    var Mt = Lt;

    function Ft(e, t, r) {
        var n = 300 - e;
        return "m 150 " + (100 + t + 200 * r) + " Q " + n + " " + e + " " + (200 - t - 200 * r) + " 150 Q " + n +
            " " + n + " 150 " + (200 - t - 200 * r) + " Q " + e + " " + n + " " + (100 + t + 200 * r) + " 150 Q " +
            e + " " + e + " 150 " + (100 + t + 200 * r) + " z"
    }
    var Ht = Ft;
    var Jt = function (e) {
            var t = Nt.md5(e).split("").filter((function (e) {
                    return "-" !== e
                })),
                r = t.splice(0, 6).join(""),
                n = t.splice(t.length - 6, t.length).join(""),
                s = Dt(Array(10)).map((function () {
                    return parseInt(t.splice(0, 2).join(""), 16)
                }));
            return function (e) {
                return '<svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"><rect id="bg" width="300" height="300" fill="rgb(' +
                    Bt(e.background) + ')" /><path d="' + e.paths[0] + '" fill="rgb(' + Bt(e.colors[0]) +
                    ')" /><path d="' + e.paths[1] + '" fill="rgb(' + Bt(e.colors[1]) + ')" /><path d="' + e.paths[
                        2] + '" fill="rgb(' + Bt(e.colors[2]) + ')" /></svg>'
            }({
                paths: [Ft(s[0], s[1], 2), Ft(s[2], s[3], 1), Ft(s[4], s[5], 0)],
                colors: [n, Lt(n), Lt(r)],
                background: r
            })
        },
        Gt = Object.defineProperty({
            invertHex: Mt,
            generatePath: Ht,
            generateFromString: Jt
        }, "__esModule", {
            value: !0
        }).generateFromString;

    function qt(e, t, r) {
        const n = e.slice();
        return n[4] = t[r], n
    }

    function Kt(e) {
        let t;
        return {
            c() {
                t = p("div"), t.innerHTML =
                    '<div class="animate-pulse flex space-x-4"><div class="rounded-full bg-gray-400 h-10 w-10"></div> \n            <div class="flex-1 space-y-4"><div class="h-2 w-20 bg-gray-400 rounded"></div> \n              <div class="space-y-4"><div class="grid grid-cols-3 gap-4"><div class="h-2 bg-gray-400 rounded col-span-1"></div> \n                  <div class="h-2 bg-gray-400 rounded col-span-2"></div></div> \n                <div class="h-2 bg-gray-400 rounded"></div></div></div></div>',
                    y(t, "class", "w-full")
            },
            m(e, r) {
                d(e, t, r)
            },
            d(e) {
                e && f(t)
            }
        }
    }

    function zt(e) {
        let t, r, n, s, i, o, a, h, u, v, _, w, k, T, $, E = e[4].name + "",
            O = Vt(e[4].created_at, "en") + "",
            S = e[4].comment + "";
        return {
            c() {
                t = p("div"), r = p("div"), n = p("img"), i = g(), o = p("div"), a = p("strong"), h = m(E), u = g(),
                    v = p("span"), _ = m(O), w = g(), k = p("p"), T = m(S), $ = g(), y(n, "alt", "avatar"), y(n,
                        "class", "mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"), c(n.src, s =
                        `data:image/svg+xml;utf8,${Gt(e[4].email||e[4].name)}`) || y(n, "src", s), y(r, "class",
                        "flex-shrink-0 mr-3"), y(v, "class", "text-xs text-gray-400"), y(k, "class", "text-sm"), y(
                        o, "class",
                        "w-full bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"),
                    y(t, "class", "flex")
            },
            m(e, s) {
                d(e, t, s), l(t, r), l(r, n), l(t, i), l(t, o), l(o, a), l(a, h), l(o, u), l(o, v), l(v, _), l(o, w),
                    l(o, k), l(k, T), l(t, $)
            },
            p(e, t) {
                8 & t && !c(n.src, s = `data:image/svg+xml;utf8,${Gt(e[4].email||e[4].name)}`) && y(n, "src", s), 8 &
                    t && E !== (E = e[4].name + "") && b(h, E), 8 & t && O !== (O = Vt(e[4].created_at, "en") + "") &&
                    b(_, O), 8 & t && S !== (S = e[4].comment + "") && b(T, S)
            },
            d(e) {
                e && f(t)
            }
        }
    }

    function Wt(t) {
        let r, n, i, o, a, h, c, u, m, b, w, k, T, $, E, O, S, x, j, P, A, R = t[0] && Kt(),
            U = t[3],
            C = [];
        for (let e = 0; e < U.length; e += 1) C[e] = zt(qt(t, U, e));
        return {
            c() {
                r = p("div"), n = p("div"), i = p("div"), o = p("input"), a = g(), h = p("div"), c = p("input"), u =
                    g(), m = p("div"), b = p("textarea"), w = g(), k = p("div"), T = p("button"), T.innerHTML =
                    '<p class="text-gray-400 h-5">Submit</p>', $ = g(), E = p("p"), E.textContent =
                    "*Optional, your email or Telegram id.", O = g(), S = p("div"), x = p("div"), R && R.c(), j = g();
                for (let e = 0; e < C.length; e += 1) C[e].c();
                y(o, "name", "name"), y(o, "id", "name"), y(o, "type", "text"), o.required = !0, y(o, "placeholder",
                    "Your Name"), y(o, "class",
                    "appearance-none block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                ), y(c, "name", "email"), y(c, "id", "mail"), y(c, "type", "text"), c.required = !0, y(c,
                    "placeholder", "Your Email (Optional)*"), y(c, "class",
                    "appearance-none block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                ), y(b, "name", "comment"), y(b, "id", "comment"), y(b, "type", "text"), b.required = !0, y(b,
                    "placeholder", "Comment content"), y(b, "class",
                    "h-44 appearance-none block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                ), y(m, "class", "sm:col-span-2"), y(T, "class",
                    "inline-block bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                ), y(E, "class", "mb-2 text-gray-400 text-xs"), y(k, "class",
                    "sm:col-span-2 flex justify-between items-center"), y(n, "class",
                    "max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"), y(x, "class", "mt-10 space-y-4"), y(S,
                    "class", "mx-auto max-w-screen-md")
            },
            m(e, s) {
                d(e, r, s), l(r, n), l(n, i), l(i, o), _(o, t[1]), l(n, a), l(n, h), l(h, c), _(c, t[2]), l(n, u),
                    l(n, m), l(m, b), _(b, t[4]), l(n, w), l(n, k), l(k, T), l(k, $), l(k, E), l(r, O), l(r, S), l(
                        S, x), R && R.m(x, null), l(x, j);
                for (let e = 0; e < C.length; e += 1) C[e].m(x, null);
                P || (A = [v(o, "input", t[11]), v(c, "input", t[12]), v(b, "input", t[13]), v(T, "click", t[14])],
                    P = !0)
            },
            p(e, [t]) {
                if (2 & t && o.value !== e[1] && _(o, e[1]), 4 & t && c.value !== e[2] && _(c, e[2]), 16 & t && _(b,
                        e[4]), e[0] ? R || (R = Kt(), R.c(), R.m(x, j)) : R && (R.d(1), R = null), 8 & t) {
                    let r;
                    for (U = e[3], r = 0; r < U.length; r += 1) {
                        const n = qt(e, U, r);
                        C[r] ? C[r].p(n, t) : (C[r] = zt(n), C[r].c(), C[r].m(x, null))
                    }
                    for (; r < C.length; r += 1) C[r].d(1);
                    C.length = U.length
                }
            },
            i: e,
            o: e,
            d(e) {
                e && f(r), R && R.d(),
                    function (e, t) {
                        for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
                    }(C, e), P = !1, s(A)
            }
        }
    }

    function Vt(e, t) {
        const r = new Date(e).toLocaleDateString(t, {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
        return "zh" === t ? r.replace("年", " 年 ").replace("月", " 月 ").replace("日", " 日") : r
    }

    function Yt(e, t, r) {
        let n;
        u(e, $t, (e => r(3, n = e)));
        let {
            hostURL: s
        } = t, {
            postPath: i
        } = t, {
            supabaseUrl: o
        } = t, {
            anonKey: a
        } = t;
        const h = ((e, t, r) => new kt(e, t, r))(o, a);
        let c, l, d, f = !0;
        const p = async () => {
            const {
                data: e,
                error: t
            } = await h.from("comments").select().order("created_at", {
                ascending: !1
            }).filter("postURL", "in", `(${i})`).filter("show", "is", !0);
            $t.set(e), e && r(0, f = !1), t && console.log(t)
        }, m = async () => {
            if (c && d) {
                const {
                    data: e,
                    error: t
                } = await h.from("comments").insert({
                    postURL: i,
                    name: c,
                    email: l,
                    comment: d,
                    show: !0
                });
                await async function (e, t, r, n) {
                    fetch("/api/sendtotg", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: e,
                            email: t,
                            comment: r,
                            url: s + n
                        })
                    })
                }(c, l, d, i), e && (r(1, c = ""), r(2, l = ""), r(4, d = ""), p()), t && console.log(
                    t)
            } else alert("Please fill out all fields")
        };
        p();
        return e.$$set = e => {
            "hostURL" in e && r(6, s = e.hostURL), "postPath" in e && r(7, i = e.postPath), "supabaseUrl" in e &&
                r(8, o = e.supabaseUrl), "anonKey" in e && r(9, a = e.anonKey)
        }, [f, c, l, n, d, m, s, i, o, a, h, function () {
            c = this.value, r(1, c)
        }, function () {
            l = this.value, r(2, l)
        }, function () {
            d = this.value, r(4, d)
        }, () => {
            m()
        }]
    }
    class Xt extends F {
        constructor(e) {
            super(), M(this, e, Yt, Wt, o, {
                hostURL: 6,
                postPath: 7,
                supabaseUrl: 8,
                anonKey: 9,
                supabase: 10
            })
        }
        get supabase() {
            return this.$$.ctx[10]
        }
    }

    function Qt(t) {
        let r;
        return {
            c() {
                r = p("h1"), r.textContent = "data-url is wrong", y(r, "class", "text-6xl text-red-500 p-5")
            },
            m(e, t) {
                d(e, r, t)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && f(r)
            }
        }
    }

    function Zt(e) {
        let r, n;
        const s = [e[2]];
        let i = {};
        for (let e = 0; e < s.length; e += 1) i = t(i, s[e]);
        return r = new Xt({
            props: i
        }), {
            c() {
                var e;
                (e = r.$$.fragment) && e.c()
            },
            m(e, t) {
                D(r, e, t), n = !0
            },
            p(e, t) {
                const n = 4 & t ? function (e, t) {
                    const r = {},
                        n = {},
                        s = {
                            $$scope: 1
                        };
                    let i = e.length;
                    for (; i--;) {
                        const o = e[i],
                            a = t[i];
                        if (a) {
                            for (const e in o) e in a || (n[e] = 1);
                            for (const e in a) s[e] || (r[e] = a[e], s[e] = 1);
                            e[i] = a
                        } else
                            for (const e in o) s[e] = 1
                    }
                    for (const e in n) e in r || (r[e] = void 0);
                    return r
                }(s, [(i = e[2], "object" == typeof i && null !== i ? i : {})]) : {};
                var i;
                r.$set(n)
            },
            i(e) {
                n || (I(r.$$.fragment, e), n = !0)
            },
            o(e) {
                N(r.$$.fragment, e), n = !1
            },
            d(e) {
                B(r, e)
            }
        }
    }

    function er(e) {
        let t, r, n, i;
        const o = [Zt, Qt],
            a = [];

        function h(e, t) {
            return e[1] === e[0] ? 0 : 1
        }
        return t = h(e), r = a[t] = o[t](e), {
            c() {
                r.c(), n = m("")
            },
            m(e, r) {
                a[t].m(e, r), d(e, n, r), i = !0
            },
            p(e, [i]) {
                let c = t;
                t = h(e), t === c ? a[t].p(e, i) : (C = {
                    r: 0,
                    c: [],
                    p: C
                }, N(a[c], 1, 1, (() => {
                    a[c] = null
                })), C.r || s(C.c), C = C.p, r = a[t], r ? r.p(e, i) : (r = a[t] = o[t](e), r.c()), I(r,
                    1), r.m(n.parentNode, n))
            },
            i(e) {
                i || (I(r), i = !0)
            },
            o(e) {
                N(r), i = !1
            },
            d(e) {
                a[t].d(e), e && f(n)
            }
        }
    }

    function tr(e, t, r) {
        const n = window.location.pathname,
            s = window.location.host;
        let {
            appUrl: i
        } = t, {
            supabaseUrl: o
        } = t, {
            anonKey: a
        } = t;
        const h = {
            hostURL: s,
            postPath: n,
            supabaseUrl: o,
            anonKey: a
        };
        return e.$$set = e => {
            "appUrl" in e && r(0, i = e.appUrl), "supabaseUrl" in e && r(3, o = e.supabaseUrl), "anonKey" in e &&
                r(4, a = e.anonKey)
        }, [i, s, h, o, a]
    }
    let rr = document.getElementById("comments"),
        nr = rr.getAttribute("data-url") || "localhost:8080",
        sr = rr.getAttribute("supabase-url"),
        ir = rr.getAttribute("anon-key");
    return new class extends F {
        constructor(e) {
            super(), M(this, e, tr, er, o, {
                appUrl: 0,
                supabaseUrl: 3,
                anonKey: 4
            })
        }
    }({
        target: rr,
        props: {
            appUrl: nr,
            supabaseUrl: sr,
            anonKey: ir
        }
    })
}();
//# sourceMappingURL=comments.js.map