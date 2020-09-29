const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const conxnUrl = 'mongodb://localhost:27017';
const dbName = 'bookFinder';
module.exports = {
    conxnUrl,
    dbName,
    MongoClient,
    oid: mongodb.ObjectID
}