var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var util = require('util');
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded());

app.get('/#', function(request, response){
  console.log('GET /#');
  console.log('request query: ', util.inspect(request.query));
  console.log('request body: ', util.inspect(request.body));

  var data = {query: request.query, body: request.body};

  response.send(util.inspect(data));
});

app.post('/form', function(request, response){
  console.log('POST /form');
  console.log('request query: ', util.inspect(request.query));
  console.log('request body: ', util.inspect(request.body));

  var data = {query: request.query, body: request.body};

  response.send(util.inspect(data));
});

app.listen(port, function(){
  console.log('App running on port',port);
});

