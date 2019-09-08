# React基础

## React简介
- fackbook推出，函数式编程，React16之后版本及其优化的底层实现，又称React Fiber
- 在底层的事件循环中加入了优先级的概念，可以利用事件循环的碎片时间加入执行一些高优先级的用户交互，提高Reactjs使用过程中的用户体验

## React特性
- 声明式编码
  - MV*框架：只关注视图层view+数据层model即可，改变数据，更新UI, 不需要关注中间的实现过程（Vue, React）
- 组件化编码
- 高效，，高效的DOM，diff算法，最小化页面重绘
- 单向数据流（vue中表单，v-model中是双向的）

## React脚手架
- 官方提供，健壮性无需怀疑
- 使用简单，可定制性强，调试代码非常方便
```
npx create-react-app my-app
cd my-app
npm start
```
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