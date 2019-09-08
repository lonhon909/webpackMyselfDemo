## 配置全局变量

```js
import $ from 'jquery';

console.log($) // 显示正常
console.log(window.$) // undefined 变量并不会暴露到window上
```

```js
// 使用插件
cnpm install -D expose-loader
import $ from 'expose-loader?$!jquery';

console.log(window.$); // 正常显示

require("expose-loader?libraryName!./file.js");
// 通过属性名 "libraryName" 暴露 file.js 的 exports 到全局上下文。
// 在浏览器中，就将可以使用 window.libraryName 访问。
```

```js
// 上面使用的是内联loader, 还有前置loader(pre), 普通loader(normal), 后置loader(post)
// expose-loader 也可以直接配置到webpack

// test.js
import $ from 'jquery'; // 不适用内联loader，通过webpack配置

// webpack.config.js
module: {
    rules: [
        {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: '$'
                // 或者 loader: 'expose-loader?$',
            }]
        },
    ]
}


// 暴露成多个变量
{
    test: require.resolve('jquery'),
    use: [{
        loader: 'expose-loader',
        options: 'jQuery'
    },{
        loader: 'expose-loader',
        options: '$'
    }]
}
```

```js
// webpack4 插件加载 无需引入
plugins: [
    // 暴露全局变量
    new webpack.ProvidePlugin({
        _: 'lodash'
    })
]


// 可以直接使用
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
```