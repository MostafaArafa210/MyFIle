x = function(e) {
return {
   addCoupon: async (t, n = {}) => {
      b("addCoupon", "couponCode", t);
      const r = "/cart-api/v1/cart/add-coupon/{couponCode}".replace("{couponCode}", encodeURIComponent(String(t))),
         o = new URL(r, y);
      let a;
      e && (a = e.baseOptions);
      const i = {
            method: "PATCH",
            ...a,
            ...n
         },
         s = {};
      E(o, {});
      let u = a && a.headers ? a.headers : {};
      return i.headers = {
         ...s,
         ...u,
         ...n.headers
      }, {
         url: I(o),
         options: i
      }
   },
   addCouponWithSid: async (t, n, r = {}) => {
      b("addCouponWithSid", "sid", t), b("addCouponWithSid", "couponCode", n);
      const o = "/cart-api/v1/cart/{sid}/add-coupon/{couponCode}".replace("{sid}", encodeURIComponent(String(t))).replace("{couponCode}", encodeURIComponent(String(n))),
         a = new URL(o, y);
      let i;
      e && (i = e.baseOptions);
      const s = {
            method: "PATCH",
            ...i,
            ...r
         },
         u = {};
      E(a, {});
      let l = i && i.headers ? i.headers : {};
      return s.headers = {
         ...u,
         ...l,
         ...r.headers
      }, {
         url: I(a),
         options: s
      }
   },
   addSavingsPlanArticle: async (t, n, r = {}) => {
      b("addSavingsPlanArticle", "sid", t), b("addSavingsPlanArticle", "articleId", n);
      const o = "/cart-api/v1/cart/{sid}/add-savingsplan-article/{articleId}".replace("{sid}", encodeURIComponent(String(t))).replace("{articleId}", encodeURIComponent(String(n))),
         a = new URL(o, y);
      let i;
      e && (i = e.baseOptions);
      const s = {
            method: "PATCH",
            ...i,
            ...r
         },
         u = {};
      E(a, {});
      let l = i && i.headers ? i.headers : {};
      return s.headers = {
         ...u,
         ...l,
         ...r.headers
      }, {
         url: I(a),
         options: s
      }
   },
   changeArticleQuantity: async (t, n, r = {}) => {
      b("changeArticleQuantity", "sid", t), b("changeArticleQuantity", "changeArticleQuantityRequest", n);
      const o = "/cart-api/v1/cart/{sid}/set-article-quantity-command".replace("{sid}", encodeURIComponent(String(t))),
         a = new URL(o, y);
      let i;
      e && (i = e.baseOptions);
      const s = {
            method: "PATCH",
            ...i,
            ...r
         },
         u = {},
         l = {};
      u["Content-Type"] = "application/json", E(a, l);
      let c = i && i.headers ? i.headers : {};
      return s.headers = {
         ...u,
         ...c,
         ...r.headers
      }, s.data = O(n, s, e), {
         url: I(a),
         options: s
      }
   },
   deleteSavingsPlanArticle: async (t, n = {}) => {
      b("deleteSavingsPlanArticle", "sid", t);
      const r = "/cart-api/v1/cart/{sid}/delete-savingsplan-article".replace("{sid}", encodeURIComponent(String(t))),
         o = new URL(r, y);
      let a;
      e && (a = e.baseOptions);
      const i = {
            method: "DELETE",
            ...a,
            ...n
         },
         s = {};
      E(o, {});
      let u = a && a.headers ? a.headers : {};
      return i.headers = {
         ...s,
         ...u,
         ...n.headers
      }, {
         url: I(o),
         options: i
      }
   },
   getCartBySid: async (t, n = {}) => {
      b("getCartBySid", "sid", t);
      const r = "/cart-api/v1/cart/{sid}".replace("{sid}", encodeURIComponent(String(t))),
         o = new URL(r, y);
      let a;
      e && (a = e.baseOptions);
      const i = {
            method: "GET",
            ...a,
            ...n
         },
         s = {};
      E(o, {});
      let u = a && a.headers ? a.headers : {};
      return i.headers = {
         ...s,
         ...u,
         ...n.headers
      }, {
         url: I(o),
         options: i
      }
   },
   removeCoupon: async (t, n = {}) => {
      b("removeCoupon", "couponCode", t);
      const r = "/cart-api/v1/cart/remove-coupon/{couponCode}".replace("{couponCode}", encodeURIComponent(String(t))),
         o = new URL(r, y);
      let a;
      e && (a = e.baseOptions);
      const i = {
            method: "DELETE",
            ...a,
            ...n
         },
         s = {};
      E(o, {});
      let u = a && a.headers ? a.headers : {};
      return i.headers = {
         ...s,
         ...u,
         ...n.headers
      }, {
         url: I(o),
         options: i
      }
   },
   removeCouponWithSid: async (t, n, r = {}) => {
      b("removeCouponWithSid", "sid", t), b("removeCouponWithSid", "couponCode", n);
      const o = "/cart-api/v1/cart/{sid}/remove-coupon/{couponCode}".replace("{sid}", encodeURIComponent(String(t))).replace("{couponCode}", encodeURIComponent(String(n))),
         a = new URL(o, y);
      let i;
      e && (i = e.baseOptions);
      const s = {
            method: "DELETE",
            ...i,
            ...r
         },
         u = {};
      E(a, {});
      let l = i && i.headers ? i.headers : {};
      return s.headers = {
         ...u,
         ...l,
         ...r.headers
      }, {
         url: I(a),
         options: s
      }
   }
}
  },
const oe = function(e) {
     return {
        getCustomerType: async (t = {}) => {
           const n = new URL("/shop-api/v1/getCustomerType", $);
           let r;
           e && (r = e.baseOptions);
           const o = {
                 method: "GET",
                 ...r,
                 ...t
              },
              a = {};
           Q(n, {});
           let i = r && r.headers ? r.headers : {};
           return o.headers = {
              ...a,
              ...i,
              ...t.headers
           }, {
              url: ee(n),
              options: o
           }
        },
        getKeycloakIdForLoggedInCustomer: async (t = {}) => {
           const n = new URL("/shop-api/v1/keycloakId", $);
           let r;
           e && (r = e.baseOptions);
           const o = {
                 method: "GET",
                 ...r,
                 ...t
              },
              a = {};
           Q(n, {});
           let i = r && r.headers ? r.headers : {};
           return o.headers = {
              ...a,
              ...i,
              ...t.headers
           }, {
              url: ee(n),
              options: o
           }
        },
        getKeycloakTokenForLoggedInCustomer: async (t = {}) => {
           const n = new URL("/shop-api/v1/keycloakToken", $);
           let r;
           e && (r = e.baseOptions);
           const o = {
                 method: "GET",
                 ...r,
                 ...t
              },
              a = {};
           Q(n, {});
           let i = r && r.headers ? r.headers : {};
           return o.headers = {
              ...a,
              ...i,
              ...t.headers
           }, {
              url: ee(n),
              options: o
           }
        },
        getSid: async (t = {}) => {
           const n = new URL("/shop-api/v1/sid", $);
           let r;
           e && (r = e.baseOptions);
           const o = {
                 method: "GET",
                 ...r,
                 ...t
              },
              a = {};
           Q(n, {});
           let i = r && r.headers ? r.headers : {};
           return o.headers = {
              ...a,
              ...i,
              ...t.headers
           }, {
              url: ee(n),
              options: o
           }
        }
     }
  },
      class se {
  apiKey;
  username;
  password;
  accessToken;
  basePath;
  baseOptions;
  formDataCtor;
  constructor(e = {}) {
     this.apiKey = e.apiKey, this.username = e.username, this.password = e.password, this.accessToken = e.accessToken, this.basePath = e.basePath, this.baseOptions = e.baseOptions, this.formDataCtor = e.formDataCtor
GET-CART-ID-v1
GET-CART-v1
ADD-TO-CART-v1
const r = [{
     id: 1,
     country: "DE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.de",
     language: "de",
     locale: "de-DE",
     alternateLocales: [],
     productGroupId: 2719,
     realm: "zooplus"
  }, {
     id: 2,
     country: "GB",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.com",
     language: "en",
     locale: "en-GB",
     alternateLocales: [],
     productGroupId: 20758,
     realm: "zooplus"
  }, {
     id: 3,
     country: "GB",
     currency: "EUR",
     alternativeCurrency: "GBP",
     domain: "zooplus.co.uk",
     language: "en",
     locale: "en-GB",
     alternateLocales: [],
     productGroupId: 3315,
     realm: "zooplus"
  }, {
     id: 4,
     country: "FR",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.fr",
     language: "fr",
     locale: "fr-FR",
     alternateLocales: [],
     productGroupId: 3884,
     realm: "zooplus"
  }, {
     id: 7,
     country: "NL",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.nl",
     language: "nl",
     locale: "nl-NL",
     alternateLocales: [],
     productGroupId: 6114,
     realm: "zooplus"
  }, {
     id: 8,
     country: "PL",
     currency: "EUR",
     alternativeCurrency: "PLN",
     domain: "zooplus.pl",
     language: "pl",
     locale: "pl-PL",
     alternateLocales: [],
     productGroupId: 7245,
     realm: "zooplus"
  }, {
     id: 11,
     country: "IE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.ie",
     language: "en",
     locale: "en-IE",
     alternateLocales: [],
     productGroupId: 20758,
     realm: "zooplus"
  }, {
     id: 12,
     country: "IT",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.it",
     language: "it",
     locale: "it-IT",
     alternateLocales: [],
     productGroupId: 8405,
     realm: "zooplus"
  }, {
     id: 14,
     country: "BE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.be",
     language: "fr",
     locale: "fr-BE",
     alternateLocales: [],
     productGroupId: 26690,
     realm: "zooplus"
  }, {
     id: 15,
     country: "ES",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.es",
     language: "es",
     locale: "es-ES",
     alternateLocales: [],
     productGroupId: 11638,
     realm: "zooplus"
  }, {
     id: 16,
     country: "CZ",
     currency: "EUR",
     alternativeCurrency: "CZK",
     domain: "zoohit.cz",
     language: "cs",
     locale: "cs-CZ",
     alternateLocales: [],
     productGroupId: 18204,
     realm: "zooplus"
  }, {
     id: 18,
     country: "FI",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.fi",
     language: "fi",
     locale: "fi-FI",
     alternateLocales: [],
     productGroupId: 24437,
     realm: "zooplus"
  }, {
     id: 19,
     country: "SK",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zoohit.sk",
     language: "sk",
     locale: "sk-SK",
     alternateLocales: [],
     productGroupId: 32213,
     realm: "zooplus"
  }, {
     id: 20,
     country: "RU",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zoochic-eu.ru",
     language: "ru",
     locale: "ru-RU",
     alternateLocales: [],
     productGroupId: 36514,
     realm: "zooplus"
  }, {
     id: 21,
     country: "DK",
     currency: "EUR",
     alternativeCurrency: "DKK",
     domain: "zooplus.dk",
     language: "da",
     locale: "da-DK",
     alternateLocales: [],
     productGroupId: 38215,
     realm: "zooplus"
  }, {
     id: 22,
     country: "HU",
     currency: "EUR",
     alternativeCurrency: "HUF",
     domain: "zooplus.hu",
     language: "hu",
     locale: "hu-HU",
     alternateLocales: [],
     productGroupId: 54095,
     realm: "zooplus"
  }, {
     id: 23,
     country: "SI",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zoohit.si",
     language: "sl",
     locale: "sl-SI",
     alternateLocales: [],
     productGroupId: 54096,
     realm: "zooplus"
  }, {
     id: 24,
     country: "RO",
     currency: "EUR",
     alternativeCurrency: "RON",
     domain: "zooplus.ro",
     language: "ro",
     locale: "ro-RO",
     alternateLocales: [],
     productGroupId: 54097,
     realm: "zooplus"
  }, {
     id: 25,
     country: "CH",
     currency: "EUR",
     alternativeCurrency: "CHF",
     domain: "zooplus.ch",
     language: "de",
     locale: "de-CH",
     alternateLocales: [{
        language: "fr",
        locale: "fr-CH"
     }],
     productGroupId: 59695,
     realm: "zooplus"
  }, {
     id: 26,
     country: "SE",
     currency: "EUR",
     alternativeCurrency: "SEK",
     domain: "zooplus.se",
     language: "sv",
     locale: "sv-SE",
     alternateLocales: [],
     productGroupId: 59745,
     realm: "zooplus"
  }, {
     id: 28,
     country: "PT",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.pt",
     language: "pt",
     locale: "pt-PT",
     alternateLocales: [],
     productGroupId: 83213,
     realm: "zooplus"
  }, {
     id: 29,
     country: "HR",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.hr",
     language: "hr",
     locale: "hr-HR",
     alternateLocales: [],
     productGroupId: 83215,
     realm: "zooplus"
  }, {
     id: 30,
     country: "BG",
     currency: "EUR",
     alternativeCurrency: "BGN",
     domain: "zooplus.bg",
     language: "bg",
     locale: "bg-BG",
     alternateLocales: [],
     productGroupId: 109610,
     realm: "zooplus"
  }, {
     id: 31,
     country: "NO",
     currency: "EUR",
     alternativeCurrency: "NOK",
     domain: "zooplus.no",
     language: "nb",
     locale: "nb-NO",
     alternateLocales: [],
     productGroupId: 120750,
     realm: "zooplus"
  }, {
     id: 32,
     country: "GR",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.gr",
     language: "el",
     locale: "el-GR",
     alternateLocales: [],
     productGroupId: 199260,
     realm: "zooplus"
  }, {
     id: 33,
     country: "AT",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "zooplus.at",
     language: "de",
     locale: "de-AT",
     alternateLocales: [],
     productGroupId: 383929,
     realm: "zooplus"
  }, {
     id: 101,
     country: "DE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.de",
     language: "de",
     locale: "de-DE",
     alternateLocales: [],
     productGroupId: 116722,
     realm: "bitiba"
  }, {
     id: 102,
     country: "GB",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.com",
     language: "en",
     locale: "en-GB",
     alternateLocales: [{
        language: "hu",
        locale: "hu-GB"
     }, {
        language: "ro",
        locale: "ro-GB"
     }, {
        language: "sl",
        locale: "sl-GB"
     }, {
        language: "sk",
        locale: "sk-GB"
     }, {
        language: "pt",
        locale: "pt-GB"
     }],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 103,
     country: "GB",
     currency: "EUR",
     alternativeCurrency: "GBP",
     domain: "bitiba.co.uk",
     language: "en",
     locale: "en-GB",
     alternateLocales: [],
     productGroupId: 113998,
     realm: "bitiba"
  }, {
     id: 104,
     country: "FR",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.fr",
     language: "fr",
     locale: "fr-FR",
     alternateLocales: [],
     productGroupId: 99265,
     realm: "bitiba"
  }, {
     id: 107,
     country: "NL",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.nl",
     language: "nl",
     locale: "nl-NL",
     alternateLocales: [],
     productGroupId: 133922,
     realm: "bitiba"
  }, {
     id: 108,
     country: "PL",
     currency: "EUR",
     alternativeCurrency: "PLN",
     domain: "bitiba.pl",
     language: "pl",
     locale: "pl-PL",
     alternateLocales: [],
     productGroupId: 122803,
     realm: "bitiba"
  }, {
     id: 111,
     country: "IE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.ie",
     language: "en",
     locale: "en-IE",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 112,
     country: "IT",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.it",
     language: "it",
     locale: "it-IT",
     alternateLocales: [],
     productGroupId: 144325,
     realm: "bitiba"
  }, {
     id: 114,
     country: "BE",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.be",
     language: "fr",
     locale: "fr-BE",
     alternateLocales: [],
     productGroupId: 155425,
     realm: "bitiba"
  }, {
     id: 115,
     country: "ES",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.es",
     language: "es",
     locale: "es-ES",
     alternateLocales: [],
     productGroupId: 122801,
     realm: "bitiba"
  }, {
     id: 116,
     country: "CZ",
     currency: "EUR",
     alternativeCurrency: "CZK",
     domain: "bitiba.cz",
     language: "cs",
     locale: "cs-CZ",
     alternateLocales: [],
     productGroupId: 183922,
     realm: "bitiba"
  }, {
     id: 118,
     country: "FI",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.fi",
     language: "fi",
     locale: "fi-FI",
     alternateLocales: [],
     productGroupId: 148494,
     realm: "bitiba"
  }, {
     id: 119,
     country: "SK",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.sk",
     language: "sk",
     locale: "sk-SK",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 121,
     country: "DK",
     currency: "EUR",
     alternativeCurrency: "DKK",
     domain: "bitiba.dk",
     language: "da",
     locale: "da-DK",
     alternateLocales: [],
     productGroupId: 155429,
     realm: "bitiba"
  }, {
     id: 122,
     country: "HU",
     currency: "EUR",
     alternativeCurrency: "HUF",
     domain: "bitiba.hu",
     language: "hu",
     locale: "hu-HU",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 123,
     country: "SI",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.si",
     language: "sl",
     locale: "sl-SI",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 124,
     country: "RO",
     currency: "EUR",
     alternativeCurrency: "RON",
     domain: "bitiba.ro",
     language: "ro",
     locale: "ro-RO",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }, {
     id: 125,
     country: "CH",
     currency: "EUR",
     alternativeCurrency: "CHF",
     domain: "bitiba.ch",
     language: "de",
     locale: "de-CH",
     alternateLocales: [],
     productGroupId: 183921,
     realm: "bitiba"
  }, {
     id: 126,
     country: "SE",
     currency: "EUR",
     alternativeCurrency: "SEK",
     domain: "bitiba.se",
     language: "sv",
     locale: "sv-SE",
     alternateLocales: [],
     productGroupId: 155427,
     realm: "bitiba"
  }, {
     id: 128,
     country: "PT",
     currency: "EUR",
     alternativeCurrency: "EUR",
     domain: "bitiba.pt",
     language: "pt",
     locale: "pt-PT",
     alternateLocales: [],
     productGroupId: 655714,
     realm: "bitiba"
  }]
url: r + "/search/results?ct=" + encodeURIComponent(o) + "&q=" + t,
     title: l,
     count: s.toString()
function w() {
     var e;
     return null !== (e = new URLSearchParams(window.location.search).get("q")) && void 0 !== e ? e : ""
var c = {
   SENTRY_DSN: "https://54107484a8c04448b6196eeb1a27c9ca@o354215.ingest.sentry.io/4504876106055680",
   REACT_APP_BFF_EXTERNAL_API_URL: "/explore-bff-api/api",
   REACT_APP_FEEDBACK_REVIEW_API_URL: "/feedback-review-api/api",
   REACT_APP_RECOMMENDATION_API_URL: "/zootopia-recommender/api",
   REACT_APP_SEARCH_API_URL: "/hopps-search/api",
   REACT_APP_PERSONALIZATION_API_URL: "/leto-personalization/api",
   REACT_APP_CUSTOMER_PICTURES_API_PUBLIC_URL: "/myaccount/api/cpp",
   REACT_APP_ABD_PUBLIC_API_URL: "/pricing/abd",
   REACT_APP_SHOP_PRODUCT_CATALOG_API_URL: "/hopps-product-catalog/api"
},
s = (0, i.Z)((0, r.Z)({}, c), {
   STAGE: "dev",
   EXTERNAL_SCRIPT_LOADER_URL: "https://mkt-tech-dev.omt-services.com/script-loader/main.js",
   CDN_URL: "https://cdn-dev.public.zooplus.net",
   REACT_APP_GEO_IP_LOOKUP_API_URL: "https://geo-ip-lookup-api-dev.private.zooplus.net",
   REACT_APP_CART_ASSET_URL: "https://cart-assets-dev.s3.eu-central-1.amazonaws.com/media/cart-assets/cart-service-js/js/master/CartService.js",
   REACT_APP_PIXEL_EXECUTOR_URL: "https://mkt-tech-dev.omt-services.com/main.js",
   REACT_APP_MEDIA_SERVER_URL: "https://dev.media.zooplus.com",
   REACT_APP_AUTOSHIPMENT_ICON: "https://shop-central-media-server-dev.shpmediad.int.aws.zooplus.io/bilder/5/AutoshipGraphic_5.png",
   REACT_APP_AUTHORIZER_HOST: "login-dev",
   REACT_APP_BASE_URL_STATICS_SITEMAP_BUCKET: "https://uxt-components-dev.public.zooplus.net/sitemap"
}),
u = (0, i.Z)((0, r.Z)({}, c), {
   STAGE: "prod",
   EXTERNAL_SCRIPT_LOADER_URL: "https://mkt-tech.omt-services.com/script-loader/main.js",
   CDN_URL: "https://cdn.public.zooplus.net",
   REACT_APP_GEO_IP_LOOKUP_API_URL: "/api/explore",
   REACT_APP_CART_ASSET_URL: "/media/cart-assets/cart-service-js/js/CSJ-REL-3.2.0/CartService.js",
   REACT_APP_PIXEL_EXECUTOR_URL: "https://mkt-tech.omt-services.com/main.js",
   REACT_APP_MEDIA_SERVER_URL: "https://shop-m-cdn.shpp.ext.zooplus.io",
   REACT_APP_AUTOSHIPMENT_ICON: "https://media.zooplus.com/bilder/0/AutoshipGraphic_0.png",
   REACT_APP_AUTHORIZER_HOST: "login",
   REACT_APP_BASE_URL_STATICS_SITEMAP_BUCKET: "https://uxt-components-prod.public.zooplus.net/sitemap"
}),

t.u = function(e) {
               return 7646 === e ? "static/chunks/7646-c056b970a4295ada.js" : "static/chunks/" + e + "." + {
                  27: "a5c5b46963878c06",
                  103: "d497e4e299eb85b5",
                  520: "63245572eae564aa",
                  1056: "d8f0f1b8c5bb21d7",
                  1308: "45b685070d7a3030",
                  1362: "52a817d101306662",
                  1404: "0026dfcdc58887f8",
                  1981: "f5700a1ae4a89601",
                  2119: "b99a8ea2b7739de6",
                  2151: "ecca8c65395b59f0",
                  2326: "bb864c059b342bef",
                  2338: "44e6470cd823851f",
                  2600: "ef269ba8b65491f9",
                  2718: "fafd036b63afb50e",
                  2863: "b8c0b805230573e9",
                  2932: "66fd1b6224ddd893",
                  3158: "74800f3dd5cbdec0",
                  3186: "f5bb3f60333ff558",
                  3565: "dc6d5a698c2616de",
                  3642: "3415716c3cefa882",
                  3644: "7b95ab03a9cd0118",
                  4178: "e4518d3a4d96db5c",
                  4519: "ce7511d4e2042fed",
                  4577: "deb83c9a4fe826de",
                  4690: "d102cb3515b56077",
                  4880: "e85475a71497f5bc",
                  5557: "89c32be16f80648a",
                  5600: "2efb6d53ba1347bd",
                  5605: "34f69345fc43639e",
                  5715: "11acb9cfe7acddc1",
                  6193: "50e0e5f3e78f054a",
                  6474: "c2b7368baf249afb",
                  6515: "a4fb3fb880afaa23",
                  6594: "297d8544c2cfa9aa",
                  6624: "69de0b860daeff00",
                  6678: "42807e1982b8442b",
                  6694: "e0ad07f5b38909a2",
                  7392: "fafbd3cf6150083b",
                  7703: "8302c4245330a297",
                  7788: "1f1445a4a11028c0",
                  8579: "acbd5eac850325ba",
                  8678: "4771d16442a9cb81",
                  9006: "9ee77b38df4f729b",
                  9574: "e8dea80dd73c95be",
                  9666: "0d251984015a3fd1",
                  9838: "05805ee4a12eff8d",
                  9876: "8eda7bb2a962cbae",
                  9965: "1dc6df96252d2047"
                  if (t.includes("account/orders")) return this.types.accountOrders;
               if (t.includes("/checkout/finish")) return this.types.checkoutFinish;
               if (t.includes("search")) return this.types.search;
               if (t.match(N)) return this.types.subSubCategory;
               if ("/" == t || "/fr" == t) return this.types.home;
               if (t.match(O)) return this.types.product;
               if (t.match(B)) return this.types.productPictures;
               if (t.match(M)) return this.types.outOfStock;
               if (t.includes("/checkout/overview")) return this.types.cartOverview;
               if (t.includes("/checkout/cartEmpty")) return this.types.cartEmpty;
               if (t.includes("/checkout/cart")) {
                  https://personalization-gdpr.samd.ext.zooplus.io
                       Y = (Q = {
            devStage: atob("aHR0cHM6Ly9wZXJzb25hbGl6YXRpb24tZ2Rwci5zYW1kLmV4dC56b29wbHVzLmlv"),
            localStage: atob("aHR0cDovL2xvY2FsaG9zdDo1MDAw"),
            prodStage: atob("aHR0cHM6Ly9wZXJzb25hbGl6YXRpb24tZ2Rwci5zYW1wLmV4dC56b29wbHVzLmlv")
         }, J = {
            devStage: atob("aHR0cHM6Ly9wZXJzb25hbGl6YXRpb24tY29ob3J0LnNhbWQuZXh0Lnpvb3BsdXMuaW8="),
            localStage: atob("aHR0cDovL2xvY2FsaG9zdDo1MDAw"),
            prodStage: atob("aHR0cHM6Ly9wZXJzb25hbGl6YXRpb24tY29ob3J0LnNhbXAuZXh0Lnpvb3BsdXMuaW8=")
         }, {