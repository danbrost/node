var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + " received");
        response.writeHead(200, { "Content-Tpe": "text / html" });
        response.write(" Hello World!!!!!!");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server Started");
}
exports.start = start;