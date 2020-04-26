const mongoose= require('mongoose');
const GeoJSON = require('mongoose-geojson-schema')
let DonateSchema = new mongoose.Schema({
    timestamp :{type: Date, default: Date.now},
    name : String,
    email : String,
    location : {
        geojson: {
            any: mongoose.Schema.Types.GeoJSON,
            point: mongoose.Schema.Types.Point,
            multipoint: mongoose.Schema.Types.MultiPoint,
            linestring: mongoose.Schema.Types.LineString,
            multilinestring: mongoose.Schema.Types.MultiLineString,
            polygon: mongoose.Schema.Types.Polygon,
            multipolygon: mongoose.Schema.Types.MultiPolygon,
            geometry: mongoose.Schema.Types.Geometry,
            geometrycollection: mongoose.Schema.Types.GeometryCollection,
            feature: mongoose.Schema.Types.Feature,
            featurecollection: mongoose.Schema.Types.FeatureCollection,
        },
    input: String
    },
    phone: Number,
    orgtype: String,
    food : {
        cuisine: {type: String, default:"None"},
        name: String,
        amount: Number,
        units: String,
        dietary: {
            halal: {type: Boolean, default: false},
            kosher: {type: Boolean, default: false},
            vegan: {type: Boolean, default: false},
            vegetarian: {type: Boolean, default: false}
        } 
    },   
});

mongoose.model("donations", DonateSchema)