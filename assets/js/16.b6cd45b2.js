(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{373:function(e,t,v){"use strict";v.r(t);var l=v(44),_=Object(l.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"document"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[e._v("#")]),e._v(" Document")]),e._v(" "),v("ul",[v("li",[e._v("DOM是javascript操作网页的接口，全称'文档对象模型'。")]),e._v(" "),v("li",[e._v("dom的最小组成单位是节点，文档的树形结构，即dom树")]),e._v(" "),v("li",[e._v("节点类型共7种：\n"),v("ul",[v("li",[e._v("文档节点")]),e._v(" "),v("li",[e._v("文档类型节点")]),e._v(" "),v("li",[e._v("元素节点")]),e._v(" "),v("li",[e._v("属性节点")]),e._v(" "),v("li",[e._v("文本节点")]),e._v(" "),v("li",[e._v("注释节点")]),e._v(" "),v("li",[e._v("文档片段节点")])])])]),e._v(" "),v("h2",{attrs:{id:"节点树"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点树"}},[e._v("#")]),e._v(" 节点树")]),e._v(" "),v("ul",[v("li",[e._v("浏览器原生提供document节点，代表整个文档，是顶层节点")]),e._v(" "),v("li",[e._v("文档的第一层有两个节点，文档类型节点<!doctype html>和html网页的顶层容器标签<\\html>\\，后者是整个树结构的根节点")]),e._v(" "),v("li",[e._v("除了根节点，其他节点都有三种层级关系\n"),v("ul",[v("li",[e._v("父节点，parentNode")]),e._v(" "),v("li",[e._v("子节点, childNodes")]),e._v(" "),v("li",[e._v("同级节点，sibling")])])])]),e._v(" "),v("h2",{attrs:{id:"节点属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点属性"}},[e._v("#")]),e._v(" 节点属性")]),e._v(" "),v("ul",[v("li",[e._v("nodeType, 节点类型")]),e._v(" "),v("li",[e._v("nodeName, 节点名称")]),e._v(" "),v("li",[e._v("nodeValue, 当前节点本身的文本值，只有文本节点，属性节点，注释节点有nodeValue")]),e._v(" "),v("li",[e._v("textContent, 当前节点和它的所有后代节点的文本内容,自动忽略当前节点内部的 HTML 标签，返回所有文本内容")]),e._v(" "),v("li",[e._v("nextSibling, 紧跟在当前节点后面的第一个同级节点,该属性还包括文本节点和注释节点")]),e._v(" "),v("li",[e._v("previousSibling, 当前节点前面的、距离最近的一个同级节点,该属性还包括文本节点和注释节点")]),e._v(" "),v("li",[e._v("parentNode, 当前节点的父节点, 父节点只可能是三种类型：元素节点（element）、文档节点（document）和文档片段节点（documentFragment）")]),e._v(" "),v("li",[e._v("parentElement, 当前节点的父元素节点")]),e._v(" "),v("li",[e._v("firstChild, 当前节点的第一个子节点, 子节点除了元素节点，还可能是文本节点或注释节点")]),e._v(" "),v("li",[e._v("lastChild, 当前节点的最后一个子节点")]),e._v(" "),v("li",[e._v("childNodes, 返回一个类似数组的对象（NodeList集合），成员包括当前节点的所有子节点")]),e._v(" "),v("li",[e._v("除了元素节点，childNodes属性的返回值还包括文本节点和注释节点")])]),e._v(" "),v("h2",{attrs:{id:"节点方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#节点方法"}},[e._v("#")]),e._v(" 节点方法")]),e._v(" "),v("ul",[v("li",[e._v("appendChild()")]),e._v(" "),v("li",[e._v("hasChildNodes()")]),e._v(" "),v("li",[e._v("removeChild()")]),e._v(" "),v("li",[e._v("replaceChild()")]),e._v(" "),v("li",[e._v("cloneNode()")]),e._v(" "),v("li",[e._v("insertBefore()")])]),e._v(" "),v("h2",{attrs:{id:"nodelist"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nodelist"}},[e._v("#")]),e._v(" NodeList")]),e._v(" "),v("ul",[v("li",[e._v("可以包含各种类型的节点")]),e._v(" "),v("li",[e._v("获取NodeList实例：\n"),v("ul",[v("li",[e._v("Node.childNodes")]),e._v(" "),v("li",[e._v("document.querySelectorAll()")])])]),e._v(" "),v("li",[e._v("NodeList实例是一个类似数组的对象")])]),e._v(" "),v("h3",{attrs:{id:"nodelist属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nodelist属性"}},[e._v("#")]),e._v(" NodeList属性")]),e._v(" "),v("ul",[v("li",[e._v("length")])]),e._v(" "),v("h3",{attrs:{id:"nodelist方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nodelist方法"}},[e._v("#")]),e._v(" NodeList方法")]),e._v(" "),v("ul",[v("li",[e._v("forEach()")]),e._v(" "),v("li",[e._v("item()")]),e._v(" "),v("li",[e._v("keys()")]),e._v(" "),v("li",[e._v("values()")]),e._v(" "),v("li",[e._v("entries()")])]),e._v(" "),v("h2",{attrs:{id:"htmlcollection"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#htmlcollection"}},[e._v("#")]),e._v(" HTMLCollection")]),e._v(" "),v("ul",[v("li",[e._v("只能包含 HTML 元素节点")]),e._v(" "),v("li",[e._v("length属性，item(), namedItem()方法")])]),e._v(" "),v("h2",{attrs:{id:"document-节点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#document-节点"}},[e._v("#")]),e._v(" Document 节点")]),e._v(" "),v("h2",{attrs:{id:"parentnode-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parentnode-接口"}},[e._v("#")]),e._v(" ParentNode 接口")]),e._v(" "),v("ul",[v("li",[e._v("children, 返回当前节点的所有元素子节点")]),e._v(" "),v("li",[e._v("firstElementChild, 返回当前节点的第一个元素子节点")]),e._v(" "),v("li",[e._v("lastElementChild, 返回当前节点的最后一个元素子节点")]),e._v(" "),v("li",[e._v("append(), 追加子节点，位置是最后一个元素子节点的后面")]),e._v(" "),v("li",[e._v("prepend(), 追加子节点，位置是第一个元素子节点的前面")])]),e._v(" "),v("h2",{attrs:{id:"childnode-接口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#childnode-接口"}},[e._v("#")]),e._v(" ChildNode 接口")]),e._v(" "),v("ul",[v("li",[e._v("remove(), 从父节点移除当前节点")]),e._v(" "),v("li",[e._v("before(), 在当前节点的前面，插入一个或多个同级节点")]),e._v(" "),v("li",[e._v("after(), 在当前节点的后面，插入一个或多个同级节点")])])])}),[],!1,null,null,null);t.default=_.exports}}]);