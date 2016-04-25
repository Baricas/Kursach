var express = require('express');
var router = express.Router();
var dao = require('./../dao/dao');
var Book = require('./../models/book');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

//delete book by id
router.get('/delete/:id', function(req, res) {
   dao.remove(req.params.id);
   res.redirect('/');
});

//insert new book
router.post('/save', function(req, res) {
    var title = req.body['title'];
    var author_name = req.body['author_name'];
    var book = new Book(title, author_name);
    console.log('=====================');
    console.log(book);
    console.log('=====================');
    dao.save(book);
    res.redirect('/');
});

module.exports = router;