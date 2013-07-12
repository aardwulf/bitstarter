var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var filer = fs.readFileSync('index.html');
// var buf = new Buffer(256);
var index = filer.toString();

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});