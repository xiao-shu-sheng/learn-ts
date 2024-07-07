// 使用方式 如果是默认导出，名字随便起

// 默认导出1
// import test from './19'
// console.log(test)  

//  默认导出一个对象
// import test from './19'
// console.log(test.a) 


// 分别导出
// import {a, b} from './19'
// console.log(a)
// console.log(b)



// 默认导出加分别导出
// import test, {a, b} from './19'
// console.log(test.c) 
// console.log(a) 
// console.log(b) 


// 解构导出
// import {a, b, c} from './19'
// console.log(a)
// console.log(b)
// console.log(c())


// 导出如果出现重名，可以使用别买那个
// import{a, b as b1, c} from './19'
// console.log(a)
// console.log(b1)
// console.log(c())


// 我不知道里面有啥的时候
// import * as test from './19'
// console.log(test)
// console.log(test.a)
// console.log(test.b)
// console.log(test.c())



// 需要动态引入的时候
if(true) {
    import('./19').then(res => {
        console.log(res)
    })
}