# webpack实战
## Library库文件打包
```
  output: {
    path: path.resolve(__dirname + '/dist'),
    library: 'library', //打包生成的库文件当使用script标签引入时，将库文件挂载到全局变量library上，通过library暴露出来
    libraryTarget: 'umd' //打包生成的库文件可以使用 ES Module, commonJS, 还umd三种方式引入
  },
```
## 利用devServer.proxy实现请求转发
```
dev
```