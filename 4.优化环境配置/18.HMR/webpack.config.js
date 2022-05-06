/*
    HMR模块热替换：一个模块变化只会重新打包这一模块

    css文件：可以使用HMR功能
    js文件：默认不能使用HMR功能     修改js代码，添加支持HMR功能的代码
    html文件： 默认不能使用，同时会导致css文件不能热更新    (不用HMR)
        解决：修改entry入口，将html文件引入
*/

const {resolve} = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    entry: ['./src/js/index.js','./src/index.html'],
    output: {
        filename:'js/built.js',
        path:resolve(__dirname,'build'),

    },
    module: {
        rules:[
            {
                // 处理less资源
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                // 处理css资源
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                // 处理图片资源
                test:/\.(jpg|png|gif)$/,
                loader:'url-loader',
                options:{
                    limit:8*1024,
                    name:'[hash:10].[ext]',
                    esModule:false,
                    outputPath:'imgs'
                }
            },
            {
                // 处理html的img
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                // 处理其他资源
                exclude:/\.(html|js|css|less|jpg|png|gif)/,
                loader:'file-loader',
                options:{
                    name :'[hash:10].[ext]',
                    outputPath:'media'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    mode:'development',
    devServer:{
        contentBase:resolve(__dirname,'build'),
        compress:true,
        port:3000,
        open:true,
        // 开启HMR，需要重启webpack
        hot: true
    }
}