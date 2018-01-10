var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AstroPix' });
});


router.get('/fetch_picture', function(req, res, next){

    if (req.query.today) {
        res.send('todo: fetch today picture');
    }
    else if (req.query.random) {
        res.send('todo: fetch random picture');
    } else {
        next();  // Send to next handler. Since there isn't one, this will end up at the 404 error handler, and send a 404 response
    }

});


module.exports = router;
