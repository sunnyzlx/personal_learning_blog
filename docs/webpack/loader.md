# loader

## 定义

loader, 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）

本质上，loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。

## 使用

1. 将loader信息配置于module.rules数组中
2. 每一条rule都是一个对象，包含两个必须属性：
   - test，匹配需要转换的文件；
   - use，使用哪个loader进行转换；
3. loader的执行顺序是从下到上，从右到左

## 常用loader

### 加载 images 图像,fonts 字体 
1. file-loader, 将文件发送到输出文件夹，并返回（相对）URL
2. url-loader, 像 file loader 一样工作，但如果文件小于限制，可以返回 data URL
3. 图片，字体都可以使用file-loader, url-loader来处理
### 加载 CSS
1. css-loader, 会分析项目中所有css文件之间的依赖关系，然后将他们合并成一个css文件
2. style-loader, 将css-loader处理生成的css文件挂载到页面中的head中
3. sass-loader, node-sass 和 webpack 是 sass-loader 的依赖模块
4. postcss-loader, 为css样式添加浏览器厂商前缀，还需要autoprefixer插件配合
### 加载数据
1. 可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML
2. 类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行
3. 要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理加载这三类文件
4. csv,tsv使用csv-loader处理， xml使用xml-loader处理