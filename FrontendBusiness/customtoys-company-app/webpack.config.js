var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './src/index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:3000',
            ENTERPRISE_AUTH_API_TOKEN: "d774f026-6243-4a14-9696-051329f82987",
            ENTERPRISE_AUTH_API_URL: 'https://dev-ops-ort.herokuapp.com/api/auth/token',
            CUSTOMER_RUT_VALIDATE_API_URL: 'https://dev-ops-ort.herokuapp.com/api/rut/validate'
        })
    }
}