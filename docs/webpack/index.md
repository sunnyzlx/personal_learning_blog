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
- npx 就是让项目内部安装的模块用起来更方便，不必加上路径
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
