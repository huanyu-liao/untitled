/**
 * Created by leo on 2015/10/10.
 */
var http;
http = require('http');//引入http module
http.createServer(function(request,response){//创建一个web server
    //回调函数，这样创建server方法就不会阻塞了
    response.writeHead(200,{'contentType':'text/plain'});
    response.end('Hello World!\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');