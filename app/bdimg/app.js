// 获取上传表单元素
var uploadForm = document.querySelector('form');

// 添加上传完成的事件监听器
uploadForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取上传文件的 input 元素
    var fileInput = document.querySelector('input[name="file"]');

    // 创建一个 FormData 对象，用于构建表单数据
    var formData = new FormData();
    formData.append('file', fileInput.files[0]); // 添加文件数据

    // 使用 Fetch API 发送 POST 请求
    fetch('https://sp0.baidu.com/6_R1fD_bAAd3otqbppnN2DJv/Pic/upload?pid=super&app=skin&l&logid=3915152959', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // 解析 JSON 响应
    .then(data => {
        // 提取 pic_id_encode 的值
        var picIdEncode = data.data.pic_id_encode;

        // 拼接图片链接
        var imageUrl = 'https://imgsrc.baidu.com/forum/pic/item/' + picIdEncode + '.jpg';

        // 获取显示图片链接的元素并设置其内容
        var urlElement = document.getElementById('url');
        urlElement.textContent = imageUrl;

        // 如果需要显示图片，可以创建一个 img 元素并设置其 src 属性
        var imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        // 将 img 元素添加到页面中，这里以 body 为例
        document.body.appendChild(imgElement);
    })
    .catch(error => console.error('Error:', error));
});
