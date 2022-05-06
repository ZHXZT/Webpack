const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',   
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  // 可以将node-modules中代码单独打包一个chunk输出
  // 自动分析多入口chunk中，有没有公共文件（jquery），有的话会单独打包成一个独立的chunk
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
};
