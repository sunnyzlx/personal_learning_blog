# plugins

## 含义
  - 在webpack构建流程中的特定时机注入扩展逻辑，来改变构建结果，是用来自定义webpack打包过程的方式，一个插件是含有apply方法的一个对象，通过这个方法可以参与到整个webpack打包的各个生命周期

## 常用插件
### htmlWebpackPlugin
  - 将src/index.html模板，删掉index.html里面的所有script和link标签，最终在dist/目录自动生成引用打包后的文件index.html
  ```
    var HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist')
        },
        plugins: [
            // 加入 html 模板任务
            new HtmlWebpackPlugin({
                // 模板文件
                template: './src/index.html',
                // 打包后文件名称，会自动放到 output 指定的 dist 目录
                filename: 'index.html'
            })
        ]
    }
  ```
### cleanWebpackPlugin
  - 每次构建之前删掉dist目录，避免上一次构建的影响
  ```
    const CleanWebpackPlugin = require("clean-webpack-plugin");

    module.exports = {
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
  ```
### webpack.hotModuleReplacementPlugin 开启模块热替换
  ```
  module.exports={
      devServer:{
          contentBase:'dist',
          port: 8089,
          open: true,
          hot: true,
          hotOnly: true
      },
      plugins:[
          new webpack.hotModuleReplacementPlugin()
      ]
  }
  ```
### mini-css-extract-plugin
  - 这个插件将CSS解压到单独的文件中。它为每个包含CSS的JS文件创建一个CSS文件。extract-text-webpack-plugin该插件在webpack4中不再建议使用
  ```
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css'
  }),
  ```
  - oss
### copy-webpack-plugin
  - 将src/images下的所有图片复制到dist/images目录
  ```
    const CopyPlugin = require('copy-webpack-plugin');

    module.exports = {
        plugins: [
            new CopyPlugin([{
                from: 'src/images',
                to: 'images'
            }, ]),
        ],
    };
  ```
### 