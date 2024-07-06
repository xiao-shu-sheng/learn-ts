// 基类
// abstract 所定义的抽象类
// abstract 所定义的方法 都只能描述不能进行实现
// abstract类无法被实例化

abstract class Vue1 {
    name: string
    constructor(name:string) {
        this.name = name;
    }
    getName() {
        return this.name
    }
    abstract init(name: string): void
}

// abstract类需要一个派生类来继承它
class React extends Vue1 {
    // 需要实现Vue1中抽象方法
    constructor(name: string) {
        super(name)
    }
    init(name: string): void {
        console.log(name)
    }
    setName(name: string) {
        this.name = name
    }
}

const react = new React('天明')
console.log(react.getName())
react.setName("小天明")
console.log(react.name)