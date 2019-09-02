# boolean

## 包装对象
- 对象是 JavaScript 语言最主要的数据类型，三种原始类型的值——数值、字符串、布尔值——在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”（wrapper）。
- 所谓“包装对象”，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。
- 包装对象的设计目的，首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。
- Number、String和Boolean这三个原生对象，如果不作为构造函数调用（即调用时不加new），而是作为普通函数调用，常常用于将任意类型的值转为数值、字符串和布尔值。即， 总结一下，这三个对象作为构造函数使用（带有new）时，可以将原始类型的值转为对象；作为普通函数使用时（不带有new），可以将任意类型的值，转为原始类型的值。

## 构造函数
- Boolean对象是 JavaScript 的三个包装对象之一。作为构造函数，它主要用于生成值为布尔值的对象
```
var b = new Boolean(true);

typeof b // "object"
b.valueOf() // true
// 变量b是一个Boolean对象的实例，它的类型是对象，值为布尔值true。

if (new Boolean(false)) {
  console.log('true');
} // true

if (new Boolean(false).valueOf()) {
  console.log('true');
} // 无输出
```
- 第一个例子之所以得到true，是因为false对应的包装对象实例是一个对象，进行逻辑运算时，被自动转化成布尔值true（因为所有对象对应的布尔值都是true）。而实例的valueOf方法，则返回实例对应的原始值，本例为false


## Boolean 函数的类型转换作用 
- Boolean对象除了可以作为构造函数，还可以作为工具方法单独使用，将任意值转为布尔值
```
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false
Boolean(false) //false
Boolean(true) // true

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true  对象，进行逻辑运算时，被自动转化成布尔值true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```
- 使用双重的否运算符（!）也可以将任意值转为对应的布尔值
```
!!undefined // false
!!null // false
!!0 // false
!!'' // false
!!NaN // false

!!1 // true
!!'false' // true
!![] // true
!!{} // true
!!function(){} // true
!!/foo/ // true
```
- 对于一些特殊值，Boolean对象前面加不加new，会得到完全相反的结果，必须小心
```
// 加new转为对象，不加new转为原始值
if (Boolean(false)) {
  console.log('true');
} // 无输出

if (new Boolean(false)) {
  console.log('true');
} // true

if (Boolean(null)) {
  console.log('true');
} // 无输出

if (new Boolean(null)) {
  console.log('true');
} // true
```
