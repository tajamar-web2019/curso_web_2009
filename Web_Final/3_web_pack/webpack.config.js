const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCss = new ExtractTextPlugin({
    filename: 'style.css'
})

module.exports = {
    entry: './src/js/bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            // regla de CSS
            {test: /\.css$/, 
            use: [
                { loader: 'style-loader' },
                // css-loader
                {
                loader: 'css-loader',
                options: {
                    modules: true
                    }
                }
            ]}, // fin de la regla de CSS
            // regla de SaSS
            {test: /\.scss$/,
            use: extractCss.extract({
                use: [ {loader:'css-loader'},
                        {loader: 'sass-loader'}],
                fallback:'style-loader'  
            })  
            }
        ]
    },
    plugins: [extractCss]
}


