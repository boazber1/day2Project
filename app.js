var express = require('express');
var app = express();
var path = require('path');
var open = require('open');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(8080);
open('http://127.0.0.1:8080' , 'chrome')