const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "/src/app.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    resolve: {extensions: ["*",".js",".jsx"]},
    output: {
        path: path.resolve(__dirname,"dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
      },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'eval-cheap-module-source-map'
};