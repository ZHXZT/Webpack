

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const webpack = require ('webpack');
const AddAssetHtmlWebpackPlugin =require ('add-asset-html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bulit.js',
        path:resolve(__dirname,'build')
    }, 
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.DllReferencePlugin({
            manifest:resolve(__dirname,'dll/manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin ({
            filepath: resolve(__dirname,'dll/jquery.js')
        })
    ],
    mode:'development'
}