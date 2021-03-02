const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    const isProduction = env === 'development';

    return {
        entry: "/src/app.js",
        output: {
            path: path.join(__dirname,'public'),
            filename: 'bundle.js'
        },
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
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap:true
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'url-loader',
                      },
                    ],
                  },
            ]
        },
        resolve: {extensions: ["*",".js",".jsx"]},
        output: {
            path: path.resolve(__dirname,"public"),
            publicPath: "/public",
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/public/'
          },
        plugins: [new webpack.HotModuleReplacementPlugin(), new MiniCssExtractPlugin({filename: 'styles.css'})],
        devtool: isProduction ? 'source-map' : 'eval',
    }
};