// 基类
// abstract 所定义的抽象类
// abstract 所定义的方法 都只能描述不能进行实现
// abstract类无法被实例化
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vue1 = /** @class */ (function () {
    function Vue1(name) {
        this.name = name;
    }
    Vue1.prototype.getName = function () {
        return this.name;
    };
    Vue1.prototype.curse = function () {
        console.log(this.name + '爸爸不爱你了，你切了吧');
    };
    return Vue1;
}());
// abstract类需要一个派生类来继承它
var React = /** @class */ (function (_super) {
    __extends(React, _super);
    // 需要实现Vue1中抽象方法
    function React(name) {
        return _super.call(this, name) || this;
    }
    React.prototype.init = function (name) {
        console.log(name);
    };
    React.prototype.setName = function (name) {
        this.name = name;
    };
    return React;
}(Vue1));
var react = new React('天明');
console.log(react.getName());
react.setName("小天明");
console.log(react.name);
react.curse();
