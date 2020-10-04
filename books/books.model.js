const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator')

const BookSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    publisher: String,
    previewLink: String
}, {
    timestamps: true
})
BookSchema.plugin(uniqueValidator)

module.exports = mongoose.model('books', BookSchema)