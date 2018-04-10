function (t, e, i) {
    "use strict";
    (function (i) {
        var n, r, o, a = void 0 !== t && t.exports && void 0 !== i ? i : window;
        !function (t) {
            var e = t.GreenSockGlobals || t,
                i = function (t) {
                    var i, n = t.split("."),
                        r = e;
                    for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
                    return r
                }("com.greensock.utils"),
                n = function t(e) {
                    var i = e.nodeType,
                        n = "";
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                    } else if (3 === i || 4 === i) return e.nodeValue;
                    return n
                },
                r = document,
                o = r.defaultView ? r.defaultView.getComputedStyle : function () {
                },
                a = /([A-Z])/g,
                s = function (t, e, i, n) {
                    var r;
                    return (i = i || o(t, null)) ? (t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
                },
                h = function (t) {
                    return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                },
                c = function (t) {
                    var e, i, n, r = [],
                        o = t.length;
                    for (e = 0; e < o; e++)
                        if (i = t[e], h(i))
                            for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                        else r.push(i);
                    return r
                },
                u = /(?:\r|\n|\t\t)/g,
                l = /(?:\s\s+)/g,
                p = function (t) {
                    return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536
                },
                f = r.all && !r.addEventListener,
                d = " style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'"),
                m = function (t, e) {
                    t = t || "";
                    var i = -1 !== t.indexOf("++"),
                        n = 1;
                    return i && (t = t.split("++").join("")),
                        function () {
                            return "<" + e + d + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                        }
                },
                v = i.SplitText = e.SplitText = function (t, e) {
                    if ("string" == typeof t && (t = v.selector(t)), !t) throw "cannot split a null element.";
                    this.elements = h(t) ? c(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
                },
                g = function t(e, i, n) {
                    var r = e.nodeType;
                    if (1 === r || 9 === r || 11 === r)
                        for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
                    else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
                },
                y = function (t, e) {
                    for (var i = e.length; --i > -1;) t.push(e[i])
                },
                _ = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++])) ;
                    return i
                },
                x = function (t, e, i) {
                    for (var n; t && t !== e;) {
                        if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                        t = t.parentNode || t._parent
                    }
                    return !1
                },
                b = function t(e) {
                    var i, n, r = _(e.childNodes),
                        o = r.length;
                    for (i = 0; i < o; i++) n = r[i], n._isSplit ? t(n) : (i && 3 === n.previousSibling.nodeType ? n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue : 3 !== n.nodeType && e.insertBefore(n.firstChild, n), e.removeChild(n))
                },
                w = function (t, e, i, n, a, h, c) {
                    var u, l, p, f, d, m, v, _, w, M, T, S, A = o(t),
                        P = s(t, "paddingLeft", A),
                        E = -999,
                        C = s(t, "borderBottomWidth", A) + s(t, "borderTopWidth", A),
                        L = s(t, "borderLeftWidth", A) + s(t, "borderRightWidth", A),
                        N = s(t, "paddingTop", A) + s(t, "paddingBottom", A),
                        O = s(t, "paddingLeft", A) + s(t, "paddingRight", A),
                        R = .2 * s(t, "fontSize"),
                        I = s(t, "textAlign", A, !0),
                        D = [],
                        k = [],
                        z = [],
                        U = e.wordDelimiter || " ",
                        F = e.span ? "span" : "div",
                        B = e.type || e.split || "chars,words,lines",
                        G = a && -1 !== B.indexOf("lines") ? [] : null,
                        j = -1 !== B.indexOf("words"),
                        V = -1 !== B.indexOf("chars"),
                        W = "absolute" === e.position || !0 === e.absolute,
                        H = e.linesClass,
                        X = -1 !== (H || "").indexOf("++"),
                        q = [];
                    for (G && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), X && (H = H.split("++").join("")), l = t.getElementsByTagName("*"), p = l.length, d = [], u = 0; u < p; u++) d[u] = l[u];
                    if (G || W)
                        for (u = 0; u < p; u++) f = d[u], ((m = f.parentNode === t) || W || V && !j) && (S = f.offsetTop, G && m && Math.abs(S - E) > R && "BR" !== f.nodeName && (v = [], G.push(v), E = S), W && (f._x = f.offsetLeft, f._y = S, f._w = f.offsetWidth, f._h = f.offsetHeight), G && ((f._isSplit && m || !V && m || j && m || !j && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (v.push(f), f._x -= P, x(f, t, U) && (f._wordEnd = !0)), "BR" === f.nodeName && f.nextSibling && "BR" === f.nextSibling.nodeName && G.push([])));
                    for (u = 0; u < p; u++) f = d[u], m = f.parentNode === t, "BR" !== f.nodeName ? (W && (w = f.style, j || m || (f._x += f.parentNode._x, f._y += f.parentNode._y), w.left = f._x + "px", w.top = f._y + "px", w.position = "absolute", w.display = "block", w.width = f._w + 1 + "px", w.height = f._h + "px"), !j && V ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && q.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), d.splice(u--, 1), p--) : m || (S = !f.nextSibling && x(f.parentNode, t, U), f.parentNode._parent && f.parentNode._parent.appendChild(f), S && f.parentNode.appendChild(r.createTextNode(" ")), e.span && (f.style.display = "inline"), D.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? k.push(f) : V && !f._isSplit && (e.span && (f.style.display = "inline"), D.push(f))) : G || W ? (f.parentNode && f.parentNode.removeChild(f), d.splice(u--, 1), p--) : j || t.appendChild(f);
                    for (u = q.length; --u > -1;) q[u].parentNode.removeChild(q[u]);
                    if (G) {
                        for (W && (M = r.createElement(F), t.appendChild(M), T = M.offsetWidth + "px", S = M.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(M)), w = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                        for (_ = " " === U && (!W || !j && !V), u = 0; u < G.length; u++) {
                            for (v = G[u], M = r.createElement(F), M.style.cssText = "display:block;text-align:" + I + ";position:" + (W ? "absolute;" : "relative;"), H && (M.className = H + (X ? u + 1 : "")), z.push(M), p = v.length, l = 0; l < p; l++) "BR" !== v[l].nodeName && (f = v[l], M.appendChild(f), _ && f._wordEnd && M.appendChild(r.createTextNode(" ")), W && (0 === l && (M.style.top = f._y + "px", M.style.left = P + S + "px"), f.style.top = "0px", S && (f.style.left = f._x - S + "px")));
                            0 === p ? M.innerHTML = "&nbsp;" : j || V || (b(M), g(M, String.fromCharCode(160), " ")), W && (M.style.width = T, M.style.height = f._h + "px"), t.appendChild(M)
                        }
                        t.style.cssText = w
                    }
                    W && (c > t.clientHeight && (t.style.height = c - N + "px", t.clientHeight < c && (t.style.height = c + C + "px")), h > t.clientWidth && (t.style.width = h - O + "px", t.clientWidth < h && (t.style.width = h + L + "px"))), y(i, D), y(n, k), y(a, z)
                },
                M = function (t, e, i, o) {
                    var a, s, h, c, f, d, m, v, y, _ = e.span ? "span" : "div",
                        x = e.type || e.split || "chars,words,lines",
                        b = (x.indexOf("words"), -1 !== x.indexOf("chars")),
                        w = "absolute" === e.position || !0 === e.absolute,
                        M = e.wordDelimiter || " ",
                        T = " " !== M ? "" : w ? "&#173; " : " ",
                        S = e.span ? "</span>" : "</div>",
                        A = !0,
                        P = r.createElement("div"),
                        E = t.parentNode;
                    for (E.insertBefore(P, t), P.textContent = t.nodeValue, E.removeChild(t), t = P, a = n(t), m = -1 !== a.indexOf("<"), !1 !== e.reduceWhiteSpace && (a = a.replace(l, " ").replace(u, "")), m && (a = a.split("<").join("{{LT}}")), f = a.length, s = (" " === a.charAt(0) ? T : "") + i(), h = 0; h < f; h++)
                        if ((d = a.charAt(h)) === M && a.charAt(h - 1) !== M && h) {
                            for (s += A ? S : "", A = !1; a.charAt(h + 1) === M;) s += T, h++;
                            h === f - 1 ? s += T : ")" !== a.charAt(h + 1) && (s += T + i(), A = !0)
                        } else "{" === d && "{{LT}}" === a.substr(h, 6) ? (s += b ? o() + "{{LT}}</" + _ + ">" : "{{LT}}", h += 5) : d.charCodeAt(0) >= 55296 && d.charCodeAt(0) <= 56319 || a.charCodeAt(h + 1) >= 65024 && a.charCodeAt(h + 1) <= 65039 ? (v = p(a.substr(h, 2)), y = p(a.substr(h + 2, 2)), c = v >= 127462 && v <= 127487 && y >= 127462 && y <= 127487 || y >= 127995 && y <= 127999 ? 4 : 2, s += b && " " !== d ? o() + a.substr(h, c) + "</" + _ + ">" : a.substr(h, c), h += c - 1) : s += b && " " !== d ? o() + d + "</" + _ + ">" : d;
                    t.outerHTML = s + (A ? S : ""), m && g(E, "{{LT}}", "<")
                },
                T = function t(e, i, n, r) {
                    var o, a, h = _(e.childNodes),
                        c = h.length,
                        u = "absolute" === i.position || !0 === i.absolute;
                    if (3 !== e.nodeType || c > 1) {
                        for (i.absolute = !1, o = 0; o < c; o++) a = h[o], (3 !== a.nodeType || /\S+/.test(a.nodeValue)) && (u && 3 !== a.nodeType && "inline" === s(a, "display", null, !0) && (a.style.display = "inline-block", a.style.position = "relative"), a._isSplit = !0, t(a, i, n, r));
                        return i.absolute = u, void(e._isSplit = !0)
                    }
                    M(e, i, n, r)
                },
                S = v.prototype;
            S.split = function (t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", a = ("absolute" === t.position || t.absolute, m(t.wordsClass, o)), s = m(t.charsClass, o); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, T(n, t, a, s), w(n, t, this.chars, this.words, this.lines, i, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, S.revert = function () {
                if (!this._originals) throw "revert() call wasn't scoped properly.";
                for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
                return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, v.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (v.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            }, v.version = "0.5.7"
        }(a),
            function (i) {
                var s = function () {
                    return (a.GreenSockGlobals || a).SplitText
                };
                void 0 !== t && t.exports ? t.exports = s() : (r = [], n = s, void 0 !== (o = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = o))
            }()
    }).call(e, i(4))
}