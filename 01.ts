// 配合readme.md学习

let num:number = 10;
console.log(num);

let str:string = 'hello';
console.log(str);

// 将数字转化为字符串
let str2:string = String(num);
console.log(str2);
let str3:string = `${num}`;
console.log(str3);

let b1:boolean = true;
let b2:boolean = false;
console.log(b1, b2);

let n:null = null;
let u:undefined = undefined;
console.log(n, u);

// 严格模式下不能将类型“undefined”分配给类型“null”
n = u;
// 严格模式下不能将类型“null”分配给类型“undefined”
u = n;

let v:void = undefined;
console.log(v);

// 严格模式下不能将类型“null”分配给类型“void”
let v2:void = null;
console.log(v2);

// 有返回值函数返回值为string类
function fn1():string {
  return 'hello';
}

// 无返回值函数
function fn2():void {
}