var radius = 305
  , autoRotate = !0
  , rotateSpeed = -60
  , imgWidth = 160
  , imgHeight = 210;
function carouselinit(t) {
    setTimeout(o, 1e3);
    var e = document.getElementById(t + "-drag-container");
    console.log(e);
    var n = document.getElementById(t + "-spin-container")
      , i = [...n.getElementsByTagName("img"), ...n.getElementsByTagName("video")];
    n.style.width = imgWidth + "px",
    n.style.height = imgHeight + "px";
    var a = document.getElementById(t + "-carousel-ground");
    function o(t) {
        for (var e = 0; e < i.length; e++)
            i[e].style.transform = "rotateY(" + e * (360 / i.length) + "deg) translateZ(" + radius + "px)",
            i[e].style.transition = "transform 1s",
            i[e].style.transitionDelay = t || (i.length - e) / 4 + "s"
    }
    function r(t) {
        m > 180 && (m = 180),
        m < 0 && (m = 0),
        t.style.transform = "rotateX(" + -m + "deg) rotateY(" + u + "deg)"
    }
    function l(t) {
        n.style.animationPlayState = t ? "running" : "paused"
    }
    a.style.width = 3 * radius + "px",
    a.style.height = 3 * radius + "px";
    var s = 0
      , d = 0
      , u = 0
      , m = 10;
    if (autoRotate) {
        var g = rotateSpeed > 0 ? "spin" : "spinRevert";
        n.style.animation = `${g} ${Math.abs(rotateSpeed)}s infinite linear`
    }
    document.getElementById(t).onpointerdown = function(t) {
        clearInterval(e.timer);
        var n = (t = t || window.event).clientX
          , i = t.clientY;
        return this.onpointermove = function(t) {
            var a = (t = t || window.event).clientX
              , o = t.clientY;
            u += .1 * (s = a - n),
            m += .1 * (d = o - i),
            r(e),
            n = a,
            i = o
        }
        ,
        this.onpointerup = function(t) {
            e.timer = setInterval((function() {
                u += .1 * (s *= .95),
                m += .1 * (d *= .95),
                r(e),
                l(!1),
                Math.abs(s) < .5 && Math.abs(d) < .5 && (clearInterval(e.timer),
                l(!0))
            }
            ), 17),
            this.onpointermove = this.onpointerup = null
        }
        ,
        !1
    }
    ,
    document.getElementById(t).onmousewheel = function(t) {
        var e = (t = t || window.event).wheelDelta / 20 || -t.detail;
        return radius += e,
        o(1),
        !1
    }
}

(function() {
    function t() {
        i(), a()
    }

    function i() {
        document.addEventListener("mousemove", o), document.addEventListener("touchmove", e), document.addEventListener("touchstart", e), window.addEventListener("resize", n)
    }

    function n(t) {
        d = window.innerWidth, window.innerHeight
    }

    function e(t) {
        if (t.touches.length > 0)
            for (var i = 0; i < t.touches.length; i++) s(t.touches[i].clientX, t.touches[i].clientY, r[Math.floor(Math.random() * r.length)])
    }

    function o(t) {
        u.x = t.clientX, u.y = t.clientY, s(u.x, u.y, r[Math.floor(Math.random() * r.length)])
    }

    function s(t, i, n) {
        var e = new l;
        e.init(t, i, n), f.push(e)
    }

    function h() {
        for (var t = 0; t < f.length; t++) f[t].update();
        for (t = f.length - 1; t >= 0; t--) f[t].lifeSpan < 0 && (f[t].die(), f.splice(t, 1))
    }

    function a() {
        requestAnimationFrame(a), h()
    }

    function l() {
        this.character = "❤", this.lifeSpan = 120, this.initialStyles = {
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            "z-index": "10000000",
            fontSize: "12px",
            "will-change": "transform"
        }, this.init = function(t, i, n) {
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            }, this.position = {
                x: t - 10,
                y: i - 20
            }, this.initialStyles.color = n, this.element = document.createElement("span"), this.element.innerHTML = this.character, c(this.element, this.initialStyles), this.update(), document.body.appendChild(this.element)
        }, this.update = function() {
            this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + this.lifeSpan / 120 + ")"
        }, this.die = function() {
            this.element.parentNode.removeChild(this.element)
        }
    }

    function c(t, i) {
        for (var n in i) t.style[n] = i[n]
    }
    var r = ["#D61C59", "#E7D84B", "#1cd6cb", "#e7bbd9", "#1B8798"],
        d = window.innerWidth,
        u = (window.innerHeight, {
            x: d / 2,
            y: d / 2
        }),
        f = [];
    t()
})();