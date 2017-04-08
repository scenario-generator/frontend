import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from './src/middleware';

const app = express();

if(process.env.NODE_ENV === 'development') {
  const config = require('./webpack.config.dev');
  const compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(express.static(path.resolve(__dirname, 'src')));
} else if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')));
}

app.get(/images/, (req, res) => {
  res.sendFile(pathToAsset(req))
})

app.get('*', middleware);

app.listen(3456, '0.0.0.0', (err) => {
  if(err) {
    console.error(err);
  } else {
    console.info('Listening at http://localhost:3000');
  }
});

function pathToAsset(req) {
  var directory = process.env.NODE_ENV === 'development' ? 'src' : 'dist'

  return path.join(__dirname, directory, 'assets', req.originalUrl)
}