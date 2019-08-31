# webpackMyselfDemo
自学的webpack

1、webpack4 将webpack内核与webpack-cli进行了分离，即需要同时安装

```js
// webpack-cli（此工具用于在命令行中运行 webpack）
cnpm i webpack webpack-cli -D
```

2、package.json下的 --config ---------- **npm 脚本(npm script)**

```js
// 在这里使用 --config 选项只是向你表明，可以传递任何名称的配置文件。
build: webpack --config webpack.config.js
// npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack
npm run build --colors
```