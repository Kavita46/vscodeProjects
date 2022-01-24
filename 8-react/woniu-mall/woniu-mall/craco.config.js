const CracoLessPlugin = require('craco-less');
const path = require('path')
// import {resolve} from 'path';

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1890ff' }, // 自定义主题色的配置
                        javascriptEnabled: true, // 允许使用js来进行控制
                    },
                },
            },
        },
    ],

    webpack: {
        alias: {
          '@': path.resolve(__dirname,"src")
        }
    }

};