const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ["node_modules"]
    },


    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,

                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
      new ExtractTextPlugin('style/style.css'),
    ],

    devServer: {
        port: 8000,
        contentBase: __dirname + '/www',
        hot:true
    }
}