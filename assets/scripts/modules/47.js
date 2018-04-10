function (t, e, i) {
    "use strict";

    function n(t, e, i) {
        return Math.min(e, Math.max(t, i))
    }

    function r(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function o(t, e) {
        return e < t ? 0 : 1
    }

    function a(t, e, i, n, r) {
        return (t - e) / (i - e) * (r - n) + n
    }

    function s(t, e) {
        return Math.sqrt(t * t + e * e)
    }

    function h(t, e, i, n) {
        var r = t - i,
            o = e - n;
        return Math.sqrt(r * r + o * o)
    }

    function c(t, e, i) {
        var n = Math.max(0, Math.min(1, (i - t) / (e - t)));
        return n * n * (3 - 2 * n)
    }

    function u(t, e, i) {
        return t + (e - t) * i
    }

    function l(t, e, i) {
        return (i - t) / (e - t)
    }

    function p(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
        return parseFloat(Math.min(t + Math.random() * (e - t), e).toFixed(i))
    }

    function f(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }

    function d() {
        return Math.random() > .5 ? 1 : -1
    }

    function m(t, e, i) {
        var n = i - e;
        if (n <= 0) return 0;
        var r = (t - e) % n;
        return r < 0 && (r += n), r + e
    }

    function v(t) {
        return t * Math.PI / 180
    }

    function g(t) {
        return 180 * t / Math.PI
    }

    function y(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
        return Math.floor(t + e)
    }

    function _(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e-4;
        return Math.ceil(t + e)
    }

    function x(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4;
        return Math.abs(t - e) < i
    }

    function b(t, e) {
        return t > e - (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4)
    }

    function w(t, e) {
        return t < e + (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-4)
    }

    function M(t, e, i) {
        return Math.min(t + e, i)
    }

    function T(t, e, i) {
        return Math.max(t - e, i)
    }

    function S(t) {
        return !!(1 & t)
    }

    function A(t) {
        return !(1 & t)
    }

    function P(t) {
        return 0 !== t && 0 == (t & t - 1)
    }

    function E(t) {
        return Math.pow(2, Math.round(Math.log(t) / Math.log(2)))
    }

    function C(t) {
        return Math.pow(2, Math.ceil(Math.log(t) / Math.log(2)))
    }

    function L(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return t > e || i > e ? 1 : t < i || i > t ? 0 : (t - i) / e
    }

    function N() {
        for (var t = 0, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
        var r = !0,
            o = !1,
            a = void 0;
        try {
            for (var s, h = i[Symbol.iterator](); !(r = (s = h.next()).done); r = !0) {
                t += +s.value
            }
        } catch (t) {
            o = !0, a = t
        } finally {
            try {
                !r && h.return && h.return()
            } finally {
                if (o) throw a
            }
        }
        return t / i.length
    }

    function O(t, e) {
        return Math.abs(t - e)
    }

    function R(t, e, i) {
        return Math.abs(t - e) <= i
    }

    function I(t, e, i) {
        return (i - t) / (e - t)
    }

    function D(t, e, i) {
        return i <= 0 ? t : i >= 1 ? e : t + i * (e - t)
    }

    function k(t, e) {
        var i = F(e - t, 360);
        return i > 180 && (i = Math.abs(i - 360)), i
    }

    function z(t, e) {
        return v(k(g(t), g(e)))
    }

    function U(t) {
        return t - Math.floor(t)
    }

    function F(t, e) {
        return (t % e + e) % e
    }

    function B(t, e, i) {
        return F(t + u(0, k(t, e), i), 360)
    }

    function G(t, e, i) {
        return v(B(g(t), g(e), i))
    }

    function j(t) {
        return Math.pow(t, 2.2)
    }

    function V(t) {
        return Math.pow(t, 1 / 2.2)
    }

    function W(t, e, i) {
        if (t > e) return t;
        var n = 2 * i - e,
            r = 2 * e - 3 * i,
            o = t / e;
        return (n * o + r) * o * o + i
    }

    function H(t, e) {
        var i = t * e;
        return i * Math.exp(1 - i)
    }

    function X(t, e, i) {
        return (i = Math.abs(i - t)) > e ? 0 : 1 - (i /= e) * i * (3 - 2 * i)
    }

    function q(t, e, i) {
        return Math.exp(-e * Math.pow(t, i))
    }

    function Y(t, e) {
        return Math.pow(4 * t * (1 - t), e)
    }

    function $(t, e, i) {
        return Math.pow(e + i, e + i) / (Math.pow(e, e) * Math.pow(i, i)) * Math.pow(t, e) * Math.pow(1 - t, i)
    }

    function Z(t, e, i) {
        var n = Math.exp(-i * t) + Math.exp(-i * e);
        return -Math.log(n) / i
    }

    function J(t, e, i) {
        return Math.log(Math.exp(t) + Math.exp(e)) / i
    }

    function Q(t) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now()) - t
    }

    function K(t, e) {
        return 0 === e ? t : K(e, t % e)
    }

    function tt(t, e, i, n, r, o, a, s) {
        return (i - t) * (a - r) + (n - e) * (s - o)
    }

    Object.defineProperty(e, "__esModule", {
        value: !0
    }), i.d(e, "clamp", function () {
        return n
    }), i.d(e, "clamp01", function () {
        return r
    }), i.d(e, "step", function () {
        return o
    }), i.d(e, "map", function () {
        return a
    }), i.d(e, "diagonal", function () {
        return s
    }), i.d(e, "distance", function () {
        return h
    }), i.d(e, "smoothStep", function () {
        return c
    }), i.d(e, "lerp", function () {
        return u
    }), i.d(e, "mix", function () {
        return u
    }), i.d(e, "normalize", function () {
        return l
    }), i.d(e, "randomFloat", function () {
        return p
    }), i.d(e, "randomInt", function () {
        return f
    }), i.d(e, "randomSign", function () {
        return d
    }), i.d(e, "wrap", function () {
        return m
    }), i.d(e, "degToRad", function () {
        return v
    }), i.d(e, "toRadians", function () {
        return v
    }), i.d(e, "radToDeg", function () {
        return g
    }), i.d(e, "toDegrees", function () {
        return g
    }), i.d(e, "fuzzyFloor", function () {
        return y
    }), i.d(e, "fuzzyCeil", function () {
        return _
    }), i.d(e, "fuzzyEqual", function () {
        return x
    }), i.d(e, "fuzzyGreaterThan", function () {
        return b
    }), i.d(e, "fuzzyLessThan", function () {
        return w
    }), i.d(e, "maxAdd", function () {
        return M
    }), i.d(e, "minSub", function () {
        return T
    }), i.d(e, "isOdd", function () {
        return S
    }), i.d(e, "isEven", function () {
        return A
    }), i.d(e, "isPowerOfTwo", function () {
        return P
    }), i.d(e, "closestPowerOfTwo", function () {
        return E
    }), i.d(e, "nextPowerOfTwo", function () {
        return C
    }), i.d(e, "percent01", function () {
        return L
    }), i.d(e, "average", function () {
        return N
    }), i.d(e, "difference", function () {
        return O
    }), i.d(e, "within", function () {
        return R
    }), i.d(e, "inverseLerp", function () {
        return I
    }), i.d(e, "inverseMix", function () {
        return I
    }), i.d(e, "lerpUnclamped", function () {
        return D
    }), i.d(e, "mixUnclamped", function () {
        return D
    }), i.d(e, "deltaAngleDeg", function () {
        return k
    }), i.d(e, "deltaAngle", function () {
        return k
    }), i.d(e, "deltaAngleRad", function () {
        return z
    }), i.d(e, "fract", function () {
        return U
    }), i.d(e, "mod", function () {
        return F
    }), i.d(e, "lerpAngleDeg", function () {
        return B
    }), i.d(e, "lerpAngle", function () {
        return B
    }), i.d(e, "lerpAngleRad", function () {
        return G
    }), i.d(e, "gammaToLinearSpace", function () {
        return j
    }), i.d(e, "linearToGammaSpace", function () {
        return V
    }), i.d(e, "almostIdentity", function () {
        return W
    }), i.d(e, "impulse", function () {
        return H
    }), i.d(e, "cubicPulse", function () {
        return X
    }), i.d(e, "expStep", function () {
        return q
    }), i.d(e, "parabola", function () {
        return Y
    }), i.d(e, "powerCurve", function () {
        return $
    }), i.d(e, "smoothMin", function () {
        return Z
    }), i.d(e, "smoothMax", function () {
        return J
    }), i.d(e, "deltaTime", function () {
        return Q
    }), i.d(e, "gcd", function () {
        return K
    }), i.d(e, "dotProduct", function () {
        return tt
    })
}