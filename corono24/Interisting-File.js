(self.webpackChunkc24 = self.webpackChunkc24 || []).push([
   [9644], {
      89644: (e, t, r) => {
         e.exports = r(25644)
      },
      70353: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(86955),
            s = r(92233),
            i = r(68030),
            a = r(97948),
            u = r(51875),
            c = r(60842),
            f = r(88618),
            l = r(1439),
            p = r(26714);
         e.exports = function(e) {
            return new Promise((function(t, r) {
               var d, h = e.data,
                  m = e.headers,
                  v = e.responseType;

               function g() {
                  e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d)
               }
               n.isFormData(h) && delete m["Content-Type"];
               var y = new XMLHttpRequest;
               if (e.auth) {
                  var b = e.auth.username || "",
                     w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                  m.Authorization = "Basic " + btoa(b + ":" + w)
               }
               var x = a(e.baseURL, e.url);

               function E() {
                  if (y) {
                     var n = "getAllResponseHeaders" in y ? u(y.getAllResponseHeaders()) : null,
                        s = {
                           data: v && "text" !== v && "json" !== v ? y.response : y.responseText,
                           status: y.status,
                           statusText: y.statusText,
                           headers: n,
                           config: e,
                           request: y
                        };
                     o((function(e) {
                        t(e), g()
                     }), (function(e) {
                        r(e), g()
                     }), s), y = null
                  }
               }
               if (y.open(e.method.toUpperCase(), i(x, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = E : y.onreadystatechange = function() {
                     y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(E)
                  }, y.onabort = function() {
                     y && (r(f("Request aborted", e, "ECONNABORTED", y)), y = null)
                  }, y.onerror = function() {
                     r(f("Network Error", e, null, y)), y = null
                  }, y.ontimeout = function() {
                     var t = "timeout of " + e.timeout + "ms exceeded",
                        n = e.transitional || l.transitional;
                     e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(f(t, e, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)), y = null
                  }, n.isStandardBrowserEnv()) {
                  var S = (e.withCredentials || c(x)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
                  S && (m[e.xsrfHeaderName] = S)
               }
               "setRequestHeader" in y && n.forEach(m, (function(e, t) {
                  void 0 === h && "content-type" === t.toLowerCase() ? delete m[t] : y.setRequestHeader(t, e)
               })), n.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), v && "json" !== v && (y.responseType = e.responseType), "function" == typeof e.onDownloadProgress && y.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && y.upload && y.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (d = function(e) {
                  y && (r(!e || e && e.type ? new p("canceled") : e), y.abort(), y = null)
               }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d))), h || (h = null), y.send(h)
            }))
         }
      },
      25644: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(73644),
            s = r(62215),
            i = r(92937);
         var a = function e(t) {
            var r = new s(t),
               a = o(s.prototype.request, r);
            return n.extend(a, s.prototype, r), n.extend(a, r), a.create = function(r) {
               return e(i(t, r))
            }, a
         }(r(1439));
         a.Axios = s, a.Cancel = r(26714), a.CancelToken = r(34089), a.isCancel = r(98041), a.VERSION = r(29241).version, a.all = function(e) {
            return Promise.all(e)
         }, a.spread = r(70783), a.isAxiosError = r(65587), e.exports = a, e.exports.default = a
      },
      26714: e => {
         "use strict";

         function t(e) {
            this.message = e
         }
         t.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
         }, t.prototype.__CANCEL__ = !0, e.exports = t
      },
      34089: (e, t, r) => {
         "use strict";
         var n = r(26714);

         function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function(e) {
               t = e
            }));
            var r = this;
            this.promise.then((function(e) {
               if (r._listeners) {
                  var t, n = r._listeners.length;
                  for (t = 0; t < n; t++) r._listeners[t](e);
                  r._listeners = null
               }
            })), this.promise.then = function(e) {
               var t, n = new Promise((function(e) {
                  r.subscribe(e), t = e
               })).then(e);
               return n.cancel = function() {
                  r.unsubscribe(t)
               }, n
            }, e((function(e) {
               r.reason || (r.reason = new n(e), t(r.reason))
            }))
         }
         o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
         }, o.prototype.subscribe = function(e) {
            this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
         }, o.prototype.unsubscribe = function(e) {
            if (this._listeners) {
               var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
            }
         }, o.source = function() {
            var e;
            return {
               token: new o((function(t) {
                  e = t
               })),
               cancel: e
            }
         }, e.exports = o
      },
      98041: e => {
         "use strict";
         e.exports = function(e) {
            return !(!e || !e.__CANCEL__)
         }
      },
      62215: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(68030),
            s = r(946),
            i = r(6895),
            a = r(92937),
            u = r(17525),
            c = u.validators;

         function f(e) {
            this.defaults = e, this.interceptors = {
               request: new s,
               response: new s
            }
         }
         f.prototype.request = function(e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = e.transitional;
            void 0 !== t && u.assertOptions(t, {
               silentJSONParsing: c.transitional(c.boolean),
               forcedJSONParsing: c.transitional(c.boolean),
               clarifyTimeoutError: c.transitional(c.boolean)
            }, !1);
            var r = [],
               n = !0;
            this.interceptors.request.forEach((function(t) {
               "function" == typeof t.runWhen && !1 === t.runWhen(e) || (n = n && t.synchronous, r.unshift(t.fulfilled, t.rejected))
            }));
            var o, s = [];
            if (this.interceptors.response.forEach((function(e) {
                  s.push(e.fulfilled, e.rejected)
               })), !n) {
               var f = [i, void 0];
               for (Array.prototype.unshift.apply(f, r), f = f.concat(s), o = Promise.resolve(e); f.length;) o = o.then(f.shift(), f.shift());
               return o
            }
            for (var l = e; r.length;) {
               var p = r.shift(),
                  d = r.shift();
               try {
                  l = p(l)
               } catch (e) {
                  d(e);
                  break
               }
            }
            try {
               o = i(l)
            } catch (e) {
               return Promise.reject(e)
            }
            for (; s.length;) o = o.then(s.shift(), s.shift());
            return o
         }, f.prototype.getUri = function(e) {
            return e = a(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
         }, n.forEach(["delete", "get", "head", "options"], (function(e) {
            f.prototype[e] = function(t, r) {
               return this.request(a(r || {}, {
                  method: e,
                  url: t,
                  data: (r || {}).data
               }))
            }
         })), n.forEach(["post", "put", "patch"], (function(e) {
            f.prototype[e] = function(t, r, n) {
               return this.request(a(n || {}, {
                  method: e,
                  url: t,
                  data: r
               }))
            }
         })), e.exports = f
      },
      946: (e, t, r) => {
         "use strict";
         var n = r(93044);

         function o() {
            this.handlers = []
         }
         o.prototype.use = function(e, t, r) {
            return this.handlers.push({
               fulfilled: e,
               rejected: t,
               synchronous: !!r && r.synchronous,
               runWhen: r ? r.runWhen : null
            }), this.handlers.length - 1
         }, o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
         }, o.prototype.forEach = function(e) {
            n.forEach(this.handlers, (function(t) {
               null !== t && e(t)
            }))
         }, e.exports = o
      },
      97948: (e, t, r) => {
         "use strict";
         var n = r(99192),
            o = r(48762);
         e.exports = function(e, t) {
            return e && !n(t) ? o(e, t) : t
         }
      },
      88618: (e, t, r) => {
         "use strict";
         var n = r(11935);
         e.exports = function(e, t, r, o, s) {
            var i = new Error(e);
            return n(i, t, r, o, s)
         }
      },
      6895: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(38556),
            s = r(98041),
            i = r(1439),
            a = r(26714);

         function u(e) {
            if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new a("canceled")
         }
         e.exports = function(e) {
            return u(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
               delete e.headers[t]
            })), (e.adapter || i.adapter)(e).then((function(t) {
               return u(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
            }), (function(t) {
               return s(t) || (u(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            }))
         }
      },
      11935: e => {
         "use strict";
         e.exports = function(e, t, r, n, o) {
            return e.config = t, r && (e.code = r), e.request = n, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
               return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code,
                  status: this.response && this.response.status ? this.response.status : null
               }
            }, e
         }
      },
      92937: (e, t, r) => {
         "use strict";
         var n = r(93044);
         e.exports = function(e, t) {
            t = t || {};
            var r = {};

            function o(e, t) {
               return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t
            }

            function s(r) {
               return n.isUndefined(t[r]) ? n.isUndefined(e[r]) ? void 0 : o(void 0, e[r]) : o(e[r], t[r])
            }

            function i(e) {
               if (!n.isUndefined(t[e])) return o(void 0, t[e])
            }

            function a(r) {
               return n.isUndefined(t[r]) ? n.isUndefined(e[r]) ? void 0 : o(void 0, e[r]) : o(void 0, t[r])
            }

            function u(r) {
               return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0
            }
            var c = {
               url: i,
               method: i,
               data: i,
               baseURL: a,
               transformRequest: a,
               transformResponse: a,
               paramsSerializer: a,
               timeout: a,
               timeoutMessage: a,
               withCredentials: a,
               adapter: a,
               responseType: a,
               xsrfCookieName: a,
               xsrfHeaderName: a,
               onUploadProgress: a,
               onDownloadProgress: a,
               decompress: a,
               maxContentLength: a,
               maxBodyLength: a,
               transport: a,
               httpAgent: a,
               httpsAgent: a,
               cancelToken: a,
               socketPath: a,
               responseEncoding: a,
               validateStatus: u
            };
            return n.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
               var t = c[e] || s,
                  o = t(e);
               n.isUndefined(o) && t !== u || (r[e] = o)
            })), r
         }
      },
      86955: (e, t, r) => {
         "use strict";
         var n = r(88618);
         e.exports = function(e, t, r) {
            var o = r.config.validateStatus;
            r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
         }
      },
      38556: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(1439);
         e.exports = function(e, t, r) {
            var s = this || o;
            return n.forEach(r, (function(r) {
               e = r.call(s, e, t)
            })), e
         }
      },
      1439: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = r(98868),
            s = r(11935),
            i = {
               "Content-Type": "application/x-www-form-urlencoded"
            };

         function a(e, t) {
            !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
         }
         var u, c = {
            transitional: {
               silentJSONParsing: !0,
               forcedJSONParsing: !0,
               clarifyTimeoutError: !1
            },
            adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (u = r(70353)), u),
            transformRequest: [function(e, t) {
               return o(t, "Accept"), o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) || t && "application/json" === t["Content-Type"] ? (a(t, "application/json"), function(e, t, r) {
                  if (n.isString(e)) try {
                     return (t || JSON.parse)(e), n.trim(e)
                  } catch (e) {
                     if ("SyntaxError" !== e.name) throw e
                  }
                  return (r || JSON.stringify)(e)
               }(e)) : e
            }],
            transformResponse: [function(e) {
               var t = this.transitional || c.transitional,
                  r = t && t.silentJSONParsing,
                  o = t && t.forcedJSONParsing,
                  i = !r && "json" === this.responseType;
               if (i || o && n.isString(e) && e.length) try {
                  return JSON.parse(e)
               } catch (e) {
                  if (i) {
                     if ("SyntaxError" === e.name) throw s(e, this, "E_JSON_PARSE");
                     throw e
                  }
               }
               return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            validateStatus: function(e) {
               return e >= 200 && e < 300
            },
            headers: {
               common: {
                  Accept: "application/json, text/plain, */*"
               }
            }
         };
         n.forEach(["delete", "get", "head"], (function(e) {
            c.headers[e] = {}
         })), n.forEach(["post", "put", "patch"], (function(e) {
            c.headers[e] = n.merge(i)
         })), e.exports = c
      },
      29241: e => {
         e.exports = {
            version: "0.22.0"
         }
      },
      73644: e => {
         "use strict";
         e.exports = function(e, t) {
            return function() {
               for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
               return e.apply(t, r)
            }
         }
      },
      68030: (e, t, r) => {
         "use strict";
         var n = r(93044);

         function o(e) {
            return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
         }
         e.exports = function(e, t, r) {
            if (!t) return e;
            var s;
            if (r) s = r(t);
            else if (n.isURLSearchParams(t)) s = t.toString();
            else {
               var i = [];
               n.forEach(t, (function(e, t) {
                  null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function(e) {
                     n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e))
                  })))
               })), s = i.join("&")
            }
            if (s) {
               var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
            }
            return e
         }
      },
      48762: e => {
         "use strict";
         e.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
         }
      },
      92233: (e, t, r) => {
         "use strict";
         var n = r(93044);
         e.exports = n.isStandardBrowserEnv() ? {
            write: function(e, t, r, o, s, i) {
               var a = [];
               a.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), n.isString(o) && a.push("path=" + o), n.isString(s) && a.push("domain=" + s), !0 === i && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(e) {
               var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
               return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
               this.write(e, "", Date.now() - 864e5)
            }
         } : {
            write: function() {},
            read: function() {
               return null
            },
            remove: function() {}
         }
      },
      99192: e => {
         "use strict";
         e.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
         }
      },
      65587: e => {
         "use strict";
         e.exports = function(e) {
            return "object" == typeof e && !0 === e.isAxiosError
         }
      },
      60842: (e, t, r) => {
         "use strict";
         var n = r(93044);
         e.exports = n.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
               r = document.createElement("a");

            function o(e) {
               var n = e;
               return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
               }
            }
            return e = o(window.location.href),
               function(t) {
                  var r = n.isString(t) ? o(t) : t;
                  return r.protocol === e.protocol && r.host === e.host
               }
         }() : function() {
            return !0
         }
      },
      98868: (e, t, r) => {
         "use strict";
         var n = r(93044);
         e.exports = function(e, t) {
            n.forEach(e, (function(r, n) {
               n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
            }))
         }
      },
      51875: (e, t, r) => {
         "use strict";
         var n = r(93044),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
         e.exports = function(e) {
            var t, r, s, i = {};
            return e ? (n.forEach(e.split("\n"), (function(e) {
               if (s = e.indexOf(":"), t = n.trim(e.substr(0, s)).toLowerCase(), r = n.trim(e.substr(s + 1)), t) {
                  if (i[t] && o.indexOf(t) >= 0) return;
                  i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([r]) : i[t] ? i[t] + ", " + r : r
               }
            })), i) : i
         }
      },
      70783: e => {
         "use strict";
         e.exports = function(e) {
            return function(t) {
               return e.apply(null, t)
            }
         }
      },
      17525: (e, t, r) => {
         "use strict";
         var n = r(29241).version,
            o = {};
         ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
            o[e] = function(r) {
               return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
            }
         }));
         var s = {};
         o.transitional = function(e, t, r) {
            function o(e, t) {
               return "[Axios v" + n + "] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
            }
            return function(r, n, i) {
               if (!1 === e) throw new Error(o(n, " has been removed" + (t ? " in " + t : "")));
               return t && !s[n] && (s[n] = !0, console.warn(o(n, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, n, i)
            }
         }, e.exports = {
            assertOptions: function(e, t, r) {
               if ("object" != typeof e) throw new TypeError("options must be an object");
               for (var n = Object.keys(e), o = n.length; o-- > 0;) {
                  var s = n[o],
                     i = t[s];
                  if (i) {
                     var a = e[s],
                        u = void 0 === a || i(a, s, e);
                     if (!0 !== u) throw new TypeError("option " + s + " must be " + u)
                  } else if (!0 !== r) throw Error("Unknown option " + s)
               }
            },
            validators: o
         }
      },
      93044: (e, t, r) => {
         "use strict";
         var n = r(73644),
            o = Object.prototype.toString;

         function s(e) {
            return "[object Array]" === o.call(e)
         }

         function i(e) {
            return void 0 === e
         }

         function a(e) {
            return null !== e && "object" == typeof e
         }

         function u(e) {
            if ("[object Object]" !== o.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
         }

         function c(e) {
            return "[object Function]" === o.call(e)
         }

         function f(e, t) {
            if (null != e)
               if ("object" != typeof e && (e = [e]), s(e))
                  for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
               else
                  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
         }
         e.exports = {
            isArray: s,
            isArrayBuffer: function(e) {
               return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function(e) {
               return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function(e) {
               return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
               return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
               return "string" == typeof e
            },
            isNumber: function(e) {
               return "number" == typeof e
            },
            isObject: a,
            isPlainObject: u,
            isUndefined: i,
            isDate: function(e) {
               return "[object Date]" === o.call(e)
            },
            isFile: function(e) {
               return "[object File]" === o.call(e)
            },
            isBlob: function(e) {
               return "[object Blob]" === o.call(e)
            },
            isFunction: c,
            isStream: function(e) {
               return a(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
               return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
               return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: f,
            merge: function e() {
               var t = {};

               function r(r, n) {
                  u(t[n]) && u(r) ? t[n] = e(t[n], r) : u(r) ? t[n] = e({}, r) : s(r) ? t[n] = r.slice() : t[n] = r
               }
               for (var n = 0, o = arguments.length; n < o; n++) f(arguments[n], r);
               return t
            },
            extend: function(e, t, r) {
               return f(t, (function(t, o) {
                  e[o] = r && "function" == typeof t ? n(t, r) : t
               })), e
            },
            trim: function(e) {
               return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            },
            stripBOM: function(e) {
               return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
            }
         }
      }
   }
]);