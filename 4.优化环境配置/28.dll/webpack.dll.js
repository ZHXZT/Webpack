const { resolve } = require ('path');
const webpack = require ('webpack');

// 使用dll技术，对某些库（jq，vue）进行单独打包
webpack默认查找webpack.config.js文件
// 需要运行webpack.dll.js文件  webpack --config webpack.dll.js

module.exports = {
    entry: {
        // 要打包的库是jq
        jqurey: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'dll'),
        // 打包的库向外暴露的名字
        library: '[name]_[hash]'
    },
    plugins: [
        // 打包一个manifest。json
        new webpack.DllPlugin({
            // 映射库暴露名称
            name: '[name]_[hash]',
            // 输出文件路径
            path: resolve(__dirname,'dll/manifest.json')
        })
    ],
    mode: 'production'
}