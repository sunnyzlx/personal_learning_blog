# webpack4
1. webpack4,速度更快，大型项目节约90%的构建时间，内置了更多了默认配置，变更了许多api
2. 彻底学会webpack的配置，理解webpack的作用及原理，上手项目的打包配置过程，拥有工程化的前端思维
3. webpack打包优点：
- 1）index.html中只有一个js文件，网页的运行速度会很快，
- 2）文件与文件之间的依赖关系非常明确，不存在依赖引入顺序问题导致的代码运行错误问题，
- 3）ES Moudule 模块引入方式，更方便，但需要同样的方式将模块导出，浏览器不支持这种模块引入方式，但webpack转译后可用引入和导出的语法
4. 四个核心概念：
- 入口entry
- 输出output
- loader
- 插件plugins
## 1. webpack是什么？webpack 模块打包工具
- webpack本质上是一个模块打包工具，它在处理应用程序时，会递归的构建一个依赖关系图，包含应用程序所需的每个模块，然后将所有模块打包成一个或多个bundle
- webpack是一个模块打包工具，它可以识别任何模块导入和导出的语法，包括
  - ES Module的模块引入导出方式， import from / export default
  - CommonJS的模块引入导出方式， const Header = require(./header.js) / module.exports = Header
  - AMD
  - CMD
- webpack原来只是一个JS的模块打包工具，现在不仅可以打包js，还可以打包css, png/jpg/jpeg图片等各种文件
- 提升webpack打包速度的两个非常重要的点：1.保持nodejs为最新版本，保持webpack为最新版本，高版本的webpack会利用nodejs中的一些新特性来提高他的打包速度，
- webpack-cli模块使得我们可以在命令行中正确的运行webpack
- npx 就是让项目内部安装的模块用起来更方便，不必加上路径,,,npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件（./node_modules/.bin/webpack
- npm scripts 当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径
## 2. 模块是什么？
- 对于webpack来说，项目中的任何文件都可以称之为一个模块
## 3. webpack的配置文件有什么作用？
## webpack构建流程
   - 初始化参数，从配置文件和shell语句中读到的参数合并，得到最后的参数
   - 开始编译：用合并得到的参数初始化complier对象，加载是所有配置的插件，执行run方法开始编译
   - 确定入口，通过entry找到入口文件
   - 编译模块，从入口文件出发，调用所有配置的loader对模块进行解析翻译，在找到该模块依赖的模块进行处理
   - 完成模块编译，得到每个模块被翻译之后的最终的内容和依赖关系
   - 输出资源，根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，在把每个chunk转换成一个单独的文件加载到输出列表
   - 输出完成，确定输出的路径和文件名，把内容写到文件系统中
在以上过程中，webpack会在特定的时间点广播出特定的事件，插件在舰艇感兴趣的事件后会执行特定的逻辑，改变webpack的运行结果
## 如何利用webpack来优化前端性能
   -  压缩代码。uglifyJsPlugin 压缩js代码， mini-css-extract-plugin 压缩css代码
   - 利用CDN加速，将引用的静态资源修改为CDN上对应的路径，可以利用webpack对于output参数和loader的publicpath参数来修改资源路径
   - 删除死代码（tree shaking），css需要使用Purify-CSS
   - 提取公共代码。webpack4移除了CommonsChunkPlugin (提取公共代码)，用optimization.splitChunks和optimization.runtimeChunk来代替
## 参考
  - https://www.jianshu.com/p/e80d38661358
  - https://www.jianshu.com/p/bb1e76edc71e
  - https://www.jianshu.com/p/e80d38661358
  - https://segmentfault.com/a/1190000015355816

## 开发
  - 使用source map, 目的：为了更容易地追踪错误和警告，将编译后的代码映射回原始源代码
    - devtool: 'inline-source-map'
  - 使用观察模式，如果其中一个文件被更新，代码将被重新编译，而不必手动运行整个构建，唯一的缺点是，为了看到修改后的实际效果，你需要刷新浏览器
    - 添加一个用于启动 webpack 的观察模式的 npm script 脚本即可： "watch": "webpack --watch",
  - 使用 webpack-dev-server，提供了一个简单的 web 服务器，并且能够实时重新加载
    - 默认在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    - npm install --save-dev webpack-dev-server
    - 添加一个 script 脚本，可以直接运行开发服务器(dev server)："start": "webpack-dev-server --open",
    - 最后根据Hot Module Replacement的指示再添加一个NamedModulesPlugin，它的作用大概是更容易分析依赖：
    ```
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    ```
    - 来自于devServer官方的解释是（找了半天也没找到）借助于style-loaderCSS很容易实现HMR，而对于js，devServer会尝试做HMR，如果不行就触发整个页面刷新。你问我什么时候js更改才会只触发HMR，那你可以试着再加一个参数hotOnly: true试一试，这时候相当于禁用了自动刷新功能，然而devServer会告诉你这个文件不能被热更新哦。
  - tree shaking，移除 JavaScript 上下文中的未引用代码(dead-code)
    - 它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。
    - 新的 webpack 4 正式版本，扩展了这个检测能力，通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分
    - 你可以将应用程序想象成一棵树。绿色表示实际用到的源码和 library，是树上活的树叶。灰色表示无用的代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下。
    - 通过 import 和 export 语法，找出那些需要删除的“未使用代码(dead code)”，然而，我们不只是要找出，还需要在 bundle 中删除它们,为此，我们将使用 -p(production) 这个 webpack 编译标记，来启用 uglifyjs 压缩插件。注意，--optimize-minimize 标记也会在 webpack 内部调用 UglifyJsPlugin。从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。
    - 为了学会使用 tree shaking:
      - 使用 ES2015 模块语法（即 import 和 export）
      - 在项目 package.json 文件中，添加一个 "sideEffects" 入口
      - 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）
## 配置
  - 开发环境(development)和生产环境(production)的构建目标差异很大
  - 在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server
  - 在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间
  - 由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置
  - 以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置