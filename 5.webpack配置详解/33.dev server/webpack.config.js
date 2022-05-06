const { resolve } = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');


module.exports = {
    entry : './src/js/index.js',
    output: {
        filename: '[name].js',
        path: resolve(__dirname,'build'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 多个loader用use
                use:['style-loader','css-loader']
            },
        ]
    },
    pligin: [new HtmlWebpackPlugin()],
    mode: 'development',
    resolve: {
        // 配置解析模块路径别名：优点简写路径  缺点没有提示
        alias: {
            $css: resolve(__dirname,'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js','.json','.jsx','.css'],
        // 告诉webpack解析模块去找哪个目录
        module: [resolve(__dirname,'../../node_modules'),'node_modules']
    },
    devServer: {
        // 运行代码的目录
        contentBase: resolve(__dirname,'build'),
        // 监视contentbase目录下的所有文件，文件变化就reload
        watchContentBase: true,
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/
        },
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 5000,
        // 域名
        host: 'localhost',
        // 自动打开浏览器
        open: true,
        // 开启hmr功能
        hot: true,
        // 不要显示启动服务器日志
        clientLogLevel: 'none',
        // 除开基本启动信息，其他内容不显示
        quiet: true,
        // 如果出错不要全屏提示
        overlay: false,
        // 服务器代理--解决开发环境跨域问题
        proxy: {
            // 一旦的vserver（5000）服务器接收到/api/xxx的请求，就会吧请求转发到另一个服务器（3000）
            '/api': {
                target: 'http://localhost:3000',
                // 发送请求是请求路径重写：将/api/xxx --- /xxx
                pathRewtite: {
                    '^/api': ''
                }
            }
        }
    }

}