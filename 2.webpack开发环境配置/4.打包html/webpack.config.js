// loader:1.下载   2.使用
// plugins：1下载   2.引入  3.使用

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bulit.js',
        path:resolve(__dirname,'build')
    }, 
    module:{
        rules:[

        ]
    },
    plugins:[
        // 默认创建一个空的html自动引入打包输出所有资源（js。css）
        new HtmlWebpackPlugin({
            // 复制'./src/index.html'文件，并自动引入打包输出所有资源
            template:'./src/index.html'
        })
    ],
    mode:'development'
}