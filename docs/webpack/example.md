# example 

```
// webpack.config.js
const path = require('path') //设置绝对路径
const HtmlWebpackPlugin = require('html-webpack-plugin') //htmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js文件引入到这个html文件中
const CleanWebpackPlugin = require('clean-webpack-plugin') 
const webpack = require('webpack')

modules.exports = {
    //模式
    mode:'production',  //production  打包文件会被压缩；  development 打包文件不会被压缩
    // development：devtool：'cheap-moudle-eavl-source-map'  
    // production：devtool：'cheap-moudle-source-map'
    devtool：'cheap-moudle-source-map', //souceMap:把打包后代码的错误映射到源代码对应的位置
    //入口
    entry：{
        main: './src/index.js'
    }，
    
    devServer:{
        //告诉服务器从哪里提供内容
        contentBase: './dist',
        open: true, //是否自动打开浏览器
        port： 8080，//打开的浏览器端口
        //下面两个是为了开启HMR（即热模块替换）
        hot： true  //开启热模块替换
        hotOnly： true， //不允许浏览器自动刷新(HTM失效的时候不要作任何处理)
    }
    //plugin可以在webpack运行到某一时刻时，帮你做一些事情
    plugins：[
        new HtmlWebpackPlugin({  //打包过程结束之后，生成一个html文件，把打包生成的文件注入到html文件中
            template:  'src/index.html'     //     
        }）
        new CleanWebpackPlugin(['dist])//清除之前打包生成的dist文件
        new webpack.hotMoudleReplacementPlugin() //  开启HMR功能   1.方便我们调试css代码
    ],
    //模块
   module ：{
       rules:[
       //图片文件
           {
               test:/\.（jpg|png|gif）$/，
               use: {
                   loader:'file-loader',
                   options:{
                       name: '[name]_[hash].[ext]'  //原始文件的名字，这次打包的hash值，原始文件的后缀， 
                       outputPath:'images/', //把图片打包到dist/images文件目录下                       
                   }
               }
           }，
           //图片文件
           {
               test:/\.（jpg|png|gif）$/，
               use: {
                   loader:'url-loader',
                   //url-loader的配置项
                   options:{
                       name: '[name]_[hash].[ext]'  //原始文件的名字，原始文件的后缀
                       outputPath:'images/', //把图片打包到dist/images文件目录下
                       limit： 2048， // 当图片大小超过2048，则会打包到目标文件生成一个新的图片文件，当图片小于2048，则会直接把图片转换为base64格式，放到bundles中（即目标文件中）
                       
                   }
               }
           },
           //字体文件
           {
               test:/\.（eot|ttf|svg）$/，
               use: {
                   loader: 'file-loader'
               }
           },
          // css文件
           {
               test:/\.css$/，
               use: ['style-loader', 'css-loader']  //css-loader分析文件中各css之间的关系并且把他们合并到一个css中；style-loader将合并之后的css挂载到head中的style标签上
            },
            //scss文件
            {
               test:/\.scss$/，
               use: [  
                     'style-loader',
                     {
                         loader: 'css-loader',
                         options:{
                             importLoaders: 2   //通过import引入的css都要走下面的两个loader， 无论是何种形式的引入scss文件，都会从下往上依次执行所有的loader
                         }
                     }
                     
                     'sass-loader'，
                     'postcss-loader'  // 给css增加浏览器前缀 例如： --webkit--transform：。。。
                     ]  //loader是有执行顺序的，从下往上，从右往左；sass-loader是将sass代码翻译为css代码，然后交给css-loader去执行
            },
       ]
   }，
   output: {
       publicPath：'http://cdn.com.cn' ,   //将打包后的js文件上传到cdn上， index.html作为后端的入口文件
       fileName: 'bundles.js',   出口文件的名字
       path: path.resolve(__dirname, /dist) 。  出口文件的路径（绝对路径），__dirname, /dist  意思为打包到当前路径下的dist文件夹
   }
    
}
```
