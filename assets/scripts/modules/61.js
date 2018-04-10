function (t, e, i) {
    var n, r;
    /*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
    !function (o, a) {
        "use strict";
        n = [i(62)], void 0 !== (r = function (t) {
            return a(o, t)
        }.apply(e, n)) && (t.exports = r)
    }("undefined" != typeof window ? window : this, function (t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? c.call(t) : [t]
        }

        function r(t, e, o) {
            if (!(this instanceof r)) return new r(t, e, o);
            var a = t;
            if ("string" == typeof t && (a = document.querySelectorAll(t)), !a) return void h.error("Bad element for imagesLoaded " + (a || t));
            this.elements = n(a), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), s && (this.jqDeferred = new s.Deferred), setTimeout(this.check.bind(this))
        }

        function o(t) {
            this.img = t
        }

        function a(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }

        var s = t.jQuery,
            h = t.console,
            c = Array.prototype.slice;
        r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, r.prototype.addElementImages = function (t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && u[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var r = i[n];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (n = 0; n < o.length; n++) {
                        var a = o[n];
                        this.addElementBackgroundImages(a)
                    }
                }
            }
        };
        var u = {
            1: !0,
            9: !0,
            11: !0
        };
        return r.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var r = n && n[2];
                    r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                }
        }, r.prototype.addImage = function (t) {
            var e = new o(t);
            this.images.push(e)
        }, r.prototype.addBackground = function (t, e) {
            var i = new a(t, e);
            this.images.push(i)
        }, r.prototype.check = function () {
            function t(t, i, n) {
                setTimeout(function () {
                    e.progress(t, i, n)
                })
            }

            var e = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            this.images.forEach(function (e) {
                e.once("progress", t), e.check()
            })
        }, r.prototype.progress = function (t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e)
        }, r.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
            if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src
        }, o.prototype.getIsImageComplete = function () {
            return this.img.complete && this.img.naturalWidth
        }, o.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype = Object.create(o.prototype), a.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, a.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, a.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function (e) {
            (e = e || t.jQuery) && (s = e, s.fn.imagesLoaded = function (t, e) {
                return new r(this, t, e).jqDeferred.promise(s(this))
            })
        }, r.makeJQueryPlugin(), r
    })
}