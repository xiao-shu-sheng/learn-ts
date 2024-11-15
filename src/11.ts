{
    // 元组类型

    let arrtmp:[number, string] = [1, '1']
    arrtmp[0] = 2
    // arrtmp.push(null) // 报错，只能push number或者 string类型
    arrtmp.push(3)

    // 如果不想更改
    const arrtmp2: readonly[number, string] = [1, '1']

    // 起别名、可选
    const arrtmp3: readonly[x: number, y?: string] = [1]

    // 应用场景
    type ExcelRow = [string?, string?, number?]
    let excel:ExcelRow[] = [
        ['大黄'],
        ['天明', '男'],
        ['月儿', '女', 14],
    ]

    // 获取元组元素的类型
    type first = typeof arrtmp[0]
    // 获取元组的长度
    type alen = typeof arrtmp['length']


    type Person = [string, number, Date, boolean]
    type CusPerson =  Partial<Person>

    let student: Array<CusPerson>= [
        ['大黄'],
        ['天明', 14, new Date()],
        ['月儿', 14, new Date(), false],
    ]

    console.log(student[0][0]);
}

