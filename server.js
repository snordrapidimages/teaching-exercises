// Require your modules here
var http = require('http');
var fs = require('fs');

/**
 * Here we trigger and build if /clientside/dist/app.js
 * We use webpack to create the client side bundle
 */
require('./lib/buildClientAssets');

// Write your code here

/**
 * When running creatServer on the http object, we create a new server instance.
 * as argument, we send in a callback that will be triggered on every request a
 * server recieves.
 *
 * From createServer we get a server instance in return.
 */
var server = http.createServer(function(request, response) {

  // On every request. We have an string called url which is the url the user
  // is requesting
  switch(request.url) {
    case "/":
    case "/index.html":
      // Every HTTP response needs a header with status and headers
      response.writeHead(200, {
        contentType: "text/html"
      });

      // Here, we read the contents from index.html. We register a callback
      // that recieves an error object and data object
      fs.readFile('./index.html', function(err, data){
        // If any error is encountred, we throw it and abort the process.
        if(err) throw err;

        // We send the data to the client and end the response
        response.end(data);
      });
      break;
    case "/app.js":
      // Every HTTP response needs a header with status and headers
      response.writeHead(200, {
        contentType: "application/x-javascript"
      });

      // Here we create a read stream and pipes it to response. The response
      // will end when the stream is done
      fs.createReadStream('./clientside/dist/app.js').pipe(response);
      break;
  }

});

// Here we trigger the listen function on server. This will start the webserver on port specified
server.listen(8000);

var io = require('./lib/websockets')(server);


io.on('connection', function(socket) {

  setTimeout(function() {
    socket.emit('hello-world');

  }, 1000)

  socket.on('message', function(message) {
    io.emit('message', message);
  });

})
