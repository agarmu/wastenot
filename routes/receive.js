const express = require('express');
const mongoose = require("mongoose");
const moment = require("moment");
const router = express.Router();
const DonationsModel = mongoose.model("donations");

function simplifyData(data) {
  let modified = data;
  for(let i = 0; i < data.length; i++){
    modified[i].elapsed = moment(modified[i].timestamp).fromNow();
  }
    
  return modified;
}
/* GET home page. */
router.get('/', function(req, res, next) {

  DonationsModel.find((err, docs)=>{
      if(!err){
        res.render('receive', {
          title : 'Receive Food',
          description : 'Use our tool to find food donations',
          data : simplifyData(docs).reverse()
        });
      }else{
        res.send(err);
      }
  });
});

module.exports = router;