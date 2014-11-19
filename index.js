var express = require('express')
var app = express();
var fs = require('fs');
var buffer = new Buffer(16);

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))
app.use('/img', express.static(__dirname + '/img'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/css', express.static(__dirname + '/css'))
buffer = fs.readFileSync("index.html");
app.get('/', function(request, response) {
	response.send(buffer.toString('utf-8'))
	
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
