// interface 重名 重合
// interface 任意key
// interface ? readonly
// interface 继承接口
// interface 定义类型

interface Axx extends C {
    name: string
    age: number
    [propName:string]: any //索引签名：不知道有多少参数，也不知道是啥乐行
    readonly id: string | number // 只读，不能修改
    readonly cb: (name: string) => boolean  // 只读的
}
// 重名重合
interface Axx {
    sex?: boolean //属性可选
}

// C被A继承
interface C {
    phone:number
}
let axx:Axx = {
    id: 1,
    name: '小明同学',
    age: 12,
    sex: true,
    phone: 123,
    cb: (name)=> {
        if(name == '大黄') {
            console.log(name +'是条好狗')
            return true
        }
        return false
    }

}

console.log(axx.cb('大黄'))