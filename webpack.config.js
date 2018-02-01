const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/index.js'
  },
  resolve: {
    alias: {
      test1: path.resolve(__dirname, 'packages/test1'),
      test2: path.resolve(__dirname, 'packages/test2')
    }
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
