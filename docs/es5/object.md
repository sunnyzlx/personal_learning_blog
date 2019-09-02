# object

## 概述
- JavaScript 的所有其他对象都继承自Object对象，即那些对象都是Object的实例。（注意O大写）
- Object对象的原生方法分成两类：Object本身的方法与Object的实例方法。
- 所谓“本身的方法”就是直接定义在Object对象的方法。
- 所谓实例方法就是定义在Object原型对象Object.prototype上的方法。它可以被Object实例直接使用。
- 以下先介绍Object作为函数的用法，然后再介绍Object对象的原生方法，分成对象自身的方法（又称为“静态方法”）和实例方法两部分。

## Object()
- Object()可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
  - 写一个判断变量是否为对象的函数
  ```
  function isObject(value){
      return value === Object(value)
  }
  isObject([]) // true
  isObject(true) // false
  ```
- Object()当作构造函数使用，即前面可以使用new命令。Object构造函数的首要用途，是直接通过它来生成新对象
- Object构造函数的用法与工具方法很相似,但是Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value

## Object 的静态方法
- 所谓“静态方法”，是指部署在Object对象自身的方法
- Object.keys(), 遍历对象的属性, 参数是一个对象，返回一个数组, 该数组的成员都是该对象自身的（而不是继承的）所有属性名(只返回可枚举的属性, 数组都有不可枚举属性length)
- 由于 JavaScript 没有提供计算对象属性个数的方法，所以可以用这个方法代替
```
let obj = {
    p1: 123,
    p2: 456
}
Object.keys(obj).length //2
```
- Object.create()：该方法可以指定原型对象和属性，返回一个新的对象
- Object.getPrototypeOf()：获取对象的Prototype对象

## Object 的实例方法
- 除了静态方法，还有不少方法定义在Object.prototype对象。它们称为实例方法，所有Object的实例对象都继承了这些方法
- Object.prototype.valueOf()：返回当前对象对应的值。JavaScript 自动类型转换时会默认调用这个方法
- Object.prototype.toString()：返回当前对象对应的字符串形式。
  - 默认情况下返回类型字符串
  - toString() 的应用：判断数据类型 ：Object.prototype.toString.call(value) , Object.prototype.toString.call(arr).slice(8, -1)
  ```
  不同数据类型的Object.prototype.toString方法返回值如下。

    数值：返回[object Number]。
    字符串：返回[object String]。
    布尔值：返回[object Boolean]。
    undefined：返回[object Undefined]。
    null：返回[object Null]。
    数组：返回[object Array]。
    arguments 对象：返回[object Arguments]。
    函数：返回[object Function]。
    Error 对象：返回[object Error]。
    Date 对象：返回[object Date]。
    RegExp 对象：返回[object RegExp]。
    其他对象：返回[object Object]。
  ```
- Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性
```
let obj = {
    p: 123
}
obj.hasOwnProperty('p') //true
```
