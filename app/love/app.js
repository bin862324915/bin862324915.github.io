AV.init({
  appId: '1Ao7imckprhj98luQK1xebPA-gzGzoHsz',
  appKey: 'cY0YqjpaGxRvGE4o2Mf21Zbq',
  serverURL: 'https://1ao7imck.lc-cn-n1-shared.com',
});

const colors = ["#c362c3", "#7070cf", "#57bdbd", "#70c370", "#c5c55e", "#c7a15b", "#b36868", "#d99edd", "#6388d3", "#468dad", "#aa6dc9", "#bb775e", "#a18299", "#07969a", "#d36a68", "#a2ad47", "#a467c9", "#c76259", "#cda562", "#8faddf"];
let currentIndex = 0;
/*颜色选项
function getRandomBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
*/
function getRandomBackgroundColor() {
    const currentColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    return currentColor;
}

const mynameInput = document.getElementById('mynamein');
const younameInput = document.getElementById('younamein');
const zhengwenInput = document.getElementById('zhengwenin');
const tjButton = document.getElementById('tj');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modalText');
const closeModalButton = document.querySelector('#closeModal');

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
tjButton.addEventListener('click', () => {
  const myname = mynameInput.value;
  const youname = younameInput.value;
  const inputText = document.getElementById("zhengwenin").value;
  const convertedText = inputText.replace(/\n/g, "<br>");
  const zhengwen = convertedText;

  if (myname && youname && zhengwen) {
    const BBQ = AV.Object.extend('bbq');
    const bbqRecord = new BBQ();
    bbqRecord.set('from', myname);
    bbqRecord.set('to', youname);
    bbqRecord.set('data', zhengwen);
    bbqRecord.save().then(() => {
      bbknone();
      mynameInput.value = '';
      younameInput.value = '';
      zhengwenInput.value = '';
      modalText.textContent = '已发表，刷新网页查看哦(｡♥ᴗ♥｡) ';
      $("#modal").fadeIn("slow");
      return;
    }).catch(() => {
    modalText.textContent = '出错啦！请重试哦(✖人✖)';
      $("#modal").fadeIn("slow");
    return;
    });
  } else {
    modalText.textContent = '信息都填写了嘛？( • ̀ω•́ )✧';
      $("#modal").fadeIn("slow");
    return;
  }
});
const fbygBlock = document.getElementById('fbyg');
const maskbiaoBlock = document.getElementById('maskbiao');
const bbkBlock = document.getElementById('bbk');
const qxan = document.getElementById('qx');



fbygBlock.addEventListener('click', () => {
  $("#maskbiao").fadeIn("slow");
  $("#bbk").fadeIn("slow");
});


function bbknone() {
  const input1 = document.getElementById('mynamein');
  const input2 = document.getElementById('younamein');
  const input3 = document.getElementById('zhengwenin');
  input1.value = '';
  input2.value = '';
  input3.value = '';
  $("#maskbiao").fadeOut("slow");
}

qxan.addEventListener('click', () => {
  bbknone();
  modal.style.display = 'none';
});

const parentBlock = document.querySelector('.zhuti');
const query = new AV.Query('bbq');
query.descending('createdAt');
const processLeanCloudData = new Promise((resolve, reject) => {
  query.find().then((bbqRecords) => {
    bbqRecords.forEach((record) => {
      const from = record.get('from');
      const to = record.get('to');
      const data = record.get('data');
      const createdAt = record.get('createdAt');
	const date = new Date(createdAt);
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');
	const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	const zhutiBlock = document.querySelector('.zhuti');
	const zhutiWidth = zhutiBlock.offsetWidth;
	const zhutiHeight = zhutiBlock.offsetHeight;
	const randomX = Math.floor(Math.random() * (zhutiWidth - 260)); 
	const randomY = Math.floor(Math.random() * (zhutiHeight - 300));
	const son = document.createElement('div');
	son.className = 'son';

  son.innerHTML = `
  <p id="biaoti">${from} 想对 ${to} 说:</p>
  <p id="neirong">${data}</p>
  <p id="shijian">${formattedDate}</p>
`;

const randomColor = getRandomBackgroundColor();
son.style.backgroundColor = randomColor;
son.style.left = `${randomX}px`;
son.style.top = `${randomY}px`;
zhutiBlock.appendChild(son);

    });
    resolve();
  });
});
const initializeDragFunction = new Promise((resolve, reject) => {
  processLeanCloudData.then(() => {
    dragFn('.son', '.zhuti');
    resolve();
  });
});

Promise.all([processLeanCloudData, initializeDragFunction]).then(() => {
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
});



function dragFn(dragObj, parent) {
  $(dragObj).mousedown(function (e) {
    var _this = $(this);
    var parent_h = $(parent)[0].offsetHeight;
    var parent_w = $(parent)[0].offsetWidth;
    var drag_h = $(this)[0].offsetHeight;
    var drag_w = $(this)[0].offsetWidth;
    var dragX = e.clientX - $(this)[0].offsetLeft;
    var dragY = e.clientY - $(this)[0].offsetTop;

    $(this).css('z-index', '9').siblings().css('z-index', '1');

    $(document).mousemove(function (e) {
      var l = e.clientX - dragX;
      var t = e.clientY - dragY;
      if (l < 0) {
        l = 0;
      } else if (l > parent_w - drag_w) {
        l = parent_w - drag_w;
      }
      if (t < 0) {
        t = 0;
      } else if (t > parent_h - drag_h) {
        t = parent_h - drag_h;
      }
      _this.css({
        left: l + 'px',
        top: t + 'px',
      });
    });
  });
  $(document).mouseup(function () {
    $(this).off('mousemove');
  });
}


function limitCharacters(textarea, maxCharacters) {
  const text = textarea.value;
  if (text.length > maxCharacters) {
    textarea.value = text.substring(0, maxCharacters);
  }
}
document.onkeydown = function (event) {
  if (event.keyCode === 123) {
    showMessage("别F12啦，关心一下身边的女孩子吧( • ̀ω•́ )✧");
    event.preventDefault();
    event.stopPropagation();
  }
};

function showMessage(message) {
  var messageBox = document.getElementById("messageBox");
  var messageContent = document.getElementById("messageContent");
  messageContent.innerHTML = message;
    $("#messageBox").fadeIn("slow");
  setTimeout(function() {
    $("#messageBox").fadeOut("slow");
  }, 2000);
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
        this.character = "❤", this.lifeSpan = 100, this.initialStyles = {
            position: "fixed",
            top: "0",
            display: "block",
            pointerEvents: "none",
            "z-index": "10000000",
            fontSize: "14px",
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