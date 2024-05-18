webpackJsonp([69], {
    0: function(e, t, a) {
       e.exports = a(119)
    },
    119: function(e, t, a) {
       "use strict";
 
       function r(e) {
          return e && e.__esModule ? e : {
             default: e
          }
       }
       var s = a(3),
          n = r(s),
          o = a(97),
          c = r(o),
          u = a(6),
          l = (r(u), a(5)),
          i = a(31),
          d = a(34),
          f = a(4),
          m = ((0, n.default)("#cc-group"), (0, n.default)("#gc-group"), ""),
          p = sessionStorage.getItem("guest"),
          g = sessionStorage.getItem("stepOne"),
          v = document.referrer.split("?")[1];
       v = v ? v.replace(/^/, "?") : "";
       var h = h = (0, n.default)('input[name="requestToken"]').parent("form");
       "true" === p && (m = "guest"), "true" !== g && (sessionStorage.setItem("stepTwoError", "true"), window.location = "/dss/orderStep1_form.page"), void 0 != reqpar["request-params"]["tl.trustevSessionId"] && nid("identify", reqpar["request-params"]["tl.trustevSessionId"]), "" == (0, n.default)('[name="tl.cc-street"]').val() && (0, n.default)('[name="tl.cc-street"]').val(c.default.get("address")), "" == (0, n.default)('[name="tl.cc-city"]').val() && (0, n.default)('[name="tl.cc-city"]').val(c.default.get("city")), "" == (0, n.default)('[name="tl.cc-state"]').val() && (0, n.default)('[name="tl.cc-state"]').val(c.default.get("state")), "" == (0, n.default)('[name="tl.cc-zip-code"]').val() && (0, n.default)('[name="tl.cc-zip-code"]').val(c.default.get("zip")), h.on("submit", function() {
          nid("setCheckpoint", "orderStep2_form_complete");
          var e = (0, n.default)('input[name="tl.password"]').val(),
             t = (0, d.getPasswordStrengthInfo)(e);
          (0, f.capturePwdScore)(t.score)
       });
       var w = "undefined" != typeof ui.customOffers && ui.customOffers.length > 0 ? ui.customOffers[0] : ui.offers[0],
          y = (0, n.default)(".section-title");
       (0, n.default)(".offer-copy");
       if (w) {
          "" === m && (m = w.code);
          var b = ((0, l.formatCurrency)(w.components[0].bundleItems[0].price.billing / 100, !0), c.default.get("first_name"), {
             default: "Create a free TransUnion ServiceÂ Center account to: submit a dispute, request a credit report, manage a credit freeze or fraud alert, or add a consumer statement.",
             guest: "Continue to make a one-time data privacy request.",
             acr: "Let's set up your TransUnion ServiceÂ Center user account."
          });
          (0, n.default)(".gift-code-toggle"), (0, n.default)(".cancel-copy");
          if ("acr" === (0, l.queryParams)(v).score)(0, n.default)(".acr-banner").removeClass("acr-banner--hidden"), y.html(b.acr), (0, n.default)(".section-title").css("padding-top", "10px");
          else switch (m) {
             case "guest":
                y.html(b.guest);
                break;
             default:
                y.html(b.default)
          }
       } else console.error("Cannot find offer information!"), y.text("No offer information returned");
       (0, n.default)("form").validation("addRules", {
          "tl.password": {
             regex: i.newPasswordLength,
             required: "Please create a password that is 12-64 characters in length. Remember, your password will be case-sensitive.",
             min: 12,
             minLength: "Please create a password that is 12-64 characters in length. Remember, your password will be case-sensitive.",
             match: "The passwords you entered do not match."
          },
          "tl.username": {
             hint: "Username can contain the following special characters: underscore, dash, at symbol, period, asterisk."
          }
       })
    }
 });