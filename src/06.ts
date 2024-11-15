// 函数扩展
// 函数定义和返回值 | 箭头函数定义类型和返回值
// 函数的默认参数 | 函数的可选参数
// 参数对象如何定义
// 函数this类型
// 函数的重载

// fn xx(a:T, b: T): T,括号中a:后面的T是用来定义a的类型的b也是这样的
// ():后面的T是用来定义返回值的类型的，根据自己的需要可以定义成任意的
function add(a: number, b:number):number {
    return a+b
}

console.log(add(1, 2))

// 箭头函数
const add2 = (a: number, b: number): number => {
    return a+b
}
console.log(add2(1, 2))


// 函数的默认值和可选参数, a,b默认为10，c是可选的，就是可以传也可以不传
// 默认值和可选参数不能同时使用，同时使用无法计算，报错NaN
function add3(a: number = 10, b:number = 11, c?: number):number {
    if(c) {
        return a + b + c
    }
    return a+b
}

console.log(add3(1, 2, undefined))
console.log(add3(1, 2, 1))
// console.log(add3(1, 2, null)) // 报错
console.log(add3(1, 2))



// 参数为对象时，可使用interface来定义
interface User {
    name: string
    age: number
    sex: boolean
}

function person(user: User):User {
    console.log(user.name+"是个"+( user.sex ? '男': '女')+ "的，今年"+ user.age+'岁')
    return user
}

person({name:'天明', age: 14, sex: true})


// 如何在函数中定义this的类型
interface Custommer {
    user: number[]
    // 定义this的类型和传入参数num的类型,传参的时候忽略掉this就行
    add: (this: Custommer, num: number)=>void //无返回值
}
// ts中可以定义this的类型，js中不行
// 必须是函数的第一个参数来定义this的类型
let custommer:Custommer = {
    user: [1,2,3],
    add(this:Custommer, num: number) {
        this.user.push(num)
    }
}
custommer.add(4)
console.log(custommer.user)


// 函数的重置
let user2: number[] = [1, 2, 3]

//函数的重载，它没有实体的, 只是定义, 实现上用的是静态类型检查
function findNum(id: number): number[] //如果传入了id就是单个查询
function findNum(): number[] //如果没有传入id就是查询全部
function findNum(add: number[]): number[] //如果传入了数组就做添加

// 函数的实现
function findNum(ids?: number | number[]): number[]{
    if(typeof ids === 'number'){
        return user2.filter( i => i === ids)
    } else if(Array.isArray(ids)) {
         user2.push(...ids)
         return user2
    } else {
        return user2;
    }
}

console.log(findNum())
console.log(findNum(1))
console.log(findNum([7, 8, 9]))