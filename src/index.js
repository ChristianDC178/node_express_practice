const express = require('express');
const app = express();

const productRouter = require('./routes/productRouter')
const personRouter = require('./routes/personRouter')

let port = 3000;

app.use(productRouter);
app.use(personRouter);

app.get('/', function (req, res) {
    res.send("Api Alive");
});

console.log(`+Running application at port ${port}`);

app.listen(3000);