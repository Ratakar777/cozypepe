var DA = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var uT = DA((hT, Ja) => {
  function OA(e, t) {
    for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != "string" && !Array.isArray(n)) {
        for (const i in n)
          if (i !== "default" && !(i in e)) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            o &&
              Object.defineProperty(
                e,
                i,
                o.get ? o : { enumerable: !0, get: () => n[i] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      n(i);
    new MutationObserver((i) => {
      for (const o of i)
        if (o.type === "childList")
          for (const s of o.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function r(i) {
      const o = {};
      return (
        i.integrity && (o.integrity = i.integrity),
        i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
        o
      );
    }
    function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const o = r(i);
      fetch(i.href, o);
    }
  })();
  function Ms(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function TA(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var r = function n() {
        return this instanceof n
          ? Reflect.construct(t, arguments, this.constructor)
          : t.apply(this, arguments);
      };
      r.prototype = t.prototype;
    } else r = {};
    return (
      Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.keys(e).forEach(function (n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(
          r,
          n,
          i.get
            ? i
            : {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              }
        );
      }),
      r
    );
  }
  var Fg = {},
    Pl = {};
  Pl.byteLength = zA;
  Pl.toByteArray = QA;
  Pl.fromByteArray = FA;
  var Tr = [],
    Xt = [],
    MA = typeof Uint8Array < "u" ? Uint8Array : Array,
    bu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var Bi = 0, PA = bu.length; Bi < PA; ++Bi)
    (Tr[Bi] = bu[Bi]), (Xt[bu.charCodeAt(Bi)] = Bi);
  Xt[45] = 62;
  Xt[95] = 63;
  function Lg(e) {
    var t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = e.indexOf("=");
    r === -1 && (r = t);
    var n = r === t ? 0 : 4 - (r % 4);
    return [r, n];
  }
  function zA(e) {
    var t = Lg(e),
      r = t[0],
      n = t[1];
    return ((r + n) * 3) / 4 - n;
  }
  function NA(e, t, r) {
    return ((t + r) * 3) / 4 - r;
  }
  function QA(e) {
    var t,
      r = Lg(e),
      n = r[0],
      i = r[1],
      o = new MA(NA(e, n, i)),
      s = 0,
      a = i > 0 ? n - 4 : n,
      l;
    for (l = 0; l < a; l += 4)
      (t =
        (Xt[e.charCodeAt(l)] << 18) |
        (Xt[e.charCodeAt(l + 1)] << 12) |
        (Xt[e.charCodeAt(l + 2)] << 6) |
        Xt[e.charCodeAt(l + 3)]),
        (o[s++] = (t >> 16) & 255),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255);
    return (
      i === 2 &&
        ((t = (Xt[e.charCodeAt(l)] << 2) | (Xt[e.charCodeAt(l + 1)] >> 4)),
        (o[s++] = t & 255)),
      i === 1 &&
        ((t =
          (Xt[e.charCodeAt(l)] << 10) |
          (Xt[e.charCodeAt(l + 1)] << 4) |
          (Xt[e.charCodeAt(l + 2)] >> 2)),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255)),
      o
    );
  }
  function _A(e) {
    return (
      Tr[(e >> 18) & 63] + Tr[(e >> 12) & 63] + Tr[(e >> 6) & 63] + Tr[e & 63]
    );
  }
  function jA(e, t, r) {
    for (var n, i = [], o = t; o < r; o += 3)
      (n =
        ((e[o] << 16) & 16711680) +
        ((e[o + 1] << 8) & 65280) +
        (e[o + 2] & 255)),
        i.push(_A(n));
    return i.join("");
  }
  function FA(e) {
    for (
      var t, r = e.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n;
      s < a;
      s += o
    )
      i.push(jA(e, s, s + o > a ? a : s + o));
    return (
      n === 1
        ? ((t = e[r - 1]), i.push(Tr[t >> 2] + Tr[(t << 4) & 63] + "=="))
        : n === 2 &&
          ((t = (e[r - 2] << 8) + e[r - 1]),
          i.push(Tr[t >> 10] + Tr[(t >> 4) & 63] + Tr[(t << 2) & 63] + "=")),
      i.join("")
    );
  }
  var Fd = {};
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ Fd.read =
    function (e, t, r, n, i) {
      var o,
        s,
        a = i * 8 - n - 1,
        l = (1 << a) - 1,
        d = l >> 1,
        p = -7,
        h = r ? i - 1 : 0,
        y = r ? -1 : 1,
        x = e[t + h];
      for (
        h += y, o = x & ((1 << -p) - 1), x >>= -p, p += a;
        p > 0;
        o = o * 256 + e[t + h], h += y, p -= 8
      );
      for (
        s = o & ((1 << -p) - 1), o >>= -p, p += n;
        p > 0;
        s = s * 256 + e[t + h], h += y, p -= 8
      );
      if (o === 0) o = 1 - d;
      else {
        if (o === l) return s ? NaN : (x ? -1 : 1) * (1 / 0);
        (s = s + Math.pow(2, n)), (o = o - d);
      }
      return (x ? -1 : 1) * s * Math.pow(2, o - n);
    };
  Fd.write = function (e, t, r, n, i, o) {
    var s,
      a,
      l,
      d = o * 8 - i - 1,
      p = (1 << d) - 1,
      h = p >> 1,
      y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      x = n ? 0 : o - 1,
      S = n ? 1 : -1,
      E = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((a = isNaN(t) ? 1 : 0), (s = p))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
            s + h >= 1 ? (t += y / l) : (t += y * Math.pow(2, 1 - h)),
            t * l >= 2 && (s++, (l /= 2)),
            s + h >= p
              ? ((a = 0), (s = p))
              : s + h >= 1
              ? ((a = (t * l - 1) * Math.pow(2, i)), (s = s + h))
              : ((a = t * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      e[r + x] = a & 255, x += S, a /= 256, i -= 8
    );
    for (
      s = (s << i) | a, d += i;
      d > 0;
      e[r + x] = s & 255, x += S, s /= 256, d -= 8
    );
    e[r + x - S] |= E * 128;
  };
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */ (function (e) {
    const t = Pl,
      r = Fd,
      n =
        typeof Symbol == "function" && typeof Symbol.for == "function"
          ? Symbol.for("nodejs.util.inspect.custom")
          : null;
    (e.Buffer = a), (e.SlowBuffer = m), (e.INSPECT_MAX_BYTES = 50);
    const i = 2147483647;
    (e.kMaxLength = i),
      (a.TYPED_ARRAY_SUPPORT = o()),
      !a.TYPED_ARRAY_SUPPORT &&
        typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        );
    function o() {
      try {
        const g = new Uint8Array(1),
          u = {
            foo: function () {
              return 42;
            },
          };
        return (
          Object.setPrototypeOf(u, Uint8Array.prototype),
          Object.setPrototypeOf(g, u),
          g.foo() === 42
        );
      } catch {
        return !1;
      }
    }
    Object.defineProperty(a.prototype, "parent", {
      enumerable: !0,
      get: function () {
        if (a.isBuffer(this)) return this.buffer;
      },
    }),
      Object.defineProperty(a.prototype, "offset", {
        enumerable: !0,
        get: function () {
          if (a.isBuffer(this)) return this.byteOffset;
        },
      });
    function s(g) {
      if (g > i)
        throw new RangeError(
          'The value "' + g + '" is invalid for option "size"'
        );
      const u = new Uint8Array(g);
      return Object.setPrototypeOf(u, a.prototype), u;
    }
    function a(g, u, c) {
      if (typeof g == "number") {
        if (typeof u == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return h(g);
      }
      return l(g, u, c);
    }
    a.poolSize = 8192;
    function l(g, u, c) {
      if (typeof g == "string") return y(g, u);
      if (ArrayBuffer.isView(g)) return S(g);
      if (g == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof g
        );
      if (
        st(g, ArrayBuffer) ||
        (g && st(g.buffer, ArrayBuffer)) ||
        (typeof SharedArrayBuffer < "u" &&
          (st(g, SharedArrayBuffer) || (g && st(g.buffer, SharedArrayBuffer))))
      )
        return E(g, u, c);
      if (typeof g == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const w = g.valueOf && g.valueOf();
      if (w != null && w !== g) return a.from(w, u, c);
      const C = D(g);
      if (C) return C;
      if (
        typeof Symbol < "u" &&
        Symbol.toPrimitive != null &&
        typeof g[Symbol.toPrimitive] == "function"
      )
        return a.from(g[Symbol.toPrimitive]("string"), u, c);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof g
      );
    }
    (a.from = function (g, u, c) {
      return l(g, u, c);
    }),
      Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(a, Uint8Array);
    function d(g) {
      if (typeof g != "number")
        throw new TypeError('"size" argument must be of type number');
      if (g < 0)
        throw new RangeError(
          'The value "' + g + '" is invalid for option "size"'
        );
    }
    function p(g, u, c) {
      return (
        d(g),
        g <= 0
          ? s(g)
          : u !== void 0
          ? typeof c == "string"
            ? s(g).fill(u, c)
            : s(g).fill(u)
          : s(g)
      );
    }
    a.alloc = function (g, u, c) {
      return p(g, u, c);
    };
    function h(g) {
      return d(g), s(g < 0 ? 0 : A(g) | 0);
    }
    (a.allocUnsafe = function (g) {
      return h(g);
    }),
      (a.allocUnsafeSlow = function (g) {
        return h(g);
      });
    function y(g, u) {
      if (
        ((typeof u != "string" || u === "") && (u = "utf8"), !a.isEncoding(u))
      )
        throw new TypeError("Unknown encoding: " + u);
      const c = v(g, u) | 0;
      let w = s(c);
      const C = w.write(g, u);
      return C !== c && (w = w.slice(0, C)), w;
    }
    function x(g) {
      const u = g.length < 0 ? 0 : A(g.length) | 0,
        c = s(u);
      for (let w = 0; w < u; w += 1) c[w] = g[w] & 255;
      return c;
    }
    function S(g) {
      if (st(g, Uint8Array)) {
        const u = new Uint8Array(g);
        return E(u.buffer, u.byteOffset, u.byteLength);
      }
      return x(g);
    }
    function E(g, u, c) {
      if (u < 0 || g.byteLength < u)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (g.byteLength < u + (c || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let w;
      return (
        u === void 0 && c === void 0
          ? (w = new Uint8Array(g))
          : c === void 0
          ? (w = new Uint8Array(g, u))
          : (w = new Uint8Array(g, u, c)),
        Object.setPrototypeOf(w, a.prototype),
        w
      );
    }
    function D(g) {
      if (a.isBuffer(g)) {
        const u = A(g.length) | 0,
          c = s(u);
        return c.length === 0 || g.copy(c, 0, 0, u), c;
      }
      if (g.length !== void 0)
        return typeof g.length != "number" || Ii(g.length) ? s(0) : x(g);
      if (g.type === "Buffer" && Array.isArray(g.data)) return x(g.data);
    }
    function A(g) {
      if (g >= i)
        throw new RangeError(
          "Attempt to allocate Buffer larger than maximum size: 0x" +
            i.toString(16) +
            " bytes"
        );
      return g | 0;
    }
    function m(g) {
      return +g != g && (g = 0), a.alloc(+g);
    }
    (a.isBuffer = function (u) {
      return u != null && u._isBuffer === !0 && u !== a.prototype;
    }),
      (a.compare = function (u, c) {
        if (
          (st(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
          st(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)),
          !a.isBuffer(u) || !a.isBuffer(c))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          );
        if (u === c) return 0;
        let w = u.length,
          C = c.length;
        for (let T = 0, Q = Math.min(w, C); T < Q; ++T)
          if (u[T] !== c[T]) {
            (w = u[T]), (C = c[T]);
            break;
          }
        return w < C ? -1 : C < w ? 1 : 0;
      }),
      (a.isEncoding = function (u) {
        switch (String(u).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1;
        }
      }),
      (a.concat = function (u, c) {
        if (!Array.isArray(u))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (u.length === 0) return a.alloc(0);
        let w;
        if (c === void 0)
          for (c = 0, w = 0; w < u.length; ++w) c += u[w].length;
        const C = a.allocUnsafe(c);
        let T = 0;
        for (w = 0; w < u.length; ++w) {
          let Q = u[w];
          if (st(Q, Uint8Array))
            T + Q.length > C.length
              ? (a.isBuffer(Q) || (Q = a.from(Q)), Q.copy(C, T))
              : Uint8Array.prototype.set.call(C, Q, T);
          else if (a.isBuffer(Q)) Q.copy(C, T);
          else
            throw new TypeError('"list" argument must be an Array of Buffers');
          T += Q.length;
        }
        return C;
      });
    function v(g, u) {
      if (a.isBuffer(g)) return g.length;
      if (ArrayBuffer.isView(g) || st(g, ArrayBuffer)) return g.byteLength;
      if (typeof g != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof g
        );
      const c = g.length,
        w = arguments.length > 2 && arguments[2] === !0;
      if (!w && c === 0) return 0;
      let C = !1;
      for (;;)
        switch (u) {
          case "ascii":
          case "latin1":
          case "binary":
            return c;
          case "utf8":
          case "utf-8":
            return ot(g).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return c * 2;
          case "hex":
            return c >>> 1;
          case "base64":
            return Wr(g).length;
          default:
            if (C) return w ? -1 : ot(g).length;
            (u = ("" + u).toLowerCase()), (C = !0);
        }
    }
    a.byteLength = v;
    function k(g, u, c) {
      let w = !1;
      if (
        ((u === void 0 || u < 0) && (u = 0),
        u > this.length ||
          ((c === void 0 || c > this.length) && (c = this.length), c <= 0) ||
          ((c >>>= 0), (u >>>= 0), c <= u))
      )
        return "";
      for (g || (g = "utf8"); ; )
        switch (g) {
          case "hex":
            return H(this, u, c);
          case "utf8":
          case "utf-8":
            return ve(this, u, c);
          case "ascii":
            return Ae(this, u, c);
          case "latin1":
          case "binary":
            return U(this, u, c);
          case "base64":
            return de(this, u, c);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return X(this, u, c);
          default:
            if (w) throw new TypeError("Unknown encoding: " + g);
            (g = (g + "").toLowerCase()), (w = !0);
        }
    }
    a.prototype._isBuffer = !0;
    function I(g, u, c) {
      const w = g[u];
      (g[u] = g[c]), (g[c] = w);
    }
    (a.prototype.swap16 = function () {
      const u = this.length;
      if (u % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let c = 0; c < u; c += 2) I(this, c, c + 1);
      return this;
    }),
      (a.prototype.swap32 = function () {
        const u = this.length;
        if (u % 4 !== 0)
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let c = 0; c < u; c += 4) I(this, c, c + 3), I(this, c + 1, c + 2);
        return this;
      }),
      (a.prototype.swap64 = function () {
        const u = this.length;
        if (u % 8 !== 0)
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let c = 0; c < u; c += 8)
          I(this, c, c + 7),
            I(this, c + 1, c + 6),
            I(this, c + 2, c + 5),
            I(this, c + 3, c + 4);
        return this;
      }),
      (a.prototype.toString = function () {
        const u = this.length;
        return u === 0
          ? ""
          : arguments.length === 0
          ? ve(this, 0, u)
          : k.apply(this, arguments);
      }),
      (a.prototype.toLocaleString = a.prototype.toString),
      (a.prototype.equals = function (u) {
        if (!a.isBuffer(u)) throw new TypeError("Argument must be a Buffer");
        return this === u ? !0 : a.compare(this, u) === 0;
      }),
      (a.prototype.inspect = function () {
        let u = "";
        const c = e.INSPECT_MAX_BYTES;
        return (
          (u = this.toString("hex", 0, c)
            .replace(/(.{2})/g, "$1 ")
            .trim()),
          this.length > c && (u += " ... "),
          "<Buffer " + u + ">"
        );
      }),
      n && (a.prototype[n] = a.prototype.inspect),
      (a.prototype.compare = function (u, c, w, C, T) {
        if (
          (st(u, Uint8Array) && (u = a.from(u, u.offset, u.byteLength)),
          !a.isBuffer(u))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof u
          );
        if (
          (c === void 0 && (c = 0),
          w === void 0 && (w = u ? u.length : 0),
          C === void 0 && (C = 0),
          T === void 0 && (T = this.length),
          c < 0 || w > u.length || C < 0 || T > this.length)
        )
          throw new RangeError("out of range index");
        if (C >= T && c >= w) return 0;
        if (C >= T) return -1;
        if (c >= w) return 1;
        if (((c >>>= 0), (w >>>= 0), (C >>>= 0), (T >>>= 0), this === u))
          return 0;
        let Q = T - C,
          pe = w - c;
        const Ue = Math.min(Q, pe),
          Ne = this.slice(C, T),
          Ye = u.slice(c, w);
        for (let Ie = 0; Ie < Ue; ++Ie)
          if (Ne[Ie] !== Ye[Ie]) {
            (Q = Ne[Ie]), (pe = Ye[Ie]);
            break;
          }
        return Q < pe ? -1 : pe < Q ? 1 : 0;
      });
    function R(g, u, c, w, C) {
      if (g.length === 0) return -1;
      if (
        (typeof c == "string"
          ? ((w = c), (c = 0))
          : c > 2147483647
          ? (c = 2147483647)
          : c < -2147483648 && (c = -2147483648),
        (c = +c),
        Ii(c) && (c = C ? 0 : g.length - 1),
        c < 0 && (c = g.length + c),
        c >= g.length)
      ) {
        if (C) return -1;
        c = g.length - 1;
      } else if (c < 0)
        if (C) c = 0;
        else return -1;
      if ((typeof u == "string" && (u = a.from(u, w)), a.isBuffer(u)))
        return u.length === 0 ? -1 : M(g, u, c, w, C);
      if (typeof u == "number")
        return (
          (u = u & 255),
          typeof Uint8Array.prototype.indexOf == "function"
            ? C
              ? Uint8Array.prototype.indexOf.call(g, u, c)
              : Uint8Array.prototype.lastIndexOf.call(g, u, c)
            : M(g, [u], c, w, C)
        );
      throw new TypeError("val must be string, number or Buffer");
    }
    function M(g, u, c, w, C) {
      let T = 1,
        Q = g.length,
        pe = u.length;
      if (
        w !== void 0 &&
        ((w = String(w).toLowerCase()),
        w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")
      ) {
        if (g.length < 2 || u.length < 2) return -1;
        (T = 2), (Q /= 2), (pe /= 2), (c /= 2);
      }
      function Ue(Ye, Ie) {
        return T === 1 ? Ye[Ie] : Ye.readUInt16BE(Ie * T);
      }
      let Ne;
      if (C) {
        let Ye = -1;
        for (Ne = c; Ne < Q; Ne++)
          if (Ue(g, Ne) === Ue(u, Ye === -1 ? 0 : Ne - Ye)) {
            if ((Ye === -1 && (Ye = Ne), Ne - Ye + 1 === pe)) return Ye * T;
          } else Ye !== -1 && (Ne -= Ne - Ye), (Ye = -1);
      } else
        for (c + pe > Q && (c = Q - pe), Ne = c; Ne >= 0; Ne--) {
          let Ye = !0;
          for (let Ie = 0; Ie < pe; Ie++)
            if (Ue(g, Ne + Ie) !== Ue(u, Ie)) {
              Ye = !1;
              break;
            }
          if (Ye) return Ne;
        }
      return -1;
    }
    (a.prototype.includes = function (u, c, w) {
      return this.indexOf(u, c, w) !== -1;
    }),
      (a.prototype.indexOf = function (u, c, w) {
        return R(this, u, c, w, !0);
      }),
      (a.prototype.lastIndexOf = function (u, c, w) {
        return R(this, u, c, w, !1);
      });
    function F(g, u, c, w) {
      c = Number(c) || 0;
      const C = g.length - c;
      w ? ((w = Number(w)), w > C && (w = C)) : (w = C);
      const T = u.length;
      w > T / 2 && (w = T / 2);
      let Q;
      for (Q = 0; Q < w; ++Q) {
        const pe = parseInt(u.substr(Q * 2, 2), 16);
        if (Ii(pe)) return Q;
        g[c + Q] = pe;
      }
      return Q;
    }
    function re(g, u, c, w) {
      return ur(ot(u, g.length - c), g, c, w);
    }
    function G(g, u, c, w) {
      return ur(lr(u), g, c, w);
    }
    function oe(g, u, c, w) {
      return ur(Wr(u), g, c, w);
    }
    function ne(g, u, c, w) {
      return ur(zt(u, g.length - c), g, c, w);
    }
    (a.prototype.write = function (u, c, w, C) {
      if (c === void 0) (C = "utf8"), (w = this.length), (c = 0);
      else if (w === void 0 && typeof c == "string")
        (C = c), (w = this.length), (c = 0);
      else if (isFinite(c))
        (c = c >>> 0),
          isFinite(w)
            ? ((w = w >>> 0), C === void 0 && (C = "utf8"))
            : ((C = w), (w = void 0));
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const T = this.length - c;
      if (
        ((w === void 0 || w > T) && (w = T),
        (u.length > 0 && (w < 0 || c < 0)) || c > this.length)
      )
        throw new RangeError("Attempt to write outside buffer bounds");
      C || (C = "utf8");
      let Q = !1;
      for (;;)
        switch (C) {
          case "hex":
            return F(this, u, c, w);
          case "utf8":
          case "utf-8":
            return re(this, u, c, w);
          case "ascii":
          case "latin1":
          case "binary":
            return G(this, u, c, w);
          case "base64":
            return oe(this, u, c, w);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ne(this, u, c, w);
          default:
            if (Q) throw new TypeError("Unknown encoding: " + C);
            (C = ("" + C).toLowerCase()), (Q = !0);
        }
    }),
      (a.prototype.toJSON = function () {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0),
        };
      });
    function de(g, u, c) {
      return u === 0 && c === g.length
        ? t.fromByteArray(g)
        : t.fromByteArray(g.slice(u, c));
    }
    function ve(g, u, c) {
      c = Math.min(g.length, c);
      const w = [];
      let C = u;
      for (; C < c; ) {
        const T = g[C];
        let Q = null,
          pe = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
        if (C + pe <= c) {
          let Ue, Ne, Ye, Ie;
          switch (pe) {
            case 1:
              T < 128 && (Q = T);
              break;
            case 2:
              (Ue = g[C + 1]),
                (Ue & 192) === 128 &&
                  ((Ie = ((T & 31) << 6) | (Ue & 63)), Ie > 127 && (Q = Ie));
              break;
            case 3:
              (Ue = g[C + 1]),
                (Ne = g[C + 2]),
                (Ue & 192) === 128 &&
                  (Ne & 192) === 128 &&
                  ((Ie = ((T & 15) << 12) | ((Ue & 63) << 6) | (Ne & 63)),
                  Ie > 2047 && (Ie < 55296 || Ie > 57343) && (Q = Ie));
              break;
            case 4:
              (Ue = g[C + 1]),
                (Ne = g[C + 2]),
                (Ye = g[C + 3]),
                (Ue & 192) === 128 &&
                  (Ne & 192) === 128 &&
                  (Ye & 192) === 128 &&
                  ((Ie =
                    ((T & 15) << 18) |
                    ((Ue & 63) << 12) |
                    ((Ne & 63) << 6) |
                    (Ye & 63)),
                  Ie > 65535 && Ie < 1114112 && (Q = Ie));
          }
        }
        Q === null
          ? ((Q = 65533), (pe = 1))
          : Q > 65535 &&
            ((Q -= 65536),
            w.push(((Q >>> 10) & 1023) | 55296),
            (Q = 56320 | (Q & 1023))),
          w.push(Q),
          (C += pe);
      }
      return Re(w);
    }
    const Se = 4096;
    function Re(g) {
      const u = g.length;
      if (u <= Se) return String.fromCharCode.apply(String, g);
      let c = "",
        w = 0;
      for (; w < u; )
        c += String.fromCharCode.apply(String, g.slice(w, (w += Se)));
      return c;
    }
    function Ae(g, u, c) {
      let w = "";
      c = Math.min(g.length, c);
      for (let C = u; C < c; ++C) w += String.fromCharCode(g[C] & 127);
      return w;
    }
    function U(g, u, c) {
      let w = "";
      c = Math.min(g.length, c);
      for (let C = u; C < c; ++C) w += String.fromCharCode(g[C]);
      return w;
    }
    function H(g, u, c) {
      const w = g.length;
      (!u || u < 0) && (u = 0), (!c || c < 0 || c > w) && (c = w);
      let C = "";
      for (let T = u; T < c; ++T) C += Op[g[T]];
      return C;
    }
    function X(g, u, c) {
      const w = g.slice(u, c);
      let C = "";
      for (let T = 0; T < w.length - 1; T += 2)
        C += String.fromCharCode(w[T] + w[T + 1] * 256);
      return C;
    }
    a.prototype.slice = function (u, c) {
      const w = this.length;
      (u = ~~u),
        (c = c === void 0 ? w : ~~c),
        u < 0 ? ((u += w), u < 0 && (u = 0)) : u > w && (u = w),
        c < 0 ? ((c += w), c < 0 && (c = 0)) : c > w && (c = w),
        c < u && (c = u);
      const C = this.subarray(u, c);
      return Object.setPrototypeOf(C, a.prototype), C;
    };
    function ee(g, u, c) {
      if (g % 1 !== 0 || g < 0) throw new RangeError("offset is not uint");
      if (g + u > c)
        throw new RangeError("Trying to access beyond buffer length");
    }
    (a.prototype.readUintLE = a.prototype.readUIntLE =
      function (u, c, w) {
        (u = u >>> 0), (c = c >>> 0), w || ee(u, c, this.length);
        let C = this[u],
          T = 1,
          Q = 0;
        for (; ++Q < c && (T *= 256); ) C += this[u + Q] * T;
        return C;
      }),
      (a.prototype.readUintBE = a.prototype.readUIntBE =
        function (u, c, w) {
          (u = u >>> 0), (c = c >>> 0), w || ee(u, c, this.length);
          let C = this[u + --c],
            T = 1;
          for (; c > 0 && (T *= 256); ) C += this[u + --c] * T;
          return C;
        }),
      (a.prototype.readUint8 = a.prototype.readUInt8 =
        function (u, c) {
          return (u = u >>> 0), c || ee(u, 1, this.length), this[u];
        }),
      (a.prototype.readUint16LE = a.prototype.readUInt16LE =
        function (u, c) {
          return (
            (u = u >>> 0),
            c || ee(u, 2, this.length),
            this[u] | (this[u + 1] << 8)
          );
        }),
      (a.prototype.readUint16BE = a.prototype.readUInt16BE =
        function (u, c) {
          return (
            (u = u >>> 0),
            c || ee(u, 2, this.length),
            (this[u] << 8) | this[u + 1]
          );
        }),
      (a.prototype.readUint32LE = a.prototype.readUInt32LE =
        function (u, c) {
          return (
            (u = u >>> 0),
            c || ee(u, 4, this.length),
            (this[u] | (this[u + 1] << 8) | (this[u + 2] << 16)) +
              this[u + 3] * 16777216
          );
        }),
      (a.prototype.readUint32BE = a.prototype.readUInt32BE =
        function (u, c) {
          return (
            (u = u >>> 0),
            c || ee(u, 4, this.length),
            this[u] * 16777216 +
              ((this[u + 1] << 16) | (this[u + 2] << 8) | this[u + 3])
          );
        }),
      (a.prototype.readBigUInt64LE = mn(function (u) {
        (u = u >>> 0), fe(u, "offset");
        const c = this[u],
          w = this[u + 7];
        (c === void 0 || w === void 0) && ke(u, this.length - 8);
        const C =
            c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24,
          T =
            this[++u] + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + w * 2 ** 24;
        return BigInt(C) + (BigInt(T) << BigInt(32));
      })),
      (a.prototype.readBigUInt64BE = mn(function (u) {
        (u = u >>> 0), fe(u, "offset");
        const c = this[u],
          w = this[u + 7];
        (c === void 0 || w === void 0) && ke(u, this.length - 8);
        const C =
            c * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u],
          T =
            this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + w;
        return (BigInt(C) << BigInt(32)) + BigInt(T);
      })),
      (a.prototype.readIntLE = function (u, c, w) {
        (u = u >>> 0), (c = c >>> 0), w || ee(u, c, this.length);
        let C = this[u],
          T = 1,
          Q = 0;
        for (; ++Q < c && (T *= 256); ) C += this[u + Q] * T;
        return (T *= 128), C >= T && (C -= Math.pow(2, 8 * c)), C;
      }),
      (a.prototype.readIntBE = function (u, c, w) {
        (u = u >>> 0), (c = c >>> 0), w || ee(u, c, this.length);
        let C = c,
          T = 1,
          Q = this[u + --C];
        for (; C > 0 && (T *= 256); ) Q += this[u + --C] * T;
        return (T *= 128), Q >= T && (Q -= Math.pow(2, 8 * c)), Q;
      }),
      (a.prototype.readInt8 = function (u, c) {
        return (
          (u = u >>> 0),
          c || ee(u, 1, this.length),
          this[u] & 128 ? (255 - this[u] + 1) * -1 : this[u]
        );
      }),
      (a.prototype.readInt16LE = function (u, c) {
        (u = u >>> 0), c || ee(u, 2, this.length);
        const w = this[u] | (this[u + 1] << 8);
        return w & 32768 ? w | 4294901760 : w;
      }),
      (a.prototype.readInt16BE = function (u, c) {
        (u = u >>> 0), c || ee(u, 2, this.length);
        const w = this[u + 1] | (this[u] << 8);
        return w & 32768 ? w | 4294901760 : w;
      }),
      (a.prototype.readInt32LE = function (u, c) {
        return (
          (u = u >>> 0),
          c || ee(u, 4, this.length),
          this[u] |
            (this[u + 1] << 8) |
            (this[u + 2] << 16) |
            (this[u + 3] << 24)
        );
      }),
      (a.prototype.readInt32BE = function (u, c) {
        return (
          (u = u >>> 0),
          c || ee(u, 4, this.length),
          (this[u] << 24) |
            (this[u + 1] << 16) |
            (this[u + 2] << 8) |
            this[u + 3]
        );
      }),
      (a.prototype.readBigInt64LE = mn(function (u) {
        (u = u >>> 0), fe(u, "offset");
        const c = this[u],
          w = this[u + 7];
        (c === void 0 || w === void 0) && ke(u, this.length - 8);
        const C =
          this[u + 4] +
          this[u + 5] * 2 ** 8 +
          this[u + 6] * 2 ** 16 +
          (w << 24);
        return (
          (BigInt(C) << BigInt(32)) +
          BigInt(
            c + this[++u] * 2 ** 8 + this[++u] * 2 ** 16 + this[++u] * 2 ** 24
          )
        );
      })),
      (a.prototype.readBigInt64BE = mn(function (u) {
        (u = u >>> 0), fe(u, "offset");
        const c = this[u],
          w = this[u + 7];
        (c === void 0 || w === void 0) && ke(u, this.length - 8);
        const C =
          (c << 24) + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + this[++u];
        return (
          (BigInt(C) << BigInt(32)) +
          BigInt(
            this[++u] * 2 ** 24 + this[++u] * 2 ** 16 + this[++u] * 2 ** 8 + w
          )
        );
      })),
      (a.prototype.readFloatLE = function (u, c) {
        return (
          (u = u >>> 0), c || ee(u, 4, this.length), r.read(this, u, !0, 23, 4)
        );
      }),
      (a.prototype.readFloatBE = function (u, c) {
        return (
          (u = u >>> 0), c || ee(u, 4, this.length), r.read(this, u, !1, 23, 4)
        );
      }),
      (a.prototype.readDoubleLE = function (u, c) {
        return (
          (u = u >>> 0), c || ee(u, 8, this.length), r.read(this, u, !0, 52, 8)
        );
      }),
      (a.prototype.readDoubleBE = function (u, c) {
        return (
          (u = u >>> 0), c || ee(u, 8, this.length), r.read(this, u, !1, 52, 8)
        );
      });
    function b(g, u, c, w, C, T) {
      if (!a.isBuffer(g))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (u > C || u < T)
        throw new RangeError('"value" argument is out of bounds');
      if (c + w > g.length) throw new RangeError("Index out of range");
    }
    (a.prototype.writeUintLE = a.prototype.writeUIntLE =
      function (u, c, w, C) {
        if (((u = +u), (c = c >>> 0), (w = w >>> 0), !C)) {
          const pe = Math.pow(2, 8 * w) - 1;
          b(this, u, c, w, pe, 0);
        }
        let T = 1,
          Q = 0;
        for (this[c] = u & 255; ++Q < w && (T *= 256); )
          this[c + Q] = (u / T) & 255;
        return c + w;
      }),
      (a.prototype.writeUintBE = a.prototype.writeUIntBE =
        function (u, c, w, C) {
          if (((u = +u), (c = c >>> 0), (w = w >>> 0), !C)) {
            const pe = Math.pow(2, 8 * w) - 1;
            b(this, u, c, w, pe, 0);
          }
          let T = w - 1,
            Q = 1;
          for (this[c + T] = u & 255; --T >= 0 && (Q *= 256); )
            this[c + T] = (u / Q) & 255;
          return c + w;
        }),
      (a.prototype.writeUint8 = a.prototype.writeUInt8 =
        function (u, c, w) {
          return (
            (u = +u),
            (c = c >>> 0),
            w || b(this, u, c, 1, 255, 0),
            (this[c] = u & 255),
            c + 1
          );
        }),
      (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
        function (u, c, w) {
          return (
            (u = +u),
            (c = c >>> 0),
            w || b(this, u, c, 2, 65535, 0),
            (this[c] = u & 255),
            (this[c + 1] = u >>> 8),
            c + 2
          );
        }),
      (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
        function (u, c, w) {
          return (
            (u = +u),
            (c = c >>> 0),
            w || b(this, u, c, 2, 65535, 0),
            (this[c] = u >>> 8),
            (this[c + 1] = u & 255),
            c + 2
          );
        }),
      (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
        function (u, c, w) {
          return (
            (u = +u),
            (c = c >>> 0),
            w || b(this, u, c, 4, 4294967295, 0),
            (this[c + 3] = u >>> 24),
            (this[c + 2] = u >>> 16),
            (this[c + 1] = u >>> 8),
            (this[c] = u & 255),
            c + 4
          );
        }),
      (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
        function (u, c, w) {
          return (
            (u = +u),
            (c = c >>> 0),
            w || b(this, u, c, 4, 4294967295, 0),
            (this[c] = u >>> 24),
            (this[c + 1] = u >>> 16),
            (this[c + 2] = u >>> 8),
            (this[c + 3] = u & 255),
            c + 4
          );
        });
    function P(g, u, c, w, C) {
      ae(u, w, C, g, c, 7);
      let T = Number(u & BigInt(4294967295));
      (g[c++] = T),
        (T = T >> 8),
        (g[c++] = T),
        (T = T >> 8),
        (g[c++] = T),
        (T = T >> 8),
        (g[c++] = T);
      let Q = Number((u >> BigInt(32)) & BigInt(4294967295));
      return (
        (g[c++] = Q),
        (Q = Q >> 8),
        (g[c++] = Q),
        (Q = Q >> 8),
        (g[c++] = Q),
        (Q = Q >> 8),
        (g[c++] = Q),
        c
      );
    }
    function N(g, u, c, w, C) {
      ae(u, w, C, g, c, 7);
      let T = Number(u & BigInt(4294967295));
      (g[c + 7] = T),
        (T = T >> 8),
        (g[c + 6] = T),
        (T = T >> 8),
        (g[c + 5] = T),
        (T = T >> 8),
        (g[c + 4] = T);
      let Q = Number((u >> BigInt(32)) & BigInt(4294967295));
      return (
        (g[c + 3] = Q),
        (Q = Q >> 8),
        (g[c + 2] = Q),
        (Q = Q >> 8),
        (g[c + 1] = Q),
        (Q = Q >> 8),
        (g[c] = Q),
        c + 8
      );
    }
    (a.prototype.writeBigUInt64LE = mn(function (u, c = 0) {
      return P(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
    })),
      (a.prototype.writeBigUInt64BE = mn(function (u, c = 0) {
        return N(this, u, c, BigInt(0), BigInt("0xffffffffffffffff"));
      })),
      (a.prototype.writeIntLE = function (u, c, w, C) {
        if (((u = +u), (c = c >>> 0), !C)) {
          const Ue = Math.pow(2, 8 * w - 1);
          b(this, u, c, w, Ue - 1, -Ue);
        }
        let T = 0,
          Q = 1,
          pe = 0;
        for (this[c] = u & 255; ++T < w && (Q *= 256); )
          u < 0 && pe === 0 && this[c + T - 1] !== 0 && (pe = 1),
            (this[c + T] = (((u / Q) >> 0) - pe) & 255);
        return c + w;
      }),
      (a.prototype.writeIntBE = function (u, c, w, C) {
        if (((u = +u), (c = c >>> 0), !C)) {
          const Ue = Math.pow(2, 8 * w - 1);
          b(this, u, c, w, Ue - 1, -Ue);
        }
        let T = w - 1,
          Q = 1,
          pe = 0;
        for (this[c + T] = u & 255; --T >= 0 && (Q *= 256); )
          u < 0 && pe === 0 && this[c + T + 1] !== 0 && (pe = 1),
            (this[c + T] = (((u / Q) >> 0) - pe) & 255);
        return c + w;
      }),
      (a.prototype.writeInt8 = function (u, c, w) {
        return (
          (u = +u),
          (c = c >>> 0),
          w || b(this, u, c, 1, 127, -128),
          u < 0 && (u = 255 + u + 1),
          (this[c] = u & 255),
          c + 1
        );
      }),
      (a.prototype.writeInt16LE = function (u, c, w) {
        return (
          (u = +u),
          (c = c >>> 0),
          w || b(this, u, c, 2, 32767, -32768),
          (this[c] = u & 255),
          (this[c + 1] = u >>> 8),
          c + 2
        );
      }),
      (a.prototype.writeInt16BE = function (u, c, w) {
        return (
          (u = +u),
          (c = c >>> 0),
          w || b(this, u, c, 2, 32767, -32768),
          (this[c] = u >>> 8),
          (this[c + 1] = u & 255),
          c + 2
        );
      }),
      (a.prototype.writeInt32LE = function (u, c, w) {
        return (
          (u = +u),
          (c = c >>> 0),
          w || b(this, u, c, 4, 2147483647, -2147483648),
          (this[c] = u & 255),
          (this[c + 1] = u >>> 8),
          (this[c + 2] = u >>> 16),
          (this[c + 3] = u >>> 24),
          c + 4
        );
      }),
      (a.prototype.writeInt32BE = function (u, c, w) {
        return (
          (u = +u),
          (c = c >>> 0),
          w || b(this, u, c, 4, 2147483647, -2147483648),
          u < 0 && (u = 4294967295 + u + 1),
          (this[c] = u >>> 24),
          (this[c + 1] = u >>> 16),
          (this[c + 2] = u >>> 8),
          (this[c + 3] = u & 255),
          c + 4
        );
      }),
      (a.prototype.writeBigInt64LE = mn(function (u, c = 0) {
        return P(
          this,
          u,
          c,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      })),
      (a.prototype.writeBigInt64BE = mn(function (u, c = 0) {
        return N(
          this,
          u,
          c,
          -BigInt("0x8000000000000000"),
          BigInt("0x7fffffffffffffff")
        );
      }));
    function L(g, u, c, w, C, T) {
      if (c + w > g.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("Index out of range");
    }
    function j(g, u, c, w, C) {
      return (
        (u = +u),
        (c = c >>> 0),
        C || L(g, u, c, 4),
        r.write(g, u, c, w, 23, 4),
        c + 4
      );
    }
    (a.prototype.writeFloatLE = function (u, c, w) {
      return j(this, u, c, !0, w);
    }),
      (a.prototype.writeFloatBE = function (u, c, w) {
        return j(this, u, c, !1, w);
      });
    function J(g, u, c, w, C) {
      return (
        (u = +u),
        (c = c >>> 0),
        C || L(g, u, c, 8),
        r.write(g, u, c, w, 52, 8),
        c + 8
      );
    }
    (a.prototype.writeDoubleLE = function (u, c, w) {
      return J(this, u, c, !0, w);
    }),
      (a.prototype.writeDoubleBE = function (u, c, w) {
        return J(this, u, c, !1, w);
      }),
      (a.prototype.copy = function (u, c, w, C) {
        if (!a.isBuffer(u)) throw new TypeError("argument should be a Buffer");
        if (
          (w || (w = 0),
          !C && C !== 0 && (C = this.length),
          c >= u.length && (c = u.length),
          c || (c = 0),
          C > 0 && C < w && (C = w),
          C === w || u.length === 0 || this.length === 0)
        )
          return 0;
        if (c < 0) throw new RangeError("targetStart out of bounds");
        if (w < 0 || w >= this.length)
          throw new RangeError("Index out of range");
        if (C < 0) throw new RangeError("sourceEnd out of bounds");
        C > this.length && (C = this.length),
          u.length - c < C - w && (C = u.length - c + w);
        const T = C - w;
        return (
          this === u && typeof Uint8Array.prototype.copyWithin == "function"
            ? this.copyWithin(c, w, C)
            : Uint8Array.prototype.set.call(u, this.subarray(w, C), c),
          T
        );
      }),
      (a.prototype.fill = function (u, c, w, C) {
        if (typeof u == "string") {
          if (
            (typeof c == "string"
              ? ((C = c), (c = 0), (w = this.length))
              : typeof w == "string" && ((C = w), (w = this.length)),
            C !== void 0 && typeof C != "string")
          )
            throw new TypeError("encoding must be a string");
          if (typeof C == "string" && !a.isEncoding(C))
            throw new TypeError("Unknown encoding: " + C);
          if (u.length === 1) {
            const Q = u.charCodeAt(0);
            ((C === "utf8" && Q < 128) || C === "latin1") && (u = Q);
          }
        } else
          typeof u == "number"
            ? (u = u & 255)
            : typeof u == "boolean" && (u = Number(u));
        if (c < 0 || this.length < c || this.length < w)
          throw new RangeError("Out of range index");
        if (w <= c) return this;
        (c = c >>> 0), (w = w === void 0 ? this.length : w >>> 0), u || (u = 0);
        let T;
        if (typeof u == "number") for (T = c; T < w; ++T) this[T] = u;
        else {
          const Q = a.isBuffer(u) ? u : a.from(u, C),
            pe = Q.length;
          if (pe === 0)
            throw new TypeError(
              'The value "' + u + '" is invalid for argument "value"'
            );
          for (T = 0; T < w - c; ++T) this[T + c] = Q[T % pe];
        }
        return this;
      });
    const te = {};
    function _(g, u, c) {
      te[g] = class extends c {
        constructor() {
          super(),
            Object.defineProperty(this, "message", {
              value: u.apply(this, arguments),
              writable: !0,
              configurable: !0,
            }),
            (this.name = `${this.name} [${g}]`),
            this.stack,
            delete this.name;
        }
        get code() {
          return g;
        }
        set code(C) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0,
          });
        }
        toString() {
          return `${this.name} [${g}]: ${this.message}`;
        }
      };
    }
    _(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function (g) {
        return g
          ? `${g} is outside of buffer bounds`
          : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ),
      _(
        "ERR_INVALID_ARG_TYPE",
        function (g, u) {
          return `The "${g}" argument must be of type number. Received type ${typeof u}`;
        },
        TypeError
      ),
      _(
        "ERR_OUT_OF_RANGE",
        function (g, u, c) {
          let w = `The value of "${g}" is out of range.`,
            C = c;
          return (
            Number.isInteger(c) && Math.abs(c) > 2 ** 32
              ? (C = $(String(c)))
              : typeof c == "bigint" &&
                ((C = String(c)),
                (c > BigInt(2) ** BigInt(32) ||
                  c < -(BigInt(2) ** BigInt(32))) &&
                  (C = $(C)),
                (C += "n")),
            (w += ` It must be ${u}. Received ${C}`),
            w
          );
        },
        RangeError
      );
    function $(g) {
      let u = "",
        c = g.length;
      const w = g[0] === "-" ? 1 : 0;
      for (; c >= w + 4; c -= 3) u = `_${g.slice(c - 3, c)}${u}`;
      return `${g.slice(0, c)}${u}`;
    }
    function se(g, u, c) {
      fe(u, "offset"),
        (g[u] === void 0 || g[u + c] === void 0) && ke(u, g.length - (c + 1));
    }
    function ae(g, u, c, w, C, T) {
      if (g > c || g < u) {
        const Q = typeof u == "bigint" ? "n" : "";
        let pe;
        throw (
          (T > 3
            ? u === 0 || u === BigInt(0)
              ? (pe = `>= 0${Q} and < 2${Q} ** ${(T + 1) * 8}${Q}`)
              : (pe = `>= -(2${Q} ** ${(T + 1) * 8 - 1}${Q}) and < 2 ** ${
                  (T + 1) * 8 - 1
                }${Q}`)
            : (pe = `>= ${u}${Q} and <= ${c}${Q}`),
          new te.ERR_OUT_OF_RANGE("value", pe, g))
        );
      }
      se(w, C, T);
    }
    function fe(g, u) {
      if (typeof g != "number")
        throw new te.ERR_INVALID_ARG_TYPE(u, "number", g);
    }
    function ke(g, u, c) {
      throw Math.floor(g) !== g
        ? (fe(g, c), new te.ERR_OUT_OF_RANGE(c || "offset", "an integer", g))
        : u < 0
        ? new te.ERR_BUFFER_OUT_OF_BOUNDS()
        : new te.ERR_OUT_OF_RANGE(
            c || "offset",
            `>= ${c ? 1 : 0} and <= ${u}`,
            g
          );
    }
    const De = /[^+/0-9A-Za-z-_]/g;
    function et(g) {
      if (((g = g.split("=")[0]), (g = g.trim().replace(De, "")), g.length < 2))
        return "";
      for (; g.length % 4 !== 0; ) g = g + "=";
      return g;
    }
    function ot(g, u) {
      u = u || 1 / 0;
      let c;
      const w = g.length;
      let C = null;
      const T = [];
      for (let Q = 0; Q < w; ++Q) {
        if (((c = g.charCodeAt(Q)), c > 55295 && c < 57344)) {
          if (!C) {
            if (c > 56319) {
              (u -= 3) > -1 && T.push(239, 191, 189);
              continue;
            } else if (Q + 1 === w) {
              (u -= 3) > -1 && T.push(239, 191, 189);
              continue;
            }
            C = c;
            continue;
          }
          if (c < 56320) {
            (u -= 3) > -1 && T.push(239, 191, 189), (C = c);
            continue;
          }
          c = (((C - 55296) << 10) | (c - 56320)) + 65536;
        } else C && (u -= 3) > -1 && T.push(239, 191, 189);
        if (((C = null), c < 128)) {
          if ((u -= 1) < 0) break;
          T.push(c);
        } else if (c < 2048) {
          if ((u -= 2) < 0) break;
          T.push((c >> 6) | 192, (c & 63) | 128);
        } else if (c < 65536) {
          if ((u -= 3) < 0) break;
          T.push((c >> 12) | 224, ((c >> 6) & 63) | 128, (c & 63) | 128);
        } else if (c < 1114112) {
          if ((u -= 4) < 0) break;
          T.push(
            (c >> 18) | 240,
            ((c >> 12) & 63) | 128,
            ((c >> 6) & 63) | 128,
            (c & 63) | 128
          );
        } else throw new Error("Invalid code point");
      }
      return T;
    }
    function lr(g) {
      const u = [];
      for (let c = 0; c < g.length; ++c) u.push(g.charCodeAt(c) & 255);
      return u;
    }
    function zt(g, u) {
      let c, w, C;
      const T = [];
      for (let Q = 0; Q < g.length && !((u -= 2) < 0); ++Q)
        (c = g.charCodeAt(Q)),
          (w = c >> 8),
          (C = c % 256),
          T.push(C),
          T.push(w);
      return T;
    }
    function Wr(g) {
      return t.toByteArray(et(g));
    }
    function ur(g, u, c, w) {
      let C;
      for (C = 0; C < w && !(C + c >= u.length || C >= g.length); ++C)
        u[C + c] = g[C];
      return C;
    }
    function st(g, u) {
      return (
        g instanceof u ||
        (g != null &&
          g.constructor != null &&
          g.constructor.name != null &&
          g.constructor.name === u.name)
      );
    }
    function Ii(g) {
      return g !== g;
    }
    const Op = (function () {
      const g = "0123456789abcdef",
        u = new Array(256);
      for (let c = 0; c < 16; ++c) {
        const w = c * 16;
        for (let C = 0; C < 16; ++C) u[w + C] = g[c] + g[C];
      }
      return u;
    })();
    function mn(g) {
      return typeof BigInt > "u" ? RA : g;
    }
    function RA() {
      throw new Error("BigInt not supported");
    }
  })(Fg);
  var Ug = { exports: {} },
    Ke = (Ug.exports = {}),
    Rr,
    Dr;
  function mc() {
    throw new Error("setTimeout has not been defined");
  }
  function yc() {
    throw new Error("clearTimeout has not been defined");
  }
  (function () {
    try {
      typeof setTimeout == "function" ? (Rr = setTimeout) : (Rr = mc);
    } catch {
      Rr = mc;
    }
    try {
      typeof clearTimeout == "function" ? (Dr = clearTimeout) : (Dr = yc);
    } catch {
      Dr = yc;
    }
  })();
  function Yg(e) {
    if (Rr === setTimeout) return setTimeout(e, 0);
    if ((Rr === mc || !Rr) && setTimeout)
      return (Rr = setTimeout), setTimeout(e, 0);
    try {
      return Rr(e, 0);
    } catch {
      try {
        return Rr.call(null, e, 0);
      } catch {
        return Rr.call(this, e, 0);
      }
    }
  }
  function LA(e) {
    if (Dr === clearTimeout) return clearTimeout(e);
    if ((Dr === yc || !Dr) && clearTimeout)
      return (Dr = clearTimeout), clearTimeout(e);
    try {
      return Dr(e);
    } catch {
      try {
        return Dr.call(null, e);
      } catch {
        return Dr.call(this, e);
      }
    }
  }
  var Kr = [],
    Ki = !1,
    ei,
    Ea = -1;
  function UA() {
    !Ki ||
      !ei ||
      ((Ki = !1),
      ei.length ? (Kr = ei.concat(Kr)) : (Ea = -1),
      Kr.length && Wg());
  }
  function Wg() {
    if (!Ki) {
      var e = Yg(UA);
      Ki = !0;
      for (var t = Kr.length; t; ) {
        for (ei = Kr, Kr = []; ++Ea < t; ) ei && ei[Ea].run();
        (Ea = -1), (t = Kr.length);
      }
      (ei = null), (Ki = !1), LA(e);
    }
  }
  Ke.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    Kr.push(new Jg(e, t)), Kr.length === 1 && !Ki && Yg(Wg);
  };
  function Jg(e, t) {
    (this.fun = e), (this.array = t);
  }
  Jg.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  Ke.title = "browser";
  Ke.browser = !0;
  Ke.env = {};
  Ke.argv = [];
  Ke.version = "";
  Ke.versions = {};
  function fn() {}
  Ke.on = fn;
  Ke.addListener = fn;
  Ke.once = fn;
  Ke.off = fn;
  Ke.removeListener = fn;
  Ke.removeAllListeners = fn;
  Ke.emit = fn;
  Ke.prependListener = fn;
  Ke.prependOnceListener = fn;
  Ke.listeners = function (e) {
    return [];
  };
  Ke.binding = function (e) {
    throw new Error("process.binding is not supported");
  };
  Ke.cwd = function () {
    return "/";
  };
  Ke.chdir = function (e) {
    throw new Error("process.chdir is not supported");
  };
  Ke.umask = function () {
    return 0;
  };
  var YA = Ug.exports;
  const WA = Ms(YA);
  window.Buffer = Fg.Buffer;
  window.process = WA;
  var Hg = { exports: {} },
    zl = {},
    Vg = { exports: {} },
    ge = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ps = Symbol.for("react.element"),
    JA = Symbol.for("react.portal"),
    HA = Symbol.for("react.fragment"),
    VA = Symbol.for("react.strict_mode"),
    $A = Symbol.for("react.profiler"),
    GA = Symbol.for("react.provider"),
    XA = Symbol.for("react.context"),
    KA = Symbol.for("react.forward_ref"),
    ZA = Symbol.for("react.suspense"),
    qA = Symbol.for("react.memo"),
    e1 = Symbol.for("react.lazy"),
    Tp = Symbol.iterator;
  function t1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Tp && e[Tp]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var $g = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Gg = Object.assign,
    Xg = {};
  function ko(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xg),
      (this.updater = r || $g);
  }
  ko.prototype.isReactComponent = {};
  ko.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  ko.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Kg() {}
  Kg.prototype = ko.prototype;
  function Ld(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Xg),
      (this.updater = r || $g);
  }
  var Ud = (Ld.prototype = new Kg());
  Ud.constructor = Ld;
  Gg(Ud, ko.prototype);
  Ud.isPureReactComponent = !0;
  var Mp = Array.isArray,
    Zg = Object.prototype.hasOwnProperty,
    Yd = { current: null },
    qg = { key: !0, ref: !0, __self: !0, __source: !0 };
  function em(e, t, r) {
    var n,
      i = {},
      o = null,
      s = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (s = t.ref),
      t.key !== void 0 && (o = "" + t.key),
      t))
        Zg.call(t, n) && !qg.hasOwnProperty(n) && (i[n] = t[n]);
    var a = arguments.length - 2;
    if (a === 1) i.children = r;
    else if (1 < a) {
      for (var l = Array(a), d = 0; d < a; d++) l[d] = arguments[d + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
    return {
      $$typeof: Ps,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: Yd.current,
    };
  }
  function r1(e, t) {
    return {
      $$typeof: Ps,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Wd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ps;
  }
  function n1(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var Pp = /\/+/g;
  function Iu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? n1("" + e.key)
      : t.toString(36);
  }
  function Ca(e, t, r, n, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
      switch (o) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ps:
            case JA:
              s = !0;
          }
      }
    if (s)
      return (
        (s = e),
        (i = i(s)),
        (e = n === "" ? "." + Iu(s, 0) : n),
        Mp(i)
          ? ((r = ""),
            e != null && (r = e.replace(Pp, "$&/") + "/"),
            Ca(i, t, r, "", function (d) {
              return d;
            }))
          : i != null &&
            (Wd(i) &&
              (i = r1(
                i,
                r +
                  (!i.key || (s && s.key === i.key)
                    ? ""
                    : ("" + i.key).replace(Pp, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((s = 0), (n = n === "" ? "." : n + ":"), Mp(e)))
      for (var a = 0; a < e.length; a++) {
        o = e[a];
        var l = n + Iu(o, a);
        s += Ca(o, t, r, l, i);
      }
    else if (((l = t1(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(o = e.next()).done; )
        (o = o.value), (l = n + Iu(o, a++)), (s += Ca(o, t, r, l, i));
    else if (o === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return s;
  }
  function Vs(e, t, r) {
    if (e == null) return e;
    var n = [],
      i = 0;
    return (
      Ca(e, n, "", "", function (o) {
        return t.call(r, o, i++);
      }),
      n
    );
  }
  function i1(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var bt = { current: null },
    ba = { transition: null },
    o1 = {
      ReactCurrentDispatcher: bt,
      ReactCurrentBatchConfig: ba,
      ReactCurrentOwner: Yd,
    };
  ge.Children = {
    map: Vs,
    forEach: function (e, t, r) {
      Vs(
        e,
        function () {
          t.apply(this, arguments);
        },
        r
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Vs(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Vs(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Wd(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  ge.Component = ko;
  ge.Fragment = HA;
  ge.Profiler = $A;
  ge.PureComponent = Ld;
  ge.StrictMode = VA;
  ge.Suspense = ZA;
  ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = o1;
  ge.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var n = Gg({}, e.props),
      i = e.key,
      o = e.ref,
      s = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((o = t.ref), (s = Yd.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        Zg.call(t, l) &&
          !qg.hasOwnProperty(l) &&
          (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = r;
    else if (1 < l) {
      a = Array(l);
      for (var d = 0; d < l; d++) a[d] = arguments[d + 2];
      n.children = a;
    }
    return { $$typeof: Ps, type: e.type, key: i, ref: o, props: n, _owner: s };
  };
  ge.createContext = function (e) {
    return (
      (e = {
        $$typeof: XA,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: GA, _context: e }),
      (e.Consumer = e)
    );
  };
  ge.createElement = em;
  ge.createFactory = function (e) {
    var t = em.bind(null, e);
    return (t.type = e), t;
  };
  ge.createRef = function () {
    return { current: null };
  };
  ge.forwardRef = function (e) {
    return { $$typeof: KA, render: e };
  };
  ge.isValidElement = Wd;
  ge.lazy = function (e) {
    return { $$typeof: e1, _payload: { _status: -1, _result: e }, _init: i1 };
  };
  ge.memo = function (e, t) {
    return { $$typeof: qA, type: e, compare: t === void 0 ? null : t };
  };
  ge.startTransition = function (e) {
    var t = ba.transition;
    ba.transition = {};
    try {
      e();
    } finally {
      ba.transition = t;
    }
  };
  ge.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  ge.useCallback = function (e, t) {
    return bt.current.useCallback(e, t);
  };
  ge.useContext = function (e) {
    return bt.current.useContext(e);
  };
  ge.useDebugValue = function () {};
  ge.useDeferredValue = function (e) {
    return bt.current.useDeferredValue(e);
  };
  ge.useEffect = function (e, t) {
    return bt.current.useEffect(e, t);
  };
  ge.useId = function () {
    return bt.current.useId();
  };
  ge.useImperativeHandle = function (e, t, r) {
    return bt.current.useImperativeHandle(e, t, r);
  };
  ge.useInsertionEffect = function (e, t) {
    return bt.current.useInsertionEffect(e, t);
  };
  ge.useLayoutEffect = function (e, t) {
    return bt.current.useLayoutEffect(e, t);
  };
  ge.useMemo = function (e, t) {
    return bt.current.useMemo(e, t);
  };
  ge.useReducer = function (e, t, r) {
    return bt.current.useReducer(e, t, r);
  };
  ge.useRef = function (e) {
    return bt.current.useRef(e);
  };
  ge.useState = function (e) {
    return bt.current.useState(e);
  };
  ge.useSyncExternalStore = function (e, t, r) {
    return bt.current.useSyncExternalStore(e, t, r);
  };
  ge.useTransition = function () {
    return bt.current.useTransition();
  };
  ge.version = "18.2.0";
  Vg.exports = ge;
  var B = Vg.exports;
  const O = Ms(B),
    zp = OA({ __proto__: null, default: O }, [B]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var s1 = B,
    a1 = Symbol.for("react.element"),
    l1 = Symbol.for("react.fragment"),
    u1 = Object.prototype.hasOwnProperty,
    c1 =
      s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d1 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function tm(e, t, r) {
    var n,
      i = {},
      o = null,
      s = null;
    r !== void 0 && (o = "" + r),
      t.key !== void 0 && (o = "" + t.key),
      t.ref !== void 0 && (s = t.ref);
    for (n in t) u1.call(t, n) && !d1.hasOwnProperty(n) && (i[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
    return {
      $$typeof: a1,
      type: e,
      key: o,
      ref: s,
      props: i,
      _owner: c1.current,
    };
  }
  zl.Fragment = l1;
  zl.jsx = tm;
  zl.jsxs = tm;
  Hg.exports = zl;
  var f = Hg.exports,
    vc = {},
    rm = { exports: {} },
    Vt = {},
    nm = { exports: {} },
    im = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(U, H) {
      var X = U.length;
      U.push(H);
      e: for (; 0 < X; ) {
        var ee = (X - 1) >>> 1,
          b = U[ee];
        if (0 < i(b, H)) (U[ee] = H), (U[X] = b), (X = ee);
        else break e;
      }
    }
    function r(U) {
      return U.length === 0 ? null : U[0];
    }
    function n(U) {
      if (U.length === 0) return null;
      var H = U[0],
        X = U.pop();
      if (X !== H) {
        U[0] = X;
        e: for (var ee = 0, b = U.length, P = b >>> 1; ee < P; ) {
          var N = 2 * (ee + 1) - 1,
            L = U[N],
            j = N + 1,
            J = U[j];
          if (0 > i(L, X))
            j < b && 0 > i(J, L)
              ? ((U[ee] = J), (U[j] = X), (ee = j))
              : ((U[ee] = L), (U[N] = X), (ee = N));
          else if (j < b && 0 > i(J, X)) (U[ee] = J), (U[j] = X), (ee = j);
          else break e;
        }
      }
      return H;
    }
    function i(U, H) {
      var X = U.sortIndex - H.sortIndex;
      return X !== 0 ? X : U.id - H.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var o = performance;
      e.unstable_now = function () {
        return o.now();
      };
    } else {
      var s = Date,
        a = s.now();
      e.unstable_now = function () {
        return s.now() - a;
      };
    }
    var l = [],
      d = [],
      p = 1,
      h = null,
      y = 3,
      x = !1,
      S = !1,
      E = !1,
      D = typeof setTimeout == "function" ? setTimeout : null,
      A = typeof clearTimeout == "function" ? clearTimeout : null,
      m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(U) {
      for (var H = r(d); H !== null; ) {
        if (H.callback === null) n(d);
        else if (H.startTime <= U)
          n(d), (H.sortIndex = H.expirationTime), t(l, H);
        else break;
        H = r(d);
      }
    }
    function k(U) {
      if (((E = !1), v(U), !S))
        if (r(l) !== null) (S = !0), Re(I);
        else {
          var H = r(d);
          H !== null && Ae(k, H.startTime - U);
        }
    }
    function I(U, H) {
      (S = !1), E && ((E = !1), A(F), (F = -1)), (x = !0);
      var X = y;
      try {
        for (
          v(H), h = r(l);
          h !== null && (!(h.expirationTime > H) || (U && !oe()));

        ) {
          var ee = h.callback;
          if (typeof ee == "function") {
            (h.callback = null), (y = h.priorityLevel);
            var b = ee(h.expirationTime <= H);
            (H = e.unstable_now()),
              typeof b == "function" ? (h.callback = b) : h === r(l) && n(l),
              v(H);
          } else n(l);
          h = r(l);
        }
        if (h !== null) var P = !0;
        else {
          var N = r(d);
          N !== null && Ae(k, N.startTime - H), (P = !1);
        }
        return P;
      } finally {
        (h = null), (y = X), (x = !1);
      }
    }
    var R = !1,
      M = null,
      F = -1,
      re = 5,
      G = -1;
    function oe() {
      return !(e.unstable_now() - G < re);
    }
    function ne() {
      if (M !== null) {
        var U = e.unstable_now();
        G = U;
        var H = !0;
        try {
          H = M(!0, U);
        } finally {
          H ? de() : ((R = !1), (M = null));
        }
      } else R = !1;
    }
    var de;
    if (typeof m == "function")
      de = function () {
        m(ne);
      };
    else if (typeof MessageChannel < "u") {
      var ve = new MessageChannel(),
        Se = ve.port2;
      (ve.port1.onmessage = ne),
        (de = function () {
          Se.postMessage(null);
        });
    } else
      de = function () {
        D(ne, 0);
      };
    function Re(U) {
      (M = U), R || ((R = !0), de());
    }
    function Ae(U, H) {
      F = D(function () {
        U(e.unstable_now());
      }, H);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (U) {
        U.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        S || x || ((S = !0), Re(I));
      }),
      (e.unstable_forceFrameRate = function (U) {
        0 > U || 125 < U
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (re = 0 < U ? Math.floor(1e3 / U) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return y;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return r(l);
      }),
      (e.unstable_next = function (U) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var H = 3;
            break;
          default:
            H = y;
        }
        var X = y;
        y = H;
        try {
          return U();
        } finally {
          y = X;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (U, H) {
        switch (U) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            U = 3;
        }
        var X = y;
        y = U;
        try {
          return H();
        } finally {
          y = X;
        }
      }),
      (e.unstable_scheduleCallback = function (U, H, X) {
        var ee = e.unstable_now();
        switch (
          (typeof X == "object" && X !== null
            ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? ee + X : ee))
            : (X = ee),
          U)
        ) {
          case 1:
            var b = -1;
            break;
          case 2:
            b = 250;
            break;
          case 5:
            b = 1073741823;
            break;
          case 4:
            b = 1e4;
            break;
          default:
            b = 5e3;
        }
        return (
          (b = X + b),
          (U = {
            id: p++,
            callback: H,
            priorityLevel: U,
            startTime: X,
            expirationTime: b,
            sortIndex: -1,
          }),
          X > ee
            ? ((U.sortIndex = X),
              t(d, U),
              r(l) === null &&
                U === r(d) &&
                (E ? (A(F), (F = -1)) : (E = !0), Ae(k, X - ee)))
            : ((U.sortIndex = b), t(l, U), S || x || ((S = !0), Re(I))),
          U
        );
      }),
      (e.unstable_shouldYield = oe),
      (e.unstable_wrapCallback = function (U) {
        var H = y;
        return function () {
          var X = y;
          y = H;
          try {
            return U.apply(this, arguments);
          } finally {
            y = X;
          }
        };
      });
  })(im);
  nm.exports = im;
  var f1 = nm.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var om = B,
    Wt = f1;
  function Y(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var sm = new Set(),
    ss = {};
  function wi(e, t) {
    ao(e, t), ao(e + "Capture", t);
  }
  function ao(e, t) {
    for (ss[e] = t, e = 0; e < t.length; e++) sm.add(t[e]);
  }
  var sn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ac = Object.prototype.hasOwnProperty,
    p1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Np = {},
    Qp = {};
  function h1(e) {
    return Ac.call(Qp, e)
      ? !0
      : Ac.call(Np, e)
      ? !1
      : p1.test(e)
      ? (Qp[e] = !0)
      : ((Np[e] = !0), !1);
  }
  function g1(e, t, r, n) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return n
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function m1(e, t, r, n) {
    if (t === null || typeof t > "u" || g1(e, t, r, n)) return !0;
    if (n) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function It(e, t, r, n, i, o, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = i),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = o),
      (this.removeEmptyString = s);
  }
  var mt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      mt[e] = new It(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    mt[t] = new It(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    mt[e] = new It(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    mt[e] = new It(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      mt[e] = new It(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    mt[e] = new It(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    mt[e] = new It(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    mt[e] = new It(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    mt[e] = new It(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Jd = /[\-:]([a-z])/g;
  function Hd(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Jd, Hd);
      mt[t] = new It(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Jd, Hd);
      mt[t] = new It(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Jd, Hd);
    mt[t] = new It(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    mt[e] = new It(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  mt.xlinkHref = new It(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    mt[e] = new It(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Vd(e, t, r, n) {
    var i = mt.hasOwnProperty(t) ? mt[t] : null;
    (i !== null
      ? i.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (m1(t, r, i, n) && (r = null),
      n || i === null
        ? h1(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : i.mustUseProperty
        ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
        : ((t = i.attributeName),
          (n = i.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
              n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
  }
  var pn = om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $s = Symbol.for("react.element"),
    zi = Symbol.for("react.portal"),
    Ni = Symbol.for("react.fragment"),
    $d = Symbol.for("react.strict_mode"),
    wc = Symbol.for("react.profiler"),
    am = Symbol.for("react.provider"),
    lm = Symbol.for("react.context"),
    Gd = Symbol.for("react.forward_ref"),
    xc = Symbol.for("react.suspense"),
    Sc = Symbol.for("react.suspense_list"),
    Xd = Symbol.for("react.memo"),
    xn = Symbol.for("react.lazy"),
    um = Symbol.for("react.offscreen"),
    _p = Symbol.iterator;
  function To(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (_p && e[_p]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Le = Object.assign,
    Bu;
  function Yo(e) {
    if (Bu === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        Bu = (t && t[1]) || "";
      }
    return (
      `
` +
      Bu +
      e
    );
  }
  var Ru = !1;
  function Du(e, t) {
    if (!e || Ru) return "";
    Ru = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (d) {
            var n = d;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (d) {
            n = d;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (d) {
          n = d;
        }
        e();
      }
    } catch (d) {
      if (d && n && typeof d.stack == "string") {
        for (
          var i = d.stack.split(`
`),
            o = n.stack.split(`
`),
            s = i.length - 1,
            a = o.length - 1;
          1 <= s && 0 <= a && i[s] !== o[a];

        )
          a--;
        for (; 1 <= s && 0 <= a; s--, a--)
          if (i[s] !== o[a]) {
            if (s !== 1 || a !== 1)
              do
                if ((s--, a--, 0 > a || i[s] !== o[a])) {
                  var l =
                    `
` + i[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= s && 0 <= a);
            break;
          }
      }
    } finally {
      (Ru = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? Yo(e) : "";
  }
  function y1(e) {
    switch (e.tag) {
      case 5:
        return Yo(e.type);
      case 16:
        return Yo("Lazy");
      case 13:
        return Yo("Suspense");
      case 19:
        return Yo("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Du(e.type, !1)), e;
      case 11:
        return (e = Du(e.type.render, !1)), e;
      case 1:
        return (e = Du(e.type, !0)), e;
      default:
        return "";
    }
  }
  function kc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ni:
        return "Fragment";
      case zi:
        return "Portal";
      case wc:
        return "Profiler";
      case $d:
        return "StrictMode";
      case xc:
        return "Suspense";
      case Sc:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case lm:
          return (e.displayName || "Context") + ".Consumer";
        case am:
          return (e._context.displayName || "Context") + ".Provider";
        case Gd:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Xd:
          return (
            (t = e.displayName || null), t !== null ? t : kc(e.type) || "Memo"
          );
        case xn:
          (t = e._payload), (e = e._init);
          try {
            return kc(e(t));
          } catch {}
      }
    return null;
  }
  function v1(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return kc(t);
      case 8:
        return t === $d ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function jn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function cm(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function A1(e) {
    var t = cm(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var i = r.get,
        o = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (s) {
            (n = "" + s), o.call(this, s);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (s) {
            n = "" + s;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Gs(e) {
    e._valueTracker || (e._valueTracker = A1(e));
  }
  function dm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      n = "";
    return (
      e && (n = cm(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function Ha(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ec(e, t) {
    var r = t.checked;
    return Le({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function jp(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
    (r = jn(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: n,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function fm(e, t) {
    (t = t.checked), t != null && Vd(e, "checked", t, !1);
  }
  function Cc(e, t) {
    fm(e, t);
    var r = jn(t.value),
      n = t.type;
    if (r != null)
      n === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (n === "submit" || n === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? bc(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && bc(e, t.type, jn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Fp(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (
        !(
          (n !== "submit" && n !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function bc(e, t, r) {
    (t !== "number" || Ha(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Wo = Array.isArray;
  function Zi(e, t, r, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
      for (r = 0; r < e.length; r++)
        (i = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== i && (e[r].selected = i),
          i && n && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + jn(r), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === r) {
          (e[i].selected = !0), n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ic(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(Y(91));
    return Le({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Lp(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(Y(92));
        if (Wo(r)) {
          if (1 < r.length) throw Error(Y(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: jn(r) };
  }
  function pm(e, t) {
    var r = jn(t.value),
      n = jn(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = "" + n);
  }
  function Up(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function hm(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? hm(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Xs,
    gm = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, r, n, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, n, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Xs = Xs || document.createElement("div"),
            Xs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Xs.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function as(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Go = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    w1 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Go).forEach(function (e) {
    w1.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Go[t] = Go[e]);
    });
  });
  function mm(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Go.hasOwnProperty(e) && Go[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function ym(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = r.indexOf("--") === 0,
          i = mm(r, t[r], n);
        r === "float" && (r = "cssFloat"), n ? e.setProperty(r, i) : (e[r] = i);
      }
  }
  var x1 = Le(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Rc(e, t) {
    if (t) {
      if (x1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(Y(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(Y(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(Y(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(Y(62));
    }
  }
  function Dc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Oc = null;
  function Kd(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Tc = null,
    qi = null,
    eo = null;
  function Yp(e) {
    if ((e = Qs(e))) {
      if (typeof Tc != "function") throw Error(Y(280));
      var t = e.stateNode;
      t && ((t = Fl(t)), Tc(e.stateNode, e.type, t));
    }
  }
  function vm(e) {
    qi ? (eo ? eo.push(e) : (eo = [e])) : (qi = e);
  }
  function Am() {
    if (qi) {
      var e = qi,
        t = eo;
      if (((eo = qi = null), Yp(e), t)) for (e = 0; e < t.length; e++) Yp(t[e]);
    }
  }
  function wm(e, t) {
    return e(t);
  }
  function xm() {}
  var Ou = !1;
  function Sm(e, t, r) {
    if (Ou) return e(t, r);
    Ou = !0;
    try {
      return wm(e, t, r);
    } finally {
      (Ou = !1), (qi !== null || eo !== null) && (xm(), Am());
    }
  }
  function ls(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var n = Fl(r);
    if (n === null) return null;
    r = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(Y(231, t, typeof r));
    return r;
  }
  var Mc = !1;
  if (sn)
    try {
      var Mo = {};
      Object.defineProperty(Mo, "passive", {
        get: function () {
          Mc = !0;
        },
      }),
        window.addEventListener("test", Mo, Mo),
        window.removeEventListener("test", Mo, Mo);
    } catch {
      Mc = !1;
    }
  function S1(e, t, r, n, i, o, s, a, l) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, d);
    } catch (p) {
      this.onError(p);
    }
  }
  var Xo = !1,
    Va = null,
    $a = !1,
    Pc = null,
    k1 = {
      onError: function (e) {
        (Xo = !0), (Va = e);
      },
    };
  function E1(e, t, r, n, i, o, s, a, l) {
    (Xo = !1), (Va = null), S1.apply(k1, arguments);
  }
  function C1(e, t, r, n, i, o, s, a, l) {
    if ((E1.apply(this, arguments), Xo)) {
      if (Xo) {
        var d = Va;
        (Xo = !1), (Va = null);
      } else throw Error(Y(198));
      $a || (($a = !0), (Pc = d));
    }
  }
  function xi(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function km(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Wp(e) {
    if (xi(e) !== e) throw Error(Y(188));
  }
  function b1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = xi(e)), t === null)) throw Error(Y(188));
      return t !== e ? null : e;
    }
    for (var r = e, n = t; ; ) {
      var i = r.return;
      if (i === null) break;
      var o = i.alternate;
      if (o === null) {
        if (((n = i.return), n !== null)) {
          r = n;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o; ) {
          if (o === r) return Wp(i), e;
          if (o === n) return Wp(i), t;
          o = o.sibling;
        }
        throw Error(Y(188));
      }
      if (r.return !== n.return) (r = i), (n = o);
      else {
        for (var s = !1, a = i.child; a; ) {
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) {
          for (a = o.child; a; ) {
            if (a === r) {
              (s = !0), (r = o), (n = i);
              break;
            }
            if (a === n) {
              (s = !0), (n = o), (r = i);
              break;
            }
            a = a.sibling;
          }
          if (!s) throw Error(Y(189));
        }
      }
      if (r.alternate !== n) throw Error(Y(190));
    }
    if (r.tag !== 3) throw Error(Y(188));
    return r.stateNode.current === r ? e : t;
  }
  function Em(e) {
    return (e = b1(e)), e !== null ? Cm(e) : null;
  }
  function Cm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Cm(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bm = Wt.unstable_scheduleCallback,
    Jp = Wt.unstable_cancelCallback,
    I1 = Wt.unstable_shouldYield,
    B1 = Wt.unstable_requestPaint,
    Xe = Wt.unstable_now,
    R1 = Wt.unstable_getCurrentPriorityLevel,
    Zd = Wt.unstable_ImmediatePriority,
    Im = Wt.unstable_UserBlockingPriority,
    Ga = Wt.unstable_NormalPriority,
    D1 = Wt.unstable_LowPriority,
    Bm = Wt.unstable_IdlePriority,
    Nl = null,
    zr = null;
  function O1(e) {
    if (zr && typeof zr.onCommitFiberRoot == "function")
      try {
        zr.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var yr = Math.clz32 ? Math.clz32 : P1,
    T1 = Math.log,
    M1 = Math.LN2;
  function P1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((T1(e) / M1) | 0)) | 0;
  }
  var Ks = 64,
    Zs = 4194304;
  function Jo(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Xa(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      o = e.pingedLanes,
      s = r & 268435455;
    if (s !== 0) {
      var a = s & ~i;
      a !== 0 ? (n = Jo(a)) : ((o &= s), o !== 0 && (n = Jo(o)));
    } else (s = r & ~i), s !== 0 ? (n = Jo(s)) : o !== 0 && (n = Jo(o));
    if (n === 0) return 0;
    if (
      t !== 0 &&
      t !== n &&
      !(t & i) &&
      ((i = n & -n), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
    )
      return t;
    if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
        (r = 31 - yr(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
    return n;
  }
  function z1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function N1(e, t) {
    for (
      var r = e.suspendedLanes,
        n = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var s = 31 - yr(o),
        a = 1 << s,
        l = i[s];
      l === -1
        ? (!(a & r) || a & n) && (i[s] = z1(a, t))
        : l <= t && (e.expiredLanes |= a),
        (o &= ~a);
    }
  }
  function zc(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Rm() {
    var e = Ks;
    return (Ks <<= 1), !(Ks & 4194240) && (Ks = 64), e;
  }
  function Tu(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function zs(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - yr(t)),
      (e[t] = r);
  }
  function Q1(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var n = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var i = 31 - yr(r),
        o = 1 << i;
      (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~o);
    }
  }
  function qd(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var n = 31 - yr(r),
        i = 1 << n;
      (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
    }
  }
  var Ce = 0;
  function Dm(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var Om,
    ef,
    Tm,
    Mm,
    Pm,
    Nc = !1,
    qs = [],
    Rn = null,
    Dn = null,
    On = null,
    us = new Map(),
    cs = new Map(),
    kn = [],
    _1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Hp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        Dn = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        us.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cs.delete(t.pointerId);
    }
  }
  function Po(e, t, r, n, i, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: n,
          nativeEvent: o,
          targetContainers: [i],
        }),
        t !== null && ((t = Qs(t)), t !== null && ef(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function j1(e, t, r, n, i) {
    switch (t) {
      case "focusin":
        return (Rn = Po(Rn, e, t, r, n, i)), !0;
      case "dragenter":
        return (Dn = Po(Dn, e, t, r, n, i)), !0;
      case "mouseover":
        return (On = Po(On, e, t, r, n, i)), !0;
      case "pointerover":
        var o = i.pointerId;
        return us.set(o, Po(us.get(o) || null, e, t, r, n, i)), !0;
      case "gotpointercapture":
        return (
          (o = i.pointerId), cs.set(o, Po(cs.get(o) || null, e, t, r, n, i)), !0
        );
    }
    return !1;
  }
  function zm(e) {
    var t = ti(e.target);
    if (t !== null) {
      var r = xi(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = km(r)), t !== null)) {
            (e.blockedOn = t),
              Pm(e.priority, function () {
                Tm(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ia(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Qc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var n = new r.constructor(r.type, r);
        (Oc = n), r.target.dispatchEvent(n), (Oc = null);
      } else return (t = Qs(r)), t !== null && ef(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Vp(e, t, r) {
    Ia(e) && r.delete(t);
  }
  function F1() {
    (Nc = !1),
      Rn !== null && Ia(Rn) && (Rn = null),
      Dn !== null && Ia(Dn) && (Dn = null),
      On !== null && Ia(On) && (On = null),
      us.forEach(Vp),
      cs.forEach(Vp);
  }
  function zo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Nc ||
        ((Nc = !0),
        Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority, F1)));
  }
  function ds(e) {
    function t(i) {
      return zo(i, e);
    }
    if (0 < qs.length) {
      zo(qs[0], e);
      for (var r = 1; r < qs.length; r++) {
        var n = qs[r];
        n.blockedOn === e && (n.blockedOn = null);
      }
    }
    for (
      Rn !== null && zo(Rn, e),
        Dn !== null && zo(Dn, e),
        On !== null && zo(On, e),
        us.forEach(t),
        cs.forEach(t),
        r = 0;
      r < kn.length;
      r++
    )
      (n = kn[r]), n.blockedOn === e && (n.blockedOn = null);
    for (; 0 < kn.length && ((r = kn[0]), r.blockedOn === null); )
      zm(r), r.blockedOn === null && kn.shift();
  }
  var to = pn.ReactCurrentBatchConfig,
    Ka = !0;
  function L1(e, t, r, n) {
    var i = Ce,
      o = to.transition;
    to.transition = null;
    try {
      (Ce = 1), tf(e, t, r, n);
    } finally {
      (Ce = i), (to.transition = o);
    }
  }
  function U1(e, t, r, n) {
    var i = Ce,
      o = to.transition;
    to.transition = null;
    try {
      (Ce = 4), tf(e, t, r, n);
    } finally {
      (Ce = i), (to.transition = o);
    }
  }
  function tf(e, t, r, n) {
    if (Ka) {
      var i = Qc(e, t, r, n);
      if (i === null) Uu(e, t, n, Za, r), Hp(e, n);
      else if (j1(i, e, t, r, n)) n.stopPropagation();
      else if ((Hp(e, n), t & 4 && -1 < _1.indexOf(e))) {
        for (; i !== null; ) {
          var o = Qs(i);
          if (
            (o !== null && Om(o),
            (o = Qc(e, t, r, n)),
            o === null && Uu(e, t, n, Za, r),
            o === i)
          )
            break;
          i = o;
        }
        i !== null && n.stopPropagation();
      } else Uu(e, t, n, null, r);
    }
  }
  var Za = null;
  function Qc(e, t, r, n) {
    if (((Za = null), (e = Kd(n)), (e = ti(e)), e !== null))
      if (((t = xi(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = km(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Za = e), null;
  }
  function Nm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (R1()) {
          case Zd:
            return 1;
          case Im:
            return 4;
          case Ga:
          case D1:
            return 16;
          case Bm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Cn = null,
    rf = null,
    Ba = null;
  function Qm() {
    if (Ba) return Ba;
    var e,
      t = rf,
      r = t.length,
      n,
      i = "value" in Cn ? Cn.value : Cn.textContent,
      o = i.length;
    for (e = 0; e < r && t[e] === i[e]; e++);
    var s = r - e;
    for (n = 1; n <= s && t[r - n] === i[o - n]; n++);
    return (Ba = i.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Ra(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ea() {
    return !0;
  }
  function $p() {
    return !1;
  }
  function $t(e) {
    function t(r, n, i, o, s) {
      (this._reactName = r),
        (this._targetInst = i),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = s),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(o) : o[a]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? ea
          : $p),
        (this.isPropagationStopped = $p),
        this
      );
    }
    return (
      Le(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = ea));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = ea));
        },
        persist: function () {},
        isPersistent: ea,
      }),
      t
    );
  }
  var Eo = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    nf = $t(Eo),
    Ns = Le({}, Eo, { view: 0, detail: 0 }),
    Y1 = $t(Ns),
    Mu,
    Pu,
    No,
    Ql = Le({}, Ns, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: of,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== No &&
              (No && e.type === "mousemove"
                ? ((Mu = e.screenX - No.screenX), (Pu = e.screenY - No.screenY))
                : (Pu = Mu = 0),
              (No = e)),
            Mu);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Pu;
      },
    }),
    Gp = $t(Ql),
    W1 = Le({}, Ql, { dataTransfer: 0 }),
    J1 = $t(W1),
    H1 = Le({}, Ns, { relatedTarget: 0 }),
    zu = $t(H1),
    V1 = Le({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    $1 = $t(V1),
    G1 = Le({}, Eo, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    X1 = $t(G1),
    K1 = Le({}, Eo, { data: 0 }),
    Xp = $t(K1),
    Z1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    q1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ew = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function tw(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ew[e])
      ? !!t[e]
      : !1;
  }
  function of() {
    return tw;
  }
  var rw = Le({}, Ns, {
      key: function (e) {
        if (e.key) {
          var t = Z1[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ra(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? q1[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: of,
      charCode: function (e) {
        return e.type === "keypress" ? Ra(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ra(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    nw = $t(rw),
    iw = Le({}, Ql, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Kp = $t(iw),
    ow = Le({}, Ns, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: of,
    }),
    sw = $t(ow),
    aw = Le({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    lw = $t(aw),
    uw = Le({}, Ql, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    cw = $t(uw),
    dw = [9, 13, 27, 32],
    sf = sn && "CompositionEvent" in window,
    Ko = null;
  sn && "documentMode" in document && (Ko = document.documentMode);
  var fw = sn && "TextEvent" in window && !Ko,
    _m = sn && (!sf || (Ko && 8 < Ko && 11 >= Ko)),
    Zp = " ",
    qp = !1;
  function jm(e, t) {
    switch (e) {
      case "keyup":
        return dw.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Fm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qi = !1;
  function pw(e, t) {
    switch (e) {
      case "compositionend":
        return Fm(t);
      case "keypress":
        return t.which !== 32 ? null : ((qp = !0), Zp);
      case "textInput":
        return (e = t.data), e === Zp && qp ? null : e;
      default:
        return null;
    }
  }
  function hw(e, t) {
    if (Qi)
      return e === "compositionend" || (!sf && jm(e, t))
        ? ((e = Qm()), (Ba = rf = Cn = null), (Qi = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return _m && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gw = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function eh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gw[e.type] : t === "textarea";
  }
  function Lm(e, t, r, n) {
    vm(n),
      (t = qa(t, "onChange")),
      0 < t.length &&
        ((r = new nf("onChange", "change", null, r, n)),
        e.push({ event: r, listeners: t }));
  }
  var Zo = null,
    fs = null;
  function mw(e) {
    Zm(e, 0);
  }
  function _l(e) {
    var t = Fi(e);
    if (dm(t)) return e;
  }
  function yw(e, t) {
    if (e === "change") return t;
  }
  var Um = !1;
  if (sn) {
    var Nu;
    if (sn) {
      var Qu = "oninput" in document;
      if (!Qu) {
        var th = document.createElement("div");
        th.setAttribute("oninput", "return;"),
          (Qu = typeof th.oninput == "function");
      }
      Nu = Qu;
    } else Nu = !1;
    Um = Nu && (!document.documentMode || 9 < document.documentMode);
  }
  function rh() {
    Zo && (Zo.detachEvent("onpropertychange", Ym), (fs = Zo = null));
  }
  function Ym(e) {
    if (e.propertyName === "value" && _l(fs)) {
      var t = [];
      Lm(t, fs, e, Kd(e)), Sm(mw, t);
    }
  }
  function vw(e, t, r) {
    e === "focusin"
      ? (rh(), (Zo = t), (fs = r), Zo.attachEvent("onpropertychange", Ym))
      : e === "focusout" && rh();
  }
  function Aw(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _l(fs);
  }
  function ww(e, t) {
    if (e === "click") return _l(t);
  }
  function xw(e, t) {
    if (e === "input" || e === "change") return _l(t);
  }
  function Sw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wr = typeof Object.is == "function" ? Object.is : Sw;
  function ps(e, t) {
    if (wr(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (n = 0; n < r.length; n++) {
      var i = r[n];
      if (!Ac.call(t, i) || !wr(e[i], t[i])) return !1;
    }
    return !0;
  }
  function nh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ih(e, t) {
    var r = nh(e);
    e = 0;
    for (var n; r; ) {
      if (r.nodeType === 3) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = nh(r);
    }
  }
  function Wm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Wm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Jm() {
    for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ha(e.document);
    }
    return t;
  }
  function af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function kw(e) {
    var t = Jm(),
      r = e.focusedElem,
      n = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Wm(r.ownerDocument.documentElement, r)
    ) {
      if (n !== null && af(r)) {
        if (
          ((t = n.start),
          (e = n.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = r.textContent.length,
            o = Math.min(n.start, i);
          (n = n.end === void 0 ? o : Math.min(n.end, i)),
            !e.extend && o > n && ((i = n), (n = o), (o = i)),
            (i = ih(r, o));
          var s = ih(r, n);
          i &&
            s &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== s.node ||
              e.focusOffset !== s.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            o > n
              ? (e.addRange(t), e.extend(s.node, s.offset))
              : (t.setEnd(s.node, s.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Ew = sn && "documentMode" in document && 11 >= document.documentMode,
    _i = null,
    _c = null,
    qo = null,
    jc = !1;
  function oh(e, t, r) {
    var n =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    jc ||
      _i == null ||
      _i !== Ha(n) ||
      ((n = _i),
      "selectionStart" in n && af(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (qo && ps(qo, n)) ||
        ((qo = n),
        (n = qa(_c, "onSelect")),
        0 < n.length &&
          ((t = new nf("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: n }),
          (t.target = _i))));
  }
  function ta(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var ji = {
      animationend: ta("Animation", "AnimationEnd"),
      animationiteration: ta("Animation", "AnimationIteration"),
      animationstart: ta("Animation", "AnimationStart"),
      transitionend: ta("Transition", "TransitionEnd"),
    },
    _u = {},
    Hm = {};
  sn &&
    ((Hm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ji.animationend.animation,
      delete ji.animationiteration.animation,
      delete ji.animationstart.animation),
    "TransitionEvent" in window || delete ji.transitionend.transition);
  function jl(e) {
    if (_u[e]) return _u[e];
    if (!ji[e]) return e;
    var t = ji[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Hm) return (_u[e] = t[r]);
    return e;
  }
  var Vm = jl("animationend"),
    $m = jl("animationiteration"),
    Gm = jl("animationstart"),
    Xm = jl("transitionend"),
    Km = new Map(),
    sh =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Jn(e, t) {
    Km.set(e, t), wi(t, [e]);
  }
  for (var ju = 0; ju < sh.length; ju++) {
    var Fu = sh[ju],
      Cw = Fu.toLowerCase(),
      bw = Fu[0].toUpperCase() + Fu.slice(1);
    Jn(Cw, "on" + bw);
  }
  Jn(Vm, "onAnimationEnd");
  Jn($m, "onAnimationIteration");
  Jn(Gm, "onAnimationStart");
  Jn("dblclick", "onDoubleClick");
  Jn("focusin", "onFocus");
  Jn("focusout", "onBlur");
  Jn(Xm, "onTransitionEnd");
  ao("onMouseEnter", ["mouseout", "mouseover"]);
  ao("onMouseLeave", ["mouseout", "mouseover"]);
  ao("onPointerEnter", ["pointerout", "pointerover"]);
  ao("onPointerLeave", ["pointerout", "pointerover"]);
  wi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  wi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  wi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  wi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  wi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  wi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ho =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Iw = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ho)
    );
  function ah(e, t, r) {
    var n = e.type || "unknown-event";
    (e.currentTarget = r), C1(n, t, void 0, e), (e.currentTarget = null);
  }
  function Zm(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var n = e[r],
        i = n.event;
      n = n.listeners;
      e: {
        var o = void 0;
        if (t)
          for (var s = n.length - 1; 0 <= s; s--) {
            var a = n[s],
              l = a.instance,
              d = a.currentTarget;
            if (((a = a.listener), l !== o && i.isPropagationStopped()))
              break e;
            ah(i, a, d), (o = l);
          }
        else
          for (s = 0; s < n.length; s++) {
            if (
              ((a = n[s]),
              (l = a.instance),
              (d = a.currentTarget),
              (a = a.listener),
              l !== o && i.isPropagationStopped())
            )
              break e;
            ah(i, a, d), (o = l);
          }
      }
    }
    if ($a) throw ((e = Pc), ($a = !1), (Pc = null), e);
  }
  function Oe(e, t) {
    var r = t[Wc];
    r === void 0 && (r = t[Wc] = new Set());
    var n = e + "__bubble";
    r.has(n) || (qm(t, e, 2, !1), r.add(n));
  }
  function Lu(e, t, r) {
    var n = 0;
    t && (n |= 4), qm(r, e, n, t);
  }
  var ra = "_reactListening" + Math.random().toString(36).slice(2);
  function hs(e) {
    if (!e[ra]) {
      (e[ra] = !0),
        sm.forEach(function (r) {
          r !== "selectionchange" && (Iw.has(r) || Lu(r, !1, e), Lu(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ra] || ((t[ra] = !0), Lu("selectionchange", !1, t));
    }
  }
  function qm(e, t, r, n) {
    switch (Nm(t)) {
      case 1:
        var i = L1;
        break;
      case 4:
        i = U1;
        break;
      default:
        i = tf;
    }
    (r = i.bind(null, t, r, e)),
      (i = void 0),
      !Mc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      n
        ? i !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: i })
          : e.addEventListener(t, r, !0)
        : i !== void 0
        ? e.addEventListener(t, r, { passive: i })
        : e.addEventListener(t, r, !1);
  }
  function Uu(e, t, r, n, i) {
    var o = n;
    if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var a = n.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (s === 4)
            for (s = n.return; s !== null; ) {
              var l = s.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = s.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              s = s.return;
            }
          for (; a !== null; ) {
            if (((s = ti(a)), s === null)) return;
            if (((l = s.tag), l === 5 || l === 6)) {
              n = o = s;
              continue e;
            }
            a = a.parentNode;
          }
        }
        n = n.return;
      }
    Sm(function () {
      var d = o,
        p = Kd(r),
        h = [];
      e: {
        var y = Km.get(e);
        if (y !== void 0) {
          var x = nf,
            S = e;
          switch (e) {
            case "keypress":
              if (Ra(r) === 0) break e;
            case "keydown":
            case "keyup":
              x = nw;
              break;
            case "focusin":
              (S = "focus"), (x = zu);
              break;
            case "focusout":
              (S = "blur"), (x = zu);
              break;
            case "beforeblur":
            case "afterblur":
              x = zu;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Gp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = J1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = sw;
              break;
            case Vm:
            case $m:
            case Gm:
              x = $1;
              break;
            case Xm:
              x = lw;
              break;
            case "scroll":
              x = Y1;
              break;
            case "wheel":
              x = cw;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = X1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Kp;
          }
          var E = (t & 4) !== 0,
            D = !E && e === "scroll",
            A = E ? (y !== null ? y + "Capture" : null) : y;
          E = [];
          for (var m = d, v; m !== null; ) {
            v = m;
            var k = v.stateNode;
            if (
              (v.tag === 5 &&
                k !== null &&
                ((v = k),
                A !== null &&
                  ((k = ls(m, A)), k != null && E.push(gs(m, k, v)))),
              D)
            )
              break;
            m = m.return;
          }
          0 < E.length &&
            ((y = new x(y, S, null, r, p)), h.push({ event: y, listeners: E }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((y = e === "mouseover" || e === "pointerover"),
            (x = e === "mouseout" || e === "pointerout"),
            y &&
              r !== Oc &&
              (S = r.relatedTarget || r.fromElement) &&
              (ti(S) || S[an]))
          )
            break e;
          if (
            (x || y) &&
            ((y =
              p.window === p
                ? p
                : (y = p.ownerDocument)
                ? y.defaultView || y.parentWindow
                : window),
            x
              ? ((S = r.relatedTarget || r.toElement),
                (x = d),
                (S = S ? ti(S) : null),
                S !== null &&
                  ((D = xi(S)), S !== D || (S.tag !== 5 && S.tag !== 6)) &&
                  (S = null))
              : ((x = null), (S = d)),
            x !== S)
          ) {
            if (
              ((E = Gp),
              (k = "onMouseLeave"),
              (A = "onMouseEnter"),
              (m = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((E = Kp),
                (k = "onPointerLeave"),
                (A = "onPointerEnter"),
                (m = "pointer")),
              (D = x == null ? y : Fi(x)),
              (v = S == null ? y : Fi(S)),
              (y = new E(k, m + "leave", x, r, p)),
              (y.target = D),
              (y.relatedTarget = v),
              (k = null),
              ti(p) === d &&
                ((E = new E(A, m + "enter", S, r, p)),
                (E.target = v),
                (E.relatedTarget = D),
                (k = E)),
              (D = k),
              x && S)
            )
              t: {
                for (E = x, A = S, m = 0, v = E; v; v = Ri(v)) m++;
                for (v = 0, k = A; k; k = Ri(k)) v++;
                for (; 0 < m - v; ) (E = Ri(E)), m--;
                for (; 0 < v - m; ) (A = Ri(A)), v--;
                for (; m--; ) {
                  if (E === A || (A !== null && E === A.alternate)) break t;
                  (E = Ri(E)), (A = Ri(A));
                }
                E = null;
              }
            else E = null;
            x !== null && lh(h, y, x, E, !1),
              S !== null && D !== null && lh(h, D, S, E, !0);
          }
        }
        e: {
          if (
            ((y = d ? Fi(d) : window),
            (x = y.nodeName && y.nodeName.toLowerCase()),
            x === "select" || (x === "input" && y.type === "file"))
          )
            var I = yw;
          else if (eh(y))
            if (Um) I = xw;
            else {
              I = Aw;
              var R = vw;
            }
          else
            (x = y.nodeName) &&
              x.toLowerCase() === "input" &&
              (y.type === "checkbox" || y.type === "radio") &&
              (I = ww);
          if (I && (I = I(e, d))) {
            Lm(h, I, r, p);
            break e;
          }
          R && R(e, y, d),
            e === "focusout" &&
              (R = y._wrapperState) &&
              R.controlled &&
              y.type === "number" &&
              bc(y, "number", y.value);
        }
        switch (((R = d ? Fi(d) : window), e)) {
          case "focusin":
            (eh(R) || R.contentEditable === "true") &&
              ((_i = R), (_c = d), (qo = null));
            break;
          case "focusout":
            qo = _c = _i = null;
            break;
          case "mousedown":
            jc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (jc = !1), oh(h, r, p);
            break;
          case "selectionchange":
            if (Ew) break;
          case "keydown":
          case "keyup":
            oh(h, r, p);
        }
        var M;
        if (sf)
          e: {
            switch (e) {
              case "compositionstart":
                var F = "onCompositionStart";
                break e;
              case "compositionend":
                F = "onCompositionEnd";
                break e;
              case "compositionupdate":
                F = "onCompositionUpdate";
                break e;
            }
            F = void 0;
          }
        else
          Qi
            ? jm(e, r) && (F = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (F = "onCompositionStart");
        F &&
          (_m &&
            r.locale !== "ko" &&
            (Qi || F !== "onCompositionStart"
              ? F === "onCompositionEnd" && Qi && (M = Qm())
              : ((Cn = p),
                (rf = "value" in Cn ? Cn.value : Cn.textContent),
                (Qi = !0))),
          (R = qa(d, F)),
          0 < R.length &&
            ((F = new Xp(F, e, null, r, p)),
            h.push({ event: F, listeners: R }),
            M ? (F.data = M) : ((M = Fm(r)), M !== null && (F.data = M)))),
          (M = fw ? pw(e, r) : hw(e, r)) &&
            ((d = qa(d, "onBeforeInput")),
            0 < d.length &&
              ((p = new Xp("onBeforeInput", "beforeinput", null, r, p)),
              h.push({ event: p, listeners: d }),
              (p.data = M)));
      }
      Zm(h, t);
    });
  }
  function gs(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function qa(e, t) {
    for (var r = t + "Capture", n = []; e !== null; ) {
      var i = e,
        o = i.stateNode;
      i.tag === 5 &&
        o !== null &&
        ((i = o),
        (o = ls(e, r)),
        o != null && n.unshift(gs(e, o, i)),
        (o = ls(e, t)),
        o != null && n.push(gs(e, o, i))),
        (e = e.return);
    }
    return n;
  }
  function Ri(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function lh(e, t, r, n, i) {
    for (var o = t._reactName, s = []; r !== null && r !== n; ) {
      var a = r,
        l = a.alternate,
        d = a.stateNode;
      if (l !== null && l === n) break;
      a.tag === 5 &&
        d !== null &&
        ((a = d),
        i
          ? ((l = ls(r, o)), l != null && s.unshift(gs(r, l, a)))
          : i || ((l = ls(r, o)), l != null && s.push(gs(r, l, a)))),
        (r = r.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var Bw = /\r\n?/g,
    Rw = /\u0000|\uFFFD/g;
  function uh(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bw,
        `
`
      )
      .replace(Rw, "");
  }
  function na(e, t, r) {
    if (((t = uh(t)), uh(e) !== t && r)) throw Error(Y(425));
  }
  function el() {}
  var Fc = null,
    Lc = null;
  function Uc(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yc = typeof setTimeout == "function" ? setTimeout : void 0,
    Dw = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ch = typeof Promise == "function" ? Promise : void 0,
    Ow =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ch < "u"
        ? function (e) {
            return ch.resolve(null).then(e).catch(Tw);
          }
        : Yc;
  function Tw(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Yu(e, t) {
    var r = t,
      n = 0;
    do {
      var i = r.nextSibling;
      if ((e.removeChild(r), i && i.nodeType === 8))
        if (((r = i.data), r === "/$")) {
          if (n === 0) {
            e.removeChild(i), ds(t);
            return;
          }
          n--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
      r = i;
    } while (r);
    ds(t);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function dh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Co = Math.random().toString(36).slice(2),
    Mr = "__reactFiber$" + Co,
    ms = "__reactProps$" + Co,
    an = "__reactContainer$" + Co,
    Wc = "__reactEvents$" + Co,
    Mw = "__reactListeners$" + Co,
    Pw = "__reactHandles$" + Co;
  function ti(e) {
    var t = e[Mr];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[an] || r[Mr])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = dh(e); e !== null; ) {
            if ((r = e[Mr])) return r;
            e = dh(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function Qs(e) {
    return (
      (e = e[Mr] || e[an]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Fi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(Y(33));
  }
  function Fl(e) {
    return e[ms] || null;
  }
  var Jc = [],
    Li = -1;
  function Hn(e) {
    return { current: e };
  }
  function Me(e) {
    0 > Li || ((e.current = Jc[Li]), (Jc[Li] = null), Li--);
  }
  function Be(e, t) {
    Li++, (Jc[Li] = e.current), (e.current = t);
  }
  var Fn = {},
    kt = Hn(Fn),
    Ot = Hn(!1),
    di = Fn;
  function lo(e, t) {
    var r = e.type.contextTypes;
    if (!r) return Fn;
    var n = e.stateNode;
    if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      o;
    for (o in r) i[o] = t[o];
    return (
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Tt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function tl() {
    Me(Ot), Me(kt);
  }
  function fh(e, t, r) {
    if (kt.current !== Fn) throw Error(Y(168));
    Be(kt, t), Be(Ot, r);
  }
  function e0(e, t, r) {
    var n = e.stateNode;
    if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
      return r;
    n = n.getChildContext();
    for (var i in n) if (!(i in t)) throw Error(Y(108, v1(e) || "Unknown", i));
    return Le({}, r, n);
  }
  function rl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (di = kt.current),
      Be(kt, e),
      Be(Ot, Ot.current),
      !0
    );
  }
  function ph(e, t, r) {
    var n = e.stateNode;
    if (!n) throw Error(Y(169));
    r
      ? ((e = e0(e, t, di)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        Me(Ot),
        Me(kt),
        Be(kt, e))
      : Me(Ot),
      Be(Ot, r);
  }
  var Xr = null,
    Ll = !1,
    Wu = !1;
  function t0(e) {
    Xr === null ? (Xr = [e]) : Xr.push(e);
  }
  function zw(e) {
    (Ll = !0), t0(e);
  }
  function Vn() {
    if (!Wu && Xr !== null) {
      Wu = !0;
      var e = 0,
        t = Ce;
      try {
        var r = Xr;
        for (Ce = 1; e < r.length; e++) {
          var n = r[e];
          do n = n(!0);
          while (n !== null);
        }
        (Xr = null), (Ll = !1);
      } catch (i) {
        throw (Xr !== null && (Xr = Xr.slice(e + 1)), bm(Zd, Vn), i);
      } finally {
        (Ce = t), (Wu = !1);
      }
    }
    return null;
  }
  var Ui = [],
    Yi = 0,
    nl = null,
    il = 0,
    Zt = [],
    qt = 0,
    fi = null,
    Zr = 1,
    qr = "";
  function Kn(e, t) {
    (Ui[Yi++] = il), (Ui[Yi++] = nl), (nl = e), (il = t);
  }
  function r0(e, t, r) {
    (Zt[qt++] = Zr), (Zt[qt++] = qr), (Zt[qt++] = fi), (fi = e);
    var n = Zr;
    e = qr;
    var i = 32 - yr(n) - 1;
    (n &= ~(1 << i)), (r += 1);
    var o = 32 - yr(t) + i;
    if (30 < o) {
      var s = i - (i % 5);
      (o = (n & ((1 << s) - 1)).toString(32)),
        (n >>= s),
        (i -= s),
        (Zr = (1 << (32 - yr(t) + i)) | (r << i) | n),
        (qr = o + e);
    } else (Zr = (1 << o) | (r << i) | n), (qr = e);
  }
  function lf(e) {
    e.return !== null && (Kn(e, 1), r0(e, 1, 0));
  }
  function uf(e) {
    for (; e === nl; )
      (nl = Ui[--Yi]), (Ui[Yi] = null), (il = Ui[--Yi]), (Ui[Yi] = null);
    for (; e === fi; )
      (fi = Zt[--qt]),
        (Zt[qt] = null),
        (qr = Zt[--qt]),
        (Zt[qt] = null),
        (Zr = Zt[--qt]),
        (Zt[qt] = null);
  }
  var Ut = null,
    Ft = null,
    _e = !1,
    hr = null;
  function n0(e, t) {
    var r = tr(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function hh(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Ut = e), (Ft = Tn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Ut = e), (Ft = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = fi !== null ? { id: Zr, overflow: qr } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = tr(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (Ut = e),
              (Ft = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Hc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Vc(e) {
    if (_e) {
      var t = Ft;
      if (t) {
        var r = t;
        if (!hh(e, t)) {
          if (Hc(e)) throw Error(Y(418));
          t = Tn(r.nextSibling);
          var n = Ut;
          t && hh(e, t)
            ? n0(n, r)
            : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (Ut = e));
        }
      } else {
        if (Hc(e)) throw Error(Y(418));
        (e.flags = (e.flags & -4097) | 2), (_e = !1), (Ut = e);
      }
    }
  }
  function gh(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Ut = e;
  }
  function ia(e) {
    if (e !== Ut) return !1;
    if (!_e) return gh(e), (_e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Uc(e.type, e.memoizedProps))),
      t && (t = Ft))
    ) {
      if (Hc(e)) throw (i0(), Error(Y(418)));
      for (; t; ) n0(e, t), (t = Tn(t.nextSibling));
    }
    if ((gh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(Y(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                Ft = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ft = null;
      }
    } else Ft = Ut ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function i0() {
    for (var e = Ft; e; ) e = Tn(e.nextSibling);
  }
  function uo() {
    (Ft = Ut = null), (_e = !1);
  }
  function cf(e) {
    hr === null ? (hr = [e]) : hr.push(e);
  }
  var Nw = pn.ReactCurrentBatchConfig;
  function fr(e, t) {
    if (e && e.defaultProps) {
      (t = Le({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  var ol = Hn(null),
    sl = null,
    Wi = null,
    df = null;
  function ff() {
    df = Wi = sl = null;
  }
  function pf(e) {
    var t = ol.current;
    Me(ol), (e._currentValue = t);
  }
  function $c(e, t, r) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function ro(e, t) {
    (sl = e),
      (df = Wi = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (Dt = !0), (e.firstContext = null));
  }
  function nr(e) {
    var t = e._currentValue;
    if (df !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Wi === null)) {
        if (sl === null) throw Error(Y(308));
        (Wi = e), (sl.dependencies = { lanes: 0, firstContext: e });
      } else Wi = Wi.next = e;
    return t;
  }
  var ri = null;
  function hf(e) {
    ri === null ? (ri = [e]) : ri.push(e);
  }
  function o0(e, t, r, n) {
    var i = t.interleaved;
    return (
      i === null ? ((r.next = r), hf(t)) : ((r.next = i.next), (i.next = r)),
      (t.interleaved = r),
      ln(e, n)
    );
  }
  function ln(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var Sn = !1;
  function gf(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function s0(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function rn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Mn(e, t, r) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), ye & 2)) {
      var i = n.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (n.pending = t),
        ln(e, r)
      );
    }
    return (
      (i = n.interleaved),
      i === null ? ((t.next = t), hf(n)) : ((t.next = i.next), (i.next = t)),
      (n.interleaved = t),
      ln(e, r)
    );
  }
  function Da(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), qd(e, r);
    }
  }
  function mh(e, t) {
    var r = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), r === n)) {
      var i = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var s = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          o === null ? (i = o = s) : (o = o.next = s), (r = r.next);
        } while (r !== null);
        o === null ? (i = o = t) : (o = o.next = t);
      } else i = o = t;
      (r = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: o,
        shared: n.shared,
        effects: n.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function al(e, t, r, n) {
    var i = e.updateQueue;
    Sn = !1;
    var o = i.firstBaseUpdate,
      s = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a,
        d = l.next;
      (l.next = null), s === null ? (o = d) : (s.next = d), (s = l);
      var p = e.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (a = p.lastBaseUpdate),
        a !== s &&
          (a === null ? (p.firstBaseUpdate = d) : (a.next = d),
          (p.lastBaseUpdate = l)));
    }
    if (o !== null) {
      var h = i.baseState;
      (s = 0), (p = d = l = null), (a = o);
      do {
        var y = a.lane,
          x = a.eventTime;
        if ((n & y) === y) {
          p !== null &&
            (p = p.next =
              {
                eventTime: x,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var S = e,
              E = a;
            switch (((y = t), (x = r), E.tag)) {
              case 1:
                if (((S = E.payload), typeof S == "function")) {
                  h = S.call(x, h, y);
                  break e;
                }
                h = S;
                break e;
              case 3:
                S.flags = (S.flags & -65537) | 128;
              case 0:
                if (
                  ((S = E.payload),
                  (y = typeof S == "function" ? S.call(x, h, y) : S),
                  y == null)
                )
                  break e;
                h = Le({}, h, y);
                break e;
              case 2:
                Sn = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (y = i.effects),
            y === null ? (i.effects = [a]) : y.push(a));
        } else
          (x = {
            eventTime: x,
            lane: y,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            p === null ? ((d = p = x), (l = h)) : (p = p.next = x),
            (s |= y);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (y = a),
            (a = y.next),
            (y.next = null),
            (i.lastBaseUpdate = y),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (p === null && (l = h),
        (i.baseState = l),
        (i.firstBaseUpdate = d),
        (i.lastBaseUpdate = p),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (s |= i.lane), (i = i.next);
        while (i !== t);
      } else o === null && (i.shared.lanes = 0);
      (hi |= s), (e.lanes = s), (e.memoizedState = h);
    }
  }
  function yh(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var n = e[t],
          i = n.callback;
        if (i !== null) {
          if (((n.callback = null), (n = r), typeof i != "function"))
            throw Error(Y(191, i));
          i.call(n);
        }
      }
  }
  var a0 = new om.Component().refs;
  function Gc(e, t, r, n) {
    (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : Le({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ul = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? xi(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = Ct(),
        i = zn(e),
        o = rn(n, i);
      (o.payload = t),
        r != null && (o.callback = r),
        (t = Mn(e, o, i)),
        t !== null && (vr(t, e, i, n), Da(t, e, i));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = Ct(),
        i = zn(e),
        o = rn(n, i);
      (o.tag = 1),
        (o.payload = t),
        r != null && (o.callback = r),
        (t = Mn(e, o, i)),
        t !== null && (vr(t, e, i, n), Da(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = Ct(),
        n = zn(e),
        i = rn(r, n);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Mn(e, i, n)),
        t !== null && (vr(t, e, n, r), Da(t, e, n));
    },
  };
  function vh(e, t, r, n, i, o, s) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, o, s)
        : t.prototype && t.prototype.isPureReactComponent
        ? !ps(r, n) || !ps(i, o)
        : !0
    );
  }
  function l0(e, t, r) {
    var n = !1,
      i = Fn,
      o = t.contextType;
    return (
      typeof o == "object" && o !== null
        ? (o = nr(o))
        : ((i = Tt(t) ? di : kt.current),
          (n = t.contextTypes),
          (o = (n = n != null) ? lo(e, i) : Fn)),
      (t = new t(r, o)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ul),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      t
    );
  }
  function Ah(e, t, r, n) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && Ul.enqueueReplaceState(t, t.state, null);
  }
  function Xc(e, t, r, n) {
    var i = e.stateNode;
    (i.props = r), (i.state = e.memoizedState), (i.refs = a0), gf(e);
    var o = t.contextType;
    typeof o == "object" && o !== null
      ? (i.context = nr(o))
      : ((o = Tt(t) ? di : kt.current), (i.context = lo(e, o))),
      (i.state = e.memoizedState),
      (o = t.getDerivedStateFromProps),
      typeof o == "function" && (Gc(e, t, o, r), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Ul.enqueueReplaceState(i, i.state, null),
        al(e, r, i, n),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Qo(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(Y(309));
          var n = r.stateNode;
        }
        if (!n) throw Error(Y(147, e));
        var i = n,
          o = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === o
          ? t.ref
          : ((t = function (s) {
              var a = i.refs;
              a === a0 && (a = i.refs = {}),
                s === null ? delete a[o] : (a[o] = s);
            }),
            (t._stringRef = o),
            t);
      }
      if (typeof e != "string") throw Error(Y(284));
      if (!r._owner) throw Error(Y(290, e));
    }
    return e;
  }
  function oa(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        Y(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function wh(e) {
    var t = e._init;
    return t(e._payload);
  }
  function u0(e) {
    function t(A, m) {
      if (e) {
        var v = A.deletions;
        v === null ? ((A.deletions = [m]), (A.flags |= 16)) : v.push(m);
      }
    }
    function r(A, m) {
      if (!e) return null;
      for (; m !== null; ) t(A, m), (m = m.sibling);
      return null;
    }
    function n(A, m) {
      for (A = new Map(); m !== null; )
        m.key !== null ? A.set(m.key, m) : A.set(m.index, m), (m = m.sibling);
      return A;
    }
    function i(A, m) {
      return (A = Nn(A, m)), (A.index = 0), (A.sibling = null), A;
    }
    function o(A, m, v) {
      return (
        (A.index = v),
        e
          ? ((v = A.alternate),
            v !== null
              ? ((v = v.index), v < m ? ((A.flags |= 2), m) : v)
              : ((A.flags |= 2), m))
          : ((A.flags |= 1048576), m)
      );
    }
    function s(A) {
      return e && A.alternate === null && (A.flags |= 2), A;
    }
    function a(A, m, v, k) {
      return m === null || m.tag !== 6
        ? ((m = Ku(v, A.mode, k)), (m.return = A), m)
        : ((m = i(m, v)), (m.return = A), m);
    }
    function l(A, m, v, k) {
      var I = v.type;
      return I === Ni
        ? p(A, m, v.props.children, k, v.key)
        : m !== null &&
          (m.elementType === I ||
            (typeof I == "object" &&
              I !== null &&
              I.$$typeof === xn &&
              wh(I) === m.type))
        ? ((k = i(m, v.props)), (k.ref = Qo(A, m, v)), (k.return = A), k)
        : ((k = Na(v.type, v.key, v.props, null, A.mode, k)),
          (k.ref = Qo(A, m, v)),
          (k.return = A),
          k);
    }
    function d(A, m, v, k) {
      return m === null ||
        m.tag !== 4 ||
        m.stateNode.containerInfo !== v.containerInfo ||
        m.stateNode.implementation !== v.implementation
        ? ((m = Zu(v, A.mode, k)), (m.return = A), m)
        : ((m = i(m, v.children || [])), (m.return = A), m);
    }
    function p(A, m, v, k, I) {
      return m === null || m.tag !== 7
        ? ((m = li(v, A.mode, k, I)), (m.return = A), m)
        : ((m = i(m, v)), (m.return = A), m);
    }
    function h(A, m, v) {
      if ((typeof m == "string" && m !== "") || typeof m == "number")
        return (m = Ku("" + m, A.mode, v)), (m.return = A), m;
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case $s:
            return (
              (v = Na(m.type, m.key, m.props, null, A.mode, v)),
              (v.ref = Qo(A, null, m)),
              (v.return = A),
              v
            );
          case zi:
            return (m = Zu(m, A.mode, v)), (m.return = A), m;
          case xn:
            var k = m._init;
            return h(A, k(m._payload), v);
        }
        if (Wo(m) || To(m))
          return (m = li(m, A.mode, v, null)), (m.return = A), m;
        oa(A, m);
      }
      return null;
    }
    function y(A, m, v, k) {
      var I = m !== null ? m.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
        return I !== null ? null : a(A, m, "" + v, k);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case $s:
            return v.key === I ? l(A, m, v, k) : null;
          case zi:
            return v.key === I ? d(A, m, v, k) : null;
          case xn:
            return (I = v._init), y(A, m, I(v._payload), k);
        }
        if (Wo(v) || To(v)) return I !== null ? null : p(A, m, v, k, null);
        oa(A, v);
      }
      return null;
    }
    function x(A, m, v, k, I) {
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return (A = A.get(v) || null), a(m, A, "" + k, I);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case $s:
            return (
              (A = A.get(k.key === null ? v : k.key) || null), l(m, A, k, I)
            );
          case zi:
            return (
              (A = A.get(k.key === null ? v : k.key) || null), d(m, A, k, I)
            );
          case xn:
            var R = k._init;
            return x(A, m, v, R(k._payload), I);
        }
        if (Wo(k) || To(k)) return (A = A.get(v) || null), p(m, A, k, I, null);
        oa(m, k);
      }
      return null;
    }
    function S(A, m, v, k) {
      for (
        var I = null, R = null, M = m, F = (m = 0), re = null;
        M !== null && F < v.length;
        F++
      ) {
        M.index > F ? ((re = M), (M = null)) : (re = M.sibling);
        var G = y(A, M, v[F], k);
        if (G === null) {
          M === null && (M = re);
          break;
        }
        e && M && G.alternate === null && t(A, M),
          (m = o(G, m, F)),
          R === null ? (I = G) : (R.sibling = G),
          (R = G),
          (M = re);
      }
      if (F === v.length) return r(A, M), _e && Kn(A, F), I;
      if (M === null) {
        for (; F < v.length; F++)
          (M = h(A, v[F], k)),
            M !== null &&
              ((m = o(M, m, F)),
              R === null ? (I = M) : (R.sibling = M),
              (R = M));
        return _e && Kn(A, F), I;
      }
      for (M = n(A, M); F < v.length; F++)
        (re = x(M, A, F, v[F], k)),
          re !== null &&
            (e &&
              re.alternate !== null &&
              M.delete(re.key === null ? F : re.key),
            (m = o(re, m, F)),
            R === null ? (I = re) : (R.sibling = re),
            (R = re));
      return (
        e &&
          M.forEach(function (oe) {
            return t(A, oe);
          }),
        _e && Kn(A, F),
        I
      );
    }
    function E(A, m, v, k) {
      var I = To(v);
      if (typeof I != "function") throw Error(Y(150));
      if (((v = I.call(v)), v == null)) throw Error(Y(151));
      for (
        var R = (I = null), M = m, F = (m = 0), re = null, G = v.next();
        M !== null && !G.done;
        F++, G = v.next()
      ) {
        M.index > F ? ((re = M), (M = null)) : (re = M.sibling);
        var oe = y(A, M, G.value, k);
        if (oe === null) {
          M === null && (M = re);
          break;
        }
        e && M && oe.alternate === null && t(A, M),
          (m = o(oe, m, F)),
          R === null ? (I = oe) : (R.sibling = oe),
          (R = oe),
          (M = re);
      }
      if (G.done) return r(A, M), _e && Kn(A, F), I;
      if (M === null) {
        for (; !G.done; F++, G = v.next())
          (G = h(A, G.value, k)),
            G !== null &&
              ((m = o(G, m, F)),
              R === null ? (I = G) : (R.sibling = G),
              (R = G));
        return _e && Kn(A, F), I;
      }
      for (M = n(A, M); !G.done; F++, G = v.next())
        (G = x(M, A, F, G.value, k)),
          G !== null &&
            (e && G.alternate !== null && M.delete(G.key === null ? F : G.key),
            (m = o(G, m, F)),
            R === null ? (I = G) : (R.sibling = G),
            (R = G));
      return (
        e &&
          M.forEach(function (ne) {
            return t(A, ne);
          }),
        _e && Kn(A, F),
        I
      );
    }
    function D(A, m, v, k) {
      if (
        (typeof v == "object" &&
          v !== null &&
          v.type === Ni &&
          v.key === null &&
          (v = v.props.children),
        typeof v == "object" && v !== null)
      ) {
        switch (v.$$typeof) {
          case $s:
            e: {
              for (var I = v.key, R = m; R !== null; ) {
                if (R.key === I) {
                  if (((I = v.type), I === Ni)) {
                    if (R.tag === 7) {
                      r(A, R.sibling),
                        (m = i(R, v.props.children)),
                        (m.return = A),
                        (A = m);
                      break e;
                    }
                  } else if (
                    R.elementType === I ||
                    (typeof I == "object" &&
                      I !== null &&
                      I.$$typeof === xn &&
                      wh(I) === R.type)
                  ) {
                    r(A, R.sibling),
                      (m = i(R, v.props)),
                      (m.ref = Qo(A, R, v)),
                      (m.return = A),
                      (A = m);
                    break e;
                  }
                  r(A, R);
                  break;
                } else t(A, R);
                R = R.sibling;
              }
              v.type === Ni
                ? ((m = li(v.props.children, A.mode, k, v.key)),
                  (m.return = A),
                  (A = m))
                : ((k = Na(v.type, v.key, v.props, null, A.mode, k)),
                  (k.ref = Qo(A, m, v)),
                  (k.return = A),
                  (A = k));
            }
            return s(A);
          case zi:
            e: {
              for (R = v.key; m !== null; ) {
                if (m.key === R)
                  if (
                    m.tag === 4 &&
                    m.stateNode.containerInfo === v.containerInfo &&
                    m.stateNode.implementation === v.implementation
                  ) {
                    r(A, m.sibling),
                      (m = i(m, v.children || [])),
                      (m.return = A),
                      (A = m);
                    break e;
                  } else {
                    r(A, m);
                    break;
                  }
                else t(A, m);
                m = m.sibling;
              }
              (m = Zu(v, A.mode, k)), (m.return = A), (A = m);
            }
            return s(A);
          case xn:
            return (R = v._init), D(A, m, R(v._payload), k);
        }
        if (Wo(v)) return S(A, m, v, k);
        if (To(v)) return E(A, m, v, k);
        oa(A, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
        ? ((v = "" + v),
          m !== null && m.tag === 6
            ? (r(A, m.sibling), (m = i(m, v)), (m.return = A), (A = m))
            : (r(A, m), (m = Ku(v, A.mode, k)), (m.return = A), (A = m)),
          s(A))
        : r(A, m);
    }
    return D;
  }
  var co = u0(!0),
    c0 = u0(!1),
    _s = {},
    Nr = Hn(_s),
    ys = Hn(_s),
    vs = Hn(_s);
  function ni(e) {
    if (e === _s) throw Error(Y(174));
    return e;
  }
  function mf(e, t) {
    switch ((Be(vs, t), Be(ys, e), Be(Nr, _s), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bc(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Bc(t, e));
    }
    Me(Nr), Be(Nr, t);
  }
  function fo() {
    Me(Nr), Me(ys), Me(vs);
  }
  function d0(e) {
    ni(vs.current);
    var t = ni(Nr.current),
      r = Bc(t, e.type);
    t !== r && (Be(ys, e), Be(Nr, r));
  }
  function yf(e) {
    ys.current === e && (Me(Nr), Me(ys));
  }
  var je = Hn(0);
  function ll(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ju = [];
  function vf() {
    for (var e = 0; e < Ju.length; e++)
      Ju[e]._workInProgressVersionPrimary = null;
    Ju.length = 0;
  }
  var Oa = pn.ReactCurrentDispatcher,
    Hu = pn.ReactCurrentBatchConfig,
    pi = 0,
    Fe = null,
    rt = null,
    at = null,
    ul = !1,
    es = !1,
    As = 0,
    Qw = 0;
  function yt() {
    throw Error(Y(321));
  }
  function Af(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!wr(e[r], t[r])) return !1;
    return !0;
  }
  function wf(e, t, r, n, i, o) {
    if (
      ((pi = o),
      (Fe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Oa.current = e === null || e.memoizedState === null ? Lw : Uw),
      (e = r(n, i)),
      es)
    ) {
      o = 0;
      do {
        if (((es = !1), (As = 0), 25 <= o)) throw Error(Y(301));
        (o += 1),
          (at = rt = null),
          (t.updateQueue = null),
          (Oa.current = Yw),
          (e = r(n, i));
      } while (es);
    }
    if (
      ((Oa.current = cl),
      (t = rt !== null && rt.next !== null),
      (pi = 0),
      (at = rt = Fe = null),
      (ul = !1),
      t)
    )
      throw Error(Y(300));
    return e;
  }
  function xf() {
    var e = As !== 0;
    return (As = 0), e;
  }
  function Ir() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return at === null ? (Fe.memoizedState = at = e) : (at = at.next = e), at;
  }
  function ir() {
    if (rt === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var t = at === null ? Fe.memoizedState : at.next;
    if (t !== null) (at = t), (rt = e);
    else {
      if (e === null) throw Error(Y(310));
      (rt = e),
        (e = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null,
        }),
        at === null ? (Fe.memoizedState = at = e) : (at = at.next = e);
    }
    return at;
  }
  function ws(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vu(e) {
    var t = ir(),
      r = t.queue;
    if (r === null) throw Error(Y(311));
    r.lastRenderedReducer = e;
    var n = rt,
      i = n.baseQueue,
      o = r.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        (i.next = o.next), (o.next = s);
      }
      (n.baseQueue = i = o), (r.pending = null);
    }
    if (i !== null) {
      (o = i.next), (n = n.baseState);
      var a = (s = null),
        l = null,
        d = o;
      do {
        var p = d.lane;
        if ((pi & p) === p)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null,
              }),
            (n = d.hasEagerState ? d.eagerState : e(n, d.action));
        else {
          var h = {
            lane: p,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null,
          };
          l === null ? ((a = l = h), (s = n)) : (l = l.next = h),
            (Fe.lanes |= p),
            (hi |= p);
        }
        d = d.next;
      } while (d !== null && d !== o);
      l === null ? (s = n) : (l.next = a),
        wr(n, t.memoizedState) || (Dt = !0),
        (t.memoizedState = n),
        (t.baseState = s),
        (t.baseQueue = l),
        (r.lastRenderedState = n);
    }
    if (((e = r.interleaved), e !== null)) {
      i = e;
      do (o = i.lane), (Fe.lanes |= o), (hi |= o), (i = i.next);
      while (i !== e);
    } else i === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function $u(e) {
    var t = ir(),
      r = t.queue;
    if (r === null) throw Error(Y(311));
    r.lastRenderedReducer = e;
    var n = r.dispatch,
      i = r.pending,
      o = t.memoizedState;
    if (i !== null) {
      r.pending = null;
      var s = (i = i.next);
      do (o = e(o, s.action)), (s = s.next);
      while (s !== i);
      wr(o, t.memoizedState) || (Dt = !0),
        (t.memoizedState = o),
        t.baseQueue === null && (t.baseState = o),
        (r.lastRenderedState = o);
    }
    return [o, n];
  }
  function f0() {}
  function p0(e, t) {
    var r = Fe,
      n = ir(),
      i = t(),
      o = !wr(n.memoizedState, i);
    if (
      (o && ((n.memoizedState = i), (Dt = !0)),
      (n = n.queue),
      Sf(m0.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || o || (at !== null && at.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        xs(9, g0.bind(null, r, n, i, t), void 0, null),
        dt === null)
      )
        throw Error(Y(349));
      pi & 30 || h0(r, t, i);
    }
    return i;
  }
  function h0(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function g0(e, t, r, n) {
    (t.value = r), (t.getSnapshot = n), y0(t) && v0(e);
  }
  function m0(e, t, r) {
    return r(function () {
      y0(t) && v0(e);
    });
  }
  function y0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !wr(e, r);
    } catch {
      return !0;
    }
  }
  function v0(e) {
    var t = ln(e, 1);
    t !== null && vr(t, e, 1, -1);
  }
  function xh(e) {
    var t = Ir();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ws,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Fw.bind(null, Fe, e)),
      [t.memoizedState, e]
    );
  }
  function xs(e, t, r, n) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = Fe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Fe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
    );
  }
  function A0() {
    return ir().memoizedState;
  }
  function Ta(e, t, r, n) {
    var i = Ir();
    (Fe.flags |= e),
      (i.memoizedState = xs(1 | t, r, void 0, n === void 0 ? null : n));
  }
  function Yl(e, t, r, n) {
    var i = ir();
    n = n === void 0 ? null : n;
    var o = void 0;
    if (rt !== null) {
      var s = rt.memoizedState;
      if (((o = s.destroy), n !== null && Af(n, s.deps))) {
        i.memoizedState = xs(t, r, o, n);
        return;
      }
    }
    (Fe.flags |= e), (i.memoizedState = xs(1 | t, r, o, n));
  }
  function Sh(e, t) {
    return Ta(8390656, 8, e, t);
  }
  function Sf(e, t) {
    return Yl(2048, 8, e, t);
  }
  function w0(e, t) {
    return Yl(4, 2, e, t);
  }
  function x0(e, t) {
    return Yl(4, 4, e, t);
  }
  function S0(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function k0(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), Yl(4, 4, S0.bind(null, t, e), r)
    );
  }
  function kf() {}
  function E0(e, t) {
    var r = ir();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function C0(e, t) {
    var r = ir();
    t = t === void 0 ? null : t;
    var n = r.memoizedState;
    return n !== null && t !== null && Af(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function b0(e, t, r) {
    return pi & 21
      ? (wr(r, t) ||
          ((r = Rm()), (Fe.lanes |= r), (hi |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (Dt = !0)), (e.memoizedState = r));
  }
  function _w(e, t) {
    var r = Ce;
    (Ce = r !== 0 && 4 > r ? r : 4), e(!0);
    var n = Hu.transition;
    Hu.transition = {};
    try {
      e(!1), t();
    } finally {
      (Ce = r), (Hu.transition = n);
    }
  }
  function I0() {
    return ir().memoizedState;
  }
  function jw(e, t, r) {
    var n = zn(e);
    if (
      ((r = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      B0(e))
    )
      R0(t, r);
    else if (((r = o0(e, t, r, n)), r !== null)) {
      var i = Ct();
      vr(r, e, n, i), D0(r, t, n);
    }
  }
  function Fw(e, t, r) {
    var n = zn(e),
      i = {
        lane: n,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (B0(e)) R0(t, i);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var s = t.lastRenderedState,
            a = o(s, r);
          if (((i.hasEagerState = !0), (i.eagerState = a), wr(a, s))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), hf(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (r = o0(e, t, i, n)),
        r !== null && ((i = Ct()), vr(r, e, n, i), D0(r, t, n));
    }
  }
  function B0(e) {
    var t = e.alternate;
    return e === Fe || (t !== null && t === Fe);
  }
  function R0(e, t) {
    es = ul = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function D0(e, t, r) {
    if (r & 4194240) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), qd(e, r);
    }
  }
  var cl = {
      readContext: nr,
      useCallback: yt,
      useContext: yt,
      useEffect: yt,
      useImperativeHandle: yt,
      useInsertionEffect: yt,
      useLayoutEffect: yt,
      useMemo: yt,
      useReducer: yt,
      useRef: yt,
      useState: yt,
      useDebugValue: yt,
      useDeferredValue: yt,
      useTransition: yt,
      useMutableSource: yt,
      useSyncExternalStore: yt,
      useId: yt,
      unstable_isNewReconciler: !1,
    },
    Lw = {
      readContext: nr,
      useCallback: function (e, t) {
        return (Ir().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: nr,
      useEffect: Sh,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Ta(4194308, 4, S0.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ta(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ta(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Ir();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var n = Ir();
        return (
          (t = r !== void 0 ? r(t) : t),
          (n.memoizedState = n.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (n.queue = e),
          (e = e.dispatch = jw.bind(null, Fe, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ir();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: xh,
      useDebugValue: kf,
      useDeferredValue: function (e) {
        return (Ir().memoizedState = e);
      },
      useTransition: function () {
        var e = xh(!1),
          t = e[0];
        return (e = _w.bind(null, e[1])), (Ir().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var n = Fe,
          i = Ir();
        if (_e) {
          if (r === void 0) throw Error(Y(407));
          r = r();
        } else {
          if (((r = t()), dt === null)) throw Error(Y(349));
          pi & 30 || h0(n, t, r);
        }
        i.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (i.queue = o),
          Sh(m0.bind(null, n, o, e), [e]),
          (n.flags |= 2048),
          xs(9, g0.bind(null, n, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Ir(),
          t = dt.identifierPrefix;
        if (_e) {
          var r = qr,
            n = Zr;
          (r = (n & ~(1 << (32 - yr(n) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = As++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Qw++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Uw = {
      readContext: nr,
      useCallback: E0,
      useContext: nr,
      useEffect: Sf,
      useImperativeHandle: k0,
      useInsertionEffect: w0,
      useLayoutEffect: x0,
      useMemo: C0,
      useReducer: Vu,
      useRef: A0,
      useState: function () {
        return Vu(ws);
      },
      useDebugValue: kf,
      useDeferredValue: function (e) {
        var t = ir();
        return b0(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = Vu(ws)[0],
          t = ir().memoizedState;
        return [e, t];
      },
      useMutableSource: f0,
      useSyncExternalStore: p0,
      useId: I0,
      unstable_isNewReconciler: !1,
    },
    Yw = {
      readContext: nr,
      useCallback: E0,
      useContext: nr,
      useEffect: Sf,
      useImperativeHandle: k0,
      useInsertionEffect: w0,
      useLayoutEffect: x0,
      useMemo: C0,
      useReducer: $u,
      useRef: A0,
      useState: function () {
        return $u(ws);
      },
      useDebugValue: kf,
      useDeferredValue: function (e) {
        var t = ir();
        return rt === null ? (t.memoizedState = e) : b0(t, rt.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(ws)[0],
          t = ir().memoizedState;
        return [e, t];
      },
      useMutableSource: f0,
      useSyncExternalStore: p0,
      useId: I0,
      unstable_isNewReconciler: !1,
    };
  function po(e, t) {
    try {
      var r = "",
        n = t;
      do (r += y1(n)), (n = n.return);
      while (n);
      var i = r;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function Gu(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Kc(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Ww = typeof WeakMap == "function" ? WeakMap : Map;
  function O0(e, t, r) {
    (r = rn(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var n = t.value;
    return (
      (r.callback = function () {
        fl || ((fl = !0), (ad = n)), Kc(e, t);
      }),
      r
    );
  }
  function T0(e, t, r) {
    (r = rn(-1, r)), (r.tag = 3);
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = t.value;
      (r.payload = function () {
        return n(i);
      }),
        (r.callback = function () {
          Kc(e, t);
        });
    }
    var o = e.stateNode;
    return (
      o !== null &&
        typeof o.componentDidCatch == "function" &&
        (r.callback = function () {
          Kc(e, t),
            typeof n != "function" &&
              (Pn === null ? (Pn = new Set([this])) : Pn.add(this));
          var s = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : "",
          });
        }),
      r
    );
  }
  function kh(e, t, r) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Ww();
      var i = new Set();
      n.set(t, i);
    } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
    i.has(r) || (i.add(r), (e = ix.bind(null, e, t, r)), t.then(e, e));
  }
  function Eh(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ch(e, t, r, n, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = rn(-1, 1)), (t.tag = 2), Mn(r, t, 1))),
            (r.lanes |= 1)),
        e);
  }
  var Jw = pn.ReactCurrentOwner,
    Dt = !1;
  function Et(e, t, r, n) {
    t.child = e === null ? c0(t, null, r, n) : co(t, e.child, r, n);
  }
  function bh(e, t, r, n, i) {
    r = r.render;
    var o = t.ref;
    return (
      ro(t, i),
      (n = wf(e, t, r, n, o, i)),
      (r = xf()),
      e !== null && !Dt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          un(e, t, i))
        : (_e && r && lf(t), (t.flags |= 1), Et(e, t, n, i), t.child)
    );
  }
  function Ih(e, t, r, n, i) {
    if (e === null) {
      var o = r.type;
      return typeof o == "function" &&
        !Of(o) &&
        o.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), M0(e, t, o, n, i))
        : ((e = Na(r.type, null, n, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((o = e.child), !(e.lanes & i))) {
      var s = o.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : ps), r(s, n) && e.ref === t.ref)
      )
        return un(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Nn(o, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function M0(e, t, r, n, i) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (ps(o, n) && e.ref === t.ref)
        if (((Dt = !1), (t.pendingProps = n = o), (e.lanes & i) !== 0))
          e.flags & 131072 && (Dt = !0);
        else return (t.lanes = e.lanes), un(e, t, i);
    }
    return Zc(e, t, r, n, i);
  }
  function P0(e, t, r) {
    var n = t.pendingProps,
      i = n.children,
      o = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Be(Hi, jt),
          (jt |= r);
      else {
        if (!(r & 1073741824))
          return (
            (e = o !== null ? o.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Be(Hi, jt),
            (jt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (n = o !== null ? o.baseLanes : r),
          Be(Hi, jt),
          (jt |= n);
      }
    else
      o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r),
        Be(Hi, jt),
        (jt |= n);
    return Et(e, t, i, r), t.child;
  }
  function z0(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Zc(e, t, r, n, i) {
    var o = Tt(r) ? di : kt.current;
    return (
      (o = lo(t, o)),
      ro(t, i),
      (r = wf(e, t, r, n, o, i)),
      (n = xf()),
      e !== null && !Dt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          un(e, t, i))
        : (_e && n && lf(t), (t.flags |= 1), Et(e, t, r, i), t.child)
    );
  }
  function Bh(e, t, r, n, i) {
    if (Tt(r)) {
      var o = !0;
      rl(t);
    } else o = !1;
    if ((ro(t, i), t.stateNode === null))
      Ma(e, t), l0(t, r, n), Xc(t, r, n, i), (n = !0);
    else if (e === null) {
      var s = t.stateNode,
        a = t.memoizedProps;
      s.props = a;
      var l = s.context,
        d = r.contextType;
      typeof d == "object" && d !== null
        ? (d = nr(d))
        : ((d = Tt(r) ? di : kt.current), (d = lo(t, d)));
      var p = r.getDerivedStateFromProps,
        h =
          typeof p == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function";
      h ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== n || l !== d) && Ah(t, s, n, d)),
        (Sn = !1);
      var y = t.memoizedState;
      (s.state = y),
        al(t, n, s, i),
        (l = t.memoizedState),
        a !== n || y !== l || Ot.current || Sn
          ? (typeof p == "function" && (Gc(t, r, p, n), (l = t.memoizedState)),
            (a = Sn || vh(t, r, a, n, y, l, d))
              ? (h ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = n),
                (t.memoizedState = l)),
            (s.props = n),
            (s.state = l),
            (s.context = d),
            (n = a))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1));
    } else {
      (s = t.stateNode),
        s0(e, t),
        (a = t.memoizedProps),
        (d = t.type === t.elementType ? a : fr(t.type, a)),
        (s.props = d),
        (h = t.pendingProps),
        (y = s.context),
        (l = r.contextType),
        typeof l == "object" && l !== null
          ? (l = nr(l))
          : ((l = Tt(r) ? di : kt.current), (l = lo(t, l)));
      var x = r.getDerivedStateFromProps;
      (p =
        typeof x == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function") ||
        (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
          typeof s.componentWillReceiveProps != "function") ||
        ((a !== h || y !== l) && Ah(t, s, n, l)),
        (Sn = !1),
        (y = t.memoizedState),
        (s.state = y),
        al(t, n, s, i);
      var S = t.memoizedState;
      a !== h || y !== S || Ot.current || Sn
        ? (typeof x == "function" && (Gc(t, r, x, n), (S = t.memoizedState)),
          (d = Sn || vh(t, r, d, n, y, S, l) || !1)
            ? (p ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(n, S, l),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(n, S, l)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (a === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && y === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = S)),
          (s.props = n),
          (s.state = S),
          (s.context = l),
          (n = d))
        : (typeof s.componentDidUpdate != "function" ||
            (a === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && y === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return qc(e, t, r, n, o, i);
  }
  function qc(e, t, r, n, i, o) {
    z0(e, t);
    var s = (t.flags & 128) !== 0;
    if (!n && !s) return i && ph(t, r, !1), un(e, t, o);
    (n = t.stateNode), (Jw.current = t);
    var a =
      s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
    return (
      (t.flags |= 1),
      e !== null && s
        ? ((t.child = co(t, e.child, null, o)), (t.child = co(t, null, a, o)))
        : Et(e, t, a, o),
      (t.memoizedState = n.state),
      i && ph(t, r, !0),
      t.child
    );
  }
  function N0(e) {
    var t = e.stateNode;
    t.pendingContext
      ? fh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && fh(e, t.context, !1),
      mf(e, t.containerInfo);
  }
  function Rh(e, t, r, n, i) {
    return uo(), cf(i), (t.flags |= 256), Et(e, t, r, n), t.child;
  }
  var ed = { dehydrated: null, treeContext: null, retryLane: 0 };
  function td(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Q0(e, t, r) {
    var n = t.pendingProps,
      i = je.current,
      o = !1,
      s = (t.flags & 128) !== 0,
      a;
    if (
      ((a = s) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((o = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Be(je, i & 1),
      e === null)
    )
      return (
        Vc(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = n.children),
            (e = n.fallback),
            o
              ? ((n = t.mode),
                (o = t.child),
                (s = { mode: "hidden", children: s }),
                !(n & 1) && o !== null
                  ? ((o.childLanes = 0), (o.pendingProps = s))
                  : (o = Hl(s, n, 0, null)),
                (e = li(e, n, r, null)),
                (o.return = t),
                (e.return = t),
                (o.sibling = e),
                (t.child = o),
                (t.child.memoizedState = td(r)),
                (t.memoizedState = ed),
                e)
              : Ef(t, s))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return Hw(e, t, s, n, a, i, r);
    if (o) {
      (o = n.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: n.children };
      return (
        !(s & 1) && t.child !== i
          ? ((n = t.child),
            (n.childLanes = 0),
            (n.pendingProps = l),
            (t.deletions = null))
          : ((n = Nn(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (o = Nn(a, o)) : ((o = li(o, s, r, null)), (o.flags |= 2)),
        (o.return = t),
        (n.return = t),
        (n.sibling = o),
        (t.child = n),
        (n = o),
        (o = t.child),
        (s = e.child.memoizedState),
        (s =
          s === null
            ? td(r)
            : {
                baseLanes: s.baseLanes | r,
                cachePool: null,
                transitions: s.transitions,
              }),
        (o.memoizedState = s),
        (o.childLanes = e.childLanes & ~r),
        (t.memoizedState = ed),
        n
      );
    }
    return (
      (o = e.child),
      (e = o.sibling),
      (n = Nn(o, { mode: "visible", children: n.children })),
      !(t.mode & 1) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
    );
  }
  function Ef(e, t) {
    return (
      (t = Hl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function sa(e, t, r, n) {
    return (
      n !== null && cf(n),
      co(t, e.child, null, r),
      (e = Ef(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Hw(e, t, r, n, i, o, s) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (n = Gu(Error(Y(422)))), sa(e, t, s, n))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = n.fallback),
          (i = t.mode),
          (n = Hl({ mode: "visible", children: n.children }, i, 0, null)),
          (o = li(o, i, s, null)),
          (o.flags |= 2),
          (n.return = t),
          (o.return = t),
          (n.sibling = o),
          (t.child = n),
          t.mode & 1 && co(t, e.child, null, s),
          (t.child.memoizedState = td(s)),
          (t.memoizedState = ed),
          o);
    if (!(t.mode & 1)) return sa(e, t, s, null);
    if (i.data === "$!") {
      if (((n = i.nextSibling && i.nextSibling.dataset), n)) var a = n.dgst;
      return (
        (n = a), (o = Error(Y(419))), (n = Gu(o, n, void 0)), sa(e, t, s, n)
      );
    }
    if (((a = (s & e.childLanes) !== 0), Dt || a)) {
      if (((n = dt), n !== null)) {
        switch (s & -s) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (n.suspendedLanes | s) ? 0 : i),
          i !== 0 &&
            i !== o.retryLane &&
            ((o.retryLane = i), ln(e, i), vr(n, e, i, -1));
      }
      return Df(), (n = Gu(Error(Y(421)))), sa(e, t, s, n);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = ox.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = o.treeContext),
        (Ft = Tn(i.nextSibling)),
        (Ut = t),
        (_e = !0),
        (hr = null),
        e !== null &&
          ((Zt[qt++] = Zr),
          (Zt[qt++] = qr),
          (Zt[qt++] = fi),
          (Zr = e.id),
          (qr = e.overflow),
          (fi = t)),
        (t = Ef(t, n.children)),
        (t.flags |= 4096),
        t);
  }
  function Dh(e, t, r) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), $c(e.return, t, r);
  }
  function Xu(e, t, r, n, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: r,
          tailMode: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = n),
        (o.tail = r),
        (o.tailMode = i));
  }
  function _0(e, t, r) {
    var n = t.pendingProps,
      i = n.revealOrder,
      o = n.tail;
    if ((Et(e, t, n.children, r), (n = je.current), n & 2))
      (n = (n & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Dh(e, r, t);
          else if (e.tag === 19) Dh(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      n &= 1;
    }
    if ((Be(je, n), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (r = t.child, i = null; r !== null; )
            (e = r.alternate),
              e !== null && ll(e) === null && (i = r),
              (r = r.sibling);
          (r = i),
            r === null
              ? ((i = t.child), (t.child = null))
              : ((i = r.sibling), (r.sibling = null)),
            Xu(t, !1, i, r, o);
          break;
        case "backwards":
          for (r = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && ll(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = r), (r = i), (i = e);
          }
          Xu(t, !0, r, null, o);
          break;
        case "together":
          Xu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ma(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function un(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (hi |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(Y(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Nn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = Nn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function Vw(e, t, r) {
    switch (t.tag) {
      case 3:
        N0(t), uo();
        break;
      case 5:
        d0(t);
        break;
      case 1:
        Tt(t.type) && rl(t);
        break;
      case 4:
        mf(t, t.stateNode.containerInfo);
        break;
      case 10:
        var n = t.type._context,
          i = t.memoizedProps.value;
        Be(ol, n._currentValue), (n._currentValue = i);
        break;
      case 13:
        if (((n = t.memoizedState), n !== null))
          return n.dehydrated !== null
            ? (Be(je, je.current & 1), (t.flags |= 128), null)
            : r & t.child.childLanes
            ? Q0(e, t, r)
            : (Be(je, je.current & 1),
              (e = un(e, t, r)),
              e !== null ? e.sibling : null);
        Be(je, je.current & 1);
        break;
      case 19:
        if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
          if (n) return _0(e, t, r);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Be(je, je.current),
          n)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), P0(e, t, r);
    }
    return un(e, t, r);
  }
  var j0, rd, F0, L0;
  j0 = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  };
  rd = function () {};
  F0 = function (e, t, r, n) {
    var i = e.memoizedProps;
    if (i !== n) {
      (e = t.stateNode), ni(Nr.current);
      var o = null;
      switch (r) {
        case "input":
          (i = Ec(e, i)), (n = Ec(e, n)), (o = []);
          break;
        case "select":
          (i = Le({}, i, { value: void 0 })),
            (n = Le({}, n, { value: void 0 })),
            (o = []);
          break;
        case "textarea":
          (i = Ic(e, i)), (n = Ic(e, n)), (o = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof n.onClick == "function" &&
            (e.onclick = el);
      }
      Rc(r, n);
      var s;
      r = null;
      for (d in i)
        if (!n.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
          if (d === "style") {
            var a = i[d];
            for (s in a) a.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
          } else
            d !== "dangerouslySetInnerHTML" &&
              d !== "children" &&
              d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              d !== "autoFocus" &&
              (ss.hasOwnProperty(d)
                ? o || (o = [])
                : (o = o || []).push(d, null));
      for (d in n) {
        var l = n[d];
        if (
          ((a = i != null ? i[d] : void 0),
          n.hasOwnProperty(d) && l !== a && (l != null || a != null))
        )
          if (d === "style")
            if (a) {
              for (s in a)
                !a.hasOwnProperty(s) ||
                  (l && l.hasOwnProperty(s)) ||
                  (r || (r = {}), (r[s] = ""));
              for (s in l)
                l.hasOwnProperty(s) &&
                  a[s] !== l[s] &&
                  (r || (r = {}), (r[s] = l[s]));
            } else r || (o || (o = []), o.push(d, r)), (r = l);
          else
            d === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (o = o || []).push(d, l))
              : d === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(d, "" + l)
              : d !== "suppressContentEditableWarning" &&
                d !== "suppressHydrationWarning" &&
                (ss.hasOwnProperty(d)
                  ? (l != null && d === "onScroll" && Oe("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(d, l));
      }
      r && (o = o || []).push("style", r);
      var d = o;
      (t.updateQueue = d) && (t.flags |= 4);
    }
  };
  L0 = function (e, t, r, n) {
    r !== n && (t.flags |= 4);
  };
  function _o(e, t) {
    if (!_e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var n = null; r !== null; )
            r.alternate !== null && (n = r), (r = r.sibling);
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function vt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags & 14680064),
          (n |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (r |= i.lanes | i.childLanes),
          (n |= i.subtreeFlags),
          (n |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= n), (e.childLanes = r), t;
  }
  function $w(e, t, r) {
    var n = t.pendingProps;
    switch ((uf(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(t), null;
      case 1:
        return Tt(t.type) && tl(), vt(t), null;
      case 3:
        return (
          (n = t.stateNode),
          fo(),
          Me(Ot),
          Me(kt),
          vf(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ia(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), hr !== null && (cd(hr), (hr = null)))),
          rd(e, t),
          vt(t),
          null
        );
      case 5:
        yf(t);
        var i = ni(vs.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          F0(e, t, r, n, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(Y(166));
            return vt(t), null;
          }
          if (((e = ni(Nr.current)), ia(t))) {
            (n = t.stateNode), (r = t.type);
            var o = t.memoizedProps;
            switch (((n[Mr] = t), (n[ms] = o), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                Oe("cancel", n), Oe("close", n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Oe("load", n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ho.length; i++) Oe(Ho[i], n);
                break;
              case "source":
                Oe("error", n);
                break;
              case "img":
              case "image":
              case "link":
                Oe("error", n), Oe("load", n);
                break;
              case "details":
                Oe("toggle", n);
                break;
              case "input":
                jp(n, o), Oe("invalid", n);
                break;
              case "select":
                (n._wrapperState = { wasMultiple: !!o.multiple }),
                  Oe("invalid", n);
                break;
              case "textarea":
                Lp(n, o), Oe("invalid", n);
            }
            Rc(r, o), (i = null);
            for (var s in o)
              if (o.hasOwnProperty(s)) {
                var a = o[s];
                s === "children"
                  ? typeof a == "string"
                    ? n.textContent !== a &&
                      (o.suppressHydrationWarning !== !0 &&
                        na(n.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      n.textContent !== "" + a &&
                      (o.suppressHydrationWarning !== !0 &&
                        na(n.textContent, a, e),
                      (i = ["children", "" + a]))
                  : ss.hasOwnProperty(s) &&
                    a != null &&
                    s === "onScroll" &&
                    Oe("scroll", n);
              }
            switch (r) {
              case "input":
                Gs(n), Fp(n, o, !0);
                break;
              case "textarea":
                Gs(n), Up(n);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (n.onclick = el);
            }
            (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
          } else {
            (s = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = hm(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = s.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof n.is == "string"
                  ? (e = s.createElement(r, { is: n.is }))
                  : ((e = s.createElement(r)),
                    r === "select" &&
                      ((s = e),
                      n.multiple
                        ? (s.multiple = !0)
                        : n.size && (s.size = n.size)))
                : (e = s.createElementNS(e, r)),
              (e[Mr] = t),
              (e[ms] = n),
              j0(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((s = Dc(r, n)), r)) {
                case "dialog":
                  Oe("cancel", e), Oe("close", e), (i = n);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Oe("load", e), (i = n);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Ho.length; i++) Oe(Ho[i], e);
                  i = n;
                  break;
                case "source":
                  Oe("error", e), (i = n);
                  break;
                case "img":
                case "image":
                case "link":
                  Oe("error", e), Oe("load", e), (i = n);
                  break;
                case "details":
                  Oe("toggle", e), (i = n);
                  break;
                case "input":
                  jp(e, n), (i = Ec(e, n)), Oe("invalid", e);
                  break;
                case "option":
                  i = n;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!n.multiple }),
                    (i = Le({}, n, { value: void 0 })),
                    Oe("invalid", e);
                  break;
                case "textarea":
                  Lp(e, n), (i = Ic(e, n)), Oe("invalid", e);
                  break;
                default:
                  i = n;
              }
              Rc(r, i), (a = i);
              for (o in a)
                if (a.hasOwnProperty(o)) {
                  var l = a[o];
                  o === "style"
                    ? ym(e, l)
                    : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && gm(e, l))
                    : o === "children"
                    ? typeof l == "string"
                      ? (r !== "textarea" || l !== "") && as(e, l)
                      : typeof l == "number" && as(e, "" + l)
                    : o !== "suppressContentEditableWarning" &&
                      o !== "suppressHydrationWarning" &&
                      o !== "autoFocus" &&
                      (ss.hasOwnProperty(o)
                        ? l != null && o === "onScroll" && Oe("scroll", e)
                        : l != null && Vd(e, o, l, s));
                }
              switch (r) {
                case "input":
                  Gs(e), Fp(e, n, !1);
                  break;
                case "textarea":
                  Gs(e), Up(e);
                  break;
                case "option":
                  n.value != null && e.setAttribute("value", "" + jn(n.value));
                  break;
                case "select":
                  (e.multiple = !!n.multiple),
                    (o = n.value),
                    o != null
                      ? Zi(e, !!n.multiple, o, !1)
                      : n.defaultValue != null &&
                        Zi(e, !!n.multiple, n.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = el);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  n = !!n.autoFocus;
                  break e;
                case "img":
                  n = !0;
                  break e;
                default:
                  n = !1;
              }
            }
            n && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return vt(t), null;
      case 6:
        if (e && t.stateNode != null) L0(e, t, e.memoizedProps, n);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(Y(166));
          if (((r = ni(vs.current)), ni(Nr.current), ia(t))) {
            if (
              ((n = t.stateNode),
              (r = t.memoizedProps),
              (n[Mr] = t),
              (o = n.nodeValue !== r) && ((e = Ut), e !== null))
            )
              switch (e.tag) {
                case 3:
                  na(n.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    na(n.nodeValue, r, (e.mode & 1) !== 0);
              }
            o && (t.flags |= 4);
          } else
            (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
              (n[Mr] = t),
              (t.stateNode = n);
        }
        return vt(t), null;
      case 13:
        if (
          (Me(je),
          (n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (_e && Ft !== null && t.mode & 1 && !(t.flags & 128))
            i0(), uo(), (t.flags |= 98560), (o = !1);
          else if (((o = ia(t)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!o) throw Error(Y(318));
              if (
                ((o = t.memoizedState),
                (o = o !== null ? o.dehydrated : null),
                !o)
              )
                throw Error(Y(317));
              o[Mr] = t;
            } else
              uo(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            vt(t), (o = !1);
          } else hr !== null && (cd(hr), (hr = null)), (o = !0);
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = r), t)
          : ((n = n !== null),
            n !== (e !== null && e.memoizedState !== null) &&
              n &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || je.current & 1 ? nt === 0 && (nt = 3) : Df())),
            t.updateQueue !== null && (t.flags |= 4),
            vt(t),
            null);
      case 4:
        return (
          fo(),
          rd(e, t),
          e === null && hs(t.stateNode.containerInfo),
          vt(t),
          null
        );
      case 10:
        return pf(t.type._context), vt(t), null;
      case 17:
        return Tt(t.type) && tl(), vt(t), null;
      case 19:
        if ((Me(je), (o = t.memoizedState), o === null)) return vt(t), null;
        if (((n = (t.flags & 128) !== 0), (s = o.rendering), s === null))
          if (n) _o(o, !1);
          else {
            if (nt !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((s = ll(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      _o(o, !1),
                      n = s.updateQueue,
                      n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      n = r,
                      r = t.child;
                    r !== null;

                  )
                    (o = r),
                      (e = n),
                      (o.flags &= 14680066),
                      (s = o.alternate),
                      s === null
                        ? ((o.childLanes = 0),
                          (o.lanes = e),
                          (o.child = null),
                          (o.subtreeFlags = 0),
                          (o.memoizedProps = null),
                          (o.memoizedState = null),
                          (o.updateQueue = null),
                          (o.dependencies = null),
                          (o.stateNode = null))
                        : ((o.childLanes = s.childLanes),
                          (o.lanes = s.lanes),
                          (o.child = s.child),
                          (o.subtreeFlags = 0),
                          (o.deletions = null),
                          (o.memoizedProps = s.memoizedProps),
                          (o.memoizedState = s.memoizedState),
                          (o.updateQueue = s.updateQueue),
                          (o.type = s.type),
                          (e = s.dependencies),
                          (o.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Be(je, (je.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null &&
              Xe() > ho &&
              ((t.flags |= 128), (n = !0), _o(o, !1), (t.lanes = 4194304));
          }
        else {
          if (!n)
            if (((e = ll(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (n = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                _o(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !s.alternate &&
                  !_e)
              )
                return vt(t), null;
            } else
              2 * Xe() - o.renderingStartTime > ho &&
                r !== 1073741824 &&
                ((t.flags |= 128), (n = !0), _o(o, !1), (t.lanes = 4194304));
          o.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((r = o.last),
              r !== null ? (r.sibling = s) : (t.child = s),
              (o.last = s));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Xe()),
            (t.sibling = null),
            (r = je.current),
            Be(je, n ? (r & 1) | 2 : r & 1),
            t)
          : (vt(t), null);
      case 22:
      case 23:
        return (
          Rf(),
          (n = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
          n && t.mode & 1
            ? jt & 1073741824 &&
              (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(Y(156, t.tag));
  }
  function Gw(e, t) {
    switch ((uf(t), t.tag)) {
      case 1:
        return (
          Tt(t.type) && tl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          fo(),
          Me(Ot),
          Me(kt),
          vf(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return yf(t), null;
      case 13:
        if (
          (Me(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(Y(340));
          uo();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Me(je), null;
      case 4:
        return fo(), null;
      case 10:
        return pf(t.type._context), null;
      case 22:
      case 23:
        return Rf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var aa = !1,
    xt = !1,
    Xw = typeof WeakSet == "function" ? WeakSet : Set,
    q = null;
  function Ji(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (n) {
          Je(e, t, n);
        }
      else r.current = null;
  }
  function nd(e, t, r) {
    try {
      r();
    } catch (n) {
      Je(e, t, n);
    }
  }
  var Oh = !1;
  function Kw(e, t) {
    if (((Fc = Ka), (e = Jm()), af(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var n = r.getSelection && r.getSelection();
          if (n && n.rangeCount !== 0) {
            r = n.anchorNode;
            var i = n.anchorOffset,
              o = n.focusNode;
            n = n.focusOffset;
            try {
              r.nodeType, o.nodeType;
            } catch {
              r = null;
              break e;
            }
            var s = 0,
              a = -1,
              l = -1,
              d = 0,
              p = 0,
              h = e,
              y = null;
            t: for (;;) {
              for (
                var x;
                h !== r || (i !== 0 && h.nodeType !== 3) || (a = s + i),
                  h !== o || (n !== 0 && h.nodeType !== 3) || (l = s + n),
                  h.nodeType === 3 && (s += h.nodeValue.length),
                  (x = h.firstChild) !== null;

              )
                (y = h), (h = x);
              for (;;) {
                if (h === e) break t;
                if (
                  (y === r && ++d === i && (a = s),
                  y === o && ++p === n && (l = s),
                  (x = h.nextSibling) !== null)
                )
                  break;
                (h = y), (y = h.parentNode);
              }
              h = x;
            }
            r = a === -1 || l === -1 ? null : { start: a, end: l };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Lc = { focusedElem: e, selectionRange: r }, Ka = !1, q = t;
      q !== null;

    )
      if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (q = e);
      else
        for (; q !== null; ) {
          t = q;
          try {
            var S = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (S !== null) {
                    var E = S.memoizedProps,
                      D = S.memoizedState,
                      A = t.stateNode,
                      m = A.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? E : fr(t.type, E),
                        D
                      );
                    A.__reactInternalSnapshotBeforeUpdate = m;
                  }
                  break;
                case 3:
                  var v = t.stateNode.containerInfo;
                  v.nodeType === 1
                    ? (v.textContent = "")
                    : v.nodeType === 9 &&
                      v.documentElement &&
                      v.removeChild(v.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(Y(163));
              }
          } catch (k) {
            Je(t, t.return, k);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (q = e);
            break;
          }
          q = t.return;
        }
    return (S = Oh), (Oh = !1), S;
  }
  function ts(e, t, r) {
    var n = t.updateQueue;
    if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var o = i.destroy;
          (i.destroy = void 0), o !== void 0 && nd(t, r, o);
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function Wl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var n = r.create;
          r.destroy = n();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function id(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function U0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), U0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Mr],
          delete t[ms],
          delete t[Wc],
          delete t[Mw],
          delete t[Pw])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Y0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Th(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Y0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function od(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = el));
    else if (n !== 4 && ((e = e.child), e !== null))
      for (od(e, t, r), e = e.sibling; e !== null; )
        od(e, t, r), (e = e.sibling);
  }
  function sd(e, t, r) {
    var n = e.tag;
    if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (n !== 4 && ((e = e.child), e !== null))
      for (sd(e, t, r), e = e.sibling; e !== null; )
        sd(e, t, r), (e = e.sibling);
  }
  var pt = null,
    pr = !1;
  function yn(e, t, r) {
    for (r = r.child; r !== null; ) W0(e, t, r), (r = r.sibling);
  }
  function W0(e, t, r) {
    if (zr && typeof zr.onCommitFiberUnmount == "function")
      try {
        zr.onCommitFiberUnmount(Nl, r);
      } catch {}
    switch (r.tag) {
      case 5:
        xt || Ji(r, t);
      case 6:
        var n = pt,
          i = pr;
        (pt = null),
          yn(e, t, r),
          (pt = n),
          (pr = i),
          pt !== null &&
            (pr
              ? ((e = pt),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : pt.removeChild(r.stateNode));
        break;
      case 18:
        pt !== null &&
          (pr
            ? ((e = pt),
              (r = r.stateNode),
              e.nodeType === 8
                ? Yu(e.parentNode, r)
                : e.nodeType === 1 && Yu(e, r),
              ds(e))
            : Yu(pt, r.stateNode));
        break;
      case 4:
        (n = pt),
          (i = pr),
          (pt = r.stateNode.containerInfo),
          (pr = !0),
          yn(e, t, r),
          (pt = n),
          (pr = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !xt &&
          ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
        ) {
          i = n = n.next;
          do {
            var o = i,
              s = o.destroy;
            (o = o.tag),
              s !== void 0 && (o & 2 || o & 4) && nd(r, t, s),
              (i = i.next);
          } while (i !== n);
        }
        yn(e, t, r);
        break;
      case 1:
        if (
          !xt &&
          (Ji(r, t),
          (n = r.stateNode),
          typeof n.componentWillUnmount == "function")
        )
          try {
            (n.props = r.memoizedProps),
              (n.state = r.memoizedState),
              n.componentWillUnmount();
          } catch (a) {
            Je(r, t, a);
          }
        yn(e, t, r);
        break;
      case 21:
        yn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((xt = (n = xt) || r.memoizedState !== null), yn(e, t, r), (xt = n))
          : yn(e, t, r);
        break;
      default:
        yn(e, t, r);
    }
  }
  function Mh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Xw()),
        t.forEach(function (n) {
          var i = sx.bind(null, e, n);
          r.has(n) || (r.add(n), n.then(i, i));
        });
    }
  }
  function cr(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var n = 0; n < r.length; n++) {
        var i = r[n];
        try {
          var o = e,
            s = t,
            a = s;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (pt = a.stateNode), (pr = !1);
                break e;
              case 3:
                (pt = a.stateNode.containerInfo), (pr = !0);
                break e;
              case 4:
                (pt = a.stateNode.containerInfo), (pr = !0);
                break e;
            }
            a = a.return;
          }
          if (pt === null) throw Error(Y(160));
          W0(o, s, i), (pt = null), (pr = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (d) {
          Je(i, t, d);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) J0(t, e), (t = t.sibling);
  }
  function J0(e, t) {
    var r = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((cr(t, e), br(e), n & 4)) {
          try {
            ts(3, e, e.return), Wl(3, e);
          } catch (E) {
            Je(e, e.return, E);
          }
          try {
            ts(5, e, e.return);
          } catch (E) {
            Je(e, e.return, E);
          }
        }
        break;
      case 1:
        cr(t, e), br(e), n & 512 && r !== null && Ji(r, r.return);
        break;
      case 5:
        if (
          (cr(t, e),
          br(e),
          n & 512 && r !== null && Ji(r, r.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            as(i, "");
          } catch (E) {
            Je(e, e.return, E);
          }
        }
        if (n & 4 && ((i = e.stateNode), i != null)) {
          var o = e.memoizedProps,
            s = r !== null ? r.memoizedProps : o,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && o.type === "radio" && o.name != null && fm(i, o),
                Dc(a, s);
              var d = Dc(a, o);
              for (s = 0; s < l.length; s += 2) {
                var p = l[s],
                  h = l[s + 1];
                p === "style"
                  ? ym(i, h)
                  : p === "dangerouslySetInnerHTML"
                  ? gm(i, h)
                  : p === "children"
                  ? as(i, h)
                  : Vd(i, p, h, d);
              }
              switch (a) {
                case "input":
                  Cc(i, o);
                  break;
                case "textarea":
                  pm(i, o);
                  break;
                case "select":
                  var y = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!o.multiple;
                  var x = o.value;
                  x != null
                    ? Zi(i, !!o.multiple, x, !1)
                    : y !== !!o.multiple &&
                      (o.defaultValue != null
                        ? Zi(i, !!o.multiple, o.defaultValue, !0)
                        : Zi(i, !!o.multiple, o.multiple ? [] : "", !1));
              }
              i[ms] = o;
            } catch (E) {
              Je(e, e.return, E);
            }
        }
        break;
      case 6:
        if ((cr(t, e), br(e), n & 4)) {
          if (e.stateNode === null) throw Error(Y(162));
          (i = e.stateNode), (o = e.memoizedProps);
          try {
            i.nodeValue = o;
          } catch (E) {
            Je(e, e.return, E);
          }
        }
        break;
      case 3:
        if (
          (cr(t, e), br(e), n & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            ds(t.containerInfo);
          } catch (E) {
            Je(e, e.return, E);
          }
        break;
      case 4:
        cr(t, e), br(e);
        break;
      case 13:
        cr(t, e),
          br(e),
          (i = e.child),
          i.flags & 8192 &&
            ((o = i.memoizedState !== null),
            (i.stateNode.isHidden = o),
            !o ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (If = Xe())),
          n & 4 && Mh(e);
        break;
      case 22:
        if (
          ((p = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((xt = (d = xt) || p), cr(t, e), (xt = d)) : cr(t, e),
          br(e),
          n & 8192)
        ) {
          if (
            ((d = e.memoizedState !== null),
            (e.stateNode.isHidden = d) && !p && e.mode & 1)
          )
            for (q = e, p = e.child; p !== null; ) {
              for (h = q = p; q !== null; ) {
                switch (((y = q), (x = y.child), y.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ts(4, y, y.return);
                    break;
                  case 1:
                    Ji(y, y.return);
                    var S = y.stateNode;
                    if (typeof S.componentWillUnmount == "function") {
                      (n = y), (r = y.return);
                      try {
                        (t = n),
                          (S.props = t.memoizedProps),
                          (S.state = t.memoizedState),
                          S.componentWillUnmount();
                      } catch (E) {
                        Je(n, r, E);
                      }
                    }
                    break;
                  case 5:
                    Ji(y, y.return);
                    break;
                  case 22:
                    if (y.memoizedState !== null) {
                      zh(h);
                      continue;
                    }
                }
                x !== null ? ((x.return = y), (q = x)) : zh(h);
              }
              p = p.sibling;
            }
          e: for (p = null, h = e; ; ) {
            if (h.tag === 5) {
              if (p === null) {
                p = h;
                try {
                  (i = h.stateNode),
                    d
                      ? ((o = i.style),
                        typeof o.setProperty == "function"
                          ? o.setProperty("display", "none", "important")
                          : (o.display = "none"))
                      : ((a = h.stateNode),
                        (l = h.memoizedProps.style),
                        (s =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = mm("display", s)));
                } catch (E) {
                  Je(e, e.return, E);
                }
              }
            } else if (h.tag === 6) {
              if (p === null)
                try {
                  h.stateNode.nodeValue = d ? "" : h.memoizedProps;
                } catch (E) {
                  Je(e, e.return, E);
                }
            } else if (
              ((h.tag !== 22 && h.tag !== 23) ||
                h.memoizedState === null ||
                h === e) &&
              h.child !== null
            ) {
              (h.child.return = h), (h = h.child);
              continue;
            }
            if (h === e) break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e) break e;
              p === h && (p = null), (h = h.return);
            }
            p === h && (p = null),
              (h.sibling.return = h.return),
              (h = h.sibling);
          }
        }
        break;
      case 19:
        cr(t, e), br(e), n & 4 && Mh(e);
        break;
      case 21:
        break;
      default:
        cr(t, e), br(e);
    }
  }
  function br(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Y0(r)) {
              var n = r;
              break e;
            }
            r = r.return;
          }
          throw Error(Y(160));
        }
        switch (n.tag) {
          case 5:
            var i = n.stateNode;
            n.flags & 32 && (as(i, ""), (n.flags &= -33));
            var o = Th(e);
            sd(e, o, i);
            break;
          case 3:
          case 4:
            var s = n.stateNode.containerInfo,
              a = Th(e);
            od(e, a, s);
            break;
          default:
            throw Error(Y(161));
        }
      } catch (l) {
        Je(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zw(e, t, r) {
    (q = e), H0(e);
  }
  function H0(e, t, r) {
    for (var n = (e.mode & 1) !== 0; q !== null; ) {
      var i = q,
        o = i.child;
      if (i.tag === 22 && n) {
        var s = i.memoizedState !== null || aa;
        if (!s) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || xt;
          a = aa;
          var d = xt;
          if (((aa = s), (xt = l) && !d))
            for (q = i; q !== null; )
              (s = q),
                (l = s.child),
                s.tag === 22 && s.memoizedState !== null
                  ? Nh(i)
                  : l !== null
                  ? ((l.return = s), (q = l))
                  : Nh(i);
          for (; o !== null; ) (q = o), H0(o), (o = o.sibling);
          (q = i), (aa = a), (xt = d);
        }
        Ph(e);
      } else
        i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (q = o)) : Ph(e);
    }
  }
  function Ph(e) {
    for (; q !== null; ) {
      var t = q;
      if (t.flags & 8772) {
        var r = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                xt || Wl(5, t);
                break;
              case 1:
                var n = t.stateNode;
                if (t.flags & 4 && !xt)
                  if (r === null) n.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : fr(t.type, r.memoizedProps);
                    n.componentDidUpdate(
                      i,
                      r.memoizedState,
                      n.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var o = t.updateQueue;
                o !== null && yh(t, o, n);
                break;
              case 3:
                var s = t.updateQueue;
                if (s !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  yh(t, s, r);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && r.focus();
                      break;
                    case "img":
                      l.src && (r.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var d = t.alternate;
                  if (d !== null) {
                    var p = d.memoizedState;
                    if (p !== null) {
                      var h = p.dehydrated;
                      h !== null && ds(h);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(Y(163));
            }
          xt || (t.flags & 512 && id(t));
        } catch (y) {
          Je(t, t.return, y);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (q = r);
        break;
      }
      q = t.return;
    }
  }
  function zh(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (q = r);
        break;
      }
      q = t.return;
    }
  }
  function Nh(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Wl(4, t);
            } catch (l) {
              Je(t, r, l);
            }
            break;
          case 1:
            var n = t.stateNode;
            if (typeof n.componentDidMount == "function") {
              var i = t.return;
              try {
                n.componentDidMount();
              } catch (l) {
                Je(t, i, l);
              }
            }
            var o = t.return;
            try {
              id(t);
            } catch (l) {
              Je(t, o, l);
            }
            break;
          case 5:
            var s = t.return;
            try {
              id(t);
            } catch (l) {
              Je(t, s, l);
            }
        }
      } catch (l) {
        Je(t, t.return, l);
      }
      if (t === e) {
        q = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (q = a);
        break;
      }
      q = t.return;
    }
  }
  var qw = Math.ceil,
    dl = pn.ReactCurrentDispatcher,
    Cf = pn.ReactCurrentOwner,
    rr = pn.ReactCurrentBatchConfig,
    ye = 0,
    dt = null,
    qe = null,
    ht = 0,
    jt = 0,
    Hi = Hn(0),
    nt = 0,
    Ss = null,
    hi = 0,
    Jl = 0,
    bf = 0,
    rs = null,
    Rt = null,
    If = 0,
    ho = 1 / 0,
    Vr = null,
    fl = !1,
    ad = null,
    Pn = null,
    la = !1,
    bn = null,
    pl = 0,
    ns = 0,
    ld = null,
    Pa = -1,
    za = 0;
  function Ct() {
    return ye & 6 ? Xe() : Pa !== -1 ? Pa : (Pa = Xe());
  }
  function zn(e) {
    return e.mode & 1
      ? ye & 2 && ht !== 0
        ? ht & -ht
        : Nw.transition !== null
        ? (za === 0 && (za = Rm()), za)
        : ((e = Ce),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nm(e.type))),
          e)
      : 1;
  }
  function vr(e, t, r, n) {
    if (50 < ns) throw ((ns = 0), (ld = null), Error(Y(185)));
    zs(e, r, n),
      (!(ye & 2) || e !== dt) &&
        (e === dt && (!(ye & 2) && (Jl |= r), nt === 4 && En(e, ht)),
        Mt(e, n),
        r === 1 &&
          ye === 0 &&
          !(t.mode & 1) &&
          ((ho = Xe() + 500), Ll && Vn()));
  }
  function Mt(e, t) {
    var r = e.callbackNode;
    N1(e, t);
    var n = Xa(e, e === dt ? ht : 0);
    if (n === 0)
      r !== null && Jp(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && Jp(r), t === 1))
        e.tag === 0 ? zw(Qh.bind(null, e)) : t0(Qh.bind(null, e)),
          Ow(function () {
            !(ye & 6) && Vn();
          }),
          (r = null);
      else {
        switch (Dm(n)) {
          case 1:
            r = Zd;
            break;
          case 4:
            r = Im;
            break;
          case 16:
            r = Ga;
            break;
          case 536870912:
            r = Bm;
            break;
          default:
            r = Ga;
        }
        r = ey(r, V0.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function V0(e, t) {
    if (((Pa = -1), (za = 0), ye & 6)) throw Error(Y(327));
    var r = e.callbackNode;
    if (no() && e.callbackNode !== r) return null;
    var n = Xa(e, e === dt ? ht : 0);
    if (n === 0) return null;
    if (n & 30 || n & e.expiredLanes || t) t = hl(e, n);
    else {
      t = n;
      var i = ye;
      ye |= 2;
      var o = G0();
      (dt !== e || ht !== t) && ((Vr = null), (ho = Xe() + 500), ai(e, t));
      do
        try {
          rx();
          break;
        } catch (a) {
          $0(e, a);
        }
      while (!0);
      ff(),
        (dl.current = o),
        (ye = i),
        qe !== null ? (t = 0) : ((dt = null), (ht = 0), (t = nt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = zc(e)), i !== 0 && ((n = i), (t = ud(e, i)))),
        t === 1)
      )
        throw ((r = Ss), ai(e, 0), En(e, n), Mt(e, Xe()), r);
      if (t === 6) En(e, n);
      else {
        if (
          ((i = e.current.alternate),
          !(n & 30) &&
            !ex(i) &&
            ((t = hl(e, n)),
            t === 2 && ((o = zc(e)), o !== 0 && ((n = o), (t = ud(e, o)))),
            t === 1))
        )
          throw ((r = Ss), ai(e, 0), En(e, n), Mt(e, Xe()), r);
        switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
          case 0:
          case 1:
            throw Error(Y(345));
          case 2:
            Zn(e, Rt, Vr);
            break;
          case 3:
            if (
              (En(e, n),
              (n & 130023424) === n && ((t = If + 500 - Xe()), 10 < t))
            ) {
              if (Xa(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & n) !== n)) {
                Ct(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Yc(Zn.bind(null, e, Rt, Vr), t);
              break;
            }
            Zn(e, Rt, Vr);
            break;
          case 4:
            if ((En(e, n), (n & 4194240) === n)) break;
            for (t = e.eventTimes, i = -1; 0 < n; ) {
              var s = 31 - yr(n);
              (o = 1 << s), (s = t[s]), s > i && (i = s), (n &= ~o);
            }
            if (
              ((n = i),
              (n = Xe() - n),
              (n =
                (120 > n
                  ? 120
                  : 480 > n
                  ? 480
                  : 1080 > n
                  ? 1080
                  : 1920 > n
                  ? 1920
                  : 3e3 > n
                  ? 3e3
                  : 4320 > n
                  ? 4320
                  : 1960 * qw(n / 1960)) - n),
              10 < n)
            ) {
              e.timeoutHandle = Yc(Zn.bind(null, e, Rt, Vr), n);
              break;
            }
            Zn(e, Rt, Vr);
            break;
          case 5:
            Zn(e, Rt, Vr);
            break;
          default:
            throw Error(Y(329));
        }
      }
    }
    return Mt(e, Xe()), e.callbackNode === r ? V0.bind(null, e) : null;
  }
  function ud(e, t) {
    var r = rs;
    return (
      e.current.memoizedState.isDehydrated && (ai(e, t).flags |= 256),
      (e = hl(e, t)),
      e !== 2 && ((t = Rt), (Rt = r), t !== null && cd(t)),
      e
    );
  }
  function cd(e) {
    Rt === null ? (Rt = e) : Rt.push.apply(Rt, e);
  }
  function ex(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var n = 0; n < r.length; n++) {
            var i = r[n],
              o = i.getSnapshot;
            i = i.value;
            try {
              if (!wr(o(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function En(e, t) {
    for (
      t &= ~bf,
        t &= ~Jl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - yr(t),
        n = 1 << r;
      (e[r] = -1), (t &= ~n);
    }
  }
  function Qh(e) {
    if (ye & 6) throw Error(Y(327));
    no();
    var t = Xa(e, 0);
    if (!(t & 1)) return Mt(e, Xe()), null;
    var r = hl(e, t);
    if (e.tag !== 0 && r === 2) {
      var n = zc(e);
      n !== 0 && ((t = n), (r = ud(e, n)));
    }
    if (r === 1) throw ((r = Ss), ai(e, 0), En(e, t), Mt(e, Xe()), r);
    if (r === 6) throw Error(Y(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Zn(e, Rt, Vr),
      Mt(e, Xe()),
      null
    );
  }
  function Bf(e, t) {
    var r = ye;
    ye |= 1;
    try {
      return e(t);
    } finally {
      (ye = r), ye === 0 && ((ho = Xe() + 500), Ll && Vn());
    }
  }
  function gi(e) {
    bn !== null && bn.tag === 0 && !(ye & 6) && no();
    var t = ye;
    ye |= 1;
    var r = rr.transition,
      n = Ce;
    try {
      if (((rr.transition = null), (Ce = 1), e)) return e();
    } finally {
      (Ce = n), (rr.transition = r), (ye = t), !(ye & 6) && Vn();
    }
  }
  function Rf() {
    (jt = Hi.current), Me(Hi);
  }
  function ai(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Dw(r)), qe !== null))
      for (r = qe.return; r !== null; ) {
        var n = r;
        switch ((uf(n), n.tag)) {
          case 1:
            (n = n.type.childContextTypes), n != null && tl();
            break;
          case 3:
            fo(), Me(Ot), Me(kt), vf();
            break;
          case 5:
            yf(n);
            break;
          case 4:
            fo();
            break;
          case 13:
            Me(je);
            break;
          case 19:
            Me(je);
            break;
          case 10:
            pf(n.type._context);
            break;
          case 22:
          case 23:
            Rf();
        }
        r = r.return;
      }
    if (
      ((dt = e),
      (qe = e = Nn(e.current, null)),
      (ht = jt = t),
      (nt = 0),
      (Ss = null),
      (bf = Jl = hi = 0),
      (Rt = rs = null),
      ri !== null)
    ) {
      for (t = 0; t < ri.length; t++)
        if (((r = ri[t]), (n = r.interleaved), n !== null)) {
          r.interleaved = null;
          var i = n.next,
            o = r.pending;
          if (o !== null) {
            var s = o.next;
            (o.next = i), (n.next = s);
          }
          r.pending = n;
        }
      ri = null;
    }
    return e;
  }
  function $0(e, t) {
    do {
      var r = qe;
      try {
        if ((ff(), (Oa.current = cl), ul)) {
          for (var n = Fe.memoizedState; n !== null; ) {
            var i = n.queue;
            i !== null && (i.pending = null), (n = n.next);
          }
          ul = !1;
        }
        if (
          ((pi = 0),
          (at = rt = Fe = null),
          (es = !1),
          (As = 0),
          (Cf.current = null),
          r === null || r.return === null)
        ) {
          (nt = 1), (Ss = t), (qe = null);
          break;
        }
        e: {
          var o = e,
            s = r.return,
            a = r,
            l = t;
          if (
            ((t = ht),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var d = l,
              p = a,
              h = p.tag;
            if (!(p.mode & 1) && (h === 0 || h === 11 || h === 15)) {
              var y = p.alternate;
              y
                ? ((p.updateQueue = y.updateQueue),
                  (p.memoizedState = y.memoizedState),
                  (p.lanes = y.lanes))
                : ((p.updateQueue = null), (p.memoizedState = null));
            }
            var x = Eh(s);
            if (x !== null) {
              (x.flags &= -257),
                Ch(x, s, a, o, t),
                x.mode & 1 && kh(o, d, t),
                (t = x),
                (l = d);
              var S = t.updateQueue;
              if (S === null) {
                var E = new Set();
                E.add(l), (t.updateQueue = E);
              } else S.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                kh(o, d, t), Df();
                break e;
              }
              l = Error(Y(426));
            }
          } else if (_e && a.mode & 1) {
            var D = Eh(s);
            if (D !== null) {
              !(D.flags & 65536) && (D.flags |= 256),
                Ch(D, s, a, o, t),
                cf(po(l, a));
              break e;
            }
          }
          (o = l = po(l, a)),
            nt !== 4 && (nt = 2),
            rs === null ? (rs = [o]) : rs.push(o),
            (o = s);
          do {
            switch (o.tag) {
              case 3:
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var A = O0(o, l, t);
                mh(o, A);
                break e;
              case 1:
                a = l;
                var m = o.type,
                  v = o.stateNode;
                if (
                  !(o.flags & 128) &&
                  (typeof m.getDerivedStateFromError == "function" ||
                    (v !== null &&
                      typeof v.componentDidCatch == "function" &&
                      (Pn === null || !Pn.has(v))))
                ) {
                  (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                  var k = T0(o, a, t);
                  mh(o, k);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        K0(r);
      } catch (I) {
        (t = I), qe === r && r !== null && (qe = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function G0() {
    var e = dl.current;
    return (dl.current = cl), e === null ? cl : e;
  }
  function Df() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
      dt === null || (!(hi & 268435455) && !(Jl & 268435455)) || En(dt, ht);
  }
  function hl(e, t) {
    var r = ye;
    ye |= 2;
    var n = G0();
    (dt !== e || ht !== t) && ((Vr = null), ai(e, t));
    do
      try {
        tx();
        break;
      } catch (i) {
        $0(e, i);
      }
    while (!0);
    if ((ff(), (ye = r), (dl.current = n), qe !== null)) throw Error(Y(261));
    return (dt = null), (ht = 0), nt;
  }
  function tx() {
    for (; qe !== null; ) X0(qe);
  }
  function rx() {
    for (; qe !== null && !I1(); ) X0(qe);
  }
  function X0(e) {
    var t = q0(e.alternate, e, jt);
    (e.memoizedProps = e.pendingProps),
      t === null ? K0(e) : (qe = t),
      (Cf.current = null);
  }
  function K0(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((r = Gw(r, t)), r !== null)) {
          (r.flags &= 32767), (qe = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (nt = 6), (qe = null);
          return;
        }
      } else if (((r = $w(r, t, jt)), r !== null)) {
        qe = r;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function Zn(e, t, r) {
    var n = Ce,
      i = rr.transition;
    try {
      (rr.transition = null), (Ce = 1), nx(e, t, r, n);
    } finally {
      (rr.transition = i), (Ce = n);
    }
    return null;
  }
  function nx(e, t, r, n) {
    do no();
    while (bn !== null);
    if (ye & 6) throw Error(Y(327));
    r = e.finishedWork;
    var i = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(Y(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = r.lanes | r.childLanes;
    if (
      (Q1(e, o),
      e === dt && ((qe = dt = null), (ht = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
        la ||
        ((la = !0),
        ey(Ga, function () {
          return no(), null;
        })),
      (o = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || o)
    ) {
      (o = rr.transition), (rr.transition = null);
      var s = Ce;
      Ce = 1;
      var a = ye;
      (ye |= 4),
        (Cf.current = null),
        Kw(e, r),
        J0(r, e),
        kw(Lc),
        (Ka = !!Fc),
        (Lc = Fc = null),
        (e.current = r),
        Zw(r),
        B1(),
        (ye = a),
        (Ce = s),
        (rr.transition = o);
    } else e.current = r;
    if (
      (la && ((la = !1), (bn = e), (pl = i)),
      (o = e.pendingLanes),
      o === 0 && (Pn = null),
      O1(r.stateNode),
      Mt(e, Xe()),
      t !== null)
    )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
        (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
    if (fl) throw ((fl = !1), (e = ad), (ad = null), e);
    return (
      pl & 1 && e.tag !== 0 && no(),
      (o = e.pendingLanes),
      o & 1 ? (e === ld ? ns++ : ((ns = 0), (ld = e))) : (ns = 0),
      Vn(),
      null
    );
  }
  function no() {
    if (bn !== null) {
      var e = Dm(pl),
        t = rr.transition,
        r = Ce;
      try {
        if (((rr.transition = null), (Ce = 16 > e ? 16 : e), bn === null))
          var n = !1;
        else {
          if (((e = bn), (bn = null), (pl = 0), ye & 6)) throw Error(Y(331));
          var i = ye;
          for (ye |= 4, q = e.current; q !== null; ) {
            var o = q,
              s = o.child;
            if (q.flags & 16) {
              var a = o.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var d = a[l];
                  for (q = d; q !== null; ) {
                    var p = q;
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ts(8, p, o);
                    }
                    var h = p.child;
                    if (h !== null) (h.return = p), (q = h);
                    else
                      for (; q !== null; ) {
                        p = q;
                        var y = p.sibling,
                          x = p.return;
                        if ((U0(p), p === d)) {
                          q = null;
                          break;
                        }
                        if (y !== null) {
                          (y.return = x), (q = y);
                          break;
                        }
                        q = x;
                      }
                  }
                }
                var S = o.alternate;
                if (S !== null) {
                  var E = S.child;
                  if (E !== null) {
                    S.child = null;
                    do {
                      var D = E.sibling;
                      (E.sibling = null), (E = D);
                    } while (E !== null);
                  }
                }
                q = o;
              }
            }
            if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (q = s);
            else
              e: for (; q !== null; ) {
                if (((o = q), o.flags & 2048))
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ts(9, o, o.return);
                  }
                var A = o.sibling;
                if (A !== null) {
                  (A.return = o.return), (q = A);
                  break e;
                }
                q = o.return;
              }
          }
          var m = e.current;
          for (q = m; q !== null; ) {
            s = q;
            var v = s.child;
            if (s.subtreeFlags & 2064 && v !== null) (v.return = s), (q = v);
            else
              e: for (s = m; q !== null; ) {
                if (((a = q), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wl(9, a);
                    }
                  } catch (I) {
                    Je(a, a.return, I);
                  }
                if (a === s) {
                  q = null;
                  break e;
                }
                var k = a.sibling;
                if (k !== null) {
                  (k.return = a.return), (q = k);
                  break e;
                }
                q = a.return;
              }
          }
          if (
            ((ye = i),
            Vn(),
            zr && typeof zr.onPostCommitFiberRoot == "function")
          )
            try {
              zr.onPostCommitFiberRoot(Nl, e);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (Ce = r), (rr.transition = t);
      }
    }
    return !1;
  }
  function _h(e, t, r) {
    (t = po(r, t)),
      (t = O0(e, t, 1)),
      (e = Mn(e, t, 1)),
      (t = Ct()),
      e !== null && (zs(e, 1, t), Mt(e, t));
  }
  function Je(e, t, r) {
    if (e.tag === 3) _h(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _h(t, e, r);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Pn === null || !Pn.has(n)))
          ) {
            (e = po(r, e)),
              (e = T0(t, e, 1)),
              (t = Mn(t, e, 1)),
              (e = Ct()),
              t !== null && (zs(t, 1, e), Mt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function ix(e, t, r) {
    var n = e.pingCache;
    n !== null && n.delete(t),
      (t = Ct()),
      (e.pingedLanes |= e.suspendedLanes & r),
      dt === e &&
        (ht & r) === r &&
        (nt === 4 || (nt === 3 && (ht & 130023424) === ht && 500 > Xe() - If)
          ? ai(e, 0)
          : (bf |= r)),
      Mt(e, t);
  }
  function Z0(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Zs), (Zs <<= 1), !(Zs & 130023424) && (Zs = 4194304))
        : (t = 1));
    var r = Ct();
    (e = ln(e, t)), e !== null && (zs(e, t, r), Mt(e, r));
  }
  function ox(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), Z0(e, r);
  }
  function sx(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode,
          i = e.memoizedState;
        i !== null && (r = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      default:
        throw Error(Y(314));
    }
    n !== null && n.delete(t), Z0(e, r);
  }
  var q0;
  q0 = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ot.current) Dt = !0;
      else {
        if (!(e.lanes & r) && !(t.flags & 128)) return (Dt = !1), Vw(e, t, r);
        Dt = !!(e.flags & 131072);
      }
    else (Dt = !1), _e && t.flags & 1048576 && r0(t, il, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var n = t.type;
        Ma(e, t), (e = t.pendingProps);
        var i = lo(t, kt.current);
        ro(t, r), (i = wf(null, t, n, e, i, r));
        var o = xf();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Tt(n) ? ((o = !0), rl(t)) : (o = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              gf(t),
              (i.updater = Ul),
              (t.stateNode = i),
              (i._reactInternals = t),
              Xc(t, n, e, r),
              (t = qc(null, t, n, !0, o, r)))
            : ((t.tag = 0), _e && o && lf(t), Et(null, t, i, r), (t = t.child)),
          t
        );
      case 16:
        n = t.elementType;
        e: {
          switch (
            (Ma(e, t),
            (e = t.pendingProps),
            (i = n._init),
            (n = i(n._payload)),
            (t.type = n),
            (i = t.tag = lx(n)),
            (e = fr(n, e)),
            i)
          ) {
            case 0:
              t = Zc(null, t, n, e, r);
              break e;
            case 1:
              t = Bh(null, t, n, e, r);
              break e;
            case 11:
              t = bh(null, t, n, e, r);
              break e;
            case 14:
              t = Ih(null, t, n, fr(n.type, e), r);
              break e;
          }
          throw Error(Y(306, n, ""));
        }
        return t;
      case 0:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : fr(n, i)),
          Zc(e, t, n, i, r)
        );
      case 1:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : fr(n, i)),
          Bh(e, t, n, i, r)
        );
      case 3:
        e: {
          if ((N0(t), e === null)) throw Error(Y(387));
          (n = t.pendingProps),
            (o = t.memoizedState),
            (i = o.element),
            s0(e, t),
            al(t, n, null, r);
          var s = t.memoizedState;
          if (((n = s.element), o.isDehydrated))
            if (
              ((o = {
                element: n,
                isDehydrated: !1,
                cache: s.cache,
                pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                transitions: s.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              t.flags & 256)
            ) {
              (i = po(Error(Y(423)), t)), (t = Rh(e, t, n, r, i));
              break e;
            } else if (n !== i) {
              (i = po(Error(Y(424)), t)), (t = Rh(e, t, n, r, i));
              break e;
            } else
              for (
                Ft = Tn(t.stateNode.containerInfo.firstChild),
                  Ut = t,
                  _e = !0,
                  hr = null,
                  r = c0(t, null, n, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((uo(), n === i)) {
              t = un(e, t, r);
              break e;
            }
            Et(e, t, n, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          d0(t),
          e === null && Vc(t),
          (n = t.type),
          (i = t.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (s = i.children),
          Uc(n, i) ? (s = null) : o !== null && Uc(n, o) && (t.flags |= 32),
          z0(e, t),
          Et(e, t, s, r),
          t.child
        );
      case 6:
        return e === null && Vc(t), null;
      case 13:
        return Q0(e, t, r);
      case 4:
        return (
          mf(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = co(t, null, n, r)) : Et(e, t, n, r),
          t.child
        );
      case 11:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : fr(n, i)),
          bh(e, t, n, i, r)
        );
      case 7:
        return Et(e, t, t.pendingProps, r), t.child;
      case 8:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return Et(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((n = t.type._context),
            (i = t.pendingProps),
            (o = t.memoizedProps),
            (s = i.value),
            Be(ol, n._currentValue),
            (n._currentValue = s),
            o !== null)
          )
            if (wr(o.value, s)) {
              if (o.children === i.children && !Ot.current) {
                t = un(e, t, r);
                break e;
              }
            } else
              for (o = t.child, o !== null && (o.return = t); o !== null; ) {
                var a = o.dependencies;
                if (a !== null) {
                  s = o.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === n) {
                      if (o.tag === 1) {
                        (l = rn(-1, r & -r)), (l.tag = 2);
                        var d = o.updateQueue;
                        if (d !== null) {
                          d = d.shared;
                          var p = d.pending;
                          p === null
                            ? (l.next = l)
                            : ((l.next = p.next), (p.next = l)),
                            (d.pending = l);
                        }
                      }
                      (o.lanes |= r),
                        (l = o.alternate),
                        l !== null && (l.lanes |= r),
                        $c(o.return, r, t),
                        (a.lanes |= r);
                      break;
                    }
                    l = l.next;
                  }
                } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                else if (o.tag === 18) {
                  if (((s = o.return), s === null)) throw Error(Y(341));
                  (s.lanes |= r),
                    (a = s.alternate),
                    a !== null && (a.lanes |= r),
                    $c(s, r, t),
                    (s = o.sibling);
                } else s = o.child;
                if (s !== null) s.return = o;
                else
                  for (s = o; s !== null; ) {
                    if (s === t) {
                      s = null;
                      break;
                    }
                    if (((o = s.sibling), o !== null)) {
                      (o.return = s.return), (s = o);
                      break;
                    }
                    s = s.return;
                  }
                o = s;
              }
          Et(e, t, i.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (n = t.pendingProps.children),
          ro(t, r),
          (i = nr(i)),
          (n = n(i)),
          (t.flags |= 1),
          Et(e, t, n, r),
          t.child
        );
      case 14:
        return (
          (n = t.type),
          (i = fr(n, t.pendingProps)),
          (i = fr(n.type, i)),
          Ih(e, t, n, i, r)
        );
      case 15:
        return M0(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (n = t.type),
          (i = t.pendingProps),
          (i = t.elementType === n ? i : fr(n, i)),
          Ma(e, t),
          (t.tag = 1),
          Tt(n) ? ((e = !0), rl(t)) : (e = !1),
          ro(t, r),
          l0(t, n, i),
          Xc(t, n, i, r),
          qc(null, t, n, !0, e, r)
        );
      case 19:
        return _0(e, t, r);
      case 22:
        return P0(e, t, r);
    }
    throw Error(Y(156, t.tag));
  };
  function ey(e, t) {
    return bm(e, t);
  }
  function ax(e, t, r, n) {
    (this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function tr(e, t, r, n) {
    return new ax(e, t, r, n);
  }
  function Of(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function lx(e) {
    if (typeof e == "function") return Of(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Gd)) return 11;
      if (e === Xd) return 14;
    }
    return 2;
  }
  function Nn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = tr(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Na(e, t, r, n, i, o) {
    var s = 2;
    if (((n = e), typeof e == "function")) Of(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
      e: switch (e) {
        case Ni:
          return li(r.children, i, o, t);
        case $d:
          (s = 8), (i |= 8);
          break;
        case wc:
          return (
            (e = tr(12, r, t, i | 2)), (e.elementType = wc), (e.lanes = o), e
          );
        case xc:
          return (e = tr(13, r, t, i)), (e.elementType = xc), (e.lanes = o), e;
        case Sc:
          return (e = tr(19, r, t, i)), (e.elementType = Sc), (e.lanes = o), e;
        case um:
          return Hl(r, i, o, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case am:
                s = 10;
                break e;
              case lm:
                s = 9;
                break e;
              case Gd:
                s = 11;
                break e;
              case Xd:
                s = 14;
                break e;
              case xn:
                (s = 16), (n = null);
                break e;
            }
          throw Error(Y(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = tr(s, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t
    );
  }
  function li(e, t, r, n) {
    return (e = tr(7, e, n, t)), (e.lanes = r), e;
  }
  function Hl(e, t, r, n) {
    return (
      (e = tr(22, e, n, t)),
      (e.elementType = um),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ku(e, t, r) {
    return (e = tr(6, e, null, t)), (e.lanes = r), e;
  }
  function Zu(e, t, r) {
    return (
      (t = tr(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ux(e, t, r, n, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Tu(0)),
      (this.expirationTimes = Tu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Tu(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Tf(e, t, r, n, i, o, s, a, l) {
    return (
      (e = new ux(e, t, r, a, l)),
      t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
      (o = tr(3, null, null, t)),
      (e.current = o),
      (o.stateNode = e),
      (o.memoizedState = {
        element: n,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      gf(o),
      e
    );
  }
  function cx(e, t, r) {
    var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: zi,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function ty(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (xi(e) !== e || e.tag !== 1) throw Error(Y(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Tt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(Y(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (Tt(r)) return e0(e, r, t);
    }
    return t;
  }
  function ry(e, t, r, n, i, o, s, a, l) {
    return (
      (e = Tf(r, n, !0, e, i, o, s, a, l)),
      (e.context = ty(null)),
      (r = e.current),
      (n = Ct()),
      (i = zn(r)),
      (o = rn(n, i)),
      (o.callback = t ?? null),
      Mn(r, o, i),
      (e.current.lanes = i),
      zs(e, i, n),
      Mt(e, n),
      e
    );
  }
  function Vl(e, t, r, n) {
    var i = t.current,
      o = Ct(),
      s = zn(i);
    return (
      (r = ty(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = rn(o, s)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = Mn(i, t, s)),
      e !== null && (vr(e, i, s, o), Da(e, i, s)),
      s
    );
  }
  function gl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function jh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Mf(e, t) {
    jh(e, t), (e = e.alternate) && jh(e, t);
  }
  function dx() {
    return null;
  }
  var ny =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Pf(e) {
    this._internalRoot = e;
  }
  $l.prototype.render = Pf.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(Y(409));
    Vl(e, t, null, null);
  };
  $l.prototype.unmount = Pf.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      gi(function () {
        Vl(null, e, null, null);
      }),
        (t[an] = null);
    }
  };
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Mm();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < kn.length && t !== 0 && t < kn[r].priority; r++);
      kn.splice(r, 0, e), r === 0 && zm(e);
    }
  };
  function zf(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Gl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Fh() {}
  function fx(e, t, r, n, i) {
    if (i) {
      if (typeof n == "function") {
        var o = n;
        n = function () {
          var d = gl(s);
          o.call(d);
        };
      }
      var s = ry(t, n, e, 0, null, !1, !1, "", Fh);
      return (
        (e._reactRootContainer = s),
        (e[an] = s.current),
        hs(e.nodeType === 8 ? e.parentNode : e),
        gi(),
        s
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof n == "function") {
      var a = n;
      n = function () {
        var d = gl(l);
        a.call(d);
      };
    }
    var l = Tf(e, 0, !1, null, null, !1, !1, "", Fh);
    return (
      (e._reactRootContainer = l),
      (e[an] = l.current),
      hs(e.nodeType === 8 ? e.parentNode : e),
      gi(function () {
        Vl(t, l, r, n);
      }),
      l
    );
  }
  function Xl(e, t, r, n, i) {
    var o = r._reactRootContainer;
    if (o) {
      var s = o;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var l = gl(s);
          a.call(l);
        };
      }
      Vl(t, s, e, i);
    } else s = fx(r, t, e, i, n);
    return gl(s);
  }
  Om = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Jo(t.pendingLanes);
          r !== 0 &&
            (qd(t, r | 1), Mt(t, Xe()), !(ye & 6) && ((ho = Xe() + 500), Vn()));
        }
        break;
      case 13:
        gi(function () {
          var n = ln(e, 1);
          if (n !== null) {
            var i = Ct();
            vr(n, e, 1, i);
          }
        }),
          Mf(e, 1);
    }
  };
  ef = function (e) {
    if (e.tag === 13) {
      var t = ln(e, 134217728);
      if (t !== null) {
        var r = Ct();
        vr(t, e, 134217728, r);
      }
      Mf(e, 134217728);
    }
  };
  Tm = function (e) {
    if (e.tag === 13) {
      var t = zn(e),
        r = ln(e, t);
      if (r !== null) {
        var n = Ct();
        vr(r, e, t, n);
      }
      Mf(e, t);
    }
  };
  Mm = function () {
    return Ce;
  };
  Pm = function (e, t) {
    var r = Ce;
    try {
      return (Ce = e), t();
    } finally {
      Ce = r;
    }
  };
  Tc = function (e, t, r) {
    switch (t) {
      case "input":
        if ((Cc(e, r), (t = r.name), r.type === "radio" && t != null)) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (
            r = r.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < r.length;
            t++
          ) {
            var n = r[t];
            if (n !== e && n.form === e.form) {
              var i = Fl(n);
              if (!i) throw Error(Y(90));
              dm(n), Cc(n, i);
            }
          }
        }
        break;
      case "textarea":
        pm(e, r);
        break;
      case "select":
        (t = r.value), t != null && Zi(e, !!r.multiple, t, !1);
    }
  };
  wm = Bf;
  xm = gi;
  var px = { usingClientEntryPoint: !1, Events: [Qs, Fi, Fl, vm, Am, Bf] },
    jo = {
      findFiberByHostInstance: ti,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    hx = {
      bundleType: jo.bundleType,
      version: jo.version,
      rendererPackageName: jo.rendererPackageName,
      rendererConfig: jo.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: pn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Em(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: jo.findFiberByHostInstance || dx,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ua.isDisabled && ua.supportsFiber)
      try {
        (Nl = ua.inject(hx)), (zr = ua);
      } catch {}
  }
  Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = px;
  Vt.createPortal = function (e, t) {
    var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zf(t)) throw Error(Y(200));
    return cx(e, t, null, r);
  };
  Vt.createRoot = function (e, t) {
    if (!zf(e)) throw Error(Y(299));
    var r = !1,
      n = "",
      i = ny;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (r = !0),
        t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Tf(e, 1, !1, null, null, r, !1, n, i)),
      (e[an] = t.current),
      hs(e.nodeType === 8 ? e.parentNode : e),
      new Pf(t)
    );
  };
  Vt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(Y(188))
        : ((e = Object.keys(e).join(",")), Error(Y(268, e)));
    return (e = Em(t)), (e = e === null ? null : e.stateNode), e;
  };
  Vt.flushSync = function (e) {
    return gi(e);
  };
  Vt.hydrate = function (e, t, r) {
    if (!Gl(t)) throw Error(Y(200));
    return Xl(null, e, t, !0, r);
  };
  Vt.hydrateRoot = function (e, t, r) {
    if (!zf(e)) throw Error(Y(405));
    var n = (r != null && r.hydratedSources) || null,
      i = !1,
      o = "",
      s = ny;
    if (
      (r != null &&
        (r.unstable_strictMode === !0 && (i = !0),
        r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
      (t = ry(t, null, e, 1, r ?? null, i, !1, o, s)),
      (e[an] = t.current),
      hs(e),
      n)
    )
      for (e = 0; e < n.length; e++)
        (r = n[e]),
          (i = r._getVersion),
          (i = i(r._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [r, i])
            : t.mutableSourceEagerHydrationData.push(r, i);
    return new $l(t);
  };
  Vt.render = function (e, t, r) {
    if (!Gl(t)) throw Error(Y(200));
    return Xl(null, e, t, !1, r);
  };
  Vt.unmountComponentAtNode = function (e) {
    if (!Gl(e)) throw Error(Y(40));
    return e._reactRootContainer
      ? (gi(function () {
          Xl(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[an] = null);
          });
        }),
        !0)
      : !1;
  };
  Vt.unstable_batchedUpdates = Bf;
  Vt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
    if (!Gl(r)) throw Error(Y(200));
    if (e == null || e._reactInternals === void 0) throw Error(Y(38));
    return Xl(e, t, r, !1, n);
  };
  Vt.version = "18.2.0-next-9e3b772b8-20220608";
  function iy() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iy);
      } catch (e) {
        console.error(e);
      }
  }
  iy(), (rm.exports = Vt);
  var Kl = rm.exports,
    Lh = Kl;
  (vc.createRoot = Lh.createRoot), (vc.hydrateRoot = Lh.hydrateRoot);
  var gx = `
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,
    ct = function () {
      return (
        (ct =
          Object.assign ||
          function (t) {
            for (var r, n = 1, i = arguments.length; n < i; n++) {
              r = arguments[n];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
          }),
        ct.apply(this, arguments)
      );
    };
  function ks(e, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, i = t.length, o; n < i; n++)
        (o || !(n in t)) &&
          (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]));
    return e.concat(o || Array.prototype.slice.call(t));
  }
  var Te = "-ms-",
    is = "-moz-",
    Ee = "-webkit-",
    oy = "comm",
    Zl = "rule",
    Nf = "decl",
    mx = "@import",
    sy = "@keyframes",
    yx = "@layer",
    ay = Math.abs,
    Qf = String.fromCharCode,
    dd = Object.assign;
  function vx(e, t) {
    return lt(e, 0) ^ 45
      ? (((((((t << 2) ^ lt(e, 0)) << 2) ^ lt(e, 1)) << 2) ^ lt(e, 2)) << 2) ^
          lt(e, 3)
      : 0;
  }
  function ly(e) {
    return e.trim();
  }
  function $r(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function ue(e, t, r) {
    return e.replace(t, r);
  }
  function Qa(e, t, r) {
    return e.indexOf(t, r);
  }
  function lt(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function go(e, t, r) {
    return e.slice(t, r);
  }
  function Or(e) {
    return e.length;
  }
  function uy(e) {
    return e.length;
  }
  function Vo(e, t) {
    return t.push(e), e;
  }
  function Ax(e, t) {
    return e.map(t).join("");
  }
  function Uh(e, t) {
    return e.filter(function (r) {
      return !$r(r, t);
    });
  }
  var ql = 1,
    mo = 1,
    cy = 0,
    or = 0,
    Ze = 0,
    bo = "";
  function eu(e, t, r, n, i, o, s, a) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: i,
      children: o,
      line: ql,
      column: mo,
      length: s,
      return: "",
      siblings: a,
    };
  }
  function wn(e, t) {
    return dd(
      eu("", null, null, "", null, null, 0, e.siblings),
      e,
      { length: -e.length },
      t
    );
  }
  function Di(e) {
    for (; e.root; ) e = wn(e.root, { children: [e] });
    Vo(e, e.siblings);
  }
  function wx() {
    return Ze;
  }
  function xx() {
    return (
      (Ze = or > 0 ? lt(bo, --or) : 0), mo--, Ze === 10 && ((mo = 1), ql--), Ze
    );
  }
  function Ar() {
    return (
      (Ze = or < cy ? lt(bo, or++) : 0), mo++, Ze === 10 && ((mo = 1), ql++), Ze
    );
  }
  function ui() {
    return lt(bo, or);
  }
  function _a() {
    return or;
  }
  function tu(e, t) {
    return go(bo, e, t);
  }
  function fd(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function Sx(e) {
    return (ql = mo = 1), (cy = Or((bo = e))), (or = 0), [];
  }
  function kx(e) {
    return (bo = ""), e;
  }
  function qu(e) {
    return ly(tu(or - 1, pd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Ex(e) {
    for (; (Ze = ui()) && Ze < 33; ) Ar();
    return fd(e) > 2 || fd(Ze) > 3 ? "" : " ";
  }
  function Cx(e, t) {
    for (
      ;
      --t &&
      Ar() &&
      !(Ze < 48 || Ze > 102 || (Ze > 57 && Ze < 65) || (Ze > 70 && Ze < 97));

    );
    return tu(e, _a() + (t < 6 && ui() == 32 && Ar() == 32));
  }
  function pd(e) {
    for (; Ar(); )
      switch (Ze) {
        case e:
          return or;
        case 34:
        case 39:
          e !== 34 && e !== 39 && pd(Ze);
          break;
        case 40:
          e === 41 && pd(e);
          break;
        case 92:
          Ar();
          break;
      }
    return or;
  }
  function bx(e, t) {
    for (; Ar() && e + Ze !== 57; ) if (e + Ze === 84 && ui() === 47) break;
    return "/*" + tu(t, or - 1) + "*" + Qf(e === 47 ? e : Ar());
  }
  function Ix(e) {
    for (; !fd(ui()); ) Ar();
    return tu(e, or);
  }
  function Bx(e) {
    return kx(ja("", null, null, null, [""], (e = Sx(e)), 0, [0], e));
  }
  function ja(e, t, r, n, i, o, s, a, l) {
    for (
      var d = 0,
        p = 0,
        h = s,
        y = 0,
        x = 0,
        S = 0,
        E = 1,
        D = 1,
        A = 1,
        m = 0,
        v = "",
        k = i,
        I = o,
        R = n,
        M = v;
      D;

    )
      switch (((S = m), (m = Ar()))) {
        case 40:
          if (S != 108 && lt(M, h - 1) == 58) {
            Qa((M += ue(qu(m), "&", "&\f")), "&\f", ay(d ? a[d - 1] : 0)) !=
              -1 && (A = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          M += qu(m);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          M += Ex(S);
          break;
        case 92:
          M += Cx(_a() - 1, 7);
          continue;
        case 47:
          switch (ui()) {
            case 42:
            case 47:
              Vo(Rx(bx(Ar(), _a()), t, r, l), l);
              break;
            default:
              M += "/";
          }
          break;
        case 123 * E:
          a[d++] = Or(M) * A;
        case 125 * E:
        case 59:
        case 0:
          switch (m) {
            case 0:
            case 125:
              D = 0;
            case 59 + p:
              A == -1 && (M = ue(M, /\f/g, "")),
                x > 0 &&
                  Or(M) - h &&
                  Vo(
                    x > 32
                      ? Wh(M + ";", n, r, h - 1, l)
                      : Wh(ue(M, " ", "") + ";", n, r, h - 2, l),
                    l
                  );
              break;
            case 59:
              M += ";";
            default:
              if (
                (Vo(
                  (R = Yh(M, t, r, d, p, i, a, v, (k = []), (I = []), h, o)),
                  o
                ),
                m === 123)
              )
                if (p === 0) ja(M, t, R, R, k, o, h, a, I);
                else
                  switch (y === 99 && lt(M, 3) === 110 ? 100 : y) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ja(
                        e,
                        R,
                        R,
                        n &&
                          Vo(Yh(e, R, R, 0, 0, i, a, v, i, (k = []), h, I), I),
                        i,
                        I,
                        h,
                        a,
                        n ? k : I
                      );
                      break;
                    default:
                      ja(M, R, R, R, [""], I, 0, a, I);
                  }
          }
          (d = p = x = 0), (E = A = 1), (v = M = ""), (h = s);
          break;
        case 58:
          (h = 1 + Or(M)), (x = S);
        default:
          if (E < 1) {
            if (m == 123) --E;
            else if (m == 125 && E++ == 0 && xx() == 125) continue;
          }
          switch (((M += Qf(m)), m * E)) {
            case 38:
              A = p > 0 ? 1 : ((M += "\f"), -1);
              break;
            case 44:
              (a[d++] = (Or(M) - 1) * A), (A = 1);
              break;
            case 64:
              ui() === 45 && (M += qu(Ar())),
                (y = ui()),
                (p = h = Or((v = M += Ix(_a())))),
                m++;
              break;
            case 45:
              S === 45 && Or(M) == 2 && (E = 0);
          }
      }
    return o;
  }
  function Yh(e, t, r, n, i, o, s, a, l, d, p, h) {
    for (
      var y = i - 1, x = i === 0 ? o : [""], S = uy(x), E = 0, D = 0, A = 0;
      E < n;
      ++E
    )
      for (var m = 0, v = go(e, y + 1, (y = ay((D = s[E])))), k = e; m < S; ++m)
        (k = ly(D > 0 ? x[m] + " " + v : ue(v, /&\f/g, x[m]))) && (l[A++] = k);
    return eu(e, t, r, i === 0 ? Zl : a, l, d, p, h);
  }
  function Rx(e, t, r, n) {
    return eu(e, t, r, oy, Qf(wx()), go(e, 2, -2), 0, n);
  }
  function Wh(e, t, r, n, i) {
    return eu(e, t, r, Nf, go(e, 0, n), go(e, n + 1, -1), n, i);
  }
  function dy(e, t, r) {
    switch (vx(e, t)) {
      case 5103:
        return Ee + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return Ee + e + e;
      case 4789:
        return is + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return Ee + e + is + e + Te + e + e;
      case 5936:
        switch (lt(e, t + 11)) {
          case 114:
            return Ee + e + Te + ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return Ee + e + Te + ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return Ee + e + Te + ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
      case 6828:
      case 4268:
      case 2903:
        return Ee + e + Te + e + e;
      case 6165:
        return Ee + e + Te + "flex-" + e + e;
      case 5187:
        return (
          Ee +
          e +
          ue(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + Te + "flex-$1$2") +
          e
        );
      case 5443:
        return (
          Ee +
          e +
          Te +
          "flex-item-" +
          ue(e, /flex-|-self/g, "") +
          ($r(e, /flex-|baseline/)
            ? ""
            : Te + "grid-row-" + ue(e, /flex-|-self/g, "")) +
          e
        );
      case 4675:
        return (
          Ee +
          e +
          Te +
          "flex-line-pack" +
          ue(e, /align-content|flex-|-self/g, "") +
          e
        );
      case 5548:
        return Ee + e + Te + ue(e, "shrink", "negative") + e;
      case 5292:
        return Ee + e + Te + ue(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          Ee +
          "box-" +
          ue(e, "-grow", "") +
          Ee +
          e +
          Te +
          ue(e, "grow", "positive") +
          e
        );
      case 4554:
        return Ee + ue(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
      case 6187:
        return (
          ue(
            ue(ue(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return ue(e, /(image-set\([^]*)/, Ee + "$1$`$1");
      case 4968:
        return (
          ue(
            ue(
              e,
              /(.+:)(flex-)?(.*)/,
              Ee + "box-pack:$3" + Te + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          Ee +
          e +
          e
        );
      case 4200:
        if (!$r(e, /flex-|baseline/))
          return Te + "grid-column-align" + go(e, t) + e;
        break;
      case 2592:
      case 3360:
        return Te + ue(e, "template-", "") + e;
      case 4384:
      case 3616:
        return r &&
          r.some(function (n, i) {
            return (t = i), $r(n.props, /grid-\w+-end/);
          })
          ? ~Qa(e + (r = r[t].value), "span", 0)
            ? e
            : Te +
              ue(e, "-start", "") +
              e +
              Te +
              "grid-row-span:" +
              (~Qa(r, "span", 0)
                ? $r(r, /\d+/)
                : +$r(r, /\d+/) - +$r(e, /\d+/)) +
              ";"
          : Te + ue(e, "-start", "") + e;
      case 4896:
      case 4128:
        return r &&
          r.some(function (n) {
            return $r(n.props, /grid-\w+-start/);
          })
          ? e
          : Te + ue(ue(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return ue(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Or(e) - 1 - t > 6)
          switch (lt(e, t + 1)) {
            case 109:
              if (lt(e, t + 4) !== 45) break;
            case 102:
              return (
                ue(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    Ee +
                    "$2-$3$1" +
                    is +
                    (lt(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Qa(e, "stretch", 0)
                ? dy(ue(e, "stretch", "fill-available"), t, r) + e
                : e;
          }
        break;
      case 5152:
      case 5920:
        return ue(
          e,
          /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
          function (n, i, o, s, a, l, d) {
            return (
              Te +
              i +
              ":" +
              o +
              d +
              (s ? Te + i + "-span:" + (a ? l : +l - +o) + d : "") +
              e
            );
          }
        );
      case 4949:
        if (lt(e, t + 6) === 121) return ue(e, ":", ":" + Ee) + e;
        break;
      case 6444:
        switch (lt(e, lt(e, 14) === 45 ? 18 : 11)) {
          case 120:
            return (
              ue(
                e,
                /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                "$1" +
                  Ee +
                  (lt(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  Ee +
                  "$2$3$1" +
                  Te +
                  "$2box$3"
              ) + e
            );
          case 100:
            return ue(e, ":", ":" + Te) + e;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return ue(e, "scroll-", "scroll-snap-") + e;
    }
    return e;
  }
  function ml(e, t) {
    for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
    return r;
  }
  function Dx(e, t, r, n) {
    switch (e.type) {
      case yx:
        if (e.children.length) break;
      case mx:
      case Nf:
        return (e.return = e.return || e.value);
      case oy:
        return "";
      case sy:
        return (e.return = e.value + "{" + ml(e.children, n) + "}");
      case Zl:
        if (!Or((e.value = e.props.join(",")))) return "";
    }
    return Or((r = ml(e.children, n)))
      ? (e.return = e.value + "{" + r + "}")
      : "";
  }
  function Ox(e) {
    var t = uy(e);
    return function (r, n, i, o) {
      for (var s = "", a = 0; a < t; a++) s += e[a](r, n, i, o) || "";
      return s;
    };
  }
  function Tx(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  function Mx(e, t, r, n) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Nf:
          e.return = dy(e.value, e.length, r);
          return;
        case sy:
          return ml([wn(e, { value: ue(e.value, "@", "@" + Ee) })], n);
        case Zl:
          if (e.length)
            return Ax((r = e.props), function (i) {
              switch ($r(i, (n = /(::plac\w+|:read-\w+)/))) {
                case ":read-only":
                case ":read-write":
                  Di(wn(e, { props: [ue(i, /:(read-\w+)/, ":" + is + "$1")] })),
                    Di(wn(e, { props: [i] })),
                    dd(e, { props: Uh(r, n) });
                  break;
                case "::placeholder":
                  Di(
                    wn(e, {
                      props: [ue(i, /:(plac\w+)/, ":" + Ee + "input-$1")],
                    })
                  ),
                    Di(
                      wn(e, { props: [ue(i, /:(plac\w+)/, ":" + is + "$1")] })
                    ),
                    Di(
                      wn(e, { props: [ue(i, /:(plac\w+)/, Te + "input-$1")] })
                    ),
                    Di(wn(e, { props: [i] })),
                    dd(e, { props: Uh(r, n) });
                  break;
              }
              return "";
            });
      }
  }
  var Px = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    _t = {},
    yo =
      (typeof process < "u" &&
        _t !== void 0 &&
        (_t.REACT_APP_SC_ATTR || _t.SC_ATTR)) ||
      "data-styled",
    fy = "active",
    py = "data-styled-version",
    ru = "6.1.8",
    _f = `/*!sc*/
`,
    jf = typeof window < "u" && "HTMLElement" in window,
    zx = !!(typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        _t !== void 0 &&
        _t.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        _t.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? _t.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        _t.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        _t !== void 0 &&
        _t.SC_DISABLE_SPEEDY !== void 0 &&
        _t.SC_DISABLE_SPEEDY !== "" &&
        _t.SC_DISABLE_SPEEDY !== "false" &&
        _t.SC_DISABLE_SPEEDY),
    Nx = {},
    nu = Object.freeze([]),
    vo = Object.freeze({});
  function hy(e, t, r) {
    return (
      r === void 0 && (r = vo), (e.theme !== r.theme && e.theme) || t || r.theme
    );
  }
  var gy = new Set([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "u",
      "ul",
      "use",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ]),
    Qx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    _x = /(^-|-$)/g;
  function Jh(e) {
    return e.replace(Qx, "-").replace(_x, "");
  }
  var jx = /(a)(d)/gi,
    ca = 52,
    Hh = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
    };
  function hd(e) {
    var t,
      r = "";
    for (t = Math.abs(e); t > ca; t = (t / ca) | 0) r = Hh(t % ca) + r;
    return (Hh(t % ca) + r).replace(jx, "$1-$2");
  }
  var ec,
    my = 5381,
    Vi = function (e, t) {
      for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
      return e;
    },
    yy = function (e) {
      return Vi(my, e);
    };
  function vy(e) {
    return hd(yy(e) >>> 0);
  }
  function Fx(e) {
    return e.displayName || e.name || "Component";
  }
  function tc(e) {
    return typeof e == "string" && !0;
  }
  var Ay = typeof Symbol == "function" && Symbol.for,
    wy = Ay ? Symbol.for("react.memo") : 60115,
    Lx = Ay ? Symbol.for("react.forward_ref") : 60112,
    Ux = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    Yx = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    xy = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Wx =
      (((ec = {})[Lx] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
      (ec[wy] = xy),
      ec);
  function Vh(e) {
    return ("type" in (t = e) && t.type.$$typeof) === wy
      ? xy
      : "$$typeof" in e
      ? Wx[e.$$typeof]
      : Ux;
    var t;
  }
  var Jx = Object.defineProperty,
    Hx = Object.getOwnPropertyNames,
    $h = Object.getOwnPropertySymbols,
    Vx = Object.getOwnPropertyDescriptor,
    $x = Object.getPrototypeOf,
    Gh = Object.prototype;
  function Sy(e, t, r) {
    if (typeof t != "string") {
      if (Gh) {
        var n = $x(t);
        n && n !== Gh && Sy(e, n, r);
      }
      var i = Hx(t);
      $h && (i = i.concat($h(t)));
      for (var o = Vh(e), s = Vh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!(l in Yx || (r && r[l]) || (s && l in s) || (o && l in o))) {
          var d = Vx(t, l);
          try {
            Jx(e, l, d);
          } catch {}
        }
      }
    }
    return e;
  }
  function mi(e) {
    return typeof e == "function";
  }
  function Ff(e) {
    return typeof e == "object" && "styledComponentId" in e;
  }
  function ii(e, t) {
    return e && t ? "".concat(e, " ").concat(t) : e || t || "";
  }
  function gd(e, t) {
    if (e.length === 0) return "";
    for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
    return r;
  }
  function Es(e) {
    return (
      e !== null &&
      typeof e == "object" &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
    );
  }
  function md(e, t, r) {
    if ((r === void 0 && (r = !1), !r && !Es(e) && !Array.isArray(e))) return t;
    if (Array.isArray(t))
      for (var n = 0; n < t.length; n++) e[n] = md(e[n], t[n]);
    else if (Es(t)) for (var n in t) e[n] = md(e[n], t[n]);
    return e;
  }
  function Lf(e, t) {
    Object.defineProperty(e, "toString", { value: t });
  }
  function yi(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
        .concat(e, " for more information.")
        .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
    );
  }
  var Gx = (function () {
      function e(t) {
        (this.groupSizes = new Uint32Array(512)),
          (this.length = 512),
          (this.tag = t);
      }
      return (
        (e.prototype.indexOfGroup = function (t) {
          for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
          return r;
        }),
        (e.prototype.insertRules = function (t, r) {
          if (t >= this.groupSizes.length) {
            for (var n = this.groupSizes, i = n.length, o = i; t >= o; )
              if ((o <<= 1) < 0) throw yi(16, "".concat(t));
            (this.groupSizes = new Uint32Array(o)),
              this.groupSizes.set(n),
              (this.length = o);
            for (var s = i; s < o; s++) this.groupSizes[s] = 0;
          }
          for (
            var a = this.indexOfGroup(t + 1), l = ((s = 0), r.length);
            s < l;
            s++
          )
            this.tag.insertRule(a, r[s]) && (this.groupSizes[t]++, a++);
        }),
        (e.prototype.clearGroup = function (t) {
          if (t < this.length) {
            var r = this.groupSizes[t],
              n = this.indexOfGroup(t),
              i = n + r;
            this.groupSizes[t] = 0;
            for (var o = n; o < i; o++) this.tag.deleteRule(n);
          }
        }),
        (e.prototype.getGroup = function (t) {
          var r = "";
          if (t >= this.length || this.groupSizes[t] === 0) return r;
          for (
            var n = this.groupSizes[t],
              i = this.indexOfGroup(t),
              o = i + n,
              s = i;
            s < o;
            s++
          )
            r += "".concat(this.tag.getRule(s)).concat(_f);
          return r;
        }),
        e
      );
    })(),
    Fa = new Map(),
    yl = new Map(),
    La = 1,
    da = function (e) {
      if (Fa.has(e)) return Fa.get(e);
      for (; yl.has(La); ) La++;
      var t = La++;
      return Fa.set(e, t), yl.set(t, e), t;
    },
    Xx = function (e, t) {
      (La = t + 1), Fa.set(e, t), yl.set(t, e);
    },
    Kx = "style[".concat(yo, "][").concat(py, '="').concat(ru, '"]'),
    Zx = new RegExp(
      "^".concat(yo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
    ),
    qx = function (e, t, r) {
      for (var n, i = r.split(","), o = 0, s = i.length; o < s; o++)
        (n = i[o]) && e.registerName(t, n);
    },
    eS = function (e, t) {
      for (
        var r,
          n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(_f),
          i = [],
          o = 0,
          s = n.length;
        o < s;
        o++
      ) {
        var a = n[o].trim();
        if (a) {
          var l = a.match(Zx);
          if (l) {
            var d = 0 | parseInt(l[1], 10),
              p = l[2];
            d !== 0 && (Xx(p, d), qx(e, p, l[3]), e.getTag().insertRules(d, i)),
              (i.length = 0);
          } else i.push(a);
        }
      }
    };
  function tS() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  }
  var ky = function (e) {
      var t = document.head,
        r = e || t,
        n = document.createElement("style"),
        i = (function (a) {
          var l = Array.from(a.querySelectorAll("style[".concat(yo, "]")));
          return l[l.length - 1];
        })(r),
        o = i !== void 0 ? i.nextSibling : null;
      n.setAttribute(yo, fy), n.setAttribute(py, ru);
      var s = tS();
      return s && n.setAttribute("nonce", s), r.insertBefore(n, o), n;
    },
    rS = (function () {
      function e(t) {
        (this.element = ky(t)),
          this.element.appendChild(document.createTextNode("")),
          (this.sheet = (function (r) {
            if (r.sheet) return r.sheet;
            for (
              var n = document.styleSheets, i = 0, o = n.length;
              i < o;
              i++
            ) {
              var s = n[i];
              if (s.ownerNode === r) return s;
            }
            throw yi(17);
          })(this.element)),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, r) {
          try {
            return this.sheet.insertRule(r, t), this.length++, !0;
          } catch {
            return !1;
          }
        }),
        (e.prototype.deleteRule = function (t) {
          this.sheet.deleteRule(t), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          var r = this.sheet.cssRules[t];
          return r && r.cssText ? r.cssText : "";
        }),
        e
      );
    })(),
    nS = (function () {
      function e(t) {
        (this.element = ky(t)),
          (this.nodes = this.element.childNodes),
          (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, r) {
          if (t <= this.length && t >= 0) {
            var n = document.createTextNode(r);
            return (
              this.element.insertBefore(n, this.nodes[t] || null),
              this.length++,
              !0
            );
          }
          return !1;
        }),
        (e.prototype.deleteRule = function (t) {
          this.element.removeChild(this.nodes[t]), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.nodes[t].textContent : "";
        }),
        e
      );
    })(),
    iS = (function () {
      function e(t) {
        (this.rules = []), (this.length = 0);
      }
      return (
        (e.prototype.insertRule = function (t, r) {
          return (
            t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0)
          );
        }),
        (e.prototype.deleteRule = function (t) {
          this.rules.splice(t, 1), this.length--;
        }),
        (e.prototype.getRule = function (t) {
          return t < this.length ? this.rules[t] : "";
        }),
        e
      );
    })(),
    Xh = jf,
    oS = { isServer: !jf, useCSSOMInjection: !zx },
    vl = (function () {
      function e(t, r, n) {
        t === void 0 && (t = vo), r === void 0 && (r = {});
        var i = this;
        (this.options = ct(ct({}, oS), t)),
          (this.gs = r),
          (this.names = new Map(n)),
          (this.server = !!t.isServer),
          !this.server &&
            jf &&
            Xh &&
            ((Xh = !1),
            (function (o) {
              for (
                var s = document.querySelectorAll(Kx), a = 0, l = s.length;
                a < l;
                a++
              ) {
                var d = s[a];
                d &&
                  d.getAttribute(yo) !== fy &&
                  (eS(o, d), d.parentNode && d.parentNode.removeChild(d));
              }
            })(this)),
          Lf(this, function () {
            return (function (o) {
              for (
                var s = o.getTag(),
                  a = s.length,
                  l = "",
                  d = function (h) {
                    var y = (function (A) {
                      return yl.get(A);
                    })(h);
                    if (y === void 0) return "continue";
                    var x = o.names.get(y),
                      S = s.getGroup(h);
                    if (x === void 0 || S.length === 0) return "continue";
                    var E = ""
                        .concat(yo, ".g")
                        .concat(h, '[id="')
                        .concat(y, '"]'),
                      D = "";
                    x !== void 0 &&
                      x.forEach(function (A) {
                        A.length > 0 && (D += "".concat(A, ","));
                      }),
                      (l += ""
                        .concat(S)
                        .concat(E, '{content:"')
                        .concat(D, '"}')
                        .concat(_f));
                  },
                  p = 0;
                p < a;
                p++
              )
                d(p);
              return l;
            })(i);
          });
      }
      return (
        (e.registerId = function (t) {
          return da(t);
        }),
        (e.prototype.reconstructWithOptions = function (t, r) {
          return (
            r === void 0 && (r = !0),
            new e(
              ct(ct({}, this.options), t),
              this.gs,
              (r && this.names) || void 0
            )
          );
        }),
        (e.prototype.allocateGSInstance = function (t) {
          return (this.gs[t] = (this.gs[t] || 0) + 1);
        }),
        (e.prototype.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((t = (function (r) {
                var n = r.useCSSOMInjection,
                  i = r.target;
                return r.isServer ? new iS(i) : n ? new rS(i) : new nS(i);
              })(this.options)),
              new Gx(t)))
          );
          var t;
        }),
        (e.prototype.hasNameForId = function (t, r) {
          return this.names.has(t) && this.names.get(t).has(r);
        }),
        (e.prototype.registerName = function (t, r) {
          if ((da(t), this.names.has(t))) this.names.get(t).add(r);
          else {
            var n = new Set();
            n.add(r), this.names.set(t, n);
          }
        }),
        (e.prototype.insertRules = function (t, r, n) {
          this.registerName(t, r), this.getTag().insertRules(da(t), n);
        }),
        (e.prototype.clearNames = function (t) {
          this.names.has(t) && this.names.get(t).clear();
        }),
        (e.prototype.clearRules = function (t) {
          this.getTag().clearGroup(da(t)), this.clearNames(t);
        }),
        (e.prototype.clearTag = function () {
          this.tag = void 0;
        }),
        e
      );
    })(),
    sS = /&/g,
    aS = /^\s*\/\/.*$/gm;
  function Ey(e, t) {
    return e.map(function (r) {
      return (
        r.type === "rule" &&
          ((r.value = "".concat(t, " ").concat(r.value)),
          (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
          (r.props = r.props.map(function (n) {
            return "".concat(t, " ").concat(n);
          }))),
        Array.isArray(r.children) &&
          r.type !== "@keyframes" &&
          (r.children = Ey(r.children, t)),
        r
      );
    });
  }
  function lS(e) {
    var t,
      r,
      n,
      i = e === void 0 ? vo : e,
      o = i.options,
      s = o === void 0 ? vo : o,
      a = i.plugins,
      l = a === void 0 ? nu : a,
      d = function (y, x, S) {
        return S.startsWith(r) &&
          S.endsWith(r) &&
          S.replaceAll(r, "").length > 0
          ? ".".concat(t)
          : y;
      },
      p = l.slice();
    p.push(function (y) {
      y.type === Zl &&
        y.value.includes("&") &&
        (y.props[0] = y.props[0].replace(sS, r).replace(n, d));
    }),
      s.prefix && p.push(Mx),
      p.push(Dx);
    var h = function (y, x, S, E) {
      x === void 0 && (x = ""),
        S === void 0 && (S = ""),
        E === void 0 && (E = "&"),
        (t = E),
        (r = x),
        (n = new RegExp("\\".concat(r, "\\b"), "g"));
      var D = y.replace(aS, ""),
        A = Bx(S || x ? "".concat(S, " ").concat(x, " { ").concat(D, " }") : D);
      s.namespace && (A = Ey(A, s.namespace));
      var m = [];
      return (
        ml(
          A,
          Ox(
            p.concat(
              Tx(function (v) {
                return m.push(v);
              })
            )
          )
        ),
        m
      );
    };
    return (
      (h.hash = l.length
        ? l
            .reduce(function (y, x) {
              return x.name || yi(15), Vi(y, x.name);
            }, my)
            .toString()
        : ""),
      h
    );
  }
  var uS = new vl(),
    yd = lS(),
    Cy = O.createContext({
      shouldForwardProp: void 0,
      styleSheet: uS,
      stylis: yd,
    });
  Cy.Consumer;
  O.createContext(void 0);
  function vd() {
    return B.useContext(Cy);
  }
  var cS = (function () {
      function e(t, r) {
        var n = this;
        (this.inject = function (i, o) {
          o === void 0 && (o = yd);
          var s = n.name + o.hash;
          i.hasNameForId(n.id, s) ||
            i.insertRules(n.id, s, o(n.rules, s, "@keyframes"));
        }),
          (this.name = t),
          (this.id = "sc-keyframes-".concat(t)),
          (this.rules = r),
          Lf(this, function () {
            throw yi(12, String(n.name));
          });
      }
      return (
        (e.prototype.getName = function (t) {
          return t === void 0 && (t = yd), this.name + t.hash;
        }),
        e
      );
    })(),
    dS = function (e) {
      return e >= "A" && e <= "Z";
    };
  function Kh(e) {
    for (var t = "", r = 0; r < e.length; r++) {
      var n = e[r];
      if (r === 1 && n === "-" && e[0] === "-") return e;
      dS(n) ? (t += "-" + n.toLowerCase()) : (t += n);
    }
    return t.startsWith("ms-") ? "-" + t : t;
  }
  var by = function (e) {
      return e == null || e === !1 || e === "";
    },
    Iy = function (e) {
      var t,
        r,
        n = [];
      for (var i in e) {
        var o = e[i];
        e.hasOwnProperty(i) &&
          !by(o) &&
          ((Array.isArray(o) && o.isCss) || mi(o)
            ? n.push("".concat(Kh(i), ":"), o, ";")
            : Es(o)
            ? n.push.apply(
                n,
                ks(ks(["".concat(i, " {")], Iy(o), !1), ["}"], !1)
              )
            : n.push(
                ""
                  .concat(Kh(i), ": ")
                  .concat(
                    ((t = i),
                    (r = o) == null || typeof r == "boolean" || r === ""
                      ? ""
                      : typeof r != "number" ||
                        r === 0 ||
                        t in Px ||
                        t.startsWith("--")
                      ? String(r).trim()
                      : "".concat(r, "px")),
                    ";"
                  )
              ));
      }
      return n;
    };
  function Qn(e, t, r, n) {
    if (by(e)) return [];
    if (Ff(e)) return [".".concat(e.styledComponentId)];
    if (mi(e)) {
      if (!mi((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
        return [e];
      var i = e(t);
      return Qn(i, t, r, n);
    }
    var o;
    return e instanceof cS
      ? r
        ? (e.inject(r, n), [e.getName(n)])
        : [e]
      : Es(e)
      ? Iy(e)
      : Array.isArray(e)
      ? Array.prototype.concat.apply(
          nu,
          e.map(function (s) {
            return Qn(s, t, r, n);
          })
        )
      : [e.toString()];
  }
  function By(e) {
    for (var t = 0; t < e.length; t += 1) {
      var r = e[t];
      if (mi(r) && !Ff(r)) return !1;
    }
    return !0;
  }
  var fS = yy(ru),
    pS = (function () {
      function e(t, r, n) {
        (this.rules = t),
          (this.staticRulesId = ""),
          (this.isStatic = (n === void 0 || n.isStatic) && By(t)),
          (this.componentId = r),
          (this.baseHash = Vi(fS, r)),
          (this.baseStyle = n),
          vl.registerId(r);
      }
      return (
        (e.prototype.generateAndInjectStyles = function (t, r, n) {
          var i = this.baseStyle
            ? this.baseStyle.generateAndInjectStyles(t, r, n)
            : "";
          if (this.isStatic && !n.hash)
            if (
              this.staticRulesId &&
              r.hasNameForId(this.componentId, this.staticRulesId)
            )
              i = ii(i, this.staticRulesId);
            else {
              var o = gd(Qn(this.rules, t, r, n)),
                s = hd(Vi(this.baseHash, o) >>> 0);
              if (!r.hasNameForId(this.componentId, s)) {
                var a = n(o, ".".concat(s), void 0, this.componentId);
                r.insertRules(this.componentId, s, a);
              }
              (i = ii(i, s)), (this.staticRulesId = s);
            }
          else {
            for (
              var l = Vi(this.baseHash, n.hash), d = "", p = 0;
              p < this.rules.length;
              p++
            ) {
              var h = this.rules[p];
              if (typeof h == "string") d += h;
              else if (h) {
                var y = gd(Qn(h, t, r, n));
                (l = Vi(l, y + p)), (d += y);
              }
            }
            if (d) {
              var x = hd(l >>> 0);
              r.hasNameForId(this.componentId, x) ||
                r.insertRules(
                  this.componentId,
                  x,
                  n(d, ".".concat(x), void 0, this.componentId)
                ),
                (i = ii(i, x));
            }
          }
          return i;
        }),
        e
      );
    })(),
    Cs = O.createContext(void 0);
  Cs.Consumer;
  function hS(e) {
    var t = O.useContext(Cs),
      r = B.useMemo(
        function () {
          return (function (n, i) {
            if (!n) throw yi(14);
            if (mi(n)) {
              var o = n(i);
              return o;
            }
            if (Array.isArray(n) || typeof n != "object") throw yi(8);
            return i ? ct(ct({}, i), n) : n;
          })(e.theme, t);
        },
        [e.theme, t]
      );
    return e.children
      ? O.createElement(Cs.Provider, { value: r }, e.children)
      : null;
  }
  var rc = {};
  function gS(e, t, r) {
    var n = Ff(e),
      i = e,
      o = !tc(e),
      s = t.attrs,
      a = s === void 0 ? nu : s,
      l = t.componentId,
      d =
        l === void 0
          ? (function (k, I) {
              var R = typeof k != "string" ? "sc" : Jh(k);
              rc[R] = (rc[R] || 0) + 1;
              var M = "".concat(R, "-").concat(vy(ru + R + rc[R]));
              return I ? "".concat(I, "-").concat(M) : M;
            })(t.displayName, t.parentComponentId)
          : l,
      p = t.displayName,
      h =
        p === void 0
          ? (function (k) {
              return tc(k) ? "styled.".concat(k) : "Styled(".concat(Fx(k), ")");
            })(e)
          : p,
      y =
        t.displayName && t.componentId
          ? "".concat(Jh(t.displayName), "-").concat(t.componentId)
          : t.componentId || d,
      x = n && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
      S = t.shouldForwardProp;
    if (n && i.shouldForwardProp) {
      var E = i.shouldForwardProp;
      if (t.shouldForwardProp) {
        var D = t.shouldForwardProp;
        S = function (k, I) {
          return E(k, I) && D(k, I);
        };
      } else S = E;
    }
    var A = new pS(r, y, n ? i.componentStyle : void 0);
    function m(k, I) {
      return (function (R, M, F) {
        var re = R.attrs,
          G = R.componentStyle,
          oe = R.defaultProps,
          ne = R.foldedComponentIds,
          de = R.styledComponentId,
          ve = R.target,
          Se = O.useContext(Cs),
          Re = vd(),
          Ae = R.shouldForwardProp || Re.shouldForwardProp,
          U = hy(M, Se, oe) || vo,
          H = (function (L, j, J) {
            for (
              var te, _ = ct(ct({}, j), { className: void 0, theme: J }), $ = 0;
              $ < L.length;
              $ += 1
            ) {
              var se = mi((te = L[$])) ? te(_) : te;
              for (var ae in se)
                _[ae] =
                  ae === "className"
                    ? ii(_[ae], se[ae])
                    : ae === "style"
                    ? ct(ct({}, _[ae]), se[ae])
                    : se[ae];
            }
            return (
              j.className && (_.className = ii(_.className, j.className)), _
            );
          })(re, M, U),
          X = H.as || ve,
          ee = {};
        for (var b in H)
          H[b] === void 0 ||
            b[0] === "$" ||
            b === "as" ||
            (b === "theme" && H.theme === U) ||
            (b === "forwardedAs"
              ? (ee.as = H.forwardedAs)
              : (Ae && !Ae(b, X)) || (ee[b] = H[b]));
        var P = (function (L, j) {
            var J = vd(),
              te = L.generateAndInjectStyles(j, J.styleSheet, J.stylis);
            return te;
          })(G, H),
          N = ii(ne, de);
        return (
          P && (N += " " + P),
          H.className && (N += " " + H.className),
          (ee[tc(X) && !gy.has(X) ? "class" : "className"] = N),
          (ee.ref = F),
          B.createElement(X, ee)
        );
      })(v, k, I);
    }
    m.displayName = h;
    var v = O.forwardRef(m);
    return (
      (v.attrs = x),
      (v.componentStyle = A),
      (v.displayName = h),
      (v.shouldForwardProp = S),
      (v.foldedComponentIds = n
        ? ii(i.foldedComponentIds, i.styledComponentId)
        : ""),
      (v.styledComponentId = y),
      (v.target = n ? i.target : e),
      Object.defineProperty(v, "defaultProps", {
        get: function () {
          return this._foldedDefaultProps;
        },
        set: function (k) {
          this._foldedDefaultProps = n
            ? (function (I) {
                for (var R = [], M = 1; M < arguments.length; M++)
                  R[M - 1] = arguments[M];
                for (var F = 0, re = R; F < re.length; F++) md(I, re[F], !0);
                return I;
              })({}, i.defaultProps, k)
            : k;
        },
      }),
      Lf(v, function () {
        return ".".concat(v.styledComponentId);
      }),
      o &&
        Sy(v, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
        }),
      v
    );
  }
  function Zh(e, t) {
    for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
      r.push(t[n], e[n + 1]);
    return r;
  }
  var qh = function (e) {
    return Object.assign(e, { isCss: !0 });
  };
  function K(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    if (mi(e) || Es(e)) return qh(Qn(Zh(nu, ks([e], t, !0))));
    var n = e;
    return t.length === 0 && n.length === 1 && typeof n[0] == "string"
      ? Qn(n)
      : qh(Qn(Zh(n, t)));
  }
  function Ad(e, t, r) {
    if ((r === void 0 && (r = vo), !t)) throw yi(1, t);
    var n = function (i) {
      for (var o = [], s = 1; s < arguments.length; s++)
        o[s - 1] = arguments[s];
      return e(t, r, K.apply(void 0, ks([i], o, !1)));
    };
    return (
      (n.attrs = function (i) {
        return Ad(
          e,
          t,
          ct(ct({}, r), {
            attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
          })
        );
      }),
      (n.withConfig = function (i) {
        return Ad(e, t, ct(ct({}, r), i));
      }),
      n
    );
  }
  var Ry = function (e) {
      return Ad(gS, e);
    },
    z = Ry;
  gy.forEach(function (e) {
    z[e] = Ry(e);
  });
  var mS = (function () {
    function e(t, r) {
      (this.rules = t),
        (this.componentId = r),
        (this.isStatic = By(t)),
        vl.registerId(this.componentId + 1);
    }
    return (
      (e.prototype.createStyles = function (t, r, n, i) {
        var o = i(gd(Qn(this.rules, r, n, i)), ""),
          s = this.componentId + t;
        n.insertRules(s, s, o);
      }),
      (e.prototype.removeStyles = function (t, r) {
        r.clearRules(this.componentId + t);
      }),
      (e.prototype.renderStyles = function (t, r, n, i) {
        t > 2 && vl.registerId(this.componentId + t),
          this.removeStyles(t, n),
          this.createStyles(t, r, n, i);
      }),
      e
    );
  })();
  function yS(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    var n = K.apply(void 0, ks([e], t, !1)),
      i = "sc-global-".concat(vy(JSON.stringify(n))),
      o = new mS(n, i),
      s = function (l) {
        var d = vd(),
          p = O.useContext(Cs),
          h = O.useRef(d.styleSheet.allocateGSInstance(i)).current;
        return (
          d.styleSheet.server && a(h, l, d.styleSheet, p, d.stylis),
          O.useLayoutEffect(
            function () {
              if (!d.styleSheet.server)
                return (
                  a(h, l, d.styleSheet, p, d.stylis),
                  function () {
                    return o.removeStyles(h, d.styleSheet);
                  }
                );
            },
            [h, l, d.styleSheet, p, d.stylis]
          ),
          null
        );
      };
    function a(l, d, p, h, y) {
      if (o.isStatic) o.renderStyles(l, Nx, p, y);
      else {
        var x = ct(ct({}, d), { theme: hy(d, h, s.defaultProps) });
        o.renderStyles(l, x, p, y);
      }
    }
    return O.memo(s);
  }
  const Uf = "4px 4px 10px 0 rgba(0, 0, 0, 0.35)",
    Yf = "inset 2px 2px 3px rgba(0,0,0,0.2)",
    xr = () => K`
  -webkit-text-fill-color: ${({ theme: e }) => e.materialTextDisabled};
  color: ${({ theme: e }) => e.materialTextDisabled};
  text-shadow: 1px 1px ${({ theme: e }) => e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,
    Sr = ({ background: e = "material", color: t = "materialText" } = {}) => K`
  box-sizing: border-box;
  display: inline-block;
  background: ${({ theme: r }) => r[e]};
  color: ${({ theme: r }) => r[t]};
`,
    js = ({
      mainColor: e = "black",
      secondaryColor: t = "transparent",
      pixelSize: r = 2,
    }) => K`
  background-image: ${[
    `linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,
    `linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,
  ].join(",")};
  background-color: ${t};
  background-size: ${`${r * 2}px ${r * 2}px`};
  background-position: 0 0, ${`${r}px ${r}px`};
`,
    vi = () => K`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({ theme: e }) => e.materialText};
  background: ${({ $disabled: e, theme: t }) => (e ? t.flatLight : t.canvas)};
  border: 2px solid ${({ theme: e }) => e.canvas};
  outline: 2px solid ${({ theme: e }) => e.flatDark};
  outline-offset: -4px;
`,
    Oi = {
      button: {
        topLeftOuter: "borderLightest",
        topLeftInner: "borderLight",
        bottomRightInner: "borderDark",
        bottomRightOuter: "borderDarkest",
      },
      buttonPressed: {
        topLeftOuter: "borderDarkest",
        topLeftInner: "borderDark",
        bottomRightInner: "borderLight",
        bottomRightOuter: "borderLightest",
      },
      buttonThin: {
        topLeftOuter: "borderLightest",
        topLeftInner: null,
        bottomRightInner: null,
        bottomRightOuter: "borderDark",
      },
      buttonThinPressed: {
        topLeftOuter: "borderDark",
        topLeftInner: null,
        bottomRightInner: null,
        bottomRightOuter: "borderLightest",
      },
      field: {
        topLeftOuter: "borderDark",
        topLeftInner: "borderDarkest",
        bottomRightInner: "borderLight",
        bottomRightOuter: "borderLightest",
      },
      grouping: {
        topLeftOuter: "borderDark",
        topLeftInner: "borderLightest",
        bottomRightInner: "borderDark",
        bottomRightOuter: "borderLightest",
      },
      status: {
        topLeftOuter: "borderDark",
        topLeftInner: null,
        bottomRightInner: null,
        bottomRightOuter: "borderLightest",
      },
      window: {
        topLeftOuter: "borderLight",
        topLeftInner: "borderLightest",
        bottomRightInner: "borderDark",
        bottomRightOuter: "borderDarkest",
      },
    },
    vS = ({
      theme: e,
      topLeftInner: t,
      bottomRightInner: r,
      hasShadow: n = !1,
      hasInsetShadow: i = !1,
    }) =>
      [
        n ? Uf : !1,
        i ? Yf : !1,
        t !== null ? `inset 1px 1px 0px 1px ${e[t]}` : !1,
        r !== null ? `inset -1px -1px 0 1px ${e[r]}` : !1,
      ]
        .filter(Boolean)
        .join(", "),
    He = ({ invert: e = !1, style: t = "button" } = {}) => {
      const r = {
        topLeftOuter: e ? "bottomRightOuter" : "topLeftOuter",
        topLeftInner: e ? "bottomRightInner" : "topLeftInner",
        bottomRightInner: e ? "topLeftInner" : "bottomRightInner",
        bottomRightOuter: e ? "topLeftOuter" : "bottomRightOuter",
      };
      return K`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme: n }) => n[Oi[t][r.topLeftOuter]]};
    border-top-color: ${({ theme: n }) => n[Oi[t][r.topLeftOuter]]};
    border-right-color: ${({ theme: n }) => n[Oi[t][r.bottomRightOuter]]};
    border-bottom-color: ${({ theme: n }) => n[Oi[t][r.bottomRightOuter]]};
    box-shadow: ${({ theme: n, shadow: i }) =>
      vS({
        theme: n,
        topLeftInner: Oi[t][r.topLeftInner],
        bottomRightInner: Oi[t][r.bottomRightInner],
        hasShadow: i,
      })};
  `;
    },
    Ao = () => K`
  outline: 2px dotted ${({ theme: e }) => e.materialText};
`,
    AS = (e) => Buffer.from(e).toString("base64"),
    wS = typeof btoa < "u" ? btoa : AS,
    fa = (e, t = 0) => {
      const r = `<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;
      return `url(data:image/svg+xml;base64,${wS(r)})`;
    },
    Wf = (e = "default") => K`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({ theme: t }) =>
      js({
        mainColor: e === "flat" ? t.flatLight : t.material,
        secondaryColor: e === "flat" ? t.canvas : t.borderLightest,
      })}
  }
  ::-webkit-scrollbar-thumb {
    ${Sr()}
    ${e === "flat" ? vi() : He({ style: "window" })}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme: t }) => t.material};
  }
  ::-webkit-scrollbar-button {
    ${Sr()}
    ${e === "flat" ? vi() : He({ style: "window" })}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e === "default" ? He({ style: "window", invert: !0 }) : ""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({ theme: t }) => fa(t.materialText, 90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({ theme: t }) => fa(t.materialText, 270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({ theme: t }) => fa(t.materialText, 180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({ theme: t }) => fa(t.materialText, 0)};
  }
`,
    xS = z.a`
  color: ${({ theme: e }) => e.anchor};
  font-size: inherit;
  text-decoration: ${({ underline: e }) => (e ? "underline" : "none")};
  &:visited {
    color: ${({ theme: e }) => e.anchorVisited};
  }
`,
    SS = B.forwardRef(({ children: e, underline: t = !0, ...r }, n) =>
      O.createElement(xS, { ref: n, underline: t, ...r }, e)
    );
  SS.displayName = "Anchor";
  const kS = z.header`
  ${He()};
  ${Sr()};

  position: ${(e) => {
    var t;
    return (t = e.position) !== null && t !== void 0
      ? t
      : e.fixed
      ? "fixed"
      : "absolute";
  }};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,
    Jf = B.forwardRef(
      ({ children: e, fixed: t = !0, position: r = "fixed", ...n }, i) =>
        O.createElement(
          kS,
          { fixed: t, position: t !== !1 ? r : void 0, ref: i, ...n },
          e
        )
    );
  Jf.displayName = "AppBar";
  const Si = () => {};
  function oi(e, t, r) {
    return r !== null && e > r ? r : t !== null && e < t ? t : e;
  }
  function ES(e) {
    if (Math.abs(e) < 1) {
      const r = e.toExponential().split("e-"),
        n = r[0].split(".")[1];
      return (n ? n.length : 0) + parseInt(r[1], 10);
    }
    const t = e.toString().split(".")[1];
    return t ? t.length : 0;
  }
  function eg(e, t, r) {
    const n = Math.round((e - r) / t) * t + r;
    return Number(n.toFixed(ES(t)));
  }
  function Ln(e) {
    return typeof e == "number" ? `${e}px` : e;
  }
  const CS = z.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({ size: e }) => `
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({ square: e }) => (e ? 0 : "50%")};
  overflow: hidden;
  ${({ noBorder: e, theme: t }) =>
    !e &&
    `
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({ src: e }) =>
    !e &&
    `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,
    bS = z.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,
    Dy = B.forwardRef(
      (
        {
          alt: e = "",
          children: t,
          noBorder: r = !1,
          size: n = 35,
          square: i = !1,
          src: o,
          ...s
        },
        a
      ) =>
        O.createElement(
          CS,
          { noBorder: r, ref: a, size: Ln(n), square: i, src: o, ...s },
          o ? O.createElement(bS, { src: o, alt: e }) : t
        )
    );
  Dy.displayName = "Avatar";
  const gt = { sm: "28px", md: "36px", lg: "44px" },
    IS = K`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size: e = "md" }) => gt[e]};
  width: ${({ fullWidth: e, size: t = "md", square: r }) =>
    e ? "100%" : r ? gt[t] : "auto"};
  padding: ${({ square: e }) => (e ? 0 : "0 10px")};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({ disabled: e }) => !e && "2px"};
  }
  padding-top: ${({ active: e, disabled: t }) => e && !t && "2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,
    iu = z.button`
  ${({ active: e, disabled: t, primary: r, theme: n, variant: i }) =>
    i === "flat"
      ? K`
          ${vi()}
          ${
            r
              ? `
          border: 2px solid ${n.checkmark};
            outline: 2px solid ${n.flatDark};
            outline-offset: -4px;
          `
              : `
          border: 2px solid ${n.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `
          }
          &:focus:after, &:active:after {
            ${!e && !t && Ao}
            outline-offset: -4px;
          }
        `
      : i === "menu" || i === "thin"
      ? K`
          ${Sr()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t && !e && He({ style: "buttonThin" })}
          }
          &:active {
            ${!t && He({ style: "buttonThinPressed" })}
          }
          ${e && He({ style: "buttonThinPressed" })}
          ${t && xr()}
        `
      : K`
          ${Sr()};
          border: none;
          ${t && xr()}
          ${
            e
              ? js({ mainColor: n.material, secondaryColor: n.borderLightest })
              : ""
          }
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${
              r
                ? K`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${n.borderDarkest};
                `
                : K`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `
            }

            ${He(
              e
                ? { style: i === "raised" ? "window" : "button", invert: !0 }
                : { style: i === "raised" ? "window" : "button", invert: !1 }
            )}
          }
          &:active:before {
            ${
              !t &&
              He({ style: i === "raised" ? "window" : "button", invert: !0 })
            }
          }
          &:focus:after,
          &:active:after {
            ${!e && !t && Ao}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e ? "0" : "1px"};
          }
        `}
  ${IS}
`,
    ce = B.forwardRef(
      (
        {
          onClick: e,
          disabled: t = !1,
          children: r,
          type: n = "button",
          fullWidth: i = !1,
          size: o = "md",
          square: s = !1,
          active: a = !1,
          onTouchStart: l = Si,
          primary: d = !1,
          variant: p = "default",
          ...h
        },
        y
      ) =>
        O.createElement(
          iu,
          {
            active: a,
            disabled: t,
            $disabled: t,
            fullWidth: i,
            onClick: t ? void 0 : e,
            onTouchStart: l,
            primary: d,
            ref: y,
            size: o,
            square: s,
            type: n,
            variant: p,
            ...h,
          },
          r
        )
    );
  ce.displayName = "Button";
  function Un({
    defaultValue: e,
    onChange: t,
    onChangePropName: r = "onChange",
    readOnly: n,
    value: i,
    valuePropName: o = "value",
  }) {
    const s = i !== void 0,
      [a, l] = B.useState(e),
      d = B.useCallback(
        (p) => {
          s || l(p);
        },
        [s]
      );
    if (s && typeof t != "function" && !n) {
      const p = `Warning: You provided a \`${o}\` prop to a component without an \`${r}\` handler.${
        o === "value"
          ? `This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${r}\` or \`readOnly\`.`
          : `This breaks the component state. You must provide an \`${r}\` function that updates \`${o}\`.`
      }`;
      console.warn(p);
    }
    return [s ? i : a, d];
  }
  const wd = z.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${(e) => gt[e.size]};
  width: ${(e) => (e.square ? gt[e.size] : "auto")};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${(e) => (e.square ? "space-around" : "space-between")};
  text-align: center;
  line-height: ${(e) => gt[e.size]};
  color: ${({ theme: e }) => e.materialText};
  pointer-events: ${({ $disabled: e }) => (e ? "none" : "auto")};
  font-weight: ${({ primary: e }) => (e ? "bold" : "normal")};
  &:hover {
    ${({ theme: e, $disabled: t }) =>
      !t &&
      `
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${(e) => e.$disabled && xr()}
`,
    BS = B.forwardRef(
      (
        {
          size: e = "lg",
          disabled: t,
          square: r,
          children: n,
          onClick: i,
          primary: o,
          ...s
        },
        a
      ) =>
        O.createElement(
          wd,
          {
            $disabled: t,
            size: e,
            square: r,
            onClick: t ? void 0 : i,
            primary: o,
            role: "menuitem",
            ref: a,
            "aria-disabled": t,
            ...s,
          },
          n
        )
    );
  BS.displayName = "MenuListItem";
  const RS = z.ul.attrs(() => ({ role: "menu" }))`
  box-sizing: border-box;
  width: ${(e) => (e.fullWidth ? "100%" : "auto")};
  padding: 4px;
  ${He({ style: "window" })}
  ${Sr()}
  ${(e) =>
    e.inline &&
    `
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;
  RS.displayName = "MenuList";
  const Qr = 20,
    Al = z.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Qr}px;
  height: ${Qr}px;
  opacity: 0;
  z-index: -1;
`,
    Hf = z.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({ $disabled: e }) => (e ? "auto" : "pointer")};
  user-select: none;
  font-size: 1rem;
  color: ${({ theme: e }) => e.materialText};
  ${(e) => e.$disabled && xr()}

  ${wd} & {
    margin: 0;
    height: 100%;
  }
  ${wd}:hover & {
    ${({ $disabled: e, theme: t }) =>
      !e &&
      K`
        color: ${t.materialTextInvert};
      `};
  }
`,
    Vf = z.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Al}:focus ~ & {
    ${Ao}
  }
  ${Al}:not(:disabled) ~ &:active {
    ${Ao}
  }
`,
    jr = z.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme: e }) => e.borderDark};
  border-top-color: ${({ theme: e }) => e.borderDark};
  border-right-color: ${({ theme: e }) => e.borderLightest};
  border-bottom-color: ${({ theme: e }) => e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme: e }) => e.borderDarkest};
    border-top-color: ${({ theme: e }) => e.borderDarkest};
    border-right-color: ${({ theme: e }) => e.borderLight};
    border-bottom-color: ${({ theme: e }) => e.borderLight};

    pointer-events: none;
    ${(e) => e.shadow && `box-shadow:${Yf};`}
  }
`,
    DS = z.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Wf()}
`,
    Fs = B.forwardRef(({ children: e, shadow: t = !0, ...r }, n) =>
      O.createElement(
        jr,
        { ref: n, shadow: t, ...r },
        O.createElement(DS, null, e)
      )
    );
  Fs.displayName = "ScrollView";
  const Oy = K`
  width: ${Qr}px;
  height: ${Qr}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,
    OS = z(jr)`
  ${Oy}
  width: ${Qr}px;
  height: ${Qr}px;
  background: ${({ $disabled: e, theme: t }) => (e ? t.material : t.canvas)};
  &:before {
    box-shadow: none;
  }
`,
    TS = z.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ $disabled: e, theme: t }) => (e ? t.flatLight : t.canvas)};
  ${Oy}
  width: ${Qr - 4}px;
  height: ${Qr - 4}px;
  outline: none;
  border: 2px solid ${({ theme: e }) => e.flatDark};
  background: ${({ $disabled: e, theme: t }) => (e ? t.flatLight : t.canvas)};
`,
    MS = z.span.attrs(() => ({ "data-testid": "checkmarkIcon" }))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({ $disabled: e, theme: t }) =>
        e ? t.checkmarkDisabled : t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${(e) =>
      e.$disabled ? e.theme.checkmarkDisabled : e.theme.checkmark};
  }
`,
    PS = z.span.attrs(() => ({ "data-testid": "indeterminateIcon" }))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({ $disabled: e, theme: t }) =>
      js({ mainColor: e ? t.checkmarkDisabled : t.checkmark })}
    background-position: 0px 0px, 2px 2px;
  }
`,
    zS = { flat: TS, default: OS },
    NS = B.forwardRef(
      (
        {
          checked: e,
          className: t = "",
          defaultChecked: r = !1,
          disabled: n = !1,
          indeterminate: i = !1,
          label: o = "",
          onChange: s = Si,
          style: a = {},
          value: l,
          variant: d = "default",
          ...p
        },
        h
      ) => {
        var y;
        const [x, S] = Un({
            defaultValue: r,
            onChange: s,
            readOnly: (y = p.readOnly) !== null && y !== void 0 ? y : n,
            value: e,
          }),
          E = B.useCallback(
            (m) => {
              const v = m.target.checked;
              S(v), s(m);
            },
            [s, S]
          ),
          D = zS[d];
        let A = null;
        return (
          i ? (A = PS) : x && (A = MS),
          O.createElement(
            Hf,
            { $disabled: n, className: t, style: a },
            O.createElement(Al, {
              disabled: n,
              onChange: n ? void 0 : E,
              readOnly: n,
              type: "checkbox",
              value: l,
              checked: x,
              "data-indeterminate": i,
              ref: h,
              ...p,
            }),
            O.createElement(
              D,
              { $disabled: n, role: "presentation" },
              A && O.createElement(A, { $disabled: n, variant: d })
            ),
            o && O.createElement(Vf, null, o)
          )
        );
      }
    );
  NS.displayName = "Checkbox";
  const Ls = z.div`
  ${({ orientation: e, theme: t, size: r = "100%" }) =>
    e === "vertical"
      ? `
    height: ${Ln(r)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `
      : `
    width: ${Ln(r)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;
  Ls.displayName = "Separator";
  const QS = z(iu)`
  padding-left: 8px;
`,
    _S = z(Ls)`
  height: 21px;
  position: relative;
  top: 0;
`,
    Ty = z.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,
    jS = z.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({ color: e }) => e};

  ${({ $disabled: e }) =>
    e
      ? K`
          border: 2px solid ${({ theme: t }) => t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme: t }) => t.materialTextDisabledShadow}
          );
        `
      : K`
          border: 2px solid ${({ theme: t }) => t.materialText};
        `}
  ${Ty}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ao}
    outline-offset: -8px;
  }
`,
    FS = z.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({ $disabled: e }) =>
    e
      ? K`
          border-top: 6px solid ${({ theme: t }) => t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme: t }) => t.materialTextDisabledShadow}
          );
        `
      : K`
          border-top: 6px solid ${({ theme: t }) => t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant: e }) => (e === "flat" ? "6px" : "8px")};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,
    LS = B.forwardRef(
      (
        {
          value: e,
          defaultValue: t,
          onChange: r = Si,
          disabled: n = !1,
          variant: i = "default",
          ...o
        },
        s
      ) => {
        var a;
        const [l, d] = Un({
            defaultValue: t,
            onChange: r,
            readOnly: (a = o.readOnly) !== null && a !== void 0 ? a : n,
            value: e,
          }),
          p = (h) => {
            const y = h.target.value;
            d(y), r(h);
          };
        return O.createElement(
          QS,
          { disabled: n, as: "div", variant: i, size: "md" },
          O.createElement(Ty, {
            onChange: p,
            readOnly: n,
            disabled: n,
            value: l ?? "#008080",
            type: "color",
            ref: s,
            ...o,
          }),
          O.createElement(jS, {
            $disabled: n,
            color: l ?? "#008080",
            role: "presentation",
          }),
          i === "default" && O.createElement(_S, { orientation: "vertical" }),
          O.createElement(FS, { $disabled: n, variant: i })
        );
      }
    );
  LS.displayName = "ColorInput";
  const US = z.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({ pixelSize: e }) => K`
    width: ${11 * e}px;
    height: ${21 * e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${js({
        mainColor: "var(--react95-digit-bg-color)",
        secondaryColor: "var(--react95-digit-secondary-color)",
        pixelSize: e,
      })}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9 * e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e * 2}px);
      top: ${2 * e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9 * e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11 * e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e * 2}px);
      top: ${e}px;
      left: ${e * 2}px;
    }
  `}
`,
    tg = [
      "horizontal top",
      "center",
      "horizontal bottom",
      "vertical top left",
      "vertical top right",
      "vertical bottom left",
      "vertical bottom right",
    ],
    YS = [
      [1, 0, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 1, 0, 1],
      [1, 1, 1, 1, 0, 0, 1],
      [1, 1, 1, 1, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 0, 1],
    ];
  function WS({ digit: e = 0, pixelSize: t = 2, ...r }) {
    const n = YS[Number(e)].map((i, o) => (i ? `${tg[o]} active` : tg[o]));
    return O.createElement(
      US,
      { pixelSize: t, ...r },
      n.map((i, o) => O.createElement("span", { className: i, key: o }))
    );
  }
  const JS = z.div`
  ${He({ style: "status" })}
  display: inline-flex;
  background: #000000;
`,
    HS = { sm: 1, md: 2, lg: 3, xl: 4 },
    VS = B.forwardRef(
      ({ value: e = 0, minLength: t = 3, size: r = "md", ...n }, i) => {
        const o = B.useMemo(
          () => e.toString().padStart(t, "0").split(""),
          [t, e]
        );
        return O.createElement(
          JS,
          { ref: i, ...n },
          o.map((s, a) =>
            O.createElement(WS, { digit: s, pixelSize: HS[r], key: a })
          )
        );
      }
    );
  VS.displayName = "Counter";
  const My = K`
  display: flex;
  align-items: center;
  width: ${({ fullWidth: e }) => (e ? "100%" : "auto")};
  min-height: ${gt.md};
`,
    $S = z(jr).attrs({ "data-testid": "variant-default" })`
  ${My}
  background: ${({ $disabled: e, theme: t }) => (e ? t.material : t.canvas)};
`,
    GS = z.div.attrs({ "data-testid": "variant-flat" })`
  ${vi()}
  ${My}
  position: relative;
`,
    Py = K`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({ theme: e }) => e.canvasText};
  ${({ disabled: e, variant: t }) => t !== "flat" && e && xr()}
`,
    XS = z.input`
  ${Py}
  padding: 0 8px;
`,
    KS = z.textarea`
  ${Py}
  padding: 8px;
  resize: none;
  ${({ variant: e }) => Wf(e)}
`,
    Io = B.forwardRef(
      (
        {
          className: e,
          disabled: t = !1,
          fullWidth: r,
          onChange: n = Si,
          shadow: i = !0,
          style: o,
          variant: s = "default",
          ...a
        },
        l
      ) => {
        const d = s === "flat" ? GS : $S,
          p = B.useMemo(() => {
            var h;
            return a.multiline
              ? O.createElement(KS, {
                  disabled: t,
                  onChange: t ? void 0 : n,
                  readOnly: t,
                  ref: l,
                  variant: s,
                  ...a,
                })
              : O.createElement(XS, {
                  disabled: t,
                  onChange: t ? void 0 : n,
                  readOnly: t,
                  ref: l,
                  type: (h = a.type) !== null && h !== void 0 ? h : "text",
                  variant: s,
                  ...a,
                });
          }, [t, n, a, l, s]);
        return O.createElement(
          d,
          { className: e, fullWidth: r, $disabled: t, shadow: i, style: o },
          p
        );
      }
    );
  Io.displayName = "TextInput";
  const ZS = z.div`
  display: inline-flex;
  align-items: center;
`,
    xd = z(ce)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ variant: e }) =>
    e === "flat"
      ? K`
          height: calc(50% - 1px);
        `
      : K`
          height: 50%;
        `}
`,
    qS = z.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({ variant: e }) =>
    e === "flat"
      ? K`
          height: calc(${gt.md} - 4px);
        `
      : K`
          height: ${gt.md};
          margin-left: 2px;
        `}
`,
    rg = z.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({ invert: e }) =>
    e
      ? K`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme: t }) => t.materialText};
        `
      : K`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme: t }) => t.materialText};
        `}
  ${xd}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({ theme: e }) => e.materialTextDisabledShadow}
    );
    ${({ invert: e }) =>
      e
        ? K`
            border-bottom-color: ${({ theme: t }) => t.materialTextDisabled};
          `
        : K`
            border-top-color: ${({ theme: t }) => t.materialTextDisabled};
          `}
  }
`,
    zy = B.forwardRef(
      (
        {
          className: e,
          defaultValue: t,
          disabled: r = !1,
          max: n,
          min: i,
          onChange: o,
          readOnly: s,
          step: a = 1,
          style: l,
          value: d,
          variant: p = "default",
          width: h,
          ...y
        },
        x
      ) => {
        const [S, E] = Un({
            defaultValue: t,
            onChange: o,
            readOnly: s,
            value: d,
          }),
          D = B.useCallback(
            (R) => {
              const M = parseFloat(R.target.value);
              E(M);
            },
            [E]
          ),
          A = B.useCallback(
            (R) => {
              const M = oi(
                parseFloat(((S ?? 0) + R).toFixed(2)),
                i ?? null,
                n ?? null
              );
              E(M), o == null || o(M);
            },
            [n, i, o, E, S]
          ),
          m = B.useCallback(() => {
            S !== void 0 && (o == null || o(S));
          }, [o, S]),
          v = B.useCallback(() => {
            A(a);
          }, [A, a]),
          k = B.useCallback(() => {
            A(-a);
          }, [A, a]),
          I = p === "flat" ? "flat" : "raised";
        return O.createElement(
          ZS,
          {
            className: e,
            style: { ...l, width: h !== void 0 ? Ln(h) : "auto" },
            ...y,
          },
          O.createElement(Io, {
            value: S,
            variant: p,
            onChange: D,
            disabled: r,
            type: "number",
            readOnly: s,
            ref: x,
            fullWidth: !0,
            onBlur: m,
          }),
          O.createElement(
            qS,
            { variant: p },
            O.createElement(
              xd,
              {
                "data-testid": "increment",
                variant: I,
                disabled: r || s,
                onClick: v,
              },
              O.createElement(rg, { invert: !0 })
            ),
            O.createElement(
              xd,
              {
                "data-testid": "decrement",
                variant: I,
                disabled: r || s,
                onClick: k,
              },
              O.createElement(rg, null)
            )
          )
        );
      }
    );
  zy.displayName = "NumberInput";
  function ek() {
    const e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let t = "";
    for (let r = 0; r < 10; r += 1)
      t += e[Math.floor(Math.random() * e.length)];
    return t;
  }
  const Ny = (e) => B.useMemo(() => e ?? ek(), [e]),
    Qy = K`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,
    _y = K`
  background: ${({ theme: e }) => e.hoverBackground};
  color: ${({ theme: e }) => e.canvasTextInvert};
`,
    $f = z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,
    tk = z.div`
  ${Qy}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${$f}:focus & {
    ${_y}
    border: 2px dotted ${({ theme: e }) => e.focusSecondary};
  }
`,
    jy = K`
  height: ${gt.md};
  display: inline-block;
  color: ${({ $disabled: e = !1, theme: t }) => (e ? xr() : t.canvasText)};
  font-size: 1rem;
  cursor: ${({ $disabled: e }) => (e ? "default" : "pointer")};
`,
    rk = z(jr)`
  ${jy}
  background: ${({ $disabled: e = !1, theme: t }) =>
    e ? t.material : t.canvas};
  &:focus {
    outline: 0;
  }
`,
    nk = z.div`
  ${vi()}
  ${jy}
  background: ${({ $disabled: e = !1, theme: t }) =>
    e ? t.flatLight : t.canvas};
`,
    ik = z.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Qy}
  cursor: pointer;
  &:disabled {
    ${xr()};
    background: ${({ theme: e }) => e.material};
    cursor: default;
  }
`,
    Fy = z(iu).attrs(() => ({ "aria-hidden": "true" }))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({ variant: e = "default" }) =>
    e === "flat"
      ? K`
          height: 100%;
          margin-right: 0;
        `
      : K`
          height: 100%;
        `}
  ${({ native: e = !1, variant: t = "default" }) =>
    e &&
    (t === "flat"
      ? `
      position: absolute;
      right: 0;
      height: 100%;
      `
      : `
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({ $disabled: e = !1, native: t = !1 }) =>
      e || t ? "none" : "auto"}
`,
    ok = z.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({ $disabled: e = !1, theme: t }) =>
      e ? t.materialTextDisabled : t.materialText};
  ${({ $disabled: e = !1, theme: t }) =>
    e &&
    `
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Fy}:active & {
    margin-top: 2px;
  }
`,
    sk = z.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme: e }) => e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Uf};
  ${({ variant: e = "default" }) =>
    e === "flat"
      ? K`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({ theme: t }) => t.flatDark};
        `
      : K`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({ theme: t }) => t.borderDarkest};
        `}
  ${({ variant: e = "default" }) => Wf(e)}
`,
    ak = z.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${gt.md} - 4px);
  line-height: calc(${gt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme: e }) => e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({ active: e }) => (e ? _y : "")}
  user-select: none;
`,
    lk = [],
    Ly = ({
      className: e,
      defaultValue: t,
      disabled: r,
      native: n,
      onChange: i,
      options: o = lk,
      readOnly: s,
      style: a,
      value: l,
      variant: d,
      width: p,
    }) => {
      var h;
      const y = B.useMemo(() => o.filter(Boolean), [o]),
        [x, S] = Un({
          defaultValue:
            t ??
            ((h = y == null ? void 0 : y[0]) === null || h === void 0
              ? void 0
              : h.value),
          onChange: i,
          readOnly: s,
          value: l,
        }),
        E = !(r || s),
        D = B.useMemo(
          () => ({ className: e, style: { ...a, width: p } }),
          [e, a, p]
        ),
        A = B.useMemo(
          () =>
            O.createElement(
              Fy,
              {
                as: "div",
                "data-testid": "select-button",
                $disabled: r,
                native: n,
                tabIndex: -1,
                variant: d === "flat" ? "flat" : "raised",
              },
              O.createElement(ok, {
                "data-testid": "select-icon",
                $disabled: r,
              })
            ),
          [r, n, d]
        ),
        m = B.useMemo(() => (d === "flat" ? nk : rk), [d]);
      return B.useMemo(
        () => ({
          isEnabled: E,
          options: y,
          value: x,
          setValue: S,
          wrapperProps: D,
          DropdownButton: A,
          Wrapper: m,
        }),
        [A, m, E, y, S, x, D]
      );
    },
    uk = {
      ARROW_DOWN: "ArrowDown",
      ARROW_LEFT: "ArrowLeft",
      ARROW_RIGHT: "ArrowRight",
      ARROW_UP: "ArrowUp",
      END: "End",
      ENTER: "Enter",
      ESC: "Escape",
      HOME: "Home",
      SPACE: "Space",
      TAB: "Tab",
    },
    ck = 1e3,
    dk = ({
      onBlur: e,
      onChange: t,
      onClose: r,
      onFocus: n,
      onKeyDown: i,
      onMouseDown: o,
      onOpen: s,
      open: a,
      options: l,
      readOnly: d,
      value: p,
      selectRef: h,
      setValue: y,
      wrapperRef: x,
    }) => {
      const S = B.useRef(null),
        E = B.useRef([]),
        D = B.useRef(0),
        A = B.useRef(0),
        m = B.useRef(),
        v = B.useRef("search"),
        k = B.useRef(""),
        I = B.useRef(),
        [R, M] = Un({
          defaultValue: !1,
          onChange: s,
          onChangePropName: "onOpen",
          readOnly: d,
          value: a,
          valuePropName: "open",
        }),
        F = B.useMemo(() => {
          const _ = l.findIndex(($) => $.value === p);
          return (D.current = oi(_, 0, null)), l[_];
        }, [l, p]),
        [re, G] = B.useState(l[0]),
        oe = B.useCallback(
          (_) => {
            const $ = S.current,
              se = E.current[_];
            if (!se || !$) {
              m.current = _;
              return;
            }
            m.current = void 0;
            const ae = $.clientHeight,
              fe = $.scrollTop,
              ke = $.scrollTop + ae,
              De = se.offsetTop,
              et = se.offsetHeight,
              ot = se.offsetTop + se.offsetHeight;
            De < fe && $.scrollTo(0, De),
              ot > ke && $.scrollTo(0, De - ae + et),
              se.focus({ preventScroll: !0 });
          },
          [S]
        ),
        ne = B.useCallback(
          (_, { scroll: $ } = {}) => {
            var se;
            const ae = l.length - 1;
            let fe;
            switch (_) {
              case "first": {
                fe = 0;
                break;
              }
              case "last": {
                fe = ae;
                break;
              }
              case "next": {
                fe = oi(A.current + 1, 0, ae);
                break;
              }
              case "previous": {
                fe = oi(A.current - 1, 0, ae);
                break;
              }
              case "selected": {
                fe = oi(
                  (se = D.current) !== null && se !== void 0 ? se : 0,
                  0,
                  ae
                );
                break;
              }
              default:
                fe = _;
            }
            (A.current = fe), G(l[fe]), $ && oe(fe);
          },
          [A, l, oe]
        ),
        de = B.useCallback(
          ({ fromEvent: _ }) => {
            M(!0),
              ne("selected", { scroll: !0 }),
              s == null || s({ fromEvent: _ });
          },
          [ne, s, M]
        ),
        ve = B.useCallback(() => {
          (v.current = "search"), (k.current = ""), clearTimeout(I.current);
        }, []),
        Se = B.useCallback(
          ({ focusSelect: _, fromEvent: $ }) => {
            var se;
            r == null || r({ fromEvent: $ }),
              M(!1),
              G(l[0]),
              ve(),
              (m.current = void 0),
              _ && ((se = h.current) === null || se === void 0 || se.focus());
          },
          [ve, r, l, h, M]
        ),
        Re = B.useCallback(
          ({ fromEvent: _ }) => {
            R ? Se({ focusSelect: !1, fromEvent: _ }) : de({ fromEvent: _ });
          },
          [Se, de, R]
        ),
        Ae = B.useCallback(
          (_, { fromEvent: $ }) => {
            D.current !== _ &&
              ((D.current = _),
              y(l[_].value),
              t == null || t(l[_], { fromEvent: $ }));
          },
          [t, l, y]
        ),
        U = B.useCallback(
          ({ focusSelect: _, fromEvent: $ }) => {
            Ae(A.current, { fromEvent: $ }),
              Se({ focusSelect: _, fromEvent: $ });
          },
          [Se, Ae]
        ),
        H = B.useCallback(
          (_, { fromEvent: $, select: se }) => {
            var ae;
            switch (
              (v.current === "cycleFirstLetter" &&
                _ !== k.current &&
                (v.current = "search"),
              _ === k.current
                ? (v.current = "cycleFirstLetter")
                : (k.current += _),
              v.current)
            ) {
              case "search": {
                let fe = l.findIndex((ke) => {
                  var De;
                  return (
                    ((De = ke.label) === null || De === void 0
                      ? void 0
                      : De.toLocaleUpperCase().indexOf(k.current)) === 0
                  );
                });
                fe < 0 &&
                  ((fe = l.findIndex((ke) => {
                    var De;
                    return (
                      ((De = ke.label) === null || De === void 0
                        ? void 0
                        : De.toLocaleUpperCase().indexOf(_)) === 0
                    );
                  })),
                  (k.current = _)),
                  fe >= 0 &&
                    (se ? Ae(fe, { fromEvent: $ }) : ne(fe, { scroll: !0 }));
                break;
              }
              case "cycleFirstLetter": {
                const fe = se
                  ? (ae = D.current) !== null && ae !== void 0
                    ? ae
                    : -1
                  : A.current;
                let ke = l.findIndex((De, et) => {
                  var ot;
                  return (
                    et > fe &&
                    ((ot = De.label) === null || ot === void 0
                      ? void 0
                      : ot.toLocaleUpperCase().indexOf(_)) === 0
                  );
                });
                ke < 0 &&
                  (ke = l.findIndex((De) => {
                    var et;
                    return (
                      ((et = De.label) === null || et === void 0
                        ? void 0
                        : et.toLocaleUpperCase().indexOf(_)) === 0
                    );
                  })),
                  ke >= 0 &&
                    (se ? Ae(ke, { fromEvent: $ }) : ne(ke, { scroll: !0 }));
                break;
              }
            }
            clearTimeout(I.current),
              (I.current = setTimeout(() => {
                v.current === "search" && (k.current = "");
              }, ck));
          },
          [ne, l, Ae]
        ),
        X = B.useCallback(
          (_) => {
            var $;
            _.button === 0 &&
              (_.preventDefault(),
              ($ = h.current) === null || $ === void 0 || $.focus(),
              Re({ fromEvent: _ }),
              o == null || o(_));
          },
          [o, h, Re]
        ),
        ee = B.useCallback(
          (_) => {
            U({ focusSelect: !0, fromEvent: _ });
          },
          [U]
        ),
        b = B.useCallback(
          (_) => {
            const {
                altKey: $,
                code: se,
                ctrlKey: ae,
                metaKey: fe,
                shiftKey: ke,
              } = _,
              {
                ARROW_DOWN: De,
                ARROW_UP: et,
                END: ot,
                ENTER: lr,
                ESC: zt,
                HOME: Wr,
                SPACE: ur,
                TAB: st,
              } = uk,
              Ii = $ || ae || fe || ke;
            if (!((se === st && ($ || ae || fe)) || (se !== st && Ii)))
              switch (se) {
                case De: {
                  if ((_.preventDefault(), !R)) {
                    de({ fromEvent: _ });
                    return;
                  }
                  ne("next", { scroll: !0 });
                  break;
                }
                case et: {
                  if ((_.preventDefault(), !R)) {
                    de({ fromEvent: _ });
                    return;
                  }
                  ne("previous", { scroll: !0 });
                  break;
                }
                case ot: {
                  if ((_.preventDefault(), !R)) {
                    de({ fromEvent: _ });
                    return;
                  }
                  ne("last", { scroll: !0 });
                  break;
                }
                case lr: {
                  if (!R) return;
                  _.preventDefault(), U({ focusSelect: !0, fromEvent: _ });
                  break;
                }
                case zt: {
                  if (!R) return;
                  _.preventDefault(), Se({ focusSelect: !0, fromEvent: _ });
                  break;
                }
                case Wr: {
                  if ((_.preventDefault(), !R)) {
                    de({ fromEvent: _ });
                    return;
                  }
                  ne("first", { scroll: !0 });
                  break;
                }
                case ur: {
                  _.preventDefault(),
                    R
                      ? U({ focusSelect: !0, fromEvent: _ })
                      : de({ fromEvent: _ });
                  break;
                }
                case st: {
                  if (!R) return;
                  ke || _.preventDefault(),
                    U({ focusSelect: !ke, fromEvent: _ });
                  break;
                }
                default:
                  !Ii &&
                    se.match(/^Key/) &&
                    (_.preventDefault(),
                    _.stopPropagation(),
                    H(se.replace(/^Key/, ""), { select: !R, fromEvent: _ }));
              }
          },
          [ne, Se, R, de, H, U]
        ),
        P = B.useCallback(
          (_) => {
            b(_), i == null || i(_);
          },
          [b, i]
        ),
        N = B.useCallback(
          (_) => {
            ne(_);
          },
          [ne]
        ),
        L = B.useCallback(
          (_) => {
            R || (ve(), e == null || e(_));
          },
          [ve, e, R]
        ),
        j = B.useCallback(
          (_) => {
            ve(), n == null || n(_);
          },
          [ve, n]
        ),
        J = B.useCallback(
          (_) => {
            (S.current = _), m.current !== void 0 && oe(m.current);
          },
          [oe]
        ),
        te = B.useCallback(
          (_, $) => {
            (E.current[$] = _), m.current === $ && oe(m.current);
          },
          [oe]
        );
      return (
        B.useEffect(() => {
          if (!R) return () => {};
          const _ = ($) => {
            var se;
            const ae = $.target;
            (!((se = x.current) === null || se === void 0) &&
              se.contains(ae)) ||
              ($.preventDefault(), Se({ focusSelect: !1, fromEvent: $ }));
          };
          return (
            document.addEventListener("mousedown", _),
            () => {
              document.removeEventListener("mousedown", _);
            }
          );
        }, [Se, R, x]),
        B.useMemo(
          () => ({
            activeOption: re,
            handleActivateOptionIndex: N,
            handleBlur: L,
            handleButtonKeyDown: P,
            handleDropdownKeyDown: b,
            handleFocus: j,
            handleMouseDown: X,
            handleOptionClick: ee,
            handleSetDropdownRef: J,
            handleSetOptionRef: te,
            open: R,
            selectedOption: F,
          }),
          [re, N, L, P, j, b, X, ee, J, te, R, F]
        )
      );
    },
    fk = B.forwardRef(
      (
        {
          className: e,
          defaultValue: t,
          disabled: r,
          onChange: n,
          options: i,
          readOnly: o,
          style: s,
          value: a,
          variant: l,
          width: d,
          ...p
        },
        h
      ) => {
        const {
            isEnabled: y,
            options: x,
            setValue: S,
            value: E,
            DropdownButton: D,
            Wrapper: A,
          } = Ly({
            defaultValue: t,
            disabled: r,
            native: !0,
            onChange: n,
            options: i,
            readOnly: o,
            value: a,
            variant: l,
          }),
          m = B.useCallback(
            (v) => {
              const k = x.find((I) => I.value === v.target.value);
              k && (S(k.value), n == null || n(k, { fromEvent: v }));
            },
            [n, x, S]
          );
        return O.createElement(
          A,
          { className: e, style: { ...s, width: d } },
          O.createElement(
            $f,
            null,
            O.createElement(
              ik,
              { ...p, disabled: r, onChange: y ? m : Si, ref: h, value: E },
              x.map((v, k) => {
                var I;
                return O.createElement(
                  "option",
                  { key: `${v.value}-${k}`, value: v.value },
                  (I = v.label) !== null && I !== void 0 ? I : v.value
                );
              })
            ),
            D
          )
        );
      }
    );
  fk.displayName = "SelectNative";
  function pk({
    activateOptionIndex: e,
    active: t,
    index: r,
    onClick: n,
    option: i,
    selected: o,
    setRef: s,
  }) {
    const a = B.useCallback(() => {
        e(r);
      }, [e, r]),
      l = B.useCallback(
        (p) => {
          s(p, r);
        },
        [r, s]
      ),
      d = Ny();
    return O.createElement(
      ak,
      {
        active: t,
        "aria-selected": o ? "true" : void 0,
        "data-value": i.value,
        id: d,
        onClick: n,
        onMouseEnter: a,
        ref: l,
        role: "option",
        tabIndex: 0,
      },
      i.label
    );
  }
  function hk(
    {
      "aria-label": e,
      "aria-labelledby": t,
      className: r,
      defaultValue: n,
      disabled: i = !1,
      formatDisplay: o,
      inputProps: s,
      labelId: a,
      menuMaxHeight: l,
      name: d,
      onBlur: p,
      onChange: h,
      onClose: y,
      onFocus: x,
      onKeyDown: S,
      onMouseDown: E,
      onOpen: D,
      open: A,
      options: m,
      readOnly: v,
      shadow: k = !0,
      style: I,
      variant: R = "default",
      value: M,
      width: F = "auto",
      ...re
    },
    G
  ) {
    const {
        isEnabled: oe,
        options: ne,
        setValue: de,
        value: ve,
        wrapperProps: Se,
        DropdownButton: Re,
        Wrapper: Ae,
      } = Ly({
        className: r,
        defaultValue: n,
        disabled: i,
        native: !1,
        onChange: h,
        options: m,
        style: I,
        readOnly: v,
        value: M,
        variant: R,
        width: F,
      }),
      U = B.useRef(null),
      H = B.useRef(null),
      X = B.useRef(null),
      {
        activeOption: ee,
        handleActivateOptionIndex: b,
        handleBlur: P,
        handleButtonKeyDown: N,
        handleDropdownKeyDown: L,
        handleFocus: j,
        handleMouseDown: J,
        handleOptionClick: te,
        handleSetDropdownRef: _,
        handleSetOptionRef: $,
        open: se,
        selectedOption: ae,
      } = dk({
        onBlur: p,
        onChange: h,
        onClose: y,
        onFocus: x,
        onKeyDown: S,
        onMouseDown: E,
        onOpen: D,
        open: A,
        options: ne,
        value: ve,
        selectRef: H,
        setValue: de,
        wrapperRef: X,
      });
    B.useImperativeHandle(
      G,
      () => ({
        focus: (lr) => {
          var zt;
          (zt = H.current) === null || zt === void 0 || zt.focus(lr);
        },
        node: U.current,
        value: String(ve),
      }),
      [ve]
    );
    const fe = B.useMemo(
        () => (ae ? (typeof o == "function" ? o(ae) : ae.label) : ""),
        [o, ae]
      ),
      ke = oe ? 1 : void 0,
      De = B.useMemo(
        () => (l ? { overflow: "auto", maxHeight: l } : void 0),
        [l]
      ),
      et = Ny(),
      ot = B.useMemo(
        () =>
          ne.map((lr, zt) => {
            const Wr = `${ve}-${zt}`,
              ur = lr === ee,
              st = lr === ae;
            return O.createElement(pk, {
              activateOptionIndex: b,
              active: ur,
              index: zt,
              key: Wr,
              onClick: te,
              option: lr,
              selected: st,
              setRef: $,
            });
          }),
        [ee, b, te, $, ne, ae, ve]
      );
    return O.createElement(
      Ae,
      { ...Se, $disabled: i, ref: X, shadow: k, style: { ...I, width: F } },
      O.createElement("input", {
        name: d,
        ref: U,
        type: "hidden",
        value: String(ve),
        ...s,
      }),
      O.createElement(
        $f,
        {
          "aria-disabled": i,
          "aria-expanded": se,
          "aria-haspopup": "listbox",
          "aria-label": e,
          "aria-labelledby": t ?? a,
          "aria-owns": oe && se ? et : void 0,
          onBlur: P,
          onFocus: j,
          onKeyDown: N,
          onMouseDown: oe ? J : E,
          ref: H,
          role: "button",
          tabIndex: ke,
          ...re,
        },
        O.createElement(tk, null, fe),
        Re
      ),
      oe &&
        se &&
        O.createElement(
          sk,
          {
            id: et,
            onKeyDown: L,
            ref: _,
            role: "listbox",
            style: De,
            tabIndex: 0,
            variant: R,
          },
          ot
        )
    );
  }
  const Uy = B.forwardRef(hk);
  Uy.displayName = "Select";
  const gk = z.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(e) => (e.noPadding ? "0" : "4px")};
`,
    wl = B.forwardRef(function ({ children: t, noPadding: r = !1, ...n }, i) {
      return O.createElement(gk, { noPadding: r, ref: i, ...n }, t);
    });
  wl.displayName = "Toolbar";
  const mk = z.div`
  padding: 16px;
`,
    $n = B.forwardRef(function ({ children: t, ...r }, n) {
      return O.createElement(mk, { ref: n, ...r }, t);
    });
  $n.displayName = "WindowContent";
  const yk = z.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({ theme: e }) => e.material};
  ${({ active: e }) =>
    e === !1
      ? K`
          background: ${({ theme: t }) => t.headerNotActiveBackground};
          color: ${({ theme: t }) => t.headerNotActiveText};
        `
      : K`
          background: ${({ theme: t }) => t.headerBackground};
          color: ${({ theme: t }) => t.headerText};
        `}

  ${iu} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,
    Gf = B.forwardRef(function ({ active: t = !0, children: r, ...n }, i) {
      return O.createElement(yk, { active: t, ref: i, ...n }, r);
    });
  Gf.displayName = "WindowHeader";
  const vk = z.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${He({ style: "window" })}
  ${Sr()}
`,
    Ak = z.span`
  ${({ theme: e }) => K`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,
    Xf = B.forwardRef(
      (
        { children: e, resizable: t = !1, resizeRef: r, shadow: n = !0, ...i },
        o
      ) =>
        O.createElement(
          vk,
          { ref: o, shadow: n, ...i },
          e,
          t && O.createElement(Ak, { "data-testid": "resizeHandle", ref: r })
        )
    );
  Xf.displayName = "Window";
  const wk = z(Fs)`
  width: 234px;
  margin: 1rem 0;
  background: ${({ theme: e }) => e.canvas};
`,
    xk = z.div`
  display: flex;
  background: ${({ theme: e }) => e.materialDark};
  color: #dfe0e3;
`,
    Sk = z.div`
  display: flex;
  flex-wrap: wrap;
`,
    Jr = z.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,
    kk = z.span`
  cursor: pointer;

  background: ${({ active: e, theme: t }) =>
    e ? t.hoverBackground : "transparent"};
  color: ${({ active: e, theme: t }) =>
    e ? t.canvasTextInvert : t.canvasText};

  &:hover {
    border: 2px dashed
      ${({ theme: e, active: t }) => (t ? "none" : e.materialDark)};
  }
`,
    Ek = [
      { value: 0, label: "January" },
      { value: 1, label: "February" },
      { value: 2, label: "March" },
      { value: 3, label: "April" },
      { value: 4, label: "May" },
      { value: 5, label: "June" },
      { value: 6, label: "July" },
      { value: 7, label: "August" },
      { value: 8, label: "September" },
      { value: 9, label: "October" },
      { value: 10, label: "November" },
      { value: 11, label: "December" },
    ];
  function Ck(e, t) {
    return new Date(e, t + 1, 0).getDate();
  }
  function bk(e, t, r) {
    return new Date(e, t, r).getDay();
  }
  function Ik(e) {
    const t = new Date(Date.parse(e)),
      r = t.getUTCDate(),
      n = t.getUTCMonth(),
      i = t.getUTCFullYear();
    return { day: r, month: n, year: i };
  }
  const Bk = B.forwardRef(
    (
      {
        className: e,
        date: t = new Date().toISOString(),
        onAccept: r,
        onCancel: n,
        shadow: i = !0,
      },
      o
    ) => {
      const [s, a] = B.useState(() => Ik(t)),
        { year: l, month: d, day: p } = s,
        h = B.useCallback(({ value: D }) => {
          a((A) => ({ ...A, month: D }));
        }, []),
        y = B.useCallback((D) => {
          a((A) => ({ ...A, year: D }));
        }, []),
        x = B.useCallback((D) => {
          a((A) => ({ ...A, day: D }));
        }, []),
        S = B.useCallback(() => {
          const D = [s.year, s.month + 1, s.day]
            .map((A) => String(A).padStart(2, "0"))
            .join("-");
          r == null || r(D);
        }, [s.day, s.month, s.year, r]),
        E = B.useMemo(() => {
          const D = Array.from({ length: 42 }),
            A = bk(l, d, 1);
          let m = p;
          const v = Ck(l, d);
          return (
            (m = m < v ? m : v),
            D.forEach((k, I) => {
              if (I >= A && I < v + A) {
                const R = I - A + 1;
                D[I] = O.createElement(
                  Jr,
                  {
                    key: I,
                    onClick: () => {
                      x(R);
                    },
                  },
                  O.createElement(kk, { active: R === m }, R)
                );
              } else D[I] = O.createElement(Jr, { key: I });
            }),
            D
          );
        }, [p, x, d, l]);
      return O.createElement(
        Xf,
        { className: e, ref: o, shadow: i, style: { margin: 20 } },
        O.createElement(
          Gf,
          null,
          O.createElement("span", { role: "img", "aria-label": "📆" }, "📆"),
          "Date"
        ),
        O.createElement(
          $n,
          null,
          O.createElement(
            wl,
            { noPadding: !0, style: { justifyContent: "space-between" } },
            O.createElement(Uy, {
              options: Ek,
              value: d,
              onChange: h,
              width: 128,
              menuMaxHeight: 200,
            }),
            O.createElement(zy, { value: l, onChange: y, width: 100 })
          ),
          O.createElement(
            wk,
            null,
            O.createElement(
              xk,
              null,
              O.createElement(Jr, null, "S"),
              O.createElement(Jr, null, "M"),
              O.createElement(Jr, null, "T"),
              O.createElement(Jr, null, "W"),
              O.createElement(Jr, null, "T"),
              O.createElement(Jr, null, "F"),
              O.createElement(Jr, null, "S")
            ),
            O.createElement(Sk, null, E)
          ),
          O.createElement(
            wl,
            { noPadding: !0, style: { justifyContent: "space-between" } },
            O.createElement(
              ce,
              { fullWidth: !0, onClick: n, disabled: !n },
              "Cancel"
            ),
            O.createElement(
              ce,
              { fullWidth: !0, onClick: r ? S : void 0, disabled: !r },
              "OK"
            )
          )
        )
      );
    }
  );
  Bk.displayName = "DatePicker";
  const Rk = (e) => {
      switch (e) {
        case "status":
        case "well":
          return K`
        ${He({ style: "status" })}
      `;
        case "window":
        case "outside":
          return K`
        ${He({ style: "window" })}
      `;
        case "field":
          return K`
        ${He({ style: "field" })}
      `;
        default:
          return K`
        ${He()}
      `;
      }
    },
    Dk = z.div`
  position: relative;
  font-size: 1rem;
  ${({ variant: e }) => Rk(e)}
  ${({ variant: e }) =>
    Sr(e === "field" ? { background: "canvas", color: "canvasText" } : void 0)}
`,
    Ve = B.forwardRef(
      ({ children: e, shadow: t = !1, variant: r = "window", ...n }, i) =>
        O.createElement(Dk, { ref: i, shadow: t, variant: r, ...n }, e)
    );
  Ve.displayName = "Frame";
  const Ok = z.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme: e, variant: t }) =>
      t === "flat" ? e.flatDark : e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({ theme: e }) => e.materialText};
  ${({ variant: e }) =>
    e !== "flat" &&
    K`
      box-shadow: -1px -1px 0 1px ${({ theme: t }) => t.borderDark},
        inset -1px -1px 0 1px ${({ theme: t }) => t.borderDark};
    `}
  ${(e) => e.$disabled && xr()}
`,
    Tk = z.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({ theme: e, variant: t }) =>
    t === "flat" ? e.canvas : e.material};
`,
    Mk = B.forwardRef(
      (
        {
          label: e,
          disabled: t = !1,
          variant: r = "default",
          children: n,
          ...i
        },
        o
      ) =>
        O.createElement(
          Ok,
          { "aria-disabled": t, $disabled: t, variant: r, ref: o, ...i },
          e && O.createElement(Tk, { variant: r }, e),
          n
        )
    );
  Mk.displayName = "GroupBox";
  const Pk = z.div`
  ${({ theme: e, size: t = "100%" }) => `
  display: inline-block;
  box-sizing: border-box;
  height: ${Ln(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;
  Pk.displayName = "Handle";
  const zk =
      "url('data:image/gif;base64,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')",
    Nk = z.div`
  display: inline-block;
  height: ${({ size: e }) => Ln(e)};
  width: ${({ size: e }) => Ln(e)};
`,
    Qk = z.span`
  display: block;
  background: ${zk};
  background-size: cover;
  width: 100%;
  height: 100%;
`,
    _k = B.forwardRef(({ size: e = 30, ...t }, r) =>
      O.createElement(Nk, { size: e, ref: r, ...t }, O.createElement(Qk, null))
    );
  _k.displayName = "Hourglass";
  const jk = z.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,
    Fk = z.div`
  position: relative;
`,
    Lk = z.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({ theme: e }) => e.material};
  border-top: 4px solid ${({ theme: e }) => e.borderLightest};
  border-left: 4px solid ${({ theme: e }) => e.borderLightest};
  border-bottom: 4px solid ${({ theme: e }) => e.borderDark};
  border-right: 4px solid ${({ theme: e }) => e.borderDark};

  outline: 1px dotted ${({ theme: e }) => e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({ theme: e }) => e.material};
  }
  box-shadow: 1px 1px 0 1px ${({ theme: e }) => e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,
    Uk = z(jr).attrs(() => ({ "data-testid": "background" }))`
  width: 100%;
  height: 100%;
`,
    Yk = z.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({ theme: e }) => e.material};
  border-left: 2px solid ${({ theme: e }) => e.borderLightest};
  border-bottom: 2px solid ${({ theme: e }) => e.borderDarkest};
  border-right: 2px solid ${({ theme: e }) => e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({ theme: e }) => e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({ theme: e }) => e.material};
    border-left: 2px solid ${({ theme: e }) => e.borderLightest};
    border-right: 2px solid ${({ theme: e }) => e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({ theme: e }) => e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({ theme: e }) => e.material};
    border: 2px solid ${({ theme: e }) => e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({ theme: e }) => e.borderLightest},
      1px 1px 0 1px ${({ theme: e }) => e.borderDarkest};
  }
`,
    Wk = B.forwardRef(({ backgroundStyles: e, children: t, ...r }, n) =>
      O.createElement(
        jk,
        { ref: n, ...r },
        O.createElement(
          Fk,
          null,
          O.createElement(Lk, null, O.createElement(Uk, { style: e }, t)),
          O.createElement(Yk, null)
        )
      )
    );
  Wk.displayName = "Monitor";
  const Jk = z.div`
  display: inline-block;
  height: ${gt.md};
  width: 100%;
`,
    Hk = z(jr)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,
    Yy = K`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,
    Vk = z.div`
  position: relative;
  top: 4px;
  ${Yy}
  background: ${({ theme: e }) => e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme: e }) => e.materialText};
`,
    $k = z.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Yy}
  color: ${({ theme: e }) => e.materialTextInvert};
  background: ${({ theme: e }) => e.progress};
  clip-path: polygon(
    0 0,
    ${({ value: e = 0 }) => e}% 0,
    ${({ value: e = 0 }) => e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,
    Gk = z.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,
    Wy = 17,
    Xk = z.span`
  display: inline-block;
  width: ${Wy}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme: e }) => e.progress};
  border-color: ${({ theme: e }) => e.material};
  border-width: 0px 1px;
  border-style: solid;
`,
    Kk = B.forwardRef(
      (
        {
          hideValue: e = !1,
          shadow: t = !0,
          value: r,
          variant: n = "default",
          ...i
        },
        o
      ) => {
        const s = e ? null : `${r}%`,
          a = B.useRef(null),
          [l, d] = B.useState([]),
          p = B.useCallback(() => {
            if (!a.current || r === void 0) return;
            const h = a.current.getBoundingClientRect().width,
              y = Math.round(((r / 100) * h) / Wy);
            d(Array.from({ length: y }));
          }, [r]);
        return (
          B.useEffect(
            () => (
              p(),
              window.addEventListener("resize", p),
              () => window.removeEventListener("resize", p)
            ),
            [p]
          ),
          O.createElement(
            Jk,
            {
              "aria-valuenow": r !== void 0 ? Math.round(r) : void 0,
              ref: o,
              role: "progressbar",
              variant: n,
              ...i,
            },
            O.createElement(
              Hk,
              { variant: n, shadow: t },
              n === "default"
                ? O.createElement(
                    O.Fragment,
                    null,
                    O.createElement(
                      Vk,
                      { "data-testid": "defaultProgress1" },
                      s
                    ),
                    O.createElement(
                      $k,
                      { "data-testid": "defaultProgress2", value: r },
                      s
                    )
                  )
                : O.createElement(
                    Gk,
                    { ref: a, "data-testid": "tileProgress" },
                    l.map((h, y) => O.createElement(Xk, { key: y }))
                  )
            )
          )
        );
      }
    );
  Kk.displayName = "ProgressBar";
  const Jy = K`
  width: ${Qr}px;
  height: ${Qr}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,
    Zk = z(jr)`
  ${Jy}
  background: ${({ $disabled: e, theme: t }) => (e ? t.material : t.canvas)};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,
    qk = z.div`
  ${vi()}
  ${Jy}
  outline: none;
  background: ${({ $disabled: e, theme: t }) => (e ? t.flatLight : t.canvas)};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({ theme: e }) => e.flatDark};
    border-radius: 50%;
  }
`,
    eE = z.span.attrs(() => ({ "data-testid": "checkmarkIcon" }))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${(e) =>
    e.$disabled ? e.theme.checkmarkDisabled : e.theme.checkmark};
`,
    tE = { flat: qk, default: Zk },
    rE = B.forwardRef(
      (
        {
          checked: e,
          className: t = "",
          disabled: r = !1,
          label: n = "",
          onChange: i,
          style: o = {},
          variant: s = "default",
          ...a
        },
        l
      ) => {
        const d = tE[s];
        return O.createElement(
          Hf,
          { $disabled: r, className: t, style: o },
          O.createElement(
            d,
            { $disabled: r, role: "presentation" },
            e && O.createElement(eE, { $disabled: r, variant: s })
          ),
          O.createElement(Al, {
            disabled: r,
            onChange: r ? void 0 : i,
            readOnly: r,
            type: "radio",
            checked: e,
            ref: l,
            ...a,
          }),
          n && O.createElement(Vf, null, n)
        );
      }
    );
  rE.displayName = "Radio";
  const nE = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
  function Gn(e) {
    const t = B.useRef(e);
    return (
      nE(() => {
        t.current = e;
      }),
      B.useCallback((...r) => (0, t.current)(...r), [])
    );
  }
  function ng(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  function ig(e, t) {
    return B.useMemo(
      () =>
        e == null && t == null
          ? null
          : (r) => {
              ng(e, r), ng(t, r);
            },
      [e, t]
    );
  }
  let ou = !0,
    Sd = !1,
    og;
  const iE = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
  function oE(e) {
    if ("type" in e) {
      const { type: t, tagName: r } = e;
      if (
        (r === "INPUT" && iE[t] && !e.readOnly) ||
        (r === "TEXTAREA" && !e.readOnly)
      )
        return !0;
    }
    return !!("isContentEditable" in e && e.isContentEditable);
  }
  function sE(e) {
    e.metaKey || e.altKey || e.ctrlKey || (ou = !0);
  }
  function nc() {
    ou = !1;
  }
  function aE() {
    this.visibilityState === "hidden" && Sd && (ou = !0);
  }
  function lE(e) {
    e.addEventListener("keydown", sE, !0),
      e.addEventListener("mousedown", nc, !0),
      e.addEventListener("pointerdown", nc, !0),
      e.addEventListener("touchstart", nc, !0),
      e.addEventListener("visibilitychange", aE, !0);
  }
  function uE(e) {
    const { target: t } = e;
    try {
      return t.matches(":focus-visible");
    } catch {}
    return ou || oE(t);
  }
  function cE() {
    (Sd = !0),
      window.clearTimeout(og),
      (og = window.setTimeout(() => {
        Sd = !1;
      }, 100));
  }
  function dE() {
    const e = B.useCallback((t) => {
      const r = Kl.findDOMNode(t);
      r != null && lE(r.ownerDocument);
    }, []);
    return { isFocusVisible: uE, onBlurVisible: cE, ref: e };
  }
  function fE(e, t, r) {
    return (r - t) * e + t;
  }
  function pa(e, t) {
    if (t !== void 0 && "changedTouches" in e) {
      for (let r = 0; r < e.changedTouches.length; r += 1) {
        const n = e.changedTouches[r];
        if (n.identifier === t) return { x: n.clientX, y: n.clientY };
      }
      return !1;
    }
    return "clientX" in e ? { x: e.clientX, y: e.clientY } : !1;
  }
  function ha(e) {
    return (e && e.ownerDocument) || document;
  }
  function pE(e, t) {
    var r;
    const { index: n } =
      (r = e.reduce((i, o, s) => {
        const a = Math.abs(t - o);
        return i === null || a < i.distance || a === i.distance
          ? { distance: a, index: s }
          : i;
      }, null)) !== null && r !== void 0
        ? r
        : {};
    return n ?? -1;
  }
  const hE = z.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({ hasMarks: e }) => (e ? "41px" : "39px")};
    ${({ isFocused: e, theme: t }) =>
      e &&
      `
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({ orientation: e, size: t }) =>
    e === "vertical"
      ? K`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({ hasMarks: r }) => (r ? "41px" : "39px")};
          }
        `
      : K`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({ hasMarks: r }) => (r ? "41px" : "39px")};
          }
        `}

  pointer-events: ${({ $disabled: e }) => (e ? "none" : "auto")};
`,
    Hy = () => K`
  position: absolute;
  ${({ orientation: e }) =>
    e === "vertical"
      ? K`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `
      : K`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,
    gE = z(jr)`
  ${Hy()}
`,
    mE = z(jr)`
  ${Hy()}

  border-left-color: ${({ theme: e }) => e.flatLight};
  border-top-color: ${({ theme: e }) => e.flatLight};
  border-right-color: ${({ theme: e }) => e.canvas};
  border-bottom-color: ${({ theme: e }) => e.canvas};
  &:before {
    border-left-color: ${({ theme: e }) => e.flatDark};
    border-top-color: ${({ theme: e }) => e.flatDark};
    border-right-color: ${({ theme: e }) => e.flatLight};
    border-bottom-color: ${({ theme: e }) => e.flatLight};
  }
`,
    yE = z.span`
  position: relative;
  ${({ orientation: e }) =>
    e === "vertical"
      ? K`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `
      : K`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({ variant: e }) =>
    e === "flat"
      ? K`
          ${vi()}
          outline: 2px solid ${({ theme: t }) => t.flatDark};
          background: ${({ theme: t }) => t.flatLight};
        `
      : K`
          ${Sr()}
          ${He()}
          &:focus {
            outline: none;
          }
        `}
    ${({ $disabled: e, theme: t }) =>
      e && js({ mainColor: t.material, secondaryColor: t.borderLightest })}
`,
    $i = 6,
    vE = z.span`
  display: inline-block;
  position: absolute;

  ${({ orientation: e }) =>
    e === "vertical"
      ? K`
          right: ${-$i - 2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${$i}px;
          border-bottom: 2px solid ${({ theme: t }) => t.materialText};
        `
      : K`
          bottom: ${-$i}px;
          height: ${$i}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({ theme: t }) => t.materialText};
          border-right: 1px solid ${({ theme: t }) => t.materialText};
        `}

  color:  ${({ theme: e }) => e.materialText};
  ${({ $disabled: e, theme: t }) =>
    e &&
    K`
      ${xr()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,
    AE = z.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({ orientation: e }) =>
    e === "vertical"
      ? K`
          transform: translate(${$i + 2}px, ${$i + 1}px);
        `
      : K`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,
    Kf = B.forwardRef(
      (
        {
          defaultValue: e,
          disabled: t = !1,
          marks: r = !1,
          max: n = 100,
          min: i = 0,
          name: o,
          onChange: s,
          onChangeCommitted: a,
          onMouseDown: l,
          orientation: d = "horizontal",
          size: p = "100%",
          step: h = 1,
          value: y,
          variant: x = "default",
          ...S
        },
        E
      ) => {
        const D = x === "flat" ? mE : gE,
          A = d === "vertical",
          [m = i, v] = Un({ defaultValue: e, onChange: s ?? a, value: y }),
          { isFocusVisible: k, onBlurVisible: I, ref: R } = dE(),
          [M, F] = B.useState(!1),
          re = B.useRef(),
          G = B.useRef(null),
          oe = ig(R, re),
          ne = ig(E, oe),
          de = Gn((P) => {
            k(P) && F(!0);
          }),
          ve = Gn(() => {
            M !== !1 && (F(!1), I());
          }),
          Se = B.useRef(),
          Re = B.useMemo(
            () =>
              r === !0 && Number.isFinite(h)
                ? [...Array(Math.round((n - i) / h) + 1)].map((P, N) => ({
                    label: void 0,
                    value: i + h * N,
                  }))
                : Array.isArray(r)
                ? r
                : [],
            [r, n, i, h]
          ),
          Ae = Gn((P) => {
            const N = (n - i) / 10,
              L = Re.map((te) => te.value),
              j = L.indexOf(m);
            let J = 0;
            switch (P.key) {
              case "Home":
                J = i;
                break;
              case "End":
                J = n;
                break;
              case "PageUp":
                h && (J = m + N);
                break;
              case "PageDown":
                h && (J = m - N);
                break;
              case "ArrowRight":
              case "ArrowUp":
                h ? (J = m + h) : (J = L[j + 1] || L[L.length - 1]);
                break;
              case "ArrowLeft":
              case "ArrowDown":
                h ? (J = m - h) : (J = L[j - 1] || L[0]);
                break;
              default:
                return;
            }
            P.preventDefault(),
              h && (J = eg(J, h, i)),
              (J = oi(J, i, n)),
              v(J),
              F(!0),
              s == null || s(J),
              a == null || a(J);
          }),
          U = B.useCallback(
            (P) => {
              if (!re.current) return 0;
              const N = re.current.getBoundingClientRect();
              let L;
              A
                ? (L = (N.bottom - P.y) / N.height)
                : (L = (P.x - N.left) / N.width);
              let j;
              if (((j = fE(L, i, n)), h)) j = eg(j, h, i);
              else {
                const J = Re.map((_) => _.value),
                  te = pE(J, j);
                j = J[te];
              }
              return (j = oi(j, i, n)), j;
            },
            [Re, n, i, h, A]
          ),
          H = Gn((P) => {
            var N;
            const L = pa(P, Se.current);
            if (!L) return;
            const j = U(L);
            (N = G.current) === null || N === void 0 || N.focus(),
              v(j),
              F(!0),
              s == null || s(j);
          }),
          X = Gn((P) => {
            const N = pa(P, Se.current);
            if (!N) return;
            const L = U(N);
            a == null || a(L), (Se.current = void 0);
            const j = ha(re.current);
            j.removeEventListener("mousemove", H),
              j.removeEventListener("mouseup", X),
              j.removeEventListener("touchmove", H),
              j.removeEventListener("touchend", X);
          }),
          ee = Gn((P) => {
            var N;
            l == null || l(P),
              P.preventDefault(),
              (N = G.current) === null || N === void 0 || N.focus(),
              F(!0);
            const L = pa(P, Se.current);
            if (L) {
              const J = U(L);
              v(J), s == null || s(J);
            }
            const j = ha(re.current);
            j.addEventListener("mousemove", H),
              j.addEventListener("mouseup", X);
          }),
          b = Gn((P) => {
            var N;
            P.preventDefault();
            const L = P.changedTouches[0];
            L != null && (Se.current = L.identifier),
              (N = G.current) === null || N === void 0 || N.focus(),
              F(!0);
            const j = pa(P, Se.current);
            if (j) {
              const te = U(j);
              v(te), s == null || s(te);
            }
            const J = ha(re.current);
            J.addEventListener("touchmove", H),
              J.addEventListener("touchend", X);
          });
        return (
          B.useEffect(() => {
            const { current: P } = re;
            P == null || P.addEventListener("touchstart", b);
            const N = ha(P);
            return () => {
              P == null || P.removeEventListener("touchstart", b),
                N.removeEventListener("mousemove", H),
                N.removeEventListener("mouseup", X),
                N.removeEventListener("touchmove", H),
                N.removeEventListener("touchend", X);
            };
          }, [X, H, b]),
          O.createElement(
            hE,
            {
              $disabled: t,
              hasMarks: !!Re.length,
              isFocused: M,
              onMouseDown: ee,
              orientation: d,
              ref: ne,
              size: Ln(p),
              ...S,
            },
            O.createElement("input", {
              disabled: t,
              name: o,
              type: "hidden",
              value: m ?? 0,
            }),
            Re &&
              Re.map((P) =>
                O.createElement(
                  vE,
                  {
                    $disabled: t,
                    "data-testid": "tick",
                    key: (P.value / (n - i)) * 100,
                    orientation: d,
                    style: {
                      [A ? "bottom" : "left"]: `${
                        ((P.value - i) / (n - i)) * 100
                      }%`,
                    },
                  },
                  P.label &&
                    O.createElement(
                      AE,
                      {
                        "aria-hidden": !0,
                        "data-testid": "mark",
                        orientation: d,
                      },
                      P.label
                    )
                )
              ),
            O.createElement(D, { orientation: d, variant: x }),
            O.createElement(yE, {
              $disabled: t,
              "aria-disabled": t ? !0 : void 0,
              "aria-orientation": d,
              "aria-valuemax": n,
              "aria-valuemin": i,
              "aria-valuenow": m,
              onBlur: ve,
              onFocus: de,
              onKeyDown: Ae,
              orientation: d,
              ref: G,
              role: "slider",
              style: {
                [A ? "bottom" : "left"]: `${
                  (A ? -100 : 0) + (100 * (m - i)) / (n - i)
                }%`,
              },
              tabIndex: t ? void 0 : 0,
              variant: x,
            })
          )
        );
      }
    );
  Kf.displayName = "Slider";
  const wE = z.tbody`
  background: ${({ theme: e }) => e.canvas};
  display: table-row-group;
  box-shadow: ${Yf};
  overflow-y: auto;
`,
    xE = B.forwardRef(function ({ children: t, ...r }, n) {
      return O.createElement(wE, { ref: n, ...r }, t);
    });
  xE.displayName = "TableBody";
  const SE = z.td`
  padding: 0 8px;
`,
    kE = B.forwardRef(function ({ children: t, ...r }, n) {
      return O.createElement(SE, { ref: n, ...r }, t);
    });
  kE.displayName = "TableDataCell";
  const EE = z.thead`
  display: table-header-group;
`,
    CE = B.forwardRef(function ({ children: t, ...r }, n) {
      return O.createElement(EE, { ref: n, ...r }, t);
    });
  CE.displayName = "TableHead";
  const bE = z.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme: e }) => e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${He()}

    border-left: none;
    border-top: none;
  }
  ${({ $disabled: e }) =>
    !e &&
    K`
      &:active {
        &:before {
          ${He({ invert: !0, style: "window" })}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({ theme: e }) => e.materialText};
  ${({ $disabled: e }) => e && xr()}
  &:hover {
    color: ${({ theme: e }) => e.materialText};
    ${({ $disabled: e }) => e && xr()}
  }
`,
    IE = B.forwardRef(function (
      {
        disabled: t = !1,
        children: r,
        onClick: n,
        onTouchStart: i = Si,
        sort: o,
        ...s
      },
      a
    ) {
      const l =
        o === "asc" ? "ascending" : o === "desc" ? "descending" : void 0;
      return O.createElement(
        bE,
        {
          $disabled: t,
          "aria-disabled": t,
          "aria-sort": l,
          onClick: t ? void 0 : n,
          onTouchStart: t ? void 0 : i,
          ref: a,
          ...s,
        },
        O.createElement("div", null, r)
      );
    });
  IE.displayName = "TableHeadCell";
  const BE = z.tr`
  color: inherit;
  display: table-row;
  height: calc(${gt.md} - 2px);
  line-height: calc(${gt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme: e }) => e.canvasText};
  &:hover {
    background: ${({ theme: e }) => e.hoverBackground};
    color: ${({ theme: e }) => e.canvasTextInvert};
  }
`,
    RE = B.forwardRef(function ({ children: t, ...r }, n) {
      return O.createElement(BE, { ref: n, ...r }, t);
    });
  RE.displayName = "TableRow";
  const DE = z.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,
    OE = z(jr)`
  &:before {
    box-shadow: none;
  }
`,
    TE = B.forwardRef(({ children: e, ...t }, r) =>
      O.createElement(OE, null, O.createElement(DE, { ref: r, ...t }, e))
    );
  TE.displayName = "Table";
  const ME = z.button`
  ${Sr()}
  ${He()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${gt.md};
  line-height: ${gt.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({ theme: e }) => e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Ao}
    outline-offset: -6px;
  }
  ${(e) =>
    e.selected &&
    `
    z-index: 1;
    height: calc(${gt.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({ theme: e }) => e.material};
    bottom: -4px;
    left: 2px;
  }
`,
    PE = B.forwardRef(
      ({ value: e, onClick: t, selected: r = !1, children: n, ...i }, o) =>
        O.createElement(
          ME,
          {
            "aria-selected": r,
            selected: r,
            onClick: (s) => (t == null ? void 0 : t(e, s)),
            ref: o,
            role: "tab",
            ...i,
          },
          n
        )
    );
  PE.displayName = "Tab";
  const zE = z.div`
  ${Sr()}
  ${He()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,
    NE = B.forwardRef(({ children: e, ...t }, r) =>
      O.createElement(zE, { ref: r, ...t }, e)
    );
  NE.displayName = "TabBody";
  const QE = z.div`
  position: relative;
  ${({ isMultiRow: e, theme: t }) =>
    e &&
    `
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,
    _E = z.div.attrs(() => ({ "data-testid": "tab-row" }))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({ theme: e }) => e.borderDarkest};
    border-left: 2px solid ${({ theme: e }) => e.borderLightest};
  }
`;
  function jE(e, t) {
    const r = [];
    for (let n = t; n > 0; n -= 1) r.push(e.splice(0, Math.ceil(e.length / n)));
    return r;
  }
  const FE = B.forwardRef(
    ({ value: e, onChange: t = Si, children: r, rows: n = 1, ...i }, o) => {
      const s = B.useMemo(() => {
        var a;
        const l =
            (a = O.Children.map(r, (h) => {
              if (!O.isValidElement(h)) return null;
              const y = { selected: h.props.value === e, onClick: t };
              return O.cloneElement(h, y);
            })) !== null && a !== void 0
              ? a
              : [],
          d = jE(l, n).map((h, y) => ({ key: y, tabs: h })),
          p = d.findIndex((h) => h.tabs.some((y) => y.props.selected));
        return d.push(d.splice(p, 1)[0]), d;
      }, [r, t, n, e]);
      return O.createElement(
        QE,
        { ...i, isMultiRow: n > 1, role: "tablist", ref: o },
        s.map((a) => O.createElement(_E, { key: a.key }, a.tabs))
      );
    }
  );
  FE.displayName = "Tabs";
  const LE = ["blur", "focus"],
    UE = [
      "click",
      "contextmenu",
      "doubleclick",
      "drag",
      "dragend",
      "dragenter",
      "dragexit",
      "dragleave",
      "dragover",
      "dragstart",
      "drop",
      "mousedown",
      "mouseenter",
      "mouseleave",
      "mousemove",
      "mouseout",
      "mouseover",
      "mouseup",
    ];
  function sg(e) {
    return "nativeEvent" in e && LE.includes(e.type);
  }
  function ag(e) {
    return "nativeEvent" in e && UE.includes(e.type);
  }
  const YE = {
      top: `top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,
      bottom: `bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,
      left: `left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,
      right: `right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`,
    },
    WE = z.span`
  position: absolute;

  z-index: 1;
  display: ${(e) => (e.show ? "block" : "none")};
  padding: 4px;
  border: 2px solid ${({ theme: e }) => e.borderDarkest};
  background: ${({ theme: e }) => e.tooltip};
  box-shadow: ${Uf};
  text-align: center;
  font-size: 1rem;
  ${(e) => YE[e.position]}
`,
    JE = z.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,
    Vy = B.forwardRef(
      (
        {
          className: e,
          children: t,
          disableFocusListener: r = !1,
          disableMouseListener: n = !1,
          enterDelay: i = 1e3,
          leaveDelay: o = 0,
          onBlur: s,
          onClose: a,
          onFocus: l,
          onMouseEnter: d,
          onMouseLeave: p,
          onOpen: h,
          style: y,
          text: x,
          position: S = "top",
          ...E
        },
        D
      ) => {
        const [A, m] = B.useState(!1),
          [v, k] = B.useState(),
          [I, R] = B.useState(),
          M = !r,
          F = !n,
          re = (U) => {
            window.clearTimeout(v), window.clearTimeout(I);
            const H = window.setTimeout(() => {
              m(!0), h == null || h(U);
            }, i);
            k(H);
          },
          G = (U) => {
            U.persist(),
              sg(U) ? l == null || l(U) : ag(U) && (d == null || d(U)),
              re(U);
          },
          oe = (U) => {
            window.clearTimeout(v), window.clearTimeout(I);
            const H = window.setTimeout(() => {
              m(!1), a == null || a(U);
            }, o);
            R(H);
          },
          ne = (U) => {
            U.persist(),
              sg(U) ? s == null || s(U) : ag(U) && (p == null || p(U)),
              oe(U);
          },
          de = M ? ne : void 0,
          ve = M ? G : void 0,
          Se = F ? G : void 0,
          Re = F ? ne : void 0,
          Ae = M ? 0 : void 0;
        return O.createElement(
          JE,
          {
            "data-testid": "tooltip-wrapper",
            onBlur: de,
            onFocus: ve,
            onMouseEnter: Se,
            onMouseLeave: Re,
            tabIndex: Ae,
          },
          O.createElement(
            WE,
            {
              className: e,
              "data-testid": "tooltip",
              position: S,
              ref: D,
              show: A,
              style: y,
              ...E,
            },
            x
          ),
          t
        );
      }
    );
  Vy.displayName = "Tooltip";
  const kd = z(Vf)`
  white-space: nowrap;
`,
    $y = K`
  :focus {
    outline: none;
  }

  ${({ $disabled: e }) =>
    e
      ? "cursor: default;"
      : K`
          cursor: pointer;

          :focus {
            ${kd} {
              background: ${({ theme: t }) => t.hoverBackground};
              color: ${({ theme: t }) => t.materialTextInvert};
              outline: 2px dotted ${({ theme: t }) => t.focusSecondary};
            }
          }
        `}
`,
    HE = z.ul`
  position: relative;
  isolation: isolate;

  ${({ isRootLevel: e }) =>
    e &&
    K`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({ theme: t }) => t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({ theme: e }) => e.borderDark};
      font-size: 12px;
    }
  }
`,
    VE = z.li`
  position: relative;
  padding-left: ${({ hasItems: e }) => (e ? "0" : "13px")};

  ${({ isRootLevel: e }) =>
    e
      ? K`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({ theme: t }) => t.material};
            }
          }
        `
      : K`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({ theme: t }) => t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({ theme: e }) => e.borderDark};
    }
  }
`,
    $E = z.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,
    GE = z.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({ theme: e }) => e.materialText};
  user-select: none;
  padding-left: 18px;
  ${$y};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,
    lg = z(Hf)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${$y};
`,
    XE = z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
  function ug(e, t) {
    return e.includes(t) ? e.filter((r) => r !== t) : [...e, t];
  }
  function cg(e) {
    e.preventDefault();
  }
  function Gy({
    className: e,
    disabled: t,
    expanded: r,
    innerRef: n,
    level: i,
    select: o,
    selected: s,
    style: a,
    tree: l = [],
  }) {
    const d = i === 0,
      p = B.useCallback(
        (h) => {
          var y, x;
          const S = !!(h.items && h.items.length > 0),
            E = r.includes(h.id),
            D = (y = t || h.disabled) !== null && y !== void 0 ? y : !1,
            A = D ? cg : (I) => o(I, h),
            m = D ? cg : (I) => o(I, h),
            v = s === h.id,
            k = O.createElement(XE, { "aria-hidden": !0 }, h.icon);
          return O.createElement(
            VE,
            {
              key: h.label,
              isRootLevel: d,
              role: "treeitem",
              "aria-expanded": E,
              "aria-selected": v,
              hasItems: S,
            },
            S
              ? O.createElement(
                  $E,
                  { open: E },
                  O.createElement(
                    GE,
                    { onClick: A, $disabled: D },
                    O.createElement(
                      lg,
                      { $disabled: D },
                      k,
                      O.createElement(kd, null, h.label)
                    )
                  ),
                  E &&
                    O.createElement(Gy, {
                      className: e,
                      disabled: D,
                      expanded: r,
                      level: i + 1,
                      select: o,
                      selected: s,
                      style: a,
                      tree: (x = h.items) !== null && x !== void 0 ? x : [],
                    })
                )
              : O.createElement(
                  lg,
                  { as: "button", $disabled: D, onClick: m },
                  k,
                  O.createElement(kd, null, h.label)
                )
          );
        },
        [e, t, r, d, i, o, s, a]
      );
    return O.createElement(
      HE,
      {
        className: d ? e : void 0,
        style: d ? a : void 0,
        ref: d ? n : void 0,
        role: d ? "tree" : "group",
        isRootLevel: d,
      },
      l.map(p)
    );
  }
  function KE(
    {
      className: e,
      defaultExpanded: t = [],
      defaultSelected: r,
      disabled: n = !1,
      expanded: i,
      onNodeSelect: o,
      onNodeToggle: s,
      selected: a,
      style: l,
      tree: d = [],
    },
    p
  ) {
    const [h, y] = Un({
        defaultValue: t,
        onChange: s,
        onChangePropName: "onNodeToggle",
        value: i,
        valuePropName: "expanded",
      }),
      [x, S] = Un({
        defaultValue: r,
        onChange: o,
        onChangePropName: "onNodeSelect",
        value: a,
        valuePropName: "selected",
      }),
      E = B.useCallback(
        (m, v) => {
          if (s) {
            const k = ug(h, v);
            s(m, k);
          }
          y((k) => ug(k, v));
        },
        [h, s, y]
      ),
      D = B.useCallback(
        (m, v) => {
          S(v), o && o(m, v);
        },
        [o, S]
      ),
      A = B.useCallback(
        (m, v) => {
          m.preventDefault(),
            D(m, v.id),
            v.items && v.items.length && E(m, v.id);
        },
        [D, E]
      );
    return O.createElement(Gy, {
      className: e,
      disabled: n,
      expanded: h,
      level: 0,
      innerRef: p,
      select: A,
      selected: x,
      style: l,
      tree: d,
    });
  }
  const ZE = B.forwardRef(KE);
  ZE.displayName = "TreeView";
  var Xy = { exports: {} },
    Ky = {};
  /**
   * @license React
   * use-sync-external-store-with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Us = B;
  function qE(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var eC = typeof Object.is == "function" ? Object.is : qE,
    tC = Us.useSyncExternalStore,
    rC = Us.useRef,
    nC = Us.useEffect,
    iC = Us.useMemo,
    oC = Us.useDebugValue;
  Ky.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
    var o = rC(null);
    if (o.current === null) {
      var s = { hasValue: !1, value: null };
      o.current = s;
    } else s = o.current;
    o = iC(
      function () {
        function l(x) {
          if (!d) {
            if (((d = !0), (p = x), (x = n(x)), i !== void 0 && s.hasValue)) {
              var S = s.value;
              if (i(S, x)) return (h = S);
            }
            return (h = x);
          }
          if (((S = h), eC(p, x))) return S;
          var E = n(x);
          return i !== void 0 && i(S, E) ? S : ((p = x), (h = E));
        }
        var d = !1,
          p,
          h,
          y = r === void 0 ? null : r;
        return [
          function () {
            return l(t());
          },
          y === null
            ? void 0
            : function () {
                return l(y());
              },
        ];
      },
      [t, r, n, i]
    );
    var a = tC(e, o[0], o[1]);
    return (
      nC(
        function () {
          (s.hasValue = !0), (s.value = a);
        },
        [a]
      ),
      oC(a),
      a
    );
  };
  Xy.exports = Ky;
  var sC = Xy.exports,
    Lt = "default" in zp ? O : zp,
    dg = Symbol.for("react-redux-context"),
    fg = typeof globalThis < "u" ? globalThis : {};
  function aC() {
    if (!Lt.createContext) return {};
    const e = fg[dg] ?? (fg[dg] = new Map());
    let t = e.get(Lt.createContext);
    return t || ((t = Lt.createContext(null)), e.set(Lt.createContext, t)), t;
  }
  var Yn = aC(),
    lC = () => {
      throw new Error("uSES not initialized!");
    };
  function Zf(e = Yn) {
    return function () {
      return Lt.useContext(e);
    };
  }
  var Zy = Zf(),
    qy = lC,
    uC = (e) => {
      qy = e;
    },
    cC = (e, t) => e === t;
  function dC(e = Yn) {
    const t = e === Yn ? Zy : Zf(e),
      r = (n, i = {}) => {
        const { equalityFn: o = cC, devModeChecks: s = {} } =
            typeof i == "function" ? { equalityFn: i } : i,
          {
            store: a,
            subscription: l,
            getServerState: d,
            stabilityCheck: p,
            identityFunctionCheck: h,
          } = t();
        Lt.useRef(!0);
        const y = Lt.useCallback(
            {
              [n.name](S) {
                return n(S);
              },
            }[n.name],
            [n, p, s.stabilityCheck]
          ),
          x = qy(l.addNestedSub, a.getState, d || a.getState, y, o);
        return Lt.useDebugValue(x), x;
      };
    return Object.assign(r, { withTypes: () => r }), r;
  }
  var ki = dC();
  function fC(e) {
    e();
  }
  function pC() {
    let e = null,
      t = null;
    return {
      clear() {
        (e = null), (t = null);
      },
      notify() {
        fC(() => {
          let r = e;
          for (; r; ) r.callback(), (r = r.next);
        });
      },
      get() {
        const r = [];
        let n = e;
        for (; n; ) r.push(n), (n = n.next);
        return r;
      },
      subscribe(r) {
        let n = !0;
        const i = (t = { callback: r, next: null, prev: t });
        return (
          i.prev ? (i.prev.next = i) : (e = i),
          function () {
            !n ||
              e === null ||
              ((n = !1),
              i.next ? (i.next.prev = i.prev) : (t = i.prev),
              i.prev ? (i.prev.next = i.next) : (e = i.next));
          }
        );
      },
    };
  }
  var pg = { notify() {}, get: () => [] };
  function hC(e, t) {
    let r,
      n = pg,
      i = 0,
      o = !1;
    function s(E) {
      p();
      const D = n.subscribe(E);
      let A = !1;
      return () => {
        A || ((A = !0), D(), h());
      };
    }
    function a() {
      n.notify();
    }
    function l() {
      S.onStateChange && S.onStateChange();
    }
    function d() {
      return o;
    }
    function p() {
      i++, r || ((r = t ? t.addNestedSub(l) : e.subscribe(l)), (n = pC()));
    }
    function h() {
      i--, r && i === 0 && (r(), (r = void 0), n.clear(), (n = pg));
    }
    function y() {
      o || ((o = !0), p());
    }
    function x() {
      o && ((o = !1), h());
    }
    const S = {
      addNestedSub: s,
      notifyNestedSubs: a,
      handleChangeWrapper: l,
      isSubscribed: d,
      trySubscribe: y,
      tryUnsubscribe: x,
      getListeners: () => n,
    };
    return S;
  }
  var gC =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    mC = typeof navigator < "u" && navigator.product === "ReactNative",
    yC = gC || mC ? Lt.useLayoutEffect : Lt.useEffect;
  function vC({
    store: e,
    context: t,
    children: r,
    serverState: n,
    stabilityCheck: i = "once",
    identityFunctionCheck: o = "once",
  }) {
    const s = Lt.useMemo(() => {
        const d = hC(e);
        return {
          store: e,
          subscription: d,
          getServerState: n ? () => n : void 0,
          stabilityCheck: i,
          identityFunctionCheck: o,
        };
      }, [e, n, i, o]),
      a = Lt.useMemo(() => e.getState(), [e]);
    yC(() => {
      const { subscription: d } = s;
      return (
        (d.onStateChange = d.notifyNestedSubs),
        d.trySubscribe(),
        a !== e.getState() && d.notifyNestedSubs(),
        () => {
          d.tryUnsubscribe(), (d.onStateChange = void 0);
        }
      );
    }, [s, a]);
    const l = t || Yn;
    return Lt.createElement(l.Provider, { value: s }, r);
  }
  var AC = vC;
  function ev(e = Yn) {
    const t = e === Yn ? Zy : Zf(e),
      r = () => {
        const { store: n } = t();
        return n;
      };
    return Object.assign(r, { withTypes: () => r }), r;
  }
  var wC = ev();
  function xC(e = Yn) {
    const t = e === Yn ? wC : ev(e),
      r = () => t().dispatch;
    return Object.assign(r, { withTypes: () => r }), r;
  }
  var Bo = xC();
  uC(sC.useSyncExternalStoreWithSelector);
  function ft(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  var SC = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
    hg = SC,
    ic = () => Math.random().toString(36).substring(7).split("").join("."),
    kC = {
      INIT: `@@redux/INIT${ic()}`,
      REPLACE: `@@redux/REPLACE${ic()}`,
      PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ic()}`,
    },
    xl = kC;
  function qf(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = e;
    for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
  }
  function tv(e, t, r) {
    if (typeof e != "function") throw new Error(ft(2));
    if (
      (typeof t == "function" && typeof r == "function") ||
      (typeof r == "function" && typeof arguments[3] == "function")
    )
      throw new Error(ft(0));
    if (
      (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
      typeof r < "u")
    ) {
      if (typeof r != "function") throw new Error(ft(1));
      return r(tv)(e, t);
    }
    let n = e,
      i = t,
      o = new Map(),
      s = o,
      a = 0,
      l = !1;
    function d() {
      s === o &&
        ((s = new Map()),
        o.forEach((D, A) => {
          s.set(A, D);
        }));
    }
    function p() {
      if (l) throw new Error(ft(3));
      return i;
    }
    function h(D) {
      if (typeof D != "function") throw new Error(ft(4));
      if (l) throw new Error(ft(5));
      let A = !0;
      d();
      const m = a++;
      return (
        s.set(m, D),
        function () {
          if (A) {
            if (l) throw new Error(ft(6));
            (A = !1), d(), s.delete(m), (o = null);
          }
        }
      );
    }
    function y(D) {
      if (!qf(D)) throw new Error(ft(7));
      if (typeof D.type > "u") throw new Error(ft(8));
      if (typeof D.type != "string") throw new Error(ft(17));
      if (l) throw new Error(ft(9));
      try {
        (l = !0), (i = n(i, D));
      } finally {
        l = !1;
      }
      return (
        (o = s).forEach((m) => {
          m();
        }),
        D
      );
    }
    function x(D) {
      if (typeof D != "function") throw new Error(ft(10));
      (n = D), y({ type: xl.REPLACE });
    }
    function S() {
      const D = h;
      return {
        subscribe(A) {
          if (typeof A != "object" || A === null) throw new Error(ft(11));
          function m() {
            const k = A;
            k.next && k.next(p());
          }
          return m(), { unsubscribe: D(m) };
        },
        [hg]() {
          return this;
        },
      };
    }
    return (
      y({ type: xl.INIT }),
      { dispatch: y, subscribe: h, getState: p, replaceReducer: x, [hg]: S }
    );
  }
  function EC(e) {
    Object.keys(e).forEach((t) => {
      const r = e[t];
      if (typeof r(void 0, { type: xl.INIT }) > "u") throw new Error(ft(12));
      if (typeof r(void 0, { type: xl.PROBE_UNKNOWN_ACTION() }) > "u")
        throw new Error(ft(13));
    });
  }
  function CC(e) {
    const t = Object.keys(e),
      r = {};
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      typeof e[s] == "function" && (r[s] = e[s]);
    }
    const n = Object.keys(r);
    let i;
    try {
      EC(r);
    } catch (o) {
      i = o;
    }
    return function (s = {}, a) {
      if (i) throw i;
      let l = !1;
      const d = {};
      for (let p = 0; p < n.length; p++) {
        const h = n[p],
          y = r[h],
          x = s[h],
          S = y(x, a);
        if (typeof S > "u") throw (a && a.type, new Error(ft(14)));
        (d[h] = S), (l = l || S !== x);
      }
      return (l = l || n.length !== Object.keys(s).length), l ? d : s;
    };
  }
  function Sl(...e) {
    return e.length === 0
      ? (t) => t
      : e.length === 1
      ? e[0]
      : e.reduce(
          (t, r) =>
            (...n) =>
              t(r(...n))
        );
  }
  function bC(...e) {
    return (t) => (r, n) => {
      const i = t(r, n);
      let o = () => {
        throw new Error(ft(15));
      };
      const s = { getState: i.getState, dispatch: (l, ...d) => o(l, ...d) },
        a = e.map((l) => l(s));
      return (o = Sl(...a)(i.dispatch)), { ...i, dispatch: o };
    };
  }
  function IC(e) {
    return qf(e) && "type" in e && typeof e.type == "string";
  }
  var rv = Symbol.for("immer-nothing"),
    gg = Symbol.for("immer-draftable"),
    Jt = Symbol.for("immer-state");
  function gr(e, ...t) {
    throw new Error(
      `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    );
  }
  var wo = Object.getPrototypeOf;
  function Wn(e) {
    return !!e && !!e[Jt];
  }
  function cn(e) {
    var t;
    return e
      ? nv(e) ||
          Array.isArray(e) ||
          !!e[gg] ||
          !!((t = e.constructor) != null && t[gg]) ||
          au(e) ||
          lu(e)
      : !1;
  }
  var BC = Object.prototype.constructor.toString();
  function nv(e) {
    if (!e || typeof e != "object") return !1;
    const t = wo(e);
    if (t === null) return !0;
    const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object
      ? !0
      : typeof r == "function" && Function.toString.call(r) === BC;
  }
  function kl(e, t) {
    su(e) === 0
      ? Reflect.ownKeys(e).forEach((r) => {
          t(r, e[r], e);
        })
      : e.forEach((r, n) => t(n, r, e));
  }
  function su(e) {
    const t = e[Jt];
    return t ? t.type_ : Array.isArray(e) ? 1 : au(e) ? 2 : lu(e) ? 3 : 0;
  }
  function Ed(e, t) {
    return su(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
  }
  function iv(e, t, r) {
    const n = su(e);
    n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
  }
  function RC(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function au(e) {
    return e instanceof Map;
  }
  function lu(e) {
    return e instanceof Set;
  }
  function qn(e) {
    return e.copy_ || e.base_;
  }
  function Cd(e, t) {
    if (au(e)) return new Map(e);
    if (lu(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && nv(e))
      return wo(e) ? { ...e } : Object.assign(Object.create(null), e);
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Jt];
    let n = Reflect.ownKeys(r);
    for (let i = 0; i < n.length; i++) {
      const o = n[i],
        s = r[o];
      s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
        (s.get || s.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[o],
          });
    }
    return Object.create(wo(e), r);
  }
  function ep(e, t = !1) {
    return (
      uu(e) ||
        Wn(e) ||
        !cn(e) ||
        (su(e) > 1 && (e.set = e.add = e.clear = e.delete = DC),
        Object.freeze(e),
        t && Object.entries(e).forEach(([r, n]) => ep(n, !0))),
      e
    );
  }
  function DC() {
    gr(2);
  }
  function uu(e) {
    return Object.isFrozen(e);
  }
  var OC = {};
  function Ai(e) {
    const t = OC[e];
    return t || gr(0, e), t;
  }
  var bs;
  function ov() {
    return bs;
  }
  function TC(e, t) {
    return {
      drafts_: [],
      parent_: e,
      immer_: t,
      canAutoFreeze_: !0,
      unfinalizedDrafts_: 0,
    };
  }
  function mg(e, t) {
    t &&
      (Ai("Patches"),
      (e.patches_ = []),
      (e.inversePatches_ = []),
      (e.patchListener_ = t));
  }
  function bd(e) {
    Id(e), e.drafts_.forEach(MC), (e.drafts_ = null);
  }
  function Id(e) {
    e === bs && (bs = e.parent_);
  }
  function yg(e) {
    return (bs = TC(bs, e));
  }
  function MC(e) {
    const t = e[Jt];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
  }
  function vg(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const r = t.drafts_[0];
    return (
      e !== void 0 && e !== r
        ? (r[Jt].modified_ && (bd(t), gr(4)),
          cn(e) && ((e = El(t, e)), t.parent_ || Cl(t, e)),
          t.patches_ &&
            Ai("Patches").generateReplacementPatches_(
              r[Jt].base_,
              e,
              t.patches_,
              t.inversePatches_
            ))
        : (e = El(t, r, [])),
      bd(t),
      t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
      e !== rv ? e : void 0
    );
  }
  function El(e, t, r) {
    if (uu(t)) return t;
    const n = t[Jt];
    if (!n) return kl(t, (i, o) => Ag(e, n, t, i, o, r)), t;
    if (n.scope_ !== e) return t;
    if (!n.modified_) return Cl(e, n.base_, !0), n.base_;
    if (!n.finalized_) {
      (n.finalized_ = !0), n.scope_.unfinalizedDrafts_--;
      const i = n.copy_;
      let o = i,
        s = !1;
      n.type_ === 3 && ((o = new Set(i)), i.clear(), (s = !0)),
        kl(o, (a, l) => Ag(e, n, i, a, l, r, s)),
        Cl(e, i, !1),
        r &&
          e.patches_ &&
          Ai("Patches").generatePatches_(n, r, e.patches_, e.inversePatches_);
    }
    return n.copy_;
  }
  function Ag(e, t, r, n, i, o, s) {
    if (Wn(i)) {
      const a =
          o && t && t.type_ !== 3 && !Ed(t.assigned_, n) ? o.concat(n) : void 0,
        l = El(e, i, a);
      if ((iv(r, n, l), Wn(l))) e.canAutoFreeze_ = !1;
      else return;
    } else s && r.add(i);
    if (cn(i) && !uu(i)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
      El(e, i),
        (!t || !t.scope_.parent_) &&
          typeof n != "symbol" &&
          Object.prototype.propertyIsEnumerable.call(r, n) &&
          Cl(e, i);
    }
  }
  function Cl(e, t, r = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ep(t, r);
  }
  function PC(e, t) {
    const r = Array.isArray(e),
      n = {
        type_: r ? 1 : 0,
        scope_: t ? t.scope_ : ov(),
        modified_: !1,
        finalized_: !1,
        assigned_: {},
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: !1,
      };
    let i = n,
      o = tp;
    r && ((i = [n]), (o = Is));
    const { revoke: s, proxy: a } = Proxy.revocable(i, o);
    return (n.draft_ = a), (n.revoke_ = s), a;
  }
  var tp = {
      get(e, t) {
        if (t === Jt) return e;
        const r = qn(e);
        if (!Ed(r, t)) return zC(e, r, t);
        const n = r[t];
        return e.finalized_ || !cn(n)
          ? n
          : n === oc(e.base_, t)
          ? (sc(e), (e.copy_[t] = Rd(n, e)))
          : n;
      },
      has(e, t) {
        return t in qn(e);
      },
      ownKeys(e) {
        return Reflect.ownKeys(qn(e));
      },
      set(e, t, r) {
        const n = sv(qn(e), t);
        if (n != null && n.set) return n.set.call(e.draft_, r), !0;
        if (!e.modified_) {
          const i = oc(qn(e), t),
            o = i == null ? void 0 : i[Jt];
          if (o && o.base_ === r)
            return (e.copy_[t] = r), (e.assigned_[t] = !1), !0;
          if (RC(r, i) && (r !== void 0 || Ed(e.base_, t))) return !0;
          sc(e), Bd(e);
        }
        return (
          (e.copy_[t] === r && (r !== void 0 || t in e.copy_)) ||
            (Number.isNaN(r) && Number.isNaN(e.copy_[t])) ||
            ((e.copy_[t] = r), (e.assigned_[t] = !0)),
          !0
        );
      },
      deleteProperty(e, t) {
        return (
          oc(e.base_, t) !== void 0 || t in e.base_
            ? ((e.assigned_[t] = !1), sc(e), Bd(e))
            : delete e.assigned_[t],
          e.copy_ && delete e.copy_[t],
          !0
        );
      },
      getOwnPropertyDescriptor(e, t) {
        const r = qn(e),
          n = Reflect.getOwnPropertyDescriptor(r, t);
        return (
          n && {
            writable: !0,
            configurable: e.type_ !== 1 || t !== "length",
            enumerable: n.enumerable,
            value: r[t],
          }
        );
      },
      defineProperty() {
        gr(11);
      },
      getPrototypeOf(e) {
        return wo(e.base_);
      },
      setPrototypeOf() {
        gr(12);
      },
    },
    Is = {};
  kl(tp, (e, t) => {
    Is[e] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  });
  Is.deleteProperty = function (e, t) {
    return Is.set.call(this, e, t, void 0);
  };
  Is.set = function (e, t, r) {
    return tp.set.call(this, e[0], t, r, e[0]);
  };
  function oc(e, t) {
    const r = e[Jt];
    return (r ? qn(r) : e)[t];
  }
  function zC(e, t, r) {
    var i;
    const n = sv(t, r);
    return n
      ? "value" in n
        ? n.value
        : (i = n.get) == null
        ? void 0
        : i.call(e.draft_)
      : void 0;
  }
  function sv(e, t) {
    if (!(t in e)) return;
    let r = wo(e);
    for (; r; ) {
      const n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = wo(r);
    }
  }
  function Bd(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Bd(e.parent_));
  }
  function sc(e) {
    e.copy_ || (e.copy_ = Cd(e.base_, e.scope_.immer_.useStrictShallowCopy_));
  }
  var NC = class {
    constructor(e) {
      (this.autoFreeze_ = !0),
        (this.useStrictShallowCopy_ = !1),
        (this.produce = (t, r, n) => {
          if (typeof t == "function" && typeof r != "function") {
            const o = r;
            r = t;
            const s = this;
            return function (l = o, ...d) {
              return s.produce(l, (p) => r.call(this, p, ...d));
            };
          }
          typeof r != "function" && gr(6),
            n !== void 0 && typeof n != "function" && gr(7);
          let i;
          if (cn(t)) {
            const o = yg(this),
              s = Rd(t, void 0);
            let a = !0;
            try {
              (i = r(s)), (a = !1);
            } finally {
              a ? bd(o) : Id(o);
            }
            return mg(o, n), vg(i, o);
          } else if (!t || typeof t != "object") {
            if (
              ((i = r(t)),
              i === void 0 && (i = t),
              i === rv && (i = void 0),
              this.autoFreeze_ && ep(i, !0),
              n)
            ) {
              const o = [],
                s = [];
              Ai("Patches").generateReplacementPatches_(t, i, o, s), n(o, s);
            }
            return i;
          } else gr(1, t);
        }),
        (this.produceWithPatches = (t, r) => {
          if (typeof t == "function")
            return (s, ...a) => this.produceWithPatches(s, (l) => t(l, ...a));
          let n, i;
          return [
            this.produce(t, r, (s, a) => {
              (n = s), (i = a);
            }),
            n,
            i,
          ];
        }),
        typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
          this.setAutoFreeze(e.autoFreeze),
        typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
          this.setUseStrictShallowCopy(e.useStrictShallowCopy);
    }
    createDraft(e) {
      cn(e) || gr(8), Wn(e) && (e = av(e));
      const t = yg(this),
        r = Rd(e, void 0);
      return (r[Jt].isManual_ = !0), Id(t), r;
    }
    finishDraft(e, t) {
      const r = e && e[Jt];
      (!r || !r.isManual_) && gr(9);
      const { scope_: n } = r;
      return mg(n, t), vg(void 0, n);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
      let r;
      for (r = t.length - 1; r >= 0; r--) {
        const i = t[r];
        if (i.path.length === 0 && i.op === "replace") {
          e = i.value;
          break;
        }
      }
      r > -1 && (t = t.slice(r + 1));
      const n = Ai("Patches").applyPatches_;
      return Wn(e) ? n(e, t) : this.produce(e, (i) => n(i, t));
    }
  };
  function Rd(e, t) {
    const r = au(e)
      ? Ai("MapSet").proxyMap_(e, t)
      : lu(e)
      ? Ai("MapSet").proxySet_(e, t)
      : PC(e, t);
    return (t ? t.scope_ : ov()).drafts_.push(r), r;
  }
  function av(e) {
    return Wn(e) || gr(10, e), lv(e);
  }
  function lv(e) {
    if (!cn(e) || uu(e)) return e;
    const t = e[Jt];
    let r;
    if (t) {
      if (!t.modified_) return t.base_;
      (t.finalized_ = !0), (r = Cd(e, t.scope_.immer_.useStrictShallowCopy_));
    } else r = Cd(e, !0);
    return (
      kl(r, (n, i) => {
        iv(r, n, lv(i));
      }),
      t && (t.finalized_ = !1),
      r
    );
  }
  var Ht = new NC(),
    uv = Ht.produce;
  Ht.produceWithPatches.bind(Ht);
  Ht.setAutoFreeze.bind(Ht);
  Ht.setUseStrictShallowCopy.bind(Ht);
  Ht.applyPatches.bind(Ht);
  Ht.createDraft.bind(Ht);
  Ht.finishDraft.bind(Ht);
  function QC(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function _C(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function jC(
    e,
    t = "expected all items to be functions, instead received the following types: "
  ) {
    if (!e.every((r) => typeof r == "function")) {
      const r = e
        .map((n) =>
          typeof n == "function"
            ? `function ${n.name || "unnamed"}()`
            : typeof n
        )
        .join(", ");
      throw new TypeError(`${t}[${r}]`);
    }
  }
  var wg = (e) => (Array.isArray(e) ? e : [e]);
  function FC(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return (
      jC(
        t,
        "createSelector expects all input-selectors to be functions, but received the following types: "
      ),
      t
    );
  }
  function LC(e, t) {
    const r = [],
      { length: n } = e;
    for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
    return r;
  }
  var UC = class {
      constructor(e) {
        this.value = e;
      }
      deref() {
        return this.value;
      }
    },
    YC = typeof WeakRef < "u" ? WeakRef : UC,
    WC = 0,
    xg = 1;
  function ga() {
    return { s: WC, v: void 0, o: null, p: null };
  }
  function rp(e, t = {}) {
    let r = ga();
    const { resultEqualityCheck: n } = t;
    let i,
      o = 0;
    function s() {
      var h;
      let a = r;
      const { length: l } = arguments;
      for (let y = 0, x = l; y < x; y++) {
        const S = arguments[y];
        if (typeof S == "function" || (typeof S == "object" && S !== null)) {
          let E = a.o;
          E === null && (a.o = E = new WeakMap());
          const D = E.get(S);
          D === void 0 ? ((a = ga()), E.set(S, a)) : (a = D);
        } else {
          let E = a.p;
          E === null && (a.p = E = new Map());
          const D = E.get(S);
          D === void 0 ? ((a = ga()), E.set(S, a)) : (a = D);
        }
      }
      const d = a;
      let p;
      if (
        (a.s === xg ? (p = a.v) : ((p = e.apply(null, arguments)), o++),
        (d.s = xg),
        n)
      ) {
        const y =
          ((h = i == null ? void 0 : i.deref) == null ? void 0 : h.call(i)) ??
          i;
        y != null && n(y, p) && ((p = y), o !== 0 && o--),
          (i =
            (typeof p == "object" && p !== null) || typeof p == "function"
              ? new YC(p)
              : p);
      }
      return (d.v = p), p;
    }
    return (
      (s.clearCache = () => {
        (r = ga()), s.resetResultsCount();
      }),
      (s.resultsCount = () => o),
      (s.resetResultsCount = () => {
        o = 0;
      }),
      s
    );
  }
  function cv(e, ...t) {
    const r = typeof e == "function" ? { memoize: e, memoizeOptions: t } : e,
      n = (...i) => {
        let o = 0,
          s = 0,
          a,
          l = {},
          d = i.pop();
        typeof d == "object" && ((l = d), (d = i.pop())),
          QC(
            d,
            `createSelector expects an output function after the inputs, but received: [${typeof d}]`
          );
        const p = { ...r, ...l },
          {
            memoize: h,
            memoizeOptions: y = [],
            argsMemoize: x = rp,
            argsMemoizeOptions: S = [],
            devModeChecks: E = {},
          } = p,
          D = wg(y),
          A = wg(S),
          m = FC(i),
          v = h(function () {
            return o++, d.apply(null, arguments);
          }, ...D),
          k = x(function () {
            s++;
            const R = LC(m, arguments);
            return (a = v.apply(null, R)), a;
          }, ...A);
        return Object.assign(k, {
          resultFunc: d,
          memoizedResultFunc: v,
          dependencies: m,
          dependencyRecomputations: () => s,
          resetDependencyRecomputations: () => {
            s = 0;
          },
          lastResult: () => a,
          recomputations: () => o,
          resetRecomputations: () => {
            o = 0;
          },
          memoize: h,
          argsMemoize: x,
        });
      };
    return Object.assign(n, { withTypes: () => n }), n;
  }
  var JC = cv(rp),
    HC = Object.assign(
      (e, t = JC) => {
        _C(
          e,
          `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
        );
        const r = Object.keys(e),
          n = r.map((o) => e[o]);
        return t(n, (...o) => o.reduce((s, a, l) => ((s[r[l]] = a), s), {}));
      },
      { withTypes: () => HC }
    );
  function dv(e) {
    return ({ dispatch: r, getState: n }) =>
      (i) =>
      (o) =>
        typeof o == "function" ? o(r, n, e) : i(o);
  }
  var VC = dv(),
    $C = dv,
    GC = (...e) => {
      const t = cv(...e),
        r = Object.assign(
          (...n) => {
            const i = t(...n),
              o = (s, ...a) => i(Wn(s) ? av(s) : s, ...a);
            return Object.assign(o, i), o;
          },
          { withTypes: () => r }
        );
      return r;
    };
  GC(rp);
  var XC =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? Sl
              : Sl.apply(null, arguments);
        };
  function xo(e, t) {
    function r(...n) {
      if (t) {
        let i = t(...n);
        if (!i) throw new Error(Pt(0));
        return {
          type: e,
          payload: i.payload,
          ...("meta" in i && { meta: i.meta }),
          ...("error" in i && { error: i.error }),
        };
      }
      return { type: e, payload: n[0] };
    }
    return (
      (r.toString = () => `${e}`),
      (r.type = e),
      (r.match = (n) => IC(n) && n.type === e),
      r
    );
  }
  var fv = class $o extends Array {
    constructor(...t) {
      super(...t), Object.setPrototypeOf(this, $o.prototype);
    }
    static get [Symbol.species]() {
      return $o;
    }
    concat(...t) {
      return super.concat.apply(this, t);
    }
    prepend(...t) {
      return t.length === 1 && Array.isArray(t[0])
        ? new $o(...t[0].concat(this))
        : new $o(...t.concat(this));
    }
  };
  function Sg(e) {
    return cn(e) ? uv(e, () => {}) : e;
  }
  function kg(e, t, r) {
    if (e.has(t)) {
      let i = e.get(t);
      return r.update && ((i = r.update(i, t, e)), e.set(t, i)), i;
    }
    if (!r.insert) throw new Error(Pt(10));
    const n = r.insert(t, e);
    return e.set(t, n), n;
  }
  function KC(e) {
    return typeof e == "boolean";
  }
  var ZC = () =>
      function (t) {
        const {
          thunk: r = !0,
          immutableCheck: n = !0,
          serializableCheck: i = !0,
          actionCreatorCheck: o = !0,
        } = t ?? {};
        let s = new fv();
        return r && (KC(r) ? s.push(VC) : s.push($C(r.extraArgument))), s;
      },
    qC = "RTK_autoBatch",
    pv = (e) => (t) => {
      setTimeout(t, e);
    },
    eb =
      typeof window < "u" && window.requestAnimationFrame
        ? window.requestAnimationFrame
        : pv(10),
    tb =
      (e = { type: "raf" }) =>
      (t) =>
      (...r) => {
        const n = t(...r);
        let i = !0,
          o = !1,
          s = !1;
        const a = new Set(),
          l =
            e.type === "tick"
              ? queueMicrotask
              : e.type === "raf"
              ? eb
              : e.type === "callback"
              ? e.queueNotification
              : pv(e.timeout),
          d = () => {
            (s = !1), o && ((o = !1), a.forEach((p) => p()));
          };
        return Object.assign({}, n, {
          subscribe(p) {
            const h = () => i && p(),
              y = n.subscribe(h);
            return (
              a.add(p),
              () => {
                y(), a.delete(p);
              }
            );
          },
          dispatch(p) {
            var h;
            try {
              return (
                (i = !((h = p == null ? void 0 : p.meta) != null && h[qC])),
                (o = !i),
                o && (s || ((s = !0), l(d))),
                n.dispatch(p)
              );
            } finally {
              i = !0;
            }
          },
        });
      },
    rb = (e) =>
      function (r) {
        const { autoBatch: n = !0 } = r ?? {};
        let i = new fv(e);
        return n && i.push(tb(typeof n == "object" ? n : void 0)), i;
      },
    nb = !0;
  function ib(e) {
    const t = ZC(),
      {
        reducer: r = void 0,
        middleware: n,
        devTools: i = !0,
        preloadedState: o = void 0,
        enhancers: s = void 0,
      } = e || {};
    let a;
    if (typeof r == "function") a = r;
    else if (qf(r)) a = CC(r);
    else throw new Error(Pt(1));
    let l;
    typeof n == "function" ? (l = n(t)) : (l = t());
    let d = Sl;
    i && (d = XC({ trace: !nb, ...(typeof i == "object" && i) }));
    const p = bC(...l),
      h = rb(p);
    let y = typeof s == "function" ? s(h) : h();
    const x = d(...y);
    return tv(a, o, x);
  }
  function hv(e) {
    const t = {},
      r = [];
    let n;
    const i = {
      addCase(o, s) {
        const a = typeof o == "string" ? o : o.type;
        if (!a) throw new Error(Pt(28));
        if (a in t) throw new Error(Pt(29));
        return (t[a] = s), i;
      },
      addMatcher(o, s) {
        return r.push({ matcher: o, reducer: s }), i;
      },
      addDefaultCase(o) {
        return (n = o), i;
      },
    };
    return e(i), [t, r, n];
  }
  function ob(e) {
    return typeof e == "function";
  }
  function sb(e, t) {
    let [r, n, i] = hv(t),
      o;
    if (ob(e)) o = () => Sg(e());
    else {
      const a = Sg(e);
      o = () => a;
    }
    function s(a = o(), l) {
      let d = [
        r[l.type],
        ...n.filter(({ matcher: p }) => p(l)).map(({ reducer: p }) => p),
      ];
      return (
        d.filter((p) => !!p).length === 0 && (d = [i]),
        d.reduce((p, h) => {
          if (h)
            if (Wn(p)) {
              const x = h(p, l);
              return x === void 0 ? p : x;
            } else {
              if (cn(p)) return uv(p, (y) => h(y, l));
              {
                const y = h(p, l);
                if (y === void 0) {
                  if (p === null) return p;
                  throw new Error(Pt(9));
                }
                return y;
              }
            }
          return p;
        }, a)
      );
    }
    return (s.getInitialState = o), s;
  }
  var ab = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    lb = (e = 21) => {
      let t = "",
        r = e;
      for (; r--; ) t += ab[(Math.random() * 64) | 0];
      return t;
    },
    ub = Symbol.for("rtk-slice-createasyncthunk");
  function cb(e, t) {
    return `${e}/${t}`;
  }
  function db({ creators: e } = {}) {
    var r;
    const t = (r = e == null ? void 0 : e.asyncThunk) == null ? void 0 : r[ub];
    return function (i) {
      const { name: o, reducerPath: s = o } = i;
      if (!o) throw new Error(Pt(11));
      typeof process < "u";
      const a =
          (typeof i.reducers == "function" ? i.reducers(pb()) : i.reducers) ||
          {},
        l = Object.keys(a),
        d = {
          sliceCaseReducersByName: {},
          sliceCaseReducersByType: {},
          actionCreators: {},
          sliceMatchers: [],
        },
        p = {
          addCase(v, k) {
            const I = typeof v == "string" ? v : v.type;
            if (!I) throw new Error(Pt(12));
            if (I in d.sliceCaseReducersByType) throw new Error(Pt(13));
            return (d.sliceCaseReducersByType[I] = k), p;
          },
          addMatcher(v, k) {
            return d.sliceMatchers.push({ matcher: v, reducer: k }), p;
          },
          exposeAction(v, k) {
            return (d.actionCreators[v] = k), p;
          },
          exposeCaseReducer(v, k) {
            return (d.sliceCaseReducersByName[v] = k), p;
          },
        };
      l.forEach((v) => {
        const k = a[v],
          I = {
            reducerName: v,
            type: cb(o, v),
            createNotation: typeof i.reducers == "function",
          };
        gb(k) ? yb(I, k, p, t) : hb(I, k, p);
      });
      function h() {
        const [v = {}, k = [], I = void 0] =
            typeof i.extraReducers == "function"
              ? hv(i.extraReducers)
              : [i.extraReducers],
          R = { ...v, ...d.sliceCaseReducersByType };
        return sb(i.initialState, (M) => {
          for (let F in R) M.addCase(F, R[F]);
          for (let F of d.sliceMatchers) M.addMatcher(F.matcher, F.reducer);
          for (let F of k) M.addMatcher(F.matcher, F.reducer);
          I && M.addDefaultCase(I);
        });
      }
      const y = (v) => v,
        x = new Map();
      let S;
      function E(v, k) {
        return S || (S = h()), S(v, k);
      }
      function D() {
        return S || (S = h()), S.getInitialState();
      }
      function A(v, k = !1) {
        function I(M) {
          let F = M[v];
          return typeof F > "u" && k && (F = D()), F;
        }
        function R(M = y) {
          const F = kg(x, k, { insert: () => new WeakMap() });
          return kg(F, M, {
            insert: () => {
              const re = {};
              for (const [G, oe] of Object.entries(i.selectors ?? {}))
                re[G] = fb(oe, M, D, k);
              return re;
            },
          });
        }
        return {
          reducerPath: v,
          getSelectors: R,
          get selectors() {
            return R(I);
          },
          selectSlice: I,
        };
      }
      const m = {
        name: o,
        reducer: E,
        actions: d.actionCreators,
        caseReducers: d.sliceCaseReducersByName,
        getInitialState: D,
        ...A(s),
        injectInto(v, { reducerPath: k, ...I } = {}) {
          const R = k ?? s;
          return (
            v.inject({ reducerPath: R, reducer: E }, I), { ...m, ...A(R, !0) }
          );
        },
      };
      return m;
    };
  }
  function fb(e, t, r, n) {
    function i(o, ...s) {
      let a = t(o);
      return typeof a > "u" && n && (a = r()), e(a, ...s);
    }
    return (i.unwrapped = e), i;
  }
  var gv = db();
  function pb() {
    function e(t, r) {
      return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
    }
    return (
      (e.withTypes = () => e),
      {
        reducer(t) {
          return Object.assign(
            {
              [t.name](...r) {
                return t(...r);
              },
            }[t.name],
            { _reducerDefinitionType: "reducer" }
          );
        },
        preparedReducer(t, r) {
          return {
            _reducerDefinitionType: "reducerWithPrepare",
            prepare: t,
            reducer: r,
          };
        },
        asyncThunk: e,
      }
    );
  }
  function hb({ type: e, reducerName: t, createNotation: r }, n, i) {
    let o, s;
    if ("reducer" in n) {
      if (r && !mb(n)) throw new Error(Pt(17));
      (o = n.reducer), (s = n.prepare);
    } else o = n;
    i.addCase(e, o)
      .exposeCaseReducer(t, o)
      .exposeAction(t, s ? xo(e, s) : xo(e));
  }
  function gb(e) {
    return e._reducerDefinitionType === "asyncThunk";
  }
  function mb(e) {
    return e._reducerDefinitionType === "reducerWithPrepare";
  }
  function yb({ type: e, reducerName: t }, r, n, i) {
    if (!i) throw new Error(Pt(18));
    const {
        payloadCreator: o,
        fulfilled: s,
        pending: a,
        rejected: l,
        settled: d,
        options: p,
      } = r,
      h = i(e, o, p);
    n.exposeAction(t, h),
      s && n.addCase(h.fulfilled, s),
      a && n.addCase(h.pending, a),
      l && n.addCase(h.rejected, l),
      d && n.addMatcher(h.settled, d),
      n.exposeCaseReducer(t, {
        fulfilled: s || ma,
        pending: a || ma,
        rejected: l || ma,
        settled: d || ma,
      });
  }
  function ma() {}
  var vb = (e, t) => {
      if (typeof e != "function") throw new Error(Pt(32));
    },
    np = "listenerMiddleware",
    Ab = (e) => {
      let {
        type: t,
        actionCreator: r,
        matcher: n,
        predicate: i,
        effect: o,
      } = e;
      if (t) i = xo(t).match;
      else if (r) (t = r.type), (i = r.match);
      else if (n) i = n;
      else if (!i) throw new Error(Pt(21));
      return vb(o), { predicate: i, type: t, effect: o };
    },
    wb = Object.assign(
      (e) => {
        const { type: t, predicate: r, effect: n } = Ab(e);
        return {
          id: lb(),
          effect: n,
          type: t,
          predicate: r,
          pending: new Set(),
          unsubscribe: () => {
            throw new Error(Pt(22));
          },
        };
      },
      { withTypes: () => wb }
    ),
    xb = Object.assign(xo(`${np}/add`), { withTypes: () => xb });
  xo(`${np}/removeAll`);
  var Sb = Object.assign(xo(`${np}/remove`), { withTypes: () => Sb });
  function Pt(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
  }
  const kb = "/assets/this_computer-CDZ3NOk5.png",
    Eb = "/assets/notepad-6NBMei0V.png",
    Cb = "/assets/movies-DhVxUF3v.png",
    bb = "/assets/telegram-2aMdEvBl.png",
    Ib = "/assets/twitter-BAmreveX.png",
    Bb = "/assets/dexscreener-CjbZQRGa.png",
    Rb = "/assets/folder_closed-B4MdOFCi.png",
    Db = "/assets/mail-BpmaPj6Q.png",
    Ob = "/assets/minecraft-CvPMB4vv.png",
    Tb = "/assets/tools-DZYtwhhq.png",
    Mb = "/assets/dextools-logo-dark-CTJ-2ApY.png",
    Pb = "/assets/stats-icon-CELGXPjL.png",
    zb = "/assets/calculator-BMr-GEbs.png",
    Nb = "/assets/briefcase-uu9bFsF_.png",
    Qb = "/assets/text_file_2-B-QDy3_V.png",
    _b = "/assets/search-iEu9kDyY.png",
    jb = "/assets/parsec-CKhLkMIa.png",
    Fb = "/assets/phone-BbqA1H5o.png",
    Lb = "/assets/paintIcon-e7EFo47s.png",
    Ub = "/assets/flop_drive-DI-eZH9_.png",
    We = {
      homeIcon: kb,
      notePadIcon: Eb,
      gifIcon: Cb,
      telegramIcon: bb,
      twitterIcon: Ib,
      dexScreenerIcon: Bb,
      closedFolder: Rb,
      mail: Db,
      minecraft: Ob,
      toolsIcon: Tb,
      dexToolsIcon: Mb,
      excelIcon: Pb,
      calculatorIcon: zb,
      contributionIcon: Nb,
      textFileIcon: Qb,
      searchIcon: _b,
      partnerIcon: jb,
      phoneIcon: Fb,
      paintChart: Lb,
      flopDrive: Ub,
    },
    ac = [
      { name: "Home", icon: We.homeIcon, toolbar: !1, x: 2.45 },
      { name: "Manifesto.txt", icon: We.notePadIcon, toolbar: !0, x: 3 },
      {
        name: "Buy Guide",
        icon: We.searchIcon,
        toolbar: !0,
        isNew: !0,
        extra: ["$COZY Buy Links"],
      },
      { name: "Roadmap", icon: We.textFileIcon, isNew: !0, toolbar: !0 },
      { name: "cozy.mp4", icon: We.gifIcon, toolbar: !1, x: 1.05 },
      {
        name: "Contribute",
        icon: We.contributionIcon,
        url: "https://solscan.io/account/539NvHoc3w2TyLXeBwEGt5aiK4sbQoCEA8WsTcnTV9Wm",
      },
      { name: "stats.csv", icon: We.excelIcon, toolbar: !0, x: 1.05 },
      {
        name: "Calculator",
        icon: We.calculatorIcon,
        toolbar: !0,
        x: 4,
        wide: 300,
        isNew: !0,
      },
      {
        name: "Market Cap Calc",
        icon: We.calculatorIcon,
        toolbar: !0,
        child: !0,
        x: 1.9,
        wide: 300,
      },
      {
        name: "Lambo Calc",
        icon: We.calculatorIcon,
        toolbar: !0,
        x: 1.25,
        child: !0,
        wide: 300,
      },
      {
        name: "Telegram",
        icon: We.telegramIcon,
        url: "https://t.me/cozypepecoin",
      },
      {
        name: "Twitter",
        icon: We.twitterIcon,
        url: "https://twitter.com/cozypepecoin",
      },
      {
        name: "DexS",
        icon: We.dexScreenerIcon,
        url: "https://dexscreener.com/solana/dbpx5cpblxahv63dumedjyjva6i4atb9ebjesqtdagl5",
      },
      {
        name: "DexT",
        icon: We.dexToolsIcon,
        url: "https://www.dextools.io/app/en/solana/pair-explorer/DbpX5CpBLxaHv63dUMEDJyJva6i4Atb9EbjESqTDAgL5",
      },
      { name: "untitled folder", icon: We.closedFolder, disabled: !0 },
      { name: "PFP", icon: We.minecraft, disabled: !0 },
      { name: "Cozy Toys", icon: We.toolsIcon, isNew: !0, toolbar: !0 },
      { name: "Partners", icon: We.partnerIcon, isNew: !0, toolbar: !0 },
      { name: "Utility", icon: We.phoneIcon, disabled: !0 },
      {
        name: "$COZY Buy Links",
        icon: We.searchIcon,
        disabled: !1,
        wide: 300,
        x: 1.38,
      },
      {
        name: "Paint",
        icon: We.paintChart,
        isNew: !0,
        wide: 750,
        toolbar: !0,
        resize: !0,
      },
      {
        name: "Meme Generator",
        icon: We.flopDrive,
        toolbar: !0,
        isNew: !0,
        wide: 400,
        disabled: !0,
        x: 1.4,
      },
    ],
    Yb = { opened: ["cozy.mp4", "Home"], windows: ac, dockets: [ac[0], ac[4]] },
    mv = gv({
      name: "windows",
      initialState: Yb,
      reducers: {
        open: (e, t) => {
          e.opened = [...e.opened.filter((n) => n !== t.payload), t.payload];
          const r = e.windows.filter((n) => n.name === t.payload);
          e.dockets.some((n) => n.name === t.payload) ||
            (e.dockets = [...e.dockets, ...r]);
        },
        close: (e, t) => {
          (e.opened = e.opened.filter((r) => r !== t.payload)),
            (e.dockets = e.dockets.filter((r) => r.name !== t.payload));
        },
      },
    }),
    { open: So, close: Bs } = mv.actions,
    Wb = mv.reducer,
    Jb = z.div`

    cursor: pointer;

    .docket{
        width: 170px;
        display: flex;
        height: 90%;
        align-items: center;
        gap: 5px;
        padding: 0.25rem;
    }

@media (max-width: 767px) {
    .docket {
        width: 100px;
    }
}
    
`;
  function Hb({ name: e, icon: t }) {
    const r = Bo(),
      i =
        ki((o) => o.windows.opened[o.windows.opened.length - 1]) === e
          ? "well"
          : "raised";
    return f.jsx(Jb, {
      children: f.jsxs(Ve, {
        onClick: () => r(So(e)),
        variant: i,
        className: "docket",
        children: [
          f.jsx("img", { src: t, style: { width: "1rem", height: "1rem" } }),
          f.jsx("p", { children: e }),
        ],
      }),
    });
  }
  z(Jf)`
    top: auto;
    bottom: 0;
    z-index: 100;
`;
  const Vb = z.div`
    display: flex;
    gap: 0.25rem;
    align-items: center;

    .docketContainer{
        display: flex;
        gap: 0.25rem;
        align-items: center;
    }

    .toolBar-Main{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        justify-content: space-between;
        width: 100%;
        padding-right: 0.25rem;
    }

    .clockContainer{
        height: 90%;
        padding: 0.4rem 0.75rem;
        display: flex;
        align-items: center;
    }
`,
    $b = z(ce)`
    font-weight: 800;
`,
    Gb = z.div`
    z-index:100;
`;
  function Xb({}) {
    const e = ki((t) => t.windows.dockets);
    return f.jsx(Gb, {
      children: f.jsx(Jf, {
        position: "relative",
        children: f.jsxs(Vb, {
          children: [
            f.jsx($b, { children: "$COZY" }),
            f.jsx(Ls, { orientation: "vertical", size: "43px" }),
            f.jsxs("div", {
              className: "toolBar-Main",
              children: [
                f.jsx("div", {
                  className: "docketContainer",
                  children: e.map((t) =>
                    f.jsx(Hb, { name: t.name, icon: t.icon }, t.name)
                  ),
                }),
                f.jsx(Ve, {
                  className: "clockContainer",
                  children: f.jsx("p", { children: "16:20 🌳" }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  }
  var cu = { exports: {} },
    yv = {},
    vv = { exports: {} },
    Kb = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Zb = Kb,
    qb = Zb;
  function Av() {}
  function wv() {}
  wv.resetWarningCache = Av;
  var eI = function () {
    function e(n, i, o, s, a, l) {
      if (l !== qb) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw ((d.name = "Invariant Violation"), d);
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var r = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: wv,
      resetWarningCache: Av,
    };
    return (r.PropTypes = r), r;
  };
  vv.exports = eI();
  var xv = vv.exports;
  function Sv(e) {
    var t,
      r,
      n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object")
      if (Array.isArray(e))
        for (t = 0; t < e.length; t++)
          e[t] && (r = Sv(e[t])) && (n && (n += " "), (n += r));
      else for (t in e) e[t] && (n && (n += " "), (n += t));
    return n;
  }
  function Eg() {
    for (var e, t, r = 0, n = ""; r < arguments.length; )
      (e = arguments[r++]) && (t = Sv(e)) && (n && (n += " "), (n += t));
    return n;
  }
  const tI = Object.freeze(
      Object.defineProperty(
        { __proto__: null, clsx: Eg, default: Eg },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    rI = TA(tI);
  var $e = {},
    Fr = {};
  Object.defineProperty(Fr, "__esModule", { value: !0 });
  Fr.dontSetMe = aI;
  Fr.findInArray = nI;
  Fr.int = sI;
  Fr.isFunction = iI;
  Fr.isNum = oI;
  function nI(e, t) {
    for (var r = 0, n = e.length; r < n; r++)
      if (t.apply(t, [e[r], r, e])) return e[r];
  }
  function iI(e) {
    return (
      typeof e == "function" ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function oI(e) {
    return typeof e == "number" && !isNaN(e);
  }
  function sI(e) {
    return parseInt(e, 10);
  }
  function aI(e, t, r) {
    if (e[t])
      return new Error(
        "Invalid prop "
          .concat(t, " passed to ")
          .concat(r, " - do not set this, set it on the child.")
      );
  }
  var Ei = {};
  Object.defineProperty(Ei, "__esModule", { value: !0 });
  Ei.browserPrefixToKey = Ev;
  Ei.browserPrefixToStyle = lI;
  Ei.default = void 0;
  Ei.getPrefix = kv;
  var lc = ["Moz", "Webkit", "O", "ms"];
  function kv() {
    var e,
      t,
      r =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : "transform";
    if (typeof window > "u") return "";
    var n =
      (e = window.document) === null ||
      e === void 0 ||
      (t = e.documentElement) === null ||
      t === void 0
        ? void 0
        : t.style;
    if (!n || r in n) return "";
    for (var i = 0; i < lc.length; i++) if (Ev(r, lc[i]) in n) return lc[i];
    return "";
  }
  function Ev(e, t) {
    return t ? "".concat(t).concat(uI(e)) : e;
  }
  function lI(e, t) {
    return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
  }
  function uI(e) {
    for (var t = "", r = !0, n = 0; n < e.length; n++)
      r
        ? ((t += e[n].toUpperCase()), (r = !1))
        : e[n] === "-"
        ? (r = !0)
        : (t += e[n]);
    return t;
  }
  var cI = kv();
  Ei.default = cI;
  function Dd(e) {
    "@babel/helpers - typeof";
    return (
      (Dd =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      Dd(e)
    );
  }
  Object.defineProperty($e, "__esModule", { value: !0 });
  $e.addClassName = Rv;
  $e.addEvent = pI;
  $e.addUserSelectStyles = EI;
  $e.createCSSTransform = wI;
  $e.createSVGTransform = xI;
  $e.getTouch = SI;
  $e.getTouchIdentifier = kI;
  $e.getTranslation = ip;
  $e.innerHeight = yI;
  $e.innerWidth = vI;
  $e.matchesSelector = Bv;
  $e.matchesSelectorAndParentsTo = fI;
  $e.offsetXYFromParent = AI;
  $e.outerHeight = gI;
  $e.outerWidth = mI;
  $e.removeClassName = Dv;
  $e.removeEvent = hI;
  $e.removeUserSelectStyles = CI;
  var Yt = Fr,
    Cg = dI(Ei);
  function Cv(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      r = new WeakMap();
    return (Cv = function (i) {
      return i ? r : t;
    })(e);
  }
  function dI(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (Dd(e) !== "object" && typeof e != "function"))
      return { default: e };
    var r = Cv(t);
    if (r && r.has(e)) return r.get(e);
    var n = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
      }
    return (n.default = e), r && r.set(e, n), n;
  }
  function bg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter(function (i) {
          return Object.getOwnPropertyDescriptor(e, i).enumerable;
        })),
        r.push.apply(r, n);
    }
    return r;
  }
  function bv(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2
        ? bg(Object(r), !0).forEach(function (n) {
            Iv(e, n, r[n]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : bg(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
    }
    return e;
  }
  function Iv(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var ya = "";
  function Bv(e, t) {
    return (
      ya ||
        (ya = (0, Yt.findInArray)(
          [
            "matches",
            "webkitMatchesSelector",
            "mozMatchesSelector",
            "msMatchesSelector",
            "oMatchesSelector",
          ],
          function (r) {
            return (0, Yt.isFunction)(e[r]);
          }
        )),
      (0, Yt.isFunction)(e[ya]) ? e[ya](t) : !1
    );
  }
  function fI(e, t, r) {
    var n = e;
    do {
      if (Bv(n, t)) return !0;
      if (n === r) return !1;
      n = n.parentNode;
    } while (n);
    return !1;
  }
  function pI(e, t, r, n) {
    if (e) {
      var i = bv({ capture: !0 }, n);
      e.addEventListener
        ? e.addEventListener(t, r, i)
        : e.attachEvent
        ? e.attachEvent("on" + t, r)
        : (e["on" + t] = r);
    }
  }
  function hI(e, t, r, n) {
    if (e) {
      var i = bv({ capture: !0 }, n);
      e.removeEventListener
        ? e.removeEventListener(t, r, i)
        : e.detachEvent
        ? e.detachEvent("on" + t, r)
        : (e["on" + t] = null);
    }
  }
  function gI(e) {
    var t = e.clientHeight,
      r = e.ownerDocument.defaultView.getComputedStyle(e);
    return (
      (t += (0, Yt.int)(r.borderTopWidth)),
      (t += (0, Yt.int)(r.borderBottomWidth)),
      t
    );
  }
  function mI(e) {
    var t = e.clientWidth,
      r = e.ownerDocument.defaultView.getComputedStyle(e);
    return (
      (t += (0, Yt.int)(r.borderLeftWidth)),
      (t += (0, Yt.int)(r.borderRightWidth)),
      t
    );
  }
  function yI(e) {
    var t = e.clientHeight,
      r = e.ownerDocument.defaultView.getComputedStyle(e);
    return (
      (t -= (0, Yt.int)(r.paddingTop)), (t -= (0, Yt.int)(r.paddingBottom)), t
    );
  }
  function vI(e) {
    var t = e.clientWidth,
      r = e.ownerDocument.defaultView.getComputedStyle(e);
    return (
      (t -= (0, Yt.int)(r.paddingLeft)), (t -= (0, Yt.int)(r.paddingRight)), t
    );
  }
  function AI(e, t, r) {
    var n = t === t.ownerDocument.body,
      i = n ? { left: 0, top: 0 } : t.getBoundingClientRect(),
      o = (e.clientX + t.scrollLeft - i.left) / r,
      s = (e.clientY + t.scrollTop - i.top) / r;
    return { x: o, y: s };
  }
  function wI(e, t) {
    var r = ip(e, t, "px");
    return Iv({}, (0, Cg.browserPrefixToKey)("transform", Cg.default), r);
  }
  function xI(e, t) {
    var r = ip(e, t, "");
    return r;
  }
  function ip(e, t, r) {
    var n = e.x,
      i = e.y,
      o = "translate(".concat(n).concat(r, ",").concat(i).concat(r, ")");
    if (t) {
      var s = "".concat(typeof t.x == "string" ? t.x : t.x + r),
        a = "".concat(typeof t.y == "string" ? t.y : t.y + r);
      o = "translate(".concat(s, ", ").concat(a, ")") + o;
    }
    return o;
  }
  function SI(e, t) {
    return (
      (e.targetTouches &&
        (0, Yt.findInArray)(e.targetTouches, function (r) {
          return t === r.identifier;
        })) ||
      (e.changedTouches &&
        (0, Yt.findInArray)(e.changedTouches, function (r) {
          return t === r.identifier;
        }))
    );
  }
  function kI(e) {
    if (e.targetTouches && e.targetTouches[0])
      return e.targetTouches[0].identifier;
    if (e.changedTouches && e.changedTouches[0])
      return e.changedTouches[0].identifier;
  }
  function EI(e) {
    if (e) {
      var t = e.getElementById("react-draggable-style-el");
      t ||
        ((t = e.createElement("style")),
        (t.type = "text/css"),
        (t.id = "react-draggable-style-el"),
        (t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`),
        (t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`),
        e.getElementsByTagName("head")[0].appendChild(t)),
        e.body && Rv(e.body, "react-draggable-transparent-selection");
    }
  }
  function CI(e) {
    if (e)
      try {
        if (
          (e.body && Dv(e.body, "react-draggable-transparent-selection"),
          e.selection)
        )
          e.selection.empty();
        else {
          var t = (e.defaultView || window).getSelection();
          t && t.type !== "Caret" && t.removeAllRanges();
        }
      } catch {}
  }
  function Rv(e, t) {
    e.classList
      ? e.classList.add(t)
      : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) ||
        (e.className += " ".concat(t));
  }
  function Dv(e, t) {
    e.classList
      ? e.classList.remove(t)
      : (e.className = e.className.replace(
          new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"),
          ""
        ));
  }
  var Lr = {};
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  Lr.canDragX = BI;
  Lr.canDragY = RI;
  Lr.createCoreData = OI;
  Lr.createDraggableData = TI;
  Lr.getBoundPosition = bI;
  Lr.getControlPosition = DI;
  Lr.snapToGrid = II;
  var Qt = Fr,
    Gi = $e;
  function bI(e, t, r) {
    if (!e.props.bounds) return [t, r];
    var n = e.props.bounds;
    n = typeof n == "string" ? n : MI(n);
    var i = op(e);
    if (typeof n == "string") {
      var o = i.ownerDocument,
        s = o.defaultView,
        a;
      if (
        (n === "parent" ? (a = i.parentNode) : (a = o.querySelector(n)),
        !(a instanceof s.HTMLElement))
      )
        throw new Error(
          'Bounds selector "' + n + '" could not find an element.'
        );
      var l = a,
        d = s.getComputedStyle(i),
        p = s.getComputedStyle(l);
      n = {
        left:
          -i.offsetLeft +
          (0, Qt.int)(p.paddingLeft) +
          (0, Qt.int)(d.marginLeft),
        top:
          -i.offsetTop + (0, Qt.int)(p.paddingTop) + (0, Qt.int)(d.marginTop),
        right:
          (0, Gi.innerWidth)(l) -
          (0, Gi.outerWidth)(i) -
          i.offsetLeft +
          (0, Qt.int)(p.paddingRight) -
          (0, Qt.int)(d.marginRight),
        bottom:
          (0, Gi.innerHeight)(l) -
          (0, Gi.outerHeight)(i) -
          i.offsetTop +
          (0, Qt.int)(p.paddingBottom) -
          (0, Qt.int)(d.marginBottom),
      };
    }
    return (
      (0, Qt.isNum)(n.right) && (t = Math.min(t, n.right)),
      (0, Qt.isNum)(n.bottom) && (r = Math.min(r, n.bottom)),
      (0, Qt.isNum)(n.left) && (t = Math.max(t, n.left)),
      (0, Qt.isNum)(n.top) && (r = Math.max(r, n.top)),
      [t, r]
    );
  }
  function II(e, t, r) {
    var n = Math.round(t / e[0]) * e[0],
      i = Math.round(r / e[1]) * e[1];
    return [n, i];
  }
  function BI(e) {
    return e.props.axis === "both" || e.props.axis === "x";
  }
  function RI(e) {
    return e.props.axis === "both" || e.props.axis === "y";
  }
  function DI(e, t, r) {
    var n = typeof t == "number" ? (0, Gi.getTouch)(e, t) : null;
    if (typeof t == "number" && !n) return null;
    var i = op(r),
      o = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
    return (0, Gi.offsetXYFromParent)(n || e, o, r.props.scale);
  }
  function OI(e, t, r) {
    var n = e.state,
      i = !(0, Qt.isNum)(n.lastX),
      o = op(e);
    return i
      ? { node: o, deltaX: 0, deltaY: 0, lastX: t, lastY: r, x: t, y: r }
      : {
          node: o,
          deltaX: t - n.lastX,
          deltaY: r - n.lastY,
          lastX: n.lastX,
          lastY: n.lastY,
          x: t,
          y: r,
        };
  }
  function TI(e, t) {
    var r = e.props.scale;
    return {
      node: t.node,
      x: e.state.x + t.deltaX / r,
      y: e.state.y + t.deltaY / r,
      deltaX: t.deltaX / r,
      deltaY: t.deltaY / r,
      lastX: e.state.x,
      lastY: e.state.y,
    };
  }
  function MI(e) {
    return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
  }
  function op(e) {
    var t = e.findDOMNode();
    if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
    return t;
  }
  var du = {},
    fu = {};
  Object.defineProperty(fu, "__esModule", { value: !0 });
  fu.default = PI;
  function PI() {}
  function bl(e) {
    "@babel/helpers - typeof";
    return (
      (bl =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      bl(e)
    );
  }
  Object.defineProperty(du, "__esModule", { value: !0 });
  du.default = void 0;
  var uc = NI(B),
    Nt = sp(xv),
    zI = sp(Kl),
    At = $e,
    vn = Lr,
    cc = Fr,
    Fo = sp(fu);
  function sp(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function Ov(e) {
    if (typeof WeakMap != "function") return null;
    var t = new WeakMap(),
      r = new WeakMap();
    return (Ov = function (i) {
      return i ? r : t;
    })(e);
  }
  function NI(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || (bl(e) !== "object" && typeof e != "function"))
      return { default: e };
    var r = Ov(t);
    if (r && r.has(e)) return r.get(e);
    var n = {},
      i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : (n[o] = e[o]);
      }
    return (n.default = e), r && r.set(e, n), n;
  }
  function Ig(e, t) {
    return FI(e) || jI(e, t) || _I(e, t) || QI();
  }
  function QI() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function _I(e, t) {
    if (e) {
      if (typeof e == "string") return Bg(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      if (
        (r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(e);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return Bg(e, t);
    }
  }
  function Bg(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function jI(e, t) {
    var r =
      e == null
        ? null
        : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
    if (r != null) {
      var n = [],
        i = !0,
        o = !1,
        s,
        a;
      try {
        for (
          r = r.call(e);
          !(i = (s = r.next()).done) &&
          (n.push(s.value), !(t && n.length === t));
          i = !0
        );
      } catch (l) {
        (o = !0), (a = l);
      } finally {
        try {
          !i && r.return != null && r.return();
        } finally {
          if (o) throw a;
        }
      }
      return n;
    }
  }
  function FI(e) {
    if (Array.isArray(e)) return e;
  }
  function LI(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function Rg(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function UI(e, t, r) {
    return (
      t && Rg(e.prototype, t),
      r && Rg(e, r),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      e
    );
  }
  function YI(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(e, "prototype", { writable: !1 }),
      t && Od(e, t);
  }
  function Od(e, t) {
    return (
      (Od =
        Object.setPrototypeOf ||
        function (n, i) {
          return (n.__proto__ = i), n;
        }),
      Od(e, t)
    );
  }
  function WI(e) {
    var t = HI();
    return function () {
      var n = Il(e),
        i;
      if (t) {
        var o = Il(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return JI(this, i);
    };
  }
  function JI(e, t) {
    if (t && (bl(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return wt(e);
  }
  function wt(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function HI() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function") return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function Il(e) {
    return (
      (Il = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      Il(e)
    );
  }
  function Kt(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var dr = {
      touch: { start: "touchstart", move: "touchmove", stop: "touchend" },
      mouse: { start: "mousedown", move: "mousemove", stop: "mouseup" },
    },
    An = dr.mouse,
    pu = (function (e) {
      YI(r, e);
      var t = WI(r);
      function r() {
        var n;
        LI(this, r);
        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
          o[s] = arguments[s];
        return (
          (n = t.call.apply(t, [this].concat(o))),
          Kt(wt(n), "state", {
            dragging: !1,
            lastX: NaN,
            lastY: NaN,
            touchIdentifier: null,
          }),
          Kt(wt(n), "mounted", !1),
          Kt(wt(n), "handleDragStart", function (a) {
            if (
              (n.props.onMouseDown(a),
              !n.props.allowAnyClick &&
                typeof a.button == "number" &&
                a.button !== 0)
            )
              return !1;
            var l = n.findDOMNode();
            if (!l || !l.ownerDocument || !l.ownerDocument.body)
              throw new Error("<DraggableCore> not mounted on DragStart!");
            var d = l.ownerDocument;
            if (
              !(
                n.props.disabled ||
                !(a.target instanceof d.defaultView.Node) ||
                (n.props.handle &&
                  !(0, At.matchesSelectorAndParentsTo)(
                    a.target,
                    n.props.handle,
                    l
                  )) ||
                (n.props.cancel &&
                  (0, At.matchesSelectorAndParentsTo)(
                    a.target,
                    n.props.cancel,
                    l
                  ))
              )
            ) {
              a.type === "touchstart" && a.preventDefault();
              var p = (0, At.getTouchIdentifier)(a);
              n.setState({ touchIdentifier: p });
              var h = (0, vn.getControlPosition)(a, p, wt(n));
              if (h != null) {
                var y = h.x,
                  x = h.y,
                  S = (0, vn.createCoreData)(wt(n), y, x);
                (0, Fo.default)("DraggableCore: handleDragStart: %j", S),
                  (0, Fo.default)("calling", n.props.onStart);
                var E = n.props.onStart(a, S);
                E === !1 ||
                  n.mounted === !1 ||
                  (n.props.enableUserSelectHack &&
                    (0, At.addUserSelectStyles)(d),
                  n.setState({ dragging: !0, lastX: y, lastY: x }),
                  (0, At.addEvent)(d, An.move, n.handleDrag),
                  (0, At.addEvent)(d, An.stop, n.handleDragStop));
              }
            }
          }),
          Kt(wt(n), "handleDrag", function (a) {
            var l = (0, vn.getControlPosition)(
              a,
              n.state.touchIdentifier,
              wt(n)
            );
            if (l != null) {
              var d = l.x,
                p = l.y;
              if (Array.isArray(n.props.grid)) {
                var h = d - n.state.lastX,
                  y = p - n.state.lastY,
                  x = (0, vn.snapToGrid)(n.props.grid, h, y),
                  S = Ig(x, 2);
                if (((h = S[0]), (y = S[1]), !h && !y)) return;
                (d = n.state.lastX + h), (p = n.state.lastY + y);
              }
              var E = (0, vn.createCoreData)(wt(n), d, p);
              (0, Fo.default)("DraggableCore: handleDrag: %j", E);
              var D = n.props.onDrag(a, E);
              if (D === !1 || n.mounted === !1) {
                try {
                  n.handleDragStop(new MouseEvent("mouseup"));
                } catch {
                  var A = document.createEvent("MouseEvents");
                  A.initMouseEvent(
                    "mouseup",
                    !0,
                    !0,
                    window,
                    0,
                    0,
                    0,
                    0,
                    0,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    n.handleDragStop(A);
                }
                return;
              }
              n.setState({ lastX: d, lastY: p });
            }
          }),
          Kt(wt(n), "handleDragStop", function (a) {
            if (n.state.dragging) {
              var l = (0, vn.getControlPosition)(
                a,
                n.state.touchIdentifier,
                wt(n)
              );
              if (l != null) {
                var d = l.x,
                  p = l.y;
                if (Array.isArray(n.props.grid)) {
                  var h = d - n.state.lastX || 0,
                    y = p - n.state.lastY || 0,
                    x = (0, vn.snapToGrid)(n.props.grid, h, y),
                    S = Ig(x, 2);
                  (h = S[0]),
                    (y = S[1]),
                    (d = n.state.lastX + h),
                    (p = n.state.lastY + y);
                }
                var E = (0, vn.createCoreData)(wt(n), d, p),
                  D = n.props.onStop(a, E);
                if (D === !1 || n.mounted === !1) return !1;
                var A = n.findDOMNode();
                A &&
                  n.props.enableUserSelectHack &&
                  (0, At.removeUserSelectStyles)(A.ownerDocument),
                  (0, Fo.default)("DraggableCore: handleDragStop: %j", E),
                  n.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                  A &&
                    ((0, Fo.default)("DraggableCore: Removing handlers"),
                    (0, At.removeEvent)(A.ownerDocument, An.move, n.handleDrag),
                    (0, At.removeEvent)(
                      A.ownerDocument,
                      An.stop,
                      n.handleDragStop
                    ));
              }
            }
          }),
          Kt(wt(n), "onMouseDown", function (a) {
            return (An = dr.mouse), n.handleDragStart(a);
          }),
          Kt(wt(n), "onMouseUp", function (a) {
            return (An = dr.mouse), n.handleDragStop(a);
          }),
          Kt(wt(n), "onTouchStart", function (a) {
            return (An = dr.touch), n.handleDragStart(a);
          }),
          Kt(wt(n), "onTouchEnd", function (a) {
            return (An = dr.touch), n.handleDragStop(a);
          }),
          n
        );
      }
      return (
        UI(r, [
          {
            key: "componentDidMount",
            value: function () {
              this.mounted = !0;
              var i = this.findDOMNode();
              i &&
                (0, At.addEvent)(i, dr.touch.start, this.onTouchStart, {
                  passive: !1,
                });
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.mounted = !1;
              var i = this.findDOMNode();
              if (i) {
                var o = i.ownerDocument;
                (0, At.removeEvent)(o, dr.mouse.move, this.handleDrag),
                  (0, At.removeEvent)(o, dr.touch.move, this.handleDrag),
                  (0, At.removeEvent)(o, dr.mouse.stop, this.handleDragStop),
                  (0, At.removeEvent)(o, dr.touch.stop, this.handleDragStop),
                  (0, At.removeEvent)(i, dr.touch.start, this.onTouchStart, {
                    passive: !1,
                  }),
                  this.props.enableUserSelectHack &&
                    (0, At.removeUserSelectStyles)(o);
              }
            },
          },
          {
            key: "findDOMNode",
            value: function () {
              var i, o, s;
              return (i = this.props) !== null && i !== void 0 && i.nodeRef
                ? (o = this.props) === null ||
                  o === void 0 ||
                  (s = o.nodeRef) === null ||
                  s === void 0
                  ? void 0
                  : s.current
                : zI.default.findDOMNode(this);
            },
          },
          {
            key: "render",
            value: function () {
              return uc.cloneElement(uc.Children.only(this.props.children), {
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onTouchEnd: this.onTouchEnd,
              });
            },
          },
        ]),
        r
      );
    })(uc.Component);
  du.default = pu;
  Kt(pu, "displayName", "DraggableCore");
  Kt(pu, "propTypes", {
    allowAnyClick: Nt.default.bool,
    disabled: Nt.default.bool,
    enableUserSelectHack: Nt.default.bool,
    offsetParent: function (t, r) {
      if (t[r] && t[r].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    grid: Nt.default.arrayOf(Nt.default.number),
    handle: Nt.default.string,
    cancel: Nt.default.string,
    nodeRef: Nt.default.object,
    onStart: Nt.default.func,
    onDrag: Nt.default.func,
    onStop: Nt.default.func,
    onMouseDown: Nt.default.func,
    scale: Nt.default.number,
    className: cc.dontSetMe,
    style: cc.dontSetMe,
    transform: cc.dontSetMe,
  });
  Kt(pu, "defaultProps", {
    allowAnyClick: !1,
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function () {},
    onDrag: function () {},
    onStop: function () {},
    onMouseDown: function () {},
    scale: 1,
  });
  (function (e) {
    function t(b) {
      "@babel/helpers - typeof";
      return (
        (t =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (P) {
                return typeof P;
              }
            : function (P) {
                return P &&
                  typeof Symbol == "function" &&
                  P.constructor === Symbol &&
                  P !== Symbol.prototype
                  ? "symbol"
                  : typeof P;
              }),
        t(b)
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      Object.defineProperty(e, "DraggableCore", {
        enumerable: !0,
        get: function () {
          return d.default;
        },
      }),
      (e.default = void 0);
    var r = S(B),
      n = y(xv),
      i = y(Kl),
      o = y(rI),
      s = $e,
      a = Lr,
      l = Fr,
      d = y(du),
      p = y(fu),
      h = [
        "axis",
        "bounds",
        "children",
        "defaultPosition",
        "defaultClassName",
        "defaultClassNameDragging",
        "defaultClassNameDragged",
        "position",
        "positionOffset",
        "scale",
      ];
    function y(b) {
      return b && b.__esModule ? b : { default: b };
    }
    function x(b) {
      if (typeof WeakMap != "function") return null;
      var P = new WeakMap(),
        N = new WeakMap();
      return (x = function (j) {
        return j ? N : P;
      })(b);
    }
    function S(b, P) {
      if (!P && b && b.__esModule) return b;
      if (b === null || (t(b) !== "object" && typeof b != "function"))
        return { default: b };
      var N = x(P);
      if (N && N.has(b)) return N.get(b);
      var L = {},
        j = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var J in b)
        if (J !== "default" && Object.prototype.hasOwnProperty.call(b, J)) {
          var te = j ? Object.getOwnPropertyDescriptor(b, J) : null;
          te && (te.get || te.set)
            ? Object.defineProperty(L, J, te)
            : (L[J] = b[J]);
        }
      return (L.default = b), N && N.set(b, L), L;
    }
    function E() {
      return (
        (E =
          Object.assign ||
          function (b) {
            for (var P = 1; P < arguments.length; P++) {
              var N = arguments[P];
              for (var L in N)
                Object.prototype.hasOwnProperty.call(N, L) && (b[L] = N[L]);
            }
            return b;
          }),
        E.apply(this, arguments)
      );
    }
    function D(b, P) {
      if (b == null) return {};
      var N = A(b, P),
        L,
        j;
      if (Object.getOwnPropertySymbols) {
        var J = Object.getOwnPropertySymbols(b);
        for (j = 0; j < J.length; j++)
          (L = J[j]),
            !(P.indexOf(L) >= 0) &&
              Object.prototype.propertyIsEnumerable.call(b, L) &&
              (N[L] = b[L]);
      }
      return N;
    }
    function A(b, P) {
      if (b == null) return {};
      var N = {},
        L = Object.keys(b),
        j,
        J;
      for (J = 0; J < L.length; J++)
        (j = L[J]), !(P.indexOf(j) >= 0) && (N[j] = b[j]);
      return N;
    }
    function m(b, P) {
      var N = Object.keys(b);
      if (Object.getOwnPropertySymbols) {
        var L = Object.getOwnPropertySymbols(b);
        P &&
          (L = L.filter(function (j) {
            return Object.getOwnPropertyDescriptor(b, j).enumerable;
          })),
          N.push.apply(N, L);
      }
      return N;
    }
    function v(b) {
      for (var P = 1; P < arguments.length; P++) {
        var N = arguments[P] != null ? arguments[P] : {};
        P % 2
          ? m(Object(N), !0).forEach(function (L) {
              X(b, L, N[L]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(b, Object.getOwnPropertyDescriptors(N))
          : m(Object(N)).forEach(function (L) {
              Object.defineProperty(
                b,
                L,
                Object.getOwnPropertyDescriptor(N, L)
              );
            });
      }
      return b;
    }
    function k(b, P) {
      return re(b) || F(b, P) || R(b, P) || I();
    }
    function I() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function R(b, P) {
      if (b) {
        if (typeof b == "string") return M(b, P);
        var N = Object.prototype.toString.call(b).slice(8, -1);
        if (
          (N === "Object" && b.constructor && (N = b.constructor.name),
          N === "Map" || N === "Set")
        )
          return Array.from(b);
        if (
          N === "Arguments" ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)
        )
          return M(b, P);
      }
    }
    function M(b, P) {
      (P == null || P > b.length) && (P = b.length);
      for (var N = 0, L = new Array(P); N < P; N++) L[N] = b[N];
      return L;
    }
    function F(b, P) {
      var N =
        b == null
          ? null
          : (typeof Symbol < "u" && b[Symbol.iterator]) || b["@@iterator"];
      if (N != null) {
        var L = [],
          j = !0,
          J = !1,
          te,
          _;
        try {
          for (
            N = N.call(b);
            !(j = (te = N.next()).done) &&
            (L.push(te.value), !(P && L.length === P));
            j = !0
          );
        } catch ($) {
          (J = !0), (_ = $);
        } finally {
          try {
            !j && N.return != null && N.return();
          } finally {
            if (J) throw _;
          }
        }
        return L;
      }
    }
    function re(b) {
      if (Array.isArray(b)) return b;
    }
    function G(b, P) {
      if (!(b instanceof P))
        throw new TypeError("Cannot call a class as a function");
    }
    function oe(b, P) {
      for (var N = 0; N < P.length; N++) {
        var L = P[N];
        (L.enumerable = L.enumerable || !1),
          (L.configurable = !0),
          "value" in L && (L.writable = !0),
          Object.defineProperty(b, L.key, L);
      }
    }
    function ne(b, P, N) {
      return (
        P && oe(b.prototype, P),
        N && oe(b, N),
        Object.defineProperty(b, "prototype", { writable: !1 }),
        b
      );
    }
    function de(b, P) {
      if (typeof P != "function" && P !== null)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (b.prototype = Object.create(P && P.prototype, {
        constructor: { value: b, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(b, "prototype", { writable: !1 }),
        P && ve(b, P);
    }
    function ve(b, P) {
      return (
        (ve =
          Object.setPrototypeOf ||
          function (L, j) {
            return (L.__proto__ = j), L;
          }),
        ve(b, P)
      );
    }
    function Se(b) {
      var P = U();
      return function () {
        var L = H(b),
          j;
        if (P) {
          var J = H(this).constructor;
          j = Reflect.construct(L, arguments, J);
        } else j = L.apply(this, arguments);
        return Re(this, j);
      };
    }
    function Re(b, P) {
      if (P && (t(P) === "object" || typeof P == "function")) return P;
      if (P !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ae(b);
    }
    function Ae(b) {
      if (b === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return b;
    }
    function U() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch {
        return !1;
      }
    }
    function H(b) {
      return (
        (H = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (N) {
              return N.__proto__ || Object.getPrototypeOf(N);
            }),
        H(b)
      );
    }
    function X(b, P, N) {
      return (
        P in b
          ? Object.defineProperty(b, P, {
              value: N,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (b[P] = N),
        b
      );
    }
    var ee = (function (b) {
      de(N, b);
      var P = Se(N);
      function N(L) {
        var j;
        return (
          G(this, N),
          (j = P.call(this, L)),
          X(Ae(j), "onDragStart", function (J, te) {
            (0, p.default)("Draggable: onDragStart: %j", te);
            var _ = j.props.onStart(J, (0, a.createDraggableData)(Ae(j), te));
            if (_ === !1) return !1;
            j.setState({ dragging: !0, dragged: !0 });
          }),
          X(Ae(j), "onDrag", function (J, te) {
            if (!j.state.dragging) return !1;
            (0, p.default)("Draggable: onDrag: %j", te);
            var _ = (0, a.createDraggableData)(Ae(j), te),
              $ = { x: _.x, y: _.y };
            if (j.props.bounds) {
              var se = $.x,
                ae = $.y;
              ($.x += j.state.slackX), ($.y += j.state.slackY);
              var fe = (0, a.getBoundPosition)(Ae(j), $.x, $.y),
                ke = k(fe, 2),
                De = ke[0],
                et = ke[1];
              ($.x = De),
                ($.y = et),
                ($.slackX = j.state.slackX + (se - $.x)),
                ($.slackY = j.state.slackY + (ae - $.y)),
                (_.x = $.x),
                (_.y = $.y),
                (_.deltaX = $.x - j.state.x),
                (_.deltaY = $.y - j.state.y);
            }
            var ot = j.props.onDrag(J, _);
            if (ot === !1) return !1;
            j.setState($);
          }),
          X(Ae(j), "onDragStop", function (J, te) {
            if (!j.state.dragging) return !1;
            var _ = j.props.onStop(J, (0, a.createDraggableData)(Ae(j), te));
            if (_ === !1) return !1;
            (0, p.default)("Draggable: onDragStop: %j", te);
            var $ = { dragging: !1, slackX: 0, slackY: 0 },
              se = !!j.props.position;
            if (se) {
              var ae = j.props.position,
                fe = ae.x,
                ke = ae.y;
              ($.x = fe), ($.y = ke);
            }
            j.setState($);
          }),
          (j.state = {
            dragging: !1,
            dragged: !1,
            x: L.position ? L.position.x : L.defaultPosition.x,
            y: L.position ? L.position.y : L.defaultPosition.y,
            prevPropsPosition: v({}, L.position),
            slackX: 0,
            slackY: 0,
            isElementSVG: !1,
          }),
          L.position &&
            !(L.onDrag || L.onStop) &&
            console.warn(
              "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
            ),
          j
        );
      }
      return (
        ne(
          N,
          [
            {
              key: "componentDidMount",
              value: function () {
                typeof window.SVGElement < "u" &&
                  this.findDOMNode() instanceof window.SVGElement &&
                  this.setState({ isElementSVG: !0 });
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.setState({ dragging: !1 });
              },
            },
            {
              key: "findDOMNode",
              value: function () {
                var j, J, te;
                return (j =
                  (J = this.props) === null ||
                  J === void 0 ||
                  (te = J.nodeRef) === null ||
                  te === void 0
                    ? void 0
                    : te.current) !== null && j !== void 0
                  ? j
                  : i.default.findDOMNode(this);
              },
            },
            {
              key: "render",
              value: function () {
                var j,
                  J = this.props;
                J.axis, J.bounds;
                var te = J.children,
                  _ = J.defaultPosition,
                  $ = J.defaultClassName,
                  se = J.defaultClassNameDragging,
                  ae = J.defaultClassNameDragged,
                  fe = J.position,
                  ke = J.positionOffset;
                J.scale;
                var De = D(J, h),
                  et = {},
                  ot = null,
                  lr = !!fe,
                  zt = !lr || this.state.dragging,
                  Wr = fe || _,
                  ur = {
                    x: (0, a.canDragX)(this) && zt ? this.state.x : Wr.x,
                    y: (0, a.canDragY)(this) && zt ? this.state.y : Wr.y,
                  };
                this.state.isElementSVG
                  ? (ot = (0, s.createSVGTransform)(ur, ke))
                  : (et = (0, s.createCSSTransform)(ur, ke));
                var st = (0, o.default)(
                  te.props.className || "",
                  $,
                  ((j = {}),
                  X(j, se, this.state.dragging),
                  X(j, ae, this.state.dragged),
                  j)
                );
                return r.createElement(
                  d.default,
                  E({}, De, {
                    onStart: this.onDragStart,
                    onDrag: this.onDrag,
                    onStop: this.onDragStop,
                  }),
                  r.cloneElement(r.Children.only(te), {
                    className: st,
                    style: v(v({}, te.props.style), et),
                    transform: ot,
                  })
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (j, J) {
                var te = j.position,
                  _ = J.prevPropsPosition;
                return te && (!_ || te.x !== _.x || te.y !== _.y)
                  ? ((0, p.default)("Draggable: getDerivedStateFromProps %j", {
                      position: te,
                      prevPropsPosition: _,
                    }),
                    { x: te.x, y: te.y, prevPropsPosition: v({}, te) })
                  : null;
              },
            },
          ]
        ),
        N
      );
    })(r.Component);
    (e.default = ee),
      X(ee, "displayName", "Draggable"),
      X(
        ee,
        "propTypes",
        v(
          v({}, d.default.propTypes),
          {},
          {
            axis: n.default.oneOf(["both", "x", "y", "none"]),
            bounds: n.default.oneOfType([
              n.default.shape({
                left: n.default.number,
                right: n.default.number,
                top: n.default.number,
                bottom: n.default.number,
              }),
              n.default.string,
              n.default.oneOf([!1]),
            ]),
            defaultClassName: n.default.string,
            defaultClassNameDragging: n.default.string,
            defaultClassNameDragged: n.default.string,
            defaultPosition: n.default.shape({
              x: n.default.number,
              y: n.default.number,
            }),
            positionOffset: n.default.shape({
              x: n.default.oneOfType([n.default.number, n.default.string]),
              y: n.default.oneOfType([n.default.number, n.default.string]),
            }),
            position: n.default.shape({
              x: n.default.number,
              y: n.default.number,
            }),
            className: l.dontSetMe,
            style: l.dontSetMe,
            transform: l.dontSetMe,
          }
        )
      ),
      X(
        ee,
        "defaultProps",
        v(
          v({}, d.default.defaultProps),
          {},
          {
            axis: "both",
            bounds: !1,
            defaultClassName: "react-draggable",
            defaultClassNameDragging: "react-draggable-dragging",
            defaultClassNameDragged: "react-draggable-dragged",
            defaultPosition: { x: 0, y: 0 },
            scale: 1,
          }
        )
      );
  })(yv);
  var Tv = yv,
    Mv = Tv.default,
    VI = Tv.DraggableCore;
  cu.exports = Mv;
  cu.exports.default = Mv;
  cu.exports.DraggableCore = VI;
  var $I = cu.exports;
  const GI = Ms($I);
  var XI = (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
            }),
          e(t, r)
        );
      };
      return function (t, r) {
        e(t, r);
        function n() {
          this.constructor = t;
        }
        t.prototype =
          r === null
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n());
      };
    })(),
    Bl = function () {
      return (
        (Bl =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Bl.apply(this, arguments)
      );
    },
    KI = {
      top: {
        width: "100%",
        height: "10px",
        top: "-5px",
        left: "0px",
        cursor: "row-resize",
      },
      right: {
        width: "10px",
        height: "100%",
        top: "0px",
        right: "-5px",
        cursor: "col-resize",
      },
      bottom: {
        width: "100%",
        height: "10px",
        bottom: "-5px",
        left: "0px",
        cursor: "row-resize",
      },
      left: {
        width: "10px",
        height: "100%",
        top: "0px",
        left: "-5px",
        cursor: "col-resize",
      },
      topRight: {
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "-10px",
        top: "-10px",
        cursor: "ne-resize",
      },
      bottomRight: {
        width: "20px",
        height: "20px",
        position: "absolute",
        right: "-10px",
        bottom: "-10px",
        cursor: "se-resize",
      },
      bottomLeft: {
        width: "20px",
        height: "20px",
        position: "absolute",
        left: "-10px",
        bottom: "-10px",
        cursor: "sw-resize",
      },
      topLeft: {
        width: "20px",
        height: "20px",
        position: "absolute",
        left: "-10px",
        top: "-10px",
        cursor: "nw-resize",
      },
    },
    ZI = (function (e) {
      XI(t, e);
      function t() {
        var r = (e !== null && e.apply(this, arguments)) || this;
        return (
          (r.onMouseDown = function (n) {
            r.props.onResizeStart(n, r.props.direction);
          }),
          (r.onTouchStart = function (n) {
            r.props.onResizeStart(n, r.props.direction);
          }),
          r
        );
      }
      return (
        (t.prototype.render = function () {
          return B.createElement(
            "div",
            {
              className: this.props.className || "",
              style: Bl(
                Bl(
                  { position: "absolute", userSelect: "none" },
                  KI[this.props.direction]
                ),
                this.props.replaceStyles || {}
              ),
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart,
            },
            this.props.children
          );
        }),
        t
      );
    })(B.PureComponent),
    ap = { exports: {} };
  function qI(e, t) {
    var r = t && t.cache ? t.cache : oB,
      n = t && t.serializer ? t.serializer : iB,
      i = t && t.strategy ? t.strategy : tB;
    return i(e, { cache: r, serializer: n });
  }
  function eB(e) {
    return e == null || typeof e == "number" || typeof e == "boolean";
  }
  function Pv(e, t, r, n) {
    var i = eB(n) ? n : r(n),
      o = t.get(i);
    return typeof o > "u" && ((o = e.call(this, n)), t.set(i, o)), o;
  }
  function zv(e, t, r) {
    var n = Array.prototype.slice.call(arguments, 3),
      i = r(n),
      o = t.get(i);
    return typeof o > "u" && ((o = e.apply(this, n)), t.set(i, o)), o;
  }
  function lp(e, t, r, n, i) {
    return r.bind(t, e, n, i);
  }
  function tB(e, t) {
    var r = e.length === 1 ? Pv : zv;
    return lp(e, this, r, t.cache.create(), t.serializer);
  }
  function rB(e, t) {
    var r = zv;
    return lp(e, this, r, t.cache.create(), t.serializer);
  }
  function nB(e, t) {
    var r = Pv;
    return lp(e, this, r, t.cache.create(), t.serializer);
  }
  function iB() {
    return JSON.stringify(arguments);
  }
  function hu() {
    this.cache = Object.create(null);
  }
  hu.prototype.has = function (e) {
    return e in this.cache;
  };
  hu.prototype.get = function (e) {
    return this.cache[e];
  };
  hu.prototype.set = function (e, t) {
    this.cache[e] = t;
  };
  var oB = {
    create: function () {
      return new hu();
    },
  };
  ap.exports = qI;
  ap.exports.strategies = { variadic: rB, monadic: nB };
  var sB = ap.exports;
  const Ci = Ms(sB);
  var aB = (function () {
      var e = function (t, r) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (n, i) {
                n.__proto__ = i;
              }) ||
            function (n, i) {
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
            }),
          e(t, r)
        );
      };
      return function (t, r) {
        e(t, r);
        function n() {
          this.constructor = t;
        }
        t.prototype =
          r === null
            ? Object.create(r)
            : ((n.prototype = r.prototype), new n());
      };
    })(),
    Br = function () {
      return (
        (Br =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        Br.apply(this, arguments)
      );
    },
    lB = { width: "auto", height: "auto" },
    va = Ci(function (e, t, r) {
      return Math.max(Math.min(e, r), t);
    }),
    Dg = Ci(function (e, t) {
      return Math.round(e / t) * t;
    }),
    Ti = Ci(function (e, t) {
      return new RegExp(e, "i").test(t);
    }),
    Aa = function (e) {
      return !!(e.touches && e.touches.length);
    },
    uB = function (e) {
      return !!(
        (e.clientX || e.clientX === 0) &&
        (e.clientY || e.clientY === 0)
      );
    },
    Og = Ci(function (e, t, r) {
      r === void 0 && (r = 0);
      var n = t.reduce(function (o, s, a) {
          return Math.abs(s - e) < Math.abs(t[o] - e) ? a : o;
        }, 0),
        i = Math.abs(t[n] - e);
      return r === 0 || i < r ? t[n] : e;
    }),
    ut = Ci(function (e, t) {
      return e.substr(e.length - t.length, t.length) === t;
    }),
    dc = Ci(function (e) {
      return (
        (e = e.toString()),
        e === "auto" ||
        ut(e, "px") ||
        ut(e, "%") ||
        ut(e, "vh") ||
        ut(e, "vw") ||
        ut(e, "vmax") ||
        ut(e, "vmin")
          ? e
          : e + "px"
      );
    }),
    wa = function (e, t, r, n) {
      if (e && typeof e == "string") {
        if (ut(e, "px")) return Number(e.replace("px", ""));
        if (ut(e, "%")) {
          var i = Number(e.replace("%", "")) / 100;
          return t * i;
        }
        if (ut(e, "vw")) {
          var i = Number(e.replace("vw", "")) / 100;
          return r * i;
        }
        if (ut(e, "vh")) {
          var i = Number(e.replace("vh", "")) / 100;
          return n * i;
        }
      }
      return e;
    },
    cB = Ci(function (e, t, r, n, i, o, s) {
      return (
        (n = wa(n, e.width, t, r)),
        (i = wa(i, e.height, t, r)),
        (o = wa(o, e.width, t, r)),
        (s = wa(s, e.height, t, r)),
        {
          maxWidth: typeof n > "u" ? void 0 : Number(n),
          maxHeight: typeof i > "u" ? void 0 : Number(i),
          minWidth: typeof o > "u" ? void 0 : Number(o),
          minHeight: typeof s > "u" ? void 0 : Number(s),
        }
      );
    }),
    dB = [
      "as",
      "style",
      "className",
      "grid",
      "snap",
      "bounds",
      "boundsByDirection",
      "size",
      "defaultSize",
      "minWidth",
      "minHeight",
      "maxWidth",
      "maxHeight",
      "lockAspectRatio",
      "lockAspectRatioExtraWidth",
      "lockAspectRatioExtraHeight",
      "enable",
      "handleStyles",
      "handleClasses",
      "handleWrapperStyle",
      "handleWrapperClass",
      "children",
      "onResizeStart",
      "onResize",
      "onResizeStop",
      "handleComponent",
      "scale",
      "resizeRatio",
      "snapGap",
    ],
    Tg = "__resizable_base__",
    fB = (function (e) {
      aB(t, e);
      function t(r) {
        var n = e.call(this, r) || this;
        return (
          (n.ratio = 1),
          (n.resizable = null),
          (n.parentLeft = 0),
          (n.parentTop = 0),
          (n.resizableLeft = 0),
          (n.resizableRight = 0),
          (n.resizableTop = 0),
          (n.resizableBottom = 0),
          (n.targetLeft = 0),
          (n.targetTop = 0),
          (n.appendBase = function () {
            if (!n.resizable || !n.window) return null;
            var i = n.parentNode;
            if (!i) return null;
            var o = n.window.document.createElement("div");
            return (
              (o.style.width = "100%"),
              (o.style.height = "100%"),
              (o.style.position = "absolute"),
              (o.style.transform = "scale(0, 0)"),
              (o.style.left = "0"),
              (o.style.flex = "0 0 100%"),
              o.classList ? o.classList.add(Tg) : (o.className += Tg),
              i.appendChild(o),
              o
            );
          }),
          (n.removeBase = function (i) {
            var o = n.parentNode;
            o && o.removeChild(i);
          }),
          (n.ref = function (i) {
            i && (n.resizable = i);
          }),
          (n.state = {
            isResizing: !1,
            width:
              typeof (n.propsSize && n.propsSize.width) > "u"
                ? "auto"
                : n.propsSize && n.propsSize.width,
            height:
              typeof (n.propsSize && n.propsSize.height) > "u"
                ? "auto"
                : n.propsSize && n.propsSize.height,
            direction: "right",
            original: { x: 0, y: 0, width: 0, height: 0 },
            backgroundStyle: {
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0,0,0,0)",
              cursor: "auto",
              opacity: 0,
              position: "fixed",
              zIndex: 9999,
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
            },
            flexBasis: void 0,
          }),
          (n.onResizeStart = n.onResizeStart.bind(n)),
          (n.onMouseMove = n.onMouseMove.bind(n)),
          (n.onMouseUp = n.onMouseUp.bind(n)),
          n
        );
      }
      return (
        Object.defineProperty(t.prototype, "parentNode", {
          get: function () {
            return this.resizable ? this.resizable.parentNode : null;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "window", {
          get: function () {
            return !this.resizable || !this.resizable.ownerDocument
              ? null
              : this.resizable.ownerDocument.defaultView;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "propsSize", {
          get: function () {
            return this.props.size || this.props.defaultSize || lB;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            var r = 0,
              n = 0;
            if (this.resizable && this.window) {
              var i = this.resizable.offsetWidth,
                o = this.resizable.offsetHeight,
                s = this.resizable.style.position;
              s !== "relative" && (this.resizable.style.position = "relative"),
                (r =
                  this.resizable.style.width !== "auto"
                    ? this.resizable.offsetWidth
                    : i),
                (n =
                  this.resizable.style.height !== "auto"
                    ? this.resizable.offsetHeight
                    : o),
                (this.resizable.style.position = s);
            }
            return { width: r, height: n };
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "sizeStyle", {
          get: function () {
            var r = this,
              n = this.props.size,
              i = function (a) {
                if (typeof r.state[a] > "u" || r.state[a] === "auto")
                  return "auto";
                if (
                  r.propsSize &&
                  r.propsSize[a] &&
                  ut(r.propsSize[a].toString(), "%")
                ) {
                  if (ut(r.state[a].toString(), "%"))
                    return r.state[a].toString();
                  var l = r.getParentSize(),
                    d = Number(r.state[a].toString().replace("px", "")),
                    p = (d / l[a]) * 100;
                  return p + "%";
                }
                return dc(r.state[a]);
              },
              o =
                n && typeof n.width < "u" && !this.state.isResizing
                  ? dc(n.width)
                  : i("width"),
              s =
                n && typeof n.height < "u" && !this.state.isResizing
                  ? dc(n.height)
                  : i("height");
            return { width: o, height: s };
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getParentSize = function () {
          if (!this.parentNode)
            return this.window
              ? {
                  width: this.window.innerWidth,
                  height: this.window.innerHeight,
                }
              : { width: 0, height: 0 };
          var r = this.appendBase();
          if (!r) return { width: 0, height: 0 };
          var n = !1,
            i = this.parentNode.style.flexWrap;
          i !== "wrap" && ((n = !0), (this.parentNode.style.flexWrap = "wrap")),
            (r.style.position = "relative"),
            (r.style.minWidth = "100%"),
            (r.style.minHeight = "100%");
          var o = { width: r.offsetWidth, height: r.offsetHeight };
          return (
            n && (this.parentNode.style.flexWrap = i), this.removeBase(r), o
          );
        }),
        (t.prototype.bindEvents = function () {
          this.window &&
            (this.window.addEventListener("mouseup", this.onMouseUp),
            this.window.addEventListener("mousemove", this.onMouseMove),
            this.window.addEventListener("mouseleave", this.onMouseUp),
            this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1,
            }),
            this.window.addEventListener("touchend", this.onMouseUp));
        }),
        (t.prototype.unbindEvents = function () {
          this.window &&
            (this.window.removeEventListener("mouseup", this.onMouseUp),
            this.window.removeEventListener("mousemove", this.onMouseMove),
            this.window.removeEventListener("mouseleave", this.onMouseUp),
            this.window.removeEventListener("touchmove", this.onMouseMove, !0),
            this.window.removeEventListener("touchend", this.onMouseUp));
        }),
        (t.prototype.componentDidMount = function () {
          if (!(!this.resizable || !this.window)) {
            var r = this.window.getComputedStyle(this.resizable);
            this.setState({
              width: this.state.width || this.size.width,
              height: this.state.height || this.size.height,
              flexBasis: r.flexBasis !== "auto" ? r.flexBasis : void 0,
            });
          }
        }),
        (t.prototype.componentWillUnmount = function () {
          this.window && this.unbindEvents();
        }),
        (t.prototype.createSizeForCssProperty = function (r, n) {
          var i = this.propsSize && this.propsSize[n];
          return this.state[n] === "auto" &&
            this.state.original[n] === r &&
            (typeof i > "u" || i === "auto")
            ? "auto"
            : r;
        }),
        (t.prototype.calculateNewMaxFromBoundary = function (r, n) {
          var i = this.props.boundsByDirection,
            o = this.state.direction,
            s = i && Ti("left", o),
            a = i && Ti("top", o),
            l,
            d;
          if (this.props.bounds === "parent") {
            var p = this.parentNode;
            p &&
              ((l = s
                ? this.resizableRight - this.parentLeft
                : p.offsetWidth + (this.parentLeft - this.resizableLeft)),
              (d = a
                ? this.resizableBottom - this.parentTop
                : p.offsetHeight + (this.parentTop - this.resizableTop)));
          } else
            this.props.bounds === "window"
              ? this.window &&
                ((l = s
                  ? this.resizableRight
                  : this.window.innerWidth - this.resizableLeft),
                (d = a
                  ? this.resizableBottom
                  : this.window.innerHeight - this.resizableTop))
              : this.props.bounds &&
                ((l = s
                  ? this.resizableRight - this.targetLeft
                  : this.props.bounds.offsetWidth +
                    (this.targetLeft - this.resizableLeft)),
                (d = a
                  ? this.resizableBottom - this.targetTop
                  : this.props.bounds.offsetHeight +
                    (this.targetTop - this.resizableTop)));
          return (
            l && Number.isFinite(l) && (r = r && r < l ? r : l),
            d && Number.isFinite(d) && (n = n && n < d ? n : d),
            { maxWidth: r, maxHeight: n }
          );
        }),
        (t.prototype.calculateNewSizeFromDirection = function (r, n) {
          var i = this.props.scale || 1,
            o = this.props.resizeRatio || 1,
            s = this.state,
            a = s.direction,
            l = s.original,
            d = this.props,
            p = d.lockAspectRatio,
            h = d.lockAspectRatioExtraHeight,
            y = d.lockAspectRatioExtraWidth,
            x = l.width,
            S = l.height,
            E = h || 0,
            D = y || 0;
          return (
            Ti("right", a) &&
              ((x = l.width + ((r - l.x) * o) / i),
              p && (S = (x - D) / this.ratio + E)),
            Ti("left", a) &&
              ((x = l.width - ((r - l.x) * o) / i),
              p && (S = (x - D) / this.ratio + E)),
            Ti("bottom", a) &&
              ((S = l.height + ((n - l.y) * o) / i),
              p && (x = (S - E) * this.ratio + D)),
            Ti("top", a) &&
              ((S = l.height - ((n - l.y) * o) / i),
              p && (x = (S - E) * this.ratio + D)),
            { newWidth: x, newHeight: S }
          );
        }),
        (t.prototype.calculateNewSizeFromAspectRatio = function (r, n, i, o) {
          var s = this.props,
            a = s.lockAspectRatio,
            l = s.lockAspectRatioExtraHeight,
            d = s.lockAspectRatioExtraWidth,
            p = typeof o.width > "u" ? 10 : o.width,
            h = typeof i.width > "u" || i.width < 0 ? r : i.width,
            y = typeof o.height > "u" ? 10 : o.height,
            x = typeof i.height > "u" || i.height < 0 ? n : i.height,
            S = l || 0,
            E = d || 0;
          if (a) {
            var D = (y - S) * this.ratio + E,
              A = (x - S) * this.ratio + E,
              m = (p - E) / this.ratio + S,
              v = (h - E) / this.ratio + S,
              k = Math.max(p, D),
              I = Math.min(h, A),
              R = Math.max(y, m),
              M = Math.min(x, v);
            (r = va(r, k, I)), (n = va(n, R, M));
          } else (r = va(r, p, h)), (n = va(n, y, x));
          return { newWidth: r, newHeight: n };
        }),
        (t.prototype.setBoundingClientRect = function () {
          if (this.props.bounds === "parent") {
            var r = this.parentNode;
            if (r) {
              var n = r.getBoundingClientRect();
              (this.parentLeft = n.left), (this.parentTop = n.top);
            }
          }
          if (this.props.bounds && typeof this.props.bounds != "string") {
            var i = this.props.bounds.getBoundingClientRect();
            (this.targetLeft = i.left), (this.targetTop = i.top);
          }
          if (this.resizable) {
            var o = this.resizable.getBoundingClientRect(),
              s = o.left,
              a = o.top,
              l = o.right,
              d = o.bottom;
            (this.resizableLeft = s),
              (this.resizableRight = l),
              (this.resizableTop = a),
              (this.resizableBottom = d);
          }
        }),
        (t.prototype.onResizeStart = function (r, n) {
          if (!(!this.resizable || !this.window)) {
            var i = 0,
              o = 0;
            if (
              (r.nativeEvent && uB(r.nativeEvent)
                ? ((i = r.nativeEvent.clientX), (o = r.nativeEvent.clientY))
                : r.nativeEvent &&
                  Aa(r.nativeEvent) &&
                  ((i = r.nativeEvent.touches[0].clientX),
                  (o = r.nativeEvent.touches[0].clientY)),
              this.props.onResizeStart && this.resizable)
            ) {
              var s = this.props.onResizeStart(r, n, this.resizable);
              if (s === !1) return;
            }
            this.props.size &&
              (typeof this.props.size.height < "u" &&
                this.props.size.height !== this.state.height &&
                this.setState({ height: this.props.size.height }),
              typeof this.props.size.width < "u" &&
                this.props.size.width !== this.state.width &&
                this.setState({ width: this.props.size.width })),
              (this.ratio =
                typeof this.props.lockAspectRatio == "number"
                  ? this.props.lockAspectRatio
                  : this.size.width / this.size.height);
            var a,
              l = this.window.getComputedStyle(this.resizable);
            if (l.flexBasis !== "auto") {
              var d = this.parentNode;
              if (d) {
                var p = this.window.getComputedStyle(d).flexDirection;
                (this.flexDir = p.startsWith("row") ? "row" : "column"),
                  (a = l.flexBasis);
              }
            }
            this.setBoundingClientRect(), this.bindEvents();
            var h = {
              original: {
                x: i,
                y: o,
                width: this.size.width,
                height: this.size.height,
              },
              isResizing: !0,
              backgroundStyle: Br(Br({}, this.state.backgroundStyle), {
                cursor: this.window.getComputedStyle(r.target).cursor || "auto",
              }),
              direction: n,
              flexBasis: a,
            };
            this.setState(h);
          }
        }),
        (t.prototype.onMouseMove = function (r) {
          if (!(!this.state.isResizing || !this.resizable || !this.window)) {
            if (this.window.TouchEvent && Aa(r))
              try {
                r.preventDefault(), r.stopPropagation();
              } catch {}
            var n = this.props,
              i = n.maxWidth,
              o = n.maxHeight,
              s = n.minWidth,
              a = n.minHeight,
              l = Aa(r) ? r.touches[0].clientX : r.clientX,
              d = Aa(r) ? r.touches[0].clientY : r.clientY,
              p = this.state,
              h = p.direction,
              y = p.original,
              x = p.width,
              S = p.height,
              E = this.getParentSize(),
              D = cB(
                E,
                this.window.innerWidth,
                this.window.innerHeight,
                i,
                o,
                s,
                a
              );
            (i = D.maxWidth),
              (o = D.maxHeight),
              (s = D.minWidth),
              (a = D.minHeight);
            var A = this.calculateNewSizeFromDirection(l, d),
              m = A.newHeight,
              v = A.newWidth,
              k = this.calculateNewMaxFromBoundary(i, o);
            this.props.snap &&
              this.props.snap.x &&
              (v = Og(v, this.props.snap.x, this.props.snapGap)),
              this.props.snap &&
                this.props.snap.y &&
                (m = Og(m, this.props.snap.y, this.props.snapGap));
            var I = this.calculateNewSizeFromAspectRatio(
              v,
              m,
              { width: k.maxWidth, height: k.maxHeight },
              { width: s, height: a }
            );
            if (((v = I.newWidth), (m = I.newHeight), this.props.grid)) {
              var R = Dg(v, this.props.grid[0]),
                M = Dg(m, this.props.grid[1]),
                F = this.props.snapGap || 0;
              (v = F === 0 || Math.abs(R - v) <= F ? R : v),
                (m = F === 0 || Math.abs(M - m) <= F ? M : m);
            }
            var re = { width: v - y.width, height: m - y.height };
            if (x && typeof x == "string") {
              if (ut(x, "%")) {
                var G = (v / E.width) * 100;
                v = G + "%";
              } else if (ut(x, "vw")) {
                var oe = (v / this.window.innerWidth) * 100;
                v = oe + "vw";
              } else if (ut(x, "vh")) {
                var ne = (v / this.window.innerHeight) * 100;
                v = ne + "vh";
              }
            }
            if (S && typeof S == "string") {
              if (ut(S, "%")) {
                var G = (m / E.height) * 100;
                m = G + "%";
              } else if (ut(S, "vw")) {
                var oe = (m / this.window.innerWidth) * 100;
                m = oe + "vw";
              } else if (ut(S, "vh")) {
                var ne = (m / this.window.innerHeight) * 100;
                m = ne + "vh";
              }
            }
            var de = {
              width: this.createSizeForCssProperty(v, "width"),
              height: this.createSizeForCssProperty(m, "height"),
            };
            this.flexDir === "row"
              ? (de.flexBasis = de.width)
              : this.flexDir === "column" && (de.flexBasis = de.height),
              this.setState(de),
              this.props.onResize &&
                this.props.onResize(r, h, this.resizable, re);
          }
        }),
        (t.prototype.onMouseUp = function (r) {
          var n = this.state,
            i = n.isResizing,
            o = n.direction,
            s = n.original;
          if (!(!i || !this.resizable)) {
            var a = {
              width: this.size.width - s.width,
              height: this.size.height - s.height,
            };
            this.props.onResizeStop &&
              this.props.onResizeStop(r, o, this.resizable, a),
              this.props.size && this.setState(this.props.size),
              this.unbindEvents(),
              this.setState({
                isResizing: !1,
                backgroundStyle: Br(Br({}, this.state.backgroundStyle), {
                  cursor: "auto",
                }),
              });
          }
        }),
        (t.prototype.updateSize = function (r) {
          this.setState({ width: r.width, height: r.height });
        }),
        (t.prototype.renderResizer = function () {
          var r = this,
            n = this.props,
            i = n.enable,
            o = n.handleStyles,
            s = n.handleClasses,
            a = n.handleWrapperStyle,
            l = n.handleWrapperClass,
            d = n.handleComponent;
          if (!i) return null;
          var p = Object.keys(i).map(function (h) {
            return i[h] !== !1
              ? B.createElement(
                  ZI,
                  {
                    key: h,
                    direction: h,
                    onResizeStart: r.onResizeStart,
                    replaceStyles: o && o[h],
                    className: s && s[h],
                  },
                  d && d[h] ? d[h] : null
                )
              : null;
          });
          return B.createElement("div", { className: l, style: a }, p);
        }),
        (t.prototype.render = function () {
          var r = this,
            n = Object.keys(this.props).reduce(function (s, a) {
              return dB.indexOf(a) !== -1 || (s[a] = r.props[a]), s;
            }, {}),
            i = Br(
              Br(
                Br(
                  {
                    position: "relative",
                    userSelect: this.state.isResizing ? "none" : "auto",
                  },
                  this.props.style
                ),
                this.sizeStyle
              ),
              {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0,
              }
            );
          this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
          var o = this.props.as || "div";
          return B.createElement(
            o,
            Br({ ref: this.ref, style: i, className: this.props.className }, n),
            this.state.isResizing &&
              B.createElement("div", { style: this.state.backgroundStyle }),
            this.props.children,
            this.renderResizer()
          );
        }),
        (t.defaultProps = {
          as: "div",
          onResizeStart: function () {},
          onResize: function () {},
          onResizeStop: function () {},
          enable: {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0,
            topRight: !0,
            bottomRight: !0,
            bottomLeft: !0,
            topLeft: !0,
          },
          style: {},
          grid: [1, 1],
          lockAspectRatio: !1,
          lockAspectRatioExtraWidth: 0,
          lockAspectRatioExtraHeight: 0,
          scale: 1,
          resizeRatio: 1,
          snapGap: 0,
        }),
        t
      );
    })(B.PureComponent);
  /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Td =
    function (e, t) {
      return (
        (Td =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, n) {
              r.__proto__ = n;
            }) ||
          function (r, n) {
            for (var i in n) n.hasOwnProperty(i) && (r[i] = n[i]);
          }),
        Td(e, t)
      );
    };
  function pB(e, t) {
    Td(e, t);
    function r() {
      this.constructor = e;
    }
    e.prototype =
      t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
  }
  var tt = function () {
    return (
      (tt =
        Object.assign ||
        function (t) {
          for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
          return t;
        }),
      tt.apply(this, arguments)
    );
  };
  function hB(e, t) {
    var r = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
        t.indexOf(n[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
          (r[n[i]] = e[n[i]]);
    return r;
  }
  var gB = GI,
    mB = {
      width: "auto",
      height: "auto",
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0,
    },
    yB = function (e) {
      return {
        bottom: e,
        bottomLeft: e,
        bottomRight: e,
        left: e,
        right: e,
        top: e,
        topLeft: e,
        topRight: e,
      };
    },
    vB = (function (e) {
      pB(t, e);
      function t(r) {
        var n = e.call(this, r) || this;
        return (
          (n.resizingPosition = { x: 0, y: 0 }),
          (n.offsetFromParent = { left: 0, top: 0 }),
          (n.resizableElement = { current: null }),
          (n.originalPosition = { x: 0, y: 0 }),
          (n.refDraggable = function (i) {
            i && (n.draggable = i);
          }),
          (n.refResizable = function (i) {
            i &&
              ((n.resizable = i), (n.resizableElement.current = i.resizable));
          }),
          (n.state = {
            resizing: !1,
            bounds: { top: 0, right: 0, bottom: 0, left: 0 },
            maxWidth: r.maxWidth,
            maxHeight: r.maxHeight,
          }),
          (n.onResizeStart = n.onResizeStart.bind(n)),
          (n.onResize = n.onResize.bind(n)),
          (n.onResizeStop = n.onResizeStop.bind(n)),
          (n.onDragStart = n.onDragStart.bind(n)),
          (n.onDrag = n.onDrag.bind(n)),
          (n.onDragStop = n.onDragStop.bind(n)),
          (n.getMaxSizesFromProps = n.getMaxSizesFromProps.bind(n)),
          n
        );
      }
      return (
        (t.prototype.componentDidMount = function () {
          this.updateOffsetFromParent();
          var r = this.offsetFromParent,
            n = r.left,
            i = r.top,
            o = this.getDraggablePosition(),
            s = o.x,
            a = o.y;
          this.draggable.setState({ x: s - n, y: a - i }), this.forceUpdate();
        }),
        (t.prototype.getDraggablePosition = function () {
          var r = this.draggable.state,
            n = r.x,
            i = r.y;
          return { x: n, y: i };
        }),
        (t.prototype.getParent = function () {
          return this.resizable && this.resizable.parentNode;
        }),
        (t.prototype.getParentSize = function () {
          return this.resizable.getParentSize();
        }),
        (t.prototype.getMaxSizesFromProps = function () {
          var r =
              typeof this.props.maxWidth > "u"
                ? Number.MAX_SAFE_INTEGER
                : this.props.maxWidth,
            n =
              typeof this.props.maxHeight > "u"
                ? Number.MAX_SAFE_INTEGER
                : this.props.maxHeight;
          return { maxWidth: r, maxHeight: n };
        }),
        (t.prototype.getSelfElement = function () {
          return this.resizable && this.resizable.resizable;
        }),
        (t.prototype.getOffsetHeight = function (r) {
          var n = this.props.scale;
          switch (this.props.bounds) {
            case "window":
              return window.innerHeight / n;
            case "body":
              return document.body.offsetHeight / n;
            default:
              return r.offsetHeight;
          }
        }),
        (t.prototype.getOffsetWidth = function (r) {
          var n = this.props.scale;
          switch (this.props.bounds) {
            case "window":
              return window.innerWidth / n;
            case "body":
              return document.body.offsetWidth / n;
            default:
              return r.offsetWidth;
          }
        }),
        (t.prototype.onDragStart = function (r, n) {
          this.props.onDragStart && this.props.onDragStart(r, n);
          var i = this.getDraggablePosition();
          if (((this.originalPosition = i), !!this.props.bounds)) {
            var o = this.getParent(),
              s = this.props.scale,
              a;
            if (this.props.bounds === "parent") a = o;
            else if (this.props.bounds === "body") {
              var l = o.getBoundingClientRect(),
                d = l.left,
                p = l.top,
                h = document.body.getBoundingClientRect(),
                y = -(d - o.offsetLeft * s - h.left) / s,
                x = -(p - o.offsetTop * s - h.top) / s,
                S =
                  (document.body.offsetWidth - this.resizable.size.width * s) /
                    s +
                  y,
                E =
                  (document.body.offsetHeight -
                    this.resizable.size.height * s) /
                    s +
                  x;
              return this.setState({
                bounds: { top: x, right: S, bottom: E, left: y },
              });
            } else if (this.props.bounds === "window") {
              if (!this.resizable) return;
              var D = o.getBoundingClientRect(),
                A = D.left,
                m = D.top,
                v = -(A - o.offsetLeft * s) / s,
                k = -(m - o.offsetTop * s) / s,
                S = (window.innerWidth - this.resizable.size.width * s) / s + v,
                E =
                  (window.innerHeight - this.resizable.size.height * s) / s + k;
              return this.setState({
                bounds: { top: k, right: S, bottom: E, left: v },
              });
            } else
              typeof this.props.bounds == "string"
                ? (a = document.querySelector(this.props.bounds))
                : this.props.bounds instanceof HTMLElement &&
                  (a = this.props.bounds);
            if (!(!(a instanceof HTMLElement) || !(o instanceof HTMLElement))) {
              var I = a.getBoundingClientRect(),
                R = I.left,
                M = I.top,
                F = o.getBoundingClientRect(),
                re = F.left,
                G = F.top,
                oe = (R - re) / s,
                ne = M - G;
              if (this.resizable) {
                this.updateOffsetFromParent();
                var de = this.offsetFromParent;
                this.setState({
                  bounds: {
                    top: ne - de.top,
                    right:
                      oe +
                      (a.offsetWidth - this.resizable.size.width) -
                      de.left / s,
                    bottom:
                      ne +
                      (a.offsetHeight - this.resizable.size.height) -
                      de.top,
                    left: oe - de.left / s,
                  },
                });
              }
            }
          }
        }),
        (t.prototype.onDrag = function (r, n) {
          if (this.props.onDrag) {
            var i = this.offsetFromParent,
              o = i.left,
              s = i.top;
            if (!this.props.dragAxis || this.props.dragAxis === "both")
              return this.props.onDrag(
                r,
                tt(tt({}, n), { x: n.x - o, y: n.y - s })
              );
            if (this.props.dragAxis === "x")
              return this.props.onDrag(
                r,
                tt(tt({}, n), {
                  x: n.x + o,
                  y: this.originalPosition.y + s,
                  deltaY: 0,
                })
              );
            if (this.props.dragAxis === "y")
              return this.props.onDrag(
                r,
                tt(tt({}, n), {
                  x: this.originalPosition.x + o,
                  y: n.y + s,
                  deltaX: 0,
                })
              );
          }
        }),
        (t.prototype.onDragStop = function (r, n) {
          if (this.props.onDragStop) {
            var i = this.offsetFromParent,
              o = i.left,
              s = i.top;
            if (!this.props.dragAxis || this.props.dragAxis === "both")
              return this.props.onDragStop(
                r,
                tt(tt({}, n), { x: n.x + o, y: n.y + s })
              );
            if (this.props.dragAxis === "x")
              return this.props.onDragStop(
                r,
                tt(tt({}, n), {
                  x: n.x + o,
                  y: this.originalPosition.y + s,
                  deltaY: 0,
                })
              );
            if (this.props.dragAxis === "y")
              return this.props.onDragStop(
                r,
                tt(tt({}, n), {
                  x: this.originalPosition.x + o,
                  y: n.y + s,
                  deltaX: 0,
                })
              );
          }
        }),
        (t.prototype.onResizeStart = function (r, n, i) {
          r.stopPropagation(), this.setState({ resizing: !0 });
          var o = this.props.scale,
            s = this.offsetFromParent,
            a = this.getDraggablePosition();
          if (
            ((this.resizingPosition = { x: a.x + s.left, y: a.y + s.top }),
            (this.originalPosition = a),
            this.props.bounds)
          ) {
            var l = this.getParent(),
              d = void 0;
            this.props.bounds === "parent"
              ? (d = l)
              : this.props.bounds === "body"
              ? (d = document.body)
              : this.props.bounds === "window"
              ? (d = window)
              : typeof this.props.bounds == "string"
              ? (d = document.querySelector(this.props.bounds))
              : this.props.bounds instanceof HTMLElement &&
                (d = this.props.bounds);
            var p = this.getSelfElement();
            if (
              p instanceof Element &&
              (d instanceof HTMLElement || d === window) &&
              l instanceof HTMLElement
            ) {
              var h = this.getMaxSizesFromProps(),
                y = h.maxWidth,
                x = h.maxHeight,
                S = this.getParentSize();
              if (y && typeof y == "string")
                if (y.endsWith("%")) {
                  var E = Number(y.replace("%", "")) / 100;
                  y = S.width * E;
                } else y.endsWith("px") && (y = Number(y.replace("px", "")));
              if (x && typeof x == "string")
                if (x.endsWith("%")) {
                  var E = Number(x.replace("%", "")) / 100;
                  x = S.width * E;
                } else x.endsWith("px") && (x = Number(x.replace("px", "")));
              var D = p.getBoundingClientRect(),
                A = D.left,
                m = D.top,
                v =
                  this.props.bounds === "window"
                    ? { left: 0, top: 0 }
                    : d.getBoundingClientRect(),
                k = v.left,
                I = v.top,
                R = this.getOffsetWidth(d),
                M = this.getOffsetHeight(d),
                F = n.toLowerCase().endsWith("left"),
                re = n.toLowerCase().endsWith("right"),
                G = n.startsWith("top"),
                oe = n.startsWith("bottom");
              if ((F || G) && this.resizable) {
                var ne = (A - k) / o + this.resizable.size.width;
                this.setState({ maxWidth: ne > Number(y) ? y : ne });
              }
              if (re || (this.props.lockAspectRatio && !F && !G)) {
                var ne = R + (k - A) / o;
                this.setState({ maxWidth: ne > Number(y) ? y : ne });
              }
              if ((G || F) && this.resizable) {
                var ne = (m - I) / o + this.resizable.size.height;
                this.setState({ maxHeight: ne > Number(x) ? x : ne });
              }
              if (oe || (this.props.lockAspectRatio && !G && !F)) {
                var ne = M + (I - m) / o;
                this.setState({ maxHeight: ne > Number(x) ? x : ne });
              }
            }
          } else
            this.setState({
              maxWidth: this.props.maxWidth,
              maxHeight: this.props.maxHeight,
            });
          this.props.onResizeStart && this.props.onResizeStart(r, n, i);
        }),
        (t.prototype.onResize = function (r, n, i, o) {
          var s = { x: this.originalPosition.x, y: this.originalPosition.y },
            a = -o.width,
            l = -o.height,
            d = ["top", "left", "topLeft", "bottomLeft", "topRight"];
          d.indexOf(n) !== -1 &&
            (n === "bottomLeft"
              ? (s.x += a)
              : (n === "topRight" || (s.x += a), (s.y += l))),
            (s.x !== this.draggable.state.x ||
              s.y !== this.draggable.state.y) &&
              this.draggable.setState(s),
            this.updateOffsetFromParent();
          var p = this.offsetFromParent,
            h = this.getDraggablePosition().x + p.left,
            y = this.getDraggablePosition().y + p.top;
          (this.resizingPosition = { x: h, y }),
            this.props.onResize && this.props.onResize(r, n, i, o, { x: h, y });
        }),
        (t.prototype.onResizeStop = function (r, n, i, o) {
          this.setState({ resizing: !1 });
          var s = this.getMaxSizesFromProps(),
            a = s.maxWidth,
            l = s.maxHeight;
          this.setState({ maxWidth: a, maxHeight: l }),
            this.props.onResizeStop &&
              this.props.onResizeStop(r, n, i, o, this.resizingPosition);
        }),
        (t.prototype.updateSize = function (r) {
          this.resizable &&
            this.resizable.updateSize({ width: r.width, height: r.height });
        }),
        (t.prototype.updatePosition = function (r) {
          this.draggable.setState(r);
        }),
        (t.prototype.updateOffsetFromParent = function () {
          var r = this.props.scale,
            n = this.getParent(),
            i = this.getSelfElement();
          if (!n || i === null) return { top: 0, left: 0 };
          var o = n.getBoundingClientRect(),
            s = o.left,
            a = o.top,
            l = i.getBoundingClientRect(),
            d = this.getDraggablePosition(),
            p = n.scrollLeft,
            h = n.scrollTop;
          this.offsetFromParent = {
            left: l.left - s + p - d.x * r,
            top: l.top - a + h - d.y * r,
          };
        }),
        (t.prototype.render = function () {
          var r = this.props,
            n = r.disableDragging,
            i = r.style,
            o = r.dragHandleClassName,
            s = r.position,
            a = r.onMouseDown,
            l = r.onMouseUp,
            d = r.dragAxis,
            p = r.dragGrid,
            h = r.bounds,
            y = r.enableUserSelectHack,
            x = r.cancel,
            S = r.children;
          r.onResizeStart,
            r.onResize,
            r.onResizeStop,
            r.onDragStart,
            r.onDrag,
            r.onDragStop;
          var E = r.resizeHandleStyles,
            D = r.resizeHandleClasses,
            A = r.resizeHandleComponent,
            m = r.enableResizing,
            v = r.resizeGrid,
            k = r.resizeHandleWrapperClass,
            I = r.resizeHandleWrapperStyle,
            R = r.scale,
            M = r.allowAnyClick,
            F = hB(r, [
              "disableDragging",
              "style",
              "dragHandleClassName",
              "position",
              "onMouseDown",
              "onMouseUp",
              "dragAxis",
              "dragGrid",
              "bounds",
              "enableUserSelectHack",
              "cancel",
              "children",
              "onResizeStart",
              "onResize",
              "onResizeStop",
              "onDragStart",
              "onDrag",
              "onDragStop",
              "resizeHandleStyles",
              "resizeHandleClasses",
              "resizeHandleComponent",
              "enableResizing",
              "resizeGrid",
              "resizeHandleWrapperClass",
              "resizeHandleWrapperStyle",
              "scale",
              "allowAnyClick",
            ]),
            re = this.props.default ? tt({}, this.props.default) : void 0;
          delete F.default;
          var G = n || o ? { cursor: "auto" } : { cursor: "move" },
            oe = tt(tt(tt({}, mB), G), i),
            ne = this.offsetFromParent,
            de = ne.left,
            ve = ne.top,
            Se;
          s && (Se = { x: s.x - de, y: s.y - ve });
          var Re = this.state.resizing ? void 0 : Se,
            Ae = this.state.resizing ? "both" : d;
          return B.createElement(
            gB,
            {
              ref: this.refDraggable,
              handle: o ? ".".concat(o) : void 0,
              defaultPosition: re,
              onMouseDown: a,
              onMouseUp: l,
              onStart: this.onDragStart,
              onDrag: this.onDrag,
              onStop: this.onDragStop,
              axis: Ae,
              disabled: n,
              grid: p,
              bounds: h ? this.state.bounds : void 0,
              position: Re,
              enableUserSelectHack: y,
              cancel: x,
              scale: R,
              allowAnyClick: M,
              nodeRef: this.resizableElement,
            },
            B.createElement(
              fB,
              tt({}, F, {
                ref: this.refResizable,
                defaultSize: re,
                size: this.props.size,
                enable: typeof m == "boolean" ? yB(m) : m,
                onResizeStart: this.onResizeStart,
                onResize: this.onResize,
                onResizeStop: this.onResizeStop,
                style: oe,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                maxWidth: this.state.resizing
                  ? this.state.maxWidth
                  : this.props.maxWidth,
                maxHeight: this.state.resizing
                  ? this.state.maxHeight
                  : this.props.maxHeight,
                grid: v,
                handleWrapperClass: k,
                handleWrapperStyle: I,
                lockAspectRatio: this.props.lockAspectRatio,
                lockAspectRatioExtraWidth: this.props.lockAspectRatioExtraWidth,
                lockAspectRatioExtraHeight:
                  this.props.lockAspectRatioExtraHeight,
                handleStyles: E,
                handleClasses: D,
                handleComponent: A,
                scale: this.props.scale,
              }),
              S
            )
          );
        }),
        (t.defaultProps = {
          maxWidth: Number.MAX_SAFE_INTEGER,
          maxHeight: Number.MAX_SAFE_INTEGER,
          scale: 1,
          onResizeStart: function () {},
          onResize: function () {},
          onResizeStop: function () {},
          onDragStart: function () {},
          onDrag: function () {},
          onDragStop: function () {},
        }),
        t
      );
    })(B.PureComponent);
  const AB = "/assets/COZY-red-B0vT0wUP.png",
    wB = z.div`
    span {
        text-decoration: underline;
    }

    .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .frames {
        display: block;
        line-height: 31px;
        padding: 1rem;
        background-color: #FFF8F8;
    }
`;
  function xB() {
    return f.jsx(wB, {
      children: f.jsx($n, {
        children: f.jsxs(Fs, {
          style: { height: "20rem", background: "white" },
          children: [
            f.jsxs("div", {
              className: "hero",
              children: [
                f.jsx("img", {
                  draggable: "false",
                  src: AB,
                  alt: "cozy pepe",
                  style: { width: 200 },
                }),
                f.jsx("p", {
                  style: {
                    fontWeight: "bold",
                    fontSize: "1.20rem",
                    alignSelf: "center",
                  },
                  children: "a manifesto, the $COZY way",
                }),
              ],
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              children: "Welcome to the most $COZY place on Solana.",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              children:
                "Cozy Pepe on Solana is all in all, a community-driven memecoin looking to bring a cozy environment during these turbulent times. Join the community, meet some other cool cats, create something fun or inspiring and let’s build something awesome together.",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              style: { fontWeight: "bold" },
              children: "Get $COZY",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              children:
                "The beginning of your journey starts with getting $COZY. You can get your hands on the coin over at Raydium, and we will have more liquidity pools and farms in the near future.",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              style: { fontWeight: "bold" },
              children: "Keep $COZY",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              children:
                "As we explore new heights of the market, the only way we will grow as a community is to keep $COZY. Hodl for your dear life. Be motivated by the gains, and resilient of the jeets.",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              style: { fontWeight: "bold" },
              children: "Be Kind, Be Helpful",
            }),
            f.jsx("br", {}),
            f.jsx("p", {
              children:
                "Finally, we hope to endeavour a positive and nourishing environment. You will be kind and be helpful to each other, that’s all that is asked for you. Stay cozy out there anon.",
            }),
          ],
        }),
      }),
    });
  }
  const SB = "/assets/cozy-pepes-13-BlCPPSpY.png",
    kB =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNSURBVHgB7ZdLDoAgDEQH472tJ8eFqQkkIAUSWu3bsCG0nSk/wPk7QTA3Ns6TrIkNi6llm1ZMaINEMXQqcFdOmANVY61XYMck4pG2TDjbNoMqBeZ6z9AzskSJNPZ7oNd7ZrkCnsBrD5Q8HvWe0a9AXnFe+Sj2bkOx91SNZfAk7O32Ev4mVK1Azjf/Bc4FzaMiur41LiwAAAAASUVORK5CYII=",
    EB = z.div`

    

    .frames {
        display: block;
        margin: 16px;
        margin-top: 0px;
        line-height: 31px;
        padding-left: 0.25rem;
        background-color: #FFF8F8;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: 10px;
        padding-bottom: 0px;
    }

    .contract {
        margin-left: 16px;
    }

    .okay {
        display: flex;
        justify-content: center;
        margin-bottom: 7px;
        gap: 0.75rem;
    }

    .okay button {
        width: 30%;
        cursor: pointer;
    }

    .list {
        list-style-type: none;
    }


    .list li {
        position: relative;
        padding-left: 20px;
    }

    .list li:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background-image: url(${kB});
        background-repeat: no-repeat;
        background-size: cover;
    }

    ::selection {
        background: rgba(114, 36, 142, 0.65); /* WebKit/Blink Browsers */
    }
    ::-moz-selection {
        background: rgba(114, 36, 142, 0.65); /* Gecko Browsers */
    }

    .contractText .active{
        text-decoration-color: rgba(114, 36, 142, 0.65);
    }
    
`;
  function CB() {
    const e = Bo(),
      t = "cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA",
      r = B.useRef(null),
      n = () => {
        navigator.clipboard.writeText(t);
        const i = r.current;
        (i.contentEditable = !0),
          (i.readOnly = !0),
          i.focus(),
          document.execCommand("selectAll"),
          document.execCommand("copy"),
          (i.contentEditable = !1),
          (i.readOnly = !1),
          document.getElementById("contractText").classList.add("active");
      };
    return f.jsxs(EB, {
      children: [
        f.jsxs($n, {
          className: "wrapper",
          children: [
            f.jsx("p", {
              className: "textSelect",
              style: { fontWeight: "bold", fontSize: "1.25rem" },
              children:
                "Welcome to the most $COZY place on Solana. This is the home of Cozy Pepe, a cozy environment during these turbulent times.",
            }),
            f.jsx("img", {
              draggable: "false",
              src: SB,
              alt: "Cozy Pepe",
              style: { width: 200, minHeight: 200, maxHeight: 200 },
            }),
            f.jsx("p", { children: "$COZY Details:" }),
          ],
        }),
        f.jsx(Ve, {
          variant: "well",
          className: "frames textSelect",
          children: f.jsxs("ul", {
            className: "list",
            children: [
              f.jsx("li", { children: "1,000,000,000 $COZY supply" }),
              f.jsx("li", { children: "0% Buy/Sell Tax" }),
              f.jsx("li", { children: "100% Token Supply for Liquidity" }),
              f.jsx("li", { children: "100% Liquidity Burned" }),
              f.jsx("li", { children: "Minting/Freeze Authority Revoked" }),
              f.jsx("li", { children: "Ownership Renounced" }),
              f.jsx("li", { children: "100% Cozy" }),
            ],
          }),
        }),
        f.jsx("p", { className: "contract", children: "Contract Address:" }),
        f.jsx(Ve, {
          variant: "well",
          className: "frames textSelect",
          children: f.jsx("p", {
            id: "contractText",
            className: "contractText",
            ref: r,
            children: t,
          }),
        }),
        f.jsxs("div", {
          className: "okay",
          children: [
            f.jsx(ce, { onClick: () => e(Bs("Home")), children: "OK" }),
            f.jsx(ce, { onClick: n, children: "Copy CA" }),
            f.jsx(ce, {
              onClick: () =>
                window.open(
                  "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA&inputAmount=0&fixed=in",
                  "_blank"
                ),
              children: "Buy Now",
            }),
          ],
        }),
      ],
    });
  } //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var Nv;
  function V() {
    return Nv.apply(null, arguments);
  }
  function bB(e) {
    Nv = e;
  }
  function kr(e) {
    return (
      e instanceof Array ||
      Object.prototype.toString.call(e) === "[object Array]"
    );
  }
  function ci(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function we(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function up(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e) if (we(e, t)) return !1;
    return !0;
  }
  function Bt(e) {
    return e === void 0;
  }
  function dn(e) {
    return (
      typeof e == "number" ||
      Object.prototype.toString.call(e) === "[object Number]"
    );
  }
  function Ys(e) {
    return (
      e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    );
  }
  function Qv(e, t) {
    var r = [],
      n,
      i = e.length;
    for (n = 0; n < i; ++n) r.push(t(e[n], n));
    return r;
  }
  function In(e, t) {
    for (var r in t) we(t, r) && (e[r] = t[r]);
    return (
      we(t, "toString") && (e.toString = t.toString),
      we(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function Ur(e, t, r, n) {
    return sA(e, t, r, n, !0).utc();
  }
  function IB() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function le(e) {
    return e._pf == null && (e._pf = IB()), e._pf;
  }
  var Md;
  Array.prototype.some
    ? (Md = Array.prototype.some)
    : (Md = function (e) {
        var t = Object(this),
          r = t.length >>> 0,
          n;
        for (n = 0; n < r; n++)
          if (n in t && e.call(this, t[n], n, t)) return !0;
        return !1;
      });
  function cp(e) {
    var t = null,
      r = !1,
      n = e._d && !isNaN(e._d.getTime());
    if (
      (n &&
        ((t = le(e)),
        (r = Md.call(t.parsedDateParts, function (i) {
          return i != null;
        })),
        (n =
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && r))),
        e._strict &&
          (n =
            n &&
            t.charsLeftOver === 0 &&
            t.unusedTokens.length === 0 &&
            t.bigHour === void 0)),
      Object.isFrozen == null || !Object.isFrozen(e))
    )
      e._isValid = n;
    else return n;
    return e._isValid;
  }
  function gu(e) {
    var t = Ur(NaN);
    return e != null ? In(le(t), e) : (le(t).userInvalidated = !0), t;
  }
  var Mg = (V.momentProperties = []),
    fc = !1;
  function dp(e, t) {
    var r,
      n,
      i,
      o = Mg.length;
    if (
      (Bt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      Bt(t._i) || (e._i = t._i),
      Bt(t._f) || (e._f = t._f),
      Bt(t._l) || (e._l = t._l),
      Bt(t._strict) || (e._strict = t._strict),
      Bt(t._tzm) || (e._tzm = t._tzm),
      Bt(t._isUTC) || (e._isUTC = t._isUTC),
      Bt(t._offset) || (e._offset = t._offset),
      Bt(t._pf) || (e._pf = le(t)),
      Bt(t._locale) || (e._locale = t._locale),
      o > 0)
    )
      for (r = 0; r < o; r++) (n = Mg[r]), (i = t[n]), Bt(i) || (e[n] = i);
    return e;
  }
  function Ws(e) {
    dp(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      fc === !1 && ((fc = !0), V.updateOffset(this), (fc = !1));
  }
  function Er(e) {
    return e instanceof Ws || (e != null && e._isAMomentObject != null);
  }
  function _v(e) {
    V.suppressDeprecationWarnings === !1 &&
      typeof console < "u" &&
      console.warn &&
      console.warn("Deprecation warning: " + e);
  }
  function sr(e, t) {
    var r = !0;
    return In(function () {
      if ((V.deprecationHandler != null && V.deprecationHandler(null, e), r)) {
        var n = [],
          i,
          o,
          s,
          a = arguments.length;
        for (o = 0; o < a; o++) {
          if (((i = ""), typeof arguments[o] == "object")) {
            i +=
              `
[` +
              o +
              "] ";
            for (s in arguments[0])
              we(arguments[0], s) && (i += s + ": " + arguments[0][s] + ", ");
            i = i.slice(0, -2);
          } else i = arguments[o];
          n.push(i);
        }
        _v(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(n).join("") +
            `
` +
            new Error().stack
        ),
          (r = !1);
      }
      return t.apply(this, arguments);
    }, t);
  }
  var Pg = {};
  function jv(e, t) {
    V.deprecationHandler != null && V.deprecationHandler(e, t),
      Pg[e] || (_v(t), (Pg[e] = !0));
  }
  V.suppressDeprecationWarnings = !1;
  V.deprecationHandler = null;
  function Yr(e) {
    return (
      (typeof Function < "u" && e instanceof Function) ||
      Object.prototype.toString.call(e) === "[object Function]"
    );
  }
  function BB(e) {
    var t, r;
    for (r in e)
      we(e, r) && ((t = e[r]), Yr(t) ? (this[r] = t) : (this["_" + r] = t));
    (this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function Pd(e, t) {
    var r = In({}, e),
      n;
    for (n in t)
      we(t, n) &&
        (ci(e[n]) && ci(t[n])
          ? ((r[n] = {}), In(r[n], e[n]), In(r[n], t[n]))
          : t[n] != null
          ? (r[n] = t[n])
          : delete r[n]);
    for (n in e) we(e, n) && !we(t, n) && ci(e[n]) && (r[n] = In({}, r[n]));
    return r;
  }
  function fp(e) {
    e != null && this.set(e);
  }
  var zd;
  Object.keys
    ? (zd = Object.keys)
    : (zd = function (e) {
        var t,
          r = [];
        for (t in e) we(e, t) && r.push(t);
        return r;
      });
  var RB = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function DB(e, t, r) {
    var n = this._calendar[e] || this._calendar.sameElse;
    return Yr(n) ? n.call(t, r) : n;
  }
  function _r(e, t, r) {
    var n = "" + Math.abs(e),
      i = t - n.length,
      o = e >= 0;
    return (
      (o ? (r ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, i)).toString().substr(1) +
      n
    );
  }
  var pp =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    xa = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    pc = {},
    io = {};
  function ie(e, t, r, n) {
    var i = n;
    typeof n == "string" &&
      (i = function () {
        return this[n]();
      }),
      e && (io[e] = i),
      t &&
        (io[t[0]] = function () {
          return _r(i.apply(this, arguments), t[1], t[2]);
        }),
      r &&
        (io[r] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function OB(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, "")
      : e.replace(/\\/g, "");
  }
  function TB(e) {
    var t = e.match(pp),
      r,
      n;
    for (r = 0, n = t.length; r < n; r++)
      io[t[r]] ? (t[r] = io[t[r]]) : (t[r] = OB(t[r]));
    return function (i) {
      var o = "",
        s;
      for (s = 0; s < n; s++) o += Yr(t[s]) ? t[s].call(i, e) : t[s];
      return o;
    };
  }
  function Ua(e, t) {
    return e.isValid()
      ? ((t = Fv(t, e.localeData())), (pc[t] = pc[t] || TB(t)), pc[t](e))
      : e.localeData().invalidDate();
  }
  function Fv(e, t) {
    var r = 5;
    function n(i) {
      return t.longDateFormat(i) || i;
    }
    for (xa.lastIndex = 0; r >= 0 && xa.test(e); )
      (e = e.replace(xa, n)), (xa.lastIndex = 0), (r -= 1);
    return e;
  }
  var MB = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function PB(e) {
    var t = this._longDateFormat[e],
      r = this._longDateFormat[e.toUpperCase()];
    return t || !r
      ? t
      : ((this._longDateFormat[e] = r
          .match(pp)
          .map(function (n) {
            return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd"
              ? n.slice(1)
              : n;
          })
          .join("")),
        this._longDateFormat[e]);
  }
  var zB = "Invalid date";
  function NB() {
    return this._invalidDate;
  }
  var QB = "%d",
    _B = /\d{1,2}/;
  function jB(e) {
    return this._ordinal.replace("%d", e);
  }
  var FB = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  };
  function LB(e, t, r, n) {
    var i = this._relativeTime[r];
    return Yr(i) ? i(e, t, r, n) : i.replace(/%d/i, e);
  }
  function UB(e, t) {
    var r = this._relativeTime[e > 0 ? "future" : "past"];
    return Yr(r) ? r(t) : r.replace(/%s/i, t);
  }
  var zg = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year",
  };
  function ar(e) {
    return typeof e == "string" ? zg[e] || zg[e.toLowerCase()] : void 0;
  }
  function hp(e) {
    var t = {},
      r,
      n;
    for (n in e) we(e, n) && ((r = ar(n)), r && (t[r] = e[n]));
    return t;
  }
  var YB = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1,
  };
  function WB(e) {
    var t = [],
      r;
    for (r in e) we(e, r) && t.push({ unit: r, priority: YB[r] });
    return (
      t.sort(function (n, i) {
        return n.priority - i.priority;
      }),
      t
    );
  }
  var Lv = /\d/,
    Gt = /\d\d/,
    Uv = /\d{3}/,
    gp = /\d{4}/,
    mu = /[+-]?\d{6}/,
    ze = /\d\d?/,
    Yv = /\d\d\d\d?/,
    Wv = /\d\d\d\d\d\d?/,
    yu = /\d{1,3}/,
    mp = /\d{1,4}/,
    vu = /[+-]?\d{1,6}/,
    Ro = /\d+/,
    Au = /[+-]?\d+/,
    JB = /Z|[+-]\d\d:?\d\d/gi,
    wu = /Z|[+-]\d\d(?::?\d\d)?/gi,
    HB = /[+-]?\d+(\.\d{1,3})?/,
    Js =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Do = /^[1-9]\d?/,
    yp = /^([1-9]\d|\d)/,
    Rl;
  Rl = {};
  function Z(e, t, r) {
    Rl[e] = Yr(t)
      ? t
      : function (n, i) {
          return n && r ? r : t;
        };
  }
  function VB(e, t) {
    return we(Rl, e) ? Rl[e](t._strict, t._locale) : new RegExp($B(e));
  }
  function $B(e) {
    return nn(
      e
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (t, r, n, i, o) {
            return r || n || i || o;
          }
        )
    );
  }
  function nn(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function er(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function he(e) {
    var t = +e,
      r = 0;
    return t !== 0 && isFinite(t) && (r = er(t)), r;
  }
  var Nd = {};
  function be(e, t) {
    var r,
      n = t,
      i;
    for (
      typeof e == "string" && (e = [e]),
        dn(t) &&
          (n = function (o, s) {
            s[t] = he(o);
          }),
        i = e.length,
        r = 0;
      r < i;
      r++
    )
      Nd[e[r]] = n;
  }
  function Hs(e, t) {
    be(e, function (r, n, i, o) {
      (i._w = i._w || {}), t(r, i._w, i, o);
    });
  }
  function GB(e, t, r) {
    t != null && we(Nd, e) && Nd[e](t, r._a, r, e);
  }
  function xu(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
  }
  var St = 0,
    en = 1,
    Pr = 2,
    it = 3,
    mr = 4,
    tn = 5,
    si = 6,
    XB = 7,
    KB = 8;
  ie("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? _r(e, 4) : "+" + e;
  });
  ie(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  ie(0, ["YYYY", 4], 0, "year");
  ie(0, ["YYYYY", 5], 0, "year");
  ie(0, ["YYYYYY", 6, !0], 0, "year");
  Z("Y", Au);
  Z("YY", ze, Gt);
  Z("YYYY", mp, gp);
  Z("YYYYY", vu, mu);
  Z("YYYYYY", vu, mu);
  be(["YYYYY", "YYYYYY"], St);
  be("YYYY", function (e, t) {
    t[St] = e.length === 2 ? V.parseTwoDigitYear(e) : he(e);
  });
  be("YY", function (e, t) {
    t[St] = V.parseTwoDigitYear(e);
  });
  be("Y", function (e, t) {
    t[St] = parseInt(e, 10);
  });
  function os(e) {
    return xu(e) ? 366 : 365;
  }
  V.parseTwoDigitYear = function (e) {
    return he(e) + (he(e) > 68 ? 1900 : 2e3);
  };
  var Jv = Oo("FullYear", !0);
  function ZB() {
    return xu(this.year());
  }
  function Oo(e, t) {
    return function (r) {
      return r != null
        ? (Hv(this, e, r), V.updateOffset(this, t), this)
        : Rs(this, e);
    };
  }
  function Rs(e, t) {
    if (!e.isValid()) return NaN;
    var r = e._d,
      n = e._isUTC;
    switch (t) {
      case "Milliseconds":
        return n ? r.getUTCMilliseconds() : r.getMilliseconds();
      case "Seconds":
        return n ? r.getUTCSeconds() : r.getSeconds();
      case "Minutes":
        return n ? r.getUTCMinutes() : r.getMinutes();
      case "Hours":
        return n ? r.getUTCHours() : r.getHours();
      case "Date":
        return n ? r.getUTCDate() : r.getDate();
      case "Day":
        return n ? r.getUTCDay() : r.getDay();
      case "Month":
        return n ? r.getUTCMonth() : r.getMonth();
      case "FullYear":
        return n ? r.getUTCFullYear() : r.getFullYear();
      default:
        return NaN;
    }
  }
  function Hv(e, t, r) {
    var n, i, o, s, a;
    if (!(!e.isValid() || isNaN(r))) {
      switch (((n = e._d), (i = e._isUTC), t)) {
        case "Milliseconds":
          return void (i ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
        case "Seconds":
          return void (i ? n.setUTCSeconds(r) : n.setSeconds(r));
        case "Minutes":
          return void (i ? n.setUTCMinutes(r) : n.setMinutes(r));
        case "Hours":
          return void (i ? n.setUTCHours(r) : n.setHours(r));
        case "Date":
          return void (i ? n.setUTCDate(r) : n.setDate(r));
        case "FullYear":
          break;
        default:
          return;
      }
      (o = r),
        (s = e.month()),
        (a = e.date()),
        (a = a === 29 && s === 1 && !xu(o) ? 28 : a),
        i ? n.setUTCFullYear(o, s, a) : n.setFullYear(o, s, a);
    }
  }
  function qB(e) {
    return (e = ar(e)), Yr(this[e]) ? this[e]() : this;
  }
  function e2(e, t) {
    if (typeof e == "object") {
      e = hp(e);
      var r = WB(e),
        n,
        i = r.length;
      for (n = 0; n < i; n++) this[r[n].unit](e[r[n].unit]);
    } else if (((e = ar(e)), Yr(this[e]))) return this[e](t);
    return this;
  }
  function t2(e, t) {
    return ((e % t) + t) % t;
  }
  var Ge;
  Array.prototype.indexOf
    ? (Ge = Array.prototype.indexOf)
    : (Ge = function (e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      });
  function vp(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var r = t2(t, 12);
    return (
      (e += (t - r) / 12), r === 1 ? (xu(e) ? 29 : 28) : 31 - ((r % 7) % 2)
    );
  }
  ie("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  ie("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  });
  ie("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  });
  Z("M", ze, Do);
  Z("MM", ze, Gt);
  Z("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  });
  Z("MMMM", function (e, t) {
    return t.monthsRegex(e);
  });
  be(["M", "MM"], function (e, t) {
    t[en] = he(e) - 1;
  });
  be(["MMM", "MMMM"], function (e, t, r, n) {
    var i = r._locale.monthsParse(e, n, r._strict);
    i != null ? (t[en] = i) : (le(r).invalidMonth = e);
  });
  var r2 =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    Vv = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    $v = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    n2 = Js,
    i2 = Js;
  function o2(e, t) {
    return e
      ? kr(this._months)
        ? this._months[e.month()]
        : this._months[
            (this._months.isFormat || $v).test(t) ? "format" : "standalone"
          ][e.month()]
      : kr(this._months)
      ? this._months
      : this._months.standalone;
  }
  function s2(e, t) {
    return e
      ? kr(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[$v.test(t) ? "format" : "standalone"][e.month()]
      : kr(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  }
  function a2(e, t, r) {
    var n,
      i,
      o,
      s = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          n = 0;
        n < 12;
        ++n
      )
        (o = Ur([2e3, n])),
          (this._shortMonthsParse[n] = this.monthsShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[n] = this.months(o, "").toLocaleLowerCase());
    return r
      ? t === "MMM"
        ? ((i = Ge.call(this._shortMonthsParse, s)), i !== -1 ? i : null)
        : ((i = Ge.call(this._longMonthsParse, s)), i !== -1 ? i : null)
      : t === "MMM"
      ? ((i = Ge.call(this._shortMonthsParse, s)),
        i !== -1
          ? i
          : ((i = Ge.call(this._longMonthsParse, s)), i !== -1 ? i : null))
      : ((i = Ge.call(this._longMonthsParse, s)),
        i !== -1
          ? i
          : ((i = Ge.call(this._shortMonthsParse, s)), i !== -1 ? i : null));
  }
  function l2(e, t, r) {
    var n, i, o;
    if (this._monthsParseExact) return a2.call(this, e, t, r);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        n = 0;
      n < 12;
      n++
    ) {
      if (
        ((i = Ur([2e3, n])),
        r &&
          !this._longMonthsParse[n] &&
          ((this._longMonthsParse[n] = new RegExp(
            "^" + this.months(i, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[n] = new RegExp(
            "^" + this.monthsShort(i, "").replace(".", "") + "$",
            "i"
          ))),
        !r &&
          !this._monthsParse[n] &&
          ((o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
          (this._monthsParse[n] = new RegExp(o.replace(".", ""), "i"))),
        r && t === "MMMM" && this._longMonthsParse[n].test(e))
      )
        return n;
      if (r && t === "MMM" && this._shortMonthsParse[n].test(e)) return n;
      if (!r && this._monthsParse[n].test(e)) return n;
    }
  }
  function Gv(e, t) {
    if (!e.isValid()) return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t)) t = he(t);
      else if (((t = e.localeData().monthsParse(t)), !dn(t))) return e;
    }
    var r = t,
      n = e.date();
    return (
      (n = n < 29 ? n : Math.min(n, vp(e.year(), r))),
      e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n),
      e
    );
  }
  function Xv(e) {
    return e != null
      ? (Gv(this, e), V.updateOffset(this, !0), this)
      : Rs(this, "Month");
  }
  function u2() {
    return vp(this.year(), this.month());
  }
  function c2(e) {
    return this._monthsParseExact
      ? (we(this, "_monthsRegex") || Kv.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (we(this, "_monthsShortRegex") || (this._monthsShortRegex = n2),
        this._monthsShortStrictRegex && e
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function d2(e) {
    return this._monthsParseExact
      ? (we(this, "_monthsRegex") || Kv.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex)
      : (we(this, "_monthsRegex") || (this._monthsRegex = i2),
        this._monthsStrictRegex && e
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function Kv() {
    function e(l, d) {
      return d.length - l.length;
    }
    var t = [],
      r = [],
      n = [],
      i,
      o,
      s,
      a;
    for (i = 0; i < 12; i++)
      (o = Ur([2e3, i])),
        (s = nn(this.monthsShort(o, ""))),
        (a = nn(this.months(o, ""))),
        t.push(s),
        r.push(a),
        n.push(a),
        n.push(s);
    t.sort(e),
      r.sort(e),
      n.sort(e),
      (this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function f2(e, t, r, n, i, o, s) {
    var a;
    return (
      e < 100 && e >= 0
        ? ((a = new Date(e + 400, t, r, n, i, o, s)),
          isFinite(a.getFullYear()) && a.setFullYear(e))
        : (a = new Date(e, t, r, n, i, o, s)),
      a
    );
  }
  function Ds(e) {
    var t, r;
    return (
      e < 100 && e >= 0
        ? ((r = Array.prototype.slice.call(arguments)),
          (r[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, r))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    );
  }
  function Dl(e, t, r) {
    var n = 7 + t - r,
      i = (7 + Ds(e, 0, n).getUTCDay() - t) % 7;
    return -i + n - 1;
  }
  function Zv(e, t, r, n, i) {
    var o = (7 + r - n) % 7,
      s = Dl(e, n, i),
      a = 1 + 7 * (t - 1) + o + s,
      l,
      d;
    return (
      a <= 0
        ? ((l = e - 1), (d = os(l) + a))
        : a > os(e)
        ? ((l = e + 1), (d = a - os(e)))
        : ((l = e), (d = a)),
      { year: l, dayOfYear: d }
    );
  }
  function Os(e, t, r) {
    var n = Dl(e.year(), t, r),
      i = Math.floor((e.dayOfYear() - n - 1) / 7) + 1,
      o,
      s;
    return (
      i < 1
        ? ((s = e.year() - 1), (o = i + on(s, t, r)))
        : i > on(e.year(), t, r)
        ? ((o = i - on(e.year(), t, r)), (s = e.year() + 1))
        : ((s = e.year()), (o = i)),
      { week: o, year: s }
    );
  }
  function on(e, t, r) {
    var n = Dl(e, t, r),
      i = Dl(e + 1, t, r);
    return (os(e) - n + i) / 7;
  }
  ie("w", ["ww", 2], "wo", "week");
  ie("W", ["WW", 2], "Wo", "isoWeek");
  Z("w", ze, Do);
  Z("ww", ze, Gt);
  Z("W", ze, Do);
  Z("WW", ze, Gt);
  Hs(["w", "ww", "W", "WW"], function (e, t, r, n) {
    t[n.substr(0, 1)] = he(e);
  });
  function p2(e) {
    return Os(e, this._week.dow, this._week.doy).week;
  }
  var h2 = { dow: 0, doy: 6 };
  function g2() {
    return this._week.dow;
  }
  function m2() {
    return this._week.doy;
  }
  function y2(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function v2(e) {
    var t = Os(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  ie("d", 0, "do", "day");
  ie("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  });
  ie("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  });
  ie("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  });
  ie("e", 0, 0, "weekday");
  ie("E", 0, 0, "isoWeekday");
  Z("d", ze);
  Z("e", ze);
  Z("E", ze);
  Z("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  });
  Z("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  });
  Z("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  });
  Hs(["dd", "ddd", "dddd"], function (e, t, r, n) {
    var i = r._locale.weekdaysParse(e, n, r._strict);
    i != null ? (t.d = i) : (le(r).invalidWeekday = e);
  });
  Hs(["d", "e", "E"], function (e, t, r, n) {
    t[n] = he(e);
  });
  function A2(e, t) {
    return typeof e != "string"
      ? e
      : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == "number" ? e : null)
      : parseInt(e, 10);
  }
  function w2(e, t) {
    return typeof e == "string"
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e)
      ? null
      : e;
  }
  function Ap(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var x2 = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    qv = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    S2 = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    k2 = Js,
    E2 = Js,
    C2 = Js;
  function b2(e, t) {
    var r = kr(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          e && e !== !0 && this._weekdays.isFormat.test(t)
            ? "format"
            : "standalone"
        ];
    return e === !0 ? Ap(r, this._week.dow) : e ? r[e.day()] : r;
  }
  function I2(e) {
    return e === !0
      ? Ap(this._weekdaysShort, this._week.dow)
      : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort;
  }
  function B2(e) {
    return e === !0
      ? Ap(this._weekdaysMin, this._week.dow)
      : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin;
  }
  function R2(e, t, r) {
    var n,
      i,
      o,
      s = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          n = 0;
        n < 7;
        ++n
      )
        (o = Ur([2e3, 1]).day(n)),
          (this._minWeekdaysParse[n] = this.weekdaysMin(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[n] = this.weekdaysShort(
            o,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[n] = this.weekdays(o, "").toLocaleLowerCase());
    return r
      ? t === "dddd"
        ? ((i = Ge.call(this._weekdaysParse, s)), i !== -1 ? i : null)
        : t === "ddd"
        ? ((i = Ge.call(this._shortWeekdaysParse, s)), i !== -1 ? i : null)
        : ((i = Ge.call(this._minWeekdaysParse, s)), i !== -1 ? i : null)
      : t === "dddd"
      ? ((i = Ge.call(this._weekdaysParse, s)),
        i !== -1 || ((i = Ge.call(this._shortWeekdaysParse, s)), i !== -1)
          ? i
          : ((i = Ge.call(this._minWeekdaysParse, s)), i !== -1 ? i : null))
      : t === "ddd"
      ? ((i = Ge.call(this._shortWeekdaysParse, s)),
        i !== -1 || ((i = Ge.call(this._weekdaysParse, s)), i !== -1)
          ? i
          : ((i = Ge.call(this._minWeekdaysParse, s)), i !== -1 ? i : null))
      : ((i = Ge.call(this._minWeekdaysParse, s)),
        i !== -1 || ((i = Ge.call(this._weekdaysParse, s)), i !== -1)
          ? i
          : ((i = Ge.call(this._shortWeekdaysParse, s)), i !== -1 ? i : null));
  }
  function D2(e, t, r) {
    var n, i, o;
    if (this._weekdaysParseExact) return R2.call(this, e, t, r);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        n = 0;
      n < 7;
      n++
    ) {
      if (
        ((i = Ur([2e3, 1]).day(n)),
        r &&
          !this._fullWeekdaysParse[n] &&
          ((this._fullWeekdaysParse[n] = new RegExp(
            "^" + this.weekdays(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[n] = new RegExp(
            "^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[n] = new RegExp(
            "^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$",
            "i"
          ))),
        this._weekdaysParse[n] ||
          ((o =
            "^" +
            this.weekdays(i, "") +
            "|^" +
            this.weekdaysShort(i, "") +
            "|^" +
            this.weekdaysMin(i, "")),
          (this._weekdaysParse[n] = new RegExp(o.replace(".", ""), "i"))),
        r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      )
        return n;
      if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e)) return n;
      if (r && t === "dd" && this._minWeekdaysParse[n].test(e)) return n;
      if (!r && this._weekdaysParse[n].test(e)) return n;
    }
  }
  function O2(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = Rs(this, "Day");
    return e != null
      ? ((e = A2(e, this.localeData())), this.add(e - t, "d"))
      : t;
  }
  function T2(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function M2(e) {
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      var t = w2(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else return this.day() || 7;
  }
  function P2(e) {
    return this._weekdaysParseExact
      ? (we(this, "_weekdaysRegex") || wp.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (we(this, "_weekdaysRegex") || (this._weekdaysRegex = k2),
        this._weekdaysStrictRegex && e
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function z2(e) {
    return this._weekdaysParseExact
      ? (we(this, "_weekdaysRegex") || wp.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (we(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = E2),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function N2(e) {
    return this._weekdaysParseExact
      ? (we(this, "_weekdaysRegex") || wp.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (we(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = C2),
        this._weekdaysMinStrictRegex && e
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function wp() {
    function e(p, h) {
      return h.length - p.length;
    }
    var t = [],
      r = [],
      n = [],
      i = [],
      o,
      s,
      a,
      l,
      d;
    for (o = 0; o < 7; o++)
      (s = Ur([2e3, 1]).day(o)),
        (a = nn(this.weekdaysMin(s, ""))),
        (l = nn(this.weekdaysShort(s, ""))),
        (d = nn(this.weekdays(s, ""))),
        t.push(a),
        r.push(l),
        n.push(d),
        i.push(a),
        i.push(l),
        i.push(d);
    t.sort(e),
      r.sort(e),
      n.sort(e),
      i.sort(e),
      (this._weekdaysRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + r.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + t.join("|") + ")",
        "i"
      ));
  }
  function xp() {
    return this.hours() % 12 || 12;
  }
  function Q2() {
    return this.hours() || 24;
  }
  ie("H", ["HH", 2], 0, "hour");
  ie("h", ["hh", 2], 0, xp);
  ie("k", ["kk", 2], 0, Q2);
  ie("hmm", 0, 0, function () {
    return "" + xp.apply(this) + _r(this.minutes(), 2);
  });
  ie("hmmss", 0, 0, function () {
    return "" + xp.apply(this) + _r(this.minutes(), 2) + _r(this.seconds(), 2);
  });
  ie("Hmm", 0, 0, function () {
    return "" + this.hours() + _r(this.minutes(), 2);
  });
  ie("Hmmss", 0, 0, function () {
    return "" + this.hours() + _r(this.minutes(), 2) + _r(this.seconds(), 2);
  });
  function eA(e, t) {
    ie(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  eA("a", !0);
  eA("A", !1);
  function tA(e, t) {
    return t._meridiemParse;
  }
  Z("a", tA);
  Z("A", tA);
  Z("H", ze, yp);
  Z("h", ze, Do);
  Z("k", ze, Do);
  Z("HH", ze, Gt);
  Z("hh", ze, Gt);
  Z("kk", ze, Gt);
  Z("hmm", Yv);
  Z("hmmss", Wv);
  Z("Hmm", Yv);
  Z("Hmmss", Wv);
  be(["H", "HH"], it);
  be(["k", "kk"], function (e, t, r) {
    var n = he(e);
    t[it] = n === 24 ? 0 : n;
  });
  be(["a", "A"], function (e, t, r) {
    (r._isPm = r._locale.isPM(e)), (r._meridiem = e);
  });
  be(["h", "hh"], function (e, t, r) {
    (t[it] = he(e)), (le(r).bigHour = !0);
  });
  be("hmm", function (e, t, r) {
    var n = e.length - 2;
    (t[it] = he(e.substr(0, n))),
      (t[mr] = he(e.substr(n))),
      (le(r).bigHour = !0);
  });
  be("hmmss", function (e, t, r) {
    var n = e.length - 4,
      i = e.length - 2;
    (t[it] = he(e.substr(0, n))),
      (t[mr] = he(e.substr(n, 2))),
      (t[tn] = he(e.substr(i))),
      (le(r).bigHour = !0);
  });
  be("Hmm", function (e, t, r) {
    var n = e.length - 2;
    (t[it] = he(e.substr(0, n))), (t[mr] = he(e.substr(n)));
  });
  be("Hmmss", function (e, t, r) {
    var n = e.length - 4,
      i = e.length - 2;
    (t[it] = he(e.substr(0, n))),
      (t[mr] = he(e.substr(n, 2))),
      (t[tn] = he(e.substr(i)));
  });
  function _2(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var j2 = /[ap]\.?m?\.?/i,
    F2 = Oo("Hours", !0);
  function L2(e, t, r) {
    return e > 11 ? (r ? "pm" : "PM") : r ? "am" : "AM";
  }
  var rA = {
      calendar: RB,
      longDateFormat: MB,
      invalidDate: zB,
      ordinal: QB,
      dayOfMonthOrdinalParse: _B,
      relativeTime: FB,
      months: r2,
      monthsShort: Vv,
      week: h2,
      weekdays: x2,
      weekdaysMin: S2,
      weekdaysShort: qv,
      meridiemParse: j2,
    },
    Qe = {},
    Lo = {},
    Ts;
  function U2(e, t) {
    var r,
      n = Math.min(e.length, t.length);
    for (r = 0; r < n; r += 1) if (e[r] !== t[r]) return r;
    return n;
  }
  function Ng(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function Y2(e) {
    for (var t = 0, r, n, i, o; t < e.length; ) {
      for (
        o = Ng(e[t]).split("-"),
          r = o.length,
          n = Ng(e[t + 1]),
          n = n ? n.split("-") : null;
        r > 0;

      ) {
        if (((i = Su(o.slice(0, r).join("-"))), i)) return i;
        if (n && n.length >= r && U2(o, n) >= r - 1) break;
        r--;
      }
      t++;
    }
    return Ts;
  }
  function W2(e) {
    return !!(e && e.match("^[^/\\\\]*$"));
  }
  function Su(e) {
    var t = null,
      r;
    if (Qe[e] === void 0 && typeof Ja < "u" && Ja && Ja.exports && W2(e))
      try {
        (t = Ts._abbr), (r = require), r("./locale/" + e), _n(t);
      } catch {
        Qe[e] = null;
      }
    return Qe[e];
  }
  function _n(e, t) {
    var r;
    return (
      e &&
        (Bt(t) ? (r = hn(e)) : (r = Sp(e, t)),
        r
          ? (Ts = r)
          : typeof console < "u" &&
            console.warn &&
            console.warn(
              "Locale " + e + " not found. Did you forget to load it?"
            )),
      Ts._abbr
    );
  }
  function Sp(e, t) {
    if (t !== null) {
      var r,
        n = rA;
      if (((t.abbr = e), Qe[e] != null))
        jv(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (n = Qe[e]._config);
      else if (t.parentLocale != null)
        if (Qe[t.parentLocale] != null) n = Qe[t.parentLocale]._config;
        else if (((r = Su(t.parentLocale)), r != null)) n = r._config;
        else
          return (
            Lo[t.parentLocale] || (Lo[t.parentLocale] = []),
            Lo[t.parentLocale].push({ name: e, config: t }),
            null
          );
      return (
        (Qe[e] = new fp(Pd(n, t))),
        Lo[e] &&
          Lo[e].forEach(function (i) {
            Sp(i.name, i.config);
          }),
        _n(e),
        Qe[e]
      );
    } else return delete Qe[e], null;
  }
  function J2(e, t) {
    if (t != null) {
      var r,
        n,
        i = rA;
      Qe[e] != null && Qe[e].parentLocale != null
        ? Qe[e].set(Pd(Qe[e]._config, t))
        : ((n = Su(e)),
          n != null && (i = n._config),
          (t = Pd(i, t)),
          n == null && (t.abbr = e),
          (r = new fp(t)),
          (r.parentLocale = Qe[e]),
          (Qe[e] = r)),
        _n(e);
    } else
      Qe[e] != null &&
        (Qe[e].parentLocale != null
          ? ((Qe[e] = Qe[e].parentLocale), e === _n() && _n(e))
          : Qe[e] != null && delete Qe[e]);
    return Qe[e];
  }
  function hn(e) {
    var t;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Ts;
    if (!kr(e)) {
      if (((t = Su(e)), t)) return t;
      e = [e];
    }
    return Y2(e);
  }
  function H2() {
    return zd(Qe);
  }
  function kp(e) {
    var t,
      r = e._a;
    return (
      r &&
        le(e).overflow === -2 &&
        ((t =
          r[en] < 0 || r[en] > 11
            ? en
            : r[Pr] < 1 || r[Pr] > vp(r[St], r[en])
            ? Pr
            : r[it] < 0 ||
              r[it] > 24 ||
              (r[it] === 24 && (r[mr] !== 0 || r[tn] !== 0 || r[si] !== 0))
            ? it
            : r[mr] < 0 || r[mr] > 59
            ? mr
            : r[tn] < 0 || r[tn] > 59
            ? tn
            : r[si] < 0 || r[si] > 999
            ? si
            : -1),
        le(e)._overflowDayOfYear && (t < St || t > Pr) && (t = Pr),
        le(e)._overflowWeeks && t === -1 && (t = XB),
        le(e)._overflowWeekday && t === -1 && (t = KB),
        (le(e).overflow = t)),
      e
    );
  }
  var V2 =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    $2 =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    G2 = /Z|[+-]\d\d(?::?\d\d)?/,
    Sa = [
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
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    hc = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    X2 = /^\/?Date\((-?\d+)/i,
    K2 =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    Z2 = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };
  function nA(e) {
    var t,
      r,
      n = e._i,
      i = V2.exec(n) || $2.exec(n),
      o,
      s,
      a,
      l,
      d = Sa.length,
      p = hc.length;
    if (i) {
      for (le(e).iso = !0, t = 0, r = d; t < r; t++)
        if (Sa[t][1].exec(i[1])) {
          (s = Sa[t][0]), (o = Sa[t][2] !== !1);
          break;
        }
      if (s == null) {
        e._isValid = !1;
        return;
      }
      if (i[3]) {
        for (t = 0, r = p; t < r; t++)
          if (hc[t][1].exec(i[3])) {
            a = (i[2] || " ") + hc[t][0];
            break;
          }
        if (a == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!o && a != null) {
        e._isValid = !1;
        return;
      }
      if (i[4])
        if (G2.exec(i[4])) l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      (e._f = s + (a || "") + (l || "")), Cp(e);
    } else e._isValid = !1;
  }
  function q2(e, t, r, n, i, o) {
    var s = [
      eR(e),
      Vv.indexOf(t),
      parseInt(r, 10),
      parseInt(n, 10),
      parseInt(i, 10),
    ];
    return o && s.push(parseInt(o, 10)), s;
  }
  function eR(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function tR(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
  }
  function rR(e, t, r) {
    if (e) {
      var n = qv.indexOf(e),
        i = new Date(t[0], t[1], t[2]).getDay();
      if (n !== i) return (le(r).weekdayMismatch = !0), (r._isValid = !1), !1;
    }
    return !0;
  }
  function nR(e, t, r) {
    if (e) return Z2[e];
    if (t) return 0;
    var n = parseInt(r, 10),
      i = n % 100,
      o = (n - i) / 100;
    return o * 60 + i;
  }
  function iA(e) {
    var t = K2.exec(tR(e._i)),
      r;
    if (t) {
      if (((r = q2(t[4], t[3], t[2], t[5], t[6], t[7])), !rR(t[1], r, e)))
        return;
      (e._a = r),
        (e._tzm = nR(t[8], t[9], t[10])),
        (e._d = Ds.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (le(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function iR(e) {
    var t = X2.exec(e._i);
    if (t !== null) {
      e._d = new Date(+t[1]);
      return;
    }
    if ((nA(e), e._isValid === !1)) delete e._isValid;
    else return;
    if ((iA(e), e._isValid === !1)) delete e._isValid;
    else return;
    e._strict ? (e._isValid = !1) : V.createFromInputFallback(e);
  }
  V.createFromInputFallback = sr(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function Pi(e, t, r) {
    return e ?? t ?? r;
  }
  function oR(e) {
    var t = new Date(V.now());
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Ep(e) {
    var t,
      r,
      n = [],
      i,
      o,
      s;
    if (!e._d) {
      for (
        i = oR(e),
          e._w && e._a[Pr] == null && e._a[en] == null && sR(e),
          e._dayOfYear != null &&
            ((s = Pi(e._a[St], i[St])),
            (e._dayOfYear > os(s) || e._dayOfYear === 0) &&
              (le(e)._overflowDayOfYear = !0),
            (r = Ds(s, 0, e._dayOfYear)),
            (e._a[en] = r.getUTCMonth()),
            (e._a[Pr] = r.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = n[t] = i[t];
      for (; t < 7; t++)
        e._a[t] = n[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t];
      e._a[it] === 24 &&
        e._a[mr] === 0 &&
        e._a[tn] === 0 &&
        e._a[si] === 0 &&
        ((e._nextDay = !0), (e._a[it] = 0)),
        (e._d = (e._useUTC ? Ds : f2).apply(null, n)),
        (o = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[it] = 24),
        e._w &&
          typeof e._w.d < "u" &&
          e._w.d !== o &&
          (le(e).weekdayMismatch = !0);
    }
  }
  function sR(e) {
    var t, r, n, i, o, s, a, l, d;
    (t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((o = 1),
          (s = 4),
          (r = Pi(t.GG, e._a[St], Os(Pe(), 1, 4).year)),
          (n = Pi(t.W, 1)),
          (i = Pi(t.E, 1)),
          (i < 1 || i > 7) && (l = !0))
        : ((o = e._locale._week.dow),
          (s = e._locale._week.doy),
          (d = Os(Pe(), o, s)),
          (r = Pi(t.gg, e._a[St], d.year)),
          (n = Pi(t.w, d.week)),
          t.d != null
            ? ((i = t.d), (i < 0 || i > 6) && (l = !0))
            : t.e != null
            ? ((i = t.e + o), (t.e < 0 || t.e > 6) && (l = !0))
            : (i = o)),
      n < 1 || n > on(r, o, s)
        ? (le(e)._overflowWeeks = !0)
        : l != null
        ? (le(e)._overflowWeekday = !0)
        : ((a = Zv(r, n, i, o, s)),
          (e._a[St] = a.year),
          (e._dayOfYear = a.dayOfYear));
  }
  V.ISO_8601 = function () {};
  V.RFC_2822 = function () {};
  function Cp(e) {
    if (e._f === V.ISO_8601) {
      nA(e);
      return;
    }
    if (e._f === V.RFC_2822) {
      iA(e);
      return;
    }
    (e._a = []), (le(e).empty = !0);
    var t = "" + e._i,
      r,
      n,
      i,
      o,
      s,
      a = t.length,
      l = 0,
      d,
      p;
    for (
      i = Fv(e._f, e._locale).match(pp) || [], p = i.length, r = 0;
      r < p;
      r++
    )
      (o = i[r]),
        (n = (t.match(VB(o, e)) || [])[0]),
        n &&
          ((s = t.substr(0, t.indexOf(n))),
          s.length > 0 && le(e).unusedInput.push(s),
          (t = t.slice(t.indexOf(n) + n.length)),
          (l += n.length)),
        io[o]
          ? (n ? (le(e).empty = !1) : le(e).unusedTokens.push(o), GB(o, n, e))
          : e._strict && !n && le(e).unusedTokens.push(o);
    (le(e).charsLeftOver = a - l),
      t.length > 0 && le(e).unusedInput.push(t),
      e._a[it] <= 12 &&
        le(e).bigHour === !0 &&
        e._a[it] > 0 &&
        (le(e).bigHour = void 0),
      (le(e).parsedDateParts = e._a.slice(0)),
      (le(e).meridiem = e._meridiem),
      (e._a[it] = aR(e._locale, e._a[it], e._meridiem)),
      (d = le(e).era),
      d !== null && (e._a[St] = e._locale.erasConvertYear(d, e._a[St])),
      Ep(e),
      kp(e);
  }
  function aR(e, t, r) {
    var n;
    return r == null
      ? t
      : e.meridiemHour != null
      ? e.meridiemHour(t, r)
      : (e.isPM != null &&
          ((n = e.isPM(r)),
          n && t < 12 && (t += 12),
          !n && t === 12 && (t = 0)),
        t);
  }
  function lR(e) {
    var t,
      r,
      n,
      i,
      o,
      s,
      a = !1,
      l = e._f.length;
    if (l === 0) {
      (le(e).invalidFormat = !0), (e._d = new Date(NaN));
      return;
    }
    for (i = 0; i < l; i++)
      (o = 0),
        (s = !1),
        (t = dp({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[i]),
        Cp(t),
        cp(t) && (s = !0),
        (o += le(t).charsLeftOver),
        (o += le(t).unusedTokens.length * 10),
        (le(t).score = o),
        a
          ? o < n && ((n = o), (r = t))
          : (n == null || o < n || s) && ((n = o), (r = t), s && (a = !0));
    In(e, r || t);
  }
  function uR(e) {
    if (!e._d) {
      var t = hp(e._i),
        r = t.day === void 0 ? t.date : t.day;
      (e._a = Qv(
        [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
        function (n) {
          return n && parseInt(n, 10);
        }
      )),
        Ep(e);
    }
  }
  function cR(e) {
    var t = new Ws(kp(oA(e)));
    return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
  }
  function oA(e) {
    var t = e._i,
      r = e._f;
    return (
      (e._locale = e._locale || hn(e._l)),
      t === null || (r === void 0 && t === "")
        ? gu({ nullInput: !0 })
        : (typeof t == "string" && (e._i = t = e._locale.preparse(t)),
          Er(t)
            ? new Ws(kp(t))
            : (Ys(t) ? (e._d = t) : kr(r) ? lR(e) : r ? Cp(e) : dR(e),
              cp(e) || (e._d = null),
              e))
    );
  }
  function dR(e) {
    var t = e._i;
    Bt(t)
      ? (e._d = new Date(V.now()))
      : Ys(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == "string"
      ? iR(e)
      : kr(t)
      ? ((e._a = Qv(t.slice(0), function (r) {
          return parseInt(r, 10);
        })),
        Ep(e))
      : ci(t)
      ? uR(e)
      : dn(t)
      ? (e._d = new Date(t))
      : V.createFromInputFallback(e);
  }
  function sA(e, t, r, n, i) {
    var o = {};
    return (
      (t === !0 || t === !1) && ((n = t), (t = void 0)),
      (r === !0 || r === !1) && ((n = r), (r = void 0)),
      ((ci(e) && up(e)) || (kr(e) && e.length === 0)) && (e = void 0),
      (o._isAMomentObject = !0),
      (o._useUTC = o._isUTC = i),
      (o._l = r),
      (o._i = e),
      (o._f = t),
      (o._strict = n),
      cR(o)
    );
  }
  function Pe(e, t, r, n) {
    return sA(e, t, r, n, !1);
  }
  var fR = sr(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : gu();
      }
    ),
    pR = sr(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var e = Pe.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : gu();
      }
    );
  function aA(e, t) {
    var r, n;
    if ((t.length === 1 && kr(t[0]) && (t = t[0]), !t.length)) return Pe();
    for (r = t[0], n = 1; n < t.length; ++n)
      (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
    return r;
  }
  function hR() {
    var e = [].slice.call(arguments, 0);
    return aA("isBefore", e);
  }
  function gR() {
    var e = [].slice.call(arguments, 0);
    return aA("isAfter", e);
  }
  var mR = function () {
      return Date.now ? Date.now() : +new Date();
    },
    Uo = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  function yR(e) {
    var t,
      r = !1,
      n,
      i = Uo.length;
    for (t in e)
      if (
        we(e, t) &&
        !(Ge.call(Uo, t) !== -1 && (e[t] == null || !isNaN(e[t])))
      )
        return !1;
    for (n = 0; n < i; ++n)
      if (e[Uo[n]]) {
        if (r) return !1;
        parseFloat(e[Uo[n]]) !== he(e[Uo[n]]) && (r = !0);
      }
    return !0;
  }
  function vR() {
    return this._isValid;
  }
  function AR() {
    return Cr(NaN);
  }
  function ku(e) {
    var t = hp(e),
      r = t.year || 0,
      n = t.quarter || 0,
      i = t.month || 0,
      o = t.week || t.isoWeek || 0,
      s = t.day || 0,
      a = t.hour || 0,
      l = t.minute || 0,
      d = t.second || 0,
      p = t.millisecond || 0;
    (this._isValid = yR(t)),
      (this._milliseconds = +p + d * 1e3 + l * 6e4 + a * 1e3 * 60 * 60),
      (this._days = +s + o * 7),
      (this._months = +i + n * 3 + r * 12),
      (this._data = {}),
      (this._locale = hn()),
      this._bubble();
  }
  function Ya(e) {
    return e instanceof ku;
  }
  function Qd(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function wR(e, t, r) {
    var n = Math.min(e.length, t.length),
      i = Math.abs(e.length - t.length),
      o = 0,
      s;
    for (s = 0; s < n; s++)
      ((r && e[s] !== t[s]) || (!r && he(e[s]) !== he(t[s]))) && o++;
    return o + i;
  }
  function lA(e, t) {
    ie(e, 0, 0, function () {
      var r = this.utcOffset(),
        n = "+";
      return (
        r < 0 && ((r = -r), (n = "-")),
        n + _r(~~(r / 60), 2) + t + _r(~~r % 60, 2)
      );
    });
  }
  lA("Z", ":");
  lA("ZZ", "");
  Z("Z", wu);
  Z("ZZ", wu);
  be(["Z", "ZZ"], function (e, t, r) {
    (r._useUTC = !0), (r._tzm = bp(wu, e));
  });
  var xR = /([\+\-]|\d\d)/gi;
  function bp(e, t) {
    var r = (t || "").match(e),
      n,
      i,
      o;
    return r === null
      ? null
      : ((n = r[r.length - 1] || []),
        (i = (n + "").match(xR) || ["-", 0, 0]),
        (o = +(i[1] * 60) + he(i[2])),
        o === 0 ? 0 : i[0] === "+" ? o : -o);
  }
  function Ip(e, t) {
    var r, n;
    return t._isUTC
      ? ((r = t.clone()),
        (n = (Er(e) || Ys(e) ? e.valueOf() : Pe(e).valueOf()) - r.valueOf()),
        r._d.setTime(r._d.valueOf() + n),
        V.updateOffset(r, !1),
        r)
      : Pe(e).local();
  }
  function _d(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  V.updateOffset = function () {};
  function SR(e, t, r) {
    var n = this._offset || 0,
      i;
    if (!this.isValid()) return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (((e = bp(wu, e)), e === null)) return this;
      } else Math.abs(e) < 16 && !r && (e = e * 60);
      return (
        !this._isUTC && t && (i = _d(this)),
        (this._offset = e),
        (this._isUTC = !0),
        i != null && this.add(i, "m"),
        n !== e &&
          (!t || this._changeInProgress
            ? dA(this, Cr(e - n, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              V.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    } else return this._isUTC ? n : _d(this);
  }
  function kR(e, t) {
    return e != null
      ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset();
  }
  function ER(e) {
    return this.utcOffset(0, e);
  }
  function CR(e) {
    return (
      this._isUTC &&
        (this.utcOffset(0, e),
        (this._isUTC = !1),
        e && this.subtract(_d(this), "m")),
      this
    );
  }
  function bR() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = bp(JB, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function IR(e) {
    return this.isValid()
      ? ((e = e ? Pe(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1;
  }
  function BR() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function RR() {
    if (!Bt(this._isDSTShifted)) return this._isDSTShifted;
    var e = {},
      t;
    return (
      dp(e, this),
      (e = oA(e)),
      e._a
        ? ((t = e._isUTC ? Ur(e._a) : Pe(e._a)),
          (this._isDSTShifted = this.isValid() && wR(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    );
  }
  function DR() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function OR() {
    return this.isValid() ? this._isUTC : !1;
  }
  function uA() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var TR = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    MR =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function Cr(e, t) {
    var r = e,
      n = null,
      i,
      o,
      s;
    return (
      Ya(e)
        ? (r = { ms: e._milliseconds, d: e._days, M: e._months })
        : dn(e) || !isNaN(+e)
        ? ((r = {}), t ? (r[t] = +e) : (r.milliseconds = +e))
        : (n = TR.exec(e))
        ? ((i = n[1] === "-" ? -1 : 1),
          (r = {
            y: 0,
            d: he(n[Pr]) * i,
            h: he(n[it]) * i,
            m: he(n[mr]) * i,
            s: he(n[tn]) * i,
            ms: he(Qd(n[si] * 1e3)) * i,
          }))
        : (n = MR.exec(e))
        ? ((i = n[1] === "-" ? -1 : 1),
          (r = {
            y: Xn(n[2], i),
            M: Xn(n[3], i),
            w: Xn(n[4], i),
            d: Xn(n[5], i),
            h: Xn(n[6], i),
            m: Xn(n[7], i),
            s: Xn(n[8], i),
          }))
        : r == null
        ? (r = {})
        : typeof r == "object" &&
          ("from" in r || "to" in r) &&
          ((s = PR(Pe(r.from), Pe(r.to))),
          (r = {}),
          (r.ms = s.milliseconds),
          (r.M = s.months)),
      (o = new ku(r)),
      Ya(e) && we(e, "_locale") && (o._locale = e._locale),
      Ya(e) && we(e, "_isValid") && (o._isValid = e._isValid),
      o
    );
  }
  Cr.fn = ku.prototype;
  Cr.invalid = AR;
  function Xn(e, t) {
    var r = e && parseFloat(e.replace(",", "."));
    return (isNaN(r) ? 0 : r) * t;
  }
  function Qg(e, t) {
    var r = {};
    return (
      (r.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(r.months, "M").isAfter(t) && --r.months,
      (r.milliseconds = +t - +e.clone().add(r.months, "M")),
      r
    );
  }
  function PR(e, t) {
    var r;
    return e.isValid() && t.isValid()
      ? ((t = Ip(t, e)),
        e.isBefore(t)
          ? (r = Qg(e, t))
          : ((r = Qg(t, e)),
            (r.milliseconds = -r.milliseconds),
            (r.months = -r.months)),
        r)
      : { milliseconds: 0, months: 0 };
  }
  function cA(e, t) {
    return function (r, n) {
      var i, o;
      return (
        n !== null &&
          !isNaN(+n) &&
          (jv(
            t,
            "moment()." +
              t +
              "(period, number) is deprecated. Please use moment()." +
              t +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (o = r),
          (r = n),
          (n = o)),
        (i = Cr(r, n)),
        dA(this, i, e),
        this
      );
    };
  }
  function dA(e, t, r, n) {
    var i = t._milliseconds,
      o = Qd(t._days),
      s = Qd(t._months);
    e.isValid() &&
      ((n = n ?? !0),
      s && Gv(e, Rs(e, "Month") + s * r),
      o && Hv(e, "Date", Rs(e, "Date") + o * r),
      i && e._d.setTime(e._d.valueOf() + i * r),
      n && V.updateOffset(e, o || s));
  }
  var zR = cA(1, "add"),
    NR = cA(-1, "subtract");
  function fA(e) {
    return typeof e == "string" || e instanceof String;
  }
  function QR(e) {
    return (
      Er(e) ||
      Ys(e) ||
      fA(e) ||
      dn(e) ||
      jR(e) ||
      _R(e) ||
      e === null ||
      e === void 0
    );
  }
  function _R(e) {
    var t = ci(e) && !up(e),
      r = !1,
      n = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms",
      ],
      i,
      o,
      s = n.length;
    for (i = 0; i < s; i += 1) (o = n[i]), (r = r || we(e, o));
    return t && r;
  }
  function jR(e) {
    var t = kr(e),
      r = !1;
    return (
      t &&
        (r =
          e.filter(function (n) {
            return !dn(n) && fA(e);
          }).length === 0),
      t && r
    );
  }
  function FR(e) {
    var t = ci(e) && !up(e),
      r = !1,
      n = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      i,
      o;
    for (i = 0; i < n.length; i += 1) (o = n[i]), (r = r || we(e, o));
    return t && r;
  }
  function LR(e, t) {
    var r = e.diff(t, "days", !0);
    return r < -6
      ? "sameElse"
      : r < -1
      ? "lastWeek"
      : r < 0
      ? "lastDay"
      : r < 1
      ? "sameDay"
      : r < 2
      ? "nextDay"
      : r < 7
      ? "nextWeek"
      : "sameElse";
  }
  function UR(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? QR(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : FR(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)));
    var r = e || Pe(),
      n = Ip(r, this).startOf("day"),
      i = V.calendarFormat(this, n) || "sameElse",
      o = t && (Yr(t[i]) ? t[i].call(this, r) : t[i]);
    return this.format(o || this.localeData().calendar(i, this, Pe(r)));
  }
  function YR() {
    return new Ws(this);
  }
  function WR(e, t) {
    var r = Er(e) ? e : Pe(e);
    return this.isValid() && r.isValid()
      ? ((t = ar(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() > r.valueOf()
          : r.valueOf() < this.clone().startOf(t).valueOf())
      : !1;
  }
  function JR(e, t) {
    var r = Er(e) ? e : Pe(e);
    return this.isValid() && r.isValid()
      ? ((t = ar(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() < r.valueOf()
          : this.clone().endOf(t).valueOf() < r.valueOf())
      : !1;
  }
  function HR(e, t, r, n) {
    var i = Er(e) ? e : Pe(e),
      o = Er(t) ? t : Pe(t);
    return this.isValid() && i.isValid() && o.isValid()
      ? ((n = n || "()"),
        (n[0] === "(" ? this.isAfter(i, r) : !this.isBefore(i, r)) &&
          (n[1] === ")" ? this.isBefore(o, r) : !this.isAfter(o, r)))
      : !1;
  }
  function VR(e, t) {
    var r = Er(e) ? e : Pe(e),
      n;
    return this.isValid() && r.isValid()
      ? ((t = ar(t) || "millisecond"),
        t === "millisecond"
          ? this.valueOf() === r.valueOf()
          : ((n = r.valueOf()),
            this.clone().startOf(t).valueOf() <= n &&
              n <= this.clone().endOf(t).valueOf()))
      : !1;
  }
  function $R(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function GR(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function XR(e, t, r) {
    var n, i, o;
    if (!this.isValid()) return NaN;
    if (((n = Ip(e, this)), !n.isValid())) return NaN;
    switch (((i = (n.utcOffset() - this.utcOffset()) * 6e4), (t = ar(t)), t)) {
      case "year":
        o = Wa(this, n) / 12;
        break;
      case "month":
        o = Wa(this, n);
        break;
      case "quarter":
        o = Wa(this, n) / 3;
        break;
      case "second":
        o = (this - n) / 1e3;
        break;
      case "minute":
        o = (this - n) / 6e4;
        break;
      case "hour":
        o = (this - n) / 36e5;
        break;
      case "day":
        o = (this - n - i) / 864e5;
        break;
      case "week":
        o = (this - n - i) / 6048e5;
        break;
      default:
        o = this - n;
    }
    return r ? o : er(o);
  }
  function Wa(e, t) {
    if (e.date() < t.date()) return -Wa(t, e);
    var r = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      n = e.clone().add(r, "months"),
      i,
      o;
    return (
      t - n < 0
        ? ((i = e.clone().add(r - 1, "months")), (o = (t - n) / (n - i)))
        : ((i = e.clone().add(r + 1, "months")), (o = (t - n) / (i - n))),
      -(r + o) || 0
    );
  }
  V.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  V.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function KR() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function ZR(e) {
    if (!this.isValid()) return null;
    var t = e !== !0,
      r = t ? this.clone().utc() : this;
    return r.year() < 0 || r.year() > 9999
      ? Ua(
          r,
          t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        )
      : Yr(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace("Z", Ua(r, "Z"))
      : Ua(
          r,
          t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
  }
  function qR() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "",
      r,
      n,
      i,
      o;
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (t = "Z")),
      (r = "[" + e + '("]'),
      (n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
      (i = "-MM-DD[T]HH:mm:ss.SSS"),
      (o = t + '[")]'),
      this.format(r + n + i + o)
    );
  }
  function e4(e) {
    e || (e = this.isUtc() ? V.defaultFormatUtc : V.defaultFormat);
    var t = Ua(this, e);
    return this.localeData().postformat(t);
  }
  function t4(e, t) {
    return this.isValid() && ((Er(e) && e.isValid()) || Pe(e).isValid())
      ? Cr({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function r4(e) {
    return this.from(Pe(), e);
  }
  function n4(e, t) {
    return this.isValid() && ((Er(e) && e.isValid()) || Pe(e).isValid())
      ? Cr({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate();
  }
  function i4(e) {
    return this.to(Pe(), e);
  }
  function pA(e) {
    var t;
    return e === void 0
      ? this._locale._abbr
      : ((t = hn(e)), t != null && (this._locale = t), this);
  }
  var hA = sr(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function gA() {
    return this._locale;
  }
  var Ol = 1e3,
    oo = 60 * Ol,
    Tl = 60 * oo,
    mA = (365 * 400 + 97) * 24 * Tl;
  function so(e, t) {
    return ((e % t) + t) % t;
  }
  function yA(e, t, r) {
    return e < 100 && e >= 0
      ? new Date(e + 400, t, r) - mA
      : new Date(e, t, r).valueOf();
  }
  function vA(e, t, r) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - mA : Date.UTC(e, t, r);
  }
  function o4(e) {
    var t, r;
    if (((e = ar(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((r = this._isUTC ? vA : yA), e)) {
      case "year":
        t = r(this.year(), 0, 1);
        break;
      case "quarter":
        t = r(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        t = r(this.year(), this.month(), 1);
        break;
      case "week":
        t = r(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        t = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        t = r(this.year(), this.month(), this.date());
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t -= so(t + (this._isUTC ? 0 : this.utcOffset() * oo), Tl));
        break;
      case "minute":
        (t = this._d.valueOf()), (t -= so(t, oo));
        break;
      case "second":
        (t = this._d.valueOf()), (t -= so(t, Ol));
        break;
    }
    return this._d.setTime(t), V.updateOffset(this, !0), this;
  }
  function s4(e) {
    var t, r;
    if (((e = ar(e)), e === void 0 || e === "millisecond" || !this.isValid()))
      return this;
    switch (((r = this._isUTC ? vA : yA), e)) {
      case "year":
        t = r(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = r(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        t = r(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        t =
          r(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7
          ) - 1;
        break;
      case "day":
      case "date":
        t = r(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        (t = this._d.valueOf()),
          (t += Tl - so(t + (this._isUTC ? 0 : this.utcOffset() * oo), Tl) - 1);
        break;
      case "minute":
        (t = this._d.valueOf()), (t += oo - so(t, oo) - 1);
        break;
      case "second":
        (t = this._d.valueOf()), (t += Ol - so(t, Ol) - 1);
        break;
    }
    return this._d.setTime(t), V.updateOffset(this, !0), this;
  }
  function a4() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function l4() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function u4() {
    return new Date(this.valueOf());
  }
  function c4() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond(),
    ];
  }
  function d4() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds(),
    };
  }
  function f4() {
    return this.isValid() ? this.toISOString() : null;
  }
  function p4() {
    return cp(this);
  }
  function h4() {
    return In({}, le(this));
  }
  function g4() {
    return le(this).overflow;
  }
  function m4() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  ie("N", 0, 0, "eraAbbr");
  ie("NN", 0, 0, "eraAbbr");
  ie("NNN", 0, 0, "eraAbbr");
  ie("NNNN", 0, 0, "eraName");
  ie("NNNNN", 0, 0, "eraNarrow");
  ie("y", ["y", 1], "yo", "eraYear");
  ie("y", ["yy", 2], 0, "eraYear");
  ie("y", ["yyy", 3], 0, "eraYear");
  ie("y", ["yyyy", 4], 0, "eraYear");
  Z("N", Bp);
  Z("NN", Bp);
  Z("NNN", Bp);
  Z("NNNN", I4);
  Z("NNNNN", B4);
  be(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, r, n) {
    var i = r._locale.erasParse(e, n, r._strict);
    i ? (le(r).era = i) : (le(r).invalidEra = e);
  });
  Z("y", Ro);
  Z("yy", Ro);
  Z("yyy", Ro);
  Z("yyyy", Ro);
  Z("yo", R4);
  be(["y", "yy", "yyy", "yyyy"], St);
  be(["yo"], function (e, t, r, n) {
    var i;
    r._locale._eraYearOrdinalRegex &&
      (i = e.match(r._locale._eraYearOrdinalRegex)),
      r._locale.eraYearOrdinalParse
        ? (t[St] = r._locale.eraYearOrdinalParse(e, i))
        : (t[St] = parseInt(e, 10));
  });
  function y4(e, t) {
    var r,
      n,
      i,
      o = this._eras || hn("en")._eras;
    for (r = 0, n = o.length; r < n; ++r) {
      switch (typeof o[r].since) {
        case "string":
          (i = V(o[r].since).startOf("day")), (o[r].since = i.valueOf());
          break;
      }
      switch (typeof o[r].until) {
        case "undefined":
          o[r].until = 1 / 0;
          break;
        case "string":
          (i = V(o[r].until).startOf("day").valueOf()),
            (o[r].until = i.valueOf());
          break;
      }
    }
    return o;
  }
  function v4(e, t, r) {
    var n,
      i,
      o = this.eras(),
      s,
      a,
      l;
    for (e = e.toUpperCase(), n = 0, i = o.length; n < i; ++n)
      if (
        ((s = o[n].name.toUpperCase()),
        (a = o[n].abbr.toUpperCase()),
        (l = o[n].narrow.toUpperCase()),
        r)
      )
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (a === e) return o[n];
            break;
          case "NNNN":
            if (s === e) return o[n];
            break;
          case "NNNNN":
            if (l === e) return o[n];
            break;
        }
      else if ([s, a, l].indexOf(e) >= 0) return o[n];
  }
  function A4(e, t) {
    var r = e.since <= e.until ? 1 : -1;
    return t === void 0
      ? V(e.since).year()
      : V(e.since).year() + (t - e.offset) * r;
  }
  function w4() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].name;
    return "";
  }
  function x4() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].narrow;
    return "";
  }
  function S4() {
    var e,
      t,
      r,
      n = this.localeData().eras();
    for (e = 0, t = n.length; e < t; ++e)
      if (
        ((r = this.clone().startOf("day").valueOf()),
        (n[e].since <= r && r <= n[e].until) ||
          (n[e].until <= r && r <= n[e].since))
      )
        return n[e].abbr;
    return "";
  }
  function k4() {
    var e,
      t,
      r,
      n,
      i = this.localeData().eras();
    for (e = 0, t = i.length; e < t; ++e)
      if (
        ((r = i[e].since <= i[e].until ? 1 : -1),
        (n = this.clone().startOf("day").valueOf()),
        (i[e].since <= n && n <= i[e].until) ||
          (i[e].until <= n && n <= i[e].since))
      )
        return (this.year() - V(i[e].since).year()) * r + i[e].offset;
    return this.year();
  }
  function E4(e) {
    return (
      we(this, "_erasNameRegex") || Rp.call(this),
      e ? this._erasNameRegex : this._erasRegex
    );
  }
  function C4(e) {
    return (
      we(this, "_erasAbbrRegex") || Rp.call(this),
      e ? this._erasAbbrRegex : this._erasRegex
    );
  }
  function b4(e) {
    return (
      we(this, "_erasNarrowRegex") || Rp.call(this),
      e ? this._erasNarrowRegex : this._erasRegex
    );
  }
  function Bp(e, t) {
    return t.erasAbbrRegex(e);
  }
  function I4(e, t) {
    return t.erasNameRegex(e);
  }
  function B4(e, t) {
    return t.erasNarrowRegex(e);
  }
  function R4(e, t) {
    return t._eraYearOrdinalRegex || Ro;
  }
  function Rp() {
    var e = [],
      t = [],
      r = [],
      n = [],
      i,
      o,
      s,
      a,
      l,
      d = this.eras();
    for (i = 0, o = d.length; i < o; ++i)
      (s = nn(d[i].name)),
        (a = nn(d[i].abbr)),
        (l = nn(d[i].narrow)),
        t.push(s),
        e.push(a),
        r.push(l),
        n.push(s),
        n.push(a),
        n.push(l);
    (this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + r.join("|") + ")", "i"));
  }
  ie(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  ie(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function Eu(e, t) {
    ie(0, [e, e.length], 0, t);
  }
  Eu("gggg", "weekYear");
  Eu("ggggg", "weekYear");
  Eu("GGGG", "isoWeekYear");
  Eu("GGGGG", "isoWeekYear");
  Z("G", Au);
  Z("g", Au);
  Z("GG", ze, Gt);
  Z("gg", ze, Gt);
  Z("GGGG", mp, gp);
  Z("gggg", mp, gp);
  Z("GGGGG", vu, mu);
  Z("ggggg", vu, mu);
  Hs(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, r, n) {
    t[n.substr(0, 2)] = he(e);
  });
  Hs(["gg", "GG"], function (e, t, r, n) {
    t[n] = V.parseTwoDigitYear(e);
  });
  function D4(e) {
    return AA.call(
      this,
      e,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function O4(e) {
    return AA.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function T4() {
    return on(this.year(), 1, 4);
  }
  function M4() {
    return on(this.isoWeekYear(), 1, 4);
  }
  function P4() {
    var e = this.localeData()._week;
    return on(this.year(), e.dow, e.doy);
  }
  function z4() {
    var e = this.localeData()._week;
    return on(this.weekYear(), e.dow, e.doy);
  }
  function AA(e, t, r, n, i) {
    var o;
    return e == null
      ? Os(this, n, i).year
      : ((o = on(e, n, i)), t > o && (t = o), N4.call(this, e, t, r, n, i));
  }
  function N4(e, t, r, n, i) {
    var o = Zv(e, t, r, n, i),
      s = Ds(o.year, 0, o.dayOfYear);
    return (
      this.year(s.getUTCFullYear()),
      this.month(s.getUTCMonth()),
      this.date(s.getUTCDate()),
      this
    );
  }
  ie("Q", 0, "Qo", "quarter");
  Z("Q", Lv);
  be("Q", function (e, t) {
    t[en] = (he(e) - 1) * 3;
  });
  function Q4(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3));
  }
  ie("D", ["DD", 2], "Do", "date");
  Z("D", ze, Do);
  Z("DD", ze, Gt);
  Z("Do", function (e, t) {
    return e
      ? t._dayOfMonthOrdinalParse || t._ordinalParse
      : t._dayOfMonthOrdinalParseLenient;
  });
  be(["D", "DD"], Pr);
  be("Do", function (e, t) {
    t[Pr] = he(e.match(ze)[0]);
  });
  var wA = Oo("Date", !0);
  ie("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  Z("DDD", yu);
  Z("DDDD", Uv);
  be(["DDD", "DDDD"], function (e, t, r) {
    r._dayOfYear = he(e);
  });
  function _4(e) {
    var t =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  ie("m", ["mm", 2], 0, "minute");
  Z("m", ze, yp);
  Z("mm", ze, Gt);
  be(["m", "mm"], mr);
  var j4 = Oo("Minutes", !1);
  ie("s", ["ss", 2], 0, "second");
  Z("s", ze, yp);
  Z("ss", ze, Gt);
  be(["s", "ss"], tn);
  var F4 = Oo("Seconds", !1);
  ie("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  ie(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  ie(0, ["SSS", 3], 0, "millisecond");
  ie(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  ie(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  ie(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  ie(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  ie(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  ie(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  Z("S", yu, Lv);
  Z("SS", yu, Gt);
  Z("SSS", yu, Uv);
  var Bn, xA;
  for (Bn = "SSSS"; Bn.length <= 9; Bn += "S") Z(Bn, Ro);
  function L4(e, t) {
    t[si] = he(("0." + e) * 1e3);
  }
  for (Bn = "S"; Bn.length <= 9; Bn += "S") be(Bn, L4);
  xA = Oo("Milliseconds", !1);
  ie("z", 0, 0, "zoneAbbr");
  ie("zz", 0, 0, "zoneName");
  function U4() {
    return this._isUTC ? "UTC" : "";
  }
  function Y4() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var W = Ws.prototype;
  W.add = zR;
  W.calendar = UR;
  W.clone = YR;
  W.diff = XR;
  W.endOf = s4;
  W.format = e4;
  W.from = t4;
  W.fromNow = r4;
  W.to = n4;
  W.toNow = i4;
  W.get = qB;
  W.invalidAt = g4;
  W.isAfter = WR;
  W.isBefore = JR;
  W.isBetween = HR;
  W.isSame = VR;
  W.isSameOrAfter = $R;
  W.isSameOrBefore = GR;
  W.isValid = p4;
  W.lang = hA;
  W.locale = pA;
  W.localeData = gA;
  W.max = pR;
  W.min = fR;
  W.parsingFlags = h4;
  W.set = e2;
  W.startOf = o4;
  W.subtract = NR;
  W.toArray = c4;
  W.toObject = d4;
  W.toDate = u4;
  W.toISOString = ZR;
  W.inspect = qR;
  typeof Symbol < "u" &&
    Symbol.for != null &&
    (W[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    });
  W.toJSON = f4;
  W.toString = KR;
  W.unix = l4;
  W.valueOf = a4;
  W.creationData = m4;
  W.eraName = w4;
  W.eraNarrow = x4;
  W.eraAbbr = S4;
  W.eraYear = k4;
  W.year = Jv;
  W.isLeapYear = ZB;
  W.weekYear = D4;
  W.isoWeekYear = O4;
  W.quarter = W.quarters = Q4;
  W.month = Xv;
  W.daysInMonth = u2;
  W.week = W.weeks = y2;
  W.isoWeek = W.isoWeeks = v2;
  W.weeksInYear = P4;
  W.weeksInWeekYear = z4;
  W.isoWeeksInYear = T4;
  W.isoWeeksInISOWeekYear = M4;
  W.date = wA;
  W.day = W.days = O2;
  W.weekday = T2;
  W.isoWeekday = M2;
  W.dayOfYear = _4;
  W.hour = W.hours = F2;
  W.minute = W.minutes = j4;
  W.second = W.seconds = F4;
  W.millisecond = W.milliseconds = xA;
  W.utcOffset = SR;
  W.utc = ER;
  W.local = CR;
  W.parseZone = bR;
  W.hasAlignedHourOffset = IR;
  W.isDST = BR;
  W.isLocal = DR;
  W.isUtcOffset = OR;
  W.isUtc = uA;
  W.isUTC = uA;
  W.zoneAbbr = U4;
  W.zoneName = Y4;
  W.dates = sr("dates accessor is deprecated. Use date instead.", wA);
  W.months = sr("months accessor is deprecated. Use month instead", Xv);
  W.years = sr("years accessor is deprecated. Use year instead", Jv);
  W.zone = sr(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    kR
  );
  W.isDSTShifted = sr(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    RR
  );
  function W4(e) {
    return Pe(e * 1e3);
  }
  function J4() {
    return Pe.apply(null, arguments).parseZone();
  }
  function SA(e) {
    return e;
  }
  var xe = fp.prototype;
  xe.calendar = DB;
  xe.longDateFormat = PB;
  xe.invalidDate = NB;
  xe.ordinal = jB;
  xe.preparse = SA;
  xe.postformat = SA;
  xe.relativeTime = LB;
  xe.pastFuture = UB;
  xe.set = BB;
  xe.eras = y4;
  xe.erasParse = v4;
  xe.erasConvertYear = A4;
  xe.erasAbbrRegex = C4;
  xe.erasNameRegex = E4;
  xe.erasNarrowRegex = b4;
  xe.months = o2;
  xe.monthsShort = s2;
  xe.monthsParse = l2;
  xe.monthsRegex = d2;
  xe.monthsShortRegex = c2;
  xe.week = p2;
  xe.firstDayOfYear = m2;
  xe.firstDayOfWeek = g2;
  xe.weekdays = b2;
  xe.weekdaysMin = B2;
  xe.weekdaysShort = I2;
  xe.weekdaysParse = D2;
  xe.weekdaysRegex = P2;
  xe.weekdaysShortRegex = z2;
  xe.weekdaysMinRegex = N2;
  xe.isPM = _2;
  xe.meridiem = L2;
  function Ml(e, t, r, n) {
    var i = hn(),
      o = Ur().set(n, t);
    return i[r](o, e);
  }
  function kA(e, t, r) {
    if ((dn(e) && ((t = e), (e = void 0)), (e = e || ""), t != null))
      return Ml(e, t, r, "month");
    var n,
      i = [];
    for (n = 0; n < 12; n++) i[n] = Ml(e, n, r, "month");
    return i;
  }
  function Dp(e, t, r, n) {
    typeof e == "boolean"
      ? (dn(t) && ((r = t), (t = void 0)), (t = t || ""))
      : ((t = e),
        (r = t),
        (e = !1),
        dn(t) && ((r = t), (t = void 0)),
        (t = t || ""));
    var i = hn(),
      o = e ? i._week.dow : 0,
      s,
      a = [];
    if (r != null) return Ml(t, (r + o) % 7, n, "day");
    for (s = 0; s < 7; s++) a[s] = Ml(t, (s + o) % 7, n, "day");
    return a;
  }
  function H4(e, t) {
    return kA(e, t, "months");
  }
  function V4(e, t) {
    return kA(e, t, "monthsShort");
  }
  function $4(e, t, r) {
    return Dp(e, t, r, "weekdays");
  }
  function G4(e, t, r) {
    return Dp(e, t, r, "weekdaysShort");
  }
  function X4(e, t, r) {
    return Dp(e, t, r, "weekdaysMin");
  }
  _n("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10,
        r =
          he((e % 100) / 10) === 1
            ? "th"
            : t === 1
            ? "st"
            : t === 2
            ? "nd"
            : t === 3
            ? "rd"
            : "th";
      return e + r;
    },
  });
  V.lang = sr("moment.lang is deprecated. Use moment.locale instead.", _n);
  V.langData = sr(
    "moment.langData is deprecated. Use moment.localeData instead.",
    hn
  );
  var Hr = Math.abs;
  function K4() {
    var e = this._data;
    return (
      (this._milliseconds = Hr(this._milliseconds)),
      (this._days = Hr(this._days)),
      (this._months = Hr(this._months)),
      (e.milliseconds = Hr(e.milliseconds)),
      (e.seconds = Hr(e.seconds)),
      (e.minutes = Hr(e.minutes)),
      (e.hours = Hr(e.hours)),
      (e.months = Hr(e.months)),
      (e.years = Hr(e.years)),
      this
    );
  }
  function EA(e, t, r, n) {
    var i = Cr(t, r);
    return (
      (e._milliseconds += n * i._milliseconds),
      (e._days += n * i._days),
      (e._months += n * i._months),
      e._bubble()
    );
  }
  function Z4(e, t) {
    return EA(this, e, t, 1);
  }
  function q4(e, t) {
    return EA(this, e, t, -1);
  }
  function _g(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function eD() {
    var e = this._milliseconds,
      t = this._days,
      r = this._months,
      n = this._data,
      i,
      o,
      s,
      a,
      l;
    return (
      (e >= 0 && t >= 0 && r >= 0) ||
        (e <= 0 && t <= 0 && r <= 0) ||
        ((e += _g(jd(r) + t) * 864e5), (t = 0), (r = 0)),
      (n.milliseconds = e % 1e3),
      (i = er(e / 1e3)),
      (n.seconds = i % 60),
      (o = er(i / 60)),
      (n.minutes = o % 60),
      (s = er(o / 60)),
      (n.hours = s % 24),
      (t += er(s / 24)),
      (l = er(CA(t))),
      (r += l),
      (t -= _g(jd(l))),
      (a = er(r / 12)),
      (r %= 12),
      (n.days = t),
      (n.months = r),
      (n.years = a),
      this
    );
  }
  function CA(e) {
    return (e * 4800) / 146097;
  }
  function jd(e) {
    return (e * 146097) / 4800;
  }
  function tD(e) {
    if (!this.isValid()) return NaN;
    var t,
      r,
      n = this._milliseconds;
    if (((e = ar(e)), e === "month" || e === "quarter" || e === "year"))
      switch (((t = this._days + n / 864e5), (r = this._months + CA(t)), e)) {
        case "month":
          return r;
        case "quarter":
          return r / 3;
        case "year":
          return r / 12;
      }
    else
      switch (((t = this._days + Math.round(jd(this._months))), e)) {
        case "week":
          return t / 7 + n / 6048e5;
        case "day":
          return t + n / 864e5;
        case "hour":
          return t * 24 + n / 36e5;
        case "minute":
          return t * 1440 + n / 6e4;
        case "second":
          return t * 86400 + n / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + n;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function gn(e) {
    return function () {
      return this.as(e);
    };
  }
  var bA = gn("ms"),
    rD = gn("s"),
    nD = gn("m"),
    iD = gn("h"),
    oD = gn("d"),
    sD = gn("w"),
    aD = gn("M"),
    lD = gn("Q"),
    uD = gn("y"),
    cD = bA;
  function dD() {
    return Cr(this);
  }
  function fD(e) {
    return (e = ar(e)), this.isValid() ? this[e + "s"]() : NaN;
  }
  function bi(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var pD = bi("milliseconds"),
    hD = bi("seconds"),
    gD = bi("minutes"),
    mD = bi("hours"),
    yD = bi("days"),
    vD = bi("months"),
    AD = bi("years");
  function wD() {
    return er(this.days() / 7);
  }
  var Gr = Math.round,
    Xi = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function xD(e, t, r, n, i) {
    return i.relativeTime(t || 1, !!r, e, n);
  }
  function SD(e, t, r, n) {
    var i = Cr(e).abs(),
      o = Gr(i.as("s")),
      s = Gr(i.as("m")),
      a = Gr(i.as("h")),
      l = Gr(i.as("d")),
      d = Gr(i.as("M")),
      p = Gr(i.as("w")),
      h = Gr(i.as("y")),
      y =
        (o <= r.ss && ["s", o]) ||
        (o < r.s && ["ss", o]) ||
        (s <= 1 && ["m"]) ||
        (s < r.m && ["mm", s]) ||
        (a <= 1 && ["h"]) ||
        (a < r.h && ["hh", a]) ||
        (l <= 1 && ["d"]) ||
        (l < r.d && ["dd", l]);
    return (
      r.w != null && (y = y || (p <= 1 && ["w"]) || (p < r.w && ["ww", p])),
      (y = y ||
        (d <= 1 && ["M"]) ||
        (d < r.M && ["MM", d]) ||
        (h <= 1 && ["y"]) || ["yy", h]),
      (y[2] = t),
      (y[3] = +e > 0),
      (y[4] = n),
      xD.apply(null, y)
    );
  }
  function kD(e) {
    return e === void 0 ? Gr : typeof e == "function" ? ((Gr = e), !0) : !1;
  }
  function ED(e, t) {
    return Xi[e] === void 0
      ? !1
      : t === void 0
      ? Xi[e]
      : ((Xi[e] = t), e === "s" && (Xi.ss = t - 1), !0);
  }
  function CD(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var r = !1,
      n = Xi,
      i,
      o;
    return (
      typeof e == "object" && ((t = e), (e = !1)),
      typeof e == "boolean" && (r = e),
      typeof t == "object" &&
        ((n = Object.assign({}, Xi, t)),
        t.s != null && t.ss == null && (n.ss = t.s - 1)),
      (i = this.localeData()),
      (o = SD(this, !r, n, i)),
      r && (o = i.pastFuture(+this, o)),
      i.postformat(o)
    );
  }
  var gc = Math.abs;
  function Mi(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Cu() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e = gc(this._milliseconds) / 1e3,
      t = gc(this._days),
      r = gc(this._months),
      n,
      i,
      o,
      s,
      a = this.asSeconds(),
      l,
      d,
      p,
      h;
    return a
      ? ((n = er(e / 60)),
        (i = er(n / 60)),
        (e %= 60),
        (n %= 60),
        (o = er(r / 12)),
        (r %= 12),
        (s = e ? e.toFixed(3).replace(/\.?0+$/, "") : ""),
        (l = a < 0 ? "-" : ""),
        (d = Mi(this._months) !== Mi(a) ? "-" : ""),
        (p = Mi(this._days) !== Mi(a) ? "-" : ""),
        (h = Mi(this._milliseconds) !== Mi(a) ? "-" : ""),
        l +
          "P" +
          (o ? d + o + "Y" : "") +
          (r ? d + r + "M" : "") +
          (t ? p + t + "D" : "") +
          (i || n || e ? "T" : "") +
          (i ? h + i + "H" : "") +
          (n ? h + n + "M" : "") +
          (e ? h + s + "S" : ""))
      : "P0D";
  }
  var me = ku.prototype;
  me.isValid = vR;
  me.abs = K4;
  me.add = Z4;
  me.subtract = q4;
  me.as = tD;
  me.asMilliseconds = bA;
  me.asSeconds = rD;
  me.asMinutes = nD;
  me.asHours = iD;
  me.asDays = oD;
  me.asWeeks = sD;
  me.asMonths = aD;
  me.asQuarters = lD;
  me.asYears = uD;
  me.valueOf = cD;
  me._bubble = eD;
  me.clone = dD;
  me.get = fD;
  me.milliseconds = pD;
  me.seconds = hD;
  me.minutes = gD;
  me.hours = mD;
  me.days = yD;
  me.weeks = wD;
  me.months = vD;
  me.years = AD;
  me.humanize = CD;
  me.toISOString = Cu;
  me.toString = Cu;
  me.toJSON = Cu;
  me.locale = pA;
  me.localeData = gA;
  me.toIsoString = sr(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Cu
  );
  me.lang = hA;
  ie("X", 0, 0, "unix");
  ie("x", 0, 0, "valueOf");
  Z("x", Au);
  Z("X", HB);
  be("X", function (e, t, r) {
    r._d = new Date(parseFloat(e) * 1e3);
  });
  be("x", function (e, t, r) {
    r._d = new Date(he(e));
  }); //! moment.js
  V.version = "2.30.1";
  bB(Pe);
  V.fn = W;
  V.min = hR;
  V.max = gR;
  V.now = mR;
  V.utc = Ur;
  V.unix = W4;
  V.months = H4;
  V.isDate = Ys;
  V.locale = _n;
  V.invalid = gu;
  V.duration = Cr;
  V.isMoment = Er;
  V.weekdays = $4;
  V.parseZone = J4;
  V.localeData = hn;
  V.isDuration = Ya;
  V.monthsShort = V4;
  V.weekdaysMin = X4;
  V.defineLocale = Sp;
  V.updateLocale = J2;
  V.locales = H2;
  V.weekdaysShort = G4;
  V.normalizeUnits = ar;
  V.relativeTimeRounding = kD;
  V.relativeTimeThreshold = ED;
  V.calendarFormat = LR;
  V.prototype = W;
  V.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  };
  const bD = z.div`
    table, th, td {
     border: 1px solid black;
    }
  
    table {
    border-collapse: collapse;
    }

    table span {
        font-weight: bold;
        text-align: left;
    }

    .link {
        text-decoration: underline;
        color: blue;
        cursor: pointer;
    }
`;
  function ID() {
    var e = V("2024-03-21 18:47:41", "YYYY-MM-DD HH:mm:ss"),
      t = V(),
      r = t.diff(e, "days");
    return f.jsx(bD, {
      children: f.jsx($n, {
        children: f.jsx(Ve, {
          className: "cancel",
          variant: "well",
          style: { width: "100%", backgroundColor: "white" },
          children: f.jsx("table", {
            style: { width: "100%", textAlign: "center" },
            children: f.jsxs("tbody", {
              children: [
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " " }),
                    f.jsx("td", { style: { width: "auto" }, children: " A" }),
                    f.jsx("td", { style: { width: "auto" }, children: " B" }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 1" }),
                    f.jsxs("td", {
                      children: [" ", f.jsx("span", { children: "Ticker" })],
                    }),
                    f.jsx("td", { style: { width: "auto" }, children: "COZY" }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 2" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [" ", f.jsx("span", { children: "Price" })],
                    }),
                    f.jsx("td", { style: { width: "auto" }, children: " -" }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 3" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("span", { children: "Market Cap" }),
                      ],
                    }),
                    f.jsx("td", { style: { width: "auto" }, children: " -" }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 4" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("span", { children: "Liquidity Burnt" }),
                      ],
                    }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("a", {
                          href: "https://solscan.io/tx/4o2FKydAB9gmYo6w9dwAwLSf4fPCXii1Fegh8S73RmdgztsXEuVvDdDDnijXVimL22KA4JsAUAqdDGQAKvmVtw9m",
                          target: "_blank",
                          className: "link",
                          children: "Link",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 5" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("span", { children: "Minting Auth Revoked" }),
                      ],
                    }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("a", {
                          href: "https://solscan.io/tx/2P6orxtzEY3K9UZ6YfFiWYXPJNWDssao1ntkrPLSgZ8oGoiTFEeAcwA7m8wsXbcZDKqUDGXMxezkdse9hwfQ9e51",
                          target: "_blank",
                          className: "link",
                          children: "Link",
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 6" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [
                        " ",
                        f.jsx("span", { children: "Freeze Auth Revoked" }),
                      ],
                    }),
                    f.jsx("td", {
                      style: { width: "auto" },
                      children: f.jsx("a", {
                        href: "https://solscan.io/tx/4vWqNYmGmpSZXv2JR5MztMgk7RGSDs5Zw3M5RST2c9Ze4a8BcJu5HC9ib1z18qQf26VAvfpHrpitfrcPWnHSPZkD",
                        target: "_blank",
                        className: "link",
                        children: "Link",
                      }),
                    }),
                  ],
                }),
                f.jsxs("tr", {
                  children: [
                    f.jsx("td", { style: { width: "10%" }, children: " 7" }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [" ", f.jsx("span", { children: "DoB" })],
                    }),
                    f.jsxs("td", {
                      style: { width: "auto" },
                      children: [" ", r, " days ago"],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }
  const BD = "/assets/cozyMedia-B58TPYK-.mp4",
    RD =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAACXBIWXMAABcRAAAXEQHKJvM/AAAA50lEQVRYhe2X/Q2CMBDF7xkHcCNxI0fQTRylboAbOAIbPP+phpSr5aNHS8IvudA0UF7eu9ACklILR20SgPPDluS1qBgROa8loE9MzJcTgCacJOksxEDrGQB/G4kkLMQcLBadSyomlV6D/yDZLBUzKyaNHNHNckYjR6Nnc0Zjqlvbb+CxALj54ZvkI/kAyUGJCDOX094TVlUxreXMKLeqcmYXE6OkmC6cMP3O9HiJSHhibMOb1hLTjdmnrMU8/XXggsa+UcbIGdNl6QJVnfS2H9P+q+K5m6vwJBvYKhKNqmJSnSlFVc58ALDQxpXP9DpgAAAAAElFTkSuQmCC",
    DD =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAiCAYAAADVhWD8AAAACXBIWXMAABcRAAAXEQHKJvM/AAAAjElEQVRYhe3YsQ2AMBBDUR9igIzCBjAiIzAKo7CJaSgiJF+kFJDCr70DfSlVEiQxiunvgNqcDSNiB7CoOcnttb8A2JNfHiSPrpgnZG3s1Epj/8w+HuqYHKM4RnGM4hjFMYpjFMcojlEcozhGcYziGMUxSmRPIs9Fvqg5yfO1X5A8FAC4SF5dMV8b6phuVEscuzxgKQ4AAAAASUVORK5CYII=",
    OD =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFESURBVHgB7VdbjoMwDIxXey+4WZybsSfLVsTTNpO4gv7gSvUPcl7yjJ9Iel8q6ZLekJ90sZy2uo7IvYcPvR2fgQGxaWI3t23rttd1ldk9j5HLGfj1NoCgaNNzbt9iC6r9+WVZbF33e6Iq8/dwv+3HY8BDDpcCGHwP5J5wLGQwYHocBm6GGcSmM/KzJcPLAl6/vg4Aeda28Df4Fsib4SI9E7VSYaR9L//BRNw6wMgZCLIAjExa42f0ghcMMPJeBwOMHJUuPSrevHvafohuuFsIM4EgIy0IOYJ8gGXZUErZv0q9YDgeKQt2SwVMGAPFDuTcx0Dl4K6HBqTHcXsIWRIqCzqo3O8zufReMdNrQRZ4MRGvDnDXEm3raI73PD84DwA5+x4StxJ6/RsDA4i4TcHT+948wDHx/TP6PAaeZDICnJfLGfgHZvKFdzHJZCcAAAAASUVORK5CYII=",
    TD =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgB3VdbEoMgDMRO7wXeDE8mnIw6kK0lghR+QPZDjFGH3TyARbTDMXsRDXiJzqie9b4H5tZqb2t9Gav++RwFwFwp+pC+NMZE7ymlJlOAM982HfkVOaSU5N/8mMuF47n79XdX4J1zcOYoexBD7MG8BM4cGEcBMAY488ZGl2UO9FfgjHVgaq0lF2KLicdKIPudc+IOpc44UhVgoobZ6RxAFSzUEktK5DBuH7gyj22+BuSAKsihvwLrGm6OavCw1vhRSkWvpHMA6/8UVeBneChBVLS/osWfy3tbDpQwVBVEsYIiyI3Kjc4X468FN74oN6AEsv/f/QCYD7sfqAlspAT6B68G2I/ZE7akdlKJ+U9GCcxxOv4AxM2Gfz7yxvwAAAAASUVORK5CYII=",
    MD = z.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.25rem;

    .controlButtonContainer{
    display: flex;
    gap: 0.25rem;
    }
    .controlIcon{
        display: flex;/Users/mattdavz/Downloads/fire-cozy-1.mp3
        justify-content: center;
        align-items: center;
        cursor:pointer;
    }

    .controlIcon button{
        background-color: transparent;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .controlIcon img{
        width: 24px;
        height: 24px;
        background-color: transparent;
        cursor:pointer;
    }
`;
  function PD({ playAudio: e, isPlaying: t, toggleMute: r }) {
    const [n, i] = B.useState(!1);
    let o = n ? TD : OD,
      s = 0;
    const a = () => {
      s === 0 && (s++, e(), i(!n)), i(!n), r();
    };
    return f.jsxs(MD, {
      children: [
        f.jsx("p", { children: "Cozy Pepe Computer Generated Lo-fi #001" }),
        f.jsxs("div", {
          className: "controlButtonContainer",
          children: [
            f.jsx(Ve, {
              variant: "well",
              onClick: t,
              className: "controlIcon play",
              children: f.jsx("button", {
                children: f.jsx("img", { src: RD, alt: "" }),
              }),
            }),
            f.jsx(Ve, {
              variant: "well",
              onClick: t,
              className: "controlIcon pause",
              children: f.jsx("button", {
                children: f.jsx("img", { src: DD, alt: "" }),
              }),
            }),
            f.jsx(Ve, {
              onClick: a,
              variant: "well",
              className: "controlIcon mute",
              children: f.jsx("button", {
                children: f.jsx("img", { src: o, alt: "" }),
              }),
            }),
          ],
        }),
      ],
    });
  }
  const zD = "/assets/fire-cozy-1-D3p6kidr.mp3",
    ND = z.div`
    .media{
        padding: 0;
        height: 400px;
        position: relative;
    }

    .video{
        width: 100%;
        height: 90%;
        object-fit: fill;
    }

`;
  function QD() {
    const e = B.useRef(null),
      t = B.useRef(null),
      [r, n] = B.useState(!0);
    B.useEffect(() => {
      t.current.muted = !0;
    }, []);
    const i = () => {
        t.current.play();
      },
      o = () => {
        const a = e.current,
          l = t.current;
        a && (r ? (a.pause(), l.pause()) : (a.play(), l.play()), n(!r));
      },
      s = () => {
        const a = t.current;
        a.muted = !a.muted;
      };
    return f.jsx(ND, {
      children: f.jsxs($n, {
        className: "media",
        children: [
          f.jsx("video", {
            "webkit-playsinline": !0,
            playsinline: !0,
            autoPlay: !0,
            muted: !0,
            className: "video",
            ref: e,
            loop: !0,
            children: f.jsx("source", { src: BD, type: "video/mp4" }),
          }),
          f.jsx("audio", { autoPlay: !0, ref: t, src: zD }),
          f.jsx(PD, {
            playAudio: () => i(),
            toggleMute: s,
            className: "controlsContainer",
            isPlaying: o,
          }),
        ],
      }),
    });
  }
  const _D = {
      cozyAmount: 0,
      MCVisibility: !1,
      LamboVisibility: !1,
      marketCap: 5e8,
    },
    IA = gv({
      name: "calculator",
      initialState: _D,
      reducers: {
        setCozyAmount: (e, t) => {
          typeof t.payload == "number"
            ? (e.cozyAmount = t.payload)
            : typeof t.payload == "string" &&
              ((t.payload = t.payload.split(",").join("")),
              (e.cozyAmount = Number(t.payload)));
        },
        delCozyAmount: (e) => {
          let t = e.cozyAmount;
          typeof t == "number" && e
            ? ((t = t.toString()),
              (t = t.slice(0, -1)),
              (t = Number(t)),
              (e.cozyAmount = t))
            : ((t = t.split(",").join("")),
              (t = t.slice(0, -1)),
              (t = Number(t)),
              (e.cozyAmount = t));
        },
      },
    }),
    {
      delCozyAmount: jD,
      setCozyAmount: jg,
      toggleMCVisibility: fT,
      toggleLamboVisibility: pT,
    } = IA.actions,
    FD = IA.reducer,
    LD = z.div`
    text-align: center;

    .keypad {
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
        gap: 0.25rem;
        margin-top: 0.5rem;
        
    }

    .topButtons {
        display:grid;
        grid-template-columns: repeat(3, 1fr); 
        margin-top: 0.5rem;
        gap: 0.25rem;
    }

    .container{
        padding:1rem;
    }

`;
  function UD() {
    const e = Bo(),
      t = ki((o) => o.calculator.cozyAmount),
      r = (o) => {
        const s = String(t);
        e(jg(s + o));
      },
      n = () => {
        e(jD());
      },
      i = (o) => {
        let s = o.target.value
          .split("$")
          .join("")
          .split(" ")
          .join("")
          .split(",")
          .join("");
        /^[\d,]*$/.test(s) && e(jg(Number(s)));
      };
    return f.jsx(LD, {
      children: f.jsxs("div", {
        className: "container",
        children: [
          f.jsx("h1", {
            className: "title",
            style: { fontWeight: "bold" },
            children: "ENTER $COZY AMOUNT:",
          }),
          f.jsx(Io, { value: t.toLocaleString(), onChange: (o) => i(o) }),
          f.jsxs("div", {
            className: "keyPadContainer",
            children: [
              f.jsxs("div", {
                className: "topButtons",
                children: [
                  f.jsx(ce, { onClick: () => n(), children: "< --" }),
                  f.jsx(ce, {
                    style: { background: "#F5DFDF" },
                    onClick: () => e(So("Market Cap Calc")),
                    children: "MC",
                  }),
                  f.jsx(ce, {
                    style: { background: "#F5DFDF" },
                    onClick: () => e(So("Lambo Calc")),
                    children: "LAMBO",
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "keypad",
                children: [
                  f.jsx(ce, { onClick: () => r("1"), children: "1" }),
                  f.jsx(ce, { onClick: () => r("2"), children: "2" }),
                  f.jsx(ce, { onClick: () => r("3"), children: "3" }),
                  f.jsx(ce, { children: "/" }),
                  f.jsx(ce, { onClick: () => r("4"), children: "4" }),
                  f.jsx(ce, { onClick: () => r("5"), children: "5" }),
                  f.jsx(ce, { onClick: () => r("6"), children: "6" }),
                  f.jsx(ce, { children: "*" }),
                  f.jsx(ce, { onClick: () => r("7"), children: "7" }),
                  f.jsx(ce, { onClick: () => r("8"), children: "8" }),
                  f.jsx(ce, { onClick: () => r("9"), children: "9" }),
                  f.jsx(ce, { children: "-" }),
                  f.jsx("div", {}),
                  f.jsx(ce, { onClick: () => r("0"), children: "0" }),
                  f.jsx(ce, { children: "." }),
                  f.jsx(ce, { onClick: () => n(), children: "+" }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
  const YD = z.div`
    .slideContainer {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
        justify-content: center;
        
    }

    
    .slider{
        margin: 0;
    }

    .row{
        margin: 0 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        margin: 0.75rem;
    }

    .display{
        text-align: center;
        background: white;
        height: 2rem;
        display: flex;
        align-items: center;
        padding-left: 0.75rem;
    }

    .total {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }

    .totalFrame{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        padding: 0.5rem;
    }

    .buyContainer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
    }
`;
  function WD() {
    const [e, t] = B.useState(5e8),
      r = ki((i) => i.calculator.cozyAmount),
      n = (i) => {
        let o = i.target.value
          .split("$")
          .join("")
          .split(" ")
          .join("")
          .split(",")
          .join("");
        /^[\d,]*$/.test(o) && t(Number(o));
      };
    return f.jsx(YD, {
      children: f.jsxs("div", {
        className: "container cancel",
        children: [
          f.jsxs("div", {
            className: "slideContainer",
            children: [
              f.jsx("p", { style: { textAlign: "center" }, children: "0 $" }),
              f.jsx("div", {
                className: "slider cancel",
                children: f.jsx(Kf, {
                  onChange: (i) => t(i),
                  style: { margin: 0 },
                  min: 0,
                  max: 1e9,
                  defaultValue: 5e8,
                  value: e,
                }),
              }),
              f.jsx("p", { style: { textAlign: "center" }, children: "1B $" }),
            ],
          }),
          f.jsxs("div", {
            className: "row",
            children: [
              f.jsx("h1", { children: "Market Cap:" }),
              f.jsx(Io, {
                style: { textAlign: "center" },
                value: `$ ${e.toLocaleString()}`,
                onChange: (i) => n(i),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "row",
            children: [
              f.jsx("h1", { children: "Cozy Tokens:" }),
              f.jsxs(Ve, {
                className: "display",
                variant: "field",
                children: [" ", r.toLocaleString(), " "],
              }),
            ],
          }),
          f.jsx("div", {
            className: "row",
            children: f.jsx("h1", { children: "Your Total:" }),
          }),
          f.jsx("div", {
            className: "total",
            children: f.jsx(Ve, {
              variant: "well",
              className: "totalFrame",
              children: f.jsx("h1", {
                style: { fontSize: "1.5rem" },
                children: `USD$${Math.floor((e / 1e9) * r).toLocaleString()} `,
              }),
            }),
          }),
          f.jsxs("div", {
            className: "buyContainer",
            children: [
              f.jsx(ce, {
                onClick: () =>
                  window.open(
                    "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA&fixed=in",
                    "_blank"
                  ),
                children: "Buy on Raydium",
              }),
              f.jsx(ce, {
                onClick: () =>
                  window.open("https://jup.ag/swap/SOL-COZY", "_blank"),
                children: "Buy on Jupiter",
              }),
            ],
          }),
        ],
      }),
    });
  }
  const JD = "/assets/lambo_pepe-BMvs8PcM.gif",
    HD = z.div`
    .slideContainer {
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        align-items: center;
        justify-content: center;
        
    }

    
    .slider{
        margin: 0;
    }

    .row{
        margin: 0 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        margin: 0.75rem;
    }

    .display{
        text-align: left;
        background: white;
        height: 2rem;
        display: flex;
        align-items: center;
        padding-left: 0.75rem;
    }

    .total {
        display: flex;
        justify-content: center;
        padding-bottom: 1rem;
    }

    .totalFrame{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        padding: 0.5rem;
    }

    .buyContainer{
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
    }
`;
  function VD() {
    const e = ki((i) => i.calculator.cozyAmount),
      [t, r] = B.useState(5e8),
      n = (i) => {
        let o = i.target.value
          .split("$")
          .join("")
          .split(" ")
          .join("")
          .split(",")
          .join("");
        /^[\d,]*$/.test(o) && r(Number(o));
      };
    return f.jsx(HD, {
      children: f.jsxs("div", {
        className: "container cancel",
        children: [
          f.jsx("img", { style: { width: "100%" }, src: JD, alt: "" }),
          f.jsxs("div", {
            className: "slideContainer",
            children: [
              f.jsx("p", { style: { textAlign: "center" }, children: "0 $" }),
              f.jsx("div", {
                className: "slider cancel",
                children: f.jsx(Kf, {
                  onChange: (i) => r(i),
                  style: { margin: 0 },
                  min: 0,
                  max: 1e9,
                  defaultValue: 5e8,
                  value: t,
                }),
              }),
              f.jsx("p", { style: { textAlign: "center" }, children: "1B $" }),
            ],
          }),
          f.jsxs("div", {
            className: "row",
            children: [
              f.jsx("h1", { children: "Market Cap:" }),
              f.jsx(Io, {
                style: { textAlign: "center" },
                value: `$ ${t.toLocaleString()}`,
                onChange: (i) => n(i),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "row",
            children: [
              f.jsx("h1", { children: "Cozy Tokens:" }),
              f.jsxs(Ve, {
                className: "display",
                variant: "field",
                children: [" ", e.toLocaleString(), " "],
              }),
            ],
          }),
          f.jsx("div", {
            className: "row",
            children: f.jsx("h1", { children: "Your Total:" }),
          }),
          f.jsx("div", {
            className: "total",
            children: f.jsx(Ve, {
              variant: "well",
              className: "totalFrame",
              children: f.jsx("h1", {
                style: { fontSize: "1.5rem" },
                children: `${(Math.floor((t / 1e9) * e) / 23e4).toFixed(
                  1
                )} LAMBOS`,
              }),
            }),
          }),
          f.jsxs("div", {
            className: "buyContainer",
            children: [
              f.jsx(ce, {
                onClick: () =>
                  window.open(
                    "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA&fixed=in",
                    "_blank"
                  ),
                children: "Buy on Raydium",
              }),
              f.jsx(ce, {
                onClick: () =>
                  window.open("https://jup.ag/swap/SOL-COZY", "_blank"),
                children: "Buy on Jupiter",
              }),
            ],
          }),
        ],
      }),
    });
  }
  const $D = "/assets/cmc-fr8dXGsT.png",
    GD = "/assets/alex-w11UWUFl.png",
    XD = "/assets/comet-_V6PJquH.jpeg",
    KD = "/assets/CapitalistOG-Cmhvb07f.png",
    ZD = "/assets/iq-DKDBolnK.png",
    qD = "/assets/raydium-Dvu3z_Lm.png",
    eO = "/assets/jupiter-CZo7mHTE.png",
    tO = "/assets/CG-Bnq06rhQ.png",
    rO = "/assets/don-BWSc_lVr.jpg",
    nO = "/assets/gandalf-CZoxY4BM.png",
    iO = "/assets/kolz-B-KMFy7J.png",
    oO = "/assets/GB-DiKCNRLh.png",
    sO = "/assets/GR-DoCGzjaw.png",
    aO = z.div`

    .container{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;

        padding: 1rem;

        text-align: center;
        justify-content:center;
        background-color: white;
    }

    .avatars{
        cursor: pointer;
    }

`,
    lO = [
      {
        icon: $D,
        name: "CMC",
        url: "https://coinmarketcap.com/currencies/cozy-pepe/",
      },
      {
        icon: tO,
        name: "CG",
        url: "https://www.coingecko.com/en/coins/cozy-pepe",
      },
      {
        icon: qD,
        name: "Raydium",
        url: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA&fixed=in",
      },
      { icon: eO, name: "Jupiter", url: "https://jup.ag/swap/SOL-COZY" },
      { icon: oO, name: "Gotbit", url: "https://twitter.com/gotbit_io" },
      { icon: GD, name: "Sir Alex", url: "https://t.me/+BAxPrV0a2ds3OTQ8" },
      { icon: KD, name: "Capitalist", url: "https://twitter.com/CapitalistOG" },
      {
        icon: nO,
        name: "GandalfCrypto",
        url: "https://twitter.com/gandalfcryptto",
      },
      { icon: XD, name: "Comet", url: "https://twitter.com/cometcalls" },
      {
        icon: sO,
        name: "Goonrich Girl",
        url: "https://twitter.com/GoonrichGirl",
      },
      { icon: iO, name: "Kolz", url: "https://twitter.com/Kolzinweb3" },
      { icon: rO, name: "The Don", url: "https://twitter.com/TheDonShiller" },
      { icon: ZD, name: "IQ.Wiki", url: "https://twitter.com/IQWIKI" },
    ],
    uO = ({ icon: e, name: t, url: r }) =>
      f.jsxs("div", {
        onClick: () => window.open(r, "_blank"),
        children: [
          f.jsx(Dy, { className: "avatars", size: 50, src: e }),
          f.jsx("p", { children: t }),
        ],
      });
  function cO() {
    return f.jsx(aO, {
      children: f.jsx($n, {
        children: f.jsx(Ve, {
          variant: "well",
          className: "container",
          children: lO.map((e) =>
            f.jsx(uO, { icon: e.icon, name: e.name, url: e.url })
          ),
        }),
      }),
    });
  }
  const dO = "/assets/roadmap-img-BVh2B5tP.png",
    fO = z.div`

    .frame{
        background-color: white;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 400px;
        font-size: 1.25rem;
    }

    .frame img{
        width: 100%;
    }

    .frame ul{}

    .text{
        width: 80%;
        margin: 0 auto; 
    }

    .heading{
        margin: 1rem 0;
        text-decoration: underline;
    }

    .list-items{
        display: flex;
        justify-content: space-between;
    }
    
    .disclaimer{
        margin-top: 2rem;
        font-size: 0.75rem;
    }

`;
  function pO() {
    return f.jsx(fO, {
      children: f.jsxs(Fs, {
        className: "frame",
        children: [
          f.jsx("img", { src: dO, alt: "" }),
          f.jsxs("div", {
            className: "text",
            children: [
              f.jsx("p", {
                className: "heading",
                children: "Phase 1: Fair Launch & Fundamentals",
              }),
              f.jsxs("ul", {
                children: [
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Fair Launch ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Token Visibility/Updates ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Token Metadata/Validation ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Community events ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Daily VC updates ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Meaningful Team Building ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Partnerships (Round 1) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Number go up ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                className: "heading",
                children: "Phase 2: Volume & Outreach",
              }),
              f.jsxs("ul", {
                children: [
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "#StaySafeKeepCozy campaign ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟡",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Dev get scammed ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Community TG Bots ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟡",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Advertising (Round 1) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "CMC and CG Listing ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "green",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "COZY x GotBit ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟢",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "NFT Collection (1st Edition) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟡",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Liquidity Generation Event (LGE) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "🟡",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Partnerships (Round 2) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟡",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Number go up ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "yellow",
                        children: "🟡",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                className: "heading",
                children: "Phase 3: Utility & Listings",
              }),
              f.jsxs("ul", {
                children: [
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Big 5 Trending Campaign ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "COZY VIP Lounge ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Immersive Website Revamp ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Airdrop Event ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Non-inflationary Staking ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "CEX Listings (Round 1) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Advertising (Round 2) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Partnerships (Round 3) ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                  f.jsxs("li", {
                    className: "list-items",
                    children: [
                      "Number go up ",
                      f.jsx("span", {
                        role: "img",
                        "aria-label": "white",
                        children: "⚪️",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", { className: "heading", children: "Phase 4+" }),
              f.jsx("ul", {
                children: f.jsxs("li", {
                  className: "list-items",
                  children: [
                    "One way ticket to the moon. ",
                    f.jsx("span", {
                      role: "img",
                      "aria-label": "yellow",
                      children: "🟡",
                    }),
                  ],
                }),
              }),
              f.jsx("p", {
                className: "disclaimer",
                children:
                  "$COZY is a meme coin with no intrinsic value or association with Matt Furie. There is no formal team or roadmap. This coin is for entertainment purposes only.                ",
              }),
            ],
          }),
        ],
      }),
    });
  }
  const hO =
      "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2028.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20100%20100'%20style='enable-background:new%200%200%20100%20100;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFDBDE;}%20.st1{fill:%23F222F7;}%20%3c/style%3e%3cg%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M22.91,42.36v4.8h-2.4v14.4h-2.4v-21.6h2.4v2.4H22.91z%20M22.91,51.95v-4.8h2.4v4.8H22.91z%20M25.31,54.35v-2.4%20h2.4v2.4H25.31z%20M32.51,39.95v21.6h-2.4v-2.4h-2.4v-4.8h2.4v-14.4C30.11,39.95,32.51,39.95,32.51,39.95z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M33.51,62.55h-4.4v-2.4h-2.4v-4.8h-2.4v-2.4h-2.4v-4.8h-0.4v14.4h-4.4v-23.6h4.4v2.4h2.4v4.8h2.4v4.8h2.4%20v2.4h0.4v-14.4h4.4V62.55z%20M31.11,60.55h0.4v-19.6h-0.4v14.4h-2.4v2.8h2.4V60.55z%20M19.12,60.55h0.4v-14.4h2.4v-2.8h-2.4v-2.4%20h-0.4V60.55z%20M26.31,53.35h0.4v-0.4h-0.4V53.35z%20M23.91,50.95h0.4v-2.8h-0.4V50.95z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M41.66,42.36v7.2h7.2v2.4h-7.2v7.2h9.6v2.4h-12v-21.6h12v2.4C51.26,42.36,41.66,42.36,41.66,42.36z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M52.26,62.55h-14v-23.6h14v4.4h-9.6v5.2h7.2v4.4h-7.2v5.2h9.6C52.26,58.15,52.26,62.55,52.26,62.55z%20M40.26,60.55h10v-0.4h-9.6v-9.2h7.2v-0.4h-7.2v-9.2h9.6v-0.4h-10C40.26,40.95,40.26,60.55,40.26,60.55z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st0'%20d='M56.02,44.75v-4.8h2.4v4.8H56.02z%20M58.41,51.95v-7.2h2.4v7.2H58.41z%20M60.81,56.75v-4.8h2.4v4.8H60.81z%20M63.21,61.55v-4.8h2.4v4.8H63.21z%20M65.61,56.75v-4.8h2.4v4.8H65.61z%20M68.01,51.95v-7.2h2.4v7.2H68.01z%20M70.41,56.75v-4.8h2.4%20v4.8H70.41z%20M72.81,61.55v-4.8h2.4v4.8H72.81z%20M75.21,56.75v-4.8h2.4v4.8H75.21z%20M77.61,51.95v-7.2h2.4v7.2H77.61z%20M80.01,44.75%20v-4.8h2.4v4.8H80.01z'/%3e%3c/g%3e%3cg%3e%3cpath%20class='st0'%20d='M76.21,62.55h-4.4v-4.8h-2.4v-4.8h-0.4v4.8h-2.4v4.8h-4.4v-4.8h-2.4v-4.8h-2.4v-7.2h-2.4v-6.8h4.4v4.8h2.4%20v7.2h2.4v4.8h0.4v-4.8h2.4v-7.2h4.4v7.2h2.4v4.8h0.4v-4.8h2.4v-7.2h2.4v-4.8h4.4v6.8h-2.4v7.2h-2.4v4.8h-2.4V62.55z%20M73.81,60.55h0.4v-2.8h-0.4V60.55z%20M64.21,60.55h0.4v-2.8h-0.4V60.55z%20M76.21,55.75h0.4v-2.8h-0.4V55.75z%20M71.41,55.75h0.4%20v-2.8h-0.4V55.75z%20M66.61,55.75h0.4v-2.8h-0.4V55.75z%20M61.81,55.75h0.4v-2.8h-0.4V55.75z%20M78.61,50.95h0.4v-5.2h-0.4V50.95z%20M69.01,50.95h0.4v-5.2h-0.4V50.95z%20M59.41,50.95h0.4v-5.2h-0.4V50.95z%20M81.01,43.75h0.4v-2.8h-0.4V43.75z%20M57.01,43.75h0.4%20v-2.8h-0.4V43.75z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%3e%3cpath%20class='st1'%20d='M83.65,72.41H15.83c-7.59,0-13.76-6.17-13.76-13.76V41.36c0-7.59,6.17-13.76,13.76-13.76h67.82%20c7.59,0,13.76,6.17,13.76,13.76v17.28C97.41,66.23,91.24,72.41,83.65,72.41z%20M15.83,32.6c-4.83,0-8.76,3.93-8.76,8.76v17.28%20c0,4.83,3.93,8.76,8.76,8.76h67.82c4.83,0,8.76-3.93,8.76-8.76V41.36c0-4.83-3.93-8.76-8.76-8.76H15.83z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",
    gO = z.div`
    position: relative;

    p {
        color:white;
    }

    text-align: center;
    overflow: visible;

    .btn{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    img{
        width: 45px;
        height: 45px;        
    }

    .is-new-container{
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -25px;
        right: -5px;
    }

    .is-new-container p{
        
    }
`;
  function BA({ disabled: e, name: t, icon: r, url: n, isNew: i, extra: o }) {
    const s = Bo();
    console.log(o);
    const a = () => {
      e ||
        (o && o.forEach((l) => s(So(l))),
        n ? window.open(n, "_blank") : s(So(t)));
    };
    return f.jsxs(gO, {
      onClick: a,
      style: { cursor: e ? "not-allowed" : "pointer" },
      children: [
        e
          ? f.jsx(Vy, {
              text: "Coming soon™",
              enterDelay: 100,
              leaveDelay: 500,
              children: f.jsxs("div", {
                style: { pointer: "not-allowed" },
                children: [
                  f.jsx("img", { src: r, draggable: !1 }),
                  f.jsx("p", { children: t }),
                ],
              }),
            })
          : f.jsxs("div", {
              children: [
                f.jsx("img", { src: r, draggable: !1 }),
                f.jsx("p", { children: t }),
              ],
            }),
        i ? f.jsx("img", { src: hO, className: "is-new-container" }) : null,
      ],
    });
  }
  const ka = "/assets/program-BwUZTu8x.png",
    mO = z.div`

    padding: 1rem;

    .frame{
        background-color:white;
        width: 100%;
        height: 250px;
        padding: 1rem 2rem;
    }

    .files-container{
        display: flex;
        justify-content: space-between;
    }

    .files-container p{
        color: black;
    }

    .heading{
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

`,
    yO = [
      { name: "Music Bot", icon: ka, url: "https://t.me/cozyvcmusicbot" },
      {
        name: "Raid Bot",
        disabled: !1,
        isNew: !0,
        icon: ka,
        url: "https://t.me/cozyraidbot",
      },
      { name: "Buy Bot", disabled: !0, icon: ka, url: "" },
      { name: "Giveaway Bot", disabled: !0, icon: ka, url: "" },
    ];
  function vO() {
    return f.jsx(mO, {
      children: f.jsxs(Ve, {
        variant: "well",
        className: "frame",
        children: [
          f.jsx("p", { className: "heading", children: "Telegram Bots" }),
          f.jsx("div", {
            className: "files-container",
            children: yO.map((e, t) =>
              f.jsx(
                BA,
                {
                  disabled: e.disabled,
                  name: e.name,
                  icon: e.icon,
                  url: e.url,
                },
                t
              )
            ),
          }),
        ],
      }),
    });
  }
  const AO = "/assets/banner-cozy-B8Fq_RAj.png",
    wO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOQSURBVHgBvVc9SytBFL0JmwciRLG0sLAKkm4LxcZGHhjWfyGm8AdIgviFRN8PsEhnayVoUHhYxM5i01nERuEJKRS/ghaJgbw9d2fmzW5242aVd2AyO5PdnDvnnrmzSdAnMAyj65/rdDoJ+h8AealU8gSAcVBQsTn8Ezrh+vq6Z65YLPLK19Y66HhuZ8f4PkVApEMqcHx8zP3mJnWr1Sp/Z9vkfBDP4b64qhg6eaFQoIeHBx6Pj4+rm9LpNLXbRdrY6FIqlVKPfnx0aMPENSsCNbqx1JArv7+/797d3amVr66uqmupiBzLa6hgd71qDMJt6CtvtVqeLxcWFmho6Jfywvb2NvcYn5+f0/z8PBEUqBH3FrlqDKKESoGfHJibm6NqlRypPzTpickVHPKZGYMuL900WBZSQZGR1Aftdpv76+trXqVOinyjQYWzszNePcYpkDu9Ke5Dv7/foagw/OR6EIeHh2w+HYWCO97bIydA14joWQGHvVYTP2xES0PSP4EA0EAOb4TBQy4UMGs0MAxRXNiI9Xo90kP+lYM4BjeDFUAQu7u7lMlk6P39ndvr6yvfYFk2bW1xjOohkENqJofsppt7ZYRBA9CDMJ1fHB4eppGREZ6fmJjwPFDTlmqKsVQgTgo8HtCVkMD21FUwza5LagpS0ZPpTQPOi9iHlqx8skd1tG2bKx1aL2x1NtiigTxKZTT6fTk7O0tQBAbFzoASV1d1oUYALNELf6BAQYl+lTERtHoQXlxcULPZdAiveB5zNzc39Pz8zEFINBp/uGiBACu2rLIzm1flOe9cLi8TrawEH9tJioBsNstKTE5OskGz2QxNT5vcJDnucwJIVCp59yFxRpTLLnmYJ3oCkEbEOaADRLpBDw4OeLsGo+w2EQTSgReXoCACFUAQ+jnw9NTsuQfb9O3trWdequA2UtskLIjAAOADnIASY2NpPoSkN4KI/UHIVqlgz5ZDg0gGkYPo5ORErdyvAMyp95EQEkSoBxYXFz3z8niempqiQfDjR4lkShCELOESkTwggbQcHR3RIMBv/UtHvue4iOSBVst1O5TJ5XKhqYkKNqdA30ooiQGYcGlpiU5Pf1NcQIUdbQegfnxaiEZHR+nx8ZE9gFf1XO4nfQUglQ3jvh4A8cvLi3orvr299XhAVygu+r6zyb0qo8W40WioIKQyX/lr1jcFulRyjDTgUPoO8tj4yn9BP/4CM8CgwDkAitAAAAAASUVORK5CYII=",
    xO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGESURBVHgB7ZaxasJAGMf/KQcOgQxuThZnty7FZym0Uzv0AdQgiCKigw+gU4a+gS8gOHTKILg6CNJRUJLBEEjzRXKNSaMJJinF/ODuvvvC5f/PXe44ICfn1hH8iXq9biEDhsOho8384uVyGWmzXq/BGLNM0xS4gX6/b1WrVaTNcrk86TNXvNlsIm2m02kgd7IEm80GhmE4xUXXdR5rmsbj/X4feNl2+5N7eX46Bh1gXBqjUBBRLErnDXjFvcJ+cUKSpIAJEuAmOsfm4cuuSgiFhT0QRTFgwsulGVDuP3A46GfFfzWgKAqSplKpILKBwWCApJlMJohsoNFoIGn+zwzM559OSRragi673Q6j0Qh0ClLfqeggQgb4xbkBgs5mZIBX/CrIMM1cVsYDkPhqtbrawB3+GIG+RJZlIeqPaBhyINfrMXS7XcTB1WS1Ws1JuO0lZjOg3R7b0RugvkJVVfSwiDzeC40R+M0k4lq2WqZtAFyceHxfIC6uZuwtEWY0se2Vk5M13+9OsUrjSEVKAAAAAElFTkSuQmCC",
    SO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG9SURBVHgBvVcLkoUgDIMd76U3E2+mJ2Mpj7AFi3xkX2YYFShJykfVaiKMMZbd65aYRU0Cke/7zqtsj5DX5CVQG8/Mv5I70758TUjJeS7kPE8iRplP/uSckYvoXoRSGm2o0Tp9vq5Lbdvmm9RbYA4xnzX3NedANQNwTFuMHFHhkNz3ONetxATnSqEuJ00GdQ0uno+lmwU8EYf2QGoZ4Z8QuKd+IQsxXhKiW4kJGJDf28w+uUccrlxIMBB5F2mOpcAcqNPBPgnJhT/FRwEglwK3NQygZEe5EHInpT5H2FE6CiBAPcT4TFyfAVYQVlLb4hhxyPxtG0LIuq7x+SqshZ5USyDRxXNAEgK8JeaLsXoQcSHHcbwiBvhOaH4X8DUCIYPEkTwKoAH5ym4RMkickBN+sB1G01kj5kVCnILSyh4l5tcnLOhYWtk9QkrE0twnAqjBEVmJuEXICPFTQyIE4ELY2y259hC3dCgKmUHc0/EmJBc1Qgy0fJL5tEun3xviGIhXoxF/Gsy9xqTiRgHOqDx8xSY4z80dvVT96UYnMHHOOLRcRiO3ZdekODJ8fPtCz1K/weI5a3NX+q6f9sf7C2oTK3nTpkwLAAAAAElFTkSuQmCC",
    kO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGoSURBVHgBxVYJcsQwCCOZ/jvel7sGG4oPfKYtMzu5HCRA1gbgpXDOefivQHCMcPr3JATc+y0SFxwEgj/PQ0l8SkbH66py6xGFc3l2w2Fcn08OHq4tog7P4y3/GoGMRAecCIZjuikkjkbAAC6/IXnNETFR5+CVoPnGGfvWs0yknbWn4XsEfxt8GO4HOAO/Bi+cAO7ri8B5Zmp22TW3tLEOFlp8tcAdTERQcDQ+lUyp2ymFT3djqXKsslivRTYruruqPFRBleAxWCqbh2QozQbXFQiIbRlPkwCBh8X0Ah9TcFu7PUwkIIFmxjMgcbNb8ZOWpWq/75Ggtdg1MF2vSvElIIp1K4hEqk6iZaXhHpHAMQzAhUDl1WCT4IQyZ16PzxSh9Jcsl0bKSKAL3qiSt58pzAGojhug7oAA8y/tMiYzJczJiBpQKk7/o7bJqOtKE+nddQJpF5Rj2BbmAgkawQi8Z+ynHxfmLlgV5mrlHGsd0IIshLkbsQMtVQ+EaX2E9kzHJFD6N+3rTWHC4u40fWBZmIuVZwRmwQZ2veVL5x3YrByKnCexDY7xDU0Yn0nYPoQwAAAAAElFTkSuQmCC",
    EO = z.div`

    padding: 1rem;

    .frame{
        background-color:white;
        width: 100%;
        height: 410px;
        padding: 1rem;
        padding-bottom: 0;
    }

    .banner{
        width: 100%;
    }

    .text-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 1rem;
    }

    .heading{
        text-decoration: underline;
    }

    .text-block{
        display: flex;
        gap: 1rem;
    }

`;
  function CO() {
    return f.jsx(EO, {
      children: f.jsxs(Fs, {
        variant: "well",
        className: "frame",
        children: [
          f.jsx("img", { className: "banner", src: AO, alt: "" }),
          f.jsxs("div", {
            className: "text-container",
            children: [
              f.jsxs("div", {
                className: "text-block",
                children: [
                  f.jsx("img", {
                    style: { height: "40px", width: "40px" },
                    className: "text-icon",
                    src: xO,
                    alt: "",
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("p", {
                        className: "heading",
                        children: "Step 1: Download Wallet Extension",
                      }),
                      f.jsx("p", {
                        children:
                          "Download a compatible wallet extention, such as Backpack or Phantom, to securely store and manage your tokens.",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "text-block",
                children: [
                  f.jsx("img", {
                    style: { height: "40px", width: "40px" },
                    className: "text-icon",
                    src: kO,
                    alt: "",
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("p", {
                        className: "heading",
                        children: "Step 2: Buy SOL (Solana)",
                      }),
                      f.jsx("p", {
                        children:
                          "Purchase Solana (SOL) through your wallet extension or transfer it from an exchange to use for trading it for COZY.",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "text-block",
                children: [
                  f.jsx("img", {
                    style: { height: "40px", width: "40px" },
                    className: "text-icon",
                    src: SO,
                    alt: "",
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("p", {
                        className: "heading",
                        children: "Step 3: Trade SOL for COZY",
                      }),
                      f.jsx("p", {
                        children:
                          "Exchange your SOL for COZY on a trading platform like Raydium or Jupiter, which support Solana-based tokens.",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "text-block",
                children: [
                  f.jsx("img", {
                    style: { height: "40px", width: "40px" },
                    className: "text-icon",
                    src: wO,
                    alt: "",
                  }),
                  f.jsxs("div", {
                    children: [
                      f.jsx("p", {
                        className: "heading",
                        children: "Step 4: Add to your wallet",
                      }),
                      f.jsx("p", {
                        children:
                          "Keep your COZY secure in your wallet and join the community in supporting its growth and development.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  }
  const bO = z.div`
    padding: 1rem;

    .frame{
        background-color:white;
        width: 100%;
        padding: 1rem;
        height: 20%;

        text-align: center;
    }

    .btn-container{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 1rem;
    }

`;
  function IO() {
    const e = "cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA",
      t = () => {
        navigator.clipboard.writeText(e);
      };
    return f.jsxs(bO, {
      children: [
        f.jsx(Ve, {
          className: "frame",
          children: f.jsx("p", {
            children: "Verify that this website is: https://cozypepe.meme/",
          }),
        }),
        f.jsxs("div", {
          className: "btn-container",
          children: [
            f.jsx(ce, {
              onClick: () =>
                window.open(
                  "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=cozyLxNaoJvQ3KB5dCJdu7MoZiBpwBWGdvc4dkMXnqA&fixed=in",
                  "_blank"
                ),
              children: "Buy on Raydium",
            }),
            f.jsx(ce, {
              onClick: () =>
                window.open("https://jup.ag/swap/SOL-COZY", "_blank"),
              children: "Buy on Jupiter",
            }),
            f.jsx(ce, {
              onClick: () => t(),
              children: "Copy Contract Address",
            }),
          ],
        }),
      ],
    });
  }
  const BO =
      "data:image/png;base64,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",
    RO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAFB0lEQVR4nO3dwU0bWRzH8X/WK/kYOtgpgQ5COtgS6GBz9yFw8D0l0MJWENNBSnA6YI8+WOzB1sIiyM8Oz/Ps8PlIkSAazXshfG2PZ/zm3f39fQEv+633BODYiQQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiASC38caaDKd36dt1qvZuz32t6iqD6+Z0yPX69XsasdxL6rqa6Nxq6o+rlezxQ7jnlfVl4bj1no1u9hlu8l0flVVnxsOvc/P+7KqLsNm39ar2adXzulFo0XCq51VuweFUzJU53+3l1sbQ+8JcLxEsjH0nsAOvvWewFslkhOxXs3uOg6/6Dh2dyLZOO89AY6XSDbe954Ax0skEIhka3se4th97zHoLudxfmWnfJ7kptoeUO56YPytqj42HHefd62uqt87cdcN97VouK+De3d/H0+EN9H6jDtvw45n+293vXrgZ3i5BYFIIBAJBCKBQCQQiAQCkUAgEgiO5Yz796pa9p4ER2lZVbdhm4N+1mbMM+4X2y+X69VsOcqg0MBokcCpckwCgUggEAkEIoFAJBCIBAKRQCASCEa5LGUynZ/V/xeAu3j09XltFoM+6MrgnLZHV2wM9bAYxii/O2Ndu3VebW9XwBvR+BYbP8XLLQhEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAsFYH99dVtX1DtvAU8/dVmHx5PvlISdgVXkIvNyCQCQQiAQCkUAgEghEAoFIIBAJBGOdcX/Wo5XCL2pzf/ebbpOBF4x164Whqj7Vw+0Xnlsl/LaqbsaYD6djMp1fVdXnsNntejW7ONQcxnomGarqr5HGgqYck0AgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAw1icT72rz8dwfeW71cHjJ93pYTX5xyIGsKs9Rm0zn51V1tv32br2ajf5gKhIIHJNAIBIIRAKBSCAQCQQigUAkEIgEgrFWlT+rhxXlH39dj//ukCuDc/qe/B4N2z9VmzPxXw417ljXbp1X1deRxuIXsr2HTfrdua2qg0Xi5RYEIoFAJBCIBAKRQCASCEQCgUggGOtkIg1MpvOhHs4yv9ZyvZotG+3rl3aSkWwXB2h5hvVmvZrd7Dj2ZVVdthp4z0txLqvqc6Oh/66qP3fZcDKdL6rqQ6Nxq6qu16vZVcP9HdRJRlKba71a/qct9th2aDn2ZDofOj2in+VN/rOotj/voeG+Ds4xycbwRsfuZeg9gX2IZGPoPYEOnl6J/SN3B5vFCRBJf0Oncd/vse2bXl1TJBvDGx2bHYhk44/eE+hh+y7hLlo/kwyN93dQIulvn2OD1nZ6h2u9mrU+JjmpByWRbO3xqNraPm/F9vRP7wn0MtZ5kmVVXR/x/qp2fwdn0Xjc5R7bth57HzfV51mv+207rCoPgZdbEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRALBv0/7vVECva5zAAAAAElFTkSuQmCC",
    DO =
      "data:image/png;base64,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",
    OO =
      "data:image/png;base64,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",
    TO =
      "data:image/png;base64,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",
    MO =
      "data:image/png;base64,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",
    PO =
      "data:image/png;base64,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",
    zO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAEbUlEQVR4nO3dv2skdRzH4c/ehlsRwROEUxCjhViIeoW12cM/wcLC1j9AbLe4a7awsraRWFrYCBZ2SSE2FgdyhQiywd9ocQreueY2Y7NFPHO8RzJ7k+w+T5PZ5ZvvfhLyIgOzmQyaping/i70PQCcdSKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQbPU9wKYajqbjqhp3uOVsMZ/sdrgfSyLpz7iqrnW4335V7Xa4H0tOtyAQCQQigUAkEIgEApFAIBIIXCfpyfMPP/XCYbPobL+LF7aefuXxj1788rc3vupsU6qqauCu8t0ajqZ7VbWT1r2z/frPly8+9kSXr/3+95/Wt3d+iusW88mgy9ddd063erI1GM77noF2RAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQSDpmn6nuFcGI6me23WvfvcWzsrHuXUPvjxs4Ov//xu1mLp24v55Maq5znrtvoe4Bw58z/8bR0e3d2uqu0WSy+tepbzwOkWBCKBQCQQiAQCkUAgEghEAoFIINjoK+7D0XRcVeO07qVHnr365pOvvbrygc6Yz2/dnH3y6xcfhmWzxXyy+yDm6cumX3EfV9W1tOib2z+sfpKzaVD5+7NfVburH6U/TrdauHP0d98j0CORQCASCEQCgUha+uPu7V/6noF+iKSlw+buX33PQD9EAoFIWjpsFg/1PcODdtQcbdzXfJJNv5jY2nsHH1/ue4YebOLX/B9+k0AgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQ+HuS9g5qzW/Cdo9xrdG/wDsNkbQ3W8wn1/se4kEZjqbXSyRV5XQLIpFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCDwLuCOLd89Oz721N6x4xtVdWt5PFvMJ7OWezZV9fvy84/bu+fxbts9aU8kq7Fzn+Pj9uvfMSWPnrDXSXtf/x970oLTLQhEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBIOmafqeYaWGo+mlqrqyfDhefrxSVZeq6pmq2m651Ul3dT9J2z0Pqmp3eXx8xjr23MstZ+vT/mI+Gfc9xCqt7V3lh6PprNoH0MZJd3U/je2qutbhfqzIOp9udRkIG2ydI4FOiAQCkUAgEghEAoFIIBAJBGt7MbGqrvY9wIa4lZecb2v/thQ4LadbEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEPwD7DKKkcikotAAAAAASUVORK5CYII=",
    NO =
      "data:image/png;base64,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",
    QO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAFeElEQVR4nO3dMXLb2B3H8b+DnUGTmVVOYN0guoG0J0jqNNlqa2/NYtcF6rhOpZxk6Rtob0A3qbdlweEWhCyvHOdH0STxBH0+MxwVxghPtr8iwIcHvNputwV82Z+mHgC0TiQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIPhm6gHwoOuHi6q6CputNuvF6gzDYSSStrypqp/CNm+r6ufTD4V7DrfacrnHNjcnHgOPiKQt6VCrar+QOCKRtOWve2zz+uSj4A9E0oiuH/Z5F7nf9uaEQ+ERkbTj8gnbXpxqEHxOJO3Y+53kidvylUTSDpE0SiTtuHzKts5LzufVdrudegwvyniCfj+z/unX6wO/5a9Vtaqqu/uXGfnjEsmJjVG8q10M355x1++r6s1mvbg74z5nyWUpp/c17xJf47p8CnYUzkkgEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggsDJx3n7p+uFD7dbAL8sa+IOIZP5ej6+PS4i7fqjarYG/q11At5v14rcpBvcciOTluq6HcO5q907D/+CcBAKRQCASCEQCgUggEAkEIoFAJBCYTDzQJ3eLT/5cVd/tsd272u/BopyZSA63793i32/Wi2XaqOuHVYmkSQ632uE5Io0SCQQigUAkEIgEApG0w4l7o0TSDisDG2WehKqqd10/LOthDbx3tU+IhKrdJObHicxP1sCv6iGc5RQDa4FI+JL7NfD/rPoYzo+b9WKfS3FmxTlJO1ZTD2APF1MPYAoiaYR7YbVLJBCIBAKRQCASCETSlvdTD4DPiaQtLk1pkMnER7p+uKyqyz02/aH2+82/9yUem/Xi710/XFTV1aOXZb0TEsnnvq+qn/bY7u1mvfjHsXc+PgJhWY/u8j7eeOKqduPbZ209RyKSZ2K86PBufKcTyRk5J4FAJBCIBAKRQCASCEQCgUh4ipuuH27GCc8XwzwJT3FdVb9UVXX98KHG9e+1m/i8m+uz4EXCoV6Pr7/VeIVC1w+/1hjNZr24nW5oxyUSjun+riuXVXU76UiOyDkJBCKBQCQQiAQCkUAgEghEAoF5ksPddP3w8xT7nWCfL5pIDnd/13VmzuEWBCKBQCQQiAQCkUAgEghEAoFIIDCZyClcd/2wrd1d95f18Cz41ZSDOtSr7XY79RjOouuH5Z6b/req/n3CoZzL9zU+g70hf7h5xGa9WE47nP28pEj2/UG/ey7/eP9P1w83Nd7ZpHHN/307J5mvWd7eZwoimanxeSYcgUjm7cPUA5gDkczbauoBzIFI5s0h1xGIZN6cvB+BSOZtOfUA5kAk87aaegBz4LKUGdusF6uuH/5Su+e/X46vq6q6GL9+O9ngnhGRzNz4zJDll/6864c3VfWvsw3oGXK4hU/AApFAIBIIRAKBSCAQCQQigUAkn7vq+uFq6kHQjmaX747/US+O+C0PWcr6oXaXdtzV7mLBZVX9NvWCpq4f7mfMj+Gqpp1M/E8d9/KZ22PfcKLlSJbV8KMNNuvFq6n2/YzWr0/h6GvmHW5BIJIDjb/NeQFEAoFIIBDJ4XxM/EKI5HDH/HiahokEApEc7nLqAXAeLS/fva227/axmnjfbyfcf8tWx/6Gzc64QyscbkEgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBL8Dl1/n4W8GapkAAAAASUVORK5CYII=",
    _O =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAHj0lEQVR4nO3dzW0bRxjG8cehAB6tDrwd2KnATAfswOkgBfAQ+8BzUoJKcCrwqoKIHaw6kI88EMqBww8zpl6R+87ufPx/ACEIMF6tAT3anXl3Zt48Pz8LwHm/jH0BQOoICWAgJICBkAAGQgIYCAlgICSAgZAABkICGAgJYCAkgIGQAAZCAhgICWAgJICBkAAGQgIYCAlgICSAgZAABkICGAgJYCAkgIGQAAZCAhgICWAgJICBkAAGQgIYCAlgICSAgZAABkICGAgJYCAkgOFmrB88mS5njuWeNuvFg2M9YG+0kEj65lhrJemDYz1gb8zHrZVjrfeOtYAfjBmSJ89izo9vwF5JA/dm7AtAmYq5k4iQIJIxQ+I9GzVzrgdIKutxi9ktRFFSSN5OpsvbsS8C5RkzJG2EmtxN4O7N8/PzKD84/NWfafuL3YTPB0lve5a+D1+78JEOgew260Un4AKjheQloedxK2ku6ZNz+S+b9eKzc00UbMzXUs7arBetJE2my07+IQEukvTAPdJLi02EmihY0iEJHp3rNc71ULgcQtKNfQGoWw4h8X7k+uhcD4XLISTe73gBF8khJO6DdzrzuEQOIYlxJ6Ezj1dLspl4ajJdftb2F/tWPl35lbbha8P3XfjsezTAThYh+ZmjlYgzbad16cwjimxDcmoyXXr/R/7ZrBdz55rIUA5jkrEwuIekskJyb/+TixASSCorJN6zYGxTBEllhYQdHBFFSSHpvAuylxckQgKYCMnL6MyjnD6JJE2my791WDP/zqHko6Sv2k4KPISvrJOvTFEhOTWZLnevssx0eKXF61X5R23vXi2d+bIVHZKfidCZv9+sFzPnmkhISWOS1/JuOjbO9ZCYGkPi3XT0GPsgYTWGJMYirsa7JtJRY0i6CDWbCDWRCELio4lQE4moMSRseIeLVBeSzXrxJOm7c9nGuR4SUl2fRNp35ufym5l6lHSn0JVnnXxZqgzJsTNdeY/NJqRtT2b3SsvDZr346lATA6s+JOdMpstWvrs9Pm7Wi8axHgZS3ZjkAp1zPZqOmSIk53XeBcOjHTJDSM6LMVXM5hIZIiTnxdhedRahJiIjJGdEmsblTpIhQvIy76YjY5IMEZKXeY9LGud6GAAheVnnXO/dZLqcs1VRXmgmGsKBP7vNJY4/Hl357wrdeB2OgniKdOowrkRIegrvgf3hWXOzXrzxrId+eNzqL8ZKRwb4CSEk/XURajJVnBBC0l8XoeYsQk1ciZD0FGk3xyZCTVyJkPh4dK7XONdDD4TER+dcj4F7QgiJD++XIT1WRcIJIfERYxqYk38TQTPRQdjBcbc2XjrMTnl05Vc6dOMluvKDIyQDCCGaS/rLufRv7MwSH49bAwjTxKx0zBQhGUikv/jMgg2AkOSNO8kACMmwVs71uJMMgJAMy7uf0jjXw08QkmFxylaGCMmwOGUrQ4Qkf83YF1A6mokDCisO59oOuG/D571D6d1a+e7k8xDOY0EPhCQR4bGpCd9+cy5PZ76Hm7EvAFuhK99J0mS69C4/0+HdL1yIMUmavHeORA+EJE3es2Az53pVISR14PWVHghJmrzvJB4zaNUiJGlyn7al6Xg9QpKmGL2NJkLNKhCSNMVYoNVEqFkFmokJCo9Gd+FbrzPlpe258l34tJK6SJvrFYWQZOLoCAjp8FrLnw6lj49/eNisF3cONYtCSDI2mS6f5LxHF8c+/B9jkryxrdAACAlgICR5a70LhrEPjhASnGJziROEJG/t2BdQA0ICGAhJ3mLMbvG4dYI+SeYm0+Wdtq+cfHQquWsutjqsk696qpmQFCRsNNHocAzEB/ntzbVSCI2ktqY184SkApPp8kHOa0pq6swzJqnDV++CNa1PISR1YH1KD4SkDlUPvPsiJHXoItScRaiZJEJSARZW9UNI6nHvXK+apiMhqYf34L2at4UJST28B++3oXlZPJqJFQm/1Lc6DLpn8jv+YaXt3epJh0DuuvNZH/9ASCBp3xz8LOmTc+nsj33gcQuS9jNg7ciXkSRCgmNdhJrZj1sICY7F6MxnPwtGSLAXaYBNSFCclXM9HrdQnKyna2MgJDjVOtfjTgIYXPcqHgPNRPzgaPf60+68x0YTu5csH7R9rOvCRyk3HAkJXu0oQL+ros48j1t4tc168RR+ke8ilE927EJIcI2q+imEBBeLtFldE6GmC0KCaz0612uc67khJLhW51yvca7nhpDgWt6PXF7bsbojJLiW++A91VO2CAmu1UaomeQ0MM1EXCX81Z/rsIv9rXy68ru18m34vpXG7cgTErg66so32r7S4t2Z/3Xo81IICaIJu7P861x28NdXGJMgmlJOyCIkiM276Tg4QoLYurEvoC9Cgtiyf+QiJIgt+zXzhASxtWNfQF+EBLF1Y19AXzdjXwDKtlkvusl0+cWxZOdY61VoJgIGHrcAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDD8B/50y6qWthrwAAAAAElFTkSuQmCC",
    jO =
      "data:image/png;base64,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",
    FO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAADGElEQVR4nO3cMU4UYRiA4R8hodSEA2hNow21cAKvYm+hDbVX4CZCTUNFzQVIsLQwa4PRLJE3i+7OgM+TbDG7k5mv2Hd3Nv9ktxaLxQD+7NnUA8DciQSCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCDsbOpE27vHn8YYHzd1Pv47R9+/fThdx4F9k0AQCQSRQBAJBJFAEAkEkUAQCQSRQNjYivuKjqYegNn4MvUAs4xkXbcX8Phs7x5PPYLLLSgigSASCCKBIBIIIoEgEgizXCeZi+vL88PY5dXtY1V13E05/Yf7X+ztH9w8fJT5epKRLL25D5deXt5+McZ4vcZx5uztivvf+x8F15fny099HWNc/LZ9c7t9tbd/cLLiuSfzqCO5vjx/P8Z4M359or+cch7ueD7uhvhujHE2xjjZ+DQP9KgjGWN8nnoAnj4/3CGIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCCIBIJIIIgEgkggiASCSCDsTD3AXzqbegAe5GLqAVbxqCPZ2z84nHoGnj6XWxBEAkEkEEQCQSQQRAJBJBBEAkEkEGa54r69e7yYegb4yTcJBJFAEAkEkUAQCQSRQBAJBJFAEAmETa64n27wXPx/rtZ14K3Fwh0gcB+XWxBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRALhB5sMMDgEvCNeAAAAAElFTkSuQmCC",
    LO =
      "data:image/png;base64,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",
    UO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAE5ElEQVR4nO3csW+UdRzH8W89kiMsNmni4CBn3AhqTSQuJNT/wPgXMBFHF6cbgOEmHdgchVUXB+PAIMXFoQ64dDAxKaNDE1xMbricg5CACp8782t/T8vrNZXw5Pv7hubde8hzvY3lclnA873SewEYOpFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIzvReYEhG49l2Vd3qvcdQLebTnd479CCSZ21W1ZXeSzAsbrcgEAkEIoFAJBCIBAKRQCASCDaWy2XvHf630Xg2qapJw5EfV9U7DeedJltVdaeqfm4482Axnx40nHckTvrDxKtVdb3hvPsv61PlVYzGs92q+rzhyJtVdaPhvCPhdgsCkUAgEghEAoFIIBAJBCKBQCQQnPRILjaed9B4Hi/2Ru8FVjHIt6U8frK7yq/RfraYT79ode7h/t7Vqvqq1bxT6M2tC5cOWg0bjWdfVtUnK1x6czGf3mh17rpO+itJy/cRVbV9H9hpNGk87/fG847ESY8EjpxInrXTewGGRyQQiORZk94LDNxO7wV6EMmzzvdegOERCQQieexwf2+n9w4Mk0hYx6T3Aj0c6xP30Xh2tf7+vfQX2aqqb6rqx//6y8V8uvvk68P9vVtVtd1mu9qsqncbzTqt/qiqBw3n3d66cOl2VdVoPNus538vr1XV6yvM+3Qxn7bcr6qO/4MgJrXC200W8+nbK87bXmUezbxabf+9d598sZhPHz3956eNxrOqqnsrzNtssdQ/ud2CQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAsEgIxmNZ5d778CgTHoevrFcLnue/y+j8ex8VX1XVRdXuPzDxXy62+rsw/29g6o632reabR14dLGcZ85Gs8mi/n04LjPfWJwrySL+fRhVR12Ov6g07m8QM9AqgYYCYP2S+8FehAJ63jUe4EeRMI6RELt9l5g4B70XqAHkUAgEtbhlQQC/yc5gd5vPO+l/Em5hqaRjMazzRWvm7Q8d12De+K+jtF4dq+qmj0Bfuv8ua9/+vbyfqt5p81r7939qKq2G448W1UfrHDdncV8erXhuWs50+vgRu5X1fVWw357+GdtXbi002re6XP3RlVdaTjw/orXHTQ8c20n/XYLjpxIIBAJBCKBQCQQiAQCkUAgEno623uBVZz0J+6TavshAdeq6teG806Ti1W1X1U/NJx5bjGfft9w3pE40ZG0NhrPdqrqXu89hmoxnx77h0AMgdstCEQCgUggEAkEIoFAJBCIBAKRQOBhIgReSSAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBII/gIjAZ0fJMmRlAAAAABJRU5ErkJggg==",
    YO =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAADk0lEQVR4nO3bsYpcdRyG4f86gbmAFCljIwFrLYRAdntrG7FXy7QDyW4x17CX42iTIthJ6rWwSLGdzRTD2Bs37yF6MmfxeeofzAfDyx44s2fH43EAd/vk1ANg6UQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBAenHrAv7Fab3djjGen3sEHuzjsN7tTjyj+kkAQCQSRQBAJBJFAEAkEkUAQCYSz4/F46g3vWK235xNPX4wxfplxCvO6GGO8nHB3c9hvbmbecqelvnH/aeLdvXhjyz9brbdjTPuur8YYl7OOeQ+PWxBEAkEkEEQCQSQQRAJBJBBEAmFxLxNX6+3TMcZvY4zbur16/uTR7ZvX57OPYhbnXz38c/fq9ucJp5/NPuY9PurPUlbr7eWY9jOETw/7ze91dPvm9W74H/f77Orh519e1tFqvb0eY3xfd4f95uy/GPV3i3zcmhII/ytvT/nhi4wElkQkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEEQCQSQQRAJBJBBEAkEkEBYZyWq9fXzqDSzKo1N++NnxeDzl579jtd4+HWNcjzFu6/bq+ZPrH757/Hb+Vczhmx9//WL36vbrCad/HPabb2cfdIfFRTLGGKv1duqoi8N+s5tzC/NZrbeXY4yXE06vDvvN5bxr7rbIxy1YEpFAEAkEkUAQCQSRQBAJBJFAeHDqAXe4mHj3YrXens85hFldjGnf9c3MO95rkW/cp1qtt7sxxrNT7+CD3YtfTHjcgiASCCKBIBIIIoEgEggigSASCPf6ZSJ8DP6SQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUAQCQSRQBAJBJFAEAkEkUD4C+NkZ1SBwkMMAAAAAElFTkSuQmCC",
    WO = z.div`

    

    .container {
        display: grid;
        grid-template-columns: 0.75fr repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 0.25rem
    }

    .side-bar{
        grid-area: 1 / 1 / 4 / 2;
        width: 100%;
        height: 100%;
        align-self: center;
    }


    #dexscreener-embed {
        grid-area: 1 / 2 / 5 / 6;
        position: relative;
        width: 100%;
        padding-bottom: 125%;
    }

    @media (min-width: 1400px) {
        #dexscreener-embed {
            padding-bottom: 65%;
        }

    }


    #dexscreener-embed iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 0;
    }

    .btn-container{
        width: 100%;
        height: 80%;
    }

    .btn {
        width: 50%;
        
    }

    .btn img{
        width: 25px;
        height: 25px;
    }

    .side-bottom{
        box-sizing: border-box;
        grid-area: 4 / 1 / 5 / 2;
        padding: 1rem;
        width: 100%;
        height: 100%;
        
    }

    .side-bottom-frame{
        width: 100%;
        height: 100%;   
        display: flex;
        justify-content: center;
        align-items; center;
    }

    .bottom-container{
        grid-area: 5 / 1 / 6 / 6;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .color-container{
        box-sizing: border-box;
        padding: 0.25rem 0;
        
        
        display: flex;
        align-items: center;
    }

    .color-grid-container{
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }

    .pallet-mixer{
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        
        position:relative;
        background-color:grey;
    }

    .pallet{
        width: 25px;
        height: 25px;
        postion: absolute;
    }

    .white {
        background-color: white;
        position: absolute;
        top: 35%;
        left: 45%;
        transform: translate(-45%, -35%);
       
    }
    
    .black {
        background-color: black;
        position: absolute;
        bottom: 35%;
        right: 45%;
        transform: translate(45%, 35%);
        
    }
    .color-grid{
        display: flex;
        flex-direction: column;
        width: 25px;
        padding: 0.25rem 0;
    }

    @media (max-width: 767px){
        .container{
            display: flex;
            flex-direction: column;
        }

        .btn-container {
            display: grid;
            grid-template-columns: repeat(8, 1fr); /* Each column has a width of 50px */
            grid-template-rows: repeat(2, 1fr);
        }

        .btn{
            width: 100%
        }

        .side-bottom{
            display:none;
        }

       
    }

    .sep{
        padding: 0.25rem 0; 
    }
    
`,
    JO = ["#DE5E57", "#52A49A"],
    HO = [BO, RO, DO, OO, TO, MO, PO, zO, NO, QO, _O, jO, FO, LO, UO, YO],
    VO = ({ icon: e }) =>
      f.jsx(ce, {
        className: "btn",
        children: f.jsx("img", { src: e, alt: "" }),
      });
  function $O() {
    return f.jsx(WO, {
      children: f.jsxs("div", {
        className: "container",
        children: [
          f.jsx(Ve, {
            className: "side-bar",
            children: f.jsx("div", {
              className: "btn-container",
              children: HO.map((e, t) => f.jsx(VO, { icon: e }, t)),
            }),
          }),
          f.jsx("div", {
            className: "side-bottom",
            children: f.jsx(Ve, {
              className: "side-bottom-frame",
              variant: "well",
              children: f.jsxs("div", {
                className: "color-grid-container",
                children: [
                  f.jsxs(Ve, {
                    variant: "well",
                    className: "pallet-mixer",
                    children: [
                      f.jsx(Ve, { variant: "well", className: "white pallet" }),
                      f.jsx(Ve, { variant: "well", className: "black pallet" }),
                    ],
                  }),
                  f.jsx("div", {
                    className: "color-grid",
                    children: JO.map((e) =>
                      f.jsx(Ve, {
                        variant: "well",
                        style: {
                          backgroundColor: e,
                          height: "",
                          width: "100%",
                          aspectRatio: 1,
                        },
                      })
                    ),
                  }),
                ],
              }),
            }),
          }),
          window.innerWidth <= 768 ? f.jsx(Ls, { className: "sep" }) : null,
          f.jsx("div", {
            id: "dexscreener-embed",
            children: f.jsx("iframe", {
              src: "https://dexscreener.com/solana/DbpX5CpBLxaHv63dUMEDJyJva6i4Atb9EbjESqTDAgL5?embed=1&theme=dark&trades=0&info=0",
            }),
          }),
        ],
      }),
    });
  }
  const GO = z.div`

`;
  function XO() {
    return f.jsx(GO, {
      children: f.jsxs($n, {
        children: [
          f.jsx(ce, { children: "Generate Meme" }),
          f.jsx(Io, { placeholder: "Search all memes" }),
        ],
      }),
    });
  }
  function KO(e) {
    switch (e) {
      case "Manifesto.txt":
        return f.jsx(xB, {});
      case "Home":
        return f.jsx(CB, {});
      case "stats.csv":
        return f.jsx(ID, {});
      case "cozy.mp4":
        return f.jsx(QD, {});
      case "Calculator":
        return f.jsx(UD, {});
      case "Market Cap Calc":
        return f.jsx(WD, {});
      case "Lambo Calc":
        return f.jsx(VD, {});
      case "Partners":
        return f.jsx(cO, {});
      case "Roadmap":
        return f.jsx(pO, {});
      case "Cozy Toys":
        return f.jsx(vO, {});
      case "$COZY Buy Links":
        return f.jsx(IO, {});
      case "Buy Guide":
        return f.jsx(CO, {});
      case "Paint":
        return f.jsx($O, {});
      case "Meme Generator":
        return f.jsx(XO, {});
      default:
        return null;
    }
  }
  const ZO = z.div`

    .window{
        width: 100%;
        height: 100%;
    }

    .window-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: linear-gradient(90deg, rgba(114,36,142,1) 0%, rgba(114,36,142,1) 50%, rgba(255,255,255,1) 100%);
    }

    .header-text {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 0.25rem;
    }

    .header-text img {
        height: 20px;
        width: 20px;
    }

    .close-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: -1px;
        margin-top: -1px;
        transform: rotateZ(45deg);
        position: relative;
        
        &:before,
        &:after {
            content: '';
            position: absolute;
            background: ${({ theme: e }) => e.materialText};
        }
        
        &:before {
            height: 100%;
            width: 3px;
            left: 50%;
            transform: translateX(-50%);
        }
        
        &:after {
            height: 3px;
            width: 100%;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    
    .toolbar-btn span{
        text-decoration: underline;
    }

    .componentWrapper{
        cursor: default;
        height: 100%;
    }

    .toolbar{
        cursor: default;
    }
`;
  function qO({
    name: e,
    icon: t,
    x: r,
    y: n,
    wide: i,
    tall: o,
    toolbar: s,
    resize: a,
  }) {
    const l = i
        ? window.innerWidth <= 800
          ? "100vw"
          : i
        : window.innerWidth >= 768
        ? 500
        : "100vw",
      d = 100,
      p = n || 8,
      h = r || 3,
      y = ki((D) => D.windows.opened),
      x = Bo(),
      S = y.findIndex((D) => D === e),
      E = KO(e);
    return y.includes(e)
      ? f.jsx(vB, {
          default: {
            x: (window.innerWidth - l) / h,
            y: (window.innerHeight - d) / p,
            width: l,
            height: d,
          },
          style: { zIndex: S },
          enableResizing: !!a,
          minwidth: i,
          cancel: ".cancel",
          onMouseDown: () => x(So(e)),
          bounds: "parent",
          children: f.jsx(ZO, {
            children: f.jsxs(Xf, {
              className: "window",
              children: [
                f.jsxs(Gf, {
                  className: "window-header",
                  children: [
                    f.jsxs("div", {
                      className: "header-text",
                      children: [
                        f.jsx("img", { src: t, alt: "cozy icon" }),
                        f.jsx("p", { children: e }),
                      ],
                    }),
                    f.jsx(ce, {
                      onClick: () => x(Bs(e)),
                      onTouchStart: () => x(Bs(e)),
                      children: f.jsx("span", { className: "close-icon" }),
                    }),
                  ],
                }),
                s
                  ? f.jsxs(f.Fragment, {
                      children: [
                        f.jsx(wl, {
                          className: "cancel toolbar",
                          children: f.jsxs("div", {
                            children: [
                              f.jsxs(ce, {
                                className: "toolbar-btn",
                                variant: "menu",
                                size: "sm",
                                children: [
                                  f.jsx("span", { children: "F" }),
                                  "ile",
                                ],
                              }),
                              f.jsxs(ce, {
                                className: "toolbar-btn",
                                variant: "menu",
                                size: "sm",
                                children: [
                                  f.jsx("span", { children: "E" }),
                                  "dit",
                                ],
                              }),
                              f.jsxs(ce, {
                                className: "toolbar-btn",
                                variant: "menu",
                                size: "sm",
                                children: [
                                  f.jsx("span", { children: "S" }),
                                  "earch",
                                ],
                              }),
                              f.jsxs(ce, {
                                className: "toolbar-btn",
                                variant: "menu",
                                size: "sm",
                                children: [
                                  f.jsx("span", { children: "H" }),
                                  "elp",
                                ],
                              }),
                            ],
                          }),
                        }),
                        f.jsx(Ls, { className: "toolbar" }),
                      ],
                    })
                  : null,
                f.jsx("div", {
                  className: "componentWrapper cancel",
                  children: E,
                }),
              ],
            }),
          }),
        })
      : null;
  }
  const eT = "/assets/ms_sans_serif-Du8rjN1q.woff2",
    tT = "/assets/ms_sans_serif_bold-D5dpRRHG.woff2";
  var rT = {
      name: "peggysPastels",
      anchor: "rgb(0, 128, 128)",
      anchorVisited: "rgb(0, 128, 128)",
      borderDark: "rgb(222, 69, 96)",
      borderDarkest: "rgb(64, 64, 64)",
      borderLight: "rgb(247, 219, 215)",
      borderLightest: "rgb(250, 224, 228)",
      canvas: "rgb(244, 255, 255)",
      canvasText: "rgb(0, 0, 0)",
      canvasTextDisabled: "rgb(222, 69, 96)",
      canvasTextDisabledShadow: "rgb(250, 224, 228)",
      canvasTextInvert: "rgb(0, 0, 0)",
      checkmark: "rgb(0, 0, 0)",
      checkmarkDisabled: "rgb(222, 69, 96)",
      desktopBackground: "rgb(162, 219, 210)",
      flatDark: "rgb(222, 69, 96)",
      flatLight: "rgb(247, 219, 215)",
      focusSecondary: "rgb(250, 224, 228)",
      headerBackground:
        "linear-gradient(to right, rgb(0, 191, 188), rgb(202, 156, 185))",
      headerNotActiveBackground:
        "linear-gradient(to right, rgb(0, 187, 169), rgb(236, 145, 162))",
      headerNotActiveText: "rgb(0, 85, 77)",
      headerText: "rgb(255, 255, 255)",
      hoverBackground: "rgb(162, 219, 210)",
      material: "rgb(244, 193, 202)",
      materialDark: "rgb(0, 187, 169)",
      materialText: "rgb(0, 0, 0)",
      materialTextDisabled: "rgb(222, 69, 96)",
      materialTextDisabledShadow: "rgb(250, 224, 228)",
      materialTextInvert: "rgb(0, 0, 0)",
      progress: "rgb(162, 219, 210)",
      tooltip: "rgb(204, 255, 255)",
    },
    nT = rT;
  const iT = Ms(nT),
    oT = yS`
  ${gx}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${eT}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${tT}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`,
    sT = z.div`
  .icon-container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-gap: 1.5rem;
    grid-auto-flow: column;
    width: fit-content;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
  }

  .background-space{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`,
    aT = () => {
      const e = Bo();
      window.innerWidth < 768 && (e(Bs("Home")), e(Bs("cozy.mp4")));
      const t = ki((n) => n.windows.windows),
        r = t.filter(
          (n) =>
            n.name !== "Market Cap Calc" &&
            n.name !== "Lambo Calc" &&
            n.name !== "$COZY Buy Links"
        );
      return f.jsx(sT, {
        children: f.jsxs("div", {
          className: "background-space",
          style: { width: "100vw", height: "100vh" },
          children: [
            f.jsx(oT, {}),
            f.jsxs(hS, {
              theme: iT,
              children: [
                f.jsx("div", {
                  className: "icon-container",
                  children: r.map((n, i) =>
                    f.jsx(
                      BA,
                      {
                        name: n.name,
                        icon: n.icon,
                        disabled: n.disabled,
                        url: n.url,
                        isNew: n.isNew,
                        extra: n.extra,
                      },
                      i
                    )
                  ),
                }),
                t.map((n, i) =>
                  f.jsx(
                    qO,
                    {
                      name: n.name,
                      icon: n.icon,
                      toolbar: n.toolbar,
                      x: n.x,
                      y: n.y,
                      wide: n.wide,
                      tall: n.tall,
                      resize: n.resize,
                    },
                    i
                  )
                ),
                f.jsx(Xb, {}),
              ],
            }),
          ],
        }),
      });
    },
    lT = ib({ reducer: { calculator: FD, windows: Wb } });
  vc.createRoot(document.getElementById("root")).render(
    f.jsx(O.StrictMode, {
      children: f.jsx(AC, { store: lT, children: f.jsx(aT, {}) }),
    })
  );
});
export default uT();
