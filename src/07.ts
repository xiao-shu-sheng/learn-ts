// 联合类型
let phone: number | string = 123 
let fn = function(un: number | boolean):boolean {
    return !!un
}
fn(1)
fn(false)

// 交叉类型
interface Person {
    name: string
    age: number
}
interface Man {
    sex: number
}
const student = (student: Person & Man) =>{
    console.log(student)
}

student({
    name: "天明",
    age: 14,
    sex: 1
})

// 类型断言
let asFn = function(asun: number | string):void {
    console.log((asun as string).length)
}
// 类型断言只能欺骗ts编译器，不能保证程序运行时不出错，不能滥用
// 打印结果为undefined
asFn(123)

interface A1 {
    run: string
}
interface B1 {
    build: string
}
let asFn2 = (asun1: A1 | B1) => {
    // 这两种方式都可以
    console.log((<A1>asun1).run)
    console.log((asun1 as A1).run)
}
asFn2({
    build: '我裂开了'
})

// any可以被断言成任何类型
let asFn3 = (asun3: any): boolean => {
    return asun3 as boolean
}
// 没有任何卵用
asFn3(3)