function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function r(t) {
        if (Array.isArray(t)) {
            for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
            return i
        }
        return Array.from(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = function () {
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
        s = i(2),
        h = i(1),
        c = i(0),
        u = n(c),
        l = i(44),
        p = n(l),
        f = i(45),
        d = n(f),
        m = i(48),
        v = n(m),
        g = i(50),
        y = n(g),
        _ = i(52),
        x = n(_),
        b = function () {
            function t(e) {
                o(this, t), this.$el = e, this.$refs = {
                    panels: []
                }, this.current = 0, this.isAnimating = !1, this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.onEnd = this.onEnd.bind(this), this.init()
            }

            return a(t, [{
                key: "init",
                value: function () {
                    var t = this;
                    [].concat(r((0, h.qsa)("[data-panel]", this.$el))).forEach(function (e) {
                        t.$refs.panels.push(new y.default(e))
                    }), this.pagination = new x.default(this.$refs.panels.length), this.bind()
                }
            }, {
                key: "bind",
                value: function () {
                    this.keyboard = new p.default([{
                        key: 40,
                        callback: this.next
                    }, {
                        key: 38,
                        callback: this.prev
                    }]), this.mouse = new d.default(this.prev, this.next), this.swipe = new v.default(this.prev, this.next), u.default.on(u.default.PANEL_NEXT, this.next), u.default.on(u.default.PANEL_PREV, this.prev)
                }
            }, {
                key: "next",
                value: function () {
                    this.jump(this.current + 1)
                }
            }, {
                key: "prev",
                value: function () {
                    this.jump(this.current - 1)
                }
            }, {
                key: "jump",
                value: function (t) {
                    var e = this;
                    if (!this.isAnimating && !(this.current === t || t >= this.$refs.panels.length || t < 0)) {
                        this.isAnimating = !0;
                        var i = this.current,
                            n = this.getPanel(),
                            r = this.getPanel(t),
                            o = t > i ? "next" : "prev";
                        this.pagination.jump(t, n.name, r.name), document.body.classList.add("is-" + r.name), document.body.classList.remove("is-" + n.name), u.default.emit(u.default.PANEL_CHANGE, i, t, n.name, r.name), r.activate(), window.EVS_FALLBACK || u.default.on(u.default.PANEL_END, this.onEnd);
                        var a = new s.TimelineMax({
                                onComplete: function () {
                                    n.deactivate(), n.clean(), window.EVS_FALLBACK && (e.isAnimating = !1)
                                }
                            }),
                            h = n["to" + r.name],
                            c = r["from" + n.name];
                        h || (h = n.out), c || (c = r.in), a.add("start"), a.add(h.call(n, o), "start"), a.add(c.call(r, o), "start"), this.current = t
                    }
                }
            }, {
                key: "getPanel",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
                    return this.$refs.panels[t]
                }
            }, {
                key: "onEnd",
                value: function () {
                    this.isAnimating = !1, u.default.off(u.default.PANEL_END, this.onEnd)
                }
            }]), t
        }();
    e.default = b
}