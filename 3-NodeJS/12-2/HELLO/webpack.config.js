const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    mode: 'development',
    // mode:"production",
    entry: {
        login: './src/js/login.js',
        register: './src/js/register.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),

        filename: 'js/[name].js'
    },
    plugins: [
        getHtmlWebpackPlugin('login'),
        getHtmlWebpackPlugin('register'),

        // new MiniCssExtractPlugin({
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']


            }]
    }
};


function getHtmlWebpackPlugin(name) {
    return new HtmlWebpackPlugin({
        chunks: [`${name}`],
        // 原路径
        template: `./src/html/${name}.html`,
        // 新路径
        filename: `html/${name}.html`

    })
}
