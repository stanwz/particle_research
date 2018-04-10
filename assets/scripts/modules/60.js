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
        a = i(61),
        s = n(a),
        h = i(0),
        c = n(h),
        u = function () {
            function t(e) {
                r(this, t), this.panels = [{
                    name: "home",
                    img: "assets/images/bg-home-b676bd0cc2.png",
                    imgSmall: "assets/images/bg-home-small-6ae8308343.png"
                }, {
                    name: "brain",
                    img: "assets/images/bg-brain-a8ff4f2868.png",
                    imgSmall: "assets/images/bg-brain-small-ae2481bbc2.png"
                }, {
                    name: "gloves",
                    img: "assets/images/bg-gloves-d54f82fbaa.png",
                    imgSmall: "assets/images/bg-gloves-small-3919cb79ee.png"
                }, {
                    name: "stadium",
                    img: "assets/images/bg-stadium-a34c07989d.png",
                    imgSmall: "assets/images/bg-stadium-small-8e1234d071.png"
                }, {
                    name: "lsm",
                    img: "assets/images/bg-lsm-1f5e1a1d35.png",
                    imgSmall: "assets/images/bg-lsm-small-9f95aff441.png"
                }, {
                    name: "end",
                    img: "assets/images/bg-end-65607c2cbe.png",
                    imgSmall: "assets/images/bg-end-small-5643f70c57.png"
                }], this.$el = e, this.$refs = {
                    images: []
                }, this.onChange = this.onChange.bind(this)
            }

            return o(t, [{
                key: "init",
                value: function () {
                    var t = this;
                    return new Promise(function (e) {
                        t.panels.forEach(function (e) {
                            var i = new Image;
                            i.src = e.img, i.setAttribute("srcset", e.imgSmall + " 768w, " + e.img + " 1440w"), i.setAttribute("sizes", "(max-width: 768px) 320px, 1440px"), i.dataset.image = e.name, t.$refs.images.push(i), t.$el.appendChild(i)
                        }), t.$refs.images[0].classList.add("is-active"), t.bind(), (0, s.default)(t.$el, e)
                    })
                }
            }, {
                key: "bind",
                value: function () {
                    c.default.on(c.default.PANEL_CHANGE, this.onChange)
                }
            }, {
                key: "onChange",
                value: function (t, e) {
                    this.$refs.images[t].classList.remove("is-active"), this.$refs.images[e].classList.add("is-active")
                }
            }]), t
        }();
    e.default = u
}