var express = require('express');
var path = require('path');
var dao = require('./dao/dao');
var Book = require('./models/book');
var app = express();

//routes
var book_routes = require('./routes/book_routes');

app.use('/book', book_routes);
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//get all of books

app.get('/', function(req,res) {
   dao.all(function(err, data) {
      res.render('index', {
        books: data  
      });
   });
});

app.listen(8008, function() {
   console.log('http://localhost:8008/'); 
});