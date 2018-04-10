function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
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
        a = i(6),
        s = (n(a), i(5)),
        h = (n(s), i(19)),
        c = (n(h), i(1)),
        u = i(0),
        l = n(u),
        p = i(25),
        f = n(p),
        d = i(26),
        m = n(d),
        v = i(43),
        g = n(v),
        y = i(53),
        _ = n(y),
        x = i(54),
        b = n(x),
        w = i(55),
        M = n(w),
        T = i(59),
        S = n(T),
        A = i(60),
        P = n(A),
        E = function () {
            function t() {
                r(this, t), this.$refs = {
                    loader: (0, c.qs)(".loader"),
                    ui: (0, c.qs)(".ui"),
                    pagination: (0, c.qs)(".pagination")
                }, this.ready = this.ready.bind(this), this.init()
            }

            return o(t, [{
                key: "init",
                value: function () {
                    var t = this;
                    f.default && !window.location.href.match(/fallback/) ? (l.default.on(l.default.WORLD_READY, this.ready), this.home = new b.default((0, c.qs)('[data-panel="home"]')), this.world = new m.default, this.sound = new M.default((0, c.qs)('[data-component="sound"]'))) : (window.EVS_FALLBACK = !0, document.documentElement.classList.add("is-fallback"), this.fallback = new P.default((0, c.qs)('[data-component="canvas"]')), this.fallback.init().then(function () {
                        t.home = new b.default((0, c.qs)('[data-panel="home"]')), l.default.emit(l.default.HOME_READY), t.ready()
                    }))
                }
            }, {
                key: "ready",
                value: function () {
                    this.panels = new g.default((0, c.qs)('[data-component="panel"]')), this.ui = new _.default((0, c.qs)('[data-component="ui"]')), this.form = new S.default((0, c.qs)('[data-component="form"]')), this.show()
                }
            }, {
                key: "show",
                value: function () {
                    this.$refs.loader.remove(), this.ui.show()
                }
            }]), t
        }();
    e.default = E
}