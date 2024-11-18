{
  // 类型推断|类型别名
  // 鼠标放到变量上就可以看到推断出的类型
  let numAs = 1

  // 报错，推断出类型为number
  numAs = '12'


  // 没有给变量类型，也没有赋值，默认推断为any类型
  let numAs1

  numAs1 = 12
  numAs1 = '12'
  numAs1 = true
  numAs1 = []
  numAs1 = {}


  // 类型别名, 可以定义任何类型
  type s = string | number
  let strAs:s = '121'


  // type不能使用extends来继承，interface可以，type只能用交叉类型
  // type可以使用联合类型，interface不行
  // interface遇到重名的会合并，type遇到重名的报错


  // type高级用法
  // extends在type中是包含的意思，左边的值会作为右边类型的子类型
  type numType = 1 extends number ? 1 : 0
  type numType2 = 1 extends any ? 1 : 0
  type numType3 = 1 extends unknown ? 1 : 0
  type numType4 = 1 extends Object ? 1 : 0
  type numType5 = 1 extends Number ? 1 : 0
  type numType6 = 1 extends never ? 1 : 0

}