# es6简介

- es6全称ECMAScript, 2015年发布，又称ECMAScript2015, ES2015, ES6
- 有强大的生产力，可以大大提高效率 
   - es6实现对象拷贝，一行代码搞定，Object.assign({t:1}, {k:2})
   - 默认参数，开发中必不可少，为了增强代码的安全性
```
function hello(txt){
  txt = txt || 'hello world'
}
function hello(txt='hello world'){}
// es6只在函数声明时，在参数上加了默认值，代码更加简洁
```
   - 字符串模版
     - es6用了一个变量，一个字符串，就实现了模版和数据的编译过程，而且不依赖任何第三方库               
   - 常用语法
     - 解构赋值，箭头函数，Set和Map, 异步操作，类与对象，模块化   




2.多行变量/模版字符串
         模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
3.解构赋值
   1. 详情参看 http://es6.ruanyifeng.com/#docs/destructuring
   2.简单参考 https://blog.csdn.net/qq_36838191/article/details/80856656
 
4.块级作用域
 
5.函数默认参数
   详情参考： http://es6.ruanyifeng.com/?search=%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F&x=0&y=0#docs/function
  ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
  参数变量是默认声明的，所以不能用let或const再次声明。
function foo(x = 5) {
  let x = 1; // error
  const x = 2; // error
}


6.箭头函数
  写法：
var fn = x => x * x;

x => {
    if (x > 0) {
        return x * x;
    }
    else {
        return - x * x;
    }
}

// 两个参数:
(x, y) => x * x + y * y

// 无参数:
() => 3.14

// 可变参数:
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}



如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：
// SyntaxError:
x => { foo: x }

因为和函数体的{ ... }有语法冲突，所以要改为：
// ok:
x => ({ foo: x })

   箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。
  由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：

                                                                                           原型：
说一个原型的实际应用
原型如何体现他的扩展性
                                                                                                      异步： 解决方法：promise   

单线程：只有一个线程，在同一时间只能做一件事，两段js不能同时执行
原因： 避免DOM渲染的冲突
解决方案： 异步
避免DOM渲染的冲突原因：1.浏览器需要渲染DOM  2.js可以修改DOM 。  3.js执行的时候，浏览器渲染DOM会暂停
                                              4.两段js代码不能同时执行（同时修改同一段js代码就冲突了）
                                              5.webworker支持多线程，但是不能访问DOM
实现异步的具体解决方案：event-loop(事件轮询)
 步骤：
 同步代码，直接执行
异步函数会根据等待时间先放在异步队列中
待同步函数执行完毕，轮询执行异步队列的函数
 什么是异步队列，什么时间放入异步队列 ？
轮询的过程：在程序执行的过程中，会首先执行同步代码，同步代码放在主进程当中先执行，异步代码会放到异步队列中，当异步代码到达执行时间就会被放入异步队列中，然后会轮询将其异步代码放到主进程中，当代码执行完毕后，又会去异步队列中看有没有代码，有代码则会继续放到主进程中执行，循环往复

    promise的基本使用和原理
Promise
1. 异常捕获：规定：then只接收一个参数，即成功的回调，在catch中统一捕获异常
2.Promise.all():  Promice.all接受一个promise对象的数组，待全部执行完成之后统一执行success
Promise.all([reault1, result2]).then(datas => {
    //接收到的datas是一个数组，依次包含了多个promise返回的内容
   console.log(datas[0])
   console.log(datas[1])
})

 Promise.race(): Promise.race()接收一个包含多个promise对象的数组，只要有一个完成就执行success
Promise.race([reault1, result2]).then(data => {
    //data即最先执行完成的promise的返回值
   console.log(data)
})

3.promise标准--状态变化  then函数
  Promise对象有以下两个特点。
      对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。
        一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
Promise也有一些缺点：
      首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）
4.async/await
   then只是将callback拆分了，但还是异步的写法
   async/await是最直接的同步写法
用法：
   使用await   函数必须用await标识
   await后面跟的是promise实例 
   使用babel-polyfill（兼容，因为现在es7还未出来）
特点：
     基本语法：同用法
     使用了promise，但是和promise不冲突
     完全是同步的写法，没有回调函数
     但是： 改变不了js单线程，异步的本质
                                                                     vdom
   目前未使用vdom遇到的问题：
    dom操作是昂贵的，js运行效率高
    尽量减少dom操作，而不是‘推倒重来’
    项目越复杂，影响越严重
  vdom相关问题：
vdom是什么，为什么会存在vdom
          vdom是什么 
 virtual dom ，虚拟dom            
用js模拟dom结构
dom变化的对比，放在js层来做
提高重绘性能

         为什么会存在vdom
     dom操作非常昂贵
     将dom对比变化的操作放在js层来做，提高效率
vdom如何应用，核心API是什么
      应用：snabbdom用法
      核心API:  h函数的两种写法：h('<标签名>'，{...属性...}, [...子元素...])   h('<标签名>'，{...属性...}, ‘...’)  
                    patch函数：
                    patch（container，vnode） -----首次渲染
                    patch（vnode，newVnode） -----再次渲染（将两者对比，把不同的地方换成后者）
介绍一下diff算法
