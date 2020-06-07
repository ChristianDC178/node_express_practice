const express = require('express');
const entities = require('./entities')
const app = express();

let port = 3000;

app.get('/', function (req, res) {

    var p = new entities.Person('Christian');
    res.send(p.walk());

});

app.route('/product').get(function (req, res) {
    res.sendStatus(404);
});

app.route('/person').post(function (req, res) {
    res.sendStatus(404);
});

console.log(`+Running application at port ${port}`);


app.listen(3000);