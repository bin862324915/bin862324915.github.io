const siteId = window.location.hostname; 
const wsUrl = 'wss://ws.zzzwb.ggff.net' + '?site-id=' + encodeURIComponent(siteId);
let socket;
let retryAttempt = 0; 
const liveuserElem = document.getElementById('online');

function getTimestamp() {
  return new Date().toLocaleString();
}

function connectWebSocket() {
  console.log(`[${getTimestamp()}] 正在连接 WebSocket 服务器...`);

  socket = new WebSocket(wsUrl);

  socket.onopen = function() {
    retryAttempt = 0; 
    console.log(`[${getTimestamp()}] WebSocket 连接成功`);

    socket.send(JSON.stringify({
      siteId
    }));
  };

  socket.onmessage = function(event) {
    try {
      const data = JSON.parse(event.data);

      if (data.type === 'update' && 'liveuser' in data) {
        if (liveuserElem) { 
          liveuserElem.textContent = data.liveuser;
        }
        console.log(`[${getTimestamp()}] 站点 (${data.siteId}) 当前在线人数: ${data.liveuser}`);
      }
    } catch (error) {
      console.error(`[${getTimestamp()}] 解析 WebSocket 消息时出错: ${error.message}`);
    }
  };

  socket.onclose = function(event) {
    console.warn(`[${getTimestamp()}] WebSocket 连接关闭，代码: ${event.code}`);
    
    retryAttempt++;
    const retryTime = Math.min(5000 * Math.pow(2, retryAttempt), 60000);
    console.log(`[${getTimestamp()}] ${retryTime / 1000} 秒后将重新尝试连接 WebSocket...`);
    setTimeout(connectWebSocket, retryTime); 
  };

  socket.onerror = function(event) {
    console.error(`[${getTimestamp()}] WebSocket 连接发生错误:`, event);
  };
}

connectWebSocket();
