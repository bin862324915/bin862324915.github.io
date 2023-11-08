const rewardBtn = document.getElementById('rewardBtn');
const rewardImgContainer = document.getElementById('rewardImgContainer');

if(rewardBtn){
	rewardBtn.onclick = () => {
		rewardImgContainer.style.display = (rewardImgContainer.style.display === 'none' || rewardImgContainer.style.display === '') ? 'inline-flex' : 'none'
		setTimeout(() => {
			rewardImgContainer.style.opacity = (rewardImgContainer.style.opacity === '0' || rewardImgContainer.style.opacity === '') ? '1' : '0'
		}, 10);
	}
}

// 浏览器标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/img/favicon.ico");
		document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/favicon.ico");
		document.title = '(ฅ>ω<*ฅ) 噫又好啦 ~' + OriginTitle;
		titleTime = setTimeout(function() {
			document.title = OriginTitle;
		}, 2000);
	}
});

// 背景图
//var backgroundImageUrls = [
//  "url('https://z1.ax1x.com/2023/10/11/pPzRbo4.jpg')",
//  "url('https://z1.ax1x.com/2023/09/12/pP216Vx.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvJts.png')",
//  "url('https://z1.ax1x.com/2023/10/12/piSv10g.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSv37Q.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvlnS.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvMX8.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvGkj.png')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvu1P.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvefI.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvnpt.jpg')",
//  "url('https://z1.ax1x.com/2023/10/12/piSvK6f.jpg')",
//  "url('https://z1.ax1x.com/2023/09/12/pP21sq1.jpg')"
//];

//var randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
//var bodyElement = document.querySelector("body");
//bodyElement.style.backgroundImage = backgroundImageUrls[randomIndex];

// 底部一言
function hitokoto(o) {
    $("#hitokoto").stop().fadeOut((function() {
        $("#hitokoto").html(o.hitokoto), document.getElementById("hitokotoa").href = "https://hitokoto.cn/?uuid=" + o.uuid, $("#hitokoto").stop().fadeIn()
    }))
}

function getHitokoto() {
    var o = ["a", "b", "c", "d", "e", "i"];
    fetch("https://v1.hitokoto.cn/?encode=json&charset=utf-8&c=" + o[Math.floor(Math.random() * o.length)], {
        cache: "no-cache",
        method: "GET",
        mode: "cors"
    }).then(o => o.json()).then(o => {
        hitokoto(o), setTimeout(getHitokoto, 1e4)
    }).catch(console.error)
}
$(document).ready((function() {
    getHitokoto()
}))

var elements = document.querySelectorAll('.index-card');

for (var i = 0; i < elements.length; i++) {
    if (i % 2 === 1) {
        elements[i].setAttribute('data-aos', 'fade-right');
    } else {
        elements[i].setAttribute('data-aos', 'fade-left');
    }
}

//top
let scrollButton = document.getElementById('scroll-top-button');
let scrollPercentage = 0;

window.addEventListener('scroll', function() {
  scrollPercentage = (window.scrollY / (document.body.scrollHeight - document.documentElement.clientHeight)) * 100;
  
scrollButton.textContent = '' + Math.round(scrollPercentage) + '%';
});

window.onload = function() {
 var vnumElement = document.querySelector('.vnum');
  if (vnumElement && getComputedStyle(vnumElement).display !== 'none') {
    var vnum = vnumElement.textContent;
    var plnumElement = document.querySelector('#plnum');
    plnumElement.textContent = vnum;
    var pltj = document.getElementById('pltj');
    pltj.style.display = 'inline';
    }
};