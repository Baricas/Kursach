var express = require('express');
var path = require('path');
var dao = require('./dao/dao');
var Book = require('./models/book');
var app = express();

//routes
var client_routes = require('./routes/client_routes');

app.use('/client', client_routes);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs'); //layout, partials

app.get('/', function(req,res) {
    res.render('index.ejs', {});
});

app.listen(8008, function() {
   console.log('http://localhost:8008/');
});
