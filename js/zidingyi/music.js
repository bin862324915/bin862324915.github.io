const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    audio: [{
            name: '你好吗',
            artist: '我很好',
            url: 'http://music.163.com/song/media/outer/url?id=139774.mp3',
            cover: 'https://p1.music.126.net/JvCzECg-bM3ZvePvKwBAEw==/109951165390158816.jpg',
        },
        {
            name: '去有风的地方',
            artist: '遇见你',
            url: 'https://aod.cos.tx.xmcdn.com/storages/5ad5-audiofreehighqps/B1/49/GKwRINsH-5EFABwOWQII5-0b.m4a',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001jmGnd4KUxDv.jpg',
        },
    ]
});
