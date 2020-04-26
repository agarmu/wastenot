const mongoose= require('mongoose');

let DonateSchema = new mongoose.Schema({
    timestamp :{type: Date, default: Date.now},
    name : String,
    email : String,
    location : {
        coordinates: {
            lat: {type:Number, default: -96.7968559},
            long:{type:Number, default: 32.613216},
        },
        input: String
    },
    phone: String,
    orgtype: String,
    food : {
        cuisine: {type: String, default:"None"},
        info: [{
            name: String,
            amount: Number,
            units: String,
            dietary: {
                halal: {type: Boolean, default: false},
                kosher: {type: Boolean, default: false},
                vegan: {type: Boolean, default: false},
                vegetarian: {type: Boolean, default: false}
                
            } 
        }],
    }
    
});

mongoose.model("donations", DonateSchema)