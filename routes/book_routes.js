var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var libDao = require('./../dao/lib_dao');
var dao = require('./../dao/book_dao');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/create', function(req, res) {
    libDao.all(function(err, libs) {
        if(err) {
            res.status = 500;
            res.end('Internal error');
        }
        res.render('newbook.ejs', {libs: libs});
    });
});

router.post('/save', function(req, res) {
    var title = req.body.title;
    var author = req.body.author;
    var repositoryId = req.body.repository;

    var book = {
        title: title,
        author: author,
        repositoryId: repositoryId
    }
    dao.save(book, function(err) {
        if(err) {
            res.render('error.ejs');
        } else {
            res.redirect('/library/get');
        }
    });
});

module.exports = router;
