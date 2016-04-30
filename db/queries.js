module.exports = {
    getUsers: "SELECT c.name, c.age, l.name as library, cat.name as category, COUNT(cb.book_id) as 'count' FROM client as c \
        	INNER JOIN library as l ON c.library_id = l.id \
        	INNER JOIN category as cat ON c.category_id = cat.id \
        	INNER JOIN client_book as cb ON c.id = cb.client_id GROUP BY name;",
    getUser: function(id) {
        return "SELECT c.name, c.age, l.name as library, cat.name as category, COUNT(cb.book_id) as 'count' FROM client as c \
            	INNER JOIN library as l ON c.library_id = l.id \
            	INNER JOIN category as cat ON c.category_id = cat.id \
            	INNER JOIN client_book as cb ON c.id = cb.client_id  \
            WHERE c.id = " + id + " ;";
    },
    getLibs: "SELECT id, name FROM library;",
    getLibsDetailed: "SELECT \
            	lib.name, \
            	COUNT(rep.id) as 'rep_count', \
            	COUNT(rb.book_id) as 'book_count' \
            FROM library as lib \
            	INNER JOIN repository as rep ON lib.id = rep.library_id \
            	INNER JOIN repository_book as rb ON rep.id = rb.repository_id \
            GROUP BY lib.name;",
    getLib: function(id) {
        return "SELECT lib.name, COUNT(rep.id) as 'rep_count', COUNT(rb.book_id) as 'book_count' FROM library as lib \
            INNER JOIN repository as rep ON lib.id = rep.library_id \
            INNER JOIN repository_book as rb ON rep.id = rb.repository_id \
        WHERE lib.id = " + id + " ;";
    },
    getRepositories: "SELECT rep.name, lib.name as library, COUNT(rb.book_id) as book_count FROM repository as rep \
            INNER JOIN library as lib ON rep.library_id = lib.id \
        	INNER JOIN repository_book as rb ON rb.repository_id = rep.id \
        GROUP BY rep.name;",
    getRepsByLibId: function(id) {
        return "SELECT * FROM repository WHERE library_id = " + id + " ;";
    },
    saveBook: function(book) {
        var title = book.title;
        var author = book.author;
        return "INSERT INTO book (title, author) VALUES ('"+ title +"','"+ author +"');";
    },
    addBookToRepository: function(book) {
        var title = book.title;
        var bookId = book.id;
        var repositoryId = book.repositoryId;
        return "INSERT INTO repository_book (book_id, repository_id) \
            VALUES ((SELECT id from book WHERE title LIKE '"+ title +"'), "+ repositoryId +");";
    }
}
