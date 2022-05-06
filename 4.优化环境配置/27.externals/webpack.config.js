
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bulit.js',
        path:resolve(__dirname,'build')
    }, 
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'production',

    // 拒绝jquery被打包进来
    externals: {
        jquery: 'jQuery'
    }
}