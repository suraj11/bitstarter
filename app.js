var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public'));
    app.use('/', express.static(__dirname + '/img'));
    app.use('/', express.static(__dirname + '/js'));
    app.use('/', express.static(__dirname + '/css'));	
}).listen(port);
