/**
 * Reference
 *  - https://medium.com/@lfk29m/%E5%88%9D%E6%8E%A2node-js-3-%E5%BB%BA%E7%AB%8Bhttp-server-fcbed0a5f1ee
 */
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
    console.log('received client\'s request');
});

server.listen(8000, function() {
    console.log('server on successfully.');
});