# promise
- https://juejin.im/post/6844903632203153415
- https://juejin.im/post/6844904023988895757
- https://juejin.im/post/6844903591518404622
- https://juejin.im/post/6844903763178684430#heading-9
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
### 1.手写promise
- https://zhuanlan.zhihu.com/p/21834559
- 简版
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
- 复杂版
```
  class Promise {
  constructor(executor){
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    let resolve = value => {
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    let reject = value => {
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.reason = value
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve,reject)
    }catch(err){
      reject(err)
    }
  }
  then(onFulfilled, onRejected){
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : value => value
    let promise2 = new Promise((resolve, reject)=>{
      if(this.state === 'fulfilled'){
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2,x,resolve,reject)
          }catch(err){
            reject(err)
          }
        },0)
      }
      if(this.state === 'rejected'){
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2,x,resolve,reject)
          }catch(err){
            reject(err)
          }
        },0)
      }
      if(this.state === 'pending'){
        this.onFulfilledCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2,x,resolve,reject)
            }catch(err){
              reject(err)
            }
          },0)
        })
        this.onRejectedCallbacks.push(()=>{
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2,x,resolve,reject)
            }catch(err){
              reject(err)
            }
          },0)
        })
        
      }
    })
    return promise2;
  }
  catch(fn){
    return this.then(null, fn)
  }
}
// 实现。then的链式调用
function resolvePromise(promise2,x,resolve,reject){
  if(x === promise2){
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  let called;
  if(x!==null && (typeof x === 'object' || typeof x === 'function')){
    try {
      let then = x.then
      if(typeof then === 'function'){
        then.call(x, y => {
          if(called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, err => {
          if(called) return
          called = true
          reject(err)
        })
      }else{
        resolve(x)
      }
    }catch(e){
      if(called) return
      called = true
      reject(e)
    }
  }else{
    resolve(x)
  }
}

//resolve方法
Promise.resolve = function(val){
  return new Promise((resolve,reject) => {
    resolve(val)
  })
}
//reject方法
Promise.reject = function(val){
  return new Promise((resolve,reject) => {
    reject(val)
  })
}
//race方法
Promise.race = function(promises){
  return new Promise((resolve, reject)=>{
    promises.forEach(promise => {
      promise.then(resolve,reject)
    })
  })
}
// all方法
Promise.all = function(promises){
  let arr = [], index=0;
  let len = promises.length
  return new Promise((resolve,reject) => {
    for(let i=0; i<len; i++){
      promises[i].then(data => {
        index++
        arr[i] = data;
        if(index === len){
          return resolve(arr)
        }
      }, reject)
    }
  })
}
```
### 2.实现一个延时函数
```
function sleep(time){
  return new Promise(function(resolve,reject){
    setTimeout(() => {
      resolve(true)
    }, time*1000)
  })
}
```
### 3.实现一个retry函数
- promise.retry 的作用是执行一个函数，如果不成功最多可以尝试 times 次。传参需要三个变量，所要执行的函数，尝试的次数以及延迟的时间。
```
function retry(fn, times, delay){
  return new Promise((resolve, reject)=>{
    let errors = []
    function attempt(){
      if(times===0){
        reject(errors)
      }else{
        fn().then(v=>resolve(v))
          .catch(e=>{
            errors.push(e)
            times--;
            setTimeout(() => attempt(),delay)
          })
      }
    }
    attempt()
  })
}
```
### 4.将node的回调中同步的callback包装为promise形式
```
nodeGet(param, function (err, data) { })
  // 转化成promise形式
  function nodeGetAysnc(param) {
    return new Promise((resolve, reject) => {
      nodeGet(param, function (err, data) {
        if (err !== null) return reject(err)
        resolve(data)
      })
  })}
// 按照上面的思路，即可写出通用版的形式。
function promisify(fn,context){
  return (...args) => {
    return new Promise((resolve,reject) => {
        fn.apply(context,[...args,(err,res) => {
            return err ? reject(err) : resolve(res)
        }])
    })
  }
}

function promisify(fn, ctx){
  return (...args) => {
    return new Promise(function(resolve,reject){
      fn.apply(ctx, [...args, (err,res) => {
        return err ? reject(err) : resolve(res)
      }])
    })
  }
}
```
### 5.异步加载图片
```
function loadImageAsync(url){
  return new Promise(function(resolve,reject){
    const image = new Image()
    image.onload = function(){
      resolve(image)
    }
    image.onerror = function(){
      reject(new Error('could not load image at'+url))
    }
    image.src = url
  })
}
```
### 6.用Promise对象实现的 Ajax 操作
```
const getJSON = function(url){
  return new Promise(function(resolve,reject){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.setRequestHeader('Accept','application/json')
    xhr.responseType = 'json';
    xhr.onreadystatechange = function(){
      if(xhr.readyState !== 4){
        return;
      }
      if(xhr.status === 200){
        resolve(xhr.responseText)
      }else{
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

getJSON('./posts.json').then()
```
### 7.promise异步流程控制
- https://juejin.im/post/59cdb6526fb9a00a4e67c7fb#heading-8
```
function loadImg(url){
  return new Promise(function(resolve,reject){
    const img = new Image()
    img.onload = function(){
      resolve(img)
    }
    img.onerror = reject
    img.src = url
  })
}

let promise = Promise.resolve()
for(let i=0,len=urls.length; i<len;i++){
  promise = promise.then(()=> loadImg(urls[i]))
                   .then(()=> addToHtml)
}

urls.reduce((promise,url) =>{
  return promise.then(() => loadImg(url))
                .then(()=> addToHtml)
}, Promise.resolve()).then(() => {
  document.querySelector('.loading').style.display = 'none'
})


function syncLoad(index){
  if(index>=urls.length) return Promise.resolve()
  loadImg(urls[index])
    .then(img => {
      addToHtml(img)
      return syncLoad(index+1)
    })
}
syncLoad(0)
  .then(()=>{
    document.querySelector('.loading').style.display = 'none'
})

function syncLoad(fn, arr, handler){
  const errors = []
  return arr.reduce((promise, url)=>{
    return promise.then(() => fn(url))
                  .then((img)=> handler(img))
                  .catch((err)=>{
                    console.log(err)
                    errors.push(url)
                  })

  }, Promise.resolve()).then(() => {
    document.querySelector('.loading').style.display = 'none'
  }).catch(console.log)
}


syncLoad(imgLoad, urls, addToHtml)
  .then(()=>{
    document.querySelector('.loading').style.display = 'none'
  })
  .catch(console.log)

const promises = urls.map(loadImg)
Promise.all(promises)
  .then(imgs =>{
    imgs.forEach(addToHtml)
    document.querySelector('.loading').style.display = 'none'
  })
  .catch(err => {
    console.log(err)
  })


const promises = urls.map(loadImg)
promises.reduce((task, imgPromise)=>{
  task.then(() => imgPromise).then(()=>addToHtml)
}, Promise.resolve())
```

### 8.控制最大并发数
- 微信小程序最一开始对并发数限制为5个，后来升级到10个，如果超过10个会被舍弃。后来微信小程序升级为不限制并发请求，但超过10个会排队机制。也就是当同时调用的请求超过 10 个时，小程序会先发起 10 个并发请求，超过 10 个的部分按调用顺序进行排队，当前一个请求完成时，再发送队列中的下一个请求。
```
function limitLoad(urls, handler, limit){
  const newUrls = [].concat(urls)
  let count = 0
  const promises = []
  function load(){
    if(newUrls.length<=0 || count >limit) return
    count+=1
    return handler(newUrls.shift())
      .catch(err=>{
        console.log(err)
      })
      .then(() => {
        count-=1
      })
      .then(() =>{
        load()
      })
  }
  for(let i=0,len=newUrls.length; i<limit && i<len;i++){
    promises.push(load())
  }
  return Promise.all(promises)
}
```

```
function concurrentPoll(){
    this.tasks = [];
    this.max = 10;
    setTimeout(() => {
        this.run()
    },0)
}

concurrentPoll.prototype.addTask = function(task){
    this.tasks.push(task)
}

concurrentPoll.prototype.run = function(){
    if(this.tasks.length == 0){
        return
    }
    var min = Math.min(this.tasks.length, max);
    for(var i = 0; i < min; i++){
        this.max--;
        var task = this.tasks.shift();
        task().then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            this.max++;
            this.run();
        })
    }
}
```
### 
- 前端很常见是下面一个场景，我们需要实现一个用户修改头像的功能。首先我们需要将一张图片压缩并提交给后端，后端返回该图片保存的 url，前端拿保存的 url 和用户 id 提交给服务器来修改用户头像。
  - 异步一：加载图片
  - 异步二：压缩图片
  - 异步三：上传图片
  - 异步四：提交保存
- 大概代码实现
```
Promise.all([func1(), func2(), func3()])
  .then(([result1, result2, result3])=>{})
```