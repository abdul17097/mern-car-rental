const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/carRoutes");
const orderRoutes = require("./routes/orderRoutes");

const {
  notFound,
  errrorHandler,
} = require("./middleware/errorHandlerMiddleware.js");
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
