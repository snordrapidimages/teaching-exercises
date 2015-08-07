# Startup

Todos
+ Install node js [Downloads](https://nodejs.org/download/)
+ Make sure it all works by typing "node --version" and "npm --version"
+ Clone this repo [Repo](https://github.com/snordrapidimages/teaching-exercises)
+ Run "npm install" in the repo folder

# 1. Create HTTP Server

Todos
+ require http module from node
+ run createServer method on http and pass in a function with arguments request, response. The return from createServer should be saved as variable "server" [Docs](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
+ in the function. Run writeHead on response object and pass in variables 200 and an object with Content-Type: 'text/html' [Docs](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
+ Still in the function, run end on response object and pass in a string with HTML
+ Outside the function, run listen on the server object and pass in variable 8000 [Docs](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
+ Run "node server.js" in terminal and visit localhost:8000 in your browser
+ You have created a node.js web server, congrats

## Done


# 2. Create simple router

Todos
+ In your createServer function. Check what url the user is requesting on "request.url" [Docs](https://nodejs.org/api/http.html#http_message_url)
+ If the user is looking for "/", run writeHead with 200, and Content-Type : 'text-html'
+ If the user is looking for "/app.js", run writeHead with 200 and Content-Type : 'application/x-javascript'
+ Else, set writeHead with 404 and Content-Type: 'text/plain'
+ Add response.end() on each case with different messages so you can tell the difference
+ Try visiting index.html and app.js

## Done

# 3. Serve index.html
+ require fs module from node
+ For "/" route. Run readFile and pass in index.html from root folder [Docs](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)
+ As second argument, add a callback when file has been read and send the data to the client through res.send(|file contents|)

## Done

# 4. Serve client side javascript
+ Still in server.js. Do following
+ First we need to build the packed app.js. In top of server js. require buildClientAssets script from ./lib
+ Run server.js and make sure a folder has been created in clientside/dist with file app.js
+ For route "/app.js", use a stream to serve the file contents. run createReadStream from fs module and pass in "./clientside/dist/app.js" as argument
+ run .pipe(request) on the stream
+ Restart the node process and visit localhost:8000 in your browser, you should now see the contents of index.html and your javascript should run

Note: There's is a file watcher on the clientside/src folder, this watcher will create a new dist/app.js every time a file is changed in the folder. So there's no need to restart the node process if you change any clientside code.

## Done

# 5. Hook 'em up

Now we will create a websocket connection between the client and the server. We will use socket.io

+ In server.js, require the websockets module from lib folder. Call the function and pass in the server variable as the argument. socket.io will add routes necessary for creating the socket connection
+ If everything is alright, you should see "Web socket server initialized" when restarting the application
+ Next up, go to clientside/src/index.js and require websocket.js from the same directory. Refresh the browser and you should se messages in the node console and a pop up should appear in the browser.
+ We have connection!
+ Try you connection by emitting a message from the server. On the clientside in websocket.js add a listener for the message and log or do something funny when it arrives.
+ Note: Make sure you emit the message after the connection has been successful!

## Done
