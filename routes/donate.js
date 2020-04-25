var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donate', { 
    title: 'Donate',
    description: 'Consider Donating Food'
  });
});

module.exports = router;
