/**
 * Created by leo on 2015/10/10.
 */
var http;
http = require('http');//����http module
http.createServer(function(request,response){//����һ��web server
    //�ص���������������server�����Ͳ���������
    response.writeHead(200,{'contentType':'text/plain'});
    response.end('Hello World!\n');
}).listen(8124);
console.log('Server running at http://127.0.0.1:8124/');