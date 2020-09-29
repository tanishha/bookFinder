const BookQuery = require('./books.query');
const fs = require('fs')
const path = require('path');

function get(req, res, next) {
    const condition = {};
    BookQuery.fetch(condition)

        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}

function remove(req, res, next) {
    BookQuery.remove(req.params.id)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}

function insert(req, res, next) {
    const data=req.body;
    console.log('req.body>>', req.body)
    console.log('req.file>>', req.file)
    BookQuery.save(data)
        .then(function (data) {
            res.json(data)
        })
        .catch(function (err) {
            next(err)
        })
}
module.exports = {
    get,

    insert,

    remove
}