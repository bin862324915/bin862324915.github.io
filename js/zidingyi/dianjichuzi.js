// 点击出字
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("好吃的东西要吃进肚子里，可爱的人要放在心里","做个可爱的姑娘，不烦世事，慢心欢喜","岁岁常欢愉，万事皆胜意","你终究会成为你正在成为的人","越过山丘，美不胜收","但愿这漫长小小人生不辜负你每一个光辉时分","愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀","不是每个游荡的人都迷了路,或许他正在追逐一个你无法想象的梦");
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 5,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
           "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
      3000,
      function() {
          $i.remove();
      });
    });
    setTimeout('delay()', 2000);
});

function delay() {
    $(".buryit").removeAttr("onclick");
}