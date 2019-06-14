
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ruleJs from './rules/ruleJs';
import rulePug from './rules/rulePug';
import ruleScss from './rules/ruleScss';

export default {
    target: 'web',
    mode: 'production',
    resolve: {
      extensions: ['*', '.js', '.json']
    },
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            ruleJs,
            rulePug,
            ruleScss,
        ]
    }
};
