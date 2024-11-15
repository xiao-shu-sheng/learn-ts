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
    curse() {
        console.log( this.name + '，爸爸不爱你了，你切了吧')
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
react.setName('小老弟')
react.curse()


interface Person {
    name: string
    age: number
    [propName: string]: any
}

interface PersonCls {
   person: Person
   init(person: Person): void
}

class WhitePerson implements WhitePerson {
    name: string
    age: number
    skinColor: string
    hairColor: string
  
    constructor(name: string, age: number, skinColor: string, hairColor: string) {
      this.name = name
      this.age = age
      this.skinColor = skinColor
      this.hairColor = hairColor
    }
  }


class PersonCls extends WhitePerson implements PersonCls {
    private _person: Person

    constructor(person: Person) {
        super(person.name, person.age, 'white', 'black')
        this._person = person
    }
  
    init(person: Person): void {
        this._person = person
    }
    get personName(): string {
        return this._person.name
    }
    set personName(name: string) {
        this._person.name = name
    }
    get personAge(): number {
        return this._person.age
    }
    set personAge(age: number) {
        this._person.age = age
    }
}

const person = new PersonCls({name: '天明', age: 14})
person.personName = '小天明'
console.log(person.personName)