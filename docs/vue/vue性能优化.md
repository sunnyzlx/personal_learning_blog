# vue性能优化
- vue本身的性能优化已经做得很好了，vue组件级的响应式以及组件内的虚拟dom，两者配合，更新的颗粒度的控制都做得很好，甚至不需要时间切片来优化项目大小，项目本身已经足够小了
- 主要的性能问题集中在工程化和项目的写法上

## 主要考虑以下几个方面
### 内存泄漏，内存清理（beforeCreate）,定时器，自定义事件及时释放
### 避免一些无意义的响应式赋值， mounted后this.xx赋值
### 预渲染（Prerender), 按需加载，异步组件（比如echarts）
### 横向扩展（运维，负载均衡）
### 扁平化数据设计（data和store）

## 组件化
- 参考elementUI,每个类型实现一个，实现核心功能即可
### 虚拟列表
- 没有key, 怎么重用dom
- 每个元素高度并不是写死的
- handleScroll考虑截流防抖
- 无限滚动  滚动翻页
### Notice.vue
- plugin.js,作用：1）将notice.vue组件挂载到原型链之上，2）把组件创建出来挂载到body之上，并且定义remove方法，在隐藏同时删除dom节点

## ssr
## 权限
## 浏览器原理
## 网络协议
## vue3
- 新的api-composition, 类似react的hooks
- 全面的ts的支持
- Proxy取代defineProperty，性能更好，但是兼容性更差
- vdom重构，更细致的静态标记

## vue源码
- 代码看不懂时优先看test,帮助理解
- v-if就是三元表达式

- $mount(), new Vue({})没有配置render(),写的是template, 拿到template字符串，调用编译模块，把tempalte解析成render()函数，返回虚拟dom, 如果没有compiler模块，就不能写template,要直接写render()函数
- 没带compiler的$mount,作用很简单，即挂载一个组件， mountComponent()
- Vue.use(plugin) 安装插件， Vue.mixin({}) 合并参数，Vue.extend()，继承，返回一个vue的子类，最常用的是use和extend
 
### 响应式
- vm --> __ob__(Observer) --> Dep 依赖 --> subs -> watcher(干活的)
- data --> defineReactive --> defineProperty --> Dep
- data == get depend ==> Dep == add ==> renderWatcher => 渲染更新
       == set notify ==>     == update==>
- 一个组件一个渲染watcher, watcher和computed是普通的watcher，普通的watcher, 难点是缓存 

### 2个核心模块：compile和vdom
#### compile
- 把template编译为render()函数，render(）函数执行生成vdom
- template ==> render(),经过parse解析，optimize优化，codegen生成

#### vdom
- vdom 是用js对象来完整的描述js标签，在修改之前，先用js先算一遍，达到最少操作dom
- Reactive，是数据变了，通知更新,而vdom是数据变了，通过diff计算需要更新的元素
- vue1.0中没有vdom, vue2.0响应式watcher只通知到组件，组件内通过vdom来更新，从而减少watcher的粒度

### vue与react中的vdom的异同
- 相同： 他们的vdom 都是为了解决复杂项目在浏览器中更加流畅的交互
- 不同： vue中是利用vdom和reactive,将任务做得足够细，vue中在两端进行来四次预判，利用key复用dom, react中是利用fiber(切片)，核心是将树形结构变为链表结构，每次diff的时候都可以中断，利用request的callback,利用浏览器的空闲时间来做diff, 导致任务再大浏览器不会卡顿，因为利用的是浏览器的空闲时间

### vue的整个流程
#### 1.
- initMixin(Vue), _init,
- stateMixin(Vue), $data,$props,$set,$delete,$watch
- eventsMixin(Vue), $on,$once,$off,$emit
- lifecycleMixin(Vue), _update,$forceUpdate,$destory, mountComponent,updateChildComponent,callHook
- renderMixin(Vue), installRenderHelpers,$nextTick,_render
#### 2._init,
- initLifecycle(vm), 初始化$parent,$root,$children,$refs
- initEvents(vm), 
- initRender(vm), 初始化$slots,$scopedSlots,$createElement,$attrs,$listeners
- callHook(vm, 'beforeCreate'),
- initInjections(vm),
- initState(vm), 初始化initProps,initMethods,initData,initComputed,initWatch
- initProvide(vm),
- callHook(vm, 'created')
- vm.$mount(vm.$options.el)
#### 3.vm.$mount(vm.$options.el)
- platforms/web/entry-runtime-with-compiler.js中的$mount, 看看有没有render选项，如果有,直接执行mount.call(this, el, hydrating),如果没有，解析template或el选项为render函数，再执行
- mount.call(this, el, hydrating),是platforms/web/runtime/index中的$mount,不带编译器的compiler的$mount,作用很简单，就是挂载一个组件，执行mountComponent()
#### 4.mountComponent()
- mountComponent在core/instance/lifecycle.js中
- 初始化$el,callHook(vm, 'beforeMount'),定义updateComponent函数,初始化new Watcher(vm, updateComponent),
#### 5.new Watcher(vm, updateComponent)
- this.value = this.lazy? undefined : this.get()
- this.get()中value = this.getter.call(vm, vm),即执行更新函数
updateComponent()
#### 6.updateComponent()
- vm._update(vm._render(), hydrating)
- _render()函数,将template转换为vdom
- _update()函数，将vdom转为真实dom, parse解析，optimise优化，codegen生成
#### 7.整个过程
- new Vue(options) -> this._init(options) -> initLifecycle(vm),initEvents(vm),initRender(vm),callHook(vm, 'beforeCreate'),initInjections(vm),initState(vm),initProvide(vm),callHook(vm, 'created'),vm.$mount(vm.$options.el) -> 