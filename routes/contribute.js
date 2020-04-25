var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contribute', { 
    title: 'Contribute',
    description: 'Join our mission'
  });
});

module.exports = router;
