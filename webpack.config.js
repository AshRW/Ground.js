const path = require('path')

module.exports = {
    // For Multi Page Application

    // entry:{
    //     index: ['regenerator-runtime/runtime', './src/index.js'],
    //     edit: ['regenerator-runtime/runtime', './src/edit.js'],
    // }
    entry:['regenerator-runtime/runtime', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'main.js'
        // if Multi page application

        // filename: '[name]-main.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/',
        port: 9000,
        watchContentBase: true
      },
    //   devtool:'source-map' is very slow and appears in production which is officially not recommended

      devtool: "source-map"
    //   devtool:'eval'
}