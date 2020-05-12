module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer:{
        /* Caminho de onde deve abrir o servidor da app */
        contentBase: __dirname + '/public',
    },
    module:{
        rules:[
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
            }
            }
        ],
    },
};