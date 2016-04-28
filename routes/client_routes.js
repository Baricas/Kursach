var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dao = require('./../dao/client_dao');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get('/get', function(req, res) {
    var users = dao.all(function(err, users) {
        if(err) {
            res.status = 404;
            res.end('ШОТА НЕ ТАК');
        }
        res.render('clients.ejs', {users: users});
    });
});

module.exports = router;
