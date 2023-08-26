const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    audio: [{
        name: '你好吗',
        artist: '我很好',
        url: 'http://music.163.com/song/media/outer/url?id=139774.mp3',
        cover: '/img/avatar.jpg',
    }, ]
});