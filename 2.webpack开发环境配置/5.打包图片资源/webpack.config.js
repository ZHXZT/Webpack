const {resolve} = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module :{
        rules:[
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                // 下载url-loader  file-loader
                loader: 'url-loader',
                options:{
                    // 图片小于8kb，会被base64处理
                    limit: 8*1024,
                    esModule:false

                }
            },
            {
                test:/\.html$/,
                // 处理html文件的img图片
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development'
}