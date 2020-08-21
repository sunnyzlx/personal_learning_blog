# hybrid
- https://juejin.im/post/6844903904002457614
## hybrid是什么？
### hybrid即“混合”，即前端和客户端的混合开发，某些环节也可能涉及到server端
## 为何用hybrid?
  - 可快速迭代更新，无需app审核（纯js代码，无法获取地理位置，拍照等更高权限）
  - 体验流畅（和原生的体验基本一致）
  - 减少开发和沟通成本，双端（安卓与ios）共用一套代码
## webview
  - 是app中的一个组件（app可以有webview，也可以没有）
  - 用于加载h5页面，即一个小型的浏览器内核
## file协议
  - 本地加载，特别快，读取一次硬盘即可
  - 能够做到和客户端一样快
## 不是所有场景都适合hybrid
  - 体验要求极致，且变化不频繁，（如头条首页），使用NA
  - 体验要求高，且变化频繁，（如头条的新闻详情页），使用hybrid
  - 体验无要求，不常用，（如微信的举报，反馈页面），使用H5
## hybrid的具体实现
  - 前端做好静态页面（html，css，js），然后交给客户端
  - 客户端拿到静态页面，以文件形式存储在app中
  - 客户端在一个webview中使用file协议加载静态页面

## app发布之后，静态文件如何实时更新？介绍一下hybrid的更新上线流程？
  - 分版本，有版本号，如201903261506
  - 将静态文件压缩成zip包，上传到服务端
  - 客户端每次启动，都去服务端检查版本号
  - 如果服务端版本号大于客户端版本号，就去下载最新的zip包
  - 下载完之后解压包，将现有文件覆盖
### 3个要点
  - 服务端的版本和zip包维护
  - 客户端更新zip包之前，先对比版本号
  - zip下载解压和覆盖
## 新闻详情页适用hybrid,前端如何获取新闻内容？
  - 不能用ajax获取，原因，一，跨域（服务端https, H5这file协议），二，速度慢（hybrid几十ms，而h5要1s左右）
  - 故，，客户端获取新闻内容，然后js通讯拿到内容，再渲染
## hybrid和h5的主要区别？
  - 优点
    - 体验更好，和客户端体验基本一致
    - 可快速迭代，无需app审核（关键）
  - 缺点
    - 开发成本高（联调，测试，查bug都比较麻烦）
    - 运维成本高（更新上线流程复杂）
  - 使用场景
    - hybrid：产品的稳定功能，体验要求高，迭代频繁
    - H5：单次的运营活动，如抢红包，或不常用的功能
    - hybrid适合产品型，h5适合运营型
## 前端js与客户端如何通信？

#### hybrid:是客户端和前端的混合开发，存在的意义在于快速迭代（上线快，无需审核； 加载文件快，使用file协议），无需审核

- js和客户端通讯的基本形式
  - js访问客户端能力，传递参数和回调函数
  - 客户端通过回调函数返回内容
  - 调用能力，传递参数，监听回调
  - shema是前端和客户端通讯的基本协议，通过iframe可以访问shema协议
  - 调用schema代码的封装
- 内置上线（更快，更安全）
  - 将schema封装的代码打包，叫做invoke.js，内置到客户端
  - 客户端每次启动webview，都默认执行invoke.js
  - 本地加载，没有网络请求，黑客看不到schema协议，更安全
  
# JSBridge 的通信原理
  - JavaScript 调用 Native 的方式，主要有两种：注入 API 和 拦截 URL SCHEME。
  - Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上
## 注入API(可能会有兼容性问题)
  - 注入 API 方式的主要原理是，通过 WebView 提供的接口，向 JavaScript 的 Context（window）中注入对象或者方法，让 JavaScript 调用时，直接执行相应的 Native 代码逻辑，达到 JavaScript 调用 Native 的目的。
## 拦截 URL SCHEME
  - 拦截 URL SCHEME 的主要流程是：Web 端通过某种方式（例如 iframe.src）发送 URL Scheme 请求，之后 Native 拦截到请求并根据 URL SCHEME（包括所带的参数）进行相关操作
  - 缺点：
    - 使用 iframe.src 发送 URL SCHEME 会有 url 长度的隐患。
    - 创建请求，需要一定的耗时，比注入 API 的方式调用同样的功能，耗时会较长
## 对于 JSBridge 的 Callback
  - 其实就是 RPC 框架的回调机制。当然也可以用更简单的 JSONP 机制解释：
  - 当发送 JSONP 请求时，url 参数里会有 callback 参数，其值是 当前页面唯一 的，而同时以此参数值为 key 将回调函数存到 window 上，随后，服务器返回 script 中，也会以此参数值作为句柄，调用相应的回调函数。

## 注意：
  - 这一节主要讲的是，JavaScript 端的 JSBridge 的实现，对于 Native 端涉及的并不多。在 Native 端配合实现 JSBridge 的 JavaScript 调用 Native 逻辑也很简单，主要的代码逻辑是：接收到 JavaScript 消息 => 解析参数，拿到 bridgeName、data 和 callbackId => 根据 bridgeName 找到功能方法，以 data 为参数执行 => 执行返回值和 callbackId 一起回传前端。 Native 调用 JavaScript 也同样简单，直接自动生成一个唯一的 ResponseId，并存储句柄，然后和 data 一起发送给前端即可。
## JSBridge 如何引用
   - 对于 JSBridge 的引用，常用有两种方式，各有利弊。
     - 由 Native 端进行注入，注入方式和 Native 调用 JavaScript 类似，直接执行桥的全部代码。
     - 优点在于：桥的版本很容易与 Native 保持一致，Native 端不用对不同版本的 JSBridge 进行兼容；与此同时，它的缺点是：注入时机不确定，需要实现注入失败后重试的机制，保证注入的成功率，同时 JavaScript 端在调用接口时，需要优先判断 JSBridge 是否已经注入成功。

     - 由 JavaScript 端引用，直接与 JavaScript 一起执行。
     - 与由 Native 端注入正好相反，它的优点在于：JavaScript 端可以确定 JSBridge 的存在，直接调用即可；缺点是：如果桥的实现方式有更改，JSBridge 需要兼容多版本的 Native Bridge 或者 Native Bridge 兼容多版本的 JSBridge。
## JSBridge 的通信原理小结
  - JavaScript 调用 Native 推荐使用 注入 API 的方式（iOS6 忽略，Android 4.2以下使用 WebViewClient 的 onJsPrompt 方式）。
  - Native 调用 JavaScript 则直接执行拼接好的 JavaScript 代码即可。
## JSBridge 的用途
  - JSBridge 简单来讲，主要是 给 JavaScript 提供调用 Native 功能的接口，让混合开发中的『前端部分』可以方便地使用地址位置、摄像头甚至支付等 Native 功能
  - 核心是 构建 Native 和非 Native 间消息通信的通道，而且是 双向通信的通道
