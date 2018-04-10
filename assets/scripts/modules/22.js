function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = {
        update: function () {
            "undefined" != typeof window && "function" == typeof window.matchMedia && (n.fine = window.matchMedia("(pointer: fine)").matches, n.coarse = window.matchMedia("(pointer: coarse)").matches, n.none = window.matchMedia("(pointer: none)").matches, n.anyFine = window.matchMedia("(any-pointer: fine)").matches, n.anyCoarse = window.matchMedia("(any-pointer: coarse)").matches, n.anyNone = window.matchMedia("(any-pointer: none)").matches)
        }
    };
    n.update(), e.default = n
}