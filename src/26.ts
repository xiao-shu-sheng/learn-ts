// 类型守卫
const isObj = (arg: any) => Object.prototype.toString.call(arg) === '[object Object]'
// 或者const isObj = (arg: any) => ({}).toString.call(arg) === '[object Object]'
const isNum = (num: any): num is number => typeof num === 'number'
const isString = (str: any): str is string => typeof str === 'string'
const isFn = (fn: any): fn is Function => typeof fn === 'function'
// 1.代码没有提示
// 自定义守卫
// 语法规则：参数 is 类型
// 如果它返回true那么这个参数类型就是你想要的类型
// 2.properties of underfined(reading a)
// node环境this成了underfined
// 浏览器环境this成了window
// js基础知识：如果函数独立调用那么this指向window
const fnObj = (data: any) => {
    console.log(isObj(data), 'xx')
    if(isObj(data)){
        // 遍历属性不能用for in 因为for in 会遍历原型上的属性
        let val
        Object.keys(data).forEach(key=> {
            val = data[key]
            if(isNum(val)){
                data[key] = val.toFixed(2)
            }
            if(isString(val)) {
                data[key] = val.trim()
            }
            if(isFn(val)){
                data[key]()
            }
        })
    }
}

let objx = {
    a: 1000.00002,
    b: ' test  ',
    c: function() {
        console.log(this)
        return this.a
    }
}

fnObj(objx)