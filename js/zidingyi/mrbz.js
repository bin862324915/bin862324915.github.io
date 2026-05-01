const bingDiv = document.querySelector('.bing-tk');

let loadedRecordsCount = 0;
const recordsToLoad = 15;
let allRecordsLoaded = false;
const loadMoreButton = document.querySelector('#loadMoreButton');

loadMoreButton.addEventListener('click', () => {
  loadMoreRecords();
});

function loadMoreRecords() {
  if (allRecordsLoaded) return;

  fetch(`https://apps.950220.xyz/api/bing?skip=${loadedRecordsCount}&limit=${recordsToLoad}`)
  .then(res => res.json())
  .then(result => {
    if (!result.success || result.data.length === 0) {
      allRecordsLoaded = true;
      loadMoreButton.disabled = true;
      document.getElementById("jiazaiButton").innerHTML = "<center>已经到底了哦</center>";
      document.getElementById("jiazaiButton").style.opacity = "0.5";
      return;
    }

    result.data.forEach(item => {
      const formattedDate = formatDate(new Date(item.sj));
      
      const htmlContent = `
        <img class="olmg" onload="imgloading(this)" src="${item.slturl}" style="border-radius: 8px;">
        <p style="padding-top: 5px;">${formattedDate} | <a href="${item.imgurl}" target="_blank">获取原图</a></p>
      `;
      const newDiv = document.createElement('div');
      newDiv.className = 'bing';
      newDiv.innerHTML = htmlContent;
      bingDiv.appendChild(newDiv);
    });

    loadedRecordsCount += result.data.length;
  })
  .catch(err => {
    console.error('加载失败', err);
  });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

loadMoreRecords();