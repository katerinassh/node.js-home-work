const path = require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'main.js'),
    },
    output: {
        filename: '[name]_bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}