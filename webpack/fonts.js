module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name].[ext]'
                            },
                        }
                    ]

                }

            ]
        }
    }
};