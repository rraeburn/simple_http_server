'use strict';

var http = require('http');

var server = http.createServer(function(req, res) {
  var url = req.url.split('/');
  var name = url[2];

  res.writeHead(200, {'Content-Type': 'text/plain'});

  if(url[1] === 'time') {
    res.write(new Date().toString());
  }
  else if(url[1] === 'greet') {
    res.write('Whats up, ' + name);
  }
  res.end();
});

server.listen(3000);  