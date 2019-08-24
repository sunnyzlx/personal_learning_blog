# js原理题

### 1. 实现一个call函数
```
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this  // 注意：此处必须使用context.fn暂存this,否则，当调用mycall时，第一个参数若没有传递要执行的function时，将不会提示类型错误，且后面需要删除，否则会造成内存垃圾
  let arg = [...arguments].slice(1) //arguments参数转为数组后，arguments[0]为执行上下文context,arguments[1]之后才是要传递的参数
  let result = context.fn(...arg)
  delete context.fn
  return result
} 
```

### 2. 实现一个apply函数
```
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('not funciton')
  }
  context = context || window
  context.fn = this
  let result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```
### 3、实现一个bind函数 ？？？？？
```
// 思路：类似call，但返回的是函数
Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  let _this = this
  let arg = [...arguments].slice(1)
  return function F() {
    // 处理函数使用new的情况
    if (this instanceof F) {
      cosnole.log('new')
      return new _this(...arg, ...arguments)
    } else {
      console.log('unnew')
      return _this.apply(context, arg.concat(...arguments))
    }
  }
}

Function.prototype.mybind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context= context || window
  let _this = this
  let arg = [...arguments].slice(1)
  let fNOP =function(){}
  let fBound = function(){
    return _this.apply(this instanceof fNOP ? this : context, [...arg, ...arguments])
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound;
}
```
### 4、Object.create的基本实现原理
```
// 思路：将传入的对象作为原型
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
```
### 5、instanceof的原理
```
// 思路：右边变量的原型存在于左边变量的原型链上
function instanceOf(left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while (true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}
```
### 6、new本质
```
function myNew (fun) {
  return function () {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
      __proto__ : fun.prototype
    }
    // 执行构造函数
    fun.call(obj, ...arguments)
    // 返回该对象
    return obj
  }
}

function person(name, age) {
  this.name = name
  this.age = age
}
let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}
```
### 7、实现一个基本的Promise
```
// 未添加异步处理等其他边界情况
// ①自动执行函数，②三个状态，③then
class Promise {
  constructor (fn) {
    // 三个状态
    this.state = 'pending'
    this. = undefined
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
  // then
  then(onFulfilled, onRejected) {
    switch (this.state) {
      case 'fulfilled':
        onFulfilled()
        break
      case 'rejected':
        onRejected()
        break
      default:
    }
  }
}
```
### 深拷贝与浅拷贝
   - 浅拷贝是拷贝一层，深层次的对象级别的就拷贝引用
   - 深拷贝是拷贝多层，每一级别的数据都会拷贝出来；

### 8、实现浅拷贝
```
// 1. ...实现
let copy1 = {...{x:1}}

// 2. Object.assign实现

let copy2 = Object.assign({}, {x:1})
```
### 9、实现一个基本的深拷贝
```
// 1. JOSN.stringify()/JSON.parse()
let obj = {a: 1, b: {x: 3}}
JSON.parse(JSON.stringify(obj))
- 优点：简单易用
- 缺点：1. 它会抛弃对象的constructor。也就是深拷贝之后，不管这个对象原来的构造函数是什么，在深拷贝之后都会变成Object
2. 只有可以转成JSON格式的对象才可以这样用，像function没办法转成JSON，RegExp对象是无法通过这种方式深拷贝

// 2. 递归拷贝
function deepClone(obj) {
  if (!obj) return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)
  let copy = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      copy[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return copy
}
- 优点：满足绝大多数需求
- 缺点：函数没有实现深拷贝，循环引用会出错
```