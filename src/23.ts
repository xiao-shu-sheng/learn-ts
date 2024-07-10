// 什么是发布订阅模式
// 谁在用vue2 eventBus $on $emit
// electron ipRender ipMain通信
// DOM2事件 addEventListener removeEventListener
// 生成.js文件在index.html中导入就可以看到效果了

/** 
// 创建自定义事件,事件监听原理
const cb = () => {
    console.log('xxx了')
}
// 监听器
document.addEventListener('xxx', cb,{
    once: true // 只执行一次
})
// 移除
document.removeEventListener('xxx')
const e = new Event('xxx') // 订阅中心
document.dispatchEvent(e)
*/



// 实现 once on emit off 订阅中心Map<事件名称， [Function]订阅者集合>
interface I {
    events: Map<string, Function[]>
    once: (event: string, callback: Function)=>void // 触发一次
    on: (event: string, callback: Function)=>void // 订阅
    emit: (event: string, ...arg: any[])=>void // 派发
    off: (event: string, callback: Function)=> void // 删除监听器
}
class Emitter implements I {
    events: Map<string, Function[]>
    constructor() {
        this.events = new Map()
    }
    once(event: string, callback: Function) {
        const nb = (...arg:[]) => {
            callback(...arg)
            this.off(event, nb)
        }
        this.emit(event, nb)
    }
    on(event: string, callback: Function) {
        if(this.events.has(event)) { // 存过了
            const calbacklist = this.events.get(event)
            calbacklist && calbacklist.push(callback)
        } else {
            this.events.set(event, [callback])
        }
    }
    emit(event: string, ...arg: any[]) {
        const calbacklist = this.events.get(event)
        if(calbacklist) {
            calbacklist?.forEach(fn => {
                fn(...arg)
            })
        } 
    }
    off(event: string, callback: Function) {
        const calbacklist = this.events.get(event)
        calbacklist?.splice(calbacklist.indexOf(callback), 1)
    }
}

const bus = new Emitter()
bus.on('message', ()=>{

})
bus.emit('message', 1)