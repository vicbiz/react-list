var path = require("path");

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/api/index.js',
    output: {
        path: path.resolve(__dirname, '/dist' + '/app'),
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2105']
                }
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // }
        ]
    }
}