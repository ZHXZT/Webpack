const { resolve } = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    entry : './src/index.js',
    output: {
        // 文件名称
        filename: '[name].js',
        // 输出文件目录
        path: resolve(__dirname,'build'),
        // 所有资源引入公共路径前缀    'imgs/a.jpg'->'/imgs/a.jpg'
        publicPath: '/',
        // 非入口chunk的名称
        chunkFilename: 'js/[name]_chunk.js',
        // library: '[name]',//整个库向外暴露的变量名
        // libraryTarget: 'window'//变量名添加到哪个上browser
    },
    pligin: [new HtmlWebpackPlugin()],
    mode: 'development'
}