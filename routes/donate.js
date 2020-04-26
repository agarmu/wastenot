const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donate', { 
    title: 'Donate',
    description: 'Consider Donating Food'
  });
});

router.post('/', (req, res, next)=>{
  res.render('donate', { 
    title: 'Donate',
    description: 'Consider Donating Food'
  });
});

module.exports = router;
