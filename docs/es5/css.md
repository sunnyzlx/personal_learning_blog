# CSS

### 4种CSS样式的引入方式
- 行内式, 通过html属性style实现
- 嵌入式, 在style标签中写css样式，在body中引用
- 链接式, 使用link标签引入，写在head标签中引入css文件，href属性中的为绝对路径，当前在同一级目录下
- 导入式，@import(url(demo.css))
  - 基本不使用，因为页面会先加载html，然后再去加载css，这样就会造成页面样式的延迟。
### link和@import的区别?
- link属于XHTML标签，而@import是CSS提供的。 
- ⻚面被加载时，link会同时被加载，而@import引用的CSS会等到⻚面被加载完再加载。
- @import只在IE 5以上才能识别，而link是XHTML标签，无兼容问题。
- link方式的样式权重高于@import的权重。 
- 使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。
### CSS选择器的优先级是怎样的?
- CSS选择器的优先级是:内联 > ID选择器 > 类选择器 > 标签选择器
- 到具体的计算层面，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下:
  - A 的值等于 1 的前提是存在内联样式, 否则 A = 0;
  - B 的值等于 ID选择器 出现的次数;
  - C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数; 
  - D 的值等于 标签选择器 和 伪元素 出现的总次数 。
- 就比如下面的选择器，它不存在内联样式，所以A=0,不存在id选择器B=0,存在一个类选择器C=1,存在三个标签选择器 D=3，那么最终计算结果为: {0, 0, 1 ,3}
```
ul ol li .red { 
  ...
}
```
- 按照这个结算方式，下面的计算结果为: {0, 1, 0, 0}
```
#red { }
```
- 我们的比较优先级的方式是从A到D去比较值的大小，A、B、C、D权重从左到右，依次减小。判断优先级时，从左到 右，一一比较，直到比较出最大值，即可停止。
- 比如第二个例子的B与第一个例子的B相比，1>0,接下来就不需要比较了，第二个选择器的优先级更高
### flex

### animation (5个)
- animation: name duration timing-function delay iteration-count direction;
- 规定需要绑定到选择器的keyframe名称: animation-name
- 规定完成动画所花费的时间，以秒或毫秒计: animation-duration: 2s 。默认0，即没有动画效果
- 规定动画的速度曲线: 
  - animation-timing-function: 
    - linear //线性的
    - ease //默认。动画以低速开始，然后加快，在结束前变慢。
    - ease-in //动画以低速开始
    - ease-out //动画以低速结束
    - ease-in-out //动画以低速开始和结束
    - cubic-bezier(n,n,n,n) //在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
- 属性定义动画的播放次数：animation-iteration-count: n|infinite;
- 规定是否应该轮流反向播放动画：animation-direction: normal|alternate
### transform
- transform: none|transform-functions;
- transform-functions
  - 平移
  - 缩放
  - 旋转
  - 倾斜
  - 定义透视视图
### 首行。。。结尾

# css盒模型

### 题目：谈谈你对css盒模型的认识

1. 盒模型的基本概念：标准模型+IE模型
2. 两者的区别：高度和宽度的计算方式不同
   - 标准模型的width 即content 宽度，不包含padding和border
   - IE模型的width是content+padding+border，是计算padding和border的
3. css如何设置这两种模型，默认是哪个，要怎么修改
   - box-sizing: content-box;(w3c标准)
   - box-sizing: border-box;(IE)
4. js如何设置和获取盒模型对应的宽和高
   - dom.style.width/height 只能获取通过dom节点的内联属性设置的宽和高
   - css属性设置有三种，
     - 一，通过dom节点的内联属性设置，
     - 二，在html 的head中，或body 中的任何地方加一个style节点写css属性，
     - 三，通过外联样式，link方式引外部的css样式表）
   - dom.currentStyle.width/height(只有IE支持) 返回浏览器计算后的得到的最终的样式信息，比较准确
   - window.getComputedStyle(dom).width/height(支持所有) 同二，兼容性更好
   - dom.getBoundingClientRect().width/height 可拿到元素真实的宽和高，也是即时运行完之后的样式信息，常用来计算一个元素的绝对位置，这个绝对位置是相对与视窗viewport的左定点的绝对位置，left, top, width, height, width是包含content+padding+border与border-box对应
 5. display属性
  - none, block, inline, inline-block, list-item, run-in
  - table, inline-table, table-row, table-column, table-ceil, table-caption
### 拔高
- 1. 实例题：根据盒模型解决边距重叠
   - 重叠的原则：取较大值
   - 边距重叠分三种情况：
     - 1）父子元素边距重叠； 
     - 2）兄弟元素边距重叠；
     - 3）空元素的上下边距重叠
- 2. BFC：边距重叠解决方案
   - https://www.cnblogs.com/libin-1/p/7098468.html
   - BFC的基本概念：BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列
   - BFC 形成条件：
     - 根元素，即HTML元素
     - position: fixed/absolute
     - float 不为none
     - overflow不为visible 
     - display的值为inline-block、table-cell、table-caption,flex,inline-flex
   - BFC 特性：
     - 1.内部的 Box 会在垂直方向上一个接一个的放置；
     - 2.垂直方向上的距离由margin 决定；（解决外边距重叠问题）
     - 3.bfc 的区域不会与 float 的元素区域重叠；（防止浮动文字环绕）
     - 4.计算 bfc 的高度时，浮动元素也参与计算；（清除浮动）
     - 5.bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素；
   - BFC的使用场景：
     - 防止margin发生重叠
     - 两栏布局，防止文字环绕
     - 防止元素塌陷
     - 在多列布局中使用BFC,避免最后一列下掉
- 3. 清除浮动的方法：
  - https://www.jianshu.com/p/1ff30625c250
  - 1. 空div方法: <div style="clear:both;"></div> 
  - 2. Clearfix 
  ```
  .clearfix:after {
      content:""; 
      display: block; 
      clear:both; 
    }
  ```

  - 3. overflow: auto或overflow: hidden方法，使用BFC

# 页面布局
#### 题目：假设局高度已知，请写出三栏布局，其中左栏，右栏宽度各为300px,中间自适应
- https://juejin.im/post/6844903794224922638#heading-6
1. float + margin（浮动布局）
2. position（绝对布局）
3. flex（弹性盒子布局）(详细看)
4. table(表格布局)
  - 父元素，display: table
  - 子元素： display: table-cell
  - 要想表格内容水平垂直居中： text-align: center; vertical-align: middle;
5. Grid(网格布局)(详细看)
6. css样式权重比较
7. https://www.jianshu.com/p/4c01c7913b40
#### 延伸：
- 1. 这五种方案各自的优缺点，这五种方案的兼容性如何，如何写在业务中，哪个最实用?
  - 浮动方案，
    - 优点：快捷 简单 兼容性较好
    - 缺点: 有局限性 脱离文档流 需要清除浮动等
  - 绝对定位，好处是快捷，配合js使用非常快也不容易出问题，缺点是脱离文档流，下面所有子元素也脱离文档流，可用性较差
  - flex布局是为解决float布局和绝对定位布局的不足出现，较完美
    - 优点：比较完美 移动端首选
    - 缺点: 不兼容 ie9 及以下
  - 表格布局，兼容性非常好，但三栏布局中，当中间单元格高度撑高时，两边也会跟着撑高，有局限性
    - 优点：兼容性很好（ie8 及以上） 父元素高度会被子元素撑开（不担心高度塌陷）
    - 缺点: seo 不友好 当其中一个单元格高度超出的时候，其他的单元格也是会跟着一起变高的
  - 网格布局，使用css属性来实现之前模拟de网格布局，代码量减少很多
    - 优点：简单强大 解决二维布局问题
    - 缺点: 不兼容 ie9 及以下
- 2. 假如把高度已知去掉，中间内容较多，把高度撑开了，两边的高度需要自适应撑开，哪种方案还可以适用，flex布局和表格布局,网格布局,绝对定位还能用
  - 浮动布局文字自动排版到左边了。（浮动的基本原理）
  - 绝对定位撑开中间部分的布局，两边不变
  - flex 、table 布局中内容撑开盒子的高度 - better
  - grid 布局中内容中不撑开高度
  - 关于浮动的问题有可以延伸出来，怎么解决内容向左排版的 bug 呢？创建 BFC ，那么 BFC 又是什么呢

#### flex（弹性盒子布局）
- http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
- 容器的属性
  - flex-direction：属性决定主轴的方向（即项目的排列方向）
  - flex-wrap：属性定义，如果一条轴线排不下，如何换行，nowrap（默认）：不换行
  - flex-flow：属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
  - justify-content：属性定义了项目在主轴上的对齐方式
  - align-items：属性定义项目在交叉轴上如何对齐
  - align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
- 项目的属性
  - order：属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
  - flex-grow：属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。  
  - flex-shrink：属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  - flex-basis：计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
  - flex：flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选，该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
  - align-self：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性
#### Grid(网格布局)
- http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html
- 容器属性
  - display: grid指定一个容器采用网格布局
  - grid-template-columns属性定义每一列的列宽
  - grid-template-rows属性定义每一行的行高
  - grid-row-gap用于设置行间距，
  - grid-column-gap用于设置列间距
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

- 1. float+margin
```
<div class="container">
    <div class="left">Left</div>
     <!-- 右栏部分要写在中间内容之前 -->
    <div class="right">Right</div>
    <div class="main">Main</div>
</div>


body,html,.container{
    height: 100%;
    padding:0;
    margin: 0;
}
/*左边栏左浮动*/
.left{
    float:left;
    height:100%;
    width:200px;
    background:#333;
}
```
- 2.position（绝对布局）
```
<div class="container">
    <div class="left">Left</div>
    <div class="main">Main</div>
    <div class="right">Right</div>
</div>


body,html,.container{
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
/*左右进行绝对定位*/
.left,.right{
    position: absolute;
    height:100%;
    top: 0;
    background: #333;
}
.left{
    left: 0;
    width: 200px;
}
.right{
    right: 0;
    width: 200px;
}
/*中间用margin空出左右元素所占的空间*/
.main{
    height:100%;
    margin: 0 200px;
    background: red;
}
/*或者中间也进行绝对定位*/
.main{
    position: absolute;
    height:100%;
    left: 200px;
    right:200px;
    background: red;
}

```
- 3.flex（弹性盒子布局）
```
<div class="container">
    <div class="left">Left</div>
    <div class="main">Main</div>
    <div class="right">Right</div>
</div>


 body,html{
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
.container{
    display: flex;
}
.left{
    width:200px;
    background: red;
}
.main{
    flex: 1;
    background: blue;
}
.right{
    width:200px;
    background: red;
}
```
- 4.table(表格布局)
```
<div class="container">
    <div class="left">Left</div>
    <div class="main">Main</div>
    <div class="right">Right</div>
</div>


 body,html{
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
.container{
    display: table;
    width:100%;
}
.container>div{
    display: table-cell;
}
.left{
    width: 200px;
    background: red;
}
.main{
    background: blue;
}
.right{
    width: 200px;
    background: red;
}
```
- 5.Grid(网格布局)
```
<div class="container">
    <div class="left">Left</div>
    <div class="main">Main</div>
    <div class="right">Right</div>
</div>


 body,html{
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: hidden;
}
.container{
    display: grid;
    width: 100%;
    grid-template-rows: 100px;  /*设置行高*/
    grid-template-columns: 200px auto 200px;  /*设置列数属性*/
}
.left{
    background: red;
}
.main{
    background: blue;
}
.right{
    background:red;
}
```
- https://juejin.im/entry/6844903510522200072
- 页面水平垂直居中
  - 负边距+absolute
  - absolute+left:0,right:0,top:0,bottom:0,margin: auto, 定宽或定高
  - flex
  - absolute+transform:translate(-50%,-50%)
   
