# 概述

- 一个 Vue 应用由一个通过 new Vue 创建的根 Vue 实例，以及可选的嵌套的、可复用的组件树组成
- 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等
- 同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会
- 生命周期钩子的 this 上下文指向调用它的 Vue 实例
- 不要在选项属性或回调上使用箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例，经常导致 Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。

## 模板语法
- 在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

## 插值
- 数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值
- 通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新
- 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令
- 属性绑定使用v-bind， v-on 指令，它用于监听 DOM 事件
- 对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。
- 有个限制就是，每个绑定都只能包含单个表达式
```
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```
## 指令 
- 指令(Directives) 是带有 v- 前缀的特殊特性
- 指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM
- 一些指令能够接收一个“参数”，在指令名称之后以冒号表示
- v-bind 指令可以用于响应式地更新 HTML 特性，v-on 指令，它用于监听 DOM 事件
- 从 2.6.0 开始，可以用方括号括起来的 JavaScript 表达式作为一个指令的参数
```
<a v-bind:[attrName]="url">
<a v-bind:[eventName]="doSomething">
```
- 这里的 attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用