AV.init({
  appId: 'nltNbWnKve6Q6oobgbQoGqT4-gzGzoHsz',
  appKey: 'PLMY3oFRTfOUMLpgiB1mJnD7',
  serverURL: 'https://nltnbwnk.lc-cn-n1-shared.com',
});
const bingDiv = document.querySelector('.bing-tk');
const Tuku = AV.Object.extend('tuku');
const query = new AV.Query(Tuku);
query.descending('createdAt');
query.find().then((tukuRecords) => {
  tukuRecords.forEach((record) => {
    const slturl = record.get('slturl');
    const createdAt = record.createdAt;
    const formattedDate = formatDate(createdAt);
    const imgurl = record.get('imgurl');
    const htmlContent = `
      <img onload="imgloading(this)" src="${slturl}" style="border-radius: 8px;">
      <p style="padding-top: 5px;">${formattedDate} | <a href="${imgurl}" target="_blank">获取原图</a></p>
    `;
    const newDiv = document.createElement('div');
    newDiv.className = 'bing';
    newDiv.innerHTML = htmlContent;
    bingDiv.appendChild(newDiv);
  });
}).catch((error) => {
  console.error('Error fetching tuku records:', error);
});
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}