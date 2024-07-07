// 避免全局命名造成的污染
// 命名空间的用法、嵌套、抽离、导出、简化、合并
// namespace 所有的变量以及方法都必须要导出才能访问

namespace Test {
    export let a = 1
    export const add = (a: number, b: number) => a+b
}
console.log(Test.a)
console.log(Test.add(1, 2))

// 合并，名字相同会合并
namespace Test {
    export let b = 2
}
console.log(Test.b)

// 嵌套
namespace Test1 {
    export namespace Test2 {
        export let a = 1
        export const add = (a: number, b: number) => a+b
    }
}
console.log(Test1.Test2.a)
console.log(Test1.Test2.add(1, 2))

// 抽离
export default Test



// 命名空间的应用场景
namespace ios {
    export const pushNotification = (msg: string, type: number) => {

    }
}
namespace android {
    export const pushNotification = (msg: string) => {
        
    }
}


