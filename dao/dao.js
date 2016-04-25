var pool = require('./../db/pool')

var dao = {
    all: function(callback) {
        var sql = 'SELECT * FROM book';
        pool.query(sql, callback);
    },
    remove: function(id) {
        var sql = 'DELETE FROM book WHERE id = ' + id
        pool.query(sql);
    },
    save: function(book) {
        var sql = "INSERT INTO book (`title`,`author_name`) VALUES ('"+ book.title +"','"+ book.author_name +"')";
        pool.query(sql);
    }
}

module.exports = dao