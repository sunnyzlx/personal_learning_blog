# DOM

## DOM概述

DOM是javaScript操作网页的接口，称为‘文档对象模型’，它将网页转化为一个javaScript对象，从而可以用js进行各种操作。

DOM的最小组成单位叫做节点node, DOM树就是由各种不同类型的节点组成。节点的类型有7种：
  1. Document：整个文档树的顶层节点
  2. DocumentType：doctype标签（比如<!DOCTYPE html>）
  3. Element：网页的各种HTML标签（比如body、a等）
  4. Attribute：网页元素的属性（比如class="right"）
  5. Text：标签之间或标签包含的文本
  6. Comment：注释
  7. DocumentFragment：文档的片段
浏览器提供一个原生的节点对象Node，上面这七种节点都继承了Node，因此具有一些共同的属性和方法。

节点树
- 浏览器原生提供document节点，代表整个文档。
- 文档的第一层有两个节点，第一个是文档类型节点（<!doctype html>），第二个是 HTML 网页的顶层容器标签<html>。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。
- 除了根节点，其他节点都有三种层级关系。
  1. 父节点关系（parentNode）：直接的那个上级节点
  2. 子节点关系（childNodes）：直接的下级节点
  3. 同级节点关系（sibling）：拥有同一个父节点的节点

## Node接口

- 所有 DOM 节点对象都继承了 Node 接口，拥有一些共同的属性和方法。这是 DOM 操作的基础。
- 7种DOM节点分别为：

   1.文档节点（document）
   2.元素节点（element）
   3.属性节点（attr）
   4.文本节点（text）
   5.文档片段节点（DocumentFragment）
   6.文档类型节点（DocumentType）
   7.注释节点（Comment）
- 属性
1.  nodeType属性返回一个整数值，表示节点的类型
2.  nodeName属性返回节点的名称
3.  nodeValue属性返回一个字符串，表示当前节点本身的文本值，该属性可读写。
    
     - 只有文本节点（text）、注释节点（comment）和属性节点（attr）有文本值，因此这三类节点的nodeValue可以返回结果，其他类型的节点一律返回null。
4. textContent属性返回当前节点和它的所有后代节点的文本内容。
5. baseURI属性返回一个字符串，表示当前网页的绝对路径。
6. ownerDocument属性返回当前节点所在的顶层文档对象，即document对象。
7. nextSibling属性返回紧跟在当前节点后面的第一个同级节点。如果当前节点后面没有同级节点，则返回null。
8. previousSibling属性返回当前节点前面的、距离最近的一个同级节点。如果当前节点前面没有同级节点，则返回null。
9. parentNode属性返回当前节点的父节点。对于一个节点来说，它的父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentfragment）。
10. parentElement属性返回当前节点的父元素节点。如果当前节点没有父节点，或者父节点类型不是元素节点，则返回null。
11. firstChild属性返回当前节点的第一个子节点，如果当前节点没有子节点，则返回null。
12. childNodes属性返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点。
13. isConnected属性返回一个布尔值，表示当前节点是否在文档之中。
- 方法
1. appendChild()方法接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点。该方法的返回值就是插入文档的子节点。
2. hasChildNodes方法返回一个布尔值，表示当前节点是否有子节点。
3. cloneNode方法用于克隆一个节点。它接受一个布尔值作为参数，表示是否同时克隆子节点。它的返回值是一个克隆出来的新节点。
4. 


## Document节点

- 属性
1. document.defaultView属性返回document对象所属的window对象。
  document.defaultView === window  //true
2. document.doctype
    - document对象一般有2个子节点，第一个是文档类型节点，即document.doctype指向的<!DOCTYPE html>, document.firstChild就返回这个节点
    - 第二个是当前文档的根元素节点，即html 节点，document.documentElement属性指向的节点
3. document.documentElement返回当前文档的根元素节点
4. document.body属性指向<body>节点，document.head属性指向<head>节点
- 方法
1. 

## 关于元素高度的几点

- Element.clientHeight,  元素节点的css高度，只对块级生效，行内为0，除了元素本身的高度，还包括padding,不包括border,margin,如果有水平滚动条，要减去水平滚动条的高度
- Element.clientWidth, 元素节点的css宽度，其他与clientHeight一样
- document.documentElement.clientHeight,  返回当前视口，即可见窗口的高度，等于window.innerHeight属性减去水平滚动条的高度（如果有的话）
- document.body.clientHeight 返回网页的实际高度
- 一般来说，document.body.clientHeight大于等于document.documentElement.clientHeight
- // 视口高度
==document.documentElement.clientHeight==
- // 网页总高度
==document.body.clientHeight==
- Element.clientLeft 返回元素左边框（left border）的宽度，不包括padding 和 margin, 如果没有设置左边框，或者是行内元素，该属性返回0
- Element.clientHeight  返回元素顶部边框的宽度，其他特点与clientWidth相同
- ==Element.scrollHeight 表示当前元素的总高度，包括溢出容器，当前不可见的部分==，包括padding，不包括border,margin以及水平滚动条的高度，
- ==Element.scrollWidth属性表示当前元素的总宽度（单位像素）==，其他地方都与scrollHeight属性类似。这两个属性只读。
- // 返回网页的总高度
==document.documentElement.scrollHeight==
==document.body.==scrollHeight====
- ==Element.scrollLeft属性表示当前元素的水平滚动条向右侧滚动的像素数量==
- ==Element.scrollTop属性表示当前元素的垂直滚动条向下滚动的像素数量==
- 对于那些没有滚动条的网页元素，这两个属性总是等于0。
-==查看整张网页的水平的和垂直的滚动距离，要从document.documentElement元素上读取==。
- document.documentElement.scrollLeft
- document.documentElement.scrollTop
- Element.offsetHeight属性返回一个整数，表示元素的 CSS 垂直高度（单位像素），包括元素本身的高度、padding 和 border，以及水平滚动条的高度（如果存在滚动条）
- Element.offsetWidth属性表示元素的 CSS 水平宽度（单位像素），其他都与Element.offsetHeight一致。
- 这两个属性都是只读属性，只比Element.clientHeight和Element.clientWidth多了边框的高度或宽度。如果元素的 CSS 设为不可见（比如display: none;），则返回0。
- Element.offsetLeft返回当前元素左上角相对于Element.offsetParent节点的水平位移，Element.offsetTop返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。
- 
- Element.getBoundingClientRect()
- Element.==getBoundingClientRect方法返回一个对象==，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。
- getBoundingClientRect方法返回的rect对象，具有以下属性（全部为只读）。
    - x：元素左上角相对于视口的横坐标
    - y：元素左上角相对于视口的纵坐标
    - height：元素高度
    - width：元素宽度
    - left：元素左上角相对于视口的横坐标，与x属性相等
    - right：元素右边界相对于视口的横坐标（等于x + width）
    - top：元素顶部相对于视口的纵坐标，与y属性相等
    - bottom：元素底部相对于视口的纵坐标（等于y + height）
- window.getComputedStyle(elem, null) 获取指定元素的css样式
- getPropertyValue('height') 返回指定的CSS属性值

## 元素属性的相关方法

元素节点提供六个方法，用来操作属性
1. Element.getAttribute方法返回当前元素节点的指定属性。如果指定属性不存在，则返回null
2. Element.getAttributeNames()返回一个数组，成员是当前元素的所有属性的名字。如果当前元素没有任何属性，则返回一个空数组
3. Element.setAttribute方法用于为当前元素节点新增属性。如果同名属性已存在，则相当于编辑已存在的属性。该方法没有返回值
4. Element.hasAttribute方法返回一个布尔值，表示当前元素节点是否包含指定属性
5. Element.hasAttributes方法返回一个布尔值，表示当前元素是否有属性，如果没有任何属性，就返回false，否则返回true
6. Element.removeAttribute方法移除指定属性。该方法没有返回值
7. 在HTML元素上附加数据，供 JavaScript 脚本使用。一种解决方法是自定义属性。使用元素节点对象的dataset属性，它指向一个对象，可以用来操作 HTML 元素标签的data-*属性
