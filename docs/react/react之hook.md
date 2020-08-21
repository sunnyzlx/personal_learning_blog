# react之hook
-  Hook 是 React 16.8 的新增特性。它可让你在不编写 class 的情况下使⽤用 state 以及其他的 React 特性。
### hook的优点：
- Hook 使你在⾮ class 的情况下可以使用更多的 React 特性
- 可以在组件之间复用状态逻辑
- 完全可选的，100% 向后兼容的，Hook 不包含任何破坏性改动
- 可以将组件拆分为更小的颗粒度，更小的函数(⽐如设置订阅或请求数据)，⽽并⾮强制按照生命周期划分，方便维护管理

### Hook使用规则
- 只在最顶层使用 Hook，不要在循环，条件或嵌套函数中调用 Hook
- 不要在普通的 JavaScript 函数中调用 Hook，
  - 在 React 的函数组件中调用 Hook
  - 在自定义 Hook 中调用其他 Hook 

### ⾃定义Hook
- 自定义Hook是一个函数，其名称以 “use” 开头，函数内部可以调用其他的Hook
- 当我们想在两个函数之间共享逻辑时，可以提取到自定义Hook
## useState
- useState，返回一个数组，第一个参数是state,第二个参数是执行函数，可以去修改state,返回一个数组的设计理念，命名灵活
## useEffect
- useEffect 可以让你在函数组件中执行副作用操作，数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作⽤
## 
- useContext,在函数组件中快速的获取context
- useReducer,与useState类似，但是可以处理更复杂的state,reducer中分担来一部分状态逻辑
- useCallback,缓存函数
- useMemo,缓存参数
- useRef,在函数组件中使用引用ref
- useImperativeHandle，结合forwardRef使用
- useLayoutRef,与useEffect基本一样，区别，同步异步