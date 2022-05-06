
/*
    source-map:提供源代码到构建后代码的映射技术
    内联（没有在外部生成文件，只生成一个内联source-map，构建速度更快）

    source-map ： 外部      显示错误代码准确信息和源代码的错误位置
    inline-source-map :  内联   错误代码准确信息和源代码的错误位置
    hidden-source-map ： 外部      只有构建后代码错误的位置
    eval-source-map ： 内联     显示错误代码准确信息和源代码的错误位置 
    nosources-source-map：外部      错误代码准确信息，没有源代码信息
    cheap-source-map：  外部      显示错误代码准确信息和源代码的错误位置，只能精确到行

    开发环境：eval-source-map
    生产环境：source-map
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
        hot: true
    },
    // 开启source-map
    devtool: 'source-map'
}