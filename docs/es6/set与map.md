# set与map

### set操作方法
- Set数据结构，类似数组，但成员的值都是唯一，没有重复
- Set.prototype.constructor: 构造函数Set
- Set.prototype.size
- Set.prototype.add(value)
- Set.prototype.delete(value)
- Set.prototype.has(value)
- Set.prototype.clear()

### set遍历方法
- Set.prototype.keys()
- Set.prototype.values()
- Set.prototype.entries()
- Set.prototype.forEach()

### 
- 去除数组的重复成员,   [...new Set(array)]或Array.from(new Set(array))
- 去除字符串里面的重复字符, [...new Set('ababbc')].join('')
- 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
- Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。
- 在 Set 内部，两个NaN是相等的,两个空对象不相等

### map的属性和操作方法
- Map数据结构，类似对象，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
- Map.prototype.size
- Map.prototype.set(key,value)
- Map.prototype.get(key)
- Map.prototype.has(key)
- Map.prototype.delete(key)
- Map.prototype.clear()
### map的遍历方法
- Map.prototype.keys()
- Map.prototype.values()
- Map.prototype.entries()
- Map.prototype.forEach()