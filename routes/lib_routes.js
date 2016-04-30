var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var dao = require('./../dao/lib_dao');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/get', function(req, res) {
    dao.allDetailed(function(err, libs) {
        if(err) {
            res.status = 500;
            res.end('Internal error');
        }
        res.render('libs.ejs', {libs: libs});
    });
});

/* --- ajax --- */
router.post('/repositories', function(req, res) {
    var libId = req.body.id;
    dao.repsByLibId(libId, function(err, reps) {
        if(err) {
            res.status = 500;
            res.end('Internal error');
        }
        res.json({reps: reps});
    });
});
/* --- /ajax --- */

module.exports = router;
