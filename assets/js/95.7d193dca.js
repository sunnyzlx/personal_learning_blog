(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{453:function(e,t,n){"use strict";n.r(t);var r=n(44),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"分析源码学架构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析源码学架构"}},[e._v("#")]),e._v(" 分析源码学架构")]),e._v(" "),n("h2",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[e._v("#")])]),e._v(" "),n("h3",{attrs:{id:"读源码技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读源码技巧"}},[e._v("#")]),e._v(" 读源码技巧")]),e._v(" "),n("ul",[n("li",[e._v("不要试图一句一句读下去")]),e._v(" "),n("li",[e._v("先理架构，再看入口，依流程读下去")])]),e._v(" "),n("h3",{attrs:{id:"读源码能给我们带来什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#读源码能给我们带来什么"}},[e._v("#")]),e._v(" 读源码能给我们带来什么？")]),e._v(" "),n("ul",[n("li",[e._v("优秀的架构和设计思维")]),e._v(" "),n("li",[e._v("对于所用工具有更深的理解")]),e._v(" "),n("li",[e._v("优秀的使用技巧")])]),e._v(" "),n("h2",{attrs:{id:"jquery架构分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery架构分析"}},[e._v("#")]),e._v(" jquery架构分析")]),e._v(" "),n("ul",[n("li",[e._v("没有模块化时代的一个典型的架构代表")])]),e._v(" "),n("h3",{attrs:{id:"架构特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#架构特点"}},[e._v("#")]),e._v(" 架构特点")]),e._v(" "),n("ul",[n("li",[e._v("利用工厂模式，无new化构建对象")]),e._v(" "),n("li",[e._v("模块划分明确")]),e._v(" "),n("li",[e._v("开闭原则的优秀体现")])]),e._v(" "),n("h3",{attrs:{id:"jquery技巧提炼"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jquery技巧提炼"}},[e._v("#")]),e._v(" jquery技巧提炼")]),e._v(" "),n("ul",[n("li",[e._v("优秀的参数处理（多态，健壮性）\n"),n("ul",[n("li",[e._v("多态，可以支持多种参数")]),e._v(" "),n("li",[e._v("健壮性，防止忘记传参数或者传错参数，导致报错")])])]),e._v(" "),n("li",[e._v("模块化支持的检测")])]),e._v(" "),n("h3",{attrs:{id:"无模块化时代模块封装特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#无模块化时代模块封装特点"}},[e._v("#")]),e._v(" 无模块化时代模块封装特点")]),e._v(" "),n("ul",[n("li",[e._v("工具库或者类似jquery这样的单页面的库")]),e._v(" "),n("li",[e._v("最外层是一个匿名自执行函数")]),e._v(" "),n("li",[e._v("然后将window和undefined作为参数传入\n"),n("ul",[n("li",[e._v("js变量查找，有一个作用域链，优先在当前作用域查找，找不到的话， 会沿作用域链，逐级向上查找")]),e._v(" "),n("li",[e._v("传入window，可以减少逐级向上查找的时间")]),e._v(" "),n("li",[e._v("undefined对于js来说，它是一个变量，而不是一个关键字，而null是一个关键字，所以不传null")])])]),e._v(" "),n("li",[e._v("暴露的jquery并不是jquery的实例化对象，而是一个工厂模式的工厂方法， 而vue是直接把类暴露出去了\n"),n("ul",[n("li",[e._v("这跟应用场景有关系，vue中有且只有一个根实例，全局只有一个new Vue()对象，其他的都是该对象的组件，所以vue需要对外暴露一个类")]),e._v(" "),n("li",[e._v("工厂模式，本身是一个方法， 我调用这个方法，告诉这个方法我需要什么东西，这个方法把你要的东西给出来")]),e._v(" "),n("li",[e._v("建立一个工厂方法，你只需要告诉这个工厂你要什么，他就会给你什么")]),e._v(" "),n("li",[e._v("工厂方法特别适合于快速创建大量对象的情况，而jquery需要大量的创建DOM对象，所以用工厂模式更合适")])])]),e._v(" "),n("li",[e._v("利用js引用类型的特点\njquery.prototype = jquery.prototype.init.prototype = jquery.fn 把这三个都指向jquery.prototype对象, 这样做修改时，只需要修改jquery.prototype对象即可，做到共享原型的效果")]),e._v(" "),n("li",[e._v("jquery的模块划分，是先实现一个extends工具方法，然后把很多功能划分为很多模块， 然后每个模块都作为一个单独的对象，通过extends方法将各个模块扩展进去，而不是一股脑的把模块方法挂载到jquery.prototype对象上，这样做不仅干净优雅 ，而且方便后期修改维护， 同时通过extends方法提供给我们一个扩展方法，既考虑到本身的模块化，又考虑到后期的修改和扩展")]),e._v(" "),n("li",[e._v("享元模式，目的：减少对象数量，做法：把这些对象分析，分析出私有的数据和方法，分析出公用的数据和方法\n"),n("ul",[n("li",[e._v("容错处理，是一种代码健壮性的体现，防止错误使用出现问题")])])]),e._v(" "),n("li",[e._v("模块化支持的检测"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("(function(window, undefined){\n  function jQuery(selector){\n    return new jQuery(selector) // 这样会造成循环调用，不对\n    return new jQuery.fn.init() //正确做法，无new化构建对象\n  }\n  \n  jQuery.prototype = {\n    init: function(){\n\n    }\n  }\n  // 享元模式\n  jQuery.extends = function(){\n    var target = arguments[0] || {}\n    var length = arguments.length\n    var i = 1\n    if(target!=='object'){\n      target = {}\n    }\n    if(length === 1){\n      target = this\n      i--\n    }\n    for(var item in arguments[i]){\n      target[item] = arguments[i][item]\n    }\n  }\n  jQuery.prototype = jQuery.prototype.init.prototype = jQuery.fn \n  // 利用js引用类型的特点，共享原型\n  // 把这三个都指向jQuery.prototype对象, 这样做修改时，只需要修改jQuery.prototype对象即可，做到共享原型的效果\n\n  window.jQuery = jQuery\n  window.$ = jQuery\n\n  // 模块化支持的检测\n  if(typeof define === 'function' && define.amd && define.amd.jQuery){\n    define('jquery', [], function(){ return jQuery }) //通过amd的规范把jquery暴露出来\n  }\n})(window,undefined)\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// vue中的模块化检测\n// commonJS支持和amd支持 \n(function(global, factory){\n  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Vue = factory())\n})(this, function(){\n  'use strict'\n})\n")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);