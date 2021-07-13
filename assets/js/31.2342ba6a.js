(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{387:function(t,e,a){"use strict";a.r(e);var r=a(44),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[t._v("#")]),t._v(" 数据类型转换")]),t._v(" "),a("ul",[a("li",[t._v("https://juejin.im/post/6844903694039777288")])]),t._v(" "),a("h2",{attrs:{id:"object-prototype-valueof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-valueof"}},[t._v("#")]),t._v(" Object.prototype.valueOf()")]),t._v(" "),a("ul",[a("li",[t._v("valueOf方法的作用是返回一个对象的“值”，默认情况下返回对象本身")]),t._v(" "),a("li",[t._v("数组的valueOf方法返回数组本身")]),t._v(" "),a("li",[t._v("函数的valueOf方法返回函数本身")]),t._v(" "),a("li",[t._v("字符串的valueOf方法返会引号中的值")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let obj = {a: 1}\nobj.valueOf() // {a: 1}\nvar arr = [1, 2, 3];\narr.valueOf() // [1, 2, 3]\nlet f = function(){ return 123}\nf.valueOf() //ƒ (){return 123}\n")])])]),a("ul",[a("li",[t._v("valueOf()方法返回包装对象实例对应的原始类型的值")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("new Number(123).valueOf()  // 123\nnew String('abc').valueOf() // \"abc\"\nnew Boolean(true).valueOf() // true\n")])])]),a("h2",{attrs:{id:"object-prototype-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-prototype-tostring"}},[t._v("#")]),t._v(" Object.prototype.toString()")]),t._v(" "),a("ul",[a("li",[t._v("toString方法的作用是返回一个对象的字符串形式，默认情况下返回类型字符串")]),t._v(" "),a("li",[t._v("数组、字符串、函数、Date 对象都分别部署了自定义的toString方法，覆盖了Object.prototype.toString方法，分别返回各自的字符串形式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[1, 2, 3].toString() // "1,2,3"\n\n\'123\'.toString() // "123"\n\n(function () {\n  return 123;\n}).toString()\n// "function () {\n//   return 123;\n// }"\n\n(new Date()).toString()\n// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"\n')])])]),a("ul",[a("li",[t._v("toString()方法返回包装对象实例对应的字符串形式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('new Number(123).toString() // "123"\nnew String(\'abc\').toString() // "abc"\nnew Boolean(true).toString() // "true"\n')])])]),a("h2",{attrs:{id:"强制类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制类型转换"}},[t._v("#")]),t._v(" 强制类型转换")]),t._v(" "),a("h3",{attrs:{id:"number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number"}},[t._v("#")]),t._v(" Number()")]),t._v(" "),a("ul",[a("li",[t._v("Number(324) //324 , 数值：转换后还是原来的值")]),t._v(" "),a("li",[t._v("Number('324') // 324, 字符串：如果可以被解析为数值，则转换为相应的数值")]),t._v(" "),a("li",[t._v("Number('324abc') // NaN, 字符串：如果不可以被解析为数值，返回 NaN")]),t._v(" "),a("li",[t._v("Number('') // 0, 空字符串转为0")]),t._v(" "),a("li",[t._v("Number(true) // 1, 布尔值：true 转成 1，false 转成 0")]),t._v(" "),a("li",[t._v("Number(false) // 0")]),t._v(" "),a("li",[t._v("Number(undefined) // NaN, undefined：转成 NaN")]),t._v(" "),a("li",[t._v("Number(null) // 0, null：转成0")]),t._v(" "),a("li",[t._v("Number({a: 1}) // NaN, 对象时，将返回NaN")]),t._v(" "),a("li",[t._v("Number({}) //NaN")]),t._v(" "),a("li",[t._v("Number(function(){return 123}) //NaN")]),t._v(" "),a("li",[t._v("Number([1,2]) //NaN")]),t._v(" "),a("li",[t._v("Number([]) //0,  Number([1]) //1")])]),t._v(" "),a("h3",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String()")]),t._v(" "),a("ul",[a("li",[t._v('String(123) // "123", 数值：转为相应的字符串。')]),t._v(" "),a("li",[t._v("String('abc') // \"abc\", 字符串：转换后还是原来的值。")]),t._v(" "),a("li",[t._v('String(true) // "true", 布尔值：true转为字符串"true"，')]),t._v(" "),a("li",[t._v('String(false) // "false", false转为字符串"false"。')]),t._v(" "),a("li",[t._v('String(undefined) // "undefined"，undefined：转为字符串"undefined"。')]),t._v(" "),a("li",[t._v('String(null) // "null", null：转为字符串"null"')]),t._v(" "),a("li",[t._v('String({a: 1}) // "[object Object]", 对象：返回一个类型字符串')]),t._v(" "),a("li",[t._v('String([1, 2, 3]) // "1,2,3", 数组：返回该数组的字符串形式')]),t._v(" "),a("li",[t._v('String([]) //""')]),t._v(" "),a("li",[t._v('String({}) //"[object Object]"')]),t._v(" "),a("li",[t._v("String(function(){return 123}) //function(){return 123}")])]),t._v(" "),a("h3",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean()")]),t._v(" "),a("ul",[a("li",[t._v("除了以下五个值的转换结果为false，其他的值全部为true")]),t._v(" "),a("li",[t._v("undefined, null, 0（包含-0和+0, NaN, ''（空字符串）")]),t._v(" "),a("li",[t._v("true和false这两个布尔值不会发生变化")]),t._v(" "),a("li",[t._v("Boolean(true) // true")]),t._v(" "),a("li",[t._v("Boolean(false) // false")]),t._v(" "),a("li",[t._v("所有对象（包括空对象，空数组，函数）的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true")])]),t._v(" "),a("h2",{attrs:{id:"自动转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动转换"}},[t._v("#")]),t._v(" 自动转换")]),t._v(" "),a("ul",[a("li",[t._v("自动转换的规则是这样的：预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用String函数进行转换。如果该位置即可以是字符串，也可能是数值，那么默认转为数值")]),t._v(" "),a("li",[t._v("预期为布尔值的地方（比如if语句的条件部分），就会将非布尔值的参数自动转换为布尔值")]),t._v(" "),a("li",[t._v("字符串的自动转换，主要发生在字符串的加法运算时")]),t._v(" "),a("li",[t._v("除了加法运算符（+）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值")]),t._v(" "),a("li",[t._v("一元运算符也会把运算子转成数值")])]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[t._v("当使用 + 运算符计算 string 和其他类型相加时，都会转换为 string 类型；其他情况，都会转换为 number 类型，但是 undefined 和 null 会转换为 NaN，相加结果也是 NaN。")]),t._v(" "),a("li",[t._v("当使用 + 运算符计算时，如果存在复杂类型，那么复杂类型将会转换为基本类型，再进行运算")]),t._v(" "),a("li",[t._v("“对象类型转基本类型”这个过程。具体规则：")])]),t._v(" "),a("ul",[a("li",[t._v("对象在转换基本类型时，会调用该对象上 valueOf 或 toString 这两个方法，该方法的返回值是转换为基本类型的结果")]),t._v(" "),a("li",[t._v("主观上说，这个对象倾向于转换成什么，就会优先调用哪个方法。如果倾向于转换为 Number 类型，就优先调用 valueOf；如果倾向于转换为 String 类型，就只调用 toString。这里我建议大家了解一些常用的转换结果，对于其他特例情况会查找规范即可。")])]),t._v(" "),a("ol",{attrs:{start:"14"}},[a("li",[t._v("全面总结一下：")]),t._v(" "),a("li",[t._v("对于加法操作，如果加号两边都是 Number 类型，其规则为：")])]),t._v(" "),a("ul",[a("li",[t._v("如果 + 号两边存在 NaN，则结果为 NaN（typeof NaN 是 'number）")]),t._v(" "),a("li",[t._v("如果是 Infinity + Infinity，结果是 Infinity")]),t._v(" "),a("li",[t._v("如果是 -Infinity + (-Infinity)，结果是 -Infinity")]),t._v(" "),a("li",[t._v("如果是 Infinity + (-Infinity)，结果是 NaN")])]),t._v(" "),a("ol",{attrs:{start:"16"}},[a("li",[t._v("如果加号两边有至少一个是字符串，其规则为：")])]),t._v(" "),a("ul",[a("li",[t._v("如果 + 号两边都是字符串，则执行字符串拼接")]),t._v(" "),a("li",[t._v("如果 + 号两边只有一个值是字符串，则将另外的值转换为字符串，再执行字符串拼接")]),t._v(" "),a("li",[t._v("如果 + 号两边有一个是对象，则调用 valueof() 或者 toStrinig() 方法取得值，转换为基本类型再进行字符串拼接。")])]),t._v(" "),a("ol",{attrs:{start:"17"}},[a("li",[t._v("当然也可以进行显式转换，我们往往使用类似 Number、Boolean、String、parseInt 等方法，进行显式类型转换，这里不再展开")])])])}),[],!1,null,null,null);e.default=n.exports}}]);