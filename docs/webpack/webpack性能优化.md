# webpack性能优化

## 提升webpack打包速度的方法
- 1.跟上技术的迭代(升级webpack后，node, npm, yarn的进行迭代)
- 2.在尽可能少的模块上应用loader 
  - 合理的使用exclude和include,可以降低loader的使用频率，但是对于图片处理就没有必要了，因为所有的图片都需要从src文件夹下移到dist文件夹下 
- 3.plugin尽可能精简并确保可靠
  - 插件要合理使用，不要使用一些冗余没有意义的插件，节约打包时间 
  - 要选择性能比较好，官方推荐，社区认可的插件，提高可靠性和打包速度 
- 4.resolve参数合理配置
  - 要合理使用，而不要过多使用，过多的文件查找也会降低webpack的打包速度
  ```
  resolve:{ //文件查找，方便写代码，但不能配置过多，因为文件查找也会消耗性能的
    extensions: ['js', 'jsx'], // 默认的路径后缀
    mainFiles: ['index', 'child'],
    alias: { // 路径别名
      '@' : path.resolve(__dirname, './src')
    }
  },
  ```
- 5.使用DIIPlugin提高打包速度
  - 在引入第三方模块时，每一次引入都要对第三方模块做分析，这样会消耗webpack的打包性能
  - 所以我们可以在第一次打包时，把这些第三方模块，打包到一个单独的文件dll中，之后再打包时，直接从dll文件中去引入这些第三方模块即可
  - 第一步：配置webapck.dll.js,打包第三方模块的配置文件，利用webpack.DllPlugin插件生成manifest.json这个映射文件
  - 第二步：在webpack.common.js中利用 ??
- 6.控制包文件大小
  -  tree shaking 
  -  import()动态引入
  - splitChunks做代码分隔
- 7. thread-loader, parallel-webpack, happypack多进程打包 
- 8. 合理使用sourceMap 
  - 打包生成的sourceMap越详细，打包速度就越慢
- 9. 结合stats分析打包结果 
- 10. 开发环境内存编译
- 11. 开发环境无用插件剔除