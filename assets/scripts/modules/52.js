function (t, e, i) {
    "use strict";

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function () {
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
        o = i(2),
        a = i(1),
        s = function () {
            function t(e) {
                n(this, t), this.max = e, this.current = 1, this.init()
            }

            return r(t, [{
                key: "init",
                value: function () {
                    this.$el = document.createElement("div"), this.$el.classList.add("pagination"), this.$el.innerHTML = '<div class="pagination__current-outer">\n      <div class="pagination__current-inner">\n        <div class="pagination__prev">\n          ' + (this.current - 1) + '\n        </div>\n        <div class="pagination__current">\n          ' + this.current + '\n        </div>\n        <div class="pagination__next">\n          ' + (this.current + 1) + '\n        </div>\n      </div>\n    </div>\n    <div class="pagination__max">\n      ' + this.max + "\n    </div>", this.$refs = {
                        inner: (0, a.qs)(".pagination__current-inner", this.$el),
                        prev: (0, a.qs)(".pagination__prev", this.$el),
                        current: (0, a.qs)(".pagination__current", this.$el),
                        next: (0, a.qs)(".pagination__next", this.$el)
                    }, document.body.appendChild(this.$el), this.height = this.$refs.current.offsetHeight, o.TweenMax.set(this.$el, {
                        y: -this.height * this.max / 2
                    })
                }
            }, {
                key: "jump",
                value: function (t, e, i) {
                    var n = this,
                        r = t > this.current - 1 ? "+=" + this.height : "-=" + this.height,
                        a = t > this.current - 1 ? "-=" + this.height : "+=" + this.height,
                        s = new o.TimelineLite({
                            onComplete: function () {
                                n.current = t + 1, n.$refs.current.textContent = n.current, o.TweenMax.set(n.$refs.inner, {
                                    clearProps: "y"
                                }), n.$refs.prev.textContent = n.current - 1, n.$refs.next.textContent = n.current + 1
                            }
                        }),
                        h = 1.25;
                    (window.EVS_FALLBACK || "end" === e || "end" === i) && (h = 0), s.add("start").delay(h).to(this.$el, 1, {
                        y: r,
                        ease: o.Power4.easeInOut
                    }, "start").to(this.$refs.inner, 1, {
                        y: a,
                        ease: o.Power4.easeInOut
                    }, "start")
                }
            }]), t
        }();
    e.default = s
}