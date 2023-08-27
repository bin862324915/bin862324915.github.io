// 点击出字
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array
        ("你终究会成为你正在成为的人","越过山丘，美不胜收","但愿这漫长小小人生不辜负你每一个光辉时分","愿你所失去的，都会以另一种方式归来","不是每个游荡的人都迷了路,或许他正在追逐一个你无法想象的梦","这世界太美好，有阳光空气，有善良正义，有你","治愈自己的，只有你自己","你被黑暗敲打，恰恰说明你是光明本身","凡是过往，皆为序章，所有将来，皆为可盼","日落尤其温柔，人间皆是浪漫","入目无别人，四下皆是你","未来可期，人生值得","我向你奔赴而来，你就是星辰大海","生活明朗，万物可爱","你笑起来真像好天气","好吃的东西要吃进肚子里，可爱的人要放在心里","做个可爱的姑娘，不烦世事，慢心欢喜","岁岁常欢愉，万事皆胜意","不介意你来晚，但一定要是你");
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