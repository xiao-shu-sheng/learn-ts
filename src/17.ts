function add<T>(a: T, b: T) {
    //return a + b // 报错
}

// 泛型约束
function addLimit<T extends number>(a: T, b: T) {
    return a + b // 报错
}
function addLimit2<T extends string>(a: T, b: T) {
    return a + b // 报错
}


// 泛型约束
interface LenLimit{
    length:number
}
function fnLimit<T extends LenLimit>(a: T) {
    console.log(a.length)
}
fnLimit("111")
fnLimit([1, 1, 1])




// keyof约束
let person2 = {
    name: "天明",
    age: 12
}

type PKey = keyof typeof person2

function ob<T extends object, K extends keyof T>(obj: T, key: K) {
    console.log(obj[key])
}
ob(person2, 'name')



// 泛型可选
interface Data2 {
    name: string,
    age: number,
    sex: boolean,
}

// for in
type Options<T extends object> = {
    readonly [Key in keyof T]?:T[Key]
}
type BOptions = Options<Data2>