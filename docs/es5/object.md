# object

- for...in 返回所有的可遍历属性，继承的➕自身的，
- JavaScript 的早期版本，for...in循环是基于in运算符的。我们知道，in运算符不管某个属性是对象自身的还是继承的，都会返回true
- toString不是obj对象自身的属性，但是in运算符也返回true，这导致了toString属性也会被for...in循环遍历。
- 这显然不太合理，后来就引入了“可遍历性”这个概念。只有可遍历的属性，才会被for...in循环遍历，同时还规定toString这一类实例对象继承的原生属性，都是不可遍历的，这样就保证了for...in循环的可用性
- 如果一个属性的enumerable为false，下面三个操作不会取到该属性。
  - for..in循环
  - Object.keys方法
  - JSON.stringify方法

## Object 的静态方法

- Object.keys(), 返回该对象自身可枚举的属性, 故数组的不可枚举属性length无法取到
- Object.getOwnPropertyNames(), 返回自身的所有属性，包括不可枚举属性，故数组的不可枚举属性length可以取到
- Object.getOwnPropertySymbols(),返回自身所有的Symbol属性

- Object.create()：该方法可以指定原型对象和属性，返回一个新的对象
- Object.getPrototypeOf()：获取对象的Prototype对象

- Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
- Object.defineProperty()：通过描述对象，定义某个属性。
- Object.defineProperties(): 通过描述对象，定义多个属性

## Object 的实例方法
- Object.prototype.valueOf()：返回当前对象对应的值。
- Object.prototype.toString()：返回当前对象对应的类型字符串。
- 数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法
  - [1, 2, 3].toString() // "1,2,3"
  - '123'.toString() // "123"
  - (function () {
      return 123;
    }).toString()
    // "function () {
    //   return 123;
    // }"
  - (new Date()).toString()  // "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
- toString() 的应用：判断数据类型
```
let type = o => {
  return Object.prototype.toString.call(o).slice(8,-1)
}
['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(t=>{
  type['is'+t] = function(o){
    return type(o) === t
  }
})
console.log(type.isNumber(123))
```

- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
- Object.prototype.isPrototypeOf():判断当前对象是否为另一个对象的原型
- Object.prototype.propertyIsEnumerable():判断某个属性是否可枚举

## 对象的可枚举属性
- Object.keys(),返回对象自身的所有可枚举属性
- Object.values(),返回对象自身的所有可枚举属性值
- for...in ,循环遍历对象的可枚举属性，包括原型链上的可枚举属性，可使用hasOwnProperty()剔除掉原型链上的可枚举属性
- 只有Object.getOwnPropertyNames(),包含不可枚举属性
- 规定toString这一类实例对象继承的原生属性，都是不可遍历的
- for...in循环包括继承的属性，Object.keys方法不包括继承的属性。如果需要获取对象自身的所有属性，不管是否可遍历，可以使用Object.getOwnPropertyNames方法
- 引入“可枚举”（enumerable）这个概念的最初目的，就是让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。比如，对象原型的toString方法，以及数组的length属性，就通过“可枚举性”，从而避免被for...in遍历到


## 属性描述对象
- 属性描述对象提供6个元属性
- value是该属性的属性值，默认为undefined
- writable表示属性值（value）是否可写，默认为true
- enumerable是一个布尔值，表示该属性是否可遍历，默认为true
- configurable是一个布尔值，表示可配置性，默认为true，如果设为false，将阻止某些操作改写该属性，比如无法删除该属性
- get是一个函数，表示该属性的取值函数（getter），默认为undefined
- set是一个函数，表示该属性的存值函数（setter），默认为undefined

## 
- 1.属性是否存在：in运算符，它不能识别哪些属性是对象自身的，哪些属性是继承的，需要结合对象的hasOwnProperty方法判断一下，是否为对象自身的属性
- 2.属性的遍历：for...in 循环，
  - 它遍历的是对象所有可遍历（enumerable）的属性，会跳过不可遍历的属性。
  - 它不仅遍历对象自身的属性，还遍历继承的属性

## es6
- ES6 允许字面量定义对象时，用表达式作为对象的属性名，即把表达式放在方括号内

## es6对象的新增方法
- Object.is()
- Object.assign()
- Object.getOwnPropertyDescriptors()
- __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
- Object.keys()，Object.values()，Object.entries()
- Object.fromEntries()
```
Object.defineProperty(Object, 'is', {
  value: function(x,y){
    if(x===y){
       // 针对+0 不等于 -0的情况
      return x!==0||1/x===1/y
    }
    //针对NaN
    return x!==x && y!==y
  },
  configurable: true,
  enumerable: false,
  writable: true
})
function getOwnPropertyDescriptors(obj){
  let ret = {}
  for(let key of Object.keys(obj)){
    ret[key] = Object.getOwnPropertyDescriptor(obj, key)
  }
  return ret
}
const shallowClone = obj => Object.create(Object.getPrototypeOf(obj),
Object.getOwnPropertyDescriptors(obj))
```