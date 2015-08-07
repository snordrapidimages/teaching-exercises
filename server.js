// Require your modules here
require('./lib/buildClientAssets');
var fs = require('fs');
var http = require('http');
var websockets = require('./lib/websockets');

// Write your code here

var server = http.createServer(function(request, response) {

  if(request.url === "/app.js") {
    response.writeHead(200, {"Content-Type": "application/x-javascript"});

    fs.createReadStream('./clientside/dist/app.js').pipe(response);
  } else {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<script src='app.js'></script>");
  }

});

server.listen(8000);

websockets(server);
