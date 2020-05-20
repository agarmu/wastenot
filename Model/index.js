const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGOS, { useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
  if(error)
    {
      console.log("Error connecting to database");
      console.log(error)
    }
  else
    {
        console.log("Successful MongoDB connection");
    }
});

const Donate = require('./donate.model.js')