// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2010-29-11
//
function ws_seven(t, e, i) {
    function a(t, e) {
        return Math.abs((e % 2 ? 1 : 0) + (e - e % 2) / 2 - t) / e
    }

    function n(t, e, i, a) {
        var n = e >= a ? a / e : 1,
            o = t >= i ? i / t : 1;
        return {
            l: o,
            t: n,
            m: Math.min(o, n)
        }
    }

    function o(t, e, i, o, r) {
    	debugger
        var s = M.width(),
            h = M.height(),
            c = l * s / f,
            w = l * h / g,
            u = p * (o ? 4 : 5) / (f * g),
            m = o ? "easeInExpo" : "easeOutQuart",
            v = T.h + T.t - h / g,
            x = T.w + T.l - s / f,
            b = M.offset().top + M.height(),
            y = M.offset().left + M.width();
        console.log('s:'+s+';h:'+h+';c:'+c+';w:'+w+';u:'+u+';m:'+m+';v:'+v+';x:'+x+';b:'+b+';y:'+y+';l:'+l+';g:'+g);

        return b > v && (v = b), y > x && (x = y), d(t).each(function(t) {
            var e = t % f, //行
                r = Math.floor(t / f), //列
                b = .2 * p * (45 * a(e, f) + 4 * r) / (f * g),
                y = M.offset().left + T.l + c * e - s * l / 2 + c,
                I = M.offset().top + T.t + w * r - h * l / 2 + w,
                z = n(y, I, x, v),
                C = {
                    opacity: 1,
                    left: s * e / f,
                    top: h * r / g,
                    width: s / f,
                    height: h / g,
                    zIndex: Math.ceil(100 - 100 * a(e, f))
                },
                E = {
                    opacity: 0,
                    left: (c * e - s * l / 2) * z.l,
                    top: (w * r - h * l / 2) * z.t,
                    width: c * z.m,
                    height: w * z.m
                },
                L = {
                    left: -(s * e / f) + i.marginLeft,
                    top: -(h * r / g) + i.marginTop,
                    width: i.width,
                    height: i.height
                },
                Q = {
                    left: -l * (s / f * e - i.marginLeft) * z.m,
                    top: -l * (h / g * r - i.marginTop) * z.m,
                    width: l * i.width * z.m,
                    height: l * i.height * z.m
                };
            if (!o) {
                var _ = C;
                C = E, E = _, _ = L, L = Q, Q = _
            }
            console.log('e:'+e+';r:'+r+';b:'+b+';y:'+y+';z:'+z+';C:'+C+';El:'+E.left+';ET:'+E.top+';Ll:'+L.left+';LT:'+L.top+';l:'+l+';g:'+g);
            d(this).css(C).delay(b).animate(E, u, m, o ? function() {
                d(this).hide()
            } : {}), d(this).find("img").css(L).delay(b).animate(Q, u, m)
        }), o && (d(e).each(function(t) {
            debugger
            var e = t % f,
                n = Math.floor(t / f),
                o = .2 * p + .15 * p * (35 * a(e, f) + 4 * n) / (f * g);
            d(this).css({
                left: s / 2,
                top: h / 2,
                width: 0,
                height: 0,
                zIndex: Math.ceil(100 - 100 * a(e, f))
            }).delay(o).animate({
                left: s * e / f,
                top: h * n / g,
                width: s / f + 1,
                height: h / g + 1
            }, 4 * p / (f * g), "easeOutBack"), d(this).find("img").css({
                left: 0,
                top: 0,
                width: 0,
                height: 0
            }).delay(o).animate({
                left: -s * e / f + i.marginLeft,
                top: -h * n / g + i.marginTop,
                width: i.width,
                height: i.height
            }, 4 * p / (f * g), "easeOutBack")
        }), I.delay(.1 * p).animate({
            opacity: 1
        }, .2 * p, "easeInCirc")), setTimeout(r, o ? .5 * p : .4 * p), {
            stop: function() {
                r()
            }
        }
    }

    function r(t, e, i, a) {
        debugger
        var n = (parseInt(t.parent().css("z-index")) || 0) + 1;
        if (y) {
            var o = a.getContext("2d");
            return o.drawImage(t.get(0), 0, 0, e.width, e.height), s(o, 0, 0, a.width, a.height, i) ? d(a) : 0
        }
        for (var r = d("<div></div>").css({
                position: "absolute",
                "z-index": n,
                left: 0,
                top: 0,
                overflow: "hidden"
            }).css(e).appendTo(x), h = (Math.sqrt(5) + 1) / 2, c = 1 - h / 2, l = 0; i > c * l; l++) {
            var f = Math.PI * h * l,
                g = c * l + 1,
                p = g * Math.cos(f),
                w = g * Math.sin(f);
            d(document.createElement("img")).attr("src", t.attr("src")).css({
                opacity: 1 / (l / 1.8 + 1),
                position: "absolute",
                "z-index": n,
                left: Math.round(p) + "px",
                top: Math.round(w) + "px",
                width: "100%",
                height: "100%"
            }).appendTo(r)
        }
        return r
    }

    function s(t, e, i, a, n, o) {
        if (!(isNaN(o) || 1 > o)) {
            o |= 0;
            var r;
            try {
                r = t.getImageData(e, i, a, n)
            } catch (s) {
                return console.log("error:unable to access image data: " + s), !1
            }
            var d, c, l, f, g, p, w, u, m, v, x, b, y, M, I, T, z, L, Q, _, O = r.data,
                j = o + o + 1,
                D = a - 1,
                k = n - 1,
                q = o + 1,
                A = q * (q + 1) / 2,
                B = new h,
                F = B;
            for (l = 1; j > l; l++)
                if (F = F.next = new h, l == q) var N = F;
            F.next = B;
            var P = null,
                G = null;
            w = p = 0;
            var H = C[o],
                J = E[o];
            for (c = 0; n > c; c++) {
                for (M = I = T = u = m = v = 0, x = q * (z = O[p]), b = q * (L = O[p + 1]), y = q * (Q = O[p + 2]), u += A * z, m += A * L, v += A * Q, F = B, l = 0; q > l; l++) F.r = z, F.g = L, F.b = Q, F = F.next;
                for (l = 1; q > l; l++) f = p + ((l > D ? D : l) << 2), u += (F.r = z = O[f]) * (_ = q - l), m += (F.g = L = O[f + 1]) * _, v += (F.b = Q = O[f + 2]) * _, M += z, I += L, T += Q, F = F.next;
                for (P = B, G = N, d = 0; a > d; d++) O[p] = u * H >> J, O[p + 1] = m * H >> J, O[p + 2] = v * H >> J, u -= x, m -= b, v -= y, x -= P.r, b -= P.g, y -= P.b, f = w + ((f = d + o + 1) < D ? f : D) << 2, M += P.r = O[f], I += P.g = O[f + 1], T += P.b = O[f + 2], u += M, m += I, v += T, P = P.next, x += z = G.r, b += L = G.g, y += Q = G.b, M -= z, I -= L, T -= Q, G = G.next, p += 4;
                w += a
            }
            for (d = 0; a > d; d++) {
                for (I = T = M = m = v = u = 0, p = d << 2, x = q * (z = O[p]), b = q * (L = O[p + 1]), y = q * (Q = O[p + 2]), u += A * z, m += A * L, v += A * Q, F = B, l = 0; q > l; l++) F.r = z, F.g = L, F.b = Q, F = F.next;
                for (g = a, l = 1; o >= l; l++) p = g + d << 2, u += (F.r = z = O[p]) * (_ = q - l), m += (F.g = L = O[p + 1]) * _, v += (F.b = Q = O[p + 2]) * _, M += z, I += L, T += Q, F = F.next, k > l && (g += a);
                for (p = d, P = B, G = N, c = 0; n > c; c++) f = p << 2, O[f] = u * H >> J, O[f + 1] = m * H >> J, O[f + 2] = v * H >> J, u -= x, m -= b, v -= y, x -= P.r, b -= P.g, y -= P.b, f = d + ((f = c + q) < k ? f : k) * a << 2, u += M += P.r = O[f], m += I += P.g = O[f + 1], v += T += P.b = O[f + 2], P = P.next, x += z = G.r, b += L = G.g, y += Q = G.b, M -= z, I -= L, T -= Q, G = G.next, p += a
            }
            return t.putImageData(r, e, i), !0
        }
    }

    function h() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }
    var d = jQuery,
        c = d(this),
        l = t.distance || 5,
        f = t.cols,
        g = t.rows,
        p = 2 * t.duration,
        w = t.blur || 50,
        u = (i.find(".ws_list"), []),
        m = [],
        v = d("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: t.responsive > 1 ? "hidden" : "visible"
        }),
        x = v.clone().css("overflow", "hidden");
    v.addClass("ws_effect"), i = i.parent();
    var b, y = !t.noCanvas && !window.opera && !!document.createElement("canvas").getContext,
        M = d("<div>").addClass("ws_parts"),
        I = d("<div>").addClass("ws_zoom");
    v.append(M, I, x).appendTo(i);
    var T = {
        t: d(window).scrollTop(),
        l: d(window).scrollLeft(),
        w: d(window).width(),
        h: d(window).height()
    };
    jQuery.extend(jQuery.easing, {
        easeOutQuart: function(t, e, i, a, n) {
            return -a * ((e = e / n - 1) * e * e * e - 1) + i
        },
        easeInExpo: function(t, e, i, a, n) {
            return 0 == e ? i : a * Math.pow(2, 10 * (e / n - 1)) + i
        },
        easeInCirc: function(t, e, i, a, n) {
            return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + i
        }
    });
    var z;
    this.go = function(a, n) {
    	debugger
        if (z) return n;
        var s = 0 == n && a != n + 1 || a == n - 1 ? !1 : !0;
        T.t = d(window).scrollTop(), T.l = d(window).scrollLeft(), T.w = d(window).width(), T.h = d(window).height();
        var h = Math.max((t.width || M.width()) / (t.height || M.height()) || 3, 3);
        f = f || Math.round(1 > h ? 3 : 3 * h), g = g || Math.round(1 > h ? 3 / h : 3);
        var l = d(e.get(n));
        l = {
            width: l.width(),
            height: l.height(),
            marginTop: parseFloat(l.css("marginTop")),
            marginLeft: parseFloat(l.css("marginLeft"))
        }, M.css({
            position: "absolute",
            width: i.width(),
            height: i.height(),
            left: 0,
            top: 0,
            zIndex: 8,
            transform: "translate3d(0,0,0)"
        }), I.css({
            position: "absolute",
            width: i.width(),
            height: i.height(),
            top: 0,
            left: 0,
            zIndex: 2,
            transform: "translate3d(0,0,0)"
        });
        for (var p = 0; f * g > p; p++) {
            {
                Math.floor(p / f)
            }
            d(u[p] = document.createElement("div")).css({
                position: "absolute",
                overflow: "hidden",
                transform: "translate3d(0,0,0)"
            }).appendTo(M).append(d("<img>").css({
                position: "absolute",
                transform: "translate3d(0,0,0)"
            }).attr("src", e.get(s ? n : a).src)), s && d(m[p] = document.createElement("div")).css({
                position: "absolute",
                overflow: "hidden",
                transform: "translate3d(0,0,0)"
            }).appendTo(I).append(d("<img>").css({
                position: "absolute",
                transform: "translate3d(0,0,0)"
            }).attr("src", e.get(a).src))
        }
        u = d(u), s && (m = d(m));
        var C = 0;
        if (s) {
            if (I.css("opacity", 0), y) {
                try {
                    document.createElement("canvas").getContext("2d").getImageData(0, 0, 1, 1)
                } catch (E) {
                    y = 0
                }
                b = '<canvas width="' + v.width + '" height="' + v.height + '"/>', b = d(b).css({
                    "z-index": 1,
                    position: "absolute",
                    left: 0,
                    top: 0
                }).css(l).appendTo(x), C = r(d(e.get(n)), l, w, b.get(0))
            }
            y && C || (y = 0, C = r(d(e.get(n)), l, 8), b && (b.remove(), b = 0))
        } else I.append(d("<img>").css({
            position: "absolute",
            top: 0,
            left: 0
        }).css(l).attr("src", e.get(n).src));
        z = new o(u, m, l, s, function() {
            c.trigger("effectEnd"), M.empty().removeAttr("style"), I.empty().removeAttr("style"), b ? b.remove() : C && C.remove(), z = 0
        })
    };
    var C = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        E = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
};

function ws_blinds(t, i, e) {
    function n(i, e, n, o, s) {
        t.support.transform && t.support.transition ? (e.transform || (e.transform = ""), e.left && (e.transform += " translate3d(" + (e.left ? e.left : 0) + "px,0,0)"), delete e.left, (n || o) && (e.transition = n + "ms all " + o + "ms ease-in-out"), i.css(e), s && i.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", s)) : n ? i.animate(e, n, "swing", s) : i.css(e)
    }
    for (var o = jQuery, s = o(this), d = t.parts || 3, r = o("<div>").addClass("ws_effect").css({
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            "z-index": 8
        }).hide().appendTo(e.parent()), a = o("<div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }).appendTo(r), f = [], l = 0; d > l; l++) f[l] = o("<div>").css({
        position: "absolute",
        height: "100%",
        width: (100 / d).toFixed(3) + "%",
        border: "none",
        margin: 0,
        overflow: "hidden",
        top: 0,
        left: (100 * l / d).toFixed(3) + "%"
    }).appendTo(r);
    this.go = function(l, h, p) {
        var g = h > l ? 1 : 0;
        if (p)
            if (-1 >= p) l = (h + 1) % i.length, g = 0;
            else {
                if (!(p >= 1)) return -1;
                l = (h - 1 + i.length) % i.length, g = 1
            }
        r.find("img").stop(!0, !0), r.show();
        var u = o(".ws_list", e);
        t.fadeOut && u.fadeOut((1 - 1 / d) * t.duration);
        var w = o(i[h]),
            c = {
                width: w.width() || t.width,
                height: w.height() || t.height
            },
            v = w.clone().css(c).appendTo(a);
        n(v, {
            left: 0
        }), n(v, {
            left: (g ? -1 : 1) * v.width() * .5
        }, t.duration, .1 * t.duration);
        for (var m = 0; m < f.length; m++) {
            var T = f[m],
                b = o(i[l]).clone().css({
                    position: "absolute",
                    top: 0
                }).css(c).appendTo(T);
            n(b, {
                left: g ? b.width() - T.position().left : -b.width()
            }), n(b, {
                left: -T.position().left
            }, t.duration / (f.length + 1) * (g ? f.length - m + 1 : m + 2), 0, !g && m == f.length - 1 || g && !m ? function() {
                s.trigger("effectEnd"), r.hide().find("img").remove(), v.remove()
            } : !1)
        }
    }
};



// extend wowslider for effect support
(function($) {

    var effects = ['ws_seven'];
    var duration = 1700,
        delay = 4500;
    var cSlide, bkpCont, wowInstance, timeout;

   
//  effects ||
  

})(jQuery);
