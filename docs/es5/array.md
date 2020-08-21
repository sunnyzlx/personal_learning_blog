# array

## 构造函数
- Array是 JavaScript 的原生对象，同时也是一个构造函数，可以用它生成新的数组。


## 静态方法
- https://www.cnblogs.com/randomlee/p/10619294.html
- Array.isArray()
- 判断参数是否为数组，返回布尔值，可弥补typeof运算符的不足

```
let arr = [1, 2, 3]
typeof arr //object
Array.isArray(arr) //true
```
## 实例方法
- 两个对象的通用方法：
valueOf() 表示对该对象求值, 数组的valueOf方法返回数组本身; toString(), 数组的toString方法返回数组的字符串形式。

|   API    |         功能          |       返回值        |     有无副作用      |
| -------- | -------------------- | ------------------ | ------------------ |
| push     | 末尾添加，一个或多个     | 返回新数组长度       | 改变原数组           |
| pop      | 末尾删除，最后一个      | 返回删除元素         |  改变原数组          |
| shift    | 头部删除，第一个        | 返回删除元素         |  改变原数组         |
| unshift  | 头部添加，一个或多个     | 返回新数组长度       | 改变原数组           |
| reverse  | 颠倒排列数组元素        | 返回改变后的数组      |  改变原数组          |
| sort     | 对数组成员排序，默认按字典顺序  | 返回修改后数组  |  改变原数组         |
| splice   | 从数组中删除或添加项目  | 返回被删除元素（如果有删除的话）  |  改变原数组 |

  > arr.splice(start, count, addElement1, addElement2, ...);

  > 参数依次为：删除的起始位置（从0开始），被删除的元素个数，要被插入数组的新元素
  
  > 若单纯地插入元素，splice方法的第二个参数可以设为0
  
  > 若只提供第一个参数，等同于将原数组在指定位置拆分成两个数组。
  
```
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```
- 会改变原数组的共7个

- join 用指定分隔符，将所有数组成员连接成一个字符串返回， 不改变原数组
- concat 将新数组的成员，添加到原数组成员的后部，  返回新数组， 不改变原数组
- slice 提取目标数组的一部分， 返回提取的新数组，  不改变原数组
  > 首必须，尾可选，含首不含尾，

  > 省略第二个参数，返回到原数组的最后一个成员
  
  > 若没有参数，则返回原数组的一个拷贝
  
  > 若第一个参数大于等于数组长度，或者第二个参数小于第一个参数，则返回空数组。
  
  > 将类似数组的对象转为真正的数组
  
```
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']
```
- map 将数组成员依次传入参数函数，将每一次的执行结果作为一个新数组返回，不改变原数组
  > map方法接受一个函数作为参数。该函数调用时，map方法向它传入三个参数：当前成员、当前位置和数组本身。

  > 第二个参数，用来绑定回调函数内部的this变量
 
  > map方法不会跳过undefined和null，但是会跳过空位
- forEach 与map方法很相似，也是对数组的所有成员依次执行参数函数，不改变原数组
  > forEach方法不返回值，只用来操作数据。这就是说，如果数组遍历的目的是为了得到返回值，那么使用map方法，否则使用forEach方法。
 
  >第一个参数是一个函数，该函数同样接受三个参数：当前值、当前位置、整个数组。
  
  >第二个参数，绑定参数函数的this变量
  
  >forEach方法不会跳过undefined和null，但会跳过空位
  
 - filter 过滤数组成员，满足条件的成员组成一个新数组返回, 不会改变原数组，返回结果为true的成员组成一个新数组返回。
   > 第一个参数是函数，参数函数可以接受三个参数：当前成员，当前位置和整个数组

   > 第二个参数，用来绑定参数函数内部的this变量
   
 - some()，every() “断言”（assert），返回一个布尔值，表示判断数组成员是否符合某种条件。
   > some方法是只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false。

   >every方法是所有成员的返回值都是true，整个every方法才返回true，否则返回false。
   
   >参数函数及用来绑定参数函数内部的this变量
   
- concat，slice可变相实现数组复制 
- map，forEach，filter，some，every都是遍历数组的方式，均不会改变原数组
- reduce()，reduceRight() 依次处理数组的每个成员，最终累计为一个值 
- indexOf() 返回给定元素在数组中第一次出现的位置，若没有则返回-1, 第二个参数，表示搜索的开始位置

```
['a', 'b', 'c'].indexOf('a', 1) // -1
```
- lastIndexOf方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1。

## 如何判断数组类型？
  1. arr instanceof Array,  返回true,则为数组类型
  2. Array.isArray([]) //true
  3. Object.prototype.toString.call(arr).slice(8, -1)
  4. - console.log([].constructor == Array);  //true
     - console.log({}.constructor == Object);  //true
     - console.log("string".constructor == String); //true
     - console.log((123).constructor == Number);  //true
     - console.log(true.constructor == Boolean);  //true

## es6新增的方法
- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
- 数组实例的方法（6个）
  - copyWithin(target, start, end),复制数组的一部分到另一部分
  - find()和findIndex(),找到符合条件的第一个数组成员，不同是，find()返回该成员，findIndex()返回该成员的索引
  - indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到
  - fill(value, start, end),用给定值，填充数组
  - entries()，keys() 和 values() 用于遍历数组
  - includes(),检测数组是否包含某个给定值，
  - indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判
  - Map 结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
Set 结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)
  - flat()，flatMap() 