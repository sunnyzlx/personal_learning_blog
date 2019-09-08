# webpack高级

## TreeShaking
- tree shaking 只支持ES Module的模块引入方式，ta 的底层是一个静态引入的方式，而commonjs底层是一个动态引入的方式，tree shaking只支持静态引入的方式
- 使用方式：
  - 在开发环境中, 一般tree shaking不会生效，不会删除无用代码，只会提示一下，这是为了方便sourceMap纠错调试
  ```
  optimization:{
    usedExports: true
  }
  在package.json中添加：
  sideEffects: false //对所有文件都进行tree shaking ,没有需要特殊处理的模块
  // 一般会设置 sideEffects: ["*.css", "@babel/polyfill"]
  ```
  - 在生产环境中，tree shaking 是会生效的，会剔除无用代码，且只需要设置sideEffects，内置优化中已经优化 了optimization
- @babel/polyfill并没有向代码中导入任何的内容，而是在window对象上挂载了一些全局变量，如Promise， Window.Promise

## Develoment 和 Production 模式的区分打包
- 开发环境需要强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server，线上环境需要对代码进行压缩，对SourceMap进行精简, 资源优化等，通过这些优化方式改善加载时间
- 通过第三方模块webpack-merge将公共配置与当前配置进行合并

## Webpack 和 Code Splitting(代码分隔)
- 代码分隔，与webpack无关，只是现在webpack实现这个功能实现的比较好
- webpack中实现代码分隔，两种方式：
  - 同步代码，只需在webpack.common.js中做optimization配置即可
  ```
  optimization: {
    splitChunks:{
      chunks: 'all'
    }
  }
  ```
  - 异步代码：使用import()语法异步加载的代码，无需做任何配置，会自动进行代码分隔
- SplitChunksPlugin配置参数详解
  - 魔法注释： import(/* webpackChunkName: "lodash" */ 'lodash')
  ```
  function getComponent() {
+   return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
+     var element = document.createElement('div');
+
+     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+
+     return element;
+
+   }).catch(error => 'An error occurred while loading the component');
  }
  ```
  ```
  optimization: {
    splitChunks: {
      chunks: 'async', // async只对异步代码做分隔，initial只对同步代码做分隔，all同步异步都可，此外，打包同步代码，还会走cacheGroups，再具体配置
      minSize: 30000, //大于30kb的模块才做代码分隔
      maxSize: 0, //当代码分隔后生成的模块体积大于maxSize时，会进行二次分隔，进行更细粒度的分隔
      minChunks: 1, //当某个模块被使用多少次后，才对它进行代码分隔
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: { // vendors-main.js 该同步代码属于vendors组，且打包的入口文件是main.js
          test: /[\\/]node_modules[\\/]/, //同步代码的存放是否在node_modules中
          priority: -10,
          filename: 'vendors.js' // 命名代码分隔后生成的模块名字
        },
        default: { //同步代码分隔，不属于vendors组时，会走default组，
          minChunks: 2, 
          priority: -20,
          reuseExistingChunk: true,
          filename: 'common.js' //default组也可以重命名
          // default-main.js 该同步代码属于default组，且打包的入口文件是main.js
        }
      }
    }
  }
  ```
## Lazy Loading 懒加载，Chunk是什么？
- 懒加载，使用import()语法懒加载模块，在页面需要大时候，再去加载，不需要的时候就不加载，这样可以提高加载性能
- Chunk，打包完成之后，dist文件夹下有几个js文件，就是有几个chunk
## 打包分析，Preloading, Prefetching
-  打包分析
  - 在打包命令中加入 --profile --json > stats.json，生成一个对打包过程的描述文件 stats.json
  - 生成分析文件之后，借助工具来分析打包过程的分析
  - 可以帮助我们分析打包生成代码之间的一些依赖关系，当我们做复杂项目的代码打包时，有时代码分隔出的代码形式不是很符合我们的预期，我们可以借助代码分析工具来分析，看看是不是有些代码重复打包？有些代码打包可以优化？有些代码打包比较耗时？ 
- Preloading, Prefetching
```
optimization{
  splitChunks:{
    chunks: 'all' //我们配置的代码分隔，是对同步和异步代码都分离
    // webpack默认只对异步代码做分离
  }
}
```
 - webpack默认只对异步代码做分隔，原因？
   -  因为对同步代码做完分隔后，第一次访问时加载代码，第二次加载时使用缓存，提高访问速度，但这样做只不过是提高来第二次访问页面时的加载速度，而真正对页面性能做优化，webapck希望的是，当你第一次加载页面时，它的加载速度就是最快的，所以对同步代码做分隔，根本达不到你的需求
   - 代码分析， c+shift+p 打开show coverage,做屏幕录制来分析
   - webpack真正希望我们编写代码的方式是，希望将需要交互的代码，放到异步加载的模块中去写使用import()，再用到代码时再去加载它，提高页面首次加载时的代码利用率，才是提升页面首次加载性能的关键，而非使用缓存，缓存只能提高页面第二次打开时的加载性能
   - 所以webpack希望我们编写代码时，尽可能的多写异步加载的代码，提高页面首次加载时的代码利用率，而同步代码对提升页面首次加载的性能意义并不大，只对缓存有益处,对性能提升非常有限
 - 项目中真正可以应用异步代码的典型场景：
   -  在点击登录时，会显示一个登录框，在加载首页时，登录框的代码就不应该被加载，在点击时在加载比较好，但这样又会造成点击时的用户交互很慢，所以我们可以在访问首页时，只加载首页内容，不加载登录框的代码逻辑，等到首页加载完成，带宽释放出来，网络空闲时，再去偷偷将登录框的代码逻辑下载下来，这样点击时就不会存在交互慢的问题了，这样做既解决了首页核心代码加载非常快的一个要求，又解决了点击登录框展示非常快的一个要求 
   - Prefetching会等到页面核心代码加载完成，网络空闲时加载
   - import(/* webpackPrefetch: true */ 'LoginModal');
   - Preloading会和页面核心代码一起并行加载 
   - import(/* webpackPreload: true */ 'ChartingLibrary');
   - 所以代码的最优编程应该是使用Prefetch，等到页面核心代码加载完成之后，网络空闲时，再去加载这些需要懒加载的js文件，这样才是webpack推荐的最优的编码方式，
   - 要想提高页面性能，不应该去关注缓存，因为缓存能带来的性能提升实在有限，而应该去重点关注页面加载的js文件的代码利用率，有一些交互之后才能利用到的代码，完全可以放到异步组件中，通过懒加载的方式加载，这样就可以使你的页面性能得到非常大的提升，页面访问速度变得非常的快，但🈶️觉得懒加载可能会牺牲一些用户体验，这时就可以利用Prefetch来做，但Prefetch在某些浏览器上可能会一些兼容性问题，使用时要注意
   - 重点：在做前端性能优化时，缓存其实并不是最重要的点，最重要的点是代码利用率
   ## CSS文件的代码分隔
   -  output -> chunkFilename: '[name].bundle.js', 决定 non-entry chunk(非主入口 chunk) 的名称
   -  webpack做打包时，默认会将CSS文件打包进JS中，即css in js
   -  mini-css-extract-plugin 插件会将css文件单独打包生成一个css文件，而不是打包进js中
   -  在开发环境中使用时，不支持模块热更新，导致开发效率不高，所以只在生产环境中使用它
   -  在项目中使用css时，使用import './style.css',要谨防css文件被tree shaking删除,需要在package.json中配置sideEffects: ["*.css"]
   - 使用：
   ```
   npm install --save-dev mini-css-extract-plugin
   const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    module.exports = {
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: "[name].css", //直接被引入到html文件中会走filename
          chunkFilename: "[id].css" //间接被引入html文件会走chunkFilename
        })
      ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // you can specify a publicPath here
                  // by default it use publicPath in webpackOptions.output
                  publicPath: '../'
                }
              },
              "css-loader"
            ]
          }
        ]
      }
    }
   ```
   - optimize-css-assets-webpack-plugin 打包分离出的css文件，默认未压缩，要想压缩合并，使用该插件
   ```
   npm i optimize-css-assets-webpack-plugin -S
   const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
   optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  // 就不必在plugins数组中实例化该插件了
   ```
   - 如果对于多个入口文件的打包，希望把所有入口文件中引入的css文件，都打包到dist文件夹下的同一个css文件中，需要再配置optimization下的splitChunks，optimize-css-assets-webpack-plugin插件的底层也是依赖splitChunks,需要在添加一个styles组，对打包生成的css文件做处理
   ```
   optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
   ```
   - 如果对于多个入口文件的打包，希望把每个入口文件中引入的css文件都单独打包到dist文件夹下的不同的css文件中,还是配置splitChunks,需要在添加各自对应的组
   ```
   optimization: {
    splitChunks: {
      cacheGroups: {
        fooStyles: {
          name: 'foo',
          test: (m,c,entry = 'foo') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true
        },
        barStyles: {
          name: 'bar',
          test: (m,c,entry = 'bar') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
   ```
## webpack与浏览器缓存(Caching)
- performance: false, 取消对性能提示的警告
- 使用contentHash占位符，解决浏览器缓存导致无法更新服务器静态资源的问题
- 当我们重新打包上线时，用户只需要更新有变化的代码，没有变化的代码，用户可以直接用他们本地浏览器的缓存
- contenthash是根据content产生的一个hash字符串，内容不变，hash字符串也不变，内容变了，hash字符串才变
- 在开发环境，实时重载和热模块更新会帮助我们解决缓存的问题，而在生产环境，我们就要借助contenthash占位符，帮助我们解决浏览器缓存的问题
```
// 只需在生产环境只配置
  output:{
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
```
- 对于老版本webpack，在使用了contenthash后，即便没有对代码做修改，打包后生成的contenthash也会发生变化，需要再加一些额外的配置，
- 在webpack.common.js中的optimization中添加runtimeChunk,新版本中也是可以配置该参数的，这样，在最终打包生成的代码中将会多一个runtime.contenthash.js的文件， 
- 在做webpack打包时，main.js放的是业务逻辑，vendors.js放的是第三方库文件，而业务逻辑与第三方库文件之间是一些关联，这些关联代码被称为manifest，它默认存在于main.js，也存在于vendors.js，当再次打包时，这些关联代码可能会发生改变，所以contenthash也变了，而runtime.contenthash.js文件就是把manifest文件单独抽取出来了，所以之后如果业务逻辑和库文件代码如果没有修改，则对应的contenthash也就不会发生变化，发生变化的只有runtime.contenthash.js中的contenthash，此外老版本webpack做缓存还要借助一些其他插件，建议直接升级新版本
```
optimization: {
  runtimeChunk: {
    name: 'runtime '
  }
}
```
## Shimming的作用
- 在webpack打包过程中，我们往往要做一些代码上的兼容或者打包过程的兼容 
- 例如@babel/polyfill它解决的是 ，我们打包生成的JS代码运行在低版本浏览器时，有时会因为低版本浏览器上不存在Promise变量导致我们的代码无法运行， 借助它，在低版本浏览器上自动的帮我们去构建一些类似Promise这样的全局变量，从而使我们的代码可以在低版本浏览器上运行，其实这就是一个webpack的垫片，它能够解决webpack打包过程中的一些兼容性问题，当然这种兼容性问题不局限在浏览器的高低版本间，还有一些其他方面
- 这些可以修改webpack默认行为的兼容都可以称之为垫片
-  可以自动向新的npm模块中引入jquery，解决有时候我们无法手动添加一些老版本库文件的问题
```
new  webpack.ProvidePlugin({
  $: 'jquery',
  _: 'lodash ',
  _join: ['lodash ', 'join']
})
```
-  一个js模块中的this, 默认永远指向模块自身，而不是window，如果希望将每个模块中的this都指向window,可以借助imports-loader 来对this指向做变更
```
npm i imports-loader -S
rules: [
      {
        test: '/\.js$/',
        exclude: /(node_modules|bower_components)/,
        use: [
          { loader: 'babel-loader'},
          {
            loader: 'imports-loader?this=>window'
          }
        ]
      }}
```
## 环境变量的使用
- env