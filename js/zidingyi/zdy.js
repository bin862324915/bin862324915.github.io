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
//copy
      $('.markdown-body').on('copy', function (e) {
          // IE8 or earlier browser is 'undefined'
          if (typeof window.getSelection === 'undefined') return;
  
          var selection = window.getSelection();
          // if the selection is short let's not annoy our users.
          if (('' + selection).length < Number.parseInt('100')) {
              return;
          }
  
          // create a div outside of the visible area and fill it with the selected text.
          var bodyElement = document.getElementsByTagName('body')[0];
          var newdiv = document.createElement('div');
          newdiv.style.position = 'absolute';
          newdiv.style.left = '-99999px';
          bodyElement.appendChild(newdiv);
          newdiv.appendChild(selection.getRangeAt(0).cloneContents());
  
          // we need a <div class="code-wrapper"><pre> tag workaround.
          // otherwise the text inside "pre" loses all the line breaks!
          if (selection.getRangeAt(0).commonAncestorContainer.nodeName === 'PRE') {
              newdiv.innerHTML = "<pre>" + newdiv.innerHTML + "</pre></div>";
          }
  
          var url = document.location.href;
          newdiv.innerHTML += '<br />'
              + '-------------------------------------------------------------------------<br />'
              + 'from: Wenbin\'s blog<br />'
              + '文章作者: Wenbin<br />'
              + '文章链接: <a href="' + url + '">' + url + '</a><br />'
              + '本文章著作权归作者所有，任何形式的转载都请注明出处。';
  
          selection.selectAllChildren(newdiv);
          window.setTimeout(function () {bodyElement.removeChild(newdiv);}, 200);
});

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
  var frostButton = document.getElementById('frostButton');
  frostButton.addEventListener('click', function(event) {
    event.preventDefault();
    frost();
  });

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

  var lightsButton = document.getElementById('lightsButton');
  lightsButton.addEventListener('click', function(event) {
    event.preventDefault();
    lights();
  });

/*read*/
var readloading = document.getElementById('loading-box');
var toggleButton = document.getElementById('toggleButton');
var jsFiles = [
    'https://cdn.staticfile.org/meting/2.0.1/Meting.min.js',
    'https://unpkg.com/wenbin-blog@1.1.0/js/live2d/autoload.js',
    'https://cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js',
    'https://unpkg.com/wenbin-blog@1.0.0/js/zidingyi/xiantiao.js'
];
var loadJsFiles = localStorage.getItem('loadJsFiles') !== 'false';

function updateJsFiles() {
    if (loadJsFiles) {
        readloading.innerHTML = '';
        toggleButton.querySelector('i').classList.remove('on-kg');
        jsFiles.forEach(function (url) {
            loadScript(url, 'zdy-js');
        });
    } else {
        readloading.classList.add('loaded');
        toggleButton.querySelector('i').classList.add('on-kg');

        jsFiles.forEach(function (url) {
            removeScript(url);
        });

        removeElement('meting-js');
        removeElement('canvas');
        removeElement('.aplayer');
        removeElement('.hp_special_experience');
        removeElement('#color-toggle-btn');
        removeElement('#waifu');

        var videoBg = document.getElementById('videobg');
        var htmlTag = document.documentElement;
        htmlTag.setAttribute('data-user-color-scheme', loadJsFiles ? 'light' : 'dark');
        videoBg.style.display = 'none';
    }
}
function removeScript(url) {
    var scripts = document.querySelectorAll('[src="' + url + '"]');
    scripts.forEach(function (script) {
        script.remove();
    });
}
function removeElement(tagName) {
    var elements = document.querySelectorAll(tagName);
    elements.forEach(function (element) {
        element.remove();
    });
}

function toggleJsFiles() {
    loadJsFiles = !loadJsFiles;
    localStorage.setItem('loadJsFiles', loadJsFiles);
    updateJsFiles();
    location.reload(true);
}

function loadScript(url, targetTagName) {
    var script = document.createElement('script');
    script.src = url;
    var targetTag = document.querySelector(targetTagName);

    if (targetTag) {
        targetTag.appendChild(script);
    } else {
        document.body.appendChild(script);
    }
}

toggleButton.addEventListener('click', toggleJsFiles);
updateJsFiles();