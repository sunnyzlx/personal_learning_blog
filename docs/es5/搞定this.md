# 搞定this
## 一些关于this的错误理解：
- 人们很容易把this理解成指向函数自身，事实是，如果要从函数对象内部引用它自身，那只使用this是不够的。一般来说你需要通过一个指向函数对象的词法标识符（变量）来引用它
  - 具名函数，在它内部可以使用函数名来引用自身
  - 匿名函数对象内部引用自身的方法，是使用arguments.callee来引用当前正在运行的函数对象，然而，更好的方式是避免使用匿名函数，至少在需要自引用时使用具名函数（表达式）。arguments.callee已经被弃用，不应该再使用它。
  ```
  function foo(){
    console.log('foo: ', foo)
    foo.count = 4
  }
  foo()

  for(let key in foo){
    console.log(key+ ":" +foo[key])
  }

  let bar = function (){
    console.log(arguments.callee === bar)
  }
  bar()

  ```
- 需要明确的是，this在任何情况下都不指向函数的词法作用域，每当你想要把this和词法作用域的查找混合使用时，一定要提醒自己，这是无法实现的

## this的绑定
- 每个函数的this是在调用时被绑定的，完全取决于函数的调用位置

- 函数的执行上下文： 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方式、传入的参数等信息。this就是这个记录的一个属性，会在函数执行的过程中用到
- 调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）
- 调用栈：调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中，你可以把调用栈想象成一个函数调用链

## this的绑定规则
- 几种绑定的优先级: new绑定 > 显式绑定 >隐式绑定 >默认绑定
### 默认绑定
- 绑定规则: 独立函数调用，直接使用不带任何修饰的函数引用进行调用
- this绑定到window/undefined
### 隐式绑定
- 绑定规则: 调用位置是否有上下文对象，或者说是否被某个对象拥有或者包含
#### 例1
- 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用
```
function foo(){
  console.log(this.a)
}
var obj2 = {
  a: 42,
  foo: foo
}
var obj1 = {
  a: 2,
  obj2: obj2
}

console.log(obj1.obj2.foo()) //42
```
#### 例2
- 隐式丢失： 一个最常见的this绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this绑定到全局对象或者undefined上，取决于是否是严格模式
- 函数别名，将函数重新赋值
```
function foo(){
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var bar = obj.foo //函数别名
var a = 'oops, global' //a是全局对象的属性
bar() //'oops, global'
//虽然bar是obj.foo的一个引用，但是实际上，它引用的是foo函数本身，
//因此此时的bar()其实是一个不带任何修饰的函数调用，因此应用了默认绑定
```
- 传入回调函数
```
function foo(){
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var a = 'oops, global' //a是全局对象的属性

function doFoo(fn){
  //这里有一个隐式赋值，fn引用的其实是foo
  //fn = obj.foo
  fn() //<--调用位置
}
doFoo(obj.foo) //'oops, global'
// 参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值
```
- 如果把函数传入语言内置的函数而不是传入你自己声明的函数,结果是一样的
```
function foo(){
  console.log(this.a)
}
var obj = {
  a: 2,
  foo: foo
}
var a = 'oops, global' //a是全局对象的属性

setTimeout(obj.foo, 100) //'oops, global'
```
- 回调函数丢失this绑定是非常常见的,除此之外,调用回调函数的函数可能会修改this。在一些流行的JavaScript库中事件处理器常会把回调函数的this强制绑定到触发事件的DOM元素上
### 显式绑定
- 利用call,apply,bind直接指定this的绑定对象，因此我们称之为显式绑定。
### new绑定
- 绑定到新创建的对象

### 透彻认识函数的this在不同调用环境下的指向
- 1.被事件调用的函数中的this，指向触发事件的对象,(监听函数内部的this指向触发事件的那个元素节点)
```
<div class="box"></div>
<div class="lili"></div>
  
<script>
  let box = document.querySelector('.box');
  let lili = document.querySelector('.lili');
  box.onclick = move;
  lili.onclick = move;
  function move(){
    console.log(this)
    this.style.left = '100px';
  }
</script>
```
- 全局环境 window/undefined
```
function move(){
  'use strict'
  console.log(this)
}
move() //window/undefined
window.move() //window
```
#### 2.多层对象中的函数的this指向
  - 函数被多层对象所包含，如果函数被最外层对象调用，this的指向也只是它上一级的对象
  - 多层对象中的函数被赋值给一个全局变量，再去执行，this指向全局
  ```
  var obj = {
    a: 10,
    b: {
      fn: function(){
        console.log(this)
      }
    }
  }
  obj.b.fn() // { fn: f}
  let f = obj.b.fn;
  f() //window
  ```
#### 3.构造函数中的this
  - 构造函数会隐式返回一个this对象，即实例化生成的对象
  - 如果构造函数中有显式return，return的值是对象，则this指向return的对象,如果return不是对象，或者return null,则this保持原来的隐式返回
  ```
  function fn(){
    this.num = 10;
    console.log(this)
  }
  // fn作为一函数，函数体内容如上
  fn.num = 20;
  // fn作为一对象，有一属性num

  fn.prototype.num = 30;
  fn.prototype.method = function(){
    console.log(this.num)
  }

  let prototype = fn.prototype;
  let method = prototype.method;

  let obj = new fn()

  new fn().method() //10
  prototype.method() //30
  method() //undefined


  let obj = {};
  obj.num =10;
  obj.fn = function(){
    console.log(this.num)
  }
  obj.fn() //10
  var abc = obj.fn;
  abc() //undefined
  ```
#### 4.箭头函数中this的指向
- 在手写某些原理时，慎用箭头函数，箭头函数会是全局的匿名函数中this变为window
- 箭头函数本身是没有this和arguments的
- 箭头函数中的this其实是调用定义在上一层作用域中的this，这里强调是上一层的独立的作用域，因为对象是不能形成独立的作用域的
- 默认的，匿名的回调函数中的this绑定window
```
  box.onclick = move;
  lili.onclick = move;
  function move(){
    console.log(this) 
    setTimeout(function(){
      console.log(this)
    },1000)
    setTimeout(() => {
      console.log(this)
    },1000)
  }

  let obj = {
    fn:function(){
      console.log(this)
    },
    fn1:()=>{
      console.log(this)
    }
  }
  obj.fn() //{fn: f}
  obj.fn1() //window
``` 
#### 5.如何改变this的指向
- call,apply,bind
- 箭头函数中的this,在定义时就已经确定，无法使用上述方法修改
- 箭头函数即使多层对象包含，this仍是如此
```
let obj = {
    fn:function(){
      console.log(this)
    },
    fn1:()=>{
      console.log(this)
    }
  }
  obj.fn.call(box) // <div class="box"></box>
  obj.fn1.call(box) //window

function A() {
  var obj = {}
  console.log('000', this) //window
  function B(){
      console.log('111',this); //window
  }

  return B();
}
var obj = A();

let a = {
  b: {
      c: function(){
          console.log('111',this)
      },
      d: () => {
          console.log('222',this)
      }
  }
}
let tmp0 = a.b.c() //{ c: f, d: f}
let tmp1 = a.b.c
tmp1() //window
let tmp2 = a.b.d() //window
let tmp3 = a.b.d
tmp3() //window

```