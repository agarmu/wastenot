const express = require('express');
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const DonationsModel = mongoose.model("donations");
let formData = {}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('donate', { 
    title: 'Donate',
    description: 'Consider Donating Food',
    errors: [],
    form: formData
  });
});

router.post('/',[

  check('name')
    .isLength({min : 1})
    .withMessage('Name Empty'),
  check('name')
    .isAlpha()
    .withMessage("Name may be composed of only letters."),
  check('email')
    .isEmail()
    .withMessage("Email Invalid"),
  check('phone')
    .isNumeric()
    .withMessage("Phone Number Invalid"),
  check('address')
    .isLength({min: 1})
    .withMessage("Address Empty"),
  check('cuisine')
    .isAlpha()
    .withMessage("Invalid Cuisine Type"),
  check('amt')
    .isNumeric()
    .withMessage("Quantity must be a number")

], (req, res, next)=>{

  const errors = validationResult(req);

  res.render('donate',{ 
    title: 'Donate',
    description: 'Consider Donating Food',
    errors: errors.array(),
    form: req.body
  });
  

  /*let data = new DonationsModel();
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
  });*/
});

module.exports = router;
