var express = require('express');
var webpack = require('webpack');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
var compiler = webpack(config);
var app = express();
var express = require('express');
var webpack = require('webpack');
var WebpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.js');
var compiler = webpack(config);
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'json')));
app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: { colors: true }
}));

var router = express.Router();

router.get('/*', function(req, res){
  res.sendfile('./src/index.html');
});
app.use(router);

app.listen(3000, function () {
  console.log('Listening on 3000');
});
