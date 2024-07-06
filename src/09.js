// clacs的基本用法：继承和类型约束(implements)
// class 的修饰符 readonly private protected public
// super原理
// 静态方法
// get set方法
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
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 获取子类的传参
    // constructor(name: string) {
    // }
    // 创建节点的方法
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    // 填充文本，private: 私有的只能在自己内部调用不能在继承类中调用
    // 实例化后也不允许调用
    // const dom = new Dom() dom.setText("") 报错
    Dom.prototype.setText = function (el, text) {
        if (text)
            el.textContent = text;
    };
    // 渲染函数, protected受保护的，给自己内部和子类调用的，
    // 实例化后也不允许调用
    // const dom = new Dom() dom.render("") 报错
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            if (data.text) {
                this.setText(root, data.text);
            }
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    };
    return Dom;
}());
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        // 父类的调用
        // 父类的prototype.constructor.call, 可以给父类传参
        // 例如super('name') 
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
        // super.render()  // 可以在这里使用super调用父类方法
    }
    Vue.author = function () {
        return "xx";
    };
    Vue.version = function () {
        // 只能调用statice,不能调用其他方法
        this.author();
        return "1.0.1";
    };
    // public 公开的，哪里都可以用，
    Vue.prototype.init = function () {
        // 虚拟dom，通过js去渲染真实的dom
        var data = {
            tag: 'div',
            children: [
                {
                    tag: 'div',
                    text: '天明',
                    children: [
                        {
                            tag: 'div',
                            text: '墨家巨子',
                            children: [
                                {
                                    tag: 'div',
                                    text: '宝剑墨眉',
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
new Vue({
    el: '#app'
});
console.log(Vue.version());
// get,set
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value + '被我我拦截了';
        },
        set: function (newVal) {
            this._value = newVal + '我设置了';
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var ref = new Ref('导弹');
console.log(ref.value);
ref.value = '机器';
console.log(ref.value);
