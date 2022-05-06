const {resolve} = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module :{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // css兼容性处理：postcss--》postcss-loader postcss-preset-env

                    // 帮postcss找到package。json中browserslist里面的配置，通过配置加载指定的css兼容样式

                    // 1.使用loader的默认配置
                    // 2.修改loader配置
                    {
                        loader:'postcss-loader',
                        options: {
                            ident:'postcss',
                            plugins:() => [
                                // postcss的插件
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/built.css'
        })
    ],
    mode:'development'
}