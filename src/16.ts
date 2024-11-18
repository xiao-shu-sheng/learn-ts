import { resolve } from "path"
{   
    // 动态类型

    function fn2(a: number, b: string):(string | number)[] {
        return [a, b]
    }
    function fn3(a: number, b: string):Array<string | number> {
        return [a, b]
    }

    function fn4<T, K>(a: T, b: K):Array<T | K> {
        return [a, b]
    }
    fn4(1, true)
    fn4(1, "true")



    type A<T> = string | number | T
    let aType: A<string> = "天明"
    let aType2: A<number> = 2
    let aType3: A<boolean> = true
    let aType4: A<null> = null


    interface Data<T> {
        msg: T
    }
    let msg:Data<string> = {
        msg: "墨家没了"
    }

    const axios = {
        get<T>(url: string):Promise<T> {
            return new Promise((resolve, reject) => {
                let xhr:XMLHttpRequest = new XMLHttpRequest()
                xhr.open('GET', url) // 发起请求
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4 && xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText))
                    }
                }
                xhr.send(null)
            })
        }
    }


    interface AxiosData {
        message: string
        code: number
    }

    // node环境下不能运行的，使用tsc --watch 16.ts生成js文件
    // 在html文件中引入
    axios.get<AxiosData>('../src/./data.json').then(res => {
        console.log(res.code)
    })
}
