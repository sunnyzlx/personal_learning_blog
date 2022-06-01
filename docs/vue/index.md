# vue
## vue基础
- el, 限制了vue接管DOM的一个范围
- 前端组件化, 提高复用和后期的可维护性，每个组件其实就是页面上的一个区域
- vue生命周期函数, 就是vue实例在某一个时间点会自动执行的函数
  - 初始化vue实例时，首先会初始化事件和生命周期，做一个基础的初始化，之后会调用beforeCreate, 
  之后会处理一些外部的注入和数据绑定，这一步vue实例初始化完成，会调用created, 之后会询问vue实例是否有el选项，即挂载点
- 组件, 全局组件, 局部组件
- vm, 指vue实例对象
- 以$开头的属性，是vue的实例属性
- 计算属性与方法
  - 计算属性会基于他们的依赖进行缓存，只有依赖发生改变，他们才会重新求值
  - 而方法在每次触发重新渲染时，都会重新求值
  - 如果没有缓存，我们将不可避免的多次执行计算属性的getter,而这个计算属性性能开销又比较大，那我们将会浪费很多性能
  - 计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
- vue侦听器
  - vue 通过watch选项，来响应数据的变化
  - 使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的

## vue最佳实践
### 如何利用vue+webpack提升代码效率---精简化，高效化
- 化繁为简的watch, 字面量名称
```
immediate: true, //创建组件时，立马执行一次

value: {
      handler: 'doSomething',
      immediate: true
    }
```
- render函数的妙用
  - vue推荐在绝大多数情况下使用template创建html，但有一些场景我们需要js完全编程的能力，这就是render函数，它比template更接近编译器
  - render函数的优点：
    - ta更接近编译器
    - 使代码精简
    - 可以渲染标签，并添加进虚拟DOM中 
- 全局组件引入
  - webpack的require.context() 批量引入
  - 建立一个common文件夹，存放所有需要全局引入的组件
- 总路由动态引入，并实现懒加载，做路由分区，方便业务管理 
  - 把不同的业务分成不同的块，然后在总路由中进行引入

## vue自定义插件库及npm集成
- vue插件封装
  - 插件与组件的关系
    - 组件是对某功能或某模块的封装，如alert，loading
    - 插件是对一系列组件的封装，如vuex, vue-loader
    - 关系：插件可以封装组件，组件可以暴露数据给插件
  - 插件的优点
    - 开箱即用
    - 功能比组件更强大，更丰富
    - 可全局引入，使用方便
    - 可以打包，脱离项目存在
  - vue插件分类
    - install， vue实例， mixin, directive
    - 可以添加全局方法或属性，如vue-element
    - 可以添加全局资源：指令/过滤器/过渡等，如vue-touch
    - 通过全局minin方法添加一些组件选项，如vuex
    - 添加vue实例方法，通过把它们添加到Vue.prototype上实现
- 集成到npm
- 插件优化
## vue响应式原理
- 