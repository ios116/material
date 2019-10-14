module.exports = function (env) {
    return {
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path][name]-[hash:8].[ext]"
                            }
                        },
                    ]
                },
            ],
        },
    }
};