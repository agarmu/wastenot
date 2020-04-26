const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();
const ReceiveModel = mongoose.model("donations");

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('receive', { 
  //  title: 'Receive Food',
  //  description: 'Use our tool to find food donations' 
  //});

  let data = new ReceiveModel();
  data.name = "Mukul Agarwal"
  data.email = "agarmukul23@gmail.com"
  data.save();
  ReceiveModel.find( (err, docs)=>{
      if(!err){
        console.log(docs)
        res.send("Course Controller");
      }else{
        res.send(err);
      }
  });
});

module.exports = router;
