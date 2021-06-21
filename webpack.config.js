// webpack.config.js
// `webpack` command will pick up this config setup by default

var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'none',
  entry: './src/js/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },   
  devServer: {
    contentBase: "./dist",
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};