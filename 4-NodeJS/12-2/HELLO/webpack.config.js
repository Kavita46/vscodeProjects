const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
    mode: 'development',  //打包不压缩
    // mode:"production",   //打包压缩
    entry: {
        login: './src/js/login.js',
        register: './src/js/register.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),

        //[name] 代表entry里面的key
        filename: 'js/[name].js'
    },
    plugins: [
        getHtmlWebpackPlugin('login'),
        getHtmlWebpackPlugin('register'),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],

    // style-loader 是内部样式, css-loader是基础
    module: {
        rules: [
            {
                // i代表不区分大小写
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
            , {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']

            },

            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1024 * 10,
                        // 打包到哪里,默认在dist里
                        outputPath: './img',
                        esModule: false
                    }
                }
            },


            {

                test: /\.html$/i,
                use: {
                    loader: 'html-withimg-loader',
                    options: {
                        esModule: false
                    }
                }
            }
        ]
    },

    devServer:{
        port:8888,
        open:true,   // 打包加开服加打开浏览器
        hot:true,   //热更新
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


