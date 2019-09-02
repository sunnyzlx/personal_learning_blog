# React生命周期

## 概念
- 生命周期函数指在某一个时刻组件会自动调用执行的函数
- 生命周期函数是存在于每一个组件中
- constructor()函数，会在组件被创建的时刻被自动调用，但它不是react独有的，不归为生命周期函数，但它和生命周期函数是非常类似的
- render()函数，当state和props改变时，render()函数会被重新执行

<img :src="$withBase('/assets/lifecircle-react.png')">

## 生命周期
- Initialization(组件初始化过程)
  - 组件会初始化数据，如state，props，在constructor函数中做初始化，去定义state，接收props|
- Mounting组件被渲染，挂载到页面上，组件挂载的流程
  - componentWillMount在组件即将被挂载到页面的时刻自动执行，挂载前
  - render组件渲染的时刻自动执行，挂载
  - componentDidMount在组件被挂载到页面之后，自动被执行，挂载后
  - componentWillMount和componentDidMount只在页面被挂载的时候被执行一次，之后的更新渲染就不再执行，挂载即组件第一次被放到页面上
- Updation组件被更新渲染，组件更新的流程，当props或state发生变化，即数据发生变化时，页面的更新会被执行
  - shouldComponentUpdate组件被更新之前，自动被执行，它要求返回一个布尔类型的返回结果
  - componentWillUpdate组件被更新之前，自动被执行，且在shouldComponentUpdate执行之后被执行，且shouldComponentUpdate返回true才执行，返回false就不会执行了
  - componentDidUpdate组件更新完成之后，自动被执行
  - componentWillReceiveProps执行条件：一个组件要从父组件接收参数，执行时刻，如果这个组件第一次存在于父组件中，不会执行，如果这个组件之前已经存在于父组件中，才会执行
- Unmounting组件被卸载的过程
  - componentWillUnmount组件即将从页面中被剔除的时候，自动被执行

## 生命周期函数的使用场景
- 所有的生命周期函数都可以省略，render除外，因为所有的组件都继承自Component，Component中内置了除render外的所有生命周期函数
- 当父组件的render函数重新执行时，子组件的render函数也会被重新执行，逻辑上没问题，但会带来性能损耗

## React中的一些性能优化的点
- 把作用域的修改放到constructor中来做，可以保证整个程序中函数作用域的绑定修改只会执行一次，而且可以避免一些子组件的无谓渲染
- React底层的setState内置了性能提升的机制，它是一个异步函数，可以把多次数据的改变结合成一次来做，这样就可以降低虚拟dom的比对频率
- React底层用了虚拟dom的概念，还有同层比对，还有key值这样的概念，来提升虚拟dom比对的速度，从而提升react的性能
- 利用shouldComponentUpdate来避免一个组件做无谓的render渲染操作，render函数重新执行，意味着React底层需要对组件生成一份新的虚拟dom，和之前的虚拟dom做比对，虽然虚拟dom的比对比真实的dom比对，性能要快得多，但是如果能省略这个比对过程，自然可以节约更多的性能
- 在componentDidMount生命周期函数中做ajax请求的操作
  - 不放在render函数中的原因：会造成一个死循环，render函数会被反复的执行，那ajax也就会被反复的执行，而数据请求在页面中只被执行一次其实就可以了，多次被执行其实只是一种性能的损耗，非常不合理，应该将数据请求放到只执行的一次的函数中，其实放到constructor中也是可以的，但是不建议
  - 不放在componentWillMount函数的原因：写网页时放到这里其实无所谓，但当我们写rn，或者做react服务端同构时，写在这里可能会与以后一些更高端的技术产生冲突，为了避免冲突，写在componentDidMount中