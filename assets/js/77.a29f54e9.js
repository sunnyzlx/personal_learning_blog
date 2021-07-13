(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{435:function(e,t,a){"use strict";a.r(t);var s=a(44),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue源码分析"}},[e._v("#")]),e._v(" vue源码分析")]),e._v(" "),a("h2",{attrs:{id:"理通思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理通思路"}},[e._v("#")]),e._v(" 理通思路")]),e._v(" "),a("h3",{attrs:{id:"vue的初始化过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue的初始化过程"}},[e._v("#")]),e._v(" vue的初始化过程")]),e._v(" "),a("ul",[a("li",[e._v("new Vue() => init => $mount => compile => render => 首次更新")])]),e._v(" "),a("h3",{attrs:{id:"入口文件-src-platforms-web-entry-runtime-with-compiler-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入口文件-src-platforms-web-entry-runtime-with-compiler-js"}},[e._v("#")]),e._v(" 入口文件：src/platforms/web/entry-runtime-with-compiler.js,")]),e._v(" "),a("ul",[a("li",[e._v("扩展默认的$mount()方法，处理template或el选项，")]),e._v(" "),a("li",[e._v("执行mount.call(this, el, hydrating)")])]),e._v(" "),a("h3",{attrs:{id:"src-platforms-web-runtime-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-platforms-web-runtime-index-js"}},[e._v("#")]),e._v(" src/platforms/web/runtime/index.js")]),e._v(" "),a("ul",[a("li",[e._v("定义$mount()方法，")]),e._v(" "),a("li",[e._v("执行mountComponent(this, el, hydrating)，挂载根组件到指定宿主元素")]),e._v(" "),a("li",[e._v("定义__patch__：补丁函数，执行patching算法进行更新")])]),e._v(" "),a("h3",{attrs:{id:"src-core-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-core-index-js"}},[e._v("#")]),e._v(" src/core/index.js，")]),e._v(" "),a("ul",[a("li",[e._v("定义全局api, initGlobalAPI(Vue)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Vue.set = set\nVue.delete = del\nVue.nextTick = nextTick\ninitUse(Vue) // 实现Vue.use函数\ninitMixin(Vue) // 实现Vue.mixin函数\ninitExtend(Vue) // 实现Vue.extend函数\ninitAssetRegisters(Vue) // 注册实现Vue.component/directive/filter\n")])])]),a("h3",{attrs:{id:"src-core-instance-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-core-instance-index-js"}},[e._v("#")]),e._v(" src/core/instance/index.js，")]),e._v(" "),a("ul",[a("li",[e._v("Vue构造函数定义，初始化vue，调用this._init(options)")]),e._v(" "),a("li",[e._v("实例api定义")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function Vue (options) { \n    // 构造函数仅执行了_init \n    this._init(options)\n}\ninitMixin(Vue) // 实现init函数\nstateMixin(Vue) // 状态相关api $data,$props,$set,$delete,$watch \neventsMixin(Vue)// 事件相关api $on,$once,$off,$emit \nlifecycleMixin(Vue) // 生命周期api _update,$forceUpdate,$destroy \nrenderMixin(Vue)// 渲染api _render,$nextTick\n")])])]),a("h3",{attrs:{id:"src-core-instance-init-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-core-instance-init-js"}},[e._v("#")]),e._v(" src/core/instance/init.js")]),e._v(" "),a("ul",[a("li",[e._v("创建组件实例，初始化其数据、属性、事件等")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("initLifecycle(vm) // $parent,$root,$children,$refs initEvents(vm) // 处理父组件传递的监听器\ninitRender(vm) // $slots,$scopedSlots,_c,$createElement \ncallHook(vm, 'beforeCreate')\ninitInjections(vm) // 获取注入数据\ninitState(vm) // 初始化props，methods，data，computed，watch \ninitProvide(vm) // 提供数据注入\ncallHook(vm, 'created')\n\n")])])]),a("h3",{attrs:{id:"mountcomponent-core-instance-lifecycle-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mountcomponent-core-instance-lifecycle-js"}},[e._v("#")]),e._v(" mountComponent core/instance/lifecycle.js")]),e._v(" "),a("ul",[a("li",[e._v("执行挂载，执行渲染和更新，计算出虚拟dom，并将虚拟dom转化为真实dom")])]),e._v(" "),a("h2",{attrs:{id:"响应式原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[e._v("#")]),e._v(" 响应式原理")]),e._v(" "),a("h3",{attrs:{id:"vue一大特点是数据响应式-数据的变化会作用于ui而不用进行dom操作。原理上来讲-是利用了js语-言特性object-defineproperty-通过定义对象属性setter方法拦截对象属性变更-从而将数值的变化-转换为ui的变化。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue一大特点是数据响应式-数据的变化会作用于ui而不用进行dom操作。原理上来讲-是利用了js语-言特性object-defineproperty-通过定义对象属性setter方法拦截对象属性变更-从而将数值的变化-转换为ui的变化。"}},[e._v("#")]),e._v(" Vue一大特点是数据响应式，数据的变化会作用于UI而不用进行DOM操作。原理上来讲，是利用了JS语 言特性Object.defineProperty()，通过定义对象属性setter方法拦截对象属性变更，从而将数值的变化 转换为UI的变化。")]),e._v(" "),a("h3",{attrs:{id:"具体实现是在vue初始化时-会调用initstate-它会初始化data-props等-这里着重关注data初始-化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体实现是在vue初始化时-会调用initstate-它会初始化data-props等-这里着重关注data初始-化"}},[e._v("#")]),e._v(" 具体实现是在Vue初始化时，会调用initState，它会初始化data，props等，这里着重关注data初始 化，")]),e._v(" "),a("ul",[a("li",[e._v("在dep和watcher中互相保存对方的引用")]),e._v(" "),a("li",[e._v("this.subs.push(sub),, this.newDeps.push(dep)")])]),e._v(" "),a("h2",{attrs:{id:"依赖收集过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集过程"}},[e._v("#")]),e._v(" 依赖收集过程")]),e._v(" "),a("ul",[a("li",[e._v("vue2.0中一个组件中默认只有一个watcher实例，即渲染watcher，")]),e._v(" "),a("li",[e._v("如果在有watch选项，则会额外的创建很多用户watcher，一个表达式对应一个watcher")]),e._v(" "),a("li",[e._v("watcher在初始化的最后会执行一下getter函数，从而触发依赖收集")])]),e._v(" "),a("h2",{attrs:{id:"整个过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整个过程"}},[e._v("#")]),e._v(" 整个过程")]),e._v(" "),a("ul",[a("li",[e._v("new Vue() => 挂载 => 编译 => 执行渲染函数 => 触发watcher的创建，执行getter函数，触发依赖收集")])]),e._v(" "),a("h2",{attrs:{id:"数组响应化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组响应化"}},[e._v("#")]),e._v(" 数组响应化")]),e._v(" "),a("ul",[a("li",[e._v("vue2.0中修改数组，不能用索引，否则不能实现响应化")]),e._v(" "),a("li",[e._v("因为我们只对数组原型中的7个可以改变数组内容的方法定义了拦截器")])]),e._v(" "),a("h2",{attrs:{id:"响应化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应化"}},[e._v("#")]),e._v(" 响应化")]),e._v(" "),a("ul",[a("li",[e._v("针对对象， 首先执行一个observe()方法，它会返回一个Observer实例，Observer实例的作用是区分当前值的类型，是对象还是数组，然后遍历数据对象的所有key，对所有key去定义响应式，defineReactive(), defineReactive()里最重要的作用是创建Dep的实例，和当前key建立联系，dep.depend()方法的作用是，在Dep实例和watcher实例之间建立双向引用关系，还有一个作用是依赖收集")])]),e._v(" "),a("h2",{attrs:{id:"组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[e._v("#")]),e._v(" 组件化")]),e._v(" "),a("ol",[a("li",[e._v("组件声明顺序：父先创建，子后创建；子先挂载，父后挂载")]),e._v(" "),a("li")]),e._v(" "),a("ul",[a("li")])])}),[],!1,null,null,null);t.default=i.exports}}]);