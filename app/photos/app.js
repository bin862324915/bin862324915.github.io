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