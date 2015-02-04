var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var port = 9999;

app.get('/', function(request, response){
	response.send("hello world");
});

server.listen(port, function(){
	console.log('running server on port ' + port);
});