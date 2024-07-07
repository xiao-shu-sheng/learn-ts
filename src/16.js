"use strict";
// 动态类型
function fn2(a, b) {
    return [a, b];
}
function fn3(a, b) {
    return [a, b];
}
function fn4(a, b) {
    return [a, b];
}
fn4(1, true);
fn4(1, "true");
var aType = "天明";
var aType2 = 2;
var aType3 = true;
var aType4 = null;
var msg = {
    msg: "墨家没了"
};
var axios = {
    get: function (url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url); // 发起请求
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            };
            xhr.send(null);
        });
    }
};
// node环境下不能运行的，使用tsc --watch 16.ts生成js文件
// 在html文件中引入
axios.get('../src/./data.json').then(function (res) {
    console.log(res.code);
});
