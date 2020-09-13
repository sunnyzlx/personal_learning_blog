# JSBridge的基本原理
- https://juejin.im/post/6844903904002457614

### H5调用Native的本质就是请求拦截

- 在典型的JSBridge实现方案中，关于参数的处理是这样实现的：
  - 首先，任何时候，H5中JS需要调用Native时，发送请求的url是固定不变的，比如gap://ready
  - 其次，在window上定义一个全局的数组变量，名叫messageQueue，初始化时为空，当H5需要给Native发送消息时，先创建一个对象，并把所有相关的参数放在这个对象中，然后将这个对象插入messageQueue数组队尾
  - 当native收到gap://ready的请求后，就知道H5有新消息，就会执行一段神奇的代码，进入到WebView中，并将定义在window上的全局变量messageQueue数组中全部数据打包取走，并将messageQueue清空，取走后逐条解析执行。我们用eval函数来充当这段神奇的代码来解释这里的逻辑
```
execIframe = document.createElement('iframe')
execIframe.style.display = 'none'
execIframe.src = 'gap://ready'
document.body.appendChild(execIframe)

const messageQueue = []
window.messageQueue = messageQue
messageQueue.push(JSON.stringify({
  message: 'xxxx',
  params: 'xxxx'
}))

//当Native拦截到'gap://ready'请求后执行的magic code
const messageQueue = eval('window.messageQueue')
const messages = JSON.parse(messageQueue)
for(let msg of messages){

}
eval('window.messageQueue=[]')
```
### Native如何将处理结果告诉H5
- 如果H5需要Native执行完某一条指令时通知到H5，那么H5只需要在window上准备一个回调函数，在里面做该做的事，并将这个回调函数的名字在上一步创建消息对象时，放进这个对象中：
- 这样，在Native执行完你需要的指令后会再次执行那段神奇的代码进入WebView的世界，执行定义在window上名为callbackName的方法，并把native执行的结果传给这个方法
```
messageQueue.push(JSON.stringify({
  message: 'xxx',
  params: 'xxx',
  callbackName: 'xxx'
}))

for(let msg of messages){
  let result = doSthWithMessage(message)
  eval(`window[${message.callbackName}](${result})`)
}
eval('window.messageQueue=[]')
```
- 这也就揭露了Native是如何给H5发送消息的，直接执行window上定义好的一个方法即可
### 为了代码更规范，保证H5不胡乱的创建callBackName
- 为了代码更规范，保证H5不胡乱的创建callBackName，Native并不是直接执行window上的callbackName方法，而是会调用一个大概叫handleMessageFromNative的方法，这个方法是H5这边提前准备并定义在window上的方法，在这个方法中对消息的处理进行了收口，在里面调用window上的callbackName方法，执行完成后，将callbackName方法从window上删除掉 
```
//H5
function handleMsgFromNative(message){
  const {callback, result} = message
  window.[callbackName](result)
  delete window[callbackName]
}

window.handleMsgFromNative = handleMsgFromNative

//Native

```