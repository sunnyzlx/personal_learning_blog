# json
- https://wangdoc.com/javascript/stdlib/json.html
### JSON.stringify()
- JSON.stringify方法用于将一个值转为 JSON 字符串
- 对于原始类型的字符串，转换结果会带双引号

- 如果对象的属性是undefined、函数或 XML 对象，该属性会被JSON.stringify过滤
```
var obj = {
  a: undefined,
  b: function () {}
};

JSON.stringify(obj) // "{}"
```
- 如果数组的成员是undefined、函数或 XML 对象，则这些值被转成null
```
var arr = [undefined, function () {}];
JSON.stringify(arr) // "[null,null]"
```
- 正则对象会被转成空对象
```
JSON.stringify(/foo/) // "{}"
```
### JSON.parse()