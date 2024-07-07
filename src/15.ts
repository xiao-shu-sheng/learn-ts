// symbol

// Symbol(description?: string | number | undefined):
// symbol: 唯一；创建时候内存地址是不一样的
let sy1:symbol = Symbol('1')
let sy2:symbol = Symbol('1')
let sy3:symbol = Symbol(1)
let sy4:symbol = Symbol(1)

console.log(sy1 === sy2)
console.log(sy3 === sy4)
console.log(sy1, sy2)

// 如何让两个symbol相等：使用Symbol.for
// 使用Symbol.for会从全局里面找，看看有没有注册过这个key,如果有直接拿来用，没有的话直接创建一个
console.log(Symbol.for('12') === Symbol.for('12'))


// 使用场景: 解决对象属性重复的问题
let objSym = {
    name: '天明',
    a1: sy1,
    a2: sy2,
    [sy1]: '1',
    [sy2]: '1',
}
console.log(objSym)

// 取key: for in
// 打印结果为：name a1 a2；无法读取到symbol
for(let key in objSym) {
    console.log(key) 
}

// 取key: Object.keys
// 打印结果为：name a1 a2；无法读取到symbol
Object.keys(objSym).forEach(key => {
    console.log(key)
})


// 取key:Object.getOwnPropertyNames
// 打印结果为：name a1 a2；无法读取到symbol
Object.getOwnPropertyNames(objSym).forEach(key => {
    console.log(key)
})


// 取key:Object.getOwnPropertyNames
// 打印结果为：Symbol(1) Symbol(1) 无法读取到name a1 a2
Object.getOwnPropertySymbols(objSym).forEach(key => {
    console.log(key)
})


// 取key: 使用reflect.ownkeys,可以完美的读到所有的keys
Reflect.ownKeys(objSym).forEach(key => {
    console.log(key)
})

//生成器写法
function* gen() {
    yield "天明" // 返回可以是同步也可以是异步
    yield Promise.resolve('墨家巨子') // 返回可以是同步也可以是异步
    yield "宝剑墨眉" // 返回可以是同步也可以是异步
}

// 按顺序来执行的
const mo = gen()
console.log(mo.next())
console.log(mo.next())
console.log(mo.next())
console.log(mo.next())


// 迭代器
// set构造函数创建, 天然去重只支持数字和字符串，对象和数组不支持
let set1: Set<number> = new Set([1,2,3,4,4])
console.log(set1) // Set(4) { 1, 2, 3, 4 }

// map构造函数创建
let map1: Map<any,any> = new Map()
// Map的key可以用原始类型也可以用引用类型
let arrMap = [1,23, 456]
map1.set(arrMap, "我是值，前面arrMap是key")
console.log(map1.get(arrMap))
console.log(map1)


// function
function args() {
    console.log(arguments) // 伪数组
}

// let list = document.querySelector('div') // 伪数组,node环境下会报错


// 迭代器 
const each = (value: any) => {
    let It:any = value[Symbol.iterator]() // 迭代器取值
    let next:any = { done: false}
    while(!next.done) {
        next = It.next()
        if(!next.done) {
            console.log(next.value)
        }
    }
}
each(map1)
each(set1)

let arrSy = [1,2,3]
each(arrSy)
// 取值
arrSy[Symbol.iterator]().next().value 



// 迭代器的语法糖为for of
// tsconfig.json中"target": "es5"时会报错：
// Type 'Set<number>' can only be iterated through when using the '
// --downlevelIteration' flag or with a '--target' of 'es2015' or higher
// 改成"target": "es6"或者其他更高的就行
// for of 方法对象是不能使用的，对象不支持
for(let val of set1) {
    console.log(val)
}


// 解构
// 数组解构的底层原理是调用Symbol.iterator
let [a, b, c] = [1,2,3]
console.log(a,b,c)


// 对象手动支持for of
let objAutoSym = {
    max: 5,
    current: 0,
    [Symbol.iterator](){  // 支持类似数组的解构
        return {
            max: this.max,
            current:this.current,
            next() {
                if(this.current == this.max) {
                    return{
                        value:undefined,
                        done:true
                    }
                }else {
                    return {
                        value: this.current++,
                        done: false
                    }
                }
                
            }
        }
    }
}

for(let val of objAutoSym) {
    console.log(val)
}


// 对象解构的底层调用的是Symbol.toPrimitive