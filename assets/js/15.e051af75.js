(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{374:function(i,l,t){"use strict";t.r(l);var n=t(44),v=Object(n.a)({},(function(){var i=this,l=i.$createElement,t=i._self._c||l;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[i._v("#")]),i._v(" CSS")]),i._v(" "),t("h3",{attrs:{id:"_4种css样式的引入方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4种css样式的引入方式"}},[i._v("#")]),i._v(" 4种CSS样式的引入方式")]),i._v(" "),t("ul",[t("li",[i._v("行内式, 通过html属性style实现")]),i._v(" "),t("li",[i._v("嵌入式, 在style标签中写css样式，在body中引用")]),i._v(" "),t("li",[i._v("链接式, 使用link标签引入，写在head标签中引入css文件，href属性中的为绝对路径，当前在同一级目录下")]),i._v(" "),t("li",[i._v("导入式，@import(url(demo.css))\n"),t("ul",[t("li",[i._v("基本不使用，因为页面会先加载html，然后再去加载css，这样就会造成页面样式的延迟。")])])])]),i._v(" "),t("h3",{attrs:{id:"link和-import的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#link和-import的区别"}},[i._v("#")]),i._v(" link和@import的区别?")]),i._v(" "),t("ul",[t("li",[i._v("link属于XHTML标签，而@import是CSS提供的。")]),i._v(" "),t("li",[i._v("⻚面被加载时，link会同时被加载，而@import引用的CSS会等到⻚面被加载完再加载。")]),i._v(" "),t("li",[i._v("@import只在IE 5以上才能识别，而link是XHTML标签，无兼容问题。")]),i._v(" "),t("li",[i._v("link方式的样式权重高于@import的权重。")]),i._v(" "),t("li",[i._v("使用dom控制样式时的差别。当使用javascript控制dom去改变样式的时候，只能使用link标签，因为@import不是dom可以控制的。")])]),i._v(" "),t("h3",{attrs:{id:"css选择器的优先级是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css选择器的优先级是怎样的"}},[i._v("#")]),i._v(" CSS选择器的优先级是怎样的?")]),i._v(" "),t("ul",[t("li",[i._v("CSS选择器的优先级是:内联 > ID选择器 > 类选择器 > 标签选择器")]),i._v(" "),t("li",[i._v("到具体的计算层面，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下:\n"),t("ul",[t("li",[i._v("A 的值等于 1 的前提是存在内联样式, 否则 A = 0;")]),i._v(" "),t("li",[i._v("B 的值等于 ID选择器 出现的次数;")]),i._v(" "),t("li",[i._v("C 的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数;")]),i._v(" "),t("li",[i._v("D 的值等于 标签选择器 和 伪元素 出现的总次数 。")])])]),i._v(" "),t("li",[i._v("就比如下面的选择器，它不存在内联样式，所以A=0,不存在id选择器B=0,存在一个类选择器C=1,存在三个标签选择器 D=3，那么最终计算结果为: {0, 0, 1 ,3}")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v("ul ol li .red { \n  ...\n}\n")])])]),t("ul",[t("li",[i._v("按照这个结算方式，下面的计算结果为: {0, 1, 0, 0}")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v("#red { }\n")])])]),t("ul",[t("li",[i._v("我们的比较优先级的方式是从A到D去比较值的大小，A、B、C、D权重从左到右，依次减小。判断优先级时，从左到 右，一一比较，直到比较出最大值，即可停止。")]),i._v(" "),t("li",[i._v("比如第二个例子的B与第一个例子的B相比，1>0,接下来就不需要比较了，第二个选择器的优先级更高")])]),i._v(" "),t("h3",{attrs:{id:"flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[i._v("#")]),i._v(" flex")]),i._v(" "),t("h3",{attrs:{id:"animation-5个"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#animation-5个"}},[i._v("#")]),i._v(" animation (5个)")]),i._v(" "),t("ul",[t("li",[i._v("animation: name duration timing-function delay iteration-count direction;")]),i._v(" "),t("li",[i._v("规定需要绑定到选择器的keyframe名称: animation-name")]),i._v(" "),t("li",[i._v("规定完成动画所花费的时间，以秒或毫秒计: animation-duration: 2s 。默认0，即没有动画效果")]),i._v(" "),t("li",[i._v("规定动画的速度曲线:\n"),t("ul",[t("li",[i._v("animation-timing-function:\n"),t("ul",[t("li",[i._v("linear //线性的")]),i._v(" "),t("li",[i._v("ease //默认。动画以低速开始，然后加快，在结束前变慢。")]),i._v(" "),t("li",[i._v("ease-in //动画以低速开始")]),i._v(" "),t("li",[i._v("ease-out //动画以低速结束")]),i._v(" "),t("li",[i._v("ease-in-out //动画以低速开始和结束")]),i._v(" "),t("li",[i._v("cubic-bezier(n,n,n,n) //在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。")])])])])]),i._v(" "),t("li",[i._v("属性定义动画的播放次数：animation-iteration-count: n|infinite;")]),i._v(" "),t("li",[i._v("规定是否应该轮流反向播放动画：animation-direction: normal|alternate")])]),i._v(" "),t("h3",{attrs:{id:"transform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transform"}},[i._v("#")]),i._v(" transform")]),i._v(" "),t("ul",[t("li",[i._v("transform: none|transform-functions;")]),i._v(" "),t("li",[i._v("transform-functions\n"),t("ul",[t("li",[i._v("平移")]),i._v(" "),t("li",[i._v("缩放")]),i._v(" "),t("li",[i._v("旋转")]),i._v(" "),t("li",[i._v("倾斜")]),i._v(" "),t("li",[i._v("定义透视视图")])])])]),i._v(" "),t("h3",{attrs:{id:"首行。。。结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首行。。。结尾"}},[i._v("#")]),i._v(" 首行。。。结尾")]),i._v(" "),t("h1",{attrs:{id:"css盒模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css盒模型"}},[i._v("#")]),i._v(" css盒模型")]),i._v(" "),t("h3",{attrs:{id:"题目-谈谈你对css盒模型的认识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目-谈谈你对css盒模型的认识"}},[i._v("#")]),i._v(" 题目：谈谈你对css盒模型的认识")]),i._v(" "),t("ol",[t("li",[i._v("盒模型的基本概念：标准模型+IE模型")]),i._v(" "),t("li",[i._v("两者的区别：高度和宽度的计算方式不同\n"),t("ul",[t("li",[i._v("标准模型的width 即content 宽度，不包含padding和border")]),i._v(" "),t("li",[i._v("IE模型的width是content+padding+border，是计算padding和border的")])])]),i._v(" "),t("li",[i._v("css如何设置这两种模型，默认是哪个，要怎么修改\n"),t("ul",[t("li",[i._v("box-sizing: content-box;(w3c标准)")]),i._v(" "),t("li",[i._v("box-sizing: border-box;(IE)")])])]),i._v(" "),t("li",[i._v("js如何设置和获取盒模型对应的宽和高\n"),t("ul",[t("li",[i._v("dom.style.width/height 只能获取通过dom节点的内联属性设置的宽和高")]),i._v(" "),t("li",[i._v("css属性设置有三种，\n"),t("ul",[t("li",[i._v("一，通过dom节点的内联属性设置，")]),i._v(" "),t("li",[i._v("二，在html 的head中，或body 中的任何地方加一个style节点写css属性，")]),i._v(" "),t("li",[i._v("三，通过外联样式，link方式引外部的css样式表）")])])]),i._v(" "),t("li",[i._v("dom.currentStyle.width/height(只有IE支持) 返回浏览器计算后的得到的最终的样式信息，比较准确")]),i._v(" "),t("li",[i._v("window.getComputedStyle(dom).width/height(支持所有) 同二，兼容性更好")]),i._v(" "),t("li",[i._v("dom.getBoundingClientRect().width/height 可拿到元素真实的宽和高，也是即时运行完之后的样式信息，常用来计算一个元素的绝对位置，这个绝对位置是相对与视窗viewport的左定点的绝对位置，left, top, width, height, width是包含content+padding+border与border-box对应")])])]),i._v(" "),t("li",[i._v("display属性")])]),i._v(" "),t("ul",[t("li",[i._v("none, block, inline, inline-block, list-item, run-in")]),i._v(" "),t("li",[i._v("table, inline-table, table-row, table-column, table-ceil, table-caption")])]),i._v(" "),t("h3",{attrs:{id:"拔高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拔高"}},[i._v("#")]),i._v(" 拔高")]),i._v(" "),t("ul",[t("li",[t("ol",[t("li",[i._v("实例题：根据盒模型解决边距重叠")])]),i._v(" "),t("ul",[t("li",[i._v("重叠的原则：取较大值")]),i._v(" "),t("li",[i._v("边距重叠分三种情况：\n"),t("ul",[t("li",[i._v("1）父子元素边距重叠；")]),i._v(" "),t("li",[i._v("2）兄弟元素边距重叠；")]),i._v(" "),t("li",[i._v("3）空元素的上下边距重叠")])])])])]),i._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[i._v("BFC：边距重叠解决方案")])]),i._v(" "),t("ul",[t("li",[i._v("https://www.cnblogs.com/libin-1/p/7098468.html")]),i._v(" "),t("li",[i._v("BFC的基本概念：BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列")]),i._v(" "),t("li",[i._v("BFC 形成条件：\n"),t("ul",[t("li",[i._v("根元素，即HTML元素")]),i._v(" "),t("li",[i._v("position: fixed/absolute")]),i._v(" "),t("li",[i._v("float 不为none")]),i._v(" "),t("li",[i._v("overflow不为visible")]),i._v(" "),t("li",[i._v("display的值为inline-block、table-cell、table-caption,flex,inline-flex")])])]),i._v(" "),t("li",[i._v("BFC 特性：\n"),t("ul",[t("li",[i._v("1.内部的 Box 会在垂直方向上一个接一个的放置；")]),i._v(" "),t("li",[i._v("2.垂直方向上的距离由margin 决定；（解决外边距重叠问题）")]),i._v(" "),t("li",[i._v("3.bfc 的区域不会与 float 的元素区域重叠；（防止浮动文字环绕）")]),i._v(" "),t("li",[i._v("4.计算 bfc 的高度时，浮动元素也参与计算；（清除浮动）")]),i._v(" "),t("li",[i._v("5.bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素；")])])]),i._v(" "),t("li",[i._v("BFC的使用场景：\n"),t("ul",[t("li",[i._v("防止margin发生重叠")]),i._v(" "),t("li",[i._v("两栏布局，防止文字环绕")]),i._v(" "),t("li",[i._v("防止元素塌陷")]),i._v(" "),t("li",[i._v("在多列布局中使用BFC,避免最后一列下掉")])])])])]),i._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[i._v("清除浮动的方法：")])]),i._v(" "),t("ul",[t("li",[i._v("https://www.jianshu.com/p/1ff30625c250")]),i._v(" "),t("li",[t("ol",[t("li",[i._v("空div方法: "),t("div",{staticStyle:{clear:"both"}})])])]),i._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[i._v("Clearfix")])])])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('.clearfix:after {\n    content:""; \n    display: block; \n    clear:both; \n  }\n')])])]),t("ul",[t("li",[t("ol",{attrs:{start:"3"}},[t("li",[i._v("overflow: auto或overflow: hidden方法，使用BFC")])])])])])]),i._v(" "),t("h1",{attrs:{id:"页面布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面布局"}},[i._v("#")]),i._v(" 页面布局")]),i._v(" "),t("h4",{attrs:{id:"题目-假设局高度已知-请写出三栏布局-其中左栏-右栏宽度各为300px-中间自适应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目-假设局高度已知-请写出三栏布局-其中左栏-右栏宽度各为300px-中间自适应"}},[i._v("#")]),i._v(" 题目：假设局高度已知，请写出三栏布局，其中左栏，右栏宽度各为300px,中间自适应")]),i._v(" "),t("ul",[t("li",[i._v("https://juejin.im/post/6844903794224922638#heading-6")])]),i._v(" "),t("ol",[t("li",[i._v("float + margin（浮动布局）")]),i._v(" "),t("li",[i._v("position（绝对布局）")]),i._v(" "),t("li",[i._v("flex（弹性盒子布局）(详细看)")]),i._v(" "),t("li",[i._v("table(表格布局)")])]),i._v(" "),t("ul",[t("li",[i._v("父元素，display: table")]),i._v(" "),t("li",[i._v("子元素： display: table-cell")]),i._v(" "),t("li",[i._v("要想表格内容水平垂直居中： text-align: center; vertical-align: middle;")])]),i._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[i._v("Grid(网格布局)(详细看)")]),i._v(" "),t("li",[i._v("css样式权重比较")]),i._v(" "),t("li",[i._v("https://www.jianshu.com/p/4c01c7913b40")])]),i._v(" "),t("h4",{attrs:{id:"延伸"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#延伸"}},[i._v("#")]),i._v(" 延伸：")]),i._v(" "),t("ul",[t("li",[t("ol",[t("li",[i._v("这五种方案各自的优缺点，这五种方案的兼容性如何，如何写在业务中，哪个最实用?")])]),i._v(" "),t("ul",[t("li",[i._v("浮动方案，\n"),t("ul",[t("li",[i._v("优点：快捷 简单 兼容性较好")]),i._v(" "),t("li",[i._v("缺点: 有局限性 脱离文档流 需要清除浮动等")])])]),i._v(" "),t("li",[i._v("绝对定位，好处是快捷，配合js使用非常快也不容易出问题，缺点是脱离文档流，下面所有子元素也脱离文档流，可用性较差")]),i._v(" "),t("li",[i._v("flex布局是为解决float布局和绝对定位布局的不足出现，较完美\n"),t("ul",[t("li",[i._v("优点：比较完美 移动端首选")]),i._v(" "),t("li",[i._v("缺点: 不兼容 ie9 及以下")])])]),i._v(" "),t("li",[i._v("表格布局，兼容性非常好，但三栏布局中，当中间单元格高度撑高时，两边也会跟着撑高，有局限性\n"),t("ul",[t("li",[i._v("优点：兼容性很好（ie8 及以上） 父元素高度会被子元素撑开（不担心高度塌陷）")]),i._v(" "),t("li",[i._v("缺点: seo 不友好 当其中一个单元格高度超出的时候，其他的单元格也是会跟着一起变高的")])])]),i._v(" "),t("li",[i._v("网格布局，使用css属性来实现之前模拟de网格布局，代码量减少很多\n"),t("ul",[t("li",[i._v("优点：简单强大 解决二维布局问题")]),i._v(" "),t("li",[i._v("缺点: 不兼容 ie9 及以下")])])])])]),i._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[i._v("假如把高度已知去掉，中间内容较多，把高度撑开了，两边的高度需要自适应撑开，哪种方案还可以适用，flex布局和表格布局,网格布局,绝对定位还能用")])]),i._v(" "),t("ul",[t("li",[i._v("浮动布局文字自动排版到左边了。（浮动的基本原理）")]),i._v(" "),t("li",[i._v("绝对定位撑开中间部分的布局，两边不变")]),i._v(" "),t("li",[i._v("flex 、table 布局中内容撑开盒子的高度 - better")]),i._v(" "),t("li",[i._v("grid 布局中内容中不撑开高度")]),i._v(" "),t("li",[i._v("关于浮动的问题有可以延伸出来，怎么解决内容向左排版的 bug 呢？创建 BFC ，那么 BFC 又是什么呢")])])])]),i._v(" "),t("h4",{attrs:{id:"flex-弹性盒子布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-弹性盒子布局"}},[i._v("#")]),i._v(" flex（弹性盒子布局）")]),i._v(" "),t("ul",[t("li",[i._v("http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html")]),i._v(" "),t("li",[i._v("容器的属性\n"),t("ul",[t("li",[i._v("flex-direction：属性决定主轴的方向（即项目的排列方向）")]),i._v(" "),t("li",[i._v("flex-wrap：属性定义，如果一条轴线排不下，如何换行，nowrap（默认）：不换行")]),i._v(" "),t("li",[i._v("flex-flow：属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap")]),i._v(" "),t("li",[i._v("justify-content：属性定义了项目在主轴上的对齐方式")]),i._v(" "),t("li",[i._v("align-items：属性定义项目在交叉轴上如何对齐")]),i._v(" "),t("li",[i._v("align-content：属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")])])]),i._v(" "),t("li",[i._v("项目的属性\n"),t("ul",[t("li",[i._v("order：属性定义项目的排列顺序。数值越小，排列越靠前，默认为0")]),i._v(" "),t("li",[i._v("flex-grow：属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。")]),i._v(" "),t("li",[i._v("flex-shrink：属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),i._v(" "),t("li",[i._v("flex-basis：计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。")]),i._v(" "),t("li",[i._v("flex：flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选，该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。")]),i._v(" "),t("li",[i._v("align-self：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性")])])])]),i._v(" "),t("h4",{attrs:{id:"grid-网格布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grid-网格布局"}},[i._v("#")]),i._v(" Grid(网格布局)")]),i._v(" "),t("ul",[t("li",[i._v("http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html")]),i._v(" "),t("li",[i._v("容器属性\n"),t("ul",[t("li",[i._v("display: grid指定一个容器采用网格布局")]),i._v(" "),t("li",[i._v("grid-template-columns属性定义每一列的列宽")]),i._v(" "),t("li",[i._v("grid-template-rows属性定义每一行的行高")]),i._v(" "),t("li",[i._v("grid-row-gap用于设置行间距，")]),i._v(" "),t("li",[i._v("grid-column-gap用于设置列间距")])])])]),i._v(" "),t("h4",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[i._v("#")]),i._v(" 总结：")]),i._v(" "),t("ol",[t("li",[i._v("语义化\n"),t("ul",[t("li",[i._v("article 容器，div 块， 标题 h1, 内容 p, 每个区域的划分 section, 不要通篇div")])])]),i._v(" "),t("li",[i._v("页面布局要理解深刻\n"),t("ul",[t("li",[i._v("每种方案的原理要理解清楚")])])]),i._v(" "),t("li",[i._v("css基础要扎实")]),i._v(" "),t("li",[i._v("思维要灵活\n"),t("ul",[t("li",[i._v("网格布局新技术")]),i._v(" "),t("li",[i._v("五种方案之间的优缺点比较")])])]),i._v(" "),t("li",[i._v("代码书写要规范")])]),i._v(" "),t("h4",{attrs:{id:"页面布局的变通"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#页面布局的变通"}},[i._v("#")]),i._v(" 页面布局的变通")]),i._v(" "),t("ol",[t("li",[i._v("三栏布局")])]),i._v(" "),t("ul",[t("li",[i._v("左右宽度固定，中间自适应")]),i._v(" "),t("li",[i._v("上下高度固定，中间自适应")])]),i._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[i._v("两栏布局")])]),i._v(" "),t("ul",[t("li",[t("p",[i._v("左宽度固定，右自适应")])]),i._v(" "),t("li",[t("p",[i._v("右宽度固定，左自适应")])]),i._v(" "),t("li",[t("p",[i._v("上高度固定，下自适应")])]),i._v(" "),t("li",[t("p",[i._v("下高度固定，上自适应")])]),i._v(" "),t("li",[t("ol",[t("li",[i._v("float+margin")])])])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('<div class="container">\n    <div class="left">Left</div>\n     \x3c!-- 右栏部分要写在中间内容之前 --\x3e\n    <div class="right">Right</div>\n    <div class="main">Main</div>\n</div>\n\n\nbody,html,.container{\n    height: 100%;\n    padding:0;\n    margin: 0;\n}\n/*左边栏左浮动*/\n.left{\n    float:left;\n    height:100%;\n    width:200px;\n    background:#333;\n}\n')])])]),t("ul",[t("li",[i._v("2.position（绝对布局）")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('<div class="container">\n    <div class="left">Left</div>\n    <div class="main">Main</div>\n    <div class="right">Right</div>\n</div>\n\n\nbody,html,.container{\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n}\n/*左右进行绝对定位*/\n.left,.right{\n    position: absolute;\n    height:100%;\n    top: 0;\n    background: #333;\n}\n.left{\n    left: 0;\n    width: 200px;\n}\n.right{\n    right: 0;\n    width: 200px;\n}\n/*中间用margin空出左右元素所占的空间*/\n.main{\n    height:100%;\n    margin: 0 200px;\n    background: red;\n}\n/*或者中间也进行绝对定位*/\n.main{\n    position: absolute;\n    height:100%;\n    left: 200px;\n    right:200px;\n    background: red;\n}\n\n')])])]),t("ul",[t("li",[i._v("3.flex（弹性盒子布局）")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('<div class="container">\n    <div class="left">Left</div>\n    <div class="main">Main</div>\n    <div class="right">Right</div>\n</div>\n\n\n body,html{\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n}\n.container{\n    display: flex;\n}\n.left{\n    width:200px;\n    background: red;\n}\n.main{\n    flex: 1;\n    background: blue;\n}\n.right{\n    width:200px;\n    background: red;\n}\n')])])]),t("ul",[t("li",[i._v("4.table(表格布局)")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('<div class="container">\n    <div class="left">Left</div>\n    <div class="main">Main</div>\n    <div class="right">Right</div>\n</div>\n\n\n body,html{\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n}\n.container{\n    display: table;\n    width:100%;\n}\n.container>div{\n    display: table-cell;\n}\n.left{\n    width: 200px;\n    background: red;\n}\n.main{\n    background: blue;\n}\n.right{\n    width: 200px;\n    background: red;\n}\n')])])]),t("ul",[t("li",[i._v("5.Grid(网格布局)")])]),i._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[i._v('<div class="container">\n    <div class="left">Left</div>\n    <div class="main">Main</div>\n    <div class="right">Right</div>\n</div>\n\n\n body,html{\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    overflow: hidden;\n}\n.container{\n    display: grid;\n    width: 100%;\n    grid-template-rows: 100px;  /*设置行高*/\n    grid-template-columns: 200px auto 200px;  /*设置列数属性*/\n}\n.left{\n    background: red;\n}\n.main{\n    background: blue;\n}\n.right{\n    background:red;\n}\n')])])]),t("ul",[t("li",[i._v("https://juejin.im/entry/6844903510522200072")]),i._v(" "),t("li",[i._v("页面水平垂直居中\n"),t("ul",[t("li",[i._v("负边距+absolute")]),i._v(" "),t("li",[i._v("absolute+left:0,right:0,top:0,bottom:0,margin: auto, 定宽或定高")]),i._v(" "),t("li",[i._v("flex")]),i._v(" "),t("li",[i._v("absolute+transform:translate(-50%,-50%)")])])])])])}),[],!1,null,null,null);l.default=v.exports}}]);