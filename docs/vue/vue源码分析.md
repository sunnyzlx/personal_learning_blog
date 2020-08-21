# vue源码分析
## 理通思路
### vue的初始化过程
- new Vue() => init => $mount => compile => render => 首次更新

### 入口文件：src/platforms/web/entry-runtime-with-compiler.js, 
- 扩展默认的$mount()方法，处理template或el选项，
- 执行mount.call(this, el, hydrating)

### src/platforms/web/runtime/index.js  
- 定义$mount()方法，
- 执行mountComponent(this, el, hydrating)，挂载根组件到指定宿主元素
- 定义__patch__：补丁函数，执行patching算法进行更新

### src/core/index.js， 
- 定义全局api, initGlobalAPI(Vue)
```
Vue.set = set
Vue.delete = del
Vue.nextTick = nextTick
initUse(Vue) // 实现Vue.use函数
initMixin(Vue) // 实现Vue.mixin函数
initExtend(Vue) // 实现Vue.extend函数
initAssetRegisters(Vue) // 注册实现Vue.component/directive/filter
```

### src/core/instance/index.js，
- Vue构造函数定义，初始化vue，调用this._init(options)
- 实例api定义
```
function Vue (options) { 
    // 构造函数仅执行了_init 
    this._init(options)
}
initMixin(Vue) // 实现init函数
stateMixin(Vue) // 状态相关api $data,$props,$set,$delete,$watch 
eventsMixin(Vue)// 事件相关api $on,$once,$off,$emit 
lifecycleMixin(Vue) // 生命周期api _update,$forceUpdate,$destroy 
renderMixin(Vue)// 渲染api _render,$nextTick
```
### src/core/instance/init.js
- 创建组件实例，初始化其数据、属性、事件等
```
initLifecycle(vm) // $parent,$root,$children,$refs initEvents(vm) // 处理父组件传递的监听器
initRender(vm) // $slots,$scopedSlots,_c,$createElement 
callHook(vm, 'beforeCreate')
initInjections(vm) // 获取注入数据
initState(vm) // 初始化props，methods，data，computed，watch 
initProvide(vm) // 提供数据注入
callHook(vm, 'created')

```
### mountComponent core/instance/lifecycle.js
- 执行挂载，执行渲染和更新，计算出虚拟dom，并将虚拟dom转化为真实dom

## 响应式原理
### Vue一大特点是数据响应式，数据的变化会作用于UI而不用进行DOM操作。原理上来讲，是利用了JS语 言特性Object.defineProperty()，通过定义对象属性setter方法拦截对象属性变更，从而将数值的变化 转换为UI的变化。
### 具体实现是在Vue初始化时，会调用initState，它会初始化data，props等，这里着重关注data初始 化，
- 在dep和watcher中互相保存对方的引用
- this.subs.push(sub),, this.newDeps.push(dep) 

## 依赖收集过程
- vue2.0中一个组件中默认只有一个watcher实例，即渲染watcher，
- 如果在有watch选项，则会额外的创建很多用户watcher，一个表达式对应一个watcher
- watcher在初始化的最后会执行一下getter函数，从而触发依赖收集

## 整个过程
- new Vue() => 挂载 => 编译 => 执行渲染函数 => 触发watcher的创建，执行getter函数，触发依赖收集

## 数组响应化
- vue2.0中修改数组，不能用索引，否则不能实现响应化
- 因为我们只对数组原型中的7个可以改变数组内容的方法定义了拦截器

## 响应化
- 针对对象， 首先执行一个observe()方法，它会返回一个Observer实例，Observer实例的作用是区分当前值的类型，是对象还是数组，然后遍历数据对象的所有key，对所有key去定义响应式，defineReactive(), defineReactive()里最重要的作用是创建Dep的实例，和当前key建立联系，dep.depend()方法的作用是，在Dep实例和watcher实例之间建立双向引用关系，还有一个作用是依赖收集

 ## 组件化
 1. 组件声明顺序：父先创建，子后创建；子先挂载，父后挂载
 2. 
 - 