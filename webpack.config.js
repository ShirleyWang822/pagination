var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

let configs = {
  entry: {
    vender: ['webpack/hot/dev-server', 'webpack-hot-middleware/client'], 
    index: './src/js/index.js',
  },
  output: {
    path: path.join(ROOT_PATH, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
      })
  ], // any plugin you use can be here
  resolve: {
    alias: {
      css: path.resolve(process.cwd(), 'public/css'),
    }
  },
};

module.exports = configs;
