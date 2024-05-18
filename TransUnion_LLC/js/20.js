webpackJsonp([60], {
    0: function(e, t, s) {
       e.exports = s(109)
    },
    109: function(e, t, s) {
       "use strict";
 
       function o(e) {
          return e && e.__esModule ? e : {
             default: e
          }
       }
 
       function a() {
          "LOGOUT" != c && "login.page" == l || (sessionStorage.clear(), localStorage.removeItem("getGuestValue"), localStorage.removeItem("ccpaVerification"))
       }
       var r = s(3),
          n = o(r),
          i = s(5),
          u = s(31);
       document.cookie = "sessionHide = '';path = '';expires = Thu, 01-Jan-1970 00:00:01 GMT", document.cookie = "readSessionHide = '';path = '';expires = Thu, 01-Jan-1970 00:00:01 GMT", (0, n.default)("form").validation("addRules", {
          "tl.username": {
             hint: "This may be your email address",
             required: "Please enter the username on your account.",
             format: "Please try again using only numbers, letters or one of the following characters: underscore (_), dash (-), â€œatâ€ sign (@), period (.), and asterisk (*).",
             minLength: "Your username must be at least 5 characters."
          },
          "tl.password": {
             regex: u.oldPasswordLength,
             required: "Please enter the password associated with your account.",
             min: 8,
             minLength: "Please enter 8-64 characters."
          }
       });
       var d = sessionStorage.getItem("dest"),
          c = (0, i.getParameterByName)("action"),
          l = window.location.pathname.split("/"),
          m = window.location.hash,
          g = l.pop(),
          p = ["freezeStatus.page", "dispute.page", "fraudAlert.page", "disclosure.page", "creditScore.page"];
       a();
       var h = void 0;
       h = null !== d ? d : /dispute/i.test(g) ? "dispute" : p.includes(g) ? g.split(".")[[0]] : (0, i.getParameterByName)("dest"), null !== h && sessionStorage.setItem("dest", h), "" !== m && sessionStorage.setItem("hash", m), "cpa/tuData" === h && (document.getElementById("ccpa").classList.remove("hidden"), sessionStorage.setItem("ccpaSession", "true"), sessionStorage.setItem("ccpaVerificationUser", "true")), "creditScore" === h && sessionStorage.setItem("scoreSession", "true");
       var f = void 0;
       ui.offers.length > 0 && (f = ui.offers[0].code), window.location.href.includes("source=LPBot") && sessionStorage.setItem("isLoginRequestFromLPBot", "true"), (0, n.default)("document").ready(function() {
          if ("FRZ30011" === f) {
             document.getElementById("welcome").style.display = "block", document.getElementById("whatCanIDo").innerHTML = "Manage a credit freeze or fraud alert, submit a dispute request or check dispute results, add a consumer statement to your credit report, or request a personal credit report disclosure.", document.getElementById("whatCanIDoTip").innerHTML = "<p>If you recently updated a TransUnion credit freeze or fraud alert online, or if you requested a dispute online, you should have an existing username and password that will work on this site.</p>";
             for (var e = document.getElementsByClassName("login-row"), t = 0; t < e.length; t++) t > 0 && (e[t].classList.contains("covid-statement") || e[t].classList.remove("not-yet-login"))
          }
       })
    }
 });