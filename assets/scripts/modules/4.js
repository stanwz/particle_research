function (t, e) {
    var i;
    i = function () {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}