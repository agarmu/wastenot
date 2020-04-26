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

  ReceiveModel.find( (err, docs)=>{
      if(!err){
        console.log(docs)
        res.send(docs);
      }else{
        res.send(err);
      }
  });
});

module.exports = router;
