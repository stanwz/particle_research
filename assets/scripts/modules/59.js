function (t, e, i) {
    "use strict";

    function n(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
    }

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            return function (e, i, n) {
                return i && t(e.prototype, i), n && t(e, n), e
            }
        }(),
        a = i(2),
        s = i(1),
        h = function () {
            function t(e) {
                r(this, t), this.$el = e, this.$refs = {
                    inner: (0, s.qs)(".panel-end__content-inner", this.$el),
                    title: (0, s.qs)(".panel-end__title"),
                    items: [].concat(n((0, s.qsa)('[type="radio"]', this.$el))),
                    go: (0, s.qs)('[type="button"]', this.$el),
                    email: (0, s.qs)('[type="email"]', this.$el),
                    submit: (0, s.qs)('[type="submit"]', this.$el)
                }, this.onCheck = this.onCheck.bind(this), this.onGo = this.onGo.bind(this), this.onSubmit = this.onSubmit.bind(this), this.init()
            }

            return o(t, [{
                key: "init",
                value: function () {
                    this.bind()
                }
            }, {
                key: "bind",
                value: function () {
                    var t = this;
                    this.$refs.items.forEach(function (e) {
                        (0, s.$on)(e, "change", t.onCheck)
                    }), (0, s.$on)(this.$refs.go, "click", this.onGo), (0, s.$on)(this.$el, "submit", this.onSubmit)
                }
            }, {
                key: "onCheck",
                value: function () {
                    this.$refs.go.disabled = !1
                }
            }, {
                key: "onGo",
                value: function () {
                    (new a.TimelineLite).set(this.$refs.email, {
                        width: 180
                    }).set(this.$refs.submit, {
                        width: "auto"
                    }).add("shrink").to(this.$refs.go, .35, {
                        width: 0
                    }, "shrink").add("grow").from([this.$refs.email, this.$refs.submit], .5, {
                        width: 0
                    }, "grow")
                }
            }, {
                key: "onSubmit",
                value: function (t) {
                    t.preventDefault(), this.send()
                }
            }, {
                key: "send",
                value: function () {
                    var t = this,
                        e = new FormData(this.$el);
                    fetch("process.php", {
                        method: "POST",
                        body: e
                    }).then(function (e) {
                        return t.status = e.status, e.text()
                    }).then(function (e) {
                        t.displayMessage(t.status, e)
                    })
                }
            }, {
                key: "displayMessage",
                value: function (t, e) {
                    var i = this;
                    this.msg = document.createElement("div"), this.msg.classList.add("panel-end__content__message"), this.msg.innerHTML = "<strong>" + (200 === t ? "Thank you!" : "Oups!") + "</strong>\n      " + e + '<br>\n      <button type="button">' + (200 === t ? "Got it" : "Try again") + "</button>", (0, s.$insertAfter)(this.msg, this.$refs.inner), (new a.TimelineLite).to([this.$refs.title, this.$refs.inner], 1, {
                        autoAlpha: 0
                    }).to(this.msg, 1, {
                        autoAlpha: 1
                    });
                    var n = (0, s.qs)("button", this.msg);
                    (0, s.$on)(n, "click", function () {
                        200 === t ? location.reload() : i.reset()
                    })
                }
            }, {
                key: "reset",
                value: function () {
                    var t = this;
                    new a.TimelineLite({
                        onComplete: function () {
                            t.msg.remove()
                        }
                    }).to(this.msg, 1, {
                        autoAlpha: 0
                    }).to([this.$refs.title, this.$refs.inner], 1, {
                        autoAlpha: 1
                    })
                }
            }]), t
        }();
    e.default = h
}