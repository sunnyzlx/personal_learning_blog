# webpack基础
- 入口entry
- 输出output
- loader
- 插件plugins

## entry
- 入口起点，用于指示webpack，应该将哪个模块，作为构建其内部依赖图的开始

### 用法
- 单个入口语法
  - entry为 描述文件绝对路径的字符串，默认值为 './src'
  - 简单，但可扩展性不好
```
// 简写
const config = {
  entry: './path/to/entry/file.js'
}
// 正常 (默认的键名为main)
const config = {
  entry: {
    main: './path/to/entry/file.js'
  }
}
```
- 对象语法
  - 繁琐，但是可扩展性好
```
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
}
```
### 常用场景
- 分离应用程序(app)与第三方库(vendor)的入口
- 创建多页面应用程序
```
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js
  }
}
// 可以使用CommonsChunkPlugin插件，从应用程序bundle提取vendor引用到 vendor bundle，以实现长效缓存
// v4 中CommonsChunkPlugin已被替换
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
// 在多页应用中，每当页面跳转时，服务器将为你获取一个新的 HTML 文档。页面重新加载新文档，并且资源被重新下载
// 使用CommonsChunkPlugin可以为每个页面间的应用程序共享代码创建bundle
// 多页应用中，由于入口起点增多，我们可以复用入口起点之间的大量代码/模块，以提升性能
```
## output

- 输出output, 告诉webpack在哪里输出它所创建的 bundles，以及如何命名这些文件, 默认值为 ./dist
- 即使存在多个入口起点，也只指定一个输出

### 用法
- output是一个对象
- filename，定义输出文件的文件名
- path，定义目标输出目录的绝对路径
```
const config = {
  output = {
    filename: 'bundle.js',
    path: './dist'
  }
}
```
### 多个入口起点
- 如果配置了多个单独的'chunk'(例如使用多个入口起点或使用CommonsChunkPlugin插件时), 应使用占位符，确保每个输出文件都具有唯一的名称, 如果不做区分，将会报错，name或者hash都可以
```
const config = {
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```
### 使用CDN和资源hash的复杂示例 ？？
- 还有一种使用场景，我们会把打包生成的html文件给后端，作为后端的一个入口文件，把其他静态资源js，css,图片等上传到CDN域名下，这样打包生成的html文件，在引用静态资源时，就需要加上CDN的域名地址，可以通过配置publicPath来实现自动生成
```
const config = {
  output = {
    path: "/home/proj/cdn/assets/[hash]",
    publicPath: "http://cdn.example.com/assets/[hash]/"   
  }
}
```
- 在编译时不知道最终输出文件的 publicPath 的情况下，publicPath 可以留空，并且在入口起点文件运行时动态设置。如果你在编译时不知道 publicPath，你可以先忽略它，并且在入口起点设置 __webpack_public_path__。
```
__webpack_public_path__ = myRuntimePublicPath
```
## loader
- 主要用于将非JS模块进行转换，方便webpack打包
- 使用方式：3种，配置，内联，cli(shell命令)
  - 推荐使用配置方式，优点：代码简洁，同时可以对各个loader有个全局概览
- 通过（loader）预处理函数，用户可以更加灵活地引入细粒度逻辑，例如压缩、打包、语言翻译和其他更多。

### 使用
- module, 是个对象
- rules, 是个数组
- 每一条rule都是一个对象，包含两个必须属性：
   - test，匹配需要转换的文件；
   - use，使用哪个loader进行转换；

### loader特性
- 支持链式传递，一组链式的 loader 将按照相反的顺序执行，loader的执行顺序是从下到上，从右到左，在最后一个 loader，返回 webpack 所预期的 JavaScript。
- loader可以是同步的，也可以是异步的

### 如何编写 loader？？？
- loader 模块需要导出为一个函数

### 静态资源打包
- 图片资源
  - file-loader, 将文件发送到输出文件夹，并返回（相对）URL
  - url-loader, 像file loader一样工作，但如果文件小于限制，可以返回 data URL
  - 图片，字体都可以使用file-loader, url-loader来处理
```
      {
        test: '/\.(png|jpg|jpeg|gif)$/',
        use: {
          loader: 'url-loader',
          options: {
            name: '[hash:7].[ext]',
            outputPath: 'images/',
            limit: 10240 
            // 10kb 图片大小小于limit值，会将图片以base64的格式直接打包到JS中，
            // 大于limit的值，则会直接将图片打包到dist目录
          }
        }
      }
```
- 样式资源
1. css-loader
  - 解析CSS文件后，使用import加载，并且返回CSS代码, 
  - 会分析项目中几个css文件之间的依赖关系，最终将他们合并成一个css文件
  - options参数
    importLoaders: 对于使用@import引入的样式文件，也执行css-loader前面的几个loaders
2. style-loader
  - 将模块的导出作为样式添加到DOM中
  - 将css-loader处理生成的css文件挂载到页面中的head中
3. sass-loader 
  - node-sass是sass-loader的依赖模块
  - 将scss文件加载和转译为css文件
4. postcss-loader
  - 为css样式自动添加浏览器厂商前缀，还需要autoprefixer插件配合 ?? 配置失效
- 字体文件（eot|ttf|svg）
  - file-loader， 将字体文件直接从src目录移至dist目录即可

### CSS分离
- extract-text-webpack-plugin
- 它会将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。因此，你的样式将不再内嵌到 JS bundle 中，而是会放到一个单独的 CSS 文件（即 styles.css）当中。 如果你的样式文件大小较大，这会做更快提前加载，因为 CSS bundle 会跟 JS bundle 并行加载
```
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]
}
```
### CSS模块化 (CSS MODULE) ??
- 解决CSS全局作用域问题，样式冲突(污染)问题

## plugin
- plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情，类似vue,react的生命周期函数
- 使用： 1）引入插件，2）在plugins数组中实例化插件，并且可以传入参数

### HtmlWebpackPlugin
- HtmlWebpackPlugin插件
  - 会在打包结束后，在dist目录自动生成引用打包后的index.html文件
  - 会在打包结束后，自动在dist文件夹生成一个html文件，并把打包生成的结果自动注入到这个html文件中
### CleanWebpackPlugin
- CleanWebpackPlugin插件
  - 会在打包开始前，删掉dist目录下的所有文件，避免上一次打包的影响