module.exports = {
    entry:  "./src",
    output: {
        path:     "builds",
        filename: "bundle.js",
        publicPath: "builds/"
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: "babel",
                exclude: /node_modules/
            },
            {
                test: /\.less/,
                loader: "style!css!less",
                exclude: /node_modules/
            },
            {
                test: /\.png/,
                loader: "url-loader?limit=500000",
                exclude: /node_modules/
            }
        ]
    }
};