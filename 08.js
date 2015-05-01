var request = require('request');

var url = 'http://localhost:8099';
var req = request.post(url);

process.stdin.pipe(req).pipe(process.stdout);
