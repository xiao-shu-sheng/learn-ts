// any 任意类型 unknown 未知类型
// 1.top type类型 顶级类型 any unknown
// 2.Object类型
// 3.Number String Boolean
// 4.number string boolean
// 5.never

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
