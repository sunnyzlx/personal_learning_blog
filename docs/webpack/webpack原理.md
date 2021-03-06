# webpack原理
#### 总结一下webpack里面关于path、publicPath和contentBase的区别及用法。
- https://juejin.im/post/6844903686632636423
- output里面的path表示的是output目录对应的一个绝对路径。
- output里面的publicPath表示的是打包生成的index.html文件里面引用资源的前缀
- devServer里面的publicPath表示的是打包生成的静态文件所在的位置（若是devServer里面的publicPath没有设置，则会认为是output里面设置的publicPath的值）
- devServer里面的contentBase表示的是告诉服务器从哪里提供内容。（只有想提供静态文件时才需要）
- contentBase与打包生成的静态文件所在的位置和index.html里面引入资源的前缀是没有影响的


## 如何编写一个loader?
- loader其实是一个函数，但是不可以用箭头函数，因为函数中要用到this，要使用this下的一些变量和方法，如果使用箭头函数，this指向会有问题
- 其次，返回值的时候，
  - return,返回一个单值
  - 如果返回多个值，用this.callback(err, res, sourceMap, meta)
  - 如果loader中有异步操作，则先调用this.async(), 返回一个callback,其实就是this.callback， 在异步操作结束时，使用callback回传结果

### 给自己写的loader,配置路径查找
```
const path = require('path');

module.exports = {
  //...
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};
```
### loader应用
- 可以用loader写一个try{function(){}}catch{},做异常捕获
- 可以做国际化，
```
const { getOptions } = require('loader-utils')
module.exports = function(source){
  if(Node全局变量==='中文'){
    source.replace('{{title}}','中文标题')
  }else{
    source.replace('{{title}}','English Title')
  }
}

```
## 如何编写一个plugin
- plugin的核心机制是事件驱动或发布订阅模式

- 利用node调试工具进行调试
  - 在package.json的scripts中增加一条命令
  - "debug": "node --inspect --inspect-brk node_modules/webpack/bin/webpack.js"
  - --inspect 表示要开启node调试工具
  - --inspect-brk 在第一行打一个断点， 后续可以在文件中写debugger
  ### webpack的模块加载机制
  - https://juejin.im/post/6844903574506307597
  - https://segmentfault.com/a/1190000020918297?utm_source=tag-newest

  ### optimization.runtimeChunk 具体作用是什么？
  - 优化持久化缓存的, runtime 指的是 webpack 的运行环境(具体作用就是模块解析, 加载) 和 模块信息清单, 模块信息清单在每次有模块变更(hash 变更)时都会变更, 所以我们想把这部分代码单独打包出来, 配合后端缓存策略, 这样就不会因为某个模块的变更导致包含模块信息的模块(通常会被包含在最后一个 bundle 中)缓存失效. optimization.runtimeChunk 就是告诉 webpack 是否要把这部分单独打包出来.
  - runtimeChunk ，作用是将包含chunks映射关系的list单独从app.js里提取出来，因为每一个chunk的id基本都是基于内容hash出来的，所以你每次改动都会影响它，如果不把它提取出来的话，等于app.js每次都会改变，缓存就失效了。在使用 CommonsChunkPlugin的时候，我们也通常把webpack runtime 的基础函数提取出来，单独作为一个chunk,毕竟code splitting想把不变的代码单独抽离出来，方便浏览器缓存，提升加载速度。其实就是单独分离出webpack的一些运行文件