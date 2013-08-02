var express = require('express');
var app = express();
var fs = require('fs');
var inBuffer = fs.readFileSync('index.html', 'utf8').toString('utf8');


app.use(express.logger());

app.get('/', function(request, response) {
  console.log('Request to "/"...');
//  response.contentType('text/html' );
//  response.send('Hello World 2 from ANB2!');
  response.send(inBuffer);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
