const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/index.js',
    library: 'Test1',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.DefinePlugin({
      "console.log": 'console.error'
    })
  ]
};
