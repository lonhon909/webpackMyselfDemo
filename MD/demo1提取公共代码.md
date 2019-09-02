## optimization

```js
module.exports = {
  optimization: {
    // 可以覆盖mode， production 模式下，这里默认是 true。
    minimize: false,
    // 主要就是根据不同的策略来分割打包出来的bundle
    splitChunks: {
      chunks: 'all', // 分割异步打包的代码 async（默认）/all/initial
      minSize: 30000, // 表示在压缩前的最小模块大小,默认值是30kb(30000)
      minChunks: 1, // 分割前模块的最小引用次数
      maxAsyncRequests: 5, // 按需加载时的最大并行请求数。
      maxInitialRequests: 3, // 一个入口最大的并行请求数
      automaticNameDelimiter: '~', // 名称分隔符，默认是~
      name: true, // 打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔
      cacheGroups: { // 缓存组可以继承和/覆盖splitChunks中的任何选项
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 匹配规则, 可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组
          name: "a", // 重写文件名称
          enforce: true, // 强制生成
          minChunks: 2, // 最少被几个chunk引用
          priority: 10, // 优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
          reuseExistingChunk: true, // 如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
        },
        common: {
          // ...
        },
        // ...
      }
    },
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
```