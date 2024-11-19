{
    // 类装饰器 ClassDecorator target 构造函数
    // 属性装饰器 PropertyDecorator
    // 参数装饰器 ParameterDecorator
    // 方法装饰器 MethodDecorator PropertyDescriper
    // 装饰器工程
    // import 'reflect-metedata'
    // axios
    // import axios from 'axios'
    // import 'reflect-metadata'
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

    /**
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
    */

    // 使用Base(Htpp) 来代替 @Base 也是可以的


    // Define a class decorator


    // function Loggers<T extends { new (...args: any[]): {} }>(constructor: T) {
    //     return class loggerClass extends constructor {
    //         constructor(...args: any[]) {
    //             super(...args)
    //             console.log(`class ${constructor.name} instantiated`)
    //         }
    //     }
    // }


    // @Loggers
    // class Person {
    //     private name: string;
    //     private age: number;

    //     constructor(name: string, age: number) {
    //         this.name = name;
    //         this.age = age;
    //     }

    //     callMeFather() {
    //         console.log(`${this.name}，叫爸爸，我知道你今年 ${this.age}岁`);
    //     }
    // }

    // const person = new Person('小明', 14);
    // person.callMeFather();


    // seal 方法用于密封一个对象，使其无法添加或删除属性，但是可以修改现有的属性
    // freeze 方法用于冻结一个对象，使其无法添加、删除或修改属性。
    // freeze 冻结后的对象无法被修改，任何尝试修改其属性的行为都会被忽略
    // seal 与 freeze  方法是不可逆的，一旦对象被冻结或密封，就无法恢复其原始状态。

    function sealed(target: any) {
        Object.seal(target);
        Object.seal(target.prototype);
    }

    @sealed
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting + "，叫爸爸";
        }
    }

    const greeter = new Greeter("小明");
 
    console.log(greeter.greet());

    greeter.greeting = "小红";

    console.log(greeter.greet());

    function f() {
        console.log('f(): evaluated');
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('f(): called');
        }
    }
    function g() {
        console.log('g(): evaluated');
        return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            console.log('g(): called');
        }
    }

    class C {
        @f() @g()
        method() { }
    }
}