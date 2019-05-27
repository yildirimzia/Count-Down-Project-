const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');

module.exports = {
    entry: ['babel-polyfill','./src/js/main.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/bundles.js'
    },
    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: "babel-loader"   
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
              },
        ]
      }
}