const express = require('express');
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const DonationsModel = mongoose.model("donations");
const request = require('request');
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

router.post('/',
  [

    check('name')
      .isLength({min : 1})
      .withMessage('Name Empty'),
    check('email')
      .isEmail()
      .withMessage("Email Invalid"),
    check('phone')
      .isNumeric()
      .withMessage("Phone Number Invalid"),
    check('address')
      .trim()
      .isLength({min: 1})
      .withMessage("Address Empty"),
    check('cuisine')
      .isAlpha()
      .withMessage("Invalid Cuisine Type"),
    check('amt')
      .isNumeric()
      .withMessage("Quantity must be a number"),

  ], 
  (req, res, next)=>{

  const result = validationResult(req);
  console.log(result['errors'].length);
  if(result['errors'].length==0){
    

    const timestamp = new Date();
    const name = req.body.name;
    const email = req.body.email;
    const phone = parseInt(req.body.phone);
    const addr = req.body.address;
    const geodata = 
      request(
        `http://photon.komoot.de/api/?q=${addr.replace(/\s/g,'+')}`, 
        { json: true }, 
        (err, resp, body) => {
          if(err) { return {}; }
          return body;
        }
      );
    const orgtype = req.body.orgtype;
    const cuisine = req.body.cuisine;
    const foodName = req.body.food;
    const foodAmt = parseInt(req.body.amt);
    const foodUnits = req.body.units;
    const isHalal = (req.body.halal == 'yes') || false;
    const isKosher = (req.body.kosher == 'yes') || false;
    const isVegan = (req.body.vegan == 'yes') || false;
    const isVegetarian = ((req.body.vegetarian == 'yes') ||isVegan) || false;
    let data = {
      timestamp: timestamp,
      name: name,
      email: email,
      phone: phone,
      orgtype: orgtype,
      location: {
        input: addr,
        geojson: geodata
      },
      food : {
        cuisine: cuisine,
        name: foodName,
        amount: foodAmt,
        foodUnits: foodUnits,
        dietary: {
            halal: isHalal,
            kosher: isKosher,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
      }
    }
    let instance = new DonationsModel(data);
    instance.save((err, doc)=>{
      
      
      if(!err){
        res.render('donate',{ 
          title: 'Donate',
          description: 'Consider Donating Food',
          errors: [],
          form: req.body
        });
      }else{
        res.send("Error Occured");
      }
  });

}else{
  res.render('donate',{ 
    title: 'Donate',
    description: 'Consider Donating Food',
    errors: result.errors,
    form: req.body
  });
}
  
  
  

  
});

module.exports = router;
