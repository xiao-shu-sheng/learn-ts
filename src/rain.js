var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;
var rainStr = '阿珍爱上了阿强，在一个没有雨的晚上'.split('');
var rainArr = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(rainArr);
var rain = function () {
    ctx.fillStyle = 'rgba(0,0,0, 0.05)';
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    rainArr.forEach(function (i, index) {
        ctx.fillText(rainStr[Math.floor(Math.random() * rainStr.length)], index * 10, i + 10);
        rainArr[index] = i > canvas.height || i > Math.random() * 10000 ? 0 : i + 10;
    });
};
setInterval(rain, 40);