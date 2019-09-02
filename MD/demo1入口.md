## entry

```js
// 起点或是应用程序的起点入口
string | [string] | object { <key>: string | [string] } | (function: () => string | [string] | object { <key>: string | [string] })
```

## 简单语法
```js
用法:  entry: string | Arrary<string>
```
```js
module.exports = {
  entry:  './src/index.js'
  // entry: () => './src/index.js' // 动态入口
}
// 属性的单个入口语法，在扩展配置的时候有失灵活性。它是下面的简写
module.exports = {
  entry: {
    main: './src/index.js'
  }
}
// 向entry传入一个数组时候，将创建"多个主入口(multi-main entry)"。在你想要多个依赖文件一起注入，并且将他们的依赖导向(graph)到一个"chunk"时候，传入数组的方式就很有用。
module.exports = {
  entry:  [
    './src/index.js',
    'babel-polyfill',
  ]
  // entry: () => new Promise(resolve => resolve(['./src/index.js', 'babel-polyfill']))
}
```
## 对象语法
```js
entry: {[entryChunkName: string]: string|Array<string>}
```
```js
// 告诉 webpack 需要 3 个独立分离的依赖图
module.exports = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
}
```