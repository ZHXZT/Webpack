// 这里是webpack的配置文件
// 构建工具是基于nodejs平台运行的，模块化默认采用commonjs

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        path:resolve(__dirname,'build')
    },
    // loader的配置
    module:{
        rules:[
            {
                // 匹配哪些文件
                test:/\.css$/,
                // 使用哪些loader进行处理
                use:[
                    // loader执行顺序：从下往上
                    // 创建style标签，将js样式资源插入添加到head生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，内容为样式字符串
                    'css-loader'
                     
                ]
            },
            {
                test:/\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[

    ],
    // 模式
    mode:'development',
}