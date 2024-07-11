// infer推导泛型参数
// infer声明只能出现在extend子语句中
// 获取promise返回参数


interface UserInfer {
    name:string
    age: number
}

type PromiseType = Promise<UserInfer>
type GetPromiseType<T> = T extends Promise<infer U> ? U : T
type T = GetPromiseType<PromiseType>



// infer协变， 产生协变会返回联合类型
let user = {
    name:'天明',
    age: 14
}
type UserI<T> = T extends {name: infer U, age: infer U} ? U: T
type UserL = UserI<typeof user>

// infer逆变， 出现在函数参数上面, 逆变返回的是交叉类型
type Per<T> = T extends {
    a:(x: infer U) => void,
    b:(x: infer U) => void
}? U : never
type PerI = Per<{a:(x: number) => void, b:(x: number) => void}>


// infer用法
type Arr = ['number', 'string' , 'boolean']
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;
type a = First<Arr>

//infer递归
type Arr2 = [1, 2, 3, 4]
type ReverArr<T extends any[]> = T extends [infer first, ...infer reset] ? [...ReverArr<reset>, first] : T;
type Arr3 = ReverArr<Arr2>