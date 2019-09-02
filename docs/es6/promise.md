# promise原理深入理解

## 概述
   - Promise 是异步编程的一种解决方案，其实是一个构造函数，自己身上有all、race、reject、resolve这几个方法，原型上有then、catch、finally等方法
   - Promise 是一个对象，从它可以获取异步操作的结果。这个对象有2个特点，3种状态；

## 2个特点
   - 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
   - 一旦状态改变，就不会再变，任何时候都可以得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
## 3种状态
   - pending（进行中）、fulfilled（已成功）和rejected（已失败）

## 优点
  - 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

## 缺点
  - 无法取消Promise，一旦新建它就会立即执行，无法中途取消
  - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部
  - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## 应用
  - 手写promise 
  ```
  // 手写promise
  class Promise1{
    constructor(fn){
      // 初始化state为等待态
      this.state = 'pending'
      // 初始化成功的参数
      this.value = undefined
      // 初始化失败的参数
      this.reason = undefined
      // resolve调用，state变为成功态，并将要传递的参数，挂到this.value上，方便回调onFulfilled调用
      let resolve = (value) => {
        if(this.state === 'pending'){
          this.state = 'resolved'
          this.value = value
        }
      }
      // reject调用，state变为失败态，并将要传递的参数，挂到this.reason上，方便回调onRejected调用
      let reject = (reason) => {
        if(this.state === 'pending'){
          this.state = 'rejected'
          this.reason = reason
        }
      }
      // 自动执行函数
      try{
        fn(resolve, reject)
      }catch(err){
        reject(err)
      }
    }

    then(onFulfilled, onRejected){
      if(this.state === 'resolved'){
        onFulfilled(this.value)
      }
      if(this.state === 'rejected'){
        onRejected(this.reason)
      }
    }
  }

  
  new Promise1(function(resolve, reject){
    resolve(2)
    console.log(0)
  }).then(console.log)
  // 0 2
  ```
  