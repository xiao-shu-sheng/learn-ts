 // clacs的基本用法：继承和类型约束(implements)
 // class 的修饰符 readonly private protected public
 // super原理
 // 静态方法
 // get set方法




interface Options {
    el: string | HTMLElement
}
interface VueCls {
    options: Options,
    init(): void
}

interface VNode {
    tag: string // 标签
    readonly text?: string // 文本只读
    children?: VNode[] // 子集
}
class Dom {
    // 获取子类的传参
    // constructor(name: string) {

    // }
    // 创建节点的方法
    createElement(el: string) {
        return document.createElement(el)
    }
    // 填充文本，private: 私有的只能在自己内部调用不能在继承类中调用
    // 实例化后也不允许调用
    // const dom = new Dom() dom.setText("") 报错
    private setText(el: Element, text?: string | null) {
        if(text) 
            el.textContent = text
    }
    // 渲染函数, protected受保护的，给自己内部和子类调用的，
    // 实例化后也不允许调用
      // const dom = new Dom() dom.render("") 报错
    protected render(data: VNode) {
       let root = this.createElement(data.tag)
       if(data.children && Array.isArray(data.children)){
            if(data.text) {
                this.setText(root, data.text)
            }
            data.children.forEach(item => {
                let child = this.render(item)
                root.appendChild(child)
            })
       }else {
            this.setText(root, data.text)
       }
       return root
    }
}

class Vue extends Dom implements VueCls{
    options: Options
    constructor(options: Options) {
        // 父类的调用
        // 父类的prototype.constructor.call, 可以给父类传参
        // 例如super('name') 
        super() 
        this.options = options
        this.init()
        // super.render()  // 可以在这里使用super调用父类方法
    }
    static author() {
        return "xx"
    }
    static version() {
        // 只能调用statice,不能调用其他方法
        this.author()
        return "1.0.1";
    }
    // public 公开的，哪里都可以用，
    public init() {
        // 虚拟dom，通过js去渲染真实的dom
        let data: VNode = {
            tag: 'div',
            children: [
                {
                    tag: 'div',
                    text: '天明',
                    children: [
                        {
                            tag: 'div',
                            text: '墨家巨子',
                            children: [
                                {
                                    tag: 'div',
                                    text: '宝剑墨眉',
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el
        app.appendChild(this.render(data))
    }
}


new Vue({
    el: '#app'
}) 

console.log(Vue.version())




// get,set
class Ref {
    _value: any
    constructor(value: any){
        this._value = value
    }
    get value() {
        return this._value + '被我我拦截了'
    }
    set value(newVal) {
        this._value = newVal + '我设置了'
    }
}

const ref = new Ref('导弹')
console.log(ref.value)
ref.value = '机器'
console.log(ref.value)