const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sass-lint-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let cleanOptions = {
    root: path.join(__dirname, ''),
    verbose: true,
    dry: false
};

const srcPath = './src/';

module.exports = {
    entry: {
        app: path.join(__dirname, srcPath + 'app.tsx')
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {loader: 'babel-loader'},
                    {loader: "ts-loader"},
                    {loader: 'eslint-loader'}
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(cleanOptions),
        new SassLintPlugin(),
        new HtmlWebpackPlugin({
            title: 'Training App',
            template: path.join(__dirname, srcPath + 'index.html')
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
};
