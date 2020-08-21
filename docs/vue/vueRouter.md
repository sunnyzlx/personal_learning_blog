# vueRouter

## Vue.use(vueRouter)
- 执行一下install方法
- install方法做了什么？
- 1. 挂载$router
- 2. 注册组件

- router做了什么？
- 1.解析路由配置
- 2.响应url变化
- 3.事件监听hashChange
- 4.组件切换？怎么切换？

## 编写vueRouter插件

### 任务分析
- 创建Router类
  - 解析routes配置，生成map，{ '/': Home, '/about': About}
  - 监听url变化
  - 声明，注册router-link，router-view

- 实现插件
  - 挂载$router
  - 声明$route
  - 注册组件
  - init()
### 路由
- 路由基础：路由导航，路由出口，动态参数，嵌套路由
- 编程导航，路由跳转，$router.push(）
  - 底层是h5的historyAPI,ta可以向历史记录的堆栈中去添加或弹出新的记录
)

## 编写Vuex插件

### 任务分析
- 实现Store类
  - store响应化处理
  - 保存状态，实现dispatch, commit, getters(作业)
- 实现插件
  - 挂载store实例

```
class MyVueRouter {
  constructor
}
```
