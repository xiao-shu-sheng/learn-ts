// 声明文件 declare
// 当我们使用第三方库的时候，我们需要引用它的声明文件，才能获取对应的代码补全、接口提示等功能
// 安装库的声明文件 npm i --save-dev @types/xxx, xxx是你安装的库的名称
// 没有的话需要自己手写, 例如编写express库的声明文件

// 1、在根目录下新建typings文件夹
// 2、在文件夹下新建文件express.d.ts
// 3、文件编写
/** 
declare module 'express' {
    interface Router {
        get(path:string, cb: (req: any, res: any) => void): void
    }
    interface App {
        use(path:string, router: any): void
        listen(port: number, cb?: () => void)
    }
    interface Express {
        (): App
        Router(): Router
    }
    const express: Express

    export default express
}

// 扩充全局变量
declare var expressA: number
// 扩充方法
declare function expressFn(params: any){}
// 扩充类
declare class expressCls{

}
// 其他的也可以随意扩充

*/


/** 
// 引用express, 先安装一下，我懒得装就没有装
import express from 'express'
const app = express()
const router = express.Router()
app.use('/api', router)
router.get('/api', (req: any, res: any) => {
    res.json({
        code:200
    })
})
app.listen(9527, () => {

})
*/