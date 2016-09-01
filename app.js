var http = require("http");
var router = require("./router");

var app = http.createServer(function(req, res){
	console.log(req.url);

	router.home(req, res);
	router.detail(req, res);

}).listen(3030);

console.log("서버가 구동 중입니다. localhost:3030");