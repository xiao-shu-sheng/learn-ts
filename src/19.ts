// 默认导出 导出的内容可以是任何类型,一个模块只能出现一个默认导出
// export default 1


// 常用的是导出一个对象
// export default {
//     a: 1
// }


// 分别导出
// export let a = 2
// export let b = 3



// 默认导出加分别导出
// export default {
//     c: 1
// }
// export let a = 2
// export let b = 3


// 解构导出
const a = 1
const b = { name:"天明"}
const c = () =>{ return '我无敌，你们随意'}
export {
    a,
    b,
    c
}
