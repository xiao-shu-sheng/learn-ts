// never 表示不应该存在的状态或者无法达到预期的状态

// 例如
type neverType = number & string

function error():never {
    throw new Error("报错了")
}

function loopFn():never {
    while(true) {

    }
}


// 联合类型中never会被忽略
type neverType2 = void | number | never


// 应用场景
type baseType = '吃' | '喝' | '拉' | '撒' | '睡' 
function person(value:baseType) {
    switch(value) {
        case '吃':
            console.log('吃饭')
            break;
        case '喝':
            console.log('喝水')
            break;
        case '拉':
            console.log('拉屎')
            break;
        case '撒':
            console.log('撒尿')
            break;
        case '睡':
            console.log('睡觉')
            break;
        default:
            const error:never = value;
            console.log('完犊子了' + error)
            break;
    }
}
person('吃')
person('喝')
person('拉')
person('撒')
person('睡')