const path = require('path');

module.exports = {
    output: {
        filename: 'my-first-webpack.mix.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
}