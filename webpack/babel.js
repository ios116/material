module.exports = function (env) {
    return {
        plugins: [],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
            ],
        },
    }
};

