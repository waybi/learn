const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:'./build/bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            // template:'./index.html'
            template:'./demo.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'./build'),
        // open:true,
        port:9000,
        proxy:{
            '/api/*':{
                target:'http://localhost:8888'
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            },
        ]
    }
}