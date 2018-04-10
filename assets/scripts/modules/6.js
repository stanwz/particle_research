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
        o = i(0),
        a = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        s = function () {
            function t() {
                n(this, t), this.fps = void 0, this.time = window.performance.now(), this.start = this.start.bind(this), this.pause = this.pause.bind(this), this.onTick = this.onTick.bind(this), this.start(), this.bind(), window.requestAnimationFrame(this.onTick)
            }

            return r(t, [{
                key: "bind",
                value: function () {
                    a.default.on(a.default.VISIBILITY_HIDDEN, this.pause), a.default.on(a.default.VISIBILITY_VISIBLE, this.start)
                }
            }, {
                key: "start",
                value: function () {
                    this.startTime = window.performance.now(), this.oldTime = this.startTime, this.isPaused = !1
                }
            }, {
                key: "pause",
                value: function () {
                    this.isPaused = !0
                }
            }, {
                key: "onTick",
                value: function (t) {
                    this.time = t, this.isPaused || (this.delta = (t - this.oldTime) / 1e3, this.oldTime = t, a.default.emit(a.default.RAF, this.delta, t)), window.requestAnimationFrame(this.onTick)
                }
            }]), t
        }();
    e.default = new s
}