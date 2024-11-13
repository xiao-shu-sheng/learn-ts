// any 任意类型 unknown 未知类型
// 1.top type类型 顶级类型 any unknown
// 2.Object类型
// 3.Number String Boolean
// 4.number string boolean
// 5.never

/**
 * 基本类型
 * Number; String; Boolean; Null; Undefined; Symbol; BigInt
 * 对象类型 Object; Array; Map/Set/WeakMap/WeakSet
 * 枚举类型 Enum
 * 函数类型 Function; Function（普通函数类型; 匿名函数和箭头函数类型
 * 高级类型
 * Union（联合类型，如 number | string）
 * Intersection（交叉类型，如 A & B）
 * Tuple（元组类型）
 * Type Alias（类型别名，用 type 定义）
 * Interface（接口类型，用 interface 定义）
 * Class（类类型）
 * Type Guard（类型守卫，用于缩小类型范围的逻辑）
 * Literal（字面量类型）
 * 特殊类型
 * Any(任意类型) Unknown(未知类型) Never(永远不存在的类型) Void（没有任何返回值）
 * 工具类型
 * Partial<T> / Required<T> / Readonly<T> 等常见工具类型
 */


let a:any = 10; // 任意类型ts不校验,可以赋值任意类型
a = 'hello';
a = 1;
a = false;
a = Symbol(1);



let b:unknown = 10;
b = 'hello';
b = 1;
b = false;
b = Symbol(1);
b = null;
b = undefined;
b = new Date();
b = function(){};

// unknown 只能赋值给自身或者any
// unknown 没有办法读取任何属性，方法也不能调用
// unknown 比any更安全
let c:unknown = 1
let d:unknown = {a: 1, fn: ()=>1};
// 报错，d的类型未知
console.log(d.a, d.fn());

// any可以
let ad:any = {a: 1, fn: ()=>1};

console.log(ad.a, ad.fn());
