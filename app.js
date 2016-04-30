var express = require('express');
var path = require('path');
var app = express();

//routes
app.use('/client', require('./routes/client_routes'));
app.use('/library', require('./routes/lib_routes'));
app.use('/book', require('./routes/book_routes'));


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    res.render('index.ejs', {});
});

/* <rendering> of view with information about this system */
app.get('/technical', function(req, res) {
    res.render('tech.ejs');
});
app.get('/kursach', function(req, res) {
    res.render('kursach.ejs');
});
/* </rendering> */


app.listen(8008, function() {
   console.log('http://localhost:8008/');
});
