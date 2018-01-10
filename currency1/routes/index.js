var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    res.render('index');

});

router.get('/convert', function (req, res) {
    var dollars = req.query.dollar_amount;
    var convertTo = req.query.to_currency;
    res.send('To do: convert $' + dollars +' to ' + converTo);


});

module.exports = router;
