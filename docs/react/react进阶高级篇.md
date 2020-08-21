## 组件跨层级通信 - Context
- Context实现祖代组件向后代组件跨层级传值，Vue中的provide & inject来源于Context
- react-redux的 Provider ，就是通过 Context 提供⼀个全局态的 store ，路由组件react-router通过 Context 管理路由状态
### Context API

#### React.createContext
- 创建⼀个 Context 对象。当 React 渲染⼀个订阅了这个 Context 对象的组件，这个组件会从组件树中离⾃身最近的那个匹配的 Provider 中读取到当前的 context 值。
#### Context.Provider
- Provider 接收⼀个 value 属性，传递给消费组件，允许消费组件订阅 context 的变化。⼀个 Provider可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使⽤，⾥层的会覆盖外层的数据。
- 当 Provider 的 value 值发⽣变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部Consumer 组件都不受制于 shouldComponentUpdate 函数，因此当Consumer 组件在其祖先组件退出更新的情况下也能更新。
#### Class.contextType
- 挂载在 class 上的 contextType 属性会被重赋值为⼀个由 React.createContext() 创建的 Context
对象。这能让你使⽤ this.context 来消费最近 Context 上的那个值。你可以在任何⽣命周期中访问到它，包括 render 函数中。
- 缺点： 只能订阅单⼀context，且只能用于class组件。
#### useContext
- 接收⼀个 context 对象（ React.createContext 的返回值）并返回该 context 的当前值。当前的
context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。只能⽤
在function组件中。
- 缺点：只能用于function组件，优点：可以订阅多个context
#### Context.Consumer
- Consumer组件内用{}包裹一个函数，这个函数接收当前的 context 值，返回⼀个 React 节点。传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。如果没有对应的 Provider， value 参数等同于传递给 createContext() 的 defaultValue 。
- 优点：可以订阅多个context，可用于class组件和function组件，缺点：书写有点麻烦。

#### 注意：
- 因为 context 会使⽤参考标识（reference identity）来决定何时进⾏渲染，这⾥可能会有⼀些陷阱，当
provider 的⽗组件进⾏重渲染时，可能会在 consumers 组件中触发意外的渲染。举个例⼦，当每⼀次
Provider 重渲染时，以下的代码会重渲染所有下⾯的 consumers 组件，因为 value 属性总是被赋值
为新的对象：
```
class App extends React.Component {
 render() {
   return (
      <Provider value={{something: 'something'}}>
        <Toolbar />
      </Provider>
   );
 }
}
```
- 为了防⽌这种情况，将 value 状态提升到⽗节点的 state ⾥：
## ⾼阶组件-HOC
- 定义：⾼阶组件是参数为**组件**，返回值为**新组件**的**函数**
- HOC: 是⼀个函数，接收⼀个组件，返回另外⼀个组件
- HOC可以链式调⽤
- ⾼阶组件本身是对装饰器模式的应⽤，⾃然可以利⽤ES7中出现的装饰器语法来更优雅的书写代码。
- 注意：装饰器只能⽤在class上，执⾏顺序从下往上
- 组件是将 props 转换为 UI，⽽⾼阶组件是将组件转换为另⼀个组件
#### 使⽤HOC的注意事项
- 不要在 render ⽅法中使⽤ HOC
- 原因：React 的 diff 算法（称为协调）使⽤组件标识来确定它是应该更新现有⼦树还是将其丢弃并挂载新
⼦树。 如果从 render 返回的组件与前⼀个渲染中的组件相同（ === ），则 React 通过将⼦树与
新⼦树进⾏区分来递归更新⼦树。 如果它们不相等，则完全卸载前⼀个⼦树。
```
render() {
 // 每次调⽤ render 函数都会创建⼀个新的 EnhancedComponent
 // EnhancedComponent1 !== EnhancedComponent2
 const EnhancedComponent = enhance(MyComponent);
 // 这将导致⼦树每次渲染都会进⾏卸载，和重新挂载的操作！
 return <EnhancedComponent />;
}
```
- 这不仅仅是性能问题 - 重新挂载组件会导致该组件及其所有⼦组件的状态丢失。