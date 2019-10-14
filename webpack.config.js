const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require('webpack-merge');
const cssDev = require('./webpack/css.dev');
const cssPro = require('./webpack/css.pro');
const babel = require('./webpack/babel');
const files = require('./webpack/files');
const fonts = require('./webpack/fonts');
const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, "build")
};
const common = merge([
    module.exports = {
        entry: { // src/components/app.scss
            spa: path.join(PATHS.source,"index.js"),
            style: path.join(PATHS.source,"sass/main.scss"),
        },
        output: {
            path: PATHS.build,
            filename: '[name].js',
            publicPath: "/"
        },
        module: {
            rules: []
        },
        devServer: {
            historyApiFallback: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.join(PATHS.source, "index.html")
            }),
        ]
    },
]);
module.exports = function (env, argv) {
    if (argv.mode === 'production') {
        return merge([
            common,
            fonts(argv),
            files(argv),
            cssPro(argv),
            babel(argv),
        ]);
    }
    if (argv.mode === 'development') {
        return merge([
            common,
            fonts(argv),
            files(argv),
            cssDev(argv),
            babel(argv),
        ]);
    }
};