## context

> 默认为执行启动 Webpack 时所在的当前工作目录（/Users/名字/users/learn/webpackMyselfDemo/demo1），必须是一个**绝对路径**

> <font color=red>依赖context的路径</font>
+ entry入口文件，用于从配置中解析入口起点
+ html-webpack-plugin
```js
// 在html-webpack-plugin中，模板文件的路径也是相对于context的，webpack会在path.resolve(context, '../index.html')中查找index.html模版文件
new HtmlWebpackPlugin({
  title: 'Output Management',
  template: '../index.html'
})
```


```js
// 默认是当前执行启动 Webpack 时所在的当前工作目录
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: ["./src/index.js", "./src/main.js"],
}
// 对比
module.exports = {
  context: path.resolve(__dirname),
  // Entry 的路径和其依赖的模块的路径可能采用相对于 context 的路径来描述，context 会影响到这些相对路径所指向的真实文件
  entry: ["../src/index.js", "../src/main.js"],
}
// 除此之外，还可以通过在启动 Webpack 时带上参数 webpack --context 来设置 context
// package.json
{
  "scripts": {
    "build": "webpack --context=/Users/名字/users/learn/webpackMyselfDemo/demo1/config --config config/webpack.config.js"
  }
}
module.exports = {
  // context: path.resolve(__dirname),
  entry: ["../src/index.js", "../src/main.js"],
}
```