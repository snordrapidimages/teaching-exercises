# Create HTTP Server

Todos
+ require http module from node
+ run createServer method on http and pass in a function with arguments request, response. The return from createServer should be saved as variable "server" [Docs](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
+ in the function. Run writeHead on response object and pass in variables 200 and an object with Content-Type: 'text/html' [Docs](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)
+ Still in the function, run end on response object and pass in a string with HTML
+ Outside the function, run listen on the server object and pass in variable 8000 [Docs](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)
+ Run "node server.js" in terminal and visit localhost:8000 in your browser
+ You have created a node.js web server, congrats

## Done


# Create simple router

Todos
+ In your createServer function. Check what url the user is requesting on "request.url" [Docs](https://nodejs.org/api/http.html#http_message_url)
+ If the user is looking for "/", run writeHead with 200, and Content-Type : 'text-html'
+ If the user is looking for "/app.js", run writeHead with 200 and Content-Type : 'application/x-javascript'
+ Else, set writeHead with 404 and Content-Type: 'text/plain'
+ Add response.end() on each case with different messages so you can tell the difference
+ Try visiting index.html and app.js

## Done

# Serve files
+ require fs module from node
+ For "/" route. Run readFile and pass in index.html from root folder [Docs](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback)
+ As second argument, add a callback when file has been read and send the data to the client through res.send(|file contents|)
+ For route "/app.js", use a stream instead. run createReadStream from fs module and pass in "./build/app.js" as argument
+ run .pipe(request) on the stream
+ Restart the node process and visit localhost:8000 in your browser, you should now see the contents of index.html and your javascript should be excecuted

## Done
