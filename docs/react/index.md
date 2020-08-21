# React基础

## 
- react负责编译jsx语法，负责逻辑控制，将数据=>vdom
- reactDom负责渲染实际dom,vdom=>dom
- React使用JSX来描述UI
- 组件是抽象的独立功能模块, 组件有两种形式:function组件和class组件
- class组件通常拥有状态和生命周期，继承于Component，实现render方法
- 函数组件通常无状态，仅关注内容展示，返回渲染结果即可
- 类组件中的状态管理,class组件使用state和setState维护状态
- setState特性讨论:
  - 用setState更新状态⽽不能直接修改
  - setState是批量执⾏的，因此对同⼀个状态执⾏多次只起一次作用，多个状态更新可以放在同一个setState中进⾏
  - setState通常是异步的，因此如果要获取到最新状态值有以下三种方式:
    - 传递函数给setState方法
    - 使⽤定时器
    - 原⽣事件中修改状态
  - setState只有在合成事件和⽣命周期函数中是异步的， 在原生事件如addEventListener和setTimeout、setInterval 中都是同步的
- 函数组件通过hooks api维护状态
- 事件回调函数注意绑定this指向，常⻅三种⽅方法:
  - 构造函数中绑定并覆盖:this.change= this.change.bind(this)
  - ⽅法定义为箭头函数:change=()=>{}
  - 事件中定义为箭头函数:onChange={()=>this.change()}
- react⾥遵循单项数据流，没有双向绑定，输入框要设置value 和onChange，称为受控组件
- 组件通信
  - Props属性传递可用于⽗⼦组件相互通信
  - 如果⽗组件传递的是函数，则可以把子组件信息传入⽗组件，这个常称为状态提升
  - context,跨层级组件之间通信,主要用于组件库开发中
- 生命周期
  - 组件运行的特定阶段会自动执行的方法,10个
  - 挂载
    - constructor(),  初始化内部state,为事件处理函数绑定实例
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()，数据请求，添加订阅，定时器
  - 更新
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapShotBeforeUpdate()
    - componentDidUpdate()
  - 卸载
    - componentWillUnmount()
  - 错误捕获
    - static getDerivedStateFromError()
    - componentDidCatch()
- class静态属性
  - defaultProps: 定义props的默认值
  - displayName
  - propTypes: 进行类型检查，可以捕获大量错误
- 实例方法
  - setState()，异步批量执行
  - forceUpdate()
- 实例属性
  - state
  - props
- hooks
  - Hook 是一些可以让你在函数组件里“钩入” React state 及生命周期等特性的函数
  - hooks可以让你在不编写class的情况下使用state和一些其他的react特性
  - 优点：可以复用状态逻辑，使代码更加简洁，容易理解
- useState
  - 在function组件中使用useState,可以为组件添加一些内部state
  - useState接收初始state作为唯一参数，返回2个值，当前状态和更新函数
- useEffect
  - useEffect给函数组件增加了操作副作用的能力
  - 副作用： 数据请求，添加订阅，手动修改dom
  - useEffect接收一个函数来执行副作用，返回一个函数来清除副作用
- Hook 使用规则
  - 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
  - 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。还可以在自定义的 Hook 中调用
  
## React简介
- fackbook推出，函数式编程，React16之后版本及其优化的底层实现，又称React Fiber
- 在底层的事件循环中加入了优先级的概念，可以利用事件循环的碎片时间加入执行一些高优先级的用户交互，提高Reactjs使用过程中的用户体验

## React特性
- 声明式编码
  - MV*框架：只关注视图层view+数据层model即可，改变数据，更新UI, 不需要关注中间的实现过程（Vue, React）
- 组件化编码
- 高效的DOM，diff算法，最小化页面重绘
- 单向数据流（vue中表单，v-model中是双向的）

## React脚手架
- 官方提供，健壮性无需怀疑
- 使用简单，可定制性强，调试代码非常方便
```
npx create-react-app my-app
cd my-app
npm start
```
- npx的作用
  - 调用项目安装的模块
  - 避免全局安装模块
## Yarn介绍
- yarn 是新一代包管理工具

## yarn特点
- 速度快
- 安装版本统一，更安全
- 更简洁的输出
- 更好的语义化

## 工程目录文件分析
- yarn.lock  项目依赖的安装包的版本号列表
- readme.md  项目的说明文件
- node_modules 项目依赖的第三方的包
- public index.html 项目首页的模版文件
- src 项目中所有的源代码
- src/index.js 整个程序运行的入口文件

## 组件
- 组件是一个类去继承React.Component这个基类
- ReactDOM是一个第三方模块，它有一个render方法，它可以将某个组件挂载到某个DOM节点上，在root节点下展示app组件的内容
- 如果在组件中使用了jsx语法，就必须引入react，否则jsx语法就无法被编译，在react中render函数中的标签也是jsx语法，所以每个组件中都必须引入react,以编译jsx语法

## JSX语法
- 在react中，在js中写html标签就被称为JSX语法
- 普通的js语法与JSX语法的区别：
  - 普通的js语法需要引号包裹，而JSX语法不需要
- JSX语法还可以自定义标签
- JSX语法，我们要使用自己创建的组件，直接使用标签形式定义的组件名即可，首字母需要大写，小写字母开头，一般是原始的h5标签，组件标签，首字母大写
- render()函数中加return ,return 后加括号，使得我们可以在多行中编写JSX语法
- JSX语法中，return返回的标签最外层必须有一个包裹元素，即只有一个根元素，React16版本中提供了一个Fragment的占位符，可以用它来代替最外层的div标签，这样就不会报错，并且在最终的渲染中也不会显示最外层包裹的div
- JSX语法中的注释，需要用花括号包裹，单行和多行均可以，且在最终的代码中不显示注释
- JSX语法中，为避免与类class混淆，样式class用className代替，引入样式文件，直接import即可
- JSX语法花括号中的内容默认会被转译，想要不转译，可以使用属性
```
dangerouslySetInnerHtml={{__html: item}}
```
- label在html中label标签的作用是扩大点击区域，但是label中的for会与for循环的for冲突，所以使用htmlFor代替

## react中的响应式设计思想和事件绑定
  - 组件中的constructor构造函数，是优于其他任何函数，自动的被执行的一个函数，固定写法，接受一个props参数，且在函数中需要调用super(props)方法，实现子类继承父类，super代表父类的构造函数
  - react中定义数据是要定义在组件的状态里， this.state就是组件的状态，它是一个对象
  - 让input框中的对应de数据与状态中的数据做一个绑定，value={this.state.inputValue}，而状态中的数据其实是一个js变量，在react中要表示一个js变量或js表达式，需要用花括号包裹
  - react在英文中是响应的意思，它可以感应到数据的变化，从而去更新视图，我们不需要去操作dom，只需要操作数据
  - this.handleInputChange.bind(this) ,默认未绑定this指向时，handleInputChange函数中的this指向undefined，所以需要将其this指向TodoList组件，而在return返回的JSX语法中，this就是指向TodoList组件de,故借助bind方法，在JSX语法中将handleInputChange函数中的this指向TodoList组件即可
  - 事件绑定时，需要通过bind(this)对函数的执行上下文进行变更
  - react中必须借助，this.setState()去改变this.state中的数据，函数传入对象形式，来对this.state中具体的数据项进行变更
  - 利用e.target.value获取input框输入的内容
- 总结
  - this.state负责存储组件中的数据
  - JSX语法中表示变量和表达式，需要用花括号包裹
  - 事件绑定时，需要通过bind(this)对函数的执行上下文进行变更
  - 通过this.setState()传入一个对象的形式，来对this.state中具体的数据项进行变更
  - immutable的概念，state，不允许我们做任何的改变，如果要改，就去拷贝一个副本，去对副本做修改，因为直接修改state中的数据，会影响后面的性能优化

## 组件
- 函数组件，本质：javaScript函数，接收唯一参数props对象，返回一个React对象
- 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改
- “纯函数”，因为该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果

## 组件拆分与组件间传值
- 父组件通过属性的方式向子组件传参
- 子组件通过this.props接收父组件传过来的参数
- 单向数据流的概念，只允许父组件向子组件传递数据，却不允许子组件修改父组件的数据，如果要修改父组件的数据，需要向子组件传递一个方法，在子组件中去调用父组件的方法，从而修改父组件的数据

## React的一些特点
- 声明式开发
  - 命令式编程，直接操作dom,无论是jquery还是原生js,代码中60%-70%都是dom操作
  - 声明式开发，面向数据编程的，声明好数据后，react底层借助虚拟dom去构建视图，省去大量的dom操作，提升性能
- 可以与其他框架并存
- 组件化
  - 父子组件如何传值
- 单向数据流
  - 允许父组件向子组件传值，但子组件只能去使用这个值，不能去改变这个值
- 视图层框架
  - 只解决数据和页面渲染的问题，至于组件间如何传值，在大型项目中需要一些数据层框架的支持
- 函数式编程
  - 方便维护
  - 更容易实现前端自动化测试