## CleanWebpackPlugin

> npm install clean-webpack-plugin --save-dev

```js
// 需要解构
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
```

```js
// 通常配置 new CleanWebpackPlugin()即可
new CleanWebpackPlugin({
  // dry: true, // 默认false dry为true时，模拟删除，加删除，不会真的删掉文件
  verbose: true, // 默认false verbose为true时 显示日志， 当dry为true时，总是会打印日志，不管verbose是什么值
  cleanStaleWebpackAssets: true,  //默认false 自动删除未被使用的webpack资源
  protectWebpackAssets: true, // 默认false 不允许删除webapck资源
  // 测试发现，只能够保留文件；但是对文件夹使用后，文件夹下的文件被删除，只剩余一个空文件夹
  cleanOnceBeforeBuildPatterns: ['**/*', '!s.txt'], // 默认[**/*]
})
```