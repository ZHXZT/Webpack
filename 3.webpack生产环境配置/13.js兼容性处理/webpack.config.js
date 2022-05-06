const {resolve} = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
    entry:'./src/js/index.js',
    output: {
        filename: 'js/built.js',
        path:resolve(__dirname,'build')
    },
    module : {
        rules: [
            // js兼容性处理：babel-loader   @babel/preset-env   @babel/core
            // 1.基本兼容性处理：@babel/preset-env   只能转换基本语法（promise不行）
            // 2.全部js兼容性处理：@babel/polyfill   将所有兼容性代码全部引入，体积太大
            // 3.按需做兼容性处理：core-js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 预设：指示babel做这么样的兼容性处理
                    presets: [
                        '@babel/preset-env',
                        {
                            // 按需加载
                            useBuiltIns: 'usage',
                            // 指定corejs版本
                            corejs: {
                                version: 3
                            },
                            // 指定兼容到浏览器版本
                            targets: {
                                chrome: '60',
                                ie: '9',
                                edge: '17'
                            }
                        }
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode:'development'
}