const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    audio: [{
            name: '未来可期',
            artist: '人生值得',
            url: 'https://aod.cos.tx.xmcdn.com/storages/5ad5-audiofreehighqps/B1/49/GKwRINsH-5EFABwOWQII5-0b.m4a',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003BZfLE0ba4fQ_1.jpg',
        },
        {
            name: '愿世间美好',
            artist: '与你环环相扣',
            url: 'http://ws.stream.qqmusic.qq.com/C4000010EnTc3omLSF.m4a?guid=436322718&vkey=3A76DACA66FFA73B274F1E766A7950248E2E66C5706A56E0C80FA9384F18C256F9E747C0C18CF4C917744FB9D6C868B05B37F51F70DB850D&uin=&fromtag=120032',
            cover: 'https://p1.music.126.net/JvCzECg-bM3ZvePvKwBAEw==/109951165390158816.jpg',
        },
        {
            name: '去有风的地方',
            artist: '遇见你',
            url: 'http://music.163.com/song/media/outer/url?id=139774.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001jmGnd4KUxDv.jpg',
        },

    ]
});
