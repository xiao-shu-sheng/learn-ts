// proxy 代理 13个方法 
// Reflect 反射 13个方法  它俩参数一模一样

let person1: any = {name: 'xiaoming', age: 19}
console.log(person1.age)
console.log(Reflect.get(person1, 'name', person1))
let personProxy = new Proxy(person1, {
    // 取值
    get(target, key, receiver) {
        if(target.age < 18) {
            return Reflect.get(target, key, receiver)
        }else {
            return target.name + '成年了'
        }
    },
    //设置 
    set(target, key, value, receiver) {
        return false

    },
    // 拦截函数调用
    apply(target, thisArg, argArray) {
        
    },
    // 拦截in操作符
    has(target, key) {
        return false
    },
    // 拦截 for in
    ownKeys(target: any) {
        return []
    },
    // 拦截new操作符
    construct(target: any, argArray: any[], newTarget: Function) {
        return {}
    },
    // 拦截删除操作
    deleteProperty(target, p) {
        return true
    },

})

console.log(personProxy.age)


// 观察者模式
const list:Set<Function> = new Set()
const autorun = (cb:Function)=> {
    if(!list.has(cb)){
        list.add(cb)
        cb()
    }
}
const observable = <T extends object>(params:T) => {
    return new Proxy(params, {
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver)
            list.forEach(fn => fn())
            return result
        },
    })
}

// 示例
const state = observable({ count: 0 })

autorun(() => {
    console.log(`Count is: ${state.count}`)
})

// 触发响应
state.count = 1
state.count = 2