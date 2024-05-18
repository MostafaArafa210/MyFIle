webpackJsonp([68], {
    0: function(e, t, a) {
       e.exports = a(118)
    },
    118: function(e, t, a) {
       "use strict";
 
       function n(e) {
          return e && e.__esModule ? e : {
             default: e
          }
       }
 
       function l(e) {
          r.default.ajax({
             url: "assets/ajax/serviceData.page",
             type: "GET",
             dataType: "json",
             data: {
                requestToken: encodeURI(CSRFtoken),
                action: "GET_OFFER",
                DestinationPage: "x"
             },
             success: function(e) {
                location.reload()
             },
             error: function(e) {
                console.warn("[AJAX Failed] " + e.status + ": " + e.statusText)
             }
          })
       }
       var o = a(3),
          r = n(o),
          s = a(97),
          i = n(s),
          u = a(6),
          d = n(u),
          f = a(5),
          c = c = (0, r.default)('input[name="requestToken"]').parent("form"),
          m = i.default.get("cacheData") || null;
       i.default.set("queryString", window.location.search);
       var p = sessionStorage.getItem("stepTwoError"),
          v = (0, r.default)(".-invalid-offer-content");
       sessionStorage.removeItem("stepOne");
       var h = "";
       "true" === p && ((0, r.default)(v).show(), v.html('<i class="icon -info"></i><br><br><h4>Your session expired! Please provide required information to complete your account setup.</h4>')), (0, r.default)(document).on("change", ".opt-in-radio", function() {
          "false" == (0, r.default)(this).val() ? ((0, r.default)(".opt-in-emails").val("false"), (0, r.default)(".opt-in-newsletter").val("false")) : ((0, r.default)(".opt-in-emails").val("true"), (0, r.default)(".opt-in-newsletter").val("true"))
       });
       var y = (0, f.getParameterByName)("isGuest"),
          g = sessionStorage.getItem("guest");
       if ("true" === y || "true" === g) {
          sessionStorage.setItem("dest", "cpa/tuData"), h = "guest", sessionStorage.setItem("guest", "true"), (0, r.default)('input[name="DestinationPage"]').val("orderStep2Guest_form"), document.getElementById("email-opt-in-no").checked = !0, (0, r.default)('input[name="tl.opt-in-emails"]').val("false"), (0, r.default)('input[name="tl.opt-in-newsletter"]').val("false");
          var b = document.getElementById("receiveEmails");
          b.style.display = "none", (0, r.default)(".nav-item:nth-child(2) h3").text("Accept and Continue"), (0, r.default)("#whatYouCanDoMobile").hide(), (0, r.default)("#whatYouCanDo").hide(), (0, r.default)("#yourRights").hide(), (0, r.default)("#yourRightsMob").hide()
       }
       var S = (0, f.getParameterByName)("dest");
       null !== S && sessionStorage.setItem("dest", S), "creditScore" === S && sessionStorage.setItem("scoreSession", "true"), c.on("validated", function() {
          d.default.isNull(m) && (m = {
             "tl.first-name": (0, r.default)('[name="tl.first-name"]').val(),
             "tl.middle-name": (0, r.default)('[name="tl.middle-name"]').val(),
             "tl.last-name": (0, r.default)('[name="tl.last-name"]').val(),
             "tl.curr-street": (0, r.default)('[name="tl.curr-street"]').val(),
             "tl.curr-city": (0, r.default)('[name="tl.curr-city"]').val(),
             "tl.curr-state": (0, r.default)('[name="tl.curr-state"]').val(),
             "tl.curr-zip-code": (0, r.default)('[name="tl.curr-zip-code"]').val(),
             "tl.prev-street": (0, r.default)('[name="tl.prev-street"]').val(),
             "tl.prev-city": (0, r.default)('[name="tl.prev-city"]').val(),
             "tl.prev-state": (0, r.default)('[name="tl.prev-state"]').val(),
             "tl.prev-zip-code": (0, r.default)('[name="tl.prev-zip-code"]').val(),
             "tl.email-address": (0, r.default)('[name="tl.email-address"]').val(),
             month: (0, r.default)('[name="month"]').val(),
             day: (0, r.default)('[name="day"]').val(),
             year: (0, r.default)('[name="year"]').val()
          }, i.default.set("cacheData", JSON.stringify(m), {
             secure: !0
          })), i.default.set("address", (0, r.default)('[name="tl.curr-street"]').val()), i.default.set("city", (0, r.default)('[name="tl.curr-city"]').val()), i.default.set("state", (0, r.default)('[name="tl.curr-state"]').val()), i.default.set("zip", (0, r.default)('[name="tl.curr-zip-code"]').val())
       }).on("submit", function() {
          i.default.set("first_name", (0, r.default)('[name="tl.first-name"]').val()), sessionStorage.setItem("stepOne", "true"), nid("setCheckpoint", "orderStep1_form_complete"), "undefined" != typeof TrustevV2 && "undefined" != typeof TrustevV2.SessionId ? (0, r.default)("#trustev").val(TrustevV2.SessionId) : console.warn("No Trustev session id detected.")
       }), null !== typeof m && (m = JSON.parse(m), d.default.each(m, function(e, t) {
          (0, r.default)('[name="' + t + '"]').val(e)
       }));
       var I = ui.customOffers.length > 0 ? ui.customOffers[0] : ui.offers[0],
          k = (0, r.default)(".section-title");
       (0, r.default)(".mobile-offer-copy"), (0, r.default)(".additional-copy");
       if (I)
          if (I.components.length < 3) console.error("Active session in another tab!"), window.location.reload();
          else {
             if ("" === h && (h = I.code), "FRZ20011" == h)
                for (var w = document.getElementsByClassName("not-yet"), C = 0; C < w.length; C++) w[C].style.display = "none";
             (0, r.default)('input[name|="tl.offer"],input[name|="tl.bundle-item"]', c).remove(), "FRZ30011" == h || "guest" == h ? r.default.each(I.components, function(e, t) {
                t.isInitial && (c.append('<input type="hidden" name="tl.offer" value="' + I.token + '"/>'), c.append('<input type="hidden" name="tl.offer-component" value="' + I.components[e].token + '"/>'), c.append('<input type="hidden" name="tl.bindle-item-1" value="req"/>'))
             }) : l(c);
             var R = {
                default: "Create a free TransUnion ServiceÂ Center account to: submit a dispute, request a credit report, manage a credit freeze or fraud alert, or add a consumer statement.",
                FRZ20011: "Create a free account to add or change a credit freeze, or to submit a dispute of information you think is inaccurate in your credit report.",
                guest: "We'll need the following information to get started.",
                acr: "Let's set up your TransUnion ServiceÂ Center user account."
             };
             if ("acr" === (0, f.queryParams)().score)(0, r.default)(".acr-banner").removeClass("acr-banner--hidden"), k.html(R.acr), (0, r.default)(".section-title").css("padding-top", "10px");
             else switch (h) {
                case "guest":
                   k.html(R.guest);
                   break;
                case "FRZ20011":
                   k.html(R.FRZ20011);
                   break;
                default:
                   k.html(R.default)
             }
          }
       else console.error("Cannot find offer information!"), k.text("No offer information returned");
       (0, r.default)(".readmore").hide(), (0, r.default)(".more").on("click", function(e) {
          e.preventDefault(), (0, r.default)(".readmore").toggle(), (0, r.default)(this).hasClass("less") ? (0, r.default)(this).html("Read more").removeClass("less") : (0, r.default)(this).html("Read less").addClass("less")
       }), (0, r.default)("form").validation("addRules", {
          "tl.phone-number": {
             hint: "Your phone number is used to streamline our identity verification process, making it quicker and easier for you.",
             required: "Oops, looks like you need to enter your telephone number."
          }
       }), (0, r.default)(document).on("click", ".personalInformation", function(e) {
          e.preventDefault(), (0, r.default)("#personalInformation-bg").show(), (0, r.default)("#personalInformation-bg .modal-content").attr("aria-hidden", !1), (0, f.modalInFocus)("#personalInformation-bg")
       }), (0, r.default)(".modal-overlay").on("click", ".modal-close, .closeModal", function(e) {
          e.preventDefault(), (0, r.default)(".modal-overlay").hide(), (0, r.default)(".modal-overlay .modal-content").attr("aria-hidden", !0)
       })
    }
 });