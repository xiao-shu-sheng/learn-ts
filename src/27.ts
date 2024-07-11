
interface User {
    address: string
    name: string
    age: number
}


// Partial 属性 可选的意思
// Required 属性 必选
// Pick 提取部分属性
// Exclude 排除部分属性
// Omit 排除部分属性 并且返回新的类型

type PartialUser = Partial<User>
type RequiredUser = Required<PartialUser>
type PickUser = Pick<User, 'age' | 'address'>
type ExcludeUser = Exclude<keyof User, 'age'>
type OmitUser = Omit<User, 'age'>;


// Partial原理
type CustomPartial<T> = {
    [P in keyof T]?:T[P]
}
// Require原理
type CustomRequired<T> = {
    [P in keyof T]-?:T[P]
}
// Pick原理
type CustomPick<T, K extends keyof T> = {
    [P in K]:T[P]
}

// Exclude原理, never在联合类型中会被排除的
type CustomExclude<T, K> = T extends K ? never : T


// Omit实现原理  Exclude排除 Pick提取
type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>



// Record 约束对象的key及value, 接收两个泛型, 支持嵌套写法
type Key = 'name' | 'age' | 'address'
type Value = '天明' | 14 | '咸阳'

let objRecord: Record<Key, Value> = {
    name: '天明',
    age: 14,
    address: '咸阳'
}
let objRecord2: Record<Key, Record<Key, Value>> = {
    name: {
        name: '天明',
        age: 14,
        address: '咸阳'
    },
    age: {
        name: '天明',
        age: 14,
        address: '咸阳'
    },
    address: {
        name: '天明',
        age: 14,
        address: '咸阳'
    }
}


// 对象的key只能是string number symbol
type ObjKey = keyof any
type CustomRecord<K extends string | number | symbol, T> = {
    [P in K]:T
}



// ReturnType获取函数返回值的
const fnR = () => [1, '3', true]
type arrNum = ReturnType<typeof fnR>

type CustomReturnType<F extends Function> = F extends(...args: any[]) => infer Res ? Res : never