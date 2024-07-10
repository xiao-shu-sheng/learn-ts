// Set无序不重复的集合 Map字典


let set:Set<number> = new Set([1,2,3,4])
console.log(set)

set.add(8)
console.log(set)
set.has(8)
console.log(set)
set.delete(8)
console.log(set)
set.clear()
console.log(set)



// Map的key可以是引用类型或者原始类型
let objMap = { name: '天明'}
let map:Map<object, any> = new Map()

map.set(objMap, "小明")
map.get(objMap)
map.has(objMap)
map.clear()



// weakmap weakset 弱项 弱引用
let obj1:any = { name: '天明'}  // 1次
let obj2:any = obj1  // 2次
let weakmap: WeakMap<object, any> = new WeakMap()
// weakmap的key只能是引用类型，不能是别的， 不会被计入垃圾回收策略
weakmap.set(obj1, 'xi') // 第二次引用，一旦obj1，obj2被收回，weakmap也会被回收

obj1 = null // 这时候weakmap里的obj1还存在
console.log(weakmap, weakmap.get(obj1))
obj2 = null // 这时候weakmap里的obj1不存在了
console.log(weakmap.get(obj1))


// WeakSet和WeakMap一样