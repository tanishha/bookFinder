const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const MONGODB_URI= "mongodb+srv://admin:ahsinatch-12@cluster0.76pyh.mongodb.net/bookFinder?retryWrites=true&w=majority"
const conxnUrl = MONGODB_URI||'mongodb://localhost:27017';
const dbName = 'bookFinder';
module.exports = {
    conxnUrl,
    dbName,
    MongoClient,
    oid: mongodb.ObjectID
}