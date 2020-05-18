const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const request = require('request');
router.get('/', function(req, res, next) {
    console.log("Rudransh")
    res.render('Dashboard', { 
      title: 'Dashboard',
      description: 'Dashboard',
      errors: [],
      form: []
    });
  });
  module.exports = router;