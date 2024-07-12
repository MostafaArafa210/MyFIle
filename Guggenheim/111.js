/*!
 * Application Insights JavaScript SDK - Web, 2.8.18
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
! function(e, n) {
   var t = "undefined";
   if ("object" == typeof exports && typeof module != t) n(exports);
   else if ("function" == typeof define && define.amd) define(["exports"], n);
   else {
      var r, t = typeof globalThis != t ? globalThis : e || self,
         i = {},
         e = "__ms$mod__",
         o = {},
         a = o.esm_ai_2_8_18 = {},
         u = "2.8.18",
         c = "Microsoft",
         s = (s = t = t[c] = t[c] || {})[c = "ApplicationInsights2"] = s[c] || {},
         l = (l = t)[c = "ApplicationInsights"] = l[c] || {},
         t = s[e] = s[e] || {},
         f = t.v = t.v || [],
         c = l[e] = l[e] || {},
         d = c.v = c.v || [];
      for (r in (c.o = c.o || []).push(o), n(i), i) s[r] = i[r], f[r] = u, l[r] = i[r], d[r] = u, (a.n = a.n || []).push(r)
   }
}(this, function(e) {
   "use strict";
   ! function(e, n, t) {
      var r = Object.defineProperty;
      if (r) try {
         return r(e, n, t)
      } catch (i) {}
      typeof t.value !== undefined && (e[n] = t.value)
   }(e, "__esModule", {
      value: !0
   });
   var a = "function",
      u = "object",
      ne = "undefined",
      te = "prototype",
      c = "hasOwnProperty",
      l = Object,
      x = l[te],
      b = l.assign,
      I = l.create,
      w = l.defineProperty,
      T = x[c],
      C = null;

   function re(e) {
      e = !1 === (e = void 0 === e || e) ? null : C;
      return e || ((e = (e = (e = typeof globalThis !== ne ? globalThis : e) || typeof self === ne ? e : self) || typeof window === ne ? e : window) || typeof global === ne || (e = global), C = e), e
   }

   function S(e) {
      throw new TypeError(e)
   }

   function j(e) {
      if (I) return I(e);
      if (null == e) return {};
      var n = typeof e;

      function t() {}
      return n !== u && n !== a && S("Object prototype may only be an Object:" + e), t[te] = e, new t
   }(re() || {}).Symbol, (re() || {}).Reflect;
   var ie = b || function(e) {
         for (var n, t = 1, r = arguments.length; t < r; t++)
            for (var i in n = arguments[t]) x[c].call(n, i) && (e[i] = n[i]);
         return e
      },
      k = function(e, n) {
         return (k = l.setPrototypeOf || {
               __proto__: []
            }
            instanceof Array && function(e, n) {
               e.__proto__ = n
            } || function(e, n) {
               for (var t in n) n[c](t) && (e[t] = n[t])
            })(e, n)
      };
      
   function _(e, n) {
      function t() {
         this.constructor = e
      }
      typeof n !== a && null !== n && S("Class extends value " + n + " is not a constructor or null"), k(e, n), e[te] = null === n ? j(n) : (t[te] = n[te], new t)
   }

   function oe(e, n) {
      for (var t = 0, r = n.length, i = e.length; t < r; t++, i++) e[i] = n[t];
      return e
   }
   var ae = "initialize",
      ue = "name",
      ce = "getNotifyMgr",
      se = "identifier",
      A = "push",
      le = "isInitialized",
      fe = "config",
      de = "instrumentationKey",
      pe = "logger",
      R = "length",
      ve = "time",
      L = "processNext",
      ge = "getProcessTelContext",
      me = "addNotificationListener",
      he = "removeNotificationListener",
      ye = "stopPollingInternalLogs",
      xe = "onComplete",
      be = "getPlugin",
      Ie = "flush",
      we = "_extensions",
      Te = "splice",
      Ce = "teardown",
      Se = "messageId",
      ke = "message",
      _e = "isAsync",
      E = "_doTeardown",
      D = "update",
      P = "getNext",
      N = "diagLog",
      M = "setNextPlugin",
      Ee = "createNew",
      De = "cookieCfg",
      Pe = "indexOf",
      Ne = "substring",
      Me = "userAgent",
      Ae = "split",
      Re = "setEnabled",
      Le = "substr",
      Ue = "nodeType",
      qe = "apply",
      Fe = "replace",
      He = "enableDebugExceptions",
      Oe = "logInternalMessage",
      ze = "toLowerCase",
      je = "call",
      Ve = "type",
      Be = "handler",
      Ke = "listeners",
      Xe = "isChildEvt",
      We = "getCtx",
      Ge = "setCtx",
      Je = "complete",
      $e = "traceId",
      Qe = "traceFlags",
      Ye = "version",
      p = "",
      Ze = "channels",
      U = "core",
      en = "createPerfMgr",
      nn = "disabled",
      tn = "extensionConfig",
      rn = "processTelemetry",
      on = "priority",
      an = "eventsSent",
      un = "eventsDiscarded",
      cn = "eventsSendRequest",
      sn = "perfEvent",
      ln = "errorToConsole",
      fn = "warnToConsole",
      dn = "getPerfMgr",
      pn = "toISOString",
      vn = "endsWith",
      gn = "indexOf",
      mn = "trim",
      n = "toString",
      hn = "constructor",
      yn = w,
      xn = l.freeze,
      bn = l.keys,
      In = String[te],
      wn = In[mn],
      Tn = In[vn],
      Cn = Date[te][pn],
      In = Array.isArray,
      Sn = x[n],
      kn = T[n],
      _n = kn[je](l),
      En = /-([a-z])/g,
      Dn = /([^\w\d_$])/g,
      Pn = /^(\d+[\w\d_$])/,
      Nn = Object.getPrototypeOf;

   function Mn(e) {
      if (e) {
         if (Nn) return Nn(e);
         e = e.__proto__ || e[te] || e[hn];
         if (e) return e
      }
      return null
   }

   function K(e) {
      return e === undefined || typeof e === ne
   }

   function X(e) {
      return null === e || K(e)
   }

   function An(e) {
      return !X(e)
   }

   function Rn(e, n) {
      return !(!e || !T[je](e, n))
   }

   function Ln(e) {
      return !(!e || typeof e !== u)
   }

   function W(e) {
      return !(!e || typeof e !== a)
   }

   function Un(e) {
      var n = e;
      return e && J(e) ? (n = (n = e[Fe](En, function(e, n) {
         return n.toUpperCase()
      }))[Fe](Dn, "_"))[Fe](Pn, function(e, n) {
         return "_" + n
      }) : n
   }

   function G(e, n) {
      if (e)
         for (var t in e) T[je](e, t) && n[je](e, t, e[t])
   }

   function qn(e, n) {
      var t = !1;
      if (e && n && !(t = e === n)) {
         if (Tn) return e[vn](n);
         var r = e,
            i = n,
            e = !1,
            n = i ? i[R] : 0,
            o = r ? r[R] : 0;
         if (n && o && n <= o && !(e = r === i)) {
            for (var a = o - 1, u = n - 1; 0 <= u; u--) {
               if (r[a] != i[u]) return;
               a--
            }
            e = !0
         }
         return e
      }
      return t
   }

   function Fn(e, n) {
      return !(!e || !n) && -1 !== e[Pe](n)
   }

   function Hn(e) {
      return !(!e || "[object Date]" !== Sn[je](e))
   }
   var q = In || function(e) {
      return !(!e || "[object Array]" !== Sn[je](e))
   };

   function On(e) {
      return !(!e || "[object Error]" !== Sn[je](e))
   }

   function J(e) {
      return "string" == typeof e
   }

   function zn(e) {
      return "number" == typeof e
   }

   function jn(e) {
      return "boolean" == typeof e
   }

   function Vn(e) {
      return e && "object" == typeof e && (!(e = (Nn || Mn)(e)) || typeof(e = e[hn] && T[je](e, hn) ? e[hn] : e) === a && kn[je](e) === _n)
   }

   function Bn(e) {
      if (e) {
         if (Cn) return e[pn]();
         var n;
         return e && e.getUTCFullYear ? (n = function(e) {
            e = "" + e;
            return 1 === e[R] ? "0" + e : e
         }, e.getUTCFullYear() + "-" + n(1 + e.getUTCMonth()) + "-" + n(e.getUTCDate()) + "T" + n(e.getUTCHours()) + ":" + n(e.getUTCMinutes()) + ":" + n(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z") : void 0
      }
   }

   function $(e, n, t) {
      var r = e[R];
      try {
         for (var i = 0; i < r && !(i in e && -1 === n[je](t || e, e[i], i, e)); i++);
      } catch (o) {}
   }

   function Kn(e, n, t) {
      if (e) {
         if (e[gn]) return e[gn](n, t);
         var r = e[R],
            t = t || 0;
         try {
            for (var i = Math.max(0 <= t ? t : r - Math.abs(t), 0); i < r; i++)
               if (i in e && e[i] === n) return i
         } catch (o) {}
      }
      return -1
   }

   function Xn(e, n, t) {
      if (e) {
         if (e.map) return e.map(n, t);
         var r = e[R],
            i = t || e,
            o = Array(r);
         try {
            for (var a = 0; a < r; a++) a in e && (o[a] = n[je](i, e[a], e))
         } catch (u) {}
      }
      return o
   }

   function Wn(e, n, t) {
      var r;
      if (e) {
         if (e.reduce) return e.reduce(n, t);
         var i = e[R],
            o = 0;
         if (3 <= arguments[R]) r = t;
         else {
            for (; o < i && !(o in e);) o++;
            r = e[o++]
         }
         for (; o < i;) o in e && (r = n(r, e[o], o, e)), o++
      }
      return r
   }

   function V(e) {
      return e && (wn && e[mn] ? e[mn]() : e[Fe] ? e[Fe](/^\s+|(?=\s)\s+$/g, p) : e)
   }
   var Gn = !{
         toString: null
      }.propertyIsEnumerable("toString"),
      Jn = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];

   function $n(e) {
      var n = typeof e;
      if (n === a || n === u && null !== e || S("objKeys called on non-object"), !Gn && bn) return bn(e);
      var t, r = [];
      for (t in e) e && T[je](e, t) && r[A](t);
      if (Gn)
         for (var i = Jn[R], o = 0; o < i; o++) e && T[je](e, Jn[o]) && r[A](Jn[o]);
      return r
   }

   function Qn(e, n, t, r) {
      if (yn) try {
         var i = {
            enumerable: !0,
            configurable: !0
         };
         return t && (i.get = t), r && (i.set = r), yn(e, n, i), !0
      } catch (o) {}
      return !1
   }

   function Yn(e) {
      return xn && G(e, function(e, n) {
         (q(n) || Ln(n)) && xn(n)
      }), Zn(e)
   }
   var Zn = xn || function(e) {
      return e
   };

   function et() {
      var e = Date;
      return e.now ? e.now() : (new e).getTime()
   }

   function Q(e) {
      return On(e) ? e[ue] : p
   }

   function v(e, n, t, r, i) {
      var o = t;
      !e || (o = e[n]) === t || i && !i(o) || r && !r(t) || (e[n] = o = t)
   }

   function F(e, n, t) {
      var r;
      return e ? !(r = e[n]) && X(r) && (r = K(t) ? {} : t, e[n] = r) : r = K(t) ? {} : t, r
   }

   function nt(e, n) {
      return X(e) ? n : e
   }

   function tt(e) {
      return !!e
   }

   function rt(e) {
      throw Error(e)
   }

   function it(e, n) {
      var t = null,
         r = null;
      return W(e) ? t = e : r = e,
         function() {
            var e = arguments;
            if (r = t ? t() : r) return r[n][qe](r, e)
         }
   }

   function ot(t, r, i) {
      if (t && r && Ln(t) && Ln(r))
         for (var e in r) ! function(n) {
            var e;
            J(n) && (W(e = r[n]) ? i && !i(n, !0, r, t) || (t[n] = it(r, n)) : i && !i(n, !1, r, t) || (Rn(t, n) && delete t[n], Qn(t, n, function() {
               return r[n]
            }, function(e) {
               r[n] = e
            }) || (t[n] = e)))
         }(e)
   }

   function at(e, n, t, r, i) {
      e && n && t && (!1 === i && !K(e[n]) || (e[n] = it(t, r)))
   }

   function ut(n, t, e, r) {
      n && t && Ln(n) && q(e) && $(e, function(e) {
         J(e) && at(n, e, t, e, r)
      })
   }

   function ct(e) {
      return e && b ? l(b({}, e)) : e
   }

   function st() {
      var e = arguments,
         n = e[0] || {},
         t = e[R],
         r = !1,
         i = 1;
      for (0 < t && jn(n) && (r = n, n = e[i] || {}, i++), Ln(n) || (n = {}); i < t; i++) {
         var o, a, u, c, s = e[i],
            l = q(s),
            f = Ln(s);
         for (o in s)(l && o in s || f && T[je](s, o)) && (a = s[o], u = void 0, r && a && ((u = q(a)) || Vn(a)) && (c = n[o], u ? q(c) || (c = []) : Vn(c) || (c = {}), a = st(r, c, a)), a !== undefined && (n[o] = a))
      }
      return n
   }

   function lt(e) {
      var t = {};
      return G(e, function(e, n) {
         t[e] = n, t[n] = e
      }), Yn(t)
   }
   var n = "undefined",
      ft = "constructor",
      dt = "prototype",
      pt = "function",
      vt = "_dynInstFuncs",
      gt = "_isDynProxy",
      mt = "_dynClass",
      ht = "_dynInstChk",
      yt = ht,
      xt = "_dfOpts",
      bt = "_unknown_",
      It = "__proto__",
      wt = "_dyn" + It,
      In = "__dynProto$Gbl",
      Tt = "_dynInstProto",
      Ct = "useBaseInst",
      St = "setInstFuncs",
      kt = Object,
      _t = kt.getPrototypeOf,
      Et = kt.getOwnPropertyNames,
      n = (t = (t = (t = (t = typeof globalThis != n ? globalThis : t) || typeof self == n ? t : self) || typeof window == n ? t : window) || typeof global == n ? t : global) || {},
      Dt = n[In] || (n[In] = {
         o: ((t = {})[St] = !0, t[Ct] = !0, t),
         n: 1e3
      });

   function Pt(e, n) {
      return e && kt[dt].hasOwnProperty.call(e, n)
   }

   function Nt(e) {
      return e && (e === kt[dt] || e === Array[dt])
   }

   function Mt(e) {
      return Nt(e) || e === Function[dt]
   }

   function At(e) {
      if (e) {
         if (_t) return _t(e);
         var n = e[It] || e[dt] || (e[ft] ? e[ft][dt] : null),
            t = e[wt] || n;
         Pt(e, wt) || (delete e[Tt], t = e[wt] = e[Tt] || e[wt], e[Tt] = n)
      }
      return t
   }

   function Rt(e, n) {
      var t = [];
      if (Et) t = Et(e);
      else
         for (var r in e) "string" == typeof r && Pt(e, r) && t.push(r);
      if (t && 0 < t.length)
         for (var i = 0; i < t.length; i++) n(t[i])
   }

   function Lt(e, n, t) {
      return n !== ft && typeof e[n] === pt && (t || Pt(e, n)) && n !== It && n !== dt
   }

   function Ut(e) {
      throw new TypeError("DynamicProto: " + e)
   }

   function qt() {
      return Object.create && (e = Object.create) ? e(null) : {};
      var e
   }

   function Ft(e, n) {
      for (var t = e.length - 1; 0 <= t; t--)
         if (e[t] === n) return 1
   }

   function Ht(e, n) {
      return Pt(e, dt) ? e.name || n || bt : ((e || {})[ft] || {}).name || n || bt
   }

   function m(e, r, n, t) {
      Pt(e, dt) || Ut("theClass is an invalid class definition.");
      var i, o, a, u, c, s, l = e[dt],
         f = (function(e) {
            if (!_t) return 1;
            for (var n = [], t = At(r); t && !Mt(t) && !Ft(n, t);) {
               if (t === e) return 1;
               n.push(t), t = At(t)
            }
         }(l) || Ut("[" + Ht(e) + "] not in hierarchy of [" + Ht(r) + "]"), null),
         e = (Pt(l, mt) ? f = l[mt] : (f = "_dynCls$" + Ht(e, "_") + "$" + Dt.n, Dt.n++, l[mt] = f), m[xt]),
         d = !!e[Ct],
         p = (d && t && t[Ct] !== undefined && (d = !!t[Ct]), i = r, o = qt(), Rt(i, function(e) {
            !o[e] && Lt(i, e, !1) && (o[e] = i[e])
         }), o),
         d = (n(r, function(e, n, t, o) {
            function r(e, n, t) {
               var r, i = n[t];
               return i[gt] && o && !1 !== (r = e[vt] || {})[yt] && (i = (r[n[mt]] || {})[t] || i),
                  function() {
                     return i.apply(e, arguments)
                  }
            }
            for (var i = qt(), a = (Rt(t, function(e) {
                  i[e] = r(n, t, e)
               }), At(e)), u = []; a && !Mt(a) && !Ft(u, a);) Rt(a, function(e) {
               !i[e] && Lt(a, e, !_t) && (i[e] = r(n, a, e))
            }), u.push(a), a = At(a);
            return i
         }(l, r, p, d)), !!_t && !!e[St]);
      a = l, n = f, u = r, c = p, e = !1 !== (d = d && t ? !!t[St] : d), Nt(a) || Nt(l = u[vt] = u[vt] || qt()) || (s = l[n] = l[n] || qt(), !1 !== l[yt] && (l[yt] = !!e), Nt(s) || Rt(u, function(e) {
         var t, r, i;
         Lt(u, e, !1) && u[e] !== c[e] && (s[e] = u[e], delete u[e], Pt(a, e) && (!a[e] || a[e][gt]) || (a[e] = (t = a, r = e, (i = function() {
            var e, n;
            return (function(e, n, t, r) {
               var i = null;
               if (e && Pt(t, mt)) {
                  var o = e[vt] || qt();
                  if ((i = (o[t[mt]] || qt())[n]) || Ut("Missing [" + n + "] " + pt), !i[ht] && !1 !== o[yt]) {
                     for (var a = !Pt(e, n), u = At(e), c = []; a && u && !Mt(u) && !Ft(c, u);) {
                        var s = u[n];
                        if (s) {
                           a = s === r;
                           break
                        }
                        c.push(u), u = At(u)
                     }
                     try {
                        a && (e[n] = i), i[ht] = 1
                     } catch (l) {
                        o[yt] = !1
                     }
                  }
               }
               return i
            }(this, r, t, i) || (typeof(n = (n = t[e = r]) === i ? At(t)[e] : n) !== pt && Ut("[" + e + "] is not a " + pt), n)).apply(this, arguments)
         })[gt] = 1, i)))
      }))
   }
   m[xt] = Dt.o;
   var Ot = "window",
      zt = "document",
      jt = "documentMode",
      Vt = "navigator",
      Bt = "location",
      Kt = "console",
      Xt = "performance",
      Wt = "JSON",
      Gt = "crypto",
      Jt = "msCrypto",
      $t = "msie",
      Qt = "trident/",
      Yt = "XMLHttpRequest",
      Zt = null,
      er = null,
      nr = !1,
      tr = null,
      rr = null;

   function ir(e, n) {
      var t, r = !1;
      if (e) {
         try {
            (r = n in e) || (t = e[te]) && (r = n in t)
         } catch (i) {}
         if (!r) try {
            r = !K((new e)[n])
         } catch (i) {}
      }
      return r
   }

   function Y(e) {
      var n = re();
      return n && n[e] ? n[e] : e === Ot && or() ? window : null
   }

   function or() {
      return typeof window === u && window
   }

   function ar() {
      return or() ? window : Y(Ot)
   }

   function ur() {
      return typeof document === u && document
   }

   function cr() {
      return ur() ? document : Y(zt)
   }

   function sr() {
      return !(typeof navigator !== u || !navigator)
   }

   function lr() {
      return sr() ? navigator : Y(Vt)
   }

   function fr() {
      return typeof history === u && history
   }

   function dr(e) {
      if (e && nr) {
         e = Y("__mockLocation");
         if (e) return e
      }
      return typeof location === u && location ? location : Y(Bt)
   }

   function pr() {
      return Y(Xt)
   }

   function vr() {
      return typeof JSON === u && JSON || null !== Y(Wt)
   }

   function gr() {
      return vr() ? JSON || Y(Wt) : null
   }

   function mr() {
      var e = lr();
      return !e || e[Me] === er && null !== Zt || (e = ((er = e[Me]) || p)[ze](), Zt = Fn(e, $t) || Fn(e, Qt)), Zt
   }

   function hr(e) {
      var n = ((e = (e = void 0 === e ? null : e) ? e : (n = lr() || {}) ? (n[Me] || p)[ze]() : p) || p)[ze]();
      if (Fn(n, $t)) return e = cr() || {}, Math.max(parseInt(n[Ae]($t)[1]), e[jt] || 0);
      if (Fn(n, Qt)) {
         e = parseInt(n[Ae](Qt)[1]);
         if (e) return e + 4
      }
      return null
   }

   function Z(e) {
      var n = Object[te].toString[je](e),
         t = p;
      return "[object Error]" === n ? t = "{ stack: '" + e.stack + "', message: '" + e.message + "', name: '" + e[ue] + "'" : vr() && (t = gr().stringify(e)), n + t
   }

   function yr() {
      return rr = null === rr ? sr() && !!lr().sendBeacon : rr
   }

   function xr(e) {
      var n = !1;
      try {
         var n = !!Y("fetch"),
            t = Y("Request");
         n && e && t && (n = ir(t, "keepalive"))
      } catch (r) {}
      return n
   }

   function br() {
      return tr = null === tr && (tr = typeof XDomainRequest !== ne) && Ir() ? tr && !ir(Y(Yt), "withCredentials") : tr
   }

   function Ir() {
      var e = !1;
      try {
         e = !!Y(Yt)
      } catch (n) {}
      return e
   }

   function wr(e, n) {
      if (e)
         for (var t = 0; t < e[R]; t++) {
            var r = e[t];
            if (r[ue] && r[ue] === n) return r
         }
      return {}
   }

   function Tr(e) {
      var n = cr();
      return n && e ? wr(n.querySelectorAll("meta"), e).content : null
   }
   var Cr, Sr = ["eventsSent", "eventsDiscarded", "eventsSendRequest", "perfEvent"],
      kr = null;

   function _r(e) {
      var n = kr;
      return (n = n || !0 === e.disableDbgExt ? n : kr || (e = Y("Microsoft"), kr = e ? e.ApplicationInsights : kr)) ? n.ChromeDbgExt : null
   }

   function Er(e) {
      return e ? '"' + e[Fe](/\"/g, p) + '"' : p
   }

   function Dr(e, n) {
      var t, r = typeof console !== ne ? console : Y(Kt);
      r && (t = "log", W(r[t = r[e] ? e : t]) && r[t](n))
   }
   Nr.dataType = "MessageData";
   var Pr = Nr;

   function Nr(e, n, t, r) {
      void 0 === t && (t = !1), this[Se] = e, this[ke] = (t ? "AI: " : "AI (Internal): ") + e;
      t = p, vr() && (t = gr().stringify(r)), e = (n ? " message:" + Er(n) : p) + (r ? " props:" + Er(t) : p);
      this[ke] += e
   }

   function Mr(e, n) {
      return (e || {})[pe] || new Ar(n)
   }
   Rr.__ieDyn = 1;
   var Ar = Rr;

   function Rr(r) {
      this.identifier = "DiagnosticLogger", this.queue = [];
      var c, i, s, l, f = 0,
         d = {};
      m(Rr, this, function(o) {
         var e;

         function a(e, n) {
            var t, r;
            s <= f || (r = !0, t = "AITR_" + n[Se], d[t] ? r = !1 : d[t] = !0, r && (e <= i && (o.queue[A](n), f++, u(1 === e ? "error" : "warn", n)), f === s && (r = new Pr(23, t = "Internal events throttle limit per PageView reached for this app.", !1), o.queue[A](r), 1 === e ? o[ln](t) : o[fn](t))))
         }

         function u(e, n) {
            var t = _r(r || {});
            t && t[N] && t[N](e, n)
         }
         c = nt((e = r || {}).loggingLevelConsole, 0), i = nt(e.loggingLevelTelemetry, 1), s = nt(e.maxMessageLimit, 25), l = nt(e.enableDebug, nt(e[He], !1)), o.consoleLoggingLevel = function() {
            return c
         }, o.telemetryLoggingLevel = function() {
            return i
         }, o.maxInternalMessageLimit = function() {
            return s
         }, o[He] = function() {
            return l
         }, o.throwInternal = function(e, n, t, r, i) {
            n = new Pr(n, t, i = void 0 !== i && i, r);
            if (l) throw Z(n);
            t = 1 === e ? ln : fn;
            K(n[ke]) ? u("throw" + (1 === e ? "Critical" : "Warning"), n) : (i ? (r = +n[Se], !d[r] && e <= c && (o[t](n[ke]), d[r] = !0)) : e <= c && o[t](n[ke]), a(e, n))
         }, o[fn] = function(e) {
            Dr("warn", e), u("warning", e)
         }, o[ln] = function(e) {
            Dr("error", e), u("error", e)
         }, o.resetInternalMessageCount = function() {
            f = 0, d = {}
         }, o[Oe] = a
      })
   }

   function Lr(e) {
      return e || new Ar
   }

   function H(e, n, t, r, i, o) {
      void 0 === o && (o = !1), Lr(e).throwInternal(n, t, r, i, o)
   }

   function Ur(e, n) {
      Lr(e)[fn](n)
   }
   var qr = "ParentContextKey",
      Fr = "ChildrenContextKey",
      Hr = (Or.ParentContextKey = "parent", Or.ChildrenContextKey = "childEvts", Or);

   function Or(e, i, n) {
      var t, o = this,
         a = !1;
      o.start = et(), o[ue] = e, o[_e] = n, o[Xe] = function() {
         return !1
      }, W(i) && (a = Qn(o, "payload", function() {
         return !t && W(i) && (t = i(), i = null), t
      })), o[We] = function(e) {
         return e ? (e === Or[qr] || e === Or[Fr] ? o : o.ctx || {})[e] : null
      }, o[Ge] = function(e, n) {
         e && (e === Or[qr] ? (o[e] || (o[Xe] = function() {
            return !0
         }), o[e] = n) : e === Or[Fr] ? o[e] = n : (o.ctx = o.ctx || {})[e] = n)
      }, o[Je] = function() {
         var e = 0,
            n = o[We](Or[Fr]);
         if (q(n))
            for (var t = 0; t < n[R]; t++) {
               var r = n[t];
               r && (e += r[ve])
            }
         o[ve] = et() - o.start, o.exTime = o[ve] - e, o[Je] = function() {}, !a && W(i) && (o.payload = i())
      }
   }
   jr.__ieDyn = 1;
   var zr = jr;

   function jr(n) {
      this.ctx = {}, m(jr, this, function(t) {
         t.create = function(e, n, t) {
            return new Hr(e, n, t)
         }, t.fire = function(e) {
            e && (e[Je](), n && W(n[sn]) && n[sn](e))
         }, t[Ge] = function(e, n) {
            e && ((t.ctx = t.ctx || {})[e] = n)
         }, t[We] = function(e) {
            return (t.ctx || {})[e]
         }
      })
   }
   var Vr = "CoreUtils.doPerf";

   function Br(e, n, t, r, i) {
      if (e)
         if (e = e[dn] ? e[dn]() : e) {
            var o, a = void 0,
               u = e[We](Vr);
            try {
               if (a = e.create(n(), r, i)) return u && a[Ge] && (a[Ge](Hr[qr], u), u[We] && u[Ge] && ((o = u[We](Hr[Fr])) || (o = [], u[Ge](Hr[Fr], o)), o[A](a))), e[Ge](Vr, a), t(a)
            } catch (c) {
               a && a[Ge] && a[Ge]("exception", c)
            } finally {
               a && e.fire(a), e[Ge](Vr, u)
            }
         } return t()
   }
   var Kr = 4294967296,
      Xr = 4294967295,
      Wr = !1,
      Gr = 123456789,
      Jr = 987654321;

   function $r(e) {
      e < 0 && (e >>>= 0), Gr = 123456789 + e & Xr, Jr = 987654321 - e & Xr, Wr = !0
   }

   function Qr() {
      try {
         var e = 2147483647 & et();
         $r((Math.random() * Kr ^ e) + e)
      } catch (n) {}
   }

   function Yr(e) {
      return 0 < e ? Math.floor(Zr() / Xr * (e + 1)) >>> 0 : 0
   }

   function Zr(e) {
      var n = 0,
         t = Y(Gt) || Y(Jt);
      return 0 === (n = t && t.getRandomValues ? t.getRandomValues(new Uint32Array(1))[0] & Xr : n) && mr() && (Wr || Qr(), n = ei() & Xr), 0 === n && (n = Math.floor(Kr * Math.random() | 0)), e || (n >>>= 0), n
   }

   function ei(e) {
      var n = ((Jr = 36969 * (65535 & Jr) + (Jr >> 16) & Xr) << 16) + (65535 & (Gr = 18e3 * (65535 & Gr) + (Gr >> 16) & Xr)) >>> 0 & Xr | 0;
      return e || (n >>>= 0), n
   }

   function ni(e) {
      void 0 === e && (e = 22);
      for (var n = Zr() >>> 0, t = 0, r = p; r[R] < e;) r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" [0 | 63 & n] || "", n >>>= 6, 5 == ++t && (n = (Zr() << 2 & 4294967295 | 3 & n) >>> 0, t = 0);
      return r
   }
   var ti = w,
      ri = "." + ni(6),
      ii = 0;

   function oi(e) {
      return 1 === e[Ue] || 9 === e[Ue] || !+e[Ue]
   }

   function ai(e, n) {
      return Un(e + ii++ + ((n = void 0 !== n && n) ? ".2.8.18" : p) + ri)
   }

   function ui(e) {
      var o = {
         id: ai("_aiData-" + (e || p) + ".2.8.18"),
         accept: oi,
         get: function(e, n, t, r) {
            var i = e[o.id];
            return i ? i[Un(n)] : (r && ((i = function(e, n) {
               var t = n[e.id];
               if (!t) {
                  t = {};
                  try {
                     oi(n) && ! function(e, n, t) {
                        if (ti) try {
                           return ti(e, n, {
                              value: t,
                              enumerable: !1,
                              configurable: !0
                           }), 1
                        } catch (r) {}
                     }(n, e.id, t) && (n[e.id] = t)
                  } catch (r) {}
               }
               return t
            }(o, e))[Un(n)] = t), t)
         },
         kill: function(e, n) {
            if (e && e[n]) try {
               delete e[n]
            } catch (t) {}
         }
      };
      return o
   }
   var ci = "toGMTString",
      si = "toUTCString",
      li = "cookie",
      fi = "expires",
      di = "enabled",
      pi = "isCookieUseDisabled",
      vi = "disableCookiesUsage",
      gi = "_ckMgr",
      mi = null,
      hi = null,
      yi = null,
      xi = cr(),
      bi = {},
      Ii = {};

   function wi(e, n) {
      var t = ki[gi] || Ii[gi];
      return t || (t = ki[gi] = ki(e, n), Ii[gi] = t), t
   }

   function Ti(e) {
      return !e || e.isEnabled()
   }

   function Ci(e, n) {
      return n && e && q(e.ignoreCookies) && -1 !== e.ignoreCookies[Pe](n)
   }

   function Si(e, n) {
      var t;
      return e ? t = e.getCookieMgr() : n && (t = n[De][gi] || ki(n)), t || wi(n, (e || {})[pe])
   }

   function ki(e, i) {
      v(t = (e = e || Ii)[De] = e[De] || {}, "domain", e.cookieDomain, An, X), v(t, "path", e.cookiePath || "/", null, X), X(t[di]) && (n = void 0, K(e[pi]) || (n = !e[pi]), K(e[vi]) || (n = !e[vi]), t[di] = n);
      var n, t, s = t,
         l = s.path || "/",
         f = s.domain,
         r = !1 !== s[di],
         d = ((e = {
            isEnabled: function() {
               var e = r && _i(i),
                  n = Ii[gi];
               return e && n && d !== n ? Ti(n) : e
            }
         })[Re] = function(e) {
            r = !1 !== e
         }, e.set = function(e, n, t, r, i) {
            var o, a, u, c = !1;
            return !Ti(d) || (a = s, (u = e) && a && q(a.blockedCookies) && -1 !== a.blockedCookies[Pe](u) || Ci(a, u)) || (a = {}, -1 !== (o = (u = V(n || p))[Pe](";")) && (u = V(n[Ne](0, o)), a = Ei(n[Ne](o + 1))), v(a, "domain", r || f, tt, K), X(t) || (o = mr(), K(a[fi]) && 0 < (n = et() + 1e3 * t) && ((r = new Date).setTime(n), v(a, fi, Di(r, o ? ci : si) || Di(r, o ? ci : si) || p, tt)), o || v(a, "max-age", p + t, null, K)), (n = dr()) && "https:" === n.protocol && (v(a, "secure", null, null, K), (hi = null === hi ? !Mi((lr() || {})[Me]) : hi) && v(a, "SameSite", "None", null, K)), v(a, "path", i || l, null, K), (s.setCookie || Ni)(e, Pi(u, a)), c = !0), c
         }, e.get = function(e) {
            var n = p;
            return Ti(d) && !Ci(s, e) ? (s.getCookie || function(e) {
               var n, t = p;
               return xi && (n = xi[li] || p, yi !== n && (bi = Ei(n), yi = n), t = V(bi[e] || p)), t
            })(e) : n
         }, e.del = function(e, n) {
            return !!Ti(d) && d.purge(e, n)
         }, e.purge = function(e, n) {
            var t, r = !1;
            return _i(i) && ((t = {}).path = n || "/", t[fi] = "Thu, 01 Jan 1970 00:00:01 GMT", n = t, mr() || (n["max-age"] = "0"), (s.delCookie || Ni)(e, Pi(p, n)), r = !0), r
         }, e);
      return d[gi] = d
   }

   function _i(e) {
      if (null === mi) {
         mi = !1;
         try {
            mi = (xi || {})[li] !== undefined
         } catch (n) {
            H(e, 2, 68, "Cannot access document.cookie - " + Q(n), {
               exception: Z(n)
            })
         }
      }
      return mi
   }

   function Ei(e) {
      var t = {};
      return e && e[R] && $(V(e)[Ae](";"), function(e) {
         var n;
         (e = V(e || p)) && (-1 === (n = e[Pe]("=")) ? t[e] = null : t[V(e[Ne](0, n))] = V(e[Ne](n + 1)))
      }), t
   }

   function Di(e, n) {
      return W(e[n]) ? e[n]() : null
   }

   function Pi(e, n) {
      var t = e || p;
      return G(n, function(e, n) {
         t += "; " + e + (X(n) ? p : "=" + n)
      }), t
   }

   function Ni(e, n) {
      xi && (xi[li] = e + "=" + n)
   }

   function Mi(e) {
      return !(!J(e) || !Fn(e, "CPU iPhone OS 12") && !Fn(e, "iPad; CPU OS 12") && !(Fn(e, "Macintosh; Intel Mac OS X 10_14") && Fn(e, "Version/") && Fn(e, "Safari")) && (!Fn(e, "Macintosh; Intel Mac OS X 10_14") || !qn(e, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) && !Fn(e, "Chrome/5") && !Fn(e, "Chrome/6") && (!Fn(e, "UnrealEngine") || Fn(e, "Chrome")) && !Fn(e, "UCBrowser/12") && !Fn(e, "UCBrowser/11"))
   }
   var Ai = "on",
      Ri = "attachEvent",
      Li = "addEventListener",
      Ui = "detachEvent",
      qi = "removeEventListener",
      Fi = "events",
      Hi = "visibilitychange",
      Oi = "pagehide",
      zi = "beforeunload",
      ji = ai("aiEvtPageHide"),
      Vi = (ai("aiEvtPageShow"), /\.[\.]+/g),
      Bi = /[\.]+$/,
      Ki = 1,
      Xi = ui("events"),
      Wi = /^([^.]*)(?:\.(.+)|)/;

   function Gi(e) {
      return e && e[Fe] ? e[Fe](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, p) : e
   }

   function Ji(e, n) {
      n && (t = p, q(n) ? (t = p, $(n, function(e) {
         (e = Gi(e)) && ("." !== e[0] && (e = "." + e), t += e)
      })) : t = Gi(n), t && ("." !== t[0] && (t = "." + t), e = (e || p) + t));
      var t, n = Wi.exec(e || p) || [],
         e = {};
      return e[Ve] = n[1], e.ns = (n[2] || p).replace(Vi, ".").replace(Bi, p)[Ae](".").sort().join("."), e
   }

   function $i(e, n, t) {
      e = Xi.get(e, Fi, {}, t = void 0 === t || t);
      return e[n] || (e[n] = [])
   }

   function Qi(e, n, t, r) {
      e && n && n[Ve] && (e[qi] ? e[qi](n[Ve], t, r) : e[Ui] && e[Ui](Ai + n[Ve], t))
   }

   function Yi(e, n, t, r) {
      for (var i = n[R]; i--;) {
         var o = n[i];
         !o || t.ns && t.ns !== o.evtName.ns || r && !r(o) || (Qi(e, o.evtName, o[Be], o.capture), n[Te](i, 1))
      }
   }

   function Zi(e, n) {
      return n ? Ji("xx", q(n) ? [e].concat(n) : [e, n]).ns[Ae](".") : e
   }

   function eo(e, n, t, r, i) {
      void 0 === i && (i = !1);
      var o, a, u = !1;
      if (e) try {
         var c, s = Ji(n, r),
            l = s,
            f = t,
            d = i,
            p = !1;
         (a = e) && l && l[Ve] && f && (a[Li] ? (a[Li](l[Ve], f, d), p = !0) : a[Ri] && (a[Ri](Ai + l[Ve], f), p = !0)), (u = p) && Xi.accept(e) && ((o = {
            guid: Ki++,
            evtName: s
         })[Be] = t, o.capture = i, c = o, $i(e, s.type)[A](c))
      } catch (v) {}
      return u
   }

   function no(e, n, t, r, i) {
      if (void 0 === i && (i = !1), e) try {
         var o = Ji(n, r),
            a = !1,
            u = e,
            c = function(e) {
               return !((!o.ns || t) && e[Be] !== t) && (a = !0)
            };
         (s = o)[Ve] ? Yi(u, $i(u, s[Ve]), s, c): (G(l = Xi.get(u, Fi, {}), function(e, n) {
            Yi(u, n, s, c)
         }), 0 === $n(l)[R] && Xi.kill(u, Fi)), a || Qi(e, o, t, i)
      } catch (f) {}
      var s, l
   }

   function to(e, n, t) {
      var r = !1,
         i = ar(),
         i = (i && (r = eo(i, e, n, t), r = eo(i.body, e, n, t) || r), cr());
      return i && eo(i, e, n, t) || r
   }

   function ro(e, n, t) {
      var r = ar(),
         r = (r && (no(r, e, n, t), no(r.body, e, n, t)), cr());
      r && no(r, e, n, t)
   }

   function io(e, n, t, r) {
      var i = !1;
      return n && e && 0 < e[R] && $(e, function(e) {
         !e || t && -1 !== Kn(t, e) || (i = to(e, n, r) || i)
      }), i
   }

   function oo(e, n, t) {
      e && q(e) && $(e, function(e) {
         e && ro(e, n, t)
      })
   }

   function ao(t, e, n) {
      var r = Zi(ji, n),
         i = io([Oi], t, e, r);
      return !(i = (!e || -1 === Kn(e, Hi)) && io([Hi], function(e) {
         var n = cr();
         t && n && "hidden" === n.visibilityState && t(e)
      }, e, r) || i) && e ? ao(t, null, n) : i
   }
   var uo, co = null;

   function so() {
      var e = lo();
      return e[Ne](0, 8) + "-" + e[Ne](8, 12) + "-" + e[Ne](12, 16) + "-" + e[Ne](16, 20) + "-" + e[Ne](20)
   }

   function lo() {
      for (var e, n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], t = p, r = 0; r < 4; r++) t += n[15 & (e = Zr())] + n[e >> 4 & 15] + n[e >> 8 & 15] + n[e >> 12 & 15] + n[e >> 16 & 15] + n[e >> 20 & 15] + n[e >> 24 & 15] + n[e >> 28 & 15];
      var i = n[8 + (3 & Zr()) | 0];
      return t[Le](0, 8) + t[Le](9, 4) + "4" + t[Le](13, 3) + i + t[Le](16, 3) + t[Le](19, 12)
   }
   var fo = {
      _canUseCookies: undefined,
      isTypeof: function(e, n) {
         return typeof e === n
      },
      isUndefined: K,
      isNullOrUndefined: X,
      hasOwnProperty: Rn,
      isFunction: W,
      isObject: Ln,
      isDate: Hn,
      isArray: q,
      isError: On,
      isString: J,
      isNumber: zn,
      isBoolean: jn,
      toISOString: Bn,
      arrForEach: $,
      arrIndexOf: Kn,
      arrMap: Xn,
      arrReduce: Wn,
      strTrim: V,
      objCreate: j,
      objKeys: $n,
      objDefineAccessors: Qn,
      addEventHandler: to,
      dateNow: et,
      isIE: mr,
      disableCookies: vo,
      newGuid: so,
      perfNow: function() {
         var e = pr();
         return e && e.now ? e.now() : et()
      },
      newId: ni,
      randomValue: Yr,
      random32: Zr,
      mwcRandomSeed: function(e) {
         e ? $r(e) : Qr()
      },
      mwcRandom32: ei,
      generateW3CId: lo
   };

   function po(e, n) {
      e = wi(e, n), n = fo._canUseCookies;
      return null === co && (co = [], uo = n, Qn(fo, "_canUseCookies", function() {
         return uo
      }, function(n) {
         uo = n, $(co, function(e) {
            e[Re](n)
         })
      })), -1 === Kn(co, e) && co[A](e), jn(n) && e[Re](n), jn(uo) && e[Re](uo), e
   }

   function vo() {
      po()[Re](!1)
   }
   var go = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})(-[^\s]{1,64})?$/i,
      mo = "00",
      ho = "ff",
      yo = "00000000000000000000000000000000",
      xo = "0000000000000000";

   function bo(e, n, t) {
      return e && e[R] === n && e !== t && e.match(/^[\da-f]*$/i)
   }

   function Io(e, n, t) {
      return bo(e, n) ? e : t
   }

   function wo(e, n, t, r) {
      var i = {};
      return i[Ye] = bo(r, 2, ho) ? r : mo, i[$e] = Co(e) ? e : lo(), i.spanId = So(n) ? n : lo()[Le](0, 16), i.traceFlags = 0 <= t && t <= 255 ? t : 1, i
   }

   function To(e, n) {
      if (!e) return null;
      if (!(e = q(e) ? e[0] || "" : e) || !J(e) || 8192 < e[R]) return null; - 1 !== e[Pe](",") && (e = (t = e[Ae](","))[0 < n && t[R] > n ? n : 0]);
      var t = go.exec(V(e));
      return t && t[1] !== ho && t[2] !== yo && t[3] !== xo ? ((n = {
         version: (t[1] || p)[ze](),
         traceId: (t[2] || p)[ze](),
         spanId: (t[3] || p)[ze]()
      })[Qe] = parseInt(t[4], 16), n) : null
   }

   function Co(e) {
      return bo(e, 32, yo)
   }

   function So(e) {
      return bo(e, 16, xo)
   }

   function ko(e) {
      var n, t;
      return e ? (bo(n = function(e) {
         for (var n = (e = isNaN(e) || e < 0 || 255 < e ? 1 : e).toString(16); n[R] < 2;) n = "0" + n;
         return n
      }(e[Qe]), 2) || (n = "01"), t = e[Ye] || mo, "".concat((t = "00" !== t && "ff" !== t ? mo : t).toLowerCase(), "-").concat(Io(e.traceId, 32, yo).toLowerCase(), "-").concat(Io(e.spanId, 16, xo).toLowerCase(), "-").concat(n.toLowerCase())) : ""
   }
   var _o = ui("plugin");

   function Eo(e) {
      return _o.get(e, "state", {}, !0)
   }

   function Do(t, r) {
      for (var i, e = [], n = null, o = t[P](); o;) {
         var a = o[be]();
         a && (n && W(n[M]) && W(a[rn]) && n[M](a), (W(a[le]) ? a[le]() : (i = Eo(a))[le]) || e[A](a), n = a, o = o[P]())
      }
      $(e, function(e) {
         var n = t[U]();
         e[ae](t.getCfg(), n, r, t[P]()), i = Eo(e), e[U] || i[U] || (i[U] = n), i[le] = !0, delete i[Ce]
      })
   }

   function Po(e) {
      return e.sort(function(e, n) {
         var t, r = 0;
         return n ? (t = W(n[rn]), W(e[rn]) ? r = t ? e[on] - n[on] : 1 : t && (r = -1)) : r = e ? 1 : -1, r
      })
   }
   var No = "TelemetryPluginChain",
      Mo = "_hasRun",
      Ao = "_getTelCtx",
      Ro = 0;

   function Lo(e, a, t, n) {
      var r = null,
         i = [],
         o = (null !== n && (r = n ? function(e, n, t) {
            for (; e;) {
               if (e[be]() === t) return e;
               e = e[P]()
            }
            return Ho([t], n[fe] || {}, n)
         }(e, t, n) : e), {
            _next: function() {
               var e, n = r;
               return r = n ? n[P]() : null, n || (e = i) && 0 < e[R] && ($(e, function(e) {
                  try {
                     e.func[je](e.self, e.args)
                  } catch (n) {
                     H(t[pe], 2, 73, "Unexpected Exception during onComplete - " + Z(n))
                  }
               }), i = []), n
            },
            ctx: {
               core: function() {
                  return t
               },
               diagLog: function() {
                  return Mr(t, a)
               },
               getCfg: function() {
                  return a
               },
               getExtCfg: u,
               getConfig: function(e, n, t) {
                  void 0 === t && (t = !1);
                  var r, e = u(e, null);
                  return e && !X(e[n]) ? r = e[n] : a && !X(a[n]) && (r = a[n]), X(r) ? t : r
               },
               hasNext: function() {
                  return !!r
               },
               getNext: function() {
                  return r
               },
               setNext: function(e) {
                  r = e
               },
               iterate: function(e) {
                  for (; n = o._next();) {
                     var n = n[be]();
                     n && e(n)
                  }
               },
               onComplete: function(e, n) {
                  for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
                  e && i[A]({
                     func: e,
                     self: K(n) ? o.ctx : n,
                     args: t
                  })
               }
            }
         });

      function u(e, n, t) {
         var r, i, o;
         return void 0 === n && (n = {}), void 0 === t && (t = 0), (r = a && (i = a[tn]) && e ? i[e] : r) ? Ln(n) && 0 !== t && (o = st(!0, n, r), a && 2 === t && G(n, function(e) {
            var n;
            X(o[e]) && !X(n = a[e]) && (o[e] = n)
         }), r = o) : r = n, r
      }
      return o
   }

   function Uo(e, t, r, n) {
      var i = Lo(e, t, r, n),
         o = i.ctx;
      return o[L] = function(e) {
         var n = i._next();
         return n && n[rn](e, o), !n
      }, o[Ee] = function(e, n) {
         return Uo((e = q(e = void 0 === e ? null : e) ? Ho(e, t, r, n) : e) || o[P](), t, r, n)
      }, o
   }

   function qo(e, t, n) {
      var r = t[fe] || {},
         i = Lo(e, r, t, n),
         o = i.ctx;
      return o[L] = function(e) {
         var n = i._next();
         return n && n.unload(o, e), !n
      }, o[Ee] = function(e, n) {
         return qo((e = q(e = void 0 === e ? null : e) ? Ho(e, r, t, n) : e) || o[P](), t, n)
      }, o
   }

   function Fo(e, t, n) {
      var r = t[fe] || {},
         i = Lo(e, r, t, n).ctx;
      return i[L] = function(n) {
         return i.iterate(function(e) {
            W(e[D]) && e[D](i, n)
         })
      }, i[Ee] = function(e, n) {
         return Fo((e = q(e = void 0 === e ? null : e) ? Ho(e, r, t, n) : e) || i[P](), t, n)
      }, i
   }

   function Ho(e, n, t, r) {
      var i, o = null,
         a = !r;
      return q(e) && 0 < e[R] && (i = null, $(e, function(e) {
         (a = !a && r === e || a) && e && W(e[rn]) && (e = Oo(e, n, t), o = o || e, i && i._setNext(e), i = e)
      })), r && !o ? Ho([r], n, t) : o
   }

   function Oo(c, r, i) {
      var s = null,
         o = W(c[rn]),
         a = W(c[M]),
         l = c ? c[se] + "-" + c[on] + "-" + Ro++ : "Unknown-0-" + Ro++,
         u = {
            getPlugin: function() {
               return c
            },
            getNext: function() {
               return s
            },
            processTelemetry: function(t, e) {
               var n;
               f(e = e || (n = (n = c && W(c[Ao]) ? c[Ao]() : n) || Uo(u, r, i)), function(e) {
                  if (!c || !o) return !1;
                  var n = Eo(c);
                  return !n[Ce] && !n[nn] && (a && c[M](s), c[rn](t, e), !0)
               }, "processTelemetry", function() {
                  return {
                     item: t
                  }
               }, !t.sync) || e[L](t)
            },
            unload: function(r, i) {
               f(r, function() {
                  var e, n, t = !1;
                  return c && (e = Eo(c), n = c[U] || e[U], !c || n && n !== r.core() || e[Ce] || (e[U] = null, e[Ce] = !0, e[le] = !1, c[Ce] && !0 === c[Ce](r, i) && (t = !0))), t
               }, "unload", function() {}, i[_e]) || r[L](i)
            },
            update: function(r, i) {
               f(r, function() {
                  var e, n, t = !1;
                  return c && (e = Eo(c), n = c[U] || e[U], !c || n && n !== r.core() || e[Ce] || c[D] && !0 === c[D](r, i) && (t = !0)), t
               }, "update", function() {}, !1) || r[L](i)
            },
            _id: l,
            _setNext: function(e) {
               s = e
            }
         };

      function f(t, r, i, e, n) {
         var o = !1,
            a = c ? c[se] : No,
            u = (u = t[Mo]) || (t[Mo] = {});
         return t.setNext(s), c && Br(t[U](), function() {
            return a + ":" + i
         }, function() {
            u[l] = !0;
            try {
               var e = s ? s._id : p;
               e && (u[e] = !1), o = r(t)
            } catch (n) {
               e = !s || u[s._id];
               e && (o = !0), s && e || H(t[N](), 1, 73, "Plugin [" + a + "] failed during " + i + " - " + Z(n) + ", run flags: " + Z(u))
            }
         }, e, n), o
      }
      return Zn(u)
   }
   var zo = 500,
      jo = "Channel has invalid priority - ";

   function Vo(e, n, t) {
      n && q(n) && 0 < n[R] && ($(n = n.sort(function(e, n) {
         return e[on] - n[on]
      }), function(e) {
         e[on] < zo && rt(jo + e[se])
      }), e[A]({
         queue: Zn(n),
         chain: Ho(n, t[fe], t)
      }))
   }

   function Bo() {
      var n = [];
      return {
         add: function(e) {
            e && n[A](e)
         },
         run: function(t, r) {
            $(n, function(e) {
               try {
                  e(t, r)
               } catch (n) {
                  H(t[N](), 2, 73, "Unexpected error calling unload handler - " + Z(n))
               }
            }), n = []
         }
      }
   }
   var Ko = "getPlugin",
      In = (Xo.__ieDyn = 1, Xo);

   function Xo() {
      var i, o, s, l, f, a = this;

      function n(e) {
         var n, e = e = void 0 === e ? null : e;
         return e || (n = o || Uo(null, {}, a[U]), e = s && s[Ko] ? n[Ee](null, s[Ko]) : n[Ee](null, s)), e
      }

      function u(e, n, t) {
         e && v(e, tn, [], null, X), !t && n && (t = n[ge]()[P]());
         var r = s;
         s && s[Ko] && (r = s[Ko]()), a[U] = n, o = Uo(t, e, n, r)
      }

      function d() {
         i = !1, a[U] = null, s = o = null, f = [], l = Bo()
      }
      d(), m(Xo, a, function(c) {
         c[ae] = function(e, n, t, r) {
            u(e, n, r), i = !0
         }, c[Ce] = function(e, n) {
            var t, r, i, o, a = c[U];
            if (a && (!e || a === e[U]())) return r = !1, i = e || qo(null, a, s && s[Ko] ? s[Ko]() : s), o = n || ((e = {
               reason: 0
            })[_e] = !1, e), c[E] && !0 === c[E](i, o, u) ? t = !0 : u(), t;

            function u() {
               var e;
               r || (r = !0, l.run(i, n), e = f, f = [], $(e, function(e) {
                  e.rm()
               }), !0 === t && i[L](o), d())
            }
         }, c[D] = function(e, n) {
            var t, r, i, o = c[U];
            if (o && (!e || o === e[U]())) return r = !1, i = e || Fo(null, o, s && s[Ko] ? s[Ko]() : s), c._doUpdate && !0 === c._doUpdate(i, n || {
               reason: 0
            }, a) ? t = !0 : a(), t;

            function a() {
               r || (r = !0, u(i.getCfg(), i.core(), i[P]()))
            }
         }, c._addHook = function(e) {
            e && (q(e) ? f = f.concat(e) : f[A](e))
         }, at(c, "_addUnloadCb", function() {
            return l
         }, "add")
      }), a[N] = function(e) {
         return n(e)[N]()
      }, a[le] = function() {
         return i
      }, a.setInitialized = function(e) {
         i = e
      }, a[M] = function(e) {
         s = e
      }, a[L] = function(e, n) {
         n ? n[L](e) : s && W(s[rn]) && s[rn](e, null)
      }, a._getTelCtx = n
   }
   _(Jo, Wo = In), Jo.__ieDyn = 1;
   var Wo, Go = Jo;

   function Jo() {
      var n, c, e = Wo.call(this) || this;

      function t() {
         n = 0, c = []
      }
      return e.identifier = "TelemetryInitializerPlugin", e.priority = 199, t(), m(Jo, e, function(u, e) {
         u.addTelemetryInitializer = function(e) {
            var t = {
               id: n++,
               fn: e
            };
            return c[A](t), {
               remove: function() {
                  $(c, function(e, n) {
                     if (e.id === t.id) return c[Te](n, 1), -1
                  })
               }
            }
         }, u[rn] = function(e, n) {
            for (var t = !1, r = c[R], i = 0; i < r; ++i) {
               var o = c[i];
               if (o) try {
                  if (!1 === o.fn[qe](null, [e])) {
                     t = !0;
                     break
                  }
               } catch (a) {
                  H(n[N](), 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + Q(a), {
                     exception: Z(a)
                  }, !0)
               }
            }
            t || u[L](e, n)
         }, u[E] = function() {
            t()
         }
      }), e
   }
   var $o = "Plugins must provide initialize method",
      Qo = "_notificationManager",
      Yo = "SDK is still unloading...",
      Zo = {
         loggingLevelConsole: 1
      };

   function ea(e, n) {
      return new zr(n)
   }

   function na(n, e) {
      var t = !1;
      return $(e, function(e) {
         if (e === n) return t = !0, -1
      }), t
   }
   ta.__ieDyn = 1;
   n = ta;

   function ta() {
      var x, v, n, i, t, o, r, b, I, w, T, C, S, k, a, _, e, E, D, P, N = 0,
         M = !1;
      m(ta, this, function(g) {
         function m(e) {
            return N || M || (e || g[pe] && 0 < g[pe].queue[R]) && (e = nt(x.diagnosticLogInterval), N = setInterval(function() {
               clearInterval(N), N = 0, f()
            }, e = e && 0 < e ? e : 1e4)), N
         }

         function u() {
            x = st(!(v = !1), {}, Zo), g[fe] = x, g[pe] = new Ar(x), g[we] = [], a = new Go, n = [], k = !(I = []), e = ai("AIBaseCore", !(_ = S = C = T = w = b = r = o = t = i = null)), E = Bo(), P = null
         }

         function h() {
            var e = Uo(y(), x, g);
            return e[xe](m), e
         }

         function c(e) {
            r = g[pe], i = zo, o = [], a = {}, $(d = I, function(e) {
               (X(e) || X(e[ae])) && rt($o);
               var n = e[on],
                  t = e[se];
               e && n && (X(a[n]) ? a[n] = t : Ur(r, "Two extensions have same priority #" + n + " - " + a[n] + ", " + t)), (!n || n < i) && o[A](e)
            }), (d = {
               all: d
            })[U] = o;
            w = d[U], b = null;
            var r, i, o, a, n, t, u, c, s, l, f, d = d.all;

            function p() {
               return Uo(null, l[fe], l, null)
            }

            function v(e, n, t, r) {
               var i = e ? e[R] + 1 : 1;

               function o() {
                  0 == --i && (r && r(), r = null)
               }
               0 < i && $(e, function(e) {
                  e && 0 < e.queue[R] ? (e = e.chain, (e = n[Ee](e))[xe](o), t(e)) : i--
               }), o()
            }
            S = Zn((c = d, n = g, u = [], C && $(C, function(e) {
               return Vo(u, e, n)
            }), c && (t = [], $(c, function(e) {
               e[on] > zo && t[A](e)
            }), Vo(u, t, n)), u)), T ? (-1 !== (c = Kn(d, T)) && d[Te](c, 1), -1 !== (c = Kn(w, T)) && w[Te](c, 1), T._setQueue(S)) : (s = S, l = g, f = !1, T = {
               identifier: "ChannelControllerPlugin",
               priority: zo,
               initialize: function(n, t, r, e) {
                  f = !0, $(s, function(e) {
                     e && 0 < e.queue[R] && Do(Uo(e.chain, n, t), r)
                  })
               },
               isInitialized: function() {
                  return f
               },
               processTelemetry: function(n, e) {
                  v(s, e || p(), function(e) {
                     e[L](n)
                  }, function() {
                     e[L](n)
                  })
               },
               update: function(e, n) {
                  var t = n || {
                     reason: 0
                  };
                  return v(s, e, function(e) {
                     e[L](t)
                  }, function() {
                     e[L](t)
                  }), !0
               },
               pause: function() {
                  v(s, p(), function(e) {
                     e.iterate(function(e) {
                        e.pause && e.pause()
                     })
                  }, null)
               },
               resume: function() {
                  v(s, p(), function(e) {
                     e.iterate(function(e) {
                        e.resume && e.resume()
                     })
                  }, null)
               },
               teardown: function(e, n) {
                  var t = n || {
                     reason: 0,
                     isAsync: !1
                  };
                  return v(s, e, function(e) {
                     e[L](t)
                  }, function() {
                     e[L](t), f = !1
                  }), !0
               },
               getChannel: function(n) {
                  var t = null;
                  return s && 0 < s[R] && $(s, function(e) {
                     if (e && 0 < e.queue[R] && ($(e.queue, function(e) {
                           if (e[se] === n) return t = e, -1
                        }), t)) return -1
                  }), t
               },
               flush: function(t, e, r, i) {
                  var o = 1,
                     n = !1,
                     a = null;

                  function u() {
                     o--, n && 0 === o && (a && (clearTimeout(a), a = null), e && e(n), e = null)
                  }
                  return i = i || 5e3, v(s, p(), function(e) {
                     e.iterate(function(e) {
                        var n;
                        e[Ie] && (o++, n = !1, e[Ie](t, function() {
                           n = !0, u()
                        }, r) || n || (t && null == a ? a = setTimeout(function() {
                           a = null, u()
                        }, i) : u()))
                     })
                  }, function() {
                     n = !0, u()
                  }), !0
               },
               _setQueue: function(e) {
                  s = e
               }
            }), d[A](T), w[A](T), g[we] = Po(d), T[ae](x, g, d), Do(h(), d), g[we] = Zn(Po(w || [])).slice(), e && (c = e, (d = Fo(y(), g))[xe](m), g._updateHook && !0 === g._updateHook(d, c) || d[L](c))
         }

         function s(n) {
            var e, t = null,
               i = null;
            return $(g[we], function(e) {
               if (e[se] === n && e !== T && e !== a) return i = e, -1
            }), (i = !i && T ? T.getChannel(n) : i) && ((e = {
               plugin: i
            })[Re] = function(e) {
               Eo(i)[nn] = !e
            }, e.isEnabled = function() {
               var e = Eo(i);
               return !e[Ce] && !e[nn]
            }, e.remove = function(e, n) {
               var t, r = [i];
               (t = {
                  reason: 1
               })[_e] = e = void 0 === e || e, l(r, t, function(e) {
                  e && c({
                     reason: 32,
                     removed: r
                  }), n && n(e)
               })
            }, t = e), t
         }

         function y() {
            var e;
            return b || (-1 === Kn(e = (w || []).slice(), a) && e[A](a), b = Ho(Po(e), x, g)), b
         }

         function l(o, e, n) {
            var t;
            o && 0 < o[R] ? ((t = qo(Ho(o, x, g), g))[xe](function() {
               var r = !1,
                  t = [],
                  i = ($(I, function(e, n) {
                     na(e, o) ? r = !0 : t[A](e)
                  }), I = t, []);
               C && ($(C, function(e, n) {
                  var t = [];
                  $(e, function(e) {
                     na(e, o) ? r = !0 : t[A](e)
                  }), i[A](t)
               }), C = i), n && n(r), m()
            }), t[L](e)) : n(!1)
         }

         function f() {
            var e;
            g[pe] && g[pe].queue && (e = g[pe].queue.slice(0), g[pe].queue[R] = 0, $(e, function(e) {
               (n = {})[ue] = _ || "InternalMessageId: " + e[Se], n.iKey = nt(x[de]), n.time = Bn(new Date), n.baseType = Pr.dataType, n.baseData = {
                  message: e[ke]
               };
               var n, e = n;
               g.track(e)
            }))
         }

         function d(e, n, t, r) {
            return T ? T[Ie](e, n, t || 6, r) : (n && n(!1), !0)
         }

         function p(e) {
            var n = g[pe];
            n ? (H(n, 2, 73, e), m()) : rt(e)
         }
         u(), g[le] = function() {
            return v
         }, g[ae] = function(e, n, t, r) {
            k && rt(Yo), g[le]() && rt("Core should not be initialized more than once"), x = e || {}, g[fe] = x, X(e[de]) && rt("Please provide instrumentation key"), i = r, g[Qo] = r;
            e = nt(x.disableDbgExt), !0 === e && D && (i[he](D), D = null), i && !D && !0 !== e && (D = function(e) {
               if (!Cr) {
                  Cr = {};
                  for (var n = 0; n < Sr[R]; n++) Cr[Sr[n]] = function(n, t) {
                     return function() {
                        var e = _r(t);
                        e && (e = e.listener) && e[n] && e[n][qe](e, arguments)
                     }
                  }(Sr[n], e)
               }
               return Cr
            }(x), i[me](D)), r = nt(x.enablePerfMgr), !r && o && (o = null), r && F(x, en, ea), F(x, tn, {}).NotificationManager = i, t && (g[pe] = t), e = F(x, "extensions", []);
            (I = [])[A].apply(I, oe(oe([], n), e)), C = F(x, Ze, []), c(null), S && 0 !== S[R] || rt("No " + Ze + " available"), v = !0, g.releaseQueue()
         }, g.getTransmissionControls = function() {
            var n = [];
            return S && $(S, function(e) {
               n[A](e.queue)
            }), Zn(n)
         }, g.track = function(e) {
            e.iKey = e.iKey || x[de], e[ve] = e[ve] || Bn(new Date), e.ver = e.ver || "4.0", !k && g[le]() ? h()[L](e) : n[A](e)
         }, g[ge] = h, g[ce] = function() {
            var e;
            return i || (i = j(((e = {})[me] = function(e) {}, e[he] = function(e) {}, e[an] = function(e) {}, e[un] = function(e, n) {}, e[cn] = function(e, n) {}, e)), g[Qo] = i), i
         }, g[me] = function(e) {
            i && i[me](e)
         }, g[he] = function(e) {
            i && i[he](e)
         }, g.getCookieMgr = function() {
            return r = r || ki(x, g[pe])
         }, g.setCookieMgr = function(e) {
            r = e
         }, g[dn] = function() {
            var e;
            return t || o || !nt(x.enablePerfMgr) || W(e = nt(x[en])) && (o = e(g, g[ce]())), t || o || null
         }, g.setPerfMgr = function(e) {
            t = e
         }, g.eventCnt = function() {
            return n[R]
         }, g.releaseQueue = function() {
            var e;
            v && 0 < n[R] && (e = n, n = [], $(e, function(e) {
               h()[L](e)
            }))
         }, g.pollInternalLogs = function(e) {
            return _ = e || null, M = !1, N && (clearInterval(N), N = null), m(!0)
         }, g[ye] = function() {
            M = !0, N && (clearInterval(N), N = 0, f())
         }, ut(g, function() {
            return a
         }, ["addTelemetryInitializer"]), g.unload = function(e, n, t) {
            v || rt("SDK is not initialized"), k && rt(Yo), (r = {
               reason: 50
            })[_e] = e = void 0 === e || e, r.flushComplete = !1;
            var r, i = r,
               o = qo(y(), g);

            function a(e) {
               i.flushComplete = e, k = !0, E.run(o, i), g[ye](), o[L](i)
            }
            o[xe](function() {
               u(), n && n(i)
            }, g), f(), d(e, a, 6, t) || a(!1)
         }, g[be] = s, g.addPlugin = function(e, n, t, r) {
            if (!e) return r && r(!1), void p($o);
            var i = s(e[se]);
            if (i && !n) return r && r(!1), void p("Plugin [" + e[se] + "] is already loaded!");
            var o, a = {
               reason: 16
            };

            function u() {
               I[A](e), a.added = [e], c(a), r && r(!0)
            }
            i ? l(o = [i.plugin], {
               reason: 2,
               isAsync: !!t
            }, function(e) {
               e ? (a.removed = o, a.reason |= 32, u()) : r && r(!1)
            }) : u()
         }, g.evtNamespace = function() {
            return e
         }, g[Ie] = d, g.getTraceCtx = function(e) {
            var n;
            return P || (n = {}, P = {
               getName: function() {
                  return n[ue]
               },
               setName: function(e) {
                  n[ue] = e
               },
               getTraceId: function() {
                  return n[$e]
               },
               setTraceId: function(e) {
                  Co(e) && (n[$e] = e)
               },
               getSpanId: function() {
                  return n.spanId
               },
               setSpanId: function(e) {
                  So(e) && (n.spanId = e)
               },
               getTraceFlags: function() {
                  return n[Qe]
               },
               setTraceFlags: function(e) {
                  n[Qe] = e
               }
            }), P
         }, g.setTraceCtx = function(e) {
            P = e || null
         }, at(g, "addUnloadCb", function() {
            return E
         }, "add")
      })
   }

   function ra(e, t, r, i) {
      $(e, function(e) {
         if (e && e[t])
            if (r) setTimeout(function() {
               return i(e)
            }, 0);
            else try {
               i(e)
            } catch (n) {}
      })
   }
   oa.__ieDyn = 1;
   var ia = oa;

   function oa(e) {
      this.listeners = [];
      var t = !!(e || {}).perfEvtsSendAll;
      m(oa, this, function(r) {
         r[me] = function(e) {
            r.listeners[A](e)
         }, r[he] = function(e) {
            for (var n = Kn(r[Ke], e); - 1 < n;) r.listeners[Te](n, 1), n = Kn(r[Ke], e)
         }, r[an] = function(n) {
            ra(r[Ke], an, !0, function(e) {
               e[an](n)
            })
         }, r[un] = function(n, t) {
            ra(r[Ke], un, !0, function(e) {
               e[un](n, t)
            })
         }, r[cn] = function(n, t) {
            ra(r[Ke], cn, t, function(e) {
               e[cn](n, t)
            })
         }, r[sn] = function(n) {
            !n || !t && n[Xe]() || ra(r[Ke], sn, !1, function(e) {
               n[_e] ? setTimeout(function() {
                  return e[sn](n)
               }, 0) : e[sn](n)
            })
         }
      })
   }
   _(ca, aa = n), ca.__ieDyn = 1;
   var aa, ua = ca;

   function ca() {
      var e = aa.call(this) || this;
      return m(ca, e, function(t, i) {
         function r(e) {
            var n = t[ce]();
            n && n[un]([e], 2)
         }
         t[ae] = function(e, n, t, r) {
            i[ae](e, n, t || new Ar(e), r || new ia(e))
         }, t.track = function(n) {
            Br(t[dn](), function() {
               return "AppInsightsCore:track"
            }, function() {
               var e;
               null === n && (r(n), rt("Invalid telemetry item")), X((e = n)[ue]) && (r(e), rt("telemetry name required")), i.track(n)
            }, function() {
               return {
                  item: n
               }
            }, !n.sync)
         }
      }), e
   }
   var t = "Failed",
      w = t + "MonitorAjax",
      n = "Track",
      sa = "Event",
      la = "AuthContext",
      fa = "Exception",
      r = "Local",
      da = "Session",
      i = "Storage",
      pa = "Browser",
      va = "Cannot",
      ga = "Buffer",
      ma = "InstrumentationKey",
      ha = lt({
         CRITICAL: 1,
         WARNING: 2
      }),
      ya = (lt(((o = {})[pa + "DoesNotSupport" + r + i] = 0, o[pa + va + "Read" + r + i] = 1, o[pa + va + "Read" + da + i] = 2, o[pa + va + "Write" + r + i] = 3, o[pa + va + "Write" + da + i] = 4, o[pa + t + "RemovalFrom" + r + i] = 5, o[pa + t + "RemovalFrom" + da + i] = 6, o.CannotSendEmptyTelemetry = 7, o.ClientPerformanceMathError = 8, o.ErrorParsingAISessionCookie = 9, o.ErrorPVCalc = 10, o[fa + "WhileLoggingError"] = 11, o[t + "AddingTelemetryTo" + ga] = 12, o[w + "Abort"] = 13, o[w + "Dur"] = 14, o[w + "Open"] = 15, o[w + "RSC"] = 16, o[w + "Send"] = 17, o[w + "GetCorrelationHeader"] = 18, o.FailedToAddHandlerForOnBeforeUnload = 19, o.FailedToSendQueuedTelemetry = 20, o.FailedToReportDataLoss = 21, o.FlushFailed = 22, o.MessageLimitPerPVExceeded = 23, o.MissingRequiredFieldSpecification = 24, o.NavigationTimingNotSupported = 25, o.OnError = 26, o[da + "RenewalDateIsZero"] = 27, o.SenderNotInitialized = 28, o["Start" + n + sa + t] = 29, o["Stop" + n + sa + t] = 30, o["Start" + n + t] = 31, o["Stop" + n + t] = 32, o.TelemetrySampledAndNotSent = 33, o[n + sa + t] = 34, o[n + fa + t] = 35, o[n + "Metric" + t] = 36, o[n + "PV" + t] = 37, o.TrackPVFailedCalc = 38, o[n + "Trace" + t] = 39, o.TransmissionFailed = 40, o[t + "ToSet" + i + ga] = 41, o[t + "ToRestore" + i + ga] = 42, o.InvalidBackendResponse = 43, o.FailedToFixDepricatedValues = 44, o.InvalidDurationValue = 45, o.TelemetryEnvelopeInvalid = 46, o.CreateEnvelopeError = 47, o.CannotSerializeObject = 48, o.CannotSerializeObjectNonSerializable = 49, o.CircularReferenceDetected = 50, o["Clear" + la + t] = 51, o[fa + "Truncated"] = 52, o.IllegalCharsInName = 53, o.ItemNotInArray = 54, o.MaxAjaxPerPVExceeded = 55, o.MessageTruncated = 56, o.NameTooLong = 57, o.SampleRateOutOfRange = 58, o["Set" + la + t] = 59, o["Set" + la + t + "AccountName"] = 60, o.StringValueTooLong = 61, o.StartCalledMoreThanOnce = 62, o.StopCalledWithoutStart = 63, o.TelemetryInitializerFailed = 64, o.TrackArgumentsNotSpecified = 65, o.UrlTooLong = 66, o[da + i + ga + "Full"] = 67, o.CannotAccessCookie = 68, o.IdTooLong = 69, o.InvalidEvent = 70, o[w + "SetRequestHeader"] = 71, o.SendBrowserInfoOnUserInit = 72, o["Plugin" + fa] = 73, o["Notification" + fa] = 74, o.SnippetScriptLoadFailure = 99, o["Invalid" + ma] = 100, o.CannotParseAiBlobValue = 101, o.InvalidContentBlob = 102, o[n + "PageAction" + sa + t] = 103, o.FailedAddingCustomDefinedRequestContext = 104, o["InMemory" + i + ga + "Full"] = 105, o[ma + "Deprecation"] = 106, o)), "_aiHooks"),
      xa = ["req", "rsp", "hkErr", "fnErr"];

   function ba(e, n) {
      if (e)
         for (var t = 0; t < e[R] && !n(e[t], t); t++);
   }

   function Ia(e, a, u, c, s) {
      0 <= s && s <= 2 && ba(e, function(e, n) {
         var e = e.cbks,
            t = e[xa[s]];
         if (t) {
            a.ctx = function() {
               return c[n] = c[n] || {}
            };
            try {
               t[qe](a.inst, u)
            } catch (i) {
               t = a.err;
               try {
                  var r = e.hkErr;
                  r && (a.err = i, r[qe](a.inst, u))
               } catch (o) {} finally {
                  a.err = t
               }
            }
         }
      })
   }

   function wa(c) {
      return function() {
         var t = arguments,
            e = c.h,
            r = ((n = {})[ue] = c.n, n.inst = this, n.ctx = null, n.set = function(e, n) {
               (t = o([], t))[e] = n, i = o([r], t)
            }, n),
            n = [],
            i = o([r], t);

         function o(n, e) {
            return ba(e, function(e) {
               n[A](e)
            }), n
         }
         r.evt = Y("event"), Ia(e, r, i, n, 0);
         var a = c.f;
         if (a) try {
            r.rslt = a[qe](this, t)
         } catch (u) {
            throw r.err = u, Ia(e, r, i, n, 3), u
         }
         return Ia(e, r, i, n, 1), r.rslt
      }
   }

   function Ta(e, n, t, r) {
      var i = null;
      return e && (Rn(e, n) ? i = e : t && (i = Ta(Mn(e), n, r, !1))), i
   }

   function Ca(e, n, t, r) {
      var i = t && t[ya],
         n = (i || ((t = wa(i = {
            i: 0,
            n: n,
            f: t,
            h: []
         }))[ya] = i, e[n] = t), {
            id: i.i,
            cbks: r,
            rm: function() {
               var t = this.id;
               ba(i.h, function(e, n) {
                  return e.id === t && (i.h[Te](n, 1), 1)
               })
            }
         });
      return i.i++, i.h[A](n), n
   }

   function Sa(e, n, t, r, i) {
      if (void 0 === r && (r = !0), e && n && t) {
         e = Ta(e, n, r, i);
         if (e) {
            r = e[n];
            if (typeof r === a) return Ca(e, n, r, t)
         }
      }
      return null
   }

   function ka(e, n, t, r, i) {
      if (e && n && t) {
         r = Ta(e, n, r, i) || e;
         if (r) return Ca(r, n, r[n], t)
      }
      return null
   }
   var _a = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation",
      Ea = "sampleRate",
      Da = "ProcessLegacy",
      Pa = "http.method",
      Na = "https://dc.services.visualstudio.com",
      Ma = "/v2/track",
      Aa = "not_specified",
      Ra = "iKey";

   function La(e) {
      var n, t = null;
      return W(Event) ? t = new Event(e) : (n = cr()) && n.createEvent && (t = n.createEvent("Event")).initEvent(e, !0, !0), t
   }
   var Ua = "split",
      g = "length",
      qa = "toLowerCase",
      Fa = "ingestionendpoint",
      Ha = "toString",
      Oa = "removeItem",
      za = "name",
      ja = "message",
      Va = "stringify",
      Ba = "pathname",
      Ka = "correlationHeaderExcludePatterns",
      Xa = "indexOf",
      Wa = "extensionConfig",
      Ga = "exceptions",
      Ja = "parsedStack",
      $a = "properties",
      Qa = "measurements",
      Ya = "sizeInBytes",
      Za = "typeName",
      eu = "severityLevel",
      nu = "problemGroup",
      tu = "isManual",
      ru = "CreateFromInterface",
      iu = "assembly",
      ou = "fileName",
      au = "hasFullStack",
      uu = "level",
      cu = "method",
      su = "line",
      lu = "duration",
      fu = "receivedResponse",
      du = "substring";

   function s(e, n) {
      return void 0 === n && (n = !1), e === undefined || null === e ? n : "true" === e.toString()[qa]()
   }

   function pu(e) {
      var n = "" + Math.floor((e = Math.round(e = isNaN(e) || e < 0 ? 0 : e)) / 1e3) % 60,
         t = "" + Math.floor(e / 6e4) % 60,
         r = "" + Math.floor(e / 36e5) % 24,
         i = Math.floor(e / 864e5),
         e = 1 === (e = "" + e % 1e3)[g] ? "00" + e : 2 === e[g] ? "0" + e : e,
         n = n[g] < 2 ? "0" + n : n,
         t = t[g] < 2 ? "0" + t : t;
      return (0 < i ? i + "." : "") + (r = r[g] < 2 ? "0" + r : r) + ":" + t + ":" + n + "." + e
   }

   function vu(e, n, t, r, i) {
      return !i && J(e) && ("Script error." === e || "Script error" === e)
   }
   gu = {}, G({
      requestContextHeader: [0, "Request-Context"],
      requestContextTargetKey: [1, "appId"],
      requestContextAppIdFormat: [2, "appId=cid-v1:"],
      requestIdHeader: [3, "Request-Id"],
      traceParentHeader: [4, "traceparent"],
      traceStateHeader: [5, "tracestate"],
      sdkContextHeader: [6, "Sdk-Context"],
      sdkContextHeaderAppIdRequest: [7, "appId"],
      requestContextHeaderLowerCase: [8, "request-context"]
   }, function(e, n) {
      gu[e] = n[1], gu[n[0]] = n[1]
   });
   var gu, B = Yn(gu),
      mu = lt({
         LocalStorage: 0,
         SessionStorage: 1
      }),
      va = lt({
         AI: 0,
         AI_AND_W3C: 1,
         W3C: 2
      }),
      hu = undefined,
      yu = undefined,
      xu = "";

   function bu() {
      return Su() ? Iu(mu.LocalStorage) : null
   }

   function Iu(e) {
      try {
         if (X(re())) return null;
         var n = (new Date)[Ha](),
            t = Y(e === mu.LocalStorage ? "localStorage" : "sessionStorage"),
            r = xu + n,
            i = (t.setItem(r, n), t.getItem(r) !== n);
         if (t[Oa](r), !i) return t
      } catch (o) {}
      return null
   }

   function wu() {
      return Du() ? Iu(mu.SessionStorage) : null
   }

   function Tu() {
      yu = hu = !1
   }

   function Cu(e) {
      xu = e || ""
   }

   function Su(e) {
      return hu = e || hu === undefined ? !!Iu(mu.LocalStorage) : hu
   }

   function ku(e, n) {
      var t = bu();
      if (null !== t) try {
         return t.getItem(n)
      } catch (r) {
         hu = !1, H(e, 2, 1, "Browser failed read of local storage. " + Q(r), {
            exception: Z(r)
         })
      }
      return null
   }

   function _u(e, n, t) {
      var r = bu();
      if (null !== r) try {
         return r.setItem(n, t), !0
      } catch (i) {
         hu = !1, H(e, 2, 3, "Browser failed write to local storage. " + Q(i), {
            exception: Z(i)
         })
      }
      return !1
   }

   function Eu(e, n) {
      var t = bu();
      if (null !== t) try {
         return t[Oa](n), !0
      } catch (r) {
         hu = !1, H(e, 2, 5, "Browser failed removal of local storage item. " + Q(r), {
            exception: Z(r)
         })
      }
      return !1
   }

   function Du(e) {
      return yu = e || yu === undefined ? !!Iu(mu.SessionStorage) : yu
   }

   function Pu(e, n) {
      var t = wu();
      if (null !== t) try {
         return t.getItem(n)
      } catch (r) {
         yu = !1, H(e, 2, 2, "Browser failed read of session storage. " + Q(r), {
            exception: Z(r)
         })
      }
      return null
   }

   function Nu(e, n, t) {
      var r = wu();
      if (null !== r) try {
         return r.setItem(n, t), !0
      } catch (i) {
         yu = !1, H(e, 2, 4, "Browser failed write to session storage. " + Q(i), {
            exception: Z(i)
         })
      }
      return !1
   }

   function Mu(e, n) {
      var t = wu();
      if (null !== t) try {
         return t[Oa](n), !0
      } catch (r) {
         yu = !1, H(e, 2, 6, "Browser failed removal of session storage item. " + Q(r), {
            exception: Z(r)
         })
      }
      return !1
   }

   function Au(e, n, t) {
      var r = n[g],
         i = Ru(e, n);
      if (i[g] !== r) {
         for (var o = 0, a = i; t[a] !== undefined;) o++, a = i[du](0, 147) + ju(o);
         i = a
      }
      return i
   }

   function Ru(e, n) {
      var t;
      return n && 150 < (n = V(n[Ha]()))[g] && (t = n[du](0, 150), H(e, 2, 57, "name is too long.  It has been truncated to 150 characters.", {
         name: n
      }, !0)), t || n
   }

   function ee(e, n, t) {
      var r;
      return void 0 === t && (t = 1024), n && (t = t || 1024, (n = V(n)).toString()[g] > t && (r = n[Ha]()[du](0, t), H(e, 2, 61, "string value is too long. It has been truncated to " + t + " characters.", {
         value: n
      }, !0))), r || n
   }

   function Lu(e, n) {
      return zu(e, n, 2048, 66)
   }

   function Uu(e, n) {
      var t;
      return n && 32768 < n[g] && (t = n[du](0, 32768), H(e, 2, 56, "message is too long, it has been truncated to 32768 characters.", {
         message: n
      }, !0)), t || n
   }

   function qu(e, n) {
      var t, r;
      return n && 32768 < (r = "" + n)[g] && (t = r[du](0, 32768), H(e, 2, 52, "exception is too long, it has been truncated to 32768 characters.", {
         exception: n
      }, !0)), t || n
   }

   function Fu(r, e) {
      var i;
      return e && (i = {}, G(e, function(e, n) {
         if (Ln(n) && vr()) try {
            n = gr()[Va](n)
         } catch (t) {
            H(r, 2, 49, "custom property is not valid", {
               exception: t
            }, !0)
         }
         n = ee(r, n, 8192), e = Au(r, e, i), i[e] = n
      }), e = i), e
   }

   function Hu(t, e) {
      var r;
      return e && (r = {}, G(e, function(e, n) {
         e = Au(t, e, r), r[e] = n
      }), e = r), e
   }

   function Ou(e, n) {
      return n && zu(e, n, 128, 69)[Ha]()
   }

   function zu(e, n, t, r) {
      var i;
      return n && (n = V(n))[g] > t && (i = n[du](0, t), H(e, 2, r, "input is too long, it has been truncated to " + t + " characters.", {
         data: n
      }, !0)), i || n
   }

   function ju(e) {
      e = "00" + e;
      return e.substr(e[g] - 3)
   }(r = {
      MAX_NAME_LENGTH: 150,
      MAX_ID_LENGTH: 128,
      MAX_PROPERTY_LENGTH: 8192,
      MAX_STRING_LENGTH: 1024,
      MAX_URL_LENGTH: 2048,
      MAX_MESSAGE_LENGTH: 32768,
      MAX_EXCEPTION_LENGTH: 32768
   }).sanitizeKeyAndAddUniqueness = Au, r.sanitizeKey = Ru, r.sanitizeString = ee, r.sanitizeUrl = Lu, r.sanitizeMessage = Uu, r.sanitizeException = qu, r.sanitizeProperties = Fu, r.sanitizeMeasurements = Hu, r.sanitizeId = Ou, r.sanitizeInput = zu, r.padNumber = ju, r.trim = V;
   var pa = r,
      Vu = cr() || {},
      Bu = 0,
      Ku = [null, null, null, null, null];

   function Xu(e) {
      var n = Bu,
         t = Ku,
         r = t[n];
      return Vu.createElement ? t[n] || (r = t[n] = Vu.createElement("a")) : r = {
         host: Ju(e, !0)
      }, r.href = e, ++n >= t[g] && (n = 0), Bu = n, r
   }

   function Wu(e) {
      e = Xu(e);
      return e ? e.href : void 0
   }

   function Gu(e, n) {
      return e ? e.toUpperCase() + " " + n : n
   }

   function Ju(e, n) {
      e = $u(e, n) || "";
      if (e) {
         n = e.match(/(www\d{0,5}\.)?([^\/:]{1,256})(:\d{1,20})?/i);
         if (null != n && 3 < n[g] && J(n[2]) && 0 < n[2][g]) return n[2] + (n[3] || "")
      }
      return e
   }

   function $u(e, n) {
      var t = null;
      return e && null != (e = e.match(/(\w{1,150}):\/\/([^\/:]{1,256})(:\d{1,20})?/i)) && 2 < e[g] && J(e[2]) && 0 < e[2][g] && (t = e[2] || "", n && 2 < e[g] && (n = (e[1] || "")[qa](), e = e[3] || "", t += e = "http" === n && ":80" === e || "https" === n && ":443" === e ? "" : e)), t
   }
   var Qu = [Na + Ma, "https://breeze.aimon.applicationinsights.io" + Ma, "https://dc-int.services.visualstudio.com" + Ma];

   function Yu(e) {
      return -1 !== Kn(Qu, e[qa]())
   }
   var la = {
         NotSpecified: Aa,
         createDomEvent: La,
         disableStorage: Tu,
         isInternalApplicationInsightsEndpoint: Yu,
         canUseLocalStorage: Su,
         getStorage: ku,
         setStorage: _u,
         removeStorage: Eu,
         canUseSessionStorage: Du,
         getSessionStorageKeys: function() {
            var n = [];
            return Du() && G(Y("sessionStorage"), function(e) {
               n.push(e)
            }), n
         },
         getSessionStorage: Pu,
         setSessionStorage: Nu,
         removeSessionStorage: Mu,
         disableCookies: vo,
         canUseCookies: function(e) {
            return po(null, e).isEnabled()
         },
         disallowsSameSiteNone: Mi,
         setCookie: function(e, n, t, r) {
            po(null, e).set(n, t, null, r)
         },
         stringToBoolOrDefault: s,
         getCookie: function(e, n) {
            return po(null, e).get(n)
         },
         deleteCookie: function(e, n) {
            return po(null, e).del(n)
         },
         trim: V,
         newId: ni,
         random32: function() {
            return Zr(!0)
         },
         generateW3CId: lo,
         isArray: q,
         isError: On,
         isDate: Hn,
         toISOStringForIE8: Bn,
         getIEVersion: hr,
         msToTimeSpan: pu,
         isCrossOriginError: vu,
         dump: Z,
         getExceptionName: Q,
         addEventHandler: function(e, n, t, r) {
            return eo(e, n, t, null, r = void 0 !== r && r)
         },
         IsBeaconApiSupported: yr,
         getExtension: function(e, n) {
            var t = null;
            return $(e, function(e) {
               if (e.identifier === n) return t = e, -1
            }), t
         }
      },
      da = {
         parseUrl: Xu,
         getAbsoluteUrl: Wu,
         getPathName: function(e) {
            e = Xu(e);
            return e ? e[Ba] : void 0
         },
         getCompleteUrl: Gu,
         parseHost: Ju,
         parseFullHost: $u
      },
      Zu = {
         correlationIdPrefix: "cid-v1:",
         canIncludeCorrelationHeader: function(e, n, t) {
            if (!n || e && e.disableCorrelationHeaders) return !1;
            if (e && e[Ka])
               for (var r = 0; r < e.correlationHeaderExcludePatterns[g]; r++)
                  if (e[Ka][r].test(n)) return !1;
            var i = Xu(n).host[qa]();
            if (!i || -1 === i[Xa](":443") && -1 === i[Xa](":80") || (i = ($u(n, !0) || "")[qa]()), (!e || !e.enableCorsCorrelation) && i && i !== t) return !1;
            var o, t = e && e.correlationHeaderDomains;
            if (t && ($(t, function(e) {
                  e = RegExp(e.toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
                  o = o || e.test(i)
               }), !o)) return !1;
            var a = e && e.correlationHeaderExcludedDomains;
            if (!a || 0 === a[g]) return !0;
            for (r = 0; r < a[g]; r++)
               if (RegExp(a[r].toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*")).test(i)) return !1;
            return i && 0 < i[g]
         },
         getCorrelationContext: function(e) {
            if (e) {
               e = Zu.getCorrelationContextValue(e, B[1]);
               if (e && e !== Zu.correlationIdPrefix) return e
            }
         },
         getCorrelationContextValue: function(e, n) {
            if (e)
               for (var t = e[Ua](","), r = 0; r < t[g]; ++r) {
                  var i = t[r][Ua]("=");
                  if (2 === i[g] && i[0] === n) return i[1]
               }
         }
      };

   function ec() {
      var e = pr();
      if (e && e.now && e.timing) {
         e = e.now() + e.timing.navigationStart;
         if (0 < e) return e
      }
      return et()
   }

   function nc(e, n) {
      return 0 === e || 0 === n || X(e) || X(n) ? null : n - e
   }
   w = {
      Now: ec,
      GetDuration: nc
   };

   function tc(e, n) {
      var t = e || {};
      return {
         getName: function() {
            return t[za]
         },
         setName: function(e) {
            n && n.setName(e), t[za] = e
         },
         getTraceId: function() {
            return t.traceID
         },
         setTraceId: function(e) {
            n && n.setTraceId(e), Co(e) && (t.traceID = e)
         },
         getSpanId: function() {
            return t.parentID
         },
         setSpanId: function(e) {
            n && n.setSpanId(e), So(e) && (t.parentID = e)
         },
         getTraceFlags: function() {
            return t.traceFlags
         },
         setTraceFlags: function(e) {
            n && n.setTraceFlags(e), t.traceFlags = e
         }
      }
   }

   function rc(e) {
      if (!e) return {};
      var n, e = Wn(e[Ua](";"), function(e, n) {
         var t, n = n[Ua]("=");
         return 2 === n[g] && (t = n[0][qa](), n = n[1], e[t] = n), e
      }, {});
      return 0 < $n(e)[g] && (e.endpointsuffix && (n = e.location ? e.location + "." : "", e[Fa] = e[Fa] || "https://" + n + "dc." + e.endpointsuffix, qn(e[Fa], "/") && (e[Fa] = e[Fa].slice(0, -1))), e[Fa] = e[Fa] || Na), e
   }
   var fa = {
         parse: rc
      },
      ic = function(e, n, t) {
         var r = this,
            i = this;
         i.ver = 1, i.sampleRate = 100, i.tags = {}, i[za] = ee(e, t) || Aa, i.data = n, i.time = Bn(new Date), i.aiDataContract = {
            time: 1,
            iKey: 1,
            name: 1,
            sampleRate: function() {
               return 100 === r.sampleRate ? 4 : 1
            },
            tags: 1,
            data: 1
         }
      },
      oc = (ac.envelopeType = "Microsoft.ApplicationInsights.{0}.Event", ac.dataType = "EventData", ac);

   function ac(e, n, t, r) {
      this.aiDataContract = {
         ver: 1,
         name: 1,
         properties: 0,
         measurements: 0
      }, this.ver = 2, this[za] = ee(e, n) || Aa, this[$a] = Fu(e, t), this[Qa] = Hu(e, r)
   }
   var uc = "error",
      cc = "stack",
      sc = "stackDetails",
      lc = "errorSrc",
      fc = "message",
      dc = "description";

   function pc(e, n) {
      var t = e;
      return t && !J(t) && (JSON && JSON[Va] ? (t = JSON[Va](e), !n || t && "{}" !== t || (t = W(e[Ha]) ? e[Ha]() : "" + e)) : t = e + " - (Missing JSON.stringify)"), t || ""
   }

   function vc(e, n) {
      var t = e;
      return e && ((t = t && !J(t) && (e[fc] || e[dc]) || t) && !J(t) && (t = pc(t, !0)), e.filename && (t = t + " @" + (e.filename || "") + ":" + (e.lineno || "?") + ":" + (e.colno || "?"))), (n && "String" !== n && "Object" !== n && "Error" !== n && -1 === (t || "")[Xa](n) ? n + ": " + t : t) || ""
   }

   function gc(e) {
      return e && e.src && J(e.src) && e.obj && q(e.obj)
   }

   function mc(e) {
      var e = e || "",
         n = (e = J(e) ? e : J(e[cc]) ? e[cc] : "" + e)[Ua]("\n");
      return {
         src: e,
         obj: n
      }
   }

   function hc(e) {
      var n, t = null;
      if (e) try {
         e[cc] ? t = mc(e[cc]) : e[uc] && e[uc][cc] ? t = mc(e[uc][cc]) : e.exception && e.exception[cc] ? t = mc(e.exception[cc]) : gc(e) ? t = e : gc(e[sc]) ? t = e[sc] : window && window.opera && e[fc] ? t = function(e) {
            for (var n = [], t = e[Ua]("\n"), r = 0; r < t[g]; r++) {
               var i = t[r];
               t[r + 1] && (i += "@" + t[r + 1], r++), n.push(i)
            }
            return {
               src: e,
               obj: n
            }
         }(e[ja]) : e.reason && e.reason[cc] ? t = mc(e.reason[cc]) : J(e) ? t = mc(e) : (n = e[fc] || e[dc] || "", J(e[lc]) && (n && (n += "\n"), n += " from " + e[lc]), n && (t = mc(n)))
      } catch (r) {
         t = mc(r)
      }
      return t || {
         src: "",
         obj: null
      }
   }

   function yc(e) {
      var n = "";
      if (e && !(n = e.typeName || e[za] || "")) try {
         var t = /function (.{1,200})\(/.exec(e.constructor[Ha]()),
            n = t && 1 < t[g] ? t[1] : ""
      } catch (r) {}
      return n
   }

   function xc(e) {
      if (e) try {
         var n, t;
         if (!J(e)) return n = yc(e), (t = pc(e, !1)) && "{}" !== t || (e[uc] && (n = yc(e = e[uc])), t = pc(e, !0)), 0 !== t[Xa](n) && "String" !== n ? n + ":" + t : t
      } catch (r) {}
      return "" + (e || "")
   }
   Ic.CreateAutoException = function(e, n, t, r, i, o, a, u) {
      var c = yc(i || o || e),
         s = {};
      return s[ja] = vc(e, c), s.url = n, s.lineNumber = t, s.columnNumber = r, s.error = xc(i || o || e), s.evt = xc(o || e), s[Za] = c, s.stackDetails = hc(a || i || o), s.errorSrc = u, s
   }, Ic.CreateFromInterface = function(n, e, t, r) {
      var i = e[Ga] && Xn(e[Ga], function(e) {
         return wc[ru](n, e)
      });
      return new Ic(n, ie(ie({}, e), {
         exceptions: i
      }), t, r)
   }, Ic.prototype.toInterface = function() {
      var e = this,
         n = e.exceptions,
         t = e.properties,
         r = e.measurements,
         i = e.severityLevel,
         o = e.problemGroup,
         a = e.id,
         e = e.isManual,
         n = n instanceof Array && Xn(n, function(e) {
            return e.toInterface()
         }) || undefined,
         u = {
            ver: "4.0"
         };
      return u[Ga] = n, u.severityLevel = i, u.properties = t, u.measurements = r, u.problemGroup = o, u.id = a, u.isManual = e, u
   }, Ic.CreateSimpleException = function(e, n, t, r, i, o) {
      var a;
      return {
         exceptions: [((a = {})[au] = !0, a.message = e, a.stack = i, a.typeName = n, a)]
      }
   }, Ic.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception", Ic.dataType = "ExceptionData", Ic.formatError = xc;
   var bc = Ic;

   function Ic(e, n, t, r, i, o) {
      this.aiDataContract = {
         ver: 1,
         exceptions: 1,
         severityLevel: 0,
         properties: 0,
         measurements: 0
      };
      var a = this;
      a.ver = 2,
         function(e) {
            try {
               if (Ln(e)) return "ver" in e && "exceptions" in e && "properties" in e
            } catch (n) {}
         }(n) ? (a[Ga] = n[Ga] || [], a[$a] = n[$a], a[Qa] = n[Qa], n[eu] && (a[eu] = n[eu]), n.id && (a.id = n.id), n[nu] && (a[nu] = n[nu]), X(n[tu]) || (a[tu] = n[tu])) : (a[Ga] = [new wc(e, n, t = t || {})], a[$a] = Fu(e, t), a[Qa] = Hu(e, r), i && (a[eu] = i), o && (a.id = o))
   }
   Tc.prototype.toInterface = function() {
      var e = this,
         n = e[Ja] instanceof Array && Xn(e[Ja], function(e) {
            return e.toInterface()
         });
      return (e = {
         id: e.id,
         outerId: e.outerId,
         typeName: e[Za],
         message: e[ja],
         hasFullStack: e[au],
         stack: e[cc]
      })[Ja] = n || undefined, e
   }, Tc.CreateFromInterface = function(e, n) {
      var t = n[Ja] instanceof Array && Xn(n[Ja], function(e) {
         return Cc[ru](e)
      }) || n[Ja];
      return new Tc(e, ie(ie({}, n), {
         parsedStack: t
      }))
   };
   var wc = Tc;

   function Tc(n, e, t) {
      this.aiDataContract = {
         id: 0,
         outerId: 0,
         typeName: 1,
         message: 1,
         hasFullStack: 0,
         stack: 0,
         parsedStack: 2
      };
      var r, s, i, o, a = this;
      ! function(e) {
         try {
            if (Ln(e)) return "hasFullStack" in e && "typeName" in e
         } catch (n) {}
      }(e) ? (i = (r = e) && r.evt, On(r) || (r = r[uc] || i || r), a[Za] = ee(n, yc(r)) || Aa, a[ja] = Uu(n, vc(e || r, a[Za])) || Aa, s = e[sc] || hc(e), a[Ja] = function() {
         var e = s.obj;
         if (e && 0 < e[g]) {
            var n = [],
               t = 0,
               r = 0;
            if ($(e, function(e) {
                  var e = e[Ha]();
                  Cc.regex.test(e) && (e = new Cc(e, t++), r += e[Ya], n.push(e))
               }), 32768 < r)
               for (var i = 0, o = n[g] - 1, a = 0, u = i, c = o; i < o;) {
                  if (32768 < (a += n[i][Ya] + n[o][Ya])) {
                     n.splice(u, c - u + 1);
                     break
                  }
                  u = i, c = o, i++, o--
               }
         }
         return n
      }(), q(a[Ja]) && Xn(a[Ja], function(e) {
         e[iu] = ee(n, e[iu]), e[ou] = ee(n, e[ou])
      }), a[cc] = qu(n, (o = "", (i = s) && (i.obj ? $(i.obj, function(e) {
         o += e + "\n"
      }) : o = i.src || ""), o)), a.hasFullStack = q(a.parsedStack) && 0 < a.parsedStack[g], t && (t[Za] = t[Za] || a[Za])) : (a[Za] = e[Za], a[ja] = e[ja], a[cc] = e[cc], a[Ja] = e[Ja] || [], a[au] = e[au])
   }
   Sc.CreateFromInterface = function(e) {
      return new Sc(e, null)
   }, Sc.prototype.toInterface = function() {
      var e = this;
      return {
         level: e[uu],
         method: e[cu],
         assembly: e[iu],
         fileName: e[ou],
         line: e[su]
      }
   }, Sc.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/, Sc.baseSize = 58;
   var Cc = Sc;

   function Sc(e, n) {
      this.aiDataContract = {
         level: 1,
         method: 1,
         assembly: 0,
         fileName: 0,
         line: 0
      };
      var t, r = this;
      r[Ya] = 0, "string" == typeof e ? (t = e, r[uu] = n, r[cu] = "<no_method>", r[iu] = V(t), r[ou] = "", r[su] = 0, (n = t.match(Sc.regex)) && 5 <= n[g] && (r[cu] = V(n[2]) || r[cu], r[ou] = V(n[4]), r[su] = parseInt(n[5]) || 0)) : (r[uu] = e[uu], r[cu] = e[cu], r[iu] = e[iu], r[ou] = e[ou], r[su] = e[su], r[Ya] = 0), r.sizeInBytes += r.method[g], r.sizeInBytes += r.fileName[g], r.sizeInBytes += r.assembly[g], r[Ya] += Sc.baseSize, r.sizeInBytes += r.level.toString()[g], r.sizeInBytes += r.line.toString()[g]
   }
   var kc = function() {
         this.aiDataContract = {
            name: 1,
            kind: 0,
            value: 1,
            count: 0,
            min: 0,
            max: 0,
            stdDev: 0
         }, this.kind = 0
      },
      _c = (Ec.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric", Ec.dataType = "MetricData", Ec);

   function Ec(e, n, t, r, i, o, a, u, c) {
      this.aiDataContract = {
         ver: 1,
         metrics: 1,
         properties: 0
      }, this.ver = 2;
      var s = new kc;
      s.count = 0 < r ? r : undefined, s.max = isNaN(o) || null === o ? undefined : o, s.min = isNaN(i) || null === i ? undefined : i, s[za] = ee(e, n) || Aa, s.value = t, s.stdDev = isNaN(a) || null === a ? undefined : a, this.metrics = [s], this[$a] = Fu(e, u), this[Qa] = Hu(e, c)
   }
   Pc.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview", Pc.dataType = "PageviewData";
   var Dc = Pc;

   function Pc(e, n, t, r, i, o, a) {
      this.aiDataContract = {
         ver: 1,
         name: 0,
         url: 0,
         duration: 0,
         properties: 0,
         measurements: 0,
         id: 0
      };
      var u = this;
      u.ver = 2, u.id = Ou(e, a), u.url = Lu(e, t), u[za] = ee(e, n) || Aa, isNaN(r) || (u[lu] = pu(r)), u[$a] = Fu(e, i), u[Qa] = Hu(e, o)
   }
   Mc.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency", Mc.dataType = "RemoteDependencyData";
   var Nc = Mc;

   function Mc(e, n, t, r, i, o, a, u, c, s, l, f) {
      void 0 === c && (c = "Ajax"), this.aiDataContract = {
         id: 1,
         ver: 1,
         name: 0,
         resultCode: 0,
         duration: 0,
         success: 0,
         data: 0,
         target: 0,
         type: 0,
         properties: 0,
         measurements: 0,
         kind: 0,
         value: 0,
         count: 0,
         min: 0,
         max: 0,
         stdDev: 0,
         dependencyKind: 0,
         dependencySource: 0,
         commandName: 0,
         dependencyTypeName: 0
      };
      var d, p, v = this,
         t = (v.ver = 2, v.id = n, v[lu] = pu(i), v.success = o, v.resultCode = a + "", v.type = ee(e, c), n = e, i = u, c = a = o = r, a = (u = t) && 0 < u[g] ? (p = (t = Xu(u)).host, a || (null != t[Ba] ? ("/" != ((d = 0 === t.pathname[g] ? "/" : t[Ba])[0] || "") && (d = "/" + d), c = t[Ba], ee(n, i ? i + " " + d : d)) : ee(n, u))) : p = o, {
            target: p,
            name: a,
            data: c
         });
      v.data = Lu(e, r) || t.data, v.target = ee(e, t.target), s && (v.target = "".concat(v.target, " | ").concat(s)), v[za] = ee(e, t[za]), v[$a] = Fu(e, l), v[Qa] = Hu(e, f)
   }
   Rc.envelopeType = "Microsoft.ApplicationInsights.{0}.Message", Rc.dataType = "MessageData";
   var Ac = Rc;

   function Rc(e, n, t, r, i) {
      this.aiDataContract = {
         ver: 1,
         message: 1,
         severityLevel: 0,
         properties: 0
      };
      var o = this;
      o.ver = 2, o[ja] = Uu(e, n = n || Aa), o[$a] = Fu(e, r), o[Qa] = Hu(e, i), t && (o[eu] = t)
   }
   Uc.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance", Uc.dataType = "PageviewPerformanceData";
   var Lc = Uc;

   function Uc(e, n, t, r, i, o, a) {
      this.aiDataContract = {
         ver: 1,
         name: 0,
         url: 0,
         duration: 0,
         perfTotal: 0,
         networkConnect: 0,
         sentRequest: 0,
         receivedResponse: 0,
         domProcessing: 0,
         properties: 0,
         measurements: 0
      };
      var u = this;
      u.ver = 2, u.url = Lu(e, t), u[za] = ee(e, n) || Aa, u[$a] = Fu(e, i), u[Qa] = Hu(e, o), a && (u.domProcessing = a.domProcessing, u[lu] = a[lu], u.networkConnect = a.networkConnect, u.perfTotal = a.perfTotal, u[fu] = a[fu], u.sentRequest = a.sentRequest)
   }
   var qc = function(e, n) {
         this.aiDataContract = {
            baseType: 1,
            baseData: 1
         }, this.baseType = e, this.baseData = n
      },
      n = lt({
         Verbose: 0,
         Information: 1,
         Warning: 2,
         Error: 3,
         Critical: 4
      }),
      sa = (Fc.getConfig = function(e, n, t, r) {
         return void 0 === r && (r = !1), t = (t && e[Wa] && e[Wa][t] && !X(e[Wa][t][n]) ? e[Wa][t] : e)[n], X(t) ? r : t
      }, Fc);

   function Fc() {}

   function Hc(e) {
      var n = "ai." + e + ".";
      return function(e) {
         return n + e
      }
   }
   var Oc, zc, t = Hc("application"),
      i = Hc("device"),
      ga = Hc("location"),
      ma = Hc("operation"),
      o = Hc("session"),
      r = Hc("user"),
      jc = Hc("cloud"),
      Vc = Hc("internal"),
      Bc = (zc = {
         applicationVersion: t("ver"),
         applicationBuild: t("build"),
         applicationTypeId: t("typeId"),
         applicationId: t("applicationId"),
         applicationLayer: t("layer"),
         deviceId: i("id"),
         deviceIp: i("ip"),
         deviceLanguage: i("language"),
         deviceLocale: i("locale"),
         deviceModel: i("model"),
         deviceFriendlyName: i("friendlyName"),
         deviceNetwork: i("network"),
         deviceNetworkName: i("networkName"),
         deviceOEMName: i("oemName"),
         deviceOS: i("os"),
         deviceOSVersion: i("osVersion"),
         deviceRoleInstance: i("roleInstance"),
         deviceRoleName: i("roleName"),
         deviceScreenResolution: i("screenResolution"),
         deviceType: i("type"),
         deviceMachineName: i("machineName"),
         deviceVMName: i("vmName"),
         deviceBrowser: i("browser"),
         deviceBrowserVersion: i("browserVersion"),
         locationIp: ga("ip"),
         locationCountry: ga("country"),
         locationProvince: ga("province"),
         locationCity: ga("city"),
         operationId: ma("id"),
         operationName: ma("name"),
         operationParentId: ma("parentId"),
         operationRootId: ma("rootId"),
         operationSyntheticSource: ma("syntheticSource"),
         operationCorrelationVector: ma("correlationVector"),
         sessionId: o("id"),
         sessionIsFirst: o("isFirst"),
         sessionIsNew: o("isNew"),
         userAccountAcquisitionDate: r("accountAcquisitionDate"),
         userAccountId: r("accountId"),
         userAgent: r("userAgent"),
         userId: r("id"),
         userStoreRegion: r("storeRegion"),
         userAuthUserId: r("authUserId"),
         userAnonymousUserAcquisitionDate: r("anonUserAcquisitionDate"),
         userAuthenticatedUserAcquisitionDate: r("authUserAcquisitionDate"),
         cloudName: jc("name"),
         cloudRole: jc("role"),
         cloudRoleVer: jc("roleVer"),
         cloudRoleInstance: jc("roleInstance"),
         cloudEnvironment: jc("environment"),
         cloudLocation: jc("location"),
         cloudDeploymentUnit: jc("deploymentUnit"),
         internalNodeName: Vc("nodeName"),
         internalSdkVersion: Vc("sdkVersion"),
         internalAgentVersion: Vc("agentVersion"),
         internalSnippet: Vc("snippet"),
         internalSdkSrc: Vc("sdkSrc")
      }, _(Kc, Oc = function() {
         var t = this;
         G(zc, function(e, n) {
            t[e] = n
         })
      }), Kc);

   function Kc() {
      return Oc.call(this) || this
   }

   function Xc(e, n, t, r, i, o) {
      t = ee(r, t) || Aa, (X(e) || X(n) || X(t)) && rt("Input doesn't contain all required fields");
      var a, r = "",
         u = (e[Ra] && (r = e[Ra], delete e[Ra]), (a = {})[za] = t, a.time = Bn(new Date), a.iKey = r, a.ext = o || {}, a.tags = [], a.data = {}, a.baseType = n, a.baseData = e, a);
      return X(i) || G(i, function(e, n) {
         u.data[e] = n
      }), u
   }
   Wc.create = Xc;
   t = Wc;

   function Wc() {}
   var Gc = {
         UserExt: "user",
         DeviceExt: "device",
         TraceExt: "trace",
         WebExt: "web",
         AppExt: "app",
         OSExt: "os",
         SessionExt: "ses",
         SDKExt: "sdk"
      },
      f = new Bc,
      Jc = "AppInsightsPropertiesPlugin",
      $c = "AppInsightsChannelPlugin",
      Qc = "ApplicationInsightsAnalytics",
      Yc = "duration",
      Zc = "properties",
      es = "requestUrl",
      ns = "inst",
      ts = "length",
      rs = "traceID",
      is = "spanID",
      os = "traceFlags",
      as = "context",
      us = "aborted",
      cs = "traceId",
      ss = "spanId",
      ls = "core",
      fs = "includeCorrelationHeaders",
      ds = "canIncludeCorrelationHeader",
      ps = "getAbsoluteUrl",
      vs = "headers",
      gs = "requestHeaders",
      ms = "appId",
      hs = "setRequestHeader",
      ys = "trackDependencyDataInternal",
      xs = "distributedTracingMode",
      bs = "startTime",
      Is = "toLowerCase",
      ws = "status",
      Ts = "statusText",
      Cs = "headerMap",
      Ss = "openDone",
      ks = "sendDone",
      _s = "requestSentTime",
      Es = "abortDone",
      Ds = "getTraceId",
      Ps = "getTraceFlags",
      Ns = "method",
      Ms = "errorStatusText",
      As = "stateChangeAttached",
      Rs = "responseFinishedTime",
      Ls = "CreateTrackItem",
      Us = "response",
      qs = "getAllResponseHeaders",
      Fs = "getPartAProps",
      Hs = "getCorrelationContext",
      Os = "perfMark",
      zs = "name",
      js = "perfTiming",
      Vs = "ajaxTotalDuration",
      Bs = "eventTraceCtx";

   function Ks(e, n, t) {
      n = e[n], t = e[t];
      return n && t ? nc(n, t) : 0
   }

   function Xs(e, n, t, r, i) {
      t = Ks(t, r, i);
      return t ? Ws(e, n, pu(t)) : 0
   }

   function Ws(e, n, t) {
      var r = "ajaxPerf",
         i = 0;
      return e && n && t && ((e[r] = e[r] || {})[n] = t, i = 1), i
   }
   var Gs = function() {
         var e = this;
         e[Ss] = !1, e.setRequestHeaderDone = !1, e[ks] = !1, e[Es] = !1, e[As] = !1
      },
      Js = ($s.__ieDyn = 1, $s);

   function $s(e, n, t, r) {
      var i = this,
         o = t;
      i[Os] = null, i.completed = !1, i.requestHeadersSize = null, i[gs] = null, i.responseReceivingDuration = null, i.callbackDuration = null, i[Vs] = null, i[us] = 0, i.pageUrl = null, i[es] = null, i.requestSize = 0, i[Ns] = null, i[ws] = null, i[_s] = null, i.responseStartedTime = null, i[Rs] = null, i.callbackFinishedTime = null, i.endTime = null, i.xhrMonitoringState = new Gs, i.clientFailure = 0, i[rs] = e, i[is] = n, i[os] = null == r ? void 0 : r.getTraceFlags(), i[Bs] = r ? ((t = {})[cs] = r[Ds](), t[ss] = r.getSpanId(), t[os] = r[Ps](), t) : null, m($s, i, function(y) {
         y.getAbsoluteUrl = function() {
            return y[es] ? Wu(y[es]) : null
         }, y.getPathName = function() {
            return y[es] ? Lu(o, Gu(y[Ns], y[es])) : null
         }, y[Ls] = function(e, n, t) {
            if (y.ajaxTotalDuration = Math.round(1e3 * nc(y.requestSentTime, y.responseFinishedTime)) / 1e3, y[Vs] < 0) return null;
            (h = {
               id: "|" + y[rs] + "." + y[is],
               target: y[ps]()
            })[zs] = y.getPathName(), h.type = e, h[bs] = null, h.duration = y[Vs], h.success = 200 <= +y[ws] && +y[ws] < 400, h.responseCode = +y[ws], h[Zc] = {
               HttpMethod: y[Ns]
            };
            var r, i, o, a, u, c, s, l, f, d, p, v, g, m, e = h,
               h = e[Zc];
            return y[us] && (h[us] = !0), y[_s] && (e[bs] = new Date, e[bs].setTime(y[_s])), a = (r = y)[js], u = (i = e)[Zc] || {}, c = 0, v = "startTime", m = "connectEnd", s = "requestStart", g = "responseEnd", l = "transferSize", f = "encodedBodySize", d = "decodedBodySize", p = "serverTiming", a ? (c = (c = (c = (c = (c = (c = (c |= Xs(u, "End", a, "redirectStart", "End")) | Xs(u, "domainLookup", a, "domainLookupStart", "domainLookupEnd")) | Xs(u, "connect", a, "connectStart", m)) | Xs(u, "request", a, s, "requestEnd")) | Xs(u, "response", a, "responseStart", g)) | Xs(u, "networkConnect", a, v, m)) | Xs(u, "sentRequest", a, s, g), m = a[Yc] || Ks(a, v, g) || 0, c = (c |= Ws(u, Yc, m)) | Ws(u, "perfTotal", m), (s = a[p]) && (o = {}, $(s, function(e, n) {
               var n = Un(e.name || "" + n),
                  t = o[n] || {};
               G(e, function(e, n) {
                  !("name" !== e && J(n) || zn(n)) || !(n = t[e] ? t[e] + ";" + n : n) && J(n) || (t[e] = n)
               }), o[n] = t
            }), c |= Ws(u, p, o)), c = (c = (c |= Ws(u, l, a[l])) | Ws(u, f, a[f])) | Ws(u, d, a[d])) : r[Os] && (c |= Ws(u, "missing", r.perfAttempts)), c && (i[Zc] = u), n && 0 < $n(y.requestHeaders)[ts] && (h[gs] = y[gs]), t && (v = t()) && ((g = v.correlationContext) && (e.correlationContext = g), v[Cs] && 0 < $n(v.headerMap)[ts] && (h.responseHeaders = v[Cs]), y[Ms] && (400 <= y[ws] ? ("" !== (m = v.type) && "text" !== m || (h.responseText = v.responseText ? v[Ts] + " - " + v.responseText : v[Ts]), "json" === m && (h.responseText = v.response ? v[Ts] + " - " + JSON.stringify(v[Us]) : v[Ts])) : 0 === y[ws] && (h.responseText = v[Ts] || ""))), e
         }, y[Fs] = function() {
            var e, n = null,
               t = y[Bs];
            return t && (t[cs] || t[ss]) && (e = (n = {})[Gc.TraceExt] = ((e = {})[rs] = t[cs], e.parentID = t[ss], e), X(t[os]) || (e[os] = t[os])), n
         }
      })
   }
   var Qs = "ai.ajxmn.",
      Ys = "diagLog",
      Zs = "_ajaxData",
      el = "fetch",
      nl = "Failed to monitor XMLHttpRequest",
      i = ", monitoring data for this ajax call ",
      tl = i + "may be incorrect.",
      rl = i + "won't be sent.",
      il = "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.",
      ol = "Failed to add custom defined request context as configured call back may missing a null check.",
      al = "Failed to calculate the duration of the ",
      ul = 0,
      cl = null;

   function sl(e, n) {
      var t, r = !1,
         i = (Ir() && (r = !(X(i = XMLHttpRequest[te]) || X(i.open) || X(i.send) || X(i.abort))), hr());
      if (r = !(i && i < 9) && r) try {
         var o = new XMLHttpRequest,
            a = {
               xh: [],
               i: ((t = {})[n] = {}, t)
            },
            u = (o[Zs] = a, XMLHttpRequest[te].open);
         XMLHttpRequest[te].open = u
      } catch (c) {
         r = !1, pl(e, 15, "Failed to enable XMLHttpRequest monitoring, extension is not supported", {
            exception: Z(c)
         })
      }
      return r
   }
   var ll = function(e, n) {
         return e && n && e[Zs] ? (e[Zs].i || {})[n] : null
      },
      fl = function(e, n) {
         var t = !1;
         return e && (e = (e[Zs] || {}).xh) && $(e, function(e) {
            if (e.n === n) return t = !0, -1
         }), t
      };

   function dl(e, n) {
      var t = "";
      try {
         var r = ll(e, n);
         r && r[es] && (t += "(url: '" + r[es] + "')")
      } catch (i) {}
      return t
   }

   function pl(e, n, t, r, i) {
      H(e[Ys](), 1, n, t, r, i)
   }

   function vl(e, n, t, r, i) {
      H(e[Ys](), 2, n, t, r, i)
   }

   function gl(n, t, r) {
      return function(e) {
         pl(n, t, r, {
            ajaxDiagnosticsMessage: dl(e[ns], n._ajaxDataId),
            exception: Z(e.err)
         })
      }
   }

   function ml(e, n) {
      return e && n ? e.indexOf(n) : -1
   }

   function hl(t, e, n) {
      var r = {
         id: e,
         fn: n
      };
      return t.push(r), {
         remove: function() {
            $(t, function(e, n) {
               if (e.id === r.id) return t.splice(n, 1), -1
            })
         }
      }
   }

   function yl(r, e, i, o) {
      var a = !0;
      return $(e, function(e, n) {
         try {
            !1 === e.fn.call(null, i) && (a = !1)
         } catch (t) {
            H(r && r.logger, 1, 64, "Dependency " + o + " [#" + n + "] failed: " + Q(t), {
               exception: Z(t)
            }, !0)
         }
      }), a
   }
   var ga = "*.blob.core.",
      xl = Yn([ga + "windows.net", ga + "chinacloudapi.cn", ga + "cloudapi.de", ga + "usgovcloudapi.net"]),
      bl = [/https:\/\/[^\/]*(\.pipe\.aria|aria\.pipe|events\.data|collector\.azure)\.[^\/]+\/(OneCollector\/1|Collector\/3)\.0/i];

   function Il() {
      return {
         maxAjaxCallsPerView: 500,
         disableAjaxTracking: !1,
         disableFetchTracking: !1,
         excludeRequestFromAutoTrackingPatterns: undefined,
         disableCorrelationHeaders: !1,
         distributedTracingMode: 1,
         correlationHeaderExcludedDomains: xl,
         correlationHeaderDomains: undefined,
         correlationHeaderExcludePatterns: undefined,
         appId: undefined,
         enableCorsCorrelation: !1,
         enableRequestHeaderTracking: !1,
         enableResponseHeaderTracking: !1,
         enableAjaxErrorStatusText: !1,
         enableAjaxPerfTracking: !1,
         maxAjaxPerfLookupAttempts: 3,
         ajaxPerfLookupDelay: 25,
         ignoreHeaders: ["Authorization", "X-API-Key", "WWW-Authenticate"],
         addRequestContext: undefined,
         addIntEndpoints: !0
      }
   }

   function wl() {
      var n = Il();
      return G(n, function(e) {
         n[e] = undefined
      }), n
   }
   _(Sl, Tl = In), Sl.prototype.processTelemetry = function(e, n) {
      this.processNext(e, n)
   }, Sl.prototype.addDependencyInitializer = function(e) {
      return null
   }, Sl.identifier = "AjaxDependencyPlugin", Sl.getDefaultConfig = Il, Sl.getEmptyConfig = wl;
   var Tl, Cl = Sl;

   function Sl() {
      var I, w, T, C, S, k, r, _, E, D, P, N, M, A, R, L, U, q, F, H, O, n, z, j, e = Tl.call(this) || this;
      return e.identifier = Sl.identifier, e.priority = 120, m(Sl, e, function(p, o) {
         var a = o._addHook;

         function e() {
            var e = dr();
            w = I = !1, T = e && e.host && e.host[Is](), C = Sl.getEmptyConfig(), A = N = D = E = k = S = !1, U = L = !(R = {}), H = F = q = P = _ = null, n = M = r = 0, z = [], j = [], O = ai("ajaxData"), p._ajaxDataId = O
         }

         function f(n) {
            var t = !0;
            return (n || C.ignoreHeaders) && $(C.ignoreHeaders, function(e) {
               if (e[Is]() === n[Is]()) return t = !1, -1
            }), t
         }

         function u(e, n, t) {
            a(e ? Sa(e[te], n, t, !1) : null)
         }

         function d(e, n, t) {
            var r = !1,
               i = ((J(n) ? n : (n || {}).url || "") || "")[Is]();
            if ($(q, function(e) {
                  var n = e;
                  J(e) && (n = RegExp(e)), r = r || n.test(i)
               }), r) return r;
            var o = ml(i, "?"),
               a = ml(i, "#");
            return -1 !== (o = -1 === o || -1 !== a && a < o ? a : o) && (i = i.substring(0, o)), X(e) ? X(n) || (r = "object" == typeof n && !0 === n[_a] || !!t && !0 === t[_a]) : r = !0 === e[_a] || !0 === i[_a], (r = !(r || !i || !Yu(i)) || r) ? R[i] || (R[i] = 1) : R[i] && (r = !0), r
         }

         function s(e, n, t) {
            var r = !0;
            return X(e) || (r = !0 === t || !X(n)), w && r
         }

         function v() {
            var e = null;
            return !(e = p[ls] && p[ls].getTraceCtx ? p[ls].getTraceCtx(!1) : e) && _ && _.telemetryTrace ? tc(_.telemetryTrace) : e
         }

         function g(t, r) {
            r.xhrMonitoringState[As] = eo(t, "readystatechange", function() {
               try {
                  t && 4 === t.readyState && s(t, r) && ((u = ll(a = t, O))[Rs] = ec(), u[ws] = a[ws], l("xmlhttprequest", u, function() {
                     try {
                        var e, n = u[Ls]("Ajax", S, function() {
                              var e, t, n = {
                                 statusText: a[Ts],
                                 headerMap: null,
                                 correlationContext: c(a),
                                 type: a.responseType,
                                 responseText: function(e) {
                                    try {
                                       var n = e.responseType;
                                       if ("" === n || "text" === n) return e.responseText
                                    } catch (t) {}
                                    return null
                                 }(a),
                                 response: a[Us]
                              };
                              return A && (e = a[qs]()) && (e = V(e).split(/[\r\n]+/), t = {}, $(e, function(e) {
                                 var e = e.split(": "),
                                    n = e.shift(),
                                    e = e.join(": ");
                                 f(n) && (t[n] = e)
                              }), n[Cs] = t), n
                           }),
                           t = void 0;
                        try {
                           F && (t = F({
                              status: a[ws],
                              xhr: a
                           }))
                        } catch (i) {
                           vl(p, 104, ol)
                        }
                        n ? (t !== undefined && (n[Zc] = ie(ie({}, n.properties), t)), e = u[Fs](), b(j, p[ls], u, n, null, e)) : o(null, {
                           requestSentTime: u[_s],
                           responseFinishedTime: u[Rs]
                        })
                     } finally {
                        try {
                           var r = (a[Zs] || {
                              i: {}
                           }).i || {};
                           r[O] && (r[O] = null)
                        } catch (i) {}
                     }
                  }, function(e) {
                     o(e, null)
                  }))
               } catch (n) {
                  var e = Z(n);
                  e && -1 !== ml(e[Is](), "c00c023f") || pl(p, 16, nl + " 'readystatechange' event handler" + tl, {
                     ajaxDiagnosticsMessage: dl(t, O),
                     exception: e
                  })
               }

               function o(e, n) {
                  n = n || {};
                  n.ajaxDiagnosticsMessage = dl(a, O), e && (n.exception = Z(e)), vl(p, 14, al + "ajax call" + rl, n)
               }
               var a, u
            }, H)
         }

         function c(e) {
            try {
               var n, t = e[qs]();
               if (null !== t && -1 !== ml(t[Is](), B[8])) return n = e.getResponseHeader(B[0]), Zu[Hs](n)
            } catch (r) {
               vl(p, 18, il, {
                  ajaxDiagnosticsMessage: dl(e, O),
                  exception: Z(r)
               })
            }
         }

         function m(e, n) {
            var t;
            n[es] && P && N && (t = pr()) && W(t.mark) && (e = P + e + "#" + ++ul, t.mark(e), (e = t.getEntriesByName(e)) && 1 === e[ts] && (n[Os] = e[0]))
         }

         function l(o, a, u, c) {
            var s = a[Os],
               l = pr(),
               f = C.maxAjaxPerfLookupAttempts,
               d = C.ajaxPerfLookupDelay,
               p = a[es],
               v = 0;
            ! function g() {
               try {
                  if (l && s) {
                     v++;
                     for (var e = null, n = l.getEntries(), t = n[ts] - 1; 0 <= t; t--) {
                        var r = n[t];
                        if (r) {
                           if ("resource" === r.entryType) r.initiatorType !== o || -1 === ml(r[zs], p) && -1 === ml(p, r[zs]) || (e = r);
                           else if ("mark" === r.entryType && r[zs] === s[zs]) {
                              a[js] = e;
                              break
                           }
                           if (r[bs] < s[bs] - 1e3) break
                        }
                     }
                  }!s || a[js] || f <= v || !1 === a["async"] ? (s && W(l.clearMarks) && l.clearMarks(s[zs]), a.perfAttempts = v, u()) : setTimeout(g, d)
               } catch (i) {
                  c(i)
               }
            }()
         }

         function h(e) {
            var n = "";
            try {
               X(e) || (J(e) ? n += "(url: '".concat(e, "')") : n += "(url: '".concat(e.url, "')"))
            } catch (t) {
               pl(p, 15, "Failed to grab failed fetch diagnostics message", {
                  exception: Z(t)
               })
            }
            return n
         }

         function y(e, r, i, o, a, u) {
            function c(e, n, t) {
               t = t || {};
               t.fetchDiagnosticsMessage = h(i), n && (t.exception = Z(n)), vl(p, e, al + "fetch call" + rl, t)
            }
            a && (a[Rs] = ec(), a[ws] = r, l(el, a, function() {
               var e, n = a[Ls]("Fetch", S, u);
               try {
                  F && (e = F({
                     status: r,
                     request: i,
                     response: o
                  }))
               } catch (t) {
                  vl(p, 104, ol)
               }
               n ? (e !== undefined && (n[Zc] = ie(ie({}, n.properties), e)), e = a[Fs](), b(j, p[ls], a, n, null, e)) : c(14, null, {
                  requestSentTime: a[_s],
                  responseFinishedTime: a[Rs]
               })
            }, function(e) {
               c(18, e, null)
            }))
         }

         function x(e) {
            if (e && e[vs]) try {
               var n = e[vs].get(B[0]);
               return Zu[Hs](n)
            } catch (t) {
               vl(p, 18, il, {
                  fetchDiagnosticsMessage: h(e),
                  exception: Z(t)
               })
            }
         }

         function b(e, n, t, r, i, o) {
            var a = !0;
            (a = 0 < e[ts] ? yl(n, e, {
               item: r,
               properties: i,
               sysProperties: o,
               context: t ? t[as] : null,
               aborted: !!t && !!t[us]
            }, "initializer") : a) && p[ys](r, i, o)
         }
         e(), p.initialize = function(e, n, t, r) {
            var i, l;
            p.isInitialized() || (o.initialize(e, n, t, r), H = Zi(ai("ajax"), n && n.evtNamespace && n.evtNamespace()), i = Uo(null, t = e, p[ls]), C = wl(), G(Il(), function(e, n) {
               C[e] = i.getConfig(Sl.identifier, e, n)
            }), r = C[xs], S = C.enableRequestHeaderTracking, k = C.enableAjaxErrorStatusText, N = C.enableAjaxPerfTracking, M = C.maxAjaxCallsPerView, A = C.enableResponseHeaderTracking, q = [].concat(C.excludeRequestFromAutoTrackingPatterns || [], !1 !== C.addIntEndpoints ? bl : []), F = C.addRequestContext, D = 0 === r || 1 === r, E = 1 === r || 2 === r, N && (n = t.instrumentationKey || "unkwn", P = 5 < n[ts] ? Qs + n.substring(n[ts] - 5) + "." : Qs + n + "."), L = !!C.disableAjaxTracking, U = !!C.disableFetchTracking, !sl(p, O) || L || w || (u(XMLHttpRequest, "open", {
               ns: H,
               req: function(e, n, t, r) {
                  var i, o, a, u, c;
                  L || (e = e[ns], i = ll(e, O), !d(e, t) && s(e, i, !0) && (i && i.xhrMonitoringState[Ss] || (u = e, n = n, t = t, r = r, c = (o = v()) && o[Ds]() || lo(), a = lo().substr(0, 16), (c = (u = (u = u[Zs] = u[Zs] || {
                     xh: [],
                     i: {}
                  }).i = u.i || {})[O] = u[O] || new Js(c, a, p[Ys](), null == (u = p.core) ? void 0 : u.getTraceCtx()))[os] = o && o[Ps](), c[Ns] = n, c[es] = t, c.xhrMonitoringState[Ss] = !0, c[gs] = {}, c["async"] = r, c[Ms] = k, i = c), g(e, i)))
               },
               hkErr: gl(p, 15, nl + ".open" + tl)
            }), u(XMLHttpRequest, "send", {
               ns: H,
               req: function(e, n) {
                  var t;
                  L || s(e = e[ns], t = ll(e, O)) && !t.xhrMonitoringState[ks] && (m("xhr", t), t[_s] = ec(), p[fs](t, undefined, undefined, e), t.xhrMonitoringState[ks] = !0)
               },
               hkErr: gl(p, 17, nl + tl)
            }), u(XMLHttpRequest, "abort", {
               ns: H,
               req: function(e) {
                  L || s(e = e[ns], e = ll(e, O)) && !e.xhrMonitoringState[Es] && (e[us] = 1, e.xhrMonitoringState[Es] = !0)
               },
               hkErr: gl(p, 13, nl + ".abort" + tl)
            }), u(XMLHttpRequest, "setRequestHeader", {
               ns: H,
               req: function(e, n, t) {
                  var r;
                  L || (e = e[ns], (r = ll(e, O)) && s(e, r) && (e && (e = (e[Zs] || {}).xh) && e.push({
                     n: n,
                     v: t
                  }), S && f(n) && r && (r[gs][n] = t)))
               },
               hkErr: gl(p, 71, nl + ".setRequestHeader" + tl)
            }), w = !0), (r = !(e = re()) || X(e.Request) || X(e.Request[te]) || X(e[el]) ? null : e[el]) && (t = re(), l = r.polyfill, U || I ? l && a(Sa(t, el, {
               ns: H,
               req: function(e, n, t) {
                  d(null, n, t)
               }
            })) : (a(Sa(t, el, {
               ns: H,
               req: function(e, n, t) {
                  var r, i, o, a, u, c, s;
                  U || !I || d(null, n, t) || l && w || (r = e.ctx(), i = n, o = t, c = (a = v()) && a[Ds]() || lo(), u = lo().substr(0, 16), (u = new Js(c, u, p[Ys](), null == (c = p.core) ? void 0 : c.getTraceCtx()))[os] = a && a[Ps](), u[_s] = ec(), u[Ms] = k, i instanceof Request ? u[es] = i ? i.url : "" : u[es] = i, c = "GET", o && o[Ns] ? c = o[Ns] : i && i instanceof Request && (c = i[Ns]), u[Ns] = c, s = {}, S && new Headers((o ? o[vs] : 0) || i instanceof Request && i[vs] || {}).forEach(function(e, n) {
                     f(n) && (s[n] = e)
                  }), u[gs] = s, m(el, u), a = u, (c = p[fs](a, n, t)) !== t && e.set(1, c), r.data = a)
               },
               rsp: function(e, t) {
                  var r;
                  U || (r = e.ctx().data) && (e.rslt = e.rslt.then(function(n) {
                     return y(0, (n || {})[ws], t, n, r, function() {
                        var t, e = {
                           statusText: (n || {})[Ts],
                           headerMap: null,
                           correlationContext: x(n)
                        };
                        return A && n && (t = {}, n.headers.forEach(function(e, n) {
                           f(n) && (t[n] = e)
                        }), e[Cs] = t), e
                     }), n
                  })["catch"](function(e) {
                     throw y(0, 0, t, null, r, null, e.message || Z(e)), e
                  }))
               },
               hkErr: gl(p, 15, "Failed to monitor Window.fetch" + tl)
            }, !0, function() {
               if (null == cl) try {
                  cl = !!(self && self instanceof WorkerGlobalScope)
               } catch (e) {
                  cl = !1
               }
               return cl
            }())), I = !0), l && (t[el].polyfill = l)), (n = p[ls].getPlugin(Jc)) && (_ = n.plugin[as]))
         }, p._doTeardown = function() {
            e()
         }, p.trackDependencyData = function(e, n) {
            b(j, p[ls], null, e, n)
         }, p[fs] = function(e, n, t, r) {
            var i, o, a, u, c = p._currentWindowHost || T,
               s = z,
               l = p[ls],
               f = e,
               d = t;
            return 0 < s[ts] && (yl(l, s, s = {
               core: l,
               xhr: r,
               input: n,
               init: d,
               traceId: f[rs],
               spanId: f[is],
               traceFlags: f[os],
               context: f[as] || {},
               aborted: !!f[us]
            }, "listener"), f[rs] = s[cs], f[is] = s[ss], f[os] = s[os], f[as] = s[as]), n || "" === n ? (Zu[ds](C, e[ps](), c) && (t = t || {}, l = new Headers(t[vs] || n instanceof Request && n[vs] || {}), D && (i = "|" + e[rs] + "." + e[is], l.set(B[3], i), S && (e[gs][B[3]] = i)), (o = C[ms] || _ && _[ms]()) && (l.set(B[0], B[2] + o), S && (e[gs][B[0]] = B[2] + o)), E && (X(a = e[os]) && (a = 1), u = ko(wo(e[rs], e[is], a)), l.set(B[4], u), S && (e[gs][B[4]] = u)), t[vs] = l), t) : r ? (Zu[ds](C, e[ps](), c) && (D && (fl(r, B[3]) ? vl(p, 71, "Unable to set [" + B[3] + "] as it has already been set by another instance") : (i = "|" + e[rs] + "." + e[is], r[hs](B[3], i), S && (e[gs][B[3]] = i))), (o = C[ms] || _ && _[ms]()) && (fl(r, B[0]) ? vl(p, 71, "Unable to set [" + B[0] + "] as it has already been set by another instance") : (r[hs](B[0], B[2] + o), S && (e[gs][B[0]] = B[2] + o))), E && (X(a = e[os]) && (a = 1), fl(r, B[4]) ? vl(p, 71, "Unable to set [" + B[4] + "] as it has already been set by another instance") : (u = ko(wo(e[rs], e[is], a)), r[hs](B[4], u), S && (e[gs][B[4]] = u)))), r) : undefined
         }, p[ys] = function(e, n, t) {
            -1 === M || r < M ? (2 !== C[xs] && 1 !== C[xs] || "string" != typeof e.id || "." === e.id[e.id[ts] - 1] || (e.id += "."), X(e[bs]) && (e[bs] = new Date), e = Xc(e, Nc.dataType, Nc.envelopeType, p[Ys](), n, t), p[ls].track(e)) : r === M && pl(p, 55, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.", !0), ++r
         }, p.addDependencyListener = function(e) {
            return hl(z, n++, e)
         }, p.addDependencyInitializer = function(e) {
            return hl(j, n++, e)
         }
      }), e
   }
   var ma = "AuthenticatedUserContext",
      o = "track",
      kl = "snippet",
      _l = "getCookieMgr",
      El = "startTrackPage",
      Dl = "stopTrackPage",
      Pl = "flush",
      Nl = "startTrackEvent",
      Ml = "stopTrackEvent",
      Al = "addTelemetryInitializer",
      Rl = "pollInternalLogs",
      Ll = "getPlugin",
      Ul = "evtNamespace",
      ql = o + "Event",
      Fl = o + "Trace",
      Hl = o + "Metric",
      Ol = o + "PageView",
      zl = o + "Exception",
      jl = o + "DependencyData",
      Vl = "set" + ma,
      Bl = "clear" + ma,
      Kl = "updateSnippetDefinitions",
      Xl = "loadAppInsights",
      Wl = "endpointUrl",
      Gl = "maxBatchSizeInBytes",
      Jl = "maxBatchInterval",
      $l = "disableExceptionTracking",
      Ql = "disableTelemetry",
      Yl = "emitLineDelimitedJson",
      Zl = "diagnosticLogInterval",
      ef = "autoTrackPageVisitTime",
      nf = "samplingPercentage",
      tf = "disableAjaxTracking",
      rf = "maxAjaxCallsPerView",
      of = "isBeaconApiDisabled",
      af = "disableCorrelationHeaders",
      uf = "correlationHeaderExcludedDomains",
      cf = "disableFlushOnBeforeUnload",
      sf = "enableSessionStorageBuffer",
      lf = "isCookieUseDisabled",
      ff = "isStorageUseDisabled",
      df = "isBrowserLinkTrackingEnabled",
      pf = "enableCorsCorrelation",
      vf = "config",
      gf = "context",
      mf = "push",
      hf = "version",
      yf = "queue",
      xf = "connectionString",
      bf = "instrumentationKey",
      If = "appInsights",
      wf = "disableIkeyDeprecationMessage",
      Tf = "getTransmissionControls",
      Cf = "onunloadFlush",
      Sf = "addHousekeepingBeforeUnload",
      kf = "indexOf",
      _f = [kl, "getDefaultConfig", "_hasLegacyInitializers", "_queue", "_processLegacyInitializers"],
      Ef = (Df.__ieDyn = 1, Df);

   function Df(t, u) {
      var r, o = this,
         a = !1,
         c = [];
      m(Df, this, function(i) {
         var e;

         function n(e) {
            a || (u[Al](function(e) {
               e.tags[Da] = c
            }), a = !0), c[mf](e)
         }(e = t[vf] || {})[Wl] = e[Wl] || Na + Ma, e.sessionRenewalMs = 18e5, e.sessionExpirationMs = 864e5, e[Gl] = 0 < e[Gl] ? e[Gl] : 102400, e[Jl] = isNaN(e[Jl]) ? 15e3 : e[Jl], e.enableDebug = s(e.enableDebug), e[$l] = s(e[$l]), e[Ql] = s(e[Ql]), e.verboseLogging = s(e.verboseLogging), e[Yl] = s(e[Yl]), e[Zl] = e[Zl] || 1e4, e[ef] = s(e[ef]), (isNaN(e[nf]) || e[nf] <= 0 || 100 <= e[nf]) && (e[nf] = 100), e[tf] = s(e[tf]), e[rf] = isNaN(e[rf]) ? 500 : e[rf], e[of] = s(e[of], !0), e[af] = s(e[af]), e[uf] = e[uf] || xl, e[cf] = s(e[cf]), e.disableFlushOnUnload = s(e.disableFlushOnUnload, e[cf]), e[sf] = s(e[sf], !0), e.isRetryDisabled = s(e.isRetryDisabled), e[lf] = s(e[lf]), e[ff] = s(e[ff]), e[df] = s(e[df]), e[pf] = s(e[pf]), r = e, i[vf] = r, i[kl] = t, i.appInsightsNew = u, i[gf] = {
            addTelemetryInitializer: n.bind(i)
         }, i.addTelemetryInitializers = n, ut(i, u, [_l, El, Dl, Pl, Nl, Ml]), i[Ol] = function(e, n, t, r, i) {
            u[Ol]({
               name: e,
               uri: n,
               properties: t,
               measurements: r
            })
         }, i[ql] = function(e, n, t) {
            u[ql]({
               name: e
            })
         }, i.trackDependency = function(e, n, t, r, i, o, a) {
            u[jl]({
               id: e,
               target: t,
               type: r,
               duration: i,
               properties: {
                  HttpMethod: n
               },
               success: o,
               responseCode: a
            })
         }, i[zl] = function(e, n, t, r, i) {
            u[zl]({
               exception: e
            })
         }, i[Hl] = function(e, n, t, r, i, o) {
            u[Hl]({
               name: e,
               average: n,
               sampleCount: t,
               min: r,
               max: i
            })
         }, i[Fl] = function(e, n, t) {
            u[Fl]({
               message: e,
               severityLevel: t
            })
         }, i[Vl] = function(e, n, t) {
            u[gf].user[Vl](e, n, t)
         }, i[Bl] = function() {
            u[gf].user[Bl]()
         }, i._onerror = function(e, n, t, r, i) {
            u._onerror({
               message: e,
               url: n,
               lineNumber: t,
               columnNumber: r,
               error: i
            })
         }, i.downloadAndSetup = function(e) {
            rt("downloadAndSetup not implemented in web SKU")
         }, i[Kl] = function(e) {
            ot(e, o, function(e) {
               return e && -1 === Kn(_f, e)
            })
         }, i[Xl] = function() {
            i[vf].iKey && (r = i[Ol], i[Ol] = function(e, n, t) {
               r.call(i, null, e, n, t)
            });
            var r, e = "logPageView",
               e = (W(i[kl][e]) && (o[e] = function(e, n, t) {
                  i[Ol](null, e, n, t)
               }), "logEvent");
            return W(i[kl][e]) && (o[e] = function(e, n, t) {
               i[ql](e, n, t)
            }), o
         }
      })
   }
   var Pf = "toString",
      Nf = "disableExceptionTracking",
      Mf = "autoTrackPageVisitTime",
      Af = "overridePageViewDuration",
      Rf = "enableUnhandledPromiseRejectionTracking",
      Lf = "samplingPercentage",
      Uf = "isStorageUseDisabled",
      qf = "isBrowserLinkTrackingEnabled",
      Ff = "enableAutoRouteTracking",
      Hf = "namePrefix",
      Of = "disableFlushOnBeforeUnload",
      zf = "core",
      jf = "dataType",
      Vf = "envelopeType",
      Bf = "diagLog",
      Kf = "track",
      Xf = "trackPageView",
      Wf = "trackPreviousPageVisit",
      Gf = "sendPageViewInternal",
      Jf = "sendPageViewPerformanceInternal",
      $f = "populatePageViewPerformanceEvent",
      Qf = "href",
      Yf = "sendExceptionInternal",
      Zf = "exception",
      ed = "error",
      nd = "_onerror",
      td = "errorSrc",
      rd = "lineNumber",
      id = "columnNumber",
      od = "message",
      ad = "CreateAutoException",
      ud = "addTelemetryInitializer",
      cd = "duration",
      sd = "length",
      ld = "isPerformanceTimingSupported",
      fd = "getPerformanceTiming",
      dd = "navigationStart",
      pd = "shouldCollectDuration",
      vd = "isPerformanceTimingDataReady",
      gd = "responseStart",
      md = "requestStart",
      hd = "loadEventEnd",
      yd = "responseEnd",
      xd = "connectEnd",
      bd = "pageVisitStartTime",
      Id = null,
      wd = (Td.__ieDyn = 1, Td);

   function Td(p, v, n, g) {
      m(Td, this, function(e) {
         var l, r = null,
            i = [],
            f = !1;

         function d(e) {
            n && n.flush(e)
         }

         function t(e) {
            i.push(e),
               function t() {
                  r = r || setTimeout(function() {
                     r = null;
                     var e = i.slice(0),
                        n = !1;
                     i = [], $(e, function(e) {
                        e() ? n = !0 : i.push(e)
                     }), 0 < i[sd] && t(), n && d(!0)
                  }, 100)
               }()
         }
         n && (l = n.logger), e[Xf] = function(r, i) {
            var e, o = r.name,
               a = (!X(o) && "string" == typeof o || (e = cr(), o = r.name = e && e.title || ""), r.uri);
            if (!X(a) && "string" == typeof a || (e = dr(), a = r.uri = e && e[Qf] || ""), !g[ld]()) return p[Gf](r, i), d(!0), void(function() {
               if (null == Id) try {
                  Id = !!(self && self instanceof WorkerGlobalScope)
               } catch (e) {
                  Id = !1
               }
               return Id
            }() || H(l, 2, 25, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info."));
            var u, n, c = !1,
               s = g[fd]()[dd];
            0 < s && (u = nc(s, +new Date), g[pd](u) || (u = undefined)), X(i) || X(i[cd]) || (n = i[cd]), !v && isNaN(n) || (isNaN(n) && ((i = i || {})[cd] = u), p[Gf](r, i), d(!0), c = !0), i = i || {}, t(function() {
               var e, n = !1;
               try {
                  g[vd]() ? (n = !0, e = {
                     name: o,
                     uri: a
                  }, g[$f](e), e.isValid || c ? (c || (i[cd] = e.durationMs, p[Gf](r, i)), f || (p[Jf](e, i), f = !0)) : (i[cd] = u, p[Gf](r, i))) : 0 < s && 6e4 < nc(s, +new Date) && (n = !0, c || (i[cd] = 6e4, p[Gf](r, i)))
               } catch (t) {
                  H(l, 1, 38, "trackPageView failed on page load calculation: " + Q(t), {
                     exception: Z(t)
                  })
               }
               return n
            })
         }, e.teardown = function(e, n) {
            var t;
            r && (clearTimeout(r), r = null, t = i.slice(0), i = [], $(t, function(e) {
               e()
            }))
         }
      })
   }
   var Cd = 36e5,
      Sd = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"];

   function kd() {
      var e = pr();
      return e && !!e.timing
   }

   function _d() {
      var e = pr(),
         e = e ? e.timing : 0;
      return e && 0 < e.domainLookupStart && 0 < e[dd] && 0 < e[gd] && 0 < e[md] && 0 < e[hd] && 0 < e[yd] && 0 < e[xd] && 0 < e.domLoading
   }

   function Ed() {
      return kd() ? pr().timing : null
   }

   function Dd() {
      for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
      var t = (lr() || {}).userAgent,
         r = !1;
      if (t)
         for (var i = 0; i < Sd[sd]; i++) r = r || !!~t.toLowerCase().indexOf(Sd[i]);
      if (r) return !1;
      for (i = 0; i < e[sd]; i++)
         if (e[i] < 0 || e[i] >= Cd) return !1;
      return !0
   }
   Nd.__ieDyn = 1;
   var Pd = Nd;

   function Nd(e) {
      var c = Mr(e);
      m(Nd, this, function(u) {
         u[$f] = function(e) {
            e.isValid = !1;
            var n = (n = pr()) && n.getEntriesByType && 0 < n.getEntriesByType("navigation")[sd] ? pr().getEntriesByType("navigation")[0] : null,
               t = Ed(),
               r = 0,
               i = 0,
               o = 0,
               a = 0;
            (n || t) && (n = n ? (r = n[cd], i = 0 === n.startTime ? n[xd] : nc(n.startTime, n[xd]), o = nc(n.requestStart, n[gd]), a = nc(n[gd], n[yd]), nc(n.responseEnd, n[hd])) : (r = nc(t[dd], t[hd]), i = nc(t[dd], t[xd]), o = nc(t.requestStart, t[gd]), a = nc(t[gd], t[yd]), nc(t.responseEnd, t[hd])), 0 === r ? H(c, 2, 10, "error calculating page view performance.", {
               total: r,
               network: i,
               request: o,
               response: a,
               dom: n
            }) : u[pd](r, i, o, a, n) ? r < Math.floor(i) + Math.floor(o) + Math.floor(a) + Math.floor(n) ? H(c, 2, 8, "client performance math error.", {
               total: r,
               network: i,
               request: o,
               response: a,
               dom: n
            }) : (e.durationMs = r, e.perfTotal = e[cd] = pu(r), e.networkConnect = pu(i), e.sentRequest = pu(o), e.receivedResponse = pu(a), e.domProcessing = pu(n), e.isValid = !0) : H(c, 2, 45, "Invalid page load duration value. Browser perf data won't be sent.", {
               total: r,
               network: i,
               request: o,
               response: a,
               dom: n
            }))
         }, u[fd] = Ed, u[ld] = kd, u[vd] = _d, u[pd] = Dd
      })
   }
   Ad.__ieDyn = 1;
   var Md = Ad;

   function Ad(u, c) {
      var s = "prevPageVisitData";
      m(Ad, this, function(e) {
         function i(e, n) {
            var t = null;
            try {
               t = a(), o(e, n)
            } catch (r) {
               Ur(u, "Call to restart failed: " + Z(r)), t = null
            }
            return t
         }

         function o(e, n) {
            try {
               var t, r;
               Du() && (null != Pu(u, s) && rt("Cannot call startPageVisit consecutively without first calling stopPageVisit"), t = new Rd(e, n), r = gr().stringify(t), Nu(u, s, r))
            } catch (i) {
               Ur(u, "Call to start failed: " + Z(i))
            }
         }

         function a() {
            var e, n, t = null;
            try {
               Du() && (e = et(), (n = Pu(u, s)) && vr() && ((t = gr().parse(n)).pageVisitTime = e - t[bd], Mu(u, s)))
            } catch (r) {
               Ur(u, "Stop page visit timer failed: " + Z(r)), t = null
            }
            return t
         }
         e[Wf] = function(e, n) {
            try {
               var t = i(e, n);
               t && c(t.pageName, t.pageUrl, t.pageVisitTime)
            } catch (r) {
               Ur(u, "Auto track page visit time failed, metric will not be collected: " + Z(r))
            }
         }, Qn(e, "_logger", function() {
            return u
         }), Qn(e, "pageVisitTimeTrackingHandler", function() {
            return c
         })
      })
   }
   var Rd = function(e, n) {
         this[bd] = et(), this.pageName = e, this.pageUrl = n
      },
      Ld = function(o, e) {
         var a = this,
            u = {};
         a.start = function(e) {
            "undefined" != typeof u[e] && H(o, 2, 62, "start was called more than once for this event without calling stop.", {
               name: e,
               key: e
            }, !0), u[e] = +new Date
         }, a.stop = function(e, n, t, r) {
            var i = u[e];
            isNaN(i) ? H(o, 2, 63, "stop was called without a corresponding start.", {
               name: e,
               key: e
            }, !0) : (i = nc(i, +new Date), a.action(e, n, i, t, r)), delete u[e], u[e] = undefined
         }
      };

   function Ud(e, n) {
      e && e.dispatchEvent && n && e.dispatchEvent(n)
   }
   var qd = 6e4;

   function Fd(e, n) {
      return (e = e || n) < qd ? qd : e
   }

   function Hd(e) {
      return (e = e || {}).sessionRenewalMs = Fd(e.sessionRenewalMs, 18e5), e.sessionExpirationMs = Fd(e.sessionExpirationMs, 864e5), e[Nf] = s(e[Nf]), e[Mf] = s(e[Mf]), e[Af] = s(e[Af]), e[Rf] = s(e[Rf]), (isNaN(e[Lf]) || e[Lf] <= 0 || 100 <= e[Lf]) && (e[Lf] = 100), e[Uf] = s(e[Uf]), e[qf] = s(e[qf]), e[Ff] = s(e[Ff]), e[Hf] = e[Hf] || "", e.enableDebug = s(e.enableDebug), e[Of] = s(e[Of]), e.disableFlushOnUnload = s(e.disableFlushOnUnload, e[Of]), e
   }
   _(jd, Od = In), jd.Version = "2.8.18", jd.getDefaultConfig = Hd;
   var Od, zd = jd;

   function jd() {
      var E, D, P, N, M, A, R, L, U, q, F, H, O, z, j, V, B, e = Od.call(this) || this;
      return e.identifier = Qc, e.priority = 180, e.autoRoutePVDelay = 500, m(jd, e, function(S, k) {
         var _ = k._addHook;

         function f(e, n, t, r, i) {
            S[Bf]().throwInternal(e, n, t, r, i)
         }

         function t() {
            A = M = N = P = D = E = null;
            var e = dr(!(z = O = H = F = q = U = L = R = !1));
            j = e && e[Qf] || "", B = V = null
         }
         t(), S.getCookieMgr = function() {
            return Si(S[zf])
         }, S.processTelemetry = function(e, n) {
            S.processNext(e, n)
         }, S.trackEvent = function(e, n) {
            try {
               var t = Xc(e, oc[jf], oc[Vf], S[Bf](), n);
               S[zf][Kf](t)
            } catch (r) {
               f(2, 39, "trackTrace failed, trace will not be collected: " + Q(r), {
                  exception: Z(r)
               })
            }
         }, S.startTrackEvent = function(e) {
            try {
               E.start(e)
            } catch (n) {
               f(1, 29, "startTrackEvent failed, event will not be collected: " + Q(n), {
                  exception: Z(n)
               })
            }
         }, S.stopTrackEvent = function(e, n, t) {
            try {
               E.stop(e, undefined, n, t)
            } catch (r) {
               f(1, 30, "stopTrackEvent failed, event will not be collected: " + Q(r), {
                  exception: Z(r)
               })
            }
         }, S.trackTrace = function(e, n) {
            try {
               var t = Xc(e, Ac[jf], Ac[Vf], S[Bf](), n);
               S[zf][Kf](t)
            } catch (r) {
               f(2, 39, "trackTrace failed, trace will not be collected: " + Q(r), {
                  exception: Z(r)
               })
            }
         }, S.trackMetric = function(e, n) {
            try {
               var t = Xc(e, _c[jf], _c[Vf], S[Bf](), n);
               S[zf][Kf](t)
            } catch (r) {
               f(1, 36, "trackMetric failed, metric will not be collected: " + Q(r), {
                  exception: Z(r)
               })
            }
         }, S[Xf] = function(e, n) {
            try {
               var t = e || {};
               P[Xf](t, ie(ie(ie({}, t.properties), t.measurements), n)), S.config[Mf] && M[Wf](t.name, t.uri)
            } catch (r) {
               f(1, 37, "trackPageView failed, page view will not be collected: " + Q(r), {
                  exception: Z(r)
               })
            }
         }, S[Gf] = function(e, n, t) {
            var r = cr(),
               r = (r && (e.refUri = e.refUri === undefined ? r.referrer : e.refUri), Xc(e, Dc[jf], Dc[Vf], S[Bf](), n, t));
            S[zf][Kf](r)
         }, S[Jf] = function(e, n, t) {
            e = Xc(e, Lc[jf], Lc[Vf], S[Bf](), n, t);
            S[zf][Kf](e)
         }, S.trackPageViewPerformance = function(e, n) {
            e = e || {};
            try {
               N[$f](e), S[Jf](e, n)
            } catch (t) {
               f(1, 37, "trackPageViewPerformance failed, page view will not be collected: " + Q(t), {
                  exception: Z(t)
               })
            }
         }, S.startTrackPage = function(e) {
            try {
               var n;
               "string" != typeof e && (e = (n = cr()) && n.title || ""), D.start(e)
            } catch (t) {
               f(1, 31, "startTrackPage failed, page view may not be collected: " + Q(t), {
                  exception: Z(t)
               })
            }
         }, S.stopTrackPage = function(e, n, t, r) {
            try {
               var i, o;
               "string" != typeof e && (e = (i = cr()) && i.title || ""), "string" != typeof n && (n = (o = dr()) && o[Qf] || ""), D.stop(e, n, t, r), S.config[Mf] && M[Wf](e, n)
            } catch (a) {
               f(1, 32, "stopTrackPage failed, page view will not be collected: " + Q(a), {
                  exception: Z(a)
               })
            }
         }, S[Yf] = function(e, n, t) {
            var r = e && (e[Zf] || e[ed]) || On(e) && e || {
                  name: e && typeof e,
                  message: e || Aa
               },
               r = (e = e || {}, Xc(new bc(S[Bf](), r, e.properties || n, e.measurements, e.severityLevel, e.id).toInterface(), bc[jf], bc[Vf], S[Bf](), n, t));
            S[zf][Kf](r)
         }, S.trackException = function(e, n) {
            e && !e[Zf] && e[ed] && (e[Zf] = e[ed]);
            try {
               S[Yf](e, n)
            } catch (t) {
               f(1, 35, "trackException failed, exception will not be collected: " + Q(t), {
                  exception: Z(t)
               })
            }
         }, S[nd] = function(e) {
            var n, t, r, i = e && e[ed],
               o = e && e.evt;
            try {
               o || (s = ar()) && (o = s.event);
               var a = e && e.url || (cr() || {}).URL,
                  u = e[td] || "window.onerror@" + a + ":" + (e[rd] || 0) + ":" + (e[id] || 0),
                  c = {
                     errorSrc: u,
                     url: a,
                     lineNumber: e[rd] || 0,
                     columnNumber: e[id] || 0,
                     message: e[od]
                  };
               vu(e.message, e.url, e.lineNumber, e.columnNumber, e[ed]) ? (n = bc[ad]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.", a, e[rd] || 0, e[id] || 0, i, o, null, u), t = c, r = Xc(n, bc[jf], bc[Vf], S[Bf](), t), S[zf][Kf](r)) : (e[td] || (e[td] = u), S.trackException({
                  exception: e,
                  severityLevel: 3
               }, c))
            } catch (l) {
               var s = i ? i.name + ", " + i[od] : "null";
               f(1, 11, "_onError threw exception while logging error, error will not be collected: " + Q(l), {
                  exception: Z(l),
                  errorString: s
               })
            }
         }, S[ud] = function(e) {
            if (S[zf]) return S[zf][ud](e);
            (A = A || []).push(e)
         }, S.initialize = function(e, n, t, r) {
            if (!S.isInitialized()) {
               X(n) && rt("Error initializing"), k.initialize(e, n, t, r), e.storagePrefix && Cu(e.storagePrefix);
               try {
                  B = Zi(ai(S.identifier), n.evtNamespace && n.evtNamespace()), A && ($(A, function(e) {
                     n[ud](e)
                  }), A = null), b = Uo(null, x = e, S[zf]), I = S.identifier, w = Hd(x), T = S.config = b.getExtCfg(I), w !== undefined && G(w, function(e, n) {
                     T[e] = b.getConfig(I, e, n), T[e] === undefined && (T = n)
                  });
                  var i, o, a, u, c, s, l, f, d, p, v, g, m, h = T;
                  K((y = h)[Uf]) || (y[Uf] ? Tu() : (hu = Su(!0), yu = Du(!0))), N = new Pd(S[zf]), P = new wd(S, h[Af], S[zf], N), M = new Md(S[Bf](), function(e, n, t) {
                     S.trackMetric({
                        name: "PageVisitTime",
                        average: t,
                        max: t,
                        min: t,
                        sampleCount: 1
                     }, {
                        PageName: e,
                        PageUrl: n
                     })
                  }), R = h[qf] || e[qf], !L && R && (i = ["/browserLinkSignalR/", "/__browserLink/"], S[ud](function(e) {
                     if (R && e.baseType === Nc[jf]) {
                        var n = e.baseData;
                        if (n)
                           for (var t = 0; t < i[sd]; t++)
                              if (n.target && ~n.target.indexOf(i[t])) return !1
                     }
                     return !0
                  }), L = !0), (E = new Ld(S[Bf]())).action = function(e, n, t, r, i) {
                     i = i || {}, (r = r || {}).duration = t[Pf](), S.trackEvent({
                        name: e,
                        properties: r,
                        measurements: i
                     })
                  }, (D = new Ld(S[Bf]())).action = function(e, n, t, r, i) {
                     (r = X(r) ? {} : r).duration = t[Pf](), S[Gf]({
                        name: e,
                        uri: n,
                        properties: r,
                        measurements: i
                     }, r)
                  }, or() && (a = h, u = ar(), c = dr(!0), (F = a[Nf]) || H || a.autoExceptionInstrumented || (_(ka(u, "onerror", {
                     ns: B,
                     rsp: function(e, n, t, r, i, o) {
                        F || !0 === e.rslt || S[nd](bc[ad](n, t, r, i, o, e.evt))
                     }
                  }, !1)), H = !0), l = c, (O = !0 === (s = a)[Rf]) && !z && (_(ka(u, "onunhandledrejection", {
                     ns: B,
                     rsp: function(e, n) {
                        var t, r;
                        O && !0 !== e.rslt && S[nd](bc[ad]((t = n) && t.reason ? !J(r = t.reason) && W(r[Pf]) ? r[Pf]() : Z(r) : t || "", l ? l[Qf] : "", 0, 0, n, e.evt))
                     }
                  }, !1)), z = !0, s.autoUnhandledPromiseInstrumented = z), f = ar(), d = dr(!0), U = !0 === h[Ff], f && U && fr() && W((o = fr() ? history : Y("history")).pushState) && W(o.replaceState) && typeof Event !== ne && (p = f, v = o, g = d, m = h[Hf] || "", q || (_(ka(v, "pushState", {
                     ns: B,
                     rsp: function() {
                        U && (Ud(p, La(m + "pushState")), Ud(p, La(m + "locationchange")))
                     }
                  }, !0)), _(ka(v, "replaceState", {
                     ns: B,
                     rsp: function() {
                        U && (Ud(p, La(m + "replaceState")), Ud(p, La(m + "locationchange")))
                     }
                  }, !0)), eo(p, m + "popstate", function() {
                     U && Ud(p, La(m + "locationchange"))
                  }, B), eo(p, m + "locationchange", function() {
                     var e, n;
                     V && (j = V), V = g && g[Qf] || "", U && (n = null, (n = S[zf] && S[zf].getTraceCtx ? S[zf].getTraceCtx(!1) : n) || (e = S[zf].getPlugin(Jc)) && (e = e.plugin.context) && (n = tc(e.telemetryTrace)), (e = n) && (e.setTraceId(lo()), n = "_unknown_", g && g.pathname && (n = g.pathname + (g.hash || "")), e.setName(ee(S[Bf](), n))), setTimeout((function(e) {
                        S[Xf]({
                           refUri: e,
                           properties: {
                              duration: 0
                           }
                        })
                     }).bind(S, j), S.autoRoutePVDelay))
                  }, B), q = !0)))
               } catch (C) {
                  throw S.setInitialized(!1), C
               }
            }
            var y, x, b, I, w, T
         }, S._doTeardown = function(e, n) {
            P && P.teardown(e, n), no(window, null, null, B), t()
         }, Qn(S, "_pageViewManager", function() {
            return P
         }), Qn(S, "_pageViewPerformanceManager", function() {
            return N
         }), Qn(S, "_pageVisitTimeManager", function() {
            return M
         }), Qn(S, "_evtNamespace", function() {
            return "." + B
         })
      }), e
   }
   var Vd = "duration",
      Bd = "tags",
      Kd = "deviceType",
      Xd = "data",
      Wd = "name",
      Gd = "traceID",
      O = "length",
      Jd = "stringify",
      $d = "measurements",
      Qd = "dataType",
      Yd = "envelopeType",
      Zd = "toString",
      ep = "onLine",
      np = "isOnline",
      tp = "enqueue",
      rp = "count",
      ip = "eventsLimitInMem",
      op = "push",
      ap = "emitLineDelimitedJson",
      up = "clear",
      cp = "batchPayloads",
      sp = "markAsSent",
      lp = "clearSent",
      fp = "bufferOverride",
      dp = "BUFFER_KEY",
      pp = "SENT_BUFFER_KEY",
      vp = "MAX_BUFFER_SIZE",
      gp = "namePrefix",
      mp = "maxBatchSizeInBytes",
      hp = "triggerSend",
      yp = "diagLog",
      xp = "onunloadDisableBeacon",
      bp = "isBeaconApiDisabled",
      Ip = "_sender",
      z = "_senderConfig",
      wp = "enableSessionStorageBuffer",
      Tp = "_buffer",
      Cp = "samplingPercentage",
      Sp = "instrumentationKey",
      kp = "endpointUrl",
      _p = "customHeaders",
      Ep = "disableXhr",
      Dp = "onunloadDisableFetch",
      Pp = "disableTelemetry",
      Np = "baseType",
      Mp = "sampleRate",
      Ap = "convertUndefined",
      Rp = "_onError",
      Lp = "_onPartialSuccess",
      Up = "_onSuccess",
      qp = "itemsAccepted",
      Fp = "isRetryDisabled",
      Hp = "setRequestHeader",
      Op = "maxBatchInterval",
      zp = "eventsSendRequest",
      jp = "disableInstrumentationKeyValidation",
      Vp = "getSamplingScore",
      Bp = "baseType",
      d = "baseData",
      Kp = "properties",
      Xp = "true";

   function h(e, n, t) {
      v(e, n, t, tt)
   }

   function Wp(e, t, r) {
      X(e) || G(e, function(e, n) {
         zn(n) ? r[e] = n : J(n) ? t[e] = n : vr() && (t[e] = gr()[Jd](n))
      })
   }

   function Gp(t, r) {
      X(t) || G(t, function(e, n) {
         t[e] = n || r
      })
   }

   function Jp(e, n, t, r) {
      for (var r = new ic(e, r, n), n = (h(r, "sampleRate", t[Ea]), (t[d] || {}).startTime && (r.time = Bn(t[d].startTime)), r.iKey = t.iKey, t.iKey.replace(/-/g, "")), n = (r[Wd] = r[Wd].replace("{0}", n), e), e = t, i = r, o = i[Bd] = i[Bd] || {}, a = e.ext = e.ext || {}, u = e[Bd] = e[Bd] || [], c = a.user, c = (c && (h(o, f.userAuthUserId, c.authId), h(o, f.userId, c.id || c.localId)), a.app), c = (c && h(o, f.sessionId, c.sesId), a.device), c = (c && (h(o, f.deviceId, c.id || c.localId), h(o, f[Kd], c.deviceClass), h(o, f.deviceIp, c.ip), h(o, f.deviceModel, c.model), h(o, f[Kd], c[Kd])), e.ext.web), e = (c && (h(o, f.deviceLanguage, c.browserLang), h(o, f.deviceBrowserVersion, c.browserVer), h(o, f.deviceBrowser, c.browser), h(e = (e = (e = i[Xd] = i[Xd] || {})[d] = e[d] || {})[Kp] = e[Kp] || {}, "domain", c.domain), h(e, "isManual", c.isManual ? Xp : null), h(e, "screenRes", c.screenRes), h(e, "userConsent", c.userConsent ? Xp : null)), a.os), c = (e && h(o, f.deviceOS, e[Wd]), a.trace), s = (c && (h(o, f.operationParentId, c.parentID), h(o, f.operationName, ee(n, c[Wd])), h(o, f.operationId, c[Gd])), {}), l = u[O] - 1; 0 <= l; l--) G(u[l], function(e, n) {
         s[e] = n
      }), u.splice(l, 1);
      G(u, function(e, n) {
         s[e] = n
      });
      e = ie(ie({}, o), s);
      return e[f.internalSdkVersion] || (e[f.internalSdkVersion] = ee(n, "javascript:".concat(Qp.Version), 64)), i[Bd] = ct(e), t[Bd] = t[Bd] || [], ct(r)
   }

   function $p(e, n) {
      X(n[d]) && H(e, 1, 46, "telemetryItem.baseData cannot be null.")
   }
   var Qp = {
      Version: "2.8.18"
   };

   function Yp(e, n, t) {
      $p(e, n);
      var r = {},
         i = {},
         t = (n[Bp] !== oc[Qd] && (r.baseTypeSource = n[Bp]), n[Bp] === oc[Qd] ? (r = n[d][Kp] || {}, i = n[d][$d] || {}) : n[d] && Wp(n[d], r, i), Wp(n[Xd], r, i), X(t) || Gp(r, t), n[d][Wd]),
         t = new oc(e, t, r, i),
         r = new qc(oc[Qd], t);
      return Jp(e, oc[Yd], n, r)
   }

   function Zp(e, n) {
      no(e, null, null, n)
   }
   ev.__ieDyn = 1;
   r = ev;

   function ev(t, r) {
      var i = [],
         o = !1;
      this._get = function() {
         return i
      }, this._set = function(e) {
         return i = e
      }, m(ev, this, function(n) {
         n[tp] = function(e) {
            n[rp]() >= r[ip]() ? o || (H(t, 2, 105, "Maximum in-memory buffer size reached: " + n[rp](), !0), o = !0) : i[op](e)
         }, n[rp] = function() {
            return i[O]
         }, n.size = function() {
            for (var e = i[O], n = 0; n < i[O]; n++) e += i[n][O];
            return r[ap]() || (e += 2), e
         }, n[up] = function() {
            o = !(i = [])
         }, n.getItems = function() {
            return i.slice(0)
         }, n[cp] = function(e) {
            return e && 0 < e[O] ? r[ap]() ? e.join("\n") : "[" + e.join(",") + "]" : null
         }
      })
   }
   _(rv, nv = r), rv.__ieDyn = 1;
   var nv, tv = rv;

   function rv(e, n) {
      e = nv.call(this, e, n) || this;
      return m(rv, e, function(e, n) {
         e[sp] = function(e) {
            n[up]()
         }, e[lp] = function(e) {}
      }), e
   }
   _(y, iv = r), y.BUFFER_KEY = "AI_buffer", y.SENT_BUFFER_KEY = "AI_sentBuffer", y.MAX_BUFFER_SIZE = 2e3;
   var iv, ov = y;

   function y(u, c) {
      var e = iv.call(this, u, c) || this,
         s = !1,
         n = c[fp]() || {
            getItem: Pu,
            setItem: Nu
         },
         l = n.getItem,
         f = n.setItem;
      return m(y, e, function(t, n) {
         var e = o(y[dp]),
            r = o(y[pp]),
            r = t._set(e.concat(r));

         function i(n, e) {
            var t = [];
            return $(e, function(e) {
               W(e) || -1 !== Kn(n, e) || t[op](e)
            }), t
         }

         function o(e) {
            try {
               var e = c[gp] && c[gp]() ? c[gp]() + "_" + e : e,
                  n = l(u, e);
               if (n) {
                  var t = gr().parse(n);
                  if ((t = J(t) ? gr().parse(t) : t) && q(t)) return t
               }
            } catch (r) {
               H(u, 1, 42, " storage key: " + e + ", " + Q(r), {
                  exception: Z(r)
               })
            }
            return []
         }

         function a(e, n) {
            try {
               var e = c[gp] && c[gp]() ? c[gp]() + "_" + e : e,
                  t = JSON[Jd](n);
               f(u, e, t)
            } catch (r) {
               f(u, e, JSON[Jd]([])), H(u, 2, 41, " storage key: " + e + ", " + Q(r) + ". Buffer cleared", {
                  exception: Z(r)
               })
            }
         }
         r[O] > y[vp] && (r[O] = y[vp]), a(y[pp], []), a(y[dp], r), t[tp] = function(e) {
            t[rp]() >= y[vp] ? s || (H(u, 2, 67, "Maximum buffer size reached: " + t[rp](), !0), s = !0) : (n[tp](e), a(y[dp], t._get()))
         }, t[up] = function() {
            n[up](), a(y[dp], t._get()), a(y[pp], []), s = !1
         }, t[sp] = function(e) {
            a(y[dp], t._set(i(e, t._get())));
            var n = o(y[pp]);
            n instanceof Array && e instanceof Array && ((n = n.concat(e))[O] > y[vp] && (H(u, 1, 67, "Sent buffer reached its maximum size: " + n[O], !0), n[O] = y[vp]), a(y[pp], n))
         }, t[lp] = function(e) {
            e = i(e, o(y[pp]));
            a(y[pp], e)
         }
      }), e
   }
   uv.__ieDyn = 1;
   var av = uv;

   function uv(f) {
      m(uv, this, function(e) {
         function s(a, u) {
            var e = "__aiCircularRefCheck",
               c = {};
            if (!a) return H(f, 1, 48, "cannot serialize object because it is null or undefined", {
               name: u
            }, !0), c;
            if (a[e]) return H(f, 2, 50, "Circular reference detected while serializing object", {
               name: u
            }, !0), c;
            if (a.aiDataContract) return a[e] = !0, G(a.aiDataContract, function(e, n) {
               var t = W(n) ? 1 & n() : 1 & n,
                  r = W(n) ? 4 & n() : 4 & n,
                  n = 2 & n,
                  i = a[e] !== undefined,
                  o = Ln(a[e]) && null !== a[e];
               !t || i || n ? r || (t = o ? (n ? l : s)(a[e], e) : a[e]) !== undefined && (c[e] = t) : H(f, 1, 24, "Missing required field specification. The field is required but not present on source", {
                  field: e,
                  name: u
               })
            }), delete a[e], c;
            if ("measurements" === u) c = t(a, "number", u);
            else if ("properties" === u) c = t(a, "string", u);
            else if ("tags" === u) c = t(a, "string", u);
            else if (q(a)) c = l(a, u);
            else {
               H(f, 2, 49, "Attempting to serialize an object which does not implement ISerializable", {
                  name: u
               }, !0);
               try {
                  gr()[Jd](a), c = a
               } catch (n) {
                  H(f, 1, 48, n && W(n[Zd]) ? n[Zd]() : "Error serializing object", null, !0)
               }
            }
            return c
         }

         function l(e, n) {
            if (e)
               if (q(e))
                  for (var t = [], r = 0; r < e[O]; r++) {
                     var i = s(e[r], n + "[" + r + "]");
                     t[op](i)
                  } else H(f, 1, 54, "This field was specified as an array in the contract but the item is not an array.\r\n", {
                     name: n
                  }, !0);
            return t
         }

         function t(e, t, r) {
            var i;
            return e && (i = {}, G(e, function(e, n) {
               "string" === t ? n === undefined ? i[e] = "undefined" : null === n ? i[e] = "null" : n[Zd] ? i[e] = n[Zd]() : i[e] = "invalid field: toString() is not defined." : "number" === t ? n === undefined ? i[e] = "undefined" : i[e] = null === n ? "null" : isNaN(n = parseFloat(n)) ? "NaN" : n : (i[e] = "invalid field: " + r + " is of unknown type.", H(f, 1, i[e], null, !0))
            })), i
         }
         e.serialize = function(e) {
            e = s(e, "root");
            try {
               return gr()[Jd](e)
            } catch (n) {
               H(f, 1, 48, n && W(n[Zd]) ? n[Zd]() : "Error serializing object", null, !0)
            }
         }
      })
   }
   sv.prototype.getHashCodeScore = function(e) {
      return this.getHashCode(e) / sv.INT_MAX_VALUE * 100
   }, sv.prototype.getHashCode = function(e) {
      if ("" === e) return 0;
      for (; e[O] < 8;) e = e.concat(e);
      for (var n = 5381, t = 0; t < e[O]; ++t) n = (n << 5) + n + e.charCodeAt(t), n &= n;
      return Math.abs(n)
   }, sv.INT_MAX_VALUE = 2147483647;
   var cv = sv;

   function sv() {}
   var lv = function() {
         var n = new cv,
            t = new Bc;
         this[Vp] = function(e) {
            return e[Bd] && e[Bd][t.userId] ? n.getHashCodeScore(e[Bd][t.userId]) : e.ext && e.ext.user && e.ext.user.id ? n.getHashCodeScore(e.ext.user.id) : e[Bd] && e[Bd][t.operationId] ? n.getHashCodeScore(e[Bd][t.operationId]) : e.ext && e.ext.telemetryTrace && e.ext.telemetryTrace[Gd] ? n.getHashCodeScore(e.ext.telemetryTrace[Gd]) : 100 * Math.random()
         }
      },
      fv = (dv.prototype.isSampledIn = function(e) {
         var n = this[Mp];
         return null === n || n === undefined || 100 <= n || e.baseType === _c[Qd] || this.samplingScoreGenerator[Vp](e) < n
      }, dv);

   function dv(e, n) {
      this.INT_MAX_VALUE = 2147483647;
      n = n || Mr(null);
      (100 < e || e < 0) && (n.throwInternal(2, 58, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", {
         samplingRate: e
      }, !0), e = 100), this[Mp] = e, this.samplingScoreGenerator = new lv
   }

   function pv(e) {
      try {
         return e.responseText
      } catch (n) {}
      return null
   }

   function vv() {
      var e = {
         endpointUrl: function() {
            return Na + Ma
         }
      };
      return e[ap] = function() {
         return !1
      }, e[Op] = function() {
         return 15e3
      }, e[mp] = function() {
         return 102400
      }, e[Pp] = function() {
         return !1
      }, e[wp] = function() {
         return !0
      }, e[fp] = function() {
         return !1
      }, e[Fp] = function() {
         return !1
      }, e[bp] = function() {
         return !0
      }, e[Ep] = function() {
         return !1
      }, e[Dp] = function() {
         return !1
      }, e[xp] = function() {
         return !1
      }, e[Sp] = function() {}, e[gp] = function() {}, e[Cp] = function() {
         return 100
      }, e[_p] = function() {}, e[Ap] = function() {}, e[ip] = function() {
         return 1e4
      }, e.retryCodes = function() {
         return null
      }, e
   }(jc = {})[oc.dataType] = Yp, jc[Ac.dataType] = function(e, n, t) {
      $p(e, n);
      var r = n[d].message,
         i = n[d].severityLevel,
         o = n[d][Kp] || {},
         a = n[d][$d] || {},
         t = (Wp(n[Xd], o, a), X(t) || Gp(o, t), new Ac(e, r, i, o, a)),
         r = new qc(Ac[Qd], t);
      return Jp(e, Ac[Yd], n, r)
   }, jc[Dc.dataType] = function(e, n, t) {
      $p(e, n);
      var r, i = n[d],
         i = (X(i) || X(i[Kp]) || X(i[Kp][Vd]) ? X(n[Xd]) || X(n[Xd][Vd]) || (r = n[Xd][Vd], delete n[Xd][Vd]) : (r = i[Kp][Vd], delete i[Kp][Vd]), n[d]),
         o = (((n.ext || {}).trace || {})[Gd] && (o = n.ext.trace[Gd]), i.id || o),
         a = i[Wd],
         u = i.uri,
         c = i[Kp] || {},
         s = i[$d] || {},
         i = (X(i.refUri) || (c.refUri = i.refUri), X(i.pageType) || (c.pageType = i.pageType), X(i.isLoggedIn) || (c.isLoggedIn = i.isLoggedIn[Zd]()), X(i[Kp]) || G(i[Kp], function(e, n) {
            c[e] = n
         }), Wp(n[Xd], c, s), X(t) || Gp(c, t), new Dc(e, a, u, r, c, s, o)),
         t = new qc(Dc[Qd], i);
      return Jp(e, Dc[Yd], n, t)
   }, jc[Lc.dataType] = function(e, n, t) {
      $p(e, n);
      var r = n[d],
         i = r[Wd],
         o = r.uri || r.url,
         a = r[Kp] || {},
         u = r[$d] || {},
         t = (Wp(n[Xd], a, u), X(t) || Gp(a, t), new Lc(e, i, o, undefined, a, u, r)),
         i = new qc(Lc[Qd], t);
      return Jp(e, Lc[Yd], n, i)
   }, jc[bc.dataType] = function(e, n, t) {
      $p(e, n);
      var r = n[d][$d] || {},
         i = n[d][Kp] || {},
         t = (Wp(n[Xd], i, r), X(t) || Gp(i, t), n[d]),
         t = bc.CreateFromInterface(e, t, i, r),
         i = new qc(bc[Qd], t);
      return Jp(e, bc[Yd], n, i)
   }, jc[_c.dataType] = function(e, n, t) {
      $p(e, n);
      var r = n[d],
         i = r[Kp] || {},
         o = r[$d] || {},
         t = (Wp(n[Xd], i, o), X(t) || Gp(i, t), new _c(e, r[Wd], r.average, r.sampleCount, r.min, r.max, r.stdDev, i, o)),
         r = new qc(_c[Qd], t);
      return Jp(e, _c[Yd], n, r)
   }, jc[Nc.dataType] = function(e, n, t) {
      $p(e, n);
      var r = n[d][$d] || {},
         i = n[d][Kp] || {},
         t = (Wp(n[Xd], i, r), X(t) || Gp(i, t), n[d]);
      if (X(t)) return Ur(e, "Invalid input for dependency data"), null;
      var o = t[Kp] && t[Kp][Pa] ? t[Kp][Pa] : "GET",
         o = new Nc(e, t.id, t.target, t[Wd], t[Vd], t.success, t.responseCode, o, t.type, t.correlationContext, i, r),
         t = new qc(Nc[Qd], o);
      return Jp(e, Nc[Yd], n, t)
   };
   var gv, mv = jc,
      hv = (_(yv, gv = In), yv.constructEnvelope = function(e, n, t, r) {
         e = n === e.iKey || X(n) ? e : ie(ie({}, e), {
            iKey: n
         });
         return (mv[e.baseType] || Yp)(t, e, r)
      }, yv);

   function yv() {
      var T, C, S, r, k, _, E, D, P, N, M, A, R = gv.call(this) || this,
         L = (R.priority = 1001, R.identifier = $c, R._senderConfig = vv(), 0);
      return m(yv, R, function(l, a) {
         function s(e, n, t, r, i, o) {
            var a = null;
            l._appId || (a = v(o)) && a.appId && (l._appId = a.appId), (e < 200 || 300 <= e) && 0 !== e ? (301 !== e && 307 !== e && 308 !== e || u(t)) && !l[z][Fp]() && y(e) ? (g(n), H(l[yp](), 2, 40, ". Response code " + e + ". Will retry to send " + n[O] + " items.")) : l[Rp](n, i) : N && !N[np]() ? l[z][Fp]() || (g(n, 10), H(l[yp](), 2, 40, ". Offline - Response Code: ".concat(e, ". Offline status: ").concat(!N.isOnline(), ". Will retry to send ").concat(n.length, " items."))) : (u(t), 206 === e ? (a = a || v(o)) && !l[z][Fp]() ? l[Lp](n, a) : l[Rp](n, i) : (T = 0, l[Up](n, r)))
         }

         function u(e) {
            return !(10 <= _) && !X(e) && "" !== e && e !== l[z][kp]() && (l[z][kp] = function() {
               return e
            }, ++_, 1)
         }

         function n(e, n) {
            P ? P(e, !1) : c(e)
         }

         function o(e) {
            var n = lr(),
               t = l[Tp],
               r = l[z][kp](),
               i = l._buffer[cp](e),
               i = new Blob([i], {
                  type: "text/plain;charset=UTF-8"
               }),
               r = n.sendBeacon(r, i);
            return r && (t[sp](e), l._onSuccess(e, e[O])), r
         }

         function c(e, n) {
            if (q(e) && 0 < e[O] && !o(e)) {
               for (var t = [], r = 0; r < e[O]; r++) {
                  var i = e[r];
                  o([i]) || t[op](i)
               }
               0 < t[O] && (D && D(t, !0), H(l[yp](), 2, 40, ". Failed to send telemetry with Beacon API, retried with normal sender."))
            }
         }

         function f(n, e) {
            var t = new XMLHttpRequest,
               r = l[z][kp]();
            try {
               t[_a] = !0
            } catch (i) {}
            t.open("POST", r, e), t[Hp]("Content-type", "application/json"), Yu(r) && t[Hp](B[6], B[7]), $($n(E), function(e) {
               t[Hp](e, E[e])
            }), t.onreadystatechange = function() {
               return l._xhrReadyStateChange(t, n, n[O])
            }, t.onerror = function(e) {
               return l[Rp](n, x(t), e)
            };
            e = l._buffer[cp](n);
            t.send(e), l._buffer[sp](n)
         }

         function d(e, n) {
            if (q(e)) {
               for (var t = e[O], r = 0; r < e[O]; r++) t += e[r][O];
               L + t <= 65e3 ? i(e, !1) : yr() ? c(e) : (D && D(e, !0), H(l[yp](), 2, 40, ". Failed to send telemetry with Beacon API, retried with xhrSender."))
            }
         }

         function p(e, n) {
            i(e, !0)
         }

         function i(t, r) {
            var e = l[z][kp](),
               n = l._buffer[cp](t),
               i = new Blob([n], {
                  type: "application/json"
               }),
               o = new Headers,
               a = n[O],
               n = !1,
               u = !1,
               e = (Yu(e) && o.append(B[6], B[7]), $($n(E), function(e) {
                  o.append(e, E[e])
               }), (i = {
                  method: "POST",
                  headers: o,
                  body: i
               })[_a] = !0, r || (n = i.keepalive = !0, L += a), new Request(e, i));
            try {
               e[_a] = !0
            } catch (c) {}
            l._buffer[sp](t);
            try {
               fetch(e).then(function(n) {
                  r || (L -= a, a = 0), u || (u = !0, n.ok ? n.text().then(function(e) {
                     s(n.status, t, n.url, t[O], n.statusText, e)
                  }) : l[Rp](t, n.statusText))
               })["catch"](function(e) {
                  r || (L -= a, a = 0), u || (u = !0, l[Rp](t, e.message))
               })
            } catch (c) {
               u || l[Rp](t, Z(c))
            }
            n && !u && (u = !0, l._onSuccess(t, t[O]))
         }

         function v(e) {
            try {
               if (e && "" !== e) {
                  var n = gr().parse(e);
                  if (n && n.itemsReceived && n.itemsReceived >= n[qp] && n.itemsReceived - n.itemsAccepted === n.errors[O]) return n
               }
            } catch (t) {
               H(l[yp](), 1, 43, "Cannot parse the response. " + Q(t), {
                  response: e
               })
            }
            return null
         }

         function g(e, n) {
            if (void 0 === n && (n = 1), e && 0 !== e[O]) {
               var t = l[Tp];
               t[lp](e), T++;
               for (var r = 0, i = e; r < i.length; r++) {
                  var o = i[r];
                  t[tp](o)
               }
               n = T <= 1 ? 10 : (e = 1 + Math.floor((Math.pow(2, T) - 1) / 2 * Math.random() * 10), Math.max(Math.min(e *= n, 3600), 10)), e = et() + 1e3 * n;
               C = e, m()
            }
         }

         function m() {
            var e;
            r || S || (e = C ? Math.max(0, C - et()) : 0, e = Math.max(l[z][Op](), e), r = setTimeout(function() {
               r = null, l[hp](!0, null, 1)
            }, e))
         }

         function h() {
            clearTimeout(r), C = r = null
         }

         function y(e) {
            return X(A) ? 401 === e || 408 === e || 429 === e || 500 === e || 502 === e || 503 === e || 504 === e : A[O] && -1 < Kn(A, e)
         }

         function x(e, n) {
            return e ? "XMLHttpRequest,Status:" + e.status + ",Response:" + pv(e) || e.response || "" : n
         }

         function b(n, e) {
            var t = l[Tp],
               r = ar(),
               i = new XDomainRequest,
               r = (i.onload = function() {
                  return l._xdrOnLoad(i, n)
               }, i.onerror = function(e) {
                  return l[Rp](n, I(i), e)
               }, r && r.location && r.location.protocol || "");
            if (l[z][kp]().lastIndexOf(r, 0)) return H(l[yp](), 2, 40, ". Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol."), void t[up]();
            r = l[z][kp]().replace(/^(https?:)/, ""), i.open("POST", r), r = t[cp](n);
            i.send(r), t[sp](n)
         }

         function I(e, n) {
            return e ? "XDomainRequest,Response:" + pv(e) || "" : n
         }

         function w(e, n) {
            var t = "getNotifyMgr",
               t = l.core[t] ? l.core[t]() : l.core._notificationManager;
            if (t && t[zp]) try {
               t[zp](e, n)
            } catch (r) {
               H(l[yp](), 1, 74, "send request notification failed: " + Q(r), {
                  exception: Z(r)
               })
            }
         }

         function t() {
            l[Ip] = null, l[Tp] = null, l._appId = null, l._sample = null, S = !(E = {}), L = _ = T = 0, M = P = D = k = r = C = N = null
         }
         t(), l.pause = function() {
            h(), S = !0
         }, l.resume = function() {
            S && (S = !1, C = null, l._buffer.size() > l._senderConfig[mp]() && l[hp](!0, null, 10), m())
         }, l.flush = function(e, n, t) {
            if (void 0 === e && (e = !0), !S) {
               h();
               try {
                  l[hp](e, null, t || 1)
               } catch (r) {
                  H(l[yp](), 1, 22, "flush failed, telemetry will not be collected: " + Q(r), {
                     exception: Z(r)
                  })
               }
            }
         }, l.onunloadFlush = function() {
            if (!S)
               if (!1 !== l._senderConfig[xp]() && !1 !== l[z][bp]() || !yr()) l.flush();
               else try {
                  l[hp](!0, n, 2)
               } catch (e) {
                  H(l[yp](), 1, 20, "failed to flush with beacon sender on page unload, telemetry will not be collected: " + Q(e), {
                     exception: Z(e)
                  })
               }
         }, l.addHeader = function(e, n) {
            E[e] = n
         }, l.initialize = function(e, n, t, r) {
            l.isInitialized() && H(l[yp](), 1, 28, "Sender is already initialized"), a.initialize(e, n, t, r);
            var i = l._getTelCtx(),
               o = l.identifier,
               t = (k = new av(n.logger), T = 0, C = null, l[Ip] = null, _ = 0, l[yp]()),
               r = (M = Zi(ai("Sender"), n.evtNamespace && n.evtNamespace()), N = function(e) {
                  var n, t = cr(),
                     r = lr(),
                     i = !1,
                     o = !0,
                     a = Zi(ai("OfflineListener"), e);
                  try {
                     u(ar()) && (i = !0), (i = !!(t && (n = t.body || t).ononline && u(n)) || i) && r && !X(r[ep]) && (o = r[ep])
                  } catch (l) {
                     i = !1
                  }

                  function u(e) {
                     var n = !1;
                     return e && (n = eo(e, "online", c, a)) && eo(e, "offline", s, a), n
                  }

                  function c() {
                     o = !0
                  }

                  function s() {
                     o = !1
                  }
                  return {
                     isOnline: function() {
                        var e = !0;
                        return i ? e = o : r && !X(r[ep]) && (e = r[ep]), e
                     },
                     isListening: function() {
                        return i
                     },
                     unload: function() {
                        var e = ar();
                        e && i && (Zp(e, a), t && !K((e = t.body || t).ononline) && Zp(e, a), i = !1)
                     }
                  }
               }(M), G(vv(), function(n, t) {
                  l[z][n] = function() {
                     var e = i.getConfig(o, n, t());
                     return e || "endpointUrl" !== n ? e : t()
                  }
               }), A = l[z].retryCodes(), e.storagePrefix && Cu(e.storagePrefix), l[z][wp]() && !(!l._senderConfig[fp]() && !Du())),
               n = (l[Tp] = new(r ? ov : tv)(t, l[z]), l._sample = new fv(l[z][Cp](), t), !X(e[jp]) && e[jp] || /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(e[Sp]) || H(t, 1, 100, "Invalid Instrumentation key " + e[Sp]), !Yu(l._senderConfig.endpointUrl()) && l._senderConfig.customHeaders() && 0 < l._senderConfig.customHeaders()[O] && $(l[z][_p](), function(e) {
                  R.addHeader(e.header, e.value)
               }), l[z]),
               r = null;
            !n[Ep]() && br() ? r = b : !n[Ep]() && Ir() && (r = f), !r && xr() && (r = p), D = r || f, !n[bp]() && yr() && (r = c), l[Ip] = r || f, P = !n[Dp]() && xr(!0) ? d : yr() ? c : !n[Ep]() && br() ? b : !n[Ep]() && Ir() ? f : D
         }, l.processTelemetry = function(e, n) {
            var t = (n = l._getTelCtx(n))[yp]();
            try {
               if (l[z][Pp]()) return;
               if (!e) return void H(t, 1, 7, "Cannot send empty telemetry");
               if (e.baseData && !e[Np]) return void H(t, 1, 70, "Cannot send telemetry without baseData and baseType");
               if (e[Np] || (e[Np] = "EventData"), !l[Ip]) return void H(t, 1, 28, "Sender was not initialized");
               if (!l._sample.isSampledIn(e)) return void H(t, 2, 33, "Telemetry item was sampled out and not sent", {
                  SampleRate: l._sample[Mp]
               });
               e[Ea] = l._sample[Mp];
               var r = l[z][Ap]() || undefined,
                  i = e.iKey || l[z][Sp](),
                  o = yv.constructEnvelope(e, i, t, r);
               if (!o) return void H(t, 1, 47, "Unable to create an AppInsights envelope");
               var a = !1;
               if (e[Bd] && e[Bd][Da] && ($(e[Bd][Da], function(e) {
                     try {
                        e && !1 === e(o) && (a = !0, Ur(t, "Telemetry processor check returns false"))
                     } catch (n) {
                        H(t, 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + Q(n), {
                           exception: Z(n)
                        }, !0)
                     }
                  }), delete e[Bd][Da]), a) return;
               var u = k.serialize(o),
                  c = l[Tp];
               c.size() + u[O] > l[z][mp]() && (N && !N[np]() || l[hp](!0, null, 10)), c[tp](u), m()
            } catch (s) {
               H(t, 2, 12, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + Q(s), {
                  exception: Z(s)
               })
            }
            l.processNext(e, n)
         }, l._xhrReadyStateChange = function(e, n, t) {
            4 === e.readyState && s(e.status, n, e.responseURL, t, x(e), pv(e) || e.response)
         }, l[hp] = function(e, n, t) {
            if (void 0 === e && (e = !0), !S) try {
               var r, i = l[Tp];
               l[z][Pp]() ? i[up]() : 0 < i[rp]() && (r = i.getItems(), w(t || 0, e), n ? n.call(l, r, e) : l[Ip](r, e)), h()
            } catch (o) {
               i = hr();
               (!i || 9 < i) && H(l[yp](), 1, 40, "Telemetry transmission failed, some telemetry will be lost: " + Q(o), {
                  exception: Z(o)
               })
            }
         }, l._doTeardown = function(e, n) {
            l.onunloadFlush(), N.unload(), t()
         }, l[Rp] = function(e, n, t) {
            H(l[yp](), 2, 26, "Failed to send telemetry.", {
               message: n
            }), l._buffer && l._buffer[lp](e)
         }, l[Lp] = function(e, n) {
            for (var t = [], r = [], i = 0, o = n.errors.reverse(); i < o.length; i++) {
               var a = o[i],
                  u = e.splice(a.index, 1)[0];
               (y(a.statusCode) ? r : t)[op](u)
            }
            0 < e[O] && l[Up](e, n[qp]), 0 < t[O] && l[Rp](t, x(null, ["partial success", n[qp], "of", n.itemsReceived].join(" "))), 0 < r[O] && (g(r), H(l[yp](), 2, 40, "Partial success. Delivered: " + e[O] + ", Failed: " + t[O] + ". Will retry to send " + r[O] + " our of " + n.itemsReceived + " items"))
         }, l[Up] = function(e, n) {
            l._buffer && l._buffer[lp](e)
         }, l._xdrOnLoad = function(e, n) {
            var t = pv(e);
            !e || t + "" != "200" && "" !== t ? (t = v(t)) && t.itemsReceived && t.itemsReceived > t[qp] && !l[z][Fp]() ? l[Lp](n, t) : l[Rp](n, I(e)) : (T = 0, l[Up](n, 0))
         }
      }), R
   }
   var xv = function() {},
      bv = function() {
         this.id = "browser", this.deviceClass = "Browser"
      },
      Iv = "sessionManager",
      wv = "update",
      Tv = "isUserCookieSet",
      Cv = "isNewUser",
      Sv = "getTraceCtx",
      kv = "telemetryTrace",
      _v = "applySessionContext",
      Ev = "applyApplicationContext",
      Dv = "applyDeviceContext",
      Pv = "applyOperationContext",
      Nv = "applyUserContext",
      Mv = "applyOperatingSystemContxt",
      Av = "applyLocationContext",
      Rv = "applyInternalContext",
      Lv = "accountId",
      Uv = "sdkExtension",
      qv = "getSessionId",
      Fv = "namePrefix",
      Hv = "sessionCookiePostfix",
      Ov = "userCookiePostfix",
      zv = "idLength",
      jv = "getNewId",
      Vv = "length",
      Bv = "automaticSession",
      Kv = "authenticatedId",
      Xv = "sessionExpirationMs",
      Wv = "sessionRenewalMs",
      Gv = "config",
      Jv = "acquisitionDate",
      $v = "renewalDate",
      Qv = "cookieDomain",
      Yv = "join",
      Zv = "cookieSeparator",
      eg = "authUserCookieName",
      ng = function(e) {
         this.sdkVersion = (e[Uv] && e[Uv]() ? e[Uv]() + "_" : "") + "javascript:2.8.18"
      },
      tg = function() {},
      rg = function() {},
      ig = (og.acquisitionSpan = 864e5, og.renewalSpan = 18e5, og.cookieUpdateInterval = 6e4, og);

   function og(n, e) {
      var l, f, d = Mr(e),
         p = Si(e);
      m(og, this, function(u) {
         W((n = n || {})[Xv]) || (n[Xv] = function() {
            return og.acquisitionSpan
         }), W(n[Wv]) || (n[Wv] = function() {
            return og.renewalSpan
         }), u[Gv] = n;
         var e = u.config[Hv] && u[Gv][Hv]() ? u.config[Hv]() : u.config[Fv] && u[Gv][Fv]() ? u[Gv][Fv]() : "";

         function c(e, n) {
            var t = !1,
               r = ", session will be reset",
               i = n.split("|");
            if (2 <= i[Vv]) try {
               var o = +i[1] || 0,
                  a = +i[2] || 0;
               isNaN(o) || o <= 0 ? H(d, 2, 27, "AI session acquisition date is 0" + r) : isNaN(a) || a <= 0 ? H(d, 2, 27, "AI session renewal date is 0" + r) : i[0] && (e.id = i[0], e[Jv] = o, e[$v] = a, t = !0)
            } catch (u) {
               H(d, 1, 9, "Error parsing ai_session value [" + (n || "") + "]" + r + " - " + Q(u), {
                  exception: Z(u)
               })
            }
            return t
         }

         function s(e, n) {
            var t = e[Jv],
               r = (e[$v] = n, u[Gv]),
               i = r[Wv](),
               o = t + r[Xv]() - n,
               e = [e.id, t, n],
               t = o < i ? o / 1e3 : i / 1e3,
               o = r[Qv] ? r[Qv]() : null;
            p.set(l(), e.join("|"), 0 < r[Xv]() ? t : null, o), f = n
         }
         l = function() {
            return "ai_session" + e
         }, u[Bv] = new rg, u[wv] = function() {
            var e, n, t, r = et(),
               i = !1,
               o = u[Bv],
               a = (o.id || (n = o, t = !1, (a = p.get(l())) && W(a.split) ? t = c(n, a) : (a = ku(d, l())) && (t = c(n, a)), i = !(t || n.id)), u.config[Xv]());
            !i && 0 < a && (t = u.config[Wv](), n = r - o[Jv], e = r - o[$v], i = (i = (i = n < 0 || e < 0) || a < n) || t < e), i ? (a = r, t = ((n = u[Gv] || {})[jv] ? n[jv]() : null) || ni, u.automaticSession.id = t(n[zv] ? n[zv]() : 22), u[Bv][Jv] = a, s(u[Bv], a), Su() || H(d, 2, 0, "Browser does not support local storage. Session durations will be inaccurate.")) : (!f || og.cookieUpdateInterval < r - f) && s(o, r)
         }, u.backup = function() {
            var e = u[Bv],
               n = e.id,
               t = e[Jv],
               e = e[$v];
            _u(d, l(), [n, t, e][Yv]("|"))
         }
      })
   }
   var ag = function(e, n, t, r) {
      this.traceID = e || lo(), this.parentID = n;
      e = dr();
      !t && e && e.pathname && (t = e.pathname), this.name = ee(r, t)
   };

   function ug(e) {
      return "string" == typeof e && e && !e.match(/,|;|=| |\|/)
   }
   sg.cookieSeparator = "|", sg.userCookieName = "ai_user", sg.authUserCookieName = "ai_authUser";
   var cg = sg;

   function sg(a, e) {
      this.isNewUser = !1, this.isUserCookieSet = !1;
      var u, c = Mr(e),
         s = Si(e);
      m(sg, this, function(r) {
         r[Gv] = a;
         var e = r.config[Ov] && r[Gv][Ov]() ? r[Gv][Ov]() : "",
            n = (u = function() {
               return sg.userCookieName + e
            }, s.get(u()));

         function t() {
            var e = a || {};
            return ((e[jv] ? e[jv]() : null) || ni)(e[zv] ? a[zv]() : 22)
         }

         function i(e) {
            var n = Bn(new Date);
            return r.accountAcquisitionDate = n, r[Cv] = !0, [e, n]
         }

         function o(e) {
            r[Tv] = s.set(u(), e, 31536e3)
         }
         n && (r[Cv] = !1, 0 < (n = n.split(sg[Zv]))[Vv] && (r.id = n[0], r[Tv] = !!r.id)), r.id || (r.id = t(), o(i(r.id)[Yv](sg[Zv])), n = a[Fv] && a[Fv]() ? a[Fv]() + "ai_session" : "ai_session", Eu(c, n)), r[Lv] = a[Lv] ? a[Lv]() : undefined;
         var n = s.get(sg[eg]);
         n && ((n = (n = decodeURI(n)).split(sg[Zv]))[0] && (r[Kv] = n[0]), 1 < n[Vv] && n[1] && (r[Lv] = n[1])), r.setAuthenticatedUserContext = function(e, n, t) {
            void 0 === t && (t = !1), !ug(e) || n && !ug(n) ? H(c, 2, 60, "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.", !0) : (r[Kv] = e, e = r[Kv], n && (r[Lv] = n, e = [r[Kv], r.accountId][Yv](sg[Zv])), t && s.set(sg[eg], encodeURI(e)))
         }, r.clearAuthenticatedUserContext = function() {
            r[Kv] = null, r[Lv] = null, s.del(sg[eg])
         }, r[wv] = function(e) {
            r.id === e && r[Tv] || o(i(e || t())[Yv](sg[Zv]))
         }
      })
   }
   var lg = "ext",
      fg = "tags";

   function dg(e, n) {
      e && e[n] && 0 === $n(e[n])[Vv] && delete e[n]
   }
   gg.__ieDyn = 1;
   var pg, vg = gg;

   function gg(r, o, a) {
      var u = this,
         c = r.logger;
      this.appId = function() {
         return null
      }, this[qv] = function() {
         return null
      }, m(gg, this, function(i) {
         var e, n, t;
         i.application = new xv, i.internal = new ng(o), or() && (i[Iv] = new ig(o, r), i.device = new bv, i.location = new tg, i.user = new cg(o, r), n = e = void 0, a && (e = a.getTraceId(), n = a.getSpanId(), t = a.getName()), i[kv] = new ag(e, n, t, c), i.session = new rg), i[qv] = function() {
            var e = i.session;
            return e && J(e.id) ? e.id : (e = (i[Iv] || {})[Bv]) && J(e.id) ? e.id : null
         }, i[_v] = function(e, n) {
            v(F(e.ext, Gc.AppExt), "sesId", i[qv](), J)
         }, i[Mv] = function(e, n) {
            v(e.ext, Gc.OSExt, i.os)
         }, i[Ev] = function(e, n) {
            var t = i.application;
            t && (v(e = F(e, fg), f.applicationVersion, t.ver, J), v(e, f.applicationBuild, t.build, J))
         }, i[Dv] = function(e, n) {
            var t = i.device;
            t && (v(e = F(F(e, lg), Gc.DeviceExt), "localId", t.id, J), v(e, "ip", t.ip, J), v(e, "model", t.model, J), v(e, "deviceClass", t.deviceClass, J))
         }, i[Rv] = function(e, n) {
            var t, r = i.internal;
            r && (v(t = F(e, fg), f.internalAgentVersion, r.agentVersion, J), v(t, f.internalSdkVersion, ee(c, r.sdkVersion, 64), J), e.baseType !== Pr.dataType && e.baseType !== Dc.dataType || (v(t, f.internalSnippet, r.snippetVer, J), v(t, f.internalSdkSrc, r.sdkSrc, J)))
         }, i[Av] = function(e, n) {
            var t = u.location;
            t && v(F(e, fg, []), f.locationIp, t.ip, J)
         }, i[Pv] = function(e, n) {
            var t = i[kv];
            t && (v(e = F(F(e, lg), Gc.TraceExt, {
               traceID: undefined,
               parentID: undefined
            }), "traceID", t.traceID, J, X), v(e, "name", t.name, J, X), v(e, "parentID", t.parentID, J, X))
         }, i.applyWebContext = function(e, n) {
            var t = u.web;
            t && v(F(e, lg), Gc.WebExt, t)
         }, i[Nv] = function(e, n) {
            var t = i.user;
            t && (v(F(e, fg, []), f.userAccountId, t[Lv], J), v(e = F(F(e, lg), Gc.UserExt), "id", t.id, J), v(e, "authId", t[Kv], J))
         }, i.cleanUp = function(e, n) {
            e = e.ext;
            e && (dg(e, Gc.DeviceExt), dg(e, Gc.UserExt), dg(e, Gc.WebExt), dg(e, Gc.OSExt), dg(e, Gc.AppExt), dg(e, Gc.TraceExt))
         }
      })
   }

   function mg() {
      var s, l, f, e = pg.call(this) || this;
      return e.priority = 110, e.identifier = Jc, m(mg, e, function(u, c) {
         function t() {
            f = l = s = null
         }
         t(), u.initialize = function(e, n, t, r) {
            c.initialize(e, n, t, r);
            var n = e,
               i = u.identifier,
               o = u.core,
               a = Uo(null, n, o),
               t = mg.getDefaultConfig();
            s = s || {}, G(t, function(e, n) {
               s[e] = function() {
                  return a.getConfig(i, e, n())
               }
            }), n.storagePrefix && Cu(n.storagePrefix), f = o[Sv](!1), u.context = new vg(o, s, f), l = tc(u.context[kv], f), o.setTraceCtx(l), u.context.appId = function() {
               var e = o.getPlugin($c);
               return e ? e.plugin._appId : null
            }, u._extConfig = s
         }, u.processTelemetry = function(e, n) {
            var t, r, i, o;
            X(e) || (n = u._getTelCtx(n), e.name === Dc.envelopeType && n.diagLog().resetInternalMessageCount(), (i = u.context || {}).session && "string" != typeof u.context.session.id && i[Iv] && i[Iv][wv](), (t = i.user) && !t[Tv] && t[wv](i.user.id), i = n, F(r = e, "tags", []), F(r, "ext", {}), (o = u.context)[_v](r, i), o[Ev](r, i), o[Dv](r, i), o[Pv](r, i), o[Nv](r, i), o[Mv](r, i), o.applyWebContext(r, i), o[Av](r, i), o[Rv](r, i), o.cleanUp(r, i), t && t[Cv] && (t[Cv] = !1, r = new Pr(72, (lr() || {}).userAgent || ""), Lr(n.diagLog())[Oe](1, r)), u.processNext(e, n))
         }, u._doTeardown = function(e, n) {
            e = (e || {}).core();
            e && e[Sv] && e[Sv](!1) === l && e.setTraceCtx(f), t()
         }
      }), e
   }
   _(mg, pg = In), mg.getDefaultConfig = function() {
      var e;
      return {
         instrumentationKey: function() {
            return e
         },
         accountId: function() {
            return null
         },
         sessionRenewalMs: function() {
            return 18e5
         },
         samplingPercentage: function() {
            return 100
         },
         sessionExpirationMs: function() {
            return 864e5
         },
         cookieDomain: function() {
            return null
         },
         sdkExtension: function() {
            return null
         },
         isBrowserLinkTrackingEnabled: function() {
            return !1
         },
         appId: function() {
            return null
         },
         getSessionId: function() {
            return null
         },
         namePrefix: function() {
            return e
         },
         sessionCookiePostfix: function() {
            return e
         },
         userCookiePostfix: function() {
            return e
         },
         idLength: function() {
            return 22
         },
         getNewId: function() {
            return null
         }
      }
   };
   var hg, yg = mg,
      xg = [kl, "dependencies", "properties", "_snippetVersion", "appInsightsNew", "getSKUDefaults"],
      Vc = {
         __proto__: null,
         PropertiesPluginIdentifier: Jc,
         BreezeChannelIdentifier: $c,
         AnalyticsPluginIdentifier: Qc,
         Util: la,
         CorrelationIdHelper: Zu,
         UrlHelper: da,
         DateTimeUtils: w,
         ConnectionStringParser: fa,
         FieldType: {
            Default: 0,
            Required: 1,
            Array: 2,
            Hidden: 4
         },
         RequestHeaders: B,
         DisabledPropertyName: _a,
         ProcessLegacy: Da,
         SampleRate: Ea,
         HttpMethod: Pa,
         DEFAULT_BREEZE_ENDPOINT: Na,
         Envelope: ic,
         Event: oc,
         Exception: bc,
         Metric: _c,
         PageView: Dc,
         RemoteDependencyData: Nc,
         Trace: Ac,
         PageViewPerformance: Lc,
         Data: qc,
         SeverityLevel: n,
         ConfigurationManager: sa,
         ContextTagKeys: Bc,
         DataSanitizer: pa,
         TelemetryItemCreator: t,
         CtxTagKeys: f,
         Extensions: Gc,
         DistributedTracingModes: va
      },
      bg = (Ig.prototype.addDependencyInitializer = function(e) {
         return null
      }, Ig);

   function Ig(r) {
      var a, u, c, s, l, f, d, p = this;
      m(Ig, this, function(o) {
         l = ai("AISKU"), f = null, s = "" + (r.sv || r[hf] || ""), r[yf] = r[yf] || [], r[hf] = r[hf] || 2;
         var e, n = r[vf] || {},
            t = (n[xf] && (t = (e = rc(n[xf])).ingestionendpoint, n[Wl] = t ? t + Ma : n[Wl], n[bf] = e.instrumentationkey || n[bf]), o[If] = new zd, u = new yg, a = new Cl, c = new hv, d = new ua, o.core = d, !!X(n[wf]) || n[wf]);
         n[xf] || t || H(d.logger, 1, 106, "Instrumentation key support will end soon, see aka.ms/IkeyMigrate"), o[kl] = r, o[vf] = n, o.config[Zl] = o.config[Zl] && 0 < o[vf][Zl] ? o[vf][Zl] : 1e4, o[Pl] = function(n) {
            Br(d, function() {
               return "AISKU.flush"
            }, function() {
               $(d[Tf](), function(e) {
                  $(e, function(e) {
                     e[Pl](n)
                  })
               })
            }, null, n = void 0 === n || n)
         }, o[Cf] = function(n) {
            void 0 === n && (n = !0), $(d[Tf](), function(e) {
               $(e, function(e) {
                  e[Cf] ? e[Cf]() : e[Pl](n)
               })
            })
         }, o[Xl] = function(n, r, i) {
            return (n = void 0 !== n && n) && o[vf].extensions && 0 < o[vf].extensions.length && rt("Extensions not allowed in legacy mode"), Br(o.core, function() {
               return "AISKU.loadAppInsights"
            }, function() {
               var t, e = [];
               e[mf](c), e[mf](u), e[mf](a), e[mf](o[If]), d.initialize(o[vf], e, r, i), o[gf] = u[gf], hg && o[gf] && (o[gf].internal.sdkSrc = hg), (t = o[kl]) && (e = "", X(s) || (e += s), n && (e += ".lg"), o[gf] && o[gf].internal && (o[gf].internal.snippetVer = e || "-"), G(o, function(e, n) {
                  J(e) && !W(n) && e && "_" !== e[0] && -1 === Kn(xg, e) && (t[e] = n)
               })), o.emptyQueue(), o[Rl](), o[Sf](o)
            }), o
         }, o[Kl] = function(e) {
            ot(e, o, function(e) {
               return e && -1 === Kn(xg, e)
            })
         }, o.emptyQueue = function() {
            try {
               if (q(o.snippet[yf])) {
                  for (var e = o.snippet[yf].length, n = 0; n < e; n++)(0, o.snippet[yf][n])();
                  o.snippet[yf] = undefined, delete o.snippet[yf]
               }
            } catch (t) {
               t && W(t.toString) && t.toString()
            }
         }, o[Sf] = function(n) {
            var e, t, r, i, o, a, u, c;
            (or() || ur()) && (t = !(e = function() {
               var e;
               n[Cf](!1), W(p.core[Ll]) && (e = p.core[Ll](Jc)) && (e = e.plugin) && e[gf] && e[gf]._sessionManager && e[gf]._sessionManager.backup()
            }), r = n.appInsights[vf].disablePageUnloadEvents, f = f || Zi(l, d[Ul] && d[Ul]()), n.appInsights.config[cf] || (a = r, u = f, c = !(i = [zi, "unload", Oi]), o = e, (q(i) && !(c = io(i, o, a, u)) && a && 0 < a[R] ? io(i, o, null, u) : c) && (t = !0), (t = !!ao(e, r, f) || t) || (a = lr()) && a.product && "ReactNative" === a.product || H(n[If].core.logger, 1, 19, "Could not add handler for beforeunload and pagehide")), t || n.appInsights.config.disableFlushOnUnload || ao(e, r, f))
         }, o.getSender = function() {
            return c
         }, o.unload = function(e, n, t) {
            var r;
            o[Cf](e), f && (oo([zi, "unload", Oi], null, f), r = Zi(ji, f), oo([Oi], null, r), oo([Hi], null, r)), d.unload && d.unload(e, n, t)
         }, ut(o, o[If], [_l, ql, Ol, "trackPageViewPerformance", zl, "_onerror", Fl, Hl, El, Dl, Nl, Ml]), ut(o, function() {
            return a
         }, [jl, "addDependencyListener", "addDependencyInitializer"]), ut(o, d, [Al, Rl, "stopPollingInternalLogs", Ll, "addPlugin", Ul, "addUnloadCb", "getTraceCtx"]), ut(o, function() {
            var e = u[gf];
            return e ? e.user : null
         }, [Vl, Bl])
      })
   }
   var i = null,
      wg = ["://js.monitor.azure.com/", "://az416426.vo.msecnd.net/"];
   try {
      var Tg = (document || {}).currentScript;
      Tg && (i = Tg.src)
   } catch (Mg) {}
   if (i) try {
      var Cg = i.toLowerCase();
      if (Cg)
         for (var Sg = "", kg = 0; kg < wg.length; kg++)
            if (-1 !== Cg[kf](wg[kg])) {
               Sg = "cdn" + (kg + 1), -1 === Cg[kf]("/scripts/") && (-1 !== Cg[kf]("/next/") ? Sg += "-next" : -1 !== Cg[kf]("/beta/") && (Sg += "-beta")), hg = Sg + "";
               break
            }
   } catch (Mg) {}
   Pg.getAppInsights = function(e, n) {
      var t, r = new bg(e),
         n = !(2 <= n);
      return po(), n ? ((t = new Ef(e, r))[Kl](e), r[Xl](n), t) : (r[Kl](e), r[Xl](n), r)
   };
   var _g, Eg, Dg, ga = Pg;

   function Pg() {}

   function Ng(e, n) {
      var t = typeof console !== ne ? console : null;
      t && t.warn && t.warn("Failed to initialize AppInsights JS SDK for instance " + (e || "<unknown>") + " - " + n)
   }
   try {
      typeof window !== ne ? (Dg = (_g = window).appInsightsSDK || "appInsights", typeof JSON !== ne ? _g[Dg] !== undefined && (2 <= (Eg = _g[Dg] || {
         version: 2
      })[hf] && _g[Dg].initialize || Eg[hf] === undefined) && ga.getAppInsights(Eg, Eg[hf]) : Ng(Dg, "Missing JSON - you must supply a JSON polyfill!")) : Ng(Dg, "Missing window")
   } catch (Ag) {
      Ng(Dg, Ag.message)
   }
   e.AnalyticsPluginIdentifier = Qc, e.ApplicationInsights = bg, e.BreezeChannelIdentifier = $c, e.CoreUtils = fo, e.DEFAULT_BREEZE_ENDPOINT = Na, e.DisabledPropertyName = _a, e.DistributedTracingModes = va, e.LoggingSeverity = ha, e.PerfEvent = Hr, e.PerfManager = zr, e.PropertiesPluginIdentifier = Jc, e.RequestHeaders = B, e.SeverityLevel = n, e.Telemetry = Vc, e.Util = la, e.addEventHandler = to, e.doPerf = Br, e.eventOff = no, e.eventOn = eo, e.findMetaTag = Tr, e.findW3cTraceParent = function(e) {
      var n, t;
      return To(Tr("traceparent"), e) || To(n = (t = pr()) ? wr((0 < (t = t.getEntriesByType("navigation") || [])[R] ? t[0] : {}).serverTiming, "traceparent").description : n, e)
   }, e.generateW3CId = lo, e.isBeaconsSupported = yr, e.mergeEvtNamespace = Zi, e.newGuid = so, e.newId = ni, e.random32 = Zr, e.randomValue = Yr, e.removeEventHandler = ro
});
//# sourceMappingURL=ai.2.8.18.min.js.map