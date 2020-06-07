const PersonRouter = require('express').Router();

PersonRouter.get('/person', function (req, res) {
    res.send("Person Router");
});

module.exports = PersonRouter;
