var split = require('split');
var through = require('through2');
var upper = false;
process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next) {
    if (upper) {
      var converted = line.toString().toUpperCase();
      upper = false;
    } else {
      var converted = line.toString().toLowerCase();
      upper = true;
    }
    this.push(converted + '\n');
    next();
  }))
  .pipe(process.stdout);
