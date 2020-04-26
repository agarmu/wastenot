const mongoose= require('mongoose');

let DonateSchema = new mongoose.Schema({
    timestamp : {
        type: Date,
        required: "Required"
    },
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
    phone: {
        type: String,
    },
    center : {
        type: String,
        required: "Required"
    },
    food : {
        type : String,
        required : "Required"
    },
    foodamt : {
        type : String,
        required : "Required"
    }
    
});

mongoose.model("donations", DonateSchema)