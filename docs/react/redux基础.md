# redux基础
- react本身是一个非常轻量级的视图层框架，想要构建大型应用，必须配套一个数据层框架
- redux=reducer+flux,
- redux的设计理念：把数据放到一个公共的数据管理区域store中管理，一个组件改变了store中的数据，其他组件就感知到store的变化，再来取数据，从而间接实现来组件间传递数据的功能


<img :src="$withBase('/assets/redux.png')">


## redux的工作流程
- React Component 借书的人
- Action Creator 要借什么书，说的这句话
  - action 是一个对象，有一个type属性
- Store 图书馆管理员 
  - state 三个特点，1）唯一的数据源 2）只读，改变state 的唯一方式是触发一个action 3)改变发生在reducer，是一个纯函数，是返回一个新的state,而不是修改旧的
- Reducers 记录本
  - reducer 是一个pure function，reducer中可以接收state，但绝不能改变state
- react中要改变state中的数据，首先要调用actionCreator创建一个action, action会通过dispatch方法传递给store,store再把之前的数据和action转发给reducer,reducer是一个纯函数，它接收到state和action之后呢，做一些处理之后，会返回一个新的state给到store,store用新的state替换掉之前的state数据，store数据发生改变时，react组件可以感知到store数据的改变，这个时候它从store中重新取数据，更新组件内容，页面就跟着更新了

## 拆分actionTypes
- 方便排错，字符串写错不会报错，而变量写错会报错

## 使用actionCreator统一创建action
- 提高代码的可维护性
- 有利于前端的自动化测试

## Redux设计和使用的三大原则
- store是唯一的
- 只有store能够改变自己的内容，
  - 不要误认为是reducer更新store中的数据，实际是store拿到reducer返回的数据，自己对自己的数据进行一次更新，reducer只可以接收state，但绝不能修改state
- reducer必须是个纯函数，
  - 纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
  - 一旦函数中有setTimeout，ajax请求，或者和日期相关的内容时，它都不再是一个纯函数了，所以reducer中不能有异步操作，也不能有跟日期时间相关的操作
  - 对传入的参数，进行了修改，即产生了副作用，这样也就不是纯函数了

## Redux的核心API
- createStore, 可以帮助我们创建一个store
- store.dispatch, 帮助我们派发action,这个action会传递给store
- store.getState, 可以帮助我们获取到store中所有的数据内容
- store.subscribe, 可以让我们订阅store的改变，当store发生改变，store.subscribe()接收的回调函数就会被执行