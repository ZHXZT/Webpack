const { resolve } = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
/*
entry:入口
    1.string: './src/index.js'
        单入口
        打包形成一个chunk 输出一个bundle文件
        chunk默认名称为main
    2.array: ['./src/index.js','./src/add.js']
        多入口
        所有入口文件只会形成一个chunk，输出一个bundle文件
            常用于hmr功能让html热更新生效
    3.object
        多入口
        有几个文件就输出几个chunk，输出几个bundele文件
        chunk名称为key
*/ 

module.exports = {
    entry : {
        index: './src/index.js',
        add: './src/add.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build')

    },
    pligin: [new HtmlWebpackPlugin()],
    mode: 'development'
}