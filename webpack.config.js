const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  externals: [nodeExternals()],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': {
                'node': 'current'
              }
            }]
          ]
        }
      }
    }]
  }
};
