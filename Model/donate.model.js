const mongoose= require('mongoose');

let DonateSchema = new mongoose.Schema({
    name : {
        type: String,
        required: "Required"
    },
    email : {
        type: String,
        required: "Required"
    }
    
});

mongoose.model("donations", DonateSchema)