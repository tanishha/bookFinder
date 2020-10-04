const mongoose = require('mongoose')
const dbConfig = require('./config/db.config')

mongoose.connect(dbConfig.conxnUrl + '/' + dbConfig.dbName, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, done) {
    if (err) {
        console.log('error connecting error')
    } else {
        console.log('Database connection success')
    }
})