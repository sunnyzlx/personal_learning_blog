# webpack进阶

## SourceMap配置
- SourceMap本质上是一个映射关系
- 为了更容易地追踪error和warning，JavaScript提供了source map功能，可以将编译后的代码映射回原始源代码
- SourceMap会明确的告诉你，错误来自于哪个源文件，而不是打包编译后的文件

### 用法
- 配置 devtool: 'sorce-map'
- 选择一种 source map 格式来增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度
- source-map, 会额外生成一个映射文件，xxx.js.map，报错精确，第几行第几列 ----基础
- inline-source-map, 会将映射文件以base URL(字符串)的方式打包进bundle.js中，报错精确，第几行第几列，但比较耗费性能
- cheap-source-map, 
  - 报错不精确，只精确到行，不精确到列
  - 且报错只针对业务代码，不会管第三方模块代码，如loader的代码
- cheap-module-source-map
  - 报错不仅管业务代码，也会管第三方模块代码，如loader的代码
- eval
  - 打包速度最快，性能最好的一种方式，也不会单独生成一个映射文件，也不会生成base URL, 它是通过eval这种JS执行形式来生成sourceMap的这种映射关系的，但对于一些复杂代码，提示内容可能并不全面
### 最佳实践
- 开发环境 'cheap-module-eval-source-map', 报错提示全面，打包速度也很快
- 生产环境 'cheap-module-source-map'  提示效果会更好

## 使用WebpackDevServer提升开发效率
- shell命令添加--watch 参数，可以监听源文件改动，并帮助我们自动打包
- devServer
  - 监听源文件改动，帮助我们自动打包
  - 帮助我们自动刷新浏览器
  - 帮助我们开启一个调试server，方便我们发送ajax请求
  - 帮助我们自动打开浏览器 --open
  - 帮助我们做一个proxy接口代理，方便做跨域请求转发
  - 帮助我们开启热模块替换
  - 将打包生成的文件放到内存中，提升打包速度
## Hot Module Replacement 模块热更新
- 优点： 写css时，只更新修改的css, 而不会去重新加载html和js, 方便快速调试
- 如果不用HMR，整个页面都会重新刷新
- 如何对js修改也实现HMR功能
```
devServer: {
  contentBase: './dist',
  host: '0.0.0.0',
  port: '8089',
  open: true,
  hot: true, //开启热模块替换功能HMR
  hotOnly: true 
  //当热更新失败时，默认情况下devServer会帮助你重新刷新浏览器
  //开启hotOnly后，就阻止了devServer重新刷新浏览器的行为
  //当HMR失效时，就让ta失效，不要做其他额外的处理了
}
```
```
if(module.hot){
  module.hot.accept('./number.js', ()=>{
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}
// 监听某个js文件，当文件发生变动时，去执行想要更新的操作
```
## 使用Babel处理ES6语法
- babel-loader 帮助webpack做打包的一个工具，只是将babel与webpack之间的通信打开，并不会去转换语法
- @babel/core babel的一个核心库，可以让babel去识别JS代码里的内容，然后把JS代码转换成AST抽象语法树
- @babel/preset-env 帮助webapck将ES6语法转换为ES5语法，包含了所有ES6转ES5的转换规则，只转换了语法
- @babel/polyfill 一些函数和变量是不会做转换的，例如Promise对象和map方法，需要去对这些低版本浏览器不支持的函数和变量做补充注入，useBuiltIns: 'usage'，按需引用，只对用到的函数和变量做补充，而不是全部，避免将打包后的文件体积变得很大，影响打包性能
- @babel/polyfill会对全局范围（global scope）造成污染，如果我们构建的是一个应用程序，业务代码，我们只需安装 @babel/polyfill，然后按需引用即可
- options对象中的内容，也可以写到.babelrc文件中
```
npm install --save-dev babel-loader @babel/core  @babel/preset-env
npm install --save @babel/polyfill
在代码中引入 import '@babel/polyfill' //@babel/polyfill并没有向代码中导入任何的内容，而是在window对象上挂载了一些全局变量，如Promise， Window.Promise
{
  test: '/\.js?x$/',
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      targets: {
        chrome: '67'
      },
      presets: [['@babel/preset-env', {
        useBuiltIns: 'usage' 
        //添加该选项之后，就不需要在项目中import '@babel/polyfill'了，ta会帮助我们自动引入
      }]]
    }
}
```
- 对于软件库/工具，我们可以使用@babel/plugin-transform-runtime
- @babel/plugin-transform-runtime ?? @babel/polyfill会造成全局污染，而@babel/plugin-transform-runtime会以闭包的形式向组件注入内容，不会造成全局污染，比较适合开发第三方类库，或工具库，UI库等
- babel的学习，是个大部头，以后可以深入了解一下
```
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
npm install --save @babel/runtime-corejs2
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": 2,
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```
## 配置React代码的打包
- presets是一个数组，它的执行顺序，从下往上，从右往左
```
npm install --save react react-dom
npm install --save-dev @babel/preset-react
presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage'
    }]，
    '@babel/preset-react'
  ]
// 先使用@babel/preset-react转换react代码，
// 再使用@babel/preset-env转换ES6 代码
```