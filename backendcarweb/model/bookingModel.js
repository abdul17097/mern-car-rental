const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String },
    driver: { type: Boolean, default: false },
    car: { type: mongoose.Schema.Types.ObjectId, ref: "cars" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    totalHours: { type: Number },
    totalDriverDayPrice: { type: Number },
    bookedTimeSlots: {
      from: { type: String },
      to: { type: String },
    },
    startTime: { type: String },
    endTime: { type: String },
    totalAmount: { type: Number },
    transactionId: { type: String, unique: true },
    emailSend: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const BookingModel = mongoose.model("bookingModel", bookingSchema);

module.exports = BookingModel;
