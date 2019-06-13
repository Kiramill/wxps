
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
            template: 'src/index.html',
            inject: true
        }),
        // new MiniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: "[id].css"
        // })
    ],
    module: {
        rules: [
            // {
            //     test: /\.pug$/,
            //     use: [
            //         'html-loader',
            //         'pug-html-loader'
            //     ]
            // },
            // {
            //     test: /\.(sa|sc|c)ss/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //     ]
            // },
        ]
    }
};
