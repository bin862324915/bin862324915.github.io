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
		document.title = '不要走！再看看嘛(o°ω°o)';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/favicon.ico");
		document.title = '你回来啦(≖ᴗ≖)✧';
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
        $("#hitokoto").html(o.hitokoto), $("#hitokoto").stop().fadeIn()
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
console.log(`
                    _     _         _     _             
                   | |   (_)       | |   | |            
__      _____ _ __ | |__  _ _ __   | |__ | | ___   __ _ 
\\ \\ /\\ / / _ \\ '_ \\| '_ \\| | '_ \\  | '_ \\| |/ _ \\ / _\` |
 \\ V  V /  __/ | | | |_) | | | | | | |_) | | (_) | (_| |
  \\_/\\_/ \\___|_| |_|_.__/|_|_| |_| |_.__/|_|\\___/ \\__, |
                                                   __/ |
                                                  |___/
`);

  // snow
function snow() {
    var snowContainer = document.getElementById('snow_container');
    var snowButtonIcon = document.querySelector('#snowButton i');
    var isSnowEnabled = localStorage.getItem('isSnowEnabled') !== 'false';

    if (isSnowEnabled) {
        activateSnow();
    }

    function activateSnow() {
        snowContainer.classList.add('show');
        snowContainer.innerHTML = `
            <div class="snow_slice snow_1">
                <div class="snow_drifter drift_1"></div>
            </div>
            <div class="snow_slice snow_2">
                <div class="snow_drifter drift_2"></div>
            </div>
            <div class="snow_slice snow_3">
                <div class="snow_drifter drift_3"></div>
            </div>
            <div class="snow_slice snow_4">
                <div class="snow_drifter drift_4"></div>
            </div>
        `;

        if (snowButtonIcon) {
            snowButtonIcon.classList.add('on-kg');
        }
    }

    function deactivateSnow() {
        snowContainer.innerHTML = '';
        snowContainer.classList.remove('show');

        if (snowButtonIcon) {
            snowButtonIcon.classList.remove('on-kg');
        }
    }

    var snowButton = document.getElementById('snowButton');
    snowButton.addEventListener('click', function (event) {
        event.preventDefault();
        isSnowEnabled = !isSnowEnabled;
        localStorage.setItem('isSnowEnabled', isSnowEnabled);
        if (isSnowEnabled) {
            activateSnow();
        } else {
            deactivateSnow();
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    snow();
});

  function frost() {
    var frostElement = document.getElementById('frost');
    var frostButtonElement = document.getElementById('frostButton');
    if (frostElement && frostButtonElement) {
      frostElement.classList.toggle('show');
      if (frostElement.classList.contains('show')) {
        frostButtonElement.querySelector('i').classList.add('on-kg');
      } else {
        frostButtonElement.querySelector('i').classList.remove('on-kg');
      }
    }
  }

  function lights() {
    var frostElement = document.getElementById('lights');
    var lightsButtonElement = document.getElementById('lightsButton');
    if (frostElement && lightsButtonElement) {
      frostElement.classList.toggle('show');
      if (frostElement.classList.contains('show')) {
        lightsButtonElement.querySelector('i').classList.add('on-kg');
      } else {
        lightsButtonElement.querySelector('i').classList.remove('on-kg');
      }
    }
  }
  var frostButton = document.getElementById('frostButton');
  frostButton.addEventListener('click', function(event) {
    event.preventDefault();
    frost();
  });
  var lightsButton = document.getElementById('lightsButton');
  lightsButton.addEventListener('click', function(event) {
    event.preventDefault();
    lights();
  });