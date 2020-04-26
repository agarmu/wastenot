var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Waste Not',
    description: 'An innovative platform to reduce food waste'
  });
});

module.exports = router;
