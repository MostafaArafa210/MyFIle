webpackJsonp([62], {
    0: function(e, t, a) {
       e.exports = a(111)
    },
    111: function(e, t, a) {
       "use strict";
 
       function s(e) {
          return e && e.__esModule ? e : {
             default: e
          }
       }
       var r = a(3),
          n = s(r),
          o = a(8),
          l = (s(o), a(34)),
          i = a(4),
          u = a(31),
          d = d = (0, n.default)('input[name="requestToken"]').parent("form");
       d.on("submit", function() {
          var e = (0, n.default)('input[name="tl.password"]').val(),
             t = (0, l.getPasswordStrengthInfo)(e);
          (0, i.capturePwdScore)(t.score)
       }), (0, n.default)("form").validation("addRules", {
          "tl.last-name": {
             regex: "^[\\'\\-a-zA-Z]+$",
             max: 40,
             hint: "",
             format: "Please enter letters, apostrophes, or hyphens only.",
             required: "Please enter your last name."
          },
          "tl.password": {
             regex: u.newPasswordLength,
             required: "Please create a password that is 12-64 characters in length. Remember, your password will be case-sensitive.",
             min: 12,
             minLength: "Please create a password that is 12-64 characters in length. Remember, your password will be case-sensitive.",
             match: "It looks like your passwords don't match. Please re-enter."
          }
       })
    }
 });