var http = require('http');
var through = require('through2');

var server = http.createServer(function (req, res) {
  req.pipe(tr).pipe(res);
});

server.listen(process.argv[2]);

var tr = through(function (buf, _, next) {
  var buffer = buf.toString().toUpperCase();
  this.push(buffer);
  next();
});
