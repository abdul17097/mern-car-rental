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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
