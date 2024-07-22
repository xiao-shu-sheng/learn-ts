// let canvas = document.querySelector('canvas') as HTMLCanvasElement;
// let ctx = canvas.getContext('2d') as CanvasRenderingContext2D 
// canvas.width = screen.availWidth
// canvas.height = screen.availHeight
// let rainStr: string[] = '阿珍爱上了阿强，在一个没有雨的晚上'.split('')
// let rainArr = Array(Math.ceil(canvas.width / 10)).fill(0)
// console.log(rainArr)
// const rain = () => {
//     ctx.fillStyle = 'rgba(0,0,0, 0.05)'
//     ctx?.fillRect(0, 0, canvas.width, canvas.height)
//     ctx.fillStyle = '#0f0'
//     rainArr.forEach((i, index) => {
//         ctx.fillText(
//             rainStr[Math.floor(Math.random() * rainStr.length)],
//             index * 10,
//             i + 10,
//         )
//         rainArr[index] = i > canvas.height || i > Math.random()*10000 ? 0 : i + 10
//     })
// }
// setInterval(rain, 40)
// 获取 canvas 和 context
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
// 定义雨滴字符串
var rainStr = '阿珍爱上了阿强，在一个没有雨的晚上'.split('');
var rainArr = Array(Math.ceil(canvas.width / 10)).fill(0);
var drawPerson = function (x, y, headColor, bodyColor, armColor, footColor) {
    // 绘制小人的函数
    // 头部
    ctx.fillStyle = headColor;
    ctx.beginPath();
    ctx.arc(x, y - 40, 20, 0, Math.PI * 2); // 头部
    ctx.fill();
    // 身体
    ctx.strokeStyle = bodyColor;
    ctx.beginPath();
    ctx.moveTo(x, y - 20);
    ctx.lineTo(x, y + 20); // 身体
    ctx.stroke();
    // 手臂
    ctx.strokeStyle = armColor;
    ctx.beginPath();
    ctx.moveTo(x - 30, y - 10);
    ctx.lineTo(x + 30, y - 10); // 手臂
    ctx.stroke();
    // 腿部
    ctx.strokeStyle = footColor;
    ctx.beginPath();
    ctx.moveTo(x - 15, y + 20);
    ctx.lineTo(x - 15, y + 50); // 左腿
    ctx.moveTo(x + 15, y + 20);
    ctx.lineTo(x + 15, y + 50); // 右腿
    ctx.stroke();
};
var drawHeart = function (x, y) {
    // 绘制爱心的函数
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 30, y - 30, x - 30, y + 30, x, y + 30);
    ctx.bezierCurveTo(x + 30, y + 30, x + 30, y - 30, x, y);
    ctx.fill();
};
// 初始化小人的位置
var aqiang = { x: 50, y: canvas.height / 2, dx: 2 }; // 从左边开始
var azhen = { x: canvas.width - 50, y: canvas.height / 2, dx: -2 }; // 从右边开始
var rain = function () {
    // 绘制雨滴效果
    ctx.fillStyle = 'rgba(0,0,0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    rainArr.forEach(function (i, index) {
        ctx.fillText(rainStr[Math.floor(Math.random() * rainStr.length)], index * 10, i + 10);
        rainArr[index] = i > canvas.height || i > Math.random() * 10000 ? 0 : i + 10;
    });
    // 更新小人的位置
    aqiang.x += aqiang.dx;
    azhen.x += azhen.dx;
    // 检测相遇并绘制爱心
    if (Math.abs(aqiang.x - azhen.x) < 30) {
        drawHeart((aqiang.x + azhen.x) / 2, (aqiang.y + azhen.y) / 2 - 30);
    }
    // 绘制小人
    drawPerson(aqiang.x, aqiang.y, 'blue', '#FFD700', '#FFA500 ', '#FF6347');
    drawPerson(azhen.x, azhen.y, 'pink', '#FFCCCB', '#00CED1', '#32CD32');
};
setInterval(rain, 40);
