const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();
const DonationsModel = mongoose.model("donations");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donate', { 
    title: 'Donate',
    description: 'Consider Donating Food'
  });
});

router.post('/', (req, res, next)=>{
  let data = new DonationsModel();
  data.timestamp = new Date();
  data.name = req.body.name;
  data.email = req.body.email;
  data.address = req.body.address;
  data.phone = req.body.phone;
  data.center = req.body.business;
  data.food = req.body.food;
  data.foodamt = req.body.amt;
  data.save((err, doc)=>{
      if(!err){
        res.redirect("/donate");
      }else{
        res.send("Error Occured");
      }
  });
});

module.exports = router;
