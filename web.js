var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
 
  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip(__dirname ));
  app.listen(process.env.PORT || 5000);
  app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});