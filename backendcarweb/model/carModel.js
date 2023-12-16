const mongoose = require('mongoose');
const carSchema = new mongoose.Schema({
    'name': {
        type: String,
        // required: true  
    },
    'catagory': {
        type: String,
        // required: true
    },
    'image':{
        type: String
    },
    'year': {
        type: String,
    },
    'color': {
        type: String,
    },
    'mileage': {
        type: String,
    },
    'transmission': {
        type: String,
    },
    'maxSpeed': {
        type: Number,
    },
    'feulType': {
        type: String,
        // required: true
    },
    'price': {
        type: Number,
    },
    'seat': { type: String},
    'reverseCamera': { type: Boolean, default: false },
    'bluetooth': { type: Boolean, default: false},
    'fmRadio': { type: Boolean, default: false},
    'climateControl': { type: Boolean, default: false}
 
     
});

const Car = mongoose.model('cars', carSchema);



module.exports = { Car};