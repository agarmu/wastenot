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
  /*let data = new ReceiveModel();
  data.timestamp = "Today";
  data.name = "Mukul";
  data.email = "abc@def.com";
  data.address = "555 ABAB Drive";
  data.phone = "123 456 7890";
  data.center = "School";
  data.food = "HaHaHa";
  data.foodamt = 22;
  data.save();*/

  ReceiveModel.find( (err, docs)=>{
      if(!err){
        res.render('receive', {
          title : 'Receive Food',
          description : 'Use our tool to find food donations',
          data : docs
        });
      }else{
        res.send(err);
      }
  });
});

module.exports = router;
