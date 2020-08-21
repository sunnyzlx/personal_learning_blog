​
## 一、React和ReactDom
-  React使用JSX来描述UI
-  babel-loader把JSX 编译成相应的 JS 对象，React.createElement再把这个JS对象构造成React需要的虚拟dom。
-  React负责逻辑控制，数据 -> VDOM 
-  ReactDom渲染实际DOM，VDOM -> DOM 

## 二、JSX语法
- JSX是一种JavaScript的语法扩展,可以很好地描述UI，能够有效提高开发效率
- 基本使⽤,用{}包裹表达式
- 变量
```
  const name = "react study";
  const jsx = <div>hello, {name}</div>;
```
- js对象，函数都是合法表达式
```
const obj = {
  fistName: "Harry",
  lastName: "Potter"
};
function formatName(name) {
  return name.fistName + " " + name.lastName; 
}
const jsx = <div>{formatName(user)}</div>;
```
- jsx对象，也是合法表达式
```
 const greet = <div>good</div>;
 const jsx = <div>{greet}</div>;
```
- 条件语句
```
const show = true;//false;
const greet = <div>good</div>;
const jsx = (
  <div>
    {/* 条件语句 */}
    {show ? greet : "登录"} 
    {show && greet}
  </div>
);
```
- 数组，数组会被作为一组子元素对待，数组中存放一组jsx可用于显示列表数据
```
const a = [0, 1, 2];
const jsx = (
  <div>
    {/* 数组 */} 
    <ul>
    {/* diff时候，⾸先比较type，然后是key，所以同级同类型元素，key值必须得唯⼀ */} 
    {a.map(item => (
      <li key={item}>{item}</li>
    ))}
    </ul> 
  </div>
);
```
- 属性的使⽤
```
 
import logo from "./logo.svg";
const jsx = (
  <div>
    {/* 属性:静态值用双引号，动态值用花括号;class、for等要特殊处理。 */}
    <img src={logo} style={{ width: 100 }} className="img" />
  </div>
);
```
- CSS模块化，创建index.module.css
```
import style from "./index.module.css";
<img className={style.logo} />

import style from "./index.module.scss"; 
<img className={style.logo} />
```
## 三、正确使用setState
### setState(partialState, callback)
- partialState:object|function, ⽤于产⽣与当前state合并的子集。
- callback:function, state更新之后被调用。
### 关于 setState() 注意三点：
- 1.不要直接修改 State，⽽是应该使用 setState()
- 2.State 的更新可能是异步的，总结: setState只有在合成事件和生命周期函数中是异步的，在原生事件和setTimeout中都是同步的，这里的异步其实是批量更新
- 如果要获取到最新状态值有以下方式: 
- 在回调中获取状态值
```  
changeValue = v => { 
  this.setState({ counter: this.state.counter + v},
  () => { console.log("counter", this.state.counter); })
}
```
- 使⽤定时器:
```
setTimeout(() => { 
  this.setCounter();
}, 0);
```
- 原生事件中修改状态
``` 
componentDidMount(){
  document.body.addEventListener('click', this.changeValue, false)
}
```
- 3.State 的更新会被合并，出于性能考虑，React在同一周期内会对多个 setState 进行批处理，后调用的 setState() 将覆盖同一周期内先调用 setState 的值
- 如果想要链式更新state, 使用参数一为带有形式参数的 updater 函数, (state, props) => stateChange
```
changeValue = v => {
  this.setState(state => ({ counter: state.counter + v }));
};
setCounter = () => {
  this.changeValue(1);
  this.changeValue(2); 
};
```
## 四、⽣命周期
### ⽣命周期方法
- 生命周期方法，用于在组件不同阶段执行自定义功能。在组件被创建并插入到 DOM 时，组件更新时，组件取消挂载或从 DOM 中删除时，都有可以使用的生命周期方法。
- V17可能会废弃的三个生命周期函数用getDerivedStateFromProps替代，⽬前使用的话加上 UNSAFE_:
  - componentWillMount 
  - componentWillReceiveProps 
  - componentWillUpdate
- 引入两个新的生命周期函数:
  - static getDerivedStateFromProps 
  - getSnapshotBeforeUpdate
- 如果不想手动给将要废弃的生命周期添加 UNSAFE_ 前缀，可以用下面的命令
```
npx react-codemod rename-unsafe-lifecycles <path>
```
## 五、组件
- 组件，从概念上类似于 JavaScript 函数。它接受任意的入参(即 “props”)，并返回用于描述页面展示内容的 React元素。
- 组件有两种形式:class组件和function组件。
### class组件
- class组件通常拥有状态和生命周期，继承于Component，实现render方法
### function组件
- 函数组件通常无状态，仅关注内容展示，返回渲染结果即可。 
- 从React16.8开始引⼊了hooks，函数组件也能够拥有状态。
## 六、组件复合
- 如果组件间有共用的非UI逻辑，将它们抽取为JS模块导入使用⽽不是继承它。
- Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
- 我们推荐使用组合而非继承来实现组件间的代码重用。典型用例Layout组件，Card组件
### 不具名
- 使用一个特殊的props.children来将他们的子组件传递到渲染结果中
### 具名
- 传个对象进去:
```
import React, { Component } from "react"; 
import Layout from "./Layout";
export default class HomePage extends Component {
  render() {
    return (
       <Layout showTopBar={false} showBottomBar={true} title="商城⾸首⻚页"> 
        {/* <div>
          <h3>HomePage</h3>
        </div> */}
        {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>),
          txt: "这是个文本",
          btnClick: () => {
            console.log("btnClick"); }
        }}
      </Layout>); 
  }
}
```
## 七、redux
- redux 是 JavaScript应用的状态容器，提供可预测化的状态管理。它保证程序行为⼀致性且易于测试。
### redux使用步骤
- 需要一个store来存储数据
- store里的reducer初始化state并定义state修改规则
- 通过dispatch一个action来提交对数据的修改
- action提交到reducer函数里，根据传⼊的action的type，返回新的state
### react各api作用
- createStore 创建store
- reducer 初始化、修改状态函数 
- getState 获取状态值
- dispatch 提交更新
- subscribe 变更订阅
## 八、react-redux
- react-redux提供了两个api
- Provider 为后代组件提供store
- connect 为组件提供数据和变更方法，connect中的参数:state映射和事件映射
## 九、react-router
- react-router包含3个库，react-router、react-router-dom和react-router-native。react-router提供最 基本的路路由功能，实际使⽤用的时候我们不不会直接安装react-router，⽽而是根据应⽤用运⾏行行的环境选择安装 react-router-dom(在浏览器器中使⽤用)或react-router-native(在rn中使⽤用)。react-router-dom和 react-router-native都依赖react-router，所以在安装时，react-router也会⾃自动安装
-  react-router中奉⾏一切皆组件的思想，路由器-Router、链接-Link、路由-Route、独占-Switch、重定向-Redirect都以组件形式存在
```
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">⾸首⻚页</Link>
          <Link to="/user">⽤用户中⼼心</Link>
          {/* 根路由要添加exact，实现精确匹配 */} 
          <Route exact  path="/"
            component={HomePage}
            //children={() => <div>children</div>}
            //render={() => <div>render</div>}
          />
          <Route path="/user" component={UserPage} />
        </Router>
      </div>); 
    }
}
```
### Route渲染内容的三种方式
- Route渲染优先级:children>component>render。这三种方式互斥，你只能⽤一种.
#### children:func
- 不管location是否匹配都会被渲染之外，其它工作方法与render完全一样
#### render:func
- 当location匹配的时候渲染,接收一个函数
#### component: component
- 只在当location匹配的时候渲染。 
### 404⻚⾯
- 设定⼀个没有path的路由在路由列表最后面，表示一定匹配
```
{/* 添加Switch表示仅匹配一个*/} 
<Switch>
  {/* 根路由要添加exact，实现精确匹配 */} 
  <Route
    exact
    path="/"
    component={HomePage}
  />
  <Route path="/user" component={UserPage} />
  <Route component={EmptyPage} />
</Switch>
```
## 十、PureComponent
- 定制了shouldComponentUpdate后的Component，实现性能优化
- 缺点是必须要用class形式，⽽且要注意是浅比较
- React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中 包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 React.PureComponent ，或者在深层数据结构发生变化时 调用 forceUpdate() 来确保组件被正确地更新。你也可以考虑使用 immutable 对象加速嵌套数据的比较。
  