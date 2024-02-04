const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const orderRoutes = require("./routes/orderRoutes");
const stripe = require("stripe")("sk_test_51Nw5ZFGtDzrOQD3FjkoGtgSoJ3LHqVJpeOaSzmheaJ1AYjYQpTFlMRLnmaGou70X9pKAmm6uDWHCazqdA1SQxmI3005nIkhCkU");

const {
  notFound,
  errrorHandler,
} = require("./middleware/errorHandlerMiddleware.js");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(notFound);
app.use(errrorHandler);

app.use("/api", userRoutes);
app.use("/api", carRoutes);
app.use("/api", orderRoutes);

app.post("/send-email", (req, res) => {
  const config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD
    },
  };
  const transporter = nodemailer.createTransport(config);

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});




app.get("/success/:id", async (req, res) => {
  try {
    // Retrieve payment intent or session details from Stripe
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    res.send(session)
    // Check if payment was successful
    // if (session.payment_status === "paid") {
      // Send email on payment success
      // sendEmail(session.customer_email, "Payment Successful");
  
      // Respond to the client
      // res.json({ success: true });
    // } else {
      // res.status(400).json({ error: "Payment not successful" });
    // }
  } catch (error) {
    console.error("Error handling success:", error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});





app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
