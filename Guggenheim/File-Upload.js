window.kentico = window.kentico || {}, window.kentico._forms = window.kentico._forms || {}, window.kentico._forms.formFileUploaderComponent = function(e) {
      function t(e) {
         e.fileUploaderDisabledElements.forEach((function(t) {
            e.elements[t].disabled = !1
         }))
      }
      return {
         attachScript: function(n) {
            var i = e.getElementById(n.fileInputId),
               a = e.getElementById(n.fileInputId + "-placeholder"),
               r = e.getElementById(n.fileInputId + "-replacement"),
               o = e.getElementById(n.fileInputId + "-button"),
               s = e.getElementById(n.fileInputId + "-icon"),
               l = e.getElementById(n.tempFileIdentifierInputId),
               u = e.getElementById(n.systemFileNameInputId),
               c = e.getElementById(n.originalFileNameInputId),
               f = e.getElementById(n.deletePersistentFileInputId),
               p = n.tempFileOriginalName,
               d = n.deleteFileIconButtonTitle;
            a.originalText = a.innerText, o.originalText = o.innerText, (c.value || p) && "FALSE" === f.value.toUpperCase() && (a.innerText = n.originalFileNamePlain || p, o.removeAttribute("hidden"), s.setAttribute("data-icon", "remove"), s.setAttribute("title", d), r.removeAttribute("hidden"), i.setAttribute("hidden", "hidden"));
            var h = function() {
                  if (l.value) {
                     var e = new XMLHttpRequest;
                     e.open("POST", n.deleteEndpoint + "&tempFileIdentifier=" + l.value), e.send()
                  }
               },
               m = function() {
                  u.value && (f.value = !0), h(),
                     function(e, t, n, i, a, r) {
                        e.value = null, e.removeAttribute("hidden"), t.setAttribute("hidden", "hidden"), n.innerText = n.originalText, i.value = "", a.setAttribute("hidden", "hidden"), r.setAttribute("data-icon", "select"), r.removeAttribute("title")
                     }(i, r, a, l, o, s)
               };
            o.addEventListener("click", m), s.addEventListener("click", (function(e) {
               "remove" === s.getAttribute("data-icon") && (e.preventDefault(), m())
            })), i.addEventListener("change", (function() {
               if (i.value) {
                  o.removeAttribute("hidden"), s.setAttribute("data-icon", "loading"),
                     function(e) {
                        e.fileUploaderDisabledElements = [];
                        for (var t = e.elements, n = 0; n < t.length; n++) {
                           var i = t[n];
                           i.disabled || (e.fileUploaderDisabledElements.push(n), i.disabled = !0)
                        }
                     }(i.form);
                  var e = i.files[0];
                  if (void 0 !== e && e.size > 1024 * n.maxFileSize) return i.value = null, l.value = "", c = "", window.alert(n.maxFileSizeExceededErrorMessage), t(i.form), void s.setAttribute("data-icon", "select");
                  var p = new FormData,
                     m = new XMLHttpRequest;
                  m.contentType = "multipart/form-data", p.append("file", e), m.addEventListener("load", (function(e) {
                     if (4 === m.readyState) {
                        if (200 === m.status) {
                           var n = m.response;
                           if ("string" == typeof n && (n = JSON.parse(n)), n.errorMessage) i.value = null, alert(n.errorMessage), s.setAttribute("data-icon", "select"), o.setAttribute("hidden", "hidden");
                           else {
                              u.value && (f.value = !0), h();
                              var c = i.files[0].name;
                              l.value = n.fileIdentifier, a.innerText = c, o.removeAttribute("hidden"), s.setAttribute("data-icon", "remove"), s.setAttribute("title", d), r.innerText = c, r.removeAttribute("hidden"), i.setAttribute("hidden", "hidden")
                           }
                        } else alert("Error sending file: " + m.statusText), s.setAttribute("data-icon", "select"), o.setAttribute("hidden", "hidden");
                        o.innerHTML = o.originalText, t(i.form)
                     }
                  })), m.upload.addEventListener("progress", (function(e) {
                     o.innerText = parseInt(e.loaded / e.total * 100) + "%"
                  })), m.open("POST", n.submitEndpoint), m.responseType = "json", m.send(p)
               }
            }))
         }
      }
   }(document),
   /*!
    * dependencyLibs/inputmask.dependencyLib.js
    * https://github.com/RobinHerbots/Inputmask
    * Copyright (c) 2010 - 2019 Robin Herbots
    * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
    * Version: 4.0.9
    */
   function(e) {
      "function" == typeof define && define.amd ? define(["../global/window"], e) : "object" == typeof exports ? module.exports = e(require("../global/window")) : window.dependencyLib = e(window)
   }((function(e) {
      var t = e.document;

      function n(e) {
         return null != e && e === e.window
      }

      function i(e) {
         return e instanceof Element
      }

      function a(n) {
         return n instanceof a ? n : this instanceof a ? void(null != n && n !== e && (this[0] = n.nodeName ? n : void 0 !== n[0] && n[0].nodeName ? n[0] : t.querySelector(n), void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new a(n)
      }
      return a.prototype = {
         on: function(e, t) {
            if (i(this[0]))
               for (var n = this[0].eventRegistry, a = this[0], r = function(e, i) {
                     a.addEventListener ? a.addEventListener(e, t, !1) : a.attachEvent && a.attachEvent("on" + e, t), n[e] = n[e] || {}, n[e][i] = n[e][i] || [], n[e][i].push(t)
                  }, o = e.split(" "), s = 0; s < o.length; s++) {
                  var l = o[s].split(".");
                  r(l[0], l[1] || "global")
               }
            return this
         },
         off: function(e, t) {
            if (i(this[0]))
               for (var n = this[0].eventRegistry, a = this[0], r = function(e, t, i) {
                     if (e in n == !0)
                        if (a.removeEventListener ? a.removeEventListener(e, i, !1) : a.detachEvent && a.detachEvent("on" + e, i), "global" === t)
                           for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(i), 1);
                        else n[e][t].splice(n[e][t].indexOf(i), 1)
                  }, o = function(e, i) {
                     var a, r, o = [];
                     if (e.length > 0)
                        if (void 0 === t)
                           for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                              ev: e,
                              namespace: i && i.length > 0 ? i : "global",
                              handler: n[e][i][a]
                           });
                        else o.push({
                           ev: e,
                           namespace: i && i.length > 0 ? i : "global",
                           handler: t
                        });
                     else if (i.length > 0)
                        for (var s in n)
                           for (var l in n[s])
                              if (l === i)
                                 if (void 0 === t)
                                    for (a = 0, r = n[s][l].length; a < r; a++) o.push({
                                       ev: s,
                                       namespace: l,
                                       handler: n[s][l][a]
                                    });
                                 else o.push({
                                    ev: s,
                                    namespace: l,
                                    handler: t
                                 });
                     return o
                  }, s = e.split(" "), l = 0; l < s.length; l++)
                  for (var u = s[l].split("."), c = o(u[0], u[1]), f = 0, p = c.length; f < p; f++) r(c[f].ev, c[f].namespace, c[f].handler);
            return this
         },
         trigger: function(e) {
            if (i(this[0]))
               for (var n = this[0].eventRegistry, r = this[0], o = "string" == typeof e ? e.split(" ") : [e.type], s = 0; s < o.length; s++) {
                  var l = o[s].split("."),
                     u = l[0],
                     c = l[1] || "global";
                  if (void 0 !== t && "global" === c) {
                     var f, p, d = {
                        bubbles: !0,
                        cancelable: !0,
                        detail: arguments[1]
                     };
                     if (t.createEvent) {
                        try {
                           f = new CustomEvent(u, d)
                        } catch (e) {
                           (f = t.createEvent("CustomEvent")).initCustomEvent(u, d.bubbles, d.cancelable, d.detail)
                        }
                        e.type && a.extend(f, e), r.dispatchEvent(f)
                     } else(f = t.createEventObject()).eventType = u, f.detail = arguments[1], e.type && a.extend(f, e), r.fireEvent("on" + f.eventType, f)
                  } else if (void 0 !== n[u])
                     if (arguments[0] = arguments[0].type ? arguments[0] : a.Event(arguments[0]), "global" === c)
                        for (var h in n[u])
                           for (p = 0; p < n[u][h].length; p++) n[u][h][p].apply(r, arguments);
                     else
                        for (p = 0; p < n[u][c].length; p++) n[u][c][p].apply(r, arguments)
               }
            return this
         }
      }, a.isFunction = function(e) {
         return "function" == typeof e
      }, a.noop = function() {}, a.isArray = Array.isArray, a.inArray = function(e, t, n) {
         return null == t ? -1 : function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
               if (e[n] === t) return n;
            return -1
         }(t, e)
      }, a.valHooks = void 0, a.isPlainObject = function(e) {
         return "object" == typeof e && !e.nodeType && !n(e) && !(e.constructor && !Object.hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf"))
      }, a.extend = function() {
         var e, t, n, i, r, o, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
         for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" == typeof s || a.isFunction(s) || (s = {}), l === u && (s = this, l--); l < u; l++)
            if (null != (e = arguments[l]))
               for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (a.isPlainObject(i) || (r = a.isArray(i))) ? (r ? (r = !1, o = n && a.isArray(n) ? n : []) : o = n && a.isPlainObject(n) ? n : {}, s[t] = a.extend(c, o, i)) : void 0 !== i && (s[t] = i));
         return s
      }, a.each = function(e, t) {
         var i = 0;
         if (function(e) {
               var t = "length" in e && e.length,
                  i = typeof e;
               return "function" !== i && !n(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
            }(e))
            for (var a = e.length; i < a && !1 !== t.call(e[i], i, e[i]); i++);
         else
            for (i in e)
               if (!1 === t.call(e[i], i, e[i])) break;
         return e
      }, a.data = function(e, t, n) {
         if (void 0 === n) return e.__data ? e.__data[t] : null;
         e.__data = e.__data || {}, e.__data[t] = n
      }, "function" == typeof e.CustomEvent ? a.Event = e.CustomEvent : (a.Event = function(e, n) {
         n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
         };
         var i = t.createEvent("CustomEvent");
         return i.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), i
      }, a.Event.prototype = e.Event.prototype), a
   })),
   /*!
    * inputmask.js
    * https://github.com/RobinHerbots/Inputmask
    * Copyright (c) 2010 - 2019 Robin Herbots
    * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
    * Version: 4.0.9
    */
   function(e) {
      "function" == typeof define && define.amd ? define(["./dependencyLibs/inputmask.dependencyLib", "./global/window"], e) : "object" == typeof exports ? module.exports = e(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window")) : window.Inputmask = e(window.dependencyLib || jQuery, window)
   }((function(e, t, n) {
      var i = t.document,
         a = navigator.userAgent,
         r = a.indexOf("MSIE ") > 0 || a.indexOf("Trident/") > 0,
         o = p("touchstart"),
         s = /iemobile/i.test(a),
         l = /iphone/i.test(a) && !s;

      function u(t, i, a) {
         if (!(this instanceof u)) return new u(t, i, a);
         this.el = n, this.events = {}, this.maskset = n, this.refreshValue = !1, !0 !== a && (e.isPlainObject(t) ? i = t : (i = i || {}, t && (i.alias = t)), this.opts = e.extend(!0, {}, this.defaults, i), this.noMasksCache = i && i.definitions !== n, this.userOptions = i || {}, this.isRTL = this.opts.numericInput, c(this.opts.alias, i, this.opts))
      }

      function c(t, i, a) {
         var r = u.prototype.aliases[t];
         return r ? (r.alias && c(r.alias, n, a), e.extend(!0, a, r), e.extend(!0, a, i), !0) : (null === a.mask && (a.mask = t), !1)
      }

      function f(t, i) {
         function a(t, a, r) {
            var o = !1;
            if (null !== t && "" !== t || ((o = null !== r.regex) ? t = (t = r.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (o = !0, t = ".*")), 1 === t.length && !1 === r.greedy && 0 !== r.repeat && (r.placeholder = ""), r.repeat > 0 || "*" === r.repeat || "+" === r.repeat) {
               var s = "*" === r.repeat ? 0 : "+" === r.repeat ? 1 : r.repeat;
               t = r.groupmarker[0] + t + r.groupmarker[1] + r.quantifiermarker[0] + s + "," + r.repeat + r.quantifiermarker[1]
            }
            var l, c = o ? "regex_" + r.regex : r.numericInput ? t.split("").reverse().join("") : t;
            return u.prototype.masksCache[c] === n || !0 === i ? (l = {
               mask: t,
               maskToken: u.prototype.analyseMask(t, o, r),
               validPositions: {},
               _buffer: n,
               buffer: n,
               tests: {},
               excludes: {},
               metadata: a,
               maskLength: n,
               jitOffset: {}
            }, !0 !== i && (u.prototype.masksCache[c] = l, l = e.extend(!0, {}, u.prototype.masksCache[c]))) : l = e.extend(!0, {}, u.prototype.masksCache[c]), l
         }
         if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
            if (t.mask.length > 1) {
               if (null === t.keepStatic) {
                  t.keepStatic = "auto";
                  for (var r = 0; r < t.mask.length; r++)
                     if (t.mask[r].charAt(0) !== t.mask[0].charAt(0)) {
                        t.keepStatic = !0;
                        break
                     }
               }
               var o = t.groupmarker[0];
               return e.each(t.isRTL ? t.mask.reverse() : t.mask, (function(i, a) {
                  o.length > 1 && (o += t.groupmarker[1] + t.alternatormarker + t.groupmarker[0]), a.mask === n || e.isFunction(a.mask) ? o += a : o += a.mask
               })), a(o += t.groupmarker[1], t.mask, t)
            }
            t.mask = t.mask.pop()
         }
         return t.mask && t.mask.mask !== n && !e.isFunction(t.mask.mask) ? a(t.mask.mask, t.mask, t) : a(t.mask, t.mask, t)
      }

      function p(e) {
         var t = i.createElement("input"),
            n = "on" + e,
            a = n in t;
         return a || (t.setAttribute(n, "return;"), a = "function" == typeof t[n]), t = null, a
      }

      function d(a, c, f) {
         c = c || this.maskset, f = f || this.opts;
         var h, m, v, g, k, b = this,
            y = this.el,
            E = this.isRTL,
            w = !1,
            x = !1,
            A = !1,
            P = !1,
            C = function(e, t, i, a, r) {
               var o = f.greedy;
               r && (f.greedy = !1), t = t || 0;
               var s, l, u, c = [],
                  p = 0;
               S();
               do {
                  if (!0 === e && _().validPositions[p]) l = (u = r && !0 === _().validPositions[p].match.optionality && _().validPositions[p + 1] === n && (!0 === _().validPositions[p].generatedInput || _().validPositions[p].input == f.skipOptionalPartCharacter && p > 0) ? M(p, B(p, s, p - 1)) : _().validPositions[p]).match, s = u.locator.slice(), c.push(!0 === i ? u.input : !1 === i ? l.nativeDef : z(p, l));
                  else {
                     l = (u = I(p, s, p - 1)).match, s = u.locator.slice();
                     var d = !0 !== a && (!1 !== f.jitMasking ? f.jitMasking : l.jit);
                     (!1 === d || d === n || "number" == typeof d && isFinite(d) && d > p) && c.push(!1 === i ? l.nativeDef : z(p, l))
                  }
                  "auto" === f.keepStatic && l.newBlockMarker && null !== l.fn && (f.keepStatic = p - 1), p++
               } while ((v === n || p < v) && (null !== l.fn || "" !== l.def) || t > p);
               return "" === c[c.length - 1] && c.pop(), !1 === i && _().maskLength !== n || (_().maskLength = p - 1), f.greedy = o, c
            };

         function _() {
            return c
         }

         function O(e) {
            var t = _();
            t.buffer = n, !0 !== e && (t.validPositions = {}, t.p = 0)
         }

         function S(e, t, i) {
            var a = -1,
               r = -1,
               o = i || _().validPositions;
            for (var s in e === n && (e = -1), o) {
               var l = parseInt(s);
               o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), l >= e && (r = l))
            }
            return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r
         }

         function j(e) {
            var t = e.locator[e.alternation];
            return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), t !== n ? t.toString() : ""
         }

         function T(e, t) {
            var i = (e.alternation != n ? e.mloc[j(e)] : e.locator).join("");
            if ("" !== i)
               for (; i.length < t;) i += "0";
            return i
         }

         function M(e, t) {
            for (var i, a, r, o = T(D(e = e > 0 ? e - 1 : 0)), s = 0; s < t.length; s++) {
               var l = t[s];
               i = T(l, o.length);
               var u = Math.abs(i - o);
               (a === n || "" !== i && u < a || r && !f.greedy && r.match.optionality && "master" === r.match.newBlockMarker && (!l.match.optionality || !l.match.newBlockMarker) || r && r.match.optionalQuantifier && !l.match.optionalQuantifier) && (a = u, r = l)
            }
            return r
         }

         function I(e, t, n) {
            return _().validPositions[e] || M(e, B(e, t ? t.slice() : t, n))
         }

         function D(e, t) {
            return _().validPositions[e] ? _().validPositions[e] : (t || B(e))[0]
         }

         function L(e, t) {
            for (var n = !1, i = B(e), a = 0; a < i.length; a++)
               if (i[a].match && i[a].match.def === t) {
                  n = !0;
                  break
               } return n
         }

         function B(t, i, a) {
            var r, o = _().maskToken,
               s = i ? a : 0,
               l = i ? i.slice() : [0],
               u = [],
               c = !1,
               p = i ? i.join("") : "";

            function d(i, a, o, l) {
               function h(o, l, m) {
                  function v(t, n) {
                     var i = 0 === e.inArray(t, n.matches);
                     return i || e.each(n.matches, (function(e, a) {
                        if (!0 === a.isQuantifier ? i = v(t, n.matches[e - 1]) : a.hasOwnProperty("matches") && (i = v(t, a)), i) return !1
                     })), i
                  }

                  function g(t, i, a) {
                     var r, o;
                     if ((_().tests[t] || _().validPositions[t]) && e.each(_().tests[t] || [_().validPositions[t]], (function(e, t) {
                           if (t.mloc[i]) return r = t, !1;
                           var s = a !== n ? a : t.alternation,
                              l = t.locator[s] !== n ? t.locator[s].toString().indexOf(i) : -1;
                           (o === n || l < o) && -1 !== l && (r = t, o = l)
                        })), r) {
                        var s = r.locator[r.alternation];
                        return (r.mloc[i] || r.mloc[s] || r.locator).slice((a !== n ? a : r.alternation) + 1)
                     }
                     return a !== n ? g(t, i) : n
                  }

                  function k(e, t) {
                     function n(e) {
                        for (var t, n, i = [], a = 0, r = e.length; a < r; a++)
                           if ("-" === e.charAt(a))
                              for (n = e.charCodeAt(a + 1); ++t < n;) i.push(String.fromCharCode(t));
                           else t = e.charCodeAt(a), i.push(e.charAt(a));
                        return i.join("")
                     }
                     return f.regex && null !== e.match.fn && null !== t.match.fn ? -1 !== n(t.match.def.replace(/[\[\]]/g, "")).indexOf(n(e.match.def.replace(/[\[\]]/g, ""))) : e.match.def === t.match.nativeDef
                  }

                  function b(e, t) {
                     if (t === n || e.alternation === t.alternation && -1 === e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])) {
                        e.mloc = e.mloc || {};
                        var i = e.locator[e.alternation];
                        if (i !== n) {
                           if ("string" == typeof i && (i = i.split(",")[0]), e.mloc[i] === n && (e.mloc[i] = e.locator.slice()), t !== n) {
                              for (var a in t.mloc) "string" == typeof a && (a = a.split(",")[0]), e.mloc[a] === n && (e.mloc[a] = t.mloc[a]);
                              e.locator[e.alternation] = Object.keys(e.mloc).join(",")
                           }
                           return !0
                        }
                        e.alternation = n
                     }
                     return !1
                  }
                  if (s > 500 && m !== n) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + _().mask;
                  if (s === t && o.matches === n) return u.push({
                     match: o,
                     locator: l.reverse(),
                     cd: p,
                     mloc: {}
                  }), !0;
                  if (o.matches !== n) {
                     if (o.isGroup && m !== o) {
                        if (o = h(i.matches[e.inArray(o, i.matches) + 1], l, m)) return !0
                     } else if (o.isOptional) {
                        var y = o;
                        if (o = d(o, a, l, m)) {
                           if (e.each(u, (function(e, t) {
                                 t.match.optionality = !0
                              })), r = u[u.length - 1].match, m !== n || !v(r, y)) return !0;
                           c = !0, s = t
                        }
                     } else if (o.isAlternator) {
                        var E, w = o,
                           x = [],
                           A = u.slice(),
                           P = l.length,
                           C = a.length > 0 ? a.shift() : -1;
                        if (-1 === C || "string" == typeof C) {
                           var O, S = s,
                              j = a.slice(),
                              T = [];
                           if ("string" == typeof C) T = C.split(",");
                           else
                              for (O = 0; O < w.matches.length; O++) T.push(O.toString());
                           if (_().excludes[t]) {
                              for (var M = T.slice(), I = 0, D = _().excludes[t].length; I < D; I++) T.splice(T.indexOf(_().excludes[t][I].toString()), 1);
                              0 === T.length && (_().excludes[t] = n, T = M)
                           }(!0 === f.keepStatic || isFinite(parseInt(f.keepStatic)) && S >= f.keepStatic) && (T = T.slice(0, 1));
                           for (var L = !1, B = 0; B < T.length; B++) {
                              O = parseInt(T[B]), u = [], a = "string" == typeof C && g(s, O, P) || j.slice(), w.matches[O] && h(w.matches[O], [O].concat(l), m) ? o = !0 : 0 === B && (L = !0), E = u.slice(), s = S, u = [];
                              for (var F = 0; F < E.length; F++) {
                                 var G = E[F],
                                    N = !1;
                                 G.match.jit = G.match.jit || L, G.alternation = G.alternation || P, b(G);
                                 for (var R = 0; R < x.length; R++) {
                                    var V = x[R];
                                    if ("string" != typeof C || G.alternation !== n && -1 !== e.inArray(G.locator[G.alternation].toString(), T)) {
                                       if (G.match.nativeDef === V.match.nativeDef) {
                                          N = !0, b(V, G);
                                          break
                                       }
                                       if (k(G, V)) {
                                          b(G, V) && (N = !0, x.splice(x.indexOf(V), 0, G));
                                          break
                                       }
                                       if (k(V, G)) {
                                          b(V, G);
                                          break
                                       }
                                       if (Q = V, void 0, !(!((q = G).locator.slice(q.alternation).join("") == Q.locator.slice(Q.alternation).join("")) || null !== q.match.fn || null === Q.match.fn) && Q.match.fn.test(q.match.def, _(), t, !1, f, !1)) {
                                          b(G, V) && (N = !0, x.splice(x.indexOf(V), 0, G));
                                          break
                                       }
                                    }
                                 }
                                 N || x.push(G)
                              }
                           }
                           u = A.concat(x), s = t, c = u.length > 0, o = x.length > 0, a = j.slice()
                        } else o = h(w.matches[C] || i.matches[C], [C].concat(l), m);
                        if (o) return !0
                     } else if (o.isQuantifier && m !== i.matches[e.inArray(o, i.matches) - 1])
                        for (var K = o, H = a.length > 0 ? a.shift() : 0; H < (isNaN(K.quantifier.max) ? H + 1 : K.quantifier.max) && s <= t; H++) {
                           var U = i.matches[e.inArray(K, i.matches) - 1];
                           if (o = h(U, [H].concat(l), U)) {
                              if ((r = u[u.length - 1].match).optionalQuantifier = H >= K.quantifier.min, r.jit = (H || 1) * U.matches.indexOf(r) >= K.quantifier.jit, r.optionalQuantifier && v(r, U)) {
                                 c = !0, s = t;
                                 break
                              }
                              return r.jit && (_().jitOffset[t] = U.matches.indexOf(r)), !0
                           }
                        } else if (o = d(o, a, l, m)) return !0
                  } else s++;
                  var q, Q
               }
               for (var m = a.length > 0 ? a.shift() : 0; m < i.matches.length; m++)
                  if (!0 !== i.matches[m].isQuantifier) {
                     var v = h(i.matches[m], [m].concat(o), l);
                     if (v && s === t) return v;
                     if (s > t) break
                  }
            }
            if (t > -1) {
               if (i === n) {
                  for (var h, m = t - 1;
                     (h = _().validPositions[m] || _().tests[m]) === n && m > -1;) m--;
                  h !== n && m > -1 && (l = function(t, i) {
                     var a = [];
                     return e.isArray(i) || (i = [i]), i.length > 0 && (i[0].alternation === n ? 0 === (a = M(t, i.slice()).locator.slice()).length && (a = i[0].locator.slice()) : e.each(i, (function(e, t) {
                        if ("" !== t.def)
                           if (0 === a.length) a = t.locator.slice();
                           else
                              for (var n = 0; n < a.length; n++) t.locator[n] && -1 === a[n].toString().indexOf(t.locator[n]) && (a[n] += "," + t.locator[n])
                     }))), a
                  }(m, h), p = l.join(""), s = m)
               }
               if (_().tests[t] && _().tests[t][0].cd === p) return _().tests[t];
               for (var v = l.shift(); v < o.length; v++) {
                  if (d(o[v], l, [v]) && s === t || s > t) break
               }
            }
            return (0 === u.length || c) && u.push({
               match: {
                  fn: null,
                  optionality: !1,
                  casing: null,
                  def: "",
                  placeholder: ""
               },
               locator: [],
               mloc: {},
               cd: p
            }), i !== n && _().tests[t] ? e.extend(!0, [], u) : (_().tests[t] = e.extend(!0, [], u), _().tests[t])
         }

         function F() {
            return _()._buffer === n && (_()._buffer = C(!1, 1), _().buffer === n && (_().buffer = _()._buffer.slice())), _()._buffer
         }

         function G(e) {
            return _().buffer !== n && !0 !== e || (_().buffer = C(!0, S(), !0), _()._buffer === n && (_()._buffer = _().buffer.slice())), _().buffer
         }

         function N(e, t, i) {
            var a, r;
            if (!0 === e) O(), e = 0, t = i.length;
            else
               for (a = e; a < t; a++) delete _().validPositions[a];
            for (r = e, a = e; a < t; a++)
               if (O(!0), i[a] !== f.skipOptionalPartCharacter) {
                  var o = H(r, i[a], !0, !0);
                  !1 !== o && (O(!0), r = o.caret !== n ? o.caret : o.pos + 1)
               }
         }

         function R(t, n, i) {
            switch (f.casing || n.casing) {
               case "upper":
                  t = t.toUpperCase();
                  break;
               case "lower":
                  t = t.toLowerCase();
                  break;
               case "title":
                  var a = _().validPositions[i - 1];
                  t = 0 === i || a && a.input === String.fromCharCode(u.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
                  break;
               default:
                  if (e.isFunction(f.casing)) {
                     var r = Array.prototype.slice.call(arguments);
                     r.push(_().validPositions), t = f.casing.apply(this, r)
                  }
            }
            return t
         }

         function V(t, i, a) {
            for (var r, o = f.greedy ? i : i.slice(0, 1), s = !1, l = a !== n ? a.split(",") : [], u = 0; u < l.length; u++) - 1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
            for (var c = 0; c < t.length; c++)
               if (-1 !== e.inArray(t[c], o)) {
                  s = !0;
                  break
               } return s
         }

         function K(t, i, a, r, o) {
            var s, l, u, c, f, p, d, h = e.extend(!0, {}, _().validPositions),
               m = !1,
               v = o !== n ? o : S();
            if (-1 === v && o === n) l = (c = D(s = 0)).alternation;
            else
               for (; v >= 0; v--)
                  if ((u = _().validPositions[v]) && u.alternation !== n) {
                     if (c && c.locator[u.alternation] !== u.locator[u.alternation]) break;
                     s = v, l = _().validPositions[s].alternation, c = u
                  } if (l !== n) {
               d = parseInt(s), _().excludes[d] = _().excludes[d] || [], !0 !== t && _().excludes[d].push(j(c));
               var g = [],
                  k = 0;
               for (f = d; f < S(n, !0) + 1; f++)(p = _().validPositions[f]) && !0 !== p.generatedInput ? g.push(p.input) : f < t && k++, delete _().validPositions[f];
               for (; _().excludes[d] && _().excludes[d].length < 10;) {
                  var b = -1 * k,
                     y = g.slice();
                  for (_().tests[d] = n, O(!0), m = !0; y.length > 0;) {
                     var E = y.shift();
                     if (!(m = H(S(n, !0) + 1, E, !1, r, !0))) break
                  }
                  if (m && i !== n) {
                     var w = S(t) + 1;
                     for (f = d; f < S() + 1; f++)((p = _().validPositions[f]) === n || null == p.match.fn) && f < t + b && b++;
                     m = H((t += b) > w ? w : t, i, a, r, !0)
                  }
                  if (m) break;
                  if (O(), c = D(d), _().validPositions = e.extend(!0, {}, h), !_().excludes[d]) {
                     m = K(t, i, a, r, d - 1);
                     break
                  }
                  var x = j(c);
                  if (-1 !== _().excludes[d].indexOf(x)) {
                     m = K(t, i, a, r, d - 1);
                     break
                  }
                  for (_().excludes[d].push(x), f = d; f < S(n, !0) + 1; f++) delete _().validPositions[f]
               }
            }
            return _().excludes[d] = n, m
         }

         function H(t, i, a, r, o, s) {
            function l(e) {
               return E ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1
            }
            a = !0 === a;
            var u = t;

            function c(i, a, o) {
               var s = !1;
               return e.each(B(i), (function(u, c) {
                  var p = c.match;
                  if (G(!0), !1 !== (s = null != p.fn ? p.fn.test(a, _(), i, o, f, l(t)) : (a === p.def || a === f.skipOptionalPartCharacter) && "" !== p.def && {
                        c: z(i, p, !0) || p.def,
                        pos: i
                     })) {
                     var d = s.c !== n ? s.c : a,
                        h = i;
                     return d = d === f.skipOptionalPartCharacter && null === p.fn ? z(i, p, !0) || p.def : d, s.remove !== n && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort((function(e, t) {
                        return t - e
                     })), (function(e, t) {
                        q({
                           begin: t,
                           end: t + 1
                        })
                     }))), s.insert !== n && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort((function(e, t) {
                        return e - t
                     })), (function(e, t) {
                        H(t.pos, t.c, !0, r)
                     }))), !0 !== s && s.pos !== n && s.pos !== i && (h = s.pos), !0 !== s && s.pos === n && s.c === n ? !1 : (q(t, e.extend({}, c, {
                        input: R(d, p, h)
                     }), r, h) || (s = !1), !1)
                  }
               })), s
            }
            t.begin !== n && (u = E ? t.end : t.begin);
            var p = !0,
               d = e.extend(!0, {}, _().validPositions);
            if (e.isFunction(f.preValidation) && !a && !0 !== r && !0 !== s && (p = f.preValidation(G(), u, i, l(t), f, _())), !0 === p) {
               if (U(n, u, !0), (v === n || u < v) && (p = c(u, i, a), (!a || !0 === r) && !1 === p && !0 !== s)) {
                  var h = _().validPositions[u];
                  if (!h || null !== h.match.fn || h.match.def !== i && i !== f.skipOptionalPartCharacter) {
                     if ((f.insertMode || _().validPositions[W(u)] === n) && (!Q(u, !0) || _().jitOffset[u]))
                        if (_().jitOffset[u] && _().validPositions[W(u)] === n) !1 !== (p = H(u + _().jitOffset[u], i, a)) && (p.caret = u);
                        else
                           for (var m = u + 1, g = W(u); m <= g; m++)
                              if (!1 !== (p = c(m, i, a))) {
                                 p = U(u, p.pos !== n ? p.pos : m) || p, u = m;
                                 break
                              }
                  } else p = {
                     caret: W(u)
                  }
               }!1 !== p || !1 === f.keepStatic || null != f.regex && !oe(G()) || a || !0 === o || (p = K(u, i, a, r)), !0 === p && (p = {
                  pos: u
               })
            }
            if (e.isFunction(f.postValidation) && !1 !== p && !a && !0 !== r && !0 !== s) {
               var k = f.postValidation(G(!0), t.begin !== n ? E ? t.end : t.begin : t, p, f);
               if (k !== n) {
                  if (k.refreshFromBuffer && k.buffer) {
                     var b = k.refreshFromBuffer;
                     N(!0 === b ? b : b.start, b.end, k.buffer)
                  }
                  p = !0 === k ? p : k
               }
            }
            return p && p.pos === n && (p.pos = u), !1 !== p && !0 !== s || (O(!0), _().validPositions = e.extend(!0, {}, d)), p
         }

         function U(t, i, a) {
            var r;
            if (t === n)
               for (t = i - 1; t > 0 && !_().validPositions[t]; t--);
            for (var o = t; o < i; o++) {
               if (_().validPositions[o] === n && !Q(o, !0))
                  if (0 == o ? D(o) : _().validPositions[o - 1]) {
                     var s = B(o).slice();
                     "" === s[s.length - 1].match.def && s.pop();
                     var l = M(o, s);
                     if ((l = e.extend({}, l, {
                           input: z(o, l.match, !0) || l.match.def
                        })).generatedInput = !0, q(o, l, !0), !0 !== a) {
                        var u = _().validPositions[i].input;
                        _().validPositions[i] = n, r = H(i, u, !0, !0)
                     }
                  }
            }
            return r
         }

         function q(t, i, a, r) {
            function o(e, t, i) {
               var a = t[e];
               if (a !== n && (null === a.match.fn && !0 !== a.match.optionality || a.input === f.radixPoint)) {
                  var r = i.begin <= e - 1 ? t[e - 1] && null === t[e - 1].match.fn && t[e - 1] : t[e - 1],
                     o = i.end > e + 1 ? t[e + 1] && null === t[e + 1].match.fn && t[e + 1] : t[e + 1];
                  return r && o
               }
               return !1
            }
            var s = t.begin !== n ? t.begin : t,
               l = t.end !== n ? t.end : t;
            if (t.begin > t.end && (s = t.end, l = t.begin), r = r !== n ? r : s, s !== l || f.insertMode && _().validPositions[r] !== n && a === n) {
               var u = e.extend(!0, {}, _().validPositions),
                  c = S(n, !0);
               for (_().p = s, v = c; v >= s; v--) _().validPositions[v] && "+" === _().validPositions[v].match.nativeDef && (f.isNegative = !1), delete _().validPositions[v];
               var p = !0,
                  d = r,
                  h = (_().validPositions, !1),
                  m = d,
                  v = d;
               for (i && (_().validPositions[r] = e.extend(!0, {}, i), m++, d++, s < l && v++); v <= c; v++) {
                  var g = u[v];
                  if (g !== n && (v >= l || v >= s && !0 !== g.generatedInput && o(v, u, {
                        begin: s,
                        end: l
                     }))) {
                     for (;
                        "" !== D(m).match.def;) {
                        if (!1 === h && u[m] && u[m].match.nativeDef === g.match.nativeDef) _().validPositions[m] = e.extend(!0, {}, u[m]), _().validPositions[m].input = g.input, U(n, m, !0), d = m + 1, p = !0;
                        else if (f.shiftPositions && L(m, g.match.def)) {
                           var k = H(m, g.input, !0, !0);
                           p = !1 !== k, d = k.caret || k.insert ? S() : m + 1, h = !0
                        } else p = !0 === g.generatedInput || g.input === f.radixPoint && !0 === f.numericInput;
                        if (p) break;
                        if (!p && m > l && Q(m, !0) && (null !== g.match.fn || m > _().maskLength)) break;
                        m++
                     }
                     "" == D(m).match.def && (p = !1), m = d
                  }
                  if (!p) break
               }
               if (!p) return _().validPositions = e.extend(!0, {}, u), O(!0), !1
            } else i && (_().validPositions[r] = e.extend(!0, {}, i));
            return O(!0), !0
         }

         function Q(e, t) {
            var n = I(e).match;
            if ("" === n.def && (n = D(e).match), null != n.fn) return n.fn;
            if (!0 !== t && e > -1) {
               var i = B(e);
               return i.length > 1 + ("" === i[i.length - 1].match.def ? 1 : 0)
            }
            return !1
         }

         function W(e, t) {
            for (var n = e + 1;
               "" !== D(n).match.def && (!0 === t && (!0 !== D(n).match.newBlockMarker || !Q(n)) || !0 !== t && !Q(n));) n++;
            return n
         }

         function $(e, t) {
            var n, i = e;
            if (i <= 0) return 0;
            for (; --i > 0 && (!0 === t && !0 !== D(i).match.newBlockMarker || !0 !== t && !Q(i) && ((n = B(i)).length < 2 || 2 === n.length && "" === n[1].match.def)););
            return i
         }

         function X(t, i, a, r, o) {
            if (r && e.isFunction(f.onBeforeWrite)) {
               var s = f.onBeforeWrite.call(b, r, i, a, f);
               if (s) {
                  if (s.refreshFromBuffer) {
                     var l = s.refreshFromBuffer;
                     N(!0 === l ? l : l.start, l.end, s.buffer || i), i = G(!0)
                  }
                  a !== n && (a = s.caret !== n ? s.caret : a)
               }
            }
            if (t !== n && (t.inputmask._valueSet(i.join("")), a === n || r !== n && "blur" === r.type ? ue(t, a, 0 === i.length) : ie(t, a), !0 === o)) {
               var u = e(t),
                  c = t.inputmask._valueGet();
               x = !0, u.trigger("input"), setTimeout((function() {
                  c === F().join("") ? u.trigger("cleared") : !0 === oe(i) && u.trigger("complete")
               }), 0)
            }
         }

         function z(t, i, a) {
            if ((i = i || D(t).match).placeholder !== n || !0 === a) return e.isFunction(i.placeholder) ? i.placeholder(f) : i.placeholder;
            if (null === i.fn) {
               if (t > -1 && _().validPositions[t] === n) {
                  var r, o = B(t),
                     s = [];
                  if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0))
                     for (var l = 0; l < o.length; l++)
                        if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === n || !1 !== o[l].match.fn.test(r.match.def, _(), t, !0, f)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return f.placeholder.charAt(t % f.placeholder.length)
               }
               return i.def
            }
            return f.placeholder.charAt(t % f.placeholder.length)
         }

         function Z(e, t) {
            if (r) {
               if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                  var n = G().slice(),
                     i = e.inputmask._valueGet();
                  if (i !== t) {
                     var a = S(); - 1 === a && i === F().join("") ? n = [] : -1 !== a && re(n), X(e, n)
                  }
               }
            } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"))
         }
         var J, Y = {
               on: function(t, i, a) {
                  var r = function(t) {
                     var i = this;
                     if (i.inputmask === n && "FORM" !== this.nodeName) {
                        var r = e.data(i, "_inputmask_opts");
                        r ? new u(r).mask(i) : Y.off(i)
                     } else {
                        if ("setvalue" === t.type || "FORM" === this.nodeName || !(i.disabled || i.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === f.tabThrough && t.keyCode === u.keyCode.TAB))) {
                           switch (t.type) {
                              case "input":
                                 if (!0 === x) return x = !1, t.preventDefault();
                                 if (o) {
                                    var c = arguments;
                                    return setTimeout((function() {
                                       a.apply(i, c), ie(i, i.inputmask.caretPos, n, !0)
                                    }), 0), !1
                                 }
                                 break;
                              case "keydown":
                                 w = !1, x = !1;
                                 break;
                              case "keypress":
                                 if (!0 === w) return t.preventDefault();
                                 w = !0;
                                 break;
                              case "click":
                                 if (s || l) {
                                    c = arguments;
                                    return setTimeout((function() {
                                       a.apply(i, c)
                                    }), 0), !1
                                 }
                           }
                           var p = a.apply(i, arguments);
                           return !1 === p && (t.preventDefault(), t.stopPropagation()), p
                        }
                        t.preventDefault()
                     }
                  };
                  t.inputmask.events[i] = t.inputmask.events[i] || [], t.inputmask.events[i].push(r), -1 !== e.inArray(i, ["submit", "reset"]) ? null !== t.form && e(t.form).on(i, r) : e(t).on(i, r)
               },
               off: function(t, n) {
                  var i;
                  t.inputmask && t.inputmask.events && (n ? (i = [])[n] = t.inputmask.events[n] : i = t.inputmask.events, e.each(i, (function(n, i) {
                     for (; i.length > 0;) {
                        var a = i.pop(); - 1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, a) : e(t).off(n, a)
                     }
                     delete t.inputmask.events[n]
                  })))
               }
            },
            ee = {
               keydownEvent: function(t) {
                  var n = e(this),
                     i = t.keyCode,
                     a = ie(this);
                  if (i === u.keyCode.BACKSPACE || i === u.keyCode.DELETE || l && i === u.keyCode.BACKSPACE_SAFARI || t.ctrlKey && i === u.keyCode.X && !p("cut")) t.preventDefault(), se(this, i, a), X(this, G(!0), _().p, t, this.inputmask._valueGet() !== G().join(""));
                  else if (i === u.keyCode.END || i === u.keyCode.PAGE_DOWN) {
                     t.preventDefault();
                     var r = W(S());
                     ie(this, t.shiftKey ? a.begin : r, r, !0)
                  } else i === u.keyCode.HOME && !t.shiftKey || i === u.keyCode.PAGE_UP ? (t.preventDefault(), ie(this, 0, t.shiftKey ? a.begin : 0, !0)) : (f.undoOnEscape && i === u.keyCode.ESCAPE || 90 === i && t.ctrlKey) && !0 !== t.altKey ? (te(this, !0, !1, h.split("")), n.trigger("click")) : i !== u.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === f.tabThrough && i === u.keyCode.TAB && (!0 === t.shiftKey ? (null === D(a.begin).match.fn && (a.begin = W(a.begin)), a.end = $(a.begin, !0), a.begin = $(a.end, !0)) : (a.begin = W(a.begin, !0), a.end = W(a.begin, !0), a.end < _().maskLength && a.end--), a.begin < _().maskLength && (t.preventDefault(), ie(this, a.begin, a.end))) : (f.insertMode = !f.insertMode, this.setAttribute("im-insert", f.insertMode));
                  f.onKeyDown.call(this, t, G(), ie(this).begin, f), A = -1 !== e.inArray(i, f.ignorables)
               },
               keypressEvent: function(t, i, a, r, o) {
                  var s = this,
                     l = e(s),
                     c = t.which || t.charCode || t.keyCode;
                  if (!(!0 === i || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || A)) return c === u.keyCode.ENTER && h !== G().join("") && (h = G().join(""), setTimeout((function() {
                     l.trigger("change")
                  }), 0)), !0;
                  if (c) {
                     46 === c && !1 === t.shiftKey && "" !== f.radixPoint && (c = f.radixPoint.charCodeAt(0));
                     var p, d = i ? {
                           begin: o,
                           end: o
                        } : ie(s),
                        m = String.fromCharCode(c),
                        v = 0;
                     if (f._radixDance && f.numericInput) {
                        var g = G().indexOf(f.radixPoint.charAt(0)) + 1;
                        d.begin <= g && (c === f.radixPoint.charCodeAt(0) && (v = 1), d.begin -= 1, d.end -= 1)
                     }
                     _().writeOutBuffer = !0;
                     var k = H(d, m, r);
                     if (!1 !== k && (O(!0), p = k.caret !== n ? k.caret : W(k.pos.begin ? k.pos.begin : k.pos), _().p = p), p = (f.numericInput && k.caret === n ? $(p) : p) + v, !1 !== a && (setTimeout((function() {
                           f.onKeyValidation.call(s, c, k, f)
                        }), 0), _().writeOutBuffer && !1 !== k)) {
                        var b = G();
                        X(s, b, p, t, !0 !== i)
                     }
                     if (t.preventDefault(), i) return !1 !== k && (k.forwardPosition = p), k
                  }
               },
               pasteEvent: function(n) {
                  var i, a = n.originalEvent || n,
                     r = (e(this), this.inputmask._valueGet(!0)),
                     o = ie(this);
                  E && (i = o.end, o.end = o.begin, o.begin = i);
                  var s = r.substr(0, o.begin),
                     l = r.substr(o.end, r.length);
                  if (s === (E ? F().reverse() : F()).slice(0, o.begin).join("") && (s = ""), l === (E ? F().reverse() : F()).slice(o.end).join("") && (l = ""), t.clipboardData && t.clipboardData.getData) r = s + t.clipboardData.getData("Text") + l;
                  else {
                     if (!a.clipboardData || !a.clipboardData.getData) return !0;
                     r = s + a.clipboardData.getData("text/plain") + l
                  }
                  var u = r;
                  if (e.isFunction(f.onBeforePaste)) {
                     if (!1 === (u = f.onBeforePaste.call(b, r, f))) return n.preventDefault();
                     u || (u = r)
                  }
                  return te(this, !1, !1, u.toString().split("")), X(this, G(), W(S()), n, h !== G().join("")), n.preventDefault()
               },
               inputFallBackEvent: function(t) {
                  var n = this,
                     i = n.inputmask._valueGet();
                  if (G().join("") !== i) {
                     var a = ie(n);
                     if (i = function(e, t, n) {
                           if (s) {
                              var i = t.replace(G().join(""), "");
                              if (1 === i.length) {
                                 var a = t.split("");
                                 a.splice(n.begin, 0, i), t = a.join("")
                              }
                           }
                           return t
                        }(0, i = function(e, t, n) {
                           return "." === t.charAt(n.begin - 1) && "" !== f.radixPoint && ((t = t.split(""))[n.begin - 1] = f.radixPoint.charAt(0), t = t.join("")), t
                        }(0, i, a), a), G().join("") !== i) {
                        var r = G().join(""),
                           o = !f.numericInput && i.length > r.length ? -1 : 0,
                           l = i.substr(0, a.begin),
                           c = i.substr(a.begin),
                           p = r.substr(0, a.begin + o),
                           d = r.substr(a.begin + o),
                           h = a,
                           m = "",
                           v = !1;
                        if (l !== p) {
                           var g, k = (v = l.length >= p.length) ? l.length : p.length;
                           for (g = 0; l.charAt(g) === p.charAt(g) && g < k; g++);
                           v && (h.begin = g - o, m += l.slice(g, h.end))
                        }
                        if (c !== d && (c.length > d.length ? m += c.slice(0, 1) : c.length < d.length && (h.end += d.length - c.length, v || "" === f.radixPoint || "" !== c || l.charAt(h.begin + o - 1) !== f.radixPoint || (h.begin--, m = f.radixPoint))), X(n, G(), {
                              begin: h.begin + o,
                              end: h.end + o
                           }), m.length > 0) e.each(m.split(""), (function(t, i) {
                           var a = new e.Event("keypress");
                           a.which = i.charCodeAt(0), A = !1, ee.keypressEvent.call(n, a)
                        }));
                        else {
                           h.begin === h.end - 1 && (h.begin = $(h.begin + 1), h.begin === h.end - 1 ? ie(n, h.begin) : ie(n, h.begin, h.end));
                           var b = new e.Event("keydown");
                           b.keyCode = f.numericInput ? u.keyCode.BACKSPACE : u.keyCode.DELETE, ee.keydownEvent.call(n, b)
                        }
                        t.preventDefault()
                     }
                  }
               },
               beforeInputEvent: function(t) {
                  if (t.cancelable) {
                     var n = this;
                     switch (t.inputType) {
                        case "insertText":
                           return e.each(t.data.split(""), (function(t, i) {
                              var a = new e.Event("keypress");
                              a.which = i.charCodeAt(0), A = !1, ee.keypressEvent.call(n, a)
                           })), t.preventDefault();
                        case "deleteContentBackward":
                           return (i = new e.Event("keydown")).keyCode = u.keyCode.BACKSPACE, ee.keydownEvent.call(n, i), t.preventDefault();
                        case "deleteContentForward":
                           var i;
                           return (i = new e.Event("keydown")).keyCode = u.keyCode.DELETE, ee.keydownEvent.call(n, i), t.preventDefault()
                     }
                  }
               },
               setValueEvent: function(t) {
                  this.inputmask.refreshValue = !1;
                  var n = this,
                     i = (i = t && t.detail ? t.detail[0] : arguments[1]) || n.inputmask._valueGet(!0);
                  e.isFunction(f.onBeforeMask) && (i = f.onBeforeMask.call(b, i, f) || i), te(n, !0, !1, i = i.toString().split("")), h = G().join(""), (f.clearMaskOnLostFocus || f.clearIncomplete) && n.inputmask._valueGet() === F().join("") && n.inputmask._valueSet("")
               },
               focusEvent: function(e) {
                  var t = this.inputmask._valueGet();
                  f.showMaskOnFocus && (t !== G().join("") ? X(this, G(), W(S())) : !1 === P && ie(this, W(S()))), !0 === f.positionCaretOnTab && !1 === P && ee.clickEvent.apply(this, [e, !0]), h = G().join("")
               },
               mouseleaveEvent: function(e) {
                  P = !1, f.clearMaskOnLostFocus && i.activeElement !== this && Z(this, k)
               },
               clickEvent: function(t, a) {
                  var r = this;
                  setTimeout((function() {
                     if (i.activeElement === r) {
                        var t = ie(r);
                        if (a && (E ? t.end = t.begin : t.begin = t.end), t.begin === t.end) switch (f.positionCaretOnClick) {
                           case "none":
                              break;
                           case "select":
                              ie(r, 0, G().length);
                              break;
                           case "ignore":
                              ie(r, W(S()));
                              break;
                           case "radixFocus":
                              if (function(t) {
                                    if ("" !== f.radixPoint) {
                                       var i = _().validPositions;
                                       if (i[t] === n || i[t].input === z(t)) {
                                          if (t < W(-1)) return !0;
                                          var a = e.inArray(f.radixPoint, G());
                                          if (-1 !== a) {
                                             for (var r in i)
                                                if (a < r && i[r].input !== z(r)) return !1;
                                             return !0
                                          }
                                       }
                                    }
                                    return !1
                                 }(t.begin)) {
                                 var o = G().join("").indexOf(f.radixPoint);
                                 ie(r, f.numericInput ? W(o) : o);
                                 break
                              }
                           default:
                              var s = t.begin,
                                 l = S(s, !0),
                                 u = W(l);
                              if (s < u) ie(r, Q(s, !0) || Q(s - 1, !0) ? s : W(s));
                              else {
                                 var c = _().validPositions[l],
                                    p = I(u, c ? c.match.locator : n, c),
                                    d = z(u, p.match);
                                 if ("" !== d && G()[u] !== d && !0 !== p.match.optionalQuantifier && !0 !== p.match.newBlockMarker || !Q(u, f.keepStatic) && p.match.def === d) {
                                    var h = W(u);
                                    (s >= h || s === u) && (u = h)
                                 }
                                 ie(r, u)
                              }
                        }
                     }
                  }), 0)
               },
               cutEvent: function(n) {
                  e(this);
                  var a = ie(this),
                     r = n.originalEvent || n,
                     o = t.clipboardData || r.clipboardData,
                     s = E ? G().slice(a.end, a.begin) : G().slice(a.begin, a.end);
                  o.setData("text", E ? s.reverse().join("") : s.join("")), i.execCommand && i.execCommand("copy"), se(this, u.keyCode.DELETE, a), X(this, G(), _().p, n, h !== G().join(""))
               },
               blurEvent: function(t) {
                  var i = e(this);
                  if (this.inputmask) {
                     Z(this, k);
                     var a = this.inputmask._valueGet(),
                        r = G().slice();
                     "" === a && g === n || (f.clearMaskOnLostFocus && (-1 === S() && a === F().join("") ? r = [] : re(r)), !1 === oe(r) && (setTimeout((function() {
                        i.trigger("incomplete")
                     }), 0), f.clearIncomplete && (O(), r = f.clearMaskOnLostFocus ? [] : F().slice())), X(this, r, n, t)), h !== G().join("") && (h = r.join(""), i.trigger("change"))
                  }
               },
               mouseenterEvent: function(e) {
                  P = !0, i.activeElement !== this && f.showMaskOnHover && Z(this, (E ? G().slice().reverse() : G()).join(""))
               },
               submitEvent: function(e) {
                  h !== G().join("") && m.trigger("change"), f.clearMaskOnLostFocus && -1 === S() && y.inputmask._valueGet && y.inputmask._valueGet() === F().join("") && y.inputmask._valueSet(""), f.clearIncomplete && !1 === oe(G()) && y.inputmask._valueSet(""), f.removeMaskOnSubmit && (y.inputmask._valueSet(y.inputmask.unmaskedvalue(), !0), setTimeout((function() {
                     X(y, G())
                  }), 0))
               },
               resetEvent: function(e) {
                  y.inputmask.refreshValue = !0, setTimeout((function() {
                     m.trigger("setvalue")
                  }), 0)
               }
            };

         function te(t, i, a, r, o) {
            var s = this || t.inputmask,
               l = r.slice(),
               c = "",
               p = -1,
               d = n;
            if (O(), a || !0 === f.autoUnmask) p = W(p);
            else {
               var h = F().slice(0, W(-1)).join(""),
                  m = l.join("").match(new RegExp("^" + u.escapeRegex(h), "g"));
               m && m.length > 0 && (l.splice(0, m.length * h.length), p = W(p))
            } - 1 === p ? (_().p = W(p), p = 0) : _().p = p, s.caretPos = {
               begin: p
            }, e.each(l, (function(i, r) {
               if (r !== n)
                  if (_().validPositions[i] === n && l[i] === z(i) && Q(i, !0) && !1 === H(i, l[i], !0, n, n, !0)) _().p++;
                  else {
                     var o = new e.Event("_checkval");
                     o.which = r.charCodeAt(0), c += r;
                     var u = S(n, !0);
                     ! function(e, t) {
                        return -1 !== C(!0, 0, !1).slice(e, W(e)).join("").replace(/'/g, "").indexOf(t) && !Q(e) && (D(e).match.nativeDef === t.charAt(0) || null === D(e).match.fn && D(e).match.nativeDef === "'" + t.charAt(0) || " " === D(e).match.nativeDef && (D(e + 1).match.nativeDef === t.charAt(0) || null === D(e + 1).match.fn && D(e + 1).match.nativeDef === "'" + t.charAt(0)))
                     }(p, c) ? (d = ee.keypressEvent.call(t, o, !0, !1, a, s.caretPos.begin)) && (p = s.caretPos.begin + 1, c = "") : d = ee.keypressEvent.call(t, o, !0, !1, a, u + 1), d && (X(n, G(), d.forwardPosition, o, !1), s.caretPos = {
                        begin: d.forwardPosition,
                        end: d.forwardPosition
                     })
                  }
            })), i && X(t, G(), d ? d.forwardPosition : n, o || new e.Event("checkval"), o && "input" === o.type)
         }

         function ne(t) {
            if (t) {
               if (t.inputmask === n) return t.value;
               t.inputmask && t.inputmask.refreshValue && ee.setValueEvent.call(t)
            }
            var i = [],
               a = _().validPositions;
            for (var r in a) a[r].match && null != a[r].match.fn && i.push(a[r].input);
            var o = 0 === i.length ? "" : (E ? i.reverse() : i).join("");
            if (e.isFunction(f.onUnMask)) {
               var s = (E ? G().slice().reverse() : G()).join("");
               o = f.onUnMask.call(b, s, o, f)
            }
            return o
         }

         function ie(a, r, o, s) {
            function l(e) {
               return !E || "number" != typeof e || f.greedy && "" === f.placeholder || !y || (e = y.inputmask._valueGet().length - e), e
            }
            var u;
            if (r === n) return "selectionStart" in a ? (r = a.selectionStart, o = a.selectionEnd) : t.getSelection ? (u = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== a && u.commonAncestorContainer !== a || (r = u.startOffset, o = u.endOffset) : i.selection && i.selection.createRange && (o = (r = 0 - (u = i.selection.createRange()).duplicate().moveStart("character", -a.inputmask._valueGet().length)) + u.text.length), {
               begin: s ? r : l(r),
               end: s ? o : l(o)
            };
            if (e.isArray(r) && (o = E ? r[0] : r[1], r = E ? r[1] : r[0]), r.begin !== n && (o = E ? r.begin : r.end, r = E ? r.end : r.begin), "number" == typeof r) {
               r = s ? r : l(r), o = "number" == typeof(o = s ? o : l(o)) ? o : r;
               var c = parseInt(((a.ownerDocument.defaultView || t).getComputedStyle ? (a.ownerDocument.defaultView || t).getComputedStyle(a, null) : a.currentStyle).fontSize) * o;
               if (a.scrollLeft = c > a.scrollWidth ? c : 0, a.inputmask.caretPos = {
                     begin: r,
                     end: o
                  }, a === i.activeElement) {
                  if ("selectionStart" in a) a.selectionStart = r, a.selectionEnd = o;
                  else if (t.getSelection) {
                     if (u = i.createRange(), a.firstChild === n || null === a.firstChild) {
                        var p = i.createTextNode("");
                        a.appendChild(p)
                     }
                     u.setStart(a.firstChild, r < a.inputmask._valueGet().length ? r : a.inputmask._valueGet().length), u.setEnd(a.firstChild, o < a.inputmask._valueGet().length ? o : a.inputmask._valueGet().length), u.collapse(!0);
                     var d = t.getSelection();
                     d.removeAllRanges(), d.addRange(u)
                  } else a.createTextRange && ((u = a.createTextRange()).collapse(!0), u.moveEnd("character", o), u.moveStart("character", r), u.select());
                  ue(a, {
                     begin: r,
                     end: o
                  })
               }
            }
         }

         function ae(t) {
            var i, a, r = C(!0, S(), !0, !0),
               o = r.length,
               s = S(),
               l = {},
               u = _().validPositions[s],
               c = u !== n ? u.locator.slice() : n;
            for (i = s + 1; i < r.length; i++) c = (a = I(i, c, i - 1)).locator.slice(), l[i] = e.extend(!0, {}, a);
            var f = u && u.alternation !== n ? u.locator[u.alternation] : n;
            for (i = o - 1; i > s && (((a = l[i]).match.optionality || a.match.optionalQuantifier && a.match.newBlockMarker || f && (f !== l[i].locator[u.alternation] && null != a.match.fn || null === a.match.fn && a.locator[u.alternation] && V(a.locator[u.alternation].toString().split(","), f.toString().split(",")) && "" !== B(i)[0].def)) && r[i] === z(i, a.match)); i--) o--;
            return t ? {
               l: o,
               def: l[o] ? l[o].match : n
            } : o
         }

         function re(e) {
            e.length = 0;
            for (var t, i = C(!0, 0, !0, n, !0);
               (t = i.shift()) !== n;) e.push(t);
            return e
         }

         function oe(t) {
            if (e.isFunction(f.isComplete)) return f.isComplete(t, f);
            if ("*" === f.repeat) return n;
            var i = !1,
               a = ae(!0),
               r = $(a.l);
            if (a.def === n || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
               i = !0;
               for (var o = 0; o <= r; o++) {
                  var s = I(o).match;
                  if (null !== s.fn && _().validPositions[o] === n && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== z(o, s)) {
                     i = !1;
                     break
                  }
               }
            }
            return i
         }

         function se(e, t, i, a, r) {
            if ((f.numericInput || E) && (t === u.keyCode.BACKSPACE ? t = u.keyCode.DELETE : t === u.keyCode.DELETE && (t = u.keyCode.BACKSPACE), E)) {
               var o = i.end;
               i.end = i.begin, i.begin = o
            }
            if (t === u.keyCode.BACKSPACE && i.end - i.begin < 1 ? (i.begin = $(i.begin), _().validPositions[i.begin] !== n && _().validPositions[i.begin].input === f.groupSeparator && i.begin--) : t === u.keyCode.DELETE && i.begin === i.end && (i.end = Q(i.end, !0) && _().validPositions[i.end] && _().validPositions[i.end].input !== f.radixPoint ? i.end + 1 : W(i.end) + 1, _().validPositions[i.begin] !== n && _().validPositions[i.begin].input === f.groupSeparator && i.end++), q(i), !0 !== a && !1 !== f.keepStatic || null !== f.regex) {
               var s = K(!0);
               if (s) {
                  var l = s.caret !== n ? s.caret : s.pos ? W(s.pos.begin ? s.pos.begin : s.pos) : S(-1, !0);
                  (t !== u.keyCode.DELETE || i.begin > l) && i.begin
               }
            }
            var c = S(i.begin, !0);
            if (c < i.begin || -1 === i.begin) _().p = W(c);
            else if (!0 !== a && (_().p = i.begin, !0 !== r))
               for (; _().p < c && _().validPositions[_().p] === n;) _().p++
         }

         function le(n) {
            var a = (n.ownerDocument.defaultView || t).getComputedStyle(n, null);
            var r = i.createElement("div");
            r.style.width = a.width, r.style.textAlign = a.textAlign, g = i.createElement("div"), n.inputmask.colorMask = g, g.className = "im-colormask", n.parentNode.insertBefore(g, n), n.parentNode.removeChild(n), g.appendChild(n), g.appendChild(r), n.style.left = r.offsetLeft + "px", e(g).on("mouseleave", (function(e) {
               return ee.mouseleaveEvent.call(n, [e])
            })), e(g).on("mouseenter", (function(e) {
               return ee.mouseenterEvent.call(n, [e])
            })), e(g).on("click", (function(e) {
               return ie(n, function(e) {
                  var t, r = i.createElement("span");
                  for (var o in a) isNaN(o) && -1 !== o.indexOf("font") && (r.style[o] = a[o]);
                  r.style.textTransform = a.textTransform, r.style.letterSpacing = a.letterSpacing, r.style.position = "absolute", r.style.height = "auto", r.style.width = "auto", r.style.visibility = "hidden", r.style.whiteSpace = "nowrap", i.body.appendChild(r);
                  var s, l = n.inputmask._valueGet(),
                     u = 0;
                  for (t = 0, s = l.length; t <= s; t++) {
                     if (r.innerHTML += l.charAt(t) || "_", r.offsetWidth >= e) {
                        var c = e - u,
                           f = r.offsetWidth - e;
                        r.innerHTML = l.charAt(t), t = (c -= r.offsetWidth / 3) < f ? t - 1 : t;
                        break
                     }
                     u = r.offsetWidth
                  }
                  return i.body.removeChild(r), t
               }(e.clientX)), ee.clickEvent.call(n, [e])
            }))
         }

         function ue(e, t, a) {
            var r, o, s, l = [],
               u = !1,
               c = 0;

            function p(e) {
               if (e === n && (e = ""), u || null !== r.fn && o.input !== n)
                  if (u && (null !== r.fn && o.input !== n || "" === r.def)) {
                     u = !1;
                     var t = l.length;
                     l[t - 1] = l[t - 1] + "</span>", l.push(e)
                  } else l.push(e);
               else u = !0, l.push("<span class='im-static'>" + e)
            }
            if (g !== n) {
               var d = G();
               if (t === n ? t = ie(e) : t.begin === n && (t = {
                     begin: t,
                     end: t
                  }), !0 !== a) {
                  var h = S();
                  do {
                     _().validPositions[c] ? (o = _().validPositions[c], r = o.match, s = o.locator.slice(), p(d[c])) : (o = I(c, s, c - 1), r = o.match, s = o.locator.slice(), !1 === f.jitMasking || c < h || "number" == typeof f.jitMasking && isFinite(f.jitMasking) && f.jitMasking > c ? p(z(c, r)) : u = !1), c++
                  } while ((v === n || c < v) && (null !== r.fn || "" !== r.def) || h > c || u);
                  u && p(), i.activeElement === e && (l.splice(t.begin, 0, t.begin === t.end || t.end > _().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">'), l.splice(t.end + 1, 0, "</mark>"))
               }
               var m = g.getElementsByTagName("div")[0];
               m.innerHTML = l.join(""), e.inputmask.positionColorMask(e, m)
            }
         }
         if (a !== n) switch (a.action) {
            case "isComplete":
               return y = a.el, oe(G());
            case "unmaskedvalue":
               return y !== n && a.value === n || (J = a.value, J = (e.isFunction(f.onBeforeMask) && f.onBeforeMask.call(b, J, f) || J).split(""), te.call(this, n, !1, !1, J), e.isFunction(f.onBeforeWrite) && f.onBeforeWrite.call(b, n, G(), 0, f)), ne(y);
            case "mask":
               ! function(t) {
                  Y.off(t);
                  var a = function(t, a) {
                     var r = t.getAttribute("type"),
                        o = "INPUT" === t.tagName && -1 !== e.inArray(r, a.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                     if (!o)
                        if ("INPUT" === t.tagName) {
                           var s = i.createElement("input");
                           s.setAttribute("type", r), o = "text" === s.type, s = null
                        } else o = "partial";
                     return !1 !== o ? function(t) {
                        var r, o;

                        function s() {
                           return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== S() || !0 !== a.nullable ? i.activeElement === this && a.clearMaskOnLostFocus ? (E ? re(G().slice()).reverse() : re(G().slice())).join("") : r.call(this) : "" : r.call(this)
                        }

                        function l(t) {
                           o.call(this, t), this.inputmask && e(this).trigger("setvalue", [t])
                        }
                        if (!t.inputmask.__valueGet) {
                           if (!0 !== a.noValuePatching) {
                              if (Object.getOwnPropertyDescriptor) {
                                 "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(e) {
                                    return e.__proto__
                                 } : function(e) {
                                    return e.constructor.prototype
                                 });
                                 var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : n;
                                 u && u.get && u.set ? (r = u.get, o = u.set, Object.defineProperty(t, "value", {
                                    get: s,
                                    set: l,
                                    configurable: !0
                                 })) : "INPUT" !== t.tagName && (r = function() {
                                    return this.textContent
                                 }, o = function(e) {
                                    this.textContent = e
                                 }, Object.defineProperty(t, "value", {
                                    get: s,
                                    set: l,
                                    configurable: !0
                                 }))
                              } else i.__lookupGetter__ && t.__lookupGetter__("value") && (r = t.__lookupGetter__("value"), o = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", l));
                              t.inputmask.__valueGet = r, t.inputmask.__valueSet = o
                           }
                           t.inputmask._valueGet = function(e) {
                              return E && !0 !== e ? r.call(this.el).split("").reverse().join("") : r.call(this.el)
                           }, t.inputmask._valueSet = function(e, t) {
                              o.call(this.el, null === e || e === n ? "" : !0 !== t && E ? e.split("").reverse().join("") : e)
                           }, r === n && (r = function() {
                              return this.value
                           }, o = function(e) {
                              this.value = e
                           }, function(t) {
                              if (e.valHooks && (e.valHooks[t] === n || !0 !== e.valHooks[t].inputmaskpatch)) {
                                 var i = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function(e) {
                                       return e.value
                                    },
                                    r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function(e, t) {
                                       return e.value = t, e
                                    };
                                 e.valHooks[t] = {
                                    get: function(e) {
                                       if (e.inputmask) {
                                          if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                          var t = i(e);
                                          return -1 !== S(n, n, e.inputmask.maskset.validPositions) || !0 !== a.nullable ? t : ""
                                       }
                                       return i(e)
                                    },
                                    set: function(t, n) {
                                       var i, a = e(t);
                                       return i = r(t, n), t.inputmask && a.trigger("setvalue", [n]), i
                                    },
                                    inputmaskpatch: !0
                                 }
                              }
                           }(t.type), function(t) {
                              Y.on(t, "mouseenter", (function(t) {
                                 var n = e(this);
                                 this.inputmask._valueGet() !== G().join("") && n.trigger("setvalue")
                              }))
                           }(t))
                        }
                     }(t) : t.inputmask = n, o
                  }(t, f);
                  if (!1 !== a && (m = e(y = t), k = y.placeholder, -1 === (v = y !== n ? y.maxLength : n) && (v = n), !0 === f.colorMask && le(y), o && ("inputMode" in y && (y.inputmode = f.inputmode, y.setAttribute("inputmode", f.inputmode)), !0 === f.disablePredictiveText && ("autocorrect" in y ? y.autocorrect = !1 : (!0 !== f.colorMask && le(y), y.type = "password"))), !0 === a && (y.setAttribute("im-insert", f.insertMode), Y.on(y, "submit", ee.submitEvent), Y.on(y, "reset", ee.resetEvent), Y.on(y, "blur", ee.blurEvent), Y.on(y, "focus", ee.focusEvent), !0 !== f.colorMask && (Y.on(y, "click", ee.clickEvent), Y.on(y, "mouseleave", ee.mouseleaveEvent), Y.on(y, "mouseenter", ee.mouseenterEvent)), Y.on(y, "paste", ee.pasteEvent), Y.on(y, "cut", ee.cutEvent), Y.on(y, "complete", f.oncomplete), Y.on(y, "incomplete", f.onincomplete), Y.on(y, "cleared", f.oncleared), o || !0 === f.inputEventOnly ? y.removeAttribute("maxLength") : (Y.on(y, "keydown", ee.keydownEvent), Y.on(y, "keypress", ee.keypressEvent)), Y.on(y, "input", ee.inputFallBackEvent), Y.on(y, "beforeinput", ee.beforeInputEvent)), Y.on(y, "setvalue", ee.setValueEvent), h = F().join(""), "" !== y.inputmask._valueGet(!0) || !1 === f.clearMaskOnLostFocus || i.activeElement === y)) {
                     var r = e.isFunction(f.onBeforeMask) && f.onBeforeMask.call(b, y.inputmask._valueGet(!0), f) || y.inputmask._valueGet(!0);
                     "" !== r && te(y, !0, !1, r.split(""));
                     var s = G().slice();
                     h = s.join(""), !1 === oe(s) && f.clearIncomplete && O(), f.clearMaskOnLostFocus && i.activeElement !== y && (-1 === S() ? s = [] : re(s)), (!1 === f.clearMaskOnLostFocus || f.showMaskOnFocus && i.activeElement === y || "" !== y.inputmask._valueGet(!0)) && X(y, s), i.activeElement === y && ie(y, W(S()))
                  }
               }(y);
               break;
            case "format":
               return J = (e.isFunction(f.onBeforeMask) && f.onBeforeMask.call(b, a.value, f) || a.value).split(""), te.call(this, n, !0, !1, J), a.metadata ? {
                  value: E ? G().slice().reverse().join("") : G().join(""),
                  metadata: d.call(this, {
                     action: "getmetadata"
                  }, c, f)
               } : E ? G().slice().reverse().join("") : G().join("");
            case "isValid":
               a.value ? (J = a.value.split(""), te.call(this, n, !0, !0, J)) : a.value = G().join("");
               for (var ce = G(), fe = ae(), pe = ce.length - 1; pe > fe && !Q(pe); pe--);
               return ce.splice(fe, pe + 1 - fe), oe(ce) && a.value === G().join("");
            case "getemptymask":
               return F().join("");
            case "remove":
               if (y && y.inputmask) e.data(y, "_inputmask_opts", null), m = e(y), y.inputmask._valueSet(f.autoUnmask ? ne(y) : y.inputmask._valueGet(!0)), Y.off(y), y.inputmask.colorMask && ((g = y.inputmask.colorMask).removeChild(y), g.parentNode.insertBefore(y, g), g.parentNode.removeChild(g)), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y), "value") && y.inputmask.__valueGet && Object.defineProperty(y, "value", {
                  get: y.inputmask.__valueGet,
                  set: y.inputmask.__valueSet,
                  configurable: !0
               }) : i.__lookupGetter__ && y.__lookupGetter__("value") && y.inputmask.__valueGet && (y.__defineGetter__("value", y.inputmask.__valueGet), y.__defineSetter__("value", y.inputmask.__valueSet)), y.inputmask = n;
               return y;
            case "getmetadata":
               if (e.isArray(c.metadata)) {
                  var de = C(!0, 0, !1).join("");
                  return e.each(c.metadata, (function(e, t) {
                     if (t.mask === de) return de = t, !1
                  })), de
               }
               return c.metadata
         }
      }
      return u.prototype = {
         dataAttribute: "data-inputmask",
         defaults: {
            placeholder: "_",
            optionalmarker: ["[", "]"],
            quantifiermarker: ["{", "}"],
            groupmarker: ["(", ")"],
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            regex: null,
            oncomplete: e.noop,
            onincomplete: e.noop,
            oncleared: e.noop,
            repeat: 0,
            greedy: !1,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            alias: null,
            onKeyDown: e.noop,
            onBeforeMask: null,
            onBeforePaste: function(t, n) {
               return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: e.noop,
            skipOptionalPartCharacter: " ",
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            _radixDance: !1,
            groupSeparator: "",
            keepStatic: null,
            positionCaretOnTab: !0,
            tabThrough: !1,
            supportsInputType: ["text", "tel", "url", "password", "search"],
            ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
            isComplete: null,
            preValidation: null,
            postValidation: null,
            staticDefinitionSymbol: n,
            jitMasking: !1,
            nullable: !0,
            inputEventOnly: !1,
            noValuePatching: !1,
            positionCaretOnClick: "lvp",
            casing: null,
            inputmode: "verbatim",
            colorMask: !1,
            disablePredictiveText: !1,
            importDataAttributes: !0,
            shiftPositions: !0
         },
         definitions: {
            9: {
               validator: "[0-9ï¼‘-ï¼™]",
               definitionSymbol: "*"
            },
            a: {
               validator: "[A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]",
               definitionSymbol: "*"
            },
            "*": {
               validator: "[0-9ï¼‘-ï¼™A-Za-zÐ-ÑÐÑ‘Ã€-Ã¿Âµ]"
            }
         },
         aliases: {},
         masksCache: {},
         mask: function(a) {
            var r = this;
            return "string" == typeof a && (a = i.getElementById(a) || i.querySelectorAll(a)), a = a.nodeName ? [a] : a, e.each(a, (function(i, a) {
               var o = e.extend(!0, {}, r.opts);
               if (function(i, a, r, o) {
                     if (!0 === a.importDataAttributes) {
                        var s, l, u, f, p = i.getAttribute(o),
                           d = function(e, a) {
                              null !== (a = a !== n ? a : i.getAttribute(o + "-" + e)) && ("string" == typeof a && (0 === e.indexOf("on") ? a = t[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), r[e] = a)
                           };
                        if (p && "" !== p && (p = p.replace(/'/g, '"'), l = JSON.parse("{" + p + "}")), l)
                           for (f in u = n, l)
                              if ("alias" === f.toLowerCase()) {
                                 u = l[f];
                                 break
                              } for (s in d("alias", u), r.alias && c(r.alias, r, a), a) {
                           if (l)
                              for (f in u = n, l)
                                 if (f.toLowerCase() === s.toLowerCase()) {
                                    u = l[f];
                                    break
                                 } d(s, u)
                        }
                     }
                     return e.extend(!0, a, r), ("rtl" === i.dir || a.rightAlign) && (i.style.textAlign = "right"), ("rtl" === i.dir || a.numericInput) && (i.dir = "ltr", i.removeAttribute("dir"), a.isRTL = !0), Object.keys(r).length
                  }(a, o, e.extend(!0, {}, r.userOptions), r.dataAttribute)) {
                  var s = f(o, r.noMasksCache);
                  s !== n && (a.inputmask !== n && (a.inputmask.opts.autoUnmask = !0, a.inputmask.remove()), a.inputmask = new u(n, n, !0), a.inputmask.opts = o, a.inputmask.noMasksCache = r.noMasksCache, a.inputmask.userOptions = e.extend(!0, {}, r.userOptions), a.inputmask.isRTL = o.isRTL || o.numericInput, a.inputmask.el = a, a.inputmask.maskset = s, e.data(a, "_inputmask_opts", o), d.call(a.inputmask, {
                     action: "mask"
                  }))
               }
            })), a && a[0] && a[0].inputmask || this
         },
         option: function(t, n) {
            return "string" == typeof t ? this.opts[t] : "object" == typeof t ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0
         },
         unmaskedvalue: function(e) {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "unmaskedvalue",
               value: e
            })
         },
         remove: function() {
            return d.call(this, {
               action: "remove"
            })
         },
         getemptymask: function() {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "getemptymask"
            })
         },
         hasMaskedValue: function() {
            return !this.opts.autoUnmask
         },
         isComplete: function() {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "isComplete"
            })
         },
         getmetadata: function() {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "getmetadata"
            })
         },
         isValid: function(e) {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "isValid",
               value: e
            })
         },
         format: function(e, t) {
            return this.maskset = this.maskset || f(this.opts, this.noMasksCache), d.call(this, {
               action: "format",
               value: e,
               metadata: t
            })
         },
         setValue: function(t) {
            this.el && e(this.el).trigger("setvalue", [t])
         },
         analyseMask: function(t, i, a) {
            var r, o, s, l, c, f, p = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
               d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
               h = !1,
               m = new k,
               v = [],
               g = [];

            function k(e, t, n, i) {
               this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, this.quantifier = {
                  min: 1,
                  max: 1
               }
            }

            function b(t, r, o) {
               o = o !== n ? o : t.matches.length;
               var s = t.matches[o - 1];
               if (i) 0 === r.indexOf("[") || h && /\\d|\\s|\\w]/i.test(r) || "." === r ? t.matches.splice(o++, 0, {
                  fn: new RegExp(r, a.casing ? "i" : ""),
                  optionality: !1,
                  newBlockMarker: s === n ? "master" : s.def !== r,
                  casing: null,
                  def: r,
                  placeholder: n,
                  nativeDef: r
               }) : (h && (r = r[r.length - 1]), e.each(r.split(""), (function(e, i) {
                  s = t.matches[o - 1], t.matches.splice(o++, 0, {
                     fn: null,
                     optionality: !1,
                     newBlockMarker: s === n ? "master" : s.def !== i && null !== s.fn,
                     casing: null,
                     def: a.staticDefinitionSymbol || i,
                     placeholder: a.staticDefinitionSymbol !== n ? i : n,
                     nativeDef: (h ? "'" : "") + i
                  })
               }))), h = !1;
               else {
                  var l = (a.definitions ? a.definitions[r] : n) || u.prototype.definitions[r];
                  l && !h ? t.matches.splice(o++, 0, {
                     fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, a.casing ? "i" : "") : new function() {
                        this.test = l.validator
                     } : new RegExp("."),
                     optionality: !1,
                     newBlockMarker: s === n ? "master" : s.def !== (l.definitionSymbol || r),
                     casing: l.casing,
                     def: l.definitionSymbol || r,
                     placeholder: l.placeholder,
                     nativeDef: r
                  }) : (t.matches.splice(o++, 0, {
                     fn: null,
                     optionality: !1,
                     newBlockMarker: s === n ? "master" : s.def !== r && null !== s.fn,
                     casing: null,
                     def: a.staticDefinitionSymbol || r,
                     placeholder: a.staticDefinitionSymbol !== n ? r : n,
                     nativeDef: (h ? "'" : "") + r
                  }), h = !1)
               }
            }

            function y() {
               if (v.length > 0) {
                  if (b(l = v[v.length - 1], o), l.isAlternator) {
                     c = v.pop();
                     for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                     v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : m.matches.push(c)
                  }
               } else b(m, o)
            }

            function E(e) {
               var t = new k(!0);
               return t.openGroup = !1, t.matches = e, t
            }
            for (i && (a.optionalmarker[0] = n, a.optionalmarker[1] = n); r = i ? d.exec(t) : p.exec(t);) {
               if (o = r[0], i) switch (o.charAt(0)) {
                  case "?":
                     o = "{0,1}";
                     break;
                  case "+":
                  case "*":
                     o = "{" + o + "}"
               }
               if (h) y();
               else switch (o.charAt(0)) {
                  case "(?=":
                  case "(?!":
                  case "(?<=":
                  case "(?<!":
                     break;
                  case a.escapeChar:
                     h = !0, i && y();
                     break;
                  case a.optionalmarker[1]:
                  case a.groupmarker[1]:
                     if ((s = v.pop()).openGroup = !1, s !== n)
                        if (v.length > 0) {
                           if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                              c = v.pop();
                              for (var w = 0; w < c.matches.length; w++) c.matches[w].isGroup = !1, c.matches[w].alternatorGroup = !1;
                              v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : m.matches.push(c)
                           }
                        } else m.matches.push(s);
                     else y();
                     break;
                  case a.optionalmarker[0]:
                     v.push(new k(!1, !0));
                     break;
                  case a.groupmarker[0]:
                     v.push(new k(!0));
                     break;
                  case a.quantifiermarker[0]:
                     var x = new k(!1, !1, !0),
                        A = (o = o.replace(/[{}]/g, "")).split("|"),
                        P = A[0].split(","),
                        C = isNaN(P[0]) ? P[0] : parseInt(P[0]),
                        _ = 1 === P.length ? C : isNaN(P[1]) ? P[1] : parseInt(P[1]);
                     "*" !== C && "+" !== C || (C = "*" === _ ? 0 : 1), x.quantifier = {
                        min: C,
                        max: _,
                        jit: A[1]
                     };
                     var O = v.length > 0 ? v[v.length - 1].matches : m.matches;
                     if ((r = O.pop()).isAlternator) {
                        O.push(r), O = r.matches;
                        var S = new k(!0),
                           j = O.pop();
                        O.push(S), O = S.matches, r = j
                     }
                     r.isGroup || (r = E([r])), O.push(r), O.push(x);
                     break;
                  case a.alternatormarker:
                     var T = function(e) {
                        var t = e.pop();
                        return t.isQuantifier && (t = E([e.pop(), t])), t
                     };
                     if (v.length > 0) {
                        var M = (l = v[v.length - 1]).matches[l.matches.length - 1];
                        f = l.openGroup && (M.matches === n || !1 === M.isGroup && !1 === M.isAlternator) ? v.pop() : T(l.matches)
                     } else f = T(m.matches);
                     if (f.isAlternator) v.push(f);
                     else if (f.alternatorGroup ? (c = v.pop(), f.alternatorGroup = !1) : c = new k(!1, !1, !1, !0), c.matches.push(f), v.push(c), f.openGroup) {
                        f.openGroup = !1;
                        var I = new k(!0);
                        I.alternatorGroup = !0, v.push(I)
                     }
                     break;
                  default:
                     y()
               }
            }
            for (; v.length > 0;) s = v.pop(), m.matches.push(s);
            return m.matches.length > 0 && (! function t(r) {
               r && r.matches && e.each(r.matches, (function(e, o) {
                  var s = r.matches[e + 1];
                  (s === n || s.matches === n || !1 === s.isQuantifier) && o && o.isGroup && (o.isGroup = !1, i || (b(o, a.groupmarker[0], 0), !0 !== o.openGroup && b(o, a.groupmarker[1]))), t(o)
               }))
            }(m), g.push(m)), (a.numericInput || a.isRTL) && function e(t) {
               for (var i in t.matches = t.matches.reverse(), t.matches)
                  if (t.matches.hasOwnProperty(i)) {
                     var r = parseInt(i);
                     if (t.matches[i].isQuantifier && t.matches[r + 1] && t.matches[r + 1].isGroup) {
                        var o = t.matches[i];
                        t.matches.splice(i, 1), t.matches.splice(r + 1, 0, o)
                     }
                     t.matches[i].matches !== n ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((s = t.matches[i]) === a.optionalmarker[0] ? s = a.optionalmarker[1] : s === a.optionalmarker[1] ? s = a.optionalmarker[0] : s === a.groupmarker[0] ? s = a.groupmarker[1] : s === a.groupmarker[1] && (s = a.groupmarker[0]), s)
                  } var s;
               return t
            }(g[0]), g
         },
         positionColorMask: function(e, t) {
            e.style.left = t.offsetLeft + "px"
         }
      }, u.extendDefaults = function(t) {
         e.extend(!0, u.prototype.defaults, t)
      }, u.extendDefinitions = function(t) {
         e.extend(!0, u.prototype.definitions, t)
      }, u.extendAliases = function(t) {
         e.extend(!0, u.prototype.aliases, t)
      }, u.format = function(e, t, n) {
         return u(t).format(e, n)
      }, u.unmask = function(e, t) {
         return u(t).unmaskedvalue(e)
      }, u.isValid = function(e, t) {
         return u(t).isValid(e)
      }, u.remove = function(t) {
         "string" == typeof t && (t = i.getElementById(t) || i.querySelectorAll(t)), t = t.nodeName ? [t] : t, e.each(t, (function(e, t) {
            t.inputmask && t.inputmask.remove()
         }))
      }, u.setValue = function(t, n) {
         "string" == typeof t && (t = i.getElementById(t) || i.querySelectorAll(t)), t = t.nodeName ? [t] : t, e.each(t, (function(t, i) {
            i.inputmask ? i.inputmask.setValue(n) : e(i).trigger("setvalue", [n])
         }))
      }, u.escapeRegex = function(e) {
         return e.replace(new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"].join("|\\") + ")", "gim"), "\\$1")
      }, u.keyCode = {
         BACKSPACE: 8,
         BACKSPACE_SAFARI: 127,
         DELETE: 46,
         DOWN: 40,
         END: 35,
         ENTER: 13,
         ESCAPE: 27,
         HOME: 36,
         INSERT: 45,
         LEFT: 37,
         PAGE_DOWN: 34,
         PAGE_UP: 33,
         RIGHT: 39,
         SPACE: 32,
         TAB: 9,
         UP: 38,
         X: 88,
         CONTROL: 17
      }, u.dependencyLib = e, u
   })), window.kentico = window.kentico || {}, window.kentico.updatableFormHelper = function() {
      function e(e, n) {
         if (e) {
            var i = e.getAttribute("data-ktc-ajax-update");
            if (i) {
               $(e).find("input[type='submit']").attr("onclick", "return false;"), e.updating = !0;
               var a = new FormData(e);
               a.append("kentico_update_form", "true");
               var r = n || document.activeElement;
               t(e, a, (function(e) {
                  if (!e.target.response.data) {
                     var t = selectionEnd = null;
                     !r || "text" !== r.type && "search" !== r.type && "password" !== r.type && "tel" !== r.type && "url" !== r.type || (t = r.selectionStart, selectionEnd = r.selectionEnd);
                     var n = $(window).scrollTop();
                     if ($(i).replaceWith(e.target.responseText), $(window).scrollTop(n), r.id) {
                        var a = document.getElementById(r.id);
                        a && (a.focus(), function(e, t, n) {
                           if (null === t && null === n) return;
                           e.setSelectionRange && e.setSelectionRange(t, n)
                        }(a, t, selectionEnd))
                     }
                  }
               }))
            }
         }
      }

      function t(e, t, n) {
         var i = new XMLHttpRequest;
         i.addEventListener("load", n), i.open("POST", e.action), i.send(t)
      }

      function n(e, t, n) {
         var i;
         return function() {
            var a = this,
               r = arguments,
               o = function() {
                  i = null, n || e.apply(a, r)
               },
               s = n && !i;
            clearTimeout(i), i = setTimeout(o, t || 200), s && e.apply(a, r)
         }
      }
      return {
         registerEventListeners: function(t) {
            if (!(t && t.formId && t.targetAttributeName && t.unobservedAttributeName)) throw new Error("Invalid configuration passed.");
            var a = ["email", "number", "password", "search", "tel", "text", "time"],
               r = document.getElementById(t.formId);
            if (r && r.getAttribute(t.targetAttributeName))
               for (i = 0; i < r.length; i++) {
                  var o = r.elements[i];
                  if (!o.hasAttribute(t.unobservedAttributeName) && "submit" !== o.type)("INPUT" === o.tagName && -1 !== a.indexOf(o.type) || "TEXTAREA" === o.tagName) && (o.previousValue = o.value, o.addEventListener("keyup", n((function(t) {
                     setTimeout((function() {
                        r.updating || t.target.previousValue === t.target.value || (r.keyupUpdate = !0, e(r, t.target))
                     }), 0)
                  }), 800)), o.addEventListener("blur", (function(t) {
                     setTimeout((function() {
                        r.updating || t.target.previousValue === t.target.value || e(r, t.relatedTarget)
                     }), 0)
                  }))), o.addEventListener("change", (function(t) {
                     setTimeout((function() {
                        r.updating || e(r)
                     }), 0)
                  }))
               }
         },
         updateForm: e,
         submitForm: function(e) {
            e.preventDefault();
            var n = e.target,
               i = new FormData(n);
            t(n, i, (function(e) {
               if (-1 === e.target.getResponseHeader("Content-Type").indexOf("application/json")) {
                  var t = $(window).scrollTop(),
                     i = n.getAttribute("data-ktc-ajax-update");
                  $(i).replaceWith(e.target.response), $(window).scrollTop(t)
               } else {
                  var a = JSON.parse(e.target.response);
                  location.href = a.redirectTo
               }
            }))
         }
      }
   }();