const path = require('path');


/**
 * We will take advantage of some Node functions to get the absolute path
 * and we use Node path, in order to join the above absolute path with
 * our relative path to point to out public folder
 */
// console.log(__dirname); // contains the path to the current location
// console.log(path.join(__dirname, 'public')); // concatenate abosulete and relative path

// webpack config
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};