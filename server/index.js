var http = require("http");

// create server
http.createServer(function(req, res){
	
	res.writeHead(200, {'Content-Type': 'text/plain'});	
	res.end('Hello Node Js in Unbuntu');

}).listen(7000);

console.log('Server running at localhost:7000/');
