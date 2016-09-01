var http = require("http");


http.createServer(function(request, response){
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("Hello world \n");
	response.end();
}).listen(3030);

console.log("서버가 구동 중입니다. localhost:3030");