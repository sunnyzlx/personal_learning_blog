(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{385:function(n,t,o){"use strict";o.r(t);var s=o(44),a=Object(s.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"搞定this"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#搞定this"}},[n._v("#")]),n._v(" 搞定this")]),n._v(" "),o("h2",{attrs:{id:"一些关于this的错误理解"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一些关于this的错误理解"}},[n._v("#")]),n._v(" 一些关于this的错误理解：")]),n._v(" "),o("ul",[o("li",[n._v("人们很容易把this理解成指向函数自身，事实是，如果要从函数对象内部引用它自身，那只使用this是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量）来引用它\n"),o("ul",[o("li",[n._v("具名函数，在它内部可以使用函数名来引用自身")]),n._v(" "),o("li",[n._v("匿名函数对象内部引用自身的方法，是使用arguments.callee来引用当前正在运行的函数对象，然而，更好的方式是避免使用匿名函数，至少在需要自引用时使用具名函数（表达式）。arguments.callee已经被弃用，不应该再使用它。")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function foo(){\n  console.log('foo: ', foo)\n  foo.count = 4\n}\nfoo()\n\nfor(let key in foo){\n  console.log(key+ \":\" +foo[key])\n}\n\nlet bar = function (){\n  console.log(arguments.callee === bar)\n}\nbar()\n\n")])])])]),n._v(" "),o("li",[n._v("需要明确的是，this在任何情况下都不指向函数的词法作用域，每当你想要把this和词法作用域的查找混合使用时，一定要提醒自己，这是无法实现的")])]),n._v(" "),o("h2",{attrs:{id:"this的绑定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#this的绑定"}},[n._v("#")]),n._v(" this的绑定")]),n._v(" "),o("ul",[o("li",[o("p",[n._v("每个函数的this是在调用时被绑定的，完全取决于函数的调用位置")])]),n._v(" "),o("li",[o("p",[n._v("函数的执行上下文： 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到")])]),n._v(" "),o("li",[o("p",[n._v("调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）")])]),n._v(" "),o("li",[o("p",[n._v("调用栈：调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中，你可以把调用栈想象成一个函数调用链")])])]),n._v(" "),o("h2",{attrs:{id:"this的绑定规则"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#this的绑定规则"}},[n._v("#")]),n._v(" this的绑定规则")]),n._v(" "),o("ul",[o("li",[n._v("几种绑定的优先级: new绑定 > 显式绑定 >隐式绑定 >默认绑定")])]),n._v(" "),o("h3",{attrs:{id:"默认绑定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#默认绑定"}},[n._v("#")]),n._v(" 默认绑定")]),n._v(" "),o("ul",[o("li",[n._v("绑定规则: 独立函数调用，直接使用不带任何修饰的函数引用进行调用")]),n._v(" "),o("li",[n._v("this绑定到window/undefined")])]),n._v(" "),o("h3",{attrs:{id:"隐式绑定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#隐式绑定"}},[n._v("#")]),n._v(" 隐式绑定")]),n._v(" "),o("ul",[o("li",[n._v("绑定规则: 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含")])]),n._v(" "),o("h4",{attrs:{id:"例1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#例1"}},[n._v("#")]),n._v(" 例1")]),n._v(" "),o("ul",[o("li",[n._v("对象属性引用链中只有上一层或者说最后一层在调用位置中起作用")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj2 = {\n  a: 42,\n  foo: foo\n}\nvar obj1 = {\n  a: 2,\n  obj2: obj2\n}\n\nconsole.log(obj1.obj2.foo()) //42\n")])])]),o("h4",{attrs:{id:"例2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#例2"}},[n._v("#")]),n._v(" 例2")]),n._v(" "),o("ul",[o("li",[n._v("隐式丢失： 一个最常见的this绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上，取决于是否是严格模式")]),n._v(" "),o("li",[n._v("函数别名，将函数重新赋值")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj = {\n  a: 2,\n  foo: foo\n}\nvar bar = obj.foo //函数别名\nvar a = 'oops, global' //a是全局对象的属性\nbar() //'oops, global'\n//虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，\n//因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定\n")])])]),o("ul",[o("li",[n._v("传入回调函数")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj = {\n  a: 2,\n  foo: foo\n}\nvar a = 'oops, global' //a是全局对象的属性\n\nfunction doFoo(fn){\n  //这里有一个隐式赋值，fn引用的其实是foo\n  //fn = obj.foo\n  fn() //<--调用位置\n}\ndoFoo(obj.foo) //'oops, global'\n// 参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值\n")])])]),o("ul",[o("li",[n._v("如果把函数传入语言内置的函数而不是传入你自己声明的函数,结果是一样的")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function foo(){\n  console.log(this.a)\n}\nvar obj = {\n  a: 2,\n  foo: foo\n}\nvar a = 'oops, global' //a是全局对象的属性\n\nsetTimeout(obj.foo, 100) //'oops, global'\n")])])]),o("ul",[o("li",[n._v("回调函数丢失this绑定是非常常见的,除此之外,调用回调函数的函数可能会修改this。在一些流行的JavaScript库中事件处理器常会把回调函数的this强制绑定到触发事件的DOM元素上")])]),n._v(" "),o("h3",{attrs:{id:"显式绑定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#显式绑定"}},[n._v("#")]),n._v(" 显式绑定")]),n._v(" "),o("ul",[o("li",[n._v("利用call,apply,bind直接指定this的绑定对象，因此我们称之为显式绑定。")])]),n._v(" "),o("h3",{attrs:{id:"new绑定"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new绑定"}},[n._v("#")]),n._v(" new绑定")]),n._v(" "),o("ul",[o("li",[n._v("绑定到新创建的对象")])]),n._v(" "),o("h3",{attrs:{id:"透彻认识函数的this在不同调用环境下的指向"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#透彻认识函数的this在不同调用环境下的指向"}},[n._v("#")]),n._v(" 透彻认识函数的this在不同调用环境下的指向")]),n._v(" "),o("ul",[o("li",[n._v("1.被事件调用的函数中的this，指向触发事件的对象,(监听函数内部的this指向触发事件的那个元素节点)")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("<div class=\"box\"></div>\n<div class=\"lili\"></div>\n  \n<script>\n  let box = document.querySelector('.box');\n  let lili = document.querySelector('.lili');\n  box.onclick = move;\n  lili.onclick = move;\n  function move(){\n    console.log(this)\n    this.style.left = '100px';\n  }\n<\/script>\n")])])]),o("ul",[o("li",[n._v("全局环境 window/undefined")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function move(){\n  'use strict'\n  console.log(this)\n}\nmove() //window/undefined\nwindow.move() //window\n")])])]),o("h4",{attrs:{id:"_2-多层对象中的函数的this指向"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-多层对象中的函数的this指向"}},[n._v("#")]),n._v(" 2.多层对象中的函数的this指向")]),n._v(" "),o("ul",[o("li",[n._v("函数被多层对象所包含，如果函数被最外层对象调用，this的指向也只是它上一级的对象")]),n._v(" "),o("li",[n._v("多层对象中的函数被赋值给一个全局变量，再去执行，this指向全局")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("var obj = {\n  a: 10,\n  b: {\n    fn: function(){\n      console.log(this)\n    }\n  }\n}\nobj.b.fn() // { fn: f}\nlet f = obj.b.fn;\nf() //window\n")])])]),o("h4",{attrs:{id:"_3-构造函数中的this"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-构造函数中的this"}},[n._v("#")]),n._v(" 3.构造函数中的this")]),n._v(" "),o("ul",[o("li",[n._v("构造函数会隐式返回一个this对象，即实例化生成的对象")]),n._v(" "),o("li",[n._v("如果构造函数中有显式return，return的值是对象，则this指向return的对象,如果return不是对象，或者return null,则this保持原来的隐式返回")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("function fn(){\n  this.num = 10;\n  console.log(this)\n}\n// fn作为一函数，函数体内容如上\nfn.num = 20;\n// fn作为一对象，有一属性num\n\nfn.prototype.num = 30;\nfn.prototype.method = function(){\n  console.log(this.num)\n}\n\nlet prototype = fn.prototype;\nlet method = prototype.method;\n\nlet obj = new fn()\n\nnew fn().method() //10\nprototype.method() //30\nmethod() //undefined\n\n\nlet obj = {};\nobj.num =10;\nobj.fn = function(){\n  console.log(this.num)\n}\nobj.fn() //10\nvar abc = obj.fn;\nabc() //undefined\n")])])]),o("h4",{attrs:{id:"_4-箭头函数中this的指向"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-箭头函数中this的指向"}},[n._v("#")]),n._v(" 4.箭头函数中this的指向")]),n._v(" "),o("ul",[o("li",[n._v("在手写某些原理时，慎用箭头函数，箭头函数会是全局的匿名函数中this变为window")]),n._v(" "),o("li",[n._v("箭头函数本身是没有this和arguments的")]),n._v(" "),o("li",[n._v("箭头函数中的this其实是调用定义在上一层作用域中的this，这里强调是上一层的独立的作用域，因为对象是不能形成独立的作用域的")]),n._v(" "),o("li",[n._v("默认的，匿名的回调函数中的this绑定window")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("  box.onclick = move;\n  lili.onclick = move;\n  function move(){\n    console.log(this) \n    setTimeout(function(){\n      console.log(this)\n    },1000)\n    setTimeout(() => {\n      console.log(this)\n    },1000)\n  }\n\n  let obj = {\n    fn:function(){\n      console.log(this)\n    },\n    fn1:()=>{\n      console.log(this)\n    }\n  }\n  obj.fn() //{fn: f}\n  obj.fn1() //window\n")])])]),o("h4",{attrs:{id:"_5-如何改变this的指向"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何改变this的指向"}},[n._v("#")]),n._v(" 5.如何改变this的指向")]),n._v(" "),o("ul",[o("li",[n._v("call,apply,bind")]),n._v(" "),o("li",[n._v("箭头函数中的this,在定义时就已经确定，无法使用上述方法修改")]),n._v(" "),o("li",[n._v("箭头函数即使多层对象包含，this仍是如此")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("let obj = {\n    fn:function(){\n      console.log(this)\n    },\n    fn1:()=>{\n      console.log(this)\n    }\n  }\n  obj.fn.call(box) // <div class=\"box\"></box>\n  obj.fn1.call(box) //window\n\nfunction A() {\n  var obj = {}\n  console.log('000', this) //window\n  function B(){\n      console.log('111',this); //window\n  }\n\n  return B();\n}\nvar obj = A();\n\nlet a = {\n  b: {\n      c: function(){\n          console.log('111',this)\n      },\n      d: () => {\n          console.log('222',this)\n      }\n  }\n}\nlet tmp0 = a.b.c() //{ c: f, d: f}\nlet tmp1 = a.b.c\ntmp1() //window\nlet tmp2 = a.b.d() //window\nlet tmp3 = a.b.d\ntmp3() //window\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);