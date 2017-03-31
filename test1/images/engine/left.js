function ws_cube(t, e, i) {
    function s(t, e, i, s) {
        return "inset " + -s * t * 1.2 / 90 + "px " + i * e * 1.2 / 90 + "px " + (t + e) / 20 + "px rgba(" + (s > i ? "0,0,0,.6" : i > s ? "255,255,255,0.8" : "0,0,0,.0") + ")"
    }
    var n = jQuery,
        o = n(this),
        r = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent),
        a = n(".ws_list", i),
        d = t.perspective || 2e3,
        h = {
            position: "absolute",
            backgroundSize: "cover",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden"
        },
        c = n("<div>").addClass("ws_effect").css(h).css({
            transformStyle: "preserve-3d",
            perspective: g ? "none" : d,
            zIndex: 8,
            overflow: t.responsive > 1 ? "hidden" : "visible"
        });
    n("<div>").addClass("ws_effect").css(h).append(c).appendTo(i.parent());
    var p = {
            domPrefixes: " Webkit Moz ms O Khtml".split(" "),
            testDom: function(t) {
                for (var e = this.domPrefixes.length; e--;)
                    if ("undefined" != typeof document.body.style[this.domPrefixes[e] + t]) return !0;
                return !1
            },
            cssTransitions: function() {
                return this.testDom("Transition")
            },
            cssTransforms3d: function() {
                var t = "undefined" != typeof document.body.style.perspectiveProperty || this.testDom("Perspective");
                if (t && /AppleWebKit/.test(navigator.userAgent)) {
                    var e = document.createElement("div"),
                        i = document.createElement("style"),
                        s = "Test3d" + Math.round(99999 * Math.random());
                    i.textContent = "@media (-webkit-transform-3d){#" + s + "{height:3px}}", document.getElementsByTagName("head")[0].appendChild(i), e.id = s, document.body.appendChild(e), t = 3 === e.offsetHeight, i.parentNode.removeChild(i), e.parentNode.removeChild(e)
                }
                return t
            },
            webkit: function() {
                return /AppleWebKit/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
            }
        },
        f = p.cssTransitions() && p.cssTransforms3d(),
        g = p.webkit();
    if (!f && t.fallback) return new t.fallback(t, e, i);
    var u;
    this.go = function(p, l) {
        function m(e, i, o, a, c, p, f, u, l, m) {
            e.parent().css("perspective", d);
            var v = e.width(),
                w = e.height();
            if (i.front.css({
                transform: "rotateY(0deg) rotateX(0deg)"
            }), i.back.css({
                opacity: 1,
                transform: "rotateY(" + f + "deg) rotateX(" + p + "deg)"
            }), !r) var b = n("<div>").css(h).css("boxShadow", s(v, w, 0, 0)).appendTo(i.front),
                x = n("<div>").css(h).css("boxShadow", s(v, w, p, f)).appendTo(i.back);
            g && e.css({
                transform: "translateZ(-" + o + "px)"
            });
            var T = setTimeout(function() {
                var e = "all " + t.duration + "ms cubic-bezier(0.645, 0.045, 0.355, 1.000)";
                i.front.css({
                    transition: e,
                    boxShadow: r ? "" : s(v, w, u, l),
                    transform: "rotateX(" + u + "deg) rotateY(" + l + "deg)",
                    zIndex: 0
                }), i.back.css({
                    transition: e,
                    boxShadow: r ? "" : s(v, w, 0, 0),
                    transform: "rotateY(0deg) rotateX(0deg)",
                    zIndex: 20
                }), r || (b.css({
                    transition: e,
                    boxShadow: s(v, w, u, l)
                }), x.css({
                    transition: e,
                    boxShadow: s(v, w, 0, 0)
                })), T = setTimeout(m, t.duration)
            }, 20);
            return {
                stop: function() {
                    clearTimeout(T), m()
                }
            }
        }
        var v = n(e[l]);
        if (v = {
            width: v.width(),
            height: v.height(),
            marginTop: parseFloat(v.css("marginTop")),
            marginLeft: parseFloat(v.css("marginLeft"))
        }, f) {
            u && u.stop();
            var w = i.width(),
                b = i.height(),
                x = {
                    left: [w / 2, w / 2, 0, 0, 90, 0, -90],
                    right: [w / 2, -w / 2, 0, 0, -90, 0, 90],
                    down: [b / 2, 0, -b / 2, 90, 0, -90, 0],
                    up: [b / 2, 0, b / 2, -90, 0, 90, 0]
                }[t.direction || ["left", "right", "down", "up"][Math.floor(4 * Math.random())]],
                T = n("<img>").css(v),
                y = n("<img>").css(v).attr("src", e.get(p).src),
                k = n("<div>").css({
                    overflow: "hidden",
                    transformOrigin: "50% 50% -" + x[0] + "px",
                    zIndex: 20
                }).css(h).append(T).appendTo(c),
                z = n("<div>").css({
                    overflow: "hidden",
                    transformOrigin: "50% 50% -" + x[0] + "px",
                    zIndex: 0
                }).css(h).append(y).appendTo(c);
            T.on("load", function() {
                a.hide()
            }), T.attr("src", e.get(l).src).load(), c.parent().show(), u = new m(c, {
                front: k,
                back: z
            }, x[0], x[1], x[2], x[3], x[4], x[5], x[6], function() {
                o.trigger("effectEnd"), c.empty().parent().hide(), u = 0
            })
        } else {
            c.css({
                position: "absolute",
                display: "none",
                zIndex: 2,
                width: "100%",
                height: "100%"
            }), c.stop(1, 1);
            var C = !!((p - l + 1) % e.length) ^ t.revers ? "left" : "right",
                k = n("<div>").css({
                    position: "absolute",
                    left: "0%",
                    right: "auto",
                    top: 0,
                    width: "100%",
                    height: "100%"
                }).css(C, 0).append(n(e[l]).clone().css({
                    width: 100 * v.width / i.width() + "%",
                    height: 100 * v.height / i.height() + "%",
                    marginLeft: 100 * v.marginLeft / i.width() + "%"
                })).appendTo(c),
                I = n("<div>").css({
                    position: "absolute",
                    left: "100%",
                    right: "auto",
                    top: 0,
                    width: "0%",
                    height: "100%"
                }).append(n(e[p]).clone().css({
                    width: 100 * v.width / i.width() + "%",
                    height: 100 * v.height / i.height() + "%",
                    marginLeft: 100 * v.marginLeft / i.width() + "%"
                })).appendTo(c);
            c.css({
                left: "auto",
                right: "auto",
                top: 0
            }).css(C, 0).show(), c.show(), a.hide(), I.animate({
                width: "100%",
                left: 0
            }, t.duration, "easeInOutExpo", function() {
                n(this).remove()
            }), k.animate({
                width: 0
            }, t.duration, "easeInOutExpo", function() {
                o.trigger("effectEnd"), c.empty().hide()
            })
        }
    }
};