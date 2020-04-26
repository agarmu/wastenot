const mongoose= require('mongoose');

let DonateSchema = new mongoose.Schema({
    timestamp : {
        type: Date,
        required: "Required"
    }
    name : {
        type: String,
        required: "Required"
    },
    email : {
        type: String,
        required: "Required"
    },
    address : {
        type: String,
        required: "Required"
    },
    phone number : {
        type: String,
    }
    type of donation center: {
        type: String,
        required: "Required"
    }
    types of food : {
        type: String,
        required: "Required"
    }
    quantity : {
        type: String
    }
    
});

mongoose.model("donations", DonateSchema)