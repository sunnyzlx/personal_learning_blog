# array
- 1.扩展运算符
- 2.Array.from(arrayLike, mapFn, thisArg) 
- 3.Array.isArray(obj)
```
if(!Array.isArray){
  Array.isArray=function(arg){
    return Object.prototype.toString.call(arg)==='[object Array]'
  }
}
```
- 4.Array.of()
```
if(!Array.of){

}
```
- 5. 