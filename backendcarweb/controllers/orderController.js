const Order = require("../model/bookingModel");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const nodemailer = require("nodemailer");
const User = require("../model/userModel");

const order = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "pkr",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `http://localhost:5173/success`,
      cancel_url: `http://localhost:5173/singlecar/${req.body.id}`,
    });

    res.json({ session: session });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getOrderDetails = async (req,res) => {
//     try {
//         // Retrieve payment intent or session details from Stripe
//         const session = await stripe.checkout.sessions.retrieve(req.body.id);
//         res.send(session)
//         // Check if payment was successful
//         // if (session.payment_status === "paid") {
//           // Send email on payment success
//           // sendEmail(session.customer_email, "Payment Successful");

//           // Respond to the client
//           // res.json({ success: true });
//         // } else {
//           // res.status(400).json({ error: "Payment not successful" });
//         // }
//       } catch (error) {
//         console.error("Error handling success:", error);
//         res.status(500).json({ error: "Internal server error", details: error.message });
//       }
// }

const sendEmail = async (req, res) => {
  const {
    name,
    driver,
    carId,
    userId,
    totalDriverDayPrice,
    totalHours,
    pickupDate,
    dropOffDate,
    pickUpHour,
    dropOffHour,
    totalPrice,
    paymentID,
    emailSend,
  } = req.body;
  try {
    const checkOrder = await Order.findOne({ transactionId: paymentID });
    if (!checkOrder) {
      console.log(
        name,
        driver,
        carId,
        totalHours,
        userId,
        totalDriverDayPrice,
        pickupDate,
        dropOffDate,
        pickUpHour,
        dropOffHour,
        totalPrice,
        paymentID,
        emailSend
      );
      // Create a new booking
      const newBooking = new Order({
        name,
        driver,
        car: carId,
        user: userId,
        totalHours: totalHours,
        totalDriverDayPrice,
        bookedTimeSlots: { from: pickupDate, to: dropOffDate },
        startTime: pickUpHour,
        endTime: dropOffHour,
        totalAmount: totalPrice,
        transactionId: paymentID,
        emailSend,
      });
      await newBooking.save();
      const user = await User.findOne({ _id: userId });
      if (user && user.email) {
        await sendMail(user.email, {
          name,
          driver,
          totalDriverDayPrice,
          pickupDate,
          dropOffDate,
          pickUpHour,
          dropOffHour,
          totalPrice,
          paymentID,
        });
      }
      console.log(user.email);

      // Send response with the new booking data
      res.status(200).json({ data: newBooking });
    } else {
      // If the transaction ID already exists, return an error
      res
        .status(409)
        .json({ error: "Order with the given transactionId already exists" });
    }
  } catch (error) {
    // console.error('Error creating new booking:', error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const sendMail = (email, data) => {
  const config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "",
    html: generateHtmlTemplate(data),
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const generateHtmlTemplate = (data) => {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
          /* Include your inline styles here */
        </style>
      </head>
      <body>
        <div class="container">
          <h2>Booking Confirmation</h2>
          <p>Dear Customer,</p>
          <p>Your booking has been confirmed with the following details:</p>
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Driver:</strong> ${data.driver ? "Yes" : "No"}</li>
            <li><strong>Total Driver Day Price:</strong> ${
              data.totalDriverDayPrice
            }</li>
            <li><strong>Pickup Date:</strong> ${data.pickupDate}</li>
            <li><strong>Drop-off Date:</strong> ${data.dropOffDate}</li>
            <li><strong>Pickup Time:</strong> ${data.pickUpHour}</li>
            <li><strong>Drop-off Time:</strong> ${data.dropOffHour}</li>
            <li><strong>Total Price:</strong> ${data.totalPrice}</li>
            <li><strong>Payment ID:</strong> ${data.paymentID}</li>
          </ul>
          <p>Thank you for choosing our service.</p>
        </div>
      </body>
      </html>
    `;
};

const getSingleOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const check = await (
      await Order.findOne({ _id: orderId }).populate("user")
    ).populate("car");
    if (check) {
      res.status(200).json({ success: true, check });
    } else {
      res.status(404).json({ success: false, message: "Order not Found" });
    }
  } catch (error) {
    res.status(404).json({ success: false, message: "Something went wrong" });
  }
};

const allOrder = async (req, res) => {
  try {
    // Fetch all orders and populate car and user fields
    const orders = await Order.find()
      .populate({
        path: "user",
        select: "name email userphone",
      })
      .populate({
        path: "car",
        select: "bookedTimeSlots catagory image name",
      });
    console.log(orders);
    res.status(200).json({ orders, orders });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const allBookingsByUser = async (req, res) => {
  try {
    const { id } = req.params;

    const bookings = await Order.find({ user: id }).populate("car");

    if (bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for the user.", success: false });
    }

    res.json({ bookings, success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
module.exports = {
  order,
  allOrder,
  getSingleOrder,
  sendEmail,
  allBookingsByUser,
};
