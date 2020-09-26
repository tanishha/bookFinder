const express = require('express')
const app = express();

app.listen(7000, function (err, done) {
    if (err) {
        console.log('Server failed to connect');

    } else {
        console.log('Server connected to 7000');
    }
})