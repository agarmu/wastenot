const mongoose = require('mongoose');
//require('dotenv').config();


mongoose.connect("MONGOS = mongodb+srv://user-one:3P4HA3AbKSECzo7b@cluster0-9pg8u.azure.mongodb.net/App?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
  if(error)
    {
      console.log("Error connecting to database");
      console.log(error)
    }
  else
    {
        console.log("Success!");
    }
});

const Donate = require('./donate.model.js')