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

window.addEventListener('load', function() {
  var colaElement = document.getElementById('loading');
  if (colaElement) {
    colaElement.style.display = 'none';
  }
});

var ryg = document.getElementById('ryg');
var maskreng = document.getElementById('maskreng');
function showRyg() {
  $("#ryg").fadeIn("slow");
  $("#maskreng").fadeIn("slow");
}
function hideRyg() {
  $("#ryg").fadeOut("slow");
  $("#maskreng").fadeOut("slow");
}
var ryg = document.getElementById('ryg');
var mask = document.getElementById('masklao');
function showLao() {
  $("#ryg").fadeIn("slow");
  $("#masklao").fadeIn("slow");
}
function hideLao() {
  $("#ryg").fadeOut("slow");
  $("#masklao").fadeOut("slow");
}
const nameInput = document.querySelector('.name');
const zhengwenInput = document.querySelector('.zhengwen');
const tjButton = document.querySelector('#tj');
const qxButton = document.querySelector('#qx');
const rygDiv = document.querySelector('#ryg');
const modal = document.querySelector('#modal');
const modalText = document.querySelector('#modalText');
const div2 = document.querySelector('.bg');
const API_BASE = 'https://apps.950220.xyz/api';
const newlz = document.getElementById('newlz');
const mask3 = document.getElementById('mask3');
const Input1 = document.getElementById('nameInput');
const Input2 = document.getElementById('zhengwenInput');
  Input1.addEventListener('input', function() {
    if (Input1.value.length > 10) {
      Input1.value = Input1.value.substring(0, 10); 
    }
  });
  Input2.addEventListener('input', function() {
    if (Input2.value.length > 260) {
      Input2.value = Input2.value.substring(0, 260); 
    }
  });

tjButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const data = zhengwenInput.value.trim();

  if (!name || !data) {
    modalText.textContent = '昵称和内容都要填写哦';
    $("#modal").fadeIn("slow");
    return;
  }

  fetch(`${API_BASE}/plp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, data })
  })
  .then(res => res.json())
  .then(result => {
    if (result.success) {
      hideRyg();
      nameInput.value = '';
      zhengwenInput.value = '';
      div2.classList.add('animate');
      div2.style.display = 'block';
      div2.addEventListener('animationend', () => {
        div2.style.display = 'none';
        div2.classList.remove('animate');
      });
    } else if (result.sensitive) {
      modalText.textContent = result.message;
      $("#modal").fadeIn("slow");
    } else {
      modalText.textContent = '发送失败';
      $("#modal").fadeIn("slow");
    }
  })
  .catch(() => {
    modalText.textContent = '网络异常';
    $("#modal").fadeIn("slow");
  });
});

qxButton.addEventListener('click', () => {
  nameInput.value = '';
  zhengwenInput.value = '';
  hideRyg();
});

const closeModalButton = document.querySelector('#closeModal');
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

document.getElementById('a1').addEventListener('click', function() {
  showRyg();
});

var buttonA2 = document.getElementById('a2');
var buttonDiu = document.getElementById('diu');
var newname = document.getElementById('newname');
var newdata = document.getElementById('newdata');
var lao = document.querySelector('.lao');

buttonA2.addEventListener('click', function() {
  fetch(`${API_BASE}/plp`)
  .then(res => res.json())
  .then(result => {
    if (!result.success || result.data.length === 0) {
      modalText.textContent = '海里空空如也~';
      $("#modal").fadeIn("slow");
      return;
    }
    const random = result.data[0];

    mask3.style.display = 'block';
    newlz.classList.remove('newlaozi');
    newname.textContent = '你捡到了一个来自 ' + random.name + ' 的漂流瓶';
    newdata.textContent = random.data;

    setTimeout(() => {
      mask3.style.display = 'none';
      newlz.classList.add('newlaozi');
      showLao();
      lao.style.display = 'block';
    }, 2000);
  })
  .catch(err => {
    modalText.textContent = '出错啦，请稍后重试';
    $("#modal").fadeIn("slow");
  });
});

buttonDiu.addEventListener('click', function() {
  hideLao();
});