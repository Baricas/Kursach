module.exports = {
    getUsers: "SELECT c.name, c.age, l.name as library, cat.name as category, COUNT(cb.book_id) as 'count' FROM client as c \
            	INNER JOIN library as l ON c.library_id = l.id \
            	INNER JOIN category as cat ON c.category_id = cat.id \
            	INNER JOIN client_book as cb ON c.id = cb.client_id GROUP BY name;"

}
