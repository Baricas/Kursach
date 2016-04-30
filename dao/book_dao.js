var pool = require('./../db/pool')
var queries = require('./../db/queries');

var dao = {
    save: function(book, callback) {
        var saveBook = queries.saveBook(book);
        var addToRepository = queries.addBookToRepository(book);

        pool.getConnection(function(err, connection) {
            if(err) throw err;
            connection.beginTransaction(function(err) {
                if(err) throw err;
                connection.query(saveBook, function(err, data) {
                    if(err) {
                        return connection.rollback(function() {
                            callback(err)
                        });
                    }
                    connection.query(addToRepository, function(err, data) {
                        if(err) {
                            return connection.rollback(function() {
                                callback(err);
                            });
                        }
                        connection.commit(function(err) {
                            if(err) {
                                return connection.rollback(function() {
                                    callback(err);
                                });
                            } else {
                                callback(null);
                            }
                        });
                    });
                });
            });
            connection.release();
        });
    }
}


module.exports = dao;
