// 对象混入 合并 A对象 B对象 合并到一起
// 类的混入 A类 B类 合并到一起


interface A {
    age: number
}
interface B {
    name: string
}

let a:A = {
    age:18
}

let b:B = {
    name: "小明"
}

// 合并a,b
// 使用扩展运算符 浅拷贝 返回新的类型
let c = { ...a, ...b}
console.log(c)

// 使用Object.assign 浅拷贝 返回的是交叉类型
let c2 = Object.assign({}, a, b)
console.log(c2)

// 深拷贝 node版本18以上，谷歌版本90多以上
structuredClone(a)



// 类的混入 --> 以插件的方式混入
class Logger {
    log(msg: string) {
        console.log(msg)
    }
}
class Html {
    render() {
        console.log('render')
    }
}
class App {
    run() {
        console.log('run')
    }
}

type Custructor<T> = new (...arg: any[]) => T
function pluginMixin<T extends Custructor<App>>(Base: T) {
    return class extends Base {
        private Logger = new Logger()
        private Html = new Html()
        constructor(...arg: any[]){
            super(...arg)
            this.Logger = new Logger()
            this.Html = new Html()
        }
        run() {
            this.Logger.log('run')
        }
        render() {
            this.Logger.log('render')
            this.Html.render()
        }
    }
}

const mixins = pluginMixin(App)
const app = new mixins()
app.run()
app.render()