const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
      name: {type: String},
      dirver: {type: Boolean, default: false},
      car: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Car'
      },
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      },
      totalDriverDayPrice: {type: Number},
      bookedTimeSlots :{
        from:{type:String},
        to:{type:String}
      },
      startTime: {type: String},
      endTime: {type: String},
      totalHours:{type:Number},
      totalAmount:{type:Number},
      transactionId:{type:String, unique: true},
      driverRequired:{type:Boolean},
      emailSend: {
        type: Boolean,
        default: false,
      }
      
    },
{timestamps:true}
);


const BookingModel = mongoose.model('bookingModel', bookingSchema);

module.exports = BookingModel;