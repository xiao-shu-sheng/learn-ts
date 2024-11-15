// 内置对象

// ecma Number Date RegExp Error XMLHttprequest
// dom querySelect MouseEvent
// bom promise localstorage location cookie


// ecma类型定义
let num1:Number = new Number(1)
let date:Date = new Date()
let reg: RegExp = new RegExp(/\w/)
let err: Error = new Error("我，没有错，即使错了，也不是我的错")
let xhr: XMLHttpRequest = new XMLHttpRequest()


// dom类型定义
let div: HTMLDivElement | null = document.querySelector('div')
let div1: HTMLElement | null = document.querySelector('div')
let div2 = document.querySelector('div') as Element
// 获取所有的
let divAll: NodeList = document.querySelectorAll('div')
let divAll2: NodeListOf<HTMLDivElement | HTMLInputElement> = document.querySelectorAll('div input')


// bom类型定义
let local: Storage = localStorage
let lo: Location = location
let promise: Promise<number> = new Promise((r) => r(1))

// promise 有三个状态
// pending(等待中，初始状态，表示异步状态操作尚未开始) 
// fulfilled(已完成，异步操作成功完成) 
// rejected (已失败，异步操作失败)
promise.then(res => {
    
})
// async/await 是一种语法糖，它使得异步代码看起来像同步代码。async 函数返回一个 Promise 对象，
// await 关键字用于暂停执行异步代码，直到 Promise 对象的值可用。
async function fn() {
    let res = await promise
}


// Promise.all 中的请求是异步并发执行的，并不是同步执行的
// 两个请求会同时发起,如果第一个请求需要 2 秒，第二个请求需要 1 秒
// Promise.all 会在所有请求都完成时（第一个请求完成时）返回结果，总耗时为 2 秒，而不是两个请求耗时的总和（3 秒）
// 会在所有请求都完成时才返回结果，返回结果顺序和请求顺序一致
// 如果其中一个报错，其他的请求会被忽略
Promise.all([
  fetch('https://api.example.com/data1').then(r => r.json()),
  fetch('https://api.example.com/data2').then(r => r.json())
]).then(([data1, data2]) => {
  console.log('Both requests completed:', data1, data2);
});

// 节流: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
// 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
// 除了 async/await 和 Promise，以下几种手段也可以实现异步操作
// 1.setTimeout
// 2·setInterval
// 3.requestAnimationFrame
// 4.回调函数
// 5.事件监听
// 6.生成器函数
// 7.递归
// 8.Web Workers
// 9.Observable