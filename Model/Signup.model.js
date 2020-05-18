const mongoose= require('mongoose');
let SignupSchema = new mongoose.Schema({
    timestamp :{type: Date, default: Date.now},
    name : String,
    password:String,
    email : {
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        
    },
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
    
});

SignupSchema.path('phone').validate(function (value) {
    console.log(value.length)
    if (value.length > 10 || value.length<10) {
      throw new Error("Assigned person's size can't be greater than 10!");
    }
  });

SignupSchema.plugin(require('mongoose-unique-validator'))
mongoose.model("signups",SignupSchema)
