AV.init({
  appId: 'nltNbWnKve6Q6oobgbQoGqT4-gzGzoHsz',
  appKey: 'PLMY3oFRTfOUMLpgiB1mJnD7',
  serverURL: 'https://nltnbwnk.lc-cn-n1-shared.com',
});
const bingDiv = document.querySelector('.bing-tk');
const Tuku = AV.Object.extend('tuku');
const query = new AV.Query(Tuku);

let loadedRecordsCount = 0;
const recordsToLoad = 15;
let allRecordsLoaded = false;

if (allRecordsLoaded) {
  loadMoreButton.disabled = true;
  document.getElementById("jiazaiButton").innerHTML="<center>已经到底哦</center>";
  document.getElementById("jiazaiButton").style.opacity = "0.5";
}
const loadMoreButton = document.querySelector('#loadMoreButton');

loadMoreButton.addEventListener('click', () => {
  loadMoreRecords();
});

function loadMoreRecords() {
  if (!allRecordsLoaded) {
    const query = new AV.Query(Tuku);
    query.descending('sj');
    query.limit(recordsToLoad);
    query.skip(loadedRecordsCount);
    query.find().then((tukuRecords) => {
      if (tukuRecords.length > 0) {
        tukuRecords.forEach((record) => {
          const slturl = record.get('slturl');
          const sj = record.get('sj');
          const formattedDate = formatDate(sj);
          const imgurl = record.get('imgurl');
          const htmlContent = `
            <img class="olmg" onload="imgloading(this)" src="${slturl}" style="border-radius: 8px;">
            <p style="padding-top: 5px;">${formattedDate} | <a href="${imgurl}" target="_blank">获取原图</a></p>
          `;
          const newDiv = document.createElement('div');
          newDiv.className = 'bing';
          newDiv.innerHTML = htmlContent;
          bingDiv.appendChild(newDiv);
        });
        loadedRecordsCount += tukuRecords.length;
      } else {
        allRecordsLoaded = true;
        document.querySelector('#loadMoreButton').disabled = true;
        document.getElementById("jiazaiButton").innerHTML="<center>已经到底了哦</center>";
        document.getElementById("jiazaiButton").style.opacity = "0.5";
      }
    }).catch((error) => {
      console.error('Error fetching tuku records:', error);
    });
  }
}

loadMoreRecords();
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
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}