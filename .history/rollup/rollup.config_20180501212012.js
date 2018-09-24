import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

module.exports = {
    entry:'./src/index.js',
    format:'umd',
    dest:'build/bundle.js'
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