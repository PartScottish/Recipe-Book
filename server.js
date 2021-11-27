var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/styling.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/styling.css'));
});

app.listen(8080);
