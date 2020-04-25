var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('receive', { 
    title: 'Receive Food',
    description: 'Use our tool to find food donations' 
  });
});

module.exports = router;
