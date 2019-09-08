const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
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
                }
            }
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
    },
    // Webpack 在寻找相对路径的文件时会以 context 为根目录，context 默认为执行启动 Webpack 时所在的当前工作目录。
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/index.js',
        // main: './src/main.js',
        // vendor: ['vue/dist/vue.common.dev']
    }, 
    output: {
        filename: "[name]_[hash:8].js",
        path: path.join(__dirname, '../', 'dist'),
    },
    module: {
        rules: [
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            /* {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        enforce: 'pre' // 这里有两个针对js的loader,这个配置强制前置校验，即先校验
                    }
                }
            }, */
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    /* options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            "@babel/plugin-transform-runtime"
                        ]
                    }, */
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 暴露全局变量
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        // webpack 4已经不支持使用CommonsChunkPlugin，而推荐使用optimization
        /* new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
        }), */
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
            chunks: ['app', 'main', 'vendor'], // chunks主要用于多入口文件，当你有多个入口文件，那就回编译后生成多个打包后的文件，那么chunks 就能选择你要使用那些js文件
            excludeChunks: [], // 排除掉一些js
        }),
        new CleanWebpackPlugin({
            // dry: true, // 默认false dry为true时，模拟删除，加删除，不会真的删掉文件
            verbose: true, // 默认false verbose为true时 显示日志， 当dry为true时，总是会打印日志，不管verbose是什么值
            cleanStaleWebpackAssets: true,  //默认false 自动删除未被使用的webpack资源
            protectWebpackAssets: true, // 默认false 不允许删除webapck资源
            // 测试发现，只能够保留文件；但是对文件夹使用后，文件夹下的文件被删除，只剩余一个空文件夹
            cleanOnceBeforeBuildPatterns: ['**/*', '!s.txt'], // 默认[**/*]
        })
    ]
};
