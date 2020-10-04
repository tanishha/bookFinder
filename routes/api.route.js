const router = require('express').Router()

const booksRouter = require('../books/books.route')

router.use('/books', booksRouter)

module.exports = router;