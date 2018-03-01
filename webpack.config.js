const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js'
  },
  resolve: {
    alias: {
      test: path.resolve(__dirname, 'packages/test')
    }
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
