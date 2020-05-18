const crypto = require('crypto');
const express = require('express');
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const SignupModel = mongoose.model("signups");
const request = require('request');
let formData = {}
router.get('/', function(req, res, next) {
  console.log("Rudransh")
  res.render('Signup', { 
    title: 'Signup',
    description: 'Signup',
    errors: [],
    form: formData
  });
});
console.log("jani")
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
    check('password')
      .isLength({min : 6})
      .withMessage("Password length shoud be grather then 6"),
    check('password') 
      .custom((value, {req}) => (req.body.confirm_password=="" || value === req.body.confirm_password))
      .withMessage("Password don't match")
      
      
        
  ],
  (req, res, next)=>{
     console.log("in valid")
    const result = validationResult(req);
    console.log(result['errors'].length);
    if(result['errors'].length==0){
      
  
      const timestamp = new Date();
      const name = req.body.name;
      const email = req.body.email;
      const phone = parseInt(req.body.phone);
      const addr = req.body.address;
      const password=req.body.password;
      const geodata = 
        request(
          `http://photon.komoot.de/api/?q=${addr.replace(/\s/g,'+')}`, 
          { json: true }, 
          (err, resp, body) => {
            if(err) { return {}; }
            return body;
          }
        );
        let data = {
          timestamp: timestamp,
          name: name,
          email: email,
          phone: phone,
          password:crypto.createHash('md5').update(password).digest('hex'),
          location: {
            input: addr,
            geojson: geodata
          }
        }
        let instance = new SignupModel(data);
        console.log(instance)
        instance.save((err, doc)=>{
          console.log("------------------")
          console.log(JSON.stringify(err));
          console.log("----------------------")
          console.log(JSON.stringify(req.body));
          console.log("----------------------")

          if(!err){
            res.render('Signup',{ 
              title: 'Signup',
              description: 'Registered Successfully',
              errors: [],
              form: []
            });
          }else{
            customErr=[];            
            Object.keys(err.errors).forEach(function(key) {
              customErr.push({"msg":err.errors[key].message});  
            });
            res.render('Signup',{ 
              title: 'Signup',
              description: 'Registeration Failed ',
              errors: customErr,
              form: req.body
            });
            
          }
      });
    
    }
    else{
      res.render('Signup',{ 
        title: 'Signup',
        description: 'SignupFailed',
        errors:result.errors,
        form: req.body
      });
    }
  });

  module.exports = router;