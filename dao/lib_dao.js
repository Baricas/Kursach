var pool = require('./../db/pool')
var queries = require('./../db/queries');

var dao = {
    allDetailed: function(callback) {
        var sql = queries.getLibsDetailed;
        pool.query(sql, callback);
    },
    all: function(callback) {
        var sql = queries.getLibs;
        pool.query(sql, callback);
    },
    repsByLibId: function(id, callback) {
        var sql = queries.getRepsByLibId(id);
        pool.query(sql, callback);
    }

}

module.exports = dao;
