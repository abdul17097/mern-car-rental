const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    dropeOffHour: {
        type: Number,
    },
    pickUpHour: {
        type: Number,
    },
    driver:{
        type: Boolean,
        default: false
    },
    totalDriverDayPrice: {
        type: Number,
        default: 0
    },
    unitPrice: {
        type: Number,
        required: true
    },
    pickupData: {
        type: String,
        default: null
    },
    dropoffDate: {
        type: String,
        default: null
    },
    day:{
        type: Number,
    },
    emailSend: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        requried: true
    },
    car: [{
        type: Schema.Types.ObjectId,
        ref: "Car",
        required: true
    }]
    

})

