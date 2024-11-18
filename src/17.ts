{
    function add<T>(a: T, b: T) {
        //return a + b // 报错原因是因为ts不知道类型参数T是否支持加法操作
    }

    // 泛型约束
    function addLimit<T extends number>(a: T, b: T) {
        return a + b // 报错
    }

    function addLimit2<T extends string>(a: T, b: T) {
        return a + b // 报错
    }

    function addLimit3<T extends number>(a: T, b: T) {
        return (a as number) + (b as number)
    }

    function addLimit4<T extends string>(a: T, b: T) {
        return (a as string) + (b as string)
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

}