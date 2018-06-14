//module.exports = {
//    entry: {
//        main:'./app.js'

//   },
//    output: {
//        filename:'bundle.js'
//    },
//    watch: true
//}


module.exports = {
    entry: {
        main: './app.js'

    },
    output: {
        filename: 'bundle.js'
    },
    watch: true,
    devtool:'source-map',
    module: {
        rules: [
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "jshint-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets:['es2015']
                }
            },
            {
               // test: /\.css$/,
               // loader: 'style-loader!css-loader'

                 test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}