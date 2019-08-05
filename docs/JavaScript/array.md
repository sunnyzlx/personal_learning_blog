# array相关小题

## 如何判断数组类型？
  1. arr instanceof Array,  返回true,则为数组类型
  2. Array.isArray([]) //true
  3. Object.prototype.toString.call(arr).slice(8, -1)
  4. - console.log([].constructor == Array);  //true
     - console.log({}.constructor == Object);  //true
     - console.log("string".constructor == String); //true
     - console.log((123).constructor == Number);  //true
     - console.log(true.constructor == Boolean);  //true

## 如何将类数组转化为数组？
  1. 
