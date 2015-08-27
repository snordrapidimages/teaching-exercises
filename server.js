// Require your modules here
var http = require('http');
var fs = require('fs');

// Write your code here

require('./lib/buildClientAssets');

var server = http.createServer(function(request, response) {

  switch(request.url) {
    case "/":
    case "/index.html":
      response.writeHead(200, {
        contentType: "text/html"
      });

      fs.readFile('./index.html', function(err, data){
        if(err) throw err;

        response.end(data);
      });
      break;
    case "/app.js":
      response.writeHead(200, {
        contentType: "application/x-javascript"
      });

      fs.createReadStream('./clientside/dist/app.js').pipe(response);
      break;

  }

});

server.listen(8000)
