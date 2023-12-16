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
      totalPrice: {
          type: Number,
          required: true
      },
      orderDate: {
          type: Date,
          default: Date.now
      }
});


const BookingModel = mongoose.model('bookingModel', bookingSchema);

module.exports = BookingModel;