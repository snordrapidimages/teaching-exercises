# Docs

##### Videos
+ [What the heck is the event loop anyway ? - Must see](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

##### NodeJS and Non Blocking explained
+ [Complete NodeJS  Explanation](https://openclassrooms.com/courses/ultra-fast-applications-using-node-js/node-js-what-is-it-for-exactly)
+ [Non Blocking Examples](http://hueniverse.com/2011/06/29/the-style-of-non-blocking/)


##### NPM & Modules
+ [NPM JS site](http://www.npmjs.com)
+ [Official Documentation](https://nodejs.org/api/modules.html)
+ [Example](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
+ [In depth](http://fredkschott.com/post/2014/06/require-and-the-module-system/)

##### Streams
+ [Official Documentation](https://nodejs.org/api/stream.html)
+ [Unoffical stream handbook with examples](https://github.com/substack/stream-handbook)

##### Event Emitter
+ [Official Documentation](https://nodejs.org/api/events.html#events_class_events_eventemitter)
+ [Quick Explanation](https://codeforgeek.com/2014/11/eventemitter-node-js/)
+ [Explanation with examples](http://code.tutsplus.com/tutorials/using-nodes-event-module--net-35941)

# 0. Startup

Todos
+ Install node js [Downloads](https://nodejs.org/download/)
+ Make sure it all works by typing `node --version` and `npm --version`
+ Clone this repo
+ Run `npm install` in the repo folder

# 1. Create HTTP Server

Todos
+ require http module from node
+ run `createServer` method on `http` and pass in a function with arguments `request, response`. The return from createServer should be saved as variable `server` [Docs](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
+ in the function. Run `writeHead` on response object and pass in variables 200 and an object with `{ Content-Type: 'text/html' }` [Docs](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
+ Still in the function, run `end` on `response` object and pass in a string with HTML
+ Outside the function, run `listen` on the `server` object and pass in variable `8000` [Docs](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
+ Run `node server.js` in terminal and visit localhost:8000 in your browser
+ You have created a node.js web server, congrats

### Done


# 2. Create simple router

Todos
+ In your createServer function. Check what url the user is requesting on `request.url` [Docs](https://nodejs.org/api/http.html#http_message_url)
+ If the user is looking for `/`, run writeHead with 200, and Content-Type : 'text-html'
+ If the user is looking for `/app.js`, run writeHead with 200 and Content-Type : 'application/x-javascript'
+ Else, set writeHead with 404 and Content-Type: 'text/plain'
+ Add response.end({data}) on each case with different messages so you can tell the difference [Docs](https://nodejs.org/api/http.html#http_response_end_data_encoding_callback)
+ Try visiting index.html and app.js

### Done

# 3. Serve index.html
+ require fs module from node
+ For `/` route. Run readFile and pass in index.html from root folder [Docs](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)
+ As second argument, add a callback when file has been read and send the data to the client through res.end(|file contents|)

### Done

# 4. Serve client side javascript
+ Still in server.js. Do following
+ First we need to build the packed app.js. In top of server js. require `buildClientAssets` script from `./lib`
+ Run `server.js` and make sure a folder has been created in clientside/dist with file app.js
+ For route `/app.js`, use a stream to serve the file contents. run `createReadStream` from `fs` module and pass in `./clientside/dist/app.js` as argument
+ run `.pipe(response)` on the stream
+ Restart the node process and visit [localhost:8000](localhost:8000) in your browser, you should now see the contents of index.html and your javascript should run

Note: There's is a file watcher on the clientside/src folder, this watcher will create a new dist/app.js every time a file is changed in the folder. So there's no need to restart the node process if you change any clientside code.

### Done

# 5. Hook 'em up

Now we will create a websocket connection between the client and the server. We will use socket.io

+ In server.js, require the websockets module from lib folder. Call the function and pass in the server variable as the argument. socket.io will add routes necessary for creating the socket connection
+ If everything is alright, you should see `Web socket server initialized` when restarting the application
+ Next up, go to `clientside/src/index.js` and require `websocket.js` from the same directory. Refresh the browser and you should se messages in the node console and a pop up should appear in the browser.
+ We have connection!

# 5. Send messages!

Now that our websocket connection is set up, we can start sending messages between the server and the client

+ in `clientside/src/websocket.js` register an event listener on the event `hello-world`. Register a callback with an alert or console.log or similar
+ on the SERVER side. Make sure that your return from websockets lib are assigned to variable io. After that, add the following event code
`io.on('connection', function(socket) {

})`
+ Now that we have a connection wrapper. emit a message on socket named `hello-world`
+ Make sure that your code on the client is being triggered


### Done

# 6. Event Emitter, extra task

In this task, we will create an event emitter and log server response times
+ Create a new file in `lib` called `responseLogger.js`
+ Get the `EventEmitter` constructor by requiring it from event `var EventEmitter = require('events').EventEmitter;`
+ Create a new instance of the EventEmitter and assign it to variable
+ Export the `responseLogger` object with `module.exports`
+ In `server.js`, require the `responseLogger` file from lib
+ Add a start date on the request object by writing `request.started = +new Date();`, NOTE: The + sign before date will convert it to a unix timestamp
+ In the end of each response, run `responseLogger.emit('done', request);`. Make sure you emit when the response is really done
+ Back in responseLogger.js. Add a listener for the event and log the method, url and total time `console.log(request.method, request.url, ended - request.started, "ms");`
