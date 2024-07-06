// 内置对象

// ecma Number Date RegExp Error XMLHttprequest
// dom querySelect MouseEvent
// bom promise localstorage location cookie


// ecma类型定义
let num1:Number = new Number(1)
let date:Date = new Date()
let reg: RegExp = new RegExp(/\w/)
let err: Error = new Error("我， 错了")
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

promise.then(res => {
    
})