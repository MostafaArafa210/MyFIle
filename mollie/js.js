! function() {
	var t = {
			926: function(t) {
				function e(t, e, n, r, o, a, i) {
					try {
						var u = t[a](i),
							c = u.value
					} catch (t) {
						return void n(t)
					}
					u.done ? e(c) : Promise.resolve(c).then(r, o)
				}
				t.exports = function(t) {
					return function() {
						var n = this,
							r = arguments;
						return new Promise((function(o, a) {
							var i = t.apply(n, r);

							function u(t) {
								e(i, o, a, u, c, "next", t)
							}

							function c(t) {
								e(i, o, a, u, c, "throw", t)
							}
							u(void 0)
						}))
					}
				}
			},
			8: function(t) {
				function e(n) {
					return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function(t) {
						return typeof t
					} : t.exports = e = function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					}, e(n)
				}
				t.exports = e
			},
			757: function(t, e, n) {
				t.exports = n(666)
			},
			666: function(t) {
				var e = function(t) {
					"use strict";
					var e, n = Object.prototype,
						r = n.hasOwnProperty,
						o = "function" == typeof Symbol ? Symbol : {},
						a = o.iterator || "@@iterator",
						i = o.asyncIterator || "@@asyncIterator",
						u = o.toStringTag || "@@toStringTag";

					function c(t, e, n) {
						return Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}), t[e]
					}
					try {
						c({}, "")
					} catch (t) {
						c = function(t, e, n) {
							return t[e] = n
						}
					}

					function s(t, e, n, r) {
						var o = e && e.prototype instanceof y ? e : y,
							a = Object.create(o.prototype),
							i = new A(r || []);
						return a._invoke = function(t, e, n) {
							var r = l;
							return function(o, a) {
								if (r === p) throw new Error("Generator is already running");
								if (r === h) {
									if ("throw" === o) throw a;
									return P()
								}
								for (n.method = o, n.arg = a;;) {
									var i = n.delegate;
									if (i) {
										var u = j(i, n);
										if (u) {
											if (u === v) continue;
											return u
										}
									}
									if ("next" === n.method) n.sent = n._sent = n.arg;
									else if ("throw" === n.method) {
										if (r === l) throw r = h, n.arg;
										n.dispatchException(n.arg)
									} else "return" === n.method && n.abrupt("return", n.arg);
									r = p;
									var c = d(t, e, n);
									if ("normal" === c.type) {
										if (r = n.done ? h : f, c.arg === v) continue;
										return {
											value: c.arg,
											done: n.done
										}
									}
									"throw" === c.type && (r = h, n.method = "throw", n.arg = c.arg)
								}
							}
						}(t, n, i), a
					}

					function d(t, e, n) {
						try {
							return {
								type: "normal",
								arg: t.call(e, n)
							}
						} catch (t) {
							return {
								type: "throw",
								arg: t
							}
						}
					}
					t.wrap = s;
					var l = "suspendedStart",
						f = "suspendedYield",
						p = "executing",
						h = "completed",
						v = {};

					function y() {}

					function m() {}

					function g() {}
					var w = {};
					w[a] = function() {
						return this
					};
					var b = Object.getPrototypeOf,
						x = b && b(b(O([])));
					x && x !== n && r.call(x, a) && (w = x);
					var L = g.prototype = y.prototype = Object.create(w);

					function S(t) {
						["next", "throw", "return"].forEach((function(e) {
							c(t, e, (function(t) {
								return this._invoke(e, t)
							}))
						}))
					}

					function E(t, e) {
						function n(o, a, i, u) {
							var c = d(t[o], t, a);
							if ("throw" !== c.type) {
								var s = c.arg,
									l = s.value;
								return l && "object" == typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
									n("next", t, i, u)
								}), (function(t) {
									n("throw", t, i, u)
								})) : e.resolve(l).then((function(t) {
									s.value = t, i(s)
								}), (function(t) {
									return n("throw", t, i, u)
								}))
							}
							u(c.arg)
						}
						var o;
						this._invoke = function(t, r) {
							function a() {
								return new e((function(e, o) {
									n(t, r, e, o)
								}))
							}
							return o = o ? o.then(a, a) : a()
						}
					}

					function j(t, n) {
						var r = t.iterator[n.method];
						if (r === e) {
							if (n.delegate = null, "throw" === n.method) {
								if (t.iterator.return && (n.method = "return", n.arg = e, j(t, n), "throw" === n.method)) return v;
								n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
							}
							return v
						}
						var o = d(r, t.iterator, n.arg);
						if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, v;
						var a = o.arg;
						return a ? a.done ? (n[t.resultName] = a.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, v) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, v)
					}

					function q(t) {
						var e = {
							tryLoc: t[0]
						};
						1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
					}

					function k(t) {
						var e = t.completion || {};
						e.type = "normal", delete e.arg, t.completion = e
					}

					function A(t) {
						this.tryEntries = [{
							tryLoc: "root"
						}], t.forEach(q, this), this.reset(!0)
					}

					function O(t) {
						if (t) {
							var n = t[a];
							if (n) return n.call(t);
							if ("function" == typeof t.next) return t;
							if (!isNaN(t.length)) {
								var o = -1,
									i = function n() {
										for (; ++o < t.length;)
											if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
										return n.value = e, n.done = !0, n
									};
								return i.next = i
							}
						}
						return {
							next: P
						}
					}

					function P() {
						return {
							value: e,
							done: !0
						}
					}
					return m.prototype = L.constructor = g, g.constructor = m, m.displayName = c(g, u, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
						var e = "function" == typeof t && t.constructor;
						return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
					}, t.mark = function(t) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, c(t, u, "GeneratorFunction")), t.prototype = Object.create(L), t
					}, t.awrap = function(t) {
						return {
							__await: t
						}
					}, S(E.prototype), E.prototype[i] = function() {
						return this
					}, t.AsyncIterator = E, t.async = function(e, n, r, o, a) {
						void 0 === a && (a = Promise);
						var i = new E(s(e, n, r, o), a);
						return t.isGeneratorFunction(n) ? i : i.next().then((function(t) {
							return t.done ? t.value : i.next()
						}))
					}, S(L), c(L, u, "Generator"), L[a] = function() {
						return this
					}, L.toString = function() {
						return "[object Generator]"
					}, t.keys = function(t) {
						var e = [];
						for (var n in t) e.push(n);
						return e.reverse(),
							function n() {
								for (; e.length;) {
									var r = e.pop();
									if (r in t) return n.value = r, n.done = !1, n
								}
								return n.done = !0, n
							}
					}, t.values = O, A.prototype = {
						constructor: A,
						reset: function(t) {
							if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(k), !t)
								for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
						},
						stop: function() {
							this.done = !0;
							var t = this.tryEntries[0].completion;
							if ("throw" === t.type) throw t.arg;
							return this.rval
						},
						dispatchException: function(t) {
							if (this.done) throw t;
							var n = this;

							function o(r, o) {
								return u.type = "throw", u.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
							}
							for (var a = this.tryEntries.length - 1; a >= 0; --a) {
								var i = this.tryEntries[a],
									u = i.completion;
								if ("root" === i.tryLoc) return o("end");
								if (i.tryLoc <= this.prev) {
									var c = r.call(i, "catchLoc"),
										s = r.call(i, "finallyLoc");
									if (c && s) {
										if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
										if (this.prev < i.finallyLoc) return o(i.finallyLoc)
									} else if (c) {
										if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
									} else {
										if (!s) throw new Error("try statement without catch or finally");
										if (this.prev < i.finallyLoc) return o(i.finallyLoc)
									}
								}
							}
						},
						abrupt: function(t, e) {
							for (var n = this.tryEntries.length - 1; n >= 0; --n) {
								var o = this.tryEntries[n];
								if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
									var a = o;
									break
								}
							}
							a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(i)
						},
						complete: function(t, e) {
							if ("throw" === t.type) throw t.arg;
							return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
						},
						finish: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), k(n), v
							}
						},
						catch: function(t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var n = this.tryEntries[e];
								if (n.tryLoc === t) {
									var r = n.completion;
									if ("throw" === r.type) {
										var o = r.arg;
										k(n)
									}
									return o
								}
							}
							throw new Error("illegal catch attempt")
						},
						delegateYield: function(t, n, r) {
							return this.delegate = {
								iterator: O(t),
								resultName: n,
								nextLoc: r
							}, "next" === this.method && (this.arg = e), v
						}
					}, t
				}(t.exports);
				try {
					regeneratorRuntime = e
				} catch (t) {
					Function("r", "regeneratorRuntime = r")(e)
				}
			}
		},
		e = {};

	function n(r) {
		if (e[r]) return e[r].exports;
		var o = e[r] = {
			exports: {}
		};
		return t[r](o, o.exports, n), o.exports
	}
	n.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return n.d(e, {
				a: e
			}), e
		}, n.d = function(t, e) {
			for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
				enumerable: !0,
				get: e[r]
			})
		}, n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		},
		function() {
			"use strict";

			function t(t) {
				return [].slice.call(t)
			}

			function e(t) {
				t.setAttribute("disabled", !0), t.classList.add("is-loading"), t.dataset.defaultLabel || (t.dataset.defaultLabel = t.textContent), t.dataset.loadingLabel && (t.textContent = t.dataset.loadingLabel)
			}

			function r(t) {
				t.removeAttribute("disabled"), t.classList.remove("is-loading"), t.dataset.defaultLabel && (t.textContent = t.dataset.defaultLabel)
			}

			function o(e) {
				var n, r = e.querySelector(".js-submit-button"),
					o = e.querySelector(".js-meta-data"),
					a = {},
					i = {},
					u = !0;

				function c() {
					r.setAttribute("disabled", !0)
				}

				function s(t) {
					var e;
					t.className.indexOf("js-strict-validation") > -1 && (a[t.name] = t.value, i[t.name] = (e = t.value).indexOf("www.") > -1 || e.indexOf("<") > -1 || e.indexOf(">") > -1 || e.indexOf("://") > -1, i[t.name] ? t.classList.add("is-invalid") : t.classList.remove("is-invalid"), u = ! function() {
						for (var t in i)
							if (!0 === i[t]) return !0;
						return !1
					}()), !i[t.name] && window.ValidityState && (t.checkValidity() && "" !== t.value ? t.classList.add("is-valid") : t.classList.remove("is-valid"))
				}

				function d(t) {
					var e = t.target;
					if (e) {
						var n = e.dataset ? e.dataset.mask : null;
						if (u ? r.removeAttribute("disabled") : c(), n) {
							var o = t.keyCode || t.charCode,
								a = /[0\*]/,
								i = e.value.replace(/\W/g, ""),
								s = e.value.slice(-1),
								d = "";
							if (8 !== o && (46 !== o || 7 !== i.length)) try {
								for (var l = 0, f = 0, p = n.length; f < p && i[l];) {
									for (; n[f] && null === n[f].match(a) && i[l] !== n[f];) d += n[f++];
									d += i[l++], f++
								}(" " === s && !n[f].match(a) && f < p || s === n[f] && !s.match(/[0-9]/)) && (d += s), e.value = d
							} catch (t) {
								window.console && console.log("Something went wrong with masking: ", t)
							}
						}
					}
				}
				o && (o.value = JSON.stringify((n = {}, navigator && navigator.language && (n.browserLanguage = navigator.language), window && window.screen && window.screen.width && window.screen.height && window.devicePixelRatio && (n.screenResolution = (window.screen.width * window.devicePixelRatio).toString() + "x" + (window.screen.height * window.devicePixelRatio).toString()), navigator && navigator.userAgent && (n.browser = navigator.userAgent), n))), r.addEventListener("click", (function(t) {
					u || t.preventDefault()
				})), e.addEventListener("submit", (function() {
					c(), r.classList.toggle("is-loading", e.checkValidity()), r.textContent = r.dataset.loadingLabel
				})), t(document.querySelectorAll(".js-form-control")).forEach((function(t) {
					if ("password" === t.type) return void t.addEventListener("keyup", (function() {
						s(t)
					}));
					t.addEventListener("blur", (function() {
						s(t)
					}))
				})), t(document.querySelectorAll(".js-unique-request-form input")).forEach((function(t) {
					["keyup", "blur", "cut", "paste"].forEach((function(e) {
						t.addEventListener(e, d)
					}))
				}))
			}

			function a(n) {
				var r = t(n.querySelectorAll(".js-char-input")),
					o = n.querySelector(".js-otp-input"),
					a = n.querySelector(".js-submit-button"),
					i = n.querySelector(".js-resend-sms-button"),
					u = n.querySelector(".js-flash-message"),
					c = u.querySelector(".js-flash-message-box");

				function s() {
					return r.map((function(t) {
						return t.value
					})).join("")
				}

				function d() {
					o.value = s()
				}

				function l() {
					s().length >= r.length && a.click()
				}

				function f(t) {
					t.focus(), t.setSelectionRange(0, t.value.length)
				}

				function p(t) {
					var e = t.type,
						n = t.message;
					u && u.classList.contains("is-hidden") && u.classList.remove("is-hidden"), c && (c.classList = "error" === e ? "errorbox" : "successbox", c.textContent = n)
				}
				r[0] && r[0].focus(), r.forEach((function(t, e) {
					t.addEventListener("input", (function(t) {
						return function(t, e) {
							d(), l(), e + 1 < r.length && t && f(r[e + 1])
						}(t.target.value, e)
					})), t.addEventListener("paste", (function(t) {
						! function(t, e) {
							r.slice(e, e + t.length).forEach((function(e, n) {
								e.value = t[n] || ""
							})), d(), l()
						}(t.clipboardData.getData("text"), e)
					})), t.addEventListener("keydown", (function(t) {
						8 === t.keyCode && function(t) {
							var e = t > 0,
								n = r[t].value;
							e && !n && f(r[t - 1])
						}(e)
					}))
				})), i && i.addEventListener("click", (function() {
					var t, e, n = i.getAttribute("data-login-url");
					(t = "/dashboard/twofactorauthentication/retrigger", e = {
						method: "POST",
						headers: {
							Accept: "application/json; charset=UTF-8"
						}
					}, e = e || {}, new Promise((function(n, r) {
						var o = new XMLHttpRequest,
							a = [],
							i = [],
							u = {},
							c = function() {
								return {
									ok: 2 == (o.status / 100 | 0),
									statusText: o.statusText,
									status: o.status,
									url: o.responseURL,
									text: function() {
										return Promise.resolve(o.responseText)
									},
									json: function() {
										return Promise.resolve(o.responseText).then(JSON.parse)
									},
									blob: function() {
										return Promise.resolve(new Blob([o.response]))
									},
									clone: c,
									headers: {
										keys: function() {
											return a
										},
										entries: function() {
											return i
										},
										get: function(t) {
											return u[t.toLowerCase()]
										},
										has: function(t) {
											return t.toLowerCase() in u
										}
									}
								}
							};
						for (var s in o.open(e.method || "get", t, !0), o.onload = function() {
								o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(t, e, n) {
									a.push(e = e.toLowerCase()), i.push([e, n]), u[e] = u[e] ? u[e] + "," + n : n
								})), n(c())
							}, o.onerror = r, o.withCredentials = "include" == e.credentials, e.headers) o.setRequestHeader(s, e.headers[s]);
						o.send(e.body || null)
					}))).then((function(t) {
						return t.ok || 401 !== t.status ? t.json() : window.location.replace(n)
					})).then(p)
				})), n.addEventListener("submit", (function() {
					u && !u.classList.contains("is-hidden") && u.classList.add("is-hidden"), e(a)
				}))
			}
			var i = n(926),
				u = n.n(i),
				c = n(8),
				s = n.n(c),
				d = n(757),
				l = n.n(d),
				f = function(t) {
					t.preventDefault();
					try {
						var e = t.target.dataset.modalTriggers;
						document.querySelector('dialog[data-modal-id="'.concat(e, '"]')).showModal()
					} catch (t) {}
				},
				p = function(t) {
					t.preventDefault();
					try {
						t.target.closest("[data-modal-id]").close()
					} catch (t) {}
				};

			function h() {
				var t = document.querySelectorAll("dialog[data-modal-id]");
				if (t.length) {
					var e = new Set;
					t.forEach((function(t) {
						return e.add(t.dataset.modalId)
					})), document.querySelectorAll("[data-modal-triggers]").forEach((function(t) {
						e.has(t.dataset.modalTriggers) && t.addEventListener("click", f)
					})), document.querySelectorAll("[data-modal-action-close]").forEach((function(t) {
						t.addEventListener("click", p)
					}))
				}
			}

			function v(t) {
				return y.apply(this, arguments)
			}

			function y() {
				return (y = u()(l().mark((function t(e) {
					return l().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.prev = 0, t.next = 3, e.json();
							case 3:
								return t.abrupt("return", t.sent);
							case 6:
								t.prev = 6, t.t0 = t.catch(0);
							case 8:
								return t.prev = 8, t.next = 11, e.text();
							case 11:
								return t.abrupt("return", t.sent);
							case 14:
								t.prev = 14, t.t1 = t.catch(8);
							case 16:
								return t.abrupt("return", "[Unable to parse]");
							case 17:
							case "end":
								return t.stop()
						}
					}), t, null, [
						[0, 6],
						[8, 14]
					])
				})))).apply(this, arguments)
			}

			function m(t) {
				return g.apply(this, arguments)
			}

			function g() {
				return (g = u()(l().mark((function t(e) {
					var n, r;
					return l().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.prev = 0, t.next = 3, fetch("/dashboard/verification-request/status/".concat(e), {
									headers: {
										"Content-Type": "application/json",
										"X-Accept": "application/json"
									},
									credentials: "same-origin",
									redirect: "follow"
								});
							case 3:
								return n = t.sent, t.next = 6, v(n);
							case 6:
								if (r = t.sent, !n.ok || "string" == typeof r) {
									t.next = 9;
									break
								}
								return t.abrupt("return", {
									response: n,
									body: r
								});
							case 9:
								return t.abrupt("return", Promise.reject({
									response: n,
									error: r
								}));
							case 12:
								return t.prev = 12, t.t0 = t.catch(0), t.abrupt("return", Promise.reject({
									response: null,
									error: t.t0
								}));
							case 15:
							case "end":
								return t.stop()
						}
					}), t, null, [
						[0, 12]
					])
				})))).apply(this, arguments)
			}

			function w() {
				return (w = u()(l().mark((function t() {
					var e, n;
					return l().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								return t.prev = 0, t.next = 3, fetch("/dashboard/twofactorauthentication/retrigger", {
									headers: {
										"Content-Type": "application/json",
										"X-Accept": "application/json"
									},
									credentials: "same-origin",
									redirect: "follow"
								});
							case 3:
								return e = t.sent, t.next = 6, v(e);
							case 6:
								if (n = t.sent, !e.ok || "string" == typeof n || "error" === n.type) {
									t.next = 9;
									break
								}
								return t.abrupt("return", {
									response: e,
									body: n
								});
							case 9:
								return t.abrupt("return", Promise.reject({
									response: e,
									error: n
								}));
							case 12:
								return t.prev = 12, t.t0 = t.catch(0), t.abrupt("return", Promise.reject({
									response: null,
									error: t.t0
								}));
							case 15:
							case "end":
								return t.stop()
						}
					}), t, null, [
						[0, 12]
					])
				})))).apply(this, arguments)
			}

			function b(t) {
				var e, n, r;
				t.querySelector(".push-animation--time").textContent = (e = new Date, n = "0".concat(e.getHours()).slice(-2), r = "0".concat(e.getMinutes()).slice(-2), "".concat(n, ":").concat(r))
			}

			function x(t) {
				var e = 36e5;
				try {
					var n = t.getTime() - Date.now();
					return Math.max(0, Math.min(n, e))
				} catch (t) {
					return e
				}
			}
			var L, S, E = function() {
				var t = u()(l().mark((function t(n, o, a) {
					var i;
					return l().wrap((function(t) {
						for (;;) switch (t.prev = t.next) {
							case 0:
								if ("pending" !== o.dataset.requestStatus) {
									t.next = 2;
									break
								}
								return t.abrupt("return");
							case 2:
								return o.dataset.requestStatus = "pending", e(o), t.prev = 4, t.next = 7, m(n);
							case 7:
								if ("APPROVED" !== (i = t.sent).body.status) {
									t.next = 11;
									break
								}
								return a.click(), t.abrupt("return");
							case 11:
								"PENDING" !== i.body.status && window.expireIt && window.expireIt(), o.dataset.requestStatus = "success", r(o), t.next = 20;
								break;
							case 16:
								t.prev = 16, t.t0 = t.catch(4), o.dataset.requestStatus = "error", r(o);
							case 20:
							case "end":
								return t.stop()
						}
					}), t, null, [
						[4, 16]
					])
				})));
				return function(e, n, r) {
					return t.apply(this, arguments)
				}
			}();

			function j(t, e) {
				if (window.setupPusher) {
					if (!window.pusherClient) {
						var n = window.setupPusher();
						if (!n) return e.onError(),
							function() {};
						window.pusherClient = n
					}
					var r = window.pusherClient;
					r.connection.bind("error", e.onError), r.connection.bind("connected", e.onConnected);
					var o = r.subscribe("verificationRequest_".concat(t));
					return o.bind("pusher:subscription_error", e.onError), o.bind("pusher:subscription_succeeded", e.onConnected), o.bind("verification-request-updated", e.onEvent), ["connected", "connecting"].includes(r.connection.state) || r.connection.connect(),
						function() {
							var t = u()(l().mark((function t() {
								return l().wrap((function(t) {
									for (;;) switch (t.prev = t.next) {
										case 0:
											return r.connection.disconnect(), r.connection.unbind("error", e.onError), r.connection.unbind("connected", e.onConnected), t.next = 5, o.unbind();
										case 5:
											return t.next = 7, o.unsubscribe();
										case 7:
										case "end":
											return t.stop()
									}
								}), t)
							})));
							return function() {
								return t.apply(this, arguments)
							}
						}()
				}
			}

			function q(t) {
				var n = t.querySelector(".push-animation--wrapper"),
					o = t.querySelector('button[value="submit"]'),
					a = t.querySelector('button[value="check"]'),
					i = Object.fromEntries(new FormData(t).entries()).requestIdentifier;
				b(t);
				var u = {
						onConnected: function() {
							return t.dataset.pusherStatus = "success"
						},
						onError: function() {
							return t.dataset.pusherStatus = "error"
						},
						onEvent: function() {
							return E(i, a, o)
						}
					},
					c = function() {};
				"true" !== t.dataset.expired && i && (c = j(i, u)), window.expireIt = function() {
					t.dataset.expired = "true", n.dataset.expired = "true", c()
				};
				var d = t.dataset.expiresAt ? x(new Date(t.dataset.expiresAt)) : 0,
					l = setTimeout(window.expireIt, d);
				window.retryIt = function() {
					var o = t.querySelector('button[value="retry"]');
					o && e(o),
						function() {
							return w.apply(this, arguments)
						}().then((function(e) {
							if (e.body && "object" === s()(e.body) && "success" === e.body.type) {
								var a = String("PENDING" !== e.body.vrStatus);
								t.dataset.expired = a, n.dataset.expired = a, t.dataset.expiresAt = e.body.vrExpiresAt, i = e.body.requestIdentifier;
								var d = t.querySelector('[name="requestIdentifier"]');
								d && (d.value = e.body.requestIdentifier);
								var f = t.querySelector('[name="vrNonceInfo"]');
								f && (f.value = e.body.vrNonceInfo), o && r(o), l && clearTimeout(l), l = setTimeout(window.expireIt, x(new Date(e.body.vrExpiresAt))), "true" !== a && i && (c = j(i, u))
							}
						}), (function(t) {
							! function(t) {
								return Boolean(t && "object" === s()(t) && t.error && "object" === s()(t.error) && t.error.message && t.error.message.includes("reached the maximum number of allowed attempts"))
							}(t) ? o && r(o): window.location.pathname = "/dashboard/logout"
						}))
				}, t.addEventListener("submit", (function(t) {
					var e = t.submitter.value;
					return "submit" === e ? (l && clearTimeout(l), !0) : (t.preventDefault(), "check" === e && i ? E(i, a, o) : "retry" !== e || window.retryIt())
				})), "loading" !== document.readyState ? h() : document.addEventListener("DOMContentLoaded", h)
			}

			function k(t) {
				var e = t.querySelector(".js-document-type"),
					n = t.querySelector(".js-document-back");
				t.setAttribute("data-document-type", e.value), e.addEventListener("change", (function(e) {
					t.setAttribute("data-document-type", e.target.value), "passport" !== e.target.value ? n.setAttribute("required", !0) : n.removeAttribute("required")
				}))
			}
			L = ".js-unique-request-form", (S = document.querySelector(L)) && ("loading" !== document.readyState ? o(S) : document.addEventListener("DOMContentLoaded", (function() {
					return o(S)
				}))),
				function(t) {
					var e = document.querySelector(t),
						n = document.querySelector(".js-busines-location-select", e);
					if (n) {
						var r = function() {
							"true" === n.options[n.selectedIndex].getAttribute("data-show-warning") ? e.querySelector(".js-location-warning").classList.remove("is-hidden") : e.querySelector(".js-location-warning").classList.add("is-hidden"), "true" === n.options[n.selectedIndex].getAttribute("data-show-uk-warning") ? (e.querySelector(".js-uk-warning").classList.remove("is-hidden"), document.getElementById("submit-button").disabled = !0) : (e.querySelector(".js-uk-warning").classList.add("is-hidden"), document.getElementById("submit-button").disabled = !1)
						};
						r(), n.addEventListener("change", r)
					}
				}(".js-business-location"),
				function(t) {
					var e = document.querySelector(t);
					e && ("loading" !== document.readyState ? a(e) : document.addEventListener("DOMContentLoaded", (function() {
						return a(e)
					})))
				}(".js-two-factor-authentication-form"),
				function(t) {
					var e = document.querySelector(t);
					e && ("loading" !== document.readyState ? q(e) : document.addEventListener("DOMContentLoaded", (function() {
						return q(e)
					})))
				}(".js-two-factor-authentication-app"),
				function(t) {
					var e = document.querySelector(t);
					e && ("loading" !== document.readyState ? k(e) : document.addEventListener("DOMContentLoaded", (function() {
						return k(e)
					})))
				}(".js-two-factor-authentication-recovery-form")
		}()
}();