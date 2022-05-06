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
            // 语法检查：eslint  eslint-loader
            // 只检查自己写的代码，不检查第三方库
            // 在package.json文件中eslintconfig中设置
            // airbnb-->eslint-config-airbnb-base     eslint    eslint-plugin-import
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // 自动修复
                    fix:true,
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