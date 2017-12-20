const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create geolocation schema
const GeoSchema = new Schema({
    type : {
        type : String,
        default : "Point"
    },
    coordinates : {
        type: [Number],
        index: "2dsphere"
    }
});


//Create ninja schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type : Boolean,
        default : false
    },
    geometry: GeoSchema
    
});

//create ninja model based on ninja schema
const Ninja = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;
