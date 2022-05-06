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
    mode:'development',

    // 开发服务器devserver用来自动编译，自动打开浏览器，自动刷新
    // 特点：只会在内存中编译打包，不会输出代码
    // 指令为：npx webpack-dev-server
    devServer:{
        contentBase:resolve(__dirname,'build'),
        // 启动gzip压缩
        compress:true,
        // 端口号
        port:3000,
        // 自动打开浏览器
        open:true,
    }
}