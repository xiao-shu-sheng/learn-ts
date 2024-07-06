// 原型链顶端为Object类型,它可以赋值给任意类型,但是不包含null和undefined
let a1:Object = 10;
let a2:Object = 'hello';
let a3:Object = true;
let a4:Object = Symbol(1);
let a5:Object = [];
let a6:Object = {};
let a7:Object = () => {};

let a8:Object = null;
let a9:Object = undefined;


// object不支持原始类型，只支持引用类型，一般用于泛型约束
let b1:object = 10;
let b2:object = 'hello';
let b3:object = true;
let b4:object = Symbol(1);
let b5:object = [];
let b6:object = {};
let b7:object = () => {};


// new Object(),可以赋值给任意类型,但是无法修改,修改后报错
let c1:{} = { numa: 1}; 
c1.age = 12;

