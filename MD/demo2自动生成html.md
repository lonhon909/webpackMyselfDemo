## HtmlWebpackPlugin

> npm install --save-dev html-webpack-plugin

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
```

```js
new HtmlWebpackPlugin({
  title: 'Output Management', // 生成html文件的标题
  filename: 'assets/admin.html', // 默认index.html 输出的html的文件名称(assets/admin.html将生成于dist/assets/admin.html)
  template: './src/main.html', // html模板所在的文件路径
  inject: 'body', // 默认true 注入选项。有四个选项值 true, body, head, false.
  favicon: '', // 给生成的 html 文件生成一个 favicon。属性值为 favicon 文件所在的路径名
  meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }, // 允许注入meta标签
  minify: { // minify 的作用是对 html 文件进行压缩，minify 的属性值是一个压缩选项或者 false 。默认值为false, 不对生成的 html 文件进行压缩
    caseSensitive: true, // 是否对大小写敏感，默认false
    collapseBooleanAttributes: true, // 是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
    collapseWhitespace: true, // 是否去除空格，默认false
    minifyCSS: true, // 是否压缩html里的css（使用clean-css进行的压缩） 默认值false
    minifyJS: true, // 是否压缩html里的js（使用uglify-js进行的压缩）
    removeAttributeQuotes: true, // 是否移除属性的引号 默认false
    removeComments: true, // 是否移除注释 默认false
    removeScriptTypeAttributes: true, // 删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
    removeStyleLinkTypeAttributes: true, // 删除style的类型属性， type="text/css" 同上
  },
  // <script type=text/javascript src=bundle.js?22b9692e22e7be37b57e></script>
  hash: true, // 生成的 js 文件一个独特的 hash 值;该 hash 值是此次 webpack 编译的 hash 值。默认值为 false
  cache: true, // 默认是true的，表示内容变化的时候生成一个新的文件
  showErrors: true, // 这个我们自运行项目的时候经常会用到，showErrors 的作用是，如果 webpack 编译出现错误，webpack会将错误信息包裹在一个 pre 标签内，属性的默认值为 true ，也就是显示错误信息。开启这个，方便定位错误
  // 如果没有指定 chunks 选项，默认会全部引用
  chunks: ['app', 'vendor'], // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
  excludeChunks: ['main'], // 排除掉一些js
})
```