(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(e,t,n){"use strict";n.r(t);var a=n(44),v=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"dom事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dom事件"}},[e._v("#")]),e._v(" DOM事件")]),e._v(" "),n("h3",{attrs:{id:"_1-dom事件级别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-dom事件级别"}},[e._v("#")]),e._v(" 1.DOM事件级别")]),e._v(" "),n("ul",[n("li",[e._v("DOM 0级：写法：el.οnclick=function(){}")]),e._v(" "),n("li",[e._v("由于DOM 1级中没有事件的相关内容，所以没有DOM 1级事件")]),e._v(" "),n("li",[e._v("DOM 2级写法：el.addEventListener(event-name, callback, useCapture)\n"),n("ul",[n("li",[e._v("event-name: 事件名称，可以是标准的DOM事件")]),e._v(" "),n("li",[e._v("callback: 回调函数，当事件触发时，函数会被注入一个参数为当前的事件对象 event")]),e._v(" "),n("li",[e._v("useCapture: 默认是false，代表事件句柄在冒泡阶段执行")])])]),e._v(" "),n("li",[e._v("DOM 3级写法和DOM2级一致 只是在DOM 2级事件的基础上添加了更多的事件类型")])]),e._v(" "),n("h3",{attrs:{id:"_2-dom事件模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-dom事件模型"}},[e._v("#")]),e._v(" 2. DOM事件模型")]),e._v(" "),n("ul",[n("li",[e._v("捕获，冒泡")]),e._v(" "),n("li",[e._v("捕获是从上往下到达目标元素，冒泡是从当前元素，也就是目标元素往上到window。是两个过程。")])]),e._v(" "),n("h3",{attrs:{id:"_3-dom事件流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom事件流"}},[e._v("#")]),e._v(" 3. DOM事件流")]),e._v(" "),n("ul",[n("li",[e._v("（1）捕获阶段：事件从window对象自上而下向目标节点传播的阶段；")]),e._v(" "),n("li",[e._v("（2）目标阶段：真正的目标节点正在处理事件的阶段；")]),e._v(" "),n("li",[e._v("（3）冒泡阶段：事件从目标节点自下而上向window对象传播的阶段。")])]),e._v(" "),n("h3",{attrs:{id:"_4-描述dom事件捕获的具体流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-描述dom事件捕获的具体流程"}},[e._v("#")]),e._v(" 4. 描述DOM事件捕获的具体流程")]),e._v(" "),n("ul",[n("li",[e._v("捕获是从上到下，具体第一个真正接收的是window（对象）")]),e._v(" "),n("li",[e._v("第二个接收的是document（对象）")]),e._v(" "),n("li",[e._v("第三个接收的是html标签（document.documentElement）")]),e._v(" "),n("li",[e._v("第四个接收的是body（document.body）")]),e._v(" "),n("li",[e._v("......(父级--子级，剩下的就是按照普通的html结构一层一层往下传)——最后到达目标元素。")])]),e._v(" "),n("h3",{attrs:{id:"_5-描述dom事件冒泡的具体流程-与事件捕获正好相反"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-描述dom事件冒泡的具体流程-与事件捕获正好相反"}},[e._v("#")]),e._v(" 5. 描述DOM事件冒泡的具体流程（与事件捕获正好相反）")]),e._v(" "),n("ul",[n("li",[e._v("第一个接收的是目标元素")]),e._v(" "),n("li",[e._v("第二个接收的是...（子级--父级，按照html结构一层一层往上传）")]),e._v(" "),n("li",[e._v("然后接收的是body标签——html标签——document对象")]),e._v(" "),n("li",[e._v("最后一个接收的是window对象。")])]),e._v(" "),n("h3",{attrs:{id:"_6-事件委托-代理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-事件委托-代理"}},[e._v("#")]),e._v(" 6.事件委托（代理）")]),e._v(" "),n("ul",[n("li",[e._v("由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）")]),e._v(" "),n("li",[e._v("优点：\n"),n("ul",[n("li",[e._v("1.节省内存占用，减少事件注册")]),e._v(" "),n("li",[e._v("2.新增子对象时无需再次对其绑定事件，适合动态添加元素")])])])]),e._v(" "),n("h3",{attrs:{id:"_7-event对象使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-event对象使用"}},[e._v("#")]),e._v(" 7. Event对象使用")]),e._v(" "),n("ul",[n("li",[e._v("http://blog.sina.com.cn/s/blog_c112a2980102xktf.html")]),e._v(" "),n("li",[e._v("什么是事件对象？在触发DOM上的事件时都会产生一个对象，就是事件对象。事件对象event。")]),e._v(" "),n("li",[e._v("event.type， 获取绑定的事件类型,比如click，mouseover等")])]),e._v(" "),n("h4",{attrs:{id:"_1-阻止默认行为"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-阻止默认行为"}},[e._v("#")]),e._v(" 1.阻止默认行为：")]),e._v(" "),n("ul",[n("li",[e._v("event.preventDefault()")]),e._v(" "),n("li",[e._v("什么是默认事件呢？例如表单一点击提交按钮(submit)跳转页面、a标签默认页面跳转或是锚点定位等")])]),e._v(" "),n("h4",{attrs:{id:"_2-阻止冒泡"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-阻止冒泡"}},[e._v("#")]),e._v(" 2.阻止冒泡：")]),e._v(" "),n("ul",[n("li",[e._v("event.stopPropagation() 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行")]),e._v(" "),n("li",[e._v("stopImmediatePropagation 既能阻止事件向父元素冒泡，也能阻止元素同事件类型的其它监听器被触发, 当一个元素绑定多个事件处理程序的时候，事件会按照顺序全部执行，如果不想让后面的事件处理程序执行，就在当前事件里加这个方法，就不执行后面的事件处理程序了")])]),e._v(" "),n("h4",{attrs:{id:"_3-event-target-event-currenttarget"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-event-target-event-currenttarget"}},[e._v("#")]),e._v(" 3.event.target & event.currentTarget")]),e._v(" "),n("ul",[n("li",[e._v("event.target, 是真正触发事件的元素")]),e._v(" "),n("li",[e._v("event.currentTarget, 是当前监听事件者")])]),e._v(" "),n("h4",{attrs:{id:"_4-ie中的事件对象常用属性和方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-ie中的事件对象常用属性和方法"}},[e._v("#")]),e._v(" 4. IE中的事件对象常用属性和方法")]),e._v(" "),n("ul",[n("li",[e._v("event.type;//用于获取事件类型，比如click，mouseover等")]),e._v(" "),n("li",[e._v("event.srcElement;返回触发事件的元素，相当于常用的event.target")]),e._v(" "),n("li",[e._v("event.cancelBubble;//用于阻止事件冒泡，设置为true表示阻止冒泡，设置为false表示不阻止冒泡。")]),e._v(" "),n("li",[e._v("event.returnValue;//阻止事件的默认行为，比如阻止a的href链接。设置为false表示阻止事件的默认行为。")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function showMes（event）{\n   event=event || window.event;//ie8以前的浏览器需要用window.event\n   event.type;\n   event.srcElement;\n   event. srcElement.nodeName;\n   event.cancelBubble=true;\n   event.returnValue=false;\n}\n")])])]),n("h3",{attrs:{id:"_8-自定义事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-自定义事件"}},[e._v("#")]),e._v(" 8. 自定义事件")]),e._v(" "),n("ul",[n("li",[e._v("https://www.cnblogs.com/cwsb/p/10384219.html")])]),e._v(" "),n("h4",{attrs:{id:"_1-创建事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建事件"}},[e._v("#")]),e._v(" 1）创建事件,")]),e._v(" "),n("ul",[n("li",[e._v("Event是无法传递参数的， var event = new Event('build');")]),e._v(" "),n("li",[e._v("CustomEvent是可以传递参数的")]),e._v(" "),n("li",[e._v("var event = new CustomEvent('build', { detail: elem.dataset.time })")])]),e._v(" "),n("h4",{attrs:{id:"_2-监听事件-listen-for-the-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-监听事件-listen-for-the-event"}},[e._v("#")]),e._v(" 2）监听事件 Listen for the event.")]),e._v(" "),n("ul",[n("li",[e._v("elem.addEventListener('build', function (e) { //... }, false);")])]),e._v(" "),n("h4",{attrs:{id:"_3-分发-触发事件-dispatch-the-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-分发-触发事件-dispatch-the-event"}},[e._v("#")]),e._v(" 3）分发/触发事件 Dispatch the event.")]),e._v(" "),n("ul",[n("li",[e._v("elem.dispatchEvent(event);")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var eve = new Event('test')\nelem.addEventListener('test', function(){\n    console.log('event test')\n},false)\nelem.dispatchEvent(eve) //触发的是事件对象eve,  监听的是事件类型test\n")])])]),n("h3",{attrs:{id:"_8-手写eventemitter-发布订阅模式-简单版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-手写eventemitter-发布订阅模式-简单版"}},[e._v("#")]),e._v(" 8.手写EventEmitter(发布订阅模式--简单版)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('// 手写发布订阅模式 EventEmitter\n      class EventEmitter {\n        constructor() {\n          this.events = {};\n        }\n        // 实现订阅\n        on(type, callBack) {\n          if (!this.events) this.events = Object.create(null);\n\n          if (!this.events[type]) {\n            this.events[type] = [callBack];\n          } else {\n            this.events[type].push(callBack);\n          }\n        }\n        // 删除订阅\n        off(type, callBack) {\n          if (!this.events[type]) return;\n          this.events[type] = this.events[type].filter(item => {\n            return item !== callBack;\n          });\n        }\n        // 只执行一次订阅事件\n        once(type, callBack) {\n          function fn() {\n            callBack();\n            this.off(type, fn);\n          }\n          this.on(type, fn);\n        }\n        // 触发事件\n        emit(type, ...rest) {\n          this.events[type] &&\n            this.events[type].forEach(fn => fn.apply(this, rest));\n        }\n      }\n      // 使用如下\n      const event = new EventEmitter();\n\n      const handle = (...rest) => {\n        console.log(rest);\n      };\n      event.on("click", handle);\n\n      event.emit("click", 1, 2, 3, 4);\n\n      event.off("click", handle);\n\n      event.emit("click", 1, 2);\n\n      event.once("dbClick", () => {\n        console.log(123456);\n      });\n      event.emit("dbClick");\n      event.emit("dbClick");\n\n')])])])])}),[],!1,null,null,null);t.default=v.exports}}]);