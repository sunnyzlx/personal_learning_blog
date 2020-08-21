## Document
- DOM是javascript操作网页的接口，全称'文档对象模型'。
- dom的最小组成单位是节点，文档的树形结构，即dom树
- 节点类型共7种：
  - 文档节点
  - 文档类型节点
  - 元素节点
  - 属性节点
  - 文本节点
  - 注释节点
  - 文档片段节点

## 节点树
- 浏览器原生提供document节点，代表整个文档，是顶层节点
- 文档的第一层有两个节点，文档类型节点<!doctype html>和html网页的顶层容器标签<\html>\，后者是整个树结构的根节点
- 除了根节点，其他节点都有三种层级关系
  - 父节点，parentNode
  - 子节点, childNodes
  - 同级节点，sibling
## 节点属性
  - nodeType, 节点类型
  - nodeName, 节点名称
  - nodeValue, 当前节点本身的文本值，只有文本节点，属性节点，注释节点有nodeValue
  - textContent, 当前节点和它的所有后代节点的文本内容,自动忽略当前节点内部的 HTML 标签，返回所有文本内容
  - nextSibling, 紧跟在当前节点后面的第一个同级节点,该属性还包括文本节点和注释节点
  - previousSibling, 当前节点前面的、距离最近的一个同级节点,该属性还包括文本节点和注释节点
  - parentNode, 当前节点的父节点, 父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentFragment）
  - parentElement, 当前节点的父元素节点
  - firstChild, 当前节点的第一个子节点, 子节点除了元素节点，还可能是文本节点或注释节点
  - lastChild, 当前节点的最后一个子节点
  - childNodes, 返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点
  - 除了元素节点，childNodes属性的返回值还包括文本节点和注释节点
  ## 节点方法
  - appendChild()
  - hasChildNodes()
  - removeChild()
  - replaceChild()
  - cloneNode() 
  - insertBefore()
  ## NodeList
  - 可以包含各种类型的节点
  - 获取NodeList实例：
    - Node.childNodes
    - document.querySelectorAll()
  - NodeList实例是一个类似数组的对象
  ### NodeList属性
  - length
  ### NodeList方法
  - forEach()
  - item()
  - keys()
  - values()
  - entries()
  ## HTMLCollection
  - 只能包含 HTML 元素节点
  - length属性，item(), namedItem()方法
  ## Document 节点
  ## ParentNode 接口
  - children, 返回当前节点的所有元素子节点
  - firstElementChild, 返回当前节点的第一个元素子节点
  - lastElementChild, 返回当前节点的最后一个元素子节点
  - append(), 追加子节点，位置是最后一个元素子节点的后面
  - prepend(), 追加子节点，位置是第一个元素子节点的前面
  ## ChildNode 接口
  - remove(), 从父节点移除当前节点
  - before(), 在当前节点的前面，插入一个或多个同级节点
  - after(), 在当前节点的后面，插入一个或多个同级节点