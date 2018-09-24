import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

module.exports = {
    entry:'./src/index.js',
    format:'umd',
    dest:'build/bundle.js',
    plugins:[
        resolve(),
        babel({
            exclude:'node_modules/**',
        })
    ],
}