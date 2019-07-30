# interview
### 基础
1. 页面布局
2. css盒模型
3. dom事件
4. http协议
5. 面向对象
6. 原形链
### 拔高
1. 通信
  - 跨域通信
  - 普通的前后端通信
2. 安全
  - xss
  - csrf
3. 算法

## 页面布局
#### 题目：假设局高度已知，请写出三栏布局，其中左栏，右栏宽度各为300px,中间自适应
1. 浮动解决方案
2. 绝对定位解决方案
3. flex box
4. 表格布局解决方案
  - 父元素，display: table
  - 子元素： display: table-cell
  - 要想表格内容水平垂直居中： text-align: center; vertical-align: middle;
5. 网格布局解决方案
  - http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
6. css样式权重比较
7. https://www.jianshu.com/p/4c01c7913b40
#### 延伸：
- 这五种方案各自的优缺点，
  - 浮动方案，兼容性较好，但是要处理好清除浮动
  - 绝对定位，好处是快捷，配合js使用非常快也不容易出问题，缺点是脱离文档流，下面所有子元素也脱离文档流，可使用性较差
  - flex布局是为解决float布局和绝对定位布局的不足出现，较完美
  - 表格布局，兼容性非常好，但三栏布局中，当中间单元格高度撑高时，两边也会跟着撑高，有局限性
  - 网格布局，使用css属性来实现之前模拟de网格布局，代码量减少很多
- 假如把高度已知去掉，中间内容较多，把高度撑开了，两边的高度需要自适应撑开，哪种方案还可以适用，flex布局和表格布局还能用
  - 创建bfc
- 这五种方案的兼容性如何，如何写在业务中，哪个最实用
#### 总结：
1. 语义化
   - article 容器，div 块， 标题 h1, 内容 p, 每个区域的划分 section, 不要通篇div
2. 页面布局要理解深刻
   - 每种方案的原理要理解清楚
3. css基础要扎实
4. 思维要灵活
   - 网格布局新技术
   - 五种方案之间的优缺点比较
5. 代码书写要规范

#### 页面布局的变通

1. 三栏布局
- 左右宽度固定，中间自适应
- 上下高度固定，中间自适应
2. 两栏布局
- 左宽度固定，右自适应
- 右宽度固定，左自适应
- 上高度固定，下自适应
- 下高度固定，上自适应

## css盒模型

#### 题目：谈谈你对css盒模型的认识

1. 盒模型的基本概念：标准模型+IE模型
2. 两者的区别：高度和宽度的计算方式不同
   - 标准模型的width 即content 宽度，不包含padding和border
   - IE模型的width是content+padding+border，是计算padding和border的
3. css如何设置这两种模型，默认是哪个，要怎么修改
   - box-sizing: content-box;(w3c标准)
   - box-sizing: border-box;(IE)
4. js如何设置和获取盒模型对应的宽和高
   - dom.style.width/height 只能获取通过dom节点的内联属性设置的宽和高（css属性设置有三种，一，通过dom节点的内联属性设置，二，在html 的head中，或body 中的任何地方加一个style节点写css属性，三，通过外联样式，link方式引外部的css样式表）
   - dom.currentStyle.width/height(只有IE支持) 返回浏览器计算后的得到的最终的样式信息，比较准确
   - window.getComputedStyle(dom).width/height(支持所有) 同二，兼容性更好
   - dom.getBoundingClientRect().width/height 可拿到元素真实的宽和高，也是即时运行完之后的样式信息，常用来计算一个元素的绝对位置，这个绝对位置是相对与视窗viewport的左定点的绝对位置，left, top, width, height, width是包含content+padding+border与border-box对应
#### 拔高
1. 实例题：根据盒模型解决边距重叠
   - 重叠的原则：取较大值
   - 边距重叠分三种情况：1）父子元素边距重叠；2）兄弟元素边距重叠；3）空元素的上下边距重叠
2. bfc：边距重叠解决方案
   - bfc的基本概念：即块级格式化上下文，ifc：内联元素格式化上下文
   - bfc的原理：即bfc的渲染规则：
   - 1）属于同一个BFC的两个box在垂直方向的margin会发生重叠；场景：==利用BFC避免外边距折叠==
      - BFC可能造成外边距折叠，也可以利用它来避免这种情况。BFC产生外边距折叠要满足一个条件：两个相邻元素要处于同一个BFC中。所以，若两个相邻元素在不同的BFC中，就能避免外边距折叠。
   - 2）BFC区域与外部的float box不会发生重叠；场景：==使用BFC避免文字环绕==
   - 3）bfc在页面上是一个独立容器,内外元素互不影响；
   - 4）在BFC内部的浮动元素也计算在BFC的高度之内；场景：==BFC包含浮动==bfc子元素即使是float也会参与高度计算
   - 如何创建bfc：给元素添加属性,
     - 1）float值不为none；left,right
     - 2）position值不为static和relative；absolute,fixed
     - 3）display属性为inline-block,flex,inline-flex,table-cell,table-caption;
     - 4）overflow不为visible;   auto，hidden都可以为该元素创建bfc
   - 虽然添加上述的任意一条都能创建BFC，但会有一些副作用：
     - 1、display: table 可能引发响应性问题
     - 2、overflow: scroll 可能产生多余的滚动条
     - 3、float: left 将把元素移至左侧，并被其他元素环绕
     - 4、overflow: hidden 将裁切溢出元素


   - bfc的使用场景：
   - 好好看一下display属性
3. https://www.cnblogs.com/libin-1/p/7098468.html
4. https://www.jianshu.com/p/

## DOM事件类
1. 基本概念：DOM事件的级别
  - DOM0 elem.onclick=function(){}, 若在html中 则写onclick属性，后面是js语句
  - DOM2 elem.addEventListener('click',function(){},false)，IE上为elem.attachEvent('click',function(){},false),elem.detachEvent('click',function(){}, false)
  - DOM3 elem.addEventListener('keyup',function(){},false)与2相比，书写形式不变，增加类很多事件类型，如鼠标事件，键盘事件
2. DOM事件类型
   - 捕获，冒泡,      捕获是从上往下到达目标元素，冒泡是从当前元素，也就是目标元素往上到window。是两个过程。
3. DOM事件流
   - 事件流分三个阶段，第一阶段是捕获，第二阶段是目标阶段, 第三个阶段是冒泡阶段，比如点击的这个按钮，这个按钮就是目标阶段，事件通过捕获到达目标元素，就到达了目标阶段，从目标元素再上传到window对象，就是冒泡的过程。
4. 描述DOM事件捕获的具体流程
   - 捕获是从上到下，具体第一个真正接收的是window（对象）——第二个接收的是document（对象）——第三个接收的是html标签（怎么获取html标签>document.documentElement）——第四个接收的是body（document.body）——......(父级--子级，剩下的就是按照普通的html结构一层一层往下传)——最后到达目标元素。
   - 描述DOM事件冒泡的具体流程（与事件捕获正好相反）:第一个接收的是目标元素——第二个接收的是...（子级--父级，按照html结构一层一层往上传）——然后接收的是body标签——html标签——document对象——最后一个接收的是window对象。
5. Event对象的常见应用
   - http://blog.sina.com.cn/s/blog_c112a2980102xktf.html
   - 什么是事件对象？在触发DOM上的事件时都会产生一个对象，就是事件对象。事件对象event。
   - event.type;//获取绑定的事件类型,比如click，mouseover等
   - event.target;返回触发事件的元素
   - event.currentTarget;表示当前所绑定事件的元素
   - event.stopPropagation()[ˌprɒpə'ɡeɪʃn];//用于阻止事件冒泡
   - event.stopImmediatePropagation();//Immediate[ɪˈmi:diət] //当一个元素绑定多个事件处理程序的时候，事件会按照顺序全部执行，如果不想让后面的事件处理程序执行，就在当前事件里加这个方法，就不执行后面的事件处理程序了。事件响应优先级
   - event.preventDefault();//阻止事件的默认行为，比如阻止a的href链接。
   - IE中的事件对象常用属性和方法
     - event.type;//用于获取事件类型，比如click，mouseover等
     - event.srcElement;返回触发事件的元素，相当于常用的event.target
     - event.cancelBubble;//用于阻止事件冒泡，设置为true表示阻止冒泡，设置为false表示不阻止冒泡。
     - event.returnValue;//阻止事件的默认行为，比如阻止a的href链接。设置为false表示阻止事件的默认行为。
     - 
```
function showMes（event）{
   event=event || window.event;//ie8以前的浏览器需要用window.event
   event.type;
   event.srcElement;
   event. srcElement.nodeName;
   event.cancelBubble=true;
   event.returnValue=false;
}
```
6. 自定义事件 ？？
   - https://www.cnblogs.com/cwsb/p/10384219.html
 
```
var eve = new Event('test')
elem.addEventListener('test', function(){
    console.log('event test')
},false)
elem.dispatchEvent(eve) //触发的是事件对象eve,  监听的是事件类型test
```
## HTTP协议类
- http://blog.sina.com.cn/s/blog_c112a2980102xm2u.html
1. http协议的主要特点 
   - 无连接，连接一次之后就会断掉，不会保持连接
   - 无状态，无法区分两次连接者的身份
   - 简单快速，统一资源标志符URI就是在某一规则下能把一个资源独一无二地标识出来
   - 灵活，通过一个http协议，就可以完成不同数据类型的传输
2. http报文的组成部分
3. http方法
   - GET 获取资源
   - POST 传输资源
   - PUT 更新资源
   - DELETE 删除资源
   - HEAD 获取报文首部
4. post与get的区别
   - ==1）GET在浏览器回退时是无害的（就是不会重复提交），而POST会再次提交请求（就是会重复提交）==。
   - 2）==GET产生的URL地址可以被收藏，而POST不可以==
   - 3）==GET请求会被浏览器主动缓存，而POST不会，除非手动设置==
   - 4）GET请求只能进行URL编码，而POST支持多种编码方式
   - 5）==GET请求参数会被完整的保留在浏览器历史记录中，而POST中的参数不会被保留==
   - 6）==GET请求在URL中传送的参数是有长度限制的（基本上是2kb，不同的浏览器限制不一样，参数太长，会被浏览器截断），而POST没有限制==
   - 7）对参数的数据类型，GET只接受ASCII字符，而POST没有限制
   - 8）==GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息==
   - 9）==GET参数通过URL传递，POST放在Request body中==
5. http状态码
   - 1XX：指示信息——表示请求已接收，继续处理
   - 2XX：成功——表示请求已被成功接收
   - 3XX：重定向——要完成请求必须进行更进一步的操作
   - 4XX：客户端错误——请求有语法错误或请求无法实现
   - 5XX：服务器错误——服务器未能实现合法的请求

   - ==200 OK：客户端请求成功==。
   - 206 Partial Content：客户发送了一个带有Range头的GET请求，服务器完成了它。

   - ==301 Moved Permanently：所请求的页面已经转移至新的url（临时重定向）==
   - ==302 Found：所请求的页面已经临时转移至新的url（永久重定向）==
   - 304 Not Modified：客户端有缓冲的文档并发出了一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用

   - ==400 Bad Request：客户端请求有语法错误，不能被服务器所理解==
   - 401 Unauthorized：请求未经授权，这个状态码必须和WWW-Authenticate报头域一起使用
   - ==403 Forbidden：对被请求页面的访问被禁止（资源被禁止访问）==
   - ==404 Not Found：请求资源不存在==

   - ==500 Internal Server Error：服务器发生不可预期的错误，原来缓冲的文档还可以继续使用==
   - 503 Server Unavailable：请求未完成，服务器临时过载或当机，一段时间后可能恢复正常

记住状态码，在开发中可以快速找出错误。
6. 什么是持久连接，http1.1版本才支持
   - HTTP协议采用“请求-应答”模式，当使用普通模式(即非Keep-Alive模式时)，每个请求、应答客户端和服务器都要新建一个TCP连接，完成之后立即断开连接。（HTTP协议为无连接的协议）
   - 当使用持久链接（Keep-Alive）模式时，即TCP连接默认不关闭，可以被多次请求复用，当客户端和服务器发现对方一段时间没有活动，就可以主动关闭链接。不过，规范的做法是，客户端在最后一个请求时，发送Connection:close，明确要求服务器关闭TCP连接。（HTTP/1.1版本）
7. 什么是管线化
   - 把请求响应打包回来
   - 管线化是允许浏览器同时发出A请求和B请求，但是服务器还是按照顺序，先回应A请求，完成后再回应B请求。
请求A——>请求B——>请求C——>响应A——>响应B——>响应C
   - 1）管线化机制通过持久连接完成，仅HTTP/1.1支持此技术
   - 2）只有GET和HEAD请求可以进行管线化，而POST则有所限制。
   - 3）初次创建连接时不应启动管线机制，因为对方（服务器）不一定支持HTTP/1.1版本的协议
8. 什么是多工
   - HTTP/2复用TCP连接，在一个连接里，客户端和浏览器都可以同时发送多个请求和回应，而且不用按照顺序一一对应，这样就避免了“对头堵塞”。
   - 举例来说，在一个TCP连接里面，服务器同时受到了A请求和B请求，于是先回应A请求，结果发现处理过程非常耗时，于是就发送A请求已经处理好的部分，接着回应B请求，完成后，在发送A请求剩下的部分，这样双向的、实时的通信，就叫做多工。
## 原型链类
1. 创建对象有几种方法
2. 原型，构造函数，实例，原型链
3. instanceof 的原理
4. new运算符

## 面向对象类

### 1.类与实例
  #### 类的声明
  两种方式：
  1. 传统es5方式，用构造函数来模拟一个类
  ```
  function Animal1() {
    this.name = 'dog'
  }
  ```
  2. es6中对class的声明
  ```
  class Animal2 {
    constructor(){
      this.name = name
    }
  }
  ```
  #### 生成实例
  - 如何通过类，来实例化，生成一个对象？通过关键字new，如果没有参数，后面的括号可以不要
  - new Animal1(), new Animal2()
  - 实例化生成的对象，会有一个__proto__属性，指向它的原型对象，进而指向其原型链
### 2.类与继承
  #### 如何生成继承
  实现继承的本质：原型链
  #### 继承的几种方式，各自的优缺点？
  1. 借助构造函数实现继承
     在子类的构造函数体里，执行父级构造函数，call和apply都是改变函数运行的上下文

## 渲染机制类
1. 什么是DOCTYPE及作用
   - DTD 文档类型定义，xml和html都是一种文档
   - DTD就是告诉浏览器我是什么文档类型，浏览器根据这个来判断要用什么引擎来解析它渲染它
   - DOCTYPE是用来声明文档类型和DTD规范的
   - 常见的DOCTYPE类型有哪些：
     - HTML5 <!DOCTYPE html>
     - HTML4.01 有严格模式和传统模式
2. 浏览器渲染过程
   - 1. 从输入url到得到html的详细过程
     - 1）浏览器根据DNS服务器得到域名（url）的IP地址。
     - 2）向这个IP的机器发送http（https）请求。
     - 3）服务器收到、处理并返回http（https）请求。
     - 4）浏览器得到返回的内容。
   - 2. 浏览器渲染页面的过程（得到返回内容之后怎么渲染成页面的过程
     - 1）根据HTML结构生成DOM Tree（DOM树）。
     - 2）根据CSS生成CSSOM Tree。
     - 3）将DOM Tree和CSSOM Tree整合形成RenderTree（渲染树）。
     - 4）根据RenderTree开始渲染和展示。
     - 5）遇到script时，会执行并阻塞渲染，所以一般将script相关的放到body的最下面
3. 重排reflow
   - DOM结构中的各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算并根据计算结果将元素放到它该出现的位置，这个过程称为reflow。
   - 什么时候会触发Reflow，==怎么避免Feflow==
     - 1）当你增加、删除、修改DOM节点时，会导致Reflow或Repaint（增加的时候用代码片段）
     - 2）当你移动DOM的位置，或者搞个动画的时候，会Reflow
     - 3）当你修改CSS样式的时候，会Reflow
     - 4）当你Resize窗口的时候，或者滚动的时候可能会Reflow，这个要看浏览器
     - 5）当你修改网页默认字体的时候。当网页Repaint完的时候最好不要修改默认字体，会非常耗性能。（把样式放到head里面）
4. 重绘repaint，==如何减少Repaint频率==
   - 当各种盒子的位置、大小以及其他属性，例如颜色、字体大小等都确定下来后，浏览器于是便把这些元素都按照各自的特性绘制一遍，于是页面的内容出现了，这个过程称为Repaint（页面要呈现的内容画在页面上就是repaint）。
   - 什么时候会触发Repaint
     - 1）DOM改动（代码片段）
     - 2）CSS改动
5. 布局layout
## 运行机制类
1. JS是单线程的，即JS在同一时间只能做一件事
2. 任务队列，同步任务，异步任务
   - 同步任务和异步任务执行的优先顺序，遇到异步任务先挂起，将所有的同步任务执行完之后，才会去执行异步任务
   - 异步任务的放入时间和执行时间
   - 事件循环event loop
3. 理解事件循环event loop
4. 理解哪些语句会放入异步任务队列
5. 理解语句放入异步任务队列的时间
## 页面性能类
1.