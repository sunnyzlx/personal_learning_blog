# redux进阶

## UI组件和容器组件
- 有些时候，当我们把一个组件的逻辑和渲染都放到同一个组件去管理时，这个组件的维护就会显得比较困难，所以，我们可以对这个组件做拆分
- UI组件只负责页面渲染，傻瓜组件，没有任何的逻辑处理
- 容器组件只负责页面逻辑处理，聪明组件，只负责组件的业务逻辑，功能实现，不负责任何的UI渲染

## 无状态组件
- 当一个普通的组件中只有render函数时，建议可以用一个无状态组件来替换它，无状态组件，其实就是一个函数，它的性能是最优的
- 无状态组件，相对于普通组件的优势：
  - 性能比较高，因为它就是一个函数，而普通组件，它是js中的一个类，这个类生成的对象中，还会有生命周期函数，所以它在执行时，既要执行生命周期函数，又要执行render函数，远比一个函数要执行的东西要多得多
- 一般UI组件都可以用无状态组件来优化，但也不是绝对的，有时UI组件也会负责一些简单的业务逻辑，是否改写要视情况而定

## Redux中发送异步请求获取数据
- 使用axios发送异步请求

## 使用Redux-thunk中间件实现ajax数据请求
- 通过redux创建store的时候，才会使用中间件，这个中间件是redux的中间件，而非react的
- redux-thunk， redux-devtools-extentions都是redux的中间件
- 使用redux-thunk后，actionCreator返回的就不仅可以是一个对象，还可以是一个函数，该函数接收两个参数，dispatch和getState,他们都是store的方法
```
// 查询指南
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducer, enhancer);
export default store
```
- 使用方法
  - 安装redux-thunk npm i redux-thunk --save
  - 依照官方文档配置store的index.js，使react既可以使用react-thunk中间件，又可以使用redux-devtools-extentions这个开发者工具
  - 配置好redux-thunk环境后，我们就可以在action中写异步的代码，即action不仅可以是一个JS对象，还可以是一个函数，在这个函数中，我们就可以执行异步操作
  - store.dispatch(action)时，发现action不是一个对象，而是一个函数，就会帮我们自动执行一下这个函数
  - 随着代码量的增多，把异步操作都放到生命周期函数中来，会使代码变得很复杂，不好管理，所以应该把复杂的业务逻辑和异步逻辑拆分到一个地方去管理
  - 现在借助redux-thunk,我们就可以把这些复杂的业务逻辑包括异步请求放到createAction中去管理，而且还方便作自动化测试
- redux-thunk中间件的底层原理
  - redux是action和store之间的一个中间件
  - 在redux中action只能是一个对象，使用redux-thunk之后，action可以是一个函数了
  - redux-thunk中间件其实是对store的dispatch的方法的一个封装和升级，ta会根据参数的不同，执行不同的事情，如果参数是一个对象，ta会直接传递给store，如果参数是一个函数，ta会先执行一下这个函数
- redux的其他常用中间件
  - redux-logger 可以记录action每次派发的日志，原理：每次在传递action之前，通过console.log把这个action打印出来，这样就可以在每次派发action之前，把这个action的信息打印出来 
  - redux-saga 也是解决react中异步问题的一个中间件，不同与redux-thunk,redux-thunk是把异步操作放到action中去操作，redux-saga则是单独的把异步逻辑拆分出来，放到另一个文件中去管理
## redux-saga中间件的使用 ？？
- 中间指的是action和store的中间，所以它指的是redux的中间件，而不是react的，只有redux中才有action和store 的概念

## React-Redux的使用
- React-Redux是一个第三方模块，ta可以帮助我们更加方便的使用Redux
- Provider 第一个核心api，提供器，作用：关联store, 使其下所有的子组件都有能力获取到store中的数据
```
npm install react-redux --save
import { Provider } from 'react-redux'
import store from './store'

const App = (
  <Provider store={store}>
	  <TodoList />
	</Provider>
)

ReactDOM.render(App, document.getElementById('root'))
```
- connect 第二个核心api，连接器，作用：connect使TodoList组件与store，以一定的映射关系做连接
- mapStateToProps和mapDispatchToProps是两个映射规则，一个是数据，一个是改变数据的方法
```
import { connect } from 'react-redux'
// mapStateToProps将store中的数据与组件Props下的数据做映射，
// 接收state对象做参数，返回一个对象
const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// mapDispatchToProps将store.dispatch()方法与组件Props下的方法做映射，
// 接收dispatch()方法做参数，返回一个对象
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputValue(e){
      const action = {
        type: 'handle_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleBtnClick(){
      const action = {
        type: 'handle_btn_click'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
```
- TodoList是一个UI组件，当使用connect把一些数据和业务逻辑与TodoList相结合时，返回的内容其实就是一个容器组件