var express = require('express');
var router = express.Router();
var Product = require('../modules/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function (err, docs) {
    var productChunks =[];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i +=chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
      res.render('shop/index', { title: 'Cart', products: productChunks });
     });
});

module.exports = router;
