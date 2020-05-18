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
  res.render('Login', { 
    title: 'Login',
    description: 'Login',
    errors: [],
    form: formData
  });
});
router.post('/',
  [
    check('email')
    .isEmail()
    .withMessage("Email Invalid"),
    check('password')
      .isLength({min : 6})
      .withMessage("Password length shoud be grather then 6")
  ],
  (req, res, next)=>{
   const result = validationResult(req);
   console.log(result['errors'].length);
   if(result['errors'].length==0){
       const passlogin=crypto.createHash('md5').update(req.body.password).digest('hex');
       const email=req.body.email;
       SignupModel.findOne({ email: email,password:passlogin  }, function (err, user) {
        
        if(user){
          customErr=[];
          customErr.push({"msg":"Successful Login"});  
          res.render('Dashboard', { 
            title: 'Dashboard',
            description: 'Dashboard',
            errors: customErr,
            form: []
          });
        } else{
          customErr=[];
          customErr.push({"msg":"Invalid username or password"});  
          res.render('Login', { 
            title: 'Login',
            description: 'Login',
            errors: customErr,
            form: formData
          });
        }
       });
    }  else{
      res.render('Login', { 
        title: 'Login',
        description: 'Login',
        errors:result.errors,
        form: req.body
      });
    }

});

module.exports = router;