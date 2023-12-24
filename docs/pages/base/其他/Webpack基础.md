# Webpack基础
webpack 是一个JavaScript 应用程序的模块打包工具，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

> 程序根据功能分解成不同的离散功能块，被称之为模块。webpack 中一个模块对应一个文件

<img :src="$withBase('/其他/webpack.png')">

## 1、核心概念

> **基本流程**
>1. 初始化：读取参数生成 Compiler，加载 Plugin，启动构建
>2. 编译：从 Entry 入口文件出发递归地解析依赖文件并根据配置中 loader 选项的对应规则进行转换 
>3. 输出：以 Entry 为分组将代码转换为文件输出

1. Entry：webpack 作为入口的文件。以此为起点构建处理依赖关系。

2. Output：webpack 打包结果输出文件的文件名与路径。

3. Loader：webpack 自身只理解 JavaScript，通过配置 loader 可以使 webpack 转化非  JavaScript 类型的模块并处理。

4. Plugins：在 Webpack 构建流程中的特定时机注入扩展逻辑执行范围更广的任务。

```javascript
// webpack.config.js
const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "/src/index.js"),
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  devtool: 'source-map', // 打包后生成 bundle.js.map文件，便于找到错误出现位置，方便调试
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html") // 配置插件，选择生成 html 文件的模版
    }),
  ]
}
```

> **部分常用插件**
> - HtmlWebpackPlugin: 自动生成index.html且自动引用打包后的 bundle.js
> - CleanWebpackPlugin: 每次打包重新生成 dist 文件内容
> - webpack.HotModuleReplacementPlugin: 修改代码后自动更新预览效果
> - uglifyjsWebpackPlugin: 对生成的 js 文件进行压缩
> - ...

## 2、devServer配置
```javascript
  devServer: {
    hot: true, // 需引入
    port: '8080',
    inline: true, // 源文件改变时自动刷新页面
    open: true,
    overlay: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  
        }
      }
    }
  }
```

```json
// 启动命令
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --open"
  }
```

## 3、构建优化

### 性能优化
- 代码压缩（optimization.minimizer 默认压缩配置为 uglifyjs-webpack-plugin）
- 提取公共代码（optimization.splitChunks）
- 使用 Tree-shaking 消除未使用模块
- 多入口情况提取公共代码（optimization.splitChunks / CommonsChunkPlugin）
- ...

### 提高构建速度
- 使用Happypack 实现多进程加速编译
- 多入口情况提取公共代码
- externals 配置来提取常用库（防止将某些 import 的包(package)打包到 bundle 中，而是在运行时再去从外部获取这些扩展依赖）
- 使用 Tree-shaking 消除未使用模块
- ...

## 4、HotModuleReplacement
启动webpack 启动本地server，浏览器可以请求静态资源，启动websocket服务，在监听到文件修改后websocket告诉客户端
