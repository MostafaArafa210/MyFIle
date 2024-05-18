(function() {
    window.CQ = window.CQ || {};
    window.CQ.CoreComponents = window.CQ.CoreComponents || {};
    window.CQ.CoreComponents.container = window.CQ.CoreComponents.container || {};
    window.CQ.CoreComponents.container.utils = {};
    window.CQ.CoreComponents.container.utils = {
       removeUrlHash: function() {
          history.replaceState(void 0, void 0, " ")
       },
       updateUrlHash: function(a, b, c) {
          a && a._elements && a._elements[b] && a._elements[b][c] && a._elements[b][c].id && history.replaceState(void 0, void 0, "#" + a._elements[b][c].id)
       },
       getDeepLinkItemIdx: function(a,
          b, c) {
          if (window.location.hash) {
             var d = window.location.hash.substring(1);
             if (d && document.getElementById(d) && a && a._config && a._config.element && a._elements[b] && a._config.element.querySelector("[id\x3d'" + d + "']"))
                for (var e = 0; e < a._elements[b].length; e++) {
                   var g = a._elements[b][e],
                      f = !1;
                   a._elements[c] && (f = (f = a._elements[c][e]) && f.querySelector("[id\x3d'" + d + "']"));
                   if (g.id === d || f) return e
                }
          }
          return -1
       },
       getDeepLinkItem: function(a, b, c) {
          c = window.CQ.CoreComponents.container.utils.getDeepLinkItemIdx(a, b, c);
          if (a && a._elements &&
             a._elements[b]) return a._elements[b][c]
       },
       scrollToAnchor: function() {
          setTimeout(function() {
             if (window.location.hash) {
                var a = decodeURIComponent(window.location.hash.substring(1));
                (a = document.getElementById(a)) && a.offsetTop && a.scrollIntoView()
             }
          }, 100)
       }
    }
 })();