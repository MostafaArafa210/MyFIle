## FUZZ 

- https://trck.www4.paze.com/FUZZ
- https://go.paze.com/FUZZ
- https://marketingportal-devint1.paze.com/file-asset/FUZZ

### Ipis  403 

- https://104.17.235.15:2083/
- https://104.17.234.15:8443/
- https://104.17.89.34/

## Palo-Alto

sawportal.earlywarning.com
https://199.47.139.180/

### VPN

- https://199.47.139.172/dana-na/auth/url_default/welcome.cgi?

https://marketingportal-devint1.paze.com/s/login?ec=302&inst=77&startURL=javascript:alert(11)\\;
### Pram 

- correlationId=
- "SHA-256",$.encode('ct="ACCESS_TOKEN"')

var ev = eX;F[ev(2045)](f, ev(2868))[ev(2805)];
## End-Point 
- v1"
- "v2"
- "v3 > api 
 - pluralResolver
 - addRule
 - _plural_
 - backendConnector
 - /cdn-cgi/l/email-protection
 - api
 - /session-expired
 - system/trackEvent
 - system/launch
 - /opt-out
 - /privacy-policy
 - APP#OTP
 - banner/addressError
 - api/saveTemporaryAddress
 - fetch/addAddress
 - getRule
 - fetch/editAddress
 - api/cancelAuth
 - fetch/stepupOptions
 - api/secondaryStepup
 - /otp
 - /loader
 - /cvv
 - api/stepupOptionsCVV
 - api/stepupOptionsOTP
 - api/stepupOptions
 - /apn/iwa-sim/oauth2/token/probe
 - /apn/iwa-web/oauth2/token/probe
 - api/elevatedStepup
 - /confirmation
 - /ready
 - /add-card
 - api/probeTNC
 - api/probePhone
 - api/probeOTP
 - api/probeCVV
 - api/handlePromise
 - api/promise
 - api/resendOtp
 - api/renewal
 - api/savePreferences
 - api/changePhone
 - /communicator
 - "/add-card"
- "/confirmation"
- "/cvv"
- "/email-collection"
- "/ghost-layer"
- "/loader"
- "/mobile-number"
- "/opt-out"
- "/otp"
- "/paze-overview"
- "/privacy-policy"
- "/ready"
- "/select-card"
- "/session-expired"
- "/tnc"
- "/welcome"]
- "/fulfilled
- /pending
- /rejected

### Header 
-X-Request-UR








 - https://h.online-metrix.net/fp/tags?org_id=&session_id=
 - let  r = "iwa-ui-root",
        a = "api_probe",
        i = "api_shipping_address",
        d = "api_delete_shipping_address",
        o = "api_edit_shipping_address",
        s = "api_stepup_options"
 - let p = 
 		  "N_Th08fnwQ9g1rEUd45lUGmPsX9Ad06EbzxSkGavImY=",
          "nHuVqmNHoBAGPmAqP_IYkVOew5yU0n7pKEljF68SIz4=",
          "klR5m5o8DvsSrHvYxZjGAt3ck9h_W6NROaMX4NNft3U=",
          "Iw9q3zhI4WfWfiDK2NUS8YcZPiF6-R7fX2DwzlbrJ6A=",
          "CfoS_SeoiTOm-KfvMBuiby7CqQxhh2-D1CjjY8LB8j8=",
          "bN0Iasfdj92OltDnCPNzWT2sDcKTvSRd26Ke0yDEuuM=",
          "IkWgxYBr5ZSPyKB33cz23XPh41mbTc7Vx5zUQWXzUlA=",
          "VvKoXhxm3yJl64VZjVaI164LgzIrKojjrj6MMVm9geo=",
          "KRYgqRZ-p7LgH26a4A6-CbUnI6NjhMqo6nxNs5R1oho=",
        
- sortedPages:
      "/404",
      "/500",
      "/_app",
      "/_error",
      "/add-card",
      "/communicator",
      "/confirmation",
      "/cvv",
      "/email-collection",
      "/ghost-layer",
      "/loader",
      "/mobile-number",
      "/opt-out",
      "/otp",
      "/paze-overview",
      "/privacy-policy",
      "/ready",
      "/select-card",
      "/session-expired",
      "/tnc",
      "/welcome"
- /ghost-layer
- /metrics
- index.json
- /_next/data/any.json
- 
 ## Request 

POST /api/v1/addresses 
HOST: domain.com
Header: Empty


DELETE /api/v1/addresses/".concat(e.addressId)
HOST: domain.comHOST: domain.com
Header: Empty



 POST /api/v1/stepupOptions
 HOST: domain.com
 Header: Empty

POST /apn/iwa-sim/oauth2/token/probe 
Host: Domain.com
Header: Empty


  function createSessionId() {
        return "bc_checkout_001".concat(
          Math.random().toString(36).substring(7)
        );
      }
    },
   fetchReq = async (e) => {
          var t
n
a;
          let { url: i
body: d
method: o
headers: s } = e,
            l = new URLSearchParams(window.location.search).get(
              "correlationId"
            ),
            u = await (null === (t = (0
r.G)()) || void 0 === t
              ? void 0
              : t.getVbaToken()),
            c = JSON.stringify(d),
            p = {
              Accept: "application/json",
              Authorization:
                null !==
                  (a = await (null === (n = (0
r.G)()) || void 0 === n
                    ? void 0
                    : n.api.createPopToken(c
null != o ? o : ""
i))) &&
                void 0 !== a
                  ? a
                  : "",
              "Content-Type": "application/json",
              ...(l && { "X-CORRELATION-ID": l }),
              ...(u && { "v-c-vaap-token": u }),
              ...s,
            };
          return (
            "application/x-www-form-urlencoded" === p["Content-Type"] &&
              (c = new URLSearchParams(d).toString()),
            fetch(i
{
              body: c,
              credentials: "same-origin",
              headers: p,
              method: o,
            })
              .then((e) => handleResponse(e))
              .catch((e) => ({ error: e
headers: {}
ok: !1
status: 408 }))
          );
        };
    },

  navigator &&
        navigator.sendBeacon &&
        !navigator.sendBeacon(this.config.URL, b) &&
        ((b = this._createXmlHttpObject()),
        b.open("POST", this.config.URL, !0),
        b.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset\x3dUTF-8"
        ),
        b.send(a));
      this.hasPerfLogged = !0;
 h = "phase-export",
        g = "phase-production-build",
        _ = "phase-production-server",
        y = "phase-development-server",
        P = "phase-test",
        b = "phase-info",
        E = "pages-manifest.json",
        S = "app-paths-manifest.json",
        R = "app-path-routes-manifest.json",
        w = "build-manifest.json",
        O = "app-build-manifest.json",
        j = "functions-config-manifest.json",
        A = "subresource-integrity-manifest",
        M = "next-font-manifest",
        C = "export-marker.json",
        I = "export-detail.json",
        L = "prerender-manifest.json",
        x = "routes-manifest.json",
        N = "images-manifest.json",
        D = "required-server-files.json",
        k = "_devPagesManifest.json",
        F = "middleware-manifest.json",
        U = "_devMiddlewareManifest.json",
        B = "react-loadable-manifest.json",
        H = "font-manifest.json",
        W = "server",
        q = ["next.config.js", "next.config.mjs"],
        z = "BUILD_ID",
        G = ["/_document", "/_app", "/_error"],
        V = "public",
        X = "static",
        Y = "__NEXT_DROP_CLIENT_FILE__",
        K = "__NEXT_BUILTIN_DOCUMENT__",
        Q = "__barrel_optimize__",
        $ = "client-reference-manifest",
        J = "server-reference-manifest",
        Z = "middleware-build-manifest",
        ee = "middleware-react-loadable-manifest",
        et = "main",
        er = "" + et + "-app",
        en = "app-pages-internals",
        ea = "react-refresh",
        eo = "amp",
        ei = "webpack",
        el = "polyfills",
        eu = Symbol(el),
        es = "edge-runtime-webpack",
        ec = 307,
        ed = 308,
        ef = "__N_SSG",
        ep = "__N_SSP",
        eh = "__PAGE__",
        em = "https://fonts.googleapis.com/",
        eg = [
          { url: em, preconnect: "https://fonts.gstatic.com" },
          {
            url: "https://use.typekit.net",
            preconnect: "https://use.typekit.net",
    let getAssetPath = (e) => "/web".concat(e),
        getImagePath = (e) => "/web/resources/images".concat(e);
         Cu = !o(function () {
      var t = new URL("b?a=1&b=2&c=3", "http://a"),
        e = t.searchParams,
        r = "";
      return (
        (t.pathname = "c%20d"),
        e.forEach(function (t, n) {
          e.delete("b"), (r += n + t);
        }),
        !e.sort ||
          "http://a/c%20d?a=1&c=3" !== t.href ||
          "3" !== e.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !e[Nu] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("http://тест").host ||
          "#%D0%B1" !== new URL("http://a#б").hash ||
          "a1c3" !== r ||
          "x" !== new URL("http://x", void 0).host
      );
    }),
     sf = function (t) {
      n.postMessage(t + "", n.location.protocol + "//" + n.location.host);
    };
 let eh = new URLSearchParams(window.location.search).get("correlationId"),
        ew = {
          api: {},
          checkoutResponse: null,
          config: {},
          meta: {
            correlationId: eh,
            ewsAuthenticateUserSessionId: re(),
            ewsOrgId: "dubkxo24",
            ewsVerifyPaymentSessionId: "",
            isCalLogEnabled: "ON" === "ON".toUpperCase(),
            namespace: "iwa-web",
            orgId: "ge4f5xfn",
            preferences: {},
            sessionId: re(),
            shippingAddresses: [],
          },
          popTokenData: null,
          SDK_LOG: {},
          user: null,
        },   let ey = {
          api: {
            credentials: "/api/v1/transaction/credentials",
            eventLogging: "/api/v1/logging/logEvent",
            merchant: "/api/v1/iwa/merchant",
            preferences: "/api/v1/preferences",
            profile: "/api/v1/profile",
          },
          token: {
            probe: `/apn/${Ae()}/oauth2/token/probe`,
            promise: `/apn/${Ae()}/oauth2/token/authorized/idproof/promise`,
            promiseSim: "/apn/iwa-sim/oauth2/token/authorized/idproof/promise",
            reissuance: `/apn/${Ae()}/oauth2/token/probe/reissuance`,
            renewal: `/apn/${Ae()}/oauth2/token/renewal`,
            revocation: `/apn/${Ae()}/oauth2/lcm/token/authorized/revocation`,
            token: `/apn/${Ae()}/oauth2/token`,
            tokenSim: "/apn/iwa-sim/oauth2/token",
          },
        },