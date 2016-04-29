var pool = require('./../db/pool')
var queries = require('./../db/queries');

var dao = {
    all: function(callback) {
        var sql = queries.getLibs;
        pool.query(sql, callback);
    }
}

module.exports = dao;
