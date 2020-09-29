const BookCtrl = require('./books.controller')
const router = require('express').Router();


router.route('/')
    .get(BookCtrl.get)
    .post(BookCtrl.insert)

router.route('/:id')

    .delete(BookCtrl.remove)

module.exports = router