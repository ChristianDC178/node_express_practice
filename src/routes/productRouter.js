const ProductRouter = require('express').Router();

ProductRouter.get('/product', function (req, res) {
    res.send("Product Router");
});

module.exports = ProductRouter;




