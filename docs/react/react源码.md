# react源码
## React是什么？
- React 本身只是一个 DOM 的抽象层，使用组件构建虚拟 DOM。
- React是使用虚拟dom来描述真实的dom节点，由于有大量的dom节点，所以又拆分成组件，所以就是使用组件构建虚拟 DOM
## Virtual DOM是什么？
- Virtual DOM本质就是js对象，来描述真实的DOM结构和信息
### why
- DOM操作很慢，轻微的操作都可能导致⻚面重新排版，⾮常耗性能。相对于DOM对象，js对象处理起来更快，⽽且更简单。通过diff算法对比新旧vdom之间的差异，可以批量的、最小化的执⾏dom操作，从⽽提⾼性能。
### where
- React中⽤JSX语法描述视图，通过babel-loader转译后它们变为React.createElement(...)形式，该函数将生成vdom来描述真实dom。将来如果状态变化，vdom将作出相应变化，再通过diff算法对⽐新⽼vdom区别从⽽做出最终dom操作

## JSX是什么？
- 语法糖
- React 使用 JSX 来替代常规的 JavaScript。
- JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
### 为什么需要JSX？
- 开发效率:使⽤JSX编写模板简单快速。
- 执行效率:JSX编译为JavaScript代码后进⾏了优化，执⾏更快。 
- 类型安全:在编译过程中就能发现错误。
### 原理？
- babel-loader会预编译JSX为React.createElement(...)
### 与vue的异同？
- react中虚拟dom+jsx的设计一开始就有，vue则是演进过程中才出现的 
- jsx本来就是js扩展，转义过程简单直接的多;vue把template编译为render函数的过程需要复杂的编译器转换：字符串-ast-js函数字符串
## React核⼼api？
- React.createElement:将传⼊的节点定义转换为vdom 
  - createElement被调用时会传入标签类型type，标签属性props及若⼲子元素children 
  - index.js中从未使用React类或者其任何接口，为何需要导入它?
  - JSX编译后实际调用React.createElement方法，所以只要出现JSX的文件中都需要导入React
- React.Component:实现自定义组件 
- ReactDOM.render:渲染真实DOM
- 总结:
- 1. webpack+babel编译时，替换JSX为React.createElement(type,props,...children)
- 2. 所有React.createElement()执⾏结束后得到一个JS对象即vdom，它能够完整描述dom结构 
- 3. ReactDOM.render(vdom, container)可以将vdom转换为dom并追加到container中
- 4. 实际上，转换过程需要经过一个diff过程。
## reconciliation协调，即diff算法
### 出现原因？
- 在某⼀一时间节点调用 React 的 render() 方法，会创建一棵由 React 元素组成的树。在下一次 state 或 props 更新时，相同的 render() 方法会返回⼀一棵不同的树。React 需要基于这两棵树之间的差别 来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步。
### diffing算法 
- 算法复杂度O(n) 
### diff 策略
- 1. 同级比较，Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计。
- 2. 拥有不同类型的两个组件将会生成不同的树形结构。例如:div->p, CompA->CompB
- 3. 开发者可以通过 key prop 来暗示哪些⼦元素在不同的渲染下能保持稳定;
### diff过程
- ⽐对两个虚拟dom时会有三种操作:删除、替换和更新 
- vnode是现在的虚拟dom，newVnode是新虚拟dom。 
- 删除:newVnode不存在时 
- 替换:vnode和newVnode类型不同或key不同时 
- 更新:有相同类型和相同key，但vnode和newVnode不同时
## Fiber是什么？
- fiber就是被拆分成块的子任务
- fiber是指组件上将要完成或者已经完成的任务，每个组件可以⼀一个或者多个
### 为什么需要fiber
- 对于⼤型项目，组件树会很大，这个时候递归遍历的成本就会很高，会造成主线程被持续占用，结果就是主线程上的布局、动画等周期性任务就⽆法⽴即得到处理，造成视觉上的卡顿，影响用户体验。
- 为了解决上面的问题，可以把任务分解
  - 增量渲染(把渲染任务拆分成块，匀到多帧)
  - 更新时能够暂停，终止，复用渲染任务
  - 给不同类型的更新赋予优先级
  - 并发⽅面新的基础能力
  - 更流畅
### 实现fiber
- Fiber 是 React 16 中新的协调引擎。它的主要目的是使 Virtual DOM 可以进⾏增量式渲染。
- 一个更新过程可能被打断，所以React Fiber一个更新过程被分为两个阶段(Phase):第一个阶段 Reconciliation Phase和第二阶段Commit Phase。
- window.requestIdleCallback(callback[, options])
- window.requestIdleCallback()⽅法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执⾏，然⽽，如果回调函数指定了执⾏超时timeout，则有可能为了在超时前执⾏函数⽽打乱执⾏顺序。
- 你可以在空闲回调函数中调⽤requestIdleCallback() ，以便在下一次通过事件循环之前调度另⼀个回调。