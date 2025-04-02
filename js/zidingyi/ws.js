const siteId = window.location.hostname; 
const wsUrl = 'wss://ws.950220.xyz/' + '?site-id=' + encodeURIComponent(siteId);
let socket;
let retryAttempt = 0; 
const liveuserElem = document.getElementById('online');

function getTimestamp() {
  return new Date().toLocaleString();
}
function connectWebSocket() {
  socket = new WebSocket(wsUrl);
  socket.onopen = function() {
    retryAttempt = 0; 
    socket.send(JSON.stringify({
      siteId
    }));
  };
  socket.onmessage = function(event) {
    try {
      const data = JSON.parse(event.data);

      if (data.type === 'update' && 'liveuser' in data) {
        if (liveuserElem) { 
          liveuserElem.innerHTML = `<span>当前在线人数：</span><span>${data.liveuser}</span>`;
        }
      }
    } catch (error) {
    }
  };
  socket.onclose = function(event) {
    retryAttempt++;
    const retryTime = Math.min(5000 * Math.pow(2, retryAttempt), 60000);
    setTimeout(connectWebSocket, retryTime); 
  };
  socket.onerror = function(event) {
  };
}
connectWebSocket();
