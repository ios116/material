const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function (env) {
    return {

        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            // options: {
                            //     hmr: process.env.NODE_ENV === 'development',
                            // },
                        },
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
    };
};
