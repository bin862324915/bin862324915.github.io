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

// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/funny.ico");
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
var backgroundImageUrls = [
  "url('https://z1.ax1x.com/2023/10/11/pPzRbo4.jpg')",
  "url('https://z1.ax1x.com/2023/09/12/pP216Vx.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvJts.png')",
  "url('https://z1.ax1x.com/2023/10/12/piSv10g.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSv37Q.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvlnS.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvMX8.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvGkj.png')",
  "url('https://z1.ax1x.com/2023/10/12/piSvu1P.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvefI.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvnpt.jpg')",
  "url('https://z1.ax1x.com/2023/10/12/piSvK6f.jpg')",
  "url('https://z1.ax1x.com/2023/09/12/pP21sq1.jpg')"
];

var randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
var bodyElement = document.querySelector("body");
bodyElement.style.backgroundImage = backgroundImageUrls[randomIndex];