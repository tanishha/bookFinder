const BookModel = require('./books.model');

function map_book_req(book, bookDetails) {
    if (bookDetails.title)
        book.title = bookDetails.title
    if (bookDetails.image)
        book.image = bookDetails.image
    if (bookDetails.authors)
        book.authors = bookDetails.authors
}

function fetch(condition) {
    return new Promise(function (resolve, reject) {
        BookModel
            .find(condition)
            .sort({
                _id: -1
            })
            .exec(function (err, books) {
                if (err) {
                    reject(err)
                } else {
                    resolve(books)
                }
            })
    })

}

function save(data) {
    const newBook = new BookModel({})
    map_book_req(newBook, data);
    return newBook.save()
}

function remove(id) {
    return new Promise(function (resolve, reject) {
        BookModel.findById(id)
            .then(function (book) {
                if (!book) {
                    return reject({
                        msg: 'book not found',
                        status: 404
                    })
                }
                book.remove(function (err, remove) {
                    if (err) {
                        return reject(err)
                    }
                    resolve(remove)
                })
                resolve(book)
            })
            .catch(function (err) {
                reject(err)
            })
    })
}
module.exports = {
    fetch,
    save,

    remove
}