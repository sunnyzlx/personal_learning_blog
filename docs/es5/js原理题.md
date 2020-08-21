# JS原理题

### call,apply,bind 三者的区别:
- 共同点就是修改this指向，不同点就是
- 1.call()和apply()是立刻执行的， 而bind()是返回了一个函数
- 2.call则可以传递多个参数，第一个参数和apply一样，是用来替换的对象，后边是参数列表。
- 3.apply最多只能有两个参数——新this对象和一个数组argArray
### 1. 实现一个call函数
- 思路：将要改变this指向的方法挂到目标this上执行并返回，核心是借助this的隐式绑定
- https://github.com/mqyqingfeng/Blog/issues/11
- call做了什么:
  - 将函数设为对象的属性
  - 执行&删除这个函数
  - 指定this到函数并传入给定参数执行函数
  - 如果不传入参数，默认指向为 window
```
Function.prototype.myCall = function(ctx) {
  if (typeof this !== 'function') {
    throw new TypeError('not function')
  }
  //1.判断有没有传入要绑定的对象，没有默认是window，
  //如果是基本类型的话通过Object()方法进行转换
  ctx = Object(ctx) || window
  let aArgs = Array.prototype.slice.call(arguments, 1)
  /**
    在指向的对象obj上新建一个fn属性，值为this，也就是fn()
    相当于obj变成了
    {
        value: 'foo',
        fn: function fn() {
          console.log(this.value);
        }
    }
  */
  ctx.fn = this
  let result = ctx.fn(...args);
  // 删除该属性
  delete ctx.fn;
  return result;
};

//下面是三种截取除第一个参数之外剩余参数的方法
//const args = [...arguments].slice(1);
//const args = Array.prototype.slice.call(arguments, 1);
//const args = Array.from(arguments).slice(1);
```

### 2. 实现一个apply函数
```
Function.prototype.myApply = function(ctx) {
  ctx = Object(ctx) || window;
  ctx.fn = this;
  let args = Array.prototype.slice(arguments, 1)
  let result;
  if (!args) {
    result = ctx.fn();
  } else {
    result = ctx.fn(...args)
  }
  delete ctx.fn;
  return result;
};
```
### 3、实现一个bind函数
- https://github.com/mqyqingfeng/Blog/issues/12
- https://juejin.im/post/5e17f16f5188254d3f73c7df
- 实现bind要做什么
  - 返回一个函数，绑定this，传递预置参数
  - bind返回的函数可以作为构造函数使用。故作为构造函数时应使得this失效，但是传入的参数依然有效
```
// mdn的实现
if (!Function.prototype.bind) {
  Function.prototype.bind = function(ctx) {
    //判断调用bind的是不是一个函数，不是的话就要抛出错误
    if (typeof this !== 'function') {
      throw new Error('not function')
    }
    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(
            (this instanceof fBound ? this : ctx), 
            aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // 维护原型关系
    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();

    return fBound;
  };
}

let obj = {
  a:1
}
function fn(name, age){
  this.test = '测试数据1' 
  console.log(this.a)
  console.log(name, age)
  return this.test
}
fn.prototype.f = "测试数据2"

let a = fn.myBind(obj, 'xiao')
let b = new a('ming')
b.f = '测试数据3'
console.log(b)
console.log(b.__proto__ === fn.prototype)
console.log(b.__proto__.__proto__ === fn.prototype)
```
### 4、Object.create的基本实现原理
- Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
```
function create(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

function create(obj) {
  return {
    '__proto__': obj
  }
}

function create(obj){
  return Object.setPrototypeOf({}, obj)
}
```
### 5、instanceof的原理
- 思路：右边变量的原型存在于左边变量的原型链上
```
function instance_of(L, R) {
  //L 表示左表达式，R 表示右表达式
  var O = R.prototype; // 取 R 的显示原型
  L = L.__proto__; // 取 L 的隐式原型
  while (true) {
    if (L === null) return false;
    if (O === L)
      // 这里重点：当 O 严格等于 L 时，返回 true
      return true;
    L = L.__proto__;
  }
}
```
### 6、模拟new
- https://juejin.im/post/5bde7c926fb9a049f66b8b52
- new操作符做了这些事：
  - 它创建了一个全新的对象
  - 它会被执行[[Prototype]]（也就是__proto__）链接
  - 它使this指向新创建的对象
  - 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上
  - 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用
```
/**
 * 模拟实现 new 操作符
 * @param  {Function} ctor [构造函数]
 * @return {Object|Function|Regex|Date|Error}      [返回结果]
 */
function newOperator(ctor){
    if(typeof ctor !== 'function'){
      throw 'newOperator function the first param must be a function'
    }
    newOperator.target = ctor // ES6 new.target 是指向构造函数
    // 1.创建一个全新的对象，
    // 2.并且执行[[Prototype]]链接
    // 4.通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
    var newObj = Object.create(ctor.prototype);
    // ES5 arguments转成数组 当然也可以用ES6 [...arguments], Array.from(arguments);
    // 除去ctor构造函数的其余参数
    var argsArr = [].slice.call(arguments, 1);
    // 3.生成的新对象会绑定到函数调用的`this`。
    // 获取到ctor函数返回结果
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    // 小结4 中这些类型中合并起来只有Object和Function两种类型 typeof null 也是'object'所以要不等于null，排除null
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    // 5.如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象。
    return newObj;
}

// 无注释版
function newOperator(ctor){
  if(typeof ctor !== 'function'){
    throw new TypeError('not function')
  }
  newOperator.target = ctor;
  var args = [].slice.call(arguments,1)
  var newObj = Object.create(ctor.prototype)
  var res = ctor.apply(newObj, args)
  if((typeof res === 'object'&& res !== null) || typeof res === 'function'){
    return res
  }
  return newObj;
}

let child1 = newOperator(Child1, 'child', 18)

```
### 7、实现类的继承
- 类的继承在几年前是重点内容，有n种继承方式各有优劣，es6普及后越来越不重要，那么多种写法有点『回字有四样写法』的意思，如果还想深入理解的去看红宝书即可，我们目前只实现一种最理想的继承方式。
- https://juejin.im/post/5c433e216fb9a049c15f841b
- https://juejin.im/post/5c8e409ee51d4534977bc557
```
function Parent(name) {
    this.parent = name
}
Parent.prototype = {
  constructor: Parent, //需要手动绑定constructor属性
  say: function() {
      console.log(`${this.parent}: 你打篮球的样子像kunkun`)
  }
}

function Child(name, parent) {
    // 将父类的构造函数绑定在子类上
    Parent.call(this, parent)
    this.child = name
}

/** 
 1. 这一步不用Child.prototype =Parent.prototype的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
 3. Object.create是创建了父类原型的副本，与父类原型完全隔离
*/
Child.prototype = Object.create(Parent.prototype)

Child.prototype.say = function() {
    console.log(`${this.parent}好，我是练习时长两年半的${this.child}`);
}


Child.prototype.constructor = Child // 注意记得把子类的构造指向子类本身
Object.setPrototypeOf(Child, Parent) //继承父类的静态属性

var parent = new Parent('father');
parent.say() // father: 你打篮球的样子像kunkun

var child = new Child('cxk', 'father');
child.say() // father好，我是练习时长两年半的cxk

```
### 7、实现一个基本的Promise
```
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
class Promise {
  constructor (fn(resolve, reject)) {
    // 三个状态
    this.state = 'pending'
    this.value= undefined
    this.reason = undefined
    let resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }
    let reject = value => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = value
      }
    }
    // 自动执行函数
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // then 方法 有两个参数onFulfilled onRejected
  then(onFulfilled, onRejected) {
    switch (this.state) {
      case 'fulfilled':
        onFulfilled(this.value);
        break
      case 'rejected':
        onRejected(this.reason);
        break
      default:
    }
  }
}
```