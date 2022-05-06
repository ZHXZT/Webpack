const { resolve } = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const TerserWebpackPlugin = require ('terser-webpack-plugin');

module.exports = {
    entry : './src/js/index.js',
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            },
        ]
    },
    pligin: [new HtmlWebpackPlugin()],
    mode: 'production',
    resolve: {
        // 配置解析模块路径别名：优点简写路径  缺点没有提示
        alias: {
            $css: resolve(__dirname,'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js','.json','.jsx','.css'],
        // 告诉webpack解析模块去找哪个目录
        module: [resolve(__dirname,'../../node_modules'),'node_modules']
    },
    optimization: {
        splitChunk: {
            chunks: 'all',
            // 分割chunk最小为30kb
            minSize: 30 * 1024,
            // 最大没有限制
            maxSize: 0,
            // 要提取的chunk最少引用1次
            minChunks: 1,
            // 入口js文件最大并行请求数量
            maxInitialRequests: 3,
            // 按需加载并行加载的文件的最大数量
            maxAsyncRequests: 5,
            // 名称链接符
            automaticNameDelimiter: '~',
            // 可以使用命名规则
            name: true,
            // 分割chunk的组
            cacheGroups: {
                    // node-Modules文件会被打包到vendors组的chunk中
                    // 满足上面公共规则,至少被引用一次
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // 优先级
                    priority: -10
                },
                default: {
                    // 要提取的chunk最少引用2次
                    minChunks: 2,
                    // 优先级
                    priority: -20,
                    // 如果现在要打包的模块和之前被提取的模块是同一个，就会复用而不是重新打包
                    reuseExistingChunk: true
                }
            }
        },
        // 将当前模块的记录其他模块的hash单独打包为一个文件runtime
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        },
        minimizer: [
            // 配置生产环境的压缩方案：js和css
            new TerserWebpackPlugin ({
                // 开启缓存
                cache: true,
                // 开启多线程打包
                parallel: true,
                // 启动source-map
                sourceMap: true
            })
        ]
    }

}