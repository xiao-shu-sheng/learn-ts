{
    // 枚举类型
    enum Color {
        red,
        green,
        blue
    } 
    console.log(Color.red)
    console.log(Color.green)
    console.log(Color.blue)


    // 增长枚举
    enum Color2 {
        red = 3,
        green,
        blue
    } 
    console.log(Color2.red)
    console.log(Color2.green)
    console.log(Color2.blue)


    // 自定义枚举
    enum Color3 {
        red = 8,
        green = 5,
        blue = 12
    } 
    console.log(Color3.red)
    console.log(Color3.green)
    console.log(Color3.blue)



    // 字符串枚举
    enum Color4 {
        red = "天明",
        green = "月儿",
        blue = "少羽"
    } 
    console.log(Color4.red)
    console.log(Color4.green)
    console.log(Color4.blue)

    // 异构枚举
    enum Color5 {
        yes = 1,
        no = 'no'
    } 
    console.log(Color5.yes)
    console.log(Color5.no)


    // 接口和枚举混用
    interface A3 {
        red: Color5.yes
    }

    let obj: A3 = {
        red: 1
    }

    console.log(obj.red)


    // const枚举
    const enum Type {
        success,
        fail
    }
    let code:number = 0
    if(code === Type.success) {
        console.log("成功")
    }else {
        console.log("失败")
    }


    // 反射，字符串无法反射，数字可以
    enum Type1 {
        success,
        fail
    }
    let success = Type1.success
    console.log(success)
    let key = Type1[success]
    console.log(key)
}