// 类装饰器 ClassDecorator target 构造函数
// 属性装饰器 PropertyDecorator
// 参数装饰器 ParameterDecorator
// 方法装饰器 MethodDecorator PropertyDescriper
// 装饰器工程
// import 'reflect-metedata'
// axios
import axios from 'axios'
import 'reflect-metadata'
/** 
const Base:ClassDecorator = (target) => {
    // 有了构造函数就可以通过prototype来给它增加属性、方法
    console.log(target)
    target.prototype.__name = 'base'
    target.prototype.__fn = () =>{
        console.log('小书生')
    }
}
@Base
*/

// 如果想实现传参可以使用函数柯力化
// 柯力化之前: function add(a, b){} 柯力化之后： function add(a) { function add1(b) {}}

const Base = (name: string) => {
    // 有了构造函数就可以通过prototype来给它增加属性、方法
    const fn:ClassDecorator = (target) => {
        // console.log(target)
        target.prototype.__name = name
        target.prototype.__fn = () =>{
            // console.log('小书生')
        }
    }
    return fn
}


const Get = (url:string) => {
    // 装饰器自己帮我们填充的参数
    const fn:MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
        console.log(target, key, descriptor)
        // 获取
        const _key = Reflect.getMetadata('key', target)
        axios.get(url).then(res => {
            descriptor.value(_key ? res.data[_key] : res.data) //getList回传
        })
    }
    return fn
}
const Result = () => {
    // target原型对象， key是getList的名字，index是参数所在的位置
    const fn: ParameterDecorator = (target, key, index) => {
        console.log(target, key, index)
        // 保存
        Reflect.defineMetadata('key', 'result', target)
    }
    return fn
}

const Name:PropertyDecorator = (target, key) => {
    console.log(target, key) //target原型对象, key属性名称
}

@Base('小明')
class Http {
    @Name // 属性装饰
    name:string
    constructor() {
        this.name = '小明'
    }

    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10') // 方法装饰器
    getList(@Result() data:any) {  // 参数装饰器
        console.log(data)
    }
    create() {

    }
}

const http = new Http() as any

http.__fn()
console.log(http.__name)

// 使用Base(Htpp) 来代替 @Base 也是可以的

