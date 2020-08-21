# JS高频手写题
### 1. 浅克隆
- 浅克隆之所以被称为浅克隆，是因为对象只会被克隆最外部的一层,至于更深层的对象,则依然是通过引用指向同一块堆内存.
```
function shallowClone(o){
  const obj = {}
  for(let i in o){
    obj[i] = o[i]
  }
  return obj;
}
var newObj = Object.assign(target, source)
slice,concat
```
### 2.深克隆(deepClone)
- 简单版
- JSON对象parse方法可以将JSON字符串反序列化成JS对象，stringify方法可以将JS对象序列化成JSON字符串,这两个方法结合起来就能产生一个便捷的深克隆.
```
const newObj = JSON.parse(JSON.stringify(oldObj));
```
- 局限性:
  - 1. 他无法实现对函数 、RegExp等特殊对象的克隆
  - 2. 会抛弃对象的constructor,所有的构造函数会指向Object 
  - 3. 对象有循环引用,会报错
  - 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
```
/ 构造函数
function person(pname) {
  this.name = pname;
}

const Messi = new person('Messi');

// 函数
function say() {
  console.log('hi');
};

const oldObj = {
  a: say,
  b: new Array(1),
  c: new RegExp('ab+c', 'i'),
  d: Messi
};

const newObj = JSON.parse(JSON.stringify(oldObj));

// 无法复制函数
console.log(newObj.a, oldObj.a); // undefined [Function: say]
// 稀疏数组复制错误
console.log(newObj.b[0], oldObj.b[0]); // null undefined
// 无法复制正则对象
console.log(newObj.c, oldObj.c); // {} /ab+c/i
// 构造函数指向错误
console.log(newObj.d.constructor, oldObj.d.constructor); // [Function: Object] [Function: person]
```
```
const oldObj = {};

oldObj.a = oldObj;

const newObj = JSON.parse(JSON.stringify(oldObj));
console.log(newObj.a, oldObj.a); // TypeError: Converting circular structure to JSON
// 对象的循环引用会抛出错误
```
- 面试版
```
/**
* deep clone
* @param {[type]} parent object 需要进行克隆的对象 * @return {[type]} 深克隆后的对象
*/
const clone = (parent) => {
  //判断类型
  const isType = (obj, type) => {
    if(typeof obj !== 'object') return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch(type){
      case 'Array':
        flag = typeString === '[object Array]';
        break;
      case 'Date':
        flag = typeString === '[object Date]';
        break;
      case 'RegExp':
        flag = typeString === '[object RegExp]';
        break;
      default:
        flag = false;
    }
    return flag;
  }
  // 处理正则
  const getRegExp = (re) => {
    var flags = "";
    if (re.global) flags += "g";
    if (re.ignoreCase) flags += "i"; if (re.multiline) flags += "m"; return flags;
  }
  // 维护储存循环引用的数组
  const parents = [];
  const children = [];

  const _clone = parent => {
    if(parent === null) return null;
    if(typeof parent !== 'object') return parent;

    let child, proto;

    if(isType(parent, 'Array')){
      // 对数组做特殊处理
      child = []
    }else if(isType(parent, 'RegExp')){
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent));
    }else if(isType(parent, 'Date')){
      // 对Date对象做特殊处理
      child = new Date(parent.getTime());
    }else{
      // 处理对象原型
      proto = Object.getPrototypeOf(parent); 
      // 利用Object.create切断原型链
      child = Object.create(proto);

    }
    // 处理循环引用
    const index = parents.indexOf(parent);
    if (index != -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象 
      return children[index];
    } 

    parents.push(parent); 
    children.push(child);

    for (let i in parent) { 
      // 递归
      child[i] = _clone(parent[i]); 
    }
    return child;
  }
  return _clone(parent);
}


clone({
  a: 'aaa',
  b: ['1','2','3'],
  c: {
    d: '111'
  },
  e: function(){
    return '555'
  }
})

let obj2 = {
  // a: undefined,
  // b: function(){},
  // c: /ab/i,
  // d: [undefined],
  // e: p,
  a: new Number(1),
  b: new Boolean(false),
  c: new String(1),
  // a: new Set([1, 2, 3, 4, 4]),
  // b: new Map({p: 'Hello World'}),
  // c: Promise.resolve(1)
}
//重写
let deepClone = (parent) => {
  //维护两个循环引用的数组
  const parents = []
  const children = []
  let initChild = (parent) => {
    let child, proto;
    let oType = Object.prototype.toString.call(parent).slice(8,-1).toLowerCase()
    switch(oType){
      case 'array':
        child = []
        break
      case 'regexp':
        child = new RegExp(parent.source, parent.flags)
        break
      case 'date':
        child = new Date(parent.getTime())
        break
      case 'object':
        proto = Object.getPrototypeOf(parent)
        child = Object.create(proto)
        break
      default:
        child = parent
    }
    return child;
  }
  let _clone = (parent) => {
    if(parent === null) return null
    if(typeof parent !== 'object') return parent

    let child = initChild(parent)
    
    //处理循环引用的问题
    let index = parents.indexOf(parent)
    if(index!==-1){
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for(let i in parent){
      child[i] = _clone(parent[i])
    }
    return child
  }
  return _clone(parent)
}
```
- 局限性:
  - 1. 一些特殊情况没有处理: 例如Buffer对象、Promise、Set、Map
  - 2. 另外对于确保没有循环引用的对象，我们可以省去对循环引用的特殊处理，因为这很消耗时间
  - 在生产环境中最好用lodash的深克隆实现.

### 2.实现防抖函数
- 防抖函数原理:在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

```
// 防抖函数
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
```
- 适用场景：
  - 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
  - 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似
  - 生产环境请用lodash.debounce
### 3.实现节流函数（throttle）
- 防抖函数原理:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效
```
// 节流函数
const throttle = (fn, delay = 500) => {
  let flag = true;
  return (...args) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};
```
- 适用场景：
  - 拖拽场景：固定时间内只执行一次，防止超高频次触发位置变动
  - 缩放场景：监控浏览器resize
  - 动画场景：避免短时间内多次触发动画引起性能问题
### 4.实现Event(event bus)
- event bus既是node中各个模块的基石，又是前端组件通信的依赖手段之一，同时涉及了订阅-发布设计模式，是非常重要的基础
-  简单版
```
class EventEmitter {
  constructor() {
    this._events = this._events || new Map(); // 储存事件/回调键值对
    this._maxListeners = this._maxListeners || 10; // 设立监听上限
  }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function(type, ...args) {
  let handler;
  // 从储存事件键值对的this._events中获取对应事件回调函数
  handler = this._events.get(type);
  if (args.length > 0) {
    handler.apply(this, args);
  } else {
    handler.call(this);
  }
  return true;
};

// 监听名为type的事件
EventEmitter.prototype.addListener = function(type, fn) {
  // 将type事件以及对应的fn函数放入this._events中储存
  if (!this._events.get(type)) {
    this._events.set(type, fn);
  }
};
```
- 面试版：
```
class EventEmitter {
  constructor() {
    this._events = this._events || new Map(); // 储存事件/回调键值对
    this._maxListeners = this._maxListeners || 10; // 设立监听上限
  }
}

// 触发名为type的事件
EventEmitter.prototype.emit = function(type, ...args) {
  let handler;
  handler = this._events.get(type);
  if (Array.isArray(handler)) {
    // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
    for (let i = 0; i < handler.length; i++) {
      if (args.length > 0) {
        handler[i].apply(this, args);
      } else {
        handler[i].call(this);
      }
    }
  } else {
    // 单个函数的情况我们直接触发即可
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
  }

  return true;
};

// 监听名为type的事件
EventEmitter.prototype.addListener = function(type, fn) {
  const handler = this._events.get(type); // 获取对应事件名称的函数清单
  if (!handler) {
    this._events.set(type, fn);
  } else if (handler && typeof handler === "function") {
    // 如果handler是函数说明只有一个监听者
    this._events.set(type, [handler, fn]); // 多个监听者我们需要用数组储存
  } else {
    handler.push(fn); // 已经有多个监听者,那么直接往数组里push函数即可
  }
};

EventEmitter.prototype.removeListener = function(type, fn) {
  const handler = this._events.get(type); // 获取对应事件名称的函数清单

  // 如果是函数,说明只被监听了一次
  if (handler && typeof handler === "function") {
    this._events.delete(type, fn);
  } else {
    let position;
    // 如果handler是数组,说明被监听多次要找到对应的函数
    for (let i = 0; i < handler.length; i++) {
      if (handler[i] === fn) {
        position = i;
      } else {
        position = -1;
      }
    }
    // 如果找到匹配的函数,从数组中清除
    if (position !== -1) {
      // 找到数组对应的位置,直接清除此回调
      handler.splice(position, 1);
      // 如果清除后只有一个函数,那么取消数组,以函数形式保存
      if (handler.length === 1) {
        this._events.set(type, handler[0]);
      }
    } else {
      return this;
    }
  }
};
```
### 5.实现JSON.parse
```
var json = '{"name":"cxk", "age":25}';
var obj = eval("(" + json + ")");
```
- 此方法属于黑魔法，极易容易被xss攻击，还有一种new Function大同小异。