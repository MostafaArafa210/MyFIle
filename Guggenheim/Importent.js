! function() {
   "use strict";

   function L(e) {
      var l, c, d, t, o, u, p, h, f, m, g, y, i, w, v, b, r, n, k, P, O, C, s, a;

      function x(e, t) {
         if (!a) return !1;
         if (e = S(e), /\.NET ?(CLR )?[0-9.]+[A-Z]?/g.test(i))
            for (var o, r, n = /\.NET ?(CLR )?([0-9.]+)([A-Z])?/g; null !== (o = n.exec(i));)
               if (0 === (r = e.compare(o[2]))) {
                  if (!t) return !0;
                  if (o[3] === t) return !0
               } else if (r < 0) return !0;
         switch (C.version) {
            case "7":
               return e.compare("3.5.1") <= 0;
            case "8":
               return e.compare("4.5.0") <= 0;
            case "8.1":
               return e.compare("4.5.1") <= 0;
            case "10":
               return e.compare("4.6.0") <= 0;
            default:
               return !1
         }
      }

      function S(e) {
         for (var t = e.replace(/[^0-9.]/g, "").match(/[0-9]*\.|[0-9]+/g), o = [], r = 0; r < t.length; r++) {
            var n = t[r];
            "." !== n && o.push(n)
         }
         return (e = {
            major: +o[0] || 0,
            minor: +o[1] || 0,
            patch: +o[2] || 0,
            build: +o[3] || 0
         }).isEmpty = !(e.major || e.minor || e.patch || e.build), e.parsed = [e.major, e.minor, e.patch, e.build], e.text = e.parsed.join("."), e.compare = B, e
      }

      function B(e) {
         "string" == typeof e && (e = S(e));
         for (var t = 0; t < 4; t++)
            if (this.parsed[t] !== e.parsed[t]) return this.parsed[t] > e.parsed[t] ? 1 : -1;
         return 0
      }

      function j(e, t) {
         var o = c.renderAttributes(e),
            r = c.renderSkills(e);
         delete e.attributes, delete e.skills;
         var n = "popup=" + (t ? "1" : "0") + "&c2cjs=1" + L.encodeURLParameters(e) + o + r;
         return _() + "/api/start_session?" + n
      }

      function G(e) {
         window.location.href = j(e, !1)
      }

      function R(e) {
         ! function(e) {
            var t, o = !1,
               r = ["rep", "issue", "sessionKey"];
            for (t in r)
               if (r.hasOwnProperty(t) && e.hasOwnProperty(r[t])) {
                  if (o) throw BG.exceptionFactory("Only one start method is allowed in the options passed in to start()");
                  o = !0
               } if (!o) throw BG.exceptionFactory("A start method is required in the options object passed to start()");
            e.hasOwnProperty("debugMode") || (e.debugMode = !1)
         }(e);
         var o = {};
         if (e.hasOwnProperty("rep")) {
            if (!e.rep.hasOwnProperty("id") || !e.rep.hasOwnProperty("name") || e.rep.hasOwnProperty("id") && "" === e.rep.id.toString().trim() || e.rep.hasOwnProperty("name") && "" === e.rep.name.toString().trim()) throw BG.exceptionFactory("Both id and name are required parameters when starting a session with a rep.");
            o = {
               id: e.rep.id,
               name: e.rep.name
            }
         } else if (e.hasOwnProperty("issue")) {
            if (!e.issue) throw BG.exceptionFactory("'issue' option is null or undefined");
            if (L.isFormElement(e.issue) ? (o = function(e) {
                  var o = {},
                     t = l(e).serializeArray();
                  return l.each(t, function(e, t) {
                     o[t.name] = t.value
                  }), o
               }(e.issue)).hasOwnProperty("skills") && (o.skills = o.skills.split(",").concat(e.skills), o.skills = l.grep(o.skills, function(e, t) {
                  return l.inArray(e, o.skills) === t
               }), e.skills = o.skills, delete o.skills) : o = BG.clone(e.issue), !o.hasOwnProperty("id") && !o.hasOwnProperty("codeName")) throw BG.exceptionFactory("No issue id was supplied in the options passed to start()");
            if (o.hasOwnProperty("id") && o.hasOwnProperty("codeName")) throw BG.exceptionFactory("Only id or codeName may be provided, not both");
            (o = BG.remapIssueSessionParams(o)).issue_menu = "1"
         } else e.hasOwnProperty("sessionKey") && (o = {
            short_key: e.sessionKey,
            skipconfirm: 1
         });
         if (e.hasOwnProperty("attributes") && e.attributes.hasOwnProperty("externalKey") && (e.attributes.external_key = e.attributes.externalKey, delete e.attributes.externalKey), o.locale = e.locale || null, o.chat_locale = e.chat_locale || e.chatLocale || null, e.hasOwnProperty("timezone_offset") ? o.timezone_offset = e.timezone_offset : o.timezone_offset = -1 * (new Date).getTimezoneOffset(), e.hasOwnProperty("customer"))
            for (var t in e.customer) o["customer." + t] = e.customer[t];
         return c.configureOptions(e), o.attributes = e.attributes, o.skills = e.skills, "iPad" === n.getDevice().model && (o.platform = "ios"), o
      }

      function F() {
         if (null === l) throw BG.exceptionFactory("JQuery is not loaded, cannot use dialog box");
         null === f && (f = l("<div />").appendTo("body"))
      }

      function _() {
         return d.getProtocol() + "//" + t
      }

      function I(e) {
         return l.extend(o || r ? {
            dataType: "json",
            type: "POST"
         } : {
            dataType: "jsonp",
            jsonp: "jsonp"
         }, e)
      }
      l = null, c = this, t = (d = e).getHost(), n = e.uaParser, C = n.getOS(), a = "Windows" === C.name, w = "iOS" === C.name, v = "Android" === C.name, i = navigator.userAgent, s = n.getBrowser(), O = s.major ? parseInt(s.major, 10) : null, k = "IE" === s.name, P = "Edge" === s.name, y = g = !(m = f = h = p = u = null), o = t === window.location.hostname, r = "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest, b = !0, this.setJQuery = function(e) {
         ! function(s) {
            s.fn.extend({
               bgDialog: function(e) {
                  var t = this;
                  if ("destroy" === e) return t.$dialogRoot.remove(), t.$modalOverlay.remove(), k && 6 === O && s("select.ie6-zindex-fix").show().removeClass("ie6-zindex-fix"), this;
                  if (0 !== this.parents(".bg-dialog-root").length) return this;
                  var o = this.$modalOverlay = s("<div/>").addClass("bg-modal-dialog-overlay").insertBefore(this);
                  e.overlay && e.overlay.css && o.css(e.overlay.css);
                  var r = s("<div/>").addClass("bg-dialog-root").attr({
                     tabindex: "-1",
                     role: "dialog"
                  });
                  e.id && r.attr("id", e.id), e.css && r.css(e.css);
                  var n = s("<div/>").addClass("bg-dialog-content"),
                     i = s(window);
                  return r.append(n), this.wrap(r), r = this.$dialogRoot = this.parents(".bg-dialog-root"), k && (6 === O && (o.addClass("ie6").css({
                     width: s(document).innerWidth() + 10,
                     height: s(document).innerHeight() + 10
                  }), s("select:visible").addClass("ie6-zindex-fix").hide()), O <= 8 ? (r.addClass("ie-lte8"), setTimeout(function() {
                     var e = i.innerHeight() / 2 - r.height() / 2,
                        t = i.innerWidth() / 2 - r.width() / 2;
                     r.css({
                        top: e + "px",
                        left: t + "px"
                     })
                  })) : O <= 9 && r.addClass("ie-lte9")), this
               },
               bgProgressBar: function(e) {
                  var t;
                  if (this.hasClass("bg-progress-bar") ? t = this.find(".bg-progress-bar-value") : (t = s("<div/>").addClass("bg-progress-bar-value"), this.addClass("bg-progress-bar").attr("role", "progressbar"), this.append(t)), e && void 0 !== e.value)
                     if (!1 === e.value) t.append(s("<div/>").addClass("bg-progress-bar-indeterminate-overlay")).css("width", "100%");
                     else {
                        this.find(".bg-progress-bar-indeterminate-overlay").remove();
                        var o = parseInt(e.value, 10);
                        isFinite(o) && (o = Math.max(0, Math.min(o, 100)), t.css("width", o + "%"))
                     } return this
               }
            })
         }(l = e)
      }, this.startBrowserSession = function(e) {
         BG.log("Starting browser session from inside core"), this.startSession(e, !0)
      }, this.startFullSession = function(e) {
         BG.log("Starting full session from inside core"), this.startSession(e, !1)
      }, this.configureOptions = function(e) {
         e.hasOwnProperty("attributes") || (e.attributes = {}), e.hasOwnProperty("skills") || (e.skills = []), e.hasOwnProperty("external_key") && (e.attributes.external_key = e.external_key)
      }, this.renderAttributes = function(e) {
         var t = "";
         for (var o in e.attributes) t += "&" + encodeURIComponent("session.custom." + o) + "=" + encodeURIComponent(e.attributes[o]);
         return t
      }, this.renderSkills = function(e) {
         var t = "";
         return 0 < e.skills.length && (t = "&session.skills=" + encodeURIComponent(e.skills.join(","))), t
      }, this.startSession = function(i, s) {
         var e = R(i);
         if (m = d.getResources().jQueryProgressBarColor, i.hasOwnProperty("uiOptions")) {
            var t = i.uiOptions;
            t.hasOwnProperty("jQueryOptions") && t.jQueryOptions.hasOwnProperty("jQueryProgressBarColor") && (m = i.uiOptions.jQueryOptions.jQueryProgressBarColor), t.hasOwnProperty("closeOnFinish") && (g = t.closeOnFinish), t.hasOwnProperty("allowDialogClose") && (y = t.allowDialogClose), t.hasOwnProperty("fallbackToFullWindow") && (b = i.uiOptions.fallbackToFullWindow)
         }
         var a = function() {};
         i.hasOwnProperty("sessionStartFailed") && "function" == typeof i.sessionStartFailed && (a = i.sessionStartFailed), F(), null === h && (h = l("<div />", {
               id: "bomgarProgressBar"
            })), h.bgProgressBar({
               value: 0
            }), h.find(".bg-progress-bar-value").css("background-color", m), h.show(), null === u && (u = l("<div />").css({
               padding: "10px",
               "text-align": "center",
               margin: "0px auto",
               position: "relative",
               width: "500px",
               overflow: "hidden"
            }).append(h)), null === p && (p = l("<div />").addClass("bg-instructions-container")),
            function(e) {
               if (null === l) throw BG.exceptionFactory("JQuery is not loaded");
               F(), f.empty().bgDialog({
                  id: "bomgarDialog",
                  css: {
                     width: "680px",
                     height: "400px"
                  }
               });
               var t = l(".bg-modal-dialog-overlay");
               t.one("click", function() {
                  y && c.closeDialog(0)
               }), y || (document.body.style.overflow = "hidden");
               t.addClass("opaque"), f.append(e)
            }(l("<div />").css({
               height: "100%",
               width: "100%"
            }).append(u).append(p)), c.setProgressControls(null);
         var o = this.renderAttributes(i),
            r = this.renderSkills(i),
            n = {
               downloadLink: _() + "/api/start_session?" + (s ? "cobrowse=1" : "") + L.encodeURLParameters(e) + o + r + "&download=1",
               debug: i.debugMode,
               disableClickonce: i.disableClickonce,
               enableEdgeClickonce: i.enableEdgeClickonce,
               sessionParameters: e,
               fallbackURL: _() + "/download_client_connector?api=1" + (s ? "&cobrowse=1" : "") + "&g-public-errorType=minimal_html" + (v || w ? "" : "&minimalInstructions=1") + L.encodeURLParameters(e) + o
            };
         return i.hasOwnProperty("skipAuthenticationConfirm") ? s || !i.hasOwnProperty("sessionKey") || i.hasOwnProperty("skipConfirm") ? i.hasOwnProperty("rep") && !i.hasOwnProperty("skipConfirm") ? (l.ajax(I({
            url: _() + "/portal/check-rep",
            data: {
               id: i.rep.id,
               name: i.rep.name
            }
         })).done(function(e) {
            e.error ? (p.html(e.msg), h.hide(), a()) : (i.skipConfirm = !0, c.startSession(i, s))
         }), !1) : void
         function(e, t) {
            if (!e.disableClickonce && (k || P && (O < 46 || e.enableEdgeClickonce)) && "2000" !== C.version) {
               if (x("4.5.0")) return e.clickonceVersion = "4.5", t.clickonce(e);
               if (x("4.0.0", "E")) return e.clickonceVersion = "4.0", t.clickonce(e)
            }
            t.javascript(e)
         }(n, {
            javascript: c.downloadWithJavascript,
            clickonce: c.downloadWithClickOnce
         }): (l.ajax(I({
            url: _() + "/portal/access-key-confirmation",
            data: {
               accessKey: i.sessionKey
            }
         })).done(function(e) {
            if (e.error) p.html(e.msg), h.hide(), a();
            else if (e.confirm) {
               var t, o, r;
               t = l("<p/>").text(e.confirmationMessage), o = l("<button/>").prop("id", "confirmKey").text(e.yes).one("click", function() {
                  i.skipConfirm = !0, c.startSession(i, s)
               }), r = l("<button/>").prop("id", "cancelKey").text(e.cancel).one("click", function() {
                  c.closeDialog(0)
               });
               var n = l("<div/>").css({
                  textAlign: "center"
               }).append(t, o, r);
               p.empty().append(n)
            } else i.skipConfirm = !0, c.startSession(i, s)
         }), !1): (BG.ensureAuthenticated(function(e) {
            e && (i.skipAuthenticationConfirm = !0, c.startSession(i, s))
         }), !1)
      }, this.downloadWithJavascript = function(e) {
         BG.log("Using javascript delivery"), L.strace();
         var o = "object" == typeof e ? e.fallbackURL : e;
         BG.log("Setting window location to " + o + "&download=1"), e.sessionParameters["g-public-errorType"] = "json", l.ajax(I({
            url: _() + "/portal/instructions/customer",
            data: e.sessionParameters,
            beforeSend: function(e, t) {
               BG.log("Setting url of instructions to " + t.url)
            }
         })).done(function(e) {
            if (h.hide(), e.error) p.html(e.errorMessage);
            else if (v || w ? !1 === b && f.remove() : (p.html(e.instructions), l("#fallbackLink").attr("href", o + "&download=1")), !k) {
               var t = v || w ? "" : "&download=1";
               window.location = o + t
            }
         }), k && 9 <= O && (window.location = o + "&download=1")
      }, this.downloadWithClickOnce = function(r) {
         l.ajax({
            url: _() + "/portal/instructions/clickonce",
            data: r.sessionParameters
         }).done(function(e) {
            h.hide(), p.html(e.instructions), l("#clickOnceFallbackLink").one("click", function() {
               return c.downloadWithJavascript(r), !1
            });
            var t = _() + "/clickonce/" + r.clickonceVersion + "/CustomerClientStarter.application?source=" + encodeURIComponent(r.fallbackURL + "&download=1") + "&useragent=" + encodeURIComponent(i) + "&_cachebuster=" + (new Date).getTime(),
               o = l("#clickonceAnchor");
            o.attr("href", t).on("click", function() {
               setTimeout(function() {
                  var e = o.parent();
                  e.html(e.text()), e.css("color", "gray")
               }, 250)
            })
         })
      }, this.setProgressControls = function(e) {
         null === e ? (BG.log("Setting up indeterminate progress bar"), h.bgProgressBar({
            value: !1
         })) : (BG.log("Setting up determinate progress bar"), 100 < e && (e = 100), e < 0 && (e = 0), h.bgProgressBar({
            value: e
         }))
      }, this.startChatSession = function(e, t) {
         BG.log("Starting chat session from inside core"),
            function(e, t, o) {
               var r, n = 0;

               function i() {
                  return !(!o || o.closed || 0 === o.outerHeight) && (o.location.href = j(e, !0), !0)
               }
               o || !t ? i() || (r = setInterval(function() {
                  if (10 <= n) {
                     clearInterval(r);
                     try {
                        o.close()
                     } catch (e) {}
                     t && G(e)
                  }
                  n++, i() && clearInterval(r)
               }, 100)) : G(e)
            }(R(e), b, t)
      }, this.closeDialog = function() {
         null !== f && (g ? (f.html(""), f.bgDialog("destroy"), f = null) : (l("#sessionInstructions").hide(), l("#sessionStartedDisplay").show()))
      }
   }
   L.isFormElement = function(e) {
      return !!e && !!e.tagName && "form" === e.tagName.toLowerCase()
   }, L.strace = function() {
      if ("function" == typeof printStackTrace && "undefined" != typeof console && null !== console && "function" == typeof console.info) {
         var e = 0,
            t = printStackTrace();
         for (var o in console.info("Stack trace:"), t) e < 4 ? e++ : console.info(t[o])
      }
   }, L.encodeURLParameters = function(e) {
      var t, o = "";
      for (t in e) e.hasOwnProperty(t) && "object" != typeof e[t] && (o += "&" + encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
      return o
   }, BG.createCore = function(e) {
      return BG.core = new L(e), BG.core
   }
}();
//# sourceMappingURL=core-min.js.map