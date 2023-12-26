const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true,
      },
      dirver: {type: Boolean, default: false},
      car: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'cars'
      },
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users'
      },
      bookedTimeSlots :{
        from:{type:String},
        to:{type:String}
      },
      totalHours:{type:Number},
      totalAmount:{type:Number},
      transactionId:{type:String},
      driverRequired:{type:Boolean},
      pickupAddress:{type:String},
      place:{type:String}
},
{timestamps:true}
);


const BookingModel = mongoose.model('bookingModel', bookingSchema);

module.exports = BookingModel;