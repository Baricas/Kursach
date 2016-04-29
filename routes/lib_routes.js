var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dao = require('./../dao/lib_dao');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/get', function(req, res) {
    dao.all(function(err, libs) {
        res.render('libs.ejs', {libs: libs});
    });
});

module.exports = router;
