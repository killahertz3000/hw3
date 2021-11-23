const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "development",
    entry: "./src/js/main.js",
    output: {
        filename: 'main.[contenthash].js'
    },
    devServer: {
        port: 4200,
        contentBase: path.join(__dirname, './src/index.html'),
        watchContentBase: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|mp3|mp4)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/[hash][ext][query]",
                },
            },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}