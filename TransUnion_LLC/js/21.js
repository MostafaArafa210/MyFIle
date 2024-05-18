webpackJsonp([87], {
    0: function(e, a, t) {
       e.exports = t(137)
    },
    137: function(e, a, t) {
       "use strict";
 
       function l(e) {
          return e && e.__esModule ? e : {
             default: e
          }
       }
       var s = t(3),
          n = l(s),
          i = t(5),
          o = (t(4), t(9));
       if (n.default.isEmptyObject(ui.userInfo)) {
          var d = (0, n.default)("a.login");
          (0, n.default)("header a.logout").replaceWith(d), d.show(), (0, n.default)("div.mobile-menu nav.primary-nav ul.nav-list li:nth-child(2)").removeClass("member-login-mobile")
       }(0, n.default)("#Info-Contact, #Info-Legal").hide(), (0, n.default)("#MainTabs").on("click", "li", function() {
          (0, n.default)(this).addClass("-is-active").siblings("li").removeClass("-is-active"), (0, n.default)("#Info-Contact,#supportFAQs, #Info-Legal").hide();
          var e = (0, n.default)(this).attr("rel");
          "Contact" == e ? ((0, n.default)("#Info-Contact").show(), (0, n.default)("#support-contact").attr("aria-selected", "true"), (0, n.default)("#support-faq").attr("aria-selected", "false"), (0, n.default)("#support-legal").attr("aria-selected", "false")) : "FAQs" == e ? ((0, n.default)("#supportFAQs").show(), (0, n.default)("#support-faq").attr("aria-selected", "true"), (0, n.default)("#support-contact").attr("aria-selected", "false"), (0, n.default)("#support-legal").attr("aria-selected", "false")) : "Legal" == e && ((0, n.default)("#Info-Legal").show(), (0, n.default)("#Info-Legal article").show(), (0, n.default)("#support-legal").attr("aria-selected", "true"), (0, n.default)("#support-contact").attr("aria-selected", "false"), (0, n.default)("#support-faq").attr("aria-selected", "false"))
       }), (0, n.default)(".support-nav-link").addClass("is-active"), (0, n.default)(".support-nav-link ul.sub-menu li:nth-child(1)").addClass("active-subtab");
       var u = ["security", "privacy", "terms", "agreement", "mobile"],
          c = (0, i.getQueryStringObj)();
       if (c.panel) {
          var r = c.panel;
          (0, n.default)("#Info-Contact,#supportFAQs, #Info-Legal").hide(), "Contact" == r ? ((0, n.default)("#MainTabs li:nth-child(1)").addClass("-is-active").siblings("li").removeClass("-is-active"), (0, n.default)("#Info-Contact").show()) : "FAQs" == r || "faq" == r ? ((0, n.default)("#MainTabs li:nth-child(2)").addClass("-is-active").siblings("li").removeClass("-is-active"), (0, n.default)("#supportFAQs").show()) : "Legal" == r ? ((0, n.default)("#MainTabs li:nth-child(3)").addClass("-is-active").siblings("li").removeClass("-is-active"), (0, n.default)("#Info-Legal").show(), (0, n.default)("#Info-Legal article").show()) : u.indexOf(r) > -1 && ((0, n.default)("#MainTabs li:nth-child(3)").addClass("-is-active").siblings("li").removeClass("-is-active"), (0, n.default)("#Info-Legal").show(), (0, n.default)("#Info-Legal article").show(), (0, n.default)(".accordion-item.active h2,#legal-info-" + r).trigger("click"))
       }(0, n.default)(document).ready(function() {
          function e() {
             (0, n.default)("#Info-FAQs li.credit-score-hide") && ((0, n.default)("#Info-FAQs li a").attr("aria-current", ""), (0, n.default)("#Info-FAQs li a").attr("aria-selected", "false")), setTimeout(function() {
                (0, n.default)("#Info-FAQs li a.ga-track-click.selected") && ((0, n.default)("#Info-FAQs li a.selected").attr("aria-current", "location"), (0, n.default)("#Info-FAQs li a.selected").attr("aria-selected", "true"))
             }, 200)
          }
          var a = void 0;
          a = document.body.className.match("user-logged-in") ? "/dss/dashboard.page" : "/dss/login.page", n.default.ajax({
             url: a,
             success: function(a) {
                a = (0, n.default)(a).find("#Info-FAQs"), a = a.prepend("<h1>FAQ</h1>"), a.find("#faqBtn").remove(), (0, n.default)("#supportFAQs").html(a);
                for (var t = document.getElementsByClassName("switch"), l = (document.getElementsByClassName("credit-score-hide"), function(e) {
                      if (t[e].closest("#Info-FAQs")) {
                         var a = void 0,
                            l = t[e].innerHTML;
                         a = t[e].parentNode.classList.contains("active") ? '<button aria-expanded="true"  aria-current="location" title="Collapse" type="button" class="switch-signal expandable button-angles"><i class="icon -angle-up"></i></button>' : '<button aria-expanded="false" aria-current="false" title="Expander" type="button" class="switch-signal expandable button-angles"><i class="icon -angle-down"></i></button>', t[e].innerHTML = a + l, t[e].addEventListener("click", function() {
                            t[e].parentNode.classList.contains("active") ? (t[e].parentNode.classList.remove("active"), a = '<button aria-expanded="false" id="expandBtnSupport' + e + '" aria-current="false" title="Expander" type="button" class="switch-signal expandable button-angles"><i class="icon -angle-down"></i></button>') : (t[e].parentNode.classList.add("active"), a = '<button aria-expanded="true" id="expandBtnSupport' + e + '" aria-current="location"  title="Collapse" type="button" class="switch-signal expandable button-angles"><i class="icon -angle-up"></i></button>'), t[e].innerHTML = a + l, document.getElementById("expandBtnSupport" + e).focus()
                         })
                      }
                   }), s = 0; s < t.length; s++) l(s);
                e(), (0, i.hasRcMenu)(), document.querySelectorAll('a[target="_blank"]').forEach(function(e) {
                   (0, o.addNoOpener)(e), (0, o.addNewTabMessage)(e), (0, o.addExternalLinkIcon)(e)
                })
             }
          }), n.default.ajax({
             url: "/dss/termsOfUse.page",
             success: function(e) {
                e = (0, n.default)(e).find("#TOU"), (0, n.default)("#TermsOfUse").html(e)
             }
          }), (0, n.default)(document).on("click", "#ccpaPhoneLink", function(e) {
             (0, n.default)("#ccpaPhoneContainer").slideDown(), (0, n.default)("#ccpaPhoneLink").parent().hide(), e.preventDefault()
          })
       }), (0, n.default)(document).ready(function() {
          n.default.isEmptyObject(ui.userInfo) && (0, n.default)(".marginUpdateSupport").css("margin-top", "0px"), document.body.className.match("user-logged-in") && (0, o.showEmailVerifyBanner)()
       }), n.default.isEmptyObject(ui.userInfo) && (0, n.default)(".support-content").hide()
    }
 });