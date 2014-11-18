var express = require('express')
var app = express();
var fs = require('fs');
var buffer = new Buffer(16);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/img'))
app.get('/', function(request, response) {
	response.sendfile(__dirname + '/index.html')
})
