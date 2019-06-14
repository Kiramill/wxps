
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    test: /\.(sa|sc|c)ss/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        },
        {
            loader: 'sass-loader',
            options: {
                includePaths: [path.resolve(__dirname, 'src', 'scss')],
                sourceMap: true
            }
        }
    ]
}
