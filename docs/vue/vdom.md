# vdom

### ==vdom是什么？为什么会存在vdom？==

#### 1. vdom,即虚拟dom，即用js来模拟dom结构（标签，属性，文本节点，子节点）
#### 2. DOM操作非常“昂贵”，应尽量减少DOM操作（所以需要知道哪些dom需要操作，哪些不需要操作，要分辨这些就需要逻辑和算法，需要js来做）
#### 3. 将DOM对比操作放在js层，提高效率，提高重绘性能
### 遇到的问题
1. 在浏览器中DOM操作是最昂贵的，最损耗性能的，而js运行效率很高
2. 所以应尽量减少DOM操作，而不是“推倒重来”
3. 而且项目越复杂，影响就越严重
4. 而vdom就可以解决这个问题
### ==vdom如何应用？核心api是什么？==
#### 1. h函数，生成vnode节点的，patch函数，进行对比，进行打补丁渲染的
#### 1. h('<标签名>'， {...属性名...}，[...子元素...])
#### 2. h('<标签名>'， {...属性名...}，'....') 只有一个子元素，且为文本字符串
#### 3. patch(container, vnode) 初次渲染时，直接将vnode结构打包，全部渲染到container容器中
#### 4. patch(vnode, newVnode) 再次更新渲染时，利用diff算法找出新旧vnode节点之间的差异，将差异更新到旧的vnode对应的DOM节点中
1. 如何使用？可用snabbdom的用法来举例
2. 核心API：h函数，patch函数
### 介绍一下diff算法？

#### 1. vdom为何要使用diff算法？
- 1. DOM操作是昂贵的，因此要尽量减少DOM操作
- 2. 找出本次DOM必须要更新的节点来更新，其他的不更新
- 3. 这个找出的过程，就需要diff算法
#### 2. 对diff 算法的一些深入了解？
- 1. 知道什么是diff算法，是linux的基础命令
- 2. vdom中应用diff算法，是为了找出需要更新的节点
- 3. diff实现，patch(container, vnode) patch(vnode, newVnode)
- 4. 核心逻辑， createElement和updateChildren
