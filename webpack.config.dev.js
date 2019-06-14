
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import ruleJs from './rules/ruleJs';
import rulePug from './rules/rulePug';
import ruleScss from './rules/ruleScss';

export default {
    target: 'web',
    mode: 'development',
    resolve: {
      extensions: ['*', '.js', '.json']
    },
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        noEmitOnErrors: true
    },
    module: {
        rules: [
            ruleJs,
            rulePug,
            ruleScss,
        ]
    }
};
