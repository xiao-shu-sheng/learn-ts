// 数组类型
// number[]
// Array<T>泛型

let ary: number[] = [1, 2, 4]

//使用interface定义对象数组
interface Arr{
    name: string
    age: number
    sex: boolean
    [propName:string]:any
}
let ary1:Array<Arr> = [
    {
        name:'阿强',
        age: 16,
        sex: true,
        hobby: [
            '动漫', '做饭', '睡觉', '雕刻', '弹古琴'
        ]
    }
]

// 定义多维数组
let arr2: number[][] = [[1], [2]]
let arr3: Array<Array<number>> = [[1], [2]]

//数组中元素类型不确定
let arr4: any[] = [1, '1', true, {}]
// 知道有哪些类型，使用元组方式,比较麻烦
let arr5: [number, string, boolean, {}] = [1, '1', true, {}]


// 数组在函数中的应用
// 不知道有啥，使用解构方式方式
function unknowArgs(...args: any[]){
    console.log(args)
    // 类数组：就是跟数组差不多的但是没有数组中push，forEach之类的方法
    // 定义的时候ts提供了IArguments来定义它的类型，记不住的话鼠标放到arguments就会出现提示
    console.log(arguments) 
}
unknowArgs(1, 2, 4)


// 大概IArguments原理
interface Iag {
    callee:Function
    length: number
    [index: number]: any
}
function unknowArgs2(...args: any[]){
    console.log(args)
    // 类数组：就是跟数组差不多的但是没有数组中push，forEach之类的方法
    // 定义的时候ts提供了IArguments来定义它的类型，记不住的话鼠标放到arguments就会出现提示
    let iag:IArguments = arguments.callee()
    let iag2:Iag = arguments.callee()
    console.log(arguments) 
}