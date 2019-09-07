## babel-loader

```js
npm install babel-loader @babel/core @babel-preset-env -D
// @babel/core --- 核心模块
```

```js
// 在根目录下创建.babelrc文件
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-class-properties", // 支持es6 类class Preson { name = 'xxx' }这种写法
        // npm i -D @babel/plugin-transform-runtime
        // npm i -S @babel/runtime
        "@babel/plugin-transform-runtime" // generator语法 await等
    ]
}
plugins: [ // 支持装饰器配置
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]

// 或者直接在rules-loaders下
{
    test: /\.js$/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"]
        }
    },
    exclude: /node_modules/
}
```

```js
cnpm install -D @babel/polyfill

// 更高级的语法，比如原型上的语法
'asd'.includes('a'); // 需要@babel/polyfill 进行转换
```